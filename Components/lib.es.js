var G0 = Object.defineProperty;
var X0 = (e, t, n) => t in e ? G0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Fe = (e, t, n) => X0(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import U, { useDebugValue as bc, createElement as Y0, useRef as Se, useContext as wt, createContext as fi, useEffect as qe, isValidElement as K0, version as J0, useLayoutEffect as Q0, forwardRef as rr, useState as lt, useMemo as Nr, Children as Z0, useImperativeHandle as Tu } from "react";
import * as Ru from "react-dom";
import _c from "react-dom";
var wr = Do;
(function(e, t) {
  for (var n = Do, r = e(); ; )
    try {
      var o = -parseInt(n(382)) / 1 + parseInt(n(389)) / 2 + -parseInt(n(401)) / 3 * (-parseInt(n(400)) / 4) + -parseInt(n(396)) / 5 * (parseInt(n(397)) / 6) + -parseInt(n(388)) / 7 + parseInt(n(376)) / 8 + parseInt(n(384)) / 9;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 132618);
typeof globalThis !== wr(392) || typeof window !== wr(392) || (typeof global !== wr(392) ? global : wr(392));
function eh(e) {
  var t = wr;
  return e && e[t(402)] && Object[t(395)][t(385) + t(377)][t(381)](e, t(391)) ? e[t(391)] : e;
}
function Do(e, t) {
  var n = Bo();
  return Do = function(r, o) {
    r = r - 375;
    var i = n[r];
    return i;
  }, Do(e, t);
}
function Bo() {
  var e = ["ptor", "call", "89968UClVha", "function", "2722581nXWuLT", "hasOwnProp", "get", "length", "1836660iDbsYO", "36372TKsLMx", "keys", "default", "undefined", "forEach", "construct", "prototype", "15YkExYL", "297690ocoGgO", "getOwnProp", "ertyDescri", "16MOmdeK", "137601OONkpq", "__esModule", "value", "constructo", "1037184iqveoS", "erty", "apply", "defineProp"];
  return Bo = function() {
    return e;
  }, Bo();
}
var Qr = { exports: {} }, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc;
function th() {
  if (Sc) return xr;
  Sc = 1;
  var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: u, ref: v, props: d, _owner: o.current };
  }
  return xr.Fragment = n, xr.jsx = s, xr.jsxs = s, xr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function nh() {
  return Cc || (Cc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function p(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = g && m[g] || m[h];
      return typeof M == "function" ? M : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(m) {
      {
        for (var M = arguments.length, V = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
          V[oe - 1] = arguments[oe];
        x("error", m, V);
      }
    }
    function x(m, M, V) {
      {
        var oe = _.ReactDebugCurrentFrame, ve = oe.getStackAddendum();
        ve !== "" && (M += "%s", V = V.concat([ve]));
        var we = V.map(function(he) {
          return String(he);
        });
        we.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, we);
      }
    }
    var E = !1, y = !1, A = !1, O = !1, k = !1, B;
    B = Symbol.for("react.module.reference");
    function W(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || k || m === o || m === l || m === f || O || m === v || E || y || A || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === B || m.getModuleId !== void 0));
    }
    function ne(m, M, V) {
      var oe = m.displayName;
      if (oe)
        return oe;
      var ve = M.displayName || M.name || "";
      return ve !== "" ? V + "(" + ve + ")" : V;
    }
    function Q(m) {
      return m.displayName || "Context";
    }
    function D(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case n:
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
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var M = m;
            return Q(M) + ".Consumer";
          case s:
            var V = m;
            return Q(V._context) + ".Provider";
          case c:
            return ne(m, m.render, "ForwardRef");
          case d:
            var oe = m.displayName || null;
            return oe !== null ? oe : D(m.type) || "Memo";
          case u: {
            var ve = m, we = ve._payload, he = ve._init;
            try {
              return D(he(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, K = 0, N, $, P, j, H, z, G;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function J() {
      {
        if (K === 0) {
          N = console.log, $ = console.info, P = console.warn, j = console.error, H = console.group, z = console.groupCollapsed, G = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        K++;
      }
    }
    function se() {
      {
        if (K--, K === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, m, {
              value: N
            }),
            info: X({}, m, {
              value: $
            }),
            warn: X({}, m, {
              value: P
            }),
            error: X({}, m, {
              value: j
            }),
            group: X({}, m, {
              value: H
            }),
            groupCollapsed: X({}, m, {
              value: z
            }),
            groupEnd: X({}, m, {
              value: G
            })
          });
        }
        K < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = _.ReactCurrentDispatcher, ce;
    function Ce(m, M, V) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (ve) {
            var oe = ve.stack.trim().match(/\n( *(at )?)/);
            ce = oe && oe[1] || "";
          }
        return `
` + ce + m;
      }
    }
    var pe = !1, Ie;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new $e();
    }
    function R(m, M) {
      if (!m || pe)
        return "";
      {
        var V = Ie.get(m);
        if (V !== void 0)
          return V;
      }
      var oe;
      pe = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = ae.current, ae.current = null, J();
      try {
        if (M) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (ft) {
              oe = ft;
            }
            Reflect.construct(m, [], he);
          } else {
            try {
              he.call();
            } catch (ft) {
              oe = ft;
            }
            m.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            oe = ft;
          }
          m();
        }
      } catch (ft) {
        if (ft && oe && typeof ft.stack == "string") {
          for (var fe = ft.stack.split(`
`), st = oe.stack.split(`
`), De = fe.length - 1, He = st.length - 1; De >= 1 && He >= 0 && fe[De] !== st[He]; )
            He--;
          for (; De >= 1 && He >= 0; De--, He--)
            if (fe[De] !== st[He]) {
              if (De !== 1 || He !== 1)
                do
                  if (De--, He--, He < 0 || fe[De] !== st[He]) {
                    var ze = `
` + fe[De].replace(" at new ", " at ");
                    return m.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", m.displayName)), typeof m == "function" && Ie.set(m, ze), ze;
                  }
                while (De >= 1 && He >= 0);
              break;
            }
        }
      } finally {
        pe = !1, ae.current = we, se(), Error.prepareStackTrace = ve;
      }
      var Ln = m ? m.displayName || m.name : "", gn = Ln ? Ce(Ln) : "";
      return typeof m == "function" && Ie.set(m, gn), gn;
    }
    function re(m, M, V) {
      return R(m, !1);
    }
    function T(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function F(m, M, V) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return R(m, T(m));
      if (typeof m == "string")
        return Ce(m);
      switch (m) {
        case l:
          return Ce("Suspense");
        case f:
          return Ce("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return re(m.render);
          case d:
            return F(m.type, M, V);
          case u: {
            var oe = m, ve = oe._payload, we = oe._init;
            try {
              return F(we(ve), M, V);
            } catch {
            }
          }
        }
      return "";
    }
    var S = Object.prototype.hasOwnProperty, Z = {}, _e = _.ReactDebugCurrentFrame;
    function Le(m) {
      if (m) {
        var M = m._owner, V = F(m.type, m._source, M ? M.type : null);
        _e.setExtraStackFrame(V);
      } else
        _e.setExtraStackFrame(null);
    }
    function gt(m, M, V, oe, ve) {
      {
        var we = Function.call.bind(S);
        for (var he in m)
          if (we(m, he)) {
            var fe = void 0;
            try {
              if (typeof m[he] != "function") {
                var st = Error((oe || "React class") + ": " + V + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              fe = m[he](M, he, oe, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (De) {
              fe = De;
            }
            fe && !(fe instanceof Error) && (Le(ve), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", V, he, typeof fe), Le(null)), fe instanceof Error && !(fe.message in Z) && (Z[fe.message] = !0, Le(ve), b("Failed %s type: %s", V, fe.message), Le(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ae(m) {
      return Me(m);
    }
    function Ke(m) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, V = M && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return V;
      }
    }
    function ut(m) {
      try {
        return ct(m), !1;
      } catch {
        return !0;
      }
    }
    function ct(m) {
      return "" + m;
    }
    function Ft(m) {
      if (ut(m))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(m)), ct(m);
    }
    var L = _.ReactCurrentOwner, C = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, xe;
    function ke(m) {
      if (S.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function de(m) {
      if (S.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function et(m, M) {
      typeof m.ref == "string" && L.current;
    }
    function We(m, M) {
      {
        var V = function() {
          me || (me = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function Re(m, M) {
      {
        var V = function() {
          xe || (xe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var tt = function(m, M, V, oe, ve, we, he) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: M,
        ref: V,
        props: he,
        // Record the component responsible for creating this element.
        _owner: we
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function Vt(m, M, V, oe, ve) {
      {
        var we, he = {}, fe = null, st = null;
        V !== void 0 && (Ft(V), fe = "" + V), de(M) && (Ft(M.key), fe = "" + M.key), ke(M) && (st = M.ref, et(M, ve));
        for (we in M)
          S.call(M, we) && !C.hasOwnProperty(we) && (he[we] = M[we]);
        if (m && m.defaultProps) {
          var De = m.defaultProps;
          for (we in De)
            he[we] === void 0 && (he[we] = De[we]);
        }
        if (fe || st) {
          var He = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          fe && We(he, He), st && Re(he, He);
        }
        return tt(m, fe, st, ve, oe, L.current, he);
      }
    }
    var hn = _.ReactCurrentOwner, Je = _.ReactDebugCurrentFrame;
    function je(m) {
      if (m) {
        var M = m._owner, V = F(m.type, m._source, M ? M.type : null);
        Je.setExtraStackFrame(V);
      } else
        Je.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function jt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Zt() {
      {
        if (hn.current) {
          var m = D(hn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Nn(m) {
      return "";
    }
    var pn = {};
    function kn(m) {
      {
        var M = Zt();
        if (!M) {
          var V = typeof m == "string" ? m : m.displayName || m.name;
          V && (M = `

Check the top-level render call using <` + V + ">.");
        }
        return M;
      }
    }
    function xn(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var V = kn(M);
        if (pn[V])
          return;
        pn[V] = !0;
        var oe = "";
        m && m._owner && m._owner !== hn.current && (oe = " It was passed a child from " + D(m._owner.type) + "."), je(m), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, oe), je(null);
      }
    }
    function jn(m, M) {
      {
        if (typeof m != "object")
          return;
        if (Ae(m))
          for (var V = 0; V < m.length; V++) {
            var oe = m[V];
            jt(oe) && xn(oe, M);
          }
        else if (jt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ve = p(m);
          if (typeof ve == "function" && ve !== m.entries)
            for (var we = ve.call(m), he; !(he = we.next()).done; )
              jt(he.value) && xn(he.value, M);
        }
      }
    }
    function en(m) {
      {
        var M = m.type;
        if (M == null || typeof M == "string")
          return;
        var V;
        if (typeof M == "function")
          V = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === d))
          V = M.propTypes;
        else
          return;
        if (V) {
          var oe = D(M);
          gt(V, m.props, "prop", oe, m);
        } else if (M.PropTypes !== void 0 && !bt) {
          bt = !0;
          var ve = D(M);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(m) {
      {
        for (var M = Object.keys(m.props), V = 0; V < M.length; V++) {
          var oe = M[V];
          if (oe !== "children" && oe !== "key") {
            je(m), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), je(null);
            break;
          }
        }
        m.ref !== null && (je(m), b("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var pr = {};
    function Kr(m, M, V, oe, ve, we) {
      {
        var he = W(m);
        if (!he) {
          var fe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = Nn();
          st ? fe += st : fe += Zt();
          var De;
          m === null ? De = "null" : Ae(m) ? De = "array" : m !== void 0 && m.$$typeof === t ? (De = "<" + (D(m.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : De = typeof m, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", De, fe);
        }
        var He = Vt(m, M, V, ve, we);
        if (He == null)
          return He;
        if (he) {
          var ze = M.children;
          if (ze !== void 0)
            if (oe)
              if (Ae(ze)) {
                for (var Ln = 0; Ln < ze.length; Ln++)
                  jn(ze[Ln], m);
                Object.freeze && Object.freeze(ze);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(ze, m);
        }
        if (S.call(M, "key")) {
          var gn = D(m), ft = Object.keys(M).filter(function(W0) {
            return W0 !== "key";
          }), Xi = ft.length > 0 ? "{key: someKey, " + ft.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[gn + Xi]) {
            var q0 = ft.length > 0 ? "{" + ft.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xi, gn, q0, gn), pr[gn + Xi] = !0;
          }
        }
        return m === r ? tn(He) : en(He), He;
      }
    }
    function Qe(m, M, V) {
      return Kr(m, M, V, !0);
    }
    function Jr(m, M, V) {
      return Kr(m, M, V, !1);
    }
    var Gi = Jr, Be = Qe;
    gr.Fragment = r, gr.jsx = Gi, gr.jsxs = Be;
  }()), gr;
}
var wc;
function rh() {
  return wc || (wc = 1, process.env.NODE_ENV === "production" ? Qr.exports = th() : Qr.exports = nh()), Qr.exports;
}
var ee = rh(), dt = function() {
  return dt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, dt.apply(this, arguments);
};
function Un(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function oh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ih = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sh = /* @__PURE__ */ oh(
  function(e) {
    return ih.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ne = "-ms-", Rr = "-moz-", Te = "-webkit-", Au = "comm", di = "rule", Da = "decl", ah = "@import", $u = "@keyframes", ch = "@layer", Pu = Math.abs, Ba = String.fromCharCode, Ts = Object.assign;
function lh(e, t) {
  return it(e, 0) ^ 45 ? (((t << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function Iu(e) {
  return e.trim();
}
function Gt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ue(e, t, n) {
  return e.replace(t, n);
}
function vo(e, t, n) {
  return e.indexOf(t, n);
}
function it(e, t) {
  return e.charCodeAt(t) | 0;
}
function qn(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function Nu(e) {
  return e.length;
}
function Er(e, t) {
  return t.push(e), e;
}
function uh(e, t) {
  return e.map(t).join("");
}
function Ec(e, t) {
  return e.filter(function(n) {
    return !Gt(n, t);
  });
}
var hi = 1, Wn = 1, ku = 0, Et = 0, Ge = 0, or = "";
function pi(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hi, column: Wn, length: s, return: "", siblings: a };
}
function nn(e, t) {
  return Ts(pi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Mn(e) {
  for (; e.root; )
    e = nn(e.root, { children: [e] });
  Er(e, e.siblings);
}
function fh() {
  return Ge;
}
function dh() {
  return Ge = Et > 0 ? it(or, --Et) : 0, Wn--, Ge === 10 && (Wn = 1, hi--), Ge;
}
function At() {
  return Ge = Et < ku ? it(or, Et++) : 0, Wn++, Ge === 10 && (Wn = 1, hi++), Ge;
}
function wn() {
  return it(or, Et);
}
function yo() {
  return Et;
}
function xi(e, t) {
  return qn(or, e, t);
}
function Rs(e) {
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
function hh(e) {
  return hi = Wn = 1, ku = Dt(or = e), Et = 0, [];
}
function ph(e) {
  return or = "", e;
}
function Yi(e) {
  return Iu(xi(Et - 1, As(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xh(e) {
  for (; (Ge = wn()) && Ge < 33; )
    At();
  return Rs(e) > 2 || Rs(Ge) > 3 ? "" : " ";
}
function gh(e, t) {
  for (; --t && At() && !(Ge < 48 || Ge > 102 || Ge > 57 && Ge < 65 || Ge > 70 && Ge < 97); )
    ;
  return xi(e, yo() + (t < 6 && wn() == 32 && At() == 32));
}
function As(e) {
  for (; At(); )
    switch (Ge) {
      // ] ) " '
      case e:
        return Et;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && As(Ge);
        break;
      // (
      case 40:
        e === 41 && As(e);
        break;
      // \
      case 92:
        At();
        break;
    }
  return Et;
}
function mh(e, t) {
  for (; At() && e + Ge !== 57; )
    if (e + Ge === 84 && wn() === 47)
      break;
  return "/*" + xi(t, Et - 1) + "*" + Ba(e === 47 ? e : At());
}
function vh(e) {
  for (; !Rs(wn()); )
    At();
  return xi(e, Et);
}
function yh(e) {
  return ph(bo("", null, null, null, [""], e = hh(e), 0, [0], e));
}
function bo(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, p = 1, _ = 1, b = 0, x = "", E = o, y = i, A = r, O = x; p; )
    switch (g = b, b = At()) {
      // (
      case 40:
        if (g != 108 && it(O, d - 1) == 58) {
          vo(O += ue(Yi(b), "&", "&\f"), "&\f", Pu(l ? a[l - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        O += Yi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        O += xh(g);
        break;
      // \
      case 92:
        O += gh(yo() - 1, 7);
        continue;
      // /
      case 47:
        switch (wn()) {
          case 42:
          case 47:
            Er(bh(mh(At(), yo()), t, n, c), c);
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Dt(O) * _;
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
            _ == -1 && (O = ue(O, /\f/g, "")), v > 0 && Dt(O) - d && Er(v > 32 ? Tc(O + ";", r, n, d - 1, c) : Tc(ue(O, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (Er(A = Oc(O, t, n, l, f, o, a, x, E = [], y = [], d, i), i), b === 123)
              if (f === 0)
                bo(O, t, A, A, E, i, d, a, y);
              else
                switch (u === 99 && it(O, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bo(e, A, A, r && Er(Oc(e, A, A, 0, 0, o, a, x, o, E = [], d, y), y), o, y, d, a, r ? E : y);
                    break;
                  default:
                    bo(O, A, A, A, [""], y, 0, a, y);
                }
        }
        l = f = v = 0, h = _ = 1, x = O = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Dt(O), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && dh() == 125)
            continue;
        }
        switch (O += Ba(b), b * h) {
          // &
          case 38:
            _ = f > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Dt(O) - 1) * _, _ = 1;
            break;
          // @
          case 64:
            wn() === 45 && (O += Yi(At())), u = wn(), f = d = Dt(x = O += vh(yo())), b++;
            break;
          // -
          case 45:
            g === 45 && Dt(O) == 2 && (h = 0);
        }
    }
  return i;
}
function Oc(e, t, n, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = Nu(v), h = 0, p = 0, _ = 0; h < r; ++h)
    for (var b = 0, x = qn(e, u + 1, u = Pu(p = s[h])), E = e; b < g; ++b)
      (E = Iu(p > 0 ? v[b] + " " + x : ue(x, /&\f/g, v[b]))) && (c[_++] = E);
  return pi(e, t, n, o === 0 ? di : a, c, l, f, d);
}
function bh(e, t, n, r) {
  return pi(e, t, n, Au, Ba(fh()), qn(e, 2, -2), 0, r);
}
function Tc(e, t, n, r, o) {
  return pi(e, t, n, Da, qn(e, 0, r), qn(e, r + 1, -1), r, o);
}
function ju(e, t, n) {
  switch (lh(e, t)) {
    // color-adjust
    case 5103:
      return Te + "print-" + e + e;
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
      return Te + e + e;
    // tab-size
    case 4789:
      return Rr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Te + e + Rr + e + Ne + e + e;
    // writing-mode
    case 5936:
      switch (it(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Te + e + Ne + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Te + e + Ne + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Te + e + Ne + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Te + e + Ne + e + e;
    // order
    case 6165:
      return Te + e + Ne + "flex-" + e + e;
    // align-items
    case 5187:
      return Te + e + ue(e, /(\w+).+(:[^]+)/, Te + "box-$1$2" + Ne + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Te + e + Ne + "flex-item-" + ue(e, /flex-|-self/g, "") + (Gt(e, /flex-|baseline/) ? "" : Ne + "grid-row-" + ue(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Te + e + Ne + "flex-line-pack" + ue(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Te + e + Ne + ue(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Te + e + Ne + ue(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Te + "box-" + ue(e, "-grow", "") + Te + e + Ne + ue(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Te + ue(e, /([^-])(transform)/g, "$1" + Te + "$2") + e;
    // cursor
    case 6187:
      return ue(ue(ue(e, /(zoom-|grab)/, Te + "$1"), /(image-set)/, Te + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, Te + "$1$`$1");
    // justify-content
    case 4968:
      return ue(ue(e, /(.+:)(flex-)?(.*)/, Te + "box-pack:$3" + Ne + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Te + e + e;
    // justify-self
    case 4200:
      if (!Gt(e, /flex-|baseline/)) return Ne + "grid-column-align" + qn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ne + ue(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Gt(r.props, /grid-\w+-end/);
      }) ? ~vo(e + (n = n[t].value), "span", 0) ? e : Ne + ue(e, "-start", "") + e + Ne + "grid-row-span:" + (~vo(n, "span", 0) ? Gt(n, /\d+/) : +Gt(n, /\d+/) - +Gt(e, /\d+/)) + ";" : Ne + ue(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Gt(r.props, /grid-\w+-start/);
      }) ? e : Ne + ue(ue(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, Te + "$1$2") + e;
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
      if (Dt(e) - 1 - t > 6)
        switch (it(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (it(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ue(e, /(.+:)(.+)-([^]+)/, "$1" + Te + "$2-$3$1" + Rr + (it(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~vo(e, "stretch", 0) ? ju(ue(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ue(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Ne + o + ":" + i + l + (s ? Ne + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (it(e, t + 6) === 121)
        return ue(e, ":", ":" + Te) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (it(e, it(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ue(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Te + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Te + "$2$3$1" + Ne + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return ue(e, ":", ":" + Ne) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ue(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ho(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function _h(e, t, n, r) {
  switch (e.type) {
    case ch:
      if (e.children.length) break;
    case ah:
    case Da:
      return e.return = e.return || e.value;
    case Au:
      return "";
    case $u:
      return e.return = e.value + "{" + Ho(e.children, r) + "}";
    case di:
      if (!Dt(e.value = e.props.join(","))) return "";
  }
  return Dt(n = Ho(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Sh(e) {
  var t = Nu(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Ch(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function wh(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Da:
        e.return = ju(e.value, e.length, n);
        return;
      case $u:
        return Ho([nn(e, { value: ue(e.value, "@", "@" + Te) })], r);
      case di:
        if (e.length)
          return uh(n = e.props, function(o) {
            switch (Gt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Mn(nn(e, { props: [ue(o, /:(read-\w+)/, ":" + Rr + "$1")] })), Mn(nn(e, { props: [o] })), Ts(e, { props: Ec(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Mn(nn(e, { props: [ue(o, /:(plac\w+)/, ":" + Te + "input-$1")] })), Mn(nn(e, { props: [ue(o, /:(plac\w+)/, ":" + Rr + "$1")] })), Mn(nn(e, { props: [ue(o, /:(plac\w+)/, Ne + "input-$1")] })), Mn(nn(e, { props: [o] })), Ts(e, { props: Ec(n, r) });
                break;
            }
            return "";
          });
    }
}
var Eh = {
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
}, $n = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Lu = "active", Mu = "data-styled-version", gi = "6.1.18", Ha = `/*!sc*/
`, zo = typeof window < "u" && typeof document < "u", Oh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Rc = /invalid hook call/i, Zr = /* @__PURE__ */ new Set(), Th = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Rc.test(s) ? (i = !1, Zr.delete(r)) : o.apply(void 0, Un([s], a, !1));
      }, Se(), i && !Zr.has(r) && (console.warn(r), Zr.add(r));
    } catch (s) {
      Rc.test(s.message) && Zr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, mi = Object.freeze([]), Gn = Object.freeze({});
function Rh(e, t, n) {
  return n === void 0 && (n = Gn), e.theme !== n.theme && e.theme || t || n.theme;
}
var $s = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ah = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $h = /(^-|-$)/g;
function Ac(e) {
  return e.replace(Ah, "-").replace($h, "");
}
var Ph = /(a)(d)/gi, eo = 52, $c = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ps(e) {
  var t, n = "";
  for (t = Math.abs(e); t > eo; t = t / eo | 0) n = $c(t % eo) + n;
  return ($c(t % eo) + n).replace(Ph, "$1-$2");
}
var Ki, Du = 5381, vn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Bu = function(e) {
  return vn(Du, e);
};
function Ih(e) {
  return Ps(Bu(e) >>> 0);
}
function Hu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ji(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var zu = typeof Symbol == "function" && Symbol.for, Fu = zu ? Symbol.for("react.memo") : 60115, Nh = zu ? Symbol.for("react.forward_ref") : 60112, kh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Vu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Lh = ((Ki = {})[Nh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[Fu] = Vu, Ki);
function Pc(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Fu ? Vu : "$$typeof" in e ? Lh[e.$$typeof] : kh;
  var t;
}
var Mh = Object.defineProperty, Dh = Object.getOwnPropertyNames, Ic = Object.getOwnPropertySymbols, Bh = Object.getOwnPropertyDescriptor, Hh = Object.getPrototypeOf, Nc = Object.prototype;
function Uu(e, t, n) {
  if (typeof t != "string") {
    if (Nc) {
      var r = Hh(t);
      r && r !== Nc && Uu(e, r, n);
    }
    var o = Dh(t);
    Ic && (o = o.concat(Ic(t)));
    for (var i = Pc(e), s = Pc(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in jh || n && n[c] || s && c in s || i && c in i)) {
        var l = Bh(t, c);
        try {
          Mh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Xn(e) {
  return typeof e == "function";
}
function za(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function bn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function kc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Yn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Is(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Yn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Is(e[r], t[r]);
  else if (Yn(t)) for (var r in t) e[r] = Is(e[r], t[r]);
  return e;
}
function Fa(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var zh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Fh() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function ir(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Fh.apply(void 0, Un([zh[e]], t, !1)).trim());
}
var Vh = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw ir(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, n.length); s < c; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Ha);
    return n;
  }, e;
}(), Uh = 1 << 30, _o = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), So = 1, to = function(e) {
  if (_o.has(e)) return _o.get(e);
  for (; Fo.has(So); ) So++;
  var t = So++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Uh)) throw ir(16, "".concat(t));
  return _o.set(e, t), Fo.set(t, e), t;
}, qh = function(e, t) {
  So = t + 1, _o.set(e, t), Fo.set(t, e);
}, Wh = "style[".concat($n, "][").concat(Mu, '="').concat(gi, '"]'), Gh = new RegExp("^".concat($n, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Xh = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Yh = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Ha), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Gh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (qh(f, l), Xh(e, f, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, jc = function(e) {
  for (var t = document.querySelectorAll(Wh), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute($n) !== Lu && (Yh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Kh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qu = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat($n, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute($n, Lu), r.setAttribute(Mu, gi);
  var s = Kh();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Jh = function() {
  function e(t) {
    this.element = qu(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw ir(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Qh = function() {
  function e(t) {
    this.element = qu(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Zh = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Lc = zo, ep = { isServer: !zo, useCSSOMInjection: !Oh }, Wu = function() {
  function e(t, n, r) {
    t === void 0 && (t = Gn), n === void 0 && (n = {});
    var o = this;
    this.options = dt(dt({}, ep), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && zo && Lc && (Lc = !1, jc(this)), Fa(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(_) {
            return Fo.get(_);
          }(d);
          if (u === void 0) return "continue";
          var v = i.names.get(u), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat($n, ".g").concat(d, '[id="').concat(u, '"]'), p = "";
          v !== void 0 && v.forEach(function(_) {
            _.length > 0 && (p += "".concat(_, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(p, '"}').concat(Ha);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return to(t);
  }, e.prototype.rehydrate = function() {
    !this.server && zo && jc(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(dt(dt({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Zh(o) : r ? new Jh(o) : new Qh(o);
    }(this.options), new Vh(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (to(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(to(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(to(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), tp = /&/g, np = /^\s*\/\/.*$/gm;
function Gu(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Gu(n.children, t)), n;
  });
}
function rp(e) {
  var t, n, r, o = Gn, i = o.options, s = i === void 0 ? Gn : i, a = o.plugins, c = a === void 0 ? mi : a, l = function(u, v, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === di && u.value.includes("&") && (u.props[0] = u.props[0].replace(tp, n).replace(r, l));
  }), s.prefix && f.push(wh), f.push(_h);
  var d = function(u, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), t = h, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var p = u.replace(np, ""), _ = yh(g || v ? "".concat(g, " ").concat(v, " { ").concat(p, " }") : p);
    s.namespace && (_ = Gu(_, s.namespace));
    var b = [];
    return Ho(_, Sh(f.concat(Ch(function(x) {
      return b.push(x);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || ir(15), vn(u, v.name);
  }, Du).toString() : "", d;
}
var op = new Wu(), Ns = rp(), Xu = U.createContext({ shouldForwardProp: void 0, styleSheet: op, stylis: Ns });
Xu.Consumer;
U.createContext(void 0);
function Mc() {
  return wt(Xu);
}
var Dc = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ns);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Fa(this, function() {
      throw ir(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ns), this.name + t.hash;
  }, e;
}(), ip = function(e) {
  return e >= "A" && e <= "Z";
};
function Bc(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ip(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Yu = function(e) {
  return e == null || e === !1 || e === "";
}, Ku = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Yu(i) && (Array.isArray(i) && i.isCss || Xn(i) ? r.push("".concat(Bc(o), ":"), i, ";") : Yn(i) ? r.push.apply(r, Un(Un(["".concat(o, " {")], Ku(i), !1), ["}"], !1)) : r.push("".concat(Bc(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Eh || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function En(e, t, n, r) {
  if (Yu(e)) return [];
  if (za(e)) return [".".concat(e.styledComponentId)];
  if (Xn(e)) {
    if (!Xn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Dc || Yn(o) || o === null || console.error("".concat(Hu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), En(o, t, n, r);
  }
  var i;
  return e instanceof Dc ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Yn(e) ? Ku(e) : Array.isArray(e) ? Array.prototype.concat.apply(mi, e.map(function(s) {
    return En(s, t, n, r);
  })) : [e.toString()];
}
function sp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Xn(n) && !za(n)) return !1;
  }
  return !0;
}
var ap = Bu(gi), cp = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && sp(t), this.componentId = n, this.baseHash = vn(ap, n), this.baseStyle = r, Wu.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = bn(o, this.staticRulesId);
    else {
      var i = kc(En(this.rules, t, n, r)), s = Ps(vn(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = bn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = vn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = vn(c, d));
        else if (d) {
          var u = kc(En(d, t, n, r));
          c = vn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = Ps(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = bn(o, v);
      }
    }
    return o;
  }, e;
}(), Ju = U.createContext(void 0);
Ju.Consumer;
var Qi = {}, Hc = /* @__PURE__ */ new Set();
function lp(e, t, n) {
  var r = za(e), o = e, i = !Ji(e), s = t.attrs, a = s === void 0 ? mi : s, c = t.componentId, l = c === void 0 ? function(E, y) {
    var A = typeof E != "string" ? "sc" : Ac(E);
    Qi[A] = (Qi[A] || 0) + 1;
    var O = "".concat(A, "-").concat(Ih(gi + A + Qi[A]));
    return y ? "".concat(y, "-").concat(O) : O;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(E) {
    return Ji(E) ? "styled.".concat(E) : "Styled(".concat(Hu(E), ")");
  }(e) : f, u = t.displayName && t.componentId ? "".concat(Ac(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var p = t.shouldForwardProp;
      g = function(E, y) {
        return h(E, y) && p(E, y);
      };
    } else g = h;
  }
  var _ = new cp(n, u, r ? o.componentStyle : void 0);
  function b(E, y) {
    return function(A, O, k) {
      var B = A.attrs, W = A.componentStyle, ne = A.defaultProps, Q = A.foldedComponentIds, D = A.styledComponentId, X = A.target, K = U.useContext(Ju), N = Mc(), $ = A.shouldForwardProp || N.shouldForwardProp;
      process.env.NODE_ENV !== "production" && bc(D);
      var P = Rh(O, K, ne) || Gn, j = function(se, ae, ce) {
        for (var Ce, pe = dt(dt({}, ae), { className: void 0, theme: ce }), Ie = 0; Ie < se.length; Ie += 1) {
          var $e = Xn(Ce = se[Ie]) ? Ce(pe) : Ce;
          for (var R in $e) pe[R] = R === "className" ? bn(pe[R], $e[R]) : R === "style" ? dt(dt({}, pe[R]), $e[R]) : $e[R];
        }
        return ae.className && (pe.className = bn(pe.className, ae.className)), pe;
      }(B, O, P), H = j.as || X, z = {};
      for (var G in j) j[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" && j.theme === P || (G === "forwardedAs" ? z.as = j.forwardedAs : $ && !$(G, H) || (z[G] = j[G], $ || process.env.NODE_ENV !== "development" || sh(G) || Hc.has(G) || !$s.has(H) || (Hc.add(G), console.warn('styled-components: it looks like an unknown prop "'.concat(G, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(se, ae) {
        var ce = Mc(), Ce = se.generateAndInjectStyles(ae, ce.styleSheet, ce.stylis);
        return process.env.NODE_ENV !== "production" && bc(Ce), Ce;
      }(W, j);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(te);
      var J = bn(Q, D);
      return te && (J += " " + te), j.className && (J += " " + j.className), z[Ji(H) && !$s.has(H) ? "class" : "className"] = J, k && (z.ref = k), Y0(H, z);
    }(x, E, y);
  }
  b.displayName = d;
  var x = U.forwardRef(b);
  return x.attrs = v, x.componentStyle = _, x.displayName = d, x.shouldForwardProp = g, x.foldedComponentIds = r ? bn(o.foldedComponentIds, o.styledComponentId) : "", x.styledComponentId = u, x.target = r ? o.target : e, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(y) {
      for (var A = [], O = 1; O < arguments.length; O++) A[O - 1] = arguments[O];
      for (var k = 0, B = A; k < B.length; k++) Is(y, B[k], !0);
      return y;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Th(d, u), x.warnTooManyClasses = /* @__PURE__ */ function(E, y) {
    var A = {}, O = !1;
    return function(k) {
      if (!O && (A[k] = !0, Object.keys(A).length >= 200)) {
        var B = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), O = !0, A = {};
      }
    };
  }(d, u)), Fa(x, function() {
    return ".".concat(x.styledComponentId);
  }), i && Uu(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function zc(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Fc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function up(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Xn(e) || Yn(e)) return Fc(En(zc(mi, Un([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? En(r) : Fc(En(zc(r, t)));
}
function ks(e, t, n) {
  if (n === void 0 && (n = Gn), !t) throw ir(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, up.apply(void 0, Un([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ks(e, t, dt(dt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ks(e, t, dt(dt({}, n), o));
  }, r;
}
var Qu = function(e) {
  return ks(lp, e);
}, Nt = Qu;
$s.forEach(function(e) {
  Nt[e] = Qu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var no = "__sc-".concat($n, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[no] || (window[no] = 0), window[no] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[no] += 1);
const Fr = Vo;
(function(e, t) {
  const n = Vo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(244)) / 1 * (parseInt(n(246)) / 2) + -parseInt(n(249)) / 3 + parseInt(n(247)) / 4 + -parseInt(n(250)) / 5 + parseInt(n(240)) / 6 + -parseInt(n(241)) / 7 * (-parseInt(n(248)) / 8) + -parseInt(n(243)) / 9 * (parseInt(n(252)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 868373);
const fp = Nt[Fr(242)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
function Vo(e, t) {
  const n = Uo();
  return Vo = function(r, o) {
    return r = r - 240, n[r];
  }, Vo(e, t);
}
const dp = Nt[Fr(242)]`
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
function Uo() {
  const e = ["1477995OnACCS", "span", "2HfMQyD", "4029928krKNJq", "200TcWnRZ", "47634UbGxUz", "2838400oRLhoO", "canvas", "20ZmjzLE", "6515202ncSElf", "413161GeEqow", "div", "2875491MWlNjU"];
  return Uo = function() {
    return e;
  }, Uo();
}
const hp = Nt[Fr(251)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, pp = Nt[Fr(245)]`
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
`, xp = Nt[Fr(242)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Zu = /* @__PURE__ */ fi({});
var Zi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Vc;
function gp() {
  return Vc || (Vc = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
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
          return n.apply(null, i);
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
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Zi)), Zi.exports;
}
var mp = gp();
const ye = /* @__PURE__ */ eh(mp), vp = {
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
}, nt = Math.round;
function es(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Uc = (e, t, n) => n === 0 ? e : e / 100;
function mr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let ro = class ef {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    Fe(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    Fe(this, "r", 0);
    /**
     * Green, G in RGB
     */
    Fe(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    Fe(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    Fe(this, "a", 1);
    // HSV privates
    Fe(this, "_h");
    Fe(this, "_s");
    Fe(this, "_l");
    Fe(this, "_v");
    // intermediate variables to calculate HSL/HSV
    Fe(this, "_max");
    Fe(this, "_min");
    Fe(this, "_brightness");
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const i = vp[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof ef)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = mr(t.r), this.g = mr(t.g), this.b = mr(t.b), this.a = typeof t.a == "number" ? mr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
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
    const n = this.toHsv();
    return n.h = t, this._c(n);
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
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = nt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: nt(i("r")),
      g: nt(i("g")),
      b: nt(i("b")),
      a: nt(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => nt((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = nt(this.a * 255).toString(16);
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
    const t = this.getHue(), n = nt(this.getSaturation() * 100), r = nt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = mr(n, r), o;
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
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const u = nt(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = nt((i + d) * 255), this.g = nt((s + d) * 255), this.b = nt((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = nt(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = nt(r * (1 - n) * 255), f = nt(r * (1 - n * c) * 255), d = nt(r * (1 - n * (1 - c)) * 255);
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
    const n = es(t, Uc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = es(t, Uc);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = es(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? nt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
const oo = 2, qc = 0.16, yp = 0.05, bp = 0.05, _p = 0.15, tf = 5, nf = 4, Sp = [{
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
function Wc(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - oo * t : Math.round(e.h) + oo * t : r = n ? Math.round(e.h) + oo * t : Math.round(e.h) - oo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Gc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - qc * t : t === nf ? r = e.s + qc : r = e.s + yp * t, r > 1 && (r = 1), n && t === tf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Xc(e, t, n) {
  let r;
  return n ? r = e.v + bp * t : r = e.v - _p * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Cp(e, t = {}) {
  const n = [], r = new ro(e), o = r.toHsv();
  for (let i = tf; i > 0; i -= 1) {
    const s = new ro({
      h: Wc(o, i, !0),
      s: Gc(o, i, !0),
      v: Xc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (let i = 1; i <= nf; i += 1) {
    const s = new ro({
      h: Wc(o, i),
      s: Gc(o, i),
      v: Xc(o, i)
    });
    n.push(s);
  }
  return t.theme === "dark" ? Sp.map(({
    index: i,
    amount: s
  }) => new ro(t.backgroundColor || "#141414").mix(n[i], s).toHexString()) : n.map((i) => i.toHexString());
}
const js = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
js.primary = js[5];
function wp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ep(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const Yc = "data-rc-order", Kc = "data-rc-priority", Op = "rc-util-key", Ls = /* @__PURE__ */ new Map();
function rf({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Op;
}
function Va(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Tp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ua(e) {
  return Array.from((Ls.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function of(e, t = {}) {
  if (!wp())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, i = Tp(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Yc, i), s && o && a.setAttribute(Kc, `${o}`), n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce), a.innerHTML = e;
  const c = Va(t), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const f = (t.styles || Ua(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Yc)))
          return !1;
        const u = Number(d.getAttribute(Kc) || 0);
        return o >= u;
      });
      if (f.length)
        return c.insertBefore(a, f[f.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function Rp(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = Ua(Va(t))), n.find((r) => r.getAttribute(rf(t)) === e);
}
function Ap(e, t) {
  const n = Ls.get(e);
  if (!n || !Ep(document, n)) {
    const r = of("", t), {
      parentNode: o
    } = r;
    Ls.set(e, o), e.removeChild(r);
  }
}
function $p(e, t, n = {}) {
  var c, l, f;
  const r = Va(n), o = Ua(r), i = {
    ...n,
    styles: o
  };
  Ap(r, i);
  const s = Rp(t, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (f = i.csp) == null ? void 0 : f.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = of(e, i);
  return a.setAttribute(rf(i), t), a;
}
function sf(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function Pp(e) {
  return sf(e) instanceof ShadowRoot;
}
function Ip(e) {
  return Pp(e) ? sf(e) : null;
}
let Ms = {};
const qa = [], Np = (e) => {
  qa.push(e);
};
function kp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = qa.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function jp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = qa.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function Lp() {
  Ms = {};
}
function af(e, t, n) {
  !t && !Ms[n] && (e(!1, n), Ms[n] = !0);
}
function vi(e, t) {
  af(kp, e, t);
}
function Mp(e, t) {
  af(jp, e, t);
}
vi.preMessage = Np;
vi.resetWarned = Lp;
vi.noteOnce = Mp;
function Dp(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function Bp(e, t) {
  vi(e, `[@ant-design/icons] ${t}`);
}
function Jc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Qc(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Dp(n)] = r;
    }
    return t;
  }, {});
}
function Ds(e, t, n) {
  return n ? /* @__PURE__ */ U.createElement(e.tag, {
    key: t,
    ...Qc(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => Ds(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ U.createElement(e.tag, {
    key: t,
    ...Qc(e.attrs)
  }, (e.children || []).map((r, o) => Ds(r, `${t}-${e.tag}-${o}`)));
}
function cf(e) {
  return Cp(e)[0];
}
function lf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Hp = `
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
`, zp = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = wt(Zu);
  let o = Hp;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), qe(() => {
    const i = e.current, s = Ip(i);
    $p(o, "@ant-design-icons", {
      prepend: !r,
      csp: t,
      attachTo: s
    });
  }, []);
}, Ar = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Fp({
  primaryColor: e,
  secondaryColor: t
}) {
  Ar.primaryColor = e, Ar.secondaryColor = t || cf(e), Ar.calculated = !!t;
}
function Vp() {
  return {
    ...Ar
  };
}
const sr = (e) => {
  const {
    icon: t,
    className: n,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = w.useRef();
  let l = Ar;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || cf(i)
  }), zp(c), Bp(Jc(t), `icon should be icon definiton, but got ${t}`), !Jc(t))
    return null;
  let f = t;
  return f && typeof f.icon == "function" && (f = {
    ...f,
    icon: f.icon(l.primaryColor, l.secondaryColor)
  }), Ds(f.icon, `svg-${f.name}`, {
    className: n,
    onClick: r,
    style: o,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...a,
    ref: c
  });
};
sr.displayName = "IconReact";
sr.getTwoToneColors = Vp;
sr.setTwoToneColors = Fp;
function uf(e) {
  const [t, n] = lf(e);
  return sr.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function Up() {
  const e = sr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
uf(js.primary);
const yi = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: n,
    // affect inner <svg>...</svg>
    icon: r,
    spin: o,
    rotate: i,
    tabIndex: s,
    onClick: a,
    // other
    twoToneColor: c,
    ...l
  } = e, {
    prefixCls: f = "anticon",
    rootClassName: d
  } = w.useContext(Zu), u = ye(d, f, {
    [`${f}-${r.name}`]: !!r.name,
    [`${f}-spin`]: !!o || r.name === "loading"
  }, n);
  let v = s;
  v === void 0 && a && (v = -1);
  const g = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [h, p] = lf(c);
  return /* @__PURE__ */ w.createElement("span", Bs({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: v,
    onClick: a,
    className: u
  }), /* @__PURE__ */ w.createElement(sr, {
    icon: r,
    primaryColor: h,
    secondaryColor: p,
    style: g
  }));
});
yi.displayName = "AntdIcon";
yi.getTwoToneColor = Up;
yi.setTwoToneColor = uf;
var qp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Wp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Gp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Xp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Yp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Kp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Jp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
const Qp = (e, t) => /* @__PURE__ */ w.createElement(yi, Hs({}, e, {
  ref: t,
  icon: Jp
})), ff = /* @__PURE__ */ w.forwardRef(Qp);
process.env.NODE_ENV !== "production" && (ff.displayName = "ReloadOutlined");
var io = { exports: {} }, Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function Zp() {
  if (Zc) return Ee;
  Zc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var _ = p.$$typeof;
      switch (_) {
        case e:
          switch (p = p.type, p) {
            case n:
            case o:
            case r:
            case l:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case c:
                case u:
                case d:
                case i:
                  return p;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return Ee.ContextConsumer = s, Ee.ContextProvider = i, Ee.Element = e, Ee.ForwardRef = c, Ee.Fragment = n, Ee.Lazy = u, Ee.Memo = d, Ee.Portal = t, Ee.Profiler = o, Ee.StrictMode = r, Ee.Suspense = l, Ee.SuspenseList = f, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(p) {
    return h(p) === s;
  }, Ee.isContextProvider = function(p) {
    return h(p) === i;
  }, Ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ee.isForwardRef = function(p) {
    return h(p) === c;
  }, Ee.isFragment = function(p) {
    return h(p) === n;
  }, Ee.isLazy = function(p) {
    return h(p) === u;
  }, Ee.isMemo = function(p) {
    return h(p) === d;
  }, Ee.isPortal = function(p) {
    return h(p) === t;
  }, Ee.isProfiler = function(p) {
    return h(p) === o;
  }, Ee.isStrictMode = function(p) {
    return h(p) === r;
  }, Ee.isSuspense = function(p) {
    return h(p) === l;
  }, Ee.isSuspenseList = function(p) {
    return h(p) === f;
  }, Ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === l || p === f || p === v || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
  }, Ee.typeOf = h, Ee;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function ex() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, p = !1, _ = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function E(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === n || T === o || b || T === r || T === l || T === f || _ || T === v || g || h || p || typeof T == "object" && T !== null && (T.$$typeof === u || T.$$typeof === d || T.$$typeof === i || T.$$typeof === s || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === x || T.getModuleId !== void 0));
    }
    function y(T) {
      if (typeof T == "object" && T !== null) {
        var F = T.$$typeof;
        switch (F) {
          case e:
            var S = T.type;
            switch (S) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return S;
              default:
                var Z = S && S.$$typeof;
                switch (Z) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return Z;
                  default:
                    return F;
                }
            }
          case t:
            return F;
        }
      }
    }
    var A = s, O = i, k = e, B = c, W = n, ne = u, Q = d, D = t, X = o, K = r, N = l, $ = f, P = !1, j = !1;
    function H(T) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(T) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(T) {
      return y(T) === s;
    }
    function te(T) {
      return y(T) === i;
    }
    function J(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function se(T) {
      return y(T) === c;
    }
    function ae(T) {
      return y(T) === n;
    }
    function ce(T) {
      return y(T) === u;
    }
    function Ce(T) {
      return y(T) === d;
    }
    function pe(T) {
      return y(T) === t;
    }
    function Ie(T) {
      return y(T) === o;
    }
    function $e(T) {
      return y(T) === r;
    }
    function R(T) {
      return y(T) === l;
    }
    function re(T) {
      return y(T) === f;
    }
    Oe.ContextConsumer = A, Oe.ContextProvider = O, Oe.Element = k, Oe.ForwardRef = B, Oe.Fragment = W, Oe.Lazy = ne, Oe.Memo = Q, Oe.Portal = D, Oe.Profiler = X, Oe.StrictMode = K, Oe.Suspense = N, Oe.SuspenseList = $, Oe.isAsyncMode = H, Oe.isConcurrentMode = z, Oe.isContextConsumer = G, Oe.isContextProvider = te, Oe.isElement = J, Oe.isForwardRef = se, Oe.isFragment = ae, Oe.isLazy = ce, Oe.isMemo = Ce, Oe.isPortal = pe, Oe.isProfiler = Ie, Oe.isStrictMode = $e, Oe.isSuspense = R, Oe.isSuspenseList = re, Oe.isValidElementType = E, Oe.typeOf = y;
  }()), Oe;
}
var tl;
function tx() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? io.exports = Zp() : io.exports = ex()), io.exports;
}
var ts = tx();
const Bt = /* @__PURE__ */ Object.create(null);
Bt.open = "0";
Bt.close = "1";
Bt.ping = "2";
Bt.pong = "3";
Bt.message = "4";
Bt.upgrade = "5";
Bt.noop = "6";
const Co = /* @__PURE__ */ Object.create(null);
Object.keys(Bt).forEach((e) => {
  Co[Bt[e]] = e;
});
const zs = { type: "error", data: "parser error" }, df = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", hf = typeof ArrayBuffer == "function", pf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Wa = ({ type: e, data: t }, n, r) => df && t instanceof Blob ? n ? r(t) : nl(t, r) : hf && (t instanceof ArrayBuffer || pf(t)) ? n ? r(t) : nl(new Blob([t]), r) : r(Bt[e] + (t || "")), nl = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function rl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ns;
function nx(e, t) {
  if (df && e.data instanceof Blob)
    return e.data.arrayBuffer().then(rl).then(t);
  if (hf && (e.data instanceof ArrayBuffer || pf(e.data)))
    return t(rl(e.data));
  Wa(e, !1, (n) => {
    ns || (ns = new TextEncoder()), t(ns.encode(n));
  });
}
const ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ol.length; e++)
  Or[ol.charCodeAt(e)] = e;
const rx = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), f = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = Or[e.charCodeAt(r)], s = Or[e.charCodeAt(r + 1)], a = Or[e.charCodeAt(r + 2)], c = Or[e.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
}, ox = typeof ArrayBuffer == "function", Ga = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: xf(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: ix(e.substring(1), t)
  } : Co[n] ? e.length > 1 ? {
    type: Co[n],
    data: e.substring(1)
  } : {
    type: Co[n]
  } : zs;
}, ix = (e, t) => {
  if (ox) {
    const n = rx(e);
    return xf(n, t);
  } else
    return { base64: !0, data: e };
}, xf = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, gf = "", sx = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    Wa(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(gf));
    });
  });
}, ax = (e, t) => {
  const n = e.split(gf), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = Ga(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function cx() {
  return new TransformStream({
    transform(e, t) {
      nx(e, (n) => {
        const r = n.length;
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
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(n);
      });
    }
  });
}
let rs;
function so(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function ao(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function lx(e, t) {
  rs || (rs = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (so(n) < 1)
            break;
          const c = ao(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (so(n) < 2)
            break;
          const c = ao(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (so(n) < 8)
            break;
          const c = ao(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(zs);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (so(n) < o)
            break;
          const c = ao(n, o);
          a.enqueue(Ga(i ? c : rs.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(zs);
          break;
        }
      }
    }
  });
}
const mf = 4;
function Ye(e) {
  if (e) return ux(e);
}
function ux(e) {
  for (var t in Ye.prototype)
    e[t] = Ye.prototype[t];
  return e;
}
Ye.prototype.on = Ye.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ye.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === t || r.fn === t) {
      n.splice(o, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
Ye.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r)
      n[r].apply(this, t);
  }
  return this;
};
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ye.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const bi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), St = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), fx = "arraybuffer";
function vf(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const dx = St.setTimeout, hx = St.clearTimeout;
function _i(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = dx.bind(St), e.clearTimeoutFn = hx.bind(St)) : (e.setTimeoutFn = St.setTimeout.bind(St), e.clearTimeoutFn = St.clearTimeout.bind(St));
}
const px = 1.33;
function xx(e) {
  return typeof e == "string" ? gx(e) : Math.ceil((e.byteLength || e.size) * px);
}
function gx(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function yf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function mx(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function vx(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class yx extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Xa extends Ye {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, _i(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, n, r) {
    return super.emitReserved("error", new yx(t, n, r)), this;
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
    const n = Ga(t, this.socket.binaryType);
    this.onPacket(n);
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
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = mx(t);
    return n.length ? "?" + n : "";
  }
}
class bx extends Xa {
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
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
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
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    ax(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, sx(t, (n) => {
      this.doWrite(n, () => {
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
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = yf()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let bf = !1;
try {
  bf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const _x = bf;
function Sx() {
}
class Cx extends bx {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (o, i) => {
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
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
let zn = class wo extends Ye {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, _i(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = vf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
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
    typeof document < "u" && (this._index = wo.requestsCount++, wo.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Sx, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete wo.requests[this._index], this._xhr = null;
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
zn.requestsCount = 0;
zn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", il);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in St ? "pagehide" : "unload";
    addEventListener(e, il, !1);
  }
}
function il() {
  for (let e in zn.requests)
    zn.requests.hasOwnProperty(e) && zn.requests[e].abort();
}
const wx = function() {
  const e = _f({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Ex extends Cx {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = wx && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new zn(_f, this.uri(), t);
  }
}
function _f(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || _x))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new St[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Sf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ox extends Xa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Sf ? {} : vf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
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
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      Wa(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && bi(() => {
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = yf()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const os = St.WebSocket || St.MozWebSocket;
class Tx extends Ox {
  createSocket(t, n, r) {
    return Sf ? new os(t, n, r) : n ? new os(t, n) : new os(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Rx extends Xa {
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
        const n = lx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = cx();
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
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      this._writer.write(r).then(() => {
        o && bi(() => {
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
const Ax = {
  websocket: Tx,
  webtransport: Rx,
  polling: Ex
}, $x = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Px = [
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
function Fs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = $x.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Px[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Ix(i, i.path), i.queryKey = Nx(i, i.query), i;
}
function Ix(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Nx(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const Vs = typeof addEventListener == "function" && typeof removeEventListener == "function", Eo = [];
Vs && addEventListener("offline", () => {
  Eo.forEach((e) => e());
}, !1);
class an extends Ye {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = fx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Fs(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Fs(n.host).host);
    _i(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vx(this.opts.query)), Vs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Eo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = mf, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
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
    const t = this.opts.rememberUpgrade && an.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", an.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
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
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (n += xx(o)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
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
    return t && (this._pingTimeoutTime = 0, bi(() => {
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
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
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
  _sendPacket(t, n, r, o) {
    if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: t,
      data: n,
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
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
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
    if (an.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Eo.indexOf(this._offlineEventListener);
        r !== -1 && Eo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
an.protocol = mf;
class kx extends an {
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
    let n = this.createTransport(t), r = !1;
    an.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            an.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = n.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function i() {
      r || (r = !0, f(), n.close(), n = null);
    }
    const s = (d) => {
      const u = new Error("probe error: " + d);
      u.transport = n.name, i(), this.emitReserved("upgradeError", u);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(d) {
      n && d.name !== n.name && i();
    }
    const f = () => {
      n.removeListener("open", o), n.removeListener("error", s), n.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    n.once("open", o), n.once("error", s), n.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
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
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let jx = class extends kx {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Ax[o]).filter((o) => !!o)), super(t, r);
  }
};
function Lx(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Fs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Mx = typeof ArrayBuffer == "function", Dx = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Cf = Object.prototype.toString, Bx = typeof Blob == "function" || typeof Blob < "u" && Cf.call(Blob) === "[object BlobConstructor]", Hx = typeof File == "function" || typeof File < "u" && Cf.call(File) === "[object FileConstructor]";
function Ya(e) {
  return Mx && (e instanceof ArrayBuffer || Dx(e)) || Bx && e instanceof Blob || Hx && e instanceof File;
}
function Oo(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (Oo(e[n]))
        return !0;
    return !1;
  }
  if (Ya(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Oo(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Oo(e[n]))
      return !0;
  return !1;
}
function zx(e) {
  const t = [], n = e.data, r = e;
  return r.data = Us(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Us(e, t) {
  if (!e)
    return e;
  if (Ya(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Us(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Us(e[r], t));
    return n;
  }
  return e;
}
function Fx(e, t) {
  return e.data = qs(e.data, t), delete e.attachments, e;
}
function qs(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = qs(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = qs(e[n], t));
  return e;
}
const Vx = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Ux = 5;
var ge;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ge || (ge = {}));
class qx {
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
    return (t.type === ge.EVENT || t.type === ge.ACK) && Oo(t) ? this.encodeAsBinary({
      type: t.type === ge.EVENT ? ge.BINARY_EVENT : ge.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === ge.BINARY_EVENT || t.type === ge.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = zx(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function sl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ka extends Ye {
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
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === ge.BINARY_EVENT;
      r || n.type === ge.BINARY_ACK ? (n.type = r ? ge.EVENT : ge.ACK, this.reconstructor = new Wx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ya(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
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
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (ge[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ge.BINARY_EVENT || r.type === ge.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const s = t.substring(i, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(i, n);
    } else
      r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (Ka.isPayloadValid(r.type, i))
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
  static isPayloadValid(t, n) {
    switch (t) {
      case ge.CONNECT:
        return sl(n);
      case ge.DISCONNECT:
        return n === void 0;
      case ge.CONNECT_ERROR:
        return typeof n == "string" || sl(n);
      case ge.EVENT:
      case ge.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Vx.indexOf(n[0]) === -1);
      case ge.ACK:
      case ge.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Wx {
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
      const n = Fx(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
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
const Gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ka,
  Encoder: qx,
  get PacketType() {
    return ge;
  },
  protocol: Ux
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const Xx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class wf extends Ye {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
      Tt(t, "open", this.onopen.bind(this)),
      Tt(t, "packet", this.onpacket.bind(this)),
      Tt(t, "error", this.onerror.bind(this)),
      Tt(t, "close", this.onclose.bind(this))
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
  emit(t, ...n) {
    var r, o, i;
    if (Xx.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: ge.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const f = this.ids++, d = n.pop();
      this._registerAckCallback(f, d), s.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), n.apply(this, a);
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
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, n.push(i), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
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
      type: ge.CONNECT,
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
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
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
        case ge.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ge.EVENT:
        case ge.BINARY_EVENT:
          this.onevent(t);
          break;
        case ge.ACK:
        case ge.BINARY_ACK:
          this.onack(t);
          break;
        case ge.DISCONNECT:
          this.ondisconnect();
          break;
        case ge.CONNECT_ERROR:
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
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
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
    const n = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, n.packet({
        type: ge.ACK,
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
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: ge.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function ar(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
ar.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
ar.prototype.reset = function() {
  this.attempts = 0;
};
ar.prototype.setMin = function(e) {
  this.ms = e;
};
ar.prototype.setMax = function(e) {
  this.max = e;
};
ar.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ws extends Ye {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, _i(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new ar({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || Gx;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
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
    this.engine = new jx(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Tt(n, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = Tt(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), n.close();
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
      Tt(t, "ping", this.onping.bind(this)),
      Tt(t, "data", this.ondata.bind(this)),
      Tt(t, "error", this.onerror.bind(this)),
      Tt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Tt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    bi(() => {
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
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new wf(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
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
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
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
  onclose(t, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, n);
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
const vr = {};
function To(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = Lx(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = vr[o] && i in vr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Ws(r, t) : (vr[o] || (vr[o] = new Ws(r, t)), c = vr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(To, {
  Manager: Ws,
  Socket: wf,
  io: To,
  connect: To
});
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ht.apply(null, arguments);
}
function be(e) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, be(e);
}
var Yx = Symbol.for("react.element"), Kx = Symbol.for("react.transitional.element"), Jx = Symbol.for("react.fragment");
function Qx(e) {
  return (
    // Base object type
    e && be(e) === "object" && // React Element type
    (e.$$typeof === Yx || e.$$typeof === Kx) && // React Fragment type
    e.type === Jx
  );
}
var Gs = {}, Ja = [], Zx = function(t) {
  Ja.push(t);
};
function Qa(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ja.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function e1(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ja.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Ef() {
  Gs = {};
}
function Of(e, t, n) {
  !t && !Gs[n] && (e(!1, n), Gs[n] = !0);
}
function un(e, t) {
  Of(Qa, e, t);
}
function t1(e, t) {
  Of(e1, e, t);
}
un.preMessage = Zx;
un.resetWarned = Ef;
un.noteOnce = t1;
function n1(e, t) {
  if (be(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tf(e) {
  var t = n1(e, "string");
  return be(t) == "symbol" ? t : t + "";
}
function q(e, t, n) {
  return (t = Tf(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function al(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(n), !0).forEach(function(r) {
      q(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function r1(e) {
  return e && be(e) === "object" && cl(e.nativeElement) ? e.nativeElement : cl(e) ? e : null;
}
function o1(e) {
  var t = r1(e);
  if (t)
    return t;
  if (e instanceof U.Component) {
    var n;
    return (n = _c.findDOMNode) === null || n === void 0 ? void 0 : n.call(_c, e);
  }
  return null;
}
function Za(e, t, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var i1 = Number(J0.split(".")[0]), Rf = function(t, n) {
  typeof t == "function" ? t(n) : be(t) === "object" && t && "current" in t && (t.current = n);
}, Si = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      Rf(s, i);
    });
  };
}, s1 = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Za(function() {
    return Si.apply(void 0, n);
  }, n, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, Af = function(t) {
  var n, r;
  if (!t)
    return !1;
  if ($f(t) && i1 >= 19)
    return !0;
  var o = ts.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ts.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ts.ForwardRef);
};
function $f(e) {
  return /* @__PURE__ */ K0(e) && !Qx(e);
}
var Pf = function(t) {
  if (t && $f(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function vt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tf(r.key), r);
  }
}
function yt(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xs(e, t) {
  return Xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xs(e, t);
}
function cr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Xs(e, t);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Kn(e);
}
function ec() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ec = function() {
    return !!e;
  })();
}
function On(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function If(e, t) {
  if (t && (be(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return On(e);
}
function Vr(e) {
  var t = ec();
  return function() {
    var n, r = Kn(e);
    if (t) {
      var o = Kn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return If(this, n);
  };
}
function Ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function a1(e) {
  if (Array.isArray(e)) return Ys(e);
}
function Nf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tc(e, t) {
  if (e) {
    if (typeof e == "string") return Ys(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ys(e, t) : void 0;
  }
}
function c1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e) {
  return a1(e) || Nf(e) || tc(e) || c1();
}
var kf = function(t) {
  return +setTimeout(t, 16);
}, jf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (kf = function(t) {
  return window.requestAnimationFrame(t);
}, jf = function(t) {
  return window.cancelAnimationFrame(t);
});
var ul = 0, Ci = /* @__PURE__ */ new Map();
function Lf(e) {
  Ci.delete(e);
}
var cn = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ul += 1;
  var r = ul;
  function o(i) {
    if (i === 0)
      Lf(r), t();
    else {
      var s = kf(function() {
        o(i - 1);
      });
      Ci.set(r, s);
    }
  }
  return o(n), r;
};
cn.cancel = function(e) {
  var t = Ci.get(e);
  return Lf(e), jf(t);
};
process.env.NODE_ENV !== "production" && (cn.ids = function() {
  return Ci;
});
function Mf(e) {
  if (Array.isArray(e)) return e;
}
function l1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function Df() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ie(e, t) {
  return Mf(e) || l1(e, t) || tc(e, t) || Df();
}
function kr(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function u1(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var fl = "data-rc-order", dl = "data-rc-priority", f1 = "rc-util-key", Ks = /* @__PURE__ */ new Map();
function Bf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : f1;
}
function wi(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function d1(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function nc(e) {
  return Array.from((Ks.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Hf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Jt())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = d1(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(fl, s), a && i && c.setAttribute(dl, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = wi(t), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || nc(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(fl)))
          return !1;
        var v = Number(u.getAttribute(dl) || 0);
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
function zf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = wi(t);
  return (t.styles || nc(n)).find(function(r) {
    return r.getAttribute(Bf(t)) === e;
  });
}
function Ff(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = zf(e, t);
  if (n) {
    var r = wi(t);
    r.removeChild(n);
  }
}
function h1(e, t) {
  var n = Ks.get(e);
  if (!n || !u1(document, n)) {
    var r = Hf("", t), o = r.parentNode;
    Ks.set(e, o), e.removeChild(r);
  }
}
function Tn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = wi(n), o = nc(r), i = Y(Y({}, n), {}, {
    styles: o
  });
  h1(r, i);
  var s = zf(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var f = Hf(e, i);
  return f.setAttribute(Bf(i), t), f;
}
function p1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Pn(e, t) {
  if (e == null) return {};
  var n, r, o = p1(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function x1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (un(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (n && a > 1)
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
    if (i && s && be(i) === "object" && be(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var g1 = "%";
function Js(e) {
  return e.join(g1);
}
var m1 = /* @__PURE__ */ function() {
  function e(t) {
    vt(this, e), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return yt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Js(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Js(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), Jn = "data-token-hash", $t = "data-css-hash", v1 = "data-cache-path", on = "__cssinjs_instance__";
function y1() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat($t, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[on] = o[on] || e, o[on] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat($t, "]"))).forEach(function(o) {
      var i = o.getAttribute($t);
      if (r[i]) {
        if (o[on] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new m1(e);
}
var Ur = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: y1(),
  defaultCache: !0
});
function b1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var rc = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return yt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return n.forEach(function(a) {
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
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, f) {
            var d = ie(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ie(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, f) {
        if (f === n.length - 1)
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
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var s = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), s;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !b1(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
q(rc, "MAX_CACHE_SIZE", 20);
q(rc, "MAX_CACHE_OFFSET", 5);
var hl = 0, Vf = /* @__PURE__ */ function() {
  function e(t) {
    vt(this, e), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = hl, t.length === 0 && Qa(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), hl += 1;
  }
  return yt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), is = new rc();
function Qs(e) {
  var t = Array.isArray(e) ? e : [e];
  return is.has(t) || is.set(t, new Vf(t)), is.get(t);
}
var _1 = /* @__PURE__ */ new WeakMap(), ss = {};
function S1(e, t) {
  for (var n = _1, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(ss) || n.set(ss, e()), n.get(ss);
}
var pl = /* @__PURE__ */ new WeakMap();
function $r(e) {
  var t = pl.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Vf ? t += r.id : r && be(r) === "object" ? t += $r(r) : t += r;
  }), t = kr(t), pl.set(e, t)), t;
}
function xl(e, t) {
  return kr("".concat(t, "_").concat($r(e)));
}
var Zs = Jt();
function Yt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function qo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = Y(Y({}, o), {}, (r = {}, q(r, Jn, t), q(r, $t, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Ro = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, C1 = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ie(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Uf = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = ie(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = Ro(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
    }
  }), [i, C1(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, gl = process.env.NODE_ENV !== "test" && Jt() ? w.useLayoutEffect : w.useEffect, oc = function(t, n) {
  var r = w.useRef(!0);
  gl(function() {
    return t(r.current);
  }, n), gl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ml = function(t, n) {
  oc(function(r) {
    if (!r)
      return t();
  }, n);
}, w1 = Y({}, w), vl = w1.useInsertionEffect, E1 = function(t, n, r) {
  w.useMemo(t, r), oc(function() {
    return n(!0);
  }, r);
}, O1 = vl ? function(e, t, n) {
  return vl(function() {
    return e(), t();
  }, n);
} : E1, T1 = Y({}, w), R1 = T1.useInsertionEffect, A1 = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Qa(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return w.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, $1 = function() {
  return function(t) {
    t();
  };
}, P1 = typeof R1 < "u" ? A1 : $1;
function I1() {
  return !1;
}
var ea = !1;
function N1() {
  return ea;
}
const k1 = process.env.NODE_ENV === "production" ? I1 : N1;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (co && typeof co.webpackHotUpdate == "function") {
    var j1 = co.webpackHotUpdate;
    co.webpackHotUpdate = function() {
      return ea = !0, setTimeout(function() {
        ea = !1;
      }, 0), j1.apply(void 0, arguments);
    };
  }
}
function ic(e, t, n, r, o) {
  var i = w.useContext(Ur), s = i.cache, a = [e].concat(Ht(t)), c = Js(a), l = P1([c]), f = k1(), d = function(h) {
    s.opUpdate(c, function(p) {
      var _ = p || [void 0, void 0], b = ie(_, 2), x = b[0], E = x === void 0 ? 0 : x, y = b[1], A = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(A, f), A = null);
      var O = A || n(), k = [E, O];
      return h ? h(k) : k;
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
  var u = s.opGet(c);
  process.env.NODE_ENV !== "production" && !u && (d(), u = s.opGet(c));
  var v = u[1];
  return O1(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var p = ie(h, 2), _ = p[0], b = p[1];
      return g && _ === 0 && (o == null || o(v)), [_ + 1, b];
    }), function() {
      s.opUpdate(c, function(h) {
        var p = h || [], _ = ie(p, 2), b = _[0], x = b === void 0 ? 0 : b, E = _[1], y = x - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(E, !1));
        }), null) : [x - 1, E];
      });
    };
  }, [c]), v;
}
var L1 = {}, M1 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", yn = /* @__PURE__ */ new Map();
function D1(e) {
  yn.set(e, (yn.get(e) || 0) + 1);
}
function B1(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Jn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[on] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var H1 = 0;
function z1(e, t) {
  yn.set(e, (yn.get(e) || 0) - 1);
  var n = Array.from(yn.keys()), r = n.filter(function(o) {
    var i = yn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > H1 && r.forEach(function(o) {
    B1(o, t), yn.delete(o);
  });
}
var F1 = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = Y(Y({}, i), n);
  return o && (s = o(s)), s;
}, qf = "token";
function V1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = wt(Ur), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? L1 : c, f = n.formatToken, d = n.getComputedToken, u = n.cssVar, v = S1(function() {
    return Object.assign.apply(Object, [{}].concat(Ht(t)));
  }, t), g = $r(v), h = $r(l), p = u ? $r(u) : "", _ = ic(qf, [a, e.id, g, h, p], function() {
    var b, x = d ? d(v, l, e) : F1(v, l, e, f), E = Y({}, x), y = "";
    if (u) {
      var A = Uf(x, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), O = ie(A, 2);
      x = O[0], y = O[1];
    }
    var k = xl(x, a);
    x._tokenKey = k, E._tokenKey = xl(E, a);
    var B = (b = u == null ? void 0 : u.key) !== null && b !== void 0 ? b : k;
    x._themeKey = B, D1(B);
    var W = "".concat(M1, "-").concat(kr(k));
    return x._hashId = W, [x, W, E, y, (u == null ? void 0 : u.key) || ""];
  }, function(b) {
    z1(b[0]._themeKey, o);
  }, function(b) {
    var x = ie(b, 4), E = x[0], y = x[3];
    if (u && y) {
      var A = Tn(y, kr("css-variables-".concat(E._themeKey)), {
        mark: $t,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[on] = o, A.setAttribute(Jn, E._themeKey);
    }
  });
  return _;
}
var U1 = function(t, n, r) {
  var o = ie(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = qo(s, a, f, u, l);
  return [d, f, v];
}, q1 = {
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
}, Wf = "comm", Gf = "rule", Xf = "decl", W1 = "@import", G1 = "@namespace", X1 = "@keyframes", Y1 = "@layer", Yf = Math.abs, sc = String.fromCharCode;
function Kf(e) {
  return e.trim();
}
function Ao(e, t, n) {
  return e.replace(t, n);
}
function K1(e, t, n) {
  return e.indexOf(t, n);
}
function Fn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qn(e, t, n) {
  return e.slice(t, n);
}
function Mt(e) {
  return e.length;
}
function J1(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
var Ei = 1, Zn = 1, Jf = 0, Ot = 0, Xe = 0, lr = "";
function ac(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ei, column: Zn, length: s, return: "", siblings: a };
}
function Q1() {
  return Xe;
}
function Z1() {
  return Xe = Ot > 0 ? Fn(lr, --Ot) : 0, Zn--, Xe === 10 && (Zn = 1, Ei--), Xe;
}
function Pt() {
  return Xe = Ot < Jf ? Fn(lr, Ot++) : 0, Zn++, Xe === 10 && (Zn = 1, Ei++), Xe;
}
function sn() {
  return Fn(lr, Ot);
}
function $o() {
  return Ot;
}
function Oi(e, t) {
  return Qn(lr, e, t);
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
function eg(e) {
  return Ei = Zn = 1, Jf = Mt(lr = e), Ot = 0, [];
}
function tg(e) {
  return lr = "", e;
}
function as(e) {
  return Kf(Oi(Ot - 1, ta(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ng(e) {
  for (; (Xe = sn()) && Xe < 33; )
    Pt();
  return jr(e) > 2 || jr(Xe) > 3 ? "" : " ";
}
function rg(e, t) {
  for (; --t && Pt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return Oi(e, $o() + (t < 6 && sn() == 32 && Pt() == 32));
}
function ta(e) {
  for (; Pt(); )
    switch (Xe) {
      // ] ) " '
      case e:
        return Ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ta(Xe);
        break;
      // (
      case 40:
        e === 41 && ta(e);
        break;
      // \
      case 92:
        Pt();
        break;
    }
  return Ot;
}
function og(e, t) {
  for (; Pt() && e + Xe !== 57; )
    if (e + Xe === 84 && sn() === 47)
      break;
  return "/*" + Oi(t, Ot - 1) + "*" + sc(e === 47 ? e : Pt());
}
function ig(e) {
  for (; !jr(sn()); )
    Pt();
  return Oi(e, Ot);
}
function sg(e) {
  return tg(Po("", null, null, null, [""], e = eg(e), 0, [0], e));
}
function Po(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, p = 1, _ = 1, b = 0, x = "", E = o, y = i, A = r, O = x; p; )
    switch (g = b, b = Pt()) {
      // (
      case 40:
        if (g != 108 && Fn(O, d - 1) == 58) {
          K1(O += Ao(as(b), "&", "&\f"), "&\f", Yf(l ? a[l - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        O += as(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        O += ng(g);
        break;
      // \
      case 92:
        O += rg($o() - 1, 7);
        continue;
      // /
      case 47:
        switch (sn()) {
          case 42:
          case 47:
            lo(ag(og(Pt(), $o()), t, n, c), c), (jr(g || 1) == 5 || jr(sn() || 1) == 5) && Mt(O) && Qn(O, -1, void 0) !== " " && (O += " ");
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Mt(O) * _;
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
            _ == -1 && (O = Ao(O, /\f/g, "")), v > 0 && (Mt(O) - d || h === 0 && g === 47) && lo(v > 32 ? bl(O + ";", r, n, d - 1, c) : bl(Ao(O, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (lo(A = yl(O, t, n, l, f, o, a, x, E = [], y = [], d, i), i), b === 123)
              if (f === 0)
                Po(O, t, A, A, E, i, d, a, y);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (Fn(O, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Fn(O, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? Po(e, A, A, r && lo(yl(e, A, A, 0, 0, o, a, x, o, E = [], d, y), y), o, y, d, a, r ? E : y) : Po(O, A, A, A, [""], y, 0, a, y);
              }
        }
        l = f = v = 0, h = _ = 1, x = O = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Mt(O), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && Z1() == 125)
            continue;
        }
        switch (O += sc(b), b * h) {
          // &
          case 38:
            _ = f > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Mt(O) - 1) * _, _ = 1;
            break;
          // @
          case 64:
            sn() === 45 && (O += as(Pt())), u = sn(), f = d = Mt(x = O += ig($o())), b++;
            break;
          // -
          case 45:
            g === 45 && Mt(O) == 2 && (h = 0);
        }
    }
  return i;
}
function yl(e, t, n, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = J1(v), h = 0, p = 0, _ = 0; h < r; ++h)
    for (var b = 0, x = Qn(e, u + 1, u = Yf(p = s[h])), E = e; b < g; ++b)
      (E = Kf(p > 0 ? v[b] + " " + x : Ao(x, /&\f/g, v[b]))) && (c[_++] = E);
  return ac(e, t, n, o === 0 ? Gf : a, c, l, f, d);
}
function ag(e, t, n, r) {
  return ac(e, t, n, Wf, sc(Q1()), Qn(e, 2, -2), 0, r);
}
function bl(e, t, n, r, o) {
  return ac(e, t, n, Xf, Qn(e, 0, r), Qn(e, r + 1, -1), r, o);
}
function na(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function cg(e, t, n, r) {
  switch (e.type) {
    case Y1:
      if (e.children.length) break;
    case W1:
    case G1:
    case Xf:
      return e.return = e.return || e.value;
    case Wf:
      return "";
    case X1:
      return e.return = e.value + "{" + na(e.children, r) + "}";
    case Gf:
      if (!Mt(e.value = e.props.join(","))) return "";
  }
  return Mt(n = na(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Qf(e, t) {
  var n = t.path, r = t.parentSelectors;
  un(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var lg = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Qf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, ug = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Qf("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, _l = "data-ant-cssinjs-cache-path", Zf = "_FILE_STYLE__", Rn, ed = !0;
function fg() {
  if (!Rn && (Rn = {}, Jt())) {
    var e = document.createElement("div");
    e.className = _l, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ie(i, 2), a = s[0], c = s[1];
      Rn[a] = c;
    });
    var n = document.querySelector("style[".concat(_l, "]"));
    if (n) {
      var r;
      ed = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function dg(e) {
  return fg(), !!Rn[e];
}
function hg(e) {
  var t = Rn[e], n = null;
  if (t && Jt())
    if (ed)
      n = Zf;
    else {
      var r = document.querySelector("style[".concat($t, '="').concat(Rn[e], '"]'));
      r ? n = r.innerHTML : delete Rn[e];
    }
  return [n, t];
}
var td = "_skip_check_", nd = "_multi_value_";
function Io(e) {
  var t = na(sg(e), cg);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function pg(e) {
  return be(e) === "object" && e && (td in e || nd in e);
}
function Sl(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Ht(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var xg = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, f = n.hashPriority, d = n.transformers, u = d === void 0 ? [] : d, v = n.linters, g = v === void 0 ? [] : v, h = "", p = {};
  function _(E) {
    var y = E.getName(a);
    if (!p[y]) {
      var A = e(E.style, n, {
        root: !1,
        parentSelectors: s
      }), O = ie(A, 1), k = O[0];
      p[y] = "@keyframes ".concat(E.getName(a)).concat(k);
    }
  }
  function b(E) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(A) {
      Array.isArray(A) ? b(A, y) : A && y.push(A);
    }), y;
  }
  var x = b(Array.isArray(t) ? t : [t]);
  return x.forEach(function(E) {
    var y = typeof E == "string" && !o ? {} : E;
    if (typeof y == "string")
      h += "".concat(y, `
`);
    else if (y._keyframe)
      _(y);
    else {
      var A = u.reduce(function(O, k) {
        var B;
        return (k == null || (B = k.visit) === null || B === void 0 ? void 0 : B.call(k, O)) || O;
      }, y);
      Object.keys(A).forEach(function(O) {
        var k = A[O];
        if (be(k) === "object" && k && (O !== "animationName" || !k._keyframe) && !pg(k)) {
          var B = !1, W = O.trim(), ne = !1;
          (o || i) && a ? W.startsWith("@") ? B = !0 : W === "&" ? W = Sl("", a, f) : W = Sl(O, a, f) : o && !a && (W === "&" || W === "") && (W = "", ne = !0);
          var Q = e(k, n, {
            root: ne,
            injectHash: B,
            parentSelectors: [].concat(Ht(s), [W])
          }), D = ie(Q, 2), X = D[0], K = D[1];
          p = Y(Y({}, p), K), h += "".concat(W).concat(X);
        } else {
          let P = function(j, H) {
            process.env.NODE_ENV !== "production" && (be(k) !== "object" || !(k != null && k[td])) && [lg, ug].concat(Ht(g)).forEach(function(te) {
              return te(j, H, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var z = j.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), G = H;
            !q1[j] && typeof G == "number" && G !== 0 && (G = "".concat(G, "px")), j === "animationName" && H !== null && H !== void 0 && H._keyframe && (_(H), G = H.getName(a)), h += "".concat(z, ":").concat(G, ";");
          };
          var N, $ = (N = k == null ? void 0 : k.value) !== null && N !== void 0 ? N : k;
          be(k) === "object" && k !== null && k !== void 0 && k[nd] && Array.isArray($) ? $.forEach(function(j) {
            P(O, j);
          }) : P(O, $);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, p];
};
function rd(e, t) {
  return kr("".concat(e.join("%")).concat(t));
}
function gg() {
  return null;
}
var od = "style";
function ra(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, f = w.useContext(Ur), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, p = f.ssrInline, _ = f.transformers, b = f.linters, x = f.cache, E = f.layer, y = n._tokenKey, A = [y];
  E && A.push("layer"), A.push.apply(A, Ht(r));
  var O = Zs;
  process.env.NODE_ENV !== "production" && u !== void 0 && (O = u === "client");
  var k = ic(
    od,
    A,
    // Create cache if needed
    function() {
      var D = A.join("|");
      if (dg(D)) {
        var X = hg(D), K = ie(X, 2), N = K[0], $ = K[1];
        if (N)
          return [N, y, $, {}, a, l];
      }
      var P = t(), j = xg(P, {
        hashId: o,
        hashPriority: g,
        layer: E ? i : void 0,
        path: r.join("-"),
        transformers: _,
        linters: b
      }), H = ie(j, 2), z = H[0], G = H[1], te = Io(z), J = rd(A, te);
      return [te, y, J, G, a, l];
    },
    // Remove cache if no need
    function(D, X) {
      var K = ie(D, 3), N = K[2];
      (X || d) && Zs && Ff(N, {
        mark: $t
      });
    },
    // Effect: Inject style here
    function(D) {
      var X = ie(D, 4), K = X[0];
      X[1];
      var N = X[2], $ = X[3];
      if (O && K !== Zf) {
        var P = {
          mark: $t,
          prepend: E ? !1 : "queue",
          attachTo: h,
          priority: l
        }, j = typeof s == "function" ? s() : s;
        j && (P.csp = {
          nonce: j
        });
        var H = [], z = [];
        Object.keys($).forEach(function(te) {
          te.startsWith("@layer") ? H.push(te) : z.push(te);
        }), H.forEach(function(te) {
          Tn(Io($[te]), "_layer-".concat(te), Y(Y({}, P), {}, {
            prepend: !0
          }));
        });
        var G = Tn(K, N, P);
        G[on] = x.instanceId, G.setAttribute(Jn, y), process.env.NODE_ENV !== "production" && G.setAttribute(v1, A.join("|")), z.forEach(function(te) {
          Tn(Io($[te]), "_effect-".concat(te), P);
        });
      }
    }
  ), B = ie(k, 3), W = B[0], ne = B[1], Q = B[2];
  return function(D) {
    var X;
    if (!p || O || !v)
      X = /* @__PURE__ */ w.createElement(gg, null);
    else {
      var K;
      X = /* @__PURE__ */ w.createElement("style", ht({}, (K = {}, q(K, Jn, ne), q(K, $t, Q), K), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, X, D);
  };
}
var mg = function(t, n, r) {
  var o = ie(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = qo(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var p = Io(c[h]), _ = qo(p, s, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? v = _ + v : v += _;
    }
  }), [f, a, v];
}, id = "cssVar", vg = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, f = wt(Ur), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat(Ht(t.path), [r, l, v]), h = ic(id, g, function() {
    var p = n(), _ = Uf(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ie(_, 2), x = b[0], E = b[1], y = rd(g, E);
    return [x, E, y, r];
  }, function(p) {
    var _ = ie(p, 3), b = _[2];
    Zs && Ff(b, {
      mark: $t
    });
  }, function(p) {
    var _ = ie(p, 3), b = _[1], x = _[2];
    if (b) {
      var E = Tn(b, x, {
        mark: $t,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      E[on] = d, E.setAttribute(Jn, r);
    }
  });
  return h;
}, yg = function(t, n, r) {
  var o = ie(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = qo(i, a, s, d, l);
  return [f, s, u];
}, yr;
yr = {}, q(yr, od, mg), q(yr, qf, U1), q(yr, id, yg);
var sd = /* @__PURE__ */ function() {
  function e(t, n) {
    vt(this, e), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return yt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Dn(e) {
  return e.notSplit = !0, e;
}
Dn(["borderTop", "borderBottom"]), Dn(["borderTop"]), Dn(["borderBottom"]), Dn(["borderLeft", "borderRight"]), Dn(["borderLeft"]), Dn(["borderRight"]);
var cc = /* @__PURE__ */ fi({});
function bg(e) {
  return Mf(e) || Nf(e) || tc(e) || Df();
}
function oa(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function ad(e, t, n, r) {
  if (!t.length)
    return n;
  var o = bg(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Ht(e) : a = Y({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = ad(a[i], s, n, r), a;
}
function cs(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !oa(e, t.slice(0, -1)) ? e : ad(e, t, n, r);
}
function _g(e) {
  return be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Cl(e) {
  return Array.isArray(e) ? [] : {};
}
var Sg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Cg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Cl(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = oa(o, s), f = Array.isArray(l);
      if (f || _g(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = oa(r, s);
          f ? r = cs(r, s, []) : (!d || be(d) !== "object") && (r = cs(r, s, Cl(l))), Sg(l).forEach(function(u) {
            i([].concat(Ht(s), [u]), c);
          });
        }
      } else
        r = cs(r, s, l);
    }
    i([]);
  }), r;
}
function cd() {
}
let Wt = null;
function wg() {
  Wt = null, Ef();
}
let lc = cd;
process.env.NODE_ENV !== "production" && (lc = (e, t, n) => {
  un(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && wg();
});
const ld = /* @__PURE__ */ w.createContext({}), fn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = w.useContext(ld), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = Wt;
        Wt || (Wt = {}), Wt[e] = Wt[e] || [], Wt[e].includes(i || "") || Wt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Wt);
      } else
        process.env.NODE_ENV !== "production" && lc(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = cd, e;
}, qr = lc, Eg = /* @__PURE__ */ fi(void 0), mt = "${label} is not a valid ${type}", Ti = {
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
        string: mt,
        method: mt,
        array: mt,
        object: mt,
        number: mt,
        date: mt,
        boolean: mt,
        integer: mt,
        float: mt,
        regexp: mt,
        email: mt,
        url: mt,
        hex: mt
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
Object.assign({}, Ti.Modal);
let No = [];
const wl = () => No.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ti.Modal);
function Og(e) {
  if (e) {
    const t = Object.assign({}, e);
    return No.push(t), wl(), () => {
      No = No.filter((n) => n !== t), wl();
    };
  }
  Object.assign({}, Ti.Modal);
}
const ud = /* @__PURE__ */ fi(void 0), fd = "internalMark", dd = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = fn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === fd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Og(t == null ? void 0 : t.Modal), [t]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ w.createElement(ud.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (dd.displayName = "LocaleProvider");
const hd = {
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
}, Lr = Object.assign(Object.assign({}, hd), {
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
}), rt = Math.round;
function ls(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const El = (e, t, n) => n === 0 ? e : e / 100;
function br(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let Ze = class pd {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof pd)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = br(t.r), this.g = br(t.g), this.b = br(t.b), this.a = typeof t.a == "number" ? br(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
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
    const n = this.toHsv();
    return n.h = t, this._c(n);
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
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = rt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: rt(i("r")),
      g: rt(i("g")),
      b: rt(i("b")),
      a: rt(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => rt((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = rt(this.a * 255).toString(16);
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
    const t = this.getHue(), n = rt(this.getSaturation() * 100), r = rt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = br(n, r), o;
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
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const u = rt(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = rt((i + d) * 255), this.g = rt((s + d) * 255), this.b = rt((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = rt(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = rt(r * (1 - n) * 255), f = rt(r * (1 - n * c) * 255), d = rt(r * (1 - n * (1 - c)) * 255);
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
    const n = ls(t, El);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ls(t, El);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = ls(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? rt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
var uo = 2, Ol = 0.16, Tg = 0.05, Rg = 0.05, Ag = 0.15, xd = 5, gd = 4, $g = [{
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
function Tl(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - uo * t : Math.round(e.h) + uo * t : r = n ? Math.round(e.h) + uo * t : Math.round(e.h) - uo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ol * t : t === gd ? r = e.s + Ol : r = e.s + Tg * t, r > 1 && (r = 1), n && t === xd && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Al(e, t, n) {
  var r;
  return n ? r = e.v + Rg * t : r = e.v - Ag * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Mr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Ze(e), o = r.toHsv(), i = xd; i > 0; i -= 1) {
    var s = new Ze({
      h: Tl(o, i, !0),
      s: Rl(o, i, !0),
      v: Al(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= gd; a += 1) {
    var c = new Ze({
      h: Tl(o, a),
      s: Rl(o, a),
      v: Al(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? $g.map(function(l) {
    var f = l.index, d = l.amount;
    return new Ze(t.backgroundColor || "#141414").mix(n[f], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var us = {
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
}, ia = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ia.primary = ia[5];
var sa = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
sa.primary = sa[5];
var aa = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
aa.primary = aa[5];
var ca = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ca.primary = ca[5];
var la = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
la.primary = la[5];
var ua = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ua.primary = ua[5];
var fa = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
fa.primary = fa[5];
var da = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
da.primary = da[5];
var Wo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Wo.primary = Wo[5];
var ha = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ha.primary = ha[5];
var pa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
pa.primary = pa[5];
var xa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xa.primary = xa[5];
var ga = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ga.primary = ga[5];
var fs = {
  red: ia,
  volcano: sa,
  orange: aa,
  gold: ca,
  yellow: la,
  lime: ua,
  green: fa,
  cyan: da,
  blue: Wo,
  geekblue: ha,
  purple: pa,
  magenta: xa,
  grey: ga
};
function Pg(e, t) {
  let {
    generateColorPalettes: n,
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
  } = e, d = n(c), u = n(o), v = n(i), g = n(s), h = n(a), p = r(l, f), _ = e.colorLink || e.colorInfo, b = n(_), x = new Ze(g[1]).mix(new Ze(g[3]), 50).toHexString();
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
    colorErrorBgFilledHover: x,
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
    colorBgMask: new Ze("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ig = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Ng(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Ig(r));
}
const kg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function ko(e) {
  return (e + 8) / e;
}
function jg(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: ko(n)
  }));
}
const Lg = (e) => {
  const t = jg(e), n = t.map((f) => f.size), r = t.map((f) => f.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: s,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
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
function Mg(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const _t = (e, t) => new Ze(e).setA(t).toRgbString(), _r = (e, t) => new Ze(e).darken(t).toHexString(), Dg = (e) => {
  const t = Mr(e);
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
}, Bg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: _t(r, 0.88),
    colorTextSecondary: _t(r, 0.65),
    colorTextTertiary: _t(r, 0.45),
    colorTextQuaternary: _t(r, 0.25),
    colorFill: _t(r, 0.15),
    colorFillSecondary: _t(r, 0.06),
    colorFillTertiary: _t(r, 0.04),
    colorFillQuaternary: _t(r, 0.02),
    colorBgSolid: _t(r, 1),
    colorBgSolidHover: _t(r, 0.75),
    colorBgSolidActive: _t(r, 0.95),
    colorBgLayout: _r(n, 4),
    colorBgContainer: _r(n, 0),
    colorBgElevated: _r(n, 0),
    colorBgSpotlight: _t(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: _r(n, 15),
    colorBorderSecondary: _r(n, 6)
  };
};
function Hg(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const t = Object.keys(hd).map((n) => {
    const r = e[n] === us[n] ? fs[n] : Mr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Pg(e, {
    generateColorPalettes: Dg,
    generateNeutralColorPalettes: Bg
  })), Lg(e.fontSize)), Mg(e)), kg(e)), Ng(e));
}
const md = Qs(Hg), ma = {
  token: Lr,
  override: {
    override: Lr
  },
  hashed: !0
}, vd = /* @__PURE__ */ U.createContext(ma), Go = "ant", uc = "anticon", zg = (e, t) => t || (e ? `${Go}-${e}` : Go), It = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: zg,
  iconPrefixCls: uc
}), {
  Consumer: __
} = It, $l = {};
function fc(e) {
  const t = w.useContext(It), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: $l,
    styles: $l
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Fg = `-ant-${Date.now()}-${Math.random()}`;
function Vg(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ze(s), l = Mr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Ze(t.primaryColor), a = Mr(s.toRgbString());
    a.forEach((l, f) => {
      n[`primary-${f + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Ze(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Ug(e, t) {
  const n = Vg(e, t);
  Jt() ? Tn(n, `${Fg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Xo = /* @__PURE__ */ w.createContext(!1), qg = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(Xo);
  return /* @__PURE__ */ w.createElement(Xo.Provider, {
    value: n ?? r
  }, t);
}, er = /* @__PURE__ */ w.createContext(void 0), Wg = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(er);
  return /* @__PURE__ */ w.createElement(er.Provider, {
    value: n || r
  }, t);
};
function Gg() {
  const e = wt(Xo), t = wt(er);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var yd = /* @__PURE__ */ yt(function e() {
  vt(this, e);
}), bd = "CALC_UNIT", Xg = new RegExp(bd, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(bd) : e;
}
var Yg = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r, o) {
    var i;
    vt(this, n), i = t.call(this), q(On(i), "result", ""), q(On(i), "unitlessCssVar", void 0), q(On(i), "lowPriority", void 0);
    var s = be(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = ds(r) : s === "string" && (i.result = r), i;
  }
  return yt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
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
      }) && (c = !1), this.result = this.result.replace(Xg, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(yd), Kg = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    var o;
    return vt(this, n), o = t.call(this), q(On(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return yt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(yd), Jg = function(t, n) {
  var r = t === "css" ? Yg : Kg;
  return function(o) {
    return new r(o, n);
  };
}, Pl = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ln(e) {
  var t = w.useRef();
  t.current = e;
  var n = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Dr(e) {
  var t = w.useRef(!1), n = w.useState(e), r = ie(n, 2), o = r[0], i = r[1];
  w.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function hs(e) {
  return e !== void 0;
}
function Qg(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, s = n.postState, a = Dr(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = ie(a, 2), l = c[0], f = c[1], d = o !== void 0 ? o : l, u = s ? s(d) : d, v = ln(i), g = Dr([d]), h = ie(g, 2), p = h[0], _ = h[1];
  ml(function() {
    var x = p[0];
    l !== x && v(l, x);
  }, [p]), ml(function() {
    hs(o) || f(o);
  }, [o]);
  var b = ln(function(x, E) {
    f(x, E), _([d], E);
  });
  return [u, b];
}
function Il(e, t, n, r) {
  var o = Y({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ie(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && un(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = Y(Y({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var _d = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", va = !0;
function dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!_d)
    return Object.assign.apply(Object, [{}].concat(t));
  va = !1;
  var r = {};
  return t.forEach(function(o) {
    if (be(o) === "object") {
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
  }), va = !0, r;
}
var Nl = {};
function Zg() {
}
var em = function(t) {
  var n, r = t, o = Zg;
  return _d && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (va) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Nl[s] = {
      global: Array.from(n),
      component: Y(Y({}, (c = Nl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function kl(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(dn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function tm(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Yt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Yt(i);
      }).join(","), ")");
    }
  };
}
var nm = 1e3 * 60 * 10, rm = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return yt(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(i) {
        return i && be(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(be(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > nm && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), jl = new rm();
function om(e, t) {
  return U.useMemo(function() {
    var n = jl.get(t);
    if (n)
      return n;
    var r = e();
    return jl.set(t, r), r;
  }, t);
}
var im = function() {
  return {};
};
function sm(e) {
  var t = e.useCSP, n = t === void 0 ? im : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(u, v, g, h) {
    var p = Array.isArray(u) ? u[0] : u;
    function _(k) {
      return "".concat(String(p)).concat(k.slice(0, 1).toUpperCase()).concat(k.slice(1));
    }
    var b = (h == null ? void 0 : h.unitless) || {}, x = typeof a == "function" ? a(u) : {}, E = Y(Y({}, x), {}, q({}, _("zIndexPopup"), !0));
    Object.keys(b).forEach(function(k) {
      E[_(k)] = b[k];
    });
    var y = Y(Y({}, h), {}, {
      unitless: E,
      prefixToken: _
    }), A = f(u, v, g, y), O = l(p, g, y);
    return function(k) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k, W = A(k, B), ne = ie(W, 2), Q = ne[1], D = O(B), X = ie(D, 2), K = X[0], N = X[1];
      return [K, Q, N];
    };
  }
  function l(u, v, g) {
    var h = g.unitless, p = g.injectStyle, _ = p === void 0 ? !0 : p, b = g.prefixToken, x = g.ignore, E = function(O) {
      var k = O.rootCls, B = O.cssVar, W = B === void 0 ? {} : B, ne = r(), Q = ne.realToken;
      return vg({
        path: [u],
        prefix: W.prefix,
        key: W.key,
        unitless: h,
        ignore: x,
        token: Q,
        scope: k
      }, function() {
        var D = kl(u, Q, v), X = Il(u, Q, D, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(D).forEach(function(K) {
          X[b(K)] = X[K], delete X[K];
        }), X;
      }), null;
    }, y = function(O) {
      var k = r(), B = k.cssVar;
      return [function(W) {
        return _ && B ? /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(E, {
          rootCls: O,
          cssVar: B,
          component: u
        }), W) : W;
      }, B == null ? void 0 : B.key];
    };
    return y;
  }
  function f(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(u) ? u : [u, u], _ = ie(p, 1), b = _[0], x = p.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(y) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, O = r(), k = O.theme, B = O.realToken, W = O.hashId, ne = O.token, Q = O.cssVar, D = o(), X = D.rootPrefixCls, K = D.iconPrefixCls, N = n(), $ = Q ? "css" : "js", P = om(function() {
        var J = /* @__PURE__ */ new Set();
        return Q && Object.keys(h.unitless || {}).forEach(function(se) {
          J.add(Ro(se, Q.prefix)), J.add(Ro(se, Pl(b, Q.prefix)));
        }), Jg($, J);
      }, [$, b, Q == null ? void 0 : Q.prefix]), j = tm($), H = j.max, z = j.min, G = {
        theme: k,
        token: ne,
        hashId: W,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: h.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && ra(Y(Y({}, G), {}, {
        clientOnly: !1,
        path: ["Shared", X]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: X,
            iconPrefixCls: K
          },
          csp: N
        });
      });
      var te = ra(Y(Y({}, G), {}, {
        path: [x, y, K]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var J = em(ne), se = J.token, ae = J.flush, ce = kl(b, B, g), Ce = ".".concat(y), pe = Il(b, B, ce, {
          deprecatedTokens: h.deprecatedTokens
        });
        Q && ce && be(ce) === "object" && Object.keys(ce).forEach(function(re) {
          ce[re] = "var(".concat(Ro(re, Pl(b, Q.prefix)), ")");
        });
        var Ie = dn(se, {
          componentCls: Ce,
          prefixCls: y,
          iconCls: ".".concat(K),
          antCls: ".".concat(X),
          calc: P,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: z
        }, Q ? ce : pe), $e = v(Ie, {
          hashId: W,
          prefixCls: y,
          rootPrefixCls: X,
          iconPrefixCls: K
        });
        ae(b, pe);
        var R = typeof s == "function" ? s(Ie, y, A, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : R, $e];
      });
      return [te, W];
    };
  }
  function d(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = f(u, v, g, Y({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), _ = function(x) {
      var E = x.prefixCls, y = x.rootCls, A = y === void 0 ? E : y;
      return p(E, A), null;
    };
    return process.env.NODE_ENV !== "production" && (_.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), _;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const dc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], am = "5.24.6";
function ps(e) {
  return e >= 0 && e <= 255;
}
function Tr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Ze(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Ze(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((n - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (ps(f) && ps(d) && ps(u))
      return new Ze({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ze({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var cm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Sd(e) {
  const {
    override: t
  } = e, n = cm(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Lr).forEach((u) => {
    delete r[u];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, a = 768, c = 992, l = 1200, f = 1600;
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
    colorSplit: Tr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Tr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Tr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Tr(o.colorPrimaryBg, o.colorBgContainer),
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
  }), r);
}
var Ll = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Cd = {
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
}, lm = {
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
}, um = {
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
}, wd = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = Ll(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Sd(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = Ll(l, ["theme"]);
    let u = d;
    f && (u = wd(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = u;
  }), s;
};
function Wr() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = U.useContext(vd), i = `${am}-${t || ""}`, s = n || md, [a, c, l] = V1(s, [Lr, e], {
    salt: i,
    override: r,
    getComputedToken: wd,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Sd,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Cd,
      ignore: lm,
      preserve: um
    }
  });
  return [s, l, t ? c : "", a, o];
}
const Ed = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
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
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Od = () => ({
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
}), fm = (e) => ({
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
}), dm = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = n ? `.${n}` : o, s = {
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
}, hm = (e, t) => ({
  outline: `${Yt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), pm = (e, t) => ({
  "&:focus-visible": Object.assign({}, hm(e, t))
}), Td = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Od()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ri,
  genComponentStyleHook: xm,
  genSubStyleComponent: gm
} = sm({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = wt(It);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = Wr();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = wt(It);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = fm(e);
    return [r, {
      "&": r
    }, Td((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : uc)];
  },
  getCommonStyle: dm,
  getCompUnitless: () => Cd
}), mm = (e, t) => {
  const [n, r] = Wr();
  return ra({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Td(e)]);
}, vm = Object.assign({}, w), {
  useId: Ml
} = vm, ym = () => "", bm = typeof Ml > "u" ? ym : Ml;
function _m(e, t, n) {
  var r, o;
  const i = fn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, ma), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : ma.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = bm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Za(() => {
    var l, f;
    if (!e)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), e.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
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
    return !x1(d, v, !0);
  }));
}
var Sm = ["children"], Rd = /* @__PURE__ */ w.createContext({});
function Cm(e) {
  var t = e.children, n = Pn(e, Sm);
  return /* @__PURE__ */ w.createElement(Rd.Provider, {
    value: n
  }, t);
}
var wm = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n() {
    return vt(this, n), t.apply(this, arguments);
  }
  return yt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function Em(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = ie(t, 2), r = n[1], o = w.useRef(e), i = ln(function() {
    return o.current;
  }), s = ln(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var rn = "none", fo = "appear", ho = "enter", po = "leave", Dl = "none", Rt = "prepare", Bn = "start", Hn = "active", hc = "end", Ad = "prepared";
function Bl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Om(e, t) {
  var n = {
    animationend: Bl("Animation", "AnimationEnd"),
    transitionend: Bl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Tm = Om(Jt(), typeof window < "u" ? window : {}), $d = {};
if (Jt()) {
  var Rm = document.createElement("div");
  $d = Rm.style;
}
var xo = {};
function Pd(e) {
  if (xo[e])
    return xo[e];
  var t = Tm[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in $d)
        return xo[e] = t[i], xo[e];
    }
  return "";
}
var Id = Pd("animationend"), Nd = Pd("transitionend"), kd = !!(Id && Nd), Hl = Id || "animationend", zl = Nd || "transitionend";
function Fl(e, t) {
  if (!e) return null;
  if (be(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Am = function(e) {
  var t = Se();
  function n(o) {
    o && (o.removeEventListener(zl, e), o.removeEventListener(Hl, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(zl, e), o.addEventListener(Hl, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var jd = Jt() ? Q0 : qe;
const $m = function() {
  var e = w.useRef(null);
  function t() {
    cn.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = cn(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return w.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Pm = [Rt, Bn, Hn, hc], Im = [Rt, Ad], Ld = !1, Nm = !0;
function Md(e) {
  return e === Hn || e === hc;
}
const km = function(e, t, n) {
  var r = Dr(Dl), o = ie(r, 2), i = o[0], s = o[1], a = $m(), c = ie(a, 2), l = c[0], f = c[1];
  function d() {
    s(Rt, !0);
  }
  var u = t ? Im : Pm;
  return jd(function() {
    if (i !== Dl && i !== hc) {
      var v = u.indexOf(i), g = u[v + 1], h = n(i);
      h === Ld ? s(g, !0) : g && l(function(p) {
        function _() {
          p.isCanceled() || s(g, !0);
        }
        h === !0 ? _() : Promise.resolve(h).then(_);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function jm(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, p = r.onEnterStart, _ = r.onLeaveStart, b = r.onAppearActive, x = r.onEnterActive, E = r.onLeaveActive, y = r.onAppearEnd, A = r.onEnterEnd, O = r.onLeaveEnd, k = r.onVisibleChanged, B = Dr(), W = ie(B, 2), ne = W[0], Q = W[1], D = Em(rn), X = ie(D, 2), K = X[0], N = X[1], $ = Dr(null), P = ie($, 2), j = P[0], H = P[1], z = K(), G = Se(!1), te = Se(null);
  function J() {
    return n();
  }
  var se = Se(!1);
  function ae() {
    N(rn), H(null, !0);
  }
  var ce = ln(function(Me) {
    var Ae = K();
    if (Ae !== rn) {
      var Ke = J();
      if (!(Me && !Me.deadline && Me.target !== Ke)) {
        var ut = se.current, ct;
        Ae === fo && ut ? ct = y == null ? void 0 : y(Ke, Me) : Ae === ho && ut ? ct = A == null ? void 0 : A(Ke, Me) : Ae === po && ut && (ct = O == null ? void 0 : O(Ke, Me)), ut && ct !== !1 && ae();
      }
    }
  }), Ce = Am(ce), pe = ie(Ce, 1), Ie = pe[0], $e = function(Ae) {
    switch (Ae) {
      case fo:
        return q(q(q({}, Rt, u), Bn, h), Hn, b);
      case ho:
        return q(q(q({}, Rt, v), Bn, p), Hn, x);
      case po:
        return q(q(q({}, Rt, g), Bn, _), Hn, E);
      default:
        return {};
    }
  }, R = w.useMemo(function() {
    return $e(z);
  }, [z]), re = km(z, !e, function(Me) {
    if (Me === Rt) {
      var Ae = R[Rt];
      return Ae ? Ae(J()) : Ld;
    }
    if (S in R) {
      var Ke;
      H(((Ke = R[S]) === null || Ke === void 0 ? void 0 : Ke.call(R, J(), null)) || null);
    }
    return S === Hn && z !== rn && (Ie(J()), f > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      ce({
        deadline: !0
      });
    }, f))), S === Ad && ae(), Nm;
  }), T = ie(re, 2), F = T[0], S = T[1], Z = Md(S);
  se.current = Z;
  var _e = Se(null);
  jd(function() {
    if (!(G.current && _e.current === t)) {
      Q(t);
      var Me = G.current;
      G.current = !0;
      var Ae;
      !Me && t && a && (Ae = fo), Me && t && i && (Ae = ho), (Me && !t && l || !Me && d && !t && l) && (Ae = po);
      var Ke = $e(Ae);
      Ae && (e || Ke[Rt]) ? (N(Ae), F()) : N(rn), _e.current = t;
    }
  }, [t]), qe(function() {
    // Cancel appear
    (z === fo && !a || // Cancel enter
    z === ho && !i || // Cancel leave
    z === po && !l) && N(rn);
  }, [a, i, l]), qe(function() {
    return function() {
      G.current = !1, clearTimeout(te.current);
    };
  }, []);
  var Le = w.useRef(!1);
  qe(function() {
    ne && (Le.current = !0), ne !== void 0 && z === rn && ((Le.current || ne) && (k == null || k(ne)), Le.current = !0);
  }, [ne, z]);
  var gt = j;
  return R[Rt] && S === Bn && (gt = Y({
    transition: "none"
  }, gt)), [z, S, gt, ne ?? t];
}
function Lm(e) {
  var t = e;
  be(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = w.useContext(Rd), p = h.motion, _ = n(o, p), b = Se(), x = Se();
    function E() {
      try {
        return b.current instanceof HTMLElement ? b.current : o1(x.current);
      } catch {
        return null;
      }
    }
    var y = jm(_, a, E, o), A = ie(y, 4), O = A[0], k = A[1], B = A[2], W = A[3], ne = w.useRef(W);
    W && (ne.current = !0);
    var Q = w.useCallback(function(P) {
      b.current = P, Rf(i, P);
    }, [i]), D, X = Y(Y({}, g), {}, {
      visible: a
    });
    if (!d)
      D = null;
    else if (O === rn)
      W ? D = d(Y({}, X), Q) : !l && ne.current && v ? D = d(Y(Y({}, X), {}, {
        className: v
      }), Q) : f || !l && !v ? D = d(Y(Y({}, X), {}, {
        style: {
          display: "none"
        }
      }), Q) : D = null;
    else {
      var K;
      k === Rt ? K = "prepare" : Md(k) ? K = "active" : k === Bn && (K = "start");
      var N = Fl(u, "".concat(O, "-").concat(K));
      D = d(Y(Y({}, X), {}, {
        className: ye(Fl(u, O), q(q({}, N, N && K), u, typeof u == "string")),
        style: B
      }), Q);
    }
    if (/* @__PURE__ */ w.isValidElement(D) && Af(D)) {
      var $ = Pf(D);
      $ || (D = /* @__PURE__ */ w.cloneElement(D, {
        ref: Q
      }));
    }
    return /* @__PURE__ */ w.createElement(wm, {
      ref: x
    }, D);
  });
  return r.displayName = "CSSMotion", r;
}
const Ai = Lm(kd);
var ya = "add", ba = "keep", _a = "remove", xs = "removed";
function Mm(e) {
  var t;
  return e && be(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, Y(Y({}, t), {}, {
    key: String(t.key)
  });
}
function Sa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Mm);
}
function Dm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = Sa(e), s = Sa(t);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = s[d];
      if (u.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(v) {
          return Y(Y({}, v), {}, {
            status: ya
          });
        })), r = d), n.push(Y(Y({}, u), {}, {
          status: ba
        })), r += 1, f = !0;
        break;
      }
    }
    f || n.push(Y(Y({}, l), {}, {
      status: _a
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return Y(Y({}, l), {}, {
      status: ya
    });
  })));
  var a = {};
  n.forEach(function(l) {
    var f = l.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(f) {
      var d = f.key, u = f.status;
      return d !== l || u !== _a;
    }), n.forEach(function(f) {
      f.key === l && (f.status = ba);
    });
  }), n;
}
var Bm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Hm = ["status"], zm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Fm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ai, n = /* @__PURE__ */ function(r) {
    cr(i, r);
    var o = Vr(i);
    function i() {
      var s;
      vt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), q(On(s), "state", {
        keyEntities: []
      }), q(On(s), "removeKey", function(f) {
        s.setState(function(d) {
          var u = d.keyEntities.map(function(v) {
            return v.key !== f ? v : Y(Y({}, v), {}, {
              status: xs
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = s.state.keyEntities, u = d.filter(function(v) {
            var g = v.status;
            return g !== xs;
          }).length;
          u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return yt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Pn(l, Bm), g = f || w.Fragment, h = {};
        return zm.forEach(function(p) {
          h[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ w.createElement(g, v, c.map(function(p, _) {
          var b = p.status, x = Pn(p, Hm), E = b === ya || b === ba;
          return /* @__PURE__ */ w.createElement(t, ht({}, h, {
            key: x.key,
            visible: E,
            eventProps: x,
            onVisibleChanged: function(A) {
              u == null || u(A, {
                key: x.key
              }), A || a.removeKey(x.key);
            }
          }), function(y, A) {
            return d(Y(Y({}, y), {}, {
              index: _
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = Sa(l), u = Dm(f, d);
        return {
          keyEntities: u.filter(function(v) {
            var g = f.find(function(h) {
              var p = h.key;
              return v.key === p;
            });
            return !(g && g.status === xs && v.status === _a);
          })
        };
      }
    }]), i;
  }(w.Component);
  return q(n, "defaultProps", {
    component: "div"
  }), n;
}
Fm(kd);
function Vm(e) {
  const {
    children: t
  } = e, [, n] = Wr(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(Cm, {
    motion: r
  }, t) : t;
}
const Dd = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return fn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Dd.displayName = "PropWarning");
const Um = process.env.NODE_ENV !== "production" ? Dd : () => null;
var qm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Ca = !1;
process.env.NODE_ENV;
const Wm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Bd;
function Gm() {
  return Bd || Go;
}
function Xm(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Ym = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (Bd = t), r && Xm(r) && (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ug(Gm(), r));
}, Km = (e) => {
  const {
    children: t,
    csp: n,
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
    popupOverflow: h,
    legacyLocale: p,
    parentContext: _,
    iconPrefixCls: b,
    theme: x,
    componentDisabled: E,
    segmented: y,
    statistic: A,
    spin: O,
    calendar: k,
    carousel: B,
    cascader: W,
    collapse: ne,
    typography: Q,
    checkbox: D,
    descriptions: X,
    divider: K,
    drawer: N,
    skeleton: $,
    steps: P,
    image: j,
    layout: H,
    list: z,
    mentions: G,
    modal: te,
    progress: J,
    result: se,
    slider: ae,
    breadcrumb: ce,
    menu: Ce,
    pagination: pe,
    input: Ie,
    textArea: $e,
    empty: R,
    badge: re,
    radio: T,
    rate: F,
    switch: S,
    transfer: Z,
    avatar: _e,
    message: Le,
    tag: gt,
    table: Me,
    card: Ae,
    tabs: Ke,
    timeline: ut,
    timePicker: ct,
    upload: Ft,
    notification: L,
    tree: C,
    colorPicker: me,
    datePicker: xe,
    rangePicker: ke,
    flex: de,
    wave: et,
    dropdown: We,
    warning: Re,
    tour: tt,
    tooltip: Vt,
    popover: hn,
    popconfirm: Je,
    floatButtonGroup: je,
    variant: bt,
    inputNumber: jt,
    treeSelect: Zt
  } = e, Nn = w.useCallback((Be, m) => {
    const {
      prefixCls: M
    } = e;
    if (m)
      return m;
    const V = M || _.getPrefixCls("");
    return Be ? `${V}-${Be}` : V;
  }, [_.getPrefixCls, e.prefixCls]), pn = b || _.iconPrefixCls || uc, kn = n || _.csp;
  mm(pn, kn);
  const xn = _m(x, _.theme, {
    prefixCls: Nn("")
  });
  process.env.NODE_ENV !== "production" && (Ca = Ca || !!xn);
  const jn = {
    csp: kn,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: Nn,
    iconPrefixCls: pn,
    theme: xn,
    segmented: y,
    statistic: A,
    spin: O,
    calendar: k,
    carousel: B,
    cascader: W,
    collapse: ne,
    typography: Q,
    checkbox: D,
    descriptions: X,
    divider: K,
    drawer: N,
    skeleton: $,
    steps: P,
    image: j,
    input: Ie,
    textArea: $e,
    layout: H,
    list: z,
    mentions: G,
    modal: te,
    progress: J,
    result: se,
    slider: ae,
    breadcrumb: ce,
    menu: Ce,
    pagination: pe,
    empty: R,
    badge: re,
    radio: T,
    rate: F,
    switch: S,
    transfer: Z,
    avatar: _e,
    message: Le,
    tag: gt,
    table: Me,
    card: Ae,
    tabs: Ke,
    timeline: ut,
    timePicker: ct,
    upload: Ft,
    notification: L,
    tree: C,
    colorPicker: me,
    datePicker: xe,
    rangePicker: ke,
    flex: de,
    wave: et,
    dropdown: We,
    warning: Re,
    tour: tt,
    tooltip: Vt,
    popover: hn,
    popconfirm: Je,
    floatButtonGroup: je,
    variant: bt,
    inputNumber: jt,
    treeSelect: Zt
  };
  process.env.NODE_ENV !== "production" && fn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const en = Object.assign({}, _);
  Object.keys(jn).forEach((Be) => {
    jn[Be] !== void 0 && (en[Be] = jn[Be]);
  }), Wm.forEach((Be) => {
    const m = e[Be];
    m && (en[Be] = m);
  }), typeof r < "u" && (en.button = Object.assign({
    autoInsertSpace: r
  }, en.button));
  const tn = Za(() => en, en, (Be, m) => {
    const M = Object.keys(Be), V = Object.keys(m);
    return M.length !== V.length || M.some((oe) => Be[oe] !== m[oe]);
  }), {
    layer: pr
  } = w.useContext(Ur), Kr = w.useMemo(() => ({
    prefixCls: pn,
    csp: kn,
    layer: pr ? "antd" : void 0
  }), [pn, kn, pr]);
  let Qe = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Um, {
    dropdownMatchSelectWidth: v
  }), t);
  const Jr = w.useMemo(() => {
    var Be, m, M, V;
    return Cg(((Be = Ti.Form) === null || Be === void 0 ? void 0 : Be.defaultValidateMessages) || {}, ((M = (m = tn.locale) === null || m === void 0 ? void 0 : m.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}, ((V = tn.form) === null || V === void 0 ? void 0 : V.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [tn, s == null ? void 0 : s.validateMessages]);
  Object.keys(Jr).length > 0 && (Qe = /* @__PURE__ */ w.createElement(Eg.Provider, {
    value: Jr
  }, Qe)), a && (Qe = /* @__PURE__ */ w.createElement(dd, {
    locale: a,
    _ANT_MARK__: fd
  }, Qe)), Qe = /* @__PURE__ */ w.createElement(cc.Provider, {
    value: Kr
  }, Qe), c && (Qe = /* @__PURE__ */ w.createElement(Wg, {
    size: c
  }, Qe)), Qe = /* @__PURE__ */ w.createElement(Vm, null, Qe);
  const Gi = w.useMemo(() => {
    const Be = xn || {}, {
      algorithm: m,
      token: M,
      components: V,
      cssVar: oe
    } = Be, ve = qm(Be, ["algorithm", "token", "components", "cssVar"]), we = m && (!Array.isArray(m) || m.length > 0) ? Qs(m) : md, he = {};
    Object.entries(V || {}).forEach((st) => {
      let [De, He] = st;
      const ze = Object.assign({}, He);
      "algorithm" in ze && (ze.algorithm === !0 ? ze.theme = we : (Array.isArray(ze.algorithm) || typeof ze.algorithm == "function") && (ze.theme = Qs(ze.algorithm)), delete ze.algorithm), he[De] = ze;
    });
    const fe = Object.assign(Object.assign({}, Lr), M);
    return Object.assign(Object.assign({}, ve), {
      theme: we,
      token: fe,
      components: he,
      override: Object.assign({
        override: fe
      }, he),
      cssVar: oe
    });
  }, [xn]);
  return x && (Qe = /* @__PURE__ */ w.createElement(vd.Provider, {
    value: Gi
  }, Qe)), tn.warning && (Qe = /* @__PURE__ */ w.createElement(ld.Provider, {
    value: tn.warning
  }, Qe)), E !== void 0 && (Qe = /* @__PURE__ */ w.createElement(qg, {
    disabled: E
  }, Qe)), /* @__PURE__ */ w.createElement(It.Provider, {
    value: tn
  }, Qe);
}, ur = (e) => {
  const t = w.useContext(It), n = w.useContext(ud);
  return /* @__PURE__ */ w.createElement(Km, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
ur.ConfigContext = It;
ur.SizeContext = er;
ur.config = Ym;
ur.useConfig = Gg;
Object.defineProperty(ur, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), er)
});
process.env.NODE_ENV !== "production" && (ur.displayName = "ConfigProvider");
function Hd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Jm(e) {
  return Hd(e) instanceof ShadowRoot;
}
function Qm(e) {
  return Jm(e) ? Hd(e) : null;
}
function Zm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function ev(e, t) {
  un(e, "[@ant-design/icons] ".concat(t));
}
function Vl(e) {
  return be(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (be(e.icon) === "object" || typeof e.icon == "function");
}
function Ul() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Zm(n)] = r;
    }
    return t;
  }, {});
}
function wa(e, t, n) {
  return n ? /* @__PURE__ */ U.createElement(e.tag, Y(Y({
    key: t
  }, Ul(e.attrs)), n), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ U.createElement(e.tag, Y({
    key: t
  }, Ul(e.attrs)), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function zd(e) {
  return Mr(e)[0];
}
function Fd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var tv = `
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
`, nv = function(t) {
  var n = wt(cc), r = n.csp, o = n.prefixCls, i = n.layer, s = tv;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), qe(function() {
    var a = t.current, c = Qm(a);
    Tn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, rv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Pr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ov(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Pr.primaryColor = t, Pr.secondaryColor = n || zd(t), Pr.calculated = !!n;
}
function iv() {
  return Y({}, Pr);
}
var fr = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = Pn(t, rv), l = w.useRef(), f = Pr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || zd(s)
  }), nv(l), ev(Vl(n), "icon should be icon definiton, but got ".concat(n)), !Vl(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = Y(Y({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), wa(d.icon, "svg-".concat(d.name), Y(Y({
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
fr.displayName = "IconReact";
fr.getTwoToneColors = iv;
fr.setTwoToneColors = ov;
function Vd(e) {
  var t = Fd(e), n = ie(t, 2), r = n[0], o = n[1];
  return fr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function sv() {
  var e = fr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var av = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Vd(Wo.primary);
var Qt = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Pn(e, av), f = w.useContext(cc), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = ye(v, u, q(q({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), n), h = s;
  h === void 0 && a && (h = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, _ = Fd(c), b = ie(_, 2), x = b[0], E = b[1];
  return /* @__PURE__ */ w.createElement("span", ht({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ w.createElement(fr, {
    icon: r,
    primaryColor: x,
    secondaryColor: E,
    style: p
  }));
});
Qt.displayName = "AntdIcon";
Qt.getTwoToneColor = sv;
Qt.setTwoToneColor = Vd;
var cv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: qp
  }));
}, Ud = /* @__PURE__ */ w.forwardRef(cv);
process.env.NODE_ENV !== "production" && (Ud.displayName = "CheckCircleFilled");
var lv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: Wp
  }));
}, qd = /* @__PURE__ */ w.forwardRef(lv);
process.env.NODE_ENV !== "production" && (qd.displayName = "CloseCircleFilled");
var uv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: Gp
  }));
}, Wd = /* @__PURE__ */ w.forwardRef(uv);
process.env.NODE_ENV !== "production" && (Wd.displayName = "CloseOutlined");
var fv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: Xp
  }));
}, Gd = /* @__PURE__ */ w.forwardRef(fv);
process.env.NODE_ENV !== "production" && (Gd.displayName = "ExclamationCircleFilled");
var dv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: Yp
  }));
}, Xd = /* @__PURE__ */ w.forwardRef(dv);
process.env.NODE_ENV !== "production" && (Xd.displayName = "InfoCircleFilled");
var hv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, pv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, xv = "".concat(hv, " ").concat(pv).split(/[\s\n]+/), gv = "aria-", mv = "data-";
function ql(e, t) {
  return e.indexOf(t) === 0;
}
function vv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = Y({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || ql(o, gv)) || // Data
    n.data && ql(o, mv) || // Attr
    n.attr && xv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function yv(e) {
  return e && /* @__PURE__ */ U.isValidElement(e) && e.type === U.Fragment;
}
const Yd = (e, t, n) => /* @__PURE__ */ U.isValidElement(e) ? /* @__PURE__ */ U.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function pc(e, t) {
  return Yd(e, e, t);
}
const go = (e, t, n, r, o) => ({
  background: e,
  border: `${Yt(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), bv = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
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
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ed(e)), {
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
        transition: `max-height ${n} ${l}, opacity ${n} ${l},
        padding-top ${n} ${l}, padding-bottom ${n} ${l},
        margin-bottom ${n} ${l}`
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
}, _v = (e) => {
  const {
    componentCls: t,
    colorSuccess: n,
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
  } = e;
  return {
    [t]: {
      "&-success": go(o, r, n, e, t),
      "&-info": go(v, u, d, e, t),
      "&-warning": go(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, go(f, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Sv = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
    colorIconHover: a
  } = e;
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
        lineHeight: Yt(i),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${n}-close`]: {
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
}, Cv = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), wv = Ri("Alert", (e) => [bv(e), _v(e), Sv(e)], Cv);
var Wl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ev = {
  success: Ud,
  info: Xd,
  error: qd,
  warning: Gd
}, Ov = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = Ev[r] || null;
  return t ? Yd(t, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: ye(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, Tv = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(Wd, null) : r;
  return t ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, xc = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    description: n,
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
    closeText: h,
    closeIcon: p,
    action: _,
    id: b
  } = e, x = Wl(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, y] = w.useState(!1);
  process.env.NODE_ENV !== "production" && fn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: O,
    direction: k,
    closable: B,
    closeIcon: W,
    className: ne,
    style: Q
  } = fc("alert"), D = O("alert", r), [X, K, N] = wv(D), $ = (se) => {
    var ae;
    y(!0), (ae = e.onClose) === null || ae === void 0 || ae.call(e, se);
  }, P = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), j = w.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!B, [h, p, g, B]), H = i && v === void 0 ? !0 : v, z = ye(D, `${D}-${P}`, {
    [`${D}-with-description`]: !!n,
    [`${D}-no-icon`]: !H,
    [`${D}-banner`]: !!i,
    [`${D}-rtl`]: k === "rtl"
  }, ne, s, a, N, K), G = vv(x, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (p !== void 0 ? p : typeof B == "object" && B.closeIcon ? B.closeIcon : W), [p, g, h, W]), J = w.useMemo(() => {
    const se = g ?? B;
    if (typeof se == "object") {
      const {
        closeIcon: ae
      } = se;
      return Wl(se, ["closeIcon"]);
    }
    return {};
  }, [g, B]);
  return X(/* @__PURE__ */ w.createElement(Ai, {
    visible: !E,
    motionName: `${D}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (se) => ({
      maxHeight: se.offsetHeight
    }),
    onLeaveEnd: u
  }, (se, ae) => {
    let {
      className: ce,
      style: Ce
    } = se;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: Si(A, ae),
      "data-show": !E,
      className: ye(z, ce),
      style: Object.assign(Object.assign(Object.assign({}, Q), c), Ce),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, G), H ? /* @__PURE__ */ w.createElement(Ov, {
      description: n,
      icon: e.icon,
      prefixCls: D,
      type: P
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${D}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${D}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${D}-description`
    }, n) : null), _ ? /* @__PURE__ */ w.createElement("div", {
      className: `${D}-action`
    }, _) : null, /* @__PURE__ */ w.createElement(Tv, {
      isClosable: j,
      prefixCls: D,
      closeIcon: te,
      handleClose: $,
      ariaProps: J
    }));
  }));
});
process.env.NODE_ENV !== "production" && (xc.displayName = "Alert");
function Rv(e, t, n) {
  return t = Kn(t), If(e, ec() ? Reflect.construct(t, n || [], Kn(e).constructor) : t.apply(e, n));
}
let Av = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return vt(this, t), n = Rv(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return cr(t, e), yt(t, [{
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
      return a ? /* @__PURE__ */ w.createElement(xc, {
        id: i,
        type: "error",
        message: f,
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
const Kd = xc;
Kd.ErrorBoundary = Av;
var $v = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, ht({}, t, {
    ref: n,
    icon: Kp
  }));
}, Jd = /* @__PURE__ */ w.forwardRef($v);
process.env.NODE_ENV !== "production" && (Jd.displayName = "LoadingOutlined");
function Br() {
  Br = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(N, $, P) {
    N[$] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(N, $, P) {
    return Object.defineProperty(N, $, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[$];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, j, H) {
      return P[j] = H;
    };
  }
  function f(N, $, P, j) {
    var H = $ && $.prototype instanceof _ ? $ : _, z = Object.create(H.prototype), G = new X(j || []);
    return o(z, "_invoke", {
      value: W(N, P, G)
    }), z;
  }
  function d(N, $, P) {
    try {
      return {
        type: "normal",
        arg: N.call($, P)
      };
    } catch (j) {
      return {
        type: "throw",
        arg: j
      };
    }
  }
  t.wrap = f;
  var u = "suspendedStart", v = "suspendedYield", g = "executing", h = "completed", p = {};
  function _() {
  }
  function b() {
  }
  function x() {
  }
  var E = {};
  l(E, s, function() {
    return this;
  });
  var y = Object.getPrototypeOf, A = y && y(y(K([])));
  A && A !== n && r.call(A, s) && (E = A);
  var O = x.prototype = _.prototype = Object.create(E);
  function k(N) {
    ["next", "throw", "return"].forEach(function($) {
      l(N, $, function(P) {
        return this._invoke($, P);
      });
    });
  }
  function B(N, $) {
    function P(H, z, G, te) {
      var J = d(N[H], N, z);
      if (J.type !== "throw") {
        var se = J.arg, ae = se.value;
        return ae && be(ae) == "object" && r.call(ae, "__await") ? $.resolve(ae.__await).then(function(ce) {
          P("next", ce, G, te);
        }, function(ce) {
          P("throw", ce, G, te);
        }) : $.resolve(ae).then(function(ce) {
          se.value = ce, G(se);
        }, function(ce) {
          return P("throw", ce, G, te);
        });
      }
      te(J.arg);
    }
    var j;
    o(this, "_invoke", {
      value: function(z, G) {
        function te() {
          return new $(function(J, se) {
            P(z, G, J, se);
          });
        }
        return j = j ? j.then(te, te) : te();
      }
    });
  }
  function W(N, $, P) {
    var j = u;
    return function(H, z) {
      if (j === g) throw Error("Generator is already running");
      if (j === h) {
        if (H === "throw") throw z;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = H, P.arg = z; ; ) {
        var G = P.delegate;
        if (G) {
          var te = ne(G, P);
          if (te) {
            if (te === p) continue;
            return te;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (j === u) throw j = h, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        j = g;
        var J = d(N, $, P);
        if (J.type === "normal") {
          if (j = P.done ? h : v, J.arg === p) continue;
          return {
            value: J.arg,
            done: P.done
          };
        }
        J.type === "throw" && (j = h, P.method = "throw", P.arg = J.arg);
      }
    };
  }
  function ne(N, $) {
    var P = $.method, j = N.iterator[P];
    if (j === e) return $.delegate = null, P === "throw" && N.iterator.return && ($.method = "return", $.arg = e, ne(N, $), $.method === "throw") || P !== "return" && ($.method = "throw", $.arg = new TypeError("The iterator does not provide a '" + P + "' method")), p;
    var H = d(j, N.iterator, $.arg);
    if (H.type === "throw") return $.method = "throw", $.arg = H.arg, $.delegate = null, p;
    var z = H.arg;
    return z ? z.done ? ($[N.resultName] = z.value, $.next = N.nextLoc, $.method !== "return" && ($.method = "next", $.arg = e), $.delegate = null, p) : z : ($.method = "throw", $.arg = new TypeError("iterator result is not an object"), $.delegate = null, p);
  }
  function Q(N) {
    var $ = {
      tryLoc: N[0]
    };
    1 in N && ($.catchLoc = N[1]), 2 in N && ($.finallyLoc = N[2], $.afterLoc = N[3]), this.tryEntries.push($);
  }
  function D(N) {
    var $ = N.completion || {};
    $.type = "normal", delete $.arg, N.completion = $;
  }
  function X(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(Q, this), this.reset(!0);
  }
  function K(N) {
    if (N || N === "") {
      var $ = N[s];
      if ($) return $.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var P = -1, j = function H() {
          for (; ++P < N.length; ) if (r.call(N, P)) return H.value = N[P], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return j.next = j;
      }
    }
    throw new TypeError(be(N) + " is not iterable");
  }
  return b.prototype = x, o(O, "constructor", {
    value: x,
    configurable: !0
  }), o(x, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = l(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var $ = typeof N == "function" && N.constructor;
    return !!$ && ($ === b || ($.displayName || $.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, x) : (N.__proto__ = x, l(N, c, "GeneratorFunction")), N.prototype = Object.create(O), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, k(B.prototype), l(B.prototype, a, function() {
    return this;
  }), t.AsyncIterator = B, t.async = function(N, $, P, j, H) {
    H === void 0 && (H = Promise);
    var z = new B(f(N, $, P, j), H);
    return t.isGeneratorFunction($) ? z : z.next().then(function(G) {
      return G.done ? G.value : z.next();
    });
  }, k(O), l(O, c, "Generator"), l(O, s, function() {
    return this;
  }), l(O, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var $ = Object(N), P = [];
    for (var j in $) P.push(j);
    return P.reverse(), function H() {
      for (; P.length; ) {
        var z = P.pop();
        if (z in $) return H.value = z, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, t.values = K, X.prototype = {
    constructor: X,
    reset: function($) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(D), !$) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
    },
    stop: function() {
      this.done = !0;
      var $ = this.tryEntries[0].completion;
      if ($.type === "throw") throw $.arg;
      return this.rval;
    },
    dispatchException: function($) {
      if (this.done) throw $;
      var P = this;
      function j(se, ae) {
        return G.type = "throw", G.arg = $, P.next = se, ae && (P.method = "next", P.arg = e), !!ae;
      }
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var z = this.tryEntries[H], G = z.completion;
        if (z.tryLoc === "root") return j("end");
        if (z.tryLoc <= this.prev) {
          var te = r.call(z, "catchLoc"), J = r.call(z, "finallyLoc");
          if (te && J) {
            if (this.prev < z.catchLoc) return j(z.catchLoc, !0);
            if (this.prev < z.finallyLoc) return j(z.finallyLoc);
          } else if (te) {
            if (this.prev < z.catchLoc) return j(z.catchLoc, !0);
          } else {
            if (!J) throw Error("try statement without catch or finally");
            if (this.prev < z.finallyLoc) return j(z.finallyLoc);
          }
        }
      }
    },
    abrupt: function($, P) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var H = this.tryEntries[j];
        if (H.tryLoc <= this.prev && r.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
          var z = H;
          break;
        }
      }
      z && ($ === "break" || $ === "continue") && z.tryLoc <= P && P <= z.finallyLoc && (z = null);
      var G = z ? z.completion : {};
      return G.type = $, G.arg = P, z ? (this.method = "next", this.next = z.finallyLoc, p) : this.complete(G);
    },
    complete: function($, P) {
      if ($.type === "throw") throw $.arg;
      return $.type === "break" || $.type === "continue" ? this.next = $.arg : $.type === "return" ? (this.rval = this.arg = $.arg, this.method = "return", this.next = "end") : $.type === "normal" && P && (this.next = P), p;
    },
    finish: function($) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var j = this.tryEntries[P];
        if (j.finallyLoc === $) return this.complete(j.completion, j.afterLoc), D(j), p;
      }
    },
    catch: function($) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var j = this.tryEntries[P];
        if (j.tryLoc === $) {
          var H = j.completion;
          if (H.type === "throw") {
            var z = H.arg;
            D(j);
          }
          return z;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function($, P, j) {
      return this.delegate = {
        iterator: K($),
        resultName: P,
        nextLoc: j
      }, this.method === "next" && (this.arg = e), p;
    }
  }, t;
}
function Gl(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void n(l);
  }
  a.done ? t(c) : Promise.resolve(c).then(r, o);
}
function Qd(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function s(c) {
        Gl(i, r, o, s, a, "next", c);
      }
      function a(c) {
        Gl(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var Gr = Y({}, Ru), Pv = Gr.version, gs = Gr.render, Iv = Gr.unmountComponentAtNode, $i;
try {
  var Nv = Number((Pv || "").split(".")[0]);
  Nv >= 18 && ($i = Gr.createRoot);
} catch {
}
function Xl(e) {
  var t = Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && be(t) === "object" && (t.usingClientEntryPoint = e);
}
var Yo = "__rc_react_root__";
function kv(e, t) {
  Xl(!0);
  var n = t[Yo] || $i(t);
  Xl(!1), n.render(e), t[Yo] = n;
}
function jv(e, t) {
  gs == null || gs(e, t);
}
function Lv(e, t) {
  if ($i) {
    kv(e, t);
    return;
  }
  jv(e, t);
}
function Mv(e) {
  return Ea.apply(this, arguments);
}
function Ea() {
  return Ea = Qd(/* @__PURE__ */ Br().mark(function e(t) {
    return Br().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Yo]) === null || o === void 0 || o.unmount(), delete t[Yo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ea.apply(this, arguments);
}
function Dv(e) {
  Iv(e);
}
function Bv(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = Qd(/* @__PURE__ */ Br().mark(function e(t) {
    return Br().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if ($i === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Mv(t));
        case 2:
          Dv(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
const Hv = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = parseInt(w.version.split(".")[0], 10), r = Object.keys(Ru);
    process.env.NODE_ENV !== "production" && qr(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Lv(e, t), () => Bv(t);
};
let zv = Hv;
function Fv() {
  return zv;
}
function Zd(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const Vv = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, Uv = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
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
}, qv = xm("Wave", (e) => [Uv(e)]), e0 = `${Go}-wave-target`;
function ms(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Wv(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ms(t) ? t : ms(n) ? n : ms(r) ? r : null;
}
function vs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Gv = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, i = w.useRef(null), s = w.useRef(null);
  w.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = w.useState(null), [l, f] = w.useState([]), [d, u] = w.useState(0), [v, g] = w.useState(0), [h, p] = w.useState(0), [_, b] = w.useState(0), [x, E] = w.useState(!1), y = {
    left: d,
    top: v,
    width: h,
    height: _,
    borderRadius: l.map((k) => `${k}px`).join(" ")
  };
  a && (y["--wave-color"] = a);
  function A() {
    const k = getComputedStyle(n);
    c(Wv(n));
    const B = k.position === "static", {
      borderLeftWidth: W,
      borderTopWidth: ne
    } = k;
    u(B ? n.offsetLeft : vs(-parseFloat(W))), g(B ? n.offsetTop : vs(-parseFloat(ne))), p(n.offsetWidth), b(n.offsetHeight);
    const {
      borderTopLeftRadius: Q,
      borderTopRightRadius: D,
      borderBottomLeftRadius: X,
      borderBottomRightRadius: K
    } = k;
    f([Q, D, K, X].map((N) => vs(parseFloat(N))));
  }
  if (w.useEffect(() => {
    if (n) {
      const k = cn(() => {
        A(), E(!0);
      });
      let B;
      return typeof ResizeObserver < "u" && (B = new ResizeObserver(A), B.observe(n)), () => {
        cn.cancel(k), B == null || B.disconnect();
      };
    }
  }, []), !x)
    return null;
  const O = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(e0));
  return /* @__PURE__ */ w.createElement(Ai, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (k, B) => {
      var W, ne;
      if (B.deadline || B.propertyName === "opacity") {
        const Q = (W = i.current) === null || W === void 0 ? void 0 : W.parentElement;
        (ne = s.current) === null || ne === void 0 || ne.call(s).then(() => {
          Q == null || Q.remove();
        });
      }
      return !1;
    }
  }, (k, B) => {
    let {
      className: W
    } = k;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Si(i, B),
      className: ye(t, W, {
        "wave-quick": O
      }),
      style: y
    });
  });
}, Xv = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Fv();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ w.createElement(Gv, Object.assign({}, t, {
    target: e,
    registerUnmount: a
  })), o);
}, Yv = (e, t, n) => {
  const {
    wave: r
  } = w.useContext(It), [, o, i] = Wr(), s = ln((l) => {
    const f = e.current;
    if (r != null && r.disabled || !f)
      return;
    const d = f.querySelector(`.${e0}`) || f, {
      showEffect: u
    } = r || {};
    (u || Xv)(d, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: i
    });
  }), a = w.useRef(null);
  return (l) => {
    cn.cancel(a.current), a.current = cn(() => {
      s(l);
    });
  };
}, t0 = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = wt(It), i = Se(null), s = o("wave"), [, a] = qv(s), c = Yv(i, ye(s, a), r);
  if (U.useEffect(() => {
    const f = i.current;
    if (!f || f.nodeType !== 1 || n)
      return;
    const d = (u) => {
      !Vv(u.target) || // No need wave
      !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || c(u);
    };
    return f.addEventListener("click", d, !0), () => {
      f.removeEventListener("click", d, !0);
    };
  }, [n]), !/* @__PURE__ */ U.isValidElement(t))
    return t ?? null;
  const l = Af(t) ? Si(Pf(t), i) : i;
  return pc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (t0.displayName = "Wave");
const Kv = (e) => {
  const t = U.useContext(er);
  return U.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Jv = /* @__PURE__ */ w.createContext(null), Qv = (e, t) => {
  const n = w.useContext(Jv), r = w.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = n, a = o === "vertical" ? "-vertical-" : "-";
    return ye(`${e}-compact${a}item`, {
      [`${e}-compact${a}first-item`]: i,
      [`${e}-compact${a}last-item`]: s,
      [`${e}-compact${a}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
};
var Zv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const n0 = /* @__PURE__ */ w.createContext(void 0), ey = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = w.useContext(It), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = Zv(e, ["prefixCls", "size", "className"]), a = t("btn-group", r), [, , c] = Wr(), l = w.useMemo(() => {
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
    const d = fn("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const f = ye(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: n === "rtl"
  }, i, c);
  return /* @__PURE__ */ w.createElement(n0.Provider, {
    value: o
  }, /* @__PURE__ */ w.createElement("div", Object.assign({}, s, {
    className: f
  })));
}, Yl = /^[\u4E00-\u9FA5]{2}$/, Ta = Yl.test.bind(Yl);
function Kl(e) {
  return typeof e == "string";
}
function mo(e) {
  return e === "text" || e === "link";
}
function ty(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Kl(e.type) && Ta(e.props.children) ? pc(e, {
    children: e.props.children.split("").join(n)
  }) : Kl(e) ? Ta(e) ? /* @__PURE__ */ U.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ U.createElement("span", null, e) : yv(e) ? /* @__PURE__ */ U.createElement("span", null, e) : e;
}
function ny(e, t) {
  let n = !1;
  const r = [];
  return U.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (n && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    n = s;
  }), U.Children.map(r, (o) => ty(o, t));
}
["default", "primary", "danger"].concat(Ht(dc));
const Ra = /* @__PURE__ */ rr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = ye(`${i}-icon`, n);
  return /* @__PURE__ */ U.createElement("span", {
    ref: t,
    className: s,
    style: r
  }, o);
}), Jl = /* @__PURE__ */ rr((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = ye(`${n}-loading-icon`, r);
  return /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: n,
    className: s,
    style: o,
    ref: t
  }, /* @__PURE__ */ U.createElement(Jd, {
    className: i
  }));
}), ys = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), bs = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ry = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!n;
  return r ? /* @__PURE__ */ U.createElement(Jl, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ U.createElement(Ai, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: ys,
    onAppearActive: bs,
    onEnterStart: ys,
    onEnterActive: bs,
    onLeaveStart: bs,
    onLeaveActive: ys
  }, (c, l) => {
    let {
      className: f,
      style: d
    } = c;
    const u = Object.assign(Object.assign({}, i), d);
    return /* @__PURE__ */ U.createElement(Jl, {
      prefixCls: t,
      className: ye(o, f),
      style: u,
      ref: l
    });
  });
}, Ql = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), oy = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Ql(`${t}-primary`, o),
      Ql(`${t}-danger`, i)
    ]
  };
}, ot = Math.round;
function _s(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Zl = (e, t, n) => n === 0 ? e : e / 100;
function Sr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Pi {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Pi)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Sr(t.r), this.g = Sr(t.g), this.b = Sr(t.b), this.a = typeof t.a == "number" ? Sr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
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
    const n = this.toHsv();
    return n.h = t, this._c(n);
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
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = ot(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: ot(i("r")),
      g: ot(i("g")),
      b: ot(i("b")),
      a: ot(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => ot((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = ot(this.a * 255).toString(16);
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
    const t = this.getHue(), n = ot(this.getSaturation() * 100), r = ot(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = Sr(n, r), o;
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
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const u = ot(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = ot((i + d) * 255), this.g = ot((s + d) * 255), this.b = ot((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ot(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = ot(r * (1 - n) * 255), f = ot(r * (1 - n * c) * 255), d = ot(r * (1 - n * (1 - c)) * 255);
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
    const n = _s(t, Zl);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = _s(t, Zl);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = _s(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ot(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var iy = ["b"], sy = ["v"], Ss = function(t) {
  return Math.round(Number(t || 0));
}, ay = function(t) {
  if (t instanceof Pi)
    return t;
  if (t && be(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Pn(n, iy);
    return Y(Y({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Kt = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    return vt(this, n), t.call(this, ay(r));
  }
  return yt(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Ss(o.s * 100), s = Ss(o.b * 100), a = Ss(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), f = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : f;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Pn(o, sy);
      return Y(Y({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), n;
}(Pi), cy = "rc-color-picker", Vn = function(t) {
  return t instanceof Kt ? t : new Kt(t);
}, ly = Vn("#1677ff"), r0 = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, i = t.color, s = t.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, f = r.current.getBoundingClientRect(), d = f.width, u = f.height, v = d / 2, g = u / 2, h = (n.x + v) / c, p = 1 - (n.y + g) / l, _ = i.toHsb(), b = h, x = (n.x + v) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Vn(Y(Y({}, _), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return Vn(Y(Y({}, _), {}, {
          a: b <= 0 ? 0 : b
        }));
    }
  return Vn({
    h: _.h,
    s: h <= 0 ? 0 : h,
    b: p >= 1 ? 1 : p,
    a: _.a
  });
}, o0 = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, uy = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, i = t.style, s = t.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ U.createElement("div", {
    className: ye(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: n
    }
  }));
};
function fy(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function i0(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = lt({
    x: 0,
    y: 0
  }), f = ie(l, 2), d = f[0], u = f[1], v = Se(null), g = Se(null);
  qe(function() {
    u(s());
  }, [a]), qe(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null;
    };
  }, []);
  var h = function(E) {
    var y = fy(E), A = y.pageX, O = y.pageY, k = n.current.getBoundingClientRect(), B = k.x, W = k.y, ne = k.width, Q = k.height, D = t.current.getBoundingClientRect(), X = D.width, K = D.height, N = X / 2, $ = K / 2, P = Math.max(0, Math.min(A - B, ne)) - N, j = Math.max(0, Math.min(O - W, Q)) - $, H = {
      x: P,
      y: r === "x" ? d.y : j
    };
    if (X === 0 && K === 0 || X !== K)
      return !1;
    o == null || o(H);
  }, p = function(E) {
    E.preventDefault(), h(E);
  }, _ = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null, i == null || i();
  }, b = function(E) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), !c && (h(E), document.addEventListener("mousemove", p), document.addEventListener("mouseup", _), document.addEventListener("touchmove", p), document.addEventListener("touchend", _), v.current = p, g.current = _);
  };
  return [d, b];
}
var s0 = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, i = t.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: ye("".concat(i, "-handler"), q({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, a0 = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-palette"),
    style: Y({
      position: "relative"
    }, r)
  }, n);
}, c0 = /* @__PURE__ */ rr(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ U.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), dy = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, i = t.onChangeComplete, s = t.disabled, a = Se(), c = Se(), l = Se(n), f = ln(function(h) {
    var p = r0({
      offset: h,
      targetRef: c,
      containerRef: a,
      color: n
    });
    l.current = p, r(p);
  }), d = i0({
    color: n,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return o0(n);
    },
    onDragChange: f,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), u = ie(d, 2), v = u[0], g = u[1];
  return /* @__PURE__ */ U.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ U.createElement(a0, {
    prefixCls: o
  }, /* @__PURE__ */ U.createElement(c0, {
    x: v.x,
    y: v.y,
    ref: c
  }, /* @__PURE__ */ U.createElement(s0, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, hy = function(t, n) {
  var r = Qg(t, {
    value: n
  }), o = ie(r, 2), i = o[0], s = o[1], a = Nr(function() {
    return Vn(i);
  }, [i]);
  return [a, s];
}, py = function(t) {
  var n = t.colors, r = t.children, o = t.direction, i = o === void 0 ? "to right" : o, s = t.type, a = t.prefixCls, c = Nr(function() {
    return n.map(function(l, f) {
      var d = Vn(l);
      return s === "alpha" && f === n.length - 1 && (d = new Kt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, s]);
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, xy = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, i = t.onChange, s = t.onChangeComplete, a = t.color, c = t.type, l = Se(), f = Se(), d = Se(a), u = function(y) {
    return c === "hue" ? y.getHue() : y.a * 100;
  }, v = ln(function(E) {
    var y = r0({
      offset: E,
      targetRef: f,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = y, i(u(y));
  }), g = i0({
    color: a,
    targetRef: f,
    containerRef: l,
    calculate: function() {
      return o0(a, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      s(u(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), h = ie(g, 2), p = h[0], _ = h[1], b = U.useMemo(function() {
    if (c === "hue") {
      var E = a.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var y = new Kt(E);
      return y;
    }
    return a;
  }, [a, c]), x = U.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ U.createElement("div", {
    ref: l,
    className: ye("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: _,
    onTouchStart: _
  }, /* @__PURE__ */ U.createElement(a0, {
    prefixCls: n
  }, /* @__PURE__ */ U.createElement(c0, {
    x: p.x,
    y: p.y,
    ref: f
  }, /* @__PURE__ */ U.createElement(s0, {
    size: "small",
    color: b.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ U.createElement(py, {
    colors: x,
    type: c,
    prefixCls: n
  })));
};
function gy(e) {
  return w.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || xy];
  }, [e]);
}
var my = [{
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
}], vy = /* @__PURE__ */ rr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? cy : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, f = e.panelRender, d = e.disabledAlpha, u = d === void 0 ? !1 : d, v = e.disabled, g = v === void 0 ? !1 : v, h = e.components, p = gy(h), _ = ie(p, 1), b = _[0], x = hy(r || ly, n), E = ie(x, 2), y = E[0], A = E[1], O = Nr(function() {
    return y.setA(1).toRgbString();
  }, [y]), k = function(j, H) {
    n || A(j), s == null || s(j, H);
  }, B = function(j) {
    return new Kt(y.setHue(j));
  }, W = function(j) {
    return new Kt(y.setA(j / 100));
  }, ne = function(j) {
    k(B(j), {
      type: "hue",
      value: j
    });
  }, Q = function(j) {
    k(W(j), {
      type: "alpha",
      value: j
    });
  }, D = function(j) {
    a && a(B(j));
  }, X = function(j) {
    a && a(W(j));
  }, K = ye("".concat(i, "-panel"), c, q({}, "".concat(i, "-panel-disabled"), g)), N = {
    prefixCls: i,
    disabled: g,
    color: y
  }, $ = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(dy, ht({
    onChange: k
  }, N, {
    onChangeComplete: a
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ U.createElement("div", {
    className: ye("".concat(i, "-slider-group"), q({}, "".concat(i, "-slider-group-disabled-alpha"), u))
  }, /* @__PURE__ */ U.createElement(b, ht({}, N, {
    type: "hue",
    colors: my,
    min: 0,
    max: 359,
    value: y.getHue(),
    onChange: ne,
    onChangeComplete: D
  })), !u && /* @__PURE__ */ U.createElement(b, ht({}, N, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: O
    }],
    min: 0,
    max: 100,
    value: y.a * 100,
    onChange: Q,
    onChangeComplete: X
  }))), /* @__PURE__ */ U.createElement(uy, {
    color: y.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ U.createElement("div", {
    className: K,
    style: l,
    ref: t
  }, typeof f == "function" ? f($) : $);
});
process.env.NODE_ENV !== "production" && (vy.displayName = "ColorPicker");
const yy = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", by = (e, t) => e ? yy(e, t) : "";
let _y = /* @__PURE__ */ function() {
  function e(t) {
    vt(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map((o) => {
      let {
        color: i,
        percent: s
      } = o;
      return {
        color: new e(i),
        percent: s
      };
    }), this.metaColor = new Kt(this.colors[0].color.metaColor)) : this.metaColor = new Kt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return yt(e, [{
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
      return by(this.toHexString(), this.metaColor.a < 1);
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
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, o) => {
        const i = n.colors[o];
        return r.percent === i.percent && r.color.equals(i.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
}();
const Sy = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new Kt(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? s.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, l0 = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return dn(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, u0 = (e) => {
  var t, n, r, o, i, s;
  const a = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, f = (o = e.contentLineHeight) !== null && o !== void 0 ? o : ko(a), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : ko(c), u = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : ko(l), v = Sy(new _y(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = dc.reduce((h, p) => Object.assign(Object.assign({}, h), {
    [`${p}ShadowColor`]: `0 ${Yt(e.controlOutlineWidth)} 0 ${Tr(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, g), {
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
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: f,
    contentLineHeightSM: d,
    contentLineHeightLG: u,
    paddingBlock: Math.max((e.controlHeight - a * f) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * u) / 2 - e.lineWidth, 0)
  });
}, Cy = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Yt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Od(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": pm(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        },
        [`&${t}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${s}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: c(a).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(a).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(a).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(a).mul(-1).equal()
          }
        }
      }
    }
  };
}, f0 = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), wy = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Ey = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Oy = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ii = (e, t, n, r, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, f0(e, Object.assign({
    background: t
  }, s), Object.assign({
    background: t
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), Ty = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Oy(e))
}), Ry = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ni = (e, t, n, r) => {
  const i = r && ["link", "text"].includes(r) ? Ry : Ty;
  return Object.assign(Object.assign({}, i(e)), f0(e.componentCls, t, n));
}, ki = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, Ni(e, r, o))
}), ji = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, Ni(e, r, o))
}), Li = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Mi = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Ni(e, n, r))
}), zt = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Ni(e, r, o, n))
}), Ay = (e) => {
  const {
    componentCls: t
  } = e;
  return dc.reduce((n, r) => {
    const o = e[`${r}6`], i = e[`${r}1`], s = e[`${r}5`], a = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, ki(e, e.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), ji(e, o, e.colorBgContainer, {
        color: s,
        borderColor: s,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Li(e)), Mi(e, i, {
        background: a
      }, {
        background: c
      })), zt(e, o, "link", {
        color: s
      }, {
        color: l
      })), zt(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, $y = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ki(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Li(e)), Mi(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ii(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), zt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Py = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, ji(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Li(e)), Mi(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), zt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), zt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Ii(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Iy = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ki(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), ji(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Li(e)), Mi(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), zt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), zt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ii(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Ny = (e) => Object.assign(Object.assign({}, zt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ii(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), ky = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: $y(e),
    [`${t}-color-primary`]: Py(e),
    [`${t}-color-dangerous`]: Iy(e),
    [`${t}-color-link`]: Ny(e)
  }, Ay(e));
}, jy = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, ji(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), zt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ki(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), zt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), gc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: a,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: r,
        padding: `${Yt(c)} ${Yt(s)}`,
        borderRadius: i,
        [`&${n}-icon-only`]: {
          width: r,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: wy(e)
    },
    {
      [`${n}${n}-round${t}`]: Ey(e)
    }
  ];
}, Ly = (e) => {
  const t = dn(e, {
    fontSize: e.contentFontSize
  });
  return gc(t, e.componentCls);
}, My = (e) => {
  const t = dn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return gc(t, `${e.componentCls}-sm`);
}, Dy = (e) => {
  const t = dn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return gc(t, `${e.componentCls}-lg`);
}, By = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Hy = Ri("Button", (e) => {
  const t = l0(e);
  return [
    // Shared
    Cy(t),
    // Size
    Ly(t),
    My(t),
    Dy(t),
    // Block
    By(t),
    // Color
    ky(t),
    // https://github.com/ant-design/ant-design/issues/50969
    jy(t),
    // Button Group
    oy(t)
  ];
}, u0, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function zy(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [a]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function Fy(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Vy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, zy(e, r, t)), Fy(n, r, t))
  };
}
function Uy(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
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
function qy(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Wy(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Uy(e, t)), qy(e.componentCls, t))
  };
}
const Gy = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: n,
    lineWidth: r,
    calc: o
  } = e, i = o(r).mul(-1).equal(), s = (a) => {
    const c = `${t}-compact${a ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: n,
        content: '""',
        width: a ? "100%" : r,
        height: a ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, Xy = gm(["Button", "compact"], (e) => {
  const t = l0(e);
  return [
    // Space Compact
    Vy(t),
    Wy(t),
    Gy(t)
  ];
}, u0);
var Yy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ky(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Jy = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Qy = /* @__PURE__ */ U.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: f = "default",
    size: d,
    styles: u,
    disabled: v,
    className: g,
    rootClassName: h,
    children: p,
    icon: _,
    iconPosition: b = "start",
    ghost: x = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: A,
    style: O = {},
    autoInsertSpace: k,
    autoFocus: B
  } = e, W = Yy(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), ne = c || "default", [Q, D] = Nr(() => {
    if (s && a)
      return [s, a];
    const Re = Jy[ne] || [];
    return l ? ["danger", Re[1]] : Re;
  }, [c, s, a, l]), K = Q === "danger" ? "dangerous" : Q, {
    getPrefixCls: N,
    direction: $,
    autoInsertSpace: P,
    className: j,
    style: H,
    classNames: z,
    styles: G
  } = fc("button"), te = (n = k ?? P) !== null && n !== void 0 ? n : !0, J = N("btn", i), [se, ae, ce] = Hy(J), Ce = wt(Xo), pe = v ?? Ce, Ie = wt(n0), $e = Nr(() => Ky(o), [o]), [R, re] = lt($e.loading), [T, F] = lt(!1), S = Se(null), Z = s1(t, S), _e = Z0.count(p) === 1 && !_ && !mo(D), Le = Se(!0);
  U.useEffect(() => (Le.current = !1, () => {
    Le.current = !0;
  }), []), qe(() => {
    let Re = null;
    $e.delay > 0 ? Re = setTimeout(() => {
      Re = null, re(!0);
    }, $e.delay) : re($e.loading);
    function tt() {
      Re && (clearTimeout(Re), Re = null);
    }
    return tt;
  }, [$e]), qe(() => {
    if (!S.current || !te)
      return;
    const Re = S.current.textContent || "";
    _e && Ta(Re) ? T || F(!0) : T && F(!1);
  }), qe(() => {
    B && S.current && S.current.focus();
  }, []);
  const gt = U.useCallback((Re) => {
    var tt;
    if (R || pe) {
      Re.preventDefault();
      return;
    }
    (tt = e.onClick) === null || tt === void 0 || tt.call(e, ("href" in e, Re));
  }, [e.onClick, R, pe]);
  if (process.env.NODE_ENV !== "production") {
    const Re = fn("Button");
    process.env.NODE_ENV !== "production" && Re(!(typeof _ == "string" && _.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${_}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Re(!(x && mo(D)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Me,
    compactItemClassnames: Ae
  } = Qv(J, $), Ke = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ut = Kv((Re) => {
    var tt, Vt;
    return (Vt = (tt = d ?? Me) !== null && tt !== void 0 ? tt : Ie) !== null && Vt !== void 0 ? Vt : Re;
  }), ct = ut && (r = Ke[ut]) !== null && r !== void 0 ? r : "", Ft = R ? "loading" : _, L = Zd(W, ["navigate"]), C = ye(J, ae, ce, {
    [`${J}-${f}`]: f !== "default" && f,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${J}-${ne}`]: ne,
    [`${J}-dangerous`]: l,
    [`${J}-color-${K}`]: K,
    [`${J}-variant-${D}`]: D,
    [`${J}-${ct}`]: ct,
    [`${J}-icon-only`]: !p && p !== 0 && !!Ft,
    [`${J}-background-ghost`]: x && !mo(D),
    [`${J}-loading`]: R,
    [`${J}-two-chinese-chars`]: T && te && !R,
    [`${J}-block`]: E,
    [`${J}-rtl`]: $ === "rtl",
    [`${J}-icon-end`]: b === "end"
  }, Ae, g, h, j), me = Object.assign(Object.assign({}, H), O), xe = ye(A == null ? void 0 : A.icon, z.icon), ke = Object.assign(Object.assign({}, (u == null ? void 0 : u.icon) || {}), G.icon || {}), de = _ && !R ? /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: J,
    className: xe,
    style: ke
  }, _) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: J,
    className: xe,
    style: ke
  }, o.icon) : /* @__PURE__ */ U.createElement(ry, {
    existIcon: !!_,
    prefixCls: J,
    loading: R,
    mount: Le.current
  }), et = p || p === 0 ? ny(p, _e && te) : null;
  if (L.href !== void 0)
    return se(/* @__PURE__ */ U.createElement("a", Object.assign({}, L, {
      className: ye(C, {
        [`${J}-disabled`]: pe
      }),
      href: pe ? void 0 : L.href,
      style: me,
      onClick: gt,
      ref: Z,
      tabIndex: pe ? -1 : 0
    }), de, et));
  let We = /* @__PURE__ */ U.createElement("button", Object.assign({}, W, {
    type: y,
    className: C,
    style: me,
    onClick: gt,
    disabled: pe,
    ref: Z
  }), de, et, Ae && /* @__PURE__ */ U.createElement(Xy, {
    prefixCls: J
  }));
  return mo(D) || (We = /* @__PURE__ */ U.createElement(t0, {
    component: "Button",
    disabled: R
  }, We)), se(We);
}), Di = Qy;
Di.Group = ey;
Di.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Di.displayName = "Button");
function Zy(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(p) {
    var _ = p || {}, b = _.upcomingOnly, x = b === void 0 ? !1 : b;
    v(), d = !x;
  }
  function h() {
    for (var p = arguments.length, _ = new Array(p), b = 0; b < p; b++)
      _[b] = arguments[b];
    var x = this, E = Date.now() - u;
    if (d)
      return;
    function y() {
      u = Date.now(), t.apply(x, _);
    }
    function A() {
      f = void 0;
    }
    !a && l && !f && y(), v(), l === void 0 && E > e ? a ? (u = Date.now(), i || (f = setTimeout(l ? A : y, e))) : y() : i !== !0 && (f = setTimeout(l ? A : y, l === void 0 ? e - E : e));
  }
  return h.cancel = g, h;
}
function eb(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return Zy(e, t, {
    debounceMode: i !== !1
  });
}
function eu(e) {
  return ["small", "middle", "large"].includes(e);
}
const d0 = ["wrap", "nowrap", "wrap-reverse"], h0 = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], p0 = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], tb = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && d0.includes(n)
  };
}, nb = (e, t) => {
  const n = {};
  return p0.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, rb = (e, t) => {
  const n = {};
  return h0.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function ob(e, t) {
  return ye(Object.assign(Object.assign(Object.assign({}, tb(e, t)), nb(e, t)), rb(e, t)));
}
const ib = (e) => {
  const {
    componentCls: t
  } = e;
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
}, sb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
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
}, ab = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return d0.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, cb = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return p0.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, lb = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return h0.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, ub = () => ({}), fb = Ri("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = dn(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [ib(o), sb(o), ab(o), cb(o), lb(o)];
}, ub, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var db = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const x0 = /* @__PURE__ */ U.forwardRef((e, t) => {
  const {
    prefixCls: n,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: f = "div"
  } = e, d = db(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = U.useContext(It), h = g("flex", n), [p, _, b] = fb(h), x = l ?? (u == null ? void 0 : u.vertical), E = ye(o, r, u == null ? void 0 : u.className, h, _, b, ob(h, e), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: eu(a),
    [`${h}-vertical`]: x
  }), y = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (y.flex = s), a && !eu(a) && (y.gap = a), p(/* @__PURE__ */ U.createElement(f, Object.assign({
    ref: t,
    className: E,
    style: y
  }, Zd(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (x0.displayName = "Flex");
const Ko = 100, g0 = Ko / 5, m0 = Ko / 2 - g0 / 2, Cs = m0 * 2 * Math.PI, tu = 50, nu = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: ye(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: m0,
    cx: tu,
    cy: tu,
    strokeWidth: g0,
    style: n
  });
}, hb = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  oc(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Cs / 4}`,
    strokeDasharray: `${Cs * c / 100} ${Cs * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: ye(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Ko} ${Ko}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(nu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(nu, {
    dotClassName: r,
    style: l
  })));
};
function pb(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: ye(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: ye(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(hb, {
    prefixCls: t,
    percent: n
  }));
}
function xb(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? pc(n, {
    className: ye(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(pb, {
    prefixCls: t,
    percent: r
  });
}
const gb = new sd("antSpinMove", {
  to: {
    opacity: 1
  }
}), mb = new sd("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), vb = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ed(e)), {
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
      [`${t}-text`]: {
        fontSize: e.fontSize,
        paddingTop: n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
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
        [t]: {
          [`${t}-dot-holder`]: {
            color: e.colorWhite
          },
          [`${t}-text`]: {
            color: e.colorTextLightSolid
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
          maxHeight: e.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: n(e.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
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
        color: e.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${t}-dot-holder`]: {
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
      [`${t}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${t}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: e.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          height: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: gb,
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
          animationName: mb,
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
      [`&-sm ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeSM
        }
      },
      [`&-sm ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),
          height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeLG
        }
      },
      [`&-lg ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, yb = (e) => {
  const {
    controlHeightLG: t,
    controlHeight: n
  } = e;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: n
  };
}, bb = Ri("Spin", (e) => {
  const t = dn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [vb(t)];
}, yb), _b = 200, ru = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Sb(e, t) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = t === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ru.length; c += 1) {
        const [l, f] = ru[c];
        if (s <= l)
          return s + a * f;
      }
      return s;
    });
  }, _b)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var Cb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let v0;
function wb(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const Ir = (e) => {
  var t;
  const {
    prefixCls: n,
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
  } = e, h = Cb(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: _,
    className: b,
    style: x,
    indicator: E
  } = fc("spin"), y = p("spin", n), [A, O, k] = bb(y), [B, W] = w.useState(() => r && !wb(r, o)), ne = Sb(B, g);
  w.useEffect(() => {
    if (r) {
      const P = eb(o, () => {
        W(!0);
      });
      return P(), () => {
        var j;
        (j = P == null ? void 0 : P.cancel) === null || j === void 0 || j.call(P);
      };
    }
    W(!1);
  }, [o, r]);
  const Q = w.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const P = fn("Spin");
    process.env.NODE_ENV !== "production" && P(!c || Q || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const D = ye(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: B,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: _ === "rtl"
  }, i, !u && s, O, k), X = ye(`${y}-container`, {
    [`${y}-blur`]: B
  }), K = (t = v ?? E) !== null && t !== void 0 ? t : v0, N = Object.assign(Object.assign({}, x), f), $ = /* @__PURE__ */ w.createElement("div", Object.assign({}, h, {
    style: N,
    className: D,
    "aria-live": "polite",
    "aria-busy": B
  }), /* @__PURE__ */ w.createElement(xb, {
    prefixCls: y,
    indicator: K,
    percent: ne
  }), c && (Q || u) ? /* @__PURE__ */ w.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return A(Q ? /* @__PURE__ */ w.createElement("div", Object.assign({}, h, {
    className: ye(`${y}-nested-loading`, l, O, k)
  }), B && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, $), /* @__PURE__ */ w.createElement("div", {
    className: X,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ w.createElement("div", {
    className: ye(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: B
    }, s, O, k)
  }, $) : $);
};
Ir.setDefaultIndicator = (e) => {
  v0 = e;
};
process.env.NODE_ENV !== "production" && (Ir.displayName = "Spin");
function y0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Eb } = Object.prototype, { getPrototypeOf: mc } = Object, { iterator: Bi, toStringTag: b0 } = Symbol, Hi = /* @__PURE__ */ ((e) => (t) => {
  const n = Eb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kt = (e) => (e = e.toLowerCase(), (t) => Hi(t) === e), zi = (e) => (t) => typeof t === e, { isArray: dr } = Array, Hr = zi("undefined");
function Ob(e) {
  return e !== null && !Hr(e) && e.constructor !== null && !Hr(e.constructor) && pt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _0 = kt("ArrayBuffer");
function Tb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _0(e.buffer), t;
}
const Rb = zi("string"), pt = zi("function"), S0 = zi("number"), Fi = (e) => e !== null && typeof e == "object", Ab = (e) => e === !0 || e === !1, jo = (e) => {
  if (Hi(e) !== "object")
    return !1;
  const t = mc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(b0 in e) && !(Bi in e);
}, $b = kt("Date"), Pb = kt("File"), Ib = kt("Blob"), Nb = kt("FileList"), kb = (e) => Fi(e) && pt(e.pipe), jb = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pt(e.append) && ((t = Hi(e)) === "formdata" || // detect form-data instance
  t === "object" && pt(e.toString) && e.toString() === "[object FormData]"));
}, Lb = kt("URLSearchParams"), [Mb, Db, Bb, Hb] = ["ReadableStream", "Request", "Response", "Headers"].map(kt), zb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), dr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function C0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const _n = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, w0 = (e) => !Hr(e) && e !== _n;
function Aa() {
  const { caseless: e } = w0(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && C0(t, o) || o;
    jo(t[i]) && jo(r) ? t[i] = Aa(t[i], r) : jo(r) ? t[i] = Aa({}, r) : dr(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Xr(arguments[r], n);
  return t;
}
const Fb = (e, t, n, { allOwnKeys: r } = {}) => (Xr(t, (o, i) => {
  n && pt(o) ? e[i] = y0(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Vb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ub = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qb = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && mc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Wb = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gb = (e) => {
  if (!e) return null;
  if (dr(e)) return e;
  let t = e.length;
  if (!S0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xb = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mc(Uint8Array)), Yb = (e, t) => {
  const r = (e && e[Bi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Kb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Jb = kt("HTMLFormElement"), Qb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), ou = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Zb = kt("RegExp"), E0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Xr(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, e2 = (e) => {
  E0(e, (t, n) => {
    if (pt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (pt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, t2 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return dr(e) ? r(e) : r(String(e).split(t)), n;
}, n2 = () => {
}, r2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function o2(e) {
  return !!(e && pt(e.append) && e[b0] === "FormData" && e[Bi]);
}
const i2 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Fi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = dr(r) ? [] : {};
        return Xr(r, (s, a) => {
          const c = n(s, o + 1);
          !Hr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, s2 = kt("AsyncFunction"), a2 = (e) => e && (Fi(e) || pt(e)) && pt(e.then) && pt(e.catch), O0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (_n.addEventListener("message", ({ source: o, data: i }) => {
  o === _n && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), _n.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  pt(_n.postMessage)
), c2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(_n) : typeof process < "u" && process.nextTick || O0, l2 = (e) => e != null && pt(e[Bi]), I = {
  isArray: dr,
  isArrayBuffer: _0,
  isBuffer: Ob,
  isFormData: jb,
  isArrayBufferView: Tb,
  isString: Rb,
  isNumber: S0,
  isBoolean: Ab,
  isObject: Fi,
  isPlainObject: jo,
  isReadableStream: Mb,
  isRequest: Db,
  isResponse: Bb,
  isHeaders: Hb,
  isUndefined: Hr,
  isDate: $b,
  isFile: Pb,
  isBlob: Ib,
  isRegExp: Zb,
  isFunction: pt,
  isStream: kb,
  isURLSearchParams: Lb,
  isTypedArray: Xb,
  isFileList: Nb,
  forEach: Xr,
  merge: Aa,
  extend: Fb,
  trim: zb,
  stripBOM: Vb,
  inherits: Ub,
  toFlatObject: qb,
  kindOf: Hi,
  kindOfTest: kt,
  endsWith: Wb,
  toArray: Gb,
  forEachEntry: Yb,
  matchAll: Kb,
  isHTMLForm: Jb,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: E0,
  freezeMethods: e2,
  toObjectSet: t2,
  toCamelCase: Qb,
  noop: n2,
  toFiniteNumber: r2,
  findKey: C0,
  global: _n,
  isContextDefined: w0,
  isSpecCompliantForm: o2,
  toJSONObject: i2,
  isAsyncFn: s2,
  isThenable: a2,
  setImmediate: O0,
  asap: c2,
  isIterable: l2
};
function le(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(le, Error, {
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
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const T0 = le.prototype, R0 = {};
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
  R0[e] = { value: e };
});
Object.defineProperties(le, R0);
Object.defineProperty(T0, "isAxiosError", { value: !0 });
le.from = (e, t, n, r, o, i) => {
  const s = Object.create(T0);
  return I.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), le.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const u2 = null;
function $a(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function A0(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function iu(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = A0(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function f2(e) {
  return I.isArray(e) && !e.some($a);
}
const d2 = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vi(e, t, n) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = I.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, p) {
    return !I.isUndefined(p[h]);
  });
  const r = n.metaTokens, o = n.visitor || f, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (I.isDate(g))
      return g.toISOString();
    if (!c && I.isBlob(g))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(g) || I.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, p) {
    let _ = g;
    if (g && !p && typeof g == "object") {
      if (I.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (I.isArray(g) && f2(g) || (I.isFileList(g) || I.endsWith(h, "[]")) && (_ = I.toArray(g)))
        return h = A0(h), _.forEach(function(x, E) {
          !(I.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? iu([h], E, i) : s === null ? h : h + "[]",
            l(x)
          );
        }), !1;
    }
    return $a(g) ? !0 : (t.append(iu(p, h, i), l(g)), !1);
  }
  const d = [], u = Object.assign(d2, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: $a
  });
  function v(g, h) {
    if (!I.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), I.forEach(g, function(_, b) {
        (!(I.isUndefined(_) || _ === null) && o.call(
          t,
          _,
          I.isString(b) ? b.trim() : b,
          h,
          u
        )) === !0 && v(_, h ? h.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function su(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function vc(e, t) {
  this._pairs = [], e && Vi(e, this, t);
}
const $0 = vc.prototype;
$0.append = function(t, n) {
  this._pairs.push([t, n]);
};
$0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, su);
  } : su;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function h2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function P0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || h2;
  I.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = I.isURLSearchParams(t) ? t.toString() : new vc(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class au {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
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
    I.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const I0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, p2 = typeof URLSearchParams < "u" ? URLSearchParams : vc, x2 = typeof FormData < "u" ? FormData : null, g2 = typeof Blob < "u" ? Blob : null, m2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: p2,
    FormData: x2,
    Blob: g2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yc = typeof window < "u" && typeof document < "u", Pa = typeof navigator == "object" && navigator || void 0, v2 = yc && (!Pa || ["ReactNative", "NativeScript", "NS"].indexOf(Pa.product) < 0), y2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", b2 = yc && window.location.href || "http://localhost", _2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yc,
  hasStandardBrowserEnv: v2,
  hasStandardBrowserWebWorkerEnv: y2,
  navigator: Pa,
  origin: b2
}, Symbol.toStringTag, { value: "Module" })), at = {
  ..._2,
  ...m2
};
function S2(e, t) {
  return Vi(e, new at.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return at.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function C2(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function w2(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function N0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && I.isArray(o) ? o.length : s, c ? (I.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !I.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && I.isArray(o[s]) && (o[s] = w2(o[s])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return I.forEachEntry(e, (r, o) => {
      t(C2(r), o, n, 0);
    }), n;
  }
  return null;
}
function E2(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Yr = {
  transitional: I0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = I.isObject(t);
    if (i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(N0(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return S2(t, this.formSerializer).toString();
      if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Vi(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), E2(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Yr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? le.from(a, le.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
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
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yr.headers[e] = {};
});
const O2 = I.toObjectSet([
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
]), T2 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && O2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, cu = Symbol("internals");
function Cr(e) {
  return e && String(e).trim().toLowerCase();
}
function Lo(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Lo) : String(e);
}
function R2(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const A2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ws(e, t, n, r, o) {
  if (I.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!I.isString(t)) {
    if (I.isString(r))
      return t.indexOf(r) !== -1;
    if (I.isRegExp(r))
      return r.test(t);
  }
}
function $2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function P2(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let xt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, c, l) {
      const f = Cr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Lo(a));
    }
    const s = (a, c) => I.forEach(a, (l, f) => i(l, f, c));
    if (I.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (I.isString(t) && (t = t.trim()) && !A2(t))
      s(T2(t), n);
    else if (I.isObject(t) && I.isIterable(t)) {
      let a = {}, c, l;
      for (const f of t) {
        if (!I.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? I.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Cr(t), t) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return R2(o);
        if (I.isFunction(n))
          return n.call(this, o, r);
        if (I.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Cr(t), t) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ws(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Cr(s), s) {
        const a = I.findKey(r, s);
        a && (!n || ws(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return I.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || ws(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return I.forEach(this, (o, i) => {
      const s = I.findKey(r, i);
      if (s) {
        n[s] = Lo(o), delete n[i];
        return;
      }
      const a = t ? $2(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Lo(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && I.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[cu] = this[cu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Cr(s);
      r[a] || (P2(o, s), r[a] = !0);
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(xt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
I.freezeMethods(xt);
function Es(e, t) {
  const n = this || Yr, r = t || n, o = xt.from(r.headers);
  let i = r.data;
  return I.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function k0(e) {
  return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, t, n), this.name = "CanceledError";
}
I.inherits(hr, le, {
  __CANCEL__: !0
});
function j0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new le(
    "Request failed with status code " + n.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function I2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function N2(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), f = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let d = i, u = 0;
    for (; d !== o; )
      u += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function k2(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const s = (l, f = Date.now()) => {
    n = f, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - n;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Jo = (e, t, n = 3) => {
  let r = 0;
  const o = N2(50, 250);
  return k2((i) => {
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
    e(d);
  }, n);
}, lu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, uu = (e) => (...t) => I.asap(() => e(...t)), j2 = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, at.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, L2 = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      I.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), I.isString(r) && s.push("path=" + r), I.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
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
function M2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function D2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function L0(e, t, n) {
  let r = !M2(t);
  return e && (r || n == !1) ? D2(e, t) : t;
}
const fu = (e) => e instanceof xt ? { ...e } : e;
function In(e, t) {
  t = t || {};
  const n = {};
  function r(l, f, d, u) {
    return I.isPlainObject(l) && I.isPlainObject(f) ? I.merge.call({ caseless: u }, l, f) : I.isPlainObject(f) ? I.merge({}, f) : I.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d, u) {
    if (I.isUndefined(f)) {
      if (!I.isUndefined(l))
        return r(void 0, l, d, u);
    } else return r(l, f, d, u);
  }
  function i(l, f) {
    if (!I.isUndefined(f))
      return r(void 0, f);
  }
  function s(l, f) {
    if (I.isUndefined(f)) {
      if (!I.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in t)
      return r(l, f);
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
    headers: (l, f, d) => o(fu(l), fu(f), d, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = c[f] || o, u = d(e[f], t[f], f);
    I.isUndefined(u) && d !== a || (n[f] = u);
  }), n;
}
const M0 = (e) => {
  const t = In({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = xt.from(s), t.url = P0(L0(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (I.isFormData(n)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (at.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)), r || r !== !1 && j2(t.url))) {
    const l = o && i && L2.read(i);
    l && s.set(o, l);
  }
  return t;
}, B2 = typeof XMLHttpRequest < "u", H2 = B2 && function(e) {
  return new Promise(function(n, r) {
    const o = M0(e);
    let i = o.data;
    const s = xt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function _() {
      if (!p)
        return;
      const x = xt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: x,
        config: e,
        request: p
      };
      j0(function(O) {
        n(O), h();
      }, function(O) {
        r(O), h();
      }, y), p = null;
    }
    "onloadend" in p ? p.onloadend = _ : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, p.onabort = function() {
      p && (r(new le("Request aborted", le.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new le("Network Error", le.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || I0;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new le(
        E,
        y.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && I.forEach(s.toJSON(), function(E, y) {
      p.setRequestHeader(y, E);
    }), I.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([u, g] = Jo(l, !0), p.addEventListener("progress", u)), c && p.upload && ([d, v] = Jo(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (x) => {
      p && (r(!x || x.type ? new hr(null, e, p) : x), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = I2(o.url);
    if (b && at.protocols.indexOf(b) === -1) {
      r(new le("Unsupported protocol " + b + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, z2 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof le ? f : new hr(f instanceof Error ? f.message : f));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new le(`timeout ${t} of ms exceeded`, le.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => I.asap(a), c;
  }
}, F2 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, V2 = async function* (e, t) {
  for await (const n of U2(e))
    yield* F2(n, t);
}, U2 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, du = (e, t, n, r) => {
  const o = V2(e, t);
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
        if (n) {
          let u = i += d;
          n(u);
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
}, Ui = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", D0 = Ui && typeof ReadableStream == "function", q2 = Ui && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), B0 = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, W2 = D0 && B0(() => {
  let e = !1;
  const t = new Request(at.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), hu = 64 * 1024, Ia = D0 && B0(() => I.isReadableStream(new Response("").body)), Qo = {
  stream: Ia && ((e) => e.body)
};
Ui && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qo[t] && (Qo[t] = I.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new le(`Response type '${t}' is not supported`, le.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const G2 = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(at.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await q2(e)).byteLength;
}, X2 = async (e, t) => {
  const n = I.toFiniteNumber(e.getContentLength());
  return n ?? G2(t);
}, Y2 = Ui && (async (e) => {
  let {
    url: t,
    method: n,
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
  } = M0(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = z2([o, i && i.toAbortSignal()], s), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (c && W2 && n !== "get" && n !== "head" && (p = await X2(f, r)) !== 0) {
      let y = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (I.isFormData(r) && (A = y.headers.get("content-type")) && f.setContentType(A), y.body) {
        const [O, k] = lu(
          p,
          Jo(uu(c))
        );
        r = du(y.body, hu, O, k);
      }
    }
    I.isString(d) || (d = d ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    g = new Request(t, {
      ...u,
      signal: v,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: _ ? d : void 0
    });
    let b = await fetch(g);
    const x = Ia && (l === "stream" || l === "response");
    if (Ia && (a || x && h)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((B) => {
        y[B] = b[B];
      });
      const A = I.toFiniteNumber(b.headers.get("content-length")), [O, k] = a && lu(
        A,
        Jo(uu(a), !0)
      ) || [];
      b = new Response(
        du(b.body, hu, O, () => {
          k && k(), h && h();
        }),
        y
      );
    }
    l = l || "text";
    let E = await Qo[I.findKey(Qo, l) || "text"](b, e);
    return !x && h && h(), await new Promise((y, A) => {
      j0(y, A, {
        data: E,
        headers: xt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (_) {
    throw h && h(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
      new le("Network Error", le.ERR_NETWORK, e, g),
      {
        cause: _.cause || _
      }
    ) : le.from(_, _ && _.code, e, g);
  }
}), Na = {
  http: u2,
  xhr: H2,
  fetch: Y2
};
I.forEach(Na, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pu = (e) => `- ${e}`, K2 = (e) => I.isFunction(e) || e === null || e === !1, H0 = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !K2(n) && (r = Na[(s = String(n)).toLowerCase()], r === void 0))
        throw new le(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(pu).join(`
`) : " " + pu(i[0]) : "as no adapter specified";
      throw new le(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Na
};
function Os(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new hr(null, e);
}
function xu(e) {
  return Os(e), e.headers = xt.from(e.headers), e.data = Es.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), H0.getAdapter(e.adapter || Yr.adapter)(e).then(function(r) {
    return Os(e), r.data = Es.call(
      e,
      e.transformResponse,
      r
    ), r.headers = xt.from(r.headers), r;
  }, function(r) {
    return k0(r) || (Os(e), r && r.response && (r.response.data = Es.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = xt.from(r.response.headers))), Promise.reject(r);
  });
}
const z0 = "1.9.0", qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const gu = {};
qi.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + z0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new le(
        o(s, " has been removed" + (n ? " in " + n : "")),
        le.ERR_DEPRECATED
      );
    return n && !gu[s] && (gu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
qi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function J2(e, t, n) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new le("option " + i + " must be " + c, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new le("Unknown option " + i, le.ERR_BAD_OPTION);
  }
}
const Mo = {
  assertOptions: J2,
  validators: qi
}, Lt = Mo.validators;
let An = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new au(),
      response: new au()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
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
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = In(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Mo.assertOptions(r, {
      silentJSONParsing: Lt.transitional(Lt.boolean),
      forcedJSONParsing: Lt.transitional(Lt.boolean),
      clarifyTimeoutError: Lt.transitional(Lt.boolean)
    }, !1), o != null && (I.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Mo.assertOptions(o, {
      encode: Lt.function,
      serialize: Lt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Mo.assertOptions(n, {
      baseUrl: Lt.spelling("baseURL"),
      withXsrfToken: Lt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && I.merge(
      i.common,
      i[n.method]
    );
    i && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = xt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let f, d = 0, u;
    if (!c) {
      const g = [xu.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(n); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let v = n;
    for (d = 0; d < u; ) {
      const g = a[d++], h = a[d++];
      try {
        v = g(v);
      } catch (p) {
        h.call(this, p);
        break;
      }
    }
    try {
      f = xu.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(t) {
    t = In(this.defaults, t);
    const n = L0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return P0(n, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(t) {
  An.prototype[t] = function(n, r) {
    return this.request(In(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(In(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  An.prototype[t] = n(), An.prototype[t + "Form"] = n(!0);
});
let Q2 = class F0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
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
      r.reason || (r.reason = new hr(i, s, a), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new F0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Z2(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function e_(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const ka = {
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
Object.entries(ka).forEach(([e, t]) => {
  ka[t] = e;
});
function V0(e) {
  const t = new An(e), n = y0(An.prototype.request, t);
  return I.extend(n, An.prototype, t, { allOwnKeys: !0 }), I.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return V0(In(e, o));
  }, n;
}
const Ve = V0(Yr);
Ve.Axios = An;
Ve.CanceledError = hr;
Ve.CancelToken = Q2;
Ve.isCancel = k0;
Ve.VERSION = z0;
Ve.toFormData = Vi;
Ve.AxiosError = le;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = Z2;
Ve.isAxiosError = e_;
Ve.mergeConfig = In;
Ve.AxiosHeaders = xt;
Ve.formToJSON = (e) => N0(I.isHTMLForm(e) ? new FormData(e) : e);
Ve.getAdapter = H0.getAdapter;
Ve.HttpStatusCode = ka;
Ve.default = Ve;
const {
  Axios: w_,
  AxiosError: E_,
  CanceledError: O_,
  isCancel: T_,
  CancelToken: R_,
  VERSION: A_,
  all: $_,
  Cancel: P_,
  isAxiosError: I_,
  spread: N_,
  toFormData: k_,
  AxiosHeaders: j_,
  HttpStatusCode: L_,
  formToJSON: M_,
  getAdapter: D_,
  mergeConfig: B_
} = Ve, Xt = Zo;
(function(e, t) {
  const n = Zo, r = e();
  for (; ; )
    try {
      if (parseInt(n(512)) / 1 + -parseInt(n(507)) / 2 + -parseInt(n(496)) / 3 * (-parseInt(n(499)) / 4) + -parseInt(n(518)) / 5 * (parseInt(n(515)) / 6) + -parseInt(n(517)) / 7 + -parseInt(n(509)) / 8 + -parseInt(n(513)) / 9 * (-parseInt(n(495)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 390228);
Xt(494) + Xt(498);
Ve[Xt(505)][Xt(501) + Xt(514)] = !0;
function Zo(e, t) {
  const n = ei();
  return Zo = function(r, o) {
    return r = r - 493, n[r];
  }, Zo(e, t);
}
const t_ = async (e) => {
  var n, r, o, i;
  const t = Xt;
  try {
    return (await Ve(e))[t(503)];
  } catch (s) {
    throw ((r = (n = s[t(519)]) == null ? void 0 : n[t(503)]) == null ? void 0 : r[t(508)]) || ((i = (o = s[t(519)]) == null ? void 0 : o[t(503)]) == null ? void 0 : i[t(504)]) || s[t(508)];
  }
}, n_ = {};
n_[Xt(502) + "pe"] = Xt(516) + Xt(511);
function ei() {
  const e = ["2192PYMozY", "PATCH", "withCreden", "Content-Ty", "data", "error", "defaults", "POST", "1033624zOuhdF", "message", "5814272qrMmtN", "GET", "n/json", "82052cFDDis", "9ciiKFi", "tials", "6XIJpRt", "applicatio", "4236211weUpkN", "1535345jZpGyW", "response", "DELETE", "PUT", "/api/v1/cl", "20864420yvRrFy", "2067VihoLG", "params", "ient"];
  return ei = function() {
    return e;
  }, ei();
}
const Pe = ti;
(function(e, t) {
  const n = ti, r = e();
  for (; ; )
    try {
      if (parseInt(n(452)) / 1 + parseInt(n(445)) / 2 + parseInt(n(440)) / 3 + -parseInt(n(458)) / 4 + -parseInt(n(455)) / 5 * (-parseInt(n(459)) / 6) + -parseInt(n(434)) / 7 * (parseInt(n(448)) / 8) + parseInt(n(432)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ni, 816963);
const mn = {};
function ti(e, t) {
  const n = ni();
  return ti = function(r, o) {
    return r = r - 432, n[r];
  }, ti(e, t);
}
mn[Pe(437)] = Pe(441) + "E", mn[Pe(438)] = Pe(460), mn[Pe(453)] = Pe(454) + "N", mn[Pe(439)] = Pe(441) + "E", mn[Pe(447)] = Pe(460), mn[Pe(456)] = Pe(454) + "N";
const Ct = mn, ja = {};
ja[Pe(451)] = Pe(460), ja[Pe(450)] = Pe(454) + "N";
const r_ = ja, o_ = Pe(435);
function ni() {
  const e = ["touchstart", "wheelEvent", "469836hNtYDe", "1608576RxyPQo", "ACTION_UP", "3394422RYeYJz", "shortcutEv", "3560053lyuDGK", "moveEvent", "assistiveM", "mousemove", "mouseup", "touchmove", "634437XBDeqK", "ACTION_MOV", "fullscreen", "Event", "enuHide", "727746froEAX", "ent", "touchend", "16NkIlNo", "keyBoardEv", "keydown", "keyup", "462878OaPeMZ", "mousedown", "ACTION_DOW", "10WuVySb"];
  return ni = function() {
    return e;
  }, ni();
}
const i_ = Pe(457), s_ = Pe(449) + Pe(446), U0 = Pe(436) + Pe(444), La = Pe(433) + Pe(446), a_ = Pe(442) + Pe(443);
(function(e, t) {
  const n = Sn, r = e();
  for (; ; )
    try {
      if (-parseInt(n(347)) / 1 * (-parseInt(n(293)) / 2) + -parseInt(n(301)) / 3 + parseInt(n(322)) / 4 + parseInt(n(313)) / 5 + -parseInt(n(387)) / 6 * (-parseInt(n(383)) / 7) + parseInt(n(329)) / 8 + -parseInt(n(369)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 747857);
function ri() {
  const e = ["lsCfv", "mouse", "xNhmu", "802326pmEEEG", "touchend", "keyEvent", "offsetHeig", "EqpiX", "touchEvent", "oTdmc", "mouseup", "arrowleft", "max", "QYyKn", "toUpperCas", "stener", "tab", "uDgaL", "WuahL", "VkBeN", "vAJTB", "62syOSwy", "isDown", "COPY_TEXT", "meta_state", "ctrlKey", "JcjOg", "sbZLJ", "pageY", "3646968zrRtwt", "arrowright", "siElA", "arrowup", "forEach", "showMenu", "getBoundin", "typeKey", "knXDi", "cmIRy", "NAoIY", "oafjA", "4911045vjeFCL", "ytEaJ", "key", "action", "dlfAI", "bZdSA", "tListener", "includes", "ODE", "3449320JDtKvV", "PASTE_TEXT", "top", "height", "qPbfE", "passive", "touch", "3153440HNBEvD", "readText", "removeEven", "addEventLi", "KWvsR", "thbKu", "mousemove", "sqfSa", "sign", "shiftKey", "KEYBOARD_T", "rOjSl", "arrowdown", "keyAction", "offsetWidt", "shift", "kuoYZ", "toLowerCas", "13183RfkwkU", "preventDef", "wbYac", "capslock", "gClientRec", "wxDSv", "backspace", "clientX", "pageX", "now", "control", "clipboard", "KEYBOARD_C", "keydown", "touchstart", "LWIAR", "mousedown", "pTWbv", "wheelEvent", "current", "cANeu", "focus", "14579334UeSqON", "YLAVl", "clientY", "USZqv", "EXT", "enter", "type", "width", "repeat", "touchmove", "left", "deltaY", "ault", "DZGFN", "49bcgbHX"];
  return ri = function() {
    return e;
  }, ri();
}
function Sn(e, t) {
  const n = ri();
  return Sn = function(r, o) {
    return r = r - 292, n[r];
  }, Sn(e, t);
}
const c_ = ({ isMobile: e, assistive: t, onRemoteEvent: n, canvasContent: r, canvasRef: o }) => {
  const [i, s] = lt(!1), a = (d) => {
    const u = Sn;
    if (u(367) === u(345)) _0xfcf27e[u(308)] = u(359) + u(321), _0x2fe254[u(315)] = 66;
    else {
      if (d[u(348) + u(381)](), !o[u(366)]) return;
      const v = o[u(366)], g = v[u(307) + u(351) + "t"]();
      let h = Ct[d[u(375)]];
      if (t[u(294)] == !0 || t[u(306)] == !0)
        if (u(311) === u(334)) _0x12cf9f[u(308)] = u(359) + u(321), _0x39c342[u(315)] = 67;
        else {
          if (h == Ct[u(394)])
            if (u(401) === u(401)) n(U0, {});
            else {
              if (_0x570012[u(348) + u(381)](), !_0x367e91[u(366)]) return;
              const y = _0x32f4ff[u(366)], A = _0x85eba9[u(337)](_0x5d6b44[u(380)]), O = y[u(307) + u(351) + "t"]();
              _0x4bfd12(_0x17df6e, { action: u(365), width: y[u(343) + "h"], height: y[u(390) + "ht"], x: _0x58ebef[u(354)] - O[u(379)], y: _0x3de9c4[u(371)] - O[u(324)], delta: A, ts: _0xa1b1d7[u(356)]() }), y[u(368)]();
            }
          return;
        }
      if (h == Ct[u(363)] && (u(362) === u(391) ? (_0x47411e[u(308)] = u(359) + u(321), _0x2c57ab[u(315)] = 61) : s(!0)), h != Ct[u(363)] && i == !1)
        if (u(364) !== u(364)) _0x1b64d0[u(308)] = u(359) + u(321), _0x4ad7b5[u(315)] = 22;
        else return;
      h == Ct[u(394)] && s(!1);
      let p, _;
      if (d[u(375)][u(320)](u(328)))
        if (u(340) === u(318)) _0x358b41[u(332) + u(399)](u(360), _0x27fdb7), [u(335), u(363), u(394)][u(305)]((y) => {
          const A = u;
          _0x8c08c9[A(332) + A(399)](y, _0x226e98);
        });
        else {
          const { touches: y, changedTouches: A } = d, O = y[0] ?? A[0];
          p = O[u(355)] - g[u(379)], _ = O[u(300)] - g[u(324)];
        }
      else d[u(375)][u(320)](u(385)) && (u(333) === u(333) ? (p = d[u(354)] - g[u(379)], _ = d[u(371)] - g[u(324)]) : (_0x196269[u(308)] = u(359) + u(321), _0x17d490[u(315)] = 21));
      const b = 1, x = p < b || p > v[u(376)] - b, E = _ < b || _ > v[u(325)] - b;
      (x || E) && (u(372) === u(372) ? (p = Math[u(396)](1, p), _ = Math[u(396)](1, _), h = Ct[u(394)]) : ([u(335), u(363), u(394)][u(305)]((y) => {
        const A = u;
        _0x206702[A(331) + A(319)](y, _0xbf4e18);
      }), _0x3b7d48[u(331) + u(319)](u(360), _0x35d70f))), n(o_, { action: u(392), keyAction: h, x: p, y: _, width: g[u(376)], height: g[u(325)], ts: Date[u(356)]() }), v[u(368)]();
    }
  }, c = (d) => {
    const u = Sn;
    if (d[u(348) + u(381)](), !o[u(366)]) return;
    const v = o[u(366)], g = Math[u(337)](d[u(380)]), h = v[u(307) + u(351) + "t"]();
    n(i_, { action: u(365), width: v[u(343) + "h"], height: v[u(390) + "ht"], x: d[u(354)] - h[u(379)], y: d[u(371)] - h[u(324)], delta: g, ts: Date[u(356)]() }), v[u(368)]();
  }, l = async (d) => {
    const u = Sn;
    if (u(309) !== u(349)) {
      if (d[u(348) + u(381)](), !o[u(366)]) return;
      const v = o[u(366)], g = r_[d[u(375)]], h = d[u(315)][u(346) + "e"]();
      if (((x) => {
        const E = u;
        if (E(352) !== E(386))
          return [E(357), E(344), E(350)][E(320)](x);
        _0x2a54ac(!0);
      })(h) == !0) return;
      const _ = async () => {
        const x = u, E = {};
        E[x(316)] = x(389), E[x(342)] = g, E[x(308)] = x(339) + x(373), E[x(315)] = d[x(315)], E[x(377)] = 0, E[x(296)] = 0;
        const y = E;
        if (d[x(297)] == !0) {
          if (h == "c") y[x(308)] = x(295);
          else if (h == "a") {
            if (x(403) === x(326)) return;
            y[x(308)] = x(359) + x(321), y[x(296)] = 4096, y[x(315)] = 29;
          } else if (h == "v")
            if (x(303) !== x(303)) {
              const { touches: A, changedTouches: O } = _0x4fc187, k = A[0] ?? O[0];
              _0xf5499c = k[x(355)] - _0x59e1bf[x(379)], _0xf9a35d = k[x(300)] - _0x226bed[x(324)];
            } else y[x(308)] = x(323), y[x(315)] = await navigator[x(358)][x(330)]();
        } else
          h == x(304) ? x(317) === x(299) ? (_0x3570e9[x(332) + x(399)](x(361), _0x311a94, _0x229e58), _0x516476[x(332) + x(399)](x(378), _0x595c93, _0x4c1530), _0x423578[x(332) + x(399)](x(388), _0x29394f)) : (y[x(308)] = x(359) + x(321), y[x(315)] = 19) : h == x(341) ? (y[x(308)] = x(359) + x(321), y[x(315)] = 20) : h == x(395) ? (y[x(308)] = x(359) + x(321), y[x(315)] = 21) : h == x(302) ? (y[x(308)] = x(359) + x(321), y[x(315)] = 22) : h == x(353) ? (y[x(308)] = x(359) + x(321), y[x(315)] = 67) : h == x(374) ? x(402) === x(314) ? (_0x109fca = _0x3ad997[x(396)](1, _0x1ef5c7), _0x3b8689 = _0xa8d1a3[x(396)](1, _0x5cbd1d), _0x464dbf = _0x291c62[x(394)]) : (y[x(308)] = x(359) + x(321), y[x(315)] = 66) : h == x(400) && (x(382) !== x(382) ? (_0x2ae008[x(308)] = x(359) + x(321), _0x5022d2[x(315)] = 19) : (y[x(308)] = x(359) + x(321), y[x(315)] = 61));
        if (y[x(375)] == x(339) + x(373))
          if (x(292) !== x(292)) {
            _0x18e220 == _0x3811ab[x(394)] && _0x37872b(_0x136fcb, {});
            return;
          } else d[x(338)] == !0 && (y[x(315)] = y[x(315)][x(398) + "e"]());
        return y;
      }, b = await _();
      b && (u(336) === u(336) ? n(s_, b) : (_0x1b91b9[u(308)] = u(359) + u(321), _0xad7e17[u(296)] = 4096, _0x1ec462[u(315)] = 29)), v[u(368)]();
    } else _0x7c9964(_0x595f5e, _0x58b24d);
  };
  qe(() => {
    const d = Sn, u = o[d(366)];
    if (u) {
      const v = {};
      v[d(327)] = !1;
      const g = v;
      if (e) {
        if (d(312) === d(393))
          return [d(357), d(344), d(350)][d(320)](_0x1f18a2);
        u[d(332) + d(399)](d(361), a, g), u[d(332) + d(399)](d(378), a, g), u[d(332) + d(399)](d(388), a);
      } else if (d(370) === d(370)) u[d(332) + d(399)](d(360), l), [d(335), d(363), d(394)][d(305)]((h) => {
        const p = d;
        u[p(332) + p(399)](h, a);
      });
      else return;
      return () => {
        const h = d;
        h(397) !== h(298) ? u && (e ? h(310) === h(310) ? [h(361), h(378), h(388)][h(305)]((p) => {
          const _ = h;
          u[_(331) + _(319)](p, a);
        }) : (_0x456452[h(308)] = h(359) + h(321), _0xd6aa9c[h(315)] = 20) : ([h(335), h(363), h(394)][h(305)]((p) => {
          const _ = h;
          if (_(384) === _(384)) u[_(331) + _(319)](p, a);
          else return;
        }), u[h(331) + h(319)](h(360), l))) : _0x4257a1[h(338)] == !0 && (_0x545c07[h(315)] = _0x35521a[h(315)][h(398) + "e"]());
      };
    }
  }, [e, a, c, l, o]);
  const f = { ref: o, ...r };
  return ee.jsx(hp, f);
}, l_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", Wi = oi;
(function(e, t) {
  const n = oi, r = e();
  for (; ; )
    try {
      if (parseInt(n(389)) / 1 + parseInt(n(391)) / 2 + parseInt(n(395)) / 3 * (-parseInt(n(399)) / 4) + parseInt(n(394)) / 5 + parseInt(n(393)) / 6 + -parseInt(n(392)) / 7 + -parseInt(n(390)) / 8 * (parseInt(n(397)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ii, 271426);
function oi(e, t) {
  const n = ii();
  return oi = function(r, o) {
    return r = r - 389, n[r];
  }, oi(e, t);
}
const u_ = Nt[Wi(398)]`
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
`, Ut = Nt[Wi(398)]`
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
function ii() {
  const e = ["404545hrAHME", "72QPkNQF", "img", "108900Pkkhxi", "div", "13644IaeVeh", "278713jrgzpr", "152xjwGDn", "367500kzMdtW", "1238965QTJYft", "1300878wLxyLD"];
  return ii = function() {
    return e;
  }, ii();
}
const qt = Nt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, f_ = Nt[Wi(396)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
`, d_ = Nt[Wi(398)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, t) {
  const n = tr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(381)) / 1 + parseInt(n(373)) / 2 * (parseInt(n(394)) / 3) + parseInt(n(392)) / 4 * (-parseInt(n(380)) / 5) + -parseInt(n(379)) / 6 + parseInt(n(393)) / 7 + parseInt(n(397)) / 8 * (-parseInt(n(376)) / 9) + -parseInt(n(354)) / 10 * (-parseInt(n(362)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 504516);
const mu = () => {
  const e = tr;
  return document[e(395) + e(378)] || document[e(366) + e(361)] || document[e(398) + e(367) + e(356)] || document[e(359) + e(399)];
}, h_ = (e) => {
  const t = tr, n = document[t(386) + t(355)](t(377) + e);
  if (n[t(365) + t(390)]) n[t(365) + t(390)]();
  else if (n[t(363) + t(374)]) n[t(363) + t(374)]();
  else if (n[t(385) + t(391) + t(368)]) t(370) === t(370) ? n[t(385) + t(391) + t(368)]() : _0x33c492[t(389) + t(396)]();
  else if (n[t(372) + t(357)])
    if (t(387) !== t(388)) n[t(372) + t(357)]();
    else return _0x24a042[t(395) + t(378)] || _0x5b37fa[t(366) + t(361)] || _0xc67a78[t(398) + t(367) + t(356)] || _0x2068dc[t(359) + t(399)];
};
function tr(e, t) {
  const n = si();
  return tr = function(r, o) {
    return r = r - 353, n[r];
  }, tr(e, t);
}
const p_ = () => {
  const e = tr;
  document[e(364) + e(353)] ? e(383) !== e(375) ? document[e(364) + e(353)]() : _0x5a48cb[e(364) + e(353)]() : document[e(389) + e(396)] ? e(369) !== e(384) ? document[e(389) + e(396)]() : _0xea3627[e(382) + e(371)]() : document[e(358) + e(360)] ? document[e(358) + e(360)]() : document[e(382) + e(371)] && document[e(382) + e(371)]();
};
function si() {
  const e = ["een", "YCqxT", "DxHUG", "screen", "msRequestF", "292196rifTZC", "FullScreen", "eKIfD", "282330HozFgm", "#screen_", "Element", "189888iFGjoS", "1047040EXAEsT", "642760gSQYIv", "msExitFull", "zLRzh", "wqgxX", "webkitRequ", "querySelec", "CVcQH", "lbpCb", "mozCancelF", "lscreen", "estFullscr", "4OBbEor", "6489728BivCcZ", "6vnPnIv", "fullscreen", "ullScreen", "16jxtLTr", "webkitFull", "enElement", "reen", "579430ycMGcC", "tor", "ent", "ullscreen", "webkitExit", "msFullscre", "Fullscreen", "eenElement", "44uRIQyr", "mozRequest", "exitFullsc", "requestFul", "mozFullScr", "screenElem"];
  return si = function() {
    return e;
  }, si();
}
function ai() {
  const e = [".089-1.218", "mousemove", "H5v-5H3v7h", "9503400xJxsfO", "h2.697l5.7", "preventDef", ".999-4.909", "clientX", "fill", "NHcBU", "sync", "mousedown", "hEflR", "zm0-6h-4V4", "jZQon", "children", "div", " 0 0 0-.57", " 2v5H4V5h3", "home", "height", "-3.229 2-5", "3a.986.986", ".897-2-2-2", ".614 16 19", "Home", "zM4 20V10h", "1624tEWcGN", "ault", " 2-2v-7c0-", "Recents", ".015.057-.", "shortcut", "10c-1.103 ", "4457355oCDzwY", "set", "Volume", " 0 0 0-1 1", "h4zm12-6h-", "forEach", "0V4a1 1 0 ", "6zm0 4h6v2", "touchend", ".024l-14-1", "left", "eenchange", "Hide ID", "1.048z", "target", "shortcutEv", "4c0-1.103-", "-.897 2-2V", "removeEven", "a1 1 0 0 0", "4v2h6zM8 2", ".004 1.004", "Screen", "circle", "674.31a1 1", "1v16a1 1 0", "M16 21c3.5", "-.769zm-8.", "1zm-1 16H5", "48 3.832a1", ".103.897 2", "-7v2h5z", ".832L6.697", "screenchan", "FqyWN", "showMenu", "hqrsh", "-2 2v6c0 1", "1284PPcUxt", "touch_clas", "7-2-2-2h-3", "FQqrM", "path", ".897-2 2v4", "4c-.025-.0", "345-5.236 ", "M20.978 13", "top", "mouseup", "gClientRec", "zIndex", "getAttribu", "Sync", "nvFuu", "822 13 9A1", "69-.823l-1", "landscape", "0-2 .897-2", "03-.897-2-", " 2v13c0 1.", "move", "M10 4H8v4H", "7 2-2v-4h4", "v5h-5v2h7z", "1.003 0 0 ", ".002 16H6.", "-1.103-.89", " 3.999 4.0", "shortcutCo", "includes", "57-5.428 6", "9.527 4.54", "M4 6h16v2H", "20px", "0 1.767.51", "isDown", "FLhkB", "S18.387 17", "0 0 24 24", "33L12 5.86", "10l.002 10", "closest", "style", " 15H4V9z", "8.347l-3.0", "03 0 2-.89", "get", "0a.999.999", "mouse", "aivgG", "7 2-2V4c0-", "6a1 1 0 0 ", "back", "6332GDWfYz", "copy", "255, 255, ", "4338JAwWuf", "5px", "2-2h-4V4h1", "tListener", "8v12.264l-", "1689EbzcTm", "-1-1H8a1 1", "h-2v6h6z", "0 0-1.554-", "touchmove", "4.445-2.96", "H4c-1.103 ", "device_id", "taskId", "0v10z", "v7h2zm5 14", "2-.082-.03", "readText", "clipboard", "416 3.377 ", "now", "M6 12h6v2H", "UJNyL", "grab", "2H4zm0 5h1", "oPTKw", "mozfullscr", "c1.103 0 2", "stener", " 7H4c-1.10", "6v2H4z", "v2z", "-1.052-3.3", "fullscreen", " 0 0 0-.38", "volume", "oTNUB", "v2h8V5h3v6", "data-id", ".257 5.127", "yLFly", "action", "M16 7v10c1", "M20 2H10c-", "2 2h7c1.10", "paste", "PYQPA", "2 2h10c1.1", "75.931l2 1", "assistive_", "0 18V4h10l", "Show ID", "19449BgHAJY", ".21a1 1 0 ", "1.103-.897", "twmZy", ".116c.026-", "a.995.995 ", " 2v16c0 1.", "data", "3 9a1.003 ", "08 3.677L7", "027 1.027 ", "getBoundin", "M20 11V5c0", "11.75", "iGXVt", "85481gTqXzr", "2 2h7c0 1.", "199AlgWmA", "pageY", "0 0 0 14 2", "qFTSz", "Paste", "focus", "touchstart", "ent", "H6z", "h-5c-1.103", "1.103 0-2 ", "0h2v-6H4v2", "6l3.612-4.", " 0-2 .897-", "3 0 2-.897", "click", ".225-1.1 2", "H13z", "7.032 15 7", "addEventLi", " 0 0 0 1.0", "7zm11-5h-2", "touch", "current", "59 15.016 ", "7 16 3v2c2", "1 0 0 0-1 ", "0 0 1.645z", "3 0-2 .897", "103.897 2 ", "9 21V3a1 1", "284904AJZBgN", "opacity", "0 0 0 .782", "s-.775-3.9", "touch_", "Back", "2 2zm2 7v-", "menu_", "6v6h2v-4h4", " 2 2zm0-8h", "http://www", "M5 5h5V3H3", "m-2-4h2V3h", "70lwcrgb", " 2v10c0 1.", "change", " 0 0 0-1.5", "quNAG", "assistive", "passive", "msfullscre", "93-.019a1.", "0 1-1V4a1 ", "width", "pageX", "Copy", "M20 3H4a1 ", "H4zm16-6h-", "cursor", "061-.016.0", "PFjUy", ".w3.org/20", "7h7l.001 7", "5.46 1.701", "12%", "M16.75 2h-", " 0 0 1 1h1", "-2-5zM4 17", "75z", "4zm0 5h16v", "V5h14v14z", "017.082-.0", "VSzGX", "27-1.547 5", "-2-2-2zm-1", "webkitfull", "m4.431 12.", " 5.999-9S1", "2-.116C7.0", "right", "recents", "Icon", "wbmUc", "47 3.999 7", "type", "l10.283 7.", "00/svg", " 1 0 0 0 1", "1 0 0 0-1-", "4v-4c0-1.1", "rgba(255, ", "3c.033 0 .", "svg", "0 0-.396-1", "7a1 1 0 0 ", "-2-2-2zm-9", "17-.056-.0", ".387 1.386", "enchange", "0 0 0 .38-", "27.05A1 1 ", "clientY"];
  return ai = function() {
    return e;
  }, ai();
}
function zr(e, t) {
  const n = ai();
  return zr = function(r, o) {
    return r = r - 250, n[r];
  }, zr(e, t);
}
(function(e, t) {
  const n = zr, r = e();
  for (; ; )
    try {
      if (parseInt(n(345)) / 1 * (-parseInt(n(276)) / 2) + parseInt(n(281)) / 3 * (-parseInt(n(273)) / 4) + parseInt(n(389)) / 5 * (parseInt(n(376)) / 6) + parseInt(n(482)) / 7 + parseInt(n(475)) / 8 * (parseInt(n(328)) / 9) + parseInt(n(451)) / 10 + -parseInt(n(343)) / 11 * (parseInt(n(520)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 536207);
const x_ = rr((e, t) => {
  const n = zr, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const f = Se(l), d = {};
  d.x = 0, d.y = 0;
  const u = Se(d), [v, g] = lt(null), [h, p] = lt(0), _ = Se(null), b = Se(null), x = Se(null), E = {};
  E[n(404)] = n(542), E[n(377)] = 0.3, E[n(532)] = 999;
  const [y, A] = lt(E), O = {};
  O[n(532)] = 1e3;
  const [k, B] = lt(O), W = Se(null), [ne, Q] = lt(null), D = (L) => {
    const C = n;
    if (L[C(453) + C(476)](), s[C(266)][C(517)] == !0) return;
    const me = Ct[L[C(430)]], xe = a[C(368)], ke = x[C(368)], de = xe[C(339) + C(531) + "t"](), et = ke[C(339) + C(531) + "t"](), We = 5;
    let Re, tt;
    const Vt = de[C(399)] - et[C(399)], hn = de[C(468)] - et[C(468)];
    if (L[C(430)][C(551)](C(367))) {
      const { touches: Je, changedTouches: je } = L, bt = Je[0] ?? je[0];
      Re = bt[C(400)], tt = bt[C(346)];
    } else L[C(430)][C(551)](C(268)) && (C(406) !== C(457) ? (Re = L[C(455)], tt = L[C(447)]) : [C(449), C(459), C(530)][C(487)]((Je) => {
      const je = C;
      _0x8dee40[je(500) + je(279)](Je, _0x297a95);
    }));
    if (me == Ct[C(459)]) {
      s[C(483)]({ ...s[C(266)], isDown: !0 }), f[C(368)].x = Re - et[C(492)], f[C(368)].y = tt - et[C(529)];
      const Je = {};
      Je[C(377)] = 1, Je[C(404)] = C(299);
      const je = { ...y, ...Je };
      A(je), p(performance[C(296)]());
    } else if (me == Ct[C(449)]) {
      if (s[C(266)][C(255)] == !1) return;
      let Je = Re - f[C(368)].x - de[C(492)], je = tt - f[C(368)].y - de[C(529)];
      const bt = Vt - We;
      if (Je < We || Je > bt || je < We || je > hn - We) {
        const Zt = {};
        Zt[C(377)] = 0.3, Zt[C(404)] = C(542);
        const Nn = { ...y, ...Zt };
        A(Nn), g(Ct[C(530)]), s[C(483)]({ ...s[C(266)], isDown: !1 });
      } else ke[C(262)][C(492)] = Je + "px", ke[C(262)][C(529)] = je + "px", u[C(368)].x = Je, u[C(368)].y = je;
    } else if (me == Ct[C(530)]) {
      const Je = performance[C(296)]() - h;
      if (v == Ct[C(459)] || Je < 200) {
        const jt = {};
        jt[C(517)] = !0, jt[C(255)] = !1, s[C(483)]({ ...s[C(266)], ...jt });
      } else s[C(483)]({ ...s[C(266)], isDown: !1 });
      const je = {};
      je[C(377)] = 0.3, je[C(404)] = C(542);
      const bt = { ...y, ...je };
      A(bt);
    }
    g(me), ke[C(350)]();
  }, X = async (L) => {
    const C = n;
    L[C(453) + C(476)]();
    const me = L[C(496)][C(261)](C(464))[C(533) + "te"](C(314));
    if (me === C(309))
      mu() ? C(523) === C(523) ? p_() : _0x2f5552 && _0x47ce52[C(500) + C(279)](C(360), _0x1eeac0) : C(418) === C(269) ? _0x12a6e9[C(364) + C(304)](C(360), _0x7d10f3) : h_(r);
    else if (C(312) === C(348)) {
      const xe = _0x401832[C(368)];
      xe[C(262)][C(399)] = _0x2f89f9[C(368)] != C(538) ? C(410) : "", xe[C(262)][C(468)] = _0x4d5681[C(368)] == C(538) ? C(410) : "", xe[C(262)][C(425)] = C(277), xe[C(262)][C(529)] = C(253), xe[C(262)][C(492)] = "";
    } else {
      const xe = {};
      xe[C(317)] = C(497) + C(352), xe[C(480)] = me, xe[C(335)] = "";
      const ke = xe;
      me === C(321) && (ke[C(335)] = await navigator[C(294)][C(293)]()), me === C(274) && (ke[C(289)] = C(550) + "py"), i(La, ke);
    }
    s[C(483)]({ ...s[C(266)], showMenu: !1 }), b[C(368)][C(350)]();
  }, K = (L) => {
    const C = mu();
    i(a_, C);
  };
  qe(() => {
    requestAnimationFrame(() => {
      const L = zr;
      if (L(393) !== L(516)) {
        const C = { ...k };
        C[L(377)] = s[L(266)][L(517)] ? 1 : 0, B(C);
      } else {
        const C = { ..._0x2f712e[L(266)] };
        C[L(255)] = !1, _0x3dae00[L(483)](C);
      }
    });
  }, [s]), qe(() => {
    const L = n, C = a[L(368)], me = [L(309) + L(391), L(421) + L(515) + "ge", L(302) + L(493), L(396) + L(444)];
    return C && (L(316) !== L(316) ? _0x4e7a2a[L(500) + L(279)](_0x39ccaf, _0x2b3be0) : me[L(487)]((xe) => {
      const ke = L;
      C[ke(364) + ke(304)](xe, K);
    })), () => {
      const xe = L;
      xe(298) !== xe(298) ? _0x2437a5[xe(289)] = xe(550) + "py" : C && C[xe(500) + xe(279)](xe(360), K);
    };
  }, []), qe(() => {
    const L = n;
    if (L(535) === L(460)) _0xf5a1e6(() => {
      const C = L, me = { ..._0xa68598 };
      me[C(377)] = _0x27f1ff[C(266)][C(517)] ? 1 : 0, _0x3db049(me);
    });
    else {
      const C = x[L(368)], me = b[L(368)];
      if (me && me[L(364) + L(304)](L(360), X), C) {
        const xe = {};
        xe[L(395)] = !1;
        const ke = xe;
        return o ? L(342) !== L(518) ? (C[L(364) + L(304)](L(351), D, ke), C[L(364) + L(304)](L(285), D, ke), C[L(364) + L(304)](L(490), D)) : _0x33d88e[L(364) + L(304)](_0xb8a003, _0x4d1378) : [L(449), L(459), L(530)][L(487)]((de) => {
          const et = L;
          C[et(364) + et(304)](de, D);
        }), () => {
          const de = L;
          me && me[de(500) + de(279)](de(360), X), C && (de(301) === de(462) ? (_0x32f007[de(364) + de(304)](de(351), _0x340071, _0x3d4472), _0x51abeb[de(364) + de(304)](de(285), _0x452a4c, _0x10e48e), _0x2a2b33[de(364) + de(304)](de(490), _0x3e090e)) : o ? [de(351), de(285), de(490)][de(487)]((et) => {
            const We = de;
            We(428) === We(428) ? C[We(500) + We(279)](et, D) : _0x8f76c7() ? _0x75ff8c() : _0x3cef8f(_0x3976c9);
          }) : [de(449), de(459), de(530)][de(487)]((et) => {
            const We = de;
            C[We(500) + We(279)](et, D);
          }));
        };
      }
    }
  }, [o, D]);
  const N = () => {
    const L = n;
    if (L(331) === L(256)) [L(351), L(285), L(490)][L(487)]((C) => {
      const me = L;
      _0x8c4d2e[me(500) + me(279)](C, _0x433d6a);
    });
    else {
      const C = x[L(368)];
      C[L(262)][L(399)] = W[L(368)] != L(538) ? L(410) : "", C[L(262)][L(468)] = W[L(368)] == L(538) ? L(410) : "", C[L(262)][L(425)] = L(277), C[L(262)][L(529)] = L(253), C[L(262)][L(492)] = "";
    }
  };
  Tu(t, () => ({ fixTouch: (L) => {
    const C = n;
    if (C(322) === C(322)) L && (W[C(368)] = L), N();
    else {
      const me = {};
      me[C(377)] = 0.3, me[C(404)] = C(542);
      const xe = { ..._0x54c689, ...me };
      _0x3b8927(xe), _0x2fe474(_0x3b148a[C(530)]);
      const ke = { ..._0x5751b3[C(266)] };
      ke[C(255)] = !1, _0x462894[C(483)](ke);
    }
  }, setFullscreen: (L) => {
    Q(L);
  } }));
  const $ = {};
  $[n(456)] = n(436) + n(275) + "1)";
  const P = {};
  P.d = ne ? n(543) + n(502) + n(356) + n(486) + n(384) + n(461) + n(283) : n(387) + n(291) + n(450) + n(366) + n(545) + n(388) + n(513);
  const j = {};
  j[n(463)] = n(504);
  const H = {};
  H[n(456)] = n(436) + n(275) + "1)";
  const z = {};
  z.d = n(319) + n(355) + n(525) + n(287) + n(539) + n(390) + n(374) + n(323) + n(265) + n(544) + n(303) + n(499) + n(498) + n(471) + n(474) + n(260) + n(403) + n(435) + n(540) + n(278) + n(290);
  const G = {};
  G.d = n(297) + n(489) + n(353);
  const te = {};
  te[n(463)] = n(401);
  const J = {};
  J[n(456)] = n(436) + n(275) + "1)";
  const se = {};
  se.d = n(340) + n(548) + n(522) + n(501) + n(282) + n(485) + n(287) + n(539) + n(541) + n(374) + n(344) + n(374) + n(320) + n(359) + n(477) + n(330) + n(441) + n(466) + n(313) + n(354) + n(358) + n(382) + n(408) + n(362);
  const ae = {};
  ae[n(463)] = n(349);
  const ce = {};
  ce[n(456)] = n(436) + n(275) + "1)";
  const Ce = {};
  Ce.d = n(411) + n(481) + n(539) + n(334) + n(374) + n(323) + n(265) + n(270) + n(330) + n(420) + n(326) + n(547) + n(414);
  const pe = {};
  pe.cx = n(341), pe.cy = "18", pe.r = "1";
  const Ie = {};
  Ie[n(463)] = n(c ? 494 : 327);
  const $e = {};
  $e[n(456)] = n(436) + n(275) + "1)";
  const R = {};
  R.d = n(508) + n(419) + n(454) + n(423) + n(251) + n(370) + n(443) + n(549) + n(429) + n(257) + n(472) + n(307);
  const re = {};
  re.d = n(318) + n(361) + n(469) + n(379) + n(413) + n(452) + n(511) + n(503) + n(365) + n(446) + n(347) + n(488) + n(284) + n(514) + n(305) + n(373) + n(519) + n(512) + n(385) + n(437) + n(405) + n(397) + n(338) + n(445) + n(332) + n(479) + n(417) + n(259) + n(280) + n(286) + n(526) + n(442) + n(292) + n(470) + n(310) + n(424) + n(369) + n(363) + n(263);
  const T = {};
  T[n(463)] = n(484);
  const F = {};
  F[n(456)] = n(436) + n(275) + "1)";
  const S = {};
  S.d = n(528) + n(329) + n(439) + n(491) + n(267) + n(392) + n(324) + n(440) + n(254) + n(357) + n(295) + n(409) + n(308) + n(250) + n(448) + n(333) + n(378) + n(509) + n(506) + n(465) + n(264) + n(337) + n(315) + n(431) + n(527) + n(495);
  const Z = {};
  Z[n(463)] = n(534);
  const _e = {};
  _e[n(456)] = n(436) + n(275) + "1)";
  const Le = {};
  Le.d = n(252) + n(415) + n(300) + n(306);
  const gt = {};
  gt[n(463)] = n(478);
  const Me = {};
  Me[n(456)] = n(436) + n(275) + "1)";
  const Ae = {};
  Ae.d = n(402) + n(371) + n(507) + n(412) + n(271) + n(398) + n(434) + n(510) + n(416);
  const Ke = {};
  Ke[n(463)] = n(473);
  const ut = {};
  ut[n(456)] = n(436) + n(275) + "1)";
  const ct = {};
  ct.d = n(422) + n(536) + n(433) + n(375) + n(392) + n(537) + n(336) + n(546) + n(372);
  const Ft = {};
  return Ft[n(463)] = n(381), ee.jsxs(ee.Fragment, { children: [s[n(266)][n(517)] ? ee.jsxs(u_, { id: n(325) + n(383) + r, style: k, ref: b, children: [ee.jsxs(Ut, { "data-id": n(309), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: $, children: ee.jsx(n(524), P) }), ee.jsx(qt, j)] }), ee.jsxs(Ut, { "data-id": n(274), children: [ee.jsxs(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: H, children: [ee.jsx(n(524), z), ee.jsx(n(524), G)] }), ee.jsx(qt, te)] }), ee.jsxs(Ut, { "data-id": n(321), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: J, children: ee.jsx(n(524), se) }), ee.jsx(qt, ae)] }), ee.jsxs(Ut, { "data-id": n(288), children: [ee.jsxs(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: ce, children: [ee.jsx(n(524), Ce), ee.jsx(n(505), pe)] }), ee.jsx(qt, Ie)] }), ee.jsxs(Ut, { "data-id": n(311), children: [ee.jsxs(n(438), { xmlns: n(386) + n(407) + n(432), width: "25", height: "25", viewBox: n(258), style: $e, children: [ee.jsx(n(524), R), ee.jsx(n(524), re)] }), ee.jsx(qt, T)] }), ee.jsxs(Ut, { "data-id": n(458), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: F, children: ee.jsx(n(524), S) }), ee.jsx(qt, Z)] }), ee.jsxs(Ut, { "data-id": n(426), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: _e, children: ee.jsx(n(524), Le) }), ee.jsx(qt, gt)] }), ee.jsxs(Ut, { "data-id": n(467), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: Me, children: ee.jsx(n(524), Ae) }), ee.jsx(qt, Ke)] }), ee.jsxs(Ut, { "data-id": n(272), children: [ee.jsx(n(438), { xmlns: n(386) + n(407) + n(432), width: "28", height: "28", viewBox: n(258), style: ut, children: ee.jsx(n(524), ct) }), ee.jsx(qt, Ft)] })] }) : null, ee.jsx(d_, { id: n(325) + n(521) + "s_" + r, className: n(394), ref: _, style: y, children: ee.jsx(f_, { src: l_, className: n(394), id: n(325) + n(380) + r, alt: n(427), ref: x, draggable: !1 }) })] });
}), Ue = nr;
(function(e, t) {
  const n = nr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(409)) / 1 * (parseInt(n(341)) / 2) + parseInt(n(337)) / 3 * (-parseInt(n(364)) / 4) + parseInt(n(375)) / 5 * (-parseInt(n(399)) / 6) + parseInt(n(377)) / 7 * (-parseInt(n(391)) / 8) + parseInt(n(393)) / 9 + parseInt(n(343)) / 10 * (parseInt(n(397)) / 11) + parseInt(n(336)) / 12 * (parseInt(n(389)) / 13) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 230261);
function nr(e, t) {
  const n = ci();
  return nr = function(r, o) {
    return r = r - 335, n[r];
  }, nr(e, t);
}
function ci() {
  const e = ["concat", "2398491RfCSxo", "orientatio", "codedWidth", "getContext", "187AlOlGR", "setOrienta", "1977882tNpsGZ", "tion", "from", "autoResize", "jmZIV", "configure", "hardwareAc", "isKeyFrame", "BkEWe", "lock", "24571jFqULZ", "optimizeFo", "8Arrays", "10092EaetJf", "809985wWRzMs", "key", "length", "scale", "2BMeDnf", "maxWidth", "192230lURriF", "drawImage", "setFullscr", "mkgXZ", "concatUint", "height", "lhSxV", "delta", "ctx", "rootSize", "landscape", "rLatency", "TozXK", "width", "translate", "NLWzN", "een", "close", "resizedWid", "round", "caBXr", "4ppPDuf", "ror:", "canvas", "codec", "celeration", "error", "portrait", "buildDecod", "decoder", "rotate", "decode", "5Papnwz", "isPlay", "7wCWCxm", "codedHeigh", "ylKVX", "state", "innerHeigh", "setIsConne", "Decoder er", "clearRect", "isMobile", "iframe", "now", "setVideoMe", "6331zJcsiH", "videoMeta", "1187064ASqwnb"];
  return ci = function() {
    return e;
  }, ci();
}
var vu, yu, bu, _u, Su, Cu, wu, Eu, Ou;
Ou = Ue(345) + Ue(359), Eu = Ue(361) + "th", wu = Ue(398) + Ue(400), Cu = Ue(402), Su = Ue(388) + "ta", _u = Ue(371) + "er", bu = Ue(406), yu = Ue(347) + Ue(335), vu = Ue(374);
class g_ {
  constructor(t, n, r, o, i, s) {
    Fe(this, Ou, (t) => {
      const n = Ue;
      if (t)
        if (n(407) === n(355)) _0x2692c0 = this[n(347) + n(335)](this[n(390)], this[n(386)]), this[n(376)] = !0;
        else {
          const r = window[n(381) + "t"] + 10, o = this[n(361) + "th"](null, this[n(352)][n(356)], this[n(352)][n(348)], r, r);
          this[n(356)] = o[n(356)], this[n(348)] = o[n(348)];
        }
      else this[n(356)] = this[n(352)][n(356)], this[n(348)] = this[n(352)][n(348)];
    });
    Fe(this, Eu, (t, n, r, o, i) => {
      const s = Ue;
      let a;
      if (t && o > this[s(342)] && r > n && (s(358) !== s(358) ? this[s(402)](_0x1d8a60[s(395)], _0x4f9345[s(378) + "t"]) : i = this[s(342)]), i && (a = i / n * r, a > o))
        if (s(346) === s(403)) {
          const c = _0x1ba956[s(401)](_0x1fee56)[s(392)](_0x393df3[s(401)](_0x29fc14));
          return new _0x44e2a1(c);
        } else i = o / r * n, a = o / n * n;
      return { width: Math[s(362)](i), height: Math[s(362)](a) };
    });
    Fe(this, wu, (t) => {
      const n = Ue;
      this[n(394) + "n"] = t, this[n(385)] && screen[n(394) + "n"][n(408)](t);
    });
    Fe(this, Cu, (t, n) => {
      var a;
      const r = Ue, o = this[r(385)] == !0 ? window[r(381) + "t"] - 12 : window[r(381) + "t"] - 50, i = this[r(361) + "th"](!0, t, n, o, o);
      this[r(356)] = i[r(356)], this[r(348)] = i[r(348)], !this[r(352)] && ((a = this[r(382) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(356)] = i[r(356)], s[r(348)] = i[r(348)], this[r(352)] = s;
    });
    Fe(this, Su, (t) => {
      const n = Ue, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(390)] = r;
    });
    Fe(this, _u, () => {
      const t = Ue, n = new VideoDecoder({ output: async (o) => {
        const i = nr, s = await createImageBitmap(o);
        (!this[i(356)] || !this[i(348)]) && this[i(402)](o[i(395)], o[i(378) + "t"]), this[i(351)][i(384)](0, 0, this[i(356)], this[i(348)]), this[i(394) + "n"] == i(353) ? (this[i(366)][i(356)] = this[i(348)], this[i(366)][i(348)] = this[i(356)], this[i(351)][i(357)](0, this[i(356)]), this[i(351)][i(373)](Math.PI / 2), this[i(351)][i(340)](-1, -1), this[i(351)][i(344)](s, 0, 0, this[i(356)], this[i(348)])) : (this[i(366)][i(356)] = this[i(356)], this[i(366)][i(348)] = this[i(348)], this[i(351)][i(344)](s, 0, 0, this[i(356)], this[i(348)])), s[i(360)](), o[i(360)]();
      }, error: (o) => console[t(369)](t(383) + t(365), o) }), r = {};
      return r[t(367)] = this[t(367)], r[t(405) + t(368)] = this[t(405) + t(368)], r[t(410) + t(354)] = !0, n[t(404)](r), n;
    });
    Fe(this, bu, (t) => {
      const n = Ue;
      for (let r = 0; r <= t[n(339)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t[n(339)] - 3; r++)
        if (n(379) !== n(379)) {
          if (_0x4ae3dc[_0x25a71e] === 0 && _0x39f082[_0x3417be + 1] === 0 && _0xcb65d9[_0x5dd600 + 2] === 1)
            return (_0x519957[_0x3a86b0 + 3] & 31) === 5;
        } else if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Fe(this, yu, (t, n) => {
      const r = Ue, o = Array[r(401)](t)[r(392)](Array[r(401)](n));
      return new Uint8Array(o);
    });
    Fe(this, vu, (t) => {
      const n = Ue;
      if (!this[n(372)] || this[n(372)][n(380)] == n(360) || !this[n(390)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(406)](r);
      o && (this[n(386)] = r), this[n(386)] && this[n(390)] && (n(349) !== n(349) ? (this[n(356)] = this[n(352)][n(356)], this[n(348)] = this[n(352)][n(348)]) : (!this[n(376)] && (n(363) !== n(363) ? (_0x281a75 = _0x3abed7 / _0x137898 * _0x320e72, _0x459d67 = _0x1f71b6 / _0x4c135c * _0x1b6db9) : (r = this[n(347) + n(335)](this[n(390)], this[n(386)]), this[n(376)] = !0)), this[n(372)][n(374)](new EncodedVideoChunk({ timestamp: performance[n(387)]() * 1e3, type: n(o ? 338 : 350), data: r }))));
    });
    const a = nr;
    this[a(366)] = t, this[a(342)] = n, this[a(385)] = r, this[a(367)] = i, this[a(405) + a(368)] = s, this[a(382) + "ct"] = o, this[a(351)] = t[a(396)]("2d"), this[a(372)] = this[a(371) + "er"](), this[a(390)] = null, this[a(386)] = null, this[a(376)] = null, this[a(356)] = null, this[a(348)] = null, this[a(352)] = null, this[a(394) + "n"] = a(370);
  }
}
function Cn(e, t) {
  const n = li();
  return Cn = function(r, o) {
    return r = r - 141, n[r];
  }, Cn(e, t);
}
(function(e, t) {
  const n = Cn, r = e();
  for (; ; )
    try {
      if (parseInt(n(266)) / 1 * (parseInt(n(258)) / 2) + -parseInt(n(178)) / 3 * (parseInt(n(253)) / 4) + parseInt(n(212)) / 5 + -parseInt(n(230)) / 6 * (parseInt(n(235)) / 7) + parseInt(n(192)) / 8 + parseInt(n(221)) / 9 + -parseInt(n(160)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 378780);
function li() {
  const e = ["10487080gCcFCu", "passwd", "ZaFvs", "buboS", "sakgg", "applicatio", "CuqZa", "map", "password", "headers", "hGLvH", "text", "mozFullScr", "size", "ent", "msg", "shortcutEv", "isMobile", "7302GuGRTc", "connect_er", " closed co", "yoEeI", "disconnect", "margin", "get", "Element", "de: ", "hpbEG", "Timeout wa", "isDown", "url", "height", "4557576YCEkoz", "tabIndex", "onSyncIFra", "meta", "rHDpc", "clipboard", "eenElement", "taskId", "sync", "xyVdq", "qWFrR", "hKdPX", "current", "QWGCI", "KKUXN", "center", "userAgent", "change", "enElement", "tListener", "1772080niRhUU", "length", "type_clien", "orientatio", "video_meta", "large", "Reconnect", "ddUtI", "method", "6512814VKrjbZ", "oSowW", "code", "Znmws", "qeXCP", "SOJQg", "LMCLI", "connect", "IpKjl", "156AkTDHO", "screen_", "screen_mai", "PUQvP", "test", "170842pAEJuD", "writeText", "screen", "type", "xXOoF", "response", "biaha", "primary", "decode", "width", "n/json", "action", "message", "now", "setVideoMe", "setFullscr", "value", "kGJUo", "56JiGvkX", "children", "timeSync", "join_room", "tCwiW", "86WBYCee", "error", "post", "setOrienta", "delete", "middle", "een", "msFullscre", "10427LlLQLK", "fullscreen", "draggable", "ror", "AvkyR", "iframe", "image_", "emit", "shortcut", "fixTouch", "stener", "COPY_TEXT", "addEventLi", "showMenu", "Content-Ty", "oGDbF", "false", "status", "onScreenEv", "control", "data", "tion", "iting for ", "connection", "device_id", "DysTf", "removeEven", "info", "timeout", "tUXxb", "get_video_", "webkitFull", "set", "reconnecti", "screenElem"];
  return li = function() {
    return e;
  }, li();
}
const H_ = rr((e, t) => {
  const n = Cn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l, codec: f, hardwareAcceleration: d } = e, u = o[n(149)], v = /iPhone|iPad|iPod|Android/i[n(234)](navigator[n(208)]), g = n(144), h = Se(null), p = Se(null), _ = Se(null), b = Se(null), x = Se(null), [E, y] = lt(null), [A, O] = lt(null), k = {};
  k[n(279)] = !1, k[n(189)] = !1;
  const [B, W] = lt(k), [ne, Q] = lt(null), [D, X] = lt(null), K = n(272) + u, N = n(231) + u, $ = n(232) + "n_" + u, [P, j] = lt([]), H = Se(/* @__PURE__ */ new Map());
  qe(() => {
    O(a);
  }, [a]);
  const z = (R) => {
    j((re) => [...re, R]);
  }, G = (R) => {
    const re = n;
    re(219) !== re(219) ? _0x3245ee[re(204)] = new _0x1250df(_0x28c6c3, _0x1b7213, _0x469487, _0xef27f, _0x576652, _0x5c2826) : (h[re(204)][re(273)](re(247), R), c == null || c(R));
  };
  Tu(t, () => ({ api: async function(R, re = 5e3) {
    return new Promise((T, F) => {
      const S = Cn;
      if (S(205) !== S(205)) {
        const Z = {};
        Z[S(175)] = _0x243720, Z[S(238)] = S(259), _0x53b6b4(Z);
      } else {
        const Z = setTimeout(() => {
          const _e = S;
          if (_e(162) === _e(166)) _0x21d074[_e(182)]();
          else {
            H[_e(204)][_e(262)](R[_e(199)]);
            const Le = {};
            Le[_e(246)] = R[_e(246)], Le[_e(199)] = R[_e(199)], Le[_e(142)] = !1, Le[_e(247)] = _e(188) + _e(147) + _e(240), F(Le);
          }
        }, re);
        H[S(204)][S(157)](R[S(199)], (_e) => {
          clearTimeout(Z), T(_e);
        }), h[S(204)][S(273)](S(247), R);
      }
    });
  }, sync: function(R) {
    const re = n;
    h[re(204)][re(273)](re(247), R);
  }, getDeviceId: function() {
    return o[n(149)];
  } })), qe(() => {
    (async () => {
      const R = Cn;
      try {
        const re = {};
        re[R(280) + "pe"] = R(165) + R(245);
        const T = {};
        T[R(149)] = o[R(149)], T[R(168)] = o[R(161)];
        const F = {};
        F[R(190)] = r, F[R(220)] = R(260), F[R(153)] = 1e4, F[R(169)] = re, F[R(145)] = T;
        const S = F, Z = await t_(S);
        y(Z[R(145)]);
      } catch (re) {
        const T = {};
        T[R(175)] = re, T[R(238)] = R(259), z(T);
      }
    })();
  }, [D]), qe(() => {
    const R = n;
    if (R(229) === R(202)) return _0x29d6a3[R(149)];
    {
      if (h[R(204)] || !E) return;
      const re = {};
      re[R(158) + "on"] = !1;
      const T = To(E, re);
      return T.on(R(228), () => {
        const F = R, S = {};
        S[F(246)] = F(228), S[F(214) + "t"] = g, S[F(149)] = o[F(149)], S[F(177)] = v, S[F(161)] = o[F(161)], T[F(273)](F(256), S);
      }), T.on(R(256), (F) => {
        const S = R;
        if (S(170) !== S(170)) _0x511bc9(_0x5db633), _0xcfe5e1[S(204)][S(262)](_0x527a50[S(199)]);
        else if (F[S(142)] == !0)
          if (S(150) !== S(201)) {
            h[S(204)] = T, T[S(273)](S(247), { action: S(255), ts: Date[S(248)]() });
            const Z = {};
            Z[S(246)] = S(143) + S(174), T[S(273)](S(247), Z);
          } else if (_0x21bcda) {
            if (_0x289445[S(204)][S(249) + "ta"](_0x21c9c7), !_0x1071db[S(204)][S(271)]) {
              const Z = {};
              Z[S(246)] = S(194) + "me", _0x13dc6f[S(273)](S(247), Z);
            }
          } else {
            const Z = {};
            Z[S(246)] = S(155) + S(195), _0x279ddf[S(273)](S(216), Z);
          }
        else {
          const Z = {};
          Z[S(175)] = F[S(175)], Z[S(238)] = S(259), z(Z);
        }
      }), T.on(R(237), (F) => {
        const S = R;
        x[S(204)][S(243)](F);
      }), T.on(R(216), (F) => {
        const S = R;
        if (S(270) !== S(270)) {
          _0x5c23a4[S(204)][S(262)](_0x1e6a57[S(199)]);
          const Z = {};
          Z[S(246)] = _0x2cf6bc[S(246)], Z[S(199)] = _0x26cd48[S(199)], Z[S(142)] = !1, Z[S(247)] = S(188) + S(147) + S(240), _0x39d2b8(Z);
        } else if (F) {
          if (x[S(204)][S(249) + "ta"](F), !x[S(204)][S(271)]) {
            const Z = {};
            Z[S(246)] = S(194) + "me", T[S(273)](S(247), Z);
          }
        } else if (S(181) === S(281)) {
          _0x5b7150[S(204)] = _0xde4555, _0x1e4047[S(273)](S(247), { action: S(255), ts: _0x30367b[S(248)]() });
          const Z = {};
          Z[S(246)] = S(143) + S(174), _0x591455[S(273)](S(247), Z);
        } else {
          const Z = {};
          Z[S(246)] = S(155) + S(195), T[S(273)](S(216), Z);
        }
      }), T.on(R(247), (F) => {
        const S = R;
        if ((F[S(246)] == S(277) || F[S(246)] == S(176) + S(174)) && F[S(171)][S(213)] > 0 ? S(239) === S(203) ? _0x560e92[S(204)][S(243)](_0x4ea257) : navigator[S(197)][S(236)](F[S(171)]) : F[S(246)] == S(215) + "n" && (S(224) !== S(224) ? _0x5c398b[S(204)][S(273)](S(247), { action: S(255), ts: _0x32268d[S(248)]() }) : (x[S(204)][S(261) + S(146)](F[S(251)]), b[S(204)][S(275)](F[S(251)]))), F[S(199)]) {
          const Z = H[S(204)][S(184)](F[S(199)]);
          Z && (S(233) !== S(196) ? (Z(F), H[S(204)][S(262)](F[S(199)])) : _0x2d8fa5(!_0x3f5bb2));
        }
      }), T.on(R(179) + R(269), (F) => {
        const S = R;
        if (S(227) !== S(257)) {
          const Z = {};
          Z[S(175)] = F, Z[S(238)] = S(259), z(Z);
        } else _0x473560(_0x32843e);
      }), T.on(R(182), (F) => {
        const S = R, Z = {};
        Z[S(175)] = S(148) + S(180) + S(186) + F[S(223)], Z[S(238)] = S(152), z(Z);
      }), () => {
        const F = R;
        T && (F(226) !== F(226) ? _0x438525(_0x5ccd0b) : T[F(182)]());
      };
    }
  }, [E]), qe(() => {
    const R = n;
    if (R(164) === R(164)) {
      const re = _[R(204)];
      if (re)
        if (R(225) === R(154))
          if (_0x49228c === _0x546f16) {
            const T = { ..._0x22c7f2 };
            T[R(279)] = !1, _0x3e10a8(T);
          } else _0x5ba7bf(_0x38ad9f);
        else x[R(204)] = new g_(re, i, v, Q, f, d);
    } else _0x321fae[R(204)][R(273)](R(247), _0x3590e7);
  }, [D]), qe(() => {
    const R = n, re = () => {
      const T = Cn, F = document[T(267) + T(185)] || document[T(156) + T(159) + T(174)] || document[T(172) + T(198)] || document[T(265) + T(210)];
      x[T(204)][T(250) + T(264)](!!F), b[T(204)][T(250) + T(264)](!!F), b[T(204)][T(275)]();
    };
    return document[R(278) + R(276)](R(267) + R(209), re), () => {
      const T = R;
      document[T(151) + T(211)](T(267) + T(209), re);
    };
  }, [D]), qe(() => {
    const R = n;
    if (R(206) !== R(241)) {
      let re;
      if (!h[R(204)])
        if (R(163) !== R(163)) {
          const T = {};
          T[R(246)] = R(228), T[R(214) + "t"] = _0x28afaa, T[R(149)] = _0x5d6aff[R(149)], T[R(177)] = _0x1d862b, T[R(161)] = _0x157bfa[R(161)], _0x151001[R(273)](R(256), T);
        } else return;
      return re = setInterval(() => {
        const T = R;
        h[T(204)][T(273)](T(247), { action: T(255), ts: Date[T(248)]() });
      }, 3e4), () => clearInterval(re);
    } else _0x2cf124[R(197)][R(236)](_0x6112c0[R(171)]);
  }, [ne]);
  const te = {};
  te[n(254)] = o[n(149)];
  const J = {};
  J[n(173)] = n(217);
  const se = {};
  se[n(173)] = n(217);
  const ae = {};
  ae[n(173)] = n(217);
  const ce = {};
  ce[n(191)] = 0, ce[n(244)] = 0;
  const Ce = {};
  Ce[n(184)] = B, Ce[n(157)] = W;
  const pe = {};
  pe.id = K, pe[n(193)] = "0", pe[n(268)] = n(141);
  const Ie = {};
  Ie[n(183)] = 5;
  const $e = {};
  return $e[n(183)] = 10, ee.jsxs(fp, { id: $, children: [A && ee.jsx(xp, { children: ee.jsx(pp, te) }), P[n(213)] == 0 ? ee.jsxs(ee.Fragment, { children: [!ne && ee.jsxs(x0, { align: n(207), gap: n(263), children: [ee.jsx(Ir, J), ee.jsx(Ir, se), ee.jsx(Ir, ae)] }), ee.jsxs(dp, { ref: p, id: N, style: ne ? {} : ce, children: [s ? ee.jsx(x_, { status: Ce, ref: b, canvasRef: _, displayId: u, isMobile: v, isShowDeviceId: A, onSenData: (R, re) => {
    const T = n;
    if (R === La && re[T(274)] === T(149))
      if (T(252) === T(252)) O(!A);
      else {
        const F = {};
        F[T(246)] = T(194) + "me", _0x4ab9ee[T(273)](T(247), F);
      }
    else R === La && re[T(274)] === T(200) ? l == null || l(o[T(149)]) : G(re);
  } }) : null, ee.jsx(c_, { canvasContent: pe, canvasRef: _, isMobile: v, assistive: B, onRemoteEvent: (R, re) => {
    const T = n;
    if (R === U0)
      if (T(187) !== T(187))
        if (_0x43e3a9[T(142)] == !0) {
          _0xe8a30d[T(204)] = _0x5d70e0, _0x426def[T(273)](T(247), { action: T(255), ts: _0x59391e[T(248)]() });
          const F = {};
          F[T(246)] = T(143) + T(174), _0x5a976d[T(273)](T(247), F);
        } else {
          const F = {};
          F[T(175)] = _0x5a4ff9[T(175)], F[T(238)] = T(259), _0x2263df(F);
        }
      else {
        const F = { ...B };
        F[T(279)] = !1, W(F);
      }
    else G(re);
  } })] })] }) : ee.jsxs(ee.Fragment, { children: [P == null ? void 0 : P[n(167)]((R, re) => ee.jsx(Kd, { style: Ie, message: R[n(175)], type: R[n(238)], showIcon: !0, closable: !0 }, re)), ee.jsx(Di, { style: $e, type: n(242), icon: ee.jsx(ff, {}), onClick: () => {
    const R = n;
    if (R(222) === R(222)) h[R(204)] = null, y(null), j([]), Q(null), X(Date[R(248)]());
    else {
      const re = _0x447dd0[R(267) + R(185)] || _0xdb1e24[R(156) + R(159) + R(174)] || _0x540631[R(172) + R(198)] || _0x3acae5[R(265) + R(210)];
      _0x3568da[R(204)][R(250) + R(264)](!!re), _0x597c37[R(204)][R(250) + R(264)](!!re), _0x30d1fa[R(204)][R(275)]();
    }
  }, children: n(218) })] })] });
});
function ui() {
  var e = ["1212108RtSWvx", "6938360xAQzEq", "408464IKAjPq", "613236ViMWnI", "11TRIwCp", "420690oRYcxq", "1180578jEUZZk", "433565UlXcNl", "18EkdHpW", "20UZglZI", "7IdPmvW"];
  return ui = function() {
    return e;
  }, ui();
}
(function(e, t) {
  for (var n = Ma, r = e(); ; )
    try {
      var o = parseInt(n(238)) / 1 + parseInt(n(236)) / 2 + -parseInt(n(244)) / 3 + parseInt(n(242)) / 4 * (parseInt(n(240)) / 5) + -parseInt(n(239)) / 6 * (-parseInt(n(243)) / 7) + parseInt(n(235)) / 8 * (parseInt(n(241)) / 9) + parseInt(n(234)) / 10 * (-parseInt(n(237)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 361880);
function Ma(e, t) {
  var n = ui();
  return Ma = function(r, o) {
    r = r - 234;
    var i = n[r];
    return i;
  }, Ma(e, t);
}
export {
  H_ as ViewRP
};
