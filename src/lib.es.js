import * as b from "react";
import Oe, { isValidElement as fl, version as dl, useContext as _t, createContext as ti, useRef as xe, useLayoutEffect as hl, useEffect as Ne, useState as Ie, forwardRef as Hs, useImperativeHandle as Us } from "react";
import Ti from "react-dom";
function pl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var jn = { exports: {} }, nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oi;
function ml() {
  if (Oi) return nn;
  Oi = 1;
  var t = Oe, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, f = {}, d = null, v = null;
    c !== void 0 && (d = "" + c), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (f[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: e, type: a, key: d, ref: v, props: f, _owner: o.current };
  }
  return nn.Fragment = n, nn.jsx = s, nn.jsxs = s, nn;
}
var rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri;
function gl() {
  return Ri || (Ri = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Oe, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var C = g && h[g] || h[m];
      return typeof C == "function" ? C : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(h) {
      {
        for (var C = arguments.length, _ = new Array(C > 1 ? C - 1 : 0), V = 1; V < C; V++)
          _[V - 1] = arguments[V];
        A("error", h, _);
      }
    }
    function A(h, C, _) {
      {
        var V = y.ReactDebugCurrentFrame, Q = V.getStackAddendum();
        Q !== "" && (C += "%s", _ = _.concat([Q]));
        var ne = _.map(function(K) {
          return String(K);
        });
        ne.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ne);
      }
    }
    var O = !1, w = !1, R = !1, T = !1, k = !1, j;
    j = Symbol.for("react.module.reference");
    function z(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || k || h === o || h === c || h === u || T || h === v || O || w || R || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === s || h.$$typeof === a || h.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === j || h.getModuleId !== void 0));
    }
    function W(h, C, _) {
      var V = h.displayName;
      if (V)
        return V;
      var Q = C.displayName || C.name || "";
      return Q !== "" ? _ + "(" + Q + ")" : _;
    }
    function H(h) {
      return h.displayName || "Context";
    }
    function x(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var C = h;
            return H(C) + ".Consumer";
          case s:
            var _ = h;
            return H(_._context) + ".Provider";
          case l:
            return W(h, h.render, "ForwardRef");
          case f:
            var V = h.displayName || null;
            return V !== null ? V : x(h.type) || "Memo";
          case d: {
            var Q = h, ne = Q._payload, K = Q._init;
            try {
              return x(K(ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, M = 0, P, L, U, G, J, te, ee;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function ae() {
      {
        if (M === 0) {
          P = console.log, L = console.info, U = console.warn, G = console.error, J = console.group, te = console.groupCollapsed, ee = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
        M++;
      }
    }
    function ie() {
      {
        if (M--, M === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, h, {
              value: P
            }),
            info: N({}, h, {
              value: L
            }),
            warn: N({}, h, {
              value: U
            }),
            error: N({}, h, {
              value: G
            }),
            group: N({}, h, {
              value: J
            }),
            groupCollapsed: N({}, h, {
              value: te
            }),
            groupEnd: N({}, h, {
              value: ee
            })
          });
        }
        M < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = y.ReactCurrentDispatcher, ce;
    function Re(h, C, _) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (Q) {
            var V = Q.stack.trim().match(/\n( *(at )?)/);
            ce = V && V[1] || "";
          }
        return `
` + ce + h;
      }
    }
    var Be = !1, Me;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new $e();
    }
    function Pe(h, C) {
      if (!h || Be)
        return "";
      {
        var _ = Me.get(h);
        if (_ !== void 0)
          return _;
      }
      var V;
      Be = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ne;
      ne = me.current, me.current = null, ae();
      try {
        if (C) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (_e) {
              V = _e;
            }
            Reflect.construct(h, [], K);
          } else {
            try {
              K.call();
            } catch (_e) {
              V = _e;
            }
            h.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            V = _e;
          }
          h();
        }
      } catch (_e) {
        if (_e && V && typeof _e.stack == "string") {
          for (var X = _e.stack.split(`
`), Ce = V.stack.split(`
`), le = X.length - 1, de = Ce.length - 1; le >= 1 && de >= 0 && X[le] !== Ce[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (X[le] !== Ce[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || X[le] !== Ce[de]) {
                    var he = `
` + X[le].replace(" at new ", " at ");
                    return h.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", h.displayName)), typeof h == "function" && Me.set(h, he), he;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        Be = !1, me.current = ne, ie(), Error.prepareStackTrace = Q;
      }
      var Mt = h ? h.displayName || h.name : "", xt = Mt ? Re(Mt) : "";
      return typeof h == "function" && Me.set(h, xt), xt;
    }
    function Ze(h, C, _) {
      return Pe(h, !1);
    }
    function F(h) {
      var C = h.prototype;
      return !!(C && C.isReactComponent);
    }
    function Fe(h, C, _) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return Pe(h, F(h));
      if (typeof h == "string")
        return Re(h);
      switch (h) {
        case c:
          return Re("Suspense");
        case u:
          return Re("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Ze(h.render);
          case f:
            return Fe(h.type, C, _);
          case d: {
            var V = h, Q = V._payload, ne = V._init;
            try {
              return Fe(ne(Q), C, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, ot = {}, Et = y.ReactDebugCurrentFrame;
    function Je(h) {
      if (h) {
        var C = h._owner, _ = Fe(h.type, h._source, C ? C.type : null);
        Et.setExtraStackFrame(_);
      } else
        Et.setExtraStackFrame(null);
    }
    function St(h, C, _, V, Q) {
      {
        var ne = Function.call.bind(ve);
        for (var K in h)
          if (ne(h, K)) {
            var X = void 0;
            try {
              if (typeof h[K] != "function") {
                var Ce = Error((V || "React class") + ": " + _ + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              X = h[K](C, K, V, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              X = le;
            }
            X && !(X instanceof Error) && (Je(Q), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", _, K, typeof X), Je(null)), X instanceof Error && !(X.message in ot) && (ot[X.message] = !0, Je(Q), E("Failed %s type: %s", _, X.message), Je(null));
          }
      }
    }
    var Se = Array.isArray;
    function ue(h) {
      return Se(h);
    }
    function ke(h) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, _ = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _;
      }
    }
    function lt(h) {
      try {
        return it(h), !1;
      } catch {
        return !0;
      }
    }
    function it(h) {
      return "" + h;
    }
    function An(h) {
      if (lt(h))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ke(h)), it(h);
    }
    var Tn = y.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, On, Rn;
    function Nr(h) {
      if (ve.call(h, "ref")) {
        var C = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Lr(h) {
      if (ve.call(h, "key")) {
        var C = Object.getOwnPropertyDescriptor(h, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function jr(h, C) {
      typeof h.ref == "string" && Tn.current;
    }
    function Mr(h, C) {
      {
        var _ = function() {
          On || (On = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Dr(h, C) {
      {
        var _ = function() {
          Rn || (Rn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Ir = function(h, C, _, V, Q, ne, K) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: C,
        ref: _,
        props: K,
        // Record the component responsible for creating this element.
        _owner: ne
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function Br(h, C, _, V, Q) {
      {
        var ne, K = {}, X = null, Ce = null;
        _ !== void 0 && (An(_), X = "" + _), Lr(C) && (An(C.key), X = "" + C.key), Nr(C) && (Ce = C.ref, jr(C, Q));
        for (ne in C)
          ve.call(C, ne) && !_r.hasOwnProperty(ne) && (K[ne] = C[ne]);
        if (h && h.defaultProps) {
          var le = h.defaultProps;
          for (ne in le)
            K[ne] === void 0 && (K[ne] = le[ne]);
        }
        if (X || Ce) {
          var de = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          X && Mr(K, de), Ce && Dr(K, de);
        }
        return Ir(h, X, Ce, Q, V, Tn.current, K);
      }
    }
    var Jt = y.ReactCurrentOwner, Pn = y.ReactDebugCurrentFrame;
    function ut(h) {
      if (h) {
        var C = h._owner, _ = Fe(h.type, h._source, C ? C.type : null);
        Pn.setExtraStackFrame(_);
      } else
        Pn.setExtraStackFrame(null);
    }
    var Qt;
    Qt = !1;
    function en(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function kn() {
      {
        if (Jt.current) {
          var h = x(Jt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function _n(h) {
      return "";
    }
    var wt = {};
    function Lt(h) {
      {
        var C = kn();
        if (!C) {
          var _ = typeof h == "string" ? h : h.displayName || h.name;
          _ && (C = `

Check the top-level render call using <` + _ + ">.");
        }
        return C;
      }
    }
    function Ct(h, C) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var _ = Lt(C);
        if (wt[_])
          return;
        wt[_] = !0;
        var V = "";
        h && h._owner && h._owner !== Jt.current && (V = " It was passed a child from " + x(h._owner.type) + "."), ut(h), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, V), ut(null);
      }
    }
    function jt(h, C) {
      {
        if (typeof h != "object")
          return;
        if (ue(h))
          for (var _ = 0; _ < h.length; _++) {
            var V = h[_];
            en(V) && Ct(V, C);
          }
        else if (en(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var Q = p(h);
          if (typeof Q == "function" && Q !== h.entries)
            for (var ne = Q.call(h), K; !(K = ne.next()).done; )
              en(K.value) && Ct(K.value, C);
        }
      }
    }
    function ft(h) {
      {
        var C = h.type;
        if (C == null || typeof C == "string")
          return;
        var _;
        if (typeof C == "function")
          _ = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === f))
          _ = C.propTypes;
        else
          return;
        if (_) {
          var V = x(C);
          St(_, h.props, "prop", V, h);
        } else if (C.PropTypes !== void 0 && !Qt) {
          Qt = !0;
          var Q = x(C);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(h) {
      {
        for (var C = Object.keys(h.props), _ = 0; _ < C.length; _++) {
          var V = C[_];
          if (V !== "children" && V !== "key") {
            ut(h), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), ut(null);
            break;
          }
        }
        h.ref !== null && (ut(h), E("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var tn = {};
    function Nn(h, C, _, V, Q, ne) {
      {
        var K = z(h);
        if (!K) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = _n();
          Ce ? X += Ce : X += kn();
          var le;
          h === null ? le = "null" : ue(h) ? le = "array" : h !== void 0 && h.$$typeof === e ? (le = "<" + (x(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, X);
        }
        var de = Br(h, C, _, Q, ne);
        if (de == null)
          return de;
        if (K) {
          var he = C.children;
          if (he !== void 0)
            if (V)
              if (ue(he)) {
                for (var Mt = 0; Mt < he.length; Mt++)
                  jt(he[Mt], h);
                Object.freeze && Object.freeze(he);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jt(he, h);
        }
        if (ve.call(C, "key")) {
          var xt = x(h), _e = Object.keys(C).filter(function(ul) {
            return ul !== "key";
          }), zr = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!tn[xt + zr]) {
            var ll = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zr, xt, ll, xt), tn[xt + zr] = !0;
          }
        }
        return h === r ? dt(de) : ft(de), de;
      }
    }
    function Ee(h, C, _) {
      return Nn(h, C, _, !0);
    }
    function Ln(h, C, _) {
      return Nn(h, C, _, !1);
    }
    var Fr = Ln, fe = Ee;
    rn.Fragment = r, rn.jsx = Fr, rn.jsxs = fe;
  }()), rn;
}
var Pi;
function vl() {
  return Pi || (Pi = 1, process.env.NODE_ENV === "production" ? jn.exports = ml() : jn.exports = gl()), jn.exports;
}
var I = vl();
const nt = /* @__PURE__ */ Object.create(null);
nt.open = "0";
nt.close = "1";
nt.ping = "2";
nt.pong = "3";
nt.message = "4";
nt.upgrade = "5";
nt.noop = "6";
const Yn = /* @__PURE__ */ Object.create(null);
Object.keys(nt).forEach((t) => {
  Yn[nt[t]] = t;
});
const so = { type: "error", data: "parser error" }, qs = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ws = typeof ArrayBuffer == "function", Xs = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, ni = ({ type: t, data: e }, n, r) => qs && e instanceof Blob ? n ? r(e) : ki(e, r) : Ws && (e instanceof ArrayBuffer || Xs(e)) ? n ? r(e) : ki(new Blob([e]), r) : r(nt[t] + (e || "")), ki = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function _i(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Vr;
function yl(t, e) {
  if (qs && t.data instanceof Blob)
    return t.data.arrayBuffer().then(_i).then(e);
  if (Ws && (t.data instanceof ArrayBuffer || Xs(t.data)))
    return e(_i(t.data));
  ni(t, !1, (n) => {
    Vr || (Vr = new TextEncoder()), e(Vr.encode(n));
  });
}
const Ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", un = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Ni.length; t++)
  un[Ni.charCodeAt(t)] = t;
const bl = (t) => {
  let e = t.length * 0.75, n = t.length, r, o = 0, i, s, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (r = 0; r < n; r += 4)
    i = un[t.charCodeAt(r)], s = un[t.charCodeAt(r + 1)], a = un[t.charCodeAt(r + 2)], l = un[t.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | l & 63;
  return c;
}, El = typeof ArrayBuffer == "function", ri = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Ys(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Sl(t.substring(1), e)
  } : Yn[n] ? t.length > 1 ? {
    type: Yn[n],
    data: t.substring(1)
  } : {
    type: Yn[n]
  } : so;
}, Sl = (t, e) => {
  if (El) {
    const n = bl(t);
    return Ys(n, e);
  } else
    return { base64: !0, data: t };
}, Ys = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Ks = "", wl = (t, e) => {
  const n = t.length, r = new Array(n);
  let o = 0;
  t.forEach((i, s) => {
    ni(i, !1, (a) => {
      r[s] = a, ++o === n && e(r.join(Ks));
    });
  });
}, Cl = (t, e) => {
  const n = t.split(Ks), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = ri(n[o], e);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function xl() {
  return new TransformStream({
    transform(t, e) {
      yl(t, (n) => {
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
        t.data && typeof t.data != "string" && (o[0] |= 128), e.enqueue(o), e.enqueue(n);
      });
    }
  });
}
let Hr;
function Mn(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function Dn(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let o = 0; o < e; o++)
    n[o] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function Al(t, e) {
  Hr || (Hr = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Mn(n) < 1)
            break;
          const l = Dn(n, 1);
          i = (l[0] & 128) === 128, o = l[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Mn(n) < 2)
            break;
          const l = Dn(n, 2);
          o = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Mn(n) < 8)
            break;
          const l = Dn(n, 8), c = new DataView(l.buffer, l.byteOffset, l.length), u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(so);
            break;
          }
          o = u * Math.pow(2, 32) + c.getUint32(4), r = 3;
        } else {
          if (Mn(n) < o)
            break;
          const l = Dn(n, o);
          a.enqueue(ri(i ? l : Hr.decode(l), e)), r = 0;
        }
        if (o === 0 || o > t) {
          a.enqueue(so);
          break;
        }
      }
    }
  });
}
const Gs = 4;
function be(t) {
  if (t) return Tl(t);
}
function Tl(t) {
  for (var e in be.prototype)
    t[e] = be.prototype[e];
  return t;
}
be.prototype.on = be.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
be.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
be.prototype.off = be.prototype.removeListener = be.prototype.removeAllListeners = be.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === e || r.fn === e) {
      n.splice(o, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
be.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r)
      n[r].apply(this, e);
  }
  return this;
};
be.prototype.emitReserved = be.prototype.emit;
be.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
be.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const pr = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), Ve = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Ol = "arraybuffer";
function $s(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Rl = Ve.setTimeout, Pl = Ve.clearTimeout;
function mr(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Rl.bind(Ve), t.clearTimeoutFn = Pl.bind(Ve)) : (t.setTimeoutFn = Ve.setTimeout.bind(Ve), t.clearTimeoutFn = Ve.clearTimeout.bind(Ve));
}
const kl = 1.33;
function _l(t) {
  return typeof t == "string" ? Nl(t) : Math.ceil((t.byteLength || t.size) * kl);
}
function Nl(t) {
  let e = 0, n = 0;
  for (let r = 0, o = t.length; r < o; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Zs() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Ll(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function jl(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Ml extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class oi extends be {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, mr(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
  onError(e, n, r) {
    return super.emitReserved("error", new Ml(e, n, r)), this;
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
  send(e) {
    this.readyState === "open" && this.write(e);
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
  onData(e) {
    const n = ri(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = Ll(e);
    return n.length ? "?" + n : "";
  }
}
class Dl extends oi {
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
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
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
  onData(e) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Cl(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, wl(e, (n) => {
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
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Zs()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let Js = !1;
try {
  Js = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Il = Js;
function Bl() {
}
class Fl extends Dl {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const r = this.request({
      method: "POST",
      data: e
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
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = e;
  }
}
let Ft = class Kn extends be {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, mr(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = $s(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
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
    typeof document < "u" && (this._index = Kn.requestsCount++, Kn.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Bl, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Kn.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
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
Ft.requestsCount = 0;
Ft.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Li);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Ve ? "pagehide" : "unload";
    addEventListener(t, Li, !1);
  }
}
function Li() {
  for (let t in Ft.requests)
    Ft.requests.hasOwnProperty(t) && Ft.requests[t].abort();
}
const zl = function() {
  const t = Qs({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class Vl extends Fl {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = zl && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new Ft(Qs, this.uri(), e);
  }
}
function Qs(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Il))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Ve[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const ea = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Hl extends oi {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = ea ? {} : $s(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, n, r);
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
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = n === e.length - 1;
      ni(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && pr(() => {
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
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Zs()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const Ur = Ve.WebSocket || Ve.MozWebSocket;
class Ul extends Hl {
  createSocket(e, n, r) {
    return ea ? new Ur(e, n, r) : n ? new Ur(e, n) : new Ur(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class ql extends oi {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const n = Al(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), o = xl();
        o.readable.pipeTo(e.writable), this._writer = o.writable.getWriter();
        const i = () => {
          r.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), i());
          }).catch((a) => {
          });
        };
        i();
        const s = { type: "open" };
        this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`), this._writer.write(s).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = n === e.length - 1;
      this._writer.write(r).then(() => {
        o && pr(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const Wl = {
  websocket: Ul,
  webtransport: ql,
  polling: Vl
}, Xl = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Yl = [
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
function ao(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let o = Xl.exec(t || ""), i = {}, s = 14;
  for (; s--; )
    i[Yl[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Kl(i, i.path), i.queryKey = Gl(i, i.query), i;
}
function Kl(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Gl(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const co = typeof addEventListener == "function" && typeof removeEventListener == "function", Gn = [];
co && addEventListener("offline", () => {
  Gn.forEach((t) => t());
}, !1);
class gt extends be {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = Ol, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = ao(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = ao(n.host).host);
    mr(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = jl(this.opts.query)), co && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Gn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Gs, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](r);
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
    const e = this.opts.rememberUpgrade && gt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(e);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", gt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
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
      if (o && (n += _l(o)), r > 0 && n > this._maxPayload)
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
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, pr(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
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
  _sendPacket(e, n, r, o) {
    if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: e,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (gt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), co && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Gn.indexOf(this._offlineEventListener);
        r !== -1 && Gn.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
gt.protocol = Gs;
class $l extends gt {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let n = this.createTransport(e), r = !1;
    gt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            gt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
    function l() {
      s("socket closed");
    }
    function c(f) {
      n && f.name !== n.name && i();
    }
    const u = () => {
      n.removeListener("open", o), n.removeListener("error", s), n.removeListener("close", a), this.off("close", l), this.off("upgrading", c);
    };
    n.once("open", o), n.once("error", s), n.once("close", a), this.once("close", l), this.once("upgrading", c), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
}
let Zl = class extends $l {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Wl[o]).filter((o) => !!o)), super(e, r);
  }
};
function Jl(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = ao(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Ql = typeof ArrayBuffer == "function", eu = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, ta = Object.prototype.toString, tu = typeof Blob == "function" || typeof Blob < "u" && ta.call(Blob) === "[object BlobConstructor]", nu = typeof File == "function" || typeof File < "u" && ta.call(File) === "[object FileConstructor]";
function ii(t) {
  return Ql && (t instanceof ArrayBuffer || eu(t)) || tu && t instanceof Blob || nu && t instanceof File;
}
function $n(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if ($n(t[n]))
        return !0;
    return !1;
  }
  if (ii(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return $n(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && $n(t[n]))
      return !0;
  return !1;
}
function ru(t) {
  const e = [], n = t.data, r = t;
  return r.data = lo(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function lo(t, e) {
  if (!t)
    return t;
  if (ii(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = lo(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = lo(t[r], e));
    return n;
  }
  return t;
}
function ou(t, e) {
  return t.data = uo(t.data, e), delete t.attachments, t;
}
function uo(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = uo(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = uo(t[n], e));
  return t;
}
const iu = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], su = 5;
var Z;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(Z || (Z = {}));
class au {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === Z.EVENT || e.type === Z.ACK) && $n(e) ? this.encodeAsBinary({
      type: e.type === Z.EVENT ? Z.BINARY_EVENT : Z.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === Z.BINARY_EVENT || e.type === Z.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = ru(e), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function ji(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class si extends be {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === Z.BINARY_EVENT;
      r || n.type === Z.BINARY_ACK ? (n.type = r ? Z.EVENT : Z.ACK, this.reconstructor = new cu(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (ii(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (Z[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === Z.BINARY_EVENT || r.type === Z.BINARY_ACK) {
      const i = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const s = e.substring(i, n);
      if (s != Number(s) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (e.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      r.nsp = e.substring(i, n);
    } else
      r.nsp = "/";
    const o = e.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = e.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      r.id = Number(e.substring(i, n + 1));
    }
    if (e.charAt(++n)) {
      const i = this.tryParse(e.substr(n));
      if (si.isPayloadValid(r.type, i))
        r.data = i;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case Z.CONNECT:
        return ji(n);
      case Z.DISCONNECT:
        return n === void 0;
      case Z.CONNECT_ERROR:
        return typeof n == "string" || ji(n);
      case Z.EVENT:
      case Z.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && iu.indexOf(n[0]) === -1);
      case Z.ACK:
      case Z.BINARY_ACK:
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
class cu {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = ou(this.reconPack, this.buffers);
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
const lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: si,
  Encoder: au,
  get PacketType() {
    return Z;
  },
  protocol: su
}, Symbol.toStringTag, { value: "Module" }));
function Ue(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const uu = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class na extends be {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
    const e = this.io;
    this.subs = [
      Ue(e, "open", this.onopen.bind(this)),
      Ue(e, "packet", this.onpacket.bind(this)),
      Ue(e, "error", this.onerror.bind(this)),
      Ue(e, "close", this.onclose.bind(this))
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
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
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
  emit(e, ...n) {
    var r, o, i;
    if (uu.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: Z.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const u = this.ids++, f = n.pop();
      this._registerAckCallback(u, f), s.id = u;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, l = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[e] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), n.apply(this, a);
    };
    s.withError = !0, this.acks[e] = s;
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
  emitWithAck(e, ...n) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, n.push(i), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: Z.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case Z.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Z.EVENT:
        case Z.BINARY_EVENT:
          this.onevent(e);
          break;
        case Z.ACK:
        case Z.BINARY_ACK:
          this.onack(e);
          break;
        case Z.DISCONNECT:
          this.ondisconnect();
          break;
        case Z.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, n.packet({
        type: Z.ACK,
        id: e,
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
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
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
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: Z.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(e) {
    return this.flags.compress = e, this;
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
  timeout(e) {
    return this.flags.timeout = e, this;
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
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
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
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
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
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
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
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
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
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
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
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
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
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, e.data);
    }
  }
}
function Wt(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Wt.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
Wt.prototype.reset = function() {
  this.attempts = 0;
};
Wt.prototype.setMin = function(t) {
  this.ms = t;
};
Wt.prototype.setMax = function(t) {
  this.max = t;
};
Wt.prototype.setJitter = function(t) {
  this.jitter = t;
};
class fo extends be {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, mr(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Wt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const o = n.parser || lu;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
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
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Zl(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Ue(n, "open", function() {
      r.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, s = Ue(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
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
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      Ue(e, "ping", this.onping.bind(this)),
      Ue(e, "data", this.ondata.bind(this)),
      Ue(e, "error", this.onerror.bind(this)),
      Ue(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Ue(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    pr(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new na(this, e, n), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
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
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(e, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((o) => {
          o ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", o)) : e.onreconnect();
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
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const on = {};
function Zn(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Jl(t, e.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = on[o] && i in on[o].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || s;
  let l;
  return a ? l = new fo(r, e) : (on[o] || (on[o] = new fo(r, e)), l = on[o]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(Zn, {
  Manager: fo,
  Socket: na,
  io: Zn,
  connect: Zn
});
var qr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Mi;
function fu() {
  return Mi || (Mi = 1, function(t) {
    (function() {
      var e = {}.hasOwnProperty;
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
          e.call(i, a) && i[a] && (s = o(s, a));
        return s;
      }
      function o(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
    })();
  }(qr)), qr.exports;
}
var du = fu();
const Te = /* @__PURE__ */ pl(du);
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, rt.apply(null, arguments);
}
function se(t) {
  "@babel/helpers - typeof";
  return se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, se(t);
}
var hu = Symbol.for("react.element"), pu = Symbol.for("react.transitional.element"), mu = Symbol.for("react.fragment");
function gu(t) {
  return (
    // Base object type
    t && se(t) === "object" && // React Element type
    (t.$$typeof === hu || t.$$typeof === pu) && // React Fragment type
    t.type === mu
  );
}
var ho = {}, ai = [], vu = function(e) {
  ai.push(e);
};
function ci(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var n = ai.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, e);
    n && console.error("Warning: ".concat(n));
  }
}
function yu(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var n = ai.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, e);
    n && console.warn("Note: ".concat(n));
  }
}
function ra() {
  ho = {};
}
function oa(t, e, n) {
  !e && !ho[n] && (t(!1, n), ho[n] = !0);
}
function yt(t, e) {
  oa(ci, t, e);
}
function bu(t, e) {
  oa(yu, t, e);
}
yt.preMessage = vu;
yt.resetWarned = ra;
yt.noteOnce = bu;
function Eu(t, e) {
  if (se(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ia(t) {
  var e = Eu(t, "string");
  return se(e) == "symbol" ? e : e + "";
}
function B(t, e, n) {
  return (e = ia(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Di(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Di(Object(n), !0).forEach(function(r) {
      B(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Di(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ii(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function Su(t) {
  return t && se(t) === "object" && Ii(t.nativeElement) ? t.nativeElement : Ii(t) ? t : null;
}
function wu(t) {
  var e = Su(t);
  if (e)
    return e;
  if (t instanceof Oe.Component) {
    var n;
    return (n = Ti.findDOMNode) === null || n === void 0 ? void 0 : n.call(Ti, t);
  }
  return null;
}
var In = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi;
function Cu() {
  if (Bi) return re;
  Bi = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case t:
          switch (p = p.type, p) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case l:
                case d:
                case f:
                case i:
                  return p;
                default:
                  return y;
              }
          }
        case e:
          return y;
      }
    }
  }
  return re.ContextConsumer = s, re.ContextProvider = i, re.Element = t, re.ForwardRef = l, re.Fragment = n, re.Lazy = d, re.Memo = f, re.Portal = e, re.Profiler = o, re.StrictMode = r, re.Suspense = c, re.SuspenseList = u, re.isAsyncMode = function() {
    return !1;
  }, re.isConcurrentMode = function() {
    return !1;
  }, re.isContextConsumer = function(p) {
    return m(p) === s;
  }, re.isContextProvider = function(p) {
    return m(p) === i;
  }, re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, re.isForwardRef = function(p) {
    return m(p) === l;
  }, re.isFragment = function(p) {
    return m(p) === n;
  }, re.isLazy = function(p) {
    return m(p) === d;
  }, re.isMemo = function(p) {
    return m(p) === f;
  }, re.isPortal = function(p) {
    return m(p) === e;
  }, re.isProfiler = function(p) {
    return m(p) === o;
  }, re.isStrictMode = function(p) {
    return m(p) === r;
  }, re.isSuspense = function(p) {
    return m(p) === c;
  }, re.isSuspenseList = function(p) {
    return m(p) === u;
  }, re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === c || p === u || p === v || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === i || p.$$typeof === s || p.$$typeof === l || p.$$typeof === g || p.getModuleId !== void 0);
  }, re.typeOf = m, re;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function xu() {
  return Fi || (Fi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, m = !1, p = !1, y = !1, E = !1, A;
    A = Symbol.for("react.module.reference");
    function O(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === n || F === o || E || F === r || F === c || F === u || y || F === v || g || m || p || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === f || F.$$typeof === i || F.$$typeof === s || F.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === A || F.getModuleId !== void 0));
    }
    function w(F) {
      if (typeof F == "object" && F !== null) {
        var Fe = F.$$typeof;
        switch (Fe) {
          case t:
            var ve = F.type;
            switch (ve) {
              case n:
              case o:
              case r:
              case c:
              case u:
                return ve;
              default:
                var ot = ve && ve.$$typeof;
                switch (ot) {
                  case a:
                  case s:
                  case l:
                  case d:
                  case f:
                  case i:
                    return ot;
                  default:
                    return Fe;
                }
            }
          case e:
            return Fe;
        }
      }
    }
    var R = s, T = i, k = t, j = l, z = n, W = d, H = f, x = e, N = o, M = r, P = c, L = u, U = !1, G = !1;
    function J(F) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(F) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(F) {
      return w(F) === s;
    }
    function $(F) {
      return w(F) === i;
    }
    function ae(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function ie(F) {
      return w(F) === l;
    }
    function me(F) {
      return w(F) === n;
    }
    function ce(F) {
      return w(F) === d;
    }
    function Re(F) {
      return w(F) === f;
    }
    function Be(F) {
      return w(F) === e;
    }
    function Me(F) {
      return w(F) === o;
    }
    function $e(F) {
      return w(F) === r;
    }
    function Pe(F) {
      return w(F) === c;
    }
    function Ze(F) {
      return w(F) === u;
    }
    oe.ContextConsumer = R, oe.ContextProvider = T, oe.Element = k, oe.ForwardRef = j, oe.Fragment = z, oe.Lazy = W, oe.Memo = H, oe.Portal = x, oe.Profiler = N, oe.StrictMode = M, oe.Suspense = P, oe.SuspenseList = L, oe.isAsyncMode = J, oe.isConcurrentMode = te, oe.isContextConsumer = ee, oe.isContextProvider = $, oe.isElement = ae, oe.isForwardRef = ie, oe.isFragment = me, oe.isLazy = ce, oe.isMemo = Re, oe.isPortal = Be, oe.isProfiler = Me, oe.isStrictMode = $e, oe.isSuspense = Pe, oe.isSuspenseList = Ze, oe.isValidElementType = O, oe.typeOf = w;
  }()), oe;
}
var zi;
function Au() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? In.exports = Cu() : In.exports = xu()), In.exports;
}
var Wr = Au();
function sa(t, e, n) {
  var r = b.useRef({});
  return (!("value" in r.current) || n(r.current.condition, e)) && (r.current.value = t(), r.current.condition = e), r.current.value;
}
var Tu = Number(dl.split(".")[0]), aa = function(e, n) {
  typeof e == "function" ? e(n) : se(e) === "object" && e && "current" in e && (e.current = n);
}, Ou = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      aa(s, i);
    });
  };
}, Ru = function(e) {
  var n, r;
  if (!e)
    return !1;
  if (ca(e) && Tu >= 19)
    return !0;
  var o = Wr.isMemo(e) ? e.type.type : e.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== Wr.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== Wr.ForwardRef);
};
function ca(t) {
  return /* @__PURE__ */ fl(t) && !gu(t);
}
var Pu = function(e) {
  if (e && ca(e)) {
    var n = e;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function Ye(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Vi(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ia(r.key), r);
  }
}
function Ke(t, e, n) {
  return e && Vi(t.prototype, e), n && Vi(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function po(t, e) {
  return po = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, po(t, e);
}
function Sn(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && po(t, e);
}
function Vt(t) {
  return Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Vt(t);
}
function li() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (li = function() {
    return !!t;
  })();
}
function Ot(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function la(t, e) {
  if (e && (se(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ot(t);
}
function gr(t) {
  var e = li();
  return function() {
    var n, r = Vt(t);
    if (e) {
      var o = Vt(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return la(this, n);
  };
}
function mo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ku(t) {
  if (Array.isArray(t)) return mo(t);
}
function ua(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ui(t, e) {
  if (t) {
    if (typeof t == "string") return mo(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mo(t, e) : void 0;
  }
}
function _u() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t) {
  return ku(t) || ua(t) || ui(t) || _u();
}
var fa = function(e) {
  return +setTimeout(e, 16);
}, da = function(e) {
  return clearTimeout(e);
};
typeof window < "u" && "requestAnimationFrame" in window && (fa = function(e) {
  return window.requestAnimationFrame(e);
}, da = function(e) {
  return window.cancelAnimationFrame(e);
});
var Hi = 0, vr = /* @__PURE__ */ new Map();
function ha(t) {
  vr.delete(t);
}
var ar = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Hi += 1;
  var r = Hi;
  function o(i) {
    if (i === 0)
      ha(r), e();
    else {
      var s = fa(function() {
        o(i - 1);
      });
      vr.set(r, s);
    }
  }
  return o(n), r;
};
ar.cancel = function(t) {
  var e = vr.get(t);
  return ha(t), da(e);
};
process.env.NODE_ENV !== "production" && (ar.ids = function() {
  return vr;
});
function pa(t) {
  if (Array.isArray(t)) return t;
}
function Nu(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return a;
  }
}
function ma() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(t, e) {
  return pa(t) || Nu(t, e) || ui(t, e) || ma();
}
function pn(t) {
  for (var e = 0, n, r = 0, o = t.length; o >= 4; ++r, o -= 4)
    n = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, e = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      e ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(r) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
function ct() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lu(t, e) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(e);
  for (var n = e; n; ) {
    if (n === t)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var Ui = "data-rc-order", qi = "data-rc-priority", ju = "rc-util-key", go = /* @__PURE__ */ new Map();
function ga() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : ju;
}
function yr(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function Mu(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function fi(t) {
  return Array.from((go.get(t) || t).children).filter(function(e) {
    return e.tagName === "STYLE";
  });
}
function va(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ct())
    return null;
  var n = e.csp, r = e.prepend, o = e.priority, i = o === void 0 ? 0 : o, s = Mu(r), a = s === "prependQueue", l = document.createElement("style");
  l.setAttribute(Ui, s), a && i && l.setAttribute(qi, "".concat(i)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = t;
  var c = yr(e), u = c.firstChild;
  if (r) {
    if (a) {
      var f = (e.styles || fi(c)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Ui)))
          return !1;
        var v = Number(d.getAttribute(qi) || 0);
        return i >= v;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function ya(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = yr(e);
  return (e.styles || fi(n)).find(function(r) {
    return r.getAttribute(ga(e)) === t;
  });
}
function ba(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ya(t, e);
  if (n) {
    var r = yr(e);
    r.removeChild(n);
  }
}
function Du(t, e) {
  var n = go.get(t);
  if (!n || !Lu(document, n)) {
    var r = va("", e), o = r.parentNode;
    go.set(t, o), t.removeChild(r);
  }
}
function Rt(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = yr(n), o = fi(r), i = D(D({}, n), {}, {
    styles: o
  });
  Du(r, i);
  var s = ya(e, i);
  if (s) {
    var a, l;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      s.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return s.innerHTML !== t && (s.innerHTML = t), s;
  }
  var u = va(t, i);
  return u.setAttribute(ga(i), e), u;
}
function Iu(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.indexOf(r) !== -1) continue;
    n[r] = t[r];
  }
  return n;
}
function mn(t, e) {
  if (t == null) return {};
  var n, r, o = Iu(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
  }
  return o;
}
function Bu(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(i);
    if (yt(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === s)
      return !0;
    if (n && a > 1)
      return !1;
    r.add(i);
    var c = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], s[u], c))
          return !1;
      return !0;
    }
    if (i && s && se(i) === "object" && se(s) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(s).length ? !1 : f.every(function(d) {
        return o(i[d], s[d], c);
      });
    }
    return !1;
  }
  return o(t, e);
}
var Fu = "%";
function vo(t) {
  return t.join(Fu);
}
var zu = /* @__PURE__ */ function() {
  function t(e) {
    Ye(this, t), B(this, "instanceId", void 0), B(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = e;
  }
  return Ke(t, [{
    key: "get",
    value: function(n) {
      return this.opGet(vo(n));
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
      return this.opUpdate(vo(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), t;
}(), Ht = "data-token-hash", We = "data-css-hash", Vu = "data-cache-path", pt = "__cssinjs_instance__";
function Hu() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var e = document.body.querySelectorAll("style[".concat(We, "]")) || [], n = document.head.firstChild;
    Array.from(e).forEach(function(o) {
      o[pt] = o[pt] || t, o[pt] === t && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(We, "]"))).forEach(function(o) {
      var i = o.getAttribute(We);
      if (r[i]) {
        if (o[pt] === t) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new zu(t);
}
var wn = /* @__PURE__ */ b.createContext({
  hashPriority: "low",
  cache: Hu(),
  defaultCache: !0
});
function Uu(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var di = /* @__PURE__ */ function() {
  function t() {
    Ye(this, t), B(this, "cache", void 0), B(this, "keys", void 0), B(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ke(t, [{
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
          var l;
          s = (l = s) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(a);
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
        if (this.size() + 1 > t.MAX_CACHE_SIZE + t.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(c, u) {
            var f = Y(c, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), s = Y(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(n);
      }
      var l = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          l.set(c, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
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
          return !Uu(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), t;
}();
B(di, "MAX_CACHE_SIZE", 20);
B(di, "MAX_CACHE_OFFSET", 5);
var Wi = 0, Ea = /* @__PURE__ */ function() {
  function t(e) {
    Ye(this, t), B(this, "derivatives", void 0), B(this, "id", void 0), this.derivatives = Array.isArray(e) ? e : [e], this.id = Wi, e.length === 0 && ci(e.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Wi += 1;
  }
  return Ke(t, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), t;
}(), Xr = new di();
function yo(t) {
  var e = Array.isArray(t) ? t : [t];
  return Xr.has(e) || Xr.set(e, new Ea(e)), Xr.get(e);
}
var qu = /* @__PURE__ */ new WeakMap(), Yr = {};
function Wu(t, e) {
  for (var n = qu, r = 0; r < e.length; r += 1) {
    var o = e[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(Yr) || n.set(Yr, t()), n.get(Yr);
}
var Xi = /* @__PURE__ */ new WeakMap();
function fn(t) {
  var e = Xi.get(t) || "";
  return e || (Object.keys(t).forEach(function(n) {
    var r = t[n];
    e += n, r instanceof Ea ? e += r.id : r && se(r) === "object" ? e += fn(r) : e += r;
  }), e = pn(e), Xi.set(t, e)), e;
}
function Yi(t, e) {
  return pn("".concat(e, "_").concat(fn(t)));
}
var bo = ct();
function cr(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function lr(t, e, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = D(D({}, o), {}, (r = {}, B(r, Ht, e), B(r, We, n), r)), a = Object.keys(s).map(function(l) {
    var c = s[l];
    return c ? "".concat(l, '="').concat(c, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var Jn = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Xu = function(e, n, r) {
  return Object.keys(e).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(e).map(function(o) {
    var i = Y(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Sa = function(e, n, r) {
  var o = {}, i = {};
  return Object.entries(e).forEach(function(s) {
    var a, l, c = Y(s, 2), u = c[0], f = c[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[u])) {
      var d, v = Jn(u, r == null ? void 0 : r.prefix);
      o[v] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(v, ")");
    }
  }), [i, Xu(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Ki = process.env.NODE_ENV !== "test" && ct() ? b.useLayoutEffect : b.useEffect, wa = function(e, n) {
  var r = b.useRef(!0);
  Ki(function() {
    return e(r.current);
  }, n), Ki(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Yu = D({}, b), Gi = Yu.useInsertionEffect, Ku = function(e, n, r) {
  b.useMemo(e, r), wa(function() {
    return n(!0);
  }, r);
}, Gu = Gi ? function(t, e, n) {
  return Gi(function() {
    return t(), e();
  }, n);
} : Ku, $u = D({}, b), Zu = $u.useInsertionEffect, Ju = function(e) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ci(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return b.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, e), o;
}, Qu = function() {
  return function(e) {
    e();
  };
}, ef = typeof Zu < "u" ? Ju : Qu;
function tf() {
  return !1;
}
var Eo = !1;
function nf() {
  return Eo;
}
const rf = process.env.NODE_ENV === "production" ? tf : nf;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Bn && typeof Bn.webpackHotUpdate == "function") {
    var of = Bn.webpackHotUpdate;
    Bn.webpackHotUpdate = function() {
      return Eo = !0, setTimeout(function() {
        Eo = !1;
      }, 0), of.apply(void 0, arguments);
    };
  }
}
function hi(t, e, n, r, o) {
  var i = b.useContext(wn), s = i.cache, a = [t].concat(at(e)), l = vo(a), c = ef([l]), u = rf(), f = function(m) {
    s.opUpdate(l, function(p) {
      var y = p || [void 0, void 0], E = Y(y, 2), A = E[0], O = A === void 0 ? 0 : A, w = E[1], R = w;
      process.env.NODE_ENV !== "production" && w && u && (r == null || r(R, u), R = null);
      var T = R || n(), k = [O, T];
      return m ? m(k) : k;
    });
  };
  b.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = s.opGet(l);
  process.env.NODE_ENV !== "production" && !d && (f(), d = s.opGet(l));
  var v = d[1];
  return Gu(function() {
    o == null || o(v);
  }, function(g) {
    return f(function(m) {
      var p = Y(m, 2), y = p[0], E = p[1];
      return g && y === 0 && (o == null || o(v)), [y + 1, E];
    }), function() {
      s.opUpdate(l, function(m) {
        var p = m || [], y = Y(p, 2), E = y[0], A = E === void 0 ? 0 : E, O = y[1], w = A - 1;
        return w === 0 ? (c(function() {
          (g || !s.opGet(l)) && (r == null || r(O, !1));
        }), null) : [A - 1, O];
      });
    };
  }, [l]), v;
}
var sf = {}, af = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", At = /* @__PURE__ */ new Map();
function cf(t) {
  At.set(t, (At.get(t) || 0) + 1);
}
function lf(t, e) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Ht, '="').concat(t, '"]'));
    n.forEach(function(r) {
      if (r[pt] === e) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var uf = 0;
function ff(t, e) {
  At.set(t, (At.get(t) || 0) - 1);
  var n = Array.from(At.keys()), r = n.filter(function(o) {
    var i = At.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > uf && r.forEach(function(o) {
    lf(o, e), At.delete(o);
  });
}
var df = function(e, n, r, o) {
  var i = r.getDerivativeToken(e), s = D(D({}, i), n);
  return o && (s = o(s)), s;
}, Ca = "token";
function hf(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _t(wn), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, l = n.override, c = l === void 0 ? sf : l, u = n.formatToken, f = n.getComputedToken, d = n.cssVar, v = Wu(function() {
    return Object.assign.apply(Object, [{}].concat(at(e)));
  }, e), g = fn(v), m = fn(c), p = d ? fn(d) : "", y = hi(Ca, [a, t.id, g, m, p], function() {
    var E, A = f ? f(v, c, t) : df(v, c, t, u), O = D({}, A), w = "";
    if (d) {
      var R = Sa(A, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), T = Y(R, 2);
      A = T[0], w = T[1];
    }
    var k = Yi(A, a);
    A._tokenKey = k, O._tokenKey = Yi(O, a);
    var j = (E = d == null ? void 0 : d.key) !== null && E !== void 0 ? E : k;
    A._themeKey = j, cf(j);
    var z = "".concat(af, "-").concat(pn(k));
    return A._hashId = z, [A, z, O, w, (d == null ? void 0 : d.key) || ""];
  }, function(E) {
    ff(E[0]._themeKey, o);
  }, function(E) {
    var A = Y(E, 4), O = A[0], w = A[3];
    if (d && w) {
      var R = Rt(w, pn("css-variables-".concat(O._themeKey)), {
        mark: We,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[pt] = o, R.setAttribute(Ht, O._themeKey);
    }
  });
  return y;
}
var pf = function(e, n, r) {
  var o = Y(e, 5), i = o[2], s = o[3], a = o[4], l = r || {}, c = l.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = lr(s, a, u, d, c);
  return [f, u, v];
}, mf = {
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
}, xa = "comm", Aa = "rule", Ta = "decl", gf = "@import", vf = "@namespace", yf = "@keyframes", bf = "@layer", Oa = Math.abs, pi = String.fromCharCode;
function Ra(t) {
  return t.trim();
}
function Qn(t, e, n) {
  return t.replace(e, n);
}
function Ef(t, e, n) {
  return t.indexOf(e, n);
}
function zt(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ut(t, e, n) {
  return t.slice(e, n);
}
function et(t) {
  return t.length;
}
function Sf(t) {
  return t.length;
}
function Fn(t, e) {
  return e.push(t), t;
}
var br = 1, qt = 1, Pa = 0, He = 0, ye = 0, Xt = "";
function mi(t, e, n, r, o, i, s, a) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: br, column: qt, length: s, return: "", siblings: a };
}
function wf() {
  return ye;
}
function Cf() {
  return ye = He > 0 ? zt(Xt, --He) : 0, qt--, ye === 10 && (qt = 1, br--), ye;
}
function Xe() {
  return ye = He < Pa ? zt(Xt, He++) : 0, qt++, ye === 10 && (qt = 1, br++), ye;
}
function mt() {
  return zt(Xt, He);
}
function er() {
  return He;
}
function Er(t, e) {
  return Ut(Xt, t, e);
}
function gn(t) {
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
function xf(t) {
  return br = qt = 1, Pa = et(Xt = t), He = 0, [];
}
function Af(t) {
  return Xt = "", t;
}
function Kr(t) {
  return Ra(Er(He - 1, So(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tf(t) {
  for (; (ye = mt()) && ye < 33; )
    Xe();
  return gn(t) > 2 || gn(ye) > 3 ? "" : " ";
}
function Of(t, e) {
  for (; --e && Xe() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Er(t, er() + (e < 6 && mt() == 32 && Xe() == 32));
}
function So(t) {
  for (; Xe(); )
    switch (ye) {
      // ] ) " '
      case t:
        return He;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && So(ye);
        break;
      // (
      case 40:
        t === 41 && So(t);
        break;
      // \
      case 92:
        Xe();
        break;
    }
  return He;
}
function Rf(t, e) {
  for (; Xe() && t + ye !== 57; )
    if (t + ye === 84 && mt() === 47)
      break;
  return "/*" + Er(e, He - 1) + "*" + pi(t === 47 ? t : Xe());
}
function Pf(t) {
  for (; !gn(mt()); )
    Xe();
  return Er(t, He);
}
function kf(t) {
  return Af(tr("", null, null, null, [""], t = xf(t), 0, [0], t));
}
function tr(t, e, n, r, o, i, s, a, l) {
  for (var c = 0, u = 0, f = s, d = 0, v = 0, g = 0, m = 1, p = 1, y = 1, E = 0, A = "", O = o, w = i, R = r, T = A; p; )
    switch (g = E, E = Xe()) {
      // (
      case 40:
        if (g != 108 && zt(T, f - 1) == 58) {
          Ef(T += Qn(Kr(E), "&", "&\f"), "&\f", Oa(c ? a[c - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += Kr(E);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += Tf(g);
        break;
      // \
      case 92:
        T += Of(er() - 1, 7);
        continue;
      // /
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            Fn(_f(Rf(Xe(), er()), e, n, l), l), (gn(g || 1) == 5 || gn(mt() || 1) == 5) && et(T) && Ut(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * m:
        a[c++] = et(T) * y;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            y == -1 && (T = Qn(T, /\f/g, "")), v > 0 && (et(T) - f || m === 0 && g === 47) && Fn(v > 32 ? Zi(T + ";", r, n, f - 1, l) : Zi(Qn(T, " ", "") + ";", r, n, f - 2, l), l);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (Fn(R = $i(T, e, n, c, u, o, a, A, O = [], w = [], f, i), i), E === 123)
              if (u === 0)
                tr(T, e, R, R, O, i, f, a, w);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (zt(T, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (zt(T, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? tr(t, R, R, r && Fn($i(t, R, R, 0, 0, o, a, A, o, O = [], f, w), w), o, w, f, a, r ? O : w) : tr(T, R, R, R, [""], w, 0, a, w);
              }
        }
        c = u = v = 0, m = y = 1, A = T = "", f = s;
        break;
      // :
      case 58:
        f = 1 + et(T), v = g;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && Cf() == 125)
            continue;
        }
        switch (T += pi(E), E * m) {
          // &
          case 38:
            y = u > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            a[c++] = (et(T) - 1) * y, y = 1;
            break;
          // @
          case 64:
            mt() === 45 && (T += Kr(Xe())), d = mt(), u = f = et(A = T += Pf(er())), E++;
            break;
          // -
          case 45:
            g === 45 && et(T) == 2 && (m = 0);
        }
    }
  return i;
}
function $i(t, e, n, r, o, i, s, a, l, c, u, f) {
  for (var d = o - 1, v = o === 0 ? i : [""], g = Sf(v), m = 0, p = 0, y = 0; m < r; ++m)
    for (var E = 0, A = Ut(t, d + 1, d = Oa(p = s[m])), O = t; E < g; ++E)
      (O = Ra(p > 0 ? v[E] + " " + A : Qn(A, /&\f/g, v[E]))) && (l[y++] = O);
  return mi(t, e, n, o === 0 ? Aa : a, l, c, u, f);
}
function _f(t, e, n, r) {
  return mi(t, e, n, xa, pi(wf()), Ut(t, 2, -2), 0, r);
}
function Zi(t, e, n, r, o) {
  return mi(t, e, n, Ta, Ut(t, 0, r), Ut(t, r + 1, -1), r, o);
}
function wo(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Nf(t, e, n, r) {
  switch (t.type) {
    case bf:
      if (t.children.length) break;
    case gf:
    case vf:
    case Ta:
      return t.return = t.return || t.value;
    case xa:
      return "";
    case yf:
      return t.return = t.value + "{" + wo(t.children, r) + "}";
    case Aa:
      if (!et(t.value = t.props.join(","))) return "";
  }
  return et(n = wo(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function ka(t, e) {
  var n = e.path, r = e.parentSelectors;
  yt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Lf = function(e, n, r) {
  if (e === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ka("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, jf = function(e, n, r) {
  e === "animation" && r.hashId && n !== "none" && ka("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Ji = "data-ant-cssinjs-cache-path", _a = "_FILE_STYLE__", Pt, Na = !0;
function Mf() {
  if (!Pt && (Pt = {}, ct())) {
    var t = document.createElement("div");
    t.className = Ji, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var e = getComputedStyle(t).content || "";
    e = e.replace(/^"/, "").replace(/"$/, ""), e.split(";").forEach(function(o) {
      var i = o.split(":"), s = Y(i, 2), a = s[0], l = s[1];
      Pt[a] = l;
    });
    var n = document.querySelector("style[".concat(Ji, "]"));
    if (n) {
      var r;
      Na = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(t);
  }
}
function Df(t) {
  return Mf(), !!Pt[t];
}
function If(t) {
  var e = Pt[t], n = null;
  if (e && ct())
    if (Na)
      n = _a;
    else {
      var r = document.querySelector("style[".concat(We, '="').concat(Pt[t], '"]'));
      r ? n = r.innerHTML : delete Pt[t];
    }
  return [n, e];
}
var La = "_skip_check_", ja = "_multi_value_";
function nr(t) {
  var e = wo(kf(t), Nf);
  return e.replace(/\{%%%\:[^;];}/g, ";");
}
function Bf(t) {
  return se(t) === "object" && t && (La in t || ja in t);
}
function Qi(t, e, n) {
  if (!e)
    return t;
  var r = ".".concat(e), o = n === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, l = s.trim().split(/\s+/), c = l[0] || "", u = ((a = c.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(at(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var Ff = function t(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, l = n.layer, c = n.path, u = n.hashPriority, f = n.transformers, d = f === void 0 ? [] : f, v = n.linters, g = v === void 0 ? [] : v, m = "", p = {};
  function y(O) {
    var w = O.getName(a);
    if (!p[w]) {
      var R = t(O.style, n, {
        root: !1,
        parentSelectors: s
      }), T = Y(R, 1), k = T[0];
      p[w] = "@keyframes ".concat(O.getName(a)).concat(k);
    }
  }
  function E(O) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return O.forEach(function(R) {
      Array.isArray(R) ? E(R, w) : R && w.push(R);
    }), w;
  }
  var A = E(Array.isArray(e) ? e : [e]);
  return A.forEach(function(O) {
    var w = typeof O == "string" && !o ? {} : O;
    if (typeof w == "string")
      m += "".concat(w, `
`);
    else if (w._keyframe)
      y(w);
    else {
      var R = d.reduce(function(T, k) {
        var j;
        return (k == null || (j = k.visit) === null || j === void 0 ? void 0 : j.call(k, T)) || T;
      }, w);
      Object.keys(R).forEach(function(T) {
        var k = R[T];
        if (se(k) === "object" && k && (T !== "animationName" || !k._keyframe) && !Bf(k)) {
          var j = !1, z = T.trim(), W = !1;
          (o || i) && a ? z.startsWith("@") ? j = !0 : z === "&" ? z = Qi("", a, u) : z = Qi(T, a, u) : o && !a && (z === "&" || z === "") && (z = "", W = !0);
          var H = t(k, n, {
            root: W,
            injectHash: j,
            parentSelectors: [].concat(at(s), [z])
          }), x = Y(H, 2), N = x[0], M = x[1];
          p = D(D({}, p), M), m += "".concat(z).concat(N);
        } else {
          let U = function(G, J) {
            process.env.NODE_ENV !== "production" && (se(k) !== "object" || !(k != null && k[La])) && [Lf, jf].concat(at(g)).forEach(function($) {
              return $(G, J, {
                path: c,
                hashId: a,
                parentSelectors: s
              });
            });
            var te = G.replace(/[A-Z]/g, function($) {
              return "-".concat($.toLowerCase());
            }), ee = J;
            !mf[G] && typeof ee == "number" && ee !== 0 && (ee = "".concat(ee, "px")), G === "animationName" && J !== null && J !== void 0 && J._keyframe && (y(J), ee = J.getName(a)), m += "".concat(te, ":").concat(ee, ";");
          };
          var P, L = (P = k == null ? void 0 : k.value) !== null && P !== void 0 ? P : k;
          se(k) === "object" && k !== null && k !== void 0 && k[ja] && Array.isArray(L) ? L.forEach(function(G) {
            U(T, G);
          }) : U(T, L);
        }
      });
    }
  }), o ? l && (m && (m = "@layer ".concat(l.name, " {").concat(m, "}")), l.dependencies && (p["@layer ".concat(l.name)] = l.dependencies.map(function(O) {
    return "@layer ".concat(O, ", ").concat(l.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function Ma(t, e) {
  return pn("".concat(t.join("%")).concat(e));
}
function zf() {
  return null;
}
var Da = "style";
function Co(t, e) {
  var n = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, l = t.order, c = l === void 0 ? 0 : l, u = b.useContext(wn), f = u.autoClear, d = u.mock, v = u.defaultCache, g = u.hashPriority, m = u.container, p = u.ssrInline, y = u.transformers, E = u.linters, A = u.cache, O = u.layer, w = n._tokenKey, R = [w];
  O && R.push("layer"), R.push.apply(R, at(r));
  var T = bo;
  process.env.NODE_ENV !== "production" && d !== void 0 && (T = d === "client");
  var k = hi(
    Da,
    R,
    // Create cache if needed
    function() {
      var x = R.join("|");
      if (Df(x)) {
        var N = If(x), M = Y(N, 2), P = M[0], L = M[1];
        if (P)
          return [P, w, L, {}, a, c];
      }
      var U = e(), G = Ff(U, {
        hashId: o,
        hashPriority: g,
        layer: O ? i : void 0,
        path: r.join("-"),
        transformers: y,
        linters: E
      }), J = Y(G, 2), te = J[0], ee = J[1], $ = nr(te), ae = Ma(R, $);
      return [$, w, ae, ee, a, c];
    },
    // Remove cache if no need
    function(x, N) {
      var M = Y(x, 3), P = M[2];
      (N || f) && bo && ba(P, {
        mark: We
      });
    },
    // Effect: Inject style here
    function(x) {
      var N = Y(x, 4), M = N[0];
      N[1];
      var P = N[2], L = N[3];
      if (T && M !== _a) {
        var U = {
          mark: We,
          prepend: O ? !1 : "queue",
          attachTo: m,
          priority: c
        }, G = typeof s == "function" ? s() : s;
        G && (U.csp = {
          nonce: G
        });
        var J = [], te = [];
        Object.keys(L).forEach(function($) {
          $.startsWith("@layer") ? J.push($) : te.push($);
        }), J.forEach(function($) {
          Rt(nr(L[$]), "_layer-".concat($), D(D({}, U), {}, {
            prepend: !0
          }));
        });
        var ee = Rt(M, P, U);
        ee[pt] = A.instanceId, ee.setAttribute(Ht, w), process.env.NODE_ENV !== "production" && ee.setAttribute(Vu, R.join("|")), te.forEach(function($) {
          Rt(nr(L[$]), "_effect-".concat($), U);
        });
      }
    }
  ), j = Y(k, 3), z = j[0], W = j[1], H = j[2];
  return function(x) {
    var N;
    if (!p || T || !v)
      N = /* @__PURE__ */ b.createElement(zf, null);
    else {
      var M;
      N = /* @__PURE__ */ b.createElement("style", rt({}, (M = {}, B(M, Ht, W), B(M, We, H), M), {
        dangerouslySetInnerHTML: {
          __html: z
        }
      }));
    }
    return /* @__PURE__ */ b.createElement(b.Fragment, null, N, x);
  };
}
var Vf = function(e, n, r) {
  var o = Y(e, 6), i = o[0], s = o[1], a = o[2], l = o[3], c = o[4], u = o[5], f = r || {}, d = f.plain;
  if (c)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = lr(i, s, a, g, d), l && Object.keys(l).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var p = nr(l[m]), y = lr(p, s, "_effect-".concat(m), g, d);
      m.startsWith("@layer") ? v = y + v : v += y;
    }
  }), [u, a, v];
}, Ia = "cssVar", Hf = function(e, n) {
  var r = e.key, o = e.prefix, i = e.unitless, s = e.ignore, a = e.token, l = e.scope, c = l === void 0 ? "" : l, u = _t(wn), f = u.cache.instanceId, d = u.container, v = a._tokenKey, g = [].concat(at(e.path), [r, c, v]), m = hi(Ia, g, function() {
    var p = n(), y = Sa(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: c
    }), E = Y(y, 2), A = E[0], O = E[1], w = Ma(g, O);
    return [A, O, w, r];
  }, function(p) {
    var y = Y(p, 3), E = y[2];
    bo && ba(E, {
      mark: We
    });
  }, function(p) {
    var y = Y(p, 3), E = y[1], A = y[2];
    if (E) {
      var O = Rt(E, A, {
        mark: We,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      O[pt] = f, O.setAttribute(Ht, r);
    }
  });
  return m;
}, Uf = function(e, n, r) {
  var o = Y(e, 4), i = o[1], s = o[2], a = o[3], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = lr(i, a, s, f, c);
  return [u, s, d];
}, sn;
sn = {}, B(sn, Da, Vf), B(sn, Ca, pf), B(sn, Ia, Uf);
var Ba = /* @__PURE__ */ function() {
  function t(e, n) {
    Ye(this, t), B(this, "name", void 0), B(this, "style", void 0), B(this, "_keyframe", !0), this.name = e, this.style = n;
  }
  return Ke(t, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function Dt(t) {
  return t.notSplit = !0, t;
}
Dt(["borderTop", "borderBottom"]), Dt(["borderTop"]), Dt(["borderBottom"]), Dt(["borderLeft", "borderRight"]), Dt(["borderLeft"]), Dt(["borderRight"]);
var gi = /* @__PURE__ */ ti({});
function qf(t) {
  return pa(t) || ua(t) || ui(t) || ma();
}
function xo(t, e) {
  for (var n = t, r = 0; r < e.length; r += 1) {
    if (n == null)
      return;
    n = n[e[r]];
  }
  return n;
}
function Fa(t, e, n, r) {
  if (!e.length)
    return n;
  var o = qf(e), i = o[0], s = o.slice(1), a;
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = at(t) : a = D({}, t), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Fa(a[i], s, n, r), a;
}
function Gr(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return e.length && r && n === void 0 && !xo(t, e.slice(0, -1)) ? t : Fa(t, e, n, r);
}
function Wf(t) {
  return se(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function es(t) {
  return Array.isArray(t) ? [] : {};
}
var Xf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Yf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = es(e[0]);
  return e.forEach(function(o) {
    function i(s, a) {
      var l = new Set(a), c = xo(o, s), u = Array.isArray(c);
      if (u || Wf(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = xo(r, s);
          u ? r = Gr(r, s, []) : (!f || se(f) !== "object") && (r = Gr(r, s, es(c))), Xf(c).forEach(function(d) {
            i([].concat(at(s), [d]), l);
          });
        }
      } else
        r = Gr(r, s, c);
    }
    i([]);
  }), r;
}
function za() {
}
let st = null;
function Kf() {
  st = null, ra();
}
let vi = za;
process.env.NODE_ENV !== "production" && (vi = (t, e, n) => {
  yt(t, `[antd: ${e}] ${n}`), process.env.NODE_ENV === "test" && Kf();
});
const Va = /* @__PURE__ */ b.createContext({}), Yt = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: e
  } = b.useContext(Va), n = (r, o, i) => {
    if (!r)
      if (e === !1 && o === "deprecated") {
        const s = st;
        st || (st = {}), st[t] = st[t] || [], st[t].includes(i || "") || st[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", st);
      } else
        process.env.NODE_ENV !== "production" && vi(r, t, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const t = () => {
  };
  return t.deprecated = za, t;
}, Sr = vi, Gf = /* @__PURE__ */ ti(void 0), De = "${label} is not a valid ${type}", wr = {
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
        string: De,
        method: De,
        array: De,
        object: De,
        number: De,
        date: De,
        boolean: De,
        integer: De,
        float: De,
        regexp: De,
        email: De,
        url: De,
        hex: De
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
Object.assign({}, wr.Modal);
let rr = [];
const ts = () => rr.reduce((t, e) => Object.assign(Object.assign({}, t), e), wr.Modal);
function $f(t) {
  if (t) {
    const e = Object.assign({}, t);
    return rr.push(e), ts(), () => {
      rr = rr.filter((n) => n !== e), ts();
    };
  }
  Object.assign({}, wr.Modal);
}
const Ha = /* @__PURE__ */ ti(void 0), Ua = "internalMark", qa = (t) => {
  const {
    locale: e = {},
    children: n,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = Yt("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Ua, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  b.useEffect(() => $f(e == null ? void 0 : e.Modal), [e]);
  const o = b.useMemo(() => Object.assign(Object.assign({}, e), {
    exist: !0
  }), [e]);
  return /* @__PURE__ */ b.createElement(Ha.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (qa.displayName = "LocaleProvider");
const Wa = {
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
}, vn = Object.assign(Object.assign({}, Wa), {
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
}), we = Math.round;
function $r(t, e) {
  const n = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = e(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const ns = (t, e, n) => n === 0 ? t : t / 100;
function an(t, e) {
  const n = e || 255;
  return t > n ? n : t < 0 ? 0 : t;
}
class ge {
  constructor(e) {
    B(this, "isValid", !0), B(this, "r", 0), B(this, "g", 0), B(this, "b", 0), B(this, "a", 1), B(this, "_h", void 0), B(this, "_s", void 0), B(this, "_l", void 0), B(this, "_v", void 0), B(this, "_max", void 0), B(this, "_min", void 0), B(this, "_brightness", void 0);
    function n(r) {
      return r[0] in e && r[1] in e && r[2] in e;
    }
    if (e) if (typeof e == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (e instanceof ge)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (n("rgb"))
      this.r = an(e.r), this.g = an(e.g), this.b = an(e.b), this.a = typeof e.a == "number" ? an(e.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(e);
    else if (n("hsv"))
      this.fromHsv(e);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e));
  }
  // ======================= Setter =======================
  setR(e) {
    return this._sc("r", e);
  }
  setG(e) {
    return this._sc("g", e);
  }
  setB(e) {
    return this._sc("b", e);
  }
  setA(e) {
    return this._sc("a", e, 1);
  }
  setHue(e) {
    const n = this.toHsv();
    return n.h = e, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function e(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = e(this.r), r = e(this.g), o = e(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._h = 0 : this._h = we(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._s = 0 : this._s = e / this.getMax();
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
  darken(e = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - e / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(e = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + e / 100;
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
  mix(e, n = 50) {
    const r = this._c(e), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: we(i("r")),
      g: we(i("g")),
      b: we(i("b")),
      a: we(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(e = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(e = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, e);
  }
  onBackground(e) {
    const n = this._c(e), r = this.a + n.a * (1 - this.a), o = (i) => we((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
  equals(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let e = "#";
    const n = (this.r || 0).toString(16);
    e += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    e += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (e += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = we(this.a * 255).toString(16);
      e += i.length === 2 ? i : "0" + i;
    }
    return e;
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
    const e = this.getHue(), n = we(this.getSaturation() * 100), r = we(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${e},${n}%,${r}%,${this.a})` : `hsl(${e},${n}%,${r}%)`;
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
  _sc(e, n, r) {
    const o = this.clone();
    return o[e] = an(n, r), o;
  }
  _c(e) {
    return new this.constructor(e);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(e) {
    const n = e.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: e,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = e % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const d = we(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const l = e / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = u) : l >= 1 && l < 2 ? (i = u, s = c) : l >= 2 && l < 3 ? (s = c, a = u) : l >= 3 && l < 4 ? (s = u, a = c) : l >= 4 && l < 5 ? (i = u, a = c) : l >= 5 && l < 6 && (i = c, a = u);
    const f = r - c / 2;
    this.r = we((i + f) * 255), this.g = we((s + f) * 255), this.b = we((a + f) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: r,
    a: o
  }) {
    this._h = e % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = we(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = e / 60, a = Math.floor(s), l = s - a, c = we(r * (1 - n) * 255), u = we(r * (1 - n * l) * 255), f = we(r * (1 - n * (1 - l)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(e) {
    const n = $r(e, ns);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = $r(e, ns);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = $r(e, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? we(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var zn = 2, rs = 0.16, Zf = 0.05, Jf = 0.05, Qf = 0.15, Xa = 5, Ya = 4, ed = [{
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
function os(t, e, n) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = n ? Math.round(t.h) - zn * e : Math.round(t.h) + zn * e : r = n ? Math.round(t.h) + zn * e : Math.round(t.h) - zn * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function is(t, e, n) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return n ? r = t.s - rs * e : e === Ya ? r = t.s + rs : r = t.s + Zf * e, r > 1 && (r = 1), n && e === Xa && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function ss(t, e, n) {
  var r;
  return n ? r = t.v + Jf * e : r = t.v - Qf * e, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yn(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new ge(t), o = r.toHsv(), i = Xa; i > 0; i -= 1) {
    var s = new ge({
      h: os(o, i, !0),
      s: is(o, i, !0),
      v: ss(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= Ya; a += 1) {
    var l = new ge({
      h: os(o, a),
      s: is(o, a),
      v: ss(o, a)
    });
    n.push(l);
  }
  return e.theme === "dark" ? ed.map(function(c) {
    var u = c.index, f = c.amount;
    return new ge(e.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var Zr = {
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
}, Ao = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ao.primary = Ao[5];
var To = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
To.primary = To[5];
var Oo = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Oo.primary = Oo[5];
var Ro = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ro.primary = Ro[5];
var Po = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Po.primary = Po[5];
var ko = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ko.primary = ko[5];
var _o = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
_o.primary = _o[5];
var No = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
No.primary = No[5];
var ur = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ur.primary = ur[5];
var Lo = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Lo.primary = Lo[5];
var jo = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
jo.primary = jo[5];
var Mo = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Mo.primary = Mo[5];
var Do = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Do.primary = Do[5];
var Jr = {
  red: Ao,
  volcano: To,
  orange: Oo,
  gold: Ro,
  yellow: Po,
  lime: ko,
  green: _o,
  cyan: No,
  blue: ur,
  geekblue: Lo,
  purple: jo,
  magenta: Mo,
  grey: Do
};
function td(t, e) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = e;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: u
  } = t, f = n(l), d = n(o), v = n(i), g = n(s), m = n(a), p = r(c, u), y = t.colorLink || t.colorInfo, E = n(y), A = new ge(g[1]).mix(new ge(g[3]), 50).toHexString();
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
    colorErrorBgFilledHover: A,
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
    colorLinkHover: E[4],
    colorLink: E[6],
    colorLinkActive: E[7],
    colorBgMask: new ge("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const nd = (t) => {
  let e = t, n = t, r = t, o = t;
  return t < 6 && t >= 5 ? e = t + 1 : t < 16 && t >= 6 ? e = t + 2 : t >= 16 && (e = 16), t < 7 && t >= 5 ? n = 4 : t < 8 && t >= 7 ? n = 5 : t < 14 && t >= 8 ? n = 6 : t < 16 && t >= 14 ? n = 7 : t >= 16 && (n = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: e,
    borderRadiusOuter: o
  };
};
function rd(t) {
  const {
    motionUnit: e,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = t;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + e).toFixed(1)}s`,
    motionDurationMid: `${(n + e * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + e * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, nd(r));
}
const od = (t) => {
  const {
    controlHeight: e
  } = t;
  return {
    controlHeightSM: e * 0.75,
    controlHeightXS: e * 0.5,
    controlHeightLG: e * 1.25
  };
};
function id(t) {
  return (t + 8) / t;
}
function sd(t) {
  const e = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return e[1] = t, e.map((n) => ({
    size: n,
    lineHeight: id(n)
  }));
}
const ad = (t) => {
  const e = sd(t), n = e.map((u) => u.size), r = e.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], l = r[0], c = r[2];
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
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(c * s),
    fontHeightSM: Math.round(l * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function cd(t) {
  const {
    sizeUnit: e,
    sizeStep: n
  } = t;
  return {
    sizeXXL: e * (n + 8),
    // 48
    sizeXL: e * (n + 4),
    // 32
    sizeLG: e * (n + 2),
    // 24
    sizeMD: e * (n + 1),
    // 20
    sizeMS: e * n,
    // 16
    size: e * n,
    // 16
    sizeSM: e * (n - 1),
    // 12
    sizeXS: e * (n - 2),
    // 8
    sizeXXS: e * (n - 3)
    // 4
  };
}
const ze = (t, e) => new ge(t).setA(e).toRgbString(), cn = (t, e) => new ge(t).darken(e).toHexString(), ld = (t) => {
  const e = yn(t);
  return {
    1: e[0],
    2: e[1],
    3: e[2],
    4: e[3],
    5: e[4],
    6: e[5],
    7: e[6],
    8: e[4],
    9: e[5],
    10: e[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, ud = (t, e) => {
  const n = t || "#fff", r = e || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ze(r, 0.88),
    colorTextSecondary: ze(r, 0.65),
    colorTextTertiary: ze(r, 0.45),
    colorTextQuaternary: ze(r, 0.25),
    colorFill: ze(r, 0.15),
    colorFillSecondary: ze(r, 0.06),
    colorFillTertiary: ze(r, 0.04),
    colorFillQuaternary: ze(r, 0.02),
    colorBgSolid: ze(r, 1),
    colorBgSolidHover: ze(r, 0.75),
    colorBgSolidActive: ze(r, 0.95),
    colorBgLayout: cn(n, 4),
    colorBgContainer: cn(n, 0),
    colorBgElevated: cn(n, 0),
    colorBgSpotlight: ze(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: cn(n, 15),
    colorBorderSecondary: cn(n, 6)
  };
};
function fd(t) {
  Zr.pink = Zr.magenta, Jr.pink = Jr.magenta;
  const e = Object.keys(Wa).map((n) => {
    const r = t[n] === Zr[n] ? Jr[n] : yn(t[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), e), td(t, {
    generateColorPalettes: ld,
    generateNeutralColorPalettes: ud
  })), ad(t.fontSize)), cd(t)), od(t)), rd(t));
}
const Ka = yo(fd), Io = {
  token: vn,
  override: {
    override: vn
  },
  hashed: !0
}, Ga = /* @__PURE__ */ Oe.createContext(Io), Bo = "ant", yi = "anticon", dd = (t, e) => e || (t ? `${Bo}-${t}` : Bo), vt = /* @__PURE__ */ b.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: dd,
  iconPrefixCls: yi
}), {
  Consumer: Eg
} = vt, as = {};
function $a(t) {
  const e = b.useContext(vt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = e, i = e[t];
  return Object.assign(Object.assign({
    classNames: as,
    styles: as
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const hd = `-ant-${Date.now()}-${Math.random()}`;
function pd(t, e) {
  const n = {}, r = (s, a) => {
    let l = s.clone();
    return l = (a == null ? void 0 : a(l)) || l, l.toRgbString();
  }, o = (s, a) => {
    const l = new ge(s), c = yn(l.toRgbString());
    n[`${a}-color`] = r(l), n[`${a}-color-disabled`] = c[1], n[`${a}-color-hover`] = c[4], n[`${a}-color-active`] = c[6], n[`${a}-color-outline`] = l.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = c[0], n[`${a}-color-deprecated-border`] = c[2];
  };
  if (e.primaryColor) {
    o(e.primaryColor, "primary");
    const s = new ge(e.primaryColor), a = yn(s.toRgbString());
    a.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(s, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (c) => c.setA(c.a * 0.12));
    const l = new ge(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (c) => c.setA(c.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (c) => c.darken(2));
  }
  return e.successColor && o(e.successColor, "success"), e.warningColor && o(e.warningColor, "warning"), e.errorColor && o(e.errorColor, "error"), e.infoColor && o(e.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${t}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function md(t, e) {
  const n = pd(t, e);
  ct() ? Rt(n, `${hd}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Sr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Fo = /* @__PURE__ */ b.createContext(!1), gd = (t) => {
  let {
    children: e,
    disabled: n
  } = t;
  const r = b.useContext(Fo);
  return /* @__PURE__ */ b.createElement(Fo.Provider, {
    value: n ?? r
  }, e);
}, bn = /* @__PURE__ */ b.createContext(void 0), vd = (t) => {
  let {
    children: e,
    size: n
  } = t;
  const r = b.useContext(bn);
  return /* @__PURE__ */ b.createElement(bn.Provider, {
    value: n || r
  }, e);
};
function yd() {
  const t = _t(Fo), e = _t(bn);
  return {
    componentDisabled: t,
    componentSize: e
  };
}
var Za = /* @__PURE__ */ Ke(function t() {
  Ye(this, t);
}), Ja = "CALC_UNIT", bd = new RegExp(Ja, "g");
function Qr(t) {
  return typeof t == "number" ? "".concat(t).concat(Ja) : t;
}
var Ed = /* @__PURE__ */ function(t) {
  Sn(n, t);
  var e = gr(n);
  function n(r, o) {
    var i;
    Ye(this, n), i = e.call(this), B(Ot(i), "result", ""), B(Ot(i), "unitlessCssVar", void 0), B(Ot(i), "lowPriority", void 0);
    var s = se(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Qr(r) : s === "string" && (i.result = r), i;
  }
  return Ke(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Qr(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Qr(o))), this.lowPriority = !0, this;
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
      var i = this, s = o || {}, a = s.unit, l = !0;
      return typeof a == "boolean" ? l = a : Array.from(this.unitlessCssVar).some(function(c) {
        return i.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(bd, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Za), Sd = /* @__PURE__ */ function(t) {
  Sn(n, t);
  var e = gr(n);
  function n(r) {
    var o;
    return Ye(this, n), o = e.call(this), B(Ot(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Ke(n, [{
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
}(Za), wd = function(e, n) {
  var r = e === "css" ? Ed : Sd;
  return function(o) {
    return new r(o, n);
  };
}, cs = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function zo(t) {
  var e = b.useRef();
  e.current = t;
  var n = b.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = e.current) === null || r === void 0 ? void 0 : r.call.apply(r, [e].concat(i));
  }, []);
  return n;
}
function Vo(t) {
  var e = b.useRef(!1), n = b.useState(t), r = Y(n, 2), o = r[0], i = r[1];
  b.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function s(a, l) {
    l && e.current || i(a);
  }
  return [o, s];
}
function ls(t, e, n, r) {
  var o = D({}, e[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var l = Y(a, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && yt(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[c] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[c]);
      }
    });
  }
  var s = D(D({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var Qa = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ho = !0;
function Cr() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!Qa)
    return Object.assign.apply(Object, [{}].concat(e));
  Ho = !1;
  var r = {};
  return e.forEach(function(o) {
    if (se(o) === "object") {
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
  }), Ho = !0, r;
}
var us = {};
function Cd() {
}
var xd = function(e) {
  var n, r = e, o = Cd;
  return Qa && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get: function(s, a) {
      if (Ho) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var l;
    us[s] = {
      global: Array.from(n),
      component: D(D({}, (l = us[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function fs(t, e, n) {
  if (typeof n == "function") {
    var r;
    return n(Cr(e, (r = e[t]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Ad(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return cr(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return cr(i);
      }).join(","), ")");
    }
  };
}
var Td = 1e3 * 60 * 10, Od = /* @__PURE__ */ function() {
  function t() {
    Ye(this, t), B(this, "map", /* @__PURE__ */ new Map()), B(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), B(this, "nextID", 0), B(this, "lastAccessBeat", /* @__PURE__ */ new Map()), B(this, "accessBeat", 0);
  }
  return Ke(t, [{
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
        return i && se(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(se(i), "_").concat(i);
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
          r - o > Td && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), ds = new Od();
function Rd(t, e) {
  return Oe.useMemo(function() {
    var n = ds.get(e);
    if (n)
      return n;
    var r = t();
    return ds.set(e, r), r;
  }, e);
}
var Pd = function() {
  return {};
};
function kd(t) {
  var e = t.useCSP, n = e === void 0 ? Pd : e, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function l(d, v, g, m) {
    var p = Array.isArray(d) ? d[0] : d;
    function y(k) {
      return "".concat(String(p)).concat(k.slice(0, 1).toUpperCase()).concat(k.slice(1));
    }
    var E = (m == null ? void 0 : m.unitless) || {}, A = typeof a == "function" ? a(d) : {}, O = D(D({}, A), {}, B({}, y("zIndexPopup"), !0));
    Object.keys(E).forEach(function(k) {
      O[y(k)] = E[k];
    });
    var w = D(D({}, m), {}, {
      unitless: O,
      prefixToken: y
    }), R = u(d, v, g, w), T = c(p, g, w);
    return function(k) {
      var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k, z = R(k, j), W = Y(z, 2), H = W[1], x = T(j), N = Y(x, 2), M = N[0], P = N[1];
      return [M, H, P];
    };
  }
  function c(d, v, g) {
    var m = g.unitless, p = g.injectStyle, y = p === void 0 ? !0 : p, E = g.prefixToken, A = g.ignore, O = function(T) {
      var k = T.rootCls, j = T.cssVar, z = j === void 0 ? {} : j, W = r(), H = W.realToken;
      return Hf({
        path: [d],
        prefix: z.prefix,
        key: z.key,
        unitless: m,
        ignore: A,
        token: H,
        scope: k
      }, function() {
        var x = fs(d, H, v), N = ls(d, H, x, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(x).forEach(function(M) {
          N[E(M)] = N[M], delete N[M];
        }), N;
      }), null;
    }, w = function(T) {
      var k = r(), j = k.cssVar;
      return [function(z) {
        return y && j ? /* @__PURE__ */ Oe.createElement(Oe.Fragment, null, /* @__PURE__ */ Oe.createElement(O, {
          rootCls: T,
          cssVar: j,
          component: d
        }), z) : z;
      }, j == null ? void 0 : j.key];
    };
    return w;
  }
  function u(d, v, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(d) ? d : [d, d], y = Y(p, 1), E = y[0], A = p.join("-"), O = t.layer || {
      name: "antd"
    };
    return function(w) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, T = r(), k = T.theme, j = T.realToken, z = T.hashId, W = T.token, H = T.cssVar, x = o(), N = x.rootPrefixCls, M = x.iconPrefixCls, P = n(), L = H ? "css" : "js", U = Rd(function() {
        var ae = /* @__PURE__ */ new Set();
        return H && Object.keys(m.unitless || {}).forEach(function(ie) {
          ae.add(Jn(ie, H.prefix)), ae.add(Jn(ie, cs(E, H.prefix)));
        }), wd(L, ae);
      }, [L, E, H == null ? void 0 : H.prefix]), G = Ad(L), J = G.max, te = G.min, ee = {
        theme: k,
        token: W,
        hashId: z,
        nonce: function() {
          return P.nonce;
        },
        clientOnly: m.clientOnly,
        layer: O,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && Co(D(D({}, ee), {}, {
        clientOnly: !1,
        path: ["Shared", N]
      }), function() {
        return i(W, {
          prefix: {
            rootPrefixCls: N,
            iconPrefixCls: M
          },
          csp: P
        });
      });
      var $ = Co(D(D({}, ee), {}, {
        path: [A, w, M]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var ae = xd(W), ie = ae.token, me = ae.flush, ce = fs(E, j, g), Re = ".".concat(w), Be = ls(E, j, ce, {
          deprecatedTokens: m.deprecatedTokens
        });
        H && ce && se(ce) === "object" && Object.keys(ce).forEach(function(Ze) {
          ce[Ze] = "var(".concat(Jn(Ze, cs(E, H.prefix)), ")");
        });
        var Me = Cr(ie, {
          componentCls: Re,
          prefixCls: w,
          iconCls: ".".concat(M),
          antCls: ".".concat(N),
          calc: U,
          // @ts-ignore
          max: J,
          // @ts-ignore
          min: te
        }, H ? ce : Be), $e = v(Me, {
          hashId: z,
          prefixCls: w,
          rootPrefixCls: N,
          iconPrefixCls: M
        });
        me(E, Be);
        var Pe = typeof s == "function" ? s(Me, w, R, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Pe, $e];
      });
      return [$, z];
    };
  }
  function f(d, v, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(d, v, g, D({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), y = function(A) {
      var O = A.prefixCls, w = A.rootCls, R = w === void 0 ? O : w;
      return p(O, R), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), y;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const _d = "5.24.6";
function eo(t) {
  return t >= 0 && t <= 255;
}
function Vn(t, e) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new ge(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: l
  } = new ge(e).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - s * (1 - c)) / c), f = Math.round((r - a * (1 - c)) / c), d = Math.round((o - l * (1 - c)) / c);
    if (eo(u) && eo(f) && eo(d))
      return new ge({
        r: u,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new ge({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Nd = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
function ec(t) {
  const {
    override: e
  } = t, n = Nd(t, ["override"]), r = Object.assign({}, e);
  Object.keys(vn).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, a = 768, l = 992, c = 1200, u = 1600;
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
    colorSplit: Vn(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Vn(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Vn(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Vn(o.colorPrimaryBg, o.colorBgContainer),
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
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ge("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var hs = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const tc = {
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
}, Ld = {
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
}, jd = {
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
}, nc = (t, e, n) => {
  const r = n.getDerivativeToken(t), {
    override: o
  } = e, i = hs(e, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = ec(s), i && Object.entries(i).forEach((a) => {
    let [l, c] = a;
    const {
      theme: u
    } = c, f = hs(c, ["theme"]);
    let d = f;
    u && (d = nc(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[l] = d;
  }), s;
};
function bi() {
  const {
    token: t,
    hashed: e,
    theme: n,
    override: r,
    cssVar: o
  } = Oe.useContext(Ga), i = `${_d}-${e || ""}`, s = n || Ka, [a, l, c] = hf(s, [vn, t], {
    salt: i,
    override: r,
    getComputedToken: nc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ec,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: tc,
      ignore: Ld,
      preserve: jd
    }
  });
  return [s, c, e ? l : "", a, o];
}
const rc = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
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
    fontFamily: e ? "inherit" : t.fontFamily
  };
}, Md = () => ({
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
}), Dd = (t) => ({
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
}), Id = (t, e, n, r) => {
  const o = `[class^="${e}"], [class*=" ${e}"]`, i = n ? `.${n}` : o, s = {
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
}, oc = (t) => ({
  [`.${t}`]: Object.assign(Object.assign({}, Md()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ei
} = kd({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = _t(vt);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: e
    };
  },
  useToken: () => {
    const [t, e, n, r, o] = bi();
    return {
      theme: t,
      realToken: e,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: t
    } = _t(vt);
    return t ?? {};
  },
  getResetStyles: (t, e) => {
    var n;
    const r = Dd(t);
    return [r, {
      "&": r
    }, oc((n = e == null ? void 0 : e.prefix.iconPrefixCls) !== null && n !== void 0 ? n : yi)];
  },
  getCommonStyle: Id,
  getCompUnitless: () => tc
}), Bd = (t, e) => {
  const [n, r] = bi();
  return Co({
    token: r,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => e == null ? void 0 : e.nonce,
    layer: {
      name: "antd"
    }
  }, () => [oc(t)]);
}, Fd = Object.assign({}, b), {
  useId: ps
} = Fd, zd = () => "", Vd = typeof ps > "u" ? zd : ps;
function Hd(t, e, n) {
  var r, o;
  const i = Yt("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !e ? Object.assign(Object.assign({}, Io), {
    hashed: (r = e == null ? void 0 : e.hashed) !== null && r !== void 0 ? r : Io.hashed,
    cssVar: e == null ? void 0 : e.cssVar
  }) : e, l = Vd();
  if (process.env.NODE_ENV !== "production") {
    const c = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && i(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return sa(() => {
    var c, u;
    if (!t)
      return e;
    const f = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      f[g] = Object.assign(Object.assign({}, f[g]), t.components[g]);
    });
    const d = `css-var-${l.replace(/:/g, "")}`, v = ((c = s.cssVar) !== null && c !== void 0 ? c : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: v
    });
  }, [s, a], (c, u) => c.some((f, d) => {
    const v = u[d];
    return !Bu(f, v, !0);
  }));
}
var Ud = ["children"], ic = /* @__PURE__ */ b.createContext({});
function qd(t) {
  var e = t.children, n = mn(t, Ud);
  return /* @__PURE__ */ b.createElement(ic.Provider, {
    value: n
  }, e);
}
var Wd = /* @__PURE__ */ function(t) {
  Sn(n, t);
  var e = gr(n);
  function n() {
    return Ye(this, n), e.apply(this, arguments);
  }
  return Ke(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(b.Component);
function Xd(t) {
  var e = b.useReducer(function(a) {
    return a + 1;
  }, 0), n = Y(e, 2), r = n[1], o = b.useRef(t), i = zo(function() {
    return o.current;
  }), s = zo(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var ht = "none", Hn = "appear", Un = "enter", qn = "leave", ms = "none", qe = "prepare", It = "start", Bt = "active", Si = "end", sc = "prepared";
function gs(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit".concat(t)] = "webkit".concat(e), n["Moz".concat(t)] = "moz".concat(e), n["ms".concat(t)] = "MS".concat(e), n["O".concat(t)] = "o".concat(e.toLowerCase()), n;
}
function Yd(t, e) {
  var n = {
    animationend: gs("Animation", "AnimationEnd"),
    transitionend: gs("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in e || delete n.animationend.animation, "TransitionEvent" in e || delete n.transitionend.transition), n;
}
var Kd = Yd(ct(), typeof window < "u" ? window : {}), ac = {};
if (ct()) {
  var Gd = document.createElement("div");
  ac = Gd.style;
}
var Wn = {};
function cc(t) {
  if (Wn[t])
    return Wn[t];
  var e = Kd[t];
  if (e)
    for (var n = Object.keys(e), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(e, i) && i in ac)
        return Wn[t] = e[i], Wn[t];
    }
  return "";
}
var lc = cc("animationend"), uc = cc("transitionend"), fc = !!(lc && uc), vs = lc || "animationend", ys = uc || "transitionend";
function bs(t, e) {
  if (!t) return null;
  if (se(t) === "object") {
    var n = e.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[n];
  }
  return "".concat(t, "-").concat(e);
}
const $d = function(t) {
  var e = xe();
  function n(o) {
    o && (o.removeEventListener(ys, t), o.removeEventListener(vs, t));
  }
  function r(o) {
    e.current && e.current !== o && n(e.current), o && o !== e.current && (o.addEventListener(ys, t), o.addEventListener(vs, t), e.current = o);
  }
  return b.useEffect(function() {
    return function() {
      n(e.current);
    };
  }, []), [r, n];
};
var dc = ct() ? hl : Ne;
const Zd = function() {
  var t = b.useRef(null);
  function e() {
    ar.cancel(t.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    e();
    var i = ar(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : n(r, o - 1);
    });
    t.current = i;
  }
  return b.useEffect(function() {
    return function() {
      e();
    };
  }, []), [n, e];
};
var Jd = [qe, It, Bt, Si], Qd = [qe, sc], hc = !1, eh = !0;
function pc(t) {
  return t === Bt || t === Si;
}
const th = function(t, e, n) {
  var r = Vo(ms), o = Y(r, 2), i = o[0], s = o[1], a = Zd(), l = Y(a, 2), c = l[0], u = l[1];
  function f() {
    s(qe, !0);
  }
  var d = e ? Qd : Jd;
  return dc(function() {
    if (i !== ms && i !== Si) {
      var v = d.indexOf(i), g = d[v + 1], m = n(i);
      m === hc ? s(g, !0) : g && c(function(p) {
        function y() {
          p.isCanceled() || s(g, !0);
        }
        m === !0 ? y() : Promise.resolve(m).then(y);
      });
    }
  }, [t, i]), b.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function nh(t, e, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, l = r.motionLeave, c = l === void 0 ? !0 : l, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, y = r.onLeaveStart, E = r.onAppearActive, A = r.onEnterActive, O = r.onLeaveActive, w = r.onAppearEnd, R = r.onEnterEnd, T = r.onLeaveEnd, k = r.onVisibleChanged, j = Vo(), z = Y(j, 2), W = z[0], H = z[1], x = Xd(ht), N = Y(x, 2), M = N[0], P = N[1], L = Vo(null), U = Y(L, 2), G = U[0], J = U[1], te = M(), ee = xe(!1), $ = xe(null);
  function ae() {
    return n();
  }
  var ie = xe(!1);
  function me() {
    P(ht), J(null, !0);
  }
  var ce = zo(function(Se) {
    var ue = M();
    if (ue !== ht) {
      var ke = ae();
      if (!(Se && !Se.deadline && Se.target !== ke)) {
        var lt = ie.current, it;
        ue === Hn && lt ? it = w == null ? void 0 : w(ke, Se) : ue === Un && lt ? it = R == null ? void 0 : R(ke, Se) : ue === qn && lt && (it = T == null ? void 0 : T(ke, Se)), lt && it !== !1 && me();
      }
    }
  }), Re = $d(ce), Be = Y(Re, 1), Me = Be[0], $e = function(ue) {
    switch (ue) {
      case Hn:
        return B(B(B({}, qe, d), It, m), Bt, E);
      case Un:
        return B(B(B({}, qe, v), It, p), Bt, A);
      case qn:
        return B(B(B({}, qe, g), It, y), Bt, O);
      default:
        return {};
    }
  }, Pe = b.useMemo(function() {
    return $e(te);
  }, [te]), Ze = th(te, !t, function(Se) {
    if (Se === qe) {
      var ue = Pe[qe];
      return ue ? ue(ae()) : hc;
    }
    if (ve in Pe) {
      var ke;
      J(((ke = Pe[ve]) === null || ke === void 0 ? void 0 : ke.call(Pe, ae(), null)) || null);
    }
    return ve === Bt && te !== ht && (Me(ae()), u > 0 && (clearTimeout($.current), $.current = setTimeout(function() {
      ce({
        deadline: !0
      });
    }, u))), ve === sc && me(), eh;
  }), F = Y(Ze, 2), Fe = F[0], ve = F[1], ot = pc(ve);
  ie.current = ot;
  var Et = xe(null);
  dc(function() {
    if (!(ee.current && Et.current === e)) {
      H(e);
      var Se = ee.current;
      ee.current = !0;
      var ue;
      !Se && e && a && (ue = Hn), Se && e && i && (ue = Un), (Se && !e && c || !Se && f && !e && c) && (ue = qn);
      var ke = $e(ue);
      ue && (t || ke[qe]) ? (P(ue), Fe()) : P(ht), Et.current = e;
    }
  }, [e]), Ne(function() {
    // Cancel appear
    (te === Hn && !a || // Cancel enter
    te === Un && !i || // Cancel leave
    te === qn && !c) && P(ht);
  }, [a, i, c]), Ne(function() {
    return function() {
      ee.current = !1, clearTimeout($.current);
    };
  }, []);
  var Je = b.useRef(!1);
  Ne(function() {
    W && (Je.current = !0), W !== void 0 && te === ht && ((Je.current || W) && (k == null || k(W)), Je.current = !0);
  }, [W, te]);
  var St = G;
  return Pe[qe] && ve === It && (St = D({
    transition: "none"
  }, St)), [te, ve, St, W ?? e];
}
function rh(t) {
  var e = t;
  se(t) === "object" && (e = t.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && e && i !== !1);
  }
  var r = /* @__PURE__ */ b.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, d = o.motionName, v = o.leavedClassName, g = o.eventProps, m = b.useContext(ic), p = m.motion, y = n(o, p), E = xe(), A = xe();
    function O() {
      try {
        return E.current instanceof HTMLElement ? E.current : wu(A.current);
      } catch {
        return null;
      }
    }
    var w = nh(y, a, O, o), R = Y(w, 4), T = R[0], k = R[1], j = R[2], z = R[3], W = b.useRef(z);
    z && (W.current = !0);
    var H = b.useCallback(function(U) {
      E.current = U, aa(i, U);
    }, [i]), x, N = D(D({}, g), {}, {
      visible: a
    });
    if (!f)
      x = null;
    else if (T === ht)
      z ? x = f(D({}, N), H) : !c && W.current && v ? x = f(D(D({}, N), {}, {
        className: v
      }), H) : u || !c && !v ? x = f(D(D({}, N), {}, {
        style: {
          display: "none"
        }
      }), H) : x = null;
    else {
      var M;
      k === qe ? M = "prepare" : pc(k) ? M = "active" : k === It && (M = "start");
      var P = bs(d, "".concat(T, "-").concat(M));
      x = f(D(D({}, N), {}, {
        className: Te(bs(d, T), B(B({}, P, P && M), d, typeof d == "string")),
        style: j
      }), H);
    }
    if (/* @__PURE__ */ b.isValidElement(x) && Ru(x)) {
      var L = Pu(x);
      L || (x = /* @__PURE__ */ b.cloneElement(x, {
        ref: H
      }));
    }
    return /* @__PURE__ */ b.createElement(Wd, {
      ref: A
    }, x);
  });
  return r.displayName = "CSSMotion", r;
}
const mc = rh(fc);
var Uo = "add", qo = "keep", Wo = "remove", to = "removed";
function oh(t) {
  var e;
  return t && se(t) === "object" && "key" in t ? e = t : e = {
    key: t
  }, D(D({}, e), {}, {
    key: String(e.key)
  });
}
function Xo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(oh);
}
function ih() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = e.length, i = Xo(t), s = Xo(e);
  i.forEach(function(c) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = s[f];
      if (d.key === c.key) {
        r < f && (n = n.concat(s.slice(r, f).map(function(v) {
          return D(D({}, v), {}, {
            status: Uo
          });
        })), r = f), n.push(D(D({}, d), {}, {
          status: qo
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(D(D({}, c), {}, {
      status: Wo
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(c) {
    return D(D({}, c), {}, {
      status: Uo
    });
  })));
  var a = {};
  n.forEach(function(c) {
    var u = c.key;
    a[u] = (a[u] || 0) + 1;
  });
  var l = Object.keys(a).filter(function(c) {
    return a[c] > 1;
  });
  return l.forEach(function(c) {
    n = n.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== c || d !== Wo;
    }), n.forEach(function(u) {
      u.key === c && (u.status = qo);
    });
  }), n;
}
var sh = ["component", "children", "onVisibleChanged", "onAllRemoved"], ah = ["status"], ch = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function lh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mc, n = /* @__PURE__ */ function(r) {
    Sn(i, r);
    var o = gr(i);
    function i() {
      var s;
      Ye(this, i);
      for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++)
        l[c] = arguments[c];
      return s = o.call.apply(o, [this].concat(l)), B(Ot(s), "state", {
        keyEntities: []
      }), B(Ot(s), "removeKey", function(u) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(v) {
            return v.key !== u ? v : D(D({}, v), {}, {
              status: to
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(v) {
            var g = v.status;
            return g !== to;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return Ke(i, [{
      key: "render",
      value: function() {
        var a = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, d = c.onVisibleChanged;
        c.onAllRemoved;
        var v = mn(c, sh), g = u || b.Fragment, m = {};
        return ch.forEach(function(p) {
          m[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ b.createElement(g, v, l.map(function(p, y) {
          var E = p.status, A = mn(p, ah), O = E === Uo || E === qo;
          return /* @__PURE__ */ b.createElement(e, rt({}, m, {
            key: A.key,
            visible: O,
            eventProps: A,
            onVisibleChanged: function(R) {
              d == null || d(R, {
                key: A.key
              }), R || a.removeKey(A.key);
            }
          }), function(w, R) {
            return f(D(D({}, w), {}, {
              index: y
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, l) {
        var c = a.keys, u = l.keyEntities, f = Xo(c), d = ih(u, f);
        return {
          keyEntities: d.filter(function(v) {
            var g = u.find(function(m) {
              var p = m.key;
              return v.key === p;
            });
            return !(g && g.status === to && v.status === Wo);
          })
        };
      }
    }]), i;
  }(b.Component);
  return B(n, "defaultProps", {
    component: "div"
  }), n;
}
lh(fc);
function uh(t) {
  const {
    children: e
  } = t, [, n] = bi(), {
    motion: r
  } = n, o = b.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ b.createElement(qd, {
    motion: r
  }, e) : e;
}
const gc = /* @__PURE__ */ b.memo((t) => {
  let {
    dropdownMatchSelectWidth: e
  } = t;
  return Yt("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (gc.displayName = "PropWarning");
const fh = process.env.NODE_ENV !== "production" ? gc : () => null;
var dh = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
let Yo = !1;
process.env.NODE_ENV;
const hh = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let vc;
function ph() {
  return vc || Bo;
}
function mh(t) {
  return Object.keys(t).some((e) => e.endsWith("Color"));
}
const gh = (t) => {
  const {
    prefixCls: e,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = t;
  e !== void 0 && (vc = e), r && mh(r) && (process.env.NODE_ENV !== "production" && Sr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), md(ph(), r));
}, vh = (t) => {
  const {
    children: e,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: s,
    locale: a,
    componentSize: l,
    direction: c,
    space: u,
    splitter: f,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: y,
    iconPrefixCls: E,
    theme: A,
    componentDisabled: O,
    segmented: w,
    statistic: R,
    spin: T,
    calendar: k,
    carousel: j,
    cascader: z,
    collapse: W,
    typography: H,
    checkbox: x,
    descriptions: N,
    divider: M,
    drawer: P,
    skeleton: L,
    steps: U,
    image: G,
    layout: J,
    list: te,
    mentions: ee,
    modal: $,
    progress: ae,
    result: ie,
    slider: me,
    breadcrumb: ce,
    menu: Re,
    pagination: Be,
    input: Me,
    textArea: $e,
    empty: Pe,
    badge: Ze,
    radio: F,
    rate: Fe,
    switch: ve,
    transfer: ot,
    avatar: Et,
    message: Je,
    tag: St,
    table: Se,
    card: ue,
    tabs: ke,
    timeline: lt,
    timePicker: it,
    upload: An,
    notification: Tn,
    tree: _r,
    colorPicker: On,
    datePicker: Rn,
    rangePicker: Nr,
    flex: Lr,
    wave: jr,
    dropdown: Mr,
    warning: Dr,
    tour: Ir,
    tooltip: Br,
    popover: Jt,
    popconfirm: Pn,
    floatButtonGroup: ut,
    variant: Qt,
    inputNumber: en,
    treeSelect: kn
  } = t, _n = b.useCallback((fe, h) => {
    const {
      prefixCls: C
    } = t;
    if (h)
      return h;
    const _ = C || y.getPrefixCls("");
    return fe ? `${_}-${fe}` : _;
  }, [y.getPrefixCls, t.prefixCls]), wt = E || y.iconPrefixCls || yi, Lt = n || y.csp;
  Bd(wt, Lt);
  const Ct = Hd(A, y.theme, {
    prefixCls: _n("")
  });
  process.env.NODE_ENV !== "production" && (Yo = Yo || !!Ct);
  const jt = {
    csp: Lt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: c,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: m,
    getPrefixCls: _n,
    iconPrefixCls: wt,
    theme: Ct,
    segmented: w,
    statistic: R,
    spin: T,
    calendar: k,
    carousel: j,
    cascader: z,
    collapse: W,
    typography: H,
    checkbox: x,
    descriptions: N,
    divider: M,
    drawer: P,
    skeleton: L,
    steps: U,
    image: G,
    input: Me,
    textArea: $e,
    layout: J,
    list: te,
    mentions: ee,
    modal: $,
    progress: ae,
    result: ie,
    slider: me,
    breadcrumb: ce,
    menu: Re,
    pagination: Be,
    empty: Pe,
    badge: Ze,
    radio: F,
    rate: Fe,
    switch: ve,
    transfer: ot,
    avatar: Et,
    message: Je,
    tag: St,
    table: Se,
    card: ue,
    tabs: ke,
    timeline: lt,
    timePicker: it,
    upload: An,
    notification: Tn,
    tree: _r,
    colorPicker: On,
    datePicker: Rn,
    rangePicker: Nr,
    flex: Lr,
    wave: jr,
    dropdown: Mr,
    warning: Dr,
    tour: Ir,
    tooltip: Br,
    popover: Jt,
    popconfirm: Pn,
    floatButtonGroup: ut,
    variant: Qt,
    inputNumber: en,
    treeSelect: kn
  };
  process.env.NODE_ENV !== "production" && Yt("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ft = Object.assign({}, y);
  Object.keys(jt).forEach((fe) => {
    jt[fe] !== void 0 && (ft[fe] = jt[fe]);
  }), hh.forEach((fe) => {
    const h = t[fe];
    h && (ft[fe] = h);
  }), typeof r < "u" && (ft.button = Object.assign({
    autoInsertSpace: r
  }, ft.button));
  const dt = sa(() => ft, ft, (fe, h) => {
    const C = Object.keys(fe), _ = Object.keys(h);
    return C.length !== _.length || C.some((V) => fe[V] !== h[V]);
  }), {
    layer: tn
  } = b.useContext(wn), Nn = b.useMemo(() => ({
    prefixCls: wt,
    csp: Lt,
    layer: tn ? "antd" : void 0
  }), [wt, Lt, tn]);
  let Ee = /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(fh, {
    dropdownMatchSelectWidth: v
  }), e);
  const Ln = b.useMemo(() => {
    var fe, h, C, _;
    return Yf(((fe = wr.Form) === null || fe === void 0 ? void 0 : fe.defaultValidateMessages) || {}, ((C = (h = dt.locale) === null || h === void 0 ? void 0 : h.Form) === null || C === void 0 ? void 0 : C.defaultValidateMessages) || {}, ((_ = dt.form) === null || _ === void 0 ? void 0 : _.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [dt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Ln).length > 0 && (Ee = /* @__PURE__ */ b.createElement(Gf.Provider, {
    value: Ln
  }, Ee)), a && (Ee = /* @__PURE__ */ b.createElement(qa, {
    locale: a,
    _ANT_MARK__: Ua
  }, Ee)), Ee = /* @__PURE__ */ b.createElement(gi.Provider, {
    value: Nn
  }, Ee), l && (Ee = /* @__PURE__ */ b.createElement(vd, {
    size: l
  }, Ee)), Ee = /* @__PURE__ */ b.createElement(uh, null, Ee);
  const Fr = b.useMemo(() => {
    const fe = Ct || {}, {
      algorithm: h,
      token: C,
      components: _,
      cssVar: V
    } = fe, Q = dh(fe, ["algorithm", "token", "components", "cssVar"]), ne = h && (!Array.isArray(h) || h.length > 0) ? yo(h) : Ka, K = {};
    Object.entries(_ || {}).forEach((Ce) => {
      let [le, de] = Ce;
      const he = Object.assign({}, de);
      "algorithm" in he && (he.algorithm === !0 ? he.theme = ne : (Array.isArray(he.algorithm) || typeof he.algorithm == "function") && (he.theme = yo(he.algorithm)), delete he.algorithm), K[le] = he;
    });
    const X = Object.assign(Object.assign({}, vn), C);
    return Object.assign(Object.assign({}, Q), {
      theme: ne,
      token: X,
      components: K,
      override: Object.assign({
        override: X
      }, K),
      cssVar: V
    });
  }, [Ct]);
  return A && (Ee = /* @__PURE__ */ b.createElement(Ga.Provider, {
    value: Fr
  }, Ee)), dt.warning && (Ee = /* @__PURE__ */ b.createElement(Va.Provider, {
    value: dt.warning
  }, Ee)), O !== void 0 && (Ee = /* @__PURE__ */ b.createElement(gd, {
    disabled: O
  }, Ee)), /* @__PURE__ */ b.createElement(vt.Provider, {
    value: dt
  }, Ee);
}, Kt = (t) => {
  const e = b.useContext(vt), n = b.useContext(Ha);
  return /* @__PURE__ */ b.createElement(vh, Object.assign({
    parentContext: e,
    legacyLocale: n
  }, t));
};
Kt.ConfigContext = vt;
Kt.SizeContext = bn;
Kt.config = gh;
Kt.useConfig = yd;
Object.defineProperty(Kt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Sr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), bn)
});
process.env.NODE_ENV !== "production" && (Kt.displayName = "ConfigProvider");
var yh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function yc(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
}
function bh(t) {
  return yc(t) instanceof ShadowRoot;
}
function Eh(t) {
  return bh(t) ? yc(t) : null;
}
function Sh(t) {
  return t.replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  });
}
function wh(t, e) {
  yt(t, "[@ant-design/icons] ".concat(e));
}
function Es(t) {
  return se(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (se(t.icon) === "object" || typeof t.icon == "function");
}
function Ss() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(e, n) {
    var r = t[n];
    switch (n) {
      case "class":
        e.className = r, delete e.class;
        break;
      default:
        delete e[n], e[Sh(n)] = r;
    }
    return e;
  }, {});
}
function Ko(t, e, n) {
  return n ? /* @__PURE__ */ Oe.createElement(t.tag, D(D({
    key: e
  }, Ss(t.attrs)), n), (t.children || []).map(function(r, o) {
    return Ko(r, "".concat(e, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ Oe.createElement(t.tag, D({
    key: e
  }, Ss(t.attrs)), (t.children || []).map(function(r, o) {
    return Ko(r, "".concat(e, "-").concat(t.tag, "-").concat(o));
  }));
}
function bc(t) {
  return yn(t)[0];
}
function Ec(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var Ch = `
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
`, xh = function(e) {
  var n = _t(gi), r = n.csp, o = n.prefixCls, i = n.layer, s = Ch;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ne(function() {
    var a = e.current, l = Eh(a);
    Rt(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: l
    });
  }, []);
}, Ah = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], dn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Th(t) {
  var e = t.primaryColor, n = t.secondaryColor;
  dn.primaryColor = e, dn.secondaryColor = n || bc(e), dn.calculated = !!n;
}
function Oh() {
  return D({}, dn);
}
var Gt = function(e) {
  var n = e.icon, r = e.className, o = e.onClick, i = e.style, s = e.primaryColor, a = e.secondaryColor, l = mn(e, Ah), c = b.useRef(), u = dn;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || bc(s)
  }), xh(c), wh(Es(n), "icon should be icon definiton, but got ".concat(n)), !Es(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = D(D({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), Ko(f.icon, "svg-".concat(f.name), D(D({
    className: r,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
Gt.displayName = "IconReact";
Gt.getTwoToneColors = Oh;
Gt.setTwoToneColors = Th;
function Sc(t) {
  var e = Ec(t), n = Y(e, 2), r = n[0], o = n[1];
  return Gt.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Rh() {
  var t = Gt.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Ph = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Sc(ur.primary);
var bt = /* @__PURE__ */ b.forwardRef(function(t, e) {
  var n = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, l = t.twoToneColor, c = mn(t, Ph), u = b.useContext(gi), f = u.prefixCls, d = f === void 0 ? "anticon" : f, v = u.rootClassName, g = Te(v, d, B(B({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), n), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = Ec(l), E = Y(y, 2), A = E[0], O = E[1];
  return /* @__PURE__ */ b.createElement("span", rt({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: e,
    tabIndex: m,
    onClick: a,
    className: g
  }), /* @__PURE__ */ b.createElement(Gt, {
    icon: r,
    primaryColor: A,
    secondaryColor: O,
    style: p
  }));
});
bt.displayName = "AntdIcon";
bt.getTwoToneColor = Rh;
bt.setTwoToneColor = Sc;
var kh = function(e, n) {
  return /* @__PURE__ */ b.createElement(bt, rt({}, e, {
    ref: n,
    icon: yh
  }));
}, wc = /* @__PURE__ */ b.forwardRef(kh);
process.env.NODE_ENV !== "production" && (wc.displayName = "CheckCircleFilled");
var _h = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Nh = function(e, n) {
  return /* @__PURE__ */ b.createElement(bt, rt({}, e, {
    ref: n,
    icon: _h
  }));
}, Cc = /* @__PURE__ */ b.forwardRef(Nh);
process.env.NODE_ENV !== "production" && (Cc.displayName = "CloseCircleFilled");
var Lh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, jh = function(e, n) {
  return /* @__PURE__ */ b.createElement(bt, rt({}, e, {
    ref: n,
    icon: Lh
  }));
}, xc = /* @__PURE__ */ b.forwardRef(jh);
process.env.NODE_ENV !== "production" && (xc.displayName = "CloseOutlined");
var Mh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Dh = function(e, n) {
  return /* @__PURE__ */ b.createElement(bt, rt({}, e, {
    ref: n,
    icon: Mh
  }));
}, Ac = /* @__PURE__ */ b.forwardRef(Dh);
process.env.NODE_ENV !== "production" && (Ac.displayName = "ExclamationCircleFilled");
var Ih = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Bh = function(e, n) {
  return /* @__PURE__ */ b.createElement(bt, rt({}, e, {
    ref: n,
    icon: Ih
  }));
}, Tc = /* @__PURE__ */ b.forwardRef(Bh);
process.env.NODE_ENV !== "production" && (Tc.displayName = "InfoCircleFilled");
var Fh = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, zh = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Vh = "".concat(Fh, " ").concat(zh).split(/[\s\n]+/), Hh = "aria-", Uh = "data-";
function ws(t, e) {
  return t.indexOf(e) === 0;
}
function qh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = D({}, e);
  var r = {};
  return Object.keys(t).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || ws(o, Hh)) || // Data
    n.data && ws(o, Uh) || // Attr
    n.attr && Vh.includes(o)) && (r[o] = t[o]);
  }), r;
}
const Oc = (t, e, n) => /* @__PURE__ */ Oe.isValidElement(t) ? /* @__PURE__ */ Oe.cloneElement(t, typeof n == "function" ? n(t.props || {}) : n) : e;
function Wh(t, e) {
  return Oc(t, t, e);
}
const Xn = (t, e, n, r, o) => ({
  background: t,
  border: `${cr(r.lineWidth)} ${r.lineType} ${e}`,
  [`${o}-icon`]: {
    color: n
  }
}), Xh = (t) => {
  const {
    componentCls: e,
    motionDurationSlow: n,
    marginXS: r,
    marginSM: o,
    fontSize: i,
    fontSizeLG: s,
    lineHeight: a,
    borderRadiusLG: l,
    motionEaseInOutCirc: c,
    withDescriptionIconSize: u,
    colorText: f,
    colorTextHeading: d,
    withDescriptionPadding: v,
    defaultPadding: g
  } = t;
  return {
    [e]: Object.assign(Object.assign({}, rc(t)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: g,
      wordWrap: "break-word",
      borderRadius: l,
      [`&${e}-rtl`]: {
        direction: "rtl"
      },
      [`${e}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${e}-icon`]: {
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
      [`&${e}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${n} ${c}, opacity ${n} ${c},
        padding-top ${n} ${c}, padding-bottom ${n} ${c},
        margin-bottom ${n} ${c}`
      },
      [`&${e}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${e}-with-description`]: {
      alignItems: "flex-start",
      padding: v,
      [`${e}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${e}-message`]: {
        display: "block",
        marginBottom: r,
        color: d,
        fontSize: s
      },
      [`${e}-description`]: {
        display: "block",
        color: f
      }
    },
    [`${e}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, Yh = (t) => {
  const {
    componentCls: e,
    colorSuccess: n,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: i,
    colorWarningBorder: s,
    colorWarningBg: a,
    colorError: l,
    colorErrorBorder: c,
    colorErrorBg: u,
    colorInfo: f,
    colorInfoBorder: d,
    colorInfoBg: v
  } = t;
  return {
    [e]: {
      "&-success": Xn(o, r, n, t, e),
      "&-info": Xn(v, d, f, t, e),
      "&-warning": Xn(a, s, i, t, e),
      "&-error": Object.assign(Object.assign({}, Xn(u, c, l, t, e)), {
        [`${e}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Kh = (t) => {
  const {
    componentCls: e,
    iconCls: n,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
    colorIconHover: a
  } = t;
  return {
    [e]: {
      "&-action": {
        marginInlineStart: o
      },
      [`${e}-close-icon`]: {
        marginInlineStart: o,
        padding: 0,
        overflow: "hidden",
        fontSize: i,
        lineHeight: cr(i),
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
}, Gh = (t) => ({
  withDescriptionIconSize: t.fontSizeHeading3,
  defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
}), $h = Ei("Alert", (t) => [Xh(t), Yh(t), Kh(t)], Gh);
var Cs = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const Zh = {
  success: wc,
  info: Tc,
  error: Cc,
  warning: Ac
}, Jh = (t) => {
  const {
    icon: e,
    prefixCls: n,
    type: r
  } = t, o = Zh[r] || null;
  return e ? Oc(e, /* @__PURE__ */ b.createElement("span", {
    className: `${n}-icon`
  }, e), () => ({
    className: Te(`${n}-icon`, e.props.className)
  })) : /* @__PURE__ */ b.createElement(o, {
    className: `${n}-icon`
  });
}, Qh = (t) => {
  const {
    isClosable: e,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ b.createElement(xc, null) : r;
  return e ? /* @__PURE__ */ b.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, wi = /* @__PURE__ */ b.forwardRef((t, e) => {
  const {
    description: n,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: l,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: f,
    afterClose: d,
    showIcon: v,
    closable: g,
    closeText: m,
    closeIcon: p,
    action: y,
    id: E
  } = t, A = Cs(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [O, w] = b.useState(!1);
  process.env.NODE_ENV !== "production" && Yt("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const R = b.useRef(null);
  b.useImperativeHandle(e, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: T,
    direction: k,
    closable: j,
    closeIcon: z,
    className: W,
    style: H
  } = $a("alert"), x = T("alert", r), [N, M, P] = $h(x), L = (ie) => {
    var me;
    w(!0), (me = t.onClose) === null || me === void 0 || me.call(t, ie);
  }, U = b.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), G = b.useMemo(() => typeof g == "object" && g.closeIcon || m ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!j, [m, p, g, j]), J = i && v === void 0 ? !0 : v, te = Te(x, `${x}-${U}`, {
    [`${x}-with-description`]: !!n,
    [`${x}-no-icon`]: !J,
    [`${x}-banner`]: !!i,
    [`${x}-rtl`]: k === "rtl"
  }, W, s, a, P, M), ee = qh(A, {
    aria: !0,
    data: !0
  }), $ = b.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : m || (p !== void 0 ? p : typeof j == "object" && j.closeIcon ? j.closeIcon : z), [p, g, m, z]), ae = b.useMemo(() => {
    const ie = g ?? j;
    if (typeof ie == "object") {
      const {
        closeIcon: me
      } = ie;
      return Cs(ie, ["closeIcon"]);
    }
    return {};
  }, [g, j]);
  return N(/* @__PURE__ */ b.createElement(mc, {
    visible: !O,
    motionName: `${x}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ie) => ({
      maxHeight: ie.offsetHeight
    }),
    onLeaveEnd: d
  }, (ie, me) => {
    let {
      className: ce,
      style: Re
    } = ie;
    return /* @__PURE__ */ b.createElement("div", Object.assign({
      id: E,
      ref: Ou(R, me),
      "data-show": !O,
      className: Te(te, ce),
      style: Object.assign(Object.assign(Object.assign({}, H), l), Re),
      onMouseEnter: c,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, ee), J ? /* @__PURE__ */ b.createElement(Jh, {
      description: n,
      icon: t.icon,
      prefixCls: x,
      type: U
    }) : null, /* @__PURE__ */ b.createElement("div", {
      className: `${x}-content`
    }, o ? /* @__PURE__ */ b.createElement("div", {
      className: `${x}-message`
    }, o) : null, n ? /* @__PURE__ */ b.createElement("div", {
      className: `${x}-description`
    }, n) : null), y ? /* @__PURE__ */ b.createElement("div", {
      className: `${x}-action`
    }, y) : null, /* @__PURE__ */ b.createElement(Qh, {
      isClosable: G,
      prefixCls: x,
      closeIcon: $,
      handleClose: L,
      ariaProps: ae
    }));
  }));
});
process.env.NODE_ENV !== "production" && (wi.displayName = "Alert");
function ep(t, e, n) {
  return e = Vt(e), la(t, li() ? Reflect.construct(e, n || [], Vt(t).constructor) : e.apply(t, n));
}
let tp = /* @__PURE__ */ function(t) {
  function e() {
    var n;
    return Ye(this, e), n = ep(this, e, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return Sn(e, t), Ke(e, [{
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
        info: l
      } = this.state, c = (l == null ? void 0 : l.componentStack) || null, u = typeof r > "u" ? (a || "").toString() : r, f = typeof o > "u" ? c : o;
      return a ? /* @__PURE__ */ b.createElement(wi, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ b.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, f)
      }) : s;
    }
  }]);
}(b.Component);
const Rc = wi;
Rc.ErrorBoundary = tp;
function np(t, e) {
  var n = Object.assign({}, t);
  return Array.isArray(e) && e.forEach(function(r) {
    delete n[r];
  }), n;
}
function rp(t, e, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, l = r.debounceMode, c = l === void 0 ? void 0 : l, u, f = !1, d = 0;
  function v() {
    u && clearTimeout(u);
  }
  function g(p) {
    var y = p || {}, E = y.upcomingOnly, A = E === void 0 ? !1 : E;
    v(), f = !A;
  }
  function m() {
    for (var p = arguments.length, y = new Array(p), E = 0; E < p; E++)
      y[E] = arguments[E];
    var A = this, O = Date.now() - d;
    if (f)
      return;
    function w() {
      d = Date.now(), e.apply(A, y);
    }
    function R() {
      u = void 0;
    }
    !a && c && !u && w(), v(), c === void 0 && O > t ? a ? (d = Date.now(), i || (u = setTimeout(c ? R : w, t))) : w() : i !== !0 && (u = setTimeout(c ? R : w, c === void 0 ? t - O : t));
  }
  return m.cancel = g, m;
}
function op(t, e, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return rp(t, e, {
    debounceMode: i !== !1
  });
}
function xs(t) {
  return ["small", "middle", "large"].includes(t);
}
const Pc = ["wrap", "nowrap", "wrap-reverse"], kc = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], _c = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], ip = (t, e) => {
  const n = e.wrap === !0 ? "wrap" : e.wrap;
  return {
    [`${t}-wrap-${n}`]: n && Pc.includes(n)
  };
}, sp = (t, e) => {
  const n = {};
  return _c.forEach((r) => {
    n[`${t}-align-${r}`] = e.align === r;
  }), n[`${t}-align-stretch`] = !e.align && !!e.vertical, n;
}, ap = (t, e) => {
  const n = {};
  return kc.forEach((r) => {
    n[`${t}-justify-${r}`] = e.justify === r;
  }), n;
};
function cp(t, e) {
  return Te(Object.assign(Object.assign(Object.assign({}, ip(t, e)), sp(t, e)), ap(t, e)));
}
const lp = (t) => {
  const {
    componentCls: e
  } = t;
  return {
    [e]: {
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
}, up = (t) => {
  const {
    componentCls: e
  } = t;
  return {
    [e]: {
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
}, fp = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return Pc.forEach((r) => {
    n[`${e}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, dp = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return _c.forEach((r) => {
    n[`${e}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, hp = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return kc.forEach((r) => {
    n[`${e}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, pp = () => ({}), mp = Ei("Flex", (t) => {
  const {
    paddingXS: e,
    padding: n,
    paddingLG: r
  } = t, o = Cr(t, {
    flexGapSM: e,
    flexGap: n,
    flexGapLG: r
  });
  return [lp(o), up(o), fp(o), dp(o), hp(o)];
}, pp, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gp = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const Nc = /* @__PURE__ */ Oe.forwardRef((t, e) => {
  const {
    prefixCls: n,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: l,
    vertical: c = !1,
    component: u = "div"
  } = t, f = gp(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: d,
    direction: v,
    getPrefixCls: g
  } = Oe.useContext(vt), m = g("flex", n), [p, y, E] = mp(m), A = c ?? (d == null ? void 0 : d.vertical), O = Te(o, r, d == null ? void 0 : d.className, m, y, E, cp(m, t), {
    [`${m}-rtl`]: v === "rtl",
    [`${m}-gap-${a}`]: xs(a),
    [`${m}-vertical`]: A
  }), w = Object.assign(Object.assign({}, d == null ? void 0 : d.style), i);
  return s && (w.flex = s), a && !xs(a) && (w.gap = a), p(/* @__PURE__ */ Oe.createElement(u, Object.assign({
    ref: e,
    className: O,
    style: w
  }, np(f, ["justify", "wrap", "align"])), l));
});
process.env.NODE_ENV !== "production" && (Nc.displayName = "Flex");
const fr = 100, Lc = fr / 5, jc = fr / 2 - Lc / 2, no = jc * 2 * Math.PI, As = 50, Ts = (t) => {
  const {
    dotClassName: e,
    style: n,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ b.createElement("circle", {
    className: Te(`${e}-circle`, {
      [`${e}-circle-bg`]: r
    }),
    r: jc,
    cx: As,
    cy: As,
    strokeWidth: Lc,
    style: n
  });
}, vp = (t) => {
  let {
    percent: e,
    prefixCls: n
  } = t;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = b.useState(!1);
  wa(() => {
    e !== 0 && a(!0);
  }, [e !== 0]);
  const l = Math.max(Math.min(e, 100), 0);
  if (!s)
    return null;
  const c = {
    strokeDashoffset: `${no / 4}`,
    strokeDasharray: `${no * l / 100} ${no * (100 - l) / 100}`
  };
  return /* @__PURE__ */ b.createElement("span", {
    className: Te(o, `${r}-progress`, l <= 0 && i)
  }, /* @__PURE__ */ b.createElement("svg", {
    viewBox: `0 0 ${fr} ${fr}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": l
  }, /* @__PURE__ */ b.createElement(Ts, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ b.createElement(Ts, {
    dotClassName: r,
    style: c
  })));
};
function yp(t) {
  const {
    prefixCls: e,
    percent: n = 0
  } = t, r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("span", {
    className: Te(o, n > 0 && i)
  }, /* @__PURE__ */ b.createElement("span", {
    className: Te(r, `${e}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ b.createElement("i", {
    className: `${e}-dot-item`,
    key: s
  })))), /* @__PURE__ */ b.createElement(vp, {
    prefixCls: e,
    percent: n
  }));
}
function bp(t) {
  const {
    prefixCls: e,
    indicator: n,
    percent: r
  } = t, o = `${e}-dot`;
  return n && /* @__PURE__ */ b.isValidElement(n) ? Wh(n, {
    className: Te(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ b.createElement(yp, {
    prefixCls: e,
    percent: r
  });
}
const Ep = new Ba("antSpinMove", {
  to: {
    opacity: 1
  }
}), Sp = new Ba("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), wp = (t) => {
  const {
    componentCls: e,
    calc: n
  } = t;
  return {
    [e]: Object.assign(Object.assign({}, rc(t)), {
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
      [`${e}-text`]: {
        fontSize: t.fontSize,
        paddingTop: n(n(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()
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
        [e]: {
          [`${e}-dot-holder`]: {
            color: t.colorWhite
          },
          [`${e}-text`]: {
            color: t.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${e}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: t.contentHeight,
          [`${e}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: n(t.dotSize).mul(-1).div(2).equal()
          },
          [`${e}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${t.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${e}-show-text ${e}-dot`]: {
            marginTop: n(t.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${e}-dot`]: {
              margin: n(t.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${e}-text`]: {
              paddingTop: n(n(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()
            },
            [`&${e}-show-text ${e}-dot`]: {
              marginTop: n(t.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${e}-dot`]: {
              margin: n(t.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${e}-text`]: {
              paddingTop: n(n(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()
            },
            [`&${e}-show-text ${e}-dot`]: {
              marginTop: n(t.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${e}-container`]: {
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
        [`${e}-blur`]: {
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
      [`${e}-dot-holder`]: {
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
      [`${e}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${e}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: t.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: n(t.dotSize).sub(n(t.marginXXS).div(2)).div(2).equal(),
          height: n(t.dotSize).sub(n(t.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: Ep,
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
          animationName: Sp,
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
      [`&-sm ${e}-dot`]: {
        "&, &-holder": {
          fontSize: t.dotSizeSM
        }
      },
      [`&-sm ${e}-dot-holder`]: {
        i: {
          width: n(n(t.dotSizeSM).sub(n(t.marginXXS).div(2))).div(2).equal(),
          height: n(n(t.dotSizeSM).sub(n(t.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${e}-dot`]: {
        "&, &-holder": {
          fontSize: t.dotSizeLG
        }
      },
      [`&-lg ${e}-dot-holder`]: {
        i: {
          width: n(n(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),
          height: n(n(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()
        }
      },
      [`&${e}-show-text ${e}-text`]: {
        display: "block"
      }
    })
  };
}, Cp = (t) => {
  const {
    controlHeightLG: e,
    controlHeight: n
  } = t;
  return {
    contentHeight: 400,
    dotSize: e / 2,
    dotSizeSM: e * 0.35,
    dotSizeLG: n
  };
}, xp = Ei("Spin", (t) => {
  const e = Cr(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [wp(e)];
}, Cp), Ap = 200, Os = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tp(t, e) {
  const [n, r] = b.useState(0), o = b.useRef(null), i = e === "auto";
  return b.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let l = 0; l < Os.length; l += 1) {
        const [c, u] = Os[l];
        if (s <= c)
          return s + a * u;
      }
      return s;
    });
  }, Ap)), () => {
    clearInterval(o.current);
  }), [i, t]), i ? n : e;
}
var Op = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
let Mc;
function Rp(t, e) {
  return !!t && !!e && !Number.isNaN(Number(e));
}
const hn = (t) => {
  var e;
  const {
    prefixCls: n,
    spinning: r = !0,
    delay: o = 0,
    className: i,
    rootClassName: s,
    size: a = "default",
    tip: l,
    wrapperClassName: c,
    style: u,
    children: f,
    fullscreen: d = !1,
    indicator: v,
    percent: g
  } = t, m = Op(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: y,
    className: E,
    style: A,
    indicator: O
  } = $a("spin"), w = p("spin", n), [R, T, k] = xp(w), [j, z] = b.useState(() => r && !Rp(r, o)), W = Tp(j, g);
  b.useEffect(() => {
    if (r) {
      const U = op(o, () => {
        z(!0);
      });
      return U(), () => {
        var G;
        (G = U == null ? void 0 : U.cancel) === null || G === void 0 || G.call(U);
      };
    }
    z(!1);
  }, [o, r]);
  const H = b.useMemo(() => typeof f < "u" && !d, [f, d]);
  if (process.env.NODE_ENV !== "production") {
    const U = Yt("Spin");
    process.env.NODE_ENV !== "production" && U(!l || H || d, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const x = Te(w, E, {
    [`${w}-sm`]: a === "small",
    [`${w}-lg`]: a === "large",
    [`${w}-spinning`]: j,
    [`${w}-show-text`]: !!l,
    [`${w}-rtl`]: y === "rtl"
  }, i, !d && s, T, k), N = Te(`${w}-container`, {
    [`${w}-blur`]: j
  }), M = (e = v ?? O) !== null && e !== void 0 ? e : Mc, P = Object.assign(Object.assign({}, A), u), L = /* @__PURE__ */ b.createElement("div", Object.assign({}, m, {
    style: P,
    className: x,
    "aria-live": "polite",
    "aria-busy": j
  }), /* @__PURE__ */ b.createElement(bp, {
    prefixCls: w,
    indicator: M,
    percent: W
  }), l && (H || d) ? /* @__PURE__ */ b.createElement("div", {
    className: `${w}-text`
  }, l) : null);
  return R(H ? /* @__PURE__ */ b.createElement("div", Object.assign({}, m, {
    className: Te(`${w}-nested-loading`, c, T, k)
  }), j && /* @__PURE__ */ b.createElement("div", {
    key: "loading"
  }, L), /* @__PURE__ */ b.createElement("div", {
    className: N,
    key: "container"
  }, f)) : d ? /* @__PURE__ */ b.createElement("div", {
    className: Te(`${w}-fullscreen`, {
      [`${w}-fullscreen-show`]: j
    }, s, T, k)
  }, L) : L);
};
hn.setDefaultIndicator = (t) => {
  Mc = t;
};
process.env.NODE_ENV !== "production" && (hn.displayName = "Spin");
function Dc(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Pp } = Object.prototype, { getPrototypeOf: Ci } = Object, { iterator: xr, toStringTag: Ic } = Symbol, Ar = /* @__PURE__ */ ((t) => (e) => {
  const n = Pp.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ge = (t) => (t = t.toLowerCase(), (e) => Ar(e) === t), Tr = (t) => (e) => typeof e === t, { isArray: $t } = Array, En = Tr("undefined");
function kp(t) {
  return t !== null && !En(t) && t.constructor !== null && !En(t.constructor) && Le(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Bc = Ge("ArrayBuffer");
function _p(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Bc(t.buffer), e;
}
const Np = Tr("string"), Le = Tr("function"), Fc = Tr("number"), Or = (t) => t !== null && typeof t == "object", Lp = (t) => t === !0 || t === !1, or = (t) => {
  if (Ar(t) !== "object")
    return !1;
  const e = Ci(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ic in t) && !(xr in t);
}, jp = Ge("Date"), Mp = Ge("File"), Dp = Ge("Blob"), Ip = Ge("FileList"), Bp = (t) => Or(t) && Le(t.pipe), Fp = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Le(t.append) && ((e = Ar(t)) === "formdata" || // detect form-data instance
  e === "object" && Le(t.toString) && t.toString() === "[object FormData]"));
}, zp = Ge("URLSearchParams"), [Vp, Hp, Up, qp] = ["ReadableStream", "Request", "Response", "Headers"].map(Ge), Wp = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cn(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), $t(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function zc(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const Tt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Vc = (t) => !En(t) && t !== Tt;
function Go() {
  const { caseless: t } = Vc(this) && this || {}, e = {}, n = (r, o) => {
    const i = t && zc(e, o) || o;
    or(e[i]) && or(r) ? e[i] = Go(e[i], r) : or(r) ? e[i] = Go({}, r) : $t(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cn(arguments[r], n);
  return e;
}
const Xp = (t, e, n, { allOwnKeys: r } = {}) => (Cn(e, (o, i) => {
  n && Le(o) ? t[i] = Dc(o, n) : t[i] = o;
}, { allOwnKeys: r }), t), Yp = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Kp = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Gp = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && Ci(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, $p = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Zp = (t) => {
  if (!t) return null;
  if ($t(t)) return t;
  let e = t.length;
  if (!Fc(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Jp = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ci(Uint8Array)), Qp = (t, e) => {
  const r = (t && t[xr]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, em = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, tm = Ge("HTMLFormElement"), nm = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Rs = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), rm = Ge("RegExp"), Hc = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Cn(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, om = (t) => {
  Hc(t, (e, n) => {
    if (Le(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Le(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, im = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return $t(t) ? r(t) : r(String(t).split(e)), n;
}, sm = () => {
}, am = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function cm(t) {
  return !!(t && Le(t.append) && t[Ic] === "FormData" && t[xr]);
}
const lm = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (Or(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = $t(r) ? [] : {};
        return Cn(r, (s, a) => {
          const l = n(s, o + 1);
          !En(l) && (i[a] = l);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, um = Ge("AsyncFunction"), fm = (t) => t && (Or(t) || Le(t)) && Le(t.then) && Le(t.catch), Uc = ((t, e) => t ? setImmediate : e ? ((n, r) => (Tt.addEventListener("message", ({ source: o, data: i }) => {
  o === Tt && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Tt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Le(Tt.postMessage)
), dm = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tt) : typeof process < "u" && process.nextTick || Uc, hm = (t) => t != null && Le(t[xr]), S = {
  isArray: $t,
  isArrayBuffer: Bc,
  isBuffer: kp,
  isFormData: Fp,
  isArrayBufferView: _p,
  isString: Np,
  isNumber: Fc,
  isBoolean: Lp,
  isObject: Or,
  isPlainObject: or,
  isReadableStream: Vp,
  isRequest: Hp,
  isResponse: Up,
  isHeaders: qp,
  isUndefined: En,
  isDate: jp,
  isFile: Mp,
  isBlob: Dp,
  isRegExp: rm,
  isFunction: Le,
  isStream: Bp,
  isURLSearchParams: zp,
  isTypedArray: Jp,
  isFileList: Ip,
  forEach: Cn,
  merge: Go,
  extend: Xp,
  trim: Wp,
  stripBOM: Yp,
  inherits: Kp,
  toFlatObject: Gp,
  kindOf: Ar,
  kindOfTest: Ge,
  endsWith: $p,
  toArray: Zp,
  forEachEntry: Qp,
  matchAll: em,
  isHTMLForm: tm,
  hasOwnProperty: Rs,
  hasOwnProp: Rs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hc,
  freezeMethods: om,
  toObjectSet: im,
  toCamelCase: nm,
  noop: sm,
  toFiniteNumber: am,
  findKey: zc,
  global: Tt,
  isContextDefined: Vc,
  isSpecCompliantForm: cm,
  toJSONObject: lm,
  isAsyncFn: um,
  isThenable: fm,
  setImmediate: Uc,
  asap: dm,
  isIterable: hm
};
function q(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
S.inherits(q, Error, {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const qc = q.prototype, Wc = {};
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
  Wc[t] = { value: t };
});
Object.defineProperties(q, Wc);
Object.defineProperty(qc, "isAxiosError", { value: !0 });
q.from = (t, e, n, r, o, i) => {
  const s = Object.create(qc);
  return S.toFlatObject(t, s, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), q.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const pm = null;
function $o(t) {
  return S.isPlainObject(t) || S.isArray(t);
}
function Xc(t) {
  return S.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ps(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Xc(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function mm(t) {
  return S.isArray(t) && !t.some($o);
}
const gm = S.toFlatObject(S, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Rr(t, e, n) {
  if (!S.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !S.isUndefined(p[m]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(e);
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (S.isDate(g))
      return g.toISOString();
    if (!l && S.isBlob(g))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(g) || S.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, p) {
    let y = g;
    if (g && !p && typeof g == "object") {
      if (S.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (S.isArray(g) && mm(g) || (S.isFileList(g) || S.endsWith(m, "[]")) && (y = S.toArray(g)))
        return m = Xc(m), y.forEach(function(A, O) {
          !(S.isUndefined(A) || A === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ps([m], O, i) : s === null ? m : m + "[]",
            c(A)
          );
        }), !1;
    }
    return $o(g) ? !0 : (e.append(Ps(p, m, i), c(g)), !1);
  }
  const f = [], d = Object.assign(gm, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: $o
  });
  function v(g, m) {
    if (!S.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), S.forEach(g, function(y, E) {
        (!(S.isUndefined(y) || y === null) && o.call(
          e,
          y,
          S.isString(E) ? E.trim() : E,
          m,
          d
        )) === !0 && v(y, m ? m.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!S.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function ks(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function xi(t, e) {
  this._pairs = [], t && Rr(t, this, e);
}
const Yc = xi.prototype;
Yc.append = function(e, n) {
  this._pairs.push([e, n]);
};
Yc.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, ks);
  } : ks;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function vm(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Kc(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || vm;
  S.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(e, n) : i = S.isURLSearchParams(e) ? e.toString() : new xi(e, n).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class _s {
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
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    S.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Gc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ym = typeof URLSearchParams < "u" ? URLSearchParams : xi, bm = typeof FormData < "u" ? FormData : null, Em = typeof Blob < "u" ? Blob : null, Sm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ym,
    FormData: bm,
    Blob: Em
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ai = typeof window < "u" && typeof document < "u", Zo = typeof navigator == "object" && navigator || void 0, wm = Ai && (!Zo || ["ReactNative", "NativeScript", "NS"].indexOf(Zo.product) < 0), Cm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xm = Ai && window.location.href || "http://localhost", Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ai,
  hasStandardBrowserEnv: wm,
  hasStandardBrowserWebWorkerEnv: Cm,
  navigator: Zo,
  origin: xm
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...Am,
  ...Sm
};
function Tm(t, e) {
  return Rr(t, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Ae.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Om(t) {
  return S.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Rm(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function $c(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), l = i >= n.length;
    return s = !s && S.isArray(o) ? o.length : s, l ? (S.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !S.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && S.isArray(o[s]) && (o[s] = Rm(o[s])), !a);
  }
  if (S.isFormData(t) && S.isFunction(t.entries)) {
    const n = {};
    return S.forEachEntry(t, (r, o) => {
      e(Om(r), o, n, 0);
    }), n;
  }
  return null;
}
function Pm(t, e, n) {
  if (S.isString(t))
    try {
      return (e || JSON.parse)(t), S.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const xn = {
  transitional: Gc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = S.isObject(e);
    if (i && S.isHTMLForm(e) && (e = new FormData(e)), S.isFormData(e))
      return o ? JSON.stringify($c(e)) : e;
    if (S.isArrayBuffer(e) || S.isBuffer(e) || S.isStream(e) || S.isFile(e) || S.isBlob(e) || S.isReadableStream(e))
      return e;
    if (S.isArrayBufferView(e))
      return e.buffer;
    if (S.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tm(e, this.formSerializer).toString();
      if ((a = S.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Rr(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Pm(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || xn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (S.isResponse(e) || S.isReadableStream(e))
      return e;
    if (e && S.isString(e) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? q.from(a, q.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
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
    FormData: Ae.classes.FormData,
    Blob: Ae.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  xn.headers[t] = {};
});
const km = S.toObjectSet([
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
]), _m = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && km[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Ns = Symbol("internals");
function ln(t) {
  return t && String(t).trim().toLowerCase();
}
function ir(t) {
  return t === !1 || t == null ? t : S.isArray(t) ? t.map(ir) : String(t);
}
function Nm(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Lm = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ro(t, e, n, r, o) {
  if (S.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!S.isString(e)) {
    if (S.isString(r))
      return e.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(e);
  }
}
function jm(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Mm(t, e) {
  const n = S.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, e, o, i, s);
      },
      configurable: !0
    });
  });
}
let je = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(a, l, c) {
      const u = ln(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = S.findKey(o, u);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || l] = ir(a));
    }
    const s = (a, l) => S.forEach(a, (c, u) => i(c, u, l));
    if (S.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (S.isString(e) && (e = e.trim()) && !Lm(e))
      s(_m(e), n);
    else if (S.isObject(e) && S.isIterable(e)) {
      let a = {}, l, c;
      for (const u of e) {
        if (!S.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (l = a[c]) ? S.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      s(a, n);
    } else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = ln(e), e) {
      const r = S.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Nm(o);
        if (S.isFunction(n))
          return n.call(this, o, r);
        if (S.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ln(e), e) {
      const r = S.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ro(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ln(s), s) {
        const a = S.findKey(r, s);
        a && (!n || ro(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return S.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || ro(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return S.forEach(this, (o, i) => {
      const s = S.findKey(r, i);
      if (s) {
        n[s] = ir(o), delete n[i];
        return;
      }
      const a = e ? jm(i) : String(i).trim();
      a !== i && delete n[i], n[a] = ir(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && S.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Ns] = this[Ns] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ln(s);
      r[a] || (Mm(o, s), r[a] = !0);
    }
    return S.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(je.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(je);
function oo(t, e) {
  const n = this || xn, r = e || n, o = je.from(r.headers);
  let i = r.data;
  return S.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Zc(t) {
  return !!(t && t.__CANCEL__);
}
function Zt(t, e, n) {
  q.call(this, t ?? "canceled", q.ERR_CANCELED, e, n), this.name = "CanceledError";
}
S.inherits(Zt, q, {
  __CANCEL__: !0
});
function Jc(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Dm(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Im(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = r[i];
    s || (s = c), n[o] = l, r[o] = c;
    let f = i, d = 0;
    for (; f !== o; )
      d += n[f++], f = f % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), c - s < e)
      return;
    const v = u && c - u;
    return v ? Math.round(d * 1e3 / v) : void 0;
  };
}
function Bm(t, e) {
  let n = 0, r = 1e3 / e, o, i;
  const s = (c, u = Date.now()) => {
    n = u, o = null, i && (clearTimeout(i), i = null), t.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= r ? s(c, u) : (o = c, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const dr = (t, e, n = 3) => {
  let r = 0;
  const o = Im(50, 250);
  return Bm((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, l = s - r, c = o(l), u = s <= a;
    r = s;
    const f = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - s) / c : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(f);
  }, n);
}, Ls = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, js = (t) => (...e) => S.asap(() => t(...e)), Fm = Ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, Ae.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(Ae.origin),
  Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent)
) : () => !0, zm = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, i) {
      const s = [t + "=" + encodeURIComponent(e)];
      S.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), S.isString(r) && s.push("path=" + r), S.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
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
function Vm(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Hm(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Qc(t, e, n) {
  let r = !Vm(e);
  return t && (r || n == !1) ? Hm(t, e) : e;
}
const Ms = (t) => t instanceof je ? { ...t } : t;
function Nt(t, e) {
  e = e || {};
  const n = {};
  function r(c, u, f, d) {
    return S.isPlainObject(c) && S.isPlainObject(u) ? S.merge.call({ caseless: d }, c, u) : S.isPlainObject(u) ? S.merge({}, u) : S.isArray(u) ? u.slice() : u;
  }
  function o(c, u, f, d) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c))
        return r(void 0, c, f, d);
    } else return r(c, u, f, d);
  }
  function i(c, u) {
    if (!S.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, f) {
    if (f in e)
      return r(c, u);
    if (f in t)
      return r(void 0, c);
  }
  const l = {
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
    headers: (c, u, f) => o(Ms(c), Ms(u), f, !0)
  };
  return S.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const f = l[u] || o, d = f(t[u], e[u], u);
    S.isUndefined(d) && f !== a || (n[u] = d);
  }), n;
}
const el = (t) => {
  const e = Nt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  e.headers = s = je.from(s), e.url = Kc(Qc(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (S.isFormData(n)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (r && S.isFunction(r) && (r = r(e)), r || r !== !1 && Fm(e.url))) {
    const c = o && i && zm.read(i);
    c && s.set(o, c);
  }
  return e;
}, Um = typeof XMLHttpRequest < "u", qm = Um && function(t) {
  return new Promise(function(n, r) {
    const o = el(t);
    let i = o.data;
    const s = je.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = o, u, f, d, v, g;
    function m() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function y() {
      if (!p)
        return;
      const A = je.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), w = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: A,
        config: t,
        request: p
      };
      Jc(function(T) {
        n(T), m();
      }, function(T) {
        r(T), m();
      }, w), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new q("Request aborted", q.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new q("Network Error", q.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const w = o.transitional || Gc;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), r(new q(
        O,
        w.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        t,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && S.forEach(s.toJSON(), function(O, w) {
      p.setRequestHeader(w, O);
    }), S.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), c && ([d, g] = dr(c, !0), p.addEventListener("progress", d)), l && p.upload && ([f, v] = dr(l), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (A) => {
      p && (r(!A || A.type ? new Zt(null, t, p) : A), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = Dm(o.url);
    if (E && Ae.protocols.indexOf(E) === -1) {
      r(new q("Unsupported protocol " + E + ":", q.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Wm = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), o;
    const i = function(c) {
      if (!o) {
        o = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof q ? u : new Zt(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, i(new q(`timeout ${e} of ms exceeded`, q.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", i));
    const { signal: l } = r;
    return l.unsubscribe = () => S.asap(a), l;
  }
}, Xm = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, Ym = async function* (t, e) {
  for await (const n of Km(t))
    yield* Xm(n, e);
}, Km = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, Ds = (t, e, n, r) => {
  const o = Ym(t, e);
  let i = 0, s, a = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await o.next();
        if (c) {
          a(), l.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let d = i += f;
          n(d);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", tl = Pr && typeof ReadableStream == "function", Gm = Pr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), nl = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, $m = tl && nl(() => {
  let t = !1;
  const e = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Is = 64 * 1024, Jo = tl && nl(() => S.isReadableStream(new Response("").body)), hr = {
  stream: Jo && ((t) => t.body)
};
Pr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !hr[e] && (hr[e] = S.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new q(`Response type '${e}' is not supported`, q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Zm = async (t) => {
  if (t == null)
    return 0;
  if (S.isBlob(t))
    return t.size;
  if (S.isSpecCompliantForm(t))
    return (await new Request(Ae.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (S.isArrayBufferView(t) || S.isArrayBuffer(t))
    return t.byteLength;
  if (S.isURLSearchParams(t) && (t = t + ""), S.isString(t))
    return (await Gm(t)).byteLength;
}, Jm = async (t, e) => {
  const n = S.toFiniteNumber(t.getContentLength());
  return n ?? Zm(e);
}, Qm = Pr && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: d
  } = el(t);
  c = c ? (c + "").toLowerCase() : "text";
  let v = Wm([o, i && i.toAbortSignal()], s), g;
  const m = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (l && $m && n !== "get" && n !== "head" && (p = await Jm(u, r)) !== 0) {
      let w = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (S.isFormData(r) && (R = w.headers.get("content-type")) && u.setContentType(R), w.body) {
        const [T, k] = Ls(
          p,
          dr(js(l))
        );
        r = Ds(w.body, Is, T, k);
      }
    }
    S.isString(f) || (f = f ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    g = new Request(e, {
      ...d,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? f : void 0
    });
    let E = await fetch(g);
    const A = Jo && (c === "stream" || c === "response");
    if (Jo && (a || A && m)) {
      const w = {};
      ["status", "statusText", "headers"].forEach((j) => {
        w[j] = E[j];
      });
      const R = S.toFiniteNumber(E.headers.get("content-length")), [T, k] = a && Ls(
        R,
        dr(js(a), !0)
      ) || [];
      E = new Response(
        Ds(E.body, Is, T, () => {
          k && k(), m && m();
        }),
        w
      );
    }
    c = c || "text";
    let O = await hr[S.findKey(hr, c) || "text"](E, t);
    return !A && m && m(), await new Promise((w, R) => {
      Jc(w, R, {
        data: O,
        headers: je.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: t,
        request: g
      });
    });
  } catch (y) {
    throw m && m(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, t, g),
      {
        cause: y.cause || y
      }
    ) : q.from(y, y && y.code, t, g);
  }
}), Qo = {
  http: pm,
  xhr: qm,
  fetch: Qm
};
S.forEach(Qo, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Bs = (t) => `- ${t}`, eg = (t) => S.isFunction(t) || t === null || t === !1, rl = {
  getAdapter: (t) => {
    t = S.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let s;
      if (r = n, !eg(n) && (r = Qo[(s = String(n)).toLowerCase()], r === void 0))
        throw new q(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = e ? i.length > 1 ? `since :
` + i.map(Bs).join(`
`) : " " + Bs(i[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Qo
};
function io(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Zt(null, t);
}
function Fs(t) {
  return io(t), t.headers = je.from(t.headers), t.data = oo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), rl.getAdapter(t.adapter || xn.adapter)(t).then(function(r) {
    return io(t), r.data = oo.call(
      t,
      t.transformResponse,
      r
    ), r.headers = je.from(r.headers), r;
  }, function(r) {
    return Zc(r) || (io(t), r && r.response && (r.response.data = oo.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = je.from(r.response.headers))), Promise.reject(r);
  });
}
const ol = "1.9.0", kr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  kr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const zs = {};
kr.transitional = function(e, n, r) {
  function o(i, s) {
    return "[Axios v" + ol + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (e === !1)
      throw new q(
        o(s, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !zs[s] && (zs[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, s, a) : !0;
  };
};
kr.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function tg(t, e, n) {
  if (typeof t != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = e[i];
    if (s) {
      const a = t[i], l = a === void 0 || s(a, i, t);
      if (l !== !0)
        throw new q("option " + i + " must be " + l, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + i, q.ERR_BAD_OPTION);
  }
}
const sr = {
  assertOptions: tg,
  validators: kr
}, Qe = sr.validators;
let kt = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new _s(),
      response: new _s()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
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
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Nt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && sr.assertOptions(r, {
      silentJSONParsing: Qe.transitional(Qe.boolean),
      forcedJSONParsing: Qe.transitional(Qe.boolean),
      clarifyTimeoutError: Qe.transitional(Qe.boolean)
    }, !1), o != null && (S.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : sr.assertOptions(o, {
      encode: Qe.function,
      serialize: Qe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), sr.assertOptions(n, {
      baseUrl: Qe.spelling("baseURL"),
      withXsrfToken: Qe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && S.merge(
      i.common,
      i[n.method]
    );
    i && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = je.concat(s, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, d;
    if (!l) {
      const g = [Fs.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, c), d = g.length, u = Promise.resolve(n); f < d; )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    d = a.length;
    let v = n;
    for (f = 0; f < d; ) {
      const g = a[f++], m = a[f++];
      try {
        v = g(v);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Fs.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(e) {
    e = Nt(this.defaults, e);
    const n = Qc(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Kc(n, e.params, e.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(e) {
  kt.prototype[e] = function(n, r) {
    return this.request(Nt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(Nt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  kt.prototype[e] = n(), kt.prototype[e + "Form"] = n(!0);
});
let ng = class il {
  constructor(e) {
    if (typeof e != "function")
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
    }, e(function(i, s, a) {
      r.reason || (r.reason = new Zt(i, s, a), n(r.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new il(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function rg(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function og(t) {
  return S.isObject(t) && t.isAxiosError === !0;
}
const ei = {
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
Object.entries(ei).forEach(([t, e]) => {
  ei[e] = t;
});
function sl(t) {
  const e = new kt(t), n = Dc(kt.prototype.request, e);
  return S.extend(n, kt.prototype, e, { allOwnKeys: !0 }), S.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return sl(Nt(t, o));
  }, n;
}
const pe = sl(xn);
pe.Axios = kt;
pe.CanceledError = Zt;
pe.CancelToken = ng;
pe.isCancel = Zc;
pe.VERSION = ol;
pe.toFormData = Rr;
pe.AxiosError = q;
pe.Cancel = pe.CanceledError;
pe.all = function(e) {
  return Promise.all(e);
};
pe.spread = rg;
pe.isAxiosError = og;
pe.mergeConfig = Nt;
pe.AxiosHeaders = je;
pe.formToJSON = (t) => $c(S.isHTMLForm(t) ? new FormData(t) : t);
pe.getAdapter = rl.getAdapter;
pe.HttpStatusCode = ei;
pe.default = pe;
const {
  Axios: Cg,
  AxiosError: xg,
  CanceledError: Ag,
  isCancel: Tg,
  CancelToken: Og,
  VERSION: Rg,
  all: Pg,
  Cancel: kg,
  isAxiosError: _g,
  spread: Ng,
  toFormData: Lg,
  AxiosHeaders: jg,
  HttpStatusCode: Mg,
  formToJSON: Dg,
  getAdapter: Ig,
  mergeConfig: Bg
} = pe;
pe.defaults.withCredentials = !0;
const ig = async (t) => {
  var e, n, r, o;
  try {
    return (await pe(t)).data;
  } catch (i) {
    throw ((n = (e = i.response) == null ? void 0 : e.data) == null ? void 0 : n.message) || ((o = (r = i.response) == null ? void 0 : r.data) == null ? void 0 : o.error) || i.message;
  }
}, tt = {
  mousemove: "ACTION_MOVE",
  mouseup: "ACTION_UP",
  mousedown: "ACTION_DOWN",
  touchmove: "ACTION_MOVE",
  touchend: "ACTION_UP",
  touchstart: "ACTION_DOWN"
}, sg = {
  keyup: "ACTION_UP",
  keydown: "ACTION_DOWN"
}, ag = "moveEvent", cg = "wheelEvent", lg = "keyBoardEvent", al = "assistiveMenuHide", cl = "shortcutEvent", ug = "fullscreenEvent", fg = ({ isMobile: t, assistive: e, onImgEvent: n, canvasContent: r, imageRef: o }) => {
  const [i, s] = Ie(!1), a = (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current;
    let d = tt[u.type];
    if (e.isDown == !0 || e.showMenu == !0) {
      d == tt.mouseup && n(al, {});
      return;
    }
    if (d == tt.mousedown && s(!0), d != tt.mousedown && i == !1)
      return;
    d == tt.mouseup && s(!1);
    let v, g;
    const m = f.getBoundingClientRect();
    if (u.type.includes("touch")) {
      const { touches: p, changedTouches: y } = u, E = p[0] ?? y[0];
      v = E.pageX - m.left, g = E.pageY - m.top;
    } else u.type.includes("mouse") && (v = u.clientX - m.left, g = u.clientY - m.top);
    n(ag, {
      action: "touchEvent",
      keyAction: d,
      x: v,
      y: g,
      width: m.width,
      height: m.height
    }), f.focus();
  }, l = (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current, d = Math.sign(u.deltaY), v = f.getBoundingClientRect();
    n(cg, {
      action: "wheelEvent",
      width: f.offsetWidth,
      height: f.offsetHeight,
      x: u.clientX - v.left,
      y: u.clientY - v.top,
      delta: d
    }), f.focus();
  }, c = async (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current, d = sg[u.type], v = u.key.toLowerCase();
    if (((y) => ["control", "shift", "capslock"].includes(y))(v) == !0)
      return;
    const p = await (async () => {
      const y = {
        action: "keyEvent",
        keyAction: d,
        typeKey: "KEYBOARD_TEXT",
        key: u.key,
        repeat: 0,
        meta_state: 0
      };
      return u.ctrlKey == !0 ? v == "c" ? y.typeKey = "COPY_TEXT" : v == "a" ? (y.typeKey = "KEYBOARD_CODE", y.meta_state = 4096, y.key = 29) : v == "v" && (y.typeKey = "PASTE_TEXT", y.key = await navigator.clipboard.readText()) : v == "arrowup" ? (y.typeKey = "KEYBOARD_CODE", y.key = 19) : v == "arrowdown" ? (y.typeKey = "KEYBOARD_CODE", y.key = 20) : v == "arrowleft" ? (y.typeKey = "KEYBOARD_CODE", y.key = 21) : v == "arrowright" ? (y.typeKey = "KEYBOARD_CODE", y.key = 22) : v == "backspace" ? (y.typeKey = "KEYBOARD_CODE", y.key = 67) : v == "enter" ? (y.typeKey = "KEYBOARD_CODE", y.key = 66) : v == "tab" && (y.typeKey = "KEYBOARD_CODE", y.key = 61), y.type == "KEYBOARD_TEXT" && u.shiftKey == !0 && (y.key = y.key.toUpperCase()), y;
    })();
    p && n(lg, p), f.focus();
  };
  return Ne(() => {
    const u = o.current;
    if (u) {
      const f = { passive: !1 };
      return t ? (u.addEventListener("touchstart", a, f), u.addEventListener("touchmove", a, f), u.addEventListener("touchend", a)) : (u.addEventListener("wheel", l, f), u.addEventListener("keydown", c), ["mousemove", "mousedown", "mouseup"].forEach((d) => {
        u.addEventListener(d, a);
      })), () => {
        u && (t ? ["touchstart", "touchmove", "touchend"].forEach((d) => {
          u.removeEventListener(d, a);
        }) : (["mousemove", "mousedown", "mouseup", "wheel", "keydown"].forEach((d) => {
          u.removeEventListener(d, a);
        }), u.removeEventListener("keydown", c)));
      };
    }
  }, [t, a, l, c]), /* @__PURE__ */ I.jsx("canvas", { ref: o, ...r });
}, dg = "data:image/png;base64,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", Vs = () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, hg = (t) => {
  const e = document.querySelector(`#screen_${t}`);
  e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
}, pg = () => {
  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
}, mg = Hs((t, e) => {
  const { displayId: n, isMobile: r, onSenData: o, status: i, imageRef: s } = t, [a, l] = Ie(0), [c, u] = Ie(0), [f, d] = Ie(null), [v, g] = Ie(0), m = xe(null), p = xe(null), y = xe(null), [E, A] = Ie({ cursor: "move", opacity: 0.3, zIndex: 999 }), [O, w] = Ie({ zIndex: 999, height: "", width: "13%" }), [R, T] = Ie({ zIndex: 1e3 }), k = xe(null), j = (x) => {
    if (x.preventDefault(), i.get.showMenu == !0)
      return;
    const N = tt[x.type], M = s.current, P = y.current, L = M.getBoundingClientRect(), U = P.getBoundingClientRect();
    let G, J;
    const te = L.width - U.width, ee = L.height - U.height;
    if (x.type.includes("touch")) {
      const { touches: ie, changedTouches: me } = x, ce = ie[0] ?? me[0];
      G = ce.pageX, J = ce.pageY;
    } else x.type.includes("mouse") && (G = x.clientX, J = x.clientY);
    if (N == tt.mousedown)
      i.set({ ...i.get, isDown: !0 }), l(G - U.left), u(J - U.top), A({ ...E, opacity: 1, cursor: "grab" }), g(performance.now());
    else if (N == tt.mousemove) {
      if (i.get.isDown == !1) return;
      var $ = G - a - L.left, ae = J - c - L.top;
      $ = Math.max(3, Math.min($, te) - 3), ae = Math.max(3, Math.min(ae, ee) - 3), w({ ...O, top: `${ae}px`, left: `${$}px` });
    } else if (N == tt.mouseup) {
      const ie = performance.now() - v;
      f == tt.mousedown || ie < 100 ? i.set({ ...i.get, showMenu: !0, isDown: !1 }) : i.set({ ...i.get, isDown: !1 }), A({ ...E, opacity: 0.3, cursor: "move" });
    }
    d(N), P.focus();
  }, z = async (x) => {
    x.preventDefault();
    const N = x.target.closest("div").getAttribute("data-id");
    if (N === "fullscreen")
      Vs() ? pg() : hg(n);
    else {
      const M = {
        action: "shortcutEvent",
        shortcut: N,
        data: ""
      };
      N === "paste" && (M.data = await navigator.clipboard.readText()), N === "copy" && (M.taskId = "shortcutCopy"), o(cl, M);
    }
    i.set({ ...i.get, showMenu: !1 }), p.current.focus();
  };
  function W(x) {
    const N = Vs();
    o(ug, N);
  }
  Ne(() => {
    requestAnimationFrame(() => {
      T({ ...R, opacity: i.get.showMenu ? 1 : 0 });
    });
  }, [i]), Ne(() => {
    const x = s.current;
    return x && ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((M) => {
      x.addEventListener(M, W);
    }), () => {
      x && x.removeEventListener("click", W);
    };
  }, []), Ne(() => {
    const x = y.current, N = p.current;
    if (N && N.addEventListener("click", z), x) {
      const M = { passive: !1 };
      return r ? (x.addEventListener("touchstart", j, M), x.addEventListener("touchmove", j, M), x.addEventListener("touchend", j)) : ["mousemove", "mousedown", "mouseup"].forEach((P) => {
        x.addEventListener(P, j);
      }), () => {
        N && N.removeEventListener("click", z), x && (r ? ["touchstart", "touchmove", "touchend"].forEach((P) => {
          x.removeEventListener(P, j);
        }) : ["mousemove", "mousedown", "mouseup"].forEach((P) => {
          x.removeEventListener(P, j);
        }));
      };
    }
  }, [r, j]);
  const H = () => {
    w({
      zIndex: 999,
      height: k.current == "landscape" ? "12%" : null,
      width: k.current != "landscape" ? "12%" : null,
      top: "50%",
      right: "5%"
    });
  };
  return Us(e, () => ({
    fixTouch: function(x) {
      x && (k.current = x), H();
    }
  })), /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    i.get.showMenu ? /* @__PURE__ */ I.jsxs("div", { className: "assistive_menu", id: `assistive_menu_${n}`, style: R, ref: p, children: [
      /* @__PURE__ */ I.jsxs("div", { "data-id": "fullscreen", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Screen" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "copy", children: [
        /* @__PURE__ */ I.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ I.jsx("path", { d: "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" }),
              /* @__PURE__ */ I.jsx("path", { d: "M6 12h6v2H6zm0 4h6v2H6z" })
            ]
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Copy" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "paste", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Paste" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "device_id", children: [
        /* @__PURE__ */ I.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ I.jsx("path", { d: "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z" }),
              /* @__PURE__ */ I.jsx("circle", { cx: "11.75", cy: "18", r: "1" })
            ]
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Show ID" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "audio", children: [
        /* @__PURE__ */ I.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ I.jsx("path", { d: "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" }),
              /* @__PURE__ */ I.jsx("path", { d: "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z" })
            ]
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Volume" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "sync", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Sync" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "recents", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Recents" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "home", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Home" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { "data-id": "back", children: [
        /* @__PURE__ */ I.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ I.jsx("path", { d: "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" })
          }
        ),
        /* @__PURE__ */ I.jsx("p", { children: "Back" })
      ] })
    ] }) : null,
    /* @__PURE__ */ I.jsx(
      "div",
      {
        id: `assistive_touch_class_${n}`,
        className: "screen-assistive-touch-class icon-faded assistive",
        ref: m,
        style: E,
        children: /* @__PURE__ */ I.jsx(
          "img",
          {
            style: O,
            src: dg,
            className: "screen-assistive-touch assistive",
            id: `assistive_touch_${n}`,
            alt: "Icon",
            ref: y,
            draggable: !1
          }
        )
      }
    )
  ] });
});
class gg {
  constructor(e, n, r) {
    this.canvas = e, this.maxWidth = n, this.isMobile = r, this.setIsConnect = null, this.ctx = e.getContext("2d"), this.decoder = this.buildDecoder(), this.videoMeta = null, this.iframe = null, this.isPlay = null, this.width = null, this.height = null, this.rootSize = null, this.orientation = "portrait";
  }
  setFullscreen(e) {
    if (e) {
      const n = window.innerHeight + 10, r = this.resizedWidth(null, this.rootSize.width, this.rootSize.height, n, n);
      this.width = r.width, this.height = r.height;
    } else
      this.width = this.rootSize.width, this.height = this.rootSize.height;
  }
  resizedWidth(e, n, r, o, i) {
    let s;
    return e && o > this.maxWidth && r > n && (i = this.maxWidth), i && (s = i / n * r, s > o && (i = o / r * n, s = o / n * n)), { width: Math.round(i), height: Math.round(s) };
  }
  setOrientation(e) {
    this.orientation = e, this.isMobile && screen.orientation.lock(e);
  }
  autoResize(e, n) {
    var i;
    const r = this.isMobile == !0 ? window.innerHeight - 12 : window.innerHeight - 50, o = this.resizedWidth(!0, e, n, r, r);
    this.width = o.width, this.height = o.height, this.rootSize || (i = this.setIsConnect) == null || i.call(this, !0), this.rootSize = { width: o.width, height: o.height };
  }
  setVideoMeta(e) {
    const n = e instanceof Uint8Array ? e : new Uint8Array(e);
    this.videoMeta = n;
  }
  buildDecoder() {
    const e = new VideoDecoder({
      output: async (n) => {
        const r = await createImageBitmap(n);
        (!this.width || !this.height) && this.autoResize(n.codedWidth, n.codedHeight), this.ctx.clearRect(0, 0, this.width, this.height), this.orientation == "landscape" ? (this.canvas.width = this.height, this.canvas.height = this.width, this.ctx.translate(0, this.width), this.ctx.rotate(Math.PI / 2), this.ctx.scale(-1, -1), this.ctx.drawImage(r, 0, 0, this.width, this.height)) : (this.canvas.width = this.width, this.canvas.height = this.height, this.ctx.drawImage(r, 0, 0, this.width, this.height)), r.close(), n.close();
      },
      error: (n) => console.error("Decoder error:", n)
    });
    return e.configure({
      codec: "avc1.64001E",
      // hãy sửa theo SPS profile nếu khác
      hardwareAcceleration: "prefer-hardware",
      optimizeForLatency: !0
    }), e;
  }
  isKeyFrame(e) {
    for (let n = 0; n <= e.length - 4; n++)
      if (e[n] === 0 && e[n + 1] === 0 && e[n + 2] === 0 && e[n + 3] === 1)
        return (e[n + 4] & 31) === 5;
    for (let n = 0; n <= e.length - 3; n++)
      if (e[n] === 0 && e[n + 1] === 0 && e[n + 2] === 1)
        return (e[n + 3] & 31) === 5;
    return !1;
  }
  concatUint8Arrays(e, n) {
    const r = Array.from(e).concat(Array.from(n));
    return new Uint8Array(r);
  }
  decode(e) {
    if (!this.decoder || this.decoder.state == "close" || !this.videoMeta) return;
    let n = e instanceof Uint8Array ? e : new Uint8Array(e);
    const r = this.isKeyFrame(n);
    r && (this.iframe = n), this.iframe && this.videoMeta && (this.isPlay || (n = this.concatUint8Arrays(this.videoMeta, this.iframe), this.isPlay = !0), this.decoder.decode(
      new EncodedVideoChunk({
        timestamp: performance.now() * 1e3,
        type: r ? "key" : "delta",
        data: n
      })
    ));
  }
}
const Fg = Hs((t, e) => {
  const { serve: n, displayId: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, onMessage: l } = t, c = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), u = "control", [f, d] = Ie(null), [v, g] = Ie(a), [m, p] = Ie({ showMenu: !1, isDown: !1 }), y = xe(null), E = xe(null), [A, O] = Ie(null), w = `image_${r}`, R = `screen_${r}`, T = `screen_main_${r}`, k = xe(null), j = xe(null), z = xe(null), [W, H] = Ie([]), x = xe(null);
  Ne(() => {
    g(a);
  }, [a]);
  const N = (P) => {
    H((L) => [...L, P]);
  }, M = (P) => (P.action == "connect" && (P.type_client = u, P.device_id = o.device_id, P.isMobile = c), P);
  return Us(e, () => ({
    wsSend: function(P, L) {
      E.current.emit(P, L);
    },
    showDeviceId: function(P) {
      g(P);
    }
  })), Ne(() => {
    (async () => {
      try {
        const P = {
          url: n,
          method: "post",
          timeout: 5e3,
          headers: { "Content-Type": "application/json" },
          data: {
            device_id: o.device_id,
            password: o.passwd
          }
        }, L = await ig(P);
        d(L.data);
      } catch (P) {
        N({ msg: P, type: "error" });
      }
    })();
  }, []), Ne(() => {
    if (E.current || !f) return;
    const P = Zn(f, {
      reconnection: !1
    });
    return P.on("connect", () => {
      P.emit(
        "join_room",
        M({
          action: "connect",
          passwd: o.passwd
        })
      );
    }), P.on("join_room", (L) => {
      L.status == !0 ? (E.current = P, P.emit("message", { action: "onScreenEvent" })) : N({ msg: L.msg, type: "error" });
    }), P.on("screen", (L) => {
      x.current.decode(L);
    }), P.on("video_meta", (L) => {
      L ? (x.current.setVideoMeta(L), x.current.iframe || P.emit("message", { action: "onSyncIFrame" })) : P.emit("video_meta", { action: "get_video_meta" });
    }), P.on("message", (L) => {
      (L.action == "COPY_TEXT" || L.action == "shortcutEvent") && L.text.length > 0 ? navigator.clipboard.writeText(L.text) : L.action == "orientation" && (x.current.setOrientation(L.value), z.current.fixTouch(L.value)), l == null || l(L);
    }), P.on("connect_error", (L) => {
      N({ msg: L, type: "error" });
    }), P.on("disconnect", (L) => {
      N({ msg: "connection closed code: " + L.code, type: "info" }), y.current && y.current.close();
    }), () => {
      P && P.disconnect();
    };
  }, [f]), Ne(() => {
    const P = j.current;
    x.current = new gg(P, i, c), x.current.setIsConnect = O;
  }, []), Ne(() => {
    const P = () => {
      const L = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      x.current.setFullscreen(!!L), z.current.fixTouch();
    };
    return document.addEventListener("fullscreenchange", P), () => {
      document.removeEventListener("fullscreenchange", P);
    };
  }, []), /* @__PURE__ */ I.jsxs("div", { id: T, className: "screen_main", children: [
    v && /* @__PURE__ */ I.jsx("div", { className: "show_device_class", children: /* @__PURE__ */ I.jsx("span", { className: "show_device_id", children: o.device_id }) }),
    W.length == 0 ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      !A && /* @__PURE__ */ I.jsxs(Nc, { align: "center", gap: "middle", children: [
        /* @__PURE__ */ I.jsx(hn, { size: "large" }),
        /* @__PURE__ */ I.jsx(hn, { size: "large" }),
        /* @__PURE__ */ I.jsx(hn, { size: "large" })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { ref: k, className: "screen", id: R, style: A ? {} : { height: 0, width: 0 }, children: [
        s ? /* @__PURE__ */ I.jsx(
          mg,
          {
            status: {
              get: m,
              set: p
            },
            ref: z,
            imageRef: j,
            displayId: r,
            isMobile: c,
            onSenData: (P, L) => {
              P === cl && L.shortcut === "device_id" ? g(!v) : E.current.emit("message", L);
            }
          }
        ) : null,
        /* @__PURE__ */ I.jsx(
          fg,
          {
            canvasContent: {
              style: { padding: 0 },
              id: w,
              tabIndex: "0",
              draggable: "false",
              className: "screen-img"
            },
            imageRef: j,
            isMobile: c,
            assistive: m,
            onImgEvent: (P, L) => {
              P === al ? p({ ...m, showMenu: !1 }) : E.current.emit("message", L);
            }
          }
        )
      ] })
    ] }) : W.map((P, L) => /* @__PURE__ */ I.jsx(Rc, { style: { marginTop: 5 }, message: P.msg, type: P.type, showIcon: !0, closable: !0 }, L))
  ] });
});
export {
  Fg as ControlMyRPP
};
