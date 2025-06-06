var Yf = Object.defineProperty;
var $f = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ot = (e, t, n) => $f(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import Pe, { useDebugValue as ha, createElement as Kf, useRef as Be, useContext as Jt, isValidElement as Gf, version as Zf, createContext as Ds, useLayoutEffect as Jf, useEffect as Ge, useState as Ke, forwardRef as el, useImperativeHandle as tl } from "react";
import pa from "react-dom";
var Pi = fo;
(function(e, t) {
  for (var n = fo, r = e(); ; )
    try {
      var o = parseInt(n(177)) / 1 + -parseInt(n(168)) / 2 * (-parseInt(n(181)) / 3) + parseInt(n(179)) / 4 + parseInt(n(180)) / 5 * (-parseInt(n(174)) / 6) + -parseInt(n(173)) / 7 + -parseInt(n(176)) / 8 + parseInt(n(167)) / 9 * (parseInt(n(178)) / 10);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(uo, 636811);
typeof globalThis < "u" || typeof window !== Pi(175) || (typeof global < "u" ? global : Pi(175));
function uo() {
  var e = ["2wqDhJl", "apply", "keys", "hasOwnProperty", "function", "2052652fxEYxX", "6648SFAkQb", "undefined", "2963624jHKRhL", "260042GWbdyS", "448710DQyRKJ", "3448904auZCPx", "4455KplBXW", "2554089BCCIvN", "defineProperty", "default", "prototype", "length", "getOwnPropertyDescriptor", "value", "call", "63BzzBLt"];
  return uo = function() {
    return e;
  }, uo();
}
function Qf(e) {
  var t = Pi;
  return e && e.__esModule && Object[t(184)][t(171)].call(e, "default") ? e[t(183)] : e;
}
function fo(e, t) {
  var n = uo();
  return fo = function(r, o) {
    r = r - 164;
    var i = n[r];
    return i;
  }, fo(e, t);
}
var Tr = { exports: {} }, er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function ed() {
  if (ma) return er;
  ma = 1;
  var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, d = null, x = null;
    l !== void 0 && (d = "" + l), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: a, key: d, ref: x, props: f, _owner: o.current };
  }
  return er.Fragment = n, er.jsx = s, er.jsxs = s, er;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function td() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var O = g && h[g] || h[m];
      return typeof O == "function" ? O : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(h) {
      {
        for (var O = arguments.length, k = new Array(O > 1 ? O - 1 : 0), W = 1; W < O; W++)
          k[W - 1] = arguments[W];
        b("error", h, k);
      }
    }
    function b(h, O, k) {
      {
        var W = S.ReactDebugCurrentFrame, he = W.getStackAddendum();
        he !== "" && (O += "%s", k = k.concat([he]));
        var me = k.map(function(ce) {
          return String(ce);
        });
        me.unshift("Warning: " + O), Function.prototype.apply.call(console[h], console, me);
      }
    }
    var _ = !1, v = !1, A = !1, E = !1, T = !1, N;
    N = Symbol.for("react.module.reference");
    function U(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || T || h === o || h === l || h === u || E || h === x || _ || v || A || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === N || h.getModuleId !== void 0));
    }
    function Q(h, O, k) {
      var W = h.displayName;
      if (W)
        return W;
      var he = O.displayName || O.name || "";
      return he !== "" ? k + "(" + he + ")" : k;
    }
    function Y(h) {
      return h.displayName || "Context";
    }
    function P(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var O = h;
            return Y(O) + ".Consumer";
          case s:
            var k = h;
            return Y(k._context) + ".Provider";
          case c:
            return Q(h, h.render, "ForwardRef");
          case f:
            var W = h.displayName || null;
            return W !== null ? W : P(h.type) || "Memo";
          case d: {
            var he = h, me = he._payload, ce = he._init;
            try {
              return P(ce(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, H = 0, q, Z, $, G, ne, re, K;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function fe() {
      {
        if (H === 0) {
          q = console.log, Z = console.info, $ = console.warn, G = console.error, ne = console.group, re = console.groupCollapsed, K = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        H++;
      }
    }
    function le() {
      {
        if (H--, H === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, h, {
              value: q
            }),
            info: B({}, h, {
              value: Z
            }),
            warn: B({}, h, {
              value: $
            }),
            error: B({}, h, {
              value: G
            }),
            group: B({}, h, {
              value: ne
            }),
            groupCollapsed: B({}, h, {
              value: re
            }),
            groupEnd: B({}, h, {
              value: K
            })
          });
        }
        H < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = S.ReactCurrentDispatcher, pe;
    function I(h, O, k) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (he) {
            var W = he.stack.trim().match(/\n( *(at )?)/);
            pe = W && W[1] || "";
          }
        return `
` + pe + h;
      }
    }
    var X = !1, F;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      F = new D();
    }
    function R(h, O) {
      if (!h || X)
        return "";
      {
        var k = F.get(h);
        if (k !== void 0)
          return k;
      }
      var W;
      X = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = de.current, de.current = null, fe();
      try {
        if (O) {
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
            } catch ($e) {
              W = $e;
            }
            Reflect.construct(h, [], ce);
          } else {
            try {
              ce.call();
            } catch ($e) {
              W = $e;
            }
            h.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            W = $e;
          }
          h();
        }
      } catch ($e) {
        if ($e && W && typeof $e.stack == "string") {
          for (var se = $e.stack.split(`
`), Ue = W.stack.split(`
`), Ee = se.length - 1, _e = Ue.length - 1; Ee >= 1 && _e >= 0 && se[Ee] !== Ue[_e]; )
            _e--;
          for (; Ee >= 1 && _e >= 0; Ee--, _e--)
            if (se[Ee] !== Ue[_e]) {
              if (Ee !== 1 || _e !== 1)
                do
                  if (Ee--, _e--, _e < 0 || se[Ee] !== Ue[_e]) {
                    var Ae = `
` + se[Ee].replace(" at new ", " at ");
                    return h.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", h.displayName)), typeof h == "function" && F.set(h, Ae), Ae;
                  }
                while (Ee >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        X = !1, de.current = me, le(), Error.prepareStackTrace = he;
      }
      var An = h ? h.displayName || h.name : "", an = An ? I(An) : "";
      return typeof h == "function" && F.set(h, an), an;
    }
    function te(h, O, k) {
      return R(h, !1);
    }
    function j(h) {
      var O = h.prototype;
      return !!(O && O.isReactComponent);
    }
    function Te(h, O, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return R(h, j(h));
      if (typeof h == "string")
        return I(h);
      switch (h) {
        case l:
          return I("Suspense");
        case u:
          return I("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return te(h.render);
          case f:
            return Te(h.type, O, k);
          case d: {
            var W = h, he = W._payload, me = W._init;
            try {
              return Te(me(he), O, k);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, ot = {}, wt = S.ReactDebugCurrentFrame;
    function et(h) {
      if (h) {
        var O = h._owner, k = Te(h.type, h._source, O ? O.type : null);
        wt.setExtraStackFrame(k);
      } else
        wt.setExtraStackFrame(null);
    }
    function Et(h, O, k, W, he) {
      {
        var me = Function.call.bind(we);
        for (var ce in h)
          if (me(h, ce)) {
            var se = void 0;
            try {
              if (typeof h[ce] != "function") {
                var Ue = Error((W || "React class") + ": " + k + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              se = h[ce](O, ce, W, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (et(he), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", k, ce, typeof se), et(null)), se instanceof Error && !(se.message in ot) && (ot[se.message] = !0, et(he), y("Failed %s type: %s", k, se.message), et(null));
          }
      }
    }
    var Re = Array.isArray;
    function be(h) {
      return Re(h);
    }
    function He(h) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, k = O && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return k;
      }
    }
    function dt(h) {
      try {
        return it(h), !1;
      } catch {
        return !0;
      }
    }
    function it(h) {
      return "" + h;
    }
    function nn(h) {
      if (dt(h))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(h)), it(h);
    }
    var rn = S.ReactCurrentOwner, En = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, on, oe;
    function L(h) {
      if (we.call(h, "ref")) {
        var O = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Le(h) {
      if (we.call(h, "key")) {
        var O = Object.getOwnPropertyDescriptor(h, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Me(h, O) {
      typeof h.ref == "string" && rn.current;
    }
    function tt(h, O) {
      {
        var k = function() {
          on || (on = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Fe(h, O) {
      {
        var k = function() {
          oe || (oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var st = function(h, O, k, W, he, me, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: O,
        ref: k,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: me
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
        value: W
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function jt(h, O, k, W, he) {
      {
        var me, ce = {}, se = null, Ue = null;
        k !== void 0 && (nn(k), se = "" + k), Le(O) && (nn(O.key), se = "" + O.key), L(O) && (Ue = O.ref, Me(O, he));
        for (me in O)
          we.call(O, me) && !En.hasOwnProperty(me) && (ce[me] = O[me]);
        if (h && h.defaultProps) {
          var Ee = h.defaultProps;
          for (me in Ee)
            ce[me] === void 0 && (ce[me] = Ee[me]);
        }
        if (se || Ue) {
          var _e = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          se && tt(ce, _e), Ue && Fe(ce, _e);
        }
        return st(h, se, Ue, he, W, rn.current, ce);
      }
    }
    var Ct = S.ReactCurrentOwner, Cn = S.ReactDebugCurrentFrame;
    function _t(h) {
      if (h) {
        var O = h._owner, k = Te(h.type, h._source, O ? O.type : null);
        Cn.setExtraStackFrame(k);
      } else
        Cn.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function Mt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function qe() {
      {
        if (Ct.current) {
          var h = P(Ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Ye(h) {
      return "";
    }
    var at = {};
    function At(h) {
      {
        var O = qe();
        if (!O) {
          var k = typeof h == "string" ? h : h.displayName || h.name;
          k && (O = `

Check the top-level render call using <` + k + ">.");
        }
        return O;
      }
    }
    function sn(h, O) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = At(O);
        if (at[k])
          return;
        at[k] = !0;
        var W = "";
        h && h._owner && h._owner !== Ct.current && (W = " It was passed a child from " + P(h._owner.type) + "."), _t(h), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, W), _t(null);
      }
    }
    function _n(h, O) {
      {
        if (typeof h != "object")
          return;
        if (be(h))
          for (var k = 0; k < h.length; k++) {
            var W = h[k];
            Mt(W) && sn(W, O);
          }
        else if (Mt(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var he = p(h);
          if (typeof he == "function" && he !== h.entries)
            for (var me = he.call(h), ce; !(ce = me.next()).done; )
              Mt(ce.value) && sn(ce.value, O);
        }
      }
    }
    function qt(h) {
      {
        var O = h.type;
        if (O == null || typeof O == "string")
          return;
        var k;
        if (typeof O == "function")
          k = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          k = O.propTypes;
        else
          return;
        if (k) {
          var W = P(O);
          Et(k, h.props, "prop", W, h);
        } else if (O.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var he = P(O);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(h) {
      {
        for (var O = Object.keys(h.props), k = 0; k < O.length; k++) {
          var W = O[k];
          if (W !== "children" && W !== "key") {
            _t(h), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), _t(null);
            break;
          }
        }
        h.ref !== null && (_t(h), y("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
      }
    }
    var Qn = {};
    function Ar(h, O, k, W, he, me) {
      {
        var ce = U(h);
        if (!ce) {
          var se = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Ye();
          Ue ? se += Ue : se += qe();
          var Ee;
          h === null ? Ee = "null" : be(h) ? Ee = "array" : h !== void 0 && h.$$typeof === t ? (Ee = "<" + (P(h.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof h, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var _e = jt(h, O, k, he, me);
        if (_e == null)
          return _e;
        if (ce) {
          var Ae = O.children;
          if (Ae !== void 0)
            if (W)
              if (be(Ae)) {
                for (var An = 0; An < Ae.length; An++)
                  _n(Ae[An], h);
                Object.freeze && Object.freeze(Ae);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _n(Ae, h);
        }
        if (we.call(O, "key")) {
          var an = P(h), $e = Object.keys(O).filter(function(Xf) {
            return Xf !== "key";
          }), ai = $e.length > 0 ? "{key: someKey, " + $e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qn[an + ai]) {
            var Wf = $e.length > 0 ? "{" + $e.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ai, an, Wf, an), Qn[an + ai] = !0;
          }
        }
        return h === r ? Wt(_e) : qt(_e), _e;
      }
    }
    function De(h, O, k) {
      return Ar(h, O, k, !0);
    }
    function Or(h, O, k) {
      return Ar(h, O, k, !1);
    }
    var si = Or, Ce = De;
    tr.Fragment = r, tr.jsx = si, tr.jsxs = Ce;
  }()), tr;
}
var xa;
function nd() {
  return xa || (xa = 1, process.env.NODE_ENV === "production" ? Tr.exports = ed() : Tr.exports = td()), Tr.exports;
}
var z = nd(), Ze = function() {
  return Ze = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ze.apply(this, arguments);
};
function Nn(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function rd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var od = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, id = /* @__PURE__ */ rd(
  function(e) {
    return od.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Se = "-ms-", lr = "-moz-", ve = "-webkit-", nl = "comm", Do = "rule", Bs = "decl", sd = "@import", rl = "@keyframes", ad = "@layer", ol = Math.abs, Fs = String.fromCharCode, Ii = Object.assign;
function cd(e, t) {
  return Ve(e, 0) ^ 45 ? (((t << 2 ^ Ve(e, 0)) << 2 ^ Ve(e, 1)) << 2 ^ Ve(e, 2)) << 2 ^ Ve(e, 3) : 0;
}
function il(e) {
  return e.trim();
}
function zt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function Wr(e, t, n) {
  return e.indexOf(t, n);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function jn(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function sl(e) {
  return e.length;
}
function ar(e, t) {
  return t.push(e), e;
}
function ld(e, t) {
  return e.map(t).join("");
}
function va(e, t) {
  return e.filter(function(n) {
    return !zt(n, t);
  });
}
var Bo = 1, Ln = 1, al = 0, ut = 0, Ie = 0, qn = "";
function Fo(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Bo, column: Ln, length: s, return: "", siblings: a };
}
function Xt(e, t) {
  return Ii(Fo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function On(e) {
  for (; e.root; )
    e = Xt(e.root, { children: [e] });
  ar(e, e.siblings);
}
function ud() {
  return Ie;
}
function fd() {
  return Ie = ut > 0 ? Ve(qn, --ut) : 0, Ln--, Ie === 10 && (Ln = 1, Bo--), Ie;
}
function mt() {
  return Ie = ut < al ? Ve(qn, ut++) : 0, Ln++, Ie === 10 && (Ln = 1, Bo++), Ie;
}
function pn() {
  return Ve(qn, ut);
}
function Xr() {
  return ut;
}
function zo(e, t) {
  return jn(qn, e, t);
}
function Ni(e) {
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
function dd(e) {
  return Bo = Ln = 1, al = kt(qn = e), ut = 0, [];
}
function hd(e) {
  return qn = "", e;
}
function ci(e) {
  return il(zo(ut - 1, ji(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pd(e) {
  for (; (Ie = pn()) && Ie < 33; )
    mt();
  return Ni(e) > 2 || Ni(Ie) > 3 ? "" : " ";
}
function md(e, t) {
  for (; --t && mt() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return zo(e, Xr() + (t < 6 && pn() == 32 && mt() == 32));
}
function ji(e) {
  for (; mt(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return ut;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ji(Ie);
        break;
      // (
      case 40:
        e === 41 && ji(e);
        break;
      // \
      case 92:
        mt();
        break;
    }
  return ut;
}
function gd(e, t) {
  for (; mt() && e + Ie !== 57; )
    if (e + Ie === 84 && pn() === 47)
      break;
  return "/*" + zo(t, ut - 1) + "*" + Fs(e === 47 ? e : mt());
}
function xd(e) {
  for (; !Ni(pn()); )
    mt();
  return zo(e, ut);
}
function vd(e) {
  return hd(Yr("", null, null, null, [""], e = dd(e), 0, [0], e));
}
function Yr(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, x = 0, g = 0, m = 1, p = 1, S = 1, y = 0, b = "", _ = o, v = i, A = r, E = b; p; )
    switch (g = y, y = mt()) {
      // (
      case 40:
        if (g != 108 && Ve(E, f - 1) == 58) {
          Wr(E += ie(ci(y), "&", "&\f"), "&\f", ol(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ci(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += pd(g);
        break;
      // \
      case 92:
        E += md(Xr() - 1, 7);
        continue;
      // /
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            ar(yd(gd(mt(), Xr()), t, n, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = kt(E) * S;
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
            S == -1 && (E = ie(E, /\f/g, "")), x > 0 && kt(E) - f && ar(x > 32 ? ba(E + ";", r, n, f - 1, c) : ba(ie(E, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (ar(A = ya(E, t, n, l, u, o, a, b, _ = [], v = [], f, i), i), y === 123)
              if (u === 0)
                Yr(E, t, A, A, _, i, f, a, v);
              else
                switch (d === 99 && Ve(E, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yr(e, A, A, r && ar(ya(e, A, A, 0, 0, o, a, b, o, _ = [], f, v), v), o, v, f, a, r ? _ : v);
                    break;
                  default:
                    Yr(E, A, A, A, [""], v, 0, a, v);
                }
        }
        l = u = x = 0, m = S = 1, b = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + kt(E), x = g;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && fd() == 125)
            continue;
        }
        switch (E += Fs(y), y * m) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (kt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            pn() === 45 && (E += ci(mt())), d = pn(), u = f = kt(b = E += xd(Xr())), y++;
            break;
          // -
          case 45:
            g === 45 && kt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function ya(e, t, n, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, x = o === 0 ? i : [""], g = sl(x), m = 0, p = 0, S = 0; m < r; ++m)
    for (var y = 0, b = jn(e, d + 1, d = ol(p = s[m])), _ = e; y < g; ++y)
      (_ = il(p > 0 ? x[y] + " " + b : ie(b, /&\f/g, x[y]))) && (c[S++] = _);
  return Fo(e, t, n, o === 0 ? Do : a, c, l, u, f);
}
function yd(e, t, n, r) {
  return Fo(e, t, n, nl, Fs(ud()), jn(e, 2, -2), 0, r);
}
function ba(e, t, n, r, o) {
  return Fo(e, t, n, Bs, jn(e, 0, r), jn(e, r + 1, -1), r, o);
}
function cl(e, t, n) {
  switch (cd(e, t)) {
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
      return lr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + lr + e + Se + e + e;
    // writing-mode
    case 5936:
      switch (Ve(e, t + 11)) {
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
      return ve + e + Se + "flex-item-" + ie(e, /flex-|-self/g, "") + (zt(e, /flex-|baseline/) ? "" : Se + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
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
      if (!zt(e, /flex-|baseline/)) return Se + "grid-column-align" + jn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Se + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, zt(r.props, /grid-\w+-end/);
      }) ? ~Wr(e + (n = n[t].value), "span", 0) ? e : Se + ie(e, "-start", "") + e + Se + "grid-row-span:" + (~Wr(n, "span", 0) ? zt(n, /\d+/) : +zt(n, /\d+/) - +zt(e, /\d+/)) + ";" : Se + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return zt(r.props, /grid-\w+-start/);
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
      if (kt(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ve(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + lr + (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Wr(e, "stretch", 0) ? cl(ie(e, "stretch", "fill-available"), t, n) + e : e;
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
      if (Ve(e, t + 6) === 121)
        return ie(e, ":", ":" + ve) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ve(e, Ve(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ve + (Ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + Se + "$2box$3") + e;
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
function ho(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function bd(e, t, n, r) {
  switch (e.type) {
    case ad:
      if (e.children.length) break;
    case sd:
    case Bs:
      return e.return = e.return || e.value;
    case nl:
      return "";
    case rl:
      return e.return = e.value + "{" + ho(e.children, r) + "}";
    case Do:
      if (!kt(e.value = e.props.join(","))) return "";
  }
  return kt(n = ho(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Sd(e) {
  var t = sl(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function wd(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ed(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bs:
        e.return = cl(e.value, e.length, n);
        return;
      case rl:
        return ho([Xt(e, { value: ie(e.value, "@", "@" + ve) })], r);
      case Do:
        if (e.length)
          return ld(n = e.props, function(o) {
            switch (zt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                On(Xt(e, { props: [ie(o, /:(read-\w+)/, ":" + lr + "$1")] })), On(Xt(e, { props: [o] })), Ii(e, { props: va(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                On(Xt(e, { props: [ie(o, /:(plac\w+)/, ":" + ve + "input-$1")] })), On(Xt(e, { props: [ie(o, /:(plac\w+)/, ":" + lr + "$1")] })), On(Xt(e, { props: [ie(o, /:(plac\w+)/, Se + "input-$1")] })), On(Xt(e, { props: [o] })), Ii(e, { props: va(n, r) });
                break;
            }
            return "";
          });
    }
}
var Cd = {
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
}, Sn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ll = "active", ul = "data-styled-version", Vo = "6.1.18", zs = `/*!sc*/
`, po = typeof window < "u" && typeof document < "u", _d = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Sa = /invalid hook call/i, Rr = /* @__PURE__ */ new Set(), Ad = function(e, t) {
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
        Sa.test(s) ? (i = !1, Rr.delete(r)) : o.apply(void 0, Nn([s], a, !1));
      }, Be(), i && !Rr.has(r) && (console.warn(r), Rr.add(r));
    } catch (s) {
      Sa.test(s.message) && Rr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Ho = Object.freeze([]), Mn = Object.freeze({});
function Od(e, t, n) {
  return n === void 0 && (n = Mn), e.theme !== n.theme && e.theme || t || n.theme;
}
var Li = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Td = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Rd = /(^-|-$)/g;
function wa(e) {
  return e.replace(Td, "-").replace(Rd, "");
}
var kd = /(a)(d)/gi, kr = 52, Ea = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mi(e) {
  var t, n = "";
  for (t = Math.abs(e); t > kr; t = t / kr | 0) n = Ea(t % kr) + n;
  return (Ea(t % kr) + n).replace(kd, "$1-$2");
}
var li, fl = 5381, ln = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, dl = function(e) {
  return ln(fl, e);
};
function Pd(e) {
  return Mi(dl(e) >>> 0);
}
function hl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ui(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var pl = typeof Symbol == "function" && Symbol.for, ml = pl ? Symbol.for("react.memo") : 60115, Id = pl ? Symbol.for("react.forward_ref") : 60112, Nd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jd = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, gl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ld = ((li = {})[Id] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, li[ml] = gl, li);
function Ca(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ml ? gl : "$$typeof" in e ? Ld[e.$$typeof] : Nd;
  var t;
}
var Md = Object.defineProperty, Dd = Object.getOwnPropertyNames, _a = Object.getOwnPropertySymbols, Bd = Object.getOwnPropertyDescriptor, Fd = Object.getPrototypeOf, Aa = Object.prototype;
function xl(e, t, n) {
  if (typeof t != "string") {
    if (Aa) {
      var r = Fd(t);
      r && r !== Aa && xl(e, r, n);
    }
    var o = Dd(t);
    _a && (o = o.concat(_a(t)));
    for (var i = Ca(e), s = Ca(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in jd || n && n[c] || s && c in s || i && c in i)) {
        var l = Bd(t, c);
        try {
          Md(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Dn(e) {
  return typeof e == "function";
}
function Vs(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Oa(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Bn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Di(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Bn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Di(e[r], t[r]);
  else if (Bn(t)) for (var r in t) e[r] = Di(e[r], t[r]);
  return e;
}
function Hs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var zd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Vd() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Wn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Vd.apply(void 0, Nn([zd[e]], t, !1)).trim());
}
var Hd = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Wn(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(zs);
    return n;
  }, e;
}(), Ud = 1 << 30, $r = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map(), Kr = 1, Pr = function(e) {
  if ($r.has(e)) return $r.get(e);
  for (; mo.has(Kr); ) Kr++;
  var t = Kr++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Ud)) throw Wn(16, "".concat(t));
  return $r.set(e, t), mo.set(t, e), t;
}, qd = function(e, t) {
  Kr = t + 1, $r.set(e, t), mo.set(t, e);
}, Wd = "style[".concat(Sn, "][").concat(ul, '="').concat(Vo, '"]'), Xd = new RegExp("^".concat(Sn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Yd = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, $d = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(zs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Xd);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (qd(u, l), Yd(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ta = function(e) {
  for (var t = document.querySelectorAll(Wd), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(Sn) !== ll && ($d(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Kd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var vl = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Sn, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Sn, ll), r.setAttribute(ul, Vo);
  var s = Kd();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Gd = function() {
  function e(t) {
    this.element = vl(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Wn(17);
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
}(), Zd = function() {
  function e(t) {
    this.element = vl(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Jd = function() {
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
}(), Ra = po, Qd = { isServer: !po, useCSSOMInjection: !_d }, yl = function() {
  function e(t, n, r) {
    t === void 0 && (t = Mn), n === void 0 && (n = {});
    var o = this;
    this.options = Ze(Ze({}, Qd), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && po && Ra && (Ra = !1, Ta(this)), Hs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var d = function(S) {
            return mo.get(S);
          }(f);
          if (d === void 0) return "continue";
          var x = i.names.get(d), g = s.getGroup(f);
          if (x === void 0 || !x.size || g.length === 0) return "continue";
          var m = "".concat(Sn, ".g").concat(f, '[id="').concat(d, '"]'), p = "";
          x !== void 0 && x.forEach(function(S) {
            S.length > 0 && (p += "".concat(S, ","));
          }), c += "".concat(g).concat(m, '{content:"').concat(p, '"}').concat(zs);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Pr(t);
  }, e.prototype.rehydrate = function() {
    !this.server && po && Ta(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ze(Ze({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Jd(o) : r ? new Gd(o) : new Zd(o);
    }(this.options), new Hd(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Pr(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Pr(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Pr(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), eh = /&/g, th = /^\s*\/\/.*$/gm;
function bl(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = bl(n.children, t)), n;
  });
}
function nh(e) {
  var t, n, r, o = Mn, i = o.options, s = i === void 0 ? Mn : i, a = o.plugins, c = a === void 0 ? Ho : a, l = function(d, x, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : d;
  }, u = c.slice();
  u.push(function(d) {
    d.type === Do && d.value.includes("&") && (d.props[0] = d.props[0].replace(eh, n).replace(r, l));
  }), s.prefix && u.push(Ed), u.push(bd);
  var f = function(d, x, g, m) {
    x === void 0 && (x = ""), g === void 0 && (g = ""), m === void 0 && (m = "&"), t = m, n = x, r = new RegExp("\\".concat(n, "\\b"), "g");
    var p = d.replace(th, ""), S = vd(g || x ? "".concat(g, " ").concat(x, " { ").concat(p, " }") : p);
    s.namespace && (S = bl(S, s.namespace));
    var y = [];
    return ho(S, Sd(u.concat(wd(function(b) {
      return y.push(b);
    })))), y;
  };
  return f.hash = c.length ? c.reduce(function(d, x) {
    return x.name || Wn(15), ln(d, x.name);
  }, fl).toString() : "", f;
}
var rh = new yl(), Bi = nh(), Sl = Pe.createContext({ shouldForwardProp: void 0, styleSheet: rh, stylis: Bi });
Sl.Consumer;
Pe.createContext(void 0);
function ka() {
  return Jt(Sl);
}
var Pa = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Bi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Hs(this, function() {
      throw Wn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Bi), this.name + t.hash;
  }, e;
}(), oh = function(e) {
  return e >= "A" && e <= "Z";
};
function Ia(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    oh(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var wl = function(e) {
  return e == null || e === !1 || e === "";
}, El = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !wl(i) && (Array.isArray(i) && i.isCss || Dn(i) ? r.push("".concat(Ia(o), ":"), i, ";") : Bn(i) ? r.push.apply(r, Nn(Nn(["".concat(o, " {")], El(i), !1), ["}"], !1)) : r.push("".concat(Ia(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Cd || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function mn(e, t, n, r) {
  if (wl(e)) return [];
  if (Vs(e)) return [".".concat(e.styledComponentId)];
  if (Dn(e)) {
    if (!Dn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Pa || Bn(o) || o === null || console.error("".concat(hl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mn(o, t, n, r);
  }
  var i;
  return e instanceof Pa ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Bn(e) ? El(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ho, e.map(function(s) {
    return mn(s, t, n, r);
  })) : [e.toString()];
}
function ih(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Dn(n) && !Vs(n)) return !1;
  }
  return !0;
}
var sh = dl(Vo), ah = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ih(t), this.componentId = n, this.baseHash = ln(sh, n), this.baseStyle = r, yl.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = fn(o, this.staticRulesId);
    else {
      var i = Oa(mn(this.rules, t, n, r)), s = Mi(ln(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = fn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = ln(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = ln(c, f));
        else if (f) {
          var d = Oa(mn(f, t, n, r));
          c = ln(c, d + u), l += d;
        }
      }
      if (l) {
        var x = Mi(c >>> 0);
        n.hasNameForId(this.componentId, x) || n.insertRules(this.componentId, x, r(l, ".".concat(x), void 0, this.componentId)), o = fn(o, x);
      }
    }
    return o;
  }, e;
}(), Cl = Pe.createContext(void 0);
Cl.Consumer;
var fi = {}, Na = /* @__PURE__ */ new Set();
function ch(e, t, n) {
  var r = Vs(e), o = e, i = !ui(e), s = t.attrs, a = s === void 0 ? Ho : s, c = t.componentId, l = c === void 0 ? function(_, v) {
    var A = typeof _ != "string" ? "sc" : wa(_);
    fi[A] = (fi[A] || 0) + 1;
    var E = "".concat(A, "-").concat(Pd(Vo + A + fi[A]));
    return v ? "".concat(v, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, f = u === void 0 ? function(_) {
    return ui(_) ? "styled.".concat(_) : "Styled(".concat(hl(_), ")");
  }(e) : u, d = t.displayName && t.componentId ? "".concat(wa(t.displayName), "-").concat(t.componentId) : t.componentId || l, x = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var p = t.shouldForwardProp;
      g = function(_, v) {
        return m(_, v) && p(_, v);
      };
    } else g = m;
  }
  var S = new ah(n, d, r ? o.componentStyle : void 0);
  function y(_, v) {
    return function(A, E, T) {
      var N = A.attrs, U = A.componentStyle, Q = A.defaultProps, Y = A.foldedComponentIds, P = A.styledComponentId, B = A.target, H = Pe.useContext(Cl), q = ka(), Z = A.shouldForwardProp || q.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ha(P);
      var $ = Od(E, H, Q) || Mn, G = function(le, de, pe) {
        for (var I, X = Ze(Ze({}, de), { className: void 0, theme: pe }), F = 0; F < le.length; F += 1) {
          var D = Dn(I = le[F]) ? I(X) : I;
          for (var R in D) X[R] = R === "className" ? fn(X[R], D[R]) : R === "style" ? Ze(Ze({}, X[R]), D[R]) : D[R];
        }
        return de.className && (X.className = fn(X.className, de.className)), X;
      }(N, E, $), ne = G.as || B, re = {};
      for (var K in G) G[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && G.theme === $ || (K === "forwardedAs" ? re.as = G.forwardedAs : Z && !Z(K, ne) || (re[K] = G[K], Z || process.env.NODE_ENV !== "development" || id(K) || Na.has(K) || !Li.has(ne) || (Na.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ee = function(le, de) {
        var pe = ka(), I = le.generateAndInjectStyles(de, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && ha(I), I;
      }(U, G);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(ee);
      var fe = fn(Y, P);
      return ee && (fe += " " + ee), G.className && (fe += " " + G.className), re[ui(ne) && !Li.has(ne) ? "class" : "className"] = fe, T && (re.ref = T), Kf(ne, re);
    }(b, _, v);
  }
  y.displayName = f;
  var b = Pe.forwardRef(y);
  return b.attrs = x, b.componentStyle = S, b.displayName = f, b.shouldForwardProp = g, b.foldedComponentIds = r ? fn(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = d, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = r ? function(v) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var T = 0, N = A; T < N.length; T++) Di(v, N[T], !0);
      return v;
    }({}, o.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (Ad(f, d), b.warnTooManyClasses = /* @__PURE__ */ function(_, v) {
    var A = {}, E = !1;
    return function(T) {
      if (!E && (A[T] = !0, Object.keys(A).length >= 200)) {
        var N = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(_).concat(N, `.
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
  }(f, d)), Hs(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && xl(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function ja(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var La = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Dn(e) || Bn(e)) return La(mn(ja(Ho, Nn([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? mn(r) : La(mn(ja(r, t)));
}
function Fi(e, t, n) {
  if (n === void 0 && (n = Mn), !t) throw Wn(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, lh.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Fi(e, t, Ze(Ze({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Fi(e, t, Ze(Ze({}, n), o));
  }, r;
}
var _l = function(e) {
  return Fi(ch, e);
}, vt = _l;
Li.forEach(function(e) {
  vt[e] = _l(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ir = "__sc-".concat(Sn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ir] || (window[Ir] = 0), window[Ir] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ir] += 1);
const uh = xo;
(function(e, t) {
  const n = xo, r = e();
  for (; ; )
    try {
      if (parseInt(n(310)) / 1 * (-parseInt(n(307)) / 2) + parseInt(n(306)) / 3 * (-parseInt(n(308)) / 4) + -parseInt(n(305)) / 5 * (parseInt(n(304)) / 6) + -parseInt(n(300)) / 7 + -parseInt(n(301)) / 8 + parseInt(n(309)) / 9 * (-parseInt(n(302)) / 10) + parseInt(n(299)) / 11 * (parseInt(n(298)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(go, 624170);
const fh = vt.div`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
function go() {
  const e = ["div", "210198XcklIe", "150KFUzxX", "864909fvpwaJ", "8078AIKWbC", "12gULSuP", "151416RmiKio", "295UFSTEH", "20661192spGPfQ", "33RXnmPf", "7182014Nnczyi", "704528YQBVvb", "190IgIwZI"];
  return go = function() {
    return e;
  }, go();
}
const dh = vt[uh(303)]`
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
function xo(e, t) {
  const n = go();
  return xo = function(r, o) {
    return r = r - 298, n[r];
  }, xo(e, t);
}
const hh = vt.canvas`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, ph = vt.span`
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
`, mh = vt.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, It = /* @__PURE__ */ Object.create(null);
It.open = "0";
It.close = "1";
It.ping = "2";
It.pong = "3";
It.message = "4";
It.upgrade = "5";
It.noop = "6";
const Gr = /* @__PURE__ */ Object.create(null);
Object.keys(It).forEach((e) => {
  Gr[It[e]] = e;
});
const zi = { type: "error", data: "parser error" }, Al = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ol = typeof ArrayBuffer == "function", Tl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Us = ({ type: e, data: t }, n, r) => Al && t instanceof Blob ? n ? r(t) : Ma(t, r) : Ol && (t instanceof ArrayBuffer || Tl(t)) ? n ? r(t) : Ma(new Blob([t]), r) : r(It[e] + (t || "")), Ma = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Da(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let di;
function gh(e, t) {
  if (Al && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Da).then(t);
  if (Ol && (e.data instanceof ArrayBuffer || Tl(e.data)))
    return t(Da(e.data));
  Us(e, !1, (n) => {
    di || (di = new TextEncoder()), t(di.encode(n));
  });
}
const Ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ba.length; e++)
  cr[Ba.charCodeAt(e)] = e;
const xh = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = cr[e.charCodeAt(r)], s = cr[e.charCodeAt(r + 1)], a = cr[e.charCodeAt(r + 2)], c = cr[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, vh = typeof ArrayBuffer == "function", qs = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Rl(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: yh(e.substring(1), t)
  } : Gr[n] ? e.length > 1 ? {
    type: Gr[n],
    data: e.substring(1)
  } : {
    type: Gr[n]
  } : zi;
}, yh = (e, t) => {
  if (vh) {
    const n = xh(e);
    return Rl(n, t);
  } else
    return { base64: !0, data: e };
}, Rl = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, kl = "", bh = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    Us(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(kl));
    });
  });
}, Sh = (e, t) => {
  const n = e.split(kl), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = qs(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function wh() {
  return new TransformStream({
    transform(e, t) {
      gh(e, (n) => {
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
let hi;
function Nr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function jr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function Eh(e, t) {
  hi || (hi = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Nr(n) < 1)
            break;
          const c = jr(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Nr(n) < 2)
            break;
          const c = jr(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Nr(n) < 8)
            break;
          const c = jr(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(zi);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Nr(n) < o)
            break;
          const c = jr(n, o);
          a.enqueue(qs(i ? c : hi.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(zi);
          break;
        }
      }
    }
  });
}
const Pl = 4;
function je(e) {
  if (e) return Ch(e);
}
function Ch(e) {
  for (var t in je.prototype)
    e[t] = je.prototype[t];
  return e;
}
je.prototype.on = je.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
je.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
je.prototype.off = je.prototype.removeListener = je.prototype.removeAllListeners = je.prototype.removeEventListener = function(e, t) {
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
je.prototype.emit = function(e) {
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
je.prototype.emitReserved = je.prototype.emit;
je.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
je.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Uo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), lt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _h = "arraybuffer";
function Il(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const Ah = lt.setTimeout, Oh = lt.clearTimeout;
function qo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Ah.bind(lt), e.clearTimeoutFn = Oh.bind(lt)) : (e.setTimeoutFn = lt.setTimeout.bind(lt), e.clearTimeoutFn = lt.clearTimeout.bind(lt));
}
const Th = 1.33;
function Rh(e) {
  return typeof e == "string" ? kh(e) : Math.ceil((e.byteLength || e.size) * Th);
}
function kh(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Nl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Ph(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Ih(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class Nh extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Ws extends je {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, qo(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new Nh(t, n, r)), this;
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
    const n = qs(t, this.socket.binaryType);
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
    const n = Ph(t);
    return n.length ? "?" + n : "";
  }
}
class jh extends Ws {
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
    Sh(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, bh(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Nl()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let jl = !1;
try {
  jl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Lh = jl;
function Mh() {
}
class Dh extends jh {
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
let Pn = class Zr extends je {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, qo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Il(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Zr.requestsCount++, Zr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Mh, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Zr.requests[this._index], this._xhr = null;
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
    attachEvent("onunload", Fa);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in lt ? "pagehide" : "unload";
    addEventListener(e, Fa, !1);
  }
}
function Fa() {
  for (let e in Pn.requests)
    Pn.requests.hasOwnProperty(e) && Pn.requests[e].abort();
}
const Bh = function() {
  const e = Ll({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Fh extends Dh {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Bh && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Pn(Ll, this.uri(), t);
  }
}
function Ll(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Lh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new lt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ml = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class zh extends Ws {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Ml ? {} : Il(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Us(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && Uo(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Nl()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const pi = lt.WebSocket || lt.MozWebSocket;
class Vh extends zh {
  createSocket(t, n, r) {
    return Ml ? new pi(t, n, r) : n ? new pi(t, n) : new pi(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Hh extends Ws {
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
        const n = Eh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = wh();
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
        o && Uo(() => {
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
const Uh = {
  websocket: Vh,
  webtransport: Hh,
  polling: Fh
}, qh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Wh = [
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
function Vi(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = qh.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Wh[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Xh(i, i.path), i.queryKey = Yh(i, i.query), i;
}
function Xh(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Yh(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const Hi = typeof addEventListener == "function" && typeof removeEventListener == "function", Jr = [];
Hi && addEventListener("offline", () => {
  Jr.forEach((e) => e());
}, !1);
class Zt extends je {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = _h, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Vi(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Vi(n.host).host);
    qo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Ih(this.opts.query)), Hi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Jr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = Pl, n.transport = t, this.id && (n.sid = this.id);
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
    const t = this.opts.rememberUpgrade && Zt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Zt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (n += Rh(o)), r > 0 && n > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, Uo(() => {
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
    if (Zt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Hi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Jr.indexOf(this._offlineEventListener);
        r !== -1 && Jr.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Zt.protocol = Pl;
class $h extends Zt {
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
    Zt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Zt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = n.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), n.close(), n = null);
    }
    const s = (f) => {
      const d = new Error("probe error: " + f);
      d.transport = n.name, i(), this.emitReserved("upgradeError", d);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(f) {
      n && f.name !== n.name && i();
    }
    const u = () => {
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
let Kh = class extends $h {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Uh[o]).filter((o) => !!o)), super(t, r);
  }
};
function Gh(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Vi(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Zh = typeof ArrayBuffer == "function", Jh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Dl = Object.prototype.toString, Qh = typeof Blob == "function" || typeof Blob < "u" && Dl.call(Blob) === "[object BlobConstructor]", ep = typeof File == "function" || typeof File < "u" && Dl.call(File) === "[object FileConstructor]";
function Xs(e) {
  return Zh && (e instanceof ArrayBuffer || Jh(e)) || Qh && e instanceof Blob || ep && e instanceof File;
}
function Qr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (Qr(e[n]))
        return !0;
    return !1;
  }
  if (Xs(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Qr(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Qr(e[n]))
      return !0;
  return !1;
}
function tp(e) {
  const t = [], n = e.data, r = e;
  return r.data = Ui(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Ui(e, t) {
  if (!e)
    return e;
  if (Xs(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Ui(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Ui(e[r], t));
    return n;
  }
  return e;
}
function np(e, t) {
  return e.data = qi(e.data, t), delete e.attachments, e;
}
function qi(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = qi(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = qi(e[n], t));
  return e;
}
const rp = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], op = 5;
var ue;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ue || (ue = {}));
class ip {
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
    return (t.type === ue.EVENT || t.type === ue.ACK) && Qr(t) ? this.encodeAsBinary({
      type: t.type === ue.EVENT ? ue.BINARY_EVENT : ue.BINARY_ACK,
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
    return (t.type === ue.BINARY_EVENT || t.type === ue.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = tp(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function za(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ys extends je {
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
      const r = n.type === ue.BINARY_EVENT;
      r || n.type === ue.BINARY_ACK ? (n.type = r ? ue.EVENT : ue.ACK, this.reconstructor = new sp(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Xs(t) || t.base64)
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
    if (ue[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ue.BINARY_EVENT || r.type === ue.BINARY_ACK) {
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
      if (Ys.isPayloadValid(r.type, i))
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
      case ue.CONNECT:
        return za(n);
      case ue.DISCONNECT:
        return n === void 0;
      case ue.CONNECT_ERROR:
        return typeof n == "string" || za(n);
      case ue.EVENT:
      case ue.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && rp.indexOf(n[0]) === -1);
      case ue.ACK:
      case ue.BINARY_ACK:
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
class sp {
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
      const n = np(this.reconPack, this.buffers);
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
const ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ys,
  Encoder: ip,
  get PacketType() {
    return ue;
  },
  protocol: op
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const cp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Bl extends je {
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
      ht(t, "open", this.onopen.bind(this)),
      ht(t, "packet", this.onpacket.bind(this)),
      ht(t, "error", this.onerror.bind(this)),
      ht(t, "close", this.onclose.bind(this))
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
    if (cp.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: ue.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const u = this.ids++, f = n.pop();
      this._registerAckCallback(u, f), s.id = u;
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
      type: ue.CONNECT,
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
        case ue.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ue.EVENT:
        case ue.BINARY_EVENT:
          this.onevent(t);
          break;
        case ue.ACK:
        case ue.BINARY_ACK:
          this.onack(t);
          break;
        case ue.DISCONNECT:
          this.ondisconnect();
          break;
        case ue.CONNECT_ERROR:
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
        type: ue.ACK,
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
function Xn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Xn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
Xn.prototype.reset = function() {
  this.attempts = 0;
};
Xn.prototype.setMin = function(e) {
  this.ms = e;
};
Xn.prototype.setMax = function(e) {
  this.max = e;
};
Xn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Wi extends je {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, qo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Xn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || ap;
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
    this.engine = new Kh(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = ht(n, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = ht(n, "error", i);
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
      ht(t, "ping", this.onping.bind(this)),
      ht(t, "data", this.ondata.bind(this)),
      ht(t, "error", this.onerror.bind(this)),
      ht(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      ht(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Uo(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Bl(this, t, n), this.nsps[t] = r), r;
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
const nr = {};
function eo(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = Gh(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = nr[o] && i in nr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Wi(r, t) : (nr[o] || (nr[o] = new Wi(r, t)), c = nr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(eo, {
  Manager: Wi,
  Socket: Bl,
  io: eo,
  connect: eo
});
var mi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Va;
function lp() {
  return Va || (Va = 1, function(e) {
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
  }(mi)), mi.exports;
}
var up = lp();
const Xe = /* @__PURE__ */ Qf(up);
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nt.apply(null, arguments);
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
var fp = Symbol.for("react.element"), dp = Symbol.for("react.transitional.element"), hp = Symbol.for("react.fragment");
function pp(e) {
  return (
    // Base object type
    e && ye(e) === "object" && // React Element type
    (e.$$typeof === fp || e.$$typeof === dp) && // React Fragment type
    e.type === hp
  );
}
var Xi = {}, $s = [], mp = function(t) {
  $s.push(t);
};
function Ks(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $s.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function gp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $s.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Fl() {
  Xi = {};
}
function zl(e, t, n) {
  !t && !Xi[n] && (e(!1, n), Xi[n] = !0);
}
function en(e, t) {
  zl(Ks, e, t);
}
function xp(e, t) {
  zl(gp, e, t);
}
en.preMessage = mp;
en.resetWarned = Fl;
en.noteOnce = xp;
function vp(e, t) {
  if (ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vl(e) {
  var t = vp(e, "string");
  return ye(t) == "symbol" ? t : t + "";
}
function V(e, t, n) {
  return (t = Vl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ha(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ha(Object(n), !0).forEach(function(r) {
      V(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ha(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ua(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function yp(e) {
  return e && ye(e) === "object" && Ua(e.nativeElement) ? e.nativeElement : Ua(e) ? e : null;
}
function bp(e) {
  var t = yp(e);
  if (t)
    return t;
  if (e instanceof Pe.Component) {
    var n;
    return (n = pa.findDOMNode) === null || n === void 0 ? void 0 : n.call(pa, e);
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
var qa;
function Sp() {
  if (qa) return ge;
  qa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var S = p.$$typeof;
      switch (S) {
        case e:
          switch (p = p.type, p) {
            case n:
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
                case d:
                case f:
                case i:
                  return p;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = c, ge.Fragment = n, ge.Lazy = d, ge.Memo = f, ge.Portal = t, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = l, ge.SuspenseList = u, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(p) {
    return m(p) === s;
  }, ge.isContextProvider = function(p) {
    return m(p) === i;
  }, ge.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ge.isForwardRef = function(p) {
    return m(p) === c;
  }, ge.isFragment = function(p) {
    return m(p) === n;
  }, ge.isLazy = function(p) {
    return m(p) === d;
  }, ge.isMemo = function(p) {
    return m(p) === f;
  }, ge.isPortal = function(p) {
    return m(p) === t;
  }, ge.isProfiler = function(p) {
    return m(p) === o;
  }, ge.isStrictMode = function(p) {
    return m(p) === r;
  }, ge.isSuspense = function(p) {
    return m(p) === l;
  }, ge.isSuspenseList = function(p) {
    return m(p) === u;
  }, ge.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === l || p === u || p === x || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
  }, ge.typeOf = m, ge;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function wp() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = !1, m = !1, p = !1, S = !1, y = !1, b;
    b = Symbol.for("react.module.reference");
    function _(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === n || j === o || y || j === r || j === l || j === u || S || j === x || g || m || p || typeof j == "object" && j !== null && (j.$$typeof === d || j.$$typeof === f || j.$$typeof === i || j.$$typeof === s || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === b || j.getModuleId !== void 0));
    }
    function v(j) {
      if (typeof j == "object" && j !== null) {
        var Te = j.$$typeof;
        switch (Te) {
          case e:
            var we = j.type;
            switch (we) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return we;
              default:
                var ot = we && we.$$typeof;
                switch (ot) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case i:
                    return ot;
                  default:
                    return Te;
                }
            }
          case t:
            return Te;
        }
      }
    }
    var A = s, E = i, T = e, N = c, U = n, Q = d, Y = f, P = t, B = o, H = r, q = l, Z = u, $ = !1, G = !1;
    function ne(j) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(j) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(j) {
      return v(j) === s;
    }
    function ee(j) {
      return v(j) === i;
    }
    function fe(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function le(j) {
      return v(j) === c;
    }
    function de(j) {
      return v(j) === n;
    }
    function pe(j) {
      return v(j) === d;
    }
    function I(j) {
      return v(j) === f;
    }
    function X(j) {
      return v(j) === t;
    }
    function F(j) {
      return v(j) === o;
    }
    function D(j) {
      return v(j) === r;
    }
    function R(j) {
      return v(j) === l;
    }
    function te(j) {
      return v(j) === u;
    }
    xe.ContextConsumer = A, xe.ContextProvider = E, xe.Element = T, xe.ForwardRef = N, xe.Fragment = U, xe.Lazy = Q, xe.Memo = Y, xe.Portal = P, xe.Profiler = B, xe.StrictMode = H, xe.Suspense = q, xe.SuspenseList = Z, xe.isAsyncMode = ne, xe.isConcurrentMode = re, xe.isContextConsumer = K, xe.isContextProvider = ee, xe.isElement = fe, xe.isForwardRef = le, xe.isFragment = de, xe.isLazy = pe, xe.isMemo = I, xe.isPortal = X, xe.isProfiler = F, xe.isStrictMode = D, xe.isSuspense = R, xe.isSuspenseList = te, xe.isValidElementType = _, xe.typeOf = v;
  }()), xe;
}
var Xa;
function Ep() {
  return Xa || (Xa = 1, process.env.NODE_ENV === "production" ? Lr.exports = Sp() : Lr.exports = wp()), Lr.exports;
}
var gi = Ep();
function Hl(e, t, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Cp = Number(Zf.split(".")[0]), Ul = function(t, n) {
  typeof t == "function" ? t(n) : ye(t) === "object" && t && "current" in t && (t.current = n);
}, _p = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      Ul(s, i);
    });
  };
}, Ap = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (ql(t) && Cp >= 19)
    return !0;
  var o = gi.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== gi.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== gi.ForwardRef);
};
function ql(e) {
  return /* @__PURE__ */ Gf(e) && !pp(e);
}
var Op = function(t) {
  if (t && ql(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function yt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ya(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Vl(r.key), r);
  }
}
function bt(e, t, n) {
  return t && Ya(e.prototype, t), n && Ya(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Yi(e, t) {
  return Yi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Yi(e, t);
}
function wr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Yi(e, t);
}
function Fn(e) {
  return Fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fn(e);
}
function Gs() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gs = function() {
    return !!e;
  })();
}
function gn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wl(e, t) {
  if (t && (ye(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return gn(e);
}
function Wo(e) {
  var t = Gs();
  return function() {
    var n, r = Fn(e);
    if (t) {
      var o = Fn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Wl(this, n);
  };
}
function $i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Tp(e) {
  if (Array.isArray(e)) return $i(e);
}
function Xl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zs(e, t) {
  if (e) {
    if (typeof e == "string") return $i(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $i(e, t) : void 0;
  }
}
function Rp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e) {
  return Tp(e) || Xl(e) || Zs(e) || Rp();
}
var Yl = function(t) {
  return +setTimeout(t, 16);
}, $l = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Yl = function(t) {
  return window.requestAnimationFrame(t);
}, $l = function(t) {
  return window.cancelAnimationFrame(t);
});
var $a = 0, Xo = /* @__PURE__ */ new Map();
function Kl(e) {
  Xo.delete(e);
}
var vo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  $a += 1;
  var r = $a;
  function o(i) {
    if (i === 0)
      Kl(r), t();
    else {
      var s = Yl(function() {
        o(i - 1);
      });
      Xo.set(r, s);
    }
  }
  return o(n), r;
};
vo.cancel = function(e) {
  var t = Xo.get(e);
  return Kl(e), $l(t);
};
process.env.NODE_ENV !== "production" && (vo.ids = function() {
  return Xo;
});
function Gl(e) {
  if (Array.isArray(e)) return e;
}
function kp(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
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
function Zl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, t) {
  return Gl(e) || kp(e, t) || Zs(e, t) || Zl();
}
function hr(e) {
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
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Pp(e, t) {
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
var Ka = "data-rc-order", Ga = "data-rc-priority", Ip = "rc-util-key", Ki = /* @__PURE__ */ new Map();
function Jl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ip;
}
function Yo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Np(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Js(e) {
  return Array.from((Ki.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ql(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = Np(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Ka, s), a && i && c.setAttribute(Ga, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = Yo(t), u = l.firstChild;
  if (r) {
    if (a) {
      var f = (t.styles || Js(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Ka)))
          return !1;
        var x = Number(d.getAttribute(Ga) || 0);
        return i >= x;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function eu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Yo(t);
  return (t.styles || Js(n)).find(function(r) {
    return r.getAttribute(Jl(t)) === e;
  });
}
function tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = eu(e, t);
  if (n) {
    var r = Yo(t);
    r.removeChild(n);
  }
}
function jp(e, t) {
  var n = Ki.get(e);
  if (!n || !Pp(document, n)) {
    var r = Ql("", t), o = r.parentNode;
    Ki.set(e, o), e.removeChild(r);
  }
}
function xn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Yo(n), o = Js(r), i = M(M({}, n), {}, {
    styles: o
  });
  jp(r, i);
  var s = eu(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Ql(e, i);
  return u.setAttribute(Jl(i), t), u;
}
function Lp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function pr(e, t) {
  if (e == null) return {};
  var n, r, o = Lp(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Mp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (en(!c, "Warning: There may be circular references"), c)
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
  return o(e, t);
}
var Dp = "%";
function Gi(e) {
  return e.join(Dp);
}
var Bp = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), V(this, "instanceId", void 0), V(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return bt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Gi(n));
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
      return this.opUpdate(Gi(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), zn = "data-token-hash", gt = "data-css-hash", Fp = "data-cache-path", Kt = "__cssinjs_instance__";
function zp() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(gt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Kt] = o[Kt] || e, o[Kt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(gt, "]"))).forEach(function(o) {
      var i = o.getAttribute(gt);
      if (r[i]) {
        if (o[Kt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Bp(e);
}
var Er = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: zp(),
  defaultCache: !0
});
function Vp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Qs = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), V(this, "cache", void 0), V(this, "keys", void 0), V(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return bt(e, [{
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
          var i = this.keys.reduce(function(l, u) {
            var f = ae(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ae(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, u) {
        if (u === n.length - 1)
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
          return !Vp(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
V(Qs, "MAX_CACHE_SIZE", 20);
V(Qs, "MAX_CACHE_OFFSET", 5);
var Za = 0, nu = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), V(this, "derivatives", void 0), V(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Za, t.length === 0 && Ks(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Za += 1;
  }
  return bt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), xi = new Qs();
function Zi(e) {
  var t = Array.isArray(e) ? e : [e];
  return xi.has(t) || xi.set(t, new nu(t)), xi.get(t);
}
var Hp = /* @__PURE__ */ new WeakMap(), vi = {};
function Up(e, t) {
  for (var n = Hp, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(vi) || n.set(vi, e()), n.get(vi);
}
var Ja = /* @__PURE__ */ new WeakMap();
function ur(e) {
  var t = Ja.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof nu ? t += r.id : r && ye(r) === "object" ? t += ur(r) : t += r;
  }), t = hr(t), Ja.set(e, t)), t;
}
function Qa(e, t) {
  return hr("".concat(t, "_").concat(ur(e)));
}
var Ji = Ut();
function yo(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function bo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = M(M({}, o), {}, (r = {}, V(r, zn, t), V(r, gt, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var to = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, qp = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, ru = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], f = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var d, x = to(u, r == null ? void 0 : r.prefix);
      o[x] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(x, ")");
    }
  }), [i, qp(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, ec = process.env.NODE_ENV !== "test" && Ut() ? w.useLayoutEffect : w.useEffect, ou = function(t, n) {
  var r = w.useRef(!0);
  ec(function() {
    return t(r.current);
  }, n), ec(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Wp = M({}, w), tc = Wp.useInsertionEffect, Xp = function(t, n, r) {
  w.useMemo(t, r), ou(function() {
    return n(!0);
  }, r);
}, Yp = tc ? function(e, t, n) {
  return tc(function() {
    return e(), t();
  }, n);
} : Xp, $p = M({}, w), Kp = $p.useInsertionEffect, Gp = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Ks(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, Zp = function() {
  return function(t) {
    t();
  };
}, Jp = typeof Kp < "u" ? Gp : Zp;
function Qp() {
  return !1;
}
var Qi = !1;
function e0() {
  return Qi;
}
const t0 = process.env.NODE_ENV === "production" ? Qp : e0;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Mr && typeof Mr.webpackHotUpdate == "function") {
    var n0 = Mr.webpackHotUpdate;
    Mr.webpackHotUpdate = function() {
      return Qi = !0, setTimeout(function() {
        Qi = !1;
      }, 0), n0.apply(void 0, arguments);
    };
  }
}
function ea(e, t, n, r, o) {
  var i = w.useContext(Er), s = i.cache, a = [e].concat(Ht(t)), c = Gi(a), l = Jp([c]), u = t0(), f = function(m) {
    s.opUpdate(c, function(p) {
      var S = p || [void 0, void 0], y = ae(S, 2), b = y[0], _ = b === void 0 ? 0 : b, v = y[1], A = v;
      process.env.NODE_ENV !== "production" && v && u && (r == null || r(A, u), A = null);
      var E = A || n(), T = [_, E];
      return m ? m(T) : T;
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
  var x = d[1];
  return Yp(function() {
    o == null || o(x);
  }, function(g) {
    return f(function(m) {
      var p = ae(m, 2), S = p[0], y = p[1];
      return g && S === 0 && (o == null || o(x)), [S + 1, y];
    }), function() {
      s.opUpdate(c, function(m) {
        var p = m || [], S = ae(p, 2), y = S[0], b = y === void 0 ? 0 : y, _ = S[1], v = b - 1;
        return v === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(_, !1));
        }), null) : [b - 1, _];
      });
    };
  }, [c]), x;
}
var r0 = {}, o0 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", un = /* @__PURE__ */ new Map();
function i0(e) {
  un.set(e, (un.get(e) || 0) + 1);
}
function s0(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(zn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Kt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var a0 = 0;
function c0(e, t) {
  un.set(e, (un.get(e) || 0) - 1);
  var n = Array.from(un.keys()), r = n.filter(function(o) {
    var i = un.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > a0 && r.forEach(function(o) {
    s0(o, t), un.delete(o);
  });
}
var l0 = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = M(M({}, i), n);
  return o && (s = o(s)), s;
}, iu = "token";
function u0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Jt(Er), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? r0 : c, u = n.formatToken, f = n.getComputedToken, d = n.cssVar, x = Up(function() {
    return Object.assign.apply(Object, [{}].concat(Ht(t)));
  }, t), g = ur(x), m = ur(l), p = d ? ur(d) : "", S = ea(iu, [a, e.id, g, m, p], function() {
    var y, b = f ? f(x, l, e) : l0(x, l, e, u), _ = M({}, b), v = "";
    if (d) {
      var A = ru(b, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), E = ae(A, 2);
      b = E[0], v = E[1];
    }
    var T = Qa(b, a);
    b._tokenKey = T, _._tokenKey = Qa(_, a);
    var N = (y = d == null ? void 0 : d.key) !== null && y !== void 0 ? y : T;
    b._themeKey = N, i0(N);
    var U = "".concat(o0, "-").concat(hr(T));
    return b._hashId = U, [b, U, _, v, (d == null ? void 0 : d.key) || ""];
  }, function(y) {
    c0(y[0]._themeKey, o);
  }, function(y) {
    var b = ae(y, 4), _ = b[0], v = b[3];
    if (d && v) {
      var A = xn(v, hr("css-variables-".concat(_._themeKey)), {
        mark: gt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[Kt] = o, A.setAttribute(zn, _._themeKey);
    }
  });
  return S;
}
var f0 = function(t, n, r) {
  var o = ae(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, x = bo(s, a, u, d, l);
  return [f, u, x];
}, d0 = {
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
}, su = "comm", au = "rule", cu = "decl", h0 = "@import", p0 = "@namespace", m0 = "@keyframes", g0 = "@layer", lu = Math.abs, ta = String.fromCharCode;
function uu(e) {
  return e.trim();
}
function no(e, t, n) {
  return e.replace(t, n);
}
function x0(e, t, n) {
  return e.indexOf(t, n);
}
function In(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vn(e, t, n) {
  return e.slice(t, n);
}
function Rt(e) {
  return e.length;
}
function v0(e) {
  return e.length;
}
function Dr(e, t) {
  return t.push(e), e;
}
var $o = 1, Hn = 1, fu = 0, ft = 0, Ne = 0, Yn = "";
function na(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: $o, column: Hn, length: s, return: "", siblings: a };
}
function y0() {
  return Ne;
}
function b0() {
  return Ne = ft > 0 ? In(Yn, --ft) : 0, Hn--, Ne === 10 && (Hn = 1, $o--), Ne;
}
function xt() {
  return Ne = ft < fu ? In(Yn, ft++) : 0, Hn++, Ne === 10 && (Hn = 1, $o++), Ne;
}
function Gt() {
  return In(Yn, ft);
}
function ro() {
  return ft;
}
function Ko(e, t) {
  return Vn(Yn, e, t);
}
function mr(e) {
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
function S0(e) {
  return $o = Hn = 1, fu = Rt(Yn = e), ft = 0, [];
}
function w0(e) {
  return Yn = "", e;
}
function yi(e) {
  return uu(Ko(ft - 1, es(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function E0(e) {
  for (; (Ne = Gt()) && Ne < 33; )
    xt();
  return mr(e) > 2 || mr(Ne) > 3 ? "" : " ";
}
function C0(e, t) {
  for (; --t && xt() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return Ko(e, ro() + (t < 6 && Gt() == 32 && xt() == 32));
}
function es(e) {
  for (; xt(); )
    switch (Ne) {
      // ] ) " '
      case e:
        return ft;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && es(Ne);
        break;
      // (
      case 40:
        e === 41 && es(e);
        break;
      // \
      case 92:
        xt();
        break;
    }
  return ft;
}
function _0(e, t) {
  for (; xt() && e + Ne !== 57; )
    if (e + Ne === 84 && Gt() === 47)
      break;
  return "/*" + Ko(t, ft - 1) + "*" + ta(e === 47 ? e : xt());
}
function A0(e) {
  for (; !mr(Gt()); )
    xt();
  return Ko(e, ft);
}
function O0(e) {
  return w0(oo("", null, null, null, [""], e = S0(e), 0, [0], e));
}
function oo(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, x = 0, g = 0, m = 1, p = 1, S = 1, y = 0, b = "", _ = o, v = i, A = r, E = b; p; )
    switch (g = y, y = xt()) {
      // (
      case 40:
        if (g != 108 && In(E, f - 1) == 58) {
          x0(E += no(yi(y), "&", "&\f"), "&\f", lu(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += yi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += E0(g);
        break;
      // \
      case 92:
        E += C0(ro() - 1, 7);
        continue;
      // /
      case 47:
        switch (Gt()) {
          case 42:
          case 47:
            Dr(T0(_0(xt(), ro()), t, n, c), c), (mr(g || 1) == 5 || mr(Gt() || 1) == 5) && Rt(E) && Vn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = Rt(E) * S;
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
            S == -1 && (E = no(E, /\f/g, "")), x > 0 && (Rt(E) - f || m === 0 && g === 47) && Dr(x > 32 ? rc(E + ";", r, n, f - 1, c) : rc(no(E, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Dr(A = nc(E, t, n, l, u, o, a, b, _ = [], v = [], f, i), i), y === 123)
              if (u === 0)
                oo(E, t, A, A, _, i, f, a, v);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (In(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (In(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? oo(e, A, A, r && Dr(nc(e, A, A, 0, 0, o, a, b, o, _ = [], f, v), v), o, v, f, a, r ? _ : v) : oo(E, A, A, A, [""], v, 0, a, v);
              }
        }
        l = u = x = 0, m = S = 1, b = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Rt(E), x = g;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && b0() == 125)
            continue;
        }
        switch (E += ta(y), y * m) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Rt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Gt() === 45 && (E += yi(xt())), d = Gt(), u = f = Rt(b = E += A0(ro())), y++;
            break;
          // -
          case 45:
            g === 45 && Rt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function nc(e, t, n, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, x = o === 0 ? i : [""], g = v0(x), m = 0, p = 0, S = 0; m < r; ++m)
    for (var y = 0, b = Vn(e, d + 1, d = lu(p = s[m])), _ = e; y < g; ++y)
      (_ = uu(p > 0 ? x[y] + " " + b : no(b, /&\f/g, x[y]))) && (c[S++] = _);
  return na(e, t, n, o === 0 ? au : a, c, l, u, f);
}
function T0(e, t, n, r) {
  return na(e, t, n, su, ta(y0()), Vn(e, 2, -2), 0, r);
}
function rc(e, t, n, r, o) {
  return na(e, t, n, cu, Vn(e, 0, r), Vn(e, r + 1, -1), r, o);
}
function ts(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function R0(e, t, n, r) {
  switch (e.type) {
    case g0:
      if (e.children.length) break;
    case h0:
    case p0:
    case cu:
      return e.return = e.return || e.value;
    case su:
      return "";
    case m0:
      return e.return = e.value + "{" + ts(e.children, r) + "}";
    case au:
      if (!Rt(e.value = e.props.join(","))) return "";
  }
  return Rt(n = ts(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function du(e, t) {
  var n = t.path, r = t.parentSelectors;
  en(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var k0 = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && du("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, P0 = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && du("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, oc = "data-ant-cssinjs-cache-path", hu = "_FILE_STYLE__", vn, pu = !0;
function I0() {
  if (!vn && (vn = {}, Ut())) {
    var e = document.createElement("div");
    e.className = oc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      vn[a] = c;
    });
    var n = document.querySelector("style[".concat(oc, "]"));
    if (n) {
      var r;
      pu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function N0(e) {
  return I0(), !!vn[e];
}
function j0(e) {
  var t = vn[e], n = null;
  if (t && Ut())
    if (pu)
      n = hu;
    else {
      var r = document.querySelector("style[".concat(gt, '="').concat(vn[e], '"]'));
      r ? n = r.innerHTML : delete vn[e];
    }
  return [n, t];
}
var mu = "_skip_check_", gu = "_multi_value_";
function io(e) {
  var t = ts(O0(e), R0);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function L0(e) {
  return ye(e) === "object" && e && (mu in e || gu in e);
}
function ic(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Ht(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var M0 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, f = n.transformers, d = f === void 0 ? [] : f, x = n.linters, g = x === void 0 ? [] : x, m = "", p = {};
  function S(_) {
    var v = _.getName(a);
    if (!p[v]) {
      var A = e(_.style, n, {
        root: !1,
        parentSelectors: s
      }), E = ae(A, 1), T = E[0];
      p[v] = "@keyframes ".concat(_.getName(a)).concat(T);
    }
  }
  function y(_) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(A) {
      Array.isArray(A) ? y(A, v) : A && v.push(A);
    }), v;
  }
  var b = y(Array.isArray(t) ? t : [t]);
  return b.forEach(function(_) {
    var v = typeof _ == "string" && !o ? {} : _;
    if (typeof v == "string")
      m += "".concat(v, `
`);
    else if (v._keyframe)
      S(v);
    else {
      var A = d.reduce(function(E, T) {
        var N;
        return (T == null || (N = T.visit) === null || N === void 0 ? void 0 : N.call(T, E)) || E;
      }, v);
      Object.keys(A).forEach(function(E) {
        var T = A[E];
        if (ye(T) === "object" && T && (E !== "animationName" || !T._keyframe) && !L0(T)) {
          var N = !1, U = E.trim(), Q = !1;
          (o || i) && a ? U.startsWith("@") ? N = !0 : U === "&" ? U = ic("", a, u) : U = ic(E, a, u) : o && !a && (U === "&" || U === "") && (U = "", Q = !0);
          var Y = e(T, n, {
            root: Q,
            injectHash: N,
            parentSelectors: [].concat(Ht(s), [U])
          }), P = ae(Y, 2), B = P[0], H = P[1];
          p = M(M({}, p), H), m += "".concat(U).concat(B);
        } else {
          let $ = function(G, ne) {
            process.env.NODE_ENV !== "production" && (ye(T) !== "object" || !(T != null && T[mu])) && [k0, P0].concat(Ht(g)).forEach(function(ee) {
              return ee(G, ne, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var re = G.replace(/[A-Z]/g, function(ee) {
              return "-".concat(ee.toLowerCase());
            }), K = ne;
            !d0[G] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), G === "animationName" && ne !== null && ne !== void 0 && ne._keyframe && (S(ne), K = ne.getName(a)), m += "".concat(re, ":").concat(K, ";");
          };
          var q, Z = (q = T == null ? void 0 : T.value) !== null && q !== void 0 ? q : T;
          ye(T) === "object" && T !== null && T !== void 0 && T[gu] && Array.isArray(Z) ? Z.forEach(function(G) {
            $(E, G);
          }) : $(E, Z);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function xu(e, t) {
  return hr("".concat(e.join("%")).concat(t));
}
function D0() {
  return null;
}
var vu = "style";
function ns(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Er), f = u.autoClear, d = u.mock, x = u.defaultCache, g = u.hashPriority, m = u.container, p = u.ssrInline, S = u.transformers, y = u.linters, b = u.cache, _ = u.layer, v = n._tokenKey, A = [v];
  _ && A.push("layer"), A.push.apply(A, Ht(r));
  var E = Ji;
  process.env.NODE_ENV !== "production" && d !== void 0 && (E = d === "client");
  var T = ea(
    vu,
    A,
    // Create cache if needed
    function() {
      var P = A.join("|");
      if (N0(P)) {
        var B = j0(P), H = ae(B, 2), q = H[0], Z = H[1];
        if (q)
          return [q, v, Z, {}, a, l];
      }
      var $ = t(), G = M0($, {
        hashId: o,
        hashPriority: g,
        layer: _ ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: y
      }), ne = ae(G, 2), re = ne[0], K = ne[1], ee = io(re), fe = xu(A, ee);
      return [ee, v, fe, K, a, l];
    },
    // Remove cache if no need
    function(P, B) {
      var H = ae(P, 3), q = H[2];
      (B || f) && Ji && tu(q, {
        mark: gt
      });
    },
    // Effect: Inject style here
    function(P) {
      var B = ae(P, 4), H = B[0];
      B[1];
      var q = B[2], Z = B[3];
      if (E && H !== hu) {
        var $ = {
          mark: gt,
          prepend: _ ? !1 : "queue",
          attachTo: m,
          priority: l
        }, G = typeof s == "function" ? s() : s;
        G && ($.csp = {
          nonce: G
        });
        var ne = [], re = [];
        Object.keys(Z).forEach(function(ee) {
          ee.startsWith("@layer") ? ne.push(ee) : re.push(ee);
        }), ne.forEach(function(ee) {
          xn(io(Z[ee]), "_layer-".concat(ee), M(M({}, $), {}, {
            prepend: !0
          }));
        });
        var K = xn(H, q, $);
        K[Kt] = b.instanceId, K.setAttribute(zn, v), process.env.NODE_ENV !== "production" && K.setAttribute(Fp, A.join("|")), re.forEach(function(ee) {
          xn(io(Z[ee]), "_effect-".concat(ee), $);
        });
      }
    }
  ), N = ae(T, 3), U = N[0], Q = N[1], Y = N[2];
  return function(P) {
    var B;
    if (!p || E || !x)
      B = /* @__PURE__ */ w.createElement(D0, null);
    else {
      var H;
      B = /* @__PURE__ */ w.createElement("style", Nt({}, (H = {}, V(H, zn, Q), V(H, gt, Y), H), {
        dangerouslySetInnerHTML: {
          __html: U
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, B, P);
  };
}
var B0 = function(t, n, r) {
  var o = ae(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, d = f.plain;
  if (l)
    return null;
  var x = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return x = bo(i, s, a, g, d), c && Object.keys(c).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var p = io(c[m]), S = bo(p, s, "_effect-".concat(m), g, d);
      m.startsWith("@layer") ? x = S + x : x += S;
    }
  }), [u, a, x];
}, yu = "cssVar", F0 = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = Jt(Er), f = u.cache.instanceId, d = u.container, x = a._tokenKey, g = [].concat(Ht(t.path), [r, l, x]), m = ea(yu, g, function() {
    var p = n(), S = ru(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), y = ae(S, 2), b = y[0], _ = y[1], v = xu(g, _);
    return [b, _, v, r];
  }, function(p) {
    var S = ae(p, 3), y = S[2];
    Ji && tu(y, {
      mark: gt
    });
  }, function(p) {
    var S = ae(p, 3), y = S[1], b = S[2];
    if (y) {
      var _ = xn(y, b, {
        mark: gt,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      _[Kt] = f, _.setAttribute(zn, r);
    }
  });
  return m;
}, z0 = function(t, n, r) {
  var o = ae(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = bo(i, a, s, f, l);
  return [u, s, d];
}, rr;
rr = {}, V(rr, vu, B0), V(rr, iu, f0), V(rr, yu, z0);
var bu = /* @__PURE__ */ function() {
  function e(t, n) {
    yt(this, e), V(this, "name", void 0), V(this, "style", void 0), V(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return bt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Tn(e) {
  return e.notSplit = !0, e;
}
Tn(["borderTop", "borderBottom"]), Tn(["borderTop"]), Tn(["borderBottom"]), Tn(["borderLeft", "borderRight"]), Tn(["borderLeft"]), Tn(["borderRight"]);
var ra = /* @__PURE__ */ Ds({});
function V0(e) {
  return Gl(e) || Xl(e) || Zs(e) || Zl();
}
function rs(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Su(e, t, n, r) {
  if (!t.length)
    return n;
  var o = V0(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Ht(e) : a = M({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Su(a[i], s, n, r), a;
}
function bi(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !rs(e, t.slice(0, -1)) ? e : Su(e, t, n, r);
}
function H0(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function sc(e) {
  return Array.isArray(e) ? [] : {};
}
var U0 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function q0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = sc(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = rs(o, s), u = Array.isArray(l);
      if (u || H0(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = rs(r, s);
          u ? r = bi(r, s, []) : (!f || ye(f) !== "object") && (r = bi(r, s, sc(l))), U0(l).forEach(function(d) {
            i([].concat(Ht(s), [d]), c);
          });
        }
      } else
        r = bi(r, s, l);
    }
    i([]);
  }), r;
}
function wu() {
}
let Ft = null;
function W0() {
  Ft = null, Fl();
}
let oa = wu;
process.env.NODE_ENV !== "production" && (oa = (e, t, n) => {
  en(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && W0();
});
const Eu = /* @__PURE__ */ w.createContext({}), $n = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = w.useContext(Eu), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = Ft;
        Ft || (Ft = {}), Ft[e] = Ft[e] || [], Ft[e].includes(i || "") || Ft[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ft);
      } else
        process.env.NODE_ENV !== "production" && oa(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = wu, e;
}, Go = oa, X0 = /* @__PURE__ */ Ds(void 0), nt = "${label} is not a valid ${type}", Zo = {
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
        string: nt,
        method: nt,
        array: nt,
        object: nt,
        number: nt,
        date: nt,
        boolean: nt,
        integer: nt,
        float: nt,
        regexp: nt,
        email: nt,
        url: nt,
        hex: nt
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
Object.assign({}, Zo.Modal);
let so = [];
const ac = () => so.reduce((e, t) => Object.assign(Object.assign({}, e), t), Zo.Modal);
function Y0(e) {
  if (e) {
    const t = Object.assign({}, e);
    return so.push(t), ac(), () => {
      so = so.filter((n) => n !== t), ac();
    };
  }
  Object.assign({}, Zo.Modal);
}
const Cu = /* @__PURE__ */ Ds(void 0), _u = "internalMark", Au = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = $n("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === _u, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Y0(t == null ? void 0 : t.Modal), [t]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ w.createElement(Cu.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Au.displayName = "LocaleProvider");
const Ou = {
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
}, gr = Object.assign(Object.assign({}, Ou), {
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
}), ze = Math.round;
function Si(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const cc = (e, t, n) => n === 0 ? e : e / 100;
function or(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class ke {
  constructor(t) {
    V(this, "isValid", !0), V(this, "r", 0), V(this, "g", 0), V(this, "b", 0), V(this, "a", 1), V(this, "_h", void 0), V(this, "_s", void 0), V(this, "_l", void 0), V(this, "_v", void 0), V(this, "_max", void 0), V(this, "_min", void 0), V(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof ke)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = or(t.r), this.g = or(t.g), this.b = or(t.b), this.a = typeof t.a == "number" ? or(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = ze(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: ze(i("r")),
      g: ze(i("g")),
      b: ze(i("b")),
      a: ze(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => ze((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = ze(this.a * 255).toString(16);
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
    const t = this.getHue(), n = ze(this.getSaturation() * 100), r = ze(this.getLightness() * 100);
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
    return o[t] = or(n, r), o;
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
      const d = ze(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = ze((i + f) * 255), this.g = ze((s + f) * 255), this.b = ze((a + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ze(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = ze(r * (1 - n) * 255), u = ze(r * (1 - n * c) * 255), f = ze(r * (1 - n * (1 - c)) * 255);
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
  fromHsvString(t) {
    const n = Si(t, cc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Si(t, cc);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Si(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ze(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Br = 2, lc = 0.16, $0 = 0.05, K0 = 0.05, G0 = 0.15, Tu = 5, Ru = 4, Z0 = [{
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
function uc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Br * t : Math.round(e.h) + Br * t : r = n ? Math.round(e.h) + Br * t : Math.round(e.h) - Br * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function fc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - lc * t : t === Ru ? r = e.s + lc : r = e.s + $0 * t, r > 1 && (r = 1), n && t === Tu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function dc(e, t, n) {
  var r;
  return n ? r = e.v + K0 * t : r = e.v - G0 * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function xr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new ke(e), o = r.toHsv(), i = Tu; i > 0; i -= 1) {
    var s = new ke({
      h: uc(o, i, !0),
      s: fc(o, i, !0),
      v: dc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= Ru; a += 1) {
    var c = new ke({
      h: uc(o, a),
      s: fc(o, a),
      v: dc(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? Z0.map(function(l) {
    var u = l.index, f = l.amount;
    return new ke(t.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var wi = {
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
}, os = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
os.primary = os[5];
var is = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
is.primary = is[5];
var ss = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ss.primary = ss[5];
var as = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
as.primary = as[5];
var cs = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
cs.primary = cs[5];
var ls = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ls.primary = ls[5];
var us = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
us.primary = us[5];
var fs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
fs.primary = fs[5];
var So = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
So.primary = So[5];
var ds = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ds.primary = ds[5];
var hs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
hs.primary = hs[5];
var ps = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ps.primary = ps[5];
var ms = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ms.primary = ms[5];
var Ei = {
  red: os,
  volcano: is,
  orange: ss,
  gold: as,
  yellow: cs,
  lime: ls,
  green: us,
  cyan: fs,
  blue: So,
  geekblue: ds,
  purple: hs,
  magenta: ps,
  grey: ms
};
function J0(e, t) {
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
    colorTextBase: u
  } = e, f = n(c), d = n(o), x = n(i), g = n(s), m = n(a), p = r(l, u), S = e.colorLink || e.colorInfo, y = n(S), b = new ke(g[1]).mix(new ke(g[3]), 50).toHexString();
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
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: b,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: x[1],
    colorWarningBgHover: x[2],
    colorWarningBorder: x[3],
    colorWarningBorderHover: x[4],
    colorWarningHover: x[4],
    colorWarning: x[6],
    colorWarningActive: x[7],
    colorWarningTextHover: x[8],
    colorWarningText: x[9],
    colorWarningTextActive: x[10],
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
    colorBgMask: new ke("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Q0 = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function em(e) {
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
  }, Q0(r));
}
const tm = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function nm(e) {
  return (e + 8) / e;
}
function rm(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: nm(n)
  }));
}
const om = (e) => {
  const t = rm(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function im(e) {
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
const ct = (e, t) => new ke(e).setA(t).toRgbString(), ir = (e, t) => new ke(e).darken(t).toHexString(), sm = (e) => {
  const t = xr(e);
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
}, am = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ct(r, 0.88),
    colorTextSecondary: ct(r, 0.65),
    colorTextTertiary: ct(r, 0.45),
    colorTextQuaternary: ct(r, 0.25),
    colorFill: ct(r, 0.15),
    colorFillSecondary: ct(r, 0.06),
    colorFillTertiary: ct(r, 0.04),
    colorFillQuaternary: ct(r, 0.02),
    colorBgSolid: ct(r, 1),
    colorBgSolidHover: ct(r, 0.75),
    colorBgSolidActive: ct(r, 0.95),
    colorBgLayout: ir(n, 4),
    colorBgContainer: ir(n, 0),
    colorBgElevated: ir(n, 0),
    colorBgSpotlight: ct(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: ir(n, 15),
    colorBorderSecondary: ir(n, 6)
  };
};
function cm(e) {
  wi.pink = wi.magenta, Ei.pink = Ei.magenta;
  const t = Object.keys(Ou).map((n) => {
    const r = e[n] === wi[n] ? Ei[n] : xr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), J0(e, {
    generateColorPalettes: sm,
    generateNeutralColorPalettes: am
  })), om(e.fontSize)), im(e)), tm(e)), em(e));
}
const ku = Zi(cm), gs = {
  token: gr,
  override: {
    override: gr
  },
  hashed: !0
}, Pu = /* @__PURE__ */ Pe.createContext(gs), xs = "ant", ia = "anticon", lm = (e, t) => t || (e ? `${xs}-${e}` : xs), Qt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: lm,
  iconPrefixCls: ia
}), {
  Consumer: Ey
} = Qt, hc = {};
function Iu(e) {
  const t = w.useContext(Qt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: hc,
    styles: hc
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const um = `-ant-${Date.now()}-${Math.random()}`;
function fm(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new ke(s), l = xr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new ke(t.primaryColor), a = xr(s.toRgbString());
    a.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new ke(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function dm(e, t) {
  const n = fm(e, t);
  Ut() ? xn(n, `${um}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Go(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const vs = /* @__PURE__ */ w.createContext(!1), hm = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(vs);
  return /* @__PURE__ */ w.createElement(vs.Provider, {
    value: n ?? r
  }, t);
}, vr = /* @__PURE__ */ w.createContext(void 0), pm = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(vr);
  return /* @__PURE__ */ w.createElement(vr.Provider, {
    value: n || r
  }, t);
};
function mm() {
  const e = Jt(vs), t = Jt(vr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Nu = /* @__PURE__ */ bt(function e() {
  yt(this, e);
}), ju = "CALC_UNIT", gm = new RegExp(ju, "g");
function Ci(e) {
  return typeof e == "number" ? "".concat(e).concat(ju) : e;
}
var xm = /* @__PURE__ */ function(e) {
  wr(n, e);
  var t = Wo(n);
  function n(r, o) {
    var i;
    yt(this, n), i = t.call(this), V(gn(i), "result", ""), V(gn(i), "unitlessCssVar", void 0), V(gn(i), "lowPriority", void 0);
    var s = ye(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ci(r) : s === "string" && (i.result = r), i;
  }
  return bt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Ci(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Ci(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(gm, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Nu), vm = /* @__PURE__ */ function(e) {
  wr(n, e);
  var t = Wo(n);
  function n(r) {
    var o;
    return yt(this, n), o = t.call(this), V(gn(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return bt(n, [{
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
}(Nu), ym = function(t, n) {
  var r = t === "css" ? xm : vm;
  return function(o) {
    return new r(o, n);
  };
}, pc = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ys(e) {
  var t = w.useRef();
  t.current = e;
  var n = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function bs(e) {
  var t = w.useRef(!1), n = w.useState(e), r = ae(n, 2), o = r[0], i = r[1];
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
function mc(e, t, n, r) {
  var o = M({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && en(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = M(M({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Lu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ss = !0;
function Jo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Lu)
    return Object.assign.apply(Object, [{}].concat(t));
  Ss = !1;
  var r = {};
  return t.forEach(function(o) {
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
  }), Ss = !0, r;
}
var gc = {};
function bm() {
}
var Sm = function(t) {
  var n, r = t, o = bm;
  return Lu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (Ss) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    gc[s] = {
      global: Array.from(n),
      component: M(M({}, (c = gc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function xc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Jo(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function wm(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return yo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return yo(i);
      }).join(","), ")");
    }
  };
}
var Em = 1e3 * 60 * 10, Cm = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), V(this, "map", /* @__PURE__ */ new Map()), V(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), V(this, "nextID", 0), V(this, "lastAccessBeat", /* @__PURE__ */ new Map()), V(this, "accessBeat", 0);
  }
  return bt(e, [{
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
        return i && ye(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(ye(i), "_").concat(i);
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
          r - o > Em && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), vc = new Cm();
function _m(e, t) {
  return Pe.useMemo(function() {
    var n = vc.get(t);
    if (n)
      return n;
    var r = e();
    return vc.set(t, r), r;
  }, t);
}
var Am = function() {
  return {};
};
function Om(e) {
  var t = e.useCSP, n = t === void 0 ? Am : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(d, x, g, m) {
    var p = Array.isArray(d) ? d[0] : d;
    function S(T) {
      return "".concat(String(p)).concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1));
    }
    var y = (m == null ? void 0 : m.unitless) || {}, b = typeof a == "function" ? a(d) : {}, _ = M(M({}, b), {}, V({}, S("zIndexPopup"), !0));
    Object.keys(y).forEach(function(T) {
      _[S(T)] = y[T];
    });
    var v = M(M({}, m), {}, {
      unitless: _,
      prefixToken: S
    }), A = u(d, x, g, v), E = l(p, g, v);
    return function(T) {
      var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, U = A(T, N), Q = ae(U, 2), Y = Q[1], P = E(N), B = ae(P, 2), H = B[0], q = B[1];
      return [H, Y, q];
    };
  }
  function l(d, x, g) {
    var m = g.unitless, p = g.injectStyle, S = p === void 0 ? !0 : p, y = g.prefixToken, b = g.ignore, _ = function(E) {
      var T = E.rootCls, N = E.cssVar, U = N === void 0 ? {} : N, Q = r(), Y = Q.realToken;
      return F0({
        path: [d],
        prefix: U.prefix,
        key: U.key,
        unitless: m,
        ignore: b,
        token: Y,
        scope: T
      }, function() {
        var P = xc(d, Y, x), B = mc(d, Y, P, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(P).forEach(function(H) {
          B[y(H)] = B[H], delete B[H];
        }), B;
      }), null;
    }, v = function(E) {
      var T = r(), N = T.cssVar;
      return [function(U) {
        return S && N ? /* @__PURE__ */ Pe.createElement(Pe.Fragment, null, /* @__PURE__ */ Pe.createElement(_, {
          rootCls: E,
          cssVar: N,
          component: d
        }), U) : U;
      }, N == null ? void 0 : N.key];
    };
    return v;
  }
  function u(d, x, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(d) ? d : [d, d], S = ae(p, 1), y = S[0], b = p.join("-"), _ = e.layer || {
      name: "antd"
    };
    return function(v) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, E = r(), T = E.theme, N = E.realToken, U = E.hashId, Q = E.token, Y = E.cssVar, P = o(), B = P.rootPrefixCls, H = P.iconPrefixCls, q = n(), Z = Y ? "css" : "js", $ = _m(function() {
        var fe = /* @__PURE__ */ new Set();
        return Y && Object.keys(m.unitless || {}).forEach(function(le) {
          fe.add(to(le, Y.prefix)), fe.add(to(le, pc(y, Y.prefix)));
        }), ym(Z, fe);
      }, [Z, y, Y == null ? void 0 : Y.prefix]), G = wm(Z), ne = G.max, re = G.min, K = {
        theme: T,
        token: Q,
        hashId: U,
        nonce: function() {
          return q.nonce;
        },
        clientOnly: m.clientOnly,
        layer: _,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && ns(M(M({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", B]
      }), function() {
        return i(Q, {
          prefix: {
            rootPrefixCls: B,
            iconPrefixCls: H
          },
          csp: q
        });
      });
      var ee = ns(M(M({}, K), {}, {
        path: [b, v, H]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var fe = Sm(Q), le = fe.token, de = fe.flush, pe = xc(y, N, g), I = ".".concat(v), X = mc(y, N, pe, {
          deprecatedTokens: m.deprecatedTokens
        });
        Y && pe && ye(pe) === "object" && Object.keys(pe).forEach(function(te) {
          pe[te] = "var(".concat(to(te, pc(y, Y.prefix)), ")");
        });
        var F = Jo(le, {
          componentCls: I,
          prefixCls: v,
          iconCls: ".".concat(H),
          antCls: ".".concat(B),
          calc: $,
          // @ts-ignore
          max: ne,
          // @ts-ignore
          min: re
        }, Y ? pe : X), D = x(F, {
          hashId: U,
          prefixCls: v,
          rootPrefixCls: B,
          iconPrefixCls: H
        });
        de(y, X);
        var R = typeof s == "function" ? s(F, v, A, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : R, D];
      });
      return [ee, U];
    };
  }
  function f(d, x, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(d, x, g, M({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), S = function(b) {
      var _ = b.prefixCls, v = b.rootCls, A = v === void 0 ? _ : v;
      return p(_, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Tm = "5.24.6";
function _i(e) {
  return e >= 0 && e <= 255;
}
function Fr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new ke(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new ke(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), d = Math.round((o - c * (1 - l)) / l);
    if (_i(u) && _i(f) && _i(d))
      return new ke({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new ke({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Rm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Mu(e) {
  const {
    override: t
  } = e, n = Rm(e, ["override"]), r = Object.assign({}, t);
  Object.keys(gr).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
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
    colorSplit: Fr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Fr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Fr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Fr(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new ke("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ke("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ke("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var yc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Du = {
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
}, km = {
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
}, Pm = {
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
}, Bu = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = yc(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Mu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = yc(l, ["theme"]);
    let d = f;
    u && (d = Bu(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = d;
  }), s;
};
function sa() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = Pe.useContext(Pu), i = `${Tm}-${t || ""}`, s = n || ku, [a, c, l] = u0(s, [gr, e], {
    salt: i,
    override: r,
    getComputedToken: Bu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Mu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Du,
      ignore: km,
      preserve: Pm
    }
  });
  return [s, l, t ? c : "", a, o];
}
const Fu = function(e) {
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
}, Im = () => ({
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
}), Nm = (e) => ({
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
}), jm = (e, t, n, r) => {
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
}, zu = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Im()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: aa
} = Om({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Jt(Qt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = sa();
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
    } = Jt(Qt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = Nm(e);
    return [r, {
      "&": r
    }, zu((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : ia)];
  },
  getCommonStyle: jm,
  getCompUnitless: () => Du
}), Lm = (e, t) => {
  const [n, r] = sa();
  return ns({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [zu(e)]);
}, Mm = Object.assign({}, w), {
  useId: bc
} = Mm, Dm = () => "", Bm = typeof bc > "u" ? Dm : bc;
function Fm(e, t, n) {
  var r, o;
  const i = $n("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, gs), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : gs.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = Bm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Hl(() => {
    var l, u;
    if (!e)
      return t;
    const f = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((g) => {
      f[g] = Object.assign(Object.assign({}, f[g]), e.components[g]);
    });
    const d = `css-var-${c.replace(/:/g, "")}`, x = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: x
    });
  }, [s, a], (l, u) => l.some((f, d) => {
    const x = u[d];
    return !Mp(f, x, !0);
  }));
}
var zm = ["children"], Vu = /* @__PURE__ */ w.createContext({});
function Vm(e) {
  var t = e.children, n = pr(e, zm);
  return /* @__PURE__ */ w.createElement(Vu.Provider, {
    value: n
  }, t);
}
var Hm = /* @__PURE__ */ function(e) {
  wr(n, e);
  var t = Wo(n);
  function n() {
    return yt(this, n), t.apply(this, arguments);
  }
  return bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function Um(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = ae(t, 2), r = n[1], o = w.useRef(e), i = ys(function() {
    return o.current;
  }), s = ys(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Yt = "none", zr = "appear", Vr = "enter", Hr = "leave", Sc = "none", pt = "prepare", Rn = "start", kn = "active", ca = "end", Hu = "prepared";
function wc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function qm(e, t) {
  var n = {
    animationend: wc("Animation", "AnimationEnd"),
    transitionend: wc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Wm = qm(Ut(), typeof window < "u" ? window : {}), Uu = {};
if (Ut()) {
  var Xm = document.createElement("div");
  Uu = Xm.style;
}
var Ur = {};
function qu(e) {
  if (Ur[e])
    return Ur[e];
  var t = Wm[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Uu)
        return Ur[e] = t[i], Ur[e];
    }
  return "";
}
var Wu = qu("animationend"), Xu = qu("transitionend"), Yu = !!(Wu && Xu), Ec = Wu || "animationend", Cc = Xu || "transitionend";
function _c(e, t) {
  if (!e) return null;
  if (ye(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Ym = function(e) {
  var t = Be();
  function n(o) {
    o && (o.removeEventListener(Cc, e), o.removeEventListener(Ec, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Cc, e), o.addEventListener(Ec, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var $u = Ut() ? Jf : Ge;
const $m = function() {
  var e = w.useRef(null);
  function t() {
    vo.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = vo(function() {
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
var Km = [pt, Rn, kn, ca], Gm = [pt, Hu], Ku = !1, Zm = !0;
function Gu(e) {
  return e === kn || e === ca;
}
const Jm = function(e, t, n) {
  var r = bs(Sc), o = ae(r, 2), i = o[0], s = o[1], a = $m(), c = ae(a, 2), l = c[0], u = c[1];
  function f() {
    s(pt, !0);
  }
  var d = t ? Gm : Km;
  return $u(function() {
    if (i !== Sc && i !== ca) {
      var x = d.indexOf(i), g = d[x + 1], m = n(i);
      m === Ku ? s(g, !0) : g && l(function(p) {
        function S() {
          p.isCanceled() || s(g, !0);
        }
        m === !0 ? S() : Promise.resolve(m).then(S);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function Qm(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, x = r.onEnterPrepare, g = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, S = r.onLeaveStart, y = r.onAppearActive, b = r.onEnterActive, _ = r.onLeaveActive, v = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, T = r.onVisibleChanged, N = bs(), U = ae(N, 2), Q = U[0], Y = U[1], P = Um(Yt), B = ae(P, 2), H = B[0], q = B[1], Z = bs(null), $ = ae(Z, 2), G = $[0], ne = $[1], re = H(), K = Be(!1), ee = Be(null);
  function fe() {
    return n();
  }
  var le = Be(!1);
  function de() {
    q(Yt), ne(null, !0);
  }
  var pe = ys(function(Re) {
    var be = H();
    if (be !== Yt) {
      var He = fe();
      if (!(Re && !Re.deadline && Re.target !== He)) {
        var dt = le.current, it;
        be === zr && dt ? it = v == null ? void 0 : v(He, Re) : be === Vr && dt ? it = A == null ? void 0 : A(He, Re) : be === Hr && dt && (it = E == null ? void 0 : E(He, Re)), dt && it !== !1 && de();
      }
    }
  }), I = Ym(pe), X = ae(I, 1), F = X[0], D = function(be) {
    switch (be) {
      case zr:
        return V(V(V({}, pt, d), Rn, m), kn, y);
      case Vr:
        return V(V(V({}, pt, x), Rn, p), kn, b);
      case Hr:
        return V(V(V({}, pt, g), Rn, S), kn, _);
      default:
        return {};
    }
  }, R = w.useMemo(function() {
    return D(re);
  }, [re]), te = Jm(re, !e, function(Re) {
    if (Re === pt) {
      var be = R[pt];
      return be ? be(fe()) : Ku;
    }
    if (we in R) {
      var He;
      ne(((He = R[we]) === null || He === void 0 ? void 0 : He.call(R, fe(), null)) || null);
    }
    return we === kn && re !== Yt && (F(fe()), u > 0 && (clearTimeout(ee.current), ee.current = setTimeout(function() {
      pe({
        deadline: !0
      });
    }, u))), we === Hu && de(), Zm;
  }), j = ae(te, 2), Te = j[0], we = j[1], ot = Gu(we);
  le.current = ot;
  var wt = Be(null);
  $u(function() {
    if (!(K.current && wt.current === t)) {
      Y(t);
      var Re = K.current;
      K.current = !0;
      var be;
      !Re && t && a && (be = zr), Re && t && i && (be = Vr), (Re && !t && l || !Re && f && !t && l) && (be = Hr);
      var He = D(be);
      be && (e || He[pt]) ? (q(be), Te()) : q(Yt), wt.current = t;
    }
  }, [t]), Ge(function() {
    // Cancel appear
    (re === zr && !a || // Cancel enter
    re === Vr && !i || // Cancel leave
    re === Hr && !l) && q(Yt);
  }, [a, i, l]), Ge(function() {
    return function() {
      K.current = !1, clearTimeout(ee.current);
    };
  }, []);
  var et = w.useRef(!1);
  Ge(function() {
    Q && (et.current = !0), Q !== void 0 && re === Yt && ((et.current || Q) && (T == null || T(Q)), et.current = !0);
  }, [Q, re]);
  var Et = G;
  return R[pt] && we === Rn && (Et = M({
    transition: "none"
  }, Et)), [re, we, Et, Q ?? t];
}
function eg(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, d = o.motionName, x = o.leavedClassName, g = o.eventProps, m = w.useContext(Vu), p = m.motion, S = n(o, p), y = Be(), b = Be();
    function _() {
      try {
        return y.current instanceof HTMLElement ? y.current : bp(b.current);
      } catch {
        return null;
      }
    }
    var v = Qm(S, a, _, o), A = ae(v, 4), E = A[0], T = A[1], N = A[2], U = A[3], Q = w.useRef(U);
    U && (Q.current = !0);
    var Y = w.useCallback(function($) {
      y.current = $, Ul(i, $);
    }, [i]), P, B = M(M({}, g), {}, {
      visible: a
    });
    if (!f)
      P = null;
    else if (E === Yt)
      U ? P = f(M({}, B), Y) : !l && Q.current && x ? P = f(M(M({}, B), {}, {
        className: x
      }), Y) : u || !l && !x ? P = f(M(M({}, B), {}, {
        style: {
          display: "none"
        }
      }), Y) : P = null;
    else {
      var H;
      T === pt ? H = "prepare" : Gu(T) ? H = "active" : T === Rn && (H = "start");
      var q = _c(d, "".concat(E, "-").concat(H));
      P = f(M(M({}, B), {}, {
        className: Xe(_c(d, E), V(V({}, q, q && H), d, typeof d == "string")),
        style: N
      }), Y);
    }
    if (/* @__PURE__ */ w.isValidElement(P) && Ap(P)) {
      var Z = Op(P);
      Z || (P = /* @__PURE__ */ w.cloneElement(P, {
        ref: Y
      }));
    }
    return /* @__PURE__ */ w.createElement(Hm, {
      ref: b
    }, P);
  });
  return r.displayName = "CSSMotion", r;
}
const Zu = eg(Yu);
var ws = "add", Es = "keep", Cs = "remove", Ai = "removed";
function tg(e) {
  var t;
  return e && ye(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function _s() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(tg);
}
function ng() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = _s(e), s = _s(t);
  i.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = s[f];
      if (d.key === l.key) {
        r < f && (n = n.concat(s.slice(r, f).map(function(x) {
          return M(M({}, x), {}, {
            status: ws
          });
        })), r = f), n.push(M(M({}, d), {}, {
          status: Es
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(M(M({}, l), {}, {
      status: Cs
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return M(M({}, l), {}, {
      status: ws
    });
  })));
  var a = {};
  n.forEach(function(l) {
    var u = l.key;
    a[u] = (a[u] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== l || d !== Cs;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Es);
    });
  }), n;
}
var rg = ["component", "children", "onVisibleChanged", "onAllRemoved"], og = ["status"], ig = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function sg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zu, n = /* @__PURE__ */ function(r) {
    wr(i, r);
    var o = Wo(i);
    function i() {
      var s;
      yt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), V(gn(s), "state", {
        keyEntities: []
      }), V(gn(s), "removeKey", function(u) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(x) {
            return x.key !== u ? x : M(M({}, x), {}, {
              status: Ai
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(x) {
            var g = x.status;
            return g !== Ai;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return bt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var x = pr(l, rg), g = u || w.Fragment, m = {};
        return ig.forEach(function(p) {
          m[p] = x[p], delete x[p];
        }), delete x.keys, /* @__PURE__ */ w.createElement(g, x, c.map(function(p, S) {
          var y = p.status, b = pr(p, og), _ = y === ws || y === Es;
          return /* @__PURE__ */ w.createElement(t, Nt({}, m, {
            key: b.key,
            visible: _,
            eventProps: b,
            onVisibleChanged: function(A) {
              d == null || d(A, {
                key: b.key
              }), A || a.removeKey(b.key);
            }
          }), function(v, A) {
            return f(M(M({}, v), {}, {
              index: S
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = _s(l), d = ng(u, f);
        return {
          keyEntities: d.filter(function(x) {
            var g = u.find(function(m) {
              var p = m.key;
              return x.key === p;
            });
            return !(g && g.status === Ai && x.status === Cs);
          })
        };
      }
    }]), i;
  }(w.Component);
  return V(n, "defaultProps", {
    component: "div"
  }), n;
}
sg(Yu);
function ag(e) {
  const {
    children: t
  } = e, [, n] = sa(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(Vm, {
    motion: r
  }, t) : t;
}
const Ju = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return $n("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Ju.displayName = "PropWarning");
const cg = process.env.NODE_ENV !== "production" ? Ju : () => null;
var lg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let As = !1;
process.env.NODE_ENV;
const ug = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Qu;
function fg() {
  return Qu || xs;
}
function dg(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const hg = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (Qu = t), r && dg(r) && (process.env.NODE_ENV !== "production" && Go(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), dm(fg(), r));
}, pg = (e) => {
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
    space: u,
    splitter: f,
    virtual: d,
    dropdownMatchSelectWidth: x,
    popupMatchSelectWidth: g,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: S,
    iconPrefixCls: y,
    theme: b,
    componentDisabled: _,
    segmented: v,
    statistic: A,
    spin: E,
    calendar: T,
    carousel: N,
    cascader: U,
    collapse: Q,
    typography: Y,
    checkbox: P,
    descriptions: B,
    divider: H,
    drawer: q,
    skeleton: Z,
    steps: $,
    image: G,
    layout: ne,
    list: re,
    mentions: K,
    modal: ee,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: I,
    pagination: X,
    input: F,
    textArea: D,
    empty: R,
    badge: te,
    radio: j,
    rate: Te,
    switch: we,
    transfer: ot,
    avatar: wt,
    message: et,
    tag: Et,
    table: Re,
    card: be,
    tabs: He,
    timeline: dt,
    timePicker: it,
    upload: nn,
    notification: rn,
    tree: En,
    colorPicker: on,
    datePicker: oe,
    rangePicker: L,
    flex: Le,
    wave: Me,
    dropdown: tt,
    warning: Fe,
    tour: st,
    tooltip: jt,
    popover: Ct,
    popconfirm: Cn,
    floatButtonGroup: _t,
    variant: Lt,
    inputNumber: Mt,
    treeSelect: qe
  } = e, Ye = w.useCallback((Ce, h) => {
    const {
      prefixCls: O
    } = e;
    if (h)
      return h;
    const k = O || S.getPrefixCls("");
    return Ce ? `${k}-${Ce}` : k;
  }, [S.getPrefixCls, e.prefixCls]), at = y || S.iconPrefixCls || ia, At = n || S.csp;
  Lm(at, At);
  const sn = Fm(b, S.theme, {
    prefixCls: Ye("")
  });
  process.env.NODE_ENV !== "production" && (As = As || !!sn);
  const _n = {
    csp: At,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: g ?? x,
    popupOverflow: m,
    getPrefixCls: Ye,
    iconPrefixCls: at,
    theme: sn,
    segmented: v,
    statistic: A,
    spin: E,
    calendar: T,
    carousel: N,
    cascader: U,
    collapse: Q,
    typography: Y,
    checkbox: P,
    descriptions: B,
    divider: H,
    drawer: q,
    skeleton: Z,
    steps: $,
    image: G,
    input: F,
    textArea: D,
    layout: ne,
    list: re,
    mentions: K,
    modal: ee,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: I,
    pagination: X,
    empty: R,
    badge: te,
    radio: j,
    rate: Te,
    switch: we,
    transfer: ot,
    avatar: wt,
    message: et,
    tag: Et,
    table: Re,
    card: be,
    tabs: He,
    timeline: dt,
    timePicker: it,
    upload: nn,
    notification: rn,
    tree: En,
    colorPicker: on,
    datePicker: oe,
    rangePicker: L,
    flex: Le,
    wave: Me,
    dropdown: tt,
    warning: Fe,
    tour: st,
    tooltip: jt,
    popover: Ct,
    popconfirm: Cn,
    floatButtonGroup: _t,
    variant: Lt,
    inputNumber: Mt,
    treeSelect: qe
  };
  process.env.NODE_ENV !== "production" && $n("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const qt = Object.assign({}, S);
  Object.keys(_n).forEach((Ce) => {
    _n[Ce] !== void 0 && (qt[Ce] = _n[Ce]);
  }), ug.forEach((Ce) => {
    const h = e[Ce];
    h && (qt[Ce] = h);
  }), typeof r < "u" && (qt.button = Object.assign({
    autoInsertSpace: r
  }, qt.button));
  const Wt = Hl(() => qt, qt, (Ce, h) => {
    const O = Object.keys(Ce), k = Object.keys(h);
    return O.length !== k.length || O.some((W) => Ce[W] !== h[W]);
  }), {
    layer: Qn
  } = w.useContext(Er), Ar = w.useMemo(() => ({
    prefixCls: at,
    csp: At,
    layer: Qn ? "antd" : void 0
  }), [at, At, Qn]);
  let De = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(cg, {
    dropdownMatchSelectWidth: x
  }), t);
  const Or = w.useMemo(() => {
    var Ce, h, O, k;
    return q0(((Ce = Zo.Form) === null || Ce === void 0 ? void 0 : Ce.defaultValidateMessages) || {}, ((O = (h = Wt.locale) === null || h === void 0 ? void 0 : h.Form) === null || O === void 0 ? void 0 : O.defaultValidateMessages) || {}, ((k = Wt.form) === null || k === void 0 ? void 0 : k.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Wt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Or).length > 0 && (De = /* @__PURE__ */ w.createElement(X0.Provider, {
    value: Or
  }, De)), a && (De = /* @__PURE__ */ w.createElement(Au, {
    locale: a,
    _ANT_MARK__: _u
  }, De)), De = /* @__PURE__ */ w.createElement(ra.Provider, {
    value: Ar
  }, De), c && (De = /* @__PURE__ */ w.createElement(pm, {
    size: c
  }, De)), De = /* @__PURE__ */ w.createElement(ag, null, De);
  const si = w.useMemo(() => {
    const Ce = sn || {}, {
      algorithm: h,
      token: O,
      components: k,
      cssVar: W
    } = Ce, he = lg(Ce, ["algorithm", "token", "components", "cssVar"]), me = h && (!Array.isArray(h) || h.length > 0) ? Zi(h) : ku, ce = {};
    Object.entries(k || {}).forEach((Ue) => {
      let [Ee, _e] = Ue;
      const Ae = Object.assign({}, _e);
      "algorithm" in Ae && (Ae.algorithm === !0 ? Ae.theme = me : (Array.isArray(Ae.algorithm) || typeof Ae.algorithm == "function") && (Ae.theme = Zi(Ae.algorithm)), delete Ae.algorithm), ce[Ee] = Ae;
    });
    const se = Object.assign(Object.assign({}, gr), O);
    return Object.assign(Object.assign({}, he), {
      theme: me,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: W
    });
  }, [sn]);
  return b && (De = /* @__PURE__ */ w.createElement(Pu.Provider, {
    value: si
  }, De)), Wt.warning && (De = /* @__PURE__ */ w.createElement(Eu.Provider, {
    value: Wt.warning
  }, De)), _ !== void 0 && (De = /* @__PURE__ */ w.createElement(hm, {
    disabled: _
  }, De)), /* @__PURE__ */ w.createElement(Qt.Provider, {
    value: Wt
  }, De);
}, Kn = (e) => {
  const t = w.useContext(Qt), n = w.useContext(Cu);
  return /* @__PURE__ */ w.createElement(pg, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
Kn.ConfigContext = Qt;
Kn.SizeContext = vr;
Kn.config = hg;
Kn.useConfig = mm;
Object.defineProperty(Kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Go(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), vr)
});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
var mg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function ef(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function gg(e) {
  return ef(e) instanceof ShadowRoot;
}
function xg(e) {
  return gg(e) ? ef(e) : null;
}
function vg(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function yg(e, t) {
  en(e, "[@ant-design/icons] ".concat(t));
}
function Ac(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function Oc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[vg(n)] = r;
    }
    return t;
  }, {});
}
function Os(e, t, n) {
  return n ? /* @__PURE__ */ Pe.createElement(e.tag, M(M({
    key: t
  }, Oc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Os(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Pe.createElement(e.tag, M({
    key: t
  }, Oc(e.attrs)), (e.children || []).map(function(r, o) {
    return Os(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function tf(e) {
  return xr(e)[0];
}
function nf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var bg = `
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
`, Sg = function(t) {
  var n = Jt(ra), r = n.csp, o = n.prefixCls, i = n.layer, s = bg;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ge(function() {
    var a = t.current, c = xg(a);
    xn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, wg = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], fr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Eg(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  fr.primaryColor = t, fr.secondaryColor = n || tf(t), fr.calculated = !!n;
}
function Cg() {
  return M({}, fr);
}
var Gn = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = pr(t, wg), l = w.useRef(), u = fr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || tf(s)
  }), Sg(l), yg(Ac(n), "icon should be icon definiton, but got ".concat(n)), !Ac(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = M(M({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), Os(f.icon, "svg-".concat(f.name), M(M({
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
Gn.displayName = "IconReact";
Gn.getTwoToneColors = Cg;
Gn.setTwoToneColors = Eg;
function rf(e) {
  var t = nf(e), n = ae(t, 2), r = n[0], o = n[1];
  return Gn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function _g() {
  var e = Gn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ag = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
rf(So.primary);
var tn = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = pr(e, Ag), u = w.useContext(ra), f = u.prefixCls, d = f === void 0 ? "anticon" : f, x = u.rootClassName, g = Xe(x, d, V(V({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), n), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = nf(c), y = ae(S, 2), b = y[0], _ = y[1];
  return /* @__PURE__ */ w.createElement("span", Nt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: m,
    onClick: a,
    className: g
  }), /* @__PURE__ */ w.createElement(Gn, {
    icon: r,
    primaryColor: b,
    secondaryColor: _,
    style: p
  }));
});
tn.displayName = "AntdIcon";
tn.getTwoToneColor = _g;
tn.setTwoToneColor = rf;
var Og = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Nt({}, t, {
    ref: n,
    icon: mg
  }));
}, of = /* @__PURE__ */ w.forwardRef(Og);
process.env.NODE_ENV !== "production" && (of.displayName = "CheckCircleFilled");
var Tg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Rg = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Nt({}, t, {
    ref: n,
    icon: Tg
  }));
}, sf = /* @__PURE__ */ w.forwardRef(Rg);
process.env.NODE_ENV !== "production" && (sf.displayName = "CloseCircleFilled");
var kg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Pg = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Nt({}, t, {
    ref: n,
    icon: kg
  }));
}, af = /* @__PURE__ */ w.forwardRef(Pg);
process.env.NODE_ENV !== "production" && (af.displayName = "CloseOutlined");
var Ig = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Ng = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Nt({}, t, {
    ref: n,
    icon: Ig
  }));
}, cf = /* @__PURE__ */ w.forwardRef(Ng);
process.env.NODE_ENV !== "production" && (cf.displayName = "ExclamationCircleFilled");
var jg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Lg = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Nt({}, t, {
    ref: n,
    icon: jg
  }));
}, lf = /* @__PURE__ */ w.forwardRef(Lg);
process.env.NODE_ENV !== "production" && (lf.displayName = "InfoCircleFilled");
var Mg = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Dg = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Bg = "".concat(Mg, " ").concat(Dg).split(/[\s\n]+/), Fg = "aria-", zg = "data-";
function Tc(e, t) {
  return e.indexOf(t) === 0;
}
function Vg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = M({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Tc(o, Fg)) || // Data
    n.data && Tc(o, zg) || // Attr
    n.attr && Bg.includes(o)) && (r[o] = e[o]);
  }), r;
}
const uf = (e, t, n) => /* @__PURE__ */ Pe.isValidElement(e) ? /* @__PURE__ */ Pe.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Hg(e, t) {
  return uf(e, e, t);
}
const qr = (e, t, n, r, o) => ({
  background: e,
  border: `${yo(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), Ug = (e) => {
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
    withDescriptionIconSize: u,
    colorText: f,
    colorTextHeading: d,
    withDescriptionPadding: x,
    defaultPadding: g
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Fu(e)), {
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
        color: d
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
      padding: x,
      [`${t}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: r,
        color: d,
        fontSize: s
      },
      [`${t}-description`]: {
        display: "block",
        color: f
      }
    },
    [`${t}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, qg = (e) => {
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
    colorErrorBg: u,
    colorInfo: f,
    colorInfoBorder: d,
    colorInfoBg: x
  } = e;
  return {
    [t]: {
      "&-success": qr(o, r, n, e, t),
      "&-info": qr(x, d, f, e, t),
      "&-warning": qr(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, qr(u, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Wg = (e) => {
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
        lineHeight: yo(i),
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
}, Xg = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Yg = aa("Alert", (e) => [Ug(e), qg(e), Wg(e)], Xg);
var Rc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const $g = {
  success: of,
  info: lf,
  error: sf,
  warning: cf
}, Kg = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = $g[r] || null;
  return t ? uf(t, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: Xe(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, Gg = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(af, null) : r;
  return t ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, la = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    description: n,
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
    showIcon: x,
    closable: g,
    closeText: m,
    closeIcon: p,
    action: S,
    id: y
  } = e, b = Rc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [_, v] = w.useState(!1);
  process.env.NODE_ENV !== "production" && $n("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: E,
    direction: T,
    closable: N,
    closeIcon: U,
    className: Q,
    style: Y
  } = Iu("alert"), P = E("alert", r), [B, H, q] = Yg(P), Z = (le) => {
    var de;
    v(!0), (de = e.onClose) === null || de === void 0 || de.call(e, le);
  }, $ = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), G = w.useMemo(() => typeof g == "object" && g.closeIcon || m ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!N, [m, p, g, N]), ne = i && x === void 0 ? !0 : x, re = Xe(P, `${P}-${$}`, {
    [`${P}-with-description`]: !!n,
    [`${P}-no-icon`]: !ne,
    [`${P}-banner`]: !!i,
    [`${P}-rtl`]: T === "rtl"
  }, Q, s, a, q, H), K = Vg(b, {
    aria: !0,
    data: !0
  }), ee = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : m || (p !== void 0 ? p : typeof N == "object" && N.closeIcon ? N.closeIcon : U), [p, g, m, U]), fe = w.useMemo(() => {
    const le = g ?? N;
    if (typeof le == "object") {
      const {
        closeIcon: de
      } = le;
      return Rc(le, ["closeIcon"]);
    }
    return {};
  }, [g, N]);
  return B(/* @__PURE__ */ w.createElement(Zu, {
    visible: !_,
    motionName: `${P}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (le) => ({
      maxHeight: le.offsetHeight
    }),
    onLeaveEnd: d
  }, (le, de) => {
    let {
      className: pe,
      style: I
    } = le;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: y,
      ref: _p(A, de),
      "data-show": !_,
      className: Xe(re, pe),
      style: Object.assign(Object.assign(Object.assign({}, Y), c), I),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, K), ne ? /* @__PURE__ */ w.createElement(Kg, {
      description: n,
      icon: e.icon,
      prefixCls: P,
      type: $
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${P}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${P}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${P}-description`
    }, n) : null), S ? /* @__PURE__ */ w.createElement("div", {
      className: `${P}-action`
    }, S) : null, /* @__PURE__ */ w.createElement(Gg, {
      isClosable: G,
      prefixCls: P,
      closeIcon: ee,
      handleClose: Z,
      ariaProps: fe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (la.displayName = "Alert");
function Zg(e, t, n) {
  return t = Fn(t), Wl(e, Gs() ? Reflect.construct(t, n || [], Fn(e).constructor) : t.apply(e, n));
}
let Jg = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return yt(this, t), n = Zg(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return wr(t, e), bt(t, [{
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
      return a ? /* @__PURE__ */ w.createElement(la, {
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
const ff = la;
ff.ErrorBoundary = Jg;
function Qg(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function ex(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, d = 0;
  function x() {
    u && clearTimeout(u);
  }
  function g(p) {
    var S = p || {}, y = S.upcomingOnly, b = y === void 0 ? !1 : y;
    x(), f = !b;
  }
  function m() {
    for (var p = arguments.length, S = new Array(p), y = 0; y < p; y++)
      S[y] = arguments[y];
    var b = this, _ = Date.now() - d;
    if (f)
      return;
    function v() {
      d = Date.now(), t.apply(b, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && v(), x(), l === void 0 && _ > e ? a ? (d = Date.now(), i || (u = setTimeout(l ? A : v, e))) : v() : i !== !0 && (u = setTimeout(l ? A : v, l === void 0 ? e - _ : e));
  }
  return m.cancel = g, m;
}
function tx(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return ex(e, t, {
    debounceMode: i !== !1
  });
}
function kc(e) {
  return ["small", "middle", "large"].includes(e);
}
const df = ["wrap", "nowrap", "wrap-reverse"], hf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], pf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], nx = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && df.includes(n)
  };
}, rx = (e, t) => {
  const n = {};
  return pf.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, ox = (e, t) => {
  const n = {};
  return hf.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function ix(e, t) {
  return Xe(Object.assign(Object.assign(Object.assign({}, nx(e, t)), rx(e, t)), ox(e, t)));
}
const sx = (e) => {
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
}, ax = (e) => {
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
}, cx = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return df.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, lx = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return pf.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, ux = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return hf.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, fx = () => ({}), dx = aa("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = Jo(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [sx(o), ax(o), cx(o), lx(o), ux(o)];
}, fx, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var hx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const mf = /* @__PURE__ */ Pe.forwardRef((e, t) => {
  const {
    prefixCls: n,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = e, f = hx(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: d,
    direction: x,
    getPrefixCls: g
  } = Pe.useContext(Qt), m = g("flex", n), [p, S, y] = dx(m), b = l ?? (d == null ? void 0 : d.vertical), _ = Xe(o, r, d == null ? void 0 : d.className, m, S, y, ix(m, e), {
    [`${m}-rtl`]: x === "rtl",
    [`${m}-gap-${a}`]: kc(a),
    [`${m}-vertical`]: b
  }), v = Object.assign(Object.assign({}, d == null ? void 0 : d.style), i);
  return s && (v.flex = s), a && !kc(a) && (v.gap = a), p(/* @__PURE__ */ Pe.createElement(u, Object.assign({
    ref: t,
    className: _,
    style: v
  }, Qg(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (mf.displayName = "Flex");
const wo = 100, gf = wo / 5, xf = wo / 2 - gf / 2, Oi = xf * 2 * Math.PI, Pc = 50, Ic = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Xe(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: xf,
    cx: Pc,
    cy: Pc,
    strokeWidth: gf,
    style: n
  });
}, px = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  ou(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Oi / 4}`,
    strokeDasharray: `${Oi * c / 100} ${Oi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: Xe(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${wo} ${wo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(Ic, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(Ic, {
    dotClassName: r,
    style: l
  })));
};
function mx(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: Xe(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: Xe(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(px, {
    prefixCls: t,
    percent: n
  }));
}
function gx(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? Hg(n, {
    className: Xe(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(mx, {
    prefixCls: t,
    percent: r
  });
}
const xx = new bu("antSpinMove", {
  to: {
    opacity: 1
  }
}), vx = new bu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), yx = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Fu(e)), {
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
          animationName: xx,
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
          animationName: vx,
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
}, bx = (e) => {
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
}, Sx = aa("Spin", (e) => {
  const t = Jo(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [yx(t)];
}, bx), wx = 200, Nc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Ex(e, t) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = t === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Nc.length; c += 1) {
        const [l, u] = Nc[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, wx)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var Cx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let vf;
function _x(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const dr = (e) => {
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
    style: u,
    children: f,
    fullscreen: d = !1,
    indicator: x,
    percent: g
  } = e, m = Cx(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: S,
    className: y,
    style: b,
    indicator: _
  } = Iu("spin"), v = p("spin", n), [A, E, T] = Sx(v), [N, U] = w.useState(() => r && !_x(r, o)), Q = Ex(N, g);
  w.useEffect(() => {
    if (r) {
      const $ = tx(o, () => {
        U(!0);
      });
      return $(), () => {
        var G;
        (G = $ == null ? void 0 : $.cancel) === null || G === void 0 || G.call($);
      };
    }
    U(!1);
  }, [o, r]);
  const Y = w.useMemo(() => typeof f < "u" && !d, [f, d]);
  if (process.env.NODE_ENV !== "production") {
    const $ = $n("Spin");
    process.env.NODE_ENV !== "production" && $(!c || Y || d, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const P = Xe(v, y, {
    [`${v}-sm`]: a === "small",
    [`${v}-lg`]: a === "large",
    [`${v}-spinning`]: N,
    [`${v}-show-text`]: !!c,
    [`${v}-rtl`]: S === "rtl"
  }, i, !d && s, E, T), B = Xe(`${v}-container`, {
    [`${v}-blur`]: N
  }), H = (t = x ?? _) !== null && t !== void 0 ? t : vf, q = Object.assign(Object.assign({}, b), u), Z = /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    style: q,
    className: P,
    "aria-live": "polite",
    "aria-busy": N
  }), /* @__PURE__ */ w.createElement(gx, {
    prefixCls: v,
    indicator: H,
    percent: Q
  }), c && (Y || d) ? /* @__PURE__ */ w.createElement("div", {
    className: `${v}-text`
  }, c) : null);
  return A(Y ? /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    className: Xe(`${v}-nested-loading`, l, E, T)
  }), N && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ w.createElement("div", {
    className: B,
    key: "container"
  }, f)) : d ? /* @__PURE__ */ w.createElement("div", {
    className: Xe(`${v}-fullscreen`, {
      [`${v}-fullscreen-show`]: N
    }, s, E, T)
  }, Z) : Z);
};
dr.setDefaultIndicator = (e) => {
  vf = e;
};
process.env.NODE_ENV !== "production" && (dr.displayName = "Spin");
function yf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ax } = Object.prototype, { getPrototypeOf: ua } = Object, { iterator: Qo, toStringTag: bf } = Symbol, ei = /* @__PURE__ */ ((e) => (t) => {
  const n = Ax.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), St = (e) => (e = e.toLowerCase(), (t) => ei(t) === e), ti = (e) => (t) => typeof t === e, { isArray: Zn } = Array, yr = ti("undefined");
function Ox(e) {
  return e !== null && !yr(e) && e.constructor !== null && !yr(e.constructor) && Je(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Sf = St("ArrayBuffer");
function Tx(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Sf(e.buffer), t;
}
const Rx = ti("string"), Je = ti("function"), wf = ti("number"), ni = (e) => e !== null && typeof e == "object", kx = (e) => e === !0 || e === !1, ao = (e) => {
  if (ei(e) !== "object")
    return !1;
  const t = ua(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bf in e) && !(Qo in e);
}, Px = St("Date"), Ix = St("File"), Nx = St("Blob"), jx = St("FileList"), Lx = (e) => ni(e) && Je(e.pipe), Mx = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Je(e.append) && ((t = ei(e)) === "formdata" || // detect form-data instance
  t === "object" && Je(e.toString) && e.toString() === "[object FormData]"));
}, Dx = St("URLSearchParams"), [Bx, Fx, zx, Vx] = ["ReadableStream", "Request", "Response", "Headers"].map(St), Hx = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Zn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function Ef(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cf = (e) => !yr(e) && e !== dn;
function Ts() {
  const { caseless: e } = Cf(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Ef(t, o) || o;
    ao(t[i]) && ao(r) ? t[i] = Ts(t[i], r) : ao(r) ? t[i] = Ts({}, r) : Zn(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cr(arguments[r], n);
  return t;
}
const Ux = (e, t, n, { allOwnKeys: r } = {}) => (Cr(t, (o, i) => {
  n && Je(o) ? e[i] = yf(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), qx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wx = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xx = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && ua(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Yx = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $x = (e) => {
  if (!e) return null;
  if (Zn(e)) return e;
  let t = e.length;
  if (!wf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Kx = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ua(Uint8Array)), Gx = (e, t) => {
  const r = (e && e[Qo]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Zx = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Jx = St("HTMLFormElement"), Qx = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), jc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ev = St("RegExp"), _f = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Cr(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, tv = (e) => {
  _f(e, (t, n) => {
    if (Je(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Je(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, nv = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Zn(e) ? r(e) : r(String(e).split(t)), n;
}, rv = () => {
}, ov = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function iv(e) {
  return !!(e && Je(e.append) && e[bf] === "FormData" && e[Qo]);
}
const sv = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ni(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Zn(r) ? [] : {};
        return Cr(r, (s, a) => {
          const c = n(s, o + 1);
          !yr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, av = St("AsyncFunction"), cv = (e) => e && (ni(e) || Je(e)) && Je(e.then) && Je(e.catch), Af = ((e, t) => e ? setImmediate : t ? ((n, r) => (dn.addEventListener("message", ({ source: o, data: i }) => {
  o === dn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), dn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Je(dn.postMessage)
), lv = typeof queueMicrotask < "u" ? queueMicrotask.bind(dn) : typeof process < "u" && process.nextTick || Af, uv = (e) => e != null && Je(e[Qo]), C = {
  isArray: Zn,
  isArrayBuffer: Sf,
  isBuffer: Ox,
  isFormData: Mx,
  isArrayBufferView: Tx,
  isString: Rx,
  isNumber: wf,
  isBoolean: kx,
  isObject: ni,
  isPlainObject: ao,
  isReadableStream: Bx,
  isRequest: Fx,
  isResponse: zx,
  isHeaders: Vx,
  isUndefined: yr,
  isDate: Px,
  isFile: Ix,
  isBlob: Nx,
  isRegExp: ev,
  isFunction: Je,
  isStream: Lx,
  isURLSearchParams: Dx,
  isTypedArray: Kx,
  isFileList: jx,
  forEach: Cr,
  merge: Ts,
  extend: Ux,
  trim: Hx,
  stripBOM: qx,
  inherits: Wx,
  toFlatObject: Xx,
  kindOf: ei,
  kindOfTest: St,
  endsWith: Yx,
  toArray: $x,
  forEachEntry: Gx,
  matchAll: Zx,
  isHTMLForm: Jx,
  hasOwnProperty: jc,
  hasOwnProp: jc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _f,
  freezeMethods: tv,
  toObjectSet: nv,
  toCamelCase: Qx,
  noop: rv,
  toFiniteNumber: ov,
  findKey: Ef,
  global: dn,
  isContextDefined: Cf,
  isSpecCompliantForm: iv,
  toJSONObject: sv,
  isAsyncFn: av,
  isThenable: cv,
  setImmediate: Af,
  asap: lv,
  isIterable: uv
};
function J(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
C.inherits(J, Error, {
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
const Of = J.prototype, Tf = {};
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
  Tf[e] = { value: e };
});
Object.defineProperties(J, Tf);
Object.defineProperty(Of, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, o, i) => {
  const s = Object.create(Of);
  return C.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), J.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const fv = null;
function Rs(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Rf(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Lc(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Rf(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function dv(e) {
  return C.isArray(e) && !e.some(Rs);
}
const hv = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ri(e, t, n) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = C.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !C.isUndefined(p[m]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (C.isDate(g))
      return g.toISOString();
    if (!c && C.isBlob(g))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(g) || C.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, p) {
    let S = g;
    if (g && !p && typeof g == "object") {
      if (C.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (C.isArray(g) && dv(g) || (C.isFileList(g) || C.endsWith(m, "[]")) && (S = C.toArray(g)))
        return m = Rf(m), S.forEach(function(b, _) {
          !(C.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Lc([m], _, i) : s === null ? m : m + "[]",
            l(b)
          );
        }), !1;
    }
    return Rs(g) ? !0 : (t.append(Lc(p, m, i), l(g)), !1);
  }
  const f = [], d = Object.assign(hv, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Rs
  });
  function x(g, m) {
    if (!C.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), C.forEach(g, function(S, y) {
        (!(C.isUndefined(S) || S === null) && o.call(
          t,
          S,
          C.isString(y) ? y.trim() : y,
          m,
          d
        )) === !0 && x(S, m ? m.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), t;
}
function Mc(e) {
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
function fa(e, t) {
  this._pairs = [], e && ri(e, this, t);
}
const kf = fa.prototype;
kf.append = function(t, n) {
  this._pairs.push([t, n]);
};
kf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Mc);
  } : Mc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function pv(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Pf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || pv;
  C.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = C.isURLSearchParams(t) ? t.toString() : new fa(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Dc {
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
    C.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const If = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mv = typeof URLSearchParams < "u" ? URLSearchParams : fa, gv = typeof FormData < "u" ? FormData : null, xv = typeof Blob < "u" ? Blob : null, vv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mv,
    FormData: gv,
    Blob: xv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, da = typeof window < "u" && typeof document < "u", ks = typeof navigator == "object" && navigator || void 0, yv = da && (!ks || ["ReactNative", "NativeScript", "NS"].indexOf(ks.product) < 0), bv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sv = da && window.location.href || "http://localhost", wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: da,
  hasStandardBrowserEnv: yv,
  hasStandardBrowserWebWorkerEnv: bv,
  navigator: ks,
  origin: Sv
}, Symbol.toStringTag, { value: "Module" })), We = {
  ...wv,
  ...vv
};
function Ev(e, t) {
  return ri(e, new We.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return We.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Cv(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _v(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Nf(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && C.isArray(o) ? o.length : s, c ? (C.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !C.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && C.isArray(o[s]) && (o[s] = _v(o[s])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return C.forEachEntry(e, (r, o) => {
      t(Cv(r), o, n, 0);
    }), n;
  }
  return null;
}
function Av(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _r = {
  transitional: If,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = C.isObject(t);
    if (i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return o ? JSON.stringify(Nf(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t) || C.isReadableStream(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ev(t, this.formSerializer).toString();
      if ((a = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ri(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Av(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || _r.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (C.isResponse(t) || C.isReadableStream(t))
      return t;
    if (t && C.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? J.from(a, J.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: We.classes.FormData,
    Blob: We.classes.Blob
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _r.headers[e] = {};
});
const Ov = C.toObjectSet([
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
]), Tv = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Ov[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Bc = Symbol("internals");
function sr(e) {
  return e && String(e).trim().toLowerCase();
}
function co(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(co) : String(e);
}
function Rv(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const kv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ti(e, t, n, r, o) {
  if (C.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!C.isString(t)) {
    if (C.isString(r))
      return t.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(t);
  }
}
function Pv(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Iv(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let Qe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, c, l) {
      const u = sr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = C.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = co(a));
    }
    const s = (a, c) => C.forEach(a, (l, u) => i(l, u, c));
    if (C.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (C.isString(t) && (t = t.trim()) && !kv(t))
      s(Tv(t), n);
    else if (C.isObject(t) && C.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!C.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? C.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = sr(t), t) {
      const r = C.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Rv(o);
        if (C.isFunction(n))
          return n.call(this, o, r);
        if (C.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = sr(t), t) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ti(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = sr(s), s) {
        const a = C.findKey(r, s);
        a && (!n || Ti(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ti(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return C.forEach(this, (o, i) => {
      const s = C.findKey(r, i);
      if (s) {
        n[s] = co(o), delete n[i];
        return;
      }
      const a = t ? Pv(i) : String(i).trim();
      a !== i && delete n[i], n[a] = co(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && C.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Bc] = this[Bc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = sr(s);
      r[a] || (Iv(o, s), r[a] = !0);
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(Qe);
function Ri(e, t) {
  const n = this || _r, r = t || n, o = Qe.from(r.headers);
  let i = r.data;
  return C.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function jf(e) {
  return !!(e && e.__CANCEL__);
}
function Jn(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n), this.name = "CanceledError";
}
C.inherits(Jn, J, {
  __CANCEL__: !0
});
function Lf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new J(
    "Request failed with status code " + n.status,
    [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Nv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function jv(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let f = i, d = 0;
    for (; f !== o; )
      d += n[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const x = u && l - u;
    return x ? Math.round(d * 1e3 / x) : void 0;
  };
}
function Lv(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const s = (l, u = Date.now()) => {
    n = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - n;
    f >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const Eo = (e, t, n = 3) => {
  let r = 0;
  const o = jv(50, 250);
  return Lv((i) => {
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
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Fc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, zc = (e) => (...t) => C.asap(() => e(...t)), Mv = We.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, We.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(We.origin),
  We.navigator && /(msie|trident)/i.test(We.navigator.userAgent)
) : () => !0, Dv = We.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      C.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), C.isString(r) && s.push("path=" + r), C.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Bv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mf(e, t, n) {
  let r = !Bv(t);
  return e && (r || n == !1) ? Fv(e, t) : t;
}
const Vc = (e) => e instanceof Qe ? { ...e } : e;
function wn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f, d) {
    return C.isPlainObject(l) && C.isPlainObject(u) ? C.merge.call({ caseless: d }, l, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, d) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return r(void 0, l, f, d);
    } else return r(l, u, f, d);
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
  function a(l, u, f) {
    if (f in t)
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
    headers: (l, u, f) => o(Vc(l), Vc(u), f, !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || o, d = f(e[u], t[u], u);
    C.isUndefined(d) && f !== a || (n[u] = d);
  }), n;
}
const Df = (e) => {
  const t = wn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = Qe.from(s), t.url = Pf(Mf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (C.isFormData(n)) {
    if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (We.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(t)), r || r !== !1 && Mv(t.url))) {
    const l = o && i && Dv.read(i);
    l && s.set(o, l);
  }
  return t;
}, zv = typeof XMLHttpRequest < "u", Vv = zv && function(e) {
  return new Promise(function(n, r) {
    const o = Df(e);
    let i = o.data;
    const s = Qe.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, d, x, g;
    function m() {
      x && x(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function S() {
      if (!p)
        return;
      const b = Qe.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: b,
        config: e,
        request: p
      };
      Lf(function(E) {
        n(E), m();
      }, function(E) {
        r(E), m();
      }, v), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new J("Request aborted", J.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new J("Network Error", J.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || If;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), r(new J(
        _,
        v.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && C.forEach(s.toJSON(), function(_, v) {
      p.setRequestHeader(v, _);
    }), C.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([d, g] = Eo(l, !0), p.addEventListener("progress", d)), c && p.upload && ([f, x] = Eo(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", x)), (o.cancelToken || o.signal) && (u = (b) => {
      p && (r(!b || b.type ? new Jn(null, e, p) : b), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const y = Nv(o.url);
    if (y && We.protocols.indexOf(y) === -1) {
      r(new J("Unsupported protocol " + y + ":", J.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, Hv = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof J ? u : new Jn(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => C.asap(a), c;
  }
}, Uv = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, qv = async function* (e, t) {
  for await (const n of Wv(e))
    yield* Uv(n, t);
}, Wv = async function* (e) {
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
}, Hc = (e, t, n, r) => {
  const o = qv(e, t);
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
        if (n) {
          let d = i += f;
          n(d);
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
}, oi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Bf = oi && typeof ReadableStream == "function", Xv = oi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ff = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Yv = Bf && Ff(() => {
  let e = !1;
  const t = new Request(We.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Uc = 64 * 1024, Ps = Bf && Ff(() => C.isReadableStream(new Response("").body)), Co = {
  stream: Ps && ((e) => e.body)
};
oi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Co[t] && (Co[t] = C.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new J(`Response type '${t}' is not supported`, J.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const $v = async (e) => {
  if (e == null)
    return 0;
  if (C.isBlob(e))
    return e.size;
  if (C.isSpecCompliantForm(e))
    return (await new Request(We.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(e) || C.isArrayBuffer(e))
    return e.byteLength;
  if (C.isURLSearchParams(e) && (e = e + ""), C.isString(e))
    return (await Xv(e)).byteLength;
}, Kv = async (e, t) => {
  const n = C.toFiniteNumber(e.getContentLength());
  return n ?? $v(t);
}, Gv = oi && (async (e) => {
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
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: d
  } = Df(e);
  l = l ? (l + "").toLowerCase() : "text";
  let x = Hv([o, i && i.toAbortSignal()], s), g;
  const m = x && x.unsubscribe && (() => {
    x.unsubscribe();
  });
  let p;
  try {
    if (c && Yv && n !== "get" && n !== "head" && (p = await Kv(u, r)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (C.isFormData(r) && (A = v.headers.get("content-type")) && u.setContentType(A), v.body) {
        const [E, T] = Fc(
          p,
          Eo(zc(c))
        );
        r = Hc(v.body, Uc, E, T);
      }
    }
    C.isString(f) || (f = f ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    g = new Request(t, {
      ...d,
      signal: x,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? f : void 0
    });
    let y = await fetch(g);
    const b = Ps && (l === "stream" || l === "response");
    if (Ps && (a || b && m)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((N) => {
        v[N] = y[N];
      });
      const A = C.toFiniteNumber(y.headers.get("content-length")), [E, T] = a && Fc(
        A,
        Eo(zc(a), !0)
      ) || [];
      y = new Response(
        Hc(y.body, Uc, E, () => {
          T && T(), m && m();
        }),
        v
      );
    }
    l = l || "text";
    let _ = await Co[C.findKey(Co, l) || "text"](y, e);
    return !b && m && m(), await new Promise((v, A) => {
      Lf(v, A, {
        data: _,
        headers: Qe.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: g
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, e, g),
      {
        cause: S.cause || S
      }
    ) : J.from(S, S && S.code, e, g);
  }
}), Is = {
  http: fv,
  xhr: Vv,
  fetch: Gv
};
C.forEach(Is, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qc = (e) => `- ${e}`, Zv = (e) => C.isFunction(e) || e === null || e === !1, zf = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !Zv(n) && (r = Is[(s = String(n)).toLowerCase()], r === void 0))
        throw new J(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(qc).join(`
`) : " " + qc(i[0]) : "as no adapter specified";
      throw new J(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Is
};
function ki(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Jn(null, e);
}
function Wc(e) {
  return ki(e), e.headers = Qe.from(e.headers), e.data = Ri.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), zf.getAdapter(e.adapter || _r.adapter)(e).then(function(r) {
    return ki(e), r.data = Ri.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qe.from(r.headers), r;
  }, function(r) {
    return jf(r) || (ki(e), r && r.response && (r.response.data = Ri.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qe.from(r.response.headers))), Promise.reject(r);
  });
}
const Vf = "1.9.0", ii = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ii[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Xc = {};
ii.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + Vf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new J(
        o(s, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return n && !Xc[s] && (Xc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
ii.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Jv(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new J("option " + i + " must be " + c, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new J("Unknown option " + i, J.ERR_BAD_OPTION);
  }
}
const lo = {
  assertOptions: Jv,
  validators: ii
}, Tt = lo.validators;
let yn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Dc(),
      response: new Dc()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = wn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && lo.assertOptions(r, {
      silentJSONParsing: Tt.transitional(Tt.boolean),
      forcedJSONParsing: Tt.transitional(Tt.boolean),
      clarifyTimeoutError: Tt.transitional(Tt.boolean)
    }, !1), o != null && (C.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : lo.assertOptions(o, {
      encode: Tt.function,
      serialize: Tt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), lo.assertOptions(n, {
      baseUrl: Tt.spelling("baseURL"),
      withXsrfToken: Tt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && C.merge(
      i.common,
      i[n.method]
    );
    i && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = Qe.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const g = [Wc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), d = g.length, u = Promise.resolve(n); f < d; )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    d = a.length;
    let x = n;
    for (f = 0; f < d; ) {
      const g = a[f++], m = a[f++];
      try {
        x = g(x);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Wc.call(this, x);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = l.length; f < d; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const n = Mf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Pf(n, t.params, t.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(t) {
  yn.prototype[t] = function(n, r) {
    return this.request(wn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(wn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  yn.prototype[t] = n(), yn.prototype[t + "Form"] = n(!0);
});
let Qv = class Hf {
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
      r.reason || (r.reason = new Jn(i, s, a), n(r.reason));
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
      token: new Hf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ey(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ty(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const Ns = {
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
Object.entries(Ns).forEach(([e, t]) => {
  Ns[t] = e;
});
function Uf(e) {
  const t = new yn(e), n = yf(yn.prototype.request, t);
  return C.extend(n, yn.prototype, t, { allOwnKeys: !0 }), C.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Uf(wn(e, o));
  }, n;
}
const Oe = Uf(_r);
Oe.Axios = yn;
Oe.CanceledError = Jn;
Oe.CancelToken = Qv;
Oe.isCancel = jf;
Oe.VERSION = Vf;
Oe.toFormData = ri;
Oe.AxiosError = J;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(t) {
  return Promise.all(t);
};
Oe.spread = ey;
Oe.isAxiosError = ty;
Oe.mergeConfig = wn;
Oe.AxiosHeaders = Qe;
Oe.formToJSON = (e) => Nf(C.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = zf.getAdapter;
Oe.HttpStatusCode = Ns;
Oe.default = Oe;
const {
  Axios: Ay,
  AxiosError: Oy,
  CanceledError: Ty,
  isCancel: Ry,
  CancelToken: ky,
  VERSION: Py,
  all: Iy,
  Cancel: Ny,
  isAxiosError: jy,
  spread: Ly,
  toFormData: My,
  AxiosHeaders: Dy,
  HttpStatusCode: By,
  formToJSON: Fy,
  getAdapter: zy,
  mergeConfig: Vy
} = Oe, br = Ao;
(function(e, t) {
  const n = Ao, r = e();
  for (; ; )
    try {
      if (parseInt(n(490)) / 1 + parseInt(n(500)) / 2 * (-parseInt(n(489)) / 3) + parseInt(n(501)) / 4 * (parseInt(n(503)) / 5) + parseInt(n(495)) / 6 + -parseInt(n(496)) / 7 + -parseInt(n(502)) / 8 + parseInt(n(499)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(_o, 771883);
br(492);
Oe[br(493)].withCredentials = !0;
const ny = async (e) => {
  var n, r, o, i;
  const t = br;
  try {
    return (await Oe(e)).data;
  } catch (s) {
    throw ((r = (n = s.response) == null ? void 0 : n.data) == null ? void 0 : r.message) || ((i = (o = s.response) == null ? void 0 : o[t(494)]) == null ? void 0 : i.error) || s.message;
  }
};
function _o() {
  const e = ["http://192.168.11.76:3000/api/v1/client", "defaults", "data", "678984KzWvRt", "10773497zXGCtx", "GET", "Content-Type", "9045765ZFybOo", "244ttJmJs", "452hqywIL", "4104680UFPXeK", "65210UgQIai", "application/json", "PATCH", "31884relBYQ", "1528660bAymlP", "params"];
  return _o = function() {
    return e;
  }, _o();
}
const ry = {};
function Ao(e, t) {
  const n = _o();
  return Ao = function(r, o) {
    return r = r - 487, n[r];
  }, Ao(e, t);
}
ry[br(498)] = br(487);
const Vt = Oo;
(function(e, t) {
  const n = Oo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(167)) / 1 * (-parseInt(n(165)) / 2) + parseInt(n(181)) / 3 * (-parseInt(n(169)) / 4) + parseInt(n(177)) / 5 * (parseInt(n(163)) / 6) + -parseInt(n(171)) / 7 + -parseInt(n(170)) / 8 + parseInt(n(173)) / 9 * (parseInt(n(179)) / 10) + -parseInt(n(174)) / 11 * (-parseInt(n(175)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(To, 968009);
function Oo(e, t) {
  const n = To();
  return Oo = function(r, o) {
    return r = r - 163, n[r];
  }, Oo(e, t);
}
const cn = {};
cn.mousemove = "ACTION_MOVE", cn[Vt(178)] = Vt(168), cn[Vt(176)] = "ACTION_DOWN", cn.touchmove = "ACTION_MOVE", cn.touchend = "ACTION_UP", cn[Vt(166)] = "ACTION_DOWN";
const Pt = cn, js = {};
js.keyup = Vt(168), js.keydown = "ACTION_DOWN";
const oy = js, iy = Vt(180), sy = Vt(164), ay = Vt(182), qf = "assistiveMenuHide";
function To() {
  const e = ["22bXxFIR", "9490692rFPdHJ", "mousedown", "782330YSHyLo", "mouseup", "5166170fpQnCJ", "moveEvent", "597xoMrBN", "keyBoardEvent", "6dHJfIE", "wheelEvent", "40638vBqDMW", "touchstart", "5aXbVBI", "ACTION_UP", "12040hsBgdU", "5874880pEVrNj", "385707XrFeYC", "shortcutEvent", "9DDdpkO"];
  return To = function() {
    return e;
  }, To();
}
const Ls = Vt(172), cy = "fullscreenEvent";
(function(e, t) {
  const n = hn, r = e();
  for (; ; )
    try {
      if (parseInt(n(195)) / 1 + -parseInt(n(162)) / 2 + -parseInt(n(185)) / 3 * (-parseInt(n(176)) / 4) + parseInt(n(174)) / 5 + parseInt(n(163)) / 6 + parseInt(n(173)) / 7 + parseInt(n(206)) / 8 * (-parseInt(n(189)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 106969);
function hn(e, t) {
  const n = Ro();
  return hn = function(r, o) {
    return r = r - 158, n[r];
  }, hn(e, t);
}
function Ro() {
  const e = ["449826LIjSnC", "key", "clientX", "includes", "toUpperCase", "tab", "KEYBOARD_TEXT", "touchstart", "focus", "meta_state", "792015xSCNqR", "232845RFgZpb", "action", "1756EHvKvt", "type", "touchEvent", "mouseup", "arrowdown", "height", "deltaY", "clipboard", "delta", "1059CXtrAN", "repeat", "current", "wheelEvent", "3199041TCzUYH", "getBoundingClientRect", "typeKey", "passive", "touchmove", "mouse", "86246pCmLGn", "top", "sign", "addEventListener", "width", "KEYBOARD_CODE", "removeEventListener", "forEach", "preventDefault", "left", "arrowup", "8uzjWZP", "arrowleft", "keydown", "isDown", "mousemove", "keyAction", "offsetHeight", "touchend", "wheel", "readText", "26960rMMgfr"];
  return Ro = function() {
    return e;
  }, Ro();
}
const ly = ({ isMobile: e, assistive: t, onImgEvent: n, canvasContent: r, imageRef: o }) => {
  const [i, s] = Ke(!1), a = (f) => {
    const d = hn;
    if (f[d(203)](), !o[d(187)]) return;
    const x = o.current;
    let g = Pt[f.type];
    if (t[d(209)] == !0 || t.showMenu == !0) {
      g == Pt[d(179)] && n(qf, {});
      return;
    }
    if (g == Pt.mousedown && s(!0), g != Pt.mousedown && i == !1) return;
    g == Pt[d(179)] && s(!1);
    let m, p;
    const S = x[d(190)]();
    if (f.type[d(166)]("touch")) {
      const { touches: b, changedTouches: _ } = f, v = b[0] ?? _[0];
      m = v.pageX - S[d(204)], p = v.pageY - S.top;
    } else f[d(177)].includes(d(194)) && (m = f[d(165)] - S[d(204)], p = f.clientY - S.top);
    const y = {};
    y[d(175)] = d(178), y.keyAction = g, y.x = m, y.y = p, y.width = S[d(199)], y.height = S[d(181)], n(iy, y), x[d(171)]();
  }, c = (f) => {
    const d = hn;
    if (f[d(203)](), !o.current) return;
    const x = o[d(187)], g = Math[d(197)](f[d(182)]), m = x.getBoundingClientRect(), p = {};
    p.action = d(188), p[d(199)] = x.offsetWidth, p.height = x[d(158)], p.x = f[d(165)] - m[d(204)], p.y = f.clientY - m[d(196)], p[d(184)] = g, n(sy, p), x[d(171)]();
  }, l = async (f) => {
    const d = hn;
    if (f[d(203)](), !o.current) return;
    const x = o[d(187)], g = oy[f.type], m = f[d(164)].toLowerCase();
    if (((b) => ["control", "shift", "capslock"][d(166)](b))(m) == !0) return;
    const S = async () => {
      const b = d, _ = {};
      _.action = "keyEvent", _[b(211)] = g, _[b(191)] = b(169), _[b(164)] = f.key, _[b(186)] = 0, _[b(172)] = 0;
      const v = _;
      return f.ctrlKey == !0 ? m == "c" ? v[b(191)] = "COPY_TEXT" : m == "a" ? (v.typeKey = "KEYBOARD_CODE", v.meta_state = 4096, v.key = 29) : m == "v" && (v.typeKey = "PASTE_TEXT", v.key = await navigator[b(183)][b(161)]()) : m == b(205) ? (v[b(191)] = "KEYBOARD_CODE", v.key = 19) : m == b(180) ? (v.typeKey = b(200), v.key = 20) : m == b(207) ? (v.typeKey = b(200), v[b(164)] = 21) : m == "arrowright" ? (v.typeKey = "KEYBOARD_CODE", v.key = 22) : m == "backspace" ? (v.typeKey = "KEYBOARD_CODE", v[b(164)] = 67) : m == "enter" ? (v.typeKey = "KEYBOARD_CODE", v[b(164)] = 66) : m == b(168) && (v.typeKey = "KEYBOARD_CODE", v[b(164)] = 61), v[b(177)] == b(169) && f.shiftKey == !0 && (v[b(164)] = v.key[b(167)]()), v;
    }, y = await S();
    y && n(ay, y), x.focus();
  };
  Ge(() => {
    const f = hn, d = o.current;
    if (d) {
      const x = {};
      x[f(192)] = !1;
      const g = x;
      return e ? (d.addEventListener(f(170), a, g), d[f(198)](f(193), a, g), d.addEventListener("touchend", a)) : (d[f(198)](f(160), c, g), d.addEventListener(f(208), l), [f(210), "mousedown", "mouseup"][f(202)]((m) => {
        d[f(198)](m, a);
      })), () => {
        const m = f;
        d && (e ? ["touchstart", "touchmove", m(159)].forEach((p) => {
          d[m(201)](p, a);
        }) : (["mousemove", "mousedown", "mouseup", "wheel", m(208)].forEach((p) => {
          d.removeEventListener(p, a);
        }), d.removeEventListener("keydown", l)));
      };
    }
  }, [e, a, c, l]);
  const u = { ref: o, ...r };
  return z.jsx(hh, u);
}, uy = "data:image/png;base64,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";
function ko() {
  const e = ["1504390AshOlq", "765732hvvXxs", "div", "7uApThp", "570nDVVna", "2VgHaOE", "1387464leRgig", "192415RgXAbC", "269532DxAzNj", "237378DFOrLU", "10895EoEgsb"];
  return ko = function() {
    return e;
  }, ko();
}
const fy = Po;
(function(e, t) {
  const n = Po, r = e();
  for (; ; )
    try {
      if (parseInt(n(131)) / 1 * (-parseInt(n(129)) / 2) + -parseInt(n(133)) / 3 + parseInt(n(125)) / 4 + -parseInt(n(123)) / 5 * (-parseInt(n(128)) / 6) + -parseInt(n(127)) / 7 * (-parseInt(n(130)) / 8) + -parseInt(n(132)) / 9 + -parseInt(n(124)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 119943);
const dy = vt[fy(126)]`
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
function Po(e, t) {
  const n = ko();
  return Po = function(r, o) {
    return r = r - 123, n[r];
  }, Po(e, t);
}
const Dt = vt.div`
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
`, Bt = vt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, hy = vt.img`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, py = vt.div`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, t) {
  const n = Un, r = e();
  for (; ; )
    try {
      if (-parseInt(n(185)) / 1 * (parseInt(n(189)) / 2) + -parseInt(n(192)) / 3 + parseInt(n(180)) / 4 + parseInt(n(193)) / 5 * (-parseInt(n(191)) / 6) + -parseInt(n(190)) / 7 + parseInt(n(197)) / 8 + parseInt(n(188)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 678170);
function Io() {
  const e = ["requestFullscreen", "#screen_", "24591591ljbJNd", "22338KvfWqz", "3290294FbUGRb", "5262186OfLFmU", "3944205AzXfqz", "5dNYcVl", "webkitRequestFullscreen", "mozFullScreenElement", "exitFullscreen", "7677800wukNGM", "webkitExitFullscreen", "webkitFullscreenElement", "959244fbIOzU", "mozRequestFullScreen", "msExitFullscreen", "querySelector", "msRequestFullscreen", "53XmgcmI"];
  return Io = function() {
    return e;
  }, Io();
}
const Yc = () => {
  const e = Un;
  return document.fullscreenElement || document[e(195)] || document[e(179)] || document.msFullscreenElement;
};
function Un(e, t) {
  const n = Io();
  return Un = function(r, o) {
    return r = r - 179, n[r];
  }, Un(e, t);
}
const my = (e) => {
  const t = Un, n = document[t(183)](t(187) + e);
  n[t(186)] ? n.requestFullscreen() : n[t(181)] ? n.mozRequestFullScreen() : n.webkitRequestFullscreen ? n[t(194)]() : n[t(184)] && n[t(184)]();
}, gy = () => {
  const e = Un;
  document.exitFullscreen ? document[e(196)]() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document[e(198)] ? document[e(198)]() : document.msExitFullscreen && document[e(182)]();
};
(function(e, t) {
  const n = Sr, r = e();
  for (; ; )
    try {
      if (parseInt(n(293)) / 1 + -parseInt(n(277)) / 2 + parseInt(n(268)) / 3 + parseInt(n(306)) / 4 + -parseInt(n(314)) / 5 * (parseInt(n(281)) / 6) + -parseInt(n(301)) / 7 + parseInt(n(328)) / 8 * (-parseInt(n(308)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 195465);
function No() {
  const e = ["zIndex", "removeEventListener", "recents", "clientX", "1131440fmunyZ", "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z", "40527IJuyde", "fill", "opacity", "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z", "click", "mousedown", "5BNjCbV", "closest", "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z", "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z", "shortcutEvent", "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z", "set", "Volume", "mouse", "assistive_touch_", "current", "copy", "isDown", "assistive_touch_class_", "88AMnyNt", "Paste", "0 0 24 24", "M6 12h6v2H6zm0 4h6v2H6z", "11.75", "Icon", "taskId", "http://www.w3.org/2000/svg", "path", "children", "touchend", "Hide ID", "width", "showMenu", "home", "addEventListener", "get", "rgba(255, 255, 255, 1)", "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z", "433092AQBtLf", "assistive_menu_", "getBoundingClientRect", "move", "landscape", "getAttribute", "touchstart", "cursor", "type", "232924wprcFB", "includes", "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z", "left", "552732rpVIak", "height", "Recents", "forEach", "div", "mousemove", "device_id", "circle", "max", "data", "top", "Sync", "266187XlDvkU", "pageY", "pageX", "svg", "Home", "action", "13%", "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z", "1678803hDsxaa"];
  return No = function() {
    return e;
  }, No();
}
function Sr(e, t) {
  const n = No();
  return Sr = function(r, o) {
    return r = r - 268, n[r];
  }, Sr(e, t);
}
const xy = el((e, t) => {
  const n = Sr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, u] = Ke(0), [f, d] = Ke(0), [x, g] = Ke(null), [m, p] = Ke(0), S = Be(null), y = Be(null), b = Be(null), _ = {};
  _.cursor = "move", _.opacity = 0.3, _.zIndex = 999;
  const [v, A] = Ke(_), E = {};
  E.zIndex = 999, E[n(282)] = "", E.width = n(299);
  const [T, N] = Ke(E), U = {};
  U[n(302)] = 1e3;
  const [Q, Y] = Ke(U), P = Be(null), [B, H] = Ke(null), q = (oe) => {
    const L = n;
    if (oe.preventDefault(), s[L(344)][L(341)] == !0) return;
    const Le = Pt[oe.type], Me = a[L(324)], tt = b.current, Fe = Me[L(270)](), st = tt[L(270)]();
    let jt, Ct;
    const Cn = Fe[L(340)] - st[L(340)], _t = Fe.height - st.height;
    if (oe[L(276)][L(278)]("touch")) {
      const { touches: qe, changedTouches: Ye } = oe, at = qe[0] ?? Ye[0];
      jt = at[L(295)], Ct = at[L(294)];
    } else oe.type[L(278)](L(322)) && (jt = oe[L(305)], Ct = oe.clientY);
    if (Le == Pt.mousedown) {
      s.set({ ...s.get, isDown: !0 }), u(jt - st[L(280)]), d(Ct - st[L(291)]);
      const qe = {};
      qe[L(310)] = 1, qe[L(275)] = "grab";
      const Ye = { ...v, ...qe };
      A(Ye), p(performance.now());
    } else if (Le == Pt[L(286)]) {
      if (s.get[L(326)] == !1) return;
      var Lt = jt - l - Fe[L(280)], Mt = Ct - f - Fe.top;
      Lt = Math[L(289)](3, Math.min(Lt, Cn) - 3), Mt = Math[L(289)](3, Math.min(Mt, _t) - 3);
      const qe = {};
      qe.top = Mt + "px", qe.left = Lt + "px";
      const Ye = { ...T, ...qe };
      N(Ye);
    } else if (Le == Pt.mouseup) {
      const qe = performance.now() - m;
      if (x == Pt.mousedown || qe < 100) {
        const At = {};
        At.showMenu = !0, At[L(326)] = !1, s[L(320)]({ ...s[L(344)], ...At });
      } else s.set({ ...s[L(344)], isDown: !1 });
      const Ye = {};
      Ye[L(310)] = 0.3, Ye.cursor = L(271);
      const at = { ...v, ...Ye };
      A(at);
    }
    g(Le), tt.focus();
  }, Z = async (oe) => {
    const L = n;
    oe.preventDefault();
    const Le = oe.target[L(315)](L(285))[L(273)]("data-id");
    if (Le === "fullscreen")
      Yc() ? gy() : my(r);
    else {
      const Me = {};
      Me[L(298)] = L(318), Me.shortcut = Le, Me.data = "";
      const tt = Me;
      Le === "paste" && (tt[L(290)] = await navigator.clipboard.readText()), Le === "copy" && (tt[L(334)] = "shortcutCopy"), i(Ls, tt);
    }
    s.set({ ...s[L(344)], showMenu: !1 }), y.current.focus();
  }, $ = (oe) => {
    const L = Yc();
    i(cy, L);
  };
  Ge(() => {
    requestAnimationFrame(() => {
      const oe = Sr, L = { ...Q };
      L[oe(310)] = s[oe(344)].showMenu ? 1 : 0, Y(L);
    });
  }, [s]), Ge(() => {
    const oe = n, L = a[oe(324)];
    return L && ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((Me) => {
      L.addEventListener(Me, $);
    }), () => {
      const Me = oe;
      L && L[Me(303)](Me(312), $);
    };
  }, []), Ge(() => {
    const oe = n, L = b[oe(324)], Le = y[oe(324)];
    if (Le && Le[oe(343)](oe(312), Z), L) {
      const Me = {};
      Me.passive = !1;
      const tt = Me;
      return o ? (L.addEventListener(oe(274), q, tt), L[oe(343)]("touchmove", q, tt), L.addEventListener(oe(338), q)) : [oe(286), "mousedown", "mouseup"].forEach((Fe) => {
        L.addEventListener(Fe, q);
      }), () => {
        const Fe = oe;
        Le && Le.removeEventListener(Fe(312), Z), L && (o ? ["touchstart", "touchmove", Fe(338)][Fe(284)]((st) => {
          L.removeEventListener(st, q);
        }) : [Fe(286), Fe(313), "mouseup"][Fe(284)]((st) => {
          L[Fe(303)](st, q);
        }));
      };
    }
  }, [o, q]);
  const G = () => {
    const oe = n, L = {};
    L.zIndex = 999, L.height = P[oe(324)] == oe(272) ? "12%" : null, L.width = P.current != "landscape" ? "12%" : null, L.top = "50%", L.right = "5%", N(L);
  };
  tl(t, () => ({ fixTouch: (oe) => {
    oe && (P.current = oe), G();
  }, setFullscreen: (oe) => {
    H(oe);
  } }));
  const ne = {};
  ne[n(309)] = n(345);
  const re = {};
  re.d = B ? "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z" : "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z";
  const K = {};
  K[n(337)] = "Screen";
  const ee = {};
  ee[n(309)] = "rgba(255, 255, 255, 1)";
  const fe = {};
  fe.d = "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z";
  const le = {};
  le.d = n(331);
  const de = {};
  de[n(337)] = "Copy";
  const pe = {};
  pe.fill = n(345);
  const I = {};
  I.d = n(317);
  const X = {};
  X.children = n(329);
  const F = {};
  F.fill = n(345);
  const D = {};
  D.d = n(316);
  const R = {};
  R.cx = n(332), R.cy = "18", R.r = "1";
  const te = {};
  te[n(337)] = c ? n(339) : "Show ID";
  const j = {};
  j.fill = n(345);
  const Te = {};
  Te.d = n(300);
  const we = {};
  we.d = n(279);
  const ot = {};
  ot[n(337)] = n(321);
  const wt = {};
  wt.fill = "rgba(255, 255, 255, 1)";
  const et = {};
  et.d = n(307);
  const Et = {};
  Et[n(337)] = n(292);
  const Re = {};
  Re[n(309)] = n(345);
  const be = {};
  be.d = n(311);
  const He = {};
  He[n(337)] = n(283);
  const dt = {};
  dt.fill = n(345);
  const it = {};
  it.d = n(319);
  const nn = {};
  nn.children = n(297);
  const rn = {};
  rn[n(309)] = n(345);
  const En = {};
  En.d = n(346);
  const on = {};
  return on[n(337)] = "Back", z.jsxs(z.Fragment, { children: [s[n(344)].showMenu ? z.jsxs(dy, { id: n(269) + r, style: Q, ref: y, children: [z.jsxs(Dt, { "data-id": "fullscreen", children: [z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: n(330), style: ne, children: z.jsx(n(336), re) }), z.jsx(Bt, K)] }), z.jsxs(Dt, { "data-id": n(325), children: [z.jsxs("svg", { xmlns: n(335), width: "28", height: "28", viewBox: "0 0 24 24", style: ee, children: [z.jsx(n(336), fe), z.jsx(n(336), le)] }), z.jsx(Bt, de)] }), z.jsxs(Dt, { "data-id": "paste", children: [z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: n(330), style: pe, children: z.jsx("path", I) }), z.jsx(Bt, X)] }), z.jsxs(Dt, { "data-id": n(287), children: [z.jsxs("svg", { xmlns: n(335), width: "28", height: "28", viewBox: "0 0 24 24", style: F, children: [z.jsx(n(336), D), z.jsx(n(288), R)] }), z.jsx(Bt, te)] }), z.jsxs(Dt, { "data-id": "volume", children: [z.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", viewBox: "0 0 24 24", style: j, children: [z.jsx(n(336), Te), z.jsx("path", we)] }), z.jsx(Bt, ot)] }), z.jsxs(Dt, { "data-id": "sync", children: [z.jsx("svg", { xmlns: n(335), width: "28", height: "28", viewBox: n(330), style: wt, children: z.jsx(n(336), et) }), z.jsx(Bt, Et)] }), z.jsxs(Dt, { "data-id": n(304), children: [z.jsx(n(296), { xmlns: n(335), width: "28", height: "28", viewBox: "0 0 24 24", style: Re, children: z.jsx("path", be) }), z.jsx(Bt, He)] }), z.jsxs(Dt, { "data-id": n(342), children: [z.jsx(n(296), { xmlns: n(335), width: "28", height: "28", viewBox: n(330), style: dt, children: z.jsx("path", it) }), z.jsx(Bt, nn)] }), z.jsxs(Dt, { "data-id": "back", children: [z.jsx("svg", { xmlns: n(335), width: "28", height: "28", viewBox: n(330), style: rn, children: z.jsx(n(336), En) }), z.jsx(Bt, on)] })] }) : null, z.jsx(py, { id: n(327) + r, className: "assistive", ref: S, style: v, children: z.jsx(hy, { style: T, src: uy, className: "assistive", id: n(323) + r, alt: n(333), ref: b, draggable: !1 }) })] });
}), rt = bn;
(function(e, t) {
  const n = bn, r = e();
  for (; ; )
    try {
      if (-parseInt(n(263)) / 1 + -parseInt(n(267)) / 2 * (-parseInt(n(247)) / 3) + parseInt(n(272)) / 4 + -parseInt(n(261)) / 5 * (-parseInt(n(274)) / 6) + parseInt(n(259)) / 7 * (-parseInt(n(255)) / 8) + -parseInt(n(268)) / 9 + -parseInt(n(264)) / 10 * (-parseInt(n(276)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 429597);
function jo() {
  const e = ["775351aEHbPd", "750860kyzmrf", "length", "prefer-hardware", "166zgUBxd", "3169953xlkFjW", "iframe", "width", "videoMeta", "510080xrYTmV", "innerHeight", "2790WSEhpY", "rotate", "242RUMXja", "height", "hardwareAcceleration", "isKeyFrame", "round", "setIsConnect", "resizedWidth", "from", "now", "concatUint8Arrays", "optimizeForLatency", "state", "delta", "autoResize", "rootSize", "lock", "codedWidth", "translate", "decode", "setOrientation", "isMobile", "13683OycOKT", "decoder", "canvas", "drawImage", "maxWidth", "ctx", "buildDecoder", "configure", "6752040VpZrgS", "landscape", "portrait", "concat", "7wiqKgs", "orientation", "2615KmyETs", "isPlay"];
  return jo = function() {
    return e;
  }, jo();
}
function bn(e, t) {
  const n = jo();
  return bn = function(r, o) {
    return r = r - 236, n[r];
  }, bn(e, t);
}
var $c, Kc, Gc, Zc, Jc, Qc;
Qc = rt(282), Jc = rt(245), Zc = rt(253), Gc = rt(279), Kc = rt(285), $c = rt(244);
class vy {
  constructor(t, n, r, o) {
    Ot(this, "setFullscreen", (t) => {
      const n = bn;
      if (t) {
        const r = window[n(273)] + 10, o = this[n(282)](null, this.rootSize[n(270)], this.rootSize[n(277)], r, r);
        this[n(270)] = o.width, this.height = o.height;
      } else this.width = this.rootSize.width, this.height = this[n(240)].height;
    });
    Ot(this, Qc, (t, n, r, o, i) => {
      const s = rt;
      let a;
      return t && o > this[s(251)] && r > n && (i = this[s(251)]), i && (a = i / n * r, a > o && (i = o / r * n, a = o / n * n)), { width: Math.round(i), height: Math[s(280)](a) };
    });
    Ot(this, Jc, (t) => {
      const n = rt;
      this.orientation = t, this[n(246)] && screen[n(260)][n(241)](t);
    });
    Ot(this, "autoResize", (t, n) => {
      var a;
      const r = rt, o = this.isMobile == !0 ? window[r(273)] - 12 : window[r(273)] - 50, i = this.resizedWidth(!0, t, n, o, o);
      this[r(270)] = i[r(270)], this[r(277)] = i[r(277)], !this.rootSize && ((a = this[r(281)]) == null || a.call(this, !0));
      const s = {};
      s[r(270)] = i.width, s.height = i[r(277)], this.rootSize = s;
    });
    Ot(this, "setVideoMeta", (t) => {
      const n = t instanceof Uint8Array ? t : new Uint8Array(t);
      this.videoMeta = n;
    });
    Ot(this, Zc, () => {
      const t = rt, n = new VideoDecoder({ output: async (o) => {
        const i = bn, s = await createImageBitmap(o);
        (!this.width || !this.height) && this[i(239)](o[i(242)], o.codedHeight), this.orientation == i(256) ? (this[i(249)][i(270)] = this.height, this.canvas.height = this.width, this.ctx[i(243)](0, this[i(270)]), this.ctx[i(275)](Math.PI / 2), this[i(252)].scale(-1, -1), this.ctx[i(250)](s, 0, 0, this[i(270)], this[i(277)])) : (this.canvas.width = this[i(270)], this[i(249)].height = this[i(277)], this[i(252)].drawImage(s, 0, 0, this.width, this[i(277)])), s.close(), o.close();
      }, error: (o) => console.error("Decoder error:", o) }), r = {};
      return r.codec = "avc1.64001E", r[t(278)] = t(266), r[t(236)] = !0, n[t(254)](r), n;
    });
    Ot(this, Gc, (t) => {
      const n = rt;
      for (let r = 0; r <= t[n(265)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t.length - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Ot(this, Kc, (t, n) => {
      const r = rt, o = Array[r(283)](t)[r(258)](Array.from(n));
      return new Uint8Array(o);
    });
    Ot(this, $c, (t) => {
      const n = rt;
      if (!this.decoder || this[n(248)][n(237)] == "close" || !this.videoMeta) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this.isKeyFrame(r);
      o && (this[n(269)] = r), this.iframe && this.videoMeta && (!this[n(262)] && (r = this.concatUint8Arrays(this[n(271)], this[n(269)]), this.isPlay = !0), this[n(248)].decode(new EncodedVideoChunk({ timestamp: performance[n(284)]() * 1e3, type: o ? "key" : n(238), data: r })));
    });
    const i = bn;
    this[i(249)] = t, this[i(251)] = n, this.isMobile = r, this.setIsConnect = o, this[i(252)] = t.getContext("2d"), this[i(248)] = this[i(253)](), this.videoMeta = null, this.iframe = null, this[i(262)] = null, this[i(270)] = null, this.height = null, this[i(240)] = null, this[i(260)] = i(257);
  }
}
function $t(e, t) {
  const n = Lo();
  return $t = function(r, o) {
    return r = r - 367, n[r];
  }, $t(e, t);
}
(function(e, t) {
  const n = $t, r = e();
  for (; ; )
    try {
      if (-parseInt(n(367)) / 1 + -parseInt(n(412)) / 2 + parseInt(n(384)) / 3 * (-parseInt(n(385)) / 4) + parseInt(n(396)) / 5 * (parseInt(n(387)) / 6) + -parseInt(n(398)) / 7 + -parseInt(n(375)) / 8 + parseInt(n(423)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 472742);
function Lo() {
  const e = ["message", "current", "data", "shortcut", "23435CmSOPA", "draggable", "5694794fVTtLp", "action", "type", "addEventListener", "setVideoMeta", "center", "get", "device_id", "delete", "shortcutEvent", "url", "large", "post", "mozFullScreenElement", "1063798vcWVjJ", "connection closed code: ", "join_room", "password", "connect", "emit", "status", "screen", "taskId", "Timeout waiting for response", "size", "22386618NsjJop", "control", "disconnect", "error", "webkitFullscreenElement", "150938RRjxwZ", "set", "msg", "isMobile", "code", "close", "screen_", "clipboard", "4698848cepcGI", "timeout", "get_video_meta", "COPY_TEXT", "orientation", "setFullscreen", "application/json", "writeText", "text", "29352TOIpOV", "12gPcBuu", "userAgent", "126EfjCJk", "children", "middle", "value", "type_client"];
  return Lo = function() {
    return e;
  }, Lo();
}
const Hy = el((e, t) => {
  const n = $t, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, u = o[n(405)], f = /iPhone|iPad|iPod|Android/i.test(navigator[n(386)]), d = n(424), [x, g] = Ke(null), [m, p] = Ke(a), S = {};
  S.showMenu = !1, S.isDown = !1;
  const [y, b] = Ke(S), _ = Be(null), v = Be(null), [A, E] = Ke(null), T = "image_" + u, N = n(373) + u, U = "screen_main_" + u, Q = Be(null), Y = Be(null), P = Be(null), [B, H] = Ke([]), q = Be(null), Z = Be(/* @__PURE__ */ new Map());
  Ge(() => {
    p(a);
  }, [a]);
  const $ = (I) => {
    H((X) => [...X, I]);
  }, G = (I) => {
    const X = n;
    v.current.emit(X(392), I), c == null || c(I);
  };
  tl(t, () => ({ api: async function(I, X = 5e3) {
    return new Promise((F, D) => {
      const R = $t, te = setTimeout(() => {
        const j = $t;
        Z[j(393)][j(406)](I[j(420)]);
        const Te = {};
        Te.action = I.action, Te.taskId = I.taskId, Te[j(418)] = !1, Te.message = j(421), D(Te);
      }, X);
      Z.current.set(I.taskId, (j) => {
        clearTimeout(te), F(j);
      }), v.current[R(417)](R(392), I);
    });
  }, sync: function(I) {
    const X = n;
    v.current[X(417)]("message", I);
  }, showDeviceId: function(I) {
    p(I);
  } })), Ge(() => {
    (async () => {
      const I = $t;
      try {
        const X = {};
        X["Content-Type"] = I(381);
        const F = {};
        F.device_id = o.device_id, F[I(415)] = o.passwd;
        const D = {};
        D[I(408)] = r, D.method = I(410), D[I(376)] = 1e4, D.headers = X, D[I(394)] = F;
        const R = D, te = await ny(R);
        g(te[I(394)]);
      } catch (X) {
        const F = {};
        F[I(369)] = X, F.type = "error", $(F);
      }
    })();
  }, []), Ge(() => {
    const I = n;
    if (v.current || !x) return;
    const X = {};
    X.reconnection = !1;
    const F = eo(x, X);
    return F.on(I(416), () => {
      const D = I, R = {};
      R.action = D(416), R[D(391)] = d, R.device_id = o.device_id, R[D(370)] = f, R.passwd = o.passwd, F[D(417)]("join_room", R);
    }), F.on(I(414), (D) => {
      const R = I;
      if (D.status == !0) {
        v[R(393)] = F;
        const te = {};
        te[R(399)] = "onScreenEvent", F[R(417)](R(392), te);
      } else {
        const te = {};
        te[R(369)] = D[R(369)], te.type = R(426), $(te);
      }
    }), F.on(I(419), (D) => {
      q.current.decode(D);
    }), F.on("video_meta", (D) => {
      const R = I;
      if (D) {
        if (q[R(393)][R(402)](D), !q[R(393)].iframe) {
          const te = {};
          te.action = "onSyncIFrame", F[R(417)]("message", te);
        }
      } else {
        const te = {};
        te[R(399)] = R(377), F.emit("video_meta", te);
      }
    }), F.on(I(392), (D) => {
      const R = I;
      if ((D[R(399)] == R(378) || D[R(399)] == R(407)) && D.text.length > 0 ? navigator[R(374)][R(382)](D[R(383)]) : D[R(399)] == R(379) && (q[R(393)].setOrientation(D[R(390)]), P.current.fixTouch(D.value)), D[R(420)]) {
        const te = Z[R(393)][R(404)](D.taskId);
        te && (te(D), Z[R(393)][R(406)](D[R(420)]));
      }
    }), F.on("connect_error", (D) => {
      const R = I, te = {};
      te[R(369)] = D, te.type = "error", $(te);
    }), F.on(I(425), (D) => {
      const R = I, te = {};
      te[R(369)] = R(413) + D[R(371)], te[R(400)] = "info", $(te), _.current && _.current[R(372)]();
    }), () => {
      F && F.disconnect();
    };
  }, [x]), Ge(() => {
    const I = Y.current;
    q.current = new vy(I, i, f, E);
  }, []), Ge(() => {
    const I = n, X = () => {
      const F = $t, D = document.fullscreenElement || document[F(427)] || document[F(411)] || document.msFullscreenElement;
      q[F(393)][F(380)](!!D), P[F(393)].setFullscreen(!!D), P[F(393)].fixTouch();
    };
    return document[I(401)]("fullscreenchange", X), () => {
      document.removeEventListener("fullscreenchange", X);
    };
  }, []);
  const ne = {};
  ne[n(388)] = o.device_id;
  const re = {};
  re.size = n(409);
  const K = {};
  K[n(422)] = n(409);
  const ee = {};
  ee[n(422)] = n(409);
  const fe = {};
  fe.height = 0, fe.width = 0;
  const le = {};
  le.get = y, le[n(368)] = b;
  const de = {};
  de.id = T, de.tabIndex = "0", de[n(397)] = "false";
  const pe = {};
  return pe.marginTop = 5, z.jsxs(fh, { id: U, children: [m && z.jsx(mh, { children: z.jsx(ph, ne) }), B.length == 0 ? z.jsxs(z.Fragment, { children: [!A && z.jsxs(mf, { align: n(403), gap: n(389), children: [z.jsx(dr, re), z.jsx(dr, K), z.jsx(dr, ee)] }), z.jsxs(dh, { ref: Q, id: N, style: A ? {} : fe, children: [s ? z.jsx(xy, { status: le, ref: P, imageRef: Y, displayId: u, isMobile: f, isShowDeviceId: m, onSenData: (I, X) => {
    const F = n;
    I === Ls && X.shortcut === F(405) ? p(!m) : I === Ls && X[F(395)] === "sync" ? l(o.device_id) : G(X);
  } }) : null, z.jsx(ly, { canvasContent: de, imageRef: Y, isMobile: f, assistive: y, onImgEvent: (I, X) => {
    if (I === qf) {
      const F = { ...y };
      F.showMenu = !1, b(F);
    } else G(X);
  } })] })] }) : B.map((I, X) => z.jsx(ff, { style: pe, message: I.msg, type: I[n(400)], showIcon: !0, closable: !0 }, X))] });
});
function Ms(e, t) {
  var n = Mo();
  return Ms = function(r, o) {
    r = r - 400;
    var i = n[r];
    return i;
  }, Ms(e, t);
}
(function(e, t) {
  for (var n = Ms, r = e(); ; )
    try {
      var o = parseInt(n(404)) / 1 + -parseInt(n(400)) / 2 + -parseInt(n(407)) / 3 * (-parseInt(n(405)) / 4) + -parseInt(n(401)) / 5 * (-parseInt(n(403)) / 6) + -parseInt(n(402)) / 7 + -parseInt(n(408)) / 8 + parseInt(n(406)) / 9;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 824755);
function Mo() {
  var e = ["457235aUQRJM", "9106195SmKYct", "78uZaNSx", "1215904RvTxzD", "148FazhYR", "4717008DUaity", "52857LPgIjW", "3434848PogvUw", "2051468tLLCpR"];
  return Mo = function() {
    return e;
  }, Mo();
}
export {
  Hy as ControlMyRPP
};
