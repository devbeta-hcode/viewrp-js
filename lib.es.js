var Jf = Object.defineProperty;
var Qf = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => Qf(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import Ne, { useDebugValue as ma, createElement as ed, useRef as ze, useContext as Jt, isValidElement as td, version as nd, createContext as Fs, useLayoutEffect as rd, useEffect as Qe, useState as Je, forwardRef as il, useImperativeHandle as sl } from "react";
import xa from "react-dom";
var cr = ho;
(function(e, t) {
  for (var n = ho, r = e(); ; )
    try {
      var o = -parseInt(n(324)) / 1 + parseInt(n(327)) / 2 + parseInt(n(313)) / 3 + parseInt(n(332)) / 4 + -parseInt(n(314)) / 5 * (parseInt(n(325)) / 6) + -parseInt(n(310)) / 7 * (-parseInt(n(328)) / 8) + -parseInt(n(329)) / 9;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(po, 608703);
function ho(e, t) {
  var n = po();
  return ho = function(r, o) {
    r = r - 307;
    var i = n[r];
    return i;
  }, ho(e, t);
}
typeof globalThis !== cr(322) || typeof window !== cr(322) || (typeof global !== cr(322) ? global : cr(322));
function od(e) {
  var t = cr;
  return e && e[t(309)] && Object[t(331)][t(323)][t(311)](e, t(320)) ? e[t(320)] : e;
}
function po() {
  var e = ["undefined", "hasOwnProperty", "347806OyeqVW", "12HqBmRq", "forEach", "15074xBiANn", "9508592MGrnIR", "5014791bhNRjB", "keys", "prototype", "417420gNtmOx", "length", "getOwnPropertyDescriptor", "__esModule", "7SQxqKx", "call", "value", "3229344qBbNll", "2158015cluJQC", "defineProperty", "get", "function", "apply", "constructor", "default", "construct"];
  return po = function() {
    return e;
  }, po();
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
function id() {
  if (ga) return tr;
  ga = 1;
  var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, f = null, v = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: a, key: f, ref: v, props: d, _owner: o.current };
  }
  return tr.Fragment = n, tr.jsx = s, tr.jsxs = s, tr;
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
function sd() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = Symbol.iterator, m = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var R = x && h[x] || h[m];
      return typeof R == "function" ? R : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(h) {
      {
        for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
          I[Y - 1] = arguments[Y];
        g("error", h, I);
      }
    }
    function g(h, R, I) {
      {
        var Y = S.ReactDebugCurrentFrame, he = Y.getStackAddendum();
        he !== "" && (R += "%s", I = I.concat([he]));
        var me = I.map(function(ce) {
          return String(ce);
        });
        me.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, me);
      }
    }
    var _ = !1, y = !1, A = !1, E = !1, P = !1, L;
    L = Symbol.for("react.module.reference");
    function W(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || P || h === o || h === l || h === u || E || h === v || _ || y || A || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === L || h.getModuleId !== void 0));
    }
    function ee(h, R, I) {
      var Y = h.displayName;
      if (Y)
        return Y;
      var he = R.displayName || R.name || "";
      return he !== "" ? I + "(" + he + ")" : I;
    }
    function $(h) {
      return h.displayName || "Context";
    }
    function N(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
            var R = h;
            return $(R) + ".Consumer";
          case s:
            var I = h;
            return $(I._context) + ".Provider";
          case c:
            return ee(h, h.render, "ForwardRef");
          case d:
            var Y = h.displayName || null;
            return Y !== null ? Y : N(h.type) || "Memo";
          case f: {
            var he = h, me = he._payload, ce = he._init;
            try {
              return N(ce(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, q = 0, X, J, G, Z, re, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function fe() {
      {
        if (q === 0) {
          X = console.log, J = console.info, G = console.warn, Z = console.error, re = console.group, oe = console.groupCollapsed, K = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: te,
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
        q++;
      }
    }
    function le() {
      {
        if (q--, q === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, h, {
              value: X
            }),
            info: z({}, h, {
              value: J
            }),
            warn: z({}, h, {
              value: G
            }),
            error: z({}, h, {
              value: Z
            }),
            group: z({}, h, {
              value: re
            }),
            groupCollapsed: z({}, h, {
              value: oe
            }),
            groupEnd: z({}, h, {
              value: K
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = S.ReactCurrentDispatcher, pe;
    function k(h, R, I) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (he) {
            var Y = he.stack.trim().match(/\n( *(at )?)/);
            pe = Y && Y[1] || "";
          }
        return `
` + pe + h;
      }
    }
    var U = !1, D;
    {
      var M = typeof WeakMap == "function" ? WeakMap : Map;
      D = new M();
    }
    function O(h, R) {
      if (!h || U)
        return "";
      {
        var I = D.get(h);
        if (I !== void 0)
          return I;
      }
      var Y;
      U = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = de.current, de.current = null, fe();
      try {
        if (R) {
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
            } catch (Ze) {
              Y = Ze;
            }
            Reflect.construct(h, [], ce);
          } else {
            try {
              ce.call();
            } catch (Ze) {
              Y = Ze;
            }
            h.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Y = Ze;
          }
          h();
        }
      } catch (Ze) {
        if (Ze && Y && typeof Ze.stack == "string") {
          for (var se = Ze.stack.split(`
`), We = Y.stack.split(`
`), Ce = se.length - 1, Ae = We.length - 1; Ce >= 1 && Ae >= 0 && se[Ce] !== We[Ae]; )
            Ae--;
          for (; Ce >= 1 && Ae >= 0; Ce--, Ae--)
            if (se[Ce] !== We[Ae]) {
              if (Ce !== 1 || Ae !== 1)
                do
                  if (Ce--, Ae--, Ae < 0 || se[Ce] !== We[Ae]) {
                    var Te = `
` + se[Ce].replace(" at new ", " at ");
                    return h.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", h.displayName)), typeof h == "function" && D.set(h, Te), Te;
                  }
                while (Ce >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        U = !1, de.current = me, le(), Error.prepareStackTrace = he;
      }
      var _n = h ? h.displayName || h.name : "", an = _n ? k(_n) : "";
      return typeof h == "function" && D.set(h, an), an;
    }
    function ne(h, R, I) {
      return O(h, !1);
    }
    function j(h) {
      var R = h.prototype;
      return !!(R && R.isReactComponent);
    }
    function ke(h, R, I) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return O(h, j(h));
      if (typeof h == "string")
        return k(h);
      switch (h) {
        case l:
          return k("Suspense");
        case u:
          return k("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return ne(h.render);
          case d:
            return ke(h.type, R, I);
          case f: {
            var Y = h, he = Y._payload, me = Y._init;
            try {
              return ke(me(he), R, I);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, st = {}, Et = S.ReactDebugCurrentFrame;
    function rt(h) {
      if (h) {
        var R = h._owner, I = ke(h.type, h._source, R ? R.type : null);
        Et.setExtraStackFrame(I);
      } else
        Et.setExtraStackFrame(null);
    }
    function Ct(h, R, I, Y, he) {
      {
        var me = Function.call.bind(we);
        for (var ce in h)
          if (me(h, ce)) {
            var se = void 0;
            try {
              if (typeof h[ce] != "function") {
                var We = Error((Y || "React class") + ": " + I + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              se = h[ce](R, ce, Y, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              se = Ce;
            }
            se && !(se instanceof Error) && (rt(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", I, ce, typeof se), rt(null)), se instanceof Error && !(se.message in st) && (st[se.message] = !0, rt(he), b("Failed %s type: %s", I, se.message), rt(null));
          }
      }
    }
    var Pe = Array.isArray;
    function be(h) {
      return Pe(h);
    }
    function qe(h) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, I = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return I;
      }
    }
    function ht(h) {
      try {
        return at(h), !1;
      } catch {
        return !0;
      }
    }
    function at(h) {
      return "" + h;
    }
    function nn(h) {
      if (ht(h))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(h)), at(h);
    }
    var rn = S.ReactCurrentOwner, wn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, on, B;
    function T(h) {
      if (we.call(h, "ref")) {
        var R = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function je(h) {
      if (we.call(h, "key")) {
        var R = Object.getOwnPropertyDescriptor(h, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Be(h, R) {
      typeof h.ref == "string" && rn.current;
    }
    function Ge(h, R) {
      {
        var I = function() {
          on || (on = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Ee(h, R) {
      {
        var I = function() {
          B || (B = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var ot = function(h, R, I, Y, he, me, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: R,
        ref: I,
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
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function _t(h, R, I, Y, he) {
      {
        var me, ce = {}, se = null, We = null;
        I !== void 0 && (nn(I), se = "" + I), je(R) && (nn(R.key), se = "" + R.key), T(R) && (We = R.ref, Be(R, he));
        for (me in R)
          we.call(R, me) && !wn.hasOwnProperty(me) && (ce[me] = R[me]);
        if (h && h.defaultProps) {
          var Ce = h.defaultProps;
          for (me in Ce)
            ce[me] === void 0 && (ce[me] = Ce[me]);
        }
        if (se || We) {
          var Ae = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          se && Ge(ce, Ae), We && Ee(ce, Ae);
        }
        return ot(h, se, We, he, Y, rn.current, ce);
      }
    }
    var At = S.ReactCurrentOwner, En = S.ReactDebugCurrentFrame;
    function Tt(h) {
      if (h) {
        var R = h._owner, I = ke(h.type, h._source, R ? R.type : null);
        En.setExtraStackFrame(I);
      } else
        En.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function Dt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function Xe() {
      {
        if (At.current) {
          var h = N(At.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Ke(h) {
      return "";
    }
    var ct = {};
    function Ot(h) {
      {
        var R = Xe();
        if (!R) {
          var I = typeof h == "string" ? h : h.displayName || h.name;
          I && (R = `

Check the top-level render call using <` + I + ">.");
        }
        return R;
      }
    }
    function sn(h, R) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var I = Ot(R);
        if (ct[I])
          return;
        ct[I] = !0;
        var Y = "";
        h && h._owner && h._owner !== At.current && (Y = " It was passed a child from " + N(h._owner.type) + "."), Tt(h), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, Y), Tt(null);
      }
    }
    function Cn(h, R) {
      {
        if (typeof h != "object")
          return;
        if (be(h))
          for (var I = 0; I < h.length; I++) {
            var Y = h[I];
            Dt(Y) && sn(Y, R);
          }
        else if (Dt(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var he = p(h);
          if (typeof he == "function" && he !== h.entries)
            for (var me = he.call(h), ce; !(ce = me.next()).done; )
              Dt(ce.value) && sn(ce.value, R);
        }
      }
    }
    function qt(h) {
      {
        var R = h.type;
        if (R == null || typeof R == "string")
          return;
        var I;
        if (typeof R == "function")
          I = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          I = R.propTypes;
        else
          return;
        if (I) {
          var Y = N(R);
          Ct(I, h.props, "prop", Y, h);
        } else if (R.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var he = N(R);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(h) {
      {
        for (var R = Object.keys(h.props), I = 0; I < R.length; I++) {
          var Y = R[I];
          if (Y !== "children" && Y !== "key") {
            Tt(h), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Tt(null);
            break;
          }
        }
        h.ref !== null && (Tt(h), b("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var er = {};
    function Or(h, R, I, Y, he, me) {
      {
        var ce = W(h);
        if (!ce) {
          var se = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = Ke();
          We ? se += We : se += Xe();
          var Ce;
          h === null ? Ce = "null" : be(h) ? Ce = "array" : h !== void 0 && h.$$typeof === t ? (Ce = "<" + (N(h.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof h, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, se);
        }
        var Ae = _t(h, R, I, he, me);
        if (Ae == null)
          return Ae;
        if (ce) {
          var Te = R.children;
          if (Te !== void 0)
            if (Y)
              if (be(Te)) {
                for (var _n = 0; _n < Te.length; _n++)
                  Cn(Te[_n], h);
                Object.freeze && Object.freeze(Te);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cn(Te, h);
        }
        if (we.call(R, "key")) {
          var an = N(h), Ze = Object.keys(R).filter(function(Zf) {
            return Zf !== "key";
          }), ui = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[an + ui]) {
            var Kf = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, an, Kf, an), er[an + ui] = !0;
          }
        }
        return h === r ? Wt(Ae) : qt(Ae), Ae;
      }
    }
    function Fe(h, R, I) {
      return Or(h, R, I, !0);
    }
    function Rr(h, R, I) {
      return Or(h, R, I, !1);
    }
    var li = Rr, _e = Fe;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = _e;
  }()), nr;
}
var ya;
function ad() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = id() : kr.exports = sd()), kr.exports;
}
var V = ad(), et = function() {
  return et = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, et.apply(this, arguments);
};
function In(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function cd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ld = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ud = /* @__PURE__ */ cd(
  function(e) {
    return ld.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Se = "-ms-", fr = "-moz-", ve = "-webkit-", al = "comm", Fo = "rule", zs = "decl", fd = "@import", cl = "@keyframes", dd = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function hd(e, t) {
  return Ue(e, 0) ^ 45 ? (((t << 2 ^ Ue(e, 0)) << 2 ^ Ue(e, 1)) << 2 ^ Ue(e, 2)) << 2 ^ Ue(e, 3) : 0;
}
function ul(e) {
  return e.trim();
}
function Vt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function Yr(e, t, n) {
  return e.indexOf(t, n);
}
function Ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function Nn(e, t, n) {
  return e.slice(t, n);
}
function It(e) {
  return e.length;
}
function fl(e) {
  return e.length;
}
function lr(e, t) {
  return t.push(e), e;
}
function pd(e, t) {
  return e.map(t).join("");
}
function ba(e, t) {
  return e.filter(function(n) {
    return !Vt(n, t);
  });
}
var zo = 1, jn = 1, dl = 0, ft = 0, Le = 0, Wn = "";
function Vo(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: zo, column: jn, length: s, return: "", siblings: a };
}
function Xt(e, t) {
  return ji(Vo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function An(e) {
  for (; e.root; )
    e = Xt(e.root, { children: [e] });
  lr(e, e.siblings);
}
function md() {
  return Le;
}
function xd() {
  return Le = ft > 0 ? Ue(Wn, --ft) : 0, jn--, Le === 10 && (jn = 1, zo--), Le;
}
function xt() {
  return Le = ft < dl ? Ue(Wn, ft++) : 0, jn++, Le === 10 && (jn = 1, zo++), Le;
}
function pn() {
  return Ue(Wn, ft);
}
function $r() {
  return ft;
}
function Ho(e, t) {
  return Nn(Wn, e, t);
}
function Li(e) {
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
function gd(e) {
  return zo = jn = 1, dl = It(Wn = e), ft = 0, [];
}
function vd(e) {
  return Wn = "", e;
}
function fi(e) {
  return ul(Ho(ft - 1, Mi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yd(e) {
  for (; (Le = pn()) && Le < 33; )
    xt();
  return Li(e) > 2 || Li(Le) > 3 ? "" : " ";
}
function bd(e, t) {
  for (; --t && xt() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); )
    ;
  return Ho(e, $r() + (t < 6 && pn() == 32 && xt() == 32));
}
function Mi(e) {
  for (; xt(); )
    switch (Le) {
      // ] ) " '
      case e:
        return ft;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mi(Le);
        break;
      // (
      case 40:
        e === 41 && Mi(e);
        break;
      // \
      case 92:
        xt();
        break;
    }
  return ft;
}
function Sd(e, t) {
  for (; xt() && e + Le !== 57; )
    if (e + Le === 84 && pn() === 47)
      break;
  return "/*" + Ho(t, ft - 1) + "*" + Vs(e === 47 ? e : xt());
}
function wd(e) {
  for (; !Li(pn()); )
    xt();
  return Ho(e, ft);
}
function Ed(e) {
  return vd(Gr("", null, null, null, [""], e = gd(e), 0, [0], e));
}
function Gr(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, x = 0, m = 1, p = 1, S = 1, b = 0, g = "", _ = o, y = i, A = r, E = g; p; )
    switch (x = b, b = xt()) {
      // (
      case 40:
        if (x != 108 && Ue(E, d - 1) == 58) {
          Yr(E += ie(fi(b), "&", "&\f"), "&\f", ll(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += fi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += yd(x);
        break;
      // \
      case 92:
        E += bd($r() - 1, 7);
        continue;
      // /
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            lr(Cd(Sd(xt(), $r()), t, n, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = It(E) * S;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            S == -1 && (E = ie(E, /\f/g, "")), v > 0 && It(E) - d && lr(v > 32 ? wa(E + ";", r, n, d - 1, c) : wa(ie(E, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (lr(A = Sa(E, t, n, l, u, o, a, g, _ = [], y = [], d, i), i), b === 123)
              if (u === 0)
                Gr(E, t, A, A, _, i, d, a, y);
              else
                switch (f === 99 && Ue(E, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(e, A, A, r && lr(Sa(e, A, A, 0, 0, o, a, g, o, _ = [], d, y), y), o, y, d, a, r ? _ : y);
                    break;
                  default:
                    Gr(E, A, A, A, [""], y, 0, a, y);
                }
        }
        l = u = v = 0, m = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + It(E), v = x;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && xd() == 125)
            continue;
        }
        switch (E += Vs(b), b * m) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (It(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            pn() === 45 && (E += fi(xt())), f = pn(), u = d = It(g = E += wd($r())), b++;
            break;
          // -
          case 45:
            x === 45 && It(E) == 2 && (m = 0);
        }
    }
  return i;
}
function Sa(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], x = fl(v), m = 0, p = 0, S = 0; m < r; ++m)
    for (var b = 0, g = Nn(e, f + 1, f = ll(p = s[m])), _ = e; b < x; ++b)
      (_ = ul(p > 0 ? v[b] + " " + g : ie(g, /&\f/g, v[b]))) && (c[S++] = _);
  return Vo(e, t, n, o === 0 ? Fo : a, c, l, u, d);
}
function Cd(e, t, n, r) {
  return Vo(e, t, n, al, Vs(md()), Nn(e, 2, -2), 0, r);
}
function wa(e, t, n, r, o) {
  return Vo(e, t, n, zs, Nn(e, 0, r), Nn(e, r + 1, -1), r, o);
}
function hl(e, t, n) {
  switch (hd(e, t)) {
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
      return fr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + fr + e + Se + e + e;
    // writing-mode
    case 5936:
      switch (Ue(e, t + 11)) {
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
      return ve + e + Se + "flex-item-" + ie(e, /flex-|-self/g, "") + (Vt(e, /flex-|baseline/) ? "" : Se + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
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
      if (!Vt(e, /flex-|baseline/)) return Se + "grid-column-align" + Nn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Se + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Vt(r.props, /grid-\w+-end/);
      }) ? ~Yr(e + (n = n[t].value), "span", 0) ? e : Se + ie(e, "-start", "") + e + Se + "grid-row-span:" + (~Yr(n, "span", 0) ? Vt(n, /\d+/) : +Vt(n, /\d+/) - +Vt(e, /\d+/)) + ";" : Se + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Vt(r.props, /grid-\w+-start/);
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
      if (It(e) - 1 - t > 6)
        switch (Ue(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ue(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + fr + (Ue(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Yr(e, "stretch", 0) ? hl(ie(e, "stretch", "fill-available"), t, n) + e : e;
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
      if (Ue(e, t + 6) === 121)
        return ie(e, ":", ":" + ve) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ue(e, Ue(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ve + (Ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + Se + "$2box$3") + e;
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
function mo(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function _d(e, t, n, r) {
  switch (e.type) {
    case dd:
      if (e.children.length) break;
    case fd:
    case zs:
      return e.return = e.return || e.value;
    case al:
      return "";
    case cl:
      return e.return = e.value + "{" + mo(e.children, r) + "}";
    case Fo:
      if (!It(e.value = e.props.join(","))) return "";
  }
  return It(n = mo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ad(e) {
  var t = fl(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Td(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Od(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case zs:
        e.return = hl(e.value, e.length, n);
        return;
      case cl:
        return mo([Xt(e, { value: ie(e.value, "@", "@" + ve) })], r);
      case Fo:
        if (e.length)
          return pd(n = e.props, function(o) {
            switch (Vt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                An(Xt(e, { props: [ie(o, /:(read-\w+)/, ":" + fr + "$1")] })), An(Xt(e, { props: [o] })), ji(e, { props: ba(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                An(Xt(e, { props: [ie(o, /:(plac\w+)/, ":" + ve + "input-$1")] })), An(Xt(e, { props: [ie(o, /:(plac\w+)/, ":" + fr + "$1")] })), An(Xt(e, { props: [ie(o, /:(plac\w+)/, Se + "input-$1")] })), An(Xt(e, { props: [o] })), ji(e, { props: ba(n, r) });
                break;
            }
            return "";
          });
    }
}
var Rd = {
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
}, bn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", pl = "active", ml = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
`, xo = typeof window < "u" && typeof document < "u", kd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), Pd = function(e, t) {
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
        Ea.test(s) ? (i = !1, Pr.delete(r)) : o.apply(void 0, In([s], a, !1));
      }, ze(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Ln = Object.freeze({});
function Id(e, t, n) {
  return n === void 0 && (n = Ln), e.theme !== n.theme && e.theme || t || n.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Nd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Ca(e) {
  return e.replace(Nd, "-").replace(jd, "");
}
var Ld = /(a)(d)/gi, Ir = 52, _a = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Bi(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Ir; t = t / Ir | 0) n = _a(t % Ir) + n;
  return (_a(t % Ir) + n).replace(Ld, "$1-$2");
}
var di, xl = 5381, ln = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, gl = function(e) {
  return ln(xl, e);
};
function Md(e) {
  return Bi(gl(e) >>> 0);
}
function vl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function hi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var yl = typeof Symbol == "function" && Symbol.for, bl = yl ? Symbol.for("react.memo") : 60115, Dd = yl ? Symbol.for("react.forward_ref") : 60112, Bd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Fd = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Sl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zd = ((di = {})[Dd] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, di[bl] = Sl, di);
function Aa(e) {
  return ("type" in (t = e) && t.type.$$typeof) === bl ? Sl : "$$typeof" in e ? zd[e.$$typeof] : Bd;
  var t;
}
var Vd = Object.defineProperty, Hd = Object.getOwnPropertyNames, Ta = Object.getOwnPropertySymbols, Ud = Object.getOwnPropertyDescriptor, qd = Object.getPrototypeOf, Oa = Object.prototype;
function wl(e, t, n) {
  if (typeof t != "string") {
    if (Oa) {
      var r = qd(t);
      r && r !== Oa && wl(e, r, n);
    }
    var o = Hd(t);
    Ta && (o = o.concat(Ta(t)));
    for (var i = Aa(e), s = Aa(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Fd || n && n[c] || s && c in s || i && c in i)) {
        var l = Ud(t, c);
        try {
          Vd(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Mn(e) {
  return typeof e == "function";
}
function Us(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ra(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Dn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Fi(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Dn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Fi(e[r], t[r]);
  else if (Dn(t)) for (var r in t) e[r] = Fi(e[r], t[r]);
  return e;
}
function qs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Wd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Xd() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Xn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Xd.apply(void 0, In([Wd[e]], t, !1)).trim());
}
var Yd = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Xn(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Hs);
    return n;
  }, e;
}(), $d = 1 << 30, Kr = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Zr = 1, Nr = function(e) {
  if (Kr.has(e)) return Kr.get(e);
  for (; go.has(Zr); ) Zr++;
  var t = Zr++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > $d)) throw Xn(16, "".concat(t));
  return Kr.set(e, t), go.set(t, e), t;
}, Gd = function(e, t) {
  Zr = t + 1, Kr.set(e, t), go.set(t, e);
}, Kd = "style[".concat(bn, "][").concat(ml, '="').concat(Uo, '"]'), Zd = new RegExp("^".concat(bn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Jd = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Qd = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Zd);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (Gd(u, l), Jd(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, ka = function(e) {
  for (var t = document.querySelectorAll(Kd), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(bn) !== pl && (Qd(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function e0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(bn, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(bn, pl), r.setAttribute(ml, Uo);
  var s = e0();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, t0 = function() {
  function e(t) {
    this.element = El(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Xn(17);
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
}(), n0 = function() {
  function e(t) {
    this.element = El(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), r0 = function() {
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
}(), Pa = xo, o0 = { isServer: !xo, useCSSOMInjection: !kd }, Cl = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ln), n === void 0 && (n = {});
    var o = this;
    this.options = et(et({}, o0), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && xo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(S) {
            return go.get(S);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), x = s.getGroup(d);
          if (v === void 0 || !v.size || x.length === 0) return "continue";
          var m = "".concat(bn, ".g").concat(d, '[id="').concat(f, '"]'), p = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (p += "".concat(S, ","));
          }), c += "".concat(x).concat(m, '{content:"').concat(p, '"}').concat(Hs);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Nr(t);
  }, e.prototype.rehydrate = function() {
    !this.server && xo && ka(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(et(et({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new r0(o) : r ? new t0(o) : new n0(o);
    }(this.options), new Yd(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Nr(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Nr(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Nr(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), i0 = /&/g, s0 = /^\s*\/\/.*$/gm;
function _l(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = _l(n.children, t)), n;
  });
}
function a0(e) {
  var t, n, r, o = Ln, i = o.options, s = i === void 0 ? Ln : i, a = o.plugins, c = a === void 0 ? qo : a, l = function(f, v, x) {
    return x.startsWith(n) && x.endsWith(n) && x.replaceAll(n, "").length > 0 ? ".".concat(t) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Fo && f.value.includes("&") && (f.props[0] = f.props[0].replace(i0, n).replace(r, l));
  }), s.prefix && u.push(Od), u.push(_d);
  var d = function(f, v, x, m) {
    v === void 0 && (v = ""), x === void 0 && (x = ""), m === void 0 && (m = "&"), t = m, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var p = f.replace(s0, ""), S = Ed(x || v ? "".concat(x, " ").concat(v, " { ").concat(p, " }") : p);
    s.namespace && (S = _l(S, s.namespace));
    var b = [];
    return mo(S, Ad(u.concat(Td(function(g) {
      return b.push(g);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || Xn(15), ln(f, v.name);
  }, xl).toString() : "", d;
}
var c0 = new Cl(), zi = a0(), Al = Ne.createContext({ shouldForwardProp: void 0, styleSheet: c0, stylis: zi });
Al.Consumer;
Ne.createContext(void 0);
function Ia() {
  return Jt(Al);
}
var Na = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, qs(this, function() {
      throw Xn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = zi), this.name + t.hash;
  }, e;
}(), l0 = function(e) {
  return e >= "A" && e <= "Z";
};
function ja(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    l0(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Tl = function(e) {
  return e == null || e === !1 || e === "";
}, Ol = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Tl(i) && (Array.isArray(i) && i.isCss || Mn(i) ? r.push("".concat(ja(o), ":"), i, ";") : Dn(i) ? r.push.apply(r, In(In(["".concat(o, " {")], Ol(i), !1), ["}"], !1)) : r.push("".concat(ja(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Rd || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function mn(e, t, n, r) {
  if (Tl(e)) return [];
  if (Us(e)) return [".".concat(e.styledComponentId)];
  if (Mn(e)) {
    if (!Mn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Dn(o) || o === null || console.error("".concat(vl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mn(o, t, n, r);
  }
  var i;
  return e instanceof Na ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Dn(e) ? Ol(e) : Array.isArray(e) ? Array.prototype.concat.apply(qo, e.map(function(s) {
    return mn(s, t, n, r);
  })) : [e.toString()];
}
function u0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Mn(n) && !Us(n)) return !1;
  }
  return !0;
}
var f0 = gl(Uo), d0 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && u0(t), this.componentId = n, this.baseHash = ln(f0, n), this.baseStyle = r, Cl.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = fn(o, this.staticRulesId);
    else {
      var i = Ra(mn(this.rules, t, n, r)), s = Bi(ln(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = fn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = ln(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = ln(c, d));
        else if (d) {
          var f = Ra(mn(d, t, n, r));
          c = ln(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Bi(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = fn(o, v);
      }
    }
    return o;
  }, e;
}(), Rl = Ne.createContext(void 0);
Rl.Consumer;
var pi = {}, La = /* @__PURE__ */ new Set();
function h0(e, t, n) {
  var r = Us(e), o = e, i = !hi(e), s = t.attrs, a = s === void 0 ? qo : s, c = t.componentId, l = c === void 0 ? function(_, y) {
    var A = typeof _ != "string" ? "sc" : Ca(_);
    pi[A] = (pi[A] || 0) + 1;
    var E = "".concat(A, "-").concat(Md(Uo + A + pi[A]));
    return y ? "".concat(y, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, d = u === void 0 ? function(_) {
    return hi(_) ? "styled.".concat(_) : "Styled(".concat(vl(_), ")");
  }(e) : u, f = t.displayName && t.componentId ? "".concat(Ca(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, x = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var p = t.shouldForwardProp;
      x = function(_, y) {
        return m(_, y) && p(_, y);
      };
    } else x = m;
  }
  var S = new d0(n, f, r ? o.componentStyle : void 0);
  function b(_, y) {
    return function(A, E, P) {
      var L = A.attrs, W = A.componentStyle, ee = A.defaultProps, $ = A.foldedComponentIds, N = A.styledComponentId, z = A.target, q = Ne.useContext(Rl), X = Ia(), J = A.shouldForwardProp || X.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ma(N);
      var G = Id(E, q, ee) || Ln, Z = function(le, de, pe) {
        for (var k, U = et(et({}, de), { className: void 0, theme: pe }), D = 0; D < le.length; D += 1) {
          var M = Mn(k = le[D]) ? k(U) : k;
          for (var O in M) U[O] = O === "className" ? fn(U[O], M[O]) : O === "style" ? et(et({}, U[O]), M[O]) : M[O];
        }
        return de.className && (U.className = fn(U.className, de.className)), U;
      }(L, E, G), re = Z.as || z, oe = {};
      for (var K in Z) Z[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Z.theme === G || (K === "forwardedAs" ? oe.as = Z.forwardedAs : J && !J(K, re) || (oe[K] = Z[K], J || process.env.NODE_ENV !== "development" || ud(K) || La.has(K) || !Di.has(re) || (La.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(le, de) {
        var pe = Ia(), k = le.generateAndInjectStyles(de, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && ma(k), k;
      }(W, Z);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(te);
      var fe = fn($, N);
      return te && (fe += " " + te), Z.className && (fe += " " + Z.className), oe[hi(re) && !Di.has(re) ? "class" : "className"] = fe, P && (oe.ref = P), ed(re, oe);
    }(g, _, y);
  }
  b.displayName = d;
  var g = Ne.forwardRef(b);
  return g.attrs = v, g.componentStyle = S, g.displayName = d, g.shouldForwardProp = x, g.foldedComponentIds = r ? fn(o.foldedComponentIds, o.styledComponentId) : "", g.styledComponentId = f, g.target = r ? o.target : e, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = r ? function(y) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var P = 0, L = A; P < L.length; P++) Fi(y, L[P], !0);
      return y;
    }({}, o.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (Pd(d, f), g.warnTooManyClasses = /* @__PURE__ */ function(_, y) {
    var A = {}, E = !1;
    return function(P) {
      if (!E && (A[P] = !0, Object.keys(A).length >= 200)) {
        var L = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(_).concat(L, `.
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
  }(d, f)), qs(g, function() {
    return ".".concat(g.styledComponentId);
  }), i && wl(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), g;
}
function Ma(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Da = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function p0(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Mn(e) || Dn(e)) return Da(mn(Ma(qo, In([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? mn(r) : Da(mn(Ma(r, t)));
}
function Vi(e, t, n) {
  if (n === void 0 && (n = Ln), !t) throw Xn(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, p0.apply(void 0, In([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(e, t, et(et({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(e, t, et(et({}, n), o));
  }, r;
}
var kl = function(e) {
  return Vi(h0, e);
}, yt = kl;
Di.forEach(function(e) {
  yt[e] = kl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(bn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
const Er = vo;
(function(e, t) {
  const n = vo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(260)) / 1 + -parseInt(n(263)) / 2 + parseInt(n(265)) / 3 + -parseInt(n(269)) / 4 + parseInt(n(270)) / 5 + parseInt(n(266)) / 6 + parseInt(n(267)) / 7 * (-parseInt(n(268)) / 8) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 829663);
function vo(e, t) {
  const n = yo();
  return vo = function(r, o) {
    return r = r - 260, n[r];
  }, vo(e, t);
}
const m0 = yt[Er(262)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, x0 = yt[Er(262)]`
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
`, g0 = yt[Er(264)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, v0 = yt[Er(261)]`
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
`, y0 = yt[Er(262)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;
function yo() {
  const e = ["919197FLKJth", "span", "div", "342564tXhGRD", "canvas", "4878108UNLFAa", "2104182bUVEUt", "128695uMLLov", "424cNvASs", "379796BDPxfe", "5063815AItNvl"];
  return yo = function() {
    return e;
  }, yo();
}
const jt = /* @__PURE__ */ Object.create(null);
jt.open = "0";
jt.close = "1";
jt.ping = "2";
jt.pong = "3";
jt.message = "4";
jt.upgrade = "5";
jt.noop = "6";
const Jr = /* @__PURE__ */ Object.create(null);
Object.keys(jt).forEach((e) => {
  Jr[jt[e]] = e;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ws = ({ type: e, data: t }, n, r) => Pl && t instanceof Blob ? n ? r(t) : Ba(t, r) : Il && (t instanceof ArrayBuffer || Nl(t)) ? n ? r(t) : Ba(new Blob([t]), r) : r(jt[e] + (t || "")), Ba = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Fa(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let mi;
function b0(e, t) {
  if (Pl && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Fa).then(t);
  if (Il && (e.data instanceof ArrayBuffer || Nl(e.data)))
    return t(Fa(e.data));
  Ws(e, !1, (n) => {
    mi || (mi = new TextEncoder()), t(mi.encode(n));
  });
}
const za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ur = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < za.length; e++)
  ur[za.charCodeAt(e)] = e;
const S0 = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = ur[e.charCodeAt(r)], s = ur[e.charCodeAt(r + 1)], a = ur[e.charCodeAt(r + 2)], c = ur[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, w0 = typeof ArrayBuffer == "function", Xs = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: jl(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: E0(e.substring(1), t)
  } : Jr[n] ? e.length > 1 ? {
    type: Jr[n],
    data: e.substring(1)
  } : {
    type: Jr[n]
  } : Hi;
}, E0 = (e, t) => {
  if (w0) {
    const n = S0(e);
    return jl(n, t);
  } else
    return { base64: !0, data: e };
}, jl = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Ll = "", C0 = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(Ll));
    });
  });
}, _0 = (e, t) => {
  const n = e.split(Ll), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = Xs(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function A0() {
  return new TransformStream({
    transform(e, t) {
      b0(e, (n) => {
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
let xi;
function Lr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Mr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function T0(e, t) {
  xi || (xi = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Lr(n) < 1)
            break;
          const c = Mr(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Lr(n) < 2)
            break;
          const c = Mr(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Lr(n) < 8)
            break;
          const c = Mr(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Lr(n) < o)
            break;
          const c = Mr(n, o);
          a.enqueue(Xs(i ? c : xi.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(Hi);
          break;
        }
      }
    }
  });
}
const Ml = 4;
function De(e) {
  if (e) return O0(e);
}
function O0(e) {
  for (var t in De.prototype)
    e[t] = De.prototype[t];
  return e;
}
De.prototype.on = De.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
De.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
De.prototype.off = De.prototype.removeListener = De.prototype.removeAllListeners = De.prototype.removeEventListener = function(e, t) {
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
De.prototype.emit = function(e) {
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
De.prototype.emitReserved = De.prototype.emit;
De.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
De.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), ut = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), R0 = "arraybuffer";
function Dl(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const k0 = ut.setTimeout, P0 = ut.clearTimeout;
function Xo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = k0.bind(ut), e.clearTimeoutFn = P0.bind(ut)) : (e.setTimeoutFn = ut.setTimeout.bind(ut), e.clearTimeoutFn = ut.clearTimeout.bind(ut));
}
const I0 = 1.33;
function N0(e) {
  return typeof e == "string" ? j0(e) : Math.ceil((e.byteLength || e.size) * I0);
}
function j0(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Bl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function L0(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function M0(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class D0 extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Ys extends De {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Xo(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new D0(t, n, r)), this;
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
    const n = Xs(t, this.socket.binaryType);
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
    const n = L0(t);
    return n.length ? "?" + n : "";
  }
}
class B0 extends Ys {
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
    _0(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, C0(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Bl()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Fl = !1;
try {
  Fl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const F0 = Fl;
function z0() {
}
class V0 extends B0 {
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
let kn = class Qr extends De {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, Xo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Dl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Qr.requestsCount++, Qr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = z0, t)
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
kn.requestsCount = 0;
kn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Va);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ut ? "pagehide" : "unload";
    addEventListener(e, Va, !1);
  }
}
function Va() {
  for (let e in kn.requests)
    kn.requests.hasOwnProperty(e) && kn.requests[e].abort();
}
const H0 = function() {
  const e = zl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class U0 extends V0 {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = H0 && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new kn(zl, this.uri(), t);
  }
}
function zl(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || F0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ut[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Vl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class q0 extends Ys {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Vl ? {} : Dl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Bl()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const gi = ut.WebSocket || ut.MozWebSocket;
class W0 extends q0 {
  createSocket(t, n, r) {
    return Vl ? new gi(t, n, r) : n ? new gi(t, n) : new gi(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class X0 extends Ys {
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
        const n = T0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = A0();
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
        o && Wo(() => {
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
const Y0 = {
  websocket: W0,
  webtransport: X0,
  polling: U0
}, $0 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, G0 = [
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
function Ui(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = $0.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[G0[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = K0(i, i.path), i.queryKey = Z0(i, i.query), i;
}
function K0(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Z0(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const qi = typeof addEventListener == "function" && typeof removeEventListener == "function", eo = [];
qi && addEventListener("offline", () => {
  eo.forEach((e) => e());
}, !1);
class Zt extends De {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = R0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Ui(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Ui(n.host).host);
    Xo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = M0(this.opts.query)), qi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Ml, n.transport = t, this.id && (n.sid = this.id);
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
      if (o && (n += N0(o)), r > 0 && n > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, Wo(() => {
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), qi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = eo.indexOf(this._offlineEventListener);
        r !== -1 && eo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Zt.protocol = Ml;
class J0 extends Zt {
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
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Zt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = n.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), n.close(), n = null);
    }
    const s = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = n.name, i(), this.emitReserved("upgradeError", f);
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
let Q0 = class extends J0 {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Y0[o]).filter((o) => !!o)), super(t, r);
  }
};
function eh(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Ui(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const th = typeof ArrayBuffer == "function", nh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Hl = Object.prototype.toString, rh = typeof Blob == "function" || typeof Blob < "u" && Hl.call(Blob) === "[object BlobConstructor]", oh = typeof File == "function" || typeof File < "u" && Hl.call(File) === "[object FileConstructor]";
function $s(e) {
  return th && (e instanceof ArrayBuffer || nh(e)) || rh && e instanceof Blob || oh && e instanceof File;
}
function to(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (to(e[n]))
        return !0;
    return !1;
  }
  if ($s(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return to(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && to(e[n]))
      return !0;
  return !1;
}
function ih(e) {
  const t = [], n = e.data, r = e;
  return r.data = Wi(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Wi(e, t) {
  if (!e)
    return e;
  if ($s(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Wi(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Wi(e[r], t));
    return n;
  }
  return e;
}
function sh(e, t) {
  return e.data = Xi(e.data, t), delete e.attachments, e;
}
function Xi(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Xi(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Xi(e[n], t));
  return e;
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
var ue;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ue || (ue = {}));
class lh {
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
    return (t.type === ue.EVENT || t.type === ue.ACK) && to(t) ? this.encodeAsBinary({
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
    const n = ih(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function Ha(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Gs extends De {
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
      r || n.type === ue.BINARY_ACK ? (n.type = r ? ue.EVENT : ue.ACK, this.reconstructor = new uh(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if ($s(t) || t.base64)
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
      if (Gs.isPayloadValid(r.type, i))
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
        return Ha(n);
      case ue.DISCONNECT:
        return n === void 0;
      case ue.CONNECT_ERROR:
        return typeof n == "string" || Ha(n);
      case ue.EVENT:
      case ue.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && ah.indexOf(n[0]) === -1);
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
class uh {
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
      const n = sh(this.reconPack, this.buffers);
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
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Gs,
  Encoder: lh,
  get PacketType() {
    return ue;
  },
  protocol: ch
}, Symbol.toStringTag, { value: "Module" }));
function pt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
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
class Ul extends De {
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
      pt(t, "open", this.onopen.bind(this)),
      pt(t, "packet", this.onpacket.bind(this)),
      pt(t, "error", this.onerror.bind(this)),
      pt(t, "close", this.onclose.bind(this))
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
    if (dh.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: ue.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const u = this.ids++, d = n.pop();
      this._registerAckCallback(u, d), s.id = u;
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
function Yn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Yn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
Yn.prototype.reset = function() {
  this.attempts = 0;
};
Yn.prototype.setMin = function(e) {
  this.ms = e;
};
Yn.prototype.setMax = function(e) {
  this.max = e;
};
Yn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Yi extends De {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Xo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Yn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || fh;
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
    this.engine = new Q0(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = pt(n, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = pt(n, "error", i);
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
      pt(t, "ping", this.onping.bind(this)),
      pt(t, "data", this.ondata.bind(this)),
      pt(t, "error", this.onerror.bind(this)),
      pt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      pt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Wo(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Ul(this, t, n), this.nsps[t] = r), r;
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
const rr = {};
function no(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = eh(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = rr[o] && i in rr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Yi(r, t) : (rr[o] || (rr[o] = new Yi(r, t)), c = rr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
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
  return Ua || (Ua = 1, function(e) {
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
  }(vi)), vi.exports;
}
var ph = hh();
const $e = /* @__PURE__ */ od(ph);
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lt.apply(null, arguments);
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
var mh = Symbol.for("react.element"), xh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(e) {
  return (
    // Base object type
    e && ye(e) === "object" && // React Element type
    (e.$$typeof === mh || e.$$typeof === xh) && // React Fragment type
    e.type === gh
  );
}
var $i = {}, Ks = [], yh = function(t) {
  Ks.push(t);
};
function Zs(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ks.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function bh(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ks.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function ql() {
  $i = {};
}
function Wl(e, t, n) {
  !t && !$i[n] && (e(!1, n), $i[n] = !0);
}
function en(e, t) {
  Wl(Zs, e, t);
}
function Sh(e, t) {
  Wl(bh, e, t);
}
en.preMessage = yh;
en.resetWarned = ql;
en.noteOnce = Sh;
function wh(e, t) {
  if (ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xl(e) {
  var t = wh(e, "string");
  return ye(t) == "symbol" ? t : t + "";
}
function H(e, t, n) {
  return (t = Xl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qa(Object(n), !0).forEach(function(r) {
      H(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Wa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Eh(e) {
  return e && ye(e) === "object" && Wa(e.nativeElement) ? e.nativeElement : Wa(e) ? e : null;
}
function Ch(e) {
  var t = Eh(e);
  if (t)
    return t;
  if (e instanceof Ne.Component) {
    var n;
    return (n = xa.findDOMNode) === null || n === void 0 ? void 0 : n.call(xa, e);
  }
  return null;
}
var Dr = { exports: {} }, xe = {};
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
function _h() {
  if (Xa) return xe;
  Xa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
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
                case f:
                case d:
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
  return xe.ContextConsumer = s, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = c, xe.Fragment = n, xe.Lazy = f, xe.Memo = d, xe.Portal = t, xe.Profiler = o, xe.StrictMode = r, xe.Suspense = l, xe.SuspenseList = u, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(p) {
    return m(p) === s;
  }, xe.isContextProvider = function(p) {
    return m(p) === i;
  }, xe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, xe.isForwardRef = function(p) {
    return m(p) === c;
  }, xe.isFragment = function(p) {
    return m(p) === n;
  }, xe.isLazy = function(p) {
    return m(p) === f;
  }, xe.isMemo = function(p) {
    return m(p) === d;
  }, xe.isPortal = function(p) {
    return m(p) === t;
  }, xe.isProfiler = function(p) {
    return m(p) === o;
  }, xe.isStrictMode = function(p) {
    return m(p) === r;
  }, xe.isSuspense = function(p) {
    return m(p) === l;
  }, xe.isSuspenseList = function(p) {
    return m(p) === u;
  }, xe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === l || p === u || p === v || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === x || p.getModuleId !== void 0);
  }, xe.typeOf = m, xe;
}
var ge = {};
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
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = !1, m = !1, p = !1, S = !1, b = !1, g;
    g = Symbol.for("react.module.reference");
    function _(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === n || j === o || b || j === r || j === l || j === u || S || j === v || x || m || p || typeof j == "object" && j !== null && (j.$$typeof === f || j.$$typeof === d || j.$$typeof === i || j.$$typeof === s || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === g || j.getModuleId !== void 0));
    }
    function y(j) {
      if (typeof j == "object" && j !== null) {
        var ke = j.$$typeof;
        switch (ke) {
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
                var st = we && we.$$typeof;
                switch (st) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return st;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var A = s, E = i, P = e, L = c, W = n, ee = f, $ = d, N = t, z = o, q = r, X = l, J = u, G = !1, Z = !1;
    function re(j) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(j) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(j) {
      return y(j) === s;
    }
    function te(j) {
      return y(j) === i;
    }
    function fe(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function le(j) {
      return y(j) === c;
    }
    function de(j) {
      return y(j) === n;
    }
    function pe(j) {
      return y(j) === f;
    }
    function k(j) {
      return y(j) === d;
    }
    function U(j) {
      return y(j) === t;
    }
    function D(j) {
      return y(j) === o;
    }
    function M(j) {
      return y(j) === r;
    }
    function O(j) {
      return y(j) === l;
    }
    function ne(j) {
      return y(j) === u;
    }
    ge.ContextConsumer = A, ge.ContextProvider = E, ge.Element = P, ge.ForwardRef = L, ge.Fragment = W, ge.Lazy = ee, ge.Memo = $, ge.Portal = N, ge.Profiler = z, ge.StrictMode = q, ge.Suspense = X, ge.SuspenseList = J, ge.isAsyncMode = re, ge.isConcurrentMode = oe, ge.isContextConsumer = K, ge.isContextProvider = te, ge.isElement = fe, ge.isForwardRef = le, ge.isFragment = de, ge.isLazy = pe, ge.isMemo = k, ge.isPortal = U, ge.isProfiler = D, ge.isStrictMode = M, ge.isSuspense = O, ge.isSuspenseList = ne, ge.isValidElementType = _, ge.typeOf = y;
  }()), ge;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Dr.exports = _h() : Dr.exports = Ah()), Dr.exports;
}
var yi = Th();
function Yl(e, t, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Oh = Number(nd.split(".")[0]), $l = function(t, n) {
  typeof t == "function" ? t(n) : ye(t) === "object" && t && "current" in t && (t.current = n);
}, Rh = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      $l(s, i);
    });
  };
}, kh = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Gl(t) && Oh >= 19)
    return !0;
  var o = yi.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== yi.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== yi.ForwardRef);
};
function Gl(e) {
  return /* @__PURE__ */ td(e) && !vh(e);
}
var Ph = function(t) {
  if (t && Gl(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function bt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ga(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Xl(r.key), r);
  }
}
function St(e, t, n) {
  return t && Ga(e.prototype, t), n && Ga(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Gi(e, t) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Gi(e, t);
}
function Cr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Gi(e, t);
}
function Bn(e) {
  return Bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Bn(e);
}
function Js() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Js = function() {
    return !!e;
  })();
}
function xn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kl(e, t) {
  if (t && (ye(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return xn(e);
}
function Yo(e) {
  var t = Js();
  return function() {
    var n, r = Bn(e);
    if (t) {
      var o = Bn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Kl(this, n);
  };
}
function Ki(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ih(e) {
  if (Array.isArray(e)) return Ki(e);
}
function Zl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qs(e, t) {
  if (e) {
    if (typeof e == "string") return Ki(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ki(e, t) : void 0;
  }
}
function Nh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e) {
  return Ih(e) || Zl(e) || Qs(e) || Nh();
}
var Jl = function(t) {
  return +setTimeout(t, 16);
}, Ql = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Jl = function(t) {
  return window.requestAnimationFrame(t);
}, Ql = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ka = 0, $o = /* @__PURE__ */ new Map();
function eu(e) {
  $o.delete(e);
}
var bo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ka += 1;
  var r = Ka;
  function o(i) {
    if (i === 0)
      eu(r), t();
    else {
      var s = Jl(function() {
        o(i - 1);
      });
      $o.set(r, s);
    }
  }
  return o(n), r;
};
bo.cancel = function(e) {
  var t = $o.get(e);
  return eu(e), Ql(t);
};
process.env.NODE_ENV !== "production" && (bo.ids = function() {
  return $o;
});
function tu(e) {
  if (Array.isArray(e)) return e;
}
function jh(e, t) {
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
function nu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, t) {
  return tu(e) || jh(e, t) || Qs(e, t) || nu();
}
function mr(e) {
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
function Lh(e, t) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Mh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Mh;
}
function Go(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Dh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ea(e) {
  return Array.from((Zi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ou(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = Go(t), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || ea(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Za)))
          return !1;
        var v = Number(f.getAttribute(Ja) || 0);
        return i >= v;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function iu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Go(t);
  return (t.styles || ea(n)).find(function(r) {
    return r.getAttribute(ru(t)) === e;
  });
}
function su(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = iu(e, t);
  if (n) {
    var r = Go(t);
    r.removeChild(n);
  }
}
function Bh(e, t) {
  var n = Zi.get(e);
  if (!n || !Lh(document, n)) {
    var r = ou("", t), o = r.parentNode;
    Zi.set(e, o), e.removeChild(r);
  }
}
function gn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(n), o = ea(r), i = F(F({}, n), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = ou(e, i);
  return u.setAttribute(ru(i), t), u;
}
function Fh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function xr(e, t) {
  if (e == null) return {};
  var n, r, o = Fh(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function zh(e, t) {
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
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return o(i[f], s[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Vh = "%";
function Ji(e) {
  return e.join(Vh);
}
var Hh = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e), H(this, "instanceId", void 0), H(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return St(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Ji(n));
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
      return this.opUpdate(Ji(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), Fn = "data-token-hash", gt = "data-css-hash", Uh = "data-cache-path", Gt = "__cssinjs_instance__";
function qh() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(gt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Gt] = o[Gt] || e, o[Gt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(gt, "]"))).forEach(function(o) {
      var i = o.getAttribute(gt);
      if (r[i]) {
        if (o[Gt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Hh(e);
}
var _r = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: qh(),
  defaultCache: !0
});
function Wh(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var ta = /* @__PURE__ */ function() {
  function e() {
    bt(this, e), H(this, "cache", void 0), H(this, "keys", void 0), H(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return St(e, [{
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
            var d = ae(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
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
          return !Wh(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
H(ta, "MAX_CACHE_SIZE", 20);
H(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e), H(this, "derivatives", void 0), H(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Qa, t.length === 0 && Zs(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return St(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), bi = new ta();
function Qi(e) {
  var t = Array.isArray(e) ? e : [e];
  return bi.has(t) || bi.set(t, new au(t)), bi.get(t);
}
var Xh = /* @__PURE__ */ new WeakMap(), Si = {};
function Yh(e, t) {
  for (var n = Xh, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(Si) || n.set(Si, e()), n.get(Si);
}
var ec = /* @__PURE__ */ new WeakMap();
function dr(e) {
  var t = ec.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof au ? t += r.id : r && ye(r) === "object" ? t += dr(r) : t += r;
  }), t = mr(t), ec.set(e, t)), t;
}
function tc(e, t) {
  return mr("".concat(t, "_").concat(dr(e)));
}
var es = Ut();
function So(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function wo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = F(F({}, o), {}, (r = {}, H(r, Fn, t), H(r, gt, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var ro = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $h = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, cu = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = ro(u, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, $h(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, nc = process.env.NODE_ENV !== "test" && Ut() ? w.useLayoutEffect : w.useEffect, lu = function(t, n) {
  var r = w.useRef(!0);
  nc(function() {
    return t(r.current);
  }, n), nc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Gh = F({}, w), rc = Gh.useInsertionEffect, Kh = function(t, n, r) {
  w.useMemo(t, r), lu(function() {
    return n(!0);
  }, r);
}, Zh = rc ? function(e, t, n) {
  return rc(function() {
    return e(), t();
  }, n);
} : Kh, Jh = F({}, w), Qh = Jh.useInsertionEffect, ep = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Zs(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, tp = function() {
  return function(t) {
    t();
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
  var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Br && typeof Br.webpackHotUpdate == "function") {
    var sp = Br.webpackHotUpdate;
    Br.webpackHotUpdate = function() {
      return ts = !0, setTimeout(function() {
        ts = !1;
      }, 0), sp.apply(void 0, arguments);
    };
  }
}
function na(e, t, n, r, o) {
  var i = w.useContext(_r), s = i.cache, a = [e].concat(Ht(t)), c = Ji(a), l = np([c]), u = ip(), d = function(m) {
    s.opUpdate(c, function(p) {
      var S = p || [void 0, void 0], b = ae(S, 2), g = b[0], _ = g === void 0 ? 0 : g, y = b[1], A = y;
      process.env.NODE_ENV !== "production" && y && u && (r == null || r(A, u), A = null);
      var E = A || n(), P = [_, E];
      return m ? m(P) : P;
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
  var f = s.opGet(c);
  process.env.NODE_ENV !== "production" && !f && (d(), f = s.opGet(c));
  var v = f[1];
  return Zh(function() {
    o == null || o(v);
  }, function(x) {
    return d(function(m) {
      var p = ae(m, 2), S = p[0], b = p[1];
      return x && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(m) {
        var p = m || [], S = ae(p, 2), b = S[0], g = b === void 0 ? 0 : b, _ = S[1], y = g - 1;
        return y === 0 ? (l(function() {
          (x || !s.opGet(c)) && (r == null || r(_, !1));
        }), null) : [g - 1, _];
      });
    };
  }, [c]), v;
}
var ap = {}, cp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", un = /* @__PURE__ */ new Map();
function lp(e) {
  un.set(e, (un.get(e) || 0) + 1);
}
function up(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Fn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Gt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var fp = 0;
function dp(e, t) {
  un.set(e, (un.get(e) || 0) - 1);
  var n = Array.from(un.keys()), r = n.filter(function(o) {
    var i = un.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > fp && r.forEach(function(o) {
    up(o, t), un.delete(o);
  });
}
var hp = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = F(F({}, i), n);
  return o && (s = o(s)), s;
}, uu = "token";
function pp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Jt(_r), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? ap : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(Ht(t)));
  }, t), x = dr(v), m = dr(l), p = f ? dr(f) : "", S = na(uu, [a, e.id, x, m, p], function() {
    var b, g = d ? d(v, l, e) : hp(v, l, e, u), _ = F({}, g), y = "";
    if (f) {
      var A = cu(g, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = ae(A, 2);
      g = E[0], y = E[1];
    }
    var P = tc(g, a);
    g._tokenKey = P, _._tokenKey = tc(_, a);
    var L = (b = f == null ? void 0 : f.key) !== null && b !== void 0 ? b : P;
    g._themeKey = L, lp(L);
    var W = "".concat(cp, "-").concat(mr(P));
    return g._hashId = W, [g, W, _, y, (f == null ? void 0 : f.key) || ""];
  }, function(b) {
    dp(b[0]._themeKey, o);
  }, function(b) {
    var g = ae(b, 4), _ = g[0], y = g[3];
    if (f && y) {
      var A = gn(y, mr("css-variables-".concat(_._themeKey)), {
        mark: gt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[Gt] = o, A.setAttribute(Fn, _._themeKey);
    }
  });
  return S;
}
var mp = function(t, n, r) {
  var o = ae(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(s, a, u, f, l);
  return [d, u, v];
}, xp = {
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
function mu(e) {
  return e.trim();
}
function oo(e, t, n) {
  return e.replace(t, n);
}
function Sp(e, t, n) {
  return e.indexOf(t, n);
}
function Pn(e, t) {
  return e.charCodeAt(t) | 0;
}
function zn(e, t, n) {
  return e.slice(t, n);
}
function Pt(e) {
  return e.length;
}
function wp(e) {
  return e.length;
}
function Fr(e, t) {
  return t.push(e), e;
}
var Ko = 1, Vn = 1, xu = 0, dt = 0, Me = 0, $n = "";
function oa(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ko, column: Vn, length: s, return: "", siblings: a };
}
function Ep() {
  return Me;
}
function Cp() {
  return Me = dt > 0 ? Pn($n, --dt) : 0, Vn--, Me === 10 && (Vn = 1, Ko--), Me;
}
function vt() {
  return Me = dt < xu ? Pn($n, dt++) : 0, Vn++, Me === 10 && (Vn = 1, Ko++), Me;
}
function Kt() {
  return Pn($n, dt);
}
function io() {
  return dt;
}
function Zo(e, t) {
  return zn($n, e, t);
}
function gr(e) {
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
function _p(e) {
  return Ko = Vn = 1, xu = Pt($n = e), dt = 0, [];
}
function Ap(e) {
  return $n = "", e;
}
function wi(e) {
  return mu(Zo(dt - 1, ns(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tp(e) {
  for (; (Me = Kt()) && Me < 33; )
    vt();
  return gr(e) > 2 || gr(Me) > 3 ? "" : " ";
}
function Op(e, t) {
  for (; --t && vt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Zo(e, io() + (t < 6 && Kt() == 32 && vt() == 32));
}
function ns(e) {
  for (; vt(); )
    switch (Me) {
      // ] ) " '
      case e:
        return dt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ns(Me);
        break;
      // (
      case 40:
        e === 41 && ns(e);
        break;
      // \
      case 92:
        vt();
        break;
    }
  return dt;
}
function Rp(e, t) {
  for (; vt() && e + Me !== 57; )
    if (e + Me === 84 && Kt() === 47)
      break;
  return "/*" + Zo(t, dt - 1) + "*" + ra(e === 47 ? e : vt());
}
function kp(e) {
  for (; !gr(Kt()); )
    vt();
  return Zo(e, dt);
}
function Pp(e) {
  return Ap(so("", null, null, null, [""], e = _p(e), 0, [0], e));
}
function so(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, x = 0, m = 1, p = 1, S = 1, b = 0, g = "", _ = o, y = i, A = r, E = g; p; )
    switch (x = b, b = vt()) {
      // (
      case 40:
        if (x != 108 && Pn(E, d - 1) == 58) {
          Sp(E += oo(wi(b), "&", "&\f"), "&\f", pu(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += wi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Tp(x);
        break;
      // \
      case 92:
        E += Op(io() - 1, 7);
        continue;
      // /
      case 47:
        switch (Kt()) {
          case 42:
          case 47:
            Fr(Ip(Rp(vt(), io()), t, n, c), c), (gr(x || 1) == 5 || gr(Kt() || 1) == 5) && Pt(E) && zn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = Pt(E) * S;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            S == -1 && (E = oo(E, /\f/g, "")), v > 0 && (Pt(E) - d || m === 0 && x === 47) && Fr(v > 32 ? ic(E + ";", r, n, d - 1, c) : ic(oo(E, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Fr(A = oc(E, t, n, l, u, o, a, g, _ = [], y = [], d, i), i), b === 123)
              if (u === 0)
                so(E, t, A, A, _, i, d, a, y);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Pn(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Pn(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? so(e, A, A, r && Fr(oc(e, A, A, 0, 0, o, a, g, o, _ = [], d, y), y), o, y, d, a, r ? _ : y) : so(E, A, A, A, [""], y, 0, a, y);
              }
        }
        l = u = v = 0, m = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Pt(E), v = x;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && Cp() == 125)
            continue;
        }
        switch (E += ra(b), b * m) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Pt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Kt() === 45 && (E += wi(vt())), f = Kt(), u = d = Pt(g = E += kp(io())), b++;
            break;
          // -
          case 45:
            x === 45 && Pt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function oc(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], x = wp(v), m = 0, p = 0, S = 0; m < r; ++m)
    for (var b = 0, g = zn(e, f + 1, f = pu(p = s[m])), _ = e; b < x; ++b)
      (_ = mu(p > 0 ? v[b] + " " + g : oo(g, /&\f/g, v[b]))) && (c[S++] = _);
  return oa(e, t, n, o === 0 ? du : a, c, l, u, d);
}
function Ip(e, t, n, r) {
  return oa(e, t, n, fu, ra(Ep()), zn(e, 2, -2), 0, r);
}
function ic(e, t, n, r, o) {
  return oa(e, t, n, hu, zn(e, 0, r), zn(e, r + 1, -1), r, o);
}
function rs(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Np(e, t, n, r) {
  switch (e.type) {
    case bp:
      if (e.children.length) break;
    case gp:
    case vp:
    case hu:
      return e.return = e.return || e.value;
    case fu:
      return "";
    case yp:
      return e.return = e.value + "{" + rs(e.children, r) + "}";
    case du:
      if (!Pt(e.value = e.props.join(","))) return "";
  }
  return Pt(n = rs(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function gu(e, t) {
  var n = t.path, r = t.parentSelectors;
  en(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jp = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Lp = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && gu("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", vn, yu = !0;
function Mp() {
  if (!vn && (vn = {}, Ut())) {
    var e = document.createElement("div");
    e.className = sc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      vn[a] = c;
    });
    var n = document.querySelector("style[".concat(sc, "]"));
    if (n) {
      var r;
      yu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Dp(e) {
  return Mp(), !!vn[e];
}
function Bp(e) {
  var t = vn[e], n = null;
  if (t && Ut())
    if (yu)
      n = vu;
    else {
      var r = document.querySelector("style[".concat(gt, '="').concat(vn[e], '"]'));
      r ? n = r.innerHTML : delete vn[e];
    }
  return [n, t];
}
var bu = "_skip_check_", Su = "_multi_value_";
function ao(e) {
  var t = rs(Pp(e), Np);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Fp(e) {
  return ye(e) === "object" && e && (bu in e || Su in e);
}
function ac(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Ht(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zp = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, v = n.linters, x = v === void 0 ? [] : v, m = "", p = {};
  function S(_) {
    var y = _.getName(a);
    if (!p[y]) {
      var A = e(_.style, n, {
        root: !1,
        parentSelectors: s
      }), E = ae(A, 1), P = E[0];
      p[y] = "@keyframes ".concat(_.getName(a)).concat(P);
    }
  }
  function b(_) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(A) {
      Array.isArray(A) ? b(A, y) : A && y.push(A);
    }), y;
  }
  var g = b(Array.isArray(t) ? t : [t]);
  return g.forEach(function(_) {
    var y = typeof _ == "string" && !o ? {} : _;
    if (typeof y == "string")
      m += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var A = f.reduce(function(E, P) {
        var L;
        return (P == null || (L = P.visit) === null || L === void 0 ? void 0 : L.call(P, E)) || E;
      }, y);
      Object.keys(A).forEach(function(E) {
        var P = A[E];
        if (ye(P) === "object" && P && (E !== "animationName" || !P._keyframe) && !Fp(P)) {
          var L = !1, W = E.trim(), ee = !1;
          (o || i) && a ? W.startsWith("@") ? L = !0 : W === "&" ? W = ac("", a, u) : W = ac(E, a, u) : o && !a && (W === "&" || W === "") && (W = "", ee = !0);
          var $ = e(P, n, {
            root: ee,
            injectHash: L,
            parentSelectors: [].concat(Ht(s), [W])
          }), N = ae($, 2), z = N[0], q = N[1];
          p = F(F({}, p), q), m += "".concat(W).concat(z);
        } else {
          let G = function(Z, re) {
            process.env.NODE_ENV !== "production" && (ye(P) !== "object" || !(P != null && P[bu])) && [jp, Lp].concat(Ht(x)).forEach(function(te) {
              return te(Z, re, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Z.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = re;
            !xp[Z] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Z === "animationName" && re !== null && re !== void 0 && re._keyframe && (S(re), K = re.getName(a)), m += "".concat(oe, ":").concat(K, ";");
          };
          var X, J = (X = P == null ? void 0 : P.value) !== null && X !== void 0 ? X : P;
          ye(P) === "object" && P !== null && P !== void 0 && P[Su] && Array.isArray(J) ? J.forEach(function(Z) {
            G(E, Z);
          }) : G(E, J);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function wu(e, t) {
  return mr("".concat(e.join("%")).concat(t));
}
function Vp() {
  return null;
}
var Eu = "style";
function os(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(_r), d = u.autoClear, f = u.mock, v = u.defaultCache, x = u.hashPriority, m = u.container, p = u.ssrInline, S = u.transformers, b = u.linters, g = u.cache, _ = u.layer, y = n._tokenKey, A = [y];
  _ && A.push("layer"), A.push.apply(A, Ht(r));
  var E = es;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var P = na(
    Eu,
    A,
    // Create cache if needed
    function() {
      var N = A.join("|");
      if (Dp(N)) {
        var z = Bp(N), q = ae(z, 2), X = q[0], J = q[1];
        if (X)
          return [X, y, J, {}, a, l];
      }
      var G = t(), Z = zp(G, {
        hashId: o,
        hashPriority: x,
        layer: _ ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), re = ae(Z, 2), oe = re[0], K = re[1], te = ao(oe), fe = wu(A, te);
      return [te, y, fe, K, a, l];
    },
    // Remove cache if no need
    function(N, z) {
      var q = ae(N, 3), X = q[2];
      (z || d) && es && su(X, {
        mark: gt
      });
    },
    // Effect: Inject style here
    function(N) {
      var z = ae(N, 4), q = z[0];
      z[1];
      var X = z[2], J = z[3];
      if (E && q !== vu) {
        var G = {
          mark: gt,
          prepend: _ ? !1 : "queue",
          attachTo: m,
          priority: l
        }, Z = typeof s == "function" ? s() : s;
        Z && (G.csp = {
          nonce: Z
        });
        var re = [], oe = [];
        Object.keys(J).forEach(function(te) {
          te.startsWith("@layer") ? re.push(te) : oe.push(te);
        }), re.forEach(function(te) {
          gn(ao(J[te]), "_layer-".concat(te), F(F({}, G), {}, {
            prepend: !0
          }));
        });
        var K = gn(q, X, G);
        K[Gt] = g.instanceId, K.setAttribute(Fn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, A.join("|")), oe.forEach(function(te) {
          gn(ao(J[te]), "_effect-".concat(te), G);
        });
      }
    }
  ), L = ae(P, 3), W = L[0], ee = L[1], $ = L[2];
  return function(N) {
    var z;
    if (!p || E || !v)
      z = /* @__PURE__ */ w.createElement(Vp, null);
    else {
      var q;
      z = /* @__PURE__ */ w.createElement("style", Lt({}, (q = {}, H(q, Fn, ee), H(q, gt, $), q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, z, N);
  };
}
var Hp = function(t, n, r) {
  var o = ae(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var v = i, x = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = wo(i, s, a, x, f), c && Object.keys(c).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var p = ao(c[m]), S = wo(p, s, "_effect-".concat(m), x, f);
      m.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [u, a, v];
}, Cu = "cssVar", Up = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = Jt(_r), d = u.cache.instanceId, f = u.container, v = a._tokenKey, x = [].concat(Ht(t.path), [r, l, v]), m = na(Cu, x, function() {
    var p = n(), S = cu(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ae(S, 2), g = b[0], _ = b[1], y = wu(x, _);
    return [g, _, y, r];
  }, function(p) {
    var S = ae(p, 3), b = S[2];
    es && su(b, {
      mark: gt
    });
  }, function(p) {
    var S = ae(p, 3), b = S[1], g = S[2];
    if (b) {
      var _ = gn(b, g, {
        mark: gt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      _[Gt] = d, _.setAttribute(Fn, r);
    }
  });
  return m;
}, qp = function(t, n, r) {
  var o = ae(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = wo(i, a, s, d, l);
  return [u, s, f];
}, or;
or = {}, H(or, Eu, Hp), H(or, uu, mp), H(or, Cu, qp);
var _u = /* @__PURE__ */ function() {
  function e(t, n) {
    bt(this, e), H(this, "name", void 0), H(this, "style", void 0), H(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return St(e, [{
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
var ia = /* @__PURE__ */ Fs({});
function Wp(e) {
  return tu(e) || Zl(e) || Qs(e) || nu();
}
function is(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Au(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Wp(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Ht(e) : a = F({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, n, r), a;
}
function Ei(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !is(e, t.slice(0, -1)) ? e : Au(e, t, n, r);
}
function Xp(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function cc(e) {
  return Array.isArray(e) ? [] : {};
}
var Yp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $p() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = cc(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = is(o, s), u = Array.isArray(l);
      if (u || Xp(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = is(r, s);
          u ? r = Ei(r, s, []) : (!d || ye(d) !== "object") && (r = Ei(r, s, cc(l))), Yp(l).forEach(function(f) {
            i([].concat(Ht(s), [f]), c);
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
let zt = null;
function Gp() {
  zt = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (e, t, n) => {
  en(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Gp();
});
const Ou = /* @__PURE__ */ w.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = w.useContext(Ou), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = zt;
        zt || (zt = {}), zt[e] = zt[e] || [], zt[e].includes(i || "") || zt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", zt);
      } else
        process.env.NODE_ENV !== "production" && sa(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Tu, e;
}, Jo = sa, Kp = /* @__PURE__ */ Fs(void 0), it = "${label} is not a valid ${type}", Qo = {
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
        string: it,
        method: it,
        array: it,
        object: it,
        number: it,
        date: it,
        boolean: it,
        integer: it,
        float: it,
        regexp: it,
        email: it,
        url: it,
        hex: it
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
const lc = () => co.reduce((e, t) => Object.assign(Object.assign({}, e), t), Qo.Modal);
function Zp(e) {
  if (e) {
    const t = Object.assign({}, e);
    return co.push(t), lc(), () => {
      co = co.filter((n) => n !== t), lc();
    };
  }
  Object.assign({}, Qo.Modal);
}
const Ru = /* @__PURE__ */ Fs(void 0), ku = "internalMark", Pu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = Gn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === ku, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Zp(t == null ? void 0 : t.Modal), [t]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ w.createElement(Ru.Provider, {
    value: o
  }, n);
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
}), Ve = Math.round;
function Ci(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const uc = (e, t, n) => n === 0 ? e : e / 100;
function ir(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Ie {
  constructor(t) {
    H(this, "isValid", !0), H(this, "r", 0), H(this, "g", 0), H(this, "b", 0), H(this, "a", 1), H(this, "_h", void 0), H(this, "_s", void 0), H(this, "_l", void 0), H(this, "_v", void 0), H(this, "_max", void 0), H(this, "_min", void 0), H(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Ie)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = ir(t.r), this.g = ir(t.g), this.b = ir(t.b), this.a = typeof t.a == "number" ? ir(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Ve(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => Ve((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = Ve(this.a * 255).toString(16);
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
    const t = this.getHue(), n = Ve(this.getSaturation() * 100), r = Ve(this.getLightness() * 100);
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
    return o[t] = ir(n, r), o;
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
      const f = Ve(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = Ve((i + d) * 255), this.g = Ve((s + d) * 255), this.b = Ve((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ve(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = Ve(r * (1 - n) * 255), u = Ve(r * (1 - n * c) * 255), d = Ve(r * (1 - n * (1 - c)) * 255);
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
  fromHsvString(t) {
    const n = Ci(t, uc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ci(t, uc);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Ci(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ve(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var zr = 2, fc = 0.16, Jp = 0.05, Qp = 0.05, em = 0.15, Nu = 5, ju = 4, tm = [{
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
function dc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - zr * t : Math.round(e.h) + zr * t : r = n ? Math.round(e.h) + zr * t : Math.round(e.h) - zr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function hc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - fc * t : t === ju ? r = e.s + fc : r = e.s + Jp * t, r > 1 && (r = 1), n && t === Nu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function pc(e, t, n) {
  var r;
  return n ? r = e.v + Qp * t : r = e.v - em * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Ie(e), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
    var s = new Ie({
      h: dc(o, i, !0),
      s: hc(o, i, !0),
      v: pc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Ie({
      h: dc(o, a),
      s: hc(o, a),
      v: pc(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? tm.map(function(l) {
    var u = l.index, d = l.amount;
    return new Ie(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var _i = {
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
var ps = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ps.primary = ps[5];
var ms = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ms.primary = ms[5];
var xs = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xs.primary = xs[5];
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
  geekblue: ps,
  purple: ms,
  magenta: xs,
  grey: gs
};
function nm(e, t) {
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
  } = e, d = n(c), f = n(o), v = n(i), x = n(s), m = n(a), p = r(l, u), S = e.colorLink || e.colorInfo, b = n(S), g = new Ie(x[1]).mix(new Ie(x[3]), 50).toHexString();
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
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: x[1],
    colorErrorBgHover: x[2],
    colorErrorBgFilledHover: g,
    colorErrorBgActive: x[3],
    colorErrorBorder: x[3],
    colorErrorBorderHover: x[4],
    colorErrorHover: x[5],
    colorError: x[6],
    colorErrorActive: x[7],
    colorErrorTextHover: x[8],
    colorErrorText: x[9],
    colorErrorTextActive: x[10],
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Ie("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const rm = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function om(e) {
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
  }, rm(r));
}
const im = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function sm(e) {
  return (e + 8) / e;
}
function am(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: sm(n)
  }));
}
const cm = (e) => {
  const t = am(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function lm(e) {
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
const lt = (e, t) => new Ie(e).setA(t).toRgbString(), sr = (e, t) => new Ie(e).darken(t).toHexString(), um = (e) => {
  const t = yr(e);
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
}, fm = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: lt(r, 0.88),
    colorTextSecondary: lt(r, 0.65),
    colorTextTertiary: lt(r, 0.45),
    colorTextQuaternary: lt(r, 0.25),
    colorFill: lt(r, 0.15),
    colorFillSecondary: lt(r, 0.06),
    colorFillTertiary: lt(r, 0.04),
    colorFillQuaternary: lt(r, 0.02),
    colorBgSolid: lt(r, 1),
    colorBgSolidHover: lt(r, 0.75),
    colorBgSolidActive: lt(r, 0.95),
    colorBgLayout: sr(n, 4),
    colorBgContainer: sr(n, 0),
    colorBgElevated: sr(n, 0),
    colorBgSpotlight: lt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(n, 15),
    colorBorderSecondary: sr(n, 6)
  };
};
function dm(e) {
  _i.pink = _i.magenta, Ai.pink = Ai.magenta;
  const t = Object.keys(Iu).map((n) => {
    const r = e[n] === _i[n] ? Ai[n] : yr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), nm(e, {
    generateColorPalettes: um,
    generateNeutralColorPalettes: fm
  })), cm(e.fontSize)), lm(e)), im(e)), om(e));
}
const Lu = Qi(dm), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Mu = /* @__PURE__ */ Ne.createContext(vs), ys = "ant", aa = "anticon", hm = (e, t) => t || (e ? `${ys}-${e}` : ys), Qt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hm,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = Qt, mc = {};
function Du(e) {
  const t = w.useContext(Qt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: mc,
    styles: mc
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const pm = `-ant-${Date.now()}-${Math.random()}`;
function mm(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ie(s), l = yr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Ie(t.primaryColor), a = yr(s.toRgbString());
    a.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Ie(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function xm(e, t) {
  const n = mm(e, t);
  Ut() ? gn(n, `${pm}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ w.createContext(!1), gm = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(bs);
  return /* @__PURE__ */ w.createElement(bs.Provider, {
    value: n ?? r
  }, t);
}, br = /* @__PURE__ */ w.createContext(void 0), vm = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(br);
  return /* @__PURE__ */ w.createElement(br.Provider, {
    value: n || r
  }, t);
};
function ym() {
  const e = Jt(bs), t = Jt(br);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Bu = /* @__PURE__ */ St(function e() {
  bt(this, e);
}), Fu = "CALC_UNIT", bm = new RegExp(Fu, "g");
function Ti(e) {
  return typeof e == "number" ? "".concat(e).concat(Fu) : e;
}
var Sm = /* @__PURE__ */ function(e) {
  Cr(n, e);
  var t = Yo(n);
  function n(r, o) {
    var i;
    bt(this, n), i = t.call(this), H(xn(i), "result", ""), H(xn(i), "unitlessCssVar", void 0), H(xn(i), "lowPriority", void 0);
    var s = ye(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return St(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Ti(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Ti(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(bm, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Bu), wm = /* @__PURE__ */ function(e) {
  Cr(n, e);
  var t = Yo(n);
  function n(r) {
    var o;
    return bt(this, n), o = t.call(this), H(xn(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return St(n, [{
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
}(Bu), Em = function(t, n) {
  var r = t === "css" ? Sm : wm;
  return function(o) {
    return new r(o, n);
  };
}, xc = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ss(e) {
  var t = w.useRef();
  t.current = e;
  var n = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function ws(e) {
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
function gc(e, t, n, r) {
  var o = F({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && en(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = F(F({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Es = !0;
function ei() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!zu)
    return Object.assign.apply(Object, [{}].concat(t));
  Es = !1;
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
  }), Es = !0, r;
}
var vc = {};
function Cm() {
}
var _m = function(t) {
  var n, r = t, o = Cm;
  return zu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (Es) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    vc[s] = {
      global: Array.from(n),
      component: F(F({}, (c = vc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function yc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(ei(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Am(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return So(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return So(i);
      }).join(","), ")");
    }
  };
}
var Tm = 1e3 * 60 * 10, Om = /* @__PURE__ */ function() {
  function e() {
    bt(this, e), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
  }
  return St(e, [{
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
          r - o > Tm && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), bc = new Om();
function Rm(e, t) {
  return Ne.useMemo(function() {
    var n = bc.get(t);
    if (n)
      return n;
    var r = e();
    return bc.set(t, r), r;
  }, t);
}
var km = function() {
  return {};
};
function Pm(e) {
  var t = e.useCSP, n = t === void 0 ? km : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, x, m) {
    var p = Array.isArray(f) ? f[0] : f;
    function S(P) {
      return "".concat(String(p)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var b = (m == null ? void 0 : m.unitless) || {}, g = typeof a == "function" ? a(f) : {}, _ = F(F({}, g), {}, H({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(P) {
      _[S(P)] = b[P];
    });
    var y = F(F({}, m), {}, {
      unitless: _,
      prefixToken: S
    }), A = u(f, v, x, y), E = l(p, x, y);
    return function(P) {
      var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, W = A(P, L), ee = ae(W, 2), $ = ee[1], N = E(L), z = ae(N, 2), q = z[0], X = z[1];
      return [q, $, X];
    };
  }
  function l(f, v, x) {
    var m = x.unitless, p = x.injectStyle, S = p === void 0 ? !0 : p, b = x.prefixToken, g = x.ignore, _ = function(E) {
      var P = E.rootCls, L = E.cssVar, W = L === void 0 ? {} : L, ee = r(), $ = ee.realToken;
      return Up({
        path: [f],
        prefix: W.prefix,
        key: W.key,
        unitless: m,
        ignore: g,
        token: $,
        scope: P
      }, function() {
        var N = yc(f, $, v), z = gc(f, $, N, {
          deprecatedTokens: x == null ? void 0 : x.deprecatedTokens
        });
        return Object.keys(N).forEach(function(q) {
          z[b(q)] = z[q], delete z[q];
        }), z;
      }), null;
    }, y = function(E) {
      var P = r(), L = P.cssVar;
      return [function(W) {
        return S && L ? /* @__PURE__ */ Ne.createElement(Ne.Fragment, null, /* @__PURE__ */ Ne.createElement(_, {
          rootCls: E,
          cssVar: L,
          component: f
        }), W) : W;
      }, L == null ? void 0 : L.key];
    };
    return y;
  }
  function u(f, v, x) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(f) ? f : [f, f], S = ae(p, 1), b = S[0], g = p.join("-"), _ = e.layer || {
      name: "antd"
    };
    return function(y) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, E = r(), P = E.theme, L = E.realToken, W = E.hashId, ee = E.token, $ = E.cssVar, N = o(), z = N.rootPrefixCls, q = N.iconPrefixCls, X = n(), J = $ ? "css" : "js", G = Rm(function() {
        var fe = /* @__PURE__ */ new Set();
        return $ && Object.keys(m.unitless || {}).forEach(function(le) {
          fe.add(ro(le, $.prefix)), fe.add(ro(le, xc(b, $.prefix)));
        }), Em(J, fe);
      }, [J, b, $ == null ? void 0 : $.prefix]), Z = Am(J), re = Z.max, oe = Z.min, K = {
        theme: P,
        token: ee,
        hashId: W,
        nonce: function() {
          return X.nonce;
        },
        clientOnly: m.clientOnly,
        layer: _,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && os(F(F({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", z]
      }), function() {
        return i(ee, {
          prefix: {
            rootPrefixCls: z,
            iconPrefixCls: q
          },
          csp: X
        });
      });
      var te = os(F(F({}, K), {}, {
        path: [g, y, q]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var fe = _m(ee), le = fe.token, de = fe.flush, pe = yc(b, L, x), k = ".".concat(y), U = gc(b, L, pe, {
          deprecatedTokens: m.deprecatedTokens
        });
        $ && pe && ye(pe) === "object" && Object.keys(pe).forEach(function(ne) {
          pe[ne] = "var(".concat(ro(ne, xc(b, $.prefix)), ")");
        });
        var D = ei(le, {
          componentCls: k,
          prefixCls: y,
          iconCls: ".".concat(q),
          antCls: ".".concat(z),
          calc: G,
          // @ts-ignore
          max: re,
          // @ts-ignore
          min: oe
        }, $ ? pe : U), M = v(D, {
          hashId: W,
          prefixCls: y,
          rootPrefixCls: z,
          iconPrefixCls: q
        });
        de(b, U);
        var O = typeof s == "function" ? s(D, y, A, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : O, M];
      });
      return [te, W];
    };
  }
  function d(f, v, x) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(f, v, x, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), S = function(g) {
      var _ = g.prefixCls, y = g.rootCls, A = y === void 0 ? _ : y;
      return p(_, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Im = "5.24.6";
function Oi(e) {
  return e >= 0 && e <= 255;
}
function Vr(e, t) {
  const {
    r: n,
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
  } = new Ie(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (Oi(u) && Oi(d) && Oi(f))
      return new Ie({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ie({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Nm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Vu(e) {
  const {
    override: t
  } = e, n = Nm(e, ["override"]), r = Object.assign({}, t);
  Object.keys(vr).forEach((f) => {
    delete r[f];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const f = "0s";
    o.motionDurationFast = f, o.motionDurationMid = f, o.motionDurationSlow = f;
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
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
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
var Sc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
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
}, jm = {
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
}, Lm = {
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
}, Uu = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = Sc(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Vu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = Sc(l, ["theme"]);
    let f = d;
    u && (f = Uu(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[c] = f;
  }), s;
};
function ca() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = Ne.useContext(Mu), i = `${Im}-${t || ""}`, s = n || Lu, [a, c, l] = pp(s, [vr, e], {
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
      ignore: jm,
      preserve: Lm
    }
  });
  return [s, l, t ? c : "", a, o];
}
const qu = function(e) {
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
}, Mm = () => ({
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
}), Dm = (e) => ({
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
}), Bm = (e, t, n, r) => {
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
}, Wu = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Mm()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = Pm({
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
    const [e, t, n, r, o] = ca();
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
    const r = Dm(e);
    return [r, {
      "&": r
    }, Wu((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : aa)];
  },
  getCommonStyle: Bm,
  getCompUnitless: () => Hu
}), Fm = (e, t) => {
  const [n, r] = ca();
  return os({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Wu(e)]);
}, zm = Object.assign({}, w), {
  useId: wc
} = zm, Vm = () => "", Hm = typeof wc > "u" ? Vm : wc;
function Um(e, t, n) {
  var r, o;
  const i = Gn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, vs), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = Hm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yl(() => {
    var l, u;
    if (!e)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((x) => {
      d[x] = Object.assign(Object.assign({}, d[x]), e.components[x]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (l, u) => l.some((d, f) => {
    const v = u[f];
    return !zh(d, v, !0);
  }));
}
var qm = ["children"], Xu = /* @__PURE__ */ w.createContext({});
function Wm(e) {
  var t = e.children, n = xr(e, qm);
  return /* @__PURE__ */ w.createElement(Xu.Provider, {
    value: n
  }, t);
}
var Xm = /* @__PURE__ */ function(e) {
  Cr(n, e);
  var t = Yo(n);
  function n() {
    return bt(this, n), t.apply(this, arguments);
  }
  return St(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function Ym(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = ae(t, 2), r = n[1], o = w.useRef(e), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Yt = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", mt = "prepare", On = "start", Rn = "active", ua = "end", Yu = "prepared";
function Cc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function $m(e, t) {
  var n = {
    animationend: Cc("Animation", "AnimationEnd"),
    transitionend: Cc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Gm = $m(Ut(), typeof window < "u" ? window : {}), $u = {};
if (Ut()) {
  var Km = document.createElement("div");
  $u = Km.style;
}
var Wr = {};
function Gu(e) {
  if (Wr[e])
    return Wr[e];
  var t = Gm[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in $u)
        return Wr[e] = t[i], Wr[e];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), _c = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(e, t) {
  if (!e) return null;
  if (ye(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Zm = function(e) {
  var t = ze();
  function n(o) {
    o && (o.removeEventListener(Ac, e), o.removeEventListener(_c, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Ac, e), o.addEventListener(_c, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Qu = Ut() ? rd : Qe;
const Jm = function() {
  var e = w.useRef(null);
  function t() {
    bo.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = bo(function() {
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
var Qm = [mt, On, Rn, ua], ex = [mt, Yu], ef = !1, tx = !0;
function tf(e) {
  return e === Rn || e === ua;
}
const nx = function(e, t, n) {
  var r = ws(Ec), o = ae(r, 2), i = o[0], s = o[1], a = Jm(), c = ae(a, 2), l = c[0], u = c[1];
  function d() {
    s(mt, !0);
  }
  var f = t ? ex : Qm;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = f.indexOf(i), x = f[v + 1], m = n(i);
      m === ef ? s(x, !0) : x && l(function(p) {
        function S() {
          p.isCanceled() || s(x, !0);
        }
        m === !0 ? S() : Promise.resolve(m).then(S);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function rx(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, x = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, g = r.onEnterActive, _ = r.onLeaveActive, y = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, P = r.onVisibleChanged, L = ws(), W = ae(L, 2), ee = W[0], $ = W[1], N = Ym(Yt), z = ae(N, 2), q = z[0], X = z[1], J = ws(null), G = ae(J, 2), Z = G[0], re = G[1], oe = q(), K = ze(!1), te = ze(null);
  function fe() {
    return n();
  }
  var le = ze(!1);
  function de() {
    X(Yt), re(null, !0);
  }
  var pe = Ss(function(Pe) {
    var be = q();
    if (be !== Yt) {
      var qe = fe();
      if (!(Pe && !Pe.deadline && Pe.target !== qe)) {
        var ht = le.current, at;
        be === Hr && ht ? at = y == null ? void 0 : y(qe, Pe) : be === Ur && ht ? at = A == null ? void 0 : A(qe, Pe) : be === qr && ht && (at = E == null ? void 0 : E(qe, Pe)), ht && at !== !1 && de();
      }
    }
  }), k = Zm(pe), U = ae(k, 1), D = U[0], M = function(be) {
    switch (be) {
      case Hr:
        return H(H(H({}, mt, f), On, m), Rn, b);
      case Ur:
        return H(H(H({}, mt, v), On, p), Rn, g);
      case qr:
        return H(H(H({}, mt, x), On, S), Rn, _);
      default:
        return {};
    }
  }, O = w.useMemo(function() {
    return M(oe);
  }, [oe]), ne = nx(oe, !e, function(Pe) {
    if (Pe === mt) {
      var be = O[mt];
      return be ? be(fe()) : ef;
    }
    if (we in O) {
      var qe;
      re(((qe = O[we]) === null || qe === void 0 ? void 0 : qe.call(O, fe(), null)) || null);
    }
    return we === Rn && oe !== Yt && (D(fe()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      pe({
        deadline: !0
      });
    }, u))), we === Yu && de(), tx;
  }), j = ae(ne, 2), ke = j[0], we = j[1], st = tf(we);
  le.current = st;
  var Et = ze(null);
  Qu(function() {
    if (!(K.current && Et.current === t)) {
      $(t);
      var Pe = K.current;
      K.current = !0;
      var be;
      !Pe && t && a && (be = Hr), Pe && t && i && (be = Ur), (Pe && !t && l || !Pe && d && !t && l) && (be = qr);
      var qe = M(be);
      be && (e || qe[mt]) ? (X(be), ke()) : X(Yt), Et.current = t;
    }
  }, [t]), Qe(function() {
    // Cancel appear
    (oe === Hr && !a || // Cancel enter
    oe === Ur && !i || // Cancel leave
    oe === qr && !l) && X(Yt);
  }, [a, i, l]), Qe(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var rt = w.useRef(!1);
  Qe(function() {
    ee && (rt.current = !0), ee !== void 0 && oe === Yt && ((rt.current || ee) && (P == null || P(ee)), rt.current = !0);
  }, [ee, oe]);
  var Ct = Z;
  return O[mt] && we === On && (Ct = F({
    transition: "none"
  }, Ct)), [oe, we, Ct, ee ?? t];
}
function ox(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, x = o.eventProps, m = w.useContext(Xu), p = m.motion, S = n(o, p), b = ze(), g = ze();
    function _() {
      try {
        return b.current instanceof HTMLElement ? b.current : Ch(g.current);
      } catch {
        return null;
      }
    }
    var y = rx(S, a, _, o), A = ae(y, 4), E = A[0], P = A[1], L = A[2], W = A[3], ee = w.useRef(W);
    W && (ee.current = !0);
    var $ = w.useCallback(function(G) {
      b.current = G, $l(i, G);
    }, [i]), N, z = F(F({}, x), {}, {
      visible: a
    });
    if (!d)
      N = null;
    else if (E === Yt)
      W ? N = d(F({}, z), $) : !l && ee.current && v ? N = d(F(F({}, z), {}, {
        className: v
      }), $) : u || !l && !v ? N = d(F(F({}, z), {}, {
        style: {
          display: "none"
        }
      }), $) : N = null;
    else {
      var q;
      P === mt ? q = "prepare" : tf(P) ? q = "active" : P === On && (q = "start");
      var X = Tc(f, "".concat(E, "-").concat(q));
      N = d(F(F({}, z), {}, {
        className: $e(Tc(f, E), H(H({}, X, X && q), f, typeof f == "string")),
        style: L
      }), $);
    }
    if (/* @__PURE__ */ w.isValidElement(N) && kh(N)) {
      var J = Ph(N);
      J || (N = /* @__PURE__ */ w.cloneElement(N, {
        ref: $
      }));
    }
    return /* @__PURE__ */ w.createElement(Xm, {
      ref: g
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = ox(Ju);
var Cs = "add", _s = "keep", As = "remove", Ri = "removed";
function ix(e) {
  var t;
  return e && ye(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, F(F({}, t), {}, {
    key: String(t.key)
  });
}
function Ts() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(ix);
}
function sx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = Ts(e), s = Ts(t);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(v) {
          return F(F({}, v), {}, {
            status: Cs
          });
        })), r = d), n.push(F(F({}, f), {}, {
          status: _s
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(F(F({}, l), {}, {
      status: As
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return F(F({}, l), {}, {
      status: Cs
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
      var d = u.key, f = u.status;
      return d !== l || f !== As;
    }), n.forEach(function(u) {
      u.key === l && (u.status = _s);
    });
  }), n;
}
var ax = ["component", "children", "onVisibleChanged", "onAllRemoved"], cx = ["status"], lx = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ux(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, n = /* @__PURE__ */ function(r) {
    Cr(i, r);
    var o = Yo(i);
    function i() {
      var s;
      bt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), H(xn(s), "state", {
        keyEntities: []
      }), H(xn(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(v) {
            return v.key !== u ? v : F(F({}, v), {}, {
              status: Ri
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = s.state.keyEntities, f = d.filter(function(v) {
            var x = v.status;
            return x !== Ri;
          }).length;
          f === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return St(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = xr(l, ax), x = u || w.Fragment, m = {};
        return lx.forEach(function(p) {
          m[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ w.createElement(x, v, c.map(function(p, S) {
          var b = p.status, g = xr(p, cx), _ = b === Cs || b === _s;
          return /* @__PURE__ */ w.createElement(t, Lt({}, m, {
            key: g.key,
            visible: _,
            eventProps: g,
            onVisibleChanged: function(A) {
              f == null || f(A, {
                key: g.key
              }), A || a.removeKey(g.key);
            }
          }), function(y, A) {
            return d(F(F({}, y), {}, {
              index: S
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = Ts(l), f = sx(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var x = u.find(function(m) {
              var p = m.key;
              return v.key === p;
            });
            return !(x && x.status === Ri && v.status === As);
          })
        };
      }
    }]), i;
  }(w.Component);
  return H(n, "defaultProps", {
    component: "div"
  }), n;
}
ux(Ju);
function fx(e) {
  const {
    children: t
  } = e, [, n] = ca(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(Wm, {
    motion: r
  }, t) : t;
}
const rf = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Gn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (rf.displayName = "PropWarning");
const dx = process.env.NODE_ENV !== "production" ? rf : () => null;
var hx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Os = !1;
process.env.NODE_ENV;
const px = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let of;
function mx() {
  return of || ys;
}
function xx(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const gx = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (of = t), r && xx(r) && (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), xm(mx(), r));
}, vx = (e) => {
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
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: x,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: S,
    iconPrefixCls: b,
    theme: g,
    componentDisabled: _,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: L,
    cascader: W,
    collapse: ee,
    typography: $,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: X,
    skeleton: J,
    steps: G,
    image: Z,
    layout: re,
    list: oe,
    mentions: K,
    modal: te,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: k,
    pagination: U,
    input: D,
    textArea: M,
    empty: O,
    badge: ne,
    radio: j,
    rate: ke,
    switch: we,
    transfer: st,
    avatar: Et,
    message: rt,
    tag: Ct,
    table: Pe,
    card: be,
    tabs: qe,
    timeline: ht,
    timePicker: at,
    upload: nn,
    notification: rn,
    tree: wn,
    colorPicker: on,
    datePicker: B,
    rangePicker: T,
    flex: je,
    wave: Be,
    dropdown: Ge,
    warning: Ee,
    tour: ot,
    tooltip: _t,
    popover: At,
    popconfirm: En,
    floatButtonGroup: Tt,
    variant: Mt,
    inputNumber: Dt,
    treeSelect: Xe
  } = e, Ke = w.useCallback((_e, h) => {
    const {
      prefixCls: R
    } = e;
    if (h)
      return h;
    const I = R || S.getPrefixCls("");
    return _e ? `${I}-${_e}` : I;
  }, [S.getPrefixCls, e.prefixCls]), ct = b || S.iconPrefixCls || aa, Ot = n || S.csp;
  Fm(ct, Ot);
  const sn = Um(g, S.theme, {
    prefixCls: Ke("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!sn);
  const Cn = {
    csp: Ot,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: x ?? v,
    popupOverflow: m,
    getPrefixCls: Ke,
    iconPrefixCls: ct,
    theme: sn,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: L,
    cascader: W,
    collapse: ee,
    typography: $,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: X,
    skeleton: J,
    steps: G,
    image: Z,
    input: D,
    textArea: M,
    layout: re,
    list: oe,
    mentions: K,
    modal: te,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: k,
    pagination: U,
    empty: O,
    badge: ne,
    radio: j,
    rate: ke,
    switch: we,
    transfer: st,
    avatar: Et,
    message: rt,
    tag: Ct,
    table: Pe,
    card: be,
    tabs: qe,
    timeline: ht,
    timePicker: at,
    upload: nn,
    notification: rn,
    tree: wn,
    colorPicker: on,
    datePicker: B,
    rangePicker: T,
    flex: je,
    wave: Be,
    dropdown: Ge,
    warning: Ee,
    tour: ot,
    tooltip: _t,
    popover: At,
    popconfirm: En,
    floatButtonGroup: Tt,
    variant: Mt,
    inputNumber: Dt,
    treeSelect: Xe
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const qt = Object.assign({}, S);
  Object.keys(Cn).forEach((_e) => {
    Cn[_e] !== void 0 && (qt[_e] = Cn[_e]);
  }), px.forEach((_e) => {
    const h = e[_e];
    h && (qt[_e] = h);
  }), typeof r < "u" && (qt.button = Object.assign({
    autoInsertSpace: r
  }, qt.button));
  const Wt = Yl(() => qt, qt, (_e, h) => {
    const R = Object.keys(_e), I = Object.keys(h);
    return R.length !== I.length || R.some((Y) => _e[Y] !== h[Y]);
  }), {
    layer: er
  } = w.useContext(_r), Or = w.useMemo(() => ({
    prefixCls: ct,
    csp: Ot,
    layer: er ? "antd" : void 0
  }), [ct, Ot, er]);
  let Fe = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(dx, {
    dropdownMatchSelectWidth: v
  }), t);
  const Rr = w.useMemo(() => {
    var _e, h, R, I;
    return $p(((_e = Qo.Form) === null || _e === void 0 ? void 0 : _e.defaultValidateMessages) || {}, ((R = (h = Wt.locale) === null || h === void 0 ? void 0 : h.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((I = Wt.form) === null || I === void 0 ? void 0 : I.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Wt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Rr).length > 0 && (Fe = /* @__PURE__ */ w.createElement(Kp.Provider, {
    value: Rr
  }, Fe)), a && (Fe = /* @__PURE__ */ w.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, Fe)), Fe = /* @__PURE__ */ w.createElement(ia.Provider, {
    value: Or
  }, Fe), c && (Fe = /* @__PURE__ */ w.createElement(vm, {
    size: c
  }, Fe)), Fe = /* @__PURE__ */ w.createElement(fx, null, Fe);
  const li = w.useMemo(() => {
    const _e = sn || {}, {
      algorithm: h,
      token: R,
      components: I,
      cssVar: Y
    } = _e, he = hx(_e, ["algorithm", "token", "components", "cssVar"]), me = h && (!Array.isArray(h) || h.length > 0) ? Qi(h) : Lu, ce = {};
    Object.entries(I || {}).forEach((We) => {
      let [Ce, Ae] = We;
      const Te = Object.assign({}, Ae);
      "algorithm" in Te && (Te.algorithm === !0 ? Te.theme = me : (Array.isArray(Te.algorithm) || typeof Te.algorithm == "function") && (Te.theme = Qi(Te.algorithm)), delete Te.algorithm), ce[Ce] = Te;
    });
    const se = Object.assign(Object.assign({}, vr), R);
    return Object.assign(Object.assign({}, he), {
      theme: me,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: Y
    });
  }, [sn]);
  return g && (Fe = /* @__PURE__ */ w.createElement(Mu.Provider, {
    value: li
  }, Fe)), Wt.warning && (Fe = /* @__PURE__ */ w.createElement(Ou.Provider, {
    value: Wt.warning
  }, Fe)), _ !== void 0 && (Fe = /* @__PURE__ */ w.createElement(gm, {
    disabled: _
  }, Fe)), /* @__PURE__ */ w.createElement(Qt.Provider, {
    value: Wt
  }, Fe);
}, Kn = (e) => {
  const t = w.useContext(Qt), n = w.useContext(Ru);
  return /* @__PURE__ */ w.createElement(vx, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
Kn.ConfigContext = Qt;
Kn.SizeContext = br;
Kn.config = gx;
Kn.useConfig = ym;
Object.defineProperty(Kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), br)
});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
var yx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function sf(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function bx(e) {
  return sf(e) instanceof ShadowRoot;
}
function Sx(e) {
  return bx(e) ? sf(e) : null;
}
function wx(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Ex(e, t) {
  en(e, "[@ant-design/icons] ".concat(t));
}
function Oc(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function Rc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[wx(n)] = r;
    }
    return t;
  }, {});
}
function Rs(e, t, n) {
  return n ? /* @__PURE__ */ Ne.createElement(e.tag, F(F({
    key: t
  }, Rc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Rs(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Ne.createElement(e.tag, F({
    key: t
  }, Rc(e.attrs)), (e.children || []).map(function(r, o) {
    return Rs(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function af(e) {
  return yr(e)[0];
}
function cf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Cx = `
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
`, _x = function(t) {
  var n = Jt(ia), r = n.csp, o = n.prefixCls, i = n.layer, s = Cx;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Qe(function() {
    var a = t.current, c = Sx(a);
    gn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, Ax = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], hr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Tx(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  hr.primaryColor = t, hr.secondaryColor = n || af(t), hr.calculated = !!n;
}
function Ox() {
  return F({}, hr);
}
var Zn = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = xr(t, Ax), l = w.useRef(), u = hr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || af(s)
  }), _x(l), Ex(Oc(n), "icon should be icon definiton, but got ".concat(n)), !Oc(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Rs(d.icon, "svg-".concat(d.name), F(F({
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
Zn.getTwoToneColors = Ox;
Zn.setTwoToneColors = Tx;
function lf(e) {
  var t = cf(e), n = ae(t, 2), r = n[0], o = n[1];
  return Zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Rx() {
  var e = Zn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var kx = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lf(Eo.primary);
var tn = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = xr(e, kx), u = w.useContext(ia), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, x = $e(v, f, H(H({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = cf(c), b = ae(S, 2), g = b[0], _ = b[1];
  return /* @__PURE__ */ w.createElement("span", Lt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: m,
    onClick: a,
    className: x
  }), /* @__PURE__ */ w.createElement(Zn, {
    icon: r,
    primaryColor: g,
    secondaryColor: _,
    style: p
  }));
});
tn.displayName = "AntdIcon";
tn.getTwoToneColor = Rx;
tn.setTwoToneColor = lf;
var Px = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Lt({}, t, {
    ref: n,
    icon: yx
  }));
}, uf = /* @__PURE__ */ w.forwardRef(Px);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var Ix = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Nx = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Lt({}, t, {
    ref: n,
    icon: Ix
  }));
}, ff = /* @__PURE__ */ w.forwardRef(Nx);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var jx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Lx = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Lt({}, t, {
    ref: n,
    icon: jx
  }));
}, df = /* @__PURE__ */ w.forwardRef(Lx);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var Mx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Dx = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Lt({}, t, {
    ref: n,
    icon: Mx
  }));
}, hf = /* @__PURE__ */ w.forwardRef(Dx);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var Bx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Fx = function(t, n) {
  return /* @__PURE__ */ w.createElement(tn, Lt({}, t, {
    ref: n,
    icon: Bx
  }));
}, pf = /* @__PURE__ */ w.forwardRef(Fx);
process.env.NODE_ENV !== "production" && (pf.displayName = "InfoCircleFilled");
var zx = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Vx = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Hx = "".concat(zx, " ").concat(Vx).split(/[\s\n]+/), Ux = "aria-", qx = "data-";
function kc(e, t) {
  return e.indexOf(t) === 0;
}
function Wx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = F({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || kc(o, Ux)) || // Data
    n.data && kc(o, qx) || // Attr
    n.attr && Hx.includes(o)) && (r[o] = e[o]);
  }), r;
}
const mf = (e, t, n) => /* @__PURE__ */ Ne.isValidElement(e) ? /* @__PURE__ */ Ne.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Xx(e, t) {
  return mf(e, e, t);
}
const Xr = (e, t, n, r, o) => ({
  background: e,
  border: `${So(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), Yx = (e) => {
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
    colorText: d,
    colorTextHeading: f,
    withDescriptionPadding: v,
    defaultPadding: x
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, qu(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: x,
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
        color: f
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
        fontSize: u,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: r,
        color: f,
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
}, $x = (e) => {
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
    colorInfo: d,
    colorInfoBorder: f,
    colorInfoBg: v
  } = e;
  return {
    [t]: {
      "&-success": Xr(o, r, n, e, t),
      "&-info": Xr(v, f, d, e, t),
      "&-warning": Xr(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, Xr(u, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Gx = (e) => {
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
        lineHeight: So(i),
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
}, Kx = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Zx = la("Alert", (e) => [Yx(e), $x(e), Gx(e)], Kx);
var Pc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Jx = {
  success: uf,
  info: pf,
  error: ff,
  warning: hf
}, Qx = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = Jx[r] || null;
  return t ? mf(t, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: $e(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, e1 = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(df, null) : r;
  return t ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, fa = /* @__PURE__ */ w.forwardRef((e, t) => {
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
    onClick: d,
    afterClose: f,
    showIcon: v,
    closable: x,
    closeText: m,
    closeIcon: p,
    action: S,
    id: b
  } = e, g = Pc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [_, y] = w.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: E,
    direction: P,
    closable: L,
    closeIcon: W,
    className: ee,
    style: $
  } = Du("alert"), N = E("alert", r), [z, q, X] = Zx(N), J = (le) => {
    var de;
    y(!0), (de = e.onClose) === null || de === void 0 || de.call(e, le);
  }, G = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Z = w.useMemo(() => typeof x == "object" && x.closeIcon || m ? !0 : typeof x == "boolean" ? x : p !== !1 && p !== null && p !== void 0 ? !0 : !!L, [m, p, x, L]), re = i && v === void 0 ? !0 : v, oe = $e(N, `${N}-${G}`, {
    [`${N}-with-description`]: !!n,
    [`${N}-no-icon`]: !re,
    [`${N}-banner`]: !!i,
    [`${N}-rtl`]: P === "rtl"
  }, ee, s, a, X, q), K = Wx(g, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof x == "object" && x.closeIcon ? x.closeIcon : m || (p !== void 0 ? p : typeof L == "object" && L.closeIcon ? L.closeIcon : W), [p, x, m, W]), fe = w.useMemo(() => {
    const le = x ?? L;
    if (typeof le == "object") {
      const {
        closeIcon: de
      } = le;
      return Pc(le, ["closeIcon"]);
    }
    return {};
  }, [x, L]);
  return z(/* @__PURE__ */ w.createElement(nf, {
    visible: !_,
    motionName: `${N}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (le) => ({
      maxHeight: le.offsetHeight
    }),
    onLeaveEnd: f
  }, (le, de) => {
    let {
      className: pe,
      style: k
    } = le;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: Rh(A, de),
      "data-show": !_,
      className: $e(oe, pe),
      style: Object.assign(Object.assign(Object.assign({}, $), c), k),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, K), re ? /* @__PURE__ */ w.createElement(Qx, {
      description: n,
      icon: e.icon,
      prefixCls: N,
      type: G
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${N}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-description`
    }, n) : null), S ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-action`
    }, S) : null, /* @__PURE__ */ w.createElement(e1, {
      isClosable: Z,
      prefixCls: N,
      closeIcon: te,
      handleClose: J,
      ariaProps: fe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (fa.displayName = "Alert");
function t1(e, t, n) {
  return t = Bn(t), Kl(e, Js() ? Reflect.construct(t, n || [], Bn(e).constructor) : t.apply(e, n));
}
let n1 = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return bt(this, t), n = t1(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return Cr(t, e), St(t, [{
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
      return a ? /* @__PURE__ */ w.createElement(fa, {
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
const xf = fa;
xf.ErrorBoundary = n1;
function r1(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function o1(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
  function v() {
    u && clearTimeout(u);
  }
  function x(p) {
    var S = p || {}, b = S.upcomingOnly, g = b === void 0 ? !1 : b;
    v(), d = !g;
  }
  function m() {
    for (var p = arguments.length, S = new Array(p), b = 0; b < p; b++)
      S[b] = arguments[b];
    var g = this, _ = Date.now() - f;
    if (d)
      return;
    function y() {
      f = Date.now(), t.apply(g, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && y(), v(), l === void 0 && _ > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? A : y, e))) : y() : i !== !0 && (u = setTimeout(l ? A : y, l === void 0 ? e - _ : e));
  }
  return m.cancel = x, m;
}
function i1(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return o1(e, t, {
    debounceMode: i !== !1
  });
}
function Ic(e) {
  return ["small", "middle", "large"].includes(e);
}
const gf = ["wrap", "nowrap", "wrap-reverse"], vf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], s1 = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && gf.includes(n)
  };
}, a1 = (e, t) => {
  const n = {};
  return yf.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, c1 = (e, t) => {
  const n = {};
  return vf.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function l1(e, t) {
  return $e(Object.assign(Object.assign(Object.assign({}, s1(e, t)), a1(e, t)), c1(e, t)));
}
const u1 = (e) => {
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
}, f1 = (e) => {
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
}, d1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return gf.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, h1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return yf.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, p1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return vf.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, m1 = () => ({}), x1 = la("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = ei(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [u1(o), f1(o), d1(o), h1(o), p1(o)];
}, m1, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var g1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const bf = /* @__PURE__ */ Ne.forwardRef((e, t) => {
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
  } = e, d = g1(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: x
  } = Ne.useContext(Qt), m = x("flex", n), [p, S, b] = x1(m), g = l ?? (f == null ? void 0 : f.vertical), _ = $e(o, r, f == null ? void 0 : f.className, m, S, b, l1(m, e), {
    [`${m}-rtl`]: v === "rtl",
    [`${m}-gap-${a}`]: Ic(a),
    [`${m}-vertical`]: g
  }), y = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), p(/* @__PURE__ */ Ne.createElement(u, Object.assign({
    ref: t,
    className: _,
    style: y
  }, r1(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const Co = 100, Sf = Co / 5, wf = Co / 2 - Sf / 2, ki = wf * 2 * Math.PI, Nc = 50, jc = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: $e(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: wf,
    cx: Nc,
    cy: Nc,
    strokeWidth: Sf,
    style: n
  });
}, v1 = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  lu(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: $e(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Co} ${Co}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(jc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(jc, {
    dotClassName: r,
    style: l
  })));
};
function y1(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: $e(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: $e(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(v1, {
    prefixCls: t,
    percent: n
  }));
}
function b1(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? Xx(n, {
    className: $e(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(y1, {
    prefixCls: t,
    percent: r
  });
}
const S1 = new _u("antSpinMove", {
  to: {
    opacity: 1
  }
}), w1 = new _u("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), E1 = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, qu(e)), {
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
          animationName: S1,
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
          animationName: w1,
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
}, C1 = (e) => {
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
}, _1 = la("Spin", (e) => {
  const t = ei(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [E1(t)];
}, C1), A1 = 200, Lc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function T1(e, t) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = t === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Lc.length; c += 1) {
        const [l, u] = Lc[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, A1)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var O1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Ef;
function R1(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const pr = (e) => {
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
    children: d,
    fullscreen: f = !1,
    indicator: v,
    percent: x
  } = e, m = O1(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: S,
    className: b,
    style: g,
    indicator: _
  } = Du("spin"), y = p("spin", n), [A, E, P] = _1(y), [L, W] = w.useState(() => r && !R1(r, o)), ee = T1(L, x);
  w.useEffect(() => {
    if (r) {
      const G = i1(o, () => {
        W(!0);
      });
      return G(), () => {
        var Z;
        (Z = G == null ? void 0 : G.cancel) === null || Z === void 0 || Z.call(G);
      };
    }
    W(!1);
  }, [o, r]);
  const $ = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const G = Gn("Spin");
    process.env.NODE_ENV !== "production" && G(!c || $ || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = $e(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: L,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !f && s, E, P), z = $e(`${y}-container`, {
    [`${y}-blur`]: L
  }), q = (t = v ?? _) !== null && t !== void 0 ? t : Ef, X = Object.assign(Object.assign({}, g), u), J = /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    style: X,
    className: N,
    "aria-live": "polite",
    "aria-busy": L
  }), /* @__PURE__ */ w.createElement(b1, {
    prefixCls: y,
    indicator: q,
    percent: ee
  }), c && ($ || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return A($ ? /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    className: $e(`${y}-nested-loading`, l, E, P)
  }), L && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, J), /* @__PURE__ */ w.createElement("div", {
    className: z,
    key: "container"
  }, d)) : f ? /* @__PURE__ */ w.createElement("div", {
    className: $e(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: L
    }, s, E, P)
  }, J) : J);
};
pr.setDefaultIndicator = (e) => {
  Ef = e;
};
process.env.NODE_ENV !== "production" && (pr.displayName = "Spin");
function Cf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: k1 } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ti, toStringTag: _f } = Symbol, ni = /* @__PURE__ */ ((e) => (t) => {
  const n = k1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wt = (e) => (e = e.toLowerCase(), (t) => ni(t) === e), ri = (e) => (t) => typeof t === e, { isArray: Jn } = Array, Sr = ri("undefined");
function P1(e) {
  return e !== null && !Sr(e) && e.constructor !== null && !Sr(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Af = wt("ArrayBuffer");
function I1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Af(e.buffer), t;
}
const N1 = ri("string"), tt = ri("function"), Tf = ri("number"), oi = (e) => e !== null && typeof e == "object", j1 = (e) => e === !0 || e === !1, lo = (e) => {
  if (ni(e) !== "object")
    return !1;
  const t = da(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(_f in e) && !(ti in e);
}, L1 = wt("Date"), M1 = wt("File"), D1 = wt("Blob"), B1 = wt("FileList"), F1 = (e) => oi(e) && tt(e.pipe), z1 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = ni(e)) === "formdata" || // detect form-data instance
  t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, V1 = wt("URLSearchParams"), [H1, U1, q1, W1] = ["ReadableStream", "Request", "Response", "Headers"].map(wt), X1 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ar(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Jn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function Of(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (e) => !Sr(e) && e !== dn;
function ks() {
  const { caseless: e } = Rf(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Of(t, o) || o;
    lo(t[i]) && lo(r) ? t[i] = ks(t[i], r) : lo(r) ? t[i] = ks({}, r) : Jn(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ar(arguments[r], n);
  return t;
}
const Y1 = (e, t, n, { allOwnKeys: r } = {}) => (Ar(t, (o, i) => {
  n && tt(o) ? e[i] = Cf(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), $1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), G1 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, K1 = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && da(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Z1 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, J1 = (e) => {
  if (!e) return null;
  if (Jn(e)) return e;
  let t = e.length;
  if (!Tf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Q1 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && da(Uint8Array)), eg = (e, t) => {
  const r = (e && e[ti]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, tg = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ng = wt("HTMLFormElement"), rg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Mc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), og = wt("RegExp"), kf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ar(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, ig = (e) => {
  kf(e, (t, n) => {
    if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (tt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, sg = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Jn(e) ? r(e) : r(String(e).split(t)), n;
}, ag = () => {
}, cg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function lg(e) {
  return !!(e && tt(e.append) && e[_f] === "FormData" && e[ti]);
}
const ug = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (oi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Jn(r) ? [] : {};
        return Ar(r, (s, a) => {
          const c = n(s, o + 1);
          !Sr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, fg = wt("AsyncFunction"), dg = (e) => e && (oi(e) || tt(e)) && tt(e.then) && tt(e.catch), Pf = ((e, t) => e ? setImmediate : t ? ((n, r) => (dn.addEventListener("message", ({ source: o, data: i }) => {
  o === dn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), dn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  tt(dn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(dn) : typeof process < "u" && process.nextTick || Pf, pg = (e) => e != null && tt(e[ti]), C = {
  isArray: Jn,
  isArrayBuffer: Af,
  isBuffer: P1,
  isFormData: z1,
  isArrayBufferView: I1,
  isString: N1,
  isNumber: Tf,
  isBoolean: j1,
  isObject: oi,
  isPlainObject: lo,
  isReadableStream: H1,
  isRequest: U1,
  isResponse: q1,
  isHeaders: W1,
  isUndefined: Sr,
  isDate: L1,
  isFile: M1,
  isBlob: D1,
  isRegExp: og,
  isFunction: tt,
  isStream: F1,
  isURLSearchParams: V1,
  isTypedArray: Q1,
  isFileList: B1,
  forEach: Ar,
  merge: ks,
  extend: Y1,
  trim: X1,
  stripBOM: $1,
  inherits: G1,
  toFlatObject: K1,
  kindOf: ni,
  kindOfTest: wt,
  endsWith: Z1,
  toArray: J1,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Mc,
  hasOwnProp: Mc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kf,
  freezeMethods: ig,
  toObjectSet: sg,
  toCamelCase: rg,
  noop: ag,
  toFiniteNumber: cg,
  findKey: Of,
  global: dn,
  isContextDefined: Rf,
  isSpecCompliantForm: lg,
  toJSONObject: ug,
  isAsyncFn: fg,
  isThenable: dg,
  setImmediate: Pf,
  asap: hg,
  isIterable: pg
};
function Q(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
C.inherits(Q, Error, {
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
const If = Q.prototype, Nf = {};
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
  Nf[e] = { value: e };
});
Object.defineProperties(Q, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, o, i) => {
  const s = Object.create(If);
  return C.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const mg = null;
function Ps(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function jf(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dc(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = jf(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function xg(e) {
  return C.isArray(e) && !e.some(Ps);
}
const gg = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ii(e, t, n) {
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
  function l(x) {
    if (x === null) return "";
    if (C.isDate(x))
      return x.toISOString();
    if (!c && C.isBlob(x))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(x) || C.isTypedArray(x) ? c && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function u(x, m, p) {
    let S = x;
    if (x && !p && typeof x == "object") {
      if (C.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), x = JSON.stringify(x);
      else if (C.isArray(x) && xg(x) || (C.isFileList(x) || C.endsWith(m, "[]")) && (S = C.toArray(x)))
        return m = jf(m), S.forEach(function(g, _) {
          !(C.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([m], _, i) : s === null ? m : m + "[]",
            l(g)
          );
        }), !1;
    }
    return Ps(x) ? !0 : (t.append(Dc(p, m, i), l(x)), !1);
  }
  const d = [], f = Object.assign(gg, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ps
  });
  function v(x, m) {
    if (!C.isUndefined(x)) {
      if (d.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(x), C.forEach(x, function(S, b) {
        (!(C.isUndefined(S) || S === null) && o.call(
          t,
          S,
          C.isString(b) ? b.trim() : b,
          m,
          f
        )) === !0 && v(S, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Bc(e) {
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
function ha(e, t) {
  this._pairs = [], e && ii(e, this, t);
}
const Lf = ha.prototype;
Lf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Lf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Bc);
  } : Bc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function vg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Mf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || vg;
  C.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = C.isURLSearchParams(t) ? t.toString() : new ha(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
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
}, pa = typeof window < "u" && typeof document < "u", Is = typeof navigator == "object" && navigator || void 0, Eg = pa && (!Is || ["ReactNative", "NativeScript", "NS"].indexOf(Is.product) < 0), Cg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _g = pa && window.location.href || "http://localhost", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pa,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: Cg,
  navigator: Is,
  origin: _g
}, Symbol.toStringTag, { value: "Module" })), Ye = {
  ...Ag,
  ...wg
};
function Tg(e, t) {
  return ii(e, new Ye.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Ye.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Og(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Rg(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Bf(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && C.isArray(o) ? o.length : s, c ? (C.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !C.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && C.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return C.forEachEntry(e, (r, o) => {
      t(Og(r), o, n, 0);
    }), n;
  }
  return null;
}
function kg(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Tr = {
  transitional: Df,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = C.isObject(t);
    if (i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return o ? JSON.stringify(Bf(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t) || C.isReadableStream(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(t, this.formSerializer).toString();
      if ((a = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ii(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), kg(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Tr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (C.isResponse(t) || C.isReadableStream(t))
      return t;
    if (t && C.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ye.classes.FormData,
    Blob: Ye.classes.Blob
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
  Tr.headers[e] = {};
});
const Pg = C.toObjectSet([
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
]), Ig = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Pg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, zc = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function uo(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(uo) : String(e);
}
function Ng(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Pi(e, t, n, r, o) {
  if (C.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!C.isString(t)) {
    if (C.isString(r))
      return t.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(t);
  }
}
function Lg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Mg(e, t) {
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
let nt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, c, l) {
      const u = ar(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = uo(a));
    }
    const s = (a, c) => C.forEach(a, (l, u) => i(l, u, c));
    if (C.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (C.isString(t) && (t = t.trim()) && !jg(t))
      s(Ig(t), n);
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
    if (t = ar(t), t) {
      const r = C.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Ng(o);
        if (C.isFunction(n))
          return n.call(this, o, r);
        if (C.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ar(t), t) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Pi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = C.findKey(r, s);
        a && (!n || Pi(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Pi(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return C.forEach(this, (o, i) => {
      const s = C.findKey(r, i);
      if (s) {
        n[s] = uo(o), delete n[i];
        return;
      }
      const a = t ? Lg(i) : String(i).trim();
      a !== i && delete n[i], n[a] = uo(o), r[a] = !0;
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
    const r = (this[zc] = this[zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ar(s);
      r[a] || (Mg(o, s), r[a] = !0);
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(nt);
function Ii(e, t) {
  const n = this || Tr, r = t || n, o = nt.from(r.headers);
  let i = r.data;
  return C.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Ff(e) {
  return !!(e && e.__CANCEL__);
}
function Qn(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
C.inherits(Qn, Q, {
  __CANCEL__: !0
});
function zf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Q(
    "Request failed with status code " + n.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Dg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Bg(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let d = i, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const v = u && l - u;
    return v ? Math.round(f * 1e3 / v) : void 0;
  };
}
function Fg(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const s = (l, u = Date.now()) => {
    n = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - n;
    d >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const _o = (e, t, n = 3) => {
  let r = 0;
  const o = Bg(50, 250);
  return Fg((i) => {
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
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Vc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Hc = (e) => (...t) => C.asap(() => e(...t)), zg = Ye.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ye.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ye.origin),
  Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent)
) : () => !0, Vg = Ye.hasStandardBrowserEnv ? (
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
function Hg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ug(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vf(e, t, n) {
  let r = !Hg(t);
  return e && (r || n == !1) ? Ug(e, t) : t;
}
const Uc = (e) => e instanceof nt ? { ...e } : e;
function Sn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, f) {
    return C.isPlainObject(l) && C.isPlainObject(u) ? C.merge.call({ caseless: f }, l, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, f) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return r(void 0, l, d, f);
    } else return r(l, u, d, f);
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
  function a(l, u, d) {
    if (d in t)
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
    headers: (l, u, d) => o(Uc(l), Uc(u), d, !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, f = d(e[u], t[u], u);
    C.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const Hf = (e) => {
  const t = Sn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = nt.from(s), t.url = Mf(Vf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (C.isFormData(n)) {
    if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ye.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(t)), r || r !== !1 && zg(t.url))) {
    const l = o && i && Vg.read(i);
    l && s.set(o, l);
  }
  return t;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(e) {
  return new Promise(function(n, r) {
    const o = Hf(e);
    let i = o.data;
    const s = nt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, f, v, x;
    function m() {
      v && v(), x && x(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function S() {
      if (!p)
        return;
      const g = nt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: g,
        config: e,
        request: p
      };
      zf(function(E) {
        n(E), m();
      }, function(E) {
        r(E), m();
      }, y), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new Q("Request aborted", Q.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), r(new Q(
        _,
        y.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && C.forEach(s.toJSON(), function(_, y) {
      p.setRequestHeader(y, _);
    }), C.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([f, x] = _o(l, !0), p.addEventListener("progress", f)), c && p.upload && ([d, v] = _o(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (g) => {
      p && (r(!g || g.type ? new Qn(null, e, p) : g), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = Dg(o.url);
    if (b && Ye.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, Xg = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof Q ? u : new Qn(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
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
}, Yg = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, $g = async function* (e, t) {
  for await (const n of Gg(e))
    yield* Yg(n, t);
}, Gg = async function* (e) {
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
}, qc = (e, t, n, r) => {
  const o = $g(e, t);
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
        if (n) {
          let f = i += d;
          n(f);
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
}, si = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = si && typeof ReadableStream == "function", Kg = si && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), qf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let e = !1;
  const t = new Request(Ye.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Wc = 64 * 1024, Ns = Uf && qf(() => C.isReadableStream(new Response("").body)), Ao = {
  stream: Ns && ((e) => e.body)
};
si && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ao[t] && (Ao[t] = C.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Q(`Response type '${t}' is not supported`, Q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (e) => {
  if (e == null)
    return 0;
  if (C.isBlob(e))
    return e.size;
  if (C.isSpecCompliantForm(e))
    return (await new Request(Ye.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(e) || C.isArrayBuffer(e))
    return e.byteLength;
  if (C.isURLSearchParams(e) && (e = e + ""), C.isString(e))
    return (await Kg(e)).byteLength;
}, Qg = async (e, t) => {
  const n = C.toFiniteNumber(e.getContentLength());
  return n ?? Jg(t);
}, ev = si && (async (e) => {
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
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = Hf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = Xg([o, i && i.toAbortSignal()], s), x;
  const m = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (c && Zg && n !== "get" && n !== "head" && (p = await Qg(u, r)) !== 0) {
      let y = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (C.isFormData(r) && (A = y.headers.get("content-type")) && u.setContentType(A), y.body) {
        const [E, P] = Vc(
          p,
          _o(Hc(c))
        );
        r = qc(y.body, Wc, E, P);
      }
    }
    C.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    x = new Request(t, {
      ...f,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(x);
    const g = Ns && (l === "stream" || l === "response");
    if (Ns && (a || g && m)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((L) => {
        y[L] = b[L];
      });
      const A = C.toFiniteNumber(b.headers.get("content-length")), [E, P] = a && Vc(
        A,
        _o(Hc(a), !0)
      ) || [];
      b = new Response(
        qc(b.body, Wc, E, () => {
          P && P(), m && m();
        }),
        y
      );
    }
    l = l || "text";
    let _ = await Ao[C.findKey(Ao, l) || "text"](b, e);
    return !g && m && m(), await new Promise((y, A) => {
      zf(y, A, {
        data: _,
        headers: nt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: x
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new Q("Network Error", Q.ERR_NETWORK, e, x),
      {
        cause: S.cause || S
      }
    ) : Q.from(S, S && S.code, e, x);
  }
}), js = {
  http: mg,
  xhr: Wg,
  fetch: ev
};
C.forEach(js, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Xc = (e) => `- ${e}`, tv = (e) => C.isFunction(e) || e === null || e === !1, Wf = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !tv(n) && (r = js[(s = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Xc).join(`
`) : " " + Xc(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: js
};
function Ni(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Qn(null, e);
}
function Yc(e) {
  return Ni(e), e.headers = nt.from(e.headers), e.data = Ii.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(e.adapter || Tr.adapter)(e).then(function(r) {
    return Ni(e), r.data = Ii.call(
      e,
      e.transformResponse,
      r
    ), r.headers = nt.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(e), r && r.response && (r.response.data = Ii.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = nt.from(r.response.headers))), Promise.reject(r);
  });
}
const Xf = "1.9.0", ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ai[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $c = {};
ai.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + Xf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new Q(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !$c[s] && ($c[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
ai.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function nv(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new Q("option " + i + " must be " + c, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const fo = {
  assertOptions: nv,
  validators: ai
}, kt = fo.validators;
let yn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Sn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && fo.assertOptions(r, {
      silentJSONParsing: kt.transitional(kt.boolean),
      forcedJSONParsing: kt.transitional(kt.boolean),
      clarifyTimeoutError: kt.transitional(kt.boolean)
    }, !1), o != null && (C.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: kt.function,
      serialize: kt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fo.assertOptions(n, {
      baseUrl: kt.spelling("baseURL"),
      withXsrfToken: kt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && C.merge(
      i.common,
      i[n.method]
    );
    i && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete i[x];
      }
    ), n.headers = nt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, f;
    if (!c) {
      const x = [Yc.bind(this), void 0];
      for (x.unshift.apply(x, a), x.push.apply(x, l), f = x.length, u = Promise.resolve(n); d < f; )
        u = u.then(x[d++], x[d++]);
      return u;
    }
    f = a.length;
    let v = n;
    for (d = 0; d < f; ) {
      const x = a[d++], m = a[d++];
      try {
        v = x(v);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Yc.call(this, v);
    } catch (x) {
      return Promise.reject(x);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = Sn(this.defaults, t);
    const n = Vf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Mf(n, t.params, t.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(t) {
  yn.prototype[t] = function(n, r) {
    return this.request(Sn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(Sn(a || {}, {
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
let rv = class Yf {
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
      r.reason || (r.reason = new Qn(i, s, a), n(r.reason));
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
      token: new Yf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ov(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function iv(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const Ls = {
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
Object.entries(Ls).forEach(([e, t]) => {
  Ls[t] = e;
});
function $f(e) {
  const t = new yn(e), n = Cf(yn.prototype.request, t);
  return C.extend(n, yn.prototype, t, { allOwnKeys: !0 }), C.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return $f(Sn(e, o));
  }, n;
}
const Re = $f(Tr);
Re.Axios = yn;
Re.CanceledError = Qn;
Re.CancelToken = rv;
Re.isCancel = Ff;
Re.VERSION = Xf;
Re.toFormData = ii;
Re.AxiosError = Q;
Re.Cancel = Re.CanceledError;
Re.all = function(t) {
  return Promise.all(t);
};
Re.spread = ov;
Re.isAxiosError = iv;
Re.mergeConfig = Sn;
Re.AxiosHeaders = nt;
Re.formToJSON = (e) => Bf(C.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = Wf.getAdapter;
Re.HttpStatusCode = Ls;
Re.default = Re;
const {
  Axios: Rv,
  AxiosError: kv,
  CanceledError: Pv,
  isCancel: Iv,
  CancelToken: Nv,
  VERSION: jv,
  all: Lv,
  Cancel: Mv,
  isAxiosError: Dv,
  spread: Bv,
  toFormData: Fv,
  AxiosHeaders: zv,
  HttpStatusCode: Vv,
  formToJSON: Hv,
  getAdapter: Uv,
  mergeConfig: qv
} = Re, Hn = To;
(function(e, t) {
  const n = To, r = e();
  for (; ; )
    try {
      if (-parseInt(n(125)) / 1 + parseInt(n(119)) / 2 + parseInt(n(115)) / 3 * (parseInt(n(134)) / 4) + parseInt(n(131)) / 5 * (-parseInt(n(113)) / 6) + -parseInt(n(132)) / 7 + parseInt(n(123)) / 8 * (parseInt(n(114)) / 9) + parseInt(n(121)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 986913);
Hn(122);
Re[Hn(120)][Hn(136)] = !0;
function To(e, t) {
  const n = Oo();
  return To = function(r, o) {
    return r = r - 113, n[r];
  }, To(e, t);
}
const sv = async (e) => {
  var n, r, o, i;
  const t = Hn;
  try {
    return (await Re(e))[t(130)];
  } catch (s) {
    throw ((r = (n = s[t(133)]) == null ? void 0 : n[t(130)]) == null ? void 0 : r[t(116)]) || ((i = (o = s[t(133)]) == null ? void 0 : o[t(130)]) == null ? void 0 : i[t(137)]) || s[t(116)];
  }
}, av = {};
av[Hn(117)] = Hn(129);
function Oo() {
  const e = ["DELETE", "withCredentials", "error", "6scoBkB", "9MmdViM", "461631sCmkUF", "message", "Content-Type", "PATCH", "827358qfukno", "defaults", "32852440iCWPjS", "http://192.168.11.76:3000/api/v1/client", "937240zHWVIK", "PUT", "1672364wEdwlr", "GET", "POST", "params", "application/json", "data", "911480llRyxm", "7898674BDNgCD", "response", "4HTXneg"];
  return Oo = function() {
    return e;
  }, Oo();
}
const Oe = ko;
(function(e, t) {
  const n = ko, r = e();
  for (; ; )
    try {
      if (-parseInt(n(354)) / 1 * (parseInt(n(350)) / 2) + parseInt(n(362)) / 3 * (-parseInt(n(359)) / 4) + -parseInt(n(352)) / 5 * (parseInt(n(358)) / 6) + -parseInt(n(351)) / 7 + parseInt(n(363)) / 8 * (-parseInt(n(346)) / 9) + -parseInt(n(361)) / 10 * (parseInt(n(370)) / 11) + parseInt(n(349)) / 12 * (parseInt(n(343)) / 13) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 809802);
function Ro() {
  const e = ["77975qJYmlW", "wheelEvent", "23599ZVnZVw", "mousemove", "shortcutEvent", "mouseup", "606YZNdxb", "522516rhUmTz", "touchend", "40SqsIpH", "9yshTIH", "595848XThykk", "touchstart", "ACTION_DOWN", "ACTION_UP", "ACTION_MOVE", "moveEvent", "fullscreenEvent", "3407767HPjtLS", "keydown", "keyBoardEvent", "39XyxMLJ", "touchmove", "assistiveMenuHide", "63wjdBUS", "keyup", "mousedown", "26602308yGnEUT", "134soPSXH", "3724735QQiBXI"];
  return Ro = function() {
    return e;
  }, Ro();
}
const cn = {};
function ko(e, t) {
  const n = Ro();
  return ko = function(r, o) {
    return r = r - 341, n[r];
  }, ko(e, t);
}
cn[Oe(355)] = Oe(367), cn[Oe(357)] = Oe(366), cn[Oe(348)] = Oe(365), cn[Oe(344)] = Oe(367), cn[Oe(360)] = Oe(366), cn[Oe(364)] = Oe(365);
const Nt = cn, Ms = {};
Ms[Oe(347)] = Oe(366), Ms[Oe(341)] = Oe(365);
const cv = Ms, lv = Oe(368), uv = Oe(353), fv = Oe(342), Gf = Oe(345), Ds = Oe(356), dv = Oe(369);
(function(e, t) {
  const n = hn, r = e();
  for (; ; )
    try {
      if (parseInt(n(514)) / 1 + parseInt(n(504)) / 2 * (parseInt(n(535)) / 3) + parseInt(n(545)) / 4 * (-parseInt(n(531)) / 5) + parseInt(n(534)) / 6 + parseInt(n(563)) / 7 * (parseInt(n(561)) / 8) + parseInt(n(527)) / 9 * (-parseInt(n(542)) / 10) + parseInt(n(564)) / 11 * (-parseInt(n(536)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 789887);
function hn(e, t) {
  const n = Po();
  return hn = function(r, o) {
    return r = r - 492, n[r];
  }, hn(e, t);
}
const hv = ({ isMobile: e, assistive: t, onImgEvent: n, canvasContent: r, imageRef: o }) => {
  const [i, s] = Je(!1), a = (d) => {
    const f = hn;
    if (d[f(557)](), !o[f(520)]) return;
    const v = o[f(520)];
    let x = Nt[d[f(548)]];
    if (t[f(521)] == !0 || t[f(533)] == !0) {
      x == Nt[f(562)] && n(Gf, {});
      return;
    }
    if (x == Nt[f(554)] && s(!0), x != Nt[f(554)] && i == !1) return;
    x == Nt[f(562)] && s(!1);
    let m, p;
    const S = v[f(517)]();
    if (d[f(548)][f(516)](f(519))) {
      const { touches: g, changedTouches: _ } = d, y = g[0] ?? _[0];
      m = y[f(565)] - S[f(555)], p = y[f(540)] - S[f(529)];
    } else d[f(548)][f(516)](f(498)) && (m = d[f(538)] - S[f(555)], p = d[f(552)] - S[f(529)]);
    const b = {};
    b[f(532)] = f(543), b[f(544)] = x, b.x = m, b.y = p, b[f(512)] = S[f(512)], b[f(509)] = S[f(509)], n(lv, b), v[f(502)]();
  }, c = (d) => {
    const f = hn;
    if (d[f(557)](), !o[f(520)]) return;
    const v = o[f(520)], x = Math[f(511)](d[f(553)]), m = v[f(517)](), p = {};
    p[f(532)] = f(524), p[f(512)] = v[f(556)], p[f(509)] = v[f(496)], p.x = d[f(538)] - m[f(555)], p.y = d[f(552)] - m[f(529)], p[f(559)] = x, n(uv, p), v[f(502)]();
  }, l = async (d) => {
    const f = hn;
    if (d[f(557)](), !o[f(520)]) return;
    const v = o[f(520)], x = cv[d[f(548)]], m = d[f(547)][f(501)]();
    if (((g) => {
      const _ = f;
      return [_(541), _(515), _(518)][_(516)](g);
    })(m) == !0) return;
    const S = async () => {
      const g = f, _ = {};
      _[g(532)] = g(537), _[g(544)] = x, _[g(499)] = g(546), _[g(547)] = d[g(547)], _[g(500)] = 0, _[g(493)] = 0;
      const y = _;
      return d[g(558)] == !0 ? m == "c" ? y[g(499)] = g(495) : m == "a" ? (y[g(499)] = g(539), y[g(493)] = 4096, y[g(547)] = 29) : m == "v" && (y[g(499)] = g(528), y[g(547)] = await navigator[g(507)][g(549)]()) : m == g(494) ? (y[g(499)] = g(539), y[g(547)] = 19) : m == g(513) ? (y[g(499)] = g(539), y[g(547)] = 20) : m == g(525) ? (y[g(499)] = g(539), y[g(547)] = 21) : m == g(505) ? (y[g(499)] = g(539), y[g(547)] = 22) : m == g(550) ? (y[g(499)] = g(539), y[g(547)] = 67) : m == g(497) ? (y[g(499)] = g(539), y[g(547)] = 66) : m == g(506) && (y[g(499)] = g(539), y[g(547)] = 61), y[g(548)] == g(546) && d[g(510)] == !0 && (y[g(547)] = y[g(547)][g(530)]()), y;
    }, b = await S();
    b && n(fv, b), v[f(502)]();
  };
  Qe(() => {
    const d = hn, f = o[d(520)];
    if (f) {
      const v = {};
      v[d(566)] = !1;
      const x = v;
      return e ? (f[d(560)](d(508), a, x), f[d(560)](d(551), a, x), f[d(560)](d(526), a)) : (f[d(560)](d(567), c, x), f[d(560)](d(503), l), [d(523), d(554), d(562)][d(492)]((m) => {
        f[d(560)](m, a);
      })), () => {
        const m = d;
        f && (e ? [m(508), m(551), m(526)][m(492)]((p) => {
          f[m(522)](p, a);
        }) : ([m(523), m(554), m(562), m(567), m(503)][m(492)]((p) => {
          f[m(522)](p, a);
        }), f[m(522)](m(503), l)));
      };
    }
  }, [e, a, c, l]);
  const u = { ref: o, ...r };
  return V.jsx(g0, u);
};
function Po() {
  const e = ["6572403khvoMo", "PASTE_TEXT", "top", "toUpperCase", "10Crgjsl", "action", "showMenu", "2205372OuzUzA", "39Chibbo", "1176LvTADW", "keyEvent", "clientX", "KEYBOARD_CODE", "pageY", "control", "20tXcDHG", "touchEvent", "keyAction", "333492oPsBmT", "KEYBOARD_TEXT", "key", "type", "readText", "backspace", "touchmove", "clientY", "deltaY", "mousedown", "left", "offsetWidth", "preventDefault", "ctrlKey", "delta", "addEventListener", "1552456juFVRV", "mouseup", "35dZFhfm", "64658jhNBmc", "pageX", "passive", "wheel", "forEach", "meta_state", "arrowup", "COPY_TEXT", "offsetHeight", "enter", "mouse", "typeKey", "repeat", "toLowerCase", "focus", "keydown", "86078ZQJOcq", "arrowright", "tab", "clipboard", "touchstart", "height", "shiftKey", "sign", "width", "arrowdown", "1095857xUaHFN", "shift", "includes", "getBoundingClientRect", "capslock", "touch", "current", "isDown", "removeEventListener", "mousemove", "wheelEvent", "arrowleft", "touchend"];
  return Po = function() {
    return e;
  }, Po();
}
const pv = "data:image/png;base64,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", ci = No;
function Io() {
  const e = ["16QIWDiQ", "div", "10053pMMvkp", "35999rAhPiC", "183CATPMm", "13626864FNsrhR", "246eXAqmY", "6934961dVNYyd", "46SULQGf", "img", "20245ucErHA", "2978423jerUNx", "4390OXUOUA", "42500LxbcAd"];
  return Io = function() {
    return e;
  }, Io();
}
function No(e, t) {
  const n = Io();
  return No = function(r, o) {
    return r = r - 127, n[r];
  }, No(e, t);
}
(function(e, t) {
  const n = No, r = e();
  for (; ; )
    try {
      if (-parseInt(n(127)) / 1 * (-parseInt(n(132)) / 2) + parseInt(n(128)) / 3 * (parseInt(n(137)) / 4) + parseInt(n(134)) / 5 * (-parseInt(n(130)) / 6) + -parseInt(n(135)) / 7 * (parseInt(n(138)) / 8) + parseInt(n(140)) / 9 * (parseInt(n(136)) / 10) + parseInt(n(131)) / 11 + -parseInt(n(129)) / 12 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 444357);
const mv = yt[ci(139)]`
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
`, Bt = yt[ci(139)]`
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
`, Ft = yt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, xv = yt[ci(133)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, gv = yt[ci(139)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, t) {
  const n = Un, r = e();
  for (; ; )
    try {
      if (-parseInt(n(340)) / 1 * (parseInt(n(347)) / 2) + parseInt(n(354)) / 3 + -parseInt(n(353)) / 4 + parseInt(n(351)) / 5 * (parseInt(n(356)) / 6) + -parseInt(n(341)) / 7 * (-parseInt(n(350)) / 8) + -parseInt(n(337)) / 9 + parseInt(n(349)) / 10 * (parseInt(n(346)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 300681);
function jo() {
  const e = ["fullscreenElement", "124434YyFBah", "webkitRequestFullscreen", "webkitExitFullscreen", "49741gvJshQ", "7AwKaYv", "msExitFullscreen", "mozCancelFullScreen", "mozRequestFullScreen", "querySelector", "789778UCcgkc", "18gYNFfM", "exitFullscreen", "20ACzESL", "2693360PVFmHr", "452705pUpNSw", "#screen_", "1662716LJySdX", "734652hdtAyQ", "mozFullScreenElement", "30WGLoPZ", "requestFullscreen", "webkitFullscreenElement", "msFullscreenElement", "msRequestFullscreen"];
  return jo = function() {
    return e;
  }, jo();
}
const Gc = () => {
  const e = Un;
  return document[e(336)] || document[e(355)] || document[e(358)] || document[e(334)];
}, vv = (e) => {
  const t = Un, n = document[t(345)](t(352) + e);
  n[t(357)] ? n[t(357)]() : n[t(344)] ? n[t(344)]() : n[t(338)] ? n[t(338)]() : n[t(335)] && n[t(335)]();
};
function Un(e, t) {
  const n = jo();
  return Un = function(r, o) {
    return r = r - 334, n[r];
  }, Un(e, t);
}
const yv = () => {
  const e = Un;
  document[e(348)] ? document[e(348)]() : document[e(343)] ? document[e(343)]() : document[e(339)] ? document[e(339)]() : document[e(342)] && document[e(342)]();
};
(function(e, t) {
  const n = wr, r = e();
  for (; ; )
    try {
      if (parseInt(n(318)) / 1 + parseInt(n(363)) / 2 * (-parseInt(n(337)) / 3) + parseInt(n(312)) / 4 + parseInt(n(340)) / 5 + -parseInt(n(299)) / 6 * (parseInt(n(290)) / 7) + -parseInt(n(329)) / 8 * (-parseInt(n(292)) / 9) + -parseInt(n(275)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 734718);
function wr(e, t) {
  const n = Lo();
  return wr = function(r, o) {
    return r = r - 260, n[r];
  }, wr(e, t);
}
const bv = il((e, t) => {
  const n = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, u] = Je(0), [d, f] = Je(0), [v, x] = Je(null), [m, p] = Je(0), S = ze(null), b = ze(null), g = ze(null), _ = {};
  _[n(342)] = n(307), _[n(270)] = 0.3, _[n(339)] = 999;
  const [y, A] = Je(_), E = {};
  E[n(339)] = 999, E[n(336)] = "", E[n(308)] = n(282);
  const [P, L] = Je(E), W = {};
  W[n(339)] = 1e3;
  const [ee, $] = Je(W), N = ze(null), [z, q] = Je(null), X = (B) => {
    const T = n;
    if (B[T(370)](), s[T(335)][T(284)] == !0) return;
    const je = Nt[B[T(273)]], Be = a[T(280)], Ge = g[T(280)], Ee = Be[T(364)](), ot = Ge[T(364)]();
    let _t, At;
    const En = Ee[T(308)] - ot[T(308)], Tt = Ee[T(336)] - ot[T(336)];
    if (B[T(273)][T(326)](T(260))) {
      const { touches: Xe, changedTouches: Ke } = B, ct = Xe[0] ?? Ke[0];
      _t = ct[T(324)], At = ct[T(332)];
    } else B[T(273)][T(326)](T(262)) && (_t = B[T(309)], At = B[T(311)]);
    if (je == Nt[T(285)]) {
      s[T(358)]({ ...s[T(335)], isDown: !0 }), u(_t - ot[T(279)]), f(At - ot[T(263)]);
      const Xe = {};
      Xe[T(270)] = 1, Xe[T(342)] = T(362);
      const Ke = { ...y, ...Xe };
      A(Ke), p(performance[T(323)]());
    } else if (je == Nt[T(328)]) {
      if (s[T(335)][T(361)] == !1) return;
      var Mt = _t - l - Ee[T(279)], Dt = At - d - Ee[T(263)];
      Mt = Math[T(316)](3, Math[T(333)](Mt, En) - 3), Dt = Math[T(316)](3, Math[T(333)](Dt, Tt) - 3);
      const Xe = {};
      Xe[T(263)] = Dt + "px", Xe[T(279)] = Mt + "px";
      const Ke = { ...P, ...Xe };
      L(Ke);
    } else if (je == Nt[T(357)]) {
      const Xe = performance[T(323)]() - m;
      if (v == Nt[T(285)] || Xe < 100) {
        const Ot = {};
        Ot[T(284)] = !0, Ot[T(361)] = !1, s[T(358)]({ ...s[T(335)], ...Ot });
      } else s[T(358)]({ ...s[T(335)], isDown: !1 });
      const Ke = {};
      Ke[T(270)] = 0.3, Ke[T(342)] = T(307);
      const ct = { ...y, ...Ke };
      A(ct);
    }
    x(je), Ge[T(268)]();
  }, J = async (B) => {
    const T = n;
    B[T(370)]();
    const je = B[T(315)][T(319)](T(297))[T(294)](T(269));
    if (je === T(331))
      Gc() ? yv() : vv(r);
    else {
      const Be = {};
      Be[T(338)] = T(353), Be[T(277)] = je, Be[T(373)] = "";
      const Ge = Be;
      je === T(264) && (Ge[T(373)] = await navigator[T(304)][T(350)]()), je === T(271) && (Ge[T(305)] = T(348)), i(Ds, Ge);
    }
    s[T(358)]({ ...s[T(335)], showMenu: !1 }), b[T(280)][T(268)]();
  }, G = (B) => {
    const T = Gc();
    i(dv, T);
  };
  Qe(() => {
    requestAnimationFrame(() => {
      const B = wr, T = { ...ee };
      T[B(270)] = s[B(335)][B(284)] ? 1 : 0, $(T);
    });
  }, [s]), Qe(() => {
    const B = n, T = a[B(280)], je = [B(354), B(281), B(359), B(346)];
    return T && je[B(352)]((Be) => {
      T[B(295)](Be, G);
    }), () => {
      const Be = B;
      T && T[Be(366)](Be(325), G);
    };
  }, []), Qe(() => {
    const B = n, T = g[B(280)], je = b[B(280)];
    if (je && je[B(295)](B(325), J), T) {
      const Be = {};
      Be[B(288)] = !1;
      const Ge = Be;
      return o ? (T[B(295)](B(371), X, Ge), T[B(295)](B(372), X, Ge), T[B(295)](B(303), X)) : [B(328), B(285), B(357)][B(352)]((Ee) => {
        T[B(295)](Ee, X);
      }), () => {
        const Ee = B;
        je && je[Ee(366)](Ee(325), J), T && (o ? [Ee(371), Ee(372), Ee(303)][Ee(352)]((ot) => {
          T[Ee(366)](ot, X);
        }) : [Ee(328), Ee(285), Ee(357)][Ee(352)]((ot) => {
          T[Ee(366)](ot, X);
        }));
      };
    }
  }, [o, X]);
  const Z = () => {
    const B = n, T = {};
    T[B(339)] = 999, T[B(336)] = N[B(280)] == B(355) ? B(274) : null, T[B(308)] = N[B(280)] != B(355) ? B(274) : null, T[B(263)] = B(278), T[B(301)] = "5%", L(T);
  };
  sl(t, () => ({ fixTouch: (B) => {
    const T = n;
    B && (N[T(280)] = B), Z();
  }, setFullscreen: (B) => {
    q(B);
  } }));
  const re = {};
  re[n(365)] = n(367);
  const oe = {};
  oe.d = n(z ? 298 : 300);
  const K = {};
  K[n(351)] = n(375);
  const te = {};
  te[n(365)] = n(367);
  const fe = {};
  fe.d = n(334);
  const le = {};
  le.d = n(310);
  const de = {};
  de[n(351)] = n(293);
  const pe = {};
  pe[n(365)] = n(367);
  const k = {};
  k.d = n(369);
  const U = {};
  U[n(351)] = n(302);
  const D = {};
  D[n(365)] = n(367);
  const M = {};
  M.d = n(266);
  const O = {};
  O.cx = n(349), O.cy = "18", O.r = "1";
  const ne = {};
  ne[n(351)] = n(c ? 344 : 330);
  const j = {};
  j[n(365)] = n(367);
  const ke = {};
  ke.d = n(265);
  const we = {};
  we.d = n(306);
  const st = {};
  st[n(351)] = n(368);
  const Et = {};
  Et[n(365)] = n(367);
  const rt = {};
  rt.d = n(343);
  const Ct = {};
  Ct[n(351)] = n(272);
  const Pe = {};
  Pe[n(365)] = n(367);
  const be = {};
  be.d = n(314);
  const qe = {};
  qe[n(351)] = n(327);
  const ht = {};
  ht[n(365)] = n(367);
  const at = {};
  at.d = n(283);
  const nn = {};
  nn[n(351)] = n(374);
  const rn = {};
  rn[n(365)] = n(367);
  const wn = {};
  wn.d = n(345);
  const on = {};
  return on[n(351)] = n(289), V.jsxs(V.Fragment, { children: [s[n(335)][n(284)] ? V.jsxs(mv, { id: n(286) + r, style: ee, ref: b, children: [V.jsxs(Bt, { "data-id": n(331), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: re, children: V.jsx(n(360), oe) }), V.jsx(Ft, K)] }), V.jsxs(Bt, { "data-id": n(271), children: [V.jsxs(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: te, children: [V.jsx(n(360), fe), V.jsx(n(360), le)] }), V.jsx(Ft, de)] }), V.jsxs(Bt, { "data-id": n(264), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: pe, children: V.jsx(n(360), k) }), V.jsx(Ft, U)] }), V.jsxs(Bt, { "data-id": n(317), children: [V.jsxs(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: D, children: [V.jsx(n(360), M), V.jsx(n(267), O)] }), V.jsx(Ft, ne)] }), V.jsxs(Bt, { "data-id": n(276), children: [V.jsxs(n(356), { xmlns: n(320), width: "25", height: "25", viewBox: n(291), style: j, children: [V.jsx(n(360), ke), V.jsx(n(360), we)] }), V.jsx(Ft, st)] }), V.jsxs(Bt, { "data-id": n(261), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: Et, children: V.jsx(n(360), rt) }), V.jsx(Ft, Ct)] }), V.jsxs(Bt, { "data-id": n(341), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: Pe, children: V.jsx(n(360), be) }), V.jsx(Ft, qe)] }), V.jsxs(Bt, { "data-id": n(287), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: ht, children: V.jsx(n(360), at) }), V.jsx(Ft, nn)] }), V.jsxs(Bt, { "data-id": n(296), children: [V.jsx(n(356), { xmlns: n(320), width: "28", height: "28", viewBox: n(291), style: rn, children: V.jsx(n(360), wn) }), V.jsx(Ft, on)] })] }) : null, V.jsx(gv, { id: n(322) + r, className: n(347), ref: S, style: y, children: V.jsx(xv, { style: P, src: pv, className: n(347), id: n(321) + r, alt: n(313), ref: g, draggable: !1 }) })] });
});
function Lo() {
  const e = ["pageY", "min", "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z", "get", "height", "35877cAgMAK", "action", "zIndex", "1219865AvNOAr", "recents", "cursor", "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z", "Hide ID", "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z", "msfullscreenchange", "assistive", "shortcutCopy", "11.75", "readText", "children", "forEach", "shortcutEvent", "fullscreenchange", "landscape", "svg", "mouseup", "set", "mozfullscreenchange", "path", "isDown", "grab", "142UoXVab", "getBoundingClientRect", "fill", "removeEventListener", "rgba(255, 255, 255, 1)", "Volume", "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z", "preventDefault", "touchstart", "touchmove", "data", "Home", "Screen", "touch", "sync", "mouse", "top", "paste", "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z", "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z", "circle", "focus", "data-id", "opacity", "copy", "Sync", "type", "12%", "8052530TnfOyf", "volume", "shortcut", "50%", "left", "current", "webkitfullscreenchange", "13%", "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z", "showMenu", "mousedown", "assistive_menu_", "home", "passive", "Back", "454097BtwwUj", "0 0 24 24", "1103994rkkbOI", "Copy", "getAttribute", "addEventListener", "back", "div", "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z", "78DeAbJZ", "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z", "right", "Paste", "touchend", "clipboard", "taskId", "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z", "move", "width", "clientX", "M6 12h6v2H6zm0 4h6v2H6z", "clientY", "5739448CiCEVv", "Icon", "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z", "target", "max", "device_id", "204222ubrnbK", "closest", "http://www.w3.org/2000/svg", "assistive_touch_", "assistive_touch_class_", "now", "pageX", "click", "includes", "Recents", "mousemove", "88TLGOAE", "Show ID", "fullscreen"];
  return Lo = function() {
    return e;
  }, Lo();
}
function qn(e, t) {
  const n = Mo();
  return qn = function(r, o) {
    return r = r - 221, n[r];
  }, qn(e, t);
}
const He = qn;
(function(e, t) {
  const n = qn, r = e();
  for (; ; )
    try {
      if (-parseInt(n(230)) / 1 * (parseInt(n(257)) / 2) + parseInt(n(254)) / 3 * (parseInt(n(222)) / 4) + parseInt(n(231)) / 5 + -parseInt(n(274)) / 6 + parseInt(n(233)) / 7 * (-parseInt(n(268)) / 8) + parseInt(n(262)) / 9 * (parseInt(n(250)) / 10) + parseInt(n(232)) / 11 * (parseInt(n(237)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 322581);
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = He(249), rl = He(277), nl = He(255), tl = He(227), el = He(244), Qc = He(235), Jc = He(261), Zc = He(267), Kc = He(276);
class Sv {
  constructor(t, n, r, o) {
    Rt(this, ol, (t) => {
      const n = He;
      if (t) {
        const r = window[n(281)] + 10, o = this[n(277)](null, this[n(238)][n(248)], this[n(238)][n(272)], r, r);
        this[n(248)] = o[n(248)], this[n(272)] = o[n(272)];
      } else this[n(248)] = this[n(238)][n(248)], this[n(272)] = this[n(238)][n(272)];
    });
    Rt(this, rl, (t, n, r, o, i) => {
      const s = He;
      let a;
      return t && o > this[s(234)] && r > n && (i = this[s(234)]), i && (a = i / n * r, a > o && (i = o / r * n, a = o / n * n)), { width: Math[s(251)](i), height: Math[s(251)](a) };
    });
    Rt(this, nl, (t) => {
      const n = He;
      this[n(278)] = t, this[n(228)] && screen[n(278)][n(273)](t);
    });
    Rt(this, tl, (t, n) => {
      var a;
      const r = He, o = this[r(228)] == !0 ? window[r(281)] - 12 : window[r(281)] - 50, i = this[r(277)](!0, t, n, o, o);
      this[r(248)] = i[r(248)], this[r(272)] = i[r(272)], !this[r(238)] && ((a = this[r(224)]) == null || a.call(this, !0));
      const s = {};
      s[r(248)] = i[r(248)], s[r(272)] = i[r(272)], this[r(238)] = s;
    });
    Rt(this, el, (t) => {
      const n = He, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(241)] = r;
    });
    Rt(this, Qc, () => {
      const t = He, n = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        (!this[i(248)] || !this[i(272)]) && this[i(227)](o[i(275)], o[i(229)]), this[i(278)] == i(245) ? (this[i(263)][i(248)] = this[i(272)], this[i(263)][i(272)] = this[i(248)], this[i(239)][i(252)](0, this[i(248)]), this[i(239)][i(246)](Math.PI / 2), this[i(239)][i(256)](-1, -1), this[i(239)][i(264)](s, 0, 0, this[i(248)], this[i(272)])) : (this[i(263)][i(248)] = this[i(248)], this[i(263)][i(272)] = this[i(272)], this[i(239)][i(264)](s, 0, 0, this[i(248)], this[i(272)])), s[i(279)](), o[i(279)]();
      }, error: (o) => console[t(225)](t(280), o) }), r = {};
      return r[t(265)] = t(258), r[t(243)] = t(260), r[t(221)] = !0, n[t(247)](r), n;
    });
    Rt(this, Jc, (t) => {
      const n = He;
      for (let r = 0; r <= t[n(223)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t[n(223)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Rt(this, Zc, (t, n) => {
      const r = He, o = Array[r(240)](t)[r(236)](Array[r(240)](n));
      return new Uint8Array(o);
    });
    Rt(this, Kc, (t) => {
      const n = He;
      if (!this[n(266)] || this[n(266)][n(271)] == n(279) || !this[n(241)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(261)](r);
      o && (this[n(226)] = r), this[n(226)] && this[n(241)] && (!this[n(253)] && (r = this[n(267)](this[n(241)], this[n(226)]), this[n(253)] = !0), this[n(266)][n(276)](new EncodedVideoChunk({ timestamp: performance[n(259)]() * 1e3, type: n(o ? 242 : 269), data: r })));
    });
    const i = qn;
    this[i(263)] = t, this[i(234)] = n, this[i(228)] = r, this[i(224)] = o, this[i(239)] = t[i(270)]("2d"), this[i(266)] = this[i(235)](), this[i(241)] = null, this[i(226)] = null, this[i(253)] = null, this[i(248)] = null, this[i(272)] = null, this[i(238)] = null, this[i(278)] = i(282);
  }
}
function Mo() {
  const e = ["270009DkhDQc", "setOrientation", "scale", "2doXcYT", "avc1.64001E", "now", "prefer-hardware", "isKeyFrame", "1336941xoEqiR", "canvas", "drawImage", "codec", "decoder", "concatUint8Arrays", "14152uIvfUl", "delta", "getContext", "state", "height", "lock", "1568736nBGxgc", "codedWidth", "decode", "resizedWidth", "orientation", "close", "Decoder error:", "innerHeight", "portrait", "optimizeForLatency", "12xayUfq", "length", "setIsConnect", "error", "iframe", "autoResize", "isMobile", "codedHeight", "195217WYLYZj", "1203650mNUuow", "249931RgTkUc", "784jimTTU", "maxWidth", "buildDecoder", "concat", "168IHpAab", "rootSize", "ctx", "from", "videoMeta", "key", "hardwareAcceleration", "setVideoMeta", "landscape", "rotate", "configure", "width", "setFullscreen", "10dPQzMy", "round", "translate", "isPlay"];
  return Mo = function() {
    return e;
  }, Mo();
}
(function(e, t) {
  const n = $t, r = e();
  for (; ; )
    try {
      if (-parseInt(n(445)) / 1 + -parseInt(n(425)) / 2 * (parseInt(n(473)) / 3) + -parseInt(n(430)) / 4 * (-parseInt(n(449)) / 5) + parseInt(n(488)) / 6 * (parseInt(n(472)) / 7) + parseInt(n(486)) / 8 * (parseInt(n(476)) / 9) + parseInt(n(483)) / 10 + parseInt(n(455)) / 11 * (-parseInt(n(465)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 124240);
function Do() {
  const e = ["status", "emit", "showMenu", "password", "247554LtJCIL", "width", "video_meta", "orientation", "1129970aYpVwJ", "connect", "timeout", "height", "taskId", "onScreenEvent", "20141tzEAif", "set", "delete", "isDown", "mozFullScreenElement", "join_room", "fixTouch", "connect_error", "type_client", "Timeout waiting for response", "204AfvCfY", "url", "error", "screen", "userAgent", "post", "setVideoMeta", "149884wCOUpo", "18YHDiKj", "info", "fullscreenchange", "36mIhZQL", "disconnect", "Content-Type", "current", "draggable", "shortcutEvent", "passwd", "190890jmOWlf", "action", "fullscreenElement", "11048nQZWmy", "close", "60pXHfes", "msg", "size", "method", "test", "onSyncIFrame", "connection closed code: ", "screen_main_", "map", "marginTop", "setOrientation", "webkitFullscreenElement", "application/json", "msFullscreenElement", "middle", "screen_", "image_", "get_video_meta", "center", "reconnection", "data", "false", "device_id", "large", "get", "isMobile", "tabIndex", "setFullscreen", "children", "headers", "iframe", "type", "20602mUjVhX", "code", "value", "text", "COPY_TEXT", "4geHPlg", "decode", "removeEventListener", "control", "length", "clipboard", "addEventListener", "shortcut", "writeText", "message", "sync"];
  return Do = function() {
    return e;
  }, Do();
}
function $t(e, t) {
  const n = Do();
  return $t = function(r, o) {
    return r = r - 403, n[r];
  }, $t(e, t);
}
const Wv = il((e, t) => {
  const n = $t, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, u = o[n(415)], d = /iPhone|iPad|iPod|Android/i[n(492)](navigator[n(469)]), f = n(433), [v, x] = Je(null), [m, p] = Je(a), S = {};
  S[n(443)] = !1, S[n(458)] = !1;
  const [b, g] = Je(S), _ = ze(null), y = ze(null), [A, E] = Je(null), P = n(409) + u, L = n(408) + u, W = n(495) + u, ee = ze(null), $ = ze(null), N = ze(null), [z, q] = Je([]), X = ze(null), J = ze(/* @__PURE__ */ new Map());
  Qe(() => {
    p(a);
  }, [a]);
  const G = (k) => {
    q((U) => [...U, k]);
  }, Z = (k) => {
    const U = n;
    y[U(479)][U(442)](U(439), k), c == null || c(k);
  };
  sl(t, () => ({ api: async function(k, U = 5e3) {
    return new Promise((D, M) => {
      const O = $t, ne = setTimeout(() => {
        const j = $t;
        J[j(479)][j(457)](k[j(453)]);
        const ke = {};
        ke[j(484)] = k[j(484)], ke[j(453)] = k[j(453)], ke[j(441)] = !1, ke[j(439)] = j(464), M(ke);
      }, U);
      J[O(479)][O(456)](k[O(453)], (j) => {
        clearTimeout(ne), D(j);
      }), y[O(479)][O(442)](O(439), k);
    });
  }, sync: function(k) {
    const U = n;
    y[U(479)][U(442)](U(439), k);
  }, showDeviceId: function(k) {
    p(k);
  } })), Qe(() => {
    (async () => {
      const k = $t;
      try {
        const U = {};
        U[k(478)] = k(405);
        const D = {};
        D[k(415)] = o[k(415)], D[k(444)] = o[k(482)];
        const M = {};
        M[k(466)] = r, M[k(491)] = k(470), M[k(451)] = 1e4, M[k(422)] = U, M[k(413)] = D;
        const O = M, ne = await sv(O);
        x(ne[k(413)]);
      } catch (U) {
        const D = {};
        D[k(489)] = U, D[k(424)] = k(467), G(D);
      }
    })();
  }, []), Qe(() => {
    const k = n;
    if (y[k(479)] || !v) return;
    const U = {};
    U[k(412)] = !1;
    const D = no(v, U);
    return D.on(k(450), () => {
      const M = k, O = {};
      O[M(484)] = M(450), O[M(463)] = f, O[M(415)] = o[M(415)], O[M(418)] = d, O[M(482)] = o[M(482)], D[M(442)](M(460), O);
    }), D.on(k(460), (M) => {
      const O = k;
      if (M[O(441)] == !0) {
        y[O(479)] = D;
        const ne = {};
        ne[O(484)] = O(454), D[O(442)](O(439), ne);
      } else {
        const ne = {};
        ne[O(489)] = M[O(489)], ne[O(424)] = O(467), G(ne);
      }
    }), D.on(k(468), (M) => {
      const O = k;
      X[O(479)][O(431)](M);
    }), D.on(k(447), (M) => {
      const O = k;
      if (M) {
        if (X[O(479)][O(471)](M), !X[O(479)][O(423)]) {
          const ne = {};
          ne[O(484)] = O(493), D[O(442)](O(439), ne);
        }
      } else {
        const ne = {};
        ne[O(484)] = O(410), D[O(442)](O(447), ne);
      }
    }), D.on(k(439), (M) => {
      const O = k;
      if ((M[O(484)] == O(429) || M[O(484)] == O(481)) && M[O(428)][O(434)] > 0 ? navigator[O(435)][O(438)](M[O(428)]) : M[O(484)] == O(448) && (X[O(479)][O(403)](M[O(427)]), N[O(479)][O(461)](M[O(427)])), M[O(453)]) {
        const ne = J[O(479)][O(417)](M[O(453)]);
        ne && (ne(M), J[O(479)][O(457)](M[O(453)]));
      }
    }), D.on(k(462), (M) => {
      const O = k, ne = {};
      ne[O(489)] = M, ne[O(424)] = O(467), G(ne);
    }), D.on(k(477), (M) => {
      const O = k, ne = {};
      ne[O(489)] = O(494) + M[O(426)], ne[O(424)] = O(474), G(ne), _[O(479)] && _[O(479)][O(487)]();
    }), () => {
      D && D[k(477)]();
    };
  }, [v]), Qe(() => {
    const k = n, U = $[k(479)];
    X[k(479)] = new Sv(U, i, d, E);
  }, []), Qe(() => {
    const k = n, U = () => {
      const D = $t, M = document[D(485)] || document[D(404)] || document[D(459)] || document[D(406)];
      X[D(479)][D(420)](!!M), N[D(479)][D(420)](!!M), N[D(479)][D(461)]();
    };
    return document[k(436)](k(475), U), () => {
      const D = k;
      document[D(432)](D(475), U);
    };
  }, []);
  const re = {};
  re[n(421)] = o[n(415)];
  const oe = {};
  oe[n(490)] = n(416);
  const K = {};
  K[n(490)] = n(416);
  const te = {};
  te[n(490)] = n(416);
  const fe = {};
  fe[n(452)] = 0, fe[n(446)] = 0;
  const le = {};
  le[n(417)] = b, le[n(456)] = g;
  const de = {};
  de.id = P, de[n(419)] = "0", de[n(480)] = n(414);
  const pe = {};
  return pe[n(497)] = 5, V.jsxs(m0, { id: W, children: [m && V.jsx(y0, { children: V.jsx(v0, re) }), z[n(434)] == 0 ? V.jsxs(V.Fragment, { children: [!A && V.jsxs(bf, { align: n(411), gap: n(407), children: [V.jsx(pr, oe), V.jsx(pr, K), V.jsx(pr, te)] }), V.jsxs(x0, { ref: ee, id: L, style: A ? {} : fe, children: [s ? V.jsx(bv, { status: le, ref: N, imageRef: $, displayId: u, isMobile: d, isShowDeviceId: m, onSenData: (k, U) => {
    const D = n;
    k === Ds && U[D(437)] === D(415) ? p(!m) : k === Ds && U[D(437)] === D(440) ? l(o[D(415)]) : Z(U);
  } }) : null, V.jsx(hv, { canvasContent: de, imageRef: $, isMobile: d, assistive: b, onImgEvent: (k, U) => {
    const D = n;
    if (k === Gf) {
      const M = { ...b };
      M[D(443)] = !1, g(M);
    } else Z(U);
  } })] })] }) : z[n(496)]((k, U) => V.jsx(xf, { style: pe, message: k[n(489)], type: k[n(424)], showIcon: !0, closable: !0 }, U))] });
});
(function(e, t) {
  for (var n = Bs, r = e(); ; )
    try {
      var o = -parseInt(n(302)) / 1 * (-parseInt(n(295)) / 2) + parseInt(n(306)) / 3 * (parseInt(n(301)) / 4) + -parseInt(n(298)) / 5 * (parseInt(n(304)) / 6) + -parseInt(n(297)) / 7 * (-parseInt(n(294)) / 8) + parseInt(n(299)) / 9 * (-parseInt(n(300)) / 10) + -parseInt(n(293)) / 11 * (-parseInt(n(296)) / 12) + parseInt(n(303)) / 13 * (parseInt(n(305)) / 14);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 424758);
function Bs(e, t) {
  var n = Bo();
  return Bs = function(r, o) {
    r = r - 293;
    var i = n[r];
    return i;
  }, Bs(e, t);
}
function Bo() {
  var e = ["779452mYjYtF", "228612smBPof", "242242ZVJEKO", "5Mmmtnu", "9XTLbXg", "7565870vDOvYP", "104WWoixi", "1MiqcZi", "121069Wjltln", "1695570MqjlwP", "238ngxxoO", "6843lIaIjn", "55DxeRhC", "176YGMMHd"];
  return Bo = function() {
    return e;
  }, Bo();
}
export {
  Wv as ControlMyRPP
};
