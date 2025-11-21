var Wd = Object.defineProperty;
var Gd = (e, n, t) => n in e ? Wd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var We = (e, n, t) => Gd(e, typeof n != "symbol" ? n + "" : n, t);
import * as C from "react";
import W, { useDebugValue as bc, createElement as Xd, useRef as ye, useContext as Et, createContext as ui, useEffect as Ve, isValidElement as Yd, version as Kd, useLayoutEffect as Jd, forwardRef as or, useState as ut, useMemo as Nr, Children as Qd, useImperativeHandle as Ou } from "react";
import * as Tu from "react-dom";
import yc from "react-dom";
var wr = jo;
(function(e, n) {
  for (var t = jo, r = e(); ; )
    try {
      var o = parseInt(t(259)) / 1 + parseInt(t(257)) / 2 + parseInt(t(250)) / 3 + parseInt(t(251)) / 4 + parseInt(t(256)) / 5 + -parseInt(t(255)) / 6 + -parseInt(t(258)) / 7 * (parseInt(t(237)) / 8);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 313821);
function jo(e, n) {
  var t = Mo();
  return jo = function(r, o) {
    r = r - 235;
    var i = t[r];
    return i;
  }, jo(e, n);
}
typeof globalThis !== wr(239) || typeof window !== wr(239) || (typeof global !== wr(239) ? global : wr(239));
function Mo() {
  var e = ["undefined", "ptor", "length", "value", "keys", "YgEuW", "function", "hasOwnProp", "defineProp", "forEach", "apply", "78609AalNms", "61648ZpyKtA", "getOwnProp", "ertyDescri", "get", "3452586FsFufJ", "2796215IhbRRp", "528558CtFVLE", "84VfRTBm", "240139xbdduN", "default", "construct", "DFBcw", "__esModule", "call", "prototype", "erty", "144016OezBWz", "constructo"];
  return Mo = function() {
    return e;
  }, Mo();
}
function Zd(e) {
  var n = wr;
  return e && e[n(263)] && Object[n(235)][n(246) + n(236)][n(264)](e, n(260)) ? e[n(260)] : e;
}
var Yr = { exports: {} }, pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function eh() {
  if (_c) return pr;
  _c = 1;
  var e = W, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, h = null, g = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: n, type: a, key: h, ref: g, props: f, _owner: o.current };
  }
  return pr.Fragment = t, pr.jsx = s, pr.jsxs = s, pr;
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
var Sc;
function th() {
  return Sc || (Sc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = W, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), d = Symbol.iterator, m = "@@iterator";
    function p(v) {
      if (v === null || typeof v != "object")
        return null;
      var M = d && v[d] || v[m];
      return typeof M == "function" ? M : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(v) {
      {
        for (var M = arguments.length, q = new Array(M > 1 ? M - 1 : 0), se = 1; se < M; se++)
          q[se - 1] = arguments[se];
        w("error", v, q);
      }
    }
    function w(v, M, q) {
      {
        var se = b.ReactDebugCurrentFrame, Se = se.getStackAddendum();
        Se !== "" && (M += "%s", q = q.concat([Se]));
        var Te = q.map(function(ge) {
          return String(ge);
        });
        Te.unshift("Warning: " + M), Function.prototype.apply.call(console[v], console, Te);
      }
    }
    var O = !1, x = !1, T = !1, _ = !1, j = !1, L;
    L = Symbol.for("react.module.reference");
    function X(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === i || j || v === o || v === l || v === u || _ || v === g || O || x || T || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === L || v.getModuleId !== void 0));
    }
    function ne(v, M, q) {
      var se = v.displayName;
      if (se)
        return se;
      var Se = M.displayName || M.name || "";
      return Se !== "" ? q + "(" + Se + ")" : q;
    }
    function ee(v) {
      return v.displayName || "Context";
    }
    function z(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
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
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var M = v;
            return ee(M) + ".Consumer";
          case s:
            var q = v;
            return ee(q._context) + ".Provider";
          case c:
            return ne(v, v.render, "ForwardRef");
          case f:
            var se = v.displayName || null;
            return se !== null ? se : z(v.type) || "Memo";
          case h: {
            var Se = v, Te = Se._payload, ge = Se._init;
            try {
              return z(ge(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, Q = 0, I, A, $, N, B, H, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Z() {
      {
        if (Q === 0) {
          I = console.log, A = console.info, $ = console.warn, N = console.error, B = console.group, H = console.groupCollapsed, K = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        Q++;
      }
    }
    function ce() {
      {
        if (Q--, Q === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, v, {
              value: I
            }),
            info: G({}, v, {
              value: A
            }),
            warn: G({}, v, {
              value: $
            }),
            error: G({}, v, {
              value: N
            }),
            group: G({}, v, {
              value: B
            }),
            groupCollapsed: G({}, v, {
              value: H
            }),
            groupEnd: G({}, v, {
              value: K
            })
          });
        }
        Q < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = b.ReactCurrentDispatcher, de;
    function Ee(v, M, q) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (Se) {
            var se = Se.stack.trim().match(/\n( *(at )?)/);
            de = se && se[1] || "";
          }
        return `
` + de + v;
      }
    }
    var be = !1, Ne;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Pe();
    }
    function pe(v, M) {
      if (!v || be)
        return "";
      {
        var q = Ne.get(v);
        if (q !== void 0)
          return q;
      }
      var se;
      be = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = ue.current, ue.current = null, Z();
      try {
        if (M) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (dt) {
              se = dt;
            }
            Reflect.construct(v, [], ge);
          } else {
            try {
              ge.call();
            } catch (dt) {
              se = dt;
            }
            v.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            se = dt;
          }
          v();
        }
      } catch (dt) {
        if (dt && se && typeof dt.stack == "string") {
          for (var xe = dt.stack.split(`
`), st = se.stack.split(`
`), Be = xe.length - 1, ze = st.length - 1; Be >= 1 && ze >= 0 && xe[Be] !== st[ze]; )
            ze--;
          for (; Be >= 1 && ze >= 0; Be--, ze--)
            if (xe[Be] !== st[ze]) {
              if (Be !== 1 || ze !== 1)
                do
                  if (Be--, ze--, ze < 0 || xe[Be] !== st[ze]) {
                    var Fe = `
` + xe[Be].replace(" at new ", " at ");
                    return v.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", v.displayName)), typeof v == "function" && Ne.set(v, Fe), Fe;
                  }
                while (Be >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        be = !1, ue.current = Te, ce(), Error.prepareStackTrace = Se;
      }
      var Ln = v ? v.displayName || v.name : "", Sn = Ln ? Ee(Ln) : "";
      return typeof v == "function" && Ne.set(v, Sn), Sn;
    }
    function Ke(v, M, q) {
      return pe(v, !1);
    }
    function S(v) {
      var M = v.prototype;
      return !!(M && M.isReactComponent);
    }
    function F(v, M, q) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return pe(v, S(v));
      if (typeof v == "string")
        return Ee(v);
      switch (v) {
        case l:
          return Ee("Suspense");
        case u:
          return Ee("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return Ke(v.render);
          case f:
            return F(v.type, M, q);
          case h: {
            var se = v, Se = se._payload, Te = se._init;
            try {
              return F(Te(Se), M, q);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, V = {}, R = b.ReactDebugCurrentFrame;
    function re(v) {
      if (v) {
        var M = v._owner, q = F(v.type, v._source, M ? M.type : null);
        R.setExtraStackFrame(q);
      } else
        R.setExtraStackFrame(null);
    }
    function oe(v, M, q, se, Se) {
      {
        var Te = Function.call.bind(k);
        for (var ge in v)
          if (Te(v, ge)) {
            var xe = void 0;
            try {
              if (typeof v[ge] != "function") {
                var st = Error((se || "React class") + ": " + q + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              xe = v[ge](M, ge, se, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              xe = Be;
            }
            xe && !(xe instanceof Error) && (re(Se), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", q, ge, typeof xe), re(null)), xe instanceof Error && !(xe.message in V) && (V[xe.message] = !0, re(Se), y("Failed %s type: %s", q, xe.message), re(null));
          }
      }
    }
    var le = Array.isArray;
    function Oe(v) {
      return le(v);
    }
    function Je(v) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, q = M && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return q;
      }
    }
    function ft(v) {
      try {
        return lt(v), !1;
      } catch {
        return !0;
      }
    }
    function lt(v) {
      return "" + v;
    }
    function Jt(v) {
      if (ft(v))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(v)), lt(v);
    }
    var Rt = b.ReactCurrentOwner, Qt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Ht;
    function Zt(v) {
      if (k.call(v, "ref")) {
        var M = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function en(v) {
      if (k.call(v, "key")) {
        var M = Object.getOwnPropertyDescriptor(v, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function tn(v, M) {
      typeof v.ref == "string" && Rt.current;
    }
    function zt(v, M) {
      {
        var q = function() {
          Bt || (Bt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        q.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function ke(v, M) {
      {
        var q = function() {
          Ht || (Ht = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        q.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var at = function(v, M, q, se, Se, Te, ge) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: v,
        key: M,
        ref: q,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function Ft(v, M, q, se, Se) {
      {
        var Te, ge = {}, xe = null, st = null;
        q !== void 0 && (Jt(q), xe = "" + q), en(M) && (Jt(M.key), xe = "" + M.key), Zt(M) && (st = M.ref, tn(M, Se));
        for (Te in M)
          k.call(M, Te) && !Qt.hasOwnProperty(Te) && (ge[Te] = M[Te]);
        if (v && v.defaultProps) {
          var Be = v.defaultProps;
          for (Te in Be)
            ge[Te] === void 0 && (ge[Te] = Be[Te]);
        }
        if (xe || st) {
          var ze = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          xe && zt(ge, ze), st && ke(ge, ze);
        }
        return at(v, xe, st, Se, se, Rt.current, ge);
      }
    }
    var D = b.ReactCurrentOwner, E = b.ReactDebugCurrentFrame;
    function me(v) {
      if (v) {
        var M = v._owner, q = F(v.type, v._source, M ? M.type : null);
        E.setExtraStackFrame(q);
      } else
        E.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Me(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function ie() {
      {
        if (D.current) {
          var v = z(D.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Ie(v) {
      return "";
    }
    var Ze = {};
    function At(v) {
      {
        var M = ie();
        if (!M) {
          var q = typeof v == "string" ? v : v.displayName || v.name;
          q && (M = `

Check the top-level render call using <` + q + ">.");
        }
        return M;
      }
    }
    function yt(v, M) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var q = At(M);
        if (Ze[q])
          return;
        Ze[q] = !0;
        var se = "";
        v && v._owner && v._owner !== D.current && (se = " It was passed a child from " + z(v._owner.type) + "."), me(v), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, se), me(null);
      }
    }
    function un(v, M) {
      {
        if (typeof v != "object")
          return;
        if (Oe(v))
          for (var q = 0; q < v.length; q++) {
            var se = v[q];
            Me(se) && yt(se, M);
          }
        else if (Me(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Se = p(v);
          if (typeof Se == "function" && Se !== v.entries)
            for (var Te = Se.call(v), ge; !(ge = Te.next()).done; )
              Me(ge.value) && yt(ge.value, M);
        }
      }
    }
    function Vt(v) {
      {
        var M = v.type;
        if (M == null || typeof M == "string")
          return;
        var q;
        if (typeof M == "function")
          q = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === f))
          q = M.propTypes;
        else
          return;
        if (q) {
          var se = z(M);
          oe(q, v.props, "prop", se, v);
        } else if (M.PropTypes !== void 0 && !_e) {
          _e = !0;
          var Se = z(M);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ue(v) {
      {
        for (var M = Object.keys(v.props), q = 0; q < M.length; q++) {
          var se = M[q];
          if (se !== "children" && se !== "key") {
            me(v), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), me(null);
            break;
          }
        }
        v.ref !== null && (me(v), y("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    var et = {};
    function $t(v, M, q, se, Se, Te) {
      {
        var ge = X(v);
        if (!ge) {
          var xe = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = Ie();
          st ? xe += st : xe += ie();
          var Be;
          v === null ? Be = "null" : Oe(v) ? Be = "array" : v !== void 0 && v.$$typeof === n ? (Be = "<" + (z(v.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof v, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, xe);
        }
        var ze = Ft(v, M, q, Se, Te);
        if (ze == null)
          return ze;
        if (ge) {
          var Fe = M.children;
          if (Fe !== void 0)
            if (se)
              if (Oe(Fe)) {
                for (var Ln = 0; Ln < Fe.length; Ln++)
                  un(Fe[Ln], v);
                Object.freeze && Object.freeze(Fe);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              un(Fe, v);
        }
        if (k.call(M, "key")) {
          var Sn = z(v), dt = Object.keys(M).filter(function(Ud) {
            return Ud !== "key";
          }), Xi = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!et[Sn + Xi]) {
            var qd = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xi, Sn, qd, Sn), et[Sn + Xi] = !0;
          }
        }
        return v === r ? Ue(ze) : Vt(ze), ze;
      }
    }
    function De(v, M, q) {
      return $t(v, M, q, !0);
    }
    function Xr(v, M, q) {
      return $t(v, M, q, !1);
    }
    var Gi = Xr, He = De;
    gr.Fragment = r, gr.jsx = Gi, gr.jsxs = He;
  }()), gr;
}
var Cc;
function nh() {
  return Cc || (Cc = 1, process.env.NODE_ENV === "production" ? Yr.exports = eh() : Yr.exports = th()), Yr.exports;
}
var U = nh(), ht = function() {
  return ht = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ht.apply(this, arguments);
};
function Un(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function rh(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var oh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ih = /* @__PURE__ */ rh(
  function(e) {
    return oh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Le = "-ms-", Rr = "-moz-", $e = "-webkit-", Ru = "comm", fi = "rule", La = "decl", sh = "@import", Au = "@keyframes", ah = "@layer", $u = Math.abs, Da = String.fromCharCode, Ts = Object.assign;
function ch(e, n) {
  return it(e, 0) ^ 45 ? (((n << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function Pu(e) {
  return e.trim();
}
function rn(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function he(e, n, t) {
  return e.replace(n, t);
}
function po(e, n, t) {
  return e.indexOf(n, t);
}
function it(e, n) {
  return e.charCodeAt(n) | 0;
}
function Wn(e, n, t) {
  return e.slice(n, t);
}
function Wt(e) {
  return e.length;
}
function Iu(e) {
  return e.length;
}
function Er(e, n) {
  return n.push(e), e;
}
function lh(e, n) {
  return e.map(n).join("");
}
function wc(e, n) {
  return e.filter(function(t) {
    return !rn(t, n);
  });
}
var di = 1, Gn = 1, Nu = 0, Ot = 0, Ge = 0, ir = "";
function hi(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: di, column: Gn, length: s, return: "", siblings: a };
}
function fn(e, n) {
  return Ts(hi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function Dn(e) {
  for (; e.root; )
    e = fn(e.root, { children: [e] });
  Er(e, e.siblings);
}
function uh() {
  return Ge;
}
function fh() {
  return Ge = Ot > 0 ? it(ir, --Ot) : 0, Gn--, Ge === 10 && (Gn = 1, di--), Ge;
}
function kt() {
  return Ge = Ot < Nu ? it(ir, Ot++) : 0, Gn++, Ge === 10 && (Gn = 1, di++), Ge;
}
function Rn() {
  return it(ir, Ot);
}
function go() {
  return Ot;
}
function xi(e, n) {
  return Wn(ir, e, n);
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
function dh(e) {
  return di = Gn = 1, Nu = Wt(ir = e), Ot = 0, [];
}
function hh(e) {
  return ir = "", e;
}
function Yi(e) {
  return Pu(xi(Ot - 1, As(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xh(e) {
  for (; (Ge = Rn()) && Ge < 33; )
    kt();
  return Rs(e) > 2 || Rs(Ge) > 3 ? "" : " ";
}
function ph(e, n) {
  for (; --n && kt() && !(Ge < 48 || Ge > 102 || Ge > 57 && Ge < 65 || Ge > 70 && Ge < 97); )
    ;
  return xi(e, go() + (n < 6 && Rn() == 32 && kt() == 32));
}
function As(e) {
  for (; kt(); )
    switch (Ge) {
      // ] ) " '
      case e:
        return Ot;
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
        kt();
        break;
    }
  return Ot;
}
function gh(e, n) {
  for (; kt() && e + Ge !== 57; )
    if (e + Ge === 84 && Rn() === 47)
      break;
  return "/*" + xi(n, Ot - 1) + "*" + Da(e === 47 ? e : kt());
}
function mh(e) {
  for (; !Rs(Rn()); )
    kt();
  return xi(e, Ot);
}
function vh(e) {
  return hh(mo("", null, null, null, [""], e = dh(e), 0, [0], e));
}
function mo(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, h = 0, g = 0, d = 0, m = 1, p = 1, b = 1, y = 0, w = "", O = o, x = i, T = r, _ = w; p; )
    switch (d = y, y = kt()) {
      // (
      case 40:
        if (d != 108 && it(_, f - 1) == 58) {
          po(_ += he(Yi(y), "&", "&\f"), "&\f", $u(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Yi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += xh(d);
        break;
      // \
      case 92:
        _ += ph(go() - 1, 7);
        continue;
      // /
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            Er(bh(gh(kt(), go()), n, t, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = Wt(_) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (_ = he(_, /\f/g, "")), g > 0 && Wt(_) - f && Er(g > 32 ? Oc(_ + ";", r, t, f - 1, c) : Oc(he(_, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (Er(T = Ec(_, n, t, l, u, o, a, w, O = [], x = [], f, i), i), y === 123)
              if (u === 0)
                mo(_, n, T, T, O, i, f, a, x);
              else
                switch (h === 99 && it(_, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mo(e, T, T, r && Er(Ec(e, T, T, 0, 0, o, a, w, o, O = [], f, x), x), o, x, f, a, r ? O : x);
                    break;
                  default:
                    mo(_, T, T, T, [""], x, 0, a, x);
                }
        }
        l = u = g = 0, m = b = 1, w = _ = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Wt(_), g = d;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && fh() == 125)
            continue;
        }
        switch (_ += Da(y), y * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Wt(_) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Rn() === 45 && (_ += Yi(kt())), h = Rn(), u = f = Wt(w = _ += mh(go())), y++;
            break;
          // -
          case 45:
            d === 45 && Wt(_) == 2 && (m = 0);
        }
    }
  return i;
}
function Ec(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var h = o - 1, g = o === 0 ? i : [""], d = Iu(g), m = 0, p = 0, b = 0; m < r; ++m)
    for (var y = 0, w = Wn(e, h + 1, h = $u(p = s[m])), O = e; y < d; ++y)
      (O = Pu(p > 0 ? g[y] + " " + w : he(w, /&\f/g, g[y]))) && (c[b++] = O);
  return hi(e, n, t, o === 0 ? fi : a, c, l, u, f);
}
function bh(e, n, t, r) {
  return hi(e, n, t, Ru, Da(uh()), Wn(e, 2, -2), 0, r);
}
function Oc(e, n, t, r, o) {
  return hi(e, n, t, La, Wn(e, 0, r), Wn(e, r + 1, -1), r, o);
}
function ku(e, n, t) {
  switch (ch(e, n)) {
    // color-adjust
    case 5103:
      return $e + "print-" + e + e;
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
      return $e + e + e;
    // tab-size
    case 4789:
      return Rr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + e + Rr + e + Le + e + e;
    // writing-mode
    case 5936:
      switch (it(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return $e + e + Le + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return $e + e + Le + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return $e + e + Le + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return $e + e + Le + e + e;
    // order
    case 6165:
      return $e + e + Le + "flex-" + e + e;
    // align-items
    case 5187:
      return $e + e + he(e, /(\w+).+(:[^]+)/, $e + "box-$1$2" + Le + "flex-$1$2") + e;
    // align-self
    case 5443:
      return $e + e + Le + "flex-item-" + he(e, /flex-|-self/g, "") + (rn(e, /flex-|baseline/) ? "" : Le + "grid-row-" + he(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return $e + e + Le + "flex-line-pack" + he(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return $e + e + Le + he(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return $e + e + Le + he(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return $e + "box-" + he(e, "-grow", "") + $e + e + Le + he(e, "grow", "positive") + e;
    // transition
    case 4554:
      return $e + he(e, /([^-])(transform)/g, "$1" + $e + "$2") + e;
    // cursor
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, $e + "$1$`$1");
    // justify-content
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + Le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + e + e;
    // justify-self
    case 4200:
      if (!rn(e, /flex-|baseline/)) return Le + "grid-column-align" + Wn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Le + he(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, rn(r.props, /grid-\w+-end/);
      }) ? ~po(e + (t = t[n].value), "span", 0) ? e : Le + he(e, "-start", "") + e + Le + "grid-row-span:" + (~po(t, "span", 0) ? rn(t, /\d+/) : +rn(t, /\d+/) - +rn(e, /\d+/)) + ";" : Le + he(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return rn(r.props, /grid-\w+-start/);
      }) ? e : Le + he(he(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return he(e, /(.+)-inline(.+)/, $e + "$1$2") + e;
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
      if (Wt(e) - 1 - n > 6)
        switch (it(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (it(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + Rr + (it(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~po(e, "stretch", 0) ? ku(he(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return he(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Le + o + ":" + i + l + (s ? Le + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (it(e, n + 6) === 121)
        return he(e, ":", ":" + $e) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (it(e, it(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return he(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $e + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + Le + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return he(e, ":", ":" + Le) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return he(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Lo(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function yh(e, n, t, r) {
  switch (e.type) {
    case ah:
      if (e.children.length) break;
    case sh:
    case La:
      return e.return = e.return || e.value;
    case Ru:
      return "";
    case Au:
      return e.return = e.value + "{" + Lo(e.children, r) + "}";
    case fi:
      if (!Wt(e.value = e.props.join(","))) return "";
  }
  return Wt(t = Lo(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function _h(e) {
  var n = Iu(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function Sh(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function Ch(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case La:
        e.return = ku(e.value, e.length, t);
        return;
      case Au:
        return Lo([fn(e, { value: he(e.value, "@", "@" + $e) })], r);
      case fi:
        if (e.length)
          return lh(t = e.props, function(o) {
            switch (rn(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Dn(fn(e, { props: [he(o, /:(read-\w+)/, ":" + Rr + "$1")] })), Dn(fn(e, { props: [o] })), Ts(e, { props: wc(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                Dn(fn(e, { props: [he(o, /:(plac\w+)/, ":" + $e + "input-$1")] })), Dn(fn(e, { props: [he(o, /:(plac\w+)/, ":" + Rr + "$1")] })), Dn(fn(e, { props: [he(o, /:(plac\w+)/, Le + "input-$1")] })), Dn(fn(e, { props: [o] })), Ts(e, { props: wc(t, r) });
                break;
            }
            return "";
          });
    }
}
var wh = {
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
}, kn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ju = "active", Mu = "data-styled-version", pi = "6.1.18", Ba = `/*!sc*/
`, Do = typeof window < "u" && typeof document < "u", Eh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Tc = /invalid hook call/i, Kr = /* @__PURE__ */ new Set(), Oh = function(e, n) {
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
        Tc.test(s) ? (i = !1, Kr.delete(r)) : o.apply(void 0, Un([s], a, !1));
      }, ye(), i && !Kr.has(r) && (console.warn(r), Kr.add(r));
    } catch (s) {
      Tc.test(s.message) && Kr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, gi = Object.freeze([]), Xn = Object.freeze({});
function Th(e, n, t) {
  return t === void 0 && (t = Xn), e.theme !== t.theme && e.theme || n || t.theme;
}
var $s = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Rh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ah = /(^-|-$)/g;
function Rc(e) {
  return e.replace(Rh, "-").replace(Ah, "");
}
var $h = /(a)(d)/gi, Jr = 52, Ac = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ps(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Jr; n = n / Jr | 0) t = Ac(n % Jr) + t;
  return (Ac(n % Jr) + t).replace($h, "$1-$2");
}
var Ki, Lu = 5381, wn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Du = function(e) {
  return wn(Lu, e);
};
function Ph(e) {
  return Ps(Du(e) >>> 0);
}
function Bu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ji(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Hu = typeof Symbol == "function" && Symbol.for, zu = Hu ? Symbol.for("react.memo") : 60115, Ih = Hu ? Symbol.for("react.forward_ref") : 60112, Nh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, kh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Fu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, jh = ((Ki = {})[Ih] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[zu] = Fu, Ki);
function $c(e) {
  return ("type" in (n = e) && n.type.$$typeof) === zu ? Fu : "$$typeof" in e ? jh[e.$$typeof] : Nh;
  var n;
}
var Mh = Object.defineProperty, Lh = Object.getOwnPropertyNames, Pc = Object.getOwnPropertySymbols, Dh = Object.getOwnPropertyDescriptor, Bh = Object.getPrototypeOf, Ic = Object.prototype;
function Vu(e, n, t) {
  if (typeof n != "string") {
    if (Ic) {
      var r = Bh(n);
      r && r !== Ic && Vu(e, r, t);
    }
    var o = Lh(n);
    Pc && (o = o.concat(Pc(n)));
    for (var i = $c(e), s = $c(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in kh || t && t[c] || s && c in s || i && c in i)) {
        var l = Dh(n, c);
        try {
          Mh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Yn(e) {
  return typeof e == "function";
}
function Ha(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function On(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Nc(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Kn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Is(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Kn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Is(e[r], n[r]);
  else if (Kn(n)) for (var r in n) e[r] = Is(e[r], n[r]);
  return e;
}
function za(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var Hh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zh() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function sr(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(zh.apply(void 0, Un([Hh[e]], n, !1)).trim());
}
var Fh = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw sr(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Ba);
    return t;
  }, e;
}(), Vh = 1 << 30, vo = /* @__PURE__ */ new Map(), Bo = /* @__PURE__ */ new Map(), bo = 1, Qr = function(e) {
  if (vo.has(e)) return vo.get(e);
  for (; Bo.has(bo); ) bo++;
  var n = bo++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > Vh)) throw sr(16, "".concat(n));
  return vo.set(e, n), Bo.set(n, e), n;
}, qh = function(e, n) {
  bo = n + 1, vo.set(e, n), Bo.set(n, e);
}, Uh = "style[".concat(kn, "][").concat(Mu, '="').concat(pi, '"]'), Wh = new RegExp("^".concat(kn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gh = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, Xh = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ba), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Wh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (qh(u, l), Gh(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, kc = function(e) {
  for (var n = document.querySelectorAll(Uh), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(kn) !== ju && (Xh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Yh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qu = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(kn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(kn, ju), r.setAttribute(Mu, pi);
  var s = Yh();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, Kh = function() {
  function e(n) {
    this.element = qu(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw sr(17);
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
}(), Jh = function() {
  function e(n) {
    this.element = qu(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Qh = function() {
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
}(), jc = Do, Zh = { isServer: !Do, useCSSOMInjection: !Eh }, Uu = function() {
  function e(n, t, r) {
    n === void 0 && (n = Xn), t === void 0 && (t = {});
    var o = this;
    this.options = ht(ht({}, Zh), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && Do && jc && (jc = !1, kc(this)), za(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var h = function(b) {
            return Bo.get(b);
          }(f);
          if (h === void 0) return "continue";
          var g = i.names.get(h), d = s.getGroup(f);
          if (g === void 0 || !g.size || d.length === 0) return "continue";
          var m = "".concat(kn, ".g").concat(f, '[id="').concat(h, '"]'), p = "";
          g !== void 0 && g.forEach(function(b) {
            b.length > 0 && (p += "".concat(b, ","));
          }), c += "".concat(d).concat(m, '{content:"').concat(p, '"}').concat(Ba);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Qr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && Do && kc(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(ht(ht({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Qh(o) : r ? new Kh(o) : new Jh(o);
    }(this.options), new Fh(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (Qr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(Qr(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Qr(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ex = /&/g, tx = /^\s*\/\/.*$/gm;
function Wu(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Wu(t.children, n)), t;
  });
}
function nx(e) {
  var n, t, r, o = Xn, i = o.options, s = i === void 0 ? Xn : i, a = o.plugins, c = a === void 0 ? gi : a, l = function(h, g, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > 0 ? ".".concat(n) : h;
  }, u = c.slice();
  u.push(function(h) {
    h.type === fi && h.value.includes("&") && (h.props[0] = h.props[0].replace(ex, t).replace(r, l));
  }), s.prefix && u.push(Ch), u.push(yh);
  var f = function(h, g, d, m) {
    g === void 0 && (g = ""), d === void 0 && (d = ""), m === void 0 && (m = "&"), n = m, t = g, r = new RegExp("\\".concat(t, "\\b"), "g");
    var p = h.replace(tx, ""), b = vh(d || g ? "".concat(d, " ").concat(g, " { ").concat(p, " }") : p);
    s.namespace && (b = Wu(b, s.namespace));
    var y = [];
    return Lo(b, _h(u.concat(Sh(function(w) {
      return y.push(w);
    })))), y;
  };
  return f.hash = c.length ? c.reduce(function(h, g) {
    return g.name || sr(15), wn(h, g.name);
  }, Lu).toString() : "", f;
}
var rx = new Uu(), Ns = nx(), Gu = W.createContext({ shouldForwardProp: void 0, styleSheet: rx, stylis: Ns });
Gu.Consumer;
W.createContext(void 0);
function Mc() {
  return Et(Gu);
}
var Lc = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ns);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, za(this, function() {
      throw sr(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ns), this.name + n.hash;
  }, e;
}(), ox = function(e) {
  return e >= "A" && e <= "Z";
};
function Dc(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    ox(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Xu = function(e) {
  return e == null || e === !1 || e === "";
}, Yu = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Xu(i) && (Array.isArray(i) && i.isCss || Yn(i) ? r.push("".concat(Dc(o), ":"), i, ";") : Kn(i) ? r.push.apply(r, Un(Un(["".concat(o, " {")], Yu(i), !1), ["}"], !1)) : r.push("".concat(Dc(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in wh || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function An(e, n, t, r) {
  if (Xu(e)) return [];
  if (Ha(e)) return [".".concat(e.styledComponentId)];
  if (Yn(e)) {
    if (!Yn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Lc || Kn(o) || o === null || console.error("".concat(Bu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), An(o, n, t, r);
  }
  var i;
  return e instanceof Lc ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Kn(e) ? Yu(e) : Array.isArray(e) ? Array.prototype.concat.apply(gi, e.map(function(s) {
    return An(s, n, t, r);
  })) : [e.toString()];
}
function ix(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Yn(t) && !Ha(t)) return !1;
  }
  return !0;
}
var sx = Du(pi), ax = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ix(n), this.componentId = t, this.baseHash = wn(sx, t), this.baseStyle = r, Uu.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = On(o, this.staticRulesId);
    else {
      var i = Nc(An(this.rules, n, t, r)), s = Ps(wn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = On(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = wn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = wn(c, f));
        else if (f) {
          var h = Nc(An(f, n, t, r));
          c = wn(c, h + u), l += h;
        }
      }
      if (l) {
        var g = Ps(c >>> 0);
        t.hasNameForId(this.componentId, g) || t.insertRules(this.componentId, g, r(l, ".".concat(g), void 0, this.componentId)), o = On(o, g);
      }
    }
    return o;
  }, e;
}(), Ku = W.createContext(void 0);
Ku.Consumer;
var Qi = {}, Bc = /* @__PURE__ */ new Set();
function cx(e, n, t) {
  var r = Ha(e), o = e, i = !Ji(e), s = n.attrs, a = s === void 0 ? gi : s, c = n.componentId, l = c === void 0 ? function(O, x) {
    var T = typeof O != "string" ? "sc" : Rc(O);
    Qi[T] = (Qi[T] || 0) + 1;
    var _ = "".concat(T, "-").concat(Ph(pi + T + Qi[T]));
    return x ? "".concat(x, "-").concat(_) : _;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, f = u === void 0 ? function(O) {
    return Ji(O) ? "styled.".concat(O) : "Styled(".concat(Bu(O), ")");
  }(e) : u, h = n.displayName && n.componentId ? "".concat(Rc(n.displayName), "-").concat(n.componentId) : n.componentId || l, g = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, d = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var p = n.shouldForwardProp;
      d = function(O, x) {
        return m(O, x) && p(O, x);
      };
    } else d = m;
  }
  var b = new ax(t, h, r ? o.componentStyle : void 0);
  function y(O, x) {
    return function(T, _, j) {
      var L = T.attrs, X = T.componentStyle, ne = T.defaultProps, ee = T.foldedComponentIds, z = T.styledComponentId, G = T.target, Q = W.useContext(Ku), I = Mc(), A = T.shouldForwardProp || I.shouldForwardProp;
      process.env.NODE_ENV !== "production" && bc(z);
      var $ = Th(_, Q, ne) || Xn, N = function(ce, ue, de) {
        for (var Ee, be = ht(ht({}, ue), { className: void 0, theme: de }), Ne = 0; Ne < ce.length; Ne += 1) {
          var Pe = Yn(Ee = ce[Ne]) ? Ee(be) : Ee;
          for (var pe in Pe) be[pe] = pe === "className" ? On(be[pe], Pe[pe]) : pe === "style" ? ht(ht({}, be[pe]), Pe[pe]) : Pe[pe];
        }
        return ue.className && (be.className = On(be.className, ue.className)), be;
      }(L, _, $), B = N.as || G, H = {};
      for (var K in N) N[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && N.theme === $ || (K === "forwardedAs" ? H.as = N.forwardedAs : A && !A(K, B) || (H[K] = N[K], A || process.env.NODE_ENV !== "development" || ih(K) || Bc.has(K) || !$s.has(B) || (Bc.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ce, ue) {
        var de = Mc(), Ee = ce.generateAndInjectStyles(ue, de.styleSheet, de.stylis);
        return process.env.NODE_ENV !== "production" && bc(Ee), Ee;
      }(X, N);
      process.env.NODE_ENV !== "production" && T.warnTooManyClasses && T.warnTooManyClasses(te);
      var Z = On(ee, z);
      return te && (Z += " " + te), N.className && (Z += " " + N.className), H[Ji(B) && !$s.has(B) ? "class" : "className"] = Z, j && (H.ref = j), Xd(B, H);
    }(w, O, x);
  }
  y.displayName = f;
  var w = W.forwardRef(y);
  return w.attrs = g, w.componentStyle = b, w.displayName = f, w.shouldForwardProp = d, w.foldedComponentIds = r ? On(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = h, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? function(x) {
      for (var T = [], _ = 1; _ < arguments.length; _++) T[_ - 1] = arguments[_];
      for (var j = 0, L = T; j < L.length; j++) Is(x, L[j], !0);
      return x;
    }({}, o.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (Oh(f, h), w.warnTooManyClasses = /* @__PURE__ */ function(O, x) {
    var T = {}, _ = !1;
    return function(j) {
      if (!_ && (T[j] = !0, Object.keys(T).length >= 200)) {
        var L = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(L, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, T = {};
      }
    };
  }(f, h)), za(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && Vu(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Hc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var zc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lx(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Yn(e) || Kn(e)) return zc(An(Hc(gi, Un([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? An(r) : zc(An(Hc(r, n)));
}
function ks(e, n, t) {
  if (t === void 0 && (t = Xn), !n) throw sr(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, lx.apply(void 0, Un([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ks(e, n, ht(ht({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ks(e, n, ht(ht({}, t), o));
  }, r;
}
var Ju = function(e) {
  return ks(cx, e);
}, Kt = Ju;
$s.forEach(function(e) {
  Kt[e] = Ju(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Zr = "__sc-".concat(kn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Zr] || (window[Zr] = 0), window[Zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Zr] += 1);
const mi = zo;
function Ho() {
  const e = ["9MLXLmC", "4986016rayOyw", "623078vmSOzT", "990723MktjHx", "span", "81956nsghMQ", "div", "canvas", "616WqtwSJ", "24maBgfN", "612662UWKXby", "2890rtTnMX", "13664260TtONhH"];
  return Ho = function() {
    return e;
  }, Ho();
}
(function(e, n) {
  const t = zo, r = e();
  for (; ; )
    try {
      if (parseInt(t(360)) / 1 + parseInt(t(365)) / 2 + parseInt(t(366)) / 3 + -parseInt(t(358)) / 4 * (parseInt(t(361)) / 5) + parseInt(t(359)) / 6 * (-parseInt(t(368)) / 7) + parseInt(t(364)) / 8 + parseInt(t(363)) / 9 * (-parseInt(t(362)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 375424);
const ux = Kt[mi(369)]`
  position: relative;
  /* flex-direction: column; */
  border-radius: 15px;
  /* border: 1px solid #a0beeb; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
  :fullscreen & {
    border: none;
  }
`, fx = Kt[mi(369)]`
  border-radius: 15px;
  position: relative;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  &:focus-visible {
    outline: none;
  }
  :fullscreen & {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`, dx = Kt[mi(370)]`
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function zo(e, n) {
  const t = Ho();
  return zo = function(r, o) {
    return r = r - 358, t[r];
  }, zo(e, n);
}
const Fc = Kt[mi(367)]`
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
  pointer-events: none;
`, Qu = /* @__PURE__ */ ui({});
var Zi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Vc;
function hx() {
  return Vc || (Vc = 1, function(e) {
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
  }(Zi)), Zi.exports;
}
var xx = hx();
const Ce = /* @__PURE__ */ Zd(xx), px = {
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
}, tt = Math.round;
function es(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const qc = (e, n, t) => t === 0 ? e : e / 100;
function mr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let eo = class Zu {
  constructor(n) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    We(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    We(this, "r", 0);
    /**
     * Green, G in RGB
     */
    We(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    We(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    We(this, "a", 1);
    // HSV privates
    We(this, "_h");
    We(this, "_s");
    We(this, "_l");
    We(this, "_v");
    // intermediate variables to calculate HSL/HSV
    We(this, "_max");
    We(this, "_min");
    We(this, "_brightness");
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const i = px[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (n instanceof Zu)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = mr(n.r), this.g = mr(n.g), this.b = mr(n.b), this.a = typeof n.a == "number" ? mr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = tt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: tt(i("r")),
      g: tt(i("g")),
      b: tt(i("b")),
      a: tt(i("a") * 100) / 100
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => tt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = tt(this.a * 255).toString(16);
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
    const n = this.getHue(), t = tt(this.getSaturation() * 100), r = tt(this.getLightness() * 100);
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
    return o[n] = mr(t, r), o;
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
      const h = tt(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = tt((i + f) * 255), this.g = tt((s + f) * 255), this.b = tt((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = tt(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = tt(r * (1 - t) * 255), u = tt(r * (1 - t * c) * 255), f = tt(r * (1 - t * (1 - c)) * 255);
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
    const t = es(n, qc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = es(n, qc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = es(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? tt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
const to = 2, Uc = 0.16, gx = 0.05, mx = 0.05, vx = 0.15, ef = 5, tf = 4, bx = [{
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
function Wc(e, n, t) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - to * n : Math.round(e.h) + to * n : r = t ? Math.round(e.h) + to * n : Math.round(e.h) - to * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Gc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return t ? r = e.s - Uc * n : n === tf ? r = e.s + Uc : r = e.s + gx * n, r > 1 && (r = 1), t && n === ef && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Xc(e, n, t) {
  let r;
  return t ? r = e.v + mx * n : r = e.v - vx * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yx(e, n = {}) {
  const t = [], r = new eo(e), o = r.toHsv();
  for (let i = ef; i > 0; i -= 1) {
    const s = new eo({
      h: Wc(o, i, !0),
      s: Gc(o, i, !0),
      v: Xc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (let i = 1; i <= tf; i += 1) {
    const s = new eo({
      h: Wc(o, i),
      s: Gc(o, i),
      v: Xc(o, i)
    });
    t.push(s);
  }
  return n.theme === "dark" ? bx.map(({
    index: i,
    amount: s
  }) => new eo(n.backgroundColor || "#141414").mix(t[i], s).toHexString()) : t.map((i) => i.toHexString());
}
const js = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
js.primary = js[5];
function _x() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sx(e, n) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(n);
  let t = n;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
const Yc = "data-rc-order", Kc = "data-rc-priority", Cx = "rc-util-key", Ms = /* @__PURE__ */ new Map();
function nf({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Cx;
}
function Fa(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function wx(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Va(e) {
  return Array.from((Ms.get(e) || e).children).filter((n) => n.tagName === "STYLE");
}
function rf(e, n = {}) {
  if (!_x())
    return null;
  const {
    csp: t,
    prepend: r,
    priority: o = 0
  } = n, i = wx(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Yc, i), s && o && a.setAttribute(Kc, `${o}`), t != null && t.nonce && (a.nonce = t == null ? void 0 : t.nonce), a.innerHTML = e;
  const c = Fa(n), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (n.styles || Va(c)).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Yc)))
          return !1;
        const h = Number(f.getAttribute(Kc) || 0);
        return o >= h;
      });
      if (u.length)
        return c.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function Ex(e, n = {}) {
  let {
    styles: t
  } = n;
  return t || (t = Va(Fa(n))), t.find((r) => r.getAttribute(nf(n)) === e);
}
function Ox(e, n) {
  const t = Ms.get(e);
  if (!t || !Sx(document, t)) {
    const r = rf("", n), {
      parentNode: o
    } = r;
    Ms.set(e, o), e.removeChild(r);
  }
}
function Tx(e, n, t = {}) {
  var c, l, u;
  const r = Fa(t), o = Va(r), i = {
    ...t,
    styles: o
  };
  Ox(r, i);
  const s = Ex(n, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = rf(e, i);
  return a.setAttribute(nf(i), n), a;
}
function of(e) {
  var n;
  return (n = e == null ? void 0 : e.getRootNode) == null ? void 0 : n.call(e);
}
function Rx(e) {
  return of(e) instanceof ShadowRoot;
}
function Ax(e) {
  return Rx(e) ? of(e) : null;
}
let Ls = {};
const qa = [], $x = (e) => {
  qa.push(e);
};
function Px(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = qa.reduce((r, o) => o(r ?? "", "warning"), n);
    t && console.error(`Warning: ${t}`);
  }
}
function Ix(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = qa.reduce((r, o) => o(r ?? "", "note"), n);
    t && console.warn(`Note: ${t}`);
  }
}
function Nx() {
  Ls = {};
}
function sf(e, n, t) {
  !n && !Ls[t] && (e(!1, t), Ls[t] = !0);
}
function vi(e, n) {
  sf(Px, e, n);
}
function kx(e, n) {
  sf(Ix, e, n);
}
vi.preMessage = $x;
vi.resetWarned = Nx;
vi.noteOnce = kx;
function jx(e) {
  return e.replace(/-(.)/g, (n, t) => t.toUpperCase());
}
function Mx(e, n) {
  vi(e, `[@ant-design/icons] ${n}`);
}
function Jc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Qc(e = {}) {
  return Object.keys(e).reduce((n, t) => {
    const r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[jx(t)] = r;
    }
    return n;
  }, {});
}
function Ds(e, n, t) {
  return t ? /* @__PURE__ */ W.createElement(e.tag, {
    key: n,
    ...Qc(e.attrs),
    ...t
  }, (e.children || []).map((r, o) => Ds(r, `${n}-${e.tag}-${o}`))) : /* @__PURE__ */ W.createElement(e.tag, {
    key: n,
    ...Qc(e.attrs)
  }, (e.children || []).map((r, o) => Ds(r, `${n}-${e.tag}-${o}`)));
}
function af(e) {
  return yx(e)[0];
}
function cf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Lx = `
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
`, Dx = (e) => {
  const {
    csp: n,
    prefixCls: t,
    layer: r
  } = Et(Qu);
  let o = Lx;
  t && (o = o.replace(/anticon/g, t)), r && (o = `@layer ${r} {
${o}
}`), Ve(() => {
    const i = e.current, s = Ax(i);
    Tx(o, "@ant-design-icons", {
      prepend: !r,
      csp: n,
      attachTo: s
    });
  }, []);
}, Ar = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Bx({
  primaryColor: e,
  secondaryColor: n
}) {
  Ar.primaryColor = e, Ar.secondaryColor = n || af(e), Ar.calculated = !!n;
}
function Hx() {
  return {
    ...Ar
  };
}
const ar = (e) => {
  const {
    icon: n,
    className: t,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = C.useRef();
  let l = Ar;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || af(i)
  }), Dx(c), Mx(Jc(n), `icon should be icon definiton, but got ${n}`), !Jc(n))
    return null;
  let u = n;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), Ds(u.icon, `svg-${u.name}`, {
    className: t,
    onClick: r,
    style: o,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...a,
    ref: c
  });
};
ar.displayName = "IconReact";
ar.getTwoToneColors = Hx;
ar.setTwoToneColors = Bx;
function lf(e) {
  const [n, t] = cf(e);
  return ar.setTwoToneColors({
    primaryColor: n,
    secondaryColor: t
  });
}
function zx() {
  const e = ar.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
lf(js.primary);
const bi = /* @__PURE__ */ C.forwardRef((e, n) => {
  const {
    // affect outter <i>...</i>
    className: t,
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
    prefixCls: u = "anticon",
    rootClassName: f
  } = C.useContext(Qu), h = Ce(f, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, t);
  let g = s;
  g === void 0 && a && (g = -1);
  const d = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [m, p] = cf(c);
  return /* @__PURE__ */ C.createElement("span", Bs({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: g,
    onClick: a,
    className: h
  }), /* @__PURE__ */ C.createElement(ar, {
    icon: r,
    primaryColor: m,
    secondaryColor: p,
    style: d
  }));
});
bi.displayName = "AntdIcon";
bi.getTwoToneColor = zx;
bi.setTwoToneColor = lf;
var Fx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Vx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, qx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Wx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Gx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Xx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
const Yx = (e, n) => /* @__PURE__ */ C.createElement(bi, Hs({}, e, {
  ref: n,
  icon: Xx
})), uf = /* @__PURE__ */ C.forwardRef(Yx);
process.env.NODE_ENV !== "production" && (uf.displayName = "ReloadOutlined");
var no = { exports: {} }, Re = {};
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
function Kx() {
  if (Zc) return Re;
  Zc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case r:
            case l:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case c:
                case h:
                case f:
                case i:
                  return p;
                default:
                  return b;
              }
          }
        case n:
          return b;
      }
    }
  }
  return Re.ContextConsumer = s, Re.ContextProvider = i, Re.Element = e, Re.ForwardRef = c, Re.Fragment = t, Re.Lazy = h, Re.Memo = f, Re.Portal = n, Re.Profiler = o, Re.StrictMode = r, Re.Suspense = l, Re.SuspenseList = u, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(p) {
    return m(p) === s;
  }, Re.isContextProvider = function(p) {
    return m(p) === i;
  }, Re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Re.isForwardRef = function(p) {
    return m(p) === c;
  }, Re.isFragment = function(p) {
    return m(p) === t;
  }, Re.isLazy = function(p) {
    return m(p) === h;
  }, Re.isMemo = function(p) {
    return m(p) === f;
  }, Re.isPortal = function(p) {
    return m(p) === n;
  }, Re.isProfiler = function(p) {
    return m(p) === o;
  }, Re.isStrictMode = function(p) {
    return m(p) === r;
  }, Re.isSuspense = function(p) {
    return m(p) === l;
  }, Re.isSuspenseList = function(p) {
    return m(p) === u;
  }, Re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === l || p === u || p === g || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === d || p.getModuleId !== void 0);
  }, Re.typeOf = m, Re;
}
var Ae = {};
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
function Jx() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), d = !1, m = !1, p = !1, b = !1, y = !1, w;
    w = Symbol.for("react.module.reference");
    function O(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === t || S === o || y || S === r || S === l || S === u || b || S === g || d || m || p || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === f || S.$$typeof === i || S.$$typeof === s || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === w || S.getModuleId !== void 0));
    }
    function x(S) {
      if (typeof S == "object" && S !== null) {
        var F = S.$$typeof;
        switch (F) {
          case e:
            var k = S.type;
            switch (k) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return k;
              default:
                var V = k && k.$$typeof;
                switch (V) {
                  case a:
                  case s:
                  case c:
                  case h:
                  case f:
                  case i:
                    return V;
                  default:
                    return F;
                }
            }
          case n:
            return F;
        }
      }
    }
    var T = s, _ = i, j = e, L = c, X = t, ne = h, ee = f, z = n, G = o, Q = r, I = l, A = u, $ = !1, N = !1;
    function B(S) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return N || (N = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(S) {
      return x(S) === s;
    }
    function te(S) {
      return x(S) === i;
    }
    function Z(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ce(S) {
      return x(S) === c;
    }
    function ue(S) {
      return x(S) === t;
    }
    function de(S) {
      return x(S) === h;
    }
    function Ee(S) {
      return x(S) === f;
    }
    function be(S) {
      return x(S) === n;
    }
    function Ne(S) {
      return x(S) === o;
    }
    function Pe(S) {
      return x(S) === r;
    }
    function pe(S) {
      return x(S) === l;
    }
    function Ke(S) {
      return x(S) === u;
    }
    Ae.ContextConsumer = T, Ae.ContextProvider = _, Ae.Element = j, Ae.ForwardRef = L, Ae.Fragment = X, Ae.Lazy = ne, Ae.Memo = ee, Ae.Portal = z, Ae.Profiler = G, Ae.StrictMode = Q, Ae.Suspense = I, Ae.SuspenseList = A, Ae.isAsyncMode = B, Ae.isConcurrentMode = H, Ae.isContextConsumer = K, Ae.isContextProvider = te, Ae.isElement = Z, Ae.isForwardRef = ce, Ae.isFragment = ue, Ae.isLazy = de, Ae.isMemo = Ee, Ae.isPortal = be, Ae.isProfiler = Ne, Ae.isStrictMode = Pe, Ae.isSuspense = pe, Ae.isSuspenseList = Ke, Ae.isValidElementType = O, Ae.typeOf = x;
  }()), Ae;
}
var tl;
function Qx() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? no.exports = Kx() : no.exports = Jx()), no.exports;
}
var ts = Qx();
const Gt = /* @__PURE__ */ Object.create(null);
Gt.open = "0";
Gt.close = "1";
Gt.ping = "2";
Gt.pong = "3";
Gt.message = "4";
Gt.upgrade = "5";
Gt.noop = "6";
const yo = /* @__PURE__ */ Object.create(null);
Object.keys(Gt).forEach((e) => {
  yo[Gt[e]] = e;
});
const zs = { type: "error", data: "parser error" }, ff = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", df = typeof ArrayBuffer == "function", hf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ua = ({ type: e, data: n }, t, r) => ff && n instanceof Blob ? t ? r(n) : nl(n, r) : df && (n instanceof ArrayBuffer || hf(n)) ? t ? r(n) : nl(new Blob([n]), r) : r(Gt[e] + (n || "")), nl = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function rl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ns;
function Zx(e, n) {
  if (ff && e.data instanceof Blob)
    return e.data.arrayBuffer().then(rl).then(n);
  if (df && (e.data instanceof ArrayBuffer || hf(e.data)))
    return n(rl(e.data));
  Ua(e, !1, (t) => {
    ns || (ns = new TextEncoder()), n(ns.encode(t));
  });
}
const ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ol.length; e++)
  Or[ol.charCodeAt(e)] = e;
const ep = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Or[e.charCodeAt(r)], s = Or[e.charCodeAt(r + 1)], a = Or[e.charCodeAt(r + 2)], c = Or[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, tp = typeof ArrayBuffer == "function", Wa = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: xf(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: np(e.substring(1), n)
  } : yo[t] ? e.length > 1 ? {
    type: yo[t],
    data: e.substring(1)
  } : {
    type: yo[t]
  } : zs;
}, np = (e, n) => {
  if (tp) {
    const t = ep(e);
    return xf(t, n);
  } else
    return { base64: !0, data: e };
}, xf = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, pf = "", rp = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    Ua(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(pf));
    });
  });
}, op = (e, n) => {
  const t = e.split(pf), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = Wa(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function ip() {
  return new TransformStream({
    transform(e, n) {
      Zx(e, (t) => {
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
let rs;
function ro(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function oo(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function sp(e, n) {
  rs || (rs = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (ro(t) < 1)
            break;
          const c = oo(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (ro(t) < 2)
            break;
          const c = oo(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (ro(t) < 8)
            break;
          const c = oo(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(zs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (ro(t) < o)
            break;
          const c = oo(t, o);
          a.enqueue(Wa(i ? c : rs.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(zs);
          break;
        }
      }
    }
  });
}
const gf = 4;
function Ye(e) {
  if (e) return ap(e);
}
function ap(e) {
  for (var n in Ye.prototype)
    e[n] = Ye.prototype[n];
  return e;
}
Ye.prototype.on = Ye.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Ye.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function(e, n) {
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
Ye.prototype.emit = function(e) {
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
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ye.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const yi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), cp = "arraybuffer";
function mf(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const lp = wt.setTimeout, up = wt.clearTimeout;
function _i(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = lp.bind(wt), e.clearTimeoutFn = up.bind(wt)) : (e.setTimeoutFn = wt.setTimeout.bind(wt), e.clearTimeoutFn = wt.clearTimeout.bind(wt));
}
const fp = 1.33;
function dp(e) {
  return typeof e == "string" ? hp(e) : Math.ceil((e.byteLength || e.size) * fp);
}
function hp(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function vf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function xp(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function pp(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class gp extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class Ga extends Ye {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, _i(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new gp(n, t, r)), this;
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
    const t = Wa(n, this.socket.binaryType);
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
    const t = xp(n);
    return t.length ? "?" + t : "";
  }
}
class mp extends Ga {
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
    op(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, rp(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = vf()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let bf = !1;
try {
  bf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const vp = bf;
function bp() {
}
class yp extends mp {
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
let Fn = class _o extends Ye {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, _i(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = mf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = _o.requestsCount++, _o.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = bp, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete _o.requests[this._index], this._xhr = null;
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
Fn.requestsCount = 0;
Fn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", il);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in wt ? "pagehide" : "unload";
    addEventListener(e, il, !1);
  }
}
function il() {
  for (let e in Fn.requests)
    Fn.requests.hasOwnProperty(e) && Fn.requests[e].abort();
}
const _p = function() {
  const e = yf({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Sp extends yp {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = _p && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Fn(yf, this.uri(), n);
  }
}
function yf(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || vp))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const _f = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Cp extends Ga {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = _f ? {} : mf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Ua(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && yi(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = vf()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const os = wt.WebSocket || wt.MozWebSocket;
class wp extends Cp {
  createSocket(n, t, r) {
    return _f ? new os(n, t, r) : t ? new os(n, t) : new os(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class Ep extends Ga {
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
        const t = sp(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = ip();
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
        o && yi(() => {
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
const Op = {
  websocket: wp,
  webtransport: Ep,
  polling: Sp
}, Tp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Rp = [
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
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = Tp.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Rp[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Ap(i, i.path), i.queryKey = $p(i, i.query), i;
}
function Ap(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function $p(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const Vs = typeof addEventListener == "function" && typeof removeEventListener == "function", So = [];
Vs && addEventListener("offline", () => {
  So.forEach((e) => e());
}, !1);
class gn extends Ye {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = cp, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = Fs(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = Fs(t.host).host);
    _i(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = pp(this.opts.query)), Vs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, So.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = gf, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && gn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", gn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += dp(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, yi(() => {
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
    if (gn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = So.indexOf(this._offlineEventListener);
        r !== -1 && So.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
gn.protocol = gf;
class Pp extends gn {
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
    gn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            gn.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = t.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), t.close(), t = null);
    }
    const s = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = t.name, i(), this.emitReserved("upgradeError", h);
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
let Ip = class extends Pp {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Op[o]).filter((o) => !!o)), super(n, r);
  }
};
function Np(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = Fs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const kp = typeof ArrayBuffer == "function", jp = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Sf = Object.prototype.toString, Mp = typeof Blob == "function" || typeof Blob < "u" && Sf.call(Blob) === "[object BlobConstructor]", Lp = typeof File == "function" || typeof File < "u" && Sf.call(File) === "[object FileConstructor]";
function Xa(e) {
  return kp && (e instanceof ArrayBuffer || jp(e)) || Mp && e instanceof Blob || Lp && e instanceof File;
}
function Co(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (Co(e[t]))
        return !0;
    return !1;
  }
  if (Xa(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Co(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Co(e[t]))
      return !0;
  return !1;
}
function Dp(e) {
  const n = [], t = e.data, r = e;
  return r.data = qs(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function qs(e, n) {
  if (!e)
    return e;
  if (Xa(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = qs(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = qs(e[r], n));
    return t;
  }
  return e;
}
function Bp(e, n) {
  return e.data = Us(e.data, n), delete e.attachments, e;
}
function Us(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Us(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Us(e[t], n));
  return e;
}
const Hp = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], zp = 5;
var ve;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ve || (ve = {}));
class Fp {
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
    return (n.type === ve.EVENT || n.type === ve.ACK) && Co(n) ? this.encodeAsBinary({
      type: n.type === ve.EVENT ? ve.BINARY_EVENT : ve.BINARY_ACK,
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
    return (n.type === ve.BINARY_EVENT || n.type === ve.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = Dp(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function sl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ya extends Ye {
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
      const r = t.type === ve.BINARY_EVENT;
      r || t.type === ve.BINARY_ACK ? (t.type = r ? ve.EVENT : ve.ACK, this.reconstructor = new Vp(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Xa(n) || n.base64)
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
    if (ve[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) {
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
      if (Ya.isPayloadValid(r.type, i))
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
      case ve.CONNECT:
        return sl(t);
      case ve.DISCONNECT:
        return t === void 0;
      case ve.CONNECT_ERROR:
        return typeof t == "string" || sl(t);
      case ve.EVENT:
      case ve.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Hp.indexOf(t[0]) === -1);
      case ve.ACK:
      case ve.BINARY_ACK:
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
class Vp {
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
      const t = Bp(this.reconPack, this.buffers);
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
const qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ya,
  Encoder: Fp,
  get PacketType() {
    return ve;
  },
  protocol: zp
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Up = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Cf extends Ye {
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
      Pt(n, "open", this.onopen.bind(this)),
      Pt(n, "packet", this.onpacket.bind(this)),
      Pt(n, "error", this.onerror.bind(this)),
      Pt(n, "close", this.onclose.bind(this))
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
    if (Up.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: ve.EVENT,
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
      type: ve.CONNECT,
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
        case ve.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ve.EVENT:
        case ve.BINARY_EVENT:
          this.onevent(n);
          break;
        case ve.ACK:
        case ve.BINARY_ACK:
          this.onack(n);
          break;
        case ve.DISCONNECT:
          this.ondisconnect();
          break;
        case ve.CONNECT_ERROR:
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
        type: ve.ACK,
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
    return this.connected && this.packet({ type: ve.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function cr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
cr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
cr.prototype.reset = function() {
  this.attempts = 0;
};
cr.prototype.setMin = function(e) {
  this.ms = e;
};
cr.prototype.setMax = function(e) {
  this.max = e;
};
cr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ws extends Ye {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, _i(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new cr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || qp;
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
    this.engine = new Ip(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Pt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = Pt(t, "error", i);
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
      Pt(n, "ping", this.onping.bind(this)),
      Pt(n, "data", this.ondata.bind(this)),
      Pt(n, "error", this.onerror.bind(this)),
      Pt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      Pt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    yi(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Cf(this, n, t), this.nsps[n] = r), r;
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
const vr = {};
function wo(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = Np(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = vr[o] && i in vr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Ws(r, n) : (vr[o] || (vr[o] = new Ws(r, n)), c = vr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(wo, {
  Manager: Ws,
  Socket: Cf,
  io: wo,
  connect: wo
});
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, xt.apply(null, arguments);
}
function we(e) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, we(e);
}
var Wp = Symbol.for("react.element"), Gp = Symbol.for("react.transitional.element"), Xp = Symbol.for("react.fragment");
function Yp(e) {
  return (
    // Base object type
    e && we(e) === "object" && // React Element type
    (e.$$typeof === Wp || e.$$typeof === Gp) && // React Fragment type
    e.type === Xp
  );
}
var Gs = {}, Ka = [], Kp = function(n) {
  Ka.push(n);
};
function Ja(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ka.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Jp(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ka.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function wf() {
  Gs = {};
}
function Ef(e, n, t) {
  !n && !Gs[t] && (e(!1, t), Gs[t] = !0);
}
function bn(e, n) {
  Ef(Ja, e, n);
}
function Qp(e, n) {
  Ef(Jp, e, n);
}
bn.preMessage = Kp;
bn.resetWarned = wf;
bn.noteOnce = Qp;
function Zp(e, n) {
  if (we(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (we(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Of(e) {
  var n = Zp(e, "string");
  return we(n) == "symbol" ? n : n + "";
}
function Y(e, n, t) {
  return (n = Of(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function al(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function J(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? al(Object(t), !0).forEach(function(r) {
      Y(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : al(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function cl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function e1(e) {
  return e && we(e) === "object" && cl(e.nativeElement) ? e.nativeElement : cl(e) ? e : null;
}
function t1(e) {
  var n = e1(e);
  if (n)
    return n;
  if (e instanceof W.Component) {
    var t;
    return (t = yc.findDOMNode) === null || t === void 0 ? void 0 : t.call(yc, e);
  }
  return null;
}
function Qa(e, n, t) {
  var r = C.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var n1 = Number(Kd.split(".")[0]), Tf = function(n, t) {
  typeof n == "function" ? n(t) : we(n) === "object" && n && "current" in n && (n.current = t);
}, Si = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      Tf(s, i);
    });
  };
}, r1 = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return Qa(function() {
    return Si.apply(void 0, t);
  }, t, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, Rf = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (Af(n) && n1 >= 19)
    return !0;
  var o = ts.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== ts.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== ts.ForwardRef);
};
function Af(e) {
  return /* @__PURE__ */ Yd(e) && !Yp(e);
}
var $f = function(n) {
  if (n && Af(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function vt(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function ll(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Of(r.key), r);
  }
}
function bt(e, n, t) {
  return n && ll(e.prototype, n), t && ll(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xs(e, n) {
  return Xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Xs(e, n);
}
function lr(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && Xs(e, n);
}
function Jn(e) {
  return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Jn(e);
}
function Za() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Za = function() {
    return !!e;
  })();
}
function $n(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pf(e, n) {
  if (n && (we(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $n(e);
}
function zr(e) {
  var n = Za();
  return function() {
    var t, r = Jn(e);
    if (n) {
      var o = Jn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return Pf(this, t);
  };
}
function Ys(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function o1(e) {
  if (Array.isArray(e)) return Ys(e);
}
function If(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ec(e, n) {
  if (e) {
    if (typeof e == "string") return Ys(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ys(e, n) : void 0;
  }
}
function i1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xt(e) {
  return o1(e) || If(e) || ec(e) || i1();
}
var Nf = function(n) {
  return +setTimeout(n, 16);
}, kf = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (Nf = function(n) {
  return window.requestAnimationFrame(n);
}, kf = function(n) {
  return window.cancelAnimationFrame(n);
});
var ul = 0, Ci = /* @__PURE__ */ new Map();
function jf(e) {
  Ci.delete(e);
}
var mn = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ul += 1;
  var r = ul;
  function o(i) {
    if (i === 0)
      jf(r), n();
    else {
      var s = Nf(function() {
        o(i - 1);
      });
      Ci.set(r, s);
    }
  }
  return o(t), r;
};
mn.cancel = function(e) {
  var n = Ci.get(e);
  return jf(e), kf(n);
};
process.env.NODE_ENV !== "production" && (mn.ids = function() {
  return Ci;
});
function Mf(e) {
  if (Array.isArray(e)) return e;
}
function s1(e, n) {
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
function Lf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return Mf(e) || s1(e, n) || ec(e, n) || Lf();
}
function kr(e) {
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
function cn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function a1(e, n) {
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
var fl = "data-rc-order", dl = "data-rc-priority", c1 = "rc-util-key", Ks = /* @__PURE__ */ new Map();
function Df() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : c1;
}
function wi(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function l1(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function tc(e) {
  return Array.from((Ks.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Bf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!cn())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = l1(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(fl, s), a && i && c.setAttribute(dl, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = wi(n), u = l.firstChild;
  if (r) {
    if (a) {
      var f = (n.styles || tc(l)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(fl)))
          return !1;
        var g = Number(h.getAttribute(dl) || 0);
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
function Hf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = wi(n);
  return (n.styles || tc(t)).find(function(r) {
    return r.getAttribute(Df(n)) === e;
  });
}
function zf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Hf(e, n);
  if (t) {
    var r = wi(n);
    r.removeChild(t);
  }
}
function u1(e, n) {
  var t = Ks.get(e);
  if (!t || !a1(document, t)) {
    var r = Bf("", n), o = r.parentNode;
    Ks.set(e, o), e.removeChild(r);
  }
}
function Pn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = wi(t), o = tc(r), i = J(J({}, t), {}, {
    styles: o
  });
  u1(r, i);
  var s = Hf(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Bf(e, i);
  return u.setAttribute(Df(i), n), u;
}
function f1(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function jn(e, n) {
  if (e == null) return {};
  var t, r, o = f1(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function d1(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (bn(!c, "Warning: There may be circular references"), c)
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
    if (i && s && we(i) === "object" && we(s) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(s).length ? !1 : f.every(function(h) {
        return o(i[h], s[h], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var h1 = "%";
function Js(e) {
  return e.join(h1);
}
var x1 = /* @__PURE__ */ function() {
  function e(n) {
    vt(this, e), Y(this, "instanceId", void 0), Y(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return bt(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(Js(t));
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
      return this.opUpdate(Js(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Qn = "data-token-hash", jt = "data-css-hash", p1 = "data-cache-path", xn = "__cssinjs_instance__";
function g1() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(jt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[xn] = o[xn] || e, o[xn] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(jt, "]"))).forEach(function(o) {
      var i = o.getAttribute(jt);
      if (r[i]) {
        if (o[xn] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new x1(e);
}
var Fr = /* @__PURE__ */ C.createContext({
  hashPriority: "low",
  cache: g1(),
  defaultCache: !0
});
function m1(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var nc = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), Y(this, "cache", void 0), Y(this, "keys", void 0), Y(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return bt(e, [{
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
            var f = ae(l, 2), h = f[1];
            return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : l;
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
          return !m1(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
Y(nc, "MAX_CACHE_SIZE", 20);
Y(nc, "MAX_CACHE_OFFSET", 5);
var hl = 0, Ff = /* @__PURE__ */ function() {
  function e(n) {
    vt(this, e), Y(this, "derivatives", void 0), Y(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = hl, n.length === 0 && Ja(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), hl += 1;
  }
  return bt(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), is = new nc();
function Qs(e) {
  var n = Array.isArray(e) ? e : [e];
  return is.has(n) || is.set(n, new Ff(n)), is.get(n);
}
var v1 = /* @__PURE__ */ new WeakMap(), ss = {};
function b1(e, n) {
  for (var t = v1, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(ss) || t.set(ss, e()), t.get(ss);
}
var xl = /* @__PURE__ */ new WeakMap();
function $r(e) {
  var n = xl.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof Ff ? n += r.id : r && we(r) === "object" ? n += $r(r) : n += r;
  }), n = kr(n), xl.set(e, n)), n;
}
function pl(e, n) {
  return kr("".concat(n, "_").concat($r(e)));
}
var Zs = cn();
function sn(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Fo(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = J(J({}, o), {}, (r = {}, Y(r, Qn, n), Y(r, jt, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Eo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, y1 = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Vf = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], f = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var h, g = Eo(u, r == null ? void 0 : r.prefix);
      o[g] = typeof f == "number" && !(r != null && (h = r.unitless) !== null && h !== void 0 && h[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(g, ")");
    }
  }), [i, y1(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, gl = process.env.NODE_ENV !== "test" && cn() ? C.useLayoutEffect : C.useEffect, rc = function(n, t) {
  var r = C.useRef(!0);
  gl(function() {
    return n(r.current);
  }, t), gl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ml = function(n, t) {
  rc(function(r) {
    if (!r)
      return n();
  }, t);
}, _1 = J({}, C), vl = _1.useInsertionEffect, S1 = function(n, t, r) {
  C.useMemo(n, r), rc(function() {
    return t(!0);
  }, r);
}, C1 = vl ? function(e, n, t) {
  return vl(function() {
    return e(), n();
  }, t);
} : S1, w1 = J({}, C), E1 = w1.useInsertionEffect, O1 = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Ja(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return C.useEffect(function() {
    return r = !1, function() {
      r = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, T1 = function() {
  return function(n) {
    n();
  };
}, R1 = typeof E1 < "u" ? O1 : T1;
function A1() {
  return !1;
}
var ea = !1;
function $1() {
  return ea;
}
const P1 = process.env.NODE_ENV === "production" ? A1 : $1;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (io && typeof io.webpackHotUpdate == "function") {
    var I1 = io.webpackHotUpdate;
    io.webpackHotUpdate = function() {
      return ea = !0, setTimeout(function() {
        ea = !1;
      }, 0), I1.apply(void 0, arguments);
    };
  }
}
function oc(e, n, t, r, o) {
  var i = C.useContext(Fr), s = i.cache, a = [e].concat(Xt(n)), c = Js(a), l = R1([c]), u = P1(), f = function(m) {
    s.opUpdate(c, function(p) {
      var b = p || [void 0, void 0], y = ae(b, 2), w = y[0], O = w === void 0 ? 0 : w, x = y[1], T = x;
      process.env.NODE_ENV !== "production" && x && u && (r == null || r(T, u), T = null);
      var _ = T || t(), j = [O, _];
      return m ? m(j) : j;
    });
  };
  C.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var h = s.opGet(c);
  process.env.NODE_ENV !== "production" && !h && (f(), h = s.opGet(c));
  var g = h[1];
  return C1(function() {
    o == null || o(g);
  }, function(d) {
    return f(function(m) {
      var p = ae(m, 2), b = p[0], y = p[1];
      return d && b === 0 && (o == null || o(g)), [b + 1, y];
    }), function() {
      s.opUpdate(c, function(m) {
        var p = m || [], b = ae(p, 2), y = b[0], w = y === void 0 ? 0 : y, O = b[1], x = w - 1;
        return x === 0 ? (l(function() {
          (d || !s.opGet(c)) && (r == null || r(O, !1));
        }), null) : [w - 1, O];
      });
    };
  }, [c]), g;
}
var N1 = {}, k1 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", En = /* @__PURE__ */ new Map();
function j1(e) {
  En.set(e, (En.get(e) || 0) + 1);
}
function M1(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Qn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[xn] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var L1 = 0;
function D1(e, n) {
  En.set(e, (En.get(e) || 0) - 1);
  var t = Array.from(En.keys()), r = t.filter(function(o) {
    var i = En.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > L1 && r.forEach(function(o) {
    M1(o, n), En.delete(o);
  });
}
var B1 = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = J(J({}, i), t);
  return o && (s = o(s)), s;
}, qf = "token";
function H1(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Et(Fr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? N1 : c, u = t.formatToken, f = t.getComputedToken, h = t.cssVar, g = b1(function() {
    return Object.assign.apply(Object, [{}].concat(Xt(n)));
  }, n), d = $r(g), m = $r(l), p = h ? $r(h) : "", b = oc(qf, [a, e.id, d, m, p], function() {
    var y, w = f ? f(g, l, e) : B1(g, l, e, u), O = J({}, w), x = "";
    if (h) {
      var T = Vf(w, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), _ = ae(T, 2);
      w = _[0], x = _[1];
    }
    var j = pl(w, a);
    w._tokenKey = j, O._tokenKey = pl(O, a);
    var L = (y = h == null ? void 0 : h.key) !== null && y !== void 0 ? y : j;
    w._themeKey = L, j1(L);
    var X = "".concat(k1, "-").concat(kr(j));
    return w._hashId = X, [w, X, O, x, (h == null ? void 0 : h.key) || ""];
  }, function(y) {
    D1(y[0]._themeKey, o);
  }, function(y) {
    var w = ae(y, 4), O = w[0], x = w[3];
    if (h && x) {
      var T = Pn(x, kr("css-variables-".concat(O._themeKey)), {
        mark: jt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      T[xn] = o, T.setAttribute(Qn, O._themeKey);
    }
  });
  return b;
}
var z1 = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = Fo(s, a, u, h, l);
  return [f, u, g];
}, F1 = {
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
}, Uf = "comm", Wf = "rule", Gf = "decl", V1 = "@import", q1 = "@namespace", U1 = "@keyframes", W1 = "@layer", Xf = Math.abs, ic = String.fromCharCode;
function Yf(e) {
  return e.trim();
}
function Oo(e, n, t) {
  return e.replace(n, t);
}
function G1(e, n, t) {
  return e.indexOf(n, t);
}
function Vn(e, n) {
  return e.charCodeAt(n) | 0;
}
function Zn(e, n, t) {
  return e.slice(n, t);
}
function Ut(e) {
  return e.length;
}
function X1(e) {
  return e.length;
}
function so(e, n) {
  return n.push(e), e;
}
var Ei = 1, er = 1, Kf = 0, Tt = 0, Xe = 0, ur = "";
function sc(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Ei, column: er, length: s, return: "", siblings: a };
}
function Y1() {
  return Xe;
}
function K1() {
  return Xe = Tt > 0 ? Vn(ur, --Tt) : 0, er--, Xe === 10 && (er = 1, Ei--), Xe;
}
function Mt() {
  return Xe = Tt < Kf ? Vn(ur, Tt++) : 0, er++, Xe === 10 && (er = 1, Ei++), Xe;
}
function pn() {
  return Vn(ur, Tt);
}
function To() {
  return Tt;
}
function Oi(e, n) {
  return Zn(ur, e, n);
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
function J1(e) {
  return Ei = er = 1, Kf = Ut(ur = e), Tt = 0, [];
}
function Q1(e) {
  return ur = "", e;
}
function as(e) {
  return Yf(Oi(Tt - 1, ta(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Z1(e) {
  for (; (Xe = pn()) && Xe < 33; )
    Mt();
  return jr(e) > 2 || jr(Xe) > 3 ? "" : " ";
}
function eg(e, n) {
  for (; --n && Mt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return Oi(e, To() + (n < 6 && pn() == 32 && Mt() == 32));
}
function ta(e) {
  for (; Mt(); )
    switch (Xe) {
      // ] ) " '
      case e:
        return Tt;
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
        Mt();
        break;
    }
  return Tt;
}
function tg(e, n) {
  for (; Mt() && e + Xe !== 57; )
    if (e + Xe === 84 && pn() === 47)
      break;
  return "/*" + Oi(n, Tt - 1) + "*" + ic(e === 47 ? e : Mt());
}
function ng(e) {
  for (; !jr(pn()); )
    Mt();
  return Oi(e, Tt);
}
function rg(e) {
  return Q1(Ro("", null, null, null, [""], e = J1(e), 0, [0], e));
}
function Ro(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, h = 0, g = 0, d = 0, m = 1, p = 1, b = 1, y = 0, w = "", O = o, x = i, T = r, _ = w; p; )
    switch (d = y, y = Mt()) {
      // (
      case 40:
        if (d != 108 && Vn(_, f - 1) == 58) {
          G1(_ += Oo(as(y), "&", "&\f"), "&\f", Xf(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += as(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Z1(d);
        break;
      // \
      case 92:
        _ += eg(To() - 1, 7);
        continue;
      // /
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            so(og(tg(Mt(), To()), n, t, c), c), (jr(d || 1) == 5 || jr(pn() || 1) == 5) && Ut(_) && Zn(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = Ut(_) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (_ = Oo(_, /\f/g, "")), g > 0 && (Ut(_) - f || m === 0 && d === 47) && so(g > 32 ? yl(_ + ";", r, t, f - 1, c) : yl(Oo(_, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (so(T = bl(_, n, t, l, u, o, a, w, O = [], x = [], f, i), i), y === 123)
              if (u === 0)
                Ro(_, n, T, T, O, i, f, a, x);
              else {
                switch (h) {
                  // c(ontainer)
                  case 99:
                    if (Vn(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Vn(_, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Ro(e, T, T, r && so(bl(e, T, T, 0, 0, o, a, w, o, O = [], f, x), x), o, x, f, a, r ? O : x) : Ro(_, T, T, T, [""], x, 0, a, x);
              }
        }
        l = u = g = 0, m = b = 1, w = _ = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Ut(_), g = d;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && K1() == 125)
            continue;
        }
        switch (_ += ic(y), y * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Ut(_) - 1) * b, b = 1;
            break;
          // @
          case 64:
            pn() === 45 && (_ += as(Mt())), h = pn(), u = f = Ut(w = _ += ng(To())), y++;
            break;
          // -
          case 45:
            d === 45 && Ut(_) == 2 && (m = 0);
        }
    }
  return i;
}
function bl(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var h = o - 1, g = o === 0 ? i : [""], d = X1(g), m = 0, p = 0, b = 0; m < r; ++m)
    for (var y = 0, w = Zn(e, h + 1, h = Xf(p = s[m])), O = e; y < d; ++y)
      (O = Yf(p > 0 ? g[y] + " " + w : Oo(w, /&\f/g, g[y]))) && (c[b++] = O);
  return sc(e, n, t, o === 0 ? Wf : a, c, l, u, f);
}
function og(e, n, t, r) {
  return sc(e, n, t, Uf, ic(Y1()), Zn(e, 2, -2), 0, r);
}
function yl(e, n, t, r, o) {
  return sc(e, n, t, Gf, Zn(e, 0, r), Zn(e, r + 1, -1), r, o);
}
function na(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function ig(e, n, t, r) {
  switch (e.type) {
    case W1:
      if (e.children.length) break;
    case V1:
    case q1:
    case Gf:
      return e.return = e.return || e.value;
    case Uf:
      return "";
    case U1:
      return e.return = e.value + "{" + na(e.children, r) + "}";
    case Wf:
      if (!Ut(e.value = e.props.join(","))) return "";
  }
  return Ut(t = na(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Jf(e, n) {
  var t = n.path, r = n.parentSelectors;
  bn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var sg = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Jf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, ag = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Jf("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, _l = "data-ant-cssinjs-cache-path", Qf = "_FILE_STYLE__", In, Zf = !0;
function cg() {
  if (!In && (In = {}, cn())) {
    var e = document.createElement("div");
    e.className = _l, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      In[a] = c;
    });
    var t = document.querySelector("style[".concat(_l, "]"));
    if (t) {
      var r;
      Zf = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function lg(e) {
  return cg(), !!In[e];
}
function ug(e) {
  var n = In[e], t = null;
  if (n && cn())
    if (Zf)
      t = Qf;
    else {
      var r = document.querySelector("style[".concat(jt, '="').concat(In[e], '"]'));
      r ? t = r.innerHTML : delete In[e];
    }
  return [t, n];
}
var e0 = "_skip_check_", t0 = "_multi_value_";
function Ao(e) {
  var n = na(rg(e), ig);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function fg(e) {
  return we(e) === "object" && e && (e0 in e || t0 in e);
}
function Sl(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Xt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var dg = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, f = t.transformers, h = f === void 0 ? [] : f, g = t.linters, d = g === void 0 ? [] : g, m = "", p = {};
  function b(O) {
    var x = O.getName(a);
    if (!p[x]) {
      var T = e(O.style, t, {
        root: !1,
        parentSelectors: s
      }), _ = ae(T, 1), j = _[0];
      p[x] = "@keyframes ".concat(O.getName(a)).concat(j);
    }
  }
  function y(O) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return O.forEach(function(T) {
      Array.isArray(T) ? y(T, x) : T && x.push(T);
    }), x;
  }
  var w = y(Array.isArray(n) ? n : [n]);
  return w.forEach(function(O) {
    var x = typeof O == "string" && !o ? {} : O;
    if (typeof x == "string")
      m += "".concat(x, `
`);
    else if (x._keyframe)
      b(x);
    else {
      var T = h.reduce(function(_, j) {
        var L;
        return (j == null || (L = j.visit) === null || L === void 0 ? void 0 : L.call(j, _)) || _;
      }, x);
      Object.keys(T).forEach(function(_) {
        var j = T[_];
        if (we(j) === "object" && j && (_ !== "animationName" || !j._keyframe) && !fg(j)) {
          var L = !1, X = _.trim(), ne = !1;
          (o || i) && a ? X.startsWith("@") ? L = !0 : X === "&" ? X = Sl("", a, u) : X = Sl(_, a, u) : o && !a && (X === "&" || X === "") && (X = "", ne = !0);
          var ee = e(j, t, {
            root: ne,
            injectHash: L,
            parentSelectors: [].concat(Xt(s), [X])
          }), z = ae(ee, 2), G = z[0], Q = z[1];
          p = J(J({}, p), Q), m += "".concat(X).concat(G);
        } else {
          let $ = function(N, B) {
            process.env.NODE_ENV !== "production" && (we(j) !== "object" || !(j != null && j[e0])) && [sg, ag].concat(Xt(d)).forEach(function(te) {
              return te(N, B, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var H = N.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = B;
            !F1[N] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), N === "animationName" && B !== null && B !== void 0 && B._keyframe && (b(B), K = B.getName(a)), m += "".concat(H, ":").concat(K, ";");
          };
          var I, A = (I = j == null ? void 0 : j.value) !== null && I !== void 0 ? I : j;
          we(j) === "object" && j !== null && j !== void 0 && j[t0] && Array.isArray(A) ? A.forEach(function(N) {
            $(_, N);
          }) : $(_, A);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(O) {
    return "@layer ".concat(O, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function n0(e, n) {
  return kr("".concat(e.join("%")).concat(n));
}
function hg() {
  return null;
}
var r0 = "style";
function ra(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = C.useContext(Fr), f = u.autoClear, h = u.mock, g = u.defaultCache, d = u.hashPriority, m = u.container, p = u.ssrInline, b = u.transformers, y = u.linters, w = u.cache, O = u.layer, x = t._tokenKey, T = [x];
  O && T.push("layer"), T.push.apply(T, Xt(r));
  var _ = Zs;
  process.env.NODE_ENV !== "production" && h !== void 0 && (_ = h === "client");
  var j = oc(
    r0,
    T,
    // Create cache if needed
    function() {
      var z = T.join("|");
      if (lg(z)) {
        var G = ug(z), Q = ae(G, 2), I = Q[0], A = Q[1];
        if (I)
          return [I, x, A, {}, a, l];
      }
      var $ = n(), N = dg($, {
        hashId: o,
        hashPriority: d,
        layer: O ? i : void 0,
        path: r.join("-"),
        transformers: b,
        linters: y
      }), B = ae(N, 2), H = B[0], K = B[1], te = Ao(H), Z = n0(T, te);
      return [te, x, Z, K, a, l];
    },
    // Remove cache if no need
    function(z, G) {
      var Q = ae(z, 3), I = Q[2];
      (G || f) && Zs && zf(I, {
        mark: jt
      });
    },
    // Effect: Inject style here
    function(z) {
      var G = ae(z, 4), Q = G[0];
      G[1];
      var I = G[2], A = G[3];
      if (_ && Q !== Qf) {
        var $ = {
          mark: jt,
          prepend: O ? !1 : "queue",
          attachTo: m,
          priority: l
        }, N = typeof s == "function" ? s() : s;
        N && ($.csp = {
          nonce: N
        });
        var B = [], H = [];
        Object.keys(A).forEach(function(te) {
          te.startsWith("@layer") ? B.push(te) : H.push(te);
        }), B.forEach(function(te) {
          Pn(Ao(A[te]), "_layer-".concat(te), J(J({}, $), {}, {
            prepend: !0
          }));
        });
        var K = Pn(Q, I, $);
        K[xn] = w.instanceId, K.setAttribute(Qn, x), process.env.NODE_ENV !== "production" && K.setAttribute(p1, T.join("|")), H.forEach(function(te) {
          Pn(Ao(A[te]), "_effect-".concat(te), $);
        });
      }
    }
  ), L = ae(j, 3), X = L[0], ne = L[1], ee = L[2];
  return function(z) {
    var G;
    if (!p || _ || !g)
      G = /* @__PURE__ */ C.createElement(hg, null);
    else {
      var Q;
      G = /* @__PURE__ */ C.createElement("style", xt({}, (Q = {}, Y(Q, Qn, ne), Y(Q, jt, ee), Q), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ C.createElement(C.Fragment, null, G, z);
  };
}
var xg = function(n, t, r) {
  var o = ae(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, h = f.plain;
  if (l)
    return null;
  var g = i, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = Fo(i, s, a, d, h), c && Object.keys(c).forEach(function(m) {
    if (!t[m]) {
      t[m] = !0;
      var p = Ao(c[m]), b = Fo(p, s, "_effect-".concat(m), d, h);
      m.startsWith("@layer") ? g = b + g : g += b;
    }
  }), [u, a, g];
}, o0 = "cssVar", pg = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = Et(Fr), f = u.cache.instanceId, h = u.container, g = a._tokenKey, d = [].concat(Xt(n.path), [r, l, g]), m = oc(o0, d, function() {
    var p = t(), b = Vf(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), y = ae(b, 2), w = y[0], O = y[1], x = n0(d, O);
    return [w, O, x, r];
  }, function(p) {
    var b = ae(p, 3), y = b[2];
    Zs && zf(y, {
      mark: jt
    });
  }, function(p) {
    var b = ae(p, 3), y = b[1], w = b[2];
    if (y) {
      var O = Pn(y, w, {
        mark: jt,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      O[xn] = f, O.setAttribute(Qn, r);
    }
  });
  return m;
}, gg = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, h = Fo(i, a, s, f, l);
  return [u, s, h];
}, br;
br = {}, Y(br, r0, xg), Y(br, qf, z1), Y(br, o0, gg);
var i0 = /* @__PURE__ */ function() {
  function e(n, t) {
    vt(this, e), Y(this, "name", void 0), Y(this, "style", void 0), Y(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return bt(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Bn(e) {
  return e.notSplit = !0, e;
}
Bn(["borderTop", "borderBottom"]), Bn(["borderTop"]), Bn(["borderBottom"]), Bn(["borderLeft", "borderRight"]), Bn(["borderLeft"]), Bn(["borderRight"]);
var ac = /* @__PURE__ */ ui({});
function mg(e) {
  return Mf(e) || If(e) || ec(e) || Lf();
}
function oa(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function s0(e, n, t, r) {
  if (!n.length)
    return t;
  var o = mg(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Xt(e) : a = J({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = s0(a[i], s, t, r), a;
}
function cs(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !oa(e, n.slice(0, -1)) ? e : s0(e, n, t, r);
}
function vg(e) {
  return we(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Cl(e) {
  return Array.isArray(e) ? [] : {};
}
var bg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function yg() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = Cl(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = oa(o, s), u = Array.isArray(l);
      if (u || vg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = oa(r, s);
          u ? r = cs(r, s, []) : (!f || we(f) !== "object") && (r = cs(r, s, Cl(l))), bg(l).forEach(function(h) {
            i([].concat(Xt(s), [h]), c);
          });
        }
      } else
        r = cs(r, s, l);
    }
    i([]);
  }), r;
}
function a0() {
}
let nn = null;
function _g() {
  nn = null, wf();
}
let cc = a0;
process.env.NODE_ENV !== "production" && (cc = (e, n, t) => {
  bn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && _g();
});
const c0 = /* @__PURE__ */ C.createContext({}), yn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = C.useContext(c0), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = nn;
        nn || (nn = {}), nn[e] = nn[e] || [], nn[e].includes(i || "") || nn[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", nn);
      } else
        process.env.NODE_ENV !== "production" && cc(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = a0, e;
}, Vr = cc, Sg = /* @__PURE__ */ ui(void 0), mt = "${label} is not a valid ${type}", Ti = {
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
let $o = [];
const wl = () => $o.reduce((e, n) => Object.assign(Object.assign({}, e), n), Ti.Modal);
function Cg(e) {
  if (e) {
    const n = Object.assign({}, e);
    return $o.push(n), wl(), () => {
      $o = $o.filter((t) => t !== n), wl();
    };
  }
  Object.assign({}, Ti.Modal);
}
const l0 = /* @__PURE__ */ ui(void 0), u0 = "internalMark", f0 = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = yn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === u0, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  C.useEffect(() => Cg(n == null ? void 0 : n.Modal), [n]);
  const o = C.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ C.createElement(l0.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (f0.displayName = "LocaleProvider");
const d0 = {
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
}, Mr = Object.assign(Object.assign({}, d0), {
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
}), nt = Math.round;
function ls(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const El = (e, n, t) => t === 0 ? e : e / 100;
function yr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Qe = class h0 {
  constructor(n) {
    Y(this, "isValid", !0), Y(this, "r", 0), Y(this, "g", 0), Y(this, "b", 0), Y(this, "a", 1), Y(this, "_h", void 0), Y(this, "_s", void 0), Y(this, "_l", void 0), Y(this, "_v", void 0), Y(this, "_max", void 0), Y(this, "_min", void 0), Y(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof h0)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = yr(n.r), this.g = yr(n.g), this.b = yr(n.b), this.a = typeof n.a == "number" ? yr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = nt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => nt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = nt(this.a * 255).toString(16);
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
    const n = this.getHue(), t = nt(this.getSaturation() * 100), r = nt(this.getLightness() * 100);
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
    return o[n] = yr(t, r), o;
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
      const h = nt(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = nt((i + f) * 255), this.g = nt((s + f) * 255), this.b = nt((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = nt(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = nt(r * (1 - t) * 255), u = nt(r * (1 - t * c) * 255), f = nt(r * (1 - t * (1 - c)) * 255);
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
    const t = ls(n, El);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = ls(n, El);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = ls(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? nt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
var ao = 2, Ol = 0.16, wg = 0.05, Eg = 0.05, Og = 0.15, x0 = 5, p0 = 4, Tg = [{
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
function Tl(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - ao * n : Math.round(e.h) + ao * n : r = t ? Math.round(e.h) + ao * n : Math.round(e.h) - ao * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rl(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Ol * n : n === p0 ? r = e.s + Ol : r = e.s + wg * n, r > 1 && (r = 1), t && n === x0 && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Al(e, n, t) {
  var r;
  return t ? r = e.v + Eg * n : r = e.v - Og * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Lr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Qe(e), o = r.toHsv(), i = x0; i > 0; i -= 1) {
    var s = new Qe({
      h: Tl(o, i, !0),
      s: Rl(o, i, !0),
      v: Al(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= p0; a += 1) {
    var c = new Qe({
      h: Tl(o, a),
      s: Rl(o, a),
      v: Al(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? Tg.map(function(l) {
    var u = l.index, f = l.amount;
    return new Qe(n.backgroundColor || "#141414").mix(t[u], f).toHexString();
  }) : t.map(function(l) {
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
var Vo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Vo.primary = Vo[5];
var ha = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ha.primary = ha[5];
var xa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
xa.primary = xa[5];
var pa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
pa.primary = pa[5];
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
  blue: Vo,
  geekblue: ha,
  purple: xa,
  magenta: pa,
  grey: ga
};
function Rg(e, n) {
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
  } = e, f = t(c), h = t(o), g = t(i), d = t(s), m = t(a), p = r(l, u), b = e.colorLink || e.colorInfo, y = t(b), w = new Qe(d[1]).mix(new Qe(d[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
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
    colorSuccessBg: h[1],
    colorSuccessBgHover: h[2],
    colorSuccessBorder: h[3],
    colorSuccessBorderHover: h[4],
    colorSuccessHover: h[4],
    colorSuccess: h[6],
    colorSuccessActive: h[7],
    colorSuccessTextHover: h[8],
    colorSuccessText: h[9],
    colorSuccessTextActive: h[10],
    colorErrorBg: d[1],
    colorErrorBgHover: d[2],
    colorErrorBgFilledHover: w,
    colorErrorBgActive: d[3],
    colorErrorBorder: d[3],
    colorErrorBorderHover: d[4],
    colorErrorHover: d[5],
    colorError: d[6],
    colorErrorActive: d[7],
    colorErrorTextHover: d[8],
    colorErrorText: d[9],
    colorErrorTextActive: d[10],
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
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Qe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ag = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function $g(e) {
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
  }, Ag(r));
}
const Pg = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function Po(e) {
  return (e + 8) / e;
}
function Ig(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: Po(t)
  }));
}
const Ng = (e) => {
  const n = Ig(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function kg(e) {
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
const _t = (e, n) => new Qe(e).setA(n).toRgbString(), _r = (e, n) => new Qe(e).darken(n).toHexString(), jg = (e) => {
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
}, Mg = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
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
    colorBgLayout: _r(t, 4),
    colorBgContainer: _r(t, 0),
    colorBgElevated: _r(t, 0),
    colorBgSpotlight: _t(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: _r(t, 15),
    colorBorderSecondary: _r(t, 6)
  };
};
function Lg(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const n = Object.keys(d0).map((t) => {
    const r = e[t] === us[t] ? fs[t] : Lr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), Rg(e, {
    generateColorPalettes: jg,
    generateNeutralColorPalettes: Mg
  })), Ng(e.fontSize)), kg(e)), Pg(e)), $g(e));
}
const g0 = Qs(Lg), ma = {
  token: Mr,
  override: {
    override: Mr
  },
  hashed: !0
}, m0 = /* @__PURE__ */ W.createContext(ma), qo = "ant", lc = "anticon", Dg = (e, n) => n || (e ? `${qo}-${e}` : qo), Lt = /* @__PURE__ */ C.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Dg,
  iconPrefixCls: lc
}), {
  Consumer: b_
} = Lt, $l = {};
function uc(e) {
  const n = C.useContext(Lt), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: $l,
    styles: $l
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Bg = `-ant-${Date.now()}-${Math.random()}`;
function Hg(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Qe(s), l = Lr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Qe(n.primaryColor), a = Lr(s.toRgbString());
    a.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Qe(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function zg(e, n) {
  const t = Hg(e, n);
  cn() ? Pn(t, `${Bg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Uo = /* @__PURE__ */ C.createContext(!1), Fg = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = C.useContext(Uo);
  return /* @__PURE__ */ C.createElement(Uo.Provider, {
    value: t ?? r
  }, n);
}, tr = /* @__PURE__ */ C.createContext(void 0), Vg = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = C.useContext(tr);
  return /* @__PURE__ */ C.createElement(tr.Provider, {
    value: t || r
  }, n);
};
function qg() {
  const e = Et(Uo), n = Et(tr);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var v0 = /* @__PURE__ */ bt(function e() {
  vt(this, e);
}), b0 = "CALC_UNIT", Ug = new RegExp(b0, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(b0) : e;
}
var Wg = /* @__PURE__ */ function(e) {
  lr(t, e);
  var n = zr(t);
  function t(r, o) {
    var i;
    vt(this, t), i = n.call(this), Y($n(i), "result", ""), Y($n(i), "unitlessCssVar", void 0), Y($n(i), "lowPriority", void 0);
    var s = we(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = ds(r) : s === "string" && (i.result = r), i;
  }
  return bt(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ds(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Ug, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(v0), Gg = /* @__PURE__ */ function(e) {
  lr(t, e);
  var n = zr(t);
  function t(r) {
    var o;
    return vt(this, t), o = n.call(this), Y($n(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return bt(t, [{
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
}(v0), Xg = function(n, t) {
  var r = n === "css" ? Wg : Gg;
  return function(o) {
    return new r(o, t);
  };
}, Pl = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function vn(e) {
  var n = C.useRef();
  n.current = e;
  var t = C.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Dr(e) {
  var n = C.useRef(!1), t = C.useState(e), r = ae(t, 2), o = r[0], i = r[1];
  C.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function hs(e) {
  return e !== void 0;
}
function Yg(e, n) {
  var t = n || {}, r = t.defaultValue, o = t.value, i = t.onChange, s = t.postState, a = Dr(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = ae(a, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l, h = s ? s(f) : f, g = vn(i), d = Dr([f]), m = ae(d, 2), p = m[0], b = m[1];
  ml(function() {
    var w = p[0];
    l !== w && g(l, w);
  }, [p]), ml(function() {
    hs(o) || u(o);
  }, [o]);
  var y = vn(function(w, O) {
    u(w, O), b([f], O);
  });
  return [h, y];
}
function Il(e, n, t, r) {
  var o = J({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && bn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = J(J({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var y0 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", va = !0;
function _n() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!y0)
    return Object.assign.apply(Object, [{}].concat(n));
  va = !1;
  var r = {};
  return n.forEach(function(o) {
    if (we(o) === "object") {
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
function Kg() {
}
var Jg = function(n) {
  var t, r = n, o = Kg;
  return y0 && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (va) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Nl[s] = {
      global: Array.from(t),
      component: J(J({}, (c = Nl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function kl(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(_n(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Qg(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return sn(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return sn(i);
      }).join(","), ")");
    }
  };
}
var Zg = 1e3 * 60 * 10, em = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), Y(this, "map", /* @__PURE__ */ new Map()), Y(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), Y(this, "nextID", 0), Y(this, "lastAccessBeat", /* @__PURE__ */ new Map()), Y(this, "accessBeat", 0);
  }
  return bt(e, [{
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
        return i && we(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(we(i), "_").concat(i);
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
          r - o > Zg && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), jl = new em();
function tm(e, n) {
  return W.useMemo(function() {
    var t = jl.get(n);
    if (t)
      return t;
    var r = e();
    return jl.set(n, r), r;
  }, n);
}
var nm = function() {
  return {};
};
function rm(e) {
  var n = e.useCSP, t = n === void 0 ? nm : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(h, g, d, m) {
    var p = Array.isArray(h) ? h[0] : h;
    function b(j) {
      return "".concat(String(p)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var y = (m == null ? void 0 : m.unitless) || {}, w = typeof a == "function" ? a(h) : {}, O = J(J({}, w), {}, Y({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(j) {
      O[b(j)] = y[j];
    });
    var x = J(J({}, m), {}, {
      unitless: O,
      prefixToken: b
    }), T = u(h, g, d, x), _ = l(p, d, x);
    return function(j) {
      var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, X = T(j, L), ne = ae(X, 2), ee = ne[1], z = _(L), G = ae(z, 2), Q = G[0], I = G[1];
      return [Q, ee, I];
    };
  }
  function l(h, g, d) {
    var m = d.unitless, p = d.injectStyle, b = p === void 0 ? !0 : p, y = d.prefixToken, w = d.ignore, O = function(_) {
      var j = _.rootCls, L = _.cssVar, X = L === void 0 ? {} : L, ne = r(), ee = ne.realToken;
      return pg({
        path: [h],
        prefix: X.prefix,
        key: X.key,
        unitless: m,
        ignore: w,
        token: ee,
        scope: j
      }, function() {
        var z = kl(h, ee, g), G = Il(h, ee, z, {
          deprecatedTokens: d == null ? void 0 : d.deprecatedTokens
        });
        return Object.keys(z).forEach(function(Q) {
          G[y(Q)] = G[Q], delete G[Q];
        }), G;
      }), null;
    }, x = function(_) {
      var j = r(), L = j.cssVar;
      return [function(X) {
        return b && L ? /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(O, {
          rootCls: _,
          cssVar: L,
          component: h
        }), X) : X;
      }, L == null ? void 0 : L.key];
    };
    return x;
  }
  function u(h, g, d) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(h) ? h : [h, h], b = ae(p, 1), y = b[0], w = p.join("-"), O = e.layer || {
      name: "antd"
    };
    return function(x) {
      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, _ = r(), j = _.theme, L = _.realToken, X = _.hashId, ne = _.token, ee = _.cssVar, z = o(), G = z.rootPrefixCls, Q = z.iconPrefixCls, I = t(), A = ee ? "css" : "js", $ = tm(function() {
        var Z = /* @__PURE__ */ new Set();
        return ee && Object.keys(m.unitless || {}).forEach(function(ce) {
          Z.add(Eo(ce, ee.prefix)), Z.add(Eo(ce, Pl(y, ee.prefix)));
        }), Xg(A, Z);
      }, [A, y, ee == null ? void 0 : ee.prefix]), N = Qg(A), B = N.max, H = N.min, K = {
        theme: j,
        token: ne,
        hashId: X,
        nonce: function() {
          return I.nonce;
        },
        clientOnly: m.clientOnly,
        layer: O,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && ra(J(J({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", G]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: G,
            iconPrefixCls: Q
          },
          csp: I
        });
      });
      var te = ra(J(J({}, K), {}, {
        path: [w, x, Q]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var Z = Jg(ne), ce = Z.token, ue = Z.flush, de = kl(y, L, d), Ee = ".".concat(x), be = Il(y, L, de, {
          deprecatedTokens: m.deprecatedTokens
        });
        ee && de && we(de) === "object" && Object.keys(de).forEach(function(Ke) {
          de[Ke] = "var(".concat(Eo(Ke, Pl(y, ee.prefix)), ")");
        });
        var Ne = _n(ce, {
          componentCls: Ee,
          prefixCls: x,
          iconCls: ".".concat(Q),
          antCls: ".".concat(G),
          calc: $,
          // @ts-ignore
          max: B,
          // @ts-ignore
          min: H
        }, ee ? de : be), Pe = g(Ne, {
          hashId: X,
          prefixCls: x,
          rootPrefixCls: G,
          iconPrefixCls: Q
        });
        ue(y, be);
        var pe = typeof s == "function" ? s(Ne, x, T, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : pe, Pe];
      });
      return [te, X];
    };
  }
  function f(h, g, d) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(h, g, d, J({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), b = function(w) {
      var O = w.prefixCls, x = w.rootCls, T = x === void 0 ? O : x;
      return p(O, T), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const fc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], om = "5.24.6";
function xs(e) {
  return e >= 0 && e <= 255;
}
function Tr(e, n) {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = new Qe(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Qe(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), h = Math.round((o - c * (1 - l)) / l);
    if (xs(u) && xs(f) && xs(h))
      return new Qe({
        r: u,
        g: f,
        b: h,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Qe({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var im = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function _0(e) {
  const {
    override: n
  } = e, t = im(e, ["override"]), r = Object.assign({}, n);
  Object.keys(Mr).forEach((h) => {
    delete r[h];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const h = "0s";
    o.motionDurationFast = h, o.motionDurationMid = h, o.motionDurationSlow = h;
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
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Qe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Qe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Qe("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Ml = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const S0 = {
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
}, sm = {
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
}, am = {
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
}, C0 = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Ml(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = _0(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = Ml(l, ["theme"]);
    let h = f;
    u && (h = C0(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = h;
  }), s;
};
function qr() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = W.useContext(m0), i = `${om}-${n || ""}`, s = t || g0, [a, c, l] = H1(s, [Mr, e], {
    salt: i,
    override: r,
    getComputedToken: C0,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _0,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: S0,
      ignore: sm,
      preserve: am
    }
  });
  return [s, l, n ? c : "", a, o];
}
const w0 = function(e) {
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
}, E0 = () => ({
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
}), cm = (e) => ({
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
}), lm = (e, n, t, r) => {
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
}, um = (e, n) => ({
  outline: `${sn(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: n ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), fm = (e, n) => ({
  "&:focus-visible": Object.assign({}, um(e, n))
}), O0 = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, E0()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ri,
  genComponentStyleHook: dm,
  genSubStyleComponent: hm
} = rm({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = Et(Lt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = qr();
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
    } = Et(Lt);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = cm(e);
    return [r, {
      "&": r
    }, O0((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : lc)];
  },
  getCommonStyle: lm,
  getCompUnitless: () => S0
}), xm = (e, n) => {
  const [t, r] = qr();
  return ra({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [O0(e)]);
}, pm = Object.assign({}, C), {
  useId: Ll
} = pm, gm = () => "", mm = typeof Ll > "u" ? gm : Ll;
function vm(e, n, t) {
  var r, o;
  const i = yn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, ma), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : ma.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = mm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Qa(() => {
    var l, u;
    if (!e)
      return n;
    const f = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((d) => {
      f[d] = Object.assign(Object.assign({}, f[d]), e.components[d]);
    });
    const h = `css-var-${c.replace(/:/g, "")}`, g = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: g
    });
  }, [s, a], (l, u) => l.some((f, h) => {
    const g = u[h];
    return !d1(f, g, !0);
  }));
}
var bm = ["children"], T0 = /* @__PURE__ */ C.createContext({});
function ym(e) {
  var n = e.children, t = jn(e, bm);
  return /* @__PURE__ */ C.createElement(T0.Provider, {
    value: t
  }, n);
}
var _m = /* @__PURE__ */ function(e) {
  lr(t, e);
  var n = zr(t);
  function t() {
    return vt(this, t), n.apply(this, arguments);
  }
  return bt(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(C.Component);
function Sm(e) {
  var n = C.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = C.useRef(e), i = vn(function() {
    return o.current;
  }), s = vn(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var dn = "none", co = "appear", lo = "enter", uo = "leave", Dl = "none", It = "prepare", Hn = "start", zn = "active", dc = "end", R0 = "prepared";
function Bl(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function Cm(e, n) {
  var t = {
    animationend: Bl("Animation", "AnimationEnd"),
    transitionend: Bl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var wm = Cm(cn(), typeof window < "u" ? window : {}), A0 = {};
if (cn()) {
  var Em = document.createElement("div");
  A0 = Em.style;
}
var fo = {};
function $0(e) {
  if (fo[e])
    return fo[e];
  var n = wm[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in A0)
        return fo[e] = n[i], fo[e];
    }
  return "";
}
var P0 = $0("animationend"), I0 = $0("transitionend"), N0 = !!(P0 && I0), Hl = P0 || "animationend", zl = I0 || "transitionend";
function Fl(e, n) {
  if (!e) return null;
  if (we(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const Om = function(e) {
  var n = ye();
  function t(o) {
    o && (o.removeEventListener(zl, e), o.removeEventListener(Hl, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(zl, e), o.addEventListener(Hl, e), n.current = o);
  }
  return C.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var k0 = cn() ? Jd : Ve;
const Tm = function() {
  var e = C.useRef(null);
  function n() {
    mn.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = mn(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(r, o - 1);
    });
    e.current = i;
  }
  return C.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var Rm = [It, Hn, zn, dc], Am = [It, R0], j0 = !1, $m = !0;
function M0(e) {
  return e === zn || e === dc;
}
const Pm = function(e, n, t) {
  var r = Dr(Dl), o = ae(r, 2), i = o[0], s = o[1], a = Tm(), c = ae(a, 2), l = c[0], u = c[1];
  function f() {
    s(It, !0);
  }
  var h = n ? Am : Rm;
  return k0(function() {
    if (i !== Dl && i !== dc) {
      var g = h.indexOf(i), d = h[g + 1], m = t(i);
      m === j0 ? s(d, !0) : d && l(function(p) {
        function b() {
          p.isCanceled() || s(d, !0);
        }
        m === !0 ? b() : Promise.resolve(m).then(b);
      });
    }
  }, [e, i]), C.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function Im(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, h = r.onAppearPrepare, g = r.onEnterPrepare, d = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, b = r.onLeaveStart, y = r.onAppearActive, w = r.onEnterActive, O = r.onLeaveActive, x = r.onAppearEnd, T = r.onEnterEnd, _ = r.onLeaveEnd, j = r.onVisibleChanged, L = Dr(), X = ae(L, 2), ne = X[0], ee = X[1], z = Sm(dn), G = ae(z, 2), Q = G[0], I = G[1], A = Dr(null), $ = ae(A, 2), N = $[0], B = $[1], H = Q(), K = ye(!1), te = ye(null);
  function Z() {
    return t();
  }
  var ce = ye(!1);
  function ue() {
    I(dn), B(null, !0);
  }
  var de = vn(function(le) {
    var Oe = Q();
    if (Oe !== dn) {
      var Je = Z();
      if (!(le && !le.deadline && le.target !== Je)) {
        var ft = ce.current, lt;
        Oe === co && ft ? lt = x == null ? void 0 : x(Je, le) : Oe === lo && ft ? lt = T == null ? void 0 : T(Je, le) : Oe === uo && ft && (lt = _ == null ? void 0 : _(Je, le)), ft && lt !== !1 && ue();
      }
    }
  }), Ee = Om(de), be = ae(Ee, 1), Ne = be[0], Pe = function(Oe) {
    switch (Oe) {
      case co:
        return Y(Y(Y({}, It, h), Hn, m), zn, y);
      case lo:
        return Y(Y(Y({}, It, g), Hn, p), zn, w);
      case uo:
        return Y(Y(Y({}, It, d), Hn, b), zn, O);
      default:
        return {};
    }
  }, pe = C.useMemo(function() {
    return Pe(H);
  }, [H]), Ke = Pm(H, !e, function(le) {
    if (le === It) {
      var Oe = pe[It];
      return Oe ? Oe(Z()) : j0;
    }
    if (k in pe) {
      var Je;
      B(((Je = pe[k]) === null || Je === void 0 ? void 0 : Je.call(pe, Z(), null)) || null);
    }
    return k === zn && H !== dn && (Ne(Z()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      de({
        deadline: !0
      });
    }, u))), k === R0 && ue(), $m;
  }), S = ae(Ke, 2), F = S[0], k = S[1], V = M0(k);
  ce.current = V;
  var R = ye(null);
  k0(function() {
    if (!(K.current && R.current === n)) {
      ee(n);
      var le = K.current;
      K.current = !0;
      var Oe;
      !le && n && a && (Oe = co), le && n && i && (Oe = lo), (le && !n && l || !le && f && !n && l) && (Oe = uo);
      var Je = Pe(Oe);
      Oe && (e || Je[It]) ? (I(Oe), F()) : I(dn), R.current = n;
    }
  }, [n]), Ve(function() {
    // Cancel appear
    (H === co && !a || // Cancel enter
    H === lo && !i || // Cancel leave
    H === uo && !l) && I(dn);
  }, [a, i, l]), Ve(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var re = C.useRef(!1);
  Ve(function() {
    ne && (re.current = !0), ne !== void 0 && H === dn && ((re.current || ne) && (j == null || j(ne)), re.current = !0);
  }, [ne, H]);
  var oe = N;
  return pe[It] && k === Hn && (oe = J({
    transition: "none"
  }, oe)), [H, k, oe, ne ?? n];
}
function Nm(e) {
  var n = e;
  we(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ C.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, h = o.motionName, g = o.leavedClassName, d = o.eventProps, m = C.useContext(T0), p = m.motion, b = t(o, p), y = ye(), w = ye();
    function O() {
      try {
        return y.current instanceof HTMLElement ? y.current : t1(w.current);
      } catch {
        return null;
      }
    }
    var x = Im(b, a, O, o), T = ae(x, 4), _ = T[0], j = T[1], L = T[2], X = T[3], ne = C.useRef(X);
    X && (ne.current = !0);
    var ee = C.useCallback(function($) {
      y.current = $, Tf(i, $);
    }, [i]), z, G = J(J({}, d), {}, {
      visible: a
    });
    if (!f)
      z = null;
    else if (_ === dn)
      X ? z = f(J({}, G), ee) : !l && ne.current && g ? z = f(J(J({}, G), {}, {
        className: g
      }), ee) : u || !l && !g ? z = f(J(J({}, G), {}, {
        style: {
          display: "none"
        }
      }), ee) : z = null;
    else {
      var Q;
      j === It ? Q = "prepare" : M0(j) ? Q = "active" : j === Hn && (Q = "start");
      var I = Fl(h, "".concat(_, "-").concat(Q));
      z = f(J(J({}, G), {}, {
        className: Ce(Fl(h, _), Y(Y({}, I, I && Q), h, typeof h == "string")),
        style: L
      }), ee);
    }
    if (/* @__PURE__ */ C.isValidElement(z) && Rf(z)) {
      var A = $f(z);
      A || (z = /* @__PURE__ */ C.cloneElement(z, {
        ref: ee
      }));
    }
    return /* @__PURE__ */ C.createElement(_m, {
      ref: w
    }, z);
  });
  return r.displayName = "CSSMotion", r;
}
const Ai = Nm(N0);
var ba = "add", ya = "keep", _a = "remove", ps = "removed";
function km(e) {
  var n;
  return e && we(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, J(J({}, n), {}, {
    key: String(n.key)
  });
}
function Sa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(km);
}
function jm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Sa(e), s = Sa(n);
  i.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var h = s[f];
      if (h.key === l.key) {
        r < f && (t = t.concat(s.slice(r, f).map(function(g) {
          return J(J({}, g), {}, {
            status: ba
          });
        })), r = f), t.push(J(J({}, h), {}, {
          status: ya
        })), r += 1, u = !0;
        break;
      }
    }
    u || t.push(J(J({}, l), {}, {
      status: _a
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return J(J({}, l), {}, {
      status: ba
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
      var f = u.key, h = u.status;
      return f !== l || h !== _a;
    }), t.forEach(function(u) {
      u.key === l && (u.status = ya);
    });
  }), t;
}
var Mm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Lm = ["status"], Dm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Bm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ai, t = /* @__PURE__ */ function(r) {
    lr(i, r);
    var o = zr(i);
    function i() {
      var s;
      vt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), Y($n(s), "state", {
        keyEntities: []
      }), Y($n(s), "removeKey", function(u) {
        s.setState(function(f) {
          var h = f.keyEntities.map(function(g) {
            return g.key !== u ? g : J(J({}, g), {}, {
              status: ps
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var f = s.state.keyEntities, h = f.filter(function(g) {
            var d = g.status;
            return d !== ps;
          }).length;
          h === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return bt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, h = l.onVisibleChanged;
        l.onAllRemoved;
        var g = jn(l, Mm), d = u || C.Fragment, m = {};
        return Dm.forEach(function(p) {
          m[p] = g[p], delete g[p];
        }), delete g.keys, /* @__PURE__ */ C.createElement(d, g, c.map(function(p, b) {
          var y = p.status, w = jn(p, Lm), O = y === ba || y === ya;
          return /* @__PURE__ */ C.createElement(n, xt({}, m, {
            key: w.key,
            visible: O,
            eventProps: w,
            onVisibleChanged: function(T) {
              h == null || h(T, {
                key: w.key
              }), T || a.removeKey(w.key);
            }
          }), function(x, T) {
            return f(J(J({}, x), {}, {
              index: b
            }), T);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = Sa(l), h = jm(u, f);
        return {
          keyEntities: h.filter(function(g) {
            var d = u.find(function(m) {
              var p = m.key;
              return g.key === p;
            });
            return !(d && d.status === ps && g.status === _a);
          })
        };
      }
    }]), i;
  }(C.Component);
  return Y(t, "defaultProps", {
    component: "div"
  }), t;
}
Bm(N0);
function Hm(e) {
  const {
    children: n
  } = e, [, t] = qr(), {
    motion: r
  } = t, o = C.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ C.createElement(ym, {
    motion: r
  }, n) : n;
}
const L0 = /* @__PURE__ */ C.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return yn("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (L0.displayName = "PropWarning");
const zm = process.env.NODE_ENV !== "production" ? L0 : () => null;
var Fm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Ca = !1;
process.env.NODE_ENV;
const Vm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let D0;
function qm() {
  return D0 || qo;
}
function Um(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const Wm = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (D0 = n), r && Um(r) && (process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zg(qm(), r));
}, Gm = (e) => {
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
    virtual: h,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: d,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: b,
    iconPrefixCls: y,
    theme: w,
    componentDisabled: O,
    segmented: x,
    statistic: T,
    spin: _,
    calendar: j,
    carousel: L,
    cascader: X,
    collapse: ne,
    typography: ee,
    checkbox: z,
    descriptions: G,
    divider: Q,
    drawer: I,
    skeleton: A,
    steps: $,
    image: N,
    layout: B,
    list: H,
    mentions: K,
    modal: te,
    progress: Z,
    result: ce,
    slider: ue,
    breadcrumb: de,
    menu: Ee,
    pagination: be,
    input: Ne,
    textArea: Pe,
    empty: pe,
    badge: Ke,
    radio: S,
    rate: F,
    switch: k,
    transfer: V,
    avatar: R,
    message: re,
    tag: oe,
    table: le,
    card: Oe,
    tabs: Je,
    timeline: ft,
    timePicker: lt,
    upload: Jt,
    notification: Rt,
    tree: Qt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: Zt,
    flex: en,
    wave: tn,
    dropdown: zt,
    warning: ke,
    tour: at,
    tooltip: Ft,
    popover: D,
    popconfirm: E,
    floatButtonGroup: me,
    variant: _e,
    inputNumber: Me,
    treeSelect: ie
  } = e, Ie = C.useCallback((He, v) => {
    const {
      prefixCls: M
    } = e;
    if (v)
      return v;
    const q = M || b.getPrefixCls("");
    return He ? `${q}-${He}` : q;
  }, [b.getPrefixCls, e.prefixCls]), Ze = y || b.iconPrefixCls || lc, At = t || b.csp;
  xm(Ze, At);
  const yt = vm(w, b.theme, {
    prefixCls: Ie("")
  });
  process.env.NODE_ENV !== "production" && (Ca = Ca || !!yt);
  const un = {
    csp: At,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: f,
    virtual: h,
    popupMatchSelectWidth: d ?? g,
    popupOverflow: m,
    getPrefixCls: Ie,
    iconPrefixCls: Ze,
    theme: yt,
    segmented: x,
    statistic: T,
    spin: _,
    calendar: j,
    carousel: L,
    cascader: X,
    collapse: ne,
    typography: ee,
    checkbox: z,
    descriptions: G,
    divider: Q,
    drawer: I,
    skeleton: A,
    steps: $,
    image: N,
    input: Ne,
    textArea: Pe,
    layout: B,
    list: H,
    mentions: K,
    modal: te,
    progress: Z,
    result: ce,
    slider: ue,
    breadcrumb: de,
    menu: Ee,
    pagination: be,
    empty: pe,
    badge: Ke,
    radio: S,
    rate: F,
    switch: k,
    transfer: V,
    avatar: R,
    message: re,
    tag: oe,
    table: le,
    card: Oe,
    tabs: Je,
    timeline: ft,
    timePicker: lt,
    upload: Jt,
    notification: Rt,
    tree: Qt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: Zt,
    flex: en,
    wave: tn,
    dropdown: zt,
    warning: ke,
    tour: at,
    tooltip: Ft,
    popover: D,
    popconfirm: E,
    floatButtonGroup: me,
    variant: _e,
    inputNumber: Me,
    treeSelect: ie
  };
  process.env.NODE_ENV !== "production" && yn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Vt = Object.assign({}, b);
  Object.keys(un).forEach((He) => {
    un[He] !== void 0 && (Vt[He] = un[He]);
  }), Vm.forEach((He) => {
    const v = e[He];
    v && (Vt[He] = v);
  }), typeof r < "u" && (Vt.button = Object.assign({
    autoInsertSpace: r
  }, Vt.button));
  const Ue = Qa(() => Vt, Vt, (He, v) => {
    const M = Object.keys(He), q = Object.keys(v);
    return M.length !== q.length || M.some((se) => He[se] !== v[se]);
  }), {
    layer: et
  } = C.useContext(Fr), $t = C.useMemo(() => ({
    prefixCls: Ze,
    csp: At,
    layer: et ? "antd" : void 0
  }), [Ze, At, et]);
  let De = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(zm, {
    dropdownMatchSelectWidth: g
  }), n);
  const Xr = C.useMemo(() => {
    var He, v, M, q;
    return yg(((He = Ti.Form) === null || He === void 0 ? void 0 : He.defaultValidateMessages) || {}, ((M = (v = Ue.locale) === null || v === void 0 ? void 0 : v.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}, ((q = Ue.form) === null || q === void 0 ? void 0 : q.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Ue, s == null ? void 0 : s.validateMessages]);
  Object.keys(Xr).length > 0 && (De = /* @__PURE__ */ C.createElement(Sg.Provider, {
    value: Xr
  }, De)), a && (De = /* @__PURE__ */ C.createElement(f0, {
    locale: a,
    _ANT_MARK__: u0
  }, De)), De = /* @__PURE__ */ C.createElement(ac.Provider, {
    value: $t
  }, De), c && (De = /* @__PURE__ */ C.createElement(Vg, {
    size: c
  }, De)), De = /* @__PURE__ */ C.createElement(Hm, null, De);
  const Gi = C.useMemo(() => {
    const He = yt || {}, {
      algorithm: v,
      token: M,
      components: q,
      cssVar: se
    } = He, Se = Fm(He, ["algorithm", "token", "components", "cssVar"]), Te = v && (!Array.isArray(v) || v.length > 0) ? Qs(v) : g0, ge = {};
    Object.entries(q || {}).forEach((st) => {
      let [Be, ze] = st;
      const Fe = Object.assign({}, ze);
      "algorithm" in Fe && (Fe.algorithm === !0 ? Fe.theme = Te : (Array.isArray(Fe.algorithm) || typeof Fe.algorithm == "function") && (Fe.theme = Qs(Fe.algorithm)), delete Fe.algorithm), ge[Be] = Fe;
    });
    const xe = Object.assign(Object.assign({}, Mr), M);
    return Object.assign(Object.assign({}, Se), {
      theme: Te,
      token: xe,
      components: ge,
      override: Object.assign({
        override: xe
      }, ge),
      cssVar: se
    });
  }, [yt]);
  return w && (De = /* @__PURE__ */ C.createElement(m0.Provider, {
    value: Gi
  }, De)), Ue.warning && (De = /* @__PURE__ */ C.createElement(c0.Provider, {
    value: Ue.warning
  }, De)), O !== void 0 && (De = /* @__PURE__ */ C.createElement(Fg, {
    disabled: O
  }, De)), /* @__PURE__ */ C.createElement(Lt.Provider, {
    value: Ue
  }, De);
}, fr = (e) => {
  const n = C.useContext(Lt), t = C.useContext(l0);
  return /* @__PURE__ */ C.createElement(Gm, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
fr.ConfigContext = Lt;
fr.SizeContext = tr;
fr.config = Wm;
fr.useConfig = qg;
Object.defineProperty(fr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Vr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), tr)
});
process.env.NODE_ENV !== "production" && (fr.displayName = "ConfigProvider");
function B0(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function Xm(e) {
  return B0(e) instanceof ShadowRoot;
}
function Ym(e) {
  return Xm(e) ? B0(e) : null;
}
function Km(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Jm(e, n) {
  bn(e, "[@ant-design/icons] ".concat(n));
}
function Vl(e) {
  return we(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (we(e.icon) === "object" || typeof e.icon == "function");
}
function ql() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Km(t)] = r;
    }
    return n;
  }, {});
}
function wa(e, n, t) {
  return t ? /* @__PURE__ */ W.createElement(e.tag, J(J({
    key: n
  }, ql(e.attrs)), t), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ W.createElement(e.tag, J({
    key: n
  }, ql(e.attrs)), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function H0(e) {
  return Lr(e)[0];
}
function z0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Qm = `
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
`, Zm = function(n) {
  var t = Et(ac), r = t.csp, o = t.prefixCls, i = t.layer, s = Qm;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ve(function() {
    var a = n.current, c = Ym(a);
    Pn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, ev = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Pr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function tv(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  Pr.primaryColor = n, Pr.secondaryColor = t || H0(n), Pr.calculated = !!t;
}
function nv() {
  return J({}, Pr);
}
var dr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = jn(n, ev), l = C.useRef(), u = Pr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || H0(s)
  }), Zm(l), Jm(Vl(t), "icon should be icon definiton, but got ".concat(t)), !Vl(t))
    return null;
  var f = t;
  return f && typeof f.icon == "function" && (f = J(J({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), wa(f.icon, "svg-".concat(f.name), J(J({
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
dr.displayName = "IconReact";
dr.getTwoToneColors = nv;
dr.setTwoToneColors = tv;
function F0(e) {
  var n = z0(e), t = ae(n, 2), r = t[0], o = t[1];
  return dr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function rv() {
  var e = dr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ov = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
F0(Vo.primary);
var ln = /* @__PURE__ */ C.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = jn(e, ov), u = C.useContext(ac), f = u.prefixCls, h = f === void 0 ? "anticon" : f, g = u.rootClassName, d = Ce(g, h, Y(Y({}, "".concat(h, "-").concat(r.name), !!r.name), "".concat(h, "-spin"), !!o || r.name === "loading"), t), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = z0(c), y = ae(b, 2), w = y[0], O = y[1];
  return /* @__PURE__ */ C.createElement("span", xt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: m,
    onClick: a,
    className: d
  }), /* @__PURE__ */ C.createElement(dr, {
    icon: r,
    primaryColor: w,
    secondaryColor: O,
    style: p
  }));
});
ln.displayName = "AntdIcon";
ln.getTwoToneColor = rv;
ln.setTwoToneColor = F0;
var iv = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: Fx
  }));
}, V0 = /* @__PURE__ */ C.forwardRef(iv);
process.env.NODE_ENV !== "production" && (V0.displayName = "CheckCircleFilled");
var sv = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: Vx
  }));
}, q0 = /* @__PURE__ */ C.forwardRef(sv);
process.env.NODE_ENV !== "production" && (q0.displayName = "CloseCircleFilled");
var av = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: qx
  }));
}, U0 = /* @__PURE__ */ C.forwardRef(av);
process.env.NODE_ENV !== "production" && (U0.displayName = "CloseOutlined");
var cv = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: Ux
  }));
}, W0 = /* @__PURE__ */ C.forwardRef(cv);
process.env.NODE_ENV !== "production" && (W0.displayName = "ExclamationCircleFilled");
var lv = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: Wx
  }));
}, G0 = /* @__PURE__ */ C.forwardRef(lv);
process.env.NODE_ENV !== "production" && (G0.displayName = "InfoCircleFilled");
var uv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, fv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, dv = "".concat(uv, " ").concat(fv).split(/[\s\n]+/), hv = "aria-", xv = "data-";
function Ul(e, n) {
  return e.indexOf(n) === 0;
}
function pv(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = J({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Ul(o, hv)) || // Data
    t.data && Ul(o, xv) || // Attr
    t.attr && dv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function gv(e) {
  return e && /* @__PURE__ */ W.isValidElement(e) && e.type === W.Fragment;
}
const X0 = (e, n, t) => /* @__PURE__ */ W.isValidElement(e) ? /* @__PURE__ */ W.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function hc(e, n) {
  return X0(e, e, n);
}
const ho = (e, n, t, r, o) => ({
  background: e,
  border: `${sn(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), mv = (e) => {
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
    colorTextHeading: h,
    withDescriptionPadding: g,
    defaultPadding: d
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, w0(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: d,
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
        color: h
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
        color: h,
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
}, vv = (e) => {
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
    colorInfoBorder: h,
    colorInfoBg: g
  } = e;
  return {
    [n]: {
      "&-success": ho(o, r, t, e, n),
      "&-info": ho(g, h, f, e, n),
      "&-warning": ho(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, ho(u, l, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, bv = (e) => {
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
        lineHeight: sn(i),
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
}, yv = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), _v = Ri("Alert", (e) => [mv(e), vv(e), bv(e)], yv);
var Wl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Sv = {
  success: V0,
  info: G0,
  error: q0,
  warning: W0
}, Cv = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = Sv[r] || null;
  return n ? X0(n, /* @__PURE__ */ C.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: Ce(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ C.createElement(o, {
    className: `${t}-icon`
  });
}, wv = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ C.createElement(U0, null) : r;
  return n ? /* @__PURE__ */ C.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, xc = /* @__PURE__ */ C.forwardRef((e, n) => {
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
    afterClose: h,
    showIcon: g,
    closable: d,
    closeText: m,
    closeIcon: p,
    action: b,
    id: y
  } = e, w = Wl(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [O, x] = C.useState(!1);
  process.env.NODE_ENV !== "production" && yn("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const T = C.useRef(null);
  C.useImperativeHandle(n, () => ({
    nativeElement: T.current
  }));
  const {
    getPrefixCls: _,
    direction: j,
    closable: L,
    closeIcon: X,
    className: ne,
    style: ee
  } = uc("alert"), z = _("alert", r), [G, Q, I] = _v(z), A = (ce) => {
    var ue;
    x(!0), (ue = e.onClose) === null || ue === void 0 || ue.call(e, ce);
  }, $ = C.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), N = C.useMemo(() => typeof d == "object" && d.closeIcon || m ? !0 : typeof d == "boolean" ? d : p !== !1 && p !== null && p !== void 0 ? !0 : !!L, [m, p, d, L]), B = i && g === void 0 ? !0 : g, H = Ce(z, `${z}-${$}`, {
    [`${z}-with-description`]: !!t,
    [`${z}-no-icon`]: !B,
    [`${z}-banner`]: !!i,
    [`${z}-rtl`]: j === "rtl"
  }, ne, s, a, I, Q), K = pv(w, {
    aria: !0,
    data: !0
  }), te = C.useMemo(() => typeof d == "object" && d.closeIcon ? d.closeIcon : m || (p !== void 0 ? p : typeof L == "object" && L.closeIcon ? L.closeIcon : X), [p, d, m, X]), Z = C.useMemo(() => {
    const ce = d ?? L;
    if (typeof ce == "object") {
      const {
        closeIcon: ue
      } = ce;
      return Wl(ce, ["closeIcon"]);
    }
    return {};
  }, [d, L]);
  return G(/* @__PURE__ */ C.createElement(Ai, {
    visible: !O,
    motionName: `${z}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ce) => ({
      maxHeight: ce.offsetHeight
    }),
    onLeaveEnd: h
  }, (ce, ue) => {
    let {
      className: de,
      style: Ee
    } = ce;
    return /* @__PURE__ */ C.createElement("div", Object.assign({
      id: y,
      ref: Si(T, ue),
      "data-show": !O,
      className: Ce(H, de),
      style: Object.assign(Object.assign(Object.assign({}, ee), c), Ee),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, K), B ? /* @__PURE__ */ C.createElement(Cv, {
      description: t,
      icon: e.icon,
      prefixCls: z,
      type: $
    }) : null, /* @__PURE__ */ C.createElement("div", {
      className: `${z}-content`
    }, o ? /* @__PURE__ */ C.createElement("div", {
      className: `${z}-message`
    }, o) : null, t ? /* @__PURE__ */ C.createElement("div", {
      className: `${z}-description`
    }, t) : null), b ? /* @__PURE__ */ C.createElement("div", {
      className: `${z}-action`
    }, b) : null, /* @__PURE__ */ C.createElement(wv, {
      isClosable: N,
      prefixCls: z,
      closeIcon: te,
      handleClose: A,
      ariaProps: Z
    }));
  }));
});
process.env.NODE_ENV !== "production" && (xc.displayName = "Alert");
function Ev(e, n, t) {
  return n = Jn(n), Pf(e, Za() ? Reflect.construct(n, t || [], Jn(e).constructor) : n.apply(e, t));
}
let Ov = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return vt(this, n), t = Ev(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return lr(n, e), bt(n, [{
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
      return a ? /* @__PURE__ */ C.createElement(xc, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ C.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, f)
      }) : s;
    }
  }]);
}(C.Component);
const Y0 = xc;
Y0.ErrorBoundary = Ov;
var Tv = function(n, t) {
  return /* @__PURE__ */ C.createElement(ln, xt({}, n, {
    ref: t,
    icon: Gx
  }));
}, K0 = /* @__PURE__ */ C.forwardRef(Tv);
process.env.NODE_ENV !== "production" && (K0.displayName = "LoadingOutlined");
function Br() {
  Br = function() {
    return n;
  };
  var e, n = {}, t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function(I, A, $) {
    I[A] = $.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(I, A, $) {
    return Object.defineProperty(I, A, {
      value: $,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), I[A];
  }
  try {
    l({}, "");
  } catch {
    l = function($, N, B) {
      return $[N] = B;
    };
  }
  function u(I, A, $, N) {
    var B = A && A.prototype instanceof b ? A : b, H = Object.create(B.prototype), K = new G(N || []);
    return o(H, "_invoke", {
      value: X(I, $, K)
    }), H;
  }
  function f(I, A, $) {
    try {
      return {
        type: "normal",
        arg: I.call(A, $)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  n.wrap = u;
  var h = "suspendedStart", g = "suspendedYield", d = "executing", m = "completed", p = {};
  function b() {
  }
  function y() {
  }
  function w() {
  }
  var O = {};
  l(O, s, function() {
    return this;
  });
  var x = Object.getPrototypeOf, T = x && x(x(Q([])));
  T && T !== t && r.call(T, s) && (O = T);
  var _ = w.prototype = b.prototype = Object.create(O);
  function j(I) {
    ["next", "throw", "return"].forEach(function(A) {
      l(I, A, function($) {
        return this._invoke(A, $);
      });
    });
  }
  function L(I, A) {
    function $(B, H, K, te) {
      var Z = f(I[B], I, H);
      if (Z.type !== "throw") {
        var ce = Z.arg, ue = ce.value;
        return ue && we(ue) == "object" && r.call(ue, "__await") ? A.resolve(ue.__await).then(function(de) {
          $("next", de, K, te);
        }, function(de) {
          $("throw", de, K, te);
        }) : A.resolve(ue).then(function(de) {
          ce.value = de, K(ce);
        }, function(de) {
          return $("throw", de, K, te);
        });
      }
      te(Z.arg);
    }
    var N;
    o(this, "_invoke", {
      value: function(H, K) {
        function te() {
          return new A(function(Z, ce) {
            $(H, K, Z, ce);
          });
        }
        return N = N ? N.then(te, te) : te();
      }
    });
  }
  function X(I, A, $) {
    var N = h;
    return function(B, H) {
      if (N === d) throw Error("Generator is already running");
      if (N === m) {
        if (B === "throw") throw H;
        return {
          value: e,
          done: !0
        };
      }
      for ($.method = B, $.arg = H; ; ) {
        var K = $.delegate;
        if (K) {
          var te = ne(K, $);
          if (te) {
            if (te === p) continue;
            return te;
          }
        }
        if ($.method === "next") $.sent = $._sent = $.arg;
        else if ($.method === "throw") {
          if (N === h) throw N = m, $.arg;
          $.dispatchException($.arg);
        } else $.method === "return" && $.abrupt("return", $.arg);
        N = d;
        var Z = f(I, A, $);
        if (Z.type === "normal") {
          if (N = $.done ? m : g, Z.arg === p) continue;
          return {
            value: Z.arg,
            done: $.done
          };
        }
        Z.type === "throw" && (N = m, $.method = "throw", $.arg = Z.arg);
      }
    };
  }
  function ne(I, A) {
    var $ = A.method, N = I.iterator[$];
    if (N === e) return A.delegate = null, $ === "throw" && I.iterator.return && (A.method = "return", A.arg = e, ne(I, A), A.method === "throw") || $ !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + $ + "' method")), p;
    var B = f(N, I.iterator, A.arg);
    if (B.type === "throw") return A.method = "throw", A.arg = B.arg, A.delegate = null, p;
    var H = B.arg;
    return H ? H.done ? (A[I.resultName] = H.value, A.next = I.nextLoc, A.method !== "return" && (A.method = "next", A.arg = e), A.delegate = null, p) : H : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, p);
  }
  function ee(I) {
    var A = {
      tryLoc: I[0]
    };
    1 in I && (A.catchLoc = I[1]), 2 in I && (A.finallyLoc = I[2], A.afterLoc = I[3]), this.tryEntries.push(A);
  }
  function z(I) {
    var A = I.completion || {};
    A.type = "normal", delete A.arg, I.completion = A;
  }
  function G(I) {
    this.tryEntries = [{
      tryLoc: "root"
    }], I.forEach(ee, this), this.reset(!0);
  }
  function Q(I) {
    if (I || I === "") {
      var A = I[s];
      if (A) return A.call(I);
      if (typeof I.next == "function") return I;
      if (!isNaN(I.length)) {
        var $ = -1, N = function B() {
          for (; ++$ < I.length; ) if (r.call(I, $)) return B.value = I[$], B.done = !1, B;
          return B.value = e, B.done = !0, B;
        };
        return N.next = N;
      }
    }
    throw new TypeError(we(I) + " is not iterable");
  }
  return y.prototype = w, o(_, "constructor", {
    value: w,
    configurable: !0
  }), o(w, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = l(w, c, "GeneratorFunction"), n.isGeneratorFunction = function(I) {
    var A = typeof I == "function" && I.constructor;
    return !!A && (A === y || (A.displayName || A.name) === "GeneratorFunction");
  }, n.mark = function(I) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(I, w) : (I.__proto__ = w, l(I, c, "GeneratorFunction")), I.prototype = Object.create(_), I;
  }, n.awrap = function(I) {
    return {
      __await: I
    };
  }, j(L.prototype), l(L.prototype, a, function() {
    return this;
  }), n.AsyncIterator = L, n.async = function(I, A, $, N, B) {
    B === void 0 && (B = Promise);
    var H = new L(u(I, A, $, N), B);
    return n.isGeneratorFunction(A) ? H : H.next().then(function(K) {
      return K.done ? K.value : H.next();
    });
  }, j(_), l(_, c, "Generator"), l(_, s, function() {
    return this;
  }), l(_, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(I) {
    var A = Object(I), $ = [];
    for (var N in A) $.push(N);
    return $.reverse(), function B() {
      for (; $.length; ) {
        var H = $.pop();
        if (H in A) return B.value = H, B.done = !1, B;
      }
      return B.done = !0, B;
    };
  }, n.values = Q, G.prototype = {
    constructor: G,
    reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(z), !A) for (var $ in this) $.charAt(0) === "t" && r.call(this, $) && !isNaN(+$.slice(1)) && (this[$] = e);
    },
    stop: function() {
      this.done = !0;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw") throw A.arg;
      return this.rval;
    },
    dispatchException: function(A) {
      if (this.done) throw A;
      var $ = this;
      function N(ce, ue) {
        return K.type = "throw", K.arg = A, $.next = ce, ue && ($.method = "next", $.arg = e), !!ue;
      }
      for (var B = this.tryEntries.length - 1; B >= 0; --B) {
        var H = this.tryEntries[B], K = H.completion;
        if (H.tryLoc === "root") return N("end");
        if (H.tryLoc <= this.prev) {
          var te = r.call(H, "catchLoc"), Z = r.call(H, "finallyLoc");
          if (te && Z) {
            if (this.prev < H.catchLoc) return N(H.catchLoc, !0);
            if (this.prev < H.finallyLoc) return N(H.finallyLoc);
          } else if (te) {
            if (this.prev < H.catchLoc) return N(H.catchLoc, !0);
          } else {
            if (!Z) throw Error("try statement without catch or finally");
            if (this.prev < H.finallyLoc) return N(H.finallyLoc);
          }
        }
      }
    },
    abrupt: function(A, $) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var B = this.tryEntries[N];
        if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
          var H = B;
          break;
        }
      }
      H && (A === "break" || A === "continue") && H.tryLoc <= $ && $ <= H.finallyLoc && (H = null);
      var K = H ? H.completion : {};
      return K.type = A, K.arg = $, H ? (this.method = "next", this.next = H.finallyLoc, p) : this.complete(K);
    },
    complete: function(A, $) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && $ && (this.next = $), p;
    },
    finish: function(A) {
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var N = this.tryEntries[$];
        if (N.finallyLoc === A) return this.complete(N.completion, N.afterLoc), z(N), p;
      }
    },
    catch: function(A) {
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var N = this.tryEntries[$];
        if (N.tryLoc === A) {
          var B = N.completion;
          if (B.type === "throw") {
            var H = B.arg;
            z(N);
          }
          return H;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(A, $, N) {
      return this.delegate = {
        iterator: Q(A),
        resultName: $,
        nextLoc: N
      }, this.method === "next" && (this.arg = e), p;
    }
  }, n;
}
function Gl(e, n, t, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void t(l);
  }
  a.done ? n(c) : Promise.resolve(c).then(r, o);
}
function J0(e) {
  return function() {
    var n = this, t = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(n, t);
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
var Ur = J({}, Tu), Rv = Ur.version, gs = Ur.render, Av = Ur.unmountComponentAtNode, $i;
try {
  var $v = Number((Rv || "").split(".")[0]);
  $v >= 18 && ($i = Ur.createRoot);
} catch {
}
function Xl(e) {
  var n = Ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  n && we(n) === "object" && (n.usingClientEntryPoint = e);
}
var Wo = "__rc_react_root__";
function Pv(e, n) {
  Xl(!0);
  var t = n[Wo] || $i(n);
  Xl(!1), t.render(e), n[Wo] = t;
}
function Iv(e, n) {
  gs == null || gs(e, n);
}
function Nv(e, n) {
  if ($i) {
    Pv(e, n);
    return;
  }
  Iv(e, n);
}
function kv(e) {
  return Ea.apply(this, arguments);
}
function Ea() {
  return Ea = J0(/* @__PURE__ */ Br().mark(function e(n) {
    return Br().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = n[Wo]) === null || o === void 0 || o.unmount(), delete n[Wo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ea.apply(this, arguments);
}
function jv(e) {
  Av(e);
}
function Mv(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = J0(/* @__PURE__ */ Br().mark(function e(n) {
    return Br().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if ($i === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", kv(n));
        case 2:
          jv(n);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
const Lv = (e, n) => {
  if (process.env.NODE_ENV !== "production") {
    const t = parseInt(C.version.split(".")[0], 10), r = Object.keys(Tu);
    process.env.NODE_ENV !== "production" && Vr(t < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Nv(e, n), () => Mv(n);
};
let Dv = Lv;
function Bv() {
  return Dv;
}
function Q0(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
const Hv = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var n = e.getBBox(), t = n.width, r = n.height;
      if (t || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, zv = (e) => {
  const {
    componentCls: n,
    colorPrimary: t
  } = e;
  return {
    [n]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${t})`,
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
}, Fv = dm("Wave", (e) => [zv(e)]), Z0 = `${qo}-wave-target`;
function ms(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Vv(e) {
  const {
    borderTopColor: n,
    borderColor: t,
    backgroundColor: r
  } = getComputedStyle(e);
  return ms(n) ? n : ms(t) ? t : ms(r) ? r : null;
}
function vs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const qv = (e) => {
  const {
    className: n,
    target: t,
    component: r,
    registerUnmount: o
  } = e, i = C.useRef(null), s = C.useRef(null);
  C.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = C.useState(null), [l, u] = C.useState([]), [f, h] = C.useState(0), [g, d] = C.useState(0), [m, p] = C.useState(0), [b, y] = C.useState(0), [w, O] = C.useState(!1), x = {
    left: f,
    top: g,
    width: m,
    height: b,
    borderRadius: l.map((j) => `${j}px`).join(" ")
  };
  a && (x["--wave-color"] = a);
  function T() {
    const j = getComputedStyle(t);
    c(Vv(t));
    const L = j.position === "static", {
      borderLeftWidth: X,
      borderTopWidth: ne
    } = j;
    h(L ? t.offsetLeft : vs(-parseFloat(X))), d(L ? t.offsetTop : vs(-parseFloat(ne))), p(t.offsetWidth), y(t.offsetHeight);
    const {
      borderTopLeftRadius: ee,
      borderTopRightRadius: z,
      borderBottomLeftRadius: G,
      borderBottomRightRadius: Q
    } = j;
    u([ee, z, Q, G].map((I) => vs(parseFloat(I))));
  }
  if (C.useEffect(() => {
    if (t) {
      const j = mn(() => {
        T(), O(!0);
      });
      let L;
      return typeof ResizeObserver < "u" && (L = new ResizeObserver(T), L.observe(t)), () => {
        mn.cancel(j), L == null || L.disconnect();
      };
    }
  }, []), !w)
    return null;
  const _ = (r === "Checkbox" || r === "Radio") && (t == null ? void 0 : t.classList.contains(Z0));
  return /* @__PURE__ */ C.createElement(Ai, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (j, L) => {
      var X, ne;
      if (L.deadline || L.propertyName === "opacity") {
        const ee = (X = i.current) === null || X === void 0 ? void 0 : X.parentElement;
        (ne = s.current) === null || ne === void 0 || ne.call(s).then(() => {
          ee == null || ee.remove();
        });
      }
      return !1;
    }
  }, (j, L) => {
    let {
      className: X
    } = j;
    return /* @__PURE__ */ C.createElement("div", {
      ref: Si(i, L),
      className: Ce(n, X, {
        "wave-quick": _
      }),
      style: x
    });
  });
}, Uv = (e, n) => {
  var t;
  const {
    component: r
  } = n;
  if (r === "Checkbox" && !(!((t = e.querySelector("input")) === null || t === void 0) && t.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Bv();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ C.createElement(qv, Object.assign({}, n, {
    target: e,
    registerUnmount: a
  })), o);
}, Wv = (e, n, t) => {
  const {
    wave: r
  } = C.useContext(Lt), [, o, i] = qr(), s = vn((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const f = u.querySelector(`.${Z0}`) || u, {
      showEffect: h
    } = r || {};
    (h || Uv)(f, {
      className: n,
      token: o,
      component: t,
      event: l,
      hashId: i
    });
  }), a = C.useRef(null);
  return (l) => {
    mn.cancel(a.current), a.current = mn(() => {
      s(l);
    });
  };
}, ed = (e) => {
  const {
    children: n,
    disabled: t,
    component: r
  } = e, {
    getPrefixCls: o
  } = Et(Lt), i = ye(null), s = o("wave"), [, a] = Fv(s), c = Wv(i, Ce(s, a), r);
  if (W.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || t)
      return;
    const f = (h) => {
      !Hv(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(h);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [t]), !/* @__PURE__ */ W.isValidElement(n))
    return n ?? null;
  const l = Rf(n) ? Si($f(n), i) : i;
  return hc(n, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (ed.displayName = "Wave");
const Gv = (e) => {
  const n = W.useContext(tr);
  return W.useMemo(() => e ? typeof e == "string" ? e ?? n : typeof e == "function" ? e(n) : n : n, [e, n]);
}, Xv = /* @__PURE__ */ C.createContext(null), Yv = (e, n) => {
  const t = C.useContext(Xv), r = C.useMemo(() => {
    if (!t)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = t, a = o === "vertical" ? "-vertical-" : "-";
    return Ce(`${e}-compact${a}item`, {
      [`${e}-compact${a}first-item`]: i,
      [`${e}-compact${a}last-item`]: s,
      [`${e}-compact${a}item-rtl`]: n === "rtl"
    });
  }, [e, n, t]);
  return {
    compactSize: t == null ? void 0 : t.compactSize,
    compactDirection: t == null ? void 0 : t.compactDirection,
    compactItemClassnames: r
  };
};
var Kv = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const td = /* @__PURE__ */ C.createContext(void 0), Jv = (e) => {
  const {
    getPrefixCls: n,
    direction: t
  } = C.useContext(Lt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = Kv(e, ["prefixCls", "size", "className"]), a = n("btn-group", r), [, , c] = qr(), l = C.useMemo(() => {
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
    const f = yn("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Ce(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: t === "rtl"
  }, i, c);
  return /* @__PURE__ */ C.createElement(td.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, Yl = /^[\u4E00-\u9FA5]{2}$/, Ta = Yl.test.bind(Yl);
function Kl(e) {
  return typeof e == "string";
}
function xo(e) {
  return e === "text" || e === "link";
}
function Qv(e, n) {
  if (e == null)
    return;
  const t = n ? " " : "";
  return typeof e != "string" && typeof e != "number" && Kl(e.type) && Ta(e.props.children) ? hc(e, {
    children: e.props.children.split("").join(t)
  }) : Kl(e) ? Ta(e) ? /* @__PURE__ */ W.createElement("span", null, e.split("").join(t)) : /* @__PURE__ */ W.createElement("span", null, e) : gv(e) ? /* @__PURE__ */ W.createElement("span", null, e) : e;
}
function Zv(e, n) {
  let t = !1;
  const r = [];
  return W.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (t && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    t = s;
  }), W.Children.map(r, (o) => Qv(o, n));
}
["default", "primary", "danger"].concat(Xt(fc));
const Ra = /* @__PURE__ */ or((e, n) => {
  const {
    className: t,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = Ce(`${i}-icon`, t);
  return /* @__PURE__ */ W.createElement("span", {
    ref: n,
    className: s,
    style: r
  }, o);
}), Jl = /* @__PURE__ */ or((e, n) => {
  const {
    prefixCls: t,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = Ce(`${t}-loading-icon`, r);
  return /* @__PURE__ */ W.createElement(Ra, {
    prefixCls: t,
    className: s,
    style: o,
    ref: n
  }, /* @__PURE__ */ W.createElement(K0, {
    className: i
  }));
}), bs = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ys = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), eb = (e) => {
  const {
    prefixCls: n,
    loading: t,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!t;
  return r ? /* @__PURE__ */ W.createElement(Jl, {
    prefixCls: n,
    className: o,
    style: i
  }) : /* @__PURE__ */ W.createElement(Ai, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${n}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: bs,
    onAppearActive: ys,
    onEnterStart: bs,
    onEnterActive: ys,
    onLeaveStart: ys,
    onLeaveActive: bs
  }, (c, l) => {
    let {
      className: u,
      style: f
    } = c;
    const h = Object.assign(Object.assign({}, i), f);
    return /* @__PURE__ */ W.createElement(Jl, {
      prefixCls: n,
      className: Ce(o, u),
      style: h,
      ref: l
    });
  });
}, Ql = (e, n) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: n
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: n
        }
      }
    }
  }
}), tb = (e) => {
  const {
    componentCls: n,
    fontSize: t,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${n}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${n}`]: {
          "&:not(:last-child)": {
            [`&, & > ${n}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${n}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [n]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${n}-icon-only`]: {
          fontSize: t
        }
      },
      // Border Color
      Ql(`${n}-primary`, o),
      Ql(`${n}-danger`, i)
    ]
  };
}, rt = Math.round;
function _s(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Zl = (e, n, t) => t === 0 ? e : e / 100;
function Sr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Pi {
  constructor(n) {
    Y(this, "isValid", !0), Y(this, "r", 0), Y(this, "g", 0), Y(this, "b", 0), Y(this, "a", 1), Y(this, "_h", void 0), Y(this, "_s", void 0), Y(this, "_l", void 0), Y(this, "_v", void 0), Y(this, "_max", void 0), Y(this, "_min", void 0), Y(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Pi)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = Sr(n.r), this.g = Sr(n.g), this.b = Sr(n.b), this.a = typeof n.a == "number" ? Sr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = rt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => rt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = rt(this.a * 255).toString(16);
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
    const n = this.getHue(), t = rt(this.getSaturation() * 100), r = rt(this.getLightness() * 100);
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
    return o[n] = Sr(t, r), o;
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
      const h = rt(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = rt((i + f) * 255), this.g = rt((s + f) * 255), this.b = rt((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = rt(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = rt(r * (1 - t) * 255), u = rt(r * (1 - t * c) * 255), f = rt(r * (1 - t * (1 - c)) * 255);
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
    const t = _s(n, Zl);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = _s(n, Zl);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = _s(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? rt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var nb = ["b"], rb = ["v"], Ss = function(n) {
  return Math.round(Number(n || 0));
}, ob = function(n) {
  if (n instanceof Pi)
    return n;
  if (n && we(n) === "object" && "h" in n && "b" in n) {
    var t = n, r = t.b, o = jn(t, nb);
    return J(J({}, o), {}, {
      v: r
    });
  }
  return typeof n == "string" && /hsb/.test(n) ? n.replace(/hsb/, "hsv") : n;
}, an = /* @__PURE__ */ function(e) {
  lr(t, e);
  var n = zr(t);
  function t(r) {
    return vt(this, t), n.call(this, ob(r));
  }
  return bt(t, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Ss(o.s * 100), s = Ss(o.b * 100), a = Ss(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = jn(o, rb);
      return J(J({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), t;
}(Pi), ib = "rc-color-picker", qn = function(n) {
  return n instanceof an ? n : new an(n);
}, sb = qn("#1677ff"), nd = function(n) {
  var t = n.offset, r = n.targetRef, o = n.containerRef, i = n.color, s = n.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), f = u.width, h = u.height, g = f / 2, d = h / 2, m = (t.x + g) / c, p = 1 - (t.y + d) / l, b = i.toHsb(), y = m, w = (t.x + g) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return qn(J(J({}, b), {}, {
          h: w <= 0 ? 0 : w
        }));
      case "alpha":
        return qn(J(J({}, b), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return qn({
    h: b.h,
    s: m <= 0 ? 0 : m,
    b: p >= 1 ? 1 : p,
    a: b.a
  });
}, rd = function(n, t) {
  var r = n.toHsb();
  switch (t) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: n.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, ab = function(n) {
  var t = n.color, r = n.prefixCls, o = n.className, i = n.style, s = n.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ W.createElement("div", {
    className: Ce(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: t
    }
  }));
};
function cb(e) {
  var n = "touches" in e ? e.touches[0] : e, t = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: n.pageX - t,
    pageY: n.pageY - r
  };
}
function od(e) {
  var n = e.targetRef, t = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = ut({
    x: 0,
    y: 0
  }), u = ae(l, 2), f = u[0], h = u[1], g = ye(null), d = ye(null);
  Ve(function() {
    h(s());
  }, [a]), Ve(function() {
    return function() {
      document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", d.current), g.current = null, d.current = null;
    };
  }, []);
  var m = function(O) {
    var x = cb(O), T = x.pageX, _ = x.pageY, j = t.current.getBoundingClientRect(), L = j.x, X = j.y, ne = j.width, ee = j.height, z = n.current.getBoundingClientRect(), G = z.width, Q = z.height, I = G / 2, A = Q / 2, $ = Math.max(0, Math.min(T - L, ne)) - I, N = Math.max(0, Math.min(_ - X, ee)) - A, B = {
      x: $,
      y: r === "x" ? f.y : N
    };
    if (G === 0 && Q === 0 || G !== Q)
      return !1;
    o == null || o(B);
  }, p = function(O) {
    O.preventDefault(), m(O);
  }, b = function(O) {
    O.preventDefault(), document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", d.current), g.current = null, d.current = null, i == null || i();
  }, y = function(O) {
    document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", d.current), !c && (m(O), document.addEventListener("mousemove", p), document.addEventListener("mouseup", b), document.addEventListener("touchmove", p), document.addEventListener("touchend", b), g.current = p, d.current = b);
  };
  return [f, y];
}
var id = function(n) {
  var t = n.size, r = t === void 0 ? "default" : t, o = n.color, i = n.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: Ce("".concat(i, "-handler"), Y({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, sd = function(n) {
  var t = n.children, r = n.style, o = n.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(o, "-palette"),
    style: J({
      position: "relative"
    }, r)
  }, t);
}, ad = /* @__PURE__ */ or(function(e, n) {
  var t = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ W.createElement("div", {
    ref: n,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, t);
}), lb = function(n) {
  var t = n.color, r = n.onChange, o = n.prefixCls, i = n.onChangeComplete, s = n.disabled, a = ye(), c = ye(), l = ye(t), u = vn(function(m) {
    var p = nd({
      offset: m,
      targetRef: c,
      containerRef: a,
      color: t
    });
    l.current = p, r(p);
  }), f = od({
    color: t,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return rd(t);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), h = ae(f, 2), g = h[0], d = h[1];
  return /* @__PURE__ */ W.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: d,
    onTouchStart: d
  }, /* @__PURE__ */ W.createElement(sd, {
    prefixCls: o
  }, /* @__PURE__ */ W.createElement(ad, {
    x: g.x,
    y: g.y,
    ref: c
  }, /* @__PURE__ */ W.createElement(id, {
    color: t.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(t.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, ub = function(n, t) {
  var r = Yg(n, {
    value: t
  }), o = ae(r, 2), i = o[0], s = o[1], a = Nr(function() {
    return qn(i);
  }, [i]);
  return [a, s];
}, fb = function(n) {
  var t = n.colors, r = n.children, o = n.direction, i = o === void 0 ? "to right" : o, s = n.type, a = n.prefixCls, c = Nr(function() {
    return t.map(function(l, u) {
      var f = qn(l);
      return s === "alpha" && u === t.length - 1 && (f = new an(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [t, s]);
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, db = function(n) {
  var t = n.prefixCls, r = n.colors, o = n.disabled, i = n.onChange, s = n.onChangeComplete, a = n.color, c = n.type, l = ye(), u = ye(), f = ye(a), h = function(x) {
    return c === "hue" ? x.getHue() : x.a * 100;
  }, g = vn(function(O) {
    var x = nd({
      offset: O,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    f.current = x, i(h(x));
  }), d = od({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return rd(a, c);
    },
    onDragChange: g,
    onDragChangeComplete: function() {
      s(h(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), m = ae(d, 2), p = m[0], b = m[1], y = W.useMemo(function() {
    if (c === "hue") {
      var O = a.toHsb();
      O.s = 1, O.b = 1, O.a = 1;
      var x = new an(O);
      return x;
    }
    return a;
  }, [a, c]), w = W.useMemo(function() {
    return r.map(function(O) {
      return "".concat(O.color, " ").concat(O.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ W.createElement("div", {
    ref: l,
    className: Ce("".concat(t, "-slider"), "".concat(t, "-slider-").concat(c)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ W.createElement(sd, {
    prefixCls: t
  }, /* @__PURE__ */ W.createElement(ad, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ W.createElement(id, {
    size: "small",
    color: y.toHexString(),
    prefixCls: t
  })), /* @__PURE__ */ W.createElement(fb, {
    colors: w,
    type: c,
    prefixCls: t
  })));
};
function hb(e) {
  return C.useMemo(function() {
    var n = e || {}, t = n.slider;
    return [t || db];
  }, [e]);
}
var xb = [{
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
}], pb = /* @__PURE__ */ or(function(e, n) {
  var t = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? ib : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, h = f === void 0 ? !1 : f, g = e.disabled, d = g === void 0 ? !1 : g, m = e.components, p = hb(m), b = ae(p, 1), y = b[0], w = ub(r || sb, t), O = ae(w, 2), x = O[0], T = O[1], _ = Nr(function() {
    return x.setA(1).toRgbString();
  }, [x]), j = function(N, B) {
    t || T(N), s == null || s(N, B);
  }, L = function(N) {
    return new an(x.setHue(N));
  }, X = function(N) {
    return new an(x.setA(N / 100));
  }, ne = function(N) {
    j(L(N), {
      type: "hue",
      value: N
    });
  }, ee = function(N) {
    j(X(N), {
      type: "alpha",
      value: N
    });
  }, z = function(N) {
    a && a(L(N));
  }, G = function(N) {
    a && a(X(N));
  }, Q = Ce("".concat(i, "-panel"), c, Y({}, "".concat(i, "-panel-disabled"), d)), I = {
    prefixCls: i,
    disabled: d,
    color: x
  }, A = /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(lb, xt({
    onChange: j
  }, I, {
    onChangeComplete: a
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ W.createElement("div", {
    className: Ce("".concat(i, "-slider-group"), Y({}, "".concat(i, "-slider-group-disabled-alpha"), h))
  }, /* @__PURE__ */ W.createElement(y, xt({}, I, {
    type: "hue",
    colors: xb,
    min: 0,
    max: 359,
    value: x.getHue(),
    onChange: ne,
    onChangeComplete: z
  })), !h && /* @__PURE__ */ W.createElement(y, xt({}, I, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: _
    }],
    min: 0,
    max: 100,
    value: x.a * 100,
    onChange: ee,
    onChangeComplete: G
  }))), /* @__PURE__ */ W.createElement(ab, {
    color: x.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ W.createElement("div", {
    className: Q,
    style: l,
    ref: n
  }, typeof u == "function" ? u(A) : A);
});
process.env.NODE_ENV !== "production" && (pb.displayName = "ColorPicker");
const gb = (e, n) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, n ? 8 : 6)) || "", mb = (e, n) => e ? gb(e, n) : "";
let vb = /* @__PURE__ */ function() {
  function e(n) {
    vt(this, e);
    var t;
    if (this.cleared = !1, n instanceof e) {
      this.metaColor = n.metaColor.clone(), this.colors = (t = n.colors) === null || t === void 0 ? void 0 : t.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = n.cleared;
      return;
    }
    const r = Array.isArray(n);
    r && n.length ? (this.colors = n.map((o) => {
      let {
        color: i,
        percent: s
      } = o;
      return {
        color: new e(i),
        percent: s
      };
    }), this.metaColor = new an(this.colors[0].color.metaColor)) : this.metaColor = new an(r ? "" : n), (!n || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return bt(e, [{
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
      return mb(this.toHexString(), this.metaColor.a < 1);
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
        colors: t
      } = this;
      return t ? `linear-gradient(90deg, ${t.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(t) {
      return !t || this.isGradient() !== t.isGradient() ? !1 : this.isGradient() ? this.colors.length === t.colors.length && this.colors.every((r, o) => {
        const i = t.colors[o];
        return r.percent === i.percent && r.color.equals(i.color);
      }) : this.toHexString() === t.toHexString();
    }
  }]);
}();
const bb = (e, n) => {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new an(e.toRgbString()).onBackground(n).toHsv();
  return i <= 0.5 ? s.v > 0.5 : t * 0.299 + r * 0.587 + o * 0.114 > 192;
}, cd = (e) => {
  const {
    paddingInline: n,
    onlyIconSize: t
  } = e;
  return _n(e, {
    buttonPaddingHorizontal: n,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: t
  });
}, ld = (e) => {
  var n, t, r, o, i, s;
  const a = (n = e.contentFontSize) !== null && n !== void 0 ? n : e.fontSize, c = (t = e.contentFontSizeSM) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Po(a), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Po(c), h = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : Po(l), g = bb(new vb(e.colorBgSolid), "#fff") ? "#000" : "#fff", d = fc.reduce((m, p) => Object.assign(Object.assign({}, m), {
    [`${p}ShadowColor`]: `0 ${sn(e.controlOutlineWidth)} 0 ${Tr(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, d), {
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
    solidTextColor: g,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: h,
    paddingBlock: Math.max((e.controlHeight - a * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * h) / 2 - e.lineWidth, 0)
  });
}, yb = (e) => {
  const {
    componentCls: n,
    iconCls: t,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = e;
  return {
    [n]: {
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
      border: `${sn(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${n}-icon > svg`]: E0(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": fm(e),
      [`&${n}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${n}-two-chinese-chars > *:not(${t})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${n}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${n}-compact-item`]: {
          flex: "none"
        },
        [`&${n}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${n}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${n}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${s}`).join(",")
      },
      // iconPosition
      [`&:not(${n}-icon-end)`]: {
        [`${n}-loading-icon-motion`]: {
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
        [`${n}-loading-icon-motion`]: {
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
}, ud = (e, n, t) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": n,
    "&:active": t
  }
}), _b = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Sb = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Cb = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ii = (e, n, t, r, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    background: n,
    borderColor: r || void 0,
    boxShadow: "none"
  }, ud(e, Object.assign({
    background: n
  }, s), Object.assign({
    background: n
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), wb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Cb(e))
}), Eb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ni = (e, n, t, r) => {
  const i = r && ["link", "text"].includes(r) ? Eb : wb;
  return Object.assign(Object.assign({}, i(e)), ud(e.componentCls, n, t));
}, ki = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: n,
    background: t
  }, Ni(e, r, o))
}), ji = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: n,
    background: t
  }, Ni(e, r, o))
}), Mi = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Li = (e, n, t, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: n
  }, Ni(e, t, r))
}), Yt = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-${t}`]: Object.assign({
    color: n,
    boxShadow: "none"
  }, Ni(e, r, o, t))
}), Ob = (e) => {
  const {
    componentCls: n
  } = e;
  return fc.reduce((t, r) => {
    const o = e[`${r}6`], i = e[`${r}1`], s = e[`${r}5`], a = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, t), {
      [`&${n}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
      })), Mi(e)), Li(e, i, {
        background: a
      }, {
        background: c
      })), Yt(e, o, "link", {
        color: s
      }, {
        color: l
      })), Yt(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Tb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ki(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Mi(e)), Li(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ii(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Yt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Rb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Mi(e)), Li(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Yt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Yt(e, e.colorPrimaryText, "link", {
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
})), Ab = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Mi(e)), Li(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Yt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Yt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ii(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), $b = (e) => Object.assign(Object.assign({}, Yt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ii(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Pb = (e) => {
  const {
    componentCls: n
  } = e;
  return Object.assign({
    [`${n}-color-default`]: Tb(e),
    [`${n}-color-primary`]: Rb(e),
    [`${n}-color-dangerous`]: Ab(e),
    [`${n}-color-link`]: $b(e)
  }, Ob(e));
}, Ib = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, ji(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Yt(e, e.textTextColor, "text", {
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
})), Yt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), pc = function(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: t,
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
      [n]: {
        fontSize: o,
        height: r,
        padding: `${sn(c)} ${sn(s)}`,
        borderRadius: i,
        [`&${t}-icon-only`]: {
          width: r,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${t}${t}-circle${n}`]: _b(e)
    },
    {
      [`${t}${t}-round${n}`]: Sb(e)
    }
  ];
}, Nb = (e) => {
  const n = _n(e, {
    fontSize: e.contentFontSize
  });
  return pc(n, e.componentCls);
}, kb = (e) => {
  const n = _n(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return pc(n, `${e.componentCls}-sm`);
}, jb = (e) => {
  const n = _n(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return pc(n, `${e.componentCls}-lg`);
}, Mb = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [n]: {
      [`&${n}-block`]: {
        width: "100%"
      }
    }
  };
}, Lb = Ri("Button", (e) => {
  const n = cd(e);
  return [
    // Shared
    yb(n),
    // Size
    Nb(n),
    kb(n),
    jb(n),
    // Block
    Mb(n),
    // Color
    Pb(n),
    // https://github.com/ant-design/ant-design/issues/50969
    Ib(n),
    // Button Group
    tb(n)
  ];
}, ld, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Db(e, n, t) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = t, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${n}-last-item)`]: {
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
function Bb(e, n, t) {
  const {
    borderElCls: r
  } = t, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${n}-last-item)${n}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${n}-first-item)${n}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Hb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: t
  } = e, r = `${t}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Db(e, r, n)), Bb(t, r, n))
  };
}
function zb(e, n) {
  return {
    // border collapse
    [`&-item:not(${n}-last-item)`]: {
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
function Fb(e, n) {
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${n}-first-item:not(${n}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${n}-last-item:not(${n}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Vb(e) {
  const n = `${e.componentCls}-compact-vertical`;
  return {
    [n]: Object.assign(Object.assign({}, zb(e, n)), Fb(e.componentCls, n))
  };
}
const qb = (e) => {
  const {
    componentCls: n,
    colorPrimaryHover: t,
    lineWidth: r,
    calc: o
  } = e, i = o(r).mul(-1).equal(), s = (a) => {
    const c = `${n}-compact${a ? "-vertical" : ""}-item${n}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: t,
        content: '""',
        width: a ? "100%" : r,
        height: a ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, Ub = hm(["Button", "compact"], (e) => {
  const n = cd(e);
  return [
    // Space Compact
    Hb(n),
    Vb(n),
    qb(n)
  ];
}, ld);
var Wb = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Gb(e) {
  if (typeof e == "object" && e) {
    let n = e == null ? void 0 : e.delay;
    return n = !Number.isNaN(n) && typeof n == "number" ? n : 0, {
      loading: n <= 0,
      delay: n
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Xb = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Yb = /* @__PURE__ */ W.forwardRef((e, n) => {
  var t, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: f,
    styles: h,
    disabled: g,
    className: d,
    rootClassName: m,
    children: p,
    icon: b,
    iconPosition: y = "start",
    ghost: w = !1,
    block: O = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: x = "button",
    classNames: T,
    style: _ = {},
    autoInsertSpace: j,
    autoFocus: L
  } = e, X = Wb(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), ne = c || "default", [ee, z] = Nr(() => {
    if (s && a)
      return [s, a];
    const ke = Xb[ne] || [];
    return l ? ["danger", ke[1]] : ke;
  }, [c, s, a, l]), Q = ee === "danger" ? "dangerous" : ee, {
    getPrefixCls: I,
    direction: A,
    autoInsertSpace: $,
    className: N,
    style: B,
    classNames: H,
    styles: K
  } = uc("button"), te = (t = j ?? $) !== null && t !== void 0 ? t : !0, Z = I("btn", i), [ce, ue, de] = Lb(Z), Ee = Et(Uo), be = g ?? Ee, Ne = Et(td), Pe = Nr(() => Gb(o), [o]), [pe, Ke] = ut(Pe.loading), [S, F] = ut(!1), k = ye(null), V = r1(n, k), R = Qd.count(p) === 1 && !b && !xo(z), re = ye(!0);
  W.useEffect(() => (re.current = !1, () => {
    re.current = !0;
  }), []), Ve(() => {
    let ke = null;
    Pe.delay > 0 ? ke = setTimeout(() => {
      ke = null, Ke(!0);
    }, Pe.delay) : Ke(Pe.loading);
    function at() {
      ke && (clearTimeout(ke), ke = null);
    }
    return at;
  }, [Pe]), Ve(() => {
    if (!k.current || !te)
      return;
    const ke = k.current.textContent || "";
    R && Ta(ke) ? S || F(!0) : S && F(!1);
  }), Ve(() => {
    L && k.current && k.current.focus();
  }, []);
  const oe = W.useCallback((ke) => {
    var at;
    if (pe || be) {
      ke.preventDefault();
      return;
    }
    (at = e.onClick) === null || at === void 0 || at.call(e, ("href" in e, ke));
  }, [e.onClick, pe, be]);
  if (process.env.NODE_ENV !== "production") {
    const ke = yn("Button");
    process.env.NODE_ENV !== "production" && ke(!(typeof b == "string" && b.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${b}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ke(!(w && xo(z)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: le,
    compactItemClassnames: Oe
  } = Yv(Z, A), Je = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ft = Gv((ke) => {
    var at, Ft;
    return (Ft = (at = f ?? le) !== null && at !== void 0 ? at : Ne) !== null && Ft !== void 0 ? Ft : ke;
  }), lt = ft && (r = Je[ft]) !== null && r !== void 0 ? r : "", Jt = pe ? "loading" : b, Rt = Q0(X, ["navigate"]), Qt = Ce(Z, ue, de, {
    [`${Z}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${Z}-${ne}`]: ne,
    [`${Z}-dangerous`]: l,
    [`${Z}-color-${Q}`]: Q,
    [`${Z}-variant-${z}`]: z,
    [`${Z}-${lt}`]: lt,
    [`${Z}-icon-only`]: !p && p !== 0 && !!Jt,
    [`${Z}-background-ghost`]: w && !xo(z),
    [`${Z}-loading`]: pe,
    [`${Z}-two-chinese-chars`]: S && te && !pe,
    [`${Z}-block`]: O,
    [`${Z}-rtl`]: A === "rtl",
    [`${Z}-icon-end`]: y === "end"
  }, Oe, d, m, N), Bt = Object.assign(Object.assign({}, B), _), Ht = Ce(T == null ? void 0 : T.icon, H.icon), Zt = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), K.icon || {}), en = b && !pe ? /* @__PURE__ */ W.createElement(Ra, {
    prefixCls: Z,
    className: Ht,
    style: Zt
  }, b) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ W.createElement(Ra, {
    prefixCls: Z,
    className: Ht,
    style: Zt
  }, o.icon) : /* @__PURE__ */ W.createElement(eb, {
    existIcon: !!b,
    prefixCls: Z,
    loading: pe,
    mount: re.current
  }), tn = p || p === 0 ? Zv(p, R && te) : null;
  if (Rt.href !== void 0)
    return ce(/* @__PURE__ */ W.createElement("a", Object.assign({}, Rt, {
      className: Ce(Qt, {
        [`${Z}-disabled`]: be
      }),
      href: be ? void 0 : Rt.href,
      style: Bt,
      onClick: oe,
      ref: V,
      tabIndex: be ? -1 : 0
    }), en, tn));
  let zt = /* @__PURE__ */ W.createElement("button", Object.assign({}, X, {
    type: x,
    className: Qt,
    style: Bt,
    onClick: oe,
    disabled: be,
    ref: V
  }), en, tn, Oe && /* @__PURE__ */ W.createElement(Ub, {
    prefixCls: Z
  }));
  return xo(z) || (zt = /* @__PURE__ */ W.createElement(ed, {
    component: "Button",
    disabled: pe
  }, zt)), ce(zt);
}), Di = Yb;
Di.Group = Jv;
Di.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Di.displayName = "Button");
function Kb(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, h = 0;
  function g() {
    u && clearTimeout(u);
  }
  function d(p) {
    var b = p || {}, y = b.upcomingOnly, w = y === void 0 ? !1 : y;
    g(), f = !w;
  }
  function m() {
    for (var p = arguments.length, b = new Array(p), y = 0; y < p; y++)
      b[y] = arguments[y];
    var w = this, O = Date.now() - h;
    if (f)
      return;
    function x() {
      h = Date.now(), n.apply(w, b);
    }
    function T() {
      u = void 0;
    }
    !a && l && !u && x(), g(), l === void 0 && O > e ? a ? (h = Date.now(), i || (u = setTimeout(l ? T : x, e))) : x() : i !== !0 && (u = setTimeout(l ? T : x, l === void 0 ? e - O : e));
  }
  return m.cancel = d, m;
}
function Jb(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return Kb(e, n, {
    debounceMode: i !== !1
  });
}
function eu(e) {
  return ["small", "middle", "large"].includes(e);
}
const fd = ["wrap", "nowrap", "wrap-reverse"], dd = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], hd = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Qb = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && fd.includes(t)
  };
}, Zb = (e, n) => {
  const t = {};
  return hd.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, ey = (e, n) => {
  const t = {};
  return dd.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function ty(e, n) {
  return Ce(Object.assign(Object.assign(Object.assign({}, Qb(e, n)), Zb(e, n)), ey(e, n)));
}
const ny = (e) => {
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
}, ry = (e) => {
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
}, oy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return fd.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, iy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return hd.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, sy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return dd.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, ay = () => ({}), cy = Ri("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = _n(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [ny(o), ry(o), oy(o), iy(o), sy(o)];
}, ay, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var ly = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const xd = /* @__PURE__ */ W.forwardRef((e, n) => {
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
  } = e, f = ly(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: g,
    getPrefixCls: d
  } = W.useContext(Lt), m = d("flex", t), [p, b, y] = cy(m), w = l ?? (h == null ? void 0 : h.vertical), O = Ce(o, r, h == null ? void 0 : h.className, m, b, y, ty(m, e), {
    [`${m}-rtl`]: g === "rtl",
    [`${m}-gap-${a}`]: eu(a),
    [`${m}-vertical`]: w
  }), x = Object.assign(Object.assign({}, h == null ? void 0 : h.style), i);
  return s && (x.flex = s), a && !eu(a) && (x.gap = a), p(/* @__PURE__ */ W.createElement(u, Object.assign({
    ref: n,
    className: O,
    style: x
  }, Q0(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (xd.displayName = "Flex");
const Go = 100, pd = Go / 5, gd = Go / 2 - pd / 2, Cs = gd * 2 * Math.PI, tu = 50, nu = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ C.createElement("circle", {
    className: Ce(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: gd,
    cx: tu,
    cy: tu,
    strokeWidth: pd,
    style: t
  });
}, uy = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = C.useState(!1);
  rc(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Cs / 4}`,
    strokeDasharray: `${Cs * c / 100} ${Cs * (100 - c) / 100}`
  };
  return /* @__PURE__ */ C.createElement("span", {
    className: Ce(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ C.createElement("svg", {
    viewBox: `0 0 ${Go} ${Go}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ C.createElement(nu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ C.createElement(nu, {
    dotClassName: r,
    style: l
  })));
};
function fy(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("span", {
    className: Ce(o, t > 0 && i)
  }, /* @__PURE__ */ C.createElement("span", {
    className: Ce(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ C.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ C.createElement(uy, {
    prefixCls: n,
    percent: t
  }));
}
function dy(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ C.isValidElement(t) ? hc(t, {
    className: Ce(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ C.createElement(fy, {
    prefixCls: n,
    percent: r
  });
}
const hy = new i0("antSpinMove", {
  to: {
    opacity: 1
  }
}), xy = new i0("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), py = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, w0(e)), {
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
          animationName: hy,
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
          animationName: xy,
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
}, gy = (e) => {
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
}, my = Ri("Spin", (e) => {
  const n = _n(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [py(n)];
}, gy), vy = 200, ru = [[30, 0.05], [70, 0.03], [96, 0.01]];
function by(e, n) {
  const [t, r] = C.useState(0), o = C.useRef(null), i = n === "auto";
  return C.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ru.length; c += 1) {
        const [l, u] = ru[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, vy)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var yy = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let md;
function _y(e, n) {
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
    children: f,
    fullscreen: h = !1,
    indicator: g,
    percent: d
  } = e, m = yy(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: b,
    className: y,
    style: w,
    indicator: O
  } = uc("spin"), x = p("spin", t), [T, _, j] = my(x), [L, X] = C.useState(() => r && !_y(r, o)), ne = by(L, d);
  C.useEffect(() => {
    if (r) {
      const $ = Jb(o, () => {
        X(!0);
      });
      return $(), () => {
        var N;
        (N = $ == null ? void 0 : $.cancel) === null || N === void 0 || N.call($);
      };
    }
    X(!1);
  }, [o, r]);
  const ee = C.useMemo(() => typeof f < "u" && !h, [f, h]);
  if (process.env.NODE_ENV !== "production") {
    const $ = yn("Spin");
    process.env.NODE_ENV !== "production" && $(!c || ee || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const z = Ce(x, y, {
    [`${x}-sm`]: a === "small",
    [`${x}-lg`]: a === "large",
    [`${x}-spinning`]: L,
    [`${x}-show-text`]: !!c,
    [`${x}-rtl`]: b === "rtl"
  }, i, !h && s, _, j), G = Ce(`${x}-container`, {
    [`${x}-blur`]: L
  }), Q = (n = g ?? O) !== null && n !== void 0 ? n : md, I = Object.assign(Object.assign({}, w), u), A = /* @__PURE__ */ C.createElement("div", Object.assign({}, m, {
    style: I,
    className: z,
    "aria-live": "polite",
    "aria-busy": L
  }), /* @__PURE__ */ C.createElement(dy, {
    prefixCls: x,
    indicator: Q,
    percent: ne
  }), c && (ee || h) ? /* @__PURE__ */ C.createElement("div", {
    className: `${x}-text`
  }, c) : null);
  return T(ee ? /* @__PURE__ */ C.createElement("div", Object.assign({}, m, {
    className: Ce(`${x}-nested-loading`, l, _, j)
  }), L && /* @__PURE__ */ C.createElement("div", {
    key: "loading"
  }, A), /* @__PURE__ */ C.createElement("div", {
    className: G,
    key: "container"
  }, f)) : h ? /* @__PURE__ */ C.createElement("div", {
    className: Ce(`${x}-fullscreen`, {
      [`${x}-fullscreen-show`]: L
    }, s, _, j)
  }, A) : A);
};
Ir.setDefaultIndicator = (e) => {
  md = e;
};
process.env.NODE_ENV !== "production" && (Ir.displayName = "Spin");
function vd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Sy } = Object.prototype, { getPrototypeOf: gc } = Object, { iterator: Bi, toStringTag: bd } = Symbol, Hi = /* @__PURE__ */ ((e) => (n) => {
  const t = Sy.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (n) => Hi(n) === e), zi = (e) => (n) => typeof n === e, { isArray: hr } = Array, Hr = zi("undefined");
function Cy(e) {
  return e !== null && !Hr(e) && e.constructor !== null && !Hr(e.constructor) && pt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yd = Dt("ArrayBuffer");
function wy(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && yd(e.buffer), n;
}
const Ey = zi("string"), pt = zi("function"), _d = zi("number"), Fi = (e) => e !== null && typeof e == "object", Oy = (e) => e === !0 || e === !1, Io = (e) => {
  if (Hi(e) !== "object")
    return !1;
  const n = gc(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(bd in e) && !(Bi in e);
}, Ty = Dt("Date"), Ry = Dt("File"), Ay = Dt("Blob"), $y = Dt("FileList"), Py = (e) => Fi(e) && pt(e.pipe), Iy = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || pt(e.append) && ((n = Hi(e)) === "formdata" || // detect form-data instance
  n === "object" && pt(e.toString) && e.toString() === "[object FormData]"));
}, Ny = Dt("URLSearchParams"), [ky, jy, My, Ly] = ["ReadableStream", "Request", "Response", "Headers"].map(Dt), Dy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wr(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), hr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Sd(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cd = (e) => !Hr(e) && e !== Tn;
function Aa() {
  const { caseless: e } = Cd(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Sd(n, o) || o;
    Io(n[i]) && Io(r) ? n[i] = Aa(n[i], r) : Io(r) ? n[i] = Aa({}, r) : hr(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Wr(arguments[r], t);
  return n;
}
const By = (e, n, t, { allOwnKeys: r } = {}) => (Wr(n, (o, i) => {
  t && pt(o) ? e[i] = vd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), Hy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zy = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, Fy = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && gc(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Vy = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, qy = (e) => {
  if (!e) return null;
  if (hr(e)) return e;
  let n = e.length;
  if (!_d(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Uy = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && gc(Uint8Array)), Wy = (e, n) => {
  const r = (e && e[Bi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, Gy = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Xy = Dt("HTMLFormElement"), Yy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), ou = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), Ky = Dt("RegExp"), wd = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Wr(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Jy = (e) => {
  wd(e, (n, t) => {
    if (pt(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (pt(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Qy = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return hr(e) ? r(e) : r(String(e).split(n)), t;
}, Zy = () => {
}, e2 = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function t2(e) {
  return !!(e && pt(e.append) && e[bd] === "FormData" && e[Bi]);
}
const n2 = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (Fi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = hr(r) ? [] : {};
        return Wr(r, (s, a) => {
          const c = t(s, o + 1);
          !Hr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, r2 = Dt("AsyncFunction"), o2 = (e) => e && (Fi(e) || pt(e)) && pt(e.then) && pt(e.catch), Ed = ((e, n) => e ? setImmediate : n ? ((t, r) => (Tn.addEventListener("message", ({ source: o, data: i }) => {
  o === Tn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Tn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  pt(Tn.postMessage)
), i2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tn) : typeof process < "u" && process.nextTick || Ed, s2 = (e) => e != null && pt(e[Bi]), P = {
  isArray: hr,
  isArrayBuffer: yd,
  isBuffer: Cy,
  isFormData: Iy,
  isArrayBufferView: wy,
  isString: Ey,
  isNumber: _d,
  isBoolean: Oy,
  isObject: Fi,
  isPlainObject: Io,
  isReadableStream: ky,
  isRequest: jy,
  isResponse: My,
  isHeaders: Ly,
  isUndefined: Hr,
  isDate: Ty,
  isFile: Ry,
  isBlob: Ay,
  isRegExp: Ky,
  isFunction: pt,
  isStream: Py,
  isURLSearchParams: Ny,
  isTypedArray: Uy,
  isFileList: $y,
  forEach: Wr,
  merge: Aa,
  extend: By,
  trim: Dy,
  stripBOM: Hy,
  inherits: zy,
  toFlatObject: Fy,
  kindOf: Hi,
  kindOfTest: Dt,
  endsWith: Vy,
  toArray: qy,
  forEachEntry: Wy,
  matchAll: Gy,
  isHTMLForm: Xy,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wd,
  freezeMethods: Jy,
  toObjectSet: Qy,
  toCamelCase: Yy,
  noop: Zy,
  toFiniteNumber: e2,
  findKey: Sd,
  global: Tn,
  isContextDefined: Cd,
  isSpecCompliantForm: t2,
  toJSONObject: n2,
  isAsyncFn: r2,
  isThenable: o2,
  setImmediate: Ed,
  asap: i2,
  isIterable: s2
};
function fe(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
P.inherits(fe, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Od = fe.prototype, Td = {};
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
  Td[e] = { value: e };
});
Object.defineProperties(fe, Td);
Object.defineProperty(Od, "isAxiosError", { value: !0 });
fe.from = (e, n, t, r, o, i) => {
  const s = Object.create(Od);
  return P.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), fe.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const a2 = null;
function $a(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Rd(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function iu(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Rd(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function c2(e) {
  return P.isArray(e) && !e.some($a);
}
const l2 = P.toFlatObject(P, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Vi(e, n, t) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = P.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !P.isUndefined(p[m]);
  });
  const r = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(n);
  if (!P.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (P.isDate(d))
      return d.toISOString();
    if (!c && P.isBlob(d))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(d) || P.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, m, p) {
    let b = d;
    if (d && !p && typeof d == "object") {
      if (P.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (P.isArray(d) && c2(d) || (P.isFileList(d) || P.endsWith(m, "[]")) && (b = P.toArray(d)))
        return m = Rd(m), b.forEach(function(w, O) {
          !(P.isUndefined(w) || w === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? iu([m], O, i) : s === null ? m : m + "[]",
            l(w)
          );
        }), !1;
    }
    return $a(d) ? !0 : (n.append(iu(p, m, i), l(d)), !1);
  }
  const f = [], h = Object.assign(l2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: $a
  });
  function g(d, m) {
    if (!P.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), P.forEach(d, function(b, y) {
        (!(P.isUndefined(b) || b === null) && o.call(
          n,
          b,
          P.isString(y) ? y.trim() : y,
          m,
          h
        )) === !0 && g(b, m ? m.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), n;
}
function su(e) {
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
function mc(e, n) {
  this._pairs = [], e && Vi(e, this, n);
}
const Ad = mc.prototype;
Ad.append = function(n, t) {
  this._pairs.push([n, t]);
};
Ad.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, su);
  } : su;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function u2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $d(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || u2;
  P.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = P.isURLSearchParams(n) ? n.toString() : new mc(n, t).toString(r), i) {
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
    P.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const Pd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, f2 = typeof URLSearchParams < "u" ? URLSearchParams : mc, d2 = typeof FormData < "u" ? FormData : null, h2 = typeof Blob < "u" ? Blob : null, x2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: f2,
    FormData: d2,
    Blob: h2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vc = typeof window < "u" && typeof document < "u", Pa = typeof navigator == "object" && navigator || void 0, p2 = vc && (!Pa || ["ReactNative", "NativeScript", "NS"].indexOf(Pa.product) < 0), g2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", m2 = vc && window.location.href || "http://localhost", v2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vc,
  hasStandardBrowserEnv: p2,
  hasStandardBrowserWebWorkerEnv: g2,
  navigator: Pa,
  origin: m2
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...v2,
  ...x2
};
function b2(e, n) {
  return Vi(e, new ct.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return ct.isNode && P.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function y2(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function _2(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Id(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && P.isArray(o) ? o.length : s, c ? (P.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !P.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && P.isArray(o[s]) && (o[s] = _2(o[s])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const t = {};
    return P.forEachEntry(e, (r, o) => {
      n(y2(r), o, t, 0);
    }), t;
  }
  return null;
}
function S2(e, n, t) {
  if (P.isString(e))
    try {
      return (n || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Gr = {
  transitional: Pd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = P.isObject(n);
    if (i && P.isHTMLForm(n) && (n = new FormData(n)), P.isFormData(n))
      return o ? JSON.stringify(Id(n)) : n;
    if (P.isArrayBuffer(n) || P.isBuffer(n) || P.isStream(n) || P.isFile(n) || P.isBlob(n) || P.isReadableStream(n))
      return n;
    if (P.isArrayBufferView(n))
      return n.buffer;
    if (P.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return b2(n, this.formSerializer).toString();
      if ((a = P.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Vi(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), S2(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Gr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (P.isResponse(n) || P.isReadableStream(n))
      return n;
    if (n && P.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? fe.from(a, fe.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ct.classes.FormData,
    Blob: ct.classes.Blob
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
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gr.headers[e] = {};
});
const C2 = P.toObjectSet([
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
]), w2 = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && C2[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, cu = Symbol("internals");
function Cr(e) {
  return e && String(e).trim().toLowerCase();
}
function No(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(No) : String(e);
}
function E2(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const O2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ws(e, n, t, r, o) {
  if (P.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!P.isString(n)) {
    if (P.isString(r))
      return n.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(n);
  }
}
function T2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function R2(e, n) {
  const t = P.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let gt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, l) {
      const u = Cr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = P.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = No(a));
    }
    const s = (a, c) => P.forEach(a, (l, u) => i(l, u, c));
    if (P.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (P.isString(n) && (n = n.trim()) && !O2(n))
      s(w2(n), t);
    else if (P.isObject(n) && P.isIterable(n)) {
      let a = {}, c, l;
      for (const u of n) {
        if (!P.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? P.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = Cr(n), n) {
      const r = P.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return E2(o);
        if (P.isFunction(t))
          return t.call(this, o, r);
        if (P.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Cr(n), n) {
      const r = P.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || ws(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Cr(s), s) {
        const a = P.findKey(r, s);
        a && (!t || ws(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return P.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || ws(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return P.forEach(this, (o, i) => {
      const s = P.findKey(r, i);
      if (s) {
        t[s] = No(o), delete t[i];
        return;
      }
      const a = n ? T2(i) : String(i).trim();
      a !== i && delete t[i], t[a] = No(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && P.isArray(r) ? r.join(", ") : r);
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
    const r = (this[cu] = this[cu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Cr(s);
      r[a] || (R2(o, s), r[a] = !0);
    }
    return P.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(gt.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
P.freezeMethods(gt);
function Es(e, n) {
  const t = this || Gr, r = n || t, o = gt.from(r.headers);
  let i = r.data;
  return P.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Nd(e) {
  return !!(e && e.__CANCEL__);
}
function xr(e, n, t) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, n, t), this.name = "CanceledError";
}
P.inherits(xr, fe, {
  __CANCEL__: !0
});
function kd(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new fe(
    "Request failed with status code " + t.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function A2(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function $2(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let f = i, h = 0;
    for (; f !== o; )
      h += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const g = u && l - u;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function P2(e, n) {
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
const Xo = (e, n, t = 3) => {
  let r = 0;
  const o = $2(50, 250);
  return P2((i) => {
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
}, lu = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, uu = (e) => (...n) => P.asap(() => e(...n)), I2 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, ct.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, N2 = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      P.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), P.isString(r) && s.push("path=" + r), P.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function k2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function j2(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function jd(e, n, t) {
  let r = !k2(n);
  return e && (r || t == !1) ? j2(e, n) : n;
}
const fu = (e) => e instanceof gt ? { ...e } : e;
function Mn(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, f, h) {
    return P.isPlainObject(l) && P.isPlainObject(u) ? P.merge.call({ caseless: h }, l, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, h) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
        return r(void 0, l, f, h);
    } else return r(l, u, f, h);
  }
  function i(l, u) {
    if (!P.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
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
    headers: (l, u, f) => o(fu(l), fu(u), f, !0)
  };
  return P.forEach(Object.keys(Object.assign({}, e, n)), function(u) {
    const f = c[u] || o, h = f(e[u], n[u], u);
    P.isUndefined(h) && f !== a || (t[u] = h);
  }), t;
}
const Md = (e) => {
  const n = Mn({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = gt.from(s), n.url = $d(jd(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (P.isFormData(t)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ct.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(n)), r || r !== !1 && I2(n.url))) {
    const l = o && i && N2.read(i);
    l && s.set(o, l);
  }
  return n;
}, M2 = typeof XMLHttpRequest < "u", L2 = M2 && function(e) {
  return new Promise(function(t, r) {
    const o = Md(e);
    let i = o.data;
    const s = gt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, h, g, d;
    function m() {
      g && g(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function b() {
      if (!p)
        return;
      const w = gt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: e,
        request: p
      };
      kd(function(_) {
        t(_), m();
      }, function(_) {
        r(_), m();
      }, x), p = null;
    }
    "onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, p.onabort = function() {
      p && (r(new fe("Request aborted", fe.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new fe("Network Error", fe.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Pd;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), r(new fe(
        O,
        x.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && P.forEach(s.toJSON(), function(O, x) {
      p.setRequestHeader(x, O);
    }), P.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([h, d] = Xo(l, !0), p.addEventListener("progress", h)), c && p.upload && ([f, g] = Xo(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (u = (w) => {
      p && (r(!w || w.type ? new xr(null, e, p) : w), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const y = A2(o.url);
    if (y && ct.protocols.indexOf(y) === -1) {
      r(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, D2 = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof fe ? u : new xr(u instanceof Error ? u.message : u));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new fe(`timeout ${n} of ms exceeded`, fe.ETIMEDOUT));
    }, n);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => P.asap(a), c;
  }
}, B2 = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, H2 = async function* (e, n) {
  for await (const t of z2(e))
    yield* B2(t, n);
}, z2 = async function* (e) {
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
}, du = (e, n, t, r) => {
  const o = H2(e, n);
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
          let h = i += f;
          t(h);
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
}, qi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ld = qi && typeof ReadableStream == "function", F2 = qi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Dd = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, V2 = Ld && Dd(() => {
  let e = !1;
  const n = new Request(ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), hu = 64 * 1024, Ia = Ld && Dd(() => P.isReadableStream(new Response("").body)), Yo = {
  stream: Ia && ((e) => e.body)
};
qi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Yo[n] && (Yo[n] = P.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new fe(`Response type '${n}' is not supported`, fe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const q2 = async (e) => {
  if (e == null)
    return 0;
  if (P.isBlob(e))
    return e.size;
  if (P.isSpecCompliantForm(e))
    return (await new Request(ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (P.isArrayBufferView(e) || P.isArrayBuffer(e))
    return e.byteLength;
  if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e))
    return (await F2(e)).byteLength;
}, U2 = async (e, n) => {
  const t = P.toFiniteNumber(e.getContentLength());
  return t ?? q2(n);
}, W2 = qi && (async (e) => {
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
    fetchOptions: h
  } = Md(e);
  l = l ? (l + "").toLowerCase() : "text";
  let g = D2([o, i && i.toAbortSignal()], s), d;
  const m = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let p;
  try {
    if (c && V2 && t !== "get" && t !== "head" && (p = await U2(u, r)) !== 0) {
      let x = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), T;
      if (P.isFormData(r) && (T = x.headers.get("content-type")) && u.setContentType(T), x.body) {
        const [_, j] = lu(
          p,
          Xo(uu(c))
        );
        r = du(x.body, hu, _, j);
      }
    }
    P.isString(f) || (f = f ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    d = new Request(n, {
      ...h,
      signal: g,
      method: t.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? f : void 0
    });
    let y = await fetch(d);
    const w = Ia && (l === "stream" || l === "response");
    if (Ia && (a || w && m)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((L) => {
        x[L] = y[L];
      });
      const T = P.toFiniteNumber(y.headers.get("content-length")), [_, j] = a && lu(
        T,
        Xo(uu(a), !0)
      ) || [];
      y = new Response(
        du(y.body, hu, _, () => {
          j && j(), m && m();
        }),
        x
      );
    }
    l = l || "text";
    let O = await Yo[P.findKey(Yo, l) || "text"](y, e);
    return !w && m && m(), await new Promise((x, T) => {
      kd(x, T, {
        data: O,
        headers: gt.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: d
      });
    });
  } catch (b) {
    throw m && m(), b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(
      new fe("Network Error", fe.ERR_NETWORK, e, d),
      {
        cause: b.cause || b
      }
    ) : fe.from(b, b && b.code, e, d);
  }
}), Na = {
  http: a2,
  xhr: L2,
  fetch: W2
};
P.forEach(Na, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const xu = (e) => `- ${e}`, G2 = (e) => P.isFunction(e) || e === null || e === !1, Bd = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !G2(t) && (r = Na[(s = String(t)).toLowerCase()], r === void 0))
        throw new fe(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? i.length > 1 ? `since :
` + i.map(xu).join(`
`) : " " + xu(i[0]) : "as no adapter specified";
      throw new fe(
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
    throw new xr(null, e);
}
function pu(e) {
  return Os(e), e.headers = gt.from(e.headers), e.data = Es.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Bd.getAdapter(e.adapter || Gr.adapter)(e).then(function(r) {
    return Os(e), r.data = Es.call(
      e,
      e.transformResponse,
      r
    ), r.headers = gt.from(r.headers), r;
  }, function(r) {
    return Nd(r) || (Os(e), r && r.response && (r.response.data = Es.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = gt.from(r.response.headers))), Promise.reject(r);
  });
}
const Hd = "1.9.0", Ui = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Ui[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const gu = {};
Ui.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + Hd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new fe(
        o(s, " has been removed" + (t ? " in " + t : "")),
        fe.ERR_DEPRECATED
      );
    return t && !gu[s] && (gu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
Ui.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function X2(e, n, t) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new fe("option " + i + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
const ko = {
  assertOptions: X2,
  validators: Ui
}, qt = ko.validators;
let Nn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Mn(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && ko.assertOptions(r, {
      silentJSONParsing: qt.transitional(qt.boolean),
      forcedJSONParsing: qt.transitional(qt.boolean),
      clarifyTimeoutError: qt.transitional(qt.boolean)
    }, !1), o != null && (P.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : ko.assertOptions(o, {
      encode: qt.function,
      serialize: qt.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), ko.assertOptions(t, {
      baseUrl: qt.spelling("baseURL"),
      withXsrfToken: qt.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && P.merge(
      i.common,
      i[t.method]
    );
    i && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = gt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, h;
    if (!c) {
      const d = [pu.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, l), h = d.length, u = Promise.resolve(t); f < h; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    h = a.length;
    let g = t;
    for (f = 0; f < h; ) {
      const d = a[f++], m = a[f++];
      try {
        g = d(g);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = pu.call(this, g);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = l.length; f < h; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(n) {
    n = Mn(this.defaults, n);
    const t = jd(n.baseURL, n.url, n.allowAbsoluteUrls);
    return $d(t, n.params, n.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(n) {
  Nn.prototype[n] = function(t, r) {
    return this.request(Mn(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(Mn(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Nn.prototype[n] = t(), Nn.prototype[n + "Form"] = t(!0);
});
let Y2 = class zd {
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
      r.reason || (r.reason = new xr(i, s, a), t(r.reason));
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
      token: new zd(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function K2(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function J2(e) {
  return P.isObject(e) && e.isAxiosError === !0;
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
Object.entries(ka).forEach(([e, n]) => {
  ka[n] = e;
});
function Fd(e) {
  const n = new Nn(e), t = vd(Nn.prototype.request, n);
  return P.extend(t, Nn.prototype, n, { allOwnKeys: !0 }), P.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Fd(Mn(e, o));
  }, t;
}
const qe = Fd(Gr);
qe.Axios = Nn;
qe.CanceledError = xr;
qe.CancelToken = Y2;
qe.isCancel = Nd;
qe.VERSION = Hd;
qe.toFormData = Vi;
qe.AxiosError = fe;
qe.Cancel = qe.CanceledError;
qe.all = function(n) {
  return Promise.all(n);
};
qe.spread = K2;
qe.isAxiosError = J2;
qe.mergeConfig = Mn;
qe.AxiosHeaders = gt;
qe.formToJSON = (e) => Id(P.isHTMLForm(e) ? new FormData(e) : e);
qe.getAdapter = Bd.getAdapter;
qe.HttpStatusCode = ka;
qe.default = qe;
const {
  Axios: S_,
  AxiosError: C_,
  CanceledError: w_,
  isCancel: E_,
  CancelToken: O_,
  VERSION: T_,
  all: R_,
  Cancel: A_,
  isAxiosError: $_,
  spread: P_,
  toFormData: I_,
  AxiosHeaders: N_,
  HttpStatusCode: k_,
  formToJSON: j_,
  getAdapter: M_,
  mergeConfig: L_
} = qe, on = Ko;
(function(e, n) {
  const t = Ko, r = e();
  for (; ; )
    try {
      if (-parseInt(t(427)) / 1 * (parseInt(t(442)) / 2) + -parseInt(t(426)) / 3 + -parseInt(t(437)) / 4 + -parseInt(t(447)) / 5 * (-parseInt(t(428)) / 6) + -parseInt(t(429)) / 7 + parseInt(t(431)) / 8 + parseInt(t(434)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Jo, 963622);
on(439) + on(444);
function Ko(e, n) {
  const t = Jo();
  return Ko = function(r, o) {
    return r = r - 426, t[r];
  }, Ko(e, n);
}
qe[on(432)][on(436) + on(438)] = !0;
const Q2 = async (e) => {
  var t, r, o, i;
  const n = on;
  try {
    return (await qe(e))[n(435)];
  } catch (s) {
    throw ((r = (t = s[n(449)]) == null ? void 0 : t[n(435)]) == null ? void 0 : r[n(446)]) || ((i = (o = s[n(449)]) == null ? void 0 : o[n(435)]) == null ? void 0 : i[n(450)]) || s[n(446)];
  }
};
function Jo() {
  const e = ["1624494BMXRNn", "Content-Ty", "ient", "POST", "message", "20605HAjGwI", "params", "response", "error", "GET", "DELETE", "2444175xAivNO", "1nvrDzp", "1794fKdwPR", "3174990piqMpa", "n/json", "2766824FKUKBE", "defaults", "PUT", "22640607flNPzl", "data", "withCreden", "4197964wvbFBd", "tials", "/api/v1/cl", "applicatio", "PATCH"];
  return Jo = function() {
    return e;
  }, Jo();
}
const Z2 = {};
Z2[on(443) + "pe"] = on(440) + on(430);
const je = Zo;
(function(e, n) {
  const t = Zo, r = e();
  for (; ; )
    try {
      if (parseInt(t(438)) / 1 * (-parseInt(t(429)) / 2) + parseInt(t(447)) / 3 * (-parseInt(t(436)) / 4) + -parseInt(t(449)) / 5 * (-parseInt(t(421)) / 6) + -parseInt(t(450)) / 7 + parseInt(t(422)) / 8 * (-parseInt(t(439)) / 9) + -parseInt(t(443)) / 10 + parseInt(t(432)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Qo, 903790);
const Cn = {};
Cn[je(442)] = je(427) + "E", Cn[je(444)] = je(425), Cn[je(430)] = je(423) + "N", Cn[je(434)] = je(427) + "E", Cn[je(437)] = je(425), Cn[je(428)] = je(423) + "N";
const Nt = Cn, ja = {};
ja[je(440)] = je(425), ja[je(426)] = je(423) + "N";
const e_ = ja, t_ = je(431), n_ = je(433);
function Qo() {
  const e = ["ent", "177428KqpaDe", "touchend", "1jVxmIR", "45RtttfP", "keyup", "assistiveM", "mousemove", "6180730BitAZP", "mouseup", "keyBoardEv", "Event", "87UQGrEI", "shortcutEv", "10BzmPmW", "6313895gmLnJh", "enuHide", "1680396jYmPfH", "2555032NxwhyJ", "ACTION_DOW", "fullscreen", "ACTION_UP", "keydown", "ACTION_MOV", "touchstart", "1526890wcQHVJ", "mousedown", "moveEvent", "60614499SLRTdE", "wheelEvent", "touchmove"];
  return Qo = function() {
    return e;
  }, Qo();
}
const r_ = je(445) + je(435), Vd = je(441) + je(451);
function Zo(e, n) {
  const t = Qo();
  return Zo = function(r, o) {
    return r = r - 421, t[r];
  }, Zo(e, n);
}
const o_ = je(448) + je(435), i_ = je(424) + je(446);
(function(e, n) {
  const t = ti, r = e();
  for (; ; )
    try {
      if (parseInt(t(272)) / 1 + -parseInt(t(234)) / 2 * (parseInt(t(257)) / 3) + -parseInt(t(249)) / 4 + -parseInt(t(269)) / 5 + -parseInt(t(287)) / 6 * (-parseInt(t(297)) / 7) + -parseInt(t(270)) / 8 * (-parseInt(t(219)) / 9) + -parseInt(t(229)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 696918);
function ei() {
  const e = ["HGRJE", "meta_state", "clipboard", "forEach", "yDsZu", "control", "500230RcbWfT", "8uTQjCy", "EWRAr", "89691DIBIEI", "uQYEm", "mousedown", "keyEvent", "current", "duration", "mouseup", "now", "toLowerCas", "passive", "tOMEl", "PrVsQ", "SSiik", "mousemove", "idlap", "1122bRqymh", "pageX", "ault", "arrowleft", "showMenu", "tGaXO", "vqKRk", "EXT", "stener", "PASTE_TEXT", "41349DjrPSU", "clientY", "tab", "removeEven", "iypfW", "jJjgp", "MpnIj", "enter", "GcTHh", "pageY", "tListener", "deltaY", "includes", "action", "YBxeE", "touchstart", "readText", "offsetWidt", "LmDkO", "focus", "OktOp", "toUpperCas", "typeKey", "keyAction", "shift", "ndueh", "hrMwB", "COPY_TEXT", "sign", "preventDef", "pWECm", "height", "touchend", "touchmove", "9740727MiFuBL", "SavLT", "vtwaP", "gClientRec", "touch", "KEYBOARD_C", "arrowright", "VwSDC", "bxhla", "getBoundin", "5170720tQWFlj", "touchEvent", "arrowup", "top", "type", "2XKVvjj", "nCbyM", "backspace", "max", "isDown", "width", "wheelEvent", "repeat", "keydown", "arrowdown", "mouse", "offsetHeig", "ctrlKey", "yZLjS", "left", "1314440MlfPVy", "sIRss", "HdyEx", "shiftKey", "clientX", "KEYBOARD_T", "ZRJVC", "gpUbI", "1901871SVCltf", "capslock", "TLvOn", "ODE", "key", "addEventLi"];
  return ei = function() {
    return e;
  }, ei();
}
function ti(e, n) {
  const t = ei();
  return ti = function(r, o) {
    return r = r - 195, t[r];
  }, ti(e, n);
}
const s_ = ({ isMobile: e, assistive: n, onRemoteEvent: t, canvasContent: r, canvasRef: o }) => {
  const i = ti, [s, a] = ut(!1), c = ye(Date[i(279)]()), l = (g) => {
    const d = i;
    if (g[d(214) + d(289)](), !o[d(276)]) return;
    const m = o[d(276)], p = m[d(228) + d(222) + "t"]();
    let b = Nt[g[d(233)]];
    if (n[d(238)] == !0 || n[d(291)] == !0) {
      b == Nt[d(278)] && t(Vd, {});
      return;
    }
    if (b == Nt[d(274)] && (d(302) === d(227) ? (_0xb904dc[d(262) + d(295)](d(200), _0x219fbf, _0x418591), _0x565e44[d(262) + d(295)](d(218), _0x4776d1, _0x216146), _0x58debc[d(262) + d(295)](d(217), _0x247a34)) : a(!0)), b != Nt[d(274)] && s == !1) return;
    b == Nt[d(278)] && a(!1);
    let y, w;
    if (g[d(233)][d(197)](d(223)))
      if (d(259) !== d(247)) {
        const { touches: X, changedTouches: ne } = g, ee = X[0] ?? ne[0];
        y = ee[d(288)] - p[d(248)], w = ee[d(306)] - p[d(232)];
      } else return;
    else g[d(233)][d(197)](d(244)) && (d(301) !== d(282) ? (y = g[d(253)] - p[d(248)], w = g[d(298)] - p[d(232)]) : (_0x45dd98[d(207)] = d(224) + d(260), _0x2e0526[d(261)] = 61));
    const O = 1, x = y < O || y > m[d(239)] - O, T = w < O || w > m[d(216)] - O;
    (x || T) && (y = Math[d(237)](1, y), w = Math[d(237)](1, w), b = Nt[d(278)]);
    const _ = Date[d(279)](), j = _ - c[d(276)];
    c[d(276)] = _;
    const L = {};
    L[d(198)] = d(230), L[d(208)] = b, L.x = y, L.y = w, L[d(239)] = p[d(239)], L[d(216)] = p[d(216)], L.ts = _, L[d(277)] = j, t(t_, L), m[d(204)]();
  }, u = (g) => {
    const d = i;
    if (d(235) === d(221)) _0x1d7e28(_0x3f9c58, _0x46b6fc);
    else {
      if (g[d(214) + d(289)](), !o[d(276)])
        return d(250) === d(203), void 0;
      const m = o[d(276)], p = Math[d(213)](g[d(196)]), b = m[d(228) + d(222) + "t"]();
      t(n_, { action: d(240), width: m[d(202) + "h"], height: m[d(245) + "ht"], x: g[d(253)] - b[d(248)], y: g[d(298)] - b[d(232)], delta: p, ts: Date[d(279)]() }), m[d(204)]();
    }
  }, f = async (g) => {
    const d = i;
    if (g[d(214) + d(289)](), !o[d(276)]) return;
    const m = o[d(276)], p = e_[g[d(233)]], b = g[d(261)][d(280) + "e"]();
    if (((x) => {
      const T = d;
      return [T(268), T(209), T(258)][T(197)](x);
    })(b) == !0) return;
    const w = async () => {
      const x = d;
      if (x(255) === x(273)) [x(285), x(274), x(278)][x(266)]((T) => {
        const _ = x;
        _0x3794e4[_(300) + _(195)](T, _0x5070e2);
      }), _0x4c2c5a[x(300) + x(195)](x(242), _0xe49f01);
      else {
        const T = {};
        T[x(198)] = x(275), T[x(208)] = p, T[x(207)] = x(254) + x(294), T[x(261)] = g[x(261)], T[x(241)] = 0, T[x(264)] = 0;
        const _ = T;
        if (g[x(246)] == !0)
          x(283) !== x(283) ? _0x1c5a7c(!1) : b == "c" ? _[x(207)] = x(212) : b == "a" ? x(303) !== x(303) ? _0x22103d(!0) : (_[x(207)] = x(224) + x(260), _[x(264)] = 4096, _[x(261)] = 29) : b == "v" && (_[x(207)] = x(296), _[x(261)] = await navigator[x(265)][x(201)]());
        else if (b == x(231)) _[x(207)] = x(224) + x(260), _[x(261)] = 19;
        else if (b == x(243)) _[x(207)] = x(224) + x(260), _[x(261)] = 20;
        else if (b == x(290)) x(251) !== x(256) ? (_[x(207)] = x(224) + x(260), _[x(261)] = 21) : _0x2fc4fa[x(207)] = x(212);
        else if (b == x(225)) x(220) !== x(220) ? _0x506214[x(252)] == !0 && (_0x31326d[x(261)] = _0x35bef8[x(261)][x(206) + "e"]()) : (_[x(207)] = x(224) + x(260), _[x(261)] = 22);
        else if (b == x(236)) _[x(207)] = x(224) + x(260), _[x(261)] = 67;
        else if (b == x(304))
          if (x(293) === x(293)) _[x(207)] = x(224) + x(260), _[x(261)] = 66;
          else return;
        else b == x(299) && (x(199) !== x(292) ? (_[x(207)] = x(224) + x(260), _[x(261)] = 61) : _0x5adf88[x(261)] = _0x459a20[x(261)][x(206) + "e"]());
        return _[x(233)] == x(254) + x(294) && (x(226) !== x(226) ? (_0x841067[x(207)] = x(224) + x(260), _0x4805e8[x(261)] = 21) : g[x(252)] == !0 && (_[x(261)] = _[x(261)][x(206) + "e"]())), _;
      }
    }, O = await w();
    O && (d(267) !== d(211) ? t(r_, O) : (_0x37094e[d(207)] = d(224) + d(260), _0x1d78d4[d(261)] = 67)), m[d(204)]();
  };
  Ve(() => {
    const g = i, d = o[g(276)];
    if (d) {
      const m = {};
      m[g(281)] = !1;
      const p = m;
      return e ? g(215) !== g(215) ? _0x3c0cab[g(262) + g(295)](_0x25b2ee, _0x16f30f) : (d[g(262) + g(295)](g(200), l, p), d[g(262) + g(295)](g(218), l, p), d[g(262) + g(295)](g(217), l)) : g(263) === g(271) ? (_0x3203e6[g(262) + g(295)](g(242), _0x92f24f), [g(285), g(274), g(278)][g(266)]((b) => {
        const y = g;
        _0x14fe76[y(262) + y(295)](b, _0x10bff8);
      })) : (d[g(262) + g(295)](g(242), f), [g(285), g(274), g(278)][g(266)]((b) => {
        const y = g;
        d[y(262) + y(295)](b, l);
      })), () => {
        const b = g;
        if (b(305) !== b(305))
          return [b(268), b(209), b(258)][b(197)](_0x15d806);
        d && (e ? b(205) !== b(286) ? [b(200), b(218), b(217)][b(266)]((y) => {
          const w = b;
          d[w(300) + w(195)](y, l);
        }) : (_0x4f0c49[b(207)] = b(224) + b(260), _0x14b656[b(264)] = 4096, _0x36b7ca[b(261)] = 29) : ([b(285), b(274), b(278)][b(266)]((y) => {
          const w = b;
          if (w(210) !== w(284)) d[w(300) + w(195)](y, l);
          else {
            _0x5b949b == _0x1145b1[w(278)] && _0x453f8b(_0x48f317, {});
            return;
          }
        }), d[b(300) + b(195)](b(242), f)));
      };
    }
  }, [e, l, u, f, o]);
  const h = { ref: o, ...r };
  return U.jsx(dx, h);
}, a_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", Wi = ni;
(function(e, n) {
  const t = ni, r = e();
  for (; ; )
    try {
      if (-parseInt(t(134)) / 1 + -parseInt(t(125)) / 2 + parseInt(t(128)) / 3 * (parseInt(t(129)) / 4) + parseInt(t(131)) / 5 + parseInt(t(132)) / 6 * (parseInt(t(133)) / 7) + parseInt(t(124)) / 8 + -parseInt(t(127)) / 9 * (parseInt(t(123)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 735477);
function ni(e, n) {
  const t = ri();
  return ni = function(r, o) {
    return r = r - 123, t[r];
  }, ni(e, n);
}
const c_ = Kt[Wi(130)]`
  z-index: 4;
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.723);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  /* max-width: 250px;
  max-height: 250px; */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  /* background-color: #777; */
`, St = Kt[Wi(130)]`
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
function ri() {
  const e = ["div", "6460190PwjPgO", "8651646ySCWcf", "7USRutm", "681845BYhCcw", "40VtOFGm", "3466992qaffGr", "1068100QhBJeW", "img", "3547161jueuvS", "3objNjv", "1442140xAszXu"];
  return ri = function() {
    return e;
  }, ri();
}
const Ct = Kt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, l_ = Kt[Wi(126)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, u_ = Kt[Wi(130)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function nr(e, n) {
  const t = oi();
  return nr = function(r, o) {
    return r = r - 215, t[r];
  }, nr(e, n);
}
(function(e, n) {
  const t = nr, r = e();
  for (; ; )
    try {
      if (-parseInt(t(251)) / 1 * (parseInt(t(240)) / 2) + -parseInt(t(239)) / 3 + parseInt(t(253)) / 4 * (-parseInt(t(215)) / 5) + -parseInt(t(216)) / 6 + -parseInt(t(231)) / 7 * (-parseInt(t(225)) / 8) + parseInt(t(227)) / 9 + -parseInt(t(243)) / 10 * (-parseInt(t(247)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, 945731);
const mu = () => {
  const e = nr;
  return document[e(241) + e(248)] || document[e(219) + e(222)] || document[e(226) + e(229) + e(246)] || document[e(217) + e(230)];
};
function oi() {
  const e = ["exitFullsc", "een", "1874133QUNmun", "85202WNYmGd", "fullscreen", "querySelec", "2038900VDZyod", "requestFul", "msExitFull", "ent", "77IlYKoL", "Element", "in_", "FullScreen", "1VXRPgx", "ullscreen", "3315580ryBCok", "reen", "estFullscr", "ZfCan", "mozCancelF", "5UavzIK", "1195842AsKZsl", "msFullscre", "tor", "mozFullScr", "EMugF", "webkitExit", "eenElement", "Fullscreen", "webkitRequ", "8SsZRgb", "webkitFull", "2697210TLRkon", "mozRequest", "screenElem", "enElement", "6400275XwdNOW", "msRequestF", "lscreen", "screen", "#screen_ma", "ullScreen"];
  return oi = function() {
    return e;
  }, oi();
}
const f_ = (e) => {
  const n = nr, t = document[n(242) + n(218)](n(235) + n(249) + e);
  t[n(244) + n(233)] ? n(256) !== n(220) ? t[n(244) + n(233)]() : _0x4d20eb[n(232) + n(252)]() : t[n(228) + n(250)] ? t[n(228) + n(250)]() : t[n(224) + n(255) + n(238)] ? t[n(224) + n(255) + n(238)]() : t[n(232) + n(252)] && t[n(232) + n(252)]();
}, d_ = () => {
  const e = nr;
  document[e(237) + e(254)] ? document[e(237) + e(254)]() : document[e(257) + e(236)] ? document[e(257) + e(236)]() : document[e(221) + e(223)] ? document[e(221) + e(223)]() : document[e(245) + e(234)] && document[e(245) + e(234)]();
};
(function(e, n) {
  const t = si, r = e();
  for (; ; )
    try {
      if (parseInt(t(356)) / 1 + parseInt(t(371)) / 2 + -parseInt(t(373)) / 3 * (parseInt(t(368)) / 4) + -parseInt(t(284)) / 5 * (parseInt(t(499)) / 6) + -parseInt(t(289)) / 7 + -parseInt(t(401)) / 8 * (parseInt(t(391)) / 9) + parseInt(t(259)) / 10 * (parseInt(t(148)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ii, 940317);
function ii() {
  const e = ["cursor", "GVsXn", "clientY", "removeEven", "current", "2zM9 7h2v2", "2 2h7c0 1.", "mousemove", "-2-2-2zm-9", "13H3a9.02 ", "6v2H4z", "nrLZk", "93-.019a1.", "228 0 0 0 ", "http://www", "a.995.995 ", "l10.283 7.", "M4 6h16v2H", "3H6c-1.103", "isDown", "sync", "h2.697l5.7", "0a.999.999", "Volume", "674.31a1 1", " 5l3.975 3", "6v-8h12z", "H9V7zm0 4h", "-7v2h5z", "-2-5zM4 17", "assistive_", "017.082-.0", "822 13 9A1", "hwLEd", "s-.775-3.9", "0 6.961 6.", "V5h14v14z", "7 2-2v-4h4", "mousedown", "ent", "zM4 20V10h", "1 19 13a7.", "75z", "a1 1 0 0 0", "1.89-1.89A", "copy", "M16.75 2h-", "touch_clas", "6.967 0 0 ", "3 1.331-3 ", "4.445-2.96", "rgba(255, ", "LWQmF", ".14a6.961 ", ".w3.org/20", "95 0 0 0 1", "LFNMc", "Sync", ".053 0 0 0", "1.1-1.332A", "touchstart", "7c0-1.654 ", "8 1.039 7.", "reload", " 0 0 0-1 1", "71 0 3-1.3", "2v2H9v-2zM", ".09 0 0 0-", "pageY", ".004 1.004", "3 9.014 9.", "329-3-3-3-", "17694tuhwLq", "landscape", "2H4zm0 5h1", " 1 0 0 0 1", "88 7.2 7.2", "3 3v1h2zm1", "-2 2v6c0 1", "9 21V3a1 1", "7-2-2-2h-3", "9.09 0 0 0", "showMenu", "13 7.13 0 ", "home", "2.757-2.24", "type", "HiQXQ", " 0 0 0-1.8", "255, 255, ", "menu_", ".183-1.814", "ault", " 4 .002 8H", "Unlock", "03-.897-2-", "1 0 0 0-1 ", "h4zm12-6h-", "19 9.053 9", "forEach", "4h2v2h-2v-", ".614 16 19", "zWMZl", "getAttribu", ".21a1 1 0 ", "V6.002c.48", "3 0-2 .897", "Screen", "0 0-1.554-", "2 0 0 0 21", " 15H4V9z", "fullscreen", "zkfHL", "3 3z", " 13a9.09 9", "move", "0 0 1-3.53", "27-1.547 5", ".015.057-.", "lzacT", "M20.978 13", "892A6.967 ", "fill", "1.003 0 0 ", "4-.002.968", "1.048z", "data-id", " 3.999 4.0", ".897-2 2v4", "change", "now", "H4c-1.103 ", "1-.644 1.1", ".186a8.94 ", "touchmove", "Icon", ".897-2-2-2", "0-2 .897-2", "h-2v6h6z", "47 3.999 7", "PTPFu", " 0 0 0-3.2", ".225-1.1 2", "0 0 0 .38-", "PhZxP", "bjNcc", "053 7.005 ", "13970LQQZvD", "2.725 7.11", "m4.431 12.", "screenchan", "assistive", " 8.95 8.95", "6 1.907 7.", "BSKuo", "0 1.767.51", "preventDef", "0V4a1 1 0 ", "M20 3H4a1 ", "0 1-1V4a1 ", "9 9.228 9.", "002 0 0 1-", "M16 21c3.5", "svg", "c1.103 0 2", "get", "H5v-2zm12 ", " 1.814-.18", "2h-2V7zm0 ", ".089-1.218", "recents", "getBoundin", ".832L6.697", "0 0 1-.55 ", "061-.016.0", "2 2h7c1.10", "7zm11-5h-2", "gikRE", "2v10a2 2 0", "28A8.95 8.", "-.769zm-8.", "Vldin", "1 1.892 1.", "Hide ID", "4h-2V7h2v2", "M16 7v10c1", "NMXzX", "path", "shortcutCo", "style", "eKGEB", "7.005 0 0 ", "3 9a1.003 ", "00/svg", "Indbq", "clientX", "M10 4H8v4H", "v7h2zm5 14", "1zm-1 16H5", "3-5-5-5S7 ", "11.75", "focus", "0 18V4h10l", "5.46 1.701", ".257 5.127", "48 3.832a1", "2-.082-.03", "M5 5h5V3H3", "1.103 0-2 ", "-3.229 2-5", "includes", "31 3-3s-1.", "EINZX", "2 2v8c0 1.", "Reload", "032 7.032 ", "1.346-3 3-", " 2 2zm0-8h", "6l3.612-4.", "5 7h2v2H5V", "2zm2-4h-2v", "-1.052-3.3", "touch", "LRFak", "4zm0 5h16v", "-1.355-3.2", "9.02 0 0 0", "17-.056-.0", "paste", " 0 0 1 1h1", "H13z", "-2-2-2zm-1", "msfullscre", "3.218-1.35", "0h2v-6H4v2", "19-1.355 9", ".096 0 0 0", "M20.817 11", "345-5.236 ", "2 0 0 0-2 ", "7 2-2v-8c0", "div", "touchend", "-1.103-.89", "7 2-2V4c0-", "M20 11V5c0", "0v10z", "mouseup", "416 3.377 ", "Show ID", "S18.387 17", ".044 1.435", "M12 16c1.6", " 0 0 2 2h1", "1v16a1 1 0", "stener", "0 0 1.645z", "0 1-2.822 ", "14940rGCGqU", " 5.999-9S1", "Home", "LJcWy", "103.897 2 ", "8.347l-3.0", " 7H4c-1.10", "target", " 0 0 0 1.0", "gClientRec", ".103.897 2", "4.243 7 7v", "-2.43-2.43", "38-.18V2L8", "volume", "9.527 4.54", "taskId", "08 3.677L7", "mozfullscr", "7zm0 4h2v2", "1 2.502 1.", "addEventLi", ".028 9.028", " 2-2v-7c0-", "v2z", "1870iyGbXW", "014 0 0 0 ", "6H7v-2h10v", "data", "shortcutEv", "2927974qQNXda", "LdyVK", "v2h8V5h3v6", "2-2h-4V4h1", "6 0 0 1 5 ", "6.996 6.99", "M21 5H3a2 ", "passive", " 2.428 2.4", "clipboard", "8.94 0 0 0", "Board", "10l.002 10", " 2v13c0 1.", "69-.823l-1", "2 2h10c1.1", "4v2h6zM8 2", "75.931l2 1", " 0 0 1-.85", "click", "0 0-.396-1", "7h7l.001 7", "height", "circle", "shortcut", "5 8.886 8.", "M6 12h6v2H", "028 7.028 ", "M17 8V7c0-", "H4zm16-6h-", "3c.033 0 .", "width", "7-2-2-2H9V", "grEHH", "6zm0 4h6v2", "qqpuo", "children", " 2v16c0 1.", "1 0 0 0-1-", "33L12 5.86", " 2v10c0 1.", " 7.11 0 0 ", "57-5.428 6", " 2v5H4V5h3", "2 2zm2 7v-", "back", "027 1.027 ", "zm0-6h-4V4", "Recents", "2-.116C7.0", "M20 2H10c-", "unlock", "2 22a9.09 ", "opacity", "8a2 2 0 0 ", "1.331-1.09", "m-2-4h2V3h", "1.103-.897", "0 0 0 14 2", "mouse", "3s3 1.346 ", "-.897 2-2V", "closest", ".387 1.386", "6.961 0 0 ", "touch_", "15%", "608429NsrCjl", "action", "34 9.096 9", "top", "left", "-1-1H8a1 1", "H5v-5H3v7h", ".002 16H6.", "2zm-8 2h2v", " 0 0 0-.57", ".116c.026-", "pageX", "1116suLVAC", "tListener", "enchange", "2613678qPdXGo", "board", "11343WoYfOK", "961 0 0 1-", "v5h-5v2h7z", "7 16 3v2c2", "03 0 2-.89", " 0 0 0-1.5", "12%", "Copy", "3 0 2-.897", "ErxKo", "grab", "4v-4c0-1.1", "0 2-2V7a2 ", "2.503-1.05", "3a.986.986", "0 0 0 .782", "H6z", "device_id", "18ZXshpd", "6a1 1 0 0 ", " 1.539 5.0", "Back", "zIndex", "27.05A1 1 ", "rHaoQ", ".024l-14-1", "8v12.264l-", "Paste", "1184896SsSprf", "59 15.016 ", " 0-2 .897-", "4c-.025-.0", ".999-4.909", "set", "4 7.002 7.", " 0 0 0-.38", "readText", "webkitfull", "6v6h2v-4h4", "7a1 1 0 0 ", "7.032 15 7", "-2h2v2zm0-", "kdNng", "8.952 8.95", "right", "2 2h12c1.1", "10c-1.103 ", "2 0 0 0-2-", "eenchange", "4c0-1.103-", "0 0 24 24", "886 0 0 0 ", "h-5c-1.103", "3 1.329 3 "];
  return ii = function() {
    return e;
  }, ii();
}
function si(e, n) {
  const t = ii();
  return si = function(r, o) {
    return r = r - 101, t[r];
  }, si(e, n);
}
const h_ = or((e, n) => {
  const t = si, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = ye(l), f = {};
  f.x = 0, f.y = 0;
  const h = ye(f), [g, d] = ut(null), [m, p] = ut(0), b = ye(null), y = ye(null), w = ye(null), O = {};
  O[t(427)] = t(116), O[t(342)] = 0.5, O[t(395)] = 999;
  const [x, T] = ut(O), _ = {};
  _[t(395)] = 1e3;
  const [j, L] = ut(_), X = ye(null), ne = ye(null), [ee, z] = ut(null), G = (D) => {
    const E = t;
    if (D[E(157) + E(519)](), s[E(166)][E(509)] == !0) return;
    const me = Nt[D[E(513)]], _e = a[E(431)], Me = w[E(431)], ie = _e[E(172) + E(268) + "t"](), Ie = Me[E(172) + E(268) + "t"](), Ze = 5;
    let At, yt;
    const un = ie[E(320)] - Ie[E(320)], Vt = ie[E(311)] - Ie[E(311)];
    if (D[E(513)][E(211)](E(223))) {
      const { touches: Ue, changedTouches: et } = D, $t = Ue[0] ?? et[0];
      At = $t[E(367)], yt = $t[E(495)];
    } else D[E(513)][E(211)](E(348)) && (At = D[E(196)], yt = D[E(429)]);
    if (me == Nt[E(465)]) {
      s[E(406)]({ ...s[E(166)], isDown: !0 }), u[E(431)].x = At - Ie[E(360)], u[E(431)].y = yt - Ie[E(359)];
      const Ue = {};
      Ue[E(342)] = 1, Ue[E(427)] = E(383);
      const et = { ...x, ...Ue };
      T(et), p(performance[E(131)]());
    } else if (me == Nt[E(434)]) {
      if (s[E(166)][E(446)] == !1) return;
      let Ue = At - u[E(431)].x - ie[E(360)], et = yt - u[E(431)].y - ie[E(359)];
      const $t = un - Ze;
      (Ue < Ze || Ue > $t || et < Ze || et > Vt - Ze) && !ne[E(431)] || (Me[E(190)][E(360)] = Ue + "px", Me[E(190)][E(359)] = et + "px", h[E(431)].x = Ue, h[E(431)].y = et);
    } else if (me == Nt[E(248)]) {
      const Ue = performance[E(131)]() - m;
      if (g == Nt[E(465)] || Ue < 200) {
        const De = {};
        De[E(509)] = !0, De[E(446)] = !1, s[E(406)]({ ...s[E(166)], ...De });
      } else s[E(406)]({ ...s[E(166)], isDown: !1 });
      const et = {};
      et[E(342)] = 0.5, et[E(427)] = E(116);
      const $t = { ...x, ...et };
      T($t);
    }
    d(me), Me[E(202)]();
  }, Q = async (D) => {
    const E = t;
    D[E(157) + E(519)]();
    const me = D[E(266)][E(351)](E(242))[E(104) + "te"](E(127));
    if (me === E(112))
      mu() ? E(120) === E(483) ? _0x296862[E(430) + E(369)](_0x2890d4, _0x3f3474) : d_() : f_(r);
    else if (E(191) !== E(290)) {
      const _e = {};
      _e[E(357)] = E(288) + E(466), _e[E(313)] = me, _e[E(287)] = "";
      const Me = _e;
      me === E(229) && (E(187) === E(438) ? _0x432053(() => {
        const ie = E, Ie = { ..._0x587723 };
        Ie[ie(342)] = _0x3e4631[ie(166)][ie(509)] ? 1 : 0, _0x1c1136(Ie);
      }) : Me[E(287)] = await navigator[E(298)][E(409)]()), me === E(472) && (E(178) !== E(382) ? Me[E(275)] = E(189) + "py" : [E(434), E(465), E(248)][E(526)]((ie) => {
        const Ie = E;
        _0x5ef8b2[Ie(280) + Ie(256)](ie, _0x3762b5);
      })), i(o_, Me);
    } else {
      const _e = {};
      _e[E(509)] = !0, _e[E(446)] = !1;
      const Me = { ..._0x3810ab[E(166)], ..._e };
      _0xde3550[E(406)](Me);
    }
    s[E(406)]({ ...s[E(166)], showMenu: !1 }), y[E(431)][E(202)]();
  }, I = (D) => {
    const E = t;
    if (E(460) !== E(113)) {
      const me = mu();
      i(i_, me);
    } else _0xfabe75[E(280) + E(256)](E(487), _0x278c71, _0x4b6d32), _0x28eb27[E(280) + E(256)](E(135), _0x59d9d8, _0x1185ea), _0x2fb197[E(280) + E(256)](E(243), _0x591c96);
  };
  Ve(() => {
    const D = t;
    D(322) !== D(322) ? _0x5065b8[D(526)]((E) => {
      const me = D;
      _0x4581e7[me(280) + me(256)](E, _0x259a8e);
    }) : requestAnimationFrame(() => {
      const E = D;
      if (E(428) !== E(428)) _0x54fd9c();
      else {
        const me = { ...j };
        me[E(342)] = s[E(166)][E(509)] ? 1 : 0, L(me);
      }
    });
  }, [s]), Ve(() => {
    const D = t;
    if (D(324) !== D(213)) {
      const E = a[D(431)], me = [D(112) + D(130), D(410) + D(151) + "ge", D(277) + D(421), D(233) + D(370)];
      return E && (D(479) === D(155) ? _0x1266fd(_0x2142a1) : me[D(526)]((_e) => {
        const Me = D;
        E[Me(280) + Me(256)](_e, I);
      })), () => {
        const _e = D;
        E && (_e(195) !== _e(195) ? _0x275193() ? _0x25cb8b() : _0x3d0da2(_0x591faf) : E[_e(430) + _e(369)](_e(308), I));
      };
    } else return;
  }, []), Ve(() => {
    const D = t, E = w[D(431)], me = y[D(431)];
    if (me && me[D(280) + D(256)](D(308), Q), E) {
      const _e = {};
      _e[D(296)] = !1;
      const Me = _e;
      return o ? (E[D(280) + D(256)](D(487), G, Me), E[D(280) + D(256)](D(135), G, Me), E[D(280) + D(256)](D(243), G)) : D(415) !== D(145) ? [D(434), D(465), D(248)][D(526)]((ie) => {
        const Ie = D;
        E[Ie(280) + Ie(256)](ie, G);
      }) : (_0x45cee5[D(190)][D(360)] = _0x25967c + "px", _0x57518e[D(190)][D(359)] = _0x29b6c2 + "px", _0x23feff[D(431)].x = _0x5e707e, _0x3a8210[D(431)].y = _0x22efc1), () => {
        const ie = D;
        if (ie(397) === ie(146)) {
          const Ie = { ..._0x3de891[ie(166)] };
          Ie[ie(446)] = !1, _0x859666[ie(406)](Ie);
        } else me && me[ie(430) + ie(369)](ie(308), Q), E && (o ? ie(262) === ie(262) ? [ie(487), ie(135), ie(243)][ie(526)]((Ie) => {
          const Ze = ie;
          E[Ze(430) + Ze(369)](Ie, G);
        }) : _0x10e942[ie(275)] = ie(189) + "py" : ie(224) !== ie(224) ? _0x3f1763[ie(430) + ie(369)](ie(308), _0x342f62) : [ie(434), ie(465), ie(248)][ie(526)]((Ie) => {
          const Ze = ie;
          E[Ze(430) + Ze(369)](Ie, G);
        }));
      };
    }
  }, [o, G]);
  const A = () => {
    const D = t;
    if (D(182) === D(514)) _0x11a9ed && (_0x4a87ae[D(431)] = _0x5aa025), _0x3edae2();
    else {
      const E = w[D(431)];
      E[D(190)][D(320)] = X[D(431)] != D(500) ? D(379) : "", E[D(190)][D(311)] = X[D(431)] == D(500) ? D(379) : "", E[D(190)][D(417)] = D(355), E[D(190)][D(359)] = "5%", E[D(190)][D(360)] = "";
    }
  };
  Ou(n, () => ({ fixTouch: (D) => {
    const E = t;
    if (E(141) !== E(103)) D && (X[E(431)] = D), A();
    else {
      const me = _0xa640bf[E(131)]() - _0x324942;
      if (_0x1fee82 == _0xf49ff[E(465)] || me < 200) {
        const ie = {};
        ie[E(509)] = !0, ie[E(446)] = !1;
        const Ie = { ..._0x2dc84f[E(166)], ...ie };
        _0x2e1d6f[E(406)](Ie);
      } else {
        const ie = { ..._0x575e9f[E(166)] };
        ie[E(446)] = !1, _0x2fcde8[E(406)](ie);
      }
      const _e = {};
      _e[E(342)] = 0.5, _e[E(427)] = E(116);
      const Me = { ..._0x14c977, ..._e };
      _0x4b3db3(Me);
    }
  }, setFullscreen: (D) => {
    z(D);
  } }));
  const $ = {};
  $[t(123)] = t(478) + t(516) + "1)";
  const N = {};
  N.d = ee ? t(197) + t(305) + t(235) + t(524) + t(411) + t(336) + t(139) : t(208) + t(198) + t(362) + t(177) + t(375) + t(345) + t(455);
  const B = {};
  B[t(325)] = t(108);
  const H = {};
  H[t(123)] = t(478) + t(516) + "1)";
  const K = {};
  K.d = t(339) + t(209) + t(129) + t(132) + t(138) + t(329) + t(263) + t(304) + t(377) + t(464) + t(165) + t(350) + t(422) + t(137) + t(467) + t(301) + t(318) + t(384) + t(522) + t(292) + t(247);
  const te = {};
  te.d = t(315) + t(323) + t(389);
  const Z = {};
  Z[t(325)] = t(380);
  const ce = {};
  ce[t(123)] = t(478) + t(516) + "1)";
  const ue = {};
  ue.d = t(246) + t(244) + t(507) + t(470) + t(361) + t(491) + t(132) + t(138) + t(302) + t(263) + t(433) + t(263) + t(176) + t(381) + t(282) + t(346) + t(435) + t(332) + t(291) + t(425) + t(403) + t(333) + t(310) + t(231);
  const de = {};
  de[t(325)] = t(400);
  const Ee = {};
  Ee[t(123)] = t(478) + t(516) + "1)";
  const be = {};
  be.d = t(317) + t(512) + t(200) + t(270) + t(445) + t(403) + t(214) + t(263) + t(418) + t(377) + t(241) + t(244) + t(321) + t(488) + t(217) + t(349) + t(504) + t(520) + t(453);
  const Ne = {};
  Ne[t(325)] = t(521);
  const Pe = {};
  Pe[t(123)] = t(478) + t(516) + "1)";
  const pe = {};
  pe.d = t(253) + t(492) + t(212) + t(498) + t(476) + t(426) + t(114);
  const Ke = {};
  Ke.d = t(238) + t(134) + t(299) + t(226) + t(525) + t(485) + t(271) + t(153) + t(142) + t(236) + t(281) + t(515) + t(272) + t(452) + t(106) + t(125) + t(252) + t(480) + t(353) + t(279) + t(147) + t(192) + t(183) + t(122) + t(475) + t(468) + t(216) + t(174) + t(149) + t(330) + t(133) + t(503) + t(307) + t(489) + t(316) + t(117) + t(154) + t(510) + t(258) + t(462) + t(374) + t(386) + t(407) + t(162) + t(471) + t(294) + t(293) + t(436) + t(227) + t(393) + t(358) + t(237) + t(297) + t(180) + t(482) + t(341) + t(508) + t(168) + t(497) + t(285) + t(234) + t(314) + t(424) + t(344) + t(161) + t(440) + t(486) + t(416) + t(110) + t(115) + t(494) + t(518) + "z";
  const S = {};
  S[t(325)] = t(215);
  const F = {};
  F[t(123)] = t(478) + t(516) + "1)";
  const k = {};
  k.d = t(295) + t(240) + t(179) + t(254) + t(343) + t(385) + t(420) + t(364) + t(169) + t(101) + t(432) + t(454) + t(493) + t(220) + t(278) + t(167) + t(286) + t(221) + t(414) + t(185) + "z";
  const V = {};
  V[t(325)] = t(300);
  const R = {};
  R[t(123)] = t(478) + t(516) + "1)";
  const re = {};
  re.d = t(473) + t(419) + t(138) + t(326) + t(263) + t(304) + t(377) + t(245) + t(346) + t(232) + t(203) + t(363) + t(469);
  const oe = {};
  oe.cx = t(201), oe.cy = "18", oe.r = "1";
  const le = {};
  le[t(325)] = t(c ? 184 : 250);
  const Oe = {};
  Oe[t(123)] = t(478) + t(516) + "1)";
  const Je = {};
  Je.d = t(163) + t(118) + t(405) + t(260) + t(274) + t(376) + t(352) + t(128) + t(140) + t(251) + t(102) + t(283);
  const ft = {};
  ft.d = t(186) + t(143) + t(210) + t(461) + t(456) + t(448) + t(206) + t(496) + t(267) + t(396) + t(347) + t(158) + t(109) + t(173) + t(265) + t(107) + t(505) + t(269) + t(218) + t(319) + t(175) + t(439) + t(335) + t(144) + t(366) + t(119) + t(458) + t(328) + t(399) + t(477) + t(404) + t(228) + t(207) + t(387) + t(408) + t(338) + t(402) + t(413) + t(111);
  const lt = {};
  lt[t(325)] = t(450);
  const Jt = {};
  Jt[t(123)] = t(478) + t(516) + "1)";
  const Rt = {};
  Rt.d = t(121) + t(105) + t(309) + t(398) + t(449) + t(378) + t(306) + t(412) + t(156) + t(219) + t(249) + t(204) + t(222) + t(331) + t(170) + t(442) + t(388) + t(181) + t(451) + t(365) + t(264) + t(276) + t(205) + t(443) + t(239) + t(126);
  const Qt = {};
  Qt[t(325)] = t(484);
  const Bt = {};
  Bt[t(123)] = t(478) + t(516) + "1)";
  const Ht = {};
  Ht.d = t(444) + t(225) + t(501) + t(437);
  const Zt = {};
  Zt[t(325)] = t(337);
  const en = {};
  en[t(123)] = t(478) + t(516) + "1)";
  const tn = {};
  tn.d = t(159) + t(523) + t(255) + t(230) + t(392) + t(160) + t(327) + t(199) + t(463);
  const zt = {};
  zt[t(325)] = t(261);
  const ke = {};
  ke[t(123)] = t(478) + t(516) + "1)";
  const at = {};
  at.d = t(150) + t(459) + t(502) + t(506) + t(378) + t(303) + t(193) + t(124) + t(257);
  const Ft = {};
  return Ft[t(325)] = t(394), U.jsxs(U.Fragment, { children: [s[t(166)][t(509)] ? U.jsxs(c_, { id: t(457) + t(517) + r, style: j, ref: y, children: [U.jsxs(St, { "data-id": t(112), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: $, children: U.jsx(t(188), N) }), U.jsx(Ct, B)] }), U.jsxs(St, { "data-id": t(472), children: [U.jsxs(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: H, children: [U.jsx(t(188), K), U.jsx(t(188), te)] }), U.jsx(Ct, Z)] }), U.jsxs(St, { "data-id": t(229), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: ce, children: U.jsx(t(188), ue) }), U.jsx(Ct, de)] }), U.jsxs(St, { "data-id": t(340), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "25", height: "25", viewBox: t(423), style: Ee, children: U.jsx(t(188), be) }), U.jsx(Ct, Ne)] }), U.jsxs(St, { "data-id": t(490), children: [U.jsxs(t(164), { xmlns: t(441) + t(481) + t(194), width: "25", height: "25", viewBox: t(423), style: Pe, children: [U.jsx(t(188), pe), U.jsx(t(188), Ke)] }), U.jsx(Ct, S)] }), U.jsxs(St, { "data-id": t(372), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "25", height: "25", viewBox: t(423), style: F, children: U.jsx(t(188), k) }), U.jsx(Ct, V)] }), U.jsxs(St, { "data-id": t(390), children: [U.jsxs(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: R, children: [U.jsx(t(188), re), U.jsx(t(312), oe)] }), U.jsx(Ct, le)] }), U.jsxs(St, { "data-id": t(273), children: [U.jsxs(t(164), { xmlns: t(441) + t(481) + t(194), width: "25", height: "25", viewBox: t(423), style: Oe, children: [U.jsx(t(188), Je), U.jsx(t(188), ft)] }), U.jsx(Ct, lt)] }), U.jsxs(St, { "data-id": t(447), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: Jt, children: U.jsx(t(188), Rt) }), U.jsx(Ct, Qt)] }), U.jsxs(St, { "data-id": t(171), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: Bt, children: U.jsx(t(188), Ht) }), U.jsx(Ct, Zt)] }), U.jsxs(St, { "data-id": t(511), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: en, children: U.jsx(t(188), tn) }), U.jsx(Ct, zt)] }), U.jsxs(St, { "data-id": t(334), children: [U.jsx(t(164), { xmlns: t(441) + t(481) + t(194), width: "28", height: "28", viewBox: t(423), style: ke, children: U.jsx(t(188), at) }), U.jsx(Ct, Ft)] })] }) : null, U.jsx(u_, { id: t(457) + t(474) + "s_" + r, className: t(152), ref: b, style: x, children: U.jsx(l_, { src: a_, className: t(152), id: t(457) + t(354) + r, alt: t(136), ref: w, draggable: !1 }) })] });
});
function rr(e, n) {
  const t = ai();
  return rr = function(r, o) {
    return r = r - 424, t[r];
  }, rr(e, n);
}
const ot = rr;
function ai() {
  const e = ["DRomI", "1237806zTBUwS", "720110uSIpTB", "autoResize", "setOrienta", "3JAjUgd", "codedWidth", "save", "oUdHR", "ror:", "2161876tFgcjB", "hardwareAc", "clearRect", "innerWidth", "landscape", "now", "videoMeta", "portrait", "isFullsCre", "concat", "Decoder er", "iframe", "387702WzWkLK", "715wvOnse", "isKeyFrame", "setVideoMe", "drawImage", "cihUY", "orientatio", "state", "codec", "celeration", "height", "optimizeFo", "decode", "lock", "1528681EOlfqS", "67128BTKmeQ", "kykis", "heidq", "from", "tion", "rotate", "29055zdQege", "18LQNLpw", "concatUint", "buildDecod", "configure", "IBFwH", "key", "scale", "close", "rootSize", "8Arrays", "innerHeigh", "translate", "length", "canvasRef", "setIsConne", "ctx", "width", "30kLOjck", "current", "maxWidth", "error", "restore", "codedHeigh", "lnUDJ", "vTMKl", "min", "SPhUT", "isPlay", "frameSize", "delta", "GflpB", "8IYTSog", "isMobile", "getContext", "decoder", "rLatency", "scaleSize", "ejPgi"];
  return ai = function() {
    return e;
  }, ai();
}
(function(e, n) {
  const t = rr, r = e();
  for (; ; )
    try {
      if (parseInt(t(464)) / 1 + parseInt(t(443)) / 2 + parseInt(t(426)) / 3 * (-parseInt(t(431)) / 4) + parseInt(t(505)) / 5 * (parseInt(t(465)) / 6) + -parseInt(t(457)) / 7 * (-parseInt(t(496)) / 8) + -parseInt(t(504)) / 9 * (parseInt(t(482)) / 10) + -parseInt(t(444)) / 11 * (-parseInt(t(458)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 283894);
var vu, bu, yu, _u, Su, Cu, wu, Eu;
Eu = ot(501), wu = ot(424), Cu = ot(425) + ot(462), Su = ot(446) + "ta", _u = ot(467) + "er", yu = ot(445), bu = ot(466) + ot(474), vu = ot(455);
class x_ {
  constructor(n, t, r, o, i, s) {
    We(this, Eu, (n, t, r, o) => {
      const i = ot, s = r / n, a = o / t;
      if (a < 0.4 && s > a)
        if (i(491) !== i(448)) {
          const u = {};
          return u[i(481)] = r, u[i(453)] = t * s, u;
        } else {
          this[i(478)] = _0x5dfa71, this[i(451)] = _0x7ae4ac, this[i(497)] = _0x110dd2, this[i(484)] = _0x204224, this[i(479) + "ct"] = _0x249e6d, this[i(481)] = null, this[i(453)] = null, this[i(492)] = null, this[i(437)] = null, this[i(442)] = null;
          const u = {};
          u[i(481)] = null, u[i(453)] = null, this[i(493)] = u, this[i(473)] = null, this[i(449) + "n"] = i(438), this[i(439) + "en"] = null, this[i(432) + i(452)] = _0xd24912, this[i(480)] = _0x2cdab8[i(483)][i(498)]("2d"), this[i(499)] = this[i(467) + "er"]();
        }
      const c = Math[i(490)](s, a), l = {};
      return l[i(481)] = n * c, l[i(453)] = t * c, l;
    });
    We(this, wu, () => {
      var s;
      const n = ot;
      if (!this[n(493)][n(427)]) return;
      const t = this[n(439) + "en"] ? this[n(497)] ? window[n(434)] - 20 : this[n(484)] : this[n(484)], r = this[n(449) + "n"] == n(435) ? window[n(434)] : window[n(475) + "t"] - (this[n(497)] ? 12 : 50), o = this[n(501)](this[n(493)][n(427)], this[n(493)][n(487) + "t"], t, r);
      this[n(481)] = o[n(481)], this[n(453)] = o[n(453)], !this[n(473)] && (n(469) === n(469) ? (s = this[n(479) + "ct"]) == null || s.call(this, !0) : (_0x3c678f[n(481)] = this[n(481)], _0x23d972[n(453)] = this[n(453)], this[n(480)][n(447)](_0x362006, 0, 0, this[n(481)], this[n(453)])));
      const i = {};
      i[n(481)] = o[n(481)], i[n(453)] = o[n(453)], this[n(473)] = i;
    });
    We(this, Cu, (n) => {
      const t = ot;
      this[t(449) + "n"] = n, this[t(497)] && screen[t(449) + "n"][t(456)](n);
    });
    We(this, Su, (n) => {
      const t = ot, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(437)] = r;
    });
    We(this, _u, () => {
      const n = ot, t = new VideoDecoder({ output: async (o) => {
        const i = rr, s = await createImageBitmap(o), a = {};
        a[i(427)] = o[i(427)], a[i(487) + "t"] = o[i(487) + "t"], this[i(493)] = a, this[i(480)][i(433)](0, 0, this[i(453)], this[i(453)]);
        const c = this[i(478)][i(483)];
        this[i(449) + "n"] == i(435) ? (c[i(481)] = this[i(453)], c[i(453)] = this[i(481)], this[i(480)][i(428)](), this[i(480)][i(476)](0, this[i(481)]), this[i(480)][i(463)](Math.PI / 2), this[i(480)][i(471)](-1, -1), this[i(480)][i(447)](s, 0, 0, this[i(481)], this[i(453)]), this[i(480)][i(486)]()) : (c[i(481)] = this[i(481)], c[i(453)] = this[i(453)], this[i(480)][i(447)](s, 0, 0, this[i(481)], this[i(453)])), s[i(472)](), o[i(472)]();
      }, error: (o) => console[n(485)](n(441) + n(430), o) }), r = {};
      return r[n(451)] = this[n(451)], r[n(432) + n(452)] = this[n(432) + n(452)], r[n(454) + n(500)] = !0, t[n(468)](r), t;
    });
    We(this, yu, (n) => {
      const t = ot;
      for (let r = 0; r <= n[t(477)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1) {
          if (t(502) !== t(503))
            return (n[r + 4] & 31) === 5;
          _0x4d8156[t(481)] = this[t(453)], _0x38ea4b[t(453)] = this[t(481)], this[t(480)][t(428)](), this[t(480)][t(476)](0, this[t(481)]), this[t(480)][t(463)](_0x402f61.PI / 2), this[t(480)][t(471)](-1, -1), this[t(480)][t(447)](_0x14ca50, 0, 0, this[t(481)], this[t(453)]), this[t(480)][t(486)]();
        }
      for (let r = 0; r <= n[t(477)] - 3; r++)
        if (t(460) === t(459)) {
          const o = _0x22c8f9[t(461)](_0x4df01f)[t(440)](_0x21184b[t(461)](_0x44a76a));
          return new _0x12811b(o);
        } else if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return t(495) !== t(488) ? (n[r + 3] & 31) === 5 : void 0;
      return !1;
    });
    We(this, bu, (n, t) => {
      const r = ot, o = Array[r(461)](n)[r(440)](Array[r(461)](t));
      return new Uint8Array(o);
    });
    We(this, vu, (n) => {
      const t = ot;
      if (!this[t(499)] || this[t(499)][t(450)] == t(472) || !this[t(437)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[t(445)](r);
      if (o)
        if (t(489) === t(489)) this[t(442)] = r;
        else {
          const i = {};
          return i[t(481)] = _0x341de5, i[t(453)] = _0x53e717 * _0x68f6bd, i;
        }
      this[t(442)] && this[t(437)] && (t(429) === t(429) ? (!this[t(492)] && (r = this[t(466) + t(474)](this[t(437)], this[t(442)]), this[t(492)] = !0), this[t(499)][t(455)](new EncodedVideoChunk({ timestamp: performance[t(436)]() * 1e3, type: t(o ? 470 : 494), data: r }))) : this[t(442)] = _0x3ced8c);
    });
    const a = rr;
    this[a(478)] = r, this[a(451)] = o, this[a(497)] = n, this[a(484)] = t, this[a(479) + "ct"] = s, this[a(481)] = null, this[a(453)] = null, this[a(492)] = null, this[a(437)] = null, this[a(442)] = null;
    const c = {};
    c[a(481)] = null, c[a(453)] = null, this[a(493)] = c, this[a(473)] = null, this[a(449) + "n"] = a(438), this[a(439) + "en"] = null, this[a(432) + a(452)] = i, this[a(480)] = r[a(483)][a(498)]("2d"), this[a(499)] = this[a(467) + "er"]();
  }
}
(function(e, n) {
  const t = hn, r = e();
  for (; ; )
    try {
      if (-parseInt(t(252)) / 1 + parseInt(t(302)) / 2 + -parseInt(t(337)) / 3 + parseInt(t(291)) / 4 + parseInt(t(220)) / 5 + parseInt(t(279)) / 6 * (parseInt(t(345)) / 7) + parseInt(t(243)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 208876);
function ci() {
  const e = ["connection", "vJRAb", "OsnAz", "Timeout wa", "stener", "onScreenEv", "zOoYP", "current", "timeSync", "size", "type_clien", "device_id", "addEventLi", "tion", "ent", "code", "response", "height", "6DZypKy", "Color", "message", "unacY", "gbYUC", "canvas_", "writeText", "tabIndex", "delete", "fixTouch", "width", "data", "859288UlmfpQ", "map", "connect_er", "length", "POST", "qCKrT", "text", "TCatc", "qVRKS", "set", "setFullscr", "240672PxTvwT", "reconnecti", "de: ", "CzkGL", "aFRCh", "value", "ItqhI", "zheQe", "sync", "dFrEd", "passwd", "msg", "applicatio", "meta", "FLuJo", " closed co", "headers", "ycSVW", "margin", "webkitFull", "url", "large", "control", "ECVqV", "n/json", "get_video_", "background", "screenElem", "clipboard", "mozFullScr", "tListener", "video_meta", "red", "eenElement", "Element", "848346siPwUi", "uNDGa", "info", "middle", "unlock", "method", "onSyncIFra", "mqxrK", "50148cPBxdr", "vGdOU", "iting for ", "userAgent", "action", "password", "qGMff", "tMKFT", "eKjek", "iframe", "qDYGq", "GyqPt", "false", "isFullsCre", "YeCZQ", "isDown", "SCPRC", "reload", "setVideoMe", "draggable", "center", "setOrienta", "error", "status", "898030CCzYJz", "emit", "screen_mai", "get", "shortcutEv", "test", "join_room", "msFullscre", "COPY_TEXT", "enElement", "NnjzF", "screen_", "removeEven", "screen", "LwQJZ", "decode", "fSlLu", "primary", "gOfhi", "isMobile", "fullscreen", "timeout", "orientatio", "3076904oLveeF", "shortcut", "taskId", "showMenu", "Reconnect", "YhWXP", "type", "change", "disconnect", "414883ApjLRQ", "een", "now", "autoResize", "connect", "BhUDO", "children", "Content-Ty", "ror"];
  return ci = function() {
    return e;
  }, ci();
}
function hn(e, n) {
  const t = ci();
  return hn = function(r, o) {
    return r = r - 219, t[r];
  }, hn(e, n);
}
const D_ = or((e, n) => {
  const t = hn, { api: r, dataDevice: o, showAssistive: i, showDeviceId: s, onSyncEvent: a, onSyncButton: c, maxWidth: l, codec: u, hardwareAcceleration: f } = e, h = o[t(272)], g = /iPhone|iPad|iPod|Android/i[t(225)](navigator[t(348)]), d = t(324), m = ye(null), p = ye(null), b = ye(null), y = ye(null), [w, O] = ut(null), [x, T] = ut(null), _ = {};
  _[t(246)] = !1, _[t(360)] = !1;
  const [j, L] = ut(_), [X, ne] = ut(null), [ee, z] = ut(null), G = t(284) + h, Q = t(231) + h, I = t(222) + "n_" + h, [A, $] = ut([]), N = ye(null), B = ye(/* @__PURE__ */ new Map());
  Ve(() => {
    T(s);
  }, [s]);
  const H = (S) => {
    const F = t;
    F(299) !== F(338) ? $((k) => [...k, S]) : _0x24e0fc && _0x228318[F(251)]();
  }, K = (S) => {
    const F = t;
    m[F(268)][F(221)](F(281), S), a == null || a(S);
  };
  Ou(n, () => ({ api: async function(S, F = 5e3) {
    return new Promise((k, V) => {
      const R = hn;
      if (R(325) === R(325)) {
        const re = setTimeout(() => {
          const oe = R;
          B[oe(268)][oe(287)](S[oe(245)]);
          const le = {};
          le[oe(349)] = S[oe(349)], le[oe(245)] = S[oe(245)], le[oe(219)] = !1, le[oe(281)] = oe(264) + oe(347) + oe(277), V(le);
        }, F);
        B[R(268)][R(300)](S[R(245)], (oe) => {
          const le = R;
          if (le(283) !== le(353)) clearTimeout(re), k(oe);
          else {
            const Oe = {};
            Oe[le(349)] = le(266) + le(275), _0xfdfc9e[le(268)][le(221)](le(281), Oe);
          }
        }), m[R(268)][R(221)](R(281), S);
      } else if (_0x1d8631 === _0x42af01) {
        const re = { ..._0xe1332c };
        re[R(246)] = !1, _0x10f012(re);
      } else _0x3a1576(_0x53a078);
    });
  }, sync: function(S) {
    const F = t;
    m[F(268)][F(221)](F(281), S);
  }, getDeviceId: function() {
    const S = t;
    if (S(305) === S(296)) _0x5ccfb0[S(268)] && (_0x2a5c21[S(268)][S(251)](), _0x120ce5[S(268)] = null), _0x3bb61f(null), _0x2f7e0c([]), _0x4c5f83(null), _0x121f8e(_0x1319a1[S(254)]());
    else return o[S(272)];
  } })), Ve(() => {
    (async () => {
      const S = hn;
      try {
        if (S(316) === S(308)) _0x1b4585[S(268)][S(221)](S(281), { action: S(269), ts: _0x19cc86[S(254)]() });
        else {
          const F = {};
          F[S(259) + "pe"] = S(314) + S(326);
          const k = {};
          k[S(272)] = o[S(272)], k[S(350)] = o[S(312)];
          const V = {};
          V[S(322)] = r, V[S(342)] = S(295), V[S(241)] = 1e4, V[S(318)] = F, V[S(290)] = k;
          const R = V, re = await Q2(R);
          O(re[S(290)]);
        }
      } catch (F) {
        const k = {};
        k[S(313)] = F, k[S(249)] = S(367), H(k);
      }
    })();
  }, [ee]), Ve(() => {
    const S = t;
    if (S(352) !== S(352))
      if (_0x2e2407[S(219)] == !0) {
        _0x319b19[S(268)] = _0x3df5e2, _0x363c16[S(221)](S(281), { action: S(269), ts: _0xb738f2[S(254)]() });
        const F = {};
        F[S(349)] = S(266) + S(275), _0x3b3a4f[S(221)](S(281), F);
      } else {
        const F = {};
        F[S(313)] = _0x3bef2e[S(313)], F[S(249)] = S(367), _0x43c31a(F);
      }
    else {
      if (m[S(268)] || !w) return;
      const F = {};
      F[S(303) + "on"] = !1;
      const k = wo(w, F);
      return k.on(S(256), () => {
        const V = S, R = {};
        R[V(349)] = V(256), R[V(271) + "t"] = d, R[V(272)] = o[V(272)], R[V(239)] = g, R[V(312)] = o[V(312)], k[V(221)](V(226), R);
      }), k.on(S(226), (V) => {
        const R = S;
        if (R(248) === R(248))
          if (V[R(219)] == !0)
            if (R(311) !== R(311)) {
              const re = _0x5de354(() => {
                const oe = R;
                _0x3e704f[oe(268)][oe(287)](_0xf344cd[oe(245)]);
                const le = {};
                le[oe(349)] = _0x716ff5[oe(349)], le[oe(245)] = _0x3d6e6f[oe(245)], le[oe(219)] = !1, le[oe(281)] = oe(264) + oe(347) + oe(277), _0x2d3ab8(le);
              }, _0xb3865);
              _0x460744[R(268)][R(300)](_0x50228d[R(245)], (oe) => {
                _0x347e7d(re), _0x45b271(oe);
              }), _0x31c679[R(268)][R(221)](R(281), _0x5575ae);
            } else {
              m[R(268)] = k, k[R(221)](R(281), { action: R(269), ts: Date[R(254)]() });
              const re = {};
              re[R(349)] = R(266) + R(275), k[R(221)](R(281), re);
            }
          else {
            const re = {};
            re[R(313)] = V[R(313)], re[R(249)] = R(367), H(re);
          }
        else if (_0x148d59[R(268)][R(363) + "ta"](_0x490e99), !_0x45c003[R(268)][R(354)]) {
          const re = {};
          re[R(349)] = R(343) + "me", _0x2dfed1[R(221)](R(281), re);
        }
      }), k.on(S(233), (V) => {
        const R = S;
        N[R(268)][R(235)](V);
      }), k.on(S(333), (V) => {
        const R = S;
        if (V) {
          if (N[R(268)][R(363) + "ta"](V), !N[R(268)][R(354)]) {
            const re = {};
            re[R(349)] = R(343) + "me", k[R(221)](R(281), re);
          }
        } else if (R(351) !== R(355)) {
          const re = {};
          re[R(349)] = R(327) + R(315), k[R(221)](R(333), re);
        } else {
          let re;
          return re = _0x2ee467(() => {
            const oe = R;
            _0x3d874f[oe(268)] && _0x3a6f70[oe(268)][oe(221)](oe(281), { action: oe(269), ts: _0x32f683[oe(254)]() });
          }, 6e4), () => _0x150661(re);
        }
      }), k.on(S(281), (V) => {
        const R = S;
        if (R(230) === R(267)) _0x54eccf(!_0x4ff246);
        else if ((V[R(349)] == R(228) || V[R(349)] == R(224) + R(275)) && V[R(297)][R(294)] > 0 ? navigator[R(330)][R(285)](V[R(297)]) : V[R(349)] == R(242) + "n" && (N[R(268)][R(366) + R(274)](V[R(307)]), y[R(268)][R(288)](V[R(307)])), V[R(245)])
          if (R(262) === R(306)) {
            const re = {};
            re[R(313)] = _0x4f2e59, re[R(249)] = R(367), _0x5009bf(re);
          } else {
            const re = B[R(268)][R(223)](V[R(245)]);
            if (re)
              if (R(298) === R(298)) re(V), B[R(268)][R(287)](V[R(245)]);
              else {
                const oe = {};
                oe[R(349)] = R(343) + "me", _0x84796d[R(221)](R(281), oe);
              }
          }
      }), k.on(S(293) + S(260), (V) => {
        const R = S, re = {};
        re[R(313)] = V, re[R(249)] = R(367), H(re);
      }), k.on(S(251), (V) => {
        const R = S;
        if (R(356) !== R(356)) _0x1cade0(_0x47f341);
        else {
          const re = {};
          re[R(313)] = R(261) + R(317) + R(304) + V[R(276)], re[R(249)] = R(339), H(re);
        }
      }), () => {
        const V = S;
        k && (V(361) !== V(361) ? _0x2d779c[V(268)][V(221)](V(281), _0x40777b) : k[V(251)]());
      };
    }
  }, [w]), Ve(() => {
    const S = t;
    S(236) === S(236) ? b[S(268)] && (N[S(268)] = new x_(g, l, b, u, f, ne)) : (_0x3ecbca(_0x40b124), _0x4dcc77(_0x2f8fc1));
  }, [ee]), Ve(() => {
    const S = t;
    if (S(319) !== S(282)) {
      const F = () => {
        const k = S, V = document[k(240) + k(336)] || document[k(321) + k(329) + k(275)] || document[k(331) + k(335)] || document[k(227) + k(229)];
        N[k(268)][k(358) + "en"] = !!V, y[k(268)][k(301) + k(253)](!!V), y[k(268)][k(288)]();
      };
      return document[S(273) + S(265)](S(240) + S(250), F), () => {
        const k = S;
        document[k(232) + k(332)](k(240) + k(250), F);
      };
    } else _0x1ff195[S(268)] && (_0x31bb5c[S(268)] = new _0x1fbdf9(_0x149814, _0xfebd47, _0x255ea3, _0x2d0271, _0x85806d, _0x4c93f2));
  }, [ee]), Ve(() => {
    let S;
    const F = () => {
      const k = hn;
      if (k(344) !== k(344)) {
        const V = {};
        V[k(313)] = k(261) + k(317) + k(304) + _0x375c12[k(276)], V[k(249)] = k(339), _0xbb086(V);
      } else {
        if (N[k(268)])
          if (k(359) !== k(359)) {
            const V = { ..._0x22e43a };
            V[k(246)] = !1, _0x2d65cd(V);
          } else N[k(268)][k(255)]();
        S = requestAnimationFrame(F);
      }
    };
    return F(), () => cancelAnimationFrame(S);
  }, []), Ve(() => {
    let S;
    return S = setInterval(() => {
      const F = hn;
      if (m[F(268)])
        if (F(346) !== F(263)) m[F(268)][F(221)](F(281), { action: F(269), ts: Date[F(254)]() });
        else if (_0x47ce73) {
          if (_0x3f932a[F(268)][F(363) + "ta"](_0xe0e394), !_0x7ee46f[F(268)][F(354)]) {
            const k = {};
            k[F(349)] = F(343) + "me", _0x26f89d[F(221)](F(281), k);
          }
        } else {
          const k = {};
          k[F(349)] = F(327) + F(315), _0x14c4fe[F(221)](F(333), k);
        }
    }, 6e4), () => clearInterval(S);
  }, [ee]);
  const te = () => {
    const S = t;
    if (S(309) === S(238)) {
      const F = {};
      F[S(313)] = _0x29e11b, F[S(249)] = S(367), _0x5b9637(F);
    } else m[S(268)] && (m[S(268)][S(251)](), m[S(268)] = null), O(null), $([]), ne(null), z(Date[S(254)]());
  }, Z = {};
  Z[t(258)] = o[t(272)];
  const ce = {};
  ce[t(270)] = t(323);
  const ue = {};
  ue[t(270)] = t(323);
  const de = {};
  de[t(270)] = t(323);
  const Ee = {};
  Ee[t(278)] = 0, Ee[t(289)] = 0, Ee[t(328) + t(280)] = t(334);
  const be = {};
  be[t(258)] = o[t(272)];
  const Ne = {};
  Ne[t(223)] = j, Ne[t(300)] = L;
  const Pe = {};
  Pe.id = G, Pe[t(286)] = "0", Pe[t(364)] = t(357);
  const pe = {};
  pe[t(320)] = 5;
  const Ke = {};
  return Ke[t(320)] = 10, U.jsx(ux, { id: I, children: A[t(294)] == 0 ? U.jsxs(U.Fragment, { children: [!X && U.jsxs(U.Fragment, { children: [x && U.jsx(Fc, Z), U.jsxs(xd, { align: t(365), gap: t(340), children: [U.jsx(Ir, ce), U.jsx(Ir, ue), U.jsx(Ir, de)] })] }), U.jsxs(fx, { ref: p, id: Q, style: X ? {} : Ee, children: [x && U.jsx(Fc, be), i ? U.jsx(h_, { status: Ne, ref: y, canvasRef: b, displayId: h, isMobile: g, isShowDeviceId: x, onSenData: (S, F) => {
    const k = t;
    if (F[k(244)] === k(272)) T(!x);
    else if (F[k(244)] === k(310)) c == null || c(o[k(272)]);
    else if (F[k(244)] === k(362)) {
      if (k(257) === k(234)) return _0x26534f[k(272)];
      te();
    } else if (F[k(244)] === k(341)) {
      const V = {};
      V[k(349)] = k(266) + k(275), m[k(268)][k(221)](k(281), V);
    } else K(F);
  } }) : null, U.jsx(s_, { canvasContent: Pe, canvasRef: b, isMobile: g, assistive: j, onRemoteEvent: (S, F) => {
    const k = t;
    if (S === Vd) {
      const V = { ...j };
      V[k(246)] = !1, L(V);
    } else K(F);
  } })] })] }) : U.jsxs(U.Fragment, { children: [A == null ? void 0 : A[t(292)]((S, F) => U.jsx(Y0, { style: pe, message: S[t(313)], type: S[t(249)], showIcon: !0, closable: !0 }, F)), U.jsx(Di, { style: Ke, type: t(237), icon: U.jsx(uf, {}), onClick: te, children: t(247) })] }) });
});
(function(e, n) {
  for (var t = Ma, r = e(); ; )
    try {
      var o = parseInt(t(348)) / 1 * (-parseInt(t(347)) / 2) + parseInt(t(349)) / 3 + -parseInt(t(351)) / 4 + -parseInt(t(346)) / 5 * (parseInt(t(354)) / 6) + parseInt(t(353)) / 7 + -parseInt(t(350)) / 8 + parseInt(t(352)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 589006);
function Ma(e, n) {
  var t = li();
  return Ma = function(r, o) {
    r = r - 346;
    var i = t[r];
    return i;
  }, Ma(e, n);
}
function li() {
  var e = ["355216BEbDze", "17991099oBdDzd", "4745503ReizEe", "228EWyGyG", "109205ycvBSq", "359292srYMJa", "3fTMlqg", "397356jbmedF", "6101488tPyzBe"];
  return li = function() {
    return e;
  }, li();
}
export {
  D_ as ViewRP
};
