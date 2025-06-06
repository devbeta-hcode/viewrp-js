import * as w from "react";
import xe, { useDebugValue as Bs, createElement as df, useRef as Pe, useContext as _t, isValidElement as hf, version as pf, createContext as cs, useLayoutEffect as mf, useEffect as Ve, useState as ze, forwardRef as bc, useImperativeHandle as Sc } from "react";
import Fs from "react-dom";
function gf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ur = { exports: {} }, _n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function vf() {
  if (zs) return _n;
  zs = 1;
  var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, d = null, v = null;
    l !== void 0 && (d = "" + l), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: e, type: a, key: d, ref: v, props: f, _owner: o.current };
  }
  return _n.Fragment = n, _n.jsx = s, _n.jsxs = s, _n;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function yf() {
  return Vs || (Vs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var O = g && h[g] || h[m];
      return typeof O == "function" ? O : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(h) {
      {
        for (var O = arguments.length, _ = new Array(O > 1 ? O - 1 : 0), q = 1; q < O; q++)
          _[q - 1] = arguments[q];
        C("error", h, _);
      }
    }
    function C(h, O, _) {
      {
        var q = y.ReactDebugCurrentFrame, ne = q.getStackAddendum();
        ne !== "" && (O += "%s", _ = _.concat([ne]));
        var oe = _.map(function(ee) {
          return String(ee);
        });
        oe.unshift("Warning: " + O), Function.prototype.apply.call(console[h], console, oe);
      }
    }
    var T = !1, S = !1, A = !1, E = !1, P = !1, I;
    I = Symbol.for("react.module.reference");
    function U(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || P || h === o || h === l || h === u || E || h === v || T || S || A || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === I || h.getModuleId !== void 0));
    }
    function X(h, O, _) {
      var q = h.displayName;
      if (q)
        return q;
      var ne = O.displayName || O.name || "";
      return ne !== "" ? _ + "(" + ne + ")" : _;
    }
    function H(h) {
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
            var O = h;
            return H(O) + ".Consumer";
          case s:
            var _ = h;
            return H(_._context) + ".Provider";
          case c:
            return X(h, h.render, "ForwardRef");
          case f:
            var q = h.displayName || null;
            return q !== null ? q : N(h.type) || "Memo";
          case d: {
            var ne = h, oe = ne._payload, ee = ne._init;
            try {
              return N(ee(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, F = 0, j, V, R, k, Y, G, W;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function ue() {
      {
        if (F === 0) {
          j = console.log, V = console.info, R = console.warn, k = console.error, Y = console.group, G = console.groupCollapsed, W = console.groupEnd;
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
        F++;
      }
    }
    function re() {
      {
        if (F--, F === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, h, {
              value: j
            }),
            info: L({}, h, {
              value: V
            }),
            warn: L({}, h, {
              value: R
            }),
            error: L({}, h, {
              value: k
            }),
            group: L({}, h, {
              value: Y
            }),
            groupCollapsed: L({}, h, {
              value: G
            }),
            groupEnd: L({}, h, {
              value: W
            })
          });
        }
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = y.ReactCurrentDispatcher, le;
    function de(h, O, _) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (ne) {
            var q = ne.stack.trim().match(/\n( *(at )?)/);
            le = q && q[1] || "";
          }
        return `
` + le + h;
      }
    }
    var ge = !1, Ce;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new Me();
    }
    function pe(h, O) {
      if (!h || ge)
        return "";
      {
        var _ = Ce.get(h);
        if (_ !== void 0)
          return _;
      }
      var q;
      ge = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = ce.current, ce.current = null, ue();
      try {
        if (O) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Fe) {
              q = Fe;
            }
            Reflect.construct(h, [], ee);
          } else {
            try {
              ee.call();
            } catch (Fe) {
              q = Fe;
            }
            h.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            q = Fe;
          }
          h();
        }
      } catch (Fe) {
        if (Fe && q && typeof Fe.stack == "string") {
          for (var J = Fe.stack.split(`
`), Ie = q.stack.split(`
`), me = J.length - 1, be = Ie.length - 1; me >= 1 && be >= 0 && J[me] !== Ie[be]; )
            be--;
          for (; me >= 1 && be >= 0; me--, be--)
            if (J[me] !== Ie[be]) {
              if (me !== 1 || be !== 1)
                do
                  if (me--, be--, be < 0 || J[me] !== Ie[be]) {
                    var Se = `
` + J[me].replace(" at new ", " at ");
                    return h.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", h.displayName)), typeof h == "function" && Ce.set(h, Se), Se;
                  }
                while (me >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ce.current = oe, re(), Error.prepareStackTrace = ne;
      }
      var en = h ? h.displayName || h.name : "", Ft = en ? de(en) : "";
      return typeof h == "function" && Ce.set(h, Ft), Ft;
    }
    function st(h, O, _) {
      return pe(h, !1);
    }
    function z(h) {
      var O = h.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ye(h, O, _) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return pe(h, z(h));
      if (typeof h == "string")
        return de(h);
      switch (h) {
        case l:
          return de("Suspense");
        case u:
          return de("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return st(h.render);
          case f:
            return Ye(h.type, O, _);
          case d: {
            var q = h, ne = q._payload, oe = q._init;
            try {
              return Ye(oe(ne), O, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, pt = {}, Lt = y.ReactDebugCurrentFrame;
    function at(h) {
      if (h) {
        var O = h._owner, _ = Ye(h.type, h._source, O ? O.type : null);
        Lt.setExtraStackFrame(_);
      } else
        Lt.setExtraStackFrame(null);
    }
    function Dt(h, O, _, q, ne) {
      {
        var oe = Function.call.bind(Ae);
        for (var ee in h)
          if (oe(h, ee)) {
            var J = void 0;
            try {
              if (typeof h[ee] != "function") {
                var Ie = Error((q || "React class") + ": " + _ + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              J = h[ee](O, ee, q, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              J = me;
            }
            J && !(J instanceof Error) && (at(ne), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", _, ee, typeof J), at(null)), J instanceof Error && !(J.message in pt) && (pt[J.message] = !0, at(ne), b("Failed %s type: %s", _, J.message), at(null));
          }
      }
    }
    var _e = Array.isArray;
    function ve(h) {
      return _e(h);
    }
    function Be(h) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, _ = O && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _;
      }
    }
    function Et(h) {
      try {
        return mt(h), !1;
      } catch {
        return !0;
      }
    }
    function mt(h) {
      return "" + h;
    }
    function tr(h) {
      if (Et(h))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(h)), mt(h);
    }
    var nr = y.ReactCurrentOwner, To = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, or;
    function Oo(h) {
      if (Ae.call(h, "ref")) {
        var O = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ro(h) {
      if (Ae.call(h, "key")) {
        var O = Object.getOwnPropertyDescriptor(h, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function ko(h, O) {
      typeof h.ref == "string" && nr.current;
    }
    function Po(h, O) {
      {
        var _ = function() {
          rr || (rr = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function _o(h, O) {
      {
        var _ = function() {
          or || (or = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var No = function(h, O, _, q, ne, oe, ee) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: O,
        ref: _,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function jo(h, O, _, q, ne) {
      {
        var oe, ee = {}, J = null, Ie = null;
        _ !== void 0 && (tr(_), J = "" + _), Ro(O) && (tr(O.key), J = "" + O.key), Oo(O) && (Ie = O.ref, ko(O, ne));
        for (oe in O)
          Ae.call(O, oe) && !To.hasOwnProperty(oe) && (ee[oe] = O[oe]);
        if (h && h.defaultProps) {
          var me = h.defaultProps;
          for (oe in me)
            ee[oe] === void 0 && (ee[oe] = me[oe]);
        }
        if (J || Ie) {
          var be = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          J && Po(ee, be), Ie && _o(ee, be);
        }
        return No(h, J, Ie, ne, q, nr.current, ee);
      }
    }
    var On = y.ReactCurrentOwner, ir = y.ReactDebugCurrentFrame;
    function xt(h) {
      if (h) {
        var O = h._owner, _ = Ye(h.type, h._source, O ? O.type : null);
        ir.setExtraStackFrame(_);
      } else
        ir.setExtraStackFrame(null);
    }
    var Rn;
    Rn = !1;
    function kn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function sr() {
      {
        if (On.current) {
          var h = N(On.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ar(h) {
      return "";
    }
    var Mt = {};
    function Jt(h) {
      {
        var O = sr();
        if (!O) {
          var _ = typeof h == "string" ? h : h.displayName || h.name;
          _ && (O = `

Check the top-level render call using <` + _ + ">.");
        }
        return O;
      }
    }
    function Bt(h, O) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var _ = Jt(O);
        if (Mt[_])
          return;
        Mt[_] = !0;
        var q = "";
        h && h._owner && h._owner !== On.current && (q = " It was passed a child from " + N(h._owner.type) + "."), xt(h), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, q), xt(null);
      }
    }
    function Qt(h, O) {
      {
        if (typeof h != "object")
          return;
        if (ve(h))
          for (var _ = 0; _ < h.length; _++) {
            var q = h[_];
            kn(q) && Bt(q, O);
          }
        else if (kn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ne = p(h);
          if (typeof ne == "function" && ne !== h.entries)
            for (var oe = ne.call(h), ee; !(ee = oe.next()).done; )
              kn(ee.value) && Bt(ee.value, O);
        }
      }
    }
    function Ct(h) {
      {
        var O = h.type;
        if (O == null || typeof O == "string")
          return;
        var _;
        if (typeof O == "function")
          _ = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          _ = O.propTypes;
        else
          return;
        if (_) {
          var q = N(O);
          Dt(_, h.props, "prop", q, h);
        } else if (O.PropTypes !== void 0 && !Rn) {
          Rn = !0;
          var ne = N(O);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(h) {
      {
        for (var O = Object.keys(h.props), _ = 0; _ < O.length; _++) {
          var q = O[_];
          if (q !== "children" && q !== "key") {
            xt(h), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), xt(null);
            break;
          }
        }
        h.ref !== null && (xt(h), b("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
      }
    }
    var Pn = {};
    function cr(h, O, _, q, ne, oe) {
      {
        var ee = U(h);
        if (!ee) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = ar();
          Ie ? J += Ie : J += sr();
          var me;
          h === null ? me = "null" : ve(h) ? me = "array" : h !== void 0 && h.$$typeof === e ? (me = "<" + (N(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : me = typeof h, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, J);
        }
        var be = jo(h, O, _, ne, oe);
        if (be == null)
          return be;
        if (ee) {
          var Se = O.children;
          if (Se !== void 0)
            if (q)
              if (ve(Se)) {
                for (var en = 0; en < Se.length; en++)
                  Qt(Se[en], h);
                Object.freeze && Object.freeze(Se);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qt(Se, h);
        }
        if (Ae.call(O, "key")) {
          var Ft = N(h), Fe = Object.keys(O).filter(function(ff) {
            return ff !== "key";
          }), Lo = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pn[Ft + Lo]) {
            var uf = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lo, Ft, uf, Ft), Pn[Ft + Lo] = !0;
          }
        }
        return h === r ? At(be) : Ct(be), be;
      }
    }
    function ke(h, O, _) {
      return cr(h, O, _, !0);
    }
    function lr(h, O, _) {
      return cr(h, O, _, !1);
    }
    var Io = lr, ye = ke;
    Nn.Fragment = r, Nn.jsx = Io, Nn.jsxs = ye;
  }()), Nn;
}
var Hs;
function bf() {
  return Hs || (Hs = 1, process.env.NODE_ENV === "production" ? ur.exports = vf() : ur.exports = yf()), ur.exports;
}
var M = bf(), He = function() {
  return He = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, He.apply(this, arguments);
};
function cn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, o = e.length, i; r < o; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function Sf(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var wf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ef = /* @__PURE__ */ Sf(
  function(t) {
    return wf.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), he = "-ms-", zn = "-moz-", ae = "-webkit-", wc = "comm", no = "rule", ls = "decl", xf = "@import", Ec = "@keyframes", Cf = "@layer", xc = Math.abs, us = String.fromCharCode, ii = Object.assign;
function Af(t, e) {
  return je(t, 0) ^ 45 ? (((e << 2 ^ je(t, 0)) << 2 ^ je(t, 1)) << 2 ^ je(t, 2)) << 2 ^ je(t, 3) : 0;
}
function Cc(t) {
  return t.trim();
}
function bt(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function Z(t, e, n) {
  return t.replace(e, n);
}
function Or(t, e, n) {
  return t.indexOf(e, n);
}
function je(t, e) {
  return t.charCodeAt(e) | 0;
}
function ln(t, e, n) {
  return t.slice(e, n);
}
function ut(t) {
  return t.length;
}
function Ac(t) {
  return t.length;
}
function Bn(t, e) {
  return e.push(t), t;
}
function Tf(t, e) {
  return t.map(e).join("");
}
function Us(t, e) {
  return t.filter(function(n) {
    return !bt(n, e);
  });
}
var ro = 1, un = 1, Tc = 0, Ke = 0, Te = 0, yn = "";
function oo(t, e, n, r, o, i, s, a) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: ro, column: un, length: s, return: "", siblings: a };
}
function Tt(t, e) {
  return ii(oo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function tn(t) {
  for (; t.root; )
    t = Tt(t.root, { children: [t] });
  Bn(t, t.siblings);
}
function Of() {
  return Te;
}
function Rf() {
  return Te = Ke > 0 ? je(yn, --Ke) : 0, un--, Te === 10 && (un = 1, ro--), Te;
}
function Qe() {
  return Te = Ke < Tc ? je(yn, Ke++) : 0, un++, Te === 10 && (un = 1, ro++), Te;
}
function qt() {
  return je(yn, Ke);
}
function Rr() {
  return Ke;
}
function io(t, e) {
  return ln(yn, t, e);
}
function si(t) {
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
function kf(t) {
  return ro = un = 1, Tc = ut(yn = t), Ke = 0, [];
}
function Pf(t) {
  return yn = "", t;
}
function Do(t) {
  return Cc(io(Ke - 1, ai(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function _f(t) {
  for (; (Te = qt()) && Te < 33; )
    Qe();
  return si(t) > 2 || si(Te) > 3 ? "" : " ";
}
function Nf(t, e) {
  for (; --e && Qe() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return io(t, Rr() + (e < 6 && qt() == 32 && Qe() == 32));
}
function ai(t) {
  for (; Qe(); )
    switch (Te) {
      // ] ) " '
      case t:
        return Ke;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ai(Te);
        break;
      // (
      case 40:
        t === 41 && ai(t);
        break;
      // \
      case 92:
        Qe();
        break;
    }
  return Ke;
}
function jf(t, e) {
  for (; Qe() && t + Te !== 57; )
    if (t + Te === 84 && qt() === 47)
      break;
  return "/*" + io(e, Ke - 1) + "*" + us(t === 47 ? t : Qe());
}
function If(t) {
  for (; !si(qt()); )
    Qe();
  return io(t, Ke);
}
function Lf(t) {
  return Pf(kr("", null, null, null, [""], t = kf(t), 0, [0], t));
}
function kr(t, e, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, v = 0, g = 0, m = 1, p = 1, y = 1, b = 0, C = "", T = o, S = i, A = r, E = C; p; )
    switch (g = b, b = Qe()) {
      // (
      case 40:
        if (g != 108 && je(E, f - 1) == 58) {
          Or(E += Z(Do(b), "&", "&\f"), "&\f", xc(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Do(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += _f(g);
        break;
      // \
      case 92:
        E += Nf(Rr() - 1, 7);
        continue;
      // /
      case 47:
        switch (qt()) {
          case 42:
          case 47:
            Bn(Df(jf(Qe(), Rr()), e, n, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = ut(E) * y;
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
            y == -1 && (E = Z(E, /\f/g, "")), v > 0 && ut(E) - f && Bn(v > 32 ? Ws(E + ";", r, n, f - 1, c) : Ws(Z(E, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Bn(A = qs(E, e, n, l, u, o, a, C, T = [], S = [], f, i), i), b === 123)
              if (u === 0)
                kr(E, e, A, A, T, i, f, a, S);
              else
                switch (d === 99 && je(E, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    kr(t, A, A, r && Bn(qs(t, A, A, 0, 0, o, a, C, o, T = [], f, S), S), o, S, f, a, r ? T : S);
                    break;
                  default:
                    kr(E, A, A, A, [""], S, 0, a, S);
                }
        }
        l = u = v = 0, m = y = 1, C = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + ut(E), v = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && Rf() == 125)
            continue;
        }
        switch (E += us(b), b * m) {
          // &
          case 38:
            y = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (ut(E) - 1) * y, y = 1;
            break;
          // @
          case 64:
            qt() === 45 && (E += Do(Qe())), d = qt(), u = f = ut(C = E += If(Rr())), b++;
            break;
          // -
          case 45:
            g === 45 && ut(E) == 2 && (m = 0);
        }
    }
  return i;
}
function qs(t, e, n, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, v = o === 0 ? i : [""], g = Ac(v), m = 0, p = 0, y = 0; m < r; ++m)
    for (var b = 0, C = ln(t, d + 1, d = xc(p = s[m])), T = t; b < g; ++b)
      (T = Cc(p > 0 ? v[b] + " " + C : Z(C, /&\f/g, v[b]))) && (c[y++] = T);
  return oo(t, e, n, o === 0 ? no : a, c, l, u, f);
}
function Df(t, e, n, r) {
  return oo(t, e, n, wc, us(Of()), ln(t, 2, -2), 0, r);
}
function Ws(t, e, n, r, o) {
  return oo(t, e, n, ls, ln(t, 0, r), ln(t, r + 1, -1), r, o);
}
function Oc(t, e, n) {
  switch (Af(t, e)) {
    // color-adjust
    case 5103:
      return ae + "print-" + t + t;
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
      return ae + t + t;
    // tab-size
    case 4789:
      return zn + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + t + zn + t + he + t + t;
    // writing-mode
    case 5936:
      switch (je(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return ae + t + he + Z(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return ae + t + he + Z(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return ae + t + he + Z(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ae + t + he + t + t;
    // order
    case 6165:
      return ae + t + he + "flex-" + t + t;
    // align-items
    case 5187:
      return ae + t + Z(t, /(\w+).+(:[^]+)/, ae + "box-$1$2" + he + "flex-$1$2") + t;
    // align-self
    case 5443:
      return ae + t + he + "flex-item-" + Z(t, /flex-|-self/g, "") + (bt(t, /flex-|baseline/) ? "" : he + "grid-row-" + Z(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return ae + t + he + "flex-line-pack" + Z(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return ae + t + he + Z(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return ae + t + he + Z(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return ae + "box-" + Z(t, "-grow", "") + ae + t + he + Z(t, "grow", "positive") + t;
    // transition
    case 4554:
      return ae + Z(t, /([^-])(transform)/g, "$1" + ae + "$2") + t;
    // cursor
    case 6187:
      return Z(Z(Z(t, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return Z(t, /(image-set\([^]*)/, ae + "$1$`$1");
    // justify-content
    case 4968:
      return Z(Z(t, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + t + t;
    // justify-self
    case 4200:
      if (!bt(t, /flex-|baseline/)) return he + "grid-column-align" + ln(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return he + Z(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, bt(r.props, /grid-\w+-end/);
      }) ? ~Or(t + (n = n[e].value), "span", 0) ? t : he + Z(t, "-start", "") + t + he + "grid-row-span:" + (~Or(n, "span", 0) ? bt(n, /\d+/) : +bt(n, /\d+/) - +bt(t, /\d+/)) + ";" : he + Z(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return bt(r.props, /grid-\w+-start/);
      }) ? t : he + Z(Z(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(t, /(.+)-inline(.+)/, ae + "$1$2") + t;
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
      if (ut(t) - 1 - e > 6)
        switch (je(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (je(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Z(t, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + zn + (je(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Or(t, "stretch", 0) ? Oc(Z(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Z(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return he + o + ":" + i + l + (s ? he + o + "-span:" + (a ? c : +c - +i) + l : "") + t;
      });
    // position: sticky
    case 4949:
      if (je(t, e + 6) === 121)
        return Z(t, ":", ":" + ae) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (je(t, je(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Z(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ae + (je(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + he + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return Z(t, ":", ":" + he) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Z(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Yr(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Mf(t, e, n, r) {
  switch (t.type) {
    case Cf:
      if (t.children.length) break;
    case xf:
    case ls:
      return t.return = t.return || t.value;
    case wc:
      return "";
    case Ec:
      return t.return = t.value + "{" + Yr(t.children, r) + "}";
    case no:
      if (!ut(t.value = t.props.join(","))) return "";
  }
  return ut(n = Yr(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Bf(t) {
  var e = Ac(t);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < e; a++)
      s += t[a](n, r, o, i) || "";
    return s;
  };
}
function Ff(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function zf(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ls:
        t.return = Oc(t.value, t.length, n);
        return;
      case Ec:
        return Yr([Tt(t, { value: Z(t.value, "@", "@" + ae) })], r);
      case no:
        if (t.length)
          return Tf(n = t.props, function(o) {
            switch (bt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                tn(Tt(t, { props: [Z(o, /:(read-\w+)/, ":" + zn + "$1")] })), tn(Tt(t, { props: [o] })), ii(t, { props: Us(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                tn(Tt(t, { props: [Z(o, /:(plac\w+)/, ":" + ae + "input-$1")] })), tn(Tt(t, { props: [Z(o, /:(plac\w+)/, ":" + zn + "$1")] })), tn(Tt(t, { props: [Z(o, /:(plac\w+)/, he + "input-$1")] })), tn(Tt(t, { props: [o] })), ii(t, { props: Us(n, r) });
                break;
            }
            return "";
          });
    }
}
var Vf = {
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
}, Gt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rc = "active", kc = "data-styled-version", so = "6.1.18", fs = `/*!sc*/
`, Xr = typeof window < "u" && typeof document < "u", Hf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ys = /invalid hook call/i, fr = /* @__PURE__ */ new Set(), Uf = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var n = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(t).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ys.test(s) ? (i = !1, fr.delete(r)) : o.apply(void 0, cn([s], a, !1));
      }, Pe(), i && !fr.has(r) && (console.warn(r), fr.add(r));
    } catch (s) {
      Ys.test(s.message) && fr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ao = Object.freeze([]), fn = Object.freeze({});
function qf(t, e, n) {
  return n === void 0 && (n = fn), t.theme !== n.theme && t.theme || e || n.theme;
}
var ci = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Yf = /(^-|-$)/g;
function Xs(t) {
  return t.replace(Wf, "-").replace(Yf, "");
}
var Xf = /(a)(d)/gi, dr = 52, $s = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function li(t) {
  var e, n = "";
  for (e = Math.abs(t); e > dr; e = e / dr | 0) n = $s(e % dr) + n;
  return ($s(e % dr) + n).replace(Xf, "$1-$2");
}
var Mo, Pc = 5381, zt = function(t, e) {
  for (var n = e.length; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, _c = function(t) {
  return zt(Pc, t);
};
function $f(t) {
  return li(_c(t) >>> 0);
}
function Nc(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Bo(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var jc = typeof Symbol == "function" && Symbol.for, Ic = jc ? Symbol.for("react.memo") : 60115, Kf = jc ? Symbol.for("react.forward_ref") : 60112, Gf = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zf = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Lc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Jf = ((Mo = {})[Kf] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mo[Ic] = Lc, Mo);
function Ks(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Ic ? Lc : "$$typeof" in t ? Jf[t.$$typeof] : Gf;
  var e;
}
var Qf = Object.defineProperty, ed = Object.getOwnPropertyNames, Gs = Object.getOwnPropertySymbols, td = Object.getOwnPropertyDescriptor, nd = Object.getPrototypeOf, Zs = Object.prototype;
function Dc(t, e, n) {
  if (typeof e != "string") {
    if (Zs) {
      var r = nd(e);
      r && r !== Zs && Dc(t, r, n);
    }
    var o = ed(e);
    Gs && (o = o.concat(Gs(e)));
    for (var i = Ks(t), s = Ks(e), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Zf || n && n[c] || s && c in s || i && c in i)) {
        var l = td(e, c);
        try {
          Qf(t, c, l);
        } catch {
        }
      }
    }
  }
  return t;
}
function dn(t) {
  return typeof t == "function";
}
function ds(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Ht(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Js(t, e) {
  if (t.length === 0) return "";
  for (var n = t[0], r = 1; r < t.length; r++) n += t[r];
  return n;
}
function hn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function ui(t, e, n) {
  if (n === void 0 && (n = !1), !n && !hn(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var r = 0; r < e.length; r++) t[r] = ui(t[r], e[r]);
  else if (hn(e)) for (var r in e) t[r] = ui(t[r], e[r]);
  return t;
}
function hs(t, e) {
  Object.defineProperty(t, "toString", { value: e });
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
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var n = t[0], r = [], o = 1, i = t.length; o < i; o += 1) r.push(t[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function bn(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(od.apply(void 0, cn([rd[t]], e, !1)).trim());
}
var id = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n = 0, r = 0; r < e; r++) n += this.groupSizes[r];
    return n;
  }, t.prototype.insertRules = function(e, n) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; e >= i; ) if ((i <<= 1) < 0) throw bn(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(e + 1), c = (s = 0, n.length); s < c; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[e]++, a++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n;
      this.groupSizes[e] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(e) {
    var n = "";
    if (e >= this.length || this.groupSizes[e] === 0) return n;
    for (var r = this.groupSizes[e], o = this.indexOfGroup(e), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(fs);
    return n;
  }, t;
}(), sd = 1 << 30, Pr = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), _r = 1, hr = function(t) {
  if (Pr.has(t)) return Pr.get(t);
  for (; $r.has(_r); ) _r++;
  var e = _r++;
  if (process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > sd)) throw bn(16, "".concat(e));
  return Pr.set(t, e), $r.set(e, t), e;
}, ad = function(t, e) {
  _r = e + 1, Pr.set(t, e), $r.set(e, t);
}, cd = "style[".concat(Gt, "][").concat(kc, '="').concat(so, '"]'), ld = new RegExp("^".concat(Gt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ud = function(t, e, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(e, r);
}, fd = function(t, e) {
  for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(fs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(ld);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (ad(u, l), ud(t, u, c[3]), t.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Qs = function(t) {
  for (var e = document.querySelectorAll(cd), n = 0, r = e.length; n < r; n++) {
    var o = e[n];
    o && o.getAttribute(Gt) !== Rc && (fd(t, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function dd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Mc = function(t) {
  var e = document.head, n = t || e, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Gt, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Gt, Rc), r.setAttribute(kc, so);
  var s = dd();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, hd = function() {
  function t(e) {
    this.element = Mc(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw bn(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    try {
      return this.sheet.insertRule(n, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var n = this.sheet.cssRules[e];
    return n && n.cssText ? n.cssText : "";
  }, t;
}(), pd = function() {
  function t(e) {
    this.element = Mc(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    if (e <= this.length && e >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), md = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), ea = Xr, gd = { isServer: !Xr, useCSSOMInjection: !Hf }, Bc = function() {
  function t(e, n, r) {
    e === void 0 && (e = fn), n === void 0 && (n = {});
    var o = this;
    this.options = He(He({}, gd), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && Xr && ea && (ea = !1, Qs(this)), hs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var d = function(y) {
            return $r.get(y);
          }(f);
          if (d === void 0) return "continue";
          var v = i.names.get(d), g = s.getGroup(f);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var m = "".concat(Gt, ".g").concat(f, '[id="').concat(d, '"]'), p = "";
          v !== void 0 && v.forEach(function(y) {
            y.length > 0 && (p += "".concat(y, ","));
          }), c += "".concat(g).concat(m, '{content:"').concat(p, '"}').concat(fs);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return t.registerId = function(e) {
    return hr(e);
  }, t.prototype.rehydrate = function() {
    !this.server && Xr && Qs(this);
  }, t.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new t(He(He({}, this.options), e), this.gs, n && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new md(o) : r ? new hd(o) : new pd(o);
    }(this.options), new id(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, t.prototype.registerName = function(e, n) {
    if (hr(e), this.names.has(e)) this.names.get(e).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(e, r);
    }
  }, t.prototype.insertRules = function(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(hr(e), r);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(hr(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), vd = /&/g, yd = /^\s*\/\/.*$/gm;
function Fc(t, e) {
  return t.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Fc(n.children, e)), n;
  });
}
function bd(t) {
  var e, n, r, o = fn, i = o.options, s = i === void 0 ? fn : i, a = o.plugins, c = a === void 0 ? ao : a, l = function(d, v, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(e) : d;
  }, u = c.slice();
  u.push(function(d) {
    d.type === no && d.value.includes("&") && (d.props[0] = d.props[0].replace(vd, n).replace(r, l));
  }), s.prefix && u.push(zf), u.push(Mf);
  var f = function(d, v, g, m) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), m === void 0 && (m = "&"), e = m, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var p = d.replace(yd, ""), y = Lf(g || v ? "".concat(g, " ").concat(v, " { ").concat(p, " }") : p);
    s.namespace && (y = Fc(y, s.namespace));
    var b = [];
    return Yr(y, Bf(u.concat(Ff(function(C) {
      return b.push(C);
    })))), b;
  };
  return f.hash = c.length ? c.reduce(function(d, v) {
    return v.name || bn(15), zt(d, v.name);
  }, Pc).toString() : "", f;
}
var Sd = new Bc(), fi = bd(), zc = xe.createContext({ shouldForwardProp: void 0, styleSheet: Sd, stylis: fi });
zc.Consumer;
xe.createContext(void 0);
function ta() {
  return _t(zc);
}
var na = function() {
  function t(e, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = fi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, hs(this, function() {
      throw bn(12, String(r.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = fi), this.name + e.hash;
  }, t;
}(), wd = function(t) {
  return t >= "A" && t <= "Z";
};
function ra(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    if (n === 1 && r === "-" && t[0] === "-") return t;
    wd(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Vc = function(t) {
  return t == null || t === !1 || t === "";
}, Hc = function(t) {
  var e, n, r = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !Vc(i) && (Array.isArray(i) && i.isCss || dn(i) ? r.push("".concat(ra(o), ":"), i, ";") : hn(i) ? r.push.apply(r, cn(cn(["".concat(o, " {")], Hc(i), !1), ["}"], !1)) : r.push("".concat(ra(o), ": ").concat((e = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in Vf || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Wt(t, e, n, r) {
  if (Vc(t)) return [];
  if (ds(t)) return [".".concat(t.styledComponentId)];
  if (dn(t)) {
    if (!dn(i = t) || i.prototype && i.prototype.isReactComponent || !e) return [t];
    var o = t(e);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof na || hn(o) || o === null || console.error("".concat(Nc(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Wt(o, e, n, r);
  }
  var i;
  return t instanceof na ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : hn(t) ? Hc(t) : Array.isArray(t) ? Array.prototype.concat.apply(ao, t.map(function(s) {
    return Wt(s, e, n, r);
  })) : [t.toString()];
}
function Ed(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (dn(n) && !ds(n)) return !1;
  }
  return !0;
}
var xd = _c(so), Cd = function() {
  function t(e, n, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ed(e), this.componentId = n, this.baseHash = zt(xd, n), this.baseStyle = r, Bc.registerId(n);
  }
  return t.prototype.generateAndInjectStyles = function(e, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Ht(o, this.staticRulesId);
    else {
      var i = Js(Wt(this.rules, e, n, r)), s = li(zt(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = Ht(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = zt(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = zt(c, f));
        else if (f) {
          var d = Js(Wt(f, e, n, r));
          c = zt(c, d + u), l += d;
        }
      }
      if (l) {
        var v = li(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = Ht(o, v);
      }
    }
    return o;
  }, t;
}(), Uc = xe.createContext(void 0);
Uc.Consumer;
var Fo = {}, oa = /* @__PURE__ */ new Set();
function Ad(t, e, n) {
  var r = ds(t), o = t, i = !Bo(t), s = e.attrs, a = s === void 0 ? ao : s, c = e.componentId, l = c === void 0 ? function(T, S) {
    var A = typeof T != "string" ? "sc" : Xs(T);
    Fo[A] = (Fo[A] || 0) + 1;
    var E = "".concat(A, "-").concat($f(so + A + Fo[A]));
    return S ? "".concat(S, "-").concat(E) : E;
  }(e.displayName, e.parentComponentId) : c, u = e.displayName, f = u === void 0 ? function(T) {
    return Bo(T) ? "styled.".concat(T) : "Styled(".concat(Nc(T), ")");
  }(t) : u, d = e.displayName && e.componentId ? "".concat(Xs(e.displayName), "-").concat(e.componentId) : e.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = e.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var p = e.shouldForwardProp;
      g = function(T, S) {
        return m(T, S) && p(T, S);
      };
    } else g = m;
  }
  var y = new Cd(n, d, r ? o.componentStyle : void 0);
  function b(T, S) {
    return function(A, E, P) {
      var I = A.attrs, U = A.componentStyle, X = A.defaultProps, H = A.foldedComponentIds, N = A.styledComponentId, L = A.target, F = xe.useContext(Uc), j = ta(), V = A.shouldForwardProp || j.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Bs(N);
      var R = qf(E, F, X) || fn, k = function(re, ce, le) {
        for (var de, ge = He(He({}, ce), { className: void 0, theme: le }), Ce = 0; Ce < re.length; Ce += 1) {
          var Me = dn(de = re[Ce]) ? de(ge) : de;
          for (var pe in Me) ge[pe] = pe === "className" ? Ht(ge[pe], Me[pe]) : pe === "style" ? He(He({}, ge[pe]), Me[pe]) : Me[pe];
        }
        return ce.className && (ge.className = Ht(ge.className, ce.className)), ge;
      }(I, E, R), Y = k.as || L, G = {};
      for (var W in k) k[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && k.theme === R || (W === "forwardedAs" ? G.as = k.forwardedAs : V && !V(W, Y) || (G[W] = k[W], V || process.env.NODE_ENV !== "development" || Ef(W) || oa.has(W) || !ci.has(Y) || (oa.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var $ = function(re, ce) {
        var le = ta(), de = re.generateAndInjectStyles(ce, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && Bs(de), de;
      }(U, k);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses($);
      var ue = Ht(H, N);
      return $ && (ue += " " + $), k.className && (ue += " " + k.className), G[Bo(Y) && !ci.has(Y) ? "class" : "className"] = ue, P && (G.ref = P), df(Y, G);
    }(C, T, S);
  }
  b.displayName = f;
  var C = xe.forwardRef(b);
  return C.attrs = v, C.componentStyle = y, C.displayName = f, C.shouldForwardProp = g, C.foldedComponentIds = r ? Ht(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = d, C.target = r ? o.target : t, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? function(S) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var P = 0, I = A; P < I.length; P++) ui(S, I[P], !0);
      return S;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Uf(f, d), C.warnTooManyClasses = /* @__PURE__ */ function(T, S) {
    var A = {}, E = !1;
    return function(P) {
      if (!E && (A[P] = !0, Object.keys(A).length >= 200)) {
        var I = S ? ' with the id of "'.concat(S, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(I, `.
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
  }(f, d)), hs(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Dc(C, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function ia(t, e) {
  for (var n = [t[0]], r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
var sa = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Td(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (dn(t) || hn(t)) return sa(Wt(ia(ao, cn([t], e, !0))));
  var r = t;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? Wt(r) : sa(Wt(ia(r, e)));
}
function di(t, e, n) {
  if (n === void 0 && (n = fn), !e) throw bn(1, e);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(e, n, Td.apply(void 0, cn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return di(t, e, He(He({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return di(t, e, He(He({}, n), o));
  }, r;
}
var qc = function(t) {
  return di(Ad, t);
}, nt = qc;
ci.forEach(function(t) {
  nt[t] = qc(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var pr = "__sc-".concat(Gt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[pr] || (window[pr] = 0), window[pr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[pr] += 1);
const Od = nt.div`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, Rd = nt.div`
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
`, kd = nt.canvas`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Pd = nt.span`
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
`, _d = nt.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, dt = /* @__PURE__ */ Object.create(null);
dt.open = "0";
dt.close = "1";
dt.ping = "2";
dt.pong = "3";
dt.message = "4";
dt.upgrade = "5";
dt.noop = "6";
const Nr = /* @__PURE__ */ Object.create(null);
Object.keys(dt).forEach((t) => {
  Nr[dt[t]] = t;
});
const hi = { type: "error", data: "parser error" }, Wc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Yc = typeof ArrayBuffer == "function", Xc = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, ps = ({ type: t, data: e }, n, r) => Wc && e instanceof Blob ? n ? r(e) : aa(e, r) : Yc && (e instanceof ArrayBuffer || Xc(e)) ? n ? r(e) : aa(new Blob([e]), r) : r(dt[t] + (e || "")), aa = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function ca(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let zo;
function Nd(t, e) {
  if (Wc && t.data instanceof Blob)
    return t.data.arrayBuffer().then(ca).then(e);
  if (Yc && (t.data instanceof ArrayBuffer || Xc(t.data)))
    return e(ca(t.data));
  ps(t, !1, (n) => {
    zo || (zo = new TextEncoder()), e(zo.encode(n));
  });
}
const la = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < la.length; t++)
  Fn[la.charCodeAt(t)] = t;
const jd = (t) => {
  let e = t.length * 0.75, n = t.length, r, o = 0, i, s, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = Fn[t.charCodeAt(r)], s = Fn[t.charCodeAt(r + 1)], a = Fn[t.charCodeAt(r + 2)], c = Fn[t.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Id = typeof ArrayBuffer == "function", ms = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: $c(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Ld(t.substring(1), e)
  } : Nr[n] ? t.length > 1 ? {
    type: Nr[n],
    data: t.substring(1)
  } : {
    type: Nr[n]
  } : hi;
}, Ld = (t, e) => {
  if (Id) {
    const n = jd(t);
    return $c(n, e);
  } else
    return { base64: !0, data: t };
}, $c = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Kc = "", Dd = (t, e) => {
  const n = t.length, r = new Array(n);
  let o = 0;
  t.forEach((i, s) => {
    ps(i, !1, (a) => {
      r[s] = a, ++o === n && e(r.join(Kc));
    });
  });
}, Md = (t, e) => {
  const n = t.split(Kc), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = ms(n[o], e);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Bd() {
  return new TransformStream({
    transform(t, e) {
      Nd(t, (n) => {
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
let Vo;
function mr(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function gr(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let o = 0; o < e; o++)
    n[o] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function Fd(t, e) {
  Vo || (Vo = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (mr(n) < 1)
            break;
          const c = gr(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (mr(n) < 2)
            break;
          const c = gr(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (mr(n) < 8)
            break;
          const c = gr(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(hi);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (mr(n) < o)
            break;
          const c = gr(n, o);
          a.enqueue(ms(i ? c : Vo.decode(c), e)), r = 0;
        }
        if (o === 0 || o > t) {
          a.enqueue(hi);
          break;
        }
      }
    }
  });
}
const Gc = 4;
function Re(t) {
  if (t) return zd(t);
}
function zd(t) {
  for (var e in Re.prototype)
    t[e] = Re.prototype[e];
  return t;
}
Re.prototype.on = Re.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Re.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Re.prototype.off = Re.prototype.removeListener = Re.prototype.removeAllListeners = Re.prototype.removeEventListener = function(t, e) {
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
Re.prototype.emit = function(t) {
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
Re.prototype.emitReserved = Re.prototype.emit;
Re.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Re.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const co = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), $e = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Vd = "arraybuffer";
function Zc(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Hd = $e.setTimeout, Ud = $e.clearTimeout;
function lo(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Hd.bind($e), t.clearTimeoutFn = Ud.bind($e)) : (t.setTimeoutFn = $e.setTimeout.bind($e), t.clearTimeoutFn = $e.clearTimeout.bind($e));
}
const qd = 1.33;
function Wd(t) {
  return typeof t == "string" ? Yd(t) : Math.ceil((t.byteLength || t.size) * qd);
}
function Yd(t) {
  let e = 0, n = 0;
  for (let r = 0, o = t.length; r < o; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Jc() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Xd(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function $d(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Kd extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class gs extends Re {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, lo(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
    return super.emitReserved("error", new Kd(e, n, r)), this;
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
    const n = ms(e, this.socket.binaryType);
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
    const n = Xd(e);
    return n.length ? "?" + n : "";
  }
}
class Gd extends gs {
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
    Md(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Dd(e, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Jc()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let Qc = !1;
try {
  Qc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Zd = Qc;
function Jd() {
}
class Qd extends Gd {
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
let sn = class jr extends Re {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, lo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = Zc(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = jr.requestsCount++, jr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Jd, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete jr.requests[this._index], this._xhr = null;
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
sn.requestsCount = 0;
sn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ua);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in $e ? "pagehide" : "unload";
    addEventListener(t, ua, !1);
  }
}
function ua() {
  for (let t in sn.requests)
    sn.requests.hasOwnProperty(t) && sn.requests[t].abort();
}
const eh = function() {
  const t = el({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class th extends Qd {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = eh && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new sn(el, this.uri(), e);
  }
}
function el(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Zd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new $e[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const tl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class nh extends gs {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = tl ? {} : Zc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      ps(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && co(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Jc()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const Ho = $e.WebSocket || $e.MozWebSocket;
class rh extends nh {
  createSocket(e, n, r) {
    return tl ? new Ho(e, n, r) : n ? new Ho(e, n) : new Ho(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class oh extends gs {
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
        const n = Fd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), o = Bd();
        o.readable.pipeTo(e.writable), this._writer = o.writable.getWriter();
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
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = n === e.length - 1;
      this._writer.write(r).then(() => {
        o && co(() => {
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
const ih = {
  websocket: rh,
  webtransport: oh,
  polling: th
}, sh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ah = [
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
function pi(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let o = sh.exec(t || ""), i = {}, s = 14;
  for (; s--; )
    i[ah[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = ch(i, i.path), i.queryKey = lh(i, i.query), i;
}
function ch(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function lh(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const mi = typeof addEventListener == "function" && typeof removeEventListener == "function", Ir = [];
mi && addEventListener("offline", () => {
  Ir.forEach((t) => t());
}, !1);
class Pt extends Re {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = Vd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = pi(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = pi(n.host).host);
    lo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = $d(this.opts.query)), mi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Ir.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = Gc, n.transport = e, this.id && (n.sid = this.id);
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
    const e = this.opts.rememberUpgrade && Pt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Pt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (n += Wd(o)), r > 0 && n > this._maxPayload)
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
    return e && (this._pingTimeoutTime = 0, co(() => {
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
    if (Pt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), mi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Ir.indexOf(this._offlineEventListener);
        r !== -1 && Ir.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Pt.protocol = Gc;
class uh extends Pt {
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
    Pt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Pt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
    n.once("open", o), n.once("error", s), n.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
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
let fh = class extends uh {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => ih[o]).filter((o) => !!o)), super(e, r);
  }
};
function dh(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = pi(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const hh = typeof ArrayBuffer == "function", ph = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, nl = Object.prototype.toString, mh = typeof Blob == "function" || typeof Blob < "u" && nl.call(Blob) === "[object BlobConstructor]", gh = typeof File == "function" || typeof File < "u" && nl.call(File) === "[object FileConstructor]";
function vs(t) {
  return hh && (t instanceof ArrayBuffer || ph(t)) || mh && t instanceof Blob || gh && t instanceof File;
}
function Lr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (Lr(t[n]))
        return !0;
    return !1;
  }
  if (vs(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Lr(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Lr(t[n]))
      return !0;
  return !1;
}
function vh(t) {
  const e = [], n = t.data, r = t;
  return r.data = gi(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function gi(t, e) {
  if (!t)
    return t;
  if (vs(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = gi(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = gi(t[r], e));
    return n;
  }
  return t;
}
function yh(t, e) {
  return t.data = vi(t.data, e), delete t.attachments, t;
}
function vi(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = vi(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = vi(t[n], e));
  return t;
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
var te;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(te || (te = {}));
class wh {
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
    return (e.type === te.EVENT || e.type === te.ACK) && Lr(e) ? this.encodeAsBinary({
      type: e.type === te.EVENT ? te.BINARY_EVENT : te.BINARY_ACK,
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
    return (e.type === te.BINARY_EVENT || e.type === te.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = vh(e), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function fa(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class ys extends Re {
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
      const r = n.type === te.BINARY_EVENT;
      r || n.type === te.BINARY_ACK ? (n.type = r ? te.EVENT : te.ACK, this.reconstructor = new Eh(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (vs(e) || e.base64)
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
    if (te[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === te.BINARY_EVENT || r.type === te.BINARY_ACK) {
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
      if (ys.isPayloadValid(r.type, i))
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
      case te.CONNECT:
        return fa(n);
      case te.DISCONNECT:
        return n === void 0;
      case te.CONNECT_ERROR:
        return typeof n == "string" || fa(n);
      case te.EVENT:
      case te.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && bh.indexOf(n[0]) === -1);
      case te.ACK:
      case te.BINARY_ACK:
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
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ys,
  Encoder: wh,
  get PacketType() {
    return te;
  },
  protocol: Sh
}, Symbol.toStringTag, { value: "Module" }));
function Ze(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
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
class rl extends Re {
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
      Ze(e, "open", this.onopen.bind(this)),
      Ze(e, "packet", this.onpacket.bind(this)),
      Ze(e, "error", this.onerror.bind(this)),
      Ze(e, "close", this.onclose.bind(this))
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
    if (Ch.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: te.EVENT,
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
      type: te.CONNECT,
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
        case te.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case te.EVENT:
        case te.BINARY_EVENT:
          this.onevent(e);
          break;
        case te.ACK:
        case te.BINARY_ACK:
          this.onack(e);
          break;
        case te.DISCONNECT:
          this.ondisconnect();
          break;
        case te.CONNECT_ERROR:
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
        type: te.ACK,
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
    return this.connected && this.packet({ type: te.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Sn(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Sn.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
Sn.prototype.reset = function() {
  this.attempts = 0;
};
Sn.prototype.setMin = function(t) {
  this.ms = t;
};
Sn.prototype.setMax = function(t) {
  this.max = t;
};
Sn.prototype.setJitter = function(t) {
  this.jitter = t;
};
class yi extends Re {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, lo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Sn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const o = n.parser || xh;
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
    this.engine = new fh(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Ze(n, "open", function() {
      r.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, s = Ze(n, "error", i);
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
      Ze(e, "ping", this.onping.bind(this)),
      Ze(e, "data", this.ondata.bind(this)),
      Ze(e, "error", this.onerror.bind(this)),
      Ze(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Ze(this.decoder, "decoded", this.ondecoded.bind(this))
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
    co(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new rl(this, e, n), this.nsps[e] = r), r;
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
const jn = {};
function Dr(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = dh(t, e.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = jn[o] && i in jn[o].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || s;
  let c;
  return a ? c = new yi(r, e) : (jn[o] || (jn[o] = new yi(r, e)), c = jn[o]), n.query && !e.query && (e.query = n.queryKey), c.socket(n.path, e);
}
Object.assign(Dr, {
  Manager: yi,
  Socket: rl,
  io: Dr,
  connect: Dr
});
var Uo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var da;
function Ah() {
  return da || (da = 1, function(t) {
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
  }(Uo)), Uo.exports;
}
var Th = Ah();
const De = /* @__PURE__ */ gf(Th);
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ht.apply(null, arguments);
}
function fe(t) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fe(t);
}
var Oh = Symbol.for("react.element"), Rh = Symbol.for("react.transitional.element"), kh = Symbol.for("react.fragment");
function Ph(t) {
  return (
    // Base object type
    t && fe(t) === "object" && // React Element type
    (t.$$typeof === Oh || t.$$typeof === Rh) && // React Fragment type
    t.type === kh
  );
}
var bi = {}, bs = [], _h = function(e) {
  bs.push(e);
};
function Ss(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var n = bs.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, e);
    n && console.error("Warning: ".concat(n));
  }
}
function Nh(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var n = bs.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, e);
    n && console.warn("Note: ".concat(n));
  }
}
function ol() {
  bi = {};
}
function il(t, e, n) {
  !e && !bi[n] && (t(!1, n), bi[n] = !0);
}
function jt(t, e) {
  il(Ss, t, e);
}
function jh(t, e) {
  il(Nh, t, e);
}
jt.preMessage = _h;
jt.resetWarned = ol;
jt.noteOnce = jh;
function Ih(t, e) {
  if (fe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (fe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function sl(t) {
  var e = Ih(t, "string");
  return fe(e) == "symbol" ? e : e + "";
}
function B(t, e, n) {
  return (e = sl(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ha(t, e) {
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
    e % 2 ? ha(Object(n), !0).forEach(function(r) {
      B(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ha(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pa(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function Lh(t) {
  return t && fe(t) === "object" && pa(t.nativeElement) ? t.nativeElement : pa(t) ? t : null;
}
function Dh(t) {
  var e = Lh(t);
  if (e)
    return e;
  if (t instanceof xe.Component) {
    var n;
    return (n = Fs.findDOMNode) === null || n === void 0 ? void 0 : n.call(Fs, t);
  }
  return null;
}
var vr = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Mh() {
  if (ma) return ie;
  ma = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
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
                  return y;
              }
          }
        case e:
          return y;
      }
    }
  }
  return ie.ContextConsumer = s, ie.ContextProvider = i, ie.Element = t, ie.ForwardRef = c, ie.Fragment = n, ie.Lazy = d, ie.Memo = f, ie.Portal = e, ie.Profiler = o, ie.StrictMode = r, ie.Suspense = l, ie.SuspenseList = u, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(p) {
    return m(p) === s;
  }, ie.isContextProvider = function(p) {
    return m(p) === i;
  }, ie.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ie.isForwardRef = function(p) {
    return m(p) === c;
  }, ie.isFragment = function(p) {
    return m(p) === n;
  }, ie.isLazy = function(p) {
    return m(p) === d;
  }, ie.isMemo = function(p) {
    return m(p) === f;
  }, ie.isPortal = function(p) {
    return m(p) === e;
  }, ie.isProfiler = function(p) {
    return m(p) === o;
  }, ie.isStrictMode = function(p) {
    return m(p) === r;
  }, ie.isSuspense = function(p) {
    return m(p) === l;
  }, ie.isSuspenseList = function(p) {
    return m(p) === u;
  }, ie.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === l || p === u || p === v || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
  }, ie.typeOf = m, ie;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function Bh() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, m = !1, p = !1, y = !1, b = !1, C;
    C = Symbol.for("react.module.reference");
    function T(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === o || b || z === r || z === l || z === u || y || z === v || g || m || p || typeof z == "object" && z !== null && (z.$$typeof === d || z.$$typeof === f || z.$$typeof === i || z.$$typeof === s || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === C || z.getModuleId !== void 0));
    }
    function S(z) {
      if (typeof z == "object" && z !== null) {
        var Ye = z.$$typeof;
        switch (Ye) {
          case t:
            var Ae = z.type;
            switch (Ae) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return Ae;
              default:
                var pt = Ae && Ae.$$typeof;
                switch (pt) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case i:
                    return pt;
                  default:
                    return Ye;
                }
            }
          case e:
            return Ye;
        }
      }
    }
    var A = s, E = i, P = t, I = c, U = n, X = d, H = f, N = e, L = o, F = r, j = l, V = u, R = !1, k = !1;
    function Y(z) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(z) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(z) {
      return S(z) === s;
    }
    function $(z) {
      return S(z) === i;
    }
    function ue(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function re(z) {
      return S(z) === c;
    }
    function ce(z) {
      return S(z) === n;
    }
    function le(z) {
      return S(z) === d;
    }
    function de(z) {
      return S(z) === f;
    }
    function ge(z) {
      return S(z) === e;
    }
    function Ce(z) {
      return S(z) === o;
    }
    function Me(z) {
      return S(z) === r;
    }
    function pe(z) {
      return S(z) === l;
    }
    function st(z) {
      return S(z) === u;
    }
    se.ContextConsumer = A, se.ContextProvider = E, se.Element = P, se.ForwardRef = I, se.Fragment = U, se.Lazy = X, se.Memo = H, se.Portal = N, se.Profiler = L, se.StrictMode = F, se.Suspense = j, se.SuspenseList = V, se.isAsyncMode = Y, se.isConcurrentMode = G, se.isContextConsumer = W, se.isContextProvider = $, se.isElement = ue, se.isForwardRef = re, se.isFragment = ce, se.isLazy = le, se.isMemo = de, se.isPortal = ge, se.isProfiler = Ce, se.isStrictMode = Me, se.isSuspense = pe, se.isSuspenseList = st, se.isValidElementType = T, se.typeOf = S;
  }()), se;
}
var va;
function Fh() {
  return va || (va = 1, process.env.NODE_ENV === "production" ? vr.exports = Mh() : vr.exports = Bh()), vr.exports;
}
var qo = Fh();
function al(t, e, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, e)) && (r.current.value = t(), r.current.condition = e), r.current.value;
}
var zh = Number(pf.split(".")[0]), cl = function(e, n) {
  typeof e == "function" ? e(n) : fe(e) === "object" && e && "current" in e && (e.current = n);
}, Vh = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      cl(s, i);
    });
  };
}, Hh = function(e) {
  var n, r;
  if (!e)
    return !1;
  if (ll(e) && zh >= 19)
    return !0;
  var o = qo.isMemo(e) ? e.type.type : e.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== qo.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== qo.ForwardRef);
};
function ll(t) {
  return /* @__PURE__ */ hf(t) && !Ph(t);
}
var Uh = function(e) {
  if (e && ll(e)) {
    var n = e;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function rt(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ya(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, sl(r.key), r);
  }
}
function ot(t, e, n) {
  return e && ya(t.prototype, e), n && ya(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Si(t, e) {
  return Si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Si(t, e);
}
function Zn(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Si(t, e);
}
function pn(t) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, pn(t);
}
function ws() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ws = function() {
    return !!t;
  })();
}
function Yt(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ul(t, e) {
  if (e && (fe(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Yt(t);
}
function uo(t) {
  var e = ws();
  return function() {
    var n, r = pn(t);
    if (e) {
      var o = pn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return ul(this, n);
  };
}
function wi(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function qh(t) {
  if (Array.isArray(t)) return wi(t);
}
function fl(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Es(t, e) {
  if (t) {
    if (typeof t == "string") return wi(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wi(t, e) : void 0;
  }
}
function Wh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function St(t) {
  return qh(t) || fl(t) || Es(t) || Wh();
}
var dl = function(e) {
  return +setTimeout(e, 16);
}, hl = function(e) {
  return clearTimeout(e);
};
typeof window < "u" && "requestAnimationFrame" in window && (dl = function(e) {
  return window.requestAnimationFrame(e);
}, hl = function(e) {
  return window.cancelAnimationFrame(e);
});
var ba = 0, fo = /* @__PURE__ */ new Map();
function pl(t) {
  fo.delete(t);
}
var Kr = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ba += 1;
  var r = ba;
  function o(i) {
    if (i === 0)
      pl(r), e();
    else {
      var s = dl(function() {
        o(i - 1);
      });
      fo.set(r, s);
    }
  }
  return o(n), r;
};
Kr.cancel = function(t) {
  var e = fo.get(t);
  return pl(t), hl(e);
};
process.env.NODE_ENV !== "production" && (Kr.ids = function() {
  return fo;
});
function ml(t) {
  if (Array.isArray(t)) return t;
}
function Yh(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
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
function gl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(t, e) {
  return ml(t) || Yh(t, e) || Es(t, e) || gl();
}
function qn(t) {
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
function wt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Xh(t, e) {
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
var Sa = "data-rc-order", wa = "data-rc-priority", $h = "rc-util-key", Ei = /* @__PURE__ */ new Map();
function vl() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : $h;
}
function ho(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function Kh(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function xs(t) {
  return Array.from((Ei.get(t) || t).children).filter(function(e) {
    return e.tagName === "STYLE";
  });
}
function yl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!wt())
    return null;
  var n = e.csp, r = e.prepend, o = e.priority, i = o === void 0 ? 0 : o, s = Kh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Sa, s), a && i && c.setAttribute(wa, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = t;
  var l = ho(e), u = l.firstChild;
  if (r) {
    if (a) {
      var f = (e.styles || xs(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Sa)))
          return !1;
        var v = Number(d.getAttribute(wa) || 0);
        return i >= v;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function bl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ho(e);
  return (e.styles || xs(n)).find(function(r) {
    return r.getAttribute(vl(e)) === t;
  });
}
function Sl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = bl(t, e);
  if (n) {
    var r = ho(e);
    r.removeChild(n);
  }
}
function Gh(t, e) {
  var n = Ei.get(t);
  if (!n || !Xh(document, n)) {
    var r = yl("", e), o = r.parentNode;
    Ei.set(t, o), t.removeChild(r);
  }
}
function Xt(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ho(n), o = xs(r), i = D(D({}, n), {}, {
    styles: o
  });
  Gh(r, i);
  var s = bl(e, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== t && (s.innerHTML = t), s;
  }
  var u = yl(t, i);
  return u.setAttribute(vl(i), e), u;
}
function Zh(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.indexOf(r) !== -1) continue;
    n[r] = t[r];
  }
  return n;
}
function Wn(t, e) {
  if (t == null) return {};
  var n, r, o = Zh(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
  }
  return o;
}
function Jh(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (jt(!c, "Warning: There may be circular references"), c)
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
    if (i && s && fe(i) === "object" && fe(s) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(s).length ? !1 : f.every(function(d) {
        return o(i[d], s[d], l);
      });
    }
    return !1;
  }
  return o(t, e);
}
var Qh = "%";
function xi(t) {
  return t.join(Qh);
}
var ep = /* @__PURE__ */ function() {
  function t(e) {
    rt(this, t), B(this, "instanceId", void 0), B(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = e;
  }
  return ot(t, [{
    key: "get",
    value: function(n) {
      return this.opGet(xi(n));
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
      return this.opUpdate(xi(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), t;
}(), mn = "data-token-hash", et = "data-css-hash", tp = "data-cache-path", Rt = "__cssinjs_instance__";
function np() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var e = document.body.querySelectorAll("style[".concat(et, "]")) || [], n = document.head.firstChild;
    Array.from(e).forEach(function(o) {
      o[Rt] = o[Rt] || t, o[Rt] === t && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(et, "]"))).forEach(function(o) {
      var i = o.getAttribute(et);
      if (r[i]) {
        if (o[Rt] === t) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new ep(t);
}
var Jn = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: np(),
  defaultCache: !0
});
function rp(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var Cs = /* @__PURE__ */ function() {
  function t() {
    rt(this, t), B(this, "cache", void 0), B(this, "keys", void 0), B(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return ot(t, [{
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
        if (this.size() + 1 > t.MAX_CACHE_SIZE + t.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, u) {
            var f = Q(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = Q(i, 1), a = s[0];
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
          return !rp(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), t;
}();
B(Cs, "MAX_CACHE_SIZE", 20);
B(Cs, "MAX_CACHE_OFFSET", 5);
var Ea = 0, wl = /* @__PURE__ */ function() {
  function t(e) {
    rt(this, t), B(this, "derivatives", void 0), B(this, "id", void 0), this.derivatives = Array.isArray(e) ? e : [e], this.id = Ea, e.length === 0 && Ss(e.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Ea += 1;
  }
  return ot(t, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), t;
}(), Wo = new Cs();
function Ci(t) {
  var e = Array.isArray(t) ? t : [t];
  return Wo.has(e) || Wo.set(e, new wl(e)), Wo.get(e);
}
var op = /* @__PURE__ */ new WeakMap(), Yo = {};
function ip(t, e) {
  for (var n = op, r = 0; r < e.length; r += 1) {
    var o = e[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(Yo) || n.set(Yo, t()), n.get(Yo);
}
var xa = /* @__PURE__ */ new WeakMap();
function Vn(t) {
  var e = xa.get(t) || "";
  return e || (Object.keys(t).forEach(function(n) {
    var r = t[n];
    e += n, r instanceof wl ? e += r.id : r && fe(r) === "object" ? e += Vn(r) : e += r;
  }), e = qn(e), xa.set(t, e)), e;
}
function Ca(t, e) {
  return qn("".concat(e, "_").concat(Vn(t)));
}
var Ai = wt();
function Gr(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function Zr(t, e, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = D(D({}, o), {}, (r = {}, B(r, mn, e), B(r, et, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var Mr = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, sp = function(e, n, r) {
  return Object.keys(e).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(e).map(function(o) {
    var i = Q(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, El = function(e, n, r) {
  var o = {}, i = {};
  return Object.entries(e).forEach(function(s) {
    var a, c, l = Q(s, 2), u = l[0], f = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var d, v = Mr(u, r == null ? void 0 : r.prefix);
      o[v] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(v, ")");
    }
  }), [i, sp(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Aa = process.env.NODE_ENV !== "test" && wt() ? w.useLayoutEffect : w.useEffect, xl = function(e, n) {
  var r = w.useRef(!0);
  Aa(function() {
    return e(r.current);
  }, n), Aa(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ap = D({}, w), Ta = ap.useInsertionEffect, cp = function(e, n, r) {
  w.useMemo(e, r), xl(function() {
    return n(!0);
  }, r);
}, lp = Ta ? function(t, e, n) {
  return Ta(function() {
    return t(), e();
  }, n);
} : cp, up = D({}, w), fp = up.useInsertionEffect, dp = function(e) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Ss(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
  }, e), o;
}, hp = function() {
  return function(e) {
    e();
  };
}, pp = typeof fp < "u" ? dp : hp;
function mp() {
  return !1;
}
var Ti = !1;
function gp() {
  return Ti;
}
const vp = process.env.NODE_ENV === "production" ? mp : gp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (yr && typeof yr.webpackHotUpdate == "function") {
    var yp = yr.webpackHotUpdate;
    yr.webpackHotUpdate = function() {
      return Ti = !0, setTimeout(function() {
        Ti = !1;
      }, 0), yp.apply(void 0, arguments);
    };
  }
}
function As(t, e, n, r, o) {
  var i = w.useContext(Jn), s = i.cache, a = [t].concat(St(e)), c = xi(a), l = pp([c]), u = vp(), f = function(m) {
    s.opUpdate(c, function(p) {
      var y = p || [void 0, void 0], b = Q(y, 2), C = b[0], T = C === void 0 ? 0 : C, S = b[1], A = S;
      process.env.NODE_ENV !== "production" && S && u && (r == null || r(A, u), A = null);
      var E = A || n(), P = [T, E];
      return m ? m(P) : P;
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
  var v = d[1];
  return lp(function() {
    o == null || o(v);
  }, function(g) {
    return f(function(m) {
      var p = Q(m, 2), y = p[0], b = p[1];
      return g && y === 0 && (o == null || o(v)), [y + 1, b];
    }), function() {
      s.opUpdate(c, function(m) {
        var p = m || [], y = Q(p, 2), b = y[0], C = b === void 0 ? 0 : b, T = y[1], S = C - 1;
        return S === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(T, !1));
        }), null) : [C - 1, T];
      });
    };
  }, [c]), v;
}
var bp = {}, Sp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Vt = /* @__PURE__ */ new Map();
function wp(t) {
  Vt.set(t, (Vt.get(t) || 0) + 1);
}
function Ep(t, e) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(mn, '="').concat(t, '"]'));
    n.forEach(function(r) {
      if (r[Rt] === e) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var xp = 0;
function Cp(t, e) {
  Vt.set(t, (Vt.get(t) || 0) - 1);
  var n = Array.from(Vt.keys()), r = n.filter(function(o) {
    var i = Vt.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > xp && r.forEach(function(o) {
    Ep(o, e), Vt.delete(o);
  });
}
var Ap = function(e, n, r, o) {
  var i = r.getDerivativeToken(e), s = D(D({}, i), n);
  return o && (s = o(s)), s;
}, Cl = "token";
function Tp(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _t(Jn), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? bp : c, u = n.formatToken, f = n.getComputedToken, d = n.cssVar, v = ip(function() {
    return Object.assign.apply(Object, [{}].concat(St(e)));
  }, e), g = Vn(v), m = Vn(l), p = d ? Vn(d) : "", y = As(Cl, [a, t.id, g, m, p], function() {
    var b, C = f ? f(v, l, t) : Ap(v, l, t, u), T = D({}, C), S = "";
    if (d) {
      var A = El(C, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), E = Q(A, 2);
      C = E[0], S = E[1];
    }
    var P = Ca(C, a);
    C._tokenKey = P, T._tokenKey = Ca(T, a);
    var I = (b = d == null ? void 0 : d.key) !== null && b !== void 0 ? b : P;
    C._themeKey = I, wp(I);
    var U = "".concat(Sp, "-").concat(qn(P));
    return C._hashId = U, [C, U, T, S, (d == null ? void 0 : d.key) || ""];
  }, function(b) {
    Cp(b[0]._themeKey, o);
  }, function(b) {
    var C = Q(b, 4), T = C[0], S = C[3];
    if (d && S) {
      var A = Xt(S, qn("css-variables-".concat(T._themeKey)), {
        mark: et,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[Rt] = o, A.setAttribute(mn, T._themeKey);
    }
  });
  return y;
}
var Op = function(e, n, r) {
  var o = Q(e, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = Zr(s, a, u, d, l);
  return [f, u, v];
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
}, Al = "comm", Tl = "rule", Ol = "decl", kp = "@import", Pp = "@namespace", _p = "@keyframes", Np = "@layer", Rl = Math.abs, Ts = String.fromCharCode;
function kl(t) {
  return t.trim();
}
function Br(t, e, n) {
  return t.replace(e, n);
}
function jp(t, e, n) {
  return t.indexOf(e, n);
}
function an(t, e) {
  return t.charCodeAt(e) | 0;
}
function gn(t, e, n) {
  return t.slice(e, n);
}
function lt(t) {
  return t.length;
}
function Ip(t) {
  return t.length;
}
function br(t, e) {
  return e.push(t), t;
}
var po = 1, vn = 1, Pl = 0, Ge = 0, Oe = 0, wn = "";
function Os(t, e, n, r, o, i, s, a) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: po, column: vn, length: s, return: "", siblings: a };
}
function Lp() {
  return Oe;
}
function Dp() {
  return Oe = Ge > 0 ? an(wn, --Ge) : 0, vn--, Oe === 10 && (vn = 1, po--), Oe;
}
function tt() {
  return Oe = Ge < Pl ? an(wn, Ge++) : 0, vn++, Oe === 10 && (vn = 1, po++), Oe;
}
function kt() {
  return an(wn, Ge);
}
function Fr() {
  return Ge;
}
function mo(t, e) {
  return gn(wn, t, e);
}
function Yn(t) {
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
function Mp(t) {
  return po = vn = 1, Pl = lt(wn = t), Ge = 0, [];
}
function Bp(t) {
  return wn = "", t;
}
function Xo(t) {
  return kl(mo(Ge - 1, Oi(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Fp(t) {
  for (; (Oe = kt()) && Oe < 33; )
    tt();
  return Yn(t) > 2 || Yn(Oe) > 3 ? "" : " ";
}
function zp(t, e) {
  for (; --e && tt() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return mo(t, Fr() + (e < 6 && kt() == 32 && tt() == 32));
}
function Oi(t) {
  for (; tt(); )
    switch (Oe) {
      // ] ) " '
      case t:
        return Ge;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Oi(Oe);
        break;
      // (
      case 40:
        t === 41 && Oi(t);
        break;
      // \
      case 92:
        tt();
        break;
    }
  return Ge;
}
function Vp(t, e) {
  for (; tt() && t + Oe !== 57; )
    if (t + Oe === 84 && kt() === 47)
      break;
  return "/*" + mo(e, Ge - 1) + "*" + Ts(t === 47 ? t : tt());
}
function Hp(t) {
  for (; !Yn(kt()); )
    tt();
  return mo(t, Ge);
}
function Up(t) {
  return Bp(zr("", null, null, null, [""], t = Mp(t), 0, [0], t));
}
function zr(t, e, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, v = 0, g = 0, m = 1, p = 1, y = 1, b = 0, C = "", T = o, S = i, A = r, E = C; p; )
    switch (g = b, b = tt()) {
      // (
      case 40:
        if (g != 108 && an(E, f - 1) == 58) {
          jp(E += Br(Xo(b), "&", "&\f"), "&\f", Rl(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Xo(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Fp(g);
        break;
      // \
      case 92:
        E += zp(Fr() - 1, 7);
        continue;
      // /
      case 47:
        switch (kt()) {
          case 42:
          case 47:
            br(qp(Vp(tt(), Fr()), e, n, c), c), (Yn(g || 1) == 5 || Yn(kt() || 1) == 5) && lt(E) && gn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * m:
        a[l++] = lt(E) * y;
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
            y == -1 && (E = Br(E, /\f/g, "")), v > 0 && (lt(E) - f || m === 0 && g === 47) && br(v > 32 ? Ra(E + ";", r, n, f - 1, c) : Ra(Br(E, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (br(A = Oa(E, e, n, l, u, o, a, C, T = [], S = [], f, i), i), b === 123)
              if (u === 0)
                zr(E, e, A, A, T, i, f, a, S);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (an(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (an(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? zr(t, A, A, r && br(Oa(t, A, A, 0, 0, o, a, C, o, T = [], f, S), S), o, S, f, a, r ? T : S) : zr(E, A, A, A, [""], S, 0, a, S);
              }
        }
        l = u = v = 0, m = y = 1, C = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + lt(E), v = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && Dp() == 125)
            continue;
        }
        switch (E += Ts(b), b * m) {
          // &
          case 38:
            y = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (lt(E) - 1) * y, y = 1;
            break;
          // @
          case 64:
            kt() === 45 && (E += Xo(tt())), d = kt(), u = f = lt(C = E += Hp(Fr())), b++;
            break;
          // -
          case 45:
            g === 45 && lt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function Oa(t, e, n, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, v = o === 0 ? i : [""], g = Ip(v), m = 0, p = 0, y = 0; m < r; ++m)
    for (var b = 0, C = gn(t, d + 1, d = Rl(p = s[m])), T = t; b < g; ++b)
      (T = kl(p > 0 ? v[b] + " " + C : Br(C, /&\f/g, v[b]))) && (c[y++] = T);
  return Os(t, e, n, o === 0 ? Tl : a, c, l, u, f);
}
function qp(t, e, n, r) {
  return Os(t, e, n, Al, Ts(Lp()), gn(t, 2, -2), 0, r);
}
function Ra(t, e, n, r, o) {
  return Os(t, e, n, Ol, gn(t, 0, r), gn(t, r + 1, -1), r, o);
}
function Ri(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Wp(t, e, n, r) {
  switch (t.type) {
    case Np:
      if (t.children.length) break;
    case kp:
    case Pp:
    case Ol:
      return t.return = t.return || t.value;
    case Al:
      return "";
    case _p:
      return t.return = t.value + "{" + Ri(t.children, r) + "}";
    case Tl:
      if (!lt(t.value = t.props.join(","))) return "";
  }
  return lt(n = Ri(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function _l(t, e) {
  var n = e.path, r = e.parentSelectors;
  jt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Yp = function(e, n, r) {
  if (e === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && _l("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Xp = function(e, n, r) {
  e === "animation" && r.hashId && n !== "none" && _l("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, ka = "data-ant-cssinjs-cache-path", Nl = "_FILE_STYLE__", $t, jl = !0;
function $p() {
  if (!$t && ($t = {}, wt())) {
    var t = document.createElement("div");
    t.className = ka, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var e = getComputedStyle(t).content || "";
    e = e.replace(/^"/, "").replace(/"$/, ""), e.split(";").forEach(function(o) {
      var i = o.split(":"), s = Q(i, 2), a = s[0], c = s[1];
      $t[a] = c;
    });
    var n = document.querySelector("style[".concat(ka, "]"));
    if (n) {
      var r;
      jl = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(t);
  }
}
function Kp(t) {
  return $p(), !!$t[t];
}
function Gp(t) {
  var e = $t[t], n = null;
  if (e && wt())
    if (jl)
      n = Nl;
    else {
      var r = document.querySelector("style[".concat(et, '="').concat($t[t], '"]'));
      r ? n = r.innerHTML : delete $t[t];
    }
  return [n, e];
}
var Il = "_skip_check_", Ll = "_multi_value_";
function Vr(t) {
  var e = Ri(Up(t), Wp);
  return e.replace(/\{%%%\:[^;];}/g, ";");
}
function Zp(t) {
  return fe(t) === "object" && t && (Il in t || Ll in t);
}
function Pa(t, e, n) {
  if (!e)
    return t;
  var r = ".".concat(e), o = n === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(St(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Jp = function t(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, f = n.transformers, d = f === void 0 ? [] : f, v = n.linters, g = v === void 0 ? [] : v, m = "", p = {};
  function y(T) {
    var S = T.getName(a);
    if (!p[S]) {
      var A = t(T.style, n, {
        root: !1,
        parentSelectors: s
      }), E = Q(A, 1), P = E[0];
      p[S] = "@keyframes ".concat(T.getName(a)).concat(P);
    }
  }
  function b(T) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return T.forEach(function(A) {
      Array.isArray(A) ? b(A, S) : A && S.push(A);
    }), S;
  }
  var C = b(Array.isArray(e) ? e : [e]);
  return C.forEach(function(T) {
    var S = typeof T == "string" && !o ? {} : T;
    if (typeof S == "string")
      m += "".concat(S, `
`);
    else if (S._keyframe)
      y(S);
    else {
      var A = d.reduce(function(E, P) {
        var I;
        return (P == null || (I = P.visit) === null || I === void 0 ? void 0 : I.call(P, E)) || E;
      }, S);
      Object.keys(A).forEach(function(E) {
        var P = A[E];
        if (fe(P) === "object" && P && (E !== "animationName" || !P._keyframe) && !Zp(P)) {
          var I = !1, U = E.trim(), X = !1;
          (o || i) && a ? U.startsWith("@") ? I = !0 : U === "&" ? U = Pa("", a, u) : U = Pa(E, a, u) : o && !a && (U === "&" || U === "") && (U = "", X = !0);
          var H = t(P, n, {
            root: X,
            injectHash: I,
            parentSelectors: [].concat(St(s), [U])
          }), N = Q(H, 2), L = N[0], F = N[1];
          p = D(D({}, p), F), m += "".concat(U).concat(L);
        } else {
          let R = function(k, Y) {
            process.env.NODE_ENV !== "production" && (fe(P) !== "object" || !(P != null && P[Il])) && [Yp, Xp].concat(St(g)).forEach(function($) {
              return $(k, Y, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var G = k.replace(/[A-Z]/g, function($) {
              return "-".concat($.toLowerCase());
            }), W = Y;
            !Rp[k] && typeof W == "number" && W !== 0 && (W = "".concat(W, "px")), k === "animationName" && Y !== null && Y !== void 0 && Y._keyframe && (y(Y), W = Y.getName(a)), m += "".concat(G, ":").concat(W, ";");
          };
          var j, V = (j = P == null ? void 0 : P.value) !== null && j !== void 0 ? j : P;
          fe(P) === "object" && P !== null && P !== void 0 && P[Ll] && Array.isArray(V) ? V.forEach(function(k) {
            R(E, k);
          }) : R(E, V);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(T) {
    return "@layer ".concat(T, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function Dl(t, e) {
  return qn("".concat(t.join("%")).concat(e));
}
function Qp() {
  return null;
}
var Ml = "style";
function ki(t, e) {
  var n = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, l = c === void 0 ? 0 : c, u = w.useContext(Jn), f = u.autoClear, d = u.mock, v = u.defaultCache, g = u.hashPriority, m = u.container, p = u.ssrInline, y = u.transformers, b = u.linters, C = u.cache, T = u.layer, S = n._tokenKey, A = [S];
  T && A.push("layer"), A.push.apply(A, St(r));
  var E = Ai;
  process.env.NODE_ENV !== "production" && d !== void 0 && (E = d === "client");
  var P = As(
    Ml,
    A,
    // Create cache if needed
    function() {
      var N = A.join("|");
      if (Kp(N)) {
        var L = Gp(N), F = Q(L, 2), j = F[0], V = F[1];
        if (j)
          return [j, S, V, {}, a, l];
      }
      var R = e(), k = Jp(R, {
        hashId: o,
        hashPriority: g,
        layer: T ? i : void 0,
        path: r.join("-"),
        transformers: y,
        linters: b
      }), Y = Q(k, 2), G = Y[0], W = Y[1], $ = Vr(G), ue = Dl(A, $);
      return [$, S, ue, W, a, l];
    },
    // Remove cache if no need
    function(N, L) {
      var F = Q(N, 3), j = F[2];
      (L || f) && Ai && Sl(j, {
        mark: et
      });
    },
    // Effect: Inject style here
    function(N) {
      var L = Q(N, 4), F = L[0];
      L[1];
      var j = L[2], V = L[3];
      if (E && F !== Nl) {
        var R = {
          mark: et,
          prepend: T ? !1 : "queue",
          attachTo: m,
          priority: l
        }, k = typeof s == "function" ? s() : s;
        k && (R.csp = {
          nonce: k
        });
        var Y = [], G = [];
        Object.keys(V).forEach(function($) {
          $.startsWith("@layer") ? Y.push($) : G.push($);
        }), Y.forEach(function($) {
          Xt(Vr(V[$]), "_layer-".concat($), D(D({}, R), {}, {
            prepend: !0
          }));
        });
        var W = Xt(F, j, R);
        W[Rt] = C.instanceId, W.setAttribute(mn, S), process.env.NODE_ENV !== "production" && W.setAttribute(tp, A.join("|")), G.forEach(function($) {
          Xt(Vr(V[$]), "_effect-".concat($), R);
        });
      }
    }
  ), I = Q(P, 3), U = I[0], X = I[1], H = I[2];
  return function(N) {
    var L;
    if (!p || E || !v)
      L = /* @__PURE__ */ w.createElement(Qp, null);
    else {
      var F;
      L = /* @__PURE__ */ w.createElement("style", ht({}, (F = {}, B(F, mn, X), B(F, et, H), F), {
        dangerouslySetInnerHTML: {
          __html: U
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, L, N);
  };
}
var em = function(e, n, r) {
  var o = Q(e, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, d = f.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = Zr(i, s, a, g, d), c && Object.keys(c).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var p = Vr(c[m]), y = Zr(p, s, "_effect-".concat(m), g, d);
      m.startsWith("@layer") ? v = y + v : v += y;
    }
  }), [u, a, v];
}, Bl = "cssVar", tm = function(e, n) {
  var r = e.key, o = e.prefix, i = e.unitless, s = e.ignore, a = e.token, c = e.scope, l = c === void 0 ? "" : c, u = _t(Jn), f = u.cache.instanceId, d = u.container, v = a._tokenKey, g = [].concat(St(e.path), [r, l, v]), m = As(Bl, g, function() {
    var p = n(), y = El(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = Q(y, 2), C = b[0], T = b[1], S = Dl(g, T);
    return [C, T, S, r];
  }, function(p) {
    var y = Q(p, 3), b = y[2];
    Ai && Sl(b, {
      mark: et
    });
  }, function(p) {
    var y = Q(p, 3), b = y[1], C = y[2];
    if (b) {
      var T = Xt(b, C, {
        mark: et,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      T[Rt] = f, T.setAttribute(mn, r);
    }
  });
  return m;
}, nm = function(e, n, r) {
  var o = Q(e, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = Zr(i, a, s, f, l);
  return [u, s, d];
}, In;
In = {}, B(In, Ml, em), B(In, Cl, Op), B(In, Bl, nm);
var Fl = /* @__PURE__ */ function() {
  function t(e, n) {
    rt(this, t), B(this, "name", void 0), B(this, "style", void 0), B(this, "_keyframe", !0), this.name = e, this.style = n;
  }
  return ot(t, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function nn(t) {
  return t.notSplit = !0, t;
}
nn(["borderTop", "borderBottom"]), nn(["borderTop"]), nn(["borderBottom"]), nn(["borderLeft", "borderRight"]), nn(["borderLeft"]), nn(["borderRight"]);
var Rs = /* @__PURE__ */ cs({});
function rm(t) {
  return ml(t) || fl(t) || Es(t) || gl();
}
function Pi(t, e) {
  for (var n = t, r = 0; r < e.length; r += 1) {
    if (n == null)
      return;
    n = n[e[r]];
  }
  return n;
}
function zl(t, e, n, r) {
  if (!e.length)
    return n;
  var o = rm(e), i = o[0], s = o.slice(1), a;
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = St(t) : a = D({}, t), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = zl(a[i], s, n, r), a;
}
function $o(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return e.length && r && n === void 0 && !Pi(t, e.slice(0, -1)) ? t : zl(t, e, n, r);
}
function om(t) {
  return fe(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function _a(t) {
  return Array.isArray(t) ? [] : {};
}
var im = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function sm() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = _a(e[0]);
  return e.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = Pi(o, s), u = Array.isArray(l);
      if (u || om(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = Pi(r, s);
          u ? r = $o(r, s, []) : (!f || fe(f) !== "object") && (r = $o(r, s, _a(l))), im(l).forEach(function(d) {
            i([].concat(St(s), [d]), c);
          });
        }
      } else
        r = $o(r, s, l);
    }
    i([]);
  }), r;
}
function Vl() {
}
let yt = null;
function am() {
  yt = null, ol();
}
let ks = Vl;
process.env.NODE_ENV !== "production" && (ks = (t, e, n) => {
  jt(t, `[antd: ${e}] ${n}`), process.env.NODE_ENV === "test" && am();
});
const Hl = /* @__PURE__ */ w.createContext({}), En = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: e
  } = w.useContext(Hl), n = (r, o, i) => {
    if (!r)
      if (e === !1 && o === "deprecated") {
        const s = yt;
        yt || (yt = {}), yt[t] = yt[t] || [], yt[t].includes(i || "") || yt[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", yt);
      } else
        process.env.NODE_ENV !== "production" && ks(r, t, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const t = () => {
  };
  return t.deprecated = Vl, t;
}, go = ks, cm = /* @__PURE__ */ cs(void 0), We = "${label} is not a valid ${type}", vo = {
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
        string: We,
        method: We,
        array: We,
        object: We,
        number: We,
        date: We,
        boolean: We,
        integer: We,
        float: We,
        regexp: We,
        email: We,
        url: We,
        hex: We
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
Object.assign({}, vo.Modal);
let Hr = [];
const Na = () => Hr.reduce((t, e) => Object.assign(Object.assign({}, t), e), vo.Modal);
function lm(t) {
  if (t) {
    const e = Object.assign({}, t);
    return Hr.push(e), Na(), () => {
      Hr = Hr.filter((n) => n !== e), Na();
    };
  }
  Object.assign({}, vo.Modal);
}
const Ul = /* @__PURE__ */ cs(void 0), ql = "internalMark", Wl = (t) => {
  const {
    locale: e = {},
    children: n,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = En("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === ql, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => lm(e == null ? void 0 : e.Modal), [e]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, e), {
    exist: !0
  }), [e]);
  return /* @__PURE__ */ w.createElement(Ul.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Wl.displayName = "LocaleProvider");
const Yl = {
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
}, Xn = Object.assign(Object.assign({}, Yl), {
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
}), Ne = Math.round;
function Ko(t, e) {
  const n = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = e(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const ja = (t, e, n) => n === 0 ? t : t / 100;
function Ln(t, e) {
  const n = e || 255;
  return t > n ? n : t < 0 ? 0 : t;
}
class Ee {
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
    } else if (e instanceof Ee)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (n("rgb"))
      this.r = Ln(e.r), this.g = Ln(e.g), this.b = Ln(e.b), this.a = typeof e.a == "number" ? Ln(e.a, 1) : 1;
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
      e === 0 ? this._h = 0 : this._h = Ne(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
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
      r: Ne(i("r")),
      g: Ne(i("g")),
      b: Ne(i("b")),
      a: Ne(i("a") * 100) / 100
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
    const n = this._c(e), r = this.a + n.a * (1 - this.a), o = (i) => Ne((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = Ne(this.a * 255).toString(16);
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
    const e = this.getHue(), n = Ne(this.getSaturation() * 100), r = Ne(this.getLightness() * 100);
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
    return o[e] = Ln(n, r), o;
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
      const d = Ne(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = e / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = Ne((i + f) * 255), this.g = Ne((s + f) * 255), this.b = Ne((a + f) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: r,
    a: o
  }) {
    this._h = e % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ne(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = e / 60, a = Math.floor(s), c = s - a, l = Ne(r * (1 - n) * 255), u = Ne(r * (1 - n * c) * 255), f = Ne(r * (1 - n * (1 - c)) * 255);
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
  fromHsvString(e) {
    const n = Ko(e, ja);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = Ko(e, ja);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = Ko(e, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ne(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Sr = 2, Ia = 0.16, um = 0.05, fm = 0.05, dm = 0.15, Xl = 5, $l = 4, hm = [{
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
function La(t, e, n) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = n ? Math.round(t.h) - Sr * e : Math.round(t.h) + Sr * e : r = n ? Math.round(t.h) + Sr * e : Math.round(t.h) - Sr * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Da(t, e, n) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return n ? r = t.s - Ia * e : e === $l ? r = t.s + Ia : r = t.s + um * e, r > 1 && (r = 1), n && e === Xl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Ma(t, e, n) {
  var r;
  return n ? r = t.v + fm * e : r = t.v - dm * e, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function $n(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Ee(t), o = r.toHsv(), i = Xl; i > 0; i -= 1) {
    var s = new Ee({
      h: La(o, i, !0),
      s: Da(o, i, !0),
      v: Ma(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= $l; a += 1) {
    var c = new Ee({
      h: La(o, a),
      s: Da(o, a),
      v: Ma(o, a)
    });
    n.push(c);
  }
  return e.theme === "dark" ? hm.map(function(l) {
    var u = l.index, f = l.amount;
    return new Ee(e.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var Go = {
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
}, _i = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
_i.primary = _i[5];
var Ni = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ni.primary = Ni[5];
var ji = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ji.primary = ji[5];
var Ii = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ii.primary = Ii[5];
var Li = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Li.primary = Li[5];
var Di = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Di.primary = Di[5];
var Mi = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Mi.primary = Mi[5];
var Bi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Bi.primary = Bi[5];
var Jr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Jr.primary = Jr[5];
var Fi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Fi.primary = Fi[5];
var zi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
zi.primary = zi[5];
var Vi = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Vi.primary = Vi[5];
var Hi = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Hi.primary = Hi[5];
var Zo = {
  red: _i,
  volcano: Ni,
  orange: ji,
  gold: Ii,
  yellow: Li,
  lime: Di,
  green: Mi,
  cyan: Bi,
  blue: Jr,
  geekblue: Fi,
  purple: zi,
  magenta: Vi,
  grey: Hi
};
function pm(t, e) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = e;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: u
  } = t, f = n(c), d = n(o), v = n(i), g = n(s), m = n(a), p = r(l, u), y = t.colorLink || t.colorInfo, b = n(y), C = new Ee(g[1]).mix(new Ee(g[3]), 50).toHexString();
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
    colorErrorBgFilledHover: C,
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Ee("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const mm = (t) => {
  let e = t, n = t, r = t, o = t;
  return t < 6 && t >= 5 ? e = t + 1 : t < 16 && t >= 6 ? e = t + 2 : t >= 16 && (e = 16), t < 7 && t >= 5 ? n = 4 : t < 8 && t >= 7 ? n = 5 : t < 14 && t >= 8 ? n = 6 : t < 16 && t >= 14 ? n = 7 : t >= 16 && (n = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: e,
    borderRadiusOuter: o
  };
};
function gm(t) {
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
  }, mm(r));
}
const vm = (t) => {
  const {
    controlHeight: e
  } = t;
  return {
    controlHeightSM: e * 0.75,
    controlHeightXS: e * 0.5,
    controlHeightLG: e * 1.25
  };
};
function ym(t) {
  return (t + 8) / t;
}
function bm(t) {
  const e = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return e[1] = t, e.map((n) => ({
    size: n,
    lineHeight: ym(n)
  }));
}
const Sm = (t) => {
  const e = bm(t), n = e.map((u) => u.size), r = e.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function wm(t) {
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
const Xe = (t, e) => new Ee(t).setA(e).toRgbString(), Dn = (t, e) => new Ee(t).darken(e).toHexString(), Em = (t) => {
  const e = $n(t);
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
}, xm = (t, e) => {
  const n = t || "#fff", r = e || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Xe(r, 0.88),
    colorTextSecondary: Xe(r, 0.65),
    colorTextTertiary: Xe(r, 0.45),
    colorTextQuaternary: Xe(r, 0.25),
    colorFill: Xe(r, 0.15),
    colorFillSecondary: Xe(r, 0.06),
    colorFillTertiary: Xe(r, 0.04),
    colorFillQuaternary: Xe(r, 0.02),
    colorBgSolid: Xe(r, 1),
    colorBgSolidHover: Xe(r, 0.75),
    colorBgSolidActive: Xe(r, 0.95),
    colorBgLayout: Dn(n, 4),
    colorBgContainer: Dn(n, 0),
    colorBgElevated: Dn(n, 0),
    colorBgSpotlight: Xe(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Dn(n, 15),
    colorBorderSecondary: Dn(n, 6)
  };
};
function Cm(t) {
  Go.pink = Go.magenta, Zo.pink = Zo.magenta;
  const e = Object.keys(Yl).map((n) => {
    const r = t[n] === Go[n] ? Zo[n] : $n(t[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), e), pm(t, {
    generateColorPalettes: Em,
    generateNeutralColorPalettes: xm
  })), Sm(t.fontSize)), wm(t)), vm(t)), gm(t));
}
const Kl = Ci(Cm), Ui = {
  token: Xn,
  override: {
    override: Xn
  },
  hashed: !0
}, Gl = /* @__PURE__ */ xe.createContext(Ui), qi = "ant", Ps = "anticon", Am = (t, e) => e || (t ? `${qi}-${t}` : qi), Nt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Am,
  iconPrefixCls: Ps
}), {
  Consumer: D0
} = Nt, Ba = {};
function Zl(t) {
  const e = w.useContext(Nt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = e, i = e[t];
  return Object.assign(Object.assign({
    classNames: Ba,
    styles: Ba
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Tm = `-ant-${Date.now()}-${Math.random()}`;
function Om(t, e) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ee(s), l = $n(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (e.primaryColor) {
    o(e.primaryColor, "primary");
    const s = new Ee(e.primaryColor), a = $n(s.toRgbString());
    a.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Ee(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return e.successColor && o(e.successColor, "success"), e.warningColor && o(e.warningColor, "warning"), e.errorColor && o(e.errorColor, "error"), e.infoColor && o(e.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${t}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Rm(t, e) {
  const n = Om(t, e);
  wt() ? Xt(n, `${Tm}-dynamic-theme`) : process.env.NODE_ENV !== "production" && go(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Wi = /* @__PURE__ */ w.createContext(!1), km = (t) => {
  let {
    children: e,
    disabled: n
  } = t;
  const r = w.useContext(Wi);
  return /* @__PURE__ */ w.createElement(Wi.Provider, {
    value: n ?? r
  }, e);
}, Kn = /* @__PURE__ */ w.createContext(void 0), Pm = (t) => {
  let {
    children: e,
    size: n
  } = t;
  const r = w.useContext(Kn);
  return /* @__PURE__ */ w.createElement(Kn.Provider, {
    value: n || r
  }, e);
};
function _m() {
  const t = _t(Wi), e = _t(Kn);
  return {
    componentDisabled: t,
    componentSize: e
  };
}
var Jl = /* @__PURE__ */ ot(function t() {
  rt(this, t);
}), Ql = "CALC_UNIT", Nm = new RegExp(Ql, "g");
function Jo(t) {
  return typeof t == "number" ? "".concat(t).concat(Ql) : t;
}
var jm = /* @__PURE__ */ function(t) {
  Zn(n, t);
  var e = uo(n);
  function n(r, o) {
    var i;
    rt(this, n), i = e.call(this), B(Yt(i), "result", ""), B(Yt(i), "unitlessCssVar", void 0), B(Yt(i), "lowPriority", void 0);
    var s = fe(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Jo(r) : s === "string" && (i.result = r), i;
  }
  return ot(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Jo(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Jo(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Nm, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Jl), Im = /* @__PURE__ */ function(t) {
  Zn(n, t);
  var e = uo(n);
  function n(r) {
    var o;
    return rt(this, n), o = e.call(this), B(Yt(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return ot(n, [{
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
}(Jl), Lm = function(e, n) {
  var r = e === "css" ? jm : Im;
  return function(o) {
    return new r(o, n);
  };
}, Fa = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Yi(t) {
  var e = w.useRef();
  e.current = t;
  var n = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = e.current) === null || r === void 0 ? void 0 : r.call.apply(r, [e].concat(i));
  }, []);
  return n;
}
function Xi(t) {
  var e = w.useRef(!1), n = w.useState(t), r = Q(n, 2), o = r[0], i = r[1];
  w.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function s(a, c) {
    c && e.current || i(a);
  }
  return [o, s];
}
function za(t, e, n, r) {
  var o = D({}, e[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = Q(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && jt(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = D(D({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var eu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", $i = !0;
function yo() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!eu)
    return Object.assign.apply(Object, [{}].concat(e));
  $i = !1;
  var r = {};
  return e.forEach(function(o) {
    if (fe(o) === "object") {
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
  }), $i = !0, r;
}
var Va = {};
function Dm() {
}
var Mm = function(e) {
  var n, r = e, o = Dm;
  return eu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get: function(s, a) {
      if ($i) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Va[s] = {
      global: Array.from(n),
      component: D(D({}, (c = Va[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function Ha(t, e, n) {
  if (typeof n == "function") {
    var r;
    return n(yo(e, (r = e[t]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Bm(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Gr(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Gr(i);
      }).join(","), ")");
    }
  };
}
var Fm = 1e3 * 60 * 10, zm = /* @__PURE__ */ function() {
  function t() {
    rt(this, t), B(this, "map", /* @__PURE__ */ new Map()), B(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), B(this, "nextID", 0), B(this, "lastAccessBeat", /* @__PURE__ */ new Map()), B(this, "accessBeat", 0);
  }
  return ot(t, [{
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
        return i && fe(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(fe(i), "_").concat(i);
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
          r - o > Fm && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), Ua = new zm();
function Vm(t, e) {
  return xe.useMemo(function() {
    var n = Ua.get(e);
    if (n)
      return n;
    var r = t();
    return Ua.set(e, r), r;
  }, e);
}
var Hm = function() {
  return {};
};
function Um(t) {
  var e = t.useCSP, n = e === void 0 ? Hm : e, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(d, v, g, m) {
    var p = Array.isArray(d) ? d[0] : d;
    function y(P) {
      return "".concat(String(p)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var b = (m == null ? void 0 : m.unitless) || {}, C = typeof a == "function" ? a(d) : {}, T = D(D({}, C), {}, B({}, y("zIndexPopup"), !0));
    Object.keys(b).forEach(function(P) {
      T[y(P)] = b[P];
    });
    var S = D(D({}, m), {}, {
      unitless: T,
      prefixToken: y
    }), A = u(d, v, g, S), E = l(p, g, S);
    return function(P) {
      var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, U = A(P, I), X = Q(U, 2), H = X[1], N = E(I), L = Q(N, 2), F = L[0], j = L[1];
      return [F, H, j];
    };
  }
  function l(d, v, g) {
    var m = g.unitless, p = g.injectStyle, y = p === void 0 ? !0 : p, b = g.prefixToken, C = g.ignore, T = function(E) {
      var P = E.rootCls, I = E.cssVar, U = I === void 0 ? {} : I, X = r(), H = X.realToken;
      return tm({
        path: [d],
        prefix: U.prefix,
        key: U.key,
        unitless: m,
        ignore: C,
        token: H,
        scope: P
      }, function() {
        var N = Ha(d, H, v), L = za(d, H, N, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(N).forEach(function(F) {
          L[b(F)] = L[F], delete L[F];
        }), L;
      }), null;
    }, S = function(E) {
      var P = r(), I = P.cssVar;
      return [function(U) {
        return y && I ? /* @__PURE__ */ xe.createElement(xe.Fragment, null, /* @__PURE__ */ xe.createElement(T, {
          rootCls: E,
          cssVar: I,
          component: d
        }), U) : U;
      }, I == null ? void 0 : I.key];
    };
    return S;
  }
  function u(d, v, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(d) ? d : [d, d], y = Q(p, 1), b = y[0], C = p.join("-"), T = t.layer || {
      name: "antd"
    };
    return function(S) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S, E = r(), P = E.theme, I = E.realToken, U = E.hashId, X = E.token, H = E.cssVar, N = o(), L = N.rootPrefixCls, F = N.iconPrefixCls, j = n(), V = H ? "css" : "js", R = Vm(function() {
        var ue = /* @__PURE__ */ new Set();
        return H && Object.keys(m.unitless || {}).forEach(function(re) {
          ue.add(Mr(re, H.prefix)), ue.add(Mr(re, Fa(b, H.prefix)));
        }), Lm(V, ue);
      }, [V, b, H == null ? void 0 : H.prefix]), k = Bm(V), Y = k.max, G = k.min, W = {
        theme: P,
        token: X,
        hashId: U,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: m.clientOnly,
        layer: T,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && ki(D(D({}, W), {}, {
        clientOnly: !1,
        path: ["Shared", L]
      }), function() {
        return i(X, {
          prefix: {
            rootPrefixCls: L,
            iconPrefixCls: F
          },
          csp: j
        });
      });
      var $ = ki(D(D({}, W), {}, {
        path: [C, S, F]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var ue = Mm(X), re = ue.token, ce = ue.flush, le = Ha(b, I, g), de = ".".concat(S), ge = za(b, I, le, {
          deprecatedTokens: m.deprecatedTokens
        });
        H && le && fe(le) === "object" && Object.keys(le).forEach(function(st) {
          le[st] = "var(".concat(Mr(st, Fa(b, H.prefix)), ")");
        });
        var Ce = yo(re, {
          componentCls: de,
          prefixCls: S,
          iconCls: ".".concat(F),
          antCls: ".".concat(L),
          calc: R,
          // @ts-ignore
          max: Y,
          // @ts-ignore
          min: G
        }, H ? le : ge), Me = v(Ce, {
          hashId: U,
          prefixCls: S,
          rootPrefixCls: L,
          iconPrefixCls: F
        });
        ce(b, ge);
        var pe = typeof s == "function" ? s(Ce, S, A, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : pe, Me];
      });
      return [$, U];
    };
  }
  function f(d, v, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(d, v, g, D({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), y = function(C) {
      var T = C.prefixCls, S = C.rootCls, A = S === void 0 ? T : S;
      return p(T, A), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const qm = "5.24.6";
function Qo(t) {
  return t >= 0 && t <= 255;
}
function wr(t, e) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Ee(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: c
  } = new Ee(e).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), d = Math.round((o - c * (1 - l)) / l);
    if (Qo(u) && Qo(f) && Qo(d))
      return new Ee({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ee({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Wm = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
function tu(t) {
  const {
    override: e
  } = t, n = Wm(t, ["override"]), r = Object.assign({}, e);
  Object.keys(Xn).forEach((d) => {
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
    colorSplit: wr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: wr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: wr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: wr(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Ee("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ee("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ee("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var qa = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const nu = {
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
}, Ym = {
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
}, Xm = {
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
}, ru = (t, e, n) => {
  const r = n.getDerivativeToken(t), {
    override: o
  } = e, i = qa(e, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = tu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = qa(l, ["theme"]);
    let d = f;
    u && (d = ru(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = d;
  }), s;
};
function _s() {
  const {
    token: t,
    hashed: e,
    theme: n,
    override: r,
    cssVar: o
  } = xe.useContext(Gl), i = `${qm}-${e || ""}`, s = n || Kl, [a, c, l] = Tp(s, [Xn, t], {
    salt: i,
    override: r,
    getComputedToken: ru,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: tu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: nu,
      ignore: Ym,
      preserve: Xm
    }
  });
  return [s, l, e ? c : "", a, o];
}
const ou = function(t) {
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
}, $m = () => ({
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
}), Km = (t) => ({
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
}), Gm = (t, e, n, r) => {
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
}, iu = (t) => ({
  [`.${t}`]: Object.assign(Object.assign({}, $m()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ns
} = Um({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = _t(Nt);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: e
    };
  },
  useToken: () => {
    const [t, e, n, r, o] = _s();
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
    } = _t(Nt);
    return t ?? {};
  },
  getResetStyles: (t, e) => {
    var n;
    const r = Km(t);
    return [r, {
      "&": r
    }, iu((n = e == null ? void 0 : e.prefix.iconPrefixCls) !== null && n !== void 0 ? n : Ps)];
  },
  getCommonStyle: Gm,
  getCompUnitless: () => nu
}), Zm = (t, e) => {
  const [n, r] = _s();
  return ki({
    token: r,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => e == null ? void 0 : e.nonce,
    layer: {
      name: "antd"
    }
  }, () => [iu(t)]);
}, Jm = Object.assign({}, w), {
  useId: Wa
} = Jm, Qm = () => "", eg = typeof Wa > "u" ? Qm : Wa;
function tg(t, e, n) {
  var r, o;
  const i = En("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !e ? Object.assign(Object.assign({}, Ui), {
    hashed: (r = e == null ? void 0 : e.hashed) !== null && r !== void 0 ? r : Ui.hashed,
    cssVar: e == null ? void 0 : e.cssVar
  }) : e, c = eg();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return al(() => {
    var l, u;
    if (!t)
      return e;
    const f = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      f[g] = Object.assign(Object.assign({}, f[g]), t.components[g]);
    });
    const d = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: v
    });
  }, [s, a], (l, u) => l.some((f, d) => {
    const v = u[d];
    return !Jh(f, v, !0);
  }));
}
var ng = ["children"], su = /* @__PURE__ */ w.createContext({});
function rg(t) {
  var e = t.children, n = Wn(t, ng);
  return /* @__PURE__ */ w.createElement(su.Provider, {
    value: n
  }, e);
}
var og = /* @__PURE__ */ function(t) {
  Zn(n, t);
  var e = uo(n);
  function n() {
    return rt(this, n), e.apply(this, arguments);
  }
  return ot(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function ig(t) {
  var e = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = Q(e, 2), r = n[1], o = w.useRef(t), i = Yi(function() {
    return o.current;
  }), s = Yi(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Ot = "none", Er = "appear", xr = "enter", Cr = "leave", Ya = "none", Je = "prepare", rn = "start", on = "active", js = "end", au = "prepared";
function Xa(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit".concat(t)] = "webkit".concat(e), n["Moz".concat(t)] = "moz".concat(e), n["ms".concat(t)] = "MS".concat(e), n["O".concat(t)] = "o".concat(e.toLowerCase()), n;
}
function sg(t, e) {
  var n = {
    animationend: Xa("Animation", "AnimationEnd"),
    transitionend: Xa("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in e || delete n.animationend.animation, "TransitionEvent" in e || delete n.transitionend.transition), n;
}
var ag = sg(wt(), typeof window < "u" ? window : {}), cu = {};
if (wt()) {
  var cg = document.createElement("div");
  cu = cg.style;
}
var Ar = {};
function lu(t) {
  if (Ar[t])
    return Ar[t];
  var e = ag[t];
  if (e)
    for (var n = Object.keys(e), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(e, i) && i in cu)
        return Ar[t] = e[i], Ar[t];
    }
  return "";
}
var uu = lu("animationend"), fu = lu("transitionend"), du = !!(uu && fu), $a = uu || "animationend", Ka = fu || "transitionend";
function Ga(t, e) {
  if (!t) return null;
  if (fe(t) === "object") {
    var n = e.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[n];
  }
  return "".concat(t, "-").concat(e);
}
const lg = function(t) {
  var e = Pe();
  function n(o) {
    o && (o.removeEventListener(Ka, t), o.removeEventListener($a, t));
  }
  function r(o) {
    e.current && e.current !== o && n(e.current), o && o !== e.current && (o.addEventListener(Ka, t), o.addEventListener($a, t), e.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(e.current);
    };
  }, []), [r, n];
};
var hu = wt() ? mf : Ve;
const ug = function() {
  var t = w.useRef(null);
  function e() {
    Kr.cancel(t.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    e();
    var i = Kr(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : n(r, o - 1);
    });
    t.current = i;
  }
  return w.useEffect(function() {
    return function() {
      e();
    };
  }, []), [n, e];
};
var fg = [Je, rn, on, js], dg = [Je, au], pu = !1, hg = !0;
function mu(t) {
  return t === on || t === js;
}
const pg = function(t, e, n) {
  var r = Xi(Ya), o = Q(r, 2), i = o[0], s = o[1], a = ug(), c = Q(a, 2), l = c[0], u = c[1];
  function f() {
    s(Je, !0);
  }
  var d = e ? dg : fg;
  return hu(function() {
    if (i !== Ya && i !== js) {
      var v = d.indexOf(i), g = d[v + 1], m = n(i);
      m === pu ? s(g, !0) : g && l(function(p) {
        function y() {
          p.isCanceled() || s(g, !0);
        }
        m === !0 ? y() : Promise.resolve(m).then(y);
      });
    }
  }, [t, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function mg(t, e, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, m = r.onAppearStart, p = r.onEnterStart, y = r.onLeaveStart, b = r.onAppearActive, C = r.onEnterActive, T = r.onLeaveActive, S = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, P = r.onVisibleChanged, I = Xi(), U = Q(I, 2), X = U[0], H = U[1], N = ig(Ot), L = Q(N, 2), F = L[0], j = L[1], V = Xi(null), R = Q(V, 2), k = R[0], Y = R[1], G = F(), W = Pe(!1), $ = Pe(null);
  function ue() {
    return n();
  }
  var re = Pe(!1);
  function ce() {
    j(Ot), Y(null, !0);
  }
  var le = Yi(function(_e) {
    var ve = F();
    if (ve !== Ot) {
      var Be = ue();
      if (!(_e && !_e.deadline && _e.target !== Be)) {
        var Et = re.current, mt;
        ve === Er && Et ? mt = S == null ? void 0 : S(Be, _e) : ve === xr && Et ? mt = A == null ? void 0 : A(Be, _e) : ve === Cr && Et && (mt = E == null ? void 0 : E(Be, _e)), Et && mt !== !1 && ce();
      }
    }
  }), de = lg(le), ge = Q(de, 1), Ce = ge[0], Me = function(ve) {
    switch (ve) {
      case Er:
        return B(B(B({}, Je, d), rn, m), on, b);
      case xr:
        return B(B(B({}, Je, v), rn, p), on, C);
      case Cr:
        return B(B(B({}, Je, g), rn, y), on, T);
      default:
        return {};
    }
  }, pe = w.useMemo(function() {
    return Me(G);
  }, [G]), st = pg(G, !t, function(_e) {
    if (_e === Je) {
      var ve = pe[Je];
      return ve ? ve(ue()) : pu;
    }
    if (Ae in pe) {
      var Be;
      Y(((Be = pe[Ae]) === null || Be === void 0 ? void 0 : Be.call(pe, ue(), null)) || null);
    }
    return Ae === on && G !== Ot && (Ce(ue()), u > 0 && (clearTimeout($.current), $.current = setTimeout(function() {
      le({
        deadline: !0
      });
    }, u))), Ae === au && ce(), hg;
  }), z = Q(st, 2), Ye = z[0], Ae = z[1], pt = mu(Ae);
  re.current = pt;
  var Lt = Pe(null);
  hu(function() {
    if (!(W.current && Lt.current === e)) {
      H(e);
      var _e = W.current;
      W.current = !0;
      var ve;
      !_e && e && a && (ve = Er), _e && e && i && (ve = xr), (_e && !e && l || !_e && f && !e && l) && (ve = Cr);
      var Be = Me(ve);
      ve && (t || Be[Je]) ? (j(ve), Ye()) : j(Ot), Lt.current = e;
    }
  }, [e]), Ve(function() {
    // Cancel appear
    (G === Er && !a || // Cancel enter
    G === xr && !i || // Cancel leave
    G === Cr && !l) && j(Ot);
  }, [a, i, l]), Ve(function() {
    return function() {
      W.current = !1, clearTimeout($.current);
    };
  }, []);
  var at = w.useRef(!1);
  Ve(function() {
    X && (at.current = !0), X !== void 0 && G === Ot && ((at.current || X) && (P == null || P(X)), at.current = !0);
  }, [X, G]);
  var Dt = k;
  return pe[Je] && Ae === rn && (Dt = D({
    transition: "none"
  }, Dt)), [G, Ae, Dt, X ?? e];
}
function gg(t) {
  var e = t;
  fe(t) === "object" && (e = t.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && e && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, d = o.motionName, v = o.leavedClassName, g = o.eventProps, m = w.useContext(su), p = m.motion, y = n(o, p), b = Pe(), C = Pe();
    function T() {
      try {
        return b.current instanceof HTMLElement ? b.current : Dh(C.current);
      } catch {
        return null;
      }
    }
    var S = mg(y, a, T, o), A = Q(S, 4), E = A[0], P = A[1], I = A[2], U = A[3], X = w.useRef(U);
    U && (X.current = !0);
    var H = w.useCallback(function(R) {
      b.current = R, cl(i, R);
    }, [i]), N, L = D(D({}, g), {}, {
      visible: a
    });
    if (!f)
      N = null;
    else if (E === Ot)
      U ? N = f(D({}, L), H) : !l && X.current && v ? N = f(D(D({}, L), {}, {
        className: v
      }), H) : u || !l && !v ? N = f(D(D({}, L), {}, {
        style: {
          display: "none"
        }
      }), H) : N = null;
    else {
      var F;
      P === Je ? F = "prepare" : mu(P) ? F = "active" : P === rn && (F = "start");
      var j = Ga(d, "".concat(E, "-").concat(F));
      N = f(D(D({}, L), {}, {
        className: De(Ga(d, E), B(B({}, j, j && F), d, typeof d == "string")),
        style: I
      }), H);
    }
    if (/* @__PURE__ */ w.isValidElement(N) && Hh(N)) {
      var V = Uh(N);
      V || (N = /* @__PURE__ */ w.cloneElement(N, {
        ref: H
      }));
    }
    return /* @__PURE__ */ w.createElement(og, {
      ref: C
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const gu = gg(du);
var Ki = "add", Gi = "keep", Zi = "remove", ei = "removed";
function vg(t) {
  var e;
  return t && fe(t) === "object" && "key" in t ? e = t : e = {
    key: t
  }, D(D({}, e), {}, {
    key: String(e.key)
  });
}
function Ji() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(vg);
}
function yg() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = e.length, i = Ji(t), s = Ji(e);
  i.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = s[f];
      if (d.key === l.key) {
        r < f && (n = n.concat(s.slice(r, f).map(function(v) {
          return D(D({}, v), {}, {
            status: Ki
          });
        })), r = f), n.push(D(D({}, d), {}, {
          status: Gi
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(D(D({}, l), {}, {
      status: Zi
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return D(D({}, l), {}, {
      status: Ki
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
      return f !== l || d !== Zi;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Gi);
    });
  }), n;
}
var bg = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sg = ["status"], wg = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Eg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gu, n = /* @__PURE__ */ function(r) {
    Zn(i, r);
    var o = uo(i);
    function i() {
      var s;
      rt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), B(Yt(s), "state", {
        keyEntities: []
      }), B(Yt(s), "removeKey", function(u) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(v) {
            return v.key !== u ? v : D(D({}, v), {}, {
              status: ei
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(v) {
            var g = v.status;
            return g !== ei;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return ot(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Wn(l, bg), g = u || w.Fragment, m = {};
        return wg.forEach(function(p) {
          m[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ w.createElement(g, v, c.map(function(p, y) {
          var b = p.status, C = Wn(p, Sg), T = b === Ki || b === Gi;
          return /* @__PURE__ */ w.createElement(e, ht({}, m, {
            key: C.key,
            visible: T,
            eventProps: C,
            onVisibleChanged: function(A) {
              d == null || d(A, {
                key: C.key
              }), A || a.removeKey(C.key);
            }
          }), function(S, A) {
            return f(D(D({}, S), {}, {
              index: y
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = Ji(l), d = yg(u, f);
        return {
          keyEntities: d.filter(function(v) {
            var g = u.find(function(m) {
              var p = m.key;
              return v.key === p;
            });
            return !(g && g.status === ei && v.status === Zi);
          })
        };
      }
    }]), i;
  }(w.Component);
  return B(n, "defaultProps", {
    component: "div"
  }), n;
}
Eg(du);
function xg(t) {
  const {
    children: e
  } = t, [, n] = _s(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(rg, {
    motion: r
  }, e) : e;
}
const vu = /* @__PURE__ */ w.memo((t) => {
  let {
    dropdownMatchSelectWidth: e
  } = t;
  return En("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (vu.displayName = "PropWarning");
const Cg = process.env.NODE_ENV !== "production" ? vu : () => null;
var Ag = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
let Qi = !1;
process.env.NODE_ENV;
const Tg = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let yu;
function Og() {
  return yu || qi;
}
function Rg(t) {
  return Object.keys(t).some((e) => e.endsWith("Color"));
}
const kg = (t) => {
  const {
    prefixCls: e,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = t;
  e !== void 0 && (yu = e), r && Rg(r) && (process.env.NODE_ENV !== "production" && go(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Rm(Og(), r));
}, Pg = (t) => {
  const {
    children: e,
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
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: y,
    iconPrefixCls: b,
    theme: C,
    componentDisabled: T,
    segmented: S,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: I,
    cascader: U,
    collapse: X,
    typography: H,
    checkbox: N,
    descriptions: L,
    divider: F,
    drawer: j,
    skeleton: V,
    steps: R,
    image: k,
    layout: Y,
    list: G,
    mentions: W,
    modal: $,
    progress: ue,
    result: re,
    slider: ce,
    breadcrumb: le,
    menu: de,
    pagination: ge,
    input: Ce,
    textArea: Me,
    empty: pe,
    badge: st,
    radio: z,
    rate: Ye,
    switch: Ae,
    transfer: pt,
    avatar: Lt,
    message: at,
    tag: Dt,
    table: _e,
    card: ve,
    tabs: Be,
    timeline: Et,
    timePicker: mt,
    upload: tr,
    notification: nr,
    tree: To,
    colorPicker: rr,
    datePicker: or,
    rangePicker: Oo,
    flex: Ro,
    wave: ko,
    dropdown: Po,
    warning: _o,
    tour: No,
    tooltip: jo,
    popover: On,
    popconfirm: ir,
    floatButtonGroup: xt,
    variant: Rn,
    inputNumber: kn,
    treeSelect: sr
  } = t, ar = w.useCallback((ye, h) => {
    const {
      prefixCls: O
    } = t;
    if (h)
      return h;
    const _ = O || y.getPrefixCls("");
    return ye ? `${_}-${ye}` : _;
  }, [y.getPrefixCls, t.prefixCls]), Mt = b || y.iconPrefixCls || Ps, Jt = n || y.csp;
  Zm(Mt, Jt);
  const Bt = tg(C, y.theme, {
    prefixCls: ar("")
  });
  process.env.NODE_ENV !== "production" && (Qi = Qi || !!Bt);
  const Qt = {
    csp: Jt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: m,
    getPrefixCls: ar,
    iconPrefixCls: Mt,
    theme: Bt,
    segmented: S,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: I,
    cascader: U,
    collapse: X,
    typography: H,
    checkbox: N,
    descriptions: L,
    divider: F,
    drawer: j,
    skeleton: V,
    steps: R,
    image: k,
    input: Ce,
    textArea: Me,
    layout: Y,
    list: G,
    mentions: W,
    modal: $,
    progress: ue,
    result: re,
    slider: ce,
    breadcrumb: le,
    menu: de,
    pagination: ge,
    empty: pe,
    badge: st,
    radio: z,
    rate: Ye,
    switch: Ae,
    transfer: pt,
    avatar: Lt,
    message: at,
    tag: Dt,
    table: _e,
    card: ve,
    tabs: Be,
    timeline: Et,
    timePicker: mt,
    upload: tr,
    notification: nr,
    tree: To,
    colorPicker: rr,
    datePicker: or,
    rangePicker: Oo,
    flex: Ro,
    wave: ko,
    dropdown: Po,
    warning: _o,
    tour: No,
    tooltip: jo,
    popover: On,
    popconfirm: ir,
    floatButtonGroup: xt,
    variant: Rn,
    inputNumber: kn,
    treeSelect: sr
  };
  process.env.NODE_ENV !== "production" && En("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ct = Object.assign({}, y);
  Object.keys(Qt).forEach((ye) => {
    Qt[ye] !== void 0 && (Ct[ye] = Qt[ye]);
  }), Tg.forEach((ye) => {
    const h = t[ye];
    h && (Ct[ye] = h);
  }), typeof r < "u" && (Ct.button = Object.assign({
    autoInsertSpace: r
  }, Ct.button));
  const At = al(() => Ct, Ct, (ye, h) => {
    const O = Object.keys(ye), _ = Object.keys(h);
    return O.length !== _.length || O.some((q) => ye[q] !== h[q]);
  }), {
    layer: Pn
  } = w.useContext(Jn), cr = w.useMemo(() => ({
    prefixCls: Mt,
    csp: Jt,
    layer: Pn ? "antd" : void 0
  }), [Mt, Jt, Pn]);
  let ke = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Cg, {
    dropdownMatchSelectWidth: v
  }), e);
  const lr = w.useMemo(() => {
    var ye, h, O, _;
    return sm(((ye = vo.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((O = (h = At.locale) === null || h === void 0 ? void 0 : h.Form) === null || O === void 0 ? void 0 : O.defaultValidateMessages) || {}, ((_ = At.form) === null || _ === void 0 ? void 0 : _.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [At, s == null ? void 0 : s.validateMessages]);
  Object.keys(lr).length > 0 && (ke = /* @__PURE__ */ w.createElement(cm.Provider, {
    value: lr
  }, ke)), a && (ke = /* @__PURE__ */ w.createElement(Wl, {
    locale: a,
    _ANT_MARK__: ql
  }, ke)), ke = /* @__PURE__ */ w.createElement(Rs.Provider, {
    value: cr
  }, ke), c && (ke = /* @__PURE__ */ w.createElement(Pm, {
    size: c
  }, ke)), ke = /* @__PURE__ */ w.createElement(xg, null, ke);
  const Io = w.useMemo(() => {
    const ye = Bt || {}, {
      algorithm: h,
      token: O,
      components: _,
      cssVar: q
    } = ye, ne = Ag(ye, ["algorithm", "token", "components", "cssVar"]), oe = h && (!Array.isArray(h) || h.length > 0) ? Ci(h) : Kl, ee = {};
    Object.entries(_ || {}).forEach((Ie) => {
      let [me, be] = Ie;
      const Se = Object.assign({}, be);
      "algorithm" in Se && (Se.algorithm === !0 ? Se.theme = oe : (Array.isArray(Se.algorithm) || typeof Se.algorithm == "function") && (Se.theme = Ci(Se.algorithm)), delete Se.algorithm), ee[me] = Se;
    });
    const J = Object.assign(Object.assign({}, Xn), O);
    return Object.assign(Object.assign({}, ne), {
      theme: oe,
      token: J,
      components: ee,
      override: Object.assign({
        override: J
      }, ee),
      cssVar: q
    });
  }, [Bt]);
  return C && (ke = /* @__PURE__ */ w.createElement(Gl.Provider, {
    value: Io
  }, ke)), At.warning && (ke = /* @__PURE__ */ w.createElement(Hl.Provider, {
    value: At.warning
  }, ke)), T !== void 0 && (ke = /* @__PURE__ */ w.createElement(km, {
    disabled: T
  }, ke)), /* @__PURE__ */ w.createElement(Nt.Provider, {
    value: At
  }, ke);
}, xn = (t) => {
  const e = w.useContext(Nt), n = w.useContext(Ul);
  return /* @__PURE__ */ w.createElement(Pg, Object.assign({
    parentContext: e,
    legacyLocale: n
  }, t));
};
xn.ConfigContext = Nt;
xn.SizeContext = Kn;
xn.config = kg;
xn.useConfig = _m;
Object.defineProperty(xn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && go(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Kn)
});
process.env.NODE_ENV !== "production" && (xn.displayName = "ConfigProvider");
var _g = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function bu(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
}
function Ng(t) {
  return bu(t) instanceof ShadowRoot;
}
function jg(t) {
  return Ng(t) ? bu(t) : null;
}
function Ig(t) {
  return t.replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  });
}
function Lg(t, e) {
  jt(t, "[@ant-design/icons] ".concat(e));
}
function Za(t) {
  return fe(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (fe(t.icon) === "object" || typeof t.icon == "function");
}
function Ja() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(e, n) {
    var r = t[n];
    switch (n) {
      case "class":
        e.className = r, delete e.class;
        break;
      default:
        delete e[n], e[Ig(n)] = r;
    }
    return e;
  }, {});
}
function es(t, e, n) {
  return n ? /* @__PURE__ */ xe.createElement(t.tag, D(D({
    key: e
  }, Ja(t.attrs)), n), (t.children || []).map(function(r, o) {
    return es(r, "".concat(e, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ xe.createElement(t.tag, D({
    key: e
  }, Ja(t.attrs)), (t.children || []).map(function(r, o) {
    return es(r, "".concat(e, "-").concat(t.tag, "-").concat(o));
  }));
}
function Su(t) {
  return $n(t)[0];
}
function wu(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var Dg = `
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
`, Mg = function(e) {
  var n = _t(Rs), r = n.csp, o = n.prefixCls, i = n.layer, s = Dg;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ve(function() {
    var a = e.current, c = jg(a);
    Xt(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, Bg = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Hn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Fg(t) {
  var e = t.primaryColor, n = t.secondaryColor;
  Hn.primaryColor = e, Hn.secondaryColor = n || Su(e), Hn.calculated = !!n;
}
function zg() {
  return D({}, Hn);
}
var Cn = function(e) {
  var n = e.icon, r = e.className, o = e.onClick, i = e.style, s = e.primaryColor, a = e.secondaryColor, c = Wn(e, Bg), l = w.useRef(), u = Hn;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || Su(s)
  }), Mg(l), Lg(Za(n), "icon should be icon definiton, but got ".concat(n)), !Za(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = D(D({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), es(f.icon, "svg-".concat(f.name), D(D({
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
Cn.displayName = "IconReact";
Cn.getTwoToneColors = zg;
Cn.setTwoToneColors = Fg;
function Eu(t) {
  var e = wu(t), n = Q(e, 2), r = n[0], o = n[1];
  return Cn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Vg() {
  var t = Cn.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Hg = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Eu(Jr.primary);
var It = /* @__PURE__ */ w.forwardRef(function(t, e) {
  var n = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, l = Wn(t, Hg), u = w.useContext(Rs), f = u.prefixCls, d = f === void 0 ? "anticon" : f, v = u.rootClassName, g = De(v, d, B(B({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), n), m = s;
  m === void 0 && a && (m = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = wu(c), b = Q(y, 2), C = b[0], T = b[1];
  return /* @__PURE__ */ w.createElement("span", ht({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: e,
    tabIndex: m,
    onClick: a,
    className: g
  }), /* @__PURE__ */ w.createElement(Cn, {
    icon: r,
    primaryColor: C,
    secondaryColor: T,
    style: p
  }));
});
It.displayName = "AntdIcon";
It.getTwoToneColor = Vg;
It.setTwoToneColor = Eu;
var Ug = function(e, n) {
  return /* @__PURE__ */ w.createElement(It, ht({}, e, {
    ref: n,
    icon: _g
  }));
}, xu = /* @__PURE__ */ w.forwardRef(Ug);
process.env.NODE_ENV !== "production" && (xu.displayName = "CheckCircleFilled");
var qg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Wg = function(e, n) {
  return /* @__PURE__ */ w.createElement(It, ht({}, e, {
    ref: n,
    icon: qg
  }));
}, Cu = /* @__PURE__ */ w.forwardRef(Wg);
process.env.NODE_ENV !== "production" && (Cu.displayName = "CloseCircleFilled");
var Yg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Xg = function(e, n) {
  return /* @__PURE__ */ w.createElement(It, ht({}, e, {
    ref: n,
    icon: Yg
  }));
}, Au = /* @__PURE__ */ w.forwardRef(Xg);
process.env.NODE_ENV !== "production" && (Au.displayName = "CloseOutlined");
var $g = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Kg = function(e, n) {
  return /* @__PURE__ */ w.createElement(It, ht({}, e, {
    ref: n,
    icon: $g
  }));
}, Tu = /* @__PURE__ */ w.forwardRef(Kg);
process.env.NODE_ENV !== "production" && (Tu.displayName = "ExclamationCircleFilled");
var Gg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Zg = function(e, n) {
  return /* @__PURE__ */ w.createElement(It, ht({}, e, {
    ref: n,
    icon: Gg
  }));
}, Ou = /* @__PURE__ */ w.forwardRef(Zg);
process.env.NODE_ENV !== "production" && (Ou.displayName = "InfoCircleFilled");
var Jg = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Qg = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, ev = "".concat(Jg, " ").concat(Qg).split(/[\s\n]+/), tv = "aria-", nv = "data-";
function Qa(t, e) {
  return t.indexOf(e) === 0;
}
function rv(t) {
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
    (n.aria && (o === "role" || Qa(o, tv)) || // Data
    n.data && Qa(o, nv) || // Attr
    n.attr && ev.includes(o)) && (r[o] = t[o]);
  }), r;
}
const Ru = (t, e, n) => /* @__PURE__ */ xe.isValidElement(t) ? /* @__PURE__ */ xe.cloneElement(t, typeof n == "function" ? n(t.props || {}) : n) : e;
function ov(t, e) {
  return Ru(t, t, e);
}
const Tr = (t, e, n, r, o) => ({
  background: t,
  border: `${Gr(r.lineWidth)} ${r.lineType} ${e}`,
  [`${o}-icon`]: {
    color: n
  }
}), iv = (t) => {
  const {
    componentCls: e,
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
    withDescriptionPadding: v,
    defaultPadding: g
  } = t;
  return {
    [e]: Object.assign(Object.assign({}, ou(t)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: g,
      wordWrap: "break-word",
      borderRadius: c,
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
        transition: `max-height ${n} ${l}, opacity ${n} ${l},
        padding-top ${n} ${l}, padding-bottom ${n} ${l},
        margin-bottom ${n} ${l}`
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
}, sv = (t) => {
  const {
    componentCls: e,
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
    colorInfoBg: v
  } = t;
  return {
    [e]: {
      "&-success": Tr(o, r, n, t, e),
      "&-info": Tr(v, d, f, t, e),
      "&-warning": Tr(a, s, i, t, e),
      "&-error": Object.assign(Object.assign({}, Tr(u, l, c, t, e)), {
        [`${e}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, av = (t) => {
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
        lineHeight: Gr(i),
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
}, cv = (t) => ({
  withDescriptionIconSize: t.fontSizeHeading3,
  defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
}), lv = Ns("Alert", (t) => [iv(t), sv(t), av(t)], cv);
var ec = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const uv = {
  success: xu,
  info: Ou,
  error: Cu,
  warning: Tu
}, fv = (t) => {
  const {
    icon: e,
    prefixCls: n,
    type: r
  } = t, o = uv[r] || null;
  return e ? Ru(e, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, e), () => ({
    className: De(`${n}-icon`, e.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, dv = (t) => {
  const {
    isClosable: e,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(Au, null) : r;
  return e ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Is = /* @__PURE__ */ w.forwardRef((t, e) => {
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
    showIcon: v,
    closable: g,
    closeText: m,
    closeIcon: p,
    action: y,
    id: b
  } = t, C = ec(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [T, S] = w.useState(!1);
  process.env.NODE_ENV !== "production" && En("Alert").deprecated(!m, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(e, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: E,
    direction: P,
    closable: I,
    closeIcon: U,
    className: X,
    style: H
  } = Zl("alert"), N = E("alert", r), [L, F, j] = lv(N), V = (re) => {
    var ce;
    S(!0), (ce = t.onClose) === null || ce === void 0 || ce.call(t, re);
  }, R = w.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), k = w.useMemo(() => typeof g == "object" && g.closeIcon || m ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!I, [m, p, g, I]), Y = i && v === void 0 ? !0 : v, G = De(N, `${N}-${R}`, {
    [`${N}-with-description`]: !!n,
    [`${N}-no-icon`]: !Y,
    [`${N}-banner`]: !!i,
    [`${N}-rtl`]: P === "rtl"
  }, X, s, a, j, F), W = rv(C, {
    aria: !0,
    data: !0
  }), $ = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : m || (p !== void 0 ? p : typeof I == "object" && I.closeIcon ? I.closeIcon : U), [p, g, m, U]), ue = w.useMemo(() => {
    const re = g ?? I;
    if (typeof re == "object") {
      const {
        closeIcon: ce
      } = re;
      return ec(re, ["closeIcon"]);
    }
    return {};
  }, [g, I]);
  return L(/* @__PURE__ */ w.createElement(gu, {
    visible: !T,
    motionName: `${N}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (re) => ({
      maxHeight: re.offsetHeight
    }),
    onLeaveEnd: d
  }, (re, ce) => {
    let {
      className: le,
      style: de
    } = re;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: Vh(A, ce),
      "data-show": !T,
      className: De(G, le),
      style: Object.assign(Object.assign(Object.assign({}, H), c), de),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, W), Y ? /* @__PURE__ */ w.createElement(fv, {
      description: n,
      icon: t.icon,
      prefixCls: N,
      type: R
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${N}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-description`
    }, n) : null), y ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-action`
    }, y) : null, /* @__PURE__ */ w.createElement(dv, {
      isClosable: k,
      prefixCls: N,
      closeIcon: $,
      handleClose: V,
      ariaProps: ue
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Is.displayName = "Alert");
function hv(t, e, n) {
  return e = pn(e), ul(t, ws() ? Reflect.construct(e, n || [], pn(t).constructor) : e.apply(t, n));
}
let pv = /* @__PURE__ */ function(t) {
  function e() {
    var n;
    return rt(this, e), n = hv(this, e, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return Zn(e, t), ot(e, [{
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
      return a ? /* @__PURE__ */ w.createElement(Is, {
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
const ku = Is;
ku.ErrorBoundary = pv;
function mv(t, e) {
  var n = Object.assign({}, t);
  return Array.isArray(e) && e.forEach(function(r) {
    delete n[r];
  }), n;
}
function gv(t, e, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, d = 0;
  function v() {
    u && clearTimeout(u);
  }
  function g(p) {
    var y = p || {}, b = y.upcomingOnly, C = b === void 0 ? !1 : b;
    v(), f = !C;
  }
  function m() {
    for (var p = arguments.length, y = new Array(p), b = 0; b < p; b++)
      y[b] = arguments[b];
    var C = this, T = Date.now() - d;
    if (f)
      return;
    function S() {
      d = Date.now(), e.apply(C, y);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && S(), v(), l === void 0 && T > t ? a ? (d = Date.now(), i || (u = setTimeout(l ? A : S, t))) : S() : i !== !0 && (u = setTimeout(l ? A : S, l === void 0 ? t - T : t));
  }
  return m.cancel = g, m;
}
function vv(t, e, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return gv(t, e, {
    debounceMode: i !== !1
  });
}
function tc(t) {
  return ["small", "middle", "large"].includes(t);
}
const Pu = ["wrap", "nowrap", "wrap-reverse"], _u = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Nu = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], yv = (t, e) => {
  const n = e.wrap === !0 ? "wrap" : e.wrap;
  return {
    [`${t}-wrap-${n}`]: n && Pu.includes(n)
  };
}, bv = (t, e) => {
  const n = {};
  return Nu.forEach((r) => {
    n[`${t}-align-${r}`] = e.align === r;
  }), n[`${t}-align-stretch`] = !e.align && !!e.vertical, n;
}, Sv = (t, e) => {
  const n = {};
  return _u.forEach((r) => {
    n[`${t}-justify-${r}`] = e.justify === r;
  }), n;
};
function wv(t, e) {
  return De(Object.assign(Object.assign(Object.assign({}, yv(t, e)), bv(t, e)), Sv(t, e)));
}
const Ev = (t) => {
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
}, xv = (t) => {
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
}, Cv = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return Pu.forEach((r) => {
    n[`${e}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, Av = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return Nu.forEach((r) => {
    n[`${e}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, Tv = (t) => {
  const {
    componentCls: e
  } = t, n = {};
  return _u.forEach((r) => {
    n[`${e}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, Ov = () => ({}), Rv = Ns("Flex", (t) => {
  const {
    paddingXS: e,
    padding: n,
    paddingLG: r
  } = t, o = yo(t, {
    flexGapSM: e,
    flexGap: n,
    flexGapLG: r
  });
  return [Ev(o), xv(o), Cv(o), Av(o), Tv(o)];
}, Ov, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var kv = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
const ju = /* @__PURE__ */ xe.forwardRef((t, e) => {
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
  } = t, f = kv(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: d,
    direction: v,
    getPrefixCls: g
  } = xe.useContext(Nt), m = g("flex", n), [p, y, b] = Rv(m), C = l ?? (d == null ? void 0 : d.vertical), T = De(o, r, d == null ? void 0 : d.className, m, y, b, wv(m, t), {
    [`${m}-rtl`]: v === "rtl",
    [`${m}-gap-${a}`]: tc(a),
    [`${m}-vertical`]: C
  }), S = Object.assign(Object.assign({}, d == null ? void 0 : d.style), i);
  return s && (S.flex = s), a && !tc(a) && (S.gap = a), p(/* @__PURE__ */ xe.createElement(u, Object.assign({
    ref: e,
    className: T,
    style: S
  }, mv(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (ju.displayName = "Flex");
const Qr = 100, Iu = Qr / 5, Lu = Qr / 2 - Iu / 2, ti = Lu * 2 * Math.PI, nc = 50, rc = (t) => {
  const {
    dotClassName: e,
    style: n,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ w.createElement("circle", {
    className: De(`${e}-circle`, {
      [`${e}-circle-bg`]: r
    }),
    r: Lu,
    cx: nc,
    cy: nc,
    strokeWidth: Iu,
    style: n
  });
}, Pv = (t) => {
  let {
    percent: e,
    prefixCls: n
  } = t;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  xl(() => {
    e !== 0 && a(!0);
  }, [e !== 0]);
  const c = Math.max(Math.min(e, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ti / 4}`,
    strokeDasharray: `${ti * c / 100} ${ti * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: De(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Qr} ${Qr}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(rc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(rc, {
    dotClassName: r,
    style: l
  })));
};
function _v(t) {
  const {
    prefixCls: e,
    percent: n = 0
  } = t, r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: De(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: De(r, `${e}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${e}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(Pv, {
    prefixCls: e,
    percent: n
  }));
}
function Nv(t) {
  const {
    prefixCls: e,
    indicator: n,
    percent: r
  } = t, o = `${e}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? ov(n, {
    className: De(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(_v, {
    prefixCls: e,
    percent: r
  });
}
const jv = new Fl("antSpinMove", {
  to: {
    opacity: 1
  }
}), Iv = new Fl("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Lv = (t) => {
  const {
    componentCls: e,
    calc: n
  } = t;
  return {
    [e]: Object.assign(Object.assign({}, ou(t)), {
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
          animationName: jv,
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
          animationName: Iv,
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
}, Dv = (t) => {
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
}, Mv = Ns("Spin", (t) => {
  const e = yo(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [Lv(e)];
}, Dv), Bv = 200, oc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Fv(t, e) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = e === "auto";
  return w.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < oc.length; c += 1) {
        const [l, u] = oc[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, Bv)), () => {
    clearInterval(o.current);
  }), [i, t]), i ? n : e;
}
var zv = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
};
let Du;
function Vv(t, e) {
  return !!t && !!e && !Number.isNaN(Number(e));
}
const Un = (t) => {
  var e;
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
    indicator: v,
    percent: g
  } = t, m = zv(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: y,
    className: b,
    style: C,
    indicator: T
  } = Zl("spin"), S = p("spin", n), [A, E, P] = Mv(S), [I, U] = w.useState(() => r && !Vv(r, o)), X = Fv(I, g);
  w.useEffect(() => {
    if (r) {
      const R = vv(o, () => {
        U(!0);
      });
      return R(), () => {
        var k;
        (k = R == null ? void 0 : R.cancel) === null || k === void 0 || k.call(R);
      };
    }
    U(!1);
  }, [o, r]);
  const H = w.useMemo(() => typeof f < "u" && !d, [f, d]);
  if (process.env.NODE_ENV !== "production") {
    const R = En("Spin");
    process.env.NODE_ENV !== "production" && R(!c || H || d, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = De(S, b, {
    [`${S}-sm`]: a === "small",
    [`${S}-lg`]: a === "large",
    [`${S}-spinning`]: I,
    [`${S}-show-text`]: !!c,
    [`${S}-rtl`]: y === "rtl"
  }, i, !d && s, E, P), L = De(`${S}-container`, {
    [`${S}-blur`]: I
  }), F = (e = v ?? T) !== null && e !== void 0 ? e : Du, j = Object.assign(Object.assign({}, C), u), V = /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    style: j,
    className: N,
    "aria-live": "polite",
    "aria-busy": I
  }), /* @__PURE__ */ w.createElement(Nv, {
    prefixCls: S,
    indicator: F,
    percent: X
  }), c && (H || d) ? /* @__PURE__ */ w.createElement("div", {
    className: `${S}-text`
  }, c) : null);
  return A(H ? /* @__PURE__ */ w.createElement("div", Object.assign({}, m, {
    className: De(`${S}-nested-loading`, l, E, P)
  }), I && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, V), /* @__PURE__ */ w.createElement("div", {
    className: L,
    key: "container"
  }, f)) : d ? /* @__PURE__ */ w.createElement("div", {
    className: De(`${S}-fullscreen`, {
      [`${S}-fullscreen-show`]: I
    }, s, E, P)
  }, V) : V);
};
Un.setDefaultIndicator = (t) => {
  Du = t;
};
process.env.NODE_ENV !== "production" && (Un.displayName = "Spin");
function Mu(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Hv } = Object.prototype, { getPrototypeOf: Ls } = Object, { iterator: bo, toStringTag: Bu } = Symbol, So = /* @__PURE__ */ ((t) => (e) => {
  const n = Hv.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), it = (t) => (t = t.toLowerCase(), (e) => So(e) === t), wo = (t) => (e) => typeof e === t, { isArray: An } = Array, Gn = wo("undefined");
function Uv(t) {
  return t !== null && !Gn(t) && t.constructor !== null && !Gn(t.constructor) && Ue(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Fu = it("ArrayBuffer");
function qv(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Fu(t.buffer), e;
}
const Wv = wo("string"), Ue = wo("function"), zu = wo("number"), Eo = (t) => t !== null && typeof t == "object", Yv = (t) => t === !0 || t === !1, Ur = (t) => {
  if (So(t) !== "object")
    return !1;
  const e = Ls(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Bu in t) && !(bo in t);
}, Xv = it("Date"), $v = it("File"), Kv = it("Blob"), Gv = it("FileList"), Zv = (t) => Eo(t) && Ue(t.pipe), Jv = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ue(t.append) && ((e = So(t)) === "formdata" || // detect form-data instance
  e === "object" && Ue(t.toString) && t.toString() === "[object FormData]"));
}, Qv = it("URLSearchParams"), [ey, ty, ny, ry] = ["ReadableStream", "Request", "Response", "Headers"].map(it), oy = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qn(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), An(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function Vu(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const Ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hu = (t) => !Gn(t) && t !== Ut;
function ts() {
  const { caseless: t } = Hu(this) && this || {}, e = {}, n = (r, o) => {
    const i = t && Vu(e, o) || o;
    Ur(e[i]) && Ur(r) ? e[i] = ts(e[i], r) : Ur(r) ? e[i] = ts({}, r) : An(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Qn(arguments[r], n);
  return e;
}
const iy = (t, e, n, { allOwnKeys: r } = {}) => (Qn(e, (o, i) => {
  n && Ue(o) ? t[i] = Mu(o, n) : t[i] = o;
}, { allOwnKeys: r }), t), sy = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ay = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, cy = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && Ls(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, ly = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, uy = (t) => {
  if (!t) return null;
  if (An(t)) return t;
  let e = t.length;
  if (!zu(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, fy = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ls(Uint8Array)), dy = (t, e) => {
  const r = (t && t[bo]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, hy = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, py = it("HTMLFormElement"), my = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), ic = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), gy = it("RegExp"), Uu = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Qn(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, vy = (t) => {
  Uu(t, (e, n) => {
    if (Ue(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Ue(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, yy = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return An(t) ? r(t) : r(String(t).split(e)), n;
}, by = () => {
}, Sy = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function wy(t) {
  return !!(t && Ue(t.append) && t[Bu] === "FormData" && t[bo]);
}
const Ey = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (Eo(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = An(r) ? [] : {};
        return Qn(r, (s, a) => {
          const c = n(s, o + 1);
          !Gn(c) && (i[a] = c);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, xy = it("AsyncFunction"), Cy = (t) => t && (Eo(t) || Ue(t)) && Ue(t.then) && Ue(t.catch), qu = ((t, e) => t ? setImmediate : e ? ((n, r) => (Ut.addEventListener("message", ({ source: o, data: i }) => {
  o === Ut && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Ut.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ue(Ut.postMessage)
), Ay = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ut) : typeof process < "u" && process.nextTick || qu, Ty = (t) => t != null && Ue(t[bo]), x = {
  isArray: An,
  isArrayBuffer: Fu,
  isBuffer: Uv,
  isFormData: Jv,
  isArrayBufferView: qv,
  isString: Wv,
  isNumber: zu,
  isBoolean: Yv,
  isObject: Eo,
  isPlainObject: Ur,
  isReadableStream: ey,
  isRequest: ty,
  isResponse: ny,
  isHeaders: ry,
  isUndefined: Gn,
  isDate: Xv,
  isFile: $v,
  isBlob: Kv,
  isRegExp: gy,
  isFunction: Ue,
  isStream: Zv,
  isURLSearchParams: Qv,
  isTypedArray: fy,
  isFileList: Gv,
  forEach: Qn,
  merge: ts,
  extend: iy,
  trim: oy,
  stripBOM: sy,
  inherits: ay,
  toFlatObject: cy,
  kindOf: So,
  kindOfTest: it,
  endsWith: ly,
  toArray: uy,
  forEachEntry: dy,
  matchAll: hy,
  isHTMLForm: py,
  hasOwnProperty: ic,
  hasOwnProp: ic,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Uu,
  freezeMethods: vy,
  toObjectSet: yy,
  toCamelCase: my,
  noop: by,
  toFiniteNumber: Sy,
  findKey: Vu,
  global: Ut,
  isContextDefined: Hu,
  isSpecCompliantForm: wy,
  toJSONObject: Ey,
  isAsyncFn: xy,
  isThenable: Cy,
  setImmediate: qu,
  asap: Ay,
  isIterable: Ty
};
function K(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
x.inherits(K, Error, {
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
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Wu = K.prototype, Yu = {};
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
  Yu[t] = { value: t };
});
Object.defineProperties(K, Yu);
Object.defineProperty(Wu, "isAxiosError", { value: !0 });
K.from = (t, e, n, r, o, i) => {
  const s = Object.create(Wu);
  return x.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const Oy = null;
function ns(t) {
  return x.isPlainObject(t) || x.isArray(t);
}
function Xu(t) {
  return x.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function sc(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Xu(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Ry(t) {
  return x.isArray(t) && !t.some(ns);
}
const ky = x.toFlatObject(x, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xo(t, e, n) {
  if (!x.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !x.isUndefined(p[m]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(e);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (x.isDate(g))
      return g.toISOString();
    if (!c && x.isBlob(g))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(g) || x.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, p) {
    let y = g;
    if (g && !p && typeof g == "object") {
      if (x.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (x.isArray(g) && Ry(g) || (x.isFileList(g) || x.endsWith(m, "[]")) && (y = x.toArray(g)))
        return m = Xu(m), y.forEach(function(C, T) {
          !(x.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? sc([m], T, i) : s === null ? m : m + "[]",
            l(C)
          );
        }), !1;
    }
    return ns(g) ? !0 : (e.append(sc(p, m, i), l(g)), !1);
  }
  const f = [], d = Object.assign(ky, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ns
  });
  function v(g, m) {
    if (!x.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), x.forEach(g, function(y, b) {
        (!(x.isUndefined(y) || y === null) && o.call(
          e,
          y,
          x.isString(b) ? b.trim() : b,
          m,
          d
        )) === !0 && v(y, m ? m.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!x.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function ac(t) {
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
function Ds(t, e) {
  this._pairs = [], t && xo(t, this, e);
}
const $u = Ds.prototype;
$u.append = function(e, n) {
  this._pairs.push([e, n]);
};
$u.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, ac);
  } : ac;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Py(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ku(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Py;
  x.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(e, n) : i = x.isURLSearchParams(e) ? e.toString() : new Ds(e, n).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class cc {
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
    x.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Gu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _y = typeof URLSearchParams < "u" ? URLSearchParams : Ds, Ny = typeof FormData < "u" ? FormData : null, jy = typeof Blob < "u" ? Blob : null, Iy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _y,
    FormData: Ny,
    Blob: jy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ms = typeof window < "u" && typeof document < "u", rs = typeof navigator == "object" && navigator || void 0, Ly = Ms && (!rs || ["ReactNative", "NativeScript", "NS"].indexOf(rs.product) < 0), Dy = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", My = Ms && window.location.href || "http://localhost", By = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ms,
  hasStandardBrowserEnv: Ly,
  hasStandardBrowserWebWorkerEnv: Dy,
  navigator: rs,
  origin: My
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...By,
  ...Iy
};
function Fy(t, e) {
  return xo(t, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Le.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function zy(t) {
  return x.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Vy(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Zu(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && x.isArray(o) ? o.length : s, c ? (x.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !x.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && x.isArray(o[s]) && (o[s] = Vy(o[s])), !a);
  }
  if (x.isFormData(t) && x.isFunction(t.entries)) {
    const n = {};
    return x.forEachEntry(t, (r, o) => {
      e(zy(r), o, n, 0);
    }), n;
  }
  return null;
}
function Hy(t, e, n) {
  if (x.isString(t))
    try {
      return (e || JSON.parse)(t), x.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const er = {
  transitional: Gu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = x.isObject(e);
    if (i && x.isHTMLForm(e) && (e = new FormData(e)), x.isFormData(e))
      return o ? JSON.stringify(Zu(e)) : e;
    if (x.isArrayBuffer(e) || x.isBuffer(e) || x.isStream(e) || x.isFile(e) || x.isBlob(e) || x.isReadableStream(e))
      return e;
    if (x.isArrayBufferView(e))
      return e.buffer;
    if (x.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Fy(e, this.formSerializer).toString();
      if ((a = x.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return xo(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Hy(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || er.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (x.isResponse(e) || x.isReadableStream(e))
      return e;
    if (e && x.isString(e) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Le.classes.FormData,
    Blob: Le.classes.Blob
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
x.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  er.headers[t] = {};
});
const Uy = x.toObjectSet([
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
]), qy = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && Uy[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, lc = Symbol("internals");
function Mn(t) {
  return t && String(t).trim().toLowerCase();
}
function qr(t) {
  return t === !1 || t == null ? t : x.isArray(t) ? t.map(qr) : String(t);
}
function Wy(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Yy = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ni(t, e, n, r, o) {
  if (x.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!x.isString(e)) {
    if (x.isString(r))
      return e.indexOf(r) !== -1;
    if (x.isRegExp(r))
      return r.test(e);
  }
}
function Xy(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function $y(t, e) {
  const n = x.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, e, o, i, s);
      },
      configurable: !0
    });
  });
}
let qe = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(a, c, l) {
      const u = Mn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = x.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = qr(a));
    }
    const s = (a, c) => x.forEach(a, (l, u) => i(l, u, c));
    if (x.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (x.isString(e) && (e = e.trim()) && !Yy(e))
      s(qy(e), n);
    else if (x.isObject(e) && x.isIterable(e)) {
      let a = {}, c, l;
      for (const u of e) {
        if (!x.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? x.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, n);
    } else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = Mn(e), e) {
      const r = x.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Wy(o);
        if (x.isFunction(n))
          return n.call(this, o, r);
        if (x.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Mn(e), e) {
      const r = x.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ni(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Mn(s), s) {
        const a = x.findKey(r, s);
        a && (!n || ni(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return x.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || ni(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return x.forEach(this, (o, i) => {
      const s = x.findKey(r, i);
      if (s) {
        n[s] = qr(o), delete n[i];
        return;
      }
      const a = e ? Xy(i) : String(i).trim();
      a !== i && delete n[i], n[a] = qr(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && x.isArray(r) ? r.join(", ") : r);
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
    const r = (this[lc] = this[lc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Mn(s);
      r[a] || ($y(o, s), r[a] = !0);
    }
    return x.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(qe.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(qe);
function ri(t, e) {
  const n = this || er, r = e || n, o = qe.from(r.headers);
  let i = r.data;
  return x.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Ju(t) {
  return !!(t && t.__CANCEL__);
}
function Tn(t, e, n) {
  K.call(this, t ?? "canceled", K.ERR_CANCELED, e, n), this.name = "CanceledError";
}
x.inherits(Tn, K, {
  __CANCEL__: !0
});
function Qu(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ky(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Gy(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let f = i, d = 0;
    for (; f !== o; )
      d += n[f++], f = f % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < e)
      return;
    const v = u && l - u;
    return v ? Math.round(d * 1e3 / v) : void 0;
  };
}
function Zy(t, e) {
  let n = 0, r = 1e3 / e, o, i;
  const s = (l, u = Date.now()) => {
    n = u, o = null, i && (clearTimeout(i), i = null), t.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - n;
    f >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const eo = (t, e, n = 3) => {
  let r = 0;
  const o = Gy(50, 250);
  return Zy((i) => {
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
      [e ? "download" : "upload"]: !0
    };
    t(f);
  }, n);
}, uc = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, fc = (t) => (...e) => x.asap(() => t(...e)), Jy = Le.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, Le.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(Le.origin),
  Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
) : () => !0, Qy = Le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, i) {
      const s = [t + "=" + encodeURIComponent(e)];
      x.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), x.isString(r) && s.push("path=" + r), x.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function e0(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function t0(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ef(t, e, n) {
  let r = !e0(e);
  return t && (r || n == !1) ? t0(t, e) : e;
}
const dc = (t) => t instanceof qe ? { ...t } : t;
function Zt(t, e) {
  e = e || {};
  const n = {};
  function r(l, u, f, d) {
    return x.isPlainObject(l) && x.isPlainObject(u) ? x.merge.call({ caseless: d }, l, u) : x.isPlainObject(u) ? x.merge({}, u) : x.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, d) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(l))
        return r(void 0, l, f, d);
    } else return r(l, u, f, d);
  }
  function i(l, u) {
    if (!x.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, f) {
    if (f in e)
      return r(l, u);
    if (f in t)
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
    headers: (l, u, f) => o(dc(l), dc(u), f, !0)
  };
  return x.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const f = c[u] || o, d = f(t[u], e[u], u);
    x.isUndefined(d) && f !== a || (n[u] = d);
  }), n;
}
const tf = (t) => {
  const e = Zt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  e.headers = s = qe.from(s), e.url = Ku(ef(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (x.isFormData(n)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (r && x.isFunction(r) && (r = r(e)), r || r !== !1 && Jy(e.url))) {
    const l = o && i && Qy.read(i);
    l && s.set(o, l);
  }
  return e;
}, n0 = typeof XMLHttpRequest < "u", r0 = n0 && function(t) {
  return new Promise(function(n, r) {
    const o = tf(t);
    let i = o.data;
    const s = qe.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, d, v, g;
    function m() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function y() {
      if (!p)
        return;
      const C = qe.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: C,
        config: t,
        request: p
      };
      Qu(function(E) {
        n(E), m();
      }, function(E) {
        r(E), m();
      }, S), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new K("Request aborted", K.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || Gu;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new K(
        T,
        S.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        t,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && x.forEach(s.toJSON(), function(T, S) {
      p.setRequestHeader(S, T);
    }), x.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([d, g] = eo(l, !0), p.addEventListener("progress", d)), c && p.upload && ([f, v] = eo(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (C) => {
      p && (r(!C || C.type ? new Tn(null, t, p) : C), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = Ky(o.url);
    if (b && Le.protocols.indexOf(b) === -1) {
      r(new K("Unsupported protocol " + b + ":", K.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, o0 = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof K ? u : new Tn(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, i(new K(`timeout ${e} of ms exceeded`, K.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => x.asap(a), c;
  }
}, i0 = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, s0 = async function* (t, e) {
  for await (const n of a0(t))
    yield* i0(n, e);
}, a0 = async function* (t) {
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
}, hc = (t, e, n, r) => {
  const o = s0(t, e);
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
}, Co = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nf = Co && typeof ReadableStream == "function", c0 = Co && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), rf = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, l0 = nf && rf(() => {
  let t = !1;
  const e = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), pc = 64 * 1024, os = nf && rf(() => x.isReadableStream(new Response("").body)), to = {
  stream: os && ((t) => t.body)
};
Co && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !to[e] && (to[e] = x.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new K(`Response type '${e}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const u0 = async (t) => {
  if (t == null)
    return 0;
  if (x.isBlob(t))
    return t.size;
  if (x.isSpecCompliantForm(t))
    return (await new Request(Le.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(t) || x.isArrayBuffer(t))
    return t.byteLength;
  if (x.isURLSearchParams(t) && (t = t + ""), x.isString(t))
    return (await c0(t)).byteLength;
}, f0 = async (t, e) => {
  const n = x.toFiniteNumber(t.getContentLength());
  return n ?? u0(e);
}, d0 = Co && (async (t) => {
  let {
    url: e,
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
  } = tf(t);
  l = l ? (l + "").toLowerCase() : "text";
  let v = o0([o, i && i.toAbortSignal()], s), g;
  const m = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (c && l0 && n !== "get" && n !== "head" && (p = await f0(u, r)) !== 0) {
      let S = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (x.isFormData(r) && (A = S.headers.get("content-type")) && u.setContentType(A), S.body) {
        const [E, P] = uc(
          p,
          eo(fc(c))
        );
        r = hc(S.body, pc, E, P);
      }
    }
    x.isString(f) || (f = f ? "include" : "omit");
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
    let b = await fetch(g);
    const C = os && (l === "stream" || l === "response");
    if (os && (a || C && m)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((I) => {
        S[I] = b[I];
      });
      const A = x.toFiniteNumber(b.headers.get("content-length")), [E, P] = a && uc(
        A,
        eo(fc(a), !0)
      ) || [];
      b = new Response(
        hc(b.body, pc, E, () => {
          P && P(), m && m();
        }),
        S
      );
    }
    l = l || "text";
    let T = await to[x.findKey(to, l) || "text"](b, t);
    return !C && m && m(), await new Promise((S, A) => {
      Qu(S, A, {
        data: T,
        headers: qe.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: g
      });
    });
  } catch (y) {
    throw m && m(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, t, g),
      {
        cause: y.cause || y
      }
    ) : K.from(y, y && y.code, t, g);
  }
}), is = {
  http: Oy,
  xhr: r0,
  fetch: d0
};
x.forEach(is, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const mc = (t) => `- ${t}`, h0 = (t) => x.isFunction(t) || t === null || t === !1, of = {
  getAdapter: (t) => {
    t = x.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let s;
      if (r = n, !h0(n) && (r = is[(s = String(n)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = e ? i.length > 1 ? `since :
` + i.map(mc).join(`
`) : " " + mc(i[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: is
};
function oi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Tn(null, t);
}
function gc(t) {
  return oi(t), t.headers = qe.from(t.headers), t.data = ri.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), of.getAdapter(t.adapter || er.adapter)(t).then(function(r) {
    return oi(t), r.data = ri.call(
      t,
      t.transformResponse,
      r
    ), r.headers = qe.from(r.headers), r;
  }, function(r) {
    return Ju(r) || (oi(t), r && r.response && (r.response.data = ri.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = qe.from(r.response.headers))), Promise.reject(r);
  });
}
const sf = "1.9.0", Ao = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ao[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const vc = {};
Ao.transitional = function(e, n, r) {
  function o(i, s) {
    return "[Axios v" + sf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (e === !1)
      throw new K(
        o(s, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !vc[s] && (vc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, s, a) : !0;
  };
};
Ao.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function p0(t, e, n) {
  if (typeof t != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = e[i];
    if (s) {
      const a = t[i], c = a === void 0 || s(a, i, t);
      if (c !== !0)
        throw new K("option " + i + " must be " + c, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + i, K.ERR_BAD_OPTION);
  }
}
const Wr = {
  assertOptions: p0,
  validators: Ao
}, ct = Wr.validators;
let Kt = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new cc(),
      response: new cc()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Zt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Wr.assertOptions(r, {
      silentJSONParsing: ct.transitional(ct.boolean),
      forcedJSONParsing: ct.transitional(ct.boolean),
      clarifyTimeoutError: ct.transitional(ct.boolean)
    }, !1), o != null && (x.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Wr.assertOptions(o, {
      encode: ct.function,
      serialize: ct.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Wr.assertOptions(n, {
      baseUrl: ct.spelling("baseURL"),
      withXsrfToken: ct.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && x.merge(
      i.common,
      i[n.method]
    );
    i && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = qe.concat(s, i);
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
      const g = [gc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), d = g.length, u = Promise.resolve(n); f < d; )
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
      u = gc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = l.length; f < d; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(e) {
    e = Zt(this.defaults, e);
    const n = ef(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ku(n, e.params, e.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(e) {
  Kt.prototype[e] = function(n, r) {
    return this.request(Zt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(Zt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Kt.prototype[e] = n(), Kt.prototype[e + "Form"] = n(!0);
});
let m0 = class af {
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
      r.reason || (r.reason = new Tn(i, s, a), n(r.reason));
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
      token: new af(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function g0(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function v0(t) {
  return x.isObject(t) && t.isAxiosError === !0;
}
const ss = {
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
Object.entries(ss).forEach(([t, e]) => {
  ss[e] = t;
});
function cf(t) {
  const e = new Kt(t), n = Mu(Kt.prototype.request, e);
  return x.extend(n, Kt.prototype, e, { allOwnKeys: !0 }), x.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return cf(Zt(t, o));
  }, n;
}
const we = cf(er);
we.Axios = Kt;
we.CanceledError = Tn;
we.CancelToken = m0;
we.isCancel = Ju;
we.VERSION = sf;
we.toFormData = xo;
we.AxiosError = K;
we.Cancel = we.CanceledError;
we.all = function(e) {
  return Promise.all(e);
};
we.spread = g0;
we.isAxiosError = v0;
we.mergeConfig = Zt;
we.AxiosHeaders = qe;
we.formToJSON = (t) => Zu(x.isHTMLForm(t) ? new FormData(t) : t);
we.getAdapter = of.getAdapter;
we.HttpStatusCode = ss;
we.default = we;
const {
  Axios: F0,
  AxiosError: z0,
  CanceledError: V0,
  isCancel: H0,
  CancelToken: U0,
  VERSION: q0,
  all: W0,
  Cancel: Y0,
  isAxiosError: X0,
  spread: $0,
  toFormData: K0,
  AxiosHeaders: G0,
  HttpStatusCode: Z0,
  formToJSON: J0,
  getAdapter: Q0,
  mergeConfig: eb
} = we;
we.defaults.withCredentials = !0;
const y0 = async (t) => {
  var e, n, r, o;
  try {
    return (await we(t)).data;
  } catch (i) {
    throw ((n = (e = i.response) == null ? void 0 : e.data) == null ? void 0 : n.message) || ((o = (r = i.response) == null ? void 0 : r.data) == null ? void 0 : o.error) || i.message;
  }
}, ft = {
  mousemove: "ACTION_MOVE",
  mouseup: "ACTION_UP",
  mousedown: "ACTION_DOWN",
  touchmove: "ACTION_MOVE",
  touchend: "ACTION_UP",
  touchstart: "ACTION_DOWN"
}, b0 = {
  keyup: "ACTION_UP",
  keydown: "ACTION_DOWN"
}, S0 = "moveEvent", w0 = "wheelEvent", E0 = "keyBoardEvent", lf = "assistiveMenuHide", as = "shortcutEvent", x0 = "fullscreenEvent", C0 = ({ isMobile: t, assistive: e, onImgEvent: n, canvasContent: r, imageRef: o }) => {
  const [i, s] = ze(!1), a = (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current;
    let d = ft[u.type];
    if (e.isDown == !0 || e.showMenu == !0) {
      d == ft.mouseup && n(lf, {});
      return;
    }
    if (d == ft.mousedown && s(!0), d != ft.mousedown && i == !1)
      return;
    d == ft.mouseup && s(!1);
    let v, g;
    const m = f.getBoundingClientRect();
    if (u.type.includes("touch")) {
      const { touches: p, changedTouches: y } = u, b = p[0] ?? y[0];
      v = b.pageX - m.left, g = b.pageY - m.top;
    } else u.type.includes("mouse") && (v = u.clientX - m.left, g = u.clientY - m.top);
    n(S0, {
      action: "touchEvent",
      keyAction: d,
      x: v,
      y: g,
      width: m.width,
      height: m.height
    }), f.focus();
  }, c = (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current, d = Math.sign(u.deltaY), v = f.getBoundingClientRect();
    n(w0, {
      action: "wheelEvent",
      width: f.offsetWidth,
      height: f.offsetHeight,
      x: u.clientX - v.left,
      y: u.clientY - v.top,
      delta: d
    }), f.focus();
  }, l = async (u) => {
    if (u.preventDefault(), !o.current)
      return;
    const f = o.current, d = b0[u.type], v = u.key.toLowerCase();
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
    p && n(E0, p), f.focus();
  };
  return Ve(() => {
    const u = o.current;
    if (u) {
      const f = { passive: !1 };
      return t ? (u.addEventListener("touchstart", a, f), u.addEventListener("touchmove", a, f), u.addEventListener("touchend", a)) : (u.addEventListener("wheel", c, f), u.addEventListener("keydown", l), ["mousemove", "mousedown", "mouseup"].forEach((d) => {
        u.addEventListener(d, a);
      })), () => {
        u && (t ? ["touchstart", "touchmove", "touchend"].forEach((d) => {
          u.removeEventListener(d, a);
        }) : (["mousemove", "mousedown", "mouseup", "wheel", "keydown"].forEach((d) => {
          u.removeEventListener(d, a);
        }), u.removeEventListener("keydown", l)));
      };
    }
  }, [t, a, c, l]), /* @__PURE__ */ M.jsx(kd, { ref: o, ...r });
}, A0 = "data:image/png;base64,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", T0 = nt.div`
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
`, gt = nt.div`
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
`, vt = nt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, O0 = nt.img`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, R0 = nt.div`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`, yc = () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, k0 = (t) => {
  const e = document.querySelector(`#screen_${t}`);
  e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
}, P0 = () => {
  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
}, _0 = bc((t, e) => {
  const { displayId: n, isMobile: r, onSenData: o, status: i, imageRef: s, isShowDeviceId: a } = t, [c, l] = ze(0), [u, f] = ze(0), [d, v] = ze(null), [g, m] = ze(0), p = Pe(null), y = Pe(null), b = Pe(null), [C, T] = ze({ cursor: "move", opacity: 0.3, zIndex: 999 }), [S, A] = ze({ zIndex: 999, height: "", width: "13%" }), [E, P] = ze({ zIndex: 1e3 }), I = Pe(null), [U, X] = ze(null), H = (j) => {
    if (j.preventDefault(), i.get.showMenu == !0)
      return;
    const V = ft[j.type], R = s.current, k = b.current, Y = R.getBoundingClientRect(), G = k.getBoundingClientRect();
    let W, $;
    const ue = Y.width - G.width, re = Y.height - G.height;
    if (j.type.includes("touch")) {
      const { touches: de, changedTouches: ge } = j, Ce = de[0] ?? ge[0];
      W = Ce.pageX, $ = Ce.pageY;
    } else j.type.includes("mouse") && (W = j.clientX, $ = j.clientY);
    if (V == ft.mousedown)
      i.set({ ...i.get, isDown: !0 }), l(W - G.left), f($ - G.top), T({ ...C, opacity: 1, cursor: "grab" }), m(performance.now());
    else if (V == ft.mousemove) {
      if (i.get.isDown == !1) return;
      var ce = W - c - Y.left, le = $ - u - Y.top;
      ce = Math.max(3, Math.min(ce, ue) - 3), le = Math.max(3, Math.min(le, re) - 3), A({ ...S, top: `${le}px`, left: `${ce}px` });
    } else if (V == ft.mouseup) {
      const de = performance.now() - g;
      d == ft.mousedown || de < 100 ? i.set({ ...i.get, showMenu: !0, isDown: !1 }) : i.set({ ...i.get, isDown: !1 }), T({ ...C, opacity: 0.3, cursor: "move" });
    }
    v(V), k.focus();
  }, N = async (j) => {
    j.preventDefault();
    const V = j.target.closest("div").getAttribute("data-id");
    if (V === "fullscreen")
      yc() ? P0() : k0(n);
    else {
      const R = {
        action: "shortcutEvent",
        shortcut: V,
        data: ""
      };
      V === "paste" && (R.data = await navigator.clipboard.readText()), V === "copy" && (R.taskId = "shortcutCopy"), o(as, R);
    }
    i.set({ ...i.get, showMenu: !1 }), y.current.focus();
  }, L = (j) => {
    const V = yc();
    o(x0, V);
  };
  Ve(() => {
    requestAnimationFrame(() => {
      P({ ...E, opacity: i.get.showMenu ? 1 : 0 });
    });
  }, [i]), Ve(() => {
    const j = s.current;
    return j && ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((R) => {
      j.addEventListener(R, L);
    }), () => {
      j && j.removeEventListener("click", L);
    };
  }, []), Ve(() => {
    const j = b.current, V = y.current;
    if (V && V.addEventListener("click", N), j) {
      const R = { passive: !1 };
      return r ? (j.addEventListener("touchstart", H, R), j.addEventListener("touchmove", H, R), j.addEventListener("touchend", H)) : ["mousemove", "mousedown", "mouseup"].forEach((k) => {
        j.addEventListener(k, H);
      }), () => {
        V && V.removeEventListener("click", N), j && (r ? ["touchstart", "touchmove", "touchend"].forEach((k) => {
          j.removeEventListener(k, H);
        }) : ["mousemove", "mousedown", "mouseup"].forEach((k) => {
          j.removeEventListener(k, H);
        }));
      };
    }
  }, [r, H]);
  const F = () => {
    A({
      zIndex: 999,
      height: I.current == "landscape" ? "12%" : null,
      width: I.current != "landscape" ? "12%" : null,
      top: "50%",
      right: "5%"
    });
  };
  return Sc(e, () => ({
    fixTouch: function(j) {
      j && (I.current = j), F();
    },
    setFullscreen: function(j) {
      X(j);
    }
  })), /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    i.get.showMenu ? /* @__PURE__ */ M.jsxs(T0, { id: `assistive_menu_${n}`, style: E, ref: y, children: [
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "fullscreen", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx(
              "path",
              {
                d: U ? "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z" : "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"
              }
            )
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Screen" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "copy", children: [
        /* @__PURE__ */ M.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ M.jsx("path", { d: "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" }),
              /* @__PURE__ */ M.jsx("path", { d: "M6 12h6v2H6zm0 4h6v2H6z" })
            ]
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Copy" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "paste", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx("path", { d: "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z" })
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Paste" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "device_id", children: [
        /* @__PURE__ */ M.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ M.jsx("path", { d: "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z" }),
              /* @__PURE__ */ M.jsx("circle", { cx: "11.75", cy: "18", r: "1" })
            ]
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: a ? "Hide ID" : "Show ID" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "volume", children: [
        /* @__PURE__ */ M.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ M.jsx("path", { d: "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" }),
              /* @__PURE__ */ M.jsx("path", { d: "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z" })
            ]
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Volume" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "sync", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx("path", { d: "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z" })
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Sync" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "recents", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" })
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Recents" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "home", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx("path", { d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z" })
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Home" })
      ] }),
      /* @__PURE__ */ M.jsxs(gt, { "data-id": "back", children: [
        /* @__PURE__ */ M.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ M.jsx("path", { d: "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" })
          }
        ),
        /* @__PURE__ */ M.jsx(vt, { children: "Back" })
      ] })
    ] }) : null,
    /* @__PURE__ */ M.jsx(
      R0,
      {
        id: `assistive_touch_class_${n}`,
        className: "assistive",
        ref: p,
        style: C,
        children: /* @__PURE__ */ M.jsx(
          O0,
          {
            style: S,
            src: A0,
            className: "assistive",
            id: `assistive_touch_${n}`,
            alt: "Icon",
            ref: b,
            draggable: !1
          }
        )
      }
    )
  ] });
});
class N0 {
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
        (!this.width || !this.height) && this.autoResize(n.codedWidth, n.codedHeight), this.orientation == "landscape" ? (this.canvas.width = this.height, this.canvas.height = this.width, this.ctx.translate(0, this.width), this.ctx.rotate(Math.PI / 2), this.ctx.scale(-1, -1), this.ctx.drawImage(r, 0, 0, this.width, this.height)) : (this.canvas.width = this.width, this.canvas.height = this.height, this.ctx.drawImage(r, 0, 0, this.width, this.height)), r.close(), n.close();
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
const tb = bc((t, e) => {
  const { serve: n, dataDevice: r, maxWidth: o, showAssistive: i, showDeviceId: s, syncEvent: a, syncButton: c } = t, l = r.device_id, u = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), f = "control", [d, v] = ze(null), [g, m] = ze(s), [p, y] = ze({ showMenu: !1, isDown: !1 }), b = Pe(null), C = Pe(null), [T, S] = ze(null), A = `image_${l}`, E = `screen_${l}`, P = `screen_main_${l}`, I = Pe(null), U = Pe(null), X = Pe(null), [H, N] = ze([]), L = Pe(null), F = Pe(/* @__PURE__ */ new Map());
  Ve(() => {
    m(s);
  }, [s]);
  const j = (R) => {
    N((k) => [...k, R]);
  }, V = (R) => {
    C.current.emit("message", R), a == null || a(R);
  };
  return Sc(e, () => ({
    api: async function(R, k = 5e3) {
      return new Promise((Y, G) => {
        const W = setTimeout(() => {
          F.current.delete(R.taskId), G({ action: R.action, taskId: R.taskId, status: !1, message: "Timeout waiting for response" });
        }, k);
        F.current.set(R.taskId, ($) => {
          clearTimeout(W), Y($);
        }), C.current.emit("message", R);
      });
    },
    sync: function(R) {
      C.current.emit("message", R);
    },
    showDeviceId: function(R) {
      m(R);
    }
  })), Ve(() => {
    (async () => {
      try {
        const R = {
          url: n,
          method: "post",
          timeout: 1e4,
          headers: { "Content-Type": "application/json" },
          data: {
            device_id: r.device_id,
            password: r.passwd
          }
        }, k = await y0(R);
        v(k.data);
      } catch (R) {
        j({ msg: R, type: "error" });
      }
    })();
  }, []), Ve(() => {
    if (C.current || !d) return;
    const R = Dr(d, {
      reconnection: !1
    });
    return R.on("connect", () => {
      R.emit("join_room", {
        action: "connect",
        type_client: f,
        device_id: r.device_id,
        isMobile: u,
        passwd: r.passwd
      });
    }), R.on("join_room", (k) => {
      k.status == !0 ? (C.current = R, R.emit("message", { action: "onScreenEvent" })) : j({ msg: k.msg, type: "error" });
    }), R.on("screen", (k) => {
      L.current.decode(k);
    }), R.on("video_meta", (k) => {
      k ? (L.current.setVideoMeta(k), L.current.iframe || R.emit("message", { action: "onSyncIFrame" })) : R.emit("video_meta", { action: "get_video_meta" });
    }), R.on("message", (k) => {
      if ((k.action == "COPY_TEXT" || k.action == "shortcutEvent") && k.text.length > 0 ? navigator.clipboard.writeText(k.text) : k.action == "orientation" && (L.current.setOrientation(k.value), X.current.fixTouch(k.value)), k.taskId) {
        const Y = F.current.get(k.taskId);
        Y && (Y(k), F.current.delete(k.taskId));
      }
    }), R.on("connect_error", (k) => {
      j({ msg: k, type: "error" });
    }), R.on("disconnect", (k) => {
      j({ msg: "connection closed code: " + k.code, type: "info" }), b.current && b.current.close();
    }), () => {
      R && R.disconnect();
    };
  }, [d]), Ve(() => {
    const R = U.current;
    L.current = new N0(R, o, u), L.current.setIsConnect = S;
  }, []), Ve(() => {
    const R = () => {
      const k = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      L.current.setFullscreen(!!k), X.current.setFullscreen(!!k), X.current.fixTouch();
    };
    return document.addEventListener("fullscreenchange", R), () => {
      document.removeEventListener("fullscreenchange", R);
    };
  }, []), /* @__PURE__ */ M.jsxs(Od, { id: P, children: [
    g && /* @__PURE__ */ M.jsx(_d, { children: /* @__PURE__ */ M.jsx(Pd, { children: r.device_id }) }),
    H.length == 0 ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      !T && /* @__PURE__ */ M.jsxs(ju, { align: "center", gap: "middle", children: [
        /* @__PURE__ */ M.jsx(Un, { size: "large" }),
        /* @__PURE__ */ M.jsx(Un, { size: "large" }),
        /* @__PURE__ */ M.jsx(Un, { size: "large" })
      ] }),
      /* @__PURE__ */ M.jsxs(Rd, { ref: I, id: E, style: T ? {} : { height: 0, width: 0 }, children: [
        i ? /* @__PURE__ */ M.jsx(
          _0,
          {
            status: {
              get: p,
              set: y
            },
            ref: X,
            imageRef: U,
            displayId: l,
            isMobile: u,
            isShowDeviceId: g,
            onSenData: (R, k) => {
              R === as && k.shortcut === "device_id" ? m(!g) : R === as && k.shortcut === "sync" ? c(r.device_id) : V(k);
            }
          }
        ) : null,
        /* @__PURE__ */ M.jsx(
          C0,
          {
            canvasContent: {
              id: A,
              tabIndex: "0",
              draggable: "false"
            },
            imageRef: U,
            isMobile: u,
            assistive: p,
            onImgEvent: (R, k) => {
              R === lf ? y({ ...p, showMenu: !1 }) : V(k);
            }
          }
        )
      ] })
    ] }) : H.map((R, k) => /* @__PURE__ */ M.jsx(ku, { style: { marginTop: 5 }, message: R.msg, type: R.type, showIcon: !0, closable: !0 }, k))
  ] });
});
export {
  tb as ControlMyRPP
};
