var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var Pt = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as _ from "react";
import De, { useDebugValue as xa, createElement as e0, useRef as Ue, useContext as Qt, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as rt, useState as nt, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = ho;
(function(t, n) {
  for (var e = ho, r = t(); ; )
    try {
      var o = -parseInt(e(417)) / 1 * (parseInt(e(406)) / 2) + parseInt(e(416)) / 3 + parseInt(e(404)) / 4 + parseInt(e(408)) / 5 + -parseInt(e(420)) / 6 + -parseInt(e(424)) / 7 * (-parseInt(e(411)) / 8) + -parseInt(e(401)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fo, 894501);
function fo() {
  var t = ["3003414BjGutH", "defineProp", "function", "ptor", "224nlxpqn", "construct", "BuSYJ", "getOwnProp", "forEach", "ertyDescri", "erty", "length", "16257213XPUSYt", "prototype", "value", "3557196koIGhr", "call", "2xmCQRy", "constructo", "2519450mxZHTs", "keys", "get", "377240JUBFtc", "apply", "__esModule", "hasOwnProp", "undefined", "2230296HnZmRZ", "444154AhQLAf", "default", "IGKIV"];
  return fo = function() {
    return t;
  }, fo();
}
typeof globalThis !== cr(415) || typeof window !== cr(415) || (typeof global !== cr(415) ? global : cr(415));
function o0(t) {
  var n = cr;
  return t && t[n(413)] && Object[n(402)][n(414) + n(430)][n(405)](t, n(418)) ? t[n(418)] : t;
}
function ho(t, n) {
  var e = fo();
  return ho = function(r, o) {
    r = r - 401;
    var i = e[r];
    return i;
  }, ho(t, n);
}
var Rr = { exports: {} }, tr = {};
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
  var t = De, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: u, ref: v, props: d, _owner: o.current };
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
    var t = De, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var P = g && m[g] || m[h];
      return typeof P == "function" ? P : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(m) {
      {
        for (var P = arguments.length, D = new Array(P > 1 ? P - 1 : 0), $ = 1; $ < P; $++)
          D[$ - 1] = arguments[$];
        p("error", m, D);
      }
    }
    function p(m, P, D) {
      {
        var $ = S.ReactDebugCurrentFrame, pe = $.getStackAddendum();
        pe !== "" && (P += "%s", D = D.concat([pe]));
        var me = D.map(function(ue) {
          return String(ue);
        });
        me.unshift("Warning: " + P), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var C = !1, y = !1, R = !1, A = !1, I = !1, B;
    B = Symbol.for("react.module.reference");
    function Y(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || I || m === o || m === l || m === f || A || m === v || C || y || R || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === B || m.getModuleId !== void 0));
    }
    function re(m, P, D) {
      var $ = m.displayName;
      if ($)
        return $;
      var pe = P.displayName || P.name || "";
      return pe !== "" ? D + "(" + pe + ")" : D;
    }
    function G(m) {
      return m.displayName || "Context";
    }
    function F(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
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
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var P = m;
            return G(P) + ".Consumer";
          case s:
            var D = m;
            return G(D._context) + ".Provider";
          case c:
            return re(m, m.render, "ForwardRef");
          case d:
            var $ = m.displayName || null;
            return $ !== null ? $ : F(m.type) || "Memo";
          case u: {
            var pe = m, me = pe._payload, ue = pe._init;
            try {
              return F(ue(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, U = 0, ee, Z, J, Q, se, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function he() {
      {
        if (U === 0) {
          ee = console.log, Z = console.info, J = console.warn, Q = console.error, se = console.group, oe = console.groupCollapsed, K = console.groupEnd;
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
        U++;
      }
    }
    function fe() {
      {
        if (U--, U === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, m, {
              value: ee
            }),
            info: X({}, m, {
              value: Z
            }),
            warn: X({}, m, {
              value: J
            }),
            error: X({}, m, {
              value: Q
            }),
            group: X({}, m, {
              value: se
            }),
            groupCollapsed: X({}, m, {
              value: oe
            }),
            groupEnd: X({}, m, {
              value: K
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = S.ReactCurrentDispatcher, E;
    function M(m, P, D) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (pe) {
            var $ = pe.stack.trim().match(/\n( *(at )?)/);
            E = $ && $[1] || "";
          }
        return `
` + E + m;
      }
    }
    var k = !1, N;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      N = new O();
    }
    function V(m, P) {
      if (!m || k)
        return "";
      {
        var D = N.get(m);
        if (D !== void 0)
          return D;
      }
      var $;
      k = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = xe.current, xe.current = null, he();
      try {
        if (P) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (tt) {
              $ = tt;
            }
            Reflect.construct(m, [], ue);
          } else {
            try {
              ue.call();
            } catch (tt) {
              $ = tt;
            }
            m.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            $ = tt;
          }
          m();
        }
      } catch (tt) {
        if (tt && $ && typeof tt.stack == "string") {
          for (var ae = tt.stack.split(`
`), Ge = $.stack.split(`
`), Te = ae.length - 1, ke = Ge.length - 1; Te >= 1 && ke >= 0 && ae[Te] !== Ge[ke]; )
            ke--;
          for (; Te >= 1 && ke >= 0; Te--, ke--)
            if (ae[Te] !== Ge[ke]) {
              if (Te !== 1 || ke !== 1)
                do
                  if (Te--, ke--, ke < 0 || ae[Te] !== Ge[ke]) {
                    var Pe = `
` + ae[Te].replace(" at new ", " at ");
                    return m.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", m.displayName)), typeof m == "function" && N.set(m, Pe), Pe;
                  }
                while (Te >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        k = !1, xe.current = me, fe(), Error.prepareStackTrace = pe;
      }
      var An = m ? m.displayName || m.name : "", ln = An ? M(An) : "";
      return typeof m == "function" && N.set(m, ln), ln;
    }
    function z(m, P, D) {
      return V(m, !1);
    }
    function L(m) {
      var P = m.prototype;
      return !!(P && P.isReactComponent);
    }
    function Je(m, P, D) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return V(m, L(m));
      if (typeof m == "string")
        return M(m);
      switch (m) {
        case l:
          return M("Suspense");
        case f:
          return M("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return z(m.render);
          case d:
            return Je(m.type, P, D);
          case u: {
            var $ = m, pe = $._payload, me = $._init;
            try {
              return Je(me(pe), P, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, ut = {}, Ot = S.ReactDebugCurrentFrame;
    function at(m) {
      if (m) {
        var P = m._owner, D = Je(m.type, m._source, P ? P.type : null);
        Ot.setExtraStackFrame(D);
      } else
        Ot.setExtraStackFrame(null);
    }
    function Rt(m, P, D, $, pe) {
      {
        var me = Function.call.bind(Ae);
        for (var ue in m)
          if (me(m, ue)) {
            var ae = void 0;
            try {
              if (typeof m[ue] != "function") {
                var Ge = Error(($ || "React class") + ": " + D + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ge.name = "Invariant Violation", Ge;
              }
              ae = m[ue](P, ue, $, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              ae = Te;
            }
            ae && !(ae instanceof Error) && (at(pe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", D, ue, typeof ae), at(null)), ae instanceof Error && !(ae.message in ut) && (ut[ae.message] = !0, at(pe), b("Failed %s type: %s", D, ae.message), at(null));
          }
      }
    }
    var Ne = Array.isArray;
    function _e(m) {
      return Ne(m);
    }
    function Ye(m) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, D = P && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return D;
      }
    }
    function gt(m) {
      try {
        return ft(m), !1;
      } catch {
        return !0;
      }
    }
    function ft(m) {
      return "" + m;
    }
    function rn(m) {
      if (gt(m))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(m)), ft(m);
    }
    var on = S.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, an;
    function j(m) {
      if (Ae.call(m, "ref")) {
        var P = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function w(m) {
      if (Ae.call(m, "key")) {
        var P = Object.getOwnPropertyDescriptor(m, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function we(m, P) {
      typeof m.ref == "string" && on.current;
    }
    function be(m, P) {
      {
        var D = function() {
          sn || (sn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function je(m, P) {
      {
        var D = function() {
          an || (an = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var le = function(m, P, D, $, pe, me, ue) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: m,
        key: P,
        ref: D,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: me
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
    function Qe(m, P, D, $, pe) {
      {
        var me, ue = {}, ae = null, Ge = null;
        D !== void 0 && (rn(D), ae = "" + D), w(P) && (rn(P.key), ae = "" + P.key), j(P) && (Ge = P.ref, we(P, pe));
        for (me in P)
          Ae.call(P, me) && !Cn.hasOwnProperty(me) && (ue[me] = P[me]);
        if (m && m.defaultProps) {
          var Te = m.defaultProps;
          for (me in Te)
            ue[me] === void 0 && (ue[me] = Te[me]);
        }
        if (ae || Ge) {
          var ke = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ae && be(ue, ke), Ge && je(ue, ke);
        }
        return le(m, ae, Ge, pe, $, on.current, ue);
      }
    }
    var Oe = S.ReactCurrentOwner, Bt = S.ReactDebugCurrentFrame;
    function ct(m) {
      if (m) {
        var P = m._owner, D = Je(m.type, m._source, P ? P.type : null);
        Bt.setExtraStackFrame(D);
      } else
        Bt.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function cn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function Ve() {
      {
        if (Oe.current) {
          var m = F(Oe.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function qe(m) {
      return "";
    }
    var $e = {};
    function kt(m) {
      {
        var P = Ve();
        if (!P) {
          var D = typeof m == "string" ? m : m.displayName || m.name;
          D && (P = `

Check the top-level render call using <` + D + ">.");
        }
        return P;
      }
    }
    function et(m, P) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var D = kt(P);
        if ($e[D])
          return;
        $e[D] = !0;
        var $ = "";
        m && m._owner && m._owner !== Oe.current && ($ = " It was passed a child from " + F(m._owner.type) + "."), ct(m), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, $), ct(null);
      }
    }
    function Xt(m, P) {
      {
        if (typeof m != "object")
          return;
        if (_e(m))
          for (var D = 0; D < m.length; D++) {
            var $ = m[D];
            cn($) && et($, P);
          }
        else if (cn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var pe = x(m);
          if (typeof pe == "function" && pe !== m.entries)
            for (var me = pe.call(m), ue; !(ue = me.next()).done; )
              cn(ue.value) && et(ue.value, P);
        }
      }
    }
    function dt(m) {
      {
        var P = m.type;
        if (P == null || typeof P == "string")
          return;
        var D;
        if (typeof P == "function")
          D = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === d))
          D = P.propTypes;
        else
          return;
        if (D) {
          var $ = F(P);
          Rt(D, m.props, "prop", $, m);
        } else if (P.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var pe = F(P);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(m) {
      {
        for (var P = Object.keys(m.props), D = 0; D < P.length; D++) {
          var $ = P[D];
          if ($ !== "children" && $ !== "key") {
            ct(m), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), ct(null);
            break;
          }
        }
        m.ref !== null && (ct(m), b("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var er = {};
    function Tr(m, P, D, $, pe, me) {
      {
        var ue = Y(m);
        if (!ue) {
          var ae = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = qe();
          Ge ? ae += Ge : ae += Ve();
          var Te;
          m === null ? Te = "null" : _e(m) ? Te = "array" : m !== void 0 && m.$$typeof === n ? (Te = "<" + (F(m.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof m, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ae);
        }
        var ke = Qe(m, P, D, pe, me);
        if (ke == null)
          return ke;
        if (ue) {
          var Pe = P.children;
          if (Pe !== void 0)
            if ($)
              if (_e(Pe)) {
                for (var An = 0; An < Pe.length; An++)
                  Xt(Pe[An], m);
                Object.freeze && Object.freeze(Pe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(Pe, m);
        }
        if (Ae.call(P, "key")) {
          var ln = F(m), tt = Object.keys(P).filter(function(Zf) {
            return Zf !== "key";
          }), ui = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[ln + ui]) {
            var Kf = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, ln, Kf, ln), er[ln + ui] = !0;
          }
        }
        return m === r ? Yt(ke) : dt(ke), ke;
      }
    }
    function He(m, P, D) {
      return Tr(m, P, D, !0);
    }
    function Or(m, P, D) {
      return Tr(m, P, D, !1);
    }
    var li = Or, Re = He;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Re;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? Rr.exports = i0() : Rr.exports = s0()), Rr.exports;
}
var q = a0(), ot = function() {
  return ot = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, ot.apply(this, arguments);
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
), Ce = "-ms-", fr = "-moz-", ye = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(t, n) {
  return Xe(t, 0) ^ 45 ? (((n << 2 ^ Xe(t, 0)) << 2 ^ Xe(t, 1)) << 2 ^ Xe(t, 2)) << 2 ^ Xe(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Ut(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function ie(t, n, e) {
  return t.replace(n, e);
}
function Xr(t, n, e) {
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
function p0(t, n) {
  return t.map(n).join("");
}
function ba(t, n) {
  return t.filter(function(e) {
    return !Ut(e, n);
  });
}
var zo = 1, Mn = 1, dl = 0, xt = 0, Be = 0, Wn = "";
function Vo(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: zo, column: Mn, length: s, return: "", siblings: a };
}
function $t(t, n) {
  return ji(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function Tn(t) {
  for (; t.root; )
    t = $t(t.root, { children: [t] });
  lr(t, t.siblings);
}
function x0() {
  return Be;
}
function m0() {
  return Be = xt > 0 ? Xe(Wn, --xt) : 0, Mn--, Be === 10 && (Mn = 1, zo--), Be;
}
function St() {
  return Be = xt < dl ? Xe(Wn, xt++) : 0, Mn++, Be === 10 && (Mn = 1, zo++), Be;
}
function gn() {
  return Xe(Wn, xt);
}
function Yr() {
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
  return zo = Mn = 1, dl = jt(Wn = t), xt = 0, [];
}
function v0(t) {
  return Wn = "", t;
}
function fi(t) {
  return ul(Ho(xt - 1, Li(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (Be = gn()) && Be < 33; )
    St();
  return Mi(t) > 2 || Mi(Be) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && St() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return Ho(t, Yr() + (n < 6 && gn() == 32 && St() == 32));
}
function Li(t) {
  for (; St(); )
    switch (Be) {
      // ] ) " '
      case t:
        return xt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Li(Be);
        break;
      // (
      case 40:
        t === 41 && Li(t);
        break;
      // \
      case 92:
        St();
        break;
    }
  return xt;
}
function S0(t, n) {
  for (; St() && t + Be !== 57; )
    if (t + Be === 84 && gn() === 47)
      break;
  return "/*" + Ho(n, xt - 1) + "*" + Vs(t === 47 ? t : St());
}
function w0(t) {
  for (; !Mi(gn()); )
    St();
  return Ho(t, xt);
}
function E0(t) {
  return v0($r("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function $r(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, S = 1, b = 0, p = "", C = o, y = i, R = r, A = p; x; )
    switch (g = b, b = St()) {
      // (
      case 40:
        if (g != 108 && Xe(A, d - 1) == 58) {
          Xr(A += ie(fi(b), "&", "&\f"), "&\f", ll(l ? a[l - 1] : 0)) != -1 && (S = -1);
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
        A += b0(Yr() - 1, 7);
        continue;
      // /
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            lr(_0(S0(St(), Yr()), n, e, c), c);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = jt(A) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + f:
            S == -1 && (A = ie(A, /\f/g, "")), v > 0 && jt(A) - d && lr(v > 32 ? wa(A + ";", r, e, d - 1, c) : wa(ie(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (lr(R = Sa(A, n, e, l, f, o, a, p, C = [], y = [], d, i), i), b === 123)
              if (f === 0)
                $r(A, n, R, R, C, i, d, a, y);
              else
                switch (u === 99 && Xe(A, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $r(t, R, R, r && lr(Sa(t, R, R, 0, 0, o, a, p, o, C = [], d, y), y), o, y, d, a, r ? C : y);
                    break;
                  default:
                    $r(A, R, R, R, [""], y, 0, a, y);
                }
        }
        l = f = v = 0, h = S = 1, p = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + jt(A), v = g;
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
            a[l++] = (jt(A) - 1) * S, S = 1;
            break;
          // @
          case 64:
            gn() === 45 && (A += fi(St())), u = gn(), f = d = jt(p = A += w0(Yr())), b++;
            break;
          // -
          case 45:
            g === 45 && jt(A) == 2 && (h = 0);
        }
    }
  return i;
}
function Sa(t, n, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = fl(v), h = 0, x = 0, S = 0; h < r; ++h)
    for (var b = 0, p = jn(t, u + 1, u = ll(x = s[h])), C = t; b < g; ++b)
      (C = ul(x > 0 ? v[b] + " " + p : ie(p, /&\f/g, v[b]))) && (c[S++] = C);
  return Vo(t, n, e, o === 0 ? Fo : a, c, l, f, d);
}
function _0(t, n, e, r) {
  return Vo(t, n, e, al, Vs(x0()), jn(t, 2, -2), 0, r);
}
function wa(t, n, e, r, o) {
  return Vo(t, n, e, zs, jn(t, 0, r), jn(t, r + 1, -1), r, o);
}
function hl(t, n, e) {
  switch (h0(t, n)) {
    // color-adjust
    case 5103:
      return ye + "print-" + t + t;
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
      return ye + t + t;
    // tab-size
    case 4789:
      return fr + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + t + fr + t + Ce + t + t;
    // writing-mode
    case 5936:
      switch (Xe(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return ye + t + Ce + ie(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return ye + t + Ce + ie(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return ye + t + Ce + ie(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ye + t + Ce + t + t;
    // order
    case 6165:
      return ye + t + Ce + "flex-" + t + t;
    // align-items
    case 5187:
      return ye + t + ie(t, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Ce + "flex-$1$2") + t;
    // align-self
    case 5443:
      return ye + t + Ce + "flex-item-" + ie(t, /flex-|-self/g, "") + (Ut(t, /flex-|baseline/) ? "" : Ce + "grid-row-" + ie(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return ye + t + Ce + "flex-line-pack" + ie(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return ye + t + Ce + ie(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return ye + t + Ce + ie(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return ye + "box-" + ie(t, "-grow", "") + ye + t + Ce + ie(t, "grow", "positive") + t;
    // transition
    case 4554:
      return ye + ie(t, /([^-])(transform)/g, "$1" + ye + "$2") + t;
    // cursor
    case 6187:
      return ie(ie(ie(t, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return ie(t, /(image-set\([^]*)/, ye + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(t, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + t + t;
    // justify-self
    case 4200:
      if (!Ut(t, /flex-|baseline/)) return Ce + "grid-column-align" + jn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ce + ie(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Ut(r.props, /grid-\w+-end/);
      }) ? ~Xr(t + (e = e[n].value), "span", 0) ? t : Ce + ie(t, "-start", "") + t + Ce + "grid-row-span:" + (~Xr(e, "span", 0) ? Ut(e, /\d+/) : +Ut(e, /\d+/) - +Ut(t, /\d+/)) + ";" : Ce + ie(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ut(r.props, /grid-\w+-start/);
      }) ? t : Ce + ie(ie(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(t, /(.+)-inline(.+)/, ye + "$1$2") + t;
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
            return ie(t, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + fr + (Xe(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Xr(t, "stretch", 0) ? hl(ie(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Ce + o + ":" + i + l + (s ? Ce + o + "-span:" + (a ? c : +c - +i) + l : "") + t;
      });
    // position: sticky
    case 4949:
      if (Xe(t, n + 6) === 121)
        return ie(t, ":", ":" + ye) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Xe(t, Xe(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ye + (Xe(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + Ce + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return ie(t, ":", ":" + Ce) + t;
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
        return po([$t(t, { value: ie(t.value, "@", "@" + ye) })], r);
      case Fo:
        if (t.length)
          return p0(e = t.props, function(o) {
            switch (Ut(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tn($t(t, { props: [ie(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Tn($t(t, { props: [ie(o, /:(plac\w+)/, ":" + ye + "input-$1")] })), Tn($t(t, { props: [ie(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn($t(t, { props: [ie(o, /:(plac\w+)/, Ce + "input-$1")] })), Tn($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
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
}, En = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", pl = "active", xl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
`, xo = typeof window < "u" && typeof document < "u", k0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, kr = /* @__PURE__ */ new Set(), P0 = function(t, n) {
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
        Ea.test(s) ? (i = !1, kr.delete(r)) : o.apply(void 0, Nn([s], a, !1));
      }, Ue(), i && !kr.has(r) && (console.warn(r), kr.add(r));
    } catch (s) {
      Ea.test(s.message) && kr.delete(r);
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
var M0 = /(a)(d)/gi, Pr = 52, Ca = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bi(t) {
  var n, e = "";
  for (n = Math.abs(t); n > Pr; n = n / Pr | 0) e = Ca(n % Pr) + e;
  return (Ca(n % Pr) + e).replace(M0, "$1-$2");
}
var di, ml = 5381, fn = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, gl = function(t) {
  return fn(ml, t);
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
        var l = U0(n, c);
        try {
          V0(t, c, l);
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
}(), $0 = 1 << 30, Gr = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map(), Kr = 1, Ir = function(t) {
  if (Gr.has(t)) return Gr.get(t);
  for (; mo.has(Kr); ) Kr++;
  var n = Kr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > $0)) throw Xn(16, "".concat(n));
  return Gr.set(t, n), mo.set(n, t), n;
}, G0 = function(t, n) {
  Kr = n + 1, Gr.set(t, n), mo.set(n, t);
}, K0 = "style[".concat(En, "][").concat(xl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(En, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(n, r);
}, Q0 = function(t, n) {
  for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (G0(f, l), J0(t, f, c[3]), t.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, ka = function(t) {
  for (var n = document.querySelectorAll(K0), e = 0, r = n.length; e < r; e++) {
    var o = n[e];
    o && o.getAttribute(En) !== pl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
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
  r.setAttribute(En, pl), r.setAttribute(xl, Uo);
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
}(), Pa = xo, od = { isServer: !xo, useCSSOMInjection: !k0 }, _l = function() {
  function t(n, e, r) {
    n === void 0 && (n = Ln), e === void 0 && (e = {});
    var o = this;
    this.options = ot(ot({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && xo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(S) {
            return mo.get(S);
          }(d);
          if (u === void 0) return "continue";
          var v = i.names.get(u), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(En, ".g").concat(d, '[id="').concat(u, '"]'), x = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (x += "".concat(S, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Hs);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return t.registerId = function(n) {
    return Ir(n);
  }, t.prototype.rehydrate = function() {
    !this.server && xo && ka(this);
  }, t.prototype.reconstructWithOptions = function(n, e) {
    return e === void 0 && (e = !0), new t(ot(ot({}, this.options), n), this.gs, e && this.names || void 0);
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
    if (Ir(n), this.names.has(n)) this.names.get(n).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(n, r);
    }
  }, t.prototype.insertRules = function(n, e, r) {
    this.registerName(n, e), this.getTag().insertRules(Ir(n), r);
  }, t.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Ir(n)), this.clearNames(n);
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
  var n, e, r, o = Ln, i = o.options, s = i === void 0 ? Ln : i, a = o.plugins, c = a === void 0 ? qo : a, l = function(u, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === Fo && u.value.includes("&") && (u.props[0] = u.props[0].replace(id, e).replace(r, l));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(u, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), n = h, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var x = u.replace(sd, ""), S = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (S = Cl(S, s.namespace));
    var b = [];
    return po(S, A0(f.concat(T0(function(p) {
      return b.push(p);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || Xn(15), fn(u, v.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zi = ad(), Al = De.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
Al.Consumer;
De.createContext(void 0);
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
      for (var c = fn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = fn(c, d));
        else if (d) {
          var u = Ra(vn(d, n, e, r));
          c = fn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = Bi(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = hn(o, v);
      }
    }
    return o;
  }, t;
}(), Rl = De.createContext(void 0);
Rl.Consumer;
var pi = {}, Ma = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Us(t), o = t, i = !hi(t), s = n.attrs, a = s === void 0 ? qo : s, c = n.componentId, l = c === void 0 ? function(C, y) {
    var R = typeof C != "string" ? "sc" : _a(C);
    pi[R] = (pi[R] || 0) + 1;
    var A = "".concat(R, "-").concat(L0(Uo + R + pi[R]));
    return y ? "".concat(y, "-").concat(A) : A;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(C) {
    return hi(C) ? "styled.".concat(C) : "Styled(".concat(vl(C), ")");
  }(t) : f, u = n.displayName && n.componentId ? "".concat(_a(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var x = n.shouldForwardProp;
      g = function(C, y) {
        return h(C, y) && x(C, y);
      };
    } else g = h;
  }
  var S = new dd(e, u, r ? o.componentStyle : void 0);
  function b(C, y) {
    return function(R, A, I) {
      var B = R.attrs, Y = R.componentStyle, re = R.defaultProps, G = R.foldedComponentIds, F = R.styledComponentId, X = R.target, U = De.useContext(Rl), ee = Ia(), Z = R.shouldForwardProp || ee.shouldForwardProp;
      process.env.NODE_ENV !== "production" && xa(F);
      var J = I0(A, U, re) || Ln, Q = function(fe, xe, E) {
        for (var M, k = ot(ot({}, xe), { className: void 0, theme: E }), N = 0; N < fe.length; N += 1) {
          var O = Dn(M = fe[N]) ? M(k) : M;
          for (var V in O) k[V] = V === "className" ? hn(k[V], O[V]) : V === "style" ? ot(ot({}, k[V]), O[V]) : O[V];
        }
        return xe.className && (k.className = hn(k.className, xe.className)), k;
      }(B, A, J), se = Q.as || X, oe = {};
      for (var K in Q) Q[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Q.theme === J || (K === "forwardedAs" ? oe.as = Q.forwardedAs : Z && !Z(K, se) || (oe[K] = Q[K], Z || process.env.NODE_ENV !== "development" || u0(K) || Ma.has(K) || !Di.has(se) || (Ma.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(fe, xe) {
        var E = Ia(), M = fe.generateAndInjectStyles(xe, E.styleSheet, E.stylis);
        return process.env.NODE_ENV !== "production" && xa(M), M;
      }(Y, Q);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(te);
      var he = hn(G, F);
      return te && (he += " " + te), Q.className && (he += " " + Q.className), oe[hi(se) && !Di.has(se) ? "class" : "className"] = he, I && (oe.ref = I), e0(se, oe);
    }(p, C, y);
  }
  b.displayName = d;
  var p = De.forwardRef(b);
  return p.attrs = v, p.componentStyle = S, p.displayName = d, p.shouldForwardProp = g, p.foldedComponentIds = r ? hn(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = u, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(y) {
      for (var R = [], A = 1; A < arguments.length; A++) R[A - 1] = arguments[A];
      for (var I = 0, B = R; I < B.length; I++) Fi(y, B[I], !0);
      return y;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (P0(d, u), p.warnTooManyClasses = /* @__PURE__ */ function(C, y) {
    var R = {}, A = !1;
    return function(I) {
      if (!A && (R[I] = !0, Object.keys(R).length >= 200)) {
        var B = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(B, `.
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
  }(d, u)), qs(p, function() {
    return ".".concat(p.styledComponentId);
  }), i && wl(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
function La(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var Da = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function pd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Dn(t) || Bn(t)) return Da(vn(La(qo, Nn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? vn(r) : Da(vn(La(r, n)));
}
function Vi(t, n, e) {
  if (e === void 0 && (e = Ln), !n) throw Xn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(n, e, pd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(t, n, ot(ot({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(t, n, ot(ot({}, e), o));
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
var Nr = "__sc-".concat(En, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Nr] || (window[Nr] = 0), window[Nr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Nr] += 1);
function go(t, n) {
  const e = vo();
  return go = function(r, o) {
    return r = r - 109, e[r];
  }, go(t, n);
}
const wr = go;
function vo() {
  const t = ["span", "35fiPvDh", "444444qSMeub", "29046256DquHvF", "450572XvSrrV", "2029712pFYmAv", "2652210grrswP", "490516nnKfKu", "canvas", "div", "7530078BQpxuS"];
  return vo = function() {
    return t;
  }, vo();
}
(function(t, n) {
  const e = go, r = t();
  for (; ; )
    try {
      if (-parseInt(e(115)) / 1 + -parseInt(e(116)) / 2 + parseInt(e(117)) / 3 + parseInt(e(118)) / 4 * (-parseInt(e(112)) / 5) + -parseInt(e(110)) / 6 + -parseInt(e(113)) / 7 + parseInt(e(114)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(vo, 872516);
const xd = _t[wr(109)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = _t[wr(109)]`
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
`, gd = _t[wr(119)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = _t[wr(111)]`
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
`, yd = _t[wr(109)]`
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
const Zr = /* @__PURE__ */ Object.create(null);
Object.keys(Lt).forEach((t) => {
  Zr[Lt[t]] = t;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Ws = ({ type: t, data: n }, e, r) => Pl && n instanceof Blob ? e ? r(n) : Ba(n, r) : Il && (n instanceof ArrayBuffer || Nl(n)) ? e ? r(n) : Ba(new Blob([n]), r) : r(Lt[t] + (n || "")), Ba = (t, n) => {
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
  const l = new ArrayBuffer(n), f = new Uint8Array(l);
  for (r = 0; r < e; r += 4)
    i = ur[t.charCodeAt(r)], s = ur[t.charCodeAt(r + 1)], a = ur[t.charCodeAt(r + 2)], c = ur[t.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
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
  } : Zr[e] ? t.length > 1 ? {
    type: Zr[e],
    data: t.substring(1)
  } : {
    type: Zr[e]
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
function jr(t) {
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
          if (jr(e) < 1)
            break;
          const c = Mr(e, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (jr(e) < 2)
            break;
          const c = Mr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (jr(e) < 8)
            break;
          const c = Mr(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (jr(e) < o)
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
const Ll = 4;
function ze(t) {
  if (t) return Od(t);
}
function Od(t) {
  for (var n in ze.prototype)
    t[n] = ze.prototype[n];
  return t;
}
ze.prototype.on = ze.prototype.addEventListener = function(t, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
};
ze.prototype.once = function(t, n) {
  function e() {
    this.off(t, e), n.apply(this, arguments);
  }
  return e.fn = n, this.on(t, e), this;
};
ze.prototype.off = ze.prototype.removeListener = ze.prototype.removeAllListeners = ze.prototype.removeEventListener = function(t, n) {
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
ze.prototype.emit = function(t) {
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
ze.prototype.emitReserved = ze.prototype.emit;
ze.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
ze.prototype.hasListeners = function(t) {
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
class Ys extends ze {
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
let Pn = class Jr extends ze {
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
    typeof document < "u" && (this._index = Jr.requestsCount++, Jr.requests[this._index] = this);
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
      typeof document < "u" && delete Jr.requests[this._index], this._xhr = null;
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
const qi = typeof addEventListener == "function" && typeof removeEventListener == "function", Qr = [];
qi && addEventListener("offline", () => {
  Qr.forEach((t) => t());
}, !1);
class Jt extends ze {
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
    }, Qr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
        const r = Qr.indexOf(this._offlineEventListener);
        r !== -1 && Qr.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Jt.protocol = Ll;
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
function eo(t, n) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let e = 0, r = t.length; e < r; e++)
      if (eo(t[e]))
        return !0;
    return !1;
  }
  if ($s(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return eo(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && eo(t[e]))
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
    return (n.type === de.EVENT || n.type === de.ACK) && eo(n) ? this.encodeAsBinary({
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
class Gs extends ze {
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
function vt(t, n, e) {
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
class Ul extends ze {
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
      vt(n, "open", this.onopen.bind(this)),
      vt(n, "packet", this.onpacket.bind(this)),
      vt(n, "error", this.onerror.bind(this)),
      vt(n, "close", this.onclose.bind(this))
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
class Yi extends ze {
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
    const o = vt(e, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = vt(e, "error", i);
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
      vt(n, "ping", this.onping.bind(this)),
      vt(n, "data", this.ondata.bind(this)),
      vt(n, "error", this.onerror.bind(this)),
      vt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      vt(this.decoder, "decoded", this.ondecoded.bind(this))
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
function to(t, n) {
  typeof t == "object" && (n = t, t = void 0), n = n || {};
  const e = eh(t, n.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = rr[o] && i in rr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Yi(r, n) : (rr[o] || (rr[o] = new Yi(r, n)), c = rr[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
}
Object.assign(to, {
  Manager: Yi,
  Socket: Ul,
  io: to,
  connect: to
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
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Dt.apply(null, arguments);
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
function H(t) {
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
  return t && Se(t) === "object" && Wa(t.nativeElement) ? t.nativeElement : Wa(t) ? t : null;
}
function _h(t) {
  var n = Eh(t);
  if (n)
    return n;
  if (t instanceof De.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, t);
  }
  return null;
}
var Lr = { exports: {} }, ge = {};
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
  if (Xa) return ge;
  Xa = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(x) {
    if (typeof x == "object" && x !== null) {
      var S = x.$$typeof;
      switch (S) {
        case t:
          switch (x = x.type, x) {
            case e:
            case o:
            case r:
            case l:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case s:
                case c:
                case u:
                case d:
                case i:
                  return x;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = i, ge.Element = t, ge.ForwardRef = c, ge.Fragment = e, ge.Lazy = u, ge.Memo = d, ge.Portal = n, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = l, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(x) {
    return h(x) === s;
  }, ge.isContextProvider = function(x) {
    return h(x) === i;
  }, ge.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ge.isForwardRef = function(x) {
    return h(x) === c;
  }, ge.isFragment = function(x) {
    return h(x) === e;
  }, ge.isLazy = function(x) {
    return h(x) === u;
  }, ge.isMemo = function(x) {
    return h(x) === d;
  }, ge.isPortal = function(x) {
    return h(x) === n;
  }, ge.isProfiler = function(x) {
    return h(x) === o;
  }, ge.isStrictMode = function(x) {
    return h(x) === r;
  }, ge.isSuspense = function(x) {
    return h(x) === l;
  }, ge.isSuspenseList = function(x) {
    return h(x) === f;
  }, ge.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === e || x === o || x === r || x === l || x === f || x === v || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, ge.typeOf = h, ge;
}
var ve = {};
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
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, S = !1, b = !1, p;
    p = Symbol.for("react.module.reference");
    function C(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === e || L === o || b || L === r || L === l || L === f || S || L === v || g || h || x || typeof L == "object" && L !== null && (L.$$typeof === u || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === p || L.getModuleId !== void 0));
    }
    function y(L) {
      if (typeof L == "object" && L !== null) {
        var Je = L.$$typeof;
        switch (Je) {
          case t:
            var Ae = L.type;
            switch (Ae) {
              case e:
              case o:
              case r:
              case l:
              case f:
                return Ae;
              default:
                var ut = Ae && Ae.$$typeof;
                switch (ut) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return ut;
                  default:
                    return Je;
                }
            }
          case n:
            return Je;
        }
      }
    }
    var R = s, A = i, I = t, B = c, Y = e, re = u, G = d, F = n, X = o, U = r, ee = l, Z = f, J = !1, Q = !1;
    function se(L) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(L) {
      return y(L) === s;
    }
    function te(L) {
      return y(L) === i;
    }
    function he(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function fe(L) {
      return y(L) === c;
    }
    function xe(L) {
      return y(L) === e;
    }
    function E(L) {
      return y(L) === u;
    }
    function M(L) {
      return y(L) === d;
    }
    function k(L) {
      return y(L) === n;
    }
    function N(L) {
      return y(L) === o;
    }
    function O(L) {
      return y(L) === r;
    }
    function V(L) {
      return y(L) === l;
    }
    function z(L) {
      return y(L) === f;
    }
    ve.ContextConsumer = R, ve.ContextProvider = A, ve.Element = I, ve.ForwardRef = B, ve.Fragment = Y, ve.Lazy = re, ve.Memo = G, ve.Portal = F, ve.Profiler = X, ve.StrictMode = U, ve.Suspense = ee, ve.SuspenseList = Z, ve.isAsyncMode = se, ve.isConcurrentMode = oe, ve.isContextConsumer = K, ve.isContextProvider = te, ve.isElement = he, ve.isForwardRef = fe, ve.isFragment = xe, ve.isLazy = E, ve.isMemo = M, ve.isPortal = k, ve.isProfiler = N, ve.isStrictMode = O, ve.isSuspense = V, ve.isSuspenseList = z, ve.isValidElementType = C, ve.typeOf = y;
  }()), ve;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Lr.exports = Ch() : Lr.exports = Ah()), Lr.exports;
}
var yi = Th();
function Yl(t, n, e) {
  var r = _.useRef({});
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
function Er(t, n) {
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
  if (n && (Se(n) == "object" || typeof n == "function")) return n;
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
var yo = function(n) {
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
yo.cancel = function(t) {
  var n = $o.get(t);
  return eu(t), Ql(n);
};
process.env.NODE_ENV !== "production" && (yo.ids = function() {
  return $o;
});
function tu(t) {
  if (Array.isArray(t)) return t;
}
function jh(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
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
function Wt() {
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
  if (!Wt())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var l = Go(n), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || ea(l)).filter(function(u) {
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
function bn(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), i = H(H({}, e), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
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
    var l = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], s[f], l))
          return !1;
      return !0;
    }
    if (i && s && Se(i) === "object" && Se(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
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
    Ct(this, t), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
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
var _r = /* @__PURE__ */ _.createContext({
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
    Ct(this, t), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
  }]), t;
}();
W(ta, "MAX_CACHE_SIZE", 20);
W(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function t(n) {
    Ct(this, t), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zs(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
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
    n += e, r instanceof au ? n += r.id : r && Se(r) === "object" ? n += dr(r) : n += r;
  }), n = xr(n), ec.set(t, n)), n;
}
function tc(t, n) {
  return xr("".concat(n, "_").concat(dr(t)));
}
var es = Wt();
function bo(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function So(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = H(H({}, o), {}, (r = {}, W(r, zn, n), W(r, wt, e), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var no = function(n) {
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
    var a, c, l = ce(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = no(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
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
}, Gh = H({}, _), rc = Gh.useInsertionEffect, Kh = function(n, e, r) {
  _.useMemo(n, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(t, n, e) {
  return rc(function() {
    return t(), n();
  }, e);
} : Kh, Jh = H({}, _), Qh = Jh.useInsertionEffect, ep = function(n) {
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
  var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Dr && typeof Dr.webpackHotUpdate == "function") {
    var sp = Dr.webpackHotUpdate;
    Dr.webpackHotUpdate = function() {
      return ts = !0, setTimeout(function() {
        ts = !1;
      }, 0), sp.apply(void 0, arguments);
    };
  }
}
function na(t, n, e, r, o) {
  var i = _.useContext(_r), s = i.cache, a = [t].concat(qt(n)), c = Ji(a), l = np([c]), f = ip(), d = function(h) {
    s.opUpdate(c, function(x) {
      var S = x || [void 0, void 0], b = ce(S, 2), p = b[0], C = p === void 0 ? 0 : p, y = b[1], R = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(R, f), R = null);
      var A = R || e(), I = [C, A];
      return h ? h(I) : I;
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
    return d(function(h) {
      var x = ce(h, 2), S = x[0], b = x[1];
      return g && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(h) {
        var x = h || [], S = ce(x, 2), b = S[0], p = b === void 0 ? 0 : b, C = S[1], y = p - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [p - 1, C];
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
  var i = r.getDerivativeToken(n), s = H(H({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function pp(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(_r), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, l = c === void 0 ? ap : c, f = e.formatToken, d = e.getComputedToken, u = e.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(qt(n)));
  }, n), g = dr(v), h = dr(l), x = u ? dr(u) : "", S = na(uu, [a, t.id, g, h, x], function() {
    var b, p = d ? d(v, l, t) : hp(v, l, t, f), C = H({}, p), y = "";
    if (u) {
      var R = cu(p, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), A = ce(R, 2);
      p = A[0], y = A[1];
    }
    var I = tc(p, a);
    p._tokenKey = I, C._tokenKey = tc(C, a);
    var B = (b = u == null ? void 0 : u.key) !== null && b !== void 0 ? b : I;
    p._themeKey = B, lp(B);
    var Y = "".concat(cp, "-").concat(xr(I));
    return p._hashId = Y, [p, Y, C, y, (u == null ? void 0 : u.key) || ""];
  }, function(b) {
    dp(b[0]._themeKey, o);
  }, function(b) {
    var p = ce(b, 4), C = p[0], y = p[3];
    if (u && y) {
      var R = bn(y, xr("css-variables-".concat(C._themeKey)), {
        mark: wt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[Kt] = o, R.setAttribute(zn, C._themeKey);
    }
  });
  return S;
}
var xp = function(n, e, r) {
  var o = ce(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = So(s, a, f, u, l);
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
function ro(t, n, e) {
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
function Nt(t) {
  return t.length;
}
function wp(t) {
  return t.length;
}
function Br(t, n) {
  return n.push(t), t;
}
var Ko = 1, Hn = 1, mu = 0, mt = 0, Fe = 0, $n = "";
function oa(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ep() {
  return Fe;
}
function _p() {
  return Fe = mt > 0 ? In($n, --mt) : 0, Hn--, Fe === 10 && (Hn = 1, Ko--), Fe;
}
function Et() {
  return Fe = mt < mu ? In($n, mt++) : 0, Hn++, Fe === 10 && (Hn = 1, Ko++), Fe;
}
function Zt() {
  return In($n, mt);
}
function oo() {
  return mt;
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
function Cp(t) {
  return Ko = Hn = 1, mu = Nt($n = t), mt = 0, [];
}
function Ap(t) {
  return $n = "", t;
}
function wi(t) {
  return xu(Zo(mt - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tp(t) {
  for (; (Fe = Zt()) && Fe < 33; )
    Et();
  return gr(t) > 2 || gr(Fe) > 3 ? "" : " ";
}
function Op(t, n) {
  for (; --n && Et() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return Zo(t, oo() + (n < 6 && Zt() == 32 && Et() == 32));
}
function ns(t) {
  for (; Et(); )
    switch (Fe) {
      // ] ) " '
      case t:
        return mt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ns(Fe);
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
  return mt;
}
function Rp(t, n) {
  for (; Et() && t + Fe !== 57; )
    if (t + Fe === 84 && Zt() === 47)
      break;
  return "/*" + Zo(n, mt - 1) + "*" + ra(t === 47 ? t : Et());
}
function kp(t) {
  for (; !gr(Zt()); )
    Et();
  return Zo(t, mt);
}
function Pp(t) {
  return Ap(io("", null, null, null, [""], t = Cp(t), 0, [0], t));
}
function io(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, S = 1, b = 0, p = "", C = o, y = i, R = r, A = p; x; )
    switch (g = b, b = Et()) {
      // (
      case 40:
        if (g != 108 && In(A, d - 1) == 58) {
          Sp(A += ro(wi(b), "&", "&\f"), "&\f", pu(l ? a[l - 1] : 0)) != -1 && (S = -1);
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
        A += Op(oo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Br(Ip(Rp(Et(), oo()), n, e, c), c), (gr(g || 1) == 5 || gr(Zt() || 1) == 5) && Nt(A) && Vn(A, -1, void 0) !== " " && (A += " ");
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Nt(A) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + f:
            S == -1 && (A = ro(A, /\f/g, "")), v > 0 && (Nt(A) - d || h === 0 && g === 47) && Br(v > 32 ? ic(A + ";", r, e, d - 1, c) : ic(ro(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Br(R = oc(A, n, e, l, f, o, a, p, C = [], y = [], d, i), i), b === 123)
              if (f === 0)
                io(A, n, R, R, C, i, d, a, y);
              else {
                switch (u) {
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
                f ? io(t, R, R, r && Br(oc(t, R, R, 0, 0, o, a, p, o, C = [], d, y), y), o, y, d, a, r ? C : y) : io(A, R, R, R, [""], y, 0, a, y);
              }
        }
        l = f = v = 0, h = S = 1, p = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(A), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && _p() == 125)
            continue;
        }
        switch (A += ra(b), b * h) {
          // &
          case 38:
            S = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Nt(A) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (A += wi(Et())), u = Zt(), f = d = Nt(p = A += kp(oo())), b++;
            break;
          // -
          case 45:
            g === 45 && Nt(A) == 2 && (h = 0);
        }
    }
  return i;
}
function oc(t, n, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = wp(v), h = 0, x = 0, S = 0; h < r; ++h)
    for (var b = 0, p = Vn(t, u + 1, u = pu(x = s[h])), C = t; b < g; ++b)
      (C = xu(x > 0 ? v[b] + " " + p : ro(p, /&\f/g, v[b]))) && (c[S++] = C);
  return oa(t, n, e, o === 0 ? du : a, c, l, f, d);
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
      if (!Nt(t.value = t.props.join(","))) return "";
  }
  return Nt(e = rs(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
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
}, Mp = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", Sn, yu = !0;
function Lp() {
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
function Dp(t) {
  return Lp(), !!Sn[t];
}
function Bp(t) {
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
function so(t) {
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
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(qt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zp = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, f = e.hashPriority, d = e.transformers, u = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, h = "", x = {};
  function S(C) {
    var y = C.getName(a);
    if (!x[y]) {
      var R = t(C.style, e, {
        root: !1,
        parentSelectors: s
      }), A = ce(R, 1), I = A[0];
      x[y] = "@keyframes ".concat(C.getName(a)).concat(I);
    }
  }
  function b(C) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(R) {
      Array.isArray(R) ? b(R, y) : R && y.push(R);
    }), y;
  }
  var p = b(Array.isArray(n) ? n : [n]);
  return p.forEach(function(C) {
    var y = typeof C == "string" && !o ? {} : C;
    if (typeof y == "string")
      h += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var R = u.reduce(function(A, I) {
        var B;
        return (I == null || (B = I.visit) === null || B === void 0 ? void 0 : B.call(I, A)) || A;
      }, y);
      Object.keys(R).forEach(function(A) {
        var I = R[A];
        if (Se(I) === "object" && I && (A !== "animationName" || !I._keyframe) && !Fp(I)) {
          var B = !1, Y = A.trim(), re = !1;
          (o || i) && a ? Y.startsWith("@") ? B = !0 : Y === "&" ? Y = ac("", a, f) : Y = ac(A, a, f) : o && !a && (Y === "&" || Y === "") && (Y = "", re = !0);
          var G = t(I, e, {
            root: re,
            injectHash: B,
            parentSelectors: [].concat(qt(s), [Y])
          }), F = ce(G, 2), X = F[0], U = F[1];
          x = H(H({}, x), U), h += "".concat(Y).concat(X);
        } else {
          let J = function(Q, se) {
            process.env.NODE_ENV !== "production" && (Se(I) !== "object" || !(I != null && I[bu])) && [jp, Mp].concat(qt(g)).forEach(function(te) {
              return te(Q, se, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Q.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = se;
            !mp[Q] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Q === "animationName" && se !== null && se !== void 0 && se._keyframe && (S(se), K = se.getName(a)), h += "".concat(oe, ":").concat(K, ";");
          };
          var ee, Z = (ee = I == null ? void 0 : I.value) !== null && ee !== void 0 ? ee : I;
          Se(I) === "object" && I !== null && I !== void 0 && I[Su] && Array.isArray(Z) ? Z.forEach(function(Q) {
            J(A, Q);
          }) : J(A, Z);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
};
function wu(t, n) {
  return xr("".concat(t.join("%")).concat(n));
}
function Vp() {
  return null;
}
var Eu = "style";
function os(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, l = c === void 0 ? 0 : c, f = _.useContext(_r), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, x = f.ssrInline, S = f.transformers, b = f.linters, p = f.cache, C = f.layer, y = e._tokenKey, R = [y];
  C && R.push("layer"), R.push.apply(R, qt(r));
  var A = es;
  process.env.NODE_ENV !== "production" && u !== void 0 && (A = u === "client");
  var I = na(
    Eu,
    R,
    // Create cache if needed
    function() {
      var F = R.join("|");
      if (Dp(F)) {
        var X = Bp(F), U = ce(X, 2), ee = U[0], Z = U[1];
        if (ee)
          return [ee, y, Z, {}, a, l];
      }
      var J = n(), Q = zp(J, {
        hashId: o,
        hashPriority: g,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), se = ce(Q, 2), oe = se[0], K = se[1], te = so(oe), he = wu(R, te);
      return [te, y, he, K, a, l];
    },
    // Remove cache if no need
    function(F, X) {
      var U = ce(F, 3), ee = U[2];
      (X || d) && es && su(ee, {
        mark: wt
      });
    },
    // Effect: Inject style here
    function(F) {
      var X = ce(F, 4), U = X[0];
      X[1];
      var ee = X[2], Z = X[3];
      if (A && U !== vu) {
        var J = {
          mark: wt,
          prepend: C ? !1 : "queue",
          attachTo: h,
          priority: l
        }, Q = typeof s == "function" ? s() : s;
        Q && (J.csp = {
          nonce: Q
        });
        var se = [], oe = [];
        Object.keys(Z).forEach(function(te) {
          te.startsWith("@layer") ? se.push(te) : oe.push(te);
        }), se.forEach(function(te) {
          bn(so(Z[te]), "_layer-".concat(te), H(H({}, J), {}, {
            prepend: !0
          }));
        });
        var K = bn(U, ee, J);
        K[Kt] = p.instanceId, K.setAttribute(zn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, R.join("|")), oe.forEach(function(te) {
          bn(so(Z[te]), "_effect-".concat(te), J);
        });
      }
    }
  ), B = ce(I, 3), Y = B[0], re = B[1], G = B[2];
  return function(F) {
    var X;
    if (!x || A || !v)
      X = /* @__PURE__ */ _.createElement(Vp, null);
    else {
      var U;
      X = /* @__PURE__ */ _.createElement("style", Dt({}, (U = {}, W(U, zn, re), W(U, wt, G), U), {
        dangerouslySetInnerHTML: {
          __html: Y
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, X, F);
  };
}
var Hp = function(n, e, r) {
  var o = ce(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = So(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var x = so(c[h]), S = So(x, s, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [f, a, v];
}, _u = "cssVar", Up = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, f = Qt(_r), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat(qt(n.path), [r, l, v]), h = na(_u, g, function() {
    var x = e(), S = cu(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ce(S, 2), p = b[0], C = b[1], y = wu(g, C);
    return [p, C, y, r];
  }, function(x) {
    var S = ce(x, 3), b = S[2];
    es && su(b, {
      mark: wt
    });
  }, function(x) {
    var S = ce(x, 3), b = S[1], p = S[2];
    if (b) {
      var C = bn(b, p, {
        mark: wt,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      C[Kt] = d, C.setAttribute(zn, r);
    }
  });
  return h;
}, qp = function(n, e, r) {
  var o = ce(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = So(i, a, s, d, l);
  return [f, s, u];
}, or;
or = {}, W(or, Eu, Hp), W(or, uu, xp), W(or, _u, qp);
var Cu = /* @__PURE__ */ function() {
  function t(n, e) {
    Ct(this, t), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = n, this.style = e;
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
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = qt(t) : a = H({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
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
      var c = new Set(a), l = is(o, s), f = Array.isArray(l);
      if (f || Xp(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || Se(d) !== "object") && (r = Ei(r, s, cc(l))), Yp(l).forEach(function(u) {
            i([].concat(qt(s), [u]), c);
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
let Ht = null;
function Gp() {
  Ht = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (t, n, e) => {
  tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gp();
});
const Ou = /* @__PURE__ */ _.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = _.useContext(Ou), e = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Ht;
        Ht || (Ht = {}), Ht[t] = Ht[t] || [], Ht[t].includes(i || "") || Ht[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ht);
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
}, Jo = sa, Kp = /* @__PURE__ */ Fs(void 0), lt = "${label} is not a valid ${type}", Qo = {
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
        string: lt,
        method: lt,
        array: lt,
        object: lt,
        number: lt,
        date: lt,
        boolean: lt,
        integer: lt,
        float: lt,
        regexp: lt,
        email: lt,
        url: lt,
        hex: lt
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
let ao = [];
const lc = () => ao.reduce((t, n) => Object.assign(Object.assign({}, t), n), Qo.Modal);
function Zp(t) {
  if (t) {
    const n = Object.assign({}, t);
    return ao.push(n), lc(), () => {
      ao = ao.filter((e) => e !== n), lc();
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
  _.useEffect(() => Zp(n == null ? void 0 : n.Modal), [n]);
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
class Le {
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
    } else if (n instanceof Le)
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
      const u = We(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
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
    const s = n / 60, a = Math.floor(s), c = s - a, l = We(r * (1 - e) * 255), f = We(r * (1 - e * c) * 255), d = We(r * (1 - e * (1 - c)) * 255);
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
var Fr = 2, fc = 0.16, Jp = 0.05, Qp = 0.05, ex = 0.15, Nu = 5, ju = 4, tx = [{
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
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - Fr * n : Math.round(t.h) + Fr * n : r = e ? Math.round(t.h) + Fr * n : Math.round(t.h) - Fr * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
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
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Le(t), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
    var s = new Le({
      h: dc(o, i, !0),
      s: hc(o, i, !0),
      v: pc(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Le({
      h: dc(o, a),
      s: hc(o, a),
      v: pc(o, a)
    });
    e.push(c);
  }
  return n.theme === "dark" ? tx.map(function(l) {
    var f = l.index, d = l.amount;
    return new Le(n.backgroundColor || "#141414").mix(e[f], d).toHexString();
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
var wo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
wo.primary = wo[5];
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
  blue: wo,
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
    colorBgBase: l,
    colorTextBase: f
  } = t, d = e(c), u = e(o), v = e(i), g = e(s), h = e(a), x = r(l, f), S = t.colorLink || t.colorInfo, b = e(S), p = new Le(g[1]).mix(new Le(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, x), {
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
    colorErrorBgFilledHover: p,
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
    colorBgMask: new Le("#000").setA(0.45).toRgbString(),
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
  const n = ax(t), e = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], l = r[2];
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
const ht = (t, n) => new Le(t).setA(n).toRgbString(), sr = (t, n) => new Le(t).darken(n).toHexString(), ux = (t) => {
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
    colorText: ht(r, 0.88),
    colorTextSecondary: ht(r, 0.65),
    colorTextTertiary: ht(r, 0.45),
    colorTextQuaternary: ht(r, 0.25),
    colorFill: ht(r, 0.15),
    colorFillSecondary: ht(r, 0.06),
    colorFillTertiary: ht(r, 0.04),
    colorFillQuaternary: ht(r, 0.02),
    colorBgSolid: ht(r, 1),
    colorBgSolidHover: ht(r, 0.75),
    colorBgSolidActive: ht(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: ht(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(e, 15),
    colorBorderSecondary: sr(e, 6)
  };
};
function dx(t) {
  Ci.pink = Ci.magenta, Ai.pink = Ai.magenta;
  const n = Object.keys(Iu).map((e) => {
    const r = t[e] === Ci[e] ? Ai[e] : yr(t[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), nx(t, {
    generateColorPalettes: ux,
    generateNeutralColorPalettes: fx
  })), cx(t.fontSize)), lx(t)), ix(t)), ox(t));
}
const Mu = Qi(dx), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Lu = /* @__PURE__ */ De.createContext(vs), ys = "ant", aa = "anticon", hx = (t, n) => n || (t ? `${ys}-${t}` : ys), en = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hx,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = en, xc = {};
function Du(t) {
  const n = _.useContext(en), {
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
    const c = new Le(s), l = yr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Le(n.primaryColor), a = yr(s.toRgbString());
    a.forEach((l, f) => {
      e[`primary-${f + 1}`] = l;
    }), e["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Le(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
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
  Wt() ? bn(e, `${px}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ _.createContext(!1), gx = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = _.useContext(bs);
  return /* @__PURE__ */ _.createElement(bs.Provider, {
    value: e ?? r
  }, n);
}, br = /* @__PURE__ */ _.createContext(void 0), vx = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = _.useContext(br);
  return /* @__PURE__ */ _.createElement(br.Provider, {
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
var Bu = /* @__PURE__ */ At(function t() {
  Ct(this, t);
}), Fu = "CALC_UNIT", bx = new RegExp(Fu, "g");
function Ti(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sx = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r, o) {
    var i;
    Ct(this, e), i = n.call(this), W(yn(i), "result", ""), W(yn(i), "unitlessCssVar", void 0), W(yn(i), "lowPriority", void 0);
    var s = Se(r);
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
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
        return i.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(bx, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wx = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return Ct(this, e), o = n.call(this), W(yn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
}(Bu), Ex = function(n, e) {
  var r = n === "css" ? Sx : wx;
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
  var o = H({}, n[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ce(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && tn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = H(H({}, e), o);
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
function _x() {
}
var Cx = function(n) {
  var e, r = n, o = _x;
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
      component: H(H({}, (c = vc[s]) === null || c === void 0 ? void 0 : c.component), a)
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
        return bo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return bo(i);
      }).join(","), ")");
    }
  };
}
var Tx = 1e3 * 60 * 10, Ox = /* @__PURE__ */ function() {
  function t() {
    Ct(this, t), W(this, "map", /* @__PURE__ */ new Map()), W(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), W(this, "nextID", 0), W(this, "lastAccessBeat", /* @__PURE__ */ new Map()), W(this, "accessBeat", 0);
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
  return De.useMemo(function() {
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
  function c(u, v, g, h) {
    var x = Array.isArray(u) ? u[0] : u;
    function S(I) {
      return "".concat(String(x)).concat(I.slice(0, 1).toUpperCase()).concat(I.slice(1));
    }
    var b = (h == null ? void 0 : h.unitless) || {}, p = typeof a == "function" ? a(u) : {}, C = H(H({}, p), {}, W({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(I) {
      C[S(I)] = b[I];
    });
    var y = H(H({}, h), {}, {
      unitless: C,
      prefixToken: S
    }), R = f(u, v, g, y), A = l(x, g, y);
    return function(I) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I, Y = R(I, B), re = ce(Y, 2), G = re[1], F = A(B), X = ce(F, 2), U = X[0], ee = X[1];
      return [U, G, ee];
    };
  }
  function l(u, v, g) {
    var h = g.unitless, x = g.injectStyle, S = x === void 0 ? !0 : x, b = g.prefixToken, p = g.ignore, C = function(A) {
      var I = A.rootCls, B = A.cssVar, Y = B === void 0 ? {} : B, re = r(), G = re.realToken;
      return Up({
        path: [u],
        prefix: Y.prefix,
        key: Y.key,
        unitless: h,
        ignore: p,
        token: G,
        scope: I
      }, function() {
        var F = yc(u, G, v), X = gc(u, G, F, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(F).forEach(function(U) {
          X[b(U)] = X[U], delete X[U];
        }), X;
      }), null;
    }, y = function(A) {
      var I = r(), B = I.cssVar;
      return [function(Y) {
        return S && B ? /* @__PURE__ */ De.createElement(De.Fragment, null, /* @__PURE__ */ De.createElement(C, {
          rootCls: A,
          cssVar: B,
          component: u
        }), Y) : Y;
      }, B == null ? void 0 : B.key];
    };
    return y;
  }
  function f(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(u) ? u : [u, u], S = ce(x, 1), b = S[0], p = x.join("-"), C = t.layer || {
      name: "antd"
    };
    return function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, A = r(), I = A.theme, B = A.realToken, Y = A.hashId, re = A.token, G = A.cssVar, F = o(), X = F.rootPrefixCls, U = F.iconPrefixCls, ee = e(), Z = G ? "css" : "js", J = Rx(function() {
        var he = /* @__PURE__ */ new Set();
        return G && Object.keys(h.unitless || {}).forEach(function(fe) {
          he.add(no(fe, G.prefix)), he.add(no(fe, mc(b, G.prefix)));
        }), Ex(Z, he);
      }, [Z, b, G == null ? void 0 : G.prefix]), Q = Ax(Z), se = Q.max, oe = Q.min, K = {
        theme: I,
        token: re,
        hashId: Y,
        nonce: function() {
          return ee.nonce;
        },
        clientOnly: h.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && os(H(H({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", X]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: X,
            iconPrefixCls: U
          },
          csp: ee
        });
      });
      var te = os(H(H({}, K), {}, {
        path: [p, y, U]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var he = Cx(re), fe = he.token, xe = he.flush, E = yc(b, B, g), M = ".".concat(y), k = gc(b, B, E, {
          deprecatedTokens: h.deprecatedTokens
        });
        G && E && Se(E) === "object" && Object.keys(E).forEach(function(z) {
          E[z] = "var(".concat(no(z, mc(b, G.prefix)), ")");
        });
        var N = ei(fe, {
          componentCls: M,
          prefixCls: y,
          iconCls: ".".concat(U),
          antCls: ".".concat(X),
          calc: J,
          // @ts-ignore
          max: se,
          // @ts-ignore
          min: oe
        }, G ? E : k), O = v(N, {
          hashId: Y,
          prefixCls: y,
          rootPrefixCls: X,
          iconPrefixCls: U
        });
        xe(b, k);
        var V = typeof s == "function" ? s(N, y, R, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : V, O];
      });
      return [te, Y];
    };
  }
  function d(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = f(u, v, g, H({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), S = function(p) {
      var C = p.prefixCls, y = p.rootCls, R = y === void 0 ? C : y;
      return x(C, R), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), S;
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
function zr(t, n) {
  const {
    r: e,
    g: r,
    b: o,
    a: i
  } = new Le(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: c
  } = new Le(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((e - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Oi(f) && Oi(d) && Oi(u))
      return new Le({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Le({
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
    colorSplit: zr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: zr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: zr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: zr(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Le("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Le("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Le("rgba(0, 0, 0, 0.09)").toRgbString()}
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
}, Mx = {
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
    token: t,
    hashed: n,
    theme: e,
    override: r,
    cssVar: o
  } = De.useContext(Lu), i = `${Ix}-${n || ""}`, s = e || Mu, [a, c, l] = pp(s, [vr, t], {
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
      preserve: Mx
    }
  });
  return [s, l, n ? c : "", a, o];
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
}, Lx = () => ({
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
  [`.${t}`]: Object.assign(Object.assign({}, Lx()), {
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
}, zx = Object.assign({}, _), {
  useId: wc
} = zx, Vx = () => "", Hx = typeof wc > "u" ? Vx : wc;
function Ux(t, n, e) {
  var r, o;
  const i = Gn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, vs), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = Hx();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yl(() => {
    var l, f;
    if (!t)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), t.components[g]);
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
var qx = ["children"], Xu = /* @__PURE__ */ _.createContext({});
function Wx(t) {
  var n = t.children, e = mr(t, qx);
  return /* @__PURE__ */ _.createElement(Xu.Provider, {
    value: e
  }, n);
}
var Xx = /* @__PURE__ */ function(t) {
  Er(e, t);
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
function Yx(t) {
  var n = _.useReducer(function(a) {
    return a + 1;
  }, 0), e = ce(n, 2), r = e[1], o = _.useRef(t), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Gt = "none", Vr = "appear", Hr = "enter", Ur = "leave", Ec = "none", yt = "prepare", Rn = "start", kn = "active", ua = "end", Yu = "prepared";
function _c(t, n) {
  var e = {};
  return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
}
function $x(t, n) {
  var e = {
    animationend: _c("Animation", "AnimationEnd"),
    transitionend: _c("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
}
var Gx = $x(Wt(), typeof window < "u" ? window : {}), $u = {};
if (Wt()) {
  var Kx = document.createElement("div");
  $u = Kx.style;
}
var qr = {};
function Gu(t) {
  if (qr[t])
    return qr[t];
  var n = Gx[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in $u)
        return qr[t] = n[i], qr[t];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), Cc = Ku || "animationend", Ac = Zu || "transitionend";
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
  var n = Ue();
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
var Qu = Wt() ? r0 : rt;
const Jx = function() {
  var t = _.useRef(null);
  function n() {
    yo.cancel(t.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = yo(function() {
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
var Qx = [yt, Rn, kn, ua], e1 = [yt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === kn || t === ua;
}
const n1 = function(t, n, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jx(), c = ce(a, 2), l = c[0], f = c[1];
  function d() {
    s(yt, !0);
  }
  var u = n ? e1 : Qx;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = u.indexOf(i), g = u[v + 1], h = e(i);
      h === ef ? s(g, !0) : g && l(function(x) {
        function S() {
          x.isCanceled() || s(g, !0);
        }
        h === !0 ? S() : Promise.resolve(h).then(S);
      });
    }
  }, [t, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, p = r.onEnterActive, C = r.onLeaveActive, y = r.onAppearEnd, R = r.onEnterEnd, A = r.onLeaveEnd, I = r.onVisibleChanged, B = ws(), Y = ce(B, 2), re = Y[0], G = Y[1], F = Yx(Gt), X = ce(F, 2), U = X[0], ee = X[1], Z = ws(null), J = ce(Z, 2), Q = J[0], se = J[1], oe = U(), K = Ue(!1), te = Ue(null);
  function he() {
    return e();
  }
  var fe = Ue(!1);
  function xe() {
    ee(Gt), se(null, !0);
  }
  var E = Ss(function(Ne) {
    var _e = U();
    if (_e !== Gt) {
      var Ye = he();
      if (!(Ne && !Ne.deadline && Ne.target !== Ye)) {
        var gt = fe.current, ft;
        _e === Vr && gt ? ft = y == null ? void 0 : y(Ye, Ne) : _e === Hr && gt ? ft = R == null ? void 0 : R(Ye, Ne) : _e === Ur && gt && (ft = A == null ? void 0 : A(Ye, Ne)), gt && ft !== !1 && xe();
      }
    }
  }), M = Zx(E), k = ce(M, 1), N = k[0], O = function(_e) {
    switch (_e) {
      case Vr:
        return W(W(W({}, yt, u), Rn, h), kn, b);
      case Hr:
        return W(W(W({}, yt, v), Rn, x), kn, p);
      case Ur:
        return W(W(W({}, yt, g), Rn, S), kn, C);
      default:
        return {};
    }
  }, V = _.useMemo(function() {
    return O(oe);
  }, [oe]), z = n1(oe, !t, function(Ne) {
    if (Ne === yt) {
      var _e = V[yt];
      return _e ? _e(he()) : ef;
    }
    if (Ae in V) {
      var Ye;
      se(((Ye = V[Ae]) === null || Ye === void 0 ? void 0 : Ye.call(V, he(), null)) || null);
    }
    return Ae === kn && oe !== Gt && (N(he()), f > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      E({
        deadline: !0
      });
    }, f))), Ae === Yu && xe(), t1;
  }), L = ce(z, 2), Je = L[0], Ae = L[1], ut = tf(Ae);
  fe.current = ut;
  var Ot = Ue(null);
  Qu(function() {
    if (!(K.current && Ot.current === n)) {
      G(n);
      var Ne = K.current;
      K.current = !0;
      var _e;
      !Ne && n && a && (_e = Vr), Ne && n && i && (_e = Hr), (Ne && !n && l || !Ne && d && !n && l) && (_e = Ur);
      var Ye = O(_e);
      _e && (t || Ye[yt]) ? (ee(_e), Je()) : ee(Gt), Ot.current = n;
    }
  }, [n]), rt(function() {
    // Cancel appear
    (oe === Vr && !a || // Cancel enter
    oe === Hr && !i || // Cancel leave
    oe === Ur && !l) && ee(Gt);
  }, [a, i, l]), rt(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var at = _.useRef(!1);
  rt(function() {
    re && (at.current = !0), re !== void 0 && oe === Gt && ((at.current || re) && (I == null || I(re)), at.current = !0);
  }, [re, oe]);
  var Rt = Q;
  return V[yt] && Ae === Rn && (Rt = H({
    transition: "none"
  }, Rt)), [oe, Ae, Rt, re ?? n];
}
function o1(t) {
  var n = t;
  Se(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = _.useContext(Xu), x = h.motion, S = e(o, x), b = Ue(), p = Ue();
    function C() {
      try {
        return b.current instanceof HTMLElement ? b.current : _h(p.current);
      } catch {
        return null;
      }
    }
    var y = r1(S, a, C, o), R = ce(y, 4), A = R[0], I = R[1], B = R[2], Y = R[3], re = _.useRef(Y);
    Y && (re.current = !0);
    var G = _.useCallback(function(J) {
      b.current = J, $l(i, J);
    }, [i]), F, X = H(H({}, g), {}, {
      visible: a
    });
    if (!d)
      F = null;
    else if (A === Gt)
      Y ? F = d(H({}, X), G) : !l && re.current && v ? F = d(H(H({}, X), {}, {
        className: v
      }), G) : f || !l && !v ? F = d(H(H({}, X), {}, {
        style: {
          display: "none"
        }
      }), G) : F = null;
    else {
      var U;
      I === yt ? U = "prepare" : tf(I) ? U = "active" : I === Rn && (U = "start");
      var ee = Tc(u, "".concat(A, "-").concat(U));
      F = d(H(H({}, X), {}, {
        className: Ze(Tc(u, A), W(W({}, ee, ee && U), u, typeof u == "string")),
        style: B
      }), G);
    }
    if (/* @__PURE__ */ _.isValidElement(F) && kh(F)) {
      var Z = Ph(F);
      Z || (F = /* @__PURE__ */ _.cloneElement(F, {
        ref: G
      }));
    }
    return /* @__PURE__ */ _.createElement(Xx, {
      ref: p
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _s = "add", Cs = "keep", As = "remove", Ri = "removed";
function i1(t) {
  var n;
  return t && Se(t) === "object" && "key" in t ? n = t : n = {
    key: t
  }, H(H({}, n), {}, {
    key: String(n.key)
  });
}
function Ts() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(i1);
}
function s1() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = n.length, i = Ts(t), s = Ts(n);
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
function u1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    Er(i, r);
    var o = Yo(i);
    function i() {
      var s;
      Ct(this, i);
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
    return At(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = mr(l, a1), g = f || _.Fragment, h = {};
        return l1.forEach(function(x) {
          h[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(x, S) {
          var b = x.status, p = mr(x, c1), C = b === _s || b === Cs;
          return /* @__PURE__ */ _.createElement(n, Dt({}, h, {
            key: p.key,
            visible: C,
            eventProps: p,
            onVisibleChanged: function(R) {
              u == null || u(R, {
                key: p.key
              }), R || a.removeKey(p.key);
            }
          }), function(y, R) {
            return d(H(H({}, y), {}, {
              index: S
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
            var g = f.find(function(h) {
              var x = h.key;
              return v.key === x;
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
function f1(t) {
  const {
    children: n
  } = t, [, e] = ca(), {
    motion: r
  } = e, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(Wx, {
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
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: h,
    legacyLocale: x,
    parentContext: S,
    iconPrefixCls: b,
    theme: p,
    componentDisabled: C,
    segmented: y,
    statistic: R,
    spin: A,
    calendar: I,
    carousel: B,
    cascader: Y,
    collapse: re,
    typography: G,
    checkbox: F,
    descriptions: X,
    divider: U,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: he,
    result: fe,
    slider: xe,
    breadcrumb: E,
    menu: M,
    pagination: k,
    input: N,
    textArea: O,
    empty: V,
    badge: z,
    radio: L,
    rate: Je,
    switch: Ae,
    transfer: ut,
    avatar: Ot,
    message: at,
    tag: Rt,
    table: Ne,
    card: _e,
    tabs: Ye,
    timeline: gt,
    timePicker: ft,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: an,
    rangePicker: j,
    flex: w,
    wave: we,
    dropdown: be,
    warning: je,
    tour: le,
    tooltip: Qe,
    popover: Oe,
    popconfirm: Bt,
    floatButtonGroup: ct,
    variant: Ft,
    inputNumber: cn,
    treeSelect: Ve
  } = t, qe = _.useCallback((Re, m) => {
    const {
      prefixCls: P
    } = t;
    if (m)
      return m;
    const D = P || S.getPrefixCls("");
    return Re ? `${D}-${Re}` : D;
  }, [S.getPrefixCls, t.prefixCls]), $e = b || S.iconPrefixCls || aa, kt = e || S.csp;
  Fx($e, kt);
  const et = Ux(p, S.theme, {
    prefixCls: qe("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!et);
  const Xt = {
    csp: kt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || x,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: qe,
    iconPrefixCls: $e,
    theme: et,
    segmented: y,
    statistic: R,
    spin: A,
    calendar: I,
    carousel: B,
    cascader: Y,
    collapse: re,
    typography: G,
    checkbox: F,
    descriptions: X,
    divider: U,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    input: N,
    textArea: O,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: he,
    result: fe,
    slider: xe,
    breadcrumb: E,
    menu: M,
    pagination: k,
    empty: V,
    badge: z,
    radio: L,
    rate: Je,
    switch: Ae,
    transfer: ut,
    avatar: Ot,
    message: at,
    tag: Rt,
    table: Ne,
    card: _e,
    tabs: Ye,
    timeline: gt,
    timePicker: ft,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: an,
    rangePicker: j,
    flex: w,
    wave: we,
    dropdown: be,
    warning: je,
    tour: le,
    tooltip: Qe,
    popover: Oe,
    popconfirm: Bt,
    floatButtonGroup: ct,
    variant: Ft,
    inputNumber: cn,
    treeSelect: Ve
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const dt = Object.assign({}, S);
  Object.keys(Xt).forEach((Re) => {
    Xt[Re] !== void 0 && (dt[Re] = Xt[Re]);
  }), p1.forEach((Re) => {
    const m = t[Re];
    m && (dt[Re] = m);
  }), typeof r < "u" && (dt.button = Object.assign({
    autoInsertSpace: r
  }, dt.button));
  const Yt = Yl(() => dt, dt, (Re, m) => {
    const P = Object.keys(Re), D = Object.keys(m);
    return P.length !== D.length || P.some(($) => Re[$] !== m[$]);
  }), {
    layer: er
  } = _.useContext(_r), Tr = _.useMemo(() => ({
    prefixCls: $e,
    csp: kt,
    layer: er ? "antd" : void 0
  }), [$e, kt, er]);
  let He = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Or = _.useMemo(() => {
    var Re, m, P, D;
    return $p(((Re = Qo.Form) === null || Re === void 0 ? void 0 : Re.defaultValidateMessages) || {}, ((P = (m = Yt.locale) === null || m === void 0 ? void 0 : m.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || {}, ((D = Yt.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Yt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Or).length > 0 && (He = /* @__PURE__ */ _.createElement(Kp.Provider, {
    value: Or
  }, He)), a && (He = /* @__PURE__ */ _.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, He)), He = /* @__PURE__ */ _.createElement(ia.Provider, {
    value: Tr
  }, He), c && (He = /* @__PURE__ */ _.createElement(vx, {
    size: c
  }, He)), He = /* @__PURE__ */ _.createElement(f1, null, He);
  const li = _.useMemo(() => {
    const Re = et || {}, {
      algorithm: m,
      token: P,
      components: D,
      cssVar: $
    } = Re, pe = h1(Re, ["algorithm", "token", "components", "cssVar"]), me = m && (!Array.isArray(m) || m.length > 0) ? Qi(m) : Mu, ue = {};
    Object.entries(D || {}).forEach((Ge) => {
      let [Te, ke] = Ge;
      const Pe = Object.assign({}, ke);
      "algorithm" in Pe && (Pe.algorithm === !0 ? Pe.theme = me : (Array.isArray(Pe.algorithm) || typeof Pe.algorithm == "function") && (Pe.theme = Qi(Pe.algorithm)), delete Pe.algorithm), ue[Te] = Pe;
    });
    const ae = Object.assign(Object.assign({}, vr), P);
    return Object.assign(Object.assign({}, pe), {
      theme: me,
      token: ae,
      components: ue,
      override: Object.assign({
        override: ae
      }, ue),
      cssVar: $
    });
  }, [et]);
  return p && (He = /* @__PURE__ */ _.createElement(Lu.Provider, {
    value: li
  }, He)), Yt.warning && (He = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: Yt.warning
  }, He)), C !== void 0 && (He = /* @__PURE__ */ _.createElement(gx, {
    disabled: C
  }, He)), /* @__PURE__ */ _.createElement(en.Provider, {
    value: Yt
  }, He);
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
  return e ? /* @__PURE__ */ De.createElement(t.tag, H(H({
    key: n
  }, Rc(t.attrs)), e), (t.children || []).map(function(r, o) {
    return Rs(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ De.createElement(t.tag, H({
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
}`)), rt(function() {
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
  return H({}, hr);
}
var Zn = function(n) {
  var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = mr(n, A1), l = _.useRef(), f = hr;
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
lf(wo.primary);
var nn = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, l = mr(t, k1), f = _.useContext(ia), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = Ze(v, u, W(W({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), e), h = s;
  h === void 0 && a && (h = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = cf(c), b = ce(S, 2), p = b[0], C = b[1];
  return /* @__PURE__ */ _.createElement("span", Dt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(Zn, {
    icon: r,
    primaryColor: p,
    secondaryColor: C,
    style: x
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
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, M1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(M1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var L1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: L1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: B1
  }));
}, pf = /* @__PURE__ */ _.forwardRef(F1);
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
  } : e = H({}, n);
  var r = {};
  return Object.keys(t).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || kc(o, U1)) || // Data
    e.data && kc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = t[o]);
  }), r;
}
const xf = (t, n, e) => /* @__PURE__ */ De.isValidElement(t) ? /* @__PURE__ */ De.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function X1(t, n) {
  return xf(t, t, n);
}
const Wr = (t, n, e, r, o) => ({
  background: t,
  border: `${bo(r.lineWidth)} ${r.lineType} ${n}`,
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
    motionEaseInOutCirc: l,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: u,
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
        fontSize: f,
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
    colorErrorBorder: l,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: u,
    colorInfoBg: v
  } = t;
  return {
    [n]: {
      "&-success": Wr(o, r, e, t, n),
      "&-info": Wr(v, u, d, t, n),
      "&-warning": Wr(a, s, i, t, n),
      "&-error": Object.assign(Object.assign({}, Wr(f, l, c, t, n)), {
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
        lineHeight: bo(i),
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
  return n ? xf(n, /* @__PURE__ */ _.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: Ze(`${e}-icon`, n.props.className)
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
    onMouseEnter: l,
    onMouseLeave: f,
    onClick: d,
    afterClose: u,
    showIcon: v,
    closable: g,
    closeText: h,
    closeIcon: x,
    action: S,
    id: b
  } = t, p = Pc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const R = _.useRef(null);
  _.useImperativeHandle(n, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: A,
    direction: I,
    closable: B,
    closeIcon: Y,
    className: re,
    style: G
  } = Du("alert"), F = A("alert", r), [X, U, ee] = Z1(F), Z = (fe) => {
    var xe;
    y(!0), (xe = t.onClose) === null || xe === void 0 || xe.call(t, fe);
  }, J = _.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!B, [h, x, g, B]), se = i && v === void 0 ? !0 : v, oe = Ze(F, `${F}-${J}`, {
    [`${F}-with-description`]: !!e,
    [`${F}-no-icon`]: !se,
    [`${F}-banner`]: !!i,
    [`${F}-rtl`]: I === "rtl"
  }, re, s, a, ee, U), K = W1(p, {
    aria: !0,
    data: !0
  }), te = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof B == "object" && B.closeIcon ? B.closeIcon : Y), [x, g, h, Y]), he = _.useMemo(() => {
    const fe = g ?? B;
    if (typeof fe == "object") {
      const {
        closeIcon: xe
      } = fe;
      return Pc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, B]);
  return X(/* @__PURE__ */ _.createElement(nf, {
    visible: !C,
    motionName: `${F}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: u
  }, (fe, xe) => {
    let {
      className: E,
      style: M
    } = fe;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: b,
      ref: Rh(R, xe),
      "data-show": !C,
      className: Ze(oe, E),
      style: Object.assign(Object.assign(Object.assign({}, G), c), M),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, K), se ? /* @__PURE__ */ _.createElement(Q1, {
      description: e,
      icon: t.icon,
      prefixCls: F,
      type: J
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${F}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-message`
    }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-description`
    }, e) : null), S ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-action`
    }, S) : null, /* @__PURE__ */ _.createElement(em, {
      isClosable: Q,
      prefixCls: F,
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
  return Er(n, t), At(n, [{
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
function rm(t, n) {
  var e = Object.assign({}, t);
  return Array.isArray(n) && n.forEach(function(r) {
    delete e[r];
  }), e;
}
function om(t, n, e) {
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(x) {
    var S = x || {}, b = S.upcomingOnly, p = b === void 0 ? !1 : b;
    v(), d = !p;
  }
  function h() {
    for (var x = arguments.length, S = new Array(x), b = 0; b < x; b++)
      S[b] = arguments[b];
    var p = this, C = Date.now() - u;
    if (d)
      return;
    function y() {
      u = Date.now(), n.apply(p, S);
    }
    function R() {
      f = void 0;
    }
    !a && l && !f && y(), v(), l === void 0 && C > t ? a ? (u = Date.now(), i || (f = setTimeout(l ? R : y, t))) : y() : i !== !0 && (f = setTimeout(l ? R : y, l === void 0 ? t - C : t));
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
const bf = /* @__PURE__ */ De.forwardRef((t, n) => {
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
  } = t, d = gm(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = De.useContext(en), h = g("flex", e), [x, S, b] = mm(h), p = l ?? (u == null ? void 0 : u.vertical), C = Ze(o, r, u == null ? void 0 : u.className, h, S, b, lm(h, t), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: Ic(a),
    [`${h}-vertical`]: p
  }), y = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), x(/* @__PURE__ */ De.createElement(f, Object.assign({
    ref: n,
    className: C,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const Eo = 100, Sf = Eo / 5, wf = Eo / 2 - Sf / 2, ki = wf * 2 * Math.PI, Nc = 50, jc = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ _.createElement("circle", {
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
  const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
  lu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: Ze(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ _.createElement("svg", {
    viewBox: `0 0 ${Eo} ${Eo}`,
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
function ym(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: Ze(o, e > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: Ze(r, `${n}-dot-spin`)
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
    className: Ze(e.props.className, o),
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
        const [l, f] = Mc[c];
        if (s <= l)
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
    wrapperClassName: l,
    style: f,
    children: d,
    fullscreen: u = !1,
    indicator: v,
    percent: g
  } = t, h = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: S,
    className: b,
    style: p,
    indicator: C
  } = Du("spin"), y = x("spin", e), [R, A, I] = Cm(y), [B, Y] = _.useState(() => r && !Rm(r, o)), re = Tm(B, g);
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
  const G = _.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const J = Gn("Spin");
    process.env.NODE_ENV !== "production" && J(!c || G || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const F = Ze(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: B,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !u && s, A, I), X = Ze(`${y}-container`, {
    [`${y}-blur`]: B
  }), U = (n = v ?? C) !== null && n !== void 0 ? n : Ef, ee = Object.assign(Object.assign({}, p), f), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    style: ee,
    className: F,
    "aria-live": "polite",
    "aria-busy": B
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: y,
    indicator: U,
    percent: re
  }), c && (G || u) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return R(G ? /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    className: Ze(`${y}-nested-loading`, l, A, I)
  }), B && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ _.createElement("div", {
    className: X,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ _.createElement("div", {
    className: Ze(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: B
    }, s, A, I)
  }, Z) : Z);
};
pr.setDefaultIndicator = (t) => {
  Ef = t;
};
process.env.NODE_ENV !== "production" && (pr.displayName = "Spin");
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
  return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && it(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = Tt("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = ri("string"), it = ri("function"), Tf = ri("number"), oi = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, co = (t) => {
  if (ni(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Cf in t) && !(ti in t);
}, Mm = Tt("Date"), Lm = Tt("File"), Dm = Tt("Blob"), Bm = Tt("FileList"), Fm = (t) => oi(t) && it(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || it(t.append) && ((n = ni(t)) === "formdata" || // detect form-data instance
  n === "object" && it(t.toString) && t.toString() === "[object FormData]"));
}, Vm = Tt("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cr(t, n, { allOwnKeys: e = !1 } = {}) {
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
    co(n[i]) && co(r) ? n[i] = ks(n[i], r) : co(r) ? n[i] = ks({}, r) : Jn(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cr(arguments[r], e);
  return n;
}
const Ym = (t, n, e, { allOwnKeys: r } = {}) => (Cr(n, (o, i) => {
  e && it(o) ? t[i] = _f(o, e) : t[i] = o;
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
), Lc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = Tt("RegExp"), kf = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  Cr(e, (o, i) => {
    let s;
    (s = n(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, ig = (t) => {
  kf(t, (n, e) => {
    if (it(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (it(r)) {
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
  return !!(t && it(t.append) && t[Cf] === "FormData" && t[ti]);
}
const ug = (t) => {
  const n = new Array(10), e = (r, o) => {
    if (oi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = Jn(r) ? [] : {};
        return Cr(r, (s, a) => {
          const c = e(s, o + 1);
          !Sr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return e(t, 0);
}, fg = Tt("AsyncFunction"), dg = (t) => t && (oi(t) || it(t)) && it(t.then) && it(t.catch), Pf = ((t, n) => t ? setImmediate : n ? ((e, r) => (pn.addEventListener("message", ({ source: o, data: i }) => {
  o === pn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), pn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  it(pn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(pn) : typeof process < "u" && process.nextTick || Pf, pg = (t) => t != null && it(t[ti]), T = {
  isArray: Jn,
  isArrayBuffer: Af,
  isBuffer: Pm,
  isFormData: zm,
  isArrayBufferView: Im,
  isString: Nm,
  isNumber: Tf,
  isBoolean: jm,
  isObject: oi,
  isPlainObject: co,
  isReadableStream: Hm,
  isRequest: Um,
  isResponse: qm,
  isHeaders: Wm,
  isUndefined: Sr,
  isDate: Mm,
  isFile: Lm,
  isBlob: Dm,
  isRegExp: og,
  isFunction: it,
  isStream: Fm,
  isURLSearchParams: Vm,
  isTypedArray: Qm,
  isFileList: Bm,
  forEach: Cr,
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
  }, !1, function(h, x) {
    return !T.isUndefined(x[h]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!c && T.isBlob(g))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, x) {
    let S = g;
    if (g && !x && typeof g == "object") {
      if (T.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && mg(g) || (T.isFileList(g) || T.endsWith(h, "[]")) && (S = T.toArray(g)))
        return h = jf(h), S.forEach(function(p, C) {
          !(T.isUndefined(p) || p === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([h], C, i) : s === null ? h : h + "[]",
            l(p)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (n.append(Dc(x, h, i), l(g)), !1);
  }
  const d = [], u = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: l,
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
          u
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
}, pa = typeof window < "u" && typeof document < "u", Is = typeof navigator == "object" && navigator || void 0, Eg = pa && (!Is || ["ReactNative", "NativeScript", "NS"].indexOf(Is.product) < 0), _g = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cg = pa && window.location.href || "http://localhost", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pa,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: _g,
  navigator: Is,
  origin: Cg
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
const Ar = {
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
    const e = this.transitional || Ar.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
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
  Ar.headers[t] = {};
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
function lo(t) {
  return t === !1 || t == null ? t : T.isArray(t) ? t.map(lo) : String(t);
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
function Mg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function Lg(t, n) {
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
let st = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, e, r) {
    const o = this;
    function i(a, c, l) {
      const f = ar(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = lo(a));
    }
    const s = (a, c) => T.forEach(a, (l, f) => i(l, f, c));
    if (T.isPlainObject(n) || n instanceof this.constructor)
      s(n, e);
    else if (T.isString(n) && (n = n.trim()) && !jg(n))
      s(Ig(n), e);
    else if (T.isObject(n) && T.isIterable(n)) {
      let a = {}, c, l;
      for (const f of n) {
        if (!T.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? T.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
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
        e[s] = lo(o), delete e[i];
        return;
      }
      const a = n ? Mg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = lo(o), r[a] = !0;
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
      r[a] || (Lg(o, s), r[a] = !0);
    }
    return T.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
st.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(st.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
T.freezeMethods(st);
function Ii(t, n) {
  const e = this || Ar, r = n || e, o = st.from(r.headers);
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
    const l = Date.now(), f = r[i];
    s || (s = l), e[o] = c, r[o] = l;
    let d = i, u = 0;
    for (; d !== o; )
      u += e[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < n)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function Fg(t, n) {
  let e = 0, r = 1e3 / n, o, i;
  const s = (l, f = Date.now()) => {
    e = f, o = null, i && (clearTimeout(i), i = null), t.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - e;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const _o = (t, n, e = 3) => {
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
const Uc = (t) => t instanceof st ? { ...t } : t;
function _n(t, n) {
  n = n || {};
  const e = {};
  function r(l, f, d, u) {
    return T.isPlainObject(l) && T.isPlainObject(f) ? T.merge.call({ caseless: u }, l, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d, u) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(l))
        return r(void 0, l, d, u);
    } else return r(l, f, d, u);
  }
  function i(l, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function s(l, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in n)
      return r(l, f);
    if (d in t)
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
  return T.forEach(Object.keys(Object.assign({}, t, n)), function(f) {
    const d = c[f] || o, u = d(t[f], n[f], f);
    T.isUndefined(u) && d !== a || (e[f] = u);
  }), e;
}
const Hf = (t) => {
  const n = _n({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = st.from(s), n.url = Lf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (T.isFormData(e)) {
    if (Ke.hasStandardBrowserEnv || Ke.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Ke.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const l = o && i && Vg.read(i);
    l && s.set(o, l);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let i = o.data;
    const s = st.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function S() {
      if (!x)
        return;
      const p = st.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: p,
        config: t,
        request: x
      };
      zf(function(A) {
        e(A), h();
      }, function(A) {
        r(A), h();
      }, y), x = null;
    }
    "onloadend" in x ? x.onloadend = S : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, x.onabort = function() {
      x && (r(new ne("Request aborted", ne.ECONNABORTED, t, x)), x = null);
    }, x.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, t, x)), x = null;
    }, x.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new ne(
        C,
        y.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        t,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && T.forEach(s.toJSON(), function(C, y) {
      x.setRequestHeader(y, C);
    }), T.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([u, g] = _o(l, !0), x.addEventListener("progress", u)), c && x.upload && ([d, v] = _o(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (p) => {
      x && (r(!p || p.type ? new Qn(null, t, x) : p), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Dg(o.url);
    if (b && Ke.protocols.indexOf(b) === -1) {
      r(new ne("Unsupported protocol " + b + ":", ne.ERR_BAD_REQUEST, t));
      return;
    }
    x.send(i || null);
  });
}, Xg = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof ne ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new ne(`timeout ${n} of ms exceeded`, ne.ETIMEDOUT));
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
}), Wc = 64 * 1024, Ns = Uf && qf(() => T.isReadableStream(new Response("").body)), Co = {
  stream: Ns && ((t) => t.body)
};
si && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Co[n] && (Co[n] = T.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
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
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: u
  } = Hf(t);
  l = l ? (l + "").toLowerCase() : "text";
  let v = Xg([o, i && i.toAbortSignal()], s), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (x = await Qg(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (T.isFormData(r) && (R = y.headers.get("content-type")) && f.setContentType(R), y.body) {
        const [A, I] = Vc(
          x,
          _o(Hc(c))
        );
        r = qc(y.body, Wc, A, I);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    g = new Request(n, {
      ...u,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(g);
    const p = Ns && (l === "stream" || l === "response");
    if (Ns && (a || p && h)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((B) => {
        y[B] = b[B];
      });
      const R = T.toFiniteNumber(b.headers.get("content-length")), [A, I] = a && Vc(
        R,
        _o(Hc(a), !0)
      ) || [];
      b = new Response(
        qc(b.body, Wc, A, () => {
          I && I(), h && h();
        }),
        y
      );
    }
    l = l || "text";
    let C = await Co[T.findKey(Co, l) || "text"](b, t);
    return !p && h && h(), await new Promise((y, R) => {
      zf(y, R, {
        data: C,
        headers: st.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: g
      });
    });
  } catch (S) {
    throw h && h(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, t, g),
      {
        cause: S.cause || S
      }
    ) : ne.from(S, S && S.code, t, g);
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
  return Ni(t), t.headers = st.from(t.headers), t.data = Ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Ar.adapter)(t).then(function(r) {
    return Ni(t), r.data = Ii.call(
      t,
      t.transformResponse,
      r
    ), r.headers = st.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(t), r && r.response && (r.response.data = Ii.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = st.from(r.response.headers))), Promise.reject(r);
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
const uo = {
  assertOptions: nv,
  validators: ai
}, It = uo.validators;
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
    r !== void 0 && uo.assertOptions(r, {
      silentJSONParsing: It.transitional(It.boolean),
      forcedJSONParsing: It.transitional(It.boolean),
      clarifyTimeoutError: It.transitional(It.boolean)
    }, !1), o != null && (T.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : uo.assertOptions(o, {
      encode: It.function,
      serialize: It.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), uo.assertOptions(e, {
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
    ), e.headers = st.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(e) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let f, d = 0, u;
    if (!c) {
      const g = [Yc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(e); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let v = e;
    for (d = 0; d < u; ) {
      const g = a[d++], h = a[d++];
      try {
        v = g(v);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      f = Yc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(n) {
    n = _n(this.defaults, n);
    const e = Vf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Lf(e, n.params, n.paramsSerializer);
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
  const n = new wn(t), e = _f(wn.prototype.request, n);
  return T.extend(e, wn.prototype, n, { allOwnKeys: !0 }), T.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(_n(t, o));
  }, e;
}
const Ie = $f(Ar);
Ie.Axios = wn;
Ie.CanceledError = Qn;
Ie.CancelToken = rv;
Ie.isCancel = Ff;
Ie.VERSION = Xf;
Ie.toFormData = ii;
Ie.AxiosError = ne;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(n) {
  return Promise.all(n);
};
Ie.spread = ov;
Ie.isAxiosError = iv;
Ie.mergeConfig = _n;
Ie.AxiosHeaders = st;
Ie.formToJSON = (t) => Bf(T.isHTMLForm(t) ? new FormData(t) : t);
Ie.getAdapter = Wf.getAdapter;
Ie.HttpStatusCode = Ms;
Ie.default = Ie;
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
} = Ie, bt = To;
(function(t, n) {
  const e = To, r = t();
  for (; ; )
    try {
      if (parseInt(e(397)) / 1 * (-parseInt(e(404)) / 2) + -parseInt(e(383)) / 3 + parseInt(e(409)) / 4 * (-parseInt(e(389)) / 5) + parseInt(e(391)) / 6 * (parseInt(e(407)) / 7) + parseInt(e(381)) / 8 * (parseInt(e(408)) / 9) + -parseInt(e(387)) / 10 + -parseInt(e(403)) / 11 * (-parseInt(e(398)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ao, 792204);
bt(399) + bt(380) + bt(394) + bt(392);
Ie[bt(406)][bt(393) + bt(395)] = !0;
const sv = async (t) => {
  var e, r, o, i;
  const n = bt;
  try {
    return (await Ie(t))[n(386)];
  } catch (s) {
    throw ((r = (e = s[n(388)]) == null ? void 0 : e[n(386)]) == null ? void 0 : r[n(402)]) || ((i = (o = s[n(388)]) == null ? void 0 : o[n(386)]) == null ? void 0 : i[n(400)]) || s[n(402)];
  }
}, av = {};
av[bt(396) + "pe"] = bt(390) + bt(405);
function Ao() {
  const t = ["1657716CtIzFr", "http://192", "error", "DELETE", "message", "143BcnhHm", "67476dfEDnC", "n/json", "defaults", "553ppCSqq", "90gnILaO", "238476wvvCbL", "PATCH", "PUT", ".168.11.76", "1180520czuiMB", "params", "1323747btVPfD", "POST", "GET", "data", "4046340buvPzt", "response", "125sOnvCW", "applicatio", "48078WcxdQj", "v1/client", "withCreden", ":3000/api/", "tials", "Content-Ty", "23rPIKIW"];
  return Ao = function() {
    return t;
  }, Ao();
}
function To(t, n) {
  const e = Ao();
  return To = function(r, o) {
    return r = r - 379, e[r];
  }, To(t, n);
}
const Ee = Ro;
(function(t, n) {
  const e = Ro, r = t();
  for (; ; )
    try {
      if (parseInt(e(140)) / 1 * (parseInt(e(150)) / 2) + parseInt(e(136)) / 3 * (parseInt(e(157)) / 4) + parseInt(e(158)) / 5 * (parseInt(e(159)) / 6) + parseInt(e(156)) / 7 * (parseInt(e(135)) / 8) + parseInt(e(165)) / 9 + parseInt(e(163)) / 10 * (parseInt(e(145)) / 11) + -parseInt(e(137)) / 12 * (parseInt(e(143)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 303572);
function Oo() {
  const t = ["keydown", "200WDShKJ", "1818174BlFSdS", "8400240MfKVih", "ACTION_UP", "touchstart", "1567usjpoh", "ent", "Event", "39DPfbjf", "wheelEvent", "88vhrDru", "keyup", "fullscreen", "ACTION_DOW", "keyBoardEv", "372hdZUVg", "assistiveM", "enuHide", "mousemove", "ACTION_MOV", "mousedown", "83867pKlDTK", "4grpDfr", "14255DYypmY", "1242KkIciy", "moveEvent", "mouseup", "touchend", "338690VvyxpN", "touchmove", "3109302oHFSsk", "shortcutEv"];
  return Oo = function() {
    return t;
  }, Oo();
}
const un = {};
un[Ee(153)] = Ee(154) + "E", un[Ee(161)] = Ee(138), un[Ee(155)] = Ee(148) + "N", un[Ee(164)] = Ee(154) + "E", un[Ee(162)] = Ee(138), un[Ee(139)] = Ee(148) + "N";
const Mt = un, Ls = {};
Ls[Ee(146)] = Ee(138), Ls[Ee(134)] = Ee(148) + "N";
function Ro(t, n) {
  const e = Oo();
  return Ro = function(r, o) {
    return r = r - 134, e[r];
  }, Ro(t, n);
}
const cv = Ls, lv = Ee(160), uv = Ee(144), fv = Ee(149) + Ee(141), Gf = Ee(151) + Ee(152), Ds = Ee(166) + Ee(141), dv = Ee(147) + Ee(142);
function xn(t, n) {
  const e = ko();
  return xn = function(r, o) {
    return r = r - 416, e[r];
  }, xn(t, n);
}
function ko() {
  const t = ["mouse", "toLowerCas", "SICuO", "type", "repeat", "isDown", "SzrVj", "touch", "toUpperCas", "20mqvUUd", "readText", "VdKEO", "2168uSJpNj", "tListener", "meta_state", "enter", "2970oSqKJT", "keyEvent", "offsetWidt", "pageX", "addEventLi", "Wbfoc", "8795367VLpjIm", "1528916KmicsC", "backspace", "stener", "typeKey", "height", "wheel", "FetPu", "passive", "width", "btKYg", "getBoundin", "PASTE_TEXT", "arrowleft", "mouseup", "ault", "ASYtm", "tab", "clientX", "wheelEvent", "showMenu", "5866rnUqWT", "hbsak", "gClientRec", "arrowdown", "hTcfO", "clientY", "xtlGn", "JmhLW", "pageY", "13060280LFRDEI", "touchstart", "keyAction", "touchmove", "Pfmhz", "COPY_TEXT", "HUUyL", "CXbuv", "shift", "fHIws", "touchEvent", "mousemove", "includes", "yQZXa", "2320626KTWSRd", "ZokUj", "KEYBOARD_C", "tHVWI", "arrowright", "WxqcA", "ODE", "VHioM", "keydown", "pOvOU", "arrowup", "cTMll", "KEYBOARD_T", "left", "delta", "JjszV", "deltaY", "EIUyH", "removeEven", "preventDef", "current", "4101450fWFuOn", "269VXROCz", "EXT", "ctrlKey", "WNJnz", "mousedown", "offsetHeig", "capslock", "QpptD", "forEach", "key", "UMFfn", "xIwla", "action", "control", "shiftKey", "33EYwvWj", "clipboard", "focus", "top", "kuPVX", "touchend"];
  return ko = function() {
    return t;
  }, ko();
}
(function(t, n) {
  const e = xn, r = t();
  for (; ; )
    try {
      if (parseInt(e(493)) / 1 * (-parseInt(e(417)) / 2) + -parseInt(e(471)) / 3 + parseInt(e(428)) / 4 * (-parseInt(e(523)) / 5) + parseInt(e(421)) / 6 * (-parseInt(e(448)) / 7) + parseInt(e(457)) / 8 + parseInt(e(427)) / 9 + -parseInt(e(492)) / 10 * (-parseInt(e(508)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 831369);
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = nt(!1), a = (d) => {
    const u = xn;
    if (u(516) === u(466)) _0x3862b9[u(431)] = u(473) + u(477), _0x5748a2[u(502)] = 22;
    else {
      if (d[u(490) + u(442)](), !o[u(491)]) return;
      const v = o[u(491)];
      let g = Mt[d[u(517)]];
      if (n[u(519)] == !0 || n[u(447)] == !0)
        if (u(449) === u(455)) _0x4cea5b[u(431)] = u(473) + u(477), _0x5bccb2[u(419)] = 4096, _0x3b5458[u(502)] = 29;
        else {
          g == Mt[u(441)] && e(Gf, {});
          return;
        }
      if (g == Mt[u(497)] && s(!0), g != Mt[u(497)] && i == !1) return;
      g == Mt[u(441)] && s(!1);
      let h, x;
      const S = v[u(438) + u(450) + "t"]();
      if (d[u(517)][u(469)](u(521)))
        if (u(512) !== u(480)) {
          const { touches: p, changedTouches: C } = d, y = p[0] ?? C[0];
          h = y[u(424)] - S[u(484)], x = y[u(456)] - S[u(511)];
        } else _0x174648[u(425) + u(430)](u(458), _0x39ffc7, _0x43bb98), _0x5ca598[u(425) + u(430)](u(460), _0x437720, _0x5b2e2f), _0x2a145a[u(425) + u(430)](u(513), _0x502695);
      else d[u(517)][u(469)](u(514)) && (u(486) === u(486) ? (h = d[u(445)] - S[u(484)], x = d[u(453)] - S[u(511)]) : _0x4d87ab[u(507)] == !0 && (_0x5e004e[u(502)] = _0x5dc461[u(502)][u(522) + "e"]()));
      const b = {};
      b[u(505)] = u(467), b[u(459)] = g, b.x = h, b.y = x, b[u(436)] = S[u(436)], b[u(432)] = S[u(432)], e(lv, b), v[u(510)]();
    }
  }, c = (d) => {
    const u = xn;
    if (d[u(490) + u(442)](), !o[u(491)])
      return u(452) !== u(452), void 0;
    const v = o[u(491)], g = d[u(487)], h = v[u(438) + u(450) + "t"](), x = {};
    x[u(505)] = u(446), x[u(436)] = v[u(423) + "h"], x[u(432)] = v[u(498) + "ht"], x.x = d[u(445)] - h[u(484)], x.y = d[u(453)] - h[u(511)], x[u(485)] = g, e(uv, x), v[u(510)]();
  }, l = async (d) => {
    const u = xn;
    if (d[u(490) + u(442)](), !o[u(491)]) return;
    const v = o[u(491)], g = cv[d[u(517)]], h = d[u(502)][u(515) + "e"]();
    if (((p) => {
      const C = u;
      if (C(500) !== C(488))
        return [C(506), C(465), C(499)][C(469)](p);
      _0x3f030a[C(431)] = C(473) + C(477), _0x33d2c4[C(502)] = 21;
    })(h) == !0) return;
    const S = async () => {
      const p = u;
      if (p(437) === p(443)) _0x4b36a8[p(431)] = p(473) + p(477), _0x2405e0[p(502)] = 61;
      else {
        const C = {};
        C[p(505)] = p(422), C[p(459)] = g, C[p(431)] = p(483) + p(494), C[p(502)] = d[p(502)], C[p(518)] = 0, C[p(419)] = 0;
        const y = C;
        if (d[p(495)] == !0)
          if (p(476) !== p(504)) {
            if (h == "c") y[p(431)] = p(462);
            else if (h == "a") y[p(431)] = p(473) + p(477), y[p(419)] = 4096, y[p(502)] = 29;
            else if (h == "v")
              if (p(463) !== p(472)) y[p(431)] = p(439), y[p(502)] = await navigator[p(509)][p(524)]();
              else {
                if (_0x3c973f[p(490) + p(442)](), !_0x17d7e6[p(491)]) return;
                const R = _0x3d1063[p(491)], A = _0x2d15bf[p(487)], I = R[p(438) + p(450) + "t"](), B = {};
                B[p(505)] = p(446), B[p(436)] = R[p(423) + "h"], B[p(432)] = R[p(498) + "ht"], B.x = _0x174108[p(445)] - I[p(484)], B.y = _0x12a026[p(453)] - I[p(511)], B[p(485)] = A, _0x29aff8(_0x5bcb64, B), R[p(510)]();
              }
          } else {
            _0x4ebc67 == _0x55d8d2[p(441)] && _0x1a250b(_0x39e15f, {});
            return;
          }
        else if (h == p(481)) y[p(431)] = p(473) + p(477), y[p(502)] = 19;
        else if (h == p(451)) y[p(431)] = p(473) + p(477), y[p(502)] = 20;
        else if (h == p(440)) y[p(431)] = p(473) + p(477), y[p(502)] = 21;
        else if (h == p(475)) {
          if (p(478) === p(503)) return;
          y[p(431)] = p(473) + p(477), y[p(502)] = 22;
        } else
          h == p(429) ? p(482) !== p(470) ? (y[p(431)] = p(473) + p(477), y[p(502)] = 67) : _0x449aa8[p(502)] = _0xe453ed[p(502)][p(522) + "e"]() : h == p(420) ? (y[p(431)] = p(473) + p(477), y[p(502)] = 66) : h == p(444) && (y[p(431)] = p(473) + p(477), y[p(502)] = 61);
        return y[p(517)] == p(483) + p(494) && d[p(507)] == !0 && (p(464) === p(496) ? _0xda0dcf(_0x31f665, {}) : y[p(502)] = y[p(502)][p(522) + "e"]()), y;
      }
    }, b = await S();
    b && (u(474) === u(474) ? e(fv, b) : _0x37dcd2[u(489) + u(418)](_0x2697ec, _0x4c4d9e)), v[u(510)]();
  };
  rt(() => {
    const d = xn, u = o[d(491)];
    if (u) {
      const v = {};
      v[d(435)] = !1;
      const g = v;
      return t ? (u[d(425) + d(430)](d(458), a, g), u[d(425) + d(430)](d(460), a, g), u[d(425) + d(430)](d(513), a)) : (u[d(425) + d(430)](d(433), c, g), u[d(425) + d(430)](d(479), l), [d(468), d(497), d(441)][d(501)]((h) => {
        const x = d;
        u[x(425) + x(430)](h, a);
      })), () => {
        const h = d;
        if (u)
          if (h(416) !== h(434))
            if (t) [h(458), h(460), h(513)][h(501)]((x) => {
              const S = h;
              if (S(461) !== S(454)) u[S(489) + S(418)](x, a);
              else {
                const { touches: b, changedTouches: p } = _0x57ee82, C = b[0] ?? p[0];
                _0x5ee0d8 = C[S(424)] - _0x5b8e10[S(484)], _0x1067ce = C[S(456)] - _0x2e9d48[S(511)];
              }
            });
            else {
              if (h(520) === h(426)) return;
              [h(468), h(497), h(441), h(433), h(479)][h(501)]((x) => {
                const S = h;
                u[S(489) + S(418)](x, a);
              }), u[h(489) + h(418)](h(479), l);
            }
          else _0x57c66a[h(425) + h(430)](h(433), _0x459b4a, _0x3d8cca), _0x5c8520[h(425) + h(430)](h(479), _0x1eb3a0), [h(468), h(497), h(441)][h(501)]((x) => {
            const S = h;
            _0x23353d[S(425) + S(430)](x, _0x50bb37);
          });
      };
    }
  }, [t, a, c, l]);
  const f = { ref: o, ...r };
  return q.jsx(gd, f);
}, pv = "data:image/png;base64,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", ci = Io;
(function(t, n) {
  const e = Io, r = t();
  for (; ; )
    try {
      if (parseInt(e(363)) / 1 + -parseInt(e(360)) / 2 + -parseInt(e(359)) / 3 + -parseInt(e(353)) / 4 + -parseInt(e(358)) / 5 * (-parseInt(e(362)) / 6) + -parseInt(e(354)) / 7 * (-parseInt(e(355)) / 8) + -parseInt(e(352)) / 9 * (-parseInt(e(361)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 307666);
function Po() {
  const t = ["5SkpccX", "1248510iiEnBa", "1193708qdXVcj", "4888790YFiRwc", "188844Dnxyok", "543766WVDLCh", "18YtqBDq", "1545356GhUvrj", "5957jsKeQd", "1448VVamel", "img", "div"];
  return Po = function() {
    return t;
  }, Po();
}
const xv = _t[ci(357)]`
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
`, zt = _t[ci(357)]`
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
`, Vt = _t.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = _t[ci(356)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`;
function Io(t, n) {
  const e = Po();
  return Io = function(r, o) {
    return r = r - 352, e[r];
  }, Io(t, n);
}
const gv = _t[ci(357)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (-parseInt(e(334)) / 1 + -parseInt(e(335)) / 2 + -parseInt(e(353)) / 3 * (parseInt(e(344)) / 4) + -parseInt(e(358)) / 5 * (-parseInt(e(367)) / 6) + parseInt(e(360)) / 7 + -parseInt(e(359)) / 8 * (-parseInt(e(354)) / 9) + parseInt(e(338)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 177477);
function No() {
  const t = ["fullscreen", "webkitRequ", "querySelec", "mozRequest", "EcNNn", "webkitFull", "lscreen", "tor", "Cdlzo", "ullScreen", "#screen_", "reen", "80567HRsFTE", "270864MdGyhK", "estFullscr", "Element", "1078420VsKcNA", "hecIG", "msFullscre", "xRkqM", "Fullscreen", "msRequestF", "22772evfCLb", "msExitFull", "screen", "een", "ent", "webkitExit", "ullscreen", "mozCancelF", "HLLcz", "90oaxRVw", "3627MqlbeT", "KiQae", "FullScreen", "exitFullsc", "847715wDjdgf", "1424YoNhNn", "1506029sVntCP", "eenElement", "mEfGK", "mozFullScr", "screenElem", "requestFul", "QIhBC", "6NtHKzv", "enElement"];
  return No = function() {
    return t;
  }, No();
}
const Gc = () => {
  const t = Un;
  return document[t(369) + t(337)] || document[t(363) + t(361)] || document[t(327) + t(364) + t(348)] || document[t(340) + t(368)];
};
function Un(t, n) {
  const e = No();
  return Un = function(r, o) {
    return r = r - 326, e[r];
  }, Un(t, n);
}
const vv = (t) => {
  const n = Un, e = document[n(371) + n(329)](n(332) + t);
  e[n(365) + n(328)] ? e[n(365) + n(328)]() : e[n(372) + n(356)] ? n(339) === n(362) ? _0x3653bc[n(345) + n(346)]() : e[n(372) + n(356)]() : e[n(370) + n(336) + n(347)] ? e[n(370) + n(336) + n(347)]() : e[n(343) + n(350)] && e[n(343) + n(350)]();
}, yv = () => {
  const t = Un;
  document[t(357) + t(333)] ? t(326) !== t(352) ? document[t(357) + t(333)]() : _0x491d6b[t(357) + t(333)]() : document[t(351) + t(331)] ? document[t(351) + t(331)]() : document[t(349) + t(342)] ? t(330) !== t(366) ? document[t(349) + t(342)]() : _0x428abc[t(372) + t(356)]() : document[t(345) + t(346)] && (t(341) === t(355) ? _0x4e9bc8[t(365) + t(328)]() : document[t(345) + t(346)]());
};
(function(t, n) {
  const e = Mo, r = t();
  for (; ; )
    try {
      if (-parseInt(e(432)) / 1 + -parseInt(e(477)) / 2 + -parseInt(e(410)) / 3 * (-parseInt(e(448)) / 4) + parseInt(e(433)) / 5 * (-parseInt(e(625)) / 6) + parseInt(e(550)) / 7 + parseInt(e(615)) / 8 + -parseInt(e(421)) / 9 * (-parseInt(e(561)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 605271);
function jo() {
  const t = ["674.31a1 1", "readText", "pageY", "tListener", "ent", "M10 4H8v4H", "bkWtr", "H6z", "345-5.236 ", "08 3.677L7", "touch_", "0 1-1V4a1 ", "1 0 0 0-1-", "Show ID", "shortcutEv", "touch", "menu_", "children", "home", "12%", "MovRP", "device_id", ".999-4.909", "zm0-6h-4V4", "7 16 3v2c2", "preventDef", "-.769zm-8.", "height", "2 2h7c0 1.", "addEventLi", "type", "M16.75 2h-", "webkitfull", " 0 0 1 1h1", "5.46 1.701", " 1 0 0 0 1", "M20 3H4a1 ", "nnPTw", "yloed", "enchange", "Back", "mxnmJ", "M16 21c3.5", "recents", "6v2H4z", "-1.103-.89", "2335928BcUVoW", "03 0 2-.89", "V5h14v14z", ".257 5.127", "sync", "assistive", "M20 2H10c-", "clipboard", "left", " 15H4V9z", "1392PEkYLM", "ault", "H13z", "touch_clas", "nlPis", " 2v13c0 1.", "2 2zm2 7v-", "H4c-1.103 ", " 0 0 0-.57", "getBoundin", "back", "c1.103 0 2", ".614 16 19", "M16 7v10c1", "isDown", "volume", "13%", "Volume", "20px", "0 1.767.51", "M20 11V5c0", "paste", "path", "zIndex", "6v6h2v-4h4", "dyxar", "S18.387 17", "00/svg", "3px", "uIHTi", ".21a1 1 0 ", "10l.002 10", " 2 2zm0-8h", "027 1.027 ", "change", "-2-5zM4 17", "a1 1 0 0 0", "clientY", "OMfOi", "M6 12h6v2H", "69-.823l-1", "M20.978 13", "m4.431 12.", "H4zm16-6h-", "qOeEm", "ibnYU", "8v12.264l-", "1 0 0 0-1 ", "action", " 3.999 4.0", "27-1.547 5", "copy", " 2v16c0 1.", "Screen", "4zm0 5h16v", "2H4zm0 5h1", " 2v5H4V5h3", ".387 1.386", ".897-2-2-2", "3a.986.986", "103.897 2 ", "data-id", " 0 0 0-.38", "-7v2h5z", "assistive_", "click", "iiMdR", "M4 6h16v2H", "061-.016.0", " 2-2v-7c0-", "1zm-1 16H5", "h4zm12-6h-", "focus", "screenchan", "4.445-2.96", "75.931l2 1", "0v10z", "KauUc", "Copy", "6a1 1 0 0 ", "removeEven", "2 2h10c1.1", "fullscreen", "7 2-2v-4h4", "h2.697l5.7", "taskId", "H5v-5H3v7h", "landscape", "s-.775-3.9", "-2 2v6c0 1", "l10.283 7.", "0-2 .897-2", "current", "move", "8.347l-3.0", "21KeEnRi", "touchmove", ".225-1.1 2", "416 3.377 ", "1.103 0-2 ", "1.003 0 0 ", "1.048z", "2 2h7c1.10", "v2h8V5h3v6", "Sync", "27.05A1 1 ", "129564tbiTEm", "opacity", "7 2-2V4c0-", "svg", " 7H4c-1.10", "now", "pageX", "touchend", "zM4 20V10h", "mousemove", "ZfkBF", "756855sGjtEU", "20790AjDfBq", "h-5c-1.103", "0 0 1.645z", "822 13 9A1", "clientX", "grab", "h-2v6h6z", "7zm11-5h-2", " 2v10c0 1.", "-1.052-3.3", "3 0 2-.897", "JIUPU", "-1-1H8a1 1", "NXhWq", "0 0 0 14 2", "483108xUbHdZ", ".002 16H6.", "gvPgW", "48 3.832a1", "oYZCy", "7.032 15 7", "93-.019a1.", "stener", "IQQIZ", " 5.999-9S1", "passive", ".004 1.004", "3 9a1.003 ", "2-.116C7.0", "HYwCf", "1v16a1 1 0", "-.897 2-2V", "0 0 0 .38-", " 0 0 0-1 1", "v2z", ".832L6.697", "getAttribu", "mouseup", ".015.057-.", "includes", " 0-2 .897-", "v5h-5v2h7z", "circle", "7-2-2-2h-3", "778828AAWdxC", "2-.082-.03", "47 3.999 7", "mouse", "255, 255, ", ".089-1.218", "17-.056-.0", "mousedown", "touchstart", "3 0-2 .897", "-2-2-2zm-1", "mozfullscr", "showMenu", "59 15.016 ", "9 21V3a1 1", "-2-2-2zm-9", "017.082-.0", "9.527 4.54", "0V4a1 1 0 ", "2-2h-4V4h1", "prYkU", "msfullscre", "0 0-1.554-", "4v-4c0-1.1", "6zm0 4h6v2", "4c-.025-.0", "NBren", "4v2h6zM8 2", "shortcut", ".w3.org/20", "3c.033 0 .", "0 18V4h10l", "0a.999.999", "width", "data", "max", "http://www", "10c-1.103 ", "get", "Icon", "4c0-1.103-", "fill", "0 0 0 .782", "M5 5h5V3H3", "mkcrf", "min", "11.75", "cursor", "Paste", "GRYKk", "Hide ID", "top", "rgba(255, ", "closest", "7h7l.001 7", "Home", "57-5.428 6", "shortcutCo", "0 0-.396-1", "jmCqd", "m-2-4h2V3h", "03-.897-2-", "gClientRec", ".897-2 2v4", ".024l-14-1", "Recents", "7a1 1 0 0 ", "6l3.612-4.", "forEach", "target", "mhQGj", "0 0 24 24", "PcAHd", "1780338pcmcWE", " 0 0 0 1.0", "tGFwv", "a.995.995 ", "right", "0h2v-6H4v2", "33L12 5.86", ".116c.026-", "div", " 0 0 0-1.5", ".103.897 2", "920sBtfwS", "-3.229 2-5", "v7h2zm5 14", "set", "75z", "1.103-.897", "AKNnV", "eenchange"];
  return jo = function() {
    return t;
  }, jo();
}
function Mo(t, n) {
  const e = jo();
  return Mo = function(r, o) {
    return r = r - 398, e[r];
  }, Mo(t, n);
}
const bv = il((t, n) => {
  const e = Mo, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [l, f] = nt(0), [d, u] = nt(0), [v, g] = nt(null), [h, x] = nt(0), S = Ue(null), b = Ue(null), p = Ue(null), C = {};
  C[e(524)] = e(408), C[e(422)] = 0.3, C[e(648)] = 999;
  const [y, R] = nt(C), A = {};
  A[e(648)] = 999, A[e(596)] = "", A[e(510)] = e(641);
  const [I, B] = nt(A), Y = {};
  Y[e(648)] = 1e3;
  const [re, G] = nt(Y), F = Ue(null), [X, U] = nt(null), ee = Ue(null), Z = (j) => {
    const w = e;
    if (j[w(594) + w(626)](), s[w(515)][w(489)] == !0) return;
    const we = Mt[j[w(599)]], be = a[w(407)], je = p[w(407)], le = be[w(634) + w(539) + "t"](), Qe = je[w(634) + w(539) + "t"](), Oe = 3;
    let Bt, ct;
    const Ft = le[w(510)] - Qe[w(510)], cn = le[w(596)] - Qe[w(596)];
    if (j[w(599)][w(472)](w(584))) {
      const { touches: Ve, changedTouches: qe } = j, $e = Ve[0] ?? qe[0];
      Bt = $e[w(427)], ct = $e[w(571)];
    } else j[w(599)][w(472)](w(480)) && (Bt = j[w(437)], ct = j[w(662)]);
    if (we == Mt[w(484)]) {
      s[w(564)]({ ...s[w(515)], isDown: !0 }), f(Bt - Qe[w(623)]), u(ct - Qe[w(528)]);
      const Ve = {};
      Ve[w(422)] = 1, Ve[w(524)] = w(438);
      const qe = { ...y, ...Ve };
      R(qe), x(performance[w(426)]());
    } else if (we == Mt[w(430)])
      if (w(431) === w(536)) _0x3b4193[w(545)]((Ve) => {
        const qe = w;
        _0x491810[qe(598) + qe(455)](Ve, _0x42a3f1);
      });
      else {
        if (s[w(515)][w(639)] == !1) return;
        let Ve = Bt - l - le[w(623)], qe = ct - d - le[w(528)];
        Ve = Math[w(512)](Oe, Math[w(522)](Ve, Ft) - Oe), qe = Math[w(512)](Oe, Math[w(522)](qe, cn) - Oe);
        const $e = {};
        $e[w(528)] = qe + "px", $e[w(623)] = Ve + "px";
        const kt = { ...I, ...$e };
        B(kt);
        const et = {};
        et.x = Ve, et.y = qe, ee[w(407)] = et;
      }
    else if (we == Mt[w(470)]) {
      const Ve = performance[w(426)]() - h;
      if (v == Mt[w(484)] || Ve < 100)
        if (w(589) === w(589)) {
          const dt = {};
          dt[w(489)] = !0, dt[w(639)] = !1, s[w(564)]({ ...s[w(515)], ...dt });
        } else _0x32b575[w(705) + w(572)](_0x382d74, _0x54c472);
      else s[w(564)]({ ...s[w(515)], isDown: !1 });
      const qe = ee[w(407)].x > Ft / 2 ? Ft - Oe : Oe, $e = {};
      $e[w(623)] = qe + "px";
      const kt = { ...I, ...$e };
      B(kt);
      const et = {};
      et[w(422)] = 0.3, et[w(524)] = w(408);
      const Xt = { ...y, ...et };
      R(Xt);
    }
    g(we), je[w(697)]();
  }, J = async (j) => {
    const w = e;
    j[w(594) + w(626)]();
    const we = j[w(546)][w(530)](w(558))[w(469) + "te"](w(686));
    if (we === w(707))
      if (w(456) !== w(521))
        Gc() ? w(691) !== w(497) ? yv() : _0x4f9479(_0x299a44) : vv(r);
      else {
        const { touches: be, changedTouches: je } = _0x3a1ae4, le = be[0] ?? je[0];
        _0x1ff07d = le[w(427)], _0x23ffd3 = le[w(571)];
      }
    else if (w(607) === w(444)) [w(485), w(411), w(428)][w(545)]((be) => {
      const je = w;
      _0x5dcef0[je(705) + je(572)](be, _0x230d7c);
    });
    else {
      const be = {};
      be[w(673)] = w(583) + w(573), be[w(505)] = we, be[w(511)] = "";
      const je = be;
      we === w(646) && (je[w(511)] = await navigator[w(622)][w(570)]()), we === w(676) && (w(654) !== w(669) ? je[w(400)] = w(534) + "py" : _0x585518 && _0x5443c5[w(705) + w(572)](w(690), _0x5631e5)), i(Ds, je);
    }
    s[w(564)]({ ...s[w(515)], showMenu: !1 }), b[w(407)][w(697)]();
  }, Q = (j) => {
    const w = Gc();
    i(dv, w);
  };
  rt(() => {
    const j = e;
    if (j(567) === j(446)) {
      const w = { ..._0x5abc1f[j(515)] };
      w[j(639)] = !1, _0x3e0aa6[j(564)](w);
    } else requestAnimationFrame(() => {
      const w = j, we = { ...re };
      we[w(422)] = s[w(515)][w(489)] ? 1 : 0, G(we);
    });
  }, [s]), rt(() => {
    const j = e, w = a[j(407)], we = [j(707) + j(659), j(601) + j(698) + "ge", j(488) + j(568), j(498) + j(608)];
    return w && (j(526) === j(450) ? _0x5e04e5() : we[j(545)]((be) => {
      const je = j;
      w[je(598) + je(455)](be, Q);
    })), () => {
      const be = j;
      w && (be(629) !== be(670) ? w[be(705) + be(572)](be(690), Q) : (_0x5629cb = _0x3b7143[be(437)], _0x5790f5 = _0x381d2a[be(662)]));
    };
  }, []), rt(() => {
    const j = e;
    if (j(575) !== j(610)) {
      const w = p[j(407)], we = b[j(407)];
      if (we && we[j(598) + j(455)](j(690), J), w) {
        const be = {};
        be[j(458)] = !1;
        const je = be;
        return o ? j(503) !== j(663) ? (w[j(598) + j(455)](j(485), Z, je), w[j(598) + j(455)](j(411), Z, je), w[j(598) + j(455)](j(428), Z)) : _0x4bccbe[j(598) + j(455)](_0x3ecbce, _0x53ec9c) : [j(430), j(484), j(470)][j(545)]((le) => {
          const Qe = j;
          w[Qe(598) + Qe(455)](le, Z);
        }), () => {
          const le = j;
          we && we[le(705) + le(572)](le(690), J), w && (le(547) !== le(650) ? o ? [le(485), le(411), le(428)][le(545)]((Qe) => {
            const Oe = le;
            w[Oe(705) + Oe(572)](Qe, Z);
          }) : [le(430), le(484), le(470)][le(545)]((Qe) => {
            const Oe = le;
            Oe(452) !== Oe(552) ? w[Oe(705) + Oe(572)](Qe, Z) : _0x2e4b6e[Oe(598) + Oe(455)](_0x4519b8, _0x1cddee);
          }) : (_0x301fcc[le(598) + le(455)](le(485), _0x489b78, _0xa01107), _0x5a82dd[le(598) + le(455)](le(411), _0x166019, _0x21a08c), _0x2e7601[le(598) + le(455)](le(428), _0x566dd0)));
        };
      }
    } else
      _0x50a9e4() ? _0x4a15ce() : _0x224af0(_0x1d2e25);
  }, [o, Z]);
  const se = () => {
    const j = e;
    if (j(606) === j(606)) {
      const w = {};
      w[j(648)] = 999, w[j(596)] = F[j(407)] == j(402) ? j(588) : null, w[j(510)] = F[j(407)] != j(402) ? j(588) : null, w[j(528)] = j(643), w[j(554)] = j(653), B(w);
    } else [j(430), j(484), j(470)][j(545)]((w) => {
      const we = j;
      _0x16856b[we(705) + we(572)](w, _0x26b000);
    });
  };
  sl(n, () => ({ fixTouch: (j) => {
    const w = e;
    if (j) {
      if (w(462) === w(702)) return;
      F[w(407)] = j;
    }
    se();
  }, setFullscreen: (j) => {
    const w = e;
    w(549) === w(549) ? U(j) : _0x3e8e9c[w(407)] = _0x56e1b0;
  } }));
  const oe = {};
  oe[e(518)] = e(529) + e(481) + "1)";
  const K = {};
  K.d = X ? e(574) + e(504) + e(555) + e(696) + e(649) + e(592) + e(439) : e(520) + e(563) + e(401) + e(440) + e(474) + e(537) + e(688);
  const te = {};
  te[e(586)] = e(678);
  const he = {};
  he[e(518)] = e(529) + e(481) + "1)";
  const fe = {};
  fe.d = e(621) + e(414) + e(540) + e(632) + e(406) + e(441) + e(685) + e(706) + e(616) + e(398) + e(636) + e(464) + e(517) + e(683) + e(429) + e(656) + e(668) + e(500) + e(538) + e(496) + e(701);
  const xe = {};
  xe.d = e(664) + e(501) + e(576);
  const E = {};
  E[e(586)] = e(703);
  const M = {};
  M[e(518)] = e(529) + e(481) + "1)";
  const k = {};
  k.d = e(645) + e(614) + e(476) + e(661) + e(445) + e(466) + e(632) + e(406) + e(630) + e(685) + e(597) + e(685) + e(417) + e(443) + e(694) + e(566) + e(492) + e(681) + e(418) + e(434) + e(473) + e(631) + e(531) + e(627);
  const N = {};
  N[e(586)] = e(525);
  const O = {};
  O[e(518)] = e(529) + e(481) + "1)";
  const V = {};
  V.d = e(600) + e(514) + e(406) + e(677) + e(685) + e(706) + e(616) + e(423) + e(566) + e(487) + e(508) + e(449) + e(565);
  const z = {};
  z.cx = e(523), z.cy = "18", z.r = "1";
  const L = {};
  L[e(586)] = e(c ? 527 : 582);
  const Je = {};
  Je[e(518)] = e(529) + e(481) + "1)";
  const Ae = {};
  Ae.d = e(611) + e(675) + e(591) + e(457) + e(494) + e(593) + e(682) + e(674) + e(479) + e(651) + e(637) + e(467);
  const ut = {};
  ut.d = e(638) + e(412) + e(562) + e(403) + e(660) + e(399) + e(451) + e(459) + e(551) + e(420) + e(447) + e(495) + e(499) + e(468) + e(425) + e(486) + e(404) + e(560) + e(657) + e(507) + e(693) + e(454) + e(658) + e(465) + e(557) + e(471) + e(493) + e(556) + e(671) + e(699) + e(502) + e(483) + e(478) + e(684) + e(687) + e(461) + e(490) + e(453) + e(624);
  const Ot = {};
  Ot[e(586)] = e(642);
  const at = {};
  at[e(518)] = e(529) + e(481) + "1)";
  const Rt = {};
  Rt.d = e(666) + e(655) + e(535) + e(541) + e(509) + e(559) + e(700) + e(543) + e(644) + e(544) + e(413) + e(603) + e(442) + e(533) + e(482) + e(553) + e(519) + e(595) + e(569) + e(633) + e(409) + e(578) + e(618) + e(405) + e(577) + e(416);
  const Ne = {};
  Ne[e(586)] = e(419);
  const _e = {};
  _e[e(518)] = e(529) + e(481) + "1)";
  const Ye = {};
  Ye.d = e(692) + e(679) + e(680) + e(613);
  const gt = {};
  gt[e(586)] = e(542);
  const ft = {};
  ft[e(518)] = e(529) + e(481) + "1)";
  const rn = {};
  rn.d = e(605) + e(672) + e(463) + e(602) + e(704) + e(580) + e(581) + e(695) + e(617);
  const on = {};
  on[e(586)] = e(532);
  const Cn = {};
  Cn[e(518)] = e(529) + e(481) + "1)";
  const sn = {};
  sn.d = e(667) + e(436) + e(604) + e(491) + e(559) + e(665) + e(460) + e(415) + e(435);
  const an = {};
  return an[e(586)] = e(609), q.jsxs(q.Fragment, { children: [s[e(515)][e(489)] ? q.jsxs(xv, { id: e(689) + e(585) + r, style: re, ref: b, children: [q.jsxs(zt, { "data-id": e(707), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: oe, children: q.jsx(e(647), K) }), q.jsx(Vt, te)] }), q.jsxs(zt, { "data-id": e(676), children: [q.jsxs(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: he, children: [q.jsx(e(647), fe), q.jsx(e(647), xe)] }), q.jsx(Vt, E)] }), q.jsxs(zt, { "data-id": e(646), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: M, children: q.jsx(e(647), k) }), q.jsx(Vt, N)] }), q.jsxs(zt, { "data-id": e(590), children: [q.jsxs(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: O, children: [q.jsx(e(647), V), q.jsx(e(475), z)] }), q.jsx(Vt, L)] }), q.jsxs(zt, { "data-id": e(640), children: [q.jsxs(e(424), { xmlns: e(513) + e(506) + e(652), width: "25", height: "25", viewBox: e(548), style: Je, children: [q.jsx(e(647), Ae), q.jsx(e(647), ut)] }), q.jsx(Vt, Ot)] }), q.jsxs(zt, { "data-id": e(619), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: at, children: q.jsx(e(647), Rt) }), q.jsx(Vt, Ne)] }), q.jsxs(zt, { "data-id": e(612), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: _e, children: q.jsx(e(647), Ye) }), q.jsx(Vt, gt)] }), q.jsxs(zt, { "data-id": e(587), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: ft, children: q.jsx(e(647), rn) }), q.jsx(Vt, on)] }), q.jsxs(zt, { "data-id": e(635), children: [q.jsx(e(424), { xmlns: e(513) + e(506) + e(652), width: "28", height: "28", viewBox: e(548), style: Cn, children: q.jsx(e(647), sn) }), q.jsx(Vt, an)] })] }) : null, q.jsx(gv, { id: e(689) + e(628) + "s_" + r, className: e(620), ref: S, style: y, children: q.jsx(mv, { style: I, src: pv, className: e(620), id: e(689) + e(579) + r, alt: e(516), ref: p, draggable: !1 }) })] });
}), Me = qn;
function qn(t, n) {
  const e = Lo();
  return qn = function(r, o) {
    return r = r - 360, e[r];
  }, qn(t, n);
}
(function(t, n) {
  const e = qn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(404)) / 1 * (-parseInt(e(414)) / 2) + -parseInt(e(390)) / 3 * (parseInt(e(422)) / 4) + parseInt(e(383)) / 5 * (parseInt(e(391)) / 6) + parseInt(e(435)) / 7 + parseInt(e(361)) / 8 + parseInt(e(424)) / 9 + -parseInt(e(413)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 976203);
function Lo() {
  const t = ["landscape", "length", "ctx", "een", "now", "rootSize", "iframe", "rLatency", "concatUint", "avc1.64001", "decoder", "height", "concat", "buildDecod", "maxWidth", "optimizeFo", "autoResize", "from", "EwdVC", "resizedWid", "Decoder er", "20DVOxfR", "RTWrC", "codedWidth", "SIPUG", "celeration", "canvas", "setVideoMe", "3XScLXS", "1584468LCaDCk", "ecbQA", "prefer-har", "innerHeigh", "error", "decode", "lock", "configure", "ror:", "round", "rotate", "hardwareAc", "width", "1JlqrSd", "EhxKZ", "orientatio", "state", "drawImage", "vdjbR", "portrait", "ftuwS", "eTJzr", "39168350YOROMi", "2153874Algwyx", "tion", "setFullscr", "isPlay", "getContext", "key", "codedHeigh", "delta", "4314692XCymbt", "fAoMP", "6302781OZtvRB", "close", "translate", "setOrienta", "clearRect", "codec", "dware", "isMobile", "scale", "isKeyFrame", "DbEZz", "11077913jphNMC", "DjHLY", "8Arrays", "setIsConne", "videoMeta", "12444752DkgrtH"];
  return Lo = function() {
    return t;
  }, Lo();
}
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = Me(416) + Me(365), rl = Me(381) + "th", nl = Me(427) + Me(415), tl = Me(378), el = Me(389) + "ta", Qc = Me(375) + "er", Jc = Me(433), Zc = Me(370) + Me(437), Kc = Me(396);
class Sv {
  constructor(n, e, r, o) {
    Pt(this, ol, (n) => {
      const e = Me;
      if (n) {
        const r = window[e(394) + "t"] + 10, o = this[e(381) + "th"](null, this[e(367)][e(403)], this[e(367)][e(373)], r, r);
        this[e(403)] = o[e(403)], this[e(373)] = o[e(373)];
      } else e(412) === e(384) ? _0xacd9e9[e(406) + "n"][e(397)](_0x2d05bf) : (this[e(403)] = this[e(367)][e(403)], this[e(373)] = this[e(367)][e(373)]);
    });
    Pt(this, rl, (n, e, r, o, i) => {
      const s = Me;
      let a;
      return n && o > this[s(376)] && r > e && (i = this[s(376)]), i && (a = i / e * r, a > o && (i = o / r * e, a = o / e * e)), { width: Math[s(400)](i), height: Math[s(400)](a) };
    });
    Pt(this, nl, (n) => {
      const e = Me;
      if (this[e(406) + "n"] = n, this[e(431)])
        if (e(434) !== e(409)) screen[e(406) + "n"][e(397)](n);
        else {
          if (!this[e(372)] || this[e(372)][e(407)] == e(425) || !this[e(360)]) return;
          let r = _0x5a1b48 instanceof _0x1a91a1 ? _0x525486 : new _0x432104(_0x4d769b);
          const o = this[e(433)](r);
          o && (this[e(368)] = r), this[e(368)] && this[e(360)] && (!this[e(417)] && (r = this[e(370) + e(437)](this[e(360)], this[e(368)]), this[e(417)] = !0), this[e(372)][e(396)](new _0x4fa136({ timestamp: _0x4df430[e(366)]() * 1e3, type: e(o ? 419 : 421), data: r })));
        }
    });
    Pt(this, tl, (n, e) => {
      var a;
      const r = Me, o = this[r(431)] == !0 ? window[r(394) + "t"] - 12 : window[r(394) + "t"] - 50, i = this[r(381) + "th"](!0, n, e, o, o);
      this[r(403)] = i[r(403)], this[r(373)] = i[r(373)], !this[r(367)] && (r(405) === r(392) ? (_0x1e5fe1 = this[r(370) + r(437)](this[r(360)], this[r(368)]), this[r(417)] = !0) : (a = this[r(438) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(403)] = i[r(403)], s[r(373)] = i[r(373)], this[r(367)] = s;
    });
    Pt(this, el, (n) => {
      const e = Me, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(360)] = r;
    });
    Pt(this, Qc, () => {
      const n = Me, e = new VideoDecoder({ output: async (o) => {
        const i = qn;
        if (i(386) !== i(423)) {
          const s = await createImageBitmap(o);
          (!this[i(403)] || !this[i(373)]) && this[i(378)](o[i(385)], o[i(420) + "t"]), this[i(364)][i(428)](0, 0, this[i(403)], this[i(373)]), this[i(406) + "n"] == i(362) ? (this[i(388)][i(403)] = this[i(373)], this[i(388)][i(373)] = this[i(403)], this[i(364)][i(426)](0, this[i(403)]), this[i(364)][i(401)](Math.PI / 2), this[i(364)][i(432)](-1, -1), this[i(364)][i(408)](s, 0, 0, this[i(403)], this[i(373)])) : (this[i(388)][i(403)] = this[i(403)], this[i(388)][i(373)] = this[i(373)], this[i(364)][i(408)](s, 0, 0, this[i(403)], this[i(373)])), s[i(425)](), o[i(425)]();
        } else {
          const s = _0x2682fa[i(394) + "t"] + 10, a = this[i(381) + "th"](null, this[i(367)][i(403)], this[i(367)][i(373)], s, s);
          this[i(403)] = a[i(403)], this[i(373)] = a[i(373)];
        }
      }, error: (o) => console[n(395)](n(382) + n(399), o) }), r = {};
      return r[n(429)] = n(371) + "E", r[n(402) + n(387)] = n(393) + n(430), r[n(377) + n(369)] = !0, e[n(398)](r), e;
    });
    Pt(this, Jc, (n) => {
      const e = Me;
      for (let r = 0; r <= n[e(363)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1) {
          if (e(436) === e(436))
            return (n[r + 4] & 31) === 5;
          this[e(403)] = this[e(367)][e(403)], this[e(373)] = this[e(367)][e(373)];
        }
      for (let r = 0; r <= n[e(363)] - 3; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return (n[r + 3] & 31) === 5;
      return !1;
    });
    Pt(this, Zc, (n, e) => {
      const r = Me, o = Array[r(379)](n)[r(374)](Array[r(379)](e));
      return new Uint8Array(o);
    });
    Pt(this, Kc, (n) => {
      const e = Me;
      if (!this[e(372)] || this[e(372)][e(407)] == e(425) || !this[e(360)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(433)](r);
      o && (this[e(368)] = r), this[e(368)] && this[e(360)] && (e(411) !== e(380) ? (!this[e(417)] && (r = this[e(370) + e(437)](this[e(360)], this[e(368)]), this[e(417)] = !0), this[e(372)][e(396)](new EncodedVideoChunk({ timestamp: performance[e(366)]() * 1e3, type: e(o ? 419 : 421), data: r }))) : this[e(378)](_0x26ff1d[e(385)], _0x4ed9da[e(420) + "t"]));
    });
    const i = qn;
    this[i(388)] = n, this[i(376)] = e, this[i(431)] = r, this[i(438) + "ct"] = o, this[i(364)] = n[i(418)]("2d"), this[i(372)] = this[i(375) + "er"](), this[i(360)] = null, this[i(368)] = null, this[i(417)] = null, this[i(403)] = null, this[i(373)] = null, this[i(367)] = null, this[i(406) + "n"] = i(410);
  }
}
(function(t, n) {
  const e = mn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(208)) / 1 + -parseInt(e(280)) / 2 + -parseInt(e(189)) / 3 * (parseInt(e(275)) / 4) + -parseInt(e(289)) / 5 * (-parseInt(e(243)) / 6) + parseInt(e(209)) / 7 * (-parseInt(e(249)) / 8) + parseInt(e(182)) / 9 * (-parseInt(e(269)) / 10) + parseInt(e(202)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 186170);
function Do() {
  const t = ["1750wchJuK", "value", "width", "children", "onScreenEv", "length", "removeEven", "method", "type", " closed co", "tion", "zgQgp", "webkitFull", "ror", "YYrXU", "password", "data", "message", "Qmzkf", "emit", "disconnect", "get", "isMobile", "COPY_TEXT", "device_id", "taskId", "EwyUn", "isDown", "Element", "screen_mai", "tListener", "een", "iframe", "set", "6fSaIBg", "shortcutEv", "change", "action", "control", "passwd", "1640PQVbnv", "size", "epfmQ", "code", "showMenu", "Timeout wa", "screenElem", "onSyncIFra", "GGszf", "status", "response", "center", "tabIndex", "FYFBX", "delete", "ent", "text", "applicatio", "msFullscre", "timeout", "930470AVBNdb", "fixTouch", "video_meta", "hcZXO", "DVvsM", "msg", "4aBmTAK", "enElement", "false", "url", "setFullscr", "705880rpAmhu", "clipboard", "height", "gMsDn", "QECWO", "type_clien", "shortcut", "error", "jqdKK", "826705SvwXtK", "draggable", "current", "info", "AGfVd", "userAgent", "reconnecti", "yPZcN", "test", "eenElement", "de: ", "YbFfT", "middle", "join_room", "decode", "Content-Ty", "kiUCe", "orientatio", "mozFullScr", "writeText", "n/json", "setOrienta", "sync", "VcPQW", "connect_er", "setVideoMe", "9xzapFq", "stener", "get_video_", "image_", "GDlKi", "meta", "post", "866682iutIqo", "iting for ", "XVOww", "tGwqg", "miooO", "fullscreen", "connection", "headers", "screen_", "marginTop", "screen", "addEventLi", "RBpep", "12602700XPQHds", "pUaMq", "map", "connect", "large", "kkMRd", "338740kwTIMp"];
  return Do = function() {
    return t;
  }, Do();
}
function mn(t, n) {
  const e = Do();
  return mn = function(r, o) {
    return r = r - 166, e[r];
  }, mn(t, n);
}
const Wv = il((t, n) => {
  const e = mn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = t, f = o[e(233)], d = /iPhone|iPad|iPod|Android/i[e(297)](navigator[e(294)]), u = e(247), v = Ue(null), g = Ue(null), h = Ue(null), [x, S] = nt(null), [b, p] = nt(null), C = {};
  C[e(253)] = !1, C[e(236)] = !1;
  const [y, R] = nt(C), [A, I] = nt(null), B = e(185) + f, Y = e(197) + f, re = e(238) + "n_" + f, G = Ue(null), [F, X] = nt([]), U = Ue(null), ee = Ue(/* @__PURE__ */ new Map());
  rt(() => {
    const E = e;
    if (E(172) === E(172)) p(a);
    else {
      _0xabb06e[E(291)][E(263)](_0x3736e0[E(234)]);
      const M = {};
      M[E(246)] = _0x9aad99[E(246)], M[E(234)] = _0x39480d[E(234)], M[E(258)] = !1, M[E(226)] = E(254) + E(190) + E(259), _0x41f500(M);
    }
  }, [a]);
  const Z = (E) => {
    const M = e;
    M(293) !== M(193) ? X((k) => [...k, E]) : (_0x4b4aee[M(291)][M(177) + M(219)](_0xb29afe[M(210)]), _0x5ef024[M(291)][M(270)](_0x3231ea[M(210)]));
  }, J = (E) => {
    const M = e;
    v[M(291)][M(228)](M(226), E), c == null || c(E);
  };
  sl(n, () => ({ api: async function(E, M = 5e3) {
    return new Promise((k, N) => {
      const O = mn;
      if (O(296) === O(201)) {
        const V = () => {
          const z = O, L = _0x55dce[z(194) + z(237)] || _0x57f8c4[z(221) + z(255) + z(264)] || _0x6dfefc[z(174) + z(298)] || _0x533bd9[z(267) + z(276)];
          _0x39c14f[z(291)][z(279) + z(240)](!!L), _0x3a7593[z(291)][z(279) + z(240)](!!L), _0x242575[z(291)][z(270)]();
        };
        return _0x5ca919[O(200) + O(183)](O(194) + O(245), V), () => {
          const z = O;
          _0x3b6401[z(215) + z(239)](z(194) + z(245), V);
        };
      } else {
        const V = setTimeout(() => {
          const z = O;
          ee[z(291)][z(263)](E[z(234)]);
          const L = {};
          L[z(246)] = E[z(246)], L[z(234)] = E[z(234)], L[z(258)] = !1, L[z(226)] = z(254) + z(190) + z(259), N(L);
        }, M);
        ee[O(291)][O(242)](E[O(234)], (z) => {
          const L = O;
          L(257) !== L(257) ? _0x700da9[L(229)]() : (clearTimeout(V), k(z));
        }), v[O(291)][O(228)](O(226), E);
      }
    });
  }, sync: function(E) {
    const M = e;
    v[M(291)][M(228)](M(226), E);
  } })), rt(() => {
    (async () => {
      const E = mn;
      if (E(203) !== E(220)) try {
        const M = {};
        M[E(171) + "pe"] = E(266) + E(176);
        const k = {};
        k[E(233)] = o[E(233)], k[E(224)] = o[E(248)];
        const N = {};
        N[E(278)] = r, N[E(216)] = E(188), N[E(268)] = 1e4, N[E(196)] = M, N[E(225)] = k;
        const O = N, V = await sv(O);
        S(V[E(225)]);
      } catch (M) {
        if (E(283) !== E(179)) {
          const k = {};
          k[E(274)] = M, k[E(217)] = E(287), Z(k);
        } else return new _0x25a1b6((k, N) => {
          const O = E, V = _0x12b631(() => {
            const z = mn;
            _0x187811[z(291)][z(263)](_0x27190c[z(234)]);
            const L = {};
            L[z(246)] = _0x9a20bf[z(246)], L[z(234)] = _0x1b88f8[z(234)], L[z(258)] = !1, L[z(226)] = z(254) + z(190) + z(259), N(L);
          }, _0x50a56d);
          _0x82f635[O(291)][O(242)](_0xefbe08[O(234)], (z) => {
            _0x310598(V), k(z);
          }), _0x4fa3b8[O(291)][O(228)](O(226), _0x29e2cd);
        });
      }
      else {
        const M = _0x3c9bbf[E(291)];
        _0x21176a[E(291)] = new _0x14cdf4(M, _0x2070e2, _0x47dbd2, _0x3bfba1);
      }
    })();
  }, []), rt(() => {
    const E = e;
    if (E(288) === E(223)) {
      const M = {};
      M[E(274)] = E(195) + E(218) + E(166) + _0x425e64[E(252)], M[E(217)] = E(292), _0x2bfab7(M);
    } else {
      if (v[E(291)] || !x) return;
      const M = {};
      M[E(295) + "on"] = !1;
      const k = to(x, M);
      return k.on(E(205), () => {
        const N = E;
        if (N(262) !== N(262)) {
          if (_0x40d419[N(291)][N(181) + "ta"](_0x3016f4), !_0x1f8497[N(291)][N(241)]) {
            const O = {};
            O[N(246)] = N(256) + "me", _0x1c19a7[N(228)](N(226), O);
          }
        } else {
          const O = {};
          O[N(246)] = N(205), O[N(285) + "t"] = u, O[N(233)] = o[N(233)], O[N(231)] = d, O[N(248)] = o[N(248)], k[N(228)](N(169), O);
        }
      }), k.on(E(169), (N) => {
        const O = E;
        if (N[O(258)] == !0) {
          v[O(291)] = k;
          const V = {};
          V[O(246)] = O(213) + O(264), k[O(228)](O(226), V);
        } else {
          const V = {};
          V[O(274)] = N[O(274)], V[O(217)] = O(287), Z(V);
        }
      }), k.on(E(199), (N) => {
        const O = E;
        U[O(291)][O(170)](N);
      }), k.on(E(271), (N) => {
        const O = E;
        if (N) {
          if (U[O(291)][O(181) + "ta"](N), !U[O(291)][O(241)]) {
            const V = {};
            V[O(246)] = O(256) + "me", k[O(228)](O(226), V);
          }
        } else if (O(192) !== O(192)) _0x334666(_0x3fbf2d);
        else {
          const V = {};
          V[O(246)] = O(184) + O(187), k[O(228)](O(271), V);
        }
      }), k.on(E(226), (N) => {
        const O = E;
        if (O(235) === O(235)) {
          if ((N[O(246)] == O(232) || N[O(246)] == O(244) + O(264)) && N[O(265)][O(214)] > 0 ? navigator[O(281)][O(175)](N[O(265)]) : N[O(246)] == O(173) + "n" && (U[O(291)][O(177) + O(219)](N[O(210)]), G[O(291)][O(270)](N[O(210)])), N[O(234)]) {
            const V = ee[O(291)][O(230)](N[O(234)]);
            V && (V(N), ee[O(291)][O(263)](N[O(234)]));
          }
        } else {
          _0x1d26cf[O(291)] = _0x43b264;
          const V = {};
          V[O(246)] = O(213) + O(264), _0x280923[O(228)](O(226), V);
        }
      }), k.on(E(180) + E(222), (N) => {
        const O = E, V = {};
        V[O(274)] = N, V[O(217)] = O(287), Z(V);
      }), k.on(E(229), (N) => {
        const O = E, V = {};
        V[O(274)] = O(195) + O(218) + O(166) + N[O(252)], V[O(217)] = O(292), Z(V);
      }), () => {
        k && k[E(229)]();
      };
    }
  }, [x]), rt(() => {
    const E = e;
    if (E(167) === E(191))
      if (_0x422c25) {
        if (_0x583637[E(291)][E(181) + "ta"](_0x237037), !_0x1e1349[E(291)][E(241)]) {
          const M = {};
          M[E(246)] = E(256) + "me", _0x48726f[E(228)](E(226), M);
        }
      } else {
        const M = {};
        M[E(246)] = E(184) + E(187), _0x18efda[E(228)](E(271), M);
      }
    else {
      const M = h[E(291)];
      U[E(291)] = new Sv(M, i, d, I);
    }
  }, []), rt(() => {
    const E = e;
    if (E(273) === E(207)) _0x3fd3f6[E(291)][E(228)](E(226), _0x3aa013);
    else {
      const M = () => {
        const k = E;
        if (k(251) !== k(227)) {
          const N = document[k(194) + k(237)] || document[k(221) + k(255) + k(264)] || document[k(174) + k(298)] || document[k(267) + k(276)];
          U[k(291)][k(279) + k(240)](!!N), G[k(291)][k(279) + k(240)](!!N), G[k(291)][k(270)]();
        } else {
          const N = _0x3c8fb5[k(194) + k(237)] || _0xf2e008[k(221) + k(255) + k(264)] || _0x5d5b6[k(174) + k(298)] || _0x42859c[k(267) + k(276)];
          _0x1f87bc[k(291)][k(279) + k(240)](!!N), _0x1cda11[k(291)][k(279) + k(240)](!!N), _0x515939[k(291)][k(270)]();
        }
      };
      return document[E(200) + E(183)](E(194) + E(245), M), () => {
        const k = E;
        document[k(215) + k(239)](k(194) + k(245), M);
      };
    }
  }, []);
  const Q = {};
  Q[e(212)] = o[e(233)];
  const se = {};
  se[e(250)] = e(206);
  const oe = {};
  oe[e(250)] = e(206);
  const K = {};
  K[e(250)] = e(206);
  const te = {};
  te[e(282)] = 0, te[e(211)] = 0;
  const he = {};
  he[e(230)] = y, he[e(242)] = R;
  const fe = {};
  fe.id = B, fe[e(261)] = "0", fe[e(290)] = e(277);
  const xe = {};
  return xe[e(198)] = 5, q.jsxs(xd, { id: re, children: [b && q.jsx(yd, { children: q.jsx(vd, Q) }), F[e(214)] == 0 ? q.jsxs(q.Fragment, { children: [!A && q.jsxs(bf, { align: e(260), gap: e(168), children: [q.jsx(pr, se), q.jsx(pr, oe), q.jsx(pr, K)] }), q.jsxs(md, { ref: g, id: Y, style: A ? {} : te, children: [s ? q.jsx(bv, { status: he, ref: G, imageRef: h, displayId: f, isMobile: d, isShowDeviceId: b, onSenData: (E, M) => {
    const k = e;
    E === Ds && M[k(286)] === k(233) ? p(!b) : E === Ds && M[k(286)] === k(178) ? l(o[k(233)]) : k(272) !== k(272) ? _0x304c9d((N) => [...N, _0x501e98]) : J(M);
  } }) : null, q.jsx(hv, { canvasContent: fe, imageRef: h, isMobile: d, assistive: y, onImgEvent: (E, M) => {
    const k = e;
    if (k(186) !== k(186)) _0x3a5207(!_0x1de669);
    else if (E === Gf) {
      const N = { ...y };
      N[k(253)] = !1, R(N);
    } else if (k(284) === k(284)) J(M);
    else {
      const N = { ..._0x22b34b };
      N[k(253)] = !1, _0x41169b(N);
    }
  } })] })] }) : F[e(204)]((E, M) => q.jsx(mf, { style: xe, message: E[e(274)], type: E[e(217)], showIcon: !0, closable: !0 }, M))] });
});
(function(t, n) {
  for (var e = Bs, r = t(); ; )
    try {
      var o = -parseInt(e(338)) / 1 + parseInt(e(340)) / 2 * (-parseInt(e(345)) / 3) + parseInt(e(344)) / 4 + parseInt(e(343)) / 5 + parseInt(e(341)) / 6 + parseInt(e(339)) / 7 + -parseInt(e(342)) / 8;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 891844);
function Bs(t, n) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 338;
    var i = e[r];
    return i;
  }, Bs(t, n);
}
function Bo() {
  var t = ["120UHASvU", "886382zuABXX", "5629092XXyzUs", "56186uWOoEn", "6082740yPOIDI", "4917976bUnbKW", "7610055kQxatB", "706944LAkovy"];
  return Bo = function() {
    return t;
  }, Bo();
}
export {
  Wv as ViewRP
};
