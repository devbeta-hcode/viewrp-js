var b0 = Object.defineProperty;
var S0 = (e, n, t) => n in e ? b0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var mt = (e, n, t) => S0(e, typeof n != "symbol" ? n + "" : n, t);
import * as T from "react";
import Ne, { useDebugValue as La, createElement as w0, useRef as Fe, useContext as Vt, isValidElement as E0, version as _0, createContext as aa, useLayoutEffect as C0, useEffect as Ge, useState as Xe, forwardRef as Tu, useImperativeHandle as Ou } from "react";
import Ba from "react-dom";
var dr = Ht;
(function(e, n) {
  for (var t = Ht, r = e(); ; )
    try {
      var o = -parseInt(t(294)) / 1 * (parseInt(t(264)) / 2) + parseInt(t(278)) / 3 * (parseInt(t(231)) / 4) + -parseInt(t(236)) / 5 * (parseInt(t(275)) / 6) + -parseInt(t(263)) / 7 + parseInt(t(262)) / 8 + -parseInt(t(291)) / 9 + parseInt(t(289)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(wo, 111123);
function Ht(e, n) {
  var t = wo();
  return Ht = function(r, o) {
    r = r - 226;
    var i = t[r];
    return i;
  }, Ht(e, n);
}
var A0 = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Ht;
      if (t) {
        var i = t[o(281)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Yi = A0(void 0, function() {
  var e = Ht, n = {};
  n[e(282)] = e(266) + "+$";
  var t = n;
  return Yi[e(285)]()[e(248)](t[e(282)])[e(285)]()[e(246) + "r"](Yi)[e(248)](t[e(282)]);
});
Yi();
var Gn = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Ht;
      if (t) {
        var i = t[o(281)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), T0 = Gn(void 0, function() {
  for (var e = Ht, n = { zJKvF: function(p, h) {
    return p(h);
  }, NDloj: function(p, h) {
    return p + h;
  }, FXwcW: e(295) + e(287) + e(272) + " )", eYFLV: function(p, h) {
    return p < h;
  }, kzjeU: e(274), zmLot: e(290), LtEmS: e(268), yQovS: e(288), YqdFx: e(245), DbFHZ: e(270) }, t = e(257)[e(293)]("|"), r = 0; ; ) {
    switch (t[r++]) {
      case "0":
        var o = d[e(258)] = d[e(258)] || {};
        continue;
      case "1":
        try {
          var i = n[e(230)](Function, n[e(296)](n[e(296)](e(265) + e(276), n[e(232)]), ");"));
          d = i();
        } catch {
          d = window;
        }
        continue;
      case "2":
        for (var s = 0; n[e(242)](s, l[e(233)]); s++) {
          var a = Gn[e(246) + "r"][e(238)][e(239)](Gn), c = l[s], u = o[c] || a;
          a[e(269)] = Gn[e(239)](Gn), a[e(285)] = u[e(285)][e(239)](u), o[c] = a;
        }
        continue;
      case "3":
        var l = [n[e(267)], n[e(256)], n[e(255)], e(228), n[e(250)], n[e(259)], n[e(237)]];
        continue;
      case "4":
        var d;
        continue;
    }
    break;
  }
});
T0();
function wo() {
  var e = ["erty", "table", "constructo", "construct", "search", "__esModule", "yQovS", "get", "QizJc", "6|0", "hasOwnProp", "LtEmS", "zmLot", "4|1|0|3|2", "console", "YqdFx", "keys", "defineProp", "35568jWWVfK", "747978TcGIrT", "2yNzuRV", "return (fu", "(((.+)+)+)", "kzjeU", "info", "__proto__", "trace", "call", 'rn this")(', "3|2|5|4|1|", "log", "18702YGaodN", "nction() ", "Enblg", "9Sdtttb", "value", "undefined", "apply", "GFYXj", "getOwnProp", "lzTmm", "toString", "default", 'ctor("retu', "exception", "5817930KrMhTU", "warn", "1408437QGwQsQ", "Uvgwq", "split", "209387GCbdzk", "{}.constru", "NDloj", "SKxcz", "ptor", "error", "ertyDescri", "zJKvF", "980pVHbkD", "FXwcW", "length", "wOUGa", "function", "5AsTJrk", "DbFHZ", "prototype", "bind", "pRCJe", "xxgtf", "eYFLV", "forEach"];
  return wo = function() {
    return e;
  }, wo();
}
typeof globalThis !== dr(280) || typeof window !== dr(280) || (typeof global !== dr(280) ? global : dr(280));
function O0(e) {
  var n = dr, t = {};
  t[n(284)] = n(286);
  var r = t;
  return e && e[n(249)] && Object[n(238)][n(254) + n(244)][n(271)](e, r[n(284)]) ? e[n(286)] : e;
}
var Fr = { exports: {} }, $n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function R0() {
  if (Fa) return $n;
  Fa = 1;
  var e = Ne, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var l, d = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (l in c) r.call(c, l) && !i.hasOwnProperty(l) && (d[l] = c[l]);
    if (a && a.defaultProps) for (l in c = a.defaultProps, c) d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: n, type: a, key: p, ref: h, props: d, _owner: o.current };
  }
  return $n.Fragment = t, $n.jsx = s, $n.jsxs = s, $n;
}
var Kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function k0() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ne, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), f = Symbol.iterator, y = "@@iterator";
    function m(g) {
      if (g === null || typeof g != "object")
        return null;
      var I = f && g[f] || g[y];
      return typeof I == "function" ? I : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(g) {
      {
        for (var I = arguments.length, D = new Array(I > 1 ? I - 1 : 0), Y = 1; Y < I; Y++)
          D[Y - 1] = arguments[Y];
        C("error", g, D);
      }
    }
    function C(g, I, D) {
      {
        var Y = _.ReactDebugCurrentFrame, xe = Y.getStackAddendum();
        xe !== "" && (I += "%s", D = D.concat([xe]));
        var me = D.map(function(ce) {
          return String(ce);
        });
        me.unshift("Warning: " + I), Function.prototype.apply.call(console[g], console, me);
      }
    }
    var k = !1, v = !1, O = !1, E = !1, j = !1, B;
    B = Symbol.for("react.module.reference");
    function W(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || j || g === o || g === u || g === l || E || g === h || k || v || O || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === d || g.$$typeof === s || g.$$typeof === a || g.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === B || g.getModuleId !== void 0));
    }
    function re(g, I, D) {
      var Y = g.displayName;
      if (Y)
        return Y;
      var xe = I.displayName || I.name || "";
      return xe !== "" ? D + "(" + xe + ")" : D;
    }
    function G(g) {
      return g.displayName || "Context";
    }
    function M(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case a:
            var I = g;
            return G(I) + ".Consumer";
          case s:
            var D = g;
            return G(D._context) + ".Provider";
          case c:
            return re(g, g.render, "ForwardRef");
          case d:
            var Y = g.displayName || null;
            return Y !== null ? Y : M(g.type) || "Memo";
          case p: {
            var xe = g, me = xe._payload, ce = xe._init;
            try {
              return M(ce(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, F = 0, ne, J, Z, $, oe, Q, K;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function de() {
      {
        if (F === 0) {
          ne = console.log, J = console.info, Z = console.warn, $ = console.error, oe = console.group, Q = console.groupCollapsed, K = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        F++;
      }
    }
    function ue() {
      {
        if (F--, F === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, g, {
              value: ne
            }),
            info: V({}, g, {
              value: J
            }),
            warn: V({}, g, {
              value: Z
            }),
            error: V({}, g, {
              value: $
            }),
            group: V({}, g, {
              value: oe
            }),
            groupCollapsed: V({}, g, {
              value: Q
            }),
            groupEnd: V({}, g, {
              value: K
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = _.ReactCurrentDispatcher, A;
    function P(g, I, D) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (xe) {
            var Y = xe.stack.trim().match(/\n( *(at )?)/);
            A = Y && Y[1] || "";
          }
        return `
` + A + g;
      }
    }
    var N = !1, b;
    {
      var x = typeof WeakMap == "function" ? WeakMap : Map;
      b = new x();
    }
    function S(g, I) {
      if (!g || N)
        return "";
      {
        var D = b.get(g);
        if (D !== void 0)
          return D;
      }
      var Y;
      N = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = he.current, he.current = null, de();
      try {
        if (I) {
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
            } catch (Ye) {
              Y = Ye;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Ye) {
              Y = Ye;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            Y = Ye;
          }
          g();
        }
      } catch (Ye) {
        if (Ye && Y && typeof Ye.stack == "string") {
          for (var se = Ye.stack.split(`
`), Ue = Y.stack.split(`
`), _e = se.length - 1, Oe = Ue.length - 1; _e >= 1 && Oe >= 0 && se[_e] !== Ue[Oe]; )
            Oe--;
          for (; _e >= 1 && Oe >= 0; _e--, Oe--)
            if (se[_e] !== Ue[Oe]) {
              if (_e !== 1 || Oe !== 1)
                do
                  if (_e--, Oe--, Oe < 0 || se[_e] !== Ue[Oe]) {
                    var Re = `
` + se[_e].replace(" at new ", " at ");
                    return g.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", g.displayName)), typeof g == "function" && b.set(g, Re), Re;
                  }
                while (_e >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        N = !1, he.current = me, ue(), Error.prepareStackTrace = xe;
      }
      var vn = g ? g.displayName || g.name : "", en = vn ? P(vn) : "";
      return typeof g == "function" && b.set(g, en), en;
    }
    function q(g, I, D) {
      return S(g, !1);
    }
    function L(g) {
      var I = g.prototype;
      return !!(I && I.isReactComponent);
    }
    function le(g, I, D) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return S(g, L(g));
      if (typeof g == "string")
        return P(g);
      switch (g) {
        case u:
          return P("Suspense");
        case l:
          return P("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case c:
            return q(g.render);
          case d:
            return le(g.type, I, D);
          case p: {
            var Y = g, xe = Y._payload, me = Y._init;
            try {
              return le(me(xe), I, D);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, pe = {}, Je = _.ReactDebugCurrentFrame;
    function et(g) {
      if (g) {
        var I = g._owner, D = le(g.type, g._source, I ? I.type : null);
        Je.setExtraStackFrame(D);
      } else
        Je.setExtraStackFrame(null);
    }
    function _t(g, I, D, Y, xe) {
      {
        var me = Function.call.bind(X);
        for (var ce in g)
          if (me(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var Ue = Error((Y || "React class") + ": " + D + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              se = g[ce](I, ce, Y, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              se = _e;
            }
            se && !(se instanceof Error) && (et(xe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", D, ce, typeof se), et(null)), se instanceof Error && !(se.message in pe) && (pe[se.message] = !0, et(xe), w("Failed %s type: %s", D, se.message), et(null));
          }
      }
    }
    var Ce = Array.isArray;
    function Se(g) {
      return Ce(g);
    }
    function Ae(g) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, D = I && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return D;
      }
    }
    function ze(g) {
      try {
        return je(g), !1;
      } catch {
        return !0;
      }
    }
    function je(g) {
      return "" + g;
    }
    function It(g) {
      if (ze(g))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(g)), je(g);
    }
    var Pr = _.ReactCurrentOwner, xi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ir, Nr;
    function hi(g) {
      if (X.call(g, "ref")) {
        var I = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function pi(g) {
      if (X.call(g, "key")) {
        var I = Object.getOwnPropertyDescriptor(g, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function mi(g, I) {
      typeof g.ref == "string" && Pr.current;
    }
    function gi(g, I) {
      {
        var D = function() {
          Ir || (Ir = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function vi(g, I) {
      {
        var D = function() {
          Nr || (Nr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var yi = function(g, I, D, Y, xe, me, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: g,
        key: I,
        ref: D,
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
        value: Y
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function bi(g, I, D, Y, xe) {
      {
        var me, ce = {}, se = null, Ue = null;
        D !== void 0 && (It(D), se = "" + D), pi(I) && (It(I.key), se = "" + I.key), hi(I) && (Ue = I.ref, mi(I, xe));
        for (me in I)
          X.call(I, me) && !xi.hasOwnProperty(me) && (ce[me] = I[me]);
        if (g && g.defaultProps) {
          var _e = g.defaultProps;
          for (me in _e)
            ce[me] === void 0 && (ce[me] = _e[me]);
        }
        if (se || Ue) {
          var Oe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && gi(ce, Oe), Ue && vi(ce, Oe);
        }
        return yi(g, se, Ue, xe, Y, Pr.current, ce);
      }
    }
    var qn = _.ReactCurrentOwner, jr = _.ReactDebugCurrentFrame;
    function Nt(g) {
      if (g) {
        var I = g._owner, D = le(g.type, g._source, I ? I.type : null);
        jr.setExtraStackFrame(D);
      } else
        jr.setExtraStackFrame(null);
    }
    var Wn;
    Wn = !1;
    function Yn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function Dr() {
      {
        if (qn.current) {
          var g = M(qn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Mr(g) {
      return "";
    }
    var Jt = {};
    function mn(g) {
      {
        var I = Dr();
        if (!I) {
          var D = typeof g == "string" ? g : g.displayName || g.name;
          D && (I = `

Check the top-level render call using <` + D + ">.");
        }
        return I;
      }
    }
    function Qt(g, I) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var D = mn(I);
        if (Jt[D])
          return;
        Jt[D] = !0;
        var Y = "";
        g && g._owner && g._owner !== qn.current && (Y = " It was passed a child from " + M(g._owner.type) + "."), Nt(g), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, Y), Nt(null);
      }
    }
    function gn(g, I) {
      {
        if (typeof g != "object")
          return;
        if (Se(g))
          for (var D = 0; D < g.length; D++) {
            var Y = g[D];
            Yn(Y) && Qt(Y, I);
          }
        else if (Yn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var xe = m(g);
          if (typeof xe == "function" && xe !== g.entries)
            for (var me = xe.call(g), ce; !(ce = me.next()).done; )
              Yn(ce.value) && Qt(ce.value, I);
        }
      }
    }
    function jt(g) {
      {
        var I = g.type;
        if (I == null || typeof I == "string")
          return;
        var D;
        if (typeof I == "function")
          D = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === d))
          D = I.propTypes;
        else
          return;
        if (D) {
          var Y = M(I);
          _t(D, g.props, "prop", Y, g);
        } else if (I.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var xe = M(I);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dt(g) {
      {
        for (var I = Object.keys(g.props), D = 0; D < I.length; D++) {
          var Y = I[D];
          if (Y !== "children" && Y !== "key") {
            Nt(g), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Nt(null);
            break;
          }
        }
        g.ref !== null && (Nt(g), w("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    var Xn = {};
    function Lr(g, I, D, Y, xe, me) {
      {
        var ce = W(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Mr();
          Ue ? se += Ue : se += Dr();
          var _e;
          g === null ? _e = "null" : Se(g) ? _e = "array" : g !== void 0 && g.$$typeof === n ? (_e = "<" + (M(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof g, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, se);
        }
        var Oe = bi(g, I, D, xe, me);
        if (Oe == null)
          return Oe;
        if (ce) {
          var Re = I.children;
          if (Re !== void 0)
            if (Y)
              if (Se(Re)) {
                for (var vn = 0; vn < Re.length; vn++)
                  gn(Re[vn], g);
                Object.freeze && Object.freeze(Re);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gn(Re, g);
        }
        if (X.call(I, "key")) {
          var en = M(g), Ye = Object.keys(I).filter(function(y0) {
            return y0 !== "key";
          }), wi = Ye.length > 0 ? "{key: someKey, " + Ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xn[en + wi]) {
            var v0 = Ye.length > 0 ? "{" + Ye.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wi, en, v0, en), Xn[en + wi] = !0;
          }
        }
        return g === r ? Dt(Oe) : jt(Oe), Oe;
      }
    }
    function Be(g, I, D) {
      return Lr(g, I, D, !0);
    }
    function Br(g, I, D) {
      return Lr(g, I, D, !1);
    }
    var Si = Br, Te = Be;
    Kn.Fragment = r, Kn.jsx = Si, Kn.jsxs = Te;
  }()), Kn;
}
var Va;
function P0() {
  return Va || (Va = 1, process.env.NODE_ENV === "production" ? Fr.exports = R0() : Fr.exports = k0()), Fr.exports;
}
var H = P0(), $e = function() {
  return $e = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, $e.apply(this, arguments);
};
function Cn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function I0(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var N0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, j0 = /* @__PURE__ */ I0(
  function(e) {
    return N0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ee = "-ms-", pr = "-moz-", ye = "-webkit-", Ru = "comm", Uo = "rule", ca = "decl", D0 = "@import", ku = "@keyframes", M0 = "@layer", Pu = Math.abs, ua = String.fromCharCode, Xi = Object.assign;
function L0(e, n) {
  return He(e, 0) ^ 45 ? (((n << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function Iu(e) {
  return e.trim();
}
function Ot(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function ie(e, n, t) {
  return e.replace(n, t);
}
function no(e, n, t) {
  return e.indexOf(n, t);
}
function He(e, n) {
  return e.charCodeAt(n) | 0;
}
function An(e, n, t) {
  return e.slice(n, t);
}
function yt(e) {
  return e.length;
}
function Nu(e) {
  return e.length;
}
function xr(e, n) {
  return n.push(e), e;
}
function B0(e, n) {
  return e.map(n).join("");
}
function Ha(e, n) {
  return e.filter(function(t) {
    return !Ot(t, n);
  });
}
var qo = 1, Tn = 1, ju = 0, rt = 0, De = 0, Dn = "";
function Wo(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: qo, column: Tn, length: s, return: "", siblings: a };
}
function Mt(e, n) {
  return Xi(Wo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function yn(e) {
  for (; e.root; )
    e = Mt(e.root, { children: [e] });
  xr(e, e.siblings);
}
function F0() {
  return De;
}
function z0() {
  return De = rt > 0 ? He(Dn, --rt) : 0, Tn--, De === 10 && (Tn = 1, qo--), De;
}
function ut() {
  return De = rt < ju ? He(Dn, rt++) : 0, Tn++, De === 10 && (Tn = 1, qo++), De;
}
function an() {
  return He(Dn, rt);
}
function ro() {
  return rt;
}
function Yo(e, n) {
  return An(Dn, e, n);
}
function Gi(e) {
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
function V0(e) {
  return qo = Tn = 1, ju = yt(Dn = e), rt = 0, [];
}
function H0(e) {
  return Dn = "", e;
}
function Ei(e) {
  return Iu(Yo(rt - 1, $i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function U0(e) {
  for (; (De = an()) && De < 33; )
    ut();
  return Gi(e) > 2 || Gi(De) > 3 ? "" : " ";
}
function q0(e, n) {
  for (; --n && ut() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return Yo(e, ro() + (n < 6 && an() == 32 && ut() == 32));
}
function $i(e) {
  for (; ut(); )
    switch (De) {
      // ] ) " '
      case e:
        return rt;
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
        ut();
        break;
    }
  return rt;
}
function W0(e, n) {
  for (; ut() && e + De !== 57; )
    if (e + De === 84 && an() === 47)
      break;
  return "/*" + Yo(n, rt - 1) + "*" + ua(e === 47 ? e : ut());
}
function Y0(e) {
  for (; !Gi(an()); )
    ut();
  return Yo(e, rt);
}
function X0(e) {
  return H0(oo("", null, null, null, [""], e = V0(e), 0, [0], e));
}
function oo(e, n, t, r, o, i, s, a, c) {
  for (var u = 0, l = 0, d = s, p = 0, h = 0, f = 0, y = 1, m = 1, _ = 1, w = 0, C = "", k = o, v = i, O = r, E = C; m; )
    switch (f = w, w = ut()) {
      // (
      case 40:
        if (f != 108 && He(E, d - 1) == 58) {
          no(E += ie(Ei(w), "&", "&\f"), "&\f", Pu(u ? a[u - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Ei(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += U0(f);
        break;
      // \
      case 92:
        E += q0(ro() - 1, 7);
        continue;
      // /
      case 47:
        switch (an()) {
          case 42:
          case 47:
            xr(G0(W0(ut(), ro()), n, t, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * y:
        a[u++] = yt(E) * _;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + l:
            _ == -1 && (E = ie(E, /\f/g, "")), h > 0 && yt(E) - d && xr(h > 32 ? qa(E + ";", r, t, d - 1, c) : qa(ie(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (xr(O = Ua(E, n, t, u, l, o, a, C, k = [], v = [], d, i), i), w === 123)
              if (l === 0)
                oo(E, n, O, O, k, i, d, a, v);
              else
                switch (p === 99 && He(E, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    oo(e, O, O, r && xr(Ua(e, O, O, 0, 0, o, a, C, o, k = [], d, v), v), o, v, d, a, r ? k : v);
                    break;
                  default:
                    oo(E, O, O, O, [""], v, 0, a, v);
                }
        }
        u = l = h = 0, y = _ = 1, C = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + yt(E), h = f;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && z0() == 125)
            continue;
        }
        switch (E += ua(w), w * y) {
          // &
          case 38:
            _ = l > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (yt(E) - 1) * _, _ = 1;
            break;
          // @
          case 64:
            an() === 45 && (E += Ei(ut())), p = an(), l = d = yt(C = E += Y0(ro())), w++;
            break;
          // -
          case 45:
            f === 45 && yt(E) == 2 && (y = 0);
        }
    }
  return i;
}
function Ua(e, n, t, r, o, i, s, a, c, u, l, d) {
  for (var p = o - 1, h = o === 0 ? i : [""], f = Nu(h), y = 0, m = 0, _ = 0; y < r; ++y)
    for (var w = 0, C = An(e, p + 1, p = Pu(m = s[y])), k = e; w < f; ++w)
      (k = Iu(m > 0 ? h[w] + " " + C : ie(C, /&\f/g, h[w]))) && (c[_++] = k);
  return Wo(e, n, t, o === 0 ? Uo : a, c, u, l, d);
}
function G0(e, n, t, r) {
  return Wo(e, n, t, Ru, ua(F0()), An(e, 2, -2), 0, r);
}
function qa(e, n, t, r, o) {
  return Wo(e, n, t, ca, An(e, 0, r), An(e, r + 1, -1), r, o);
}
function Du(e, n, t) {
  switch (L0(e, n)) {
    // color-adjust
    case 5103:
      return ye + "print-" + e + e;
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
      return ye + e + e;
    // tab-size
    case 4789:
      return pr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + pr + e + Ee + e + e;
    // writing-mode
    case 5936:
      switch (He(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return ye + e + Ee + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ye + e + Ee + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ye + e + Ee + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ye + e + Ee + e + e;
    // order
    case 6165:
      return ye + e + Ee + "flex-" + e + e;
    // align-items
    case 5187:
      return ye + e + ie(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Ee + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ye + e + Ee + "flex-item-" + ie(e, /flex-|-self/g, "") + (Ot(e, /flex-|baseline/) ? "" : Ee + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return ye + e + Ee + "flex-line-pack" + ie(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return ye + e + Ee + ie(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ye + e + Ee + ie(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ye + "box-" + ie(e, "-grow", "") + ye + e + Ee + ie(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ye + ie(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    // cursor
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, ye + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    // justify-self
    case 4200:
      if (!Ot(e, /flex-|baseline/)) return Ee + "grid-column-align" + An(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ee + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, Ot(r.props, /grid-\w+-end/);
      }) ? ~no(e + (t = t[n].value), "span", 0) ? e : Ee + ie(e, "-start", "") + e + Ee + "grid-row-span:" + (~no(t, "span", 0) ? Ot(t, /\d+/) : +Ot(t, /\d+/) - +Ot(e, /\d+/)) + ";" : Ee + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return Ot(r.props, /grid-\w+-start/);
      }) ? e : Ee + ie(ie(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
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
      if (yt(e) - 1 - n > 6)
        switch (He(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (He(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + pr + (He(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~no(e, "stretch", 0) ? Du(ie(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return Ee + o + ":" + i + u + (s ? Ee + o + "-span:" + (a ? c : +c - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (He(e, n + 6) === 121)
        return ie(e, ":", ":" + ye) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (He(e, He(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ye + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + Ee + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return ie(e, ":", ":" + Ee) + e;
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
function Eo(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function $0(e, n, t, r) {
  switch (e.type) {
    case M0:
      if (e.children.length) break;
    case D0:
    case ca:
      return e.return = e.return || e.value;
    case Ru:
      return "";
    case ku:
      return e.return = e.value + "{" + Eo(e.children, r) + "}";
    case Uo:
      if (!yt(e.value = e.props.join(","))) return "";
  }
  return yt(t = Eo(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function K0(e) {
  var n = Nu(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function Z0(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function J0(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ca:
        e.return = Du(e.value, e.length, t);
        return;
      case ku:
        return Eo([Mt(e, { value: ie(e.value, "@", "@" + ye) })], r);
      case Uo:
        if (e.length)
          return B0(t = e.props, function(o) {
            switch (Ot(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                yn(Mt(e, { props: [ie(o, /:(read-\w+)/, ":" + pr + "$1")] })), yn(Mt(e, { props: [o] })), Xi(e, { props: Ha(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                yn(Mt(e, { props: [ie(o, /:(plac\w+)/, ":" + ye + "input-$1")] })), yn(Mt(e, { props: [ie(o, /:(plac\w+)/, ":" + pr + "$1")] })), yn(Mt(e, { props: [ie(o, /:(plac\w+)/, Ee + "input-$1")] })), yn(Mt(e, { props: [o] })), Xi(e, { props: Ha(t, r) });
                break;
            }
            return "";
          });
    }
}
var Q0 = {
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
}, xn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Mu = "active", Lu = "data-styled-version", Xo = "6.1.18", la = `/*!sc*/
`, _o = typeof window < "u" && typeof document < "u", ed = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Wa = /invalid hook call/i, zr = /* @__PURE__ */ new Set(), td = function(e, n) {
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
        Wa.test(s) ? (i = !1, zr.delete(r)) : o.apply(void 0, Cn([s], a, !1));
      }, Fe(), i && !zr.has(r) && (console.warn(r), zr.add(r));
    } catch (s) {
      Wa.test(s.message) && zr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Go = Object.freeze([]), On = Object.freeze({});
function nd(e, n, t) {
  return t === void 0 && (t = On), e.theme !== t.theme && e.theme || n || t.theme;
}
var Ki = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, od = /(^-|-$)/g;
function Ya(e) {
  return e.replace(rd, "-").replace(od, "");
}
var id = /(a)(d)/gi, Vr = 52, Xa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zi(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Vr; n = n / Vr | 0) t = Xa(n % Vr) + t;
  return (Xa(n % Vr) + t).replace(id, "$1-$2");
}
var _i, Bu = 5381, nn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Fu = function(e) {
  return nn(Bu, e);
};
function sd(e) {
  return Zi(Fu(e) >>> 0);
}
function zu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ci(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Vu = typeof Symbol == "function" && Symbol.for, Hu = Vu ? Symbol.for("react.memo") : 60115, ad = Vu ? Symbol.for("react.forward_ref") : 60112, cd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ud = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Uu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ld = ((_i = {})[ad] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, _i[Hu] = Uu, _i);
function Ga(e) {
  return ("type" in (n = e) && n.type.$$typeof) === Hu ? Uu : "$$typeof" in e ? ld[e.$$typeof] : cd;
  var n;
}
var fd = Object.defineProperty, dd = Object.getOwnPropertyNames, $a = Object.getOwnPropertySymbols, xd = Object.getOwnPropertyDescriptor, hd = Object.getPrototypeOf, Ka = Object.prototype;
function qu(e, n, t) {
  if (typeof n != "string") {
    if (Ka) {
      var r = hd(n);
      r && r !== Ka && qu(e, r, t);
    }
    var o = dd(n);
    $a && (o = o.concat($a(n)));
    for (var i = Ga(e), s = Ga(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in ud || t && t[c] || s && c in s || i && c in i)) {
        var u = xd(n, c);
        try {
          fd(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function Rn(e) {
  return typeof e == "function";
}
function fa(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function on(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Za(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function kn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ji(e, n, t) {
  if (t === void 0 && (t = !1), !t && !kn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Ji(e[r], n[r]);
  else if (kn(n)) for (var r in n) e[r] = Ji(e[r], n[r]);
  return e;
}
function da(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var pd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function md() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function Mn(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(md.apply(void 0, Cn([pd[e]], n, !1)).trim());
}
var gd = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw Mn(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(la);
    return t;
  }, e;
}(), vd = 1 << 30, io = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new Map(), so = 1, Hr = function(e) {
  if (io.has(e)) return io.get(e);
  for (; Co.has(so); ) so++;
  var n = so++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > vd)) throw Mn(16, "".concat(n));
  return io.set(e, n), Co.set(n, e), n;
}, yd = function(e, n) {
  so = n + 1, io.set(e, n), Co.set(n, e);
}, bd = "style[".concat(xn, "][").concat(Lu, '="').concat(Xo, '"]'), Sd = new RegExp("^".concat(xn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wd = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, Ed = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(la), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Sd);
      if (c) {
        var u = 0 | parseInt(c[1], 10), l = c[2];
        u !== 0 && (yd(l, u), wd(e, l, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ja = function(e) {
  for (var n = document.querySelectorAll(bd), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(xn) !== Mu && (Ed(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function _d() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Wu = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(xn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(xn, Mu), r.setAttribute(Lu, Xo);
  var s = _d();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, Cd = function() {
  function e(n) {
    this.element = Wu(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw Mn(17);
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
}(), Ad = function() {
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
}(), Td = function() {
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
}(), Qa = _o, Od = { isServer: !_o, useCSSOMInjection: !ed }, Yu = function() {
  function e(n, t, r) {
    n === void 0 && (n = On), t === void 0 && (t = {});
    var o = this;
    this.options = $e($e({}, Od), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && _o && Qa && (Qa = !1, Ja(this)), da(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var p = function(_) {
            return Co.get(_);
          }(d);
          if (p === void 0) return "continue";
          var h = i.names.get(p), f = s.getGroup(d);
          if (h === void 0 || !h.size || f.length === 0) return "continue";
          var y = "".concat(xn, ".g").concat(d, '[id="').concat(p, '"]'), m = "";
          h !== void 0 && h.forEach(function(_) {
            _.length > 0 && (m += "".concat(_, ","));
          }), c += "".concat(f).concat(y, '{content:"').concat(m, '"}').concat(la);
        }, l = 0; l < a; l++) u(l);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Hr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && _o && Ja(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e($e($e({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Td(o) : r ? new Cd(o) : new Ad(o);
    }(this.options), new gd(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (Hr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(Hr(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Hr(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Rd = /&/g, kd = /^\s*\/\/.*$/gm;
function Xu(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Xu(t.children, n)), t;
  });
}
function Pd(e) {
  var n, t, r, o = On, i = o.options, s = i === void 0 ? On : i, a = o.plugins, c = a === void 0 ? Go : a, u = function(p, h, f) {
    return f.startsWith(t) && f.endsWith(t) && f.replaceAll(t, "").length > 0 ? ".".concat(n) : p;
  }, l = c.slice();
  l.push(function(p) {
    p.type === Uo && p.value.includes("&") && (p.props[0] = p.props[0].replace(Rd, t).replace(r, u));
  }), s.prefix && l.push(J0), l.push($0);
  var d = function(p, h, f, y) {
    h === void 0 && (h = ""), f === void 0 && (f = ""), y === void 0 && (y = "&"), n = y, t = h, r = new RegExp("\\".concat(t, "\\b"), "g");
    var m = p.replace(kd, ""), _ = X0(f || h ? "".concat(f, " ").concat(h, " { ").concat(m, " }") : m);
    s.namespace && (_ = Xu(_, s.namespace));
    var w = [];
    return Eo(_, K0(l.concat(Z0(function(C) {
      return w.push(C);
    })))), w;
  };
  return d.hash = c.length ? c.reduce(function(p, h) {
    return h.name || Mn(15), nn(p, h.name);
  }, Bu).toString() : "", d;
}
var Id = new Yu(), Qi = Pd(), Gu = Ne.createContext({ shouldForwardProp: void 0, styleSheet: Id, stylis: Qi });
Gu.Consumer;
Ne.createContext(void 0);
function ec() {
  return Vt(Gu);
}
var tc = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, da(this, function() {
      throw Mn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Qi), this.name + n.hash;
  }, e;
}(), Nd = function(e) {
  return e >= "A" && e <= "Z";
};
function nc(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    Nd(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var $u = function(e) {
  return e == null || e === !1 || e === "";
}, Ku = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !$u(i) && (Array.isArray(i) && i.isCss || Rn(i) ? r.push("".concat(nc(o), ":"), i, ";") : kn(i) ? r.push.apply(r, Cn(Cn(["".concat(o, " {")], Ku(i), !1), ["}"], !1)) : r.push("".concat(nc(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in Q0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function cn(e, n, t, r) {
  if ($u(e)) return [];
  if (fa(e)) return [".".concat(e.styledComponentId)];
  if (Rn(e)) {
    if (!Rn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tc || kn(o) || o === null || console.error("".concat(zu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), cn(o, n, t, r);
  }
  var i;
  return e instanceof tc ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : kn(e) ? Ku(e) : Array.isArray(e) ? Array.prototype.concat.apply(Go, e.map(function(s) {
    return cn(s, n, t, r);
  })) : [e.toString()];
}
function jd(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Rn(t) && !fa(t)) return !1;
  }
  return !0;
}
var Dd = Fu(Xo), Md = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && jd(n), this.componentId = t, this.baseHash = nn(Dd, t), this.baseStyle = r, Yu.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = on(o, this.staticRulesId);
    else {
      var i = Za(cn(this.rules, n, t, r)), s = Zi(nn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = on(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = nn(this.baseHash, r.hash), u = "", l = 0; l < this.rules.length; l++) {
        var d = this.rules[l];
        if (typeof d == "string") u += d, process.env.NODE_ENV !== "production" && (c = nn(c, d));
        else if (d) {
          var p = Za(cn(d, n, t, r));
          c = nn(c, p + l), u += p;
        }
      }
      if (u) {
        var h = Zi(c >>> 0);
        t.hasNameForId(this.componentId, h) || t.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = on(o, h);
      }
    }
    return o;
  }, e;
}(), Zu = Ne.createContext(void 0);
Zu.Consumer;
var Ai = {}, rc = /* @__PURE__ */ new Set();
function Ld(e, n, t) {
  var r = fa(e), o = e, i = !Ci(e), s = n.attrs, a = s === void 0 ? Go : s, c = n.componentId, u = c === void 0 ? function(k, v) {
    var O = typeof k != "string" ? "sc" : Ya(k);
    Ai[O] = (Ai[O] || 0) + 1;
    var E = "".concat(O, "-").concat(sd(Xo + O + Ai[O]));
    return v ? "".concat(v, "-").concat(E) : E;
  }(n.displayName, n.parentComponentId) : c, l = n.displayName, d = l === void 0 ? function(k) {
    return Ci(k) ? "styled.".concat(k) : "Styled(".concat(zu(k), ")");
  }(e) : l, p = n.displayName && n.componentId ? "".concat(Ya(n.displayName), "-").concat(n.componentId) : n.componentId || u, h = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, f = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var m = n.shouldForwardProp;
      f = function(k, v) {
        return y(k, v) && m(k, v);
      };
    } else f = y;
  }
  var _ = new Md(t, p, r ? o.componentStyle : void 0);
  function w(k, v) {
    return function(O, E, j) {
      var B = O.attrs, W = O.componentStyle, re = O.defaultProps, G = O.foldedComponentIds, M = O.styledComponentId, V = O.target, F = Ne.useContext(Zu), ne = ec(), J = O.shouldForwardProp || ne.shouldForwardProp;
      process.env.NODE_ENV !== "production" && La(M);
      var Z = nd(E, F, re) || On, $ = function(ue, he, A) {
        for (var P, N = $e($e({}, he), { className: void 0, theme: A }), b = 0; b < ue.length; b += 1) {
          var x = Rn(P = ue[b]) ? P(N) : P;
          for (var S in x) N[S] = S === "className" ? on(N[S], x[S]) : S === "style" ? $e($e({}, N[S]), x[S]) : x[S];
        }
        return he.className && (N.className = on(N.className, he.className)), N;
      }(B, E, Z), oe = $.as || V, Q = {};
      for (var K in $) $[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && $.theme === Z || (K === "forwardedAs" ? Q.as = $.forwardedAs : J && !J(K, oe) || (Q[K] = $[K], J || process.env.NODE_ENV !== "development" || j0(K) || rc.has(K) || !Ki.has(oe) || (rc.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ee = function(ue, he) {
        var A = ec(), P = ue.generateAndInjectStyles(he, A.styleSheet, A.stylis);
        return process.env.NODE_ENV !== "production" && La(P), P;
      }(W, $);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(ee);
      var de = on(G, M);
      return ee && (de += " " + ee), $.className && (de += " " + $.className), Q[Ci(oe) && !Ki.has(oe) ? "class" : "className"] = de, j && (Q.ref = j), w0(oe, Q);
    }(C, k, v);
  }
  w.displayName = d;
  var C = Ne.forwardRef(w);
  return C.attrs = h, C.componentStyle = _, C.displayName = d, C.shouldForwardProp = f, C.foldedComponentIds = r ? on(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = p, C.target = r ? o.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = r ? function(v) {
      for (var O = [], E = 1; E < arguments.length; E++) O[E - 1] = arguments[E];
      for (var j = 0, B = O; j < B.length; j++) Ji(v, B[j], !0);
      return v;
    }({}, o.defaultProps, k) : k;
  } }), process.env.NODE_ENV !== "production" && (td(d, p), C.warnTooManyClasses = /* @__PURE__ */ function(k, v) {
    var O = {}, E = !1;
    return function(j) {
      if (!E && (O[j] = !0, Object.keys(O).length >= 200)) {
        var B = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, O = {};
      }
    };
  }(d, p)), da(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && qu(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function oc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var ic = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Bd(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Rn(e) || kn(e)) return ic(cn(oc(Go, Cn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? cn(r) : ic(cn(oc(r, n)));
}
function es(e, n, t) {
  if (t === void 0 && (t = On), !n) throw Mn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, Bd.apply(void 0, Cn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return es(e, n, $e($e({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return es(e, n, $e($e({}, t), o));
  }, r;
}
var Ju = function(e) {
  return es(Ld, e);
}, dt = Ju;
Ki.forEach(function(e) {
  dt[e] = Ju(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ur = "__sc-".concat(xn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ur] || (window[Ur] = 0), window[Ur] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ur] += 1);
const Ar = Ut;
(function(e, n) {
  const t = Ut, r = e();
  for (; ; )
    try {
      if (-parseInt(t(413)) / 1 + parseInt(t(410)) / 2 + -parseInt(t(431)) / 3 * (-parseInt(t(443)) / 4) + parseInt(t(444)) / 5 * (-parseInt(t(436)) / 6) + -parseInt(t(434)) / 7 + parseInt(t(429)) / 8 * (parseInt(t(435)) / 9) + parseInt(t(448)) / 10 * (-parseInt(t(430)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ao, 275693);
const Fd = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Ut;
      if (t) {
        const i = t[o(411)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ts = Fd(void 0, function() {
  const e = Ut, n = {};
  n[e(425)] = e(442) + "+$";
  const t = n;
  return ts[e(409)]()[e(449)](t[e(425)])[e(409)]()[e(420) + "r"](ts)[e(449)](t[e(425)]);
});
ts();
function Ut(e, n) {
  const t = Ao();
  return Ut = function(r, o) {
    return r = r - 409, t[r];
  }, Ut(e, n);
}
const Zn = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Ut;
      if (t) {
        const i = t[o(411)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), zd = Zn(void 0, function() {
  const e = Ut, n = {};
  n[e(450)] = function(a, c) {
    return a + c;
  }, n[e(422)] = e(414) + e(438), n[e(417)] = e(426), n[e(423)] = e(427), n[e(418)] = e(441), n[e(447)] = function(a, c) {
    return a < c;
  };
  const t = n, r = function() {
    const a = e;
    let c;
    try {
      c = Function(t[a(450)](t[a(450)](t[a(422)], a(445) + a(451) + a(421) + " )"), ");"))();
    } catch {
      c = window;
    }
    return c;
  }, o = r(), i = o[e(440)] = o[e(440)] || {}, s = [e(432), t[e(417)], e(433), t[e(423)], e(416), t[e(418)], e(424)];
  for (let a = 0; t[e(447)](a, s[e(439)]); a++) {
    const c = Zn[e(420) + "r"][e(428)][e(419)](Zn), u = s[a], l = i[u] || c;
    c[e(437)] = Zn[e(419)](Zn), c[e(409)] = l[e(409)][e(419)](l), i[u] = c;
  }
});
zd();
const Vd = dt[Ar(412)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, Hd = dt[Ar(412)]`
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
`, Ud = dt[Ar(446)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, qd = dt[Ar(415)]`
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
`, Wd = dt[Ar(412)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;
function Ao() {
  const e = ["BgomK", "135910ayvNtU", "search", "ksiTx", 'ctor("retu', "toString", "1100620sknwEU", "apply", "div", "191337GVudcB", "return (fu", "span", "exception", "TKsUb", "zfCjV", "bind", "constructo", 'rn this")(', "XqRNi", "qcdRb", "trace", "WbXXM", "warn", "error", "prototype", "40pFzNNt", "209hnCcPn", "792hgGhVD", "log", "info", "3783913LDLGar", "794457VyfoFx", "935478FYbplA", "__proto__", "nction() ", "length", "console", "table", "(((.+)+)+)", "6516zLbfKI", "5nnKyxS", "{}.constru", "canvas"];
  return Ao = function() {
    return e;
  }, Ao();
}
const St = /* @__PURE__ */ Object.create(null);
St.open = "0";
St.close = "1";
St.ping = "2";
St.pong = "3";
St.message = "4";
St.upgrade = "5";
St.noop = "6";
const ao = /* @__PURE__ */ Object.create(null);
Object.keys(St).forEach((e) => {
  ao[St[e]] = e;
});
const ns = { type: "error", data: "parser error" }, Qu = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", el = typeof ArrayBuffer == "function", tl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, xa = ({ type: e, data: n }, t, r) => Qu && n instanceof Blob ? t ? r(n) : sc(n, r) : el && (n instanceof ArrayBuffer || tl(n)) ? t ? r(n) : sc(new Blob([n]), r) : r(St[e] + (n || "")), sc = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function ac(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ti;
function Yd(e, n) {
  if (Qu && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ac).then(n);
  if (el && (e.data instanceof ArrayBuffer || tl(e.data)))
    return n(ac(e.data));
  xa(e, !1, (t) => {
    Ti || (Ti = new TextEncoder()), n(Ti.encode(t));
  });
}
const cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < cc.length; e++)
  hr[cc.charCodeAt(e)] = e;
const Xd = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const u = new ArrayBuffer(n), l = new Uint8Array(u);
  for (r = 0; r < t; r += 4)
    i = hr[e.charCodeAt(r)], s = hr[e.charCodeAt(r + 1)], a = hr[e.charCodeAt(r + 2)], c = hr[e.charCodeAt(r + 3)], l[o++] = i << 2 | s >> 4, l[o++] = (s & 15) << 4 | a >> 2, l[o++] = (a & 3) << 6 | c & 63;
  return u;
}, Gd = typeof ArrayBuffer == "function", ha = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: nl(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: $d(e.substring(1), n)
  } : ao[t] ? e.length > 1 ? {
    type: ao[t],
    data: e.substring(1)
  } : {
    type: ao[t]
  } : ns;
}, $d = (e, n) => {
  if (Gd) {
    const t = Xd(e);
    return nl(t, n);
  } else
    return { base64: !0, data: e };
}, nl = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, rl = "", Kd = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    xa(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(rl));
    });
  });
}, Zd = (e, n) => {
  const t = e.split(rl), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = ha(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Jd() {
  return new TransformStream({
    transform(e, n) {
      Yd(e, (t) => {
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
function qr(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function Wr(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function Qd(e, n) {
  Oi || (Oi = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (qr(t) < 1)
            break;
          const c = Wr(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (qr(t) < 2)
            break;
          const c = Wr(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (qr(t) < 8)
            break;
          const c = Wr(t, 8), u = new DataView(c.buffer, c.byteOffset, c.length), l = u.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            a.enqueue(ns);
            break;
          }
          o = l * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (qr(t) < o)
            break;
          const c = Wr(t, o);
          a.enqueue(ha(i ? c : Oi.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(ns);
          break;
        }
      }
    }
  });
}
const ol = 4;
function Le(e) {
  if (e) return ex(e);
}
function ex(e) {
  for (var n in Le.prototype)
    e[n] = Le.prototype[n];
  return e;
}
Le.prototype.on = Le.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Le.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Le.prototype.off = Le.prototype.removeListener = Le.prototype.removeAllListeners = Le.prototype.removeEventListener = function(e, n) {
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
Le.prototype.emit = function(e) {
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
Le.prototype.emitReserved = Le.prototype.emit;
Le.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Le.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const $o = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), nt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), tx = "arraybuffer";
function il(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const nx = nt.setTimeout, rx = nt.clearTimeout;
function Ko(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = nx.bind(nt), e.clearTimeoutFn = rx.bind(nt)) : (e.setTimeoutFn = nt.setTimeout.bind(nt), e.clearTimeoutFn = nt.clearTimeout.bind(nt));
}
const ox = 1.33;
function ix(e) {
  return typeof e == "string" ? sx(e) : Math.ceil((e.byteLength || e.size) * ox);
}
function sx(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function sl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ax(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function cx(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class ux extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class pa extends Le {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Ko(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new ux(n, t, r)), this;
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
    const t = ha(n, this.socket.binaryType);
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
    const t = ax(n);
    return t.length ? "?" + t : "";
  }
}
class lx extends pa {
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
    Zd(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Kd(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = sl()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let al = !1;
try {
  al = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const fx = al;
function dx() {
}
class xx extends lx {
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
let En = class co extends Le {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, Ko(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = il(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = co.requestsCount++, co.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = dx, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete co.requests[this._index], this._xhr = null;
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
En.requestsCount = 0;
En.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", uc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in nt ? "pagehide" : "unload";
    addEventListener(e, uc, !1);
  }
}
function uc() {
  for (let e in En.requests)
    En.requests.hasOwnProperty(e) && En.requests[e].abort();
}
const hx = function() {
  const e = cl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class px extends xx {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = hx && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new En(cl, this.uri(), n);
  }
}
function cl(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || fx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new nt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const ul = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class mx extends pa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = ul ? {} : il(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      xa(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && $o(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = sl()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const Ri = nt.WebSocket || nt.MozWebSocket;
class gx extends mx {
  createSocket(n, t, r) {
    return ul ? new Ri(n, t, r) : t ? new Ri(n, t) : new Ri(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class vx extends pa {
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
        const t = Qd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = Jd();
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
        o && $o(() => {
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
const yx = {
  websocket: gx,
  webtransport: vx,
  polling: px
}, bx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Sx = [
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
function rs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = bx.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Sx[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = wx(i, i.path), i.queryKey = Ex(i, i.query), i;
}
function wx(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Ex(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const os = typeof addEventListener == "function" && typeof removeEventListener == "function", uo = [];
os && addEventListener("offline", () => {
  uo.forEach((e) => e());
}, !1);
class zt extends Le {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = tx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = rs(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = rs(t.host).host);
    Ko(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = cx(this.opts.query)), os && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, uo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = ol, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && zt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", zt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += ix(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, $o(() => {
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
    if (zt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), os && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = uo.indexOf(this._offlineEventListener);
        r !== -1 && uo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
zt.protocol = ol;
class _x extends zt {
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
    zt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            zt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (l(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const p = new Error("probe error");
            p.transport = t.name, this.emitReserved("upgradeError", p);
          }
      }));
    };
    function i() {
      r || (r = !0, l(), t.close(), t = null);
    }
    const s = (d) => {
      const p = new Error("probe error: " + d);
      p.transport = t.name, i(), this.emitReserved("upgradeError", p);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function u(d) {
      t && d.name !== t.name && i();
    }
    const l = () => {
      t.removeListener("open", o), t.removeListener("error", s), t.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    t.once("open", o), t.once("error", s), t.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
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
let Cx = class extends _x {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => yx[o]).filter((o) => !!o)), super(n, r);
  }
};
function Ax(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = rs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const Tx = typeof ArrayBuffer == "function", Ox = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, ll = Object.prototype.toString, Rx = typeof Blob == "function" || typeof Blob < "u" && ll.call(Blob) === "[object BlobConstructor]", kx = typeof File == "function" || typeof File < "u" && ll.call(File) === "[object FileConstructor]";
function ma(e) {
  return Tx && (e instanceof ArrayBuffer || Ox(e)) || Rx && e instanceof Blob || kx && e instanceof File;
}
function lo(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (lo(e[t]))
        return !0;
    return !1;
  }
  if (ma(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return lo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && lo(e[t]))
      return !0;
  return !1;
}
function Px(e) {
  const n = [], t = e.data, r = e;
  return r.data = is(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function is(e, n) {
  if (!e)
    return e;
  if (ma(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = is(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = is(e[r], n));
    return t;
  }
  return e;
}
function Ix(e, n) {
  return e.data = ss(e.data, n), delete e.attachments, e;
}
function ss(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = ss(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = ss(e[t], n));
  return e;
}
const Nx = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], jx = 5;
var fe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
class Dx {
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
    return (n.type === fe.EVENT || n.type === fe.ACK) && lo(n) ? this.encodeAsBinary({
      type: n.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
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
    return (n.type === fe.BINARY_EVENT || n.type === fe.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = Px(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function lc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ga extends Le {
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
      const r = t.type === fe.BINARY_EVENT;
      r || t.type === fe.BINARY_ACK ? (t.type = r ? fe.EVENT : fe.ACK, this.reconstructor = new Mx(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ma(n) || n.base64)
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
    if (fe[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === fe.BINARY_EVENT || r.type === fe.BINARY_ACK) {
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
      if (ga.isPayloadValid(r.type, i))
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
      case fe.CONNECT:
        return lc(t);
      case fe.DISCONNECT:
        return t === void 0;
      case fe.CONNECT_ERROR:
        return typeof t == "string" || lc(t);
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Nx.indexOf(t[0]) === -1);
      case fe.ACK:
      case fe.BINARY_ACK:
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
class Mx {
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
      const t = Ix(this.reconPack, this.buffers);
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
const Lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ga,
  Encoder: Dx,
  get PacketType() {
    return fe;
  },
  protocol: jx
}, Symbol.toStringTag, { value: "Module" }));
function it(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Bx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class fl extends Le {
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
      it(n, "open", this.onopen.bind(this)),
      it(n, "packet", this.onpacket.bind(this)),
      it(n, "error", this.onerror.bind(this)),
      it(n, "close", this.onclose.bind(this))
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
    if (Bx.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: fe.EVENT,
      data: t
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const l = this.ids++, d = t.pop();
      this._registerAckCallback(l, d), s.id = l;
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
      type: fe.CONNECT,
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
        case fe.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(n);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(n);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
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
        type: fe.ACK,
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
    return this.connected && this.packet({ type: fe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Ln(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Ln.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
Ln.prototype.reset = function() {
  this.attempts = 0;
};
Ln.prototype.setMin = function(e) {
  this.ms = e;
};
Ln.prototype.setMax = function(e) {
  this.max = e;
};
Ln.prototype.setJitter = function(e) {
  this.jitter = e;
};
class as extends Le {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Ko(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Ln({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || Lx;
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
    this.engine = new Cx(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = it(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = it(t, "error", i);
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
      it(n, "ping", this.onping.bind(this)),
      it(n, "data", this.ondata.bind(this)),
      it(n, "error", this.onerror.bind(this)),
      it(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      it(this.decoder, "decoded", this.ondecoded.bind(this))
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
    $o(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new fl(this, n, t), this.nsps[n] = r), r;
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
const Jn = {};
function fo(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = Ax(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = Jn[o] && i in Jn[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new as(r, n) : (Jn[o] || (Jn[o] = new as(r, n)), c = Jn[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(fo, {
  Manager: as,
  Socket: fl,
  io: fo,
  connect: fo
});
var ki = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var fc;
function Fx() {
  return fc || (fc = 1, function(e) {
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
var zx = Fx();
const We = /* @__PURE__ */ O0(zx);
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, wt.apply(null, arguments);
}
function be(e) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, be(e);
}
var Vx = Symbol.for("react.element"), Hx = Symbol.for("react.transitional.element"), Ux = Symbol.for("react.fragment");
function qx(e) {
  return (
    // Base object type
    e && be(e) === "object" && // React Element type
    (e.$$typeof === Vx || e.$$typeof === Hx) && // React Fragment type
    e.type === Ux
  );
}
var cs = {}, va = [], Wx = function(n) {
  va.push(n);
};
function ya(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = va.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Yx(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = va.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function dl() {
  cs = {};
}
function xl(e, n, t) {
  !n && !cs[t] && (e(!1, t), cs[t] = !0);
}
function Kt(e, n) {
  xl(ya, e, n);
}
function Xx(e, n) {
  xl(Yx, e, n);
}
Kt.preMessage = Wx;
Kt.resetWarned = dl;
Kt.noteOnce = Xx;
function Gx(e, n) {
  if (be(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function hl(e) {
  var n = Gx(e, "string");
  return be(n) == "symbol" ? n : n + "";
}
function U(e, n, t) {
  return (n = hl(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function dc(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function z(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dc(Object(t), !0).forEach(function(r) {
      U(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function xc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function $x(e) {
  return e && be(e) === "object" && xc(e.nativeElement) ? e.nativeElement : xc(e) ? e : null;
}
function Kx(e) {
  var n = $x(e);
  if (n)
    return n;
  if (e instanceof Ne.Component) {
    var t;
    return (t = Ba.findDOMNode) === null || t === void 0 ? void 0 : t.call(Ba, e);
  }
  return null;
}
var Yr = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function Zx() {
  if (hc) return ge;
  hc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), f;
  f = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var _ = m.$$typeof;
      switch (_) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case r:
            case u:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case c:
                case p:
                case d:
                case i:
                  return m;
                default:
                  return _;
              }
          }
        case n:
          return _;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = c, ge.Fragment = t, ge.Lazy = p, ge.Memo = d, ge.Portal = n, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = u, ge.SuspenseList = l, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(m) {
    return y(m) === s;
  }, ge.isContextProvider = function(m) {
    return y(m) === i;
  }, ge.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ge.isForwardRef = function(m) {
    return y(m) === c;
  }, ge.isFragment = function(m) {
    return y(m) === t;
  }, ge.isLazy = function(m) {
    return y(m) === p;
  }, ge.isMemo = function(m) {
    return y(m) === d;
  }, ge.isPortal = function(m) {
    return y(m) === n;
  }, ge.isProfiler = function(m) {
    return y(m) === o;
  }, ge.isStrictMode = function(m) {
    return y(m) === r;
  }, ge.isSuspense = function(m) {
    return y(m) === u;
  }, ge.isSuspenseList = function(m) {
    return y(m) === l;
  }, ge.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === u || m === l || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === d || m.$$typeof === i || m.$$typeof === s || m.$$typeof === c || m.$$typeof === f || m.getModuleId !== void 0);
  }, ge.typeOf = y, ge;
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
var pc;
function Jx() {
  return pc || (pc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), f = !1, y = !1, m = !1, _ = !1, w = !1, C;
    C = Symbol.for("react.module.reference");
    function k(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || w || L === r || L === u || L === l || _ || L === h || f || y || m || typeof L == "object" && L !== null && (L.$$typeof === p || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === C || L.getModuleId !== void 0));
    }
    function v(L) {
      if (typeof L == "object" && L !== null) {
        var le = L.$$typeof;
        switch (le) {
          case e:
            var X = L.type;
            switch (X) {
              case t:
              case o:
              case r:
              case u:
              case l:
                return X;
              default:
                var pe = X && X.$$typeof;
                switch (pe) {
                  case a:
                  case s:
                  case c:
                  case p:
                  case d:
                  case i:
                    return pe;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var O = s, E = i, j = e, B = c, W = t, re = p, G = d, M = n, V = o, F = r, ne = u, J = l, Z = !1, $ = !1;
    function oe(L) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(L) {
      return $ || ($ = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(L) {
      return v(L) === s;
    }
    function ee(L) {
      return v(L) === i;
    }
    function de(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function ue(L) {
      return v(L) === c;
    }
    function he(L) {
      return v(L) === t;
    }
    function A(L) {
      return v(L) === p;
    }
    function P(L) {
      return v(L) === d;
    }
    function N(L) {
      return v(L) === n;
    }
    function b(L) {
      return v(L) === o;
    }
    function x(L) {
      return v(L) === r;
    }
    function S(L) {
      return v(L) === u;
    }
    function q(L) {
      return v(L) === l;
    }
    ve.ContextConsumer = O, ve.ContextProvider = E, ve.Element = j, ve.ForwardRef = B, ve.Fragment = W, ve.Lazy = re, ve.Memo = G, ve.Portal = M, ve.Profiler = V, ve.StrictMode = F, ve.Suspense = ne, ve.SuspenseList = J, ve.isAsyncMode = oe, ve.isConcurrentMode = Q, ve.isContextConsumer = K, ve.isContextProvider = ee, ve.isElement = de, ve.isForwardRef = ue, ve.isFragment = he, ve.isLazy = A, ve.isMemo = P, ve.isPortal = N, ve.isProfiler = b, ve.isStrictMode = x, ve.isSuspense = S, ve.isSuspenseList = q, ve.isValidElementType = k, ve.typeOf = v;
  }()), ve;
}
var mc;
function Qx() {
  return mc || (mc = 1, process.env.NODE_ENV === "production" ? Yr.exports = Zx() : Yr.exports = Jx()), Yr.exports;
}
var Pi = Qx();
function pl(e, n, t) {
  var r = T.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var eh = Number(_0.split(".")[0]), ml = function(n, t) {
  typeof n == "function" ? n(t) : be(n) === "object" && n && "current" in n && (n.current = t);
}, th = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      ml(s, i);
    });
  };
}, nh = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (gl(n) && eh >= 19)
    return !0;
  var o = Pi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Pi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== Pi.ForwardRef);
};
function gl(e) {
  return /* @__PURE__ */ E0(e) && !qx(e);
}
var rh = function(n) {
  if (n && gl(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function xt(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function gc(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, hl(r.key), r);
  }
}
function ht(e, n, t) {
  return n && gc(e.prototype, n), t && gc(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function us(e, n) {
  return us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, us(e, n);
}
function Tr(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && us(e, n);
}
function Pn(e) {
  return Pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pn(e);
}
function ba() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ba = function() {
    return !!e;
  })();
}
function un(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vl(e, n) {
  if (n && (be(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return un(e);
}
function Zo(e) {
  var n = ba();
  return function() {
    var t, r = Pn(e);
    if (n) {
      var o = Pn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return vl(this, t);
  };
}
function ls(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function oh(e) {
  if (Array.isArray(e)) return ls(e);
}
function yl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sa(e, n) {
  if (e) {
    if (typeof e == "string") return ls(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ls(e, n) : void 0;
  }
}
function ih() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rt(e) {
  return oh(e) || yl(e) || Sa(e) || ih();
}
var bl = function(n) {
  return +setTimeout(n, 16);
}, Sl = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (bl = function(n) {
  return window.requestAnimationFrame(n);
}, Sl = function(n) {
  return window.cancelAnimationFrame(n);
});
var vc = 0, Jo = /* @__PURE__ */ new Map();
function wl(e) {
  Jo.delete(e);
}
var To = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vc += 1;
  var r = vc;
  function o(i) {
    if (i === 0)
      wl(r), n();
    else {
      var s = bl(function() {
        o(i - 1);
      });
      Jo.set(r, s);
    }
  }
  return o(t), r;
};
To.cancel = function(e) {
  var n = Jo.get(e);
  return wl(e), Sl(n);
};
process.env.NODE_ENV !== "production" && (To.ids = function() {
  return Jo;
});
function El(e) {
  if (Array.isArray(e)) return e;
}
function sh(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, o, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (r = i.call(t)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (l) {
      u = !0, o = l;
    } finally {
      try {
        if (!c && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function _l() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return El(e) || sh(e, n) || Sa(e, n) || _l();
}
function yr(e) {
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
function Pt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ah(e, n) {
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
var yc = "data-rc-order", bc = "data-rc-priority", ch = "rc-util-key", fs = /* @__PURE__ */ new Map();
function Cl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : ch;
}
function Qo(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function uh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function wa(e) {
  return Array.from((fs.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Al(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Pt())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = uh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(yc, s), a && i && c.setAttribute(bc, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var u = Qo(n), l = u.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || wa(u)).filter(function(p) {
        if (!["prepend", "prependQueue"].includes(p.getAttribute(yc)))
          return !1;
        var h = Number(p.getAttribute(bc) || 0);
        return i >= h;
      });
      if (d.length)
        return u.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    u.insertBefore(c, l);
  } else
    u.appendChild(c);
  return c;
}
function Tl(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Qo(n);
  return (n.styles || wa(t)).find(function(r) {
    return r.getAttribute(Cl(n)) === e;
  });
}
function Ol(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Tl(e, n);
  if (t) {
    var r = Qo(n);
    r.removeChild(t);
  }
}
function lh(e, n) {
  var t = fs.get(e);
  if (!t || !ah(document, t)) {
    var r = Al("", n), o = r.parentNode;
    fs.set(e, o), e.removeChild(r);
  }
}
function ln(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qo(t), o = wa(r), i = z(z({}, t), {}, {
    styles: o
  });
  lh(r, i);
  var s = Tl(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      s.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var l = Al(e, i);
  return l.setAttribute(Cl(i), n), l;
}
function fh(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function br(e, n) {
  if (e == null) return {};
  var t, r, o = fh(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function dh(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (Kt(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (t && a > 1)
      return !1;
    r.add(i);
    var u = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var l = 0; l < i.length; l++)
        if (!o(i[l], s[l], u))
          return !1;
      return !0;
    }
    if (i && s && be(i) === "object" && be(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(p) {
        return o(i[p], s[p], u);
      });
    }
    return !1;
  }
  return o(e, n);
}
var xh = "%";
function ds(e) {
  return e.join(xh);
}
var hh = /* @__PURE__ */ function() {
  function e(n) {
    xt(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return ht(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(ds(t));
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
      return this.opUpdate(ds(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), In = "data-token-hash", lt = "data-css-hash", ph = "data-cache-path", Bt = "__cssinjs_instance__";
function mh() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(lt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Bt] = o[Bt] || e, o[Bt] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(lt, "]"))).forEach(function(o) {
      var i = o.getAttribute(lt);
      if (r[i]) {
        if (o[Bt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new hh(e);
}
var Or = /* @__PURE__ */ T.createContext({
  hashPriority: "low",
  cache: mh(),
  defaultCache: !0
});
function gh(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Ea = /* @__PURE__ */ function() {
  function e() {
    xt(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return ht(e, [{
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
          var i = this.keys.reduce(function(u, l) {
            var d = ae(u, 2), p = d[1];
            return o.internalGet(l)[1] < p ? [l, o.internalGet(l)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), s = ae(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(t);
      }
      var c = this.cache;
      t.forEach(function(u, l) {
        if (l === t.length - 1)
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
          return !gh(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
U(Ea, "MAX_CACHE_SIZE", 20);
U(Ea, "MAX_CACHE_OFFSET", 5);
var Sc = 0, Rl = /* @__PURE__ */ function() {
  function e(n) {
    xt(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Sc, n.length === 0 && ya(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Sc += 1;
  }
  return ht(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), Ii = new Ea();
function xs(e) {
  var n = Array.isArray(e) ? e : [e];
  return Ii.has(n) || Ii.set(n, new Rl(n)), Ii.get(n);
}
var vh = /* @__PURE__ */ new WeakMap(), Ni = {};
function yh(e, n) {
  for (var t = vh, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(Ni) || t.set(Ni, e()), t.get(Ni);
}
var wc = /* @__PURE__ */ new WeakMap();
function mr(e) {
  var n = wc.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof Rl ? n += r.id : r && be(r) === "object" ? n += mr(r) : n += r;
  }), n = yr(n), wc.set(e, n)), n;
}
function Ec(e, n) {
  return yr("".concat(n, "_").concat(mr(e)));
}
var hs = Pt();
function Oo(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ro(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = z(z({}, o), {}, (r = {}, U(r, In, n), U(r, lt, t), r)), a = Object.keys(s).map(function(c) {
    var u = s[c];
    return u ? "".concat(c, '="').concat(u, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var xo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, bh = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, kl = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, u = ae(s, 2), l = u[0], d = u[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[l])
      i[l] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[l])) {
      var p, h = xo(l, r == null ? void 0 : r.prefix);
      o[h] = typeof d == "number" && !(r != null && (p = r.unitless) !== null && p !== void 0 && p[l]) ? "".concat(d, "px") : String(d), i[l] = "var(".concat(h, ")");
    }
  }), [i, bh(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, _c = process.env.NODE_ENV !== "test" && Pt() ? T.useLayoutEffect : T.useEffect, Pl = function(n, t) {
  var r = T.useRef(!0);
  _c(function() {
    return n(r.current);
  }, t), _c(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Sh = z({}, T), Cc = Sh.useInsertionEffect, wh = function(n, t, r) {
  T.useMemo(n, r), Pl(function() {
    return t(!0);
  }, r);
}, Eh = Cc ? function(e, n, t) {
  return Cc(function() {
    return e(), n();
  }, t);
} : wh, _h = z({}, T), Ch = _h.useInsertionEffect, Ah = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ya(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return T.useEffect(function() {
    return r = !1, function() {
      r = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, Th = function() {
  return function(n) {
    n();
  };
}, Oh = typeof Ch < "u" ? Ah : Th;
function Rh() {
  return !1;
}
var ps = !1;
function kh() {
  return ps;
}
const Ph = process.env.NODE_ENV === "production" ? Rh : kh;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Xr && typeof Xr.webpackHotUpdate == "function") {
    var Ih = Xr.webpackHotUpdate;
    Xr.webpackHotUpdate = function() {
      return ps = !0, setTimeout(function() {
        ps = !1;
      }, 0), Ih.apply(void 0, arguments);
    };
  }
}
function _a(e, n, t, r, o) {
  var i = T.useContext(Or), s = i.cache, a = [e].concat(Rt(n)), c = ds(a), u = Oh([c]), l = Ph(), d = function(y) {
    s.opUpdate(c, function(m) {
      var _ = m || [void 0, void 0], w = ae(_, 2), C = w[0], k = C === void 0 ? 0 : C, v = w[1], O = v;
      process.env.NODE_ENV !== "production" && v && l && (r == null || r(O, l), O = null);
      var E = O || t(), j = [k, E];
      return y ? y(j) : j;
    });
  };
  T.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var p = s.opGet(c);
  process.env.NODE_ENV !== "production" && !p && (d(), p = s.opGet(c));
  var h = p[1];
  return Eh(function() {
    o == null || o(h);
  }, function(f) {
    return d(function(y) {
      var m = ae(y, 2), _ = m[0], w = m[1];
      return f && _ === 0 && (o == null || o(h)), [_ + 1, w];
    }), function() {
      s.opUpdate(c, function(y) {
        var m = y || [], _ = ae(m, 2), w = _[0], C = w === void 0 ? 0 : w, k = _[1], v = C - 1;
        return v === 0 ? (u(function() {
          (f || !s.opGet(c)) && (r == null || r(k, !1));
        }), null) : [C - 1, k];
      });
    };
  }, [c]), h;
}
var Nh = {}, jh = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", rn = /* @__PURE__ */ new Map();
function Dh(e) {
  rn.set(e, (rn.get(e) || 0) + 1);
}
function Mh(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(In, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[Bt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Lh = 0;
function Bh(e, n) {
  rn.set(e, (rn.get(e) || 0) - 1);
  var t = Array.from(rn.keys()), r = t.filter(function(o) {
    var i = rn.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > Lh && r.forEach(function(o) {
    Mh(o, n), rn.delete(o);
  });
}
var Fh = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = z(z({}, i), t);
  return o && (s = o(s)), s;
}, Il = "token";
function zh(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Vt(Or), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, u = c === void 0 ? Nh : c, l = t.formatToken, d = t.getComputedToken, p = t.cssVar, h = yh(function() {
    return Object.assign.apply(Object, [{}].concat(Rt(n)));
  }, n), f = mr(h), y = mr(u), m = p ? mr(p) : "", _ = _a(Il, [a, e.id, f, y, m], function() {
    var w, C = d ? d(h, u, e) : Fh(h, u, e, l), k = z({}, C), v = "";
    if (p) {
      var O = kl(C, p.key, {
        prefix: p.prefix,
        ignore: p.ignore,
        unitless: p.unitless,
        preserve: p.preserve
      }), E = ae(O, 2);
      C = E[0], v = E[1];
    }
    var j = Ec(C, a);
    C._tokenKey = j, k._tokenKey = Ec(k, a);
    var B = (w = p == null ? void 0 : p.key) !== null && w !== void 0 ? w : j;
    C._themeKey = B, Dh(B);
    var W = "".concat(jh, "-").concat(yr(j));
    return C._hashId = W, [C, W, k, v, (p == null ? void 0 : p.key) || ""];
  }, function(w) {
    Bh(w[0]._themeKey, o);
  }, function(w) {
    var C = ae(w, 4), k = C[0], v = C[3];
    if (p && v) {
      var O = ln(v, yr("css-variables-".concat(k._themeKey)), {
        mark: lt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Bt] = o, O.setAttribute(In, k._themeKey);
    }
  });
  return _;
}
var Vh = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, u = c.plain;
  if (!s)
    return null;
  var l = i._tokenKey, d = -999, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = Ro(s, a, l, p, u);
  return [d, l, h];
}, Hh = {
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
}, Nl = "comm", jl = "rule", Dl = "decl", Uh = "@import", qh = "@namespace", Wh = "@keyframes", Yh = "@layer", Ml = Math.abs, Ca = String.fromCharCode;
function Ll(e) {
  return e.trim();
}
function ho(e, n, t) {
  return e.replace(n, t);
}
function Xh(e, n, t) {
  return e.indexOf(n, t);
}
function _n(e, n) {
  return e.charCodeAt(n) | 0;
}
function Nn(e, n, t) {
  return e.slice(n, t);
}
function vt(e) {
  return e.length;
}
function Gh(e) {
  return e.length;
}
function Gr(e, n) {
  return n.push(e), e;
}
var ei = 1, jn = 1, Bl = 0, ot = 0, Me = 0, Bn = "";
function Aa(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: ei, column: jn, length: s, return: "", siblings: a };
}
function $h() {
  return Me;
}
function Kh() {
  return Me = ot > 0 ? _n(Bn, --ot) : 0, jn--, Me === 10 && (jn = 1, ei--), Me;
}
function ft() {
  return Me = ot < Bl ? _n(Bn, ot++) : 0, jn++, Me === 10 && (jn = 1, ei++), Me;
}
function Ft() {
  return _n(Bn, ot);
}
function po() {
  return ot;
}
function ti(e, n) {
  return Nn(Bn, e, n);
}
function Sr(e) {
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
function Zh(e) {
  return ei = jn = 1, Bl = vt(Bn = e), ot = 0, [];
}
function Jh(e) {
  return Bn = "", e;
}
function ji(e) {
  return Ll(ti(ot - 1, ms(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qh(e) {
  for (; (Me = Ft()) && Me < 33; )
    ft();
  return Sr(e) > 2 || Sr(Me) > 3 ? "" : " ";
}
function ep(e, n) {
  for (; --n && ft() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return ti(e, po() + (n < 6 && Ft() == 32 && ft() == 32));
}
function ms(e) {
  for (; ft(); )
    switch (Me) {
      // ] ) " '
      case e:
        return ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ms(Me);
        break;
      // (
      case 40:
        e === 41 && ms(e);
        break;
      // \
      case 92:
        ft();
        break;
    }
  return ot;
}
function tp(e, n) {
  for (; ft() && e + Me !== 57; )
    if (e + Me === 84 && Ft() === 47)
      break;
  return "/*" + ti(n, ot - 1) + "*" + Ca(e === 47 ? e : ft());
}
function np(e) {
  for (; !Sr(Ft()); )
    ft();
  return ti(e, ot);
}
function rp(e) {
  return Jh(mo("", null, null, null, [""], e = Zh(e), 0, [0], e));
}
function mo(e, n, t, r, o, i, s, a, c) {
  for (var u = 0, l = 0, d = s, p = 0, h = 0, f = 0, y = 1, m = 1, _ = 1, w = 0, C = "", k = o, v = i, O = r, E = C; m; )
    switch (f = w, w = ft()) {
      // (
      case 40:
        if (f != 108 && _n(E, d - 1) == 58) {
          Xh(E += ho(ji(w), "&", "&\f"), "&\f", Ml(u ? a[u - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ji(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Qh(f);
        break;
      // \
      case 92:
        E += ep(po() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            Gr(op(tp(ft(), po()), n, t, c), c), (Sr(f || 1) == 5 || Sr(Ft() || 1) == 5) && vt(E) && Nn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * y:
        a[u++] = vt(E) * _;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + l:
            _ == -1 && (E = ho(E, /\f/g, "")), h > 0 && (vt(E) - d || y === 0 && f === 47) && Gr(h > 32 ? Tc(E + ";", r, t, d - 1, c) : Tc(ho(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Gr(O = Ac(E, n, t, u, l, o, a, C, k = [], v = [], d, i), i), w === 123)
              if (l === 0)
                mo(E, n, O, O, k, i, d, a, v);
              else {
                switch (p) {
                  // c(ontainer)
                  case 99:
                    if (_n(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (_n(E, 2) === 97) break;
                  default:
                    l = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                l ? mo(e, O, O, r && Gr(Ac(e, O, O, 0, 0, o, a, C, o, k = [], d, v), v), o, v, d, a, r ? k : v) : mo(E, O, O, O, [""], v, 0, a, v);
              }
        }
        u = l = h = 0, y = _ = 1, C = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + vt(E), h = f;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && Kh() == 125)
            continue;
        }
        switch (E += Ca(w), w * y) {
          // &
          case 38:
            _ = l > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (vt(E) - 1) * _, _ = 1;
            break;
          // @
          case 64:
            Ft() === 45 && (E += ji(ft())), p = Ft(), l = d = vt(C = E += np(po())), w++;
            break;
          // -
          case 45:
            f === 45 && vt(E) == 2 && (y = 0);
        }
    }
  return i;
}
function Ac(e, n, t, r, o, i, s, a, c, u, l, d) {
  for (var p = o - 1, h = o === 0 ? i : [""], f = Gh(h), y = 0, m = 0, _ = 0; y < r; ++y)
    for (var w = 0, C = Nn(e, p + 1, p = Ml(m = s[y])), k = e; w < f; ++w)
      (k = Ll(m > 0 ? h[w] + " " + C : ho(C, /&\f/g, h[w]))) && (c[_++] = k);
  return Aa(e, n, t, o === 0 ? jl : a, c, u, l, d);
}
function op(e, n, t, r) {
  return Aa(e, n, t, Nl, Ca($h()), Nn(e, 2, -2), 0, r);
}
function Tc(e, n, t, r, o) {
  return Aa(e, n, t, Dl, Nn(e, 0, r), Nn(e, r + 1, -1), r, o);
}
function gs(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function ip(e, n, t, r) {
  switch (e.type) {
    case Yh:
      if (e.children.length) break;
    case Uh:
    case qh:
    case Dl:
      return e.return = e.return || e.value;
    case Nl:
      return "";
    case Wh:
      return e.return = e.value + "{" + gs(e.children, r) + "}";
    case jl:
      if (!vt(e.value = e.props.join(","))) return "";
  }
  return vt(t = gs(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Fl(e, n) {
  var t = n.path, r = n.parentSelectors;
  Kt(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var sp = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Fl("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, ap = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Fl("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Oc = "data-ant-cssinjs-cache-path", zl = "_FILE_STYLE__", fn, Vl = !0;
function cp() {
  if (!fn && (fn = {}, Pt())) {
    var e = document.createElement("div");
    e.className = Oc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      fn[a] = c;
    });
    var t = document.querySelector("style[".concat(Oc, "]"));
    if (t) {
      var r;
      Vl = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function up(e) {
  return cp(), !!fn[e];
}
function lp(e) {
  var n = fn[e], t = null;
  if (n && Pt())
    if (Vl)
      t = zl;
    else {
      var r = document.querySelector("style[".concat(lt, '="').concat(fn[e], '"]'));
      r ? t = r.innerHTML : delete fn[e];
    }
  return [t, n];
}
var Hl = "_skip_check_", Ul = "_multi_value_";
function go(e) {
  var n = gs(rp(e), ip);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function fp(e) {
  return be(e) === "object" && e && (Hl in e || Ul in e);
}
function Rc(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), u = c[0] || "", l = ((a = u.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return u = "".concat(l).concat(o).concat(u.slice(l.length)), [u].concat(Rt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var dp = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, u = t.path, l = t.hashPriority, d = t.transformers, p = d === void 0 ? [] : d, h = t.linters, f = h === void 0 ? [] : h, y = "", m = {};
  function _(k) {
    var v = k.getName(a);
    if (!m[v]) {
      var O = e(k.style, t, {
        root: !1,
        parentSelectors: s
      }), E = ae(O, 1), j = E[0];
      m[v] = "@keyframes ".concat(k.getName(a)).concat(j);
    }
  }
  function w(k) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return k.forEach(function(O) {
      Array.isArray(O) ? w(O, v) : O && v.push(O);
    }), v;
  }
  var C = w(Array.isArray(n) ? n : [n]);
  return C.forEach(function(k) {
    var v = typeof k == "string" && !o ? {} : k;
    if (typeof v == "string")
      y += "".concat(v, `
`);
    else if (v._keyframe)
      _(v);
    else {
      var O = p.reduce(function(E, j) {
        var B;
        return (j == null || (B = j.visit) === null || B === void 0 ? void 0 : B.call(j, E)) || E;
      }, v);
      Object.keys(O).forEach(function(E) {
        var j = O[E];
        if (be(j) === "object" && j && (E !== "animationName" || !j._keyframe) && !fp(j)) {
          var B = !1, W = E.trim(), re = !1;
          (o || i) && a ? W.startsWith("@") ? B = !0 : W === "&" ? W = Rc("", a, l) : W = Rc(E, a, l) : o && !a && (W === "&" || W === "") && (W = "", re = !0);
          var G = e(j, t, {
            root: re,
            injectHash: B,
            parentSelectors: [].concat(Rt(s), [W])
          }), M = ae(G, 2), V = M[0], F = M[1];
          m = z(z({}, m), F), y += "".concat(W).concat(V);
        } else {
          let Z = function($, oe) {
            process.env.NODE_ENV !== "production" && (be(j) !== "object" || !(j != null && j[Hl])) && [sp, ap].concat(Rt(f)).forEach(function(ee) {
              return ee($, oe, {
                path: u,
                hashId: a,
                parentSelectors: s
              });
            });
            var Q = $.replace(/[A-Z]/g, function(ee) {
              return "-".concat(ee.toLowerCase());
            }), K = oe;
            !Hh[$] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), $ === "animationName" && oe !== null && oe !== void 0 && oe._keyframe && (_(oe), K = oe.getName(a)), y += "".concat(Q, ":").concat(K, ";");
          };
          var ne, J = (ne = j == null ? void 0 : j.value) !== null && ne !== void 0 ? ne : j;
          be(j) === "object" && j !== null && j !== void 0 && j[Ul] && Array.isArray(J) ? J.forEach(function($) {
            Z(E, $);
          }) : Z(E, J);
        }
      });
    }
  }), o ? c && (y && (y = "@layer ".concat(c.name, " {").concat(y, "}")), c.dependencies && (m["@layer ".concat(c.name)] = c.dependencies.map(function(k) {
    return "@layer ".concat(k, ", ").concat(c.name, ";");
  }).join(`
`))) : y = "{".concat(y, "}"), [y, m];
};
function ql(e, n) {
  return yr("".concat(e.join("%")).concat(n));
}
function xp() {
  return null;
}
var Wl = "style";
function vs(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, l = T.useContext(Or), d = l.autoClear, p = l.mock, h = l.defaultCache, f = l.hashPriority, y = l.container, m = l.ssrInline, _ = l.transformers, w = l.linters, C = l.cache, k = l.layer, v = t._tokenKey, O = [v];
  k && O.push("layer"), O.push.apply(O, Rt(r));
  var E = hs;
  process.env.NODE_ENV !== "production" && p !== void 0 && (E = p === "client");
  var j = _a(
    Wl,
    O,
    // Create cache if needed
    function() {
      var M = O.join("|");
      if (up(M)) {
        var V = lp(M), F = ae(V, 2), ne = F[0], J = F[1];
        if (ne)
          return [ne, v, J, {}, a, u];
      }
      var Z = n(), $ = dp(Z, {
        hashId: o,
        hashPriority: f,
        layer: k ? i : void 0,
        path: r.join("-"),
        transformers: _,
        linters: w
      }), oe = ae($, 2), Q = oe[0], K = oe[1], ee = go(Q), de = ql(O, ee);
      return [ee, v, de, K, a, u];
    },
    // Remove cache if no need
    function(M, V) {
      var F = ae(M, 3), ne = F[2];
      (V || d) && hs && Ol(ne, {
        mark: lt
      });
    },
    // Effect: Inject style here
    function(M) {
      var V = ae(M, 4), F = V[0];
      V[1];
      var ne = V[2], J = V[3];
      if (E && F !== zl) {
        var Z = {
          mark: lt,
          prepend: k ? !1 : "queue",
          attachTo: y,
          priority: u
        }, $ = typeof s == "function" ? s() : s;
        $ && (Z.csp = {
          nonce: $
        });
        var oe = [], Q = [];
        Object.keys(J).forEach(function(ee) {
          ee.startsWith("@layer") ? oe.push(ee) : Q.push(ee);
        }), oe.forEach(function(ee) {
          ln(go(J[ee]), "_layer-".concat(ee), z(z({}, Z), {}, {
            prepend: !0
          }));
        });
        var K = ln(F, ne, Z);
        K[Bt] = C.instanceId, K.setAttribute(In, v), process.env.NODE_ENV !== "production" && K.setAttribute(ph, O.join("|")), Q.forEach(function(ee) {
          ln(go(J[ee]), "_effect-".concat(ee), Z);
        });
      }
    }
  ), B = ae(j, 3), W = B[0], re = B[1], G = B[2];
  return function(M) {
    var V;
    if (!m || E || !h)
      V = /* @__PURE__ */ T.createElement(xp, null);
    else {
      var F;
      V = /* @__PURE__ */ T.createElement("style", wt({}, (F = {}, U(F, In, re), U(F, lt, G), F), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ T.createElement(T.Fragment, null, V, M);
  };
}
var hp = function(n, t, r) {
  var o = ae(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], u = o[4], l = o[5], d = r || {}, p = d.plain;
  if (u)
    return null;
  var h = i, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  };
  return h = Ro(i, s, a, f, p), c && Object.keys(c).forEach(function(y) {
    if (!t[y]) {
      t[y] = !0;
      var m = go(c[y]), _ = Ro(m, s, "_effect-".concat(y), f, p);
      y.startsWith("@layer") ? h = _ + h : h += _;
    }
  }), [l, a, h];
}, Yl = "cssVar", pp = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, u = c === void 0 ? "" : c, l = Vt(Or), d = l.cache.instanceId, p = l.container, h = a._tokenKey, f = [].concat(Rt(n.path), [r, u, h]), y = _a(Yl, f, function() {
    var m = t(), _ = kl(m, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: u
    }), w = ae(_, 2), C = w[0], k = w[1], v = ql(f, k);
    return [C, k, v, r];
  }, function(m) {
    var _ = ae(m, 3), w = _[2];
    hs && Ol(w, {
      mark: lt
    });
  }, function(m) {
    var _ = ae(m, 3), w = _[1], C = _[2];
    if (w) {
      var k = ln(w, C, {
        mark: lt,
        prepend: "queue",
        attachTo: p,
        priority: -999
      });
      k[Bt] = d, k.setAttribute(In, r);
    }
  });
  return y;
}, mp = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, u = c.plain;
  if (!i)
    return null;
  var l = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  }, p = Ro(i, a, s, d, u);
  return [l, s, p];
}, Qn;
Qn = {}, U(Qn, Wl, hp), U(Qn, Il, Vh), U(Qn, Yl, mp);
var Xl = /* @__PURE__ */ function() {
  function e(n, t) {
    xt(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return ht(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function bn(e) {
  return e.notSplit = !0, e;
}
bn(["borderTop", "borderBottom"]), bn(["borderTop"]), bn(["borderBottom"]), bn(["borderLeft", "borderRight"]), bn(["borderLeft"]), bn(["borderRight"]);
var Ta = /* @__PURE__ */ aa({});
function gp(e) {
  return El(e) || yl(e) || Sa(e) || _l();
}
function ys(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function Gl(e, n, t, r) {
  if (!n.length)
    return t;
  var o = gp(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Rt(e) : a = z({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Gl(a[i], s, t, r), a;
}
function Di(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !ys(e, n.slice(0, -1)) ? e : Gl(e, n, t, r);
}
function vp(e) {
  return be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function kc(e) {
  return Array.isArray(e) ? [] : {};
}
var yp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function bp() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = kc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), u = ys(o, s), l = Array.isArray(u);
      if (l || vp(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = ys(r, s);
          l ? r = Di(r, s, []) : (!d || be(d) !== "object") && (r = Di(r, s, kc(u))), yp(u).forEach(function(p) {
            i([].concat(Rt(s), [p]), c);
          });
        }
      } else
        r = Di(r, s, u);
    }
    i([]);
  }), r;
}
function $l() {
}
let Tt = null;
function Sp() {
  Tt = null, dl();
}
let Oa = $l;
process.env.NODE_ENV !== "production" && (Oa = (e, n, t) => {
  Kt(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && Sp();
});
const Kl = /* @__PURE__ */ T.createContext({}), Fn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = T.useContext(Kl), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Tt;
        Tt || (Tt = {}), Tt[e] = Tt[e] || [], Tt[e].includes(i || "") || Tt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Tt);
      } else
        process.env.NODE_ENV !== "production" && Oa(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = $l, e;
}, ni = Oa, wp = /* @__PURE__ */ aa(void 0), Qe = "${label} is not a valid ${type}", ri = {
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
        string: Qe,
        method: Qe,
        array: Qe,
        object: Qe,
        number: Qe,
        date: Qe,
        boolean: Qe,
        integer: Qe,
        float: Qe,
        regexp: Qe,
        email: Qe,
        url: Qe,
        hex: Qe
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
Object.assign({}, ri.Modal);
let vo = [];
const Pc = () => vo.reduce((e, n) => Object.assign(Object.assign({}, e), n), ri.Modal);
function Ep(e) {
  if (e) {
    const n = Object.assign({}, e);
    return vo.push(n), Pc(), () => {
      vo = vo.filter((t) => t !== n), Pc();
    };
  }
  Object.assign({}, ri.Modal);
}
const Zl = /* @__PURE__ */ aa(void 0), Jl = "internalMark", Ql = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = Fn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Jl, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  T.useEffect(() => Ep(n == null ? void 0 : n.Modal), [n]);
  const o = T.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ T.createElement(Zl.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Ql.displayName = "LocaleProvider");
const ef = {
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
}, wr = Object.assign(Object.assign({}, ef), {
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
}), Ve = Math.round;
function Mi(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ic = (e, n, t) => t === 0 ? e : e / 100;
function er(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Ie {
  constructor(n) {
    U(this, "isValid", !0), U(this, "r", 0), U(this, "g", 0), U(this, "b", 0), U(this, "a", 1), U(this, "_h", void 0), U(this, "_s", void 0), U(this, "_l", void 0), U(this, "_v", void 0), U(this, "_max", void 0), U(this, "_min", void 0), U(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Ie)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = er(n.r), this.g = er(n.g), this.b = er(n.b), this.a = typeof n.a == "number" ? er(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = Ve(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: Ve(i("r")),
      g: Ve(i("g")),
      b: Ve(i("b")),
      a: Ve(i("a") * 100) / 100
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => Ve((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = Ve(this.a * 255).toString(16);
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
    const n = this.getHue(), t = Ve(this.getSaturation() * 100), r = Ve(this.getLightness() * 100);
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
    return o[n] = er(t, r), o;
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
      const p = Ve(r * 255);
      this.r = p, this.g = p, this.b = p;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, u = (1 - Math.abs(2 * r - 1)) * t, l = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = u, s = l) : c >= 1 && c < 2 ? (i = l, s = u) : c >= 2 && c < 3 ? (s = u, a = l) : c >= 3 && c < 4 ? (s = l, a = u) : c >= 4 && c < 5 ? (i = l, a = u) : c >= 5 && c < 6 && (i = u, a = l);
    const d = r - u / 2;
    this.r = Ve((i + d) * 255), this.g = Ve((s + d) * 255), this.b = Ve((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ve(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, u = Ve(r * (1 - t) * 255), l = Ve(r * (1 - t * c) * 255), d = Ve(r * (1 - t * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = u;
        break;
      case 1:
        this.r = l, this.b = u;
        break;
      case 2:
        this.r = u, this.b = d;
        break;
      case 3:
        this.r = u, this.g = l;
        break;
      case 4:
        this.r = d, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = l;
        break;
    }
  }
  fromHsvString(n) {
    const t = Mi(n, Ic);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Mi(n, Ic);
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
      o.includes("%") ? Ve(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var $r = 2, Nc = 0.16, _p = 0.05, Cp = 0.05, Ap = 0.15, tf = 5, nf = 4, Tp = [{
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
function jc(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - $r * n : Math.round(e.h) + $r * n : r = t ? Math.round(e.h) + $r * n : Math.round(e.h) - $r * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Dc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Nc * n : n === nf ? r = e.s + Nc : r = e.s + _p * n, r > 1 && (r = 1), t && n === tf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Mc(e, n, t) {
  var r;
  return t ? r = e.v + Cp * n : r = e.v - Ap * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Er(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Ie(e), o = r.toHsv(), i = tf; i > 0; i -= 1) {
    var s = new Ie({
      h: jc(o, i, !0),
      s: Dc(o, i, !0),
      v: Mc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= nf; a += 1) {
    var c = new Ie({
      h: jc(o, a),
      s: Dc(o, a),
      v: Mc(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? Tp.map(function(u) {
    var l = u.index, d = u.amount;
    return new Ie(n.backgroundColor || "#141414").mix(t[l], d).toHexString();
  }) : t.map(function(u) {
    return u.toHexString();
  });
}
var Li = {
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
}, bs = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
bs.primary = bs[5];
var Ss = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ss.primary = Ss[5];
var ws = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ws.primary = ws[5];
var Es = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Es.primary = Es[5];
var _s = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
_s.primary = _s[5];
var Cs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Cs.primary = Cs[5];
var As = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
As.primary = As[5];
var Ts = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ts.primary = Ts[5];
var ko = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ko.primary = ko[5];
var Os = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Os.primary = Os[5];
var Rs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Rs.primary = Rs[5];
var ks = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ks.primary = ks[5];
var Ps = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ps.primary = Ps[5];
var Bi = {
  red: bs,
  volcano: Ss,
  orange: ws,
  gold: Es,
  yellow: _s,
  lime: Cs,
  green: As,
  cyan: Ts,
  blue: ko,
  geekblue: Os,
  purple: Rs,
  magenta: ks,
  grey: Ps
};
function Op(e, n) {
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
    colorBgBase: u,
    colorTextBase: l
  } = e, d = t(c), p = t(o), h = t(i), f = t(s), y = t(a), m = r(u, l), _ = e.colorLink || e.colorInfo, w = t(_), C = new Ie(f[1]).mix(new Ie(f[3]), 50).toHexString();
  return Object.assign(Object.assign({}, m), {
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
    colorSuccessBg: p[1],
    colorSuccessBgHover: p[2],
    colorSuccessBorder: p[3],
    colorSuccessBorderHover: p[4],
    colorSuccessHover: p[4],
    colorSuccess: p[6],
    colorSuccessActive: p[7],
    colorSuccessTextHover: p[8],
    colorSuccessText: p[9],
    colorSuccessTextActive: p[10],
    colorErrorBg: f[1],
    colorErrorBgHover: f[2],
    colorErrorBgFilledHover: C,
    colorErrorBgActive: f[3],
    colorErrorBorder: f[3],
    colorErrorBorderHover: f[4],
    colorErrorHover: f[5],
    colorError: f[6],
    colorErrorActive: f[7],
    colorErrorTextHover: f[8],
    colorErrorText: f[9],
    colorErrorTextActive: f[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorLinkHover: w[4],
    colorLink: w[6],
    colorLinkActive: w[7],
    colorBgMask: new Ie("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Rp = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function kp(e) {
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
  }, Rp(r));
}
const Pp = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function Ip(e) {
  return (e + 8) / e;
}
function Np(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: Ip(t)
  }));
}
const jp = (e) => {
  const n = Np(e), t = n.map((l) => l.size), r = n.map((l) => l.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], u = r[2];
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
function Dp(e) {
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
const tt = (e, n) => new Ie(e).setA(n).toRgbString(), tr = (e, n) => new Ie(e).darken(n).toHexString(), Mp = (e) => {
  const n = Er(e);
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
}, Lp = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
    colorTextBase: r,
    colorText: tt(r, 0.88),
    colorTextSecondary: tt(r, 0.65),
    colorTextTertiary: tt(r, 0.45),
    colorTextQuaternary: tt(r, 0.25),
    colorFill: tt(r, 0.15),
    colorFillSecondary: tt(r, 0.06),
    colorFillTertiary: tt(r, 0.04),
    colorFillQuaternary: tt(r, 0.02),
    colorBgSolid: tt(r, 1),
    colorBgSolidHover: tt(r, 0.75),
    colorBgSolidActive: tt(r, 0.95),
    colorBgLayout: tr(t, 4),
    colorBgContainer: tr(t, 0),
    colorBgElevated: tr(t, 0),
    colorBgSpotlight: tt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: tr(t, 15),
    colorBorderSecondary: tr(t, 6)
  };
};
function Bp(e) {
  Li.pink = Li.magenta, Bi.pink = Bi.magenta;
  const n = Object.keys(ef).map((t) => {
    const r = e[t] === Li[t] ? Bi[t] : Er(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), Op(e, {
    generateColorPalettes: Mp,
    generateNeutralColorPalettes: Lp
  })), jp(e.fontSize)), Dp(e)), Pp(e)), kp(e));
}
const rf = xs(Bp), Is = {
  token: wr,
  override: {
    override: wr
  },
  hashed: !0
}, of = /* @__PURE__ */ Ne.createContext(Is), Ns = "ant", Ra = "anticon", Fp = (e, n) => n || (e ? `${Ns}-${e}` : Ns), qt = /* @__PURE__ */ T.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Fp,
  iconPrefixCls: Ra
}), {
  Consumer: mv
} = qt, Lc = {};
function sf(e) {
  const n = T.useContext(qt), {
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
const zp = `-ant-${Date.now()}-${Math.random()}`;
function Vp(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ie(s), u = Er(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = u[1], t[`${a}-color-hover`] = u[4], t[`${a}-color-active`] = u[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = u[0], t[`${a}-color-deprecated-border`] = u[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Ie(n.primaryColor), a = Er(s.toRgbString());
    a.forEach((u, l) => {
      t[`primary-${l + 1}`] = u;
    }), t["primary-color-deprecated-l-35"] = r(s, (u) => u.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (u) => u.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (u) => u.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (u) => u.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (u) => u.setA(u.a * 0.12));
    const c = new Ie(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setA(u.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function Hp(e, n) {
  const t = Vp(e, n);
  Pt() ? ln(t, `${zp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ni(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const js = /* @__PURE__ */ T.createContext(!1), Up = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = T.useContext(js);
  return /* @__PURE__ */ T.createElement(js.Provider, {
    value: t ?? r
  }, n);
}, _r = /* @__PURE__ */ T.createContext(void 0), qp = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = T.useContext(_r);
  return /* @__PURE__ */ T.createElement(_r.Provider, {
    value: t || r
  }, n);
};
function Wp() {
  const e = Vt(js), n = Vt(_r);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var af = /* @__PURE__ */ ht(function e() {
  xt(this, e);
}), cf = "CALC_UNIT", Yp = new RegExp(cf, "g");
function Fi(e) {
  return typeof e == "number" ? "".concat(e).concat(cf) : e;
}
var Xp = /* @__PURE__ */ function(e) {
  Tr(t, e);
  var n = Zo(t);
  function t(r, o) {
    var i;
    xt(this, t), i = n.call(this), U(un(i), "result", ""), U(un(i), "unitlessCssVar", void 0), U(un(i), "lowPriority", void 0);
    var s = be(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Fi(r) : s === "string" && (i.result = r), i;
  }
  return ht(t, [{
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
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(u) {
        return i.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(Yp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(af), Gp = /* @__PURE__ */ function(e) {
  Tr(t, e);
  var n = Zo(t);
  function t(r) {
    var o;
    return xt(this, t), o = n.call(this), U(un(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return ht(t, [{
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
}(af), $p = function(n, t) {
  var r = n === "css" ? Xp : Gp;
  return function(o) {
    return new r(o, t);
  };
}, Bc = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ds(e) {
  var n = T.useRef();
  n.current = e;
  var t = T.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Ms(e) {
  var n = T.useRef(!1), t = T.useState(e), r = ae(t, 2), o = r[0], i = r[1];
  T.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function Fc(e, n, t, r) {
  var o = z({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), u = c[0], l = c[1];
      if (process.env.NODE_ENV !== "production" && Kt(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(l), "` instead.")), o != null && o[u] || o != null && o[l]) {
        var d;
        (d = o[l]) !== null && d !== void 0 || (o[l] = o == null ? void 0 : o[u]);
      }
    });
  }
  var s = z(z({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var uf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ls = !0;
function oi() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!uf)
    return Object.assign.apply(Object, [{}].concat(n));
  Ls = !1;
  var r = {};
  return n.forEach(function(o) {
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
  }), Ls = !0, r;
}
var zc = {};
function Kp() {
}
var Zp = function(n) {
  var t, r = n, o = Kp;
  return uf && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Ls) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    zc[s] = {
      global: Array.from(t),
      component: z(z({}, (c = zc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function Vc(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(oi(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Jp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Oo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Oo(i);
      }).join(","), ")");
    }
  };
}
var Qp = 1e3 * 60 * 10, e1 = /* @__PURE__ */ function() {
  function e() {
    xt(this, e), U(this, "map", /* @__PURE__ */ new Map()), U(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), U(this, "nextID", 0), U(this, "lastAccessBeat", /* @__PURE__ */ new Map()), U(this, "accessBeat", 0);
  }
  return ht(e, [{
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
        return i && be(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(be(i), "_").concat(i);
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
          r - o > Qp && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Hc = new e1();
function t1(e, n) {
  return Ne.useMemo(function() {
    var t = Hc.get(n);
    if (t)
      return t;
    var r = e();
    return Hc.set(n, r), r;
  }, n);
}
var n1 = function() {
  return {};
};
function r1(e) {
  var n = e.useCSP, t = n === void 0 ? n1 : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(p, h, f, y) {
    var m = Array.isArray(p) ? p[0] : p;
    function _(j) {
      return "".concat(String(m)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var w = (y == null ? void 0 : y.unitless) || {}, C = typeof a == "function" ? a(p) : {}, k = z(z({}, C), {}, U({}, _("zIndexPopup"), !0));
    Object.keys(w).forEach(function(j) {
      k[_(j)] = w[j];
    });
    var v = z(z({}, y), {}, {
      unitless: k,
      prefixToken: _
    }), O = l(p, h, f, v), E = u(m, f, v);
    return function(j) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, W = O(j, B), re = ae(W, 2), G = re[1], M = E(B), V = ae(M, 2), F = V[0], ne = V[1];
      return [F, G, ne];
    };
  }
  function u(p, h, f) {
    var y = f.unitless, m = f.injectStyle, _ = m === void 0 ? !0 : m, w = f.prefixToken, C = f.ignore, k = function(E) {
      var j = E.rootCls, B = E.cssVar, W = B === void 0 ? {} : B, re = r(), G = re.realToken;
      return pp({
        path: [p],
        prefix: W.prefix,
        key: W.key,
        unitless: y,
        ignore: C,
        token: G,
        scope: j
      }, function() {
        var M = Vc(p, G, h), V = Fc(p, G, M, {
          deprecatedTokens: f == null ? void 0 : f.deprecatedTokens
        });
        return Object.keys(M).forEach(function(F) {
          V[w(F)] = V[F], delete V[F];
        }), V;
      }), null;
    }, v = function(E) {
      var j = r(), B = j.cssVar;
      return [function(W) {
        return _ && B ? /* @__PURE__ */ Ne.createElement(Ne.Fragment, null, /* @__PURE__ */ Ne.createElement(k, {
          rootCls: E,
          cssVar: B,
          component: p
        }), W) : W;
      }, B == null ? void 0 : B.key];
    };
    return v;
  }
  function l(p, h, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(p) ? p : [p, p], _ = ae(m, 1), w = _[0], C = m.join("-"), k = e.layer || {
      name: "antd"
    };
    return function(v) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, E = r(), j = E.theme, B = E.realToken, W = E.hashId, re = E.token, G = E.cssVar, M = o(), V = M.rootPrefixCls, F = M.iconPrefixCls, ne = t(), J = G ? "css" : "js", Z = t1(function() {
        var de = /* @__PURE__ */ new Set();
        return G && Object.keys(y.unitless || {}).forEach(function(ue) {
          de.add(xo(ue, G.prefix)), de.add(xo(ue, Bc(w, G.prefix)));
        }), $p(J, de);
      }, [J, w, G == null ? void 0 : G.prefix]), $ = Jp(J), oe = $.max, Q = $.min, K = {
        theme: j,
        token: re,
        hashId: W,
        nonce: function() {
          return ne.nonce;
        },
        clientOnly: y.clientOnly,
        layer: k,
        // antd is always at top of styles
        order: y.order || -999
      };
      typeof i == "function" && vs(z(z({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", V]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: V,
            iconPrefixCls: F
          },
          csp: ne
        });
      });
      var ee = vs(z(z({}, K), {}, {
        path: [C, v, F]
      }), function() {
        if (y.injectStyle === !1)
          return [];
        var de = Zp(re), ue = de.token, he = de.flush, A = Vc(w, B, f), P = ".".concat(v), N = Fc(w, B, A, {
          deprecatedTokens: y.deprecatedTokens
        });
        G && A && be(A) === "object" && Object.keys(A).forEach(function(q) {
          A[q] = "var(".concat(xo(q, Bc(w, G.prefix)), ")");
        });
        var b = oi(ue, {
          componentCls: P,
          prefixCls: v,
          iconCls: ".".concat(F),
          antCls: ".".concat(V),
          calc: Z,
          // @ts-ignore
          max: oe,
          // @ts-ignore
          min: Q
        }, G ? A : N), x = h(b, {
          hashId: W,
          prefixCls: v,
          rootPrefixCls: V,
          iconPrefixCls: F
        });
        he(w, N);
        var S = typeof s == "function" ? s(b, v, O, y.resetFont) : null;
        return [y.resetStyle === !1 ? null : S, x];
      });
      return [ee, W];
    };
  }
  function d(p, h, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = l(p, h, f, z({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, y)), _ = function(C) {
      var k = C.prefixCls, v = C.rootCls, O = v === void 0 ? k : v;
      return m(k, O), null;
    };
    return process.env.NODE_ENV !== "production" && (_.displayName = "SubStyle_".concat(String(Array.isArray(p) ? p.join(".") : p))), _;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: l
  };
}
const o1 = "5.24.6";
function zi(e) {
  return e >= 0 && e <= 255;
}
function Kr(e, n) {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = new Ie(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Ie(n).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((t - s * (1 - u)) / u), d = Math.round((r - a * (1 - u)) / u), p = Math.round((o - c * (1 - u)) / u);
    if (zi(l) && zi(d) && zi(p))
      return new Ie({
        r: l,
        g: d,
        b: p,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Ie({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var i1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function lf(e) {
  const {
    override: n
  } = e, t = i1(e, ["override"]), r = Object.assign({}, n);
  Object.keys(wr).forEach((p) => {
    delete r[p];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, u = 1200, l = 1600;
  if (o.motion === !1) {
    const p = "0s";
    o.motionDurationFast = p, o.motionDurationMid = p, o.motionDurationSlow = p;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Kr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Kr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Kr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Kr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXLMax: l - 1,
    screenXXL: l,
    screenXXLMin: l,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ie("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ie("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ie("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Uc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const ff = {
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
}, s1 = {
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
}, a1 = {
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
}, df = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Uc(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = lf(s), i && Object.entries(i).forEach((a) => {
    let [c, u] = a;
    const {
      theme: l
    } = u, d = Uc(u, ["theme"]);
    let p = d;
    l && (p = df(Object.assign(Object.assign({}, s), d), {
      override: d
    }, l)), s[c] = p;
  }), s;
};
function ka() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = Ne.useContext(of), i = `${o1}-${n || ""}`, s = t || rf, [a, c, u] = zh(s, [wr, e], {
    salt: i,
    override: r,
    getComputedToken: df,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: lf,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: ff,
      ignore: s1,
      preserve: a1
    }
  });
  return [s, u, n ? c : "", a, o];
}
const xf = function(e) {
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
}, c1 = () => ({
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
}), u1 = (e) => ({
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
}), l1 = (e, n, t, r) => {
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
}, hf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, c1()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Pa
} = r1({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = Vt(qt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = ka();
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
    } = Vt(qt);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = u1(e);
    return [r, {
      "&": r
    }, hf((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : Ra)];
  },
  getCommonStyle: l1,
  getCompUnitless: () => ff
}), f1 = (e, n) => {
  const [t, r] = ka();
  return vs({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [hf(e)]);
}, d1 = Object.assign({}, T), {
  useId: qc
} = d1, x1 = () => "", h1 = typeof qc > "u" ? x1 : qc;
function p1(e, n, t) {
  var r, o;
  const i = Fn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, Is), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : Is.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = h1();
  if (process.env.NODE_ENV !== "production") {
    const u = s.cssVar || a.cssVar, l = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!u || l, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return pl(() => {
    var u, l;
    if (!e)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((f) => {
      d[f] = Object.assign(Object.assign({}, d[f]), e.components[f]);
    });
    const p = `css-var-${c.replace(/:/g, "")}`, h = ((u = s.cssVar) !== null && u !== void 0 ? u : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((l = s.cssVar) === null || l === void 0 ? void 0 : l.key) || p
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: h
    });
  }, [s, a], (u, l) => u.some((d, p) => {
    const h = l[p];
    return !dh(d, h, !0);
  }));
}
var m1 = ["children"], pf = /* @__PURE__ */ T.createContext({});
function g1(e) {
  var n = e.children, t = br(e, m1);
  return /* @__PURE__ */ T.createElement(pf.Provider, {
    value: t
  }, n);
}
var v1 = /* @__PURE__ */ function(e) {
  Tr(t, e);
  var n = Zo(t);
  function t() {
    return xt(this, t), n.apply(this, arguments);
  }
  return ht(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(T.Component);
function y1(e) {
  var n = T.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = T.useRef(e), i = Ds(function() {
    return o.current;
  }), s = Ds(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Lt = "none", Zr = "appear", Jr = "enter", Qr = "leave", Wc = "none", st = "prepare", Sn = "start", wn = "active", Ia = "end", mf = "prepared";
function Yc(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function b1(e, n) {
  var t = {
    animationend: Yc("Animation", "AnimationEnd"),
    transitionend: Yc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var S1 = b1(Pt(), typeof window < "u" ? window : {}), gf = {};
if (Pt()) {
  var w1 = document.createElement("div");
  gf = w1.style;
}
var eo = {};
function vf(e) {
  if (eo[e])
    return eo[e];
  var n = S1[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in gf)
        return eo[e] = n[i], eo[e];
    }
  return "";
}
var yf = vf("animationend"), bf = vf("transitionend"), Sf = !!(yf && bf), Xc = yf || "animationend", Gc = bf || "transitionend";
function $c(e, n) {
  if (!e) return null;
  if (be(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const E1 = function(e) {
  var n = Fe();
  function t(o) {
    o && (o.removeEventListener(Gc, e), o.removeEventListener(Xc, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Gc, e), o.addEventListener(Xc, e), n.current = o);
  }
  return T.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var wf = Pt() ? C0 : Ge;
const _1 = function() {
  var e = T.useRef(null);
  function n() {
    To.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = To(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(r, o - 1);
    });
    e.current = i;
  }
  return T.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var C1 = [st, Sn, wn, Ia], A1 = [st, mf], Ef = !1, T1 = !0;
function _f(e) {
  return e === wn || e === Ia;
}
const O1 = function(e, n, t) {
  var r = Ms(Wc), o = ae(r, 2), i = o[0], s = o[1], a = _1(), c = ae(a, 2), u = c[0], l = c[1];
  function d() {
    s(st, !0);
  }
  var p = n ? A1 : C1;
  return wf(function() {
    if (i !== Wc && i !== Ia) {
      var h = p.indexOf(i), f = p[h + 1], y = t(i);
      y === Ef ? s(f, !0) : f && u(function(m) {
        function _() {
          m.isCanceled() || s(f, !0);
        }
        y === !0 ? _() : Promise.resolve(y).then(_);
      });
    }
  }, [e, i]), T.useEffect(function() {
    return function() {
      l();
    };
  }, []), [d, i];
};
function R1(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, u = c === void 0 ? !0 : c, l = r.motionDeadline, d = r.motionLeaveImmediately, p = r.onAppearPrepare, h = r.onEnterPrepare, f = r.onLeavePrepare, y = r.onAppearStart, m = r.onEnterStart, _ = r.onLeaveStart, w = r.onAppearActive, C = r.onEnterActive, k = r.onLeaveActive, v = r.onAppearEnd, O = r.onEnterEnd, E = r.onLeaveEnd, j = r.onVisibleChanged, B = Ms(), W = ae(B, 2), re = W[0], G = W[1], M = y1(Lt), V = ae(M, 2), F = V[0], ne = V[1], J = Ms(null), Z = ae(J, 2), $ = Z[0], oe = Z[1], Q = F(), K = Fe(!1), ee = Fe(null);
  function de() {
    return t();
  }
  var ue = Fe(!1);
  function he() {
    ne(Lt), oe(null, !0);
  }
  var A = Ds(function(Ce) {
    var Se = F();
    if (Se !== Lt) {
      var Ae = de();
      if (!(Ce && !Ce.deadline && Ce.target !== Ae)) {
        var ze = ue.current, je;
        Se === Zr && ze ? je = v == null ? void 0 : v(Ae, Ce) : Se === Jr && ze ? je = O == null ? void 0 : O(Ae, Ce) : Se === Qr && ze && (je = E == null ? void 0 : E(Ae, Ce)), ze && je !== !1 && he();
      }
    }
  }), P = E1(A), N = ae(P, 1), b = N[0], x = function(Se) {
    switch (Se) {
      case Zr:
        return U(U(U({}, st, p), Sn, y), wn, w);
      case Jr:
        return U(U(U({}, st, h), Sn, m), wn, C);
      case Qr:
        return U(U(U({}, st, f), Sn, _), wn, k);
      default:
        return {};
    }
  }, S = T.useMemo(function() {
    return x(Q);
  }, [Q]), q = O1(Q, !e, function(Ce) {
    if (Ce === st) {
      var Se = S[st];
      return Se ? Se(de()) : Ef;
    }
    if (X in S) {
      var Ae;
      oe(((Ae = S[X]) === null || Ae === void 0 ? void 0 : Ae.call(S, de(), null)) || null);
    }
    return X === wn && Q !== Lt && (b(de()), l > 0 && (clearTimeout(ee.current), ee.current = setTimeout(function() {
      A({
        deadline: !0
      });
    }, l))), X === mf && he(), T1;
  }), L = ae(q, 2), le = L[0], X = L[1], pe = _f(X);
  ue.current = pe;
  var Je = Fe(null);
  wf(function() {
    if (!(K.current && Je.current === n)) {
      G(n);
      var Ce = K.current;
      K.current = !0;
      var Se;
      !Ce && n && a && (Se = Zr), Ce && n && i && (Se = Jr), (Ce && !n && u || !Ce && d && !n && u) && (Se = Qr);
      var Ae = x(Se);
      Se && (e || Ae[st]) ? (ne(Se), le()) : ne(Lt), Je.current = n;
    }
  }, [n]), Ge(function() {
    // Cancel appear
    (Q === Zr && !a || // Cancel enter
    Q === Jr && !i || // Cancel leave
    Q === Qr && !u) && ne(Lt);
  }, [a, i, u]), Ge(function() {
    return function() {
      K.current = !1, clearTimeout(ee.current);
    };
  }, []);
  var et = T.useRef(!1);
  Ge(function() {
    re && (et.current = !0), re !== void 0 && Q === Lt && ((et.current || re) && (j == null || j(re)), et.current = !0);
  }, [re, Q]);
  var _t = $;
  return S[st] && X === Sn && (_t = z({
    transition: "none"
  }, _t)), [Q, X, _t, re ?? n];
}
function k1(e) {
  var n = e;
  be(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ T.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, l = o.forceRender, d = o.children, p = o.motionName, h = o.leavedClassName, f = o.eventProps, y = T.useContext(pf), m = y.motion, _ = t(o, m), w = Fe(), C = Fe();
    function k() {
      try {
        return w.current instanceof HTMLElement ? w.current : Kx(C.current);
      } catch {
        return null;
      }
    }
    var v = R1(_, a, k, o), O = ae(v, 4), E = O[0], j = O[1], B = O[2], W = O[3], re = T.useRef(W);
    W && (re.current = !0);
    var G = T.useCallback(function(Z) {
      w.current = Z, ml(i, Z);
    }, [i]), M, V = z(z({}, f), {}, {
      visible: a
    });
    if (!d)
      M = null;
    else if (E === Lt)
      W ? M = d(z({}, V), G) : !u && re.current && h ? M = d(z(z({}, V), {}, {
        className: h
      }), G) : l || !u && !h ? M = d(z(z({}, V), {}, {
        style: {
          display: "none"
        }
      }), G) : M = null;
    else {
      var F;
      j === st ? F = "prepare" : _f(j) ? F = "active" : j === Sn && (F = "start");
      var ne = $c(p, "".concat(E, "-").concat(F));
      M = d(z(z({}, V), {}, {
        className: We($c(p, E), U(U({}, ne, ne && F), p, typeof p == "string")),
        style: B
      }), G);
    }
    if (/* @__PURE__ */ T.isValidElement(M) && nh(M)) {
      var J = rh(M);
      J || (M = /* @__PURE__ */ T.cloneElement(M, {
        ref: G
      }));
    }
    return /* @__PURE__ */ T.createElement(v1, {
      ref: C
    }, M);
  });
  return r.displayName = "CSSMotion", r;
}
const Cf = k1(Sf);
var Bs = "add", Fs = "keep", zs = "remove", Vi = "removed";
function P1(e) {
  var n;
  return e && be(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, z(z({}, n), {}, {
    key: String(n.key)
  });
}
function Vs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(P1);
}
function I1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Vs(e), s = Vs(n);
  i.forEach(function(u) {
    for (var l = !1, d = r; d < o; d += 1) {
      var p = s[d];
      if (p.key === u.key) {
        r < d && (t = t.concat(s.slice(r, d).map(function(h) {
          return z(z({}, h), {}, {
            status: Bs
          });
        })), r = d), t.push(z(z({}, p), {}, {
          status: Fs
        })), r += 1, l = !0;
        break;
      }
    }
    l || t.push(z(z({}, u), {}, {
      status: zs
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(u) {
    return z(z({}, u), {}, {
      status: Bs
    });
  })));
  var a = {};
  t.forEach(function(u) {
    var l = u.key;
    a[l] = (a[l] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(u) {
    return a[u] > 1;
  });
  return c.forEach(function(u) {
    t = t.filter(function(l) {
      var d = l.key, p = l.status;
      return d !== u || p !== zs;
    }), t.forEach(function(l) {
      l.key === u && (l.status = Fs);
    });
  }), t;
}
var N1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], j1 = ["status"], D1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function M1(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cf, t = /* @__PURE__ */ function(r) {
    Tr(i, r);
    var o = Zo(i);
    function i() {
      var s;
      xt(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), U(un(s), "state", {
        keyEntities: []
      }), U(un(s), "removeKey", function(l) {
        s.setState(function(d) {
          var p = d.keyEntities.map(function(h) {
            return h.key !== l ? h : z(z({}, h), {}, {
              status: Vi
            });
          });
          return {
            keyEntities: p
          };
        }, function() {
          var d = s.state.keyEntities, p = d.filter(function(h) {
            var f = h.status;
            return f !== Vi;
          }).length;
          p === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return ht(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, l = u.component, d = u.children, p = u.onVisibleChanged;
        u.onAllRemoved;
        var h = br(u, N1), f = l || T.Fragment, y = {};
        return D1.forEach(function(m) {
          y[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ T.createElement(f, h, c.map(function(m, _) {
          var w = m.status, C = br(m, j1), k = w === Bs || w === Fs;
          return /* @__PURE__ */ T.createElement(n, wt({}, y, {
            key: C.key,
            visible: k,
            eventProps: C,
            onVisibleChanged: function(O) {
              p == null || p(O, {
                key: C.key
              }), O || a.removeKey(C.key);
            }
          }), function(v, O) {
            return d(z(z({}, v), {}, {
              index: _
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, l = c.keyEntities, d = Vs(u), p = I1(l, d);
        return {
          keyEntities: p.filter(function(h) {
            var f = l.find(function(y) {
              var m = y.key;
              return h.key === m;
            });
            return !(f && f.status === Vi && h.status === zs);
          })
        };
      }
    }]), i;
  }(T.Component);
  return U(t, "defaultProps", {
    component: "div"
  }), t;
}
M1(Sf);
function L1(e) {
  const {
    children: n
  } = e, [, t] = ka(), {
    motion: r
  } = t, o = T.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ T.createElement(g1, {
    motion: r
  }, n) : n;
}
const Af = /* @__PURE__ */ T.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return Fn("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Af.displayName = "PropWarning");
const B1 = process.env.NODE_ENV !== "production" ? Af : () => null;
var F1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Hs = !1;
process.env.NODE_ENV;
const z1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Tf;
function V1() {
  return Tf || Ns;
}
function H1(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const U1 = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (Tf = n), r && H1(r) && (process.env.NODE_ENV !== "production" && ni(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Hp(V1(), r));
}, q1 = (e) => {
  const {
    children: n,
    csp: t,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: s,
    locale: a,
    componentSize: c,
    direction: u,
    space: l,
    splitter: d,
    virtual: p,
    dropdownMatchSelectWidth: h,
    popupMatchSelectWidth: f,
    popupOverflow: y,
    legacyLocale: m,
    parentContext: _,
    iconPrefixCls: w,
    theme: C,
    componentDisabled: k,
    segmented: v,
    statistic: O,
    spin: E,
    calendar: j,
    carousel: B,
    cascader: W,
    collapse: re,
    typography: G,
    checkbox: M,
    descriptions: V,
    divider: F,
    drawer: ne,
    skeleton: J,
    steps: Z,
    image: $,
    layout: oe,
    list: Q,
    mentions: K,
    modal: ee,
    progress: de,
    result: ue,
    slider: he,
    breadcrumb: A,
    menu: P,
    pagination: N,
    input: b,
    textArea: x,
    empty: S,
    badge: q,
    radio: L,
    rate: le,
    switch: X,
    transfer: pe,
    avatar: Je,
    message: et,
    tag: _t,
    table: Ce,
    card: Se,
    tabs: Ae,
    timeline: ze,
    timePicker: je,
    upload: It,
    notification: Pr,
    tree: xi,
    colorPicker: Ir,
    datePicker: Nr,
    rangePicker: hi,
    flex: pi,
    wave: mi,
    dropdown: gi,
    warning: vi,
    tour: yi,
    tooltip: bi,
    popover: qn,
    popconfirm: jr,
    floatButtonGroup: Nt,
    variant: Wn,
    inputNumber: Yn,
    treeSelect: Dr
  } = e, Mr = T.useCallback((Te, g) => {
    const {
      prefixCls: I
    } = e;
    if (g)
      return g;
    const D = I || _.getPrefixCls("");
    return Te ? `${D}-${Te}` : D;
  }, [_.getPrefixCls, e.prefixCls]), Jt = w || _.iconPrefixCls || Ra, mn = t || _.csp;
  f1(Jt, mn);
  const Qt = p1(C, _.theme, {
    prefixCls: Mr("")
  });
  process.env.NODE_ENV !== "production" && (Hs = Hs || !!Qt);
  const gn = {
    csp: mn,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || m,
    direction: u,
    space: l,
    splitter: d,
    virtual: p,
    popupMatchSelectWidth: f ?? h,
    popupOverflow: y,
    getPrefixCls: Mr,
    iconPrefixCls: Jt,
    theme: Qt,
    segmented: v,
    statistic: O,
    spin: E,
    calendar: j,
    carousel: B,
    cascader: W,
    collapse: re,
    typography: G,
    checkbox: M,
    descriptions: V,
    divider: F,
    drawer: ne,
    skeleton: J,
    steps: Z,
    image: $,
    input: b,
    textArea: x,
    layout: oe,
    list: Q,
    mentions: K,
    modal: ee,
    progress: de,
    result: ue,
    slider: he,
    breadcrumb: A,
    menu: P,
    pagination: N,
    empty: S,
    badge: q,
    radio: L,
    rate: le,
    switch: X,
    transfer: pe,
    avatar: Je,
    message: et,
    tag: _t,
    table: Ce,
    card: Se,
    tabs: Ae,
    timeline: ze,
    timePicker: je,
    upload: It,
    notification: Pr,
    tree: xi,
    colorPicker: Ir,
    datePicker: Nr,
    rangePicker: hi,
    flex: pi,
    wave: mi,
    dropdown: gi,
    warning: vi,
    tour: yi,
    tooltip: bi,
    popover: qn,
    popconfirm: jr,
    floatButtonGroup: Nt,
    variant: Wn,
    inputNumber: Yn,
    treeSelect: Dr
  };
  process.env.NODE_ENV !== "production" && Fn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const jt = Object.assign({}, _);
  Object.keys(gn).forEach((Te) => {
    gn[Te] !== void 0 && (jt[Te] = gn[Te]);
  }), z1.forEach((Te) => {
    const g = e[Te];
    g && (jt[Te] = g);
  }), typeof r < "u" && (jt.button = Object.assign({
    autoInsertSpace: r
  }, jt.button));
  const Dt = pl(() => jt, jt, (Te, g) => {
    const I = Object.keys(Te), D = Object.keys(g);
    return I.length !== D.length || I.some((Y) => Te[Y] !== g[Y]);
  }), {
    layer: Xn
  } = T.useContext(Or), Lr = T.useMemo(() => ({
    prefixCls: Jt,
    csp: mn,
    layer: Xn ? "antd" : void 0
  }), [Jt, mn, Xn]);
  let Be = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(B1, {
    dropdownMatchSelectWidth: h
  }), n);
  const Br = T.useMemo(() => {
    var Te, g, I, D;
    return bp(((Te = ri.Form) === null || Te === void 0 ? void 0 : Te.defaultValidateMessages) || {}, ((I = (g = Dt.locale) === null || g === void 0 ? void 0 : g.Form) === null || I === void 0 ? void 0 : I.defaultValidateMessages) || {}, ((D = Dt.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Dt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Br).length > 0 && (Be = /* @__PURE__ */ T.createElement(wp.Provider, {
    value: Br
  }, Be)), a && (Be = /* @__PURE__ */ T.createElement(Ql, {
    locale: a,
    _ANT_MARK__: Jl
  }, Be)), Be = /* @__PURE__ */ T.createElement(Ta.Provider, {
    value: Lr
  }, Be), c && (Be = /* @__PURE__ */ T.createElement(qp, {
    size: c
  }, Be)), Be = /* @__PURE__ */ T.createElement(L1, null, Be);
  const Si = T.useMemo(() => {
    const Te = Qt || {}, {
      algorithm: g,
      token: I,
      components: D,
      cssVar: Y
    } = Te, xe = F1(Te, ["algorithm", "token", "components", "cssVar"]), me = g && (!Array.isArray(g) || g.length > 0) ? xs(g) : rf, ce = {};
    Object.entries(D || {}).forEach((Ue) => {
      let [_e, Oe] = Ue;
      const Re = Object.assign({}, Oe);
      "algorithm" in Re && (Re.algorithm === !0 ? Re.theme = me : (Array.isArray(Re.algorithm) || typeof Re.algorithm == "function") && (Re.theme = xs(Re.algorithm)), delete Re.algorithm), ce[_e] = Re;
    });
    const se = Object.assign(Object.assign({}, wr), I);
    return Object.assign(Object.assign({}, xe), {
      theme: me,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: Y
    });
  }, [Qt]);
  return C && (Be = /* @__PURE__ */ T.createElement(of.Provider, {
    value: Si
  }, Be)), Dt.warning && (Be = /* @__PURE__ */ T.createElement(Kl.Provider, {
    value: Dt.warning
  }, Be)), k !== void 0 && (Be = /* @__PURE__ */ T.createElement(Up, {
    disabled: k
  }, Be)), /* @__PURE__ */ T.createElement(qt.Provider, {
    value: Dt
  }, Be);
}, zn = (e) => {
  const n = T.useContext(qt), t = T.useContext(Zl);
  return /* @__PURE__ */ T.createElement(q1, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
zn.ConfigContext = qt;
zn.SizeContext = _r;
zn.config = U1;
zn.useConfig = Wp;
Object.defineProperty(zn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ni(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), _r)
});
process.env.NODE_ENV !== "production" && (zn.displayName = "ConfigProvider");
var W1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Of(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function Y1(e) {
  return Of(e) instanceof ShadowRoot;
}
function X1(e) {
  return Y1(e) ? Of(e) : null;
}
function G1(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function $1(e, n) {
  Kt(e, "[@ant-design/icons] ".concat(n));
}
function Kc(e) {
  return be(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (be(e.icon) === "object" || typeof e.icon == "function");
}
function Zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[G1(t)] = r;
    }
    return n;
  }, {});
}
function Us(e, n, t) {
  return t ? /* @__PURE__ */ Ne.createElement(e.tag, z(z({
    key: n
  }, Zc(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Us(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Ne.createElement(e.tag, z({
    key: n
  }, Zc(e.attrs)), (e.children || []).map(function(r, o) {
    return Us(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function Rf(e) {
  return Er(e)[0];
}
function kf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var K1 = `
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
`, Z1 = function(n) {
  var t = Vt(Ta), r = t.csp, o = t.prefixCls, i = t.layer, s = K1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ge(function() {
    var a = n.current, c = X1(a);
    ln(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, J1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], gr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Q1(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  gr.primaryColor = n, gr.secondaryColor = t || Rf(n), gr.calculated = !!t;
}
function em() {
  return z({}, gr);
}
var Vn = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = br(n, J1), u = T.useRef(), l = gr;
  if (s && (l = {
    primaryColor: s,
    secondaryColor: a || Rf(s)
  }), Z1(u), $1(Kc(t), "icon should be icon definiton, but got ".concat(t)), !Kc(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = z(z({}, d), {}, {
    icon: d.icon(l.primaryColor, l.secondaryColor)
  })), Us(d.icon, "svg-".concat(d.name), z(z({
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
Vn.displayName = "IconReact";
Vn.getTwoToneColors = em;
Vn.setTwoToneColors = Q1;
function Pf(e) {
  var n = kf(e), t = ae(n, 2), r = t[0], o = t[1];
  return Vn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function tm() {
  var e = Vn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var nm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Pf(ko.primary);
var Zt = /* @__PURE__ */ T.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, u = br(e, nm), l = T.useContext(Ta), d = l.prefixCls, p = d === void 0 ? "anticon" : d, h = l.rootClassName, f = We(h, p, U(U({}, "".concat(p, "-").concat(r.name), !!r.name), "".concat(p, "-spin"), !!o || r.name === "loading"), t), y = s;
  y === void 0 && a && (y = -1);
  var m = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, _ = kf(c), w = ae(_, 2), C = w[0], k = w[1];
  return /* @__PURE__ */ T.createElement("span", wt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: n,
    tabIndex: y,
    onClick: a,
    className: f
  }), /* @__PURE__ */ T.createElement(Vn, {
    icon: r,
    primaryColor: C,
    secondaryColor: k,
    style: m
  }));
});
Zt.displayName = "AntdIcon";
Zt.getTwoToneColor = tm;
Zt.setTwoToneColor = Pf;
var rm = function(n, t) {
  return /* @__PURE__ */ T.createElement(Zt, wt({}, n, {
    ref: t,
    icon: W1
  }));
}, If = /* @__PURE__ */ T.forwardRef(rm);
process.env.NODE_ENV !== "production" && (If.displayName = "CheckCircleFilled");
var om = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, im = function(n, t) {
  return /* @__PURE__ */ T.createElement(Zt, wt({}, n, {
    ref: t,
    icon: om
  }));
}, Nf = /* @__PURE__ */ T.forwardRef(im);
process.env.NODE_ENV !== "production" && (Nf.displayName = "CloseCircleFilled");
var sm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, am = function(n, t) {
  return /* @__PURE__ */ T.createElement(Zt, wt({}, n, {
    ref: t,
    icon: sm
  }));
}, jf = /* @__PURE__ */ T.forwardRef(am);
process.env.NODE_ENV !== "production" && (jf.displayName = "CloseOutlined");
var cm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, um = function(n, t) {
  return /* @__PURE__ */ T.createElement(Zt, wt({}, n, {
    ref: t,
    icon: cm
  }));
}, Df = /* @__PURE__ */ T.forwardRef(um);
process.env.NODE_ENV !== "production" && (Df.displayName = "ExclamationCircleFilled");
var lm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, fm = function(n, t) {
  return /* @__PURE__ */ T.createElement(Zt, wt({}, n, {
    ref: t,
    icon: lm
  }));
}, Mf = /* @__PURE__ */ T.forwardRef(fm);
process.env.NODE_ENV !== "production" && (Mf.displayName = "InfoCircleFilled");
var dm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, xm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, hm = "".concat(dm, " ").concat(xm).split(/[\s\n]+/), pm = "aria-", mm = "data-";
function Jc(e, n) {
  return e.indexOf(n) === 0;
}
function gm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = z({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Jc(o, pm)) || // Data
    t.data && Jc(o, mm) || // Attr
    t.attr && hm.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Lf = (e, n, t) => /* @__PURE__ */ Ne.isValidElement(e) ? /* @__PURE__ */ Ne.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function vm(e, n) {
  return Lf(e, e, n);
}
const to = (e, n, t, r, o) => ({
  background: e,
  border: `${Oo(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), ym = (e) => {
  const {
    componentCls: n,
    motionDurationSlow: t,
    marginXS: r,
    marginSM: o,
    fontSize: i,
    fontSizeLG: s,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: u,
    withDescriptionIconSize: l,
    colorText: d,
    colorTextHeading: p,
    withDescriptionPadding: h,
    defaultPadding: f
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, xf(e)), {
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
        color: p
      },
      [`&${n}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${t} ${u}, opacity ${t} ${u},
        padding-top ${t} ${u}, padding-bottom ${t} ${u},
        margin-bottom ${t} ${u}`
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
      padding: h,
      [`${n}-icon`]: {
        marginInlineEnd: o,
        fontSize: l,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: p,
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
}, bm = (e) => {
  const {
    componentCls: n,
    colorSuccess: t,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: i,
    colorWarningBorder: s,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: u,
    colorErrorBg: l,
    colorInfo: d,
    colorInfoBorder: p,
    colorInfoBg: h
  } = e;
  return {
    [n]: {
      "&-success": to(o, r, t, e, n),
      "&-info": to(h, p, d, e, n),
      "&-warning": to(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, to(l, u, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Sm = (e) => {
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
        lineHeight: Oo(i),
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
}, wm = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Em = Pa("Alert", (e) => [ym(e), bm(e), Sm(e)], wm);
var Qc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const _m = {
  success: If,
  info: Mf,
  error: Nf,
  warning: Df
}, Cm = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = _m[r] || null;
  return n ? Lf(n, /* @__PURE__ */ T.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: We(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ T.createElement(o, {
    className: `${t}-icon`
  });
}, Am = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ T.createElement(jf, null) : r;
  return n ? /* @__PURE__ */ T.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Na = /* @__PURE__ */ T.forwardRef((e, n) => {
  const {
    description: t,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: u,
    onMouseLeave: l,
    onClick: d,
    afterClose: p,
    showIcon: h,
    closable: f,
    closeText: y,
    closeIcon: m,
    action: _,
    id: w
  } = e, C = Qc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [k, v] = T.useState(!1);
  process.env.NODE_ENV !== "production" && Fn("Alert").deprecated(!y, "closeText", "closable.closeIcon");
  const O = T.useRef(null);
  T.useImperativeHandle(n, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: E,
    direction: j,
    closable: B,
    closeIcon: W,
    className: re,
    style: G
  } = sf("alert"), M = E("alert", r), [V, F, ne] = Em(M), J = (ue) => {
    var he;
    v(!0), (he = e.onClose) === null || he === void 0 || he.call(e, ue);
  }, Z = T.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), $ = T.useMemo(() => typeof f == "object" && f.closeIcon || y ? !0 : typeof f == "boolean" ? f : m !== !1 && m !== null && m !== void 0 ? !0 : !!B, [y, m, f, B]), oe = i && h === void 0 ? !0 : h, Q = We(M, `${M}-${Z}`, {
    [`${M}-with-description`]: !!t,
    [`${M}-no-icon`]: !oe,
    [`${M}-banner`]: !!i,
    [`${M}-rtl`]: j === "rtl"
  }, re, s, a, ne, F), K = gm(C, {
    aria: !0,
    data: !0
  }), ee = T.useMemo(() => typeof f == "object" && f.closeIcon ? f.closeIcon : y || (m !== void 0 ? m : typeof B == "object" && B.closeIcon ? B.closeIcon : W), [m, f, y, W]), de = T.useMemo(() => {
    const ue = f ?? B;
    if (typeof ue == "object") {
      const {
        closeIcon: he
      } = ue;
      return Qc(ue, ["closeIcon"]);
    }
    return {};
  }, [f, B]);
  return V(/* @__PURE__ */ T.createElement(Cf, {
    visible: !k,
    motionName: `${M}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ue) => ({
      maxHeight: ue.offsetHeight
    }),
    onLeaveEnd: p
  }, (ue, he) => {
    let {
      className: A,
      style: P
    } = ue;
    return /* @__PURE__ */ T.createElement("div", Object.assign({
      id: w,
      ref: th(O, he),
      "data-show": !k,
      className: We(Q, A),
      style: Object.assign(Object.assign(Object.assign({}, G), c), P),
      onMouseEnter: u,
      onMouseLeave: l,
      onClick: d,
      role: "alert"
    }, K), oe ? /* @__PURE__ */ T.createElement(Cm, {
      description: t,
      icon: e.icon,
      prefixCls: M,
      type: Z
    }) : null, /* @__PURE__ */ T.createElement("div", {
      className: `${M}-content`
    }, o ? /* @__PURE__ */ T.createElement("div", {
      className: `${M}-message`
    }, o) : null, t ? /* @__PURE__ */ T.createElement("div", {
      className: `${M}-description`
    }, t) : null), _ ? /* @__PURE__ */ T.createElement("div", {
      className: `${M}-action`
    }, _) : null, /* @__PURE__ */ T.createElement(Am, {
      isClosable: $,
      prefixCls: M,
      closeIcon: ee,
      handleClose: J,
      ariaProps: de
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Na.displayName = "Alert");
function Tm(e, n, t) {
  return n = Pn(n), vl(e, ba() ? Reflect.construct(n, t || [], Pn(e).constructor) : n.apply(e, t));
}
let Om = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return xt(this, n), t = Tm(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Tr(n, e), ht(n, [{
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
      } = this.state, u = (c == null ? void 0 : c.componentStack) || null, l = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? u : o;
      return a ? /* @__PURE__ */ T.createElement(Na, {
        id: i,
        type: "error",
        message: l,
        description: /* @__PURE__ */ T.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(T.Component);
const Bf = Na;
Bf.ErrorBoundary = Om;
function Rm(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
function km(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, u = c === void 0 ? void 0 : c, l, d = !1, p = 0;
  function h() {
    l && clearTimeout(l);
  }
  function f(m) {
    var _ = m || {}, w = _.upcomingOnly, C = w === void 0 ? !1 : w;
    h(), d = !C;
  }
  function y() {
    for (var m = arguments.length, _ = new Array(m), w = 0; w < m; w++)
      _[w] = arguments[w];
    var C = this, k = Date.now() - p;
    if (d)
      return;
    function v() {
      p = Date.now(), n.apply(C, _);
    }
    function O() {
      l = void 0;
    }
    !a && u && !l && v(), h(), u === void 0 && k > e ? a ? (p = Date.now(), i || (l = setTimeout(u ? O : v, e))) : v() : i !== !0 && (l = setTimeout(u ? O : v, u === void 0 ? e - k : e));
  }
  return y.cancel = f, y;
}
function Pm(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return km(e, n, {
    debounceMode: i !== !1
  });
}
function eu(e) {
  return ["small", "middle", "large"].includes(e);
}
const Ff = ["wrap", "nowrap", "wrap-reverse"], zf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Vf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Im = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && Ff.includes(t)
  };
}, Nm = (e, n) => {
  const t = {};
  return Vf.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, jm = (e, n) => {
  const t = {};
  return zf.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function Dm(e, n) {
  return We(Object.assign(Object.assign(Object.assign({}, Im(e, n)), Nm(e, n)), jm(e, n)));
}
const Mm = (e) => {
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
}, Lm = (e) => {
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
}, Bm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Ff.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, Fm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Vf.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, zm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return zf.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, Vm = () => ({}), Hm = Pa("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = oi(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [Mm(o), Lm(o), Bm(o), Fm(o), zm(o)];
}, Vm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var Um = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Hf = /* @__PURE__ */ Ne.forwardRef((e, n) => {
  const {
    prefixCls: t,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: u = !1,
    component: l = "div"
  } = e, d = Um(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: p,
    direction: h,
    getPrefixCls: f
  } = Ne.useContext(qt), y = f("flex", t), [m, _, w] = Hm(y), C = u ?? (p == null ? void 0 : p.vertical), k = We(o, r, p == null ? void 0 : p.className, y, _, w, Dm(y, e), {
    [`${y}-rtl`]: h === "rtl",
    [`${y}-gap-${a}`]: eu(a),
    [`${y}-vertical`]: C
  }), v = Object.assign(Object.assign({}, p == null ? void 0 : p.style), i);
  return s && (v.flex = s), a && !eu(a) && (v.gap = a), m(/* @__PURE__ */ Ne.createElement(l, Object.assign({
    ref: n,
    className: k,
    style: v
  }, Rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (Hf.displayName = "Flex");
const Po = 100, Uf = Po / 5, qf = Po / 2 - Uf / 2, Hi = qf * 2 * Math.PI, tu = 50, nu = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ T.createElement("circle", {
    className: We(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: qf,
    cx: tu,
    cy: tu,
    strokeWidth: Uf,
    style: t
  });
}, qm = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = T.useState(!1);
  Pl(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const u = {
    strokeDashoffset: `${Hi / 4}`,
    strokeDasharray: `${Hi * c / 100} ${Hi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ T.createElement("span", {
    className: We(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ T.createElement("svg", {
    viewBox: `0 0 ${Po} ${Po}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ T.createElement(nu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ T.createElement(nu, {
    dotClassName: r,
    style: u
  })));
};
function Wm(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("span", {
    className: We(o, t > 0 && i)
  }, /* @__PURE__ */ T.createElement("span", {
    className: We(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ T.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ T.createElement(qm, {
    prefixCls: n,
    percent: t
  }));
}
function Ym(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ T.isValidElement(t) ? vm(t, {
    className: We(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ T.createElement(Wm, {
    prefixCls: n,
    percent: r
  });
}
const Xm = new Xl("antSpinMove", {
  to: {
    opacity: 1
  }
}), Gm = new Xl("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), $m = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, xf(e)), {
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
          animationName: Xm,
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
          animationName: Gm,
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
}, Km = (e) => {
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
}, Zm = Pa("Spin", (e) => {
  const n = oi(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [$m(n)];
}, Km), Jm = 200, ru = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Qm(e, n) {
  const [t, r] = T.useState(0), o = T.useRef(null), i = n === "auto";
  return T.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ru.length; c += 1) {
        const [u, l] = ru[c];
        if (s <= u)
          return s + a * l;
      }
      return s;
    });
  }, Jm)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var eg = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Wf;
function tg(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const vr = (e) => {
  var n;
  const {
    prefixCls: t,
    spinning: r = !0,
    delay: o = 0,
    className: i,
    rootClassName: s,
    size: a = "default",
    tip: c,
    wrapperClassName: u,
    style: l,
    children: d,
    fullscreen: p = !1,
    indicator: h,
    percent: f
  } = e, y = eg(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: m,
    direction: _,
    className: w,
    style: C,
    indicator: k
  } = sf("spin"), v = m("spin", t), [O, E, j] = Zm(v), [B, W] = T.useState(() => r && !tg(r, o)), re = Qm(B, f);
  T.useEffect(() => {
    if (r) {
      const Z = Pm(o, () => {
        W(!0);
      });
      return Z(), () => {
        var $;
        ($ = Z == null ? void 0 : Z.cancel) === null || $ === void 0 || $.call(Z);
      };
    }
    W(!1);
  }, [o, r]);
  const G = T.useMemo(() => typeof d < "u" && !p, [d, p]);
  if (process.env.NODE_ENV !== "production") {
    const Z = Fn("Spin");
    process.env.NODE_ENV !== "production" && Z(!c || G || p, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const M = We(v, w, {
    [`${v}-sm`]: a === "small",
    [`${v}-lg`]: a === "large",
    [`${v}-spinning`]: B,
    [`${v}-show-text`]: !!c,
    [`${v}-rtl`]: _ === "rtl"
  }, i, !p && s, E, j), V = We(`${v}-container`, {
    [`${v}-blur`]: B
  }), F = (n = h ?? k) !== null && n !== void 0 ? n : Wf, ne = Object.assign(Object.assign({}, C), l), J = /* @__PURE__ */ T.createElement("div", Object.assign({}, y, {
    style: ne,
    className: M,
    "aria-live": "polite",
    "aria-busy": B
  }), /* @__PURE__ */ T.createElement(Ym, {
    prefixCls: v,
    indicator: F,
    percent: re
  }), c && (G || p) ? /* @__PURE__ */ T.createElement("div", {
    className: `${v}-text`
  }, c) : null);
  return O(G ? /* @__PURE__ */ T.createElement("div", Object.assign({}, y, {
    className: We(`${v}-nested-loading`, u, E, j)
  }), B && /* @__PURE__ */ T.createElement("div", {
    key: "loading"
  }, J), /* @__PURE__ */ T.createElement("div", {
    className: V,
    key: "container"
  }, d)) : p ? /* @__PURE__ */ T.createElement("div", {
    className: We(`${v}-fullscreen`, {
      [`${v}-fullscreen-show`]: B
    }, s, E, j)
  }, J) : J);
};
vr.setDefaultIndicator = (e) => {
  Wf = e;
};
process.env.NODE_ENV !== "production" && (vr.displayName = "Spin");
function Yf(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: ng } = Object.prototype, { getPrototypeOf: ja } = Object, { iterator: ii, toStringTag: Xf } = Symbol, si = /* @__PURE__ */ ((e) => (n) => {
  const t = ng.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pt = (e) => (e = e.toLowerCase(), (n) => si(n) === e), ai = (e) => (n) => typeof n === e, { isArray: Hn } = Array, Cr = ai("undefined");
function rg(e) {
  return e !== null && !Cr(e) && e.constructor !== null && !Cr(e.constructor) && Ke(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Gf = pt("ArrayBuffer");
function og(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Gf(e.buffer), n;
}
const ig = ai("string"), Ke = ai("function"), $f = ai("number"), ci = (e) => e !== null && typeof e == "object", sg = (e) => e === !0 || e === !1, yo = (e) => {
  if (si(e) !== "object")
    return !1;
  const n = ja(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Xf in e) && !(ii in e);
}, ag = pt("Date"), cg = pt("File"), ug = pt("Blob"), lg = pt("FileList"), fg = (e) => ci(e) && Ke(e.pipe), dg = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || Ke(e.append) && ((n = si(e)) === "formdata" || // detect form-data instance
  n === "object" && Ke(e.toString) && e.toString() === "[object FormData]"));
}, xg = pt("URLSearchParams"), [hg, pg, mg, gg] = ["ReadableStream", "Request", "Response", "Headers"].map(pt), vg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rr(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Hn(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Kf(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zf = (e) => !Cr(e) && e !== sn;
function qs() {
  const { caseless: e } = Zf(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Kf(n, o) || o;
    yo(n[i]) && yo(r) ? n[i] = qs(n[i], r) : yo(r) ? n[i] = qs({}, r) : Hn(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Rr(arguments[r], t);
  return n;
}
const yg = (e, n, t, { allOwnKeys: r } = {}) => (Rr(n, (o, i) => {
  t && Ke(o) ? e[i] = Yf(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), bg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Sg = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, wg = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && ja(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Eg = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, _g = (e) => {
  if (!e) return null;
  if (Hn(e)) return e;
  let n = e.length;
  if (!$f(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Cg = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && ja(Uint8Array)), Ag = (e, n) => {
  const r = (e && e[ii]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, Tg = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Og = pt("HTMLFormElement"), Rg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), ou = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), kg = pt("RegExp"), Jf = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Rr(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Pg = (e) => {
  Jf(e, (n, t) => {
    if (Ke(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (Ke(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ig = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Hn(e) ? r(e) : r(String(e).split(n)), t;
}, Ng = () => {
}, jg = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function Dg(e) {
  return !!(e && Ke(e.append) && e[Xf] === "FormData" && e[ii]);
}
const Mg = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (ci(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = Hn(r) ? [] : {};
        return Rr(r, (s, a) => {
          const c = t(s, o + 1);
          !Cr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, Lg = pt("AsyncFunction"), Bg = (e) => e && (ci(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), Qf = ((e, n) => e ? setImmediate : n ? ((t, r) => (sn.addEventListener("message", ({ source: o, data: i }) => {
  o === sn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), sn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  Ke(sn.postMessage)
), Fg = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof process < "u" && process.nextTick || Qf, zg = (e) => e != null && Ke(e[ii]), R = {
  isArray: Hn,
  isArrayBuffer: Gf,
  isBuffer: rg,
  isFormData: dg,
  isArrayBufferView: og,
  isString: ig,
  isNumber: $f,
  isBoolean: sg,
  isObject: ci,
  isPlainObject: yo,
  isReadableStream: hg,
  isRequest: pg,
  isResponse: mg,
  isHeaders: gg,
  isUndefined: Cr,
  isDate: ag,
  isFile: cg,
  isBlob: ug,
  isRegExp: kg,
  isFunction: Ke,
  isStream: fg,
  isURLSearchParams: xg,
  isTypedArray: Cg,
  isFileList: lg,
  forEach: Rr,
  merge: qs,
  extend: yg,
  trim: vg,
  stripBOM: bg,
  inherits: Sg,
  toFlatObject: wg,
  kindOf: si,
  kindOfTest: pt,
  endsWith: Eg,
  toArray: _g,
  forEachEntry: Ag,
  matchAll: Tg,
  isHTMLForm: Og,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jf,
  freezeMethods: Pg,
  toObjectSet: Ig,
  toCamelCase: Rg,
  noop: Ng,
  toFiniteNumber: jg,
  findKey: Kf,
  global: sn,
  isContextDefined: Zf,
  isSpecCompliantForm: Dg,
  toJSONObject: Mg,
  isAsyncFn: Lg,
  isThenable: Bg,
  setImmediate: Qf,
  asap: Fg,
  isIterable: zg
};
function te(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
R.inherits(te, Error, {
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
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const e0 = te.prototype, t0 = {};
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
  t0[e] = { value: e };
});
Object.defineProperties(te, t0);
Object.defineProperty(e0, "isAxiosError", { value: !0 });
te.from = (e, n, t, r, o, i) => {
  const s = Object.create(e0);
  return R.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Vg = null;
function Ws(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function n0(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function iu(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = n0(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function Hg(e) {
  return R.isArray(e) && !e.some(Ws);
}
const Ug = R.toFlatObject(R, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ui(e, n, t) {
  if (!R.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = R.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !R.isUndefined(m[y]);
  });
  const r = t.metaTokens, o = t.visitor || l, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(n);
  if (!R.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (R.isDate(f))
      return f.toISOString();
    if (!c && R.isBlob(f))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(f) || R.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, y, m) {
    let _ = f;
    if (f && !m && typeof f == "object") {
      if (R.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (R.isArray(f) && Hg(f) || (R.isFileList(f) || R.endsWith(y, "[]")) && (_ = R.toArray(f)))
        return y = n0(y), _.forEach(function(C, k) {
          !(R.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? iu([y], k, i) : s === null ? y : y + "[]",
            u(C)
          );
        }), !1;
    }
    return Ws(f) ? !0 : (n.append(iu(m, y, i), u(f)), !1);
  }
  const d = [], p = Object.assign(Ug, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Ws
  });
  function h(f, y) {
    if (!R.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(f), R.forEach(f, function(_, w) {
        (!(R.isUndefined(_) || _ === null) && o.call(
          n,
          _,
          R.isString(w) ? w.trim() : w,
          y,
          p
        )) === !0 && h(_, y ? y.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), n;
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
function Da(e, n) {
  this._pairs = [], e && ui(e, this, n);
}
const r0 = Da.prototype;
r0.append = function(n, t) {
  this._pairs.push([n, t]);
};
r0.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, su);
  } : su;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function qg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function o0(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || qg;
  R.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = R.isURLSearchParams(n) ? n.toString() : new Da(n, t).toString(r), i) {
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
    R.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const i0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wg = typeof URLSearchParams < "u" ? URLSearchParams : Da, Yg = typeof FormData < "u" ? FormData : null, Xg = typeof Blob < "u" ? Blob : null, Gg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wg,
    FormData: Yg,
    Blob: Xg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ma = typeof window < "u" && typeof document < "u", Ys = typeof navigator == "object" && navigator || void 0, $g = Ma && (!Ys || ["ReactNative", "NativeScript", "NS"].indexOf(Ys.product) < 0), Kg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zg = Ma && window.location.href || "http://localhost", Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ma,
  hasStandardBrowserEnv: $g,
  hasStandardBrowserWebWorkerEnv: Kg,
  navigator: Ys,
  origin: Zg
}, Symbol.toStringTag, { value: "Module" })), qe = {
  ...Jg,
  ...Gg
};
function Qg(e, n) {
  return ui(e, new qe.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return qe.isNode && R.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function e2(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function t2(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function s0(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && R.isArray(o) ? o.length : s, c ? (R.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !R.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && R.isArray(o[s]) && (o[s] = t2(o[s])), !a);
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const t = {};
    return R.forEachEntry(e, (r, o) => {
      n(e2(r), o, t, 0);
    }), t;
  }
  return null;
}
function n2(e, n, t) {
  if (R.isString(e))
    try {
      return (n || JSON.parse)(e), R.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const kr = {
  transitional: i0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = R.isObject(n);
    if (i && R.isHTMLForm(n) && (n = new FormData(n)), R.isFormData(n))
      return o ? JSON.stringify(s0(n)) : n;
    if (R.isArrayBuffer(n) || R.isBuffer(n) || R.isStream(n) || R.isFile(n) || R.isBlob(n) || R.isReadableStream(n))
      return n;
    if (R.isArrayBufferView(n))
      return n.buffer;
    if (R.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qg(n, this.formSerializer).toString();
      if ((a = R.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ui(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), n2(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || kr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (R.isResponse(n) || R.isReadableStream(n))
      return n;
    if (n && R.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
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
    FormData: qe.classes.FormData,
    Blob: qe.classes.Blob
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
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  kr.headers[e] = {};
});
const r2 = R.toObjectSet([
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
]), o2 = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && r2[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, cu = Symbol("internals");
function nr(e) {
  return e && String(e).trim().toLowerCase();
}
function bo(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(bo) : String(e);
}
function i2(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const s2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ui(e, n, t, r, o) {
  if (R.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!R.isString(n)) {
    if (R.isString(r))
      return n.indexOf(r) !== -1;
    if (R.isRegExp(r))
      return r.test(n);
  }
}
function a2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function c2(e, n) {
  const t = R.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let Ze = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, u) {
      const l = nr(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = R.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = bo(a));
    }
    const s = (a, c) => R.forEach(a, (u, l) => i(u, l, c));
    if (R.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (R.isString(n) && (n = n.trim()) && !s2(n))
      s(o2(n), t);
    else if (R.isObject(n) && R.isIterable(n)) {
      let a = {}, c, u;
      for (const l of n) {
        if (!R.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = l[0]] = (c = a[u]) ? R.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = nr(n), n) {
      const r = R.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return i2(o);
        if (R.isFunction(t))
          return t.call(this, o, r);
        if (R.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = nr(n), n) {
      const r = R.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ui(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = nr(s), s) {
        const a = R.findKey(r, s);
        a && (!t || Ui(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return R.isArray(n) ? n.forEach(i) : i(n), o;
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
    return R.forEach(this, (o, i) => {
      const s = R.findKey(r, i);
      if (s) {
        t[s] = bo(o), delete t[i];
        return;
      }
      const a = n ? a2(i) : String(i).trim();
      a !== i && delete t[i], t[a] = bo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && R.isArray(r) ? r.join(", ") : r);
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
      const a = nr(s);
      r[a] || (c2(o, s), r[a] = !0);
    }
    return R.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
Ze.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(Ze.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
R.freezeMethods(Ze);
function qi(e, n) {
  const t = this || kr, r = n || t, o = Ze.from(r.headers);
  let i = r.data;
  return R.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function a0(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, n, t) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, n, t), this.name = "CanceledError";
}
R.inherits(Un, te, {
  __CANCEL__: !0
});
function c0(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new te(
    "Request failed with status code " + t.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function u2(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function l2(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const u = Date.now(), l = r[i];
    s || (s = u), t[o] = c, r[o] = u;
    let d = i, p = 0;
    for (; d !== o; )
      p += t[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < n)
      return;
    const h = l && u - l;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function f2(e, n) {
  let t = 0, r = 1e3 / n, o, i;
  const s = (u, l = Date.now()) => {
    t = l, o = null, i && (clearTimeout(i), i = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - t;
    d >= r ? s(u, l) : (o = u, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Io = (e, n, t = 3) => {
  let r = 0;
  const o = l2(50, 250);
  return f2((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, u = o(c), l = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && l ? (a - s) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [n ? "download" : "upload"]: !0
    };
    e(d);
  }, t);
}, uu = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, lu = (e) => (...n) => R.asap(() => e(...n)), d2 = qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, qe.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(qe.origin),
  qe.navigator && /(msie|trident)/i.test(qe.navigator.userAgent)
) : () => !0, x2 = qe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      R.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), R.isString(r) && s.push("path=" + r), R.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function h2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function p2(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function u0(e, n, t) {
  let r = !h2(n);
  return e && (r || t == !1) ? p2(e, n) : n;
}
const fu = (e) => e instanceof Ze ? { ...e } : e;
function hn(e, n) {
  n = n || {};
  const t = {};
  function r(u, l, d, p) {
    return R.isPlainObject(u) && R.isPlainObject(l) ? R.merge.call({ caseless: p }, u, l) : R.isPlainObject(l) ? R.merge({}, l) : R.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d, p) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(u))
        return r(void 0, u, d, p);
    } else return r(u, l, d, p);
  }
  function i(u, l) {
    if (!R.isUndefined(l))
      return r(void 0, l);
  }
  function s(u, l) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function a(u, l, d) {
    if (d in n)
      return r(u, l);
    if (d in e)
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
    headers: (u, l, d) => o(fu(u), fu(l), d, !0)
  };
  return R.forEach(Object.keys(Object.assign({}, e, n)), function(l) {
    const d = c[l] || o, p = d(e[l], n[l], l);
    R.isUndefined(p) && d !== a || (t[l] = p);
  }), t;
}
const l0 = (e) => {
  const n = hn({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = Ze.from(s), n.url = o0(u0(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (R.isFormData(t)) {
    if (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [u, ...l] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (qe.hasStandardBrowserEnv && (r && R.isFunction(r) && (r = r(n)), r || r !== !1 && d2(n.url))) {
    const u = o && i && x2.read(i);
    u && s.set(o, u);
  }
  return n;
}, m2 = typeof XMLHttpRequest < "u", g2 = m2 && function(e) {
  return new Promise(function(t, r) {
    const o = l0(e);
    let i = o.data;
    const s = Ze.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, l, d, p, h, f;
    function y() {
      h && h(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function _() {
      if (!m)
        return;
      const C = Ze.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: C,
        config: e,
        request: m
      };
      c0(function(E) {
        t(E), y();
      }, function(E) {
        r(E), y();
      }, v), m = null;
    }
    "onloadend" in m ? m.onloadend = _ : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, m.onabort = function() {
      m && (r(new te("Request aborted", te.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let k = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || i0;
      o.timeoutErrorMessage && (k = o.timeoutErrorMessage), r(new te(
        k,
        v.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in m && R.forEach(s.toJSON(), function(k, v) {
      m.setRequestHeader(v, k);
    }), R.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), a && a !== "json" && (m.responseType = o.responseType), u && ([p, f] = Io(u, !0), m.addEventListener("progress", p)), c && m.upload && ([d, h] = Io(c), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (C) => {
      m && (r(!C || C.type ? new Un(null, e, m) : C), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = u2(o.url);
    if (w && qe.protocols.indexOf(w) === -1) {
      r(new te("Unsupported protocol " + w + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, v2 = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, a();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof te ? l : new Un(l instanceof Error ? l.message : l));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new te(`timeout ${n} of ms exceeded`, te.ETIMEDOUT));
    }, n);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => R.asap(a), c;
  }
}, y2 = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, b2 = async function* (e, n) {
  for await (const t of S2(e))
    yield* y2(t, n);
}, S2 = async function* (e) {
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
  const o = b2(e, n);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: l } = await o.next();
        if (u) {
          a(), c.close();
          return;
        }
        let d = l.byteLength;
        if (t) {
          let p = i += d;
          t(p);
        }
        c.enqueue(new Uint8Array(l));
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
}, li = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", f0 = li && typeof ReadableStream == "function", w2 = li && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), d0 = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, E2 = f0 && d0(() => {
  let e = !1;
  const n = new Request(qe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), xu = 64 * 1024, Xs = f0 && d0(() => R.isReadableStream(new Response("").body)), No = {
  stream: Xs && ((e) => e.body)
};
li && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !No[n] && (No[n] = R.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new te(`Response type '${n}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const _2 = async (e) => {
  if (e == null)
    return 0;
  if (R.isBlob(e))
    return e.size;
  if (R.isSpecCompliantForm(e))
    return (await new Request(qe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (R.isArrayBufferView(e) || R.isArrayBuffer(e))
    return e.byteLength;
  if (R.isURLSearchParams(e) && (e = e + ""), R.isString(e))
    return (await w2(e)).byteLength;
}, C2 = async (e, n) => {
  const t = R.toFiniteNumber(e.getContentLength());
  return t ?? _2(n);
}, A2 = li && (async (e) => {
  let {
    url: n,
    method: t,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = l0(e);
  u = u ? (u + "").toLowerCase() : "text";
  let h = v2([o, i && i.toAbortSignal()], s), f;
  const y = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let m;
  try {
    if (c && E2 && t !== "get" && t !== "head" && (m = await C2(l, r)) !== 0) {
      let v = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (R.isFormData(r) && (O = v.headers.get("content-type")) && l.setContentType(O), v.body) {
        const [E, j] = uu(
          m,
          Io(lu(c))
        );
        r = du(v.body, xu, E, j);
      }
    }
    R.isString(d) || (d = d ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    f = new Request(n, {
      ...p,
      signal: h,
      method: t.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: _ ? d : void 0
    });
    let w = await fetch(f);
    const C = Xs && (u === "stream" || u === "response");
    if (Xs && (a || C && y)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((B) => {
        v[B] = w[B];
      });
      const O = R.toFiniteNumber(w.headers.get("content-length")), [E, j] = a && uu(
        O,
        Io(lu(a), !0)
      ) || [];
      w = new Response(
        du(w.body, xu, E, () => {
          j && j(), y && y();
        }),
        v
      );
    }
    u = u || "text";
    let k = await No[R.findKey(No, u) || "text"](w, e);
    return !C && y && y(), await new Promise((v, O) => {
      c0(v, O, {
        data: k,
        headers: Ze.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: f
      });
    });
  } catch (_) {
    throw y && y(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, f),
      {
        cause: _.cause || _
      }
    ) : te.from(_, _ && _.code, e, f);
  }
}), Gs = {
  http: Vg,
  xhr: g2,
  fetch: A2
};
R.forEach(Gs, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const hu = (e) => `- ${e}`, T2 = (e) => R.isFunction(e) || e === null || e === !1, x0 = {
  getAdapter: (e) => {
    e = R.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !T2(t) && (r = Gs[(s = String(t)).toLowerCase()], r === void 0))
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
` + i.map(hu).join(`
`) : " " + hu(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Gs
};
function Wi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Un(null, e);
}
function pu(e) {
  return Wi(e), e.headers = Ze.from(e.headers), e.data = qi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), x0.getAdapter(e.adapter || kr.adapter)(e).then(function(r) {
    return Wi(e), r.data = qi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return a0(r) || (Wi(e), r && r.response && (r.response.data = qi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const h0 = "1.9.0", fi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  fi[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const mu = {};
fi.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + h0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new te(
        o(s, " has been removed" + (t ? " in " + t : "")),
        te.ERR_DEPRECATED
      );
    return t && !mu[s] && (mu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
fi.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function O2(e, n, t) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const So = {
  assertOptions: O2,
  validators: fi
}, gt = So.validators;
let dn = class {
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = hn(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && So.assertOptions(r, {
      silentJSONParsing: gt.transitional(gt.boolean),
      forcedJSONParsing: gt.transitional(gt.boolean),
      clarifyTimeoutError: gt.transitional(gt.boolean)
    }, !1), o != null && (R.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : So.assertOptions(o, {
      encode: gt.function,
      serialize: gt.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), So.assertOptions(t, {
      baseUrl: gt.spelling("baseURL"),
      withXsrfToken: gt.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && R.merge(
      i.common,
      i[t.method]
    );
    i && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), t.headers = Ze.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, p;
    if (!c) {
      const f = [pu.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, u), p = f.length, l = Promise.resolve(t); d < p; )
        l = l.then(f[d++], f[d++]);
      return l;
    }
    p = a.length;
    let h = t;
    for (d = 0; d < p; ) {
      const f = a[d++], y = a[d++];
      try {
        h = f(h);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      l = pu.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, p = u.length; d < p; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(n) {
    n = hn(this.defaults, n);
    const t = u0(n.baseURL, n.url, n.allowAbsoluteUrls);
    return o0(t, n.params, n.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function(n) {
  dn.prototype[n] = function(t, r) {
    return this.request(hn(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(hn(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  dn.prototype[n] = t(), dn.prototype[n + "Form"] = t(!0);
});
let R2 = class p0 {
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
      r.reason || (r.reason = new Un(i, s, a), t(r.reason));
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
      token: new p0(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function k2(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function P2(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const $s = {
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
Object.entries($s).forEach(([e, n]) => {
  $s[n] = e;
});
function m0(e) {
  const n = new dn(e), t = Yf(dn.prototype.request, n);
  return R.extend(t, dn.prototype, n, { allOwnKeys: !0 }), R.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return m0(hn(e, o));
  }, t;
}
const ke = m0(kr);
ke.Axios = dn;
ke.CanceledError = Un;
ke.CancelToken = R2;
ke.isCancel = a0;
ke.VERSION = h0;
ke.toFormData = ui;
ke.AxiosError = te;
ke.Cancel = ke.CanceledError;
ke.all = function(n) {
  return Promise.all(n);
};
ke.spread = k2;
ke.isAxiosError = P2;
ke.mergeConfig = hn;
ke.AxiosHeaders = Ze;
ke.formToJSON = (e) => s0(R.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = x0.getAdapter;
ke.HttpStatusCode = $s;
ke.default = ke;
const {
  Axios: yv,
  AxiosError: bv,
  CanceledError: Sv,
  isCancel: wv,
  CancelToken: Ev,
  VERSION: _v,
  all: Cv,
  Cancel: Av,
  isAxiosError: Tv,
  spread: Ov,
  toFormData: Rv,
  AxiosHeaders: kv,
  HttpStatusCode: Pv,
  formToJSON: Iv,
  getAdapter: Nv,
  mergeConfig: jv
} = ke, at = Wt;
(function(e, n) {
  const t = Wt, r = e();
  for (; ; )
    try {
      if (parseInt(t(225)) / 1 * (-parseInt(t(220)) / 2) + -parseInt(t(254)) / 3 + -parseInt(t(209)) / 4 + -parseInt(t(212)) / 5 + -parseInt(t(253)) / 6 + -parseInt(t(250)) / 7 + parseInt(t(231)) / 8 * (parseInt(t(199)) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 188278);
const I2 = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Wt;
      if (t) {
        const i = t[o(241)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Ks = I2(void 0, function() {
  const e = Wt, n = {};
  n[e(222)] = e(193) + "+$";
  const t = n;
  return Ks[e(235)]()[e(246)](t[e(222)])[e(235)]()[e(240) + "r"](Ks)[e(246)](t[e(222)]);
});
Ks();
const rr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Wt;
      if (t) {
        const i = t[o(241)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), N2 = rr(void 0, function() {
  const e = Wt, n = { OAcua: function(i, s) {
    return i(s);
  }, SzkIn: function(i, s) {
    return i + s;
  }, yCaHD: e(247) + e(190), TmTuR: e(214) + e(244) + e(237) + " )", vvzmJ: e(197), TkTmz: e(221), wqXfG: e(189), TykgJ: e(218), QURFP: e(233), dLysZ: e(228), uEZfm: e(204), niNoK: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    t = n[e(229)](Function, n[e(223)](n[e(223)](n[e(200)], n[e(217)]), ");"))();
  } catch {
    t = window;
  }
  const r = t[e(238)] = t[e(238)] || {}, o = [n[e(213)], n[e(210)], n[e(252)], n[e(226)], n[e(248)], n[e(192)], n[e(216)]];
  for (let i = 0; n[e(207)](i, o[e(203)]); i++) {
    const s = rr[e(240) + "r"][e(232)][e(249)](rr), a = o[i], c = r[a] || s;
    s[e(194)] = rr[e(249)](rr), s[e(235)] = c[e(235)][e(249)](c), r[a] = s;
  }
});
N2();
at(219) + at(224) + at(202) + at(230);
ke[at(227)][at(201) + at(208)] = !0;
function Wt(e, n) {
  const t = jo();
  return Wt = function(r, o) {
    return r = r - 189, t[r];
  }, Wt(e, n);
}
const j2 = async (e) => {
  var t, r, o, i;
  const n = at;
  try {
    return (await ke(e))[n(242)];
  } catch (s) {
    throw ((r = (t = s[n(206)]) == null ? void 0 : t[n(242)]) == null ? void 0 : r[n(205)]) || ((i = (o = s[n(206)]) == null ? void 0 : o[n(242)]) == null ? void 0 : i[n(218)]) || s[n(205)];
  }
}, D2 = {};
D2[at(196) + "pe"] = at(251) + at(191);
function jo() {
  const e = ["v1/client", "16pXkLxl", "prototype", "exception", "params", "toString", "agEmt", 'rn this")(', "console", "PATCH", "constructo", "apply", "data", "ByxrV", 'ctor("retu', "VhkdA", "search", "return (fu", "QURFP", "bind", "228823UzkWXi", "applicatio", "wqXfG", "550014BtYYBR", "69672DOnxFn", "info", "nction() ", "n/json", "dLysZ", "(((.+)+)+)", "__proto__", "POST", "Content-Ty", "log", "PUT", "4231098PJszZx", "yCaHD", "withCreden", ":3000/api/", "length", "trace", "message", "response", "niNoK", "tials", "784772sSAOlZ", "TkTmz", "GET", "766920WORkAW", "vvzmJ", "{}.constru", "DELETE", "uEZfm", "TmTuR", "error", "http://192", "14wBdBor", "warn", "DYizY", "SzkIn", ".168.11.76", "36401DGoRFz", "TykgJ", "defaults", "table", "OAcua"];
  return jo = function() {
    return e;
  }, jo();
}
const we = Yt;
function Yt(e, n) {
  const t = Do();
  return Yt = function(r, o) {
    return r = r - 288, t[r];
  }, Yt(e, n);
}
(function(e, n) {
  const t = Yt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(291)) / 1 + -parseInt(t(316)) / 2 + parseInt(t(300)) / 3 * (-parseInt(t(325)) / 4) + -parseInt(t(340)) / 5 + -parseInt(t(331)) / 6 + parseInt(t(343)) / 7 + parseInt(t(326)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 518747);
const M2 = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Yt;
      if (t) {
        const i = t[o(347)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Zs = M2(void 0, function() {
  const e = Yt, n = {};
  n[e(344)] = e(314) + "+$";
  const t = n;
  return Zs[e(310)]()[e(289)](t[e(344)])[e(310)]()[e(345) + "r"](Zs)[e(289)](e(314) + "+$");
});
Zs();
function Do() {
  const e = ["exception", "ACTION_DOW", "keydown", "toString", "qCilh", "FpbWB", "ACTION_MOV", "(((.+)+)+)", "shortcutEv", "645902TbXmAr", "iPMkE", "qWTJL", "assistiveM", "touchmove", "log", "console", "{}.constru", "pdWcX", "140908SunJzT", "11712696XjIekA", "LYfEQ", "touchend", "prototype", "info", "1546914NRTDFm", "Event", "JjDYJ", 'ctor("retu', "touchstart", "keyBoardEv", "nction() ", 'rn this")(', "enuHide", "900310FHeBWF", "table", "__proto__", "5190962LwEOBG", "wyMMO", "constructo", "warn", "apply", "ACTION_UP", "error", "search", "WDavu", "397669QZMgJq", "trace", "wheelEvent", "length", "AhfFB", "YdZAB", "return (fu", "bind", "mousedown", "45PnxcQj", "keyup", "mouseup", "moveEvent", "ent", "fullscreen", "mousemove"];
  return Do = function() {
    return e;
  }, Do();
}
const or = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Yt;
      if (t) {
        const i = t[o(347)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), L2 = or(void 0, function() {
  const e = Yt, n = { qCilh: function(i, s) {
    return i(s);
  }, iPMkE: function(i, s) {
    return i + s;
  }, LYfEQ: e(323) + e(334) + e(338) + " )", AhfFB: function(i) {
    return i();
  }, JjDYJ: e(321), WDavu: e(346), YdZAB: e(330), FpbWB: e(288), qWTJL: e(341), pdWcX: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    const i = n[e(311)](Function, n[e(317)](n[e(317)](e(297) + e(337), n[e(327)]), ");"));
    t = n[e(295)](i);
  } catch {
    t = window;
  }
  const r = t[e(322)] = t[e(322)] || {}, o = [n[e(333)], n[e(290)], n[e(296)], n[e(312)], e(307), n[e(318)], e(292)];
  for (let i = 0; n[e(324)](i, o[e(294)]); i++) {
    const s = or[e(345) + "r"][e(329)][e(298)](or), a = o[i], c = r[a] || s;
    s[e(342)] = or[e(298)](or), s[e(310)] = c[e(310)][e(298)](c), r[a] = s;
  }
});
L2();
const tn = {};
tn[we(306)] = we(313) + "E", tn[we(302)] = we(348), tn[we(299)] = we(308) + "N", tn[we(320)] = we(313) + "E", tn[we(328)] = we(348), tn[we(335)] = we(308) + "N";
const bt = tn, Js = {};
Js[we(301)] = we(348), Js[we(309)] = we(308) + "N";
const B2 = Js, F2 = we(303), z2 = we(293), V2 = we(336) + we(304), g0 = we(319) + we(339), Qs = we(315) + we(304), H2 = we(305) + we(332);
(function(e, n) {
  const t = Xt, r = e();
  for (; ; )
    try {
      if (parseInt(t(208)) / 1 + -parseInt(t(204)) / 2 + parseInt(t(222)) / 3 * (parseInt(t(225)) / 4) + parseInt(t(236)) / 5 + parseInt(t(229)) / 6 * (parseInt(t(247)) / 7) + -parseInt(t(262)) / 8 + parseInt(t(313)) / 9 * (parseInt(t(196)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 805014);
const U2 = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Xt;
      if (t) {
        const i = t[o(240)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ea = U2(void 0, function() {
  const e = Xt, n = {};
  n[e(252)] = e(290) + "+$";
  const t = n;
  return ea[e(250)]()[e(306)](t[e(252)])[e(250)]()[e(275) + "r"](ea)[e(306)](t[e(252)]);
});
ea();
const ir = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Xt;
      if (t) {
        const i = t[o(240)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), q2 = ir(void 0, function() {
  const e = Xt, n = { rFLID: function(i, s) {
    return i(s);
  }, CoaRg: function(i, s) {
    return i + s;
  }, uDWkr: e(210) + e(198), RWZtl: e(189) + e(256) + e(308) + " )", Risps: function(i) {
    return i();
  }, tOuTc: e(211), BMJxj: e(232), LYYuy: e(314), EssoM: e(287), uLxse: e(249), ZUTdS: e(268), NhREN: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    const i = n[e(237)](Function, n[e(326)](n[e(326)](n[e(266)], n[e(282)]), ");"));
    t = n[e(244)](i);
  } catch {
    t = window;
  }
  const r = t[e(270)] = t[e(270)] || {}, o = [n[e(279)], n[e(297)], n[e(298)], n[e(206)], n[e(214)], n[e(286)], e(329)];
  for (let i = 0; n[e(194)](i, o[e(199)]); i++) {
    const s = ir[e(275) + "r"][e(217)][e(273)](ir), a = o[i], c = r[a] || s;
    s[e(301)] = ir[e(273)](ir), s[e(250)] = c[e(250)][e(273)](c), r[a] = s;
  }
});
q2();
function Xt(e, n) {
  const t = Mo();
  return Xt = function(r, o) {
    return r = r - 185, t[r];
  }, Xt(e, n);
}
const W2 = ({ isMobile: e, assistive: n, onImgEvent: t, canvasContent: r, imageRef: o }) => {
  const i = Xt, s = { ZGFZp: function(h, f) {
    return h == f;
  }, SWkyA: function(h, f) {
    return h == f;
  }, Ftuxv: function(h, f, y) {
    return h(f, y);
  }, LUgYI: function(h, f) {
    return h == f;
  }, etxQR: function(h, f) {
    return h(f);
  }, qdTES: function(h, f) {
    return h != f;
  }, WJGOa: function(h, f) {
    return h == f;
  }, uUfvt: function(h, f) {
    return h - f;
  }, emecC: function(h, f) {
    return h - f;
  }, EsVLu: function(h, f, y) {
    return h(f, y);
  }, DHWoY: i(238), HtkAq: function(h, f) {
    return h - f;
  }, vodMP: i(191), YOTFU: i(201), BdIsZ: i(335), KnjgS: i(251) + i(242), gitli: function(h, f) {
    return h == f;
  }, aNeRr: i(213), wjPJN: i(243), pRDsd: i(216) + i(207), WUlsD: i(302), eOTmr: i(334), OTCLD: i(187), zMMoJ: function(h, f) {
    return h == f;
  }, xucST: i(327), WkFSG: function(h, f) {
    return h == f;
  }, HUgJY: i(330), UpMoo: function(h, f) {
    return h == f;
  }, JOins: i(323), QNPPV: function(h, f) {
    return h == f;
  }, liVgA: function(h, f) {
    return h == f;
  }, zBMMZ: function(h, f) {
    return h(f);
  }, xKAPv: function(h) {
    return h();
  }, QpgFr: i(241), DedMK: i(333), tsIfI: i(316), micXC: i(317), dwqjQ: i(227), ZCfrQ: i(324), HGoRE: function(h, f, y) {
    return h(f, y);
  } }, [a, c] = s[i(193)](Xe, !1), u = (h) => {
    const f = i;
    if (h[f(321) + f(292)](), !o[f(231)]) return;
    const y = o[f(231)];
    let m = bt[h[f(192)]];
    if (n[f(281)] == !0 || s[f(248)](n[f(337)], !0)) {
      s[f(233)](m, bt[f(340)]) && s[f(274)](t, g0, {});
      return;
    }
    if (s[f(283)](m, bt[f(324)]) && s[f(254)](c, !0), s[f(263)](m, bt[f(324)]) && a == !1) return;
    s[f(190)](m, bt[f(340)]) && s[f(254)](c, !1);
    let _, w;
    const C = y[f(339) + f(319) + "t"]();
    if (h[f(192)][f(205)](f(234))) {
      const { touches: k, changedTouches: v } = h, O = k[0] ?? v[0];
      _ = s[f(293)](O[f(228)], C[f(257)]), w = O[f(310)] - C[f(221)];
    } else h[f(192)][f(205)](f(296)) && (_ = s[f(293)](h[f(267)], C[f(257)]), w = s[f(312)](h[f(259)], C[f(221)]));
    s[f(278)](t, F2, { action: s[f(219)], keyAction: m, x: _, y: w, width: C[f(336)], height: C[f(299)] }), y[f(197)]();
  }, l = (h) => {
    const f = i;
    if (h[f(321) + f(292)](), !o[f(231)]) return;
    const y = o[f(231)], m = Math[f(230)](h[f(284)]), _ = y[f(339) + f(319) + "t"]();
    t(z2, { action: f(271), width: y[f(303) + "h"], height: y[f(328) + "ht"], x: s[f(293)](h[f(267)], _[f(257)]), y: s[f(212)](h[f(259)], _[f(221)]), delta: m }), y[f(197)]();
  }, d = async (h) => {
    const f = i;
    if (h[f(321) + f(292)](), !o[f(231)]) return;
    const y = o[f(231)], m = B2[h[f(192)]], _ = h[f(302)][f(331) + "e"](), w = (v) => {
      const O = f;
      return [s[O(289)], s[O(338)], s[O(215)]][O(205)](v);
    };
    if (s[f(277)](s[f(193)](w, _), !0)) return;
    const C = async () => {
      const v = f, O = {};
      O[v(320)] = v(188), O[v(291)] = m, O[v(243)] = s[v(325)], O[v(302)] = h[v(302)], O[v(258)] = 0, O[v(239)] = 0;
      const E = O;
      return s[v(318)](h[v(341)], !0) ? s[v(283)](_, "c") ? E[v(243)] = s[v(305)] : _ == "a" ? (E[s[v(288)]] = s[v(209)], E[v(239)] = 4096, E[s[v(269)]] = 29) : s[v(233)](_, "v") && (E[s[v(288)]] = v(220), E[s[v(269)]] = await navigator[v(223)][v(300)]()) : s[v(233)](_, s[v(203)]) ? (E[s[v(288)]] = s[v(209)], E[s[v(269)]] = 19) : _ == s[v(272)] ? (E[v(243)] = s[v(209)], E[s[v(269)]] = 20) : s[v(285)](_, s[v(342)]) ? (E[s[v(288)]] = s[v(209)], E[v(302)] = 21) : s[v(233)](_, v(185)) ? (E[s[v(288)]] = s[v(209)], E[v(302)] = 22) : s[v(235)](_, s[v(253)]) ? (E[v(243)] = s[v(209)], E[s[v(269)]] = 67) : s[v(200)](_, s[v(304)]) ? (E[s[v(288)]] = v(216) + v(207), E[v(302)] = 66) : s[v(276)](_, v(322)) && (E[v(243)] = v(216) + v(207), E[s[v(269)]] = 61), E[v(192)] == s[v(325)] && s[v(190)](h[v(311)], !0) && (E[s[v(269)]] = E[v(302)][v(280) + "e"]()), E;
    }, k = await s[f(246)](C);
    k && t(V2, k), y[f(197)]();
  };
  s[i(278)](Ge, () => {
    const h = i, f = {};
    f[h(202)] = s[h(309)], f[h(294)] = s[h(245)], f[h(218)] = h(340), f[h(265)] = s[h(260)];
    const y = f, m = o[h(231)];
    if (m) {
      const _ = {};
      _[h(195)] = !1;
      const w = _;
      return e ? (m[h(224) + h(255)](h(315), u, w), m[h(224) + h(255)](s[h(309)], u, w), m[h(224) + h(255)](s[h(226)], u)) : (m[h(224) + h(255)](s[h(186)], l, w), m[h(224) + h(255)](h(316), d), [s[h(245)], s[h(261)], h(340)][h(264)]((C) => {
        const k = h;
        m[k(224) + k(255)](C, u);
      })), () => {
        const C = h;
        m && (e ? [C(315), y[C(202)], C(317)][C(264)]((k) => {
          const v = C;
          m[v(307) + v(332)](k, u);
        }) : ([y[C(294)], C(324), y[C(218)], C(227), y[C(265)]][C(264)]((k) => {
          const v = C;
          m[v(307) + v(332)](k, u);
        }), m[C(307) + C(332)](y[C(265)], d)));
      };
    }
  }, [e, u, l, d]);
  const p = { ref: o, ...r };
  return s[i(295)](H.jsx, Ud, p);
};
function Mo() {
  const e = ["QpgFr", "pageY", "shiftKey", "emecC", "2799GaDTRr", "info", "touchstart", "keydown", "touchend", "gitli", "gClientRec", "action", "preventDef", "tab", "enter", "mousedown", "KnjgS", "CoaRg", "arrowleft", "offsetHeig", "trace", "backspace", "toLowerCas", "tListener", "mousemove", "arrowup", "capslock", "width", "showMenu", "YOTFU", "getBoundin", "mouseup", "ctrlKey", "xucST", "arrowright", "dwqjQ", "arrowdown", "keyEvent", "{}.constru", "WJGOa", "control", "type", "zBMMZ", "NhREN", "passive", "72700MsavTw", "focus", "nction() ", "length", "UpMoo", "shift", "pgftT", "eOTmr", "2853882igrFTL", "includes", "EssoM", "ODE", "274258bMZVFW", "pRDsd", "return (fu", "log", "HtkAq", "COPY_TEXT", "uLxse", "BdIsZ", "KEYBOARD_C", "prototype", "HIvcJ", "DHWoY", "PASTE_TEXT", "top", "470697rzKHSP", "clipboard", "addEventLi", "4RArFeZ", "micXC", "wheel", "pageX", "18yWiWWu", "sign", "current", "warn", "SWkyA", "touch", "WkFSG", "1567770lxKSns", "rFLID", "touchEvent", "meta_state", "apply", "touchmove", "EXT", "typeKey", "Risps", "DedMK", "xKAPv", "549619LUZAld", "ZGFZp", "exception", "toString", "KEYBOARD_T", "GQNxZ", "HUgJY", "etxQR", "stener", 'ctor("retu', "left", "repeat", "clientY", "tsIfI", "ZCfrQ", "8074216wZSItj", "qdTES", "forEach", "xLpSf", "uDWkr", "clientX", "table", "WUlsD", "console", "wheelEvent", "OTCLD", "bind", "Ftuxv", "constructo", "QNPPV", "liVgA", "EsVLu", "tOuTc", "toUpperCas", "isDown", "RWZtl", "LUgYI", "deltaY", "zMMoJ", "ZUTdS", "error", "wjPJN", "vodMP", "(((.+)+)+)", "keyAction", "ault", "uUfvt", "ifaYn", "HGoRE", "mouse", "BMJxj", "LYYuy", "height", "readText", "__proto__", "key", "offsetWidt", "JOins", "aNeRr", "search", "removeEven", 'rn this")('];
  return Mo = function() {
    return e;
  }, Mo();
}
const Y2 = "data:image/png;base64,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";
function Gt(e, n) {
  const t = Lo();
  return Gt = function(r, o) {
    return r = r - 267, t[r];
  }, Gt(e, n);
}
const di = Gt;
function Lo() {
  const e = ['rn this")(', "cQaVa", "dAVgf", "div", "search", "prototype", "UquXu", "JMLQg", "length", "uBweT", "log", "{}.constru", "return (fu", "15151912uOYSqQ", "nction() ", "console", "warn", "1004225yxpDcp", "(((.+)+)+)", "error", "toString", "exception", "trace", "constructo", "1381578BEFzkB", "bind", "apply", "sGrGN", "7564438huwayG", "img", "3476BLjkFE", "1422WqIEmX", "FcUuR", "5896272DQKatK", "table", 'ctor("retu', "RXScI", "96552kEFSKq", "info", "__proto__"];
  return Lo = function() {
    return e;
  }, Lo();
}
(function(e, n) {
  const t = Gt, r = e();
  for (; ; )
    try {
      if (parseInt(t(300)) / 1 + parseInt(t(287)) / 2 + -parseInt(t(294)) / 3 * (-parseInt(t(293)) / 4) + -parseInt(t(280)) / 5 + -parseInt(t(296)) / 6 + -parseInt(t(291)) / 7 + parseInt(t(276)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 829045);
const X2 = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Gt;
      if (t) {
        const i = t[o(289)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ta = X2(void 0, function() {
  const e = Gt, n = {};
  n[e(272)] = e(281) + "+$";
  const t = n;
  return ta[e(283)]()[e(267)](t[e(272)])[e(283)]()[e(286) + "r"](ta)[e(267)](t[e(272)]);
});
ta();
const sr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Gt;
      if (t) {
        const i = t[o(289)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), G2 = sr(void 0, function() {
  const e = Gt, n = {};
  n[e(305)] = function(a, c) {
    return a + c;
  }, n[e(299)] = e(275) + e(277), n[e(270)] = e(274) + e(298) + e(303) + " )", n[e(304)] = e(273), n[e(290)] = e(279), n[e(269)] = e(301), n[e(295)] = e(284);
  const t = n, r = function() {
    const a = e;
    let c;
    try {
      c = Function(t[a(305)](t[a(299)], t[a(270)]) + ");")();
    } catch {
      c = window;
    }
    return c;
  }, o = r(), i = o[e(278)] = o[e(278)] || {}, s = [t[e(304)], t[e(290)], t[e(269)], e(282), t[e(295)], e(297), e(285)];
  for (let a = 0; a < s[e(271)]; a++) {
    const c = sr[e(286) + "r"][e(268)][e(288)](sr), u = s[a], l = i[u] || c;
    c[e(302)] = sr[e(288)](sr), c[e(283)] = l[e(283)][e(288)](l), i[u] = c;
  }
});
G2();
const $2 = dt[di(306)]`
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
`, Ct = dt[di(306)]`
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
`, At = dt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, K2 = dt[di(292)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, Z2 = dt[di(306)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = Et, r = e();
  for (; ; )
    try {
      if (parseInt(t(242)) / 1 * (parseInt(t(291)) / 2) + -parseInt(t(268)) / 3 + parseInt(t(257)) / 4 + parseInt(t(290)) / 5 + parseInt(t(276)) / 6 * (parseInt(t(270)) / 7) + -parseInt(t(253)) / 8 * (-parseInt(t(232)) / 9) + -parseInt(t(236)) / 10 * (parseInt(t(234)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 481961);
function Bo() {
  const e = ["nction() ", "dHdll", "enElement", "Element", "reen", "een", "zAzwg", "mozRequest", "webkitExit", "lscreen", "48069YZjDau", "mozCancelF", "11LmvOxo", "warn", "22579630BmTvnR", "return (fu", "bind", "querySelec", "XilJw", "FullScreen", "639563IxjzPB", "{}.constru", "fullscreen", "EGRaL", "ullscreen", "estFullscr", "vSGyz", "fVKie", "search", "(((.+)+)+)", "msRequestF", "1216xTXRia", "length", "eenElement", "toString", "3615976dbqxoC", "msExitFull", "error", "screenElem", "exitFullsc", "console", "tor", "ent", "webkitRequ", "apply", "#screen_", "2718195QUThOW", "mozFullScr", "112EbDkhY", "info", "HxkZt", "constructo", "sIVlN", "requestFul", "316374QiPBZJ", "webkitFull", "trace", "screen", 'rn this")(', "Fullscreen", "ullScreen", "exception", "__proto__", "msFullscre", "prototype", "log", "SlFET", "table", "2234680MlEzzw", "2TBWxOi", "oMzzM", 'ctor("retu'];
  return Bo = function() {
    return e;
  }, Bo();
}
const J2 = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Et;
      if (t) {
        const i = t[o(266)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), na = J2(void 0, function() {
  const e = Et, n = {};
  n[e(248)] = e(251) + "+$";
  const t = n;
  return na[e(256)]()[e(250)](t[e(248)])[e(256)]()[e(273) + "r"](na)[e(250)](t[e(248)]);
});
na();
const ar = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Et;
      if (t) {
        const i = t[o(266)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Q2 = ar(void 0, function() {
  const e = Et, n = { dHdll: function(i, s) {
    return i(s);
  }, EGRaL: function(i, s) {
    return i + s;
  }, SlFET: e(243) + e(293) + e(280) + " )", fVKie: function(i) {
    return i();
  }, oMzzM: e(271), sIVlN: e(259), zAzwg: e(289), XilJw: e(278), HxkZt: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    const i = n[e(295)](Function, n[e(245)](e(237) + e(294) + n[e(288)], ");"));
    t = n[e(249)](i);
  } catch {
    t = window;
  }
  const r = t[e(262)] = t[e(262)] || {}, o = [e(287), e(235), n[e(292)], n[e(274)], e(283), n[e(300)], n[e(240)]];
  for (let i = 0; n[e(272)](i, o[e(254)]); i++) {
    const s = ar[e(273) + "r"][e(286)][e(238)](ar), a = o[i], c = r[a] || s;
    s[e(284)] = ar[e(238)](ar), s[e(256)] = c[e(256)][e(238)](c), r[a] = s;
  }
});
Q2();
function Et(e, n) {
  const t = Bo();
  return Et = function(r, o) {
    return r = r - 232, t[r];
  }, Et(e, n);
}
const gu = () => {
  const e = Et;
  return document[e(244) + e(297)] || document[e(269) + e(255)] || document[e(277) + e(260) + e(264)] || document[e(285) + e(296)];
}, ev = (e) => {
  const n = Et, t = document[n(239) + n(263)](n(267) + e);
  t[n(275) + n(303)] ? t[n(275) + n(303)]() : t[n(301) + n(241)] ? t[n(301) + n(241)]() : t[n(265) + n(247) + n(299)] ? t[n(265) + n(247) + n(299)]() : t[n(252) + n(246)] && t[n(252) + n(246)]();
}, tv = () => {
  const e = Et;
  document[e(261) + e(298)] ? document[e(261) + e(298)]() : document[e(233) + e(282)] ? document[e(233) + e(282)]() : document[e(302) + e(281)] ? document[e(302) + e(281)]() : document[e(258) + e(279)] && document[e(258) + e(279)]();
};
(function(e, n) {
  const t = $t, r = e();
  for (; ; )
    try {
      if (-parseInt(t(680)) / 1 + -parseInt(t(508)) / 2 + parseInt(t(487)) / 3 + parseInt(t(524)) / 4 + -parseInt(t(435)) / 5 * (parseInt(t(728)) / 6) + parseInt(t(797)) / 7 + parseInt(t(552)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 434056);
const nv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = $t;
      if (t) {
        const i = t[o(558)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ra = nv(void 0, function() {
  const e = $t, n = {};
  n[e(707)] = e(713) + "+$";
  const t = n;
  return ra[e(690)]()[e(466)](t[e(707)])[e(690)]()[e(549) + "r"](ra)[e(466)](t[e(707)]);
});
ra();
const cr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = $t;
      if (t) {
        const i = t[o(558)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), rv = cr(void 0, function() {
  const e = $t, n = { MKpNu: function(i, s) {
    return i(s);
  }, dDugA: function(i, s) {
    return i + s;
  }, vBJFT: e(539) + e(518) + e(675) + " )", lmjdc: function(i) {
    return i();
  }, qxUxN: e(629), WSeUR: e(650), NlCDo: e(670), ttfcV: e(567), ebRYW: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    const i = n[e(717)](Function, n[e(800)](e(553) + e(799), n[e(687)]) + ");");
    t = n[e(615)](i);
  } catch {
    t = window;
  }
  const r = t[e(493)] = t[e(493)] || {}, o = [e(500), e(774), n[e(589)], n[e(669)], n[e(769)], e(796), n[e(813)]];
  for (let i = 0; n[e(663)](i, o[e(694)]); i++) {
    const s = cr[e(549) + "r"][e(515)][e(692)](cr), a = o[i], c = r[a] || s;
    s[e(806)] = cr[e(692)](cr), s[e(690)] = c[e(690)][e(692)](c), r[a] = s;
  }
});
rv();
const ov = Tu((e, n) => {
  const t = $t, r = { qCxkB: function(b, x) {
    return b == x;
  }, sonuv: function(b, x) {
    return b - x;
  }, uoRuE: t(795), SoguT: function(b, x) {
    return b(x);
  }, CqgdM: function(b, x) {
    return b(x);
  }, inyKK: t(502) + "0", Xlqds: function(b, x) {
    return b(x);
  }, naZtM: function(b, x) {
    return b - x;
  }, fxREq: function(b, x) {
    return b - x;
  }, tGVgK: function(b, x) {
    return b - x;
  }, nxEqV: function(b, x) {
    return b == x;
  }, UNhYT: function(b, x) {
    return b < x;
  }, kOnKE: function(b, x) {
    return b(x);
  }, ucBhk: t(704), XqqDb: t(642), YVYLG: t(647), EQRhP: function(b, x) {
    return b === x;
  }, sNoKn: t(755), TQzgO: function(b) {
    return b();
  }, FVeYD: function(b, x) {
    return b(x);
  }, AFXGH: function(b) {
    return b();
  }, DaZSW: t(599) + t(492), niDMM: function(b, x) {
    return b === x;
  }, Kluhw: t(756), zQeYe: t(585), iOkoe: function(b, x) {
    return b === x;
  }, aGjtO: t(654), ZnboB: function(b, x, S) {
    return b(x, S);
  }, hTaEw: function(b, x, S) {
    return b(x, S);
  }, EyscI: function(b, x) {
    return b(x);
  }, mCAnB: t(755) + t(646), bzIuh: t(732) + t(768), nxWQj: t(532), alDmz: t(503), XbByc: t(641), lXteh: t(522), yNCdU: t(729), NqNqb: t(464), vnGzG: t(809), zuPeR: function(b, x) {
    return b(x);
  }, lYbrJ: t(595), ujBxy: t(722), sKwju: t(477), MEYIH: function(b) {
    return b();
  }, NkKQU: function(b, x) {
    return b(x);
  }, zHmPy: function(b, x) {
    return b(x);
  }, hzwVU: function(b, x) {
    return b(x);
  }, qQzkL: function(b, x) {
    return b(x);
  }, AQeub: t(652), pmWHz: function(b, x) {
    return b(x);
  }, vYsrW: function(b, x, S) {
    return b(x, S);
  }, nFzkG: function(b, x, S) {
    return b(x, S);
  }, vYFMH: function(b, x, S) {
    return b(x, S);
  }, oHBdr: t(501) + t(486) + t(494), VGHWa: t(752), ctqxQ: t(574) + t(479) + "1)", cFAvb: function(b, x, S) {
    return b(x, S);
  }, VTwbO: t(681), cNqPp: t(751) + t(808) + t(636) + t(616) + t(695) + t(705) + t(761), wgTDe: t(708) + t(517) + t(591) + t(788) + t(600) + t(778) + t(714), jSZPN: t(505), xcWtb: t(689), MlUcT: t(699) + t(807) + t(475) + t(437) + t(779) + t(449) + t(604) + t(516) + t(446) + t(731) + t(783) + t(662) + t(644) + t(664) + t(742) + t(696) + t(440) + t(590) + t(719) + t(716) + t(655), mmhlb: t(454) + t(786) + t(745), zHaXX: t(737), RphxL: function(b, x, S) {
    return b(x, S);
  }, WVytz: t(736) + t(427) + t(760) + t(810) + t(639) + t(571) + t(437) + t(779) + t(649) + t(604) + t(785) + t(604) + t(661) + t(453) + t(444) + t(575) + t(541) + t(667) + t(683) + t(703) + t(701) + t(633) + t(607) + t(564), IAyaS: t(821), yQVFs: t(668), HbNgw: function(b, x, S) {
    return b(x, S);
  }, VJuNY: t(631), XtIAP: t(718), fMHhP: function(b, x, S) {
    return b(x, S);
  }, HPDcD: t(657), sUMtA: function(b, x, S) {
    return b(x, S);
  }, PyVPM: function(b, x, S) {
    return b(x, S);
  }, AovYo: t(572), RKEuo: function(b, x, S) {
    return b(x, S);
  }, TmNxa: t(433), GekTV: t(627), fAjpS: function(b, x, S) {
    return b(x, S);
  }, YMcLK: function(b, x, S) {
    return b(x, S);
  }, EsbMY: t(482), xdEsJ: t(740), zCiPk: function(b, x, S) {
    return b(x, S);
  }, qUpJl: function(b, x, S) {
    return b(x, S);
  }, fSfXY: t(588), jCBem: t(746), liJYI: function(b, x, S) {
    return b(x, S);
  }, nBDFp: function(b, x, S) {
    return b(x, S);
  }, npxfT: t(566), fgltD: function(b, x, S) {
    return b(x, S);
  }, hjDUA: t(542) }, { displayId: o, isMobile: i, onSenData: s, status: a, imageRef: c, isShowDeviceId: u } = e, [l, d] = r[t(573)](Xe, 0), [p, h] = r[t(817)](Xe, 0), [f, y] = r[t(587)](Xe, null), [m, _] = Xe(0), w = r[t(606)](Fe, null), C = r[t(573)](Fe, null), k = r[t(573)](Fe, null), [v, O] = r[t(530)](Xe, { cursor: r[t(789)], opacity: 0.3, zIndex: 999 }), [E, j] = r[t(530)](Xe, { zIndex: 999, height: "", width: r[t(720)] }), B = {};
  B[t(674)] = 1e3;
  const [W, re] = r[t(798)](Xe, B), G = r[t(619)](Fe, null), [M, V] = r[t(721)](Xe, null), F = (b) => {
    const x = t;
    if (b[x(514) + x(775)](), r[x(730)](a[x(610)][x(620)], !0)) return;
    const S = bt[b[x(459)]], q = c[x(476)], L = k[x(476)], le = q[x(782) + x(776) + "t"](), X = L[x(782) + x(776) + "t"]();
    let pe, Je;
    const et = le[x(485)] - X[x(485)], _t = r[x(584)](le[x(432)], X[x(432)]);
    if (b[x(459)][x(430)](x(673))) {
      const { touches: Ae, changedTouches: ze } = b, je = Ae[0] ?? ze[0];
      pe = je[x(441)], Je = je[x(504)];
    } else b[x(459)][x(430)](x(634)) && (pe = b[x(452)], Je = b[x(561)]);
    if (S == bt[x(729)]) {
      const Ae = r[x(672)][x(601)]("|");
      let ze = 0;
      for (; ; ) {
        switch (Ae[ze++]) {
          case "0":
            d(r[x(584)](pe, X[x(559)]));
            continue;
          case "1":
            r[x(822)](_, performance[x(648)]());
            continue;
          case "2":
            const je = {};
            je[x(626)] = 1, je[x(594)] = x(596);
            const It = { ...v, ...je };
            r[x(822)](O, It);
            continue;
          case "3":
            a[x(512)]({ ...a[x(610)], isDown: !0 });
            continue;
          case "4":
            r[x(790)](h, r[x(584)](Je, X[x(429)]));
            continue;
        }
        break;
      }
    } else if (r[x(730)](S, bt[x(522)])) {
      const Ae = r[x(653)][x(601)]("|");
      let ze = 0;
      for (; ; ) {
        switch (Ae[ze++]) {
          case "0":
            const je = {};
            je[x(429)] = Ce + "px", je[x(559)] = Se + "px";
            const It = { ...E, ...je };
            r[x(499)](j, It);
            continue;
          case "1":
            if (r[x(730)](a[x(610)][x(450)], !1)) return;
            continue;
          case "2":
            Ce = Math[x(483)](3, r[x(529)](Math[x(521)](Ce, _t), 3));
            continue;
          case "3":
            var Ce = r[x(560)](r[x(584)](Je, p), le[x(429)]);
            continue;
          case "4":
            var Se = pe - l - le[x(559)];
            continue;
          case "5":
            Se = Math[x(483)](3, r[x(679)](Math[x(521)](Se, et), 3));
            continue;
        }
        break;
      }
    } else if (S == bt[x(464)]) {
      const Ae = r[x(529)](performance[x(648)](), m);
      if (r[x(471)](f, bt[x(729)]) || r[x(563)](Ae, 100)) {
        const ze = {};
        ze[x(620)] = !0, ze[x(450)] = !1, a[x(512)]({ ...a[x(610)], ...ze });
      } else a[x(512)]({ ...a[x(610)], isDown: !1 });
      r[x(721)](O, { ...v, opacity: 0.3, cursor: r[x(789)] });
    }
    r[x(721)](y, S), L[x(624)]();
  }, ne = async (b) => {
    const x = t;
    b[x(514) + x(775)]();
    const S = b[x(443)][x(767)](r[x(723)])[x(818) + "te"](r[x(605)]);
    if (r[x(781)](S, r[x(700)]))
      r[x(577)](gu) ? r[x(741)](tv) : r[x(442)](ev, o);
    else {
      const q = {};
      q[x(763)] = r[x(715)], q[x(733)] = S, q[x(585)] = "";
      const L = q;
      r[x(617)](S, r[x(473)]) && (L[r[x(635)]] = await navigator[x(421)][x(685)]()), r[x(618)](S, r[x(764)]) && (L[x(609)] = x(519) + "py"), r[x(666)](s, Qs, L);
    }
    a[x(512)]({ ...a[x(610)], showMenu: !1 }), C[x(476)][x(624)]();
  }, J = (b) => {
    const x = t, S = r[x(577)](gu);
    r[x(792)](s, H2, S);
  };
  Ge(() => {
    const b = t;
    r[b(790)](requestAnimationFrame, () => {
      const x = b, S = { ...W };
      S[x(626)] = a[x(610)][x(620)] ? 1 : 0, r[x(817)](re, S);
    });
  }, [a]), r[t(665)](Ge, () => {
    const b = t, x = c[b(476)], S = [r[b(495)], b(608) + b(448) + "ge", r[b(557)], b(805) + b(540)];
    return x && S[b(645)]((q) => {
      const L = b;
      x[L(536) + L(684)](q, J);
    }), () => {
      const q = b;
      x && x[q(702) + q(565)](q(532), J);
    };
  }, []), r[t(792)](Ge, () => {
    const b = t, x = k[b(476)], S = C[b(476)];
    if (S && S[b(536) + b(684)](b(532), ne), x) {
      const q = {};
      q[b(625)] = !1;
      const L = q;
      return i ? (x[b(536) + b(684)](r[b(598)], F, L), x[b(536) + b(684)](r[b(628)], F, L), x[b(536) + b(684)](r[b(468)], F)) : [b(522), b(729), r[b(711)]][b(645)]((le) => {
        const X = b;
        x[X(536) + X(684)](le, F);
      }), () => {
        const le = b;
        S && S[le(702) + le(565)](r[le(794)], ne), x && (i ? [r[le(598)], le(809), r[le(468)]][le(645)]((X) => {
          const pe = le;
          x[pe(702) + pe(565)](X, F);
        }) : [r[le(614)], r[le(525)], r[le(711)]][le(645)]((X) => {
          const pe = le;
          x[pe(702) + pe(565)](X, F);
        }));
      };
    }
  }, [i, F]);
  const Z = () => {
    const b = t;
    r[b(798)](j, { zIndex: 999, height: G[b(476)] == r[b(467)] ? r[b(438)] : null, width: G[b(476)] != r[b(467)] ? r[b(438)] : null, top: r[b(546)], right: "5%" });
  };
  r[t(496)](Ou, n, () => ({ fixTouch: (b) => {
    const x = t;
    b && (G[x(476)] = b), r[x(422)](Z);
  }, setFullscreen: (b) => {
    V(b);
  } }));
  const $ = {};
  $[t(611)] = t(574) + t(479) + "1)";
  const oe = {};
  oe.d = t(793) + t(802) + t(779) + t(465) + t(604) + t(516) + t(446) + t(484) + t(575) + t(727) + t(748) + t(750) + t(460);
  const Q = {};
  Q.cx = t(820), Q.cy = "18", Q.r = "1";
  const K = {};
  K[t(611)] = t(574) + t(479) + "1)";
  const ee = {};
  ee.d = t(780) + t(677) + t(551) + t(556) + t(507) + t(724) + t(545) + t(513) + t(602) + t(462) + t(770) + t(765);
  const de = {};
  de.d = t(630) + t(447) + t(436) + t(640) + t(470) + t(735) + t(787) + t(773) + t(457) + t(612) + t(469) + t(520) + t(660) + t(734) + t(812) + t(676) + t(643) + t(678) + t(592) + t(749) + t(747) + t(712) + t(819) + t(757) + t(771) + t(491) + t(480) + t(697) + t(593) + t(570) + t(488) + t(710) + t(804) + t(555) + t(428) + t(578) + t(431) + t(726) + t(632);
  const ue = {};
  ue.d = t(426) + t(698) + t(803) + t(671) + t(537) + t(550) + t(744) + t(686) + t(445) + t(709) + t(538) + t(527) + t(637) + t(638) + t(543) + t(586) + t(579) + t(528) + t(490) + t(451) + t(814) + t(425) + t(456) + t(489) + t(562) + t(623);
  const he = {};
  he.d = t(693) + t(603) + t(478) + t(463);
  const A = {};
  A[t(611)] = t(574) + t(479) + "1)";
  const P = {};
  P.d = t(758) + t(439) + t(581) + t(762) + t(506) + t(434) + t(547) + t(548) + t(688);
  const N = {};
  return N.d = t(509) + t(472) + t(725) + t(583) + t(550) + t(659) + t(531) + t(597) + t(526), H.jsxs(H.Fragment, { children: [a[t(610)][t(620)] ? r[t(582)](H.jsxs, $2, { id: t(651) + t(766) + o, style: W, ref: C, children: [r[t(666)](H.jsxs, Ct, { "data-id": t(755), children: [H.jsx(t(689), { xmlns: r[t(534)], width: "28", height: "28", viewBox: r[t(423)], style: { fill: r[t(497)] }, children: r[t(613)](H.jsx, r[t(784)], { d: M ? r[t(535)] : r[t(568)] }) }), H.jsx(At, { children: r[t(455)] })] }), r[t(665)](H.jsxs, Ct, { "data-id": r[t(764)], children: [H.jsxs(r[t(576)], { xmlns: r[t(534)], width: "28", height: "28", viewBox: r[t(423)], style: $, children: [r[t(792)](H.jsx, t(681), { d: r[t(481)] }), r[t(613)](H.jsx, r[t(784)], { d: r[t(743)] })] }), r[t(582)](H.jsx, At, { children: r[t(823)] })] }), r[t(496)](H.jsxs, Ct, { "data-id": r[t(473)], children: [r[t(544)](H.jsx, r[t(576)], { xmlns: r[t(534)], width: "28", height: "28", viewBox: r[t(423)], style: { fill: r[t(497)] }, children: r[t(665)](H.jsx, r[t(784)], { d: r[t(706)] }) }), H.jsx(At, { children: r[t(569)] })] }), r[t(544)](H.jsxs, Ct, { "data-id": r[t(533)], children: [H.jsxs(t(689), { xmlns: t(501) + t(486) + t(494), width: "28", height: "28", viewBox: t(752), style: { fill: r[t(497)] }, children: [H.jsx(t(681), oe), r[t(498)](H.jsx, r[t(753)], Q)] }), H.jsx(At, { children: u ? t(656) : r[t(772)] })] }), r[t(580)](H.jsxs, Ct, { "data-id": r[t(815)], children: [r[t(811)](H.jsxs, r[t(576)], { xmlns: r[t(534)], width: "25", height: "25", viewBox: r[t(423)], style: K, children: [r[t(811)](H.jsx, r[t(784)], ee), r[t(424)](H.jsx, r[t(784)], de)] }), r[t(666)](H.jsx, At, { children: r[t(554)] })] }), r[t(665)](H.jsxs, Ct, { "data-id": t(511), children: [r[t(682)](H.jsx, r[t(576)], { xmlns: t(501) + t(486) + t(494), width: "28", height: "28", viewBox: r[t(423)], style: { fill: r[t(497)] }, children: H.jsx(r[t(784)], ue) }), H.jsx(At, { children: r[t(510)] })] }), H.jsxs(Ct, { "data-id": r[t(759)], children: [r[t(523)](H.jsx, r[t(576)], { xmlns: r[t(534)], width: "28", height: "28", viewBox: t(752), style: { fill: r[t(497)] }, children: r[t(739)](H.jsx, r[t(784)], he) }), r[t(682)](H.jsx, At, { children: r[t(420)] })] }), r[t(665)](H.jsxs, Ct, { "data-id": r[t(621)], children: [r[t(791)](H.jsx, r[t(576)], { xmlns: r[t(534)], width: "28", height: "28", viewBox: r[t(423)], style: A, children: H.jsx(r[t(784)], P) }), r[t(754)](H.jsx, At, { children: r[t(622)] })] }), H.jsxs(Ct, { "data-id": r[t(461)], children: [r[t(691)](H.jsx, r[t(576)], { xmlns: r[t(534)], width: "28", height: "28", viewBox: t(752), style: { fill: r[t(497)] }, children: r[t(613)](H.jsx, t(681), N) }), r[t(801)](H.jsx, At, { children: r[t(816)] })] })] }) : null, r[t(658)](H.jsx, Z2, { id: t(651) + t(458) + "s_" + o, className: r[t(474)], ref: w, style: v, children: r[t(792)](H.jsx, K2, { style: E, src: Y2, className: t(542), id: t(651) + t(738) + o, alt: t(777), ref: k, draggable: !1 }) })] });
});
function $t(e, n) {
  const t = Fo();
  return $t = function(r, o) {
    return r = r - 420, t[r];
  }, $t(e, n);
}
function Fo() {
  const e = [" 15H4V9z", "2 2zm2 7v-", "mouse", "zQeYe", "H5v-5H3v7h", "-1.052-3.3", "57-5.428 6", "-1-1H8a1 1", "s-.775-3.9", "touchend", "div", "-2 2v6c0 1", "4c0-1.103-", "forEach", "change", "data-id", "now", " 2v13c0 1.", "error", "assistive_", "13%", "inyKK", "copy", "0v10z", "Hide ID", "volume", "fgltD", "69-.823l-1", "0 0-1.554-", "2 2h7c1.10", "-.897 2-2V", "ebRYW", ".897-2-2-2", "vYsrW", "ZnboB", " 2v5H4V5h3", "device_id", "WSeUR", "exception", ".024l-14-1", "uoRuE", "touch", "zIndex", 'rn this")(', "3 0-2 .897", "27-1.547 5", ".103.897 2", "tGVgK", "644455DfZRCh", "path", "RKEuo", "v2h8V5h3v6", "stener", "readText", "7a1 1 0 0 ", "vBJFT", "V5h14v14z", "svg", "toString", "liJYI", "bind", "M4 6h16v2H", "length", "v5h-5v2h7z", "10l.002 10", "33L12 5.86", ".21a1 1 0 ", "M20 2H10c-", "sNoKn", " 0-2 .897-", "removeEven", "h-5c-1.103", "move", "m-2-4h2V3h", "WVytz", "uWpAb", "M10 4H8v4H", "6l3.612-4.", "17-.056-.0", "NqNqb", "93-.019a1.", "(((.+)+)+)", "h-2v6h6z", "DaZSW", "2-2h-4V4h1", "MKpNu", "Show ID", "03-.897-2-", "AQeub", "kOnKE", "12%", "XqqDb", "7 16 3v2c2", " 1 0 0 0 1", "7.032 15 7", "-2-2-2zm-1", "4802874ODmcrO", "mousedown", "qCxkB", "7 2-2v-4h4", "mozfullscr", "shortcut", ".832L6.697", "h2.697l5.7", "M20 11V5c0", "Copy", "touch_", "YMcLK", "home", "AFXGH", "zM4 20V10h", "mmhlb", "75.931l2 1", "H6z", "back", "061-.016.0", "0 18V4h10l", "3c.033 0 .", ".002 16H6.", "M5 5h5V3H3", "0 0 24 24", "VJuNY", "qUpJl", "fullscreen", "paste", "0 0 0 .38-", "M20 3H4a1 ", "GekTV", "7-2-2-2h-3", "-7v2h5z", " 0 0 1 1h1", "action", "aGjtO", "v2z", "menu_", "closest", "eenchange", "NlCDo", ".614 16 19", ".116c.026-", "XtIAP", ".004 1.004", "warn", "ault", "gClientRec", "Icon", "zm0-6h-4V4", "0-2 .897-2", "M16 21c3.5", "EQRhP", "getBoundin", "c1.103 0 2", "VTwbO", "2 2h7c0 1.", "6zm0 4h6v2", "48 3.832a1", "h4zm12-6h-", "ucBhk", "CqgdM", "zCiPk", "hTaEw", "M16.75 2h-", "nxWQj", "3|0|4|2|1", "table", "5500320eBGHpE", "zuPeR", "nction() ", "dDugA", "nBDFp", "10c-1.103 ", "0 0-.396-1", "2-.082-.03", "msfullscre", "__proto__", "1.103 0-2 ", "v7h2zm5 14", "touchmove", "a1 1 0 0 0", "sUMtA", " 7H4c-1.10", "ttfcV", "8.347l-3.0", "HPDcD", "npxfT", "EyscI", "getAttribu", "027 1.027 ", "11.75", "Paste", "SoguT", "zHaXX", "EsbMY", "clipboard", "MEYIH", "VGHWa", "PyVPM", "08 3.677L7", "M20.978 13", "-1.103-.89", " 0 0 0-.38", "top", "includes", "59 15.016 ", "height", "Sync", "0 1-1V4a1 ", "5tpdTnh", "-3.229 2-5", "H4c-1.103 ", "ujBxy", "1 0 0 0-1 ", "H4zm16-6h-", "pageX", "FVeYD", "target", " 2-2v-7c0-", "0 1.767.51", "03 0 2-.89", ".225-1.1 2", "screenchan", " 2v10c0 1.", "isDown", " 0 0 0-.57", "clientX", "3 0 2-.897", "M6 12h6v2H", "jSZPN", ".257 5.127", " 0 0 0 1.0", "touch_clas", "type", "75z", "jCBem", "S18.387 17", "6v2H4z", "mouseup", " 2v16c0 1.", "search", "lYbrJ", "XbByc", "0 0 0 14 2", "-2-5zM4 17", "nxEqV", "822 13 9A1", "Kluhw", "hjDUA", ".897-2 2v4", "current", "50%", "2H4zm0 5h1", "255, 255, ", "017.082-.0", "MlUcT", "Recents", "max", "7 2-2V4c0-", "width", ".w3.org/20", "264639LLYqHN", "4c-.025-.0", "l10.283 7.", "674.31a1 1", ".015.057-.", "ent", "console", "00/svg", "mCAnB", "nFzkG", "ctqxQ", "HbNgw", "Xlqds", "log", "http://www", "1|4|3|5|2|", "touchstart", "pageY", "Screen", "6a1 1 0 0 ", "9.527 4.54", "597324jAFcLX", "m4.431 12.", "TmNxa", "sync", "set", " 3.999 4.0", "preventDef", "prototype", "2 2h10c1.1", "4v2h6zM8 2", 'ctor("retu', "shortcutCo", "0V4a1 1 0 ", "min", "mousemove", "fAjpS", "2605688NDEArm", "yNCdU", "0 0 1.645z", "5.46 1.701", "-.769zm-8.", "naZtM", "qQzkL", "3 9a1.003 ", "click", "yQVFs", "oHBdr", "wgTDe", "addEventLi", "0a.999.999", "416 3.377 ", "{}.constru", "enchange", "-2-2-2zm-9", "assistive", ".089-1.218", "RphxL", ".387 1.386", "sKwju", "1 0 0 0-1-", "1zm-1 16H5", "constructo", " 0 0 0-1.5", ".999-4.909", "5218056EvSdde", "return (fu", "AovYo", "3a.986.986", " 5.999-9S1", "bzIuh", "apply", "left", "fxREq", "clientY", "345-5.236 ", "UNhYT", "H13z", "tListener", "Back", "trace", "cNqPp", "IAyaS", "4.445-2.96", " 0 0 0-1 1", "Volume", "NkKQU", "rgba(255, ", "1.103-.897", "xcWtb", "TQzgO", "2-.116C7.0", "0 0 0 .782", "fMHhP", "1v16a1 1 0", "vYFMH", "9 21V3a1 1", "sonuv", "data", "a.995.995 ", "zHmPy", "Home", "qxUxN", "4v-4c0-1.1", "0h2v-6H4v2", " 2 2zm0-8h", "8v12.264l-", "cursor", "landscape", "grab", "1.003 0 0 ", "alDmz", "shortcutEv", "6v6h2v-4h4", "split", "47 3.999 7", "4zm0 5h16v", "103.897 2 ", "YVYLG", "hzwVU", "7h7l.001 7", "webkitfull", "taskId", "get", "fill", "27.05A1 1 ", "cFAvb", "lXteh", "lmjdc", "7zm11-5h-2", "niDMM", "iOkoe", "pmWHz", "showMenu", "xdEsJ", "fSfXY", "1.048z", "focus", "passive", "opacity", "recents", "vnGzG", "info", "M16 7v10c1", "circle"];
  return Fo = function() {
    return e;
  }, Fo();
}
const Pe = kt;
(function(e, n) {
  const t = kt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(516)) / 1 + parseInt(t(528)) / 2 + parseInt(t(467)) / 3 + parseInt(t(488)) / 4 * (parseInt(t(407)) / 5) + parseInt(t(510)) / 6 + -parseInt(t(415)) / 7 * (parseInt(t(512)) / 8) + -parseInt(t(530)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(zo, 839474);
const iv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = kt;
      if (t) {
        const i = t[o(534)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), oa = iv(void 0, function() {
  const e = kt, n = {};
  n[e(520)] = e(495) + "+$";
  const t = n;
  return oa[e(486)]()[e(465)](e(495) + "+$")[e(486)]()[e(455) + "r"](oa)[e(465)](t[e(520)]);
});
function kt(e, n) {
  const t = zo();
  return kt = function(r, o) {
    return r = r - 405, t[r];
  }, kt(e, n);
}
oa();
const ur = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = kt;
      if (t) {
        const i = t[o(534)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), sv = ur(void 0, function() {
  const e = kt, n = { nZrUF: function(s, a) {
    return s(a);
  }, ilHoB: function(s, a) {
    return s + a;
  }, mRksr: function(s, a) {
    return s + a;
  }, MmqYT: e(500) + e(448), ELlDr: e(509) + e(496) + e(405) + " )", uHudv: function(s) {
    return s();
  }, nIWdk: e(524), ZDZqx: e(447), NQikP: function(s, a) {
    return s < a;
  } }, t = function() {
    const s = e;
    let a;
    try {
      a = n[s(522)](Function, n[s(444)](n[s(489)](n[s(408)], n[s(526)]), ");"))();
    } catch {
      a = window;
    }
    return a;
  }, r = n[e(513)](t), o = r[e(527)] = r[e(527)] || {}, i = [n[e(473)], e(414), e(423), e(468), n[e(517)], e(445), e(514)];
  for (let s = 0; n[e(430)](s, i[e(533)]); s++) {
    const a = ur[e(455) + "r"][e(507)][e(420)](ur), c = i[s], u = o[c] || a;
    a[e(482)] = ur[e(420)](ur), a[e(486)] = u[e(486)][e(420)](u), o[c] = a;
  }
});
sv();
var vu, yu, bu, Su, wu, Eu, _u, Cu, Au;
Au = Pe(441) + Pe(428), Cu = Pe(427) + "th", _u = Pe(442) + Pe(437), Eu = Pe(431), wu = Pe(449) + "ta", Su = Pe(469) + "er", bu = Pe(481), yu = Pe(497) + Pe(521), vu = Pe(453);
class av {
  constructor(n, t, r, o) {
    mt(this, Au, (n) => {
      const t = Pe, r = {};
      r[t(531)] = function(i, s) {
        return i + s;
      };
      const o = r;
      if (n) {
        const i = o[t(531)](window[t(474) + "t"], 10), s = this[t(427) + "th"](null, this[t(443)][t(434)], this[t(443)][t(503)], i, i);
        this[t(434)] = s[t(434)], this[t(503)] = s[t(503)];
      } else this[t(434)] = this[t(443)][t(434)], this[t(503)] = this[t(443)][t(503)];
    });
    mt(this, Cu, (n, t, r, o, i) => {
      const s = Pe, a = {};
      a[s(504)] = function(l, d) {
        return l > d;
      }, a[s(436)] = function(l, d) {
        return l * d;
      }, a[s(476)] = function(l, d) {
        return l / d;
      }, a[s(438)] = function(l, d) {
        return l > d;
      }, a[s(484)] = function(l, d) {
        return l * d;
      }, a[s(492)] = function(l, d) {
        return l * d;
      };
      const c = a;
      let u;
      return n && c[s(504)](o, this[s(429)]) && c[s(504)](r, t) && (i = this[s(429)]), i && (u = c[s(436)](c[s(476)](i, t), r), c[s(438)](u, o) && (i = c[s(484)](c[s(476)](o, r), t), u = c[s(492)](c[s(476)](o, t), t))), { width: Math[s(508)](i), height: Math[s(508)](u) };
    });
    mt(this, _u, (n) => {
      const t = Pe;
      this[t(470) + "n"] = n, this[t(538)] && screen[t(470) + "n"][t(463)](n);
    });
    mt(this, Eu, (n, t) => {
      var u;
      const r = Pe, o = {};
      o[r(532)] = function(l, d) {
        return l == d;
      }, o[r(457)] = function(l, d) {
        return l - d;
      }, o[r(424)] = function(l, d) {
        return l - d;
      };
      const i = o, s = i[r(532)](this[r(538)], !0) ? i[r(457)](window[r(474) + "t"], 12) : i[r(424)](window[r(474) + "t"], 50), a = this[r(427) + "th"](!0, n, t, s, s);
      this[r(434)] = a[r(434)], this[r(503)] = a[r(503)], !this[r(443)] && ((u = this[r(454) + "ct"]) == null || u.call(this, !0));
      const c = {};
      c[r(434)] = a[r(434)], c[r(503)] = a[r(503)], this[r(443)] = c;
    });
    mt(this, wu, (n) => {
      const t = Pe, r = {};
      r[t(432)] = function(s, a) {
        return s instanceof a;
      };
      const o = r, i = o[t(432)](n, Uint8Array) ? n : new Uint8Array(n);
      this[t(412)] = i;
    });
    mt(this, Su, () => {
      const n = Pe, t = {};
      t[n(535)] = function(s, a) {
        return s == a;
      }, t[n(451)] = n(409), t[n(439)] = n(419) + "0", t[n(518)] = function(s, a) {
        return s / a;
      }, t[n(501)] = n(499) + "E";
      const r = t, o = new VideoDecoder({ output: async (s) => {
        const a = n, c = await createImageBitmap(s);
        if ((!this[a(434)] || !this[a(503)]) && this[a(431)](s[a(480)], s[a(461) + "t"]), r[a(535)](this[a(470) + "n"], r[a(451)])) {
          const u = r[a(439)][a(511)]("|");
          let l = 0;
          for (; ; ) {
            switch (u[l++]) {
              case "0":
                this[a(479)][a(505)](c, 0, 0, this[a(434)], this[a(503)]);
                continue;
              case "1":
                this[a(479)][a(523)](0, this[a(434)]);
                continue;
              case "2":
                this[a(472)][a(503)] = this[a(434)];
                continue;
              case "3":
                this[a(479)][a(483)](r[a(518)](Math.PI, 2));
                continue;
              case "4":
                this[a(472)][a(434)] = this[a(503)];
                continue;
              case "5":
                this[a(479)][a(413)](-1, -1);
                continue;
            }
            break;
          }
        } else this[a(472)][a(434)] = this[a(434)], this[a(472)][a(503)] = this[a(503)], this[a(479)][a(505)](c, 0, 0, this[a(434)], this[a(503)]);
        c[a(525)](), s[a(525)]();
      }, error: (s) => console[n(468)](n(475) + n(487), s) }), i = {};
      return i[n(418)] = r[n(501)], i[n(406) + n(536)] = n(460) + n(446), i[n(498) + n(456)] = !0, o[n(478)](i), o;
    });
    mt(this, bu, (n) => {
      const t = Pe, r = {};
      r[t(433)] = function(i, s) {
        return i <= s;
      }, r[t(440)] = function(i, s) {
        return i - s;
      }, r[t(515)] = function(i, s) {
        return i === s;
      }, r[t(411)] = function(i, s) {
        return i + s;
      }, r[t(452)] = function(i, s) {
        return i === s;
      }, r[t(458)] = function(i, s) {
        return i & s;
      }, r[t(490)] = function(i, s) {
        return i + s;
      }, r[t(491)] = function(i, s) {
        return i === s;
      }, r[t(464)] = function(i, s) {
        return i + s;
      }, r[t(471)] = function(i, s) {
        return i + s;
      };
      const o = r;
      for (let i = 0; o[t(433)](i, o[t(440)](n[t(533)], 4)); i++)
        if (o[t(515)](n[i], 0) && o[t(515)](n[o[t(411)](i, 1)], 0) && o[t(452)](n[o[t(411)](i, 2)], 0) && n[o[t(411)](i, 3)] === 1)
          return o[t(458)](n[o[t(490)](i, 4)], 31) === 5;
      for (let i = 0; o[t(433)](i, o[t(440)](n[t(533)], 3)); i++)
        if (o[t(491)](n[i], 0) && n[o[t(490)](i, 1)] === 0 && o[t(491)](n[o[t(464)](i, 2)], 1)) {
          const s = n[o[t(471)](i, 3)] & 31;
          return o[t(452)](s, 5);
        }
      return !1;
    });
    mt(this, yu, (n, t) => {
      const r = Pe, o = Array[r(502)](n)[r(426)](Array[r(502)](t));
      return new Uint8Array(o);
    });
    mt(this, vu, (n) => {
      const t = Pe, r = {};
      r[t(494)] = function(a, c) {
        return a == c;
      }, r[t(485)] = t(525), r[t(450)] = function(a, c) {
        return a instanceof c;
      }, r[t(529)] = t(416), r[t(519)] = t(417);
      const o = r;
      if (!this[t(537)] || o[t(494)](this[t(537)][t(459)], o[t(485)]) || !this[t(412)]) return;
      let i = o[t(450)](n, Uint8Array) ? n : new Uint8Array(n);
      const s = this[t(481)](i);
      s && (this[t(421)] = i), this[t(421)] && this[t(412)] && (!this[t(410)] && (i = this[t(497) + t(521)](this[t(412)], this[t(421)]), this[t(410)] = !0), this[t(537)][t(453)](new EncodedVideoChunk({ timestamp: performance[t(506)]() * 1e3, type: s ? o[t(529)] : o[t(519)], data: i })));
    });
    const i = kt, s = {};
    s[i(466)] = i(435) + i(425) + i(422), s[i(493)] = i(462);
    const a = s, c = a[i(466)][i(511)]("|");
    let u = 0;
    for (; ; ) {
      switch (c[u++]) {
        case "0":
          this[i(434)] = null;
          continue;
        case "1":
          this[i(472)] = n;
          continue;
        case "2":
          this[i(421)] = null;
          continue;
        case "3":
          this[i(443)] = null;
          continue;
        case "4":
          this[i(410)] = null;
          continue;
        case "5":
          this[i(470) + "n"] = a[i(493)];
          continue;
        case "6":
          this[i(412)] = null;
          continue;
        case "7":
          this[i(454) + "ct"] = o;
          continue;
        case "8":
          this[i(538)] = r;
          continue;
        case "9":
          this[i(479)] = n[i(477)]("2d");
          continue;
        case "10":
          this[i(537)] = this[i(469) + "er"]();
          continue;
        case "11":
          this[i(429)] = t;
          continue;
        case "12":
          this[i(503)] = null;
          continue;
      }
      break;
    }
  }
}
function zo() {
  const e = ["rHQSK", "|10|6|2|4|", "concat", "resizedWid", "een", "maxWidth", "NQikP", "autoResize", "CfLsG", "FbCtp", "width", "1|11|8|7|9", "YIITx", "tion", "WOPtR", "ClXtm", "icOmy", "setFullscr", "setOrienta", "rootSize", "ilHoB", "table", "dware", "exception", "nction() ", "setVideoMe", "IsRTE", "wkeJo", "mNIVx", "decode", "setIsConne", "constructo", "rLatency", "hJtYC", "hhmki", "state", "prefer-har", "codedHeigh", "portrait", "lock", "KENED", "search", "pWczq", "1832025BvPJPp", "error", "buildDecod", "orientatio", "xTbhE", "canvas", "nIWdk", "innerHeigh", "Decoder er", "VsSqp", "getContext", "configure", "ctx", "codedWidth", "isKeyFrame", "__proto__", "rotate", "WrAbi", "UMklc", "toString", "ror:", "268uPxSnf", "mRksr", "kjFNb", "bdjiT", "dIyJN", "OyUtp", "RIsvL", "(((.+)+)+)", 'ctor("retu', "concatUint", "optimizeFo", "avc1.64001", "return (fu", "TdLNQ", "from", "height", "DgXVO", "drawImage", "now", "prototype", "round", "{}.constru", "4843566DkxQrs", "split", "34448DHwIDP", "uHudv", "trace", "OLBEe", "1670388zecnqD", "ZDZqx", "BAjah", "hkFtG", "pCjMi", "8Arrays", "nZrUF", "translate", "log", "close", "ELlDr", "console", "2354866yPfMin", "VJjZp", "5238486ETHaAo", "qrlkz", "AJnki", "length", "apply", "eAYBh", "celeration", "decoder", "isMobile", 'rn this")(', "hardwareAc", "56015wMRvyE", "MmqYT", "landscape", "isPlay", "OYjMO", "videoMeta", "scale", "warn", "413KfVmdr", "key", "delta", "codec", "4|2|1|3|5|", "bind", "iframe", "0|12|3|5", "info"];
  return zo = function() {
    return e;
  }, zo();
}
(function(e, n) {
  const t = ct, r = e();
  for (; ; )
    try {
      if (parseInt(t(655)) / 1 * (parseInt(t(537)) / 2) + parseInt(t(641)) / 3 * (-parseInt(t(659)) / 4) + -parseInt(t(540)) / 5 + parseInt(t(578)) / 6 + parseInt(t(546)) / 7 + -parseInt(t(675)) / 8 + -parseInt(t(662)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Vo, 428137);
const cv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = ct;
      if (t) {
        const i = t[o(642)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ia = cv(void 0, function() {
  const e = ct, n = {};
  n[e(556)] = e(650) + "+$";
  const t = n;
  return ia[e(498)]()[e(500)](t[e(556)])[e(498)]()[e(492) + "r"](ia)[e(500)](t[e(556)]);
});
ia();
const lr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = ct;
      if (t) {
        const i = t[o(642)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), uv = lr(void 0, function() {
  const e = ct, n = { YEIvW: function(i, s) {
    return i + s;
  }, mosMS: e(553) + e(542), zZnsD: e(516) + e(666) + e(577) + " )", sVnwj: function(i) {
    return i();
  }, xbmxj: e(685), xEEGY: e(621), qwICN: e(547), iuEBr: e(614), oCojx: e(653), UZzpv: e(523), MWWsi: function(i, s) {
    return i < s;
  } };
  let t;
  try {
    const i = Function(n[e(673)](n[e(673)](n[e(484)], n[e(651)]), ");"));
    t = n[e(686)](i);
  } catch {
    t = window;
  }
  const r = t[e(583)] = t[e(583)] || {}, o = [e(514), n[e(639)], n[e(594)], n[e(485)], n[e(618)], n[e(517)], n[e(495)]];
  for (let i = 0; n[e(674)](i, o[e(676)]); i++) {
    const s = lr[e(492) + "r"][e(513)][e(569)](lr), a = o[i], c = r[a] || s;
    s[e(590)] = lr[e(569)](lr), s[e(498)] = c[e(498)][e(569)](c), r[a] = s;
  }
});
uv();
function Vo() {
  const e = ["NPlfo", "msavt", "onScreenEv", "video_meta", "SkKCO", "IxSjX", "COPY_TEXT", "(((.+)+)+)", "zZnsD", "height", "table", "delete", "109723SpUvCp", "large", "shortcutEv", "Tyluq", "778384DxLDLG", "screenElem", "xtVwJ", "3274011zlsQoI", "post", "test", "isMobile", 'ctor("retu', "PZefq", "type", "data", "sbMQF", "PdcSR", "change", "YEIvW", "MWWsi", "2801400oXURpm", "length", "Timeout wa", "mozFullScr", "current", "kwlov", "lkefu", "Content-Ty", "fZngQ", "meta", "warn", "sVnwj", "type_clien", "addEventLi", "mosMS", "qwICN", "UNArv", "password", "method", "QzoWa", "clipboard", "code", "constructo", "ELIAL", "XKsmN", "UZzpv", "qWhgu", "PODiR", "toString", "de: ", "search", "VbOAE", "headers", "enElement", "tabIndex", "een", "eenElement", "close", "Element", "LssfT", "qMTgW", "get", "connect_er", "prototype", "log", "text", "{}.constru", "oCojx", "gvXtq", "screen", "uZNXw", "set", "DIuxa", "trace", "laobr", "shortcut", "dALFI", "XzJRF", "REqkF", "center", "vGYcU", "VdXdM", "rmBuF", "gIWtw", "BhKLo", "setVideoMe", "setFullscr", "10BcsHrk", "pIamQ", "disconnect", "307220VhVbGi", "response", "nction() ", "msNkL", "lCOIq", "msg", "3856902cRBxYJ", "error", "aXhOV", "get_video_", "EhkvY", "DERLL", "emit", "return (fu", "UlKiY", "oqnoZ", "ZBfSi", "join_room", "value", "fixTouch", "BpOXy", "decode", "YgYPp", "msFullscre", "false", "elUvT", "orientatio", "ztNQD", "screen_mai", "bind", "webkitFull", "CxYZq", "width", "zzkpm", "reconnecti", "hNRuN", "iting for ", 'rn this")(', "2958756veEHcG", "size", "ent", "fullscreen", "tlUZi", "console", "action", "AHhwt", "n/json", "PEwmT", "control", "iframe", "__proto__", "HrjdN", "status", "AtsVT", "xEEGY", "passwd", "sync", "device_id", "tListener", "timeout", "onSyncIFra", "taskId", "message", "middle", "kzgGZ", "applicatio", "isDown", " closed co", "connection", "removeEven", "marginTop", "omniy", "qagfF", "children", "exception", "JPill", "screen_", "EIfVS", "iuEBr", "image_", "stener", "info", "showMenu", "rbkqh", "tion", "map", "draggable", "sAKoD", "fVRlQ", "EzlaX", "ror", "Pvtqc", "DlZnW", "writeText", "connect", "setOrienta", "userAgent", "DIicL", "aoIBC", "xbmxj", "url", "6FpNoRi", "apply"];
  return Vo = function() {
    return e;
  }, Vo();
}
function ct(e, n) {
  const t = Vo();
  return ct = function(r, o) {
    return r = r - 482, t[r];
  }, ct(e, n);
}
const Dv = Tu((e, n) => {
  const t = ct, r = { AtsVT: function(A, P) {
    return A(P);
  }, oqnoZ: function(A, P) {
    return A(P);
  }, zzkpm: t(602), DIuxa: t(663), PEwmT: t(605) + t(586), vGYcU: function(A, P) {
    return A(P);
  }, VdXdM: function(A, P) {
    return A(P);
  }, laobr: t(547), lkefu: function(A, P) {
    return A == P;
  }, gvXtq: t(649), rbkqh: function(A, P) {
    return A > P;
  }, omniy: function(A, P) {
    return A == P;
  }, IxSjX: t(566) + "n", hNRuN: function(A, P) {
    return A(P);
  }, msavt: function(A, P) {
    return A + P;
  }, XzJRF: t(608) + t(607) + t(499), PODiR: t(621), LssfT: t(634), UlKiY: t(645) + t(580), SkKCO: function(A, P) {
    return A(P);
  }, Tyluq: t(646), UNArv: t(549) + t(684), qagfF: t(557), qWhgu: t(519), aXhOV: t(512) + t(630), QzoWa: t(581) + t(672), qMTgW: function(A, P) {
    return A === P;
  }, ELIAL: t(597), xtVwJ: function(A, P) {
    return A === P;
  }, DERLL: t(596), HrjdN: function(A, P) {
    return A(P);
  }, lCOIq: function(A, P) {
    return A(P);
  }, dALFI: function(A, P) {
    return A(P);
  }, NPlfo: function(A, P) {
    return A(P);
  }, gIWtw: t(588), kzgGZ: function(A, P) {
    return A(P);
  }, DIicL: function(A, P) {
    return A(P);
  }, EIfVS: function(A, P) {
    return A(P);
  }, aoIBC: function(A, P) {
    return A(P);
  }, VbOAE: function(A, P) {
    return A(P);
  }, PZefq: function(A, P) {
    return A(P);
  }, PdcSR: function(A, P) {
    return A(P);
  }, YgYPp: function(A, P, N) {
    return A(P, N);
  }, fZngQ: function(A, P, N) {
    return A(P, N);
  }, JPill: function(A, P, N) {
    return A(P, N);
  }, sAKoD: function(A, P, N) {
    return A(P, N);
  }, fVRlQ: function(A, P, N) {
    return A(P, N);
  }, REqkF: t(603), ztNQD: t(656) }, { serve: o, dataDevice: i, maxWidth: s, showAssistive: a, showDeviceId: c, syncEvent: u, syncButton: l } = e, d = i[t(597)], p = /iPhone|iPad|iPod|Android/i[t(664)](navigator[t(636)]), h = r[t(533)], [f, y] = Xe(null), [m, _] = r[t(555)](Xe, c), w = {};
  w[t(622)] = !1, w[t(606)] = !1;
  const [C, k] = r[t(604)](Xe, w), v = r[t(637)](Fe, null), O = r[t(637)](Fe, null), [E, j] = r[t(617)](Xe, null), B = t(619) + d, W = t(616) + d, re = t(568) + "n_" + d, G = r[t(638)](Fe, null), M = r[t(501)](Fe, null), V = r[t(667)](Fe, null), [F, ne] = r[t(671)](Xe, []), J = r[t(638)](Fe, null), Z = r[t(604)](Fe, /* @__PURE__ */ new Map());
  r[t(562)](Ge, () => {
    r[t(593)](_, c);
  }, [c]);
  const $ = (A) => {
    ne((P) => [...P, A]);
  }, oe = (A) => {
    const P = t;
    O[P(679)][P(552)](P(602), A), r[P(593)](u, A);
  };
  r[t(683)](Ou, n, () => ({ api: async function(A, P = 5e3) {
    const N = t, b = { BpOXy: function(x, S) {
      return x(S);
    }, EzlaX: function(x, S) {
      return r[ct(555)](x, S);
    }, uZNXw: function(x, S, q) {
      return x(S, q);
    }, AHhwt: r[N(573)] };
    return new Promise((x, S) => {
      const q = N, L = { rmBuF: function(X, pe) {
        return b[ct(629)](X, pe);
      } }, le = b[q(520)](setTimeout, () => {
        const X = q;
        Z[X(679)][X(654)](A[X(601)]);
        const pe = {};
        pe[X(584)] = A[X(584)], pe[X(601)] = A[X(601)], pe[X(592)] = !1, pe[X(602)] = X(677) + X(576) + X(541), b[X(560)](S, pe);
      }, P);
      Z[q(679)][q(521)](A[q(601)], (X) => {
        const pe = q;
        clearTimeout(le), L[pe(532)](x, X);
      }), O[q(679)][q(552)](b[q(585)], A);
    });
  }, sync: function(A) {
    const P = t;
    O[P(679)][P(552)](r[P(573)], A);
  }, showDeviceId: function(A) {
    r[t(555)](_, A);
  } })), Ge(() => {
    const A = t, P = { Pvtqc: r[A(522)], pIamQ: r[A(587)], CxYZq: function(N, b) {
      return r[A(530)](N, b);
    }, elUvT: function(N, b) {
      return r[A(531)](N, b);
    }, XKsmN: r[A(524)] };
    (async () => {
      const N = A;
      try {
        const b = {};
        b[N(597)] = i[N(597)], b[N(487)] = i[N(595)];
        const x = {};
        x[N(640)] = o, x[N(488)] = P[N(631)], x[N(599)] = 1e4, x[N(502)] = {}, x[N(669)] = b, x[N(502)][N(682) + "pe"] = P[N(538)];
        const S = x, q = await P[N(571)](j2, S);
        P[N(565)](y, q[N(669)]);
      } catch (b) {
        const x = {};
        x[N(545)] = b, x[N(668)] = P[N(494)], $(x);
      }
    })();
  }, []), Ge(() => {
    const A = t, P = { DlZnW: r[A(509)], kwlov: function(x, S) {
      return x == S;
    }, msNkL: r[A(573)], tlUZi: r[A(554)], sbMQF: function(x, S) {
      return r[A(647)](x, S);
    }, BhKLo: r[A(658)], EhkvY: r[A(486)] };
    if (O[A(679)] || !f) return;
    const N = {};
    N[A(574) + "on"] = !1;
    const b = fo(f, N);
    return b.on(r[A(509)], () => {
      const x = A, S = {};
      S[x(584)] = P[x(632)], S[x(482) + "t"] = h, S[x(597)] = i[x(597)], S[x(665)] = p, S[x(595)] = i[x(595)], b[x(552)](x(557), S);
    }), b.on(r[A(612)], (x) => {
      const S = A;
      if (P[S(680)](x[S(592)], !0)) O[S(679)] = b, b[S(552)](P[S(543)], { action: P[S(582)] });
      else {
        const q = {};
        q[S(545)] = x[S(545)], q[S(668)] = S(547), P[S(670)]($, q);
      }
    }), b.on(r[A(496)], (x) => {
      const S = A;
      J[S(679)][S(561)](x);
    }), b.on(A(646), (x) => {
      const S = A;
      if (!x) b[S(552)](P[S(534)], { action: P[S(550)] });
      else if (J[S(679)][S(535) + "ta"](x), !J[S(679)][S(589)]) {
        const q = {};
        q[S(584)] = S(600) + "me", b[S(552)](P[S(543)], q);
      }
    }), b.on(r[A(573)], (x) => {
      const S = A;
      if ((r[S(681)](x[S(584)], r[S(518)]) || r[S(681)](x[S(584)], S(657) + S(580))) && r[S(623)](x[S(515)][S(676)], 0) ? navigator[S(490)][S(633)](x[S(515)]) : r[S(611)](x[S(584)], r[S(648)]) && (J[S(679)][S(635) + S(624)](x[S(558)]), V[S(679)][S(559)](x[S(558)])), x[S(601)]) {
        const q = Z[S(679)][S(511)](x[S(601)]);
        q && (q(x), Z[S(679)][S(654)](x[S(601)]));
      }
    }), b.on(r[A(548)], (x) => {
      const S = A, q = {};
      q[S(545)] = x, q[S(668)] = r[S(524)], $(q);
    }), b.on(A(539), (x) => {
      const S = A;
      r[S(575)]($, { msg: r[S(644)](r[S(527)], x[S(491)]), type: r[S(497)] }), v[S(679)] && v[S(679)][S(507)]();
    }), () => {
      b && b[A(539)]();
    };
  }, [f]), r[t(615)](Ge, () => {
    const A = t, P = M[A(679)];
    J[A(679)] = new av(P, s, p, j);
  }, []), r[t(627)](Ge, () => {
    const A = t, P = () => {
      const N = ct, b = document[N(581) + N(508)] || document[N(570) + N(660) + N(580)] || document[N(678) + N(506)] || document[N(563) + N(503)];
      J[N(679)][N(536) + N(505)](!!b), V[N(679)][N(536) + N(505)](!!b), V[N(679)][N(559)]();
    };
    return document[A(483) + A(620)](r[A(489)], P), () => {
      const N = A;
      document[N(609) + N(598)](N(581) + N(672), P);
    };
  }, []);
  const Q = {};
  Q[t(613)] = i[t(597)];
  const K = {};
  K[t(579)] = t(656);
  const ee = {};
  ee[t(652)] = 0, ee[t(572)] = 0;
  const de = {};
  de[t(511)] = C, de[t(521)] = k;
  const ue = {};
  ue.id = B, ue[t(504)] = "0", ue[t(626)] = t(564);
  const he = {};
  return he[t(610)] = 5, r[t(562)](H.jsxs, Vd, { id: re, children: [m && H.jsx(Wd, { children: r[t(562)](H.jsx, qd, Q) }), r[t(611)](F[t(676)], 0) ? H.jsxs(H.Fragment, { children: [!E && r[t(628)](H.jsxs, Hf, { align: t(529), gap: r[t(528)], children: [H.jsx(vr, K), r[t(628)](H.jsx, vr, { size: r[t(567)] }), H.jsx(vr, { size: r[t(567)] })] }), H.jsxs(Hd, { ref: G, id: W, style: E ? {} : ee, children: [a ? r[t(615)](H.jsx, ov, { status: de, ref: V, imageRef: M, displayId: d, isMobile: p, isShowDeviceId: m, onSenData: (A, P) => {
    const N = t;
    r[N(510)](A, Qs) && P[N(525)] === r[N(493)] ? _(!m) : r[N(661)](A, Qs) && r[N(510)](P[N(525)], r[N(551)]) ? r[N(591)](l, i[N(597)]) : r[N(544)](oe, P);
  } }) : null, r[t(628)](H.jsx, W2, { canvasContent: ue, imageRef: M, isMobile: p, assistive: C, onImgEvent: (A, P) => {
    const N = t;
    if (A === g0) {
      const b = { ...C };
      b[N(622)] = !1, r[N(526)](k, b);
    } else r[N(643)](oe, P);
  } })] })] }) : F[t(625)]((A, P) => H.jsx(Bf, { style: he, message: A[t(545)], type: A[t(668)], showIcon: !0, closable: !0 }, P))] });
});
(function(e, n) {
  for (var t = pn, r = e(); ; )
    try {
      var o = -parseInt(t(486)) / 1 + parseInt(t(518)) / 2 * (-parseInt(t(510)) / 3) + parseInt(t(515)) / 4 + -parseInt(t(481)) / 5 + -parseInt(t(495)) / 6 + -parseInt(t(478)) / 7 * (parseInt(t(477)) / 8) + -parseInt(t(489)) / 9 * (-parseInt(t(504)) / 10);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 626170);
var lv = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = pn;
      if (t) {
        var i = t[o(480)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), sa = lv(void 0, function() {
  var e = pn, n = {};
  n[e(490)] = e(499) + "+$";
  var t = n;
  return sa[e(498)]()[e(505)](t[e(490)])[e(498)]()[e(475) + "r"](sa)[e(505)](t[e(490)]);
});
sa();
function Ho() {
  var e = ["nmfUw", "table", 'rn this")(', "DLxJc", "ieeJW", "2935812YosAsG", "gQaqY", "nction() ", "toString", "(((.+)+)+)", "{}.constru", "OaQEs", "URDMy", "exception", "10jGitWs", "search", "length", "console", "fTIbt", "kXWpP", "3zzGEaR", "prototype", "VHppN", "1|4|2|3|5|", "trace", "639616mMqIbD", 'ctor("retu', "split", "2360054xXjkGy", "hnHHu", "constructo", "log", "101224avzicu", "7Iyocne", "jvNku", "apply", "2818400giySMT", "error", "warn", "__proto__", "info", "972929BaSDLv", "bind", "return (fu", "33163713ChNyfr"];
  return Ho = function() {
    return e;
  }, Ho();
}
var fr = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = pn;
      if (t) {
        var i = t[o(480)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), fv = fr(void 0, function() {
  var e = pn, n = { hnHHu: function(p, h) {
    return p + h;
  }, ieeJW: function(p) {
    return p();
  }, VHppN: e(476), gQaqY: e(483), URDMy: e(485), kXWpP: e(482), OaQEs: e(491), DLxJc: e(514), fTIbt: function(p, h) {
    return p < h;
  }, jvNku: e(513) + "0" }, t;
  try {
    var r = Function(n[e(474)](e(488) + e(497), e(500) + e(516) + e(492) + " )") + ");");
    t = n[e(494)](r);
  } catch {
    t = window;
  }
  for (var o = t[e(507)] = t[e(507)] || {}, i = [n[e(512)], n[e(496)], n[e(502)], n[e(509)], e(503), n[e(501)], n[e(493)]], s = 0; n[e(508)](s, i[e(506)]); s++)
    for (var a = n[e(479)][e(517)]("|"), c = 0; ; ) {
      switch (a[c++]) {
        case "0":
          o[d] = u;
          continue;
        case "1":
          var u = fr[e(475) + "r"][e(511)][e(487)](fr);
          continue;
        case "2":
          var l = o[d] || u;
          continue;
        case "3":
          u[e(484)] = fr[e(487)](fr);
          continue;
        case "4":
          var d = i[s];
          continue;
        case "5":
          u[e(498)] = l[e(498)][e(487)](l);
          continue;
      }
      break;
    }
});
function pn(e, n) {
  var t = Ho();
  return pn = function(r, o) {
    r = r - 474;
    var i = t[r];
    return i;
  }, pn(e, n);
}
fv();
export {
  Dv as ControlMyRPP
};
