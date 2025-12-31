var Gd = Object.defineProperty;
var Xd = (e, n, t) => n in e ? Gd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var qe = (e, n, t) => Xd(e, typeof n != "symbol" ? n + "" : n, t);
import * as w from "react";
import X, { useDebugValue as mc, createElement as Yd, useRef as ve, useContext as Et, createContext as fi, useEffect as Ve, isValidElement as Kd, version as Jd, useLayoutEffect as Qd, forwardRef as ir, useState as ut, useMemo as kr, Children as Zd, useImperativeHandle as Ru } from "react";
import * as Au from "react-dom";
import vc from "react-dom";
function Do() {
  var e = ["ptor", "HuZoa", "keys", "8938060CSbPrR", "mGVVJ", "call", "get", "ertyDescri", "6146824SBKKfC", "apply", "default", "14932881ECOUQs", "14kDCtQE", "undefined", "defineProp", "erty", "forEach", "1596845scDgbr", "JwEVY", "2qMpVpd", "value", "constructo", "5004102JVPWLi", "construct", "3468656MzbXoZ", "hasOwnProp", "getOwnProp", "prototype", "function", "length", "10KdjnxK", "__esModule", "2610885AirTIM"];
  return Do = function() {
    return e;
  }, Do();
}
var Er = Bo;
(function(e, n) {
  for (var t = Bo, r = e(); ; )
    try {
      var o = parseInt(t(268)) / 1 * (parseInt(t(270)) / 2) + parseInt(t(283)) / 3 + parseInt(t(275)) / 4 * (-parseInt(t(281)) / 5) + -parseInt(t(273)) / 6 + -parseInt(t(296)) / 7 * (parseInt(t(292)) / 8) + parseInt(t(295)) / 9 + parseInt(t(287)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 915104);
typeof globalThis !== Er(297) || typeof window !== Er(297) || (typeof global !== Er(297) ? global : Er(297));
function eh(e) {
  var n = Er;
  return e && e[n(282)] && Object[n(278)][n(276) + n(299)][n(289)](e, n(294)) ? e[n(294)] : e;
}
function Bo(e, n) {
  var t = Do();
  return Bo = function(r, o) {
    r = r - 268;
    var i = t[r];
    return i;
  }, Bo(e, n);
}
var Qr = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc;
function th() {
  if (yc) return gr;
  yc = 1;
  var e = X, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, h = null, m = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: a, key: h, ref: m, props: d, _owner: o.current };
  }
  return gr.Fragment = t, gr.jsx = s, gr.jsxs = s, gr;
}
var mr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc;
function nh() {
  return bc || (bc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = X, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), f = Symbol.iterator, g = "@@iterator";
    function p(v) {
      if (v === null || typeof v != "object")
        return null;
      var L = f && v[f] || v[g];
      return typeof L == "function" ? L : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(v) {
      {
        for (var L = arguments.length, W = new Array(L > 1 ? L - 1 : 0), oe = 1; oe < L; oe++)
          W[oe - 1] = arguments[oe];
        _("error", v, W);
      }
    }
    function _(v, L, W) {
      {
        var oe = y.ReactDebugCurrentFrame, _e = oe.getStackAddendum();
        _e !== "" && (L += "%s", W = W.concat([_e]));
        var Ee = W.map(function(pe) {
          return String(pe);
        });
        Ee.unshift("Warning: " + L), Function.prototype.apply.call(console[v], console, Ee);
      }
    }
    var E = !1, x = !1, T = !1, S = !1, j = !1, M;
    M = Symbol.for("react.module.reference");
    function U(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === i || j || v === o || v === l || v === u || S || v === m || E || x || T || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === d || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === M || v.getModuleId !== void 0));
    }
    function ee(v, L, W) {
      var oe = v.displayName;
      if (oe)
        return oe;
      var _e = L.displayName || L.name || "";
      return _e !== "" ? W + "(" + _e + ")" : W;
    }
    function Y(v) {
      return v.displayName || "Context";
    }
    function B(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
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
            var L = v;
            return Y(L) + ".Consumer";
          case s:
            var W = v;
            return Y(W._context) + ".Provider";
          case c:
            return ee(v, v.render, "ForwardRef");
          case d:
            var oe = v.displayName || null;
            return oe !== null ? oe : B(v.type) || "Memo";
          case h: {
            var _e = v, Ee = _e._payload, pe = _e._init;
            try {
              return B(pe(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, J = 0, N, A, R, k, H, D, q;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function K() {
      {
        if (J === 0) {
          N = console.log, A = console.info, R = console.warn, k = console.error, H = console.group, D = console.groupCollapsed, q = console.groupEnd;
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
        J++;
      }
    }
    function ie() {
      {
        if (J--, J === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, v, {
              value: N
            }),
            info: F({}, v, {
              value: A
            }),
            warn: F({}, v, {
              value: R
            }),
            error: F({}, v, {
              value: k
            }),
            group: F({}, v, {
              value: H
            }),
            groupCollapsed: F({}, v, {
              value: D
            }),
            groupEnd: F({}, v, {
              value: q
            })
          });
        }
        J < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = y.ReactCurrentDispatcher, le;
    function we(v, L, W) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (_e) {
            var oe = _e.stack.trim().match(/\n( *(at )?)/);
            le = oe && oe[1] || "";
          }
        return `
` + le + v;
      }
    }
    var me = !1, Pe;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Ae();
    }
    function he(v, L) {
      if (!v || me)
        return "";
      {
        var W = Pe.get(v);
        if (W !== void 0)
          return W;
      }
      var oe;
      me = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = ae.current, ae.current = null, K();
      try {
        if (L) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (dt) {
              oe = dt;
            }
            Reflect.construct(v, [], pe);
          } else {
            try {
              pe.call();
            } catch (dt) {
              oe = dt;
            }
            v.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            oe = dt;
          }
          v();
        }
      } catch (dt) {
        if (dt && oe && typeof dt.stack == "string") {
          for (var de = dt.stack.split(`
`), it = oe.stack.split(`
`), Le = de.length - 1, ze = it.length - 1; Le >= 1 && ze >= 0 && de[Le] !== it[ze]; )
            ze--;
          for (; Le >= 1 && ze >= 0; Le--, ze--)
            if (de[Le] !== it[ze]) {
              if (Le !== 1 || ze !== 1)
                do
                  if (Le--, ze--, ze < 0 || de[Le] !== it[ze]) {
                    var Fe = `
` + de[Le].replace(" at new ", " at ");
                    return v.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", v.displayName)), typeof v == "function" && Pe.set(v, Fe), Fe;
                  }
                while (Le >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        me = !1, ae.current = Ee, ie(), Error.prepareStackTrace = _e;
      }
      var Dn = v ? v.displayName || v.name : "", Cn = Dn ? we(Dn) : "";
      return typeof v == "function" && Pe.set(v, Cn), Cn;
    }
    function Ye(v, L, W) {
      return he(v, !1);
    }
    function C(v) {
      var L = v.prototype;
      return !!(L && L.isReactComponent);
    }
    function re(v, L, W) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return he(v, C(v));
      if (typeof v == "string")
        return we(v);
      switch (v) {
        case l:
          return we("Suspense");
        case u:
          return we("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return Ye(v.render);
          case d:
            return re(v.type, L, W);
          case h: {
            var oe = v, _e = oe._payload, Ee = oe._init;
            try {
              return re(Ee(_e), L, W);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, V = {}, I = y.ReactDebugCurrentFrame;
    function ne(v) {
      if (v) {
        var L = v._owner, W = re(v.type, v._source, L ? L.type : null);
        I.setExtraStackFrame(W);
      } else
        I.setExtraStackFrame(null);
    }
    function ot(v, L, W, oe, _e) {
      {
        var Ee = Function.call.bind($);
        for (var pe in v)
          if (Ee(v, pe)) {
            var de = void 0;
            try {
              if (typeof v[pe] != "function") {
                var it = Error((oe || "React class") + ": " + W + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw it.name = "Invariant Violation", it;
              }
              de = v[pe](L, pe, oe, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              de = Le;
            }
            de && !(de instanceof Error) && (ne(_e), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", W, pe, typeof de), ne(null)), de instanceof Error && !(de.message in V) && (V[de.message] = !0, ne(_e), b("Failed %s type: %s", W, de.message), ne(null));
          }
      }
    }
    var xe = Array.isArray;
    function ue(v) {
      return xe(v);
    }
    function Ke(v) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, W = L && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return W;
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
    function Qt(v) {
      if (ft(v))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(v)), lt(v);
    }
    var Rt = y.ReactCurrentOwner, Zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Ht;
    function en(v) {
      if ($.call(v, "ref")) {
        var L = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function tn(v) {
      if ($.call(v, "key")) {
        var L = Object.getOwnPropertyDescriptor(v, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function nn(v, L) {
      typeof v.ref == "string" && Rt.current;
    }
    function zt(v, L) {
      {
        var W = function() {
          Bt || (Bt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        W.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function Ie(v, L) {
      {
        var W = function() {
          Ht || (Ht = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        W.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var st = function(v, L, W, oe, _e, Ee, pe) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: v,
        key: L,
        ref: W,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function Ft(v, L, W, oe, _e) {
      {
        var Ee, pe = {}, de = null, it = null;
        W !== void 0 && (Qt(W), de = "" + W), tn(L) && (Qt(L.key), de = "" + L.key), en(L) && (it = L.ref, nn(L, _e));
        for (Ee in L)
          $.call(L, Ee) && !Zt.hasOwnProperty(Ee) && (pe[Ee] = L[Ee]);
        if (v && v.defaultProps) {
          var Le = v.defaultProps;
          for (Ee in Le)
            pe[Ee] === void 0 && (pe[Ee] = Le[Ee]);
        }
        if (de || it) {
          var ze = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          de && zt(pe, ze), it && Ie(pe, ze);
        }
        return st(v, de, it, _e, oe, Rt.current, pe);
      }
    }
    var z = y.ReactCurrentOwner, O = y.ReactDebugCurrentFrame;
    function ye(v) {
      if (v) {
        var L = v._owner, W = re(v.type, v._source, L ? L.type : null);
        O.setExtraStackFrame(W);
      } else
        O.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function De(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function be() {
      {
        if (z.current) {
          var v = B(z.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function at(v) {
      return "";
    }
    var Be = {};
    function At(v) {
      {
        var L = be();
        if (!L) {
          var W = typeof v == "string" ? v : v.displayName || v.name;
          W && (L = `

Check the top-level render call using <` + W + ">.");
        }
        return L;
      }
    }
    function bt(v, L) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var W = At(L);
        if (Be[W])
          return;
        Be[W] = !0;
        var oe = "";
        v && v._owner && v._owner !== z.current && (oe = " It was passed a child from " + B(v._owner.type) + "."), ye(v), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, oe), ye(null);
      }
    }
    function fn(v, L) {
      {
        if (typeof v != "object")
          return;
        if (ue(v))
          for (var W = 0; W < v.length; W++) {
            var oe = v[W];
            De(oe) && bt(oe, L);
          }
        else if (De(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var _e = p(v);
          if (typeof _e == "function" && _e !== v.entries)
            for (var Ee = _e.call(v), pe; !(pe = Ee.next()).done; )
              De(pe.value) && bt(pe.value, L);
        }
      }
    }
    function Vt(v) {
      {
        var L = v.type;
        if (L == null || typeof L == "string")
          return;
        var W;
        if (typeof L == "function")
          W = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === d))
          W = L.propTypes;
        else
          return;
        if (W) {
          var oe = B(L);
          ot(W, v.props, "prop", oe, v);
        } else if (L.PropTypes !== void 0 && !$e) {
          $e = !0;
          var _e = B(L);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Me(v) {
      {
        for (var L = Object.keys(v.props), W = 0; W < L.length; W++) {
          var oe = L[W];
          if (oe !== "children" && oe !== "key") {
            ye(v), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), ye(null);
            break;
          }
        }
        v.ref !== null && (ye(v), b("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    var Ze = {};
    function $t(v, L, W, oe, _e, Ee) {
      {
        var pe = U(v);
        if (!pe) {
          var de = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = at();
          it ? de += it : de += be();
          var Le;
          v === null ? Le = "null" : ue(v) ? Le = "array" : v !== void 0 && v.$$typeof === n ? (Le = "<" + (B(v.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof v, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, de);
        }
        var ze = Ft(v, L, W, _e, Ee);
        if (ze == null)
          return ze;
        if (pe) {
          var Fe = L.children;
          if (Fe !== void 0)
            if (oe)
              if (ue(Fe)) {
                for (var Dn = 0; Dn < Fe.length; Dn++)
                  fn(Fe[Dn], v);
                Object.freeze && Object.freeze(Fe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fn(Fe, v);
        }
        if ($.call(L, "key")) {
          var Cn = B(v), dt = Object.keys(L).filter(function(Wd) {
            return Wd !== "key";
          }), Gi = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Cn + Gi]) {
            var qd = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gi, Cn, qd, Cn), Ze[Cn + Gi] = !0;
          }
        }
        return v === r ? Me(ze) : Vt(ze), ze;
      }
    }
    function je(v, L, W) {
      return $t(v, L, W, !0);
    }
    function Jr(v, L, W) {
      return $t(v, L, W, !1);
    }
    var Wi = Jr, He = je;
    mr.Fragment = r, mr.jsx = Wi, mr.jsxs = He;
  }()), mr;
}
var _c;
function rh() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? Qr.exports = th() : Qr.exports = nh()), Qr.exports;
}
var G = rh(), ht = function() {
  return ht = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ht.apply(this, arguments);
};
function Wn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function oh(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var ih = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sh = /* @__PURE__ */ oh(
  function(e) {
    return ih.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ke = "-ms-", Ar = "-moz-", Re = "-webkit-", $u = "comm", di = "rule", ka = "decl", ah = "@import", Pu = "@keyframes", ch = "@layer", Iu = Math.abs, ja = String.fromCharCode, Os = Object.assign;
function lh(e, n) {
  return rt(e, 0) ^ 45 ? (((n << 2 ^ rt(e, 0)) << 2 ^ rt(e, 1)) << 2 ^ rt(e, 2)) << 2 ^ rt(e, 3) : 0;
}
function Nu(e) {
  return e.trim();
}
function on(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function fe(e, n, t) {
  return e.replace(n, t);
}
function yo(e, n, t) {
  return e.indexOf(n, t);
}
function rt(e, n) {
  return e.charCodeAt(n) | 0;
}
function Gn(e, n, t) {
  return e.slice(n, t);
}
function Wt(e) {
  return e.length;
}
function ku(e) {
  return e.length;
}
function Or(e, n) {
  return n.push(e), e;
}
function uh(e, n) {
  return e.map(n).join("");
}
function Sc(e, n) {
  return e.filter(function(t) {
    return !on(t, n);
  });
}
var hi = 1, Xn = 1, ju = 0, Ot = 0, We = 0, sr = "";
function xi(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: hi, column: Xn, length: s, return: "", siblings: a };
}
function dn(e, n) {
  return Os(xi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function Bn(e) {
  for (; e.root; )
    e = dn(e.root, { children: [e] });
  Or(e, e.siblings);
}
function fh() {
  return We;
}
function dh() {
  return We = Ot > 0 ? rt(sr, --Ot) : 0, Xn--, We === 10 && (Xn = 1, hi--), We;
}
function kt() {
  return We = Ot < ju ? rt(sr, Ot++) : 0, Xn++, We === 10 && (Xn = 1, hi++), We;
}
function An() {
  return rt(sr, Ot);
}
function bo() {
  return Ot;
}
function pi(e, n) {
  return Gn(sr, e, n);
}
function Ts(e) {
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
  return hi = Xn = 1, ju = Wt(sr = e), Ot = 0, [];
}
function xh(e) {
  return sr = "", e;
}
function Xi(e) {
  return Nu(pi(Ot - 1, Rs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ph(e) {
  for (; (We = An()) && We < 33; )
    kt();
  return Ts(e) > 2 || Ts(We) > 3 ? "" : " ";
}
function gh(e, n) {
  for (; --n && kt() && !(We < 48 || We > 102 || We > 57 && We < 65 || We > 70 && We < 97); )
    ;
  return pi(e, bo() + (n < 6 && An() == 32 && kt() == 32));
}
function Rs(e) {
  for (; kt(); )
    switch (We) {
      // ] ) " '
      case e:
        return Ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rs(We);
        break;
      // (
      case 40:
        e === 41 && Rs(e);
        break;
      // \
      case 92:
        kt();
        break;
    }
  return Ot;
}
function mh(e, n) {
  for (; kt() && e + We !== 57; )
    if (e + We === 84 && An() === 47)
      break;
  return "/*" + pi(n, Ot - 1) + "*" + ja(e === 47 ? e : kt());
}
function vh(e) {
  for (; !Ts(An()); )
    kt();
  return pi(e, Ot);
}
function yh(e) {
  return xh(_o("", null, null, null, [""], e = hh(e), 0, [0], e));
}
function _o(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, h = 0, m = 0, f = 0, g = 1, p = 1, y = 1, b = 0, _ = "", E = o, x = i, T = r, S = _; p; )
    switch (f = b, b = kt()) {
      // (
      case 40:
        if (f != 108 && rt(S, d - 1) == 58) {
          yo(S += fe(Xi(b), "&", "&\f"), "&\f", Iu(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Xi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += ph(f);
        break;
      // \
      case 92:
        S += gh(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (An()) {
          case 42:
          case 47:
            Or(bh(mh(kt(), bo()), n, t, c), c);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = Wt(S) * y;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            y == -1 && (S = fe(S, /\f/g, "")), m > 0 && Wt(S) - d && Or(m > 32 ? wc(S + ";", r, t, d - 1, c) : wc(fe(S, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (Or(T = Cc(S, n, t, l, u, o, a, _, E = [], x = [], d, i), i), b === 123)
              if (u === 0)
                _o(S, n, T, T, E, i, d, a, x);
              else
                switch (h === 99 && rt(S, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(e, T, T, r && Or(Cc(e, T, T, 0, 0, o, a, _, o, E = [], d, x), x), o, x, d, a, r ? E : x);
                    break;
                  default:
                    _o(S, T, T, T, [""], x, 0, a, x);
                }
        }
        l = u = m = 0, g = y = 1, _ = S = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Wt(S), m = f;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && dh() == 125)
            continue;
        }
        switch (S += ja(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Wt(S) - 1) * y, y = 1;
            break;
          // @
          case 64:
            An() === 45 && (S += Xi(kt())), h = An(), u = d = Wt(_ = S += vh(bo())), b++;
            break;
          // -
          case 45:
            f === 45 && Wt(S) == 2 && (g = 0);
        }
    }
  return i;
}
function Cc(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var h = o - 1, m = o === 0 ? i : [""], f = ku(m), g = 0, p = 0, y = 0; g < r; ++g)
    for (var b = 0, _ = Gn(e, h + 1, h = Iu(p = s[g])), E = e; b < f; ++b)
      (E = Nu(p > 0 ? m[b] + " " + _ : fe(_, /&\f/g, m[b]))) && (c[y++] = E);
  return xi(e, n, t, o === 0 ? di : a, c, l, u, d);
}
function bh(e, n, t, r) {
  return xi(e, n, t, $u, ja(fh()), Gn(e, 2, -2), 0, r);
}
function wc(e, n, t, r, o) {
  return xi(e, n, t, ka, Gn(e, 0, r), Gn(e, r + 1, -1), r, o);
}
function Mu(e, n, t) {
  switch (lh(e, n)) {
    // color-adjust
    case 5103:
      return Re + "print-" + e + e;
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
      return Re + e + e;
    // tab-size
    case 4789:
      return Ar + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Re + e + Ar + e + ke + e + e;
    // writing-mode
    case 5936:
      switch (rt(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Re + e + ke + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Re + e + ke + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Re + e + ke + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Re + e + ke + e + e;
    // order
    case 6165:
      return Re + e + ke + "flex-" + e + e;
    // align-items
    case 5187:
      return Re + e + fe(e, /(\w+).+(:[^]+)/, Re + "box-$1$2" + ke + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Re + e + ke + "flex-item-" + fe(e, /flex-|-self/g, "") + (on(e, /flex-|baseline/) ? "" : ke + "grid-row-" + fe(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Re + e + ke + "flex-line-pack" + fe(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Re + e + ke + fe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Re + e + ke + fe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Re + "box-" + fe(e, "-grow", "") + Re + e + ke + fe(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Re + fe(e, /([^-])(transform)/g, "$1" + Re + "$2") + e;
    // cursor
    case 6187:
      return fe(fe(fe(e, /(zoom-|grab)/, Re + "$1"), /(image-set)/, Re + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, Re + "$1$`$1");
    // justify-content
    case 4968:
      return fe(fe(e, /(.+:)(flex-)?(.*)/, Re + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Re + e + e;
    // justify-self
    case 4200:
      if (!on(e, /flex-|baseline/)) return ke + "grid-column-align" + Gn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return ke + fe(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, on(r.props, /grid-\w+-end/);
      }) ? ~yo(e + (t = t[n].value), "span", 0) ? e : ke + fe(e, "-start", "") + e + ke + "grid-row-span:" + (~yo(t, "span", 0) ? on(t, /\d+/) : +on(t, /\d+/) - +on(e, /\d+/)) + ";" : ke + fe(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return on(r.props, /grid-\w+-start/);
      }) ? e : ke + fe(fe(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, Re + "$1$2") + e;
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
        switch (rt(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (rt(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return fe(e, /(.+:)(.+)-([^]+)/, "$1" + Re + "$2-$3$1" + Ar + (rt(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~yo(e, "stretch", 0) ? Mu(fe(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return fe(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return ke + o + ":" + i + l + (s ? ke + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (rt(e, n + 6) === 121)
        return fe(e, ":", ":" + Re) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (rt(e, rt(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return fe(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Re + (rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Re + "$2$3$1" + ke + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return fe(e, ":", ":" + ke) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return fe(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ho(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function _h(e, n, t, r) {
  switch (e.type) {
    case ch:
      if (e.children.length) break;
    case ah:
    case ka:
      return e.return = e.return || e.value;
    case $u:
      return "";
    case Pu:
      return e.return = e.value + "{" + Ho(e.children, r) + "}";
    case di:
      if (!Wt(e.value = e.props.join(","))) return "";
  }
  return Wt(t = Ho(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Sh(e) {
  var n = ku(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function Ch(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function wh(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ka:
        e.return = Mu(e.value, e.length, t);
        return;
      case Pu:
        return Ho([dn(e, { value: fe(e.value, "@", "@" + Re) })], r);
      case di:
        if (e.length)
          return uh(t = e.props, function(o) {
            switch (on(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Bn(dn(e, { props: [fe(o, /:(read-\w+)/, ":" + Ar + "$1")] })), Bn(dn(e, { props: [o] })), Os(e, { props: Sc(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                Bn(dn(e, { props: [fe(o, /:(plac\w+)/, ":" + Re + "input-$1")] })), Bn(dn(e, { props: [fe(o, /:(plac\w+)/, ":" + Ar + "$1")] })), Bn(dn(e, { props: [fe(o, /:(plac\w+)/, ke + "input-$1")] })), Bn(dn(e, { props: [o] })), Os(e, { props: Sc(t, r) });
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
}, jn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Lu = "active", Du = "data-styled-version", gi = "6.1.18", Ma = `/*!sc*/
`, zo = typeof window < "u" && typeof document < "u", Oh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ec = /invalid hook call/i, Zr = /* @__PURE__ */ new Set(), Th = function(e, n) {
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
        Ec.test(s) ? (i = !1, Zr.delete(r)) : o.apply(void 0, Wn([s], a, !1));
      }, ve(), i && !Zr.has(r) && (console.warn(r), Zr.add(r));
    } catch (s) {
      Ec.test(s.message) && Zr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, mi = Object.freeze([]), Yn = Object.freeze({});
function Rh(e, n, t) {
  return t === void 0 && (t = Yn), e.theme !== t.theme && e.theme || n || t.theme;
}
var As = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ah = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $h = /(^-|-$)/g;
function Oc(e) {
  return e.replace(Ah, "-").replace($h, "");
}
var Ph = /(a)(d)/gi, eo = 52, Tc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $s(e) {
  var n, t = "";
  for (n = Math.abs(e); n > eo; n = n / eo | 0) t = Tc(n % eo) + t;
  return (Tc(n % eo) + t).replace(Ph, "$1-$2");
}
var Yi, Bu = 5381, En = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Hu = function(e) {
  return En(Bu, e);
};
function Ih(e) {
  return $s(Hu(e) >>> 0);
}
function zu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ki(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Fu = typeof Symbol == "function" && Symbol.for, Vu = Fu ? Symbol.for("react.memo") : 60115, Nh = Fu ? Symbol.for("react.forward_ref") : 60112, kh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Uu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Mh = ((Yi = {})[Nh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Yi[Vu] = Uu, Yi);
function Rc(e) {
  return ("type" in (n = e) && n.type.$$typeof) === Vu ? Uu : "$$typeof" in e ? Mh[e.$$typeof] : kh;
  var n;
}
var Lh = Object.defineProperty, Dh = Object.getOwnPropertyNames, Ac = Object.getOwnPropertySymbols, Bh = Object.getOwnPropertyDescriptor, Hh = Object.getPrototypeOf, $c = Object.prototype;
function qu(e, n, t) {
  if (typeof n != "string") {
    if ($c) {
      var r = Hh(n);
      r && r !== $c && qu(e, r, t);
    }
    var o = Dh(n);
    Ac && (o = o.concat(Ac(n)));
    for (var i = Rc(e), s = Rc(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in jh || t && t[c] || s && c in s || i && c in i)) {
        var l = Bh(n, c);
        try {
          Lh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Kn(e) {
  return typeof e == "function";
}
function La(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Tn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Pc(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Jn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ps(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Jn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Ps(e[r], n[r]);
  else if (Jn(n)) for (var r in n) e[r] = Ps(e[r], n[r]);
  return e;
}
function Da(e, n) {
  Object.defineProperty(e, "toString", { value: n });
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
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function ar(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(Fh.apply(void 0, Wn([zh[e]], n, !1)).trim());
}
var Vh = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw ar(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Ma);
    return t;
  }, e;
}(), Uh = 1 << 30, So = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Co = 1, to = function(e) {
  if (So.has(e)) return So.get(e);
  for (; Fo.has(Co); ) Co++;
  var n = Co++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > Uh)) throw ar(16, "".concat(n));
  return So.set(e, n), Fo.set(n, e), n;
}, qh = function(e, n) {
  Co = n + 1, So.set(e, n), Fo.set(n, e);
}, Wh = "style[".concat(jn, "][").concat(Du, '="').concat(gi, '"]'), Gh = new RegExp("^".concat(jn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Xh = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, Yh = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ma), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Gh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (qh(u, l), Xh(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ic = function(e) {
  for (var n = document.querySelectorAll(Wh), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(jn) !== Lu && (Yh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Kh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Wu = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(jn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(jn, Lu), r.setAttribute(Du, gi);
  var s = Kh();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, Jh = function() {
  function e(n) {
    this.element = Wu(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw ar(17);
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
}(), Qh = function() {
  function e(n) {
    this.element = Wu(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Zh = function() {
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
}(), Nc = zo, ex = { isServer: !zo, useCSSOMInjection: !Oh }, Gu = function() {
  function e(n, t, r) {
    n === void 0 && (n = Yn), t === void 0 && (t = {});
    var o = this;
    this.options = ht(ht({}, ex), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && zo && Nc && (Nc = !1, Ic(this)), Da(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var h = function(y) {
            return Fo.get(y);
          }(d);
          if (h === void 0) return "continue";
          var m = i.names.get(h), f = s.getGroup(d);
          if (m === void 0 || !m.size || f.length === 0) return "continue";
          var g = "".concat(jn, ".g").concat(d, '[id="').concat(h, '"]'), p = "";
          m !== void 0 && m.forEach(function(y) {
            y.length > 0 && (p += "".concat(y, ","));
          }), c += "".concat(f).concat(g, '{content:"').concat(p, '"}').concat(Ma);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return to(n);
  }, e.prototype.rehydrate = function() {
    !this.server && zo && Ic(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(ht(ht({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Zh(o) : r ? new Jh(o) : new Qh(o);
    }(this.options), new Vh(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (to(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(to(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(to(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), tx = /&/g, nx = /^\s*\/\/.*$/gm;
function Xu(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Xu(t.children, n)), t;
  });
}
function rx(e) {
  var n, t, r, o = Yn, i = o.options, s = i === void 0 ? Yn : i, a = o.plugins, c = a === void 0 ? mi : a, l = function(h, m, f) {
    return f.startsWith(t) && f.endsWith(t) && f.replaceAll(t, "").length > 0 ? ".".concat(n) : h;
  }, u = c.slice();
  u.push(function(h) {
    h.type === di && h.value.includes("&") && (h.props[0] = h.props[0].replace(tx, t).replace(r, l));
  }), s.prefix && u.push(wh), u.push(_h);
  var d = function(h, m, f, g) {
    m === void 0 && (m = ""), f === void 0 && (f = ""), g === void 0 && (g = "&"), n = g, t = m, r = new RegExp("\\".concat(t, "\\b"), "g");
    var p = h.replace(nx, ""), y = yh(f || m ? "".concat(f, " ").concat(m, " { ").concat(p, " }") : p);
    s.namespace && (y = Xu(y, s.namespace));
    var b = [];
    return Ho(y, Sh(u.concat(Ch(function(_) {
      return b.push(_);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(h, m) {
    return m.name || ar(15), En(h, m.name);
  }, Bu).toString() : "", d;
}
var ox = new Gu(), Is = rx(), Yu = X.createContext({ shouldForwardProp: void 0, styleSheet: ox, stylis: Is });
Yu.Consumer;
X.createContext(void 0);
function kc() {
  return Et(Yu);
}
var jc = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Is);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Da(this, function() {
      throw ar(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Is), this.name + n.hash;
  }, e;
}(), ix = function(e) {
  return e >= "A" && e <= "Z";
};
function Mc(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    ix(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Ku = function(e) {
  return e == null || e === !1 || e === "";
}, Ju = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Ku(i) && (Array.isArray(i) && i.isCss || Kn(i) ? r.push("".concat(Mc(o), ":"), i, ";") : Jn(i) ? r.push.apply(r, Wn(Wn(["".concat(o, " {")], Ju(i), !1), ["}"], !1)) : r.push("".concat(Mc(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in Eh || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function $n(e, n, t, r) {
  if (Ku(e)) return [];
  if (La(e)) return [".".concat(e.styledComponentId)];
  if (Kn(e)) {
    if (!Kn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof jc || Jn(o) || o === null || console.error("".concat(zu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), $n(o, n, t, r);
  }
  var i;
  return e instanceof jc ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Jn(e) ? Ju(e) : Array.isArray(e) ? Array.prototype.concat.apply(mi, e.map(function(s) {
    return $n(s, n, t, r);
  })) : [e.toString()];
}
function sx(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Kn(t) && !La(t)) return !1;
  }
  return !0;
}
var ax = Hu(gi), cx = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && sx(n), this.componentId = t, this.baseHash = En(ax, t), this.baseStyle = r, Gu.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = Tn(o, this.staticRulesId);
    else {
      var i = Pc($n(this.rules, n, t, r)), s = $s(En(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = Tn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = En(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = En(c, d));
        else if (d) {
          var h = Pc($n(d, n, t, r));
          c = En(c, h + u), l += h;
        }
      }
      if (l) {
        var m = $s(c >>> 0);
        t.hasNameForId(this.componentId, m) || t.insertRules(this.componentId, m, r(l, ".".concat(m), void 0, this.componentId)), o = Tn(o, m);
      }
    }
    return o;
  }, e;
}(), Qu = X.createContext(void 0);
Qu.Consumer;
var Ji = {}, Lc = /* @__PURE__ */ new Set();
function lx(e, n, t) {
  var r = La(e), o = e, i = !Ki(e), s = n.attrs, a = s === void 0 ? mi : s, c = n.componentId, l = c === void 0 ? function(E, x) {
    var T = typeof E != "string" ? "sc" : Oc(E);
    Ji[T] = (Ji[T] || 0) + 1;
    var S = "".concat(T, "-").concat(Ih(gi + T + Ji[T]));
    return x ? "".concat(x, "-").concat(S) : S;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(E) {
    return Ki(E) ? "styled.".concat(E) : "Styled(".concat(zu(E), ")");
  }(e) : u, h = n.displayName && n.componentId ? "".concat(Oc(n.displayName), "-").concat(n.componentId) : n.componentId || l, m = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, f = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var p = n.shouldForwardProp;
      f = function(E, x) {
        return g(E, x) && p(E, x);
      };
    } else f = g;
  }
  var y = new cx(t, h, r ? o.componentStyle : void 0);
  function b(E, x) {
    return function(T, S, j) {
      var M = T.attrs, U = T.componentStyle, ee = T.defaultProps, Y = T.foldedComponentIds, B = T.styledComponentId, F = T.target, J = X.useContext(Qu), N = kc(), A = T.shouldForwardProp || N.shouldForwardProp;
      process.env.NODE_ENV !== "production" && mc(B);
      var R = Rh(S, J, ee) || Yn, k = function(ie, ae, le) {
        for (var we, me = ht(ht({}, ae), { className: void 0, theme: le }), Pe = 0; Pe < ie.length; Pe += 1) {
          var Ae = Kn(we = ie[Pe]) ? we(me) : we;
          for (var he in Ae) me[he] = he === "className" ? Tn(me[he], Ae[he]) : he === "style" ? ht(ht({}, me[he]), Ae[he]) : Ae[he];
        }
        return ae.className && (me.className = Tn(me.className, ae.className)), me;
      }(M, S, R), H = k.as || F, D = {};
      for (var q in k) k[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" && k.theme === R || (q === "forwardedAs" ? D.as = k.forwardedAs : A && !A(q, H) || (D[q] = k[q], A || process.env.NODE_ENV !== "development" || sh(q) || Lc.has(q) || !As.has(H) || (Lc.add(q), console.warn('styled-components: it looks like an unknown prop "'.concat(q, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ie, ae) {
        var le = kc(), we = ie.generateAndInjectStyles(ae, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && mc(we), we;
      }(U, k);
      process.env.NODE_ENV !== "production" && T.warnTooManyClasses && T.warnTooManyClasses(te);
      var K = Tn(Y, B);
      return te && (K += " " + te), k.className && (K += " " + k.className), D[Ki(H) && !As.has(H) ? "class" : "className"] = K, j && (D.ref = j), Yd(H, D);
    }(_, E, x);
  }
  b.displayName = d;
  var _ = X.forwardRef(b);
  return _.attrs = m, _.componentStyle = y, _.displayName = d, _.shouldForwardProp = f, _.foldedComponentIds = r ? Tn(o.foldedComponentIds, o.styledComponentId) : "", _.styledComponentId = h, _.target = r ? o.target : e, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(x) {
      for (var T = [], S = 1; S < arguments.length; S++) T[S - 1] = arguments[S];
      for (var j = 0, M = T; j < M.length; j++) Ps(x, M[j], !0);
      return x;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Th(d, h), _.warnTooManyClasses = /* @__PURE__ */ function(E, x) {
    var T = {}, S = !1;
    return function(j) {
      if (!S && (T[j] = !0, Object.keys(T).length >= 200)) {
        var M = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(M, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, T = {};
      }
    };
  }(d, h)), Da(_, function() {
    return ".".concat(_.styledComponentId);
  }), i && qu(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function Dc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var Bc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ux(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Kn(e) || Jn(e)) return Bc($n(Dc(mi, Wn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? $n(r) : Bc($n(Dc(r, n)));
}
function Ns(e, n, t) {
  if (t === void 0 && (t = Yn), !n) throw ar(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, ux.apply(void 0, Wn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Ns(e, n, ht(ht({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ns(e, n, ht(ht({}, t), o));
  }, r;
}
var Zu = function(e) {
  return Ns(lx, e);
}, Jt = Zu;
As.forEach(function(e) {
  Jt[e] = Zu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var no = "__sc-".concat(jn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[no] || (window[no] = 0), window[no] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[no] += 1);
function Vo(e, n) {
  const t = Uo();
  return Vo = function(r, o) {
    return r = r - 250, t[r];
  }, Vo(e, n);
}
function Uo() {
  const e = ["3373804RPbmnF", "span", "469422vmvkFM", "3cWEvuP", "692698vFxBxh", "9711747GfKrXu", "5625392ieTVBJ", "10rNiUYi", "893822sxRHqa", "55YQnYIN", "div", "3243422aBTjDk", "canvas"];
  return Uo = function() {
    return e;
  }, Uo();
}
const vi = Vo;
(function(e, n) {
  const t = Vo, r = e();
  for (; ; )
    try {
      if (-parseInt(t(255)) / 1 + -parseInt(t(259)) / 2 * (-parseInt(t(254)) / 3) + -parseInt(t(251)) / 4 + parseInt(t(260)) / 5 * (parseInt(t(253)) / 6) + parseInt(t(262)) / 7 + -parseInt(t(257)) / 8 + parseInt(t(256)) / 9 * (parseInt(t(258)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 610624);
const fx = Jt[vi(261)]`
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
`, dx = Jt[vi(261)]`
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
`, hx = Jt[vi(250)]`
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Hc = Jt[vi(252)]`
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
`, ef = /* @__PURE__ */ fi({});
var Qi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var zc;
function xx() {
  return zc || (zc = 1, function(e) {
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
  }(Qi)), Qi.exports;
}
var px = xx();
const Se = /* @__PURE__ */ eh(px), gx = {
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
}, et = Math.round;
function Zi(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Fc = (e, n, t) => t === 0 ? e : e / 100;
function vr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let ro = class tf {
  constructor(n) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    qe(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    qe(this, "r", 0);
    /**
     * Green, G in RGB
     */
    qe(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    qe(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    qe(this, "a", 1);
    // HSV privates
    qe(this, "_h");
    qe(this, "_s");
    qe(this, "_l");
    qe(this, "_v");
    // intermediate variables to calculate HSL/HSV
    qe(this, "_max");
    qe(this, "_min");
    qe(this, "_brightness");
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
        const i = gx[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (n instanceof tf)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = vr(n.r), this.g = vr(n.g), this.b = vr(n.b), this.a = typeof n.a == "number" ? vr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = et(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: et(i("r")),
      g: et(i("g")),
      b: et(i("b")),
      a: et(i("a") * 100) / 100
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => et((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = et(this.a * 255).toString(16);
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
    const n = this.getHue(), t = et(this.getSaturation() * 100), r = et(this.getLightness() * 100);
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
    return o[n] = vr(t, r), o;
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
      const h = et(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = et((i + d) * 255), this.g = et((s + d) * 255), this.b = et((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = et(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = et(r * (1 - t) * 255), u = et(r * (1 - t * c) * 255), d = et(r * (1 - t * (1 - c)) * 255);
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
    const t = Zi(n, Fc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Zi(n, Fc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = Zi(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? et(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
const oo = 2, Vc = 0.16, mx = 0.05, vx = 0.05, yx = 0.15, nf = 5, rf = 4, bx = [{
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
function Uc(e, n, t) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - oo * n : Math.round(e.h) + oo * n : r = t ? Math.round(e.h) + oo * n : Math.round(e.h) - oo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function qc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return t ? r = e.s - Vc * n : n === rf ? r = e.s + Vc : r = e.s + mx * n, r > 1 && (r = 1), t && n === nf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Wc(e, n, t) {
  let r;
  return t ? r = e.v + vx * n : r = e.v - yx * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function _x(e, n = {}) {
  const t = [], r = new ro(e), o = r.toHsv();
  for (let i = nf; i > 0; i -= 1) {
    const s = new ro({
      h: Uc(o, i, !0),
      s: qc(o, i, !0),
      v: Wc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (let i = 1; i <= rf; i += 1) {
    const s = new ro({
      h: Uc(o, i),
      s: qc(o, i),
      v: Wc(o, i)
    });
    t.push(s);
  }
  return n.theme === "dark" ? bx.map(({
    index: i,
    amount: s
  }) => new ro(n.backgroundColor || "#141414").mix(t[i], s).toHexString()) : t.map((i) => i.toHexString());
}
const ks = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ks.primary = ks[5];
function Sx() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Cx(e, n) {
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
const Gc = "data-rc-order", Xc = "data-rc-priority", wx = "rc-util-key", js = /* @__PURE__ */ new Map();
function of({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : wx;
}
function Ba(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Ex(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ha(e) {
  return Array.from((js.get(e) || e).children).filter((n) => n.tagName === "STYLE");
}
function sf(e, n = {}) {
  if (!Sx())
    return null;
  const {
    csp: t,
    prepend: r,
    priority: o = 0
  } = n, i = Ex(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Gc, i), s && o && a.setAttribute(Xc, `${o}`), t != null && t.nonce && (a.nonce = t == null ? void 0 : t.nonce), a.innerHTML = e;
  const c = Ba(n), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (n.styles || Ha(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Gc)))
          return !1;
        const h = Number(d.getAttribute(Xc) || 0);
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
function Ox(e, n = {}) {
  let {
    styles: t
  } = n;
  return t || (t = Ha(Ba(n))), t.find((r) => r.getAttribute(of(n)) === e);
}
function Tx(e, n) {
  const t = js.get(e);
  if (!t || !Cx(document, t)) {
    const r = sf("", n), {
      parentNode: o
    } = r;
    js.set(e, o), e.removeChild(r);
  }
}
function Rx(e, n, t = {}) {
  var c, l, u;
  const r = Ba(t), o = Ha(r), i = {
    ...t,
    styles: o
  };
  Tx(r, i);
  const s = Ox(n, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = sf(e, i);
  return a.setAttribute(of(i), n), a;
}
function af(e) {
  var n;
  return (n = e == null ? void 0 : e.getRootNode) == null ? void 0 : n.call(e);
}
function Ax(e) {
  return af(e) instanceof ShadowRoot;
}
function $x(e) {
  return Ax(e) ? af(e) : null;
}
let Ms = {};
const za = [], Px = (e) => {
  za.push(e);
};
function Ix(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = za.reduce((r, o) => o(r ?? "", "warning"), n);
    t && console.error(`Warning: ${t}`);
  }
}
function Nx(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = za.reduce((r, o) => o(r ?? "", "note"), n);
    t && console.warn(`Note: ${t}`);
  }
}
function kx() {
  Ms = {};
}
function cf(e, n, t) {
  !n && !Ms[t] && (e(!1, t), Ms[t] = !0);
}
function yi(e, n) {
  cf(Ix, e, n);
}
function jx(e, n) {
  cf(Nx, e, n);
}
yi.preMessage = Px;
yi.resetWarned = kx;
yi.noteOnce = jx;
function Mx(e) {
  return e.replace(/-(.)/g, (n, t) => t.toUpperCase());
}
function Lx(e, n) {
  yi(e, `[@ant-design/icons] ${n}`);
}
function Yc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Kc(e = {}) {
  return Object.keys(e).reduce((n, t) => {
    const r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Mx(t)] = r;
    }
    return n;
  }, {});
}
function Ls(e, n, t) {
  return t ? /* @__PURE__ */ X.createElement(e.tag, {
    key: n,
    ...Kc(e.attrs),
    ...t
  }, (e.children || []).map((r, o) => Ls(r, `${n}-${e.tag}-${o}`))) : /* @__PURE__ */ X.createElement(e.tag, {
    key: n,
    ...Kc(e.attrs)
  }, (e.children || []).map((r, o) => Ls(r, `${n}-${e.tag}-${o}`)));
}
function lf(e) {
  return _x(e)[0];
}
function uf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Dx = `
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
`, Bx = (e) => {
  const {
    csp: n,
    prefixCls: t,
    layer: r
  } = Et(ef);
  let o = Dx;
  t && (o = o.replace(/anticon/g, t)), r && (o = `@layer ${r} {
${o}
}`), Ve(() => {
    const i = e.current, s = $x(i);
    Rx(o, "@ant-design-icons", {
      prepend: !r,
      csp: n,
      attachTo: s
    });
  }, []);
}, $r = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Hx({
  primaryColor: e,
  secondaryColor: n
}) {
  $r.primaryColor = e, $r.secondaryColor = n || lf(e), $r.calculated = !!n;
}
function zx() {
  return {
    ...$r
  };
}
const cr = (e) => {
  const {
    icon: n,
    className: t,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = w.useRef();
  let l = $r;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || lf(i)
  }), Bx(c), Lx(Yc(n), `icon should be icon definiton, but got ${n}`), !Yc(n))
    return null;
  let u = n;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), Ls(u.icon, `svg-${u.name}`, {
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
cr.displayName = "IconReact";
cr.getTwoToneColors = zx;
cr.setTwoToneColors = Hx;
function ff(e) {
  const [n, t] = uf(e);
  return cr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: t
  });
}
function Fx() {
  const e = cr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Ds() {
  return Ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ds.apply(this, arguments);
}
ff(ks.primary);
const bi = /* @__PURE__ */ w.forwardRef((e, n) => {
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
    rootClassName: d
  } = w.useContext(ef), h = Se(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, t);
  let m = s;
  m === void 0 && a && (m = -1);
  const f = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, p] = uf(c);
  return /* @__PURE__ */ w.createElement("span", Ds({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: m,
    onClick: a,
    className: h
  }), /* @__PURE__ */ w.createElement(cr, {
    icon: r,
    primaryColor: g,
    secondaryColor: p,
    style: f
  }));
});
bi.displayName = "AntdIcon";
bi.getTwoToneColor = Fx;
bi.setTwoToneColor = ff;
var Vx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Ux = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, qx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Wx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Gx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Xx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Yx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
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
const Kx = (e, n) => /* @__PURE__ */ w.createElement(bi, Bs({}, e, {
  ref: n,
  icon: Yx
})), df = /* @__PURE__ */ w.forwardRef(Kx);
process.env.NODE_ENV !== "production" && (df.displayName = "ReloadOutlined");
var io = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function Jx() {
  if (Jc) return Oe;
  Jc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), f;
  f = Symbol.for("react.module.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
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
                case d:
                case i:
                  return p;
                default:
                  return y;
              }
          }
        case n:
          return y;
      }
    }
  }
  return Oe.ContextConsumer = s, Oe.ContextProvider = i, Oe.Element = e, Oe.ForwardRef = c, Oe.Fragment = t, Oe.Lazy = h, Oe.Memo = d, Oe.Portal = n, Oe.Profiler = o, Oe.StrictMode = r, Oe.Suspense = l, Oe.SuspenseList = u, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(p) {
    return g(p) === s;
  }, Oe.isContextProvider = function(p) {
    return g(p) === i;
  }, Oe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Oe.isForwardRef = function(p) {
    return g(p) === c;
  }, Oe.isFragment = function(p) {
    return g(p) === t;
  }, Oe.isLazy = function(p) {
    return g(p) === h;
  }, Oe.isMemo = function(p) {
    return g(p) === d;
  }, Oe.isPortal = function(p) {
    return g(p) === n;
  }, Oe.isProfiler = function(p) {
    return g(p) === o;
  }, Oe.isStrictMode = function(p) {
    return g(p) === r;
  }, Oe.isSuspense = function(p) {
    return g(p) === l;
  }, Oe.isSuspenseList = function(p) {
    return g(p) === u;
  }, Oe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === l || p === u || p === m || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === f || p.getModuleId !== void 0);
  }, Oe.typeOf = g, Oe;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function Qx() {
  return Qc || (Qc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), f = !1, g = !1, p = !1, y = !1, b = !1, _;
    _ = Symbol.for("react.module.reference");
    function E(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === t || C === o || b || C === r || C === l || C === u || y || C === m || f || g || p || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === d || C.$$typeof === i || C.$$typeof === s || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === _ || C.getModuleId !== void 0));
    }
    function x(C) {
      if (typeof C == "object" && C !== null) {
        var re = C.$$typeof;
        switch (re) {
          case e:
            var $ = C.type;
            switch ($) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return $;
              default:
                var V = $ && $.$$typeof;
                switch (V) {
                  case a:
                  case s:
                  case c:
                  case h:
                  case d:
                  case i:
                    return V;
                  default:
                    return re;
                }
            }
          case n:
            return re;
        }
      }
    }
    var T = s, S = i, j = e, M = c, U = t, ee = h, Y = d, B = n, F = o, J = r, N = l, A = u, R = !1, k = !1;
    function H(C) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(C) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(C) {
      return x(C) === s;
    }
    function te(C) {
      return x(C) === i;
    }
    function K(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function ie(C) {
      return x(C) === c;
    }
    function ae(C) {
      return x(C) === t;
    }
    function le(C) {
      return x(C) === h;
    }
    function we(C) {
      return x(C) === d;
    }
    function me(C) {
      return x(C) === n;
    }
    function Pe(C) {
      return x(C) === o;
    }
    function Ae(C) {
      return x(C) === r;
    }
    function he(C) {
      return x(C) === l;
    }
    function Ye(C) {
      return x(C) === u;
    }
    Te.ContextConsumer = T, Te.ContextProvider = S, Te.Element = j, Te.ForwardRef = M, Te.Fragment = U, Te.Lazy = ee, Te.Memo = Y, Te.Portal = B, Te.Profiler = F, Te.StrictMode = J, Te.Suspense = N, Te.SuspenseList = A, Te.isAsyncMode = H, Te.isConcurrentMode = D, Te.isContextConsumer = q, Te.isContextProvider = te, Te.isElement = K, Te.isForwardRef = ie, Te.isFragment = ae, Te.isLazy = le, Te.isMemo = we, Te.isPortal = me, Te.isProfiler = Pe, Te.isStrictMode = Ae, Te.isSuspense = he, Te.isSuspenseList = Ye, Te.isValidElementType = E, Te.typeOf = x;
  }()), Te;
}
var Zc;
function Zx() {
  return Zc || (Zc = 1, process.env.NODE_ENV === "production" ? io.exports = Jx() : io.exports = Qx()), io.exports;
}
var es = Zx();
const Xt = /* @__PURE__ */ Object.create(null);
Xt.open = "0";
Xt.close = "1";
Xt.ping = "2";
Xt.pong = "3";
Xt.message = "4";
Xt.upgrade = "5";
Xt.noop = "6";
const wo = /* @__PURE__ */ Object.create(null);
Object.keys(Xt).forEach((e) => {
  wo[Xt[e]] = e;
});
const Hs = { type: "error", data: "parser error" }, hf = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", xf = typeof ArrayBuffer == "function", pf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Fa = ({ type: e, data: n }, t, r) => hf && n instanceof Blob ? t ? r(n) : el(n, r) : xf && (n instanceof ArrayBuffer || pf(n)) ? t ? r(n) : el(new Blob([n]), r) : r(Xt[e] + (n || "")), el = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function tl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ts;
function ep(e, n) {
  if (hf && e.data instanceof Blob)
    return e.data.arrayBuffer().then(tl).then(n);
  if (xf && (e.data instanceof ArrayBuffer || pf(e.data)))
    return n(tl(e.data));
  Fa(e, !1, (t) => {
    ts || (ts = new TextEncoder()), n(ts.encode(t));
  });
}
const nl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < nl.length; e++)
  Tr[nl.charCodeAt(e)] = e;
const tp = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Tr[e.charCodeAt(r)], s = Tr[e.charCodeAt(r + 1)], a = Tr[e.charCodeAt(r + 2)], c = Tr[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, np = typeof ArrayBuffer == "function", Va = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: gf(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: rp(e.substring(1), n)
  } : wo[t] ? e.length > 1 ? {
    type: wo[t],
    data: e.substring(1)
  } : {
    type: wo[t]
  } : Hs;
}, rp = (e, n) => {
  if (np) {
    const t = tp(e);
    return gf(t, n);
  } else
    return { base64: !0, data: e };
}, gf = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, mf = "", op = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    Fa(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(mf));
    });
  });
}, ip = (e, n) => {
  const t = e.split(mf), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = Va(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function sp() {
  return new TransformStream({
    transform(e, n) {
      ep(e, (t) => {
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
let ns;
function so(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function ao(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function ap(e, n) {
  ns || (ns = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (so(t) < 1)
            break;
          const c = ao(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (so(t) < 2)
            break;
          const c = ao(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (so(t) < 8)
            break;
          const c = ao(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Hs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (so(t) < o)
            break;
          const c = ao(t, o);
          a.enqueue(Va(i ? c : ns.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(Hs);
          break;
        }
      }
    }
  });
}
const vf = 4;
function Xe(e) {
  if (e) return cp(e);
}
function cp(e) {
  for (var n in Xe.prototype)
    e[n] = Xe.prototype[n];
  return e;
}
Xe.prototype.on = Xe.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Xe.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Xe.prototype.off = Xe.prototype.removeListener = Xe.prototype.removeAllListeners = Xe.prototype.removeEventListener = function(e, n) {
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
Xe.prototype.emit = function(e) {
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
Xe.prototype.emitReserved = Xe.prototype.emit;
Xe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Xe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const _i = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), lp = "arraybuffer";
function yf(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const up = wt.setTimeout, fp = wt.clearTimeout;
function Si(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = up.bind(wt), e.clearTimeoutFn = fp.bind(wt)) : (e.setTimeoutFn = wt.setTimeout.bind(wt), e.clearTimeoutFn = wt.clearTimeout.bind(wt));
}
const dp = 1.33;
function hp(e) {
  return typeof e == "string" ? xp(e) : Math.ceil((e.byteLength || e.size) * dp);
}
function xp(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function bf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function pp(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function gp(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class mp extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class Ua extends Xe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Si(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new mp(n, t, r)), this;
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
    const t = Va(n, this.socket.binaryType);
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
    const t = pp(n);
    return t.length ? "?" + t : "";
  }
}
class vp extends Ua {
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
    ip(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, op(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = bf()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let _f = !1;
try {
  _f = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const yp = _f;
function bp() {
}
class _p extends vp {
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
class Gt extends Xe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, Si(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = yf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Gt.requestsCount++, Gt.requests[this._index] = this);
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
      typeof document < "u" && delete Gt.requests[this._index], this._xhr = null;
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
}
Gt.requestsCount = 0;
Gt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", rl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in wt ? "pagehide" : "unload";
    addEventListener(e, rl, !1);
  }
}
function rl() {
  for (let e in Gt.requests)
    Gt.requests.hasOwnProperty(e) && Gt.requests[e].abort();
}
const Sp = function() {
  const e = Sf({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Cp extends _p {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = Sp && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Gt(Sf, this.uri(), n);
  }
}
function Sf(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || yp))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Cf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class wp extends Ua {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = Cf ? {} : yf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Fa(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && _i(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = bf()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const rs = wt.WebSocket || wt.MozWebSocket;
class Ep extends wp {
  createSocket(n, t, r) {
    return Cf ? new rs(n, t, r) : t ? new rs(n, t) : new rs(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class Op extends Ua {
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
        const t = ap(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = sp();
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
        o && _i(() => {
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
const Tp = {
  websocket: Ep,
  webtransport: Op,
  polling: Cp
}, Rp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ap = [
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
function zs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = Rp.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Ap[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = $p(i, i.path), i.queryKey = Pp(i, i.query), i;
}
function $p(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Pp(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const Fs = typeof addEventListener == "function" && typeof removeEventListener == "function", Eo = [];
Fs && addEventListener("offline", () => {
  Eo.forEach((e) => e());
}, !1);
class gn extends Xe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = lp, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = zs(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = zs(t.host).host);
    Si(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = gp(this.opts.query)), Fs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
  createTransport(n) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = vf, t.transport = n, this.id && (t.sid = this.id);
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
      if (o && (t += hp(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, _i(() => {
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Fs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Eo.indexOf(this._offlineEventListener);
        r !== -1 && Eo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
gn.protocol = vf;
class Ip extends gn {
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
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
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
    const s = (d) => {
      const h = new Error("probe error: " + d);
      h.transport = t.name, i(), this.emitReserved("upgradeError", h);
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
let Np = class extends Ip {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Tp[o]).filter((o) => !!o)), super(n, r);
  }
};
function kp(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = zs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const jp = typeof ArrayBuffer == "function", Mp = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wf = Object.prototype.toString, Lp = typeof Blob == "function" || typeof Blob < "u" && wf.call(Blob) === "[object BlobConstructor]", Dp = typeof File == "function" || typeof File < "u" && wf.call(File) === "[object FileConstructor]";
function qa(e) {
  return jp && (e instanceof ArrayBuffer || Mp(e)) || Lp && e instanceof Blob || Dp && e instanceof File;
}
function Oo(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (Oo(e[t]))
        return !0;
    return !1;
  }
  if (qa(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Oo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Oo(e[t]))
      return !0;
  return !1;
}
function Bp(e) {
  const n = [], t = e.data, r = e;
  return r.data = Vs(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function Vs(e, n) {
  if (!e)
    return e;
  if (qa(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = Vs(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Vs(e[r], n));
    return t;
  }
  return e;
}
function Hp(e, n) {
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
const zp = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Fp = 5;
var ge;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ge || (ge = {}));
class Vp {
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
    return (n.type === ge.EVENT || n.type === ge.ACK) && Oo(n) ? this.encodeAsBinary({
      type: n.type === ge.EVENT ? ge.BINARY_EVENT : ge.BINARY_ACK,
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
    return (n.type === ge.BINARY_EVENT || n.type === ge.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = Bp(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function ol(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Wa extends Xe {
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
      const r = t.type === ge.BINARY_EVENT;
      r || t.type === ge.BINARY_ACK ? (t.type = r ? ge.EVENT : ge.ACK, this.reconstructor = new Up(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (qa(n) || n.base64)
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
    if (ge[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ge.BINARY_EVENT || r.type === ge.BINARY_ACK) {
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
      if (Wa.isPayloadValid(r.type, i))
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
      case ge.CONNECT:
        return ol(t);
      case ge.DISCONNECT:
        return t === void 0;
      case ge.CONNECT_ERROR:
        return typeof t == "string" || ol(t);
      case ge.EVENT:
      case ge.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && zp.indexOf(t[0]) === -1);
      case ge.ACK:
      case ge.BINARY_ACK:
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
class Up {
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
      const t = Hp(this.reconPack, this.buffers);
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
  Decoder: Wa,
  Encoder: Vp,
  get PacketType() {
    return ge;
  },
  protocol: Fp
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Wp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ef extends Xe {
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
    if (Wp.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: ge.EVENT,
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
      type: ge.CONNECT,
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
        case ge.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ge.EVENT:
        case ge.BINARY_EVENT:
          this.onevent(n);
          break;
        case ge.ACK:
        case ge.BINARY_ACK:
          this.onack(n);
          break;
        case ge.DISCONNECT:
          this.ondisconnect();
          break;
        case ge.CONNECT_ERROR:
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
        type: ge.ACK,
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
function lr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
lr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
lr.prototype.reset = function() {
  this.attempts = 0;
};
lr.prototype.setMin = function(e) {
  this.ms = e;
};
lr.prototype.setMax = function(e) {
  this.max = e;
};
lr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class qs extends Xe {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Si(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new lr({
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
    this.engine = new Np(this.uri, this.opts);
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
    _i(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Ef(this, n, t), this.nsps[n] = r), r;
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
const yr = {};
function To(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = kp(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = yr[o] && i in yr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new qs(r, n) : (yr[o] || (yr[o] = new qs(r, n)), c = yr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(To, {
  Manager: qs,
  Socket: Ef,
  io: To,
  connect: To
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
function Ce(e) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ce(e);
}
var Gp = Symbol.for("react.element"), Xp = Symbol.for("react.transitional.element"), Yp = Symbol.for("react.fragment");
function Kp(e) {
  return (
    // Base object type
    e && Ce(e) === "object" && // React Element type
    (e.$$typeof === Gp || e.$$typeof === Xp) && // React Fragment type
    e.type === Yp
  );
}
var Ws = {}, Ga = [], Jp = function(n) {
  Ga.push(n);
};
function Xa(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ga.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Qp(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ga.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function Of() {
  Ws = {};
}
function Tf(e, n, t) {
  !n && !Ws[t] && (e(!1, t), Ws[t] = !0);
}
function bn(e, n) {
  Tf(Xa, e, n);
}
function Zp(e, n) {
  Tf(Qp, e, n);
}
bn.preMessage = Jp;
bn.resetWarned = Of;
bn.noteOnce = Zp;
function e1(e, n) {
  if (Ce(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (Ce(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Rf(e) {
  var n = e1(e, "string");
  return Ce(n) == "symbol" ? n : n + "";
}
function Q(e, n, t) {
  return (n = Rf(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function il(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Z(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? il(Object(t), !0).forEach(function(r) {
      Q(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : il(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function sl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function t1(e) {
  return e && Ce(e) === "object" && sl(e.nativeElement) ? e.nativeElement : sl(e) ? e : null;
}
function n1(e) {
  var n = t1(e);
  if (n)
    return n;
  if (e instanceof X.Component) {
    var t;
    return (t = vc.findDOMNode) === null || t === void 0 ? void 0 : t.call(vc, e);
  }
  return null;
}
function Ya(e, n, t) {
  var r = w.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var r1 = Number(Jd.split(".")[0]), Af = function(n, t) {
  typeof n == "function" ? n(t) : Ce(n) === "object" && n && "current" in n && (n.current = t);
}, Ci = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      Af(s, i);
    });
  };
}, o1 = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return Ya(function() {
    return Ci.apply(void 0, t);
  }, t, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, $f = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (Pf(n) && r1 >= 19)
    return !0;
  var o = es.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== es.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== es.ForwardRef);
};
function Pf(e) {
  return /* @__PURE__ */ Kd(e) && !Kp(e);
}
var If = function(n) {
  if (n && Pf(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function vt(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function al(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rf(r.key), r);
  }
}
function yt(e, n, t) {
  return n && al(e.prototype, n), t && al(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Gs(e, n) {
  return Gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Gs(e, n);
}
function ur(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && Gs(e, n);
}
function Qn(e) {
  return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qn(e);
}
function Ka() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ka = function() {
    return !!e;
  })();
}
function Pn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nf(e, n) {
  if (n && (Ce(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Pn(e);
}
function Fr(e) {
  var n = Ka();
  return function() {
    var t, r = Qn(e);
    if (n) {
      var o = Qn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return Nf(this, t);
  };
}
function Xs(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function i1(e) {
  if (Array.isArray(e)) return Xs(e);
}
function kf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ja(e, n) {
  if (e) {
    if (typeof e == "string") return Xs(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Xs(e, n) : void 0;
  }
}
function s1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(e) {
  return i1(e) || kf(e) || Ja(e) || s1();
}
var jf = function(n) {
  return +setTimeout(n, 16);
}, Mf = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (jf = function(n) {
  return window.requestAnimationFrame(n);
}, Mf = function(n) {
  return window.cancelAnimationFrame(n);
});
var cl = 0, wi = /* @__PURE__ */ new Map();
function Lf(e) {
  wi.delete(e);
}
var mn = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  cl += 1;
  var r = cl;
  function o(i) {
    if (i === 0)
      Lf(r), n();
    else {
      var s = jf(function() {
        o(i - 1);
      });
      wi.set(r, s);
    }
  }
  return o(t), r;
};
mn.cancel = function(e) {
  var n = wi.get(e);
  return Lf(e), Mf(n);
};
process.env.NODE_ENV !== "production" && (mn.ids = function() {
  return wi;
});
function Df(e) {
  if (Array.isArray(e)) return e;
}
function a1(e, n) {
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
function Bf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(e, n) {
  return Df(e) || a1(e, n) || Ja(e, n) || Bf();
}
function jr(e) {
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
function ln() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function c1(e, n) {
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
var ll = "data-rc-order", ul = "data-rc-priority", l1 = "rc-util-key", Ys = /* @__PURE__ */ new Map();
function Hf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : l1;
}
function Ei(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function u1(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Qa(e) {
  return Array.from((Ys.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function zf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ln())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = u1(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(ll, s), a && i && c.setAttribute(ul, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = Ei(n), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || Qa(l)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(ll)))
          return !1;
        var m = Number(h.getAttribute(ul) || 0);
        return i >= m;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Ff(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ei(n);
  return (n.styles || Qa(t)).find(function(r) {
    return r.getAttribute(Hf(n)) === e;
  });
}
function Vf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ff(e, n);
  if (t) {
    var r = Ei(n);
    r.removeChild(t);
  }
}
function f1(e, n) {
  var t = Ys.get(e);
  if (!t || !c1(document, t)) {
    var r = zf("", n), o = r.parentNode;
    Ys.set(e, o), e.removeChild(r);
  }
}
function In(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ei(t), o = Qa(r), i = Z(Z({}, t), {}, {
    styles: o
  });
  f1(r, i);
  var s = Ff(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = zf(e, i);
  return u.setAttribute(Hf(i), n), u;
}
function d1(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function Mn(e, n) {
  if (e == null) return {};
  var t, r, o = d1(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function h1(e, n) {
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
    if (i && s && Ce(i) === "object" && Ce(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(h) {
        return o(i[h], s[h], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var x1 = "%";
function Ks(e) {
  return e.join(x1);
}
var p1 = /* @__PURE__ */ function() {
  function e(n) {
    vt(this, e), Q(this, "instanceId", void 0), Q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return yt(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(Ks(t));
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
      return this.opUpdate(Ks(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Zn = "data-token-hash", jt = "data-css-hash", g1 = "data-cache-path", xn = "__cssinjs_instance__";
function m1() {
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
  return new p1(e);
}
var Vr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: m1(),
  defaultCache: !0
});
function v1(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Za = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), Q(this, "cache", void 0), Q(this, "keys", void 0), Q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return yt(e, [{
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
            var d = se(l, 2), h = d[1];
            return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = se(i, 1), a = s[0];
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
          return !v1(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
Q(Za, "MAX_CACHE_SIZE", 20);
Q(Za, "MAX_CACHE_OFFSET", 5);
var fl = 0, Uf = /* @__PURE__ */ function() {
  function e(n) {
    vt(this, e), Q(this, "derivatives", void 0), Q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = fl, n.length === 0 && Xa(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), fl += 1;
  }
  return yt(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), os = new Za();
function Js(e) {
  var n = Array.isArray(e) ? e : [e];
  return os.has(n) || os.set(n, new Uf(n)), os.get(n);
}
var y1 = /* @__PURE__ */ new WeakMap(), is = {};
function b1(e, n) {
  for (var t = y1, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(is) || t.set(is, e()), t.get(is);
}
var dl = /* @__PURE__ */ new WeakMap();
function Pr(e) {
  var n = dl.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof Uf ? n += r.id : r && Ce(r) === "object" ? n += Pr(r) : n += r;
  }), n = jr(n), dl.set(e, n)), n;
}
function hl(e, n) {
  return jr("".concat(n, "_").concat(Pr(e)));
}
var Qs = ln();
function an(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function qo(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = Z(Z({}, o), {}, (r = {}, Q(r, Zn, n), Q(r, jt, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Ro = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, _1 = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = se(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, qf = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = se(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var h, m = Ro(u, r == null ? void 0 : r.prefix);
      o[m] = typeof d == "number" && !(r != null && (h = r.unitless) !== null && h !== void 0 && h[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(m, ")");
    }
  }), [i, _1(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, xl = process.env.NODE_ENV !== "test" && ln() ? w.useLayoutEffect : w.useEffect, ec = function(n, t) {
  var r = w.useRef(!0);
  xl(function() {
    return n(r.current);
  }, t), xl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, pl = function(n, t) {
  ec(function(r) {
    if (!r)
      return n();
  }, t);
}, S1 = Z({}, w), gl = S1.useInsertionEffect, C1 = function(n, t, r) {
  w.useMemo(n, r), ec(function() {
    return t(!0);
  }, r);
}, w1 = gl ? function(e, n, t) {
  return gl(function() {
    return e(), n();
  }, t);
} : C1, E1 = Z({}, w), O1 = E1.useInsertionEffect, T1 = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Xa(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, R1 = function() {
  return function(n) {
    n();
  };
}, A1 = typeof O1 < "u" ? T1 : R1;
function $1() {
  return !1;
}
var Zs = !1;
function P1() {
  return Zs;
}
const I1 = process.env.NODE_ENV === "production" ? $1 : P1;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (co && typeof co.webpackHotUpdate == "function") {
    var N1 = co.webpackHotUpdate;
    co.webpackHotUpdate = function() {
      return Zs = !0, setTimeout(function() {
        Zs = !1;
      }, 0), N1.apply(void 0, arguments);
    };
  }
}
function tc(e, n, t, r, o) {
  var i = w.useContext(Vr), s = i.cache, a = [e].concat(Yt(n)), c = Ks(a), l = A1([c]), u = I1(), d = function(g) {
    s.opUpdate(c, function(p) {
      var y = p || [void 0, void 0], b = se(y, 2), _ = b[0], E = _ === void 0 ? 0 : _, x = b[1], T = x;
      process.env.NODE_ENV !== "production" && x && u && (r == null || r(T, u), T = null);
      var S = T || t(), j = [E, S];
      return g ? g(j) : j;
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
  var h = s.opGet(c);
  process.env.NODE_ENV !== "production" && !h && (d(), h = s.opGet(c));
  var m = h[1];
  return w1(function() {
    o == null || o(m);
  }, function(f) {
    return d(function(g) {
      var p = se(g, 2), y = p[0], b = p[1];
      return f && y === 0 && (o == null || o(m)), [y + 1, b];
    }), function() {
      s.opUpdate(c, function(g) {
        var p = g || [], y = se(p, 2), b = y[0], _ = b === void 0 ? 0 : b, E = y[1], x = _ - 1;
        return x === 0 ? (l(function() {
          (f || !s.opGet(c)) && (r == null || r(E, !1));
        }), null) : [_ - 1, E];
      });
    };
  }, [c]), m;
}
var k1 = {}, j1 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", On = /* @__PURE__ */ new Map();
function M1(e) {
  On.set(e, (On.get(e) || 0) + 1);
}
function L1(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Zn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[xn] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var D1 = 0;
function B1(e, n) {
  On.set(e, (On.get(e) || 0) - 1);
  var t = Array.from(On.keys()), r = t.filter(function(o) {
    var i = On.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > D1 && r.forEach(function(o) {
    L1(o, n), On.delete(o);
  });
}
var H1 = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = Z(Z({}, i), t);
  return o && (s = o(s)), s;
}, Wf = "token";
function z1(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Et(Vr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? k1 : c, u = t.formatToken, d = t.getComputedToken, h = t.cssVar, m = b1(function() {
    return Object.assign.apply(Object, [{}].concat(Yt(n)));
  }, n), f = Pr(m), g = Pr(l), p = h ? Pr(h) : "", y = tc(Wf, [a, e.id, f, g, p], function() {
    var b, _ = d ? d(m, l, e) : H1(m, l, e, u), E = Z({}, _), x = "";
    if (h) {
      var T = qf(_, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), S = se(T, 2);
      _ = S[0], x = S[1];
    }
    var j = hl(_, a);
    _._tokenKey = j, E._tokenKey = hl(E, a);
    var M = (b = h == null ? void 0 : h.key) !== null && b !== void 0 ? b : j;
    _._themeKey = M, M1(M);
    var U = "".concat(j1, "-").concat(jr(j));
    return _._hashId = U, [_, U, E, x, (h == null ? void 0 : h.key) || ""];
  }, function(b) {
    B1(b[0]._themeKey, o);
  }, function(b) {
    var _ = se(b, 4), E = _[0], x = _[3];
    if (h && x) {
      var T = In(x, jr("css-variables-".concat(E._themeKey)), {
        mark: jt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      T[xn] = o, T.setAttribute(Zn, E._themeKey);
    }
  });
  return y;
}
var F1 = function(n, t, r) {
  var o = se(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, m = qo(s, a, u, h, l);
  return [d, u, m];
}, V1 = {
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
}, Gf = "comm", Xf = "rule", Yf = "decl", U1 = "@import", q1 = "@namespace", W1 = "@keyframes", G1 = "@layer", Kf = Math.abs, nc = String.fromCharCode;
function Jf(e) {
  return e.trim();
}
function Ao(e, n, t) {
  return e.replace(n, t);
}
function X1(e, n, t) {
  return e.indexOf(n, t);
}
function Vn(e, n) {
  return e.charCodeAt(n) | 0;
}
function er(e, n, t) {
  return e.slice(n, t);
}
function qt(e) {
  return e.length;
}
function Y1(e) {
  return e.length;
}
function lo(e, n) {
  return n.push(e), e;
}
var Oi = 1, tr = 1, Qf = 0, Tt = 0, Ge = 0, fr = "";
function rc(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Oi, column: tr, length: s, return: "", siblings: a };
}
function K1() {
  return Ge;
}
function J1() {
  return Ge = Tt > 0 ? Vn(fr, --Tt) : 0, tr--, Ge === 10 && (tr = 1, Oi--), Ge;
}
function Mt() {
  return Ge = Tt < Qf ? Vn(fr, Tt++) : 0, tr++, Ge === 10 && (tr = 1, Oi++), Ge;
}
function pn() {
  return Vn(fr, Tt);
}
function $o() {
  return Tt;
}
function Ti(e, n) {
  return er(fr, e, n);
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
function Q1(e) {
  return Oi = tr = 1, Qf = qt(fr = e), Tt = 0, [];
}
function Z1(e) {
  return fr = "", e;
}
function ss(e) {
  return Jf(Ti(Tt - 1, ea(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function eg(e) {
  for (; (Ge = pn()) && Ge < 33; )
    Mt();
  return Mr(e) > 2 || Mr(Ge) > 3 ? "" : " ";
}
function tg(e, n) {
  for (; --n && Mt() && !(Ge < 48 || Ge > 102 || Ge > 57 && Ge < 65 || Ge > 70 && Ge < 97); )
    ;
  return Ti(e, $o() + (n < 6 && pn() == 32 && Mt() == 32));
}
function ea(e) {
  for (; Mt(); )
    switch (Ge) {
      // ] ) " '
      case e:
        return Tt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ea(Ge);
        break;
      // (
      case 40:
        e === 41 && ea(e);
        break;
      // \
      case 92:
        Mt();
        break;
    }
  return Tt;
}
function ng(e, n) {
  for (; Mt() && e + Ge !== 57; )
    if (e + Ge === 84 && pn() === 47)
      break;
  return "/*" + Ti(n, Tt - 1) + "*" + nc(e === 47 ? e : Mt());
}
function rg(e) {
  for (; !Mr(pn()); )
    Mt();
  return Ti(e, Tt);
}
function og(e) {
  return Z1(Po("", null, null, null, [""], e = Q1(e), 0, [0], e));
}
function Po(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, h = 0, m = 0, f = 0, g = 1, p = 1, y = 1, b = 0, _ = "", E = o, x = i, T = r, S = _; p; )
    switch (f = b, b = Mt()) {
      // (
      case 40:
        if (f != 108 && Vn(S, d - 1) == 58) {
          X1(S += Ao(ss(b), "&", "&\f"), "&\f", Kf(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += ss(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += eg(f);
        break;
      // \
      case 92:
        S += tg($o() - 1, 7);
        continue;
      // /
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            lo(ig(ng(Mt(), $o()), n, t, c), c), (Mr(f || 1) == 5 || Mr(pn() || 1) == 5) && qt(S) && er(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = qt(S) * y;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            y == -1 && (S = Ao(S, /\f/g, "")), m > 0 && (qt(S) - d || g === 0 && f === 47) && lo(m > 32 ? vl(S + ";", r, t, d - 1, c) : vl(Ao(S, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (lo(T = ml(S, n, t, l, u, o, a, _, E = [], x = [], d, i), i), b === 123)
              if (u === 0)
                Po(S, n, T, T, E, i, d, a, x);
              else {
                switch (h) {
                  // c(ontainer)
                  case 99:
                    if (Vn(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Vn(S, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Po(e, T, T, r && lo(ml(e, T, T, 0, 0, o, a, _, o, E = [], d, x), x), o, x, d, a, r ? E : x) : Po(S, T, T, T, [""], x, 0, a, x);
              }
        }
        l = u = m = 0, g = y = 1, _ = S = "", d = s;
        break;
      // :
      case 58:
        d = 1 + qt(S), m = f;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && J1() == 125)
            continue;
        }
        switch (S += nc(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (qt(S) - 1) * y, y = 1;
            break;
          // @
          case 64:
            pn() === 45 && (S += ss(Mt())), h = pn(), u = d = qt(_ = S += rg($o())), b++;
            break;
          // -
          case 45:
            f === 45 && qt(S) == 2 && (g = 0);
        }
    }
  return i;
}
function ml(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var h = o - 1, m = o === 0 ? i : [""], f = Y1(m), g = 0, p = 0, y = 0; g < r; ++g)
    for (var b = 0, _ = er(e, h + 1, h = Kf(p = s[g])), E = e; b < f; ++b)
      (E = Jf(p > 0 ? m[b] + " " + _ : Ao(_, /&\f/g, m[b]))) && (c[y++] = E);
  return rc(e, n, t, o === 0 ? Xf : a, c, l, u, d);
}
function ig(e, n, t, r) {
  return rc(e, n, t, Gf, nc(K1()), er(e, 2, -2), 0, r);
}
function vl(e, n, t, r, o) {
  return rc(e, n, t, Yf, er(e, 0, r), er(e, r + 1, -1), r, o);
}
function ta(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function sg(e, n, t, r) {
  switch (e.type) {
    case G1:
      if (e.children.length) break;
    case U1:
    case q1:
    case Yf:
      return e.return = e.return || e.value;
    case Gf:
      return "";
    case W1:
      return e.return = e.value + "{" + ta(e.children, r) + "}";
    case Xf:
      if (!qt(e.value = e.props.join(","))) return "";
  }
  return qt(t = ta(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Zf(e, n) {
  var t = n.path, r = n.parentSelectors;
  bn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var ag = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Zf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, cg = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Zf("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, yl = "data-ant-cssinjs-cache-path", e0 = "_FILE_STYLE__", Nn, t0 = !0;
function lg() {
  if (!Nn && (Nn = {}, ln())) {
    var e = document.createElement("div");
    e.className = yl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = se(i, 2), a = s[0], c = s[1];
      Nn[a] = c;
    });
    var t = document.querySelector("style[".concat(yl, "]"));
    if (t) {
      var r;
      t0 = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function ug(e) {
  return lg(), !!Nn[e];
}
function fg(e) {
  var n = Nn[e], t = null;
  if (n && ln())
    if (t0)
      t = e0;
    else {
      var r = document.querySelector("style[".concat(jt, '="').concat(Nn[e], '"]'));
      r ? t = r.innerHTML : delete Nn[e];
    }
  return [t, n];
}
var n0 = "_skip_check_", r0 = "_multi_value_";
function Io(e) {
  var n = ta(og(e), sg);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function dg(e) {
  return Ce(e) === "object" && e && (n0 in e || r0 in e);
}
function bl(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Yt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var hg = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, d = t.transformers, h = d === void 0 ? [] : d, m = t.linters, f = m === void 0 ? [] : m, g = "", p = {};
  function y(E) {
    var x = E.getName(a);
    if (!p[x]) {
      var T = e(E.style, t, {
        root: !1,
        parentSelectors: s
      }), S = se(T, 1), j = S[0];
      p[x] = "@keyframes ".concat(E.getName(a)).concat(j);
    }
  }
  function b(E) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(T) {
      Array.isArray(T) ? b(T, x) : T && x.push(T);
    }), x;
  }
  var _ = b(Array.isArray(n) ? n : [n]);
  return _.forEach(function(E) {
    var x = typeof E == "string" && !o ? {} : E;
    if (typeof x == "string")
      g += "".concat(x, `
`);
    else if (x._keyframe)
      y(x);
    else {
      var T = h.reduce(function(S, j) {
        var M;
        return (j == null || (M = j.visit) === null || M === void 0 ? void 0 : M.call(j, S)) || S;
      }, x);
      Object.keys(T).forEach(function(S) {
        var j = T[S];
        if (Ce(j) === "object" && j && (S !== "animationName" || !j._keyframe) && !dg(j)) {
          var M = !1, U = S.trim(), ee = !1;
          (o || i) && a ? U.startsWith("@") ? M = !0 : U === "&" ? U = bl("", a, u) : U = bl(S, a, u) : o && !a && (U === "&" || U === "") && (U = "", ee = !0);
          var Y = e(j, t, {
            root: ee,
            injectHash: M,
            parentSelectors: [].concat(Yt(s), [U])
          }), B = se(Y, 2), F = B[0], J = B[1];
          p = Z(Z({}, p), J), g += "".concat(U).concat(F);
        } else {
          let R = function(k, H) {
            process.env.NODE_ENV !== "production" && (Ce(j) !== "object" || !(j != null && j[n0])) && [ag, cg].concat(Yt(f)).forEach(function(te) {
              return te(k, H, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var D = k.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), q = H;
            !V1[k] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), k === "animationName" && H !== null && H !== void 0 && H._keyframe && (y(H), q = H.getName(a)), g += "".concat(D, ":").concat(q, ";");
          };
          var N, A = (N = j == null ? void 0 : j.value) !== null && N !== void 0 ? N : j;
          Ce(j) === "object" && j !== null && j !== void 0 && j[r0] && Array.isArray(A) ? A.forEach(function(k) {
            R(S, k);
          }) : R(S, A);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
};
function o0(e, n) {
  return jr("".concat(e.join("%")).concat(n));
}
function xg() {
  return null;
}
var i0 = "style";
function na(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Vr), d = u.autoClear, h = u.mock, m = u.defaultCache, f = u.hashPriority, g = u.container, p = u.ssrInline, y = u.transformers, b = u.linters, _ = u.cache, E = u.layer, x = t._tokenKey, T = [x];
  E && T.push("layer"), T.push.apply(T, Yt(r));
  var S = Qs;
  process.env.NODE_ENV !== "production" && h !== void 0 && (S = h === "client");
  var j = tc(
    i0,
    T,
    // Create cache if needed
    function() {
      var B = T.join("|");
      if (ug(B)) {
        var F = fg(B), J = se(F, 2), N = J[0], A = J[1];
        if (N)
          return [N, x, A, {}, a, l];
      }
      var R = n(), k = hg(R, {
        hashId: o,
        hashPriority: f,
        layer: E ? i : void 0,
        path: r.join("-"),
        transformers: y,
        linters: b
      }), H = se(k, 2), D = H[0], q = H[1], te = Io(D), K = o0(T, te);
      return [te, x, K, q, a, l];
    },
    // Remove cache if no need
    function(B, F) {
      var J = se(B, 3), N = J[2];
      (F || d) && Qs && Vf(N, {
        mark: jt
      });
    },
    // Effect: Inject style here
    function(B) {
      var F = se(B, 4), J = F[0];
      F[1];
      var N = F[2], A = F[3];
      if (S && J !== e0) {
        var R = {
          mark: jt,
          prepend: E ? !1 : "queue",
          attachTo: g,
          priority: l
        }, k = typeof s == "function" ? s() : s;
        k && (R.csp = {
          nonce: k
        });
        var H = [], D = [];
        Object.keys(A).forEach(function(te) {
          te.startsWith("@layer") ? H.push(te) : D.push(te);
        }), H.forEach(function(te) {
          In(Io(A[te]), "_layer-".concat(te), Z(Z({}, R), {}, {
            prepend: !0
          }));
        });
        var q = In(J, N, R);
        q[xn] = _.instanceId, q.setAttribute(Zn, x), process.env.NODE_ENV !== "production" && q.setAttribute(g1, T.join("|")), D.forEach(function(te) {
          In(Io(A[te]), "_effect-".concat(te), R);
        });
      }
    }
  ), M = se(j, 3), U = M[0], ee = M[1], Y = M[2];
  return function(B) {
    var F;
    if (!p || S || !m)
      F = /* @__PURE__ */ w.createElement(xg, null);
    else {
      var J;
      F = /* @__PURE__ */ w.createElement("style", xt({}, (J = {}, Q(J, Zn, ee), Q(J, jt, Y), J), {
        dangerouslySetInnerHTML: {
          __html: U
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, F, B);
  };
}
var pg = function(n, t, r) {
  var o = se(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, h = d.plain;
  if (l)
    return null;
  var m = i, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return m = qo(i, s, a, f, h), c && Object.keys(c).forEach(function(g) {
    if (!t[g]) {
      t[g] = !0;
      var p = Io(c[g]), y = qo(p, s, "_effect-".concat(g), f, h);
      g.startsWith("@layer") ? m = y + m : m += y;
    }
  }), [u, a, m];
}, s0 = "cssVar", gg = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = Et(Vr), d = u.cache.instanceId, h = u.container, m = a._tokenKey, f = [].concat(Yt(n.path), [r, l, m]), g = tc(s0, f, function() {
    var p = t(), y = qf(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = se(y, 2), _ = b[0], E = b[1], x = o0(f, E);
    return [_, E, x, r];
  }, function(p) {
    var y = se(p, 3), b = y[2];
    Qs && Vf(b, {
      mark: jt
    });
  }, function(p) {
    var y = se(p, 3), b = y[1], _ = y[2];
    if (b) {
      var E = In(b, _, {
        mark: jt,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      E[xn] = d, E.setAttribute(Zn, r);
    }
  });
  return g;
}, mg = function(n, t, r) {
  var o = se(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, h = qo(i, a, s, d, l);
  return [u, s, h];
}, br;
br = {}, Q(br, i0, pg), Q(br, Wf, F1), Q(br, s0, mg);
var a0 = /* @__PURE__ */ function() {
  function e(n, t) {
    vt(this, e), Q(this, "name", void 0), Q(this, "style", void 0), Q(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return yt(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Hn(e) {
  return e.notSplit = !0, e;
}
Hn(["borderTop", "borderBottom"]), Hn(["borderTop"]), Hn(["borderBottom"]), Hn(["borderLeft", "borderRight"]), Hn(["borderLeft"]), Hn(["borderRight"]);
var oc = /* @__PURE__ */ fi({});
function vg(e) {
  return Df(e) || kf(e) || Ja(e) || Bf();
}
function ra(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function c0(e, n, t, r) {
  if (!n.length)
    return t;
  var o = vg(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Yt(e) : a = Z({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = c0(a[i], s, t, r), a;
}
function as(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !ra(e, n.slice(0, -1)) ? e : c0(e, n, t, r);
}
function yg(e) {
  return Ce(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function _l(e) {
  return Array.isArray(e) ? [] : {};
}
var bg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function _g() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = _l(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = ra(o, s), u = Array.isArray(l);
      if (u || yg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = ra(r, s);
          u ? r = as(r, s, []) : (!d || Ce(d) !== "object") && (r = as(r, s, _l(l))), bg(l).forEach(function(h) {
            i([].concat(Yt(s), [h]), c);
          });
        }
      } else
        r = as(r, s, l);
    }
    i([]);
  }), r;
}
function l0() {
}
let rn = null;
function Sg() {
  rn = null, Of();
}
let ic = l0;
process.env.NODE_ENV !== "production" && (ic = (e, n, t) => {
  bn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && Sg();
});
const u0 = /* @__PURE__ */ w.createContext({}), _n = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = w.useContext(u0), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = rn;
        rn || (rn = {}), rn[e] = rn[e] || [], rn[e].includes(i || "") || rn[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", rn);
      } else
        process.env.NODE_ENV !== "production" && ic(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = l0, e;
}, Ur = ic, Cg = /* @__PURE__ */ fi(void 0), mt = "${label} is not a valid ${type}", Ri = {
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
Object.assign({}, Ri.Modal);
let No = [];
const Sl = () => No.reduce((e, n) => Object.assign(Object.assign({}, e), n), Ri.Modal);
function wg(e) {
  if (e) {
    const n = Object.assign({}, e);
    return No.push(n), Sl(), () => {
      No = No.filter((t) => t !== n), Sl();
    };
  }
  Object.assign({}, Ri.Modal);
}
const f0 = /* @__PURE__ */ fi(void 0), d0 = "internalMark", h0 = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = _n("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === d0, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => wg(n == null ? void 0 : n.Modal), [n]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ w.createElement(f0.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (h0.displayName = "LocaleProvider");
const x0 = {
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
}, Lr = Object.assign(Object.assign({}, x0), {
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
}), tt = Math.round;
function cs(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Cl = (e, n, t) => t === 0 ? e : e / 100;
function _r(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Qe = class p0 {
  constructor(n) {
    Q(this, "isValid", !0), Q(this, "r", 0), Q(this, "g", 0), Q(this, "b", 0), Q(this, "a", 1), Q(this, "_h", void 0), Q(this, "_s", void 0), Q(this, "_l", void 0), Q(this, "_v", void 0), Q(this, "_max", void 0), Q(this, "_min", void 0), Q(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof p0)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = _r(n.r), this.g = _r(n.g), this.b = _r(n.b), this.a = typeof n.a == "number" ? _r(n.a, 1) : 1;
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
    return o[n] = _r(t, r), o;
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
    const d = r - l / 2;
    this.r = tt((i + d) * 255), this.g = tt((s + d) * 255), this.b = tt((a + d) * 255);
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
    const s = n / 60, a = Math.floor(s), c = s - a, l = tt(r * (1 - t) * 255), u = tt(r * (1 - t * c) * 255), d = tt(r * (1 - t * (1 - c)) * 255);
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
    const t = cs(n, Cl);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = cs(n, Cl);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = cs(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? tt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
var uo = 2, wl = 0.16, Eg = 0.05, Og = 0.05, Tg = 0.15, g0 = 5, m0 = 4, Rg = [{
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
function El(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - uo * n : Math.round(e.h) + uo * n : r = t ? Math.round(e.h) + uo * n : Math.round(e.h) - uo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ol(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - wl * n : n === m0 ? r = e.s + wl : r = e.s + Eg * n, r > 1 && (r = 1), t && n === g0 && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Tl(e, n, t) {
  var r;
  return t ? r = e.v + Og * n : r = e.v - Tg * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Dr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Qe(e), o = r.toHsv(), i = g0; i > 0; i -= 1) {
    var s = new Qe({
      h: El(o, i, !0),
      s: Ol(o, i, !0),
      v: Tl(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= m0; a += 1) {
    var c = new Qe({
      h: El(o, a),
      s: Ol(o, a),
      v: Tl(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? Rg.map(function(l) {
    var u = l.index, d = l.amount;
    return new Qe(n.backgroundColor || "#141414").mix(t[u], d).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var ls = {
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
}, oa = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
oa.primary = oa[5];
var ia = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
ia.primary = ia[5];
var sa = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
sa.primary = sa[5];
var aa = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
aa.primary = aa[5];
var ca = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ca.primary = ca[5];
var la = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
la.primary = la[5];
var ua = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
ua.primary = ua[5];
var fa = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
fa.primary = fa[5];
var Wo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Wo.primary = Wo[5];
var da = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
da.primary = da[5];
var ha = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ha.primary = ha[5];
var xa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xa.primary = xa[5];
var pa = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
pa.primary = pa[5];
var us = {
  red: oa,
  volcano: ia,
  orange: sa,
  gold: aa,
  yellow: ca,
  lime: la,
  green: ua,
  cyan: fa,
  blue: Wo,
  geekblue: da,
  purple: ha,
  magenta: xa,
  grey: pa
};
function Ag(e, n) {
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
  } = e, d = t(c), h = t(o), m = t(i), f = t(s), g = t(a), p = r(l, u), y = e.colorLink || e.colorInfo, b = t(y), _ = new Qe(f[1]).mix(new Qe(f[3]), 50).toHexString();
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
    colorErrorBg: f[1],
    colorErrorBgHover: f[2],
    colorErrorBgFilledHover: _,
    colorErrorBgActive: f[3],
    colorErrorBorder: f[3],
    colorErrorBorderHover: f[4],
    colorErrorHover: f[5],
    colorError: f[6],
    colorErrorActive: f[7],
    colorErrorTextHover: f[8],
    colorErrorText: f[9],
    colorErrorTextActive: f[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Qe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const $g = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function Pg(e) {
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
  }, $g(r));
}
const Ig = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function ko(e) {
  return (e + 8) / e;
}
function Ng(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: ko(t)
  }));
}
const kg = (e) => {
  const n = Ng(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function jg(e) {
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
const _t = (e, n) => new Qe(e).setA(n).toRgbString(), Sr = (e, n) => new Qe(e).darken(n).toHexString(), Mg = (e) => {
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
}, Lg = (e, n) => {
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
    colorBgLayout: Sr(t, 4),
    colorBgContainer: Sr(t, 0),
    colorBgElevated: Sr(t, 0),
    colorBgSpotlight: _t(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Sr(t, 15),
    colorBorderSecondary: Sr(t, 6)
  };
};
function Dg(e) {
  ls.pink = ls.magenta, us.pink = us.magenta;
  const n = Object.keys(x0).map((t) => {
    const r = e[t] === ls[t] ? us[t] : Dr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), Ag(e, {
    generateColorPalettes: Mg,
    generateNeutralColorPalettes: Lg
  })), kg(e.fontSize)), jg(e)), Ig(e)), Pg(e));
}
const v0 = Js(Dg), ga = {
  token: Lr,
  override: {
    override: Lr
  },
  hashed: !0
}, y0 = /* @__PURE__ */ X.createContext(ga), Go = "ant", sc = "anticon", Bg = (e, n) => n || (e ? `${Go}-${e}` : Go), Lt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Bg,
  iconPrefixCls: sc
}), {
  Consumer: b_
} = Lt, Rl = {};
function ac(e) {
  const n = w.useContext(Lt), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: Rl,
    styles: Rl
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Hg = `-ant-${Date.now()}-${Math.random()}`;
function zg(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Qe(s), l = Dr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Qe(n.primaryColor), a = Dr(s.toRgbString());
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
function Fg(e, n) {
  const t = zg(e, n);
  ln() ? In(t, `${Hg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Xo = /* @__PURE__ */ w.createContext(!1), Vg = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = w.useContext(Xo);
  return /* @__PURE__ */ w.createElement(Xo.Provider, {
    value: t ?? r
  }, n);
}, nr = /* @__PURE__ */ w.createContext(void 0), Ug = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = w.useContext(nr);
  return /* @__PURE__ */ w.createElement(nr.Provider, {
    value: t || r
  }, n);
};
function qg() {
  const e = Et(Xo), n = Et(nr);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var b0 = /* @__PURE__ */ yt(function e() {
  vt(this, e);
}), _0 = "CALC_UNIT", Wg = new RegExp(_0, "g");
function fs(e) {
  return typeof e == "number" ? "".concat(e).concat(_0) : e;
}
var Gg = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = Fr(t);
  function t(r, o) {
    var i;
    vt(this, t), i = n.call(this), Q(Pn(i), "result", ""), Q(Pn(i), "unitlessCssVar", void 0), Q(Pn(i), "lowPriority", void 0);
    var s = Ce(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = fs(r) : s === "string" && (i.result = r), i;
  }
  return yt(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(fs(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(fs(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Wg, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(b0), Xg = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = Fr(t);
  function t(r) {
    var o;
    return vt(this, t), o = n.call(this), Q(Pn(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return yt(t, [{
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
}(b0), Yg = function(n, t) {
  var r = n === "css" ? Gg : Xg;
  return function(o) {
    return new r(o, t);
  };
}, Al = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function vn(e) {
  var n = w.useRef();
  n.current = e;
  var t = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Br(e) {
  var n = w.useRef(!1), t = w.useState(e), r = se(t, 2), o = r[0], i = r[1];
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
function ds(e) {
  return e !== void 0;
}
function Kg(e, n) {
  var t = n || {}, r = t.defaultValue, o = t.value, i = t.onChange, s = t.postState, a = Br(function() {
    return ds(o) ? o : ds(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = se(a, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, h = s ? s(d) : d, m = vn(i), f = Br([d]), g = se(f, 2), p = g[0], y = g[1];
  pl(function() {
    var _ = p[0];
    l !== _ && m(l, _);
  }, [p]), pl(function() {
    ds(o) || u(o);
  }, [o]);
  var b = vn(function(_, E) {
    u(_, E), y([d], E);
  });
  return [h, b];
}
function $l(e, n, t, r) {
  var o = Z({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = se(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && bn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = Z(Z({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var S0 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ma = !0;
function Sn() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!S0)
    return Object.assign.apply(Object, [{}].concat(n));
  ma = !1;
  var r = {};
  return n.forEach(function(o) {
    if (Ce(o) === "object") {
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
  }), ma = !0, r;
}
var Pl = {};
function Jg() {
}
var Qg = function(n) {
  var t, r = n, o = Jg;
  return S0 && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (ma) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Pl[s] = {
      global: Array.from(t),
      component: Z(Z({}, (c = Pl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function Il(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(Sn(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Zg(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return an(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return an(i);
      }).join(","), ")");
    }
  };
}
var em = 1e3 * 60 * 10, tm = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), Q(this, "map", /* @__PURE__ */ new Map()), Q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), Q(this, "nextID", 0), Q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), Q(this, "accessBeat", 0);
  }
  return yt(e, [{
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
        return i && Ce(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ce(i), "_").concat(i);
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
          r - o > em && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Nl = new tm();
function nm(e, n) {
  return X.useMemo(function() {
    var t = Nl.get(n);
    if (t)
      return t;
    var r = e();
    return Nl.set(n, r), r;
  }, n);
}
var rm = function() {
  return {};
};
function om(e) {
  var n = e.useCSP, t = n === void 0 ? rm : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(h, m, f, g) {
    var p = Array.isArray(h) ? h[0] : h;
    function y(j) {
      return "".concat(String(p)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var b = (g == null ? void 0 : g.unitless) || {}, _ = typeof a == "function" ? a(h) : {}, E = Z(Z({}, _), {}, Q({}, y("zIndexPopup"), !0));
    Object.keys(b).forEach(function(j) {
      E[y(j)] = b[j];
    });
    var x = Z(Z({}, g), {}, {
      unitless: E,
      prefixToken: y
    }), T = u(h, m, f, x), S = l(p, f, x);
    return function(j) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, U = T(j, M), ee = se(U, 2), Y = ee[1], B = S(M), F = se(B, 2), J = F[0], N = F[1];
      return [J, Y, N];
    };
  }
  function l(h, m, f) {
    var g = f.unitless, p = f.injectStyle, y = p === void 0 ? !0 : p, b = f.prefixToken, _ = f.ignore, E = function(S) {
      var j = S.rootCls, M = S.cssVar, U = M === void 0 ? {} : M, ee = r(), Y = ee.realToken;
      return gg({
        path: [h],
        prefix: U.prefix,
        key: U.key,
        unitless: g,
        ignore: _,
        token: Y,
        scope: j
      }, function() {
        var B = Il(h, Y, m), F = $l(h, Y, B, {
          deprecatedTokens: f == null ? void 0 : f.deprecatedTokens
        });
        return Object.keys(B).forEach(function(J) {
          F[b(J)] = F[J], delete F[J];
        }), F;
      }), null;
    }, x = function(S) {
      var j = r(), M = j.cssVar;
      return [function(U) {
        return y && M ? /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(E, {
          rootCls: S,
          cssVar: M,
          component: h
        }), U) : U;
      }, M == null ? void 0 : M.key];
    };
    return x;
  }
  function u(h, m, f) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(h) ? h : [h, h], y = se(p, 1), b = y[0], _ = p.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(x) {
      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, S = r(), j = S.theme, M = S.realToken, U = S.hashId, ee = S.token, Y = S.cssVar, B = o(), F = B.rootPrefixCls, J = B.iconPrefixCls, N = t(), A = Y ? "css" : "js", R = nm(function() {
        var K = /* @__PURE__ */ new Set();
        return Y && Object.keys(g.unitless || {}).forEach(function(ie) {
          K.add(Ro(ie, Y.prefix)), K.add(Ro(ie, Al(b, Y.prefix)));
        }), Yg(A, K);
      }, [A, b, Y == null ? void 0 : Y.prefix]), k = Zg(A), H = k.max, D = k.min, q = {
        theme: j,
        token: ee,
        hashId: U,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: g.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && na(Z(Z({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", F]
      }), function() {
        return i(ee, {
          prefix: {
            rootPrefixCls: F,
            iconPrefixCls: J
          },
          csp: N
        });
      });
      var te = na(Z(Z({}, q), {}, {
        path: [_, x, J]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var K = Qg(ee), ie = K.token, ae = K.flush, le = Il(b, M, f), we = ".".concat(x), me = $l(b, M, le, {
          deprecatedTokens: g.deprecatedTokens
        });
        Y && le && Ce(le) === "object" && Object.keys(le).forEach(function(Ye) {
          le[Ye] = "var(".concat(Ro(Ye, Al(b, Y.prefix)), ")");
        });
        var Pe = Sn(ie, {
          componentCls: we,
          prefixCls: x,
          iconCls: ".".concat(J),
          antCls: ".".concat(F),
          calc: R,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: D
        }, Y ? le : me), Ae = m(Pe, {
          hashId: U,
          prefixCls: x,
          rootPrefixCls: F,
          iconPrefixCls: J
        });
        ae(b, me);
        var he = typeof s == "function" ? s(Pe, x, T, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : he, Ae];
      });
      return [te, U];
    };
  }
  function d(h, m, f) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(h, m, f, Z({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), y = function(_) {
      var E = _.prefixCls, x = _.rootCls, T = x === void 0 ? E : x;
      return p(E, T), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const cc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], im = "5.24.6";
function hs(e) {
  return e >= 0 && e <= 255;
}
function Rr(e, n) {
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
    const u = Math.round((t - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), h = Math.round((o - c * (1 - l)) / l);
    if (hs(u) && hs(d) && hs(h))
      return new Qe({
        r: u,
        g: d,
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
var sm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function C0(e) {
  const {
    override: n
  } = e, t = sm(e, ["override"]), r = Object.assign({}, n);
  Object.keys(Lr).forEach((h) => {
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
    colorSplit: Rr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Rr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Rr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Rr(o.colorPrimaryBg, o.colorBgContainer),
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
var kl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const w0 = {
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
}, am = {
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
}, cm = {
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
}, E0 = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = kl(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = C0(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = kl(l, ["theme"]);
    let h = d;
    u && (h = E0(Object.assign(Object.assign({}, s), d), {
      override: d
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
  } = X.useContext(y0), i = `${im}-${n || ""}`, s = t || v0, [a, c, l] = z1(s, [Lr, e], {
    salt: i,
    override: r,
    getComputedToken: E0,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: C0,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: w0,
      ignore: am,
      preserve: cm
    }
  });
  return [s, l, n ? c : "", a, o];
}
const O0 = function(e) {
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
}, T0 = () => ({
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
}), lm = (e) => ({
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
}), um = (e, n, t, r) => {
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
}, fm = (e, n) => ({
  outline: `${an(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: n ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), dm = (e, n) => ({
  "&:focus-visible": Object.assign({}, fm(e, n))
}), R0 = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, T0()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ai,
  genComponentStyleHook: hm,
  genSubStyleComponent: xm
} = om({
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
    const r = lm(e);
    return [r, {
      "&": r
    }, R0((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : sc)];
  },
  getCommonStyle: um,
  getCompUnitless: () => w0
}), pm = (e, n) => {
  const [t, r] = qr();
  return na({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [R0(e)]);
}, gm = Object.assign({}, w), {
  useId: jl
} = gm, mm = () => "", vm = typeof jl > "u" ? mm : jl;
function ym(e, n, t) {
  var r, o;
  const i = _n("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, ga), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : ga.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = vm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ya(() => {
    var l, u;
    if (!e)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((f) => {
      d[f] = Object.assign(Object.assign({}, d[f]), e.components[f]);
    });
    const h = `css-var-${c.replace(/:/g, "")}`, m = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: m
    });
  }, [s, a], (l, u) => l.some((d, h) => {
    const m = u[h];
    return !h1(d, m, !0);
  }));
}
var bm = ["children"], A0 = /* @__PURE__ */ w.createContext({});
function _m(e) {
  var n = e.children, t = Mn(e, bm);
  return /* @__PURE__ */ w.createElement(A0.Provider, {
    value: t
  }, n);
}
var Sm = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = Fr(t);
  function t() {
    return vt(this, t), n.apply(this, arguments);
  }
  return yt(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(w.Component);
function Cm(e) {
  var n = w.useReducer(function(a) {
    return a + 1;
  }, 0), t = se(n, 2), r = t[1], o = w.useRef(e), i = vn(function() {
    return o.current;
  }), s = vn(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var hn = "none", fo = "appear", ho = "enter", xo = "leave", Ml = "none", It = "prepare", zn = "start", Fn = "active", lc = "end", $0 = "prepared";
function Ll(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function wm(e, n) {
  var t = {
    animationend: Ll("Animation", "AnimationEnd"),
    transitionend: Ll("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var Em = wm(ln(), typeof window < "u" ? window : {}), P0 = {};
if (ln()) {
  var Om = document.createElement("div");
  P0 = Om.style;
}
var po = {};
function I0(e) {
  if (po[e])
    return po[e];
  var n = Em[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in P0)
        return po[e] = n[i], po[e];
    }
  return "";
}
var N0 = I0("animationend"), k0 = I0("transitionend"), j0 = !!(N0 && k0), Dl = N0 || "animationend", Bl = k0 || "transitionend";
function Hl(e, n) {
  if (!e) return null;
  if (Ce(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const Tm = function(e) {
  var n = ve();
  function t(o) {
    o && (o.removeEventListener(Bl, e), o.removeEventListener(Dl, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Bl, e), o.addEventListener(Dl, e), n.current = o);
  }
  return w.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var M0 = ln() ? Qd : Ve;
const Rm = function() {
  var e = w.useRef(null);
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
  return w.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var Am = [It, zn, Fn, lc], $m = [It, $0], L0 = !1, Pm = !0;
function D0(e) {
  return e === Fn || e === lc;
}
const Im = function(e, n, t) {
  var r = Br(Ml), o = se(r, 2), i = o[0], s = o[1], a = Rm(), c = se(a, 2), l = c[0], u = c[1];
  function d() {
    s(It, !0);
  }
  var h = n ? $m : Am;
  return M0(function() {
    if (i !== Ml && i !== lc) {
      var m = h.indexOf(i), f = h[m + 1], g = t(i);
      g === L0 ? s(f, !0) : f && l(function(p) {
        function y() {
          p.isCanceled() || s(f, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function Nm(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, h = r.onAppearPrepare, m = r.onEnterPrepare, f = r.onLeavePrepare, g = r.onAppearStart, p = r.onEnterStart, y = r.onLeaveStart, b = r.onAppearActive, _ = r.onEnterActive, E = r.onLeaveActive, x = r.onAppearEnd, T = r.onEnterEnd, S = r.onLeaveEnd, j = r.onVisibleChanged, M = Br(), U = se(M, 2), ee = U[0], Y = U[1], B = Cm(hn), F = se(B, 2), J = F[0], N = F[1], A = Br(null), R = se(A, 2), k = R[0], H = R[1], D = J(), q = ve(!1), te = ve(null);
  function K() {
    return t();
  }
  var ie = ve(!1);
  function ae() {
    N(hn), H(null, !0);
  }
  var le = vn(function(xe) {
    var ue = J();
    if (ue !== hn) {
      var Ke = K();
      if (!(xe && !xe.deadline && xe.target !== Ke)) {
        var ft = ie.current, lt;
        ue === fo && ft ? lt = x == null ? void 0 : x(Ke, xe) : ue === ho && ft ? lt = T == null ? void 0 : T(Ke, xe) : ue === xo && ft && (lt = S == null ? void 0 : S(Ke, xe)), ft && lt !== !1 && ae();
      }
    }
  }), we = Tm(le), me = se(we, 1), Pe = me[0], Ae = function(ue) {
    switch (ue) {
      case fo:
        return Q(Q(Q({}, It, h), zn, g), Fn, b);
      case ho:
        return Q(Q(Q({}, It, m), zn, p), Fn, _);
      case xo:
        return Q(Q(Q({}, It, f), zn, y), Fn, E);
      default:
        return {};
    }
  }, he = w.useMemo(function() {
    return Ae(D);
  }, [D]), Ye = Im(D, !e, function(xe) {
    if (xe === It) {
      var ue = he[It];
      return ue ? ue(K()) : L0;
    }
    if ($ in he) {
      var Ke;
      H(((Ke = he[$]) === null || Ke === void 0 ? void 0 : Ke.call(he, K(), null)) || null);
    }
    return $ === Fn && D !== hn && (Pe(K()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      le({
        deadline: !0
      });
    }, u))), $ === $0 && ae(), Pm;
  }), C = se(Ye, 2), re = C[0], $ = C[1], V = D0($);
  ie.current = V;
  var I = ve(null);
  M0(function() {
    if (!(q.current && I.current === n)) {
      Y(n);
      var xe = q.current;
      q.current = !0;
      var ue;
      !xe && n && a && (ue = fo), xe && n && i && (ue = ho), (xe && !n && l || !xe && d && !n && l) && (ue = xo);
      var Ke = Ae(ue);
      ue && (e || Ke[It]) ? (N(ue), re()) : N(hn), I.current = n;
    }
  }, [n]), Ve(function() {
    // Cancel appear
    (D === fo && !a || // Cancel enter
    D === ho && !i || // Cancel leave
    D === xo && !l) && N(hn);
  }, [a, i, l]), Ve(function() {
    return function() {
      q.current = !1, clearTimeout(te.current);
    };
  }, []);
  var ne = w.useRef(!1);
  Ve(function() {
    ee && (ne.current = !0), ee !== void 0 && D === hn && ((ne.current || ee) && (j == null || j(ee)), ne.current = !0);
  }, [ee, D]);
  var ot = k;
  return he[It] && $ === zn && (ot = Z({
    transition: "none"
  }, ot)), [D, $, ot, ee ?? n];
}
function km(e) {
  var n = e;
  Ce(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, h = o.motionName, m = o.leavedClassName, f = o.eventProps, g = w.useContext(A0), p = g.motion, y = t(o, p), b = ve(), _ = ve();
    function E() {
      try {
        return b.current instanceof HTMLElement ? b.current : n1(_.current);
      } catch {
        return null;
      }
    }
    var x = Nm(y, a, E, o), T = se(x, 4), S = T[0], j = T[1], M = T[2], U = T[3], ee = w.useRef(U);
    U && (ee.current = !0);
    var Y = w.useCallback(function(R) {
      b.current = R, Af(i, R);
    }, [i]), B, F = Z(Z({}, f), {}, {
      visible: a
    });
    if (!d)
      B = null;
    else if (S === hn)
      U ? B = d(Z({}, F), Y) : !l && ee.current && m ? B = d(Z(Z({}, F), {}, {
        className: m
      }), Y) : u || !l && !m ? B = d(Z(Z({}, F), {}, {
        style: {
          display: "none"
        }
      }), Y) : B = null;
    else {
      var J;
      j === It ? J = "prepare" : D0(j) ? J = "active" : j === zn && (J = "start");
      var N = Hl(h, "".concat(S, "-").concat(J));
      B = d(Z(Z({}, F), {}, {
        className: Se(Hl(h, S), Q(Q({}, N, N && J), h, typeof h == "string")),
        style: M
      }), Y);
    }
    if (/* @__PURE__ */ w.isValidElement(B) && $f(B)) {
      var A = If(B);
      A || (B = /* @__PURE__ */ w.cloneElement(B, {
        ref: Y
      }));
    }
    return /* @__PURE__ */ w.createElement(Sm, {
      ref: _
    }, B);
  });
  return r.displayName = "CSSMotion", r;
}
const $i = km(j0);
var va = "add", ya = "keep", ba = "remove", xs = "removed";
function jm(e) {
  var n;
  return e && Ce(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, Z(Z({}, n), {}, {
    key: String(n.key)
  });
}
function _a() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(jm);
}
function Mm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = _a(e), s = _a(n);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var h = s[d];
      if (h.key === l.key) {
        r < d && (t = t.concat(s.slice(r, d).map(function(m) {
          return Z(Z({}, m), {}, {
            status: va
          });
        })), r = d), t.push(Z(Z({}, h), {}, {
          status: ya
        })), r += 1, u = !0;
        break;
      }
    }
    u || t.push(Z(Z({}, l), {}, {
      status: ba
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return Z(Z({}, l), {}, {
      status: va
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
      var d = u.key, h = u.status;
      return d !== l || h !== ba;
    }), t.forEach(function(u) {
      u.key === l && (u.status = ya);
    });
  }), t;
}
var Lm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Dm = ["status"], Bm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Hm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $i, t = /* @__PURE__ */ function(r) {
    ur(i, r);
    var o = Fr(i);
    function i() {
      var s;
      vt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), Q(Pn(s), "state", {
        keyEntities: []
      }), Q(Pn(s), "removeKey", function(u) {
        s.setState(function(d) {
          var h = d.keyEntities.map(function(m) {
            return m.key !== u ? m : Z(Z({}, m), {}, {
              status: xs
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var d = s.state.keyEntities, h = d.filter(function(m) {
            var f = m.status;
            return f !== xs;
          }).length;
          h === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return yt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, h = l.onVisibleChanged;
        l.onAllRemoved;
        var m = Mn(l, Lm), f = u || w.Fragment, g = {};
        return Bm.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ w.createElement(f, m, c.map(function(p, y) {
          var b = p.status, _ = Mn(p, Dm), E = b === va || b === ya;
          return /* @__PURE__ */ w.createElement(n, xt({}, g, {
            key: _.key,
            visible: E,
            eventProps: _,
            onVisibleChanged: function(T) {
              h == null || h(T, {
                key: _.key
              }), T || a.removeKey(_.key);
            }
          }), function(x, T) {
            return d(Z(Z({}, x), {}, {
              index: y
            }), T);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = _a(l), h = Mm(u, d);
        return {
          keyEntities: h.filter(function(m) {
            var f = u.find(function(g) {
              var p = g.key;
              return m.key === p;
            });
            return !(f && f.status === xs && m.status === ba);
          })
        };
      }
    }]), i;
  }(w.Component);
  return Q(t, "defaultProps", {
    component: "div"
  }), t;
}
Hm(j0);
function zm(e) {
  const {
    children: n
  } = e, [, t] = qr(), {
    motion: r
  } = t, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(_m, {
    motion: r
  }, n) : n;
}
const B0 = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return _n("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (B0.displayName = "PropWarning");
const Fm = process.env.NODE_ENV !== "production" ? B0 : () => null;
var Vm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Sa = !1;
process.env.NODE_ENV;
const Um = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let H0;
function qm() {
  return H0 || Go;
}
function Wm(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const Gm = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (H0 = n), r && Wm(r) && (process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Fg(qm(), r));
}, Xm = (e) => {
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
    virtual: h,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: f,
    popupOverflow: g,
    legacyLocale: p,
    parentContext: y,
    iconPrefixCls: b,
    theme: _,
    componentDisabled: E,
    segmented: x,
    statistic: T,
    spin: S,
    calendar: j,
    carousel: M,
    cascader: U,
    collapse: ee,
    typography: Y,
    checkbox: B,
    descriptions: F,
    divider: J,
    drawer: N,
    skeleton: A,
    steps: R,
    image: k,
    layout: H,
    list: D,
    mentions: q,
    modal: te,
    progress: K,
    result: ie,
    slider: ae,
    breadcrumb: le,
    menu: we,
    pagination: me,
    input: Pe,
    textArea: Ae,
    empty: he,
    badge: Ye,
    radio: C,
    rate: re,
    switch: $,
    transfer: V,
    avatar: I,
    message: ne,
    tag: ot,
    table: xe,
    card: ue,
    tabs: Ke,
    timeline: ft,
    timePicker: lt,
    upload: Qt,
    notification: Rt,
    tree: Zt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: en,
    flex: tn,
    wave: nn,
    dropdown: zt,
    warning: Ie,
    tour: st,
    tooltip: Ft,
    popover: z,
    popconfirm: O,
    floatButtonGroup: ye,
    variant: $e,
    inputNumber: De,
    treeSelect: be
  } = e, at = w.useCallback((He, v) => {
    const {
      prefixCls: L
    } = e;
    if (v)
      return v;
    const W = L || y.getPrefixCls("");
    return He ? `${W}-${He}` : W;
  }, [y.getPrefixCls, e.prefixCls]), Be = b || y.iconPrefixCls || sc, At = t || y.csp;
  pm(Be, At);
  const bt = ym(_, y.theme, {
    prefixCls: at("")
  });
  process.env.NODE_ENV !== "production" && (Sa = Sa || !!bt);
  const fn = {
    csp: At,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: d,
    virtual: h,
    popupMatchSelectWidth: f ?? m,
    popupOverflow: g,
    getPrefixCls: at,
    iconPrefixCls: Be,
    theme: bt,
    segmented: x,
    statistic: T,
    spin: S,
    calendar: j,
    carousel: M,
    cascader: U,
    collapse: ee,
    typography: Y,
    checkbox: B,
    descriptions: F,
    divider: J,
    drawer: N,
    skeleton: A,
    steps: R,
    image: k,
    input: Pe,
    textArea: Ae,
    layout: H,
    list: D,
    mentions: q,
    modal: te,
    progress: K,
    result: ie,
    slider: ae,
    breadcrumb: le,
    menu: we,
    pagination: me,
    empty: he,
    badge: Ye,
    radio: C,
    rate: re,
    switch: $,
    transfer: V,
    avatar: I,
    message: ne,
    tag: ot,
    table: xe,
    card: ue,
    tabs: Ke,
    timeline: ft,
    timePicker: lt,
    upload: Qt,
    notification: Rt,
    tree: Zt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: en,
    flex: tn,
    wave: nn,
    dropdown: zt,
    warning: Ie,
    tour: st,
    tooltip: Ft,
    popover: z,
    popconfirm: O,
    floatButtonGroup: ye,
    variant: $e,
    inputNumber: De,
    treeSelect: be
  };
  process.env.NODE_ENV !== "production" && _n("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Vt = Object.assign({}, y);
  Object.keys(fn).forEach((He) => {
    fn[He] !== void 0 && (Vt[He] = fn[He]);
  }), Um.forEach((He) => {
    const v = e[He];
    v && (Vt[He] = v);
  }), typeof r < "u" && (Vt.button = Object.assign({
    autoInsertSpace: r
  }, Vt.button));
  const Me = Ya(() => Vt, Vt, (He, v) => {
    const L = Object.keys(He), W = Object.keys(v);
    return L.length !== W.length || L.some((oe) => He[oe] !== v[oe]);
  }), {
    layer: Ze
  } = w.useContext(Vr), $t = w.useMemo(() => ({
    prefixCls: Be,
    csp: At,
    layer: Ze ? "antd" : void 0
  }), [Be, At, Ze]);
  let je = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Fm, {
    dropdownMatchSelectWidth: m
  }), n);
  const Jr = w.useMemo(() => {
    var He, v, L, W;
    return _g(((He = Ri.Form) === null || He === void 0 ? void 0 : He.defaultValidateMessages) || {}, ((L = (v = Me.locale) === null || v === void 0 ? void 0 : v.Form) === null || L === void 0 ? void 0 : L.defaultValidateMessages) || {}, ((W = Me.form) === null || W === void 0 ? void 0 : W.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Me, s == null ? void 0 : s.validateMessages]);
  Object.keys(Jr).length > 0 && (je = /* @__PURE__ */ w.createElement(Cg.Provider, {
    value: Jr
  }, je)), a && (je = /* @__PURE__ */ w.createElement(h0, {
    locale: a,
    _ANT_MARK__: d0
  }, je)), je = /* @__PURE__ */ w.createElement(oc.Provider, {
    value: $t
  }, je), c && (je = /* @__PURE__ */ w.createElement(Ug, {
    size: c
  }, je)), je = /* @__PURE__ */ w.createElement(zm, null, je);
  const Wi = w.useMemo(() => {
    const He = bt || {}, {
      algorithm: v,
      token: L,
      components: W,
      cssVar: oe
    } = He, _e = Vm(He, ["algorithm", "token", "components", "cssVar"]), Ee = v && (!Array.isArray(v) || v.length > 0) ? Js(v) : v0, pe = {};
    Object.entries(W || {}).forEach((it) => {
      let [Le, ze] = it;
      const Fe = Object.assign({}, ze);
      "algorithm" in Fe && (Fe.algorithm === !0 ? Fe.theme = Ee : (Array.isArray(Fe.algorithm) || typeof Fe.algorithm == "function") && (Fe.theme = Js(Fe.algorithm)), delete Fe.algorithm), pe[Le] = Fe;
    });
    const de = Object.assign(Object.assign({}, Lr), L);
    return Object.assign(Object.assign({}, _e), {
      theme: Ee,
      token: de,
      components: pe,
      override: Object.assign({
        override: de
      }, pe),
      cssVar: oe
    });
  }, [bt]);
  return _ && (je = /* @__PURE__ */ w.createElement(y0.Provider, {
    value: Wi
  }, je)), Me.warning && (je = /* @__PURE__ */ w.createElement(u0.Provider, {
    value: Me.warning
  }, je)), E !== void 0 && (je = /* @__PURE__ */ w.createElement(Vg, {
    disabled: E
  }, je)), /* @__PURE__ */ w.createElement(Lt.Provider, {
    value: Me
  }, je);
}, dr = (e) => {
  const n = w.useContext(Lt), t = w.useContext(f0);
  return /* @__PURE__ */ w.createElement(Xm, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
dr.ConfigContext = Lt;
dr.SizeContext = nr;
dr.config = Gm;
dr.useConfig = qg;
Object.defineProperty(dr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), nr)
});
process.env.NODE_ENV !== "production" && (dr.displayName = "ConfigProvider");
function z0(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function Ym(e) {
  return z0(e) instanceof ShadowRoot;
}
function Km(e) {
  return Ym(e) ? z0(e) : null;
}
function Jm(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Qm(e, n) {
  bn(e, "[@ant-design/icons] ".concat(n));
}
function zl(e) {
  return Ce(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ce(e.icon) === "object" || typeof e.icon == "function");
}
function Fl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Jm(t)] = r;
    }
    return n;
  }, {});
}
function Ca(e, n, t) {
  return t ? /* @__PURE__ */ X.createElement(e.tag, Z(Z({
    key: n
  }, Fl(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Ca(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ X.createElement(e.tag, Z({
    key: n
  }, Fl(e.attrs)), (e.children || []).map(function(r, o) {
    return Ca(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function F0(e) {
  return Dr(e)[0];
}
function V0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Zm = `
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
`, ev = function(n) {
  var t = Et(oc), r = t.csp, o = t.prefixCls, i = t.layer, s = Zm;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ve(function() {
    var a = n.current, c = Km(a);
    In(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, tv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ir = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function nv(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  Ir.primaryColor = n, Ir.secondaryColor = t || F0(n), Ir.calculated = !!t;
}
function rv() {
  return Z({}, Ir);
}
var hr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = Mn(n, tv), l = w.useRef(), u = Ir;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || F0(s)
  }), ev(l), Qm(zl(t), "icon should be icon definiton, but got ".concat(t)), !zl(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = Z(Z({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Ca(d.icon, "svg-".concat(d.name), Z(Z({
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
hr.displayName = "IconReact";
hr.getTwoToneColors = rv;
hr.setTwoToneColors = nv;
function U0(e) {
  var n = V0(e), t = se(n, 2), r = t[0], o = t[1];
  return hr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ov() {
  var e = hr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var iv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
U0(Wo.primary);
var un = /* @__PURE__ */ w.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Mn(e, iv), u = w.useContext(oc), d = u.prefixCls, h = d === void 0 ? "anticon" : d, m = u.rootClassName, f = Se(m, h, Q(Q({}, "".concat(h, "-").concat(r.name), !!r.name), "".concat(h, "-spin"), !!o || r.name === "loading"), t), g = s;
  g === void 0 && a && (g = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = V0(c), b = se(y, 2), _ = b[0], E = b[1];
  return /* @__PURE__ */ w.createElement("span", xt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: g,
    onClick: a,
    className: f
  }), /* @__PURE__ */ w.createElement(hr, {
    icon: r,
    primaryColor: _,
    secondaryColor: E,
    style: p
  }));
});
un.displayName = "AntdIcon";
un.getTwoToneColor = ov;
un.setTwoToneColor = U0;
var sv = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: Vx
  }));
}, q0 = /* @__PURE__ */ w.forwardRef(sv);
process.env.NODE_ENV !== "production" && (q0.displayName = "CheckCircleFilled");
var av = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: Ux
  }));
}, W0 = /* @__PURE__ */ w.forwardRef(av);
process.env.NODE_ENV !== "production" && (W0.displayName = "CloseCircleFilled");
var cv = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: qx
  }));
}, G0 = /* @__PURE__ */ w.forwardRef(cv);
process.env.NODE_ENV !== "production" && (G0.displayName = "CloseOutlined");
var lv = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: Wx
  }));
}, X0 = /* @__PURE__ */ w.forwardRef(lv);
process.env.NODE_ENV !== "production" && (X0.displayName = "ExclamationCircleFilled");
var uv = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: Gx
  }));
}, Y0 = /* @__PURE__ */ w.forwardRef(uv);
process.env.NODE_ENV !== "production" && (Y0.displayName = "InfoCircleFilled");
var fv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, dv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, hv = "".concat(fv, " ").concat(dv).split(/[\s\n]+/), xv = "aria-", pv = "data-";
function Vl(e, n) {
  return e.indexOf(n) === 0;
}
function gv(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = Z({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Vl(o, xv)) || // Data
    t.data && Vl(o, pv) || // Attr
    t.attr && hv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function mv(e) {
  return e && /* @__PURE__ */ X.isValidElement(e) && e.type === X.Fragment;
}
const K0 = (e, n, t) => /* @__PURE__ */ X.isValidElement(e) ? /* @__PURE__ */ X.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function uc(e, n) {
  return K0(e, e, n);
}
const go = (e, n, t, r, o) => ({
  background: e,
  border: `${an(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), vv = (e) => {
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
    colorTextHeading: h,
    withDescriptionPadding: m,
    defaultPadding: f
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, O0(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: f,
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
      padding: m,
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
        color: d
      }
    },
    [`${n}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, yv = (e) => {
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
    colorInfoBorder: h,
    colorInfoBg: m
  } = e;
  return {
    [n]: {
      "&-success": go(o, r, t, e, n),
      "&-info": go(m, h, d, e, n),
      "&-warning": go(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, go(u, l, c, e, n)), {
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
        lineHeight: an(i),
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
}, _v = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Sv = Ai("Alert", (e) => [vv(e), yv(e), bv(e)], _v);
var Ul = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Cv = {
  success: q0,
  info: Y0,
  error: W0,
  warning: X0
}, wv = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = Cv[r] || null;
  return n ? K0(n, /* @__PURE__ */ w.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: Se(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${t}-icon`
  });
}, Ev = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(G0, null) : r;
  return n ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, fc = /* @__PURE__ */ w.forwardRef((e, n) => {
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
    afterClose: h,
    showIcon: m,
    closable: f,
    closeText: g,
    closeIcon: p,
    action: y,
    id: b
  } = e, _ = Ul(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, x] = w.useState(!1);
  process.env.NODE_ENV !== "production" && _n("Alert").deprecated(!g, "closeText", "closable.closeIcon");
  const T = w.useRef(null);
  w.useImperativeHandle(n, () => ({
    nativeElement: T.current
  }));
  const {
    getPrefixCls: S,
    direction: j,
    closable: M,
    closeIcon: U,
    className: ee,
    style: Y
  } = ac("alert"), B = S("alert", r), [F, J, N] = Sv(B), A = (ie) => {
    var ae;
    x(!0), (ae = e.onClose) === null || ae === void 0 || ae.call(e, ie);
  }, R = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), k = w.useMemo(() => typeof f == "object" && f.closeIcon || g ? !0 : typeof f == "boolean" ? f : p !== !1 && p !== null && p !== void 0 ? !0 : !!M, [g, p, f, M]), H = i && m === void 0 ? !0 : m, D = Se(B, `${B}-${R}`, {
    [`${B}-with-description`]: !!t,
    [`${B}-no-icon`]: !H,
    [`${B}-banner`]: !!i,
    [`${B}-rtl`]: j === "rtl"
  }, ee, s, a, N, J), q = gv(_, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof f == "object" && f.closeIcon ? f.closeIcon : g || (p !== void 0 ? p : typeof M == "object" && M.closeIcon ? M.closeIcon : U), [p, f, g, U]), K = w.useMemo(() => {
    const ie = f ?? M;
    if (typeof ie == "object") {
      const {
        closeIcon: ae
      } = ie;
      return Ul(ie, ["closeIcon"]);
    }
    return {};
  }, [f, M]);
  return F(/* @__PURE__ */ w.createElement($i, {
    visible: !E,
    motionName: `${B}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ie) => ({
      maxHeight: ie.offsetHeight
    }),
    onLeaveEnd: h
  }, (ie, ae) => {
    let {
      className: le,
      style: we
    } = ie;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: Ci(T, ae),
      "data-show": !E,
      className: Se(D, le),
      style: Object.assign(Object.assign(Object.assign({}, Y), c), we),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, q), H ? /* @__PURE__ */ w.createElement(wv, {
      description: t,
      icon: e.icon,
      prefixCls: B,
      type: R
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${B}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-message`
    }, o) : null, t ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-description`
    }, t) : null), y ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-action`
    }, y) : null, /* @__PURE__ */ w.createElement(Ev, {
      isClosable: k,
      prefixCls: B,
      closeIcon: te,
      handleClose: A,
      ariaProps: K
    }));
  }));
});
process.env.NODE_ENV !== "production" && (fc.displayName = "Alert");
function Ov(e, n, t) {
  return n = Qn(n), Nf(e, Ka() ? Reflect.construct(n, t || [], Qn(e).constructor) : n.apply(e, t));
}
let Tv = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return vt(this, n), t = Ov(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return ur(n, e), yt(n, [{
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
      return a ? /* @__PURE__ */ w.createElement(fc, {
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
const J0 = fc;
J0.ErrorBoundary = Tv;
var Rv = function(n, t) {
  return /* @__PURE__ */ w.createElement(un, xt({}, n, {
    ref: t,
    icon: Xx
  }));
}, Q0 = /* @__PURE__ */ w.forwardRef(Rv);
process.env.NODE_ENV !== "production" && (Q0.displayName = "LoadingOutlined");
function Hr() {
  Hr = function() {
    return n;
  };
  var e, n = {}, t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function(N, A, R) {
    N[A] = R.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(N, A, R) {
    return Object.defineProperty(N, A, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[A];
  }
  try {
    l({}, "");
  } catch {
    l = function(R, k, H) {
      return R[k] = H;
    };
  }
  function u(N, A, R, k) {
    var H = A && A.prototype instanceof y ? A : y, D = Object.create(H.prototype), q = new F(k || []);
    return o(D, "_invoke", {
      value: U(N, R, q)
    }), D;
  }
  function d(N, A, R) {
    try {
      return {
        type: "normal",
        arg: N.call(A, R)
      };
    } catch (k) {
      return {
        type: "throw",
        arg: k
      };
    }
  }
  n.wrap = u;
  var h = "suspendedStart", m = "suspendedYield", f = "executing", g = "completed", p = {};
  function y() {
  }
  function b() {
  }
  function _() {
  }
  var E = {};
  l(E, s, function() {
    return this;
  });
  var x = Object.getPrototypeOf, T = x && x(x(J([])));
  T && T !== t && r.call(T, s) && (E = T);
  var S = _.prototype = y.prototype = Object.create(E);
  function j(N) {
    ["next", "throw", "return"].forEach(function(A) {
      l(N, A, function(R) {
        return this._invoke(A, R);
      });
    });
  }
  function M(N, A) {
    function R(H, D, q, te) {
      var K = d(N[H], N, D);
      if (K.type !== "throw") {
        var ie = K.arg, ae = ie.value;
        return ae && Ce(ae) == "object" && r.call(ae, "__await") ? A.resolve(ae.__await).then(function(le) {
          R("next", le, q, te);
        }, function(le) {
          R("throw", le, q, te);
        }) : A.resolve(ae).then(function(le) {
          ie.value = le, q(ie);
        }, function(le) {
          return R("throw", le, q, te);
        });
      }
      te(K.arg);
    }
    var k;
    o(this, "_invoke", {
      value: function(D, q) {
        function te() {
          return new A(function(K, ie) {
            R(D, q, K, ie);
          });
        }
        return k = k ? k.then(te, te) : te();
      }
    });
  }
  function U(N, A, R) {
    var k = h;
    return function(H, D) {
      if (k === f) throw Error("Generator is already running");
      if (k === g) {
        if (H === "throw") throw D;
        return {
          value: e,
          done: !0
        };
      }
      for (R.method = H, R.arg = D; ; ) {
        var q = R.delegate;
        if (q) {
          var te = ee(q, R);
          if (te) {
            if (te === p) continue;
            return te;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (k === h) throw k = g, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        k = f;
        var K = d(N, A, R);
        if (K.type === "normal") {
          if (k = R.done ? g : m, K.arg === p) continue;
          return {
            value: K.arg,
            done: R.done
          };
        }
        K.type === "throw" && (k = g, R.method = "throw", R.arg = K.arg);
      }
    };
  }
  function ee(N, A) {
    var R = A.method, k = N.iterator[R];
    if (k === e) return A.delegate = null, R === "throw" && N.iterator.return && (A.method = "return", A.arg = e, ee(N, A), A.method === "throw") || R !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + R + "' method")), p;
    var H = d(k, N.iterator, A.arg);
    if (H.type === "throw") return A.method = "throw", A.arg = H.arg, A.delegate = null, p;
    var D = H.arg;
    return D ? D.done ? (A[N.resultName] = D.value, A.next = N.nextLoc, A.method !== "return" && (A.method = "next", A.arg = e), A.delegate = null, p) : D : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, p);
  }
  function Y(N) {
    var A = {
      tryLoc: N[0]
    };
    1 in N && (A.catchLoc = N[1]), 2 in N && (A.finallyLoc = N[2], A.afterLoc = N[3]), this.tryEntries.push(A);
  }
  function B(N) {
    var A = N.completion || {};
    A.type = "normal", delete A.arg, N.completion = A;
  }
  function F(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(Y, this), this.reset(!0);
  }
  function J(N) {
    if (N || N === "") {
      var A = N[s];
      if (A) return A.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var R = -1, k = function H() {
          for (; ++R < N.length; ) if (r.call(N, R)) return H.value = N[R], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return k.next = k;
      }
    }
    throw new TypeError(Ce(N) + " is not iterable");
  }
  return b.prototype = _, o(S, "constructor", {
    value: _,
    configurable: !0
  }), o(_, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = l(_, c, "GeneratorFunction"), n.isGeneratorFunction = function(N) {
    var A = typeof N == "function" && N.constructor;
    return !!A && (A === b || (A.displayName || A.name) === "GeneratorFunction");
  }, n.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, _) : (N.__proto__ = _, l(N, c, "GeneratorFunction")), N.prototype = Object.create(S), N;
  }, n.awrap = function(N) {
    return {
      __await: N
    };
  }, j(M.prototype), l(M.prototype, a, function() {
    return this;
  }), n.AsyncIterator = M, n.async = function(N, A, R, k, H) {
    H === void 0 && (H = Promise);
    var D = new M(u(N, A, R, k), H);
    return n.isGeneratorFunction(A) ? D : D.next().then(function(q) {
      return q.done ? q.value : D.next();
    });
  }, j(S), l(S, c, "Generator"), l(S, s, function() {
    return this;
  }), l(S, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(N) {
    var A = Object(N), R = [];
    for (var k in A) R.push(k);
    return R.reverse(), function H() {
      for (; R.length; ) {
        var D = R.pop();
        if (D in A) return H.value = D, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, n.values = J, F.prototype = {
    constructor: F,
    reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !A) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
    },
    stop: function() {
      this.done = !0;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw") throw A.arg;
      return this.rval;
    },
    dispatchException: function(A) {
      if (this.done) throw A;
      var R = this;
      function k(ie, ae) {
        return q.type = "throw", q.arg = A, R.next = ie, ae && (R.method = "next", R.arg = e), !!ae;
      }
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var D = this.tryEntries[H], q = D.completion;
        if (D.tryLoc === "root") return k("end");
        if (D.tryLoc <= this.prev) {
          var te = r.call(D, "catchLoc"), K = r.call(D, "finallyLoc");
          if (te && K) {
            if (this.prev < D.catchLoc) return k(D.catchLoc, !0);
            if (this.prev < D.finallyLoc) return k(D.finallyLoc);
          } else if (te) {
            if (this.prev < D.catchLoc) return k(D.catchLoc, !0);
          } else {
            if (!K) throw Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc) return k(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(A, R) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var H = this.tryEntries[k];
        if (H.tryLoc <= this.prev && r.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
          var D = H;
          break;
        }
      }
      D && (A === "break" || A === "continue") && D.tryLoc <= R && R <= D.finallyLoc && (D = null);
      var q = D ? D.completion : {};
      return q.type = A, q.arg = R, D ? (this.method = "next", this.next = D.finallyLoc, p) : this.complete(q);
    },
    complete: function(A, R) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && R && (this.next = R), p;
    },
    finish: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var k = this.tryEntries[R];
        if (k.finallyLoc === A) return this.complete(k.completion, k.afterLoc), B(k), p;
      }
    },
    catch: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var k = this.tryEntries[R];
        if (k.tryLoc === A) {
          var H = k.completion;
          if (H.type === "throw") {
            var D = H.arg;
            B(k);
          }
          return D;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(A, R, k) {
      return this.delegate = {
        iterator: J(A),
        resultName: R,
        nextLoc: k
      }, this.method === "next" && (this.arg = e), p;
    }
  }, n;
}
function ql(e, n, t, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void t(l);
  }
  a.done ? n(c) : Promise.resolve(c).then(r, o);
}
function Z0(e) {
  return function() {
    var n = this, t = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(n, t);
      function s(c) {
        ql(i, r, o, s, a, "next", c);
      }
      function a(c) {
        ql(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var Wr = Z({}, Au), Av = Wr.version, ps = Wr.render, $v = Wr.unmountComponentAtNode, Pi;
try {
  var Pv = Number((Av || "").split(".")[0]);
  Pv >= 18 && (Pi = Wr.createRoot);
} catch {
}
function Wl(e) {
  var n = Wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  n && Ce(n) === "object" && (n.usingClientEntryPoint = e);
}
var Yo = "__rc_react_root__";
function Iv(e, n) {
  Wl(!0);
  var t = n[Yo] || Pi(n);
  Wl(!1), t.render(e), n[Yo] = t;
}
function Nv(e, n) {
  ps == null || ps(e, n);
}
function kv(e, n) {
  if (Pi) {
    Iv(e, n);
    return;
  }
  Nv(e, n);
}
function jv(e) {
  return wa.apply(this, arguments);
}
function wa() {
  return wa = Z0(/* @__PURE__ */ Hr().mark(function e(n) {
    return Hr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = n[Yo]) === null || o === void 0 || o.unmount(), delete n[Yo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), wa.apply(this, arguments);
}
function Mv(e) {
  $v(e);
}
function Lv(e) {
  return Ea.apply(this, arguments);
}
function Ea() {
  return Ea = Z0(/* @__PURE__ */ Hr().mark(function e(n) {
    return Hr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Pi === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", jv(n));
        case 2:
          Mv(n);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ea.apply(this, arguments);
}
const Dv = (e, n) => {
  if (process.env.NODE_ENV !== "production") {
    const t = parseInt(w.version.split(".")[0], 10), r = Object.keys(Au);
    process.env.NODE_ENV !== "production" && Ur(t < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return kv(e, n), () => Lv(n);
};
let Bv = Dv;
function Hv() {
  return Bv;
}
function ed(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
const zv = function(e) {
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
}, Fv = (e) => {
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
}, Vv = hm("Wave", (e) => [Fv(e)]), td = `${Go}-wave-target`;
function gs(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Uv(e) {
  const {
    borderTopColor: n,
    borderColor: t,
    backgroundColor: r
  } = getComputedStyle(e);
  return gs(n) ? n : gs(t) ? t : gs(r) ? r : null;
}
function ms(e) {
  return Number.isNaN(e) ? 0 : e;
}
const qv = (e) => {
  const {
    className: n,
    target: t,
    component: r,
    registerUnmount: o
  } = e, i = w.useRef(null), s = w.useRef(null);
  w.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = w.useState(null), [l, u] = w.useState([]), [d, h] = w.useState(0), [m, f] = w.useState(0), [g, p] = w.useState(0), [y, b] = w.useState(0), [_, E] = w.useState(!1), x = {
    left: d,
    top: m,
    width: g,
    height: y,
    borderRadius: l.map((j) => `${j}px`).join(" ")
  };
  a && (x["--wave-color"] = a);
  function T() {
    const j = getComputedStyle(t);
    c(Uv(t));
    const M = j.position === "static", {
      borderLeftWidth: U,
      borderTopWidth: ee
    } = j;
    h(M ? t.offsetLeft : ms(-parseFloat(U))), f(M ? t.offsetTop : ms(-parseFloat(ee))), p(t.offsetWidth), b(t.offsetHeight);
    const {
      borderTopLeftRadius: Y,
      borderTopRightRadius: B,
      borderBottomLeftRadius: F,
      borderBottomRightRadius: J
    } = j;
    u([Y, B, J, F].map((N) => ms(parseFloat(N))));
  }
  if (w.useEffect(() => {
    if (t) {
      const j = mn(() => {
        T(), E(!0);
      });
      let M;
      return typeof ResizeObserver < "u" && (M = new ResizeObserver(T), M.observe(t)), () => {
        mn.cancel(j), M == null || M.disconnect();
      };
    }
  }, []), !_)
    return null;
  const S = (r === "Checkbox" || r === "Radio") && (t == null ? void 0 : t.classList.contains(td));
  return /* @__PURE__ */ w.createElement($i, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (j, M) => {
      var U, ee;
      if (M.deadline || M.propertyName === "opacity") {
        const Y = (U = i.current) === null || U === void 0 ? void 0 : U.parentElement;
        (ee = s.current) === null || ee === void 0 || ee.call(s).then(() => {
          Y == null || Y.remove();
        });
      }
      return !1;
    }
  }, (j, M) => {
    let {
      className: U
    } = j;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Ci(i, M),
      className: Se(n, U, {
        "wave-quick": S
      }),
      style: x
    });
  });
}, Wv = (e, n) => {
  var t;
  const {
    component: r
  } = n;
  if (r === "Checkbox" && !(!((t = e.querySelector("input")) === null || t === void 0) && t.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Hv();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ w.createElement(qv, Object.assign({}, n, {
    target: e,
    registerUnmount: a
  })), o);
}, Gv = (e, n, t) => {
  const {
    wave: r
  } = w.useContext(Lt), [, o, i] = qr(), s = vn((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const d = u.querySelector(`.${td}`) || u, {
      showEffect: h
    } = r || {};
    (h || Wv)(d, {
      className: n,
      token: o,
      component: t,
      event: l,
      hashId: i
    });
  }), a = w.useRef(null);
  return (l) => {
    mn.cancel(a.current), a.current = mn(() => {
      s(l);
    });
  };
}, nd = (e) => {
  const {
    children: n,
    disabled: t,
    component: r
  } = e, {
    getPrefixCls: o
  } = Et(Lt), i = ve(null), s = o("wave"), [, a] = Vv(s), c = Gv(i, Se(s, a), r);
  if (X.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || t)
      return;
    const d = (h) => {
      !zv(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(h);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [t]), !/* @__PURE__ */ X.isValidElement(n))
    return n ?? null;
  const l = $f(n) ? Ci(If(n), i) : i;
  return uc(n, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (nd.displayName = "Wave");
const Xv = (e) => {
  const n = X.useContext(nr);
  return X.useMemo(() => e ? typeof e == "string" ? e ?? n : typeof e == "function" ? e(n) : n : n, [e, n]);
}, Yv = /* @__PURE__ */ w.createContext(null), Kv = (e, n) => {
  const t = w.useContext(Yv), r = w.useMemo(() => {
    if (!t)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = t, a = o === "vertical" ? "-vertical-" : "-";
    return Se(`${e}-compact${a}item`, {
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
var Jv = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const rd = /* @__PURE__ */ w.createContext(void 0), Qv = (e) => {
  const {
    getPrefixCls: n,
    direction: t
  } = w.useContext(Lt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = Jv(e, ["prefixCls", "size", "className"]), a = n("btn-group", r), [, , c] = qr(), l = w.useMemo(() => {
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
    const d = _n("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Se(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: t === "rtl"
  }, i, c);
  return /* @__PURE__ */ w.createElement(rd.Provider, {
    value: o
  }, /* @__PURE__ */ w.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, Gl = /^[\u4E00-\u9FA5]{2}$/, Oa = Gl.test.bind(Gl);
function Xl(e) {
  return typeof e == "string";
}
function mo(e) {
  return e === "text" || e === "link";
}
function Zv(e, n) {
  if (e == null)
    return;
  const t = n ? " " : "";
  return typeof e != "string" && typeof e != "number" && Xl(e.type) && Oa(e.props.children) ? uc(e, {
    children: e.props.children.split("").join(t)
  }) : Xl(e) ? Oa(e) ? /* @__PURE__ */ X.createElement("span", null, e.split("").join(t)) : /* @__PURE__ */ X.createElement("span", null, e) : mv(e) ? /* @__PURE__ */ X.createElement("span", null, e) : e;
}
function ey(e, n) {
  let t = !1;
  const r = [];
  return X.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (t && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    t = s;
  }), X.Children.map(r, (o) => Zv(o, n));
}
["default", "primary", "danger"].concat(Yt(cc));
const Ta = /* @__PURE__ */ ir((e, n) => {
  const {
    className: t,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = Se(`${i}-icon`, t);
  return /* @__PURE__ */ X.createElement("span", {
    ref: n,
    className: s,
    style: r
  }, o);
}), Yl = /* @__PURE__ */ ir((e, n) => {
  const {
    prefixCls: t,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = Se(`${t}-loading-icon`, r);
  return /* @__PURE__ */ X.createElement(Ta, {
    prefixCls: t,
    className: s,
    style: o,
    ref: n
  }, /* @__PURE__ */ X.createElement(Q0, {
    className: i
  }));
}), vs = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ys = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ty = (e) => {
  const {
    prefixCls: n,
    loading: t,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!t;
  return r ? /* @__PURE__ */ X.createElement(Yl, {
    prefixCls: n,
    className: o,
    style: i
  }) : /* @__PURE__ */ X.createElement($i, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${n}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: vs,
    onAppearActive: ys,
    onEnterStart: vs,
    onEnterActive: ys,
    onLeaveStart: ys,
    onLeaveActive: vs
  }, (c, l) => {
    let {
      className: u,
      style: d
    } = c;
    const h = Object.assign(Object.assign({}, i), d);
    return /* @__PURE__ */ X.createElement(Yl, {
      prefixCls: n,
      className: Se(o, u),
      style: h,
      ref: l
    });
  });
}, Kl = (e, n) => ({
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
}), ny = (e) => {
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
      Kl(`${n}-primary`, o),
      Kl(`${n}-danger`, i)
    ]
  };
}, nt = Math.round;
function bs(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Jl = (e, n, t) => t === 0 ? e : e / 100;
function Cr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Ii {
  constructor(n) {
    Q(this, "isValid", !0), Q(this, "r", 0), Q(this, "g", 0), Q(this, "b", 0), Q(this, "a", 1), Q(this, "_h", void 0), Q(this, "_s", void 0), Q(this, "_l", void 0), Q(this, "_v", void 0), Q(this, "_max", void 0), Q(this, "_min", void 0), Q(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Ii)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = Cr(n.r), this.g = Cr(n.g), this.b = Cr(n.b), this.a = typeof n.a == "number" ? Cr(n.a, 1) : 1;
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
    return o[n] = Cr(t, r), o;
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
    const d = r - l / 2;
    this.r = nt((i + d) * 255), this.g = nt((s + d) * 255), this.b = nt((a + d) * 255);
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
    const s = n / 60, a = Math.floor(s), c = s - a, l = nt(r * (1 - t) * 255), u = nt(r * (1 - t * c) * 255), d = nt(r * (1 - t * (1 - c)) * 255);
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
    const t = bs(n, Jl);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = bs(n, Jl);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = bs(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? nt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var ry = ["b"], oy = ["v"], _s = function(n) {
  return Math.round(Number(n || 0));
}, iy = function(n) {
  if (n instanceof Ii)
    return n;
  if (n && Ce(n) === "object" && "h" in n && "b" in n) {
    var t = n, r = t.b, o = Mn(t, ry);
    return Z(Z({}, o), {}, {
      v: r
    });
  }
  return typeof n == "string" && /hsb/.test(n) ? n.replace(/hsb/, "hsv") : n;
}, cn = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = Fr(t);
  function t(r) {
    return vt(this, t), n.call(this, iy(r));
  }
  return yt(t, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = _s(o.s * 100), s = _s(o.b * 100), a = _s(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Mn(o, oy);
      return Z(Z({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), t;
}(Ii), sy = "rc-color-picker", Un = function(n) {
  return n instanceof cn ? n : new cn(n);
}, ay = Un("#1677ff"), od = function(n) {
  var t = n.offset, r = n.targetRef, o = n.containerRef, i = n.color, s = n.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), d = u.width, h = u.height, m = d / 2, f = h / 2, g = (t.x + m) / c, p = 1 - (t.y + f) / l, y = i.toHsb(), b = g, _ = (t.x + m) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Un(Z(Z({}, y), {}, {
          h: _ <= 0 ? 0 : _
        }));
      case "alpha":
        return Un(Z(Z({}, y), {}, {
          a: b <= 0 ? 0 : b
        }));
    }
  return Un({
    h: y.h,
    s: g <= 0 ? 0 : g,
    b: p >= 1 ? 1 : p,
    a: y.a
  });
}, id = function(n, t) {
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
}, cy = function(n) {
  var t = n.color, r = n.prefixCls, o = n.className, i = n.style, s = n.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ X.createElement("div", {
    className: Se(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ X.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: t
    }
  }));
};
function ly(e) {
  var n = "touches" in e ? e.touches[0] : e, t = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: n.pageX - t,
    pageY: n.pageY - r
  };
}
function sd(e) {
  var n = e.targetRef, t = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = ut({
    x: 0,
    y: 0
  }), u = se(l, 2), d = u[0], h = u[1], m = ve(null), f = ve(null);
  Ve(function() {
    h(s());
  }, [a]), Ve(function() {
    return function() {
      document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", f.current), m.current = null, f.current = null;
    };
  }, []);
  var g = function(E) {
    var x = ly(E), T = x.pageX, S = x.pageY, j = t.current.getBoundingClientRect(), M = j.x, U = j.y, ee = j.width, Y = j.height, B = n.current.getBoundingClientRect(), F = B.width, J = B.height, N = F / 2, A = J / 2, R = Math.max(0, Math.min(T - M, ee)) - N, k = Math.max(0, Math.min(S - U, Y)) - A, H = {
      x: R,
      y: r === "x" ? d.y : k
    };
    if (F === 0 && J === 0 || F !== J)
      return !1;
    o == null || o(H);
  }, p = function(E) {
    E.preventDefault(), g(E);
  }, y = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", f.current), m.current = null, f.current = null, i == null || i();
  }, b = function(E) {
    document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", f.current), !c && (g(E), document.addEventListener("mousemove", p), document.addEventListener("mouseup", y), document.addEventListener("touchmove", p), document.addEventListener("touchend", y), m.current = p, f.current = y);
  };
  return [d, b];
}
var ad = function(n) {
  var t = n.size, r = t === void 0 ? "default" : t, o = n.color, i = n.prefixCls;
  return /* @__PURE__ */ X.createElement("div", {
    className: Se("".concat(i, "-handler"), Q({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, cd = function(n) {
  var t = n.children, r = n.style, o = n.prefixCls;
  return /* @__PURE__ */ X.createElement("div", {
    className: "".concat(o, "-palette"),
    style: Z({
      position: "relative"
    }, r)
  }, t);
}, ld = /* @__PURE__ */ ir(function(e, n) {
  var t = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ X.createElement("div", {
    ref: n,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, t);
}), uy = function(n) {
  var t = n.color, r = n.onChange, o = n.prefixCls, i = n.onChangeComplete, s = n.disabled, a = ve(), c = ve(), l = ve(t), u = vn(function(g) {
    var p = od({
      offset: g,
      targetRef: c,
      containerRef: a,
      color: t
    });
    l.current = p, r(p);
  }), d = sd({
    color: t,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return id(t);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), h = se(d, 2), m = h[0], f = h[1];
  return /* @__PURE__ */ X.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: f,
    onTouchStart: f
  }, /* @__PURE__ */ X.createElement(cd, {
    prefixCls: o
  }, /* @__PURE__ */ X.createElement(ld, {
    x: m.x,
    y: m.y,
    ref: c
  }, /* @__PURE__ */ X.createElement(ad, {
    color: t.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ X.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(t.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, fy = function(n, t) {
  var r = Kg(n, {
    value: t
  }), o = se(r, 2), i = o[0], s = o[1], a = kr(function() {
    return Un(i);
  }, [i]);
  return [a, s];
}, dy = function(n) {
  var t = n.colors, r = n.children, o = n.direction, i = o === void 0 ? "to right" : o, s = n.type, a = n.prefixCls, c = kr(function() {
    return t.map(function(l, u) {
      var d = Un(l);
      return s === "alpha" && u === t.length - 1 && (d = new cn(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [t, s]);
  return /* @__PURE__ */ X.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, hy = function(n) {
  var t = n.prefixCls, r = n.colors, o = n.disabled, i = n.onChange, s = n.onChangeComplete, a = n.color, c = n.type, l = ve(), u = ve(), d = ve(a), h = function(x) {
    return c === "hue" ? x.getHue() : x.a * 100;
  }, m = vn(function(E) {
    var x = od({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = x, i(h(x));
  }), f = sd({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return id(a, c);
    },
    onDragChange: m,
    onDragChangeComplete: function() {
      s(h(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = se(f, 2), p = g[0], y = g[1], b = X.useMemo(function() {
    if (c === "hue") {
      var E = a.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var x = new cn(E);
      return x;
    }
    return a;
  }, [a, c]), _ = X.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ X.createElement("div", {
    ref: l,
    className: Se("".concat(t, "-slider"), "".concat(t, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ X.createElement(cd, {
    prefixCls: t
  }, /* @__PURE__ */ X.createElement(ld, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ X.createElement(ad, {
    size: "small",
    color: b.toHexString(),
    prefixCls: t
  })), /* @__PURE__ */ X.createElement(dy, {
    colors: _,
    type: c,
    prefixCls: t
  })));
};
function xy(e) {
  return w.useMemo(function() {
    var n = e || {}, t = n.slider;
    return [t || hy];
  }, [e]);
}
var py = [{
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
}], gy = /* @__PURE__ */ ir(function(e, n) {
  var t = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? sy : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, h = d === void 0 ? !1 : d, m = e.disabled, f = m === void 0 ? !1 : m, g = e.components, p = xy(g), y = se(p, 1), b = y[0], _ = fy(r || ay, t), E = se(_, 2), x = E[0], T = E[1], S = kr(function() {
    return x.setA(1).toRgbString();
  }, [x]), j = function(k, H) {
    t || T(k), s == null || s(k, H);
  }, M = function(k) {
    return new cn(x.setHue(k));
  }, U = function(k) {
    return new cn(x.setA(k / 100));
  }, ee = function(k) {
    j(M(k), {
      type: "hue",
      value: k
    });
  }, Y = function(k) {
    j(U(k), {
      type: "alpha",
      value: k
    });
  }, B = function(k) {
    a && a(M(k));
  }, F = function(k) {
    a && a(U(k));
  }, J = Se("".concat(i, "-panel"), c, Q({}, "".concat(i, "-panel-disabled"), f)), N = {
    prefixCls: i,
    disabled: f,
    color: x
  }, A = /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(uy, xt({
    onChange: j
  }, N, {
    onChangeComplete: a
  })), /* @__PURE__ */ X.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ X.createElement("div", {
    className: Se("".concat(i, "-slider-group"), Q({}, "".concat(i, "-slider-group-disabled-alpha"), h))
  }, /* @__PURE__ */ X.createElement(b, xt({}, N, {
    type: "hue",
    colors: py,
    min: 0,
    max: 359,
    value: x.getHue(),
    onChange: ee,
    onChangeComplete: B
  })), !h && /* @__PURE__ */ X.createElement(b, xt({}, N, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: S
    }],
    min: 0,
    max: 100,
    value: x.a * 100,
    onChange: Y,
    onChangeComplete: F
  }))), /* @__PURE__ */ X.createElement(cy, {
    color: x.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ X.createElement("div", {
    className: J,
    style: l,
    ref: n
  }, typeof u == "function" ? u(A) : A);
});
process.env.NODE_ENV !== "production" && (gy.displayName = "ColorPicker");
const my = (e, n) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, n ? 8 : 6)) || "", vy = (e, n) => e ? my(e, n) : "";
let yy = /* @__PURE__ */ function() {
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
    }), this.metaColor = new cn(this.colors[0].color.metaColor)) : this.metaColor = new cn(r ? "" : n), (!n || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
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
      return vy(this.toHexString(), this.metaColor.a < 1);
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
const by = (e, n) => {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new cn(e.toRgbString()).onBackground(n).toHsv();
  return i <= 0.5 ? s.v > 0.5 : t * 0.299 + r * 0.587 + o * 0.114 > 192;
}, ud = (e) => {
  const {
    paddingInline: n,
    onlyIconSize: t
  } = e;
  return Sn(e, {
    buttonPaddingHorizontal: n,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: t
  });
}, fd = (e) => {
  var n, t, r, o, i, s;
  const a = (n = e.contentFontSize) !== null && n !== void 0 ? n : e.fontSize, c = (t = e.contentFontSizeSM) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : ko(a), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : ko(c), h = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : ko(l), m = by(new yy(e.colorBgSolid), "#fff") ? "#000" : "#fff", f = cc.reduce((g, p) => Object.assign(Object.assign({}, g), {
    [`${p}ShadowColor`]: `0 ${an(e.controlOutlineWidth)} 0 ${Rr(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, f), {
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
    solidTextColor: m,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: h,
    paddingBlock: Math.max((e.controlHeight - a * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * h) / 2 - e.lineWidth, 0)
  });
}, _y = (e) => {
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
      border: `${an(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${n}-icon > svg`]: T0(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": dm(e),
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
}, dd = (e, n, t) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": n,
    "&:active": t
  }
}), Sy = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Cy = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), wy = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ni = (e, n, t, r, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    background: n,
    borderColor: r || void 0,
    boxShadow: "none"
  }, dd(e, Object.assign({
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
}), Ey = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, wy(e))
}), Oy = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ki = (e, n, t, r) => {
  const i = r && ["link", "text"].includes(r) ? Oy : Ey;
  return Object.assign(Object.assign({}, i(e)), dd(e.componentCls, n, t));
}, ji = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: n,
    background: t
  }, ki(e, r, o))
}), Mi = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: n,
    background: t
  }, ki(e, r, o))
}), Li = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Di = (e, n, t, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: n
  }, ki(e, t, r))
}), Kt = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-${t}`]: Object.assign({
    color: n,
    boxShadow: "none"
  }, ki(e, r, o, t))
}), Ty = (e) => {
  const {
    componentCls: n
  } = e;
  return cc.reduce((t, r) => {
    const o = e[`${r}6`], i = e[`${r}1`], s = e[`${r}5`], a = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, t), {
      [`&${n}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, ji(e, e.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), Mi(e, o, e.colorBgContainer, {
        color: s,
        borderColor: s,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Li(e)), Di(e, i, {
        background: a
      }, {
        background: c
      })), Kt(e, o, "link", {
        color: s
      }, {
        color: l
      })), Kt(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Ry = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ji(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Li(e)), Di(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ni(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Kt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ay = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Mi(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Li(e)), Di(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Kt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Kt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Ni(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), $y = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ji(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Mi(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Li(e)), Di(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Kt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Kt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Py = (e) => Object.assign(Object.assign({}, Kt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ni(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Iy = (e) => {
  const {
    componentCls: n
  } = e;
  return Object.assign({
    [`${n}-color-default`]: Ry(e),
    [`${n}-color-primary`]: Ay(e),
    [`${n}-color-dangerous`]: $y(e),
    [`${n}-color-link`]: Py(e)
  }, Ty(e));
}, Ny = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Mi(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Kt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ji(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Kt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), dc = function(e) {
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
        padding: `${an(c)} ${an(s)}`,
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
      [`${t}${t}-circle${n}`]: Sy(e)
    },
    {
      [`${t}${t}-round${n}`]: Cy(e)
    }
  ];
}, ky = (e) => {
  const n = Sn(e, {
    fontSize: e.contentFontSize
  });
  return dc(n, e.componentCls);
}, jy = (e) => {
  const n = Sn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return dc(n, `${e.componentCls}-sm`);
}, My = (e) => {
  const n = Sn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return dc(n, `${e.componentCls}-lg`);
}, Ly = (e) => {
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
}, Dy = Ai("Button", (e) => {
  const n = ud(e);
  return [
    // Shared
    _y(n),
    // Size
    ky(n),
    jy(n),
    My(n),
    // Block
    Ly(n),
    // Color
    Iy(n),
    // https://github.com/ant-design/ant-design/issues/50969
    Ny(n),
    // Button Group
    ny(n)
  ];
}, fd, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function By(e, n, t) {
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
function Hy(e, n, t) {
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
function zy(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: t
  } = e, r = `${t}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, By(e, r, n)), Hy(t, r, n))
  };
}
function Fy(e, n) {
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
function Vy(e, n) {
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
function Uy(e) {
  const n = `${e.componentCls}-compact-vertical`;
  return {
    [n]: Object.assign(Object.assign({}, Fy(e, n)), Vy(e.componentCls, n))
  };
}
const qy = (e) => {
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
}, Wy = xm(["Button", "compact"], (e) => {
  const n = ud(e);
  return [
    // Space Compact
    zy(n),
    Uy(n),
    qy(n)
  ];
}, fd);
var Gy = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Xy(e) {
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
const Yy = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Ky = /* @__PURE__ */ X.forwardRef((e, n) => {
  var t, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: d,
    styles: h,
    disabled: m,
    className: f,
    rootClassName: g,
    children: p,
    icon: y,
    iconPosition: b = "start",
    ghost: _ = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: x = "button",
    classNames: T,
    style: S = {},
    autoInsertSpace: j,
    autoFocus: M
  } = e, U = Gy(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), ee = c || "default", [Y, B] = kr(() => {
    if (s && a)
      return [s, a];
    const Ie = Yy[ee] || [];
    return l ? ["danger", Ie[1]] : Ie;
  }, [c, s, a, l]), J = Y === "danger" ? "dangerous" : Y, {
    getPrefixCls: N,
    direction: A,
    autoInsertSpace: R,
    className: k,
    style: H,
    classNames: D,
    styles: q
  } = ac("button"), te = (t = j ?? R) !== null && t !== void 0 ? t : !0, K = N("btn", i), [ie, ae, le] = Dy(K), we = Et(Xo), me = m ?? we, Pe = Et(rd), Ae = kr(() => Xy(o), [o]), [he, Ye] = ut(Ae.loading), [C, re] = ut(!1), $ = ve(null), V = o1(n, $), I = Zd.count(p) === 1 && !y && !mo(B), ne = ve(!0);
  X.useEffect(() => (ne.current = !1, () => {
    ne.current = !0;
  }), []), Ve(() => {
    let Ie = null;
    Ae.delay > 0 ? Ie = setTimeout(() => {
      Ie = null, Ye(!0);
    }, Ae.delay) : Ye(Ae.loading);
    function st() {
      Ie && (clearTimeout(Ie), Ie = null);
    }
    return st;
  }, [Ae]), Ve(() => {
    if (!$.current || !te)
      return;
    const Ie = $.current.textContent || "";
    I && Oa(Ie) ? C || re(!0) : C && re(!1);
  }), Ve(() => {
    M && $.current && $.current.focus();
  }, []);
  const ot = X.useCallback((Ie) => {
    var st;
    if (he || me) {
      Ie.preventDefault();
      return;
    }
    (st = e.onClick) === null || st === void 0 || st.call(e, ("href" in e, Ie));
  }, [e.onClick, he, me]);
  if (process.env.NODE_ENV !== "production") {
    const Ie = _n("Button");
    process.env.NODE_ENV !== "production" && Ie(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Ie(!(_ && mo(B)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: xe,
    compactItemClassnames: ue
  } = Kv(K, A), Ke = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ft = Xv((Ie) => {
    var st, Ft;
    return (Ft = (st = d ?? xe) !== null && st !== void 0 ? st : Pe) !== null && Ft !== void 0 ? Ft : Ie;
  }), lt = ft && (r = Ke[ft]) !== null && r !== void 0 ? r : "", Qt = he ? "loading" : y, Rt = ed(U, ["navigate"]), Zt = Se(K, ae, le, {
    [`${K}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${K}-${ee}`]: ee,
    [`${K}-dangerous`]: l,
    [`${K}-color-${J}`]: J,
    [`${K}-variant-${B}`]: B,
    [`${K}-${lt}`]: lt,
    [`${K}-icon-only`]: !p && p !== 0 && !!Qt,
    [`${K}-background-ghost`]: _ && !mo(B),
    [`${K}-loading`]: he,
    [`${K}-two-chinese-chars`]: C && te && !he,
    [`${K}-block`]: E,
    [`${K}-rtl`]: A === "rtl",
    [`${K}-icon-end`]: b === "end"
  }, ue, f, g, k), Bt = Object.assign(Object.assign({}, H), S), Ht = Se(T == null ? void 0 : T.icon, D.icon), en = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), q.icon || {}), tn = y && !he ? /* @__PURE__ */ X.createElement(Ta, {
    prefixCls: K,
    className: Ht,
    style: en
  }, y) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ X.createElement(Ta, {
    prefixCls: K,
    className: Ht,
    style: en
  }, o.icon) : /* @__PURE__ */ X.createElement(ty, {
    existIcon: !!y,
    prefixCls: K,
    loading: he,
    mount: ne.current
  }), nn = p || p === 0 ? ey(p, I && te) : null;
  if (Rt.href !== void 0)
    return ie(/* @__PURE__ */ X.createElement("a", Object.assign({}, Rt, {
      className: Se(Zt, {
        [`${K}-disabled`]: me
      }),
      href: me ? void 0 : Rt.href,
      style: Bt,
      onClick: ot,
      ref: V,
      tabIndex: me ? -1 : 0
    }), tn, nn));
  let zt = /* @__PURE__ */ X.createElement("button", Object.assign({}, U, {
    type: x,
    className: Zt,
    style: Bt,
    onClick: ot,
    disabled: me,
    ref: V
  }), tn, nn, ue && /* @__PURE__ */ X.createElement(Wy, {
    prefixCls: K
  }));
  return mo(B) || (zt = /* @__PURE__ */ X.createElement(nd, {
    component: "Button",
    disabled: he
  }, zt)), ie(zt);
}), Bi = Ky;
Bi.Group = Qv;
Bi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Button");
function Jy(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, h = 0;
  function m() {
    u && clearTimeout(u);
  }
  function f(p) {
    var y = p || {}, b = y.upcomingOnly, _ = b === void 0 ? !1 : b;
    m(), d = !_;
  }
  function g() {
    for (var p = arguments.length, y = new Array(p), b = 0; b < p; b++)
      y[b] = arguments[b];
    var _ = this, E = Date.now() - h;
    if (d)
      return;
    function x() {
      h = Date.now(), n.apply(_, y);
    }
    function T() {
      u = void 0;
    }
    !a && l && !u && x(), m(), l === void 0 && E > e ? a ? (h = Date.now(), i || (u = setTimeout(l ? T : x, e))) : x() : i !== !0 && (u = setTimeout(l ? T : x, l === void 0 ? e - E : e));
  }
  return g.cancel = f, g;
}
function Qy(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return Jy(e, n, {
    debounceMode: i !== !1
  });
}
function Ql(e) {
  return ["small", "middle", "large"].includes(e);
}
const hd = ["wrap", "nowrap", "wrap-reverse"], xd = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], pd = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Zy = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && hd.includes(t)
  };
}, eb = (e, n) => {
  const t = {};
  return pd.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, tb = (e, n) => {
  const t = {};
  return xd.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function nb(e, n) {
  return Se(Object.assign(Object.assign(Object.assign({}, Zy(e, n)), eb(e, n)), tb(e, n)));
}
const rb = (e) => {
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
}, ob = (e) => {
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
}, ib = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return hd.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, sb = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return pd.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, ab = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return xd.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, cb = () => ({}), lb = Ai("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = Sn(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [rb(o), ob(o), ib(o), sb(o), ab(o)];
}, cb, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var ub = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const gd = /* @__PURE__ */ X.forwardRef((e, n) => {
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
  } = e, d = ub(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: m,
    getPrefixCls: f
  } = X.useContext(Lt), g = f("flex", t), [p, y, b] = lb(g), _ = l ?? (h == null ? void 0 : h.vertical), E = Se(o, r, h == null ? void 0 : h.className, g, y, b, nb(g, e), {
    [`${g}-rtl`]: m === "rtl",
    [`${g}-gap-${a}`]: Ql(a),
    [`${g}-vertical`]: _
  }), x = Object.assign(Object.assign({}, h == null ? void 0 : h.style), i);
  return s && (x.flex = s), a && !Ql(a) && (x.gap = a), p(/* @__PURE__ */ X.createElement(u, Object.assign({
    ref: n,
    className: E,
    style: x
  }, ed(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (gd.displayName = "Flex");
const Ko = 100, md = Ko / 5, vd = Ko / 2 - md / 2, Ss = vd * 2 * Math.PI, Zl = 50, eu = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Se(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: vd,
    cx: Zl,
    cy: Zl,
    strokeWidth: md,
    style: t
  });
}, fb = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  ec(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Ss / 4}`,
    strokeDasharray: `${Ss * c / 100} ${Ss * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: Se(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Ko} ${Ko}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(eu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(eu, {
    dotClassName: r,
    style: l
  })));
};
function db(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: Se(o, t > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: Se(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(fb, {
    prefixCls: n,
    percent: t
  }));
}
function hb(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ w.isValidElement(t) ? uc(t, {
    className: Se(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(db, {
    prefixCls: n,
    percent: r
  });
}
const xb = new a0("antSpinMove", {
  to: {
    opacity: 1
  }
}), pb = new a0("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), gb = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, O0(e)), {
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
          animationName: xb,
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
          animationName: pb,
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
}, mb = (e) => {
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
}, vb = Ai("Spin", (e) => {
  const n = Sn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [gb(n)];
}, mb), yb = 200, tu = [[30, 0.05], [70, 0.03], [96, 0.01]];
function bb(e, n) {
  const [t, r] = w.useState(0), o = w.useRef(null), i = n === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < tu.length; c += 1) {
        const [l, u] = tu[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, yb)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var _b = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let yd;
function Sb(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const Nr = (e) => {
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
    fullscreen: h = !1,
    indicator: m,
    percent: f
  } = e, g = _b(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: y,
    className: b,
    style: _,
    indicator: E
  } = ac("spin"), x = p("spin", t), [T, S, j] = vb(x), [M, U] = w.useState(() => r && !Sb(r, o)), ee = bb(M, f);
  w.useEffect(() => {
    if (r) {
      const R = Qy(o, () => {
        U(!0);
      });
      return R(), () => {
        var k;
        (k = R == null ? void 0 : R.cancel) === null || k === void 0 || k.call(R);
      };
    }
    U(!1);
  }, [o, r]);
  const Y = w.useMemo(() => typeof d < "u" && !h, [d, h]);
  if (process.env.NODE_ENV !== "production") {
    const R = _n("Spin");
    process.env.NODE_ENV !== "production" && R(!c || Y || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const B = Se(x, b, {
    [`${x}-sm`]: a === "small",
    [`${x}-lg`]: a === "large",
    [`${x}-spinning`]: M,
    [`${x}-show-text`]: !!c,
    [`${x}-rtl`]: y === "rtl"
  }, i, !h && s, S, j), F = Se(`${x}-container`, {
    [`${x}-blur`]: M
  }), J = (n = m ?? E) !== null && n !== void 0 ? n : yd, N = Object.assign(Object.assign({}, _), u), A = /* @__PURE__ */ w.createElement("div", Object.assign({}, g, {
    style: N,
    className: B,
    "aria-live": "polite",
    "aria-busy": M
  }), /* @__PURE__ */ w.createElement(hb, {
    prefixCls: x,
    indicator: J,
    percent: ee
  }), c && (Y || h) ? /* @__PURE__ */ w.createElement("div", {
    className: `${x}-text`
  }, c) : null);
  return T(Y ? /* @__PURE__ */ w.createElement("div", Object.assign({}, g, {
    className: Se(`${x}-nested-loading`, l, S, j)
  }), M && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, A), /* @__PURE__ */ w.createElement("div", {
    className: F,
    key: "container"
  }, d)) : h ? /* @__PURE__ */ w.createElement("div", {
    className: Se(`${x}-fullscreen`, {
      [`${x}-fullscreen-show`]: M
    }, s, S, j)
  }, A) : A);
};
Nr.setDefaultIndicator = (e) => {
  yd = e;
};
process.env.NODE_ENV !== "production" && (Nr.displayName = "Spin");
function bd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Cb } = Object.prototype, { getPrototypeOf: hc } = Object, { iterator: Hi, toStringTag: _d } = Symbol, zi = /* @__PURE__ */ ((e) => (n) => {
  const t = Cb.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (n) => zi(n) === e), Fi = (e) => (n) => typeof n === e, { isArray: xr } = Array, rr = Fi("undefined");
function Gr(e) {
  return e !== null && !rr(e) && e.constructor !== null && !rr(e.constructor) && pt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Sd = Dt("ArrayBuffer");
function wb(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Sd(e.buffer), n;
}
const Eb = Fi("string"), pt = Fi("function"), Cd = Fi("number"), Xr = (e) => e !== null && typeof e == "object", Ob = (e) => e === !0 || e === !1, jo = (e) => {
  if (zi(e) !== "object")
    return !1;
  const n = hc(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(_d in e) && !(Hi in e);
}, Tb = (e) => {
  if (!Xr(e) || Gr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Rb = Dt("Date"), Ab = Dt("File"), $b = Dt("Blob"), Pb = Dt("FileList"), Ib = (e) => Xr(e) && pt(e.pipe), Nb = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || pt(e.append) && ((n = zi(e)) === "formdata" || // detect form-data instance
  n === "object" && pt(e.toString) && e.toString() === "[object FormData]"));
}, kb = Dt("URLSearchParams"), [jb, Mb, Lb, Db] = ["ReadableStream", "Request", "Response", "Headers"].map(Dt), Bb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yr(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), xr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    if (Gr(e))
      return;
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function wd(e, n) {
  if (Gr(e))
    return null;
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const Rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ed = (e) => !rr(e) && e !== Rn;
function Ra() {
  const { caseless: e, skipUndefined: n } = Ed(this) && this || {}, t = {}, r = (o, i) => {
    const s = e && wd(t, i) || i;
    jo(t[s]) && jo(o) ? t[s] = Ra(t[s], o) : jo(o) ? t[s] = Ra({}, o) : xr(o) ? t[s] = o.slice() : (!n || !rr(o)) && (t[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && Yr(arguments[o], r);
  return t;
}
const Hb = (e, n, t, { allOwnKeys: r } = {}) => (Yr(n, (o, i) => {
  t && pt(o) ? e[i] = bd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), zb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fb = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, Vb = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && hc(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Ub = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, qb = (e) => {
  if (!e) return null;
  if (xr(e)) return e;
  let n = e.length;
  if (!Cd(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Wb = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && hc(Uint8Array)), Gb = (e, n) => {
  const r = (e && e[Hi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, Xb = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Yb = Dt("HTMLFormElement"), Kb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), nu = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), Jb = Dt("RegExp"), Od = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Yr(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Qb = (e) => {
  Od(e, (n, t) => {
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
}, Zb = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return xr(e) ? r(e) : r(String(e).split(n)), t;
}, e2 = () => {
}, t2 = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function n2(e) {
  return !!(e && pt(e.append) && e[_d] === "FormData" && e[Hi]);
}
const r2 = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (Xr(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (Gr(r))
        return r;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = xr(r) ? [] : {};
        return Yr(r, (s, a) => {
          const c = t(s, o + 1);
          !rr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, o2 = Dt("AsyncFunction"), i2 = (e) => e && (Xr(e) || pt(e)) && pt(e.then) && pt(e.catch), Td = ((e, n) => e ? setImmediate : n ? ((t, r) => (Rn.addEventListener("message", ({ source: o, data: i }) => {
  o === Rn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Rn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  pt(Rn.postMessage)
), s2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rn) : typeof process < "u" && process.nextTick || Td, a2 = (e) => e != null && pt(e[Hi]), P = {
  isArray: xr,
  isArrayBuffer: Sd,
  isBuffer: Gr,
  isFormData: Nb,
  isArrayBufferView: wb,
  isString: Eb,
  isNumber: Cd,
  isBoolean: Ob,
  isObject: Xr,
  isPlainObject: jo,
  isEmptyObject: Tb,
  isReadableStream: jb,
  isRequest: Mb,
  isResponse: Lb,
  isHeaders: Db,
  isUndefined: rr,
  isDate: Rb,
  isFile: Ab,
  isBlob: $b,
  isRegExp: Jb,
  isFunction: pt,
  isStream: Ib,
  isURLSearchParams: kb,
  isTypedArray: Wb,
  isFileList: Pb,
  forEach: Yr,
  merge: Ra,
  extend: Hb,
  trim: Bb,
  stripBOM: zb,
  inherits: Fb,
  toFlatObject: Vb,
  kindOf: zi,
  kindOfTest: Dt,
  endsWith: Ub,
  toArray: qb,
  forEachEntry: Gb,
  matchAll: Xb,
  isHTMLForm: Yb,
  hasOwnProperty: nu,
  hasOwnProp: nu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Od,
  freezeMethods: Qb,
  toObjectSet: Zb,
  toCamelCase: Kb,
  noop: e2,
  toFiniteNumber: t2,
  findKey: wd,
  global: Rn,
  isContextDefined: Ed,
  isSpecCompliantForm: n2,
  toJSONObject: r2,
  isAsyncFn: o2,
  isThenable: i2,
  setImmediate: Td,
  asap: s2,
  isIterable: a2
};
function ce(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
P.inherits(ce, Error, {
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
const Rd = ce.prototype, Ad = {};
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
  Ad[e] = { value: e };
});
Object.defineProperties(ce, Ad);
Object.defineProperty(Rd, "isAxiosError", { value: !0 });
ce.from = (e, n, t, r, o, i) => {
  const s = Object.create(Rd);
  P.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", c = n == null && e ? e.code : n;
  return ce.call(s, a, c, t, r, o), e && s.cause == null && Object.defineProperty(s, "cause", { value: e, configurable: !0 }), s.name = e && e.name || "Error", i && Object.assign(s, i), s;
};
const c2 = null;
function Aa(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function $d(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ru(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = $d(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function l2(e) {
  return P.isArray(e) && !e.some(Aa);
}
const u2 = P.toFlatObject(P, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Vi(e, n, t) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = P.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, p) {
    return !P.isUndefined(p[g]);
  });
  const r = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(n);
  if (!P.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (P.isDate(f))
      return f.toISOString();
    if (P.isBoolean(f))
      return f.toString();
    if (!c && P.isBlob(f))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(f) || P.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, g, p) {
    let y = f;
    if (f && !p && typeof f == "object") {
      if (P.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (P.isArray(f) && l2(f) || (P.isFileList(f) || P.endsWith(g, "[]")) && (y = P.toArray(f)))
        return g = $d(g), y.forEach(function(_, E) {
          !(P.isUndefined(_) || _ === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ru([g], E, i) : s === null ? g : g + "[]",
            l(_)
          );
        }), !1;
    }
    return Aa(f) ? !0 : (n.append(ru(p, g, i), l(f)), !1);
  }
  const d = [], h = Object.assign(u2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Aa
  });
  function m(f, g) {
    if (!P.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(f), P.forEach(f, function(y, b) {
        (!(P.isUndefined(y) || y === null) && o.call(
          n,
          y,
          P.isString(b) ? b.trim() : b,
          g,
          h
        )) === !0 && m(y, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), n;
}
function ou(e) {
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
function xc(e, n) {
  this._pairs = [], e && Vi(e, this, n);
}
const Pd = xc.prototype;
Pd.append = function(n, t) {
  this._pairs.push([n, t]);
};
Pd.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, ou);
  } : ou;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function f2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Id(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || f2;
  P.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = P.isURLSearchParams(n) ? n.toString() : new xc(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class iu {
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
   * @returns {void}
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
const Nd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, d2 = typeof URLSearchParams < "u" ? URLSearchParams : xc, h2 = typeof FormData < "u" ? FormData : null, x2 = typeof Blob < "u" ? Blob : null, p2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: d2,
    FormData: h2,
    Blob: x2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, pc = typeof window < "u" && typeof document < "u", $a = typeof navigator == "object" && navigator || void 0, g2 = pc && (!$a || ["ReactNative", "NativeScript", "NS"].indexOf($a.product) < 0), m2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", v2 = pc && window.location.href || "http://localhost", y2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pc,
  hasStandardBrowserEnv: g2,
  hasStandardBrowserWebWorkerEnv: m2,
  navigator: $a,
  origin: v2
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...y2,
  ...p2
};
function b2(e, n) {
  return Vi(e, new ct.classes.URLSearchParams(), {
    visitor: function(t, r, o, i) {
      return ct.isNode && P.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...n
  });
}
function _2(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function S2(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function kd(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && P.isArray(o) ? o.length : s, c ? (P.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !P.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && P.isArray(o[s]) && (o[s] = S2(o[s])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const t = {};
    return P.forEachEntry(e, (r, o) => {
      n(_2(r), o, t, 0);
    }), t;
  }
  return null;
}
function C2(e, n, t) {
  if (P.isString(e))
    try {
      return (n || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Kr = {
  transitional: Nd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = P.isObject(n);
    if (i && P.isHTMLForm(n) && (n = new FormData(n)), P.isFormData(n))
      return o ? JSON.stringify(kd(n)) : n;
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
    return i || o ? (t.setContentType("application/json", !1), C2(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Kr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (P.isResponse(n) || P.isReadableStream(n))
      return n;
    if (n && P.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n, this.parseReviver);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? ce.from(a, ce.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  Kr.headers[e] = {};
});
const w2 = P.toObjectSet([
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
]), E2 = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && w2[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, su = Symbol("internals");
function wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Mo(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Mo) : String(e);
}
function O2(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const T2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Cs(e, n, t, r, o) {
  if (P.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!P.isString(n)) {
    if (P.isString(r))
      return n.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(n);
  }
}
function R2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function A2(e, n) {
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
      const u = wr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = P.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Mo(a));
    }
    const s = (a, c) => P.forEach(a, (l, u) => i(l, u, c));
    if (P.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (P.isString(n) && (n = n.trim()) && !T2(n))
      s(E2(n), t);
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
    if (n = wr(n), n) {
      const r = P.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return O2(o);
        if (P.isFunction(t))
          return t.call(this, o, r);
        if (P.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = wr(n), n) {
      const r = P.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Cs(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = wr(s), s) {
        const a = P.findKey(r, s);
        a && (!t || Cs(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return P.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || Cs(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return P.forEach(this, (o, i) => {
      const s = P.findKey(r, i);
      if (s) {
        t[s] = Mo(o), delete t[i];
        return;
      }
      const a = n ? R2(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Mo(o), r[a] = !0;
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
    const r = (this[su] = this[su] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = wr(s);
      r[a] || (A2(o, s), r[a] = !0);
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
function ws(e, n) {
  const t = this || Kr, r = n || t, o = gt.from(r.headers);
  let i = r.data;
  return P.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function jd(e) {
  return !!(e && e.__CANCEL__);
}
function pr(e, n, t) {
  ce.call(this, e ?? "canceled", ce.ERR_CANCELED, n, t), this.name = "CanceledError";
}
P.inherits(pr, ce, {
  __CANCEL__: !0
});
function Md(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new ce(
    "Request failed with status code " + t.status,
    [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function $2(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function P2(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let d = i, h = 0;
    for (; d !== o; )
      h += t[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const m = u && l - u;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function I2(e, n) {
  let t = 0, r = 1e3 / n, o, i;
  const s = (l, u = Date.now()) => {
    t = u, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - t;
    d >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Jo = (e, n, t = 3) => {
  let r = 0;
  const o = P2(50, 250);
  return I2((i) => {
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
}, au = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, cu = (e) => (...n) => P.asap(() => e(...n)), N2 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, ct.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, k2 = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i, s) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(n)}`];
      P.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), P.isString(r) && a.push(`path=${r}`), P.isString(o) && a.push(`domain=${o}`), i === !0 && a.push("secure"), P.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const n = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return n ? decodeURIComponent(n[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function j2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function M2(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Ld(e, n, t) {
  let r = !j2(n);
  return e && (r || t == !1) ? M2(e, n) : n;
}
const lu = (e) => e instanceof gt ? { ...e } : e;
function Ln(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, d, h) {
    return P.isPlainObject(l) && P.isPlainObject(u) ? P.merge.call({ caseless: h }, l, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, h) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
        return r(void 0, l, d, h);
    } else return r(l, u, d, h);
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
    headers: (l, u, d) => o(lu(l), lu(u), d, !0)
  };
  return P.forEach(Object.keys({ ...e, ...n }), function(u) {
    const d = c[u] || o, h = d(e[u], n[u], u);
    P.isUndefined(h) && d !== a || (t[u] = h);
  }), t;
}
const Dd = (e) => {
  const n = Ln({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  if (n.headers = s = gt.from(s), n.url = Id(Ld(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), P.isFormData(t)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (P.isFunction(t.getHeaders)) {
      const c = t.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, d]) => {
        l.includes(u.toLowerCase()) && s.set(u, d);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(n)), r || r !== !1 && N2(n.url))) {
    const c = o && i && k2.read(i);
    c && s.set(o, c);
  }
  return n;
}, L2 = typeof XMLHttpRequest < "u", D2 = L2 && function(e) {
  return new Promise(function(t, r) {
    const o = Dd(e);
    let i = o.data;
    const s = gt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, h, m, f;
    function g() {
      m && m(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function y() {
      if (!p)
        return;
      const _ = gt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: _,
        config: e,
        request: p
      };
      Md(function(S) {
        t(S), g();
      }, function(S) {
        r(S), g();
      }, x), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new ce("Request aborted", ce.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(E) {
      const x = E && E.message ? E.message : "Network Error", T = new ce(x, ce.ERR_NETWORK, e, p);
      T.event = E || null, r(T), p = null;
    }, p.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Nd;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new ce(
        E,
        x.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && P.forEach(s.toJSON(), function(E, x) {
      p.setRequestHeader(x, E);
    }), P.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([h, f] = Jo(l, !0), p.addEventListener("progress", h)), c && p.upload && ([d, m] = Jo(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (u = (_) => {
      p && (r(!_ || _.type ? new pr(null, e, p) : _), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = $2(o.url);
    if (b && ct.protocols.indexOf(b) === -1) {
      r(new ce("Unsupported protocol " + b + ":", ce.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, B2 = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof ce ? u : new pr(u instanceof Error ? u.message : u));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new ce(`timeout ${n} of ms exceeded`, ce.ETIMEDOUT));
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
}, H2 = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, z2 = async function* (e, n) {
  for await (const t of F2(e))
    yield* H2(t, n);
}, F2 = async function* (e) {
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
}, uu = (e, n, t, r) => {
  const o = z2(e, n);
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
          let h = i += d;
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
}, fu = 64 * 1024, { isFunction: vo } = P, V2 = (({ Request: e, Response: n }) => ({
  Request: e,
  Response: n
}))(P.global), {
  ReadableStream: du,
  TextEncoder: hu
} = P.global, xu = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, U2 = (e) => {
  e = P.merge.call({
    skipUndefined: !0
  }, V2, e);
  const { fetch: n, Request: t, Response: r } = e, o = n ? vo(n) : typeof fetch == "function", i = vo(t), s = vo(r);
  if (!o)
    return !1;
  const a = o && vo(du), c = o && (typeof hu == "function" ? /* @__PURE__ */ ((f) => (g) => f.encode(g))(new hu()) : async (f) => new Uint8Array(await new t(f).arrayBuffer())), l = i && a && xu(() => {
    let f = !1;
    const g = new t(ct.origin, {
      body: new du(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !g;
  }), u = s && a && xu(() => P.isReadableStream(new r("").body)), d = {
    stream: u && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !d[f] && (d[f] = (g, p) => {
      let y = g && g[f];
      if (y)
        return y.call(g);
      throw new ce(`Response type '${f}' is not supported`, ce.ERR_NOT_SUPPORT, p);
    });
  });
  const h = async (f) => {
    if (f == null)
      return 0;
    if (P.isBlob(f))
      return f.size;
    if (P.isSpecCompliantForm(f))
      return (await new t(ct.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (P.isArrayBufferView(f) || P.isArrayBuffer(f))
      return f.byteLength;
    if (P.isURLSearchParams(f) && (f = f + ""), P.isString(f))
      return (await c(f)).byteLength;
  }, m = async (f, g) => {
    const p = P.toFiniteNumber(f.getContentLength());
    return p ?? h(g);
  };
  return async (f) => {
    let {
      url: g,
      method: p,
      data: y,
      signal: b,
      cancelToken: _,
      timeout: E,
      onDownloadProgress: x,
      onUploadProgress: T,
      responseType: S,
      headers: j,
      withCredentials: M = "same-origin",
      fetchOptions: U
    } = Dd(f), ee = n || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let Y = B2([b, _ && _.toAbortSignal()], E), B = null;
    const F = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let J;
    try {
      if (T && l && p !== "get" && p !== "head" && (J = await m(j, y)) !== 0) {
        let D = new t(g, {
          method: "POST",
          body: y,
          duplex: "half"
        }), q;
        if (P.isFormData(y) && (q = D.headers.get("content-type")) && j.setContentType(q), D.body) {
          const [te, K] = au(
            J,
            Jo(cu(T))
          );
          y = uu(D.body, fu, te, K);
        }
      }
      P.isString(M) || (M = M ? "include" : "omit");
      const N = i && "credentials" in t.prototype, A = {
        ...U,
        signal: Y,
        method: p.toUpperCase(),
        headers: j.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: N ? M : void 0
      };
      B = i && new t(g, A);
      let R = await (i ? ee(B, U) : ee(g, A));
      const k = u && (S === "stream" || S === "response");
      if (u && (x || k && F)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((ie) => {
          D[ie] = R[ie];
        });
        const q = P.toFiniteNumber(R.headers.get("content-length")), [te, K] = x && au(
          q,
          Jo(cu(x), !0)
        ) || [];
        R = new r(
          uu(R.body, fu, te, () => {
            K && K(), F && F();
          }),
          D
        );
      }
      S = S || "text";
      let H = await d[P.findKey(d, S) || "text"](R, f);
      return !k && F && F(), await new Promise((D, q) => {
        Md(D, q, {
          data: H,
          headers: gt.from(R.headers),
          status: R.status,
          statusText: R.statusText,
          config: f,
          request: B
        });
      });
    } catch (N) {
      throw F && F(), N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message) ? Object.assign(
        new ce("Network Error", ce.ERR_NETWORK, f, B),
        {
          cause: N.cause || N
        }
      ) : ce.from(N, N && N.code, f, B);
    }
  };
}, q2 = /* @__PURE__ */ new Map(), Bd = (e) => {
  let n = e && e.env || {};
  const { fetch: t, Request: r, Response: o } = n, i = [
    r,
    o,
    t
  ];
  let s = i.length, a = s, c, l, u = q2;
  for (; a--; )
    c = i[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : U2(n)), u = l;
  return l;
};
Bd();
const gc = {
  http: c2,
  xhr: D2,
  fetch: {
    get: Bd
  }
};
P.forEach(gc, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const pu = (e) => `- ${e}`, W2 = (e) => P.isFunction(e) || e === null || e === !1;
function G2(e, n) {
  e = P.isArray(e) ? e : [e];
  const { length: t } = e;
  let r, o;
  const i = {};
  for (let s = 0; s < t; s++) {
    r = e[s];
    let a;
    if (o = r, !W2(r) && (o = gc[(a = String(r)).toLowerCase()], o === void 0))
      throw new ce(`Unknown adapter '${a}'`);
    if (o && (P.isFunction(o) || (o = o.get(n))))
      break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? s.length > 1 ? `since :
` + s.map(pu).join(`
`) : " " + pu(s[0]) : "as no adapter specified";
    throw new ce(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Hd = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: G2,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: gc
};
function Es(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new pr(null, e);
}
function gu(e) {
  return Es(e), e.headers = gt.from(e.headers), e.data = ws.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Hd.getAdapter(e.adapter || Kr.adapter, e)(e).then(function(r) {
    return Es(e), r.data = ws.call(
      e,
      e.transformResponse,
      r
    ), r.headers = gt.from(r.headers), r;
  }, function(r) {
    return jd(r) || (Es(e), r && r.response && (r.response.data = ws.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = gt.from(r.response.headers))), Promise.reject(r);
  });
}
const zd = "1.13.2", Ui = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Ui[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const mu = {};
Ui.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + zd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new ce(
        o(s, " has been removed" + (t ? " in " + t : "")),
        ce.ERR_DEPRECATED
      );
    return t && !mu[s] && (mu[s] = !0, console.warn(
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
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new ce("option " + i + " must be " + c, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new ce("Unknown option " + i, ce.ERR_BAD_OPTION);
  }
}
const Lo = {
  assertOptions: X2,
  validators: Ui
}, Ut = Lo.validators;
let kn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new iu(),
      response: new iu()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Ln(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Lo.assertOptions(r, {
      silentJSONParsing: Ut.transitional(Ut.boolean),
      forcedJSONParsing: Ut.transitional(Ut.boolean),
      clarifyTimeoutError: Ut.transitional(Ut.boolean)
    }, !1), o != null && (P.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Lo.assertOptions(o, {
      encode: Ut.function,
      serialize: Ut.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Lo.assertOptions(t, {
      baseUrl: Ut.spelling("baseURL"),
      withXsrfToken: Ut.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && P.merge(
      i.common,
      i[t.method]
    );
    i && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), t.headers = gt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, h;
    if (!c) {
      const f = [gu.bind(this), void 0];
      for (f.unshift(...a), f.push(...l), h = f.length, u = Promise.resolve(t); d < h; )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    h = a.length;
    let m = t;
    for (; d < h; ) {
      const f = a[d++], g = a[d++];
      try {
        m = f(m);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      u = gu.call(this, m);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(n) {
    n = Ln(this.defaults, n);
    const t = Ld(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Id(t, n.params, n.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(n) {
  kn.prototype[n] = function(t, r) {
    return this.request(Ln(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(Ln(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  kn.prototype[n] = t(), kn.prototype[n + "Form"] = t(!0);
});
let Y2 = class Fd {
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
      r.reason || (r.reason = new pr(i, s, a), t(r.reason));
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
      token: new Fd(function(o) {
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
const Pa = {
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
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Pa).forEach(([e, n]) => {
  Pa[n] = e;
});
function Vd(e) {
  const n = new kn(e), t = bd(kn.prototype.request, n);
  return P.extend(t, kn.prototype, n, { allOwnKeys: !0 }), P.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Vd(Ln(e, o));
  }, t;
}
const Ue = Vd(Kr);
Ue.Axios = kn;
Ue.CanceledError = pr;
Ue.CancelToken = Y2;
Ue.isCancel = jd;
Ue.VERSION = zd;
Ue.toFormData = Vi;
Ue.AxiosError = ce;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(n) {
  return Promise.all(n);
};
Ue.spread = K2;
Ue.isAxiosError = J2;
Ue.mergeConfig = Ln;
Ue.AxiosHeaders = gt;
Ue.formToJSON = (e) => kd(P.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = Hd.getAdapter;
Ue.HttpStatusCode = Pa;
Ue.default = Ue;
const {
  Axios: C_,
  AxiosError: w_,
  CanceledError: E_,
  isCancel: O_,
  CancelToken: T_,
  VERSION: R_,
  all: A_,
  Cancel: $_,
  isAxiosError: P_,
  spread: I_,
  toFormData: N_,
  AxiosHeaders: k_,
  HttpStatusCode: j_,
  formToJSON: M_,
  getAdapter: L_,
  mergeConfig: D_
} = Ue, sn = Zo;
(function(e, n) {
  const t = Zo, r = e();
  for (; ; )
    try {
      if (-parseInt(t(117)) / 1 * (parseInt(t(104)) / 2) + parseInt(t(107)) / 3 + -parseInt(t(103)) / 4 + -parseInt(t(119)) / 5 * (parseInt(t(113)) / 6) + -parseInt(t(124)) / 7 + parseInt(t(123)) / 8 * (parseInt(t(108)) / 9) + parseInt(t(110)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Qo, 357050);
sn(122) + sn(109);
function Qo() {
  const e = ["error", "applicatio", "Content-Ty", "tials", "1904136cESiGa", "2hYGFRK", "response", "n/json", "1787787buaaJC", "2646strYpG", "ient", "12361140ydDeLA", "GET", "message", "6ICIiWz", "DELETE", "defaults", "PATCH", "471248WNJzVr", "PUT", "1844115CIuqVx", "withCreden", "POST", "/api/v1/cl", "2824yMODWU", "1838690cWkUUD", "data", "params"];
  return Qo = function() {
    return e;
  }, Qo();
}
Ue[sn(115)][sn(120) + sn(130)] = !0;
const Q2 = async (e) => {
  var t, r, o, i;
  const n = sn;
  try {
    return (await Ue(e))[n(125)];
  } catch (s) {
    throw ((r = (t = s[n(105)]) == null ? void 0 : t[n(125)]) == null ? void 0 : r[n(112)]) || ((i = (o = s[n(105)]) == null ? void 0 : o[n(125)]) == null ? void 0 : i[n(127)]) || s[n(112)];
  }
}, Z2 = {};
Z2[sn(129) + "pe"] = sn(128) + sn(106);
function Zo(e, n) {
  const t = Qo();
  return Zo = function(r, o) {
    return r = r - 103, t[r];
  }, Zo(e, n);
}
const Ne = ei;
(function(e, n) {
  const t = ei, r = e();
  for (; ; )
    try {
      if (-parseInt(t(511)) / 1 * (parseInt(t(508)) / 2) + -parseInt(t(502)) / 3 + parseInt(t(513)) / 4 + -parseInt(t(499)) / 5 * (-parseInt(t(514)) / 6) + -parseInt(t(522)) / 7 + -parseInt(t(519)) / 8 + parseInt(t(523)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ti, 578745);
const wn = {};
wn[Ne(505)] = Ne(520) + "E", wn[Ne(510)] = Ne(517), wn[Ne(503)] = Ne(498) + "N", wn[Ne(507)] = Ne(520) + "E", wn[Ne(512)] = Ne(517), wn[Ne(506)] = Ne(498) + "N";
const Nt = wn, Ia = {};
function ei(e, n) {
  const t = ti();
  return ei = function(r, o) {
    return r = r - 497, t[r];
  }, ei(e, n);
}
Ia[Ne(500)] = Ne(517), Ia[Ne(509)] = Ne(498) + "N";
const e_ = Ia, t_ = Ne(497), n_ = Ne(525);
function ti() {
  const e = ["5DMgClC", "keyup", "enuHide", "1362618dmrxTn", "mousedown", "Event", "mousemove", "touchstart", "touchmove", "10xmmbkm", "keydown", "mouseup", "83387LNwZLf", "touchend", "1625988jikwIX", "5425314lNmbRT", "fullscreen", "ent", "ACTION_UP", "shortcutEv", "4238480WNETLY", "ACTION_MOV", "keyBoardEv", "6036142ZFKDCQ", "13781574dbuBpQ", "assistiveM", "wheelEvent", "moveEvent", "ACTION_DOW"];
  return ti = function() {
    return e;
  }, ti();
}
const r_ = Ne(521) + Ne(516), Ud = Ne(524) + Ne(501), o_ = Ne(518) + Ne(516), i_ = Ne(515) + Ne(504);
function ni(e, n) {
  const t = ri();
  return ni = function(r, o) {
    return r = r - 251, t[r];
  }, ni(e, n);
}
function ri() {
  const e = ["includes", "16abpaHi", "tab", "pageY", "typeKey", "deltaY", "touchEvent", "tListener", "keyEvent", "8NztDtW", "mousemove", "removeEven", "width", "wQvDo", "arrowright", "EXT", "touchmove", "ZUCvz", "meta_state", "TbQFb", "preventDef", "wheelEvent", "left", "toLowerCas", "GNaVk", "ioJsN", "arrowdown", "5590SPEdsO", "sign", "showMenu", "repeat", "tuGtp", "RoLQb", "touch", "OKFrO", "ogHiH", "clipboard", "keydown", "arrowup", "COPY_TEXT", "1157217MKPSqC", "key", "231489GcZqMI", "enter", "gPqRg", "max", "getBoundin", "11137324oQffgh", "control", "UZvjI", "isDown", "height", "lqBvu", "IglUB", "PASTE_TEXT", "pageX", "stener", "FYCLG", "passive", "duration", "kIIWV", "ZbaIN", "shift", "18VtxCRZ", "gnPrK", "RVcRb", "32588616sQrhbH", "iTSzU", "GwtZT", "type", "capslock", "KEYBOARD_T", "26hpdrZV", "lJeOx", "ctrlKey", "2625030VyUDMj", "clientY", "clientX", "backspace", "ZLaOl", "ODE", "offsetWidt", "KEYBOARD_C", "action", "shrMP", "now", "shiftKey", "mouse", "410XutyUS", "offsetHeig", "focus", "touchstart", "forEach", "WxnSV", "gClientRec", "touchend", "addEventLi", "readText", "610KuCQAE", "keyAction", "toUpperCas", "KPgGt", "QJufP", "bjACJ", "ault", "current", "mvclV", "top", "mousedown", "6006861AKEhvi", "mouseup", "arrowleft"];
  return ri = function() {
    return e;
  }, ri();
}
(function(e, n) {
  const t = ni, r = e();
  for (; ; )
    try {
      if (parseInt(t(322)) / 1 * (-parseInt(t(261)) / 2) + -parseInt(t(274)) / 3 * (parseInt(t(347)) / 4) + -parseInt(t(309)) / 5 * (-parseInt(t(297)) / 6) + -parseInt(t(343)) / 7 * (parseInt(t(355)) / 8) + -parseInt(t(276)) / 9 * (parseInt(t(332)) / 10) + -parseInt(t(281)) / 11 + -parseInt(t(300)) / 12 * (-parseInt(t(306)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 877960);
const s_ = ({ isMobile: e, assistive: n, onRemoteEvent: t, canvasContent: r, canvasRef: o }) => {
  const i = ni, [s, a] = ut(!1), c = ve(Date[i(319)]()), l = (m) => {
    const f = i;
    if (m[f(254) + f(338)](), !o[f(339)]) return;
    const g = o[f(339)], p = g[f(280) + f(328) + "t"]();
    let y = Nt[m[f(303)]];
    if (n[f(284)] == !0 || n[f(263)] == !0)
      if (f(278) === f(335)) {
        const { touches: U, changedTouches: ee } = _0x1449bd, Y = U[0] ?? ee[0];
        _0x5d904f = Y[f(289)] - _0x3a7eb3[f(256)], _0x4f3f1c = Y[f(349)] - _0x354f5a[f(341)];
      } else {
        y == Nt[f(344)] && t(Ud, {});
        return;
      }
    if (y == Nt[f(342)]) {
      if (f(307) !== f(307)) return;
      a(!0);
    }
    if (y != Nt[f(342)] && s == !1) return;
    y == Nt[f(344)] && a(!1);
    let b, _;
    if (m[f(303)][f(346)](f(267)))
      if (f(327) !== f(327)) {
        _0xad24ad == _0x1b0f29[f(344)] && _0x42b6b1(_0x5b1851, {});
        return;
      } else {
        const { touches: U, changedTouches: ee } = m, Y = U[0] ?? ee[0];
        b = Y[f(289)] - p[f(256)], _ = Y[f(349)] - p[f(341)];
      }
    else m[f(303)][f(346)](f(321)) && (f(259) === f(259) ? (b = m[f(311)] - p[f(256)], _ = m[f(310)] - p[f(341)]) : _0x3fdb56(!0));
    const E = 1, x = b < E || b > g[f(358)] - E, T = _ < E || _ > g[f(285)] - E;
    (x || T) && (b = Math[f(279)](1, b), _ = Math[f(279)](1, _), y = Nt[f(344)]);
    const S = Date[f(319)](), j = S - c[f(339)];
    c[f(339)] = S;
    const M = {};
    M[f(317)] = f(352), M[f(333)] = y, M.x = b, M.y = _, M[f(358)] = p[f(358)], M[f(285)] = p[f(285)], M.ts = S, M[f(293)] = j, t(t_, M), g[f(324)]();
  }, u = (m) => {
    const f = i;
    if (f(340) === f(294)) _0x6e9935[f(330) + f(290)](f(271), _0x5129a6), [f(356), f(342), f(344)][f(326)]((g) => {
      const p = f;
      _0x32e996[p(330) + p(290)](g, _0x470760);
    });
    else {
      if (m[f(254) + f(338)](), !o[f(339)]) return;
      const g = o[f(339)], p = Math[f(262)](m[f(351)]), y = g[f(280) + f(328) + "t"]();
      t(n_, { action: f(255), width: g[f(315) + "h"], height: g[f(323) + "ht"], x: m[f(311)] - y[f(256)], y: m[f(310)] - y[f(341)], delta: p, ts: Date[f(319)]() }), g[f(324)]();
    }
  }, d = async (m) => {
    const f = i;
    if (f(269) !== f(269)) _0x32952b[f(350)] = f(316) + f(314), _0x5d432e[f(252)] = 4096, _0x403c1e[f(275)] = 29;
    else {
      if (m[f(254) + f(338)](), !o[f(339)]) return;
      const g = o[f(339)], p = e_[m[f(303)]], y = m[f(275)][f(257) + "e"]();
      if (((x) => {
        const T = f;
        if (T(337) === T(359)) _0x4b1b34(!1);
        else
          return [T(282), T(296), T(304)][T(346)](x);
      })(y) == !0) return;
      const _ = async () => {
        const x = f, T = {};
        T[x(317)] = x(354), T[x(333)] = p, T[x(350)] = x(305) + x(361), T[x(275)] = m[x(275)], T[x(264)] = 0, T[x(252)] = 0;
        const S = T;
        if (m[x(308)] == !0) {
          if (x(298) !== x(298)) _0x5b3b30(_0x1217ba, {});
          else if (y == "c") x(301) !== x(287) ? S[x(350)] = x(273) : (_0x2811c3[x(350)] = x(316) + x(314), _0x86cac[x(275)] = 21);
          else if (y == "a") S[x(350)] = x(316) + x(314), S[x(252)] = 4096, S[x(275)] = 29;
          else if (y == "v")
            if (x(291) !== x(295)) S[x(350)] = x(288), S[x(275)] = await navigator[x(270)][x(331)]();
            else return;
        } else if (y == x(272)) x(266) !== x(253) ? (S[x(350)] = x(316) + x(314), S[x(275)] = 19) : (_0x1808ea[x(350)] = x(316) + x(314), _0x59f8aa[x(275)] = 20);
        else if (y == x(260)) x(251) !== x(299) ? (S[x(350)] = x(316) + x(314), S[x(275)] = 20) : _0x5f2b5c(_0xcac8f8, _0x586204);
        else if (y == x(345)) S[x(350)] = x(316) + x(314), S[x(275)] = 21;
        else if (y == x(360))
          if (x(258) === x(258)) S[x(350)] = x(316) + x(314), S[x(275)] = 22;
          else return;
        else
          y == x(312) ? (S[x(350)] = x(316) + x(314), S[x(275)] = 67) : y == x(277) ? (S[x(350)] = x(316) + x(314), S[x(275)] = 66) : y == x(348) && (S[x(350)] = x(316) + x(314), S[x(275)] = 61);
        return S[x(303)] == x(305) + x(361) && (x(265) === x(318) ? ([x(356), x(342), x(344)][x(326)]((j) => {
          const M = x;
          _0x56e31f[M(357) + M(353)](j, _0x2697f5);
        }), _0x33b609[x(357) + x(353)](x(271), _0x3f7908)) : m[x(320)] == !0 && (S[x(275)] = S[x(275)][x(334) + "e"]())), S;
      }, E = await _();
      E && t(r_, E), g[f(324)]();
    }
  };
  Ve(() => {
    const m = i, f = o[m(339)];
    if (f)
      if (m(286) === m(302)) _0x38f978[m(350)] = m(316) + m(314), _0x20515f[m(275)] = 22;
      else {
        const g = {};
        g[m(292)] = !1;
        const p = g;
        return e ? (f[m(330) + m(290)](m(325), l, p), f[m(330) + m(290)](m(362), l, p), f[m(330) + m(290)](m(329), l)) : (f[m(330) + m(290)](m(271), d), [m(356), m(342), m(344)][m(326)]((y) => {
          const b = m;
          b(283) !== b(283) ? (_0x3fca4c[b(350)] = b(316) + b(314), _0x1f7606[b(275)] = 66) : f[b(330) + b(290)](y, l);
        })), () => {
          const y = m;
          if (y(313) !== y(268)) f && (e ? [y(325), y(362), y(329)][y(326)]((b) => {
            const _ = y;
            if (_(336) === _(336)) f[_(357) + _(353)](b, l);
            else {
              if (_0x58a301[_(254) + _(338)](), !_0x22702c[_(339)]) return;
              const E = _0x3bf944[_(339)], x = _0x150549[_(262)](_0x343cf8[_(351)]), T = E[_(280) + _(328) + "t"]();
              _0x5d3c5a(_0x10a3df, { action: _(255), width: E[_(315) + "h"], height: E[_(323) + "ht"], x: _0x46d1a4[_(311)] - T[_(256)], y: _0xbcebc4[_(310)] - T[_(341)], delta: x, ts: _0x20d932[_(319)]() }), E[_(324)]();
            }
          }) : ([y(356), y(342), y(344)][y(326)]((b) => {
            const _ = y;
            f[_(357) + _(353)](b, l);
          }), f[y(357) + y(353)](y(271), d)));
          else return;
        };
      }
  }, [e, l, u, d, o]);
  const h = { ref: o, ...r };
  return G.jsx(hx, h);
}, a_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e";
function oi() {
  const e = ["22KFyqmf", "3053262qjICZv", "16744FDBqCo", "13GDeSGs", "291492lsIEvZ", "12134ykSHFL", "3795354eBtEbw", "6283610QuxnhS", "div", "8hlmQss", "img", "4062uvnFsz", "188RSjPZE", "26154072yfhUTM", "70TzdKHh"];
  return oi = function() {
    return e;
  }, oi();
}
const qi = ii;
function ii(e, n) {
  const t = oi();
  return ii = function(r, o) {
    return r = r - 312, t[r];
  }, ii(e, n);
}
(function(e, n) {
  const t = ii, r = e();
  for (; ; )
    try {
      if (-parseInt(t(313)) / 1 * (-parseInt(t(320)) / 2) + parseInt(t(324)) / 3 + parseInt(t(312)) / 4 * (-parseInt(t(322)) / 5) + -parseInt(t(319)) / 6 * (parseInt(t(325)) / 7) + parseInt(t(317)) / 8 * (parseInt(t(314)) / 9) + -parseInt(t(315)) / 10 * (parseInt(t(323)) / 11) + -parseInt(t(321)) / 12 * (-parseInt(t(326)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, 863234);
const c_ = Jt[qi(316)]`
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
`, St = Jt[qi(316)]`
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
`, Ct = Jt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, l_ = Jt[qi(318)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, u_ = Jt[qi(316)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function or(e, n) {
  const t = si();
  return or = function(r, o) {
    return r = r - 254, t[r];
  }, or(e, n);
}
(function(e, n) {
  const t = or, r = e();
  for (; ; )
    try {
      if (-parseInt(t(262)) / 1 + parseInt(t(260)) / 2 + -parseInt(t(277)) / 3 * (-parseInt(t(270)) / 4) + parseInt(t(279)) / 5 + parseInt(t(275)) / 6 * (parseInt(t(259)) / 7) + parseInt(t(294)) / 8 * (parseInt(t(258)) / 9) + -parseInt(t(269)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 518570);
const vu = () => {
  const e = or;
  return document[e(289) + e(296)] || document[e(255) + e(288)] || document[e(257) + e(274) + e(295)] || document[e(293) + e(283)];
};
function si() {
  const e = ["13026SnUyYP", "ullScreen", "3975955QZNYAO", "FullScreen", "QIrVY", "exitFullsc", "enElement", "lscreen", "reen", "webkitExit", "webkitRequ", "eenElement", "fullscreen", "msRequestF", "Fullscreen", "mozRequest", "msFullscre", "6102144miniqT", "ent", "Element", "requestFul", "mozFullScr", "ttvfq", "webkitFull", "9HfhyTw", "21QnmXPm", "761824mYtcsq", "screen", "58328KBTwTd", "ullscreen", "mozCancelF", "tor", "querySelec", "msExitFull", "estFullscr", "16852800CpQkfv", "120YIqLkB", "bcGeO", "#screen_ma", "in_", "screenElem", "386094ylkxNV", "een"];
  return si = function() {
    return e;
  }, si();
}
const f_ = (e) => {
  const n = or, t = document[n(266) + n(265)](n(272) + n(273) + e);
  t[n(254) + n(284)] ? t[n(254) + n(284)]() : t[n(292) + n(280)] ? t[n(292) + n(280)]() : t[n(287) + n(268) + n(276)] ? n(281) === n(281) ? t[n(287) + n(268) + n(276)]() : _0x272caa[n(286) + n(291)]() : t[n(290) + n(263)] && t[n(290) + n(263)]();
}, d_ = () => {
  const e = or;
  document[e(282) + e(285)] ? document[e(282) + e(285)]() : document[e(264) + e(278)] ? document[e(264) + e(278)]() : document[e(286) + e(291)] ? document[e(286) + e(291)]() : document[e(267) + e(261)] && (e(271) === e(256) ? _0x5285b7[e(254) + e(284)]() : document[e(267) + e(261)]());
};
(function(e, n) {
  const t = zr, r = e();
  for (; ; )
    try {
      if (-parseInt(t(324)) / 1 + -parseInt(t(270)) / 2 * (parseInt(t(265)) / 3) + -parseInt(t(329)) / 4 + parseInt(t(523)) / 5 + -parseInt(t(406)) / 6 * (parseInt(t(293)) / 7) + parseInt(t(185)) / 8 + parseInt(t(355)) / 9 * (parseInt(t(240)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 397859);
function zr(e, n) {
  const t = ai();
  return zr = function(r, o) {
    return r = r - 174, t[r];
  }, zr(e, n);
}
function ai() {
  const e = ["H5v-2zm12 ", ".225-1.1 2", "gClientRec", "5 8.886 8.", "28A8.95 8.", "9 21V3a1 1", "0 6.961 6.", "0 0 0 .38-", "fullscreen", ".999-4.909", "10l.002 10", "M20 3H4a1 ", "pageX", "13 7.13 0 ", "9TSYCJA", "7 2-2v-4h4", "children", "0 0 24 24", " 13a9.09 9", " 5l3.975 3", "M12 16c1.6", "27.05A1 1 ", "pageY", "6.996 6.99", "m-2-4h2V3h", "19 9.053 9", "UTSWz", "2 2zm2 7v-", ".614 16 19", "1 0 0 0-1-", "1.89-1.89A", "H13z", "38-.18V2L8", "08 3.677L7", ".832L6.697", "6zm0 4h6v2", "0a.999.999", "svg", "a1 1 0 0 0", "v2h8V5h3v6", ".14a6.961 ", "h4zm12-6h-", "12%", "left", "028 7.028 ", "http://www", "103.897 2 ", "width", " 2-2v-7c0-", "m4.431 12.", ".186a8.94 ", "2v2H9v-2zM", "screenchan", ".183-1.814", "75z", "-1-1H8a1 1", "-2.43-2.43", " 15H4V9z", "hEeXX", "57-5.428 6", "shortcutEv", "-1.355-3.2", "2 0 0 0-2-", "Paste", "886 0 0 0 ", "48yweRQg", "enchange", "includes", "addEventLi", "zM4 20V10h", ".257 5.127", "3 0-2 .897", "88 7.2 7.2", "touch", "0 0 0 .782", "2 0 0 0-2 ", "1 1.892 1.", "17-.056-.0", "03-.897-2-", "59 15.016 ", "M6 12h6v2H", "2.725 7.11", "Reload", "Copy", "h-5c-1.103", " 2v13c0 1.", "2v10a2 2 0", "stener", "get", "416 3.377 ", "assistive", "33L12 5.86", "board", "qRLcZ", "6l3.612-4.", "taskId", "10c-1.103 ", "closest", "M20.978 13", "Home", "3c.033 0 .", "Recents", "data", "3.218-1.35", "3 9a1.003 ", "H5v-5H3v7h", "clientY", " 0 0 0-3.2", "7-2-2-2h-3", "M4 6h16v2H", "6.961 0 0 ", "0 0 1-3.53", "1.331-1.09", "S18.387 17", "current", "47 3.999 7", "053 7.005 ", " 7H4c-1.10", "0 0 0 14 2", "Unlock", "0V4a1 1 0 ", "27-1.547 5", "6v2H4z", "3s3 1.346 ", "touch_", "3 3v1h2zm1", " 1 0 0 0 1", " 8.95 8.95", "s-.775-3.9", "4v-4c0-1.1", "9.02 0 0 0", "zIndex", "YGLKs", "M20.817 11", "-2-5zM4 17", "H9V7zm0 4h", " 2 2zm0-8h", "c1.103 0 2", "329-3-3-3-", "1 2.502 1.", "height", "-7v2h5z", "qACYn", "mouse", "clientX", " 2.428 2.4", "data-id", "2zm2-4h-2v", "M20 2H10c-", " 2v5H4V5h3", "clipboard", "4h2v2h-2v-", "-2-2-2zm-9", "7-2-2-2H9V", "cursor", "mozfullscr", "03 0 2-.89", "showMenu", "892A6.967 ", "reload", "top", "assistive_", "014 0 0 0 ", "345-5.236 ", "passive", " 1.814-.18", "M21 5H3a2 ", "preventDef", "255, 255, ", " 0 0 0-1.5", "7.032 15 7", "0-2 .897-2", "95 0 0 0 1", "0 0-1.554-", "0 1-2.822 ", "6a1 1 0 0 ", "11.75", "822 13 9A1", "Board", "M16 7v10c1", "1.1-1.332A", "Screen", "1897120OpdhLP", " 0 0 2 2h1", "V5h14v14z", "7 2-2v-8c0", "1.103 0-2 ", "6.967 0 0 ", "6 1.907 7.", "move", "4.243 7 7v", "-.769zm-8.", "93-.019a1.", "ent", "1.103-.897", "removeEven", " 0 0 0-.57", "8a2 2 0 0 ", "6H7v-2h10v", "1 0 0 0-1 ", "l10.283 7.", "focus", " 0 0 0-1 1", "ibyVb", "69-.823l-1", "tcWVs", ".387 1.386", "set", "0v10z", "4.445-2.96", "H4zm16-6h-", "2 0 0 0 21", "1.003 0 0 ", "right", "7 16 3v2c2", "Hide ID", ".053 0 0 0", ".015.057-.", "4c-.025-.0", "forEach", "sJoDu", "2 2h7c0 1.", "rgba(255, ", "xODto", "4-.002.968", "0 2-2V7a2 ", "getBoundin", "opacity", "2h-2V7zm0 ", "4v2h6zM8 2", "7zm11-5h-2", " 4 .002 8H", ".044 1.435", "31 3-3s-1.", "8.94 0 0 0", "8.952 8.95", "readText", "961 0 0 1-", "2.757-2.24", ".103.897 2", "volume", "4c0-1.103-", "34 9.096 9", "v2z", "48 3.832a1", " 5.999-9S1", "-1.052-3.3", "8.347l-3.0", "-3.229 2-5", ".028 9.028", "Show ID", "M10 4H8v4H", "h2.697l5.7", "-2-2-2zm-1", " 3.999 4.0", "7a1 1 0 0 ", "2262272cNfdgW", "msfullscre", "M16 21c3.5", ".116c.026-", "7zm0 4h2v2", "2H4zm0 5h1", "2 22a9.09 ", "6 0 0 1 5 ", "2-.082-.03", ".096 0 0 0", "3 9.014 9.", "2 2v8c0 1.", "2.503-1.05", "h-2v6h6z", "home", "2zM9 7h2v2", "touchend", "7h7l.001 7", "eenchange", "4h-2V7h2v2", "13H3a9.02 ", "ault", "3 1.331-3 ", "228 0 0 0 ", " 2v16c0 1.", ".089-1.218", "fill", "action", "paste", "Back", "-2 2v6c0 1", " 0-2 .897-", "Sync", "0 1-1V4a1 ", "Volume", "touchmove", "3 0 2-.897", "0h2v-6H4v2", "3H6c-1.103", " 0 0 0 1.0", "1zm-1 16H5", "75.931l2 1", "3-5-5-5S7 ", "V6.002c.48", "sync", "4zm0 5h16v", ".897-2-2-2", "touch_clas", "mousemove", " 0 0 0-1.8", "2 2h10c1.1", "cpiWm", " 0 0 1 1h1", "touchstart", "M20 11V5c0", "13441620adVyMs", "Icon", "9 9.228 9.", "pqgWW", "0 0-.396-1", "19-1.355 9", "4 7.002 7.", "3 1.329 3 ", "15%", "6v6h2v-4h4", "H6z", "7 2-2V4c0-", "zm0-6h-4V4", "1-.644 1.1", "v7h2zm5 14", "2 2h7c1.10", "8 1.039 7.", "target", "a.995.995 ", "back", ".002 16H6.", "landscape", "path", "copy", "7.005 0 0 ", "24906PHkHVR", "getAttribu", "ZrgAh", "002 0 0 1-", "mouseup", "46ZVMcpI", "71 0 3-1.3", "5.46 1.701", "1.346-3 3-", "click", "type", "1 19 13a7.", "device_id", "circle", " 1.539 5.0", "shortcutCo", "027 1.027 ", "674.31a1 1", "2-2h-4V4h1", "0 0 1-.55 ", "grab", "-2h2v2zm0-", "1.048z", "tListener", "v5h-5v2h7z", "style", "2-.116C7.0", "9.527 4.54", "299257THaZIz", ".897-2 2v4", "-1.103-.89", "032 7.032 ", "061-.016.0", "H4c-1.103 ", "recents", ".w3.org/20", "webkitfull", "9.09 0 0 0", " 7.11 0 0 ", "shortcut", "017.082-.0", "M17 8V7c0-", "-.897 2-2V", "2zm-8 2h2v", "div", "unlock", "2 2h12c1.1", ".21a1 1 0 ", "isDown", "mousedown", " 2v10c0 1.", "M5 5h5V3H3", " 0 0 1-.85", "5 7h2v2H5V", "change", "menu_", "0 1.767.51", ".004 1.004", "6v-8h12z", "594109uTxGrm", " 0 0 0-.38", "3a.986.986", ".09 0 0 0-", "udVzm", "1925792kZGoRZ", "1v16a1 1 0", "8v12.264l-", ".024l-14-1", "XNsKw", "0 0 1.645z", "7c0-1.654 ", "now", "0 18V4h10l", "00/svg", "M16.75 2h-", "3 3z"];
  return ai = function() {
    return e;
  }, ai();
}
const h_ = ir((e, n) => {
  const t = zr, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = ve(l), d = {};
  d.x = 0, d.y = 0;
  const h = ve(d), [m, f] = ut(null), [g, p] = ut(0), y = ve(null), b = ve(null), _ = ve(null), E = {};
  E[t(495)] = t(530), E[t(568)] = 0.5, E[t(472)] = 999;
  const [x, T] = ut(E), S = {};
  S[t(472)] = 1e3;
  const [j, M] = ut(S), U = ve(null), ee = ve(null), [Y, B] = ut(null), F = (z) => {
    const O = t;
    if (z[O(508) + O(206)](), s[O(429)][O(498)] == !0)
      if (O(434) === O(267)) _0x50d9d7[O(409) + O(428)](_0x244171, _0x43f741);
      else return;
    const ye = Nt[z[O(275)]], $e = a[O(455)], De = _[O(455)], be = $e[O(567) + O(343) + "t"](), at = De[O(567) + O(343) + "t"](), Be = 5;
    let At, bt;
    const fn = be[O(388)] - at[O(388)], Vt = be[O(481)] - at[O(481)];
    if (z[O(275)][O(408)](O(414))) {
      const { touches: Me, changedTouches: Ze } = z, $t = Me[0] ?? Ze[0];
      At = $t[O(353)], bt = $t[O(363)];
    } else z[O(275)][O(408)](O(484)) && (At = z[O(485)], bt = z[O(447)]);
    if (ye == Nt[O(314)])
      if (O(328) === O(333)) {
        const Me = _0x513bf8();
        _0x3f90f0(_0xb13af7, Me);
      } else {
        s[O(548)]({ ...s[O(429)], isDown: !0 }), u[O(455)].x = At - at[O(384)], u[O(455)].y = bt - at[O(501)];
        const Me = {};
        Me[O(568)] = 1, Me[O(495)] = O(285);
        const Ze = { ...x, ...Me };
        T(Ze), p(performance[O(336)]());
      }
    else if (ye == Nt[O(233)]) {
      if (s[O(429)][O(313)] == !1) return;
      let Me = At - u[O(455)].x - be[O(384)], Ze = bt - u[O(455)].y - be[O(501)];
      const $t = fn - Be;
      (Me < Be || Me > $t || Ze < Be || Ze > Vt - Be) && !ee[O(455)] || (De[O(290)][O(384)] = Me + "px", De[O(290)][O(501)] = Ze + "px", h[O(455)].x = Me, h[O(455)].y = Ze);
    } else if (ye == Nt[O(269)])
      if (O(236) !== O(236)) _0x55b7db && (_0x2540e5[O(455)] = _0x350312), _0x165d88();
      else {
        const Me = performance[O(336)]() - g;
        if (m == Nt[O(314)] || Me < 200)
          if (O(544) !== O(544)) _0x267c16(_0x280732);
          else {
            const je = {};
            je[O(498)] = !0, je[O(313)] = !1, s[O(548)]({ ...s[O(429)], ...je });
          }
        else s[O(548)]({ ...s[O(429)], isDown: !1 });
        const Ze = {};
        Ze[O(568)] = 0.5, Ze[O(495)] = O(530);
        const $t = { ...x, ...Ze };
        T($t);
      }
    f(ye), De[O(542)]();
  }, J = async (z) => {
    const O = t;
    z[O(508) + O(206)]();
    const ye = z[O(257)][O(438)](O(309))[O(266) + "te"](O(487));
    if (ye === O(349))
      O(399) !== O(367) ? vu() ? d_() : f_(r) : _0x433477() ? _0x4320b4() : _0x19fec9(_0x267dfb);
    else {
      const $e = {};
      $e[O(212)] = O(401) + O(534), $e[O(304)] = ye, $e[O(443)] = "";
      const De = $e;
      if (ye === O(213))
        if (O(564) !== O(564)) {
          const be = _0x1ba879[O(455)];
          be[O(290)][O(388)] = _0x4bf891[O(455)] != O(261) ? O(383) : "", be[O(290)][O(481)] = _0x25fb12[O(455)] == O(261) ? O(383) : "", be[O(290)][O(554)] = O(248), be[O(290)][O(501)] = "5%", be[O(290)][O(384)] = "";
        } else De[O(443)] = await navigator[O(491)][O(577)]();
      ye === O(263) && (De[O(436)] = O(280) + "py"), i(o_, De);
    }
    s[O(548)]({ ...s[O(429)], showMenu: !1 }), b[O(455)][O(542)]();
  }, N = (z) => {
    const O = t;
    if (O(561) !== O(561)) {
      if (_0x2ab3a4[O(429)][O(313)] == !1) return;
      let ye = _0x26cf84 - _0x276369[O(455)].x - _0x1af823[O(384)], $e = _0x13ea14 - _0xa60cbf[O(455)].y - _0x577663[O(501)];
      const De = _0x210d7e - _0xec6fc5;
      (ye < _0x3b395c || ye > De || $e < _0x4beaea || $e > _0x2a3b1f - _0x1f807b) && !_0x354174[O(455)] || (_0x21cc9d[O(290)][O(384)] = ye + "px", _0x1378e8[O(290)][O(501)] = $e + "px", _0x4088e7[O(455)].x = ye, _0x11d42c[O(455)].y = $e);
    } else {
      const ye = vu();
      i(i_, ye);
    }
  };
  Ve(() => {
    requestAnimationFrame(() => {
      const z = zr;
      if (z(546) === z(473)) _0x481c25[z(536) + z(288)](_0x37aae8, _0x42d7ca);
      else {
        const O = { ...j };
        O[z(568)] = s[z(429)][z(498)] ? 1 : 0, M(O);
      }
    });
  }, [s]), Ve(() => {
    const z = t, O = a[z(455)], ye = [z(349) + z(319), z(301) + z(393) + "ge", z(496) + z(203), z(186) + z(407)];
    return O && ye[z(560)](($e) => {
      const De = z;
      O[De(409) + De(428)]($e, N);
    }), () => {
      const $e = z;
      O && O[$e(536) + $e(288)]($e(274), N);
    };
  }, []), Ve(() => {
    const z = t, O = _[z(455)], ye = b[z(455)];
    if (ye && (z(243) !== z(243) ? (_0x48b3f8 = _0x181a1b[z(485)], _0x451d68 = _0x2964ef[z(447)]) : ye[z(409) + z(428)](z(274), J)), O) {
      const $e = {};
      $e[z(505)] = !1;
      const De = $e;
      return o ? (O[z(409) + z(428)](z(238), F, De), O[z(409) + z(428)](z(220), F, De), O[z(409) + z(428)](z(201), F)) : [z(233), z(314), z(269)][z(560)]((be) => {
        const at = z;
        O[at(409) + at(428)](be, F);
      }), () => {
        const be = z;
        ye && ye[be(536) + be(288)](be(274), J), O && (o ? [be(238), be(220), be(201)][be(560)]((at) => {
          const Be = be;
          Be(483) === Be(483) ? O[Be(536) + Be(288)](at, F) : _0x329e47[Be(536) + Be(288)](_0x47fcac, _0x64d89a);
        }) : [be(233), be(314), be(269)][be(560)]((at) => {
          const Be = be;
          O[Be(536) + Be(288)](at, F);
        }));
      };
    }
  }, [o, F]);
  const A = () => {
    const z = t, O = _[z(455)];
    O[z(290)][z(388)] = U[z(455)] != z(261) ? z(383) : "", O[z(290)][z(481)] = U[z(455)] == z(261) ? z(383) : "", O[z(290)][z(554)] = z(248), O[z(290)][z(501)] = "5%", O[z(290)][z(384)] = "";
  };
  Ru(n, () => ({ fixTouch: (z) => {
    const O = t;
    z && (U[O(455)] = z), A();
  }, setFullscreen: (z) => {
    B(z);
  } }));
  const R = {};
  R[t(211)] = t(563) + t(509) + "1)";
  const k = {};
  k.d = Y ? t(180) + t(570) + t(222) + t(382) + t(249) + t(252) + t(198) : t(316) + t(254) + t(446) + t(571) + t(289) + t(365) + t(482);
  const H = {};
  H[t(357)] = t(522);
  const D = {};
  D[t(211)] = t(563) + t(509) + "1)";
  const q = {};
  q.d = t(489) + t(527) + t(294) + t(298) + t(512) + t(315) + t(387) + t(235) + t(497) + t(356) + t(478) + t(307) + t(582) + t(231) + t(410) + t(351) + t(551) + t(470) + t(419) + t(283) + t(549);
  const te = {};
  te.d = t(421) + t(376) + t(250);
  const K = {};
  K[t(357)] = t(424);
  const ie = {};
  ie[t(211)] = t(563) + t(509) + "1)";
  const ae = {};
  ae.d = t(239) + t(295) + t(449) + t(379) + t(396) + t(543) + t(298) + t(512) + t(426) + t(387) + t(562) + t(387) + t(255) + t(221) + t(389) + t(535) + t(493) + t(490) + t(380) + t(425) + t(216) + t(368) + t(202) + t(372);
  const le = {};
  le[t(357)] = t(404);
  const we = {};
  we[t(211)] = t(563) + t(509) + "1)";
  const me = {};
  me.d = t(306) + t(579) + t(227) + t(531) + t(223) + t(216) + t(196) + t(387) + t(311) + t(497) + t(526) + t(295) + t(494) + t(335) + t(273) + t(464) + t(466) + t(572) + t(323);
  const Pe = {};
  Pe[t(357)] = t(460);
  const Ae = {};
  Ae[t(211)] = t(563) + t(509) + "1)";
  const he = {};
  he.d = t(361) + t(271) + t(574) + t(479) + t(207) + t(247) + t(340);
  const Ye = {};
  Ye.d = t(474) + t(391) + t(575) + t(402) + t(366) + t(557) + t(397) + t(468) + t(448) + t(245) + t(178) + t(234) + t(373) + t(360) + t(228) + t(565) + t(573) + t(381) + t(451) + t(480) + t(457) + t(264) + t(417) + t(499) + t(528) + t(276) + t(296) + t(284) + t(422) + t(303) + t(253) + t(413) + t(317) + t(256) + t(385) + t(452) + t(529) + t(354) + t(515) + t(347) + t(578) + t(197) + t(246) + t(268) + t(371) + t(364) + t(192) + t(205) + t(471) + t(279) + t(583) + t(194) + t(486) + t(345) + t(513) + t(191) + t(302) + t(506) + t(195) + t(503) + t(444) + t(344) + t(405) + t(453) + t(242) + t(208) + t(521) + t(576) + t(552) + t(359) + t(327) + t(394) + "z";
  const C = {};
  C[t(357)] = t(423);
  const re = {};
  re[t(211)] = t(563) + t(509) + "1)";
  const $ = {};
  $.d = t(507) + t(416) + t(427) + t(524) + t(538) + t(566) + t(403) + t(308) + t(569) + t(492) + t(200) + t(476) + t(392) + t(318) + t(189) + t(341) + t(539) + t(488) + t(286) + t(204) + "z";
  const V = {};
  V[t(357)] = t(519);
  const I = {};
  I[t(211)] = t(563) + t(509) + "1)";
  const ne = {};
  ne.d = t(339) + t(437) + t(512) + t(209) + t(387) + t(235) + t(497) + t(251) + t(535) + t(182) + t(337) + t(260) + t(395);
  const ot = {};
  ot.cx = t(517), ot.cy = "18", ot.r = "1";
  const xe = {};
  xe[t(357)] = t(c ? 556 : 179);
  const ue = {};
  ue[t(211)] = t(563) + t(509) + "1)";
  const Ke = {};
  Ke.d = t(187) + t(462) + t(350) + t(174) + t(292) + t(555) + t(547) + t(183) + t(456) + t(454) + t(369) + t(584);
  const ft = {};
  ft.d = t(520) + t(342) + t(177) + t(469) + t(475) + t(181) + t(585) + t(322) + t(224) + t(362) + t(459) + t(461) + t(514) + t(375) + t(458) + t(412) + t(215) + t(580) + t(477) + t(441) + t(297) + t(533) + t(281) + t(348) + t(188) + t(558) + t(305) + t(432) + t(331) + t(550) + t(559) + t(418) + t(193) + t(326) + t(325) + t(291) + t(420) + t(511) + t(398);
  const lt = {};
  lt[t(357)] = t(219);
  const Qt = {};
  Qt[t(211)] = t(563) + t(509) + "1)";
  const Rt = {};
  Rt.d = t(439) + t(312) + t(244) + t(332) + t(377) + t(510) + t(226) + t(184) + t(321) + t(435) + t(430) + t(272) + t(175) + t(400) + t(210) + t(258) + t(415) + t(532) + t(282) + t(537) + t(176) + t(374) + t(411) + t(541) + t(504) + t(287);
  const Zt = {};
  Zt[t(357)] = t(217);
  const Bt = {};
  Bt[t(211)] = t(563) + t(509) + "1)";
  const Ht = {};
  Ht.d = t(450) + t(230) + t(190) + t(463);
  const en = {};
  en[t(357)] = t(442);
  const tn = {};
  tn[t(211)] = t(563) + t(509) + "1)";
  const nn = {};
  nn.d = t(352) + t(540) + t(330) + t(237) + t(516) + t(218) + t(370) + t(225) + t(525);
  const zt = {};
  zt[t(357)] = t(440);
  const Ie = {};
  Ie[t(211)] = t(563) + t(509) + "1)";
  const st = {};
  st.d = t(390) + t(518) + t(467) + t(346) + t(510) + t(545) + t(445) + t(553) + t(334);
  const Ft = {};
  return Ft[t(357)] = t(214), G.jsxs(G.Fragment, { children: [s[t(429)][t(498)] ? G.jsxs(c_, { id: t(502) + t(320) + r, style: j, ref: b, children: [G.jsxs(St, { "data-id": t(349), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: R, children: G.jsx(t(262), k) }), G.jsx(Ct, H)] }), G.jsxs(St, { "data-id": t(263), children: [G.jsxs(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: D, children: [G.jsx(t(262), q), G.jsx(t(262), te)] }), G.jsx(Ct, K)] }), G.jsxs(St, { "data-id": t(213), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: ie, children: G.jsx(t(262), ae) }), G.jsx(Ct, le)] }), G.jsxs(St, { "data-id": t(310), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "25", height: "25", viewBox: t(358), style: we, children: G.jsx(t(262), me) }), G.jsx(Ct, Pe)] }), G.jsxs(St, { "data-id": t(500), children: [G.jsxs(t(378), { xmlns: t(386) + t(300) + t(338), width: "25", height: "25", viewBox: t(358), style: Ae, children: [G.jsx(t(262), he), G.jsx(t(262), Ye)] }), G.jsx(Ct, C)] }), G.jsxs(St, { "data-id": t(433), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "25", height: "25", viewBox: t(358), style: re, children: G.jsx(t(262), $) }), G.jsx(Ct, V)] }), G.jsxs(St, { "data-id": t(277), children: [G.jsxs(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: I, children: [G.jsx(t(262), ne), G.jsx(t(278), ot)] }), G.jsx(Ct, xe)] }), G.jsxs(St, { "data-id": t(581), children: [G.jsxs(t(378), { xmlns: t(386) + t(300) + t(338), width: "25", height: "25", viewBox: t(358), style: ue, children: [G.jsx(t(262), Ke), G.jsx(t(262), ft)] }), G.jsx(Ct, lt)] }), G.jsxs(St, { "data-id": t(229), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: Qt, children: G.jsx(t(262), Rt) }), G.jsx(Ct, Zt)] }), G.jsxs(St, { "data-id": t(299), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: Bt, children: G.jsx(t(262), Ht) }), G.jsx(Ct, en)] }), G.jsxs(St, { "data-id": t(199), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: tn, children: G.jsx(t(262), nn) }), G.jsx(Ct, zt)] }), G.jsxs(St, { "data-id": t(259), children: [G.jsx(t(378), { xmlns: t(386) + t(300) + t(338), width: "28", height: "28", viewBox: t(358), style: Ie, children: G.jsx(t(262), st) }), G.jsx(Ct, Ft)] })] }) : null, G.jsx(u_, { id: t(502) + t(232) + "s_" + r, className: t(431), ref: y, style: x, children: G.jsx(l_, { src: a_, className: t(431), id: t(502) + t(465) + r, alt: t(241), ref: _, draggable: !1 }) })] });
}), Je = yn;
function yn(e, n) {
  const t = ci();
  return yn = function(r, o) {
    return r = r - 257, t[r];
  }, yn(e, n);
}
(function(e, n) {
  const t = yn, r = e();
  for (; ; )
    try {
      if (parseInt(t(300)) / 1 + parseInt(t(318)) / 2 + -parseInt(t(298)) / 3 * (-parseInt(t(314)) / 4) + -parseInt(t(324)) / 5 + -parseInt(t(320)) / 6 + -parseInt(t(317)) / 7 + parseInt(t(259)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 754550);
const yu = (e, n) => {
  const t = yn;
  return e[t(312)] < n[t(312)] ? !1 : n[t(342)]((r, o) => r === e[o]);
}, x_ = (e) => {
  const n = yn, t = new Uint8Array(e);
  for (let r = 0; r <= t[n(312)] - 5; r++)
    if (n(341) === n(341)) {
      let o = 0;
      if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1 ? o = 3 : t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1 && (o = 4), o > 0) {
        if (n(296) !== n(296)) {
          let i = 0;
          if (_0x147cc4[_0x9b6a07] === 0 && _0x3c10d5[_0x504247 + 1] === 0 && _0x29b8ed[_0x30270e + 2] === 1 ? i = 3 : _0x5e2b79[_0x447583] === 0 && _0x4d4e53[_0xd05c32 + 1] === 0 && _0x6b6f67[_0xfa5eaf + 2] === 0 && _0x587dc3[_0x5a7add + 3] === 1 && (i = 4), i > 0 && (_0x5e4b18[_0x711749 + i] & 31) === 5)
            return !0;
        } else if ((t[r + o] & 31) === 5) return !0;
      }
    } else _0x319569[n(274)] = (void 0)[n(274)], _0x3d7d97[n(258)] = (void 0)[n(258)], (void 0)[n(283)][n(330)](_0x58d6cf, 0, 0, (void 0)[n(274)], (void 0)[n(258)]);
  return !1;
};
function ci() {
  const e = ["451494lgEaaE", "endBytes", "YPvbU", "setOrienta", "buildDecod", "codedHeigh", "lock", "setIsConne", "frameSize", "restore", "decode", "tion", "length", "rotate", "25404DcmHEz", "startBytes", "scaleSize", "4979597lgjArR", "566528FwGuKJ", "concat", "2527626WDzLTO", "current", "FVmRd", "state", "7200830ezVEgy", "translate", "isMobile", "videoMeta", "delta", "key", "drawImage", "close", "maxWidth", "innerWidth", "error", "buffer", "jfWof", "8Chunks", "min", "orientatio", "iframe", "fzNTn", "every", "rLatency", "autoResize", "from", "isFullsCre", "BFuMS", "height", "20537568xTsCZZ", "celeration", "Decoder er", "TgDAg", "codedWidth", "getContext", "concatUint", "data", "set", "amp", "optimizeFo", "scale", "codec", "timestamp", "getBigUint", "width", "push", "isPlay", "innerHeigh", "ror:", "setVideoMe", "decoder", "type", "baseTimest", "ctx", "slice", "clearRect", "aGrSV", "configure", "chunks", "canvasRef", "8Arrays", "dKQGM", "hardwareAc", "portrait", "rootSize", "save", "Ollbe", "landscape", "12wrphIX", "now"];
  return ci = function() {
    return e;
  }, ci();
}
var bu, _u, Su, Cu, wu, Eu, Ou, Tu;
class p_ {
  constructor(n, t, r, o, i, s) {
    qe(this, Tu, (n, t, r, o) => {
      const i = Je, s = r / n, a = o / t;
      if (a < 0.4 && s > a) {
        const u = {};
        return u[i(274)] = r, u[i(258)] = t * s, u;
      }
      const c = Math[i(338)](s, a), l = {};
      return l[i(274)] = n * c, l[i(258)] = t * c, l;
    });
    qe(this, Ou, () => {
      var s;
      const n = Je;
      if (!this[n(308)][n(263)]) return;
      const t = this[n(346) + "en"] ? this[n(326)] ? window[n(333)] - 20 : this[n(332)] : this[n(332)], r = this[n(339) + "n"] == n(297) ? window[n(333)] : window[n(277) + "t"] - (this[n(326)] ? 12 : 50), o = this[n(316)](this[n(308)][n(263)], this[n(308)][n(305) + "t"], t, r);
      this[n(274)] = o[n(274)], this[n(258)] = o[n(258)], !this[n(294)] && ((s = this[n(307) + "ct"]) == null || s.call(this, !0));
      const i = {};
      i[n(274)] = o[n(274)], i[n(258)] = o[n(258)], this[n(294)] = i;
    });
    qe(this, Eu, (n) => {
      const t = Je;
      this[t(339) + "n"] = n, this[t(326)] && screen[t(339) + "n"][t(306)](n);
    });
    qe(this, wu, (n) => {
      const t = Je, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(327)] = r;
    });
    qe(this, Cu, () => {
      const n = Je, t = new VideoDecoder({ output: async (o) => {
        const i = yn;
        if (i(257) === i(257)) {
          const s = await createImageBitmap(o), a = {};
          a[i(263)] = o[i(263)], a[i(305) + "t"] = o[i(305) + "t"], this[i(308)] = a, this[i(283)][i(285)](0, 0, this[i(258)], this[i(258)]);
          const c = this[i(289)][i(321)];
          this[i(339) + "n"] == i(297) ? i(322) === i(322) ? (c[i(274)] = this[i(258)], c[i(258)] = this[i(274)], this[i(283)][i(295)](), this[i(283)][i(325)](0, this[i(274)]), this[i(283)][i(313)](Math.PI / 2), this[i(283)][i(270)](-1, -1), this[i(283)][i(330)](s, 0, 0, this[i(274)], this[i(258)]), this[i(283)][i(309)]()) : (_0x15f6cd[i(274)] = this[i(258)], _0x51e158[i(258)] = this[i(274)], this[i(283)][i(295)](), this[i(283)][i(325)](0, this[i(274)]), this[i(283)][i(313)](_0x27463e.PI / 2), this[i(283)][i(270)](-1, -1), this[i(283)][i(330)](_0x314897, 0, 0, this[i(274)], this[i(258)]), this[i(283)][i(309)]()) : (c[i(274)] = this[i(274)], c[i(258)] = this[i(258)], this[i(283)][i(330)](s, 0, 0, this[i(274)], this[i(258)])), s[i(331)](), o[i(331)]();
        } else {
          const s = new _0x3f9d67(_0x36f637);
          for (let a = 0; a <= s[i(312)] - 5; a++) {
            let c = 0;
            if (s[a] === 0 && s[a + 1] === 0 && s[a + 2] === 1 ? c = 3 : s[a] === 0 && s[a + 1] === 0 && s[a + 2] === 0 && s[a + 3] === 1 && (c = 4), c > 0 && (s[a + c] & 31) === 5)
              return !0;
          }
          return !1;
        }
      }, error: (o) => console[n(334)](n(261) + n(278), o) }), r = {};
      return r[n(271)] = this[n(271)], r[n(292) + n(260)] = this[n(292) + n(260)], r[n(269) + n(343)] = !0, t[n(287)](r), t;
    });
    qe(this, _u, (n, t) => {
      const r = Je, o = Array[r(345)](n)[r(319)](Array[r(345)](t));
      return new Uint8Array(o);
    });
    qe(this, bu, (n) => {
      var s;
      const t = Je;
      if (!this[t(280)] || this[t(280)][t(323)] == t(331) || !this[t(327)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n), o = performance[t(299)]() * 1e3;
      if (yu(r, this[t(315)]))
        if (t(291) === t(336)) {
          if (!this[t(308)][t(263)]) return;
          const a = this[t(346) + "en"] ? this[t(326)] ? _0x165238[t(333)] - 20 : this[t(332)] : this[t(332)], c = this[t(339) + "n"] == t(297) ? _0x480eef[t(333)] : _0x225375[t(277) + "t"] - (this[t(326)] ? 12 : 50), l = this[t(316)](this[t(308)][t(263)], this[t(308)][t(305) + "t"], a, c);
          this[t(274)] = l[t(274)], this[t(258)] = l[t(258)], !this[t(294)] && ((s = this[t(307) + "ct"]) == null || s.call(this, !0));
          const u = {};
          u[t(274)] = l[t(274)], u[t(258)] = l[t(258)], this[t(294)] = u;
        } else {
          this[t(288)] = [];
          return;
        }
      else if (yu(r, this[t(301)])) {
        const a = r[t(284)](5), c = new DataView(a[t(335)]);
        o = Number(c[t(273) + "64"](0, !1)), r = this[t(265) + t(337)](), this[t(288)] = [];
      } else if (t(302) === t(302)) {
        this[t(288)][t(275)](r);
        return;
      } else {
        const a = _0x208583[t(284)](5), c = new _0x590773(a[t(335)]);
        _0x2d325b = _0x5ee990(c[t(273) + "64"](0, !1)), _0x9e5beb = this[t(265) + t(337)](), this[t(288)] = [];
      }
      const i = x_(r);
      if (i && (this[t(340)] = r), this[t(340)] && this[t(327)]) {
        !this[t(276)] && (t(286) === t(262) ? _0x136646[t(339) + "n"][t(306)](_0x5952c5) : (r = this[t(265) + t(290)](this[t(327)], this[t(340)]), this[t(276)] = !0));
        const a = {};
        a[t(272)] = o, a[t(281)] = t(i ? 329 : 328), a[t(266)] = r, this[t(280)][t(310)](new EncodedVideoChunk(a));
      }
    });
    const a = yn;
    this[a(289)] = r, this[a(271)] = o, this[a(326)] = n, this[a(332)] = t, this[a(307) + "ct"] = s, this[a(274)] = null, this[a(258)] = null, this[a(276)] = null, this[a(327)] = null, this[a(340)] = null;
    const c = {};
    c[a(274)] = null, c[a(258)] = null, this[a(308)] = c, this[a(294)] = null, this[a(339) + "n"] = a(293), this[a(346) + "en"] = null, this[a(292) + a(260)] = i, this[a(283)] = r[a(321)][a(264)]("2d"), this[a(280)] = this[a(304) + "er"](), this[a(288)] = [], this[a(315)] = new Uint8Array([115, 116, 97, 114, 116]), this[a(301)] = new Uint8Array([101, 110, 100, 33, 33]), this[a(282) + a(268)] = 0;
  }
  [(Tu = Je(316), Ou = Je(344), Eu = Je(303) + Je(311), wu = Je(279) + "ta", Cu = Je(304) + "er", Su = Je(265) + Je(337), _u = Je(265) + Je(290), bu = Je(310), Su)]() {
    const n = Je;
    let t = 0;
    for (const i of this[n(288)]) t += i[n(312)];
    const r = new Uint8Array(t);
    let o = 0;
    for (const i of this[n(288)])
      r[n(267)](i, o), o += i[n(312)];
    return r;
  }
}
(function(e, n) {
  const t = qn, r = e();
  for (; ; )
    try {
      if (-parseInt(t(342)) / 1 * (parseInt(t(279)) / 2) + -parseInt(t(251)) / 3 + -parseInt(t(389)) / 4 * (-parseInt(t(336)) / 5) + parseInt(t(268)) / 6 * (-parseInt(t(271)) / 7) + -parseInt(t(350)) / 8 * (-parseInt(t(249)) / 9) + parseInt(t(286)) / 10 * (parseInt(t(247)) / 11) + parseInt(t(322)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 413123);
function li() {
  const e = ["RKTbG", "Content-Ty", "middle", "headers", "enElement", "margin", "userAgent", "ZYiFq", "uCiNJ", "RanzP", "n/json", "url", "control", "Qirbp", "screen_mai", "bQdQp", "12fOFXEf", "timeout", "primary", "1278263ervyzD", "setOrienta", "MkNPx", "value", "tabIndex", "screen", "delete", "children", "12BipLUX", "tListener", "tojha", "wcrMv", "onSyncIFra", "uhpnp", "now", "2800NodUFZ", "Reconnect", "iframe", "screen_", "autoResize", "center", "eenElement", "large", "QRydo", "lOeXt", "QiRkD", "isDown", "EvhsP", "LOdKj", "type_clien", "text", "onScreenEv", "size", "data", "applicatio", "jSvsO", "video_meta", "dYOAk", "set", "de: ", "taskId", "orientatio", "BLJgx", "width", "decode", "connection", "canvas_", "get_video_", "get", "POST", "COPY_TEXT", "16451100LuLxxx", "msFullscre", "code", "height", "clipboard", "shortcutEv", "screenElem", "showMenu", "connect", "addEventLi", "map", "fsKmR", "info", "password", "15YUPHgV", "NycPY", "shortcut", "response", "setFullscr", "XecCI", "111749dJpWjQ", "FRsch", "fuXKS", "mozFullScr", "SOEJV", "reconnecti", "OptSs", "zIiVC", "9504JgbyVC", "setVideoMe", "unlock", "isFullsCre", "message", "false", "XQsQQ", "webkitFull", "sync", "action", "timeSync", "Element", " closed co", "vpIDw", "connect_er", "ZacHB", "draggable", "method", "ent", "passwd", "red", "DurLA", "Color", "stener", "writeText", "tion", "length", "ror", "LVCVq", "dQloA", "background", "meta", "current", "PWnVe", "een", "iting for ", "status", "test", "UkCqg", "737876tKxRfS", "reload", "pIzWf", "emit", "removeEven", "error", "type", "disconnect", "join_room", "isMobile", "MnxRY", "change", "qxUpP", "fullscreen", "device_id", "msg", "1144zQnEux", "Timeout wa", "63OsTXts", "fixTouch", "1538799rnGpvH"];
  return li = function() {
    return e;
  }, li();
}
function qn(e, n) {
  const t = li();
  return qn = function(r, o) {
    return r = r - 233, t[r];
  }, qn(e, n);
}
const B_ = ir((e, n) => {
  const t = qn, { api: r, dataDevice: o, showAssistive: i, showDeviceId: s, onSyncEvent: a, onSyncButton: c, maxWidth: l, codec: u, hardwareAcceleration: d } = e, h = o[t(245)], m = /iPhone|iPad|iPod|Android/i[t(387)](navigator[t(258)]), f = t(264), g = ve(null), p = ve(null), y = ve(null), b = ve(null), [_, E] = ut(null), [x, T] = ut(null), S = {};
  S[t(329)] = !1, S[t(297)] = !1;
  const [j, M] = ut(S), [U, ee] = ut(null), [Y, B] = ut(null), F = t(317) + h, J = t(289) + h, N = t(266) + "n_" + h, [A, R] = ut([]), k = ve(null), H = ve(/* @__PURE__ */ new Map());
  Ve(() => {
    const C = t;
    C(273) !== C(273) ? _0x260133[C(382)][C(234)](C(354), { action: C(360), ts: _0xa550cd[C(285)]() }) : T(s);
  }, [s]);
  const D = (C) => {
    R((re) => [...re, C]);
  }, q = (C) => {
    const re = t;
    g[re(382)][re(234)](re(354), C), a == null || a(C);
  };
  Ru(n, () => ({ api: async function(C, re = 5e3) {
    const $ = t;
    if ($(363) === $(363)) return new Promise((V, I) => {
      const ne = $;
      if (ne(243) !== ne(337)) {
        const ot = setTimeout(() => {
          const xe = ne;
          H[xe(382)][xe(277)](C[xe(311)]);
          const ue = {};
          ue[xe(359)] = C[xe(359)], ue[xe(311)] = C[xe(311)], ue[xe(386)] = !1, ue[xe(354)] = xe(248) + xe(385) + xe(339), I(ue);
        }, re);
        H[ne(382)][ne(309)](C[ne(311)], (xe) => {
          const ue = ne;
          ue(379) === ue(306) ? (_0x3554e0[ue(382)] && _0x5f520f[ue(382)][ue(290)](), _0x3623ba = _0x450e8a(_0x11ec71)) : (clearTimeout(ot), V(xe));
        }), g[ne(382)][ne(234)](ne(354), C);
      } else _0xb93daa == null || _0xb93daa(_0x1ffc82[ne(245)]);
    });
    _0x227aac && _0x5a1e69[$(238)]();
  }, sync: function(C) {
    const re = t;
    g[re(382)][re(234)](re(354), C);
  }, getDeviceId: function() {
    return o[t(245)];
  } })), Ve(() => {
    (async () => {
      const C = qn;
      if (C(260) !== C(356)) try {
        if (C(259) === C(259)) {
          const re = {};
          re[C(253) + "pe"] = C(305) + C(262);
          const $ = {};
          $[C(245)] = o[C(245)], $[C(335)] = o[C(369)];
          const V = {};
          V[C(263)] = r, V[C(367)] = C(320), V[C(269)] = 1e4, V[C(255)] = re, V[C(304)] = $;
          const I = V, ne = await Q2(I);
          E(ne[C(304)]);
        } else {
          const re = {};
          re[C(359)] = C(302) + C(368), _0xfbeea6[C(382)][C(234)](C(354), re);
        }
      } catch (re) {
        const $ = {};
        $[C(246)] = re, $[C(237)] = C(236), D($);
      }
      else _0x3c4179[C(382)] && _0x33c021[C(382)][C(234)](C(354), { action: C(360), ts: _0x154325[C(285)]() });
    })();
  }, [Y]), Ve(() => {
    const C = t;
    if (g[C(382)] || !_) return;
    const re = {};
    re[C(347) + "on"] = !1;
    const $ = To(_, re);
    return $.on(C(330), () => {
      const V = C;
      if (V(233) === V(348)) _0x1a7cfb[V(382)] && (_0x1488d8[V(382)] = new _0x113121(_0x1a327f, _0x951b6d, _0x33ae70, _0x2c33b3, _0x1089bd, _0x2b347e));
      else {
        const I = {};
        I[V(359)] = V(330), I[V(300) + "t"] = f, I[V(245)] = o[V(245)], I[V(240)] = m, I[V(369)] = o[V(369)], $[V(234)](V(239), I);
      }
    }), $.on(C(239), (V) => {
      const I = C;
      if (I(333) === I(333))
        if (V[I(386)] == !0)
          if (I(296) !== I(341)) {
            g[I(382)] = $, $[I(234)](I(354), { action: I(360), ts: Date[I(285)]() });
            const ne = {};
            ne[I(359)] = I(302) + I(368), $[I(234)](I(354), ne);
          } else _0x389b73(_0x593e79);
        else {
          const ne = {};
          ne[I(246)] = V[I(246)], ne[I(237)] = I(236), D(ne);
        }
      else _0x5b0748[I(326)][I(374)](_0x2cbf46[I(301)]);
    }), $.on(C(276), (V) => {
      const I = C;
      k[I(382)][I(315)](V);
    }), $.on(C(307), (V) => {
      const I = C;
      if (V) {
        if (k[I(382)][I(351) + "ta"](V), !k[I(382)][I(288)]) {
          const ne = {};
          ne[I(359)] = I(283) + "me", $[I(234)](I(354), ne);
        }
      } else {
        const ne = {};
        ne[I(359)] = I(318) + I(381), $[I(234)](I(307), ne);
      }
    }), $.on(C(354), (V) => {
      const I = C;
      if ((V[I(359)] == I(321) || V[I(359)] == I(327) + I(368)) && V[I(301)][I(376)] > 0 ? navigator[I(326)][I(374)](V[I(301)]) : V[I(359)] == I(312) + "n" && (k[I(382)][I(272) + I(375)](V[I(274)]), b[I(382)][I(250)](V[I(274)])), V[I(311)]) {
        const ne = H[I(382)][I(319)](V[I(311)]);
        ne && (I(388) === I(388) ? (ne(V), H[I(382)][I(277)](V[I(311)])) : (_0x358751[I(382)][I(234)](I(354), _0x1e7928), _0x30c020 == null || _0x30c020(_0x4662dc)));
      }
    }), $.on(C(364) + C(377), (V) => {
      const I = C;
      if (I(344) === I(282)) _0x1da07f[I(382)][I(290)]();
      else {
        const ne = {};
        ne[I(246)] = V, ne[I(237)] = I(236), D(ne);
      }
    }), $.on(C(238), (V) => {
      const I = C;
      if (I(371) !== I(298)) {
        const ne = {};
        ne[I(246)] = I(316) + I(362) + I(310) + V[I(324)], ne[I(237)] = I(334), D(ne);
      } else {
        const ne = _0x200cbe[I(382)][I(319)](_0x33c949[I(311)]);
        ne && (ne(_0x3284a4), _0x2a61da[I(382)][I(277)](_0x2e0bd2[I(311)]));
      }
    }), () => {
      const V = C;
      V(295) === V(378) ? _0x517a51(_0x5daed6) : $ && $[V(238)]();
    };
  }, [_]), Ve(() => {
    const C = t;
    if (C(299) !== C(299)) {
      let re;
      return re = _0x110b7d(() => {
        const $ = C;
        _0x54780e[$(382)] && _0x4c6772[$(382)][$(234)]($(354), { action: $(360), ts: _0xf707dc[$(285)]() });
      }, 6e4), () => _0x2a2d69(re);
    } else y[C(382)] && (k[C(382)] = new p_(m, l, y, u, d, ee));
  }, [Y]), Ve(() => {
    const C = t;
    if (C(294) !== C(265)) {
      const re = () => {
        const $ = C, V = document[$(244) + $(361)] || document[$(357) + $(328) + $(368)] || document[$(345) + $(292)] || document[$(323) + $(256)];
        k[$(382)][$(353) + "en"] = !!V, b[$(382)][$(340) + $(384)](!!V), b[$(382)][$(250)]();
      };
      return document[C(331) + C(373)](C(244) + C(242), re), () => {
        const $ = C;
        if ($(281) === $(349)) {
          const V = {};
          V[$(246)] = _0x72d7d5[$(246)], V[$(237)] = $(236), _0x144cf7(V);
        } else document[$(235) + $(280)]($(244) + $(242), re);
      };
    } else _0x334464[C(238)]();
  }, [Y]), Ve(() => {
    let C;
    const re = () => {
      const $ = qn;
      k[$(382)] && ($(241) === $(346) ? _0x1484f0[$(382)] = new _0x16482f(_0x4619bc, _0x409122, _0x5b59e5, _0x52e6d7, _0x4b44c9, _0x562694) : k[$(382)][$(290)]()), C = requestAnimationFrame(re);
    };
    return re(), () => cancelAnimationFrame(C);
  }, []), Ve(() => {
    const C = t;
    if (C(308) === C(343)) _0x4986e2[C(235) + C(280)](C(244) + C(242), _0x340663);
    else {
      let re;
      return re = setInterval(() => {
        const $ = C;
        if (g[$(382)])
          if ($(365) === $(383)) {
            const V = _0xf580a4(() => {
              const I = $;
              _0x2be9af[I(382)][I(277)](_0x136ded[I(311)]);
              const ne = {};
              ne[I(359)] = _0xc716fd[I(359)], ne[I(311)] = _0x20f69c[I(311)], ne[I(386)] = !1, ne[I(354)] = I(248) + I(385) + I(339), _0x2f18e1(ne);
            }, _0x3d3577);
            _0x428952[$(382)][$(309)](_0xb67430[$(311)], (I) => {
              _0x15a0b9(V), _0x2426bb(I);
            }), _0x21962d[$(382)][$(234)]($(354), _0x38d5bf);
          } else g[$(382)][$(234)]($(354), { action: $(360), ts: Date[$(285)]() });
      }, 6e4), () => clearInterval(re);
    }
  }, [Y]);
  const te = () => {
    const C = t;
    C(267) === C(313) ? _0x9a398d[C(382)][C(234)](C(354), _0x488693) : (g[C(382)] && (g[C(382)][C(238)](), g[C(382)] = null), E(null), R([]), ee(null), B(Date[C(285)]()));
  }, K = {};
  K[t(278)] = o[t(245)];
  const ie = {};
  ie[t(303)] = t(293);
  const ae = {};
  ae[t(303)] = t(293);
  const le = {};
  le[t(303)] = t(293);
  const we = {};
  we[t(325)] = 0, we[t(314)] = 0, we[t(380) + t(372)] = t(370);
  const me = {};
  me[t(278)] = o[t(245)];
  const Pe = {};
  Pe[t(319)] = j, Pe[t(309)] = M;
  const Ae = {};
  Ae.id = F, Ae[t(275)] = "0", Ae[t(366)] = t(355);
  const he = {};
  he[t(257)] = 5;
  const Ye = {};
  return Ye[t(257)] = 10, G.jsx(fx, { id: N, children: A[t(376)] == 0 ? G.jsxs(G.Fragment, { children: [!U && G.jsxs(G.Fragment, { children: [x && G.jsx(Hc, K), G.jsxs(gd, { align: t(291), gap: t(254), children: [G.jsx(Nr, ie), G.jsx(Nr, ae), G.jsx(Nr, le)] })] }), G.jsxs(dx, { ref: p, id: J, style: U ? {} : we, children: [x && G.jsx(Hc, me), i ? G.jsx(h_, { status: Pe, ref: b, canvasRef: y, displayId: h, isMobile: m, isShowDeviceId: x, onSenData: (C, re) => {
    const $ = t;
    if (re[$(338)] === $(245)) T(!x);
    else if (re[$(338)] === $(358)) $(252) === $(252) ? c == null || c(o[$(245)]) : (_0x131f73[$(382)][$(272) + $(375)](_0x1da876[$(274)]), _0x486dfa[$(382)][$(250)](_0x495c3e[$(274)]));
    else if (re[$(338)] === $(390)) te();
    else if (re[$(338)] === $(352))
      if ($(261) === $(284)) _0x127822(_0xd01c1b);
      else {
        const V = {};
        V[$(359)] = $(302) + $(368), g[$(382)][$(234)]($(354), V);
      }
    else q(re);
  } }) : null, G.jsx(s_, { canvasContent: Ae, canvasRef: y, isMobile: m, assistive: j, onRemoteEvent: (C, re) => {
    const $ = t;
    if (C === Ud) {
      const V = { ...j };
      V[$(329)] = !1, M(V);
    } else q(re);
  } })] })] }) : G.jsxs(G.Fragment, { children: [A == null ? void 0 : A[t(332)]((C, re) => G.jsx(J0, { style: he, message: C[t(246)], type: C[t(237)], showIcon: !0, closable: !0 }, re)), G.jsx(Bi, { style: Ye, type: t(270), icon: G.jsx(df, {}), onClick: te, children: t(287) })] }) });
});
function ui() {
  var e = ["4118948OaUYZe", "2738046qZyHAf", "210pInblN", "4264kKYQDr", "9155scoEHl", "3260QDsAPa", "2ptYDcu", "3101ZTbuYg", "1156963qkIYXp", "6897NoKIqY", "9222948utYPaY"];
  return ui = function() {
    return e;
  }, ui();
}
function Na(e, n) {
  var t = ui();
  return Na = function(r, o) {
    r = r - 112;
    var i = t[r];
    return i;
  }, Na(e, n);
}
(function(e, n) {
  for (var t = Na, r = e(); ; )
    try {
      var o = -parseInt(t(112)) / 1 * (-parseInt(t(121)) / 2) + -parseInt(t(116)) / 3 + parseInt(t(115)) / 4 + -parseInt(t(119)) / 5 * (-parseInt(t(117)) / 6) + parseInt(t(122)) / 7 * (parseInt(t(118)) / 8) + -parseInt(t(114)) / 9 + -parseInt(t(120)) / 10 * (-parseInt(t(113)) / 11);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 753852);
export {
  B_ as ViewRP
};
