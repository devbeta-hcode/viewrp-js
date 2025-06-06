var l0 = Object.defineProperty;
var u0 = (e, t, n) => t in e ? l0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => u0(e, typeof t != "symbol" ? t + "" : t, n);
import * as _ from "react";
import De, { useDebugValue as Aa, createElement as f0, useRef as Ue, useContext as Qt, isValidElement as d0, version as h0, createContext as Ks, useLayoutEffect as p0, useEffect as et, useState as Qe, forwardRef as ml, useImperativeHandle as gl } from "react";
import Ta from "react-dom";
var pr = Mn;
(function(e, t) {
  for (var n = Mn, r = e(); ; )
    try {
      var o = parseInt(n(236)) / 1 + parseInt(n(239)) / 2 + parseInt(n(253)) / 3 + -parseInt(n(265)) / 4 * (parseInt(n(263)) / 5) + parseInt(n(248)) / 6 + -parseInt(n(254)) / 7 + -parseInt(n(246)) / 8;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 898908);
function Mn(e, t) {
  var n = yo();
  return Mn = function(r, o) {
    r = r - 235;
    var i = n[r];
    return i;
  }, Mn(e, t);
}
var x0 = /* @__PURE__ */ function() {
  var e = !0;
  return function(t, n) {
    var r = Mn;
    if (r(240) === r(240)) {
      var o = e ? function() {
        var s = r;
        if (n) {
          var a = n[s(264)](t, arguments);
          return n = null, a;
        }
      } : function() {
      };
      return e = !1, o;
    } else {
      var i = _0x11a18a[r(264)](_0x468ab8, arguments);
      return _0x4291bc = null, i;
    }
  };
}(), Mi = x0(void 0, function() {
  var e = Mn;
  return Mi[e(243)]()[e(262)](e(249))[e(243)]()[e(241)](Mi)[e(262)](e(249));
});
Mi();
typeof globalThis !== pr(242) || typeof window !== pr(242) || (typeof global !== pr(242) ? global : pr(242));
function m0(e) {
  var t = pr;
  return e && e[t(252)] && Object[t(251)][t(235)][t(256)](e, t(244)) ? e[t(244)] : e;
}
function yo() {
  var e = ["construct", "defineProperty", "get", "getOwnPropertyDescriptor", "search", "5rVkAAJ", "apply", "26428rUwKGA", "JECeC", "hasOwnProperty", "303721EcsyVh", "function", "OrgZT", "2554664HWheCG", "BnwUT", "constructor", "undefined", "toString", "default", "value", "5005536hAFDhn", "keys", "7405062MGRGwl", "(((.+)+)+)+$", "enumerable", "prototype", "__esModule", "750402AQXjpI", "10739099xXFhhU", "forEach", "call", "length"];
  return yo = function() {
    return e;
  }, yo();
}
var Lr = { exports: {} }, ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function g0() {
  if (Oa) return ar;
  Oa = 1;
  var e = De, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, y = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: u, ref: y, props: d, _owner: o.current };
  }
  return ar.Fragment = n, ar.jsx = s, ar.jsxs = s, ar;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function v0() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = De, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function x(p) {
      if (p === null || typeof p != "object")
        return null;
      var R = g && p[g] || p[h];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(p) {
      {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), $ = 1; $ < R; $++)
          M[$ - 1] = arguments[$];
        m("error", p, M);
      }
    }
    function m(p, R, M) {
      {
        var $ = w.ReactDebugCurrentFrame, xe = $.getStackAddendum();
        xe !== "" && (R += "%s", M = M.concat([xe]));
        var ge = M.map(function(le) {
          return String(le);
        });
        ge.unshift("Warning: " + R), Function.prototype.apply.call(console[p], console, ge);
      }
    }
    var A = !1, v = !1, O = !1, C = !1, N = !1, B;
    B = Symbol.for("react.module.reference");
    function Y(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || N || p === o || p === l || p === f || C || p === y || A || v || O || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === B || p.getModuleId !== void 0));
    }
    function ne(p, R, M) {
      var $ = p.displayName;
      if ($)
        return $;
      var xe = R.displayName || R.name || "";
      return xe !== "" ? M + "(" + xe + ")" : M;
    }
    function K(p) {
      return p.displayName || "Context";
    }
    function D(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
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
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var R = p;
            return K(R) + ".Consumer";
          case s:
            var M = p;
            return K(M._context) + ".Provider";
          case c:
            return ne(p, p.render, "ForwardRef");
          case d:
            var $ = p.displayName || null;
            return $ !== null ? $ : D(p.type) || "Memo";
          case u: {
            var xe = p, ge = xe._payload, le = xe._init;
            try {
              return D(le(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, q = 0, X, ee, Z, Q, oe, ie, J;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function he() {
      {
        if (q === 0) {
          X = console.log, ee = console.info, Z = console.warn, Q = console.error, oe = console.group, ie = console.groupCollapsed, J = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        q++;
      }
    }
    function fe() {
      {
        if (q--, q === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, p, {
              value: X
            }),
            info: V({}, p, {
              value: ee
            }),
            warn: V({}, p, {
              value: Z
            }),
            error: V({}, p, {
              value: Q
            }),
            group: V({}, p, {
              value: oe
            }),
            groupCollapsed: V({}, p, {
              value: ie
            }),
            groupEnd: V({}, p, {
              value: J
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = w.ReactCurrentDispatcher, me;
    function k(p, R, M) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (xe) {
            var $ = xe.stack.trim().match(/\n( *(at )?)/);
            me = $ && $[1] || "";
          }
        return `
` + me + p;
      }
    }
    var F = !1, P;
    {
      var L = typeof WeakMap == "function" ? WeakMap : Map;
      P = new L();
    }
    function S(p, R) {
      if (!p || F)
        return "";
      {
        var M = P.get(p);
        if (M !== void 0)
          return M;
      }
      var $;
      F = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = pe.current, pe.current = null, he();
      try {
        if (R) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Je) {
              $ = Je;
            }
            Reflect.construct(p, [], le);
          } else {
            try {
              le.call();
            } catch (Je) {
              $ = Je;
            }
            p.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            $ = Je;
          }
          p();
        }
      } catch (Je) {
        if (Je && $ && typeof Je.stack == "string") {
          for (var ae = Je.stack.split(`
`), $e = $.stack.split(`
`), Re = ae.length - 1, ke = $e.length - 1; Re >= 1 && ke >= 0 && ae[Re] !== $e[ke]; )
            ke--;
          for (; Re >= 1 && ke >= 0; Re--, ke--)
            if (ae[Re] !== $e[ke]) {
              if (Re !== 1 || ke !== 1)
                do
                  if (Re--, ke--, ke < 0 || ae[Re] !== $e[ke]) {
                    var Ie = `
` + ae[Re].replace(" at new ", " at ");
                    return p.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", p.displayName)), typeof p == "function" && P.set(p, Ie), Ie;
                  }
                while (Re >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        F = !1, pe.current = ge, fe(), Error.prepareStackTrace = xe;
      }
      var On = p ? p.displayName || p.name : "", un = On ? k(On) : "";
      return typeof p == "function" && P.set(p, un), un;
    }
    function W(p, R, M) {
      return S(p, !1);
    }
    function I(p) {
      var R = p.prototype;
      return !!(R && R.isReactComponent);
    }
    function ue(p, R, M) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return S(p, I(p));
      if (typeof p == "string")
        return k(p);
      switch (p) {
        case l:
          return k("Suspense");
        case f:
          return k("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return W(p.render);
          case d:
            return ue(p.type, R, M);
          case u: {
            var $ = p, xe = $._payload, ge = $._init;
            try {
              return ue(ge(xe), R, M);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, st = {}, _t = w.ReactDebugCurrentFrame;
    function ot(p) {
      if (p) {
        var R = p._owner, M = ue(p.type, p._source, R ? R.type : null);
        _t.setExtraStackFrame(M);
      } else
        _t.setExtraStackFrame(null);
    }
    function Ct(p, R, M, $, xe) {
      {
        var ge = Function.call.bind(we);
        for (var le in p)
          if (ge(p, le)) {
            var ae = void 0;
            try {
              if (typeof p[le] != "function") {
                var $e = Error(($ || "React class") + ": " + M + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ae = p[le](R, le, $, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ae = Re;
            }
            ae && !(ae instanceof Error) && (ot(xe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", M, le, typeof ae), ot(null)), ae instanceof Error && !(ae.message in st) && (st[ae.message] = !0, ot(xe), b("Failed %s type: %s", M, ae.message), ot(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ce(p) {
      return Me(p);
    }
    function Xe(p) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, M = R && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M;
      }
    }
    function pt(p) {
      try {
        return at(p), !1;
      } catch {
        return !0;
      }
    }
    function at(p) {
      return "" + p;
    }
    function sn(p) {
      if (pt(p))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(p)), at(p);
    }
    var an = w.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cn, j;
    function E(p) {
      if (we.call(p, "ref")) {
        var R = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Be(p) {
      if (we.call(p, "key")) {
        var R = Object.getOwnPropertyDescriptor(p, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function _e(p, R) {
      typeof p.ref == "string" && an.current;
    }
    function Te(p, R) {
      {
        var M = function() {
          cn || (cn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function G(p, R) {
      {
        var M = function() {
          j || (j = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Ee = function(p, R, M, $, xe, ge, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: R,
        ref: M,
        props: le,
        // Record the component responsible for creating this element.
        _owner: ge
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
        value: xe
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function ct(p, R, M, $, xe) {
      {
        var ge, le = {}, ae = null, $e = null;
        M !== void 0 && (sn(M), ae = "" + M), Be(R) && (sn(R.key), ae = "" + R.key), E(R) && ($e = R.ref, _e(R, xe));
        for (ge in R)
          we.call(R, ge) && !Cn.hasOwnProperty(ge) && (le[ge] = R[ge]);
        if (p && p.defaultProps) {
          var Re = p.defaultProps;
          for (ge in Re)
            le[ge] === void 0 && (le[ge] = Re[ge]);
        }
        if (ae || $e) {
          var ke = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ae && Te(le, ke), $e && G(le, ke);
        }
        return Ee(p, ae, $e, xe, $, an.current, le);
      }
    }
    var At = w.ReactCurrentOwner, An = w.ReactDebugCurrentFrame;
    function Tt(p) {
      if (p) {
        var R = p._owner, M = ue(p.type, p._source, R ? R.type : null);
        An.setExtraStackFrame(M);
      } else
        An.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function Dt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function Oe() {
      {
        if (At.current) {
          var p = D(At.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Ge(p) {
      return "";
    }
    var lt = {};
    function Ot(p) {
      {
        var R = Oe();
        if (!R) {
          var M = typeof p == "string" ? p : p.displayName || p.name;
          M && (R = `

Check the top-level render call using <` + M + ">.");
        }
        return R;
      }
    }
    function ln(p, R) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var M = Ot(R);
        if (lt[M])
          return;
        lt[M] = !0;
        var $ = "";
        p && p._owner && p._owner !== At.current && ($ = " It was passed a child from " + D(p._owner.type) + "."), Tt(p), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, $), Tt(null);
      }
    }
    function Tn(p, R) {
      {
        if (typeof p != "object")
          return;
        if (Ce(p))
          for (var M = 0; M < p.length; M++) {
            var $ = p[M];
            Dt($) && ln($, R);
          }
        else if (Dt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var xe = x(p);
          if (typeof xe == "function" && xe !== p.entries)
            for (var ge = xe.call(p), le; !(le = ge.next()).done; )
              Dt(le.value) && ln(le.value, R);
        }
      }
    }
    function Yt(p) {
      {
        var R = p.type;
        if (R == null || typeof R == "string")
          return;
        var M;
        if (typeof R == "function")
          M = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          M = R.propTypes;
        else
          return;
        if (M) {
          var $ = D(R);
          Ct(M, p.props, "prop", $, p);
        } else if (R.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var xe = D(R);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(p) {
      {
        for (var R = Object.keys(p.props), M = 0; M < R.length; M++) {
          var $ = R[M];
          if ($ !== "children" && $ !== "key") {
            Tt(p), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Tt(null);
            break;
          }
        }
        p.ref !== null && (Tt(p), b("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var sr = {};
    function jr(p, R, M, $, xe, ge) {
      {
        var le = Y(p);
        if (!le) {
          var ae = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Ge();
          $e ? ae += $e : ae += Oe();
          var Re;
          p === null ? Re = "null" : Ce(p) ? Re = "array" : p !== void 0 && p.$$typeof === t ? (Re = "<" + (D(p.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof p, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ae);
        }
        var ke = ct(p, R, M, xe, ge);
        if (ke == null)
          return ke;
        if (le) {
          var Ie = R.children;
          if (Ie !== void 0)
            if ($)
              if (Ce(Ie)) {
                for (var On = 0; On < Ie.length; On++)
                  Tn(Ie[On], p);
                Object.freeze && Object.freeze(Ie);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Ie, p);
        }
        if (we.call(R, "key")) {
          var un = D(p), Je = Object.keys(R).filter(function(c0) {
            return c0 !== "key";
          }), fi = Je.length > 0 ? "{key: someKey, " + Je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[un + fi]) {
            var a0 = Je.length > 0 ? "{" + Je.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, un, a0, un), sr[un + fi] = !0;
          }
        }
        return p === r ? Xt(ke) : Yt(ke), ke;
      }
    }
    function He(p, R, M) {
      return jr(p, R, M, !0);
    }
    function Mr(p, R, M) {
      return jr(p, R, M, !1);
    }
    var ui = Mr, Pe = He;
    cr.Fragment = r, cr.jsx = ui, cr.jsxs = Pe;
  }()), cr;
}
var Pa;
function y0() {
  return Pa || (Pa = 1, process.env.NODE_ENV === "production" ? Lr.exports = g0() : Lr.exports = v0()), Lr.exports;
}
var H = y0(), tt = function() {
  return tt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, tt.apply(this, arguments);
};
function Ln(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function b0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var S0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, w0 = /* @__PURE__ */ b0(
  function(e) {
    return S0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ae = "-ms-", gr = "-moz-", be = "-webkit-", vl = "comm", zo = "rule", Zs = "decl", E0 = "@import", yl = "@keyframes", _0 = "@layer", bl = Math.abs, Js = String.fromCharCode, Li = Object.assign;
function C0(e, t) {
  return Ye(e, 0) ^ 45 ? (((t << 2 ^ Ye(e, 0)) << 2 ^ Ye(e, 1)) << 2 ^ Ye(e, 2)) << 2 ^ Ye(e, 3) : 0;
}
function Sl(e) {
  return e.trim();
}
function Vt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, n) {
  return e.replace(t, n);
}
function Qr(e, t, n) {
  return e.indexOf(t, n);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Dn(e, t, n) {
  return e.slice(t, n);
}
function It(e) {
  return e.length;
}
function wl(e) {
  return e.length;
}
function xr(e, t) {
  return t.push(e), e;
}
function A0(e, t) {
  return e.map(t).join("");
}
function ka(e, t) {
  return e.filter(function(n) {
    return !Vt(n, t);
  });
}
var Vo = 1, Bn = 1, El = 0, dt = 0, Fe = 0, Zn = "";
function Ho(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Vo, column: Bn, length: s, return: "", siblings: a };
}
function $t(e, t) {
  return Li(Ho("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Rn(e) {
  for (; e.root; )
    e = $t(e.root, { children: [e] });
  xr(e, e.siblings);
}
function T0() {
  return Fe;
}
function O0() {
  return Fe = dt > 0 ? Ye(Zn, --dt) : 0, Bn--, Fe === 10 && (Bn = 1, Vo--), Fe;
}
function gt() {
  return Fe = dt < El ? Ye(Zn, dt++) : 0, Bn++, Fe === 10 && (Bn = 1, Vo++), Fe;
}
function mn() {
  return Ye(Zn, dt);
}
function eo() {
  return dt;
}
function Uo(e, t) {
  return Dn(Zn, e, t);
}
function Di(e) {
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
function R0(e) {
  return Vo = Bn = 1, El = It(Zn = e), dt = 0, [];
}
function P0(e) {
  return Zn = "", e;
}
function di(e) {
  return Sl(Uo(dt - 1, Bi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function k0(e) {
  for (; (Fe = mn()) && Fe < 33; )
    gt();
  return Di(e) > 2 || Di(Fe) > 3 ? "" : " ";
}
function I0(e, t) {
  for (; --t && gt() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return Uo(e, eo() + (t < 6 && mn() == 32 && gt() == 32));
}
function Bi(e) {
  for (; gt(); )
    switch (Fe) {
      // ] ) " '
      case e:
        return dt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bi(Fe);
        break;
      // (
      case 40:
        e === 41 && Bi(e);
        break;
      // \
      case 92:
        gt();
        break;
    }
  return dt;
}
function N0(e, t) {
  for (; gt() && e + Fe !== 57; )
    if (e + Fe === 84 && mn() === 47)
      break;
  return "/*" + Uo(t, dt - 1) + "*" + Js(e === 47 ? e : gt());
}
function j0(e) {
  for (; !Di(mn()); )
    gt();
  return Uo(e, dt);
}
function M0(e) {
  return P0(to("", null, null, null, [""], e = R0(e), 0, [0], e));
}
function to(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, y = 0, g = 0, h = 1, x = 1, w = 1, b = 0, m = "", A = o, v = i, O = r, C = m; x; )
    switch (g = b, b = gt()) {
      // (
      case 40:
        if (g != 108 && Ye(C, d - 1) == 58) {
          Qr(C += se(di(b), "&", "&\f"), "&\f", bl(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += di(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += k0(g);
        break;
      // \
      case 92:
        C += I0(eo() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            xr(L0(N0(gt(), eo()), t, n, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = It(C) * w;
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
            w == -1 && (C = se(C, /\f/g, "")), y > 0 && It(C) - d && xr(y > 32 ? Na(C + ";", r, n, d - 1, c) : Na(se(C, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (xr(O = Ia(C, t, n, l, f, o, a, m, A = [], v = [], d, i), i), b === 123)
              if (f === 0)
                to(C, t, O, O, A, i, d, a, v);
              else
                switch (u === 99 && Ye(C, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    to(e, O, O, r && xr(Ia(e, O, O, 0, 0, o, a, m, o, A = [], d, v), v), o, v, d, a, r ? A : v);
                    break;
                  default:
                    to(C, O, O, O, [""], v, 0, a, v);
                }
        }
        l = f = y = 0, h = w = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + It(C), y = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && O0() == 125)
            continue;
        }
        switch (C += Js(b), b * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (It(C) - 1) * w, w = 1;
            break;
          // @
          case 64:
            mn() === 45 && (C += di(gt())), u = mn(), f = d = It(m = C += j0(eo())), b++;
            break;
          // -
          case 45:
            g === 45 && It(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Ia(e, t, n, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, y = o === 0 ? i : [""], g = wl(y), h = 0, x = 0, w = 0; h < r; ++h)
    for (var b = 0, m = Dn(e, u + 1, u = bl(x = s[h])), A = e; b < g; ++b)
      (A = Sl(x > 0 ? y[b] + " " + m : se(m, /&\f/g, y[b]))) && (c[w++] = A);
  return Ho(e, t, n, o === 0 ? zo : a, c, l, f, d);
}
function L0(e, t, n, r) {
  return Ho(e, t, n, vl, Js(T0()), Dn(e, 2, -2), 0, r);
}
function Na(e, t, n, r, o) {
  return Ho(e, t, n, Zs, Dn(e, 0, r), Dn(e, r + 1, -1), r, o);
}
function _l(e, t, n) {
  switch (C0(e, t)) {
    // color-adjust
    case 5103:
      return be + "print-" + e + e;
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
      return be + e + e;
    // tab-size
    case 4789:
      return gr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + e + gr + e + Ae + e + e;
    // writing-mode
    case 5936:
      switch (Ye(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return be + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return be + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return be + e + Ae + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return be + e + Ae + e + e;
    // order
    case 6165:
      return be + e + Ae + "flex-" + e + e;
    // align-items
    case 5187:
      return be + e + se(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Ae + "flex-$1$2") + e;
    // align-self
    case 5443:
      return be + e + Ae + "flex-item-" + se(e, /flex-|-self/g, "") + (Vt(e, /flex-|baseline/) ? "" : Ae + "grid-row-" + se(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return be + e + Ae + "flex-line-pack" + se(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return be + e + Ae + se(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return be + e + Ae + se(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return be + "box-" + se(e, "-grow", "") + be + e + Ae + se(e, "grow", "positive") + e;
    // transition
    case 4554:
      return be + se(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    // cursor
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, be + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
    // justify-self
    case 4200:
      if (!Vt(e, /flex-|baseline/)) return Ae + "grid-column-align" + Dn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ae + se(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Vt(r.props, /grid-\w+-end/);
      }) ? ~Qr(e + (n = n[t].value), "span", 0) ? e : Ae + se(e, "-start", "") + e + Ae + "grid-row-span:" + (~Qr(n, "span", 0) ? Vt(n, /\d+/) : +Vt(n, /\d+/) - +Vt(e, /\d+/)) + ";" : Ae + se(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Vt(r.props, /grid-\w+-start/);
      }) ? e : Ae + se(se(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, be + "$1$2") + e;
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
        switch (Ye(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ye(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + gr + (Ye(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Qr(e, "stretch", 0) ? _l(se(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Ae + o + ":" + i + l + (s ? Ae + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Ye(e, t + 6) === 121)
        return se(e, ":", ":" + be) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ye(e, Ye(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + be + (Ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Ae + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return se(e, ":", ":" + Ae) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function bo(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function D0(e, t, n, r) {
  switch (e.type) {
    case _0:
      if (e.children.length) break;
    case E0:
    case Zs:
      return e.return = e.return || e.value;
    case vl:
      return "";
    case yl:
      return e.return = e.value + "{" + bo(e.children, r) + "}";
    case zo:
      if (!It(e.value = e.props.join(","))) return "";
  }
  return It(n = bo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function B0(e) {
  var t = wl(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function F0(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function z0(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Zs:
        e.return = _l(e.value, e.length, n);
        return;
      case yl:
        return bo([$t(e, { value: se(e.value, "@", "@" + be) })], r);
      case zo:
        if (e.length)
          return A0(n = e.props, function(o) {
            switch (Vt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Rn($t(e, { props: [se(o, /:(read-\w+)/, ":" + gr + "$1")] })), Rn($t(e, { props: [o] })), Li(e, { props: ka(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Rn($t(e, { props: [se(o, /:(plac\w+)/, ":" + be + "input-$1")] })), Rn($t(e, { props: [se(o, /:(plac\w+)/, ":" + gr + "$1")] })), Rn($t(e, { props: [se(o, /:(plac\w+)/, Ae + "input-$1")] })), Rn($t(e, { props: [o] })), Li(e, { props: ka(n, r) });
                break;
            }
            return "";
          });
    }
}
var V0 = {
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
}, wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Cl = "active", Al = "data-styled-version", Wo = "6.1.18", Qs = `/*!sc*/
`, So = typeof window < "u" && typeof document < "u", H0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ja = /invalid hook call/i, Dr = /* @__PURE__ */ new Set(), U0 = function(e, t) {
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
        ja.test(s) ? (i = !1, Dr.delete(r)) : o.apply(void 0, Ln([s], a, !1));
      }, Ue(), i && !Dr.has(r) && (console.warn(r), Dr.add(r));
    } catch (s) {
      ja.test(s.message) && Dr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Fn = Object.freeze({});
function W0(e, t, n) {
  return n === void 0 && (n = Fn), e.theme !== n.theme && e.theme || t || n.theme;
}
var Fi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), q0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Y0 = /(^-|-$)/g;
function Ma(e) {
  return e.replace(q0, "-").replace(Y0, "");
}
var X0 = /(a)(d)/gi, Br = 52, La = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zi(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Br; t = t / Br | 0) n = La(t % Br) + n;
  return (La(t % Br) + n).replace(X0, "$1-$2");
}
var hi, Tl = 5381, dn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Ol = function(e) {
  return dn(Tl, e);
};
function $0(e) {
  return zi(Ol(e) >>> 0);
}
function Rl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function pi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pl = typeof Symbol == "function" && Symbol.for, kl = Pl ? Symbol.for("react.memo") : 60115, G0 = Pl ? Symbol.for("react.forward_ref") : 60112, K0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Z0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Il = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, J0 = ((hi = {})[G0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, hi[kl] = Il, hi);
function Da(e) {
  return ("type" in (t = e) && t.type.$$typeof) === kl ? Il : "$$typeof" in e ? J0[e.$$typeof] : K0;
  var t;
}
var Q0 = Object.defineProperty, ed = Object.getOwnPropertyNames, Ba = Object.getOwnPropertySymbols, td = Object.getOwnPropertyDescriptor, nd = Object.getPrototypeOf, Fa = Object.prototype;
function Nl(e, t, n) {
  if (typeof t != "string") {
    if (Fa) {
      var r = nd(t);
      r && r !== Fa && Nl(e, r, n);
    }
    var o = ed(t);
    Ba && (o = o.concat(Ba(t)));
    for (var i = Da(e), s = Da(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Z0 || n && n[c] || s && c in s || i && c in i)) {
        var l = td(t, c);
        try {
          Q0(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function zn(e) {
  return typeof e == "function";
}
function ea(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function za(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Vn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vi(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Vn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Vi(e[r], t[r]);
  else if (Vn(t)) for (var r in t) e[r] = Vi(e[r], t[r]);
  return e;
}
function ta(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var rd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function od() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Jn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(od.apply(void 0, Ln([rd[e]], t, !1)).trim());
}
var id = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Jn(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Qs);
    return n;
  }, e;
}(), sd = 1 << 30, no = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), ro = 1, Fr = function(e) {
  if (no.has(e)) return no.get(e);
  for (; wo.has(ro); ) ro++;
  var t = ro++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > sd)) throw Jn(16, "".concat(t));
  return no.set(e, t), wo.set(t, e), t;
}, ad = function(e, t) {
  ro = t + 1, no.set(e, t), wo.set(t, e);
}, cd = "style[".concat(wn, "][").concat(Al, '="').concat(Wo, '"]'), ld = new RegExp("^".concat(wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ud = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, fd = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Qs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(ld);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (ad(f, l), ud(e, f, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Va = function(e) {
  for (var t = document.querySelectorAll(cd), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(wn) !== Cl && (fd(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function dd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jl = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(wn, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(wn, Cl), r.setAttribute(Al, Wo);
  var s = dd();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, hd = function() {
  function e(t) {
    this.element = jl(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Jn(17);
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
}(), pd = function() {
  function e(t) {
    this.element = jl(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), xd = function() {
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
}(), Ha = So, md = { isServer: !So, useCSSOMInjection: !H0 }, Ml = function() {
  function e(t, n, r) {
    t === void 0 && (t = Fn), n === void 0 && (n = {});
    var o = this;
    this.options = tt(tt({}, md), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && So && Ha && (Ha = !1, Va(this)), ta(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(w) {
            return wo.get(w);
          }(d);
          if (u === void 0) return "continue";
          var y = i.names.get(u), g = s.getGroup(d);
          if (y === void 0 || !y.size || g.length === 0) return "continue";
          var h = "".concat(wn, ".g").concat(d, '[id="').concat(u, '"]'), x = "";
          y !== void 0 && y.forEach(function(w) {
            w.length > 0 && (x += "".concat(w, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Qs);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Fr(t);
  }, e.prototype.rehydrate = function() {
    !this.server && So && Va(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(tt(tt({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new xd(o) : r ? new hd(o) : new pd(o);
    }(this.options), new id(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Fr(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Fr(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Fr(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), gd = /&/g, vd = /^\s*\/\/.*$/gm;
function Ll(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Ll(n.children, t)), n;
  });
}
function yd(e) {
  var t, n, r, o = Fn, i = o.options, s = i === void 0 ? Fn : i, a = o.plugins, c = a === void 0 ? qo : a, l = function(u, y, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === zo && u.value.includes("&") && (u.props[0] = u.props[0].replace(gd, n).replace(r, l));
  }), s.prefix && f.push(z0), f.push(D0);
  var d = function(u, y, g, h) {
    y === void 0 && (y = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), t = h, n = y, r = new RegExp("\\".concat(n, "\\b"), "g");
    var x = u.replace(vd, ""), w = M0(g || y ? "".concat(g, " ").concat(y, " { ").concat(x, " }") : x);
    s.namespace && (w = Ll(w, s.namespace));
    var b = [];
    return bo(w, B0(f.concat(F0(function(m) {
      return b.push(m);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(u, y) {
    return y.name || Jn(15), dn(u, y.name);
  }, Tl).toString() : "", d;
}
var bd = new Ml(), Hi = yd(), Dl = De.createContext({ shouldForwardProp: void 0, styleSheet: bd, stylis: Hi });
Dl.Consumer;
De.createContext(void 0);
function Ua() {
  return Qt(Dl);
}
var Wa = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Hi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, ta(this, function() {
      throw Jn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Hi), this.name + t.hash;
  }, e;
}(), Sd = function(e) {
  return e >= "A" && e <= "Z";
};
function qa(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Sd(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Bl = function(e) {
  return e == null || e === !1 || e === "";
}, Fl = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Bl(i) && (Array.isArray(i) && i.isCss || zn(i) ? r.push("".concat(qa(o), ":"), i, ";") : Vn(i) ? r.push.apply(r, Ln(Ln(["".concat(o, " {")], Fl(i), !1), ["}"], !1)) : r.push("".concat(qa(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in V0 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function gn(e, t, n, r) {
  if (Bl(e)) return [];
  if (ea(e)) return [".".concat(e.styledComponentId)];
  if (zn(e)) {
    if (!zn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Wa || Vn(o) || o === null || console.error("".concat(Rl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gn(o, t, n, r);
  }
  var i;
  return e instanceof Wa ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Vn(e) ? Fl(e) : Array.isArray(e) ? Array.prototype.concat.apply(qo, e.map(function(s) {
    return gn(s, t, n, r);
  })) : [e.toString()];
}
function wd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (zn(n) && !ea(n)) return !1;
  }
  return !0;
}
var Ed = Ol(Wo), _d = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wd(t), this.componentId = n, this.baseHash = dn(Ed, n), this.baseStyle = r, Ml.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = pn(o, this.staticRulesId);
    else {
      var i = za(gn(this.rules, t, n, r)), s = zi(dn(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = pn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = dn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = dn(c, d));
        else if (d) {
          var u = za(gn(d, t, n, r));
          c = dn(c, u + f), l += u;
        }
      }
      if (l) {
        var y = zi(c >>> 0);
        n.hasNameForId(this.componentId, y) || n.insertRules(this.componentId, y, r(l, ".".concat(y), void 0, this.componentId)), o = pn(o, y);
      }
    }
    return o;
  }, e;
}(), zl = De.createContext(void 0);
zl.Consumer;
var xi = {}, Ya = /* @__PURE__ */ new Set();
function Cd(e, t, n) {
  var r = ea(e), o = e, i = !pi(e), s = t.attrs, a = s === void 0 ? qo : s, c = t.componentId, l = c === void 0 ? function(A, v) {
    var O = typeof A != "string" ? "sc" : Ma(A);
    xi[O] = (xi[O] || 0) + 1;
    var C = "".concat(O, "-").concat($0(Wo + O + xi[O]));
    return v ? "".concat(v, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(A) {
    return pi(A) ? "styled.".concat(A) : "Styled(".concat(Rl(A), ")");
  }(e) : f, u = t.displayName && t.componentId ? "".concat(Ma(t.displayName), "-").concat(t.componentId) : t.componentId || l, y = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      g = function(A, v) {
        return h(A, v) && x(A, v);
      };
    } else g = h;
  }
  var w = new _d(n, u, r ? o.componentStyle : void 0);
  function b(A, v) {
    return function(O, C, N) {
      var B = O.attrs, Y = O.componentStyle, ne = O.defaultProps, K = O.foldedComponentIds, D = O.styledComponentId, V = O.target, q = De.useContext(zl), X = Ua(), ee = O.shouldForwardProp || X.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Aa(D);
      var Z = W0(C, q, ne) || Fn, Q = function(fe, pe, me) {
        for (var k, F = tt(tt({}, pe), { className: void 0, theme: me }), P = 0; P < fe.length; P += 1) {
          var L = zn(k = fe[P]) ? k(F) : k;
          for (var S in L) F[S] = S === "className" ? pn(F[S], L[S]) : S === "style" ? tt(tt({}, F[S]), L[S]) : L[S];
        }
        return pe.className && (F.className = pn(F.className, pe.className)), F;
      }(B, C, Z), oe = Q.as || V, ie = {};
      for (var J in Q) Q[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && Q.theme === Z || (J === "forwardedAs" ? ie.as = Q.forwardedAs : ee && !ee(J, oe) || (ie[J] = Q[J], ee || process.env.NODE_ENV !== "development" || w0(J) || Ya.has(J) || !Fi.has(oe) || (Ya.add(J), console.warn('styled-components: it looks like an unknown prop "'.concat(J, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(fe, pe) {
        var me = Ua(), k = fe.generateAndInjectStyles(pe, me.styleSheet, me.stylis);
        return process.env.NODE_ENV !== "production" && Aa(k), k;
      }(Y, Q);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(re);
      var he = pn(K, D);
      return re && (he += " " + re), Q.className && (he += " " + Q.className), ie[pi(oe) && !Fi.has(oe) ? "class" : "className"] = he, N && (ie.ref = N), f0(oe, ie);
    }(m, A, v);
  }
  b.displayName = d;
  var m = De.forwardRef(b);
  return m.attrs = y, m.componentStyle = w, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? pn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = u, m.target = r ? o.target : e, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = r ? function(v) {
      for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
      for (var N = 0, B = O; N < B.length; N++) Vi(v, B[N], !0);
      return v;
    }({}, o.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (U0(d, u), m.warnTooManyClasses = /* @__PURE__ */ function(A, v) {
    var O = {}, C = !1;
    return function(N) {
      if (!C && (O[N] = !0, Object.keys(O).length >= 200)) {
        var B = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(B, `.
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
  }(d, u)), ta(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && Nl(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function Xa(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var $a = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ad(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (zn(e) || Vn(e)) return $a(gn(Xa(qo, Ln([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? gn(r) : $a(gn(Xa(r, t)));
}
function Ui(e, t, n) {
  if (n === void 0 && (n = Fn), !t) throw Jn(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Ad.apply(void 0, Ln([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Ui(e, t, tt(tt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ui(e, t, tt(tt({}, n), o));
  }, r;
}
var Vl = function(e) {
  return Ui(Cd, e);
}, bt = Vl;
Fi.forEach(function(e) {
  bt[e] = Vl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zr = "__sc-".concat(wn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[zr] || (window[zr] = 0), window[zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zr] += 1);
const Rr = Hn;
(function(e, t) {
  const n = Hn, r = e();
  for (; ; )
    try {
      if (parseInt(n(117)) / 1 + -parseInt(n(108)) / 2 * (parseInt(n(120)) / 3) + -parseInt(n(122)) / 4 * (-parseInt(n(116)) / 5) + parseInt(n(115)) / 6 * (-parseInt(n(107)) / 7) + parseInt(n(121)) / 8 + parseInt(n(111)) / 9 + -parseInt(n(106)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Eo, 140877);
const Td = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = Hn;
      if (n) {
        const i = n[o(118)](t, arguments);
        return n = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Wi = Td(void 0, function() {
  const e = Hn;
  return Wi[e(123)]()[e(113)](e(112))[e(123)]()[e(114)](Wi)[e(113)](e(112));
});
Wi();
function Hn(e, t) {
  const n = Eo();
  return Hn = function(r, o) {
    return r = r - 106, n[r];
  }, Hn(e, t);
}
const Od = bt[Rr(119)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, Rd = bt[Rr(119)]`
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
`, Pd = bt[Rr(110)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, kd = bt[Rr(109)]`
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
function Eo() {
  const e = ["370212CZPfpv", "19835Wrxwlz", "153631mkkWpY", "apply", "div", "1857ViMBTR", "1732280LslJNx", "128ewoVGS", "toString", "3341010WPTqeA", "7ffSzFs", "646CnEtss", "span", "canvas", "2155563zJehQT", "(((.+)+)+)+$", "search", "constructor"];
  return Eo = function() {
    return e;
  }, Eo();
}
const Id = bt[Rr(119)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, jt = /* @__PURE__ */ Object.create(null);
jt.open = "0";
jt.close = "1";
jt.ping = "2";
jt.pong = "3";
jt.message = "4";
jt.upgrade = "5";
jt.noop = "6";
const oo = /* @__PURE__ */ Object.create(null);
Object.keys(jt).forEach((e) => {
  oo[jt[e]] = e;
});
const qi = { type: "error", data: "parser error" }, Hl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ul = typeof ArrayBuffer == "function", Wl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, na = ({ type: e, data: t }, n, r) => Hl && t instanceof Blob ? n ? r(t) : Ga(t, r) : Ul && (t instanceof ArrayBuffer || Wl(t)) ? n ? r(t) : Ga(new Blob([t]), r) : r(jt[e] + (t || "")), Ga = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Ka(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let mi;
function Nd(e, t) {
  if (Hl && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ka).then(t);
  if (Ul && (e.data instanceof ArrayBuffer || Wl(e.data)))
    return t(Ka(e.data));
  na(e, !1, (n) => {
    mi || (mi = new TextEncoder()), t(mi.encode(n));
  });
}
const Za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Za.length; e++)
  mr[Za.charCodeAt(e)] = e;
const jd = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), f = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = mr[e.charCodeAt(r)], s = mr[e.charCodeAt(r + 1)], a = mr[e.charCodeAt(r + 2)], c = mr[e.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Md = typeof ArrayBuffer == "function", ra = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: ql(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Ld(e.substring(1), t)
  } : oo[n] ? e.length > 1 ? {
    type: oo[n],
    data: e.substring(1)
  } : {
    type: oo[n]
  } : qi;
}, Ld = (e, t) => {
  if (Md) {
    const n = jd(e);
    return ql(n, t);
  } else
    return { base64: !0, data: e };
}, ql = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Yl = "", Dd = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    na(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(Yl));
    });
  });
}, Bd = (e, t) => {
  const n = e.split(Yl), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = ra(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Fd() {
  return new TransformStream({
    transform(e, t) {
      Nd(e, (n) => {
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
let gi;
function Vr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Hr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function zd(e, t) {
  gi || (gi = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Vr(n) < 1)
            break;
          const c = Hr(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Vr(n) < 2)
            break;
          const c = Hr(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Vr(n) < 8)
            break;
          const c = Hr(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(qi);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Vr(n) < o)
            break;
          const c = Hr(n, o);
          a.enqueue(ra(i ? c : gi.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(qi);
          break;
        }
      }
    }
  });
}
const Xl = 4;
function Ve(e) {
  if (e) return Vd(e);
}
function Vd(e) {
  for (var t in Ve.prototype)
    e[t] = Ve.prototype[t];
  return e;
}
Ve.prototype.on = Ve.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ve.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Ve.prototype.off = Ve.prototype.removeListener = Ve.prototype.removeAllListeners = Ve.prototype.removeEventListener = function(e, t) {
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
Ve.prototype.emit = function(e) {
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
Ve.prototype.emitReserved = Ve.prototype.emit;
Ve.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ve.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Yo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), ft = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Hd = "arraybuffer";
function $l(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const Ud = ft.setTimeout, Wd = ft.clearTimeout;
function Xo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Ud.bind(ft), e.clearTimeoutFn = Wd.bind(ft)) : (e.setTimeoutFn = ft.setTimeout.bind(ft), e.clearTimeoutFn = ft.clearTimeout.bind(ft));
}
const qd = 1.33;
function Yd(e) {
  return typeof e == "string" ? Xd(e) : Math.ceil((e.byteLength || e.size) * qd);
}
function Xd(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Gl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function $d(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Gd(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class Kd extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class oa extends Ve {
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
    return super.emitReserved("error", new Kd(t, n, r)), this;
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
    const n = ra(t, this.socket.binaryType);
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
    const n = $d(t);
    return n.length ? "?" + n : "";
  }
}
class Zd extends oa {
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
    Bd(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Dd(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Gl()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Kl = !1;
try {
  Kl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Jd = Kl;
function Qd() {
}
class eh extends Zd {
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
let Nn = class io extends Ve {
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
    const n = $l(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = io.requestsCount++, io.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Qd, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete io.requests[this._index], this._xhr = null;
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
Nn.requestsCount = 0;
Nn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ja);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ft ? "pagehide" : "unload";
    addEventListener(e, Ja, !1);
  }
}
function Ja() {
  for (let e in Nn.requests)
    Nn.requests.hasOwnProperty(e) && Nn.requests[e].abort();
}
const th = function() {
  const e = Zl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class nh extends eh {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = th && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Nn(Zl, this.uri(), t);
  }
}
function Zl(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Jd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ft[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class rh extends oa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Jl ? {} : $l(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      na(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && Yo(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Gl()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const vi = ft.WebSocket || ft.MozWebSocket;
class oh extends rh {
  createSocket(t, n, r) {
    return Jl ? new vi(t, n, r) : n ? new vi(t, n) : new vi(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class ih extends oa {
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
        const n = zd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = Fd();
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
        o && Yo(() => {
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
const sh = {
  websocket: oh,
  webtransport: ih,
  polling: nh
}, ah = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ch = [
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
function Yi(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = ah.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[ch[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = lh(i, i.path), i.queryKey = uh(i, i.query), i;
}
function lh(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function uh(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const Xi = typeof addEventListener == "function" && typeof removeEventListener == "function", so = [];
Xi && addEventListener("offline", () => {
  so.forEach((e) => e());
}, !1);
class Jt extends Ve {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = Hd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Yi(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Yi(n.host).host);
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Gd(this.opts.query)), Xi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, so.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = Xl, n.transport = t, this.id && (n.sid = this.id);
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
    const t = this.opts.rememberUpgrade && Jt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Jt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (n += Yd(o)), r > 0 && n > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, Yo(() => {
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
    if (Jt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Xi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = so.indexOf(this._offlineEventListener);
        r !== -1 && so.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Jt.protocol = Xl;
class fh extends Jt {
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
    Jt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Jt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
let dh = class extends fh {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => sh[o]).filter((o) => !!o)), super(t, r);
  }
};
function hh(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Yi(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const ph = typeof ArrayBuffer == "function", xh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ql = Object.prototype.toString, mh = typeof Blob == "function" || typeof Blob < "u" && Ql.call(Blob) === "[object BlobConstructor]", gh = typeof File == "function" || typeof File < "u" && Ql.call(File) === "[object FileConstructor]";
function ia(e) {
  return ph && (e instanceof ArrayBuffer || xh(e)) || mh && e instanceof Blob || gh && e instanceof File;
}
function ao(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (ao(e[n]))
        return !0;
    return !1;
  }
  if (ia(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return ao(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && ao(e[n]))
      return !0;
  return !1;
}
function vh(e) {
  const t = [], n = e.data, r = e;
  return r.data = $i(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function $i(e, t) {
  if (!e)
    return e;
  if (ia(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = $i(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = $i(e[r], t));
    return n;
  }
  return e;
}
function yh(e, t) {
  return e.data = Gi(e.data, t), delete e.attachments, e;
}
function Gi(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Gi(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Gi(e[n], t));
  return e;
}
const bh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Sh = 5;
var de;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(de || (de = {}));
class wh {
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
    return (t.type === de.EVENT || t.type === de.ACK) && ao(t) ? this.encodeAsBinary({
      type: t.type === de.EVENT ? de.BINARY_EVENT : de.BINARY_ACK,
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
    return (t.type === de.BINARY_EVENT || t.type === de.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = vh(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function Qa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class sa extends Ve {
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
      const r = n.type === de.BINARY_EVENT;
      r || n.type === de.BINARY_ACK ? (n.type = r ? de.EVENT : de.ACK, this.reconstructor = new Eh(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (ia(t) || t.base64)
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
    if (de[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === de.BINARY_EVENT || r.type === de.BINARY_ACK) {
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
      if (sa.isPayloadValid(r.type, i))
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
      case de.CONNECT:
        return Qa(n);
      case de.DISCONNECT:
        return n === void 0;
      case de.CONNECT_ERROR:
        return typeof n == "string" || Qa(n);
      case de.EVENT:
      case de.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && bh.indexOf(n[0]) === -1);
      case de.ACK:
      case de.BINARY_ACK:
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
class Eh {
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
      const n = yh(this.reconPack, this.buffers);
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
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: sa,
  Encoder: wh,
  get PacketType() {
    return de;
  },
  protocol: Sh
}, Symbol.toStringTag, { value: "Module" }));
function xt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const Ch = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class eu extends Ve {
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
      xt(t, "open", this.onopen.bind(this)),
      xt(t, "packet", this.onpacket.bind(this)),
      xt(t, "error", this.onerror.bind(this)),
      xt(t, "close", this.onclose.bind(this))
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
    if (Ch.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: de.EVENT,
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
      type: de.CONNECT,
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
        case de.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case de.EVENT:
        case de.BINARY_EVENT:
          this.onevent(t);
          break;
        case de.ACK:
        case de.BINARY_ACK:
          this.onack(t);
          break;
        case de.DISCONNECT:
          this.ondisconnect();
          break;
        case de.CONNECT_ERROR:
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
        type: de.ACK,
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
function Qn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Qn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
Qn.prototype.reset = function() {
  this.attempts = 0;
};
Qn.prototype.setMin = function(e) {
  this.ms = e;
};
Qn.prototype.setMax = function(e) {
  this.max = e;
};
Qn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ki extends Ve {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Xo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Qn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || _h;
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
    this.engine = new dh(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = xt(n, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = xt(n, "error", i);
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
      xt(t, "ping", this.onping.bind(this)),
      xt(t, "data", this.ondata.bind(this)),
      xt(t, "error", this.onerror.bind(this)),
      xt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      xt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Yo(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new eu(this, t, n), this.nsps[t] = r), r;
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
const lr = {};
function co(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = hh(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = lr[o] && i in lr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Ki(r, t) : (lr[o] || (lr[o] = new Ki(r, t)), c = lr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(co, {
  Manager: Ki,
  Socket: eu,
  io: co,
  connect: co
});
var yi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ec;
function Ah() {
  return ec || (ec = 1, function(e) {
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
  }(yi)), yi.exports;
}
var Th = Ah();
const Ze = /* @__PURE__ */ m0(Th);
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mt.apply(null, arguments);
}
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
var Oh = Symbol.for("react.element"), Rh = Symbol.for("react.transitional.element"), Ph = Symbol.for("react.fragment");
function kh(e) {
  return (
    // Base object type
    e && Se(e) === "object" && // React Element type
    (e.$$typeof === Oh || e.$$typeof === Rh) && // React Fragment type
    e.type === Ph
  );
}
var Zi = {}, aa = [], Ih = function(t) {
  aa.push(t);
};
function ca(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = aa.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Nh(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = aa.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function tu() {
  Zi = {};
}
function nu(e, t, n) {
  !t && !Zi[n] && (e(!1, n), Zi[n] = !0);
}
function rn(e, t) {
  nu(ca, e, t);
}
function jh(e, t) {
  nu(Nh, e, t);
}
rn.preMessage = Ih;
rn.resetWarned = tu;
rn.noteOnce = jh;
function Mh(e, t) {
  if (Se(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ru(e) {
  var t = Mh(e, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function U(e, t, n) {
  return (t = ru(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tc(Object(n), !0).forEach(function(r) {
      U(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Lh(e) {
  return e && Se(e) === "object" && nc(e.nativeElement) ? e.nativeElement : nc(e) ? e : null;
}
function Dh(e) {
  var t = Lh(e);
  if (t)
    return t;
  if (e instanceof De.Component) {
    var n;
    return (n = Ta.findDOMNode) === null || n === void 0 ? void 0 : n.call(Ta, e);
  }
  return null;
}
var Ur = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Bh() {
  if (rc) return ve;
  rc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(x) {
    if (typeof x == "object" && x !== null) {
      var w = x.$$typeof;
      switch (w) {
        case e:
          switch (x = x.type, x) {
            case n:
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
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ve.ContextConsumer = s, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = c, ve.Fragment = n, ve.Lazy = u, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = r, ve.Suspense = l, ve.SuspenseList = f, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(x) {
    return h(x) === s;
  }, ve.isContextProvider = function(x) {
    return h(x) === i;
  }, ve.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, ve.isForwardRef = function(x) {
    return h(x) === c;
  }, ve.isFragment = function(x) {
    return h(x) === n;
  }, ve.isLazy = function(x) {
    return h(x) === u;
  }, ve.isMemo = function(x) {
    return h(x) === d;
  }, ve.isPortal = function(x) {
    return h(x) === t;
  }, ve.isProfiler = function(x) {
    return h(x) === o;
  }, ve.isStrictMode = function(x) {
    return h(x) === r;
  }, ve.isSuspense = function(x) {
    return h(x) === l;
  }, ve.isSuspenseList = function(x) {
    return h(x) === f;
  }, ve.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === l || x === f || x === y || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, ve.typeOf = h, ve;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oc;
function Fh() {
  return oc || (oc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, w = !1, b = !1, m;
    m = Symbol.for("react.module.reference");
    function A(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === o || b || I === r || I === l || I === f || w || I === y || g || h || x || typeof I == "object" && I !== null && (I.$$typeof === u || I.$$typeof === d || I.$$typeof === i || I.$$typeof === s || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === m || I.getModuleId !== void 0));
    }
    function v(I) {
      if (typeof I == "object" && I !== null) {
        var ue = I.$$typeof;
        switch (ue) {
          case e:
            var we = I.type;
            switch (we) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return we;
              default:
                var st = we && we.$$typeof;
                switch (st) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return st;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var O = s, C = i, N = e, B = c, Y = n, ne = u, K = d, D = t, V = o, q = r, X = l, ee = f, Z = !1, Q = !1;
    function oe(I) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(I) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(I) {
      return v(I) === s;
    }
    function re(I) {
      return v(I) === i;
    }
    function he(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function fe(I) {
      return v(I) === c;
    }
    function pe(I) {
      return v(I) === n;
    }
    function me(I) {
      return v(I) === u;
    }
    function k(I) {
      return v(I) === d;
    }
    function F(I) {
      return v(I) === t;
    }
    function P(I) {
      return v(I) === o;
    }
    function L(I) {
      return v(I) === r;
    }
    function S(I) {
      return v(I) === l;
    }
    function W(I) {
      return v(I) === f;
    }
    ye.ContextConsumer = O, ye.ContextProvider = C, ye.Element = N, ye.ForwardRef = B, ye.Fragment = Y, ye.Lazy = ne, ye.Memo = K, ye.Portal = D, ye.Profiler = V, ye.StrictMode = q, ye.Suspense = X, ye.SuspenseList = ee, ye.isAsyncMode = oe, ye.isConcurrentMode = ie, ye.isContextConsumer = J, ye.isContextProvider = re, ye.isElement = he, ye.isForwardRef = fe, ye.isFragment = pe, ye.isLazy = me, ye.isMemo = k, ye.isPortal = F, ye.isProfiler = P, ye.isStrictMode = L, ye.isSuspense = S, ye.isSuspenseList = W, ye.isValidElementType = A, ye.typeOf = v;
  }()), ye;
}
var ic;
function zh() {
  return ic || (ic = 1, process.env.NODE_ENV === "production" ? Ur.exports = Bh() : Ur.exports = Fh()), Ur.exports;
}
var bi = zh();
function ou(e, t, n) {
  var r = _.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Vh = Number(h0.split(".")[0]), iu = function(t, n) {
  typeof t == "function" ? t(n) : Se(t) === "object" && t && "current" in t && (t.current = n);
}, Hh = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      iu(s, i);
    });
  };
}, Uh = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (su(t) && Vh >= 19)
    return !0;
  var o = bi.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== bi.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== bi.ForwardRef);
};
function su(e) {
  return /* @__PURE__ */ d0(e) && !kh(e);
}
var Wh = function(t) {
  if (t && su(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function St(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ru(r.key), r);
  }
}
function wt(e, t, n) {
  return t && sc(e.prototype, t), n && sc(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ji(e, t) {
  return Ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ji(e, t);
}
function Pr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ji(e, t);
}
function Un(e) {
  return Un = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Un(e);
}
function la() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (la = function() {
    return !!e;
  })();
}
function vn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function au(e, t) {
  if (t && (Se(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vn(e);
}
function $o(e) {
  var t = la();
  return function() {
    var n, r = Un(e);
    if (t) {
      var o = Un(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return au(this, n);
  };
}
function Qi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qh(e) {
  if (Array.isArray(e)) return Qi(e);
}
function cu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ua(e, t) {
  if (e) {
    if (typeof e == "string") return Qi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qi(e, t) : void 0;
  }
}
function Yh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e) {
  return qh(e) || cu(e) || ua(e) || Yh();
}
var lu = function(t) {
  return +setTimeout(t, 16);
}, uu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (lu = function(t) {
  return window.requestAnimationFrame(t);
}, uu = function(t) {
  return window.cancelAnimationFrame(t);
});
var ac = 0, Go = /* @__PURE__ */ new Map();
function fu(e) {
  Go.delete(e);
}
var _o = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ac += 1;
  var r = ac;
  function o(i) {
    if (i === 0)
      fu(r), t();
    else {
      var s = lu(function() {
        o(i - 1);
      });
      Go.set(r, s);
    }
  }
  return o(n), r;
};
_o.cancel = function(e) {
  var t = Go.get(e);
  return fu(e), uu(t);
};
process.env.NODE_ENV !== "production" && (_o.ids = function() {
  return Go;
});
function du(e) {
  if (Array.isArray(e)) return e;
}
function Xh(e, t) {
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
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ce(e, t) {
  return du(e) || Xh(e, t) || ua(e, t) || hu();
}
function Sr(e) {
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
function qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $h(e, t) {
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
var cc = "data-rc-order", lc = "data-rc-priority", Gh = "rc-util-key", es = /* @__PURE__ */ new Map();
function pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Gh;
}
function Ko(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Kh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function fa(e) {
  return Array.from((es.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function xu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!qt())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = Kh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(cc, s), a && i && c.setAttribute(lc, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = Ko(t), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || fa(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(cc)))
          return !1;
        var y = Number(u.getAttribute(lc) || 0);
        return i >= y;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, f);
  } else
    l.appendChild(c);
  return c;
}
function mu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ko(t);
  return (t.styles || fa(n)).find(function(r) {
    return r.getAttribute(pu(t)) === e;
  });
}
function gu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = mu(e, t);
  if (n) {
    var r = Ko(t);
    r.removeChild(n);
  }
}
function Zh(e, t) {
  var n = es.get(e);
  if (!n || !$h(document, n)) {
    var r = xu("", t), o = r.parentNode;
    es.set(e, o), e.removeChild(r);
  }
}
function yn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ko(n), o = fa(r), i = z(z({}, n), {}, {
    styles: o
  });
  Zh(r, i);
  var s = mu(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var f = xu(e, i);
  return f.setAttribute(pu(i), t), f;
}
function Jh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function wr(e, t) {
  if (e == null) return {};
  var n, r, o = Jh(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Qh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (rn(!c, "Warning: There may be circular references"), c)
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
    if (i && s && Se(i) === "object" && Se(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var ep = "%";
function ts(e) {
  return e.join(ep);
}
var tp = /* @__PURE__ */ function() {
  function e(t) {
    St(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return wt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(ts(n));
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
      return this.opUpdate(ts(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), Wn = "data-token-hash", vt = "data-css-hash", np = "data-cache-path", Kt = "__cssinjs_instance__";
function rp() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(vt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Kt] = o[Kt] || e, o[Kt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(vt, "]"))).forEach(function(o) {
      var i = o.getAttribute(vt);
      if (r[i]) {
        if (o[Kt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new tp(e);
}
var kr = /* @__PURE__ */ _.createContext({
  hashPriority: "low",
  cache: rp(),
  defaultCache: !0
});
function op(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var da = /* @__PURE__ */ function() {
  function e() {
    St(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return wt(e, [{
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
            var d = ce(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ce(i, 1), a = s[0];
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
          return !op(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
U(da, "MAX_CACHE_SIZE", 20);
U(da, "MAX_CACHE_OFFSET", 5);
var uc = 0, vu = /* @__PURE__ */ function() {
  function e(t) {
    St(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = uc, t.length === 0 && ca(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), uc += 1;
  }
  return wt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), Si = new da();
function ns(e) {
  var t = Array.isArray(e) ? e : [e];
  return Si.has(t) || Si.set(t, new vu(t)), Si.get(t);
}
var ip = /* @__PURE__ */ new WeakMap(), wi = {};
function sp(e, t) {
  for (var n = ip, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(wi) || n.set(wi, e()), n.get(wi);
}
var fc = /* @__PURE__ */ new WeakMap();
function vr(e) {
  var t = fc.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof vu ? t += r.id : r && Se(r) === "object" ? t += vr(r) : t += r;
  }), t = Sr(t), fc.set(e, t)), t;
}
function dc(e, t) {
  return Sr("".concat(t, "_").concat(vr(e)));
}
var rs = qt();
function Co(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ao(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = z(z({}, o), {}, (r = {}, U(r, Wn, t), U(r, vt, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var lo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, ap = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ce(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, yu = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = ce(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, y = lo(f, r == null ? void 0 : r.prefix);
      o[y] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(y, ")");
    }
  }), [i, ap(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, hc = process.env.NODE_ENV !== "test" && qt() ? _.useLayoutEffect : _.useEffect, bu = function(t, n) {
  var r = _.useRef(!0);
  hc(function() {
    return t(r.current);
  }, n), hc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, cp = z({}, _), pc = cp.useInsertionEffect, lp = function(t, n, r) {
  _.useMemo(t, r), bu(function() {
    return n(!0);
  }, r);
}, up = pc ? function(e, t, n) {
  return pc(function() {
    return e(), t();
  }, n);
} : lp, fp = z({}, _), dp = fp.useInsertionEffect, hp = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ca(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return _.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, pp = function() {
  return function(t) {
    t();
  };
}, xp = typeof dp < "u" ? hp : pp;
function mp() {
  return !1;
}
var os = !1;
function gp() {
  return os;
}
const vp = process.env.NODE_ENV === "production" ? mp : gp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Wr && typeof Wr.webpackHotUpdate == "function") {
    var yp = Wr.webpackHotUpdate;
    Wr.webpackHotUpdate = function() {
      return os = !0, setTimeout(function() {
        os = !1;
      }, 0), yp.apply(void 0, arguments);
    };
  }
}
function ha(e, t, n, r, o) {
  var i = _.useContext(kr), s = i.cache, a = [e].concat(Wt(t)), c = ts(a), l = xp([c]), f = vp(), d = function(h) {
    s.opUpdate(c, function(x) {
      var w = x || [void 0, void 0], b = ce(w, 2), m = b[0], A = m === void 0 ? 0 : m, v = b[1], O = v;
      process.env.NODE_ENV !== "production" && v && f && (r == null || r(O, f), O = null);
      var C = O || n(), N = [A, C];
      return h ? h(N) : N;
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
  var y = u[1];
  return up(function() {
    o == null || o(y);
  }, function(g) {
    return d(function(h) {
      var x = ce(h, 2), w = x[0], b = x[1];
      return g && w === 0 && (o == null || o(y)), [w + 1, b];
    }), function() {
      s.opUpdate(c, function(h) {
        var x = h || [], w = ce(x, 2), b = w[0], m = b === void 0 ? 0 : b, A = w[1], v = m - 1;
        return v === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(A, !1));
        }), null) : [m - 1, A];
      });
    };
  }, [c]), y;
}
var bp = {}, Sp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", hn = /* @__PURE__ */ new Map();
function wp(e) {
  hn.set(e, (hn.get(e) || 0) + 1);
}
function Ep(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Wn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Kt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var _p = 0;
function Cp(e, t) {
  hn.set(e, (hn.get(e) || 0) - 1);
  var n = Array.from(hn.keys()), r = n.filter(function(o) {
    var i = hn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > _p && r.forEach(function(o) {
    Ep(o, t), hn.delete(o);
  });
}
var Ap = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = z(z({}, i), n);
  return o && (s = o(s)), s;
}, Su = "token";
function Tp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(kr), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? bp : c, f = n.formatToken, d = n.getComputedToken, u = n.cssVar, y = sp(function() {
    return Object.assign.apply(Object, [{}].concat(Wt(t)));
  }, t), g = vr(y), h = vr(l), x = u ? vr(u) : "", w = ha(Su, [a, e.id, g, h, x], function() {
    var b, m = d ? d(y, l, e) : Ap(y, l, e, f), A = z({}, m), v = "";
    if (u) {
      var O = yu(m, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), C = ce(O, 2);
      m = C[0], v = C[1];
    }
    var N = dc(m, a);
    m._tokenKey = N, A._tokenKey = dc(A, a);
    var B = (b = u == null ? void 0 : u.key) !== null && b !== void 0 ? b : N;
    m._themeKey = B, wp(B);
    var Y = "".concat(Sp, "-").concat(Sr(N));
    return m._hashId = Y, [m, Y, A, v, (u == null ? void 0 : u.key) || ""];
  }, function(b) {
    Cp(b[0]._themeKey, o);
  }, function(b) {
    var m = ce(b, 4), A = m[0], v = m[3];
    if (u && v) {
      var O = yn(v, Sr("css-variables-".concat(A._themeKey)), {
        mark: vt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Kt] = o, O.setAttribute(Wn, A._themeKey);
    }
  });
  return w;
}
var Op = function(t, n, r) {
  var o = ce(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, y = Ao(s, a, f, u, l);
  return [d, f, y];
}, Rp = {
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
}, wu = "comm", Eu = "rule", _u = "decl", Pp = "@import", kp = "@namespace", Ip = "@keyframes", Np = "@layer", Cu = Math.abs, pa = String.fromCharCode;
function Au(e) {
  return e.trim();
}
function uo(e, t, n) {
  return e.replace(t, n);
}
function jp(e, t, n) {
  return e.indexOf(t, n);
}
function jn(e, t) {
  return e.charCodeAt(t) | 0;
}
function qn(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function Mp(e) {
  return e.length;
}
function qr(e, t) {
  return t.push(e), e;
}
var Zo = 1, Yn = 1, Tu = 0, ht = 0, ze = 0, er = "";
function xa(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Zo, column: Yn, length: s, return: "", siblings: a };
}
function Lp() {
  return ze;
}
function Dp() {
  return ze = ht > 0 ? jn(er, --ht) : 0, Yn--, ze === 10 && (Yn = 1, Zo--), ze;
}
function yt() {
  return ze = ht < Tu ? jn(er, ht++) : 0, Yn++, ze === 10 && (Yn = 1, Zo++), ze;
}
function Zt() {
  return jn(er, ht);
}
function fo() {
  return ht;
}
function Jo(e, t) {
  return qn(er, e, t);
}
function Er(e) {
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
function Bp(e) {
  return Zo = Yn = 1, Tu = kt(er = e), ht = 0, [];
}
function Fp(e) {
  return er = "", e;
}
function Ei(e) {
  return Au(Jo(ht - 1, is(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zp(e) {
  for (; (ze = Zt()) && ze < 33; )
    yt();
  return Er(e) > 2 || Er(ze) > 3 ? "" : " ";
}
function Vp(e, t) {
  for (; --t && yt() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Jo(e, fo() + (t < 6 && Zt() == 32 && yt() == 32));
}
function is(e) {
  for (; yt(); )
    switch (ze) {
      // ] ) " '
      case e:
        return ht;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && is(ze);
        break;
      // (
      case 40:
        e === 41 && is(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return ht;
}
function Hp(e, t) {
  for (; yt() && e + ze !== 57; )
    if (e + ze === 84 && Zt() === 47)
      break;
  return "/*" + Jo(t, ht - 1) + "*" + pa(e === 47 ? e : yt());
}
function Up(e) {
  for (; !Er(Zt()); )
    yt();
  return Jo(e, ht);
}
function Wp(e) {
  return Fp(ho("", null, null, null, [""], e = Bp(e), 0, [0], e));
}
function ho(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, y = 0, g = 0, h = 1, x = 1, w = 1, b = 0, m = "", A = o, v = i, O = r, C = m; x; )
    switch (g = b, b = yt()) {
      // (
      case 40:
        if (g != 108 && jn(C, d - 1) == 58) {
          jp(C += uo(Ei(b), "&", "&\f"), "&\f", Cu(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Ei(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += zp(g);
        break;
      // \
      case 92:
        C += Vp(fo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            qr(qp(Hp(yt(), fo()), t, n, c), c), (Er(g || 1) == 5 || Er(Zt() || 1) == 5) && kt(C) && qn(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = kt(C) * w;
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
            w == -1 && (C = uo(C, /\f/g, "")), y > 0 && (kt(C) - d || h === 0 && g === 47) && qr(y > 32 ? mc(C + ";", r, n, d - 1, c) : mc(uo(C, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (qr(O = xc(C, t, n, l, f, o, a, m, A = [], v = [], d, i), i), b === 123)
              if (f === 0)
                ho(C, t, O, O, A, i, d, a, v);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (jn(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (jn(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? ho(e, O, O, r && qr(xc(e, O, O, 0, 0, o, a, m, o, A = [], d, v), v), o, v, d, a, r ? A : v) : ho(C, O, O, O, [""], v, 0, a, v);
              }
        }
        l = f = y = 0, h = w = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + kt(C), y = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && Dp() == 125)
            continue;
        }
        switch (C += pa(b), b * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (kt(C) - 1) * w, w = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (C += Ei(yt())), u = Zt(), f = d = kt(m = C += Up(fo())), b++;
            break;
          // -
          case 45:
            g === 45 && kt(C) == 2 && (h = 0);
        }
    }
  return i;
}
function xc(e, t, n, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, y = o === 0 ? i : [""], g = Mp(y), h = 0, x = 0, w = 0; h < r; ++h)
    for (var b = 0, m = qn(e, u + 1, u = Cu(x = s[h])), A = e; b < g; ++b)
      (A = Au(x > 0 ? y[b] + " " + m : uo(m, /&\f/g, y[b]))) && (c[w++] = A);
  return xa(e, t, n, o === 0 ? Eu : a, c, l, f, d);
}
function qp(e, t, n, r) {
  return xa(e, t, n, wu, pa(Lp()), qn(e, 2, -2), 0, r);
}
function mc(e, t, n, r, o) {
  return xa(e, t, n, _u, qn(e, 0, r), qn(e, r + 1, -1), r, o);
}
function ss(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Yp(e, t, n, r) {
  switch (e.type) {
    case Np:
      if (e.children.length) break;
    case Pp:
    case kp:
    case _u:
      return e.return = e.return || e.value;
    case wu:
      return "";
    case Ip:
      return e.return = e.value + "{" + ss(e.children, r) + "}";
    case Eu:
      if (!kt(e.value = e.props.join(","))) return "";
  }
  return kt(n = ss(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ou(e, t) {
  var n = t.path, r = t.parentSelectors;
  rn(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Xp = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Ou("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, $p = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Ou("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, gc = "data-ant-cssinjs-cache-path", Ru = "_FILE_STYLE__", bn, Pu = !0;
function Gp() {
  if (!bn && (bn = {}, qt())) {
    var e = document.createElement("div");
    e.className = gc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ce(i, 2), a = s[0], c = s[1];
      bn[a] = c;
    });
    var n = document.querySelector("style[".concat(gc, "]"));
    if (n) {
      var r;
      Pu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Kp(e) {
  return Gp(), !!bn[e];
}
function Zp(e) {
  var t = bn[e], n = null;
  if (t && qt())
    if (Pu)
      n = Ru;
    else {
      var r = document.querySelector("style[".concat(vt, '="').concat(bn[e], '"]'));
      r ? n = r.innerHTML : delete bn[e];
    }
  return [n, t];
}
var ku = "_skip_check_", Iu = "_multi_value_";
function po(e) {
  var t = ss(Wp(e), Yp);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Jp(e) {
  return Se(e) === "object" && e && (ku in e || Iu in e);
}
function vc(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Wt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Qp = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, f = n.hashPriority, d = n.transformers, u = d === void 0 ? [] : d, y = n.linters, g = y === void 0 ? [] : y, h = "", x = {};
  function w(A) {
    var v = A.getName(a);
    if (!x[v]) {
      var O = e(A.style, n, {
        root: !1,
        parentSelectors: s
      }), C = ce(O, 1), N = C[0];
      x[v] = "@keyframes ".concat(A.getName(a)).concat(N);
    }
  }
  function b(A) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return A.forEach(function(O) {
      Array.isArray(O) ? b(O, v) : O && v.push(O);
    }), v;
  }
  var m = b(Array.isArray(t) ? t : [t]);
  return m.forEach(function(A) {
    var v = typeof A == "string" && !o ? {} : A;
    if (typeof v == "string")
      h += "".concat(v, `
`);
    else if (v._keyframe)
      w(v);
    else {
      var O = u.reduce(function(C, N) {
        var B;
        return (N == null || (B = N.visit) === null || B === void 0 ? void 0 : B.call(N, C)) || C;
      }, v);
      Object.keys(O).forEach(function(C) {
        var N = O[C];
        if (Se(N) === "object" && N && (C !== "animationName" || !N._keyframe) && !Jp(N)) {
          var B = !1, Y = C.trim(), ne = !1;
          (o || i) && a ? Y.startsWith("@") ? B = !0 : Y === "&" ? Y = vc("", a, f) : Y = vc(C, a, f) : o && !a && (Y === "&" || Y === "") && (Y = "", ne = !0);
          var K = e(N, n, {
            root: ne,
            injectHash: B,
            parentSelectors: [].concat(Wt(s), [Y])
          }), D = ce(K, 2), V = D[0], q = D[1];
          x = z(z({}, x), q), h += "".concat(Y).concat(V);
        } else {
          let Z = function(Q, oe) {
            process.env.NODE_ENV !== "production" && (Se(N) !== "object" || !(N != null && N[ku])) && [Xp, $p].concat(Wt(g)).forEach(function(re) {
              return re(Q, oe, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var ie = Q.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), J = oe;
            !Rp[Q] && typeof J == "number" && J !== 0 && (J = "".concat(J, "px")), Q === "animationName" && oe !== null && oe !== void 0 && oe._keyframe && (w(oe), J = oe.getName(a)), h += "".concat(ie, ":").concat(J, ";");
          };
          var X, ee = (X = N == null ? void 0 : N.value) !== null && X !== void 0 ? X : N;
          Se(N) === "object" && N !== null && N !== void 0 && N[Iu] && Array.isArray(ee) ? ee.forEach(function(Q) {
            Z(C, Q);
          }) : Z(C, ee);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(A) {
    return "@layer ".concat(A, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
};
function Nu(e, t) {
  return Sr("".concat(e.join("%")).concat(t));
}
function ex() {
  return null;
}
var ju = "style";
function as(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, f = _.useContext(kr), d = f.autoClear, u = f.mock, y = f.defaultCache, g = f.hashPriority, h = f.container, x = f.ssrInline, w = f.transformers, b = f.linters, m = f.cache, A = f.layer, v = n._tokenKey, O = [v];
  A && O.push("layer"), O.push.apply(O, Wt(r));
  var C = rs;
  process.env.NODE_ENV !== "production" && u !== void 0 && (C = u === "client");
  var N = ha(
    ju,
    O,
    // Create cache if needed
    function() {
      var D = O.join("|");
      if (Kp(D)) {
        var V = Zp(D), q = ce(V, 2), X = q[0], ee = q[1];
        if (X)
          return [X, v, ee, {}, a, l];
      }
      var Z = t(), Q = Qp(Z, {
        hashId: o,
        hashPriority: g,
        layer: A ? i : void 0,
        path: r.join("-"),
        transformers: w,
        linters: b
      }), oe = ce(Q, 2), ie = oe[0], J = oe[1], re = po(ie), he = Nu(O, re);
      return [re, v, he, J, a, l];
    },
    // Remove cache if no need
    function(D, V) {
      var q = ce(D, 3), X = q[2];
      (V || d) && rs && gu(X, {
        mark: vt
      });
    },
    // Effect: Inject style here
    function(D) {
      var V = ce(D, 4), q = V[0];
      V[1];
      var X = V[2], ee = V[3];
      if (C && q !== Ru) {
        var Z = {
          mark: vt,
          prepend: A ? !1 : "queue",
          attachTo: h,
          priority: l
        }, Q = typeof s == "function" ? s() : s;
        Q && (Z.csp = {
          nonce: Q
        });
        var oe = [], ie = [];
        Object.keys(ee).forEach(function(re) {
          re.startsWith("@layer") ? oe.push(re) : ie.push(re);
        }), oe.forEach(function(re) {
          yn(po(ee[re]), "_layer-".concat(re), z(z({}, Z), {}, {
            prepend: !0
          }));
        });
        var J = yn(q, X, Z);
        J[Kt] = m.instanceId, J.setAttribute(Wn, v), process.env.NODE_ENV !== "production" && J.setAttribute(np, O.join("|")), ie.forEach(function(re) {
          yn(po(ee[re]), "_effect-".concat(re), Z);
        });
      }
    }
  ), B = ce(N, 3), Y = B[0], ne = B[1], K = B[2];
  return function(D) {
    var V;
    if (!x || C || !y)
      V = /* @__PURE__ */ _.createElement(ex, null);
    else {
      var q;
      V = /* @__PURE__ */ _.createElement("style", Mt({}, (q = {}, U(q, Wn, ne), U(q, vt, K), q), {
        dangerouslySetInnerHTML: {
          __html: Y
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, V, D);
  };
}
var tx = function(t, n, r) {
  var o = ce(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var y = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return y = Ao(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var x = po(c[h]), w = Ao(x, s, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? y = w + y : y += w;
    }
  }), [f, a, y];
}, Mu = "cssVar", nx = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, f = Qt(kr), d = f.cache.instanceId, u = f.container, y = a._tokenKey, g = [].concat(Wt(t.path), [r, l, y]), h = ha(Mu, g, function() {
    var x = n(), w = yu(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ce(w, 2), m = b[0], A = b[1], v = Nu(g, A);
    return [m, A, v, r];
  }, function(x) {
    var w = ce(x, 3), b = w[2];
    rs && gu(b, {
      mark: vt
    });
  }, function(x) {
    var w = ce(x, 3), b = w[1], m = w[2];
    if (b) {
      var A = yn(b, m, {
        mark: vt,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      A[Kt] = d, A.setAttribute(Wn, r);
    }
  });
  return h;
}, rx = function(t, n, r) {
  var o = ce(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = Ao(i, a, s, d, l);
  return [f, s, u];
}, ur;
ur = {}, U(ur, ju, tx), U(ur, Su, Op), U(ur, Mu, rx);
var Lu = /* @__PURE__ */ function() {
  function e(t, n) {
    St(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return wt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Pn(e) {
  return e.notSplit = !0, e;
}
Pn(["borderTop", "borderBottom"]), Pn(["borderTop"]), Pn(["borderBottom"]), Pn(["borderLeft", "borderRight"]), Pn(["borderLeft"]), Pn(["borderRight"]);
var ma = /* @__PURE__ */ Ks({});
function ox(e) {
  return du(e) || cu(e) || ua(e) || hu();
}
function cs(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Du(e, t, n, r) {
  if (!t.length)
    return n;
  var o = ox(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Wt(e) : a = z({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Du(a[i], s, n, r), a;
}
function _i(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !cs(e, t.slice(0, -1)) ? e : Du(e, t, n, r);
}
function ix(e) {
  return Se(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function yc(e) {
  return Array.isArray(e) ? [] : {};
}
var sx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ax() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = yc(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = cs(o, s), f = Array.isArray(l);
      if (f || ix(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = cs(r, s);
          f ? r = _i(r, s, []) : (!d || Se(d) !== "object") && (r = _i(r, s, yc(l))), sx(l).forEach(function(u) {
            i([].concat(Wt(s), [u]), c);
          });
        }
      } else
        r = _i(r, s, l);
    }
    i([]);
  }), r;
}
function Bu() {
}
let zt = null;
function cx() {
  zt = null, tu();
}
let ga = Bu;
process.env.NODE_ENV !== "production" && (ga = (e, t, n) => {
  rn(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && cx();
});
const Fu = /* @__PURE__ */ _.createContext({}), tr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = _.useContext(Fu), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = zt;
        zt || (zt = {}), zt[e] = zt[e] || [], zt[e].includes(i || "") || zt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", zt);
      } else
        process.env.NODE_ENV !== "production" && ga(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Bu, e;
}, Qo = ga, lx = /* @__PURE__ */ Ks(void 0), it = "${label} is not a valid ${type}", ei = {
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
Object.assign({}, ei.Modal);
let xo = [];
const bc = () => xo.reduce((e, t) => Object.assign(Object.assign({}, e), t), ei.Modal);
function ux(e) {
  if (e) {
    const t = Object.assign({}, e);
    return xo.push(t), bc(), () => {
      xo = xo.filter((n) => n !== t), bc();
    };
  }
  Object.assign({}, ei.Modal);
}
const zu = /* @__PURE__ */ Ks(void 0), Vu = "internalMark", Hu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = tr("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Vu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => ux(t == null ? void 0 : t.Modal), [t]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ _.createElement(zu.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Hu.displayName = "LocaleProvider");
const Uu = {
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
}, _r = Object.assign(Object.assign({}, Uu), {
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
function Ci(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Sc = (e, t, n) => n === 0 ? e : e / 100;
function fr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Le {
  constructor(t) {
    U(this, "isValid", !0), U(this, "r", 0), U(this, "g", 0), U(this, "b", 0), U(this, "a", 1), U(this, "_h", void 0), U(this, "_s", void 0), U(this, "_l", void 0), U(this, "_v", void 0), U(this, "_max", void 0), U(this, "_min", void 0), U(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Le)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = fr(t.r), this.g = fr(t.g), this.b = fr(t.b), this.a = typeof t.a == "number" ? fr(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = We(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => We((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = We(this.a * 255).toString(16);
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
    const t = this.getHue(), n = We(this.getSaturation() * 100), r = We(this.getLightness() * 100);
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
    return o[t] = fr(n, r), o;
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
      const u = We(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = We((i + d) * 255), this.g = We((s + d) * 255), this.b = We((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = We(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = We(r * (1 - n) * 255), f = We(r * (1 - n * c) * 255), d = We(r * (1 - n * (1 - c)) * 255);
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
    const n = Ci(t, Sc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ci(t, Sc);
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
      o.includes("%") ? We(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Yr = 2, wc = 0.16, fx = 0.05, dx = 0.05, hx = 0.15, Wu = 5, qu = 4, px = [{
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
function Ec(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Yr * t : Math.round(e.h) + Yr * t : r = n ? Math.round(e.h) + Yr * t : Math.round(e.h) - Yr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function _c(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - wc * t : t === qu ? r = e.s + wc : r = e.s + fx * t, r > 1 && (r = 1), n && t === Wu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Cc(e, t, n) {
  var r;
  return n ? r = e.v + dx * t : r = e.v - hx * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Cr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Le(e), o = r.toHsv(), i = Wu; i > 0; i -= 1) {
    var s = new Le({
      h: Ec(o, i, !0),
      s: _c(o, i, !0),
      v: Cc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= qu; a += 1) {
    var c = new Le({
      h: Ec(o, a),
      s: _c(o, a),
      v: Cc(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? px.map(function(l) {
    var f = l.index, d = l.amount;
    return new Le(t.backgroundColor || "#141414").mix(n[f], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var Ai = {
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
}, ls = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ls.primary = ls[5];
var us = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
us.primary = us[5];
var fs = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
fs.primary = fs[5];
var ds = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ds.primary = ds[5];
var hs = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
hs.primary = hs[5];
var ps = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ps.primary = ps[5];
var xs = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
xs.primary = xs[5];
var ms = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ms.primary = ms[5];
var To = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
To.primary = To[5];
var gs = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
gs.primary = gs[5];
var vs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
vs.primary = vs[5];
var ys = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ys.primary = ys[5];
var bs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
bs.primary = bs[5];
var Ti = {
  red: ls,
  volcano: us,
  orange: fs,
  gold: ds,
  yellow: hs,
  lime: ps,
  green: xs,
  cyan: ms,
  blue: To,
  geekblue: gs,
  purple: vs,
  magenta: ys,
  grey: bs
};
function xx(e, t) {
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
  } = e, d = n(c), u = n(o), y = n(i), g = n(s), h = n(a), x = r(l, f), w = e.colorLink || e.colorInfo, b = n(w), m = new Le(g[1]).mix(new Le(g[3]), 50).toHexString();
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
    colorErrorBgFilledHover: m,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: y[1],
    colorWarningBgHover: y[2],
    colorWarningBorder: y[3],
    colorWarningBorderHover: y[4],
    colorWarningHover: y[4],
    colorWarning: y[6],
    colorWarningActive: y[7],
    colorWarningTextHover: y[8],
    colorWarningText: y[9],
    colorWarningTextActive: y[10],
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
const mx = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function gx(e) {
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
  }, mx(r));
}
const vx = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function yx(e) {
  return (e + 8) / e;
}
function bx(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: yx(n)
  }));
}
const Sx = (e) => {
  const t = bx(e), n = t.map((f) => f.size), r = t.map((f) => f.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function wx(e) {
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
const ut = (e, t) => new Le(e).setA(t).toRgbString(), dr = (e, t) => new Le(e).darken(t).toHexString(), Ex = (e) => {
  const t = Cr(e);
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
}, _x = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ut(r, 0.88),
    colorTextSecondary: ut(r, 0.65),
    colorTextTertiary: ut(r, 0.45),
    colorTextQuaternary: ut(r, 0.25),
    colorFill: ut(r, 0.15),
    colorFillSecondary: ut(r, 0.06),
    colorFillTertiary: ut(r, 0.04),
    colorFillQuaternary: ut(r, 0.02),
    colorBgSolid: ut(r, 1),
    colorBgSolidHover: ut(r, 0.75),
    colorBgSolidActive: ut(r, 0.95),
    colorBgLayout: dr(n, 4),
    colorBgContainer: dr(n, 0),
    colorBgElevated: dr(n, 0),
    colorBgSpotlight: ut(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: dr(n, 15),
    colorBorderSecondary: dr(n, 6)
  };
};
function Cx(e) {
  Ai.pink = Ai.magenta, Ti.pink = Ti.magenta;
  const t = Object.keys(Uu).map((n) => {
    const r = e[n] === Ai[n] ? Ti[n] : Cr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), xx(e, {
    generateColorPalettes: Ex,
    generateNeutralColorPalettes: _x
  })), Sx(e.fontSize)), wx(e)), vx(e)), gx(e));
}
const Yu = ns(Cx), Ss = {
  token: _r,
  override: {
    override: _r
  },
  hashed: !0
}, Xu = /* @__PURE__ */ De.createContext(Ss), ws = "ant", va = "anticon", Ax = (e, t) => t || (e ? `${ws}-${e}` : ws), en = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Ax,
  iconPrefixCls: va
}), {
  Consumer: $v
} = en, Ac = {};
function $u(e) {
  const t = _.useContext(en), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: Ac,
    styles: Ac
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Tx = `-ant-${Date.now()}-${Math.random()}`;
function Ox(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Le(s), l = Cr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Le(t.primaryColor), a = Cr(s.toRgbString());
    a.forEach((l, f) => {
      n[`primary-${f + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Le(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Rx(e, t) {
  const n = Ox(e, t);
  qt() ? yn(n, `${Tx}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Es = /* @__PURE__ */ _.createContext(!1), Px = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = _.useContext(Es);
  return /* @__PURE__ */ _.createElement(Es.Provider, {
    value: n ?? r
  }, t);
}, Ar = /* @__PURE__ */ _.createContext(void 0), kx = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = _.useContext(Ar);
  return /* @__PURE__ */ _.createElement(Ar.Provider, {
    value: n || r
  }, t);
};
function Ix() {
  const e = Qt(Es), t = Qt(Ar);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Gu = /* @__PURE__ */ wt(function e() {
  St(this, e);
}), Ku = "CALC_UNIT", Nx = new RegExp(Ku, "g");
function Oi(e) {
  return typeof e == "number" ? "".concat(e).concat(Ku) : e;
}
var jx = /* @__PURE__ */ function(e) {
  Pr(n, e);
  var t = $o(n);
  function n(r, o) {
    var i;
    St(this, n), i = t.call(this), U(vn(i), "result", ""), U(vn(i), "unitlessCssVar", void 0), U(vn(i), "lowPriority", void 0);
    var s = Se(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Oi(r) : s === "string" && (i.result = r), i;
  }
  return wt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Oi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Oi(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Nx, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Gu), Mx = /* @__PURE__ */ function(e) {
  Pr(n, e);
  var t = $o(n);
  function n(r) {
    var o;
    return St(this, n), o = t.call(this), U(vn(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return wt(n, [{
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
}(Gu), Lx = function(t, n) {
  var r = t === "css" ? jx : Mx;
  return function(o) {
    return new r(o, n);
  };
}, Tc = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function _s(e) {
  var t = _.useRef();
  t.current = e;
  var n = _.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Cs(e) {
  var t = _.useRef(!1), n = _.useState(e), r = ce(n, 2), o = r[0], i = r[1];
  _.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function Oc(e, t, n, r) {
  var o = z({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ce(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && rn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = z(z({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", As = !0;
function ti() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Zu)
    return Object.assign.apply(Object, [{}].concat(t));
  As = !1;
  var r = {};
  return t.forEach(function(o) {
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
  }), As = !0, r;
}
var Rc = {};
function Dx() {
}
var Bx = function(t) {
  var n, r = t, o = Dx;
  return Zu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (As) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Rc[s] = {
      global: Array.from(n),
      component: z(z({}, (c = Rc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function Pc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(ti(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Fx(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Co(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Co(i);
      }).join(","), ")");
    }
  };
}
var zx = 1e3 * 60 * 10, Vx = /* @__PURE__ */ function() {
  function e() {
    St(this, e), U(this, "map", /* @__PURE__ */ new Map()), U(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), U(this, "nextID", 0), U(this, "lastAccessBeat", /* @__PURE__ */ new Map()), U(this, "accessBeat", 0);
  }
  return wt(e, [{
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
        return i && Se(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Se(i), "_").concat(i);
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
          r - o > zx && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), kc = new Vx();
function Hx(e, t) {
  return De.useMemo(function() {
    var n = kc.get(t);
    if (n)
      return n;
    var r = e();
    return kc.set(t, r), r;
  }, t);
}
var Ux = function() {
  return {};
};
function Wx(e) {
  var t = e.useCSP, n = t === void 0 ? Ux : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(u, y, g, h) {
    var x = Array.isArray(u) ? u[0] : u;
    function w(N) {
      return "".concat(String(x)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var b = (h == null ? void 0 : h.unitless) || {}, m = typeof a == "function" ? a(u) : {}, A = z(z({}, m), {}, U({}, w("zIndexPopup"), !0));
    Object.keys(b).forEach(function(N) {
      A[w(N)] = b[N];
    });
    var v = z(z({}, h), {}, {
      unitless: A,
      prefixToken: w
    }), O = f(u, y, g, v), C = l(x, g, v);
    return function(N) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, Y = O(N, B), ne = ce(Y, 2), K = ne[1], D = C(B), V = ce(D, 2), q = V[0], X = V[1];
      return [q, K, X];
    };
  }
  function l(u, y, g) {
    var h = g.unitless, x = g.injectStyle, w = x === void 0 ? !0 : x, b = g.prefixToken, m = g.ignore, A = function(C) {
      var N = C.rootCls, B = C.cssVar, Y = B === void 0 ? {} : B, ne = r(), K = ne.realToken;
      return nx({
        path: [u],
        prefix: Y.prefix,
        key: Y.key,
        unitless: h,
        ignore: m,
        token: K,
        scope: N
      }, function() {
        var D = Pc(u, K, y), V = Oc(u, K, D, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(D).forEach(function(q) {
          V[b(q)] = V[q], delete V[q];
        }), V;
      }), null;
    }, v = function(C) {
      var N = r(), B = N.cssVar;
      return [function(Y) {
        return w && B ? /* @__PURE__ */ De.createElement(De.Fragment, null, /* @__PURE__ */ De.createElement(A, {
          rootCls: C,
          cssVar: B,
          component: u
        }), Y) : Y;
      }, B == null ? void 0 : B.key];
    };
    return v;
  }
  function f(u, y, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(u) ? u : [u, u], w = ce(x, 1), b = w[0], m = x.join("-"), A = e.layer || {
      name: "antd"
    };
    return function(v) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, C = r(), N = C.theme, B = C.realToken, Y = C.hashId, ne = C.token, K = C.cssVar, D = o(), V = D.rootPrefixCls, q = D.iconPrefixCls, X = n(), ee = K ? "css" : "js", Z = Hx(function() {
        var he = /* @__PURE__ */ new Set();
        return K && Object.keys(h.unitless || {}).forEach(function(fe) {
          he.add(lo(fe, K.prefix)), he.add(lo(fe, Tc(b, K.prefix)));
        }), Lx(ee, he);
      }, [ee, b, K == null ? void 0 : K.prefix]), Q = Fx(ee), oe = Q.max, ie = Q.min, J = {
        theme: N,
        token: ne,
        hashId: Y,
        nonce: function() {
          return X.nonce;
        },
        clientOnly: h.clientOnly,
        layer: A,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && as(z(z({}, J), {}, {
        clientOnly: !1,
        path: ["Shared", V]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: V,
            iconPrefixCls: q
          },
          csp: X
        });
      });
      var re = as(z(z({}, J), {}, {
        path: [m, v, q]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var he = Bx(ne), fe = he.token, pe = he.flush, me = Pc(b, B, g), k = ".".concat(v), F = Oc(b, B, me, {
          deprecatedTokens: h.deprecatedTokens
        });
        K && me && Se(me) === "object" && Object.keys(me).forEach(function(W) {
          me[W] = "var(".concat(lo(W, Tc(b, K.prefix)), ")");
        });
        var P = ti(fe, {
          componentCls: k,
          prefixCls: v,
          iconCls: ".".concat(q),
          antCls: ".".concat(V),
          calc: Z,
          // @ts-ignore
          max: oe,
          // @ts-ignore
          min: ie
        }, K ? me : F), L = y(P, {
          hashId: Y,
          prefixCls: v,
          rootPrefixCls: V,
          iconPrefixCls: q
        });
        pe(b, F);
        var S = typeof s == "function" ? s(P, v, O, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : S, L];
      });
      return [re, Y];
    };
  }
  function d(u, y, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = f(u, y, g, z({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), w = function(m) {
      var A = m.prefixCls, v = m.rootCls, O = v === void 0 ? A : v;
      return x(A, O), null;
    };
    return process.env.NODE_ENV !== "production" && (w.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), w;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const qx = "5.24.6";
function Ri(e) {
  return e >= 0 && e <= 255;
}
function Xr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Le(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Le(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((n - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Ri(f) && Ri(d) && Ri(u))
      return new Le({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Le({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Yx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ju(e) {
  const {
    override: t
  } = e, n = Yx(e, ["override"]), r = Object.assign({}, t);
  Object.keys(_r).forEach((u) => {
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
    colorSplit: Xr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Xr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Xr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Xr(o.colorPrimaryBg, o.colorBgContainer),
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
var Ic = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Qu = {
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
}, Xx = {
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
}, $x = {
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
}, ef = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = Ic(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Ju(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = Ic(l, ["theme"]);
    let u = d;
    f && (u = ef(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = u;
  }), s;
};
function ya() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = De.useContext(Xu), i = `${qx}-${t || ""}`, s = n || Yu, [a, c, l] = Tp(s, [_r, e], {
    salt: i,
    override: r,
    getComputedToken: ef,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ju,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Qu,
      ignore: Xx,
      preserve: $x
    }
  });
  return [s, l, t ? c : "", a, o];
}
const tf = function(e) {
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
}, Gx = () => ({
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
}), Kx = (e) => ({
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
}), Zx = (e, t, n, r) => {
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
}, nf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Gx()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: ba
} = Wx({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Qt(en);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = ya();
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
    } = Qt(en);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = Kx(e);
    return [r, {
      "&": r
    }, nf((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : va)];
  },
  getCommonStyle: Zx,
  getCompUnitless: () => Qu
}), Jx = (e, t) => {
  const [n, r] = ya();
  return as({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [nf(e)]);
}, Qx = Object.assign({}, _), {
  useId: Nc
} = Qx, em = () => "", tm = typeof Nc > "u" ? em : Nc;
function nm(e, t, n) {
  var r, o;
  const i = tr("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, Ss), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : Ss.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = tm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ou(() => {
    var l, f;
    if (!e)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), e.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, y = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((f = s.cssVar) === null || f === void 0 ? void 0 : f.key) || u
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: y
    });
  }, [s, a], (l, f) => l.some((d, u) => {
    const y = f[u];
    return !Qh(d, y, !0);
  }));
}
var rm = ["children"], rf = /* @__PURE__ */ _.createContext({});
function om(e) {
  var t = e.children, n = wr(e, rm);
  return /* @__PURE__ */ _.createElement(rf.Provider, {
    value: n
  }, t);
}
var im = /* @__PURE__ */ function(e) {
  Pr(n, e);
  var t = $o(n);
  function n() {
    return St(this, n), t.apply(this, arguments);
  }
  return wt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(_.Component);
function sm(e) {
  var t = _.useReducer(function(a) {
    return a + 1;
  }, 0), n = ce(t, 2), r = n[1], o = _.useRef(e), i = _s(function() {
    return o.current;
  }), s = _s(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Gt = "none", $r = "appear", Gr = "enter", Kr = "leave", jc = "none", mt = "prepare", kn = "start", In = "active", Sa = "end", of = "prepared";
function Mc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function am(e, t) {
  var n = {
    animationend: Mc("Animation", "AnimationEnd"),
    transitionend: Mc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var cm = am(qt(), typeof window < "u" ? window : {}), sf = {};
if (qt()) {
  var lm = document.createElement("div");
  sf = lm.style;
}
var Zr = {};
function af(e) {
  if (Zr[e])
    return Zr[e];
  var t = cm[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in sf)
        return Zr[e] = t[i], Zr[e];
    }
  return "";
}
var cf = af("animationend"), lf = af("transitionend"), uf = !!(cf && lf), Lc = cf || "animationend", Dc = lf || "transitionend";
function Bc(e, t) {
  if (!e) return null;
  if (Se(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const um = function(e) {
  var t = Ue();
  function n(o) {
    o && (o.removeEventListener(Dc, e), o.removeEventListener(Lc, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Dc, e), o.addEventListener(Lc, e), t.current = o);
  }
  return _.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var ff = qt() ? p0 : et;
const fm = function() {
  var e = _.useRef(null);
  function t() {
    _o.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = _o(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return _.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var dm = [mt, kn, In, Sa], hm = [mt, of], df = !1, pm = !0;
function hf(e) {
  return e === In || e === Sa;
}
const xm = function(e, t, n) {
  var r = Cs(jc), o = ce(r, 2), i = o[0], s = o[1], a = fm(), c = ce(a, 2), l = c[0], f = c[1];
  function d() {
    s(mt, !0);
  }
  var u = t ? hm : dm;
  return ff(function() {
    if (i !== jc && i !== Sa) {
      var y = u.indexOf(i), g = u[y + 1], h = n(i);
      h === df ? s(g, !0) : g && l(function(x) {
        function w() {
          x.isCanceled() || s(g, !0);
        }
        h === !0 ? w() : Promise.resolve(h).then(w);
      });
    }
  }, [e, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function mm(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, y = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, w = r.onLeaveStart, b = r.onAppearActive, m = r.onEnterActive, A = r.onLeaveActive, v = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, N = r.onVisibleChanged, B = Cs(), Y = ce(B, 2), ne = Y[0], K = Y[1], D = sm(Gt), V = ce(D, 2), q = V[0], X = V[1], ee = Cs(null), Z = ce(ee, 2), Q = Z[0], oe = Z[1], ie = q(), J = Ue(!1), re = Ue(null);
  function he() {
    return n();
  }
  var fe = Ue(!1);
  function pe() {
    X(Gt), oe(null, !0);
  }
  var me = _s(function(Me) {
    var Ce = q();
    if (Ce !== Gt) {
      var Xe = he();
      if (!(Me && !Me.deadline && Me.target !== Xe)) {
        var pt = fe.current, at;
        Ce === $r && pt ? at = v == null ? void 0 : v(Xe, Me) : Ce === Gr && pt ? at = O == null ? void 0 : O(Xe, Me) : Ce === Kr && pt && (at = C == null ? void 0 : C(Xe, Me)), pt && at !== !1 && pe();
      }
    }
  }), k = um(me), F = ce(k, 1), P = F[0], L = function(Ce) {
    switch (Ce) {
      case $r:
        return U(U(U({}, mt, u), kn, h), In, b);
      case Gr:
        return U(U(U({}, mt, y), kn, x), In, m);
      case Kr:
        return U(U(U({}, mt, g), kn, w), In, A);
      default:
        return {};
    }
  }, S = _.useMemo(function() {
    return L(ie);
  }, [ie]), W = xm(ie, !e, function(Me) {
    if (Me === mt) {
      var Ce = S[mt];
      return Ce ? Ce(he()) : df;
    }
    if (we in S) {
      var Xe;
      oe(((Xe = S[we]) === null || Xe === void 0 ? void 0 : Xe.call(S, he(), null)) || null);
    }
    return we === In && ie !== Gt && (P(he()), f > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      me({
        deadline: !0
      });
    }, f))), we === of && pe(), pm;
  }), I = ce(W, 2), ue = I[0], we = I[1], st = hf(we);
  fe.current = st;
  var _t = Ue(null);
  ff(function() {
    if (!(J.current && _t.current === t)) {
      K(t);
      var Me = J.current;
      J.current = !0;
      var Ce;
      !Me && t && a && (Ce = $r), Me && t && i && (Ce = Gr), (Me && !t && l || !Me && d && !t && l) && (Ce = Kr);
      var Xe = L(Ce);
      Ce && (e || Xe[mt]) ? (X(Ce), ue()) : X(Gt), _t.current = t;
    }
  }, [t]), et(function() {
    // Cancel appear
    (ie === $r && !a || // Cancel enter
    ie === Gr && !i || // Cancel leave
    ie === Kr && !l) && X(Gt);
  }, [a, i, l]), et(function() {
    return function() {
      J.current = !1, clearTimeout(re.current);
    };
  }, []);
  var ot = _.useRef(!1);
  et(function() {
    ne && (ot.current = !0), ne !== void 0 && ie === Gt && ((ot.current || ne) && (N == null || N(ne)), ot.current = !0);
  }, [ne, ie]);
  var Ct = Q;
  return S[mt] && we === kn && (Ct = z({
    transition: "none"
  }, Ct)), [ie, we, Ct, ne ?? t];
}
function gm(e) {
  var t = e;
  Se(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, y = o.leavedClassName, g = o.eventProps, h = _.useContext(rf), x = h.motion, w = n(o, x), b = Ue(), m = Ue();
    function A() {
      try {
        return b.current instanceof HTMLElement ? b.current : Dh(m.current);
      } catch {
        return null;
      }
    }
    var v = mm(w, a, A, o), O = ce(v, 4), C = O[0], N = O[1], B = O[2], Y = O[3], ne = _.useRef(Y);
    Y && (ne.current = !0);
    var K = _.useCallback(function(Z) {
      b.current = Z, iu(i, Z);
    }, [i]), D, V = z(z({}, g), {}, {
      visible: a
    });
    if (!d)
      D = null;
    else if (C === Gt)
      Y ? D = d(z({}, V), K) : !l && ne.current && y ? D = d(z(z({}, V), {}, {
        className: y
      }), K) : f || !l && !y ? D = d(z(z({}, V), {}, {
        style: {
          display: "none"
        }
      }), K) : D = null;
    else {
      var q;
      N === mt ? q = "prepare" : hf(N) ? q = "active" : N === kn && (q = "start");
      var X = Bc(u, "".concat(C, "-").concat(q));
      D = d(z(z({}, V), {}, {
        className: Ze(Bc(u, C), U(U({}, X, X && q), u, typeof u == "string")),
        style: B
      }), K);
    }
    if (/* @__PURE__ */ _.isValidElement(D) && Uh(D)) {
      var ee = Wh(D);
      ee || (D = /* @__PURE__ */ _.cloneElement(D, {
        ref: K
      }));
    }
    return /* @__PURE__ */ _.createElement(im, {
      ref: m
    }, D);
  });
  return r.displayName = "CSSMotion", r;
}
const pf = gm(uf);
var Ts = "add", Os = "keep", Rs = "remove", Pi = "removed";
function vm(e) {
  var t;
  return e && Se(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, z(z({}, t), {}, {
    key: String(t.key)
  });
}
function Ps() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(vm);
}
function ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = Ps(e), s = Ps(t);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = s[d];
      if (u.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(y) {
          return z(z({}, y), {}, {
            status: Ts
          });
        })), r = d), n.push(z(z({}, u), {}, {
          status: Os
        })), r += 1, f = !0;
        break;
      }
    }
    f || n.push(z(z({}, l), {}, {
      status: Rs
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return z(z({}, l), {}, {
      status: Ts
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
      return d !== l || u !== Rs;
    }), n.forEach(function(f) {
      f.key === l && (f.status = Os);
    });
  }), n;
}
var bm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sm = ["status"], wm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Em(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pf, n = /* @__PURE__ */ function(r) {
    Pr(i, r);
    var o = $o(i);
    function i() {
      var s;
      St(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), U(vn(s), "state", {
        keyEntities: []
      }), U(vn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var u = d.keyEntities.map(function(y) {
            return y.key !== f ? y : z(z({}, y), {}, {
              status: Pi
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = s.state.keyEntities, u = d.filter(function(y) {
            var g = y.status;
            return g !== Pi;
          }).length;
          u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return wt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var y = wr(l, bm), g = f || _.Fragment, h = {};
        return wm.forEach(function(x) {
          h[x] = y[x], delete y[x];
        }), delete y.keys, /* @__PURE__ */ _.createElement(g, y, c.map(function(x, w) {
          var b = x.status, m = wr(x, Sm), A = b === Ts || b === Os;
          return /* @__PURE__ */ _.createElement(t, Mt({}, h, {
            key: m.key,
            visible: A,
            eventProps: m,
            onVisibleChanged: function(O) {
              u == null || u(O, {
                key: m.key
              }), O || a.removeKey(m.key);
            }
          }), function(v, O) {
            return d(z(z({}, v), {}, {
              index: w
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = Ps(l), u = ym(f, d);
        return {
          keyEntities: u.filter(function(y) {
            var g = f.find(function(h) {
              var x = h.key;
              return y.key === x;
            });
            return !(g && g.status === Pi && y.status === Rs);
          })
        };
      }
    }]), i;
  }(_.Component);
  return U(n, "defaultProps", {
    component: "div"
  }), n;
}
Em(uf);
function _m(e) {
  const {
    children: t
  } = e, [, n] = ya(), {
    motion: r
  } = n, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(om, {
    motion: r
  }, t) : t;
}
const xf = /* @__PURE__ */ _.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return tr("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (xf.displayName = "PropWarning");
const Cm = process.env.NODE_ENV !== "production" ? xf : () => null;
var Am = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let ks = !1;
process.env.NODE_ENV;
const Tm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let mf;
function Om() {
  return mf || ws;
}
function Rm(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Pm = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (mf = t), r && Rm(r) && (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Rx(Om(), r));
}, km = (e) => {
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
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: g,
    popupOverflow: h,
    legacyLocale: x,
    parentContext: w,
    iconPrefixCls: b,
    theme: m,
    componentDisabled: A,
    segmented: v,
    statistic: O,
    spin: C,
    calendar: N,
    carousel: B,
    cascader: Y,
    collapse: ne,
    typography: K,
    checkbox: D,
    descriptions: V,
    divider: q,
    drawer: X,
    skeleton: ee,
    steps: Z,
    image: Q,
    layout: oe,
    list: ie,
    mentions: J,
    modal: re,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: me,
    menu: k,
    pagination: F,
    input: P,
    textArea: L,
    empty: S,
    badge: W,
    radio: I,
    rate: ue,
    switch: we,
    transfer: st,
    avatar: _t,
    message: ot,
    tag: Ct,
    table: Me,
    card: Ce,
    tabs: Xe,
    timeline: pt,
    timePicker: at,
    upload: sn,
    notification: an,
    tree: Cn,
    colorPicker: cn,
    datePicker: j,
    rangePicker: E,
    flex: Be,
    wave: _e,
    dropdown: Te,
    warning: G,
    tour: Ee,
    tooltip: ct,
    popover: At,
    popconfirm: An,
    floatButtonGroup: Tt,
    variant: Lt,
    inputNumber: Dt,
    treeSelect: Oe
  } = e, Ge = _.useCallback((Pe, p) => {
    const {
      prefixCls: R
    } = e;
    if (p)
      return p;
    const M = R || w.getPrefixCls("");
    return Pe ? `${M}-${Pe}` : M;
  }, [w.getPrefixCls, e.prefixCls]), lt = b || w.iconPrefixCls || va, Ot = n || w.csp;
  Jx(lt, Ot);
  const ln = nm(m, w.theme, {
    prefixCls: Ge("")
  });
  process.env.NODE_ENV !== "production" && (ks = ks || !!ln);
  const Tn = {
    csp: Ot,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || x,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? y,
    popupOverflow: h,
    getPrefixCls: Ge,
    iconPrefixCls: lt,
    theme: ln,
    segmented: v,
    statistic: O,
    spin: C,
    calendar: N,
    carousel: B,
    cascader: Y,
    collapse: ne,
    typography: K,
    checkbox: D,
    descriptions: V,
    divider: q,
    drawer: X,
    skeleton: ee,
    steps: Z,
    image: Q,
    input: P,
    textArea: L,
    layout: oe,
    list: ie,
    mentions: J,
    modal: re,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: me,
    menu: k,
    pagination: F,
    empty: S,
    badge: W,
    radio: I,
    rate: ue,
    switch: we,
    transfer: st,
    avatar: _t,
    message: ot,
    tag: Ct,
    table: Me,
    card: Ce,
    tabs: Xe,
    timeline: pt,
    timePicker: at,
    upload: sn,
    notification: an,
    tree: Cn,
    colorPicker: cn,
    datePicker: j,
    rangePicker: E,
    flex: Be,
    wave: _e,
    dropdown: Te,
    warning: G,
    tour: Ee,
    tooltip: ct,
    popover: At,
    popconfirm: An,
    floatButtonGroup: Tt,
    variant: Lt,
    inputNumber: Dt,
    treeSelect: Oe
  };
  process.env.NODE_ENV !== "production" && tr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Yt = Object.assign({}, w);
  Object.keys(Tn).forEach((Pe) => {
    Tn[Pe] !== void 0 && (Yt[Pe] = Tn[Pe]);
  }), Tm.forEach((Pe) => {
    const p = e[Pe];
    p && (Yt[Pe] = p);
  }), typeof r < "u" && (Yt.button = Object.assign({
    autoInsertSpace: r
  }, Yt.button));
  const Xt = ou(() => Yt, Yt, (Pe, p) => {
    const R = Object.keys(Pe), M = Object.keys(p);
    return R.length !== M.length || R.some(($) => Pe[$] !== p[$]);
  }), {
    layer: sr
  } = _.useContext(kr), jr = _.useMemo(() => ({
    prefixCls: lt,
    csp: Ot,
    layer: sr ? "antd" : void 0
  }), [lt, Ot, sr]);
  let He = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(Cm, {
    dropdownMatchSelectWidth: y
  }), t);
  const Mr = _.useMemo(() => {
    var Pe, p, R, M;
    return ax(((Pe = ei.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((R = (p = Xt.locale) === null || p === void 0 ? void 0 : p.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((M = Xt.form) === null || M === void 0 ? void 0 : M.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Xt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Mr).length > 0 && (He = /* @__PURE__ */ _.createElement(lx.Provider, {
    value: Mr
  }, He)), a && (He = /* @__PURE__ */ _.createElement(Hu, {
    locale: a,
    _ANT_MARK__: Vu
  }, He)), He = /* @__PURE__ */ _.createElement(ma.Provider, {
    value: jr
  }, He), c && (He = /* @__PURE__ */ _.createElement(kx, {
    size: c
  }, He)), He = /* @__PURE__ */ _.createElement(_m, null, He);
  const ui = _.useMemo(() => {
    const Pe = ln || {}, {
      algorithm: p,
      token: R,
      components: M,
      cssVar: $
    } = Pe, xe = Am(Pe, ["algorithm", "token", "components", "cssVar"]), ge = p && (!Array.isArray(p) || p.length > 0) ? ns(p) : Yu, le = {};
    Object.entries(M || {}).forEach(($e) => {
      let [Re, ke] = $e;
      const Ie = Object.assign({}, ke);
      "algorithm" in Ie && (Ie.algorithm === !0 ? Ie.theme = ge : (Array.isArray(Ie.algorithm) || typeof Ie.algorithm == "function") && (Ie.theme = ns(Ie.algorithm)), delete Ie.algorithm), le[Re] = Ie;
    });
    const ae = Object.assign(Object.assign({}, _r), R);
    return Object.assign(Object.assign({}, xe), {
      theme: ge,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: $
    });
  }, [ln]);
  return m && (He = /* @__PURE__ */ _.createElement(Xu.Provider, {
    value: ui
  }, He)), Xt.warning && (He = /* @__PURE__ */ _.createElement(Fu.Provider, {
    value: Xt.warning
  }, He)), A !== void 0 && (He = /* @__PURE__ */ _.createElement(Px, {
    disabled: A
  }, He)), /* @__PURE__ */ _.createElement(en.Provider, {
    value: Xt
  }, He);
}, nr = (e) => {
  const t = _.useContext(en), n = _.useContext(zu);
  return /* @__PURE__ */ _.createElement(km, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
nr.ConfigContext = en;
nr.SizeContext = Ar;
nr.config = Pm;
nr.useConfig = Ix;
Object.defineProperty(nr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Ar)
});
process.env.NODE_ENV !== "production" && (nr.displayName = "ConfigProvider");
var Im = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function gf(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Nm(e) {
  return gf(e) instanceof ShadowRoot;
}
function jm(e) {
  return Nm(e) ? gf(e) : null;
}
function Mm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Lm(e, t) {
  rn(e, "[@ant-design/icons] ".concat(t));
}
function Fc(e) {
  return Se(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Se(e.icon) === "object" || typeof e.icon == "function");
}
function zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Mm(n)] = r;
    }
    return t;
  }, {});
}
function Is(e, t, n) {
  return n ? /* @__PURE__ */ De.createElement(e.tag, z(z({
    key: t
  }, zc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Is(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ De.createElement(e.tag, z({
    key: t
  }, zc(e.attrs)), (e.children || []).map(function(r, o) {
    return Is(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function vf(e) {
  return Cr(e)[0];
}
function yf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Dm = `
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
`, Bm = function(t) {
  var n = Qt(ma), r = n.csp, o = n.prefixCls, i = n.layer, s = Dm;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), et(function() {
    var a = t.current, c = jm(a);
    yn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, Fm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], yr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function zm(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  yr.primaryColor = t, yr.secondaryColor = n || vf(t), yr.calculated = !!n;
}
function Vm() {
  return z({}, yr);
}
var rr = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = wr(t, Fm), l = _.useRef(), f = yr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || vf(s)
  }), Bm(l), Lm(Fc(n), "icon should be icon definiton, but got ".concat(n)), !Fc(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = z(z({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Is(d.icon, "svg-".concat(d.name), z(z({
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
rr.displayName = "IconReact";
rr.getTwoToneColors = Vm;
rr.setTwoToneColors = zm;
function bf(e) {
  var t = yf(e), n = ce(t, 2), r = n[0], o = n[1];
  return rr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Hm() {
  var e = rr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Um = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
bf(To.primary);
var on = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = wr(e, Um), f = _.useContext(ma), d = f.prefixCls, u = d === void 0 ? "anticon" : d, y = f.rootClassName, g = Ze(y, u, U(U({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), n), h = s;
  h === void 0 && a && (h = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, w = yf(c), b = ce(w, 2), m = b[0], A = b[1];
  return /* @__PURE__ */ _.createElement("span", Mt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(rr, {
    icon: r,
    primaryColor: m,
    secondaryColor: A,
    style: x
  }));
});
on.displayName = "AntdIcon";
on.getTwoToneColor = Hm;
on.setTwoToneColor = bf;
var Wm = function(t, n) {
  return /* @__PURE__ */ _.createElement(on, Mt({}, t, {
    ref: n,
    icon: Im
  }));
}, Sf = /* @__PURE__ */ _.forwardRef(Wm);
process.env.NODE_ENV !== "production" && (Sf.displayName = "CheckCircleFilled");
var qm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Ym = function(t, n) {
  return /* @__PURE__ */ _.createElement(on, Mt({}, t, {
    ref: n,
    icon: qm
  }));
}, wf = /* @__PURE__ */ _.forwardRef(Ym);
process.env.NODE_ENV !== "production" && (wf.displayName = "CloseCircleFilled");
var Xm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, $m = function(t, n) {
  return /* @__PURE__ */ _.createElement(on, Mt({}, t, {
    ref: n,
    icon: Xm
  }));
}, Ef = /* @__PURE__ */ _.forwardRef($m);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CloseOutlined");
var Gm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Km = function(t, n) {
  return /* @__PURE__ */ _.createElement(on, Mt({}, t, {
    ref: n,
    icon: Gm
  }));
}, _f = /* @__PURE__ */ _.forwardRef(Km);
process.env.NODE_ENV !== "production" && (_f.displayName = "ExclamationCircleFilled");
var Zm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Jm = function(t, n) {
  return /* @__PURE__ */ _.createElement(on, Mt({}, t, {
    ref: n,
    icon: Zm
  }));
}, Cf = /* @__PURE__ */ _.forwardRef(Jm);
process.env.NODE_ENV !== "production" && (Cf.displayName = "InfoCircleFilled");
var Qm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, e1 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, t1 = "".concat(Qm, " ").concat(e1).split(/[\s\n]+/), n1 = "aria-", r1 = "data-";
function Vc(e, t) {
  return e.indexOf(t) === 0;
}
function o1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = z({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Vc(o, n1)) || // Data
    n.data && Vc(o, r1) || // Attr
    n.attr && t1.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Af = (e, t, n) => /* @__PURE__ */ De.isValidElement(e) ? /* @__PURE__ */ De.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function i1(e, t) {
  return Af(e, e, t);
}
const Jr = (e, t, n, r, o) => ({
  background: e,
  border: `${Co(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), s1 = (e) => {
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
    withDescriptionPadding: y,
    defaultPadding: g
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, tf(e)), {
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
      padding: y,
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
}, a1 = (e) => {
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
    colorInfoBg: y
  } = e;
  return {
    [t]: {
      "&-success": Jr(o, r, n, e, t),
      "&-info": Jr(y, u, d, e, t),
      "&-warning": Jr(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, Jr(f, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, c1 = (e) => {
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
        lineHeight: Co(i),
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
}, l1 = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), u1 = ba("Alert", (e) => [s1(e), a1(e), c1(e)], l1);
var Hc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const f1 = {
  success: Sf,
  info: Cf,
  error: wf,
  warning: _f
}, d1 = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = f1[r] || null;
  return t ? Af(t, /* @__PURE__ */ _.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: Ze(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${n}-icon`
  });
}, h1 = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(Ef, null) : r;
  return t ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, wa = /* @__PURE__ */ _.forwardRef((e, t) => {
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
    showIcon: y,
    closable: g,
    closeText: h,
    closeIcon: x,
    action: w,
    id: b
  } = e, m = Hc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [A, v] = _.useState(!1);
  process.env.NODE_ENV !== "production" && tr("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(t, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: C,
    direction: N,
    closable: B,
    closeIcon: Y,
    className: ne,
    style: K
  } = $u("alert"), D = C("alert", r), [V, q, X] = u1(D), ee = (fe) => {
    var pe;
    v(!0), (pe = e.onClose) === null || pe === void 0 || pe.call(e, fe);
  }, Z = _.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!B, [h, x, g, B]), oe = i && y === void 0 ? !0 : y, ie = Ze(D, `${D}-${Z}`, {
    [`${D}-with-description`]: !!n,
    [`${D}-no-icon`]: !oe,
    [`${D}-banner`]: !!i,
    [`${D}-rtl`]: N === "rtl"
  }, ne, s, a, X, q), J = o1(m, {
    aria: !0,
    data: !0
  }), re = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof B == "object" && B.closeIcon ? B.closeIcon : Y), [x, g, h, Y]), he = _.useMemo(() => {
    const fe = g ?? B;
    if (typeof fe == "object") {
      const {
        closeIcon: pe
      } = fe;
      return Hc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, B]);
  return V(/* @__PURE__ */ _.createElement(pf, {
    visible: !A,
    motionName: `${D}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: u
  }, (fe, pe) => {
    let {
      className: me,
      style: k
    } = fe;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: b,
      ref: Hh(O, pe),
      "data-show": !A,
      className: Ze(ie, me),
      style: Object.assign(Object.assign(Object.assign({}, K), c), k),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, J), oe ? /* @__PURE__ */ _.createElement(d1, {
      description: n,
      icon: e.icon,
      prefixCls: D,
      type: Z
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${D}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-message`
    }, o) : null, n ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-description`
    }, n) : null), w ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-action`
    }, w) : null, /* @__PURE__ */ _.createElement(h1, {
      isClosable: Q,
      prefixCls: D,
      closeIcon: re,
      handleClose: ee,
      ariaProps: he
    }));
  }));
});
process.env.NODE_ENV !== "production" && (wa.displayName = "Alert");
function p1(e, t, n) {
  return t = Un(t), au(e, la() ? Reflect.construct(t, n || [], Un(e).constructor) : t.apply(e, n));
}
let x1 = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return St(this, t), n = p1(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return Pr(t, e), wt(t, [{
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
      return a ? /* @__PURE__ */ _.createElement(wa, {
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
const Tf = wa;
Tf.ErrorBoundary = x1;
function m1(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function g1(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function y() {
    f && clearTimeout(f);
  }
  function g(x) {
    var w = x || {}, b = w.upcomingOnly, m = b === void 0 ? !1 : b;
    y(), d = !m;
  }
  function h() {
    for (var x = arguments.length, w = new Array(x), b = 0; b < x; b++)
      w[b] = arguments[b];
    var m = this, A = Date.now() - u;
    if (d)
      return;
    function v() {
      u = Date.now(), t.apply(m, w);
    }
    function O() {
      f = void 0;
    }
    !a && l && !f && v(), y(), l === void 0 && A > e ? a ? (u = Date.now(), i || (f = setTimeout(l ? O : v, e))) : v() : i !== !0 && (f = setTimeout(l ? O : v, l === void 0 ? e - A : e));
  }
  return h.cancel = g, h;
}
function v1(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return g1(e, t, {
    debounceMode: i !== !1
  });
}
function Uc(e) {
  return ["small", "middle", "large"].includes(e);
}
const Of = ["wrap", "nowrap", "wrap-reverse"], Rf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Pf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], y1 = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && Of.includes(n)
  };
}, b1 = (e, t) => {
  const n = {};
  return Pf.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, S1 = (e, t) => {
  const n = {};
  return Rf.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function w1(e, t) {
  return Ze(Object.assign(Object.assign(Object.assign({}, y1(e, t)), b1(e, t)), S1(e, t)));
}
const E1 = (e) => {
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
}, _1 = (e) => {
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
}, C1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return Of.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, A1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return Pf.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, T1 = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return Rf.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, O1 = () => ({}), R1 = ba("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = ti(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [E1(o), _1(o), C1(o), A1(o), T1(o)];
}, O1, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var P1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const kf = /* @__PURE__ */ De.forwardRef((e, t) => {
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
  } = e, d = P1(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: y,
    getPrefixCls: g
  } = De.useContext(en), h = g("flex", n), [x, w, b] = R1(h), m = l ?? (u == null ? void 0 : u.vertical), A = Ze(o, r, u == null ? void 0 : u.className, h, w, b, w1(h, e), {
    [`${h}-rtl`]: y === "rtl",
    [`${h}-gap-${a}`]: Uc(a),
    [`${h}-vertical`]: m
  }), v = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (v.flex = s), a && !Uc(a) && (v.gap = a), x(/* @__PURE__ */ De.createElement(f, Object.assign({
    ref: t,
    className: A,
    style: v
  }, m1(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (kf.displayName = "Flex");
const Oo = 100, If = Oo / 5, Nf = Oo / 2 - If / 2, ki = Nf * 2 * Math.PI, Wc = 50, qc = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ _.createElement("circle", {
    className: Ze(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: Nf,
    cx: Wc,
    cy: Wc,
    strokeWidth: If,
    style: n
  });
}, k1 = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
  bu(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: Ze(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ _.createElement("svg", {
    viewBox: `0 0 ${Oo} ${Oo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ _.createElement(qc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ _.createElement(qc, {
    dotClassName: r,
    style: l
  })));
};
function I1(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: Ze(o, n > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: Ze(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ _.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ _.createElement(k1, {
    prefixCls: t,
    percent: n
  }));
}
function N1(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ _.isValidElement(n) ? i1(n, {
    className: Ze(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ _.createElement(I1, {
    prefixCls: t,
    percent: r
  });
}
const j1 = new Lu("antSpinMove", {
  to: {
    opacity: 1
  }
}), M1 = new Lu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), L1 = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, tf(e)), {
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
          animationName: j1,
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
          animationName: M1,
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
}, D1 = (e) => {
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
}, B1 = ba("Spin", (e) => {
  const t = ti(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [L1(t)];
}, D1), F1 = 200, Yc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function z1(e, t) {
  const [n, r] = _.useState(0), o = _.useRef(null), i = t === "auto";
  return _.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Yc.length; c += 1) {
        const [l, f] = Yc[c];
        if (s <= l)
          return s + a * f;
      }
      return s;
    });
  }, F1)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var V1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let jf;
function H1(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const br = (e) => {
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
    indicator: y,
    percent: g
  } = e, h = V1(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: w,
    className: b,
    style: m,
    indicator: A
  } = $u("spin"), v = x("spin", n), [O, C, N] = B1(v), [B, Y] = _.useState(() => r && !H1(r, o)), ne = z1(B, g);
  _.useEffect(() => {
    if (r) {
      const Z = v1(o, () => {
        Y(!0);
      });
      return Z(), () => {
        var Q;
        (Q = Z == null ? void 0 : Z.cancel) === null || Q === void 0 || Q.call(Z);
      };
    }
    Y(!1);
  }, [o, r]);
  const K = _.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const Z = tr("Spin");
    process.env.NODE_ENV !== "production" && Z(!c || K || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const D = Ze(v, b, {
    [`${v}-sm`]: a === "small",
    [`${v}-lg`]: a === "large",
    [`${v}-spinning`]: B,
    [`${v}-show-text`]: !!c,
    [`${v}-rtl`]: w === "rtl"
  }, i, !u && s, C, N), V = Ze(`${v}-container`, {
    [`${v}-blur`]: B
  }), q = (t = y ?? A) !== null && t !== void 0 ? t : jf, X = Object.assign(Object.assign({}, m), f), ee = /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    style: X,
    className: D,
    "aria-live": "polite",
    "aria-busy": B
  }), /* @__PURE__ */ _.createElement(N1, {
    prefixCls: v,
    indicator: q,
    percent: ne
  }), c && (K || u) ? /* @__PURE__ */ _.createElement("div", {
    className: `${v}-text`
  }, c) : null);
  return O(K ? /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    className: Ze(`${v}-nested-loading`, l, C, N)
  }), B && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, ee), /* @__PURE__ */ _.createElement("div", {
    className: V,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ _.createElement("div", {
    className: Ze(`${v}-fullscreen`, {
      [`${v}-fullscreen-show`]: B
    }, s, C, N)
  }, ee) : ee);
};
br.setDefaultIndicator = (e) => {
  jf = e;
};
process.env.NODE_ENV !== "production" && (br.displayName = "Spin");
function Mf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: U1 } = Object.prototype, { getPrototypeOf: Ea } = Object, { iterator: ni, toStringTag: Lf } = Symbol, ri = /* @__PURE__ */ ((e) => (t) => {
  const n = U1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Et = (e) => (e = e.toLowerCase(), (t) => ri(t) === e), oi = (e) => (t) => typeof t === e, { isArray: or } = Array, Tr = oi("undefined");
function W1(e) {
  return e !== null && !Tr(e) && e.constructor !== null && !Tr(e.constructor) && nt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Df = Et("ArrayBuffer");
function q1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Df(e.buffer), t;
}
const Y1 = oi("string"), nt = oi("function"), Bf = oi("number"), ii = (e) => e !== null && typeof e == "object", X1 = (e) => e === !0 || e === !1, mo = (e) => {
  if (ri(e) !== "object")
    return !1;
  const t = Ea(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Lf in e) && !(ni in e);
}, $1 = Et("Date"), G1 = Et("File"), K1 = Et("Blob"), Z1 = Et("FileList"), J1 = (e) => ii(e) && nt(e.pipe), Q1 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || nt(e.append) && ((t = ri(e)) === "formdata" || // detect form-data instance
  t === "object" && nt(e.toString) && e.toString() === "[object FormData]"));
}, eg = Et("URLSearchParams"), [tg, ng, rg, og] = ["ReadableStream", "Request", "Response", "Headers"].map(Et), ig = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), or(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function Ff(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zf = (e) => !Tr(e) && e !== xn;
function Ns() {
  const { caseless: e } = zf(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Ff(t, o) || o;
    mo(t[i]) && mo(r) ? t[i] = Ns(t[i], r) : mo(r) ? t[i] = Ns({}, r) : or(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ir(arguments[r], n);
  return t;
}
const sg = (e, t, n, { allOwnKeys: r } = {}) => (Ir(t, (o, i) => {
  n && nt(o) ? e[i] = Mf(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), ag = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cg = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, lg = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Ea(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ug = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, fg = (e) => {
  if (!e) return null;
  if (or(e)) return e;
  let t = e.length;
  if (!Bf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, dg = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ea(Uint8Array)), hg = (e, t) => {
  const r = (e && e[ni]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, pg = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, xg = Et("HTMLFormElement"), mg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Xc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gg = Et("RegExp"), Vf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ir(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, vg = (e) => {
  Vf(e, (t, n) => {
    if (nt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (nt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, yg = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return or(e) ? r(e) : r(String(e).split(t)), n;
}, bg = () => {
}, Sg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function wg(e) {
  return !!(e && nt(e.append) && e[Lf] === "FormData" && e[ni]);
}
const Eg = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ii(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = or(r) ? [] : {};
        return Ir(r, (s, a) => {
          const c = n(s, o + 1);
          !Tr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, _g = Et("AsyncFunction"), Cg = (e) => e && (ii(e) || nt(e)) && nt(e.then) && nt(e.catch), Hf = ((e, t) => e ? setImmediate : t ? ((n, r) => (xn.addEventListener("message", ({ source: o, data: i }) => {
  o === xn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), xn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  nt(xn.postMessage)
), Ag = typeof queueMicrotask < "u" ? queueMicrotask.bind(xn) : typeof process < "u" && process.nextTick || Hf, Tg = (e) => e != null && nt(e[ni]), T = {
  isArray: or,
  isArrayBuffer: Df,
  isBuffer: W1,
  isFormData: Q1,
  isArrayBufferView: q1,
  isString: Y1,
  isNumber: Bf,
  isBoolean: X1,
  isObject: ii,
  isPlainObject: mo,
  isReadableStream: tg,
  isRequest: ng,
  isResponse: rg,
  isHeaders: og,
  isUndefined: Tr,
  isDate: $1,
  isFile: G1,
  isBlob: K1,
  isRegExp: gg,
  isFunction: nt,
  isStream: J1,
  isURLSearchParams: eg,
  isTypedArray: dg,
  isFileList: Z1,
  forEach: Ir,
  merge: Ns,
  extend: sg,
  trim: ig,
  stripBOM: ag,
  inherits: cg,
  toFlatObject: lg,
  kindOf: ri,
  kindOfTest: Et,
  endsWith: ug,
  toArray: fg,
  forEachEntry: hg,
  matchAll: pg,
  isHTMLForm: xg,
  hasOwnProperty: Xc,
  hasOwnProp: Xc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vf,
  freezeMethods: vg,
  toObjectSet: yg,
  toCamelCase: mg,
  noop: bg,
  toFiniteNumber: Sg,
  findKey: Ff,
  global: xn,
  isContextDefined: zf,
  isSpecCompliantForm: wg,
  toJSONObject: Eg,
  isAsyncFn: _g,
  isThenable: Cg,
  setImmediate: Hf,
  asap: Ag,
  isIterable: Tg
};
function te(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
T.inherits(te, Error, {
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
const Uf = te.prototype, Wf = {};
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
  Wf[e] = { value: e };
});
Object.defineProperties(te, Wf);
Object.defineProperty(Uf, "isAxiosError", { value: !0 });
te.from = (e, t, n, r, o, i) => {
  const s = Object.create(Uf);
  return T.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Og = null;
function js(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function qf(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function $c(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = qf(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Rg(e) {
  return T.isArray(e) && !e.some(js);
}
const Pg = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function si(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, x) {
    return !T.isUndefined(x[h]);
  });
  const r = n.metaTokens, o = n.visitor || f, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!c && T.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, x) {
    let w = g;
    if (g && !x && typeof g == "object") {
      if (T.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && Rg(g) || (T.isFileList(g) || T.endsWith(h, "[]")) && (w = T.toArray(g)))
        return h = qf(h), w.forEach(function(m, A) {
          !(T.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? $c([h], A, i) : s === null ? h : h + "[]",
            l(m)
          );
        }), !1;
    }
    return js(g) ? !0 : (t.append($c(x, h, i), l(g)), !1);
  }
  const d = [], u = Object.assign(Pg, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: js
  });
  function y(g, h) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), T.forEach(g, function(w, b) {
        (!(T.isUndefined(w) || w === null) && o.call(
          t,
          w,
          T.isString(b) ? b.trim() : b,
          h,
          u
        )) === !0 && y(w, h ? h.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Gc(e) {
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
function _a(e, t) {
  this._pairs = [], e && si(e, this, t);
}
const Yf = _a.prototype;
Yf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Yf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Gc);
  } : Gc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function kg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kg;
  T.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = T.isURLSearchParams(t) ? t.toString() : new _a(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Kc {
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
    T.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $f = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ig = typeof URLSearchParams < "u" ? URLSearchParams : _a, Ng = typeof FormData < "u" ? FormData : null, jg = typeof Blob < "u" ? Blob : null, Mg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ig,
    FormData: Ng,
    Blob: jg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ca = typeof window < "u" && typeof document < "u", Ms = typeof navigator == "object" && navigator || void 0, Lg = Ca && (!Ms || ["ReactNative", "NativeScript", "NS"].indexOf(Ms.product) < 0), Dg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bg = Ca && window.location.href || "http://localhost", Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ca,
  hasStandardBrowserEnv: Lg,
  hasStandardBrowserWebWorkerEnv: Dg,
  navigator: Ms,
  origin: Bg
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  ...Fg,
  ...Mg
};
function zg(e, t) {
  return si(e, new Ke.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Ke.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Vg(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Hg(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Gf(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && T.isArray(o) ? o.length : s, c ? (T.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && T.isArray(o[s]) && (o[s] = Hg(o[s])), !a);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, o) => {
      t(Vg(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ug(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Nr = {
  transitional: $f,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = T.isObject(t);
    if (i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return o ? JSON.stringify(Gf(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return zg(t, this.formSerializer).toString();
      if ((a = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return si(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Ug(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Nr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (T.isResponse(t) || T.isReadableStream(t))
      return t;
    if (t && T.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? te.from(a, te.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ke.classes.FormData,
    Blob: Ke.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Nr.headers[e] = {};
});
const Wg = T.toObjectSet([
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
]), qg = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Wg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Zc = Symbol("internals");
function hr(e) {
  return e && String(e).trim().toLowerCase();
}
function go(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(go) : String(e);
}
function Yg(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Xg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, t, n, r, o) {
  if (T.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t);
  }
}
function $g(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Gg(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let rt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, c, l) {
      const f = hr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = go(a));
    }
    const s = (a, c) => T.forEach(a, (l, f) => i(l, f, c));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (T.isString(t) && (t = t.trim()) && !Xg(t))
      s(qg(t), n);
    else if (T.isObject(t) && T.isIterable(t)) {
      let a = {}, c, l;
      for (const f of t) {
        if (!T.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? T.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = hr(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Yg(o);
        if (T.isFunction(n))
          return n.call(this, o, r);
        if (T.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = hr(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ii(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = hr(s), s) {
        const a = T.findKey(r, s);
        a && (!n || Ii(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return T.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ii(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return T.forEach(this, (o, i) => {
      const s = T.findKey(r, i);
      if (s) {
        n[s] = go(o), delete n[i];
        return;
      }
      const a = t ? $g(i) : String(i).trim();
      a !== i && delete n[i], n[a] = go(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && T.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Zc] = this[Zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = hr(s);
      r[a] || (Gg(o, s), r[a] = !0);
    }
    return T.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
T.freezeMethods(rt);
function Ni(e, t) {
  const n = this || Nr, r = t || n, o = rt.from(r.headers);
  let i = r.data;
  return T.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Kf(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, t, n) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n), this.name = "CanceledError";
}
T.inherits(ir, te, {
  __CANCEL__: !0
});
function Zf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new te(
    "Request failed with status code " + n.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Kg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Zg(e, t) {
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
    const y = f && l - f;
    return y ? Math.round(u * 1e3 / y) : void 0;
  };
}
function Jg(e, t) {
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
const Ro = (e, t, n = 3) => {
  let r = 0;
  const o = Zg(50, 250);
  return Jg((i) => {
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
}, Jc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Qc = (e) => (...t) => T.asap(() => e(...t)), Qg = Ke.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ke.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ke.origin),
  Ke.navigator && /(msie|trident)/i.test(Ke.navigator.userAgent)
) : () => !0, ev = Ke.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      T.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), T.isString(r) && s.push("path=" + r), T.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jf(e, t, n) {
  let r = !tv(t);
  return e && (r || n == !1) ? nv(e, t) : t;
}
const el = (e) => e instanceof rt ? { ...e } : e;
function En(e, t) {
  t = t || {};
  const n = {};
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
    headers: (l, f, d) => o(el(l), el(f), d, !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = c[f] || o, u = d(e[f], t[f], f);
    T.isUndefined(u) && d !== a || (n[f] = u);
  }), n;
}
const Qf = (e) => {
  const t = En({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = rt.from(s), t.url = Xf(Jf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (T.isFormData(n)) {
    if (Ke.hasStandardBrowserEnv || Ke.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Ke.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(t)), r || r !== !1 && Qg(t.url))) {
    const l = o && i && ev.read(i);
    l && s.set(o, l);
  }
  return t;
}, rv = typeof XMLHttpRequest < "u", ov = rv && function(e) {
  return new Promise(function(n, r) {
    const o = Qf(e);
    let i = o.data;
    const s = rt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, y, g;
    function h() {
      y && y(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function w() {
      if (!x)
        return;
      const m = rt.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: m,
        config: e,
        request: x
      };
      Zf(function(C) {
        n(C), h();
      }, function(C) {
        r(C), h();
      }, v), x = null;
    }
    "onloadend" in x ? x.onloadend = w : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, x.onabort = function() {
      x && (r(new te("Request aborted", te.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || $f;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new te(
        A,
        v.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && T.forEach(s.toJSON(), function(A, v) {
      x.setRequestHeader(v, A);
    }), T.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([u, g] = Ro(l, !0), x.addEventListener("progress", u)), c && x.upload && ([d, y] = Ro(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (f = (m) => {
      x && (r(!m || m.type ? new ir(null, e, x) : m), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Kg(o.url);
    if (b && Ke.protocols.indexOf(b) === -1) {
      r(new te("Unsupported protocol " + b + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(i || null);
  });
}, iv = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof te ? f : new ir(f instanceof Error ? f.message : f));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => T.asap(a), c;
  }
}, sv = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, av = async function* (e, t) {
  for await (const n of cv(e))
    yield* sv(n, t);
}, cv = async function* (e) {
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
}, tl = (e, t, n, r) => {
  const o = av(e, t);
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
}, ai = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", e0 = ai && typeof ReadableStream == "function", lv = ai && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), t0 = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, uv = e0 && t0(() => {
  let e = !1;
  const t = new Request(Ke.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), nl = 64 * 1024, Ls = e0 && t0(() => T.isReadableStream(new Response("").body)), Po = {
  stream: Ls && ((e) => e.body)
};
ai && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Po[t] && (Po[t] = T.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const fv = async (e) => {
  if (e == null)
    return 0;
  if (T.isBlob(e))
    return e.size;
  if (T.isSpecCompliantForm(e))
    return (await new Request(Ke.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(e) || T.isArrayBuffer(e))
    return e.byteLength;
  if (T.isURLSearchParams(e) && (e = e + ""), T.isString(e))
    return (await lv(e)).byteLength;
}, dv = async (e, t) => {
  const n = T.toFiniteNumber(e.getContentLength());
  return n ?? fv(t);
}, hv = ai && (async (e) => {
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
  } = Qf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let y = iv([o, i && i.toAbortSignal()], s), g;
  const h = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let x;
  try {
    if (c && uv && n !== "get" && n !== "head" && (x = await dv(f, r)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (T.isFormData(r) && (O = v.headers.get("content-type")) && f.setContentType(O), v.body) {
        const [C, N] = Jc(
          x,
          Ro(Qc(c))
        );
        r = tl(v.body, nl, C, N);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    g = new Request(t, {
      ...u,
      signal: y,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let b = await fetch(g);
    const m = Ls && (l === "stream" || l === "response");
    if (Ls && (a || m && h)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((B) => {
        v[B] = b[B];
      });
      const O = T.toFiniteNumber(b.headers.get("content-length")), [C, N] = a && Jc(
        O,
        Ro(Qc(a), !0)
      ) || [];
      b = new Response(
        tl(b.body, nl, C, () => {
          N && N(), h && h();
        }),
        v
      );
    }
    l = l || "text";
    let A = await Po[T.findKey(Po, l) || "text"](b, e);
    return !m && h && h(), await new Promise((v, O) => {
      Zf(v, O, {
        data: A,
        headers: rt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (w) {
    throw h && h(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, g),
      {
        cause: w.cause || w
      }
    ) : te.from(w, w && w.code, e, g);
  }
}), Ds = {
  http: Og,
  xhr: ov,
  fetch: hv
};
T.forEach(Ds, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rl = (e) => `- ${e}`, pv = (e) => T.isFunction(e) || e === null || e === !1, n0 = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !pv(n) && (r = Ds[(s = String(n)).toLowerCase()], r === void 0))
        throw new te(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(rl).join(`
`) : " " + rl(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ds
};
function ji(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function ol(e) {
  return ji(e), e.headers = rt.from(e.headers), e.data = Ni.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), n0.getAdapter(e.adapter || Nr.adapter)(e).then(function(r) {
    return ji(e), r.data = Ni.call(
      e,
      e.transformResponse,
      r
    ), r.headers = rt.from(r.headers), r;
  }, function(r) {
    return Kf(r) || (ji(e), r && r.response && (r.response.data = Ni.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = rt.from(r.response.headers))), Promise.reject(r);
  });
}
const r0 = "1.9.0", ci = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ci[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const il = {};
ci.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + r0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new te(
        o(s, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED
      );
    return n && !il[s] && (il[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
ci.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function xv(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const vo = {
  assertOptions: xv,
  validators: ci
}, Pt = vo.validators;
let Sn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Kc(),
      response: new Kc()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = En(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && vo.assertOptions(r, {
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean)
    }, !1), o != null && (T.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : vo.assertOptions(o, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), vo.assertOptions(n, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && T.merge(
      i.common,
      i[n.method]
    );
    i && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = rt.concat(s, i);
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
      const g = [ol.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(n); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let y = n;
    for (d = 0; d < u; ) {
      const g = a[d++], h = a[d++];
      try {
        y = g(y);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      f = ol.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(t) {
    t = En(this.defaults, t);
    const n = Jf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xf(n, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(t) {
  Sn.prototype[t] = function(n, r) {
    return this.request(En(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(En(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Sn.prototype[t] = n(), Sn.prototype[t + "Form"] = n(!0);
});
let mv = class o0 {
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
      r.reason || (r.reason = new ir(i, s, a), n(r.reason));
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
      token: new o0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function gv(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vv(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Bs = {
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
Object.entries(Bs).forEach(([e, t]) => {
  Bs[t] = e;
});
function i0(e) {
  const t = new Sn(e), n = Mf(Sn.prototype.request, t);
  return T.extend(n, Sn.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return i0(En(e, o));
  }, n;
}
const je = i0(Nr);
je.Axios = Sn;
je.CanceledError = ir;
je.CancelToken = mv;
je.isCancel = Kf;
je.VERSION = r0;
je.toFormData = si;
je.AxiosError = te;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = gv;
je.isAxiosError = vv;
je.mergeConfig = En;
je.AxiosHeaders = rt;
je.formToJSON = (e) => Gf(T.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = n0.getAdapter;
je.HttpStatusCode = Bs;
je.default = je;
const {
  Axios: Zv,
  AxiosError: Jv,
  CanceledError: Qv,
  isCancel: ey,
  CancelToken: ty,
  VERSION: ny,
  all: ry,
  Cancel: oy,
  isAxiosError: iy,
  spread: sy,
  toFormData: ay,
  AxiosHeaders: cy,
  HttpStatusCode: ly,
  formToJSON: uy,
  getAdapter: fy,
  mergeConfig: dy
} = je, Xn = $n;
(function(e, t) {
  const n = $n, r = e();
  for (; ; )
    try {
      if (parseInt(n(313)) / 1 + parseInt(n(320)) / 2 + -parseInt(n(312)) / 3 + parseInt(n(319)) / 4 * (parseInt(n(323)) / 5) + -parseInt(n(304)) / 6 + -parseInt(n(300)) / 7 + parseInt(n(325)) / 8 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 524008);
const yv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = $n;
      if (o(302) !== o(316)) {
        if (n)
          if (o(297) === o(297)) {
            const i = n[o(314)](t, arguments);
            return n = null, i;
          } else return _0x4d19a9[o(318)]()[o(299)](o(315))[o(318)]()[o(307)](_0x3c7a2e)[o(299)](o(315));
      } else throw _0x23fdaa;
    } : function() {
    };
    return e = !1, r;
  };
}(), Fs = yv(void 0, function() {
  const e = $n;
  return Fs[e(318)]()[e(299)](e(315))[e(318)]()[e(307)](Fs)[e(299)](e(315));
});
Fs();
function $n(e, t) {
  const n = ko();
  return $n = function(r, o) {
    return r = r - 295, n[r];
  }, $n(e, t);
}
Xn(306);
je[Xn(324)][Xn(326)] = !0;
const bv = async (e) => {
  var n, r, o, i;
  const t = Xn;
  try {
    return (await je(e))[t(305)];
  } catch (s) {
    throw ((r = (n = s[t(321)]) == null ? void 0 : n[t(305)]) == null ? void 0 : r[t(295)]) || ((i = (o = s[t(321)]) == null ? void 0 : o[t(305)]) == null ? void 0 : i[t(317)]) || s[t(295)];
  }
}, Sv = {};
Sv[Xn(322)] = Xn(303);
function ko() {
  const e = ["28KohuRP", "1086520ZeVBeo", "response", "Content-Type", "279960KENmzz", "defaults", "4306232twKcIF", "withCredentials", "message", "POST", "ihHKp", "params", "search", "3357263zUDrlM", "GET", "TqIwE", "application/json", "900774vJPVmp", "data", "http://192.168.11.76:3000/api/v1/client", "constructor", "PATCH", "PUT", "dIhIE", "DELETE", "1452960mRazNX", "164583JCaQFc", "apply", "(((.+)+)+)+$", "MALGt", "error", "toString"];
  return ko = function() {
    return e;
  }, ko();
}
const Ne = Gn;
(function(e, t) {
  const n = Gn, r = e();
  for (; ; )
    try {
      if (-parseInt(n(128)) / 1 * (-parseInt(n(151)) / 2) + -parseInt(n(160)) / 3 * (-parseInt(n(143)) / 4) + -parseInt(n(145)) / 5 * (parseInt(n(142)) / 6) + parseInt(n(158)) / 7 * (parseInt(n(137)) / 8) + -parseInt(n(129)) / 9 * (parseInt(n(140)) / 10) + parseInt(n(132)) / 11 + parseInt(n(135)) / 12 * (-parseInt(n(136)) / 13) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 669618);
const wv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = Gn;
      if (n) {
        const i = n[o(126)](t, arguments);
        return n = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), zs = wv(void 0, function() {
  const e = Gn;
  return zs[e(130)]()[e(156)](e(139))[e(130)]()[e(150)](zs)[e(156)](e(139));
});
zs();
const fn = {};
fn[Ne(155)] = Ne(157), fn[Ne(134)] = Ne(149), fn[Ne(153)] = Ne(133), fn[Ne(141)] = Ne(157), fn[Ne(159)] = Ne(149), fn[Ne(131)] = Ne(133);
const Nt = fn;
function Io() {
  const e = ["4QVpGMv", "9hQWbUO", "toString", "touchstart", "3106708zHAzlm", "ACTION_DOWN", "mouseup", "832008bOpFgn", "117tFtMhP", "40hRfWlf", "wheelEvent", "(((.+)+)+)+$", "7606330TlcoTJ", "touchmove", "1399638yQoLyA", "156948XsIBNk", "keydown", "10GBlVrx", "fullscreenEvent", "keyBoardEvent", "shortcutEvent", "ACTION_UP", "constructor", "547834NjZWMB", "assistiveMenuHide", "mousedown", "moveEvent", "mousemove", "search", "ACTION_MOVE", "446222kAfvzQ", "touchend", "63KymMva", "apply", "keyup"];
  return Io = function() {
    return e;
  }, Io();
}
function Gn(e, t) {
  const n = Io();
  return Gn = function(r, o) {
    return r = r - 126, n[r];
  }, Gn(e, t);
}
const Vs = {};
Vs[Ne(127)] = Ne(149), Vs[Ne(144)] = Ne(133);
const Ev = Vs, _v = Ne(154), Cv = Ne(138), Av = Ne(147), s0 = Ne(152), Hs = Ne(148), Tv = Ne(146);
(function(e, t) {
  const n = Ht, r = e();
  for (; ; )
    try {
      if (parseInt(n(534)) / 1 * (-parseInt(n(569)) / 2) + parseInt(n(577)) / 3 + parseInt(n(554)) / 4 + -parseInt(n(576)) / 5 * (parseInt(n(565)) / 6) + parseInt(n(529)) / 7 + parseInt(n(557)) / 8 * (parseInt(n(587)) / 9) + -parseInt(n(561)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 419274);
const Ov = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = Ht;
      if (o(548) === o(548)) {
        if (n) {
          const i = n[o(502)](t, arguments);
          return n = null, i;
        }
      } else _0x559b1e[o(562)] = o(538), _0x432c25[o(516)] = 21;
    } : function() {
    };
    return e = !1, r;
  };
}(), Us = Ov(void 0, function() {
  const e = Ht;
  return Us[e(543)]()[e(521)](e(570))[e(543)]()[e(547)](Us)[e(521)](e(570));
});
Us();
function Ht(e, t) {
  const n = No();
  return Ht = function(r, o) {
    return r = r - 499, n[r];
  }, Ht(e, t);
}
const Rv = ({ isMobile: e, assistive: t, onImgEvent: n, canvasContent: r, imageRef: o }) => {
  const [i, s] = Qe(!1), a = (d) => {
    const u = Ht;
    if (d[u(579)](), !o[u(517)])
      if (u(525) !== u(525)) {
        const m = _0x4136db[u(502)](_0x1de091, arguments);
        return _0x1979b6 = null, m;
      } else return;
    const y = o[u(517)];
    let g = Nt[d[u(526)]];
    if (t[u(583)] == !0 || t[u(499)] == !0)
      if (u(593) !== u(572)) {
        g == Nt[u(536)] && (u(528) === u(550) ? (_0x512af2[u(559)](u(585), _0xcdde1a, _0x49dc80), _0x433313[u(559)](u(546), _0x4528ef), [u(581), u(530), u(536)][u(503)]((m) => {
          const A = u;
          _0x1fcd4d[A(559)](m, _0x76ccf8);
        })) : n(s0, {}));
        return;
      } else {
        const m = _0x57bd4a ? function() {
          const A = u;
          if (_0xa6a4b4) {
            const v = _0x301152[A(502)](_0xc5e048, arguments);
            return _0xbd853c = null, v;
          }
        } : function() {
        };
        return _0x2fd8fe = !1, m;
      }
    if (g == Nt[u(530)] && s(!0), g != Nt[u(530)] && i == !1) return;
    g == Nt[u(536)] && s(!1);
    let h, x;
    const w = y[u(522)]();
    if (d[u(526)][u(590)](u(524))) {
      const { touches: m, changedTouches: A } = d, v = m[0] ?? A[0];
      h = v[u(541)] - w[u(512)], x = v[u(510)] - w[u(592)];
    } else d[u(526)][u(590)](u(558)) && (h = d[u(588)] - w[u(512)], x = d[u(591)] - w[u(592)]);
    const b = {};
    b[u(535)] = u(555), b[u(556)] = g, b.x = h, b.y = x, b[u(514)] = w[u(514)], b[u(582)] = w[u(582)], n(_v, b), y[u(560)]();
  }, c = (d) => {
    const u = Ht;
    if (u(544) === u(537))
      return [u(580), u(515), u(575)][u(590)](_0x18fa83);
    {
      if (d[u(579)](), !o[u(517)])
        return u(511) === u(511), void 0;
      const y = o[u(517)], g = Math[u(568)](d[u(589)]), h = y[u(522)](), x = {};
      x[u(535)] = u(523), x[u(514)] = y[u(533)], x[u(582)] = y[u(540)], x.x = d[u(588)] - h[u(512)], x.y = d[u(591)] - h[u(592)], x[u(507)] = g, n(Cv, x), y[u(560)]();
    }
  }, l = async (d) => {
    const u = Ht;
    if (d[u(579)](), !o[u(517)]) return;
    const y = o[u(517)], g = Ev[d[u(526)]], h = d[u(516)][u(509)]();
    if (((m) => {
      const A = u;
      return [A(580), A(515), A(575)][A(590)](m);
    })(h) == !0) return;
    const w = async () => {
      const m = u, A = {};
      A[m(535)] = m(501), A[m(556)] = g, A[m(562)] = m(532), A[m(516)] = d[m(516)], A[m(545)] = 0, A[m(573)] = 0;
      const v = A;
      return d[m(586)] == !0 ? h == "c" ? m(551) !== m(551) ? _0xd8f80(!0) : v[m(562)] = m(508) : h == "a" ? (v[m(562)] = m(538), v[m(573)] = 4096, v[m(516)] = 29) : h == "v" && (m(574) === m(574) ? (v[m(562)] = m(504), v[m(516)] = await navigator[m(542)][m(539)]()) : (_0x42aa55 = _0x39aede[m(588)] - _0x58da30[m(512)], _0x23f35e = _0x3ed1c5[m(591)] - _0x5e951e[m(592)])) : h == m(552) ? (v[m(562)] = m(538), v[m(516)] = 19) : h == m(518) ? m(531) === m(578) ? _0xb599db(_0x2ae066, {}) : (v[m(562)] = m(538), v[m(516)] = 20) : h == m(567) ? (v[m(562)] = m(538), v[m(516)] = 21) : h == m(584) ? (v[m(562)] = m(538), v[m(516)] = 22) : h == m(513) ? (v[m(562)] = m(538), v[m(516)] = 67) : h == m(520) ? m(571) === m(571) ? (v[m(562)] = m(538), v[m(516)] = 66) : (_0x50c0ca[m(562)] = m(538), _0x5426c0[m(516)] = 66) : h == m(506) && (m(594) === m(549) ? (_0xda33de[m(562)] = m(538), _0x445f78[m(516)] = 67) : (v[m(562)] = m(538), v[m(516)] = 61)), v[m(526)] == m(532) && d[m(519)] == !0 && (v[m(516)] = v[m(516)][m(563)]()), v;
    }, b = await w();
    b && n(Av, b), y[u(560)]();
  };
  et(() => {
    const d = Ht, u = o[d(517)];
    if (u) {
      const y = {};
      y[d(527)] = !1;
      const g = y;
      return e ? (u[d(559)](d(564), a, g), u[d(559)](d(505), a, g), u[d(559)](d(553), a)) : (u[d(559)](d(585), c, g), u[d(559)](d(546), l), [d(581), d(530), d(536)][d(503)]((h) => {
        u[d(559)](h, a);
      })), () => {
        const h = d;
        u && (h(500) !== h(500) ? (_0x25de1f[h(559)](h(564), _0x42cb69, _0x109ee6), _0x2d7682[h(559)](h(505), _0x5bd6d1, _0x5b4e36), _0x38480e[h(559)](h(553), _0x2ff0c5)) : e ? [h(564), h(505), h(553)][h(503)]((x) => {
          u[h(566)](x, a);
        }) : ([h(581), h(530), h(536), h(585), h(546)][h(503)]((x) => {
          u[h(566)](x, a);
        }), u[h(566)](h(546), l)));
      };
    }
  }, [e, a, c, l]);
  const f = { ref: o, ...r };
  return H.jsx(Pd, f);
};
function No() {
  const e = ["arrowdown", "shiftKey", "enter", "search", "getBoundingClientRect", "wheelEvent", "touch", "CPVAK", "type", "passive", "iHMSZ", "4121698ttLSPD", "mousedown", "pqrQM", "KEYBOARD_TEXT", "offsetWidth", "384CUVGxK", "action", "mouseup", "TGYNp", "KEYBOARD_CODE", "readText", "offsetHeight", "pageX", "clipboard", "toString", "ETcLk", "repeat", "keydown", "constructor", "KuYMO", "pVtuc", "PNRbn", "vJxAI", "arrowup", "touchend", "525880KoKYwI", "touchEvent", "keyAction", "168hrpWeg", "mouse", "addEventListener", "focus", "9671360SdhidT", "typeKey", "toUpperCase", "touchstart", "38754oXSJqp", "removeEventListener", "arrowleft", "sign", "54XDyoMe", "(((.+)+)+)+$", "srcjA", "inTaJ", "meta_state", "Rphbq", "capslock", "340VwuvdB", "2196738DwhFmN", "reJES", "preventDefault", "control", "mousemove", "height", "isDown", "arrowright", "wheel", "ctrlKey", "164340rekZtt", "clientX", "deltaY", "includes", "clientY", "top", "awWKQ", "bZKwg", "showMenu", "ENcPW", "keyEvent", "apply", "forEach", "PASTE_TEXT", "touchmove", "tab", "delta", "COPY_TEXT", "toLowerCase", "pageY", "PUzpE", "left", "backspace", "width", "shift", "key", "current"];
  return No = function() {
    return e;
  }, No();
}
const Pv = "data:image/png;base64,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", li = Kn;
(function(e, t) {
  const n = Kn, r = e();
  for (; ; )
    try {
      if (parseInt(n(163)) / 1 * (parseInt(n(173)) / 2) + -parseInt(n(170)) / 3 + parseInt(n(178)) / 4 * (parseInt(n(161)) / 5) + -parseInt(n(167)) / 6 * (parseInt(n(169)) / 7) + parseInt(n(176)) / 8 + -parseInt(n(168)) / 9 + -parseInt(n(175)) / 10 * (-parseInt(n(162)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 445071);
function jo() {
  const e = ["img", "377826lUHhoC", "div", "1762160bDUVrt", "1648096KCvSrL", "toString", "4uYmuxY", "1487810uTHhaY", "22GVxlJP", "2yfUsJY", "search", "constructor", "apply", "1266GkPUIm", "412920QSZBHm", "24514kxiULW", "11877bZapDY", "(((.+)+)+)+$"];
  return jo = function() {
    return e;
  }, jo();
}
const kv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = Kn;
      if (n) {
        const i = n[o(166)](t, arguments);
        return n = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Ws = kv(void 0, function() {
  const e = Kn;
  return Ws[e(177)]()[e(164)](e(171))[e(177)]()[e(165)](Ws)[e(164)](e(171));
});
Ws();
const Iv = bt[li(174)]`
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
`, Bt = bt[li(174)]`
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
`, Ft = bt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;
function Kn(e, t) {
  const n = jo();
  return Kn = function(r, o) {
    return r = r - 161, n[r];
  }, Kn(e, t);
}
const Nv = bt[li(172)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, jv = bt[li(174)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, t) {
  const n = tn, r = e();
  for (; ; )
    try {
      if (parseInt(n(276)) / 1 + -parseInt(n(287)) / 2 * (parseInt(n(286)) / 3) + -parseInt(n(275)) / 4 * (-parseInt(n(274)) / 5) + -parseInt(n(256)) / 6 * (-parseInt(n(269)) / 7) + -parseInt(n(288)) / 8 * (-parseInt(n(262)) / 9) + -parseInt(n(271)) / 10 + -parseInt(n(277)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 570797);
const Mv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = tn;
    if (r(258) === r(267)) _0x1c8568[r(270)]();
    else {
      const o = e ? function() {
        const i = r;
        if (n) {
          const s = n[i(278)](t, arguments);
          return n = null, s;
        }
      } : function() {
      };
      return e = !1, o;
    }
  };
}(), qs = Mv(void 0, function() {
  const e = tn;
  return qs[e(285)]()[e(290)](e(292))[e(285)]()[e(272)](qs)[e(290)](e(292));
});
qs();
function Mo() {
  const e = ["3670820IJZhSP", "constructor", "yWXGr", "25tdzgPU", "790844YDizQj", "409029pSPPle", "12814912YsAyrc", "apply", "querySelector", "webkitRequestFullscreen", "rLxrq", "mozRequestFullScreen", "requestFullscreen", "msExitFullscreen", "toString", "21brGebp", "57146PiXTos", "613048vHimnq", "msRequestFullscreen", "search", "KUQxd", "(((.+)+)+)+$", "msFullscreenElement", "webkitFullscreenElement", "710286wZZhro", "webkitExitFullscreen", "RNJNx", "AjBlC", "#screen_", "mozFullScreenElement", "9aVmPqN", "uwuDQ", "rFlOS", "cWjUm", "exitFullscreen", "GwqzE", "fullscreenElement", "49qWpQWQ", "mozCancelFullScreen"];
  return Mo = function() {
    return e;
  }, Mo();
}
const sl = () => {
  const e = tn;
  return document[e(268)] || document[e(261)] || document[e(294)] || document[e(293)];
};
function tn(e, t) {
  const n = Mo();
  return tn = function(r, o) {
    return r = r - 256, n[r];
  }, tn(e, t);
}
const Lv = (e) => {
  const t = tn, n = document[t(279)](t(260) + e);
  if (n[t(283)]) n[t(283)]();
  else if (n[t(282)]) t(263) === t(263) ? n[t(282)]() : _0x146dfb[t(257)]();
  else if (n[t(280)]) t(259) !== t(291) ? n[t(280)]() : _0x3a5d65[t(289)]();
  else if (n[t(289)]) {
    if (t(281) !== t(281)) return _0x1278bd[t(285)]()[t(290)](t(292))[t(285)]()[t(272)](_0x3ed06c)[t(290)](t(292));
    n[t(289)]();
  }
}, Dv = () => {
  const e = tn;
  if (document[e(266)]) document[e(266)]();
  else if (document[e(270)]) e(273) === e(273) ? document[e(270)]() : _0x5e4503[e(266)]();
  else if (document[e(257)]) document[e(257)]();
  else if (document[e(284)]) {
    if (e(264) === e(265)) return _0x103d80[e(268)] || _0xafe348[e(261)] || _0x208b7c[e(294)] || _0x4764e4[e(293)];
    document[e(284)]();
  }
};
(function(e, t) {
  const n = _n, r = e();
  for (; ; )
    try {
      if (parseInt(n(512)) / 1 + -parseInt(n(542)) / 2 + -parseInt(n(500)) / 3 + -parseInt(n(475)) / 4 + parseInt(n(468)) / 5 + parseInt(n(562)) / 6 + parseInt(n(435)) / 7 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 228834);
const Bv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = _n;
      if (o(483) === o(483)) {
        if (n) {
          const i = n[o(518)](t, arguments);
          return n = null, i;
        }
      } else _0x25da9b[o(490)](o(544), _0x4a693e, _0x292fe5), _0x405ce0[o(490)](o(459), _0x54d7df, _0x537dc5), _0xa5b459[o(490)](o(487), _0x2beae6);
    } : function() {
    };
    return e = !1, r;
  };
}(), Ys = Bv(void 0, function() {
  const e = _n;
  return Ys[e(439)]()[e(541)](e(440))[e(439)]()[e(558)](Ys)[e(541)](e(440));
});
function _n(e, t) {
  const n = Lo();
  return _n = function(r, o) {
    return r = r - 430, n[r];
  }, _n(e, t);
}
Ys();
function Lo() {
  const e = ["move", "recents", "CshDT", "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z", "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z", "device_id", "opacity", "max", "search", "286136kQPMHL", "type", "touchstart", "zWSNv", "clientY", "oMucg", "0 0 24 24", "taskId", "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z", "assistive_touch_class_", "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z", "svg", "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z", "mouse", "Home", "mozfullscreenchange", "constructor", "showMenu", "circle", "shortcut", "433188Dugvpw", "cXwXB", "top", "children", "fullscreen", "KDthr", "back", "Recents", "fGSLQ", "Sync", "home", "forEach", "Hide ID", "min", "assistive", "getBoundingClientRect", "13%", "RHXsy", "2734298pVnrEg", "includes", "focus", "11.75", "toString", "(((.+)+)+)+$", "Copy", "shortcutEvent", "Volume", "YdYMm", "div", "isDown", "assistive_touch_", "grab", "passive", "cursor", "RsFOj", "get", "closest", "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z", "rgba(255, 255, 255, 1)", "right", "gTAlj", "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z", "touchmove", "clientX", "SIHQf", "Show ID", "50%", "zIndex", "Screen", "dwAKl", "http://www.w3.org/2000/svg", "35365tQOQBC", "data-id", "GuAZn", "set", "removeEventListener", "clipboard", "dYpDy", "131068wtodVl", "pageY", "Icon", "preventDefault", "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z", "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z", "12%", "left", "WQjDQ", "xLdCl", "Paste", "width", "touchend", "IbcmM", "getAttribute", "addEventListener", "volume", "path", "mousemove", "current", "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z", "vgFMK", "ucDyf", "gRQbM", "data", "290139tMlwDN", "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z", "nUArr", "sync", "landscape", "click", "now", "mousedown", "msfullscreenchange", "target", "assistive_menu_", "fullscreenchange", "31497YrbGYr", "WnPQP", "shortcutCopy", "Back", "copy", "OGjuM", "apply", "touch", "readText", "M6 12h6v2H6zm0 4h6v2H6z", "pageX", "action", "height", "webkitfullscreenchange", "fill", "GMWZF", "BxjaC", "PEYaV", "hgiuJ", "paste", "mouseup"];
  return Lo = function() {
    return e;
  }, Lo();
}
const Fv = ml((e, t) => {
  const n = _n, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, f] = Qe(0), [d, u] = Qe(0), [y, g] = Qe(null), [h, x] = Qe(0), w = Ue(null), b = Ue(null), m = Ue(null), A = {};
  A[n(450)] = n(533), A[n(539)] = 0.3, A[n(464)] = 999;
  const [v, O] = Qe(A), C = {};
  C[n(464)] = 999, C[n(524)] = "", C[n(486)] = n(433);
  const [N, B] = Qe(C), Y = {};
  Y[n(464)] = 1e3;
  const [ne, K] = Qe(Y), D = Ue(null), [V, q] = Qe(null), X = (j) => {
    const E = n;
    if (j[E(478)](), s[E(452)][E(559)] == !0) return;
    const Be = Nt[j[E(543)]], _e = a[E(494)], Te = m[E(494)], G = _e[E(432)](), Ee = Te[E(432)]();
    let ct, At;
    const An = G[E(486)] - Ee[E(486)], Tt = G[E(524)] - Ee[E(524)];
    if (j[E(543)][E(436)](E(519))) {
      const { touches: Oe, changedTouches: Ge } = j, lt = Oe[0] ?? Ge[0];
      ct = lt[E(522)], At = lt[E(476)];
    } else if (j[E(543)][E(436)](E(555)))
      if (E(496) === E(528)) {
        const Oe = {};
        Oe[E(559)] = !0, Oe[E(446)] = !1;
        const Ge = { ..._0x46fc1b[E(452)], ...Oe };
        _0x2d5642[E(471)](Ge);
      } else ct = j[E(460)], At = j[E(546)];
    if (Be == Nt[E(507)]) {
      s[E(471)]({ ...s[E(452)], isDown: !0 }), f(ct - Ee[E(482)]), u(At - Ee[E(564)]);
      const Oe = {};
      Oe[E(539)] = 1, Oe[E(450)] = E(448);
      const Ge = { ...v, ...Oe };
      O(Ge), x(performance[E(506)]());
    } else if (Be == Nt[E(493)])
      if (E(517) !== E(488)) {
        if (s[E(452)][E(446)] == !1) return;
        var Lt = ct - l - G[E(482)], Dt = At - d - G[E(564)];
        Lt = Math[E(540)](3, Math[E(430)](Lt, An) - 3), Dt = Math[E(540)](3, Math[E(430)](Dt, Tt) - 3);
        const Oe = {};
        Oe[E(564)] = Dt + "px", Oe[E(482)] = Lt + "px";
        const Ge = { ...N, ...Oe };
        B(Ge);
      } else
        _0x1b5ac7() ? _0x131382() : _0x590524(_0x3192fd);
    else if (Be == Nt[E(532)])
      if (E(444) === E(547)) {
        const Oe = { ..._0x462527[E(452)] };
        Oe[E(446)] = !1, _0x60a656[E(471)](Oe);
      } else {
        const Oe = performance[E(506)]() - h;
        if (y == Nt[E(507)] || Oe < 100) {
          const Ot = {};
          Ot[E(559)] = !0, Ot[E(446)] = !1, s[E(471)]({ ...s[E(452)], ...Ot });
        } else s[E(471)]({ ...s[E(452)], isDown: !1 });
        const Ge = {};
        Ge[E(539)] = 0.3, Ge[E(450)] = E(533);
        const lt = { ...v, ...Ge };
        O(lt);
      }
    g(Be), Te[E(437)]();
  }, ee = async (j) => {
    const E = n;
    j[E(478)]();
    const Be = j[E(509)][E(453)](E(445))[E(489)](E(469));
    if (Be === E(566))
      sl() ? Dv() : Lv(r);
    else if (E(535) === E(498)) {
      const _e = _0x317459[E(506)]() - _0x5011e7;
      if (_0x3a7783 == _0x25aae3[E(507)] || _e < 100) {
        const Ee = {};
        Ee[E(559)] = !0, Ee[E(446)] = !1;
        const ct = { ..._0x5bd702[E(452)], ...Ee };
        _0x2b4b2f[E(471)](ct);
      } else {
        const Ee = { ..._0x5320fe[E(452)] };
        Ee[E(446)] = !1, _0x3ef980[E(471)](Ee);
      }
      const Te = {};
      Te[E(539)] = 0.3, Te[E(450)] = E(533);
      const G = { ..._0x135ad8, ...Te };
      _0x59c3e9(G);
    } else {
      const _e = {};
      _e[E(523)] = E(442), _e[E(561)] = Be, _e[E(499)] = "";
      const Te = _e;
      if (Be === E(531) && (Te[E(499)] = await navigator[E(473)][E(520)]()), Be === E(516))
        if (E(567) === E(567)) Te[E(549)] = E(514);
        else {
          const G = _0x3d175e();
          _0x3cadfd(_0x558e00, G);
        }
      i(Hs, Te);
    }
    s[E(471)]({ ...s[E(452)], showMenu: !1 }), b[E(494)][E(437)]();
  }, Z = (j) => {
    const E = sl();
    i(Tv, E);
  };
  et(() => {
    requestAnimationFrame(() => {
      const j = _n;
      if (j(434) === j(529)) {
        const E = { ..._0x2864bd };
        E[j(539)] = _0x3b823f[j(452)][j(559)] ? 1 : 0, _0x2815a1(E);
      } else {
        const E = { ...ne };
        E[j(539)] = s[j(452)][j(559)] ? 1 : 0, K(E);
      }
    });
  }, [s]), et(() => {
    const j = n, E = a[j(494)], Be = [j(511), j(525), j(557), j(508)];
    if (E)
      if (j(527) === j(527)) Be[j(573)]((_e) => {
        const Te = j;
        Te(563) !== Te(563) ? (_0x116639 && (_0x199963[Te(494)] = _0x325c07), _0x5ecd28()) : E[Te(490)](_e, Z);
      });
      else {
        const _e = _0x4b314a ? function() {
          const Te = j;
          if (_0x366e86) {
            const G = _0x16db58[Te(518)](_0x4bf50d, arguments);
            return _0x4771f1 = null, G;
          }
        } : function() {
        };
        return _0x11871d = !1, _e;
      }
    return () => {
      const _e = j;
      _e(497) === _e(497) ? E && E[_e(472)](_e(505), Z) : _0x4f8b3a[_e(490)](_0x456289, _0x5e49e2);
    };
  }, []), et(() => {
    const j = n, E = m[j(494)], Be = b[j(494)];
    if (Be && (j(570) === j(457) ? (_0x510d3c = _0x490185[j(460)], _0x5b0c83 = _0x415b03[j(546)]) : Be[j(490)](j(505), ee)), E) {
      const _e = {};
      _e[j(449)] = !1;
      const Te = _e;
      return o ? j(474) === j(545) ? _0x20b45d(_0x414a0c) : (E[j(490)](j(544), X, Te), E[j(490)](j(459), X, Te), E[j(490)](j(487), X)) : [j(493), j(507), j(532)][j(573)]((G) => {
        E[j(490)](G, X);
      }), () => {
        const G = j;
        if (Be)
          if (G(470) === G(451)) {
            const Ee = {};
            Ee[G(464)] = 999, Ee[G(524)] = _0xeb164d[G(494)] == G(504) ? G(481) : null, Ee[G(486)] = _0x50e275[G(494)] != G(504) ? G(481) : null, Ee[G(564)] = G(463), Ee[G(456)] = "5%", _0x4b07e6(Ee);
          } else Be[G(472)](G(505), ee);
        E && (G(466) !== G(466) ? _0x556570[G(549)] = G(514) : o ? G(530) !== G(502) ? [G(544), G(459), G(487)][G(573)]((Ee) => {
          E[G(472)](Ee, X);
        }) : _0x1d5aa2[G(494)] = _0x247750 : [G(493), G(507), G(532)][G(573)]((Ee) => {
          E[G(472)](Ee, X);
        }));
      };
    }
  }, [o, X]);
  const Q = () => {
    const j = n, E = {};
    E[j(464)] = 999, E[j(524)] = D[j(494)] == j(504) ? j(481) : null, E[j(486)] = D[j(494)] != j(504) ? j(481) : null, E[j(564)] = j(463), E[j(456)] = "5%", B(E);
  };
  gl(t, () => ({ fixTouch: (j) => {
    const E = n;
    E(484) !== E(461) ? (j && (D[E(494)] = j), Q()) : _0x2ba91e[E(490)](_0x59bc17, _0x2b6111);
  }, setFullscreen: (j) => {
    const E = n;
    E(513) === E(513) ? q(j) : _0x1d79a7[E(472)](E(505), _0x39aeef);
  } }));
  const oe = {};
  oe[n(526)] = n(455);
  const ie = {};
  ie.d = n(V ? 479 : 458);
  const J = {};
  J[n(565)] = n(465);
  const re = {};
  re[n(526)] = n(455);
  const he = {};
  he.d = n(480);
  const fe = {};
  fe.d = n(521);
  const pe = {};
  pe[n(565)] = n(441);
  const me = {};
  me[n(526)] = n(455);
  const k = {};
  k.d = n(552);
  const F = {};
  F[n(565)] = n(485);
  const P = {};
  P[n(526)] = n(455);
  const L = {};
  L.d = n(536);
  const S = {};
  S.cx = n(438), S.cy = "18", S.r = "1";
  const W = {};
  W[n(565)] = n(c ? 574 : 462);
  const I = {};
  I[n(526)] = n(455);
  const ue = {};
  ue.d = n(501);
  const we = {};
  we.d = n(537);
  const st = {};
  st[n(565)] = n(443);
  const _t = {};
  _t[n(526)] = n(455);
  const ot = {};
  ot.d = n(554);
  const Ct = {};
  Ct[n(565)] = n(571);
  const Me = {};
  Me[n(526)] = n(455);
  const Ce = {};
  Ce.d = n(495);
  const Xe = {};
  Xe[n(565)] = n(569);
  const pt = {};
  pt[n(526)] = n(455);
  const at = {};
  at.d = n(454);
  const sn = {};
  sn[n(565)] = n(556);
  const an = {};
  an[n(526)] = n(455);
  const Cn = {};
  Cn.d = n(550);
  const cn = {};
  return cn[n(565)] = n(515), H.jsxs(H.Fragment, { children: [s[n(452)][n(559)] ? H.jsxs(Iv, { id: n(510) + r, style: ne, ref: b, children: [H.jsxs(Bt, { "data-id": n(566), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: oe, children: H.jsx(n(492), ie) }), H.jsx(Ft, J)] }), H.jsxs(Bt, { "data-id": n(516), children: [H.jsxs(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: re, children: [H.jsx(n(492), he), H.jsx(n(492), fe)] }), H.jsx(Ft, pe)] }), H.jsxs(Bt, { "data-id": n(531), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: me, children: H.jsx(n(492), k) }), H.jsx(Ft, F)] }), H.jsxs(Bt, { "data-id": n(538), children: [H.jsxs(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: P, children: [H.jsx(n(492), L), H.jsx(n(560), S)] }), H.jsx(Ft, W)] }), H.jsxs(Bt, { "data-id": n(491), children: [H.jsxs(n(553), { xmlns: n(467), width: "25", height: "25", viewBox: n(548), style: I, children: [H.jsx(n(492), ue), H.jsx(n(492), we)] }), H.jsx(Ft, st)] }), H.jsxs(Bt, { "data-id": n(503), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: _t, children: H.jsx(n(492), ot) }), H.jsx(Ft, Ct)] }), H.jsxs(Bt, { "data-id": n(534), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: Me, children: H.jsx(n(492), Ce) }), H.jsx(Ft, Xe)] }), H.jsxs(Bt, { "data-id": n(572), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: pt, children: H.jsx(n(492), at) }), H.jsx(Ft, sn)] }), H.jsxs(Bt, { "data-id": n(568), children: [H.jsx(n(553), { xmlns: n(467), width: "28", height: "28", viewBox: n(548), style: an, children: H.jsx(n(492), Cn) }), H.jsx(Ft, cn)] })] }) : null, H.jsx(jv, { id: n(551) + r, className: n(431), ref: w, style: v, children: H.jsx(Nv, { style: N, src: Pv, className: n(431), id: n(447) + r, alt: n(477), ref: m, draggable: !1 }) })] });
}), qe = nn;
function Do() {
  const e = ["configure", "buildDecoder", "ZMrSx", "3090619PmHCYy", "setIsConnect", "canvas", "276238vERVcl", "constructor", "maxWidth", "WNTpK", "error", "codec", "ctx", "close", "width", "LuyhB", "orientation", "from", "CyWik", "rotate", "rootSize", "avc1.64001E", "6751455UrVPCY", "autoResize", "2899770nkeFXJ", "innerHeight", "setVideoMeta", "33FVchOc", "optimizeForLatency", "length", "search", "iNInj", "setOrientation", "concatUint8Arrays", "codedWidth", "height", "state", "fDCgf", "codedHeight", "isPlay", "delta", "exoht", "12QpvEhi", "prefer-hardware", "portrait", "drawImage", "Decoder error:", "translate", "oIeGc", "8199ALgdMB", "videoMeta", "11SEcFiY", "(((.+)+)+)+$", "isMobile", "lock", "2749467fPpLyQ", "now", "ZAgnL", "decoder", "landscape", "concat", "scale", "decode", "resizedWidth", "getContext", "42757056bbQalg", "9992ElFuyX", "setFullscreen", "key", "hardwareAcceleration", "round", "apply", "4chebiX", "CjcVu", "iframe", "toString", "isKeyFrame"];
  return Do = function() {
    return e;
  }, Do();
}
(function(e, t) {
  const n = nn, r = e();
  for (; ; )
    try {
      if (-parseInt(n(189)) / 1 * (-parseInt(n(144)) / 2) + parseInt(n(193)) / 3 * (parseInt(n(133)) / 4) + parseInt(n(160)) / 5 + parseInt(n(180)) / 6 * (parseInt(n(141)) / 7) + -parseInt(n(127)) / 8 * (parseInt(n(187)) / 9) + -parseInt(n(162)) / 10 * (-parseInt(n(165)) / 11) + -parseInt(n(126)) / 12 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 838127);
const zv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = e ? function() {
      const o = nn;
      if (n) {
        const i = n[o(132)](t, arguments);
        return n = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Xs = zv(void 0, function() {
  const e = nn;
  return Xs[e(136)]()[e(168)](e(190))[e(136)]()[e(145)](Xs)[e(168)](e(190));
});
Xs();
var al, cl, ll, ul, fl, dl, hl, pl, xl;
xl = qe(128), pl = qe(124), hl = qe(170), dl = qe(161), fl = qe(164), ul = qe(139), ll = qe(137), cl = qe(171), al = qe(123);
class Vv {
  constructor(t, n, r, o) {
    Rt(this, xl, (t) => {
      const n = qe;
      if (t)
        if (n(140) !== n(140)) this[n(161)](_0x56598b[n(172)], _0x457b9e[n(176)]);
        else {
          const r = window[n(163)] + 10, o = this[n(124)](null, this[n(158)][n(152)], this[n(158)][n(173)], r, r);
          this[n(152)] = o[n(152)], this[n(173)] = o[n(173)];
        }
      else {
        if (n(156) !== n(156)) return _0x40ff31[n(136)]()[n(168)](n(190))[n(136)]()[n(145)](_0x2942b1)[n(168)](n(190));
        this[n(152)] = this[n(158)][n(152)], this[n(173)] = this[n(158)][n(173)];
      }
    });
    Rt(this, pl, (t, n, r, o, i) => {
      const s = qe;
      let a;
      if (t && o > this[s(146)] && r > n)
        if (s(186) === s(186)) i = this[s(146)];
        else {
          const c = _0x35bb8f ? function() {
            const l = s;
            if (_0x5f5333) {
              const f = _0x2bfa96[l(132)](_0x272965, arguments);
              return _0x4a2ddd = null, f;
            }
          } : function() {
          };
          return _0x391b7b = !1, c;
        }
      return i && (s(175) !== s(175) ? this[s(135)] = _0x17ccc0 : (a = i / n * r, a > o && (i = o / r * n, a = o / n * n))), { width: Math[s(131)](i), height: Math[s(131)](a) };
    });
    Rt(this, hl, (t) => {
      const n = qe;
      this[n(154)] = t, this[n(191)] && screen[n(154)][n(192)](t);
    });
    Rt(this, dl, (t, n) => {
      var a;
      const r = qe, o = this[r(191)] == !0 ? window[r(163)] - 12 : window[r(163)] - 50, i = this[r(124)](!0, t, n, o, o);
      this[r(152)] = i[r(152)], this[r(173)] = i[r(173)], !this[r(158)] && (r(147) === r(147) ? (a = this[r(142)]) == null || a.call(this, !0) : (this[r(143)] = _0x1de7e5, this[r(146)] = _0x4a543a, this[r(191)] = _0x2226ff, this[r(142)] = _0x5c70e9, this[r(150)] = _0x38ff8f[r(125)]("2d"), this[r(119)] = this[r(139)](), this[r(188)] = null, this[r(135)] = null, this[r(177)] = null, this[r(152)] = null, this[r(173)] = null, this[r(158)] = null, this[r(154)] = r(182)));
      const s = {};
      s[r(152)] = i[r(152)], s[r(173)] = i[r(173)], this[r(158)] = s;
    });
    Rt(this, fl, (t) => {
      const n = qe, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(188)] = r;
    });
    Rt(this, ul, () => {
      const t = qe, n = new VideoDecoder({ output: async (o) => {
        const i = nn;
        if (i(134) !== i(134)) {
          if (_0x290954[_0x3969ad] === 0 && _0x2aef05[_0x351014 + 1] === 0 && _0x46a04b[_0x13c69f + 2] === 0 && _0x4f304a[_0x21eeba + 3] === 1)
            return (_0x364ba8[_0x4488e3 + 4] & 31) === 5;
        } else {
          const s = await createImageBitmap(o);
          (!this[i(152)] || !this[i(173)]) && this[i(161)](o[i(172)], o[i(176)]), this[i(154)] == i(120) ? (this[i(143)][i(152)] = this[i(173)], this[i(143)][i(173)] = this[i(152)], this[i(150)][i(185)](0, this[i(152)]), this[i(150)][i(157)](Math.PI / 2), this[i(150)][i(122)](-1, -1), this[i(150)][i(183)](s, 0, 0, this[i(152)], this[i(173)])) : (this[i(143)][i(152)] = this[i(152)], this[i(143)][i(173)] = this[i(173)], this[i(150)][i(183)](s, 0, 0, this[i(152)], this[i(173)])), s[i(151)](), o[i(151)]();
        }
      }, error: (o) => console[t(148)](t(184), o) }), r = {};
      return r[t(149)] = t(159), r[t(130)] = t(181), r[t(166)] = !0, n[t(138)](r), n;
    });
    Rt(this, ll, (t) => {
      const n = qe;
      for (let r = 0; r <= t[n(167)] - 4; r++)
        if (n(153) === n(169)) _0x4a6f74[n(154)][n(192)](_0x5dc56a);
        else if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t[n(167)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Rt(this, cl, (t, n) => {
      const r = qe, o = Array[r(155)](t)[r(121)](Array[r(155)](n));
      return new Uint8Array(o);
    });
    Rt(this, al, (t) => {
      const n = qe;
      if (!this[n(119)] || this[n(119)][n(174)] == n(151) || !this[n(188)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(137)](r);
      o && (this[n(135)] = r), this[n(135)] && this[n(188)] && (!this[n(177)] && (n(118) !== n(179) ? (r = this[n(171)](this[n(188)], this[n(135)]), this[n(177)] = !0) : (this[n(143)][n(152)] = this[n(173)], this[n(143)][n(173)] = this[n(152)], this[n(150)][n(185)](0, this[n(152)]), this[n(150)][n(157)](_0x58c098.PI / 2), this[n(150)][n(122)](-1, -1), this[n(150)][n(183)](_0x3e4991, 0, 0, this[n(152)], this[n(173)]))), this[n(119)][n(123)](new EncodedVideoChunk({ timestamp: performance[n(194)]() * 1e3, type: n(o ? 129 : 178), data: r })));
    });
    const i = nn;
    this[i(143)] = t, this[i(146)] = n, this[i(191)] = r, this[i(142)] = o, this[i(150)] = t[i(125)]("2d"), this[i(119)] = this[i(139)](), this[i(188)] = null, this[i(135)] = null, this[i(177)] = null, this[i(152)] = null, this[i(173)] = null, this[i(158)] = null, this[i(154)] = i(182);
  }
}
function nn(e, t) {
  const n = Do();
  return nn = function(r, o) {
    return r = r - 118, n[r];
  }, nn(e, t);
}
(function(e, t) {
  const n = Ut, r = e();
  for (; ; )
    try {
      if (-parseInt(n(395)) / 1 + parseInt(n(457)) / 2 * (parseInt(n(355)) / 3) + -parseInt(n(393)) / 4 * (-parseInt(n(414)) / 5) + -parseInt(n(410)) / 6 * (parseInt(n(455)) / 7) + parseInt(n(374)) / 8 + -parseInt(n(392)) / 9 + parseInt(n(401)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 966749);
const Hv = /* @__PURE__ */ function() {
  let e = !0;
  return function(t, n) {
    const r = Ut;
    if (r(422) !== r(447)) {
      const o = e ? function() {
        const i = r;
        if (n) {
          const s = n[i(388)](t, arguments);
          return n = null, s;
        }
      } : function() {
      };
      return e = !1, o;
    } else {
      const o = {};
      o[r(364)] = _0x304692, o[r(380)] = r(432), _0x22a2be(o);
    }
  };
}(), $s = Hv(void 0, function() {
  const e = Ut;
  return $s[e(408)]()[e(398)](e(444))[e(408)]()[e(437)]($s)[e(398)](e(444));
});
$s();
function Ut(e, t) {
  const n = Bo();
  return Ut = function(r, o) {
    return r = r - 349, n[r];
  }, Ut(e, t);
}
const hy = ml((e, t) => {
  const n = Ut, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, f = o[n(372)], d = /iPhone|iPad|iPod|Android/i[n(406)](navigator[n(373)]), u = n(397), [y, g] = Qe(null), [h, x] = Qe(a), w = {};
  w[n(464)] = !1, w[n(354)] = !1;
  const [b, m] = Qe(w), A = Ue(null), v = Ue(null), [O, C] = Qe(null), N = n(377) + f, B = n(448) + f, Y = n(458) + f, ne = Ue(null), K = Ue(null), D = Ue(null), [V, q] = Qe([]), X = Ue(null), ee = Ue(/* @__PURE__ */ new Map());
  et(() => {
    x(a);
  }, [a]);
  const Z = (k) => {
    q((F) => [...F, k]);
  }, Q = (k) => {
    const F = n;
    v[F(465)][F(366)](F(358), k), c == null || c(k);
  };
  gl(t, () => ({ api: async function(k, F = 5e3) {
    return new Promise((P, L) => {
      const S = Ut;
      if (S(452) === S(362)) _0x4c216f(_0x26d1cd), _0x11b490[S(465)][S(473)](_0x3a9165[S(383)]);
      else {
        const W = setTimeout(() => {
          const I = S;
          ee[I(465)][I(473)](k[I(383)]);
          const ue = {};
          ue[I(462)] = k[I(462)], ue[I(383)] = k[I(383)], ue[I(439)] = !1, ue[I(358)] = I(381), L(ue);
        }, F);
        ee[S(465)][S(378)](k[S(383)], (I) => {
          const ue = S;
          if (ue(453) === ue(467)) {
            const we = {};
            we[ue(364)] = _0x5e090a[ue(364)], we[ue(380)] = ue(432), _0x2c3d18(we);
          } else clearTimeout(W), P(I);
        }), v[S(465)][S(366)](S(358), k);
      }
    });
  }, sync: function(k) {
    const F = n;
    F(376) !== F(376) ? _0x4d089b && _0x3ad5d7[F(461)]() : v[F(465)][F(366)](F(358), k);
  }, showDeviceId: function(k) {
    x(k);
  } })), et(() => {
    (async () => {
      const k = Ut;
      try {
        const F = {};
        F[k(389)] = k(363);
        const P = {};
        P[k(372)] = o[k(372)], P[k(349)] = o[k(478)];
        const L = {};
        L[k(416)] = r, L[k(440)] = k(415), L[k(423)] = 1e4, L[k(419)] = F, L[k(459)] = P;
        const S = L, W = await bv(S);
        g(W[k(459)]);
      } catch (F) {
        if (k(399) === k(446)) _0x5e5818(_0x186ced);
        else {
          const P = {};
          P[k(364)] = F, P[k(380)] = k(432), Z(P);
        }
      }
    })();
  }, []), et(() => {
    const k = n;
    if (k(396) !== k(405)) {
      if (v[k(465)] || !y) return;
      const F = {};
      F[k(384)] = !1;
      const P = co(y, F);
      return P.on(k(382), () => {
        const L = k, S = {};
        S[L(462)] = L(382), S[L(434)] = u, S[L(372)] = o[L(372)], S[L(352)] = d, S[L(478)] = o[L(478)], P[L(366)](L(368), S);
      }), P.on(k(368), (L) => {
        const S = k;
        if (L[S(439)] == !0)
          if (S(404) !== S(404)) {
            const W = () => {
              const I = S, ue = _0x434d08[I(413)] || _0x4c357a[I(428)] || _0x372d4d[I(353)] || _0x180d24[I(477)];
              _0x1d4f3e[I(465)][I(365)](!!ue), _0x594130[I(465)][I(365)](!!ue), _0x1b062b[I(465)][I(367)]();
            };
            return _0x401c15[S(403)](S(472), W), () => {
              const I = S;
              _0x5c8a42[I(479)](I(472), W);
            };
          } else {
            v[S(465)] = P;
            const W = {};
            W[S(462)] = S(379), P[S(366)](S(358), W);
          }
        else if (S(407) === S(407)) {
          const W = {};
          W[S(364)] = L[S(364)], W[S(380)] = S(432), Z(W);
        } else {
          const W = _0x55bc89(() => {
            const I = S;
            _0x42328c[I(465)][I(473)](_0x3c2815[I(383)]);
            const ue = {};
            ue[I(462)] = _0x368061[I(462)], ue[I(383)] = _0x3294e4[I(383)], ue[I(439)] = !1, ue[I(358)] = I(381), _0x1865e0(ue);
          }, _0x2feccd);
          _0x5c20af[S(465)][S(378)](_0x4179f9[S(383)], (I) => {
            _0x2ca232(W), _0x294693(I);
          }), _0x3fecc3[S(465)][S(366)](S(358), _0x556246);
        }
      }), P.on(k(425), (L) => {
        const S = k;
        X[S(465)][S(387)](L);
      }), P.on(k(443), (L) => {
        const S = k;
        if (L) {
          if (S(475) !== S(475)) {
            const W = _0xc3525[S(465)];
            _0x221b69[S(465)] = new _0x438c65(W, _0x275f44, _0x3927cd, _0x51819e);
          } else if (X[S(465)][S(429)](L), !X[S(465)][S(474)]) {
            const W = {};
            W[S(462)] = S(460), P[S(366)](S(358), W);
          }
        } else {
          const W = {};
          W[S(462)] = S(456), P[S(366)](S(443), W);
        }
      }), P.on(k(358), (L) => {
        const S = k;
        if (S(466) === S(402))
          if (_0x395ac4 === _0x3b42e7) {
            const W = { ..._0x3ef063 };
            W[S(464)] = !1, _0x580fe5(W);
          } else _0x4a488b(_0x2e9b0c);
        else if ((L[S(462)] == S(449) || L[S(462)] == S(359)) && L[S(394)][S(445)] > 0 ? navigator[S(385)][S(351)](L[S(394)]) : L[S(462)] == S(400) && (S(360) !== S(360) ? _0x46d1bf[S(465)][S(438)]() : (X[S(465)][S(375)](L[S(361)]), D[S(465)][S(367)](L[S(361)]))), L[S(383)]) {
          const W = ee[S(465)][S(441)](L[S(383)]);
          W && (S(412) === S(471) ? _0xc3fd5c(_0x322c7b) : (W(L), ee[S(465)][S(473)](L[S(383)])));
        }
      }), P.on(k(411), (L) => {
        const S = k;
        if (S(430) !== S(369)) {
          const W = {};
          W[S(364)] = L, W[S(380)] = S(432), Z(W);
        } else {
          const W = {};
          W[S(364)] = _0x3722f6, W[S(380)] = S(432), _0x232d28(W);
        }
      }), P.on(k(461), (L) => {
        const S = k, W = {};
        W[S(364)] = S(463) + L[S(424)], W[S(380)] = S(435), Z(W), A[S(465)] && (S(431) === S(431) ? A[S(465)][S(438)]() : (_0x2e4e36(_0x257548), _0x3504d6(_0x513193)));
      }), () => {
        P && P[k(461)]();
      };
    } else _0x184395((F) => [...F, _0xbfc1e3]);
  }, [y]), et(() => {
    const k = n;
    if (k(371) === k(371)) {
      const F = K[k(465)];
      X[k(465)] = new Vv(F, i, d, C);
    } else {
      _0x343512[k(465)] = _0xe0b5e3;
      const F = {};
      F[k(462)] = k(379), _0x1019a0[k(366)](k(358), F);
    }
  }, []), et(() => {
    const k = n, F = () => {
      const P = Ut;
      if (P(370) !== P(370)) _0x9e8dc5[P(461)]();
      else {
        const L = document[P(413)] || document[P(428)] || document[P(353)] || document[P(477)];
        X[P(465)][P(365)](!!L), D[P(465)][P(365)](!!L), D[P(465)][P(367)]();
      }
    };
    return document[k(403)](k(472), F), () => {
      const P = k;
      document[P(479)](P(472), F);
    };
  }, []);
  const oe = {};
  oe[n(476)] = o[n(372)];
  const ie = {};
  ie[n(427)] = n(386);
  const J = {};
  J[n(427)] = n(386);
  const re = {};
  re[n(427)] = n(386);
  const he = {};
  he[n(417)] = 0, he[n(436)] = 0;
  const fe = {};
  fe[n(441)] = b, fe[n(378)] = m;
  const pe = {};
  pe.id = N, pe[n(426)] = "0", pe[n(433)] = n(442);
  const me = {};
  return me[n(356)] = 5, H.jsxs(Od, { id: Y, children: [h && H.jsx(Id, { children: H.jsx(kd, oe) }), V[n(445)] == 0 ? H.jsxs(H.Fragment, { children: [!O && H.jsxs(kf, { align: n(470), gap: n(418), children: [H.jsx(br, ie), H.jsx(br, J), H.jsx(br, re)] }), H.jsxs(Rd, { ref: ne, id: B, style: O ? {} : he, children: [s ? H.jsx(Fv, { status: fe, ref: D, imageRef: K, displayId: f, isMobile: d, isShowDeviceId: h, onSenData: (k, F) => {
    const P = n;
    P(390) !== P(357) ? k === Hs && F[P(450)] === P(372) ? x(!h) : k === Hs && F[P(450)] === P(391) ? P(469) === P(469) ? l(o[P(372)]) : _0x40a77e === _0x2cb2ed && _0x4c8f1a[P(450)] === P(372) ? _0x396ceb(!_0x177dfd) : _0x35ccd1 === _0x2538d1 && _0x2c367f[P(450)] === P(391) ? _0x26341a(_0x15a332[P(372)]) : _0x493914(_0x5b6ca5) : P(409) === P(454) ? _0x19d307(!_0x5215b6) : Q(F) : _0x1da2f7[P(465)][P(366)](P(358), _0xa6f4cf);
  } }) : null, H.jsx(Rv, { canvasContent: pe, imageRef: K, isMobile: d, assistive: b, onImgEvent: (k, F) => {
    const P = n;
    if (P(421) === P(420)) {
      if (_0x3edfe1[P(465)][P(429)](_0x123b5a), !_0x1fa148[P(465)][P(474)]) {
        const L = {};
        L[P(462)] = P(460), _0x2cd8ff[P(366)](P(358), L);
      }
    } else if (k === s0)
      if (P(468) === P(468)) {
        const L = { ...b };
        L[P(464)] = !1, m(L);
      } else {
        const L = { ..._0x38b70a };
        L[P(464)] = !1, _0x5ef28c(L);
      }
    else if (P(350) !== P(350)) {
      const L = {};
      L[P(462)] = P(460), _0x336c44[P(366)](P(358), L);
    } else Q(F);
  } })] })] }) : V[n(451)]((k, F) => H.jsx(Tf, { style: me, message: k[n(364)], type: k[n(380)], showIcon: !0, closable: !0 }, F))] });
});
function Bo() {
  const e = ["constructor", "close", "status", "method", "get", "false", "video_meta", "(((.+)+)+)+$", "length", "FwSVR", "FlymZ", "screen_", "COPY_TEXT", "shortcut", "map", "NtpyD", "ZSVdA", "cHXZN", "231iBxDuZ", "get_video_meta", "1306cpePpI", "screen_main_", "data", "onSyncIFrame", "disconnect", "action", "connection closed code: ", "showMenu", "current", "gbApK", "IDUtU", "rXswa", "GTUdY", "center", "yVHBx", "fullscreenchange", "delete", "iframe", "AYspZ", "children", "msFullscreenElement", "passwd", "removeEventListener", "password", "ioLLA", "writeText", "isMobile", "mozFullScreenElement", "isDown", "4971YByfEO", "marginTop", "khZtW", "message", "shortcutEvent", "tLMbP", "value", "eLNGY", "application/json", "msg", "setFullscreen", "emit", "fixTouch", "join_room", "YrGHA", "IzTkI", "cudrS", "device_id", "userAgent", "2859184srCsBp", "setOrientation", "RTwHj", "image_", "set", "onScreenEvent", "type", "Timeout waiting for response", "connect", "taskId", "reconnection", "clipboard", "large", "decode", "apply", "Content-Type", "pMLuI", "sync", "693009qdUugA", "4hzIvxb", "text", "1452941XnRKBT", "GwmlE", "control", "search", "HhIqC", "orientation", "9125220VbZAxS", "tQZwB", "addEventListener", "gbQqg", "DMAMM", "test", "helNU", "toString", "APYmA", "138546aORXTZ", "connect_error", "XMaaN", "fullscreenElement", "4533765LupsTL", "post", "url", "height", "middle", "headers", "mwpFc", "UOVax", "uSYop", "timeout", "code", "screen", "tabIndex", "size", "webkitFullscreenElement", "setVideoMeta", "zNEgt", "DBQYW", "error", "draggable", "type_client", "info", "width"];
  return Bo = function() {
    return e;
  }, Bo();
}
(function(e, t) {
  for (var n = Or, r = e(); ; )
    try {
      var o = parseInt(n(420)) / 1 + parseInt(n(413)) / 2 * (parseInt(n(410)) / 3) + -parseInt(n(412)) / 4 * (-parseInt(n(419)) / 5) + parseInt(n(417)) / 6 + parseInt(n(418)) / 7 + -parseInt(n(421)) / 8 * (-parseInt(n(411)) / 9) + parseInt(n(422)) / 10 * (-parseInt(n(414)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 501727);
var Uv = /* @__PURE__ */ function() {
  var e = !0;
  return function(t, n) {
    var r = e ? function() {
      var o = Or;
      if (n) {
        var i = n[o(423)](t, arguments);
        return n = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Gs = Uv(void 0, function() {
  var e = Or;
  return Gs[e(409)]()[e(415)](e(424))[e(409)]()[e(416)](Gs)[e(415)](e(424));
});
Gs();
function Or(e, t) {
  var n = Fo();
  return Or = function(r, o) {
    r = r - 409;
    var i = n[r];
    return i;
  }, Or(e, t);
}
function Fo() {
  var e = ["275515wwiZdV", "329299JMiQGh", "40LMNuOs", "21328060VVVwbg", "apply", "(((.+)+)+)+$", "toString", "3588pFQivW", "831348LORmdQ", "44rSzfoj", "1038khXpiz", "11HGdMwr", "search", "constructor", "1524084cKrEkT", "2537521Jwhvpt"];
  return Fo = function() {
    return e;
  }, Fo();
}
export {
  hy as ControlMyRPP
};
