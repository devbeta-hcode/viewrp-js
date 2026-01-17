var $h = Object.defineProperty;
var Ih = (t, n, e) => n in t ? $h(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var _e = (t, n, e) => Ih(t, typeof n != "symbol" ? n + "" : n, e);
import * as O from "react";
import Y, { useDebugValue as Mc, createElement as Ph, useRef as ge, useContext as Dt, createContext as Ai, useEffect as Xe, isValidElement as kh, version as Nh, useLayoutEffect as jh, forwardRef as fr, useState as St, useMemo as Hr, Children as Lh, useImperativeHandle as l0 } from "react";
import * as u0 from "react-dom";
import Dc from "react-dom";
function Xo() {
  var t = ["13851628bZBqrL", "356WcsPzJ", "undefined", "apply", "keys", "prototype", "function", "construct", "5158662BdHZqg", "defineProp", "getOwnProp", "276975dUfwzS", "19978700SymVYs", "forEach", "6upjLlL", "712102epFdGR", "__esModule", "call", "get", "3ENhPpH", "length", "eDcNw", "erty", "ertyDescri", "hasOwnProp", "fgnUH", "15751632MTBcLL", "constructo", "JXRBT", "default", "value", "ptor", "102395fNwtJy"];
  return Xo = function() {
    return t;
  }, Xo();
}
function Yo(t, n) {
  var e = Xo();
  return Yo = function(r, o) {
    r = r - 360;
    var i = e[r];
    return i;
  }, Yo(t, n);
}
var Ir = Yo;
(function(t, n) {
  for (var e = Yo, r = t(); ; )
    try {
      var o = parseInt(e(374)) / 1 * (-parseInt(e(370)) / 2) + -parseInt(e(363)) / 3 + parseInt(e(389)) / 4 * (parseInt(e(387)) / 5) + parseInt(e(369)) / 6 * (-parseInt(e(388)) / 7) + parseInt(e(381)) / 8 + -parseInt(e(366)) / 9 + parseInt(e(367)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xo, 992169);
typeof globalThis !== Ir(390) || typeof window !== Ir(390) || (typeof global !== Ir(390) ? global : Ir(390));
function Mh(t) {
  var n = Ir;
  return t && t[n(371)] && Object[n(360)][n(379) + n(377)][n(372)](t, n(384)) ? t[n(384)] : t;
}
var ao = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function Dh() {
  if (Bc) return Sr;
  Bc = 1;
  var t = Y, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, x = null, g = null;
    l !== void 0 && (x = "" + l), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: a, key: x, ref: g, props: d, _owner: o.current };
  }
  return Sr.Fragment = e, Sr.jsx = s, Sr.jsxs = s, Sr;
}
var wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function Bh() {
  return Hc || (Hc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Y, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), f = Symbol.iterator, m = "@@iterator";
    function p(v) {
      if (v === null || typeof v != "object")
        return null;
      var B = f && v[f] || v[m];
      return typeof B == "function" ? B : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(v) {
      {
        for (var B = arguments.length, G = new Array(B > 1 ? B - 1 : 0), ae = 1; ae < B; ae++)
          G[ae - 1] = arguments[ae];
        E("error", v, G);
      }
    }
    function E(v, B, G) {
      {
        var ae = b.ReactDebugCurrentFrame, Se = ae.getStackAddendum();
        Se !== "" && (B += "%s", G = G.concat([Se]));
        var Te = G.map(function(me) {
          return String(me);
        });
        Te.unshift("Warning: " + B), Function.prototype.apply.call(console[v], console, Te);
      }
    }
    var T = !1, h = !1, $ = !1, C = !1, L = !1, D;
    D = Symbol.for("react.module.reference");
    function W(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === i || L || v === o || v === l || v === u || C || v === g || T || h || $ || typeof v == "object" && v !== null && (v.$$typeof === x || v.$$typeof === d || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === D || v.getModuleId !== void 0));
    }
    function re(v, B, G) {
      var ae = v.displayName;
      if (ae)
        return ae;
      var Se = B.displayName || B.name || "";
      return Se !== "" ? G + "(" + Se + ")" : G;
    }
    function J(v) {
      return v.displayName || "Context";
    }
    function F(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var B = v;
            return J(B) + ".Consumer";
          case s:
            var G = v;
            return J(G._context) + ".Provider";
          case c:
            return re(v, v.render, "ForwardRef");
          case d:
            var ae = v.displayName || null;
            return ae !== null ? ae : F(v.type) || "Memo";
          case x: {
            var Se = v, Te = Se._payload, me = Se._init;
            try {
              return F(me(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, Q = 0, j, k, P, M, V, z, q;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function K() {
      {
        if (Q === 0) {
          j = console.log, k = console.info, P = console.warn, M = console.error, V = console.group, z = console.groupCollapsed, q = console.groupEnd;
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
            log: U({}, v, {
              value: j
            }),
            info: U({}, v, {
              value: k
            }),
            warn: U({}, v, {
              value: P
            }),
            error: U({}, v, {
              value: M
            }),
            group: U({}, v, {
              value: V
            }),
            groupCollapsed: U({}, v, {
              value: z
            }),
            groupEnd: U({}, v, {
              value: q
            })
          });
        }
        Q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = b.ReactCurrentDispatcher, oe;
    function Ie(v, B, G) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (Se) {
            var ae = Se.stack.trim().match(/\n( *(at )?)/);
            oe = ae && ae[1] || "";
          }
        return `
` + oe + v;
      }
    }
    var ye = !1, Be;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Be = new Le();
    }
    function pe(v, B) {
      if (!v || ye)
        return "";
      {
        var G = Be.get(v);
        if (G !== void 0)
          return G;
      }
      var ae;
      ye = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = fe.current, fe.current = null, K();
      try {
        if (B) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (wt) {
              ae = wt;
            }
            Reflect.construct(v, [], me);
          } else {
            try {
              me.call();
            } catch (wt) {
              ae = wt;
            }
            v.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            ae = wt;
          }
          v();
        }
      } catch (wt) {
        if (wt && ae && typeof wt.stack == "string") {
          for (var xe = wt.stack.split(`
`), dt = ae.stack.split(`
`), Fe = xe.length - 1, We = dt.length - 1; Fe >= 1 && We >= 0 && xe[Fe] !== dt[We]; )
            We--;
          for (; Fe >= 1 && We >= 0; Fe--, We--)
            if (xe[Fe] !== dt[We]) {
              if (Fe !== 1 || We !== 1)
                do
                  if (Fe--, We--, We < 0 || xe[Fe] !== dt[We]) {
                    var Ge = `
` + xe[Fe].replace(" at new ", " at ");
                    return v.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", v.displayName)), typeof v == "function" && Be.set(v, Ge), Ge;
                  }
                while (Fe >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        ye = !1, fe.current = Te, ce(), Error.prepareStackTrace = Se;
      }
      var qn = v ? v.displayName || v.name : "", $n = qn ? Ie(qn) : "";
      return typeof v == "function" && Be.set(v, $n), $n;
    }
    function Ke(v, B, G) {
      return pe(v, !1);
    }
    function ne(v) {
      var B = v.prototype;
      return !!(B && B.isReactComponent);
    }
    function Ve(v, B, G) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return pe(v, ne(v));
      if (typeof v == "string")
        return Ie(v);
      switch (v) {
        case l:
          return Ie("Suspense");
        case u:
          return Ie("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return Ke(v.render);
          case d:
            return Ve(v.type, B, G);
          case x: {
            var ae = v, Se = ae._payload, Te = ae._init;
            try {
              return Ve(Te(Se), B, G);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, st = {}, xt = b.ReactDebugCurrentFrame;
    function _(v) {
      if (v) {
        var B = v._owner, G = Ve(v.type, v._source, B ? B.type : null);
        xt.setExtraStackFrame(G);
      } else
        xt.setExtraStackFrame(null);
    }
    function R(v, B, G, ae, Se) {
      {
        var Te = Function.call.bind(be);
        for (var me in v)
          if (Te(v, me)) {
            var xe = void 0;
            try {
              if (typeof v[me] != "function") {
                var dt = Error((ae || "React class") + ": " + G + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw dt.name = "Invariant Violation", dt;
              }
              xe = v[me](B, me, ae, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              xe = Fe;
            }
            xe && !(xe instanceof Error) && (_(Se), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", G, me, typeof xe), _(null)), xe instanceof Error && !(xe.message in st) && (st[xe.message] = !0, _(Se), w("Failed %s type: %s", G, xe.message), _(null));
          }
      }
    }
    var y = Array.isArray;
    function I(v) {
      return y(v);
    }
    function S(v) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, G = B && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return G;
      }
    }
    function ie(v) {
      try {
        return Ze(v), !1;
      } catch {
        return !0;
      }
    }
    function Ze(v) {
      return "" + v;
    }
    function Ue(v) {
      if (ie(v))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", S(v)), Ze(v);
    }
    var pt = b.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ot, bt;
    function Pt(v) {
      if (be.call(v, "ref")) {
        var B = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function kt(v) {
      if (be.call(v, "key")) {
        var B = Object.getOwnPropertyDescriptor(v, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function zt(v, B) {
      typeof v.ref == "string" && pt.current;
    }
    function Oe(v, B) {
      {
        var G = function() {
          ot || (ot = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        G.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function he(v, B) {
      {
        var G = function() {
          bt || (bt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        G.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var gt = function(v, B, G, ae, Se, Te, me) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: v,
        key: B,
        ref: G,
        props: me,
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
        value: ae
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function Jt(v, B, G, ae, Se) {
      {
        var Te, me = {}, xe = null, dt = null;
        G !== void 0 && (Ue(G), xe = "" + G), kt(B) && (Ue(B.key), xe = "" + B.key), Pt(B) && (dt = B.ref, zt(B, Se));
        for (Te in B)
          be.call(B, Te) && !mt.hasOwnProperty(Te) && (me[Te] = B[Te]);
        if (v && v.defaultProps) {
          var Fe = v.defaultProps;
          for (Te in Fe)
            me[Te] === void 0 && (me[Te] = Fe[Te]);
        }
        if (xe || dt) {
          var We = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          xe && Oe(me, We), dt && he(me, We);
        }
        return gt(v, xe, dt, Se, ae, pt.current, me);
      }
    }
    var H = b.ReactCurrentOwner, A = b.ReactDebugCurrentFrame;
    function Ee(v) {
      if (v) {
        var B = v._owner, G = Ve(v.type, v._source, B ? B.type : null);
        A.setExtraStackFrame(G);
      } else
        A.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function ke(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function se() {
      {
        if (H.current) {
          var v = F(H.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function je(v) {
      return "";
    }
    var Ne = {};
    function yt(v) {
      {
        var B = se();
        if (!B) {
          var G = typeof v == "string" ? v : v.displayName || v.name;
          G && (B = `

Check the top-level render call using <` + G + ">.");
        }
        return B;
      }
    }
    function _t(v, B) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var G = yt(B);
        if (Ne[G])
          return;
        Ne[G] = !0;
        var ae = "";
        v && v._owner && v._owner !== H.current && (ae = " It was passed a child from " + F(v._owner.type) + "."), Ee(v), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ae), Ee(null);
      }
    }
    function pn(v, B) {
      {
        if (typeof v != "object")
          return;
        if (I(v))
          for (var G = 0; G < v.length; G++) {
            var ae = v[G];
            ke(ae) && _t(ae, B);
          }
        else if (ke(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Se = p(v);
          if (typeof Se == "function" && Se !== v.entries)
            for (var Te = Se.call(v), me; !(me = Te.next()).done; )
              ke(me.value) && _t(me.value, B);
        }
      }
    }
    function Qt(v) {
      {
        var B = v.type;
        if (B == null || typeof B == "string")
          return;
        var G;
        if (typeof B == "function")
          G = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === d))
          G = B.propTypes;
        else
          return;
        if (G) {
          var ae = F(B);
          R(G, v.props, "prop", ae, v);
        } else if (B.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var Se = F(B);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Je(v) {
      {
        for (var B = Object.keys(v.props), G = 0; G < B.length; G++) {
          var ae = B[G];
          if (ae !== "children" && ae !== "key") {
            Ee(v), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Ee(null);
            break;
          }
        }
        v.ref !== null && (Ee(v), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var at = {};
    function Ft(v, B, G, ae, Se, Te) {
      {
        var me = W(v);
        if (!me) {
          var xe = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dt = je();
          dt ? xe += dt : xe += se();
          var Fe;
          v === null ? Fe = "null" : I(v) ? Fe = "array" : v !== void 0 && v.$$typeof === n ? (Fe = "<" + (F(v.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof v, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, xe);
        }
        var We = Jt(v, B, G, Se, Te);
        if (We == null)
          return We;
        if (me) {
          var Ge = B.children;
          if (Ge !== void 0)
            if (ae)
              if (I(Ge)) {
                for (var qn = 0; qn < Ge.length; qn++)
                  pn(Ge[qn], v);
                Object.freeze && Object.freeze(Ge);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(Ge, v);
        }
        if (be.call(B, "key")) {
          var $n = F(v), wt = Object.keys(B).filter(function(Ah) {
            return Ah !== "key";
          }), fs = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!at[$n + fs]) {
            var Rh = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fs, $n, Rh, $n), at[$n + fs] = !0;
          }
        }
        return v === r ? Je(We) : Qt(We), We;
      }
    }
    function ze(v, B, G) {
      return Ft(v, B, G, !0);
    }
    function so(v, B, G) {
      return Ft(v, B, G, !1);
    }
    var us = so, qe = ze;
    wr.Fragment = r, wr.jsx = us, wr.jsxs = qe;
  }()), wr;
}
var zc;
function Hh() {
  return zc || (zc = 1, process.env.NODE_ENV === "production" ? ao.exports = Dh() : ao.exports = Bh()), ao.exports;
}
var X = Hh(), Ct = function() {
  return Ct = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, Ct.apply(this, arguments);
};
function Qn(t, n, e) {
  if (e || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return t.concat(i || Array.prototype.slice.call(n));
}
function zh(t) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return n[e] === void 0 && (n[e] = t(e)), n[e];
  };
}
var Fh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vh = /* @__PURE__ */ zh(
  function(t) {
    return Fh.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), He = "-ms-", jr = "-moz-", $e = "-webkit-", f0 = "comm", $i = "rule", ec = "decl", Uh = "@import", d0 = "@keyframes", qh = "@layer", h0 = Math.abs, tc = String.fromCharCode, Ws = Object.assign;
function Wh(t, n) {
  return ft(t, 0) ^ 45 ? (((n << 2 ^ ft(t, 0)) << 2 ^ ft(t, 1)) << 2 ^ ft(t, 2)) << 2 ^ ft(t, 3) : 0;
}
function x0(t) {
  return t.trim();
}
function ln(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function de(t, n, e) {
  return t.replace(n, e);
}
function Ao(t, n, e) {
  return t.indexOf(n, e);
}
function ft(t, n) {
  return t.charCodeAt(n) | 0;
}
function Zn(t, n, e) {
  return t.slice(n, e);
}
function tn(t) {
  return t.length;
}
function p0(t) {
  return t.length;
}
function Pr(t, n) {
  return n.push(t), t;
}
function Gh(t, n) {
  return t.map(n).join("");
}
function Fc(t, n) {
  return t.filter(function(e) {
    return !ln(e, n);
  });
}
var Ii = 1, er = 1, m0 = 0, Bt = 0, tt = 0, dr = "";
function Pi(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ii, column: er, length: s, return: "", siblings: a };
}
function vn(t, n) {
  return Ws(Pi("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function Wn(t) {
  for (; t.root; )
    t = vn(t.root, { children: [t] });
  Pr(t, t.siblings);
}
function Xh() {
  return tt;
}
function Yh() {
  return tt = Bt > 0 ? ft(dr, --Bt) : 0, er--, tt === 10 && (er = 1, Ii--), tt;
}
function Wt() {
  return tt = Bt < m0 ? ft(dr, Bt++) : 0, er++, tt === 10 && (er = 1, Ii++), tt;
}
function Ln() {
  return ft(dr, Bt);
}
function $o() {
  return Bt;
}
function ki(t, n) {
  return Zn(dr, t, n);
}
function Gs(t) {
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
function Kh(t) {
  return Ii = er = 1, m0 = tn(dr = t), Bt = 0, [];
}
function Jh(t) {
  return dr = "", t;
}
function ds(t) {
  return x0(ki(Bt - 1, Xs(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Qh(t) {
  for (; (tt = Ln()) && tt < 33; )
    Wt();
  return Gs(t) > 2 || Gs(tt) > 3 ? "" : " ";
}
function Zh(t, n) {
  for (; --n && Wt() && !(tt < 48 || tt > 102 || tt > 57 && tt < 65 || tt > 70 && tt < 97); )
    ;
  return ki(t, $o() + (n < 6 && Ln() == 32 && Wt() == 32));
}
function Xs(t) {
  for (; Wt(); )
    switch (tt) {
      // ] ) " '
      case t:
        return Bt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Xs(tt);
        break;
      // (
      case 40:
        t === 41 && Xs(t);
        break;
      // \
      case 92:
        Wt();
        break;
    }
  return Bt;
}
function ex(t, n) {
  for (; Wt() && t + tt !== 57; )
    if (t + tt === 84 && Ln() === 47)
      break;
  return "/*" + ki(n, Bt - 1) + "*" + tc(t === 47 ? t : Wt());
}
function tx(t) {
  for (; !Gs(Ln()); )
    Wt();
  return ki(t, Bt);
}
function nx(t) {
  return Jh(Io("", null, null, null, [""], t = Kh(t), 0, [0], t));
}
function Io(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, x = 0, g = 0, f = 0, m = 1, p = 1, b = 1, w = 0, E = "", T = o, h = i, $ = r, C = E; p; )
    switch (f = w, w = Wt()) {
      // (
      case 40:
        if (f != 108 && ft(C, d - 1) == 58) {
          Ao(C += de(ds(w), "&", "&\f"), "&\f", h0(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += ds(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Qh(f);
        break;
      // \
      case 92:
        C += Zh($o() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ln()) {
          case 42:
          case 47:
            Pr(rx(ex(Wt(), $o()), n, e, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = tn(C) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (C = de(C, /\f/g, "")), g > 0 && tn(C) - d && Pr(g > 32 ? Uc(C + ";", r, e, d - 1, c) : Uc(de(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Pr($ = Vc(C, n, e, l, u, o, a, E, T = [], h = [], d, i), i), w === 123)
              if (u === 0)
                Io(C, n, $, $, T, i, d, a, h);
              else
                switch (x === 99 && ft(C, 3) === 110 ? 100 : x) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Io(t, $, $, r && Pr(Vc(t, $, $, 0, 0, o, a, E, o, T = [], d, h), h), o, h, d, a, r ? T : h);
                    break;
                  default:
                    Io(C, $, $, $, [""], h, 0, a, h);
                }
        }
        l = u = g = 0, m = b = 1, E = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + tn(C), g = f;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && Yh() == 125)
            continue;
        }
        switch (C += tc(w), w * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (tn(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Ln() === 45 && (C += ds(Wt())), x = Ln(), u = d = tn(E = C += tx($o())), w++;
            break;
          // -
          case 45:
            f === 45 && tn(C) == 2 && (m = 0);
        }
    }
  return i;
}
function Vc(t, n, e, r, o, i, s, a, c, l, u, d) {
  for (var x = o - 1, g = o === 0 ? i : [""], f = p0(g), m = 0, p = 0, b = 0; m < r; ++m)
    for (var w = 0, E = Zn(t, x + 1, x = h0(p = s[m])), T = t; w < f; ++w)
      (T = x0(p > 0 ? g[w] + " " + E : de(E, /&\f/g, g[w]))) && (c[b++] = T);
  return Pi(t, n, e, o === 0 ? $i : a, c, l, u, d);
}
function rx(t, n, e, r) {
  return Pi(t, n, e, f0, tc(Xh()), Zn(t, 2, -2), 0, r);
}
function Uc(t, n, e, r, o) {
  return Pi(t, n, e, ec, Zn(t, 0, r), Zn(t, r + 1, -1), r, o);
}
function g0(t, n, e) {
  switch (Wh(t, n)) {
    // color-adjust
    case 5103:
      return $e + "print-" + t + t;
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
      return $e + t + t;
    // tab-size
    case 4789:
      return jr + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + t + jr + t + He + t + t;
    // writing-mode
    case 5936:
      switch (ft(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return $e + t + He + de(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return $e + t + He + de(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return $e + t + He + de(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return $e + t + He + t + t;
    // order
    case 6165:
      return $e + t + He + "flex-" + t + t;
    // align-items
    case 5187:
      return $e + t + de(t, /(\w+).+(:[^]+)/, $e + "box-$1$2" + He + "flex-$1$2") + t;
    // align-self
    case 5443:
      return $e + t + He + "flex-item-" + de(t, /flex-|-self/g, "") + (ln(t, /flex-|baseline/) ? "" : He + "grid-row-" + de(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return $e + t + He + "flex-line-pack" + de(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return $e + t + He + de(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return $e + t + He + de(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return $e + "box-" + de(t, "-grow", "") + $e + t + He + de(t, "grow", "positive") + t;
    // transition
    case 4554:
      return $e + de(t, /([^-])(transform)/g, "$1" + $e + "$2") + t;
    // cursor
    case 6187:
      return de(de(de(t, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return de(t, /(image-set\([^]*)/, $e + "$1$`$1");
    // justify-content
    case 4968:
      return de(de(t, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + t + t;
    // justify-self
    case 4200:
      if (!ln(t, /flex-|baseline/)) return He + "grid-column-align" + Zn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return He + de(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, ln(r.props, /grid-\w+-end/);
      }) ? ~Ao(t + (e = e[n].value), "span", 0) ? t : He + de(t, "-start", "") + t + He + "grid-row-span:" + (~Ao(e, "span", 0) ? ln(e, /\d+/) : +ln(e, /\d+/) - +ln(t, /\d+/)) + ";" : He + de(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return ln(r.props, /grid-\w+-start/);
      }) ? t : He + de(de(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(t, /(.+)-inline(.+)/, $e + "$1$2") + t;
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
      if (tn(t) - 1 - n > 6)
        switch (ft(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ft(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return de(t, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + jr + (ft(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Ao(t, "stretch", 0) ? g0(de(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return de(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return He + o + ":" + i + l + (s ? He + o + "-span:" + (a ? c : +c - +i) + l : "") + t;
      });
    // position: sticky
    case 4949:
      if (ft(t, n + 6) === 121)
        return de(t, ":", ":" + $e) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ft(t, ft(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return de(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $e + (ft(t, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + He + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return de(t, ":", ":" + He) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return de(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Ko(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function ox(t, n, e, r) {
  switch (t.type) {
    case qh:
      if (t.children.length) break;
    case Uh:
    case ec:
      return t.return = t.return || t.value;
    case f0:
      return "";
    case d0:
      return t.return = t.value + "{" + Ko(t.children, r) + "}";
    case $i:
      if (!tn(t.value = t.props.join(","))) return "";
  }
  return tn(e = Ko(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function ix(t) {
  var n = p0(t);
  return function(e, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += t[a](e, r, o, i) || "";
    return s;
  };
}
function sx(t) {
  return function(n) {
    n.root || (n = n.return) && t(n);
  };
}
function ax(t, n, e, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ec:
        t.return = g0(t.value, t.length, e);
        return;
      case d0:
        return Ko([vn(t, { value: de(t.value, "@", "@" + $e) })], r);
      case $i:
        if (t.length)
          return Gh(e = t.props, function(o) {
            switch (ln(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Wn(vn(t, { props: [de(o, /:(read-\w+)/, ":" + jr + "$1")] })), Wn(vn(t, { props: [o] })), Ws(t, { props: Fc(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Wn(vn(t, { props: [de(o, /:(plac\w+)/, ":" + $e + "input-$1")] })), Wn(vn(t, { props: [de(o, /:(plac\w+)/, ":" + jr + "$1")] })), Wn(vn(t, { props: [de(o, /:(plac\w+)/, He + "input-$1")] })), Wn(vn(t, { props: [o] })), Ws(t, { props: Fc(e, r) });
                break;
            }
            return "";
          });
    }
}
var cx = {
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
}, Fn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", v0 = "active", b0 = "data-styled-version", Ni = "6.1.18", nc = `/*!sc*/
`, Jo = typeof window < "u" && typeof document < "u", lx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), qc = /invalid hook call/i, co = /* @__PURE__ */ new Set(), ux = function(t, n) {
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
        qc.test(s) ? (i = !1, co.delete(r)) : o.apply(void 0, Qn([s], a, !1));
      }, ge(), i && !co.has(r) && (console.warn(r), co.add(r));
    } catch (s) {
      qc.test(s.message) && co.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ji = Object.freeze([]), tr = Object.freeze({});
function fx(t, n, e) {
  return e === void 0 && (e = tr), t.theme !== e.theme && t.theme || n || e.theme;
}
var Ys = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), dx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hx = /(^-|-$)/g;
function Wc(t) {
  return t.replace(dx, "-").replace(hx, "");
}
var xx = /(a)(d)/gi, lo = 52, Gc = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Ks(t) {
  var n, e = "";
  for (n = Math.abs(t); n > lo; n = n / lo | 0) e = Gc(n % lo) + e;
  return (Gc(n % lo) + e).replace(xx, "$1-$2");
}
var hs, y0 = 5381, Pn = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, _0 = function(t) {
  return Pn(y0, t);
};
function px(t) {
  return Ks(_0(t) >>> 0);
}
function S0(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function xs(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var w0 = typeof Symbol == "function" && Symbol.for, C0 = w0 ? Symbol.for("react.memo") : 60115, mx = w0 ? Symbol.for("react.forward_ref") : 60112, gx = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, vx = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, E0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, bx = ((hs = {})[mx] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, hs[C0] = E0, hs);
function Xc(t) {
  return ("type" in (n = t) && n.type.$$typeof) === C0 ? E0 : "$$typeof" in t ? bx[t.$$typeof] : gx;
  var n;
}
var yx = Object.defineProperty, _x = Object.getOwnPropertyNames, Yc = Object.getOwnPropertySymbols, Sx = Object.getOwnPropertyDescriptor, wx = Object.getPrototypeOf, Kc = Object.prototype;
function O0(t, n, e) {
  if (typeof n != "string") {
    if (Kc) {
      var r = wx(n);
      r && r !== Kc && O0(t, r, e);
    }
    var o = _x(n);
    Yc && (o = o.concat(Yc(n)));
    for (var i = Xc(t), s = Xc(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in vx || e && e[c] || s && c in s || i && c in i)) {
        var l = Sx(n, c);
        try {
          yx(t, c, l);
        } catch {
        }
      }
    }
  }
  return t;
}
function nr(t) {
  return typeof t == "function";
}
function rc(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Nn(t, n) {
  return t && n ? "".concat(t, " ").concat(n) : t || n || "";
}
function Jc(t, n) {
  if (t.length === 0) return "";
  for (var e = t[0], r = 1; r < t.length; r++) e += t[r];
  return e;
}
function rr(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Js(t, n, e) {
  if (e === void 0 && (e = !1), !e && !rr(t) && !Array.isArray(t)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) t[r] = Js(t[r], n[r]);
  else if (rr(n)) for (var r in n) t[r] = Js(t[r], n[r]);
  return t;
}
function oc(t, n) {
  Object.defineProperty(t, "toString", { value: n });
}
var Cx = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Ex() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  for (var e = t[0], r = [], o = 1, i = t.length; o < i; o += 1) r.push(t[o]);
  return r.forEach(function(s) {
    e = e.replace(/%[a-z]/, s);
  }), e;
}
function hr(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(Ex.apply(void 0, Qn([Cx[t]], n, !1)).trim());
}
var Ox = function() {
  function t(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return t.prototype.indexOfGroup = function(n) {
    for (var e = 0, r = 0; r < n; r++) e += this.groupSizes[r];
    return e;
  }, t.prototype.insertRules = function(n, e) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw hr(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) e += "".concat(this.tag.getRule(s)).concat(nc);
    return e;
  }, t;
}(), Tx = 1 << 30, Po = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), ko = 1, uo = function(t) {
  if (Po.has(t)) return Po.get(t);
  for (; Qo.has(ko); ) ko++;
  var n = ko++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > Tx)) throw hr(16, "".concat(n));
  return Po.set(t, n), Qo.set(n, t), n;
}, Rx = function(t, n) {
  ko = n + 1, Po.set(t, n), Qo.set(n, t);
}, Ax = "style[".concat(Fn, "][").concat(b0, '="').concat(Ni, '"]'), $x = new RegExp("^".concat(Fn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ix = function(t, n, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(n, r);
}, Px = function(t, n) {
  for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(nc), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match($x);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (Rx(u, l), Ix(t, u, c[3]), t.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Qc = function(t) {
  for (var n = document.querySelectorAll(Ax), e = 0, r = n.length; e < r; e++) {
    var o = n[e];
    o && o.getAttribute(Fn) !== v0 && (Px(t, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function kx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var T0 = function(t) {
  var n = document.head, e = t || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Fn, "]")));
    return c[c.length - 1];
  }(e), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Fn, v0), r.setAttribute(b0, Ni);
  var s = kx();
  return s && r.setAttribute("nonce", s), e.insertBefore(r, i), r;
}, Nx = function() {
  function t(n) {
    this.element = T0(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === e) return s;
      }
      throw hr(17);
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
}(), jx = function() {
  function t(n) {
    this.element = T0(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Lx = function() {
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
}(), Zc = Jo, Mx = { isServer: !Jo, useCSSOMInjection: !lx }, R0 = function() {
  function t(n, e, r) {
    n === void 0 && (n = tr), e === void 0 && (e = {});
    var o = this;
    this.options = Ct(Ct({}, Mx), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && Jo && Zc && (Zc = !1, Qc(this)), oc(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var x = function(b) {
            return Qo.get(b);
          }(d);
          if (x === void 0) return "continue";
          var g = i.names.get(x), f = s.getGroup(d);
          if (g === void 0 || !g.size || f.length === 0) return "continue";
          var m = "".concat(Fn, ".g").concat(d, '[id="').concat(x, '"]'), p = "";
          g !== void 0 && g.forEach(function(b) {
            b.length > 0 && (p += "".concat(b, ","));
          }), c += "".concat(f).concat(m, '{content:"').concat(p, '"}').concat(nc);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return t.registerId = function(n) {
    return uo(n);
  }, t.prototype.rehydrate = function() {
    !this.server && Jo && Qc(this);
  }, t.prototype.reconstructWithOptions = function(n, e) {
    return e === void 0 && (e = !0), new t(Ct(Ct({}, this.options), n), this.gs, e && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(e) {
      var r = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new Lx(o) : r ? new Nx(o) : new jx(o);
    }(this.options), new Ox(n)));
    var n;
  }, t.prototype.hasNameForId = function(n, e) {
    return this.names.has(n) && this.names.get(n).has(e);
  }, t.prototype.registerName = function(n, e) {
    if (uo(n), this.names.has(n)) this.names.get(n).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(n, r);
    }
  }, t.prototype.insertRules = function(n, e, r) {
    this.registerName(n, e), this.getTag().insertRules(uo(n), r);
  }, t.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.prototype.clearRules = function(n) {
    this.getTag().clearGroup(uo(n)), this.clearNames(n);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), Dx = /&/g, Bx = /^\s*\/\/.*$/gm;
function A0(t, n) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(n, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(n, " ")), e.props = e.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = A0(e.children, n)), e;
  });
}
function Hx(t) {
  var n, e, r, o = tr, i = o.options, s = i === void 0 ? tr : i, a = o.plugins, c = a === void 0 ? ji : a, l = function(x, g, f) {
    return f.startsWith(e) && f.endsWith(e) && f.replaceAll(e, "").length > 0 ? ".".concat(n) : x;
  }, u = c.slice();
  u.push(function(x) {
    x.type === $i && x.value.includes("&") && (x.props[0] = x.props[0].replace(Dx, e).replace(r, l));
  }), s.prefix && u.push(ax), u.push(ox);
  var d = function(x, g, f, m) {
    g === void 0 && (g = ""), f === void 0 && (f = ""), m === void 0 && (m = "&"), n = m, e = g, r = new RegExp("\\".concat(e, "\\b"), "g");
    var p = x.replace(Bx, ""), b = nx(f || g ? "".concat(f, " ").concat(g, " { ").concat(p, " }") : p);
    s.namespace && (b = A0(b, s.namespace));
    var w = [];
    return Ko(b, ix(u.concat(sx(function(E) {
      return w.push(E);
    })))), w;
  };
  return d.hash = c.length ? c.reduce(function(x, g) {
    return g.name || hr(15), Pn(x, g.name);
  }, y0).toString() : "", d;
}
var zx = new R0(), Qs = Hx(), $0 = Y.createContext({ shouldForwardProp: void 0, styleSheet: zx, stylis: Qs });
$0.Consumer;
Y.createContext(void 0);
function el() {
  return Dt($0);
}
var tl = function() {
  function t(n, e) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qs);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = e, oc(this, function() {
      throw hr(12, String(r.name));
    });
  }
  return t.prototype.getName = function(n) {
    return n === void 0 && (n = Qs), this.name + n.hash;
  }, t;
}(), Fx = function(t) {
  return t >= "A" && t <= "Z";
};
function nl(t) {
  for (var n = "", e = 0; e < t.length; e++) {
    var r = t[e];
    if (e === 1 && r === "-" && t[0] === "-") return t;
    Fx(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var I0 = function(t) {
  return t == null || t === !1 || t === "";
}, P0 = function(t) {
  var n, e, r = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !I0(i) && (Array.isArray(i) && i.isCss || nr(i) ? r.push("".concat(nl(o), ":"), i, ";") : rr(i) ? r.push.apply(r, Qn(Qn(["".concat(o, " {")], P0(i), !1), ["}"], !1)) : r.push("".concat(nl(o), ": ").concat((n = o, (e = i) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || n in cx || n.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return r;
};
function Mn(t, n, e, r) {
  if (I0(t)) return [];
  if (rc(t)) return [".".concat(t.styledComponentId)];
  if (nr(t)) {
    if (!nr(i = t) || i.prototype && i.prototype.isReactComponent || !n) return [t];
    var o = t(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tl || rr(o) || o === null || console.error("".concat(S0(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Mn(o, n, e, r);
  }
  var i;
  return t instanceof tl ? e ? (t.inject(e, r), [t.getName(r)]) : [t] : rr(t) ? P0(t) : Array.isArray(t) ? Array.prototype.concat.apply(ji, t.map(function(s) {
    return Mn(s, n, e, r);
  })) : [t.toString()];
}
function Vx(t) {
  for (var n = 0; n < t.length; n += 1) {
    var e = t[n];
    if (nr(e) && !rc(e)) return !1;
  }
  return !0;
}
var Ux = _0(Ni), qx = function() {
  function t(n, e, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Vx(n), this.componentId = e, this.baseHash = Pn(Ux, e), this.baseStyle = r, R0.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(n, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = Nn(o, this.staticRulesId);
    else {
      var i = Jc(Mn(this.rules, n, e, r)), s = Ks(Pn(this.baseHash, i) >>> 0);
      if (!e.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        e.insertRules(this.componentId, s, a);
      }
      o = Nn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = Pn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = Pn(c, d));
        else if (d) {
          var x = Jc(Mn(d, n, e, r));
          c = Pn(c, x + u), l += x;
        }
      }
      if (l) {
        var g = Ks(c >>> 0);
        e.hasNameForId(this.componentId, g) || e.insertRules(this.componentId, g, r(l, ".".concat(g), void 0, this.componentId)), o = Nn(o, g);
      }
    }
    return o;
  }, t;
}(), k0 = Y.createContext(void 0);
k0.Consumer;
var ps = {}, rl = /* @__PURE__ */ new Set();
function Wx(t, n, e) {
  var r = rc(t), o = t, i = !xs(t), s = n.attrs, a = s === void 0 ? ji : s, c = n.componentId, l = c === void 0 ? function(T, h) {
    var $ = typeof T != "string" ? "sc" : Wc(T);
    ps[$] = (ps[$] || 0) + 1;
    var C = "".concat($, "-").concat(px(Ni + $ + ps[$]));
    return h ? "".concat(h, "-").concat(C) : C;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(T) {
    return xs(T) ? "styled.".concat(T) : "Styled(".concat(S0(T), ")");
  }(t) : u, x = n.displayName && n.componentId ? "".concat(Wc(n.displayName), "-").concat(n.componentId) : n.componentId || l, g = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, f = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var p = n.shouldForwardProp;
      f = function(T, h) {
        return m(T, h) && p(T, h);
      };
    } else f = m;
  }
  var b = new qx(e, x, r ? o.componentStyle : void 0);
  function w(T, h) {
    return function($, C, L) {
      var D = $.attrs, W = $.componentStyle, re = $.defaultProps, J = $.foldedComponentIds, F = $.styledComponentId, U = $.target, Q = Y.useContext(k0), j = el(), k = $.shouldForwardProp || j.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Mc(F);
      var P = fx(C, Q, re) || tr, M = function(ce, fe, oe) {
        for (var Ie, ye = Ct(Ct({}, fe), { className: void 0, theme: oe }), Be = 0; Be < ce.length; Be += 1) {
          var Le = nr(Ie = ce[Be]) ? Ie(ye) : Ie;
          for (var pe in Le) ye[pe] = pe === "className" ? Nn(ye[pe], Le[pe]) : pe === "style" ? Ct(Ct({}, ye[pe]), Le[pe]) : Le[pe];
        }
        return fe.className && (ye.className = Nn(ye.className, fe.className)), ye;
      }(D, C, P), V = M.as || U, z = {};
      for (var q in M) M[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" && M.theme === P || (q === "forwardedAs" ? z.as = M.forwardedAs : k && !k(q, V) || (z[q] = M[q], k || process.env.NODE_ENV !== "development" || Vh(q) || rl.has(q) || !Ys.has(V) || (rl.add(q), console.warn('styled-components: it looks like an unknown prop "'.concat(q, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ce, fe) {
        var oe = el(), Ie = ce.generateAndInjectStyles(fe, oe.styleSheet, oe.stylis);
        return process.env.NODE_ENV !== "production" && Mc(Ie), Ie;
      }(W, M);
      process.env.NODE_ENV !== "production" && $.warnTooManyClasses && $.warnTooManyClasses(te);
      var K = Nn(J, F);
      return te && (K += " " + te), M.className && (K += " " + M.className), z[xs(V) && !Ys.has(V) ? "class" : "className"] = K, L && (z.ref = L), Ph(V, z);
    }(E, T, h);
  }
  w.displayName = d;
  var E = Y.forwardRef(w);
  return E.attrs = g, E.componentStyle = b, E.displayName = d, E.shouldForwardProp = f, E.foldedComponentIds = r ? Nn(o.foldedComponentIds, o.styledComponentId) : "", E.styledComponentId = x, E.target = r ? o.target : t, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? function(h) {
      for (var $ = [], C = 1; C < arguments.length; C++) $[C - 1] = arguments[C];
      for (var L = 0, D = $; L < D.length; L++) Js(h, D[L], !0);
      return h;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (ux(d, x), E.warnTooManyClasses = /* @__PURE__ */ function(T, h) {
    var $ = {}, C = !1;
    return function(L) {
      if (!C && ($[L] = !0, Object.keys($).length >= 200)) {
        var D = h ? ' with the id of "'.concat(h, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(D, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, $ = {};
      }
    };
  }(d, x)), oc(E, function() {
    return ".".concat(E.styledComponentId);
  }), i && O0(E, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), E;
}
function ol(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var il = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Gx(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (nr(t) || rr(t)) return il(Mn(ol(ji, Qn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? Mn(r) : il(Mn(ol(r, n)));
}
function Zs(t, n, e) {
  if (e === void 0 && (e = tr), !n) throw hr(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(n, e, Gx.apply(void 0, Qn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Zs(t, n, Ct(Ct({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Zs(t, n, Ct(Ct({}, e), o));
  }, r;
}
var N0 = function(t) {
  return Zs(Wx, t);
}, an = N0;
Ys.forEach(function(t) {
  an[t] = N0(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var fo = "__sc-".concat(Fn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[fo] || (window[fo] = 0), window[fo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[fo] += 1);
const Li = Zo;
(function(t, n) {
  const e = Zo, r = t();
  for (; ; )
    try {
      if (parseInt(e(401)) / 1 * (parseInt(e(400)) / 2) + -parseInt(e(397)) / 3 * (-parseInt(e(394)) / 4) + -parseInt(e(403)) / 5 * (parseInt(e(391)) / 6) + parseInt(e(398)) / 7 * (-parseInt(e(402)) / 8) + -parseInt(e(399)) / 9 * (-parseInt(e(405)) / 10) + parseInt(e(395)) / 11 + -parseInt(e(404)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 639001);
function Zo(t, n) {
  const e = ei();
  return Zo = function(r, o) {
    return r = r - 391, e[r];
  }, Zo(t, n);
}
const Xx = an[Li(392)]`
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
`;
function ei() {
  const t = ["8800790CZpujo", "450CecwxF", "div", "span", "576aEONHJ", "10756713fqqdwa", "canvas", "4101mSCzLo", "7hYpbZP", "9tIWibg", "70888EMKBqZ", "13zeQqIT", "5251880aRSsMk", "54935qUbTNz", "4752852tIryDd"];
  return ei = function() {
    return t;
  }, ei();
}
const Yx = an[Li(392)]`
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
`, Kx = an[Li(396)]`
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, sl = an[Li(393)]`
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
`, j0 = /* @__PURE__ */ Ai({});
var ms = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var al;
function Jx() {
  return al || (al = 1, function(t) {
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
  }(ms)), ms.exports;
}
var Qx = Jx();
const we = /* @__PURE__ */ Mh(Qx), Zx = {
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
}, ct = Math.round;
function gs(t, n) {
  const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const cl = (t, n, e) => e === 0 ? t : t / 100;
function Cr(t, n) {
  const e = n || 255;
  return t > e ? e : t < 0 ? 0 : t;
}
let ho = class L0 {
  constructor(n) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    _e(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    _e(this, "r", 0);
    /**
     * Green, G in RGB
     */
    _e(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    _e(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    _e(this, "a", 1);
    // HSV privates
    _e(this, "_h");
    _e(this, "_s");
    _e(this, "_l");
    _e(this, "_v");
    // intermediate variables to calculate HSL/HSV
    _e(this, "_max");
    _e(this, "_min");
    _e(this, "_brightness");
    function e(r) {
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
        const i = Zx[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (n instanceof L0)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (e("rgb"))
      this.r = Cr(n.r), this.g = Cr(n.g), this.b = Cr(n.b), this.a = typeof n.a == "number" ? Cr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = ct(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: ct(i("r")),
      g: ct(i("g")),
      b: ct(i("b")),
      a: ct(i("a") * 100) / 100
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => ct((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = ct(this.a * 255).toString(16);
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
    const n = this.getHue(), e = ct(this.getSaturation() * 100), r = ct(this.getLightness() * 100);
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
    return o[n] = Cr(e, r), o;
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
      const x = ct(r * 255);
      this.r = x, this.g = x, this.b = x;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = ct((i + d) * 255), this.g = ct((s + d) * 255), this.b = ct((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ct(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = ct(r * (1 - e) * 255), u = ct(r * (1 - e * c) * 255), d = ct(r * (1 - e * (1 - c)) * 255);
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
    const e = gs(n, cl);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = gs(n, cl);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = gs(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ct(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
};
const xo = 2, ll = 0.16, ep = 0.05, tp = 0.05, np = 0.15, M0 = 5, D0 = 4, rp = [{
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
function ul(t, n, e) {
  let r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - xo * n : Math.round(t.h) + xo * n : r = e ? Math.round(t.h) + xo * n : Math.round(t.h) - xo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function fl(t, n, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  let r;
  return e ? r = t.s - ll * n : n === D0 ? r = t.s + ll : r = t.s + ep * n, r > 1 && (r = 1), e && n === M0 && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function dl(t, n, e) {
  let r;
  return e ? r = t.v + tp * n : r = t.v - np * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function op(t, n = {}) {
  const e = [], r = new ho(t), o = r.toHsv();
  for (let i = M0; i > 0; i -= 1) {
    const s = new ho({
      h: ul(o, i, !0),
      s: fl(o, i, !0),
      v: dl(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (let i = 1; i <= D0; i += 1) {
    const s = new ho({
      h: ul(o, i),
      s: fl(o, i),
      v: dl(o, i)
    });
    e.push(s);
  }
  return n.theme === "dark" ? rp.map(({
    index: i,
    amount: s
  }) => new ho(n.backgroundColor || "#141414").mix(e[i], s).toHexString()) : e.map((i) => i.toHexString());
}
const ea = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ea.primary = ea[5];
function ip() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function sp(t, n) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(n);
  let e = n;
  for (; e; ) {
    if (e === t)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
const hl = "data-rc-order", xl = "data-rc-priority", ap = "rc-util-key", ta = /* @__PURE__ */ new Map();
function B0({
  mark: t
} = {}) {
  return t ? t.startsWith("data-") ? t : `data-${t}` : ap;
}
function ic(t) {
  return t.attachTo ? t.attachTo : document.querySelector("head") || document.body;
}
function cp(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function sc(t) {
  return Array.from((ta.get(t) || t).children).filter((n) => n.tagName === "STYLE");
}
function H0(t, n = {}) {
  if (!ip())
    return null;
  const {
    csp: e,
    prepend: r,
    priority: o = 0
  } = n, i = cp(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(hl, i), s && o && a.setAttribute(xl, `${o}`), e != null && e.nonce && (a.nonce = e == null ? void 0 : e.nonce), a.innerHTML = t;
  const c = ic(n), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (n.styles || sc(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(hl)))
          return !1;
        const x = Number(d.getAttribute(xl) || 0);
        return o >= x;
      });
      if (u.length)
        return c.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function lp(t, n = {}) {
  let {
    styles: e
  } = n;
  return e || (e = sc(ic(n))), e.find((r) => r.getAttribute(B0(n)) === t);
}
function up(t, n) {
  const e = ta.get(t);
  if (!e || !sp(document, e)) {
    const r = H0("", n), {
      parentNode: o
    } = r;
    ta.set(t, o), t.removeChild(r);
  }
}
function fp(t, n, e = {}) {
  var c, l, u;
  const r = ic(e), o = sc(r), i = {
    ...e,
    styles: o
  };
  up(r, i);
  const s = lp(n, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== t && (s.innerHTML = t), s;
  const a = H0(t, i);
  return a.setAttribute(B0(i), n), a;
}
function z0(t) {
  var n;
  return (n = t == null ? void 0 : t.getRootNode) == null ? void 0 : n.call(t);
}
function dp(t) {
  return z0(t) instanceof ShadowRoot;
}
function hp(t) {
  return dp(t) ? z0(t) : null;
}
let na = {};
const ac = [], xp = (t) => {
  ac.push(t);
};
function pp(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    const e = ac.reduce((r, o) => o(r ?? "", "warning"), n);
    e && console.error(`Warning: ${e}`);
  }
}
function mp(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    const e = ac.reduce((r, o) => o(r ?? "", "note"), n);
    e && console.warn(`Note: ${e}`);
  }
}
function gp() {
  na = {};
}
function F0(t, n, e) {
  !n && !na[e] && (t(!1, e), na[e] = !0);
}
function Mi(t, n) {
  F0(pp, t, n);
}
function vp(t, n) {
  F0(mp, t, n);
}
Mi.preMessage = xp;
Mi.resetWarned = gp;
Mi.noteOnce = vp;
function bp(t) {
  return t.replace(/-(.)/g, (n, e) => e.toUpperCase());
}
function yp(t, n) {
  Mi(t, `[@ant-design/icons] ${n}`);
}
function pl(t) {
  return typeof t == "object" && typeof t.name == "string" && typeof t.theme == "string" && (typeof t.icon == "object" || typeof t.icon == "function");
}
function ml(t = {}) {
  return Object.keys(t).reduce((n, e) => {
    const r = t[e];
    switch (e) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[e], n[bp(e)] = r;
    }
    return n;
  }, {});
}
function ra(t, n, e) {
  return e ? /* @__PURE__ */ Y.createElement(t.tag, {
    key: n,
    ...ml(t.attrs),
    ...e
  }, (t.children || []).map((r, o) => ra(r, `${n}-${t.tag}-${o}`))) : /* @__PURE__ */ Y.createElement(t.tag, {
    key: n,
    ...ml(t.attrs)
  }, (t.children || []).map((r, o) => ra(r, `${n}-${t.tag}-${o}`)));
}
function V0(t) {
  return op(t)[0];
}
function U0(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
const _p = `
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
`, Sp = (t) => {
  const {
    csp: n,
    prefixCls: e,
    layer: r
  } = Dt(j0);
  let o = _p;
  e && (o = o.replace(/anticon/g, e)), r && (o = `@layer ${r} {
${o}
}`), Xe(() => {
    const i = t.current, s = hp(i);
    fp(o, "@ant-design-icons", {
      prepend: !r,
      csp: n,
      attachTo: s
    });
  }, []);
}, Lr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function wp({
  primaryColor: t,
  secondaryColor: n
}) {
  Lr.primaryColor = t, Lr.secondaryColor = n || V0(t), Lr.calculated = !!n;
}
function Cp() {
  return {
    ...Lr
  };
}
const xr = (t) => {
  const {
    icon: n,
    className: e,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = t, c = O.useRef();
  let l = Lr;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || V0(i)
  }), Sp(c), yp(pl(n), `icon should be icon definiton, but got ${n}`), !pl(n))
    return null;
  let u = n;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), ra(u.icon, `svg-${u.name}`, {
    className: e,
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
xr.displayName = "IconReact";
xr.getTwoToneColors = Cp;
xr.setTwoToneColors = wp;
function q0(t) {
  const [n, e] = U0(t);
  return xr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: e
  });
}
function Ep() {
  const t = xr.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
function oa() {
  return oa = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, oa.apply(this, arguments);
}
q0(ea.primary);
const Di = /* @__PURE__ */ O.forwardRef((t, n) => {
  const {
    // affect outter <i>...</i>
    className: e,
    // affect inner <svg>...</svg>
    icon: r,
    spin: o,
    rotate: i,
    tabIndex: s,
    onClick: a,
    // other
    twoToneColor: c,
    ...l
  } = t, {
    prefixCls: u = "anticon",
    rootClassName: d
  } = O.useContext(j0), x = we(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, e);
  let g = s;
  g === void 0 && a && (g = -1);
  const f = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [m, p] = U0(c);
  return /* @__PURE__ */ O.createElement("span", oa({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: g,
    onClick: a,
    className: x
  }), /* @__PURE__ */ O.createElement(xr, {
    icon: r,
    primaryColor: m,
    secondaryColor: p,
    style: f
  }));
});
Di.displayName = "AntdIcon";
Di.getTwoToneColor = Ep;
Di.setTwoToneColor = q0;
var Op = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Tp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Rp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Ap = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, $p = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Ip = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Pp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function ia() {
  return ia = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, ia.apply(this, arguments);
}
const kp = (t, n) => /* @__PURE__ */ O.createElement(Di, ia({}, t, {
  ref: n,
  icon: Pp
})), W0 = /* @__PURE__ */ O.forwardRef(kp);
process.env.NODE_ENV !== "production" && (W0.displayName = "ReloadOutlined");
var po = { exports: {} }, Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function Np() {
  if (gl) return Re;
  gl = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), f;
  f = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case t:
          switch (p = p.type, p) {
            case e:
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
                case x:
                case d:
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
  return Re.ContextConsumer = s, Re.ContextProvider = i, Re.Element = t, Re.ForwardRef = c, Re.Fragment = e, Re.Lazy = x, Re.Memo = d, Re.Portal = n, Re.Profiler = o, Re.StrictMode = r, Re.Suspense = l, Re.SuspenseList = u, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(p) {
    return m(p) === s;
  }, Re.isContextProvider = function(p) {
    return m(p) === i;
  }, Re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, Re.isForwardRef = function(p) {
    return m(p) === c;
  }, Re.isFragment = function(p) {
    return m(p) === e;
  }, Re.isLazy = function(p) {
    return m(p) === x;
  }, Re.isMemo = function(p) {
    return m(p) === d;
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
    return typeof p == "string" || typeof p == "function" || p === e || p === o || p === r || p === l || p === u || p === g || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === f || p.getModuleId !== void 0);
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
var vl;
function jp() {
  return vl || (vl = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), f = !1, m = !1, p = !1, b = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function T(ne) {
      return !!(typeof ne == "string" || typeof ne == "function" || ne === e || ne === o || w || ne === r || ne === l || ne === u || b || ne === g || f || m || p || typeof ne == "object" && ne !== null && (ne.$$typeof === x || ne.$$typeof === d || ne.$$typeof === i || ne.$$typeof === s || ne.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ne.$$typeof === E || ne.getModuleId !== void 0));
    }
    function h(ne) {
      if (typeof ne == "object" && ne !== null) {
        var Ve = ne.$$typeof;
        switch (Ve) {
          case t:
            var be = ne.type;
            switch (be) {
              case e:
              case o:
              case r:
              case l:
              case u:
                return be;
              default:
                var st = be && be.$$typeof;
                switch (st) {
                  case a:
                  case s:
                  case c:
                  case x:
                  case d:
                  case i:
                    return st;
                  default:
                    return Ve;
                }
            }
          case n:
            return Ve;
        }
      }
    }
    var $ = s, C = i, L = t, D = c, W = e, re = x, J = d, F = n, U = o, Q = r, j = l, k = u, P = !1, M = !1;
    function V(ne) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(ne) {
      return M || (M = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(ne) {
      return h(ne) === s;
    }
    function te(ne) {
      return h(ne) === i;
    }
    function K(ne) {
      return typeof ne == "object" && ne !== null && ne.$$typeof === t;
    }
    function ce(ne) {
      return h(ne) === c;
    }
    function fe(ne) {
      return h(ne) === e;
    }
    function oe(ne) {
      return h(ne) === x;
    }
    function Ie(ne) {
      return h(ne) === d;
    }
    function ye(ne) {
      return h(ne) === n;
    }
    function Be(ne) {
      return h(ne) === o;
    }
    function Le(ne) {
      return h(ne) === r;
    }
    function pe(ne) {
      return h(ne) === l;
    }
    function Ke(ne) {
      return h(ne) === u;
    }
    Ae.ContextConsumer = $, Ae.ContextProvider = C, Ae.Element = L, Ae.ForwardRef = D, Ae.Fragment = W, Ae.Lazy = re, Ae.Memo = J, Ae.Portal = F, Ae.Profiler = U, Ae.StrictMode = Q, Ae.Suspense = j, Ae.SuspenseList = k, Ae.isAsyncMode = V, Ae.isConcurrentMode = z, Ae.isContextConsumer = q, Ae.isContextProvider = te, Ae.isElement = K, Ae.isForwardRef = ce, Ae.isFragment = fe, Ae.isLazy = oe, Ae.isMemo = Ie, Ae.isPortal = ye, Ae.isProfiler = Be, Ae.isStrictMode = Le, Ae.isSuspense = pe, Ae.isSuspenseList = Ke, Ae.isValidElementType = T, Ae.typeOf = h;
  }()), Ae;
}
var bl;
function Lp() {
  return bl || (bl = 1, process.env.NODE_ENV === "production" ? po.exports = Np() : po.exports = jp()), po.exports;
}
var vs = Lp();
const rn = /* @__PURE__ */ Object.create(null);
rn.open = "0";
rn.close = "1";
rn.ping = "2";
rn.pong = "3";
rn.message = "4";
rn.upgrade = "5";
rn.noop = "6";
const No = /* @__PURE__ */ Object.create(null);
Object.keys(rn).forEach((t) => {
  No[rn[t]] = t;
});
const sa = { type: "error", data: "parser error" }, G0 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", X0 = typeof ArrayBuffer == "function", Y0 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, cc = ({ type: t, data: n }, e, r) => G0 && n instanceof Blob ? e ? r(n) : yl(n, r) : X0 && (n instanceof ArrayBuffer || Y0(n)) ? e ? r(n) : yl(new Blob([n]), r) : r(rn[t] + (n || "")), yl = (t, n) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    n("b" + (r || ""));
  }, e.readAsDataURL(t);
};
function _l(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let bs;
function Mp(t, n) {
  if (G0 && t.data instanceof Blob)
    return t.data.arrayBuffer().then(_l).then(n);
  if (X0 && (t.data instanceof ArrayBuffer || Y0(t.data)))
    return n(_l(t.data));
  cc(t, !1, (e) => {
    bs || (bs = new TextEncoder()), n(bs.encode(e));
  });
}
const Sl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Sl.length; t++)
  kr[Sl.charCodeAt(t)] = t;
const Dp = (t) => {
  let n = t.length * 0.75, e = t.length, r, o = 0, i, s, a, c;
  t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < e; r += 4)
    i = kr[t.charCodeAt(r)], s = kr[t.charCodeAt(r + 1)], a = kr[t.charCodeAt(r + 2)], c = kr[t.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Bp = typeof ArrayBuffer == "function", lc = (t, n) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: K0(t, n)
    };
  const e = t.charAt(0);
  return e === "b" ? {
    type: "message",
    data: Hp(t.substring(1), n)
  } : No[e] ? t.length > 1 ? {
    type: No[e],
    data: t.substring(1)
  } : {
    type: No[e]
  } : sa;
}, Hp = (t, n) => {
  if (Bp) {
    const e = Dp(t);
    return K0(e, n);
  } else
    return { base64: !0, data: t };
}, K0 = (t, n) => {
  switch (n) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, J0 = "", zp = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((i, s) => {
    cc(i, !1, (a) => {
      r[s] = a, ++o === e && n(r.join(J0));
    });
  });
}, Fp = (t, n) => {
  const e = t.split(J0), r = [];
  for (let o = 0; o < e.length; o++) {
    const i = lc(e[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Vp() {
  return new TransformStream({
    transform(t, n) {
      Mp(t, (e) => {
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
let ys;
function mo(t) {
  return t.reduce((n, e) => n + e.length, 0);
}
function go(t, n) {
  if (t[0].length === n)
    return t.shift();
  const e = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    e[o] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), e;
}
function Up(t, n) {
  ys || (ys = new TextDecoder());
  const e = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (e.push(s); ; ) {
        if (r === 0) {
          if (mo(e) < 1)
            break;
          const c = go(e, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (mo(e) < 2)
            break;
          const c = go(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (mo(e) < 8)
            break;
          const c = go(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(sa);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (mo(e) < o)
            break;
          const c = go(e, o);
          a.enqueue(lc(i ? c : ys.decode(c), n)), r = 0;
        }
        if (o === 0 || o > t) {
          a.enqueue(sa);
          break;
        }
      }
    }
  });
}
const Q0 = 4;
function rt(t) {
  if (t) return qp(t);
}
function qp(t) {
  for (var n in rt.prototype)
    t[n] = rt.prototype[n];
  return t;
}
rt.prototype.on = rt.prototype.addEventListener = function(t, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
};
rt.prototype.once = function(t, n) {
  function e() {
    this.off(t, e), n.apply(this, arguments);
  }
  return e.fn = n, this.on(t, e), this;
};
rt.prototype.off = rt.prototype.removeListener = rt.prototype.removeAllListeners = rt.prototype.removeEventListener = function(t, n) {
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
rt.prototype.emit = function(t) {
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
rt.prototype.emitReserved = rt.prototype.emit;
rt.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
rt.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Bi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), Mt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Wp = "arraybuffer";
function Z0(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const Gp = Mt.setTimeout, Xp = Mt.clearTimeout;
function Hi(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = Gp.bind(Mt), t.clearTimeoutFn = Xp.bind(Mt)) : (t.setTimeoutFn = Mt.setTimeout.bind(Mt), t.clearTimeoutFn = Mt.clearTimeout.bind(Mt));
}
const Yp = 1.33;
function Kp(t) {
  return typeof t == "string" ? Jp(t) : Math.ceil((t.byteLength || t.size) * Yp);
}
function Jp(t) {
  let n = 0, e = 0;
  for (let r = 0, o = t.length; r < o; r++)
    n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : n < 55296 || n >= 57344 ? e += 3 : (r++, e += 4);
  return e;
}
function ef() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Qp(t) {
  let n = "";
  for (let e in t)
    t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
  return n;
}
function Zp(t) {
  let n = {}, e = t.split("&");
  for (let r = 0, o = e.length; r < o; r++) {
    let i = e[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class e1 extends Error {
  constructor(n, e, r) {
    super(n), this.description = e, this.context = r, this.type = "TransportError";
  }
}
class uc extends rt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Hi(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new e1(n, e, r)), this;
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
    const e = lc(n, this.socket.binaryType);
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
    const e = Qp(n);
    return e.length ? "?" + e : "";
  }
}
class t1 extends uc {
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
    Fp(n, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, zp(n, (e) => {
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
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = ef()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(n, e);
  }
}
let tf = !1;
try {
  tf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const n1 = tf;
function r1() {
}
class o1 extends t1 {
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
class nn extends rt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, e, r) {
    super(), this.createRequest = n, Hi(this, r), this._opts = r, this._method = r.method || "GET", this._uri = e, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const e = Z0(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = nn.requestsCount++, nn.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = r1, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete nn.requests[this._index], this._xhr = null;
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
nn.requestsCount = 0;
nn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", wl);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Mt ? "pagehide" : "unload";
    addEventListener(t, wl, !1);
  }
}
function wl() {
  for (let t in nn.requests)
    nn.requests.hasOwnProperty(t) && nn.requests[t].abort();
}
const i1 = function() {
  const t = nf({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class s1 extends o1 {
  constructor(n) {
    super(n);
    const e = n && n.forceBase64;
    this.supportsBinary = i1 && !e;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new nn(nf, this.uri(), n);
  }
}
function nf(t) {
  const n = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || n1))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new Mt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const rf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class a1 extends uc {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), e = this.opts.protocols, r = rf ? {} : Z0(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      cc(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && Bi(() => {
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
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = ef()), this.supportsBinary || (e.b64 = 1), this.createUri(n, e);
  }
}
const _s = Mt.WebSocket || Mt.MozWebSocket;
class c1 extends a1 {
  createSocket(n, e, r) {
    return rf ? new _s(n, e, r) : e ? new _s(n, e) : new _s(n);
  }
  doWrite(n, e) {
    this.ws.send(e);
  }
}
class l1 extends uc {
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
        const e = Up(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(e).getReader(), o = Vp();
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
        o && Bi(() => {
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
const u1 = {
  websocket: c1,
  webtransport: l1,
  polling: s1
}, f1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, d1 = [
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
function aa(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const n = t, e = t.indexOf("["), r = t.indexOf("]");
  e != -1 && r != -1 && (t = t.substring(0, e) + t.substring(e, r).replace(/:/g, ";") + t.substring(r, t.length));
  let o = f1.exec(t || ""), i = {}, s = 14;
  for (; s--; )
    i[d1[s]] = o[s] || "";
  return e != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = h1(i, i.path), i.queryKey = x1(i, i.query), i;
}
function h1(t, n) {
  const e = /\/{2,9}/g, r = n.replace(e, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function x1(t, n) {
  const e = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (e[o] = i);
  }), e;
}
const ca = typeof addEventListener == "function" && typeof removeEventListener == "function", jo = [];
ca && addEventListener("offline", () => {
  jo.forEach((t) => t());
}, !1);
class wn extends rt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, e) {
    if (super(), this.binaryType = Wp, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (e = n, n = null), n) {
      const r = aa(n);
      e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
    } else e.host && (e.hostname = aa(e.host).host);
    Hi(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((r) => {
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Zp(this.opts.query)), ca && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, jo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    e.EIO = Q0, e.transport = n, this.id && (e.sid = this.id);
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
    const n = this.opts.rememberUpgrade && wn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", wn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (e += Kp(o)), r > 0 && e > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, Bi(() => {
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
    if (wn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ca && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = jo.indexOf(this._offlineEventListener);
        r !== -1 && jo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
wn.protocol = Q0;
class p1 extends wn {
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
    wn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            wn.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const x = new Error("probe error");
            x.transport = e.name, this.emitReserved("upgradeError", x);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), e.close(), e = null);
    }
    const s = (d) => {
      const x = new Error("probe error: " + d);
      x.transport = e.name, i(), this.emitReserved("upgradeError", x);
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
    const u = () => {
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
let m1 = class extends p1 {
  constructor(n, e = {}) {
    const r = typeof n == "object" ? n : e;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => u1[o]).filter((o) => !!o)), super(n, r);
  }
};
function g1(t, n = "", e) {
  let r = t;
  e = e || typeof location < "u" && location, t == null && (t = e.protocol + "//" + e.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = e.protocol + t : t = e.host + t), /^(https?|wss?):\/\//.test(t) || (typeof e < "u" ? t = e.protocol + "//" + t : t = "https://" + t), r = aa(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
}
const v1 = typeof ArrayBuffer == "function", b1 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, of = Object.prototype.toString, y1 = typeof Blob == "function" || typeof Blob < "u" && of.call(Blob) === "[object BlobConstructor]", _1 = typeof File == "function" || typeof File < "u" && of.call(File) === "[object FileConstructor]";
function fc(t) {
  return v1 && (t instanceof ArrayBuffer || b1(t)) || y1 && t instanceof Blob || _1 && t instanceof File;
}
function Lo(t, n) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let e = 0, r = t.length; e < r; e++)
      if (Lo(t[e]))
        return !0;
    return !1;
  }
  if (fc(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Lo(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && Lo(t[e]))
      return !0;
  return !1;
}
function S1(t) {
  const n = [], e = t.data, r = t;
  return r.data = la(e, n), r.attachments = n.length, { packet: r, buffers: n };
}
function la(t, n) {
  if (!t)
    return t;
  if (fc(t)) {
    const e = { _placeholder: !0, num: n.length };
    return n.push(t), e;
  } else if (Array.isArray(t)) {
    const e = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      e[r] = la(t[r], n);
    return e;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const e = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = la(t[r], n));
    return e;
  }
  return t;
}
function w1(t, n) {
  return t.data = ua(t.data, n), delete t.attachments, t;
}
function ua(t, n) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
      return n[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let e = 0; e < t.length; e++)
      t[e] = ua(t[e], n);
  else if (typeof t == "object")
    for (const e in t)
      Object.prototype.hasOwnProperty.call(t, e) && (t[e] = ua(t[e], n));
  return t;
}
const C1 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], E1 = 5;
var ve;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ve || (ve = {}));
class O1 {
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
    return (n.type === ve.EVENT || n.type === ve.ACK) && Lo(n) ? this.encodeAsBinary({
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
    let e = "" + n.type;
    return (n.type === ve.BINARY_EVENT || n.type === ve.BINARY_ACK) && (e += n.attachments + "-"), n.nsp && n.nsp !== "/" && (e += n.nsp + ","), n.id != null && (e += n.id), n.data != null && (e += JSON.stringify(n.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const e = S1(n), r = this.encodeAsString(e.packet), o = e.buffers;
    return o.unshift(r), o;
  }
}
function Cl(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class dc extends rt {
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
      const r = e.type === ve.BINARY_EVENT;
      r || e.type === ve.BINARY_ACK ? (e.type = r ? ve.EVENT : ve.ACK, this.reconstructor = new T1(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if (fc(n) || n.base64)
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
    if (ve[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) {
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
      if (dc.isPayloadValid(r.type, i))
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
      case ve.CONNECT:
        return Cl(e);
      case ve.DISCONNECT:
        return e === void 0;
      case ve.CONNECT_ERROR:
        return typeof e == "string" || Cl(e);
      case ve.EVENT:
      case ve.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && C1.indexOf(e[0]) === -1);
      case ve.ACK:
      case ve.BINARY_ACK:
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
class T1 {
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
      const e = w1(this.reconPack, this.buffers);
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
const R1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: dc,
  Encoder: O1,
  get PacketType() {
    return ve;
  },
  protocol: E1
}, Symbol.toStringTag, { value: "Module" }));
function Vt(t, n, e) {
  return t.on(n, e), function() {
    t.off(n, e);
  };
}
const A1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class sf extends rt {
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
      Vt(n, "open", this.onopen.bind(this)),
      Vt(n, "packet", this.onpacket.bind(this)),
      Vt(n, "error", this.onerror.bind(this)),
      Vt(n, "close", this.onclose.bind(this))
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
    if (A1.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (e.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const s = {
      type: ve.EVENT,
      data: e
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const u = this.ids++, d = e.pop();
      this._registerAckCallback(u, d), s.id = u;
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
function pr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
pr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), e = Math.floor(n * this.jitter * t);
    t = (Math.floor(n * 10) & 1) == 0 ? t - e : t + e;
  }
  return Math.min(t, this.max) | 0;
};
pr.prototype.reset = function() {
  this.attempts = 0;
};
pr.prototype.setMin = function(t) {
  this.ms = t;
};
pr.prototype.setMax = function(t) {
  this.max = t;
};
pr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class fa extends rt {
  constructor(n, e) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (e = n, n = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Hi(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new pr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = n;
    const o = e.parser || R1;
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
    this.engine = new m1(this.uri, this.opts);
    const e = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Vt(e, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = Vt(e, "error", i);
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
      Vt(n, "ping", this.onping.bind(this)),
      Vt(n, "data", this.ondata.bind(this)),
      Vt(n, "error", this.onerror.bind(this)),
      Vt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      Vt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Bi(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new sf(this, n, e), this.nsps[n] = r), r;
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
const Er = {};
function Mo(t, n) {
  typeof t == "object" && (n = t, t = void 0), n = n || {};
  const e = g1(t, n.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = Er[o] && i in Er[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new fa(r, n) : (Er[o] || (Er[o] = new fa(r, n)), c = Er[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
}
Object.assign(Mo, {
  Manager: fa,
  Socket: sf,
  io: Mo,
  connect: Mo
});
function Et() {
  return Et = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Et.apply(null, arguments);
}
function Ce(t) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ce(t);
}
var $1 = Symbol.for("react.element"), I1 = Symbol.for("react.transitional.element"), P1 = Symbol.for("react.fragment");
function k1(t) {
  return (
    // Base object type
    t && Ce(t) === "object" && // React Element type
    (t.$$typeof === $1 || t.$$typeof === I1) && // React Fragment type
    t.type === P1
  );
}
var da = {}, hc = [], N1 = function(n) {
  hc.push(n);
};
function xc(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = hc.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    e && console.error("Warning: ".concat(e));
  }
}
function j1(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = hc.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    e && console.warn("Note: ".concat(e));
  }
}
function af() {
  da = {};
}
function cf(t, n, e) {
  !n && !da[e] && (t(!1, e), da[e] = !0);
}
function Tn(t, n) {
  cf(xc, t, n);
}
function L1(t, n) {
  cf(j1, t, n);
}
Tn.preMessage = N1;
Tn.resetWarned = af;
Tn.noteOnce = L1;
function M1(t, n) {
  if (Ce(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (Ce(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function lf(t) {
  var n = M1(t, "string");
  return Ce(n) == "symbol" ? n : n + "";
}
function Z(t, n, e) {
  return (n = lf(n)) in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function El(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function ee(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? El(Object(e), !0).forEach(function(r) {
      Z(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : El(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
function Ol(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function D1(t) {
  return t && Ce(t) === "object" && Ol(t.nativeElement) ? t.nativeElement : Ol(t) ? t : null;
}
function B1(t) {
  var n = D1(t);
  if (n)
    return n;
  if (t instanceof Y.Component) {
    var e;
    return (e = Dc.findDOMNode) === null || e === void 0 ? void 0 : e.call(Dc, t);
  }
  return null;
}
function pc(t, n, e) {
  var r = O.useRef({});
  return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
}
var H1 = Number(Nh.split(".")[0]), uf = function(n, e) {
  typeof n == "function" ? n(e) : Ce(n) === "object" && n && "current" in n && (n.current = e);
}, zi = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    e.forEach(function(s) {
      uf(s, i);
    });
  };
}, z1 = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  return pc(function() {
    return zi.apply(void 0, e);
  }, e, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, ff = function(n) {
  var e, r;
  if (!n)
    return !1;
  if (df(n) && H1 >= 19)
    return !0;
  var o = vs.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== vs.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== vs.ForwardRef);
};
function df(t) {
  return /* @__PURE__ */ kh(t) && !k1(t);
}
var hf = function(n) {
  if (n && df(n)) {
    var e = n;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function $t(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Tl(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, lf(r.key), r);
  }
}
function It(t, n, e) {
  return n && Tl(t.prototype, n), e && Tl(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function ha(t, n) {
  return ha = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, ha(t, n);
}
function mr(t, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), n && ha(t, n);
}
function or(t) {
  return or = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, or(t);
}
function mc() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mc = function() {
    return !!t;
  })();
}
function Dn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function xf(t, n) {
  if (n && (Ce(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Dn(t);
}
function Jr(t) {
  var n = mc();
  return function() {
    var e, r = or(t);
    if (n) {
      var o = or(this).constructor;
      e = Reflect.construct(r, arguments, o);
    } else e = r.apply(this, arguments);
    return xf(this, e);
  };
}
function xa(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function F1(t) {
  if (Array.isArray(t)) return xa(t);
}
function pf(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function gc(t, n) {
  if (t) {
    if (typeof t == "string") return xa(t, n);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? xa(t, n) : void 0;
  }
}
function V1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function on(t) {
  return F1(t) || pf(t) || gc(t) || V1();
}
var mf = function(n) {
  return +setTimeout(n, 16);
}, gf = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (mf = function(n) {
  return window.requestAnimationFrame(n);
}, gf = function(n) {
  return window.cancelAnimationFrame(n);
});
var Rl = 0, Fi = /* @__PURE__ */ new Map();
function vf(t) {
  Fi.delete(t);
}
var Cn = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Rl += 1;
  var r = Rl;
  function o(i) {
    if (i === 0)
      vf(r), n();
    else {
      var s = mf(function() {
        o(i - 1);
      });
      Fi.set(r, s);
    }
  }
  return o(e), r;
};
Cn.cancel = function(t) {
  var n = Fi.get(t);
  return vf(t), gf(n);
};
process.env.NODE_ENV !== "production" && (Cn.ids = function() {
  return Fi;
});
function bf(t) {
  if (Array.isArray(t)) return t;
}
function U1(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (u) {
      l = !0, o = u;
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
function yf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(t, n) {
  return bf(t) || U1(t, n) || gc(t, n) || yf();
}
function zr(t) {
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
function hn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function q1(t, n) {
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
var Al = "data-rc-order", $l = "data-rc-priority", W1 = "rc-util-key", pa = /* @__PURE__ */ new Map();
function _f() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : W1;
}
function Vi(t) {
  if (t.attachTo)
    return t.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function G1(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function vc(t) {
  return Array.from((pa.get(t) || t).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Sf(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!hn())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = G1(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Al, s), a && i && c.setAttribute($l, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var l = Vi(n), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || vc(l)).filter(function(x) {
        if (!["prepend", "prependQueue"].includes(x.getAttribute(Al)))
          return !1;
        var g = Number(x.getAttribute($l) || 0);
        return i >= g;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function wf(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Vi(n);
  return (n.styles || vc(e)).find(function(r) {
    return r.getAttribute(_f(n)) === t;
  });
}
function Cf(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = wf(t, n);
  if (e) {
    var r = Vi(n);
    r.removeChild(e);
  }
}
function X1(t, n) {
  var e = pa.get(t);
  if (!e || !q1(document, e)) {
    var r = Sf("", n), o = r.parentNode;
    pa.set(t, o), t.removeChild(r);
  }
}
function Bn(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Vi(e), o = vc(r), i = ee(ee({}, e), {}, {
    styles: o
  });
  X1(r, i);
  var s = wf(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== t && (s.innerHTML = t), s;
  }
  var u = Sf(t, i);
  return u.setAttribute(_f(i), n), u;
}
function Y1(t, n) {
  if (t == null) return {};
  var e = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (n.indexOf(r) !== -1) continue;
    e[r] = t[r];
  }
  return e;
}
function Vn(t, n) {
  if (t == null) return {};
  var e, r, o = Y1(t, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++) e = i[r], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
  }
  return o;
}
function K1(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (Tn(!c, "Warning: There may be circular references"), c)
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
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], s[u], l))
          return !1;
      return !0;
    }
    if (i && s && Ce(i) === "object" && Ce(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(x) {
        return o(i[x], s[x], l);
      });
    }
    return !1;
  }
  return o(t, n);
}
var J1 = "%";
function ma(t) {
  return t.join(J1);
}
var Q1 = /* @__PURE__ */ function() {
  function t(n) {
    $t(this, t), Z(this, "instanceId", void 0), Z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return It(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(ma(e));
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
      return this.opUpdate(ma(e), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, r) {
      var o = this.cache.get(e), i = r(o);
      i === null ? this.cache.delete(e) : this.cache.set(e, i);
    }
  }]), t;
}(), ir = "data-token-hash", Gt = "data-css-hash", Z1 = "data-cache-path", yn = "__cssinjs_instance__";
function em() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(Gt, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[yn] = o[yn] || t, o[yn] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Gt, "]"))).forEach(function(o) {
      var i = o.getAttribute(Gt);
      if (r[i]) {
        if (o[yn] === t) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Q1(t);
}
var Qr = /* @__PURE__ */ O.createContext({
  hashPriority: "low",
  cache: em(),
  defaultCache: !0
});
function tm(t, n) {
  if (t.length !== n.length)
    return !1;
  for (var e = 0; e < t.length; e++)
    if (t[e] !== n[e])
      return !1;
  return !0;
}
var bc = /* @__PURE__ */ function() {
  function t() {
    $t(this, t), Z(this, "cache", void 0), Z(this, "keys", void 0), Z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return It(t, [{
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
          var i = this.keys.reduce(function(l, u) {
            var d = le(l, 2), x = d[1];
            return o.internalGet(u)[1] < x ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = le(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(l, u) {
        if (u === e.length - 1)
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
          return !tm(r, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), t;
}();
Z(bc, "MAX_CACHE_SIZE", 20);
Z(bc, "MAX_CACHE_OFFSET", 5);
var Il = 0, Ef = /* @__PURE__ */ function() {
  function t(n) {
    $t(this, t), Z(this, "derivatives", void 0), Z(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Il, n.length === 0 && xc(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Il += 1;
  }
  return It(t, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(r, o) {
        return o(e, r);
      }, void 0);
    }
  }]), t;
}(), Ss = new bc();
function ga(t) {
  var n = Array.isArray(t) ? t : [t];
  return Ss.has(n) || Ss.set(n, new Ef(n)), Ss.get(n);
}
var nm = /* @__PURE__ */ new WeakMap(), Cs = {};
function rm(t, n) {
  for (var e = nm, r = 0; r < n.length; r += 1) {
    var o = n[r];
    e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
  }
  return e.has(Cs) || e.set(Cs, t()), e.get(Cs);
}
var Pl = /* @__PURE__ */ new WeakMap();
function Mr(t) {
  var n = Pl.get(t) || "";
  return n || (Object.keys(t).forEach(function(e) {
    var r = t[e];
    n += e, r instanceof Ef ? n += r.id : r && Ce(r) === "object" ? n += Mr(r) : n += r;
  }), n = zr(n), Pl.set(t, n)), n;
}
function kl(t, n) {
  return zr("".concat(n, "_").concat(Mr(t)));
}
var va = hn();
function fn(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function ti(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = ee(ee({}, o), {}, (r = {}, Z(r, ir, n), Z(r, Gt, e), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var Do = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, om = function(n, e, r) {
  return Object.keys(n).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = le(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Of = function(n, e, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = le(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var x, g = Do(u, r == null ? void 0 : r.prefix);
      o[g] = typeof d == "number" && !(r != null && (x = r.unitless) !== null && x !== void 0 && x[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(g, ")");
    }
  }), [i, om(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, Nl = process.env.NODE_ENV !== "test" && hn() ? O.useLayoutEffect : O.useEffect, yc = function(n, e) {
  var r = O.useRef(!0);
  Nl(function() {
    return n(r.current);
  }, e), Nl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, jl = function(n, e) {
  yc(function(r) {
    if (!r)
      return n();
  }, e);
}, im = ee({}, O), Ll = im.useInsertionEffect, sm = function(n, e, r) {
  O.useMemo(n, r), yc(function() {
    return e(!0);
  }, r);
}, am = Ll ? function(t, n, e) {
  return Ll(function() {
    return t(), n();
  }, e);
} : sm, cm = ee({}, O), lm = cm.useInsertionEffect, um = function(n) {
  var e = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && xc(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(i);
  }
  return O.useEffect(function() {
    return r = !1, function() {
      r = !0, e.length && e.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, fm = function() {
  return function(n) {
    n();
  };
}, dm = typeof lm < "u" ? um : fm;
function hm() {
  return !1;
}
var ba = !1;
function xm() {
  return ba;
}
const pm = process.env.NODE_ENV === "production" ? hm : xm;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (vo && typeof vo.webpackHotUpdate == "function") {
    var mm = vo.webpackHotUpdate;
    vo.webpackHotUpdate = function() {
      return ba = !0, setTimeout(function() {
        ba = !1;
      }, 0), mm.apply(void 0, arguments);
    };
  }
}
function _c(t, n, e, r, o) {
  var i = O.useContext(Qr), s = i.cache, a = [t].concat(on(n)), c = ma(a), l = dm([c]), u = pm(), d = function(m) {
    s.opUpdate(c, function(p) {
      var b = p || [void 0, void 0], w = le(b, 2), E = w[0], T = E === void 0 ? 0 : E, h = w[1], $ = h;
      process.env.NODE_ENV !== "production" && h && u && (r == null || r($, u), $ = null);
      var C = $ || e(), L = [T, C];
      return m ? m(L) : L;
    });
  };
  O.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var x = s.opGet(c);
  process.env.NODE_ENV !== "production" && !x && (d(), x = s.opGet(c));
  var g = x[1];
  return am(function() {
    o == null || o(g);
  }, function(f) {
    return d(function(m) {
      var p = le(m, 2), b = p[0], w = p[1];
      return f && b === 0 && (o == null || o(g)), [b + 1, w];
    }), function() {
      s.opUpdate(c, function(m) {
        var p = m || [], b = le(p, 2), w = b[0], E = w === void 0 ? 0 : w, T = b[1], h = E - 1;
        return h === 0 ? (l(function() {
          (f || !s.opGet(c)) && (r == null || r(T, !1));
        }), null) : [E - 1, T];
      });
    };
  }, [c]), g;
}
var gm = {}, vm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", kn = /* @__PURE__ */ new Map();
function bm(t) {
  kn.set(t, (kn.get(t) || 0) + 1);
}
function ym(t, n) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(ir, '="').concat(t, '"]'));
    e.forEach(function(r) {
      if (r[yn] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var _m = 0;
function Sm(t, n) {
  kn.set(t, (kn.get(t) || 0) - 1);
  var e = Array.from(kn.keys()), r = e.filter(function(o) {
    var i = kn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > _m && r.forEach(function(o) {
    ym(o, n), kn.delete(o);
  });
}
var wm = function(n, e, r, o) {
  var i = r.getDerivativeToken(n), s = ee(ee({}, i), e);
  return o && (s = o(s)), s;
}, Tf = "token";
function Cm(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Dt(Qr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, l = c === void 0 ? gm : c, u = e.formatToken, d = e.getComputedToken, x = e.cssVar, g = rm(function() {
    return Object.assign.apply(Object, [{}].concat(on(n)));
  }, n), f = Mr(g), m = Mr(l), p = x ? Mr(x) : "", b = _c(Tf, [a, t.id, f, m, p], function() {
    var w, E = d ? d(g, l, t) : wm(g, l, t, u), T = ee({}, E), h = "";
    if (x) {
      var $ = Of(E, x.key, {
        prefix: x.prefix,
        ignore: x.ignore,
        unitless: x.unitless,
        preserve: x.preserve
      }), C = le($, 2);
      E = C[0], h = C[1];
    }
    var L = kl(E, a);
    E._tokenKey = L, T._tokenKey = kl(T, a);
    var D = (w = x == null ? void 0 : x.key) !== null && w !== void 0 ? w : L;
    E._themeKey = D, bm(D);
    var W = "".concat(vm, "-").concat(zr(L));
    return E._hashId = W, [E, W, T, h, (x == null ? void 0 : x.key) || ""];
  }, function(w) {
    Sm(w[0]._themeKey, o);
  }, function(w) {
    var E = le(w, 4), T = E[0], h = E[3];
    if (x && h) {
      var $ = Bn(h, zr("css-variables-".concat(T._themeKey)), {
        mark: Gt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      $[yn] = o, $.setAttribute(ir, T._themeKey);
    }
  });
  return b;
}
var Em = function(n, e, r) {
  var o = le(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, x = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = ti(s, a, u, x, l);
  return [d, u, g];
}, Om = {
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
}, Rf = "comm", Af = "rule", $f = "decl", Tm = "@import", Rm = "@namespace", Am = "@keyframes", $m = "@layer", If = Math.abs, Sc = String.fromCharCode;
function Pf(t) {
  return t.trim();
}
function Bo(t, n, e) {
  return t.replace(n, e);
}
function Im(t, n, e) {
  return t.indexOf(n, e);
}
function Kn(t, n) {
  return t.charCodeAt(n) | 0;
}
function sr(t, n, e) {
  return t.slice(n, e);
}
function en(t) {
  return t.length;
}
function Pm(t) {
  return t.length;
}
function bo(t, n) {
  return n.push(t), t;
}
var Ui = 1, ar = 1, kf = 0, Ht = 0, nt = 0, gr = "";
function wc(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ui, column: ar, length: s, return: "", siblings: a };
}
function km() {
  return nt;
}
function Nm() {
  return nt = Ht > 0 ? Kn(gr, --Ht) : 0, ar--, nt === 10 && (ar = 1, Ui--), nt;
}
function Xt() {
  return nt = Ht < kf ? Kn(gr, Ht++) : 0, ar++, nt === 10 && (ar = 1, Ui++), nt;
}
function _n() {
  return Kn(gr, Ht);
}
function Ho() {
  return Ht;
}
function qi(t, n) {
  return sr(gr, t, n);
}
function Fr(t) {
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
function jm(t) {
  return Ui = ar = 1, kf = en(gr = t), Ht = 0, [];
}
function Lm(t) {
  return gr = "", t;
}
function Es(t) {
  return Pf(qi(Ht - 1, ya(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Mm(t) {
  for (; (nt = _n()) && nt < 33; )
    Xt();
  return Fr(t) > 2 || Fr(nt) > 3 ? "" : " ";
}
function Dm(t, n) {
  for (; --n && Xt() && !(nt < 48 || nt > 102 || nt > 57 && nt < 65 || nt > 70 && nt < 97); )
    ;
  return qi(t, Ho() + (n < 6 && _n() == 32 && Xt() == 32));
}
function ya(t) {
  for (; Xt(); )
    switch (nt) {
      // ] ) " '
      case t:
        return Ht;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ya(nt);
        break;
      // (
      case 40:
        t === 41 && ya(t);
        break;
      // \
      case 92:
        Xt();
        break;
    }
  return Ht;
}
function Bm(t, n) {
  for (; Xt() && t + nt !== 57; )
    if (t + nt === 84 && _n() === 47)
      break;
  return "/*" + qi(n, Ht - 1) + "*" + Sc(t === 47 ? t : Xt());
}
function Hm(t) {
  for (; !Fr(_n()); )
    Xt();
  return qi(t, Ht);
}
function zm(t) {
  return Lm(zo("", null, null, null, [""], t = jm(t), 0, [0], t));
}
function zo(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, x = 0, g = 0, f = 0, m = 1, p = 1, b = 1, w = 0, E = "", T = o, h = i, $ = r, C = E; p; )
    switch (f = w, w = Xt()) {
      // (
      case 40:
        if (f != 108 && Kn(C, d - 1) == 58) {
          Im(C += Bo(Es(w), "&", "&\f"), "&\f", If(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Es(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Mm(f);
        break;
      // \
      case 92:
        C += Dm(Ho() - 1, 7);
        continue;
      // /
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            bo(Fm(Bm(Xt(), Ho()), n, e, c), c), (Fr(f || 1) == 5 || Fr(_n() || 1) == 5) && en(C) && sr(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = en(C) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (C = Bo(C, /\f/g, "")), g > 0 && (en(C) - d || m === 0 && f === 47) && bo(g > 32 ? Dl(C + ";", r, e, d - 1, c) : Dl(Bo(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (bo($ = Ml(C, n, e, l, u, o, a, E, T = [], h = [], d, i), i), w === 123)
              if (u === 0)
                zo(C, n, $, $, T, i, d, a, h);
              else {
                switch (x) {
                  // c(ontainer)
                  case 99:
                    if (Kn(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Kn(C, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? zo(t, $, $, r && bo(Ml(t, $, $, 0, 0, o, a, E, o, T = [], d, h), h), o, h, d, a, r ? T : h) : zo(C, $, $, $, [""], h, 0, a, h);
              }
        }
        l = u = g = 0, m = b = 1, E = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + en(C), g = f;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && Nm() == 125)
            continue;
        }
        switch (C += Sc(w), w * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (en(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            _n() === 45 && (C += Es(Xt())), x = _n(), u = d = en(E = C += Hm(Ho())), w++;
            break;
          // -
          case 45:
            f === 45 && en(C) == 2 && (m = 0);
        }
    }
  return i;
}
function Ml(t, n, e, r, o, i, s, a, c, l, u, d) {
  for (var x = o - 1, g = o === 0 ? i : [""], f = Pm(g), m = 0, p = 0, b = 0; m < r; ++m)
    for (var w = 0, E = sr(t, x + 1, x = If(p = s[m])), T = t; w < f; ++w)
      (T = Pf(p > 0 ? g[w] + " " + E : Bo(E, /&\f/g, g[w]))) && (c[b++] = T);
  return wc(t, n, e, o === 0 ? Af : a, c, l, u, d);
}
function Fm(t, n, e, r) {
  return wc(t, n, e, Rf, Sc(km()), sr(t, 2, -2), 0, r);
}
function Dl(t, n, e, r, o) {
  return wc(t, n, e, $f, sr(t, 0, r), sr(t, r + 1, -1), r, o);
}
function _a(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function Vm(t, n, e, r) {
  switch (t.type) {
    case $m:
      if (t.children.length) break;
    case Tm:
    case Rm:
    case $f:
      return t.return = t.return || t.value;
    case Rf:
      return "";
    case Am:
      return t.return = t.value + "{" + _a(t.children, r) + "}";
    case Af:
      if (!en(t.value = t.props.join(","))) return "";
  }
  return en(e = _a(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function Nf(t, n) {
  var e = n.path, r = n.parentSelectors;
  Tn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Um = function(n, e, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && Nf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, qm = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && Nf("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Bl = "data-ant-cssinjs-cache-path", jf = "_FILE_STYLE__", Hn, Lf = !0;
function Wm() {
  if (!Hn && (Hn = {}, hn())) {
    var t = document.createElement("div");
    t.className = Bl, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = le(i, 2), a = s[0], c = s[1];
      Hn[a] = c;
    });
    var e = document.querySelector("style[".concat(Bl, "]"));
    if (e) {
      var r;
      Lf = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
    }
    document.body.removeChild(t);
  }
}
function Gm(t) {
  return Wm(), !!Hn[t];
}
function Xm(t) {
  var n = Hn[t], e = null;
  if (n && hn())
    if (Lf)
      e = jf;
    else {
      var r = document.querySelector("style[".concat(Gt, '="').concat(Hn[t], '"]'));
      r ? e = r.innerHTML : delete Hn[t];
    }
  return [e, n];
}
var Mf = "_skip_check_", Df = "_multi_value_";
function Fo(t) {
  var n = _a(zm(t), Vm);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Ym(t) {
  return Ce(t) === "object" && t && (Mf in t || Df in t);
}
function Hl(t, n, e) {
  if (!n)
    return t;
  var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(on(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Km = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, u = e.hashPriority, d = e.transformers, x = d === void 0 ? [] : d, g = e.linters, f = g === void 0 ? [] : g, m = "", p = {};
  function b(T) {
    var h = T.getName(a);
    if (!p[h]) {
      var $ = t(T.style, e, {
        root: !1,
        parentSelectors: s
      }), C = le($, 1), L = C[0];
      p[h] = "@keyframes ".concat(T.getName(a)).concat(L);
    }
  }
  function w(T) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return T.forEach(function($) {
      Array.isArray($) ? w($, h) : $ && h.push($);
    }), h;
  }
  var E = w(Array.isArray(n) ? n : [n]);
  return E.forEach(function(T) {
    var h = typeof T == "string" && !o ? {} : T;
    if (typeof h == "string")
      m += "".concat(h, `
`);
    else if (h._keyframe)
      b(h);
    else {
      var $ = x.reduce(function(C, L) {
        var D;
        return (L == null || (D = L.visit) === null || D === void 0 ? void 0 : D.call(L, C)) || C;
      }, h);
      Object.keys($).forEach(function(C) {
        var L = $[C];
        if (Ce(L) === "object" && L && (C !== "animationName" || !L._keyframe) && !Ym(L)) {
          var D = !1, W = C.trim(), re = !1;
          (o || i) && a ? W.startsWith("@") ? D = !0 : W === "&" ? W = Hl("", a, u) : W = Hl(C, a, u) : o && !a && (W === "&" || W === "") && (W = "", re = !0);
          var J = t(L, e, {
            root: re,
            injectHash: D,
            parentSelectors: [].concat(on(s), [W])
          }), F = le(J, 2), U = F[0], Q = F[1];
          p = ee(ee({}, p), Q), m += "".concat(W).concat(U);
        } else {
          let P = function(M, V) {
            process.env.NODE_ENV !== "production" && (Ce(L) !== "object" || !(L != null && L[Mf])) && [Um, qm].concat(on(f)).forEach(function(te) {
              return te(M, V, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var z = M.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), q = V;
            !Om[M] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), M === "animationName" && V !== null && V !== void 0 && V._keyframe && (b(V), q = V.getName(a)), m += "".concat(z, ":").concat(q, ";");
          };
          var j, k = (j = L == null ? void 0 : L.value) !== null && j !== void 0 ? j : L;
          Ce(L) === "object" && L !== null && L !== void 0 && L[Df] && Array.isArray(k) ? k.forEach(function(M) {
            P(C, M);
          }) : P(C, k);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(T) {
    return "@layer ".concat(T, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function Bf(t, n) {
  return zr("".concat(t.join("%")).concat(n));
}
function Jm() {
  return null;
}
var Hf = "style";
function Sa(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, l = c === void 0 ? 0 : c, u = O.useContext(Qr), d = u.autoClear, x = u.mock, g = u.defaultCache, f = u.hashPriority, m = u.container, p = u.ssrInline, b = u.transformers, w = u.linters, E = u.cache, T = u.layer, h = e._tokenKey, $ = [h];
  T && $.push("layer"), $.push.apply($, on(r));
  var C = va;
  process.env.NODE_ENV !== "production" && x !== void 0 && (C = x === "client");
  var L = _c(
    Hf,
    $,
    // Create cache if needed
    function() {
      var F = $.join("|");
      if (Gm(F)) {
        var U = Xm(F), Q = le(U, 2), j = Q[0], k = Q[1];
        if (j)
          return [j, h, k, {}, a, l];
      }
      var P = n(), M = Km(P, {
        hashId: o,
        hashPriority: f,
        layer: T ? i : void 0,
        path: r.join("-"),
        transformers: b,
        linters: w
      }), V = le(M, 2), z = V[0], q = V[1], te = Fo(z), K = Bf($, te);
      return [te, h, K, q, a, l];
    },
    // Remove cache if no need
    function(F, U) {
      var Q = le(F, 3), j = Q[2];
      (U || d) && va && Cf(j, {
        mark: Gt
      });
    },
    // Effect: Inject style here
    function(F) {
      var U = le(F, 4), Q = U[0];
      U[1];
      var j = U[2], k = U[3];
      if (C && Q !== jf) {
        var P = {
          mark: Gt,
          prepend: T ? !1 : "queue",
          attachTo: m,
          priority: l
        }, M = typeof s == "function" ? s() : s;
        M && (P.csp = {
          nonce: M
        });
        var V = [], z = [];
        Object.keys(k).forEach(function(te) {
          te.startsWith("@layer") ? V.push(te) : z.push(te);
        }), V.forEach(function(te) {
          Bn(Fo(k[te]), "_layer-".concat(te), ee(ee({}, P), {}, {
            prepend: !0
          }));
        });
        var q = Bn(Q, j, P);
        q[yn] = E.instanceId, q.setAttribute(ir, h), process.env.NODE_ENV !== "production" && q.setAttribute(Z1, $.join("|")), z.forEach(function(te) {
          Bn(Fo(k[te]), "_effect-".concat(te), P);
        });
      }
    }
  ), D = le(L, 3), W = D[0], re = D[1], J = D[2];
  return function(F) {
    var U;
    if (!p || C || !g)
      U = /* @__PURE__ */ O.createElement(Jm, null);
    else {
      var Q;
      U = /* @__PURE__ */ O.createElement("style", Et({}, (Q = {}, Z(Q, ir, re), Z(Q, Gt, J), Q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ O.createElement(O.Fragment, null, U, F);
  };
}
var Qm = function(n, e, r) {
  var o = le(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, x = d.plain;
  if (l)
    return null;
  var g = i, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = ti(i, s, a, f, x), c && Object.keys(c).forEach(function(m) {
    if (!e[m]) {
      e[m] = !0;
      var p = Fo(c[m]), b = ti(p, s, "_effect-".concat(m), f, x);
      m.startsWith("@layer") ? g = b + g : g += b;
    }
  }), [u, a, g];
}, zf = "cssVar", Zm = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = Dt(Qr), d = u.cache.instanceId, x = u.container, g = a._tokenKey, f = [].concat(on(n.path), [r, l, g]), m = _c(zf, f, function() {
    var p = e(), b = Of(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), w = le(b, 2), E = w[0], T = w[1], h = Bf(f, T);
    return [E, T, h, r];
  }, function(p) {
    var b = le(p, 3), w = b[2];
    va && Cf(w, {
      mark: Gt
    });
  }, function(p) {
    var b = le(p, 3), w = b[1], E = b[2];
    if (w) {
      var T = Bn(w, E, {
        mark: Gt,
        prepend: "queue",
        attachTo: x,
        priority: -999
      });
      T[yn] = d, T.setAttribute(ir, r);
    }
  });
  return m;
}, eg = function(n, e, r) {
  var o = le(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, x = ti(i, a, s, d, l);
  return [u, s, x];
}, Or;
Or = {}, Z(Or, Hf, Qm), Z(Or, Tf, Em), Z(Or, zf, eg);
var Ff = /* @__PURE__ */ function() {
  function t(n, e) {
    $t(this, t), Z(this, "name", void 0), Z(this, "style", void 0), Z(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return It(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function Gn(t) {
  return t.notSplit = !0, t;
}
Gn(["borderTop", "borderBottom"]), Gn(["borderTop"]), Gn(["borderBottom"]), Gn(["borderLeft", "borderRight"]), Gn(["borderLeft"]), Gn(["borderRight"]);
var Cc = /* @__PURE__ */ Ai({});
function tg(t) {
  return bf(t) || pf(t) || gc(t) || yf();
}
function wa(t, n) {
  for (var e = t, r = 0; r < n.length; r += 1) {
    if (e == null)
      return;
    e = e[n[r]];
  }
  return e;
}
function Vf(t, n, e, r) {
  if (!n.length)
    return e;
  var o = tg(n), i = o[0], s = o.slice(1), a;
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = on(t) : a = ee({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Vf(a[i], s, e, r), a;
}
function Os(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && e === void 0 && !wa(t, n.slice(0, -1)) ? t : Vf(t, n, e, r);
}
function ng(t) {
  return Ce(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function zl(t) {
  return Array.isArray(t) ? [] : {};
}
var rg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function og() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  var r = zl(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = wa(o, s), u = Array.isArray(l);
      if (u || ng(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = wa(r, s);
          u ? r = Os(r, s, []) : (!d || Ce(d) !== "object") && (r = Os(r, s, zl(l))), rg(l).forEach(function(x) {
            i([].concat(on(s), [x]), c);
          });
        }
      } else
        r = Os(r, s, l);
    }
    i([]);
  }), r;
}
function Uf() {
}
let cn = null;
function ig() {
  cn = null, af();
}
let Ec = Uf;
process.env.NODE_ENV !== "production" && (Ec = (t, n, e) => {
  Tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && ig();
});
const qf = /* @__PURE__ */ O.createContext({}), Rn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = O.useContext(qf), e = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = cn;
        cn || (cn = {}), cn[t] = cn[t] || [], cn[t].includes(i || "") || cn[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", cn);
      } else
        process.env.NODE_ENV !== "production" && Ec(r, t, i);
  };
  return e.deprecated = (r, o, i, s) => {
    e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, e;
} : () => {
  const t = () => {
  };
  return t.deprecated = Uf, t;
}, Zr = Ec, sg = /* @__PURE__ */ Ai(void 0), Rt = "${label} is not a valid ${type}", Wi = {
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
        string: Rt,
        method: Rt,
        array: Rt,
        object: Rt,
        number: Rt,
        date: Rt,
        boolean: Rt,
        integer: Rt,
        float: Rt,
        regexp: Rt,
        email: Rt,
        url: Rt,
        hex: Rt
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
Object.assign({}, Wi.Modal);
let Vo = [];
const Fl = () => Vo.reduce((t, n) => Object.assign(Object.assign({}, t), n), Wi.Modal);
function ag(t) {
  if (t) {
    const n = Object.assign({}, t);
    return Vo.push(n), Fl(), () => {
      Vo = Vo.filter((e) => e !== n), Fl();
    };
  }
  Object.assign({}, Wi.Modal);
}
const Wf = /* @__PURE__ */ Ai(void 0), Gf = "internalMark", Xf = (t) => {
  const {
    locale: n = {},
    children: e,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = Rn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Gf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  O.useEffect(() => ag(n == null ? void 0 : n.Modal), [n]);
  const o = O.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ O.createElement(Wf.Provider, {
    value: o
  }, e);
};
process.env.NODE_ENV !== "production" && (Xf.displayName = "LocaleProvider");
const Yf = {
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
}, Vr = Object.assign(Object.assign({}, Yf), {
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
}), lt = Math.round;
function Ts(t, n) {
  const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Vl = (t, n, e) => e === 0 ? t : t / 100;
function Tr(t, n) {
  const e = n || 255;
  return t > e ? e : t < 0 ? 0 : t;
}
let it = class Kf {
  constructor(n) {
    Z(this, "isValid", !0), Z(this, "r", 0), Z(this, "g", 0), Z(this, "b", 0), Z(this, "a", 1), Z(this, "_h", void 0), Z(this, "_s", void 0), Z(this, "_l", void 0), Z(this, "_v", void 0), Z(this, "_max", void 0), Z(this, "_min", void 0), Z(this, "_brightness", void 0);
    function e(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Kf)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (e("rgb"))
      this.r = Tr(n.r), this.g = Tr(n.g), this.b = Tr(n.b), this.a = typeof n.a == "number" ? Tr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = lt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: lt(i("r")),
      g: lt(i("g")),
      b: lt(i("b")),
      a: lt(i("a") * 100) / 100
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => lt((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = lt(this.a * 255).toString(16);
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
    const n = this.getHue(), e = lt(this.getSaturation() * 100), r = lt(this.getLightness() * 100);
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
    return o[n] = Tr(e, r), o;
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
      const x = lt(r * 255);
      this.r = x, this.g = x, this.b = x;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = lt((i + d) * 255), this.g = lt((s + d) * 255), this.b = lt((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = lt(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = lt(r * (1 - e) * 255), u = lt(r * (1 - e * c) * 255), d = lt(r * (1 - e * (1 - c)) * 255);
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
    const e = Ts(n, Vl);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = Ts(n, Vl);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = Ts(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? lt(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
};
var yo = 2, Ul = 0.16, cg = 0.05, lg = 0.05, ug = 0.15, Jf = 5, Qf = 4, fg = [{
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
function ql(t, n, e) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - yo * n : Math.round(t.h) + yo * n : r = e ? Math.round(t.h) + yo * n : Math.round(t.h) - yo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Wl(t, n, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return e ? r = t.s - Ul * n : n === Qf ? r = t.s + Ul : r = t.s + cg * n, r > 1 && (r = 1), e && n === Jf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Gl(t, n, e) {
  var r;
  return e ? r = t.v + lg * n : r = t.v - ug * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Ur(t) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new it(t), o = r.toHsv(), i = Jf; i > 0; i -= 1) {
    var s = new it({
      h: ql(o, i, !0),
      s: Wl(o, i, !0),
      v: Gl(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (var a = 1; a <= Qf; a += 1) {
    var c = new it({
      h: ql(o, a),
      s: Wl(o, a),
      v: Gl(o, a)
    });
    e.push(c);
  }
  return n.theme === "dark" ? fg.map(function(l) {
    var u = l.index, d = l.amount;
    return new it(n.backgroundColor || "#141414").mix(e[u], d).toHexString();
  }) : e.map(function(l) {
    return l.toHexString();
  });
}
var Rs = {
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
}, Ca = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ca.primary = Ca[5];
var Ea = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ea.primary = Ea[5];
var Oa = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Oa.primary = Oa[5];
var Ta = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ta.primary = Ta[5];
var Ra = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Ra.primary = Ra[5];
var Aa = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Aa.primary = Aa[5];
var $a = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
$a.primary = $a[5];
var Ia = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ia.primary = Ia[5];
var ni = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ni.primary = ni[5];
var Pa = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Pa.primary = Pa[5];
var ka = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ka.primary = ka[5];
var Na = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Na.primary = Na[5];
var ja = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ja.primary = ja[5];
var As = {
  red: Ca,
  volcano: Ea,
  orange: Oa,
  gold: Ta,
  yellow: Ra,
  lime: Aa,
  green: $a,
  cyan: Ia,
  blue: ni,
  geekblue: Pa,
  purple: ka,
  magenta: Na,
  grey: ja
};
function dg(t, n) {
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
    colorTextBase: u
  } = t, d = e(c), x = e(o), g = e(i), f = e(s), m = e(a), p = r(l, u), b = t.colorLink || t.colorInfo, w = e(b), E = new it(f[1]).mix(new it(f[3]), 50).toHexString();
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
    colorSuccessBg: x[1],
    colorSuccessBgHover: x[2],
    colorSuccessBorder: x[3],
    colorSuccessBorderHover: x[4],
    colorSuccessHover: x[4],
    colorSuccess: x[6],
    colorSuccessActive: x[7],
    colorSuccessTextHover: x[8],
    colorSuccessText: x[9],
    colorSuccessTextActive: x[10],
    colorErrorBg: f[1],
    colorErrorBgHover: f[2],
    colorErrorBgFilledHover: E,
    colorErrorBgActive: f[3],
    colorErrorBorder: f[3],
    colorErrorBorderHover: f[4],
    colorErrorHover: f[5],
    colorError: f[6],
    colorErrorActive: f[7],
    colorErrorTextHover: f[8],
    colorErrorText: f[9],
    colorErrorTextActive: f[10],
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
    colorLinkHover: w[4],
    colorLink: w[6],
    colorLinkActive: w[7],
    colorBgMask: new it("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const hg = (t) => {
  let n = t, e = t, r = t, o = t;
  return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function xg(t) {
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
  }, hg(r));
}
const pg = (t) => {
  const {
    controlHeight: n
  } = t;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function Uo(t) {
  return (t + 8) / t;
}
function mg(t) {
  const n = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = t, n.map((e) => ({
    size: e,
    lineHeight: Uo(e)
  }));
}
const gg = (t) => {
  const n = mg(t), e = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], l = r[2];
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
function vg(t) {
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
const Nt = (t, n) => new it(t).setA(n).toRgbString(), Rr = (t, n) => new it(t).darken(n).toHexString(), bg = (t) => {
  const n = Ur(t);
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
}, yg = (t, n) => {
  const e = t || "#fff", r = n || "#000";
  return {
    colorBgBase: e,
    colorTextBase: r,
    colorText: Nt(r, 0.88),
    colorTextSecondary: Nt(r, 0.65),
    colorTextTertiary: Nt(r, 0.45),
    colorTextQuaternary: Nt(r, 0.25),
    colorFill: Nt(r, 0.15),
    colorFillSecondary: Nt(r, 0.06),
    colorFillTertiary: Nt(r, 0.04),
    colorFillQuaternary: Nt(r, 0.02),
    colorBgSolid: Nt(r, 1),
    colorBgSolidHover: Nt(r, 0.75),
    colorBgSolidActive: Nt(r, 0.95),
    colorBgLayout: Rr(e, 4),
    colorBgContainer: Rr(e, 0),
    colorBgElevated: Rr(e, 0),
    colorBgSpotlight: Nt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Rr(e, 15),
    colorBorderSecondary: Rr(e, 6)
  };
};
function _g(t) {
  Rs.pink = Rs.magenta, As.pink = As.magenta;
  const n = Object.keys(Yf).map((e) => {
    const r = t[e] === Rs[e] ? As[e] : Ur(t[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), dg(t, {
    generateColorPalettes: bg,
    generateNeutralColorPalettes: yg
  })), gg(t.fontSize)), vg(t)), pg(t)), xg(t));
}
const Zf = ga(_g), La = {
  token: Vr,
  override: {
    override: Vr
  },
  hashed: !0
}, ed = /* @__PURE__ */ Y.createContext(La), ri = "ant", Oc = "anticon", Sg = (t, n) => n || (t ? `${ri}-${t}` : ri), Yt = /* @__PURE__ */ O.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Sg,
  iconPrefixCls: Oc
}), {
  Consumer: aS
} = Yt, Xl = {};
function Tc(t) {
  const n = O.useContext(Yt), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = n, i = n[t];
  return Object.assign(Object.assign({
    classNames: Xl,
    styles: Xl
  }, i), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  });
}
const wg = `-ant-${Date.now()}-${Math.random()}`;
function Cg(t, n) {
  const e = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new it(s), l = Ur(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new it(n.primaryColor), a = Ur(s.toRgbString());
    a.forEach((l, u) => {
      e[`primary-${u + 1}`] = l;
    }), e["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new it(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((s) => `--${t}-${s}: ${e[s]};`).join(`
`)}
  }
  `.trim();
}
function Eg(t, n) {
  const e = Cg(t, n);
  hn() ? Bn(e, `${wg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const oi = /* @__PURE__ */ O.createContext(!1), Og = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = O.useContext(oi);
  return /* @__PURE__ */ O.createElement(oi.Provider, {
    value: e ?? r
  }, n);
}, cr = /* @__PURE__ */ O.createContext(void 0), Tg = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = O.useContext(cr);
  return /* @__PURE__ */ O.createElement(cr.Provider, {
    value: e || r
  }, n);
};
function Rg() {
  const t = Dt(oi), n = Dt(cr);
  return {
    componentDisabled: t,
    componentSize: n
  };
}
var td = /* @__PURE__ */ It(function t() {
  $t(this, t);
}), nd = "CALC_UNIT", Ag = new RegExp(nd, "g");
function $s(t) {
  return typeof t == "number" ? "".concat(t).concat(nd) : t;
}
var $g = /* @__PURE__ */ function(t) {
  mr(e, t);
  var n = Jr(e);
  function e(r, o) {
    var i;
    $t(this, e), i = n.call(this), Z(Dn(i), "result", ""), Z(Dn(i), "unitlessCssVar", void 0), Z(Dn(i), "lowPriority", void 0);
    var s = Ce(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = $s(r) : s === "string" && (i.result = r), i;
  }
  return It(e, [{
    key: "add",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat($s(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat($s(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Ag, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(td), Ig = /* @__PURE__ */ function(t) {
  mr(e, t);
  var n = Jr(e);
  function e(r) {
    var o;
    return $t(this, e), o = n.call(this), Z(Dn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return It(e, [{
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
}(td), Pg = function(n, e) {
  var r = n === "css" ? $g : Ig;
  return function(o) {
    return new r(o, e);
  };
}, Yl = function(n, e) {
  return "".concat([e, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function En(t) {
  var n = O.useRef();
  n.current = t;
  var e = O.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return e;
}
function qr(t) {
  var n = O.useRef(!1), e = O.useState(t), r = le(e, 2), o = r[0], i = r[1];
  O.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function Is(t) {
  return t !== void 0;
}
function kg(t, n) {
  var e = n || {}, r = e.defaultValue, o = e.value, i = e.onChange, s = e.postState, a = qr(function() {
    return Is(o) ? o : Is(r) ? typeof r == "function" ? r() : r : typeof t == "function" ? t() : t;
  }), c = le(a, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, x = s ? s(d) : d, g = En(i), f = qr([d]), m = le(f, 2), p = m[0], b = m[1];
  jl(function() {
    var E = p[0];
    l !== E && g(l, E);
  }, [p]), jl(function() {
    Is(o) || u(o);
  }, [o]);
  var w = En(function(E, T) {
    u(E, T), b([d], T);
  });
  return [x, w];
}
function Kl(t, n, e, r) {
  var o = ee({}, n[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = le(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && Tn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = ee(ee({}, e), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var rd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ma = !0;
function An() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  if (!rd)
    return Object.assign.apply(Object, [{}].concat(n));
  Ma = !1;
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
  }), Ma = !0, r;
}
var Jl = {};
function Ng() {
}
var jg = function(n) {
  var e, r = n, o = Ng;
  return rd && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Ma) {
        var c;
        (c = e) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Jl[s] = {
      global: Array.from(e),
      component: ee(ee({}, (c = Jl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: e,
    flush: o
  };
};
function Ql(t, n, e) {
  if (typeof e == "function") {
    var r;
    return e(An(n, (r = n[t]) !== null && r !== void 0 ? r : {}));
  }
  return e ?? {};
}
function Lg(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return fn(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return fn(i);
      }).join(","), ")");
    }
  };
}
var Mg = 1e3 * 60 * 10, Dg = /* @__PURE__ */ function() {
  function t() {
    $t(this, t), Z(this, "map", /* @__PURE__ */ new Map()), Z(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), Z(this, "nextID", 0), Z(this, "lastAccessBeat", /* @__PURE__ */ new Map()), Z(this, "accessBeat", 0);
  }
  return It(t, [{
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
        return i && Ce(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ce(i), "_").concat(i);
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
          r - o > Mg && (e.map.delete(i), e.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), Zl = new Dg();
function Bg(t, n) {
  return Y.useMemo(function() {
    var e = Zl.get(n);
    if (e)
      return e;
    var r = t();
    return Zl.set(n, r), r;
  }, n);
}
var Hg = function() {
  return {};
};
function zg(t) {
  var n = t.useCSP, e = n === void 0 ? Hg : n, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(x, g, f, m) {
    var p = Array.isArray(x) ? x[0] : x;
    function b(L) {
      return "".concat(String(p)).concat(L.slice(0, 1).toUpperCase()).concat(L.slice(1));
    }
    var w = (m == null ? void 0 : m.unitless) || {}, E = typeof a == "function" ? a(x) : {}, T = ee(ee({}, E), {}, Z({}, b("zIndexPopup"), !0));
    Object.keys(w).forEach(function(L) {
      T[b(L)] = w[L];
    });
    var h = ee(ee({}, m), {}, {
      unitless: T,
      prefixToken: b
    }), $ = u(x, g, f, h), C = l(p, f, h);
    return function(L) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : L, W = $(L, D), re = le(W, 2), J = re[1], F = C(D), U = le(F, 2), Q = U[0], j = U[1];
      return [Q, J, j];
    };
  }
  function l(x, g, f) {
    var m = f.unitless, p = f.injectStyle, b = p === void 0 ? !0 : p, w = f.prefixToken, E = f.ignore, T = function(C) {
      var L = C.rootCls, D = C.cssVar, W = D === void 0 ? {} : D, re = r(), J = re.realToken;
      return Zm({
        path: [x],
        prefix: W.prefix,
        key: W.key,
        unitless: m,
        ignore: E,
        token: J,
        scope: L
      }, function() {
        var F = Ql(x, J, g), U = Kl(x, J, F, {
          deprecatedTokens: f == null ? void 0 : f.deprecatedTokens
        });
        return Object.keys(F).forEach(function(Q) {
          U[w(Q)] = U[Q], delete U[Q];
        }), U;
      }), null;
    }, h = function(C) {
      var L = r(), D = L.cssVar;
      return [function(W) {
        return b && D ? /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(T, {
          rootCls: C,
          cssVar: D,
          component: x
        }), W) : W;
      }, D == null ? void 0 : D.key];
    };
    return h;
  }
  function u(x, g, f) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(x) ? x : [x, x], b = le(p, 1), w = b[0], E = p.join("-"), T = t.layer || {
      name: "antd"
    };
    return function(h) {
      var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h, C = r(), L = C.theme, D = C.realToken, W = C.hashId, re = C.token, J = C.cssVar, F = o(), U = F.rootPrefixCls, Q = F.iconPrefixCls, j = e(), k = J ? "css" : "js", P = Bg(function() {
        var K = /* @__PURE__ */ new Set();
        return J && Object.keys(m.unitless || {}).forEach(function(ce) {
          K.add(Do(ce, J.prefix)), K.add(Do(ce, Yl(w, J.prefix)));
        }), Pg(k, K);
      }, [k, w, J == null ? void 0 : J.prefix]), M = Lg(k), V = M.max, z = M.min, q = {
        theme: L,
        token: re,
        hashId: W,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: m.clientOnly,
        layer: T,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && Sa(ee(ee({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", U]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: U,
            iconPrefixCls: Q
          },
          csp: j
        });
      });
      var te = Sa(ee(ee({}, q), {}, {
        path: [E, h, Q]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var K = jg(re), ce = K.token, fe = K.flush, oe = Ql(w, D, f), Ie = ".".concat(h), ye = Kl(w, D, oe, {
          deprecatedTokens: m.deprecatedTokens
        });
        J && oe && Ce(oe) === "object" && Object.keys(oe).forEach(function(Ke) {
          oe[Ke] = "var(".concat(Do(Ke, Yl(w, J.prefix)), ")");
        });
        var Be = An(ce, {
          componentCls: Ie,
          prefixCls: h,
          iconCls: ".".concat(Q),
          antCls: ".".concat(U),
          calc: P,
          // @ts-ignore
          max: V,
          // @ts-ignore
          min: z
        }, J ? oe : ye), Le = g(Be, {
          hashId: W,
          prefixCls: h,
          rootPrefixCls: U,
          iconPrefixCls: Q
        });
        fe(w, ye);
        var pe = typeof s == "function" ? s(Be, h, $, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : pe, Le];
      });
      return [te, W];
    };
  }
  function d(x, g, f) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(x, g, f, ee({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), b = function(E) {
      var T = E.prefixCls, h = E.rootCls, $ = h === void 0 ? T : h;
      return p(T, $), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(x) ? x.join(".") : x))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Rc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Fg = "5.24.6";
function Ps(t) {
  return t >= 0 && t <= 255;
}
function Nr(t, n) {
  const {
    r: e,
    g: r,
    b: o,
    a: i
  } = new it(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: c
  } = new it(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((e - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), x = Math.round((o - c * (1 - l)) / l);
    if (Ps(u) && Ps(d) && Ps(x))
      return new it({
        r: u,
        g: d,
        b: x,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new it({
    r: e,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Vg = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
function od(t) {
  const {
    override: n
  } = t, e = Vg(t, ["override"]), r = Object.assign({}, n);
  Object.keys(Vr).forEach((x) => {
    delete r[x];
  });
  const o = Object.assign(Object.assign({}, e), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const x = "0s";
    o.motionDurationFast = x, o.motionDurationMid = x, o.motionDurationSlow = x;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Nr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Nr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Nr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Nr(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new it("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new it("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new it("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var eu = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const id = {
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
}, Ug = {
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
}, qg = {
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
}, sd = (t, n, e) => {
  const r = e.getDerivativeToken(t), {
    override: o
  } = n, i = eu(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = od(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = eu(l, ["theme"]);
    let x = d;
    u && (x = sd(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[c] = x;
  }), s;
};
function eo() {
  const {
    token: t,
    hashed: n,
    theme: e,
    override: r,
    cssVar: o
  } = Y.useContext(ed), i = `${Fg}-${n || ""}`, s = e || Zf, [a, c, l] = Cm(s, [Vr, t], {
    salt: i,
    override: r,
    getComputedToken: sd,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: od,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: id,
      ignore: Ug,
      preserve: qg
    }
  });
  return [s, l, n ? c : "", a, o];
}
const ad = function(t) {
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
}, cd = () => ({
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
}), Wg = (t) => ({
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
}), Gg = (t, n, e, r) => {
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
}, Xg = (t, n) => ({
  outline: `${fn(t.lineWidthFocus)} solid ${t.colorPrimaryBorder}`,
  outlineOffset: n ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Yg = (t, n) => ({
  "&:focus-visible": Object.assign({}, Xg(t, n))
}), ld = (t) => ({
  [`.${t}`]: Object.assign(Object.assign({}, cd()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Gi,
  genComponentStyleHook: Kg,
  genSubStyleComponent: Jg
} = zg({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: n
    } = Dt(Yt);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [t, n, e, r, o] = eo();
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
    } = Dt(Yt);
    return t ?? {};
  },
  getResetStyles: (t, n) => {
    var e;
    const r = Wg(t);
    return [r, {
      "&": r
    }, ld((e = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && e !== void 0 ? e : Oc)];
  },
  getCommonStyle: Gg,
  getCompUnitless: () => id
}), Qg = (t, n) => {
  const [e, r] = eo();
  return Sa({
    token: r,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [ld(t)]);
}, Zg = Object.assign({}, O), {
  useId: tu
} = Zg, ev = () => "", tv = typeof tu > "u" ? ev : tu;
function nv(t, n, e) {
  var r, o;
  const i = Rn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, La), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : La.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = tv();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return pc(() => {
    var l, u;
    if (!t)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((f) => {
      d[f] = Object.assign(Object.assign({}, d[f]), t.components[f]);
    });
    const x = `css-var-${c.replace(/:/g, "")}`, g = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || x
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: g
    });
  }, [s, a], (l, u) => l.some((d, x) => {
    const g = u[x];
    return !K1(d, g, !0);
  }));
}
var rv = ["children"], ud = /* @__PURE__ */ O.createContext({});
function ov(t) {
  var n = t.children, e = Vn(t, rv);
  return /* @__PURE__ */ O.createElement(ud.Provider, {
    value: e
  }, n);
}
var iv = /* @__PURE__ */ function(t) {
  mr(e, t);
  var n = Jr(e);
  function e() {
    return $t(this, e), n.apply(this, arguments);
  }
  return It(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(O.Component);
function sv(t) {
  var n = O.useReducer(function(a) {
    return a + 1;
  }, 0), e = le(n, 2), r = e[1], o = O.useRef(t), i = En(function() {
    return o.current;
  }), s = En(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var bn = "none", _o = "appear", So = "enter", wo = "leave", nu = "none", Ut = "prepare", Xn = "start", Yn = "active", Ac = "end", fd = "prepared";
function ru(t, n) {
  var e = {};
  return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
}
function av(t, n) {
  var e = {
    animationend: ru("Animation", "AnimationEnd"),
    transitionend: ru("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
}
var cv = av(hn(), typeof window < "u" ? window : {}), dd = {};
if (hn()) {
  var lv = document.createElement("div");
  dd = lv.style;
}
var Co = {};
function hd(t) {
  if (Co[t])
    return Co[t];
  var n = cv[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in dd)
        return Co[t] = n[i], Co[t];
    }
  return "";
}
var xd = hd("animationend"), pd = hd("transitionend"), md = !!(xd && pd), ou = xd || "animationend", iu = pd || "transitionend";
function su(t, n) {
  if (!t) return null;
  if (Ce(t) === "object") {
    var e = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(n);
}
const uv = function(t) {
  var n = ge();
  function e(o) {
    o && (o.removeEventListener(iu, t), o.removeEventListener(ou, t));
  }
  function r(o) {
    n.current && n.current !== o && e(n.current), o && o !== n.current && (o.addEventListener(iu, t), o.addEventListener(ou, t), n.current = o);
  }
  return O.useEffect(function() {
    return function() {
      e(n.current);
    };
  }, []), [r, e];
};
var gd = hn() ? jh : Xe;
const fv = function() {
  var t = O.useRef(null);
  function n() {
    Cn.cancel(t.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = Cn(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : e(r, o - 1);
    });
    t.current = i;
  }
  return O.useEffect(function() {
    return function() {
      n();
    };
  }, []), [e, n];
};
var dv = [Ut, Xn, Yn, Ac], hv = [Ut, fd], vd = !1, xv = !0;
function bd(t) {
  return t === Yn || t === Ac;
}
const pv = function(t, n, e) {
  var r = qr(nu), o = le(r, 2), i = o[0], s = o[1], a = fv(), c = le(a, 2), l = c[0], u = c[1];
  function d() {
    s(Ut, !0);
  }
  var x = n ? hv : dv;
  return gd(function() {
    if (i !== nu && i !== Ac) {
      var g = x.indexOf(i), f = x[g + 1], m = e(i);
      m === vd ? s(f, !0) : f && l(function(p) {
        function b() {
          p.isCanceled() || s(f, !0);
        }
        m === !0 ? b() : Promise.resolve(m).then(b);
      });
    }
  }, [t, i]), O.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function mv(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, x = r.onAppearPrepare, g = r.onEnterPrepare, f = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, b = r.onLeaveStart, w = r.onAppearActive, E = r.onEnterActive, T = r.onLeaveActive, h = r.onAppearEnd, $ = r.onEnterEnd, C = r.onLeaveEnd, L = r.onVisibleChanged, D = qr(), W = le(D, 2), re = W[0], J = W[1], F = sv(bn), U = le(F, 2), Q = U[0], j = U[1], k = qr(null), P = le(k, 2), M = P[0], V = P[1], z = Q(), q = ge(!1), te = ge(null);
  function K() {
    return e();
  }
  var ce = ge(!1);
  function fe() {
    j(bn), V(null, !0);
  }
  var oe = En(function(y) {
    var I = Q();
    if (I !== bn) {
      var S = K();
      if (!(y && !y.deadline && y.target !== S)) {
        var ie = ce.current, Ze;
        I === _o && ie ? Ze = h == null ? void 0 : h(S, y) : I === So && ie ? Ze = $ == null ? void 0 : $(S, y) : I === wo && ie && (Ze = C == null ? void 0 : C(S, y)), ie && Ze !== !1 && fe();
      }
    }
  }), Ie = uv(oe), ye = le(Ie, 1), Be = ye[0], Le = function(I) {
    switch (I) {
      case _o:
        return Z(Z(Z({}, Ut, x), Xn, m), Yn, w);
      case So:
        return Z(Z(Z({}, Ut, g), Xn, p), Yn, E);
      case wo:
        return Z(Z(Z({}, Ut, f), Xn, b), Yn, T);
      default:
        return {};
    }
  }, pe = O.useMemo(function() {
    return Le(z);
  }, [z]), Ke = pv(z, !t, function(y) {
    if (y === Ut) {
      var I = pe[Ut];
      return I ? I(K()) : vd;
    }
    if (be in pe) {
      var S;
      V(((S = pe[be]) === null || S === void 0 ? void 0 : S.call(pe, K(), null)) || null);
    }
    return be === Yn && z !== bn && (Be(K()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      oe({
        deadline: !0
      });
    }, u))), be === fd && fe(), xv;
  }), ne = le(Ke, 2), Ve = ne[0], be = ne[1], st = bd(be);
  ce.current = st;
  var xt = ge(null);
  gd(function() {
    if (!(q.current && xt.current === n)) {
      J(n);
      var y = q.current;
      q.current = !0;
      var I;
      !y && n && a && (I = _o), y && n && i && (I = So), (y && !n && l || !y && d && !n && l) && (I = wo);
      var S = Le(I);
      I && (t || S[Ut]) ? (j(I), Ve()) : j(bn), xt.current = n;
    }
  }, [n]), Xe(function() {
    // Cancel appear
    (z === _o && !a || // Cancel enter
    z === So && !i || // Cancel leave
    z === wo && !l) && j(bn);
  }, [a, i, l]), Xe(function() {
    return function() {
      q.current = !1, clearTimeout(te.current);
    };
  }, []);
  var _ = O.useRef(!1);
  Xe(function() {
    re && (_.current = !0), re !== void 0 && z === bn && ((_.current || re) && (L == null || L(re)), _.current = !0);
  }, [re, z]);
  var R = M;
  return pe[Ut] && be === Xn && (R = ee({
    transition: "none"
  }, R)), [z, be, R, re ?? n];
}
function gv(t) {
  var n = t;
  Ce(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ O.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, x = o.motionName, g = o.leavedClassName, f = o.eventProps, m = O.useContext(ud), p = m.motion, b = e(o, p), w = ge(), E = ge();
    function T() {
      try {
        return w.current instanceof HTMLElement ? w.current : B1(E.current);
      } catch {
        return null;
      }
    }
    var h = mv(b, a, T, o), $ = le(h, 4), C = $[0], L = $[1], D = $[2], W = $[3], re = O.useRef(W);
    W && (re.current = !0);
    var J = O.useCallback(function(P) {
      w.current = P, uf(i, P);
    }, [i]), F, U = ee(ee({}, f), {}, {
      visible: a
    });
    if (!d)
      F = null;
    else if (C === bn)
      W ? F = d(ee({}, U), J) : !l && re.current && g ? F = d(ee(ee({}, U), {}, {
        className: g
      }), J) : u || !l && !g ? F = d(ee(ee({}, U), {}, {
        style: {
          display: "none"
        }
      }), J) : F = null;
    else {
      var Q;
      L === Ut ? Q = "prepare" : bd(L) ? Q = "active" : L === Xn && (Q = "start");
      var j = su(x, "".concat(C, "-").concat(Q));
      F = d(ee(ee({}, U), {}, {
        className: we(su(x, C), Z(Z({}, j, j && Q), x, typeof x == "string")),
        style: D
      }), J);
    }
    if (/* @__PURE__ */ O.isValidElement(F) && ff(F)) {
      var k = hf(F);
      k || (F = /* @__PURE__ */ O.cloneElement(F, {
        ref: J
      }));
    }
    return /* @__PURE__ */ O.createElement(iv, {
      ref: E
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const Xi = gv(md);
var Da = "add", Ba = "keep", Ha = "remove", ks = "removed";
function vv(t) {
  var n;
  return t && Ce(t) === "object" && "key" in t ? n = t : n = {
    key: t
  }, ee(ee({}, n), {}, {
    key: String(n.key)
  });
}
function za() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(vv);
}
function bv() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = n.length, i = za(t), s = za(n);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var x = s[d];
      if (x.key === l.key) {
        r < d && (e = e.concat(s.slice(r, d).map(function(g) {
          return ee(ee({}, g), {}, {
            status: Da
          });
        })), r = d), e.push(ee(ee({}, x), {}, {
          status: Ba
        })), r += 1, u = !0;
        break;
      }
    }
    u || e.push(ee(ee({}, l), {}, {
      status: Ha
    }));
  }), r < o && (e = e.concat(s.slice(r).map(function(l) {
    return ee(ee({}, l), {}, {
      status: Da
    });
  })));
  var a = {};
  e.forEach(function(l) {
    var u = l.key;
    a[u] = (a[u] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    e = e.filter(function(u) {
      var d = u.key, x = u.status;
      return d !== l || x !== Ha;
    }), e.forEach(function(u) {
      u.key === l && (u.status = Ba);
    });
  }), e;
}
var yv = ["component", "children", "onVisibleChanged", "onAllRemoved"], _v = ["status"], Sv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function wv(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xi, e = /* @__PURE__ */ function(r) {
    mr(i, r);
    var o = Jr(i);
    function i() {
      var s;
      $t(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), Z(Dn(s), "state", {
        keyEntities: []
      }), Z(Dn(s), "removeKey", function(u) {
        s.setState(function(d) {
          var x = d.keyEntities.map(function(g) {
            return g.key !== u ? g : ee(ee({}, g), {}, {
              status: ks
            });
          });
          return {
            keyEntities: x
          };
        }, function() {
          var d = s.state.keyEntities, x = d.filter(function(g) {
            var f = g.status;
            return f !== ks;
          }).length;
          x === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return It(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, x = l.onVisibleChanged;
        l.onAllRemoved;
        var g = Vn(l, yv), f = u || O.Fragment, m = {};
        return Sv.forEach(function(p) {
          m[p] = g[p], delete g[p];
        }), delete g.keys, /* @__PURE__ */ O.createElement(f, g, c.map(function(p, b) {
          var w = p.status, E = Vn(p, _v), T = w === Da || w === Ba;
          return /* @__PURE__ */ O.createElement(n, Et({}, m, {
            key: E.key,
            visible: T,
            eventProps: E,
            onVisibleChanged: function($) {
              x == null || x($, {
                key: E.key
              }), $ || a.removeKey(E.key);
            }
          }), function(h, $) {
            return d(ee(ee({}, h), {}, {
              index: b
            }), $);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = za(l), x = bv(u, d);
        return {
          keyEntities: x.filter(function(g) {
            var f = u.find(function(m) {
              var p = m.key;
              return g.key === p;
            });
            return !(f && f.status === ks && g.status === Ha);
          })
        };
      }
    }]), i;
  }(O.Component);
  return Z(e, "defaultProps", {
    component: "div"
  }), e;
}
wv(md);
function Cv(t) {
  const {
    children: n
  } = t, [, e] = eo(), {
    motion: r
  } = e, o = O.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ O.createElement(ov, {
    motion: r
  }, n) : n;
}
const yd = /* @__PURE__ */ O.memo((t) => {
  let {
    dropdownMatchSelectWidth: n
  } = t;
  return Rn("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (yd.displayName = "PropWarning");
const Ev = process.env.NODE_ENV !== "production" ? yd : () => null;
var Ov = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
let Fa = !1;
process.env.NODE_ENV;
const Tv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let _d;
function Rv() {
  return _d || ri;
}
function Av(t) {
  return Object.keys(t).some((n) => n.endsWith("Color"));
}
const $v = (t) => {
  const {
    prefixCls: n,
    iconPrefixCls: e,
    theme: r,
    holderRender: o
  } = t;
  n !== void 0 && (_d = n), r && Av(r) && (process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Eg(Rv(), r));
}, Iv = (t) => {
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
    space: u,
    splitter: d,
    virtual: x,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: f,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: b,
    iconPrefixCls: w,
    theme: E,
    componentDisabled: T,
    segmented: h,
    statistic: $,
    spin: C,
    calendar: L,
    carousel: D,
    cascader: W,
    collapse: re,
    typography: J,
    checkbox: F,
    descriptions: U,
    divider: Q,
    drawer: j,
    skeleton: k,
    steps: P,
    image: M,
    layout: V,
    list: z,
    mentions: q,
    modal: te,
    progress: K,
    result: ce,
    slider: fe,
    breadcrumb: oe,
    menu: Ie,
    pagination: ye,
    input: Be,
    textArea: Le,
    empty: pe,
    badge: Ke,
    radio: ne,
    rate: Ve,
    switch: be,
    transfer: st,
    avatar: xt,
    message: _,
    tag: R,
    table: y,
    card: I,
    tabs: S,
    timeline: ie,
    timePicker: Ze,
    upload: Ue,
    notification: pt,
    tree: mt,
    colorPicker: ot,
    datePicker: bt,
    rangePicker: Pt,
    flex: kt,
    wave: zt,
    dropdown: Oe,
    warning: he,
    tour: gt,
    tooltip: Jt,
    popover: H,
    popconfirm: A,
    floatButtonGroup: Ee,
    variant: Pe,
    inputNumber: ke,
    treeSelect: se
  } = t, je = O.useCallback((qe, v) => {
    const {
      prefixCls: B
    } = t;
    if (v)
      return v;
    const G = B || b.getPrefixCls("");
    return qe ? `${G}-${qe}` : G;
  }, [b.getPrefixCls, t.prefixCls]), Ne = w || b.iconPrefixCls || Oc, yt = e || b.csp;
  Qg(Ne, yt);
  const _t = nv(E, b.theme, {
    prefixCls: je("")
  });
  process.env.NODE_ENV !== "production" && (Fa = Fa || !!_t);
  const pn = {
    csp: yt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: d,
    virtual: x,
    popupMatchSelectWidth: f ?? g,
    popupOverflow: m,
    getPrefixCls: je,
    iconPrefixCls: Ne,
    theme: _t,
    segmented: h,
    statistic: $,
    spin: C,
    calendar: L,
    carousel: D,
    cascader: W,
    collapse: re,
    typography: J,
    checkbox: F,
    descriptions: U,
    divider: Q,
    drawer: j,
    skeleton: k,
    steps: P,
    image: M,
    input: Be,
    textArea: Le,
    layout: V,
    list: z,
    mentions: q,
    modal: te,
    progress: K,
    result: ce,
    slider: fe,
    breadcrumb: oe,
    menu: Ie,
    pagination: ye,
    empty: pe,
    badge: Ke,
    radio: ne,
    rate: Ve,
    switch: be,
    transfer: st,
    avatar: xt,
    message: _,
    tag: R,
    table: y,
    card: I,
    tabs: S,
    timeline: ie,
    timePicker: Ze,
    upload: Ue,
    notification: pt,
    tree: mt,
    colorPicker: ot,
    datePicker: bt,
    rangePicker: Pt,
    flex: kt,
    wave: zt,
    dropdown: Oe,
    warning: he,
    tour: gt,
    tooltip: Jt,
    popover: H,
    popconfirm: A,
    floatButtonGroup: Ee,
    variant: Pe,
    inputNumber: ke,
    treeSelect: se
  };
  process.env.NODE_ENV !== "production" && Rn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Qt = Object.assign({}, b);
  Object.keys(pn).forEach((qe) => {
    pn[qe] !== void 0 && (Qt[qe] = pn[qe]);
  }), Tv.forEach((qe) => {
    const v = t[qe];
    v && (Qt[qe] = v);
  }), typeof r < "u" && (Qt.button = Object.assign({
    autoInsertSpace: r
  }, Qt.button));
  const Je = pc(() => Qt, Qt, (qe, v) => {
    const B = Object.keys(qe), G = Object.keys(v);
    return B.length !== G.length || B.some((ae) => qe[ae] !== v[ae]);
  }), {
    layer: at
  } = O.useContext(Qr), Ft = O.useMemo(() => ({
    prefixCls: Ne,
    csp: yt,
    layer: at ? "antd" : void 0
  }), [Ne, yt, at]);
  let ze = /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Ev, {
    dropdownMatchSelectWidth: g
  }), n);
  const so = O.useMemo(() => {
    var qe, v, B, G;
    return og(((qe = Wi.Form) === null || qe === void 0 ? void 0 : qe.defaultValidateMessages) || {}, ((B = (v = Je.locale) === null || v === void 0 ? void 0 : v.Form) === null || B === void 0 ? void 0 : B.defaultValidateMessages) || {}, ((G = Je.form) === null || G === void 0 ? void 0 : G.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Je, s == null ? void 0 : s.validateMessages]);
  Object.keys(so).length > 0 && (ze = /* @__PURE__ */ O.createElement(sg.Provider, {
    value: so
  }, ze)), a && (ze = /* @__PURE__ */ O.createElement(Xf, {
    locale: a,
    _ANT_MARK__: Gf
  }, ze)), ze = /* @__PURE__ */ O.createElement(Cc.Provider, {
    value: Ft
  }, ze), c && (ze = /* @__PURE__ */ O.createElement(Tg, {
    size: c
  }, ze)), ze = /* @__PURE__ */ O.createElement(Cv, null, ze);
  const us = O.useMemo(() => {
    const qe = _t || {}, {
      algorithm: v,
      token: B,
      components: G,
      cssVar: ae
    } = qe, Se = Ov(qe, ["algorithm", "token", "components", "cssVar"]), Te = v && (!Array.isArray(v) || v.length > 0) ? ga(v) : Zf, me = {};
    Object.entries(G || {}).forEach((dt) => {
      let [Fe, We] = dt;
      const Ge = Object.assign({}, We);
      "algorithm" in Ge && (Ge.algorithm === !0 ? Ge.theme = Te : (Array.isArray(Ge.algorithm) || typeof Ge.algorithm == "function") && (Ge.theme = ga(Ge.algorithm)), delete Ge.algorithm), me[Fe] = Ge;
    });
    const xe = Object.assign(Object.assign({}, Vr), B);
    return Object.assign(Object.assign({}, Se), {
      theme: Te,
      token: xe,
      components: me,
      override: Object.assign({
        override: xe
      }, me),
      cssVar: ae
    });
  }, [_t]);
  return E && (ze = /* @__PURE__ */ O.createElement(ed.Provider, {
    value: us
  }, ze)), Je.warning && (ze = /* @__PURE__ */ O.createElement(qf.Provider, {
    value: Je.warning
  }, ze)), T !== void 0 && (ze = /* @__PURE__ */ O.createElement(Og, {
    disabled: T
  }, ze)), /* @__PURE__ */ O.createElement(Yt.Provider, {
    value: Je
  }, ze);
}, vr = (t) => {
  const n = O.useContext(Yt), e = O.useContext(Wf);
  return /* @__PURE__ */ O.createElement(Iv, Object.assign({
    parentContext: n,
    legacyLocale: e
  }, t));
};
vr.ConfigContext = Yt;
vr.SizeContext = cr;
vr.config = $v;
vr.useConfig = Rg;
Object.defineProperty(vr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), cr)
});
process.env.NODE_ENV !== "production" && (vr.displayName = "ConfigProvider");
function Sd(t) {
  var n;
  return t == null || (n = t.getRootNode) === null || n === void 0 ? void 0 : n.call(t);
}
function Pv(t) {
  return Sd(t) instanceof ShadowRoot;
}
function kv(t) {
  return Pv(t) ? Sd(t) : null;
}
function Nv(t) {
  return t.replace(/-(.)/g, function(n, e) {
    return e.toUpperCase();
  });
}
function jv(t, n) {
  Tn(t, "[@ant-design/icons] ".concat(n));
}
function au(t) {
  return Ce(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (Ce(t.icon) === "object" || typeof t.icon == "function");
}
function cu() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(n, e) {
    var r = t[e];
    switch (e) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[e], n[Nv(e)] = r;
    }
    return n;
  }, {});
}
function Va(t, n, e) {
  return e ? /* @__PURE__ */ Y.createElement(t.tag, ee(ee({
    key: n
  }, cu(t.attrs)), e), (t.children || []).map(function(r, o) {
    return Va(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ Y.createElement(t.tag, ee({
    key: n
  }, cu(t.attrs)), (t.children || []).map(function(r, o) {
    return Va(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  }));
}
function wd(t) {
  return Ur(t)[0];
}
function Cd(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var Lv = `
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
`, Mv = function(n) {
  var e = Dt(Cc), r = e.csp, o = e.prefixCls, i = e.layer, s = Lv;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Xe(function() {
    var a = n.current, c = kv(a);
    Bn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, Dv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Dr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Bv(t) {
  var n = t.primaryColor, e = t.secondaryColor;
  Dr.primaryColor = n, Dr.secondaryColor = e || wd(n), Dr.calculated = !!e;
}
function Hv() {
  return ee({}, Dr);
}
var br = function(n) {
  var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = Vn(n, Dv), l = O.useRef(), u = Dr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || wd(s)
  }), Mv(l), jv(au(e), "icon should be icon definiton, but got ".concat(e)), !au(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = ee(ee({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Va(d.icon, "svg-".concat(d.name), ee(ee({
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
br.displayName = "IconReact";
br.getTwoToneColors = Hv;
br.setTwoToneColors = Bv;
function Ed(t) {
  var n = Cd(t), e = le(n, 2), r = e[0], o = e[1];
  return br.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function zv() {
  var t = br.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Fv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Ed(ni.primary);
var xn = /* @__PURE__ */ O.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, l = Vn(t, Fv), u = O.useContext(Cc), d = u.prefixCls, x = d === void 0 ? "anticon" : d, g = u.rootClassName, f = we(g, x, Z(Z({}, "".concat(x, "-").concat(r.name), !!r.name), "".concat(x, "-spin"), !!o || r.name === "loading"), e), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = Cd(c), w = le(b, 2), E = w[0], T = w[1];
  return /* @__PURE__ */ O.createElement("span", Et({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: m,
    onClick: a,
    className: f
  }), /* @__PURE__ */ O.createElement(br, {
    icon: r,
    primaryColor: E,
    secondaryColor: T,
    style: p
  }));
});
xn.displayName = "AntdIcon";
xn.getTwoToneColor = zv;
xn.setTwoToneColor = Ed;
var Vv = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: Op
  }));
}, Od = /* @__PURE__ */ O.forwardRef(Vv);
process.env.NODE_ENV !== "production" && (Od.displayName = "CheckCircleFilled");
var Uv = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: Tp
  }));
}, Td = /* @__PURE__ */ O.forwardRef(Uv);
process.env.NODE_ENV !== "production" && (Td.displayName = "CloseCircleFilled");
var qv = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: Rp
  }));
}, Rd = /* @__PURE__ */ O.forwardRef(qv);
process.env.NODE_ENV !== "production" && (Rd.displayName = "CloseOutlined");
var Wv = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: Ap
  }));
}, Ad = /* @__PURE__ */ O.forwardRef(Wv);
process.env.NODE_ENV !== "production" && (Ad.displayName = "ExclamationCircleFilled");
var Gv = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: $p
  }));
}, $d = /* @__PURE__ */ O.forwardRef(Gv);
process.env.NODE_ENV !== "production" && ($d.displayName = "InfoCircleFilled");
var Xv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Yv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Kv = "".concat(Xv, " ").concat(Yv).split(/[\s\n]+/), Jv = "aria-", Qv = "data-";
function lu(t, n) {
  return t.indexOf(n) === 0;
}
function Zv(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e;
  n === !1 ? e = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? e = {
    aria: !0
  } : e = ee({}, n);
  var r = {};
  return Object.keys(t).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || lu(o, Jv)) || // Data
    e.data && lu(o, Qv) || // Attr
    e.attr && Kv.includes(o)) && (r[o] = t[o]);
  }), r;
}
function eb(t) {
  return t && /* @__PURE__ */ Y.isValidElement(t) && t.type === Y.Fragment;
}
const Id = (t, n, e) => /* @__PURE__ */ Y.isValidElement(t) ? /* @__PURE__ */ Y.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function $c(t, n) {
  return Id(t, t, n);
}
const Eo = (t, n, e, r, o) => ({
  background: t,
  border: `${fn(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: e
  }
}), tb = (t) => {
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
    withDescriptionIconSize: u,
    colorText: d,
    colorTextHeading: x,
    withDescriptionPadding: g,
    defaultPadding: f
  } = t;
  return {
    [n]: Object.assign(Object.assign({}, ad(t)), {
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
        color: x
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
      padding: g,
      [`${n}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: x,
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
}, nb = (t) => {
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
    colorErrorBg: u,
    colorInfo: d,
    colorInfoBorder: x,
    colorInfoBg: g
  } = t;
  return {
    [n]: {
      "&-success": Eo(o, r, e, t, n),
      "&-info": Eo(g, x, d, t, n),
      "&-warning": Eo(a, s, i, t, n),
      "&-error": Object.assign(Object.assign({}, Eo(u, l, c, t, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, rb = (t) => {
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
        lineHeight: fn(i),
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
}, ob = (t) => ({
  withDescriptionIconSize: t.fontSizeHeading3,
  defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
}), ib = Gi("Alert", (t) => [tb(t), nb(t), rb(t)], ob);
var uu = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const sb = {
  success: Od,
  info: $d,
  error: Td,
  warning: Ad
}, ab = (t) => {
  const {
    icon: n,
    prefixCls: e,
    type: r
  } = t, o = sb[r] || null;
  return n ? Id(n, /* @__PURE__ */ O.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: we(`${e}-icon`, n.props.className)
  })) : /* @__PURE__ */ O.createElement(o, {
    className: `${e}-icon`
  });
}, cb = (t) => {
  const {
    isClosable: n,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ O.createElement(Rd, null) : r;
  return n ? /* @__PURE__ */ O.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Ic = /* @__PURE__ */ O.forwardRef((t, n) => {
  const {
    description: e,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: l,
    onMouseLeave: u,
    onClick: d,
    afterClose: x,
    showIcon: g,
    closable: f,
    closeText: m,
    closeIcon: p,
    action: b,
    id: w
  } = t, E = uu(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [T, h] = O.useState(!1);
  process.env.NODE_ENV !== "production" && Rn("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const $ = O.useRef(null);
  O.useImperativeHandle(n, () => ({
    nativeElement: $.current
  }));
  const {
    getPrefixCls: C,
    direction: L,
    closable: D,
    closeIcon: W,
    className: re,
    style: J
  } = Tc("alert"), F = C("alert", r), [U, Q, j] = ib(F), k = (ce) => {
    var fe;
    h(!0), (fe = t.onClose) === null || fe === void 0 || fe.call(t, ce);
  }, P = O.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), M = O.useMemo(() => typeof f == "object" && f.closeIcon || m ? !0 : typeof f == "boolean" ? f : p !== !1 && p !== null && p !== void 0 ? !0 : !!D, [m, p, f, D]), V = i && g === void 0 ? !0 : g, z = we(F, `${F}-${P}`, {
    [`${F}-with-description`]: !!e,
    [`${F}-no-icon`]: !V,
    [`${F}-banner`]: !!i,
    [`${F}-rtl`]: L === "rtl"
  }, re, s, a, j, Q), q = Zv(E, {
    aria: !0,
    data: !0
  }), te = O.useMemo(() => typeof f == "object" && f.closeIcon ? f.closeIcon : m || (p !== void 0 ? p : typeof D == "object" && D.closeIcon ? D.closeIcon : W), [p, f, m, W]), K = O.useMemo(() => {
    const ce = f ?? D;
    if (typeof ce == "object") {
      const {
        closeIcon: fe
      } = ce;
      return uu(ce, ["closeIcon"]);
    }
    return {};
  }, [f, D]);
  return U(/* @__PURE__ */ O.createElement(Xi, {
    visible: !T,
    motionName: `${F}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ce) => ({
      maxHeight: ce.offsetHeight
    }),
    onLeaveEnd: x
  }, (ce, fe) => {
    let {
      className: oe,
      style: Ie
    } = ce;
    return /* @__PURE__ */ O.createElement("div", Object.assign({
      id: w,
      ref: zi($, fe),
      "data-show": !T,
      className: we(z, oe),
      style: Object.assign(Object.assign(Object.assign({}, J), c), Ie),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, q), V ? /* @__PURE__ */ O.createElement(ab, {
      description: e,
      icon: t.icon,
      prefixCls: F,
      type: P
    }) : null, /* @__PURE__ */ O.createElement("div", {
      className: `${F}-content`
    }, o ? /* @__PURE__ */ O.createElement("div", {
      className: `${F}-message`
    }, o) : null, e ? /* @__PURE__ */ O.createElement("div", {
      className: `${F}-description`
    }, e) : null), b ? /* @__PURE__ */ O.createElement("div", {
      className: `${F}-action`
    }, b) : null, /* @__PURE__ */ O.createElement(cb, {
      isClosable: M,
      prefixCls: F,
      closeIcon: te,
      handleClose: k,
      ariaProps: K
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Ic.displayName = "Alert");
function lb(t, n, e) {
  return n = or(n), xf(t, mc() ? Reflect.construct(n, e || [], or(t).constructor) : n.apply(t, e));
}
let ub = /* @__PURE__ */ function(t) {
  function n() {
    var e;
    return $t(this, n), e = lb(this, n, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return mr(n, t), It(n, [{
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
      return a ? /* @__PURE__ */ O.createElement(Ic, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ O.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(O.Component);
const Pd = Ic;
Pd.ErrorBoundary = ub;
var fb = function(n, e) {
  return /* @__PURE__ */ O.createElement(xn, Et({}, n, {
    ref: e,
    icon: Ip
  }));
}, kd = /* @__PURE__ */ O.forwardRef(fb);
process.env.NODE_ENV !== "production" && (kd.displayName = "LoadingOutlined");
function Wr() {
  Wr = function() {
    return n;
  };
  var t, n = {}, e = Object.prototype, r = e.hasOwnProperty, o = Object.defineProperty || function(j, k, P) {
    j[k] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(j, k, P) {
    return Object.defineProperty(j, k, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), j[k];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, M, V) {
      return P[M] = V;
    };
  }
  function u(j, k, P, M) {
    var V = k && k.prototype instanceof b ? k : b, z = Object.create(V.prototype), q = new U(M || []);
    return o(z, "_invoke", {
      value: W(j, P, q)
    }), z;
  }
  function d(j, k, P) {
    try {
      return {
        type: "normal",
        arg: j.call(k, P)
      };
    } catch (M) {
      return {
        type: "throw",
        arg: M
      };
    }
  }
  n.wrap = u;
  var x = "suspendedStart", g = "suspendedYield", f = "executing", m = "completed", p = {};
  function b() {
  }
  function w() {
  }
  function E() {
  }
  var T = {};
  l(T, s, function() {
    return this;
  });
  var h = Object.getPrototypeOf, $ = h && h(h(Q([])));
  $ && $ !== e && r.call($, s) && (T = $);
  var C = E.prototype = b.prototype = Object.create(T);
  function L(j) {
    ["next", "throw", "return"].forEach(function(k) {
      l(j, k, function(P) {
        return this._invoke(k, P);
      });
    });
  }
  function D(j, k) {
    function P(V, z, q, te) {
      var K = d(j[V], j, z);
      if (K.type !== "throw") {
        var ce = K.arg, fe = ce.value;
        return fe && Ce(fe) == "object" && r.call(fe, "__await") ? k.resolve(fe.__await).then(function(oe) {
          P("next", oe, q, te);
        }, function(oe) {
          P("throw", oe, q, te);
        }) : k.resolve(fe).then(function(oe) {
          ce.value = oe, q(ce);
        }, function(oe) {
          return P("throw", oe, q, te);
        });
      }
      te(K.arg);
    }
    var M;
    o(this, "_invoke", {
      value: function(z, q) {
        function te() {
          return new k(function(K, ce) {
            P(z, q, K, ce);
          });
        }
        return M = M ? M.then(te, te) : te();
      }
    });
  }
  function W(j, k, P) {
    var M = x;
    return function(V, z) {
      if (M === f) throw Error("Generator is already running");
      if (M === m) {
        if (V === "throw") throw z;
        return {
          value: t,
          done: !0
        };
      }
      for (P.method = V, P.arg = z; ; ) {
        var q = P.delegate;
        if (q) {
          var te = re(q, P);
          if (te) {
            if (te === p) continue;
            return te;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (M === x) throw M = m, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        M = f;
        var K = d(j, k, P);
        if (K.type === "normal") {
          if (M = P.done ? m : g, K.arg === p) continue;
          return {
            value: K.arg,
            done: P.done
          };
        }
        K.type === "throw" && (M = m, P.method = "throw", P.arg = K.arg);
      }
    };
  }
  function re(j, k) {
    var P = k.method, M = j.iterator[P];
    if (M === t) return k.delegate = null, P === "throw" && j.iterator.return && (k.method = "return", k.arg = t, re(j, k), k.method === "throw") || P !== "return" && (k.method = "throw", k.arg = new TypeError("The iterator does not provide a '" + P + "' method")), p;
    var V = d(M, j.iterator, k.arg);
    if (V.type === "throw") return k.method = "throw", k.arg = V.arg, k.delegate = null, p;
    var z = V.arg;
    return z ? z.done ? (k[j.resultName] = z.value, k.next = j.nextLoc, k.method !== "return" && (k.method = "next", k.arg = t), k.delegate = null, p) : z : (k.method = "throw", k.arg = new TypeError("iterator result is not an object"), k.delegate = null, p);
  }
  function J(j) {
    var k = {
      tryLoc: j[0]
    };
    1 in j && (k.catchLoc = j[1]), 2 in j && (k.finallyLoc = j[2], k.afterLoc = j[3]), this.tryEntries.push(k);
  }
  function F(j) {
    var k = j.completion || {};
    k.type = "normal", delete k.arg, j.completion = k;
  }
  function U(j) {
    this.tryEntries = [{
      tryLoc: "root"
    }], j.forEach(J, this), this.reset(!0);
  }
  function Q(j) {
    if (j || j === "") {
      var k = j[s];
      if (k) return k.call(j);
      if (typeof j.next == "function") return j;
      if (!isNaN(j.length)) {
        var P = -1, M = function V() {
          for (; ++P < j.length; ) if (r.call(j, P)) return V.value = j[P], V.done = !1, V;
          return V.value = t, V.done = !0, V;
        };
        return M.next = M;
      }
    }
    throw new TypeError(Ce(j) + " is not iterable");
  }
  return w.prototype = E, o(C, "constructor", {
    value: E,
    configurable: !0
  }), o(E, "constructor", {
    value: w,
    configurable: !0
  }), w.displayName = l(E, c, "GeneratorFunction"), n.isGeneratorFunction = function(j) {
    var k = typeof j == "function" && j.constructor;
    return !!k && (k === w || (k.displayName || k.name) === "GeneratorFunction");
  }, n.mark = function(j) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(j, E) : (j.__proto__ = E, l(j, c, "GeneratorFunction")), j.prototype = Object.create(C), j;
  }, n.awrap = function(j) {
    return {
      __await: j
    };
  }, L(D.prototype), l(D.prototype, a, function() {
    return this;
  }), n.AsyncIterator = D, n.async = function(j, k, P, M, V) {
    V === void 0 && (V = Promise);
    var z = new D(u(j, k, P, M), V);
    return n.isGeneratorFunction(k) ? z : z.next().then(function(q) {
      return q.done ? q.value : z.next();
    });
  }, L(C), l(C, c, "Generator"), l(C, s, function() {
    return this;
  }), l(C, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(j) {
    var k = Object(j), P = [];
    for (var M in k) P.push(M);
    return P.reverse(), function V() {
      for (; P.length; ) {
        var z = P.pop();
        if (z in k) return V.value = z, V.done = !1, V;
      }
      return V.done = !0, V;
    };
  }, n.values = Q, U.prototype = {
    constructor: U,
    reset: function(k) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(F), !k) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = t);
    },
    stop: function() {
      this.done = !0;
      var k = this.tryEntries[0].completion;
      if (k.type === "throw") throw k.arg;
      return this.rval;
    },
    dispatchException: function(k) {
      if (this.done) throw k;
      var P = this;
      function M(ce, fe) {
        return q.type = "throw", q.arg = k, P.next = ce, fe && (P.method = "next", P.arg = t), !!fe;
      }
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var z = this.tryEntries[V], q = z.completion;
        if (z.tryLoc === "root") return M("end");
        if (z.tryLoc <= this.prev) {
          var te = r.call(z, "catchLoc"), K = r.call(z, "finallyLoc");
          if (te && K) {
            if (this.prev < z.catchLoc) return M(z.catchLoc, !0);
            if (this.prev < z.finallyLoc) return M(z.finallyLoc);
          } else if (te) {
            if (this.prev < z.catchLoc) return M(z.catchLoc, !0);
          } else {
            if (!K) throw Error("try statement without catch or finally");
            if (this.prev < z.finallyLoc) return M(z.finallyLoc);
          }
        }
      }
    },
    abrupt: function(k, P) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var V = this.tryEntries[M];
        if (V.tryLoc <= this.prev && r.call(V, "finallyLoc") && this.prev < V.finallyLoc) {
          var z = V;
          break;
        }
      }
      z && (k === "break" || k === "continue") && z.tryLoc <= P && P <= z.finallyLoc && (z = null);
      var q = z ? z.completion : {};
      return q.type = k, q.arg = P, z ? (this.method = "next", this.next = z.finallyLoc, p) : this.complete(q);
    },
    complete: function(k, P) {
      if (k.type === "throw") throw k.arg;
      return k.type === "break" || k.type === "continue" ? this.next = k.arg : k.type === "return" ? (this.rval = this.arg = k.arg, this.method = "return", this.next = "end") : k.type === "normal" && P && (this.next = P), p;
    },
    finish: function(k) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var M = this.tryEntries[P];
        if (M.finallyLoc === k) return this.complete(M.completion, M.afterLoc), F(M), p;
      }
    },
    catch: function(k) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var M = this.tryEntries[P];
        if (M.tryLoc === k) {
          var V = M.completion;
          if (V.type === "throw") {
            var z = V.arg;
            F(M);
          }
          return z;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(k, P, M) {
      return this.delegate = {
        iterator: Q(k),
        resultName: P,
        nextLoc: M
      }, this.method === "next" && (this.arg = t), p;
    }
  }, n;
}
function fu(t, n, e, r, o, i, s) {
  try {
    var a = t[i](s), c = a.value;
  } catch (l) {
    return void e(l);
  }
  a.done ? n(c) : Promise.resolve(c).then(r, o);
}
function Nd(t) {
  return function() {
    var n = this, e = arguments;
    return new Promise(function(r, o) {
      var i = t.apply(n, e);
      function s(c) {
        fu(i, r, o, s, a, "next", c);
      }
      function a(c) {
        fu(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var to = ee({}, u0), db = to.version, Ns = to.render, hb = to.unmountComponentAtNode, Yi;
try {
  var xb = Number((db || "").split(".")[0]);
  xb >= 18 && (Yi = to.createRoot);
} catch {
}
function du(t) {
  var n = to.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  n && Ce(n) === "object" && (n.usingClientEntryPoint = t);
}
var ii = "__rc_react_root__";
function pb(t, n) {
  du(!0);
  var e = n[ii] || Yi(n);
  du(!1), e.render(t), n[ii] = e;
}
function mb(t, n) {
  Ns == null || Ns(t, n);
}
function gb(t, n) {
  if (Yi) {
    pb(t, n);
    return;
  }
  mb(t, n);
}
function vb(t) {
  return Ua.apply(this, arguments);
}
function Ua() {
  return Ua = Nd(/* @__PURE__ */ Wr().mark(function t(n) {
    return Wr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = n[ii]) === null || o === void 0 || o.unmount(), delete n[ii];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, t);
  })), Ua.apply(this, arguments);
}
function bb(t) {
  hb(t);
}
function yb(t) {
  return qa.apply(this, arguments);
}
function qa() {
  return qa = Nd(/* @__PURE__ */ Wr().mark(function t(n) {
    return Wr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Yi === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", vb(n));
        case 2:
          bb(n);
        case 3:
        case "end":
          return r.stop();
      }
    }, t);
  })), qa.apply(this, arguments);
}
const _b = (t, n) => {
  if (process.env.NODE_ENV !== "production") {
    const e = parseInt(O.version.split(".")[0], 10), r = Object.keys(u0);
    process.env.NODE_ENV !== "production" && Zr(e < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return gb(t, n), () => yb(n);
};
let Sb = _b;
function wb() {
  return Sb;
}
function jd(t, n) {
  var e = Object.assign({}, t);
  return Array.isArray(n) && n.forEach(function(r) {
    delete e[r];
  }), e;
}
const Cb = function(t) {
  if (!t)
    return !1;
  if (t instanceof Element) {
    if (t.offsetParent)
      return !0;
    if (t.getBBox) {
      var n = t.getBBox(), e = n.width, r = n.height;
      if (e || r)
        return !0;
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, Eb = (t) => {
  const {
    componentCls: n,
    colorPrimary: e
  } = t;
  return {
    [n]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${e})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${t.motionEaseOutCirc}`, `opacity 2s ${t.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${t.motionDurationSlow} ${t.motionEaseInOut}`, `opacity ${t.motionDurationSlow} ${t.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Ob = Kg("Wave", (t) => [Eb(t)]), Ld = `${ri}-wave-target`;
function js(t) {
  return t && t !== "#fff" && t !== "#ffffff" && t !== "rgb(255, 255, 255)" && t !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(t) && // any transparent rgba color
  t !== "transparent";
}
function Tb(t) {
  const {
    borderTopColor: n,
    borderColor: e,
    backgroundColor: r
  } = getComputedStyle(t);
  return js(n) ? n : js(e) ? e : js(r) ? r : null;
}
function Ls(t) {
  return Number.isNaN(t) ? 0 : t;
}
const Rb = (t) => {
  const {
    className: n,
    target: e,
    component: r,
    registerUnmount: o
  } = t, i = O.useRef(null), s = O.useRef(null);
  O.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = O.useState(null), [l, u] = O.useState([]), [d, x] = O.useState(0), [g, f] = O.useState(0), [m, p] = O.useState(0), [b, w] = O.useState(0), [E, T] = O.useState(!1), h = {
    left: d,
    top: g,
    width: m,
    height: b,
    borderRadius: l.map((L) => `${L}px`).join(" ")
  };
  a && (h["--wave-color"] = a);
  function $() {
    const L = getComputedStyle(e);
    c(Tb(e));
    const D = L.position === "static", {
      borderLeftWidth: W,
      borderTopWidth: re
    } = L;
    x(D ? e.offsetLeft : Ls(-parseFloat(W))), f(D ? e.offsetTop : Ls(-parseFloat(re))), p(e.offsetWidth), w(e.offsetHeight);
    const {
      borderTopLeftRadius: J,
      borderTopRightRadius: F,
      borderBottomLeftRadius: U,
      borderBottomRightRadius: Q
    } = L;
    u([J, F, Q, U].map((j) => Ls(parseFloat(j))));
  }
  if (O.useEffect(() => {
    if (e) {
      const L = Cn(() => {
        $(), T(!0);
      });
      let D;
      return typeof ResizeObserver < "u" && (D = new ResizeObserver($), D.observe(e)), () => {
        Cn.cancel(L), D == null || D.disconnect();
      };
    }
  }, []), !E)
    return null;
  const C = (r === "Checkbox" || r === "Radio") && (e == null ? void 0 : e.classList.contains(Ld));
  return /* @__PURE__ */ O.createElement(Xi, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (L, D) => {
      var W, re;
      if (D.deadline || D.propertyName === "opacity") {
        const J = (W = i.current) === null || W === void 0 ? void 0 : W.parentElement;
        (re = s.current) === null || re === void 0 || re.call(s).then(() => {
          J == null || J.remove();
        });
      }
      return !1;
    }
  }, (L, D) => {
    let {
      className: W
    } = L;
    return /* @__PURE__ */ O.createElement("div", {
      ref: zi(i, D),
      className: we(n, W, {
        "wave-quick": C
      }),
      style: h
    });
  });
}, Ab = (t, n) => {
  var e;
  const {
    component: r
  } = n;
  if (r === "Checkbox" && !(!((e = t.querySelector("input")) === null || e === void 0) && e.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", t == null || t.insertBefore(o, t == null ? void 0 : t.firstChild);
  const i = wb();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ O.createElement(Rb, Object.assign({}, n, {
    target: t,
    registerUnmount: a
  })), o);
}, $b = (t, n, e) => {
  const {
    wave: r
  } = O.useContext(Yt), [, o, i] = eo(), s = En((l) => {
    const u = t.current;
    if (r != null && r.disabled || !u)
      return;
    const d = u.querySelector(`.${Ld}`) || u, {
      showEffect: x
    } = r || {};
    (x || Ab)(d, {
      className: n,
      token: o,
      component: e,
      event: l,
      hashId: i
    });
  }), a = O.useRef(null);
  return (l) => {
    Cn.cancel(a.current), a.current = Cn(() => {
      s(l);
    });
  };
}, Md = (t) => {
  const {
    children: n,
    disabled: e,
    component: r
  } = t, {
    getPrefixCls: o
  } = Dt(Yt), i = ge(null), s = o("wave"), [, a] = Ob(s), c = $b(i, we(s, a), r);
  if (Y.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || e)
      return;
    const d = (x) => {
      !Cb(x.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(x);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [e]), !/* @__PURE__ */ Y.isValidElement(n))
    return n ?? null;
  const l = ff(n) ? zi(hf(n), i) : i;
  return $c(n, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Md.displayName = "Wave");
const Ib = (t) => {
  const n = Y.useContext(cr);
  return Y.useMemo(() => t ? typeof t == "string" ? t ?? n : typeof t == "function" ? t(n) : n : n, [t, n]);
}, Pb = /* @__PURE__ */ O.createContext(null), kb = (t, n) => {
  const e = O.useContext(Pb), r = O.useMemo(() => {
    if (!e)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = e, a = o === "vertical" ? "-vertical-" : "-";
    return we(`${t}-compact${a}item`, {
      [`${t}-compact${a}first-item`]: i,
      [`${t}-compact${a}last-item`]: s,
      [`${t}-compact${a}item-rtl`]: n === "rtl"
    });
  }, [t, n, e]);
  return {
    compactSize: e == null ? void 0 : e.compactSize,
    compactDirection: e == null ? void 0 : e.compactDirection,
    compactItemClassnames: r
  };
};
var Nb = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const Dd = /* @__PURE__ */ O.createContext(void 0), jb = (t) => {
  const {
    getPrefixCls: n,
    direction: e
  } = O.useContext(Yt), {
    prefixCls: r,
    size: o,
    className: i
  } = t, s = Nb(t, ["prefixCls", "size", "className"]), a = n("btn-group", r), [, , c] = eo(), l = O.useMemo(() => {
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
    const d = Rn("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = we(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: e === "rtl"
  }, i, c);
  return /* @__PURE__ */ O.createElement(Dd.Provider, {
    value: o
  }, /* @__PURE__ */ O.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, hu = /^[\u4E00-\u9FA5]{2}$/, Wa = hu.test.bind(hu);
function xu(t) {
  return typeof t == "string";
}
function Oo(t) {
  return t === "text" || t === "link";
}
function Lb(t, n) {
  if (t == null)
    return;
  const e = n ? " " : "";
  return typeof t != "string" && typeof t != "number" && xu(t.type) && Wa(t.props.children) ? $c(t, {
    children: t.props.children.split("").join(e)
  }) : xu(t) ? Wa(t) ? /* @__PURE__ */ Y.createElement("span", null, t.split("").join(e)) : /* @__PURE__ */ Y.createElement("span", null, t) : eb(t) ? /* @__PURE__ */ Y.createElement("span", null, t) : t;
}
function Mb(t, n) {
  let e = !1;
  const r = [];
  return Y.Children.forEach(t, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (e && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    e = s;
  }), Y.Children.map(r, (o) => Lb(o, n));
}
["default", "primary", "danger"].concat(on(Rc));
const Ga = /* @__PURE__ */ fr((t, n) => {
  const {
    className: e,
    style: r,
    children: o,
    prefixCls: i
  } = t, s = we(`${i}-icon`, e);
  return /* @__PURE__ */ Y.createElement("span", {
    ref: n,
    className: s,
    style: r
  }, o);
}), pu = /* @__PURE__ */ fr((t, n) => {
  const {
    prefixCls: e,
    className: r,
    style: o,
    iconClassName: i
  } = t, s = we(`${e}-loading-icon`, r);
  return /* @__PURE__ */ Y.createElement(Ga, {
    prefixCls: e,
    className: s,
    style: o,
    ref: n
  }, /* @__PURE__ */ Y.createElement(kd, {
    className: i
  }));
}), Ms = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Ds = (t) => ({
  width: t.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Db = (t) => {
  const {
    prefixCls: n,
    loading: e,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = t, a = !!e;
  return r ? /* @__PURE__ */ Y.createElement(pu, {
    prefixCls: n,
    className: o,
    style: i
  }) : /* @__PURE__ */ Y.createElement(Xi, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${n}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: Ms,
    onAppearActive: Ds,
    onEnterStart: Ms,
    onEnterActive: Ds,
    onLeaveStart: Ds,
    onLeaveActive: Ms
  }, (c, l) => {
    let {
      className: u,
      style: d
    } = c;
    const x = Object.assign(Object.assign({}, i), d);
    return /* @__PURE__ */ Y.createElement(pu, {
      prefixCls: n,
      className: we(o, u),
      style: x,
      ref: l
    });
  });
}, mu = (t, n) => ({
  // Border
  [`> span, > ${t}`]: {
    "&:not(:last-child)": {
      [`&, & > ${t}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: n
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${t}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: n
        }
      }
    }
  }
}), Bb = (t) => {
  const {
    componentCls: n,
    fontSize: e,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: i
  } = t;
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
            marginInlineStart: t.calc(r).mul(-1).equal(),
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
          fontSize: e
        }
      },
      // Border Color
      mu(`${n}-primary`, o),
      mu(`${n}-danger`, i)
    ]
  };
}, ut = Math.round;
function Bs(t, n) {
  const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const gu = (t, n, e) => e === 0 ? t : t / 100;
function Ar(t, n) {
  const e = n || 255;
  return t > e ? e : t < 0 ? 0 : t;
}
class Ki {
  constructor(n) {
    Z(this, "isValid", !0), Z(this, "r", 0), Z(this, "g", 0), Z(this, "b", 0), Z(this, "a", 1), Z(this, "_h", void 0), Z(this, "_s", void 0), Z(this, "_l", void 0), Z(this, "_v", void 0), Z(this, "_max", void 0), Z(this, "_min", void 0), Z(this, "_brightness", void 0);
    function e(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Ki)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (e("rgb"))
      this.r = Ar(n.r), this.g = Ar(n.g), this.b = Ar(n.b), this.a = typeof n.a == "number" ? Ar(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = ut(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: ut(i("r")),
      g: ut(i("g")),
      b: ut(i("b")),
      a: ut(i("a") * 100) / 100
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => ut((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = ut(this.a * 255).toString(16);
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
    const n = this.getHue(), e = ut(this.getSaturation() * 100), r = ut(this.getLightness() * 100);
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
    return o[n] = Ar(e, r), o;
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
      const x = ut(r * 255);
      this.r = x, this.g = x, this.b = x;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = ut((i + d) * 255), this.g = ut((s + d) * 255), this.b = ut((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ut(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = ut(r * (1 - e) * 255), u = ut(r * (1 - e * c) * 255), d = ut(r * (1 - e * (1 - c)) * 255);
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
    const e = Bs(n, gu);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = Bs(n, gu);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = Bs(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ut(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var Hb = ["b"], zb = ["v"], Hs = function(n) {
  return Math.round(Number(n || 0));
}, Fb = function(n) {
  if (n instanceof Ki)
    return n;
  if (n && Ce(n) === "object" && "h" in n && "b" in n) {
    var e = n, r = e.b, o = Vn(e, Hb);
    return ee(ee({}, o), {}, {
      v: r
    });
  }
  return typeof n == "string" && /hsb/.test(n) ? n.replace(/hsb/, "hsv") : n;
}, dn = /* @__PURE__ */ function(t) {
  mr(e, t);
  var n = Jr(e);
  function e(r) {
    return $t(this, e), n.call(this, Fb(r));
  }
  return It(e, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Hs(o.s * 100), s = Hs(o.b * 100), a = Hs(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Vn(o, zb);
      return ee(ee({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), e;
}(Ki), Vb = "rc-color-picker", Jn = function(n) {
  return n instanceof dn ? n : new dn(n);
}, Ub = Jn("#1677ff"), Bd = function(n) {
  var e = n.offset, r = n.targetRef, o = n.containerRef, i = n.color, s = n.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), d = u.width, x = u.height, g = d / 2, f = x / 2, m = (e.x + g) / c, p = 1 - (e.y + f) / l, b = i.toHsb(), w = m, E = (e.x + g) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Jn(ee(ee({}, b), {}, {
          h: E <= 0 ? 0 : E
        }));
      case "alpha":
        return Jn(ee(ee({}, b), {}, {
          a: w <= 0 ? 0 : w
        }));
    }
  return Jn({
    h: b.h,
    s: m <= 0 ? 0 : m,
    b: p >= 1 ? 1 : p,
    a: b.a
  });
}, Hd = function(n, e) {
  var r = n.toHsb();
  switch (e) {
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
}, qb = function(n) {
  var e = n.color, r = n.prefixCls, o = n.className, i = n.style, s = n.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ Y.createElement("div", {
    className: we(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: e
    }
  }));
};
function Wb(t) {
  var n = "touches" in t ? t.touches[0] : t, e = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: n.pageX - e,
    pageY: n.pageY - r
  };
}
function zd(t) {
  var n = t.targetRef, e = t.containerRef, r = t.direction, o = t.onDragChange, i = t.onDragChangeComplete, s = t.calculate, a = t.color, c = t.disabledDrag, l = St({
    x: 0,
    y: 0
  }), u = le(l, 2), d = u[0], x = u[1], g = ge(null), f = ge(null);
  Xe(function() {
    x(s());
  }, [a]), Xe(function() {
    return function() {
      document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", f.current), g.current = null, f.current = null;
    };
  }, []);
  var m = function(T) {
    var h = Wb(T), $ = h.pageX, C = h.pageY, L = e.current.getBoundingClientRect(), D = L.x, W = L.y, re = L.width, J = L.height, F = n.current.getBoundingClientRect(), U = F.width, Q = F.height, j = U / 2, k = Q / 2, P = Math.max(0, Math.min($ - D, re)) - j, M = Math.max(0, Math.min(C - W, J)) - k, V = {
      x: P,
      y: r === "x" ? d.y : M
    };
    if (U === 0 && Q === 0 || U !== Q)
      return !1;
    o == null || o(V);
  }, p = function(T) {
    T.preventDefault(), m(T);
  }, b = function(T) {
    T.preventDefault(), document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", f.current), g.current = null, f.current = null, i == null || i();
  }, w = function(T) {
    document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", f.current), !c && (m(T), document.addEventListener("mousemove", p), document.addEventListener("mouseup", b), document.addEventListener("touchmove", p), document.addEventListener("touchend", b), g.current = p, f.current = b);
  };
  return [d, w];
}
var Fd = function(n) {
  var e = n.size, r = e === void 0 ? "default" : e, o = n.color, i = n.prefixCls;
  return /* @__PURE__ */ Y.createElement("div", {
    className: we("".concat(i, "-handler"), Z({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Vd = function(n) {
  var e = n.children, r = n.style, o = n.prefixCls;
  return /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(o, "-palette"),
    style: ee({
      position: "relative"
    }, r)
  }, e);
}, Ud = /* @__PURE__ */ fr(function(t, n) {
  var e = t.children, r = t.x, o = t.y;
  return /* @__PURE__ */ Y.createElement("div", {
    ref: n,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, e);
}), Gb = function(n) {
  var e = n.color, r = n.onChange, o = n.prefixCls, i = n.onChangeComplete, s = n.disabled, a = ge(), c = ge(), l = ge(e), u = En(function(m) {
    var p = Bd({
      offset: m,
      targetRef: c,
      containerRef: a,
      color: e
    });
    l.current = p, r(p);
  }), d = zd({
    color: e,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return Hd(e);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), x = le(d, 2), g = x[0], f = x[1];
  return /* @__PURE__ */ Y.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: f,
    onTouchStart: f
  }, /* @__PURE__ */ Y.createElement(Vd, {
    prefixCls: o
  }, /* @__PURE__ */ Y.createElement(Ud, {
    x: g.x,
    y: g.y,
    ref: c
  }, /* @__PURE__ */ Y.createElement(Fd, {
    color: e.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(e.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Xb = function(n, e) {
  var r = kg(n, {
    value: e
  }), o = le(r, 2), i = o[0], s = o[1], a = Hr(function() {
    return Jn(i);
  }, [i]);
  return [a, s];
}, Yb = function(n) {
  var e = n.colors, r = n.children, o = n.direction, i = o === void 0 ? "to right" : o, s = n.type, a = n.prefixCls, c = Hr(function() {
    return e.map(function(l, u) {
      var d = Jn(l);
      return s === "alpha" && u === e.length - 1 && (d = new dn(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [e, s]);
  return /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, Kb = function(n) {
  var e = n.prefixCls, r = n.colors, o = n.disabled, i = n.onChange, s = n.onChangeComplete, a = n.color, c = n.type, l = ge(), u = ge(), d = ge(a), x = function(h) {
    return c === "hue" ? h.getHue() : h.a * 100;
  }, g = En(function(T) {
    var h = Bd({
      offset: T,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = h, i(x(h));
  }), f = zd({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return Hd(a, c);
    },
    onDragChange: g,
    onDragChangeComplete: function() {
      s(x(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), m = le(f, 2), p = m[0], b = m[1], w = Y.useMemo(function() {
    if (c === "hue") {
      var T = a.toHsb();
      T.s = 1, T.b = 1, T.a = 1;
      var h = new dn(T);
      return h;
    }
    return a;
  }, [a, c]), E = Y.useMemo(function() {
    return r.map(function(T) {
      return "".concat(T.color, " ").concat(T.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ Y.createElement("div", {
    ref: l,
    className: we("".concat(e, "-slider"), "".concat(e, "-slider-").concat(c)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ Y.createElement(Vd, {
    prefixCls: e
  }, /* @__PURE__ */ Y.createElement(Ud, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ Y.createElement(Fd, {
    size: "small",
    color: w.toHexString(),
    prefixCls: e
  })), /* @__PURE__ */ Y.createElement(Yb, {
    colors: E,
    type: c,
    prefixCls: e
  })));
};
function Jb(t) {
  return O.useMemo(function() {
    var n = t || {}, e = n.slider;
    return [e || Kb];
  }, [t]);
}
var Qb = [{
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
}], Zb = /* @__PURE__ */ fr(function(t, n) {
  var e = t.value, r = t.defaultValue, o = t.prefixCls, i = o === void 0 ? Vb : o, s = t.onChange, a = t.onChangeComplete, c = t.className, l = t.style, u = t.panelRender, d = t.disabledAlpha, x = d === void 0 ? !1 : d, g = t.disabled, f = g === void 0 ? !1 : g, m = t.components, p = Jb(m), b = le(p, 1), w = b[0], E = Xb(r || Ub, e), T = le(E, 2), h = T[0], $ = T[1], C = Hr(function() {
    return h.setA(1).toRgbString();
  }, [h]), L = function(M, V) {
    e || $(M), s == null || s(M, V);
  }, D = function(M) {
    return new dn(h.setHue(M));
  }, W = function(M) {
    return new dn(h.setA(M / 100));
  }, re = function(M) {
    L(D(M), {
      type: "hue",
      value: M
    });
  }, J = function(M) {
    L(W(M), {
      type: "alpha",
      value: M
    });
  }, F = function(M) {
    a && a(D(M));
  }, U = function(M) {
    a && a(W(M));
  }, Q = we("".concat(i, "-panel"), c, Z({}, "".concat(i, "-panel-disabled"), f)), j = {
    prefixCls: i,
    disabled: f,
    color: h
  }, k = /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(Gb, Et({
    onChange: L
  }, j, {
    onChangeComplete: a
  })), /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ Y.createElement("div", {
    className: we("".concat(i, "-slider-group"), Z({}, "".concat(i, "-slider-group-disabled-alpha"), x))
  }, /* @__PURE__ */ Y.createElement(w, Et({}, j, {
    type: "hue",
    colors: Qb,
    min: 0,
    max: 359,
    value: h.getHue(),
    onChange: re,
    onChangeComplete: F
  })), !x && /* @__PURE__ */ Y.createElement(w, Et({}, j, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: C
    }],
    min: 0,
    max: 100,
    value: h.a * 100,
    onChange: J,
    onChangeComplete: U
  }))), /* @__PURE__ */ Y.createElement(qb, {
    color: h.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ Y.createElement("div", {
    className: Q,
    style: l,
    ref: n
  }, typeof u == "function" ? u(k) : k);
});
process.env.NODE_ENV !== "production" && (Zb.displayName = "ColorPicker");
const e2 = (t, n) => (t == null ? void 0 : t.replace(/[^\w/]/g, "").slice(0, n ? 8 : 6)) || "", t2 = (t, n) => t ? e2(t, n) : "";
let n2 = /* @__PURE__ */ function() {
  function t(n) {
    $t(this, t);
    var e;
    if (this.cleared = !1, n instanceof t) {
      this.metaColor = n.metaColor.clone(), this.colors = (e = n.colors) === null || e === void 0 ? void 0 : e.map((o) => ({
        color: new t(o.color),
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
        color: new t(i),
        percent: s
      };
    }), this.metaColor = new dn(this.colors[0].color.metaColor)) : this.metaColor = new dn(r ? "" : n), (!n || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return It(t, [{
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
      return t2(this.toHexString(), this.metaColor.a < 1);
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
        colors: e
      } = this;
      return e ? `linear-gradient(90deg, ${e.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(e) {
      return !e || this.isGradient() !== e.isGradient() ? !1 : this.isGradient() ? this.colors.length === e.colors.length && this.colors.every((r, o) => {
        const i = e.colors[o];
        return r.percent === i.percent && r.color.equals(i.color);
      }) : this.toHexString() === e.toHexString();
    }
  }]);
}();
const r2 = (t, n) => {
  const {
    r: e,
    g: r,
    b: o,
    a: i
  } = t.toRgb(), s = new dn(t.toRgbString()).onBackground(n).toHsv();
  return i <= 0.5 ? s.v > 0.5 : e * 0.299 + r * 0.587 + o * 0.114 > 192;
}, qd = (t) => {
  const {
    paddingInline: n,
    onlyIconSize: e
  } = t;
  return An(t, {
    buttonPaddingHorizontal: n,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: e
  });
}, Wd = (t) => {
  var n, e, r, o, i, s;
  const a = (n = t.contentFontSize) !== null && n !== void 0 ? n : t.fontSize, c = (e = t.contentFontSizeSM) !== null && e !== void 0 ? e : t.fontSize, l = (r = t.contentFontSizeLG) !== null && r !== void 0 ? r : t.fontSizeLG, u = (o = t.contentLineHeight) !== null && o !== void 0 ? o : Uo(a), d = (i = t.contentLineHeightSM) !== null && i !== void 0 ? i : Uo(c), x = (s = t.contentLineHeightLG) !== null && s !== void 0 ? s : Uo(l), g = r2(new n2(t.colorBgSolid), "#fff") ? "#000" : "#fff", f = Rc.reduce((m, p) => Object.assign(Object.assign({}, m), {
    [`${p}ShadowColor`]: `0 ${fn(t.controlOutlineWidth)} 0 ${Nr(t[`${p}1`], t.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, f), {
    fontWeight: 400,
    defaultShadow: `0 ${t.controlOutlineWidth}px 0 ${t.controlTmpOutline}`,
    primaryShadow: `0 ${t.controlOutlineWidth}px 0 ${t.controlOutline}`,
    dangerShadow: `0 ${t.controlOutlineWidth}px 0 ${t.colorErrorOutline}`,
    primaryColor: t.colorTextLightSolid,
    dangerColor: t.colorTextLightSolid,
    borderColorDisabled: t.colorBorder,
    defaultGhostColor: t.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: t.colorBgContainer,
    paddingInline: t.paddingContentHorizontal - t.lineWidth,
    paddingInlineLG: t.paddingContentHorizontal - t.lineWidth,
    paddingInlineSM: 8 - t.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: t.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: t.colorText,
    textTextHoverColor: t.colorText,
    textTextActiveColor: t.colorText,
    textHoverBg: t.colorFillTertiary,
    defaultColor: t.colorText,
    defaultBg: t.colorBgContainer,
    defaultBorderColor: t.colorBorder,
    defaultBorderColorDisabled: t.colorBorder,
    defaultHoverBg: t.colorBgContainer,
    defaultHoverColor: t.colorPrimaryHover,
    defaultHoverBorderColor: t.colorPrimaryHover,
    defaultActiveBg: t.colorBgContainer,
    defaultActiveColor: t.colorPrimaryActive,
    defaultActiveBorderColor: t.colorPrimaryActive,
    solidTextColor: g,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: x,
    paddingBlock: Math.max((t.controlHeight - a * u) / 2 - t.lineWidth, 0),
    paddingBlockSM: Math.max((t.controlHeightSM - c * d) / 2 - t.lineWidth, 0),
    paddingBlockLG: Math.max((t.controlHeightLG - l * x) / 2 - t.lineWidth, 0)
  });
}, o2 = (t) => {
  const {
    componentCls: n,
    iconCls: e,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = t;
  return {
    [n]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: t.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${fn(t.lineWidth)} ${t.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${t.motionDurationMid} ${t.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: t.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${n}-icon > svg`]: cd(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Yg(t),
      [`&${n}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${n}-two-chinese-chars > *:not(${e})`]: {
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
}, Gd = (t, n, e) => ({
  [`&:not(:disabled):not(${t}-disabled)`]: {
    "&:hover": n,
    "&:active": e
  }
}), i2 = (t) => ({
  minWidth: t.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), s2 = (t) => ({
  borderRadius: t.controlHeight,
  paddingInlineStart: t.calc(t.controlHeight).div(2).equal(),
  paddingInlineEnd: t.calc(t.controlHeight).div(2).equal()
}), a2 = (t) => ({
  cursor: "not-allowed",
  borderColor: t.borderColorDisabled,
  color: t.colorTextDisabled,
  background: t.colorBgContainerDisabled,
  boxShadow: "none"
}), Ji = (t, n, e, r, o, i, s, a) => ({
  [`&${t}-background-ghost`]: Object.assign(Object.assign({
    color: e || void 0,
    background: n,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Gd(t, Object.assign({
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
}), c2 = (t) => ({
  [`&:disabled, &${t.componentCls}-disabled`]: Object.assign({}, a2(t))
}), l2 = (t) => ({
  [`&:disabled, &${t.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: t.colorTextDisabled
  }
}), Qi = (t, n, e, r) => {
  const i = r && ["link", "text"].includes(r) ? l2 : c2;
  return Object.assign(Object.assign({}, i(t)), Gd(t.componentCls, n, e));
}, Zi = (t, n, e, r, o) => ({
  [`&${t.componentCls}-variant-solid`]: Object.assign({
    color: n,
    background: e
  }, Qi(t, r, o))
}), es = (t, n, e, r, o) => ({
  [`&${t.componentCls}-variant-outlined, &${t.componentCls}-variant-dashed`]: Object.assign({
    borderColor: n,
    background: e
  }, Qi(t, r, o))
}), ts = (t) => ({
  [`&${t.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), ns = (t, n, e, r) => ({
  [`&${t.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: n
  }, Qi(t, e, r))
}), sn = (t, n, e, r, o) => ({
  [`&${t.componentCls}-variant-${e}`]: Object.assign({
    color: n,
    boxShadow: "none"
  }, Qi(t, r, o, e))
}), u2 = (t) => {
  const {
    componentCls: n
  } = t;
  return Rc.reduce((e, r) => {
    const o = t[`${r}6`], i = t[`${r}1`], s = t[`${r}5`], a = t[`${r}2`], c = t[`${r}3`], l = t[`${r}7`];
    return Object.assign(Object.assign({}, e), {
      [`&${n}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: t[`${r}ShadowColor`]
      }, Zi(t, t.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), es(t, o, t.colorBgContainer, {
        color: s,
        borderColor: s,
        background: t.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: t.colorBgContainer
      })), ts(t)), ns(t, i, {
        background: a
      }, {
        background: c
      })), sn(t, o, "link", {
        color: s
      }, {
        color: l
      })), sn(t, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, f2 = (t) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: t.defaultColor,
  boxShadow: t.defaultShadow
}, Zi(t, t.solidTextColor, t.colorBgSolid, {
  color: t.solidTextColor,
  background: t.colorBgSolidHover
}, {
  color: t.solidTextColor,
  background: t.colorBgSolidActive
})), ts(t)), ns(t, t.colorFillTertiary, {
  background: t.colorFillSecondary
}, {
  background: t.colorFill
})), Ji(t.componentCls, t.ghostBg, t.defaultGhostColor, t.defaultGhostBorderColor, t.colorTextDisabled, t.colorBorder)), sn(t, t.textTextColor, "link", {
  color: t.colorLinkHover,
  background: t.linkHoverBg
}, {
  color: t.colorLinkActive
})), d2 = (t) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: t.colorPrimary,
  boxShadow: t.primaryShadow
}, es(t, t.colorPrimary, t.colorBgContainer, {
  color: t.colorPrimaryTextHover,
  borderColor: t.colorPrimaryHover,
  background: t.colorBgContainer
}, {
  color: t.colorPrimaryTextActive,
  borderColor: t.colorPrimaryActive,
  background: t.colorBgContainer
})), ts(t)), ns(t, t.colorPrimaryBg, {
  background: t.colorPrimaryBgHover
}, {
  background: t.colorPrimaryBorder
})), sn(t, t.colorPrimaryText, "text", {
  color: t.colorPrimaryTextHover,
  background: t.colorPrimaryBg
}, {
  color: t.colorPrimaryTextActive,
  background: t.colorPrimaryBorder
})), sn(t, t.colorPrimaryText, "link", {
  color: t.colorPrimaryTextHover,
  background: t.linkHoverBg
}, {
  color: t.colorPrimaryTextActive
})), Ji(t.componentCls, t.ghostBg, t.colorPrimary, t.colorPrimary, t.colorTextDisabled, t.colorBorder, {
  color: t.colorPrimaryHover,
  borderColor: t.colorPrimaryHover
}, {
  color: t.colorPrimaryActive,
  borderColor: t.colorPrimaryActive
})), h2 = (t) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: t.colorError,
  boxShadow: t.dangerShadow
}, Zi(t, t.dangerColor, t.colorError, {
  background: t.colorErrorHover
}, {
  background: t.colorErrorActive
})), es(t, t.colorError, t.colorBgContainer, {
  color: t.colorErrorHover,
  borderColor: t.colorErrorBorderHover
}, {
  color: t.colorErrorActive,
  borderColor: t.colorErrorActive
})), ts(t)), ns(t, t.colorErrorBg, {
  background: t.colorErrorBgFilledHover
}, {
  background: t.colorErrorBgActive
})), sn(t, t.colorError, "text", {
  color: t.colorErrorHover,
  background: t.colorErrorBg
}, {
  color: t.colorErrorHover,
  background: t.colorErrorBgActive
})), sn(t, t.colorError, "link", {
  color: t.colorErrorHover
}, {
  color: t.colorErrorActive
})), Ji(t.componentCls, t.ghostBg, t.colorError, t.colorError, t.colorTextDisabled, t.colorBorder, {
  color: t.colorErrorHover,
  borderColor: t.colorErrorHover
}, {
  color: t.colorErrorActive,
  borderColor: t.colorErrorActive
})), x2 = (t) => Object.assign(Object.assign({}, sn(t, t.colorLink, "link", {
  color: t.colorLinkHover
}, {
  color: t.colorLinkActive
})), Ji(t.componentCls, t.ghostBg, t.colorInfo, t.colorInfo, t.colorTextDisabled, t.colorBorder, {
  color: t.colorInfoHover,
  borderColor: t.colorInfoHover
}, {
  color: t.colorInfoActive,
  borderColor: t.colorInfoActive
})), p2 = (t) => {
  const {
    componentCls: n
  } = t;
  return Object.assign({
    [`${n}-color-default`]: f2(t),
    [`${n}-color-primary`]: d2(t),
    [`${n}-color-dangerous`]: h2(t),
    [`${n}-color-link`]: x2(t)
  }, u2(t));
}, m2 = (t) => Object.assign(Object.assign(Object.assign(Object.assign({}, es(t, t.defaultBorderColor, t.defaultBg, {
  color: t.defaultHoverColor,
  borderColor: t.defaultHoverBorderColor,
  background: t.defaultHoverBg
}, {
  color: t.defaultActiveColor,
  borderColor: t.defaultActiveBorderColor,
  background: t.defaultActiveBg
})), sn(t, t.textTextColor, "text", {
  color: t.textTextHoverColor,
  background: t.textHoverBg
}, {
  color: t.textTextActiveColor,
  background: t.colorBgTextActive
})), Zi(t, t.primaryColor, t.colorPrimary, {
  background: t.colorPrimaryHover,
  color: t.primaryColor
}, {
  background: t.colorPrimaryActive,
  color: t.primaryColor
})), sn(t, t.colorLink, "link", {
  color: t.colorLinkHover,
  background: t.linkHoverBg
}, {
  color: t.colorLinkActive
})), Pc = function(t) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: e,
    controlHeight: r,
    fontSize: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: a,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = t;
  return [
    {
      [n]: {
        fontSize: o,
        height: r,
        padding: `${fn(c)} ${fn(s)}`,
        borderRadius: i,
        [`&${e}-icon-only`]: {
          width: r,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${e}${e}-circle${n}`]: i2(t)
    },
    {
      [`${e}${e}-round${n}`]: s2(t)
    }
  ];
}, g2 = (t) => {
  const n = An(t, {
    fontSize: t.contentFontSize
  });
  return Pc(n, t.componentCls);
}, v2 = (t) => {
  const n = An(t, {
    controlHeight: t.controlHeightSM,
    fontSize: t.contentFontSizeSM,
    padding: t.paddingXS,
    buttonPaddingHorizontal: t.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: t.borderRadiusSM,
    buttonIconOnlyFontSize: t.onlyIconSizeSM
  });
  return Pc(n, `${t.componentCls}-sm`);
}, b2 = (t) => {
  const n = An(t, {
    controlHeight: t.controlHeightLG,
    fontSize: t.contentFontSizeLG,
    buttonPaddingHorizontal: t.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: t.borderRadiusLG,
    buttonIconOnlyFontSize: t.onlyIconSizeLG
  });
  return Pc(n, `${t.componentCls}-lg`);
}, y2 = (t) => {
  const {
    componentCls: n
  } = t;
  return {
    [n]: {
      [`&${n}-block`]: {
        width: "100%"
      }
    }
  };
}, _2 = Gi("Button", (t) => {
  const n = qd(t);
  return [
    // Shared
    o2(n),
    // Size
    g2(n),
    v2(n),
    b2(n),
    // Block
    y2(n),
    // Color
    p2(n),
    // https://github.com/ant-design/ant-design/issues/50969
    m2(n),
    // Button Group
    Bb(n)
  ];
}, Wd, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function S2(t, n, e) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = e, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${n}-last-item)`]: {
      marginInlineEnd: t.calc(t.lineWidth).mul(-1).equal()
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
function w2(t, n, e) {
  const {
    borderElCls: r
  } = e, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${n}-last-item)${n}-first-item`]: {
      [`& ${o}, &${t}-sm ${o}, &${t}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${n}-first-item)${n}-last-item`]: {
      [`& ${o}, &${t}-sm ${o}, &${t}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function C2(t) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: e
  } = t, r = `${e}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, S2(t, r, n)), w2(e, r, n))
  };
}
function E2(t, n) {
  return {
    // border collapse
    [`&-item:not(${n}-last-item)`]: {
      marginBottom: t.calc(t.lineWidth).mul(-1).equal()
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
function O2(t, n) {
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${n}-first-item:not(${n}-last-item)`]: {
      [`&, &${t}-sm, &${t}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${n}-last-item:not(${n}-first-item)`]: {
      [`&, &${t}-sm, &${t}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function T2(t) {
  const n = `${t.componentCls}-compact-vertical`;
  return {
    [n]: Object.assign(Object.assign({}, E2(t, n)), O2(t.componentCls, n))
  };
}
const R2 = (t) => {
  const {
    componentCls: n,
    colorPrimaryHover: e,
    lineWidth: r,
    calc: o
  } = t, i = o(r).mul(-1).equal(), s = (a) => {
    const c = `${n}-compact${a ? "-vertical" : ""}-item${n}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: e,
        content: '""',
        width: a ? "100%" : r,
        height: a ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, A2 = Jg(["Button", "compact"], (t) => {
  const n = qd(t);
  return [
    // Space Compact
    C2(n),
    T2(n),
    R2(n)
  ];
}, Wd);
var $2 = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
function I2(t) {
  if (typeof t == "object" && t) {
    let n = t == null ? void 0 : t.delay;
    return n = !Number.isNaN(n) && typeof n == "number" ? n : 0, {
      loading: n <= 0,
      delay: n
    };
  }
  return {
    loading: !!t,
    delay: 0
  };
}
const P2 = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, k2 = /* @__PURE__ */ Y.forwardRef((t, n) => {
  var e, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: d,
    styles: x,
    disabled: g,
    className: f,
    rootClassName: m,
    children: p,
    icon: b,
    iconPosition: w = "start",
    ghost: E = !1,
    block: T = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: h = "button",
    classNames: $,
    style: C = {},
    autoInsertSpace: L,
    autoFocus: D
  } = t, W = $2(t, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), re = c || "default", [J, F] = Hr(() => {
    if (s && a)
      return [s, a];
    const he = P2[re] || [];
    return l ? ["danger", he[1]] : he;
  }, [c, s, a, l]), Q = J === "danger" ? "dangerous" : J, {
    getPrefixCls: j,
    direction: k,
    autoInsertSpace: P,
    className: M,
    style: V,
    classNames: z,
    styles: q
  } = Tc("button"), te = (e = L ?? P) !== null && e !== void 0 ? e : !0, K = j("btn", i), [ce, fe, oe] = _2(K), Ie = Dt(oi), ye = g ?? Ie, Be = Dt(Dd), Le = Hr(() => I2(o), [o]), [pe, Ke] = St(Le.loading), [ne, Ve] = St(!1), be = ge(null), st = z1(n, be), xt = Lh.count(p) === 1 && !b && !Oo(F), _ = ge(!0);
  Y.useEffect(() => (_.current = !1, () => {
    _.current = !0;
  }), []), Xe(() => {
    let he = null;
    Le.delay > 0 ? he = setTimeout(() => {
      he = null, Ke(!0);
    }, Le.delay) : Ke(Le.loading);
    function gt() {
      he && (clearTimeout(he), he = null);
    }
    return gt;
  }, [Le]), Xe(() => {
    if (!be.current || !te)
      return;
    const he = be.current.textContent || "";
    xt && Wa(he) ? ne || Ve(!0) : ne && Ve(!1);
  }), Xe(() => {
    D && be.current && be.current.focus();
  }, []);
  const R = Y.useCallback((he) => {
    var gt;
    if (pe || ye) {
      he.preventDefault();
      return;
    }
    (gt = t.onClick) === null || gt === void 0 || gt.call(t, ("href" in t, he));
  }, [t.onClick, pe, ye]);
  if (process.env.NODE_ENV !== "production") {
    const he = Rn("Button");
    process.env.NODE_ENV !== "production" && he(!(typeof b == "string" && b.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${b}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && he(!(E && Oo(F)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: y,
    compactItemClassnames: I
  } = kb(K, k), S = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ie = Ib((he) => {
    var gt, Jt;
    return (Jt = (gt = d ?? y) !== null && gt !== void 0 ? gt : Be) !== null && Jt !== void 0 ? Jt : he;
  }), Ze = ie && (r = S[ie]) !== null && r !== void 0 ? r : "", Ue = pe ? "loading" : b, pt = jd(W, ["navigate"]), mt = we(K, fe, oe, {
    [`${K}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${K}-${re}`]: re,
    [`${K}-dangerous`]: l,
    [`${K}-color-${Q}`]: Q,
    [`${K}-variant-${F}`]: F,
    [`${K}-${Ze}`]: Ze,
    [`${K}-icon-only`]: !p && p !== 0 && !!Ue,
    [`${K}-background-ghost`]: E && !Oo(F),
    [`${K}-loading`]: pe,
    [`${K}-two-chinese-chars`]: ne && te && !pe,
    [`${K}-block`]: T,
    [`${K}-rtl`]: k === "rtl",
    [`${K}-icon-end`]: w === "end"
  }, I, f, m, M), ot = Object.assign(Object.assign({}, V), C), bt = we($ == null ? void 0 : $.icon, z.icon), Pt = Object.assign(Object.assign({}, (x == null ? void 0 : x.icon) || {}), q.icon || {}), kt = b && !pe ? /* @__PURE__ */ Y.createElement(Ga, {
    prefixCls: K,
    className: bt,
    style: Pt
  }, b) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ Y.createElement(Ga, {
    prefixCls: K,
    className: bt,
    style: Pt
  }, o.icon) : /* @__PURE__ */ Y.createElement(Db, {
    existIcon: !!b,
    prefixCls: K,
    loading: pe,
    mount: _.current
  }), zt = p || p === 0 ? Mb(p, xt && te) : null;
  if (pt.href !== void 0)
    return ce(/* @__PURE__ */ Y.createElement("a", Object.assign({}, pt, {
      className: we(mt, {
        [`${K}-disabled`]: ye
      }),
      href: ye ? void 0 : pt.href,
      style: ot,
      onClick: R,
      ref: st,
      tabIndex: ye ? -1 : 0
    }), kt, zt));
  let Oe = /* @__PURE__ */ Y.createElement("button", Object.assign({}, W, {
    type: h,
    className: mt,
    style: ot,
    onClick: R,
    disabled: ye,
    ref: st
  }), kt, zt, I && /* @__PURE__ */ Y.createElement(A2, {
    prefixCls: K
  }));
  return Oo(F) || (Oe = /* @__PURE__ */ Y.createElement(Md, {
    component: "Button",
    disabled: pe
  }, Oe)), ce(Oe);
}), rs = k2;
rs.Group = jb;
rs.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (rs.displayName = "Button");
function N2(t, n, e) {
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, x = 0;
  function g() {
    u && clearTimeout(u);
  }
  function f(p) {
    var b = p || {}, w = b.upcomingOnly, E = w === void 0 ? !1 : w;
    g(), d = !E;
  }
  function m() {
    for (var p = arguments.length, b = new Array(p), w = 0; w < p; w++)
      b[w] = arguments[w];
    var E = this, T = Date.now() - x;
    if (d)
      return;
    function h() {
      x = Date.now(), n.apply(E, b);
    }
    function $() {
      u = void 0;
    }
    !a && l && !u && h(), g(), l === void 0 && T > t ? a ? (x = Date.now(), i || (u = setTimeout(l ? $ : h, t))) : h() : i !== !0 && (u = setTimeout(l ? $ : h, l === void 0 ? t - T : t));
  }
  return m.cancel = f, m;
}
function j2(t, n, e) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return N2(t, n, {
    debounceMode: i !== !1
  });
}
function vu(t) {
  return ["small", "middle", "large"].includes(t);
}
const Xd = ["wrap", "nowrap", "wrap-reverse"], Yd = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Kd = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], L2 = (t, n) => {
  const e = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${t}-wrap-${e}`]: e && Xd.includes(e)
  };
}, M2 = (t, n) => {
  const e = {};
  return Kd.forEach((r) => {
    e[`${t}-align-${r}`] = n.align === r;
  }), e[`${t}-align-stretch`] = !n.align && !!n.vertical, e;
}, D2 = (t, n) => {
  const e = {};
  return Yd.forEach((r) => {
    e[`${t}-justify-${r}`] = n.justify === r;
  }), e;
};
function B2(t, n) {
  return we(Object.assign(Object.assign(Object.assign({}, L2(t, n)), M2(t, n)), D2(t, n)));
}
const H2 = (t) => {
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
}, z2 = (t) => {
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
}, F2 = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return Xd.forEach((r) => {
    e[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), e;
}, V2 = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return Kd.forEach((r) => {
    e[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), e;
}, U2 = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return Yd.forEach((r) => {
    e[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, q2 = () => ({}), W2 = Gi("Flex", (t) => {
  const {
    paddingXS: n,
    padding: e,
    paddingLG: r
  } = t, o = An(t, {
    flexGapSM: n,
    flexGap: e,
    flexGapLG: r
  });
  return [H2(o), z2(o), F2(o), V2(o), U2(o)];
}, q2, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var G2 = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const Jd = /* @__PURE__ */ Y.forwardRef((t, n) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = t, d = G2(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: x,
    direction: g,
    getPrefixCls: f
  } = Y.useContext(Yt), m = f("flex", e), [p, b, w] = W2(m), E = l ?? (x == null ? void 0 : x.vertical), T = we(o, r, x == null ? void 0 : x.className, m, b, w, B2(m, t), {
    [`${m}-rtl`]: g === "rtl",
    [`${m}-gap-${a}`]: vu(a),
    [`${m}-vertical`]: E
  }), h = Object.assign(Object.assign({}, x == null ? void 0 : x.style), i);
  return s && (h.flex = s), a && !vu(a) && (h.gap = a), p(/* @__PURE__ */ Y.createElement(u, Object.assign({
    ref: n,
    className: T,
    style: h
  }, jd(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (Jd.displayName = "Flex");
const si = 100, Qd = si / 5, Zd = si / 2 - Qd / 2, zs = Zd * 2 * Math.PI, bu = 50, yu = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ O.createElement("circle", {
    className: we(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: Zd,
    cx: bu,
    cy: bu,
    strokeWidth: Qd,
    style: e
  });
}, X2 = (t) => {
  let {
    percent: n,
    prefixCls: e
  } = t;
  const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = O.useState(!1);
  yc(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${zs / 4}`,
    strokeDasharray: `${zs * c / 100} ${zs * (100 - c) / 100}`
  };
  return /* @__PURE__ */ O.createElement("span", {
    className: we(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ O.createElement("svg", {
    viewBox: `0 0 ${si} ${si}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ O.createElement(yu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ O.createElement(yu, {
    dotClassName: r,
    style: l
  })));
};
function Y2(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("span", {
    className: we(o, e > 0 && i)
  }, /* @__PURE__ */ O.createElement("span", {
    className: we(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ O.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ O.createElement(X2, {
    prefixCls: n,
    percent: e
  }));
}
function K2(t) {
  const {
    prefixCls: n,
    indicator: e,
    percent: r
  } = t, o = `${n}-dot`;
  return e && /* @__PURE__ */ O.isValidElement(e) ? $c(e, {
    className: we(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ O.createElement(Y2, {
    prefixCls: n,
    percent: r
  });
}
const J2 = new Ff("antSpinMove", {
  to: {
    opacity: 1
  }
}), Q2 = new Ff("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Z2 = (t) => {
  const {
    componentCls: n,
    calc: e
  } = t;
  return {
    [n]: Object.assign(Object.assign({}, ad(t)), {
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
          animationName: J2,
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
          animationName: Q2,
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
}, ey = (t) => {
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
}, ty = Gi("Spin", (t) => {
  const n = An(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [Z2(n)];
}, ey), ny = 200, _u = [[30, 0.05], [70, 0.03], [96, 0.01]];
function ry(t, n) {
  const [e, r] = O.useState(0), o = O.useRef(null), i = n === "auto";
  return O.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < _u.length; c += 1) {
        const [l, u] = _u[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, ny)), () => {
    clearInterval(o.current);
  }), [i, t]), i ? e : n;
}
var oy = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
let eh;
function iy(t, n) {
  return !!t && !!n && !Number.isNaN(Number(n));
}
const Br = (t) => {
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
    style: u,
    children: d,
    fullscreen: x = !1,
    indicator: g,
    percent: f
  } = t, m = oy(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: b,
    className: w,
    style: E,
    indicator: T
  } = Tc("spin"), h = p("spin", e), [$, C, L] = ty(h), [D, W] = O.useState(() => r && !iy(r, o)), re = ry(D, f);
  O.useEffect(() => {
    if (r) {
      const P = j2(o, () => {
        W(!0);
      });
      return P(), () => {
        var M;
        (M = P == null ? void 0 : P.cancel) === null || M === void 0 || M.call(P);
      };
    }
    W(!1);
  }, [o, r]);
  const J = O.useMemo(() => typeof d < "u" && !x, [d, x]);
  if (process.env.NODE_ENV !== "production") {
    const P = Rn("Spin");
    process.env.NODE_ENV !== "production" && P(!c || J || x, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const F = we(h, w, {
    [`${h}-sm`]: a === "small",
    [`${h}-lg`]: a === "large",
    [`${h}-spinning`]: D,
    [`${h}-show-text`]: !!c,
    [`${h}-rtl`]: b === "rtl"
  }, i, !x && s, C, L), U = we(`${h}-container`, {
    [`${h}-blur`]: D
  }), Q = (n = g ?? T) !== null && n !== void 0 ? n : eh, j = Object.assign(Object.assign({}, E), u), k = /* @__PURE__ */ O.createElement("div", Object.assign({}, m, {
    style: j,
    className: F,
    "aria-live": "polite",
    "aria-busy": D
  }), /* @__PURE__ */ O.createElement(K2, {
    prefixCls: h,
    indicator: Q,
    percent: re
  }), c && (J || x) ? /* @__PURE__ */ O.createElement("div", {
    className: `${h}-text`
  }, c) : null);
  return $(J ? /* @__PURE__ */ O.createElement("div", Object.assign({}, m, {
    className: we(`${h}-nested-loading`, l, C, L)
  }), D && /* @__PURE__ */ O.createElement("div", {
    key: "loading"
  }, k), /* @__PURE__ */ O.createElement("div", {
    className: U,
    key: "container"
  }, d)) : x ? /* @__PURE__ */ O.createElement("div", {
    className: we(`${h}-fullscreen`, {
      [`${h}-fullscreen-show`]: D
    }, s, C, L)
  }, k) : k);
};
Br.setDefaultIndicator = (t) => {
  eh = t;
};
process.env.NODE_ENV !== "production" && (Br.displayName = "Spin");
function th(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: sy } = Object.prototype, { getPrototypeOf: kc } = Object, { iterator: os, toStringTag: nh } = Symbol, is = /* @__PURE__ */ ((t) => (n) => {
  const e = sy.call(n);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Kt = (t) => (t = t.toLowerCase(), (n) => is(n) === t), ss = (t) => (n) => typeof n === t, { isArray: yr } = Array, lr = ss("undefined");
function no(t) {
  return t !== null && !lr(t) && t.constructor !== null && !lr(t.constructor) && Ot(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const rh = Kt("ArrayBuffer");
function ay(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && rh(t.buffer), n;
}
const cy = ss("string"), Ot = ss("function"), oh = ss("number"), ro = (t) => t !== null && typeof t == "object", ly = (t) => t === !0 || t === !1, qo = (t) => {
  if (is(t) !== "object")
    return !1;
  const n = kc(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(nh in t) && !(os in t);
}, uy = (t) => {
  if (!ro(t) || no(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, fy = Kt("Date"), dy = Kt("File"), hy = Kt("Blob"), xy = Kt("FileList"), py = (t) => ro(t) && Ot(t.pipe), my = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || Ot(t.append) && ((n = is(t)) === "formdata" || // detect form-data instance
  n === "object" && Ot(t.toString) && t.toString() === "[object FormData]"));
}, gy = Kt("URLSearchParams"), [vy, by, yy, _y] = ["ReadableStream", "Request", "Response", "Headers"].map(Kt), Sy = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oo(t, n, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), yr(t))
    for (r = 0, o = t.length; r < o; r++)
      n.call(null, t[r], r, t);
  else {
    if (no(t))
      return;
    const i = e ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, t[a], a, t);
  }
}
function ih(t, n) {
  if (no(t))
    return null;
  n = n.toLowerCase();
  const e = Object.keys(t);
  let r = e.length, o;
  for (; r-- > 0; )
    if (o = e[r], n === o.toLowerCase())
      return o;
  return null;
}
const jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, sh = (t) => !lr(t) && t !== jn;
function Xa() {
  const { caseless: t, skipUndefined: n } = sh(this) && this || {}, e = {}, r = (o, i) => {
    const s = t && ih(e, i) || i;
    qo(e[s]) && qo(o) ? e[s] = Xa(e[s], o) : qo(o) ? e[s] = Xa({}, o) : yr(o) ? e[s] = o.slice() : (!n || !lr(o)) && (e[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && oo(arguments[o], r);
  return e;
}
const wy = (t, n, e, { allOwnKeys: r } = {}) => (oo(n, (o, i) => {
  e && Ot(o) ? t[i] = th(o, e) : t[i] = o;
}, { allOwnKeys: r }), t), Cy = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ey = (t, n, e, r) => {
  t.prototype = Object.create(n.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: n.prototype
  }), e && Object.assign(t.prototype, e);
}, Oy = (t, n, e, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, t == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, n)) && !a[s] && (n[s] = t[s], a[s] = !0);
    t = e !== !1 && kc(t);
  } while (t && (!e || e(t, n)) && t !== Object.prototype);
  return n;
}, Ty = (t, n, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= n.length;
  const r = t.indexOf(n, e);
  return r !== -1 && r === e;
}, Ry = (t) => {
  if (!t) return null;
  if (yr(t)) return t;
  let n = t.length;
  if (!oh(n)) return null;
  const e = new Array(n);
  for (; n-- > 0; )
    e[n] = t[n];
  return e;
}, Ay = /* @__PURE__ */ ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && kc(Uint8Array)), $y = (t, n) => {
  const r = (t && t[os]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(t, i[0], i[1]);
  }
}, Iy = (t, n) => {
  let e;
  const r = [];
  for (; (e = t.exec(n)) !== null; )
    r.push(e);
  return r;
}, Py = Kt("HTMLFormElement"), ky = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Su = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), Ny = Kt("RegExp"), ah = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  oo(e, (o, i) => {
    let s;
    (s = n(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, jy = (t) => {
  ah(t, (n, e) => {
    if (Ot(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (Ot(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, Ly = (t, n) => {
  const e = {}, r = (o) => {
    o.forEach((i) => {
      e[i] = !0;
    });
  };
  return yr(t) ? r(t) : r(String(t).split(n)), e;
}, My = () => {
}, Dy = (t, n) => t != null && Number.isFinite(t = +t) ? t : n;
function By(t) {
  return !!(t && Ot(t.append) && t[nh] === "FormData" && t[os]);
}
const Hy = (t) => {
  const n = new Array(10), e = (r, o) => {
    if (ro(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (no(r))
        return r;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = yr(r) ? [] : {};
        return oo(r, (s, a) => {
          const c = e(s, o + 1);
          !lr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return e(t, 0);
}, zy = Kt("AsyncFunction"), Fy = (t) => t && (ro(t) || Ot(t)) && Ot(t.then) && Ot(t.catch), ch = ((t, n) => t ? setImmediate : n ? ((e, r) => (jn.addEventListener("message", ({ source: o, data: i }) => {
  o === jn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), jn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  Ot(jn.postMessage)
), Vy = typeof queueMicrotask < "u" ? queueMicrotask.bind(jn) : typeof process < "u" && process.nextTick || ch, Uy = (t) => t != null && Ot(t[os]), N = {
  isArray: yr,
  isArrayBuffer: rh,
  isBuffer: no,
  isFormData: my,
  isArrayBufferView: ay,
  isString: cy,
  isNumber: oh,
  isBoolean: ly,
  isObject: ro,
  isPlainObject: qo,
  isEmptyObject: uy,
  isReadableStream: vy,
  isRequest: by,
  isResponse: yy,
  isHeaders: _y,
  isUndefined: lr,
  isDate: fy,
  isFile: dy,
  isBlob: hy,
  isRegExp: Ny,
  isFunction: Ot,
  isStream: py,
  isURLSearchParams: gy,
  isTypedArray: Ay,
  isFileList: xy,
  forEach: oo,
  merge: Xa,
  extend: wy,
  trim: Sy,
  stripBOM: Cy,
  inherits: Ey,
  toFlatObject: Oy,
  kindOf: is,
  kindOfTest: Kt,
  endsWith: Ty,
  toArray: Ry,
  forEachEntry: $y,
  matchAll: Iy,
  isHTMLForm: Py,
  hasOwnProperty: Su,
  hasOwnProp: Su,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ah,
  freezeMethods: jy,
  toObjectSet: Ly,
  toCamelCase: ky,
  noop: My,
  toFiniteNumber: Dy,
  findKey: ih,
  global: jn,
  isContextDefined: sh,
  isSpecCompliantForm: By,
  toJSONObject: Hy,
  isAsyncFn: zy,
  isThenable: Fy,
  setImmediate: ch,
  asap: Vy,
  isIterable: Uy
};
function ue(t, n, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
N.inherits(ue, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const lh = ue.prototype, uh = {};
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
  uh[t] = { value: t };
});
Object.defineProperties(ue, uh);
Object.defineProperty(lh, "isAxiosError", { value: !0 });
ue.from = (t, n, e, r, o, i) => {
  const s = Object.create(lh);
  N.toFlatObject(t, s, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = t && t.message ? t.message : "Error", c = n == null && t ? t.code : n;
  return ue.call(s, a, c, e, r, o), t && s.cause == null && Object.defineProperty(s, "cause", { value: t, configurable: !0 }), s.name = t && t.name || "Error", i && Object.assign(s, i), s;
};
const qy = null;
function Ya(t) {
  return N.isPlainObject(t) || N.isArray(t);
}
function fh(t) {
  return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function wu(t, n, e) {
  return t ? t.concat(n).map(function(o, i) {
    return o = fh(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : n;
}
function Wy(t) {
  return N.isArray(t) && !t.some(Ya);
}
const Gy = N.toFlatObject(N, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function as(t, n, e) {
  if (!N.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), e = N.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !N.isUndefined(p[m]);
  });
  const r = e.metaTokens, o = e.visitor || u, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(n);
  if (!N.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (N.isDate(f))
      return f.toISOString();
    if (N.isBoolean(f))
      return f.toString();
    if (!c && N.isBlob(f))
      throw new ue("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(f) || N.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, m, p) {
    let b = f;
    if (f && !p && typeof f == "object") {
      if (N.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (N.isArray(f) && Wy(f) || (N.isFileList(f) || N.endsWith(m, "[]")) && (b = N.toArray(f)))
        return m = fh(m), b.forEach(function(E, T) {
          !(N.isUndefined(E) || E === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? wu([m], T, i) : s === null ? m : m + "[]",
            l(E)
          );
        }), !1;
    }
    return Ya(f) ? !0 : (n.append(wu(p, m, i), l(f)), !1);
  }
  const d = [], x = Object.assign(Gy, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ya
  });
  function g(f, m) {
    if (!N.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(f), N.forEach(f, function(b, w) {
        (!(N.isUndefined(b) || b === null) && o.call(
          n,
          b,
          N.isString(w) ? w.trim() : w,
          m,
          x
        )) === !0 && g(b, m ? m.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), n;
}
function Cu(t) {
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
function Nc(t, n) {
  this._pairs = [], t && as(t, this, n);
}
const dh = Nc.prototype;
dh.append = function(n, e) {
  this._pairs.push([n, e]);
};
dh.toString = function(n) {
  const e = n ? function(r) {
    return n.call(this, r, Cu);
  } : Cu;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function Xy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function hh(t, n, e) {
  if (!n)
    return t;
  const r = e && e.encode || Xy;
  N.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(n, e) : i = N.isURLSearchParams(n) ? n.toString() : new Nc(n, e).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Eu {
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
    N.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const xh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yy = typeof URLSearchParams < "u" ? URLSearchParams : Nc, Ky = typeof FormData < "u" ? FormData : null, Jy = typeof Blob < "u" ? Blob : null, Qy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yy,
    FormData: Ky,
    Blob: Jy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, jc = typeof window < "u" && typeof document < "u", Ka = typeof navigator == "object" && navigator || void 0, Zy = jc && (!Ka || ["ReactNative", "NativeScript", "NS"].indexOf(Ka.product) < 0), e_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", t_ = jc && window.location.href || "http://localhost", n_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: jc,
  hasStandardBrowserEnv: Zy,
  hasStandardBrowserWebWorkerEnv: e_,
  navigator: Ka,
  origin: t_
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...n_,
  ...Qy
};
function r_(t, n) {
  return as(t, new vt.classes.URLSearchParams(), {
    visitor: function(e, r, o, i) {
      return vt.isNode && N.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...n
  });
}
function o_(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function i_(t) {
  const n = {}, e = Object.keys(t);
  let r;
  const o = e.length;
  let i;
  for (r = 0; r < o; r++)
    i = e[r], n[i] = t[i];
  return n;
}
function ph(t) {
  function n(e, r, o, i) {
    let s = e[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= e.length;
    return s = !s && N.isArray(o) ? o.length : s, c ? (N.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !N.isObject(o[s])) && (o[s] = []), n(e, r, o[s], i) && N.isArray(o[s]) && (o[s] = i_(o[s])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const e = {};
    return N.forEachEntry(t, (r, o) => {
      n(o_(r), o, e, 0);
    }), e;
  }
  return null;
}
function s_(t, n, e) {
  if (N.isString(t))
    try {
      return (n || JSON.parse)(t), N.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(t);
}
const io = {
  transitional: xh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, e) {
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = N.isObject(n);
    if (i && N.isHTMLForm(n) && (n = new FormData(n)), N.isFormData(n))
      return o ? JSON.stringify(ph(n)) : n;
    if (N.isArrayBuffer(n) || N.isBuffer(n) || N.isStream(n) || N.isFile(n) || N.isBlob(n) || N.isReadableStream(n))
      return n;
    if (N.isArrayBufferView(n))
      return n.buffer;
    if (N.isURLSearchParams(n))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return r_(n, this.formSerializer).toString();
      if ((a = N.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return as(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (e.setContentType("application/json", !1), s_(n)) : n;
  }],
  transformResponse: [function(n) {
    const e = this.transitional || io.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (N.isResponse(n) || N.isReadableStream(n))
      return n;
    if (n && N.isString(n) && (r && !this.responseType || o)) {
      const s = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(n, this.parseReviver);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? ue.from(a, ue.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  io.headers[t] = {};
});
const a_ = N.toObjectSet([
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
]), c_ = (t) => {
  const n = {};
  let e, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), e = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!e || n[e] && a_[e]) && (e === "set-cookie" ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r);
  }), n;
}, Ou = Symbol("internals");
function $r(t) {
  return t && String(t).trim().toLowerCase();
}
function Wo(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Wo) : String(t);
}
function l_(t) {
  const n = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(t); )
    n[r[1]] = r[2];
  return n;
}
const u_ = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Fs(t, n, e, r, o) {
  if (N.isFunction(r))
    return r.call(this, n, e);
  if (o && (n = e), !!N.isString(n)) {
    if (N.isString(r))
      return n.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(n);
  }
}
function f_(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function d_(t, n) {
  const e = N.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + e, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let Tt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, e, r) {
    const o = this;
    function i(a, c, l) {
      const u = $r(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = N.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Wo(a));
    }
    const s = (a, c) => N.forEach(a, (l, u) => i(l, u, c));
    if (N.isPlainObject(n) || n instanceof this.constructor)
      s(n, e);
    else if (N.isString(n) && (n = n.trim()) && !u_(n))
      s(c_(n), e);
    else if (N.isObject(n) && N.isIterable(n)) {
      let a = {}, c, l;
      for (const u of n) {
        if (!N.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? N.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, e);
    } else
      n != null && i(e, n, r);
    return this;
  }
  get(n, e) {
    if (n = $r(n), n) {
      const r = N.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!e)
          return o;
        if (e === !0)
          return l_(o);
        if (N.isFunction(e))
          return e.call(this, o, r);
        if (N.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, e) {
    if (n = $r(n), n) {
      const r = N.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!e || Fs(this, this[r], r, e)));
    }
    return !1;
  }
  delete(n, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = $r(s), s) {
        const a = N.findKey(r, s);
        a && (!e || Fs(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return N.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const i = e[r];
      (!n || Fs(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const e = this, r = {};
    return N.forEach(this, (o, i) => {
      const s = N.findKey(r, i);
      if (s) {
        e[s] = Wo(o), delete e[i];
        return;
      }
      const a = n ? f_(i) : String(i).trim();
      a !== i && delete e[i], e[a] = Wo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const e = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = n && N.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Ou] = this[Ou] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = $r(s);
      r[a] || (d_(o, s), r[a] = !0);
    }
    return N.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
Tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Tt.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
N.freezeMethods(Tt);
function Vs(t, n) {
  const e = this || io, r = n || e, o = Tt.from(r.headers);
  let i = r.data;
  return N.forEach(t, function(a) {
    i = a.call(e, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function mh(t) {
  return !!(t && t.__CANCEL__);
}
function _r(t, n, e) {
  ue.call(this, t ?? "canceled", ue.ERR_CANCELED, n, e), this.name = "CanceledError";
}
N.inherits(_r, ue, {
  __CANCEL__: !0
});
function gh(t, n, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? t(e) : n(new ue(
    "Request failed with status code " + e.status,
    [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function h_(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n && n[1] || "";
}
function x_(t, n) {
  t = t || 10;
  const e = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), e[o] = c, r[o] = l;
    let d = i, x = 0;
    for (; d !== o; )
      x += e[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < n)
      return;
    const g = u && l - u;
    return g ? Math.round(x * 1e3 / g) : void 0;
  };
}
function p_(t, n) {
  let e = 0, r = 1e3 / n, o, i;
  const s = (l, u = Date.now()) => {
    e = u, o = null, i && (clearTimeout(i), i = null), t(...l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - e;
    d >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const ai = (t, n, e = 3) => {
  let r = 0;
  const o = x_(50, 250);
  return p_((i) => {
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
    t(d);
  }, e);
}, Tu = (t, n) => {
  const e = t != null;
  return [(r) => n[0]({
    lengthComputable: e,
    total: t,
    loaded: r
  }), n[1]];
}, Ru = (t) => (...n) => N.asap(() => t(...n)), m_ = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, vt.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, g_ = vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, e, r, o, i, s) {
      if (typeof document > "u") return;
      const a = [`${t}=${encodeURIComponent(n)}`];
      N.isNumber(e) && a.push(`expires=${new Date(e).toUTCString()}`), N.isString(r) && a.push(`path=${r}`), N.isString(o) && a.push(`domain=${o}`), i === !0 && a.push("secure"), N.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const n = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return n ? decodeURIComponent(n[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
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
function v_(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function b_(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function vh(t, n, e) {
  let r = !v_(n);
  return t && (r || e == !1) ? b_(t, n) : n;
}
const Au = (t) => t instanceof Tt ? { ...t } : t;
function Un(t, n) {
  n = n || {};
  const e = {};
  function r(l, u, d, x) {
    return N.isPlainObject(l) && N.isPlainObject(u) ? N.merge.call({ caseless: x }, l, u) : N.isPlainObject(u) ? N.merge({}, u) : N.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, x) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(l))
        return r(void 0, l, d, x);
    } else return r(l, u, d, x);
  }
  function i(l, u) {
    if (!N.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in n)
      return r(l, u);
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
    headers: (l, u, d) => o(Au(l), Au(u), d, !0)
  };
  return N.forEach(Object.keys({ ...t, ...n }), function(u) {
    const d = c[u] || o, x = d(t[u], n[u], u);
    N.isUndefined(x) && d !== a || (e[u] = x);
  }), e;
}
const bh = (t) => {
  const n = Un({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  if (n.headers = s = Tt.from(s), n.url = hh(vh(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), N.isFormData(e)) {
    if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (N.isFunction(e.getHeaders)) {
      const c = e.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, d]) => {
        l.includes(u.toLowerCase()) && s.set(u, d);
      });
    }
  }
  if (vt.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(n)), r || r !== !1 && m_(n.url))) {
    const c = o && i && g_.read(i);
    c && s.set(o, c);
  }
  return n;
}, y_ = typeof XMLHttpRequest < "u", __ = y_ && function(t) {
  return new Promise(function(e, r) {
    const o = bh(t);
    let i = o.data;
    const s = Tt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, x, g, f;
    function m() {
      g && g(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function b() {
      if (!p)
        return;
      const E = Tt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), h = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: E,
        config: t,
        request: p
      };
      gh(function(C) {
        e(C), m();
      }, function(C) {
        r(C), m();
      }, h), p = null;
    }
    "onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, p.onabort = function() {
      p && (r(new ue("Request aborted", ue.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function(T) {
      const h = T && T.message ? T.message : "Network Error", $ = new ue(h, ue.ERR_NETWORK, t, p);
      $.event = T || null, r($), p = null;
    }, p.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const h = o.transitional || xh;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new ue(
        T,
        h.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
        t,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && N.forEach(s.toJSON(), function(T, h) {
      p.setRequestHeader(h, T);
    }), N.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([x, f] = ai(l, !0), p.addEventListener("progress", x)), c && p.upload && ([d, g] = ai(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (u = (E) => {
      p && (r(!E || E.type ? new _r(null, t, p) : E), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = h_(o.url);
    if (w && vt.protocols.indexOf(w) === -1) {
      r(new ue("Unsupported protocol " + w + ":", ue.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, S_ = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof ue ? u : new _r(u instanceof Error ? u.message : u));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new ue(`timeout ${n} of ms exceeded`, ue.ETIMEDOUT));
    }, n);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => N.asap(a), c;
  }
}, w_ = function* (t, n) {
  let e = t.byteLength;
  if (e < n) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < e; )
    o = r + n, yield t.slice(r, o), r = o;
}, C_ = async function* (t, n) {
  for await (const e of E_(t))
    yield* w_(e, n);
}, E_ = async function* (t) {
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
}, $u = (t, n, e, r) => {
  const o = C_(t, n);
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
        if (e) {
          let x = i += d;
          e(x);
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
}, Iu = 64 * 1024, { isFunction: To } = N, O_ = (({ Request: t, Response: n }) => ({
  Request: t,
  Response: n
}))(N.global), {
  ReadableStream: Pu,
  TextEncoder: ku
} = N.global, Nu = (t, ...n) => {
  try {
    return !!t(...n);
  } catch {
    return !1;
  }
}, T_ = (t) => {
  t = N.merge.call({
    skipUndefined: !0
  }, O_, t);
  const { fetch: n, Request: e, Response: r } = t, o = n ? To(n) : typeof fetch == "function", i = To(e), s = To(r);
  if (!o)
    return !1;
  const a = o && To(Pu), c = o && (typeof ku == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new ku()) : async (f) => new Uint8Array(await new e(f).arrayBuffer())), l = i && a && Nu(() => {
    let f = !1;
    const m = new e(vt.origin, {
      body: new Pu(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), u = s && a && Nu(() => N.isReadableStream(new r("").body)), d = {
    stream: u && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !d[f] && (d[f] = (m, p) => {
      let b = m && m[f];
      if (b)
        return b.call(m);
      throw new ue(`Response type '${f}' is not supported`, ue.ERR_NOT_SUPPORT, p);
    });
  });
  const x = async (f) => {
    if (f == null)
      return 0;
    if (N.isBlob(f))
      return f.size;
    if (N.isSpecCompliantForm(f))
      return (await new e(vt.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(f) || N.isArrayBuffer(f))
      return f.byteLength;
    if (N.isURLSearchParams(f) && (f = f + ""), N.isString(f))
      return (await c(f)).byteLength;
  }, g = async (f, m) => {
    const p = N.toFiniteNumber(f.getContentLength());
    return p ?? x(m);
  };
  return async (f) => {
    let {
      url: m,
      method: p,
      data: b,
      signal: w,
      cancelToken: E,
      timeout: T,
      onDownloadProgress: h,
      onUploadProgress: $,
      responseType: C,
      headers: L,
      withCredentials: D = "same-origin",
      fetchOptions: W
    } = bh(f), re = n || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let J = S_([w, E && E.toAbortSignal()], T), F = null;
    const U = J && J.unsubscribe && (() => {
      J.unsubscribe();
    });
    let Q;
    try {
      if ($ && l && p !== "get" && p !== "head" && (Q = await g(L, b)) !== 0) {
        let z = new e(m, {
          method: "POST",
          body: b,
          duplex: "half"
        }), q;
        if (N.isFormData(b) && (q = z.headers.get("content-type")) && L.setContentType(q), z.body) {
          const [te, K] = Tu(
            Q,
            ai(Ru($))
          );
          b = $u(z.body, Iu, te, K);
        }
      }
      N.isString(D) || (D = D ? "include" : "omit");
      const j = i && "credentials" in e.prototype, k = {
        ...W,
        signal: J,
        method: p.toUpperCase(),
        headers: L.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: j ? D : void 0
      };
      F = i && new e(m, k);
      let P = await (i ? re(F, W) : re(m, k));
      const M = u && (C === "stream" || C === "response");
      if (u && (h || M && U)) {
        const z = {};
        ["status", "statusText", "headers"].forEach((ce) => {
          z[ce] = P[ce];
        });
        const q = N.toFiniteNumber(P.headers.get("content-length")), [te, K] = h && Tu(
          q,
          ai(Ru(h), !0)
        ) || [];
        P = new r(
          $u(P.body, Iu, te, () => {
            K && K(), U && U();
          }),
          z
        );
      }
      C = C || "text";
      let V = await d[N.findKey(d, C) || "text"](P, f);
      return !M && U && U(), await new Promise((z, q) => {
        gh(z, q, {
          data: V,
          headers: Tt.from(P.headers),
          status: P.status,
          statusText: P.statusText,
          config: f,
          request: F
        });
      });
    } catch (j) {
      throw U && U(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new ue("Network Error", ue.ERR_NETWORK, f, F),
        {
          cause: j.cause || j
        }
      ) : ue.from(j, j && j.code, f, F);
    }
  };
}, R_ = /* @__PURE__ */ new Map(), yh = (t) => {
  let n = t && t.env || {};
  const { fetch: e, Request: r, Response: o } = n, i = [
    r,
    o,
    e
  ];
  let s = i.length, a = s, c, l, u = R_;
  for (; a--; )
    c = i[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : T_(n)), u = l;
  return l;
};
yh();
const Lc = {
  http: qy,
  xhr: __,
  fetch: {
    get: yh
  }
};
N.forEach(Lc, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const ju = (t) => `- ${t}`, A_ = (t) => N.isFunction(t) || t === null || t === !1;
function $_(t, n) {
  t = N.isArray(t) ? t : [t];
  const { length: e } = t;
  let r, o;
  const i = {};
  for (let s = 0; s < e; s++) {
    r = t[s];
    let a;
    if (o = r, !A_(r) && (o = Lc[(a = String(r)).toLowerCase()], o === void 0))
      throw new ue(`Unknown adapter '${a}'`);
    if (o && (N.isFunction(o) || (o = o.get(n))))
      break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = e ? s.length > 1 ? `since :
` + s.map(ju).join(`
`) : " " + ju(s[0]) : "as no adapter specified";
    throw new ue(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const _h = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: $_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Lc
};
function Us(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new _r(null, t);
}
function Lu(t) {
  return Us(t), t.headers = Tt.from(t.headers), t.data = Vs.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), _h.getAdapter(t.adapter || io.adapter, t)(t).then(function(r) {
    return Us(t), r.data = Vs.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Tt.from(r.headers), r;
  }, function(r) {
    return mh(r) || (Us(t), r && r.response && (r.response.data = Vs.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Tt.from(r.response.headers))), Promise.reject(r);
  });
}
const Sh = "1.13.2", cs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  cs[t] = function(r) {
    return typeof r === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const Mu = {};
cs.transitional = function(n, e, r) {
  function o(i, s) {
    return "[Axios v" + Sh + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new ue(
        o(s, " has been removed" + (e ? " in " + e : "")),
        ue.ERR_DEPRECATED
      );
    return e && !Mu[s] && (Mu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
cs.spelling = function(n) {
  return (e, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function I_(t, n, e) {
  if (typeof t != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = t[i], c = a === void 0 || s(a, i, t);
      if (c !== !0)
        throw new ue("option " + i + " must be " + c, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new ue("Unknown option " + i, ue.ERR_BAD_OPTION);
  }
}
const Go = {
  assertOptions: I_,
  validators: cs
}, Zt = Go.validators;
let zn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new Eu(),
      response: new Eu()
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
    typeof n == "string" ? (e = e || {}, e.url = n) : e = n || {}, e = Un(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: i } = e;
    r !== void 0 && Go.assertOptions(r, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), o != null && (N.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : Go.assertOptions(o, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Go.assertOptions(e, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let s = i && N.merge(
      i.common,
      i[e.method]
    );
    i && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), e.headers = Tt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(e) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, x;
    if (!c) {
      const f = [Lu.bind(this), void 0];
      for (f.unshift(...a), f.push(...l), x = f.length, u = Promise.resolve(e); d < x; )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    x = a.length;
    let g = e;
    for (; d < x; ) {
      const f = a[d++], m = a[d++];
      try {
        g = f(g);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Lu.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, x = l.length; d < x; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(n) {
    n = Un(this.defaults, n);
    const e = vh(n.baseURL, n.url, n.allowAbsoluteUrls);
    return hh(e, n.params, n.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(n) {
  zn.prototype[n] = function(e, r) {
    return this.request(Un(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(n) {
  function e(r) {
    return function(i, s, a) {
      return this.request(Un(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  zn.prototype[n] = e(), zn.prototype[n + "Form"] = e(!0);
});
let P_ = class wh {
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
      r.reason || (r.reason = new _r(i, s, a), e(r.reason));
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
      token: new wh(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function k_(t) {
  return function(e) {
    return t.apply(null, e);
  };
}
function N_(t) {
  return N.isObject(t) && t.isAxiosError === !0;
}
const Ja = {
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
Object.entries(Ja).forEach(([t, n]) => {
  Ja[n] = t;
});
function Ch(t) {
  const n = new zn(t), e = th(zn.prototype.request, n);
  return N.extend(e, zn.prototype, n, { allOwnKeys: !0 }), N.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return Ch(Un(t, o));
  }, e;
}
const Ye = Ch(io);
Ye.Axios = zn;
Ye.CanceledError = _r;
Ye.CancelToken = P_;
Ye.isCancel = mh;
Ye.VERSION = Sh;
Ye.toFormData = as;
Ye.AxiosError = ue;
Ye.Cancel = Ye.CanceledError;
Ye.all = function(n) {
  return Promise.all(n);
};
Ye.spread = k_;
Ye.isAxiosError = N_;
Ye.mergeConfig = Un;
Ye.AxiosHeaders = Tt;
Ye.formToJSON = (t) => ph(N.isHTMLForm(t) ? new FormData(t) : t);
Ye.getAdapter = _h.getAdapter;
Ye.HttpStatusCode = Ja;
Ye.default = Ye;
const {
  Axios: uS,
  AxiosError: fS,
  CanceledError: dS,
  isCancel: hS,
  CancelToken: xS,
  VERSION: pS,
  all: mS,
  Cancel: gS,
  isAxiosError: vS,
  spread: bS,
  toFormData: yS,
  AxiosHeaders: _S,
  HttpStatusCode: SS,
  formToJSON: wS,
  getAdapter: CS,
  mergeConfig: ES
} = Ye, un = li;
(function(t, n) {
  const e = li, r = t();
  for (; ; )
    try {
      if (parseInt(e(199)) / 1 * (-parseInt(e(198)) / 2) + parseInt(e(200)) / 3 * (-parseInt(e(205)) / 4) + parseInt(e(189)) / 5 * (-parseInt(e(213)) / 6) + parseInt(e(210)) / 7 + parseInt(e(202)) / 8 * (-parseInt(e(193)) / 9) + parseInt(e(201)) / 10 * (parseInt(e(211)) / 11) + parseInt(e(185)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 155543);
function ci() {
  const t = ["defaults", "/api/v1/cl", "GET", "POST", "107919lwumez", "231oaDekg", "withCreden", "666OMwFea", "DELETE", "6011292ZIoLzP", "error", "applicatio", "ient", "11520ShmTqV", "PUT", "n/json", "data", "13743zIyUVS", "Content-Ty", "message", "tials", "PATCH", "2494XBUgGe", "39yNorAX", "3453PRBHht", "136030KRlYRw", "936eWCrrD", "params", "response", "568PcUvWC"];
  return ci = function() {
    return t;
  }, ci();
}
un(207) + un(188);
function li(t, n) {
  const e = ci();
  return li = function(r, o) {
    return r = r - 184, e[r];
  }, li(t, n);
}
Ye[un(206)][un(212) + un(196)] = !0;
const j_ = async (t) => {
  var e, r, o, i;
  const n = un;
  try {
    return (await Ye(t))[n(192)];
  } catch (s) {
    throw ((r = (e = s[n(204)]) == null ? void 0 : e[n(192)]) == null ? void 0 : r[n(195)]) || ((i = (o = s[n(204)]) == null ? void 0 : o[n(192)]) == null ? void 0 : i[n(186)]) || s[n(195)];
  }
}, L_ = {};
L_[un(194) + "pe"] = un(187) + un(191);
const Me = ui;
(function(t, n) {
  const e = ui, r = t();
  for (; ; )
    try {
      if (parseInt(e(387)) / 1 * (-parseInt(e(362)) / 2) + -parseInt(e(367)) / 3 * (parseInt(e(368)) / 4) + parseInt(e(373)) / 5 * (-parseInt(e(384)) / 6) + -parseInt(e(361)) / 7 * (-parseInt(e(366)) / 8) + -parseInt(e(365)) / 9 + parseInt(e(371)) / 10 * (-parseInt(e(374)) / 11) + -parseInt(e(391)) / 12 * (-parseInt(e(390)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fi, 717159);
const In = {};
In[Me(376)] = Me(381) + "E", In[Me(363)] = Me(369), In[Me(385)] = Me(377) + "N", In[Me(359)] = Me(381) + "E", In[Me(370)] = Me(369), In[Me(379)] = Me(377) + "N";
const qt = In, Qa = {};
Qa[Me(389)] = Me(369), Qa[Me(360)] = Me(377) + "N";
const M_ = Qa, D_ = Me(375), B_ = Me(380), H_ = Me(386) + Me(388);
function ui(t, n) {
  const e = fi();
  return ui = function(r, o) {
    return r = r - 359, e[r];
  }, ui(t, n);
}
const Eh = Me(372) + Me(382), z_ = Me(378) + Me(388);
function fi() {
  const t = ["touchend", "50pfkioH", "assistiveM", "30skyRlk", "870826aoRyCv", "moveEvent", "mousemove", "ACTION_DOW", "shortcutEv", "touchstart", "wheelEvent", "ACTION_MOV", "enuHide", "fullscreen", "670326mBNfok", "mousedown", "keyBoardEv", "410455wKxmES", "ent", "keyup", "143IwLQcd", "4072668QwKkXL", "touchmove", "keydown", "50148YNxUXD", "4AVUcac", "mouseup", "Event", "11281140xAGtOS", "416lkHfJa", "1554lCBIHV", "1916GdFaza", "ACTION_UP"];
  return fi = function() {
    return t;
  }, fi();
}
const F_ = Me(383) + Me(364);
(function(t, n) {
  const e = hi, r = t();
  for (; ; )
    try {
      if (parseInt(e(219)) / 1 * (parseInt(e(201)) / 2) + -parseInt(e(139)) / 3 * (parseInt(e(159)) / 4) + -parseInt(e(170)) / 5 + -parseInt(e(193)) / 6 * (-parseInt(e(145)) / 7) + -parseInt(e(225)) / 8 + -parseInt(e(184)) / 9 + -parseInt(e(142)) / 10 * (-parseInt(e(179)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(di, 384717);
function di() {
  const t = ["CkPGk", "dHyRX", "max", "SLSDv", "20LNggfL", "zwCuU", "addEventLi", "wNOum", "touchstart", "IjQhY", "tListener", "JkdQq", "preventDef", "key", "gcPJd", "3172570JDBmwE", "width", "keyAction", "aDTDz", "HCTDK", "DMgUH", "pageY", "arrowdown", "action", "15333527LpdfJP", "keydown", "qXtep", "ODE", "mousemove", "2803104BunacD", "wheelEvent", "offsetWidt", "KEYBOARD_T", "clientX", "arrowleft", "pageX", "ONhAG", "YwScx", "12JJAjmC", "touch", "dberr", "capslock", "toUpperCas", "focus", "JFqws", "toLowerCas", "6vBzXsT", "getBoundin", "includes", "readText", "passive", "shiftKey", "wySYY", "control", "typeKey", "gClientRec", "NgBrp", "now", "EXT", "mouse", "clientY", "NDYGJ", "lDYQp", "keyEvent", "115249QAKofz", "ault", "height", "forEach", "KEYBOARD_C", "meta_state", "3017600jJlDyU", "arrowup", "repeat", "sign", "touchend", "mousedown", "jAPHI", "touchEvent", "left", "PASTE_TEXT", "offsetHeig", "duration", "current", "dgIEf", "removeEven", "stener", "mXwCy", "backspace", "shift", "RQIOO", "COPY_TEXT", "ZnWzm", "ctrlKey", "touchmove", "Hcijz", "deltaY", "clipboard", "hkDkP", "103953XqaAIr", "enter", "mouseup", "10avaCaR", "type", "tab", "495033HCetfU", "MTway", "zJPvk", "showMenu", "top", "Hetap", "isDown", "jFpvu", "arrowright", "NbQzi"];
  return di = function() {
    return t;
  }, di();
}
const V_ = ({ isMobile: t, assistive: n, onRemoteEvent: e, canvasContent: r, canvasRef: o }) => {
  const i = hi, [s, a] = St(!1), c = ge(Date[i(212)]()), l = (g) => {
    const f = i;
    if (f(147) !== f(192)) {
      if (g[f(167) + f(220)](), !o[f(237)]) return;
      const m = o[f(237)], p = m[f(202) + f(210) + "t"]();
      let b = qt[g[f(143)]];
      if (n[f(151)] == !0 || n[f(148)] == !0) {
        b == qt[f(141)] && (f(211) === f(211) ? e(Eh, {}) : (_0x100ede[f(209)] = f(223) + f(182), _0x33cd0c[f(168)] = 66));
        return;
      }
      if (b == qt[f(230)] && a(!0), b != qt[f(230)] && s == !1) return;
      if (b == qt[f(141)])
        if (f(173) === f(173)) a(!1);
        else return;
      let w, E;
      if (g[f(143)][f(203)](f(194)))
        if (f(191) === f(169)) _0x568f65(!0);
        else {
          const { touches: W, changedTouches: re } = g, J = W[0] ?? re[0];
          w = J[f(190)] - p[f(233)], E = J[f(176)] - p[f(149)];
        }
      else g[f(143)][f(203)](f(214)) && (f(231) === f(231) ? (w = g[f(188)] - p[f(233)], E = g[f(215)] - p[f(149)]) : (_0x384f35 = _0x3cd39c[f(157)](1, _0x426658), _0x776684 = _0x1961ac[f(157)](1, _0x5b8f10), _0xc6215f = _0x57d90c[f(141)]));
      const T = 1, h = w < T || w > m[f(171)] - T, $ = E < T || E > m[f(221)] - T;
      (h || $) && (w = Math[f(157)](1, w), E = Math[f(157)](1, E), b = qt[f(141)]);
      const C = Date[f(212)](), L = C - c[f(237)];
      c[f(237)] = C;
      const D = {};
      D[f(178)] = f(232), D[f(172)] = b, D.x = w, D.y = E, D[f(171)] = p[f(171)], D[f(221)] = p[f(221)], D.ts = C, D[f(236)] = L, e(D_, D), m[f(198)]();
    } else {
      _0xdcb4a3 == _0x1f3ffa[f(141)] && _0xd1690(_0x5612c0, {});
      return;
    }
  }, u = (g) => {
    const f = i;
    if (g[f(167) + f(220)](), !o[f(237)])
      if (f(138) === f(175)) {
        const { touches: w, changedTouches: E } = _0x4d2744, T = w[0] ?? E[0];
        _0x2dfe6d = T[f(190)] - _0x205537[f(233)], _0x2ed356 = T[f(176)] - _0xe9c6b6[f(149)];
      } else return;
    const m = o[f(237)], p = Math[f(228)](g[f(136)]), b = m[f(202) + f(210) + "t"]();
    e(B_, { action: f(185), width: m[f(186) + "h"], height: m[f(235) + "ht"], x: g[f(188)] - b[f(233)], y: g[f(215)] - b[f(149)], delta: p, ts: Date[f(212)]() }), m[f(198)]();
  }, d = async (g) => {
    const f = i;
    if (f(158) === f(158)) {
      if (g[f(167) + f(220)](), !o[f(237)]) return;
      const m = o[f(237)], p = M_[g[f(143)]], b = g[f(168)][f(200) + "e"]();
      if (((h) => {
        const $ = f;
        return [$(208), $(129), $(196)][$(203)](h);
      })(b) == !0) return;
      const E = async () => {
        const h = f, $ = {};
        $[h(178)] = h(218), $[h(172)] = p, $[h(209)] = h(187) + h(213), $[h(168)] = g[h(168)], $[h(227)] = 0, $[h(224)] = 0;
        const C = $;
        if (g[h(133)] == !0)
          if (h(195) !== h(195)) _0x34045f[h(161) + h(126)](h(180), _0x29830c), [h(183), h(230), h(141)][h(222)]((L) => {
            const D = h;
            _0x566239[D(161) + D(126)](L, _0x4bb666);
          });
          else if (b == "c") {
            if (h(162) !== h(162)) return;
            C[h(209)] = h(131);
          } else
            b == "a" ? (C[h(209)] = h(223) + h(182), C[h(224)] = 4096, C[h(168)] = 29) : b == "v" && (h(127) !== h(174) ? (C[h(209)] = h(234), C[h(168)] = await navigator[h(137)][h(204)]()) : _0x44fadd(_0x928054, _0x46b5d4));
        else
          b == h(226) ? (C[h(209)] = h(223) + h(182), C[h(168)] = 19) : b == h(177) ? h(154) === h(238) ? _0x1668dc[h(206)] == !0 && (_0x5d7c9e[h(168)] = _0x55fff7[h(168)][h(197) + "e"]()) : (C[h(209)] = h(223) + h(182), C[h(168)] = 20) : b == h(189) ? (C[h(209)] = h(223) + h(182), C[h(168)] = 21) : b == h(153) ? (C[h(209)] = h(223) + h(182), C[h(168)] = 22) : b == h(128) ? h(217) === h(217) ? (C[h(209)] = h(223) + h(182), C[h(168)] = 67) : _0x586844(_0x4e89e9, {}) : b == h(140) ? h(166) === h(166) ? (C[h(209)] = h(223) + h(182), C[h(168)] = 66) : (_0x3a2e47[h(161) + h(126)](h(163), _0x4ab421, _0x1f660a), _0x582918[h(161) + h(126)](h(134), _0xa82114, _0x1e0c86), _0x172a64[h(161) + h(126)](h(229), _0x379c34)) : b == h(144) && (h(207) === h(152) ? (_0x14c41a[h(209)] = h(223) + h(182), _0x4877be[h(168)] = 67) : (C[h(209)] = h(223) + h(182), C[h(168)] = 61));
        if (C[h(143)] == h(187) + h(213)) {
          if (h(164) === h(135)) [h(163), h(134), h(229)][h(222)]((L) => {
            const D = h;
            _0x881c0e[D(125) + D(165)](L, _0x545cc4);
          });
          else if (g[h(206)] == !0)
            if (h(160) === h(150)) {
              if (_0x52bb28[h(167) + h(220)](), !_0x513795[h(237)]) return;
              const L = _0x341b57[h(237)], D = _0x1fadbf[h(228)](_0x5cb17d[h(136)]), W = L[h(202) + h(210) + "t"]();
              _0x26f12d(_0x1bea73, { action: h(185), width: L[h(186) + "h"], height: L[h(235) + "ht"], x: _0x188826[h(188)] - W[h(233)], y: _0x2c9311[h(215)] - W[h(149)], delta: D, ts: _0x393640[h(212)]() }), L[h(198)]();
            } else C[h(168)] = C[h(168)][h(197) + "e"]();
        }
        return C;
      }, T = await E();
      T && e(H_, T), m[f(198)]();
    } else _0x510126[f(125) + f(165)](_0x501ca1, _0x16e964);
  };
  Xe(() => {
    const g = i;
    if (g(199) === g(199)) {
      const f = o[g(237)];
      if (f) {
        const m = {};
        m[g(205)] = !1;
        const p = m;
        return t ? (f[g(161) + g(126)](g(163), l, p), f[g(161) + g(126)](g(134), l, p), f[g(161) + g(126)](g(229), l)) : (f[g(161) + g(126)](g(180), d), [g(183), g(230), g(141)][g(222)]((b) => {
          const w = g;
          w(156) === w(156) ? f[w(161) + w(126)](b, l) : _0x293d5d[w(125) + w(165)](_0x4058d0, _0x3376a7);
        })), () => {
          const b = g;
          b(216) !== b(155) ? f && (t ? b(130) !== b(130) ? _0x5aab06[b(161) + b(126)](_0x1e1947, _0x42d56b) : [b(163), b(134), b(229)][b(222)]((w) => {
            const E = b;
            E(181) === E(181) ? f[E(125) + E(165)](w, l) : (_0x5902ce[E(209)] = E(223) + E(182), _0x1840ef[E(168)] = 20);
          }) : b(132) !== b(146) ? ([b(183), b(230), b(141)][b(222)]((w) => {
            const E = b;
            f[E(125) + E(165)](w, l);
          }), f[b(125) + b(165)](b(180), d)) : (_0x524702[b(209)] = b(223) + b(182), _0x5a8e85[b(168)] = 19)) : _0x12e9b1[b(209)] = b(131);
        };
      }
    } else _0x4dcc12[g(168)] = _0x54a802[g(168)][g(197) + "e"]();
  }, [t, l, u, d, o]);
  const x = { ref: o, ...r };
  return X.jsx(Kx, x);
};
function hi(t, n) {
  const e = di();
  return hi = function(r, o) {
    return r = r - 125, e[r];
  }, hi(t, n);
}
const U_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", ls = pi;
(function(t, n) {
  const e = pi, r = t();
  for (; ; )
    try {
      if (-parseInt(e(441)) / 1 * (parseInt(e(436)) / 2) + -parseInt(e(439)) / 3 * (parseInt(e(444)) / 4) + parseInt(e(438)) / 5 * (-parseInt(e(433)) / 6) + parseInt(e(435)) / 7 + -parseInt(e(445)) / 8 + -parseInt(e(434)) / 9 * (-parseInt(e(437)) / 10) + parseInt(e(442)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(xi, 458671);
function xi() {
  const t = ["3148229bkbbqo", "204152DDjjKc", "20DjhEsM", "819555ljVVip", "3BPqvEL", "div", "2kVUjFK", "3543353CaVVuE", "img", "200248FFLWix", "129272NYoWJg", "12ibBEfH", "1282482vGXUZY"];
  return xi = function() {
    return t;
  }, xi();
}
function pi(t, n) {
  const e = xi();
  return pi = function(r, o) {
    return r = r - 433, e[r];
  }, pi(t, n);
}
const q_ = an[ls(440)]`
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
`, jt = an[ls(440)]`
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
`, Lt = an.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, W_ = an[ls(443)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, G_ = an[ls(440)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(t, n) {
  const e = ur, r = t();
  for (; ; )
    try {
      if (-parseInt(e(246)) / 1 + -parseInt(e(250)) / 2 + parseInt(e(268)) / 3 * (-parseInt(e(254)) / 4) + parseInt(e(249)) / 5 * (parseInt(e(260)) / 6) + -parseInt(e(234)) / 7 * (-parseInt(e(252)) / 8) + -parseInt(e(261)) / 9 + -parseInt(e(277)) / 10 * (-parseInt(e(237)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(mi, 570277);
const Du = () => {
  const t = ur;
  return document[t(240) + t(270)] || document[t(238) + t(266)] || document[t(243) + t(276) + t(253)] || document[t(274) + t(263)];
}, X_ = (t) => {
  const n = ur, e = document[n(272) + n(262)](n(235) + n(267) + t);
  if (e[n(239) + n(245)]) e[n(239) + n(245)]();
  else if (e[n(269) + n(241)]) {
    if (n(271) !== n(271)) return _0x1d6fcb[n(240) + n(270)] || _0x4b9ee0[n(238) + n(266)] || _0x136dd6[n(243) + n(276) + n(253)] || _0x915dff[n(274) + n(263)];
    e[n(269) + n(241)]();
  } else
    e[n(265) + n(244) + n(264)] ? e[n(265) + n(244) + n(264)]() : e[n(242) + n(255)] && e[n(242) + n(255)]();
}, Y_ = () => {
  const t = ur;
  document[t(275) + t(248)] ? t(273) !== t(273) ? _0x4db812[t(239) + t(245)]() : document[t(275) + t(248)]() : document[t(259) + t(256)] ? t(257) === t(278) ? _0x5367ff[t(258) + t(247)]() : document[t(259) + t(256)]() : document[t(233) + t(251)] ? t(236) !== t(236) ? _0xda3c69[t(269) + t(241)]() : document[t(233) + t(251)]() : document[t(258) + t(247)] && document[t(258) + t(247)]();
};
function ur(t, n) {
  const e = mi();
  return ur = function(r, o) {
    return r = r - 233, e[r];
  }, ur(t, n);
}
function mi() {
  const t = ["estFullscr", "lscreen", "877886Eogitc", "screen", "reen", "15CAOTmd", "131916fPKUlA", "Fullscreen", "136fkCPnV", "ent", "64RHnbsV", "ullscreen", "ullScreen", "zEJDK", "msExitFull", "mozCancelF", "1437096JSeIIg", "1333116wKwoaD", "tor", "enElement", "een", "webkitRequ", "eenElement", "in_", "131667twdvcv", "mozRequest", "Element", "MyOsd", "querySelec", "TeaiP", "msFullscre", "exitFullsc", "screenElem", "8005970FQBKnr", "OVJsr", "webkitExit", "18417HJQaXH", "#screen_ma", "lEVGt", "22KFqIvw", "mozFullScr", "requestFul", "fullscreen", "FullScreen", "msRequestF", "webkitFull"];
  return mi = function() {
    return t;
  }, mi();
}
(function(t, n) {
  const e = Gr, r = t();
  for (; ; )
    try {
      if (-parseInt(e(461)) / 1 * (-parseInt(e(638)) / 2) + parseInt(e(606)) / 3 * (parseInt(e(679)) / 4) + parseInt(e(377)) / 5 + parseInt(e(496)) / 6 * (parseInt(e(598)) / 7) + parseInt(e(468)) / 8 * (-parseInt(e(460)) / 9) + parseInt(e(622)) / 10 * (-parseInt(e(682)) / 11) + parseInt(e(601)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(gi, 357438);
function Gr(t, n) {
  const e = gi();
  return Gr = function(r, o) {
    return r = r - 267, e[r];
  }, Gr(t, n);
}
const K_ = fr((t, n) => {
  const e = Gr, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = t, l = {};
  l.x = 0, l.y = 0;
  const u = ge(l), d = {};
  d.x = 0, d.y = 0;
  const x = ge(d), [g, f] = St(null), [m, p] = St(0), b = ge(null), w = ge(null), E = ge(null), T = {};
  T[e(413)] = e(630), T[e(576)] = 0.5, T[e(508)] = 999;
  const [h, $] = St(T), C = {};
  C[e(508)] = 1e3;
  const [L, D] = St(C), W = ge(null), re = ge(null), [J, F] = St(null), U = (H) => {
    const A = e;
    if (H[A(531) + A(648)](), s[A(481)][A(485)] == !0) return;
    const Ee = qt[H[A(650)]], Pe = a[A(530)], ke = E[A(530)], se = Pe[A(552) + A(352) + "t"](), je = ke[A(552) + A(352) + "t"](), Ne = 5;
    let yt, _t;
    const pn = se[A(671)] - je[A(671)], Qt = se[A(660)] - je[A(660)];
    if (H[A(650)][A(327)](A(382))) {
      const { touches: Je, changedTouches: at } = H, Ft = Je[0] ?? at[0];
      yt = Ft[A(489)], _t = Ft[A(286)];
    } else H[A(650)][A(327)](A(618)) && (yt = H[A(328)], _t = H[A(480)]);
    if (Ee == qt[A(423)]) {
      s[A(526)]({ ...s[A(481)], isDown: !0 }), u[A(530)].x = yt - je[A(621)], u[A(530)].y = _t - je[A(298)];
      const Je = {};
      Je[A(576)] = 1, Je[A(413)] = A(559);
      const at = { ...h, ...Je };
      $(at), p(performance[A(662)]());
    } else if (Ee == qt[A(612)]) {
      if (s[A(481)][A(607)] == !1) return;
      let Je = yt - u[A(530)].x - se[A(621)], at = _t - u[A(530)].y - se[A(298)];
      const Ft = pn - Ne;
      (Je < Ne || Je > Ft || at < Ne || at > Qt - Ne) && !re[A(530)] || (ke[A(454)][A(621)] = Je + "px", ke[A(454)][A(298)] = at + "px", x[A(530)].x = Je, x[A(530)].y = at);
    } else if (Ee == qt[A(407)]) {
      const Je = performance[A(662)]() - m;
      if (g == qt[A(423)] || Je < 200) {
        const ze = {};
        ze[A(485)] = !0, ze[A(607)] = !1, s[A(526)]({ ...s[A(481)], ...ze });
      } else A(652) !== A(623) ? s[A(526)]({ ...s[A(481)], isDown: !1 }) : _0x59b6e3();
      const at = {};
      at[A(576)] = 0.5, at[A(413)] = A(630);
      const Ft = { ...h, ...at };
      $(Ft);
    }
    f(Ee), ke[A(406)]();
  }, Q = async (H) => {
    const A = e;
    H[A(531) + A(648)]();
    const Ee = H[A(577)][A(513)](A(345))[A(642) + "te"](A(403));
    if (Ee === A(549))
      A(357) === A(357) ? Du() ? A(338) !== A(338) ? [A(301), A(472), A(639)][A(647)]((ke) => {
        const se = A;
        _0x5160b8[se(643) + se(362)](ke, _0x9ce0fb);
      }) : Y_() : A(599) === A(684) ? _0x30103f[A(647)]((ke) => {
        const se = A;
        _0x11b6d6[se(385) + se(277)](ke, _0xd6ae6e);
      }) : X_(r) : _0x191d90[A(643) + A(362)](A(416), _0xca8e26);
    else if (A(436) !== A(415)) {
      const Pe = {};
      Pe[A(570)] = A(592) + A(456), Pe[A(542)] = Ee, Pe[A(453)] = "";
      const ke = Pe;
      Ee === A(296) && (A(292) === A(292) ? ke[A(453)] = await navigator[A(506)][A(379)]() : _0x2a1588[A(385) + A(277)](_0x5044b6, _0x3bbe74)), Ee === A(386) && (ke[A(523)] = A(289) + "py"), i(z_, ke);
    } else _0x2ee269[A(643) + A(362)](_0x180a80, _0x2f1480);
    s[A(526)]({ ...s[A(481)], showMenu: !1 }), w[A(530)][A(406)]();
  }, j = (H) => {
    const A = Du();
    i(F_, A);
  };
  Xe(() => {
    requestAnimationFrame(() => {
      const H = Gr, A = { ...L };
      A[H(576)] = s[H(481)][H(485)] ? 1 : 0, D(A);
    });
  }, [s]), Xe(() => {
    const H = e, A = a[H(530)], Ee = [H(549) + H(686), H(395) + H(644) + "ge", H(426) + H(355), H(450) + H(488)];
    return A && Ee[H(647)]((Pe) => {
      const ke = H;
      A[ke(385) + ke(277)](Pe, j);
    }), () => {
      const Pe = H;
      Pe(463) !== Pe(440) ? A && A[Pe(643) + Pe(362)](Pe(416), j) : _0x4a0237(_0xf68395);
    };
  }, []), Xe(() => {
    const H = e, A = E[H(530)], Ee = w[H(530)];
    if (Ee)
      if (H(602) === H(602)) Ee[H(385) + H(277)](H(416), Q);
      else {
        if (_0x500ba1[H(481)][H(607)] == !1) return;
        let Pe = _0x1cd0f1 - _0x1195b9[H(530)].x - _0x5d3120[H(621)], ke = _0x5b645b - _0x1b2d93[H(530)].y - _0x513eda[H(298)];
        const se = _0x5457ed - _0x28e4c7;
        (Pe < _0x59b3fd || Pe > se || ke < _0x501fe8 || ke > _0x49c08f - _0x48dc32) && !_0x52491f[H(530)] || (_0x5ed36b[H(454)][H(621)] = Pe + "px", _0x4cfaab[H(454)][H(298)] = ke + "px", _0x8fd6a7[H(530)].x = Pe, _0x123645[H(530)].y = ke);
      }
    if (A) {
      const Pe = {};
      Pe[H(317)] = !1;
      const ke = Pe;
      if (o) H(487) !== H(487) ? (_0x54db32 = _0x1e25e6[H(328)], _0x510dee = _0x354d3a[H(480)]) : (A[H(385) + H(277)](H(301), U, ke), A[H(385) + H(277)](H(472), U, ke), A[H(385) + H(277)](H(639), U));
      else if (H(378) === H(368)) {
        const { touches: se, changedTouches: je } = _0x234981, Ne = se[0] ?? je[0];
        _0x49e530 = Ne[H(489)], _0x3bbee3 = Ne[H(286)];
      } else [H(612), H(423), H(407)][H(647)]((se) => {
        const je = H;
        A[je(385) + je(277)](se, U);
      });
      return () => {
        const se = H;
        if (se(380) === se(474)) {
          const je = { ..._0x526c4a };
          je[se(576)] = _0x1f2417[se(481)][se(485)] ? 1 : 0, _0x4ea420(je);
        } else {
          if (Ee)
            if (se(617) !== se(617)) {
              const je = {};
              je[se(485)] = !0, je[se(607)] = !1;
              const Ne = { ..._0x2bbd8c[se(481)], ...je };
              _0x4b112[se(526)](Ne);
            } else Ee[se(643) + se(362)](se(416), Q);
          A && (se(445) !== se(510) ? o ? [se(301), se(472), se(639)][se(647)]((je) => {
            const Ne = se;
            Ne(545) !== Ne(545) ? _0x297d9b(() => {
              const yt = Ne, _t = { ..._0x377103 };
              _t[yt(576)] = _0x132742[yt(481)][yt(485)] ? 1 : 0, _0x40047e(_t);
            }) : A[Ne(643) + Ne(362)](je, U);
          }) : [se(612), se(423), se(407)][se(647)]((je) => {
            const Ne = se;
            A[Ne(643) + Ne(362)](je, U);
          }) : [se(612), se(423), se(407)][se(647)]((je) => {
            const Ne = se;
            _0x22417f[Ne(385) + Ne(277)](je, _0x3335e4);
          }));
        }
      };
    }
  }, [o, U]);
  const k = () => {
    const H = e, A = E[H(530)];
    A[H(454)][H(671)] = W[H(530)] != H(654) ? H(514) : "", A[H(454)][H(660)] = W[H(530)] == H(654) ? H(514) : "", A[H(454)][H(361)] = H(634), A[H(454)][H(298)] = "5%", A[H(454)][H(621)] = "";
  };
  l0(n, () => ({ fixTouch: (H) => {
    const A = e;
    if (H)
      if (A(443) === A(495)) {
        const Ee = _0xaba3e4[A(530)];
        Ee[A(454)][A(671)] = _0x5cfb3c[A(530)] != A(654) ? A(514) : "", Ee[A(454)][A(660)] = _0x3158a6[A(530)] == A(654) ? A(514) : "", Ee[A(454)][A(361)] = A(634), Ee[A(454)][A(298)] = "5%", Ee[A(454)][A(621)] = "";
      } else W[A(530)] = H;
    k();
  }, setFullscreen: (H) => {
    F(H);
  } }));
  const P = {};
  P[e(572)] = e(405) + e(689) + "1)";
  const M = {};
  M.d = J ? e(464) + e(529) + e(343) + e(539) + e(571) + e(632) + e(666) : e(466) + e(573) + e(620) + e(389) + e(452) + e(346) + e(651);
  const V = {};
  V[e(641)] = e(548);
  const z = {};
  z[e(572)] = e(405) + e(689) + "1)";
  const q = {};
  q.d = e(421) + e(626) + e(288) + e(302) + e(569) + e(537) + e(271) + e(312) + e(566) + e(528) + e(473) + e(366) + e(687) + e(383) + e(410) + e(680) + e(492) + e(419) + e(655) + e(670) + e(394);
  const te = {};
  te.d = e(525) + e(311) + e(397);
  const K = {};
  K[e(641)] = e(351);
  const ce = {};
  ce[e(572)] = e(405) + e(689) + "1)";
  const fe = {};
  fe.d = e(331) + e(519) + e(629) + e(465) + e(605) + e(344) + e(302) + e(569) + e(304) + e(271) + e(688) + e(271) + e(503) + e(320) + e(398) + e(608) + e(414) + e(268) + e(278) + e(374) + e(275) + e(610) + e(585) + e(490);
  const oe = {};
  oe[e(641)] = e(412);
  const Ie = {};
  Ie[e(572)] = e(405) + e(689) + "1)";
  const ye = {};
  ye.d = e(422) + e(305) + e(467) + e(553) + e(332) + e(275) + e(551) + e(271) + e(449) + e(566) + e(324) + e(519) + e(279) + e(505) + e(538) + e(272) + e(656) + e(392) + e(475);
  const Be = {};
  Be[e(641)] = e(547);
  const Le = {};
  Le[e(572)] = e(405) + e(689) + "1)";
  const pe = {};
  pe.d = e(350) + e(409) + e(636) + e(653) + e(587) + e(318) + e(309);
  const Ke = {};
  Ke.d = e(588) + e(582) + e(558) + e(329) + e(276) + e(455) + e(399) + e(308) + e(425) + e(533) + e(393) + e(476) + e(565) + e(534) + e(683) + e(580) + e(371) + e(430) + e(299) + e(431) + e(675) + e(540) + e(291) + e(516) + e(424) + e(321) + e(595) + e(560) + e(532) + e(336) + e(556) + e(319) + e(396) + e(678) + e(435) + e(401) + e(420) + e(624) + e(544) + e(307) + e(635) + e(441) + e(340) + e(478) + e(284) + e(325) + e(364) + e(500) + e(631) + e(665) + e(457) + e(562) + e(589) + e(353) + e(269) + e(600) + e(564) + e(563) + e(354) + e(439) + e(390) + e(477) + e(303) + e(369) + e(597) + e(561) + e(578) + e(418) + e(458) + e(627) + e(280) + e(616) + "z";
  const ne = {};
  ne[e(641)] = e(417);
  const Ve = {};
  Ve[e(572)] = e(405) + e(689) + "1)";
  const be = {};
  be.d = e(295) + e(667) + e(462) + e(310) + e(646) + e(497) + e(330) + e(334) + e(493) + e(434) + e(432) + e(535) + e(511) + e(507) + e(504) + e(615) + e(367) + e(483) + e(555) + e(522) + "z";
  const st = {};
  st[e(641)] = e(335);
  const xt = {};
  xt[e(572)] = e(405) + e(689) + "1)";
  const _ = {};
  _.d = e(479) + e(322) + e(569) + e(411) + e(271) + e(312) + e(566) + e(681) + e(608) + e(285) + e(381) + e(297) + e(685);
  const R = {};
  R.cx = e(469), R.cy = "18", R.r = "1";
  const y = {};
  y[e(641)] = e(c ? 676 : 438);
  const I = {};
  I[e(572)] = e(405) + e(689) + "1)";
  const S = {};
  S.d = e(658) + e(498) + e(372) + e(400) + e(518) + e(669) + e(674) + e(501) + e(314) + e(347) + e(637) + e(521);
  const ie = {};
  ie.d = e(341) + e(659) + e(294) + e(300) + e(470) + e(677) + e(502) + e(596) + e(270) + e(672) + e(290) + e(590) + e(546) + e(609) + e(391) + e(437) + e(524) + e(337) + e(640) + e(594) + e(447) + e(568) + e(287) + e(370) + e(517) + e(611) + e(515) + e(583) + e(649) + e(282) + e(376) + e(358) + e(444) + e(512) + e(428) + e(575) + e(471) + e(633) + e(491);
  const Ze = {};
  Ze[e(641)] = e(333);
  const Ue = {};
  Ue[e(572)] = e(405) + e(689) + "1)";
  const pt = {};
  pt.d = e(520) + e(446) + e(349) + e(360) + e(283) + e(281) + e(619) + e(557) + e(482) + e(536) + e(541) + e(326) + e(550) + e(459) + e(442) + e(484) + e(567) + e(663) + e(574) + e(494) + e(451) + e(408) + e(554) + e(668) + e(486) + e(614);
  const mt = {};
  mt[e(641)] = e(429);
  const ot = {};
  ot[e(572)] = e(405) + e(689) + "1)";
  const bt = {};
  bt.d = e(274) + e(628) + e(359) + e(293);
  const Pt = {};
  Pt[e(641)] = e(365);
  const kt = {};
  kt[e(572)] = e(405) + e(689) + "1)";
  const zt = {};
  zt.d = e(402) + e(581) + e(339) + e(433) + e(586) + e(591) + e(323) + e(348) + e(384);
  const Oe = {};
  Oe[e(641)] = e(363);
  const he = {};
  he[e(572)] = e(405) + e(689) + "1)";
  const gt = {};
  gt.d = e(625) + e(613) + e(315) + e(543) + e(281) + e(673) + e(604) + e(584) + e(313);
  const Jt = {};
  return Jt[e(641)] = e(499), X.jsxs(X.Fragment, { children: [s[e(481)][e(485)] ? X.jsxs(q_, { id: e(404) + e(388) + r, style: L, ref: w, children: [X.jsxs(jt, { "data-id": e(549), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: P, children: X.jsx(e(603), M) }), X.jsx(Lt, V)] }), X.jsxs(jt, { "data-id": e(386), children: [X.jsxs(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: z, children: [X.jsx(e(603), q), X.jsx(e(603), te)] }), X.jsx(Lt, K)] }), X.jsxs(jt, { "data-id": e(296), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: ce, children: X.jsx(e(603), fe) }), X.jsx(Lt, oe)] }), X.jsxs(jt, { "data-id": e(273), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "25", height: "25", viewBox: e(448), style: Ie, children: X.jsx(e(603), ye) }), X.jsx(Lt, Be)] }), X.jsxs(jt, { "data-id": e(579), children: [X.jsxs(e(427), { xmlns: e(375) + e(645) + e(342), width: "25", height: "25", viewBox: e(448), style: Le, children: [X.jsx(e(603), pe), X.jsx(e(603), Ke)] }), X.jsx(Lt, ne)] }), X.jsxs(jt, { "data-id": e(267), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "25", height: "25", viewBox: e(448), style: Ve, children: X.jsx(e(603), be) }), X.jsx(Lt, st)] }), X.jsxs(jt, { "data-id": e(593), children: [X.jsxs(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: xt, children: [X.jsx(e(603), _), X.jsx(e(387), R)] }), X.jsx(Lt, y)] }), X.jsxs(jt, { "data-id": e(509), children: [X.jsxs(e(427), { xmlns: e(375) + e(645) + e(342), width: "25", height: "25", viewBox: e(448), style: I, children: [X.jsx(e(603), S), X.jsx(e(603), ie)] }), X.jsx(Lt, Ze)] }), X.jsxs(jt, { "data-id": e(356), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: Ue, children: X.jsx(e(603), pt) }), X.jsx(Lt, mt)] }), X.jsxs(jt, { "data-id": e(373), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: ot, children: X.jsx(e(603), bt) }), X.jsx(Lt, Pt)] }), X.jsxs(jt, { "data-id": e(527), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: kt, children: X.jsx(e(603), zt) }), X.jsx(Lt, Oe)] }), X.jsxs(jt, { "data-id": e(661), children: [X.jsx(e(427), { xmlns: e(375) + e(645) + e(342), width: "28", height: "28", viewBox: e(448), style: he, children: X.jsx(e(603), gt) }), X.jsx(Lt, Jt)] })] }) : null, X.jsx(G_, { id: e(404) + e(657) + "s_" + r, className: e(664), ref: b, style: h, children: X.jsx(W_, { src: U_, className: e(664), id: e(404) + e(316) + r, alt: e(306), ref: E, draggable: !1 }) })] });
});
function gi() {
  const t = ["grab", "0 0 1-.55 ", "228 0 0 0 ", ".096 0 0 0", " 1.814-.18", "9.09 0 0 0", "38-.18V2L8", "03 0 2-.89", "0 0 0 .782", "93-.019a1.", "0-2 .897-2", "action", "6v6h2v-4h4", "fill", "v7h2zm5 14", "674.31a1 1", "2-.116C7.0", "opacity", "target", "1.1-1.332A", "reload", "4-.002.968", "1 0 0 0-1 ", ".186a8.94 ", "33L12 5.86", "1.003 0 0 ", "7h7l.001 7", "6a1 1 0 0 ", "3 1.331-3 ", "M20.817 11", " 2.428 2.4", "0V4a1 1 0 ", "0 1-1V4a1 ", "shortcutEv", "device_id", "3c.033 0 .", "032 7.032 ", ".004 1.004", "9 9.228 9.", "350lqWuvC", "wCisp", "2 22a9.09 ", "2481072GXxTBr", "ScUAq", "path", "3 9a1.003 ", "-1-1H8a1 1", "890883omjGpN", "isDown", "1.103-.897", ".832L6.697", "2 2zm2 7v-", ".015.057-.", "mousemove", "822 13 9A1", "1.048z", "H5v-2zm12 ", ".183-1.814", "XsHEN", "mouse", "75.931l2 1", "H5v-5H3v7h", "left", "297890LyuJLK", "ftYiA", "13 7.13 0 ", "m4.431 12.", "1.103 0-2 ", " 13a9.09 9", "4zm0 5h16v", "7-2-2-2h-3", "move", "9.02 0 0 0", "zm0-6h-4V4", "7.032 15 7", "15%", "961 0 0 1-", "31 3-3s-1.", ".614 16 19", "814egFYkh", "touchend", " 2 2zm0-8h", "children", "getAttribu", "removeEven", "screenchan", ".w3.org/20", "8a2 2 0 0 ", "forEach", "ault", "8v12.264l-", "type", "-7v2h5z", "cagge", "329-3-3-3-", "landscape", "03-.897-2-", "3 3v1h2zm1", "touch_clas", "M16 21c3.5", ".225-1.1 2", "height", "back", "now", "-.769zm-8.", "assistive", " 1.539 5.0", "h-2v6h6z", "2 0 0 0-2 ", "l10.283 7.", "7 16 3v2c2", "2-2h-4V4h1", "width", "27.05A1 1 ", "69-.823l-1", ".387 1.386", "053 7.005 ", "Hide ID", "h2.697l5.7", "8 1.039 7.", "4onnWJx", "10l.002 10", "7 2-2V4c0-", "198pMJTcg", "V6.002c.48", "mqXoM", "75z", "change", "4c0-1.103-", "2 2h7c0 1.", "255, 255, ", "board", " 2v5H4V5h3", "95 0 0 0 1", " 0 0 0 1.0", "103.897 2 ", "3s3 1.346 ", "unlock", "M4 6h16v2H", " 0-2 .897-", "19 9.053 9", "stener", "v2h8V5h3v6", "7-2-2-2H9V", ".09 0 0 0-", " 0 0 0-1.5", "4.445-2.96", "0a.999.999", "1.89-1.89A", "-2-2-2zm-1", "pageY", "027 1.027 ", ".897-2 2v4", "shortcutCo", "0 0 0 14 2", "1 1.892 1.", "bTfRM", "6v2H4z", "-3.229 2-5", "M21 5H3a2 ", "paste", ".002 16H6.", "top", "6.961 0 0 ", "s-.775-3.9", "touchstart", "H4c-1.103 ", "886 0 0 0 ", " 2v13c0 1.", "2.757-2.24", "Icon", "0 6.961 6.", " 8.95 8.95", "3 3z", " 0 0 2 2h1", "6zm0 4h6v2", "2 2h10c1.1", "0 0 1.645z", "47 3.999 7", " 1 0 0 0 1", "touch_", "passive", "3 1.329 3 ", "88 7.2 7.2", "3 0 2-.897", "1 19 13a7.", "10c-1.103 ", "1 0 0 0-1-", "7 2-2v-8c0", "6.996 6.99", "5.46 1.701", "includes", "clientX", "-1.355-3.2", "2 0 0 0-2-", "M20 11V5c0", "3H6c-1.103", "Volume", "2zm-8 2h2v", "Board", " 7.11 0 0 ", ".103.897 2", "aHvVa", "1v16a1 1 0", "4 7.002 7.", "M16 7v10c1", "00/svg", "0h2v-6H4v2", " 0 0 0-1 1", "div", "m-2-4h2V3h", "S18.387 17", "1zm-1 16H5", "0 0-.396-1", "M12 16c1.6", "Copy", "gClientRec", "28A8.95 8.", "3 9.014 9.", "eenchange", "sync", "TrKoc", "17-.056-.0", "2H4zm0 5h1", ".024l-14-1", "right", "tListener", "Home", "6 0 0 1 5 ", "Switch", "-.897 2-2V", "6H7v-2h10v", "eiJCs", "1.331-1.09", "0 0 0 .38-", ".044 1.435", ".999-4.909", "recents", "h-5c-1.103", "http://www", "4c-.025-.0", "210115ZLHwWE", "ZHngr", "readText", "QbFND", "0 18V4h10l", "touch", ".897-2-2-2", "V5h14v14z", "addEventLi", "copy", "circle", "menu_", "7zm11-5h-2", "3.218-1.35", " 7H4c-1.10", " 4 .002 8H", ".028 9.028", "0v10z", "webkitfull", " 0 0 1-.85", "H6z", " 2-2v-7c0-", "-2.43-2.43", " 5.999-9S1", "0 0 1-3.53", "M20 3H4a1 ", "data-id", "assistive_", "rgba(255, ", "focus", "mouseup", "08 3.677L7", "71 0 3-1.3", "zM4 20V10h", " 2v16c0 1.", "Paste", "cursor", "-2-2-2zm-9", "JOwUb", "click", "Reload", "8.952 8.95", "4v-4c0-1.1", "6 1.907 7.", "M20 2H10c-", "M17 8V7c0-", "mousedown", "6.967 0 0 ", " 0 0 0-3.2", "mozfullscr", "svg", " 0 0 0-.38", "Sync", ".14a6.961 ", "1 2.502 1.", "2zM9 7h2v2", " 0 0 1 1h1", "4h2v2h-2v-", "028 7.028 ", "vkhDw", "3 0-2 .897", "Show ID", "014 0 0 0 ", "TbwiI", "2.503-1.05", ".089-1.218", "EyyNA", "2-.082-.03", "bfWdm", ".21a1 1 0 ", "061-.016.0", "0 0 24 24", "2 2h12c1.1", "msfullscre", "8.347l-3.0", "v5h-5v2h7z", "data", "style", ".053 0 0 0", "ent", "34 9.096 9", "2 0 0 0 21", "57-5.428 6", "2151891AygQsw", "207zlpVRD", "2v10a2 2 0", "PeWgd", "M10 4H8v4H", "a1 1 0 0 0", "M5 5h5V3H3", "3-5-5-5S7 ", "8yBFKpo", "11.75", "-2-5zM4 17", "59 15.016 ", "touchmove", "c1.103 0 2", "ubHsa", "6v-8h12z", " 0 0 0-1.8", "5 8.886 8.", "002 0 0 1-", "M16.75 2h-", "clientY", "get", "0 1.767.51", "2zm2-4h-2v", "a.995.995 ", "showMenu", "345-5.236 ", "FbJBc", "enchange", "pageX", "H13z", " 15H4V9z", "H4zm16-6h-", "2h-2V7zm0 ", " 0 0 0-.57", "vudKR", "60330UTkphZ", "0 2-2V7a2 ", "27-1.547 5", "Back", "13H3a9.02 ", " 3.999 4.0", "48 3.832a1", "2 2h7c1.10", "7zm0 4h2v2", "7c0-1.654 ", "clipboard", "5 7h2v2H5V", "zIndex", "volume", "SKYUx", "2v2H9v-2zM", "3a.986.986", "closest", "12%", "017.082-.0", "892A6.967 ", ".116c.026-", "9.527 4.54", "-1.103-.89", "M20.978 13", "v2z", "4h-2V7h2v2", "taskId", "-2 2v6c0 1", "M6 12h6v2H", "set", "home", "7 2-2v-4h4", "4v2h6zM8 2", "current", "preventDef", "2.725 7.11", "19-1.355 9", " 5l3.975 3", "H9V7zm0 4h", "6l3.612-4.", " 2v10c0 1.", "1.346-3 3-", "h4zm12-6h-", "7.005 0 0 ", "416 3.377 ", "shortcut", "9 21V3a1 1", "0 1-2.822 ", "exqrv", "0 0-1.554-", "Unlock", "Screen", "fullscreen", "-1.052-3.3", "2 2v8c0 1.", "getBoundin", "4.243 7 7v", ".257 5.127", "-2h2v2zm0-", "1-.644 1.1", "7a1 1 0 0 ", "8.94 0 0 0"];
  return gi = function() {
    return t;
  }, gi();
}
const Qe = On;
function On(t, n) {
  const e = vi();
  return On = function(r, o) {
    return r = r - 389, e[r];
  }, On(t, n);
}
(function(t, n) {
  const e = On, r = t();
  for (; ; )
    try {
      if (parseInt(e(400)) / 1 * (-parseInt(e(434)) / 2) + parseInt(e(423)) / 3 + -parseInt(e(402)) / 4 * (parseInt(e(455)) / 5) + parseInt(e(485)) / 6 + -parseInt(e(465)) / 7 * (-parseInt(e(420)) / 8) + parseInt(e(426)) / 9 * (-parseInt(e(394)) / 10) + parseInt(e(403)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(vi, 219072);
const Bu = (t, n) => {
  const e = On;
  return t[e(404)] < n[e(404)] ? !1 : n[e(435)]((r, o) => r === t[o]);
}, J_ = (t) => {
  const n = On, e = new Uint8Array(t);
  for (let r = 0; r <= e[n(404)] - 5; r++)
    if (n(479) === n(468)) {
      if ((_0x5725f1[_0x4c9df3 + _0x20c238] & 31) === 5) return !0;
    } else {
      let o = 0;
      if (e[r] === 0 && e[r + 1] === 0 && e[r + 2] === 1 ? o = 3 : e[r] === 0 && e[r + 1] === 0 && e[r + 2] === 0 && e[r + 3] === 1 && (o = 4), o > 0)
        if (n(442) !== n(460)) {
          if ((e[r + o] & 31) === 5) return !0;
        } else (void 0)[n(425)] = _0x56289c;
    }
  return !1;
};
function vi() {
  const t = ["from", "XOHNG", "width", "isPlay", "restore", "hardwareAc", "clearRect", "Nmabf", "translate", "scale", "set", "buildDecod", "height", "chunks", "330145lGfObr", "push", "codec", "DTBwv", "wBSat", "jcdMu", "baseTimest", "portrait", "rootSize", "frameSize", "31647pYctIU", "setIsConne", "canvasRef", "ceyXk", "scaleSize", "codedWidth", "decode", "rotate", "innerHeigh", "ctx", "autoResize", "MJwkj", "error", "celeration", "IcQFZ", "optimizeFo", "orientatio", "getContext", "setVideoMe", "landscape", "1209834qhIEhy", "Decoder er", "setOrienta", "delta", "ZybAA", "key", "1090ureKqz", "save", "rLatency", "configure", "getBigUint", "close", "14753lqJVFp", "buffer", "20FNRYty", "8686876XtpvUa", "length", "isMobile", "type", "setPause", "maxWidth", "data", "amp", "decoder", "8Chunks", "state", "isFullsCre", "ror:", "concat", "codedHeigh", "IcpoY", "now", "32uKYIiM", "lock", "8Arrays", "855609nBCqFR", "current", "isPause", "27441xzSSpX", "slice", "videoMeta", "iframe", "concatUint", "startBytes", "endBytes", "drawImage", "56bkeSja", "every", "tion", "MyAuA", "min", "innerWidth", "timestamp"];
  return vi = function() {
    return t;
  }, vi();
}
var Fu, Vu, Uu, qu, Wu, Gu, Xu, Yu, Ku;
class Q_ {
  constructor(n, e, r, o, i, s) {
    _e(this, Ku, (n, e, r, o) => {
      const i = Qe, s = r / n, a = o / e;
      if (a < 0.4 && s > a) {
        const u = {};
        return u[i(443)] = r, u[i(453)] = e * s, u;
      }
      const c = Math[i(438)](s, a), l = {};
      return l[i(443)] = n * c, l[i(453)] = e * c, l;
    });
    _e(this, Yu, () => {
      var s;
      const n = Qe;
      if (!this[n(464)][n(470)]) return;
      const e = this[n(414) + "en"] ? this[n(405)] ? window[n(439)] - 20 : this[n(408)] : this[n(408)], r = this[n(481) + "n"] == n(484) ? window[n(439)] : window[n(473) + "t"] - (this[n(405)] ? 12 : 50), o = this[n(469)](this[n(464)][n(470)], this[n(464)][n(417) + "t"], e, r);
      if (this[n(443)] = o[n(443)], this[n(453)] = o[n(453)], !this[n(463)])
        if (n(448) === n(448)) (s = this[n(466) + "ct"]) == null || s.call(this, !0);
        else {
          this[n(454)][n(456)](_0x9e8824);
          return;
        }
      const i = {};
      i[n(443)] = o[n(443)], i[n(453)] = o[n(453)], this[n(463)] = i;
    });
    _e(this, Xu, (n) => {
      const e = Qe;
      this[e(481) + "n"] = n, this[e(405)] && screen[e(481) + "n"][e(421)](n);
    });
    _e(this, Gu, (n) => {
      const e = Qe;
      this[e(425)] = n;
    });
    _e(this, Wu, (n) => {
      const e = Qe, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(428)] = r;
    });
    _e(this, qu, () => {
      const n = Qe, e = new VideoDecoder({ output: async (o) => {
        const i = On;
        if (i(458) !== i(476)) {
          const s = await createImageBitmap(o), a = {};
          a[i(470)] = o[i(470)], a[i(417) + "t"] = o[i(417) + "t"], this[i(464)] = a, this[i(474)][i(447)](0, 0, this[i(453)], this[i(453)]);
          const c = this[i(467)][i(424)];
          this[i(481) + "n"] == i(484) ? (c[i(443)] = this[i(453)], c[i(453)] = this[i(443)], this[i(474)][i(395)](), this[i(474)][i(449)](0, this[i(443)]), this[i(474)][i(472)](Math.PI / 2), this[i(474)][i(450)](-1, -1), this[i(474)][i(433)](s, 0, 0, this[i(443)], this[i(453)]), this[i(474)][i(445)]()) : (c[i(443)] = this[i(443)], c[i(453)] = this[i(453)], this[i(474)][i(433)](s, 0, 0, this[i(443)], this[i(453)])), s[i(399)](), o[i(399)]();
        } else {
          const s = {};
          return s[i(443)] = _0x2ee854, s[i(453)] = _0x4b0ba6 * _0x16fe9e, s;
        }
      }, error: (o) => console[n(477)](n(389) + n(415), o) }), r = {};
      return r[n(457)] = this[n(457)], r[n(446) + n(478)] = this[n(446) + n(478)], r[n(480) + n(396)] = !0, e[n(397)](r), e;
    });
    _e(this, Vu, (n, e) => {
      const r = Qe, o = Array[r(441)](n)[r(416)](Array[r(441)](e));
      return new Uint8Array(o);
    });
    _e(this, Fu, (n) => {
      var s;
      const e = Qe;
      if (!this[e(411)] || this[e(411)][e(413)] == e(399) || !this[e(428)] || this[e(425)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n), o = performance[e(419)]() * 1e3;
      if (Bu(r, this[e(431)]))
        if (e(392) !== e(459)) {
          this[e(454)] = [];
          return;
        } else {
          if (!this[e(464)][e(470)]) return;
          const a = this[e(414) + "en"] ? this[e(405)] ? _0x5da89[e(439)] - 20 : this[e(408)] : this[e(408)], c = this[e(481) + "n"] == e(484) ? _0x44cf80[e(439)] : _0x44f285[e(473) + "t"] - (this[e(405)] ? 12 : 50), l = this[e(469)](this[e(464)][e(470)], this[e(464)][e(417) + "t"], a, c);
          this[e(443)] = l[e(443)], this[e(453)] = l[e(453)], !this[e(463)] && ((s = this[e(466) + "ct"]) == null || s.call(this, !0));
          const u = {};
          u[e(443)] = l[e(443)], u[e(453)] = l[e(453)], this[e(463)] = u;
        }
      else if (Bu(r, this[e(432)])) {
        const a = r[e(427)](5), c = new DataView(a[e(401)]);
        o = Number(c[e(398) + "64"](0, !1)), r = this[e(430) + e(412)](), this[e(454)] = [];
      } else {
        this[e(454)][e(456)](r);
        return;
      }
      const i = J_(r);
      if (i)
        if (e(437) !== e(418)) this[e(429)] = r;
        else {
          this[e(454)] = [];
          return;
        }
      if (this[e(429)] && this[e(428)]) {
        !this[e(444)] && (r = this[e(430) + e(422)](this[e(428)], this[e(429)]), this[e(444)] = !0);
        const a = {};
        a[e(440)] = o, a[e(406)] = e(i ? 393 : 391), a[e(409)] = r, this[e(411)][e(471)](new EncodedVideoChunk(a));
      }
    });
    const a = On;
    this[a(467)] = r, this[a(457)] = o, this[a(405)] = n, this[a(408)] = e, this[a(466) + "ct"] = s, this[a(443)] = null, this[a(453)] = null, this[a(444)] = null, this[a(428)] = null, this[a(429)] = null;
    const c = {};
    c[a(443)] = null, c[a(453)] = null, this[a(464)] = c, this[a(463)] = null, this[a(481) + "n"] = a(462), this[a(414) + "en"] = null, this[a(446) + a(478)] = i, this[a(474)] = r[a(424)][a(482)]("2d"), this[a(411)] = this[a(452) + "er"](), this[a(454)] = [], this[a(431)] = new Uint8Array([115, 116, 97, 114, 116]), this[a(432)] = new Uint8Array([101, 110, 100, 33, 33]), this[a(461) + a(410)] = 0, this[a(425)];
  }
  [(Ku = Qe(469), Yu = Qe(475), Xu = Qe(390) + Qe(436), Gu = Qe(407), Wu = Qe(483) + "ta", qu = Qe(452) + "er", Uu = Qe(430) + Qe(412), Vu = Qe(430) + Qe(422), Fu = Qe(471), Uu)]() {
    const n = Qe;
    let e = 0;
    for (const i of this[n(454)]) e += i[n(404)];
    const r = new Uint8Array(e);
    let o = 0;
    for (const i of this[n(454)])
      r[n(451)](i, o), o += i[n(404)];
    return r;
  }
}
const ht = [];
for (let t = 0; t < 256; ++t)
  ht.push((t + 256).toString(16).slice(1));
function Z_(t, n = 0) {
  return (ht[t[n + 0]] + ht[t[n + 1]] + ht[t[n + 2]] + ht[t[n + 3]] + "-" + ht[t[n + 4]] + ht[t[n + 5]] + "-" + ht[t[n + 6]] + ht[t[n + 7]] + "-" + ht[t[n + 8]] + ht[t[n + 9]] + "-" + ht[t[n + 10]] + ht[t[n + 11]] + ht[t[n + 12]] + ht[t[n + 13]] + ht[t[n + 14]] + ht[t[n + 15]]).toLowerCase();
}
let qs;
const eS = new Uint8Array(16);
function tS() {
  if (!qs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    qs = crypto.getRandomValues.bind(crypto);
  }
  return qs(eS);
}
const nS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Hu = { randomUUID: nS };
function Oh(t, n, e) {
  var o;
  if (Hu.randomUUID && !t)
    return Hu.randomUUID();
  t = t || {};
  const r = t.random ?? ((o = t.rng) == null ? void 0 : o.call(t)) ?? tS();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Z_(r);
}
var mn = Xr;
(function(t, n) {
  for (var e = Xr, r = t(); ; )
    try {
      var o = parseInt(e(376)) / 1 * (-parseInt(e(389)) / 2) + -parseInt(e(374)) / 3 * (-parseInt(e(392)) / 4) + -parseInt(e(375)) / 5 + -parseInt(e(387)) / 6 * (-parseInt(e(381)) / 7) + parseInt(e(368)) / 8 * (-parseInt(e(383)) / 9) + -parseInt(e(373)) / 10 * (-parseInt(e(377)) / 11) + -parseInt(e(394)) / 12 * (-parseInt(e(369)) / 13);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(bi, 321339);
function Xr(t, n) {
  var e = bi();
  return Xr = function(r, o) {
    r = r - 368;
    var i = e[r];
    return i;
  }, Xr(t, n);
}
class Th {
  constructor(n, e) {
    var r = Xr, o = {};
    o[r(386)] = n, o[r(379)] = e, this[r(372)] = o;
  }
  [mn(391)]() {
    var n = mn;
    return this[n(372)][n(388)] = n(384) + "ts", this[n(372)];
  }
  [mn(371)]() {
    var n = mn;
    return this[n(372)][n(388)] = n(384) + "ts", this[n(372)];
  }
  [mn(385)](n = 0) {
    var e = mn;
    return this[e(372)][e(388)] = e(382) + "nt", this[e(372)][e(380)] = n, this[e(372)];
  }
  [mn(370)](n = 0, e) {
    var r = mn;
    return this[r(372)][r(388)] = r(390) + r(393), this[r(372)][r(380)] = n, this[r(372)][r(378)] = e, this[r(372)];
  }
}
function bi() {
  var t = ["action", "10PBriXB", "setTextEle", "dumpJson", "4ojBckb", "ment", "18852auAEIM", "8XEGmQI", "4121QZzZHx", "setText", "all", "data", "666520DbHakg", "950472qYAyjp", "1892280kCgVoG", "79851LpBjJy", "99AELwxt", "text", "value", "index", "1013803aDgLYi", "clickEleme", "5447763ZNpfPJ", "findElemen", "click", "keyName", "12mEIXWE"];
  return bi = function() {
    return t;
  }, bi();
}
var De = yi;
(function(t, n) {
  for (var e = yi, r = t(); ; )
    try {
      var o = parseInt(e(434)) / 1 + -parseInt(e(438)) / 2 * (parseInt(e(450)) / 3) + parseInt(e(426)) / 4 * (parseInt(e(436)) / 5) + parseInt(e(429)) / 6 + -parseInt(e(441)) / 7 * (parseInt(e(445)) / 8) + -parseInt(e(430)) / 9 * (parseInt(e(433)) / 10) + -parseInt(e(432)) / 11 * (-parseInt(e(431)) / 12);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Si, 796153);
var Ju, Qu, Zu, e0;
e0 = De(448), Zu = De(435), Qu = De(447), Ju = De(428);
class Sn {
}
_e(Sn, e0, De(448)), _e(Sn, Zu, De(435)), _e(Sn, Qu, De(447)), _e(Sn, Ju, De(437));
function yi(t, n) {
  var e = Si();
  return yi = function(r, o) {
    r = r - 425;
    var i = e[r];
    return i;
  }, yi(t, n);
}
var t0, n0;
n0 = De(443), t0 = De(452);
class _i {
}
_e(_i, n0, De(444) + De(425)), _e(_i, t0, De(427) + De(449));
var r0, o0, i0, s0;
s0 = De(443), i0 = De(442), o0 = De(451), r0 = De(439);
class Ro {
}
_e(Ro, s0, De(443)), _e(Ro, i0, De(442)), _e(Ro, o0, De(451)), _e(Ro, r0, De(439));
function Si() {
  var t = ["clear", "start", "ODE", "609lOKBnn", "resourceId", "code", "EXT", "700652KOUgia", "KEYBOARD_C", "info", "3930258JwngPM", "531RlKaxk", "138924VlTRrz", "572mPfxGB", "251110gBBWLa", "568286SZtKPJ", "stop", "35dbNogm", "openInfo", "5162PfUTzT", "xpath", "set", "1748803EdIZNl", "className", "text", "KEYBOARD_T", "8cekjFY", "get"];
  return Si = function() {
    return t;
  }, Si();
}
var a0, c0;
c0 = De(446), a0 = De(440);
class wi {
}
_e(wi, c0, De(446)), _e(wi, a0, De(440));
var gn = Yr;
function Ci() {
  var t = ["724LIuPtG", "setText", "2495030WUpovi", "4550MbVcBm", "value", "dumpJson", "4732326Hxxbfm", "2014401rWmsSb", "394784hyWWnQ", "all", "72OamzBz", "callbackAp", "strategy", "8151493GGbwmV", "3343528TZdmkf", "click"];
  return Ci = function() {
    return t;
  }, Ci();
}
(function(t, n) {
  for (var e = Yr, r = t(); ; )
    try {
      var o = -parseInt(e(221)) / 1 + -parseInt(e(215)) / 2 + -parseInt(e(220)) / 3 + -parseInt(e(213)) / 4 * (-parseInt(e(216)) / 5) + parseInt(e(219)) / 6 + -parseInt(e(226)) / 7 + parseInt(e(227)) / 8 * (parseInt(e(223)) / 9);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ci, 818694);
class zu {
  constructor(n, e, r) {
    var o = Yr;
    this[o(225)] = n, this[o(217)] = e, this[o(224) + "i"] = r, this.el = new Th(this[o(225)], this[o(217)]);
  }
  async [gn(212)]({ index: n = 0, retry_time: e = 0, timeout: r = 5e3 } = {}) {
    var o = gn;
    return await this[o(224) + "i"](this.el[o(212)](n), r, e);
  }
  async [gn(214)]({ text: n, index: e = 0, retry_time: r = 0, timeout: o = 5e3 } = {}) {
    var i = gn;
    return await this[i(224) + "i"](this.el[i(214)](e, n), o, r);
  }
  async [gn(222)]({ retry_time: n = 0, timeout: e = 5e3 } = {}) {
    var r = gn;
    return await this[r(224) + "i"](this.el[r(222)](), e, n);
  }
  async [gn(218)](n) {
    var e = gn;
    return await this[e(224) + "i"](this.el[e(218)](), n);
  }
}
function Yr(t, n) {
  var e = Ci();
  return Yr = function(r, o) {
    r = r - 212;
    var i = e[r];
    return i;
  }, Yr(t, n);
}
var et = Oi;
(function(t, n) {
  for (var e = Oi, r = t(); ; )
    try {
      var o = -parseInt(e(195)) / 1 * (-parseInt(e(211)) / 2) + parseInt(e(200)) / 3 * (-parseInt(e(170)) / 4) + -parseInt(e(185)) / 5 + parseInt(e(189)) / 6 + parseInt(e(178)) / 7 + parseInt(e(204)) / 8 + parseInt(e(206)) / 9 * (-parseInt(e(199)) / 10);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ei, 730590);
function Ei() {
  var t = ["text", "setTextEve", "unlockScre", "1518310ejalKe", "393bXIBrt", "setText", "action", "app", "8778392opxnsi", "toast", "72WLzHTA", "keyboard", "keyEvent", "typeKey", "toastEvent", "2pYvgVN", "click", "findElemen", "swipe", "18756PCXNNc", "key", "repeat", "command", "ent", "start_x", "duration", "clickEvent", "2154516TfzyKQ", "sendData", "keyAction", "keyName", "onScreenEv", "appEvent", "packageNam", "112675kOLzkn", "end_x", "clipboard", "ACTION_DOW", "5465928nWUyUA", "start_y", "meta_state", "end_y", "swipeEvent", "taskId", "265957BSxHzQ"];
  return Ei = function() {
    return t;
  }, Ei();
}
class At {
  static [et(179)](n) {
    var e = et;
    return n[e(194)] = Oh(), n;
  }
  static [et(205)](n) {
    var e = et, r = {};
    return r[e(202)] = e(210), r[e(196)] = n, this[e(179)](r);
  }
  static [et(187)](n, e = "") {
    var r = et, o = {};
    return o[r(202)] = r(187), o[r(181)] = n, o[r(196)] = e, this[r(179)](o);
  }
  static [et(198) + "en"]() {
    var n = et, e = {};
    return e[n(202)] = n(182) + n(174), this[n(179)](e);
  }
  static [et(213) + "ts"](n, e) {
    var r = et;
    return new Th(n, e, this[r(179)]);
  }
  static [et(203)](n, e) {
    var r = et, o = {};
    return o[r(202)] = r(183), o[r(173)] = n, o[r(184) + "e"] = e, this[r(179)](o);
  }
  static [et(207)](n, e, r = 0, o = 0) {
    var i = et, s = {};
    return s[i(202)] = i(208), s[i(180)] = i(188) + "N", s[i(209)] = n, s[i(171)] = e, s[i(172)] = o, s[i(191)] = r, this[i(179)](s);
  }
  static [et(212)](n, e, r) {
    var o = et, i = {};
    return i[o(202)] = o(177), i.x = n, i.y = e, i[o(176)] = r, this[o(179)](i);
  }
  static [et(169)](n, e, r, o, i) {
    var s = et, a = {};
    return a[s(202)] = s(193), a[s(175)] = n, a[s(190)] = e, a[s(186)] = r, a[s(192)] = o, a[s(176)] = i, this[s(179)](a);
  }
  static [et(201)](n) {
    var e = et, r = {};
    return r[e(202)] = e(197) + "nt", r[e(196)] = n, this[e(179)](r);
  }
}
function Oi(t, n) {
  var e = Ei();
  return Oi = function(r, o) {
    r = r - 169;
    var i = e[r];
    return i;
  }, Oi(t, n);
}
function Kr(t, n) {
  const e = Ti();
  return Kr = function(r, o) {
    return r = r - 384, e[r];
  }, Kr(t, n);
}
(function(t, n) {
  const e = Kr, r = t();
  for (; ; )
    try {
      if (-parseInt(e(557)) / 1 * (parseInt(e(542)) / 2) + parseInt(e(564)) / 3 + -parseInt(e(398)) / 4 + parseInt(e(507)) / 5 * (parseInt(e(385)) / 6) + -parseInt(e(452)) / 7 + -parseInt(e(441)) / 8 * (parseInt(e(580)) / 9) + parseInt(e(504)) / 10 * (parseInt(e(391)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ti, 360532);
function Ti() {
  const t = ["start", "XjrME", "FpWJv", "een", "onSyncIFra", "userAgent", "swipe", "home", "POST", "primary", "toast", "passwd", "461lubmwD", "kYAIH", "Theut", "tVtRN", "ror", "large", "ent", "1705125hFdtfS", "QvjSC", "center", "setPause", "Content-Ty", "CLfZY", "mozFullScr", "code", "type_clien", "pUQev", "index", "reconnecti", "video_meta", "nsJZW", "timeout", "join", "36DjzpHw", "orientatio", "delete", "value", "6OLeldQ", "fiZLX", "dumpJson", "eUGuP", "qGuSN", "clear", "9296089BtHMKl", "Color", "WDMcK", "set", "connection", "LNnlG", "reload", "2418640yUDNIg", "qMild", "password", "red", "bjHNK", "FxGil", "isChunk", "Xjsqx", "draggable", "error", "pGxTV", "keyboard", "type", "unlock", "addEventLi", "back", "msg", "clipboard", "tListener", "YGEht", "tykHO", "sync", "autoResize", "size", "JUFwN", "hvhfD", "COPY_TEXT", "background", "connect", "screenElem", "mhwgy", "shortcutEv", "now", "enElement", "map", "CxImk", "recents", "ntsEi", "get", "Reconnect", "writeText", "canvas_", "CERZn", "1277504nfKQda", "get_video_", "_time time", "Element", "ydgbi", "method", "tion", "children", "unlockScre", "ksKxu", "action", "4297531ATRuok", "width", "middle", "setFullscr", "test", "toDataURL", "connect_er", "text", "info", "findElemen", "margin", "lcCVh", " closed co", "stop", "isDown", "Timeout wa", "isMobile", "headers", "sYnvR", "screen_mai", "TXCtV", "app", "emit", "iting for ", "screen_", "data", "SfDsQ", "change", "isFullsCre", "otal retry", "dDnht", "FZAEk", "false", "iframe", "fullscreen", "yYpmN", "removeEven", "LJgDr", "iOldl", "applicatio", "meta", "n/json", "wTUCq", "khKLt", "zDLQg", "parse", "click", "control", "UNPYB", "join_room", "tabIndex", "qfSLs", "20IeiQJF", "NyxAn", "timeSync", "1785735efDapV", "setOrienta", "Exceeded t", "decode", "setText", "height", "taskId", "ms)", "current", "message", "response", "pIGPy", "setVideoMe", "length", "stener", "TCHsH", "rpDBR", "fixTouch", "eenElement", "dDLnS", "device_id", "showMenu", "screen", "status", "anmvJ", "shortcut", "onScreenEv", "vOGtV", "eBeKU", "msFullscre", "disconnect", "NMBYk", "mcEbg", "url", "XYwtG", "1726twOoxg", "de: ", "webkitFull"];
  return Ti = function() {
    return t;
  }, Ti();
}
const OS = fr((t, n) => {
  const e = Kr, { api: r, dataDevice: o, showAssistive: i, showDeviceId: s, onSyncEvent: a, onSyncButton: c, maxWidth: l, codec: u, hardwareAcceleration: d } = t, x = o[e(527)], g = /iPhone|iPad|iPod|Android/i[e(456)](navigator[e(550)]), f = e(499), m = ge(null), p = ge(null), b = ge(null), w = ge(null), [E, T] = St(null), [h, $] = St(null), C = {};
  C[e(528)] = !1, C[e(466)] = !1;
  const [L, D] = St(C), [W, re] = St(null), [J, F] = St(null), U = e(439) + x, Q = e(476) + x, j = e(471) + "n_" + x, [k, P] = St([]), M = ge(null), V = ge(null), z = ge(null), q = ge({}), te = ge(/* @__PURE__ */ new Map());
  Xe(() => {
    $(s);
  }, [s]);
  const K = (_) => {
    const R = e;
    R(386) !== R(422) ? P((y) => [...y, _]) : _0x22fc3c[R(515)][R(474)](R(516), _0xe6feca);
  }, ce = (_) => {
    const R = e;
    m[R(515)][R(474)](R(516), _), a == null || a(_);
  }, fe = (_) => new Promise((R) => setTimeout(R, _));
  async function oe(_, R = 5e3, y = 0) {
    const I = e, S = Date[I(430)]();
    let ie = null;
    for (; ; )
      if (I(547) !== I(547)) _0x34a10d();
      else {
        if (Date[I(430)]() - S > y) {
          const Ue = {};
          throw Ue[I(451)] = _[I(451)], Ue[I(530)] = !1, Ue[I(516)] = I(509) + I(481) + I(443) + " (" + y + I(514), ie || Ue;
        }
        try {
          return await new Promise((pt, mt) => {
            const ot = I, bt = Oh(), Pt = { ..._ };
            Pt[ot(513)] = bt;
            const kt = Pt, zt = setTimeout(() => {
              const Oe = ot;
              if (Oe(478) !== Oe(478)) _0x52b4db[Oe(515)][Oe(474)](Oe(516), _0x5e4f8c), _0x352b0b == null || _0x352b0b(_0x5323df);
              else {
                te[Oe(515)][Oe(582)](bt);
                const he = {};
                he[Oe(451)] = kt[Oe(451)], he[Oe(513)] = bt, he[Oe(530)] = !1, he[Oe(516)] = Oe(467) + Oe(475) + Oe(517), mt(he);
              }
            }, R);
            te[ot(515)][ot(394)](bt, (Oe) => {
              const he = ot;
              he(472) !== he(472) ? (_0x3596cf[he(515)] && _0x232368[he(515)][he(420)](), _0x52304a = _0x1721ae(_0x329b26)) : (clearTimeout(zt), Oe[he(530)] == !0 ? pt(Oe) : mt(Oe));
            }), m[ot(515)][ot(474)](ot(516), kt);
          });
        } catch (Ue) {
          ie = Ue, await fe(500);
        }
      }
  }
  l0(n, () => ({ api: async function(_, R) {
    return await oe(_, R);
  }, sync: function(_) {
    const R = e;
    m[R(515)][R(474)](R(516), _);
  }, pause: function(_) {
    const R = e;
    if (z[R(515)] = _, M[R(515)][R(567)](_), !_) {
      const y = {};
      y[R(451)] = R(549) + "me", ws[R(474)](R(516), y);
    }
  }, deviceId: function() {
    return o[e(527)];
  }, resolution: function() {
    const _ = e;
    if (_(402) === _(402)) {
      const R = V[_(515)];
      return R[_(581) + "n"] = R[_(384)], delete R[_(451)], delete R[_(384)], delete R[_(513)], R;
    } else {
      const R = {};
      R[_(451)] = _(426), R[_(572) + "t"] = _0x16c8c0, R[_(527)] = _0x159e15[_(527)], R[_(468)] = _0x5a6ef2, R[_(556)] = _0x283d66[_(556)], _0x523b25[_(474)](_(501), R);
    }
  }, sleep: async function(_) {
    return await new Promise((R) => setTimeout(R, _));
  }, screenshot: function() {
    const _ = e;
    return b[_(515)][_(457)]();
  }, toast: async function(_, R) {
    const y = e;
    if (y(505) !== y(535)) return await oe(At[y(555)](_), R);
    {
      const I = {};
      I[y(451)] = y(442) + y(492), _0x121fef[y(474)](y(576), I);
    }
  }, unlockScreen: async function(_) {
    const R = e;
    if (R(408) === R(408)) return await oe(At[R(449) + "en"](), _);
    _0x41cce8[R(515)][R(420)]();
  }, pressHome: async function(_) {
    const R = e, y = {};
    return y[R(451)] = R(429) + R(563), y[R(532)] = R(552), y[R(477)] = "", await oe(y, _);
  }, pressBack: async function(_) {
    const R = e, y = {};
    return y[R(451)] = R(429) + R(563), y[R(532)] = R(413), y[R(477)] = "", await oe(y, _);
  }, pressSwitch: async function(_) {
    const R = e;
    if (R(522) === R(396)) _0x57fc82(!_0x89cd23);
    else {
      const y = {};
      return y[R(451)] = R(429) + R(563), y[R(532)] = R(434), y[R(477)] = "", await oe(y, _);
    }
  }, getClipboard: async function(_) {
    const R = e;
    if (R(483) !== R(483)) _0x270a4e[R(515)] && (_0x507c5c[R(515)][R(537)](), _0x540a42[R(515)] = null), _0x1b631e(null), _0x2cd49b([]), _0x5e3e99(null), _0x36c64d(_0xb7a1f9[R(430)]());
    else return await oe(At[R(415)](wi[R(436)]), _);
  }, setClipboard: async function(_, R) {
    const y = e;
    return await oe(At[y(415)](wi[y(394)], _), R);
  }, appStart: async function(_, R) {
    const y = e;
    return await oe(At[y(473)](Sn[y(545)], _), R);
  }, appStop: async function(_, R) {
    const y = e, I = {};
    return I[y(451)] = y(429) + y(563), I[y(532)] = y(552), I[y(477)] = "", await oe(I, R), await new Promise((S) => setTimeout(S, 1500)), await oe(At[y(473)](Sn[y(465)], _), R);
  }, appClear: async function(_, R) {
    const y = e;
    return await oe(At[y(473)](Sn[y(390)], _), R);
  }, appInfo: async function(_, R) {
    const y = e;
    if (y(428) !== y(428)) {
      const I = _0x2c01c5[y(515)][_0x7d0a3[y(513)]][y(579)]("");
      _0x562e39[y(477)] = _0x2a0905[y(497)](I), delete _0x105158[y(515)][_0x8a7a79[y(513)]];
    } else return await oe(At[y(473)](Sn[y(460)], _), R);
  }, click: async function(_, R, y, I) {
    return await oe(At[e(498)](_, R, 1), I);
  }, swipe: async function(_, R, y, I, S = 1, ie) {
    return await oe(At[e(551)](_, R, y, I, S), ie);
  }, keyCode: async function(_, R, y, I) {
    const S = e;
    return await oe(At[S(409)](_i[S(571)], _, R, y), I);
  }, keyText: async function(_, R) {
    const y = e;
    return await oe(At[y(409)](_i[y(459)], _), R);
  }, setText: async function(_, R) {
    return await oe(At[e(511)](_), R);
  }, findElements: function(_, R) {
    return new zu(_, R, oe);
  }, dumpJson: async function() {
    const _ = e;
    return await new zu(_(387), "", oe)[_(387)]();
  } })), Xe(() => {
    (async () => {
      const _ = Kr;
      if (_(440) !== _(558)) try {
        const R = {};
        R[_(568) + "pe"] = _(491) + _(493);
        const y = {};
        y[_(527)] = o[_(527)], y[_(400)] = o[_(556)];
        const I = {};
        I[_(540)] = r, I[_(446)] = _(553), I[_(578)] = 1e4, I[_(469)] = R, I[_(477)] = y;
        const S = I, ie = await j_(S);
        T(ie[_(477)]);
      } catch (R) {
        if (_(577) !== _(569)) {
          const y = {};
          y[_(414)] = R, y[_(410)] = _(407), K(y);
        } else _0x15e6e3[_(515)][_(537)](), _0x586522[_(515)] = null;
      }
      else {
        _0x34b49a[_(515)][_(582)](_0x3b0564);
        const R = {};
        R[_(451)] = _0x4a150a[_(451)], R[_(513)] = _0x3bf0f5, R[_(530)] = !1, R[_(516)] = _(467) + _(475) + _(517), _0x469804(R);
      }
    })();
  }, [J]), Xe(() => {
    const _ = e;
    if (m[_(515)] || !E) return;
    const R = {};
    R[_(575) + "on"] = !1;
    const y = Mo(E, R);
    return y.on(_(426), () => {
      const I = _;
      if (I(500) !== I(546)) {
        const S = {};
        S[I(451)] = I(426), S[I(572) + "t"] = f, S[I(527)] = o[I(527)], S[I(468)] = g, S[I(556)] = o[I(556)], y[I(474)](I(501), S);
      } else _0x3de63e(_0x3e552a);
    }), y.on(_(501), (I) => {
      const S = _;
      if (S(463) !== S(531))
        if (I[S(530)] == !0)
          if (S(503) === S(503)) {
            m[S(515)] = y, y[S(474)](S(516), { action: S(506), ts: Date[S(430)]() });
            const ie = {};
            ie[S(451)] = S(533) + S(563), y[S(474)](S(516), ie);
          } else {
            if (!_0x33c44b[S(515)][_0x33671e[S(513)]] && (_0x37863f[S(515)][_0x2fc125[S(513)]] = []), _0x19d32b[S(515)][_0x2a4492[S(513)]][_0x4b0382[S(574)]] = _0x1f46c8[S(477)], _0xb53dc8[S(404)]) return;
            if (!_0x3b828b[S(404)]) {
              const ie = _0x3125eb[S(515)][_0x6c817c[S(513)]][S(579)]("");
              _0x429d86[S(477)] = _0x18b6f1[S(497)](ie), delete _0xc20be3[S(515)][_0x16b747[S(513)]];
            }
          }
        else {
          const ie = {};
          ie[S(414)] = I[S(414)], ie[S(410)] = S(407), K(ie);
        }
      else _0x4cd767(_0x36be67);
    }), y.on(_(529), (I) => {
      const S = _;
      S(405) !== S(538) ? M[S(515)][S(510)](I) : (_0x12ae41(_0x5eda66), _0x46f271[S(530)] == !0 ? _0x2a23dc(_0x5a75ca) : _0x443bb2(_0x580d3c));
    }), y.on(_(576), (I) => {
      const S = _;
      if (S(490) !== S(388))
        if (I)
          if (S(539) !== S(534)) {
            if (M[S(515)][S(519) + "ta"](I), !M[S(515)][S(485)]) {
              const ie = {};
              ie[S(451)] = S(549) + "me", y[S(474)](S(516), ie);
            }
          } else if (_0x3e8c71 === _0x256cc9) {
            const ie = { ..._0x9444cc };
            ie[S(528)] = !1, _0x2d7994(ie);
          } else _0x49f311(_0x461788);
        else if (S(560) !== S(560)) {
          const ie = _0x66abf0[S(486) + S(444)] || _0x31312b[S(544) + S(427) + S(563)] || _0x3dbb54[S(570) + S(525)] || _0x488d0f[S(536) + S(431)];
          _0x38640a[S(515)][S(480) + "en"] = !!ie, _0x13c128[S(515)][S(455) + S(548)](!!ie), _0x4aa28a[S(515)][S(524)]();
        } else {
          const ie = {};
          ie[S(451)] = S(442) + S(492), y[S(474)](S(576), ie);
        }
      else _0x4b4d7d[S(515)][S(510)](_0x1fefad);
    }), y.on(_(516), (I) => {
      var ie;
      const S = _;
      if (S(445) === S(445)) {
        if ((I[S(451)] == S(424) || I[S(451)] == S(429) + S(563)) && I[S(459)][S(520)] > 0 ? navigator[S(415)][S(438)](I[S(459)]) : I[S(451)] == S(581) + "n" && (V[S(515)] = I, M[S(515)][S(508) + S(447)](I[S(384)]), (ie = w[S(515)]) == null || ie[S(524)](I[S(384)])), I[S(513)]) {
          if (I[S(451)] == S(461) + "ts")
            if (S(423) === S(423)) {
              if (!q[S(515)][I[S(513)]])
                if (S(496) !== S(496)) {
                  let Ue;
                  const pt = () => {
                    const mt = S;
                    _0x4c2731[mt(515)] && _0x3ca9b6[mt(515)][mt(420)](), Ue = _0x1e4d40(pt);
                  };
                  return pt(), () => _0x46c67b(Ue);
                } else q[S(515)][I[S(513)]] = [];
              if (q[S(515)][I[S(513)]][I[S(574)]] = I[S(477)], I[S(404)]) return;
              if (!I[S(404)]) {
                const Ue = q[S(515)][I[S(513)]][S(579)]("");
                I[S(477)] = JSON[S(497)](Ue), delete q[S(515)][I[S(513)]];
              }
            } else return new _0x5b584a(_0x172234, _0x24a0d7, _0x56a08d);
          const Ze = te[S(515)][S(436)](I[S(513)]);
          Ze && (Ze(I), te[S(515)][S(582)](I[S(513)]));
        }
      } else _0x5e81b3(_0xf085c5), _0xdb2809[S(515)][S(582)](_0x2bc255[S(513)]);
    }), y.on(_(458) + _(561), (I) => {
      const S = _;
      if (S(523) !== S(573)) {
        const ie = {};
        ie[S(414)] = I, ie[S(410)] = S(407), K(ie);
      } else return _0x5b8752[S(515)][S(457)]();
    }), y.on(_(537), (I) => {
      const S = _, ie = {};
      ie[S(414)] = S(395) + S(464) + S(543) + I[S(571)], ie[S(410)] = S(460), K(ie);
    }), () => {
      const I = _;
      I(393) === I(393) ? y && y[I(537)]() : _0xadc356[I(515)] = new _0x563846(_0x631e9f, _0x1843b4, _0x459bf4, _0x1a80fe, _0x4baa34, _0xfcd5a);
    };
  }, [E]), Xe(() => {
    const _ = e;
    if (_(559) === _(417)) {
      const R = {};
      R[_(414)] = _(395) + _(464) + _(543) + _0x4ed6b1[_(571)], R[_(410)] = _(460), _0x3dfd26(R);
    } else b[_(515)] && (M[_(515)] = new Q_(g, l, b, u, d, re));
  }, [J]), Xe(() => {
    const _ = e;
    if (_(518) !== _(403)) {
      const R = () => {
        const y = _;
        if (y(399) === y(435)) _0x3c91fc[y(515)] && (_0x4d4d37[y(515)] = new _0x31fbf9(_0x210240, _0x1ec8a1, _0x185bdc, _0x5e2147, _0x588fb0, _0x52a4c4));
        else {
          const I = document[y(486) + y(444)] || document[y(544) + y(427) + y(563)] || document[y(570) + y(525)] || document[y(536) + y(431)];
          M[y(515)][y(480) + "en"] = !!I, w[y(515)][y(455) + y(548)](!!I), w[y(515)][y(524)]();
        }
      };
      return document[_(412) + _(521)](_(486) + _(479), R), () => {
        const y = _;
        document[y(488) + y(416)](y(486) + y(479), R);
      };
    } else _0x58a4e6((R) => [...R, _0x5bf68b]);
  }, [J]), Xe(() => {
    const _ = e;
    if (_(470) === _(470)) {
      let R;
      const y = () => {
        const I = _;
        I(433) === I(433) ? (M[I(515)] && M[I(515)][I(420)](), R = requestAnimationFrame(y)) : _0x32a98f && _0x50e1a7[I(537)]();
      };
      return y(), () => cancelAnimationFrame(R);
    } else {
      const R = () => {
        const y = _, I = _0x2d5769[y(486) + y(444)] || _0xef61e4[y(544) + y(427) + y(563)] || _0x194731[y(570) + y(525)] || _0x51d86d[y(536) + y(431)];
        _0x418f06[y(515)][y(480) + "en"] = !!I, _0x372275[y(515)][y(455) + y(548)](!!I), _0x248650[y(515)][y(524)]();
      };
      return _0xfe3ff[_(412) + _(521)](_(486) + _(479), R), () => {
        const y = _;
        _0x2a5d14[y(488) + y(416)](y(486) + y(479), R);
      };
    }
  }, []), Xe(() => {
    const _ = e;
    if (_(494) === _(494)) {
      let R;
      return R = setInterval(() => {
        const y = _;
        if (y(565) === y(526)) _0x1ab223 == null || _0x1ab223(_0x334dc8[y(527)]);
        else if (m[y(515)])
          if (y(450) !== y(450))
            if (_0x4c5ff2) {
              if (_0x206d11[y(515)][y(519) + "ta"](_0x3e16e6), !_0x2a1fa6[y(515)][y(485)]) {
                const I = {};
                I[y(451)] = y(549) + "me", _0x1530e4[y(474)](y(516), I);
              }
            } else {
              const I = {};
              I[y(451)] = y(442) + y(492), _0xb81196[y(474)](y(576), I);
            }
          else m[y(515)][y(474)](y(516), { action: y(506), ts: Date[y(430)]() });
      }, 6e4), () => clearInterval(R);
    } else _0x5e56c5[_(537)]();
  }, [J]);
  const Ie = () => {
    const _ = e;
    _(495) !== _(482) ? (m[_(515)] && (m[_(515)][_(537)](), m[_(515)] = null), T(null), P([]), re(null), F(Date[_(430)]())) : _0x4c4e76[_(415)][_(438)](_0xde3c06[_(459)]);
  }, ye = {};
  ye[e(448)] = o[e(527)];
  const Be = {};
  Be[e(421)] = e(562);
  const Le = {};
  Le[e(421)] = e(562);
  const pe = {};
  pe[e(421)] = e(562);
  const Ke = {};
  Ke[e(512)] = 0, Ke[e(453)] = 0, Ke[e(425) + e(392)] = e(401);
  const ne = {};
  ne[e(448)] = o[e(527)];
  const Ve = {};
  Ve[e(436)] = L, Ve[e(394)] = D;
  const be = {};
  be.id = U, be[e(502)] = "0", be[e(406)] = e(484);
  const st = {};
  st[e(462)] = 5;
  const xt = {};
  return xt[e(462)] = 10, X.jsx(Xx, { id: j, children: k[e(520)] == 0 ? X.jsxs(X.Fragment, { children: [!W && X.jsxs(X.Fragment, { children: [h && X.jsx(sl, ye), X.jsxs(Jd, { align: e(566), gap: e(454), children: [X.jsx(Br, Be), X.jsx(Br, Le), X.jsx(Br, pe)] })] }), X.jsxs(Yx, { ref: p, id: Q, style: W ? {} : Ke, children: [h && X.jsx(sl, ne), i ? X.jsx(K_, { status: Ve, ref: w, canvasRef: b, displayId: x, isMobile: g, isShowDeviceId: h, onSenData: (_, R) => {
    const y = e;
    if (y(418) === y(541)) _0x31fbd5(_0x2264e3);
    else {
      if (z[y(515)]) return;
      if (R[y(532)] === y(527)) $(!h);
      else if (R[y(532)] === y(419)) c == null || c(o[y(527)]);
      else if (R[y(532)] === y(397)) Ie();
      else if (R[y(532)] === y(411)) {
        const I = {};
        I[y(451)] = y(533) + y(563), m[y(515)][y(474)](y(516), I);
      } else ce(R);
    }
  } }) : null, X.jsx(V_, { canvasContent: be, canvasRef: b, isMobile: g, assistive: L, onRemoteEvent: (_, R) => {
    const y = e;
    if (_ === Eh)
      if (y(489) !== y(489)) _0x538ebd[y(515)][_0x34c171[y(513)]] = [];
      else {
        const I = { ...L };
        I[y(528)] = !1, D(I);
      }
    else if (y(389) !== y(487)) ce(R);
    else {
      let I;
      return I = _0x33e438(() => {
        const S = y;
        _0x58fcdb[S(515)] && _0x2c3635[S(515)][S(474)](S(516), { action: S(506), ts: _0x555e21[S(430)]() });
      }, 6e4), () => _0x41edc7(I);
    }
  } })] })] }) : X.jsxs(X.Fragment, { children: [k == null ? void 0 : k[e(432)]((_, R) => X.jsx(Pd, { style: st, message: _[e(414)], type: _[e(410)], showIcon: !0, closable: !0 }, R)), X.jsx(rs, { style: xt, type: e(554), icon: X.jsx(W0, {}), onClick: Ie, children: e(437) })] }) });
});
function Za(t, n) {
  var e = Ri();
  return Za = function(r, o) {
    r = r - 372;
    var i = e[r];
    return i;
  }, Za(t, n);
}
(function(t, n) {
  for (var e = Za, r = t(); ; )
    try {
      var o = parseInt(e(377)) / 1 + parseInt(e(380)) / 2 + parseInt(e(373)) / 3 * (-parseInt(e(378)) / 4) + -parseInt(e(375)) / 5 * (parseInt(e(376)) / 6) + parseInt(e(379)) / 7 * (-parseInt(e(372)) / 8) + parseInt(e(374)) / 9 + parseInt(e(381)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ri, 989598);
function Ri() {
  var t = ["12662867lTiWlR", "22582SFNJqz", "26954800QFYHxd", "8Bdhiti", "5043534CXILqv", "10226295kerkpR", "380645QvmUiZ", "54rXsuht", "1321892aAMUqd", "4KiBhkN"];
  return Ri = function() {
    return t;
  }, Ri();
}
export {
  OS as ViewRP
};
