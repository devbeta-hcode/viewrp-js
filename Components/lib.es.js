var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var kt = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as _ from "react";
import Fe, { useDebugValue as pa, createElement as e0, useRef as We, useContext as Qt, isValidElement as t0, version as n0, createContext as Fi, useLayoutEffect as r0, useEffect as it, useState as st, forwardRef as sl, useImperativeHandle as il } from "react";
import ma from "react-dom";
var ar = ho;
(function(t, n) {
  for (var e = ho, r = t(); ; )
    try {
      var o = parseInt(e(270)) / 1 * (parseInt(e(267)) / 2) + -parseInt(e(281)) / 3 * (parseInt(e(271)) / 4) + -parseInt(e(257)) / 5 * (-parseInt(e(285)) / 6) + parseInt(e(278)) / 7 * (parseInt(e(265)) / 8) + -parseInt(e(288)) / 9 + parseInt(e(269)) / 10 * (parseInt(e(282)) / 11) + -parseInt(e(283)) / 12 * (parseInt(e(272)) / 13);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fo, 520398);
typeof globalThis !== ar(279) || typeof window !== ar(279) || (typeof global !== ar(279) ? global : ar(279));
function o0(t) {
  var n = ar;
  return t && t[n(289)] && Object[n(291)][n(264) + n(286)][n(292)](t, n(275)) ? t[n(275)] : t;
}
function fo() {
  var t = ["BtPss", "hasOwnProp", "2100752vfGdse", "rtunF", "2wyXuJt", "construct", "76200Pujdue", "773207XaPrEP", "61612wSrroC", "13GlEDBt", "constructo", "function", "default", "length", "ertyDescri", "14XibiCr", "undefined", "defineProp", "57gfuzvt", "176OEwjnz", "9162276RqNILK", "apply", "6aUtVNU", "erty", "value", "443367YelkCf", "__esModule", "fackA", "prototype", "call", "forEach", "1027630gsLfUu", "getOwnProp", "keys", "ptor", "get", "enumerable"];
  return fo = function() {
    return t;
  }, fo();
}
function ho(t, n) {
  var e = fo();
  return ho = function(r, o) {
    r = r - 256;
    var s = e[r];
    return s;
  }, ho(t, n);
}
var Rr = { exports: {} }, er = {};
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
function s0() {
  if (ga) return er;
  ga = 1;
  var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var f, d = {}, l = null, v = null;
    u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !s.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: l, ref: v, props: d, _owner: o.current };
  }
  return er.Fragment = e, er.jsx = i, er.jsxs = i, er;
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
var va;
function i0() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, x = "@@iterator";
    function h(m) {
      if (m === null || typeof m != "object")
        return null;
      var k = g && m[g] || m[x];
      return typeof k == "function" ? k : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(m) {
      {
        for (var k = arguments.length, B = new Array(k > 1 ? k - 1 : 0), $ = 1; $ < k; $++)
          B[$ - 1] = arguments[$];
        p("error", m, B);
      }
    }
    function p(m, k, B) {
      {
        var $ = E.ReactDebugCurrentFrame, me = $.getStackAddendum();
        me !== "" && (k += "%s", B = B.concat([me]));
        var be = B.map(function(fe) {
          return String(fe);
        });
        be.unshift("Warning: " + k), Function.prototype.apply.call(console[m], console, be);
      }
    }
    var A = !1, y = !1, O = !1, C = !1, L = !1, z;
    z = Symbol.for("react.module.reference");
    function X(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === s || L || m === o || m === u || m === f || C || m === v || A || y || O || typeof m == "object" && m !== null && (m.$$typeof === l || m.$$typeof === d || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === z || m.getModuleId !== void 0));
    }
    function oe(m, k, B) {
      var $ = m.displayName;
      if ($)
        return $;
      var me = k.displayName || k.name || "";
      return me !== "" ? B + "(" + me + ")" : B;
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
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var k = m;
            return G(k) + ".Consumer";
          case i:
            var B = m;
            return G(B._context) + ".Provider";
          case c:
            return oe(m, m.render, "ForwardRef");
          case d:
            var $ = m.displayName || null;
            return $ !== null ? $ : F(m.type) || "Memo";
          case l: {
            var me = m, be = me._payload, fe = me._init;
            try {
              return F(fe(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, ee, Z, J, Q, ae, se, K;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function xe() {
      {
        if (H === 0) {
          ee = console.log, Z = console.info, J = console.warn, Q = console.error, ae = console.group, se = console.groupCollapsed, K = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
        H++;
      }
    }
    function de() {
      {
        if (H--, H === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, m, {
              value: ee
            }),
            info: W({}, m, {
              value: Z
            }),
            warn: W({}, m, {
              value: J
            }),
            error: W({}, m, {
              value: Q
            }),
            group: W({}, m, {
              value: ae
            }),
            groupCollapsed: W({}, m, {
              value: se
            }),
            groupEnd: W({}, m, {
              value: K
            })
          });
        }
        H < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = E.ReactCurrentDispatcher, I;
    function M(m, k, B) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (me) {
            var $ = me.stack.trim().match(/\n( *(at )?)/);
            I = $ && $[1] || "";
          }
        return `
` + I + m;
      }
    }
    var R = !1, N;
    {
      var w = typeof WeakMap == "function" ? WeakMap : Map;
      N = new w();
    }
    function j(m, k) {
      if (!m || R)
        return "";
      {
        var B = N.get(m);
        if (B !== void 0)
          return B;
      }
      var $;
      R = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = ge.current, ge.current = null, xe();
      try {
        if (k) {
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
            } catch (ot) {
              $ = ot;
            }
            Reflect.construct(m, [], fe);
          } else {
            try {
              fe.call();
            } catch (ot) {
              $ = ot;
            }
            m.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            $ = ot;
          }
          m();
        }
      } catch (ot) {
        if (ot && $ && typeof ot.stack == "string") {
          for (var ce = ot.stack.split(`
`), Je = $.stack.split(`
`), Pe = ce.length - 1, Ne = Je.length - 1; Pe >= 1 && Ne >= 0 && ce[Pe] !== Je[Ne]; )
            Ne--;
          for (; Pe >= 1 && Ne >= 0; Pe--, Ne--)
            if (ce[Pe] !== Je[Ne]) {
              if (Pe !== 1 || Ne !== 1)
                do
                  if (Pe--, Ne--, Ne < 0 || ce[Pe] !== Je[Ne]) {
                    var je = `
` + ce[Pe].replace(" at new ", " at ");
                    return m.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", m.displayName)), typeof m == "function" && N.set(m, je), je;
                  }
                while (Pe >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        R = !1, ge.current = be, de(), Error.prepareStackTrace = me;
      }
      var Cn = m ? m.displayName || m.name : "", ln = Cn ? M(Cn) : "";
      return typeof m == "function" && N.set(m, ln), ln;
    }
    function Oe(m, k, B) {
      return j(m, !1);
    }
    function D(m) {
      var k = m.prototype;
      return !!(k && k.isReactComponent);
    }
    function Re(m, k, B) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return j(m, D(m));
      if (typeof m == "string")
        return M(m);
      switch (m) {
        case u:
          return M("Suspense");
        case f:
          return M("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return Oe(m.render);
          case d:
            return Re(m.type, k, B);
          case l: {
            var $ = m, me = $._payload, be = $._init;
            try {
              return Re(be(me), k, B);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Xe = {}, Ot = E.ReactDebugCurrentFrame;
    function ut(m) {
      if (m) {
        var k = m._owner, B = Re(m.type, m._source, k ? k.type : null);
        Ot.setExtraStackFrame(B);
      } else
        Ot.setExtraStackFrame(null);
    }
    function Rt(m, k, B, $, me) {
      {
        var be = Function.call.bind(ue);
        for (var fe in m)
          if (be(m, fe)) {
            var ce = void 0;
            try {
              if (typeof m[fe] != "function") {
                var Je = Error(($ || "React class") + ": " + B + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              ce = m[fe](k, fe, $, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ce = Pe;
            }
            ce && !(ce instanceof Error) && (ut(me), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", B, fe, typeof ce), ut(null)), ce instanceof Error && !(ce.message in Xe) && (Xe[ce.message] = !0, ut(me), b("Failed %s type: %s", B, ce.message), ut(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ae(m) {
      return Me(m);
    }
    function Ge(m) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, B = k && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return B;
      }
    }
    function vt(m) {
      try {
        return dt(m), !1;
      } catch {
        return !0;
      }
    }
    function dt(m) {
      return "" + m;
    }
    function rn(m) {
      if (vt(m))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(m)), dt(m);
    }
    var on = E.ReactCurrentOwner, _n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, an;
    function P(m) {
      if (ue.call(m, "ref")) {
        var k = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function S(m) {
      if (ue.call(m, "key")) {
        var k = Object.getOwnPropertyDescriptor(m, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ve(m, k) {
      typeof m.ref == "string" && on.current;
    }
    function Y(m, k) {
      {
        var B = function() {
          sn || (sn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function pe(m, k) {
      {
        var B = function() {
          an || (an = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var te = function(m, k, B, $, me, be, fe) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: m,
        key: k,
        ref: B,
        props: fe,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function ye(m, k, B, $, me) {
      {
        var be, fe = {}, ce = null, Je = null;
        B !== void 0 && (rn(B), ce = "" + B), S(k) && (rn(k.key), ce = "" + k.key), P(k) && (Je = k.ref, ve(k, me));
        for (be in k)
          ue.call(k, be) && !_n.hasOwnProperty(be) && (fe[be] = k[be]);
        if (m && m.defaultProps) {
          var Pe = m.defaultProps;
          for (be in Pe)
            fe[be] === void 0 && (fe[be] = Pe[be]);
        }
        if (ce || Je) {
          var Ne = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ce && Y(fe, Ne), Je && pe(fe, Ne);
        }
        return te(m, ce, Je, me, $, on.current, fe);
      }
    }
    var ke = E.ReactCurrentOwner, ze = E.ReactDebugCurrentFrame;
    function tt(m) {
      if (m) {
        var k = m._owner, B = Re(m.type, m._source, k ? k.type : null);
        ze.setExtraStackFrame(B);
      } else
        ze.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function cn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function Ke() {
      {
        if (ke.current) {
          var m = F(ke.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function nt(m) {
      return "";
    }
    var Ze = {};
    function Pt(m) {
      {
        var k = Ke();
        if (!k) {
          var B = typeof m == "string" ? m : m.displayName || m.name;
          B && (k = `

Check the top-level render call using <` + B + ">.");
        }
        return k;
      }
    }
    function rt(m, k) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var B = Pt(k);
        if (Ze[B])
          return;
        Ze[B] = !0;
        var $ = "";
        m && m._owner && m._owner !== ke.current && ($ = " It was passed a child from " + F(m._owner.type) + "."), tt(m), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, $), tt(null);
      }
    }
    function Xt(m, k) {
      {
        if (typeof m != "object")
          return;
        if (Ae(m))
          for (var B = 0; B < m.length; B++) {
            var $ = m[B];
            cn($) && rt($, k);
          }
        else if (cn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var me = h(m);
          if (typeof me == "function" && me !== m.entries)
            for (var be = me.call(m), fe; !(fe = be.next()).done; )
              cn(fe.value) && rt(fe.value, k);
        }
      }
    }
    function ht(m) {
      {
        var k = m.type;
        if (k == null || typeof k == "string")
          return;
        var B;
        if (typeof k == "function")
          B = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === d))
          B = k.propTypes;
        else
          return;
        if (B) {
          var $ = F(k);
          Rt(B, m.props, "prop", $, m);
        } else if (k.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var me = F(k);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(m) {
      {
        for (var k = Object.keys(m.props), B = 0; B < k.length; B++) {
          var $ = k[B];
          if ($ !== "children" && $ !== "key") {
            tt(m), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), tt(null);
            break;
          }
        }
        m.ref !== null && (tt(m), b("Invalid attribute `ref` supplied to `React.Fragment`."), tt(null));
      }
    }
    var Qn = {};
    function Tr(m, k, B, $, me, be) {
      {
        var fe = X(m);
        if (!fe) {
          var ce = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = nt();
          Je ? ce += Je : ce += Ke();
          var Pe;
          m === null ? Pe = "null" : Ae(m) ? Pe = "array" : m !== void 0 && m.$$typeof === n ? (Pe = "<" + (F(m.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof m, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ce);
        }
        var Ne = ye(m, k, B, me, be);
        if (Ne == null)
          return Ne;
        if (fe) {
          var je = k.children;
          if (je !== void 0)
            if ($)
              if (Ae(je)) {
                for (var Cn = 0; Cn < je.length; Cn++)
                  Xt(je[Cn], m);
                Object.freeze && Object.freeze(je);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(je, m);
        }
        if (ue.call(k, "key")) {
          var ln = F(m), ot = Object.keys(k).filter(function(Zf) {
            return Zf !== "key";
          }), us = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qn[ln + us]) {
            var Kf = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, us, ln, Kf, ln), Qn[ln + us] = !0;
          }
        }
        return m === r ? Yt(Ne) : ht(Ne), Ne;
      }
    }
    function qe(m, k, B) {
      return Tr(m, k, B, !0);
    }
    function Or(m, k, B) {
      return Tr(m, k, B, !1);
    }
    var ls = Or, Ie = qe;
    tr.Fragment = r, tr.jsx = ls, tr.jsxs = Ie;
  }()), tr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? Rr.exports = s0() : Rr.exports = i0()), Rr.exports;
}
var U = a0(), at = function() {
  return at = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
    }
    return n;
  }, at.apply(this, arguments);
};
function In(t, n, e) {
  if (e || arguments.length === 2) for (var r = 0, o = n.length, s; r < o; r++)
    (s || !(r in n)) && (s || (s = Array.prototype.slice.call(n, 0, r)), s[r] = n[r]);
  return t.concat(s || Array.prototype.slice.call(n));
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
), Te = "-ms-", ur = "-moz-", Ee = "-webkit-", al = "comm", Fo = "rule", zi = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vi = String.fromCharCode, js = Object.assign;
function h0(t, n) {
  return $e(t, 0) ^ 45 ? (((n << 2 ^ $e(t, 0)) << 2 ^ $e(t, 1)) << 2 ^ $e(t, 2)) << 2 ^ $e(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Ht(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function ie(t, n, e) {
  return t.replace(n, e);
}
function Xr(t, n, e) {
  return t.indexOf(n, e);
}
function $e(t, n) {
  return t.charCodeAt(n) | 0;
}
function Nn(t, n, e) {
  return t.slice(n, e);
}
function jt(t) {
  return t.length;
}
function fl(t) {
  return t.length;
}
function cr(t, n) {
  return n.push(t), t;
}
function x0(t, n) {
  return t.map(n).join("");
}
function ba(t, n) {
  return t.filter(function(e) {
    return !Ht(e, n);
  });
}
var zo = 1, jn = 1, dl = 0, mt = 0, Ve = 0, qn = "";
function Vo(t, n, e, r, o, s, i, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: s, line: zo, column: jn, length: i, return: "", siblings: a };
}
function $t(t, n) {
  return js(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function An(t) {
  for (; t.root; )
    t = $t(t.root, { children: [t] });
  cr(t, t.siblings);
}
function p0() {
  return Ve;
}
function m0() {
  return Ve = mt > 0 ? $e(qn, --mt) : 0, jn--, Ve === 10 && (jn = 1, zo--), Ve;
}
function St() {
  return Ve = mt < dl ? $e(qn, mt++) : 0, jn++, Ve === 10 && (jn = 1, zo++), Ve;
}
function mn() {
  return $e(qn, mt);
}
function Yr() {
  return mt;
}
function Ho(t, n) {
  return Nn(qn, t, n);
}
function Ls(t) {
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
  return zo = jn = 1, dl = jt(qn = t), mt = 0, [];
}
function v0(t) {
  return qn = "", t;
}
function fs(t) {
  return ul(Ho(mt - 1, Ms(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (Ve = mn()) && Ve < 33; )
    St();
  return Ls(t) > 2 || Ls(Ve) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && St() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Ho(t, Yr() + (n < 6 && mn() == 32 && St() == 32));
}
function Ms(t) {
  for (; St(); )
    switch (Ve) {
      // ] ) " '
      case t:
        return mt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ms(Ve);
        break;
      // (
      case 40:
        t === 41 && Ms(t);
        break;
      // \
      case 92:
        St();
        break;
    }
  return mt;
}
function S0(t, n) {
  for (; St() && t + Ve !== 57; )
    if (t + Ve === 84 && mn() === 47)
      break;
  return "/*" + Ho(n, mt - 1) + "*" + Vi(t === 47 ? t : St());
}
function w0(t) {
  for (; !Ls(mn()); )
    St();
  return Ho(t, mt);
}
function E0(t) {
  return v0($r("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function $r(t, n, e, r, o, s, i, a, c) {
  for (var u = 0, f = 0, d = i, l = 0, v = 0, g = 0, x = 1, h = 1, E = 1, b = 0, p = "", A = o, y = s, O = r, C = p; h; )
    switch (g = b, b = St()) {
      // (
      case 40:
        if (g != 108 && $e(C, d - 1) == 58) {
          Xr(C += ie(fs(b), "&", "&\f"), "&\f", ll(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += fs(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += y0(g);
        break;
      // \
      case 92:
        C += b0(Yr() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            cr(_0(S0(St(), Yr()), n, e, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * x:
        a[u++] = jt(C) * E;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (C = ie(C, /\f/g, "")), v > 0 && jt(C) - d && cr(v > 32 ? wa(C + ";", r, e, d - 1, c) : wa(ie(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (cr(O = Sa(C, n, e, u, f, o, a, p, A = [], y = [], d, s), s), b === 123)
              if (f === 0)
                $r(C, n, O, O, A, s, d, a, y);
              else
                switch (l === 99 && $e(C, 3) === 110 ? 100 : l) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $r(t, O, O, r && cr(Sa(t, O, O, 0, 0, o, a, p, o, A = [], d, y), y), o, y, d, a, r ? A : y);
                    break;
                  default:
                    $r(C, O, O, O, [""], y, 0, a, y);
                }
        }
        u = f = v = 0, x = E = 1, p = C = "", d = i;
        break;
      // :
      case 58:
        d = 1 + jt(C), v = g;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && m0() == 125)
            continue;
        }
        switch (C += Vi(b), b * x) {
          // &
          case 38:
            E = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (jt(C) - 1) * E, E = 1;
            break;
          // @
          case 64:
            mn() === 45 && (C += fs(St())), l = mn(), f = d = jt(p = C += w0(Yr())), b++;
            break;
          // -
          case 45:
            g === 45 && jt(C) == 2 && (x = 0);
        }
    }
  return s;
}
function Sa(t, n, e, r, o, s, i, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? s : [""], g = fl(v), x = 0, h = 0, E = 0; x < r; ++x)
    for (var b = 0, p = Nn(t, l + 1, l = ll(h = i[x])), A = t; b < g; ++b)
      (A = ul(h > 0 ? v[b] + " " + p : ie(p, /&\f/g, v[b]))) && (c[E++] = A);
  return Vo(t, n, e, o === 0 ? Fo : a, c, u, f, d);
}
function _0(t, n, e, r) {
  return Vo(t, n, e, al, Vi(p0()), Nn(t, 2, -2), 0, r);
}
function wa(t, n, e, r, o) {
  return Vo(t, n, e, zi, Nn(t, 0, r), Nn(t, r + 1, -1), r, o);
}
function hl(t, n, e) {
  switch (h0(t, n)) {
    // color-adjust
    case 5103:
      return Ee + "print-" + t + t;
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
      return Ee + t + t;
    // tab-size
    case 4789:
      return ur + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + t + ur + t + Te + t + t;
    // writing-mode
    case 5936:
      switch ($e(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ee + t + Te + t + t;
    // order
    case 6165:
      return Ee + t + Te + "flex-" + t + t;
    // align-items
    case 5187:
      return Ee + t + ie(t, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Te + "flex-$1$2") + t;
    // align-self
    case 5443:
      return Ee + t + Te + "flex-item-" + ie(t, /flex-|-self/g, "") + (Ht(t, /flex-|baseline/) ? "" : Te + "grid-row-" + ie(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return Ee + t + Te + "flex-line-pack" + ie(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return Ee + t + Te + ie(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return Ee + t + Te + ie(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return Ee + "box-" + ie(t, "-grow", "") + Ee + t + Te + ie(t, "grow", "positive") + t;
    // transition
    case 4554:
      return Ee + ie(t, /([^-])(transform)/g, "$1" + Ee + "$2") + t;
    // cursor
    case 6187:
      return ie(ie(ie(t, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return ie(t, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(t, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + t + t;
    // justify-self
    case 4200:
      if (!Ht(t, /flex-|baseline/)) return Te + "grid-column-align" + Nn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Te + ie(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Ht(r.props, /grid-\w+-end/);
      }) ? ~Xr(t + (e = e[n].value), "span", 0) ? t : Te + ie(t, "-start", "") + t + Te + "grid-row-span:" + (~Xr(e, "span", 0) ? Ht(e, /\d+/) : +Ht(e, /\d+/) - +Ht(t, /\d+/)) + ";" : Te + ie(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ht(r.props, /grid-\w+-start/);
      }) ? t : Te + ie(ie(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(t, /(.+)-inline(.+)/, Ee + "$1$2") + t;
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
        switch ($e(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if ($e(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(t, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + ur + ($e(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Xr(t, "stretch", 0) ? hl(ie(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, i, a, c, u) {
        return Te + o + ":" + s + u + (i ? Te + o + "-span:" + (a ? c : +c - +s) + u : "") + t;
      });
    // position: sticky
    case 4949:
      if ($e(t, n + 6) === 121)
        return ie(t, ":", ":" + Ee) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch ($e(t, $e(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ee + ($e(t, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + Te + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return ie(t, ":", ":" + Te) + t;
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
function xo(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function C0(t, n, e, r) {
  switch (t.type) {
    case d0:
      if (t.children.length) break;
    case f0:
    case zi:
      return t.return = t.return || t.value;
    case al:
      return "";
    case cl:
      return t.return = t.value + "{" + xo(t.children, r) + "}";
    case Fo:
      if (!jt(t.value = t.props.join(","))) return "";
  }
  return jt(e = xo(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function A0(t) {
  var n = fl(t);
  return function(e, r, o, s) {
    for (var i = "", a = 0; a < n; a++)
      i += t[a](e, r, o, s) || "";
    return i;
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
      case zi:
        t.return = hl(t.value, t.length, e);
        return;
      case cl:
        return xo([$t(t, { value: ie(t.value, "@", "@" + Ee) })], r);
      case Fo:
        if (t.length)
          return x0(e = t.props, function(o) {
            switch (Ht(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                An($t(t, { props: [ie(o, /:(read-\w+)/, ":" + ur + "$1")] })), An($t(t, { props: [o] })), js(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                An($t(t, { props: [ie(o, /:(plac\w+)/, ":" + Ee + "input-$1")] })), An($t(t, { props: [ie(o, /:(plac\w+)/, ":" + ur + "$1")] })), An($t(t, { props: [ie(o, /:(plac\w+)/, Te + "input-$1")] })), An($t(t, { props: [o] })), js(t, { props: ba(e, r) });
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
}, wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xl = "active", pl = "data-styled-version", Uo = "6.1.18", Hi = `/*!sc*/
`, po = typeof window < "u" && typeof document < "u", P0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), k0 = function(t, n) {
  if (process.env.NODE_ENV !== "production") {
    var e = n ? ' with the id of "'.concat(n, '"') : "", r = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ea.test(i) ? (s = !1, Pr.delete(r)) : o.apply(void 0, In([i], a, !1));
      }, We(), s && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (i) {
      Ea.test(i.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Ln = Object.freeze({});
function I0(t, n, e) {
  return e === void 0 && (e = Ln), t.theme !== e.theme && t.theme || n || e.theme;
}
var Ds = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(t) {
  return t.replace(N0, "-").replace(j0, "");
}
var L0 = /(a)(d)/gi, kr = 52, Ca = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bs(t) {
  var n, e = "";
  for (n = Math.abs(t); n > kr; n = n / kr | 0) e = Ca(n % kr) + e;
  return (Ca(n % kr) + e).replace(L0, "$1-$2");
}
var ds, ml = 5381, fn = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, gl = function(t) {
  return fn(ml, t);
};
function M0(t) {
  return Bs(gl(t) >>> 0);
}
function vl(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function hs(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var yl = typeof Symbol == "function" && Symbol.for, bl = yl ? Symbol.for("react.memo") : 60115, D0 = yl ? Symbol.for("react.forward_ref") : 60112, B0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, F0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Sl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, z0 = ((ds = {})[D0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ds[bl] = Sl, ds);
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
    for (var s = Aa(t), i = Aa(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in F0 || e && e[c] || i && c in i || s && c in s)) {
        var u = U0(n, c);
        try {
          V0(t, c, u);
        } catch {
        }
      }
    }
  }
  return t;
}
function Mn(t) {
  return typeof t == "function";
}
function Ui(t) {
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
function Dn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Fs(t, n, e) {
  if (e === void 0 && (e = !1), !e && !Dn(t) && !Array.isArray(t)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) t[r] = Fs(t[r], n[r]);
  else if (Dn(n)) for (var r in n) t[r] = Fs(t[r], n[r]);
  return t;
}
function qi(t, n) {
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
  for (var e = t[0], r = [], o = 1, s = t.length; o < s; o += 1) r.push(t[o]);
  return r.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Wn(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(X0.apply(void 0, In([W0[t]], n, !1)).trim());
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
      for (var r = this.groupSizes, o = r.length, s = o; n >= s; ) if ((s <<= 1) < 0) throw Wn(16, "".concat(n));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var i = o; i < s; i++) this.groupSizes[i] = 0;
    }
    for (var a = this.indexOfGroup(n + 1), c = (i = 0, e.length); i < c; i++) this.tag.insertRule(a, e[i]) && (this.groupSizes[n]++, a++);
  }, t.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var e = this.groupSizes[n], r = this.indexOfGroup(n), o = r + e;
      this.groupSizes[n] = 0;
      for (var s = r; s < o; s++) this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(n) {
    var e = "";
    if (n >= this.length || this.groupSizes[n] === 0) return e;
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), s = o + r, i = o; i < s; i++) e += "".concat(this.tag.getRule(i)).concat(Hi);
    return e;
  }, t;
}(), $0 = 1 << 30, Gr = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map(), Kr = 1, Ir = function(t) {
  if (Gr.has(t)) return Gr.get(t);
  for (; mo.has(Kr); ) Kr++;
  var n = Kr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > $0)) throw Wn(16, "".concat(n));
  return Gr.set(t, n), mo.set(n, t), n;
}, G0 = function(t, n) {
  Kr = n + 1, Gr.set(t, n), mo.set(n, t);
}, K0 = "style[".concat(wn, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
  for (var r, o = e.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && t.registerName(n, r);
}, Q0 = function(t, n) {
  for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(Hi), o = [], s = 0, i = r.length; s < i; s++) {
    var a = r[s].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var u = 0 | parseInt(c[1], 10), f = c[2];
        u !== 0 && (G0(f, u), J0(t, f, c[3]), t.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Pa = function(t) {
  for (var n = document.querySelectorAll(K0), e = 0, r = n.length; e < r; e++) {
    var o = n[e];
    o && o.getAttribute(wn) !== xl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(t) {
  var n = document.head, e = t || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(wn, "]")));
    return c[c.length - 1];
  }(e), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(wn, xl), r.setAttribute(pl, Uo);
  var i = ed();
  return i && r.setAttribute("nonce", i), e.insertBefore(r, s), r;
}, td = function() {
  function t(n) {
    this.element = El(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var i = r[o];
        if (i.ownerNode === e) return i;
      }
      throw Wn(17);
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
}(), ka = po, od = { isServer: !po, useCSSOMInjection: !P0 }, _l = function() {
  function t(n, e, r) {
    n === void 0 && (n = Ln), e === void 0 && (e = {});
    var o = this;
    this.options = at(at({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && po && ka && (ka = !1, Pa(this)), qi(this, function() {
      return function(s) {
        for (var i = s.getTag(), a = i.length, c = "", u = function(d) {
          var l = function(E) {
            return mo.get(E);
          }(d);
          if (l === void 0) return "continue";
          var v = s.names.get(l), g = i.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var x = "".concat(wn, ".g").concat(d, '[id="').concat(l, '"]'), h = "";
          v !== void 0 && v.forEach(function(E) {
            E.length > 0 && (h += "".concat(E, ","));
          }), c += "".concat(g).concat(x, '{content:"').concat(h, '"}').concat(Hi);
        }, f = 0; f < a; f++) u(f);
        return c;
      }(o);
    });
  }
  return t.registerId = function(n) {
    return Ir(n);
  }, t.prototype.rehydrate = function() {
    !this.server && po && Pa(this);
  }, t.prototype.reconstructWithOptions = function(n, e) {
    return e === void 0 && (e = !0), new t(at(at({}, this.options), n), this.gs, e && this.names || void 0);
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
}(), sd = /&/g, id = /^\s*\/\/.*$/gm;
function Cl(t, n) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(n, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(n, " ")), e.props = e.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Cl(e.children, n)), e;
  });
}
function ad(t) {
  var n, e, r, o = Ln, s = o.options, i = s === void 0 ? Ln : s, a = o.plugins, c = a === void 0 ? qo : a, u = function(l, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : l;
  }, f = c.slice();
  f.push(function(l) {
    l.type === Fo && l.value.includes("&") && (l.props[0] = l.props[0].replace(sd, e).replace(r, u));
  }), i.prefix && f.push(O0), f.push(C0);
  var d = function(l, v, g, x) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), x === void 0 && (x = "&"), n = x, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var h = l.replace(id, ""), E = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(h, " }") : h);
    i.namespace && (E = Cl(E, i.namespace));
    var b = [];
    return xo(E, A0(f.concat(T0(function(p) {
      return b.push(p);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(l, v) {
    return v.name || Wn(15), fn(l, v.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zs = ad(), Al = Fe.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zs });
Al.Consumer;
Fe.createContext(void 0);
function Ia() {
  return Qt(Al);
}
var Na = function() {
  function t(n, e) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = zs);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = e, qi(this, function() {
      throw Wn(12, String(r.name));
    });
  }
  return t.prototype.getName = function(n) {
    return n === void 0 && (n = zs), this.name + n.hash;
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
    var s = t[o];
    t.hasOwnProperty(o) && !Tl(s) && (Array.isArray(s) && s.isCss || Mn(s) ? r.push("".concat(ja(o), ":"), s, ";") : Dn(s) ? r.push.apply(r, In(In(["".concat(o, " {")], Ol(s), !1), ["}"], !1)) : r.push("".concat(ja(o), ": ").concat((n = o, (e = s) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || n in R0 || n.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return r;
};
function gn(t, n, e, r) {
  if (Tl(t)) return [];
  if (Ui(t)) return [".".concat(t.styledComponentId)];
  if (Mn(t)) {
    if (!Mn(s = t) || s.prototype && s.prototype.isReactComponent || !n) return [t];
    var o = t(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Dn(o) || o === null || console.error("".concat(vl(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gn(o, n, e, r);
  }
  var s;
  return t instanceof Na ? e ? (t.inject(e, r), [t.getName(r)]) : [t] : Dn(t) ? Ol(t) : Array.isArray(t) ? Array.prototype.concat.apply(qo, t.map(function(i) {
    return gn(i, n, e, r);
  })) : [t.toString()];
}
function ud(t) {
  for (var n = 0; n < t.length; n += 1) {
    var e = t[n];
    if (Mn(e) && !Ui(e)) return !1;
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
      var s = Ra(gn(this.rules, n, e, r)), i = Bs(fn(this.baseHash, s) >>> 0);
      if (!e.hasNameForId(this.componentId, i)) {
        var a = r(s, ".".concat(i), void 0, this.componentId);
        e.insertRules(this.componentId, i, a);
      }
      o = hn(o, i), this.staticRulesId = i;
    }
    else {
      for (var c = fn(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") u += d, process.env.NODE_ENV !== "production" && (c = fn(c, d));
        else if (d) {
          var l = Ra(gn(d, n, e, r));
          c = fn(c, l + f), u += l;
        }
      }
      if (u) {
        var v = Bs(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(u, ".".concat(v), void 0, this.componentId)), o = hn(o, v);
      }
    }
    return o;
  }, t;
}(), Rl = Fe.createContext(void 0);
Rl.Consumer;
var xs = {}, La = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Ui(t), o = t, s = !hs(t), i = n.attrs, a = i === void 0 ? qo : i, c = n.componentId, u = c === void 0 ? function(A, y) {
    var O = typeof A != "string" ? "sc" : _a(A);
    xs[O] = (xs[O] || 0) + 1;
    var C = "".concat(O, "-").concat(M0(Uo + O + xs[O]));
    return y ? "".concat(y, "-").concat(C) : C;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(A) {
    return hs(A) ? "styled.".concat(A) : "Styled(".concat(vl(A), ")");
  }(t) : f, l = n.displayName && n.componentId ? "".concat(_a(n.displayName), "-").concat(n.componentId) : n.componentId || u, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      g = function(A, y) {
        return x(A, y) && h(A, y);
      };
    } else g = x;
  }
  var E = new dd(e, l, r ? o.componentStyle : void 0);
  function b(A, y) {
    return function(O, C, L) {
      var z = O.attrs, X = O.componentStyle, oe = O.defaultProps, G = O.foldedComponentIds, F = O.styledComponentId, W = O.target, H = Fe.useContext(Rl), ee = Ia(), Z = O.shouldForwardProp || ee.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(F);
      var J = I0(C, H, oe) || Ln, Q = function(de, ge, I) {
        for (var M, R = at(at({}, ge), { className: void 0, theme: I }), N = 0; N < de.length; N += 1) {
          var w = Mn(M = de[N]) ? M(R) : M;
          for (var j in w) R[j] = j === "className" ? hn(R[j], w[j]) : j === "style" ? at(at({}, R[j]), w[j]) : w[j];
        }
        return ge.className && (R.className = hn(R.className, ge.className)), R;
      }(z, C, J), ae = Q.as || W, se = {};
      for (var K in Q) Q[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Q.theme === J || (K === "forwardedAs" ? se.as = Q.forwardedAs : Z && !Z(K, ae) || (se[K] = Q[K], Z || process.env.NODE_ENV !== "development" || u0(K) || La.has(K) || !Ds.has(ae) || (La.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ne = function(de, ge) {
        var I = Ia(), M = de.generateAndInjectStyles(ge, I.styleSheet, I.stylis);
        return process.env.NODE_ENV !== "production" && pa(M), M;
      }(X, Q);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(ne);
      var xe = hn(G, F);
      return ne && (xe += " " + ne), Q.className && (xe += " " + Q.className), se[hs(ae) && !Ds.has(ae) ? "class" : "className"] = xe, L && (se.ref = L), e0(ae, se);
    }(p, A, y);
  }
  b.displayName = d;
  var p = Fe.forwardRef(b);
  return p.attrs = v, p.componentStyle = E, p.displayName = d, p.shouldForwardProp = g, p.foldedComponentIds = r ? hn(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = l, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = r ? function(y) {
      for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
      for (var L = 0, z = O; L < z.length; L++) Fs(y, z[L], !0);
      return y;
    }({}, o.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (k0(d, l), p.warnTooManyClasses = /* @__PURE__ */ function(A, y) {
    var O = {}, C = !1;
    return function(L) {
      if (!C && (O[L] = !0, Object.keys(O).length >= 200)) {
        var z = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(z, `.
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
  }(d, l)), qi(p, function() {
    return ".".concat(p.styledComponentId);
  }), s && wl(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
function Ma(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var Da = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function xd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Mn(t) || Dn(t)) return Da(gn(Ma(qo, In([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? gn(r) : Da(gn(Ma(r, n)));
}
function Vs(t, n, e) {
  if (e === void 0 && (e = Ln), !n) throw Wn(1, n);
  var r = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return t(n, e, xd.apply(void 0, In([o], s, !1)));
  };
  return r.attrs = function(o) {
    return Vs(t, n, at(at({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vs(t, n, at(at({}, e), o));
  }, r;
}
var Pl = function(t) {
  return Vs(hd, t);
}, _t = Pl;
Ds.forEach(function(t) {
  _t[t] = Pl(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Nr = "__sc-".concat(wn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Nr] || (window[Nr] = 0), window[Nr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Nr] += 1);
const wr = go;
(function(t, n) {
  const e = go, r = t();
  for (; ; )
    try {
      if (-parseInt(e(224)) / 1 * (parseInt(e(231)) / 2) + parseInt(e(222)) / 3 * (parseInt(e(220)) / 4) + parseInt(e(226)) / 5 * (-parseInt(e(228)) / 6) + parseInt(e(232)) / 7 * (parseInt(e(221)) / 8) + parseInt(e(225)) / 9 * (parseInt(e(234)) / 10) + -parseInt(e(235)) / 11 * (parseInt(e(230)) / 12) + -parseInt(e(229)) / 13 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(vo, 416479);
const pd = _t[wr(233)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = _t[wr(233)]`
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
`, gd = _t[wr(227)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = _t[wr(223)]`
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
`;
function go(t, n) {
  const e = vo();
  return go = function(r, o) {
    return r = r - 220, e[r];
  }, go(t, n);
}
function vo() {
  const t = ["207xFazBh", "5VlbQNm", "canvas", "2464662qSHjuZ", "549575jZVDhy", "900dvXDfM", "2GqfejG", "105637vZSqnu", "div", "254360GtGLVc", "22121KccjEJ", "12pBDyoL", "224JAbQVG", "26127xGpEEv", "span", "13347NimRUN"];
  return vo = function() {
    return t;
  }, vo();
}
const yd = _t[wr(233)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Mt = /* @__PURE__ */ Object.create(null);
Mt.open = "0";
Mt.close = "1";
Mt.ping = "2";
Mt.pong = "3";
Mt.message = "4";
Mt.upgrade = "5";
Mt.noop = "6";
const Zr = /* @__PURE__ */ Object.create(null);
Object.keys(Mt).forEach((t) => {
  Zr[Mt[t]] = t;
});
const Hs = { type: "error", data: "parser error" }, kl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Wi = ({ type: t, data: n }, e, r) => kl && n instanceof Blob ? e ? r(n) : Ba(n, r) : Il && (n instanceof ArrayBuffer || Nl(n)) ? e ? r(n) : Ba(new Blob([n]), r) : r(Mt[t] + (n || "")), Ba = (t, n) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    n("b" + (r || ""));
  }, e.readAsDataURL(t);
};
function Fa(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let ps;
function bd(t, n) {
  if (kl && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Fa).then(n);
  if (Il && (t.data instanceof ArrayBuffer || Nl(t.data)))
    return n(Fa(t.data));
  Wi(t, !1, (e) => {
    ps || (ps = new TextEncoder()), n(ps.encode(e));
  });
}
const za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < za.length; t++)
  lr[za.charCodeAt(t)] = t;
const Sd = (t) => {
  let n = t.length * 0.75, e = t.length, r, o = 0, s, i, a, c;
  t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
  const u = new ArrayBuffer(n), f = new Uint8Array(u);
  for (r = 0; r < e; r += 4)
    s = lr[t.charCodeAt(r)], i = lr[t.charCodeAt(r + 1)], a = lr[t.charCodeAt(r + 2)], c = lr[t.charCodeAt(r + 3)], f[o++] = s << 2 | i >> 4, f[o++] = (i & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return u;
}, wd = typeof ArrayBuffer == "function", Xi = (t, n) => {
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
  } : Hs;
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
}, Ll = "", _d = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((s, i) => {
    Wi(s, !1, (a) => {
      r[i] = a, ++o === e && n(r.join(Ll));
    });
  });
}, Cd = (t, n) => {
  const e = t.split(Ll), r = [];
  for (let o = 0; o < e.length; o++) {
    const s = Xi(e[o], n);
    if (r.push(s), s.type === "error")
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
          const s = new DataView(o.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const s = new DataView(o.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        t.data && typeof t.data != "string" && (o[0] |= 128), n.enqueue(o), n.enqueue(e);
      });
    }
  });
}
let ms;
function jr(t) {
  return t.reduce((n, e) => n + e.length, 0);
}
function Lr(t, n) {
  if (t[0].length === n)
    return t.shift();
  const e = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    e[o] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), e;
}
function Td(t, n) {
  ms || (ms = new TextDecoder());
  const e = [];
  let r = 0, o = -1, s = !1;
  return new TransformStream({
    transform(i, a) {
      for (e.push(i); ; ) {
        if (r === 0) {
          if (jr(e) < 1)
            break;
          const c = Lr(e, 1);
          s = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (jr(e) < 2)
            break;
          const c = Lr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (jr(e) < 8)
            break;
          const c = Lr(e, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hs);
            break;
          }
          o = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (jr(e) < o)
            break;
          const c = Lr(e, o);
          a.enqueue(Xi(s ? c : ms.decode(c), n)), r = 0;
        }
        if (o === 0 || o > t) {
          a.enqueue(Hs);
          break;
        }
      }
    }
  });
}
const Ml = 4;
function Ue(t) {
  if (t) return Od(t);
}
function Od(t) {
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
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), pt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const Pd = pt.setTimeout, kd = pt.clearTimeout;
function Xo(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = Pd.bind(pt), t.clearTimeoutFn = kd.bind(pt)) : (t.setTimeoutFn = pt.setTimeout.bind(pt), t.clearTimeoutFn = pt.clearTimeout.bind(pt));
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
function Ld(t) {
  let n = "";
  for (let e in t)
    t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
  return n;
}
function Md(t) {
  let n = {}, e = t.split("&");
  for (let r = 0, o = e.length; r < o; r++) {
    let s = e[r].split("=");
    n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return n;
}
class Dd extends Error {
  constructor(n, e, r) {
    super(n), this.description = e, this.context = r, this.type = "TransportError";
  }
}
class Yi extends Ue {
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
    const e = Xi(n, this.socket.binaryType);
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
    const e = Ld(n);
    return e.length ? "?" + e : "";
  }
}
class Bd extends Yi {
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
    r.on("success", e), r.on("error", (o, s) => {
      this.onError("xhr post error", o, s);
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
let Pn = class Jr extends Ue {
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
class qd extends Yi {
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
      Wi(r, this.supportsBinary, (s) => {
        try {
          this.doWrite(r, s);
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
const gs = pt.WebSocket || pt.MozWebSocket;
class Wd extends qd {
  createSocket(n, e, r) {
    return Vl ? new gs(n, e, r) : e ? new gs(n, e) : new gs(n);
  }
  doWrite(n, e) {
    this.ws.send(e);
  }
}
class Xd extends Yi {
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
        const s = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), s());
          }).catch((a) => {
          });
        };
        s();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
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
function Us(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const n = t, e = t.indexOf("["), r = t.indexOf("]");
  e != -1 && r != -1 && (t = t.substring(0, e) + t.substring(e, r).replace(/:/g, ";") + t.substring(r, t.length));
  let o = $d.exec(t || ""), s = {}, i = 14;
  for (; i--; )
    s[Gd[i]] = o[i] || "";
  return e != -1 && r != -1 && (s.source = n, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Kd(s, s.path), s.queryKey = Zd(s, s.query), s;
}
function Kd(t, n) {
  const e = /\/{2,9}/g, r = n.replace(e, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Zd(t, n) {
  const e = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, s) {
    o && (e[o] = s);
  }), e;
}
const qs = typeof addEventListener == "function" && typeof removeEventListener == "function", Qr = [];
qs && addEventListener("offline", () => {
  Qr.forEach((t) => t());
}, !1);
class Jt extends Ue {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, e) {
    if (super(), this.binaryType = Rd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (e = n, n = null), n) {
      const r = Us(n);
      e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
    } else e.host && (e.hostname = Us(e.host).host);
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Md(this.opts.query)), qs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    e.EIO = Ml, e.transport = n, this.id && (e.sid = this.id);
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
    const s = {
      type: n,
      data: e,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), qs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Qr.indexOf(this._offlineEventListener);
        r !== -1 && Qr.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Jt.protocol = Ml;
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
            const l = new Error("probe error");
            l.transport = e.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function s() {
      r || (r = !0, f(), e.close(), e = null);
    }
    const i = (d) => {
      const l = new Error("probe error: " + d);
      l.transport = e.name, s(), this.emitReserved("upgradeError", l);
    };
    function a() {
      i("transport closed");
    }
    function c() {
      i("socket closed");
    }
    function u(d) {
      e && d.name !== e.name && s();
    }
    const f = () => {
      e.removeListener("open", o), e.removeListener("error", i), e.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    e.once("open", o), e.once("error", i), e.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
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
  e = e || typeof location < "u" && location, t == null && (t = e.protocol + "//" + e.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = e.protocol + t : t = e.host + t), /^(https?|wss?):\/\//.test(t) || (typeof e < "u" ? t = e.protocol + "//" + t : t = "https://" + t), r = Us(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + n, r.href = r.protocol + "://" + s + (e && e.port === r.port ? "" : ":" + r.port), r;
}
const th = typeof ArrayBuffer == "function", nh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Hl = Object.prototype.toString, rh = typeof Blob == "function" || typeof Blob < "u" && Hl.call(Blob) === "[object BlobConstructor]", oh = typeof File == "function" || typeof File < "u" && Hl.call(File) === "[object FileConstructor]";
function $i(t) {
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
  if ($i(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return eo(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && eo(t[e]))
      return !0;
  return !1;
}
function sh(t) {
  const n = [], e = t.data, r = t;
  return r.data = Ws(e, n), r.attachments = n.length, { packet: r, buffers: n };
}
function Ws(t, n) {
  if (!t)
    return t;
  if ($i(t)) {
    const e = { _placeholder: !0, num: n.length };
    return n.push(t), e;
  } else if (Array.isArray(t)) {
    const e = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      e[r] = Ws(t[r], n);
    return e;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const e = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = Ws(t[r], n));
    return e;
  }
  return t;
}
function ih(t, n) {
  return t.data = Xs(t.data, n), delete t.attachments, t;
}
function Xs(t, n) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
      return n[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let e = 0; e < t.length; e++)
      t[e] = Xs(t[e], n);
  else if (typeof t == "object")
    for (const e in t)
      Object.prototype.hasOwnProperty.call(t, e) && (t[e] = Xs(t[e], n));
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
var he;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(he || (he = {}));
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
    return (n.type === he.EVENT || n.type === he.ACK) && eo(n) ? this.encodeAsBinary({
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
    const e = sh(n), r = this.encodeAsString(e.packet), o = e.buffers;
    return o.unshift(r), o;
  }
}
function Ha(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Gi extends Ue {
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
      r || e.type === he.BINARY_ACK ? (e.type = r ? he.EVENT : he.ACK, this.reconstructor = new uh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if ($i(n) || n.base64)
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
      const s = e + 1;
      for (; n.charAt(++e) !== "-" && e != n.length; )
        ;
      const i = n.substring(s, e);
      if (i != Number(i) || n.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(i);
    }
    if (n.charAt(e + 1) === "/") {
      const s = e + 1;
      for (; ++e && !(n.charAt(e) === "," || e === n.length); )
        ;
      r.nsp = n.substring(s, e);
    } else
      r.nsp = "/";
    const o = n.charAt(e + 1);
    if (o !== "" && Number(o) == o) {
      const s = e + 1;
      for (; ++e; ) {
        const i = n.charAt(e);
        if (i == null || Number(i) != i) {
          --e;
          break;
        }
        if (e === n.length)
          break;
      }
      r.id = Number(n.substring(s, e + 1));
    }
    if (n.charAt(++e)) {
      const s = this.tryParse(n.substr(e));
      if (Gi.isPayloadValid(r.type, s))
        r.data = s;
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
        return Ha(e);
      case he.DISCONNECT:
        return e === void 0;
      case he.CONNECT_ERROR:
        return typeof e == "string" || Ha(e);
      case he.EVENT:
      case he.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && ah.indexOf(e[0]) === -1);
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
      const e = ih(this.reconPack, this.buffers);
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
  Decoder: Gi,
  Encoder: lh,
  get PacketType() {
    return he;
  },
  protocol: ch
}, Symbol.toStringTag, { value: "Module" }));
function yt(t, n, e) {
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
class Ul extends Ue {
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
    var r, o, s;
    if (dh.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (e.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const i = {
      type: he.EVENT,
      data: e
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const f = this.ids++, d = e.pop();
      this._registerAckCallback(f, d), i.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
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
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[n];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === n && this.sendBuffer.splice(a, 1);
      e.call(this, new Error("operation has timed out"));
    }, o), i = (...a) => {
      this.io.clearTimeoutFn(s), e.apply(this, a);
    };
    i.withError = !0, this.acks[n] = i;
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
      const s = (i, a) => i ? o(i) : r(a);
      s.withError = !0, e.push(s), this.emit(n, ...e);
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
    n.push((o, ...s) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), e && e(o)) : (this._queue.shift(), e && e(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
function Xn(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Xn.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), e = Math.floor(n * this.jitter * t);
    t = (Math.floor(n * 10) & 1) == 0 ? t - e : t + e;
  }
  return Math.min(t, this.max) | 0;
};
Xn.prototype.reset = function() {
  this.attempts = 0;
};
Xn.prototype.setMin = function(t) {
  this.ms = t;
};
Xn.prototype.setMax = function(t) {
  this.max = t;
};
Xn.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Ys extends Ue {
  constructor(n, e) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (e = n, n = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Xo(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Xn({
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
    const o = yt(e, "open", function() {
      r.onopen(), n && n();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, i = yt(e, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), s(new Error("timeout")), e.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(i), this;
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
const nr = {};
function to(t, n) {
  typeof t == "object" && (n = t, t = void 0), n = n || {};
  const e = eh(t, n.path || "/socket.io"), r = e.source, o = e.id, s = e.path, i = nr[o] && s in nr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || i;
  let c;
  return a ? c = new Ys(r, n) : (nr[o] || (nr[o] = new Ys(r, n)), c = nr[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
}
Object.assign(to, {
  Manager: Ys,
  Socket: Ul,
  io: to,
  connect: to
});
var vs = { exports: {} };
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
        for (var s = "", i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          a && (s = o(s, r(a)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return e.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var i = "";
        for (var a in s)
          n.call(s, a) && s[a] && (i = o(i, a));
        return i;
      }
      function o(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      t.exports ? (e.default = e, t.exports = e) : window.classNames = e;
    })();
  }(vs)), vs.exports;
}
var xh = hh();
const et = /* @__PURE__ */ o0(xh);
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Dt.apply(null, arguments);
}
function _e(t) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _e(t);
}
var ph = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(t) {
  return (
    // Base object type
    t && _e(t) === "object" && // React Element type
    (t.$$typeof === ph || t.$$typeof === mh) && // React Fragment type
    t.type === gh
  );
}
var $s = {}, Ki = [], yh = function(n) {
  Ki.push(n);
};
function Zi(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Ki.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    e && console.error("Warning: ".concat(e));
  }
}
function bh(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Ki.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    e && console.warn("Note: ".concat(e));
  }
}
function ql() {
  $s = {};
}
function Wl(t, n, e) {
  !n && !$s[e] && (t(!1, e), $s[e] = !0);
}
function tn(t, n) {
  Wl(Zi, t, n);
}
function Sh(t, n) {
  Wl(bh, t, n);
}
tn.preMessage = yh;
tn.resetWarned = ql;
tn.noteOnce = Sh;
function wh(t, n) {
  if (_e(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (_e(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Xl(t) {
  var n = wh(t, "string");
  return _e(n) == "symbol" ? n : n + "";
}
function q(t, n, e) {
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
function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? qa(Object(e), !0).forEach(function(r) {
      q(t, r, e[r]);
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
  return t && _e(t) === "object" && Wa(t.nativeElement) ? t.nativeElement : Wa(t) ? t : null;
}
function _h(t) {
  var n = Eh(t);
  if (n)
    return n;
  if (t instanceof Fe.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, t);
  }
  return null;
}
var Mr = { exports: {} }, Se = {};
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
  if (Xa) return Se;
  Xa = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case t:
          switch (h = h.type, h) {
            case e:
            case o:
            case r:
            case u:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case c:
                case l:
                case d:
                case s:
                  return h;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  return Se.ContextConsumer = i, Se.ContextProvider = s, Se.Element = t, Se.ForwardRef = c, Se.Fragment = e, Se.Lazy = l, Se.Memo = d, Se.Portal = n, Se.Profiler = o, Se.StrictMode = r, Se.Suspense = u, Se.SuspenseList = f, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(h) {
    return x(h) === i;
  }, Se.isContextProvider = function(h) {
    return x(h) === s;
  }, Se.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Se.isForwardRef = function(h) {
    return x(h) === c;
  }, Se.isFragment = function(h) {
    return x(h) === e;
  }, Se.isLazy = function(h) {
    return x(h) === l;
  }, Se.isMemo = function(h) {
    return x(h) === d;
  }, Se.isPortal = function(h) {
    return x(h) === n;
  }, Se.isProfiler = function(h) {
    return x(h) === o;
  }, Se.isStrictMode = function(h) {
    return x(h) === r;
  }, Se.isSuspense = function(h) {
    return x(h) === u;
  }, Se.isSuspenseList = function(h) {
    return x(h) === f;
  }, Se.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === e || h === o || h === r || h === u || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === l || h.$$typeof === d || h.$$typeof === s || h.$$typeof === i || h.$$typeof === c || h.$$typeof === g || h.getModuleId !== void 0);
  }, Se.typeOf = x, Se;
}
var we = {};
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
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, x = !1, h = !1, E = !1, b = !1, p;
    p = Symbol.for("react.module.reference");
    function A(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === e || D === o || b || D === r || D === u || D === f || E || D === v || g || x || h || typeof D == "object" && D !== null && (D.$$typeof === l || D.$$typeof === d || D.$$typeof === s || D.$$typeof === i || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === p || D.getModuleId !== void 0));
    }
    function y(D) {
      if (typeof D == "object" && D !== null) {
        var Re = D.$$typeof;
        switch (Re) {
          case t:
            var ue = D.type;
            switch (ue) {
              case e:
              case o:
              case r:
              case u:
              case f:
                return ue;
              default:
                var Xe = ue && ue.$$typeof;
                switch (Xe) {
                  case a:
                  case i:
                  case c:
                  case l:
                  case d:
                  case s:
                    return Xe;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var O = i, C = s, L = t, z = c, X = e, oe = l, G = d, F = n, W = o, H = r, ee = u, Z = f, J = !1, Q = !1;
    function ae(D) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(D) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(D) {
      return y(D) === i;
    }
    function ne(D) {
      return y(D) === s;
    }
    function xe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function de(D) {
      return y(D) === c;
    }
    function ge(D) {
      return y(D) === e;
    }
    function I(D) {
      return y(D) === l;
    }
    function M(D) {
      return y(D) === d;
    }
    function R(D) {
      return y(D) === n;
    }
    function N(D) {
      return y(D) === o;
    }
    function w(D) {
      return y(D) === r;
    }
    function j(D) {
      return y(D) === u;
    }
    function Oe(D) {
      return y(D) === f;
    }
    we.ContextConsumer = O, we.ContextProvider = C, we.Element = L, we.ForwardRef = z, we.Fragment = X, we.Lazy = oe, we.Memo = G, we.Portal = F, we.Profiler = W, we.StrictMode = H, we.Suspense = ee, we.SuspenseList = Z, we.isAsyncMode = ae, we.isConcurrentMode = se, we.isContextConsumer = K, we.isContextProvider = ne, we.isElement = xe, we.isForwardRef = de, we.isFragment = ge, we.isLazy = I, we.isMemo = M, we.isPortal = R, we.isProfiler = N, we.isStrictMode = w, we.isSuspense = j, we.isSuspenseList = Oe, we.isValidElementType = A, we.typeOf = y;
  }()), we;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Mr.exports = Ch() : Mr.exports = Ah()), Mr.exports;
}
var ys = Th();
function Yl(t, n, e) {
  var r = _.useRef({});
  return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
}
var Oh = Number(n0.split(".")[0]), $l = function(n, e) {
  typeof n == "function" ? n(e) : _e(n) === "object" && n && "current" in n && (n.current = e);
}, Rh = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(s) {
    e.forEach(function(i) {
      $l(i, s);
    });
  };
}, Ph = function(n) {
  var e, r;
  if (!n)
    return !1;
  if (Gl(n) && Oh >= 19)
    return !0;
  var o = ys.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== ys.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== ys.ForwardRef);
};
function Gl(t) {
  return /* @__PURE__ */ t0(t) && !vh(t);
}
var kh = function(n) {
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
function Gs(t, n) {
  return Gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Gs(t, n);
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
  }), n && Gs(t, n);
}
function Bn(t) {
  return Bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Bn(t);
}
function Ji() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ji = function() {
    return !!t;
  })();
}
function vn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kl(t, n) {
  if (n && (_e(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vn(t);
}
function Yo(t) {
  var n = Ji();
  return function() {
    var e, r = Bn(t);
    if (n) {
      var o = Bn(this).constructor;
      e = Reflect.construct(r, arguments, o);
    } else e = r.apply(this, arguments);
    return Kl(this, e);
  };
}
function Ks(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function Ih(t) {
  if (Array.isArray(t)) return Ks(t);
}
function Zl(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Qi(t, n) {
  if (t) {
    if (typeof t == "string") return Ks(t, n);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ks(t, n) : void 0;
  }
}
function Nh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qt(t) {
  return Ih(t) || Zl(t) || Qi(t) || Nh();
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
  function o(s) {
    if (s === 0)
      eu(r), n();
    else {
      var i = Jl(function() {
        o(s - 1);
      });
      $o.set(r, i);
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
    var r, o, s, i, a = [], c = !0, u = !1;
    try {
      if (s = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = s.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function nu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(t, n) {
  return tu(t) || jh(t, n) || Qi(t, n) || nu();
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
function Lh(t, n) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Mh = "rc-util-key", Zs = /* @__PURE__ */ new Map();
function ru() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Mh;
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
  return Array.from((Zs.get(t) || t).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function ou(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Wt())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, s = o === void 0 ? 0 : o, i = Dh(r), a = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, i), a && s && c.setAttribute(Ja, "".concat(s)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var u = Go(n), f = u.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || ea(u)).filter(function(l) {
        if (!["prepend", "prependQueue"].includes(l.getAttribute(Za)))
          return !1;
        var v = Number(l.getAttribute(Ja) || 0);
        return s >= v;
      });
      if (d.length)
        return u.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    u.insertBefore(c, f);
  } else
    u.appendChild(c);
  return c;
}
function su(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Go(n);
  return (n.styles || ea(e)).find(function(r) {
    return r.getAttribute(ru(n)) === t;
  });
}
function iu(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = su(t, n);
  if (e) {
    var r = Go(n);
    r.removeChild(e);
  }
}
function Bh(t, n) {
  var e = Zs.get(t);
  if (!e || !Lh(document, e)) {
    var r = ou("", n), o = r.parentNode;
    Zs.set(t, o), t.removeChild(r);
  }
}
function yn(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), s = V(V({}, e), {}, {
    styles: o
  });
  Bh(r, s);
  var i = su(n, s);
  if (i) {
    var a, c;
    if ((a = s.csp) !== null && a !== void 0 && a.nonce && i.nonce !== ((c = s.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      i.nonce = (u = s.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== t && (i.innerHTML = t), i;
  }
  var f = ou(t, s);
  return f.setAttribute(ru(s), n), f;
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
function pr(t, n) {
  if (t == null) return {};
  var e, r, o = Fh(t, n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++) e = s[r], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
  }
  return o;
}
function zh(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(s, i) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(s);
    if (tn(!c, "Warning: There may be circular references"), c)
      return !1;
    if (s === i)
      return !0;
    if (e && a > 1)
      return !1;
    r.add(s);
    var u = a + 1;
    if (Array.isArray(s)) {
      if (!Array.isArray(i) || s.length !== i.length)
        return !1;
      for (var f = 0; f < s.length; f++)
        if (!o(s[f], i[f], u))
          return !1;
      return !0;
    }
    if (s && i && _e(s) === "object" && _e(i) === "object") {
      var d = Object.keys(s);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(l) {
        return o(s[l], i[l], u);
      });
    }
    return !1;
  }
  return o(t, n);
}
var Vh = "%";
function Js(t) {
  return t.join(Vh);
}
var Hh = /* @__PURE__ */ function() {
  function t(n) {
    Ct(this, t), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return At(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(Js(e));
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
      return this.opUpdate(Js(e), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, r) {
      var o = this.cache.get(e), s = r(o);
      s === null ? this.cache.delete(e) : this.cache.set(e, s);
    }
  }]), t;
}(), Fn = "data-token-hash", wt = "data-css-hash", Uh = "data-cache-path", Kt = "__cssinjs_instance__";
function qh() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(wt, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Kt] = o[Kt] || t, o[Kt] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(wt, "]"))).forEach(function(o) {
      var s = o.getAttribute(wt);
      if (r[s]) {
        if (o[Kt] === t) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[s] = !0;
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
    Ct(this, t), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return At(t, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var r, o, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return e.forEach(function(a) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(a);
        }
      }), (r = i) !== null && r !== void 0 && r.value && s && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
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
          var s = this.keys.reduce(function(u, f) {
            var d = le(u, 2), l = d[1];
            return o.internalGet(f)[1] < l ? [f, o.internalGet(f)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = le(s, 1), a = i[0];
          this.delete(a);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(u, f) {
        if (f === e.length - 1)
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
    value: function(e, r) {
      var o = e.get(r[0]);
      if (r.length === 1) {
        var s;
        return o.map ? e.set(r[0], {
          map: o.map
        }) : e.delete(r[0]), (s = o.value) === null || s === void 0 ? void 0 : s[0];
      }
      var i = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && e.delete(r[0]), i;
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
q(ta, "MAX_CACHE_SIZE", 20);
q(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function t(n) {
    Ct(this, t), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zi(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return At(t, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(r, o) {
        return o(e, r);
      }, void 0);
    }
  }]), t;
}(), bs = new ta();
function Qs(t) {
  var n = Array.isArray(t) ? t : [t];
  return bs.has(n) || bs.set(n, new au(n)), bs.get(n);
}
var Xh = /* @__PURE__ */ new WeakMap(), Ss = {};
function Yh(t, n) {
  for (var e = Xh, r = 0; r < n.length; r += 1) {
    var o = n[r];
    e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
  }
  return e.has(Ss) || e.set(Ss, t()), e.get(Ss);
}
var ec = /* @__PURE__ */ new WeakMap();
function fr(t) {
  var n = ec.get(t) || "";
  return n || (Object.keys(t).forEach(function(e) {
    var r = t[e];
    n += e, r instanceof au ? n += r.id : r && _e(r) === "object" ? n += fr(r) : n += r;
  }), n = xr(n), ec.set(t, n)), n;
}
function tc(t, n) {
  return xr("".concat(n, "_").concat(fr(t)));
}
var ei = Wt();
function bo(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function So(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (s)
    return t;
  var i = V(V({}, o), {}, (r = {}, q(r, Fn, n), q(r, wt, e), r)), a = Object.keys(i).map(function(c) {
    var u = i[c];
    return u ? "".concat(c, '="').concat(u, '"') : null;
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
    var s = le(o, 2), i = s[0], a = s[1];
    return "".concat(i, ":").concat(a, ";");
  }).join(""), "}") : "";
}, cu = function(n, e, r) {
  var o = {}, s = {};
  return Object.entries(n).forEach(function(i) {
    var a, c, u = le(i, 2), f = u[0], d = u[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      s[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var l, v = no(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (l = r.unitless) !== null && l !== void 0 && l[f]) ? "".concat(d, "px") : String(d), s[f] = "var(".concat(v, ")");
    }
  }), [s, $h(o, e, {
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
}, Gh = V({}, _), rc = Gh.useInsertionEffect, Kh = function(n, e, r) {
  _.useMemo(n, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(t, n, e) {
  return rc(function() {
    return t(), n();
  }, e);
} : Kh, Jh = V({}, _), Qh = Jh.useInsertionEffect, ex = function(n) {
  var e = [], r = !1;
  function o(s) {
    if (r) {
      process.env.NODE_ENV !== "production" && Zi(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(s);
  }
  return _.useEffect(function() {
    return r = !1, function() {
      r = !0, e.length && e.forEach(function(s) {
        return s();
      });
    };
  }, n), o;
}, tx = function() {
  return function(n) {
    n();
  };
}, nx = typeof Qh < "u" ? ex : tx;
function rx() {
  return !1;
}
var ti = !1;
function ox() {
  return ti;
}
const sx = process.env.NODE_ENV === "production" ? rx : ox;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Dr && typeof Dr.webpackHotUpdate == "function") {
    var ix = Dr.webpackHotUpdate;
    Dr.webpackHotUpdate = function() {
      return ti = !0, setTimeout(function() {
        ti = !1;
      }, 0), ix.apply(void 0, arguments);
    };
  }
}
function na(t, n, e, r, o) {
  var s = _.useContext(_r), i = s.cache, a = [t].concat(qt(n)), c = Js(a), u = nx([c]), f = sx(), d = function(x) {
    i.opUpdate(c, function(h) {
      var E = h || [void 0, void 0], b = le(E, 2), p = b[0], A = p === void 0 ? 0 : p, y = b[1], O = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(O, f), O = null);
      var C = O || e(), L = [A, C];
      return x ? x(L) : L;
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
  var l = i.opGet(c);
  process.env.NODE_ENV !== "production" && !l && (d(), l = i.opGet(c));
  var v = l[1];
  return Zh(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(x) {
      var h = le(x, 2), E = h[0], b = h[1];
      return g && E === 0 && (o == null || o(v)), [E + 1, b];
    }), function() {
      i.opUpdate(c, function(x) {
        var h = x || [], E = le(h, 2), b = E[0], p = b === void 0 ? 0 : b, A = E[1], y = p - 1;
        return y === 0 ? (u(function() {
          (g || !i.opGet(c)) && (r == null || r(A, !1));
        }), null) : [p - 1, A];
      });
    };
  }, [c]), v;
}
var ax = {}, cx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", dn = /* @__PURE__ */ new Map();
function lx(t) {
  dn.set(t, (dn.get(t) || 0) + 1);
}
function ux(t, n) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(Fn, '="').concat(t, '"]'));
    e.forEach(function(r) {
      if (r[Kt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var fx = 0;
function dx(t, n) {
  dn.set(t, (dn.get(t) || 0) - 1);
  var e = Array.from(dn.keys()), r = e.filter(function(o) {
    var s = dn.get(o) || 0;
    return s <= 0;
  });
  e.length - r.length > fx && r.forEach(function(o) {
    ux(o, n), dn.delete(o);
  });
}
var hx = function(n, e, r, o) {
  var s = r.getDerivativeToken(n), i = V(V({}, s), e);
  return o && (i = o(i)), i;
}, uu = "token";
function xx(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(_r), o = r.cache.instanceId, s = r.container, i = e.salt, a = i === void 0 ? "" : i, c = e.override, u = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, l = e.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(qt(n)));
  }, n), g = fr(v), x = fr(u), h = l ? fr(l) : "", E = na(uu, [a, t.id, g, x, h], function() {
    var b, p = d ? d(v, u, t) : hx(v, u, t, f), A = V({}, p), y = "";
    if (l) {
      var O = cu(p, l.key, {
        prefix: l.prefix,
        ignore: l.ignore,
        unitless: l.unitless,
        preserve: l.preserve
      }), C = le(O, 2);
      p = C[0], y = C[1];
    }
    var L = tc(p, a);
    p._tokenKey = L, A._tokenKey = tc(A, a);
    var z = (b = l == null ? void 0 : l.key) !== null && b !== void 0 ? b : L;
    p._themeKey = z, lx(z);
    var X = "".concat(cx, "-").concat(xr(L));
    return p._hashId = X, [p, X, A, y, (l == null ? void 0 : l.key) || ""];
  }, function(b) {
    dx(b[0]._themeKey, o);
  }, function(b) {
    var p = le(b, 4), A = p[0], y = p[3];
    if (l && y) {
      var O = yn(y, xr("css-variables-".concat(A._themeKey)), {
        mark: wt,
        prepend: "queue",
        attachTo: s,
        priority: -999
      });
      O[Kt] = o, O.setAttribute(Fn, A._themeKey);
    }
  });
  return E;
}
var px = function(n, e, r) {
  var o = le(n, 5), s = o[2], i = o[3], a = o[4], c = r || {}, u = c.plain;
  if (!i)
    return null;
  var f = s._tokenKey, d = -999, l = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = So(i, a, f, l, u);
  return [d, f, v];
}, mx = {
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
}, fu = "comm", du = "rule", hu = "decl", gx = "@import", vx = "@namespace", yx = "@keyframes", bx = "@layer", xu = Math.abs, ra = String.fromCharCode;
function pu(t) {
  return t.trim();
}
function ro(t, n, e) {
  return t.replace(n, e);
}
function Sx(t, n, e) {
  return t.indexOf(n, e);
}
function kn(t, n) {
  return t.charCodeAt(n) | 0;
}
function zn(t, n, e) {
  return t.slice(n, e);
}
function Nt(t) {
  return t.length;
}
function wx(t) {
  return t.length;
}
function Br(t, n) {
  return n.push(t), t;
}
var Ko = 1, Vn = 1, mu = 0, gt = 0, He = 0, Yn = "";
function oa(t, n, e, r, o, s, i, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: s, line: Ko, column: Vn, length: i, return: "", siblings: a };
}
function Ex() {
  return He;
}
function _x() {
  return He = gt > 0 ? kn(Yn, --gt) : 0, Vn--, He === 10 && (Vn = 1, Ko--), He;
}
function Et() {
  return He = gt < mu ? kn(Yn, gt++) : 0, Vn++, He === 10 && (Vn = 1, Ko++), He;
}
function Zt() {
  return kn(Yn, gt);
}
function oo() {
  return gt;
}
function Zo(t, n) {
  return zn(Yn, t, n);
}
function mr(t) {
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
function Cx(t) {
  return Ko = Vn = 1, mu = Nt(Yn = t), gt = 0, [];
}
function Ax(t) {
  return Yn = "", t;
}
function ws(t) {
  return pu(Zo(gt - 1, ni(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tx(t) {
  for (; (He = Zt()) && He < 33; )
    Et();
  return mr(t) > 2 || mr(He) > 3 ? "" : " ";
}
function Ox(t, n) {
  for (; --n && Et() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return Zo(t, oo() + (n < 6 && Zt() == 32 && Et() == 32));
}
function ni(t) {
  for (; Et(); )
    switch (He) {
      // ] ) " '
      case t:
        return gt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ni(He);
        break;
      // (
      case 40:
        t === 41 && ni(t);
        break;
      // \
      case 92:
        Et();
        break;
    }
  return gt;
}
function Rx(t, n) {
  for (; Et() && t + He !== 57; )
    if (t + He === 84 && Zt() === 47)
      break;
  return "/*" + Zo(n, gt - 1) + "*" + ra(t === 47 ? t : Et());
}
function Px(t) {
  for (; !mr(Zt()); )
    Et();
  return Zo(t, gt);
}
function kx(t) {
  return Ax(so("", null, null, null, [""], t = Cx(t), 0, [0], t));
}
function so(t, n, e, r, o, s, i, a, c) {
  for (var u = 0, f = 0, d = i, l = 0, v = 0, g = 0, x = 1, h = 1, E = 1, b = 0, p = "", A = o, y = s, O = r, C = p; h; )
    switch (g = b, b = Et()) {
      // (
      case 40:
        if (g != 108 && kn(C, d - 1) == 58) {
          Sx(C += ro(ws(b), "&", "&\f"), "&\f", xu(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += ws(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Tx(g);
        break;
      // \
      case 92:
        C += Ox(oo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Br(Ix(Rx(Et(), oo()), n, e, c), c), (mr(g || 1) == 5 || mr(Zt() || 1) == 5) && Nt(C) && zn(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * x:
        a[u++] = Nt(C) * E;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (C = ro(C, /\f/g, "")), v > 0 && (Nt(C) - d || x === 0 && g === 47) && Br(v > 32 ? sc(C + ";", r, e, d - 1, c) : sc(ro(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Br(O = oc(C, n, e, u, f, o, a, p, A = [], y = [], d, s), s), b === 123)
              if (f === 0)
                so(C, n, O, O, A, s, d, a, y);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (kn(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (kn(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? so(t, O, O, r && Br(oc(t, O, O, 0, 0, o, a, p, o, A = [], d, y), y), o, y, d, a, r ? A : y) : so(C, O, O, O, [""], y, 0, a, y);
              }
        }
        u = f = v = 0, x = E = 1, p = C = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Nt(C), v = g;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && _x() == 125)
            continue;
        }
        switch (C += ra(b), b * x) {
          // &
          case 38:
            E = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Nt(C) - 1) * E, E = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (C += ws(Et())), l = Zt(), f = d = Nt(p = C += Px(oo())), b++;
            break;
          // -
          case 45:
            g === 45 && Nt(C) == 2 && (x = 0);
        }
    }
  return s;
}
function oc(t, n, e, r, o, s, i, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? s : [""], g = wx(v), x = 0, h = 0, E = 0; x < r; ++x)
    for (var b = 0, p = zn(t, l + 1, l = xu(h = i[x])), A = t; b < g; ++b)
      (A = pu(h > 0 ? v[b] + " " + p : ro(p, /&\f/g, v[b]))) && (c[E++] = A);
  return oa(t, n, e, o === 0 ? du : a, c, u, f, d);
}
function Ix(t, n, e, r) {
  return oa(t, n, e, fu, ra(Ex()), zn(t, 2, -2), 0, r);
}
function sc(t, n, e, r, o) {
  return oa(t, n, e, hu, zn(t, 0, r), zn(t, r + 1, -1), r, o);
}
function ri(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function Nx(t, n, e, r) {
  switch (t.type) {
    case bx:
      if (t.children.length) break;
    case gx:
    case vx:
    case hu:
      return t.return = t.return || t.value;
    case fu:
      return "";
    case yx:
      return t.return = t.value + "{" + ri(t.children, r) + "}";
    case du:
      if (!Nt(t.value = t.props.join(","))) return "";
  }
  return Nt(e = ri(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function gu(t, n) {
  var e = n.path, r = n.parentSelectors;
  tn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jx = function(n, e, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, s = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || s.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, Lx = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, ic = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", bn, yu = !0;
function Mx() {
  if (!bn && (bn = {}, Wt())) {
    var t = document.createElement("div");
    t.className = ic, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var s = o.split(":"), i = le(s, 2), a = i[0], c = i[1];
      bn[a] = c;
    });
    var e = document.querySelector("style[".concat(ic, "]"));
    if (e) {
      var r;
      yu = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
    }
    document.body.removeChild(t);
  }
}
function Dx(t) {
  return Mx(), !!bn[t];
}
function Bx(t) {
  var n = bn[t], e = null;
  if (n && Wt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(wt, '="').concat(bn[t], '"]'));
      r ? e = r.innerHTML : delete bn[t];
    }
  return [e, n];
}
var bu = "_skip_check_", Su = "_multi_value_";
function io(t) {
  var n = ri(kx(t), Nx);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Fx(t) {
  return _e(t) === "object" && t && (bu in t || Su in t);
}
function ac(t, n, e) {
  if (!n)
    return t;
  var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, s = t.split(",").map(function(i) {
    var a, c = i.trim().split(/\s+/), u = c[0] || "", f = ((a = u.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(qt(c.slice(1))).join(" ");
  });
  return s.join(",");
}
var zx = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, s = r.injectHash, i = r.parentSelectors, a = e.hashId, c = e.layer, u = e.path, f = e.hashPriority, d = e.transformers, l = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, x = "", h = {};
  function E(A) {
    var y = A.getName(a);
    if (!h[y]) {
      var O = t(A.style, e, {
        root: !1,
        parentSelectors: i
      }), C = le(O, 1), L = C[0];
      h[y] = "@keyframes ".concat(A.getName(a)).concat(L);
    }
  }
  function b(A) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return A.forEach(function(O) {
      Array.isArray(O) ? b(O, y) : O && y.push(O);
    }), y;
  }
  var p = b(Array.isArray(n) ? n : [n]);
  return p.forEach(function(A) {
    var y = typeof A == "string" && !o ? {} : A;
    if (typeof y == "string")
      x += "".concat(y, `
`);
    else if (y._keyframe)
      E(y);
    else {
      var O = l.reduce(function(C, L) {
        var z;
        return (L == null || (z = L.visit) === null || z === void 0 ? void 0 : z.call(L, C)) || C;
      }, y);
      Object.keys(O).forEach(function(C) {
        var L = O[C];
        if (_e(L) === "object" && L && (C !== "animationName" || !L._keyframe) && !Fx(L)) {
          var z = !1, X = C.trim(), oe = !1;
          (o || s) && a ? X.startsWith("@") ? z = !0 : X === "&" ? X = ac("", a, f) : X = ac(C, a, f) : o && !a && (X === "&" || X === "") && (X = "", oe = !0);
          var G = t(L, e, {
            root: oe,
            injectHash: z,
            parentSelectors: [].concat(qt(i), [X])
          }), F = le(G, 2), W = F[0], H = F[1];
          h = V(V({}, h), H), x += "".concat(X).concat(W);
        } else {
          let J = function(Q, ae) {
            process.env.NODE_ENV !== "production" && (_e(L) !== "object" || !(L != null && L[bu])) && [jx, Lx].concat(qt(g)).forEach(function(ne) {
              return ne(Q, ae, {
                path: u,
                hashId: a,
                parentSelectors: i
              });
            });
            var se = Q.replace(/[A-Z]/g, function(ne) {
              return "-".concat(ne.toLowerCase());
            }), K = ae;
            !mx[Q] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Q === "animationName" && ae !== null && ae !== void 0 && ae._keyframe && (E(ae), K = ae.getName(a)), x += "".concat(se, ":").concat(K, ";");
          };
          var ee, Z = (ee = L == null ? void 0 : L.value) !== null && ee !== void 0 ? ee : L;
          _e(L) === "object" && L !== null && L !== void 0 && L[Su] && Array.isArray(Z) ? Z.forEach(function(Q) {
            J(C, Q);
          }) : J(C, Z);
        }
      });
    }
  }), o ? c && (x && (x = "@layer ".concat(c.name, " {").concat(x, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(A) {
    return "@layer ".concat(A, ", ").concat(c.name, ";");
  }).join(`
`))) : x = "{".concat(x, "}"), [x, h];
};
function wu(t, n) {
  return xr("".concat(t.join("%")).concat(n));
}
function Vx() {
  return null;
}
var Eu = "style";
function oi(t, n) {
  var e = t.token, r = t.path, o = t.hashId, s = t.layer, i = t.nonce, a = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, f = _.useContext(_r), d = f.autoClear, l = f.mock, v = f.defaultCache, g = f.hashPriority, x = f.container, h = f.ssrInline, E = f.transformers, b = f.linters, p = f.cache, A = f.layer, y = e._tokenKey, O = [y];
  A && O.push("layer"), O.push.apply(O, qt(r));
  var C = ei;
  process.env.NODE_ENV !== "production" && l !== void 0 && (C = l === "client");
  var L = na(
    Eu,
    O,
    // Create cache if needed
    function() {
      var F = O.join("|");
      if (Dx(F)) {
        var W = Bx(F), H = le(W, 2), ee = H[0], Z = H[1];
        if (ee)
          return [ee, y, Z, {}, a, u];
      }
      var J = n(), Q = zx(J, {
        hashId: o,
        hashPriority: g,
        layer: A ? s : void 0,
        path: r.join("-"),
        transformers: E,
        linters: b
      }), ae = le(Q, 2), se = ae[0], K = ae[1], ne = io(se), xe = wu(O, ne);
      return [ne, y, xe, K, a, u];
    },
    // Remove cache if no need
    function(F, W) {
      var H = le(F, 3), ee = H[2];
      (W || d) && ei && iu(ee, {
        mark: wt
      });
    },
    // Effect: Inject style here
    function(F) {
      var W = le(F, 4), H = W[0];
      W[1];
      var ee = W[2], Z = W[3];
      if (C && H !== vu) {
        var J = {
          mark: wt,
          prepend: A ? !1 : "queue",
          attachTo: x,
          priority: u
        }, Q = typeof i == "function" ? i() : i;
        Q && (J.csp = {
          nonce: Q
        });
        var ae = [], se = [];
        Object.keys(Z).forEach(function(ne) {
          ne.startsWith("@layer") ? ae.push(ne) : se.push(ne);
        }), ae.forEach(function(ne) {
          yn(io(Z[ne]), "_layer-".concat(ne), V(V({}, J), {}, {
            prepend: !0
          }));
        });
        var K = yn(H, ee, J);
        K[Kt] = p.instanceId, K.setAttribute(Fn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, O.join("|")), se.forEach(function(ne) {
          yn(io(Z[ne]), "_effect-".concat(ne), J);
        });
      }
    }
  ), z = le(L, 3), X = z[0], oe = z[1], G = z[2];
  return function(F) {
    var W;
    if (!h || C || !v)
      W = /* @__PURE__ */ _.createElement(Vx, null);
    else {
      var H;
      W = /* @__PURE__ */ _.createElement("style", Dt({}, (H = {}, q(H, Fn, oe), q(H, wt, G), H), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, W, F);
  };
}
var Hx = function(n, e, r) {
  var o = le(n, 6), s = o[0], i = o[1], a = o[2], c = o[3], u = o[4], f = o[5], d = r || {}, l = d.plain;
  if (u)
    return null;
  var v = s, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = So(s, i, a, g, l), c && Object.keys(c).forEach(function(x) {
    if (!e[x]) {
      e[x] = !0;
      var h = io(c[x]), E = So(h, i, "_effect-".concat(x), g, l);
      x.startsWith("@layer") ? v = E + v : v += E;
    }
  }), [f, a, v];
}, _u = "cssVar", Ux = function(n, e) {
  var r = n.key, o = n.prefix, s = n.unitless, i = n.ignore, a = n.token, c = n.scope, u = c === void 0 ? "" : c, f = Qt(_r), d = f.cache.instanceId, l = f.container, v = a._tokenKey, g = [].concat(qt(n.path), [r, u, v]), x = na(_u, g, function() {
    var h = e(), E = cu(h, r, {
      prefix: o,
      unitless: s,
      ignore: i,
      scope: u
    }), b = le(E, 2), p = b[0], A = b[1], y = wu(g, A);
    return [p, A, y, r];
  }, function(h) {
    var E = le(h, 3), b = E[2];
    ei && iu(b, {
      mark: wt
    });
  }, function(h) {
    var E = le(h, 3), b = E[1], p = E[2];
    if (b) {
      var A = yn(b, p, {
        mark: wt,
        prepend: "queue",
        attachTo: l,
        priority: -999
      });
      A[Kt] = d, A.setAttribute(Fn, r);
    }
  });
  return x;
}, qx = function(n, e, r) {
  var o = le(n, 4), s = o[1], i = o[2], a = o[3], c = r || {}, u = c.plain;
  if (!s)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, l = So(s, a, i, d, u);
  return [f, i, l];
}, rr;
rr = {}, q(rr, Eu, Hx), q(rr, uu, px), q(rr, _u, qx);
var Cu = /* @__PURE__ */ function() {
  function t(n, e) {
    Ct(this, t), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return At(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function Tn(t) {
  return t.notSplit = !0, t;
}
Tn(["borderTop", "borderBottom"]), Tn(["borderTop"]), Tn(["borderBottom"]), Tn(["borderLeft", "borderRight"]), Tn(["borderLeft"]), Tn(["borderRight"]);
var sa = /* @__PURE__ */ Fi({});
function Wx(t) {
  return tu(t) || Zl(t) || Qi(t) || nu();
}
function si(t, n) {
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
  var o = Wx(n), s = o[0], i = o.slice(1), a;
  return !t && typeof s == "number" ? a = [] : Array.isArray(t) ? a = qt(t) : a = V({}, t), r && e === void 0 && i.length === 1 ? delete a[s][i[0]] : a[s] = Au(a[s], i, e, r), a;
}
function Es(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && e === void 0 && !si(t, n.slice(0, -1)) ? t : Au(t, n, e, r);
}
function Xx(t) {
  return _e(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function cc(t) {
  return Array.isArray(t) ? [] : {};
}
var Yx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $x() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  var r = cc(n[0]);
  return n.forEach(function(o) {
    function s(i, a) {
      var c = new Set(a), u = si(o, i), f = Array.isArray(u);
      if (f || Xx(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = si(r, i);
          f ? r = Es(r, i, []) : (!d || _e(d) !== "object") && (r = Es(r, i, cc(u))), Yx(u).forEach(function(l) {
            s([].concat(qt(i), [l]), c);
          });
        }
      } else
        r = Es(r, i, u);
    }
    s([]);
  }), r;
}
function Tu() {
}
let Vt = null;
function Gx() {
  Vt = null, ql();
}
let ia = Tu;
process.env.NODE_ENV !== "production" && (ia = (t, n, e) => {
  tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gx();
});
const Ou = /* @__PURE__ */ _.createContext({}), $n = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = _.useContext(Ou), e = (r, o, s) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const i = Vt;
        Vt || (Vt = {}), Vt[t] = Vt[t] || [], Vt[t].includes(s || "") || Vt[t].push(s || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Vt);
      } else
        process.env.NODE_ENV !== "production" && ia(r, t, s);
  };
  return e.deprecated = (r, o, s, i) => {
    e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${s}\` instead.${i ? ` ${i}` : ""}`);
  }, e;
} : () => {
  const t = () => {
  };
  return t.deprecated = Tu, t;
}, Jo = ia, Kx = /* @__PURE__ */ Fi(void 0), ft = "${label} is not a valid ${type}", Qo = {
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
Object.assign({}, Qo.Modal);
let ao = [];
const lc = () => ao.reduce((t, n) => Object.assign(Object.assign({}, t), n), Qo.Modal);
function Zx(t) {
  if (t) {
    const n = Object.assign({}, t);
    return ao.push(n), lc(), () => {
      ao = ao.filter((e) => e !== n), lc();
    };
  }
  Object.assign({}, Qo.Modal);
}
const Ru = /* @__PURE__ */ Fi(void 0), Pu = "internalMark", ku = (t) => {
  const {
    locale: n = {},
    children: e,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const s = $n("LocaleProvider");
    process.env.NODE_ENV !== "production" && s(r === Pu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => Zx(n == null ? void 0 : n.Modal), [n]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ _.createElement(Ru.Provider, {
    value: o
  }, e);
};
process.env.NODE_ENV !== "production" && (ku.displayName = "LocaleProvider");
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
}, gr = Object.assign(Object.assign({}, Iu), {
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
}), Ye = Math.round;
function _s(t, n) {
  const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const uc = (t, n, e) => e === 0 ? t : t / 100;
function or(t, n) {
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
      let o = function(s) {
        return r.startsWith(s);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Be)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (e("rgb"))
      this.r = or(n.r), this.g = or(n.g), this.b = or(n.b), this.a = typeof n.a == "number" ? or(n.a, 1) : 1;
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
    function n(s) {
      const i = s / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const e = n(this.r), r = n(this.g), o = n(this.b);
    return 0.2126 * e + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const n = this.getMax() - this.getMin();
      n === 0 ? this._h = 0 : this._h = Ye(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
    const r = this._c(n), o = e / 100, s = (a) => (r[a] - this[a]) * o + this[a], i = {
      r: Ye(s("r")),
      g: Ye(s("g")),
      b: Ye(s("b")),
      a: Ye(s("a") * 100) / 100
    };
    return this._c(i);
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (s) => Ye((this[s] * this.a + e[s] * e.a * (1 - this.a)) / r);
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
      const s = Ye(this.a * 255).toString(16);
      n += s.length === 2 ? s : "0" + s;
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
    const n = this.getHue(), e = Ye(this.getSaturation() * 100), r = Ye(this.getLightness() * 100);
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
    return o[n] = or(e, r), o;
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
    function r(o, s) {
      return parseInt(e[o] + e[s || o], 16);
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
      const l = Ye(r * 255);
      this.r = l, this.g = l, this.b = l;
    }
    let s = 0, i = 0, a = 0;
    const c = n / 60, u = (1 - Math.abs(2 * r - 1)) * e, f = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (s = u, i = f) : c >= 1 && c < 2 ? (s = f, i = u) : c >= 2 && c < 3 ? (i = u, a = f) : c >= 3 && c < 4 ? (i = f, a = u) : c >= 4 && c < 5 ? (s = f, a = u) : c >= 5 && c < 6 && (s = u, a = f);
    const d = r - u / 2;
    this.r = Ye((s + d) * 255), this.g = Ye((i + d) * 255), this.b = Ye((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const s = Ye(r * 255);
    if (this.r = s, this.g = s, this.b = s, e <= 0)
      return;
    const i = n / 60, a = Math.floor(i), c = i - a, u = Ye(r * (1 - e) * 255), f = Ye(r * (1 - e * c) * 255), d = Ye(r * (1 - e * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = u;
        break;
      case 1:
        this.r = f, this.b = u;
        break;
      case 2:
        this.r = u, this.b = d;
        break;
      case 3:
        this.r = u, this.g = f;
        break;
      case 4:
        this.r = d, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = f;
        break;
    }
  }
  fromHsvString(n) {
    const e = _s(n, uc);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = _s(n, uc);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = _s(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ye(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var Fr = 2, fc = 0.16, Jx = 0.05, Qx = 0.05, ep = 0.15, Nu = 5, ju = 4, tp = [{
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
  return e ? r = t.s - fc * n : n === ju ? r = t.s + fc : r = t.s + Jx * n, r > 1 && (r = 1), e && n === Nu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function xc(t, n, e) {
  var r;
  return e ? r = t.v + Qx * n : r = t.v - ep * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function vr(t) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Be(t), o = r.toHsv(), s = Nu; s > 0; s -= 1) {
    var i = new Be({
      h: dc(o, s, !0),
      s: hc(o, s, !0),
      v: xc(o, s, !0)
    });
    e.push(i);
  }
  e.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Be({
      h: dc(o, a),
      s: hc(o, a),
      v: xc(o, a)
    });
    e.push(c);
  }
  return n.theme === "dark" ? tp.map(function(u) {
    var f = u.index, d = u.amount;
    return new Be(n.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(u) {
    return u.toHexString();
  });
}
var Cs = {
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
}, ii = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ii.primary = ii[5];
var ai = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
ai.primary = ai[5];
var ci = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ci.primary = ci[5];
var li = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
li.primary = li[5];
var ui = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ui.primary = ui[5];
var fi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
fi.primary = fi[5];
var di = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
di.primary = di[5];
var hi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
hi.primary = hi[5];
var wo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
wo.primary = wo[5];
var xi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
xi.primary = xi[5];
var pi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
pi.primary = pi[5];
var mi = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
mi.primary = mi[5];
var gi = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
gi.primary = gi[5];
var As = {
  red: ii,
  volcano: ai,
  orange: ci,
  gold: li,
  yellow: ui,
  lime: fi,
  green: di,
  cyan: hi,
  blue: wo,
  geekblue: xi,
  purple: pi,
  magenta: mi,
  grey: gi
};
function np(t, n) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: r
  } = n;
  const {
    colorSuccess: o,
    colorWarning: s,
    colorError: i,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: f
  } = t, d = e(c), l = e(o), v = e(s), g = e(i), x = e(a), h = r(u, f), E = t.colorLink || t.colorInfo, b = e(E), p = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
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
    colorSuccessBg: l[1],
    colorSuccessBgHover: l[2],
    colorSuccessBorder: l[3],
    colorSuccessBorderHover: l[4],
    colorSuccessHover: l[4],
    colorSuccess: l[6],
    colorSuccessActive: l[7],
    colorSuccessTextHover: l[8],
    colorSuccessText: l[9],
    colorSuccessTextActive: l[10],
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
    colorInfoBg: x[1],
    colorInfoBgHover: x[2],
    colorInfoBorder: x[3],
    colorInfoBorderHover: x[4],
    colorInfoHover: x[4],
    colorInfo: x[6],
    colorInfoActive: x[7],
    colorInfoTextHover: x[8],
    colorInfoText: x[9],
    colorInfoTextActive: x[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Be("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const rp = (t) => {
  let n = t, e = t, r = t, o = t;
  return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function op(t) {
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
  }, rp(r));
}
const sp = (t) => {
  const {
    controlHeight: n
  } = t;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function ip(t) {
  return (t + 8) / t;
}
function ap(t) {
  const n = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, s = t * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(s) : Math.ceil(s);
    return Math.floor(i / 2) * 2;
  });
  return n[1] = t, n.map((e) => ({
    size: e,
    lineHeight: ip(e)
  }));
}
const cp = (t) => {
  const n = ap(t), e = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = e[1], s = e[0], i = e[2], a = r[1], c = r[0], u = r[2];
  return {
    fontSizeSM: s,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: a,
    lineHeightLG: u,
    lineHeightSM: c,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(u * i),
    fontHeightSM: Math.round(c * s),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function lp(t) {
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
const xt = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), up = (t) => {
  const n = vr(t);
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
}, fp = (t, n) => {
  const e = t || "#fff", r = n || "#000";
  return {
    colorBgBase: e,
    colorTextBase: r,
    colorText: xt(r, 0.88),
    colorTextSecondary: xt(r, 0.65),
    colorTextTertiary: xt(r, 0.45),
    colorTextQuaternary: xt(r, 0.25),
    colorFill: xt(r, 0.15),
    colorFillSecondary: xt(r, 0.06),
    colorFillTertiary: xt(r, 0.04),
    colorFillQuaternary: xt(r, 0.02),
    colorBgSolid: xt(r, 1),
    colorBgSolidHover: xt(r, 0.75),
    colorBgSolidActive: xt(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: xt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(e, 15),
    colorBorderSecondary: sr(e, 6)
  };
};
function dp(t) {
  Cs.pink = Cs.magenta, As.pink = As.magenta;
  const n = Object.keys(Iu).map((e) => {
    const r = t[e] === Cs[e] ? As[e] : vr(t[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, s, i) => (o[`${e}-${i + 1}`] = r[i], o[`${e}${i + 1}`] = r[i], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), np(t, {
    generateColorPalettes: up,
    generateNeutralColorPalettes: fp
  })), cp(t.fontSize)), lp(t)), sp(t)), op(t));
}
const Lu = Qs(dp), vi = {
  token: gr,
  override: {
    override: gr
  },
  hashed: !0
}, Mu = /* @__PURE__ */ Fe.createContext(vi), yi = "ant", aa = "anticon", hp = (t, n) => n || (t ? `${yi}-${t}` : yi), en = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hp,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = en, pc = {};
function Du(t) {
  const n = _.useContext(en), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = n, s = n[t];
  return Object.assign(Object.assign({
    classNames: pc,
    styles: pc
  }, s), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  });
}
const xp = `-ant-${Date.now()}-${Math.random()}`;
function pp(t, n) {
  const e = {}, r = (i, a) => {
    let c = i.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (i, a) => {
    const c = new Be(i), u = vr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = u[1], e[`${a}-color-hover`] = u[4], e[`${a}-color-active`] = u[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = u[0], e[`${a}-color-deprecated-border`] = u[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const i = new Be(n.primaryColor), a = vr(i.toRgbString());
    a.forEach((u, f) => {
      e[`primary-${f + 1}`] = u;
    }), e["primary-color-deprecated-l-35"] = r(i, (u) => u.lighten(35)), e["primary-color-deprecated-l-20"] = r(i, (u) => u.lighten(20)), e["primary-color-deprecated-t-20"] = r(i, (u) => u.tint(20)), e["primary-color-deprecated-t-50"] = r(i, (u) => u.tint(50)), e["primary-color-deprecated-f-12"] = r(i, (u) => u.setA(u.a * 0.12));
    const c = new Be(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setA(u.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((i) => `--${t}-${i}: ${e[i]};`).join(`
`)}
  }
  `.trim();
}
function mp(t, n) {
  const e = pp(t, n);
  Wt() ? yn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bi = /* @__PURE__ */ _.createContext(!1), gp = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = _.useContext(bi);
  return /* @__PURE__ */ _.createElement(bi.Provider, {
    value: e ?? r
  }, n);
}, yr = /* @__PURE__ */ _.createContext(void 0), vp = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = _.useContext(yr);
  return /* @__PURE__ */ _.createElement(yr.Provider, {
    value: e || r
  }, n);
};
function yp() {
  const t = Qt(bi), n = Qt(yr);
  return {
    componentDisabled: t,
    componentSize: n
  };
}
var Bu = /* @__PURE__ */ At(function t() {
  Ct(this, t);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ts(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sp = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r, o) {
    var s;
    Ct(this, e), s = n.call(this), q(vn(s), "result", ""), q(vn(s), "unitlessCssVar", void 0), q(vn(s), "lowPriority", void 0);
    var i = _e(r);
    return s.unitlessCssVar = o, r instanceof e ? s.result = "(".concat(r.result, ")") : i === "number" ? s.result = Ts(r) : i === "string" && (s.result = r), s;
  }
  return At(e, [{
    key: "add",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Ts(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Ts(o))), this.lowPriority = !0, this;
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
      var s = this, i = o || {}, a = i.unit, c = !0;
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(u) {
        return s.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(bp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wp = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return Ct(this, e), o = n.call(this), q(vn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
}(Bu), Ep = function(n, e) {
  var r = n === "css" ? Sp : wp;
  return function(o) {
    return new r(o, e);
  };
}, mc = function(n, e) {
  return "".concat([e, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Si(t) {
  var n = _.useRef();
  n.current = t;
  var e = _.useCallback(function() {
    for (var r, o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(s));
  }, []);
  return e;
}
function wi(t) {
  var n = _.useRef(!1), e = _.useState(t), r = le(e, 2), o = r[0], s = r[1];
  _.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function i(a, c) {
    c && n.current || s(a);
  }
  return [o, i];
}
function gc(t, n, e, r) {
  var o = V({}, n[t]);
  if (r != null && r.deprecatedTokens) {
    var s = r.deprecatedTokens;
    s.forEach(function(a) {
      var c = le(a, 2), u = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && tn(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[u] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[u]);
      }
    });
  }
  var i = V(V({}, e), o);
  return Object.keys(i).forEach(function(a) {
    i[a] === n[a] && delete i[a];
  }), i;
}
var zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ei = !0;
function es() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  if (!zu)
    return Object.assign.apply(Object, [{}].concat(n));
  Ei = !1;
  var r = {};
  return n.forEach(function(o) {
    if (_e(o) === "object") {
      var s = Object.keys(o);
      s.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Ei = !0, r;
}
var vc = {};
function _p() {
}
var Cp = function(n) {
  var e, r = n, o = _p;
  return zu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(i, a) {
      if (Ei) {
        var c;
        (c = e) === null || c === void 0 || c.add(a);
      }
      return i[a];
    }
  }), o = function(i, a) {
    var c;
    vc[i] = {
      global: Array.from(e),
      component: V(V({}, (c = vc[i]) === null || c === void 0 ? void 0 : c.component), a)
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
    return e(es(n, (r = n[t]) !== null && r !== void 0 ? r : {}));
  }
  return e ?? {};
}
function Ap(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(s) {
        return bo(s);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(s) {
        return bo(s);
      }).join(","), ")");
    }
  };
}
var Tp = 1e3 * 60 * 10, Op = /* @__PURE__ */ function() {
  function t() {
    Ct(this, t), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
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
      var r = this, o = e.map(function(s) {
        return s && _e(s) === "object" ? "obj_".concat(r.getObjectID(s)) : "".concat(_e(s), "_").concat(s);
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
        this.lastAccessBeat.forEach(function(o, s) {
          r - o > Tp && (e.map.delete(s), e.lastAccessBeat.delete(s));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), bc = new Op();
function Rp(t, n) {
  return Fe.useMemo(function() {
    var e = bc.get(n);
    if (e)
      return e;
    var r = t();
    return bc.set(n, r), r;
  }, n);
}
var Pp = function() {
  return {};
};
function kp(t) {
  var n = t.useCSP, e = n === void 0 ? Pp : n, r = t.useToken, o = t.usePrefix, s = t.getResetStyles, i = t.getCommonStyle, a = t.getCompUnitless;
  function c(l, v, g, x) {
    var h = Array.isArray(l) ? l[0] : l;
    function E(L) {
      return "".concat(String(h)).concat(L.slice(0, 1).toUpperCase()).concat(L.slice(1));
    }
    var b = (x == null ? void 0 : x.unitless) || {}, p = typeof a == "function" ? a(l) : {}, A = V(V({}, p), {}, q({}, E("zIndexPopup"), !0));
    Object.keys(b).forEach(function(L) {
      A[E(L)] = b[L];
    });
    var y = V(V({}, x), {}, {
      unitless: A,
      prefixToken: E
    }), O = f(l, v, g, y), C = u(h, g, y);
    return function(L) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : L, X = O(L, z), oe = le(X, 2), G = oe[1], F = C(z), W = le(F, 2), H = W[0], ee = W[1];
      return [H, G, ee];
    };
  }
  function u(l, v, g) {
    var x = g.unitless, h = g.injectStyle, E = h === void 0 ? !0 : h, b = g.prefixToken, p = g.ignore, A = function(C) {
      var L = C.rootCls, z = C.cssVar, X = z === void 0 ? {} : z, oe = r(), G = oe.realToken;
      return Ux({
        path: [l],
        prefix: X.prefix,
        key: X.key,
        unitless: x,
        ignore: p,
        token: G,
        scope: L
      }, function() {
        var F = yc(l, G, v), W = gc(l, G, F, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(F).forEach(function(H) {
          W[b(H)] = W[H], delete W[H];
        }), W;
      }), null;
    }, y = function(C) {
      var L = r(), z = L.cssVar;
      return [function(X) {
        return E && z ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(A, {
          rootCls: C,
          cssVar: z,
          component: l
        }), X) : X;
      }, z == null ? void 0 : z.key];
    };
    return y;
  }
  function f(l, v, g) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(l) ? l : [l, l], E = le(h, 1), b = E[0], p = h.join("-"), A = t.layer || {
      name: "antd"
    };
    return function(y) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, C = r(), L = C.theme, z = C.realToken, X = C.hashId, oe = C.token, G = C.cssVar, F = o(), W = F.rootPrefixCls, H = F.iconPrefixCls, ee = e(), Z = G ? "css" : "js", J = Rp(function() {
        var xe = /* @__PURE__ */ new Set();
        return G && Object.keys(x.unitless || {}).forEach(function(de) {
          xe.add(no(de, G.prefix)), xe.add(no(de, mc(b, G.prefix)));
        }), Ep(Z, xe);
      }, [Z, b, G == null ? void 0 : G.prefix]), Q = Ap(Z), ae = Q.max, se = Q.min, K = {
        theme: L,
        token: oe,
        hashId: X,
        nonce: function() {
          return ee.nonce;
        },
        clientOnly: x.clientOnly,
        layer: A,
        // antd is always at top of styles
        order: x.order || -999
      };
      typeof s == "function" && oi(V(V({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return s(oe, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: H
          },
          csp: ee
        });
      });
      var ne = oi(V(V({}, K), {}, {
        path: [p, y, H]
      }), function() {
        if (x.injectStyle === !1)
          return [];
        var xe = Cp(oe), de = xe.token, ge = xe.flush, I = yc(b, z, g), M = ".".concat(y), R = gc(b, z, I, {
          deprecatedTokens: x.deprecatedTokens
        });
        G && I && _e(I) === "object" && Object.keys(I).forEach(function(Oe) {
          I[Oe] = "var(".concat(no(Oe, mc(b, G.prefix)), ")");
        });
        var N = es(de, {
          componentCls: M,
          prefixCls: y,
          iconCls: ".".concat(H),
          antCls: ".".concat(W),
          calc: J,
          // @ts-ignore
          max: ae,
          // @ts-ignore
          min: se
        }, G ? I : R), w = v(N, {
          hashId: X,
          prefixCls: y,
          rootPrefixCls: W,
          iconPrefixCls: H
        });
        ge(b, R);
        var j = typeof i == "function" ? i(N, y, O, x.resetFont) : null;
        return [x.resetStyle === !1 ? null : j, w];
      });
      return [ne, X];
    };
  }
  function d(l, v, g) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(l, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, x)), E = function(p) {
      var A = p.prefixCls, y = p.rootCls, O = y === void 0 ? A : y;
      return h(A, O), null;
    };
    return process.env.NODE_ENV !== "production" && (E.displayName = "SubStyle_".concat(String(Array.isArray(l) ? l.join(".") : l))), E;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Ip = "5.24.6";
function Os(t) {
  return t >= 0 && t <= 255;
}
function zr(t, n) {
  const {
    r: e,
    g: r,
    b: o,
    a: s
  } = new Be(t).toRgb();
  if (s < 1)
    return t;
  const {
    r: i,
    g: a,
    b: c
  } = new Be(n).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const f = Math.round((e - i * (1 - u)) / u), d = Math.round((r - a * (1 - u)) / u), l = Math.round((o - c * (1 - u)) / u);
    if (Os(f) && Os(d) && Os(l))
      return new Be({
        r: f,
        g: d,
        b: l,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Be({
    r: e,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Np = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
function Vu(t) {
  const {
    override: n
  } = t, e = Np(t, ["override"]), r = Object.assign({}, n);
  Object.keys(gr).forEach((l) => {
    delete r[l];
  });
  const o = Object.assign(Object.assign({}, e), r), s = 480, i = 576, a = 768, c = 992, u = 1200, f = 1600;
  if (o.motion === !1) {
    const l = "0s";
    o.motionDurationFast = l, o.motionDurationMid = l, o.motionDurationSlow = l;
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
    screenXS: s,
    screenXSMin: s,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: a - 1,
    screenMD: a,
    screenMDMin: a,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
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
}, jp = {
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
}, Lp = {
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
  } = n, s = Sc(n, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = Vu(i), s && Object.entries(s).forEach((a) => {
    let [c, u] = a;
    const {
      theme: f
    } = u, d = Sc(u, ["theme"]);
    let l = d;
    f && (l = Uu(Object.assign(Object.assign({}, i), d), {
      override: d
    }, f)), i[c] = l;
  }), i;
};
function ca() {
  const {
    token: t,
    hashed: n,
    theme: e,
    override: r,
    cssVar: o
  } = Fe.useContext(Mu), s = `${Ip}-${n || ""}`, i = e || Lu, [a, c, u] = xx(i, [gr, t], {
    salt: s,
    override: r,
    getComputedToken: Uu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Vu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Hu,
      ignore: jp,
      preserve: Lp
    }
  });
  return [i, u, n ? c : "", a, o];
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
}, Mp = () => ({
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
}), Dp = (t) => ({
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
}), Bp = (t, n, e, r) => {
  const o = `[class^="${n}"], [class*=" ${n}"]`, s = e ? `.${e}` : o, i = {
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
    [s]: Object.assign(Object.assign(Object.assign({}, a), i), {
      [o]: i
    })
  };
}, Wu = (t) => ({
  [`.${t}`]: Object.assign(Object.assign({}, Mp()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = kp({
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
    const r = Dp(t);
    return [r, {
      "&": r
    }, Wu((e = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && e !== void 0 ? e : aa)];
  },
  getCommonStyle: Bp,
  getCompUnitless: () => Hu
}), Fp = (t, n) => {
  const [e, r] = ca();
  return oi({
    token: r,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Wu(t)]);
}, zp = Object.assign({}, _), {
  useId: wc
} = zp, Vp = () => "", Hp = typeof wc > "u" ? Vp : wc;
function Up(t, n, e) {
  var r, o;
  const s = $n("ConfigProvider"), i = t || {}, a = i.inherit === !1 || !n ? Object.assign(Object.assign({}, vi), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : vi.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = Hp();
  if (process.env.NODE_ENV !== "production") {
    const u = i.cssVar || a.cssVar, f = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && s(!u || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yl(() => {
    var u, f;
    if (!t)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), t.components[g]);
    });
    const l = `css-var-${c.replace(/:/g, "")}`, v = ((u = i.cssVar) !== null && u !== void 0 ? u : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((f = i.cssVar) === null || f === void 0 ? void 0 : f.key) || l
    });
    return Object.assign(Object.assign(Object.assign({}, a), i), {
      token: Object.assign(Object.assign({}, a.token), i.token),
      components: d,
      cssVar: v
    });
  }, [i, a], (u, f) => u.some((d, l) => {
    const v = f[l];
    return !zh(d, v, !0);
  }));
}
var qp = ["children"], Xu = /* @__PURE__ */ _.createContext({});
function Wp(t) {
  var n = t.children, e = pr(t, qp);
  return /* @__PURE__ */ _.createElement(Xu.Provider, {
    value: e
  }, n);
}
var Xp = /* @__PURE__ */ function(t) {
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
function Yp(t) {
  var n = _.useReducer(function(a) {
    return a + 1;
  }, 0), e = le(n, 2), r = e[1], o = _.useRef(t), s = Si(function() {
    return o.current;
  }), i = Si(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [s, i];
}
var Gt = "none", Vr = "appear", Hr = "enter", Ur = "leave", Ec = "none", bt = "prepare", On = "start", Rn = "active", ua = "end", Yu = "prepared";
function _c(t, n) {
  var e = {};
  return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
}
function $p(t, n) {
  var e = {
    animationend: _c("Animation", "AnimationEnd"),
    transitionend: _c("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
}
var Gp = $p(Wt(), typeof window < "u" ? window : {}), $u = {};
if (Wt()) {
  var Kp = document.createElement("div");
  $u = Kp.style;
}
var qr = {};
function Gu(t) {
  if (qr[t])
    return qr[t];
  var n = Gp[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var s = e[o];
      if (Object.prototype.hasOwnProperty.call(n, s) && s in $u)
        return qr[t] = n[s], qr[t];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), Cc = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(t, n) {
  if (!t) return null;
  if (_e(t) === "object") {
    var e = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(n);
}
const Zp = function(t) {
  var n = We();
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
var Qu = Wt() ? r0 : it;
const Jp = function() {
  var t = _.useRef(null);
  function n() {
    yo.cancel(t.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var s = yo(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return s !== t.current;
        }
      }) : e(r, o - 1);
    });
    t.current = s;
  }
  return _.useEffect(function() {
    return function() {
      n();
    };
  }, []), [e, n];
};
var Qp = [bt, On, Rn, ua], e1 = [bt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === Rn || t === ua;
}
const n1 = function(t, n, e) {
  var r = wi(Ec), o = le(r, 2), s = o[0], i = o[1], a = Jp(), c = le(a, 2), u = c[0], f = c[1];
  function d() {
    i(bt, !0);
  }
  var l = n ? e1 : Qp;
  return Qu(function() {
    if (s !== Ec && s !== ua) {
      var v = l.indexOf(s), g = l[v + 1], x = e(s);
      x === ef ? i(g, !0) : g && u(function(h) {
        function E() {
          h.isCanceled() || i(g, !0);
        }
        x === !0 ? E() : Promise.resolve(x).then(E);
      });
    }
  }, [t, s]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, s];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, s = o === void 0 ? !0 : o, i = r.motionAppear, a = i === void 0 ? !0 : i, c = r.motionLeave, u = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, l = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, x = r.onAppearStart, h = r.onEnterStart, E = r.onLeaveStart, b = r.onAppearActive, p = r.onEnterActive, A = r.onLeaveActive, y = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, L = r.onVisibleChanged, z = wi(), X = le(z, 2), oe = X[0], G = X[1], F = Yp(Gt), W = le(F, 2), H = W[0], ee = W[1], Z = wi(null), J = le(Z, 2), Q = J[0], ae = J[1], se = H(), K = We(!1), ne = We(null);
  function xe() {
    return e();
  }
  var de = We(!1);
  function ge() {
    ee(Gt), ae(null, !0);
  }
  var I = Si(function(Me) {
    var Ae = H();
    if (Ae !== Gt) {
      var Ge = xe();
      if (!(Me && !Me.deadline && Me.target !== Ge)) {
        var vt = de.current, dt;
        Ae === Vr && vt ? dt = y == null ? void 0 : y(Ge, Me) : Ae === Hr && vt ? dt = O == null ? void 0 : O(Ge, Me) : Ae === Ur && vt && (dt = C == null ? void 0 : C(Ge, Me)), vt && dt !== !1 && ge();
      }
    }
  }), M = Zp(I), R = le(M, 1), N = R[0], w = function(Ae) {
    switch (Ae) {
      case Vr:
        return q(q(q({}, bt, l), On, x), Rn, b);
      case Hr:
        return q(q(q({}, bt, v), On, h), Rn, p);
      case Ur:
        return q(q(q({}, bt, g), On, E), Rn, A);
      default:
        return {};
    }
  }, j = _.useMemo(function() {
    return w(se);
  }, [se]), Oe = n1(se, !t, function(Me) {
    if (Me === bt) {
      var Ae = j[bt];
      return Ae ? Ae(xe()) : ef;
    }
    if (ue in j) {
      var Ge;
      ae(((Ge = j[ue]) === null || Ge === void 0 ? void 0 : Ge.call(j, xe(), null)) || null);
    }
    return ue === Rn && se !== Gt && (N(xe()), f > 0 && (clearTimeout(ne.current), ne.current = setTimeout(function() {
      I({
        deadline: !0
      });
    }, f))), ue === Yu && ge(), t1;
  }), D = le(Oe, 2), Re = D[0], ue = D[1], Xe = tf(ue);
  de.current = Xe;
  var Ot = We(null);
  Qu(function() {
    if (!(K.current && Ot.current === n)) {
      G(n);
      var Me = K.current;
      K.current = !0;
      var Ae;
      !Me && n && a && (Ae = Vr), Me && n && s && (Ae = Hr), (Me && !n && u || !Me && d && !n && u) && (Ae = Ur);
      var Ge = w(Ae);
      Ae && (t || Ge[bt]) ? (ee(Ae), Re()) : ee(Gt), Ot.current = n;
    }
  }, [n]), it(function() {
    // Cancel appear
    (se === Vr && !a || // Cancel enter
    se === Hr && !s || // Cancel leave
    se === Ur && !u) && ee(Gt);
  }, [a, s, u]), it(function() {
    return function() {
      K.current = !1, clearTimeout(ne.current);
    };
  }, []);
  var ut = _.useRef(!1);
  it(function() {
    oe && (ut.current = !0), oe !== void 0 && se === Gt && ((ut.current || oe) && (L == null || L(oe)), ut.current = !0);
  }, [oe, se]);
  var Rt = Q;
  return j[bt] && ue === On && (Rt = V({
    transition: "none"
  }, Rt)), [se, ue, Rt, oe ?? n];
}
function o1(t) {
  var n = t;
  _e(t) === "object" && (n = t.transitionSupport);
  function e(o, s) {
    return !!(o.motionName && n && s !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, s) {
    var i = o.visible, a = i === void 0 ? !0 : i, c = o.removeOnLeave, u = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, l = o.motionName, v = o.leavedClassName, g = o.eventProps, x = _.useContext(Xu), h = x.motion, E = e(o, h), b = We(), p = We();
    function A() {
      try {
        return b.current instanceof HTMLElement ? b.current : _h(p.current);
      } catch {
        return null;
      }
    }
    var y = r1(E, a, A, o), O = le(y, 4), C = O[0], L = O[1], z = O[2], X = O[3], oe = _.useRef(X);
    X && (oe.current = !0);
    var G = _.useCallback(function(J) {
      b.current = J, $l(s, J);
    }, [s]), F, W = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      F = null;
    else if (C === Gt)
      X ? F = d(V({}, W), G) : !u && oe.current && v ? F = d(V(V({}, W), {}, {
        className: v
      }), G) : f || !u && !v ? F = d(V(V({}, W), {}, {
        style: {
          display: "none"
        }
      }), G) : F = null;
    else {
      var H;
      L === bt ? H = "prepare" : tf(L) ? H = "active" : L === On && (H = "start");
      var ee = Tc(l, "".concat(C, "-").concat(H));
      F = d(V(V({}, W), {}, {
        className: et(Tc(l, C), q(q({}, ee, ee && H), l, typeof l == "string")),
        style: z
      }), G);
    }
    if (/* @__PURE__ */ _.isValidElement(F) && Ph(F)) {
      var Z = kh(F);
      Z || (F = /* @__PURE__ */ _.cloneElement(F, {
        ref: G
      }));
    }
    return /* @__PURE__ */ _.createElement(Xp, {
      ref: p
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _i = "add", Ci = "keep", Ai = "remove", Rs = "removed";
function s1(t) {
  var n;
  return t && _e(t) === "object" && "key" in t ? n = t : n = {
    key: t
  }, V(V({}, n), {}, {
    key: String(n.key)
  });
}
function Ti() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(s1);
}
function i1() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = n.length, s = Ti(t), i = Ti(n);
  s.forEach(function(u) {
    for (var f = !1, d = r; d < o; d += 1) {
      var l = i[d];
      if (l.key === u.key) {
        r < d && (e = e.concat(i.slice(r, d).map(function(v) {
          return V(V({}, v), {}, {
            status: _i
          });
        })), r = d), e.push(V(V({}, l), {}, {
          status: Ci
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(V(V({}, u), {}, {
      status: Ai
    }));
  }), r < o && (e = e.concat(i.slice(r).map(function(u) {
    return V(V({}, u), {}, {
      status: _i
    });
  })));
  var a = {};
  e.forEach(function(u) {
    var f = u.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(u) {
    return a[u] > 1;
  });
  return c.forEach(function(u) {
    e = e.filter(function(f) {
      var d = f.key, l = f.status;
      return d !== u || l !== Ai;
    }), e.forEach(function(f) {
      f.key === u && (f.status = Ci);
    });
  }), e;
}
var a1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], c1 = ["status"], l1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function u1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    Er(s, r);
    var o = Yo(s);
    function s() {
      var i;
      Ct(this, s);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return i = o.call.apply(o, [this].concat(c)), q(vn(i), "state", {
        keyEntities: []
      }), q(vn(i), "removeKey", function(f) {
        i.setState(function(d) {
          var l = d.keyEntities.map(function(v) {
            return v.key !== f ? v : V(V({}, v), {}, {
              status: Rs
            });
          });
          return {
            keyEntities: l
          };
        }, function() {
          var d = i.state.keyEntities, l = d.filter(function(v) {
            var g = v.status;
            return g !== Rs;
          }).length;
          l === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return At(s, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, f = u.component, d = u.children, l = u.onVisibleChanged;
        u.onAllRemoved;
        var v = pr(u, a1), g = f || _.Fragment, x = {};
        return l1.forEach(function(h) {
          x[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(h, E) {
          var b = h.status, p = pr(h, c1), A = b === _i || b === Ci;
          return /* @__PURE__ */ _.createElement(n, Dt({}, x, {
            key: p.key,
            visible: A,
            eventProps: p,
            onVisibleChanged: function(O) {
              l == null || l(O, {
                key: p.key
              }), O || a.removeKey(p.key);
            }
          }), function(y, O) {
            return d(V(V({}, y), {}, {
              index: E
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, f = c.keyEntities, d = Ti(u), l = i1(f, d);
        return {
          keyEntities: l.filter(function(v) {
            var g = f.find(function(x) {
              var h = x.key;
              return v.key === h;
            });
            return !(g && g.status === Rs && v.status === Ai);
          })
        };
      }
    }]), s;
  }(_.Component);
  return q(e, "defaultProps", {
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
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(Wp, {
    motion: r
  }, n) : n;
}
const rf = /* @__PURE__ */ _.memo((t) => {
  let {
    dropdownMatchSelectWidth: n
  } = t;
  return $n("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
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
let Oi = !1;
process.env.NODE_ENV;
const x1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let of;
function p1() {
  return of || yi;
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
  n !== void 0 && (of = n), r && m1(r) && (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mp(p1(), r));
}, v1 = (t) => {
  const {
    children: n,
    csp: e,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: s,
    form: i,
    locale: a,
    componentSize: c,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: x,
    legacyLocale: h,
    parentContext: E,
    iconPrefixCls: b,
    theme: p,
    componentDisabled: A,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: L,
    carousel: z,
    cascader: X,
    collapse: oe,
    typography: G,
    checkbox: F,
    descriptions: W,
    divider: H,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    layout: ae,
    list: se,
    mentions: K,
    modal: ne,
    progress: xe,
    result: de,
    slider: ge,
    breadcrumb: I,
    menu: M,
    pagination: R,
    input: N,
    textArea: w,
    empty: j,
    badge: Oe,
    radio: D,
    rate: Re,
    switch: ue,
    transfer: Xe,
    avatar: Ot,
    message: ut,
    tag: Rt,
    table: Me,
    card: Ae,
    tabs: Ge,
    timeline: vt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: _n,
    colorPicker: sn,
    datePicker: an,
    rangePicker: P,
    flex: S,
    wave: ve,
    dropdown: Y,
    warning: pe,
    tour: te,
    tooltip: ye,
    popover: ke,
    popconfirm: ze,
    floatButtonGroup: tt,
    variant: Bt,
    inputNumber: cn,
    treeSelect: Ke
  } = t, nt = _.useCallback((Ie, m) => {
    const {
      prefixCls: k
    } = t;
    if (m)
      return m;
    const B = k || E.getPrefixCls("");
    return Ie ? `${B}-${Ie}` : B;
  }, [E.getPrefixCls, t.prefixCls]), Ze = b || E.iconPrefixCls || aa, Pt = e || E.csp;
  Fp(Ze, Pt);
  const rt = Up(p, E.theme, {
    prefixCls: nt("")
  });
  process.env.NODE_ENV !== "production" && (Oi = Oi || !!rt);
  const Xt = {
    csp: Pt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: s,
    locale: a || h,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: x,
    getPrefixCls: nt,
    iconPrefixCls: Ze,
    theme: rt,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: L,
    carousel: z,
    cascader: X,
    collapse: oe,
    typography: G,
    checkbox: F,
    descriptions: W,
    divider: H,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    input: N,
    textArea: w,
    layout: ae,
    list: se,
    mentions: K,
    modal: ne,
    progress: xe,
    result: de,
    slider: ge,
    breadcrumb: I,
    menu: M,
    pagination: R,
    empty: j,
    badge: Oe,
    radio: D,
    rate: Re,
    switch: ue,
    transfer: Xe,
    avatar: Ot,
    message: ut,
    tag: Rt,
    table: Me,
    card: Ae,
    tabs: Ge,
    timeline: vt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: _n,
    colorPicker: sn,
    datePicker: an,
    rangePicker: P,
    flex: S,
    wave: ve,
    dropdown: Y,
    warning: pe,
    tour: te,
    tooltip: ye,
    popover: ke,
    popconfirm: ze,
    floatButtonGroup: tt,
    variant: Bt,
    inputNumber: cn,
    treeSelect: Ke
  };
  process.env.NODE_ENV !== "production" && $n("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ht = Object.assign({}, E);
  Object.keys(Xt).forEach((Ie) => {
    Xt[Ie] !== void 0 && (ht[Ie] = Xt[Ie]);
  }), x1.forEach((Ie) => {
    const m = t[Ie];
    m && (ht[Ie] = m);
  }), typeof r < "u" && (ht.button = Object.assign({
    autoInsertSpace: r
  }, ht.button));
  const Yt = Yl(() => ht, ht, (Ie, m) => {
    const k = Object.keys(Ie), B = Object.keys(m);
    return k.length !== B.length || k.some(($) => Ie[$] !== m[$]);
  }), {
    layer: Qn
  } = _.useContext(_r), Tr = _.useMemo(() => ({
    prefixCls: Ze,
    csp: Pt,
    layer: Qn ? "antd" : void 0
  }), [Ze, Pt, Qn]);
  let qe = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Or = _.useMemo(() => {
    var Ie, m, k, B;
    return $x(((Ie = Qo.Form) === null || Ie === void 0 ? void 0 : Ie.defaultValidateMessages) || {}, ((k = (m = Yt.locale) === null || m === void 0 ? void 0 : m.Form) === null || k === void 0 ? void 0 : k.defaultValidateMessages) || {}, ((B = Yt.form) === null || B === void 0 ? void 0 : B.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Yt, i == null ? void 0 : i.validateMessages]);
  Object.keys(Or).length > 0 && (qe = /* @__PURE__ */ _.createElement(Kx.Provider, {
    value: Or
  }, qe)), a && (qe = /* @__PURE__ */ _.createElement(ku, {
    locale: a,
    _ANT_MARK__: Pu
  }, qe)), qe = /* @__PURE__ */ _.createElement(sa.Provider, {
    value: Tr
  }, qe), c && (qe = /* @__PURE__ */ _.createElement(vp, {
    size: c
  }, qe)), qe = /* @__PURE__ */ _.createElement(f1, null, qe);
  const ls = _.useMemo(() => {
    const Ie = rt || {}, {
      algorithm: m,
      token: k,
      components: B,
      cssVar: $
    } = Ie, me = h1(Ie, ["algorithm", "token", "components", "cssVar"]), be = m && (!Array.isArray(m) || m.length > 0) ? Qs(m) : Lu, fe = {};
    Object.entries(B || {}).forEach((Je) => {
      let [Pe, Ne] = Je;
      const je = Object.assign({}, Ne);
      "algorithm" in je && (je.algorithm === !0 ? je.theme = be : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = Qs(je.algorithm)), delete je.algorithm), fe[Pe] = je;
    });
    const ce = Object.assign(Object.assign({}, gr), k);
    return Object.assign(Object.assign({}, me), {
      theme: be,
      token: ce,
      components: fe,
      override: Object.assign({
        override: ce
      }, fe),
      cssVar: $
    });
  }, [rt]);
  return p && (qe = /* @__PURE__ */ _.createElement(Mu.Provider, {
    value: ls
  }, qe)), Yt.warning && (qe = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: Yt.warning
  }, qe)), A !== void 0 && (qe = /* @__PURE__ */ _.createElement(gp, {
    disabled: A
  }, qe)), /* @__PURE__ */ _.createElement(en.Provider, {
    value: Yt
  }, qe);
}, Gn = (t) => {
  const n = _.useContext(en), e = _.useContext(Ru);
  return /* @__PURE__ */ _.createElement(v1, Object.assign({
    parentContext: n,
    legacyLocale: e
  }, t));
};
Gn.ConfigContext = en;
Gn.SizeContext = yr;
Gn.config = g1;
Gn.useConfig = yp;
Object.defineProperty(Gn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), yr)
});
process.env.NODE_ENV !== "production" && (Gn.displayName = "ConfigProvider");
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
  return _e(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (_e(t.icon) === "object" || typeof t.icon == "function");
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
function Ri(t, n, e) {
  return e ? /* @__PURE__ */ Fe.createElement(t.tag, V(V({
    key: n
  }, Rc(t.attrs)), e), (t.children || []).map(function(r, o) {
    return Ri(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ Fe.createElement(t.tag, V({
    key: n
  }, Rc(t.attrs)), (t.children || []).map(function(r, o) {
    return Ri(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  }));
}
function af(t) {
  return vr(t)[0];
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
  var e = Qt(sa), r = e.csp, o = e.prefixCls, s = e.layer, i = _1;
  o && (i = i.replace(/anticon/g, o)), s && (i = "@layer ".concat(s, ` {
`).concat(i, `
}`)), it(function() {
    var a = n.current, c = S1(a);
    yn(i, "@ant-design-icons", {
      prepend: !s,
      csp: r,
      attachTo: c
    });
  }, []);
}, A1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], dr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function T1(t) {
  var n = t.primaryColor, e = t.secondaryColor;
  dr.primaryColor = n, dr.secondaryColor = e || af(n), dr.calculated = !!e;
}
function O1() {
  return V({}, dr);
}
var Kn = function(n) {
  var e = n.icon, r = n.className, o = n.onClick, s = n.style, i = n.primaryColor, a = n.secondaryColor, c = pr(n, A1), u = _.useRef(), f = dr;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: a || af(i)
  }), C1(u), E1(Oc(e), "icon should be icon definiton, but got ".concat(e)), !Oc(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = V(V({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Ri(d.icon, "svg-".concat(d.name), V(V({
    className: r,
    onClick: o,
    style: s,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
Kn.displayName = "IconReact";
Kn.getTwoToneColors = O1;
Kn.setTwoToneColors = T1;
function lf(t) {
  var n = cf(t), e = le(n, 2), r = e[0], o = e[1];
  return Kn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function R1() {
  var t = Kn.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var P1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lf(wo.primary);
var nn = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, s = t.rotate, i = t.tabIndex, a = t.onClick, c = t.twoToneColor, u = pr(t, P1), f = _.useContext(sa), d = f.prefixCls, l = d === void 0 ? "anticon" : d, v = f.rootClassName, g = et(v, l, q(q({}, "".concat(l, "-").concat(r.name), !!r.name), "".concat(l, "-spin"), !!o || r.name === "loading"), e), x = i;
  x === void 0 && a && (x = -1);
  var h = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, E = cf(c), b = le(E, 2), p = b[0], A = b[1];
  return /* @__PURE__ */ _.createElement("span", Dt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: n,
    tabIndex: x,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(Kn, {
    icon: r,
    primaryColor: p,
    secondaryColor: A,
    style: h
  }));
});
nn.displayName = "AntdIcon";
nn.getTwoToneColor = R1;
nn.setTwoToneColor = lf;
var k1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ _.forwardRef(k1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ _.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, L1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(L1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var M1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: M1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: B1
  }));
}, xf = /* @__PURE__ */ _.forwardRef(F1);
process.env.NODE_ENV !== "production" && (xf.displayName = "InfoCircleFilled");
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
function Pc(t, n) {
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
  } : e = V({}, n);
  var r = {};
  return Object.keys(t).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || Pc(o, U1)) || // Data
    e.data && Pc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = t[o]);
  }), r;
}
const pf = (t, n, e) => /* @__PURE__ */ Fe.isValidElement(t) ? /* @__PURE__ */ Fe.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function X1(t, n) {
  return pf(t, t, n);
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
    fontSize: s,
    fontSizeLG: i,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: u,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: l,
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
        fontSize: s,
        lineHeight: a
      },
      "&-message": {
        color: l
      },
      [`&${n}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${u}, opacity ${e} ${u},
        padding-top ${e} ${u}, padding-bottom ${e} ${u},
        margin-bottom ${e} ${u}`
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
        color: l,
        fontSize: i
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
    colorWarning: s,
    colorWarningBorder: i,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: u,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: l,
    colorInfoBg: v
  } = t;
  return {
    [n]: {
      "&-success": Wr(o, r, e, t, n),
      "&-info": Wr(v, l, d, t, n),
      "&-warning": Wr(a, i, s, t, n),
      "&-error": Object.assign(Object.assign({}, Wr(f, u, c, t, n)), {
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
    fontSizeIcon: s,
    colorIcon: i,
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
        fontSize: s,
        lineHeight: bo(s),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${e}-close`]: {
          color: i,
          transition: `color ${r}`,
          "&:hover": {
            color: a
          }
        }
      },
      "&-close-text": {
        color: i,
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
var kc = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const J1 = {
  success: uf,
  info: xf,
  error: ff,
  warning: hf
}, Q1 = (t) => {
  const {
    icon: n,
    prefixCls: e,
    type: r
  } = t, o = J1[r] || null;
  return n ? pf(n, /* @__PURE__ */ _.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: et(`${e}-icon`, n.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${e}-icon`
  });
}, em = (t) => {
  const {
    isClosable: n,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: s
  } = t, i = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(df, null) : r;
  return n ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, s), i) : null;
}, fa = /* @__PURE__ */ _.forwardRef((t, n) => {
  const {
    description: e,
    prefixCls: r,
    message: o,
    banner: s,
    className: i,
    rootClassName: a,
    style: c,
    onMouseEnter: u,
    onMouseLeave: f,
    onClick: d,
    afterClose: l,
    showIcon: v,
    closable: g,
    closeText: x,
    closeIcon: h,
    action: E,
    id: b
  } = t, p = kc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [A, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && $n("Alert").deprecated(!x, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(n, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: C,
    direction: L,
    closable: z,
    closeIcon: X,
    className: oe,
    style: G
  } = Du("alert"), F = C("alert", r), [W, H, ee] = Z1(F), Z = (de) => {
    var ge;
    y(!0), (ge = t.onClose) === null || ge === void 0 || ge.call(t, de);
  }, J = _.useMemo(() => t.type !== void 0 ? t.type : s ? "warning" : "info", [t.type, s]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || x ? !0 : typeof g == "boolean" ? g : h !== !1 && h !== null && h !== void 0 ? !0 : !!z, [x, h, g, z]), ae = s && v === void 0 ? !0 : v, se = et(F, `${F}-${J}`, {
    [`${F}-with-description`]: !!e,
    [`${F}-no-icon`]: !ae,
    [`${F}-banner`]: !!s,
    [`${F}-rtl`]: L === "rtl"
  }, oe, i, a, ee, H), K = W1(p, {
    aria: !0,
    data: !0
  }), ne = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : x || (h !== void 0 ? h : typeof z == "object" && z.closeIcon ? z.closeIcon : X), [h, g, x, X]), xe = _.useMemo(() => {
    const de = g ?? z;
    if (typeof de == "object") {
      const {
        closeIcon: ge
      } = de;
      return kc(de, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return W(/* @__PURE__ */ _.createElement(nf, {
    visible: !A,
    motionName: `${F}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (de) => ({
      maxHeight: de.offsetHeight
    }),
    onLeaveEnd: l
  }, (de, ge) => {
    let {
      className: I,
      style: M
    } = de;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: b,
      ref: Rh(O, ge),
      "data-show": !A,
      className: et(se, I),
      style: Object.assign(Object.assign(Object.assign({}, G), c), M),
      onMouseEnter: u,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, K), ae ? /* @__PURE__ */ _.createElement(Q1, {
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
    }, e) : null), E ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-action`
    }, E) : null, /* @__PURE__ */ _.createElement(em, {
      isClosable: Q,
      prefixCls: F,
      closeIcon: ne,
      handleClose: Z,
      ariaProps: xe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (fa.displayName = "Alert");
function tm(t, n, e) {
  return n = Bn(n), Kl(t, Ji() ? Reflect.construct(n, e || [], Bn(t).constructor) : n.apply(t, e));
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
        id: s,
        children: i
      } = this.props, {
        error: a,
        info: c
      } = this.state, u = (c == null ? void 0 : c.componentStack) || null, f = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? u : o;
      return a ? /* @__PURE__ */ _.createElement(fa, {
        id: s,
        type: "error",
        message: f,
        description: /* @__PURE__ */ _.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : i;
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
  var r = e || {}, o = r.noTrailing, s = o === void 0 ? !1 : o, i = r.noLeading, a = i === void 0 ? !1 : i, c = r.debounceMode, u = c === void 0 ? void 0 : c, f, d = !1, l = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(h) {
    var E = h || {}, b = E.upcomingOnly, p = b === void 0 ? !1 : b;
    v(), d = !p;
  }
  function x() {
    for (var h = arguments.length, E = new Array(h), b = 0; b < h; b++)
      E[b] = arguments[b];
    var p = this, A = Date.now() - l;
    if (d)
      return;
    function y() {
      l = Date.now(), n.apply(p, E);
    }
    function O() {
      f = void 0;
    }
    !a && u && !f && y(), v(), u === void 0 && A > t ? a ? (l = Date.now(), s || (f = setTimeout(u ? O : y, t))) : y() : s !== !0 && (f = setTimeout(u ? O : y, u === void 0 ? t - A : t));
  }
  return x.cancel = g, x;
}
function sm(t, n, e) {
  var r = {}, o = r.atBegin, s = o === void 0 ? !1 : o;
  return om(t, n, {
    debounceMode: s !== !1
  });
}
function Ic(t) {
  return ["small", "middle", "large"].includes(t);
}
const gf = ["wrap", "nowrap", "wrap-reverse"], vf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], im = (t, n) => {
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
  return et(Object.assign(Object.assign(Object.assign({}, im(t, n)), am(t, n)), cm(t, n)));
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
}, xm = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return vf.forEach((r) => {
    e[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, pm = () => ({}), mm = la("Flex", (t) => {
  const {
    paddingXS: n,
    padding: e,
    paddingLG: r
  } = t, o = es(t, {
    flexGapSM: n,
    flexGap: e,
    flexGapLG: r
  });
  return [um(o), fm(o), dm(o), hm(o), xm(o)];
}, pm, {
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
const bf = /* @__PURE__ */ Fe.forwardRef((t, n) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: s,
    flex: i,
    gap: a,
    children: c,
    vertical: u = !1,
    component: f = "div"
  } = t, d = gm(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: l,
    direction: v,
    getPrefixCls: g
  } = Fe.useContext(en), x = g("flex", e), [h, E, b] = mm(x), p = u ?? (l == null ? void 0 : l.vertical), A = et(o, r, l == null ? void 0 : l.className, x, E, b, lm(x, t), {
    [`${x}-rtl`]: v === "rtl",
    [`${x}-gap-${a}`]: Ic(a),
    [`${x}-vertical`]: p
  }), y = Object.assign(Object.assign({}, l == null ? void 0 : l.style), s);
  return i && (y.flex = i), a && !Ic(a) && (y.gap = a), h(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: A,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const Eo = 100, Sf = Eo / 5, wf = Eo / 2 - Sf / 2, Ps = wf * 2 * Math.PI, Nc = 50, jc = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ _.createElement("circle", {
    className: et(`${n}-circle`, {
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
  const r = `${e}-dot`, o = `${r}-holder`, s = `${o}-hidden`, [i, a] = _.useState(!1);
  lu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!i)
    return null;
  const u = {
    strokeDashoffset: `${Ps / 4}`,
    strokeDasharray: `${Ps * c / 100} ${Ps * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: et(o, `${r}-progress`, c <= 0 && s)
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
    style: u
  })));
};
function ym(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, s = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: et(o, e > 0 && s)
  }, /* @__PURE__ */ _.createElement("span", {
    className: et(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((i) => /* @__PURE__ */ _.createElement("i", {
    className: `${n}-dot-item`,
    key: i
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
    className: et(e.props.className, o),
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
  const n = es(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [Em(n)];
}, _m), Am = 200, Lc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(t, n) {
  const [e, r] = _.useState(0), o = _.useRef(null), s = n === "auto";
  return _.useEffect(() => (s && t && (r(0), o.current = setInterval(() => {
    r((i) => {
      const a = 100 - i;
      for (let c = 0; c < Lc.length; c += 1) {
        const [u, f] = Lc[c];
        if (i <= u)
          return i + a * f;
      }
      return i;
    });
  }, Am)), () => {
    clearInterval(o.current);
  }), [s, t]), s ? e : n;
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
const hr = (t) => {
  var n;
  const {
    prefixCls: e,
    spinning: r = !0,
    delay: o = 0,
    className: s,
    rootClassName: i,
    size: a = "default",
    tip: c,
    wrapperClassName: u,
    style: f,
    children: d,
    fullscreen: l = !1,
    indicator: v,
    percent: g
  } = t, x = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: E,
    className: b,
    style: p,
    indicator: A
  } = Du("spin"), y = h("spin", e), [O, C, L] = Cm(y), [z, X] = _.useState(() => r && !Rm(r, o)), oe = Tm(z, g);
  _.useEffect(() => {
    if (r) {
      const J = sm(o, () => {
        X(!0);
      });
      return J(), () => {
        var Q;
        (Q = J == null ? void 0 : J.cancel) === null || Q === void 0 || Q.call(J);
      };
    }
    X(!1);
  }, [o, r]);
  const G = _.useMemo(() => typeof d < "u" && !l, [d, l]);
  if (process.env.NODE_ENV !== "production") {
    const J = $n("Spin");
    process.env.NODE_ENV !== "production" && J(!c || G || l, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const F = et(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: z,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: E === "rtl"
  }, s, !l && i, C, L), W = et(`${y}-container`, {
    [`${y}-blur`]: z
  }), H = (n = v ?? A) !== null && n !== void 0 ? n : Ef, ee = Object.assign(Object.assign({}, p), f), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, x, {
    style: ee,
    className: F,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: y,
    indicator: H,
    percent: oe
  }), c && (G || l) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return O(G ? /* @__PURE__ */ _.createElement("div", Object.assign({}, x, {
    className: et(`${y}-nested-loading`, u, C, L)
  }), z && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ _.createElement("div", {
    className: W,
    key: "container"
  }, d)) : l ? /* @__PURE__ */ _.createElement("div", {
    className: et(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: z
    }, i, C, L)
  }, Z) : Z);
};
hr.setDefaultIndicator = (t) => {
  Ef = t;
};
process.env.NODE_ENV !== "production" && (hr.displayName = "Spin");
function _f(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: Pm } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ts, toStringTag: Cf } = Symbol, ns = /* @__PURE__ */ ((t) => (n) => {
  const e = Pm.call(n);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (t) => (t = t.toLowerCase(), (n) => ns(n) === t), rs = (t) => (n) => typeof n === t, { isArray: Zn } = Array, br = rs("undefined");
function km(t) {
  return t !== null && !br(t) && t.constructor !== null && !br(t.constructor) && ct(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = Tt("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = rs("string"), ct = rs("function"), Tf = rs("number"), os = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, co = (t) => {
  if (ns(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Cf in t) && !(ts in t);
}, Lm = Tt("Date"), Mm = Tt("File"), Dm = Tt("Blob"), Bm = Tt("FileList"), Fm = (t) => os(t) && ct(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || ct(t.append) && ((n = ns(t)) === "formdata" || // detect form-data instance
  n === "object" && ct(t.toString) && t.toString() === "[object FormData]"));
}, Vm = Tt("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cr(t, n, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), Zn(t))
    for (r = 0, o = t.length; r < o; r++)
      n.call(null, t[r], r, t);
  else {
    const s = e ? Object.getOwnPropertyNames(t) : Object.keys(t), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], n.call(null, t[a], a, t);
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
const xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (t) => !br(t) && t !== xn;
function Pi() {
  const { caseless: t } = Rf(this) && this || {}, n = {}, e = (r, o) => {
    const s = t && Of(n, o) || o;
    co(n[s]) && co(r) ? n[s] = Pi(n[s], r) : co(r) ? n[s] = Pi({}, r) : Zn(r) ? n[s] = r.slice() : n[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cr(arguments[r], e);
  return n;
}
const Ym = (t, n, e, { allOwnKeys: r } = {}) => (Cr(n, (o, s) => {
  e && ct(o) ? t[s] = _f(o, e) : t[s] = o;
}, { allOwnKeys: r }), t), $m = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Gm = (t, n, e, r) => {
  t.prototype = Object.create(n.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: n.prototype
  }), e && Object.assign(t.prototype, e);
}, Km = (t, n, e, r) => {
  let o, s, i;
  const a = {};
  if (n = n || {}, t == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, t, n)) && !a[i] && (n[i] = t[i], a[i] = !0);
    t = e !== !1 && da(t);
  } while (t && (!e || e(t, n)) && t !== Object.prototype);
  return n;
}, Zm = (t, n, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= n.length;
  const r = t.indexOf(n, e);
  return r !== -1 && r === e;
}, Jm = (t) => {
  if (!t) return null;
  if (Zn(t)) return t;
  let n = t.length;
  if (!Tf(n)) return null;
  const e = new Array(n);
  for (; n-- > 0; )
    e[n] = t[n];
  return e;
}, Qm = /* @__PURE__ */ ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && da(Uint8Array)), eg = (t, n) => {
  const r = (t && t[ts]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    n.call(t, s[0], s[1]);
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
), Mc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = Tt("RegExp"), Pf = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  Cr(e, (o, s) => {
    let i;
    (i = n(o, s, t)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(t, r);
}, sg = (t) => {
  Pf(t, (n, e) => {
    if (ct(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (ct(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, ig = (t, n) => {
  const e = {}, r = (o) => {
    o.forEach((s) => {
      e[s] = !0;
    });
  };
  return Zn(t) ? r(t) : r(String(t).split(n)), e;
}, ag = () => {
}, cg = (t, n) => t != null && Number.isFinite(t = +t) ? t : n;
function lg(t) {
  return !!(t && ct(t.append) && t[Cf] === "FormData" && t[ts]);
}
const ug = (t) => {
  const n = new Array(10), e = (r, o) => {
    if (os(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const s = Zn(r) ? [] : {};
        return Cr(r, (i, a) => {
          const c = e(i, o + 1);
          !br(c) && (s[a] = c);
        }), n[o] = void 0, s;
      }
    }
    return r;
  };
  return e(t, 0);
}, fg = Tt("AsyncFunction"), dg = (t) => t && (os(t) || ct(t)) && ct(t.then) && ct(t.catch), kf = ((t, n) => t ? setImmediate : n ? ((e, r) => (xn.addEventListener("message", ({ source: o, data: s }) => {
  o === xn && s === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), xn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  ct(xn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(xn) : typeof process < "u" && process.nextTick || kf, xg = (t) => t != null && ct(t[ts]), T = {
  isArray: Zn,
  isArrayBuffer: Af,
  isBuffer: km,
  isFormData: zm,
  isArrayBufferView: Im,
  isString: Nm,
  isNumber: Tf,
  isBoolean: jm,
  isObject: os,
  isPlainObject: co,
  isReadableStream: Hm,
  isRequest: Um,
  isResponse: qm,
  isHeaders: Wm,
  isUndefined: br,
  isDate: Lm,
  isFile: Mm,
  isBlob: Dm,
  isRegExp: og,
  isFunction: ct,
  isStream: Fm,
  isURLSearchParams: Vm,
  isTypedArray: Qm,
  isFileList: Bm,
  forEach: Cr,
  merge: Pi,
  extend: Ym,
  trim: Xm,
  stripBOM: $m,
  inherits: Gm,
  toFlatObject: Km,
  kindOf: ns,
  kindOfTest: Tt,
  endsWith: Zm,
  toArray: Jm,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Mc,
  hasOwnProp: Mc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pf,
  freezeMethods: sg,
  toObjectSet: ig,
  toCamelCase: rg,
  noop: ag,
  toFiniteNumber: cg,
  findKey: Of,
  global: xn,
  isContextDefined: Rf,
  isSpecCompliantForm: lg,
  toJSONObject: ug,
  isAsyncFn: fg,
  isThenable: dg,
  setImmediate: kf,
  asap: hg,
  isIterable: xg
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
const If = re.prototype, Nf = {};
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
Object.defineProperties(re, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
re.from = (t, n, e, r, o, s) => {
  const i = Object.create(If);
  return T.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), re.call(i, t.message, n, e, r, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
const pg = null;
function ki(t) {
  return T.isPlainObject(t) || T.isArray(t);
}
function jf(t) {
  return T.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dc(t, n, e) {
  return t ? t.concat(n).map(function(o, s) {
    return o = jf(o), !e && s ? "[" + o + "]" : o;
  }).join(e ? "." : "") : n;
}
function mg(t) {
  return T.isArray(t) && !t.some(ki);
}
const gg = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ss(t, n, e) {
  if (!T.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), e = T.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, h) {
    return !T.isUndefined(h[x]);
  });
  const r = e.metaTokens, o = e.visitor || f, s = e.dots, i = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!c && T.isBlob(g))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, x, h) {
    let E = g;
    if (g && !h && typeof g == "object") {
      if (T.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && mg(g) || (T.isFileList(g) || T.endsWith(x, "[]")) && (E = T.toArray(g)))
        return x = jf(x), E.forEach(function(p, A) {
          !(T.isUndefined(p) || p === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Dc([x], A, s) : i === null ? x : x + "[]",
            u(p)
          );
        }), !1;
    }
    return ki(g) ? !0 : (n.append(Dc(h, x, s), u(g)), !1);
  }
  const d = [], l = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: ki
  });
  function v(g, x) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(g), T.forEach(g, function(E, b) {
        (!(T.isUndefined(E) || E === null) && o.call(
          n,
          E,
          T.isString(b) ? b.trim() : b,
          x,
          l
        )) === !0 && v(E, x ? x.concat(b) : [b]);
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
  this._pairs = [], t && ss(t, this, n);
}
const Lf = ha.prototype;
Lf.append = function(n, e) {
  this._pairs.push([n, e]);
};
Lf.toString = function(n) {
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
function Mf(t, n, e) {
  if (!n)
    return t;
  const r = e && e.encode || vg;
  T.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let s;
  if (o ? s = o(n, e) : s = T.isURLSearchParams(n) ? n.toString() : new ha(n, e).toString(r), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
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
}, xa = typeof window < "u" && typeof document < "u", Ii = typeof navigator == "object" && navigator || void 0, Eg = xa && (!Ii || ["ReactNative", "NativeScript", "NS"].indexOf(Ii.product) < 0), _g = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cg = xa && window.location.href || "http://localhost", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xa,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: _g,
  navigator: Ii,
  origin: Cg
}, Symbol.toStringTag, { value: "Module" })), Qe = {
  ...Ag,
  ...wg
};
function Tg(t, n) {
  return ss(t, new Qe.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, s) {
      return Qe.isNode && T.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
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
  let s;
  for (r = 0; r < o; r++)
    s = e[r], n[s] = t[s];
  return n;
}
function Bf(t) {
  function n(e, r, o, s) {
    let i = e[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = s >= e.length;
    return i = !i && T.isArray(o) ? o.length : i, c ? (T.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !T.isObject(o[i])) && (o[i] = []), n(e, r, o[i], s) && T.isArray(o[i]) && (o[i] = Rg(o[i])), !a);
  }
  if (T.isFormData(t) && T.isFunction(t.entries)) {
    const e = {};
    return T.forEachEntry(t, (r, o) => {
      n(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function Pg(t, n, e) {
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
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, s = T.isObject(n);
    if (s && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return o ? JSON.stringify(Bf(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n) || T.isReadableStream(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(n, this.formSerializer).toString();
      if ((a = T.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ss(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (e.setContentType("application/json", !1), Pg(n)) : n;
  }],
  transformResponse: [function(n) {
    const e = this.transitional || Ar.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (T.isResponse(n) || T.isReadableStream(n))
      return n;
    if (n && T.isString(n) && (r && !this.responseType || o)) {
      const i = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (i)
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
  Ar.headers[t] = {};
});
const kg = T.toObjectSet([
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
`).forEach(function(i) {
    o = i.indexOf(":"), e = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!e || n[e] && kg[e]) && (e === "set-cookie" ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r);
  }), n;
}, zc = Symbol("internals");
function ir(t) {
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
function ks(t, n, e, r, o) {
  if (T.isFunction(r))
    return r.call(this, n, e);
  if (o && (n = e), !!T.isString(n)) {
    if (T.isString(r))
      return n.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(n);
  }
}
function Lg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function Mg(t, n) {
  const e = T.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + e, {
      value: function(o, s, i) {
        return this[r].call(this, n, o, s, i);
      },
      configurable: !0
    });
  });
}
let lt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, e, r) {
    const o = this;
    function s(a, c, u) {
      const f = ir(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = lo(a));
    }
    const i = (a, c) => T.forEach(a, (u, f) => s(u, f, c));
    if (T.isPlainObject(n) || n instanceof this.constructor)
      i(n, e);
    else if (T.isString(n) && (n = n.trim()) && !jg(n))
      i(Ig(n), e);
    else if (T.isObject(n) && T.isIterable(n)) {
      let a = {}, c, u;
      for (const f of n) {
        if (!T.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (c = a[u]) ? T.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      i(a, e);
    } else
      n != null && s(e, n, r);
    return this;
  }
  get(n, e) {
    if (n = ir(n), n) {
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
    if (n = ir(n), n) {
      const r = T.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!e || ks(this, this[r], r, e)));
    }
    return !1;
  }
  delete(n, e) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = ir(i), i) {
        const a = T.findKey(r, i);
        a && (!e || ks(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return T.isArray(n) ? n.forEach(s) : s(n), o;
  }
  clear(n) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const s = e[r];
      (!n || ks(this, this[s], s, n, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(n) {
    const e = this, r = {};
    return T.forEach(this, (o, s) => {
      const i = T.findKey(r, s);
      if (i) {
        e[i] = lo(o), delete e[s];
        return;
      }
      const a = n ? Lg(s) : String(s).trim();
      a !== s && delete e[s], e[a] = lo(o), r[a] = !0;
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
    function s(i) {
      const a = ir(i);
      r[a] || (Mg(o, i), r[a] = !0);
    }
    return T.isArray(n) ? n.forEach(s) : s(n), this;
  }
};
lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(lt.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
T.freezeMethods(lt);
function Is(t, n) {
  const e = this || Ar, r = n || e, o = lt.from(r.headers);
  let s = r.data;
  return T.forEach(t, function(a) {
    s = a.call(e, s, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), s;
}
function Ff(t) {
  return !!(t && t.__CANCEL__);
}
function Jn(t, n, e) {
  re.call(this, t ?? "canceled", re.ERR_CANCELED, n, e), this.name = "CanceledError";
}
T.inherits(Jn, re, {
  __CANCEL__: !0
});
function zf(t, n, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? t(e) : n(new re(
    "Request failed with status code " + e.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
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
  let o = 0, s = 0, i;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const u = Date.now(), f = r[s];
    i || (i = u), e[o] = c, r[o] = u;
    let d = s, l = 0;
    for (; d !== o; )
      l += e[d++], d = d % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), u - i < n)
      return;
    const v = f && u - f;
    return v ? Math.round(l * 1e3 / v) : void 0;
  };
}
function Fg(t, n) {
  let e = 0, r = 1e3 / n, o, s;
  const i = (u, f = Date.now()) => {
    e = f, o = null, s && (clearTimeout(s), s = null), t.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - e;
    d >= r ? i(u, f) : (o = u, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const _o = (t, n, e = 3) => {
  let r = 0;
  const o = Bg(50, 250);
  return Fg((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, c = i - r, u = o(c), f = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && f ? (a - i) / u : void 0,
      event: s,
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
}, Hc = (t) => (...n) => T.asap(() => t(...n)), zg = Qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, Qe.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(Qe.origin),
  Qe.navigator && /(msie|trident)/i.test(Qe.navigator.userAgent)
) : () => !0, Vg = Qe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, e, r, o, s) {
      const i = [t + "=" + encodeURIComponent(n)];
      T.isNumber(e) && i.push("expires=" + new Date(e).toGMTString()), T.isString(r) && i.push("path=" + r), T.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
const Uc = (t) => t instanceof lt ? { ...t } : t;
function En(t, n) {
  n = n || {};
  const e = {};
  function r(u, f, d, l) {
    return T.isPlainObject(u) && T.isPlainObject(f) ? T.merge.call({ caseless: l }, u, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(u, f, d, l) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u, d, l);
    } else return r(u, f, d, l);
  }
  function s(u, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function i(u, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, d) {
    if (d in n)
      return r(u, f);
    if (d in t)
      return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, f, d) => o(Uc(u), Uc(f), d, !0)
  };
  return T.forEach(Object.keys(Object.assign({}, t, n)), function(f) {
    const d = c[f] || o, l = d(t[f], n[f], f);
    T.isUndefined(l) && d !== a || (e[f] = l);
  }), e;
}
const Hf = (t) => {
  const n = En({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = n;
  n.headers = i = lt.from(i), n.url = Mf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (T.isFormData(e)) {
    if (Qe.hasStandardBrowserEnv || Qe.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [u, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Qe.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const u = o && s && Vg.read(s);
    u && i.set(o, u);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let s = o.data;
    const i = lt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, f, d, l, v, g;
    function x() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function E() {
      if (!h)
        return;
      const p = lt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: p,
        config: t,
        request: h
      };
      zf(function(C) {
        e(C), x();
      }, function(C) {
        r(C), x();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new re("Request aborted", re.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new re("Network Error", re.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new re(
        A,
        y.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        t,
        h
      )), h = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in h && T.forEach(i.toJSON(), function(A, y) {
      h.setRequestHeader(y, A);
    }), T.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), u && ([l, g] = _o(u, !0), h.addEventListener("progress", l)), c && h.upload && ([d, v] = _o(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (p) => {
      h && (r(!p || p.type ? new Jn(null, t, h) : p), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Dg(o.url);
    if (b && Qe.protocols.indexOf(b) === -1) {
      r(new re("Unsupported protocol " + b + ":", re.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(s || null);
  });
}, Xg = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof re ? f : new Jn(f instanceof Error ? f.message : f));
      }
    };
    let i = n && setTimeout(() => {
      i = null, s(new re(`timeout ${n} of ms exceeded`, re.ETIMEDOUT));
    }, n);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", s));
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
  let s = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: f } = await o.next();
        if (u) {
          a(), c.close();
          return;
        }
        let d = f.byteLength;
        if (e) {
          let l = s += d;
          e(l);
        }
        c.enqueue(new Uint8Array(f));
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
}, is = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = is && typeof ReadableStream == "function", Kg = is && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (n) => t.encode(n))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), qf = (t, ...n) => {
  try {
    return !!t(...n);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let t = !1;
  const n = new Request(Qe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !n;
}), Wc = 64 * 1024, Ni = Uf && qf(() => T.isReadableStream(new Response("").body)), Co = {
  stream: Ni && ((t) => t.body)
};
is && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Co[n] && (Co[n] = T.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
      throw new re(`Response type '${n}' is not supported`, re.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (t) => {
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
    return (await Kg(t)).byteLength;
}, Qg = async (t, n) => {
  const e = T.toFiniteNumber(t.getContentLength());
  return e ?? Jg(n);
}, ev = is && (async (t) => {
  let {
    url: n,
    method: e,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: l
  } = Hf(t);
  u = u ? (u + "").toLowerCase() : "text";
  let v = Xg([o, s && s.toAbortSignal()], i), g;
  const x = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (h = await Qg(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (T.isFormData(r) && (O = y.headers.get("content-type")) && f.setContentType(O), y.body) {
        const [C, L] = Vc(
          h,
          _o(Hc(c))
        );
        r = qc(y.body, Wc, C, L);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(n, {
      ...l,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    });
    let b = await fetch(g);
    const p = Ni && (u === "stream" || u === "response");
    if (Ni && (a || p && x)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((z) => {
        y[z] = b[z];
      });
      const O = T.toFiniteNumber(b.headers.get("content-length")), [C, L] = a && Vc(
        O,
        _o(Hc(a), !0)
      ) || [];
      b = new Response(
        qc(b.body, Wc, C, () => {
          L && L(), x && x();
        }),
        y
      );
    }
    u = u || "text";
    let A = await Co[T.findKey(Co, u) || "text"](b, t);
    return !p && x && x(), await new Promise((y, O) => {
      zf(y, O, {
        data: A,
        headers: lt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: g
      });
    });
  } catch (E) {
    throw x && x(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new re("Network Error", re.ERR_NETWORK, t, g),
      {
        cause: E.cause || E
      }
    ) : re.from(E, E && E.code, t, g);
  }
}), ji = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
T.forEach(ji, (t, n) => {
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
    for (let s = 0; s < n; s++) {
      e = t[s];
      let i;
      if (r = e, !tv(e) && (r = ji[(i = String(e)).toLowerCase()], r === void 0))
        throw new re(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = n ? s.length > 1 ? `since :
` + s.map(Xc).join(`
`) : " " + Xc(s[0]) : "as no adapter specified";
      throw new re(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ji
};
function Ns(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Jn(null, t);
}
function Yc(t) {
  return Ns(t), t.headers = lt.from(t.headers), t.data = Is.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Ar.adapter)(t).then(function(r) {
    return Ns(t), r.data = Is.call(
      t,
      t.transformResponse,
      r
    ), r.headers = lt.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ns(t), r && r.response && (r.response.data = Is.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = lt.from(r.response.headers))), Promise.reject(r);
  });
}
const Xf = "1.9.0", as = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  as[t] = function(r) {
    return typeof r === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const $c = {};
as.transitional = function(n, e, r) {
  function o(s, i) {
    return "[Axios v" + Xf + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (n === !1)
      throw new re(
        o(i, " has been removed" + (e ? " in " + e : "")),
        re.ERR_DEPRECATED
      );
    return e && !$c[i] && ($c[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), n ? n(s, i, a) : !0;
  };
};
as.spelling = function(n) {
  return (e, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function nv(t, n, e) {
  if (typeof t != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = n[s];
    if (i) {
      const a = t[s], c = a === void 0 || i(a, s, t);
      if (c !== !0)
        throw new re("option " + s + " must be " + c, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new re("Unknown option " + s, re.ERR_BAD_OPTION);
  }
}
const uo = {
  assertOptions: nv,
  validators: as
}, It = uo.validators;
let Sn = class {
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
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(n, e) {
    typeof n == "string" ? (e = e || {}, e.url = n) : e = n || {}, e = En(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: s } = e;
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
    let i = s && T.merge(
      s.common,
      s[e.method]
    );
    s && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), e.headers = lt.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(e) === !1 || (c = c && x.synchronous, a.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(x) {
      u.push(x.fulfilled, x.rejected);
    });
    let f, d = 0, l;
    if (!c) {
      const g = [Yc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), l = g.length, f = Promise.resolve(e); d < l; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    l = a.length;
    let v = e;
    for (d = 0; d < l; ) {
      const g = a[d++], x = a[d++];
      try {
        v = g(v);
      } catch (h) {
        x.call(this, h);
        break;
      }
    }
    try {
      f = Yc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, l = u.length; d < l; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(n) {
    n = En(this.defaults, n);
    const e = Vf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Mf(e, n.params, n.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(n) {
  Sn.prototype[n] = function(e, r) {
    return this.request(En(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function e(r) {
    return function(s, i, a) {
      return this.request(En(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Sn.prototype[n] = e(), Sn.prototype[n + "Form"] = e(!0);
});
let rv = class Yf {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(s) {
      e = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, n(function(s, i, a) {
      r.reason || (r.reason = new Jn(s, i, a), e(r.reason));
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
function sv(t) {
  return T.isObject(t) && t.isAxiosError === !0;
}
const Li = {
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
Object.entries(Li).forEach(([t, n]) => {
  Li[n] = t;
});
function $f(t) {
  const n = new Sn(t), e = _f(Sn.prototype.request, n);
  return T.extend(e, Sn.prototype, n, { allOwnKeys: !0 }), T.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(En(t, o));
  }, e;
}
const Le = $f(Ar);
Le.Axios = Sn;
Le.CanceledError = Jn;
Le.CancelToken = rv;
Le.isCancel = Ff;
Le.VERSION = Xf;
Le.toFormData = ss;
Le.AxiosError = re;
Le.Cancel = Le.CanceledError;
Le.all = function(n) {
  return Promise.all(n);
};
Le.spread = ov;
Le.isAxiosError = sv;
Le.mergeConfig = En;
Le.AxiosHeaders = lt;
Le.formToJSON = (t) => Bf(T.isHTMLForm(t) ? new FormData(t) : t);
Le.getAdapter = Wf.getAdapter;
Le.HttpStatusCode = Li;
Le.default = Le;
const {
  Axios: Rv,
  AxiosError: Pv,
  CanceledError: kv,
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
} = Le, Ut = Ao;
(function(t, n) {
  const e = Ao, r = t();
  for (; ; )
    try {
      if (-parseInt(e(459)) / 1 * (parseInt(e(472)) / 2) + parseInt(e(469)) / 3 * (parseInt(e(475)) / 4) + parseInt(e(462)) / 5 * (-parseInt(e(453)) / 6) + parseInt(e(470)) / 7 * (-parseInt(e(467)) / 8) + -parseInt(e(455)) / 9 + parseInt(e(473)) / 10 + parseInt(e(458)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(To, 621405);
Ut(464) + Ut(474);
Le[Ut(447)][Ut(460) + Ut(454)] = !0;
const iv = async (t) => {
  var e, r, o, s;
  const n = Ut;
  try {
    return (await Le(t))[n(450)];
  } catch (i) {
    throw ((r = (e = i[n(461)]) == null ? void 0 : e[n(450)]) == null ? void 0 : r[n(456)]) || ((s = (o = i[n(461)]) == null ? void 0 : o[n(450)]) == null ? void 0 : s[n(471)]) || i[n(456)];
  }
}, av = {};
av[Ut(448) + "pe"] = Ut(463) + Ut(452);
function Ao(t, n) {
  const e = To();
  return Ao = function(r, o) {
    return r = r - 447, e[r];
  }, Ao(t, n);
}
function To() {
  const t = ["4718QaxAbo", "error", "1698196OKTzPo", "9269970Idijvh", "ient", "68380osXlLq", "defaults", "Content-Ty", "PUT", "data", "DELETE", "n/json", "1502994tAsHAd", "tials", "3230784zptRiR", "message", "GET", "17384620DtglIq", "1rRPASc", "withCreden", "response", "5JfiKZZ", "applicatio", "/api/v1/cl", "PATCH", "params", "6088llWxVt", "POST", "15IpEwNc"];
  return To = function() {
    return t;
  }, To();
}
const Ce = Oo;
(function(t, n) {
  const e = Oo, r = t();
  for (; ; )
    try {
      if (parseInt(e(185)) / 1 + parseInt(e(194)) / 2 + parseInt(e(212)) / 3 * (parseInt(e(204)) / 4) + -parseInt(e(206)) / 5 + parseInt(e(203)) / 6 + parseInt(e(211)) / 7 * (parseInt(e(199)) / 8) + parseInt(e(209)) / 9 * (-parseInt(e(186)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 324591);
const un = {};
un[Ce(193)] = Ce(197) + "E", un[Ce(207)] = Ce(191), un[Ce(196)] = Ce(201) + "N", un[Ce(189)] = Ce(197) + "E", un[Ce(208)] = Ce(191), un[Ce(198)] = Ce(201) + "N";
const Lt = un, Mi = {};
Mi[Ce(184)] = Ce(191), Mi[Ce(205)] = Ce(201) + "N";
const cv = Mi;
function Oo(t, n) {
  const e = Ro();
  return Oo = function(r, o) {
    return r = r - 183, e[r];
  }, Oo(t, n);
}
function Ro() {
  const t = ["10ibQBSN", "shortcutEv", "assistiveM", "touchmove", "ent", "ACTION_UP", "Event", "mousemove", "1243988FBMJNV", "enuHide", "mousedown", "ACTION_MOV", "touchstart", "1259952MWiFSz", "fullscreen", "ACTION_DOW", "wheelEvent", "817266TiKqdy", "4WpDTuu", "keydown", "2298510umkLNo", "mouseup", "touchend", "8744877SSKiMN", "keyBoardEv", "14uleJJY", "723144dWFhCX", "moveEvent", "keyup", "441705jrUOri"];
  return Ro = function() {
    return t;
  }, Ro();
}
const lv = Ce(183), uv = Ce(202), fv = Ce(210) + Ce(190), Gf = Ce(188) + Ce(195), Di = Ce(187) + Ce(190), dv = Ce(200) + Ce(192);
(function(t, n) {
  const e = pn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(144)) / 1 + -parseInt(e(213)) / 2 * (-parseInt(e(183)) / 3) + -parseInt(e(124)) / 4 + -parseInt(e(155)) / 5 + parseInt(e(165)) / 6 * (-parseInt(e(188)) / 7) + -parseInt(e(164)) / 8 * (-parseInt(e(152)) / 9) + parseInt(e(205)) / 10 * (parseInt(e(134)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 177191);
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [s, i] = st(!1), a = (d) => {
    const l = pn;
    if (d[l(169) + l(202)](), !o[l(160)]) {
      if (l(217) === l(217)) return;
      _0x459212[l(143)] == !0 && (_0x25f2e1[l(196)] = _0x179664[l(196)][l(206) + "e"]());
    }
    const v = o[l(160)];
    let g = Lt[d[l(163)]];
    if (n[l(216)] == !0 || n[l(178)] == !0) {
      g == Lt[l(162)] && e(Gf, {});
      return;
    }
    if (g == Lt[l(149)])
      if (l(170) !== l(170)) {
        _0x12190f == _0x64c4c7[l(162)] && _0x3fd4f5(_0x193951, {});
        return;
      } else i(!0);
    if (g != Lt[l(149)] && s == !1) {
      if (l(142) === l(142)) return;
      _0x63cbc1[l(196)] = _0x1d7935[l(196)][l(206) + "e"]();
    }
    g == Lt[l(162)] && (l(136) !== l(218) ? i(!1) : (_0x57faef[l(174)] = l(146) + l(214), _0x5cd830[l(196)] = 19));
    let x, h;
    const E = v[l(127) + l(181) + "t"]();
    if (d[l(163)][l(130)](l(125)))
      if (l(227) !== l(227)) _0x5423e1[l(174)] = l(146) + l(214), _0x206ffa[l(196)] = 22;
      else {
        const { touches: p, changedTouches: A } = d, y = p[0] ?? A[0];
        x = y[l(158)] - E[l(139)], h = y[l(128)] - E[l(172)];
      }
    else d[l(163)][l(130)](l(133)) && (x = d[l(222)] - E[l(139)], h = d[l(186)] - E[l(172)]);
    const b = {};
    b[l(179)] = l(173), b[l(201)] = g, b.x = x, b.y = h, b[l(194)] = E[l(194)], b[l(171)] = E[l(171)], e(lv, b), v[l(156)]();
  }, c = (d) => {
    const l = pn;
    if (d[l(169) + l(202)](), !o[l(160)])
      return l(126) !== l(147), void 0;
    const v = o[l(160)], g = d[l(229)], x = v[l(127) + l(181) + "t"](), h = {};
    h[l(179)] = l(154), h[l(194)] = v[l(153) + "h"], h[l(171)] = v[l(135) + "ht"], h.x = d[l(222)] - x[l(139)], h.y = d[l(186)] - x[l(172)], h[l(228)] = g, e(uv, h), v[l(156)]();
  }, u = async (d) => {
    const l = pn;
    if (l(132) === l(132)) {
      if (d[l(169) + l(202)](), !o[l(160)]) return;
      const v = o[l(160)], g = cv[d[l(163)]], x = d[l(196)][l(168) + "e"]();
      if (((p) => {
        const A = l;
        if (A(192) === A(192))
          return [A(185), A(203), A(161)][A(130)](p);
        [A(224), A(211), A(198)][A(176)]((y) => {
          const O = A;
          _0x2b077d[O(226) + O(208)](y, _0x28a060);
        });
      })(x) == !0) return;
      const E = async () => {
        const p = l;
        if (p(223) === p(190)) _0x26a2f4(_0x370700, {});
        else {
          const A = {};
          A[p(179)] = p(207), A[p(201)] = g, A[p(174)] = p(221) + p(210), A[p(196)] = d[p(196)], A[p(141)] = 0, A[p(200)] = 0;
          const y = A;
          return d[p(182)] == !0 ? p(137) === p(230) ? ([p(157), p(149), p(162), p(189), p(138)][p(176)]((O) => {
            const C = p;
            _0x4d4596[C(226) + C(208)](O, _0x55deb9);
          }), _0x38d3b9[p(226) + p(208)](p(138), _0x2e7739)) : x == "c" ? y[p(174)] = p(209) : x == "a" ? (y[p(174)] = p(146) + p(214), y[p(200)] = 4096, y[p(196)] = 29) : x == "v" && (y[p(174)] = p(195), y[p(196)] = await navigator[p(231)][p(166)]()) : x == p(199) ? (y[p(174)] = p(146) + p(214), y[p(196)] = 19) : x == p(197) ? p(225) !== p(175) ? (y[p(174)] = p(146) + p(214), y[p(196)] = 20) : (_0x178bed[p(174)] = p(146) + p(214), _0xb8970d[p(196)] = 67) : x == p(204) ? p(131) !== p(131) ? (_0x301e7c[p(174)] = p(146) + p(214), _0x2f1781[p(196)] = 20) : (y[p(174)] = p(146) + p(214), y[p(196)] = 21) : x == p(151) ? (y[p(174)] = p(146) + p(214), y[p(196)] = 22) : x == p(159) ? p(150) !== p(180) ? (y[p(174)] = p(146) + p(214), y[p(196)] = 67) : (_0x382525[p(174)] = p(146) + p(214), _0x358ea4[p(196)] = 21) : x == p(212) ? (y[p(174)] = p(146) + p(214), y[p(196)] = 66) : x == p(191) && (p(187) !== p(187) ? _0x13475d[p(174)] = p(209) : (y[p(174)] = p(146) + p(214), y[p(196)] = 61)), y[p(163)] == p(221) + p(210) && d[p(143)] == !0 && (p(193) !== p(219) ? y[p(196)] = y[p(196)][p(206) + "e"]() : (_0xf2201d[p(174)] = p(146) + p(214), _0x2eda24[p(196)] = 61)), y;
        }
      }, b = await E();
      b && e(fv, b), v[l(156)]();
    } else {
      if (_0x5a840e[l(169) + l(202)](), !_0x1195cd[l(160)]) return;
      const v = _0x48d9bb[l(160)], g = _0x214e0d[l(229)], x = v[l(127) + l(181) + "t"](), h = {};
      h[l(179)] = l(154), h[l(194)] = v[l(153) + "h"], h[l(171)] = v[l(135) + "ht"], h.x = _0x4bd6bc[l(222)] - x[l(139)], h.y = _0x3e9d14[l(186)] - x[l(172)], h[l(228)] = g, _0x18e20c(_0x20781c, h), v[l(156)]();
    }
  };
  it(() => {
    const d = pn;
    if (d(220) === d(220)) {
      const l = o[d(160)];
      if (l) {
        const v = {};
        v[d(140)] = !1;
        const g = v;
        if (t) {
          if (d(148) !== d(148))
            return [d(185), d(203), d(161)][d(130)](_0x36aa2d);
          l[d(145) + d(215)](d(224), a, g), l[d(145) + d(215)](d(211), a, g), l[d(145) + d(215)](d(198), a);
        } else l[d(145) + d(215)](d(189), c, g), l[d(145) + d(215)](d(138), u), [d(157), d(149), d(162)][d(176)]((x) => {
          const h = d;
          l[h(145) + h(215)](x, a);
        });
        return () => {
          const x = d;
          l && (t ? x(177) === x(184) ? (_0x275fa5 = _0x379d49[x(222)] - _0x1090c4[x(139)], _0x579174 = _0x446b29[x(186)] - _0x5d78e0[x(172)]) : [x(224), x(211), x(198)][x(176)]((h) => {
            const E = x;
            E(167) === E(129) ? _0x586ba7[E(226) + E(208)](_0x5cafb9, _0x2b57e4) : l[E(226) + E(208)](h, a);
          }) : ([x(157), x(149), x(162), x(189), x(138)][x(176)]((h) => {
            const E = x;
            l[E(226) + E(208)](h, a);
          }), l[x(226) + x(208)](x(138), u)));
        };
      }
    } else return;
  }, [t, a, c, u]);
  const f = { ref: o, ...r };
  return U.jsx(gd, f);
};
function pn(t, n) {
  const e = Po();
  return pn = function(r, o) {
    return r = r - 124, e[r];
  }, pn(t, n);
}
function Po() {
  const t = ["touchmove", "enter", "35878gTJNuc", "ODE", "stener", "isDown", "sVluX", "VfGJU", "SwwLD", "WtUuN", "KEYBOARD_T", "clientX", "BQFYK", "touchstart", "TFFKn", "removeEven", "RbCsg", "delta", "deltaY", "lwgYb", "clipboard", "951172BswuQK", "touch", "GNwag", "getBoundin", "pageY", "OfDDB", "includes", "lBsQC", "gtftG", "mouse", "33UyqEAY", "offsetHeig", "GGzFJ", "EVnmA", "keydown", "left", "passive", "repeat", "uEciG", "shiftKey", "102772sHLeaw", "addEventLi", "KEYBOARD_C", "WzOWI", "YYloc", "mousedown", "gEZvt", "arrowright", "630HnKYFE", "offsetWidt", "wheelEvent", "1516155hyVhVO", "focus", "mousemove", "pageX", "backspace", "current", "capslock", "mouseup", "type", "19792WycLXr", "6IwaddR", "readText", "DxySG", "toLowerCas", "preventDef", "VnNxK", "height", "top", "touchEvent", "typeKey", "YBbCQ", "forEach", "wXyJw", "showMenu", "action", "LrPBN", "gClientRec", "ctrlKey", "9RBqFHq", "jLcRO", "control", "clientY", "VJkzh", "1029091nrTRbM", "wheel", "aYNEx", "tab", "CXzgO", "ViClM", "width", "PASTE_TEXT", "key", "arrowdown", "touchend", "arrowup", "meta_state", "keyAction", "ault", "shift", "arrowleft", "2470010dGDKQh", "toUpperCas", "keyEvent", "tListener", "COPY_TEXT", "EXT"];
  return Po = function() {
    return t;
  }, Po();
}
const xv = "data:image/png;base64,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", cs = ko;
(function(t, n) {
  const e = ko, r = t();
  for (; ; )
    try {
      if (parseInt(e(321)) / 1 + parseInt(e(319)) / 2 * (parseInt(e(309)) / 3) + parseInt(e(314)) / 4 * (parseInt(e(311)) / 5) + parseInt(e(322)) / 6 * (parseInt(e(316)) / 7) + parseInt(e(315)) / 8 * (-parseInt(e(312)) / 9) + -parseInt(e(310)) / 10 + parseInt(e(317)) / 11 * (-parseInt(e(313)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 203653);
const pv = _t[cs(318)]`
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
`, Ft = _t[cs(318)]`
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
function ko(t, n) {
  const e = Io();
  return ko = function(r, o) {
    return r = r - 309, e[r];
  }, ko(t, n);
}
const zt = _t.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = _t[cs(320)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, gv = _t[cs(318)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function Io() {
  const t = ["161520eoEWHu", "290022EpoMpa", "3cMIXBF", "3219510VNNjpS", "5gtLfuU", "27QERukT", "60saHCRr", "901488lNIbxx", "1066680gceLLS", "49mRSfzB", "294041GMWeHU", "div", "668026GVyuyN", "img"];
  return Io = function() {
    return t;
  }, Io();
}
function No() {
  const t = ["mozRequest", "TyKZT", "webkitRequ", "estFullscr", "enElement", "gnkWf", "ent", "mozFullScr", "webkitFull", "Fullscreen", "tor", "reen", "msFullscre", "ullScreen", "mozCancelF", "PdcPO", "FullScreen", "een", "965992szBqNO", "msRequestF", "939830DdJfsE", "exitFullsc", "eenElement", "requestFul", "wbwXj", "4545653isAjvP", "4xItFKC", "screen", "155061zeKFHY", "ullscreen", "frCPQ", "querySelec", "fnfbb", "IfOaF", "msExitFull", "1117455mwTQAX", "fullscreen", "242jPdhZX", "zBeTt", "#screen_", "104GHRVKd", "lscreen", "screenElem", "10854UCfXsO", "Element", "1728615etOUvT", "webkitExit", "1NBedzv", "AzOvI"];
  return No = function() {
    return t;
  }, No();
}
(function(t, n) {
  const e = Hn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(272)) / 1 * (parseInt(e(243)) / 2) + -parseInt(e(270)) / 3 + -parseInt(e(251)) / 4 * (-parseInt(e(260)) / 5) + -parseInt(e(268)) / 6 + -parseInt(e(250)) / 7 + -parseInt(e(265)) / 8 * (parseInt(e(253)) / 9) + -parseInt(e(245)) / 10 * (-parseInt(e(262)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 356751);
function Hn(t, n) {
  const e = No();
  return Hn = function(r, o) {
    return r = r - 230, e[r];
  }, Hn(t, n);
}
const Gc = () => {
  const t = Hn;
  return document[t(261) + t(269)] || document[t(232) + t(247)] || document[t(233) + t(267) + t(231)] || document[t(237) + t(278)];
}, vv = (t) => {
  const n = Hn, e = document[n(256) + n(235)](n(264) + t);
  e[n(248) + n(266)] ? e[n(248) + n(266)]() : e[n(274) + n(241)] ? e[n(274) + n(241)]() : e[n(276) + n(277) + n(242)] ? n(258) !== n(273) ? e[n(276) + n(277) + n(242)]() : _0x54867e[n(248) + n(266)]() : e[n(244) + n(254)] && (n(255) !== n(255) ? _0xe9b7c5[n(244) + n(254)]() : e[n(244) + n(254)]());
}, yv = () => {
  const t = Hn;
  if (document[t(246) + t(236)]) t(240) !== t(240) ? _0x2ddba6[t(259) + t(252)]() : document[t(246) + t(236)]();
  else if (document[t(239) + t(238)]) t(249) !== t(249) ? _0x799267[t(271) + t(234)]() : document[t(239) + t(238)]();
  else if (document[t(271) + t(234)]) {
    if (t(263) === t(257)) return _0x57d802[t(261) + t(269)] || _0x396a46[t(232) + t(247)] || _0x2d9b72[t(233) + t(267) + t(231)] || _0x59b7d1[t(237) + t(278)];
    document[t(271) + t(234)]();
  } else document[t(259) + t(252)] && (t(275) !== t(230) ? document[t(259) + t(252)]() : _0x39587e[t(239) + t(238)]());
};
(function(t, n) {
  const e = Lo, r = t();
  for (; ; )
    try {
      if (parseInt(e(500)) / 1 + -parseInt(e(535)) / 2 * (parseInt(e(562)) / 3) + -parseInt(e(452)) / 4 * (parseInt(e(609)) / 5) + parseInt(e(451)) / 6 + parseInt(e(725)) / 7 + -parseInt(e(657)) / 8 * (parseInt(e(668)) / 9) + parseInt(e(613)) / 10 * (parseInt(e(572)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 461651);
function jo() {
  const t = ["00/svg", "3c.033 0 .", "opacity", "1v16a1 1 0", "copy", "home", "zM4 20V10h", "zm0-6h-4V4", "0h2v-6H4v2", "aBskY", "volume", "Hide ID", "touch", "ault", ".387 1.386", "clientY", ".897-2 2v4", "7 16 3v2c2", "-7v2h5z", "mousedown", ".116c.026-", "198nLvzHa", "device_id", "M6 12h6v2H", " 1 0 0 0 1", "0 0-.396-1", "cursor", "17-.056-.0", "right", ".089-1.218", "0v10z", "017.082-.0", "0 18V4h10l", "48 3.832a1", "data", "-2 2v6c0 1", "KdToG", "touchstart", "http://www", "7 2-2v-4h4", "showMenu", " 0 0 0-.38", ".257 5.127", "assistive_", "v2z", "v5h-5v2h7z", "webkitfull", "7 2-2V4c0-", "21585zsTPij", "4c-.025-.0", "061-.016.0", "6a1 1 0 0 ", "a1 1 0 0 0", "xZPwY", "Home", "9 21V3a1 1", "M16 21c3.5", "now", "1727uENVXZ", "9.527 4.54", "set", "-1.103-.89", "VcgaC", "touch_", "msfullscre", "fullscreen", " 5.999-9S1", "Volume", "-3.229 2-5", "m-2-4h2V3h", "-1.052-3.3", "2 2zm2 7v-", "includes", "027 1.027 ", "stener", ".225-1.1 2", "rqqNT", "33L12 5.86", "min", "69-.823l-1", "shortcutEv", "sync", "4c0-1.103-", "M5 5h5V3H3", "5.46 1.701", "H5v-5H3v7h", "7zm11-5h-2", "75z", "UYmDP", " 0 0 0 1.0", "target", " 0-2 .897-", "mouse", "M20 2H10c-", "27.05A1 1 ", "406445vRcfHT", "h-2v6h6z", "mozfullscr", "7-2-2-2h-3", "44140ZXdVIG", "255, 255, ", "6v6h2v-4h4", "get", "-2-2-2zm-9", "FPtHO", "-2-2-2zm-1", "forEach", "1.103-.897", "57-5.428 6", "clipboard", "Icon", "FFNSP", "2-.082-.03", " 3.999 4.0", ".004 1.004", "8v12.264l-", "3px", "0 0 24 24", "H4c-1.103 ", "c1.103 0 2", "103.897 2 ", "11.75", "v7h2zm5 14", "enchange", "27-1.547 5", "a.995.995 ", "75.931l2 1", "-2-5zM4 17", "fyAAO", "readText", "width", "0-2 .897-2", "l10.283 7.", ".w3.org/20", "frJbj", "CRxjB", "6zm0 4h6v2", "2H4zm0 5h1", "M20 3H4a1 ", "tListener", "M16 7v10c1", "addEventLi", "Sync", "8BzHRQL", "12%", "preventDef", "345-5.236 ", "touchend", "div", ".015.057-.", "4v-4c0-1.1", "Paste", "-1-1H8a1 1", "0 1.767.51", "1527633Rqzoza", "max", "passive", "top", "h2.697l5.7", "mousemove", "eenchange", "touchmove", "2-.116C7.0", "s-.775-3.9", "M20 11V5c0", "4zm0 5h16v", " 15H4V9z", "getBoundin", "menu_", "removeEven", "10c-1.103 ", ".832L6.697", " 0 0 0-.57", ".614 16 19", "0V4a1 1 0 ", "V5h14v14z", "rgba(255, ", " 2v5H4V5h3", "current", "v2h8V5h3v6", "NLgMv", "children", "03-.897-2-", "height", " 2v16c0 1.", "h-5c-1.103", "H4zm16-6h-", "Back", "Recents", "focus", "0 1-1V4a1 ", "20px", "2 2h10c1.1", "zIndex", "3 0 2-.897", "8.347l-3.0", "taskId", ".21a1 1 0 ", "1.003 0 0 ", "674.31a1 1", "ZKbCF", "pageX", " 7H4c-1.10", "nbFKj", "TNXxG", "7h7l.001 7", "3a.986.986", "tzLyP", "change", "BDafW", "STKPS", "539343KIHUiI", "3 9a1.003 ", "h4zm12-6h-", "0 0 1.645z", "isDown", "H13z", "-.897 2-2V", "S18.387 17", "mouseup", "2-2h-4V4h1", " 2v10c0 1.", "screenchan", "grab", "0a.999.999", " 0 0 1 1h1", "03 0 2-.89", "6l3.612-4.", "gClientRec", "2 2h7c0 1.", "13%", "KBZWW", "type", "M4 6h16v2H", "416 3.377 ", "0 0 0 14 2", "landscape", ".103.897 2", " 0 0 0-1.5", "10l.002 10", "svg", "Copy", "FPkiK", "ent", "1430190jUIXmU", "28aCVzON", ".999-4.909", "08 3.677L7", "93-.019a1.", "UqGqH", "Screen", "4v2h6zM8 2", "M16.75 2h-", "shortcut", "iIufl", "clientX", "6v2H4z", "2 2h7c1.10", "move", "3 0-2 .897", "BhMQg", ".002 16H6.", " 2-2v-7c0-", "circle", ".024l-14-1", "0 0 0 .782", "1zm-1 16H5", "ccLBG", "1.103 0-2 ", "1.048z", "m4.431 12.", "M10 4H8v4H", "fill", "7a1 1 0 0 ", "1 0 0 0-1-", ".897-2-2-2", "action", " 2v13c0 1.", "H6z", "1 0 0 0-1 ", "closest", "Show ID", "touch_clas", "7.032 15 7", "pageY", "click", "47 3.999 7", "data-id", "M20.978 13", "822 13 9A1", "assistive", "4.445-2.96", "left", "904304rXPeEW", "59 15.016 ", "0 0 0 .38-", " 2 2zm0-8h", "0 0-1.554-", "paste", "shortcutCo", "path", "-.769zm-8.", "back", "recents", " 0 0 0-1 1", "wYGtC", "getAttribu"];
  return jo = function() {
    return t;
  }, jo();
}
const bv = sl((t, n) => {
  const e = Lo, { displayId: r, isMobile: o, onSenData: s, status: i, imageRef: a, isShowDeviceId: c } = t, [u, f] = st(0), [d, l] = st(0), [v, g] = st(null), [x, h] = st(0), E = We(null), b = We(null), p = We(null), A = {};
  A[e(540)] = e(465), A[e(516)] = 0.3, A[e(707)] = 999;
  const [y, O] = st(A), C = {};
  C[e(707)] = 999, C[e(697)] = "", C[e(644)] = e(437);
  const [L, z] = st(C), X = {};
  X[e(707)] = 1e3;
  const [oe, G] = st(X), F = We(null), [W, H] = st(null), ee = We(null), Z = (P) => {
    const S = e;
    if (S(467) === S(467)) {
      if (P[S(659) + S(527)](), i[S(616)][S(554)] == !0) return;
      const ve = Lt[P[S(439)]], Y = a[S(692)], pe = p[S(692)], te = Y[S(681) + S(435) + "t"](), ye = pe[S(681) + S(435) + "t"](), ke = 3;
      let ze, tt;
      const Bt = te[S(644)] - ye[S(644)], cn = te[S(697)] - ye[S(697)];
      if (P[S(439)][S(586)](S(526)))
        if (S(449) !== S(449)) _0x58fce3 = _0x579ac9[S(462)], _0xe73673 = _0x7e8e6b[S(529)];
        else {
          const { touches: Ke, changedTouches: nt } = P, Ze = Ke[0] ?? nt[0];
          ze = Ze[S(715)], tt = Ze[S(491)];
        }
      else P[S(439)][S(586)](S(606)) && (S(718) === S(718) ? (ze = P[S(462)], tt = P[S(529)]) : _0x31c669[S(683) + S(653)](_0x1dbbb4, _0x323d2e));
      if (ve == Lt[S(533)]) {
        i[S(574)]({ ...i[S(616)], isDown: !0 }), f(ze - ye[S(499)]), l(tt - ye[S(671)]);
        const Ke = {};
        Ke[S(516)] = 1, Ke[S(540)] = S(430);
        const nt = { ...y, ...Ke };
        O(nt), h(performance[S(571)]());
      } else if (ve == Lt[S(673)]) {
        if (i[S(616)][S(422)] == !1) return;
        let Ke = ze - u - te[S(499)], nt = tt - d - te[S(671)];
        Ke = Math[S(669)](ke, Math[S(592)](Ke, Bt) - ke), nt = Math[S(669)](ke, Math[S(592)](nt, cn) - ke);
        const Ze = {};
        Ze[S(671)] = nt + "px", Ze[S(499)] = Ke + "px";
        const Pt = { ...L, ...Ze };
        z(Pt);
        const rt = {};
        rt.x = Ke, rt.y = nt, ee[S(692)] = rt;
      } else if (ve == Lt[S(426)]) {
        const Ke = performance[S(571)]() - x;
        if (v == Lt[S(533)] || Ke < 100) {
          const ht = {};
          ht[S(554)] = !0, ht[S(422)] = !1, i[S(574)]({ ...i[S(616)], ...ht });
        } else S(642) === S(642) ? i[S(574)]({ ...i[S(616)], isDown: !1 }) : _0x7896b7[S(683) + S(653)](S(492), _0x476c4f);
        const nt = ee[S(692)].x > Bt / 2 ? Bt - ke : ke, Ze = {};
        Ze[S(499)] = nt + "px";
        const Pt = { ...L, ...Ze };
        z(Pt);
        const rt = {};
        rt[S(516)] = 0.3, rt[S(540)] = S(465);
        const Xt = { ...y, ...rt };
        O(Xt);
      }
      g(ve), pe[S(703)]();
    } else _0x1429e2 && (_0x3eb92a[S(692)] = _0x542f12), _0x3f885d();
  }, J = async (P) => {
    const S = e;
    P[S(659) + S(527)]();
    const ve = P[S(604)][S(487)](S(662))[S(513) + "te"](S(494));
    if (ve === S(579))
      Gc() ? yv() : vv(r);
    else {
      const Y = {};
      Y[S(483)] = S(594) + S(450), Y[S(460)] = ve, Y[S(548)] = "";
      const pe = Y;
      ve === S(505) && (S(625) !== S(625) ? _0x4fa584[S(683) + S(653)](_0x1d86a5, _0x7e3737) : pe[S(548)] = await navigator[S(623)][S(643)]()), ve === S(518) && (pe[S(710)] = S(506) + "py"), s(Di, pe);
    }
    i[S(574)]({ ...i[S(616)], showMenu: !1 }), b[S(692)][S(703)]();
  }, Q = (P) => {
    const S = e;
    if (S(438) === S(474)) {
      const ve = _0x22a448[S(571)]() - _0x23e153;
      if (_0x3fad46 == _0x2e9c67[S(533)] || ve < 100) {
        const ze = {};
        ze[S(554)] = !0, ze[S(422)] = !1;
        const tt = { ..._0x2d6ebf[S(616)], ...ze };
        _0x105077[S(574)](tt);
      } else {
        const ze = { ..._0x241124[S(616)] };
        ze[S(422)] = !1, _0x3572b4[S(574)](ze);
      }
      const Y = _0x1adb1c[S(692)].x > _0x59d9a9 / 2 ? _0x1f4e78 - _0x972911 : _0x14324c, pe = {};
      pe[S(499)] = Y + "px";
      const te = { ..._0x3aeabb, ...pe };
      _0x2a3651(te);
      const ye = {};
      ye[S(516)] = 0.3, ye[S(540)] = S(465);
      const ke = { ..._0x4392ab, ...ye };
      _0x425601(ke);
    } else {
      const ve = Gc();
      s(dv, ve);
    }
  };
  it(() => {
    const P = e;
    P(714) === P(723) ? [P(673), P(533), P(426)][P(620)]((S) => {
      const ve = P;
      _0x4e5319[ve(655) + ve(588)](S, _0x51af48);
    }) : requestAnimationFrame(() => {
      const S = P, ve = { ...oe };
      ve[S(516)] = i[S(616)][S(554)] ? 1 : 0, G(ve);
    });
  }, [i]), it(() => {
    const P = e, S = a[P(692)], ve = [P(579) + P(722), P(560) + P(429) + "ge", P(611) + P(674), P(578) + P(637)];
    return S && (P(648) === P(523) ? _0x2a1eb5(() => {
      const Y = P, pe = { ..._0x3201c0 };
      pe[Y(516)] = _0xc4a0c5[Y(616)][Y(554)] ? 1 : 0, _0x5e8c80(pe);
    }) : ve[P(620)]((Y) => {
      const pe = P;
      pe(618) !== pe(694) && S[pe(655) + pe(588)](Y, Q);
    })), () => {
      const Y = P;
      if (Y(550) === Y(550)) {
        if (S)
          if (Y(721) === Y(721)) S[Y(683) + Y(653)](Y(492), Q);
          else {
            const pe = { ..._0x265725[Y(616)] };
            pe[Y(422)] = !0, _0x257696[Y(574)](pe), _0x40a8a8(_0x14874f - _0x2ccd4f[Y(499)]), _0x35c4d1(_0xbe5ef0 - _0x430278[Y(671)]);
            const te = {};
            te[Y(516)] = 1, te[Y(540)] = Y(430);
            const ye = { ..._0x5b8c91, ...te };
            _0x11200f(ye), _0x5bfa3f(_0x3d7de4[Y(571)]());
          }
      } else {
        if (_0x71048c[Y(616)][Y(422)] == !1) return;
        let pe = _0xbf331e - _0x53325b - _0x28ca20[Y(499)], te = _0x58dfe6 - _0x8ab898 - _0x273448[Y(671)];
        pe = _0x2fbaf6[Y(669)](_0x134314, _0x4006a8[Y(592)](pe, _0x3e92b2) - _0x56d845), te = _0xef7831[Y(669)](_0x31abf8, _0x5a50df[Y(592)](te, _0x3734d3) - _0x1c810a);
        const ye = {};
        ye[Y(671)] = te + "px", ye[Y(499)] = pe + "px";
        const ke = { ..._0x391f66, ...ye };
        _0x4406c7(ke);
        const ze = {};
        ze.x = pe, ze.y = te, _0x54e1c9[Y(692)] = ze;
      }
    };
  }, []), it(() => {
    const P = e;
    if (P(649) === P(590)) _0x3d5862 && _0x48b0f4[P(683) + P(653)](P(492), _0x13c105);
    else {
      const S = p[P(692)], ve = b[P(692)];
      if (ve)
        if (P(461) === P(461)) ve[P(655) + P(588)](P(492), J);
        else {
          const Y = _0x43f183();
          _0x3b0e18(_0x532e9d, Y);
        }
      if (S) {
        const Y = {};
        Y[P(670)] = !1;
        const pe = Y;
        if (o)
          if (P(456) === P(456)) S[P(655) + P(588)](P(551), Z, pe), S[P(655) + P(588)](P(675), Z, pe), S[P(655) + P(588)](P(661), Z);
          else {
            const te = {};
            te[P(707)] = 999, te[P(697)] = _0x2a9081[P(692)] == P(443) ? P(658) : null, te[P(644)] = _0x48d2ee[P(692)] != P(443) ? P(658) : null, te[P(671)] = P(705), te[P(542)] = P(630), _0x5583a7(te);
          }
        else P(567) !== P(567) ? _0x2cb525[P(710)] = P(506) + "py" : [P(673), P(533), P(426)][P(620)]((te) => {
          const ye = P;
          ye(576) !== ye(512) ? S[ye(655) + ye(588)](te, Z) : _0x1efa4b[ye(655) + ye(588)](_0x1c64ec, _0x4c3993);
        });
        return () => {
          const te = P;
          te(602) !== te(602) ? _0x18b77a() ? _0xd364b9() : _0x2875db(_0x5cef2e) : (ve && ve[te(683) + te(653)](te(492), J), S && (o ? [te(551), te(675), te(661)][te(620)]((ye) => {
            const ke = te;
            S[ke(683) + ke(653)](ye, Z);
          }) : [te(673), te(533), te(426)][te(620)]((ye) => {
            const ke = te;
            S[ke(683) + ke(653)](ye, Z);
          })));
        };
      }
    }
  }, [o, Z]);
  const ae = () => {
    const P = e, S = {};
    S[P(707)] = 999, S[P(697)] = F[P(692)] == P(443) ? P(658) : null, S[P(644)] = F[P(692)] != P(443) ? P(658) : null, S[P(671)] = P(705), S[P(542)] = P(630), z(S);
  };
  il(n, () => ({ fixTouch: (P) => {
    const S = e;
    S(717) !== S(724) ? (P && (F[S(692)] = P), ae()) : _0x376669(_0x537cb2);
  }, setFullscreen: (P) => {
    H(P);
  } }));
  const se = {};
  se[e(479)] = e(690) + e(614) + "1)";
  const K = {};
  K.d = W ? e(478) + e(458) + e(522) + e(420) + e(615) + e(521) + e(610) : e(597) + e(636) + e(599) + e(600) + e(559) + e(583) + e(532);
  const ne = {};
  ne[e(695)] = e(457);
  const xe = {};
  xe[e(479)] = e(690) + e(614) + "1)";
  const de = {};
  de.d = e(607) + e(475) + e(530) + e(632) + e(645) + e(428) + e(634) + e(706) + e(433) + e(553) + e(633) + e(424) + e(596) + e(482) + e(520) + e(446) + e(700) + e(664) + e(696) + e(427) + e(544);
  const ge = {};
  ge.d = e(537) + e(650) + e(485);
  const I = {};
  I[e(695)] = e(448);
  const M = {};
  M[e(479)] = e(690) + e(614) + "1)";
  const R = {};
  R.d = e(678) + e(575) + e(612) + e(566) + e(666) + e(511) + e(632) + e(645) + e(484) + e(634) + e(436) + e(634) + e(464) + e(708) + e(469) + e(621) + e(617) + e(691) + e(693) + e(699) + e(605) + e(585) + e(719) + e(423);
  const N = {};
  N[e(695)] = e(665);
  const w = {};
  w[e(479)] = e(690) + e(614) + "1)";
  const j = {};
  j.d = e(459) + e(684) + e(645) + e(698) + e(634) + e(706) + e(433) + e(561) + e(621) + e(619) + e(546) + e(468) + e(601);
  const Oe = {};
  Oe.cx = e(635), Oe.cy = "18", Oe.r = "1";
  const D = {};
  D[e(695)] = e(c ? 525 : 488);
  const Re = {};
  Re[e(479)] = e(690) + e(614) + "1)";
  const ue = {};
  ue.d = e(570) + e(638) + e(453) + e(580) + e(573) + e(531) + e(528) + e(627) + e(493) + e(425) + e(687) + e(558);
  const Xe = {};
  Xe.d = e(654) + e(589) + e(582) + e(677) + e(641) + e(672) + e(547) + e(628) + e(603) + e(608) + e(442) + e(688) + e(504) + e(685) + e(716) + e(466) + e(549) + e(444) + e(503) + e(515) + e(564) + e(455) + e(587) + e(502) + e(534) + e(663) + e(545) + e(591) + e(629) + e(498) + e(563) + e(541) + e(626) + e(720) + e(555) + e(676) + e(501) + e(490) + e(680);
  const Ot = {};
  Ot[e(695)] = e(581);
  const ut = {};
  ut[e(479)] = e(690) + e(614) + "1)";
  const Rt = {};
  Rt.d = e(495) + e(711) + e(539) + e(471) + e(431) + e(445) + e(640) + e(480) + e(667) + e(434) + e(441) + e(598) + e(584) + e(622) + e(543) + e(639) + e(472) + e(508) + e(713) + e(686) + e(709) + e(454) + e(556) + e(646) + e(660) + e(476);
  const Me = {};
  Me[e(695)] = e(656);
  const Ae = {};
  Ae[e(479)] = e(690) + e(614) + "1)";
  const Ge = {};
  Ge.d = e(440) + e(679) + e(651) + e(463);
  const vt = {};
  vt[e(695)] = e(702);
  const dt = {};
  dt[e(479)] = e(690) + e(614) + "1)";
  const rn = {};
  rn.d = e(652) + e(486) + e(517) + e(432) + e(565) + e(704) + e(481) + e(473) + e(689);
  const on = {};
  on[e(695)] = e(568);
  const _n = {};
  _n[e(479)] = e(690) + e(614) + "1)";
  const sn = {};
  sn.d = e(477) + e(496) + e(538) + e(569) + e(445) + e(593) + e(726) + e(712) + e(421);
  const an = {};
  return an[e(695)] = e(701), U.jsxs(U.Fragment, { children: [i[e(616)][e(554)] ? U.jsxs(pv, { id: e(557) + e(682) + r, style: oe, ref: b, children: [U.jsxs(Ft, { "data-id": e(579), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: se, children: U.jsx(e(507), K) }), U.jsx(zt, ne)] }), U.jsxs(Ft, { "data-id": e(518), children: [U.jsxs(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: xe, children: [U.jsx(e(507), de), U.jsx(e(507), ge)] }), U.jsx(zt, I)] }), U.jsxs(Ft, { "data-id": e(505), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: M, children: U.jsx(e(507), R) }), U.jsx(zt, N)] }), U.jsxs(Ft, { "data-id": e(536), children: [U.jsxs(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: w, children: [U.jsx(e(507), j), U.jsx(e(470), Oe)] }), U.jsx(zt, D)] }), U.jsxs(Ft, { "data-id": e(524), children: [U.jsxs(e(447), { xmlns: e(552) + e(647) + e(514), width: "25", height: "25", viewBox: e(631), style: Re, children: [U.jsx(e(507), ue), U.jsx(e(507), Xe)] }), U.jsx(zt, Ot)] }), U.jsxs(Ft, { "data-id": e(595), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: ut, children: U.jsx(e(507), Rt) }), U.jsx(zt, Me)] }), U.jsxs(Ft, { "data-id": e(510), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: Ae, children: U.jsx(e(507), Ge) }), U.jsx(zt, vt)] }), U.jsxs(Ft, { "data-id": e(519), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: dt, children: U.jsx(e(507), rn) }), U.jsx(zt, on)] }), U.jsxs(Ft, { "data-id": e(509), children: [U.jsx(e(447), { xmlns: e(552) + e(647) + e(514), width: "28", height: "28", viewBox: e(631), style: _n, children: U.jsx(e(507), sn) }), U.jsx(zt, an)] })] }) : null, U.jsx(gv, { id: e(557) + e(489) + "s_" + r, className: e(497), ref: E, style: y, children: U.jsx(mv, { style: L, src: xv, className: e(497), id: e(557) + e(577) + r, alt: e(624), ref: p, draggable: !1 }) })] });
});
function Lo(t, n) {
  const e = jo();
  return Lo = function(r, o) {
    return r = r - 420, e[r];
  }, Lo(t, n);
}
function Un(t, n) {
  const e = Mo();
  return Un = function(r, o) {
    return r = r - 483, e[r];
  }, Un(t, n);
}
function Mo() {
  const t = ["orientatio", "getContext", "tion", "clearRect", "rotate", "setIsConne", "hardwareAc", "5liJotj", "iframe", "celeration", "delta", "NxEEM", "now", "lock", "dkKwG", "innerHeigh", "VlfbW", "2OYYYEx", "key", "autoResize", "round", "isKeyFrame", "KYLef", "setVideoMe", "from", "isMobile", "setFullscr", "concatUint", "portrait", "rootSize", "decode", "state", "buildDecod", "scale", "width", "length", "codec", "4109706mGBaCA", "codedHeigh", "330uHJqyg", "translate", "RALyL", "canvas", "455pvLqXv", "frIgE", "WfEjh", "prefer-har", "dware", "avc1.64001", "close", "videoMeta", "19092VktBae", "16214YXWkeQ", "een", "637237TsVXrB", "maxWidth", "decoder", "ror:", "FcJqg", "152685XFfGXq", "KKAOy", "configure", "52768iXaWNS", "setOrienta", "error", "landscape", "codedWidth", "drawImage", "1361348PUGDPb", "WgYRq", "concat", "DZpES", "rLatency", "ctx", "1256157eYUTDZ", "rttgU", "height", "resizedWid", "8Arrays", "optimizeFo", "isPlay", "Decoder er"];
  return Mo = function() {
    return t;
  }, Mo();
}
const De = Un;
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (-parseInt(e(549)) / 1 + -parseInt(e(512)) / 2 * (parseInt(e(487)) / 3) + -parseInt(e(563)) / 4 * (parseInt(e(502)) / 5) + -parseInt(e(532)) / 6 + parseInt(e(538)) / 7 * (-parseInt(e(557)) / 8) + parseInt(e(554)) / 9 * (parseInt(e(534)) / 10) + parseInt(e(547)) / 11 * (parseInt(e(546)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 394995);
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(521) + De(548), rl = De(490) + "th", nl = De(558) + De(497), tl = De(514), el = De(518) + "ta", Qc = De(527) + "er", Jc = De(516), Zc = De(522) + De(491), Kc = De(525);
class Sv {
  constructor(n, e, r, o) {
    kt(this, ol, (n) => {
      const e = De;
      if (n) {
        if (e(517) !== e(517))
          return (_0x52796b[_0x165a7f + 4] & 31) === 5;
        {
          const r = window[e(510) + "t"] + 10, o = this[e(490) + "th"](null, this[e(524)][e(529)], this[e(524)][e(489)], r, r);
          this[e(529)] = o[e(529)], this[e(489)] = o[e(489)];
        }
      } else e(555) === e(555) ? (this[e(529)] = this[e(524)][e(529)], this[e(489)] = this[e(524)][e(489)]) : (_0x5971c0 = _0xc78d10 / _0x579cad * _0x4c4df7, _0x440dff = _0x51b54a / _0xd8d880 * _0x3f9691);
    });
    kt(this, rl, (n, e, r, o, s) => {
      const i = De;
      let a;
      if (n && o > this[i(550)] && r > e && (i(564) === i(509) ? (this[i(495) + "n"] = _0x796850, this[i(520)] && _0x5133cf[i(495) + "n"][i(508)](_0x18abd8)) : s = this[i(550)]), s) {
        if (i(540) === i(539))
          return (_0x1650b5[_0x417f44 + 3] & 31) === 5;
        a = s / e * r, a > o && (s = o / r * e, a = o / e * e);
      }
      return { width: Math[i(515)](s), height: Math[i(515)](a) };
    });
    kt(this, nl, (n) => {
      const e = De;
      this[e(495) + "n"] = n, this[e(520)] && (e(536) !== e(553) ? screen[e(495) + "n"][e(508)](n) : (this[e(537)] = _0x2c5139, this[e(550)] = _0x320442, this[e(520)] = _0x3be3ad, this[e(500) + "ct"] = _0x546929, this[e(486)] = _0x5d096b[e(496)]("2d"), this[e(551)] = this[e(527) + "er"](), this[e(545)] = null, this[e(503)] = null, this[e(493)] = null, this[e(529)] = null, this[e(489)] = null, this[e(524)] = null, this[e(495) + "n"] = e(523)));
    });
    kt(this, tl, (n, e) => {
      var a;
      const r = De, o = this[r(520)] == !0 ? window[r(510) + "t"] - 12 : window[r(510) + "t"] - 50, s = this[r(490) + "th"](!0, n, e, o, o);
      this[r(529)] = s[r(529)], this[r(489)] = s[r(489)], !this[r(524)] && ((a = this[r(500) + "ct"]) == null || a.call(this, !0));
      const i = {};
      i[r(529)] = s[r(529)], i[r(489)] = s[r(489)], this[r(524)] = i;
    });
    kt(this, el, (n) => {
      const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(545)] = r;
    });
    kt(this, Qc, () => {
      const n = De, e = new VideoDecoder({ output: async (o) => {
        const s = Un, i = await createImageBitmap(o);
        if (!this[s(529)] || !this[s(489)])
          if (s(511) === s(511)) this[s(514)](o[s(561)], o[s(533) + "t"]);
          else {
            let a;
            return _0x558b9a && _0x24dacb > this[s(550)] && _0x4233fb > _0x4472c2 && (_0x56b204 = this[s(550)]), _0xb5c5bd && (a = _0x43231b / _0x4c3879 * _0x3bc71c, a > _0x30d319 && (_0x183284 = _0x5257bc / _0x471fb3 * _0x2cbde3, a = _0x4960a6 / _0x451d83 * _0xcb9fa0)), { width: _0x564f14[s(515)](_0x4017a0), height: _0x210768[s(515)](a) };
          }
        this[s(486)][s(498)](0, 0, this[s(529)], this[s(489)]), this[s(495) + "n"] == s(560) ? (this[s(537)][s(529)] = this[s(489)], this[s(537)][s(489)] = this[s(529)], this[s(486)][s(535)](0, this[s(529)]), this[s(486)][s(499)](Math.PI / 2), this[s(486)][s(528)](-1, -1), this[s(486)][s(562)](i, 0, 0, this[s(529)], this[s(489)])) : (this[s(537)][s(529)] = this[s(529)], this[s(537)][s(489)] = this[s(489)], this[s(486)][s(562)](i, 0, 0, this[s(529)], this[s(489)])), i[s(544)](), o[s(544)]();
      }, error: (o) => console[n(559)](n(494) + n(552), o) }), r = {};
      return r[n(531)] = n(543) + "E", r[n(501) + n(504)] = n(541) + n(542), r[n(492) + n(485)] = !0, e[n(556)](r), e;
    });
    kt(this, Jc, (n) => {
      var r;
      const e = De;
      for (let o = 0; o <= n[e(530)] - 4; o++)
        if (e(484) !== e(484)) this[e(537)][e(529)] = this[e(529)], this[e(537)][e(489)] = this[e(489)], this[e(486)][e(562)](_0x45e3db, 0, 0, this[e(529)], this[e(489)]);
        else if (n[o] === 0 && n[o + 1] === 0 && n[o + 2] === 0 && n[o + 3] === 1)
          return (n[o + 4] & 31) === 5;
      for (let o = 0; o <= n[e(530)] - 3; o++)
        if (e(506) !== e(506)) {
          const s = this[e(520)] == !0 ? _0x4dea1c[e(510) + "t"] - 12 : _0x4aa3dd[e(510) + "t"] - 50, i = this[e(490) + "th"](!0, _0x166a2d, _0x464e90, s, s);
          this[e(529)] = i[e(529)], this[e(489)] = i[e(489)], !this[e(524)] && ((r = this[e(500) + "ct"]) == null || r.call(this, !0));
          const a = {};
          a[e(529)] = i[e(529)], a[e(489)] = i[e(489)], this[e(524)] = a;
        } else if (n[o] === 0 && n[o + 1] === 0 && n[o + 2] === 1)
          return (n[o + 3] & 31) === 5;
      return !1;
    });
    kt(this, Zc, (n, e) => {
      const r = De, o = Array[r(519)](n)[r(483)](Array[r(519)](e));
      return new Uint8Array(o);
    });
    kt(this, Kc, (n) => {
      const e = De;
      if (!this[e(551)] || this[e(551)][e(526)] == e(544) || !this[e(545)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(516)](r);
      o && (e(488) === e(488) ? this[e(503)] = r : (_0xe9273d = _0x31c3bb / _0x2c36d6 * _0x208dbb, _0x42cfed > _0x520e88 && (_0xa3afbf = _0xf48de7 / _0x363f71 * _0x50276e, _0x331030 = _0x5020f4 / _0x55392d * _0x2ac4a8))), this[e(503)] && this[e(545)] && (!this[e(493)] && (r = this[e(522) + e(491)](this[e(545)], this[e(503)]), this[e(493)] = !0), this[e(551)][e(525)](new EncodedVideoChunk({ timestamp: performance[e(507)]() * 1e3, type: e(o ? 513 : 505), data: r })));
    });
    const s = Un;
    this[s(537)] = n, this[s(550)] = e, this[s(520)] = r, this[s(500) + "ct"] = o, this[s(486)] = n[s(496)]("2d"), this[s(551)] = this[s(527) + "er"](), this[s(545)] = null, this[s(503)] = null, this[s(493)] = null, this[s(529)] = null, this[s(489)] = null, this[s(524)] = null, this[s(495) + "n"] = s(523);
  }
}
(function(t, n) {
  const e = Sr, r = t();
  for (; ; )
    try {
      if (parseInt(e(353)) / 1 + -parseInt(e(262)) / 2 + parseInt(e(271)) / 3 * (-parseInt(e(348)) / 4) + parseInt(e(316)) / 5 * (parseInt(e(306)) / 6) + parseInt(e(276)) / 7 * (parseInt(e(245)) / 8) + parseInt(e(337)) / 9 * (parseInt(e(268)) / 10) + -parseInt(e(248)) / 11 * (parseInt(e(367)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 364174);
function Sr(t, n) {
  const e = Do();
  return Sr = function(r, o) {
    return r = r - 242, e[r];
  }, Sr(t, n);
}
function Do() {
  const t = ["control", "onSyncIFra", "91496ZvYiFL", "ITPen", "method", "1067nJPylL", "oTeaD", "status", "children", "isMobile", "iframe", "stener", "data", "setVideoMe", "userAgent", "tion", "code", "text", "screen", "1348288dYXNdV", "emit", "width", "middle", "disconnect", "Element", "234830QYPhHW", "lWUQl", "fullscreen", "6cfxyKP", "LBMjh", "orientatio", "webkitFull", "timeout", "14WhHiaw", "setOrienta", "device_id", "isDown", "change", "YXvhK", "een", "url", "sync", "enElement", "clipboard", "GoHoZ", "video_meta", "value", "screenElem", "password", "sXmLk", "onScreenEv", "TVHlK", "rGMBz", "type", "lIUrn", "get", "APopN", "response", "YKLlY", "applicatio", "IgyTv", "Timeout wa", "addEventLi", "1748634WzIrmx", " closed co", "marginTop", "center", "shortcutEv", "type_clien", "current", "get_video_", "connection", "passwd", "5dfplBz", "ghwIm", "message", "tListener", "test", "false", "connect", "eenElement", "screen_", "meta", "de: ", "gIqMG", "bkjdQ", "size", "reconnecti", "screen_mai", "writeText", "showMenu", "fixTouch", "OgVsQ", "image_", "261tTwyVu", "BRnjH", "COPY_TEXT", "qlYXL", "zAGCm", "QpUPv", "height", "taskId", "post", "FKchg", "NFeNe", "412188qwxgTo", "removeEven", "TUyaq", "setFullscr", "length", "610029EEfthR", "ent", "mozFullScr", "delete", "decode", "set", "hAjWM", "headers", "yPqqk", "action", "shortcut", "TlXqB", "ror", "TUoWK", "44652BgVfTV", "info", "iting for ", "BRRMD", "join_room", "msg", "Content-Ty", "error", "YJrNw", "connect_er", "tabIndex", "large", "draggable", "map", "n/json", "msFullscre", "kbpnf"];
  return Do = function() {
    return t;
  }, Do();
}
const Wv = sl((t, n) => {
  const e = Sr, { serve: r, dataDevice: o, maxWidth: s, showAssistive: i, showDeviceId: a, syncEvent: c, syncButton: u } = t, f = o[e(278)], d = /iPhone|iPad|iPod|Android/i[e(320)](navigator[e(257)]), l = e(243), v = We(null), g = We(null), x = We(null), [h, E] = st(null), [b, p] = st(null), A = {};
  A[e(333)] = !1, A[e(279)] = !1;
  const [y, O] = st(A), [C, L] = st(null), z = e(336) + f, X = e(324) + f, oe = e(331) + "n_" + f, G = We(null), [F, W] = st([]), H = We(null), ee = We(/* @__PURE__ */ new Map());
  it(() => {
    const I = e;
    I(327) !== I(246) ? p(a) : _0x5bcfa5 === _0x3a1c17 && _0x2d8f02[I(363)] === I(278) ? _0x134b48(!_0x54ee2c) : _0x57e295 === _0x3e8b11 && _0x388aa8[I(363)] === I(284) ? _0x355ed8(_0x3b869c[I(278)]) : _0x1de750(_0x5abc79);
  }, [a]);
  const Z = (I) => {
    W((M) => [...M, I]);
  }, J = (I) => {
    const M = e;
    v[M(312)][M(263)](M(318), I), c == null || c(I);
  };
  il(n, () => ({ api: async function(I, M = 5e3) {
    const R = e;
    if (R(364) !== R(364))
      if (_0x1abdaf) {
        if (_0x17b385[R(312)][R(256) + "ta"](_0x4bfad5), !_0x2b64a3[R(312)][R(253)]) {
          const N = {};
          N[R(362)] = R(244) + "me", _0x59e4fe[R(263)](R(318), N);
        }
      } else {
        const N = {};
        N[R(362)] = R(313) + R(325), _0x36887a[R(263)](R(288), N);
      }
    else return new Promise((N, w) => {
      const j = R;
      if (j(341) === j(341)) {
        const Oe = setTimeout(() => {
          const D = j;
          ee[D(312)][D(356)](I[D(344)]);
          const Re = {};
          Re[D(362)] = I[D(362)], Re[D(344)] = I[D(344)], Re[D(250)] = !1, Re[D(318)] = D(304) + D(369) + D(300), w(Re);
        }, M);
        ee[j(312)][j(358)](I[j(344)], (D) => {
          clearTimeout(Oe), N(D);
        }), v[j(312)][j(263)](j(318), I);
      } else {
        const Oe = {};
        Oe[j(362)] = j(244) + "me", _0x40ef92[j(263)](j(318), Oe);
      }
    });
  }, sync: function(I) {
    const M = e;
    v[M(312)][M(263)](M(318), I);
  } })), it(() => {
    const I = e;
    I(292) === I(292) ? (async () => {
      const M = I;
      try {
        const R = {};
        R[M(373) + "pe"] = M(302) + M(381);
        const N = {};
        N[M(278)] = o[M(278)], N[M(291)] = o[M(315)];
        const w = {};
        w[M(283)] = r, w[M(247)] = M(345), w[M(275)] = 1e4, w[M(360)] = R, w[M(255)] = N;
        const j = w, Oe = await iv(j);
        E(Oe[M(255)]);
      } catch (R) {
        if (M(299) === M(299)) {
          const N = {};
          N[M(372)] = R, N[M(296)] = M(374), Z(N);
        } else if (_0x1fe5fb[M(312)][M(256) + "ta"](_0x2eb9c6), !_0x76a05a[M(312)][M(253)]) {
          const N = {};
          N[M(362)] = M(244) + "me", _0x3c6f3e[M(263)](M(318), N);
        }
      }
    })() : _0x32565d(_0x2861a8);
  }, []), it(() => {
    const I = e;
    if (I(301) !== I(342)) {
      if (v[I(312)] || !h) return;
      const M = {};
      M[I(330) + "on"] = !1;
      const R = to(h, M);
      return R.on(I(322), () => {
        const N = I, w = {};
        w[N(362)] = N(322), w[N(311) + "t"] = l, w[N(278)] = o[N(278)], w[N(252)] = d, w[N(315)] = o[N(315)], R[N(263)](N(371), w);
      }), R.on(I(371), (N) => {
        const w = I;
        if (N[w(250)] == !0)
          if (w(242) === w(242)) {
            v[w(312)] = R;
            const j = {};
            j[w(362)] = w(293) + w(354), R[w(263)](w(318), j);
          } else {
            const j = {};
            j[w(372)] = _0x10c5fe, j[w(296)] = w(374), _0x4d1030(j);
          }
        else if (w(370) === w(370)) {
          const j = {};
          j[w(372)] = N[w(372)], j[w(296)] = w(374), Z(j);
        } else _0x2ffdfa(_0x5a6b0a);
      }), R.on(I(261), (N) => {
        const w = I;
        H[w(312)][w(357)](N);
      }), R.on(I(288), (N) => {
        const w = I;
        if (N) {
          if (w(269) === w(287)) _0x134e44(_0x5e3640), _0x457c74(_0x41a267);
          else if (H[w(312)][w(256) + "ta"](N), !H[w(312)][w(253)]) {
            const j = {};
            j[w(362)] = w(244) + "me", R[w(263)](w(318), j);
          }
        } else {
          if (w(317) !== w(317)) return new _0x109e5a((j, Oe) => {
            const D = w, Re = _0x22cb75(() => {
              const ue = Sr;
              _0xb12621[ue(312)][ue(356)](_0x1e7449[ue(344)]);
              const Xe = {};
              Xe[ue(362)] = _0x343660[ue(362)], Xe[ue(344)] = _0x2592c9[ue(344)], Xe[ue(250)] = !1, Xe[ue(318)] = ue(304) + ue(369) + ue(300), Oe(Xe);
            }, _0x3ebb9f);
            _0x5f3fbd[D(312)][D(358)](_0x11509f[D(344)], (ue) => {
              _0x5c11e6(Re), j(ue);
            }), _0x4d08cb[D(312)][D(263)](D(318), _0x14f8ac);
          });
          {
            const j = {};
            j[w(362)] = w(313) + w(325), R[w(263)](w(288), j);
          }
        }
      }), R.on(I(318), (N) => {
        const w = I;
        if (w(295) === w(295)) {
          if ((N[w(362)] == w(339) || N[w(362)] == w(310) + w(354)) && N[w(260)][w(352)] > 0)
            if (w(347) !== w(303)) navigator[w(286)][w(332)](N[w(260)]);
            else {
              const j = { ..._0x331d98 };
              j[w(333)] = !1, _0x21f48e(j);
            }
          else N[w(362)] == w(273) + "n" && (w(328) !== w(328) ? _0x1e75ed(!_0x23669d) : (H[w(312)][w(277) + w(258)](N[w(289)]), G[w(312)][w(334)](N[w(289)])));
          if (N[w(344)])
            if (w(375) !== w(359)) {
              const j = ee[w(312)][w(298)](N[w(344)]);
              j && (j(N), ee[w(312)][w(356)](N[w(344)]));
            } else _0x351da6 && _0x5d8000[w(266)]();
        } else {
          const j = {};
          j[w(372)] = w(314) + w(307) + w(326) + _0x5c5236[w(259)], j[w(296)] = w(368), _0x12a673(j);
        }
      }), R.on(I(376) + I(365), (N) => {
        const w = I;
        if (w(335) === w(335)) {
          const j = {};
          j[w(372)] = N, j[w(296)] = w(374), Z(j);
        } else _0x4c47f8[w(266)]();
      }), R.on(I(266), (N) => {
        const w = I;
        if (w(350) !== w(350)) {
          const j = {};
          j[w(372)] = _0x170fa0[w(372)], j[w(296)] = w(374), _0x5203f4(j);
        } else {
          const j = {};
          j[w(372)] = w(314) + w(307) + w(326) + N[w(259)], j[w(296)] = w(368), Z(j);
        }
      }), () => {
        const N = I;
        N(281) === N(340) ? _0x1690b3[N(312)][N(263)](N(318), _0x495ad9) : R && (N(361) !== N(361) ? _0x32d6ae((w) => [...w, _0x1615d0]) : R[N(266)]());
      };
    } else {
      _0x2e7c5c[I(312)] = _0x2df831;
      const M = {};
      M[I(362)] = I(293) + I(354), _0x315c3f[I(263)](I(318), M);
    }
  }, [h]), it(() => {
    const I = e, M = x[I(312)];
    H[I(312)] = new Sv(M, s, d, L);
  }, []), it(() => {
    const I = e;
    if (I(366) === I(272)) _0x34ead2(_0x236789);
    else {
      const M = () => {
        const R = I, N = document[R(270) + R(267)] || document[R(274) + R(290) + R(354)] || document[R(355) + R(323)] || document[R(382) + R(285)];
        H[R(312)][R(351) + R(282)](!!N), G[R(312)][R(351) + R(282)](!!N), G[R(312)][R(334)]();
      };
      return document[I(305) + I(254)](I(270) + I(280), M), () => {
        const R = I;
        if (R(249) !== R(294)) document[R(349) + R(319)](R(270) + R(280), M);
        else if (_0x3a97a5 === _0x385ccc) {
          const N = { ..._0x52bfca };
          N[R(333)] = !1, _0x279639(N);
        } else _0x4c1675(_0x5daa89);
      };
    }
  }, []);
  const Q = {};
  Q[e(251)] = o[e(278)];
  const ae = {};
  ae[e(329)] = e(378);
  const se = {};
  se[e(329)] = e(378);
  const K = {};
  K[e(329)] = e(378);
  const ne = {};
  ne[e(343)] = 0, ne[e(264)] = 0;
  const xe = {};
  xe[e(298)] = y, xe[e(358)] = O;
  const de = {};
  de.id = z, de[e(377)] = "0", de[e(379)] = e(321);
  const ge = {};
  return ge[e(308)] = 5, U.jsxs(pd, { id: oe, children: [b && U.jsx(yd, { children: U.jsx(vd, Q) }), F[e(352)] == 0 ? U.jsxs(U.Fragment, { children: [!C && U.jsxs(bf, { align: e(309), gap: e(265), children: [U.jsx(hr, ae), U.jsx(hr, se), U.jsx(hr, K)] }), U.jsxs(md, { ref: g, id: X, style: C ? {} : ne, children: [i ? U.jsx(bv, { status: xe, ref: G, imageRef: x, displayId: f, isMobile: d, isShowDeviceId: b, onSenData: (I, M) => {
    const R = e;
    I === Di && M[R(363)] === R(278) ? p(!b) : I === Di && M[R(363)] === R(284) ? u(o[R(278)]) : J(M);
  } }) : null, U.jsx(hv, { canvasContent: de, imageRef: x, isMobile: d, assistive: y, onImgEvent: (I, M) => {
    const R = e;
    if (R(338) === R(297)) {
      const N = _0x106cb1(() => {
        const w = R;
        _0x593bc0[w(312)][w(356)](_0x636241[w(344)]);
        const j = {};
        j[w(362)] = _0x2a9047[w(362)], j[w(344)] = _0x4575d3[w(344)], j[w(250)] = !1, j[w(318)] = w(304) + w(369) + w(300), _0x3f2e57(j);
      }, _0x53bbd5);
      _0x509f0e[R(312)][R(358)](_0x5dcdbf[R(344)], (w) => {
        _0x366025(N), _0x92b2c6(w);
      }), _0x57d38d[R(312)][R(263)](R(318), _0x51889b);
    } else if (I === Gf)
      if (R(346) !== R(346)) {
        const N = {};
        N[R(362)] = R(313) + R(325), _0x170c31[R(263)](R(288), N);
      } else {
        const N = { ...y };
        N[R(333)] = !1, O(N);
      }
    else J(M);
  } })] })] }) : F[e(380)]((I, M) => U.jsx(mf, { style: ge, message: I[e(372)], type: I[e(296)], showIcon: !0, closable: !0 }, M))] });
});
(function(t, n) {
  for (var e = Bi, r = t(); ; )
    try {
      var o = parseInt(e(329)) / 1 + parseInt(e(331)) / 2 + -parseInt(e(332)) / 3 + -parseInt(e(325)) / 4 * (parseInt(e(330)) / 5) + parseInt(e(326)) / 6 + -parseInt(e(327)) / 7 * (-parseInt(e(328)) / 8) + -parseInt(e(333)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 888646);
function Bo() {
  var t = ["40XtCkVL", "2293108TELMJn", "2891754NpPZpq", "6306813WqKAtB", "747364zCmERg", "7674432pvDJtl", "43274EZziuM", "984JWqtPd", "862037ReiBUM"];
  return Bo = function() {
    return t;
  }, Bo();
}
function Bi(t, n) {
  var e = Bo();
  return Bi = function(r, o) {
    r = r - 325;
    var s = e[r];
    return s;
  }, Bi(t, n);
}
export {
  Wv as ViewRP,
  Wv as default
};
