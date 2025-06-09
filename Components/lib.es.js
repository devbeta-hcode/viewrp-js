var Ad = Object.defineProperty;
var Td = (s, i, o) => i in s ? Ad(s, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[i] = o;
var on = (s, i, o) => Td(s, typeof i != "symbol" ? i + "" : i, o);
import * as Z from "react";
import lt, { useDebugValue as Ha, createElement as Od, useRef as mt, useContext as On, isValidElement as Rd, version as kd, createContext as da, useLayoutEffect as Pd, useEffect as _t, useState as It, forwardRef as _l, useImperativeHandle as Nl } from "react";
import Ua from "react-dom";
var Dr = Vo;
(function(s, i) {
  for (var o = Vo, c = s(); ; )
    try {
      var l = parseInt(o(121)) / 1 + -parseInt(o(107)) / 2 + -parseInt(o(123)) / 3 + -parseInt(o(124)) / 4 * (parseInt(o(114)) / 5) + parseInt(o(126)) / 6 + parseInt(o(106)) / 7 + parseInt(o(103)) / 8;
      if (l === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(zo, 128485);
typeof globalThis !== Dr(112) || typeof window !== Dr(112) || (typeof global !== Dr(112) ? global : Dr(112));
function zo() {
  var s = ["default", "176850NrUruC", "8VPGDkF", "keys", "481296rjvFBy", "__esModule", "apply", "ertyDescri", "call", "construct", "2002080BeCOYr", "length", "getOwnProp", "1057945MchcHr", "264268kKshwV", "constructo", "function", "forEach", "prototype", "undefined", "erty", "446135xKluOI", "defineProp", "nVXKc", "ptor", "get", "value", "hasOwnProp", "16412qMcuLB"];
  return zo = function() {
    return s;
  }, zo();
}
function Vo(s, i) {
  var o = zo();
  return Vo = function(c, l) {
    c = c - 103;
    var h = o[c];
    return h;
  }, Vo(s, i);
}
function Id(s) {
  var i = Dr;
  return s && s[i(127)] && Object[i(111)][i(120) + i(113)][i(130)](s, i(122)) ? s[i(122)] : s;
}
var ro = { exports: {} }, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function _d() {
  if (Wa) return Or;
  Wa = 1;
  var s = lt, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, b, S) {
    var C, P = {}, w = null, U = null;
    S !== void 0 && (w = "" + S), b.key !== void 0 && (w = "" + b.key), b.ref !== void 0 && (U = b.ref);
    for (C in b) c.call(b, C) && !h.hasOwnProperty(C) && (P[C] = b[C]);
    if (v && v.defaultProps) for (C in b = v.defaultProps, b) P[C] === void 0 && (P[C] = b[C]);
    return { $$typeof: i, type: v, key: w, ref: U, props: P, _owner: l.current };
  }
  return Or.Fragment = o, Or.jsx = g, Or.jsxs = g, Or;
}
var Rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function Nd() {
  return qa || (qa = 1, process.env.NODE_ENV !== "production" && function() {
    var s = lt, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), V = Symbol.iterator, D = "@@iterator";
    function L(F) {
      if (F === null || typeof F != "object")
        return null;
      var oe = V && F[V] || F[D];
      return typeof oe == "function" ? oe : null;
    }
    var K = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(F) {
      {
        for (var oe = arguments.length, ue = new Array(oe > 1 ? oe - 1 : 0), we = 1; we < oe; we++)
          ue[we - 1] = arguments[we];
        _("error", F, ue);
      }
    }
    function _(F, oe, ue) {
      {
        var we = K.ReactDebugCurrentFrame, Ve = we.getStackAddendum();
        Ve !== "" && (oe += "%s", ue = ue.concat([Ve]));
        var He = ue.map(function(Be) {
          return String(Be);
        });
        He.unshift("Warning: " + oe), Function.prototype.apply.call(console[F], console, He);
      }
    }
    var J = !1, q = !1, te = !1, Q = !1, ae = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Se(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === c || F === h || ae || F === l || F === S || F === C || Q || F === U || J || q || te || typeof F == "object" && F !== null && (F.$$typeof === w || F.$$typeof === P || F.$$typeof === g || F.$$typeof === v || F.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === fe || F.getModuleId !== void 0));
    }
    function De(F, oe, ue) {
      var we = F.displayName;
      if (we)
        return we;
      var Ve = oe.displayName || oe.name || "";
      return Ve !== "" ? ue + "(" + Ve + ")" : ue;
    }
    function Ee(F) {
      return F.displayName || "Context";
    }
    function de(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
        case c:
          return "Fragment";
        case o:
          return "Portal";
        case h:
          return "Profiler";
        case l:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case v:
            var oe = F;
            return Ee(oe) + ".Consumer";
          case g:
            var ue = F;
            return Ee(ue._context) + ".Provider";
          case b:
            return De(F, F.render, "ForwardRef");
          case P:
            var we = F.displayName || null;
            return we !== null ? we : de(F.type) || "Memo";
          case w: {
            var Ve = F, He = Ve._payload, Be = Ve._init;
            try {
              return de(Be(He));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ye = Object.assign, me = 0, Ie, Ae, Re, Te, Pe, Ce, pe;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Oe() {
      {
        if (me === 0) {
          Ie = console.log, Ae = console.info, Re = console.warn, Te = console.error, Pe = console.group, Ce = console.groupCollapsed, pe = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: F,
            log: F,
            warn: F,
            error: F,
            group: F,
            groupCollapsed: F,
            groupEnd: F
          });
        }
        me++;
      }
    }
    function ke() {
      {
        if (me--, me === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ye({}, F, {
              value: Ie
            }),
            info: ye({}, F, {
              value: Ae
            }),
            warn: ye({}, F, {
              value: Re
            }),
            error: ye({}, F, {
              value: Te
            }),
            group: ye({}, F, {
              value: Pe
            }),
            groupCollapsed: ye({}, F, {
              value: Ce
            }),
            groupEnd: ye({}, F, {
              value: pe
            })
          });
        }
        me < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = K.ReactCurrentDispatcher, re;
    function he(F, oe, ue) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ve) {
            var we = Ve.stack.trim().match(/\n( *(at )?)/);
            re = we && we[1] || "";
          }
        return `
` + re + F;
      }
    }
    var ne = !1, ie;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new X();
    }
    function le(F, oe) {
      if (!F || ne)
        return "";
      {
        var ue = ie.get(F);
        if (ue !== void 0)
          return ue;
      }
      var we;
      ne = !0;
      var Ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var He;
      He = Fe.current, Fe.current = null, Oe();
      try {
        if (oe) {
          var Be = function() {
            throw Error();
          };
          if (Object.defineProperty(Be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Be, []);
            } catch (Pt) {
              we = Pt;
            }
            Reflect.construct(F, [], Be);
          } else {
            try {
              Be.call();
            } catch (Pt) {
              we = Pt;
            }
            F.call(Be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            we = Pt;
          }
          F();
        }
      } catch (Pt) {
        if (Pt && we && typeof Pt.stack == "string") {
          for (var Le = Pt.stack.split(`
`), Et = we.stack.split(`
`), et = Le.length - 1, rt = Et.length - 1; et >= 1 && rt >= 0 && Le[et] !== Et[rt]; )
            rt--;
          for (; et >= 1 && rt >= 0; et--, rt--)
            if (Le[et] !== Et[rt]) {
              if (et !== 1 || rt !== 1)
                do
                  if (et--, rt--, rt < 0 || Le[et] !== Et[rt]) {
                    var ot = `
` + Le[et].replace(" at new ", " at ");
                    return F.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", F.displayName)), typeof F == "function" && ie.set(F, ot), ot;
                  }
                while (et >= 1 && rt >= 0);
              break;
            }
        }
      } finally {
        ne = !1, Fe.current = He, ke(), Error.prepareStackTrace = Ve;
      }
      var Jn = F ? F.displayName || F.name : "", Ln = Jn ? he(Jn) : "";
      return typeof F == "function" && ie.set(F, Ln), Ln;
    }
    function tt(F, oe, ue) {
      return le(F, !1);
    }
    function se(F) {
      var oe = F.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Je(F, oe, ue) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return le(F, se(F));
      if (typeof F == "string")
        return he(F);
      switch (F) {
        case S:
          return he("Suspense");
        case C:
          return he("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case b:
            return tt(F.render);
          case P:
            return Je(F.type, oe, ue);
          case w: {
            var we = F, Ve = we._payload, He = we._init;
            try {
              return Je(He(Ve), oe, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, Ft = {}, tn = K.ReactDebugCurrentFrame;
    function Lt(F) {
      if (F) {
        var oe = F._owner, ue = Je(F.type, F._source, oe ? oe.type : null);
        tn.setExtraStackFrame(ue);
      } else
        tn.setExtraStackFrame(null);
    }
    function nn(F, oe, ue, we, Ve) {
      {
        var He = Function.call.bind(Qe);
        for (var Be in F)
          if (He(F, Be)) {
            var Le = void 0;
            try {
              if (typeof F[Be] != "function") {
                var Et = Error((we || "React class") + ": " + ue + " type `" + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[Be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              Le = F[Be](oe, Be, we, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Le = et;
            }
            Le && !(Le instanceof Error) && (Lt(Ve), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", ue, Be, typeof Le), Lt(null)), Le instanceof Error && !(Le.message in Ft) && (Ft[Le.message] = !0, Lt(Ve), $("Failed %s type: %s", ue, Le.message), Lt(null));
          }
      }
    }
    var st = Array.isArray;
    function Ge(F) {
      return st(F);
    }
    function bt(F) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, ue = oe && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return ue;
      }
    }
    function qt(F) {
      try {
        return zt(F), !1;
      } catch {
        return !0;
      }
    }
    function zt(F) {
      return "" + F;
    }
    function In(F) {
      if (qt(F))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(F)), zt(F);
    }
    var _n = K.ReactCurrentOwner, Zn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nn, Dn;
    function ce(F) {
      if (Qe.call(F, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function Y(F) {
      if (Qe.call(F, "key")) {
        var oe = Object.getOwnPropertyDescriptor(F, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function Ye(F, oe) {
      typeof F.ref == "string" && _n.current;
    }
    function _e(F, oe) {
      {
        var ue = function() {
          Nn || (Nn = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ue.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function ut(F, oe) {
      {
        var ue = function() {
          Dn || (Dn = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ue.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var Xe = function(F, oe, ue, we, Ve, He, Be) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: F,
        key: oe,
        ref: ue,
        props: Be,
        // Record the component responsible for creating this element.
        _owner: He
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function ft(F, oe, ue, we, Ve) {
      {
        var He, Be = {}, Le = null, Et = null;
        ue !== void 0 && (In(ue), Le = "" + ue), Y(oe) && (In(oe.key), Le = "" + oe.key), ce(oe) && (Et = oe.ref, Ye(oe, Ve));
        for (He in oe)
          Qe.call(oe, He) && !Zn.hasOwnProperty(He) && (Be[He] = oe[He]);
        if (F && F.defaultProps) {
          var et = F.defaultProps;
          for (He in et)
            Be[He] === void 0 && (Be[He] = et[He]);
        }
        if (Le || Et) {
          var rt = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          Le && _e(Be, rt), Et && ut(Be, rt);
        }
        return Xe(F, Le, Et, Ve, we, _n.current, Be);
      }
    }
    var gt = K.ReactCurrentOwner, dn = K.ReactDebugCurrentFrame;
    function Mt(F) {
      if (F) {
        var oe = F._owner, ue = Je(F.type, F._source, oe ? oe.type : null);
        dn.setExtraStackFrame(ue);
      } else
        dn.setExtraStackFrame(null);
    }
    var hn;
    hn = !1;
    function jn(F) {
      return typeof F == "object" && F !== null && F.$$typeof === i;
    }
    function St() {
      {
        if (gt.current) {
          var F = de(gt.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function Ot(F) {
      return "";
    }
    var wt = {};
    function rn(F) {
      {
        var oe = St();
        if (!oe) {
          var ue = typeof F == "string" ? F : F.displayName || F.name;
          ue && (oe = `

Check the top-level render call using <` + ue + ">.");
        }
        return oe;
      }
    }
    function Rt(F, oe) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var ue = rn(oe);
        if (wt[ue])
          return;
        wt[ue] = !0;
        var we = "";
        F && F._owner && F._owner !== gt.current && (we = " It was passed a child from " + de(F._owner.type) + "."), Mt(F), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, we), Mt(null);
      }
    }
    function Sn(F, oe) {
      {
        if (typeof F != "object")
          return;
        if (Ge(F))
          for (var ue = 0; ue < F.length; ue++) {
            var we = F[ue];
            jn(we) && Rt(we, oe);
          }
        else if (jn(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var Ve = L(F);
          if (typeof Ve == "function" && Ve !== F.entries)
            for (var He = Ve.call(F), Be; !(Be = He.next()).done; )
              jn(Be.value) && Rt(Be.value, oe);
        }
      }
    }
    function Ct(F) {
      {
        var oe = F.type;
        if (oe == null || typeof oe == "string")
          return;
        var ue;
        if (typeof oe == "function")
          ue = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === P))
          ue = oe.propTypes;
        else
          return;
        if (ue) {
          var we = de(oe);
          nn(ue, F.props, "prop", we, F);
        } else if (oe.PropTypes !== void 0 && !hn) {
          hn = !0;
          var Ve = de(oe);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ve || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(F) {
      {
        for (var oe = Object.keys(F.props), ue = 0; ue < oe.length; ue++) {
          var we = oe[ue];
          if (we !== "children" && we !== "key") {
            Mt(F), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), Mt(null);
            break;
          }
        }
        F.ref !== null && (Mt(F), $("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    var Tr = {};
    function to(F, oe, ue, we, Ve, He) {
      {
        var Be = Se(F);
        if (!Be) {
          var Le = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = Ot();
          Et ? Le += Et : Le += St();
          var et;
          F === null ? et = "null" : Ge(F) ? et = "array" : F !== void 0 && F.$$typeof === i ? (et = "<" + (de(F.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : et = typeof F, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Le);
        }
        var rt = ft(F, oe, ue, Ve, He);
        if (rt == null)
          return rt;
        if (Be) {
          var ot = oe.children;
          if (ot !== void 0)
            if (we)
              if (Ge(ot)) {
                for (var Jn = 0; Jn < ot.length; Jn++)
                  Sn(ot[Jn], F);
                Object.freeze && Object.freeze(ot);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sn(ot, F);
        }
        if (Qe.call(oe, "key")) {
          var Ln = de(F), Pt = Object.keys(oe).filter(function(Cd) {
            return Cd !== "key";
          }), Mi = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tr[Ln + Mi]) {
            var Ed = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mi, Ln, Ed, Ln), Tr[Ln + Mi] = !0;
          }
        }
        return F === c ? kt(rt) : Ct(rt), rt;
      }
    }
    function xt(F, oe, ue) {
      return to(F, oe, ue, !0);
    }
    function no(F, oe, ue) {
      return to(F, oe, ue, !1);
    }
    var Li = no, nt = xt;
    Rr.Fragment = c, Rr.jsx = Li, Rr.jsxs = nt;
  }()), Rr;
}
var $a;
function Dd() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? ro.exports = _d() : ro.exports = Nd()), ro.exports;
}
var ge = Dd(), Nt = function() {
  return Nt = Object.assign || function(i) {
    for (var o, c = 1, l = arguments.length; c < l; c++) {
      o = arguments[c];
      for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (i[h] = o[h]);
    }
    return i;
  }, Nt.apply(this, arguments);
};
function ir(s, i, o) {
  if (o || arguments.length === 2) for (var c = 0, l = i.length, h; c < l; c++)
    (h || !(c in i)) && (h || (h = Array.prototype.slice.call(i, 0, c)), h[c] = i[c]);
  return s.concat(h || Array.prototype.slice.call(i));
}
function jd(s) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return i[o] === void 0 && (i[o] = s(o)), i[o];
  };
}
var Ld = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Md = /* @__PURE__ */ jd(
  function(s) {
    return Ld.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ze = "-ms-", Mr = "-moz-", qe = "-webkit-", Dl = "comm", di = "rule", ha = "decl", Bd = "@import", jl = "@keyframes", Fd = "@layer", Ll = Math.abs, pa = String.fromCharCode, as = Object.assign;
function zd(s, i) {
  return yt(s, 0) ^ 45 ? (((i << 2 ^ yt(s, 0)) << 2 ^ yt(s, 1)) << 2 ^ yt(s, 2)) << 2 ^ yt(s, 3) : 0;
}
function Ml(s) {
  return s.trim();
}
function gn(s, i) {
  return (s = i.exec(s)) ? s[0] : s;
}
function je(s, i, o) {
  return s.replace(i, o);
}
function So(s, i, o) {
  return s.indexOf(i, o);
}
function yt(s, i) {
  return s.charCodeAt(i) | 0;
}
function sr(s, i, o) {
  return s.slice(i, o);
}
function cn(s) {
  return s.length;
}
function Bl(s) {
  return s.length;
}
function jr(s, i) {
  return i.push(s), s;
}
function Vd(s, i) {
  return s.map(i).join("");
}
function Ya(s, i) {
  return s.filter(function(o) {
    return !gn(o, i);
  });
}
var hi = 1, ar = 1, Fl = 0, Ut = 0, dt = 0, gr = "";
function pi(s, i, o, c, l, h, g, v) {
  return { value: s, root: i, parent: o, type: c, props: l, children: h, line: hi, column: ar, length: g, return: "", siblings: v };
}
function wn(s, i) {
  return as(pi("", null, null, "", null, null, 0, s.siblings), s, { length: -s.length }, i);
}
function Qn(s) {
  for (; s.root; )
    s = wn(s.root, { children: [s] });
  jr(s, s.siblings);
}
function Hd() {
  return dt;
}
function Ud() {
  return dt = Ut > 0 ? yt(gr, --Ut) : 0, ar--, dt === 10 && (ar = 1, hi--), dt;
}
function Xt() {
  return dt = Ut < Fl ? yt(gr, Ut++) : 0, ar++, dt === 10 && (ar = 1, hi++), dt;
}
function Un() {
  return yt(gr, Ut);
}
function wo() {
  return Ut;
}
function xi(s, i) {
  return sr(gr, s, i);
}
function cs(s) {
  switch (s) {
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
function Wd(s) {
  return hi = ar = 1, Fl = cn(gr = s), Ut = 0, [];
}
function qd(s) {
  return gr = "", s;
}
function Bi(s) {
  return Ml(xi(Ut - 1, ls(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function $d(s) {
  for (; (dt = Un()) && dt < 33; )
    Xt();
  return cs(s) > 2 || cs(dt) > 3 ? "" : " ";
}
function Yd(s, i) {
  for (; --i && Xt() && !(dt < 48 || dt > 102 || dt > 57 && dt < 65 || dt > 70 && dt < 97); )
    ;
  return xi(s, wo() + (i < 6 && Un() == 32 && Xt() == 32));
}
function ls(s) {
  for (; Xt(); )
    switch (dt) {
      // ] ) " '
      case s:
        return Ut;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && ls(dt);
        break;
      // (
      case 40:
        s === 41 && ls(s);
        break;
      // \
      case 92:
        Xt();
        break;
    }
  return Ut;
}
function Xd(s, i) {
  for (; Xt() && s + dt !== 57; )
    if (s + dt === 84 && Un() === 47)
      break;
  return "/*" + xi(i, Ut - 1) + "*" + pa(s === 47 ? s : Xt());
}
function Kd(s) {
  for (; !cs(Un()); )
    Xt();
  return xi(s, Ut);
}
function Gd(s) {
  return qd(Eo("", null, null, null, [""], s = Wd(s), 0, [0], s));
}
function Eo(s, i, o, c, l, h, g, v, b) {
  for (var S = 0, C = 0, P = g, w = 0, U = 0, V = 0, D = 1, L = 1, K = 1, $ = 0, _ = "", J = l, q = h, te = c, Q = _; L; )
    switch (V = $, $ = Xt()) {
      // (
      case 40:
        if (V != 108 && yt(Q, P - 1) == 58) {
          So(Q += je(Bi($), "&", "&\f"), "&\f", Ll(S ? v[S - 1] : 0)) != -1 && (K = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        Q += Bi($);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        Q += $d(V);
        break;
      // \
      case 92:
        Q += Yd(wo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            jr(Zd(Xd(Xt(), wo()), i, o, b), b);
            break;
          default:
            Q += "/";
        }
        break;
      // {
      case 123 * D:
        v[S++] = cn(Q) * K;
      // } ; \0
      case 125 * D:
      case 59:
      case 0:
        switch ($) {
          // \0 }
          case 0:
          case 125:
            L = 0;
          // ;
          case 59 + C:
            K == -1 && (Q = je(Q, /\f/g, "")), U > 0 && cn(Q) - P && jr(U > 32 ? Ka(Q + ";", c, o, P - 1, b) : Ka(je(Q, " ", "") + ";", c, o, P - 2, b), b);
            break;
          // @ ;
          case 59:
            Q += ";";
          // { rule/at-rule
          default:
            if (jr(te = Xa(Q, i, o, S, C, l, v, _, J = [], q = [], P, h), h), $ === 123)
              if (C === 0)
                Eo(Q, i, te, te, J, h, P, v, q);
              else
                switch (w === 99 && yt(Q, 3) === 110 ? 100 : w) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Eo(s, te, te, c && jr(Xa(s, te, te, 0, 0, l, v, _, l, J = [], P, q), q), l, q, P, v, c ? J : q);
                    break;
                  default:
                    Eo(Q, te, te, te, [""], q, 0, v, q);
                }
        }
        S = C = U = 0, D = K = 1, _ = Q = "", P = g;
        break;
      // :
      case 58:
        P = 1 + cn(Q), U = V;
      default:
        if (D < 1) {
          if ($ == 123)
            --D;
          else if ($ == 125 && D++ == 0 && Ud() == 125)
            continue;
        }
        switch (Q += pa($), $ * D) {
          // &
          case 38:
            K = C > 0 ? 1 : (Q += "\f", -1);
            break;
          // ,
          case 44:
            v[S++] = (cn(Q) - 1) * K, K = 1;
            break;
          // @
          case 64:
            Un() === 45 && (Q += Bi(Xt())), w = Un(), C = P = cn(_ = Q += Kd(wo())), $++;
            break;
          // -
          case 45:
            V === 45 && cn(Q) == 2 && (D = 0);
        }
    }
  return h;
}
function Xa(s, i, o, c, l, h, g, v, b, S, C, P) {
  for (var w = l - 1, U = l === 0 ? h : [""], V = Bl(U), D = 0, L = 0, K = 0; D < c; ++D)
    for (var $ = 0, _ = sr(s, w + 1, w = Ll(L = g[D])), J = s; $ < V; ++$)
      (J = Ml(L > 0 ? U[$] + " " + _ : je(_, /&\f/g, U[$]))) && (b[K++] = J);
  return pi(s, i, o, l === 0 ? di : v, b, S, C, P);
}
function Zd(s, i, o, c) {
  return pi(s, i, o, Dl, pa(Hd()), sr(s, 2, -2), 0, c);
}
function Ka(s, i, o, c, l) {
  return pi(s, i, o, ha, sr(s, 0, c), sr(s, c + 1, -1), c, l);
}
function zl(s, i, o) {
  switch (zd(s, i)) {
    // color-adjust
    case 5103:
      return qe + "print-" + s + s;
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
      return qe + s + s;
    // tab-size
    case 4789:
      return Mr + s + s;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return qe + s + Mr + s + Ze + s + s;
    // writing-mode
    case 5936:
      switch (yt(s, i + 11)) {
        // vertical-l(r)
        case 114:
          return qe + s + Ze + je(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        // vertical-r(l)
        case 108:
          return qe + s + Ze + je(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        // horizontal(-)tb
        case 45:
          return qe + s + Ze + je(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return qe + s + Ze + s + s;
    // order
    case 6165:
      return qe + s + Ze + "flex-" + s + s;
    // align-items
    case 5187:
      return qe + s + je(s, /(\w+).+(:[^]+)/, qe + "box-$1$2" + Ze + "flex-$1$2") + s;
    // align-self
    case 5443:
      return qe + s + Ze + "flex-item-" + je(s, /flex-|-self/g, "") + (gn(s, /flex-|baseline/) ? "" : Ze + "grid-row-" + je(s, /flex-|-self/g, "")) + s;
    // align-content
    case 4675:
      return qe + s + Ze + "flex-line-pack" + je(s, /align-content|flex-|-self/g, "") + s;
    // flex-shrink
    case 5548:
      return qe + s + Ze + je(s, "shrink", "negative") + s;
    // flex-basis
    case 5292:
      return qe + s + Ze + je(s, "basis", "preferred-size") + s;
    // flex-grow
    case 6060:
      return qe + "box-" + je(s, "-grow", "") + qe + s + Ze + je(s, "grow", "positive") + s;
    // transition
    case 4554:
      return qe + je(s, /([^-])(transform)/g, "$1" + qe + "$2") + s;
    // cursor
    case 6187:
      return je(je(je(s, /(zoom-|grab)/, qe + "$1"), /(image-set)/, qe + "$1"), s, "") + s;
    // background, background-image
    case 5495:
    case 3959:
      return je(s, /(image-set\([^]*)/, qe + "$1$`$1");
    // justify-content
    case 4968:
      return je(je(s, /(.+:)(flex-)?(.*)/, qe + "box-pack:$3" + Ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + qe + s + s;
    // justify-self
    case 4200:
      if (!gn(s, /flex-|baseline/)) return Ze + "grid-column-align" + sr(s, i) + s;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ze + je(s, "template-", "") + s;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return o && o.some(function(c, l) {
        return i = l, gn(c.props, /grid-\w+-end/);
      }) ? ~So(s + (o = o[i].value), "span", 0) ? s : Ze + je(s, "-start", "") + s + Ze + "grid-row-span:" + (~So(o, "span", 0) ? gn(o, /\d+/) : +gn(o, /\d+/) - +gn(s, /\d+/)) + ";" : Ze + je(s, "-start", "") + s;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return o && o.some(function(c) {
        return gn(c.props, /grid-\w+-start/);
      }) ? s : Ze + je(je(s, "-end", "-span"), "span ", "") + s;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(s, /(.+)-inline(.+)/, qe + "$1$2") + s;
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
      if (cn(s) - 1 - i > 6)
        switch (yt(s, i + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (yt(s, i + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return je(s, /(.+:)(.+)-([^]+)/, "$1" + qe + "$2-$3$1" + Mr + (yt(s, i + 3) == 108 ? "$3" : "$2-$3")) + s;
          // (s)tretch
          case 115:
            return ~So(s, "stretch", 0) ? zl(je(s, "stretch", "fill-available"), i, o) + s : s;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return je(s, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(c, l, h, g, v, b, S) {
        return Ze + l + ":" + h + S + (g ? Ze + l + "-span:" + (v ? b : +b - +h) + S : "") + s;
      });
    // position: sticky
    case 4949:
      if (yt(s, i + 6) === 121)
        return je(s, ":", ":" + qe) + s;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (yt(s, yt(s, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return je(s, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + qe + (yt(s, 14) === 45 ? "inline-" : "") + "box$3$1" + qe + "$2$3$1" + Ze + "$2box$3") + s;
        // (inline-)?gri(d)
        case 100:
          return je(s, ":", ":" + Ze) + s;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return je(s, "scroll-", "scroll-snap-") + s;
  }
  return s;
}
function Ho(s, i) {
  for (var o = "", c = 0; c < s.length; c++)
    o += i(s[c], c, s, i) || "";
  return o;
}
function Jd(s, i, o, c) {
  switch (s.type) {
    case Fd:
      if (s.children.length) break;
    case Bd:
    case ha:
      return s.return = s.return || s.value;
    case Dl:
      return "";
    case jl:
      return s.return = s.value + "{" + Ho(s.children, c) + "}";
    case di:
      if (!cn(s.value = s.props.join(","))) return "";
  }
  return cn(o = Ho(s.children, c)) ? s.return = s.value + "{" + o + "}" : "";
}
function Qd(s) {
  var i = Bl(s);
  return function(o, c, l, h) {
    for (var g = "", v = 0; v < i; v++)
      g += s[v](o, c, l, h) || "";
    return g;
  };
}
function e0(s) {
  return function(i) {
    i.root || (i = i.return) && s(i);
  };
}
function t0(s, i, o, c) {
  if (s.length > -1 && !s.return)
    switch (s.type) {
      case ha:
        s.return = zl(s.value, s.length, o);
        return;
      case jl:
        return Ho([wn(s, { value: je(s.value, "@", "@" + qe) })], c);
      case di:
        if (s.length)
          return Vd(o = s.props, function(l) {
            switch (gn(l, c = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Qn(wn(s, { props: [je(l, /:(read-\w+)/, ":" + Mr + "$1")] })), Qn(wn(s, { props: [l] })), as(s, { props: Ya(o, c) });
                break;
              // :placeholder
              case "::placeholder":
                Qn(wn(s, { props: [je(l, /:(plac\w+)/, ":" + qe + "input-$1")] })), Qn(wn(s, { props: [je(l, /:(plac\w+)/, ":" + Mr + "$1")] })), Qn(wn(s, { props: [je(l, /:(plac\w+)/, Ze + "input-$1")] })), Qn(wn(s, { props: [l] })), as(s, { props: Ya(o, c) });
                break;
            }
            return "";
          });
    }
}
var n0 = {
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
}, Kn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Vl = "active", Hl = "data-styled-version", mi = "6.1.18", xa = `/*!sc*/
`, Uo = typeof window < "u" && typeof document < "u", r0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ga = /invalid hook call/i, oo = /* @__PURE__ */ new Set(), o0 = function(s, i) {
  if (process.env.NODE_ENV !== "production") {
    var o = i ? ' with the id of "'.concat(i, '"') : "", c = "The component ".concat(s).concat(o, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, l = console.error;
    try {
      var h = !0;
      console.error = function(g) {
        for (var v = [], b = 1; b < arguments.length; b++) v[b - 1] = arguments[b];
        Ga.test(g) ? (h = !1, oo.delete(c)) : l.apply(void 0, ir([g], v, !1));
      }, mt(), h && !oo.has(c) && (console.warn(c), oo.add(c));
    } catch (g) {
      Ga.test(g.message) && oo.delete(c);
    } finally {
      console.error = l;
    }
  }
}, gi = Object.freeze([]), cr = Object.freeze({});
function i0(s, i, o) {
  return o === void 0 && (o = cr), s.theme !== o.theme && s.theme || i || o.theme;
}
var us = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), s0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, a0 = /(^-|-$)/g;
function Za(s) {
  return s.replace(s0, "-").replace(a0, "");
}
var c0 = /(a)(d)/gi, io = 52, Ja = function(s) {
  return String.fromCharCode(s + (s > 25 ? 39 : 97));
};
function fs(s) {
  var i, o = "";
  for (i = Math.abs(s); i > io; i = i / io | 0) o = Ja(i % io) + o;
  return (Ja(i % io) + o).replace(c0, "$1-$2");
}
var Fi, Ul = 5381, Bn = function(s, i) {
  for (var o = i.length; o; ) s = 33 * s ^ i.charCodeAt(--o);
  return s;
}, Wl = function(s) {
  return Bn(Ul, s);
};
function l0(s) {
  return fs(Wl(s) >>> 0);
}
function ql(s) {
  return process.env.NODE_ENV !== "production" && typeof s == "string" && s || s.displayName || s.name || "Component";
}
function zi(s) {
  return typeof s == "string" && (process.env.NODE_ENV === "production" || s.charAt(0) === s.charAt(0).toLowerCase());
}
var $l = typeof Symbol == "function" && Symbol.for, Yl = $l ? Symbol.for("react.memo") : 60115, u0 = $l ? Symbol.for("react.forward_ref") : 60112, f0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, d0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Xl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, h0 = ((Fi = {})[u0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Fi[Yl] = Xl, Fi);
function Qa(s) {
  return ("type" in (i = s) && i.type.$$typeof) === Yl ? Xl : "$$typeof" in s ? h0[s.$$typeof] : f0;
  var i;
}
var p0 = Object.defineProperty, x0 = Object.getOwnPropertyNames, ec = Object.getOwnPropertySymbols, m0 = Object.getOwnPropertyDescriptor, g0 = Object.getPrototypeOf, tc = Object.prototype;
function Kl(s, i, o) {
  if (typeof i != "string") {
    if (tc) {
      var c = g0(i);
      c && c !== tc && Kl(s, c, o);
    }
    var l = x0(i);
    ec && (l = l.concat(ec(i)));
    for (var h = Qa(s), g = Qa(i), v = 0; v < l.length; ++v) {
      var b = l[v];
      if (!(b in d0 || o && o[b] || g && b in g || h && b in h)) {
        var S = m0(i, b);
        try {
          p0(s, b, S);
        } catch {
        }
      }
    }
  }
  return s;
}
function lr(s) {
  return typeof s == "function";
}
function ma(s) {
  return typeof s == "object" && "styledComponentId" in s;
}
function zn(s, i) {
  return s && i ? "".concat(s, " ").concat(i) : s || i || "";
}
function nc(s, i) {
  if (s.length === 0) return "";
  for (var o = s[0], c = 1; c < s.length; c++) o += s[c];
  return o;
}
function ur(s) {
  return s !== null && typeof s == "object" && s.constructor.name === Object.name && !("props" in s && s.$$typeof);
}
function ds(s, i, o) {
  if (o === void 0 && (o = !1), !o && !ur(s) && !Array.isArray(s)) return i;
  if (Array.isArray(i)) for (var c = 0; c < i.length; c++) s[c] = ds(s[c], i[c]);
  else if (ur(i)) for (var c in i) s[c] = ds(s[c], i[c]);
  return s;
}
function ga(s, i) {
  Object.defineProperty(s, "toString", { value: i });
}
var v0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function y0() {
  for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
  for (var o = s[0], c = [], l = 1, h = s.length; l < h; l += 1) c.push(s[l]);
  return c.forEach(function(g) {
    o = o.replace(/%[a-z]/, g);
  }), o;
}
function vr(s) {
  for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : "")) : new Error(y0.apply(void 0, ir([v0[s]], i, !1)).trim());
}
var b0 = function() {
  function s(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i;
  }
  return s.prototype.indexOfGroup = function(i) {
    for (var o = 0, c = 0; c < i; c++) o += this.groupSizes[c];
    return o;
  }, s.prototype.insertRules = function(i, o) {
    if (i >= this.groupSizes.length) {
      for (var c = this.groupSizes, l = c.length, h = l; i >= h; ) if ((h <<= 1) < 0) throw vr(16, "".concat(i));
      this.groupSizes = new Uint32Array(h), this.groupSizes.set(c), this.length = h;
      for (var g = l; g < h; g++) this.groupSizes[g] = 0;
    }
    for (var v = this.indexOfGroup(i + 1), b = (g = 0, o.length); g < b; g++) this.tag.insertRule(v, o[g]) && (this.groupSizes[i]++, v++);
  }, s.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var o = this.groupSizes[i], c = this.indexOfGroup(i), l = c + o;
      this.groupSizes[i] = 0;
      for (var h = c; h < l; h++) this.tag.deleteRule(c);
    }
  }, s.prototype.getGroup = function(i) {
    var o = "";
    if (i >= this.length || this.groupSizes[i] === 0) return o;
    for (var c = this.groupSizes[i], l = this.indexOfGroup(i), h = l + c, g = l; g < h; g++) o += "".concat(this.tag.getRule(g)).concat(xa);
    return o;
  }, s;
}(), S0 = 1 << 30, Co = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), Ao = 1, so = function(s) {
  if (Co.has(s)) return Co.get(s);
  for (; Wo.has(Ao); ) Ao++;
  var i = Ao++;
  if (process.env.NODE_ENV !== "production" && ((0 | i) < 0 || i > S0)) throw vr(16, "".concat(i));
  return Co.set(s, i), Wo.set(i, s), i;
}, w0 = function(s, i) {
  Ao = i + 1, Co.set(s, i), Wo.set(i, s);
}, E0 = "style[".concat(Kn, "][").concat(Hl, '="').concat(mi, '"]'), C0 = new RegExp("^".concat(Kn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), A0 = function(s, i, o) {
  for (var c, l = o.split(","), h = 0, g = l.length; h < g; h++) (c = l[h]) && s.registerName(i, c);
}, T0 = function(s, i) {
  for (var o, c = ((o = i.textContent) !== null && o !== void 0 ? o : "").split(xa), l = [], h = 0, g = c.length; h < g; h++) {
    var v = c[h].trim();
    if (v) {
      var b = v.match(C0);
      if (b) {
        var S = 0 | parseInt(b[1], 10), C = b[2];
        S !== 0 && (w0(C, S), A0(s, C, b[3]), s.getTag().insertRules(S, l)), l.length = 0;
      } else l.push(v);
    }
  }
}, rc = function(s) {
  for (var i = document.querySelectorAll(E0), o = 0, c = i.length; o < c; o++) {
    var l = i[o];
    l && l.getAttribute(Kn) !== Vl && (T0(s, l), l.parentNode && l.parentNode.removeChild(l));
  }
};
function O0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Gl = function(s) {
  var i = document.head, o = s || i, c = document.createElement("style"), l = function(v) {
    var b = Array.from(v.querySelectorAll("style[".concat(Kn, "]")));
    return b[b.length - 1];
  }(o), h = l !== void 0 ? l.nextSibling : null;
  c.setAttribute(Kn, Vl), c.setAttribute(Hl, mi);
  var g = O0();
  return g && c.setAttribute("nonce", g), o.insertBefore(c, h), c;
}, R0 = function() {
  function s(i) {
    this.element = Gl(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var c = document.styleSheets, l = 0, h = c.length; l < h; l++) {
        var g = c[l];
        if (g.ownerNode === o) return g;
      }
      throw vr(17);
    }(this.element), this.length = 0;
  }
  return s.prototype.insertRule = function(i, o) {
    try {
      return this.sheet.insertRule(o, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, s.prototype.getRule = function(i) {
    var o = this.sheet.cssRules[i];
    return o && o.cssText ? o.cssText : "";
  }, s;
}(), k0 = function() {
  function s(i) {
    this.element = Gl(i), this.nodes = this.element.childNodes, this.length = 0;
  }
  return s.prototype.insertRule = function(i, o) {
    if (i <= this.length && i >= 0) {
      var c = document.createTextNode(o);
      return this.element.insertBefore(c, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, s.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, s.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, s;
}(), P0 = function() {
  function s(i) {
    this.rules = [], this.length = 0;
  }
  return s.prototype.insertRule = function(i, o) {
    return i <= this.length && (this.rules.splice(i, 0, o), this.length++, !0);
  }, s.prototype.deleteRule = function(i) {
    this.rules.splice(i, 1), this.length--;
  }, s.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, s;
}(), oc = Uo, I0 = { isServer: !Uo, useCSSOMInjection: !r0 }, Zl = function() {
  function s(i, o, c) {
    i === void 0 && (i = cr), o === void 0 && (o = {});
    var l = this;
    this.options = Nt(Nt({}, I0), i), this.gs = o, this.names = new Map(c), this.server = !!i.isServer, !this.server && Uo && oc && (oc = !1, rc(this)), ga(this, function() {
      return function(h) {
        for (var g = h.getTag(), v = g.length, b = "", S = function(P) {
          var w = function(K) {
            return Wo.get(K);
          }(P);
          if (w === void 0) return "continue";
          var U = h.names.get(w), V = g.getGroup(P);
          if (U === void 0 || !U.size || V.length === 0) return "continue";
          var D = "".concat(Kn, ".g").concat(P, '[id="').concat(w, '"]'), L = "";
          U !== void 0 && U.forEach(function(K) {
            K.length > 0 && (L += "".concat(K, ","));
          }), b += "".concat(V).concat(D, '{content:"').concat(L, '"}').concat(xa);
        }, C = 0; C < v; C++) S(C);
        return b;
      }(l);
    });
  }
  return s.registerId = function(i) {
    return so(i);
  }, s.prototype.rehydrate = function() {
    !this.server && Uo && rc(this);
  }, s.prototype.reconstructWithOptions = function(i, o) {
    return o === void 0 && (o = !0), new s(Nt(Nt({}, this.options), i), this.gs, o && this.names || void 0);
  }, s.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + 1;
  }, s.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(o) {
      var c = o.useCSSOMInjection, l = o.target;
      return o.isServer ? new P0(l) : c ? new R0(l) : new k0(l);
    }(this.options), new b0(i)));
    var i;
  }, s.prototype.hasNameForId = function(i, o) {
    return this.names.has(i) && this.names.get(i).has(o);
  }, s.prototype.registerName = function(i, o) {
    if (so(i), this.names.has(i)) this.names.get(i).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(i, c);
    }
  }, s.prototype.insertRules = function(i, o, c) {
    this.registerName(i, o), this.getTag().insertRules(so(i), c);
  }, s.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, s.prototype.clearRules = function(i) {
    this.getTag().clearGroup(so(i)), this.clearNames(i);
  }, s.prototype.clearTag = function() {
    this.tag = void 0;
  }, s;
}(), _0 = /&/g, N0 = /^\s*\/\/.*$/gm;
function Jl(s, i) {
  return s.map(function(o) {
    return o.type === "rule" && (o.value = "".concat(i, " ").concat(o.value), o.value = o.value.replaceAll(",", ",".concat(i, " ")), o.props = o.props.map(function(c) {
      return "".concat(i, " ").concat(c);
    })), Array.isArray(o.children) && o.type !== "@keyframes" && (o.children = Jl(o.children, i)), o;
  });
}
function D0(s) {
  var i, o, c, l = cr, h = l.options, g = h === void 0 ? cr : h, v = l.plugins, b = v === void 0 ? gi : v, S = function(w, U, V) {
    return V.startsWith(o) && V.endsWith(o) && V.replaceAll(o, "").length > 0 ? ".".concat(i) : w;
  }, C = b.slice();
  C.push(function(w) {
    w.type === di && w.value.includes("&") && (w.props[0] = w.props[0].replace(_0, o).replace(c, S));
  }), g.prefix && C.push(t0), C.push(Jd);
  var P = function(w, U, V, D) {
    U === void 0 && (U = ""), V === void 0 && (V = ""), D === void 0 && (D = "&"), i = D, o = U, c = new RegExp("\\".concat(o, "\\b"), "g");
    var L = w.replace(N0, ""), K = Gd(V || U ? "".concat(V, " ").concat(U, " { ").concat(L, " }") : L);
    g.namespace && (K = Jl(K, g.namespace));
    var $ = [];
    return Ho(K, Qd(C.concat(e0(function(_) {
      return $.push(_);
    })))), $;
  };
  return P.hash = b.length ? b.reduce(function(w, U) {
    return U.name || vr(15), Bn(w, U.name);
  }, Ul).toString() : "", P;
}
var j0 = new Zl(), hs = D0(), Ql = lt.createContext({ shouldForwardProp: void 0, styleSheet: j0, stylis: hs });
Ql.Consumer;
lt.createContext(void 0);
function ic() {
  return On(Ql);
}
var sc = function() {
  function s(i, o) {
    var c = this;
    this.inject = function(l, h) {
      h === void 0 && (h = hs);
      var g = c.name + h.hash;
      l.hasNameForId(c.id, g) || l.insertRules(c.id, g, h(c.rules, g, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = o, ga(this, function() {
      throw vr(12, String(c.name));
    });
  }
  return s.prototype.getName = function(i) {
    return i === void 0 && (i = hs), this.name + i.hash;
  }, s;
}(), L0 = function(s) {
  return s >= "A" && s <= "Z";
};
function ac(s) {
  for (var i = "", o = 0; o < s.length; o++) {
    var c = s[o];
    if (o === 1 && c === "-" && s[0] === "-") return s;
    L0(c) ? i += "-" + c.toLowerCase() : i += c;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var eu = function(s) {
  return s == null || s === !1 || s === "";
}, tu = function(s) {
  var i, o, c = [];
  for (var l in s) {
    var h = s[l];
    s.hasOwnProperty(l) && !eu(h) && (Array.isArray(h) && h.isCss || lr(h) ? c.push("".concat(ac(l), ":"), h, ";") : ur(h) ? c.push.apply(c, ir(ir(["".concat(l, " {")], tu(h), !1), ["}"], !1)) : c.push("".concat(ac(l), ": ").concat((i = l, (o = h) == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in n0 || i.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
  }
  return c;
};
function Wn(s, i, o, c) {
  if (eu(s)) return [];
  if (ma(s)) return [".".concat(s.styledComponentId)];
  if (lr(s)) {
    if (!lr(h = s) || h.prototype && h.prototype.isReactComponent || !i) return [s];
    var l = s(i);
    return process.env.NODE_ENV === "production" || typeof l != "object" || Array.isArray(l) || l instanceof sc || ur(l) || l === null || console.error("".concat(ql(s), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Wn(l, i, o, c);
  }
  var h;
  return s instanceof sc ? o ? (s.inject(o, c), [s.getName(c)]) : [s] : ur(s) ? tu(s) : Array.isArray(s) ? Array.prototype.concat.apply(gi, s.map(function(g) {
    return Wn(g, i, o, c);
  })) : [s.toString()];
}
function M0(s) {
  for (var i = 0; i < s.length; i += 1) {
    var o = s[i];
    if (lr(o) && !ma(o)) return !1;
  }
  return !0;
}
var B0 = Wl(mi), F0 = function() {
  function s(i, o, c) {
    this.rules = i, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (c === void 0 || c.isStatic) && M0(i), this.componentId = o, this.baseHash = Bn(B0, o), this.baseStyle = c, Zl.registerId(o);
  }
  return s.prototype.generateAndInjectStyles = function(i, o, c) {
    var l = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, o, c) : "";
    if (this.isStatic && !c.hash) if (this.staticRulesId && o.hasNameForId(this.componentId, this.staticRulesId)) l = zn(l, this.staticRulesId);
    else {
      var h = nc(Wn(this.rules, i, o, c)), g = fs(Bn(this.baseHash, h) >>> 0);
      if (!o.hasNameForId(this.componentId, g)) {
        var v = c(h, ".".concat(g), void 0, this.componentId);
        o.insertRules(this.componentId, g, v);
      }
      l = zn(l, g), this.staticRulesId = g;
    }
    else {
      for (var b = Bn(this.baseHash, c.hash), S = "", C = 0; C < this.rules.length; C++) {
        var P = this.rules[C];
        if (typeof P == "string") S += P, process.env.NODE_ENV !== "production" && (b = Bn(b, P));
        else if (P) {
          var w = nc(Wn(P, i, o, c));
          b = Bn(b, w + C), S += w;
        }
      }
      if (S) {
        var U = fs(b >>> 0);
        o.hasNameForId(this.componentId, U) || o.insertRules(this.componentId, U, c(S, ".".concat(U), void 0, this.componentId)), l = zn(l, U);
      }
    }
    return l;
  }, s;
}(), nu = lt.createContext(void 0);
nu.Consumer;
var Vi = {}, cc = /* @__PURE__ */ new Set();
function z0(s, i, o) {
  var c = ma(s), l = s, h = !zi(s), g = i.attrs, v = g === void 0 ? gi : g, b = i.componentId, S = b === void 0 ? function(J, q) {
    var te = typeof J != "string" ? "sc" : Za(J);
    Vi[te] = (Vi[te] || 0) + 1;
    var Q = "".concat(te, "-").concat(l0(mi + te + Vi[te]));
    return q ? "".concat(q, "-").concat(Q) : Q;
  }(i.displayName, i.parentComponentId) : b, C = i.displayName, P = C === void 0 ? function(J) {
    return zi(J) ? "styled.".concat(J) : "Styled(".concat(ql(J), ")");
  }(s) : C, w = i.displayName && i.componentId ? "".concat(Za(i.displayName), "-").concat(i.componentId) : i.componentId || S, U = c && l.attrs ? l.attrs.concat(v).filter(Boolean) : v, V = i.shouldForwardProp;
  if (c && l.shouldForwardProp) {
    var D = l.shouldForwardProp;
    if (i.shouldForwardProp) {
      var L = i.shouldForwardProp;
      V = function(J, q) {
        return D(J, q) && L(J, q);
      };
    } else V = D;
  }
  var K = new F0(o, w, c ? l.componentStyle : void 0);
  function $(J, q) {
    return function(te, Q, ae) {
      var fe = te.attrs, Se = te.componentStyle, De = te.defaultProps, Ee = te.foldedComponentIds, de = te.styledComponentId, ye = te.target, me = lt.useContext(nu), Ie = ic(), Ae = te.shouldForwardProp || Ie.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ha(de);
      var Re = i0(Q, me, De) || cr, Te = function(ke, Fe, re) {
        for (var he, ne = Nt(Nt({}, Fe), { className: void 0, theme: re }), ie = 0; ie < ke.length; ie += 1) {
          var X = lr(he = ke[ie]) ? he(ne) : he;
          for (var le in X) ne[le] = le === "className" ? zn(ne[le], X[le]) : le === "style" ? Nt(Nt({}, ne[le]), X[le]) : X[le];
        }
        return Fe.className && (ne.className = zn(ne.className, Fe.className)), ne;
      }(fe, Q, Re), Pe = Te.as || ye, Ce = {};
      for (var pe in Te) Te[pe] === void 0 || pe[0] === "$" || pe === "as" || pe === "theme" && Te.theme === Re || (pe === "forwardedAs" ? Ce.as = Te.forwardedAs : Ae && !Ae(pe, Pe) || (Ce[pe] = Te[pe], Ae || process.env.NODE_ENV !== "development" || Md(pe) || cc.has(pe) || !us.has(Pe) || (cc.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var be = function(ke, Fe) {
        var re = ic(), he = ke.generateAndInjectStyles(Fe, re.styleSheet, re.stylis);
        return process.env.NODE_ENV !== "production" && Ha(he), he;
      }(Se, Te);
      process.env.NODE_ENV !== "production" && te.warnTooManyClasses && te.warnTooManyClasses(be);
      var Oe = zn(Ee, de);
      return be && (Oe += " " + be), Te.className && (Oe += " " + Te.className), Ce[zi(Pe) && !us.has(Pe) ? "class" : "className"] = Oe, ae && (Ce.ref = ae), Od(Pe, Ce);
    }(_, J, q);
  }
  $.displayName = P;
  var _ = lt.forwardRef($);
  return _.attrs = U, _.componentStyle = K, _.displayName = P, _.shouldForwardProp = V, _.foldedComponentIds = c ? zn(l.foldedComponentIds, l.styledComponentId) : "", _.styledComponentId = w, _.target = c ? l.target : s, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(J) {
    this._foldedDefaultProps = c ? function(q) {
      for (var te = [], Q = 1; Q < arguments.length; Q++) te[Q - 1] = arguments[Q];
      for (var ae = 0, fe = te; ae < fe.length; ae++) ds(q, fe[ae], !0);
      return q;
    }({}, l.defaultProps, J) : J;
  } }), process.env.NODE_ENV !== "production" && (o0(P, w), _.warnTooManyClasses = /* @__PURE__ */ function(J, q) {
    var te = {}, Q = !1;
    return function(ae) {
      if (!Q && (te[ae] = !0, Object.keys(te).length >= 200)) {
        var fe = q ? ' with the id of "'.concat(q, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(J).concat(fe, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Q = !0, te = {};
      }
    };
  }(P, w)), ga(_, function() {
    return ".".concat(_.styledComponentId);
  }), h && Kl(_, s, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function lc(s, i) {
  for (var o = [s[0]], c = 0, l = i.length; c < l; c += 1) o.push(i[c], s[c + 1]);
  return o;
}
var uc = function(s) {
  return Object.assign(s, { isCss: !0 });
};
function V0(s) {
  for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
  if (lr(s) || ur(s)) return uc(Wn(lc(gi, ir([s], i, !0))));
  var c = s;
  return i.length === 0 && c.length === 1 && typeof c[0] == "string" ? Wn(c) : uc(Wn(lc(c, i)));
}
function ps(s, i, o) {
  if (o === void 0 && (o = cr), !i) throw vr(1, i);
  var c = function(l) {
    for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
    return s(i, o, V0.apply(void 0, ir([l], h, !1)));
  };
  return c.attrs = function(l) {
    return ps(s, i, Nt(Nt({}, o), { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
  }, c.withConfig = function(l) {
    return ps(s, i, Nt(Nt({}, o), l));
  }, c;
}
var ru = function(s) {
  return ps(z0, s);
}, Zt = ru;
us.forEach(function(s) {
  Zt[s] = ru(s);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ao = "__sc-".concat(Kn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ao] || (window[ao] = 0), window[ao] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ao] += 1);
const Gr = qo;
function qo(s, i) {
  const o = $o();
  return qo = function(c, l) {
    return c = c - 497, o[c];
  }, qo(s, i);
}
(function(s, i) {
  const o = qo, c = s();
  for (; ; )
    try {
      if (-parseInt(o(502)) / 1 * (-parseInt(o(497)) / 2) + parseInt(o(506)) / 3 * (-parseInt(o(505)) / 4) + -parseInt(o(501)) / 5 + -parseInt(o(503)) / 6 * (parseInt(o(499)) / 7) + parseInt(o(510)) / 8 * (-parseInt(o(511)) / 9) + -parseInt(o(508)) / 10 * (parseInt(o(509)) / 11) + parseInt(o(498)) / 12 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})($o, 526887);
function $o() {
  const s = ["span", "30UZwkRz", "3859834MmzntY", "8ApMqup", "6355116VBawVB", "563222nfwLUg", "38129484cCoBDf", "175iNIMaO", "canvas", "451815YsiOtn", "1qzDWAr", "83310RKRyqZ", "div", "2943548vZrmsu", "3UlbBtr"];
  return $o = function() {
    return s;
  }, $o();
}
const H0 = Zt[Gr(504)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, U0 = Zt[Gr(504)]`
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
`, W0 = Zt[Gr(500)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, q0 = Zt[Gr(507)]`
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
`, $0 = Zt[Gr(504)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, un = /* @__PURE__ */ Object.create(null);
un.open = "0";
un.close = "1";
un.ping = "2";
un.pong = "3";
un.message = "4";
un.upgrade = "5";
un.noop = "6";
const To = /* @__PURE__ */ Object.create(null);
Object.keys(un).forEach((s) => {
  To[un[s]] = s;
});
const xs = { type: "error", data: "parser error" }, ou = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", iu = typeof ArrayBuffer == "function", su = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer, va = ({ type: s, data: i }, o, c) => ou && i instanceof Blob ? o ? c(i) : fc(i, c) : iu && (i instanceof ArrayBuffer || su(i)) ? o ? c(i) : fc(new Blob([i]), c) : c(un[s] + (i || "")), fc = (s, i) => {
  const o = new FileReader();
  return o.onload = function() {
    const c = o.result.split(",")[1];
    i("b" + (c || ""));
  }, o.readAsDataURL(s);
};
function dc(s) {
  return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
}
let Hi;
function Y0(s, i) {
  if (ou && s.data instanceof Blob)
    return s.data.arrayBuffer().then(dc).then(i);
  if (iu && (s.data instanceof ArrayBuffer || su(s.data)))
    return i(dc(s.data));
  va(s, !1, (o) => {
    Hi || (Hi = new TextEncoder()), i(Hi.encode(o));
  });
}
const hc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let s = 0; s < hc.length; s++)
  Lr[hc.charCodeAt(s)] = s;
const X0 = (s) => {
  let i = s.length * 0.75, o = s.length, c, l = 0, h, g, v, b;
  s[s.length - 1] === "=" && (i--, s[s.length - 2] === "=" && i--);
  const S = new ArrayBuffer(i), C = new Uint8Array(S);
  for (c = 0; c < o; c += 4)
    h = Lr[s.charCodeAt(c)], g = Lr[s.charCodeAt(c + 1)], v = Lr[s.charCodeAt(c + 2)], b = Lr[s.charCodeAt(c + 3)], C[l++] = h << 2 | g >> 4, C[l++] = (g & 15) << 4 | v >> 2, C[l++] = (v & 3) << 6 | b & 63;
  return S;
}, K0 = typeof ArrayBuffer == "function", ya = (s, i) => {
  if (typeof s != "string")
    return {
      type: "message",
      data: au(s, i)
    };
  const o = s.charAt(0);
  return o === "b" ? {
    type: "message",
    data: G0(s.substring(1), i)
  } : To[o] ? s.length > 1 ? {
    type: To[o],
    data: s.substring(1)
  } : {
    type: To[o]
  } : xs;
}, G0 = (s, i) => {
  if (K0) {
    const o = X0(s);
    return au(o, i);
  } else
    return { base64: !0, data: s };
}, au = (s, i) => {
  switch (i) {
    case "blob":
      return s instanceof Blob ? s : new Blob([s]);
    case "arraybuffer":
    default:
      return s instanceof ArrayBuffer ? s : s.buffer;
  }
}, cu = "", Z0 = (s, i) => {
  const o = s.length, c = new Array(o);
  let l = 0;
  s.forEach((h, g) => {
    va(h, !1, (v) => {
      c[g] = v, ++l === o && i(c.join(cu));
    });
  });
}, J0 = (s, i) => {
  const o = s.split(cu), c = [];
  for (let l = 0; l < o.length; l++) {
    const h = ya(o[l], i);
    if (c.push(h), h.type === "error")
      break;
  }
  return c;
};
function Q0() {
  return new TransformStream({
    transform(s, i) {
      Y0(s, (o) => {
        const c = o.length;
        let l;
        if (c < 126)
          l = new Uint8Array(1), new DataView(l.buffer).setUint8(0, c);
        else if (c < 65536) {
          l = new Uint8Array(3);
          const h = new DataView(l.buffer);
          h.setUint8(0, 126), h.setUint16(1, c);
        } else {
          l = new Uint8Array(9);
          const h = new DataView(l.buffer);
          h.setUint8(0, 127), h.setBigUint64(1, BigInt(c));
        }
        s.data && typeof s.data != "string" && (l[0] |= 128), i.enqueue(l), i.enqueue(o);
      });
    }
  });
}
let Ui;
function co(s) {
  return s.reduce((i, o) => i + o.length, 0);
}
function lo(s, i) {
  if (s[0].length === i)
    return s.shift();
  const o = new Uint8Array(i);
  let c = 0;
  for (let l = 0; l < i; l++)
    o[l] = s[0][c++], c === s[0].length && (s.shift(), c = 0);
  return s.length && c < s[0].length && (s[0] = s[0].slice(c)), o;
}
function eh(s, i) {
  Ui || (Ui = new TextDecoder());
  const o = [];
  let c = 0, l = -1, h = !1;
  return new TransformStream({
    transform(g, v) {
      for (o.push(g); ; ) {
        if (c === 0) {
          if (co(o) < 1)
            break;
          const b = lo(o, 1);
          h = (b[0] & 128) === 128, l = b[0] & 127, l < 126 ? c = 3 : l === 126 ? c = 1 : c = 2;
        } else if (c === 1) {
          if (co(o) < 2)
            break;
          const b = lo(o, 2);
          l = new DataView(b.buffer, b.byteOffset, b.length).getUint16(0), c = 3;
        } else if (c === 2) {
          if (co(o) < 8)
            break;
          const b = lo(o, 8), S = new DataView(b.buffer, b.byteOffset, b.length), C = S.getUint32(0);
          if (C > Math.pow(2, 21) - 1) {
            v.enqueue(xs);
            break;
          }
          l = C * Math.pow(2, 32) + S.getUint32(4), c = 3;
        } else {
          if (co(o) < l)
            break;
          const b = lo(o, l);
          v.enqueue(ya(h ? b : Ui.decode(b), i)), c = 0;
        }
        if (l === 0 || l > s) {
          v.enqueue(xs);
          break;
        }
      }
    }
  });
}
const lu = 4;
function pt(s) {
  if (s) return th(s);
}
function th(s) {
  for (var i in pt.prototype)
    s[i] = pt.prototype[i];
  return s;
}
pt.prototype.on = pt.prototype.addEventListener = function(s, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(i), this;
};
pt.prototype.once = function(s, i) {
  function o() {
    this.off(s, o), i.apply(this, arguments);
  }
  return o.fn = i, this.on(s, o), this;
};
pt.prototype.off = pt.prototype.removeListener = pt.prototype.removeAllListeners = pt.prototype.removeEventListener = function(s, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var o = this._callbacks["$" + s];
  if (!o) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + s], this;
  for (var c, l = 0; l < o.length; l++)
    if (c = o[l], c === i || c.fn === i) {
      o.splice(l, 1);
      break;
    }
  return o.length === 0 && delete this._callbacks["$" + s], this;
};
pt.prototype.emit = function(s) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), o = this._callbacks["$" + s], c = 1; c < arguments.length; c++)
    i[c - 1] = arguments[c];
  if (o) {
    o = o.slice(0);
    for (var c = 0, l = o.length; c < l; ++c)
      o[c].apply(this, i);
  }
  return this;
};
pt.prototype.emitReserved = pt.prototype.emit;
pt.prototype.listeners = function(s) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
};
pt.prototype.hasListeners = function(s) {
  return !!this.listeners(s).length;
};
const vi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, o) => o(i, 0), Ht = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), nh = "arraybuffer";
function uu(s, ...i) {
  return i.reduce((o, c) => (s.hasOwnProperty(c) && (o[c] = s[c]), o), {});
}
const rh = Ht.setTimeout, oh = Ht.clearTimeout;
function yi(s, i) {
  i.useNativeTimers ? (s.setTimeoutFn = rh.bind(Ht), s.clearTimeoutFn = oh.bind(Ht)) : (s.setTimeoutFn = Ht.setTimeout.bind(Ht), s.clearTimeoutFn = Ht.clearTimeout.bind(Ht));
}
const ih = 1.33;
function sh(s) {
  return typeof s == "string" ? ah(s) : Math.ceil((s.byteLength || s.size) * ih);
}
function ah(s) {
  let i = 0, o = 0;
  for (let c = 0, l = s.length; c < l; c++)
    i = s.charCodeAt(c), i < 128 ? o += 1 : i < 2048 ? o += 2 : i < 55296 || i >= 57344 ? o += 3 : (c++, o += 4);
  return o;
}
function fu() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ch(s) {
  let i = "";
  for (let o in s)
    s.hasOwnProperty(o) && (i.length && (i += "&"), i += encodeURIComponent(o) + "=" + encodeURIComponent(s[o]));
  return i;
}
function lh(s) {
  let i = {}, o = s.split("&");
  for (let c = 0, l = o.length; c < l; c++) {
    let h = o[c].split("=");
    i[decodeURIComponent(h[0])] = decodeURIComponent(h[1]);
  }
  return i;
}
class uh extends Error {
  constructor(i, o, c) {
    super(i), this.description = o, this.context = c, this.type = "TransportError";
  }
}
class ba extends pt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, yi(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
  onError(i, o, c) {
    return super.emitReserved("error", new uh(i, o, c)), this;
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
  send(i) {
    this.readyState === "open" && this.write(i);
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
  onData(i) {
    const o = ya(i, this.socket.binaryType);
    this.onPacket(o);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(i) {
    this.readyState = "closed", super.emitReserved("close", i);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(i) {
  }
  createUri(i, o = {}) {
    return i + "://" + this._hostname() + this._port() + this.opts.path + this._query(o);
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(i) {
    const o = ch(i);
    return o.length ? "?" + o : "";
  }
}
class fh extends ba {
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
  pause(i) {
    this.readyState = "pausing";
    const o = () => {
      this.readyState = "paused", i();
    };
    if (this._polling || !this.writable) {
      let c = 0;
      this._polling && (c++, this.once("pollComplete", function() {
        --c || o();
      })), this.writable || (c++, this.once("drain", function() {
        --c || o();
      }));
    } else
      o();
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
  onData(i) {
    const o = (c) => {
      if (this.readyState === "opening" && c.type === "open" && this.onOpen(), c.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(c);
    };
    J0(i, this.socket.binaryType).forEach(o), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(i) {
    this.writable = !1, Z0(i, (o) => {
      this.doWrite(o, () => {
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
    const i = this.opts.secure ? "https" : "http", o = this.query || {};
    return this.opts.timestampRequests !== !1 && (o[this.opts.timestampParam] = fu()), !this.supportsBinary && !o.sid && (o.b64 = 1), this.createUri(i, o);
  }
}
let du = !1;
try {
  du = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const dh = du;
function hh() {
}
class ph extends fh {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(i) {
    if (super(i), typeof location < "u") {
      const o = location.protocol === "https:";
      let c = location.port;
      c || (c = o ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || c !== i.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(i, o) {
    const c = this.request({
      method: "POST",
      data: i
    });
    c.on("success", o), c.on("error", (l, h) => {
      this.onError("xhr post error", l, h);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)), i.on("error", (o, c) => {
      this.onError("xhr poll error", o, c);
    }), this.pollXhr = i;
  }
}
let rr = class Oo extends pt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, o, c) {
    super(), this.createRequest = i, yi(this, c), this._opts = c, this._method = c.method || "GET", this._uri = o, this._data = c.data !== void 0 ? c.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const o = uu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    o.xdomain = !!this._opts.xd;
    const c = this._xhr = this.createRequest(o);
    try {
      c.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          c.setDisableHeaderCheck && c.setDisableHeaderCheck(!0);
          for (let l in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(l) && c.setRequestHeader(l, this._opts.extraHeaders[l]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        c.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(c), "withCredentials" in c && (c.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (c.timeout = this._opts.requestTimeout), c.onreadystatechange = () => {
        var l;
        c.readyState === 3 && ((l = this._opts.cookieJar) === null || l === void 0 || l.parseCookies(
          // @ts-ignore
          c.getResponseHeader("set-cookie")
        )), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof c.status == "number" ? c.status : 0);
        }, 0));
      }, c.send(this._data);
    } catch (l) {
      this.setTimeoutFn(() => {
        this._onError(l);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Oo.requestsCount++, Oo.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(i) {
    this.emitReserved("error", i, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(i) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = hh, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Oo.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null && (this.emitReserved("data", i), this.emitReserved("success"), this._cleanup());
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
rr.requestsCount = 0;
rr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", pc);
  else if (typeof addEventListener == "function") {
    const s = "onpagehide" in Ht ? "pagehide" : "unload";
    addEventListener(s, pc, !1);
  }
}
function pc() {
  for (let s in rr.requests)
    rr.requests.hasOwnProperty(s) && rr.requests[s].abort();
}
const xh = function() {
  const s = hu({
    xdomain: !1
  });
  return s && s.responseType !== null;
}();
class mh extends ph {
  constructor(i) {
    super(i);
    const o = i && i.forceBase64;
    this.supportsBinary = xh && !o;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new rr(hu, this.uri(), i);
  }
}
function hu(s) {
  const i = s.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || dh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new Ht[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const pu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class gh extends ba {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), o = this.opts.protocols, c = pu ? {} : uu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (c.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, o, c);
    } catch (l) {
      return this.emitReserved("error", l);
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
    }, this.ws.onclose = (i) => this.onClose({
      description: "websocket connection closed",
      context: i
    }), this.ws.onmessage = (i) => this.onData(i.data), this.ws.onerror = (i) => this.onError("websocket error", i);
  }
  write(i) {
    this.writable = !1;
    for (let o = 0; o < i.length; o++) {
      const c = i[o], l = o === i.length - 1;
      va(c, this.supportsBinary, (h) => {
        try {
          this.doWrite(c, h);
        } catch {
        }
        l && vi(() => {
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
    const i = this.opts.secure ? "wss" : "ws", o = this.query || {};
    return this.opts.timestampRequests && (o[this.opts.timestampParam] = fu()), this.supportsBinary || (o.b64 = 1), this.createUri(i, o);
  }
}
const Wi = Ht.WebSocket || Ht.MozWebSocket;
class vh extends gh {
  createSocket(i, o, c) {
    return pu ? new Wi(i, o, c) : o ? new Wi(i, o) : new Wi(i);
  }
  doWrite(i, o) {
    this.ws.send(o);
  }
}
class yh extends ba {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((i) => {
      this.onError("webtransport error", i);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((i) => {
        const o = eh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = i.readable.pipeThrough(o).getReader(), l = Q0();
        l.readable.pipeTo(i.writable), this._writer = l.writable.getWriter();
        const h = () => {
          c.read().then(({ done: v, value: b }) => {
            v || (this.onPacket(b), h());
          }).catch((v) => {
          });
        };
        h();
        const g = { type: "open" };
        this.query.sid && (g.data = `{"sid":"${this.query.sid}"}`), this._writer.write(g).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let o = 0; o < i.length; o++) {
      const c = i[o], l = o === i.length - 1;
      this._writer.write(c).then(() => {
        l && vi(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const bh = {
  websocket: vh,
  webtransport: yh,
  polling: mh
}, Sh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, wh = [
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
function ms(s) {
  if (s.length > 8e3)
    throw "URI too long";
  const i = s, o = s.indexOf("["), c = s.indexOf("]");
  o != -1 && c != -1 && (s = s.substring(0, o) + s.substring(o, c).replace(/:/g, ";") + s.substring(c, s.length));
  let l = Sh.exec(s || ""), h = {}, g = 14;
  for (; g--; )
    h[wh[g]] = l[g] || "";
  return o != -1 && c != -1 && (h.source = i, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h.pathNames = Eh(h, h.path), h.queryKey = Ch(h, h.query), h;
}
function Eh(s, i) {
  const o = /\/{2,9}/g, c = i.replace(o, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && c.splice(0, 1), i.slice(-1) == "/" && c.splice(c.length - 1, 1), c;
}
function Ch(s, i) {
  const o = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(c, l, h) {
    l && (o[l] = h);
  }), o;
}
const gs = typeof addEventListener == "function" && typeof removeEventListener == "function", Ro = [];
gs && addEventListener("offline", () => {
  Ro.forEach((s) => s());
}, !1);
class Tn extends pt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, o) {
    if (super(), this.binaryType = nh, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (o = i, i = null), i) {
      const c = ms(i);
      o.hostname = c.host, o.secure = c.protocol === "https" || c.protocol === "wss", o.port = c.port, c.query && (o.query = c.query);
    } else o.host && (o.hostname = ms(o.host).host);
    yi(this, o), this.secure = o.secure != null ? o.secure : typeof location < "u" && location.protocol === "https:", o.hostname && !o.port && (o.port = this.secure ? "443" : "80"), this.hostname = o.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = o.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, o.transports.forEach((c) => {
      const l = c.prototype.name;
      this.transports.push(l), this._transportsByName[l] = c;
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
    }, o), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = lh(this.opts.query)), gs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Ro.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(i) {
    const o = Object.assign({}, this.opts.query);
    o.EIO = lu, o.transport = i, this.id && (o.sid = this.id);
    const c = Object.assign({}, this.opts, {
      query: o,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[i]);
    return new this._transportsByName[i](c);
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
    const i = this.opts.rememberUpgrade && Tn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const o = this.createTransport(i);
    o.open(), this.setTransport(o);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(), this.transport = i, i.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (o) => this._onClose("transport close", o));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Tn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(i) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const o = new Error("server error");
          o.code = i.data, this._onError(o);
          break;
        case "message":
          this.emitReserved("data", i.data), this.emitReserved("message", i.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(i) {
    this.emitReserved("handshake", i), this.id = i.sid, this.transport.query.sid = i.sid, this._pingInterval = i.pingInterval, this._pingTimeout = i.pingTimeout, this._maxPayload = i.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + i, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, i), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const i = this._getWritablePackets();
      this.transport.send(i), this._prevBufferLen = i.length, this.emitReserved("flush");
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
    let o = 1;
    for (let c = 0; c < this.writeBuffer.length; c++) {
      const l = this.writeBuffer[c].data;
      if (l && (o += sh(l)), c > 0 && o > this._maxPayload)
        return this.writeBuffer.slice(0, c);
      o += 2;
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
    const i = Date.now() > this._pingTimeoutTime;
    return i && (this._pingTimeoutTime = 0, vi(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), i;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(i, o, c) {
    return this._sendPacket("message", i, o, c), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(i, o, c) {
    return this._sendPacket("message", i, o, c), this;
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
  _sendPacket(i, o, c, l) {
    if (typeof o == "function" && (l = o, o = void 0), typeof c == "function" && (l = c, c = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    c = c || {}, c.compress = c.compress !== !1;
    const h = {
      type: i,
      data: o,
      options: c
    };
    this.emitReserved("packetCreate", h), this.writeBuffer.push(h), l && this.once("flush", l), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const i = () => {
      this._onClose("forced close"), this.transport.close();
    }, o = () => {
      this.off("upgrade", o), this.off("upgradeError", o), i();
    }, c = () => {
      this.once("upgrade", o), this.once("upgradeError", o);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? c() : i();
    }) : this.upgrading ? c() : i()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(i) {
    if (Tn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(i, o) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), gs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const c = Ro.indexOf(this._offlineEventListener);
        c !== -1 && Ro.splice(c, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, o), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Tn.protocol = lu;
class Ah extends Tn {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(i) {
    let o = this.createTransport(i), c = !1;
    Tn.priorWebsocketSuccess = !1;
    const l = () => {
      c || (o.send([{ type: "ping", data: "probe" }]), o.once("packet", (P) => {
        if (!c)
          if (P.type === "pong" && P.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", o), !o)
              return;
            Tn.priorWebsocketSuccess = o.name === "websocket", this.transport.pause(() => {
              c || this.readyState !== "closed" && (C(), this.setTransport(o), o.send([{ type: "upgrade" }]), this.emitReserved("upgrade", o), o = null, this.upgrading = !1, this.flush());
            });
          } else {
            const w = new Error("probe error");
            w.transport = o.name, this.emitReserved("upgradeError", w);
          }
      }));
    };
    function h() {
      c || (c = !0, C(), o.close(), o = null);
    }
    const g = (P) => {
      const w = new Error("probe error: " + P);
      w.transport = o.name, h(), this.emitReserved("upgradeError", w);
    };
    function v() {
      g("transport closed");
    }
    function b() {
      g("socket closed");
    }
    function S(P) {
      o && P.name !== o.name && h();
    }
    const C = () => {
      o.removeListener("open", l), o.removeListener("error", g), o.removeListener("close", v), this.off("close", b), this.off("upgrading", S);
    };
    o.once("open", l), o.once("error", g), o.once("close", v), this.once("close", b), this.once("upgrading", S), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
      c || o.open();
    }, 200) : o.open();
  }
  onHandshake(i) {
    this._upgrades = this._filterUpgrades(i.upgrades), super.onHandshake(i);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(i) {
    const o = [];
    for (let c = 0; c < i.length; c++)
      ~this.transports.indexOf(i[c]) && o.push(i[c]);
    return o;
  }
}
let Th = class extends Ah {
  constructor(i, o = {}) {
    const c = typeof i == "object" ? i : o;
    (!c.transports || c.transports && typeof c.transports[0] == "string") && (c.transports = (c.transports || ["polling", "websocket", "webtransport"]).map((l) => bh[l]).filter((l) => !!l)), super(i, c);
  }
};
function Oh(s, i = "", o) {
  let c = s;
  o = o || typeof location < "u" && location, s == null && (s = o.protocol + "//" + o.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = o.protocol + s : s = o.host + s), /^(https?|wss?):\/\//.test(s) || (typeof o < "u" ? s = o.protocol + "//" + s : s = "https://" + s), c = ms(s)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/";
  const h = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host;
  return c.id = c.protocol + "://" + h + ":" + c.port + i, c.href = c.protocol + "://" + h + (o && o.port === c.port ? "" : ":" + c.port), c;
}
const Rh = typeof ArrayBuffer == "function", kh = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer, xu = Object.prototype.toString, Ph = typeof Blob == "function" || typeof Blob < "u" && xu.call(Blob) === "[object BlobConstructor]", Ih = typeof File == "function" || typeof File < "u" && xu.call(File) === "[object FileConstructor]";
function Sa(s) {
  return Rh && (s instanceof ArrayBuffer || kh(s)) || Ph && s instanceof Blob || Ih && s instanceof File;
}
function ko(s, i) {
  if (!s || typeof s != "object")
    return !1;
  if (Array.isArray(s)) {
    for (let o = 0, c = s.length; o < c; o++)
      if (ko(s[o]))
        return !0;
    return !1;
  }
  if (Sa(s))
    return !0;
  if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
    return ko(s.toJSON(), !0);
  for (const o in s)
    if (Object.prototype.hasOwnProperty.call(s, o) && ko(s[o]))
      return !0;
  return !1;
}
function _h(s) {
  const i = [], o = s.data, c = s;
  return c.data = vs(o, i), c.attachments = i.length, { packet: c, buffers: i };
}
function vs(s, i) {
  if (!s)
    return s;
  if (Sa(s)) {
    const o = { _placeholder: !0, num: i.length };
    return i.push(s), o;
  } else if (Array.isArray(s)) {
    const o = new Array(s.length);
    for (let c = 0; c < s.length; c++)
      o[c] = vs(s[c], i);
    return o;
  } else if (typeof s == "object" && !(s instanceof Date)) {
    const o = {};
    for (const c in s)
      Object.prototype.hasOwnProperty.call(s, c) && (o[c] = vs(s[c], i));
    return o;
  }
  return s;
}
function Nh(s, i) {
  return s.data = ys(s.data, i), delete s.attachments, s;
}
function ys(s, i) {
  if (!s)
    return s;
  if (s && s._placeholder === !0) {
    if (typeof s.num == "number" && s.num >= 0 && s.num < i.length)
      return i[s.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(s))
    for (let o = 0; o < s.length; o++)
      s[o] = ys(s[o], i);
  else if (typeof s == "object")
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && (s[o] = ys(s[o], i));
  return s;
}
const Dh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], jh = 5;
var ze;
(function(s) {
  s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
})(ze || (ze = {}));
class Lh {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(i) {
    this.replacer = i;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(i) {
    return (i.type === ze.EVENT || i.type === ze.ACK) && ko(i) ? this.encodeAsBinary({
      type: i.type === ze.EVENT ? ze.BINARY_EVENT : ze.BINARY_ACK,
      nsp: i.nsp,
      data: i.data,
      id: i.id
    }) : [this.encodeAsString(i)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(i) {
    let o = "" + i.type;
    return (i.type === ze.BINARY_EVENT || i.type === ze.BINARY_ACK) && (o += i.attachments + "-"), i.nsp && i.nsp !== "/" && (o += i.nsp + ","), i.id != null && (o += i.id), i.data != null && (o += JSON.stringify(i.data, this.replacer)), o;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const o = _h(i), c = this.encodeAsString(o.packet), l = o.buffers;
    return l.unshift(c), l;
  }
}
function xc(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
class wa extends pt {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(i) {
    super(), this.reviver = i;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(i) {
    let o;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      o = this.decodeString(i);
      const c = o.type === ze.BINARY_EVENT;
      c || o.type === ze.BINARY_ACK ? (o.type = c ? ze.EVENT : ze.ACK, this.reconstructor = new Mh(o), o.attachments === 0 && super.emitReserved("decoded", o)) : super.emitReserved("decoded", o);
    } else if (Sa(i) || i.base64)
      if (this.reconstructor)
        o = this.reconstructor.takeBinaryData(i), o && (this.reconstructor = null, super.emitReserved("decoded", o));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + i);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(i) {
    let o = 0;
    const c = {
      type: Number(i.charAt(0))
    };
    if (ze[c.type] === void 0)
      throw new Error("unknown packet type " + c.type);
    if (c.type === ze.BINARY_EVENT || c.type === ze.BINARY_ACK) {
      const h = o + 1;
      for (; i.charAt(++o) !== "-" && o != i.length; )
        ;
      const g = i.substring(h, o);
      if (g != Number(g) || i.charAt(o) !== "-")
        throw new Error("Illegal attachments");
      c.attachments = Number(g);
    }
    if (i.charAt(o + 1) === "/") {
      const h = o + 1;
      for (; ++o && !(i.charAt(o) === "," || o === i.length); )
        ;
      c.nsp = i.substring(h, o);
    } else
      c.nsp = "/";
    const l = i.charAt(o + 1);
    if (l !== "" && Number(l) == l) {
      const h = o + 1;
      for (; ++o; ) {
        const g = i.charAt(o);
        if (g == null || Number(g) != g) {
          --o;
          break;
        }
        if (o === i.length)
          break;
      }
      c.id = Number(i.substring(h, o + 1));
    }
    if (i.charAt(++o)) {
      const h = this.tryParse(i.substr(o));
      if (wa.isPayloadValid(c.type, h))
        c.data = h;
      else
        throw new Error("invalid payload");
    }
    return c;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, o) {
    switch (i) {
      case ze.CONNECT:
        return xc(o);
      case ze.DISCONNECT:
        return o === void 0;
      case ze.CONNECT_ERROR:
        return typeof o == "string" || xc(o);
      case ze.EVENT:
      case ze.BINARY_EVENT:
        return Array.isArray(o) && (typeof o[0] == "number" || typeof o[0] == "string" && Dh.indexOf(o[0]) === -1);
      case ze.ACK:
      case ze.BINARY_ACK:
        return Array.isArray(o);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Mh {
  constructor(i) {
    this.packet = i, this.buffers = [], this.reconPack = i;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(i) {
    if (this.buffers.push(i), this.buffers.length === this.reconPack.attachments) {
      const o = Nh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), o;
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
const Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: wa,
  Encoder: Lh,
  get PacketType() {
    return ze;
  },
  protocol: jh
}, Symbol.toStringTag, { value: "Module" }));
function $t(s, i, o) {
  return s.on(i, o), function() {
    s.off(i, o);
  };
}
const Fh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class mu extends pt {
  /**
   * `Socket` constructor.
   */
  constructor(i, o, c) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = o, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open();
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
    const i = this.io;
    this.subs = [
      $t(i, "open", this.onopen.bind(this)),
      $t(i, "packet", this.onpacket.bind(this)),
      $t(i, "error", this.onerror.bind(this)),
      $t(i, "close", this.onclose.bind(this))
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
  send(...i) {
    return i.unshift("message"), this.emit.apply(this, i), this;
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
  emit(i, ...o) {
    var c, l, h;
    if (Fh.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (o.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(o), this;
    const g = {
      type: ze.EVENT,
      data: o
    };
    if (g.options = {}, g.options.compress = this.flags.compress !== !1, typeof o[o.length - 1] == "function") {
      const C = this.ids++, P = o.pop();
      this._registerAckCallback(C, P), g.id = C;
    }
    const v = (l = (c = this.io.engine) === null || c === void 0 ? void 0 : c.transport) === null || l === void 0 ? void 0 : l.writable, b = this.connected && !(!((h = this.io.engine) === null || h === void 0) && h._hasPingExpired());
    return this.flags.volatile && !v || (b ? (this.notifyOutgoingListeners(g), this.packet(g)) : this.sendBuffer.push(g)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, o) {
    var c;
    const l = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[i] = o;
      return;
    }
    const h = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let v = 0; v < this.sendBuffer.length; v++)
        this.sendBuffer[v].id === i && this.sendBuffer.splice(v, 1);
      o.call(this, new Error("operation has timed out"));
    }, l), g = (...v) => {
      this.io.clearTimeoutFn(h), o.apply(this, v);
    };
    g.withError = !0, this.acks[i] = g;
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
  emitWithAck(i, ...o) {
    return new Promise((c, l) => {
      const h = (g, v) => g ? l(g) : c(v);
      h.withError = !0, o.push(h), this.emit(i, ...o);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(i) {
    let o;
    typeof i[i.length - 1] == "function" && (o = i.pop());
    const c = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((l, ...h) => c !== this._queue[0] ? void 0 : (l !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), o && o(l)) : (this._queue.shift(), o && o(null, ...h)), c.pending = !1, this._drainQueue())), this._queue.push(c), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const o = this._queue[0];
    o.pending && !i || (o.pending = !0, o.tryCount++, this.flags = o.flags, this.emit.apply(this, o.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(i) {
    i.nsp = this.nsp, this.io._packet(i);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((i) => {
      this._sendConnectPacket(i);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(i) {
    this.packet({
      type: ze.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i) : i
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(i, o) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", i, o), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((c) => String(c.id) === i)) {
        const c = this.acks[i];
        delete this.acks[i], c.withError && c.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case ze.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ze.EVENT:
        case ze.BINARY_EVENT:
          this.onevent(i);
          break;
        case ze.ACK:
        case ze.BINARY_ACK:
          this.onack(i);
          break;
        case ze.DISCONNECT:
          this.ondisconnect();
          break;
        case ze.CONNECT_ERROR:
          this.destroy();
          const c = new Error(i.data.message);
          c.data = i.data.data, this.emitReserved("connect_error", c);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(i) {
    const o = i.data || [];
    i.id != null && o.push(this.ack(i.id)), this.connected ? this.emitEvent(o) : this.receiveBuffer.push(Object.freeze(o));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const o = this._anyListeners.slice();
      for (const c of o)
        c.apply(this, i);
    }
    super.emit.apply(this, i), this._pid && i.length && typeof i[i.length - 1] == "string" && (this._lastOffset = i[i.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(i) {
    const o = this;
    let c = !1;
    return function(...l) {
      c || (c = !0, o.packet({
        type: ze.ACK,
        id: i,
        data: l
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(i) {
    const o = this.acks[i.id];
    typeof o == "function" && (delete this.acks[i.id], o.withError && i.data.unshift(null), o.apply(this, i.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(i, o) {
    this.id = i, this.recovered = o && this._pid === o, this._pid = o, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((i) => this.emitEvent(i)), this.receiveBuffer = [], this.sendBuffer.forEach((i) => {
      this.notifyOutgoingListeners(i), this.packet(i);
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
    this.subs && (this.subs.forEach((i) => i()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: ze.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(i) {
    return this.flags.compress = i, this;
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
  timeout(i) {
    return this.flags.timeout = i, this;
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
  onAny(i) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(i), this;
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
  prependAny(i) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(i), this;
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
  offAny(i) {
    if (!this._anyListeners)
      return this;
    if (i) {
      const o = this._anyListeners;
      for (let c = 0; c < o.length; c++)
        if (i === o[c])
          return o.splice(c, 1), this;
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
  onAnyOutgoing(i) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(i), this;
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
  prependAnyOutgoing(i) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(i), this;
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
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners)
      return this;
    if (i) {
      const o = this._anyOutgoingListeners;
      for (let c = 0; c < o.length; c++)
        if (i === o[c])
          return o.splice(c, 1), this;
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
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const o = this._anyOutgoingListeners.slice();
      for (const c of o)
        c.apply(this, i.data);
    }
  }
}
function yr(s) {
  s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
}
yr.prototype.duration = function() {
  var s = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), o = Math.floor(i * this.jitter * s);
    s = (Math.floor(i * 10) & 1) == 0 ? s - o : s + o;
  }
  return Math.min(s, this.max) | 0;
};
yr.prototype.reset = function() {
  this.attempts = 0;
};
yr.prototype.setMin = function(s) {
  this.ms = s;
};
yr.prototype.setMax = function(s) {
  this.max = s;
};
yr.prototype.setJitter = function(s) {
  this.jitter = s;
};
class bs extends pt {
  constructor(i, o) {
    var c;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (o = i, i = void 0), o = o || {}, o.path = o.path || "/socket.io", this.opts = o, yi(this, o), this.reconnection(o.reconnection !== !1), this.reconnectionAttempts(o.reconnectionAttempts || 1 / 0), this.reconnectionDelay(o.reconnectionDelay || 1e3), this.reconnectionDelayMax(o.reconnectionDelayMax || 5e3), this.randomizationFactor((c = o.randomizationFactor) !== null && c !== void 0 ? c : 0.5), this.backoff = new yr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(o.timeout == null ? 2e4 : o.timeout), this._readyState = "closed", this.uri = i;
    const l = o.parser || Bh;
    this.encoder = new l.Encoder(), this.decoder = new l.Decoder(), this._autoConnect = o.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length ? (this._reconnection = !!i, i || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = i, this);
  }
  reconnectionDelay(i) {
    var o;
    return i === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = i, (o = this.backoff) === null || o === void 0 || o.setMin(i), this);
  }
  randomizationFactor(i) {
    var o;
    return i === void 0 ? this._randomizationFactor : (this._randomizationFactor = i, (o = this.backoff) === null || o === void 0 || o.setJitter(i), this);
  }
  reconnectionDelayMax(i) {
    var o;
    return i === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = i, (o = this.backoff) === null || o === void 0 || o.setMax(i), this);
  }
  timeout(i) {
    return arguments.length ? (this._timeout = i, this) : this._timeout;
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
  open(i) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Th(this.uri, this.opts);
    const o = this.engine, c = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const l = $t(o, "open", function() {
      c.onopen(), i && i();
    }), h = (v) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", v), i ? i(v) : this.maybeReconnectOnOpen();
    }, g = $t(o, "error", h);
    if (this._timeout !== !1) {
      const v = this._timeout, b = this.setTimeoutFn(() => {
        l(), h(new Error("timeout")), o.close();
      }, v);
      this.opts.autoUnref && b.unref(), this.subs.push(() => {
        this.clearTimeoutFn(b);
      });
    }
    return this.subs.push(l), this.subs.push(g), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(i) {
    return this.open(i);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const i = this.engine;
    this.subs.push(
      $t(i, "ping", this.onping.bind(this)),
      $t(i, "data", this.ondata.bind(this)),
      $t(i, "error", this.onerror.bind(this)),
      $t(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      $t(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (o) {
      this.onclose("parse error", o);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(i) {
    vi(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(i) {
    this.emitReserved("error", i);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(i, o) {
    let c = this.nsps[i];
    return c ? this._autoConnect && !c.active && c.connect() : (c = new mu(this, i, o), this.nsps[i] = c), c;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(i) {
    const o = Object.keys(this.nsps);
    for (const c of o)
      if (this.nsps[c].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(i) {
    const o = this.encoder.encode(i);
    for (let c = 0; c < o.length; c++)
      this.engine.write(o[c], i.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((i) => i()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(i, o) {
    var c;
    this.cleanup(), (c = this.engine) === null || c === void 0 || c.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, o), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const o = this.backoff.duration();
      this._reconnecting = !0;
      const c = this.setTimeoutFn(() => {
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((l) => {
          l ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", l)) : i.onreconnect();
        }));
      }, o);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const i = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", i);
  }
}
const kr = {};
function Po(s, i) {
  typeof s == "object" && (i = s, s = void 0), i = i || {};
  const o = Oh(s, i.path || "/socket.io"), c = o.source, l = o.id, h = o.path, g = kr[l] && h in kr[l].nsps, v = i.forceNew || i["force new connection"] || i.multiplex === !1 || g;
  let b;
  return v ? b = new bs(c, i) : (kr[l] || (kr[l] = new bs(c, i)), b = kr[l]), o.query && !i.query && (i.query = o.queryKey), b.socket(o.path, i);
}
Object.assign(Po, {
  Manager: bs,
  Socket: mu,
  io: Po,
  connect: Po
});
var qi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var mc;
function zh() {
  return mc || (mc = 1, function(s) {
    (function() {
      var i = {}.hasOwnProperty;
      function o() {
        for (var h = "", g = 0; g < arguments.length; g++) {
          var v = arguments[g];
          v && (h = l(h, c(v)));
        }
        return h;
      }
      function c(h) {
        if (typeof h == "string" || typeof h == "number")
          return h;
        if (typeof h != "object")
          return "";
        if (Array.isArray(h))
          return o.apply(null, h);
        if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]"))
          return h.toString();
        var g = "";
        for (var v in h)
          i.call(h, v) && h[v] && (g = l(g, v));
        return g;
      }
      function l(h, g) {
        return g ? h ? h + " " + g : h + g : h;
      }
      s.exports ? (o.default = o, s.exports = o) : window.classNames = o;
    })();
  }(qi)), qi.exports;
}
var Vh = zh();
const Tt = /* @__PURE__ */ Id(Vh);
function fn() {
  return fn = Object.assign ? Object.assign.bind() : function(s) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var c in o) ({}).hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }
    return s;
  }, fn.apply(null, arguments);
}
function $e(s) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, $e(s);
}
var Hh = Symbol.for("react.element"), Uh = Symbol.for("react.transitional.element"), Wh = Symbol.for("react.fragment");
function qh(s) {
  return (
    // Base object type
    s && $e(s) === "object" && // React Element type
    (s.$$typeof === Hh || s.$$typeof === Uh) && // React Fragment type
    s.type === Wh
  );
}
var Ss = {}, Ea = [], $h = function(i) {
  Ea.push(i);
};
function Ca(s, i) {
  if (process.env.NODE_ENV !== "production" && !s && console !== void 0) {
    var o = Ea.reduce(function(c, l) {
      return l(c ?? "", "warning");
    }, i);
    o && console.error("Warning: ".concat(o));
  }
}
function Yh(s, i) {
  if (process.env.NODE_ENV !== "production" && !s && console !== void 0) {
    var o = Ea.reduce(function(c, l) {
      return l(c ?? "", "note");
    }, i);
    o && console.warn("Note: ".concat(o));
  }
}
function gu() {
  Ss = {};
}
function vu(s, i, o) {
  !i && !Ss[o] && (s(!1, o), Ss[o] = !0);
}
function kn(s, i) {
  vu(Ca, s, i);
}
function Xh(s, i) {
  vu(Yh, s, i);
}
kn.preMessage = $h;
kn.resetWarned = gu;
kn.noteOnce = Xh;
function Kh(s, i) {
  if ($e(s) != "object" || !s) return s;
  var o = s[Symbol.toPrimitive];
  if (o !== void 0) {
    var c = o.call(s, i);
    if ($e(c) != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(s);
}
function yu(s) {
  var i = Kh(s, "string");
  return $e(i) == "symbol" ? i : i + "";
}
function ve(s, i, o) {
  return (i = yu(i)) in s ? Object.defineProperty(s, i, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[i] = o, s;
}
function gc(s, i) {
  var o = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(s);
    i && (c = c.filter(function(l) {
      return Object.getOwnPropertyDescriptor(s, l).enumerable;
    })), o.push.apply(o, c);
  }
  return o;
}
function xe(s) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2 ? gc(Object(o), !0).forEach(function(c) {
      ve(s, c, o[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : gc(Object(o)).forEach(function(c) {
      Object.defineProperty(s, c, Object.getOwnPropertyDescriptor(o, c));
    });
  }
  return s;
}
function vc(s) {
  return s instanceof HTMLElement || s instanceof SVGElement;
}
function Gh(s) {
  return s && $e(s) === "object" && vc(s.nativeElement) ? s.nativeElement : vc(s) ? s : null;
}
function Zh(s) {
  var i = Gh(s);
  if (i)
    return i;
  if (s instanceof lt.Component) {
    var o;
    return (o = Ua.findDOMNode) === null || o === void 0 ? void 0 : o.call(Ua, s);
  }
  return null;
}
var uo = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc;
function Jh() {
  if (yc) return Ue;
  yc = 1;
  var s = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.server_context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), V;
  V = Symbol.for("react.module.reference");
  function D(L) {
    if (typeof L == "object" && L !== null) {
      var K = L.$$typeof;
      switch (K) {
        case s:
          switch (L = L.type, L) {
            case o:
            case l:
            case c:
            case S:
            case C:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case v:
                case g:
                case b:
                case w:
                case P:
                case h:
                  return L;
                default:
                  return K;
              }
          }
        case i:
          return K;
      }
    }
  }
  return Ue.ContextConsumer = g, Ue.ContextProvider = h, Ue.Element = s, Ue.ForwardRef = b, Ue.Fragment = o, Ue.Lazy = w, Ue.Memo = P, Ue.Portal = i, Ue.Profiler = l, Ue.StrictMode = c, Ue.Suspense = S, Ue.SuspenseList = C, Ue.isAsyncMode = function() {
    return !1;
  }, Ue.isConcurrentMode = function() {
    return !1;
  }, Ue.isContextConsumer = function(L) {
    return D(L) === g;
  }, Ue.isContextProvider = function(L) {
    return D(L) === h;
  }, Ue.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === s;
  }, Ue.isForwardRef = function(L) {
    return D(L) === b;
  }, Ue.isFragment = function(L) {
    return D(L) === o;
  }, Ue.isLazy = function(L) {
    return D(L) === w;
  }, Ue.isMemo = function(L) {
    return D(L) === P;
  }, Ue.isPortal = function(L) {
    return D(L) === i;
  }, Ue.isProfiler = function(L) {
    return D(L) === l;
  }, Ue.isStrictMode = function(L) {
    return D(L) === c;
  }, Ue.isSuspense = function(L) {
    return D(L) === S;
  }, Ue.isSuspenseList = function(L) {
    return D(L) === C;
  }, Ue.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === o || L === l || L === c || L === S || L === C || L === U || typeof L == "object" && L !== null && (L.$$typeof === w || L.$$typeof === P || L.$$typeof === h || L.$$typeof === g || L.$$typeof === b || L.$$typeof === V || L.getModuleId !== void 0);
  }, Ue.typeOf = D, Ue;
}
var We = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc;
function Qh() {
  return bc || (bc = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.server_context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), V = !1, D = !1, L = !1, K = !1, $ = !1, _;
    _ = Symbol.for("react.module.reference");
    function J(se) {
      return !!(typeof se == "string" || typeof se == "function" || se === o || se === l || $ || se === c || se === S || se === C || K || se === U || V || D || L || typeof se == "object" && se !== null && (se.$$typeof === w || se.$$typeof === P || se.$$typeof === h || se.$$typeof === g || se.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      se.$$typeof === _ || se.getModuleId !== void 0));
    }
    function q(se) {
      if (typeof se == "object" && se !== null) {
        var Je = se.$$typeof;
        switch (Je) {
          case s:
            var Qe = se.type;
            switch (Qe) {
              case o:
              case l:
              case c:
              case S:
              case C:
                return Qe;
              default:
                var Ft = Qe && Qe.$$typeof;
                switch (Ft) {
                  case v:
                  case g:
                  case b:
                  case w:
                  case P:
                  case h:
                    return Ft;
                  default:
                    return Je;
                }
            }
          case i:
            return Je;
        }
      }
    }
    var te = g, Q = h, ae = s, fe = b, Se = o, De = w, Ee = P, de = i, ye = l, me = c, Ie = S, Ae = C, Re = !1, Te = !1;
    function Pe(se) {
      return Re || (Re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ce(se) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(se) {
      return q(se) === g;
    }
    function be(se) {
      return q(se) === h;
    }
    function Oe(se) {
      return typeof se == "object" && se !== null && se.$$typeof === s;
    }
    function ke(se) {
      return q(se) === b;
    }
    function Fe(se) {
      return q(se) === o;
    }
    function re(se) {
      return q(se) === w;
    }
    function he(se) {
      return q(se) === P;
    }
    function ne(se) {
      return q(se) === i;
    }
    function ie(se) {
      return q(se) === l;
    }
    function X(se) {
      return q(se) === c;
    }
    function le(se) {
      return q(se) === S;
    }
    function tt(se) {
      return q(se) === C;
    }
    We.ContextConsumer = te, We.ContextProvider = Q, We.Element = ae, We.ForwardRef = fe, We.Fragment = Se, We.Lazy = De, We.Memo = Ee, We.Portal = de, We.Profiler = ye, We.StrictMode = me, We.Suspense = Ie, We.SuspenseList = Ae, We.isAsyncMode = Pe, We.isConcurrentMode = Ce, We.isContextConsumer = pe, We.isContextProvider = be, We.isElement = Oe, We.isForwardRef = ke, We.isFragment = Fe, We.isLazy = re, We.isMemo = he, We.isPortal = ne, We.isProfiler = ie, We.isStrictMode = X, We.isSuspense = le, We.isSuspenseList = tt, We.isValidElementType = J, We.typeOf = q;
  }()), We;
}
var Sc;
function ep() {
  return Sc || (Sc = 1, process.env.NODE_ENV === "production" ? uo.exports = Jh() : uo.exports = Qh()), uo.exports;
}
var $i = ep();
function bu(s, i, o) {
  var c = Z.useRef({});
  return (!("value" in c.current) || o(c.current.condition, i)) && (c.current.value = s(), c.current.condition = i), c.current.value;
}
var tp = Number(kd.split(".")[0]), Su = function(i, o) {
  typeof i == "function" ? i(o) : $e(i) === "object" && i && "current" in i && (i.current = o);
}, np = function() {
  for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
    o[c] = arguments[c];
  var l = o.filter(Boolean);
  return l.length <= 1 ? l[0] : function(h) {
    o.forEach(function(g) {
      Su(g, h);
    });
  };
}, rp = function(i) {
  var o, c;
  if (!i)
    return !1;
  if (wu(i) && tp >= 19)
    return !0;
  var l = $i.isMemo(i) ? i.type.type : i.type;
  return !(typeof l == "function" && !((o = l.prototype) !== null && o !== void 0 && o.render) && l.$$typeof !== $i.ForwardRef || typeof i == "function" && !((c = i.prototype) !== null && c !== void 0 && c.render) && i.$$typeof !== $i.ForwardRef);
};
function wu(s) {
  return /* @__PURE__ */ Rd(s) && !qh(s);
}
var op = function(i) {
  if (i && wu(i)) {
    var o = i;
    return o.props.propertyIsEnumerable("ref") ? o.props.ref : o.ref;
  }
  return null;
};
function Jt(s, i) {
  if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function wc(s, i) {
  for (var o = 0; o < i.length; o++) {
    var c = i[o];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(s, yu(c.key), c);
  }
}
function Qt(s, i, o) {
  return i && wc(s.prototype, i), o && wc(s, o), Object.defineProperty(s, "prototype", {
    writable: !1
  }), s;
}
function ws(s, i) {
  return ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, c) {
    return o.__proto__ = c, o;
  }, ws(s, i);
}
function Zr(s, i) {
  if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
  s.prototype = Object.create(i && i.prototype, {
    constructor: {
      value: s,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(s, "prototype", {
    writable: !1
  }), i && ws(s, i);
}
function fr(s) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, fr(s);
}
function Aa() {
  try {
    var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Aa = function() {
    return !!s;
  })();
}
function qn(s) {
  if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Eu(s, i) {
  if (i && ($e(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return qn(s);
}
function bi(s) {
  var i = Aa();
  return function() {
    var o, c = fr(s);
    if (i) {
      var l = fr(this).constructor;
      o = Reflect.construct(c, arguments, l);
    } else o = c.apply(this, arguments);
    return Eu(this, o);
  };
}
function Es(s, i) {
  (i == null || i > s.length) && (i = s.length);
  for (var o = 0, c = Array(i); o < i; o++) c[o] = s[o];
  return c;
}
function ip(s) {
  if (Array.isArray(s)) return Es(s);
}
function Cu(s) {
  if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s);
}
function Ta(s, i) {
  if (s) {
    if (typeof s == "string") return Es(s, i);
    var o = {}.toString.call(s).slice(8, -1);
    return o === "Object" && s.constructor && (o = s.constructor.name), o === "Map" || o === "Set" ? Array.from(s) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Es(s, i) : void 0;
  }
}
function sp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yn(s) {
  return ip(s) || Cu(s) || Ta(s) || sp();
}
var Au = function(i) {
  return +setTimeout(i, 16);
}, Tu = function(i) {
  return clearTimeout(i);
};
typeof window < "u" && "requestAnimationFrame" in window && (Au = function(i) {
  return window.requestAnimationFrame(i);
}, Tu = function(i) {
  return window.cancelAnimationFrame(i);
});
var Ec = 0, Si = /* @__PURE__ */ new Map();
function Ou(s) {
  Si.delete(s);
}
var Yo = function(i) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ec += 1;
  var c = Ec;
  function l(h) {
    if (h === 0)
      Ou(c), i();
    else {
      var g = Au(function() {
        l(h - 1);
      });
      Si.set(c, g);
    }
  }
  return l(o), c;
};
Yo.cancel = function(s) {
  var i = Si.get(s);
  return Ou(s), Tu(i);
};
process.env.NODE_ENV !== "production" && (Yo.ids = function() {
  return Si;
});
function Ru(s) {
  if (Array.isArray(s)) return s;
}
function ap(s, i) {
  var o = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
  if (o != null) {
    var c, l, h, g, v = [], b = !0, S = !1;
    try {
      if (h = (o = o.call(s)).next, i === 0) {
        if (Object(o) !== o) return;
        b = !1;
      } else for (; !(b = (c = h.call(o)).done) && (v.push(c.value), v.length !== i); b = !0) ;
    } catch (C) {
      S = !0, l = C;
    } finally {
      try {
        if (!b && o.return != null && (g = o.return(), Object(g) !== g)) return;
      } finally {
        if (S) throw l;
      }
    }
    return v;
  }
}
function ku() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(s, i) {
  return Ru(s) || ap(s, i) || Ta(s, i) || ku();
}
function Vr(s) {
  for (var i = 0, o, c = 0, l = s.length; l >= 4; ++c, l -= 4)
    o = s.charCodeAt(c) & 255 | (s.charCodeAt(++c) & 255) << 8 | (s.charCodeAt(++c) & 255) << 16 | (s.charCodeAt(++c) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, i = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      i ^= (s.charCodeAt(c + 2) & 255) << 16;
    case 2:
      i ^= (s.charCodeAt(c + 1) & 255) << 8;
    case 1:
      i ^= s.charCodeAt(c) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
function bn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function cp(s, i) {
  if (!s)
    return !1;
  if (s.contains)
    return s.contains(i);
  for (var o = i; o; ) {
    if (o === s)
      return !0;
    o = o.parentNode;
  }
  return !1;
}
var Cc = "data-rc-order", Ac = "data-rc-priority", lp = "rc-util-key", Cs = /* @__PURE__ */ new Map();
function Pu() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = s.mark;
  return i ? i.startsWith("data-") ? i : "data-".concat(i) : lp;
}
function wi(s) {
  if (s.attachTo)
    return s.attachTo;
  var i = document.querySelector("head");
  return i || document.body;
}
function up(s) {
  return s === "queue" ? "prependQueue" : s ? "prepend" : "append";
}
function Oa(s) {
  return Array.from((Cs.get(s) || s).children).filter(function(i) {
    return i.tagName === "STYLE";
  });
}
function Iu(s) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!bn())
    return null;
  var o = i.csp, c = i.prepend, l = i.priority, h = l === void 0 ? 0 : l, g = up(c), v = g === "prependQueue", b = document.createElement("style");
  b.setAttribute(Cc, g), v && h && b.setAttribute(Ac, "".concat(h)), o != null && o.nonce && (b.nonce = o == null ? void 0 : o.nonce), b.innerHTML = s;
  var S = wi(i), C = S.firstChild;
  if (c) {
    if (v) {
      var P = (i.styles || Oa(S)).filter(function(w) {
        if (!["prepend", "prependQueue"].includes(w.getAttribute(Cc)))
          return !1;
        var U = Number(w.getAttribute(Ac) || 0);
        return h >= U;
      });
      if (P.length)
        return S.insertBefore(b, P[P.length - 1].nextSibling), b;
    }
    S.insertBefore(b, C);
  } else
    S.appendChild(b);
  return b;
}
function _u(s) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = wi(i);
  return (i.styles || Oa(o)).find(function(c) {
    return c.getAttribute(Pu(i)) === s;
  });
}
function Nu(s) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = _u(s, i);
  if (o) {
    var c = wi(i);
    c.removeChild(o);
  }
}
function fp(s, i) {
  var o = Cs.get(s);
  if (!o || !cp(document, o)) {
    var c = Iu("", i), l = c.parentNode;
    Cs.set(s, l), s.removeChild(c);
  }
}
function $n(s, i) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = wi(o), l = Oa(c), h = xe(xe({}, o), {}, {
    styles: l
  });
  fp(c, h);
  var g = _u(i, h);
  if (g) {
    var v, b;
    if ((v = h.csp) !== null && v !== void 0 && v.nonce && g.nonce !== ((b = h.csp) === null || b === void 0 ? void 0 : b.nonce)) {
      var S;
      g.nonce = (S = h.csp) === null || S === void 0 ? void 0 : S.nonce;
    }
    return g.innerHTML !== s && (g.innerHTML = s), g;
  }
  var C = Iu(s, h);
  return C.setAttribute(Pu(h), i), C;
}
function dp(s, i) {
  if (s == null) return {};
  var o = {};
  for (var c in s) if ({}.hasOwnProperty.call(s, c)) {
    if (i.indexOf(c) !== -1) continue;
    o[c] = s[c];
  }
  return o;
}
function Hr(s, i) {
  if (s == null) return {};
  var o, c, l = dp(s, i);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(s);
    for (c = 0; c < h.length; c++) o = h[c], i.indexOf(o) === -1 && {}.propertyIsEnumerable.call(s, o) && (l[o] = s[o]);
  }
  return l;
}
function hp(s, i) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, c = /* @__PURE__ */ new Set();
  function l(h, g) {
    var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = c.has(h);
    if (kn(!b, "Warning: There may be circular references"), b)
      return !1;
    if (h === g)
      return !0;
    if (o && v > 1)
      return !1;
    c.add(h);
    var S = v + 1;
    if (Array.isArray(h)) {
      if (!Array.isArray(g) || h.length !== g.length)
        return !1;
      for (var C = 0; C < h.length; C++)
        if (!l(h[C], g[C], S))
          return !1;
      return !0;
    }
    if (h && g && $e(h) === "object" && $e(g) === "object") {
      var P = Object.keys(h);
      return P.length !== Object.keys(g).length ? !1 : P.every(function(w) {
        return l(h[w], g[w], S);
      });
    }
    return !1;
  }
  return l(s, i);
}
var pp = "%";
function As(s) {
  return s.join(pp);
}
var xp = /* @__PURE__ */ function() {
  function s(i) {
    Jt(this, s), ve(this, "instanceId", void 0), ve(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = i;
  }
  return Qt(s, [{
    key: "get",
    value: function(o) {
      return this.opGet(As(o));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(o) {
      return this.cache.get(o) || null;
    }
  }, {
    key: "update",
    value: function(o, c) {
      return this.opUpdate(As(o), c);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(o, c) {
      var l = this.cache.get(o), h = c(l);
      h === null ? this.cache.delete(o) : this.cache.set(o, h);
    }
  }]), s;
}(), dr = "data-token-hash", Kt = "data-css-hash", mp = "data-cache-path", Cn = "__cssinjs_instance__";
function gp() {
  var s = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var i = document.body.querySelectorAll("style[".concat(Kt, "]")) || [], o = document.head.firstChild;
    Array.from(i).forEach(function(l) {
      l[Cn] = l[Cn] || s, l[Cn] === s && document.head.insertBefore(l, o);
    });
    var c = {};
    Array.from(document.querySelectorAll("style[".concat(Kt, "]"))).forEach(function(l) {
      var h = l.getAttribute(Kt);
      if (c[h]) {
        if (l[Cn] === s) {
          var g;
          (g = l.parentNode) === null || g === void 0 || g.removeChild(l);
        }
      } else
        c[h] = !0;
    });
  }
  return new xp(s);
}
var Jr = /* @__PURE__ */ Z.createContext({
  hashPriority: "low",
  cache: gp(),
  defaultCache: !0
});
function vp(s, i) {
  if (s.length !== i.length)
    return !1;
  for (var o = 0; o < s.length; o++)
    if (s[o] !== i[o])
      return !1;
  return !0;
}
var Ra = /* @__PURE__ */ function() {
  function s() {
    Jt(this, s), ve(this, "cache", void 0), ve(this, "keys", void 0), ve(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Qt(s, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(o) {
      var c, l, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = {
        map: this.cache
      };
      return o.forEach(function(v) {
        if (!g)
          g = void 0;
        else {
          var b;
          g = (b = g) === null || b === void 0 || (b = b.map) === null || b === void 0 ? void 0 : b.get(v);
        }
      }), (c = g) !== null && c !== void 0 && c.value && h && (g.value[1] = this.cacheCallTimes++), (l = g) === null || l === void 0 ? void 0 : l.value;
    }
  }, {
    key: "get",
    value: function(o) {
      var c;
      return (c = this.internalGet(o, !0)) === null || c === void 0 ? void 0 : c[0];
    }
  }, {
    key: "has",
    value: function(o) {
      return !!this.internalGet(o);
    }
  }, {
    key: "set",
    value: function(o, c) {
      var l = this;
      if (!this.has(o)) {
        if (this.size() + 1 > s.MAX_CACHE_SIZE + s.MAX_CACHE_OFFSET) {
          var h = this.keys.reduce(function(S, C) {
            var P = Me(S, 2), w = P[1];
            return l.internalGet(C)[1] < w ? [C, l.internalGet(C)[1]] : S;
          }, [this.keys[0], this.cacheCallTimes]), g = Me(h, 1), v = g[0];
          this.delete(v);
        }
        this.keys.push(o);
      }
      var b = this.cache;
      o.forEach(function(S, C) {
        if (C === o.length - 1)
          b.set(S, {
            value: [c, l.cacheCallTimes++]
          });
        else {
          var P = b.get(S);
          P ? P.map || (P.map = /* @__PURE__ */ new Map()) : b.set(S, {
            map: /* @__PURE__ */ new Map()
          }), b = b.get(S).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(o, c) {
      var l = o.get(c[0]);
      if (c.length === 1) {
        var h;
        return l.map ? o.set(c[0], {
          map: l.map
        }) : o.delete(c[0]), (h = l.value) === null || h === void 0 ? void 0 : h[0];
      }
      var g = this.deleteByPath(l.map, c.slice(1));
      return (!l.map || l.map.size === 0) && !l.value && o.delete(c[0]), g;
    }
  }, {
    key: "delete",
    value: function(o) {
      if (this.has(o))
        return this.keys = this.keys.filter(function(c) {
          return !vp(c, o);
        }), this.deleteByPath(this.cache, o);
    }
  }]), s;
}();
ve(Ra, "MAX_CACHE_SIZE", 20);
ve(Ra, "MAX_CACHE_OFFSET", 5);
var Tc = 0, Du = /* @__PURE__ */ function() {
  function s(i) {
    Jt(this, s), ve(this, "derivatives", void 0), ve(this, "id", void 0), this.derivatives = Array.isArray(i) ? i : [i], this.id = Tc, i.length === 0 && Ca(i.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Tc += 1;
  }
  return Qt(s, [{
    key: "getDerivativeToken",
    value: function(o) {
      return this.derivatives.reduce(function(c, l) {
        return l(o, c);
      }, void 0);
    }
  }]), s;
}(), Yi = new Ra();
function Ts(s) {
  var i = Array.isArray(s) ? s : [s];
  return Yi.has(i) || Yi.set(i, new Du(i)), Yi.get(i);
}
var yp = /* @__PURE__ */ new WeakMap(), Xi = {};
function bp(s, i) {
  for (var o = yp, c = 0; c < i.length; c += 1) {
    var l = i[c];
    o.has(l) || o.set(l, /* @__PURE__ */ new WeakMap()), o = o.get(l);
  }
  return o.has(Xi) || o.set(Xi, s()), o.get(Xi);
}
var Oc = /* @__PURE__ */ new WeakMap();
function Br(s) {
  var i = Oc.get(s) || "";
  return i || (Object.keys(s).forEach(function(o) {
    var c = s[o];
    i += o, c instanceof Du ? i += c.id : c && $e(c) === "object" ? i += Br(c) : i += c;
  }), i = Vr(i), Oc.set(s, i)), i;
}
function Rc(s, i) {
  return Vr("".concat(i, "_").concat(Br(s)));
}
var Os = bn();
function Xo(s) {
  return typeof s == "number" ? "".concat(s, "px") : s;
}
function Ko(s, i, o) {
  var c, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (h)
    return s;
  var g = xe(xe({}, l), {}, (c = {}, ve(c, dr, i), ve(c, Kt, o), c)), v = Object.keys(g).map(function(b) {
    var S = g[b];
    return S ? "".concat(b, '="').concat(S, '"') : null;
  }).filter(function(b) {
    return b;
  }).join(" ");
  return "<style ".concat(v, ">").concat(s, "</style>");
}
var Io = function(i) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(o ? "".concat(o, "-") : "").concat(i).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Sp = function(i, o, c) {
  return Object.keys(i).length ? ".".concat(o).concat(c != null && c.scope ? ".".concat(c.scope) : "", "{").concat(Object.entries(i).map(function(l) {
    var h = Me(l, 2), g = h[0], v = h[1];
    return "".concat(g, ":").concat(v, ";");
  }).join(""), "}") : "";
}, ju = function(i, o, c) {
  var l = {}, h = {};
  return Object.entries(i).forEach(function(g) {
    var v, b, S = Me(g, 2), C = S[0], P = S[1];
    if (c != null && (v = c.preserve) !== null && v !== void 0 && v[C])
      h[C] = P;
    else if ((typeof P == "string" || typeof P == "number") && !(c != null && (b = c.ignore) !== null && b !== void 0 && b[C])) {
      var w, U = Io(C, c == null ? void 0 : c.prefix);
      l[U] = typeof P == "number" && !(c != null && (w = c.unitless) !== null && w !== void 0 && w[C]) ? "".concat(P, "px") : String(P), h[C] = "var(".concat(U, ")");
    }
  }), [h, Sp(l, o, {
    scope: c == null ? void 0 : c.scope
  })];
}, kc = process.env.NODE_ENV !== "test" && bn() ? Z.useLayoutEffect : Z.useEffect, Lu = function(i, o) {
  var c = Z.useRef(!0);
  kc(function() {
    return i(c.current);
  }, o), kc(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
}, wp = xe({}, Z), Pc = wp.useInsertionEffect, Ep = function(i, o, c) {
  Z.useMemo(i, c), Lu(function() {
    return o(!0);
  }, c);
}, Cp = Pc ? function(s, i, o) {
  return Pc(function() {
    return s(), i();
  }, o);
} : Ep, Ap = xe({}, Z), Tp = Ap.useInsertionEffect, Op = function(i) {
  var o = [], c = !1;
  function l(h) {
    if (c) {
      process.env.NODE_ENV !== "production" && Ca(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    o.push(h);
  }
  return Z.useEffect(function() {
    return c = !1, function() {
      c = !0, o.length && o.forEach(function(h) {
        return h();
      });
    };
  }, i), l;
}, Rp = function() {
  return function(i) {
    i();
  };
}, kp = typeof Tp < "u" ? Op : Rp;
function Pp() {
  return !1;
}
var Rs = !1;
function Ip() {
  return Rs;
}
const _p = process.env.NODE_ENV === "production" ? Pp : Ip;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (fo && typeof fo.webpackHotUpdate == "function") {
    var Np = fo.webpackHotUpdate;
    fo.webpackHotUpdate = function() {
      return Rs = !0, setTimeout(function() {
        Rs = !1;
      }, 0), Np.apply(void 0, arguments);
    };
  }
}
function ka(s, i, o, c, l) {
  var h = Z.useContext(Jr), g = h.cache, v = [s].concat(yn(i)), b = As(v), S = kp([b]), C = _p(), P = function(D) {
    g.opUpdate(b, function(L) {
      var K = L || [void 0, void 0], $ = Me(K, 2), _ = $[0], J = _ === void 0 ? 0 : _, q = $[1], te = q;
      process.env.NODE_ENV !== "production" && q && C && (c == null || c(te, C), te = null);
      var Q = te || o(), ae = [J, Q];
      return D ? D(ae) : ae;
    });
  };
  Z.useMemo(
    function() {
      P();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [b]
    /* eslint-enable */
  );
  var w = g.opGet(b);
  process.env.NODE_ENV !== "production" && !w && (P(), w = g.opGet(b));
  var U = w[1];
  return Cp(function() {
    l == null || l(U);
  }, function(V) {
    return P(function(D) {
      var L = Me(D, 2), K = L[0], $ = L[1];
      return V && K === 0 && (l == null || l(U)), [K + 1, $];
    }), function() {
      g.opUpdate(b, function(D) {
        var L = D || [], K = Me(L, 2), $ = K[0], _ = $ === void 0 ? 0 : $, J = K[1], q = _ - 1;
        return q === 0 ? (S(function() {
          (V || !g.opGet(b)) && (c == null || c(J, !1));
        }), null) : [_ - 1, J];
      });
    };
  }, [b]), U;
}
var Dp = {}, jp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Fn = /* @__PURE__ */ new Map();
function Lp(s) {
  Fn.set(s, (Fn.get(s) || 0) + 1);
}
function Mp(s, i) {
  if (typeof document < "u") {
    var o = document.querySelectorAll("style[".concat(dr, '="').concat(s, '"]'));
    o.forEach(function(c) {
      if (c[Cn] === i) {
        var l;
        (l = c.parentNode) === null || l === void 0 || l.removeChild(c);
      }
    });
  }
}
var Bp = 0;
function Fp(s, i) {
  Fn.set(s, (Fn.get(s) || 0) - 1);
  var o = Array.from(Fn.keys()), c = o.filter(function(l) {
    var h = Fn.get(l) || 0;
    return h <= 0;
  });
  o.length - c.length > Bp && c.forEach(function(l) {
    Mp(l, i), Fn.delete(l);
  });
}
var zp = function(i, o, c, l) {
  var h = c.getDerivativeToken(i), g = xe(xe({}, h), o);
  return l && (g = l(g)), g;
}, Mu = "token";
function Vp(s, i) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = On(Jr), l = c.cache.instanceId, h = c.container, g = o.salt, v = g === void 0 ? "" : g, b = o.override, S = b === void 0 ? Dp : b, C = o.formatToken, P = o.getComputedToken, w = o.cssVar, U = bp(function() {
    return Object.assign.apply(Object, [{}].concat(yn(i)));
  }, i), V = Br(U), D = Br(S), L = w ? Br(w) : "", K = ka(Mu, [v, s.id, V, D, L], function() {
    var $, _ = P ? P(U, S, s) : zp(U, S, s, C), J = xe({}, _), q = "";
    if (w) {
      var te = ju(_, w.key, {
        prefix: w.prefix,
        ignore: w.ignore,
        unitless: w.unitless,
        preserve: w.preserve
      }), Q = Me(te, 2);
      _ = Q[0], q = Q[1];
    }
    var ae = Rc(_, v);
    _._tokenKey = ae, J._tokenKey = Rc(J, v);
    var fe = ($ = w == null ? void 0 : w.key) !== null && $ !== void 0 ? $ : ae;
    _._themeKey = fe, Lp(fe);
    var Se = "".concat(jp, "-").concat(Vr(ae));
    return _._hashId = Se, [_, Se, J, q, (w == null ? void 0 : w.key) || ""];
  }, function($) {
    Fp($[0]._themeKey, l);
  }, function($) {
    var _ = Me($, 4), J = _[0], q = _[3];
    if (w && q) {
      var te = $n(q, Vr("css-variables-".concat(J._themeKey)), {
        mark: Kt,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      te[Cn] = l, te.setAttribute(dr, J._themeKey);
    }
  });
  return K;
}
var Hp = function(i, o, c) {
  var l = Me(i, 5), h = l[2], g = l[3], v = l[4], b = c || {}, S = b.plain;
  if (!g)
    return null;
  var C = h._tokenKey, P = -999, w = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(P)
  }, U = Ko(g, v, C, w, S);
  return [P, C, U];
}, Up = {
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
}, Bu = "comm", Fu = "rule", zu = "decl", Wp = "@import", qp = "@namespace", $p = "@keyframes", Yp = "@layer", Vu = Math.abs, Pa = String.fromCharCode;
function Hu(s) {
  return s.trim();
}
function _o(s, i, o) {
  return s.replace(i, o);
}
function Xp(s, i, o) {
  return s.indexOf(i, o);
}
function or(s, i) {
  return s.charCodeAt(i) | 0;
}
function hr(s, i, o) {
  return s.slice(i, o);
}
function an(s) {
  return s.length;
}
function Kp(s) {
  return s.length;
}
function ho(s, i) {
  return i.push(s), s;
}
var Ei = 1, pr = 1, Uu = 0, Wt = 0, ht = 0, br = "";
function Ia(s, i, o, c, l, h, g, v) {
  return { value: s, root: i, parent: o, type: c, props: l, children: h, line: Ei, column: pr, length: g, return: "", siblings: v };
}
function Gp() {
  return ht;
}
function Zp() {
  return ht = Wt > 0 ? or(br, --Wt) : 0, pr--, ht === 10 && (pr = 1, Ei--), ht;
}
function Gt() {
  return ht = Wt < Uu ? or(br, Wt++) : 0, pr++, ht === 10 && (pr = 1, Ei++), ht;
}
function An() {
  return or(br, Wt);
}
function No() {
  return Wt;
}
function Ci(s, i) {
  return hr(br, s, i);
}
function Ur(s) {
  switch (s) {
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
function Jp(s) {
  return Ei = pr = 1, Uu = an(br = s), Wt = 0, [];
}
function Qp(s) {
  return br = "", s;
}
function Ki(s) {
  return Hu(Ci(Wt - 1, ks(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function ex(s) {
  for (; (ht = An()) && ht < 33; )
    Gt();
  return Ur(s) > 2 || Ur(ht) > 3 ? "" : " ";
}
function tx(s, i) {
  for (; --i && Gt() && !(ht < 48 || ht > 102 || ht > 57 && ht < 65 || ht > 70 && ht < 97); )
    ;
  return Ci(s, No() + (i < 6 && An() == 32 && Gt() == 32));
}
function ks(s) {
  for (; Gt(); )
    switch (ht) {
      // ] ) " '
      case s:
        return Wt;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && ks(ht);
        break;
      // (
      case 40:
        s === 41 && ks(s);
        break;
      // \
      case 92:
        Gt();
        break;
    }
  return Wt;
}
function nx(s, i) {
  for (; Gt() && s + ht !== 57; )
    if (s + ht === 84 && An() === 47)
      break;
  return "/*" + Ci(i, Wt - 1) + "*" + Pa(s === 47 ? s : Gt());
}
function rx(s) {
  for (; !Ur(An()); )
    Gt();
  return Ci(s, Wt);
}
function ox(s) {
  return Qp(Do("", null, null, null, [""], s = Jp(s), 0, [0], s));
}
function Do(s, i, o, c, l, h, g, v, b) {
  for (var S = 0, C = 0, P = g, w = 0, U = 0, V = 0, D = 1, L = 1, K = 1, $ = 0, _ = "", J = l, q = h, te = c, Q = _; L; )
    switch (V = $, $ = Gt()) {
      // (
      case 40:
        if (V != 108 && or(Q, P - 1) == 58) {
          Xp(Q += _o(Ki($), "&", "&\f"), "&\f", Vu(S ? v[S - 1] : 0)) != -1 && (K = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        Q += Ki($);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        Q += ex(V);
        break;
      // \
      case 92:
        Q += tx(No() - 1, 7);
        continue;
      // /
      case 47:
        switch (An()) {
          case 42:
          case 47:
            ho(ix(nx(Gt(), No()), i, o, b), b), (Ur(V || 1) == 5 || Ur(An() || 1) == 5) && an(Q) && hr(Q, -1, void 0) !== " " && (Q += " ");
            break;
          default:
            Q += "/";
        }
        break;
      // {
      case 123 * D:
        v[S++] = an(Q) * K;
      // } ; \0
      case 125 * D:
      case 59:
      case 0:
        switch ($) {
          // \0 }
          case 0:
          case 125:
            L = 0;
          // ;
          case 59 + C:
            K == -1 && (Q = _o(Q, /\f/g, "")), U > 0 && (an(Q) - P || D === 0 && V === 47) && ho(U > 32 ? _c(Q + ";", c, o, P - 1, b) : _c(_o(Q, " ", "") + ";", c, o, P - 2, b), b);
            break;
          // @ ;
          case 59:
            Q += ";";
          // { rule/at-rule
          default:
            if (ho(te = Ic(Q, i, o, S, C, l, v, _, J = [], q = [], P, h), h), $ === 123)
              if (C === 0)
                Do(Q, i, te, te, J, h, P, v, q);
              else {
                switch (w) {
                  // c(ontainer)
                  case 99:
                    if (or(Q, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (or(Q, 2) === 97) break;
                  default:
                    C = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                C ? Do(s, te, te, c && ho(Ic(s, te, te, 0, 0, l, v, _, l, J = [], P, q), q), l, q, P, v, c ? J : q) : Do(Q, te, te, te, [""], q, 0, v, q);
              }
        }
        S = C = U = 0, D = K = 1, _ = Q = "", P = g;
        break;
      // :
      case 58:
        P = 1 + an(Q), U = V;
      default:
        if (D < 1) {
          if ($ == 123)
            --D;
          else if ($ == 125 && D++ == 0 && Zp() == 125)
            continue;
        }
        switch (Q += Pa($), $ * D) {
          // &
          case 38:
            K = C > 0 ? 1 : (Q += "\f", -1);
            break;
          // ,
          case 44:
            v[S++] = (an(Q) - 1) * K, K = 1;
            break;
          // @
          case 64:
            An() === 45 && (Q += Ki(Gt())), w = An(), C = P = an(_ = Q += rx(No())), $++;
            break;
          // -
          case 45:
            V === 45 && an(Q) == 2 && (D = 0);
        }
    }
  return h;
}
function Ic(s, i, o, c, l, h, g, v, b, S, C, P) {
  for (var w = l - 1, U = l === 0 ? h : [""], V = Kp(U), D = 0, L = 0, K = 0; D < c; ++D)
    for (var $ = 0, _ = hr(s, w + 1, w = Vu(L = g[D])), J = s; $ < V; ++$)
      (J = Hu(L > 0 ? U[$] + " " + _ : _o(_, /&\f/g, U[$]))) && (b[K++] = J);
  return Ia(s, i, o, l === 0 ? Fu : v, b, S, C, P);
}
function ix(s, i, o, c) {
  return Ia(s, i, o, Bu, Pa(Gp()), hr(s, 2, -2), 0, c);
}
function _c(s, i, o, c, l) {
  return Ia(s, i, o, zu, hr(s, 0, c), hr(s, c + 1, -1), c, l);
}
function Ps(s, i) {
  for (var o = "", c = 0; c < s.length; c++)
    o += i(s[c], c, s, i) || "";
  return o;
}
function sx(s, i, o, c) {
  switch (s.type) {
    case Yp:
      if (s.children.length) break;
    case Wp:
    case qp:
    case zu:
      return s.return = s.return || s.value;
    case Bu:
      return "";
    case $p:
      return s.return = s.value + "{" + Ps(s.children, c) + "}";
    case Fu:
      if (!an(s.value = s.props.join(","))) return "";
  }
  return an(o = Ps(s.children, c)) ? s.return = s.value + "{" + o + "}" : "";
}
function Wu(s, i) {
  var o = i.path, c = i.parentSelectors;
  kn(!1, "[Ant Design CSS-in-JS] ".concat(o ? "Error in ".concat(o, ": ") : "").concat(s).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
var ax = function(i, o, c) {
  if (i === "content") {
    var l = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, h = ["normal", "none", "initial", "inherit", "unset"];
    (typeof o != "string" || h.indexOf(o) === -1 && !l.test(o) && (o.charAt(0) !== o.charAt(o.length - 1) || o.charAt(0) !== '"' && o.charAt(0) !== "'")) && Wu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(o, "\"'`."), c);
  }
}, cx = function(i, o, c) {
  i === "animation" && c.hashId && o !== "none" && Wu("You seem to be using hashed animation '".concat(o, "', in which case 'animationName' with Keyframe as value is recommended."), c);
}, Nc = "data-ant-cssinjs-cache-path", qu = "_FILE_STYLE__", Yn, $u = !0;
function lx() {
  if (!Yn && (Yn = {}, bn())) {
    var s = document.createElement("div");
    s.className = Nc, s.style.position = "fixed", s.style.visibility = "hidden", s.style.top = "-9999px", document.body.appendChild(s);
    var i = getComputedStyle(s).content || "";
    i = i.replace(/^"/, "").replace(/"$/, ""), i.split(";").forEach(function(l) {
      var h = l.split(":"), g = Me(h, 2), v = g[0], b = g[1];
      Yn[v] = b;
    });
    var o = document.querySelector("style[".concat(Nc, "]"));
    if (o) {
      var c;
      $u = !1, (c = o.parentNode) === null || c === void 0 || c.removeChild(o);
    }
    document.body.removeChild(s);
  }
}
function ux(s) {
  return lx(), !!Yn[s];
}
function fx(s) {
  var i = Yn[s], o = null;
  if (i && bn())
    if ($u)
      o = qu;
    else {
      var c = document.querySelector("style[".concat(Kt, '="').concat(Yn[s], '"]'));
      c ? o = c.innerHTML : delete Yn[s];
    }
  return [o, i];
}
var Yu = "_skip_check_", Xu = "_multi_value_";
function jo(s) {
  var i = Ps(ox(s), sx);
  return i.replace(/\{%%%\:[^;];}/g, ";");
}
function dx(s) {
  return $e(s) === "object" && s && (Yu in s || Xu in s);
}
function Dc(s, i, o) {
  if (!i)
    return s;
  var c = ".".concat(i), l = o === "low" ? ":where(".concat(c, ")") : c, h = s.split(",").map(function(g) {
    var v, b = g.trim().split(/\s+/), S = b[0] || "", C = ((v = S.match(/^\w+/)) === null || v === void 0 ? void 0 : v[0]) || "";
    return S = "".concat(C).concat(l).concat(S.slice(C.length)), [S].concat(yn(b.slice(1))).join(" ");
  });
  return h.join(",");
}
var hx = function s(i) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, l = c.root, h = c.injectHash, g = c.parentSelectors, v = o.hashId, b = o.layer, S = o.path, C = o.hashPriority, P = o.transformers, w = P === void 0 ? [] : P, U = o.linters, V = U === void 0 ? [] : U, D = "", L = {};
  function K(J) {
    var q = J.getName(v);
    if (!L[q]) {
      var te = s(J.style, o, {
        root: !1,
        parentSelectors: g
      }), Q = Me(te, 1), ae = Q[0];
      L[q] = "@keyframes ".concat(J.getName(v)).concat(ae);
    }
  }
  function $(J) {
    var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return J.forEach(function(te) {
      Array.isArray(te) ? $(te, q) : te && q.push(te);
    }), q;
  }
  var _ = $(Array.isArray(i) ? i : [i]);
  return _.forEach(function(J) {
    var q = typeof J == "string" && !l ? {} : J;
    if (typeof q == "string")
      D += "".concat(q, `
`);
    else if (q._keyframe)
      K(q);
    else {
      var te = w.reduce(function(Q, ae) {
        var fe;
        return (ae == null || (fe = ae.visit) === null || fe === void 0 ? void 0 : fe.call(ae, Q)) || Q;
      }, q);
      Object.keys(te).forEach(function(Q) {
        var ae = te[Q];
        if ($e(ae) === "object" && ae && (Q !== "animationName" || !ae._keyframe) && !dx(ae)) {
          var fe = !1, Se = Q.trim(), De = !1;
          (l || h) && v ? Se.startsWith("@") ? fe = !0 : Se === "&" ? Se = Dc("", v, C) : Se = Dc(Q, v, C) : l && !v && (Se === "&" || Se === "") && (Se = "", De = !0);
          var Ee = s(ae, o, {
            root: De,
            injectHash: fe,
            parentSelectors: [].concat(yn(g), [Se])
          }), de = Me(Ee, 2), ye = de[0], me = de[1];
          L = xe(xe({}, L), me), D += "".concat(Se).concat(ye);
        } else {
          let Re = function(Te, Pe) {
            process.env.NODE_ENV !== "production" && ($e(ae) !== "object" || !(ae != null && ae[Yu])) && [ax, cx].concat(yn(V)).forEach(function(be) {
              return be(Te, Pe, {
                path: S,
                hashId: v,
                parentSelectors: g
              });
            });
            var Ce = Te.replace(/[A-Z]/g, function(be) {
              return "-".concat(be.toLowerCase());
            }), pe = Pe;
            !Up[Te] && typeof pe == "number" && pe !== 0 && (pe = "".concat(pe, "px")), Te === "animationName" && Pe !== null && Pe !== void 0 && Pe._keyframe && (K(Pe), pe = Pe.getName(v)), D += "".concat(Ce, ":").concat(pe, ";");
          };
          var Ie, Ae = (Ie = ae == null ? void 0 : ae.value) !== null && Ie !== void 0 ? Ie : ae;
          $e(ae) === "object" && ae !== null && ae !== void 0 && ae[Xu] && Array.isArray(Ae) ? Ae.forEach(function(Te) {
            Re(Q, Te);
          }) : Re(Q, Ae);
        }
      });
    }
  }), l ? b && (D && (D = "@layer ".concat(b.name, " {").concat(D, "}")), b.dependencies && (L["@layer ".concat(b.name)] = b.dependencies.map(function(J) {
    return "@layer ".concat(J, ", ").concat(b.name, ";");
  }).join(`
`))) : D = "{".concat(D, "}"), [D, L];
};
function Ku(s, i) {
  return Vr("".concat(s.join("%")).concat(i));
}
function px() {
  return null;
}
var Gu = "style";
function Is(s, i) {
  var o = s.token, c = s.path, l = s.hashId, h = s.layer, g = s.nonce, v = s.clientOnly, b = s.order, S = b === void 0 ? 0 : b, C = Z.useContext(Jr), P = C.autoClear, w = C.mock, U = C.defaultCache, V = C.hashPriority, D = C.container, L = C.ssrInline, K = C.transformers, $ = C.linters, _ = C.cache, J = C.layer, q = o._tokenKey, te = [q];
  J && te.push("layer"), te.push.apply(te, yn(c));
  var Q = Os;
  process.env.NODE_ENV !== "production" && w !== void 0 && (Q = w === "client");
  var ae = ka(
    Gu,
    te,
    // Create cache if needed
    function() {
      var de = te.join("|");
      if (ux(de)) {
        var ye = fx(de), me = Me(ye, 2), Ie = me[0], Ae = me[1];
        if (Ie)
          return [Ie, q, Ae, {}, v, S];
      }
      var Re = i(), Te = hx(Re, {
        hashId: l,
        hashPriority: V,
        layer: J ? h : void 0,
        path: c.join("-"),
        transformers: K,
        linters: $
      }), Pe = Me(Te, 2), Ce = Pe[0], pe = Pe[1], be = jo(Ce), Oe = Ku(te, be);
      return [be, q, Oe, pe, v, S];
    },
    // Remove cache if no need
    function(de, ye) {
      var me = Me(de, 3), Ie = me[2];
      (ye || P) && Os && Nu(Ie, {
        mark: Kt
      });
    },
    // Effect: Inject style here
    function(de) {
      var ye = Me(de, 4), me = ye[0];
      ye[1];
      var Ie = ye[2], Ae = ye[3];
      if (Q && me !== qu) {
        var Re = {
          mark: Kt,
          prepend: J ? !1 : "queue",
          attachTo: D,
          priority: S
        }, Te = typeof g == "function" ? g() : g;
        Te && (Re.csp = {
          nonce: Te
        });
        var Pe = [], Ce = [];
        Object.keys(Ae).forEach(function(be) {
          be.startsWith("@layer") ? Pe.push(be) : Ce.push(be);
        }), Pe.forEach(function(be) {
          $n(jo(Ae[be]), "_layer-".concat(be), xe(xe({}, Re), {}, {
            prepend: !0
          }));
        });
        var pe = $n(me, Ie, Re);
        pe[Cn] = _.instanceId, pe.setAttribute(dr, q), process.env.NODE_ENV !== "production" && pe.setAttribute(mp, te.join("|")), Ce.forEach(function(be) {
          $n(jo(Ae[be]), "_effect-".concat(be), Re);
        });
      }
    }
  ), fe = Me(ae, 3), Se = fe[0], De = fe[1], Ee = fe[2];
  return function(de) {
    var ye;
    if (!L || Q || !U)
      ye = /* @__PURE__ */ Z.createElement(px, null);
    else {
      var me;
      ye = /* @__PURE__ */ Z.createElement("style", fn({}, (me = {}, ve(me, dr, De), ve(me, Kt, Ee), me), {
        dangerouslySetInnerHTML: {
          __html: Se
        }
      }));
    }
    return /* @__PURE__ */ Z.createElement(Z.Fragment, null, ye, de);
  };
}
var xx = function(i, o, c) {
  var l = Me(i, 6), h = l[0], g = l[1], v = l[2], b = l[3], S = l[4], C = l[5], P = c || {}, w = P.plain;
  if (S)
    return null;
  var U = h, V = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(C)
  };
  return U = Ko(h, g, v, V, w), b && Object.keys(b).forEach(function(D) {
    if (!o[D]) {
      o[D] = !0;
      var L = jo(b[D]), K = Ko(L, g, "_effect-".concat(D), V, w);
      D.startsWith("@layer") ? U = K + U : U += K;
    }
  }), [C, v, U];
}, Zu = "cssVar", mx = function(i, o) {
  var c = i.key, l = i.prefix, h = i.unitless, g = i.ignore, v = i.token, b = i.scope, S = b === void 0 ? "" : b, C = On(Jr), P = C.cache.instanceId, w = C.container, U = v._tokenKey, V = [].concat(yn(i.path), [c, S, U]), D = ka(Zu, V, function() {
    var L = o(), K = ju(L, c, {
      prefix: l,
      unitless: h,
      ignore: g,
      scope: S
    }), $ = Me(K, 2), _ = $[0], J = $[1], q = Ku(V, J);
    return [_, J, q, c];
  }, function(L) {
    var K = Me(L, 3), $ = K[2];
    Os && Nu($, {
      mark: Kt
    });
  }, function(L) {
    var K = Me(L, 3), $ = K[1], _ = K[2];
    if ($) {
      var J = $n($, _, {
        mark: Kt,
        prepend: "queue",
        attachTo: w,
        priority: -999
      });
      J[Cn] = P, J.setAttribute(dr, c);
    }
  });
  return D;
}, gx = function(i, o, c) {
  var l = Me(i, 4), h = l[1], g = l[2], v = l[3], b = c || {}, S = b.plain;
  if (!h)
    return null;
  var C = -999, P = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(C)
  }, w = Ko(h, v, g, P, S);
  return [C, g, w];
}, Pr;
Pr = {}, ve(Pr, Gu, xx), ve(Pr, Mu, Hp), ve(Pr, Zu, gx);
var Ju = /* @__PURE__ */ function() {
  function s(i, o) {
    Jt(this, s), ve(this, "name", void 0), ve(this, "style", void 0), ve(this, "_keyframe", !0), this.name = i, this.style = o;
  }
  return Qt(s, [{
    key: "getName",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return o ? "".concat(o, "-").concat(this.name) : this.name;
    }
  }]), s;
}();
function er(s) {
  return s.notSplit = !0, s;
}
er(["borderTop", "borderBottom"]), er(["borderTop"]), er(["borderBottom"]), er(["borderLeft", "borderRight"]), er(["borderLeft"]), er(["borderRight"]);
var _a = /* @__PURE__ */ da({});
function vx(s) {
  return Ru(s) || Cu(s) || Ta(s) || ku();
}
function _s(s, i) {
  for (var o = s, c = 0; c < i.length; c += 1) {
    if (o == null)
      return;
    o = o[i[c]];
  }
  return o;
}
function Qu(s, i, o, c) {
  if (!i.length)
    return o;
  var l = vx(i), h = l[0], g = l.slice(1), v;
  return !s && typeof h == "number" ? v = [] : Array.isArray(s) ? v = yn(s) : v = xe({}, s), c && o === void 0 && g.length === 1 ? delete v[h][g[0]] : v[h] = Qu(v[h], g, o, c), v;
}
function Gi(s, i, o) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return i.length && c && o === void 0 && !_s(s, i.slice(0, -1)) ? s : Qu(s, i, o, c);
}
function yx(s) {
  return $e(s) === "object" && s !== null && Object.getPrototypeOf(s) === Object.prototype;
}
function jc(s) {
  return Array.isArray(s) ? [] : {};
}
var bx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Sx() {
  for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
    i[o] = arguments[o];
  var c = jc(i[0]);
  return i.forEach(function(l) {
    function h(g, v) {
      var b = new Set(v), S = _s(l, g), C = Array.isArray(S);
      if (C || yx(S)) {
        if (!b.has(S)) {
          b.add(S);
          var P = _s(c, g);
          C ? c = Gi(c, g, []) : (!P || $e(P) !== "object") && (c = Gi(c, g, jc(S))), bx(S).forEach(function(w) {
            h([].concat(yn(g), [w]), b);
          });
        }
      } else
        c = Gi(c, g, S);
    }
    h([]);
  }), c;
}
function ef() {
}
let mn = null;
function wx() {
  mn = null, gu();
}
let Na = ef;
process.env.NODE_ENV !== "production" && (Na = (s, i, o) => {
  kn(s, `[antd: ${i}] ${o}`), process.env.NODE_ENV === "test" && wx();
});
const tf = /* @__PURE__ */ Z.createContext({}), Sr = process.env.NODE_ENV !== "production" ? (s) => {
  const {
    strict: i
  } = Z.useContext(tf), o = (c, l, h) => {
    if (!c)
      if (i === !1 && l === "deprecated") {
        const g = mn;
        mn || (mn = {}), mn[s] = mn[s] || [], mn[s].includes(h || "") || mn[s].push(h || ""), g || console.warn("[antd] There exists deprecated usage in your code:", mn);
      } else
        process.env.NODE_ENV !== "production" && Na(c, s, h);
  };
  return o.deprecated = (c, l, h, g) => {
    o(c, "deprecated", `\`${l}\` is deprecated. Please use \`${h}\` instead.${g ? ` ${g}` : ""}`);
  }, o;
} : () => {
  const s = () => {
  };
  return s.deprecated = ef, s;
}, Ai = Na, Ex = /* @__PURE__ */ da(void 0), Bt = "${label} is not a valid ${type}", Ti = {
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
        string: Bt,
        method: Bt,
        array: Bt,
        object: Bt,
        number: Bt,
        date: Bt,
        boolean: Bt,
        integer: Bt,
        float: Bt,
        regexp: Bt,
        email: Bt,
        url: Bt,
        hex: Bt
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
let Lo = [];
const Lc = () => Lo.reduce((s, i) => Object.assign(Object.assign({}, s), i), Ti.Modal);
function Cx(s) {
  if (s) {
    const i = Object.assign({}, s);
    return Lo.push(i), Lc(), () => {
      Lo = Lo.filter((o) => o !== i), Lc();
    };
  }
  Object.assign({}, Ti.Modal);
}
const nf = /* @__PURE__ */ da(void 0), rf = "internalMark", of = (s) => {
  const {
    locale: i = {},
    children: o,
    _ANT_MARK__: c
  } = s;
  if (process.env.NODE_ENV !== "production") {
    const h = Sr("LocaleProvider");
    process.env.NODE_ENV !== "production" && h(c === rf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  Z.useEffect(() => Cx(i == null ? void 0 : i.Modal), [i]);
  const l = Z.useMemo(() => Object.assign(Object.assign({}, i), {
    exist: !0
  }), [i]);
  return /* @__PURE__ */ Z.createElement(nf.Provider, {
    value: l
  }, o);
};
process.env.NODE_ENV !== "production" && (of.displayName = "LocaleProvider");
const sf = {
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
}, Wr = Object.assign(Object.assign({}, sf), {
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
}), vt = Math.round;
function Zi(s, i) {
  const o = s.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], c = o.map((l) => parseFloat(l));
  for (let l = 0; l < 3; l += 1)
    c[l] = i(c[l] || 0, o[l] || "", l);
  return o[3] ? c[3] = o[3].includes("%") ? c[3] / 100 : c[3] : c[3] = 1, c;
}
const Mc = (s, i, o) => o === 0 ? s : s / 100;
function Ir(s, i) {
  const o = i || 255;
  return s > o ? o : s < 0 ? 0 : s;
}
class ct {
  constructor(i) {
    ve(this, "isValid", !0), ve(this, "r", 0), ve(this, "g", 0), ve(this, "b", 0), ve(this, "a", 1), ve(this, "_h", void 0), ve(this, "_s", void 0), ve(this, "_l", void 0), ve(this, "_v", void 0), ve(this, "_max", void 0), ve(this, "_min", void 0), ve(this, "_brightness", void 0);
    function o(c) {
      return c[0] in i && c[1] in i && c[2] in i;
    }
    if (i) if (typeof i == "string") {
      let l = function(h) {
        return c.startsWith(h);
      };
      const c = i.trim();
      /^#?[A-F\d]{3,8}$/i.test(c) ? this.fromHexString(c) : l("rgb") ? this.fromRgbString(c) : l("hsl") ? this.fromHslString(c) : (l("hsv") || l("hsb")) && this.fromHsvString(c);
    } else if (i instanceof ct)
      this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this._h = i._h, this._s = i._s, this._l = i._l, this._v = i._v;
    else if (o("rgb"))
      this.r = Ir(i.r), this.g = Ir(i.g), this.b = Ir(i.b), this.a = typeof i.a == "number" ? Ir(i.a, 1) : 1;
    else if (o("hsl"))
      this.fromHsl(i);
    else if (o("hsv"))
      this.fromHsv(i);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(i));
  }
  // ======================= Setter =======================
  setR(i) {
    return this._sc("r", i);
  }
  setG(i) {
    return this._sc("g", i);
  }
  setB(i) {
    return this._sc("b", i);
  }
  setA(i) {
    return this._sc("a", i, 1);
  }
  setHue(i) {
    const o = this.toHsv();
    return o.h = i, this._c(o);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function i(h) {
      const g = h / 255;
      return g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    }
    const o = i(this.r), c = i(this.g), l = i(this.b);
    return 0.2126 * o + 0.7152 * c + 0.0722 * l;
  }
  getHue() {
    if (typeof this._h > "u") {
      const i = this.getMax() - this.getMin();
      i === 0 ? this._h = 0 : this._h = vt(60 * (this.r === this.getMax() ? (this.g - this.b) / i + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / i + 2 : (this.r - this.g) / i + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const i = this.getMax() - this.getMin();
      i === 0 ? this._s = 0 : this._s = i / this.getMax();
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
  darken(i = 10) {
    const o = this.getHue(), c = this.getSaturation();
    let l = this.getLightness() - i / 100;
    return l < 0 && (l = 0), this._c({
      h: o,
      s: c,
      l,
      a: this.a
    });
  }
  lighten(i = 10) {
    const o = this.getHue(), c = this.getSaturation();
    let l = this.getLightness() + i / 100;
    return l > 1 && (l = 1), this._c({
      h: o,
      s: c,
      l,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(i, o = 50) {
    const c = this._c(i), l = o / 100, h = (v) => (c[v] - this[v]) * l + this[v], g = {
      r: vt(h("r")),
      g: vt(h("g")),
      b: vt(h("b")),
      a: vt(h("a") * 100) / 100
    };
    return this._c(g);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(i = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, i);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(i = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, i);
  }
  onBackground(i) {
    const o = this._c(i), c = this.a + o.a * (1 - this.a), l = (h) => vt((this[h] * this.a + o[h] * o.a * (1 - this.a)) / c);
    return this._c({
      r: l("r"),
      g: l("g"),
      b: l("b"),
      a: c
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
  equals(i) {
    return this.r === i.r && this.g === i.g && this.b === i.b && this.a === i.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let i = "#";
    const o = (this.r || 0).toString(16);
    i += o.length === 2 ? o : "0" + o;
    const c = (this.g || 0).toString(16);
    i += c.length === 2 ? c : "0" + c;
    const l = (this.b || 0).toString(16);
    if (i += l.length === 2 ? l : "0" + l, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const h = vt(this.a * 255).toString(16);
      i += h.length === 2 ? h : "0" + h;
    }
    return i;
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
    const i = this.getHue(), o = vt(this.getSaturation() * 100), c = vt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${i},${o}%,${c}%,${this.a})` : `hsl(${i},${o}%,${c}%)`;
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
  _sc(i, o, c) {
    const l = this.clone();
    return l[i] = Ir(o, c), l;
  }
  _c(i) {
    return new this.constructor(i);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(i) {
    const o = i.replace("#", "");
    function c(l, h) {
      return parseInt(o[l] + o[h || l], 16);
    }
    o.length < 6 ? (this.r = c(0), this.g = c(1), this.b = c(2), this.a = o[3] ? c(3) / 255 : 1) : (this.r = c(0, 1), this.g = c(2, 3), this.b = c(4, 5), this.a = o[6] ? c(6, 7) / 255 : 1);
  }
  fromHsl({
    h: i,
    s: o,
    l: c,
    a: l
  }) {
    if (this._h = i % 360, this._s = o, this._l = c, this.a = typeof l == "number" ? l : 1, o <= 0) {
      const w = vt(c * 255);
      this.r = w, this.g = w, this.b = w;
    }
    let h = 0, g = 0, v = 0;
    const b = i / 60, S = (1 - Math.abs(2 * c - 1)) * o, C = S * (1 - Math.abs(b % 2 - 1));
    b >= 0 && b < 1 ? (h = S, g = C) : b >= 1 && b < 2 ? (h = C, g = S) : b >= 2 && b < 3 ? (g = S, v = C) : b >= 3 && b < 4 ? (g = C, v = S) : b >= 4 && b < 5 ? (h = C, v = S) : b >= 5 && b < 6 && (h = S, v = C);
    const P = c - S / 2;
    this.r = vt((h + P) * 255), this.g = vt((g + P) * 255), this.b = vt((v + P) * 255);
  }
  fromHsv({
    h: i,
    s: o,
    v: c,
    a: l
  }) {
    this._h = i % 360, this._s = o, this._v = c, this.a = typeof l == "number" ? l : 1;
    const h = vt(c * 255);
    if (this.r = h, this.g = h, this.b = h, o <= 0)
      return;
    const g = i / 60, v = Math.floor(g), b = g - v, S = vt(c * (1 - o) * 255), C = vt(c * (1 - o * b) * 255), P = vt(c * (1 - o * (1 - b)) * 255);
    switch (v) {
      case 0:
        this.g = P, this.b = S;
        break;
      case 1:
        this.r = C, this.b = S;
        break;
      case 2:
        this.r = S, this.b = P;
        break;
      case 3:
        this.r = S, this.g = C;
        break;
      case 4:
        this.r = P, this.g = S;
        break;
      case 5:
      default:
        this.g = S, this.b = C;
        break;
    }
  }
  fromHsvString(i) {
    const o = Zi(i, Mc);
    this.fromHsv({
      h: o[0],
      s: o[1],
      v: o[2],
      a: o[3]
    });
  }
  fromHslString(i) {
    const o = Zi(i, Mc);
    this.fromHsl({
      h: o[0],
      s: o[1],
      l: o[2],
      a: o[3]
    });
  }
  fromRgbString(i) {
    const o = Zi(i, (c, l) => (
      // Convert percentage to number. e.g. 50% -> 128
      l.includes("%") ? vt(c / 100 * 255) : c
    ));
    this.r = o[0], this.g = o[1], this.b = o[2], this.a = o[3];
  }
}
var po = 2, Bc = 0.16, Ax = 0.05, Tx = 0.05, Ox = 0.15, af = 5, cf = 4, Rx = [{
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
function Fc(s, i, o) {
  var c;
  return Math.round(s.h) >= 60 && Math.round(s.h) <= 240 ? c = o ? Math.round(s.h) - po * i : Math.round(s.h) + po * i : c = o ? Math.round(s.h) + po * i : Math.round(s.h) - po * i, c < 0 ? c += 360 : c >= 360 && (c -= 360), c;
}
function zc(s, i, o) {
  if (s.h === 0 && s.s === 0)
    return s.s;
  var c;
  return o ? c = s.s - Bc * i : i === cf ? c = s.s + Bc : c = s.s + Ax * i, c > 1 && (c = 1), o && i === af && c > 0.1 && (c = 0.1), c < 0.06 && (c = 0.06), Math.round(c * 100) / 100;
}
function Vc(s, i, o) {
  var c;
  return o ? c = s.v + Tx * i : c = s.v - Ox * i, c = Math.max(0, Math.min(1, c)), Math.round(c * 100) / 100;
}
function qr(s) {
  for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [], c = new ct(s), l = c.toHsv(), h = af; h > 0; h -= 1) {
    var g = new ct({
      h: Fc(l, h, !0),
      s: zc(l, h, !0),
      v: Vc(l, h, !0)
    });
    o.push(g);
  }
  o.push(c);
  for (var v = 1; v <= cf; v += 1) {
    var b = new ct({
      h: Fc(l, v),
      s: zc(l, v),
      v: Vc(l, v)
    });
    o.push(b);
  }
  return i.theme === "dark" ? Rx.map(function(S) {
    var C = S.index, P = S.amount;
    return new ct(i.backgroundColor || "#141414").mix(o[C], P).toHexString();
  }) : o.map(function(S) {
    return S.toHexString();
  });
}
var Ji = {
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
}, Ns = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ns.primary = Ns[5];
var Ds = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ds.primary = Ds[5];
var js = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
js.primary = js[5];
var Ls = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ls.primary = Ls[5];
var Ms = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Ms.primary = Ms[5];
var Bs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Bs.primary = Bs[5];
var Fs = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Fs.primary = Fs[5];
var zs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
zs.primary = zs[5];
var Go = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Go.primary = Go[5];
var Vs = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Vs.primary = Vs[5];
var Hs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Hs.primary = Hs[5];
var Us = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Us.primary = Us[5];
var Ws = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ws.primary = Ws[5];
var Qi = {
  red: Ns,
  volcano: Ds,
  orange: js,
  gold: Ls,
  yellow: Ms,
  lime: Bs,
  green: Fs,
  cyan: zs,
  blue: Go,
  geekblue: Vs,
  purple: Hs,
  magenta: Us,
  grey: Ws
};
function kx(s, i) {
  let {
    generateColorPalettes: o,
    generateNeutralColorPalettes: c
  } = i;
  const {
    colorSuccess: l,
    colorWarning: h,
    colorError: g,
    colorInfo: v,
    colorPrimary: b,
    colorBgBase: S,
    colorTextBase: C
  } = s, P = o(b), w = o(l), U = o(h), V = o(g), D = o(v), L = c(S, C), K = s.colorLink || s.colorInfo, $ = o(K), _ = new ct(V[1]).mix(new ct(V[3]), 50).toHexString();
  return Object.assign(Object.assign({}, L), {
    colorPrimaryBg: P[1],
    colorPrimaryBgHover: P[2],
    colorPrimaryBorder: P[3],
    colorPrimaryBorderHover: P[4],
    colorPrimaryHover: P[5],
    colorPrimary: P[6],
    colorPrimaryActive: P[7],
    colorPrimaryTextHover: P[8],
    colorPrimaryText: P[9],
    colorPrimaryTextActive: P[10],
    colorSuccessBg: w[1],
    colorSuccessBgHover: w[2],
    colorSuccessBorder: w[3],
    colorSuccessBorderHover: w[4],
    colorSuccessHover: w[4],
    colorSuccess: w[6],
    colorSuccessActive: w[7],
    colorSuccessTextHover: w[8],
    colorSuccessText: w[9],
    colorSuccessTextActive: w[10],
    colorErrorBg: V[1],
    colorErrorBgHover: V[2],
    colorErrorBgFilledHover: _,
    colorErrorBgActive: V[3],
    colorErrorBorder: V[3],
    colorErrorBorderHover: V[4],
    colorErrorHover: V[5],
    colorError: V[6],
    colorErrorActive: V[7],
    colorErrorTextHover: V[8],
    colorErrorText: V[9],
    colorErrorTextActive: V[10],
    colorWarningBg: U[1],
    colorWarningBgHover: U[2],
    colorWarningBorder: U[3],
    colorWarningBorderHover: U[4],
    colorWarningHover: U[4],
    colorWarning: U[6],
    colorWarningActive: U[7],
    colorWarningTextHover: U[8],
    colorWarningText: U[9],
    colorWarningTextActive: U[10],
    colorInfoBg: D[1],
    colorInfoBgHover: D[2],
    colorInfoBorder: D[3],
    colorInfoBorderHover: D[4],
    colorInfoHover: D[4],
    colorInfo: D[6],
    colorInfoActive: D[7],
    colorInfoTextHover: D[8],
    colorInfoText: D[9],
    colorInfoTextActive: D[10],
    colorLinkHover: $[4],
    colorLink: $[6],
    colorLinkActive: $[7],
    colorBgMask: new ct("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Px = (s) => {
  let i = s, o = s, c = s, l = s;
  return s < 6 && s >= 5 ? i = s + 1 : s < 16 && s >= 6 ? i = s + 2 : s >= 16 && (i = 16), s < 7 && s >= 5 ? o = 4 : s < 8 && s >= 7 ? o = 5 : s < 14 && s >= 8 ? o = 6 : s < 16 && s >= 14 ? o = 7 : s >= 16 && (o = 8), s < 6 && s >= 2 ? c = 1 : s >= 6 && (c = 2), s > 4 && s < 8 ? l = 4 : s >= 8 && (l = 6), {
    borderRadius: s,
    borderRadiusXS: c,
    borderRadiusSM: o,
    borderRadiusLG: i,
    borderRadiusOuter: l
  };
};
function Ix(s) {
  const {
    motionUnit: i,
    motionBase: o,
    borderRadius: c,
    lineWidth: l
  } = s;
  return Object.assign({
    // motion
    motionDurationFast: `${(o + i).toFixed(1)}s`,
    motionDurationMid: `${(o + i * 2).toFixed(1)}s`,
    motionDurationSlow: `${(o + i * 3).toFixed(1)}s`,
    // line
    lineWidthBold: l + 1
  }, Px(c));
}
const _x = (s) => {
  const {
    controlHeight: i
  } = s;
  return {
    controlHeightSM: i * 0.75,
    controlHeightXS: i * 0.5,
    controlHeightLG: i * 1.25
  };
};
function Nx(s) {
  return (s + 8) / s;
}
function Dx(s) {
  const i = Array.from({
    length: 10
  }).map((o, c) => {
    const l = c - 1, h = s * Math.pow(Math.E, l / 5), g = c > 1 ? Math.floor(h) : Math.ceil(h);
    return Math.floor(g / 2) * 2;
  });
  return i[1] = s, i.map((o) => ({
    size: o,
    lineHeight: Nx(o)
  }));
}
const jx = (s) => {
  const i = Dx(s), o = i.map((C) => C.size), c = i.map((C) => C.lineHeight), l = o[1], h = o[0], g = o[2], v = c[1], b = c[0], S = c[2];
  return {
    fontSizeSM: h,
    fontSize: l,
    fontSizeLG: g,
    fontSizeXL: o[3],
    fontSizeHeading1: o[6],
    fontSizeHeading2: o[5],
    fontSizeHeading3: o[4],
    fontSizeHeading4: o[3],
    fontSizeHeading5: o[2],
    lineHeight: v,
    lineHeightLG: S,
    lineHeightSM: b,
    fontHeight: Math.round(v * l),
    fontHeightLG: Math.round(S * g),
    fontHeightSM: Math.round(b * h),
    lineHeightHeading1: c[6],
    lineHeightHeading2: c[5],
    lineHeightHeading3: c[4],
    lineHeightHeading4: c[3],
    lineHeightHeading5: c[2]
  };
};
function Lx(s) {
  const {
    sizeUnit: i,
    sizeStep: o
  } = s;
  return {
    sizeXXL: i * (o + 8),
    // 48
    sizeXL: i * (o + 4),
    // 32
    sizeLG: i * (o + 2),
    // 24
    sizeMD: i * (o + 1),
    // 20
    sizeMS: i * o,
    // 16
    size: i * o,
    // 16
    sizeSM: i * (o - 1),
    // 12
    sizeXS: i * (o - 2),
    // 8
    sizeXXS: i * (o - 3)
    // 4
  };
}
const Vt = (s, i) => new ct(s).setA(i).toRgbString(), _r = (s, i) => new ct(s).darken(i).toHexString(), Mx = (s) => {
  const i = qr(s);
  return {
    1: i[0],
    2: i[1],
    3: i[2],
    4: i[3],
    5: i[4],
    6: i[5],
    7: i[6],
    8: i[4],
    9: i[5],
    10: i[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Bx = (s, i) => {
  const o = s || "#fff", c = i || "#000";
  return {
    colorBgBase: o,
    colorTextBase: c,
    colorText: Vt(c, 0.88),
    colorTextSecondary: Vt(c, 0.65),
    colorTextTertiary: Vt(c, 0.45),
    colorTextQuaternary: Vt(c, 0.25),
    colorFill: Vt(c, 0.15),
    colorFillSecondary: Vt(c, 0.06),
    colorFillTertiary: Vt(c, 0.04),
    colorFillQuaternary: Vt(c, 0.02),
    colorBgSolid: Vt(c, 1),
    colorBgSolidHover: Vt(c, 0.75),
    colorBgSolidActive: Vt(c, 0.95),
    colorBgLayout: _r(o, 4),
    colorBgContainer: _r(o, 0),
    colorBgElevated: _r(o, 0),
    colorBgSpotlight: Vt(c, 0.85),
    colorBgBlur: "transparent",
    colorBorder: _r(o, 15),
    colorBorderSecondary: _r(o, 6)
  };
};
function Fx(s) {
  Ji.pink = Ji.magenta, Qi.pink = Qi.magenta;
  const i = Object.keys(sf).map((o) => {
    const c = s[o] === Ji[o] ? Qi[o] : qr(s[o]);
    return Array.from({
      length: 10
    }, () => 1).reduce((l, h, g) => (l[`${o}-${g + 1}`] = c[g], l[`${o}${g + 1}`] = c[g], l), {});
  }).reduce((o, c) => (o = Object.assign(Object.assign({}, o), c), o), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, s), i), kx(s, {
    generateColorPalettes: Mx,
    generateNeutralColorPalettes: Bx
  })), jx(s.fontSize)), Lx(s)), _x(s)), Ix(s));
}
const lf = Ts(Fx), qs = {
  token: Wr,
  override: {
    override: Wr
  },
  hashed: !0
}, uf = /* @__PURE__ */ lt.createContext(qs), $s = "ant", Da = "anticon", zx = (s, i) => i || (s ? `${$s}-${s}` : $s), Rn = /* @__PURE__ */ Z.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: zx,
  iconPrefixCls: Da
}), {
  Consumer: Qv
} = Rn, Hc = {};
function ff(s) {
  const i = Z.useContext(Rn), {
    getPrefixCls: o,
    direction: c,
    getPopupContainer: l
  } = i, h = i[s];
  return Object.assign(Object.assign({
    classNames: Hc,
    styles: Hc
  }, h), {
    getPrefixCls: o,
    direction: c,
    getPopupContainer: l
  });
}
const Vx = `-ant-${Date.now()}-${Math.random()}`;
function Hx(s, i) {
  const o = {}, c = (g, v) => {
    let b = g.clone();
    return b = (v == null ? void 0 : v(b)) || b, b.toRgbString();
  }, l = (g, v) => {
    const b = new ct(g), S = qr(b.toRgbString());
    o[`${v}-color`] = c(b), o[`${v}-color-disabled`] = S[1], o[`${v}-color-hover`] = S[4], o[`${v}-color-active`] = S[6], o[`${v}-color-outline`] = b.clone().setA(0.2).toRgbString(), o[`${v}-color-deprecated-bg`] = S[0], o[`${v}-color-deprecated-border`] = S[2];
  };
  if (i.primaryColor) {
    l(i.primaryColor, "primary");
    const g = new ct(i.primaryColor), v = qr(g.toRgbString());
    v.forEach((S, C) => {
      o[`primary-${C + 1}`] = S;
    }), o["primary-color-deprecated-l-35"] = c(g, (S) => S.lighten(35)), o["primary-color-deprecated-l-20"] = c(g, (S) => S.lighten(20)), o["primary-color-deprecated-t-20"] = c(g, (S) => S.tint(20)), o["primary-color-deprecated-t-50"] = c(g, (S) => S.tint(50)), o["primary-color-deprecated-f-12"] = c(g, (S) => S.setA(S.a * 0.12));
    const b = new ct(v[0]);
    o["primary-color-active-deprecated-f-30"] = c(b, (S) => S.setA(S.a * 0.3)), o["primary-color-active-deprecated-d-02"] = c(b, (S) => S.darken(2));
  }
  return i.successColor && l(i.successColor, "success"), i.warningColor && l(i.warningColor, "warning"), i.errorColor && l(i.errorColor, "error"), i.infoColor && l(i.infoColor, "info"), `
  :root {
    ${Object.keys(o).map((g) => `--${s}-${g}: ${o[g]};`).join(`
`)}
  }
  `.trim();
}
function Ux(s, i) {
  const o = Hx(s, i);
  bn() ? $n(o, `${Vx}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ai(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ys = /* @__PURE__ */ Z.createContext(!1), Wx = (s) => {
  let {
    children: i,
    disabled: o
  } = s;
  const c = Z.useContext(Ys);
  return /* @__PURE__ */ Z.createElement(Ys.Provider, {
    value: o ?? c
  }, i);
}, $r = /* @__PURE__ */ Z.createContext(void 0), qx = (s) => {
  let {
    children: i,
    size: o
  } = s;
  const c = Z.useContext($r);
  return /* @__PURE__ */ Z.createElement($r.Provider, {
    value: o || c
  }, i);
};
function $x() {
  const s = On(Ys), i = On($r);
  return {
    componentDisabled: s,
    componentSize: i
  };
}
var df = /* @__PURE__ */ Qt(function s() {
  Jt(this, s);
}), hf = "CALC_UNIT", Yx = new RegExp(hf, "g");
function es(s) {
  return typeof s == "number" ? "".concat(s).concat(hf) : s;
}
var Xx = /* @__PURE__ */ function(s) {
  Zr(o, s);
  var i = bi(o);
  function o(c, l) {
    var h;
    Jt(this, o), h = i.call(this), ve(qn(h), "result", ""), ve(qn(h), "unitlessCssVar", void 0), ve(qn(h), "lowPriority", void 0);
    var g = $e(c);
    return h.unitlessCssVar = l, c instanceof o ? h.result = "(".concat(c.result, ")") : g === "number" ? h.result = es(c) : g === "string" && (h.result = c), h;
  }
  return Qt(o, [{
    key: "add",
    value: function(l) {
      return l instanceof o ? this.result = "".concat(this.result, " + ").concat(l.getResult()) : (typeof l == "number" || typeof l == "string") && (this.result = "".concat(this.result, " + ").concat(es(l))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(l) {
      return l instanceof o ? this.result = "".concat(this.result, " - ").concat(l.getResult()) : (typeof l == "number" || typeof l == "string") && (this.result = "".concat(this.result, " - ").concat(es(l))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(l) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), l instanceof o ? this.result = "".concat(this.result, " * ").concat(l.getResult(!0)) : (typeof l == "number" || typeof l == "string") && (this.result = "".concat(this.result, " * ").concat(l)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(l) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), l instanceof o ? this.result = "".concat(this.result, " / ").concat(l.getResult(!0)) : (typeof l == "number" || typeof l == "string") && (this.result = "".concat(this.result, " / ").concat(l)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(l) {
      return this.lowPriority || l ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(l) {
      var h = this, g = l || {}, v = g.unit, b = !0;
      return typeof v == "boolean" ? b = v : Array.from(this.unitlessCssVar).some(function(S) {
        return h.result.includes(S);
      }) && (b = !1), this.result = this.result.replace(Yx, b ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), o;
}(df), Kx = /* @__PURE__ */ function(s) {
  Zr(o, s);
  var i = bi(o);
  function o(c) {
    var l;
    return Jt(this, o), l = i.call(this), ve(qn(l), "result", 0), c instanceof o ? l.result = c.result : typeof c == "number" && (l.result = c), l;
  }
  return Qt(o, [{
    key: "add",
    value: function(l) {
      return l instanceof o ? this.result += l.result : typeof l == "number" && (this.result += l), this;
    }
  }, {
    key: "sub",
    value: function(l) {
      return l instanceof o ? this.result -= l.result : typeof l == "number" && (this.result -= l), this;
    }
  }, {
    key: "mul",
    value: function(l) {
      return l instanceof o ? this.result *= l.result : typeof l == "number" && (this.result *= l), this;
    }
  }, {
    key: "div",
    value: function(l) {
      return l instanceof o ? this.result /= l.result : typeof l == "number" && (this.result /= l), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), o;
}(df), Gx = function(i, o) {
  var c = i === "css" ? Xx : Kx;
  return function(l) {
    return new c(l, o);
  };
}, Uc = function(i, o) {
  return "".concat([o, i.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Xs(s) {
  var i = Z.useRef();
  i.current = s;
  var o = Z.useCallback(function() {
    for (var c, l = arguments.length, h = new Array(l), g = 0; g < l; g++)
      h[g] = arguments[g];
    return (c = i.current) === null || c === void 0 ? void 0 : c.call.apply(c, [i].concat(h));
  }, []);
  return o;
}
function Ks(s) {
  var i = Z.useRef(!1), o = Z.useState(s), c = Me(o, 2), l = c[0], h = c[1];
  Z.useEffect(function() {
    return i.current = !1, function() {
      i.current = !0;
    };
  }, []);
  function g(v, b) {
    b && i.current || h(v);
  }
  return [l, g];
}
function Wc(s, i, o, c) {
  var l = xe({}, i[s]);
  if (c != null && c.deprecatedTokens) {
    var h = c.deprecatedTokens;
    h.forEach(function(v) {
      var b = Me(v, 2), S = b[0], C = b[1];
      if (process.env.NODE_ENV !== "production" && kn(!(l != null && l[S]), "Component Token `".concat(String(S), "` of ").concat(String(s), " is deprecated. Please use `").concat(String(C), "` instead.")), l != null && l[S] || l != null && l[C]) {
        var P;
        (P = l[C]) !== null && P !== void 0 || (l[C] = l == null ? void 0 : l[S]);
      }
    });
  }
  var g = xe(xe({}, o), l);
  return Object.keys(g).forEach(function(v) {
    g[v] === i[v] && delete g[v];
  }), g;
}
var pf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Gs = !0;
function Oi() {
  for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
    i[o] = arguments[o];
  if (!pf)
    return Object.assign.apply(Object, [{}].concat(i));
  Gs = !1;
  var c = {};
  return i.forEach(function(l) {
    if ($e(l) === "object") {
      var h = Object.keys(l);
      h.forEach(function(g) {
        Object.defineProperty(c, g, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return l[g];
          }
        });
      });
    }
  }), Gs = !0, c;
}
var qc = {};
function Zx() {
}
var Jx = function(i) {
  var o, c = i, l = Zx;
  return pf && typeof Proxy < "u" && (o = /* @__PURE__ */ new Set(), c = new Proxy(i, {
    get: function(g, v) {
      if (Gs) {
        var b;
        (b = o) === null || b === void 0 || b.add(v);
      }
      return g[v];
    }
  }), l = function(g, v) {
    var b;
    qc[g] = {
      global: Array.from(o),
      component: xe(xe({}, (b = qc[g]) === null || b === void 0 ? void 0 : b.component), v)
    };
  }), {
    token: c,
    keys: o,
    flush: l
  };
};
function $c(s, i, o) {
  if (typeof o == "function") {
    var c;
    return o(Oi(i, (c = i[s]) !== null && c !== void 0 ? c : {}));
  }
  return o ?? {};
}
function Qx(s) {
  return s === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var o = arguments.length, c = new Array(o), l = 0; l < o; l++)
        c[l] = arguments[l];
      return "max(".concat(c.map(function(h) {
        return Xo(h);
      }).join(","), ")");
    },
    min: function() {
      for (var o = arguments.length, c = new Array(o), l = 0; l < o; l++)
        c[l] = arguments[l];
      return "min(".concat(c.map(function(h) {
        return Xo(h);
      }).join(","), ")");
    }
  };
}
var e1 = 1e3 * 60 * 10, t1 = /* @__PURE__ */ function() {
  function s() {
    Jt(this, s), ve(this, "map", /* @__PURE__ */ new Map()), ve(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), ve(this, "nextID", 0), ve(this, "lastAccessBeat", /* @__PURE__ */ new Map()), ve(this, "accessBeat", 0);
  }
  return Qt(s, [{
    key: "set",
    value: function(o, c) {
      this.clear();
      var l = this.getCompositeKey(o);
      this.map.set(l, c), this.lastAccessBeat.set(l, Date.now());
    }
  }, {
    key: "get",
    value: function(o) {
      var c = this.getCompositeKey(o), l = this.map.get(c);
      return this.lastAccessBeat.set(c, Date.now()), this.accessBeat += 1, l;
    }
  }, {
    key: "getCompositeKey",
    value: function(o) {
      var c = this, l = o.map(function(h) {
        return h && $e(h) === "object" ? "obj_".concat(c.getObjectID(h)) : "".concat($e(h), "_").concat(h);
      });
      return l.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(o) {
      if (this.objectIDMap.has(o))
        return this.objectIDMap.get(o);
      var c = this.nextID;
      return this.objectIDMap.set(o, c), this.nextID += 1, c;
    }
  }, {
    key: "clear",
    value: function() {
      var o = this;
      if (this.accessBeat > 1e4) {
        var c = Date.now();
        this.lastAccessBeat.forEach(function(l, h) {
          c - l > e1 && (o.map.delete(h), o.lastAccessBeat.delete(h));
        }), this.accessBeat = 0;
      }
    }
  }]), s;
}(), Yc = new t1();
function n1(s, i) {
  return lt.useMemo(function() {
    var o = Yc.get(i);
    if (o)
      return o;
    var c = s();
    return Yc.set(i, c), c;
  }, i);
}
var r1 = function() {
  return {};
};
function o1(s) {
  var i = s.useCSP, o = i === void 0 ? r1 : i, c = s.useToken, l = s.usePrefix, h = s.getResetStyles, g = s.getCommonStyle, v = s.getCompUnitless;
  function b(w, U, V, D) {
    var L = Array.isArray(w) ? w[0] : w;
    function K(ae) {
      return "".concat(String(L)).concat(ae.slice(0, 1).toUpperCase()).concat(ae.slice(1));
    }
    var $ = (D == null ? void 0 : D.unitless) || {}, _ = typeof v == "function" ? v(w) : {}, J = xe(xe({}, _), {}, ve({}, K("zIndexPopup"), !0));
    Object.keys($).forEach(function(ae) {
      J[K(ae)] = $[ae];
    });
    var q = xe(xe({}, D), {}, {
      unitless: J,
      prefixToken: K
    }), te = C(w, U, V, q), Q = S(L, V, q);
    return function(ae) {
      var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ae, Se = te(ae, fe), De = Me(Se, 2), Ee = De[1], de = Q(fe), ye = Me(de, 2), me = ye[0], Ie = ye[1];
      return [me, Ee, Ie];
    };
  }
  function S(w, U, V) {
    var D = V.unitless, L = V.injectStyle, K = L === void 0 ? !0 : L, $ = V.prefixToken, _ = V.ignore, J = function(Q) {
      var ae = Q.rootCls, fe = Q.cssVar, Se = fe === void 0 ? {} : fe, De = c(), Ee = De.realToken;
      return mx({
        path: [w],
        prefix: Se.prefix,
        key: Se.key,
        unitless: D,
        ignore: _,
        token: Ee,
        scope: ae
      }, function() {
        var de = $c(w, Ee, U), ye = Wc(w, Ee, de, {
          deprecatedTokens: V == null ? void 0 : V.deprecatedTokens
        });
        return Object.keys(de).forEach(function(me) {
          ye[$(me)] = ye[me], delete ye[me];
        }), ye;
      }), null;
    }, q = function(Q) {
      var ae = c(), fe = ae.cssVar;
      return [function(Se) {
        return K && fe ? /* @__PURE__ */ lt.createElement(lt.Fragment, null, /* @__PURE__ */ lt.createElement(J, {
          rootCls: Q,
          cssVar: fe,
          component: w
        }), Se) : Se;
      }, fe == null ? void 0 : fe.key];
    };
    return q;
  }
  function C(w, U, V) {
    var D = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, L = Array.isArray(w) ? w : [w, w], K = Me(L, 1), $ = K[0], _ = L.join("-"), J = s.layer || {
      name: "antd"
    };
    return function(q) {
      var te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q, Q = c(), ae = Q.theme, fe = Q.realToken, Se = Q.hashId, De = Q.token, Ee = Q.cssVar, de = l(), ye = de.rootPrefixCls, me = de.iconPrefixCls, Ie = o(), Ae = Ee ? "css" : "js", Re = n1(function() {
        var Oe = /* @__PURE__ */ new Set();
        return Ee && Object.keys(D.unitless || {}).forEach(function(ke) {
          Oe.add(Io(ke, Ee.prefix)), Oe.add(Io(ke, Uc($, Ee.prefix)));
        }), Gx(Ae, Oe);
      }, [Ae, $, Ee == null ? void 0 : Ee.prefix]), Te = Qx(Ae), Pe = Te.max, Ce = Te.min, pe = {
        theme: ae,
        token: De,
        hashId: Se,
        nonce: function() {
          return Ie.nonce;
        },
        clientOnly: D.clientOnly,
        layer: J,
        // antd is always at top of styles
        order: D.order || -999
      };
      typeof h == "function" && Is(xe(xe({}, pe), {}, {
        clientOnly: !1,
        path: ["Shared", ye]
      }), function() {
        return h(De, {
          prefix: {
            rootPrefixCls: ye,
            iconPrefixCls: me
          },
          csp: Ie
        });
      });
      var be = Is(xe(xe({}, pe), {}, {
        path: [_, q, me]
      }), function() {
        if (D.injectStyle === !1)
          return [];
        var Oe = Jx(De), ke = Oe.token, Fe = Oe.flush, re = $c($, fe, V), he = ".".concat(q), ne = Wc($, fe, re, {
          deprecatedTokens: D.deprecatedTokens
        });
        Ee && re && $e(re) === "object" && Object.keys(re).forEach(function(tt) {
          re[tt] = "var(".concat(Io(tt, Uc($, Ee.prefix)), ")");
        });
        var ie = Oi(ke, {
          componentCls: he,
          prefixCls: q,
          iconCls: ".".concat(me),
          antCls: ".".concat(ye),
          calc: Re,
          // @ts-ignore
          max: Pe,
          // @ts-ignore
          min: Ce
        }, Ee ? re : ne), X = U(ie, {
          hashId: Se,
          prefixCls: q,
          rootPrefixCls: ye,
          iconPrefixCls: me
        });
        Fe($, ne);
        var le = typeof g == "function" ? g(ie, q, te, D.resetFont) : null;
        return [D.resetStyle === !1 ? null : le, X];
      });
      return [be, Se];
    };
  }
  function P(w, U, V) {
    var D = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, L = C(w, U, V, xe({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, D)), K = function(_) {
      var J = _.prefixCls, q = _.rootCls, te = q === void 0 ? J : q;
      return L(J, te), null;
    };
    return process.env.NODE_ENV !== "production" && (K.displayName = "SubStyle_".concat(String(Array.isArray(w) ? w.join(".") : w))), K;
  }
  return {
    genStyleHooks: b,
    genSubStyleComponent: P,
    genComponentStyleHook: C
  };
}
const i1 = "5.24.6";
function ts(s) {
  return s >= 0 && s <= 255;
}
function xo(s, i) {
  const {
    r: o,
    g: c,
    b: l,
    a: h
  } = new ct(s).toRgb();
  if (h < 1)
    return s;
  const {
    r: g,
    g: v,
    b
  } = new ct(i).toRgb();
  for (let S = 0.01; S <= 1; S += 0.01) {
    const C = Math.round((o - g * (1 - S)) / S), P = Math.round((c - v * (1 - S)) / S), w = Math.round((l - b * (1 - S)) / S);
    if (ts(C) && ts(P) && ts(w))
      return new ct({
        r: C,
        g: P,
        b: w,
        a: Math.round(S * 100) / 100
      }).toRgbString();
  }
  return new ct({
    r: o,
    g: c,
    b: l,
    a: 1
  }).toRgbString();
}
var s1 = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
function xf(s) {
  const {
    override: i
  } = s, o = s1(s, ["override"]), c = Object.assign({}, i);
  Object.keys(Wr).forEach((w) => {
    delete c[w];
  });
  const l = Object.assign(Object.assign({}, o), c), h = 480, g = 576, v = 768, b = 992, S = 1200, C = 1600;
  if (l.motion === !1) {
    const w = "0s";
    l.motionDurationFast = w, l.motionDurationMid = w, l.motionDurationSlow = w;
  }
  return Object.assign(Object.assign(Object.assign({}, l), {
    // ============== Background ============== //
    colorFillContent: l.colorFillSecondary,
    colorFillContentHover: l.colorFill,
    colorFillAlter: l.colorFillQuaternary,
    colorBgContainerDisabled: l.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: l.colorBgContainer,
    colorSplit: xo(l.colorBorderSecondary, l.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: l.colorTextQuaternary,
    colorTextDisabled: l.colorTextQuaternary,
    colorTextHeading: l.colorText,
    colorTextLabel: l.colorTextSecondary,
    colorTextDescription: l.colorTextTertiary,
    colorTextLightSolid: l.colorWhite,
    colorHighlight: l.colorError,
    colorBgTextHover: l.colorFillSecondary,
    colorBgTextActive: l.colorFill,
    colorIcon: l.colorTextTertiary,
    colorIconHover: l.colorText,
    colorErrorOutline: xo(l.colorErrorBg, l.colorBgContainer),
    colorWarningOutline: xo(l.colorWarningBg, l.colorBgContainer),
    // Font
    fontSizeIcon: l.fontSizeSM,
    // Line
    lineWidthFocus: l.lineWidth * 3,
    // Control
    lineWidth: l.lineWidth,
    controlOutlineWidth: l.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: l.controlHeight / 2,
    controlItemBgHover: l.colorFillTertiary,
    controlItemBgActive: l.colorPrimaryBg,
    controlItemBgActiveHover: l.colorPrimaryBgHover,
    controlItemBgActiveDisabled: l.colorFill,
    controlTmpOutline: l.colorFillQuaternary,
    controlOutline: xo(l.colorPrimaryBg, l.colorBgContainer),
    lineType: l.lineType,
    borderRadius: l.borderRadius,
    borderRadiusXS: l.borderRadiusXS,
    borderRadiusSM: l.borderRadiusSM,
    borderRadiusLG: l.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: l.sizeXXS,
    paddingXS: l.sizeXS,
    paddingSM: l.sizeSM,
    padding: l.size,
    paddingMD: l.sizeMD,
    paddingLG: l.sizeLG,
    paddingXL: l.sizeXL,
    paddingContentHorizontalLG: l.sizeLG,
    paddingContentVerticalLG: l.sizeMS,
    paddingContentHorizontal: l.sizeMS,
    paddingContentVertical: l.sizeSM,
    paddingContentHorizontalSM: l.size,
    paddingContentVerticalSM: l.sizeXS,
    marginXXS: l.sizeXXS,
    marginXS: l.sizeXS,
    marginSM: l.sizeSM,
    margin: l.size,
    marginMD: l.sizeMD,
    marginLG: l.sizeLG,
    marginXL: l.sizeXL,
    marginXXL: l.sizeXXL,
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
    screenXS: h,
    screenXSMin: h,
    screenXSMax: g - 1,
    screenSM: g,
    screenSMMin: g,
    screenSMMax: v - 1,
    screenMD: v,
    screenMDMin: v,
    screenMDMax: b - 1,
    screenLG: b,
    screenLGMin: b,
    screenLGMax: S - 1,
    screenXL: S,
    screenXLMin: S,
    screenXLMax: C - 1,
    screenXXL: C,
    screenXXLMin: C,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ct("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ct("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ct("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), c);
}
var Xc = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
const mf = {
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
}, a1 = {
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
}, c1 = {
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
}, gf = (s, i, o) => {
  const c = o.getDerivativeToken(s), {
    override: l
  } = i, h = Xc(i, ["override"]);
  let g = Object.assign(Object.assign({}, c), {
    override: l
  });
  return g = xf(g), h && Object.entries(h).forEach((v) => {
    let [b, S] = v;
    const {
      theme: C
    } = S, P = Xc(S, ["theme"]);
    let w = P;
    C && (w = gf(Object.assign(Object.assign({}, g), P), {
      override: P
    }, C)), g[b] = w;
  }), g;
};
function ja() {
  const {
    token: s,
    hashed: i,
    theme: o,
    override: c,
    cssVar: l
  } = lt.useContext(uf), h = `${i1}-${i || ""}`, g = o || lf, [v, b, S] = Vp(g, [Wr, s], {
    salt: h,
    override: c,
    getComputedToken: gf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: xf,
    cssVar: l && {
      prefix: l.prefix,
      key: l.key,
      unitless: mf,
      ignore: a1,
      preserve: c1
    }
  });
  return [g, S, i ? b : "", v, l];
}
const vf = function(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: s.colorText,
    fontSize: s.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: s.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: i ? "inherit" : s.fontFamily
  };
}, l1 = () => ({
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
}), u1 = (s) => ({
  a: {
    color: s.colorLink,
    textDecoration: s.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${s.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: s.colorLinkHover
    },
    "&:active": {
      color: s.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: s.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: s.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: s.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), f1 = (s, i, o, c) => {
  const l = `[class^="${i}"], [class*=" ${i}"]`, h = o ? `.${o}` : l, g = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let v = {};
  return c !== !1 && (v = {
    fontFamily: s.fontFamily,
    fontSize: s.fontSize
  }), {
    [h]: Object.assign(Object.assign(Object.assign({}, v), g), {
      [l]: g
    })
  };
}, yf = (s) => ({
  [`.${s}`]: Object.assign(Object.assign({}, l1()), {
    [`.${s} .${s}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: La
} = o1({
  usePrefix: () => {
    const {
      getPrefixCls: s,
      iconPrefixCls: i
    } = On(Rn);
    return {
      rootPrefixCls: s(),
      iconPrefixCls: i
    };
  },
  useToken: () => {
    const [s, i, o, c, l] = ja();
    return {
      theme: s,
      realToken: i,
      hashId: o,
      token: c,
      cssVar: l
    };
  },
  useCSP: () => {
    const {
      csp: s
    } = On(Rn);
    return s ?? {};
  },
  getResetStyles: (s, i) => {
    var o;
    const c = u1(s);
    return [c, {
      "&": c
    }, yf((o = i == null ? void 0 : i.prefix.iconPrefixCls) !== null && o !== void 0 ? o : Da)];
  },
  getCommonStyle: f1,
  getCompUnitless: () => mf
}), d1 = (s, i) => {
  const [o, c] = ja();
  return Is({
    token: c,
    hashId: "",
    path: ["ant-design-icons", s],
    nonce: () => i == null ? void 0 : i.nonce,
    layer: {
      name: "antd"
    }
  }, () => [yf(s)]);
}, h1 = Object.assign({}, Z), {
  useId: Kc
} = h1, p1 = () => "", x1 = typeof Kc > "u" ? p1 : Kc;
function m1(s, i, o) {
  var c, l;
  const h = Sr("ConfigProvider"), g = s || {}, v = g.inherit === !1 || !i ? Object.assign(Object.assign({}, qs), {
    hashed: (c = i == null ? void 0 : i.hashed) !== null && c !== void 0 ? c : qs.hashed,
    cssVar: i == null ? void 0 : i.cssVar
  }) : i, b = x1();
  if (process.env.NODE_ENV !== "production") {
    const S = g.cssVar || v.cssVar, C = !!(typeof g.cssVar == "object" && (!((l = g.cssVar) === null || l === void 0) && l.key) || b);
    process.env.NODE_ENV !== "production" && h(!S || C, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return bu(() => {
    var S, C;
    if (!s)
      return i;
    const P = Object.assign({}, v.components);
    Object.keys(s.components || {}).forEach((V) => {
      P[V] = Object.assign(Object.assign({}, P[V]), s.components[V]);
    });
    const w = `css-var-${b.replace(/:/g, "")}`, U = ((S = g.cssVar) !== null && S !== void 0 ? S : v.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: o == null ? void 0 : o.prefixCls
    }, typeof v.cssVar == "object" ? v.cssVar : {}), typeof g.cssVar == "object" ? g.cssVar : {}), {
      key: typeof g.cssVar == "object" && ((C = g.cssVar) === null || C === void 0 ? void 0 : C.key) || w
    });
    return Object.assign(Object.assign(Object.assign({}, v), g), {
      token: Object.assign(Object.assign({}, v.token), g.token),
      components: P,
      cssVar: U
    });
  }, [g, v], (S, C) => S.some((P, w) => {
    const U = C[w];
    return !hp(P, U, !0);
  }));
}
var g1 = ["children"], bf = /* @__PURE__ */ Z.createContext({});
function v1(s) {
  var i = s.children, o = Hr(s, g1);
  return /* @__PURE__ */ Z.createElement(bf.Provider, {
    value: o
  }, i);
}
var y1 = /* @__PURE__ */ function(s) {
  Zr(o, s);
  var i = bi(o);
  function o() {
    return Jt(this, o), i.apply(this, arguments);
  }
  return Qt(o, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), o;
}(Z.Component);
function b1(s) {
  var i = Z.useReducer(function(v) {
    return v + 1;
  }, 0), o = Me(i, 2), c = o[1], l = Z.useRef(s), h = Xs(function() {
    return l.current;
  }), g = Xs(function(v) {
    l.current = typeof v == "function" ? v(l.current) : v, c();
  });
  return [h, g];
}
var En = "none", mo = "appear", go = "enter", vo = "leave", Gc = "none", Yt = "prepare", tr = "start", nr = "active", Ma = "end", Sf = "prepared";
function Zc(s, i) {
  var o = {};
  return o[s.toLowerCase()] = i.toLowerCase(), o["Webkit".concat(s)] = "webkit".concat(i), o["Moz".concat(s)] = "moz".concat(i), o["ms".concat(s)] = "MS".concat(i), o["O".concat(s)] = "o".concat(i.toLowerCase()), o;
}
function S1(s, i) {
  var o = {
    animationend: Zc("Animation", "AnimationEnd"),
    transitionend: Zc("Transition", "TransitionEnd")
  };
  return s && ("AnimationEvent" in i || delete o.animationend.animation, "TransitionEvent" in i || delete o.transitionend.transition), o;
}
var w1 = S1(bn(), typeof window < "u" ? window : {}), wf = {};
if (bn()) {
  var E1 = document.createElement("div");
  wf = E1.style;
}
var yo = {};
function Ef(s) {
  if (yo[s])
    return yo[s];
  var i = w1[s];
  if (i)
    for (var o = Object.keys(i), c = o.length, l = 0; l < c; l += 1) {
      var h = o[l];
      if (Object.prototype.hasOwnProperty.call(i, h) && h in wf)
        return yo[s] = i[h], yo[s];
    }
  return "";
}
var Cf = Ef("animationend"), Af = Ef("transitionend"), Tf = !!(Cf && Af), Jc = Cf || "animationend", Qc = Af || "transitionend";
function el(s, i) {
  if (!s) return null;
  if ($e(s) === "object") {
    var o = i.replace(/-\w/g, function(c) {
      return c[1].toUpperCase();
    });
    return s[o];
  }
  return "".concat(s, "-").concat(i);
}
const C1 = function(s) {
  var i = mt();
  function o(l) {
    l && (l.removeEventListener(Qc, s), l.removeEventListener(Jc, s));
  }
  function c(l) {
    i.current && i.current !== l && o(i.current), l && l !== i.current && (l.addEventListener(Qc, s), l.addEventListener(Jc, s), i.current = l);
  }
  return Z.useEffect(function() {
    return function() {
      o(i.current);
    };
  }, []), [c, o];
};
var Of = bn() ? Pd : _t;
const A1 = function() {
  var s = Z.useRef(null);
  function i() {
    Yo.cancel(s.current);
  }
  function o(c) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    i();
    var h = Yo(function() {
      l <= 1 ? c({
        isCanceled: function() {
          return h !== s.current;
        }
      }) : o(c, l - 1);
    });
    s.current = h;
  }
  return Z.useEffect(function() {
    return function() {
      i();
    };
  }, []), [o, i];
};
var T1 = [Yt, tr, nr, Ma], O1 = [Yt, Sf], Rf = !1, R1 = !0;
function kf(s) {
  return s === nr || s === Ma;
}
const k1 = function(s, i, o) {
  var c = Ks(Gc), l = Me(c, 2), h = l[0], g = l[1], v = A1(), b = Me(v, 2), S = b[0], C = b[1];
  function P() {
    g(Yt, !0);
  }
  var w = i ? O1 : T1;
  return Of(function() {
    if (h !== Gc && h !== Ma) {
      var U = w.indexOf(h), V = w[U + 1], D = o(h);
      D === Rf ? g(V, !0) : V && S(function(L) {
        function K() {
          L.isCanceled() || g(V, !0);
        }
        D === !0 ? K() : Promise.resolve(D).then(K);
      });
    }
  }, [s, h]), Z.useEffect(function() {
    return function() {
      C();
    };
  }, []), [P, h];
};
function P1(s, i, o, c) {
  var l = c.motionEnter, h = l === void 0 ? !0 : l, g = c.motionAppear, v = g === void 0 ? !0 : g, b = c.motionLeave, S = b === void 0 ? !0 : b, C = c.motionDeadline, P = c.motionLeaveImmediately, w = c.onAppearPrepare, U = c.onEnterPrepare, V = c.onLeavePrepare, D = c.onAppearStart, L = c.onEnterStart, K = c.onLeaveStart, $ = c.onAppearActive, _ = c.onEnterActive, J = c.onLeaveActive, q = c.onAppearEnd, te = c.onEnterEnd, Q = c.onLeaveEnd, ae = c.onVisibleChanged, fe = Ks(), Se = Me(fe, 2), De = Se[0], Ee = Se[1], de = b1(En), ye = Me(de, 2), me = ye[0], Ie = ye[1], Ae = Ks(null), Re = Me(Ae, 2), Te = Re[0], Pe = Re[1], Ce = me(), pe = mt(!1), be = mt(null);
  function Oe() {
    return o();
  }
  var ke = mt(!1);
  function Fe() {
    Ie(En), Pe(null, !0);
  }
  var re = Xs(function(st) {
    var Ge = me();
    if (Ge !== En) {
      var bt = Oe();
      if (!(st && !st.deadline && st.target !== bt)) {
        var qt = ke.current, zt;
        Ge === mo && qt ? zt = q == null ? void 0 : q(bt, st) : Ge === go && qt ? zt = te == null ? void 0 : te(bt, st) : Ge === vo && qt && (zt = Q == null ? void 0 : Q(bt, st)), qt && zt !== !1 && Fe();
      }
    }
  }), he = C1(re), ne = Me(he, 1), ie = ne[0], X = function(Ge) {
    switch (Ge) {
      case mo:
        return ve(ve(ve({}, Yt, w), tr, D), nr, $);
      case go:
        return ve(ve(ve({}, Yt, U), tr, L), nr, _);
      case vo:
        return ve(ve(ve({}, Yt, V), tr, K), nr, J);
      default:
        return {};
    }
  }, le = Z.useMemo(function() {
    return X(Ce);
  }, [Ce]), tt = k1(Ce, !s, function(st) {
    if (st === Yt) {
      var Ge = le[Yt];
      return Ge ? Ge(Oe()) : Rf;
    }
    if (Qe in le) {
      var bt;
      Pe(((bt = le[Qe]) === null || bt === void 0 ? void 0 : bt.call(le, Oe(), null)) || null);
    }
    return Qe === nr && Ce !== En && (ie(Oe()), C > 0 && (clearTimeout(be.current), be.current = setTimeout(function() {
      re({
        deadline: !0
      });
    }, C))), Qe === Sf && Fe(), R1;
  }), se = Me(tt, 2), Je = se[0], Qe = se[1], Ft = kf(Qe);
  ke.current = Ft;
  var tn = mt(null);
  Of(function() {
    if (!(pe.current && tn.current === i)) {
      Ee(i);
      var st = pe.current;
      pe.current = !0;
      var Ge;
      !st && i && v && (Ge = mo), st && i && h && (Ge = go), (st && !i && S || !st && P && !i && S) && (Ge = vo);
      var bt = X(Ge);
      Ge && (s || bt[Yt]) ? (Ie(Ge), Je()) : Ie(En), tn.current = i;
    }
  }, [i]), _t(function() {
    // Cancel appear
    (Ce === mo && !v || // Cancel enter
    Ce === go && !h || // Cancel leave
    Ce === vo && !S) && Ie(En);
  }, [v, h, S]), _t(function() {
    return function() {
      pe.current = !1, clearTimeout(be.current);
    };
  }, []);
  var Lt = Z.useRef(!1);
  _t(function() {
    De && (Lt.current = !0), De !== void 0 && Ce === En && ((Lt.current || De) && (ae == null || ae(De)), Lt.current = !0);
  }, [De, Ce]);
  var nn = Te;
  return le[Yt] && Qe === tr && (nn = xe({
    transition: "none"
  }, nn)), [Ce, Qe, nn, De ?? i];
}
function I1(s) {
  var i = s;
  $e(s) === "object" && (i = s.transitionSupport);
  function o(l, h) {
    return !!(l.motionName && i && h !== !1);
  }
  var c = /* @__PURE__ */ Z.forwardRef(function(l, h) {
    var g = l.visible, v = g === void 0 ? !0 : g, b = l.removeOnLeave, S = b === void 0 ? !0 : b, C = l.forceRender, P = l.children, w = l.motionName, U = l.leavedClassName, V = l.eventProps, D = Z.useContext(bf), L = D.motion, K = o(l, L), $ = mt(), _ = mt();
    function J() {
      try {
        return $.current instanceof HTMLElement ? $.current : Zh(_.current);
      } catch {
        return null;
      }
    }
    var q = P1(K, v, J, l), te = Me(q, 4), Q = te[0], ae = te[1], fe = te[2], Se = te[3], De = Z.useRef(Se);
    Se && (De.current = !0);
    var Ee = Z.useCallback(function(Re) {
      $.current = Re, Su(h, Re);
    }, [h]), de, ye = xe(xe({}, V), {}, {
      visible: v
    });
    if (!P)
      de = null;
    else if (Q === En)
      Se ? de = P(xe({}, ye), Ee) : !S && De.current && U ? de = P(xe(xe({}, ye), {}, {
        className: U
      }), Ee) : C || !S && !U ? de = P(xe(xe({}, ye), {}, {
        style: {
          display: "none"
        }
      }), Ee) : de = null;
    else {
      var me;
      ae === Yt ? me = "prepare" : kf(ae) ? me = "active" : ae === tr && (me = "start");
      var Ie = el(w, "".concat(Q, "-").concat(me));
      de = P(xe(xe({}, ye), {}, {
        className: Tt(el(w, Q), ve(ve({}, Ie, Ie && me), w, typeof w == "string")),
        style: fe
      }), Ee);
    }
    if (/* @__PURE__ */ Z.isValidElement(de) && rp(de)) {
      var Ae = op(de);
      Ae || (de = /* @__PURE__ */ Z.cloneElement(de, {
        ref: Ee
      }));
    }
    return /* @__PURE__ */ Z.createElement(y1, {
      ref: _
    }, de);
  });
  return c.displayName = "CSSMotion", c;
}
const Pf = I1(Tf);
var Zs = "add", Js = "keep", Qs = "remove", ns = "removed";
function _1(s) {
  var i;
  return s && $e(s) === "object" && "key" in s ? i = s : i = {
    key: s
  }, xe(xe({}, i), {}, {
    key: String(i.key)
  });
}
function ea() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return s.map(_1);
}
function N1() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], o = [], c = 0, l = i.length, h = ea(s), g = ea(i);
  h.forEach(function(S) {
    for (var C = !1, P = c; P < l; P += 1) {
      var w = g[P];
      if (w.key === S.key) {
        c < P && (o = o.concat(g.slice(c, P).map(function(U) {
          return xe(xe({}, U), {}, {
            status: Zs
          });
        })), c = P), o.push(xe(xe({}, w), {}, {
          status: Js
        })), c += 1, C = !0;
        break;
      }
    }
    C || o.push(xe(xe({}, S), {}, {
      status: Qs
    }));
  }), c < l && (o = o.concat(g.slice(c).map(function(S) {
    return xe(xe({}, S), {}, {
      status: Zs
    });
  })));
  var v = {};
  o.forEach(function(S) {
    var C = S.key;
    v[C] = (v[C] || 0) + 1;
  });
  var b = Object.keys(v).filter(function(S) {
    return v[S] > 1;
  });
  return b.forEach(function(S) {
    o = o.filter(function(C) {
      var P = C.key, w = C.status;
      return P !== S || w !== Qs;
    }), o.forEach(function(C) {
      C.key === S && (C.status = Js);
    });
  }), o;
}
var D1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], j1 = ["status"], L1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function M1(s) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pf, o = /* @__PURE__ */ function(c) {
    Zr(h, c);
    var l = bi(h);
    function h() {
      var g;
      Jt(this, h);
      for (var v = arguments.length, b = new Array(v), S = 0; S < v; S++)
        b[S] = arguments[S];
      return g = l.call.apply(l, [this].concat(b)), ve(qn(g), "state", {
        keyEntities: []
      }), ve(qn(g), "removeKey", function(C) {
        g.setState(function(P) {
          var w = P.keyEntities.map(function(U) {
            return U.key !== C ? U : xe(xe({}, U), {}, {
              status: ns
            });
          });
          return {
            keyEntities: w
          };
        }, function() {
          var P = g.state.keyEntities, w = P.filter(function(U) {
            var V = U.status;
            return V !== ns;
          }).length;
          w === 0 && g.props.onAllRemoved && g.props.onAllRemoved();
        });
      }), g;
    }
    return Qt(h, [{
      key: "render",
      value: function() {
        var v = this, b = this.state.keyEntities, S = this.props, C = S.component, P = S.children, w = S.onVisibleChanged;
        S.onAllRemoved;
        var U = Hr(S, D1), V = C || Z.Fragment, D = {};
        return L1.forEach(function(L) {
          D[L] = U[L], delete U[L];
        }), delete U.keys, /* @__PURE__ */ Z.createElement(V, U, b.map(function(L, K) {
          var $ = L.status, _ = Hr(L, j1), J = $ === Zs || $ === Js;
          return /* @__PURE__ */ Z.createElement(i, fn({}, D, {
            key: _.key,
            visible: J,
            eventProps: _,
            onVisibleChanged: function(te) {
              w == null || w(te, {
                key: _.key
              }), te || v.removeKey(_.key);
            }
          }), function(q, te) {
            return P(xe(xe({}, q), {}, {
              index: K
            }), te);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(v, b) {
        var S = v.keys, C = b.keyEntities, P = ea(S), w = N1(C, P);
        return {
          keyEntities: w.filter(function(U) {
            var V = C.find(function(D) {
              var L = D.key;
              return U.key === L;
            });
            return !(V && V.status === ns && U.status === Qs);
          })
        };
      }
    }]), h;
  }(Z.Component);
  return ve(o, "defaultProps", {
    component: "div"
  }), o;
}
M1(Tf);
function B1(s) {
  const {
    children: i
  } = s, [, o] = ja(), {
    motion: c
  } = o, l = Z.useRef(!1);
  return l.current = l.current || c === !1, l.current ? /* @__PURE__ */ Z.createElement(v1, {
    motion: c
  }, i) : i;
}
const If = /* @__PURE__ */ Z.memo((s) => {
  let {
    dropdownMatchSelectWidth: i
  } = s;
  return Sr("ConfigProvider").deprecated(i === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (If.displayName = "PropWarning");
const F1 = process.env.NODE_ENV !== "production" ? If : () => null;
var z1 = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
let ta = !1;
process.env.NODE_ENV;
const V1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let _f;
function H1() {
  return _f || $s;
}
function U1(s) {
  return Object.keys(s).some((i) => i.endsWith("Color"));
}
const W1 = (s) => {
  const {
    prefixCls: i,
    iconPrefixCls: o,
    theme: c,
    holderRender: l
  } = s;
  i !== void 0 && (_f = i), c && U1(c) && (process.env.NODE_ENV !== "production" && Ai(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ux(H1(), c));
}, q1 = (s) => {
  const {
    children: i,
    csp: o,
    autoInsertSpaceInButton: c,
    alert: l,
    anchor: h,
    form: g,
    locale: v,
    componentSize: b,
    direction: S,
    space: C,
    splitter: P,
    virtual: w,
    dropdownMatchSelectWidth: U,
    popupMatchSelectWidth: V,
    popupOverflow: D,
    legacyLocale: L,
    parentContext: K,
    iconPrefixCls: $,
    theme: _,
    componentDisabled: J,
    segmented: q,
    statistic: te,
    spin: Q,
    calendar: ae,
    carousel: fe,
    cascader: Se,
    collapse: De,
    typography: Ee,
    checkbox: de,
    descriptions: ye,
    divider: me,
    drawer: Ie,
    skeleton: Ae,
    steps: Re,
    image: Te,
    layout: Pe,
    list: Ce,
    mentions: pe,
    modal: be,
    progress: Oe,
    result: ke,
    slider: Fe,
    breadcrumb: re,
    menu: he,
    pagination: ne,
    input: ie,
    textArea: X,
    empty: le,
    badge: tt,
    radio: se,
    rate: Je,
    switch: Qe,
    transfer: Ft,
    avatar: tn,
    message: Lt,
    tag: nn,
    table: st,
    card: Ge,
    tabs: bt,
    timeline: qt,
    timePicker: zt,
    upload: In,
    notification: _n,
    tree: Zn,
    colorPicker: Nn,
    datePicker: Dn,
    rangePicker: ce,
    flex: Y,
    wave: Ye,
    dropdown: _e,
    warning: ut,
    tour: Xe,
    tooltip: ft,
    popover: gt,
    popconfirm: dn,
    floatButtonGroup: Mt,
    variant: hn,
    inputNumber: jn,
    treeSelect: St
  } = s, Ot = Z.useCallback((nt, F) => {
    const {
      prefixCls: oe
    } = s;
    if (F)
      return F;
    const ue = oe || K.getPrefixCls("");
    return nt ? `${ue}-${nt}` : ue;
  }, [K.getPrefixCls, s.prefixCls]), wt = $ || K.iconPrefixCls || Da, rn = o || K.csp;
  d1(wt, rn);
  const Rt = m1(_, K.theme, {
    prefixCls: Ot("")
  });
  process.env.NODE_ENV !== "production" && (ta = ta || !!Rt);
  const Sn = {
    csp: rn,
    autoInsertSpaceInButton: c,
    alert: l,
    anchor: h,
    locale: v || L,
    direction: S,
    space: C,
    splitter: P,
    virtual: w,
    popupMatchSelectWidth: V ?? U,
    popupOverflow: D,
    getPrefixCls: Ot,
    iconPrefixCls: wt,
    theme: Rt,
    segmented: q,
    statistic: te,
    spin: Q,
    calendar: ae,
    carousel: fe,
    cascader: Se,
    collapse: De,
    typography: Ee,
    checkbox: de,
    descriptions: ye,
    divider: me,
    drawer: Ie,
    skeleton: Ae,
    steps: Re,
    image: Te,
    input: ie,
    textArea: X,
    layout: Pe,
    list: Ce,
    mentions: pe,
    modal: be,
    progress: Oe,
    result: ke,
    slider: Fe,
    breadcrumb: re,
    menu: he,
    pagination: ne,
    empty: le,
    badge: tt,
    radio: se,
    rate: Je,
    switch: Qe,
    transfer: Ft,
    avatar: tn,
    message: Lt,
    tag: nn,
    table: st,
    card: Ge,
    tabs: bt,
    timeline: qt,
    timePicker: zt,
    upload: In,
    notification: _n,
    tree: Zn,
    colorPicker: Nn,
    datePicker: Dn,
    rangePicker: ce,
    flex: Y,
    wave: Ye,
    dropdown: _e,
    warning: ut,
    tour: Xe,
    tooltip: ft,
    popover: gt,
    popconfirm: dn,
    floatButtonGroup: Mt,
    variant: hn,
    inputNumber: jn,
    treeSelect: St
  };
  process.env.NODE_ENV !== "production" && Sr("ConfigProvider")(!("autoInsertSpaceInButton" in s), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ct = Object.assign({}, K);
  Object.keys(Sn).forEach((nt) => {
    Sn[nt] !== void 0 && (Ct[nt] = Sn[nt]);
  }), V1.forEach((nt) => {
    const F = s[nt];
    F && (Ct[nt] = F);
  }), typeof c < "u" && (Ct.button = Object.assign({
    autoInsertSpace: c
  }, Ct.button));
  const kt = bu(() => Ct, Ct, (nt, F) => {
    const oe = Object.keys(nt), ue = Object.keys(F);
    return oe.length !== ue.length || oe.some((we) => nt[we] !== F[we]);
  }), {
    layer: Tr
  } = Z.useContext(Jr), to = Z.useMemo(() => ({
    prefixCls: wt,
    csp: rn,
    layer: Tr ? "antd" : void 0
  }), [wt, rn, Tr]);
  let xt = /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(F1, {
    dropdownMatchSelectWidth: U
  }), i);
  const no = Z.useMemo(() => {
    var nt, F, oe, ue;
    return Sx(((nt = Ti.Form) === null || nt === void 0 ? void 0 : nt.defaultValidateMessages) || {}, ((oe = (F = kt.locale) === null || F === void 0 ? void 0 : F.Form) === null || oe === void 0 ? void 0 : oe.defaultValidateMessages) || {}, ((ue = kt.form) === null || ue === void 0 ? void 0 : ue.validateMessages) || {}, (g == null ? void 0 : g.validateMessages) || {});
  }, [kt, g == null ? void 0 : g.validateMessages]);
  Object.keys(no).length > 0 && (xt = /* @__PURE__ */ Z.createElement(Ex.Provider, {
    value: no
  }, xt)), v && (xt = /* @__PURE__ */ Z.createElement(of, {
    locale: v,
    _ANT_MARK__: rf
  }, xt)), xt = /* @__PURE__ */ Z.createElement(_a.Provider, {
    value: to
  }, xt), b && (xt = /* @__PURE__ */ Z.createElement(qx, {
    size: b
  }, xt)), xt = /* @__PURE__ */ Z.createElement(B1, null, xt);
  const Li = Z.useMemo(() => {
    const nt = Rt || {}, {
      algorithm: F,
      token: oe,
      components: ue,
      cssVar: we
    } = nt, Ve = z1(nt, ["algorithm", "token", "components", "cssVar"]), He = F && (!Array.isArray(F) || F.length > 0) ? Ts(F) : lf, Be = {};
    Object.entries(ue || {}).forEach((Et) => {
      let [et, rt] = Et;
      const ot = Object.assign({}, rt);
      "algorithm" in ot && (ot.algorithm === !0 ? ot.theme = He : (Array.isArray(ot.algorithm) || typeof ot.algorithm == "function") && (ot.theme = Ts(ot.algorithm)), delete ot.algorithm), Be[et] = ot;
    });
    const Le = Object.assign(Object.assign({}, Wr), oe);
    return Object.assign(Object.assign({}, Ve), {
      theme: He,
      token: Le,
      components: Be,
      override: Object.assign({
        override: Le
      }, Be),
      cssVar: we
    });
  }, [Rt]);
  return _ && (xt = /* @__PURE__ */ Z.createElement(uf.Provider, {
    value: Li
  }, xt)), kt.warning && (xt = /* @__PURE__ */ Z.createElement(tf.Provider, {
    value: kt.warning
  }, xt)), J !== void 0 && (xt = /* @__PURE__ */ Z.createElement(Wx, {
    disabled: J
  }, xt)), /* @__PURE__ */ Z.createElement(Rn.Provider, {
    value: kt
  }, xt);
}, wr = (s) => {
  const i = Z.useContext(Rn), o = Z.useContext(nf);
  return /* @__PURE__ */ Z.createElement(q1, Object.assign({
    parentContext: i,
    legacyLocale: o
  }, s));
};
wr.ConfigContext = Rn;
wr.SizeContext = $r;
wr.config = W1;
wr.useConfig = $x;
Object.defineProperty(wr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ai(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), $r)
});
process.env.NODE_ENV !== "production" && (wr.displayName = "ConfigProvider");
var $1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Nf(s) {
  var i;
  return s == null || (i = s.getRootNode) === null || i === void 0 ? void 0 : i.call(s);
}
function Y1(s) {
  return Nf(s) instanceof ShadowRoot;
}
function X1(s) {
  return Y1(s) ? Nf(s) : null;
}
function K1(s) {
  return s.replace(/-(.)/g, function(i, o) {
    return o.toUpperCase();
  });
}
function G1(s, i) {
  kn(s, "[@ant-design/icons] ".concat(i));
}
function tl(s) {
  return $e(s) === "object" && typeof s.name == "string" && typeof s.theme == "string" && ($e(s.icon) === "object" || typeof s.icon == "function");
}
function nl() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(s).reduce(function(i, o) {
    var c = s[o];
    switch (o) {
      case "class":
        i.className = c, delete i.class;
        break;
      default:
        delete i[o], i[K1(o)] = c;
    }
    return i;
  }, {});
}
function na(s, i, o) {
  return o ? /* @__PURE__ */ lt.createElement(s.tag, xe(xe({
    key: i
  }, nl(s.attrs)), o), (s.children || []).map(function(c, l) {
    return na(c, "".concat(i, "-").concat(s.tag, "-").concat(l));
  })) : /* @__PURE__ */ lt.createElement(s.tag, xe({
    key: i
  }, nl(s.attrs)), (s.children || []).map(function(c, l) {
    return na(c, "".concat(i, "-").concat(s.tag, "-").concat(l));
  }));
}
function Df(s) {
  return qr(s)[0];
}
function jf(s) {
  return s ? Array.isArray(s) ? s : [s] : [];
}
var Z1 = `
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
`, J1 = function(i) {
  var o = On(_a), c = o.csp, l = o.prefixCls, h = o.layer, g = Z1;
  l && (g = g.replace(/anticon/g, l)), h && (g = "@layer ".concat(h, ` {
`).concat(g, `
}`)), _t(function() {
    var v = i.current, b = X1(v);
    $n(g, "@ant-design-icons", {
      prepend: !h,
      csp: c,
      attachTo: b
    });
  }, []);
}, Q1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Fr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function em(s) {
  var i = s.primaryColor, o = s.secondaryColor;
  Fr.primaryColor = i, Fr.secondaryColor = o || Df(i), Fr.calculated = !!o;
}
function tm() {
  return xe({}, Fr);
}
var Er = function(i) {
  var o = i.icon, c = i.className, l = i.onClick, h = i.style, g = i.primaryColor, v = i.secondaryColor, b = Hr(i, Q1), S = Z.useRef(), C = Fr;
  if (g && (C = {
    primaryColor: g,
    secondaryColor: v || Df(g)
  }), J1(S), G1(tl(o), "icon should be icon definiton, but got ".concat(o)), !tl(o))
    return null;
  var P = o;
  return P && typeof P.icon == "function" && (P = xe(xe({}, P), {}, {
    icon: P.icon(C.primaryColor, C.secondaryColor)
  })), na(P.icon, "svg-".concat(P.name), xe(xe({
    className: c,
    onClick: l,
    style: h,
    "data-icon": P.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, b), {}, {
    ref: S
  }));
};
Er.displayName = "IconReact";
Er.getTwoToneColors = tm;
Er.setTwoToneColors = em;
function Lf(s) {
  var i = jf(s), o = Me(i, 2), c = o[0], l = o[1];
  return Er.setTwoToneColors({
    primaryColor: c,
    secondaryColor: l
  });
}
function nm() {
  var s = Er.getTwoToneColors();
  return s.calculated ? [s.primaryColor, s.secondaryColor] : s.primaryColor;
}
var rm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Lf(Go.primary);
var Pn = /* @__PURE__ */ Z.forwardRef(function(s, i) {
  var o = s.className, c = s.icon, l = s.spin, h = s.rotate, g = s.tabIndex, v = s.onClick, b = s.twoToneColor, S = Hr(s, rm), C = Z.useContext(_a), P = C.prefixCls, w = P === void 0 ? "anticon" : P, U = C.rootClassName, V = Tt(U, w, ve(ve({}, "".concat(w, "-").concat(c.name), !!c.name), "".concat(w, "-spin"), !!l || c.name === "loading"), o), D = g;
  D === void 0 && v && (D = -1);
  var L = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0, K = jf(b), $ = Me(K, 2), _ = $[0], J = $[1];
  return /* @__PURE__ */ Z.createElement("span", fn({
    role: "img",
    "aria-label": c.name
  }, S, {
    ref: i,
    tabIndex: D,
    onClick: v,
    className: V
  }), /* @__PURE__ */ Z.createElement(Er, {
    icon: c,
    primaryColor: _,
    secondaryColor: J,
    style: L
  }));
});
Pn.displayName = "AntdIcon";
Pn.getTwoToneColor = nm;
Pn.setTwoToneColor = Lf;
var om = function(i, o) {
  return /* @__PURE__ */ Z.createElement(Pn, fn({}, i, {
    ref: o,
    icon: $1
  }));
}, Mf = /* @__PURE__ */ Z.forwardRef(om);
process.env.NODE_ENV !== "production" && (Mf.displayName = "CheckCircleFilled");
var im = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, sm = function(i, o) {
  return /* @__PURE__ */ Z.createElement(Pn, fn({}, i, {
    ref: o,
    icon: im
  }));
}, Bf = /* @__PURE__ */ Z.forwardRef(sm);
process.env.NODE_ENV !== "production" && (Bf.displayName = "CloseCircleFilled");
var am = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, cm = function(i, o) {
  return /* @__PURE__ */ Z.createElement(Pn, fn({}, i, {
    ref: o,
    icon: am
  }));
}, Ff = /* @__PURE__ */ Z.forwardRef(cm);
process.env.NODE_ENV !== "production" && (Ff.displayName = "CloseOutlined");
var lm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, um = function(i, o) {
  return /* @__PURE__ */ Z.createElement(Pn, fn({}, i, {
    ref: o,
    icon: lm
  }));
}, zf = /* @__PURE__ */ Z.forwardRef(um);
process.env.NODE_ENV !== "production" && (zf.displayName = "ExclamationCircleFilled");
var fm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, dm = function(i, o) {
  return /* @__PURE__ */ Z.createElement(Pn, fn({}, i, {
    ref: o,
    icon: fm
  }));
}, Vf = /* @__PURE__ */ Z.forwardRef(dm);
process.env.NODE_ENV !== "production" && (Vf.displayName = "InfoCircleFilled");
var hm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, pm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, xm = "".concat(hm, " ").concat(pm).split(/[\s\n]+/), mm = "aria-", gm = "data-";
function rl(s, i) {
  return s.indexOf(i) === 0;
}
function vm(s) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o;
  i === !1 ? o = {
    aria: !0,
    data: !0,
    attr: !0
  } : i === !0 ? o = {
    aria: !0
  } : o = xe({}, i);
  var c = {};
  return Object.keys(s).forEach(function(l) {
    // Aria
    (o.aria && (l === "role" || rl(l, mm)) || // Data
    o.data && rl(l, gm) || // Attr
    o.attr && xm.includes(l)) && (c[l] = s[l]);
  }), c;
}
const Hf = (s, i, o) => /* @__PURE__ */ lt.isValidElement(s) ? /* @__PURE__ */ lt.cloneElement(s, typeof o == "function" ? o(s.props || {}) : o) : i;
function ym(s, i) {
  return Hf(s, s, i);
}
const bo = (s, i, o, c, l) => ({
  background: s,
  border: `${Xo(c.lineWidth)} ${c.lineType} ${i}`,
  [`${l}-icon`]: {
    color: o
  }
}), bm = (s) => {
  const {
    componentCls: i,
    motionDurationSlow: o,
    marginXS: c,
    marginSM: l,
    fontSize: h,
    fontSizeLG: g,
    lineHeight: v,
    borderRadiusLG: b,
    motionEaseInOutCirc: S,
    withDescriptionIconSize: C,
    colorText: P,
    colorTextHeading: w,
    withDescriptionPadding: U,
    defaultPadding: V
  } = s;
  return {
    [i]: Object.assign(Object.assign({}, vf(s)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: V,
      wordWrap: "break-word",
      borderRadius: b,
      [`&${i}-rtl`]: {
        direction: "rtl"
      },
      [`${i}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${i}-icon`]: {
        marginInlineEnd: c,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: h,
        lineHeight: v
      },
      "&-message": {
        color: w
      },
      [`&${i}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${o} ${S}, opacity ${o} ${S},
        padding-top ${o} ${S}, padding-bottom ${o} ${S},
        margin-bottom ${o} ${S}`
      },
      [`&${i}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${i}-with-description`]: {
      alignItems: "flex-start",
      padding: U,
      [`${i}-icon`]: {
        marginInlineEnd: l,
        fontSize: C,
        lineHeight: 0
      },
      [`${i}-message`]: {
        display: "block",
        marginBottom: c,
        color: w,
        fontSize: g
      },
      [`${i}-description`]: {
        display: "block",
        color: P
      }
    },
    [`${i}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, Sm = (s) => {
  const {
    componentCls: i,
    colorSuccess: o,
    colorSuccessBorder: c,
    colorSuccessBg: l,
    colorWarning: h,
    colorWarningBorder: g,
    colorWarningBg: v,
    colorError: b,
    colorErrorBorder: S,
    colorErrorBg: C,
    colorInfo: P,
    colorInfoBorder: w,
    colorInfoBg: U
  } = s;
  return {
    [i]: {
      "&-success": bo(l, c, o, s, i),
      "&-info": bo(U, w, P, s, i),
      "&-warning": bo(v, g, h, s, i),
      "&-error": Object.assign(Object.assign({}, bo(C, S, b, s, i)), {
        [`${i}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, wm = (s) => {
  const {
    componentCls: i,
    iconCls: o,
    motionDurationMid: c,
    marginXS: l,
    fontSizeIcon: h,
    colorIcon: g,
    colorIconHover: v
  } = s;
  return {
    [i]: {
      "&-action": {
        marginInlineStart: l
      },
      [`${i}-close-icon`]: {
        marginInlineStart: l,
        padding: 0,
        overflow: "hidden",
        fontSize: h,
        lineHeight: Xo(h),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${o}-close`]: {
          color: g,
          transition: `color ${c}`,
          "&:hover": {
            color: v
          }
        }
      },
      "&-close-text": {
        color: g,
        transition: `color ${c}`,
        "&:hover": {
          color: v
        }
      }
    }
  };
}, Em = (s) => ({
  withDescriptionIconSize: s.fontSizeHeading3,
  defaultPadding: `${s.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${s.paddingMD}px ${s.paddingContentHorizontalLG}px`
}), Cm = La("Alert", (s) => [bm(s), Sm(s), wm(s)], Em);
var ol = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
const Am = {
  success: Mf,
  info: Vf,
  error: Bf,
  warning: zf
}, Tm = (s) => {
  const {
    icon: i,
    prefixCls: o,
    type: c
  } = s, l = Am[c] || null;
  return i ? Hf(i, /* @__PURE__ */ Z.createElement("span", {
    className: `${o}-icon`
  }, i), () => ({
    className: Tt(`${o}-icon`, i.props.className)
  })) : /* @__PURE__ */ Z.createElement(l, {
    className: `${o}-icon`
  });
}, Om = (s) => {
  const {
    isClosable: i,
    prefixCls: o,
    closeIcon: c,
    handleClose: l,
    ariaProps: h
  } = s, g = c === !0 || c === void 0 ? /* @__PURE__ */ Z.createElement(Ff, null) : c;
  return i ? /* @__PURE__ */ Z.createElement("button", Object.assign({
    type: "button",
    onClick: l,
    className: `${o}-close-icon`,
    tabIndex: 0
  }, h), g) : null;
}, Ba = /* @__PURE__ */ Z.forwardRef((s, i) => {
  const {
    description: o,
    prefixCls: c,
    message: l,
    banner: h,
    className: g,
    rootClassName: v,
    style: b,
    onMouseEnter: S,
    onMouseLeave: C,
    onClick: P,
    afterClose: w,
    showIcon: U,
    closable: V,
    closeText: D,
    closeIcon: L,
    action: K,
    id: $
  } = s, _ = ol(s, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [J, q] = Z.useState(!1);
  process.env.NODE_ENV !== "production" && Sr("Alert").deprecated(!D, "closeText", "closable.closeIcon");
  const te = Z.useRef(null);
  Z.useImperativeHandle(i, () => ({
    nativeElement: te.current
  }));
  const {
    getPrefixCls: Q,
    direction: ae,
    closable: fe,
    closeIcon: Se,
    className: De,
    style: Ee
  } = ff("alert"), de = Q("alert", c), [ye, me, Ie] = Cm(de), Ae = (ke) => {
    var Fe;
    q(!0), (Fe = s.onClose) === null || Fe === void 0 || Fe.call(s, ke);
  }, Re = Z.useMemo(() => s.type !== void 0 ? s.type : h ? "warning" : "info", [s.type, h]), Te = Z.useMemo(() => typeof V == "object" && V.closeIcon || D ? !0 : typeof V == "boolean" ? V : L !== !1 && L !== null && L !== void 0 ? !0 : !!fe, [D, L, V, fe]), Pe = h && U === void 0 ? !0 : U, Ce = Tt(de, `${de}-${Re}`, {
    [`${de}-with-description`]: !!o,
    [`${de}-no-icon`]: !Pe,
    [`${de}-banner`]: !!h,
    [`${de}-rtl`]: ae === "rtl"
  }, De, g, v, Ie, me), pe = vm(_, {
    aria: !0,
    data: !0
  }), be = Z.useMemo(() => typeof V == "object" && V.closeIcon ? V.closeIcon : D || (L !== void 0 ? L : typeof fe == "object" && fe.closeIcon ? fe.closeIcon : Se), [L, V, D, Se]), Oe = Z.useMemo(() => {
    const ke = V ?? fe;
    if (typeof ke == "object") {
      const {
        closeIcon: Fe
      } = ke;
      return ol(ke, ["closeIcon"]);
    }
    return {};
  }, [V, fe]);
  return ye(/* @__PURE__ */ Z.createElement(Pf, {
    visible: !J,
    motionName: `${de}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ke) => ({
      maxHeight: ke.offsetHeight
    }),
    onLeaveEnd: w
  }, (ke, Fe) => {
    let {
      className: re,
      style: he
    } = ke;
    return /* @__PURE__ */ Z.createElement("div", Object.assign({
      id: $,
      ref: np(te, Fe),
      "data-show": !J,
      className: Tt(Ce, re),
      style: Object.assign(Object.assign(Object.assign({}, Ee), b), he),
      onMouseEnter: S,
      onMouseLeave: C,
      onClick: P,
      role: "alert"
    }, pe), Pe ? /* @__PURE__ */ Z.createElement(Tm, {
      description: o,
      icon: s.icon,
      prefixCls: de,
      type: Re
    }) : null, /* @__PURE__ */ Z.createElement("div", {
      className: `${de}-content`
    }, l ? /* @__PURE__ */ Z.createElement("div", {
      className: `${de}-message`
    }, l) : null, o ? /* @__PURE__ */ Z.createElement("div", {
      className: `${de}-description`
    }, o) : null), K ? /* @__PURE__ */ Z.createElement("div", {
      className: `${de}-action`
    }, K) : null, /* @__PURE__ */ Z.createElement(Om, {
      isClosable: Te,
      prefixCls: de,
      closeIcon: be,
      handleClose: Ae,
      ariaProps: Oe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Ba.displayName = "Alert");
function Rm(s, i, o) {
  return i = fr(i), Eu(s, Aa() ? Reflect.construct(i, o || [], fr(s).constructor) : i.apply(s, o));
}
let km = /* @__PURE__ */ function(s) {
  function i() {
    var o;
    return Jt(this, i), o = Rm(this, i, arguments), o.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, o;
  }
  return Zr(i, s), Qt(i, [{
    key: "componentDidCatch",
    value: function(c, l) {
      this.setState({
        error: c,
        info: l
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: c,
        description: l,
        id: h,
        children: g
      } = this.props, {
        error: v,
        info: b
      } = this.state, S = (b == null ? void 0 : b.componentStack) || null, C = typeof c > "u" ? (v || "").toString() : c, P = typeof l > "u" ? S : l;
      return v ? /* @__PURE__ */ Z.createElement(Ba, {
        id: h,
        type: "error",
        message: C,
        description: /* @__PURE__ */ Z.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, P)
      }) : g;
    }
  }]);
}(Z.Component);
const Uf = Ba;
Uf.ErrorBoundary = km;
function Pm(s, i) {
  var o = Object.assign({}, s);
  return Array.isArray(i) && i.forEach(function(c) {
    delete o[c];
  }), o;
}
function Im(s, i, o) {
  var c = o || {}, l = c.noTrailing, h = l === void 0 ? !1 : l, g = c.noLeading, v = g === void 0 ? !1 : g, b = c.debounceMode, S = b === void 0 ? void 0 : b, C, P = !1, w = 0;
  function U() {
    C && clearTimeout(C);
  }
  function V(L) {
    var K = L || {}, $ = K.upcomingOnly, _ = $ === void 0 ? !1 : $;
    U(), P = !_;
  }
  function D() {
    for (var L = arguments.length, K = new Array(L), $ = 0; $ < L; $++)
      K[$] = arguments[$];
    var _ = this, J = Date.now() - w;
    if (P)
      return;
    function q() {
      w = Date.now(), i.apply(_, K);
    }
    function te() {
      C = void 0;
    }
    !v && S && !C && q(), U(), S === void 0 && J > s ? v ? (w = Date.now(), h || (C = setTimeout(S ? te : q, s))) : q() : h !== !0 && (C = setTimeout(S ? te : q, S === void 0 ? s - J : s));
  }
  return D.cancel = V, D;
}
function _m(s, i, o) {
  var c = {}, l = c.atBegin, h = l === void 0 ? !1 : l;
  return Im(s, i, {
    debounceMode: h !== !1
  });
}
function il(s) {
  return ["small", "middle", "large"].includes(s);
}
const Wf = ["wrap", "nowrap", "wrap-reverse"], qf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], $f = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Nm = (s, i) => {
  const o = i.wrap === !0 ? "wrap" : i.wrap;
  return {
    [`${s}-wrap-${o}`]: o && Wf.includes(o)
  };
}, Dm = (s, i) => {
  const o = {};
  return $f.forEach((c) => {
    o[`${s}-align-${c}`] = i.align === c;
  }), o[`${s}-align-stretch`] = !i.align && !!i.vertical, o;
}, jm = (s, i) => {
  const o = {};
  return qf.forEach((c) => {
    o[`${s}-justify-${c}`] = i.justify === c;
  }), o;
};
function Lm(s, i) {
  return Tt(Object.assign(Object.assign(Object.assign({}, Nm(s, i)), Dm(s, i)), jm(s, i)));
}
const Mm = (s) => {
  const {
    componentCls: i
  } = s;
  return {
    [i]: {
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
}, Bm = (s) => {
  const {
    componentCls: i
  } = s;
  return {
    [i]: {
      "&-gap-small": {
        gap: s.flexGapSM
      },
      "&-gap-middle": {
        gap: s.flexGap
      },
      "&-gap-large": {
        gap: s.flexGapLG
      }
    }
  };
}, Fm = (s) => {
  const {
    componentCls: i
  } = s, o = {};
  return Wf.forEach((c) => {
    o[`${i}-wrap-${c}`] = {
      flexWrap: c
    };
  }), o;
}, zm = (s) => {
  const {
    componentCls: i
  } = s, o = {};
  return $f.forEach((c) => {
    o[`${i}-align-${c}`] = {
      alignItems: c
    };
  }), o;
}, Vm = (s) => {
  const {
    componentCls: i
  } = s, o = {};
  return qf.forEach((c) => {
    o[`${i}-justify-${c}`] = {
      justifyContent: c
    };
  }), o;
}, Hm = () => ({}), Um = La("Flex", (s) => {
  const {
    paddingXS: i,
    padding: o,
    paddingLG: c
  } = s, l = Oi(s, {
    flexGapSM: i,
    flexGap: o,
    flexGapLG: c
  });
  return [Mm(l), Bm(l), Fm(l), zm(l), Vm(l)];
}, Hm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var Wm = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
const Yf = /* @__PURE__ */ lt.forwardRef((s, i) => {
  const {
    prefixCls: o,
    rootClassName: c,
    className: l,
    style: h,
    flex: g,
    gap: v,
    children: b,
    vertical: S = !1,
    component: C = "div"
  } = s, P = Wm(s, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: w,
    direction: U,
    getPrefixCls: V
  } = lt.useContext(Rn), D = V("flex", o), [L, K, $] = Um(D), _ = S ?? (w == null ? void 0 : w.vertical), J = Tt(l, c, w == null ? void 0 : w.className, D, K, $, Lm(D, s), {
    [`${D}-rtl`]: U === "rtl",
    [`${D}-gap-${v}`]: il(v),
    [`${D}-vertical`]: _
  }), q = Object.assign(Object.assign({}, w == null ? void 0 : w.style), h);
  return g && (q.flex = g), v && !il(v) && (q.gap = v), L(/* @__PURE__ */ lt.createElement(C, Object.assign({
    ref: i,
    className: J,
    style: q
  }, Pm(P, ["justify", "wrap", "align"])), b));
});
process.env.NODE_ENV !== "production" && (Yf.displayName = "Flex");
const Zo = 100, Xf = Zo / 5, Kf = Zo / 2 - Xf / 2, rs = Kf * 2 * Math.PI, sl = 50, al = (s) => {
  const {
    dotClassName: i,
    style: o,
    hasCircleCls: c
  } = s;
  return /* @__PURE__ */ Z.createElement("circle", {
    className: Tt(`${i}-circle`, {
      [`${i}-circle-bg`]: c
    }),
    r: Kf,
    cx: sl,
    cy: sl,
    strokeWidth: Xf,
    style: o
  });
}, qm = (s) => {
  let {
    percent: i,
    prefixCls: o
  } = s;
  const c = `${o}-dot`, l = `${c}-holder`, h = `${l}-hidden`, [g, v] = Z.useState(!1);
  Lu(() => {
    i !== 0 && v(!0);
  }, [i !== 0]);
  const b = Math.max(Math.min(i, 100), 0);
  if (!g)
    return null;
  const S = {
    strokeDashoffset: `${rs / 4}`,
    strokeDasharray: `${rs * b / 100} ${rs * (100 - b) / 100}`
  };
  return /* @__PURE__ */ Z.createElement("span", {
    className: Tt(l, `${c}-progress`, b <= 0 && h)
  }, /* @__PURE__ */ Z.createElement("svg", {
    viewBox: `0 0 ${Zo} ${Zo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": b
  }, /* @__PURE__ */ Z.createElement(al, {
    dotClassName: c,
    hasCircleCls: !0
  }), /* @__PURE__ */ Z.createElement(al, {
    dotClassName: c,
    style: S
  })));
};
function $m(s) {
  const {
    prefixCls: i,
    percent: o = 0
  } = s, c = `${i}-dot`, l = `${c}-holder`, h = `${l}-hidden`;
  return /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement("span", {
    className: Tt(l, o > 0 && h)
  }, /* @__PURE__ */ Z.createElement("span", {
    className: Tt(c, `${i}-dot-spin`)
  }, [1, 2, 3, 4].map((g) => /* @__PURE__ */ Z.createElement("i", {
    className: `${i}-dot-item`,
    key: g
  })))), /* @__PURE__ */ Z.createElement(qm, {
    prefixCls: i,
    percent: o
  }));
}
function Ym(s) {
  const {
    prefixCls: i,
    indicator: o,
    percent: c
  } = s, l = `${i}-dot`;
  return o && /* @__PURE__ */ Z.isValidElement(o) ? ym(o, {
    className: Tt(o.props.className, l),
    percent: c
  }) : /* @__PURE__ */ Z.createElement($m, {
    prefixCls: i,
    percent: c
  });
}
const Xm = new Ju("antSpinMove", {
  to: {
    opacity: 1
  }
}), Km = new Ju("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Gm = (s) => {
  const {
    componentCls: i,
    calc: o
  } = s;
  return {
    [i]: Object.assign(Object.assign({}, vf(s)), {
      position: "absolute",
      display: "none",
      color: s.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${s.motionDurationSlow} ${s.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${i}-text`]: {
        fontSize: s.fontSize,
        paddingTop: o(o(s.dotSize).sub(s.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: s.colorBgMask,
        zIndex: s.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${s.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [i]: {
          [`${i}-dot-holder`]: {
            color: s.colorWhite
          },
          [`${i}-text`]: {
            color: s.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${i}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: s.contentHeight,
          [`${i}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: o(s.dotSize).mul(-1).div(2).equal()
          },
          [`${i}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${s.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${i}-show-text ${i}-dot`]: {
            marginTop: o(s.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${i}-dot`]: {
              margin: o(s.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${i}-text`]: {
              paddingTop: o(o(s.dotSizeSM).sub(s.fontSize)).div(2).add(2).equal()
            },
            [`&${i}-show-text ${i}-dot`]: {
              marginTop: o(s.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${i}-dot`]: {
              margin: o(s.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${i}-text`]: {
              paddingTop: o(o(s.dotSizeLG).sub(s.fontSize)).div(2).add(2).equal()
            },
            [`&${i}-show-text ${i}-dot`]: {
              marginTop: o(s.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${i}-container`]: {
          position: "relative",
          transition: `opacity ${s.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: s.colorBgContainer,
            opacity: 0,
            transition: `all ${s.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${i}-blur`]: {
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
        color: s.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${i}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: s.dotSize,
        display: "inline-block",
        transition: `transform ${s.motionDurationSlow} ease, opacity ${s.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: s.colorPrimary,
        "&-hidden": {
          transform: "scale(0.3)",
          opacity: 0
        }
      },
      // progress
      // ------------------------------
      [`${i}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${i}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: s.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: o(s.dotSize).sub(o(s.marginXXS).div(2)).div(2).equal(),
          height: o(s.dotSize).sub(o(s.marginXXS).div(2)).div(2).equal(),
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
          animationName: Km,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((c) => `${c} ${s.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: s.colorFillSecondary
        }
      },
      // small
      [`&-sm ${i}-dot`]: {
        "&, &-holder": {
          fontSize: s.dotSizeSM
        }
      },
      [`&-sm ${i}-dot-holder`]: {
        i: {
          width: o(o(s.dotSizeSM).sub(o(s.marginXXS).div(2))).div(2).equal(),
          height: o(o(s.dotSizeSM).sub(o(s.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${i}-dot`]: {
        "&, &-holder": {
          fontSize: s.dotSizeLG
        }
      },
      [`&-lg ${i}-dot-holder`]: {
        i: {
          width: o(o(s.dotSizeLG).sub(s.marginXXS)).div(2).equal(),
          height: o(o(s.dotSizeLG).sub(s.marginXXS)).div(2).equal()
        }
      },
      [`&${i}-show-text ${i}-text`]: {
        display: "block"
      }
    })
  };
}, Zm = (s) => {
  const {
    controlHeightLG: i,
    controlHeight: o
  } = s;
  return {
    contentHeight: 400,
    dotSize: i / 2,
    dotSizeSM: i * 0.35,
    dotSizeLG: o
  };
}, Jm = La("Spin", (s) => {
  const i = Oi(s, {
    spinDotDefault: s.colorTextDescription
  });
  return [Gm(i)];
}, Zm), Qm = 200, cl = [[30, 0.05], [70, 0.03], [96, 0.01]];
function eg(s, i) {
  const [o, c] = Z.useState(0), l = Z.useRef(null), h = i === "auto";
  return Z.useEffect(() => (h && s && (c(0), l.current = setInterval(() => {
    c((g) => {
      const v = 100 - g;
      for (let b = 0; b < cl.length; b += 1) {
        const [S, C] = cl[b];
        if (g <= S)
          return g + v * C;
      }
      return g;
    });
  }, Qm)), () => {
    clearInterval(l.current);
  }), [h, s]), h ? o : i;
}
var tg = function(s, i) {
  var o = {};
  for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && i.indexOf(c) < 0 && (o[c] = s[c]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, c = Object.getOwnPropertySymbols(s); l < c.length; l++)
    i.indexOf(c[l]) < 0 && Object.prototype.propertyIsEnumerable.call(s, c[l]) && (o[c[l]] = s[c[l]]);
  return o;
};
let Gf;
function ng(s, i) {
  return !!s && !!i && !Number.isNaN(Number(i));
}
const zr = (s) => {
  var i;
  const {
    prefixCls: o,
    spinning: c = !0,
    delay: l = 0,
    className: h,
    rootClassName: g,
    size: v = "default",
    tip: b,
    wrapperClassName: S,
    style: C,
    children: P,
    fullscreen: w = !1,
    indicator: U,
    percent: V
  } = s, D = tg(s, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: L,
    direction: K,
    className: $,
    style: _,
    indicator: J
  } = ff("spin"), q = L("spin", o), [te, Q, ae] = Jm(q), [fe, Se] = Z.useState(() => c && !ng(c, l)), De = eg(fe, V);
  Z.useEffect(() => {
    if (c) {
      const Re = _m(l, () => {
        Se(!0);
      });
      return Re(), () => {
        var Te;
        (Te = Re == null ? void 0 : Re.cancel) === null || Te === void 0 || Te.call(Re);
      };
    }
    Se(!1);
  }, [l, c]);
  const Ee = Z.useMemo(() => typeof P < "u" && !w, [P, w]);
  if (process.env.NODE_ENV !== "production") {
    const Re = Sr("Spin");
    process.env.NODE_ENV !== "production" && Re(!b || Ee || w, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const de = Tt(q, $, {
    [`${q}-sm`]: v === "small",
    [`${q}-lg`]: v === "large",
    [`${q}-spinning`]: fe,
    [`${q}-show-text`]: !!b,
    [`${q}-rtl`]: K === "rtl"
  }, h, !w && g, Q, ae), ye = Tt(`${q}-container`, {
    [`${q}-blur`]: fe
  }), me = (i = U ?? J) !== null && i !== void 0 ? i : Gf, Ie = Object.assign(Object.assign({}, _), C), Ae = /* @__PURE__ */ Z.createElement("div", Object.assign({}, D, {
    style: Ie,
    className: de,
    "aria-live": "polite",
    "aria-busy": fe
  }), /* @__PURE__ */ Z.createElement(Ym, {
    prefixCls: q,
    indicator: me,
    percent: De
  }), b && (Ee || w) ? /* @__PURE__ */ Z.createElement("div", {
    className: `${q}-text`
  }, b) : null);
  return te(Ee ? /* @__PURE__ */ Z.createElement("div", Object.assign({}, D, {
    className: Tt(`${q}-nested-loading`, S, Q, ae)
  }), fe && /* @__PURE__ */ Z.createElement("div", {
    key: "loading"
  }, Ae), /* @__PURE__ */ Z.createElement("div", {
    className: ye,
    key: "container"
  }, P)) : w ? /* @__PURE__ */ Z.createElement("div", {
    className: Tt(`${q}-fullscreen`, {
      [`${q}-fullscreen-show`]: fe
    }, g, Q, ae)
  }, Ae) : Ae);
};
zr.setDefaultIndicator = (s) => {
  Gf = s;
};
process.env.NODE_ENV !== "production" && (zr.displayName = "Spin");
function Zf(s, i) {
  return function() {
    return s.apply(i, arguments);
  };
}
const { toString: rg } = Object.prototype, { getPrototypeOf: Fa } = Object, { iterator: Ri, toStringTag: Jf } = Symbol, ki = /* @__PURE__ */ ((s) => (i) => {
  const o = rg.call(i);
  return s[o] || (s[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), en = (s) => (s = s.toLowerCase(), (i) => ki(i) === s), Pi = (s) => (i) => typeof i === s, { isArray: Cr } = Array, Yr = Pi("undefined");
function og(s) {
  return s !== null && !Yr(s) && s.constructor !== null && !Yr(s.constructor) && Dt(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Qf = en("ArrayBuffer");
function ig(s) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(s) : i = s && s.buffer && Qf(s.buffer), i;
}
const sg = Pi("string"), Dt = Pi("function"), ed = Pi("number"), Ii = (s) => s !== null && typeof s == "object", ag = (s) => s === !0 || s === !1, Mo = (s) => {
  if (ki(s) !== "object")
    return !1;
  const i = Fa(s);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Jf in s) && !(Ri in s);
}, cg = en("Date"), lg = en("File"), ug = en("Blob"), fg = en("FileList"), dg = (s) => Ii(s) && Dt(s.pipe), hg = (s) => {
  let i;
  return s && (typeof FormData == "function" && s instanceof FormData || Dt(s.append) && ((i = ki(s)) === "formdata" || // detect form-data instance
  i === "object" && Dt(s.toString) && s.toString() === "[object FormData]"));
}, pg = en("URLSearchParams"), [xg, mg, gg, vg] = ["ReadableStream", "Request", "Response", "Headers"].map(en), yg = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(s, i, { allOwnKeys: o = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let c, l;
  if (typeof s != "object" && (s = [s]), Cr(s))
    for (c = 0, l = s.length; c < l; c++)
      i.call(null, s[c], c, s);
  else {
    const h = o ? Object.getOwnPropertyNames(s) : Object.keys(s), g = h.length;
    let v;
    for (c = 0; c < g; c++)
      v = h[c], i.call(null, s[v], v, s);
  }
}
function td(s, i) {
  i = i.toLowerCase();
  const o = Object.keys(s);
  let c = o.length, l;
  for (; c-- > 0; )
    if (l = o[c], i === l.toLowerCase())
      return l;
  return null;
}
const Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nd = (s) => !Yr(s) && s !== Vn;
function ra() {
  const { caseless: s } = nd(this) && this || {}, i = {}, o = (c, l) => {
    const h = s && td(i, l) || l;
    Mo(i[h]) && Mo(c) ? i[h] = ra(i[h], c) : Mo(c) ? i[h] = ra({}, c) : Cr(c) ? i[h] = c.slice() : i[h] = c;
  };
  for (let c = 0, l = arguments.length; c < l; c++)
    arguments[c] && Qr(arguments[c], o);
  return i;
}
const bg = (s, i, o, { allOwnKeys: c } = {}) => (Qr(i, (l, h) => {
  o && Dt(l) ? s[h] = Zf(l, o) : s[h] = l;
}, { allOwnKeys: c }), s), Sg = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), wg = (s, i, o, c) => {
  s.prototype = Object.create(i.prototype, c), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: i.prototype
  }), o && Object.assign(s.prototype, o);
}, Eg = (s, i, o, c) => {
  let l, h, g;
  const v = {};
  if (i = i || {}, s == null) return i;
  do {
    for (l = Object.getOwnPropertyNames(s), h = l.length; h-- > 0; )
      g = l[h], (!c || c(g, s, i)) && !v[g] && (i[g] = s[g], v[g] = !0);
    s = o !== !1 && Fa(s);
  } while (s && (!o || o(s, i)) && s !== Object.prototype);
  return i;
}, Cg = (s, i, o) => {
  s = String(s), (o === void 0 || o > s.length) && (o = s.length), o -= i.length;
  const c = s.indexOf(i, o);
  return c !== -1 && c === o;
}, Ag = (s) => {
  if (!s) return null;
  if (Cr(s)) return s;
  let i = s.length;
  if (!ed(i)) return null;
  const o = new Array(i);
  for (; i-- > 0; )
    o[i] = s[i];
  return o;
}, Tg = /* @__PURE__ */ ((s) => (i) => s && i instanceof s)(typeof Uint8Array < "u" && Fa(Uint8Array)), Og = (s, i) => {
  const c = (s && s[Ri]).call(s);
  let l;
  for (; (l = c.next()) && !l.done; ) {
    const h = l.value;
    i.call(s, h[0], h[1]);
  }
}, Rg = (s, i) => {
  let o;
  const c = [];
  for (; (o = s.exec(i)) !== null; )
    c.push(o);
  return c;
}, kg = en("HTMLFormElement"), Pg = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, c, l) {
    return c.toUpperCase() + l;
  }
), ll = (({ hasOwnProperty: s }) => (i, o) => s.call(i, o))(Object.prototype), Ig = en("RegExp"), rd = (s, i) => {
  const o = Object.getOwnPropertyDescriptors(s), c = {};
  Qr(o, (l, h) => {
    let g;
    (g = i(l, h, s)) !== !1 && (c[h] = g || l);
  }), Object.defineProperties(s, c);
}, _g = (s) => {
  rd(s, (i, o) => {
    if (Dt(s) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const c = s[o];
    if (Dt(c)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, Ng = (s, i) => {
  const o = {}, c = (l) => {
    l.forEach((h) => {
      o[h] = !0;
    });
  };
  return Cr(s) ? c(s) : c(String(s).split(i)), o;
}, Dg = () => {
}, jg = (s, i) => s != null && Number.isFinite(s = +s) ? s : i;
function Lg(s) {
  return !!(s && Dt(s.append) && s[Jf] === "FormData" && s[Ri]);
}
const Mg = (s) => {
  const i = new Array(10), o = (c, l) => {
    if (Ii(c)) {
      if (i.indexOf(c) >= 0)
        return;
      if (!("toJSON" in c)) {
        i[l] = c;
        const h = Cr(c) ? [] : {};
        return Qr(c, (g, v) => {
          const b = o(g, l + 1);
          !Yr(b) && (h[v] = b);
        }), i[l] = void 0, h;
      }
    }
    return c;
  };
  return o(s, 0);
}, Bg = en("AsyncFunction"), Fg = (s) => s && (Ii(s) || Dt(s)) && Dt(s.then) && Dt(s.catch), od = ((s, i) => s ? setImmediate : i ? ((o, c) => (Vn.addEventListener("message", ({ source: l, data: h }) => {
  l === Vn && h === o && c.length && c.shift()();
}, !1), (l) => {
  c.push(l), Vn.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  Dt(Vn.postMessage)
), zg = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vn) : typeof process < "u" && process.nextTick || od, Vg = (s) => s != null && Dt(s[Ri]), ee = {
  isArray: Cr,
  isArrayBuffer: Qf,
  isBuffer: og,
  isFormData: hg,
  isArrayBufferView: ig,
  isString: sg,
  isNumber: ed,
  isBoolean: ag,
  isObject: Ii,
  isPlainObject: Mo,
  isReadableStream: xg,
  isRequest: mg,
  isResponse: gg,
  isHeaders: vg,
  isUndefined: Yr,
  isDate: cg,
  isFile: lg,
  isBlob: ug,
  isRegExp: Ig,
  isFunction: Dt,
  isStream: dg,
  isURLSearchParams: pg,
  isTypedArray: Tg,
  isFileList: fg,
  forEach: Qr,
  merge: ra,
  extend: bg,
  trim: yg,
  stripBOM: Sg,
  inherits: wg,
  toFlatObject: Eg,
  kindOf: ki,
  kindOfTest: en,
  endsWith: Cg,
  toArray: Ag,
  forEachEntry: Og,
  matchAll: Rg,
  isHTMLForm: kg,
  hasOwnProperty: ll,
  hasOwnProp: ll,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rd,
  freezeMethods: _g,
  toObjectSet: Ng,
  toCamelCase: Pg,
  noop: Dg,
  toFiniteNumber: jg,
  findKey: td,
  global: Vn,
  isContextDefined: nd,
  isSpecCompliantForm: Lg,
  toJSONObject: Mg,
  isAsyncFn: Bg,
  isThenable: Fg,
  setImmediate: od,
  asap: zg,
  isIterable: Vg
};
function Ne(s, i, o, c, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", i && (this.code = i), o && (this.config = o), c && (this.request = c), l && (this.response = l, this.status = l.status ? l.status : null);
}
ee.inherits(Ne, Error, {
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
      config: ee.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const id = Ne.prototype, sd = {};
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
].forEach((s) => {
  sd[s] = { value: s };
});
Object.defineProperties(Ne, sd);
Object.defineProperty(id, "isAxiosError", { value: !0 });
Ne.from = (s, i, o, c, l, h) => {
  const g = Object.create(id);
  return ee.toFlatObject(s, g, function(b) {
    return b !== Error.prototype;
  }, (v) => v !== "isAxiosError"), Ne.call(g, s.message, i, o, c, l), g.cause = s, g.name = s.name, h && Object.assign(g, h), g;
};
const Hg = null;
function oa(s) {
  return ee.isPlainObject(s) || ee.isArray(s);
}
function ad(s) {
  return ee.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function ul(s, i, o) {
  return s ? s.concat(i).map(function(l, h) {
    return l = ad(l), !o && h ? "[" + l + "]" : l;
  }).join(o ? "." : "") : i;
}
function Ug(s) {
  return ee.isArray(s) && !s.some(oa);
}
const Wg = ee.toFlatObject(ee, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function _i(s, i, o) {
  if (!ee.isObject(s))
    throw new TypeError("target must be an object");
  i = i || new FormData(), o = ee.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, L) {
    return !ee.isUndefined(L[D]);
  });
  const c = o.metaTokens, l = o.visitor || C, h = o.dots, g = o.indexes, b = (o.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(i);
  if (!ee.isFunction(l))
    throw new TypeError("visitor must be a function");
  function S(V) {
    if (V === null) return "";
    if (ee.isDate(V))
      return V.toISOString();
    if (!b && ee.isBlob(V))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(V) || ee.isTypedArray(V) ? b && typeof Blob == "function" ? new Blob([V]) : Buffer.from(V) : V;
  }
  function C(V, D, L) {
    let K = V;
    if (V && !L && typeof V == "object") {
      if (ee.endsWith(D, "{}"))
        D = c ? D : D.slice(0, -2), V = JSON.stringify(V);
      else if (ee.isArray(V) && Ug(V) || (ee.isFileList(V) || ee.endsWith(D, "[]")) && (K = ee.toArray(V)))
        return D = ad(D), K.forEach(function(_, J) {
          !(ee.isUndefined(_) || _ === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            g === !0 ? ul([D], J, h) : g === null ? D : D + "[]",
            S(_)
          );
        }), !1;
    }
    return oa(V) ? !0 : (i.append(ul(L, D, h), S(V)), !1);
  }
  const P = [], w = Object.assign(Wg, {
    defaultVisitor: C,
    convertValue: S,
    isVisitable: oa
  });
  function U(V, D) {
    if (!ee.isUndefined(V)) {
      if (P.indexOf(V) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      P.push(V), ee.forEach(V, function(K, $) {
        (!(ee.isUndefined(K) || K === null) && l.call(
          i,
          K,
          ee.isString($) ? $.trim() : $,
          D,
          w
        )) === !0 && U(K, D ? D.concat($) : [$]);
      }), P.pop();
    }
  }
  if (!ee.isObject(s))
    throw new TypeError("data must be an object");
  return U(s), i;
}
function fl(s) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(c) {
    return i[c];
  });
}
function za(s, i) {
  this._pairs = [], s && _i(s, this, i);
}
const cd = za.prototype;
cd.append = function(i, o) {
  this._pairs.push([i, o]);
};
cd.toString = function(i) {
  const o = i ? function(c) {
    return i.call(this, c, fl);
  } : fl;
  return this._pairs.map(function(l) {
    return o(l[0]) + "=" + o(l[1]);
  }, "").join("&");
};
function qg(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ld(s, i, o) {
  if (!i)
    return s;
  const c = o && o.encode || qg;
  ee.isFunction(o) && (o = {
    serialize: o
  });
  const l = o && o.serialize;
  let h;
  if (l ? h = l(i, o) : h = ee.isURLSearchParams(i) ? i.toString() : new za(i, o).toString(c), h) {
    const g = s.indexOf("#");
    g !== -1 && (s = s.slice(0, g)), s += (s.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return s;
}
class dl {
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
  use(i, o, c) {
    return this.handlers.push({
      fulfilled: i,
      rejected: o,
      synchronous: c ? c.synchronous : !1,
      runWhen: c ? c.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
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
  forEach(i) {
    ee.forEach(this.handlers, function(c) {
      c !== null && i(c);
    });
  }
}
const ud = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $g = typeof URLSearchParams < "u" ? URLSearchParams : za, Yg = typeof FormData < "u" ? FormData : null, Xg = typeof Blob < "u" ? Blob : null, Kg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $g,
    FormData: Yg,
    Blob: Xg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Va = typeof window < "u" && typeof document < "u", ia = typeof navigator == "object" && navigator || void 0, Gg = Va && (!ia || ["ReactNative", "NativeScript", "NS"].indexOf(ia.product) < 0), Zg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Jg = Va && window.location.href || "http://localhost", Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Va,
  hasStandardBrowserEnv: Gg,
  hasStandardBrowserWebWorkerEnv: Zg,
  navigator: ia,
  origin: Jg
}, Symbol.toStringTag, { value: "Module" })), At = {
  ...Qg,
  ...Kg
};
function ev(s, i) {
  return _i(s, new At.classes.URLSearchParams(), Object.assign({
    visitor: function(o, c, l, h) {
      return At.isNode && ee.isBuffer(o) ? (this.append(c, o.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function tv(s) {
  return ee.matchAll(/\w+|\[(\w*)]/g, s).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function nv(s) {
  const i = {}, o = Object.keys(s);
  let c;
  const l = o.length;
  let h;
  for (c = 0; c < l; c++)
    h = o[c], i[h] = s[h];
  return i;
}
function fd(s) {
  function i(o, c, l, h) {
    let g = o[h++];
    if (g === "__proto__") return !0;
    const v = Number.isFinite(+g), b = h >= o.length;
    return g = !g && ee.isArray(l) ? l.length : g, b ? (ee.hasOwnProp(l, g) ? l[g] = [l[g], c] : l[g] = c, !v) : ((!l[g] || !ee.isObject(l[g])) && (l[g] = []), i(o, c, l[g], h) && ee.isArray(l[g]) && (l[g] = nv(l[g])), !v);
  }
  if (ee.isFormData(s) && ee.isFunction(s.entries)) {
    const o = {};
    return ee.forEachEntry(s, (c, l) => {
      i(tv(c), l, o, 0);
    }), o;
  }
  return null;
}
function rv(s, i, o) {
  if (ee.isString(s))
    try {
      return (i || JSON.parse)(s), ee.trim(s);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (o || JSON.stringify)(s);
}
const eo = {
  transitional: ud,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, o) {
    const c = o.getContentType() || "", l = c.indexOf("application/json") > -1, h = ee.isObject(i);
    if (h && ee.isHTMLForm(i) && (i = new FormData(i)), ee.isFormData(i))
      return l ? JSON.stringify(fd(i)) : i;
    if (ee.isArrayBuffer(i) || ee.isBuffer(i) || ee.isStream(i) || ee.isFile(i) || ee.isBlob(i) || ee.isReadableStream(i))
      return i;
    if (ee.isArrayBufferView(i))
      return i.buffer;
    if (ee.isURLSearchParams(i))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let v;
    if (h) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return ev(i, this.formSerializer).toString();
      if ((v = ee.isFileList(i)) || c.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return _i(
          v ? { "files[]": i } : i,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return h || l ? (o.setContentType("application/json", !1), rv(i)) : i;
  }],
  transformResponse: [function(i) {
    const o = this.transitional || eo.transitional, c = o && o.forcedJSONParsing, l = this.responseType === "json";
    if (ee.isResponse(i) || ee.isReadableStream(i))
      return i;
    if (i && ee.isString(i) && (c && !this.responseType || l)) {
      const g = !(o && o.silentJSONParsing) && l;
      try {
        return JSON.parse(i);
      } catch (v) {
        if (g)
          throw v.name === "SyntaxError" ? Ne.from(v, Ne.ERR_BAD_RESPONSE, this, null, this.response) : v;
      }
    }
    return i;
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
    FormData: At.classes.FormData,
    Blob: At.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ee.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  eo.headers[s] = {};
});
const ov = ee.toObjectSet([
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
]), iv = (s) => {
  const i = {};
  let o, c, l;
  return s && s.split(`
`).forEach(function(g) {
    l = g.indexOf(":"), o = g.substring(0, l).trim().toLowerCase(), c = g.substring(l + 1).trim(), !(!o || i[o] && ov[o]) && (o === "set-cookie" ? i[o] ? i[o].push(c) : i[o] = [c] : i[o] = i[o] ? i[o] + ", " + c : c);
  }), i;
}, hl = Symbol("internals");
function Nr(s) {
  return s && String(s).trim().toLowerCase();
}
function Bo(s) {
  return s === !1 || s == null ? s : ee.isArray(s) ? s.map(Bo) : String(s);
}
function sv(s) {
  const i = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = o.exec(s); )
    i[c[1]] = c[2];
  return i;
}
const av = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function os(s, i, o, c, l) {
  if (ee.isFunction(c))
    return c.call(this, i, o);
  if (l && (i = o), !!ee.isString(i)) {
    if (ee.isString(c))
      return i.indexOf(c) !== -1;
    if (ee.isRegExp(c))
      return c.test(i);
  }
}
function cv(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, o, c) => o.toUpperCase() + c);
}
function lv(s, i) {
  const o = ee.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(s, c + o, {
      value: function(l, h, g) {
        return this[c].call(this, i, l, h, g);
      },
      configurable: !0
    });
  });
}
let jt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, o, c) {
    const l = this;
    function h(v, b, S) {
      const C = Nr(b);
      if (!C)
        throw new Error("header name must be a non-empty string");
      const P = ee.findKey(l, C);
      (!P || l[P] === void 0 || S === !0 || S === void 0 && l[P] !== !1) && (l[P || b] = Bo(v));
    }
    const g = (v, b) => ee.forEach(v, (S, C) => h(S, C, b));
    if (ee.isPlainObject(i) || i instanceof this.constructor)
      g(i, o);
    else if (ee.isString(i) && (i = i.trim()) && !av(i))
      g(iv(i), o);
    else if (ee.isObject(i) && ee.isIterable(i)) {
      let v = {}, b, S;
      for (const C of i) {
        if (!ee.isArray(C))
          throw TypeError("Object iterator must return a key-value pair");
        v[S = C[0]] = (b = v[S]) ? ee.isArray(b) ? [...b, C[1]] : [b, C[1]] : C[1];
      }
      g(v, o);
    } else
      i != null && h(o, i, c);
    return this;
  }
  get(i, o) {
    if (i = Nr(i), i) {
      const c = ee.findKey(this, i);
      if (c) {
        const l = this[c];
        if (!o)
          return l;
        if (o === !0)
          return sv(l);
        if (ee.isFunction(o))
          return o.call(this, l, c);
        if (ee.isRegExp(o))
          return o.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, o) {
    if (i = Nr(i), i) {
      const c = ee.findKey(this, i);
      return !!(c && this[c] !== void 0 && (!o || os(this, this[c], c, o)));
    }
    return !1;
  }
  delete(i, o) {
    const c = this;
    let l = !1;
    function h(g) {
      if (g = Nr(g), g) {
        const v = ee.findKey(c, g);
        v && (!o || os(c, c[v], v, o)) && (delete c[v], l = !0);
      }
    }
    return ee.isArray(i) ? i.forEach(h) : h(i), l;
  }
  clear(i) {
    const o = Object.keys(this);
    let c = o.length, l = !1;
    for (; c--; ) {
      const h = o[c];
      (!i || os(this, this[h], h, i, !0)) && (delete this[h], l = !0);
    }
    return l;
  }
  normalize(i) {
    const o = this, c = {};
    return ee.forEach(this, (l, h) => {
      const g = ee.findKey(c, h);
      if (g) {
        o[g] = Bo(l), delete o[h];
        return;
      }
      const v = i ? cv(h) : String(h).trim();
      v !== h && delete o[h], o[v] = Bo(l), c[v] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const o = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (c, l) => {
      c != null && c !== !1 && (o[l] = i && ee.isArray(c) ? c.join(", ") : c);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, o]) => i + ": " + o).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...o) {
    const c = new this(i);
    return o.forEach((l) => c.set(l)), c;
  }
  static accessor(i) {
    const c = (this[hl] = this[hl] = {
      accessors: {}
    }).accessors, l = this.prototype;
    function h(g) {
      const v = Nr(g);
      c[v] || (lv(l, g), c[v] = !0);
    }
    return ee.isArray(i) ? i.forEach(h) : h(i), this;
  }
};
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(jt.prototype, ({ value: s }, i) => {
  let o = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => s,
    set(c) {
      this[o] = c;
    }
  };
});
ee.freezeMethods(jt);
function is(s, i) {
  const o = this || eo, c = i || o, l = jt.from(c.headers);
  let h = c.data;
  return ee.forEach(s, function(v) {
    h = v.call(o, h, l.normalize(), i ? i.status : void 0);
  }), l.normalize(), h;
}
function dd(s) {
  return !!(s && s.__CANCEL__);
}
function Ar(s, i, o) {
  Ne.call(this, s ?? "canceled", Ne.ERR_CANCELED, i, o), this.name = "CanceledError";
}
ee.inherits(Ar, Ne, {
  __CANCEL__: !0
});
function hd(s, i, o) {
  const c = o.config.validateStatus;
  !o.status || !c || c(o.status) ? s(o) : i(new Ne(
    "Request failed with status code " + o.status,
    [Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function uv(s) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return i && i[1] || "";
}
function fv(s, i) {
  s = s || 10;
  const o = new Array(s), c = new Array(s);
  let l = 0, h = 0, g;
  return i = i !== void 0 ? i : 1e3, function(b) {
    const S = Date.now(), C = c[h];
    g || (g = S), o[l] = b, c[l] = S;
    let P = h, w = 0;
    for (; P !== l; )
      w += o[P++], P = P % s;
    if (l = (l + 1) % s, l === h && (h = (h + 1) % s), S - g < i)
      return;
    const U = C && S - C;
    return U ? Math.round(w * 1e3 / U) : void 0;
  };
}
function dv(s, i) {
  let o = 0, c = 1e3 / i, l, h;
  const g = (S, C = Date.now()) => {
    o = C, l = null, h && (clearTimeout(h), h = null), s.apply(null, S);
  };
  return [(...S) => {
    const C = Date.now(), P = C - o;
    P >= c ? g(S, C) : (l = S, h || (h = setTimeout(() => {
      h = null, g(l);
    }, c - P)));
  }, () => l && g(l)];
}
const Jo = (s, i, o = 3) => {
  let c = 0;
  const l = fv(50, 250);
  return dv((h) => {
    const g = h.loaded, v = h.lengthComputable ? h.total : void 0, b = g - c, S = l(b), C = g <= v;
    c = g;
    const P = {
      loaded: g,
      total: v,
      progress: v ? g / v : void 0,
      bytes: b,
      rate: S || void 0,
      estimated: S && v && C ? (v - g) / S : void 0,
      event: h,
      lengthComputable: v != null,
      [i ? "download" : "upload"]: !0
    };
    s(P);
  }, o);
}, pl = (s, i) => {
  const o = s != null;
  return [(c) => i[0]({
    lengthComputable: o,
    total: s,
    loaded: c
  }), i[1]];
}, xl = (s) => (...i) => ee.asap(() => s(...i)), hv = At.hasStandardBrowserEnv ? /* @__PURE__ */ ((s, i) => (o) => (o = new URL(o, At.origin), s.protocol === o.protocol && s.host === o.host && (i || s.port === o.port)))(
  new URL(At.origin),
  At.navigator && /(msie|trident)/i.test(At.navigator.userAgent)
) : () => !0, pv = At.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, i, o, c, l, h) {
      const g = [s + "=" + encodeURIComponent(i)];
      ee.isNumber(o) && g.push("expires=" + new Date(o).toGMTString()), ee.isString(c) && g.push("path=" + c), ee.isString(l) && g.push("domain=" + l), h === !0 && g.push("secure"), document.cookie = g.join("; ");
    },
    read(s) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function xv(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function mv(s, i) {
  return i ? s.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : s;
}
function pd(s, i, o) {
  let c = !xv(i);
  return s && (c || o == !1) ? mv(s, i) : i;
}
const ml = (s) => s instanceof jt ? { ...s } : s;
function Gn(s, i) {
  i = i || {};
  const o = {};
  function c(S, C, P, w) {
    return ee.isPlainObject(S) && ee.isPlainObject(C) ? ee.merge.call({ caseless: w }, S, C) : ee.isPlainObject(C) ? ee.merge({}, C) : ee.isArray(C) ? C.slice() : C;
  }
  function l(S, C, P, w) {
    if (ee.isUndefined(C)) {
      if (!ee.isUndefined(S))
        return c(void 0, S, P, w);
    } else return c(S, C, P, w);
  }
  function h(S, C) {
    if (!ee.isUndefined(C))
      return c(void 0, C);
  }
  function g(S, C) {
    if (ee.isUndefined(C)) {
      if (!ee.isUndefined(S))
        return c(void 0, S);
    } else return c(void 0, C);
  }
  function v(S, C, P) {
    if (P in i)
      return c(S, C);
    if (P in s)
      return c(void 0, S);
  }
  const b = {
    url: h,
    method: h,
    data: h,
    baseURL: g,
    transformRequest: g,
    transformResponse: g,
    paramsSerializer: g,
    timeout: g,
    timeoutMessage: g,
    withCredentials: g,
    withXSRFToken: g,
    adapter: g,
    responseType: g,
    xsrfCookieName: g,
    xsrfHeaderName: g,
    onUploadProgress: g,
    onDownloadProgress: g,
    decompress: g,
    maxContentLength: g,
    maxBodyLength: g,
    beforeRedirect: g,
    transport: g,
    httpAgent: g,
    httpsAgent: g,
    cancelToken: g,
    socketPath: g,
    responseEncoding: g,
    validateStatus: v,
    headers: (S, C, P) => l(ml(S), ml(C), P, !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, s, i)), function(C) {
    const P = b[C] || l, w = P(s[C], i[C], C);
    ee.isUndefined(w) && P !== v || (o[C] = w);
  }), o;
}
const xd = (s) => {
  const i = Gn({}, s);
  let { data: o, withXSRFToken: c, xsrfHeaderName: l, xsrfCookieName: h, headers: g, auth: v } = i;
  i.headers = g = jt.from(g), i.url = ld(pd(i.baseURL, i.url, i.allowAbsoluteUrls), s.params, s.paramsSerializer), v && g.set(
    "Authorization",
    "Basic " + btoa((v.username || "") + ":" + (v.password ? unescape(encodeURIComponent(v.password)) : ""))
  );
  let b;
  if (ee.isFormData(o)) {
    if (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv)
      g.setContentType(void 0);
    else if ((b = g.getContentType()) !== !1) {
      const [S, ...C] = b ? b.split(";").map((P) => P.trim()).filter(Boolean) : [];
      g.setContentType([S || "multipart/form-data", ...C].join("; "));
    }
  }
  if (At.hasStandardBrowserEnv && (c && ee.isFunction(c) && (c = c(i)), c || c !== !1 && hv(i.url))) {
    const S = l && h && pv.read(h);
    S && g.set(l, S);
  }
  return i;
}, gv = typeof XMLHttpRequest < "u", vv = gv && function(s) {
  return new Promise(function(o, c) {
    const l = xd(s);
    let h = l.data;
    const g = jt.from(l.headers).normalize();
    let { responseType: v, onUploadProgress: b, onDownloadProgress: S } = l, C, P, w, U, V;
    function D() {
      U && U(), V && V(), l.cancelToken && l.cancelToken.unsubscribe(C), l.signal && l.signal.removeEventListener("abort", C);
    }
    let L = new XMLHttpRequest();
    L.open(l.method.toUpperCase(), l.url, !0), L.timeout = l.timeout;
    function K() {
      if (!L)
        return;
      const _ = jt.from(
        "getAllResponseHeaders" in L && L.getAllResponseHeaders()
      ), q = {
        data: !v || v === "text" || v === "json" ? L.responseText : L.response,
        status: L.status,
        statusText: L.statusText,
        headers: _,
        config: s,
        request: L
      };
      hd(function(Q) {
        o(Q), D();
      }, function(Q) {
        c(Q), D();
      }, q), L = null;
    }
    "onloadend" in L ? L.onloadend = K : L.onreadystatechange = function() {
      !L || L.readyState !== 4 || L.status === 0 && !(L.responseURL && L.responseURL.indexOf("file:") === 0) || setTimeout(K);
    }, L.onabort = function() {
      L && (c(new Ne("Request aborted", Ne.ECONNABORTED, s, L)), L = null);
    }, L.onerror = function() {
      c(new Ne("Network Error", Ne.ERR_NETWORK, s, L)), L = null;
    }, L.ontimeout = function() {
      let J = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
      const q = l.transitional || ud;
      l.timeoutErrorMessage && (J = l.timeoutErrorMessage), c(new Ne(
        J,
        q.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,
        s,
        L
      )), L = null;
    }, h === void 0 && g.setContentType(null), "setRequestHeader" in L && ee.forEach(g.toJSON(), function(J, q) {
      L.setRequestHeader(q, J);
    }), ee.isUndefined(l.withCredentials) || (L.withCredentials = !!l.withCredentials), v && v !== "json" && (L.responseType = l.responseType), S && ([w, V] = Jo(S, !0), L.addEventListener("progress", w)), b && L.upload && ([P, U] = Jo(b), L.upload.addEventListener("progress", P), L.upload.addEventListener("loadend", U)), (l.cancelToken || l.signal) && (C = (_) => {
      L && (c(!_ || _.type ? new Ar(null, s, L) : _), L.abort(), L = null);
    }, l.cancelToken && l.cancelToken.subscribe(C), l.signal && (l.signal.aborted ? C() : l.signal.addEventListener("abort", C)));
    const $ = uv(l.url);
    if ($ && At.protocols.indexOf($) === -1) {
      c(new Ne("Unsupported protocol " + $ + ":", Ne.ERR_BAD_REQUEST, s));
      return;
    }
    L.send(h || null);
  });
}, yv = (s, i) => {
  const { length: o } = s = s ? s.filter(Boolean) : [];
  if (i || o) {
    let c = new AbortController(), l;
    const h = function(S) {
      if (!l) {
        l = !0, v();
        const C = S instanceof Error ? S : this.reason;
        c.abort(C instanceof Ne ? C : new Ar(C instanceof Error ? C.message : C));
      }
    };
    let g = i && setTimeout(() => {
      g = null, h(new Ne(`timeout ${i} of ms exceeded`, Ne.ETIMEDOUT));
    }, i);
    const v = () => {
      s && (g && clearTimeout(g), g = null, s.forEach((S) => {
        S.unsubscribe ? S.unsubscribe(h) : S.removeEventListener("abort", h);
      }), s = null);
    };
    s.forEach((S) => S.addEventListener("abort", h));
    const { signal: b } = c;
    return b.unsubscribe = () => ee.asap(v), b;
  }
}, bv = function* (s, i) {
  let o = s.byteLength;
  if (o < i) {
    yield s;
    return;
  }
  let c = 0, l;
  for (; c < o; )
    l = c + i, yield s.slice(c, l), c = l;
}, Sv = async function* (s, i) {
  for await (const o of wv(s))
    yield* bv(o, i);
}, wv = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const i = s.getReader();
  try {
    for (; ; ) {
      const { done: o, value: c } = await i.read();
      if (o)
        break;
      yield c;
    }
  } finally {
    await i.cancel();
  }
}, gl = (s, i, o, c) => {
  const l = Sv(s, i);
  let h = 0, g, v = (b) => {
    g || (g = !0, c && c(b));
  };
  return new ReadableStream({
    async pull(b) {
      try {
        const { done: S, value: C } = await l.next();
        if (S) {
          v(), b.close();
          return;
        }
        let P = C.byteLength;
        if (o) {
          let w = h += P;
          o(w);
        }
        b.enqueue(new Uint8Array(C));
      } catch (S) {
        throw v(S), S;
      }
    },
    cancel(b) {
      return v(b), l.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ni = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", md = Ni && typeof ReadableStream == "function", Ev = Ni && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (i) => s.encode(i))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), gd = (s, ...i) => {
  try {
    return !!s(...i);
  } catch {
    return !1;
  }
}, Cv = md && gd(() => {
  let s = !1;
  const i = new Request(At.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !i;
}), vl = 64 * 1024, sa = md && gd(() => ee.isReadableStream(new Response("").body)), Qo = {
  stream: sa && ((s) => s.body)
};
Ni && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Qo[i] && (Qo[i] = ee.isFunction(s[i]) ? (o) => o[i]() : (o, c) => {
      throw new Ne(`Response type '${i}' is not supported`, Ne.ERR_NOT_SUPPORT, c);
    });
  });
})(new Response());
const Av = async (s) => {
  if (s == null)
    return 0;
  if (ee.isBlob(s))
    return s.size;
  if (ee.isSpecCompliantForm(s))
    return (await new Request(At.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (ee.isArrayBufferView(s) || ee.isArrayBuffer(s))
    return s.byteLength;
  if (ee.isURLSearchParams(s) && (s = s + ""), ee.isString(s))
    return (await Ev(s)).byteLength;
}, Tv = async (s, i) => {
  const o = ee.toFiniteNumber(s.getContentLength());
  return o ?? Av(i);
}, Ov = Ni && (async (s) => {
  let {
    url: i,
    method: o,
    data: c,
    signal: l,
    cancelToken: h,
    timeout: g,
    onDownloadProgress: v,
    onUploadProgress: b,
    responseType: S,
    headers: C,
    withCredentials: P = "same-origin",
    fetchOptions: w
  } = xd(s);
  S = S ? (S + "").toLowerCase() : "text";
  let U = yv([l, h && h.toAbortSignal()], g), V;
  const D = U && U.unsubscribe && (() => {
    U.unsubscribe();
  });
  let L;
  try {
    if (b && Cv && o !== "get" && o !== "head" && (L = await Tv(C, c)) !== 0) {
      let q = new Request(i, {
        method: "POST",
        body: c,
        duplex: "half"
      }), te;
      if (ee.isFormData(c) && (te = q.headers.get("content-type")) && C.setContentType(te), q.body) {
        const [Q, ae] = pl(
          L,
          Jo(xl(b))
        );
        c = gl(q.body, vl, Q, ae);
      }
    }
    ee.isString(P) || (P = P ? "include" : "omit");
    const K = "credentials" in Request.prototype;
    V = new Request(i, {
      ...w,
      signal: U,
      method: o.toUpperCase(),
      headers: C.normalize().toJSON(),
      body: c,
      duplex: "half",
      credentials: K ? P : void 0
    });
    let $ = await fetch(V);
    const _ = sa && (S === "stream" || S === "response");
    if (sa && (v || _ && D)) {
      const q = {};
      ["status", "statusText", "headers"].forEach((fe) => {
        q[fe] = $[fe];
      });
      const te = ee.toFiniteNumber($.headers.get("content-length")), [Q, ae] = v && pl(
        te,
        Jo(xl(v), !0)
      ) || [];
      $ = new Response(
        gl($.body, vl, Q, () => {
          ae && ae(), D && D();
        }),
        q
      );
    }
    S = S || "text";
    let J = await Qo[ee.findKey(Qo, S) || "text"]($, s);
    return !_ && D && D(), await new Promise((q, te) => {
      hd(q, te, {
        data: J,
        headers: jt.from($.headers),
        status: $.status,
        statusText: $.statusText,
        config: s,
        request: V
      });
    });
  } catch (K) {
    throw D && D(), K && K.name === "TypeError" && /Load failed|fetch/i.test(K.message) ? Object.assign(
      new Ne("Network Error", Ne.ERR_NETWORK, s, V),
      {
        cause: K.cause || K
      }
    ) : Ne.from(K, K && K.code, s, V);
  }
}), aa = {
  http: Hg,
  xhr: vv,
  fetch: Ov
};
ee.forEach(aa, (s, i) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: i });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: i });
  }
});
const yl = (s) => `- ${s}`, Rv = (s) => ee.isFunction(s) || s === null || s === !1, vd = {
  getAdapter: (s) => {
    s = ee.isArray(s) ? s : [s];
    const { length: i } = s;
    let o, c;
    const l = {};
    for (let h = 0; h < i; h++) {
      o = s[h];
      let g;
      if (c = o, !Rv(o) && (c = aa[(g = String(o)).toLowerCase()], c === void 0))
        throw new Ne(`Unknown adapter '${g}'`);
      if (c)
        break;
      l[g || "#" + h] = c;
    }
    if (!c) {
      const h = Object.entries(l).map(
        ([v, b]) => `adapter ${v} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let g = i ? h.length > 1 ? `since :
` + h.map(yl).join(`
`) : " " + yl(h[0]) : "as no adapter specified";
      throw new Ne(
        "There is no suitable adapter to dispatch the request " + g,
        "ERR_NOT_SUPPORT"
      );
    }
    return c;
  },
  adapters: aa
};
function ss(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new Ar(null, s);
}
function bl(s) {
  return ss(s), s.headers = jt.from(s.headers), s.data = is.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), vd.getAdapter(s.adapter || eo.adapter)(s).then(function(c) {
    return ss(s), c.data = is.call(
      s,
      s.transformResponse,
      c
    ), c.headers = jt.from(c.headers), c;
  }, function(c) {
    return dd(c) || (ss(s), c && c.response && (c.response.data = is.call(
      s,
      s.transformResponse,
      c.response
    ), c.response.headers = jt.from(c.response.headers))), Promise.reject(c);
  });
}
const yd = "1.9.0", Di = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, i) => {
  Di[s] = function(c) {
    return typeof c === s || "a" + (i < 1 ? "n " : " ") + s;
  };
});
const Sl = {};
Di.transitional = function(i, o, c) {
  function l(h, g) {
    return "[Axios v" + yd + "] Transitional option '" + h + "'" + g + (c ? ". " + c : "");
  }
  return (h, g, v) => {
    if (i === !1)
      throw new Ne(
        l(g, " has been removed" + (o ? " in " + o : "")),
        Ne.ERR_DEPRECATED
      );
    return o && !Sl[g] && (Sl[g] = !0, console.warn(
      l(
        g,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), i ? i(h, g, v) : !0;
  };
};
Di.spelling = function(i) {
  return (o, c) => (console.warn(`${c} is likely a misspelling of ${i}`), !0);
};
function kv(s, i, o) {
  if (typeof s != "object")
    throw new Ne("options must be an object", Ne.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(s);
  let l = c.length;
  for (; l-- > 0; ) {
    const h = c[l], g = i[h];
    if (g) {
      const v = s[h], b = v === void 0 || g(v, h, s);
      if (b !== !0)
        throw new Ne("option " + h + " must be " + b, Ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new Ne("Unknown option " + h, Ne.ERR_BAD_OPTION);
  }
}
const Fo = {
  assertOptions: kv,
  validators: Di
}, sn = Fo.validators;
let Xn = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new dl(),
      response: new dl()
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
  async request(i, o) {
    try {
      return await this._request(i, o);
    } catch (c) {
      if (c instanceof Error) {
        let l = {};
        Error.captureStackTrace ? Error.captureStackTrace(l) : l = new Error();
        const h = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          c.stack ? h && !String(c.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (c.stack += `
` + h) : c.stack = h;
        } catch {
        }
      }
      throw c;
    }
  }
  _request(i, o) {
    typeof i == "string" ? (o = o || {}, o.url = i) : o = i || {}, o = Gn(this.defaults, o);
    const { transitional: c, paramsSerializer: l, headers: h } = o;
    c !== void 0 && Fo.assertOptions(c, {
      silentJSONParsing: sn.transitional(sn.boolean),
      forcedJSONParsing: sn.transitional(sn.boolean),
      clarifyTimeoutError: sn.transitional(sn.boolean)
    }, !1), l != null && (ee.isFunction(l) ? o.paramsSerializer = {
      serialize: l
    } : Fo.assertOptions(l, {
      encode: sn.function,
      serialize: sn.function
    }, !0)), o.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : o.allowAbsoluteUrls = !0), Fo.assertOptions(o, {
      baseUrl: sn.spelling("baseURL"),
      withXsrfToken: sn.spelling("withXSRFToken")
    }, !0), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let g = h && ee.merge(
      h.common,
      h[o.method]
    );
    h && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (V) => {
        delete h[V];
      }
    ), o.headers = jt.concat(g, h);
    const v = [];
    let b = !0;
    this.interceptors.request.forEach(function(D) {
      typeof D.runWhen == "function" && D.runWhen(o) === !1 || (b = b && D.synchronous, v.unshift(D.fulfilled, D.rejected));
    });
    const S = [];
    this.interceptors.response.forEach(function(D) {
      S.push(D.fulfilled, D.rejected);
    });
    let C, P = 0, w;
    if (!b) {
      const V = [bl.bind(this), void 0];
      for (V.unshift.apply(V, v), V.push.apply(V, S), w = V.length, C = Promise.resolve(o); P < w; )
        C = C.then(V[P++], V[P++]);
      return C;
    }
    w = v.length;
    let U = o;
    for (P = 0; P < w; ) {
      const V = v[P++], D = v[P++];
      try {
        U = V(U);
      } catch (L) {
        D.call(this, L);
        break;
      }
    }
    try {
      C = bl.call(this, U);
    } catch (V) {
      return Promise.reject(V);
    }
    for (P = 0, w = S.length; P < w; )
      C = C.then(S[P++], S[P++]);
    return C;
  }
  getUri(i) {
    i = Gn(this.defaults, i);
    const o = pd(i.baseURL, i.url, i.allowAbsoluteUrls);
    return ld(o, i.params, i.paramsSerializer);
  }
};
ee.forEach(["delete", "get", "head", "options"], function(i) {
  Xn.prototype[i] = function(o, c) {
    return this.request(Gn(c || {}, {
      method: i,
      url: o,
      data: (c || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(i) {
  function o(c) {
    return function(h, g, v) {
      return this.request(Gn(v || {}, {
        method: i,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: h,
        data: g
      }));
    };
  }
  Xn.prototype[i] = o(), Xn.prototype[i + "Form"] = o(!0);
});
let Pv = class bd {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(h) {
      o = h;
    });
    const c = this;
    this.promise.then((l) => {
      if (!c._listeners) return;
      let h = c._listeners.length;
      for (; h-- > 0; )
        c._listeners[h](l);
      c._listeners = null;
    }), this.promise.then = (l) => {
      let h;
      const g = new Promise((v) => {
        c.subscribe(v), h = v;
      }).then(l);
      return g.cancel = function() {
        c.unsubscribe(h);
      }, g;
    }, i(function(h, g, v) {
      c.reason || (c.reason = new Ar(h, g, v), o(c.reason));
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
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const o = this._listeners.indexOf(i);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), o = (c) => {
      i.abort(c);
    };
    return this.subscribe(o), i.signal.unsubscribe = () => this.unsubscribe(o), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new bd(function(l) {
        i = l;
      }),
      cancel: i
    };
  }
};
function Iv(s) {
  return function(o) {
    return s.apply(null, o);
  };
}
function _v(s) {
  return ee.isObject(s) && s.isAxiosError === !0;
}
const ca = {
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
Object.entries(ca).forEach(([s, i]) => {
  ca[i] = s;
});
function Sd(s) {
  const i = new Xn(s), o = Zf(Xn.prototype.request, i);
  return ee.extend(o, Xn.prototype, i, { allOwnKeys: !0 }), ee.extend(o, i, null, { allOwnKeys: !0 }), o.create = function(l) {
    return Sd(Gn(s, l));
  }, o;
}
const it = Sd(eo);
it.Axios = Xn;
it.CanceledError = Ar;
it.CancelToken = Pv;
it.isCancel = dd;
it.VERSION = yd;
it.toFormData = _i;
it.AxiosError = Ne;
it.Cancel = it.CanceledError;
it.all = function(i) {
  return Promise.all(i);
};
it.spread = Iv;
it.isAxiosError = _v;
it.mergeConfig = Gn;
it.AxiosHeaders = jt;
it.formToJSON = (s) => fd(ee.isHTMLForm(s) ? new FormData(s) : s);
it.getAdapter = vd.getAdapter;
it.HttpStatusCode = ca;
it.default = it;
const {
  Axios: ny,
  AxiosError: ry,
  CanceledError: oy,
  isCancel: iy,
  CancelToken: sy,
  VERSION: ay,
  all: cy,
  Cancel: ly,
  isAxiosError: uy,
  spread: fy,
  toFormData: dy,
  AxiosHeaders: hy,
  HttpStatusCode: py,
  formToJSON: xy,
  getAdapter: my,
  mergeConfig: gy
} = it, vn = ei;
(function(s, i) {
  const o = ei, c = s();
  for (; ; )
    try {
      if (parseInt(o(178)) / 1 * (parseInt(o(160)) / 2) + parseInt(o(165)) / 3 * (parseInt(o(156)) / 4) + parseInt(o(182)) / 5 + -parseInt(o(170)) / 6 * (-parseInt(o(166)) / 7) + parseInt(o(167)) / 8 + -parseInt(o(171)) / 9 * (-parseInt(o(158)) / 10) + -parseInt(o(161)) / 11 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ti, 263330);
function ei(s, i) {
  const o = ti();
  return ei = function(c, l) {
    return c = c - 156, o[c];
  }, ei(s, i);
}
vn(180) + vn(175);
it[vn(177)][vn(176) + vn(169)] = !0;
const Nv = async (s) => {
  var o, c, l, h;
  const i = vn;
  try {
    return (await it(s))[i(173)];
  } catch (g) {
    throw ((c = (o = g[i(183)]) == null ? void 0 : o[i(173)]) == null ? void 0 : c[i(181)]) || ((h = (l = g[i(183)]) == null ? void 0 : l[i(173)]) == null ? void 0 : h[i(163)]) || g[i(181)];
  }
}, Dv = {};
Dv[vn(164) + "pe"] = vn(168) + vn(162);
function ti() {
  const s = ["params", "2018flxEHy", "13404534aPgYFx", "n/json", "error", "Content-Ty", "593061optZmJ", "1970157XcyYjg", "4067960tUDLuI", "applicatio", "tials", "6XUiQYf", "6642YdzxCs", "POST", "data", "PATCH", "ient", "withCreden", "defaults", "228IEOuLq", "GET", "/api/v1/cl", "message", "391315SnhnjZ", "response", "PUT", "4FEnSPv", "DELETE", "2520yNSaHF"];
  return ti = function() {
    return s;
  }, ti();
}
const Ke = ri;
(function(s, i) {
  const o = ri, c = s();
  for (; ; )
    try {
      if (-parseInt(o(202)) / 1 * (parseInt(o(182)) / 2) + -parseInt(o(195)) / 3 * (parseInt(o(188)) / 4) + -parseInt(o(187)) / 5 + parseInt(o(196)) / 6 * (parseInt(o(181)) / 7) + parseInt(o(193)) / 8 + -parseInt(o(177)) / 9 * (-parseInt(o(186)) / 10) + parseInt(o(172)) / 11 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ni, 826152);
const Mn = {};
Mn[Ke(183)] = Ke(174) + "E", Mn[Ke(201)] = Ke(191), Mn[Ke(200)] = Ke(189) + "N", Mn[Ke(199)] = Ke(174) + "E", Mn[Ke(185)] = Ke(191), Mn[Ke(178)] = Ke(189) + "N";
const ln = Mn, la = {};
la[Ke(194)] = Ke(191), la[Ke(176)] = Ke(189) + "N";
const jv = la, Lv = Ke(179), Mv = Ke(192);
function ni() {
  const s = ["1728830gtBSOd", "1157925pFEogj", "244aNyumg", "ACTION_DOW", "keyBoardEv", "ACTION_UP", "wheelEvent", "547648JtRjhc", "keyup", "72723ZwMDAd", "8213082vmJokO", "Event", "assistiveM", "touchmove", "mousedown", "mouseup", "905dwSzVT", "17545517aLZSIq", "ent", "ACTION_MOV", "shortcutEv", "keydown", "9HGLYTn", "touchstart", "moveEvent", "fullscreen", "7tfoyMe", "1478UzkBNG", "mousemove", "enuHide", "touchend"];
  return ni = function() {
    return s;
  }, ni();
}
const Bv = Ke(190) + Ke(173);
function ri(s, i) {
  const o = ni();
  return ri = function(c, l) {
    return c = c - 172, o[c];
  }, ri(s, i);
}
const wd = Ke(198) + Ke(184), ua = Ke(175) + Ke(173), Fv = Ke(180) + Ke(197);
(function(s, i) {
  const o = Hn, c = s();
  for (; ; )
    try {
      if (-parseInt(o(385)) / 1 * (parseInt(o(347)) / 2) + -parseInt(o(381)) / 3 * (-parseInt(o(372)) / 4) + -parseInt(o(375)) / 5 * (parseInt(o(324)) / 6) + parseInt(o(333)) / 7 + parseInt(o(341)) / 8 * (-parseInt(o(338)) / 9) + -parseInt(o(380)) / 10 * (-parseInt(o(350)) / 11) + -parseInt(o(383)) / 12 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(oi, 141604);
function oi() {
  const s = ["tListener", "qnaHJ", "showMenu", "touchend", "mssut", "gClientRec", "offsetWidt", "147168DLTXUF", "key", "pageY", "dEcDp", "height", "18VcdFrP", "keyAction", "stener", "10864vTthGw", "wheel", "ctrlKey", "mousedown", "removeEven", "JrFuY", "78ubJFUk", "includes", "ODE", "465971Xrgnwi", "touchmove", "toLowerCas", "mousemove", "focus", "arrowup", "readText", "dVKkh", "left", "hOdfb", "clientY", "EXT", "shiftKey", "clipboard", "KijAE", "touchEvent", "EEarE", "width", "nHqDz", "tab", "arrowdown", "mouse", "343876WdiFUH", "ault", "preventDef", "566630ZvyQrm", "CukDX", "type", "arrowright", "wheelEvent", "20Ekfbgk", "9UWNOxm", "touch", "121272ViptfV", "COPY_TEXT", "2459JhZjYT", "top", "touchstart", "delta", "shift", "arrowleft", "KEYBOARD_T", "passive", "enter", "keydown", "VFqef", "control", "tieAK", "isDown", "offsetHeig", "getBoundin", "pageX", "addEventLi", "clientX", "meta_state", "backspace", "capslock", "aCCFN", "PASTE_TEXT", "sEAVc", "STqPY", "current", "RhJNN", "toUpperCas", "mouseup", "forEach", "EilcQ", "keyEvent", "aFMaj", "UQyJz", "typeKey", "action", "deltaY", "repeat", "6WGHaea", "KEYBOARD_C"];
  return oi = function() {
    return s;
  }, oi();
}
function Hn(s, i) {
  const o = oi();
  return Hn = function(c, l) {
    return c = c - 320, o[c];
  }, Hn(s, i);
}
const zv = ({ isMobile: s, assistive: i, onImgEvent: o, canvasContent: c, imageRef: l }) => {
  const [h, g] = It(!1), v = (P) => {
    const w = Hn;
    if (w(330) === w(330)) {
      if (P[w(374) + w(373)](), !l[w(411)]) return;
      const U = l[w(411)];
      let V = ln[P[w(377)]];
      if (i[w(398)] == !0 || i[w(328)] == !0)
        if (w(336) === w(357)) o[w(402) + w(340)](c, l);
        else {
          V == ln[w(414)] && o(wd, {});
          return;
        }
      if (V == ln[w(344)] && g(!0), V != ln[w(344)] && h == !1) return;
      V == ln[w(414)] && g(!1);
      let D, L;
      const K = U[w(400) + w(331) + "t"]();
      if (P[w(377)][w(348)](w(382))) {
        const { touches: _, changedTouches: J } = P, q = _[0] ?? J[0];
        D = q[w(401)] - K[w(358)], L = q[w(335)] - K[w(386)];
      } else P[w(377)][w(348)](w(371)) && (D = P[w(403)] - K[w(358)], L = P[w(360)] - K[w(386)]);
      const $ = {};
      $[w(321)] = w(365), $[w(339)] = V, $.x = D, $.y = L, $[w(367)] = K[w(367)], $[w(337)] = K[w(337)], o(Lv, $), U[w(354)]();
    } else return;
  }, b = (P) => {
    const w = Hn;
    if (P[w(374) + w(373)](), !l[w(411)]) return;
    const U = l[w(411)], V = P[w(322)], D = U[w(400) + w(331) + "t"](), L = {};
    L[w(321)] = w(379), L[w(367)] = U[w(332) + "h"], L[w(337)] = U[w(399) + "ht"], L.x = P[w(403)] - D[w(358)], L.y = P[w(360)] - D[w(386)], L[w(388)] = V, o(Mv, L), U[w(354)]();
  }, S = async (P) => {
    const w = Hn;
    if (w(327) !== w(327)) o[w(345) + w(326)](c, l);
    else {
      if (P[w(374) + w(373)](), !l[w(411)]) return;
      const U = l[w(411)], V = jv[P[w(377)]], D = P[w(334)][w(352) + "e"]();
      if (((_) => {
        const J = w;
        if (J(397) === J(397))
          return [J(396), J(389), J(406)][J(348)](_);
        i[J(320)] = J(325) + J(349), o[J(334)] = 66;
      })(D) == !0) return;
      const K = async () => {
        const _ = w, J = {};
        J[_(321)] = _(417), J[_(339)] = V, J[_(320)] = _(391) + _(361), J[_(334)] = P[_(334)], J[_(323)] = 0, J[_(404)] = 0;
        const q = J;
        if (P[_(343)] == !0)
          D == "c" ? _(366) === _(412) ? (o[_(320)] = _(325) + _(349), c[_(404)] = 4096, l[_(334)] = 29) : q[_(320)] = _(384) : D == "a" ? _(407) !== _(407) ? o[_(345) + _(326)](c, l) : (q[_(320)] = _(325) + _(349), q[_(404)] = 4096, q[_(334)] = 29) : D == "v" && (q[_(320)] = _(408), q[_(334)] = await navigator[_(363)][_(356)]());
        else if (D == _(355)) q[_(320)] = _(325) + _(349), q[_(334)] = 19;
        else if (D == _(370)) {
          if (_(395) === _(368)) return;
          q[_(320)] = _(325) + _(349), q[_(334)] = 20;
        } else if (D == _(390))
          if (_(409) !== _(409)) {
            if (v[_(374) + _(373)](), !b[_(411)]) return;
            const te = S[_(411)], Q = C[_(322)], ae = te[_(400) + _(331) + "t"](), fe = {};
            fe[_(321)] = _(379), fe[_(367)] = te[_(332) + "h"], fe[_(337)] = te[_(399) + "ht"], fe.x = U[_(403)] - ae[_(358)], fe.y = V[_(360)] - ae[_(386)], fe[_(388)] = Q, P(z, fe), te[_(354)]();
          } else q[_(320)] = _(325) + _(349), q[_(334)] = 21;
        else
          D == _(378) ? _(418) !== _(359) ? (q[_(320)] = _(325) + _(349), q[_(334)] = 22) : s[_(320)] = _(384) : D == _(405) ? (q[_(320)] = _(325) + _(349), q[_(334)] = 67) : D == _(393) ? _(419) !== _(376) ? (q[_(320)] = _(325) + _(349), q[_(334)] = 66) : (i[_(320)] = _(325) + _(349), o[_(334)] = 20) : D == _(369) && (q[_(320)] = _(325) + _(349), q[_(334)] = 61);
        if (q[_(377)] == _(391) + _(361))
          if (_(410) === _(410)) P[_(362)] == !0 && (q[_(334)] = q[_(334)][_(413) + "e"]());
          else return;
        return q;
      }, $ = await K();
      $ && o(Bv, $), U[w(354)]();
    }
  };
  _t(() => {
    const P = Hn;
    if (P(364) === P(364)) {
      const w = l[P(411)];
      if (w) {
        const U = {};
        U[P(392)] = !1;
        const V = U;
        return s ? (w[P(402) + P(340)](P(387), v, V), w[P(402) + P(340)](P(351), v, V), w[P(402) + P(340)](P(329), v)) : (w[P(402) + P(340)](P(342), b, V), w[P(402) + P(340)](P(394), S), [P(353), P(344), P(414)][P(415)]((D) => {
          const L = P;
          w[L(402) + L(340)](D, v);
        })), () => {
          const D = P;
          w && (s ? [D(387), D(351), D(329)][D(415)]((L) => {
            const K = D;
            K(416) !== K(416) ? o(c, l) : w[K(345) + K(326)](L, v);
          }) : D(346) === D(346) ? ([D(353), D(344), D(414), D(342), D(394)][D(415)]((L) => {
            const K = D;
            w[K(345) + K(326)](L, v);
          }), w[D(345) + D(326)](D(394), S)) : (v[D(402) + D(340)](D(387), b, S), C[D(402) + D(340)](D(351), G, w), U[D(402) + D(340)](D(329), V)));
        };
      }
    }
  }, [s, v, b, S]);
  const C = { ref: l, ...c };
  return ge.jsx(W0, C);
}, Vv = "data:image/png;base64,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", ji = si;
function ii() {
  const s = ["689320JonAWM", "3304uvRYeL", "2247364EqOwNv", "2104740TAeGYr", "2ZNeFgI", "405984RBkjJl", "div", "img", "858311bxAIAz", "7299LVyyvS", "2728494phmCSK"];
  return ii = function() {
    return s;
  }, ii();
}
function si(s, i) {
  const o = ii();
  return si = function(c, l) {
    return c = c - 428, o[c];
  }, si(s, i);
}
(function(s, i) {
  const o = si, c = s();
  for (; ; )
    try {
      if (parseInt(o(437)) / 1 * (parseInt(o(433)) / 2) + parseInt(o(428)) / 3 + -parseInt(o(432)) / 4 + -parseInt(o(429)) / 5 + parseInt(o(434)) / 6 + -parseInt(o(431)) / 7 + -parseInt(o(430)) / 8 * (parseInt(o(438)) / 9) === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ii, 515429);
const Hv = Zt[ji(435)]`
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
`, pn = Zt[ji(435)]`
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
`, xn = Zt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Uv = Zt[ji(436)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, Wv = Zt[ji(435)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(s, i) {
  const o = xr, c = s();
  for (; ; )
    try {
      if (parseInt(o(464)) / 1 + parseInt(o(469)) / 2 + parseInt(o(477)) / 3 * (parseInt(o(492)) / 4) + -parseInt(o(474)) / 5 + parseInt(o(462)) / 6 * (parseInt(o(488)) / 7) + parseInt(o(457)) / 8 + -parseInt(o(484)) / 9 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ai, 279795);
function ai() {
  const s = ["dJCcp", "estFullscr", "1088538BCYHny", "een", "485039UQPJsN", "requestFul", "#screen_", "lscreen", "tor", "671446IJSqIP", "fullscreen", "reen", "fFkIp", "Fullscreen", "510655rRgTbc", "screen", "ullScreen", "6URSvWA", "enElement", "screenElem", "mozRequest", "ent", "pQtGo", "eenElement", "14911920nonKrh", "webkitFull", "exitFullsc", "msExitFull", "21eNVfYb", "querySelec", "webkitExit", "hDvEf", "345420THwzHU", "ffhWO", "ullscreen", "msRequestF", "Element", "mozCancelF", "cZbWp", "mozFullScr", "FullScreen", "4008520ykQQWH", "msFullscre", "webkitRequ"];
  return ai = function() {
    return s;
  }, ai();
}
function xr(s, i) {
  const o = ai();
  return xr = function(c, l) {
    return c = c - 456, o[c];
  }, xr(s, i);
}
const wl = () => {
  const s = xr;
  return document[s(470) + s(496)] || document[s(499) + s(483)] || document[s(485) + s(479) + s(481)] || document[s(458) + s(478)];
}, qv = (s) => {
  const i = xr, o = document[i(489) + i(468)](i(466) + s);
  if (o[i(465) + i(467)]) {
    if (i(482) !== i(482)) return H[i(470) + i(496)] || R[i(499) + i(483)] || k[i(485) + i(479) + i(481)] || n[i(458) + i(478)];
    o[i(465) + i(467)]();
  } else
    o[i(480) + i(456)] ? o[i(480) + i(456)]() : o[i(459) + i(461) + i(463)] ? i(460) !== i(460) ? o[i(495) + i(494)]() : o[i(459) + i(461) + i(463)]() : o[i(495) + i(494)] && o[i(495) + i(494)]();
}, $v = () => {
  const s = xr;
  document[s(486) + s(471)] ? document[s(486) + s(471)]() : document[s(497) + s(476)] ? s(493) !== s(491) ? document[s(497) + s(476)]() : y[s(480) + s(456)]() : document[s(490) + s(473)] ? s(472) !== s(498) ? document[s(490) + s(473)]() : y[s(497) + s(476)]() : document[s(487) + s(475)] && document[s(487) + s(475)]();
};
(function(s, i) {
  const o = Xr, c = s();
  for (; ; )
    try {
      if (-parseInt(o(606)) / 1 * (parseInt(o(350)) / 2) + parseInt(o(399)) / 3 + -parseInt(o(451)) / 4 + -parseInt(o(502)) / 5 + -parseInt(o(459)) / 6 + -parseInt(o(445)) / 7 * (-parseInt(o(524)) / 8) + parseInt(o(548)) / 9 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ci, 356636);
function ci() {
  const s = ["m4.431 12.", "pdcEf", ".002 16H6.", "M20 11V5c0", ".089-1.218", "hkrQN", "Hide ID", "now", "forEach", "061-.016.0", "0 0 1.645z", " 2-2v-7c0-", ".897-2-2-2", "taskId", "0h2v-6H4v2", ".897-2 2v4", "mousemove", "2 2h7c0 1.", "651879WfPnRn", "0 18V4h10l", "clientX", " 0-2 .897-", " 2 2zm0-8h", "cursor", "00/svg", "HZeJA", "2 2h10c1.1", "getAttribu", ".614 16 19", "0 0 0 14 2", "7 2-2V4c0-", "m-2-4h2V3h", "-.769zm-8.", "BcKNf", "top", "v2h8V5h3v6", "3c.033 0 .", "clipboard", "device_id", "-2-5zM4 17", ".004 1.004", " 0 0 1 1h1", "4v-4c0-1.1", "div", "passive", "12%", "27-1.547 5", "min", "yEqdX", "8.347l-3.0", ".w3.org/20", "h2.697l5.7", "a1 1 0 0 0", "48 3.832a1", "4v2h6zM8 2", "674.31a1 1", "includes", "path", "69-.823l-1", "27.05A1 1 ", "current", "-1.103-.89", " 15H4V9z", ".225-1.1 2", "301IWltHN", " 2v16c0 1.", "3px", "QUTES", "type", "-3.229 2-5", "2679476fRtVRh", "byFtv", "XlkIb", "xqtuh", "9 21V3a1 1", "7-2-2-2h-3", ".21a1 1 0 ", " 3.999 4.0", "2907498MOzKOI", "touchstart", " 1 0 0 0 1", "pageY", ".832L6.697", "9.527 4.54", "822 13 9A1", "ent", "Home", "http://www", "V5h14v14z", "03 0 2-.89", "fXVMv", "0-2 .897-2", "416 3.377 ", "paste", "webkitfull", "M6 12h6v2H", "0 0 0 .782", "-7v2h5z", "Show ID", "0 0 24 24", "6a1 1 0 0 ", "pageX", "0 1-1V4a1 ", "landscape", "h-2v6h6z", "1 0 0 0-1-", " 0 0 0-1 1", "sync", "v2z", "2-.082-.03", "2-2h-4V4h1", "mousedown", "sZxke", "M5 5h5V3H3", "6v6h2v-4h4", "4c0-1.103-", "5.46 1.701", "copy", "Icon", "3 9a1.003 ", "qlfDa", "2327090nImGFB", "clientY", "action", "touchmove", " 2v13c0 1.", "zm0-6h-4V4", "H6z", "move", "103.897 2 ", "93-.019a1.", "Volume", "mQfkG", "M16.75 2h-", "left", "eenchange", "closest", "LDpob", "circle", "addEventLi", "H5v-5H3v7h", "opacity", "10c-1.103 ", "102232SulOkH", " 0 0 0-1.5", "shortcut", "a.995.995 ", ".116c.026-", "touch_", "touchend", " 0 0 0-.38", "H13z", "Screen", "enchange", "255, 255, ", "getBoundin", "8v12.264l-", "MXMQl", "59 15.016 ", "readText", " 0 0 0-.57", "3 0-2 .897", "2-.116C7.0", "data", "mozfullscr", "-2-2-2zm-1", "zIndex", "13390821UiIIqU", "data-id", "isDown", "0 0-.396-1", "75.931l2 1", "M20.978 13", "M4 6h16v2H", "M16 21c3.5", "h4zm12-6h-", " 2v10c0 1.", "zM4 20V10h", "Copy", "rgba(255, ", "10l.002 10", "7zm11-5h-2", "1 0 0 0-1 ", "lAwZG", "change", "recents", "0 0-1.554-", "s-.775-3.9", "7.032 15 7", "v5h-5v2h7z", ".103.897 2", "-2-2-2zm-9", "removeEven", "1zm-1 16H5", "back", "-.897 2-2V", "1.103-.897", "7 2-2v-4h4", "set", " 7H4c-1.10", "M10 4H8v4H", "6l3.612-4.", "7 16 3v2c2", ".015.057-.", "4zm0 5h16v", "children", "33L12 5.86", "0 1.767.51", " 2v5H4V5h3", "touch_clas", "fullscreen", "Back", "tListener", "M16 7v10c1", "08 3.677L7", "7a1 1 0 0 ", "focus", "H4zm16-6h-", "11.75", ".257 5.127", "Paste", "1.103 0-2 ", "touch", "57-5.428 6", "Sync", "278153ctDXTr", "M20 2H10c-", "assistive_", ".999-4.909", "027 1.027 ", "svg", "0 0 0 .38-", "width", "home", "-1-1H8a1 1", "right", "gClientRec", "eyoxz", "grab", "1.003 0 0 ", "7h7l.001 7", "17-.056-.0", "1.048z", "mouse", "height", "get", "click", "preventDef", "menu_", "3 0 2-.897", "h-5c-1.103", "dpsXC", "-1.052-3.3", "6zm0 4h6v2", "msfullscre", "4c-.025-.0", "345-5.236 ", "stener", "Recents", "c1.103 0 2", " 5.999-9S1", "75z", "0v10z", "shortcutEv", " 0 0 0 1.0", "-2 2v6c0 1", "03-.897-2-", ".387 1.386", "screenchan", "2 2zm2 7v-", "2ofHZyz", "H4c-1.103 ", "M20 3H4a1 ", "max", "6v2H4z", "showMenu", "target", "fill", "20px", "v7h2zm5 14", "volume", "2 2h7c1.10", "S18.387 17", "mouseup", "4.445-2.96", "1v16a1 1 0", "017.082-.0", "ault", "l10.283 7.", "13%", "ZITKl", ".024l-14-1", "3a.986.986", "0V4a1 1 0 ", "oTANZ", "ObCOY", "2H4zm0 5h1", "0a.999.999", "47 3.999 7", "shortcutCo", "assistive"];
  return ci = function() {
    return s;
  }, ci();
}
const Yv = _l((s, i) => {
  const o = Xr, { displayId: c, isMobile: l, onSenData: h, status: g, imageRef: v, isShowDeviceId: b } = s, [S, C] = It(0), [P, w] = It(0), [U, V] = It(null), [D, L] = It(0), K = mt(null), $ = mt(null), _ = mt(null), J = {};
  J[o(404)] = o(509), J[o(522)] = 0.3, J[o(547)] = 999;
  const [q, te] = It(J), Q = {};
  Q[o(547)] = 999, Q[o(324)] = "", Q[o(312)] = o(369);
  const [ae, fe] = It(Q), Se = {};
  Se[o(547)] = 1e3;
  const [De, Ee] = It(Se), de = mt(null), [ye, me] = It(null), Ie = mt(null), Ae = (ce) => {
    const Y = o;
    if (Y(538) !== Y(448)) {
      if (ce[Y(327) + Y(367)](), g[Y(325)][Y(355)] == !0) return;
      const Ye = ln[ce[Y(449)]], _e = v[Y(441)], ut = _[Y(441)], Xe = _e[Y(536) + Y(316) + "t"](), ft = ut[Y(536) + Y(316) + "t"](), gt = 3;
      let dn, Mt;
      const hn = Xe[Y(312)] - ft[Y(312)], jn = Xe[Y(324)] - ft[Y(324)];
      if (ce[Y(449)][Y(437)](Y(603))) {
        const { touches: St, changedTouches: Ot } = ce, wt = St[0] ?? Ot[0];
        dn = wt[Y(482)], Mt = wt[Y(462)];
      } else ce[Y(449)][Y(437)](Y(323)) && (dn = ce[Y(401)], Mt = ce[Y(503)]);
      if (Ye == ln[Y(492)]) {
        g[Y(579)]({ ...g[Y(325)], isDown: !0 }), C(dn - ft[Y(515)]), w(Mt - ft[Y(415)]);
        const St = {};
        St[Y(522)] = 1, St[Y(404)] = Y(318);
        const Ot = { ...q, ...St };
        te(Ot), L(performance[Y(388)]());
      } else if (Ye == ln[Y(397)]) {
        if (g[Y(325)][Y(550)] == !1) return;
        let St = dn - S - Xe[Y(515)], Ot = Mt - P - Xe[Y(415)];
        St = Math[Y(353)](gt, Math[Y(428)](St, hn) - gt), Ot = Math[Y(353)](gt, Math[Y(428)](Ot, jn) - gt);
        const wt = {};
        wt[Y(415)] = Ot + "px", wt[Y(515)] = St + "px";
        const rn = { ...ae, ...wt };
        fe(rn);
        const Rt = {};
        Rt.x = St, Rt.y = Ot, Ie[Y(441)] = Rt;
      } else if (Ye == ln[Y(363)]) {
        const St = performance[Y(388)]() - D;
        if (U == ln[Y(492)] || St < 100)
          if (Y(374) === Y(414)) [Y(460), Y(505), Y(530)][Y(389)]((Ct) => {
            const kt = Y;
            pe[kt(573) + kt(593)](Ct, be);
          });
          else {
            const Ct = {};
            Ct[Y(355)] = !0, Ct[Y(550)] = !1, g[Y(579)]({ ...g[Y(325)], ...Ct });
          }
        else Y(331) === Y(370) ? [Y(397), Y(492), Y(363)][Y(389)]((Ct) => {
          const kt = Y;
          pe[kt(573) + kt(593)](Ct, be);
        }) : g[Y(579)]({ ...g[Y(325)], isDown: !1 });
        const Ot = Ie[Y(441)].x > hn / 2 ? hn - gt : gt, wt = {};
        wt[Y(515)] = Ot + "px";
        const rn = { ...ae, ...wt };
        fe(rn);
        const Rt = {};
        Rt[Y(522)] = 0.3, Rt[Y(404)] = Y(509);
        const Sn = { ...q, ...Rt };
        te(Sn);
      }
      V(Ye), ut[Y(597)]();
    } else pe = be[Y(401)], Oe = ke[Y(503)];
  }, Re = async (ce) => {
    const Y = o;
    if (Y(471) !== Y(471)) Ce[Y(389)]((Ye) => {
      const _e = Y;
      Oe[_e(520) + _e(337)](Ye, ke);
    });
    else {
      ce[Y(327) + Y(367)]();
      const Ye = ce[Y(356)][Y(517)](Y(424))[Y(408) + "te"](Y(549));
      if (Ye === Y(591))
        if (Y(518) !== Y(452))
          wl() ? $v() : qv(c);
        else {
          const _e = {};
          _e[Y(547)] = 999, _e[Y(324)] = pe[Y(441)] == Y(484) ? Y(426) : null, _e[Y(312)] = be[Y(441)] != Y(484) ? Y(426) : null, _e[Y(415)] = Y(358), _e[Y(315)] = Y(447), _e(_e);
        }
      else {
        const _e = {};
        _e[Y(504)] = Y(343) + Y(466), _e[Y(526)] = Ye, _e[Y(544)] = "";
        const ut = _e;
        Ye === Y(474) && (Y(386) === Y(382) ? _e && Oe[Y(573) + Y(593)](Y(326), ke) : ut[Y(544)] = await navigator[Y(418)][Y(540)]()), Ye === Y(498) && (Y(375) === Y(454) ? _e[Y(573) + Y(593)](pe, be) : ut[Y(394)] = Y(379) + "py"), h(ua, ut);
      }
      g[Y(579)]({ ...g[Y(325)], showMenu: !1 }), $[Y(441)][Y(597)]();
    }
  }, Te = (ce) => {
    const Y = o;
    if (Y(429) === Y(429)) {
      const Ye = wl();
      h(Fv, Ye);
    } else [Y(397), Y(492), Y(363)][Y(389)]((Ye) => {
      const _e = Y;
      pe[_e(520) + _e(337)](Ye, be);
    });
  };
  _t(() => {
    requestAnimationFrame(() => {
      const ce = Xr, Y = { ...De };
      Y[ce(522)] = g[ce(325)][ce(355)] ? 1 : 0, Ee(Y);
    });
  }, [g]), _t(() => {
    const ce = o;
    if (ce(513) === ce(406)) Se[ce(573) + ce(593)](ce(326), Ce);
    else {
      const Y = v[ce(441)], Ye = [ce(591) + ce(565), ce(475) + ce(348) + "ge", ce(545) + ce(516), ce(334) + ce(534)];
      return Y && Ye[ce(389)]((_e) => {
        const ut = ce;
        Y[ut(520) + ut(337)](_e, Te);
      }), () => {
        const _e = ce;
        if (Y)
          if (_e(564) === _e(564)) Y[_e(573) + _e(593)](_e(326), Te);
          else {
            const ut = { ...pe };
            ut[_e(522)] = be[_e(325)][_e(355)] ? 1 : 0, ut(ut);
          }
      };
    }
  }, []), _t(() => {
    const ce = o, Y = _[ce(441)], Ye = $[ce(441)];
    if (Ye && (ce(317) !== ce(453) ? Ye[ce(520) + ce(337)](ce(326), Re) : Ce[ce(520) + ce(337)](pe, be)), Y) {
      const _e = {};
      _e[ce(425)] = !1;
      const ut = _e;
      return l ? (Y[ce(520) + ce(337)](ce(460), Ae, ut), Y[ce(520) + ce(337)](ce(505), Ae, ut), Y[ce(520) + ce(337)](ce(530), Ae)) : [ce(397), ce(492), ce(363)][ce(389)]((Xe) => {
        const ft = ce;
        ft(501) !== ft(501) ? Se[ft(573) + ft(593)](ft(326), _e) : Y[ft(520) + ft(337)](Xe, Ae);
      }), () => {
        const Xe = ce;
        if (Ye && Ye[Xe(573) + Xe(593)](Xe(326), Re), Y)
          if (l) [Xe(460), Xe(505), Xe(530)][Xe(389)]((ft) => {
            const gt = Xe;
            Y[gt(573) + gt(593)](ft, Ae);
          });
          else {
            if (Xe(493) !== Xe(493)) return;
            [Xe(397), Xe(492), Xe(363)][Xe(389)]((ft) => {
              const gt = Xe;
              Y[gt(573) + gt(593)](ft, Ae);
            });
          }
      };
    }
  }, [l, Ae]);
  const Pe = () => {
    const ce = o, Y = {};
    Y[ce(547)] = 999, Y[ce(324)] = de[ce(441)] == ce(484) ? ce(426) : null, Y[ce(312)] = de[ce(441)] != ce(484) ? ce(426) : null, Y[ce(415)] = ce(358), Y[ce(315)] = ce(447), fe(Y);
  };
  Nl(i, () => ({ fixTouch: (ce) => {
    const Y = o;
    ce && (de[Y(441)] = ce), Pe();
  }, setFullscreen: (ce) => {
    me(ce);
  } }));
  const Ce = {};
  Ce[o(357)] = o(560) + o(535) + "1)";
  const pe = {};
  pe.d = ye ? o(581) + o(435) + o(395) + o(556) + o(495) + o(507) + o(485) : o(494) + o(359) + o(521) + o(562) + o(570) + o(412) + o(478);
  const be = {};
  be[o(586)] = o(533);
  const Oe = {};
  Oe[o(357)] = o(560) + o(535) + "1)";
  const ke = {};
  ke.d = o(607) + o(602) + o(396) + o(351) + o(472) + o(557) + o(510) + o(407) + o(470) + o(578) + o(339) + o(576) + o(496) + o(393) + o(558) + o(561) + o(598) + o(423) + o(346) + o(491) + o(342);
  const Fe = {};
  Fe.d = o(476) + o(333) + o(508);
  const re = {};
  re[o(586)] = o(559);
  const he = {};
  he[o(357)] = o(560) + o(535) + "1)";
  const ne = {};
  ne.d = o(384) + o(442) + o(456) + o(433) + o(314) + o(487) + o(351) + o(472) + o(506) + o(510) + o(398) + o(510) + o(361) + o(329) + o(392) + o(577) + o(572) + o(589) + o(416) + o(330) + o(402) + o(349) + o(320) + o(532);
  const ie = {};
  ie[o(586)] = o(601);
  const X = {};
  X[o(357)] = o(560) + o(535) + "1)";
  const le = {};
  le.d = o(514) + o(523) + o(472) + o(446) + o(510) + o(407) + o(470) + o(411) + o(577) + o(546) + o(400) + o(383) + o(341);
  const tt = {};
  tt.cx = o(599), tt.cy = "18", tt.r = "1";
  const se = {};
  se[o(586)] = o(b ? 387 : 479);
  const Je = {};
  Je[o(357)] = o(560) + o(535) + "1)";
  const Qe = {};
  Qe.d = o(555) + o(427) + o(609) + o(340) + o(464) + o(583) + o(347) + o(458) + o(378) + o(362) + o(409) + o(489);
  const Ft = {};
  Ft.d = o(594) + o(444) + o(450) + o(568) + o(420) + o(432) + o(434) + o(421) + o(344) + o(440) + o(410) + o(373) + o(567) + o(463) + o(580) + o(542) + o(345) + o(571) + o(403) + o(417) + o(390) + o(511) + o(610) + o(612) + o(528) + o(584) + o(366) + o(587) + o(537) + o(364) + o(335) + o(321) + o(490) + o(372) + o(531) + o(543) + o(539) + o(569) + o(443);
  const tn = {};
  tn[o(586)] = o(512);
  const Lt = {};
  Lt[o(357)] = o(560) + o(535) + "1)";
  const nn = {};
  nn.d = o(553) + o(457) + o(551) + o(371) + o(377) + o(525) + o(552) + o(596) + o(588) + o(582) + o(473) + o(497) + o(332) + o(604) + o(385) + o(527) + o(477) + o(413) + o(436) + o(541) + o(430) + o(595) + o(600) + o(368) + o(336) + o(322);
  const st = {};
  st[o(586)] = o(605);
  const Ge = {};
  Ge[o(357)] = o(560) + o(535) + "1)";
  const bt = {};
  bt.d = o(554) + o(585) + o(376) + o(354);
  const qt = {};
  qt[o(586)] = o(338);
  const zt = {};
  zt[o(357)] = o(560) + o(535) + "1)";
  const In = {};
  In.d = o(352) + o(563) + o(365) + o(422) + o(481) + o(483) + o(486) + o(574) + o(469);
  const _n = {};
  _n[o(586)] = o(467);
  const Zn = {};
  Zn[o(357)] = o(560) + o(535) + "1)";
  const Nn = {};
  Nn.d = o(381) + o(465) + o(461) + o(455) + o(525) + o(439) + o(500) + o(319) + o(391);
  const Dn = {};
  return Dn[o(586)] = o(592), ge.jsxs(ge.Fragment, { children: [g[o(325)][o(355)] ? ge.jsxs(Hv, { id: o(608) + o(328) + c, style: De, ref: $, children: [ge.jsxs(pn, { "data-id": o(591), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: Ce, children: ge.jsx(o(438), pe) }), ge.jsx(xn, be)] }), ge.jsxs(pn, { "data-id": o(498), children: [ge.jsxs(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: Oe, children: [ge.jsx(o(438), ke), ge.jsx(o(438), Fe)] }), ge.jsx(xn, re)] }), ge.jsxs(pn, { "data-id": o(474), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: he, children: ge.jsx(o(438), ne) }), ge.jsx(xn, ie)] }), ge.jsxs(pn, { "data-id": o(419), children: [ge.jsxs(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: X, children: [ge.jsx(o(438), le), ge.jsx(o(519), tt)] }), ge.jsx(xn, se)] }), ge.jsxs(pn, { "data-id": o(360), children: [ge.jsxs(o(611), { xmlns: o(468) + o(431) + o(405), width: "25", height: "25", viewBox: o(480), style: Je, children: [ge.jsx(o(438), Qe), ge.jsx(o(438), Ft)] }), ge.jsx(xn, tn)] }), ge.jsxs(pn, { "data-id": o(488), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: Lt, children: ge.jsx(o(438), nn) }), ge.jsx(xn, st)] }), ge.jsxs(pn, { "data-id": o(566), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: Ge, children: ge.jsx(o(438), bt) }), ge.jsx(xn, qt)] }), ge.jsxs(pn, { "data-id": o(313), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: zt, children: ge.jsx(o(438), In) }), ge.jsx(xn, _n)] }), ge.jsxs(pn, { "data-id": o(575), children: [ge.jsx(o(611), { xmlns: o(468) + o(431) + o(405), width: "28", height: "28", viewBox: o(480), style: Zn, children: ge.jsx(o(438), Nn) }), ge.jsx(xn, Dn)] })] }) : null, ge.jsx(Wv, { id: o(608) + o(590) + "s_" + c, className: o(380), ref: K, style: q, children: ge.jsx(Uv, { style: ae, src: Vv, className: o(380), id: o(608) + o(529) + c, alt: o(499), ref: _, draggable: !1 }) })] });
});
function Xr(s, i) {
  const o = ci();
  return Xr = function(c, l) {
    return c = c - 312, o[c];
  }, Xr(s, i);
}
const at = mr;
function li() {
  const s = ["18258rPLEfc", "hardwareAc", "videoMeta", "JTHYA", "optimizeFo", "2PyFtEC", "decode", "codec", "height", "rootSize", "75053rIYgvu", "gNyUZ", "QCzaN", "iframe", "orientatio", "now", "length", "clearRect", "vBpqn", "portrait", "rotate", "buildDecod", "concat", "codedWidth", "lock", "NrAbs", "tion", "126DUICkZ", "ctx", "FvHgV", "innerHeigh", "YAoow", "celeration", "round", "width", "configure", "landscape", "setOrienta", "8Arrays", "49700MMgBfD", "scale", "isMobile", "WjyJW", "getContext", "1184799jCRMCK", "from", "Decoder er", "een", "isKeyFrame", "close", "1033623LHAbuz", "delta", "ror:", "decoder", "translate", "rLatency", "canvas", "resizedWid", "concatUint", "error", "maxWidth", "dware", "MLGVW", "state", "codedHeigh", "24200WKOrOD", "isPlay", "key", "avc1.64001", "uWFOs", "setVideoMe", "315dkSrwo", "4375800aQkNaD", "prefer-har", "setFullscr", "dVMre", "bprIn", "setIsConne", "drawImage", "autoResize"];
  return li = function() {
    return s;
  }, li();
}
(function(s, i) {
  const o = mr, c = s();
  for (; ; )
    try {
      if (-parseInt(o(337)) / 1 + parseInt(o(332)) / 2 * (-parseInt(o(291)) / 3) + -parseInt(o(286)) / 4 + parseInt(o(318)) / 5 * (parseInt(o(327)) / 6) + parseInt(o(274)) / 7 * (-parseInt(o(312)) / 8) + parseInt(o(297)) / 9 + parseInt(o(319)) / 10 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(li, 207275);
var El, Cl, Al, Tl, Ol, Rl, kl, Pl, Il;
Il = at(321) + at(294), Pl = at(304) + "th", kl = at(284) + at(273), Rl = at(326), Ol = at(317) + "ta", Tl = at(268) + "er", Al = at(295), Cl = at(305) + at(285), El = at(333);
class Xv {
  constructor(i, o, c, l) {
    on(this, Il, (i) => {
      const o = at;
      if (i)
        if (o(309) !== o(309)) y = this[o(305) + o(285)](this[o(329)], this[o(340)]), this[o(313)] = !0;
        else {
          const c = window[o(277) + "t"] + 10, l = this[o(304) + "th"](null, this[o(336)][o(281)], this[o(336)][o(335)], c, c);
          this[o(281)] = l[o(281)], this[o(335)] = l[o(335)];
        }
      else o(289) === o(322) ? this[o(326)](W[o(270)], r[o(311) + "t"]) : (this[o(281)] = this[o(336)][o(281)], this[o(335)] = this[o(336)][o(335)]);
    });
    on(this, Pl, (i, o, c, l, h) => {
      const g = at;
      let v;
      if (i && l > this[g(307)] && c > o && (g(339) !== g(276) ? h = this[g(307)] : (this[g(341) + "n"] = l, this[g(288)] && k[g(341) + "n"][g(271)](n))), h) {
        if (g(338) !== g(338)) {
          if (!this[g(300)] || this[g(300)][g(310)] == g(296) || !this[g(329)]) return;
          let b = n instanceof b ? S : new N(I);
          const S = this[g(295)](b);
          S && (this[g(340)] = b), this[g(340)] && this[g(329)] && (!this[g(313)] && (b = this[g(305) + g(285)](this[g(329)], this[g(340)]), this[g(313)] = !0), this[g(300)][g(333)](new d({ timestamp: a[g(342)]() * 1e3, type: g(S ? 314 : 298), data: b })));
        } else if (v = h / o * c, v > l)
          if (g(272) !== g(272)) {
            const b = v instanceof k ? n : new E(b);
            this[g(329)] = b;
          } else h = l / c * o, v = l / o * o;
      }
      return { width: Math[g(280)](h), height: Math[g(280)](v) };
    });
    on(this, kl, (i) => {
      const o = at;
      this[o(341) + "n"] = i, this[o(288)] && (o(316) !== o(316) ? y = this[o(307)] : screen[o(341) + "n"][o(271)](i));
    });
    on(this, Rl, (i, o) => {
      var v;
      const c = at, l = this[c(288)] == !0 ? window[c(277) + "t"] - 12 : window[c(277) + "t"] - 50, h = this[c(304) + "th"](!0, i, o, l, l);
      this[c(281)] = h[c(281)], this[c(335)] = h[c(335)], !this[c(336)] && ((v = this[c(324) + "ct"]) == null || v.call(this, !0));
      const g = {};
      g[c(281)] = h[c(281)], g[c(335)] = h[c(335)], this[c(336)] = g;
    });
    on(this, Ol, (i) => {
      const o = at, c = i instanceof Uint8Array ? i : new Uint8Array(i);
      this[o(329)] = c;
    });
    on(this, Tl, () => {
      const i = at, o = new VideoDecoder({ output: async (l) => {
        const h = mr, g = await createImageBitmap(l);
        if ((!this[h(281)] || !this[h(335)]) && this[h(326)](l[h(270)], l[h(311) + "t"]), this[h(275)][h(344)](0, 0, this[h(281)], this[h(335)]), this[h(341) + "n"] == h(283))
          if (h(330) !== h(330)) {
            const v = R[h(292)](v)[h(269)](n[h(292)](E));
            return new B(v);
          } else this[h(303)][h(281)] = this[h(335)], this[h(303)][h(335)] = this[h(281)], this[h(275)][h(301)](0, this[h(281)]), this[h(275)][h(267)](Math.PI / 2), this[h(275)][h(287)](-1, -1), this[h(275)][h(325)](g, 0, 0, this[h(281)], this[h(335)]);
        else h(278) === h(278) ? (this[h(303)][h(281)] = this[h(281)], this[h(303)][h(335)] = this[h(335)], this[h(275)][h(325)](g, 0, 0, this[h(281)], this[h(335)])) : (d = a / T * t, A > u && (M = x / O * p, j = e / m * f));
        g[h(296)](), l[h(296)]();
      }, error: (l) => console[i(306)](i(293) + i(299), l) }), c = {};
      return c[i(334)] = i(315) + "E", c[i(328) + i(279)] = i(320) + i(308), c[i(331) + i(302)] = !0, o[i(282)](c), o;
    });
    on(this, Al, (i) => {
      var c;
      const o = at;
      for (let l = 0; l <= i[o(343)] - 4; l++)
        if (i[l] === 0 && i[l + 1] === 0 && i[l + 2] === 0 && i[l + 3] === 1)
          return (i[l + 4] & 31) === 5;
      for (let l = 0; l <= i[o(343)] - 3; l++)
        if (o(345) === o(323)) {
          const h = this[o(288)] == !0 ? H[o(277) + "t"] - 12 : h[o(277) + "t"] - 50, g = this[o(304) + "th"](!0, g, v, h, h);
          this[o(281)] = g[o(281)], this[o(335)] = g[o(335)], !this[o(336)] && ((c = this[o(324) + "ct"]) == null || c.call(this, !0));
          const v = {};
          v[o(281)] = g[o(281)], v[o(335)] = g[o(335)], this[o(336)] = v;
        } else if (i[l] === 0 && i[l + 1] === 0 && i[l + 2] === 1)
          return (i[l + 3] & 31) === 5;
      return !1;
    });
    on(this, Cl, (i, o) => {
      const c = at, l = Array[c(292)](i)[c(269)](Array[c(292)](o));
      return new Uint8Array(l);
    });
    on(this, El, (i) => {
      const o = at;
      if (!this[o(300)] || this[o(300)][o(310)] == o(296) || !this[o(329)]) return;
      let c = i instanceof Uint8Array ? i : new Uint8Array(i);
      const l = this[o(295)](c);
      l && (this[o(340)] = c), this[o(340)] && this[o(329)] && (!this[o(313)] && (c = this[o(305) + o(285)](this[o(329)], this[o(340)]), this[o(313)] = !0), this[o(300)][o(333)](new EncodedVideoChunk({ timestamp: performance[o(342)]() * 1e3, type: o(l ? 314 : 298), data: c })));
    });
    const h = mr;
    this[h(303)] = i, this[h(307)] = o, this[h(288)] = c, this[h(324) + "ct"] = l, this[h(275)] = i[h(290)]("2d"), this[h(300)] = this[h(268) + "er"](), this[h(329)] = null, this[h(340)] = null, this[h(313)] = null, this[h(281)] = null, this[h(335)] = null, this[h(336)] = null, this[h(341) + "n"] = h(266);
  }
}
function mr(s, i) {
  const o = li();
  return mr = function(c, l) {
    return c = c - 266, o[c];
  }, mr(s, i);
}
(function(s, i) {
  const o = Kr, c = s();
  for (; ; )
    try {
      if (-parseInt(o(521)) / 1 * (parseInt(o(542)) / 2) + -parseInt(o(592)) / 3 + -parseInt(o(539)) / 4 + -parseInt(o(506)) / 5 + parseInt(o(617)) / 6 * (-parseInt(o(501)) / 7) + -parseInt(o(548)) / 8 * (-parseInt(o(567)) / 9) + parseInt(o(618)) / 10 === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(ui, 179229);
function ui() {
  const s = ["IkCvb", "screen_mai", "addEventLi", "jVNFB", "348289zaLPqf", "de: ", "control", "COPY_TEXT", "emit", "clipboard", "showMenu", "fullscreen", "Element", "error", "mvlXO", "timeout", " closed co", "screenElem", "bzurs", "headers", "onScreenEv", "enElement", "797816ZVPKlR", "applicatio", "tabIndex", "2SGjAHu", "uXWNd", "test", "userAgent", "pReLy", "ror", "8admYAV", "children", "msFullscre", "join_room", "PMLFf", "password", "shortcutEv", "isDown", "method", "reconnecti", "IrVmL", "height", "qioQU", "jnblD", "type_clien", "decode", "UyefD", "eenElement", "setOrienta", "3116520mxoIAS", "iAaZT", "video_meta", "removeEven", "sync", "msg", "meta", "passwd", "message", "set", "size", "orientatio", "AYlIJ", "gZiQl", "n/json", "setVideoMe", "action", "false", "delete", "tListener", "connection", "iting for ", "onSyncIFra", "PvRJW", "text", "954990snxVdG", "mozFullScr", "data", "change", "middle", "aaHJG", "rWSSs", "Timeout wa", "iframe", "DpDEY", "shortcut", "get", "info", "jLaWb", "AeEKc", "qvjhZ", "writeText", "connect_er", "jBwVl", "post", "isMobile", "NuAMx", "een", "taskId", "stener", "1675614QdaLDc", "12265230xXmQAJ", "value", "device_id", "code", "MJnvp", "connect", "IMJnO", "response", "status", "fixTouch", "type", "setFullscr", "disconnect", "large", "Content-Ty", "DazPl", "draggable", "Lqysg", "TAsdo", "lheRd", "ent", "7scVpvk", "screen_", "jZine", "map", "screen", "1241160DtbfKY", "webkitFull", "image_", "tion", "current", "url", "length", "width", "center", "marginTop", "get_video_"];
  return ui = function() {
    return s;
  }, ui();
}
const vy = _l((s, i) => {
  const o = Kr, { serve: c, dataDevice: l, maxWidth: h, showAssistive: g, showDeviceId: v, syncEvent: b, syncButton: S } = s, C = l[o(620)], P = /iPhone|iPad|iPod|Android/i[o(544)](navigator[o(545)]), w = o(523), U = mt(null), V = mt(null), D = mt(null), [L, K] = It(null), [$, _] = It(null), J = {};
  J[o(527)] = !1, J[o(555)] = !1;
  const [q, te] = It(J), [Q, ae] = It(null), fe = o(508) + C, Se = o(502) + C, De = o(518) + "n_" + C, Ee = mt(null), [de, ye] = It([]), me = mt(null), Ie = mt(/* @__PURE__ */ new Map());
  _t(() => {
    _(v);
  }, [v]);
  const Ae = (re) => {
    const he = o;
    if (he(560) !== he(560)) {
      const ne = be[he(510)][he(603)](Oe[he(615)]);
      ne && (ne(i), c[he(510)][he(585)](l[he(615)]));
    } else ye((ne) => [...ne, re]);
  }, Re = (re) => {
    const he = o;
    U[he(510)][he(525)](he(575), re), b == null || b(re);
  };
  Nl(i, () => ({ api: async function(re, he = 5e3) {
    const ne = o;
    if (ne(568) !== ne(552)) return new Promise((ie, X) => {
      const le = ne;
      if (le(499) === le(499)) {
        const tt = setTimeout(() => {
          const se = le;
          Ie[se(510)][se(585)](re[se(615)]);
          const Je = {};
          Je[se(583)] = re[se(583)], Je[se(615)] = re[se(615)], Je[se(626)] = !1, Je[se(575)] = se(599) + se(588) + se(625), X(Je);
        }, he);
        Ie[le(510)][le(576)](re[le(615)], (se) => {
          clearTimeout(tt), ie(se);
        }), U[le(510)][le(525)](le(575), re);
      } else Pe(Ce[le(620)]);
    });
    {
      const ie = h(() => {
        const X = ne;
        ie[X(510)][X(585)](_[X(615)]);
        const le = {};
        le[X(583)] = q[X(583)], le[X(615)] = te[X(615)], le[X(626)] = !1, le[X(575)] = X(599) + X(588) + X(625), J(le);
      }, P);
      w[ne(510)][ne(576)](U[ne(615)], (X) => {
        ie(ie), _(X);
      }), L[ne(510)][ne(525)](ne(575), K);
    }
  }, sync: function(re) {
    const he = o;
    U[he(510)][he(525)](he(575), re);
  } })), _t(() => {
    (async () => {
      const re = Kr;
      try {
        const he = {};
        he[re(494) + "pe"] = re(540) + re(581);
        const ne = {};
        ne[re(620)] = l[re(620)], ne[re(553)] = l[re(574)];
        const ie = {};
        ie[re(511)] = c, ie[re(556)] = re(611), ie[re(532)] = 1e4, ie[re(536)] = he, ie[re(594)] = ne;
        const X = ie, le = await Nv(X);
        K(le[re(594)]);
      } catch (he) {
        if (re(564) !== re(564))
          l === h && g[re(602)] === re(620) ? L(!K) : S === C && P[re(602)] === re(571) ? $(_[re(620)]) : J(q);
        else {
          const ne = {};
          ne[re(572)] = he, ne[re(628)] = re(530), Ae(ne);
        }
      }
    })();
  }, []), _t(() => {
    const re = o;
    if (re(517) !== re(535)) {
      if (U[re(510)] || !L) return;
      const he = {};
      he[re(557) + "on"] = !1;
      const ne = Po(L, he);
      return ne.on(re(623), () => {
        const ie = re;
        if (ie(610) === ie(610)) {
          const X = {};
          X[ie(583)] = ie(623), X[ie(562) + "t"] = w, X[ie(620)] = l[ie(620)], X[ie(612)] = P, X[ie(574)] = l[ie(574)], ne[ie(525)](ie(551), X);
        } else {
          be[ie(510)][ie(585)](Oe[ie(615)]);
          const X = {};
          X[ie(583)] = Fe[ie(583)], X[ie(615)] = s[ie(615)], X[ie(626)] = !1, X[ie(575)] = ie(599) + ie(588) + ie(625), ke(X);
        }
      }), ne.on(re(551), (ie) => {
        const X = re;
        if (X(605) !== X(605))
          if (Oe) {
            if (h[X(510)][X(582) + "ta"](g), !v[X(510)][X(600)]) {
              const le = {};
              le[X(583)] = X(589) + "me", S[X(525)](X(575), le);
            }
          } else {
            const le = {};
            le[X(583)] = X(516) + X(573), l[X(525)](X(569), le);
          }
        else if (ie[X(626)] == !0) {
          U[X(510)] = ne;
          const le = {};
          le[X(583)] = X(537) + X(500), ne[X(525)](X(575), le);
        } else {
          const le = {};
          le[X(572)] = ie[X(572)], le[X(628)] = X(530), Ae(le);
        }
      }), ne.on(re(505), (ie) => {
        const X = re;
        me[X(510)][X(563)](ie);
      }), ne.on(re(569), (ie) => {
        const X = re;
        if (X(520) === X(520))
          if (ie)
            if (X(607) !== X(546)) {
              if (me[X(510)][X(582) + "ta"](ie), !me[X(510)][X(600)]) {
                const le = {};
                le[X(583)] = X(589) + "me", ne[X(525)](X(575), le);
              }
            } else {
              const le = Oe[X(510)];
              ke[X(510)] = new Fe(le, s, i, c);
            }
          else if (X(498) !== X(498)) pe(be), Oe(ke);
          else {
            const le = {};
            le[X(583)] = X(516) + X(573), ne[X(525)](X(569), le);
          }
        else {
          const le = {};
          le[X(572)] = Ce, le[X(628)] = X(530), Pe(le);
        }
      }), ne.on(re(575), (ie) => {
        const X = re;
        if ((ie[X(583)] == X(524) || ie[X(583)] == X(554) + X(500)) && ie[X(591)][X(512)] > 0 ? navigator[X(526)][X(608)](ie[X(591)]) : ie[X(583)] == X(578) + "n" && (me[X(510)][X(566) + X(509)](ie[X(619)]), Ee[X(510)][X(627)](ie[X(619)])), ie[X(615)])
          if (X(597) === X(503)) pe[X(510)][X(525)](X(575), be), Oe == null || Oe(ke);
          else {
            const le = Ie[X(510)][X(603)](ie[X(615)]);
            if (le)
              if (X(624) !== X(590)) le(ie), Ie[X(510)][X(585)](ie[X(615)]);
              else {
                const tt = () => {
                  const se = X, Je = tt[se(528) + se(529)] || P[se(507) + se(534) + se(500)] || w[se(593) + se(565)] || U[se(550) + se(538)];
                  V[se(510)][se(629) + se(614)](!!Je), D[se(510)][se(629) + se(614)](!!Je), L[se(510)][se(627)]();
                };
                return b[X(519) + X(616)](X(528) + X(595), tt), () => {
                  const se = X;
                  tt[se(570) + se(586)](se(528) + se(595), tt);
                };
              }
          }
      }), ne.on(re(609) + re(547), (ie) => {
        const X = re;
        if (X(598) !== X(598)) Pe[X(526)][X(608)](Ce[X(591)]);
        else {
          const le = {};
          le[X(572)] = ie, le[X(628)] = X(530), Ae(le);
        }
      }), ne.on(re(630), (ie) => {
        const X = re;
        if (X(601) === X(495)) Pe[X(570) + X(586)](X(528) + X(595), Ce);
        else {
          const le = {};
          le[X(572)] = X(587) + X(533) + X(522) + ie[X(621)], le[X(628)] = X(604), Ae(le);
        }
      }), () => {
        const ie = re;
        ne && (ie(580) === ie(531) ? (pe(be), Oe[ie(510)][ie(585)](ke[ie(615)])) : ne[ie(630)]());
      };
    } else if (pe[re(510)][re(582) + "ta"](be), !Oe[re(510)][re(600)]) {
      const he = {};
      he[re(583)] = re(589) + "me", Fe[re(525)](re(575), he);
    }
  }, [L]), _t(() => {
    const re = o, he = D[re(510)];
    me[re(510)] = new Xv(he, h, P, ae);
  }, []), _t(() => {
    const re = o;
    if (re(497) === re(497)) {
      const he = () => {
        const ne = re;
        if (ne(613) !== ne(606)) {
          const ie = document[ne(528) + ne(529)] || document[ne(507) + ne(534) + ne(500)] || document[ne(593) + ne(565)] || document[ne(550) + ne(538)];
          me[ne(510)][ne(629) + ne(614)](!!ie), Ee[ne(510)][ne(629) + ne(614)](!!ie), Ee[ne(510)][ne(627)]();
        } else Pe && pe[ne(630)]();
      };
      return document[re(519) + re(616)](re(528) + re(595), he), () => {
        const ne = re;
        if (ne(558) === ne(579))
          if (Oe[ne(626)] == !0) {
            l[ne(510)] = h;
            const ie = {};
            ie[ne(583)] = ne(537) + ne(500), g[ne(525)](ne(575), ie);
          } else {
            const ie = {};
            ie[ne(572)] = b[ne(572)], ie[ne(628)] = ne(530), v(ie);
          }
        else document[ne(570) + ne(586)](ne(528) + ne(595), he);
      };
    } else Te[re(630)]();
  }, []);
  const Te = {};
  Te[o(549)] = l[o(620)];
  const Pe = {};
  Pe[o(577)] = o(631);
  const Ce = {};
  Ce[o(577)] = o(631);
  const pe = {};
  pe[o(577)] = o(631);
  const be = {};
  be[o(559)] = 0, be[o(513)] = 0;
  const Oe = {};
  Oe[o(603)] = q, Oe[o(576)] = te;
  const ke = {};
  ke.id = fe, ke[o(541)] = "0", ke[o(496)] = o(584);
  const Fe = {};
  return Fe[o(515)] = 5, ge.jsxs(H0, { id: De, children: [$ && ge.jsx($0, { children: ge.jsx(q0, Te) }), de[o(512)] == 0 ? ge.jsxs(ge.Fragment, { children: [!Q && ge.jsxs(Yf, { align: o(514), gap: o(596), children: [ge.jsx(zr, Pe), ge.jsx(zr, Ce), ge.jsx(zr, pe)] }), ge.jsxs(U0, { ref: V, id: Se, style: Q ? {} : be, children: [g ? ge.jsx(Yv, { status: Oe, ref: Ee, imageRef: D, displayId: C, isMobile: P, isShowDeviceId: $, onSenData: (re, he) => {
    const ne = o;
    if (re === ua && he[ne(602)] === ne(620))
      if (ne(561) !== ne(561)) {
        const ie = ke[ne(528) + ne(529)] || Fe[ne(507) + ne(534) + ne(500)] || s[ne(593) + ne(565)] || i[ne(550) + ne(538)];
        c[ne(510)][ne(629) + ne(614)](!!ie), l[ne(510)][ne(629) + ne(614)](!!ie), h[ne(510)][ne(627)]();
      } else _(!$);
    else re === ua && he[ne(602)] === ne(571) ? ne(622) !== ne(543) ? S(l[ne(620)]) : Pe(!Ce) : Re(he);
  } }) : null, ge.jsx(zv, { canvasContent: ke, imageRef: D, isMobile: P, assistive: q, onImgEvent: (re, he) => {
    const ne = o;
    if (re === wd) {
      const ie = { ...q };
      ie[ne(527)] = !1, te(ie);
    } else Re(he);
  } })] })] }) : de[o(504)]((re, he) => ge.jsx(Uf, { style: Fe, message: re[o(572)], type: re[o(628)], showIcon: !0, closable: !0 }, he))] });
});
function Kr(s, i) {
  const o = ui();
  return Kr = function(c, l) {
    return c = c - 494, o[c];
  }, Kr(s, i);
}
function fa(s, i) {
  var o = fi();
  return fa = function(c, l) {
    c = c - 212;
    var h = o[c];
    return h;
  }, fa(s, i);
}
(function(s, i) {
  for (var o = fa, c = s(); ; )
    try {
      var l = -parseInt(o(221)) / 1 + parseInt(o(214)) / 2 + parseInt(o(215)) / 3 + parseInt(o(218)) / 4 * (-parseInt(o(212)) / 5) + parseInt(o(216)) / 6 + parseInt(o(220)) / 7 * (-parseInt(o(217)) / 8) + -parseInt(o(213)) / 9 * (parseInt(o(219)) / 10);
      if (l === i) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(fi, 527622);
function fi() {
  var s = ["388924QNUVyI", "73280PxRCXh", "1626331iXmnuu", "137420tVRNLm", "25gVWKEP", "198kPVhFs", "275736NKVzxf", "2273292ukBzJK", "3894684WUUisn", "8sIhIpG"];
  return fi = function() {
    return s;
  }, fi();
}
export {
  vy as ViewRP
};
