var ch = Object.defineProperty;
var lh = (e, t, r) => t in e ? ch(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => lh(e, typeof t != "symbol" ? t + "" : t, r);
import * as C from "react";
import U, { useDebugValue as Va, createElement as uh, useRef as ae, useContext as lt, createContext as Do, useEffect as Oe, isValidElement as fh, version as dh, useLayoutEffect as hh, forwardRef as Fr, useState as qe, useMemo as Cn, Children as ph, useImperativeHandle as Fl } from "react";
import * as Vl from "react-dom";
import Ua from "react-dom";
function gh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zn = { exports: {} }, nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function mh() {
  if (qa) return nn;
  qa = 1;
  var e = U, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, d = null, v = null;
    l !== void 0 && (d = "" + l), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) n.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: a, key: d, ref: v, props: f, _owner: o.current };
  }
  return nn.Fragment = r, nn.jsx = s, nn.jsxs = s, nn;
}
var on = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function vh() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function h(m) {
      if (m === null || typeof m != "object")
        return null;
      var I = p && m[p] || m[g];
      return typeof I == "function" ? I : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(m) {
      {
        for (var I = arguments.length, z = new Array(I > 1 ? I - 1 : 0), J = 1; J < I; J++)
          z[J - 1] = arguments[J];
        w("error", m, z);
      }
    }
    function w(m, I, z) {
      {
        var J = S.ReactDebugCurrentFrame, le = J.getStackAddendum();
        le !== "" && (I += "%s", z = z.concat([le]));
        var de = z.map(function(ie) {
          return String(ie);
        });
        de.unshift("Warning: " + I), Function.prototype.apply.call(console[m], console, de);
      }
    }
    var x = !1, b = !1, O = !1, E = !1, N = !1, M;
    M = Symbol.for("react.module.reference");
    function q(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === i || N || m === o || m === l || m === u || E || m === v || x || b || O || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === M || m.getModuleId !== void 0));
    }
    function K(m, I, z) {
      var J = m.displayName;
      if (J)
        return J;
      var le = I.displayName || I.name || "";
      return le !== "" ? z + "(" + le + ")" : z;
    }
    function X(m) {
      return m.displayName || "Context";
    }
    function $(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
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
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var I = m;
            return X(I) + ".Consumer";
          case s:
            var z = m;
            return X(z._context) + ".Provider";
          case c:
            return K(m, m.render, "ForwardRef");
          case f:
            var J = m.displayName || null;
            return J !== null ? J : $(m.type) || "Memo";
          case d: {
            var le = m, de = le._payload, ie = le._init;
            try {
              return $(ie(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, H = 0, A, _, T, P, L, D, k;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function F() {
      {
        if (H === 0) {
          A = console.log, _ = console.info, T = console.warn, P = console.error, L = console.group, D = console.groupCollapsed, k = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: j,
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
    function Q() {
      {
        if (H--, H === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, m, {
              value: A
            }),
            info: B({}, m, {
              value: _
            }),
            warn: B({}, m, {
              value: T
            }),
            error: B({}, m, {
              value: P
            }),
            group: B({}, m, {
              value: L
            }),
            groupCollapsed: B({}, m, {
              value: D
            }),
            groupEnd: B({}, m, {
              value: k
            })
          });
        }
        H < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = S.ReactCurrentDispatcher, oe;
    function Se(m, I, z) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (le) {
            var J = le.stack.trim().match(/\n( *(at )?)/);
            oe = J && J[1] || "";
          }
        return `
` + oe + m;
      }
    }
    var me = !1, Ie;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new Re();
    }
    function ce(m, I) {
      if (!m || me)
        return "";
      {
        var z = Ie.get(m);
        if (z !== void 0)
          return z;
      }
      var J;
      me = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = ee.current, ee.current = null, F();
      try {
        if (I) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Ge) {
              J = Ge;
            }
            Reflect.construct(m, [], ie);
          } else {
            try {
              ie.call();
            } catch (Ge) {
              J = Ge;
            }
            m.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            J = Ge;
          }
          m();
        }
      } catch (Ge) {
        if (Ge && J && typeof Ge.stack == "string") {
          for (var ne = Ge.stack.split(`
`), ze = J.stack.split(`
`), we = ne.length - 1, Ee = ze.length - 1; we >= 1 && Ee >= 0 && ne[we] !== ze[Ee]; )
            Ee--;
          for (; we >= 1 && Ee >= 0; we--, Ee--)
            if (ne[we] !== ze[Ee]) {
              if (we !== 1 || Ee !== 1)
                do
                  if (we--, Ee--, Ee < 0 || ne[we] !== ze[Ee]) {
                    var _e = `
` + ne[we].replace(" at new ", " at ");
                    return m.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", m.displayName)), typeof m == "function" && Ie.set(m, _e), _e;
                  }
                while (we >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        me = !1, ee.current = de, Q(), Error.prepareStackTrace = le;
      }
      var xr = m ? m.displayName || m.name : "", rr = xr ? Se(xr) : "";
      return typeof m == "function" && Ie.set(m, rr), rr;
    }
    function Qe(m, I, z) {
      return ce(m, !1);
    }
    function Y(m) {
      var I = m.prototype;
      return !!(I && I.isReactComponent);
    }
    function Ue(m, I, z) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return ce(m, Y(m));
      if (typeof m == "string")
        return Se(m);
      switch (m) {
        case l:
          return Se("Suspense");
        case u:
          return Se("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return Qe(m.render);
          case f:
            return Ue(m.type, I, z);
          case d: {
            var J = m, le = J._payload, de = J._init;
            try {
              return Ue(de(le), I, z);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, nt = {}, Ct = S.ReactDebugCurrentFrame;
    function We(m) {
      if (m) {
        var I = m._owner, z = Ue(m.type, m._source, I ? I.type : null);
        Ct.setExtraStackFrame(z);
      } else
        Ct.setExtraStackFrame(null);
    }
    function wt(m, I, z, J, le) {
      {
        var de = Function.call.bind(ve);
        for (var ie in m)
          if (de(m, ie)) {
            var ne = void 0;
            try {
              if (typeof m[ie] != "function") {
                var ze = Error((J || "React class") + ": " + z + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              ne = m[ie](I, ie, J, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              ne = we;
            }
            ne && !(ne instanceof Error) && (We(le), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", z, ie, typeof ne), We(null)), ne instanceof Error && !(ne.message in nt) && (nt[ne.message] = !0, We(le), y("Failed %s type: %s", z, ne.message), We(null));
          }
      }
    }
    var $e = Array.isArray;
    function ye(m) {
      return $e(m);
    }
    function Fe(m) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, z = I && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return z;
      }
    }
    function dt(m) {
      try {
        return ot(m), !1;
      } catch {
        return !0;
      }
    }
    function ot(m) {
      return "" + m;
    }
    function mr(m) {
      if (dt(m))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fe(m)), ot(m);
    }
    var Mt = S.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kt, Jt;
    function yr(m) {
      if (ve.call(m, "ref")) {
        var I = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function br(m) {
      if (ve.call(m, "key")) {
        var I = Object.getOwnPropertyDescriptor(m, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Sr(m, I) {
      typeof m.ref == "string" && Mt.current;
    }
    function Qt(m, I) {
      {
        var z = function() {
          Kt || (Kt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        z.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Ce(m, I) {
      {
        var z = function() {
          Jt || (Jt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        z.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Ze = function(m, I, z, J, le, de, ie) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: I,
        ref: z,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Zt(m, I, z, J, le) {
      {
        var de, ie = {}, ne = null, ze = null;
        z !== void 0 && (mr(z), ne = "" + z), br(I) && (mr(I.key), ne = "" + I.key), yr(I) && (ze = I.ref, Sr(I, le));
        for (de in I)
          ve.call(I, de) && !vr.hasOwnProperty(de) && (ie[de] = I[de]);
        if (m && m.defaultProps) {
          var we = m.defaultProps;
          for (de in we)
            ie[de] === void 0 && (ie[de] = we[de]);
        }
        if (ne || ze) {
          var Ee = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ne && Qt(ie, Ee), ze && Ce(ie, Ee);
        }
        return Ze(m, ne, ze, le, J, Mt.current, ie);
      }
    }
    var Zr = S.ReactCurrentOwner, Mn = S.ReactDebugCurrentFrame;
    function Lt(m) {
      if (m) {
        var I = m._owner, z = Ue(m.type, m._source, I ? I.type : null);
        Mn.setExtraStackFrame(z);
      } else
        Mn.setExtraStackFrame(null);
    }
    var en;
    en = !1;
    function tn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Ln() {
      {
        if (Zr.current) {
          var m = $(Zr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Dn(m) {
      return "";
    }
    var er = {};
    function Cr(m) {
      {
        var I = Ln();
        if (!I) {
          var z = typeof m == "string" ? m : m.displayName || m.name;
          z && (I = `

Check the top-level render call using <` + z + ">.");
        }
        return I;
      }
    }
    function tr(m, I) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var z = Cr(I);
        if (er[z])
          return;
        er[z] = !0;
        var J = "";
        m && m._owner && m._owner !== Zr.current && (J = " It was passed a child from " + $(m._owner.type) + "."), Lt(m), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, J), Lt(null);
      }
    }
    function wr(m, I) {
      {
        if (typeof m != "object")
          return;
        if (ye(m))
          for (var z = 0; z < m.length; z++) {
            var J = m[z];
            tn(J) && tr(J, I);
          }
        else if (tn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var le = h(m);
          if (typeof le == "function" && le !== m.entries)
            for (var de = le.call(m), ie; !(ie = de.next()).done; )
              tn(ie.value) && tr(ie.value, I);
        }
      }
    }
    function Dt(m) {
      {
        var I = m.type;
        if (I == null || typeof I == "string")
          return;
        var z;
        if (typeof I == "function")
          z = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === f))
          z = I.propTypes;
        else
          return;
        if (z) {
          var J = $(I);
          wt(z, m.props, "prop", J, m);
        } else if (I.PropTypes !== void 0 && !en) {
          en = !0;
          var le = $(I);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(m) {
      {
        for (var I = Object.keys(m.props), z = 0; z < I.length; z++) {
          var J = I[z];
          if (J !== "children" && J !== "key") {
            Lt(m), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Lt(null);
            break;
          }
        }
        m.ref !== null && (Lt(m), y("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
      }
    }
    var rn = {};
    function Bn(m, I, z, J, le, de) {
      {
        var ie = q(m);
        if (!ie) {
          var ne = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = Dn();
          ze ? ne += ze : ne += Ln();
          var we;
          m === null ? we = "null" : ye(m) ? we = "array" : m !== void 0 && m.$$typeof === t ? (we = "<" + ($(m.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : we = typeof m, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ne);
        }
        var Ee = Zt(m, I, z, le, de);
        if (Ee == null)
          return Ee;
        if (ie) {
          var _e = I.children;
          if (_e !== void 0)
            if (J)
              if (ye(_e)) {
                for (var xr = 0; xr < _e.length; xr++)
                  wr(_e[xr], m);
                Object.freeze && Object.freeze(_e);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wr(_e, m);
        }
        if (ve.call(I, "key")) {
          var rr = $(m), Ge = Object.keys(I).filter(function(ah) {
            return ah !== "key";
          }), Si = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rn[rr + Si]) {
            var sh = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Si, rr, sh, rr), rn[rr + Si] = !0;
          }
        }
        return m === n ? Bt(Ee) : Dt(Ee), Ee;
      }
    }
    function je(m, I, z) {
      return Bn(m, I, z, !0);
    }
    function Hn(m, I, z) {
      return Bn(m, I, z, !1);
    }
    var bi = Hn, xe = je;
    on.Fragment = n, on.jsx = bi, on.jsxs = xe;
  }()), on;
}
var Ga;
function yh() {
  return Ga || (Ga = 1, process.env.NODE_ENV === "production" ? zn.exports = mh() : zn.exports = vh()), zn.exports;
}
var V = yh(), Xe = function() {
  return Xe = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Xe.apply(this, arguments);
};
function Pr(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function bh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Sh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ch = /* @__PURE__ */ bh(
  function(e) {
    return Sh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), be = "-ms-", mn = "-moz-", ge = "-webkit-", Ul = "comm", Bo = "rule", aa = "decl", wh = "@import", ql = "@keyframes", xh = "@layer", Wl = Math.abs, ca = String.fromCharCode, Zi = Object.assign;
function Eh(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function Gl(e) {
  return e.trim();
}
function Pt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, r) {
  return e.replace(t, r);
}
function so(e, t, r) {
  return e.indexOf(t, r);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function Nr(e, t, r) {
  return e.slice(t, r);
}
function _t(e) {
  return e.length;
}
function Xl(e) {
  return e.length;
}
function hn(e, t) {
  return t.push(e), e;
}
function _h(e, t) {
  return e.map(t).join("");
}
function Xa(e, t) {
  return e.filter(function(r) {
    return !Pt(r, t);
  });
}
var Ho = 1, kr = 1, Yl = 0, ut = 0, Pe = 0, Vr = "";
function zo(e, t, r, n, o, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ho, column: kr, length: s, return: "", siblings: a };
}
function Ht(e, t) {
  return Zi(zo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Er(e) {
  for (; e.root; )
    e = Ht(e.root, { children: [e] });
  hn(e, e.siblings);
}
function Oh() {
  return Pe;
}
function Th() {
  return Pe = ut > 0 ? He(Vr, --ut) : 0, kr--, Pe === 10 && (kr = 1, Ho--), Pe;
}
function mt() {
  return Pe = ut < Yl ? He(Vr, ut++) : 0, kr++, Pe === 10 && (kr = 1, Ho++), Pe;
}
function ar() {
  return He(Vr, ut);
}
function ao() {
  return ut;
}
function Fo(e, t) {
  return Nr(Vr, e, t);
}
function es(e) {
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
function Rh(e) {
  return Ho = kr = 1, Yl = _t(Vr = e), ut = 0, [];
}
function Ah(e) {
  return Vr = "", e;
}
function Ci(e) {
  return Gl(Fo(ut - 1, ts(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $h(e) {
  for (; (Pe = ar()) && Pe < 33; )
    mt();
  return es(e) > 2 || es(Pe) > 3 ? "" : " ";
}
function Ph(e, t) {
  for (; --t && mt() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return Fo(e, ao() + (t < 6 && ar() == 32 && mt() == 32));
}
function ts(e) {
  for (; mt(); )
    switch (Pe) {
      // ] ) " '
      case e:
        return ut;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ts(Pe);
        break;
      // (
      case 40:
        e === 41 && ts(e);
        break;
      // \
      case 92:
        mt();
        break;
    }
  return ut;
}
function Nh(e, t) {
  for (; mt() && e + Pe !== 57; )
    if (e + Pe === 84 && ar() === 47)
      break;
  return "/*" + Fo(t, ut - 1) + "*" + ca(e === 47 ? e : mt());
}
function kh(e) {
  for (; !es(ar()); )
    mt();
  return Fo(e, ut);
}
function Ih(e) {
  return Ah(co("", null, null, null, [""], e = Rh(e), 0, [0], e));
}
function co(e, t, r, n, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, v = 0, p = 0, g = 1, h = 1, S = 1, y = 0, w = "", x = o, b = i, O = n, E = w; h; )
    switch (p = y, y = mt()) {
      // (
      case 40:
        if (p != 108 && He(E, f - 1) == 58) {
          so(E += re(Ci(y), "&", "&\f"), "&\f", Wl(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Ci(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += $h(p);
        break;
      // \
      case 92:
        E += Ph(ao() - 1, 7);
        continue;
      // /
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            hn(jh(Nh(mt(), ao()), t, r, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = _t(E) * S;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = re(E, /\f/g, "")), v > 0 && _t(E) - f && hn(v > 32 ? Ka(E + ";", n, r, f - 1, c) : Ka(re(E, " ", "") + ";", n, r, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (hn(O = Ya(E, t, r, l, u, o, a, w, x = [], b = [], f, i), i), y === 123)
              if (u === 0)
                co(E, t, O, O, x, i, f, a, b);
              else
                switch (d === 99 && He(E, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    co(e, O, O, n && hn(Ya(e, O, O, 0, 0, o, a, w, o, x = [], f, b), b), o, b, f, a, n ? x : b);
                    break;
                  default:
                    co(E, O, O, O, [""], b, 0, a, b);
                }
        }
        l = u = v = 0, g = S = 1, w = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + _t(E), v = p;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && Th() == 125)
            continue;
        }
        switch (E += ca(y), y * g) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (_t(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            ar() === 45 && (E += Ci(mt())), d = ar(), u = f = _t(w = E += kh(ao())), y++;
            break;
          // -
          case 45:
            p === 45 && _t(E) == 2 && (g = 0);
        }
    }
  return i;
}
function Ya(e, t, r, n, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, v = o === 0 ? i : [""], p = Xl(v), g = 0, h = 0, S = 0; g < n; ++g)
    for (var y = 0, w = Nr(e, d + 1, d = Wl(h = s[g])), x = e; y < p; ++y)
      (x = Gl(h > 0 ? v[y] + " " + w : re(w, /&\f/g, v[y]))) && (c[S++] = x);
  return zo(e, t, r, o === 0 ? Bo : a, c, l, u, f);
}
function jh(e, t, r, n) {
  return zo(e, t, r, Ul, ca(Oh()), Nr(e, 2, -2), 0, n);
}
function Ka(e, t, r, n, o) {
  return zo(e, t, r, aa, Nr(e, 0, n), Nr(e, n + 1, -1), n, o);
}
function Kl(e, t, r) {
  switch (Eh(e, t)) {
    // color-adjust
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    // tab-size
    case 4789:
      return mn + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + mn + e + be + e + e;
    // writing-mode
    case 5936:
      switch (He(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ge + e + be + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ge + e + be + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ge + e + be + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ge + e + be + e + e;
    // order
    case 6165:
      return ge + e + be + "flex-" + e + e;
    // align-items
    case 5187:
      return ge + e + re(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + be + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ge + e + be + "flex-item-" + re(e, /flex-|-self/g, "") + (Pt(e, /flex-|baseline/) ? "" : be + "grid-row-" + re(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return ge + e + be + "flex-line-pack" + re(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return ge + e + be + re(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ge + e + be + re(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ge + "box-" + re(e, "-grow", "") + ge + e + be + re(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ge + re(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    // cursor
    case 6187:
      return re(re(re(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, ge + "$1$`$1");
    // justify-content
    case 4968:
      return re(re(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    // justify-self
    case 4200:
      if (!Pt(e, /flex-|baseline/)) return be + "grid-column-align" + Nr(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return be + re(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, Pt(n.props, /grid-\w+-end/);
      }) ? ~so(e + (r = r[t].value), "span", 0) ? e : be + re(e, "-start", "") + e + be + "grid-row-span:" + (~so(r, "span", 0) ? Pt(r, /\d+/) : +Pt(r, /\d+/) - +Pt(e, /\d+/)) + ";" : be + re(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return Pt(n.props, /grid-\w+-start/);
      }) ? e : be + re(re(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (_t(e) - 1 - t > 6)
        switch (He(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (He(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return re(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + mn + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~so(e, "stretch", 0) ? Kl(re(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return re(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, a, c, l) {
        return be + o + ":" + i + l + (s ? be + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (He(e, t + 6) === 121)
        return re(e, ":", ":" + ge) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (He(e, He(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return re(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ge + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + be + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return re(e, ":", ":" + be) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return re(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function To(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Mh(e, t, r, n) {
  switch (e.type) {
    case xh:
      if (e.children.length) break;
    case wh:
    case aa:
      return e.return = e.return || e.value;
    case Ul:
      return "";
    case ql:
      return e.return = e.value + "{" + To(e.children, n) + "}";
    case Bo:
      if (!_t(e.value = e.props.join(","))) return "";
  }
  return _t(r = To(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Lh(e) {
  var t = Xl(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function Dh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Bh(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case aa:
        e.return = Kl(e.value, e.length, r);
        return;
      case ql:
        return To([Ht(e, { value: re(e.value, "@", "@" + ge) })], n);
      case Bo:
        if (e.length)
          return _h(r = e.props, function(o) {
            switch (Pt(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Er(Ht(e, { props: [re(o, /:(read-\w+)/, ":" + mn + "$1")] })), Er(Ht(e, { props: [o] })), Zi(e, { props: Xa(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Er(Ht(e, { props: [re(o, /:(plac\w+)/, ":" + ge + "input-$1")] })), Er(Ht(e, { props: [re(o, /:(plac\w+)/, ":" + mn + "$1")] })), Er(Ht(e, { props: [re(o, /:(plac\w+)/, be + "input-$1")] })), Er(Ht(e, { props: [o] })), Zi(e, { props: Xa(r, n) });
                break;
            }
            return "";
          });
    }
}
var Hh = {
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
}, hr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Jl = "active", Ql = "data-styled-version", Vo = "6.1.18", la = `/*!sc*/
`, Ro = typeof window < "u" && typeof document < "u", zh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ja = /invalid hook call/i, Fn = /* @__PURE__ */ new Set(), Fh = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ja.test(s) ? (i = !1, Fn.delete(n)) : o.apply(void 0, Pr([s], a, !1));
      }, ae(), i && !Fn.has(n) && (console.warn(n), Fn.add(n));
    } catch (s) {
      Ja.test(s.message) && Fn.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Uo = Object.freeze([]), Ir = Object.freeze({});
function Vh(e, t, r) {
  return r === void 0 && (r = Ir), e.theme !== r.theme && e.theme || t || r.theme;
}
var rs = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Uh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qh = /(^-|-$)/g;
function Qa(e) {
  return e.replace(Uh, "-").replace(qh, "");
}
var Wh = /(a)(d)/gi, Vn = 52, Za = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ns(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Vn; t = t / Vn | 0) r = Za(t % Vn) + r;
  return (Za(t % Vn) + r).replace(Wh, "$1-$2");
}
var wi, Zl = 5381, nr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, eu = function(e) {
  return nr(Zl, e);
};
function Gh(e) {
  return ns(eu(e) >>> 0);
}
function tu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function xi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ru = typeof Symbol == "function" && Symbol.for, nu = ru ? Symbol.for("react.memo") : 60115, Xh = ru ? Symbol.for("react.forward_ref") : 60112, Yh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Kh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ou = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Jh = ((wi = {})[Xh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wi[nu] = ou, wi);
function ec(e) {
  return ("type" in (t = e) && t.type.$$typeof) === nu ? ou : "$$typeof" in e ? Jh[e.$$typeof] : Yh;
  var t;
}
var Qh = Object.defineProperty, Zh = Object.getOwnPropertyNames, tc = Object.getOwnPropertySymbols, ep = Object.getOwnPropertyDescriptor, tp = Object.getPrototypeOf, rc = Object.prototype;
function iu(e, t, r) {
  if (typeof t != "string") {
    if (rc) {
      var n = tp(t);
      n && n !== rc && iu(e, n, r);
    }
    var o = Zh(t);
    tc && (o = o.concat(tc(t)));
    for (var i = ec(e), s = ec(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Kh || r && r[c] || s && c in s || i && c in i)) {
        var l = ep(t, c);
        try {
          Qh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function jr(e) {
  return typeof e == "function";
}
function ua(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ir(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function nc(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Mr(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function os(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Mr(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = os(e[n], t[n]);
  else if (Mr(t)) for (var n in t) e[n] = os(e[n], t[n]);
  return e;
}
function fa(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var rp = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function np() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function Ur(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(np.apply(void 0, Pr([rp[e]], t, !1)).trim());
}
var op = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Ur(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, r.length); s < c; s++) this.tag.insertRule(a, r[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(la);
    return r;
  }, e;
}(), ip = 1 << 30, lo = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), uo = 1, Un = function(e) {
  if (lo.has(e)) return lo.get(e);
  for (; Ao.has(uo); ) uo++;
  var t = uo++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > ip)) throw Ur(16, "".concat(t));
  return lo.set(e, t), Ao.set(t, e), t;
}, sp = function(e, t) {
  uo = t + 1, lo.set(e, t), Ao.set(t, e);
}, ap = "style[".concat(hr, "][").concat(Ql, '="').concat(Vo, '"]'), cp = new RegExp("^".concat(hr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), lp = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(t, n);
}, up = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(la), o = [], i = 0, s = n.length; i < s; i++) {
    var a = n[i].trim();
    if (a) {
      var c = a.match(cp);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (sp(u, l), lp(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, oc = function(e) {
  for (var t = document.querySelectorAll(ap), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(hr) !== Jl && (up(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fp() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var su = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(hr, "]")));
    return c[c.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(hr, Jl), n.setAttribute(Ql, Vo);
  var s = fp();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, dp = function() {
  function e(t) {
    this.element = su(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw Ur(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), hp = function() {
  function e(t) {
    this.element = su(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), pp = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ic = Ro, gp = { isServer: !Ro, useCSSOMInjection: !zh }, au = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ir), r === void 0 && (r = {});
    var o = this;
    this.options = Xe(Xe({}, gp), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Ro && ic && (ic = !1, oc(this)), fa(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var d = function(S) {
            return Ao.get(S);
          }(f);
          if (d === void 0) return "continue";
          var v = i.names.get(d), p = s.getGroup(f);
          if (v === void 0 || !v.size || p.length === 0) return "continue";
          var g = "".concat(hr, ".g").concat(f, '[id="').concat(d, '"]'), h = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (h += "".concat(S, ","));
          }), c += "".concat(p).concat(g, '{content:"').concat(h, '"}').concat(la);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Un(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Ro && oc(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Xe(Xe({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new pp(o) : n ? new dp(o) : new hp(o);
    }(this.options), new op(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Un(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Un(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Un(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), mp = /&/g, vp = /^\s*\/\/.*$/gm;
function cu(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = cu(r.children, t)), r;
  });
}
function yp(e) {
  var t, r, n, o = Ir, i = o.options, s = i === void 0 ? Ir : i, a = o.plugins, c = a === void 0 ? Uo : a, l = function(d, v, p) {
    return p.startsWith(r) && p.endsWith(r) && p.replaceAll(r, "").length > 0 ? ".".concat(t) : d;
  }, u = c.slice();
  u.push(function(d) {
    d.type === Bo && d.value.includes("&") && (d.props[0] = d.props[0].replace(mp, r).replace(n, l));
  }), s.prefix && u.push(Bh), u.push(Mh);
  var f = function(d, v, p, g) {
    v === void 0 && (v = ""), p === void 0 && (p = ""), g === void 0 && (g = "&"), t = g, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var h = d.replace(vp, ""), S = Ih(p || v ? "".concat(p, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (S = cu(S, s.namespace));
    var y = [];
    return To(S, Lh(u.concat(Dh(function(w) {
      return y.push(w);
    })))), y;
  };
  return f.hash = c.length ? c.reduce(function(d, v) {
    return v.name || Ur(15), nr(d, v.name);
  }, Zl).toString() : "", f;
}
var bp = new au(), is = yp(), lu = U.createContext({ shouldForwardProp: void 0, styleSheet: bp, stylis: is });
lu.Consumer;
U.createContext(void 0);
function sc() {
  return lt(lu);
}
var ac = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = is);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, fa(this, function() {
      throw Ur(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = is), this.name + t.hash;
  }, e;
}(), Sp = function(e) {
  return e >= "A" && e <= "Z";
};
function cc(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Sp(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var uu = function(e) {
  return e == null || e === !1 || e === "";
}, fu = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !uu(i) && (Array.isArray(i) && i.isCss || jr(i) ? n.push("".concat(cc(o), ":"), i, ";") : Mr(i) ? n.push.apply(n, Pr(Pr(["".concat(o, " {")], fu(i), !1), ["}"], !1)) : n.push("".concat(cc(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Hh || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function cr(e, t, r, n) {
  if (uu(e)) return [];
  if (ua(e)) return [".".concat(e.styledComponentId)];
  if (jr(e)) {
    if (!jr(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof ac || Mr(o) || o === null || console.error("".concat(tu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), cr(o, t, r, n);
  }
  var i;
  return e instanceof ac ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Mr(e) ? fu(e) : Array.isArray(e) ? Array.prototype.concat.apply(Uo, e.map(function(s) {
    return cr(s, t, r, n);
  })) : [e.toString()];
}
function Cp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (jr(r) && !ua(r)) return !1;
  }
  return !0;
}
var wp = eu(Vo), xp = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Cp(t), this.componentId = r, this.baseHash = nr(wp, r), this.baseStyle = n, au.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = ir(o, this.staticRulesId);
    else {
      var i = nc(cr(this.rules, t, r, n)), s = ns(nr(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var a = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, a);
      }
      o = ir(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = nr(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = nr(c, f));
        else if (f) {
          var d = nc(cr(f, t, r, n));
          c = nr(c, d + u), l += d;
        }
      }
      if (l) {
        var v = ns(c >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(l, ".".concat(v), void 0, this.componentId)), o = ir(o, v);
      }
    }
    return o;
  }, e;
}(), du = U.createContext(void 0);
du.Consumer;
var Ei = {}, lc = /* @__PURE__ */ new Set();
function Ep(e, t, r) {
  var n = ua(e), o = e, i = !xi(e), s = t.attrs, a = s === void 0 ? Uo : s, c = t.componentId, l = c === void 0 ? function(x, b) {
    var O = typeof x != "string" ? "sc" : Qa(x);
    Ei[O] = (Ei[O] || 0) + 1;
    var E = "".concat(O, "-").concat(Gh(Vo + O + Ei[O]));
    return b ? "".concat(b, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, f = u === void 0 ? function(x) {
    return xi(x) ? "styled.".concat(x) : "Styled(".concat(tu(x), ")");
  }(e) : u, d = t.displayName && t.componentId ? "".concat(Qa(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = n && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, p = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var h = t.shouldForwardProp;
      p = function(x, b) {
        return g(x, b) && h(x, b);
      };
    } else p = g;
  }
  var S = new xp(r, d, n ? o.componentStyle : void 0);
  function y(x, b) {
    return function(O, E, N) {
      var M = O.attrs, q = O.componentStyle, K = O.defaultProps, X = O.foldedComponentIds, $ = O.styledComponentId, B = O.target, H = U.useContext(du), A = sc(), _ = O.shouldForwardProp || A.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Va($);
      var T = Vh(E, H, K) || Ir, P = function(Q, ee, oe) {
        for (var Se, me = Xe(Xe({}, ee), { className: void 0, theme: oe }), Ie = 0; Ie < Q.length; Ie += 1) {
          var Re = jr(Se = Q[Ie]) ? Se(me) : Se;
          for (var ce in Re) me[ce] = ce === "className" ? ir(me[ce], Re[ce]) : ce === "style" ? Xe(Xe({}, me[ce]), Re[ce]) : Re[ce];
        }
        return ee.className && (me.className = ir(me.className, ee.className)), me;
      }(M, E, T), L = P.as || B, D = {};
      for (var k in P) P[k] === void 0 || k[0] === "$" || k === "as" || k === "theme" && P.theme === T || (k === "forwardedAs" ? D.as = P.forwardedAs : _ && !_(k, L) || (D[k] = P[k], _ || process.env.NODE_ENV !== "development" || Ch(k) || lc.has(k) || !rs.has(L) || (lc.add(k), console.warn('styled-components: it looks like an unknown prop "'.concat(k, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var j = function(Q, ee) {
        var oe = sc(), Se = Q.generateAndInjectStyles(ee, oe.styleSheet, oe.stylis);
        return process.env.NODE_ENV !== "production" && Va(Se), Se;
      }(q, P);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(j);
      var F = ir(X, $);
      return j && (F += " " + j), P.className && (F += " " + P.className), D[xi(L) && !rs.has(L) ? "class" : "className"] = F, N && (D.ref = N), uh(L, D);
    }(w, x, b);
  }
  y.displayName = f;
  var w = U.forwardRef(y);
  return w.attrs = v, w.componentStyle = S, w.displayName = f, w.shouldForwardProp = p, w.foldedComponentIds = n ? ir(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = d, w.target = n ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? function(b) {
      for (var O = [], E = 1; E < arguments.length; E++) O[E - 1] = arguments[E];
      for (var N = 0, M = O; N < M.length; N++) os(b, M[N], !0);
      return b;
    }({}, o.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (Fh(f, d), w.warnTooManyClasses = /* @__PURE__ */ function(x, b) {
    var O = {}, E = !1;
    return function(N) {
      if (!E && (O[N] = !0, Object.keys(O).length >= 200)) {
        var M = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(M, `.
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
  }(f, d)), fa(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && iu(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function uc(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var fc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function _p(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (jr(e) || Mr(e)) return fc(cr(uc(Uo, Pr([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? cr(n) : fc(cr(uc(n, t)));
}
function ss(e, t, r) {
  if (r === void 0 && (r = Ir), !t) throw Ur(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, r, _p.apply(void 0, Pr([o], i, !1)));
  };
  return n.attrs = function(o) {
    return ss(e, t, Xe(Xe({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return ss(e, t, Xe(Xe({}, r), o));
  }, n;
}
var hu = function(e) {
  return ss(Ep, e);
}, At = hu;
rs.forEach(function(e) {
  At[e] = hu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qn = "__sc-".concat(hr, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[qn] || (window[qn] = 0), window[qn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qn] += 1);
const Op = At.div`
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
`, Tp = At.div`
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
`, Rp = At.canvas`
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, dc = At.span`
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
`, pu = /* @__PURE__ */ Do({});
var _i = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hc;
function Ap() {
  return hc || (hc = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var i = "", s = 0; s < arguments.length; s++) {
          var a = arguments[s];
          a && (i = o(i, n(a)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return r.apply(null, i);
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
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(_i)), _i.exports;
}
var $p = Ap();
const ue = /* @__PURE__ */ gh($p), Pp = {
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
}, Le = Math.round;
function Oi(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const pc = (e, t, r) => r === 0 ? e : e / 100;
function sn(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
let Wn = class gu {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    Ae(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    Ae(this, "r", 0);
    /**
     * Green, G in RGB
     */
    Ae(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    Ae(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    Ae(this, "a", 1);
    // HSV privates
    Ae(this, "_h");
    Ae(this, "_s");
    Ae(this, "_l");
    Ae(this, "_v");
    // intermediate variables to calculate HSL/HSV
    Ae(this, "_max");
    Ae(this, "_min");
    Ae(this, "_brightness");
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(n))
        this.fromHexString(n);
      else if (o("rgb"))
        this.fromRgbString(n);
      else if (o("hsl"))
        this.fromHslString(n);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(n);
      else {
        const i = Pp[n.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof gu)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = sn(t.r), this.g = sn(t.g), this.b = sn(t.b), this.a = typeof t.a == "number" ? sn(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
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
    const r = this.toHsv();
    return r.h = t, this._c(r);
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
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Le(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, i = (a) => (n[a] - this[a]) * o + this[a], s = {
      r: Le(i("r")),
      g: Le(i("g")),
      b: Le(i("b")),
      a: Le(i("a") * 100) / 100
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (i) => Le((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = Le(this.a * 255).toString(16);
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
    const t = this.getHue(), r = Le(this.getSaturation() * 100), n = Le(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = sn(r, n), o;
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
    const r = t.replace("#", "");
    function n(o, i) {
      return parseInt(r[o] + r[i || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const d = Le(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = n - l / 2;
    this.r = Le((i + f) * 255), this.g = Le((s + f) * 255), this.b = Le((a + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = Le(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = Le(n * (1 - r) * 255), u = Le(n * (1 - r * c) * 255), f = Le(n * (1 - r * (1 - c)) * 255);
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
    const r = Oi(t, pc);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Oi(t, pc);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Oi(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Le(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
};
const Gn = 2, gc = 0.16, Np = 0.05, kp = 0.05, Ip = 0.15, mu = 5, vu = 4, jp = [{
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
function mc(e, t, r) {
  let n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Gn * t : Math.round(e.h) + Gn * t : n = r ? Math.round(e.h) + Gn * t : Math.round(e.h) - Gn * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function vc(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let n;
  return r ? n = e.s - gc * t : t === vu ? n = e.s + gc : n = e.s + Np * t, n > 1 && (n = 1), r && t === mu && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function yc(e, t, r) {
  let n;
  return r ? n = e.v + kp * t : n = e.v - Ip * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function Mp(e, t = {}) {
  const r = [], n = new Wn(e), o = n.toHsv();
  for (let i = mu; i > 0; i -= 1) {
    const s = new Wn({
      h: mc(o, i, !0),
      s: vc(o, i, !0),
      v: yc(o, i, !0)
    });
    r.push(s);
  }
  r.push(n);
  for (let i = 1; i <= vu; i += 1) {
    const s = new Wn({
      h: mc(o, i),
      s: vc(o, i),
      v: yc(o, i)
    });
    r.push(s);
  }
  return t.theme === "dark" ? jp.map(({
    index: i,
    amount: s
  }) => new Wn(t.backgroundColor || "#141414").mix(r[i], s).toHexString()) : r.map((i) => i.toHexString());
}
const as = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
as.primary = as[5];
function Lp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Dp(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let r = t;
  for (; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
const bc = "data-rc-order", Sc = "data-rc-priority", Bp = "rc-util-key", cs = /* @__PURE__ */ new Map();
function yu({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Bp;
}
function da(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Hp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ha(e) {
  return Array.from((cs.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function bu(e, t = {}) {
  if (!Lp())
    return null;
  const {
    csp: r,
    prepend: n,
    priority: o = 0
  } = t, i = Hp(n), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(bc, i), s && o && a.setAttribute(Sc, `${o}`), r != null && r.nonce && (a.nonce = r == null ? void 0 : r.nonce), a.innerHTML = e;
  const c = da(t), {
    firstChild: l
  } = c;
  if (n) {
    if (s) {
      const u = (t.styles || ha(c)).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(bc)))
          return !1;
        const d = Number(f.getAttribute(Sc) || 0);
        return o >= d;
      });
      if (u.length)
        return c.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function zp(e, t = {}) {
  let {
    styles: r
  } = t;
  return r || (r = ha(da(t))), r.find((n) => n.getAttribute(yu(t)) === e);
}
function Fp(e, t) {
  const r = cs.get(e);
  if (!r || !Dp(document, r)) {
    const n = bu("", t), {
      parentNode: o
    } = n;
    cs.set(e, o), e.removeChild(n);
  }
}
function Vp(e, t, r = {}) {
  var c, l, u;
  const n = da(r), o = ha(n), i = {
    ...r,
    styles: o
  };
  Fp(n, i);
  const s = zp(t, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = bu(e, i);
  return a.setAttribute(yu(i), t), a;
}
function Su(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function Up(e) {
  return Su(e) instanceof ShadowRoot;
}
function qp(e) {
  return Up(e) ? Su(e) : null;
}
let ls = {};
const pa = [], Wp = (e) => {
  pa.push(e);
};
function Gp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const r = pa.reduce((n, o) => o(n ?? "", "warning"), t);
    r && console.error(`Warning: ${r}`);
  }
}
function Xp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const r = pa.reduce((n, o) => o(n ?? "", "note"), t);
    r && console.warn(`Note: ${r}`);
  }
}
function Yp() {
  ls = {};
}
function Cu(e, t, r) {
  !t && !ls[r] && (e(!1, r), ls[r] = !0);
}
function qo(e, t) {
  Cu(Gp, e, t);
}
function Kp(e, t) {
  Cu(Xp, e, t);
}
qo.preMessage = Wp;
qo.resetWarned = Yp;
qo.noteOnce = Kp;
function Jp(e) {
  return e.replace(/-(.)/g, (t, r) => r.toUpperCase());
}
function Qp(e, t) {
  qo(e, `[@ant-design/icons] ${t}`);
}
function Cc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function wc(e = {}) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Jp(r)] = n;
    }
    return t;
  }, {});
}
function us(e, t, r) {
  return r ? /* @__PURE__ */ U.createElement(e.tag, {
    key: t,
    ...wc(e.attrs),
    ...r
  }, (e.children || []).map((n, o) => us(n, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ U.createElement(e.tag, {
    key: t,
    ...wc(e.attrs)
  }, (e.children || []).map((n, o) => us(n, `${t}-${e.tag}-${o}`)));
}
function wu(e) {
  return Mp(e)[0];
}
function xu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Zp = `
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
`, eg = (e) => {
  const {
    csp: t,
    prefixCls: r,
    layer: n
  } = lt(pu);
  let o = Zp;
  r && (o = o.replace(/anticon/g, r)), n && (o = `@layer ${n} {
${o}
}`), Oe(() => {
    const i = e.current, s = qp(i);
    Vp(o, "@ant-design-icons", {
      prepend: !n,
      csp: t,
      attachTo: s
    });
  }, []);
}, vn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function tg({
  primaryColor: e,
  secondaryColor: t
}) {
  vn.primaryColor = e, vn.secondaryColor = t || wu(e), vn.calculated = !!t;
}
function rg() {
  return {
    ...vn
  };
}
const qr = (e) => {
  const {
    icon: t,
    className: r,
    onClick: n,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = C.useRef();
  let l = vn;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || wu(i)
  }), eg(c), Qp(Cc(t), `icon should be icon definiton, but got ${t}`), !Cc(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), us(u.icon, `svg-${u.name}`, {
    className: r,
    onClick: n,
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
qr.displayName = "IconReact";
qr.getTwoToneColors = rg;
qr.setTwoToneColors = tg;
function Eu(e) {
  const [t, r] = xu(e);
  return qr.setTwoToneColors({
    primaryColor: t,
    secondaryColor: r
  });
}
function ng() {
  const e = qr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fs.apply(this, arguments);
}
Eu(as.primary);
const Wo = /* @__PURE__ */ C.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: r,
    // affect inner <svg>...</svg>
    icon: n,
    spin: o,
    rotate: i,
    tabIndex: s,
    onClick: a,
    // other
    twoToneColor: c,
    ...l
  } = e, {
    prefixCls: u = "anticon",
    rootClassName: f
  } = C.useContext(pu), d = ue(f, u, {
    [`${u}-${n.name}`]: !!n.name,
    [`${u}-spin`]: !!o || n.name === "loading"
  }, r);
  let v = s;
  v === void 0 && a && (v = -1);
  const p = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, h] = xu(c);
  return /* @__PURE__ */ C.createElement("span", fs({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: v,
    onClick: a,
    className: d
  }), /* @__PURE__ */ C.createElement(qr, {
    icon: n,
    primaryColor: g,
    secondaryColor: h,
    style: p
  }));
});
Wo.displayName = "AntdIcon";
Wo.getTwoToneColor = ng;
Wo.setTwoToneColor = Eu;
var og = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, ig = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, sg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, ag = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, cg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, lg = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, ug = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ds.apply(this, arguments);
}
const fg = (e, t) => /* @__PURE__ */ C.createElement(Wo, ds({}, e, {
  ref: t,
  icon: ug
})), _u = /* @__PURE__ */ C.forwardRef(fg);
process.env.NODE_ENV !== "production" && (_u.displayName = "ReloadOutlined");
var Xn = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function dg() {
  if (xc) return he;
  xc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case c:
                case d:
                case f:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return he.ContextConsumer = s, he.ContextProvider = i, he.Element = e, he.ForwardRef = c, he.Fragment = r, he.Lazy = d, he.Memo = f, he.Portal = t, he.Profiler = o, he.StrictMode = n, he.Suspense = l, he.SuspenseList = u, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(h) {
    return g(h) === s;
  }, he.isContextProvider = function(h) {
    return g(h) === i;
  }, he.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, he.isForwardRef = function(h) {
    return g(h) === c;
  }, he.isFragment = function(h) {
    return g(h) === r;
  }, he.isLazy = function(h) {
    return g(h) === d;
  }, he.isMemo = function(h) {
    return g(h) === f;
  }, he.isPortal = function(h) {
    return g(h) === t;
  }, he.isProfiler = function(h) {
    return g(h) === o;
  }, he.isStrictMode = function(h) {
    return g(h) === n;
  }, he.isSuspense = function(h) {
    return g(h) === l;
  }, he.isSuspenseList = function(h) {
    return g(h) === u;
  }, he.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === l || h === u || h === v || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === p || h.getModuleId !== void 0);
  }, he.typeOf = g, he;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function hg() {
  return Ec || (Ec = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p = !1, g = !1, h = !1, S = !1, y = !1, w;
    w = Symbol.for("react.module.reference");
    function x(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === o || y || Y === n || Y === l || Y === u || S || Y === v || p || g || h || typeof Y == "object" && Y !== null && (Y.$$typeof === d || Y.$$typeof === f || Y.$$typeof === i || Y.$$typeof === s || Y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === w || Y.getModuleId !== void 0));
    }
    function b(Y) {
      if (typeof Y == "object" && Y !== null) {
        var Ue = Y.$$typeof;
        switch (Ue) {
          case e:
            var ve = Y.type;
            switch (ve) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return ve;
              default:
                var nt = ve && ve.$$typeof;
                switch (nt) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case i:
                    return nt;
                  default:
                    return Ue;
                }
            }
          case t:
            return Ue;
        }
      }
    }
    var O = s, E = i, N = e, M = c, q = r, K = d, X = f, $ = t, B = o, H = n, A = l, _ = u, T = !1, P = !1;
    function L(Y) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(Y) {
      return P || (P = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(Y) {
      return b(Y) === s;
    }
    function j(Y) {
      return b(Y) === i;
    }
    function F(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function Q(Y) {
      return b(Y) === c;
    }
    function ee(Y) {
      return b(Y) === r;
    }
    function oe(Y) {
      return b(Y) === d;
    }
    function Se(Y) {
      return b(Y) === f;
    }
    function me(Y) {
      return b(Y) === t;
    }
    function Ie(Y) {
      return b(Y) === o;
    }
    function Re(Y) {
      return b(Y) === n;
    }
    function ce(Y) {
      return b(Y) === l;
    }
    function Qe(Y) {
      return b(Y) === u;
    }
    pe.ContextConsumer = O, pe.ContextProvider = E, pe.Element = N, pe.ForwardRef = M, pe.Fragment = q, pe.Lazy = K, pe.Memo = X, pe.Portal = $, pe.Profiler = B, pe.StrictMode = H, pe.Suspense = A, pe.SuspenseList = _, pe.isAsyncMode = L, pe.isConcurrentMode = D, pe.isContextConsumer = k, pe.isContextProvider = j, pe.isElement = F, pe.isForwardRef = Q, pe.isFragment = ee, pe.isLazy = oe, pe.isMemo = Se, pe.isPortal = me, pe.isProfiler = Ie, pe.isStrictMode = Re, pe.isSuspense = ce, pe.isSuspenseList = Qe, pe.isValidElementType = x, pe.typeOf = b;
  }()), pe;
}
var _c;
function pg() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? Xn.exports = dg() : Xn.exports = hg()), Xn.exports;
}
var Ti = pg();
const Ot = /* @__PURE__ */ Object.create(null);
Ot.open = "0";
Ot.close = "1";
Ot.ping = "2";
Ot.pong = "3";
Ot.message = "4";
Ot.upgrade = "5";
Ot.noop = "6";
const fo = /* @__PURE__ */ Object.create(null);
Object.keys(Ot).forEach((e) => {
  fo[Ot[e]] = e;
});
const hs = { type: "error", data: "parser error" }, Ou = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Tu = typeof ArrayBuffer == "function", Ru = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ga = ({ type: e, data: t }, r, n) => Ou && t instanceof Blob ? r ? n(t) : Oc(t, n) : Tu && (t instanceof ArrayBuffer || Ru(t)) ? r ? n(t) : Oc(new Blob([t]), n) : n(Ot[e] + (t || "")), Oc = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function Tc(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ri;
function gg(e, t) {
  if (Ou && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Tc).then(t);
  if (Tu && (e.data instanceof ArrayBuffer || Ru(e.data)))
    return t(Tc(e.data));
  ga(e, !1, (r) => {
    Ri || (Ri = new TextEncoder()), t(Ri.encode(r));
  });
}
const Rc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Rc.length; e++)
  pn[Rc.charCodeAt(e)] = e;
const mg = (e) => {
  let t = e.length * 0.75, r = e.length, n, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), u = new Uint8Array(l);
  for (n = 0; n < r; n += 4)
    i = pn[e.charCodeAt(n)], s = pn[e.charCodeAt(n + 1)], a = pn[e.charCodeAt(n + 2)], c = pn[e.charCodeAt(n + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, vg = typeof ArrayBuffer == "function", ma = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Au(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: yg(e.substring(1), t)
  } : fo[r] ? e.length > 1 ? {
    type: fo[r],
    data: e.substring(1)
  } : {
    type: fo[r]
  } : hs;
}, yg = (e, t) => {
  if (vg) {
    const r = mg(e);
    return Au(r, t);
  } else
    return { base64: !0, data: e };
}, Au = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, $u = "", bg = (e, t) => {
  const r = e.length, n = new Array(r);
  let o = 0;
  e.forEach((i, s) => {
    ga(i, !1, (a) => {
      n[s] = a, ++o === r && t(n.join($u));
    });
  });
}, Sg = (e, t) => {
  const r = e.split($u), n = [];
  for (let o = 0; o < r.length; o++) {
    const i = ma(r[o], t);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function Cg() {
  return new TransformStream({
    transform(e, t) {
      gg(e, (r) => {
        const n = r.length;
        let o;
        if (n < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, n);
        else if (n < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(r);
      });
    }
  });
}
let Ai;
function Yn(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function Kn(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let o = 0; o < t; o++)
    r[o] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function wg(e, t) {
  Ai || (Ai = new TextDecoder());
  const r = [];
  let n = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (r.push(s); ; ) {
        if (n === 0) {
          if (Yn(r) < 1)
            break;
          const c = Kn(r, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Yn(r) < 2)
            break;
          const c = Kn(r, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Yn(r) < 8)
            break;
          const c = Kn(r, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(hs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), n = 3;
        } else {
          if (Yn(r) < o)
            break;
          const c = Kn(r, o);
          a.enqueue(ma(i ? c : Ai.decode(c), t)), n = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(hs);
          break;
        }
      }
    }
  });
}
const Pu = 4;
function ke(e) {
  if (e) return xg(e);
}
function xg(e) {
  for (var t in ke.prototype)
    e[t] = ke.prototype[t];
  return e;
}
ke.prototype.on = ke.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
ke.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
ke.prototype.off = ke.prototype.removeListener = ke.prototype.removeAllListeners = ke.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, o = 0; o < r.length; o++)
    if (n = r[o], n === t || n.fn === t) {
      r.splice(o, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
ke.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, o = r.length; n < o; ++n)
      r[n].apply(this, t);
  }
  return this;
};
ke.prototype.emitReserved = ke.prototype.emit;
ke.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ke.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Go = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), ct = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Eg = "arraybuffer";
function Nu(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const _g = ct.setTimeout, Og = ct.clearTimeout;
function Xo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = _g.bind(ct), e.clearTimeoutFn = Og.bind(ct)) : (e.setTimeoutFn = ct.setTimeout.bind(ct), e.clearTimeoutFn = ct.clearTimeout.bind(ct));
}
const Tg = 1.33;
function Rg(e) {
  return typeof e == "string" ? Ag(e) : Math.ceil((e.byteLength || e.size) * Tg);
}
function Ag(e) {
  let t = 0, r = 0;
  for (let n = 0, o = e.length; n < o; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function ku() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function $g(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function Pg(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, o = r.length; n < o; n++) {
    let i = r[n].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class Ng extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class va extends ke {
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
  onError(t, r, n) {
    return super.emitReserved("error", new Ng(t, r, n)), this;
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
    const r = ma(t, this.socket.binaryType);
    this.onPacket(r);
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
  createUri(t, r = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const r = $g(t);
    return r.length ? "?" + r : "";
  }
}
class kg extends va {
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
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
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
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    Sg(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, bg(t, (r) => {
      this.doWrite(r, () => {
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
    const t = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = ku()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let Iu = !1;
try {
  Iu = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Ig = Iu;
function jg() {
}
class Mg extends kg {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || n !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (o, i) => {
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
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
let Rr = class ho extends ke {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, n) {
    super(), this.createRequest = t, Xo(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = Nu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var o;
        n.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ho.requestsCount++, ho.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = jg, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ho.requests[this._index], this._xhr = null;
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
Rr.requestsCount = 0;
Rr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ac);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ct ? "pagehide" : "unload";
    addEventListener(e, Ac, !1);
  }
}
function Ac() {
  for (let e in Rr.requests)
    Rr.requests.hasOwnProperty(e) && Rr.requests[e].abort();
}
const Lg = function() {
  const e = ju({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Dg extends Mg {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = Lg && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Rr(ju, this.uri(), t);
  }
}
function ju(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Ig))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ct[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Mu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Bg extends va {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = Mu ? {} : Nu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, n);
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
    for (let r = 0; r < t.length; r++) {
      const n = t[r], o = r === t.length - 1;
      ga(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        o && Go(() => {
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
    const t = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = ku()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const $i = ct.WebSocket || ct.MozWebSocket;
class Hg extends Bg {
  createSocket(t, r, n) {
    return Mu ? new $i(t, r, n) : r ? new $i(t, r) : new $i(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class zg extends va {
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
        const r = wg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), o = Cg();
        o.readable.pipeTo(t.writable), this._writer = o.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: c }) => {
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
    for (let r = 0; r < t.length; r++) {
      const n = t[r], o = r === t.length - 1;
      this._writer.write(n).then(() => {
        o && Go(() => {
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
const Fg = {
  websocket: Hg,
  webtransport: zg,
  polling: Dg
}, Vg = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ug = [
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
function ps(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let o = Vg.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Ug[s]] = o[s] || "";
  return r != -1 && n != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = qg(i, i.path), i.queryKey = Wg(i, i.query), i;
}
function qg(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Wg(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, o, i) {
    o && (r[o] = i);
  }), r;
}
const gs = typeof addEventListener == "function" && typeof removeEventListener == "function", po = [];
gs && addEventListener("offline", () => {
  po.forEach((e) => e());
}, !1);
class Ut extends ke {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = Eg, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = ps(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = ps(r.host).host);
    Xo(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const o = n.prototype.name;
      this.transports.push(o), this._transportsByName[o] = n;
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Pg(this.opts.query)), gs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, po.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Pu, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](n);
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
    const t = this.opts.rememberUpgrade && Ut.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(t);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Ut.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const r = new Error("server error");
          r.code = t.data, this._onError(r);
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
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const o = this.writeBuffer[n].data;
      if (o && (r += Rg(o)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
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
    return t && (this._pingTimeoutTime = 0, Go(() => {
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
  write(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
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
  _sendPacket(t, r, n, o) {
    if (typeof r == "function" && (o = r, r = void 0), typeof n == "function" && (o = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (Ut.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), gs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = po.indexOf(this._offlineEventListener);
        n !== -1 && po.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ut.protocol = Pu;
class Gg extends Ut {
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
    let r = this.createTransport(t), n = !1;
    Ut.priorWebsocketSuccess = !1;
    const o = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Ut.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = r.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const s = (f) => {
      const d = new Error("probe error: " + f);
      d.transport = r.name, i(), this.emitReserved("upgradeError", d);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(f) {
      r && f.name !== r.name && i();
    }
    const u = () => {
      r.removeListener("open", o), r.removeListener("error", s), r.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    r.once("open", o), r.once("error", s), r.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
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
    const r = [];
    for (let n = 0; n < t.length; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
}
let Xg = class extends Gg {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((o) => Fg[o]).filter((o) => !!o)), super(t, n);
  }
};
function Yg(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = ps(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + t, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Kg = typeof ArrayBuffer == "function", Jg = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Lu = Object.prototype.toString, Qg = typeof Blob == "function" || typeof Blob < "u" && Lu.call(Blob) === "[object BlobConstructor]", Zg = typeof File == "function" || typeof File < "u" && Lu.call(File) === "[object FileConstructor]";
function ya(e) {
  return Kg && (e instanceof ArrayBuffer || Jg(e)) || Qg && e instanceof Blob || Zg && e instanceof File;
}
function go(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (go(e[r]))
        return !0;
    return !1;
  }
  if (ya(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return go(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && go(e[r]))
      return !0;
  return !1;
}
function em(e) {
  const t = [], r = e.data, n = e;
  return n.data = ms(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function ms(e, t) {
  if (!e)
    return e;
  if (ya(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = ms(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = ms(e[n], t));
    return r;
  }
  return e;
}
function tm(e, t) {
  return e.data = vs(e.data, t), delete e.attachments, e;
}
function vs(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = vs(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = vs(e[r], t));
  return e;
}
const rm = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], nm = 5;
var se;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(se || (se = {}));
class om {
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
    return (t.type === se.EVENT || t.type === se.ACK) && go(t) ? this.encodeAsBinary({
      type: t.type === se.EVENT ? se.BINARY_EVENT : se.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === se.BINARY_EVENT || t.type === se.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = em(t), n = this.encodeAsString(r.packet), o = r.buffers;
    return o.unshift(n), o;
  }
}
function $c(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ba extends ke {
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
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === se.BINARY_EVENT;
      n || r.type === se.BINARY_ACK ? (r.type = n ? se.EVENT : se.ACK, this.reconstructor = new im(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (ya(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
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
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (se[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === se.BINARY_EVENT || n.type === se.BINARY_ACK) {
      const i = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const s = t.substring(i, r);
      if (s != Number(s) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(s);
    }
    if (t.charAt(r + 1) === "/") {
      const i = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(i, r);
    } else
      n.nsp = "/";
    const o = t.charAt(r + 1);
    if (o !== "" && Number(o) == o) {
      const i = r + 1;
      for (; ++r; ) {
        const s = t.charAt(r);
        if (s == null || Number(s) != s) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(i, r + 1));
    }
    if (t.charAt(++r)) {
      const i = this.tryParse(t.substr(r));
      if (ba.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case se.CONNECT:
        return $c(r);
      case se.DISCONNECT:
        return r === void 0;
      case se.CONNECT_ERROR:
        return typeof r == "string" || $c(r);
      case se.EVENT:
      case se.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && rm.indexOf(r[0]) === -1);
      case se.ACK:
      case se.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class im {
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
      const r = tm(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
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
const sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ba,
  Encoder: om,
  get PacketType() {
    return se;
  },
  protocol: nm
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const am = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Du extends ke {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
  emit(t, ...r) {
    var n, o, i;
    if (am.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const s = {
      type: se.EVENT,
      data: r
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const u = this.ids++, f = r.pop();
      this._registerAckCallback(u, f), s.id = u;
    }
    const a = (o = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const o = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = r;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), r.apply(this, a);
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
  emitWithAck(t, ...r) {
    return new Promise((n, o) => {
      const i = (s, a) => s ? o(s) : n(a);
      i.withError = !0, r.push(i), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...i) => n !== this._queue[0] ? void 0 : (o !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(o)) : (this._queue.shift(), r && r(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
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
      type: se.CONNECT,
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
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t], n.withError && n.call(this, new Error("socket has been disconnected"));
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
        case se.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case se.EVENT:
        case se.BINARY_EVENT:
          this.onevent(t);
          break;
        case se.ACK:
        case se.BINARY_ACK:
          this.onack(t);
          break;
        case se.DISCONNECT:
          this.ondisconnect();
          break;
        case se.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
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
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...o) {
      n || (n = !0, r.packet({
        type: se.ACK,
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
    const r = this.acks[t.id];
    typeof r == "function" && (delete this.acks[t.id], r.withError && t.data.unshift(null), r.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: se.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function Wr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Wr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
Wr.prototype.reset = function() {
  this.attempts = 0;
};
Wr.prototype.setMin = function(e) {
  this.ms = e;
};
Wr.prototype.setMax = function(e) {
  this.max = e;
};
Wr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class ys extends ke {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Xo(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Wr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const o = r.parser || sm;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
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
    this.engine = new Xg(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = ht(r, "open", function() {
      n.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = ht(r, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), r.close();
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
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    Go(() => {
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
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Du(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
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
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
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
  onclose(t, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
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
const an = {};
function mo(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Yg(e, t.path || "/socket.io"), n = r.source, o = r.id, i = r.path, s = an[o] && i in an[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new ys(n, t) : (an[o] || (an[o] = new ys(n, t)), c = an[o]), r.query && !t.query && (t.query = r.queryKey), c.socket(r.path, t);
}
Object.assign(mo, {
  Manager: ys,
  Socket: Du,
  io: mo,
  connect: mo
});
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ye.apply(null, arguments);
}
function fe(e) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fe(e);
}
var cm = Symbol.for("react.element"), lm = Symbol.for("react.transitional.element"), um = Symbol.for("react.fragment");
function fm(e) {
  return (
    // Base object type
    e && fe(e) === "object" && // React Element type
    (e.$$typeof === cm || e.$$typeof === lm) && // React Fragment type
    e.type === um
  );
}
var bs = {}, Sa = [], dm = function(t) {
  Sa.push(t);
};
function Ca(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Sa.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function hm(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Sa.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Bu() {
  bs = {};
}
function Hu(e, t, r) {
  !t && !bs[r] && (e(!1, r), bs[r] = !0);
}
function Gt(e, t) {
  Hu(Ca, e, t);
}
function pm(e, t) {
  Hu(hm, e, t);
}
Gt.preMessage = dm;
Gt.resetWarned = Bu;
Gt.noteOnce = pm;
function gm(e, t) {
  if (fe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zu(e) {
  var t = gm(e, "string");
  return fe(t) == "symbol" ? t : t + "";
}
function W(e, t, r) {
  return (t = zu(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Pc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pc(Object(r), !0).forEach(function(n) {
      W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function mm(e) {
  return e && fe(e) === "object" && Nc(e.nativeElement) ? e.nativeElement : Nc(e) ? e : null;
}
function vm(e) {
  var t = mm(e);
  if (t)
    return t;
  if (e instanceof U.Component) {
    var r;
    return (r = Ua.findDOMNode) === null || r === void 0 ? void 0 : r.call(Ua, e);
  }
  return null;
}
function wa(e, t, r) {
  var n = C.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var ym = Number(dh.split(".")[0]), Fu = function(t, r) {
  typeof t == "function" ? t(r) : fe(t) === "object" && t && "current" in t && (t.current = r);
}, Yo = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    r.forEach(function(s) {
      Fu(s, i);
    });
  };
}, bm = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return wa(function() {
    return Yo.apply(void 0, r);
  }, r, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, Vu = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (Uu(t) && ym >= 19)
    return !0;
  var o = Ti.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Ti.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Ti.ForwardRef);
};
function Uu(e) {
  return /* @__PURE__ */ fh(e) && !fm(e);
}
var qu = function(t) {
  if (t && Uu(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function tt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function kc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zu(n.key), n);
  }
}
function rt(e, t, r) {
  return t && kc(e.prototype, t), r && kc(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ss(e, t) {
  return Ss = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ss(e, t);
}
function Gr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ss(e, t);
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Lr(e);
}
function xa() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xa = function() {
    return !!e;
  })();
}
function lr(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wu(e, t) {
  if (t && (fe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return lr(e);
}
function An(e) {
  var t = xa();
  return function() {
    var r, n = Lr(e);
    if (t) {
      var o = Lr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Wu(this, r);
  };
}
function Cs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sm(e) {
  if (Array.isArray(e)) return Cs(e);
}
function Gu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ea(e, t) {
  if (e) {
    if (typeof e == "string") return Cs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Cs(e, t) : void 0;
  }
}
function Cm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(e) {
  return Sm(e) || Gu(e) || Ea(e) || Cm();
}
var Xu = function(t) {
  return +setTimeout(t, 16);
}, Yu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Xu = function(t) {
  return window.requestAnimationFrame(t);
}, Yu = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ic = 0, Ko = /* @__PURE__ */ new Map();
function Ku(e) {
  Ko.delete(e);
}
var qt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ic += 1;
  var n = Ic;
  function o(i) {
    if (i === 0)
      Ku(n), t();
    else {
      var s = Xu(function() {
        o(i - 1);
      });
      Ko.set(n, s);
    }
  }
  return o(r), n;
};
qt.cancel = function(e) {
  var t = Ko.get(e);
  return Ku(e), Yu(t);
};
process.env.NODE_ENV !== "production" && (qt.ids = function() {
  return Ko;
});
function Ju(e) {
  if (Array.isArray(e)) return e;
}
function wm(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function Qu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(e, t) {
  return Ju(e) || wm(e, t) || Ea(e, t) || Qu();
}
function wn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function It() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xm(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var jc = "data-rc-order", Mc = "data-rc-priority", Em = "rc-util-key", ws = /* @__PURE__ */ new Map();
function Zu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Em;
}
function Jo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function _m(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function _a(e) {
  return Array.from((ws.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!It())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = _m(n), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(jc, s), a && i && c.setAttribute(Mc, "".concat(i)), r != null && r.nonce && (c.nonce = r == null ? void 0 : r.nonce), c.innerHTML = e;
  var l = Jo(t), u = l.firstChild;
  if (n) {
    if (a) {
      var f = (t.styles || _a(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(jc)))
          return !1;
        var v = Number(d.getAttribute(Mc) || 0);
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
function tf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jo(t);
  return (t.styles || _a(r)).find(function(n) {
    return n.getAttribute(Zu(t)) === e;
  });
}
function rf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = tf(e, t);
  if (r) {
    var n = Jo(t);
    n.removeChild(r);
  }
}
function Om(e, t) {
  var r = ws.get(e);
  if (!r || !xm(document, r)) {
    var n = ef("", t), o = n.parentNode;
    ws.set(e, o), e.removeChild(n);
  }
}
function ur(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Jo(r), o = _a(n), i = G(G({}, r), {}, {
    styles: o
  });
  Om(n, i);
  var s = tf(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = ef(e, i);
  return u.setAttribute(Zu(i), t), u;
}
function Tm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function pr(e, t) {
  if (e == null) return {};
  var r, n, o = Tm(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Rm(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (Gt(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (r && a > 1)
      return !1;
    n.add(i);
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
  return o(e, t);
}
var Am = "%";
function xs(e) {
  return e.join(Am);
}
var $m = /* @__PURE__ */ function() {
  function e(t) {
    tt(this, e), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return rt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(xs(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(xs(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), i = n(o);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }]), e;
}(), Dr = "data-token-hash", vt = "data-css-hash", Pm = "data-cache-path", Ft = "__cssinjs_instance__";
function Nm() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(vt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Ft] = o[Ft] || e, o[Ft] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(vt, "]"))).forEach(function(o) {
      var i = o.getAttribute(vt);
      if (n[i]) {
        if (o[Ft] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new $m(e);
}
var $n = /* @__PURE__ */ C.createContext({
  hashPriority: "low",
  cache: Nm(),
  defaultCache: !0
});
function km(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Oa = /* @__PURE__ */ function() {
  function e() {
    tt(this, e), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return rt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return r.forEach(function(a) {
        if (!s)
          s = void 0;
        else {
          var c;
          s = (c = s) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(a);
        }
      }), (n = s) !== null && n !== void 0 && n.value && i && (s.value[1] = this.cacheCallTimes++), (o = s) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, u) {
            var f = Z(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = Z(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(r);
      }
      var c = this.cache;
      r.forEach(function(l, u) {
        if (u === r.length - 1)
          c.set(l, {
            value: [n, o.cacheCallTimes++]
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
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var s = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), s;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !km(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
W(Oa, "MAX_CACHE_SIZE", 20);
W(Oa, "MAX_CACHE_OFFSET", 5);
var Lc = 0, nf = /* @__PURE__ */ function() {
  function e(t) {
    tt(this, e), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Lc, t.length === 0 && Ca(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Lc += 1;
  }
  return rt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Pi = new Oa();
function Es(e) {
  var t = Array.isArray(e) ? e : [e];
  return Pi.has(t) || Pi.set(t, new nf(t)), Pi.get(t);
}
var Im = /* @__PURE__ */ new WeakMap(), Ni = {};
function jm(e, t) {
  for (var r = Im, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Ni) || r.set(Ni, e()), r.get(Ni);
}
var Dc = /* @__PURE__ */ new WeakMap();
function yn(e) {
  var t = Dc.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof nf ? t += n.id : n && fe(n) === "object" ? t += yn(n) : t += n;
  }), t = wn(t), Dc.set(e, t)), t;
}
function Bc(e, t) {
  return wn("".concat(t, "_").concat(yn(e)));
}
var _s = It();
function Nt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function $o(e, t, r) {
  var n, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = G(G({}, o), {}, (n = {}, W(n, Dr, t), W(n, vt, r), n)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var vo = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Mm = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = Z(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, of = function(t, r, n) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = Z(s, 2), u = l[0], f = l[1];
    if (n != null && (a = n.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var d, v = vo(u, n == null ? void 0 : n.prefix);
      o[v] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(v, ")");
    }
  }), [i, Mm(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Hc = process.env.NODE_ENV !== "test" && It() ? C.useLayoutEffect : C.useEffect, Ta = function(t, r) {
  var n = C.useRef(!0);
  Hc(function() {
    return t(n.current);
  }, r), Hc(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, zc = function(t, r) {
  Ta(function(n) {
    if (!n)
      return t();
  }, r);
}, Lm = G({}, C), Fc = Lm.useInsertionEffect, Dm = function(t, r, n) {
  C.useMemo(t, n), Ta(function() {
    return r(!0);
  }, n);
}, Bm = Fc ? function(e, t, r) {
  return Fc(function() {
    return e(), t();
  }, r);
} : Dm, Hm = G({}, C), zm = Hm.useInsertionEffect, Fm = function(t) {
  var r = [], n = !1;
  function o(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && Ca(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(i);
  }
  return C.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, Vm = function() {
  return function(t) {
    t();
  };
}, Um = typeof zm < "u" ? Fm : Vm;
function qm() {
  return !1;
}
var Os = !1;
function Wm() {
  return Os;
}
const Gm = process.env.NODE_ENV === "production" ? qm : Wm;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Jn && typeof Jn.webpackHotUpdate == "function") {
    var Xm = Jn.webpackHotUpdate;
    Jn.webpackHotUpdate = function() {
      return Os = !0, setTimeout(function() {
        Os = !1;
      }, 0), Xm.apply(void 0, arguments);
    };
  }
}
function Ra(e, t, r, n, o) {
  var i = C.useContext($n), s = i.cache, a = [e].concat(Tt(t)), c = xs(a), l = Um([c]), u = Gm(), f = function(g) {
    s.opUpdate(c, function(h) {
      var S = h || [void 0, void 0], y = Z(S, 2), w = y[0], x = w === void 0 ? 0 : w, b = y[1], O = b;
      process.env.NODE_ENV !== "production" && b && u && (n == null || n(O, u), O = null);
      var E = O || r(), N = [x, E];
      return g ? g(N) : N;
    });
  };
  C.useMemo(
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
  return Bm(function() {
    o == null || o(v);
  }, function(p) {
    return f(function(g) {
      var h = Z(g, 2), S = h[0], y = h[1];
      return p && S === 0 && (o == null || o(v)), [S + 1, y];
    }), function() {
      s.opUpdate(c, function(g) {
        var h = g || [], S = Z(h, 2), y = S[0], w = y === void 0 ? 0 : y, x = S[1], b = w - 1;
        return b === 0 ? (l(function() {
          (p || !s.opGet(c)) && (n == null || n(x, !1));
        }), null) : [w - 1, x];
      });
    };
  }, [c]), v;
}
var Ym = {}, Km = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", or = /* @__PURE__ */ new Map();
function Jm(e) {
  or.set(e, (or.get(e) || 0) + 1);
}
function Qm(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Dr, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Ft] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Zm = 0;
function e0(e, t) {
  or.set(e, (or.get(e) || 0) - 1);
  var r = Array.from(or.keys()), n = r.filter(function(o) {
    var i = or.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Zm && n.forEach(function(o) {
    Qm(o, t), or.delete(o);
  });
}
var t0 = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), s = G(G({}, i), r);
  return o && (s = o(s)), s;
}, sf = "token";
function r0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = lt($n), o = n.cache.instanceId, i = n.container, s = r.salt, a = s === void 0 ? "" : s, c = r.override, l = c === void 0 ? Ym : c, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, v = jm(function() {
    return Object.assign.apply(Object, [{}].concat(Tt(t)));
  }, t), p = yn(v), g = yn(l), h = d ? yn(d) : "", S = Ra(sf, [a, e.id, p, g, h], function() {
    var y, w = f ? f(v, l, e) : t0(v, l, e, u), x = G({}, w), b = "";
    if (d) {
      var O = of(w, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), E = Z(O, 2);
      w = E[0], b = E[1];
    }
    var N = Bc(w, a);
    w._tokenKey = N, x._tokenKey = Bc(x, a);
    var M = (y = d == null ? void 0 : d.key) !== null && y !== void 0 ? y : N;
    w._themeKey = M, Jm(M);
    var q = "".concat(Km, "-").concat(wn(N));
    return w._hashId = q, [w, q, x, b, (d == null ? void 0 : d.key) || ""];
  }, function(y) {
    e0(y[0]._themeKey, o);
  }, function(y) {
    var w = Z(y, 4), x = w[0], b = w[3];
    if (d && b) {
      var O = ur(b, wn("css-variables-".concat(x._themeKey)), {
        mark: vt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Ft] = o, O.setAttribute(Dr, x._themeKey);
    }
  });
  return S;
}
var n0 = function(t, r, n) {
  var o = Z(t, 5), i = o[2], s = o[3], a = o[4], c = n || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = $o(s, a, u, d, l);
  return [f, u, v];
}, o0 = {
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
}, af = "comm", cf = "rule", lf = "decl", i0 = "@import", s0 = "@namespace", a0 = "@keyframes", c0 = "@layer", uf = Math.abs, Aa = String.fromCharCode;
function ff(e) {
  return e.trim();
}
function yo(e, t, r) {
  return e.replace(t, r);
}
function l0(e, t, r) {
  return e.indexOf(t, r);
}
function Ar(e, t) {
  return e.charCodeAt(t) | 0;
}
function Br(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function u0(e) {
  return e.length;
}
function Qn(e, t) {
  return t.push(e), e;
}
var Qo = 1, Hr = 1, df = 0, ft = 0, Ne = 0, Xr = "";
function $a(e, t, r, n, o, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Qo, column: Hr, length: s, return: "", siblings: a };
}
function f0() {
  return Ne;
}
function d0() {
  return Ne = ft > 0 ? Ar(Xr, --ft) : 0, Hr--, Ne === 10 && (Hr = 1, Qo--), Ne;
}
function yt() {
  return Ne = ft < df ? Ar(Xr, ft++) : 0, Hr++, Ne === 10 && (Hr = 1, Qo++), Ne;
}
function Vt() {
  return Ar(Xr, ft);
}
function bo() {
  return ft;
}
function Zo(e, t) {
  return Br(Xr, e, t);
}
function xn(e) {
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
function h0(e) {
  return Qo = Hr = 1, df = Et(Xr = e), ft = 0, [];
}
function p0(e) {
  return Xr = "", e;
}
function ki(e) {
  return ff(Zo(ft - 1, Ts(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function g0(e) {
  for (; (Ne = Vt()) && Ne < 33; )
    yt();
  return xn(e) > 2 || xn(Ne) > 3 ? "" : " ";
}
function m0(e, t) {
  for (; --t && yt() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return Zo(e, bo() + (t < 6 && Vt() == 32 && yt() == 32));
}
function Ts(e) {
  for (; yt(); )
    switch (Ne) {
      // ] ) " '
      case e:
        return ft;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ts(Ne);
        break;
      // (
      case 40:
        e === 41 && Ts(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return ft;
}
function v0(e, t) {
  for (; yt() && e + Ne !== 57; )
    if (e + Ne === 84 && Vt() === 47)
      break;
  return "/*" + Zo(t, ft - 1) + "*" + Aa(e === 47 ? e : yt());
}
function y0(e) {
  for (; !xn(Vt()); )
    yt();
  return Zo(e, ft);
}
function b0(e) {
  return p0(So("", null, null, null, [""], e = h0(e), 0, [0], e));
}
function So(e, t, r, n, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, v = 0, p = 0, g = 1, h = 1, S = 1, y = 0, w = "", x = o, b = i, O = n, E = w; h; )
    switch (p = y, y = yt()) {
      // (
      case 40:
        if (p != 108 && Ar(E, f - 1) == 58) {
          l0(E += yo(ki(y), "&", "&\f"), "&\f", uf(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ki(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += g0(p);
        break;
      // \
      case 92:
        E += m0(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Vt()) {
          case 42:
          case 47:
            Qn(S0(v0(yt(), bo()), t, r, c), c), (xn(p || 1) == 5 || xn(Vt() || 1) == 5) && Et(E) && Br(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = Et(E) * S;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = yo(E, /\f/g, "")), v > 0 && (Et(E) - f || g === 0 && p === 47) && Qn(v > 32 ? Uc(E + ";", n, r, f - 1, c) : Uc(yo(E, " ", "") + ";", n, r, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Qn(O = Vc(E, t, r, l, u, o, a, w, x = [], b = [], f, i), i), y === 123)
              if (u === 0)
                So(E, t, O, O, x, i, f, a, b);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (Ar(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Ar(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? So(e, O, O, n && Qn(Vc(e, O, O, 0, 0, o, a, w, o, x = [], f, b), b), o, b, f, a, n ? x : b) : So(E, O, O, O, [""], b, 0, a, b);
              }
        }
        l = u = v = 0, g = S = 1, w = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Et(E), v = p;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && d0() == 125)
            continue;
        }
        switch (E += Aa(y), y * g) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Et(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Vt() === 45 && (E += ki(yt())), d = Vt(), u = f = Et(w = E += y0(bo())), y++;
            break;
          // -
          case 45:
            p === 45 && Et(E) == 2 && (g = 0);
        }
    }
  return i;
}
function Vc(e, t, r, n, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, v = o === 0 ? i : [""], p = u0(v), g = 0, h = 0, S = 0; g < n; ++g)
    for (var y = 0, w = Br(e, d + 1, d = uf(h = s[g])), x = e; y < p; ++y)
      (x = ff(h > 0 ? v[y] + " " + w : yo(w, /&\f/g, v[y]))) && (c[S++] = x);
  return $a(e, t, r, o === 0 ? cf : a, c, l, u, f);
}
function S0(e, t, r, n) {
  return $a(e, t, r, af, Aa(f0()), Br(e, 2, -2), 0, n);
}
function Uc(e, t, r, n, o) {
  return $a(e, t, r, lf, Br(e, 0, n), Br(e, n + 1, -1), n, o);
}
function Rs(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function C0(e, t, r, n) {
  switch (e.type) {
    case c0:
      if (e.children.length) break;
    case i0:
    case s0:
    case lf:
      return e.return = e.return || e.value;
    case af:
      return "";
    case a0:
      return e.return = e.value + "{" + Rs(e.children, n) + "}";
    case cf:
      if (!Et(e.value = e.props.join(","))) return "";
  }
  return Et(r = Rs(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hf(e, t) {
  var r = t.path, n = t.parentSelectors;
  Gt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var w0 = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && hf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, x0 = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && hf("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, qc = "data-ant-cssinjs-cache-path", pf = "_FILE_STYLE__", fr, gf = !0;
function E0() {
  if (!fr && (fr = {}, It())) {
    var e = document.createElement("div");
    e.className = qc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = Z(i, 2), a = s[0], c = s[1];
      fr[a] = c;
    });
    var r = document.querySelector("style[".concat(qc, "]"));
    if (r) {
      var n;
      gf = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function _0(e) {
  return E0(), !!fr[e];
}
function O0(e) {
  var t = fr[e], r = null;
  if (t && It())
    if (gf)
      r = pf;
    else {
      var n = document.querySelector("style[".concat(vt, '="').concat(fr[e], '"]'));
      n ? r = n.innerHTML : delete fr[e];
    }
  return [r, t];
}
var mf = "_skip_check_", vf = "_multi_value_";
function Co(e) {
  var t = Rs(b0(e), C0);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function T0(e) {
  return fe(e) === "object" && e && (mf in e || vf in e);
}
function Wc(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Tt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var R0 = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, s = n.parentSelectors, a = r.hashId, c = r.layer, l = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, v = r.linters, p = v === void 0 ? [] : v, g = "", h = {};
  function S(x) {
    var b = x.getName(a);
    if (!h[b]) {
      var O = e(x.style, r, {
        root: !1,
        parentSelectors: s
      }), E = Z(O, 1), N = E[0];
      h[b] = "@keyframes ".concat(x.getName(a)).concat(N);
    }
  }
  function y(x) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(function(O) {
      Array.isArray(O) ? y(O, b) : O && b.push(O);
    }), b;
  }
  var w = y(Array.isArray(t) ? t : [t]);
  return w.forEach(function(x) {
    var b = typeof x == "string" && !o ? {} : x;
    if (typeof b == "string")
      g += "".concat(b, `
`);
    else if (b._keyframe)
      S(b);
    else {
      var O = d.reduce(function(E, N) {
        var M;
        return (N == null || (M = N.visit) === null || M === void 0 ? void 0 : M.call(N, E)) || E;
      }, b);
      Object.keys(O).forEach(function(E) {
        var N = O[E];
        if (fe(N) === "object" && N && (E !== "animationName" || !N._keyframe) && !T0(N)) {
          var M = !1, q = E.trim(), K = !1;
          (o || i) && a ? q.startsWith("@") ? M = !0 : q === "&" ? q = Wc("", a, u) : q = Wc(E, a, u) : o && !a && (q === "&" || q === "") && (q = "", K = !0);
          var X = e(N, r, {
            root: K,
            injectHash: M,
            parentSelectors: [].concat(Tt(s), [q])
          }), $ = Z(X, 2), B = $[0], H = $[1];
          h = G(G({}, h), H), g += "".concat(q).concat(B);
        } else {
          let T = function(P, L) {
            process.env.NODE_ENV !== "production" && (fe(N) !== "object" || !(N != null && N[mf])) && [w0, x0].concat(Tt(p)).forEach(function(j) {
              return j(P, L, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var D = P.replace(/[A-Z]/g, function(j) {
              return "-".concat(j.toLowerCase());
            }), k = L;
            !o0[P] && typeof k == "number" && k !== 0 && (k = "".concat(k, "px")), P === "animationName" && L !== null && L !== void 0 && L._keyframe && (S(L), k = L.getName(a)), g += "".concat(D, ":").concat(k, ";");
          };
          var A, _ = (A = N == null ? void 0 : N.value) !== null && A !== void 0 ? A : N;
          fe(N) === "object" && N !== null && N !== void 0 && N[vf] && Array.isArray(_) ? _.forEach(function(P) {
            T(E, P);
          }) : T(E, _);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(x) {
    return "@layer ".concat(x, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, h];
};
function yf(e, t) {
  return wn("".concat(e.join("%")).concat(t));
}
function A0() {
  return null;
}
var bf = "style";
function As(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = C.useContext($n), f = u.autoClear, d = u.mock, v = u.defaultCache, p = u.hashPriority, g = u.container, h = u.ssrInline, S = u.transformers, y = u.linters, w = u.cache, x = u.layer, b = r._tokenKey, O = [b];
  x && O.push("layer"), O.push.apply(O, Tt(n));
  var E = _s;
  process.env.NODE_ENV !== "production" && d !== void 0 && (E = d === "client");
  var N = Ra(
    bf,
    O,
    // Create cache if needed
    function() {
      var $ = O.join("|");
      if (_0($)) {
        var B = O0($), H = Z(B, 2), A = H[0], _ = H[1];
        if (A)
          return [A, b, _, {}, a, l];
      }
      var T = t(), P = R0(T, {
        hashId: o,
        hashPriority: p,
        layer: x ? i : void 0,
        path: n.join("-"),
        transformers: S,
        linters: y
      }), L = Z(P, 2), D = L[0], k = L[1], j = Co(D), F = yf(O, j);
      return [j, b, F, k, a, l];
    },
    // Remove cache if no need
    function($, B) {
      var H = Z($, 3), A = H[2];
      (B || f) && _s && rf(A, {
        mark: vt
      });
    },
    // Effect: Inject style here
    function($) {
      var B = Z($, 4), H = B[0];
      B[1];
      var A = B[2], _ = B[3];
      if (E && H !== pf) {
        var T = {
          mark: vt,
          prepend: x ? !1 : "queue",
          attachTo: g,
          priority: l
        }, P = typeof s == "function" ? s() : s;
        P && (T.csp = {
          nonce: P
        });
        var L = [], D = [];
        Object.keys(_).forEach(function(j) {
          j.startsWith("@layer") ? L.push(j) : D.push(j);
        }), L.forEach(function(j) {
          ur(Co(_[j]), "_layer-".concat(j), G(G({}, T), {}, {
            prepend: !0
          }));
        });
        var k = ur(H, A, T);
        k[Ft] = w.instanceId, k.setAttribute(Dr, b), process.env.NODE_ENV !== "production" && k.setAttribute(Pm, O.join("|")), D.forEach(function(j) {
          ur(Co(_[j]), "_effect-".concat(j), T);
        });
      }
    }
  ), M = Z(N, 3), q = M[0], K = M[1], X = M[2];
  return function($) {
    var B;
    if (!h || E || !v)
      B = /* @__PURE__ */ C.createElement(A0, null);
    else {
      var H;
      B = /* @__PURE__ */ C.createElement("style", Ye({}, (H = {}, W(H, Dr, K), W(H, vt, X), H), {
        dangerouslySetInnerHTML: {
          __html: q
        }
      }));
    }
    return /* @__PURE__ */ C.createElement(C.Fragment, null, B, $);
  };
}
var $0 = function(t, r, n) {
  var o = Z(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = n || {}, d = f.plain;
  if (l)
    return null;
  var v = i, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = $o(i, s, a, p, d), c && Object.keys(c).forEach(function(g) {
    if (!r[g]) {
      r[g] = !0;
      var h = Co(c[g]), S = $o(h, s, "_effect-".concat(g), p, d);
      g.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [u, a, v];
}, Sf = "cssVar", P0 = function(t, r) {
  var n = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = lt($n), f = u.cache.instanceId, d = u.container, v = a._tokenKey, p = [].concat(Tt(t.path), [n, l, v]), g = Ra(Sf, p, function() {
    var h = r(), S = of(h, n, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), y = Z(S, 2), w = y[0], x = y[1], b = yf(p, x);
    return [w, x, b, n];
  }, function(h) {
    var S = Z(h, 3), y = S[2];
    _s && rf(y, {
      mark: vt
    });
  }, function(h) {
    var S = Z(h, 3), y = S[1], w = S[2];
    if (y) {
      var x = ur(y, w, {
        mark: vt,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      x[Ft] = f, x.setAttribute(Dr, n);
    }
  });
  return g;
}, N0 = function(t, r, n) {
  var o = Z(t, 4), i = o[1], s = o[2], a = o[3], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = $o(i, a, s, f, l);
  return [u, s, d];
}, cn;
cn = {}, W(cn, bf, $0), W(cn, sf, n0), W(cn, Sf, N0);
var Cf = /* @__PURE__ */ function() {
  function e(t, r) {
    tt(this, e), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return rt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function _r(e) {
  return e.notSplit = !0, e;
}
_r(["borderTop", "borderBottom"]), _r(["borderTop"]), _r(["borderBottom"]), _r(["borderLeft", "borderRight"]), _r(["borderLeft"]), _r(["borderRight"]);
var Pa = /* @__PURE__ */ Do({});
function k0(e) {
  return Ju(e) || Gu(e) || Ea(e) || Qu();
}
function $s(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function wf(e, t, r, n) {
  if (!t.length)
    return r;
  var o = k0(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Tt(e) : a = G({}, e), n && r === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = wf(a[i], s, r, n), a;
}
function Ii(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !$s(e, t.slice(0, -1)) ? e : wf(e, t, r, n);
}
function I0(e) {
  return fe(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Gc(e) {
  return Array.isArray(e) ? [] : {};
}
var j0 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function M0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Gc(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = $s(o, s), u = Array.isArray(l);
      if (u || I0(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = $s(n, s);
          u ? n = Ii(n, s, []) : (!f || fe(f) !== "object") && (n = Ii(n, s, Gc(l))), j0(l).forEach(function(d) {
            i([].concat(Tt(s), [d]), c);
          });
        }
      } else
        n = Ii(n, s, l);
    }
    i([]);
  }), n;
}
function xf() {
}
let $t = null;
function L0() {
  $t = null, Bu();
}
let Na = xf;
process.env.NODE_ENV !== "production" && (Na = (e, t, r) => {
  Gt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && L0();
});
const Ef = /* @__PURE__ */ C.createContext({}), Xt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = C.useContext(Ef), r = (n, o, i) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const s = $t;
        $t || ($t = {}), $t[e] = $t[e] || [], $t[e].includes(i || "") || $t[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", $t);
      } else
        process.env.NODE_ENV !== "production" && Na(n, e, i);
  };
  return r.deprecated = (n, o, i, s) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = xf, e;
}, Pn = Na, D0 = /* @__PURE__ */ Do(void 0), et = "${label} is not a valid ${type}", ei = {
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
        string: et,
        method: et,
        array: et,
        object: et,
        number: et,
        date: et,
        boolean: et,
        integer: et,
        float: et,
        regexp: et,
        email: et,
        url: et,
        hex: et
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
let wo = [];
const Xc = () => wo.reduce((e, t) => Object.assign(Object.assign({}, e), t), ei.Modal);
function B0(e) {
  if (e) {
    const t = Object.assign({}, e);
    return wo.push(t), Xc(), () => {
      wo = wo.filter((r) => r !== t), Xc();
    };
  }
  Object.assign({}, ei.Modal);
}
const _f = /* @__PURE__ */ Do(void 0), Of = "internalMark", Tf = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = Xt("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Of, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  C.useEffect(() => B0(t == null ? void 0 : t.Modal), [t]);
  const o = C.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ C.createElement(_f.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Tf.displayName = "LocaleProvider");
const Rf = {
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
}, En = Object.assign(Object.assign({}, Rf), {
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
}), De = Math.round;
function ji(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Yc = (e, t, r) => r === 0 ? e : e / 100;
function ln(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
let Me = class Af {
  constructor(t) {
    W(this, "isValid", !0), W(this, "r", 0), W(this, "g", 0), W(this, "b", 0), W(this, "a", 1), W(this, "_h", void 0), W(this, "_s", void 0), W(this, "_l", void 0), W(this, "_v", void 0), W(this, "_max", void 0), W(this, "_min", void 0), W(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Af)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = ln(t.r), this.g = ln(t.g), this.b = ln(t.b), this.a = typeof t.a == "number" ? ln(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
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
    const r = this.toHsv();
    return r.h = t, this._c(r);
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
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = De(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, i = (a) => (n[a] - this[a]) * o + this[a], s = {
      r: De(i("r")),
      g: De(i("g")),
      b: De(i("b")),
      a: De(i("a") * 100) / 100
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (i) => De((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = De(this.a * 255).toString(16);
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
    const t = this.getHue(), r = De(this.getSaturation() * 100), n = De(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = ln(r, n), o;
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
    const r = t.replace("#", "");
    function n(o, i) {
      return parseInt(r[o] + r[i || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const d = De(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = n - l / 2;
    this.r = De((i + f) * 255), this.g = De((s + f) * 255), this.b = De((a + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = De(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = De(n * (1 - r) * 255), u = De(n * (1 - r * c) * 255), f = De(n * (1 - r * (1 - c)) * 255);
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
    const r = ji(t, Yc);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = ji(t, Yc);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = ji(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? De(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
};
var Zn = 2, Kc = 0.16, H0 = 0.05, z0 = 0.05, F0 = 0.15, $f = 5, Pf = 4, V0 = [{
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
function Jc(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Zn * t : Math.round(e.h) + Zn * t : n = r ? Math.round(e.h) + Zn * t : Math.round(e.h) - Zn * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Qc(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Kc * t : t === Pf ? n = e.s + Kc : n = e.s + H0 * t, n > 1 && (n = 1), r && t === $f && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function Zc(e, t, r) {
  var n;
  return r ? n = e.v + z0 * t : n = e.v - F0 * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function _n(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new Me(e), o = n.toHsv(), i = $f; i > 0; i -= 1) {
    var s = new Me({
      h: Jc(o, i, !0),
      s: Qc(o, i, !0),
      v: Zc(o, i, !0)
    });
    r.push(s);
  }
  r.push(n);
  for (var a = 1; a <= Pf; a += 1) {
    var c = new Me({
      h: Jc(o, a),
      s: Qc(o, a),
      v: Zc(o, a)
    });
    r.push(c);
  }
  return t.theme === "dark" ? V0.map(function(l) {
    var u = l.index, f = l.amount;
    return new Me(t.backgroundColor || "#141414").mix(r[u], f).toHexString();
  }) : r.map(function(l) {
    return l.toHexString();
  });
}
var Mi = {
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
}, Ps = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ps.primary = Ps[5];
var Ns = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ns.primary = Ns[5];
var ks = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ks.primary = ks[5];
var Is = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Is.primary = Is[5];
var js = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
js.primary = js[5];
var Ms = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Ms.primary = Ms[5];
var Ls = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ls.primary = Ls[5];
var Ds = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ds.primary = Ds[5];
var Po = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Po.primary = Po[5];
var Bs = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Bs.primary = Bs[5];
var Hs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Hs.primary = Hs[5];
var zs = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
zs.primary = zs[5];
var Fs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Fs.primary = Fs[5];
var Li = {
  red: Ps,
  volcano: Ns,
  orange: ks,
  gold: Is,
  yellow: js,
  lime: Ms,
  green: Ls,
  cyan: Ds,
  blue: Po,
  geekblue: Bs,
  purple: Hs,
  magenta: zs,
  grey: Fs
};
function U0(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: u
  } = e, f = r(c), d = r(o), v = r(i), p = r(s), g = r(a), h = n(l, u), S = e.colorLink || e.colorInfo, y = r(S), w = new Me(p[1]).mix(new Me(p[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
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
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBgFilledHover: w,
    colorErrorBgActive: p[3],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
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
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Me("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const q0 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function W0(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, q0(n));
}
const G0 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function xo(e) {
  return (e + 8) / e;
}
function X0(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, i = e * Math.pow(Math.E, o / 5), s = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: xo(r)
  }));
}
const Y0 = (e) => {
  const t = X0(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], i = r[0], s = r[2], a = n[1], c = n[0], l = n[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: s,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: a,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(l * s),
    fontHeightSM: Math.round(c * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function K0(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const it = (e, t) => new Me(e).setA(t).toRgbString(), un = (e, t) => new Me(e).darken(t).toHexString(), J0 = (e) => {
  const t = _n(e);
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
}, Q0 = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: it(n, 0.88),
    colorTextSecondary: it(n, 0.65),
    colorTextTertiary: it(n, 0.45),
    colorTextQuaternary: it(n, 0.25),
    colorFill: it(n, 0.15),
    colorFillSecondary: it(n, 0.06),
    colorFillTertiary: it(n, 0.04),
    colorFillQuaternary: it(n, 0.02),
    colorBgSolid: it(n, 1),
    colorBgSolidHover: it(n, 0.75),
    colorBgSolidActive: it(n, 0.95),
    colorBgLayout: un(r, 4),
    colorBgContainer: un(r, 0),
    colorBgElevated: un(r, 0),
    colorBgSpotlight: it(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: un(r, 15),
    colorBorderSecondary: un(r, 6)
  };
};
function Z0(e) {
  Mi.pink = Mi.magenta, Li.pink = Li.magenta;
  const t = Object.keys(Rf).map((r) => {
    const n = e[r] === Mi[r] ? Li[r] : _n(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${r}-${s + 1}`] = n[s], o[`${r}${s + 1}`] = n[s], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), U0(e, {
    generateColorPalettes: J0,
    generateNeutralColorPalettes: Q0
  })), Y0(e.fontSize)), K0(e)), G0(e)), W0(e));
}
const Nf = Es(Z0), Vs = {
  token: En,
  override: {
    override: En
  },
  hashed: !0
}, kf = /* @__PURE__ */ U.createContext(Vs), No = "ant", ka = "anticon", ev = (e, t) => t || (e ? `${No}-${e}` : No), bt = /* @__PURE__ */ C.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ev,
  iconPrefixCls: ka
}), {
  Consumer: IC
} = bt, el = {};
function Ia(e) {
  const t = C.useContext(bt), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: el,
    styles: el
  }, i), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const tv = `-ant-${Date.now()}-${Math.random()}`;
function rv(e, t) {
  const r = {}, n = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Me(s), l = _n(c.toRgbString());
    r[`${a}-color`] = n(c), r[`${a}-color-disabled`] = l[1], r[`${a}-color-hover`] = l[4], r[`${a}-color-active`] = l[6], r[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), r[`${a}-color-deprecated-bg`] = l[0], r[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Me(t.primaryColor), a = _n(s.toRgbString());
    a.forEach((l, u) => {
      r[`primary-${u + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(s, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(s, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(s, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(s, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(s, (l) => l.setA(l.a * 0.12));
    const c = new Me(a[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (l) => l.setA(l.a * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((s) => `--${e}-${s}: ${r[s]};`).join(`
`)}
  }
  `.trim();
}
function nv(e, t) {
  const r = rv(e, t);
  It() ? ur(r, `${tv}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Pn(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const ko = /* @__PURE__ */ C.createContext(!1), ov = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = C.useContext(ko);
  return /* @__PURE__ */ C.createElement(ko.Provider, {
    value: r ?? n
  }, t);
}, zr = /* @__PURE__ */ C.createContext(void 0), iv = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = C.useContext(zr);
  return /* @__PURE__ */ C.createElement(zr.Provider, {
    value: r || n
  }, t);
};
function sv() {
  const e = lt(ko), t = lt(zr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var If = /* @__PURE__ */ rt(function e() {
  tt(this, e);
}), jf = "CALC_UNIT", av = new RegExp(jf, "g");
function Di(e) {
  return typeof e == "number" ? "".concat(e).concat(jf) : e;
}
var cv = /* @__PURE__ */ function(e) {
  Gr(r, e);
  var t = An(r);
  function r(n, o) {
    var i;
    tt(this, r), i = t.call(this), W(lr(i), "result", ""), W(lr(i), "unitlessCssVar", void 0), W(lr(i), "lowPriority", void 0);
    var s = fe(n);
    return i.unitlessCssVar = o, n instanceof r ? i.result = "(".concat(n.result, ")") : s === "number" ? i.result = Di(n) : s === "string" && (i.result = n), i;
  }
  return rt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Di(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Di(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
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
      }) && (c = !1), this.result = this.result.replace(av, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(If), lv = /* @__PURE__ */ function(e) {
  Gr(r, e);
  var t = An(r);
  function r(n) {
    var o;
    return tt(this, r), o = t.call(this), W(lr(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return rt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(If), uv = function(t, r) {
  var n = t === "css" ? cv : lv;
  return function(o) {
    return new n(o, r);
  };
}, tl = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Wt(e) {
  var t = C.useRef();
  t.current = e;
  var r = C.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function On(e) {
  var t = C.useRef(!1), r = C.useState(e), n = Z(r, 2), o = n[0], i = n[1];
  C.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function Bi(e) {
  return e !== void 0;
}
function fv(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, s = r.postState, a = On(function() {
    return Bi(o) ? o : Bi(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = Z(a, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l, d = s ? s(f) : f, v = Wt(i), p = On([f]), g = Z(p, 2), h = g[0], S = g[1];
  zc(function() {
    var w = h[0];
    l !== w && v(l, w);
  }, [h]), zc(function() {
    Bi(o) || u(o);
  }, [o]);
  var y = Wt(function(w, x) {
    u(w, x), S([f], x);
  });
  return [d, y];
}
function rl(e, t, r, n) {
  var o = G({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(a) {
      var c = Z(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && Gt(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = G(G({}, r), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Mf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Us = !0;
function Yt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Mf)
    return Object.assign.apply(Object, [{}].concat(t));
  Us = !1;
  var n = {};
  return t.forEach(function(o) {
    if (fe(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(s) {
        Object.defineProperty(n, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[s];
          }
        });
      });
    }
  }), Us = !0, n;
}
var nl = {};
function dv() {
}
var hv = function(t) {
  var r, n = t, o = dv;
  return Mf && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(s, a) {
      if (Us) {
        var c;
        (c = r) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    nl[s] = {
      global: Array.from(r),
      component: G(G({}, (c = nl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function ol(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(Yt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function pv(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(i) {
        return Nt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(i) {
        return Nt(i);
      }).join(","), ")");
    }
  };
}
var gv = 1e3 * 60 * 10, mv = /* @__PURE__ */ function() {
  function e() {
    tt(this, e), W(this, "map", /* @__PURE__ */ new Map()), W(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), W(this, "nextID", 0), W(this, "lastAccessBeat", /* @__PURE__ */ new Map()), W(this, "accessBeat", 0);
  }
  return rt(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(i) {
        return i && fe(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(fe(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          n - o > gv && (r.map.delete(i), r.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), il = new mv();
function vv(e, t) {
  return U.useMemo(function() {
    var r = il.get(t);
    if (r)
      return r;
    var n = e();
    return il.set(t, n), n;
  }, t);
}
var yv = function() {
  return {};
};
function bv(e) {
  var t = e.useCSP, r = t === void 0 ? yv : t, n = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(d, v, p, g) {
    var h = Array.isArray(d) ? d[0] : d;
    function S(N) {
      return "".concat(String(h)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var y = (g == null ? void 0 : g.unitless) || {}, w = typeof a == "function" ? a(d) : {}, x = G(G({}, w), {}, W({}, S("zIndexPopup"), !0));
    Object.keys(y).forEach(function(N) {
      x[S(N)] = y[N];
    });
    var b = G(G({}, g), {}, {
      unitless: x,
      prefixToken: S
    }), O = u(d, v, p, b), E = l(h, p, b);
    return function(N) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, q = O(N, M), K = Z(q, 2), X = K[1], $ = E(M), B = Z($, 2), H = B[0], A = B[1];
      return [H, X, A];
    };
  }
  function l(d, v, p) {
    var g = p.unitless, h = p.injectStyle, S = h === void 0 ? !0 : h, y = p.prefixToken, w = p.ignore, x = function(E) {
      var N = E.rootCls, M = E.cssVar, q = M === void 0 ? {} : M, K = n(), X = K.realToken;
      return P0({
        path: [d],
        prefix: q.prefix,
        key: q.key,
        unitless: g,
        ignore: w,
        token: X,
        scope: N
      }, function() {
        var $ = ol(d, X, v), B = rl(d, X, $, {
          deprecatedTokens: p == null ? void 0 : p.deprecatedTokens
        });
        return Object.keys($).forEach(function(H) {
          B[y(H)] = B[H], delete B[H];
        }), B;
      }), null;
    }, b = function(E) {
      var N = n(), M = N.cssVar;
      return [function(q) {
        return S && M ? /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(x, {
          rootCls: E,
          cssVar: M,
          component: d
        }), q) : q;
      }, M == null ? void 0 : M.key];
    };
    return b;
  }
  function u(d, v, p) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(d) ? d : [d, d], S = Z(h, 1), y = S[0], w = h.join("-"), x = e.layer || {
      name: "antd"
    };
    return function(b) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, E = n(), N = E.theme, M = E.realToken, q = E.hashId, K = E.token, X = E.cssVar, $ = o(), B = $.rootPrefixCls, H = $.iconPrefixCls, A = r(), _ = X ? "css" : "js", T = vv(function() {
        var F = /* @__PURE__ */ new Set();
        return X && Object.keys(g.unitless || {}).forEach(function(Q) {
          F.add(vo(Q, X.prefix)), F.add(vo(Q, tl(y, X.prefix)));
        }), uv(_, F);
      }, [_, y, X == null ? void 0 : X.prefix]), P = pv(_), L = P.max, D = P.min, k = {
        theme: N,
        token: K,
        hashId: q,
        nonce: function() {
          return A.nonce;
        },
        clientOnly: g.clientOnly,
        layer: x,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && As(G(G({}, k), {}, {
        clientOnly: !1,
        path: ["Shared", B]
      }), function() {
        return i(K, {
          prefix: {
            rootPrefixCls: B,
            iconPrefixCls: H
          },
          csp: A
        });
      });
      var j = As(G(G({}, k), {}, {
        path: [w, b, H]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var F = hv(K), Q = F.token, ee = F.flush, oe = ol(y, M, p), Se = ".".concat(b), me = rl(y, M, oe, {
          deprecatedTokens: g.deprecatedTokens
        });
        X && oe && fe(oe) === "object" && Object.keys(oe).forEach(function(Qe) {
          oe[Qe] = "var(".concat(vo(Qe, tl(y, X.prefix)), ")");
        });
        var Ie = Yt(Q, {
          componentCls: Se,
          prefixCls: b,
          iconCls: ".".concat(H),
          antCls: ".".concat(B),
          calc: T,
          // @ts-ignore
          max: L,
          // @ts-ignore
          min: D
        }, X ? oe : me), Re = v(Ie, {
          hashId: q,
          prefixCls: b,
          rootPrefixCls: B,
          iconPrefixCls: H
        });
        ee(y, me);
        var ce = typeof s == "function" ? s(Ie, b, O, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : ce, Re];
      });
      return [j, q];
    };
  }
  function f(d, v, p) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(d, v, p, G({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), S = function(w) {
      var x = w.prefixCls, b = w.rootCls, O = b === void 0 ? x : b;
      return h(x, O), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const ja = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Sv = "5.24.6";
function Hi(e) {
  return e >= 0 && e <= 255;
}
function gn(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Me(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Me(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((r - s * (1 - l)) / l), f = Math.round((n - a * (1 - l)) / l), d = Math.round((o - c * (1 - l)) / l);
    if (Hi(u) && Hi(f) && Hi(d))
      return new Me({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Me({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Cv = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Lf(e) {
  const {
    override: t
  } = e, r = Cv(e, ["override"]), n = Object.assign({}, t);
  Object.keys(En).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
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
    colorSplit: gn(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: gn(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: gn(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: gn(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Me("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Me("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Me("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), n);
}
var sl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Df = {
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
}, wv = {
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
}, xv = {
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
}, Bf = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = sl(t, ["override"]);
  let s = Object.assign(Object.assign({}, n), {
    override: o
  });
  return s = Lf(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = sl(l, ["theme"]);
    let d = f;
    u && (d = Bf(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = d;
  }), s;
};
function Nn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = U.useContext(kf), i = `${Sv}-${t || ""}`, s = r || Nf, [a, c, l] = r0(s, [En, e], {
    salt: i,
    override: n,
    getComputedToken: Bf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Lf,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Df,
      ignore: wv,
      preserve: xv
    }
  });
  return [s, l, t ? c : "", a, o];
}
const Hf = function(e) {
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
}, zf = () => ({
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
}), Ev = (e) => ({
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
}), _v = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = r ? `.${r}` : o, s = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let a = {};
  return n !== !1 && (a = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, a), s), {
      [o]: s
    })
  };
}, Ov = (e, t) => ({
  outline: `${Nt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Tv = (e, t) => ({
  "&:focus-visible": Object.assign({}, Ov(e, t))
}), Ff = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, zf()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: ti,
  genComponentStyleHook: Rv,
  genSubStyleComponent: Av
} = bv({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = lt(bt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = Nn();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = lt(bt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = Ev(e);
    return [n, {
      "&": n
    }, Ff((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : ka)];
  },
  getCommonStyle: _v,
  getCompUnitless: () => Df
}), $v = (e, t) => {
  const [r, n] = Nn();
  return As({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Ff(e)]);
}, Pv = Object.assign({}, C), {
  useId: al
} = Pv, Nv = () => "", kv = typeof al > "u" ? Nv : al;
function Iv(e, t, r) {
  var n, o;
  const i = Xt("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, Vs), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Vs.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = kv();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return wa(() => {
    var l, u;
    if (!e)
      return t;
    const f = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((p) => {
      f[p] = Object.assign(Object.assign({}, f[p]), e.components[p]);
    });
    const d = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
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
    return !Rm(f, v, !0);
  }));
}
var jv = ["children"], Vf = /* @__PURE__ */ C.createContext({});
function Mv(e) {
  var t = e.children, r = pr(e, jv);
  return /* @__PURE__ */ C.createElement(Vf.Provider, {
    value: r
  }, t);
}
var Lv = /* @__PURE__ */ function(e) {
  Gr(r, e);
  var t = An(r);
  function r() {
    return tt(this, r), t.apply(this, arguments);
  }
  return rt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(C.Component);
function Dv(e) {
  var t = C.useReducer(function(a) {
    return a + 1;
  }, 0), r = Z(t, 2), n = r[1], o = C.useRef(e), i = Wt(function() {
    return o.current;
  }), s = Wt(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, n();
  });
  return [i, s];
}
var zt = "none", eo = "appear", to = "enter", ro = "leave", cl = "none", pt = "prepare", Or = "start", Tr = "active", Ma = "end", Uf = "prepared";
function ll(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Bv(e, t) {
  var r = {
    animationend: ll("Animation", "AnimationEnd"),
    transitionend: ll("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Hv = Bv(It(), typeof window < "u" ? window : {}), qf = {};
if (It()) {
  var zv = document.createElement("div");
  qf = zv.style;
}
var no = {};
function Wf(e) {
  if (no[e])
    return no[e];
  var t = Hv[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in qf)
        return no[e] = t[i], no[e];
    }
  return "";
}
var Gf = Wf("animationend"), Xf = Wf("transitionend"), Yf = !!(Gf && Xf), ul = Gf || "animationend", fl = Xf || "transitionend";
function dl(e, t) {
  if (!e) return null;
  if (fe(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Fv = function(e) {
  var t = ae();
  function r(o) {
    o && (o.removeEventListener(fl, e), o.removeEventListener(ul, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(fl, e), o.addEventListener(ul, e), t.current = o);
  }
  return C.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Kf = It() ? hh : Oe;
const Vv = function() {
  var e = C.useRef(null);
  function t() {
    qt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = qt(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return C.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var Uv = [pt, Or, Tr, Ma], qv = [pt, Uf], Jf = !1, Wv = !0;
function Qf(e) {
  return e === Tr || e === Ma;
}
const Gv = function(e, t, r) {
  var n = On(cl), o = Z(n, 2), i = o[0], s = o[1], a = Vv(), c = Z(a, 2), l = c[0], u = c[1];
  function f() {
    s(pt, !0);
  }
  var d = t ? qv : Uv;
  return Kf(function() {
    if (i !== cl && i !== Ma) {
      var v = d.indexOf(i), p = d[v + 1], g = r(i);
      g === Jf ? s(p, !0) : p && l(function(h) {
        function S() {
          h.isCanceled() || s(p, !0);
        }
        g === !0 ? S() : Promise.resolve(g).then(S);
      });
    }
  }, [e, i]), C.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function Xv(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, s = n.motionAppear, a = s === void 0 ? !0 : s, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, v = n.onEnterPrepare, p = n.onLeavePrepare, g = n.onAppearStart, h = n.onEnterStart, S = n.onLeaveStart, y = n.onAppearActive, w = n.onEnterActive, x = n.onLeaveActive, b = n.onAppearEnd, O = n.onEnterEnd, E = n.onLeaveEnd, N = n.onVisibleChanged, M = On(), q = Z(M, 2), K = q[0], X = q[1], $ = Dv(zt), B = Z($, 2), H = B[0], A = B[1], _ = On(null), T = Z(_, 2), P = T[0], L = T[1], D = H(), k = ae(!1), j = ae(null);
  function F() {
    return r();
  }
  var Q = ae(!1);
  function ee() {
    A(zt), L(null, !0);
  }
  var oe = Wt(function($e) {
    var ye = H();
    if (ye !== zt) {
      var Fe = F();
      if (!($e && !$e.deadline && $e.target !== Fe)) {
        var dt = Q.current, ot;
        ye === eo && dt ? ot = b == null ? void 0 : b(Fe, $e) : ye === to && dt ? ot = O == null ? void 0 : O(Fe, $e) : ye === ro && dt && (ot = E == null ? void 0 : E(Fe, $e)), dt && ot !== !1 && ee();
      }
    }
  }), Se = Fv(oe), me = Z(Se, 1), Ie = me[0], Re = function(ye) {
    switch (ye) {
      case eo:
        return W(W(W({}, pt, d), Or, g), Tr, y);
      case to:
        return W(W(W({}, pt, v), Or, h), Tr, w);
      case ro:
        return W(W(W({}, pt, p), Or, S), Tr, x);
      default:
        return {};
    }
  }, ce = C.useMemo(function() {
    return Re(D);
  }, [D]), Qe = Gv(D, !e, function($e) {
    if ($e === pt) {
      var ye = ce[pt];
      return ye ? ye(F()) : Jf;
    }
    if (ve in ce) {
      var Fe;
      L(((Fe = ce[ve]) === null || Fe === void 0 ? void 0 : Fe.call(ce, F(), null)) || null);
    }
    return ve === Tr && D !== zt && (Ie(F()), u > 0 && (clearTimeout(j.current), j.current = setTimeout(function() {
      oe({
        deadline: !0
      });
    }, u))), ve === Uf && ee(), Wv;
  }), Y = Z(Qe, 2), Ue = Y[0], ve = Y[1], nt = Qf(ve);
  Q.current = nt;
  var Ct = ae(null);
  Kf(function() {
    if (!(k.current && Ct.current === t)) {
      X(t);
      var $e = k.current;
      k.current = !0;
      var ye;
      !$e && t && a && (ye = eo), $e && t && i && (ye = to), ($e && !t && l || !$e && f && !t && l) && (ye = ro);
      var Fe = Re(ye);
      ye && (e || Fe[pt]) ? (A(ye), Ue()) : A(zt), Ct.current = t;
    }
  }, [t]), Oe(function() {
    // Cancel appear
    (D === eo && !a || // Cancel enter
    D === to && !i || // Cancel leave
    D === ro && !l) && A(zt);
  }, [a, i, l]), Oe(function() {
    return function() {
      k.current = !1, clearTimeout(j.current);
    };
  }, []);
  var We = C.useRef(!1);
  Oe(function() {
    K && (We.current = !0), K !== void 0 && D === zt && ((We.current || K) && (N == null || N(K)), We.current = !0);
  }, [K, D]);
  var wt = P;
  return ce[pt] && ve === Or && (wt = G({
    transition: "none"
  }, wt)), [D, ve, wt, K ?? t];
}
function Yv(e) {
  var t = e;
  fe(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ C.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, d = o.motionName, v = o.leavedClassName, p = o.eventProps, g = C.useContext(Vf), h = g.motion, S = r(o, h), y = ae(), w = ae();
    function x() {
      try {
        return y.current instanceof HTMLElement ? y.current : vm(w.current);
      } catch {
        return null;
      }
    }
    var b = Xv(S, a, x, o), O = Z(b, 4), E = O[0], N = O[1], M = O[2], q = O[3], K = C.useRef(q);
    q && (K.current = !0);
    var X = C.useCallback(function(T) {
      y.current = T, Fu(i, T);
    }, [i]), $, B = G(G({}, p), {}, {
      visible: a
    });
    if (!f)
      $ = null;
    else if (E === zt)
      q ? $ = f(G({}, B), X) : !l && K.current && v ? $ = f(G(G({}, B), {}, {
        className: v
      }), X) : u || !l && !v ? $ = f(G(G({}, B), {}, {
        style: {
          display: "none"
        }
      }), X) : $ = null;
    else {
      var H;
      N === pt ? H = "prepare" : Qf(N) ? H = "active" : N === Or && (H = "start");
      var A = dl(d, "".concat(E, "-").concat(H));
      $ = f(G(G({}, B), {}, {
        className: ue(dl(d, E), W(W({}, A, A && H), d, typeof d == "string")),
        style: M
      }), X);
    }
    if (/* @__PURE__ */ C.isValidElement($) && Vu($)) {
      var _ = qu($);
      _ || ($ = /* @__PURE__ */ C.cloneElement($, {
        ref: X
      }));
    }
    return /* @__PURE__ */ C.createElement(Lv, {
      ref: w
    }, $);
  });
  return n.displayName = "CSSMotion", n;
}
const ri = Yv(Yf);
var qs = "add", Ws = "keep", Gs = "remove", zi = "removed";
function Kv(e) {
  var t;
  return e && fe(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, G(G({}, t), {}, {
    key: String(t.key)
  });
}
function Xs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Kv);
}
function Jv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = Xs(e), s = Xs(t);
  i.forEach(function(l) {
    for (var u = !1, f = n; f < o; f += 1) {
      var d = s[f];
      if (d.key === l.key) {
        n < f && (r = r.concat(s.slice(n, f).map(function(v) {
          return G(G({}, v), {}, {
            status: qs
          });
        })), n = f), r.push(G(G({}, d), {}, {
          status: Ws
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(G(G({}, l), {}, {
      status: Gs
    }));
  }), n < o && (r = r.concat(s.slice(n).map(function(l) {
    return G(G({}, l), {}, {
      status: qs
    });
  })));
  var a = {};
  r.forEach(function(l) {
    var u = l.key;
    a[u] = (a[u] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    r = r.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== l || d !== Gs;
    }), r.forEach(function(u) {
      u.key === l && (u.status = Ws);
    });
  }), r;
}
var Qv = ["component", "children", "onVisibleChanged", "onAllRemoved"], Zv = ["status"], ey = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ty(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ri, r = /* @__PURE__ */ function(n) {
    Gr(i, n);
    var o = An(i);
    function i() {
      var s;
      tt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), W(lr(s), "state", {
        keyEntities: []
      }), W(lr(s), "removeKey", function(u) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(v) {
            return v.key !== u ? v : G(G({}, v), {}, {
              status: zi
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(v) {
            var p = v.status;
            return p !== zi;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return rt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var v = pr(l, Qv), p = u || C.Fragment, g = {};
        return ey.forEach(function(h) {
          g[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ C.createElement(p, v, c.map(function(h, S) {
          var y = h.status, w = pr(h, Zv), x = y === qs || y === Ws;
          return /* @__PURE__ */ C.createElement(t, Ye({}, g, {
            key: w.key,
            visible: x,
            eventProps: w,
            onVisibleChanged: function(O) {
              d == null || d(O, {
                key: w.key
              }), O || a.removeKey(w.key);
            }
          }), function(b, O) {
            return f(G(G({}, b), {}, {
              index: S
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = Xs(l), d = Jv(u, f);
        return {
          keyEntities: d.filter(function(v) {
            var p = u.find(function(g) {
              var h = g.key;
              return v.key === h;
            });
            return !(p && p.status === zi && v.status === Gs);
          })
        };
      }
    }]), i;
  }(C.Component);
  return W(r, "defaultProps", {
    component: "div"
  }), r;
}
ty(Yf);
function ry(e) {
  const {
    children: t
  } = e, [, r] = Nn(), {
    motion: n
  } = r, o = C.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ C.createElement(Mv, {
    motion: n
  }, t) : t;
}
const Zf = /* @__PURE__ */ C.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Xt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Zf.displayName = "PropWarning");
const ny = process.env.NODE_ENV !== "production" ? Zf : () => null;
var oy = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Ys = !1;
process.env.NODE_ENV;
const iy = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let ed;
function sy() {
  return ed || No;
}
function ay(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const cy = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (ed = t), n && ay(n) && (process.env.NODE_ENV !== "production" && Pn(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), nv(sy(), n));
}, ly = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
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
    popupMatchSelectWidth: p,
    popupOverflow: g,
    legacyLocale: h,
    parentContext: S,
    iconPrefixCls: y,
    theme: w,
    componentDisabled: x,
    segmented: b,
    statistic: O,
    spin: E,
    calendar: N,
    carousel: M,
    cascader: q,
    collapse: K,
    typography: X,
    checkbox: $,
    descriptions: B,
    divider: H,
    drawer: A,
    skeleton: _,
    steps: T,
    image: P,
    layout: L,
    list: D,
    mentions: k,
    modal: j,
    progress: F,
    result: Q,
    slider: ee,
    breadcrumb: oe,
    menu: Se,
    pagination: me,
    input: Ie,
    textArea: Re,
    empty: ce,
    badge: Qe,
    radio: Y,
    rate: Ue,
    switch: ve,
    transfer: nt,
    avatar: Ct,
    message: We,
    tag: wt,
    table: $e,
    card: ye,
    tabs: Fe,
    timeline: dt,
    timePicker: ot,
    upload: mr,
    notification: Mt,
    tree: vr,
    colorPicker: Kt,
    datePicker: Jt,
    rangePicker: yr,
    flex: br,
    wave: Sr,
    dropdown: Qt,
    warning: Ce,
    tour: Ze,
    tooltip: Zt,
    popover: Zr,
    popconfirm: Mn,
    floatButtonGroup: Lt,
    variant: en,
    inputNumber: tn,
    treeSelect: Ln
  } = e, Dn = C.useCallback((xe, m) => {
    const {
      prefixCls: I
    } = e;
    if (m)
      return m;
    const z = I || S.getPrefixCls("");
    return xe ? `${z}-${xe}` : z;
  }, [S.getPrefixCls, e.prefixCls]), er = y || S.iconPrefixCls || ka, Cr = r || S.csp;
  $v(er, Cr);
  const tr = Iv(w, S.theme, {
    prefixCls: Dn("")
  });
  process.env.NODE_ENV !== "production" && (Ys = Ys || !!tr);
  const wr = {
    csp: Cr,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: l,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: p ?? v,
    popupOverflow: g,
    getPrefixCls: Dn,
    iconPrefixCls: er,
    theme: tr,
    segmented: b,
    statistic: O,
    spin: E,
    calendar: N,
    carousel: M,
    cascader: q,
    collapse: K,
    typography: X,
    checkbox: $,
    descriptions: B,
    divider: H,
    drawer: A,
    skeleton: _,
    steps: T,
    image: P,
    input: Ie,
    textArea: Re,
    layout: L,
    list: D,
    mentions: k,
    modal: j,
    progress: F,
    result: Q,
    slider: ee,
    breadcrumb: oe,
    menu: Se,
    pagination: me,
    empty: ce,
    badge: Qe,
    radio: Y,
    rate: Ue,
    switch: ve,
    transfer: nt,
    avatar: Ct,
    message: We,
    tag: wt,
    table: $e,
    card: ye,
    tabs: Fe,
    timeline: dt,
    timePicker: ot,
    upload: mr,
    notification: Mt,
    tree: vr,
    colorPicker: Kt,
    datePicker: Jt,
    rangePicker: yr,
    flex: br,
    wave: Sr,
    dropdown: Qt,
    warning: Ce,
    tour: Ze,
    tooltip: Zt,
    popover: Zr,
    popconfirm: Mn,
    floatButtonGroup: Lt,
    variant: en,
    inputNumber: tn,
    treeSelect: Ln
  };
  process.env.NODE_ENV !== "production" && Xt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Dt = Object.assign({}, S);
  Object.keys(wr).forEach((xe) => {
    wr[xe] !== void 0 && (Dt[xe] = wr[xe]);
  }), iy.forEach((xe) => {
    const m = e[xe];
    m && (Dt[xe] = m);
  }), typeof n < "u" && (Dt.button = Object.assign({
    autoInsertSpace: n
  }, Dt.button));
  const Bt = wa(() => Dt, Dt, (xe, m) => {
    const I = Object.keys(xe), z = Object.keys(m);
    return I.length !== z.length || I.some((J) => xe[J] !== m[J]);
  }), {
    layer: rn
  } = C.useContext($n), Bn = C.useMemo(() => ({
    prefixCls: er,
    csp: Cr,
    layer: rn ? "antd" : void 0
  }), [er, Cr, rn]);
  let je = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ny, {
    dropdownMatchSelectWidth: v
  }), t);
  const Hn = C.useMemo(() => {
    var xe, m, I, z;
    return M0(((xe = ei.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((I = (m = Bt.locale) === null || m === void 0 ? void 0 : m.Form) === null || I === void 0 ? void 0 : I.defaultValidateMessages) || {}, ((z = Bt.form) === null || z === void 0 ? void 0 : z.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Bt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Hn).length > 0 && (je = /* @__PURE__ */ C.createElement(D0.Provider, {
    value: Hn
  }, je)), a && (je = /* @__PURE__ */ C.createElement(Tf, {
    locale: a,
    _ANT_MARK__: Of
  }, je)), je = /* @__PURE__ */ C.createElement(Pa.Provider, {
    value: Bn
  }, je), c && (je = /* @__PURE__ */ C.createElement(iv, {
    size: c
  }, je)), je = /* @__PURE__ */ C.createElement(ry, null, je);
  const bi = C.useMemo(() => {
    const xe = tr || {}, {
      algorithm: m,
      token: I,
      components: z,
      cssVar: J
    } = xe, le = oy(xe, ["algorithm", "token", "components", "cssVar"]), de = m && (!Array.isArray(m) || m.length > 0) ? Es(m) : Nf, ie = {};
    Object.entries(z || {}).forEach((ze) => {
      let [we, Ee] = ze;
      const _e = Object.assign({}, Ee);
      "algorithm" in _e && (_e.algorithm === !0 ? _e.theme = de : (Array.isArray(_e.algorithm) || typeof _e.algorithm == "function") && (_e.theme = Es(_e.algorithm)), delete _e.algorithm), ie[we] = _e;
    });
    const ne = Object.assign(Object.assign({}, En), I);
    return Object.assign(Object.assign({}, le), {
      theme: de,
      token: ne,
      components: ie,
      override: Object.assign({
        override: ne
      }, ie),
      cssVar: J
    });
  }, [tr]);
  return w && (je = /* @__PURE__ */ C.createElement(kf.Provider, {
    value: bi
  }, je)), Bt.warning && (je = /* @__PURE__ */ C.createElement(Ef.Provider, {
    value: Bt.warning
  }, je)), x !== void 0 && (je = /* @__PURE__ */ C.createElement(ov, {
    disabled: x
  }, je)), /* @__PURE__ */ C.createElement(bt.Provider, {
    value: Bt
  }, je);
}, Yr = (e) => {
  const t = C.useContext(bt), r = C.useContext(_f);
  return /* @__PURE__ */ C.createElement(ly, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Yr.ConfigContext = bt;
Yr.SizeContext = zr;
Yr.config = cy;
Yr.useConfig = sv;
Object.defineProperty(Yr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Pn(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), zr)
});
process.env.NODE_ENV !== "production" && (Yr.displayName = "ConfigProvider");
function td(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function uy(e) {
  return td(e) instanceof ShadowRoot;
}
function fy(e) {
  return uy(e) ? td(e) : null;
}
function dy(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function hy(e, t) {
  Gt(e, "[@ant-design/icons] ".concat(t));
}
function hl(e) {
  return fe(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (fe(e.icon) === "object" || typeof e.icon == "function");
}
function pl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[dy(r)] = n;
    }
    return t;
  }, {});
}
function Ks(e, t, r) {
  return r ? /* @__PURE__ */ U.createElement(e.tag, G(G({
    key: t
  }, pl(e.attrs)), r), (e.children || []).map(function(n, o) {
    return Ks(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ U.createElement(e.tag, G({
    key: t
  }, pl(e.attrs)), (e.children || []).map(function(n, o) {
    return Ks(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function rd(e) {
  return _n(e)[0];
}
function nd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var py = `
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
`, gy = function(t) {
  var r = lt(Pa), n = r.csp, o = r.prefixCls, i = r.layer, s = py;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Oe(function() {
    var a = t.current, c = fy(a);
    ur(s, "@ant-design-icons", {
      prepend: !i,
      csp: n,
      attachTo: c
    });
  }, []);
}, my = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], bn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function vy(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  bn.primaryColor = t, bn.secondaryColor = r || rd(t), bn.calculated = !!r;
}
function yy() {
  return G({}, bn);
}
var Kr = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = pr(t, my), l = C.useRef(), u = bn;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || rd(s)
  }), gy(l), hy(hl(r), "icon should be icon definiton, but got ".concat(r)), !hl(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = G(G({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), Ks(f.icon, "svg-".concat(f.name), G(G({
    className: n,
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
Kr.displayName = "IconReact";
Kr.getTwoToneColors = yy;
Kr.setTwoToneColors = vy;
function od(e) {
  var t = nd(e), r = Z(t, 2), n = r[0], o = r[1];
  return Kr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function by() {
  var e = Kr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Sy = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
od(Po.primary);
var jt = /* @__PURE__ */ C.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = pr(e, Sy), u = C.useContext(Pa), f = u.prefixCls, d = f === void 0 ? "anticon" : f, v = u.rootClassName, p = ue(v, d, W(W({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!o || n.name === "loading"), r), g = s;
  g === void 0 && a && (g = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = nd(c), y = Z(S, 2), w = y[0], x = y[1];
  return /* @__PURE__ */ C.createElement("span", Ye({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: g,
    onClick: a,
    className: p
  }), /* @__PURE__ */ C.createElement(Kr, {
    icon: n,
    primaryColor: w,
    secondaryColor: x,
    style: h
  }));
});
jt.displayName = "AntdIcon";
jt.getTwoToneColor = by;
jt.setTwoToneColor = od;
var Cy = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: og
  }));
}, id = /* @__PURE__ */ C.forwardRef(Cy);
process.env.NODE_ENV !== "production" && (id.displayName = "CheckCircleFilled");
var wy = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: ig
  }));
}, sd = /* @__PURE__ */ C.forwardRef(wy);
process.env.NODE_ENV !== "production" && (sd.displayName = "CloseCircleFilled");
var xy = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: sg
  }));
}, ad = /* @__PURE__ */ C.forwardRef(xy);
process.env.NODE_ENV !== "production" && (ad.displayName = "CloseOutlined");
var Ey = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: ag
  }));
}, cd = /* @__PURE__ */ C.forwardRef(Ey);
process.env.NODE_ENV !== "production" && (cd.displayName = "ExclamationCircleFilled");
var _y = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: cg
  }));
}, ld = /* @__PURE__ */ C.forwardRef(_y);
process.env.NODE_ENV !== "production" && (ld.displayName = "InfoCircleFilled");
var Oy = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Ty = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Ry = "".concat(Oy, " ").concat(Ty).split(/[\s\n]+/), Ay = "aria-", $y = "data-";
function gl(e, t) {
  return e.indexOf(t) === 0;
}
function Py(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = G({}, t);
  var n = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (r.aria && (o === "role" || gl(o, Ay)) || // Data
    r.data && gl(o, $y) || // Attr
    r.attr && Ry.includes(o)) && (n[o] = e[o]);
  }), n;
}
function Ny(e) {
  return e && /* @__PURE__ */ U.isValidElement(e) && e.type === U.Fragment;
}
const ud = (e, t, r) => /* @__PURE__ */ U.isValidElement(e) ? /* @__PURE__ */ U.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function La(e, t) {
  return ud(e, e, t);
}
const oo = (e, t, r, n, o) => ({
  background: e,
  border: `${Nt(n.lineWidth)} ${n.lineType} ${t}`,
  [`${o}-icon`]: {
    color: r
  }
}), ky = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r,
    marginXS: n,
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
    defaultPadding: p
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Hf(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: p,
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
        marginInlineEnd: n,
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
        transition: `max-height ${r} ${l}, opacity ${r} ${l},
        padding-top ${r} ${l}, padding-bottom ${r} ${l},
        margin-bottom ${r} ${l}`
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
        marginBottom: n,
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
}, Iy = (e) => {
  const {
    componentCls: t,
    colorSuccess: r,
    colorSuccessBorder: n,
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
  } = e;
  return {
    [t]: {
      "&-success": oo(o, n, r, e, t),
      "&-info": oo(v, d, f, e, t),
      "&-warning": oo(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, oo(u, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, jy = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    motionDurationMid: n,
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
        lineHeight: Nt(i),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${r}-close`]: {
          color: s,
          transition: `color ${n}`,
          "&:hover": {
            color: a
          }
        }
      },
      "&-close-text": {
        color: s,
        transition: `color ${n}`,
        "&:hover": {
          color: a
        }
      }
    }
  };
}, My = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Ly = ti("Alert", (e) => [ky(e), Iy(e), jy(e)], My);
var ml = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Dy = {
  success: id,
  info: ld,
  error: sd,
  warning: cd
}, By = (e) => {
  const {
    icon: t,
    prefixCls: r,
    type: n
  } = e, o = Dy[n] || null;
  return t ? ud(t, /* @__PURE__ */ C.createElement("span", {
    className: `${r}-icon`
  }, t), () => ({
    className: ue(`${r}-icon`, t.props.className)
  })) : /* @__PURE__ */ C.createElement(o, {
    className: `${r}-icon`
  });
}, Hy = (e) => {
  const {
    isClosable: t,
    prefixCls: r,
    closeIcon: n,
    handleClose: o,
    ariaProps: i
  } = e, s = n === !0 || n === void 0 ? /* @__PURE__ */ C.createElement(ad, null) : n;
  return t ? /* @__PURE__ */ C.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${r}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Da = /* @__PURE__ */ C.forwardRef((e, t) => {
  const {
    description: r,
    prefixCls: n,
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
    closable: p,
    closeText: g,
    closeIcon: h,
    action: S,
    id: y
  } = e, w = ml(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [x, b] = C.useState(!1);
  process.env.NODE_ENV !== "production" && Xt("Alert").deprecated(!g, "closeText", "closable.closeIcon");
  const O = C.useRef(null);
  C.useImperativeHandle(t, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: E,
    direction: N,
    closable: M,
    closeIcon: q,
    className: K,
    style: X
  } = Ia("alert"), $ = E("alert", n), [B, H, A] = Ly($), _ = (Q) => {
    var ee;
    b(!0), (ee = e.onClose) === null || ee === void 0 || ee.call(e, Q);
  }, T = C.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), P = C.useMemo(() => typeof p == "object" && p.closeIcon || g ? !0 : typeof p == "boolean" ? p : h !== !1 && h !== null && h !== void 0 ? !0 : !!M, [g, h, p, M]), L = i && v === void 0 ? !0 : v, D = ue($, `${$}-${T}`, {
    [`${$}-with-description`]: !!r,
    [`${$}-no-icon`]: !L,
    [`${$}-banner`]: !!i,
    [`${$}-rtl`]: N === "rtl"
  }, K, s, a, A, H), k = Py(w, {
    aria: !0,
    data: !0
  }), j = C.useMemo(() => typeof p == "object" && p.closeIcon ? p.closeIcon : g || (h !== void 0 ? h : typeof M == "object" && M.closeIcon ? M.closeIcon : q), [h, p, g, q]), F = C.useMemo(() => {
    const Q = p ?? M;
    if (typeof Q == "object") {
      const {
        closeIcon: ee
      } = Q;
      return ml(Q, ["closeIcon"]);
    }
    return {};
  }, [p, M]);
  return B(/* @__PURE__ */ C.createElement(ri, {
    visible: !x,
    motionName: `${$}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (Q) => ({
      maxHeight: Q.offsetHeight
    }),
    onLeaveEnd: d
  }, (Q, ee) => {
    let {
      className: oe,
      style: Se
    } = Q;
    return /* @__PURE__ */ C.createElement("div", Object.assign({
      id: y,
      ref: Yo(O, ee),
      "data-show": !x,
      className: ue(D, oe),
      style: Object.assign(Object.assign(Object.assign({}, X), c), Se),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, k), L ? /* @__PURE__ */ C.createElement(By, {
      description: r,
      icon: e.icon,
      prefixCls: $,
      type: T
    }) : null, /* @__PURE__ */ C.createElement("div", {
      className: `${$}-content`
    }, o ? /* @__PURE__ */ C.createElement("div", {
      className: `${$}-message`
    }, o) : null, r ? /* @__PURE__ */ C.createElement("div", {
      className: `${$}-description`
    }, r) : null), S ? /* @__PURE__ */ C.createElement("div", {
      className: `${$}-action`
    }, S) : null, /* @__PURE__ */ C.createElement(Hy, {
      isClosable: P,
      prefixCls: $,
      closeIcon: j,
      handleClose: _,
      ariaProps: F
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Da.displayName = "Alert");
function zy(e, t, r) {
  return t = Lr(t), Wu(e, xa() ? Reflect.construct(t, r || [], Lr(e).constructor) : t.apply(e, r));
}
let Fy = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    return tt(this, t), r = zy(this, t, arguments), r.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, r;
  }
  return Gr(t, e), rt(t, [{
    key: "componentDidCatch",
    value: function(n, o) {
      this.setState({
        error: n,
        info: o
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: n,
        description: o,
        id: i,
        children: s
      } = this.props, {
        error: a,
        info: c
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, u = typeof n > "u" ? (a || "").toString() : n, f = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ C.createElement(Da, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ C.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, f)
      }) : s;
    }
  }]);
}(C.Component);
const fd = Da;
fd.ErrorBoundary = Fy;
var Vy = function(t, r) {
  return /* @__PURE__ */ C.createElement(jt, Ye({}, t, {
    ref: r,
    icon: lg
  }));
}, dd = /* @__PURE__ */ C.forwardRef(Vy);
process.env.NODE_ENV !== "production" && (dd.displayName = "LoadingOutlined");
function Tn() {
  Tn = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(A, _, T) {
    A[_] = T.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(A, _, T) {
    return Object.defineProperty(A, _, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), A[_];
  }
  try {
    l({}, "");
  } catch {
    l = function(T, P, L) {
      return T[P] = L;
    };
  }
  function u(A, _, T, P) {
    var L = _ && _.prototype instanceof S ? _ : S, D = Object.create(L.prototype), k = new B(P || []);
    return o(D, "_invoke", {
      value: q(A, T, k)
    }), D;
  }
  function f(A, _, T) {
    try {
      return {
        type: "normal",
        arg: A.call(_, T)
      };
    } catch (P) {
      return {
        type: "throw",
        arg: P
      };
    }
  }
  t.wrap = u;
  var d = "suspendedStart", v = "suspendedYield", p = "executing", g = "completed", h = {};
  function S() {
  }
  function y() {
  }
  function w() {
  }
  var x = {};
  l(x, s, function() {
    return this;
  });
  var b = Object.getPrototypeOf, O = b && b(b(H([])));
  O && O !== r && n.call(O, s) && (x = O);
  var E = w.prototype = S.prototype = Object.create(x);
  function N(A) {
    ["next", "throw", "return"].forEach(function(_) {
      l(A, _, function(T) {
        return this._invoke(_, T);
      });
    });
  }
  function M(A, _) {
    function T(L, D, k, j) {
      var F = f(A[L], A, D);
      if (F.type !== "throw") {
        var Q = F.arg, ee = Q.value;
        return ee && fe(ee) == "object" && n.call(ee, "__await") ? _.resolve(ee.__await).then(function(oe) {
          T("next", oe, k, j);
        }, function(oe) {
          T("throw", oe, k, j);
        }) : _.resolve(ee).then(function(oe) {
          Q.value = oe, k(Q);
        }, function(oe) {
          return T("throw", oe, k, j);
        });
      }
      j(F.arg);
    }
    var P;
    o(this, "_invoke", {
      value: function(D, k) {
        function j() {
          return new _(function(F, Q) {
            T(D, k, F, Q);
          });
        }
        return P = P ? P.then(j, j) : j();
      }
    });
  }
  function q(A, _, T) {
    var P = d;
    return function(L, D) {
      if (P === p) throw Error("Generator is already running");
      if (P === g) {
        if (L === "throw") throw D;
        return {
          value: e,
          done: !0
        };
      }
      for (T.method = L, T.arg = D; ; ) {
        var k = T.delegate;
        if (k) {
          var j = K(k, T);
          if (j) {
            if (j === h) continue;
            return j;
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (P === d) throw P = g, T.arg;
          T.dispatchException(T.arg);
        } else T.method === "return" && T.abrupt("return", T.arg);
        P = p;
        var F = f(A, _, T);
        if (F.type === "normal") {
          if (P = T.done ? g : v, F.arg === h) continue;
          return {
            value: F.arg,
            done: T.done
          };
        }
        F.type === "throw" && (P = g, T.method = "throw", T.arg = F.arg);
      }
    };
  }
  function K(A, _) {
    var T = _.method, P = A.iterator[T];
    if (P === e) return _.delegate = null, T === "throw" && A.iterator.return && (_.method = "return", _.arg = e, K(A, _), _.method === "throw") || T !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + T + "' method")), h;
    var L = f(P, A.iterator, _.arg);
    if (L.type === "throw") return _.method = "throw", _.arg = L.arg, _.delegate = null, h;
    var D = L.arg;
    return D ? D.done ? (_[A.resultName] = D.value, _.next = A.nextLoc, _.method !== "return" && (_.method = "next", _.arg = e), _.delegate = null, h) : D : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, h);
  }
  function X(A) {
    var _ = {
      tryLoc: A[0]
    };
    1 in A && (_.catchLoc = A[1]), 2 in A && (_.finallyLoc = A[2], _.afterLoc = A[3]), this.tryEntries.push(_);
  }
  function $(A) {
    var _ = A.completion || {};
    _.type = "normal", delete _.arg, A.completion = _;
  }
  function B(A) {
    this.tryEntries = [{
      tryLoc: "root"
    }], A.forEach(X, this), this.reset(!0);
  }
  function H(A) {
    if (A || A === "") {
      var _ = A[s];
      if (_) return _.call(A);
      if (typeof A.next == "function") return A;
      if (!isNaN(A.length)) {
        var T = -1, P = function L() {
          for (; ++T < A.length; ) if (n.call(A, T)) return L.value = A[T], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return P.next = P;
      }
    }
    throw new TypeError(fe(A) + " is not iterable");
  }
  return y.prototype = w, o(E, "constructor", {
    value: w,
    configurable: !0
  }), o(w, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = l(w, c, "GeneratorFunction"), t.isGeneratorFunction = function(A) {
    var _ = typeof A == "function" && A.constructor;
    return !!_ && (_ === y || (_.displayName || _.name) === "GeneratorFunction");
  }, t.mark = function(A) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(A, w) : (A.__proto__ = w, l(A, c, "GeneratorFunction")), A.prototype = Object.create(E), A;
  }, t.awrap = function(A) {
    return {
      __await: A
    };
  }, N(M.prototype), l(M.prototype, a, function() {
    return this;
  }), t.AsyncIterator = M, t.async = function(A, _, T, P, L) {
    L === void 0 && (L = Promise);
    var D = new M(u(A, _, T, P), L);
    return t.isGeneratorFunction(_) ? D : D.next().then(function(k) {
      return k.done ? k.value : D.next();
    });
  }, N(E), l(E, c, "Generator"), l(E, s, function() {
    return this;
  }), l(E, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(A) {
    var _ = Object(A), T = [];
    for (var P in _) T.push(P);
    return T.reverse(), function L() {
      for (; T.length; ) {
        var D = T.pop();
        if (D in _) return L.value = D, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = H, B.prototype = {
    constructor: B,
    reset: function(_) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach($), !_) for (var T in this) T.charAt(0) === "t" && n.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = e);
    },
    stop: function() {
      this.done = !0;
      var _ = this.tryEntries[0].completion;
      if (_.type === "throw") throw _.arg;
      return this.rval;
    },
    dispatchException: function(_) {
      if (this.done) throw _;
      var T = this;
      function P(Q, ee) {
        return k.type = "throw", k.arg = _, T.next = Q, ee && (T.method = "next", T.arg = e), !!ee;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var D = this.tryEntries[L], k = D.completion;
        if (D.tryLoc === "root") return P("end");
        if (D.tryLoc <= this.prev) {
          var j = n.call(D, "catchLoc"), F = n.call(D, "finallyLoc");
          if (j && F) {
            if (this.prev < D.catchLoc) return P(D.catchLoc, !0);
            if (this.prev < D.finallyLoc) return P(D.finallyLoc);
          } else if (j) {
            if (this.prev < D.catchLoc) return P(D.catchLoc, !0);
          } else {
            if (!F) throw Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc) return P(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(_, T) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var L = this.tryEntries[P];
        if (L.tryLoc <= this.prev && n.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var D = L;
          break;
        }
      }
      D && (_ === "break" || _ === "continue") && D.tryLoc <= T && T <= D.finallyLoc && (D = null);
      var k = D ? D.completion : {};
      return k.type = _, k.arg = T, D ? (this.method = "next", this.next = D.finallyLoc, h) : this.complete(k);
    },
    complete: function(_, T) {
      if (_.type === "throw") throw _.arg;
      return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && T && (this.next = T), h;
    },
    finish: function(_) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var P = this.tryEntries[T];
        if (P.finallyLoc === _) return this.complete(P.completion, P.afterLoc), $(P), h;
      }
    },
    catch: function(_) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var P = this.tryEntries[T];
        if (P.tryLoc === _) {
          var L = P.completion;
          if (L.type === "throw") {
            var D = L.arg;
            $(P);
          }
          return D;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(_, T, P) {
      return this.delegate = {
        iterator: H(_),
        resultName: T,
        nextLoc: P
      }, this.method === "next" && (this.arg = e), h;
    }
  }, t;
}
function vl(e, t, r, n, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void r(l);
  }
  a.done ? t(c) : Promise.resolve(c).then(n, o);
}
function hd(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function s(c) {
        vl(i, n, o, s, a, "next", c);
      }
      function a(c) {
        vl(i, n, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var kn = G({}, Vl), Uy = kn.version, Fi = kn.render, qy = kn.unmountComponentAtNode, ni;
try {
  var Wy = Number((Uy || "").split(".")[0]);
  Wy >= 18 && (ni = kn.createRoot);
} catch {
}
function yl(e) {
  var t = kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && fe(t) === "object" && (t.usingClientEntryPoint = e);
}
var Io = "__rc_react_root__";
function Gy(e, t) {
  yl(!0);
  var r = t[Io] || ni(t);
  yl(!1), r.render(e), t[Io] = r;
}
function Xy(e, t) {
  Fi == null || Fi(e, t);
}
function Yy(e, t) {
  if (ni) {
    Gy(e, t);
    return;
  }
  Xy(e, t);
}
function Ky(e) {
  return Js.apply(this, arguments);
}
function Js() {
  return Js = hd(/* @__PURE__ */ Tn().mark(function e(t) {
    return Tn().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Io]) === null || o === void 0 || o.unmount(), delete t[Io];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Js.apply(this, arguments);
}
function Jy(e) {
  qy(e);
}
function Qy(e) {
  return Qs.apply(this, arguments);
}
function Qs() {
  return Qs = hd(/* @__PURE__ */ Tn().mark(function e(t) {
    return Tn().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (ni === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Ky(t));
        case 2:
          Jy(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Qs.apply(this, arguments);
}
const Zy = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const r = parseInt(C.version.split(".")[0], 10), n = Object.keys(Vl);
    process.env.NODE_ENV !== "production" && Pn(r < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Yy(e, t), () => Qy(t);
};
let eb = Zy;
function tb() {
  return eb;
}
function pd(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const rb = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, nb = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
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
}, ob = Rv("Wave", (e) => [nb(e)]), gd = `${No}-wave-target`;
function Vi(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function ib(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Vi(t) ? t : Vi(r) ? r : Vi(n) ? n : null;
}
function Ui(e) {
  return Number.isNaN(e) ? 0 : e;
}
const sb = (e) => {
  const {
    className: t,
    target: r,
    component: n,
    registerUnmount: o
  } = e, i = C.useRef(null), s = C.useRef(null);
  C.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = C.useState(null), [l, u] = C.useState([]), [f, d] = C.useState(0), [v, p] = C.useState(0), [g, h] = C.useState(0), [S, y] = C.useState(0), [w, x] = C.useState(!1), b = {
    left: f,
    top: v,
    width: g,
    height: S,
    borderRadius: l.map((N) => `${N}px`).join(" ")
  };
  a && (b["--wave-color"] = a);
  function O() {
    const N = getComputedStyle(r);
    c(ib(r));
    const M = N.position === "static", {
      borderLeftWidth: q,
      borderTopWidth: K
    } = N;
    d(M ? r.offsetLeft : Ui(-parseFloat(q))), p(M ? r.offsetTop : Ui(-parseFloat(K))), h(r.offsetWidth), y(r.offsetHeight);
    const {
      borderTopLeftRadius: X,
      borderTopRightRadius: $,
      borderBottomLeftRadius: B,
      borderBottomRightRadius: H
    } = N;
    u([X, $, H, B].map((A) => Ui(parseFloat(A))));
  }
  if (C.useEffect(() => {
    if (r) {
      const N = qt(() => {
        O(), x(!0);
      });
      let M;
      return typeof ResizeObserver < "u" && (M = new ResizeObserver(O), M.observe(r)), () => {
        qt.cancel(N), M == null || M.disconnect();
      };
    }
  }, []), !w)
    return null;
  const E = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(gd));
  return /* @__PURE__ */ C.createElement(ri, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (N, M) => {
      var q, K;
      if (M.deadline || M.propertyName === "opacity") {
        const X = (q = i.current) === null || q === void 0 ? void 0 : q.parentElement;
        (K = s.current) === null || K === void 0 || K.call(s).then(() => {
          X == null || X.remove();
        });
      }
      return !1;
    }
  }, (N, M) => {
    let {
      className: q
    } = N;
    return /* @__PURE__ */ C.createElement("div", {
      ref: Yo(i, M),
      className: ue(t, q, {
        "wave-quick": E
      }),
      style: b
    });
  });
}, ab = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = tb();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ C.createElement(sb, Object.assign({}, t, {
    target: e,
    registerUnmount: a
  })), o);
}, cb = (e, t, r) => {
  const {
    wave: n
  } = C.useContext(bt), [, o, i] = Nn(), s = Wt((l) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${gd}`) || u, {
      showEffect: d
    } = n || {};
    (d || ab)(f, {
      className: t,
      token: o,
      component: r,
      event: l,
      hashId: i
    });
  }), a = C.useRef(null);
  return (l) => {
    qt.cancel(a.current), a.current = qt(() => {
      s(l);
    });
  };
}, md = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = lt(bt), i = ae(null), s = o("wave"), [, a] = ob(s), c = cb(i, ue(s, a), n);
  if (U.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !rb(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ U.isValidElement(t))
    return t ?? null;
  const l = Vu(t) ? Yo(qu(t), i) : i;
  return La(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (md.displayName = "Wave");
const lb = (e) => {
  const t = U.useContext(zr);
  return U.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, ub = /* @__PURE__ */ C.createContext(null), fb = (e, t) => {
  const r = C.useContext(ub), n = C.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = r, a = o === "vertical" ? "-vertical-" : "-";
    return ue(`${e}-compact${a}item`, {
      [`${e}-compact${a}first-item`]: i,
      [`${e}-compact${a}last-item`]: s,
      [`${e}-compact${a}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
};
var db = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const vd = /* @__PURE__ */ C.createContext(void 0), hb = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = C.useContext(bt), {
    prefixCls: n,
    size: o,
    className: i
  } = e, s = db(e, ["prefixCls", "size", "className"]), a = t("btn-group", n), [, , c] = Nn(), l = C.useMemo(() => {
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
    const f = Xt("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = ue(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: r === "rtl"
  }, i, c);
  return /* @__PURE__ */ C.createElement(vd.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, bl = /^[\u4E00-\u9FA5]{2}$/, Zs = bl.test.bind(bl);
function Sl(e) {
  return typeof e == "string";
}
function io(e) {
  return e === "text" || e === "link";
}
function pb(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Sl(e.type) && Zs(e.props.children) ? La(e, {
    children: e.props.children.split("").join(r)
  }) : Sl(e) ? Zs(e) ? /* @__PURE__ */ U.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ U.createElement("span", null, e) : Ny(e) ? /* @__PURE__ */ U.createElement("span", null, e) : e;
}
function gb(e, t) {
  let r = !1;
  const n = [];
  return U.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (r && s) {
      const a = n.length - 1, c = n[a];
      n[a] = `${c}${o}`;
    } else
      n.push(o);
    r = s;
  }), U.Children.map(n, (o) => pb(o, t));
}
["default", "primary", "danger"].concat(Tt(ja));
const ea = /* @__PURE__ */ Fr((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, s = ue(`${i}-icon`, r);
  return /* @__PURE__ */ U.createElement("span", {
    ref: t,
    className: s,
    style: n
  }, o);
}), Cl = /* @__PURE__ */ Fr((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e, s = ue(`${r}-loading-icon`, n);
  return /* @__PURE__ */ U.createElement(ea, {
    prefixCls: r,
    className: s,
    style: o,
    ref: t
  }, /* @__PURE__ */ U.createElement(dd, {
    className: i
  }));
}), qi = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Wi = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), mb = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i,
    mount: s
  } = e, a = !!r;
  return n ? /* @__PURE__ */ U.createElement(Cl, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ U.createElement(ri, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: qi,
    onAppearActive: Wi,
    onEnterStart: qi,
    onEnterActive: Wi,
    onLeaveStart: Wi,
    onLeaveActive: qi
  }, (c, l) => {
    let {
      className: u,
      style: f
    } = c;
    const d = Object.assign(Object.assign({}, i), f);
    return /* @__PURE__ */ U.createElement(Cl, {
      prefixCls: t,
      className: ue(o, u),
      style: d,
      ref: l
    });
  });
}, wl = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), vb = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      wl(`${t}-primary`, o),
      wl(`${t}-danger`, i)
    ]
  };
}, Be = Math.round;
function Gi(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const xl = (e, t, r) => r === 0 ? e : e / 100;
function fn(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class oi {
  constructor(t) {
    W(this, "isValid", !0), W(this, "r", 0), W(this, "g", 0), W(this, "b", 0), W(this, "a", 1), W(this, "_h", void 0), W(this, "_s", void 0), W(this, "_l", void 0), W(this, "_v", void 0), W(this, "_max", void 0), W(this, "_min", void 0), W(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof oi)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = fn(t.r), this.g = fn(t.g), this.b = fn(t.b), this.a = typeof t.a == "number" ? fn(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
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
    const r = this.toHsv();
    return r.h = t, this._c(r);
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
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Be(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, i = (a) => (n[a] - this[a]) * o + this[a], s = {
      r: Be(i("r")),
      g: Be(i("g")),
      b: Be(i("b")),
      a: Be(i("a") * 100) / 100
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (i) => Be((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = Be(this.a * 255).toString(16);
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
    const t = this.getHue(), r = Be(this.getSaturation() * 100), n = Be(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = fn(r, n), o;
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
    const r = t.replace("#", "");
    function n(o, i) {
      return parseInt(r[o] + r[i || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const d = Be(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = n - l / 2;
    this.r = Be((i + f) * 255), this.g = Be((s + f) * 255), this.b = Be((a + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = Be(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = Be(n * (1 - r) * 255), u = Be(n * (1 - r * c) * 255), f = Be(n * (1 - r * (1 - c)) * 255);
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
    const r = Gi(t, xl);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Gi(t, xl);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Gi(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Be(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var yb = ["b"], bb = ["v"], Xi = function(t) {
  return Math.round(Number(t || 0));
}, Sb = function(t) {
  if (t instanceof oi)
    return t;
  if (t && fe(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = pr(r, yb);
    return G(G({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, kt = /* @__PURE__ */ function(e) {
  Gr(r, e);
  var t = An(r);
  function r(n) {
    return tt(this, r), t.call(this, Sb(n));
  }
  return rt(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Xi(o.s * 100), s = Xi(o.b * 100), a = Xi(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = pr(o, bb);
      return G(G({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), r;
}(oi), Cb = "rc-color-picker", $r = function(t) {
  return t instanceof kt ? t : new kt(t);
}, wb = $r("#1677ff"), yd = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, i = t.color, s = t.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = n.current.getBoundingClientRect(), f = u.width, d = u.height, v = f / 2, p = d / 2, g = (r.x + v) / c, h = 1 - (r.y + p) / l, S = i.toHsb(), y = g, w = (r.x + v) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return $r(G(G({}, S), {}, {
          h: w <= 0 ? 0 : w
        }));
      case "alpha":
        return $r(G(G({}, S), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return $r({
    h: S.h,
    s: g <= 0 ? 0 : g,
    b: h >= 1 ? 1 : h,
    a: S.a
  });
}, bd = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, xb = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, i = t.style, s = t.onClick, a = "".concat(n, "-color-block");
  return /* @__PURE__ */ U.createElement("div", {
    className: ue(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: r
    }
  }));
};
function Eb(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Sd(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = qe({
    x: 0,
    y: 0
  }), u = Z(l, 2), f = u[0], d = u[1], v = ae(null), p = ae(null);
  Oe(function() {
    d(s());
  }, [a]), Oe(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", p.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", p.current), v.current = null, p.current = null;
    };
  }, []);
  var g = function(x) {
    var b = Eb(x), O = b.pageX, E = b.pageY, N = r.current.getBoundingClientRect(), M = N.x, q = N.y, K = N.width, X = N.height, $ = t.current.getBoundingClientRect(), B = $.width, H = $.height, A = B / 2, _ = H / 2, T = Math.max(0, Math.min(O - M, K)) - A, P = Math.max(0, Math.min(E - q, X)) - _, L = {
      x: T,
      y: n === "x" ? f.y : P
    };
    if (B === 0 && H === 0 || B !== H)
      return !1;
    o == null || o(L);
  }, h = function(x) {
    x.preventDefault(), g(x);
  }, S = function(x) {
    x.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", p.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", p.current), v.current = null, p.current = null, i == null || i();
  }, y = function(x) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", p.current), !c && (g(x), document.addEventListener("mousemove", h), document.addEventListener("mouseup", S), document.addEventListener("touchmove", h), document.addEventListener("touchend", S), v.current = h, p.current = S);
  };
  return [f, y];
}
var Cd = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, i = t.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: ue("".concat(i, "-handler"), W({}, "".concat(i, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, wd = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-palette"),
    style: G({
      position: "relative"
    }, n)
  }, r);
}, xd = /* @__PURE__ */ Fr(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ U.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), _b = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, i = t.onChangeComplete, s = t.disabled, a = ae(), c = ae(), l = ae(r), u = Wt(function(g) {
    var h = yd({
      offset: g,
      targetRef: c,
      containerRef: a,
      color: r
    });
    l.current = h, n(h);
  }), f = Sd({
    color: r,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return bd(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), d = Z(f, 2), v = d[0], p = d[1];
  return /* @__PURE__ */ U.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: p,
    onTouchStart: p
  }, /* @__PURE__ */ U.createElement(wd, {
    prefixCls: o
  }, /* @__PURE__ */ U.createElement(xd, {
    x: v.x,
    y: v.y,
    ref: c
  }, /* @__PURE__ */ U.createElement(Cd, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Ob = function(t, r) {
  var n = fv(t, {
    value: r
  }), o = Z(n, 2), i = o[0], s = o[1], a = Cn(function() {
    return $r(i);
  }, [i]);
  return [a, s];
}, Tb = function(t) {
  var r = t.colors, n = t.children, o = t.direction, i = o === void 0 ? "to right" : o, s = t.type, a = t.prefixCls, c = Cn(function() {
    return r.map(function(l, u) {
      var f = $r(l);
      return s === "alpha" && u === r.length - 1 && (f = new kt(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [r, s]);
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, n);
}, Rb = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, i = t.onChange, s = t.onChangeComplete, a = t.color, c = t.type, l = ae(), u = ae(), f = ae(a), d = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, v = Wt(function(x) {
    var b = yd({
      offset: x,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    f.current = b, i(d(b));
  }), p = Sd({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return bd(a, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      s(d(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = Z(p, 2), h = g[0], S = g[1], y = U.useMemo(function() {
    if (c === "hue") {
      var x = a.toHsb();
      x.s = 1, x.b = 1, x.a = 1;
      var b = new kt(x);
      return b;
    }
    return a;
  }, [a, c]), w = U.useMemo(function() {
    return n.map(function(x) {
      return "".concat(x.color, " ").concat(x.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ U.createElement("div", {
    ref: l,
    className: ue("".concat(r, "-slider"), "".concat(r, "-slider-").concat(c)),
    onMouseDown: S,
    onTouchStart: S
  }, /* @__PURE__ */ U.createElement(wd, {
    prefixCls: r
  }, /* @__PURE__ */ U.createElement(xd, {
    x: h.x,
    y: h.y,
    ref: u
  }, /* @__PURE__ */ U.createElement(Cd, {
    size: "small",
    color: y.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ U.createElement(Tb, {
    colors: w,
    type: c,
    prefixCls: r
  })));
};
function Ab(e) {
  return C.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || Rb];
  }, [e]);
}
var $b = [{
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
}], Pb = /* @__PURE__ */ Fr(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, i = o === void 0 ? Cb : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, v = e.disabled, p = v === void 0 ? !1 : v, g = e.components, h = Ab(g), S = Z(h, 1), y = S[0], w = Ob(n || wb, r), x = Z(w, 2), b = x[0], O = x[1], E = Cn(function() {
    return b.setA(1).toRgbString();
  }, [b]), N = function(P, L) {
    r || O(P), s == null || s(P, L);
  }, M = function(P) {
    return new kt(b.setHue(P));
  }, q = function(P) {
    return new kt(b.setA(P / 100));
  }, K = function(P) {
    N(M(P), {
      type: "hue",
      value: P
    });
  }, X = function(P) {
    N(q(P), {
      type: "alpha",
      value: P
    });
  }, $ = function(P) {
    a && a(M(P));
  }, B = function(P) {
    a && a(q(P));
  }, H = ue("".concat(i, "-panel"), c, W({}, "".concat(i, "-panel-disabled"), p)), A = {
    prefixCls: i,
    disabled: p,
    color: b
  }, _ = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(_b, Ye({
    onChange: N
  }, A, {
    onChangeComplete: a
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ U.createElement("div", {
    className: ue("".concat(i, "-slider-group"), W({}, "".concat(i, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ U.createElement(y, Ye({}, A, {
    type: "hue",
    colors: $b,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: K,
    onChangeComplete: $
  })), !d && /* @__PURE__ */ U.createElement(y, Ye({}, A, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: E
    }],
    min: 0,
    max: 100,
    value: b.a * 100,
    onChange: X,
    onChangeComplete: B
  }))), /* @__PURE__ */ U.createElement(xb, {
    color: b.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ U.createElement("div", {
    className: H,
    style: l,
    ref: t
  }, typeof u == "function" ? u(_) : _);
});
process.env.NODE_ENV !== "production" && (Pb.displayName = "ColorPicker");
const Nb = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", kb = (e, t) => e ? Nb(e, t) : "";
let Ib = /* @__PURE__ */ function() {
  function e(t) {
    tt(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map((o) => {
      let {
        color: i,
        percent: s
      } = o;
      return {
        color: new e(i),
        percent: s
      };
    }), this.metaColor = new kt(this.colors[0].color.metaColor)) : this.metaColor = new kt(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return rt(e, [{
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
      return kb(this.toHexString(), this.metaColor.a < 1);
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
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, o) => {
        const i = r.colors[o];
        return n.percent === i.percent && n.color.equals(i.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
const jb = (e, t) => {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = e.toRgb(), s = new kt(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? s.v > 0.5 : r * 0.299 + n * 0.587 + o * 0.114 > 192;
}, Ed = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return Yt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: r
  });
}, _d = (e) => {
  var t, r, n, o, i, s;
  const a = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : xo(a), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : xo(c), d = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : xo(l), v = jb(new Ib(e.colorBgSolid), "#fff") ? "#000" : "#fff", p = ja.reduce((g, h) => Object.assign(Object.assign({}, g), {
    [`${h}ShadowColor`]: `0 ${Nt(e.controlOutlineWidth)} 0 ${gn(e[`${h}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, p), {
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
    solidTextColor: v,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - a * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * d) / 2 - e.lineWidth, 0)
  });
}, Mb = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Nt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: zf(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Tv(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        },
        [`&${t}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${s}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
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
        [`${t}-loading-icon-motion`]: {
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
}, Od = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Lb = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Db = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Bb = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ii = (e, t, r, n, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Od(e, Object.assign({
    background: t
  }, s), Object.assign({
    background: t
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), Hb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Bb(e))
}), zb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), si = (e, t, r, n) => {
  const i = n && ["link", "text"].includes(n) ? zb : Hb;
  return Object.assign(Object.assign({}, i(e)), Od(e.componentCls, t, r));
}, ai = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, si(e, n, o))
}), ci = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, si(e, n, o))
}), li = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), ui = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, si(e, r, n))
}), Rt = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, si(e, n, o, r))
}), Fb = (e) => {
  const {
    componentCls: t
  } = e;
  return ja.reduce((r, n) => {
    const o = e[`${n}6`], i = e[`${n}1`], s = e[`${n}5`], a = e[`${n}2`], c = e[`${n}3`], l = e[`${n}7`];
    return Object.assign(Object.assign({}, r), {
      [`&${t}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, ai(e, e.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), ci(e, o, e.colorBgContainer, {
        color: s,
        borderColor: s,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), li(e)), ui(e, i, {
        background: a
      }, {
        background: c
      })), Rt(e, o, "link", {
        color: s
      }, {
        color: l
      })), Rt(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Vb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ai(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), li(e)), ui(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), ii(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Rt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ub = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, ci(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), li(e)), ui(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Rt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Rt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), ii(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), qb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ai(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), ci(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), li(e)), ui(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Rt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Rt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), ii(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Wb = (e) => Object.assign(Object.assign({}, Rt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), ii(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Gb = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Vb(e),
    [`${t}-color-primary`]: Ub(e),
    [`${t}-color-dangerous`]: qb(e),
    [`${t}-color-link`]: Wb(e)
  }, Fb(e));
}, Xb = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, ci(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Rt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ai(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Rt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ba = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: a,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: n,
        padding: `${Nt(c)} ${Nt(s)}`,
        borderRadius: i,
        [`&${r}-icon-only`]: {
          width: n,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: Lb(e)
    },
    {
      [`${r}${r}-round${t}`]: Db(e)
    }
  ];
}, Yb = (e) => {
  const t = Yt(e, {
    fontSize: e.contentFontSize
  });
  return Ba(t, e.componentCls);
}, Kb = (e) => {
  const t = Yt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Ba(t, `${e.componentCls}-sm`);
}, Jb = (e) => {
  const t = Yt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Ba(t, `${e.componentCls}-lg`);
}, Qb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Zb = ti("Button", (e) => {
  const t = Ed(e);
  return [
    // Shared
    Mb(t),
    // Size
    Yb(t),
    Kb(t),
    Jb(t),
    // Block
    Qb(t),
    // Color
    Gb(t),
    // https://github.com/ant-design/ant-design/issues/50969
    Xb(t),
    // Button Group
    vb(t)
  ];
}, _d, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function e1(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = r, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [a]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function t1(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function r1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, e1(e, n, t)), t1(r, n, t))
  };
}
function n1(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
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
function o1(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function i1(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, n1(e, t)), o1(e.componentCls, t))
  };
}
const s1 = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: r,
    lineWidth: n,
    calc: o
  } = e, i = o(n).mul(-1).equal(), s = (a) => {
    const c = `${t}-compact${a ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: r,
        content: '""',
        width: a ? "100%" : n,
        height: a ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, a1 = Av(["Button", "compact"], (e) => {
  const t = Ed(e);
  return [
    // Space Compact
    r1(t),
    i1(t),
    s1(t)
  ];
}, _d);
var c1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function l1(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const u1 = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, f1 = /* @__PURE__ */ U.forwardRef((e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: f,
    styles: d,
    disabled: v,
    className: p,
    rootClassName: g,
    children: h,
    icon: S,
    iconPosition: y = "start",
    ghost: w = !1,
    block: x = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: O,
    style: E = {},
    autoInsertSpace: N,
    autoFocus: M
  } = e, q = c1(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), K = c || "default", [X, $] = Cn(() => {
    if (s && a)
      return [s, a];
    const Ce = u1[K] || [];
    return l ? ["danger", Ce[1]] : Ce;
  }, [c, s, a, l]), H = X === "danger" ? "dangerous" : X, {
    getPrefixCls: A,
    direction: _,
    autoInsertSpace: T,
    className: P,
    style: L,
    classNames: D,
    styles: k
  } = Ia("button"), j = (r = N ?? T) !== null && r !== void 0 ? r : !0, F = A("btn", i), [Q, ee, oe] = Zb(F), Se = lt(ko), me = v ?? Se, Ie = lt(vd), Re = Cn(() => l1(o), [o]), [ce, Qe] = qe(Re.loading), [Y, Ue] = qe(!1), ve = ae(null), nt = bm(t, ve), Ct = ph.count(h) === 1 && !S && !io($), We = ae(!0);
  U.useEffect(() => (We.current = !1, () => {
    We.current = !0;
  }), []), Oe(() => {
    let Ce = null;
    Re.delay > 0 ? Ce = setTimeout(() => {
      Ce = null, Qe(!0);
    }, Re.delay) : Qe(Re.loading);
    function Ze() {
      Ce && (clearTimeout(Ce), Ce = null);
    }
    return Ze;
  }, [Re]), Oe(() => {
    if (!ve.current || !j)
      return;
    const Ce = ve.current.textContent || "";
    Ct && Zs(Ce) ? Y || Ue(!0) : Y && Ue(!1);
  }), Oe(() => {
    M && ve.current && ve.current.focus();
  }, []);
  const wt = U.useCallback((Ce) => {
    var Ze;
    if (ce || me) {
      Ce.preventDefault();
      return;
    }
    (Ze = e.onClick) === null || Ze === void 0 || Ze.call(e, ("href" in e, Ce));
  }, [e.onClick, ce, me]);
  if (process.env.NODE_ENV !== "production") {
    const Ce = Xt("Button");
    process.env.NODE_ENV !== "production" && Ce(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Ce(!(w && io($)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: $e,
    compactItemClassnames: ye
  } = fb(F, _), Fe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, dt = lb((Ce) => {
    var Ze, Zt;
    return (Zt = (Ze = f ?? $e) !== null && Ze !== void 0 ? Ze : Ie) !== null && Zt !== void 0 ? Zt : Ce;
  }), ot = dt && (n = Fe[dt]) !== null && n !== void 0 ? n : "", mr = ce ? "loading" : S, Mt = pd(q, ["navigate"]), vr = ue(F, ee, oe, {
    [`${F}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${F}-${K}`]: K,
    [`${F}-dangerous`]: l,
    [`${F}-color-${H}`]: H,
    [`${F}-variant-${$}`]: $,
    [`${F}-${ot}`]: ot,
    [`${F}-icon-only`]: !h && h !== 0 && !!mr,
    [`${F}-background-ghost`]: w && !io($),
    [`${F}-loading`]: ce,
    [`${F}-two-chinese-chars`]: Y && j && !ce,
    [`${F}-block`]: x,
    [`${F}-rtl`]: _ === "rtl",
    [`${F}-icon-end`]: y === "end"
  }, ye, p, g, P), Kt = Object.assign(Object.assign({}, L), E), Jt = ue(O == null ? void 0 : O.icon, D.icon), yr = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), k.icon || {}), br = S && !ce ? /* @__PURE__ */ U.createElement(ea, {
    prefixCls: F,
    className: Jt,
    style: yr
  }, S) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ U.createElement(ea, {
    prefixCls: F,
    className: Jt,
    style: yr
  }, o.icon) : /* @__PURE__ */ U.createElement(mb, {
    existIcon: !!S,
    prefixCls: F,
    loading: ce,
    mount: We.current
  }), Sr = h || h === 0 ? gb(h, Ct && j) : null;
  if (Mt.href !== void 0)
    return Q(/* @__PURE__ */ U.createElement("a", Object.assign({}, Mt, {
      className: ue(vr, {
        [`${F}-disabled`]: me
      }),
      href: me ? void 0 : Mt.href,
      style: Kt,
      onClick: wt,
      ref: nt,
      tabIndex: me ? -1 : 0
    }), br, Sr));
  let Qt = /* @__PURE__ */ U.createElement("button", Object.assign({}, q, {
    type: b,
    className: vr,
    style: Kt,
    onClick: wt,
    disabled: me,
    ref: nt
  }), br, Sr, ye && /* @__PURE__ */ U.createElement(a1, {
    prefixCls: F
  }));
  return io($) || (Qt = /* @__PURE__ */ U.createElement(md, {
    component: "Button",
    disabled: ce
  }, Qt)), Q(Qt);
}), fi = f1;
fi.Group = hb;
fi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (fi.displayName = "Button");
function d1(e, t, r) {
  var n = r || {}, o = n.noTrailing, i = o === void 0 ? !1 : o, s = n.noLeading, a = s === void 0 ? !1 : s, c = n.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, d = 0;
  function v() {
    u && clearTimeout(u);
  }
  function p(h) {
    var S = h || {}, y = S.upcomingOnly, w = y === void 0 ? !1 : y;
    v(), f = !w;
  }
  function g() {
    for (var h = arguments.length, S = new Array(h), y = 0; y < h; y++)
      S[y] = arguments[y];
    var w = this, x = Date.now() - d;
    if (f)
      return;
    function b() {
      d = Date.now(), t.apply(w, S);
    }
    function O() {
      u = void 0;
    }
    !a && l && !u && b(), v(), l === void 0 && x > e ? a ? (d = Date.now(), i || (u = setTimeout(l ? O : b, e))) : b() : i !== !0 && (u = setTimeout(l ? O : b, l === void 0 ? e - x : e));
  }
  return g.cancel = p, g;
}
function h1(e, t, r) {
  var n = {}, o = n.atBegin, i = o === void 0 ? !1 : o;
  return d1(e, t, {
    debounceMode: i !== !1
  });
}
function El(e) {
  return ["small", "middle", "large"].includes(e);
}
const Td = ["wrap", "nowrap", "wrap-reverse"], Rd = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Ad = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], p1 = (e, t) => {
  const r = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${r}`]: r && Td.includes(r)
  };
}, g1 = (e, t) => {
  const r = {};
  return Ad.forEach((n) => {
    r[`${e}-align-${n}`] = t.align === n;
  }), r[`${e}-align-stretch`] = !t.align && !!t.vertical, r;
}, m1 = (e, t) => {
  const r = {};
  return Rd.forEach((n) => {
    r[`${e}-justify-${n}`] = t.justify === n;
  }), r;
};
function v1(e, t) {
  return ue(Object.assign(Object.assign(Object.assign({}, p1(e, t)), g1(e, t)), m1(e, t)));
}
const y1 = (e) => {
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
}, b1 = (e) => {
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
}, S1 = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return Td.forEach((n) => {
    r[`${t}-wrap-${n}`] = {
      flexWrap: n
    };
  }), r;
}, C1 = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return Ad.forEach((n) => {
    r[`${t}-align-${n}`] = {
      alignItems: n
    };
  }), r;
}, w1 = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return Rd.forEach((n) => {
    r[`${t}-justify-${n}`] = {
      justifyContent: n
    };
  }), r;
}, x1 = () => ({}), E1 = ti("Flex", (e) => {
  const {
    paddingXS: t,
    padding: r,
    paddingLG: n
  } = e, o = Yt(e, {
    flexGapSM: t,
    flexGap: r,
    flexGapLG: n
  });
  return [y1(o), b1(o), S1(o), C1(o), w1(o)];
}, x1, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var _1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const $d = /* @__PURE__ */ U.forwardRef((e, t) => {
  const {
    prefixCls: r,
    rootClassName: n,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = e, f = _1(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: d,
    direction: v,
    getPrefixCls: p
  } = U.useContext(bt), g = p("flex", r), [h, S, y] = E1(g), w = l ?? (d == null ? void 0 : d.vertical), x = ue(o, n, d == null ? void 0 : d.className, g, S, y, v1(g, e), {
    [`${g}-rtl`]: v === "rtl",
    [`${g}-gap-${a}`]: El(a),
    [`${g}-vertical`]: w
  }), b = Object.assign(Object.assign({}, d == null ? void 0 : d.style), i);
  return s && (b.flex = s), a && !El(a) && (b.gap = a), h(/* @__PURE__ */ U.createElement(u, Object.assign({
    ref: t,
    className: x,
    style: b
  }, pd(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && ($d.displayName = "Flex");
const jo = 100, Pd = jo / 5, Nd = jo / 2 - Pd / 2, Yi = Nd * 2 * Math.PI, _l = 50, Ol = (e) => {
  const {
    dotClassName: t,
    style: r,
    hasCircleCls: n
  } = e;
  return /* @__PURE__ */ C.createElement("circle", {
    className: ue(`${t}-circle`, {
      [`${t}-circle-bg`]: n
    }),
    r: Nd,
    cx: _l,
    cy: _l,
    strokeWidth: Pd,
    style: r
  });
}, O1 = (e) => {
  let {
    percent: t,
    prefixCls: r
  } = e;
  const n = `${r}-dot`, o = `${n}-holder`, i = `${o}-hidden`, [s, a] = C.useState(!1);
  Ta(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Yi / 4}`,
    strokeDasharray: `${Yi * c / 100} ${Yi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ C.createElement("span", {
    className: ue(o, `${n}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ C.createElement("svg", {
    viewBox: `0 0 ${jo} ${jo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ C.createElement(Ol, {
    dotClassName: n,
    hasCircleCls: !0
  }), /* @__PURE__ */ C.createElement(Ol, {
    dotClassName: n,
    style: l
  })));
};
function T1(e) {
  const {
    prefixCls: t,
    percent: r = 0
  } = e, n = `${t}-dot`, o = `${n}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("span", {
    className: ue(o, r > 0 && i)
  }, /* @__PURE__ */ C.createElement("span", {
    className: ue(n, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ C.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ C.createElement(O1, {
    prefixCls: t,
    percent: r
  }));
}
function R1(e) {
  const {
    prefixCls: t,
    indicator: r,
    percent: n
  } = e, o = `${t}-dot`;
  return r && /* @__PURE__ */ C.isValidElement(r) ? La(r, {
    className: ue(r.props.className, o),
    percent: n
  }) : /* @__PURE__ */ C.createElement(T1, {
    prefixCls: t,
    percent: n
  });
}
const A1 = new Cf("antSpinMove", {
  to: {
    opacity: 1
  }
}), $1 = new Cf("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), P1 = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Hf(e)), {
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
        paddingTop: r(r(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
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
            margin: r(e.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: r(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: r(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: r(r(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: r(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: r(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: r(r(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: r(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
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
          width: r(e.dotSize).sub(r(e.marginXXS).div(2)).div(2).equal(),
          height: r(e.dotSize).sub(r(e.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: A1,
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
          animationName: $1,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((n) => `${n} ${e.motionDurationSlow} ease`).join(","),
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
          width: r(r(e.dotSizeSM).sub(r(e.marginXXS).div(2))).div(2).equal(),
          height: r(r(e.dotSizeSM).sub(r(e.marginXXS).div(2))).div(2).equal()
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
          width: r(r(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: r(r(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, N1 = (e) => {
  const {
    controlHeightLG: t,
    controlHeight: r
  } = e;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: r
  };
}, k1 = ti("Spin", (e) => {
  const t = Yt(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [P1(t)];
}, N1), I1 = 200, Tl = [[30, 0.05], [70, 0.03], [96, 0.01]];
function j1(e, t) {
  const [r, n] = C.useState(0), o = C.useRef(null), i = t === "auto";
  return C.useEffect(() => (i && e && (n(0), o.current = setInterval(() => {
    n((s) => {
      const a = 100 - s;
      for (let c = 0; c < Tl.length; c += 1) {
        const [l, u] = Tl[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, I1)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? r : t;
}
var M1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let kd;
function L1(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const Sn = (e) => {
  var t;
  const {
    prefixCls: r,
    spinning: n = !0,
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
    percent: p
  } = e, g = M1(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: S,
    className: y,
    style: w,
    indicator: x
  } = Ia("spin"), b = h("spin", r), [O, E, N] = k1(b), [M, q] = C.useState(() => n && !L1(n, o)), K = j1(M, p);
  C.useEffect(() => {
    if (n) {
      const T = h1(o, () => {
        q(!0);
      });
      return T(), () => {
        var P;
        (P = T == null ? void 0 : T.cancel) === null || P === void 0 || P.call(T);
      };
    }
    q(!1);
  }, [o, n]);
  const X = C.useMemo(() => typeof f < "u" && !d, [f, d]);
  if (process.env.NODE_ENV !== "production") {
    const T = Xt("Spin");
    process.env.NODE_ENV !== "production" && T(!c || X || d, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const $ = ue(b, y, {
    [`${b}-sm`]: a === "small",
    [`${b}-lg`]: a === "large",
    [`${b}-spinning`]: M,
    [`${b}-show-text`]: !!c,
    [`${b}-rtl`]: S === "rtl"
  }, i, !d && s, E, N), B = ue(`${b}-container`, {
    [`${b}-blur`]: M
  }), H = (t = v ?? x) !== null && t !== void 0 ? t : kd, A = Object.assign(Object.assign({}, w), u), _ = /* @__PURE__ */ C.createElement("div", Object.assign({}, g, {
    style: A,
    className: $,
    "aria-live": "polite",
    "aria-busy": M
  }), /* @__PURE__ */ C.createElement(R1, {
    prefixCls: b,
    indicator: H,
    percent: K
  }), c && (X || d) ? /* @__PURE__ */ C.createElement("div", {
    className: `${b}-text`
  }, c) : null);
  return O(X ? /* @__PURE__ */ C.createElement("div", Object.assign({}, g, {
    className: ue(`${b}-nested-loading`, l, E, N)
  }), M && /* @__PURE__ */ C.createElement("div", {
    key: "loading"
  }, _), /* @__PURE__ */ C.createElement("div", {
    className: B,
    key: "container"
  }, f)) : d ? /* @__PURE__ */ C.createElement("div", {
    className: ue(`${b}-fullscreen`, {
      [`${b}-fullscreen-show`]: M
    }, s, E, N)
  }, _) : _);
};
Sn.setDefaultIndicator = (e) => {
  kd = e;
};
process.env.NODE_ENV !== "production" && (Sn.displayName = "Spin");
function Id(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: D1 } = Object.prototype, { getPrototypeOf: Ha } = Object, { iterator: di, toStringTag: jd } = Symbol, hi = /* @__PURE__ */ ((e) => (t) => {
  const r = D1.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), St = (e) => (e = e.toLowerCase(), (t) => hi(t) === e), pi = (e) => (t) => typeof t === e, { isArray: Jr } = Array, Rn = pi("undefined");
function B1(e) {
  return e !== null && !Rn(e) && e.constructor !== null && !Rn(e.constructor) && Ke(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Md = St("ArrayBuffer");
function H1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Md(e.buffer), t;
}
const z1 = pi("string"), Ke = pi("function"), Ld = pi("number"), gi = (e) => e !== null && typeof e == "object", F1 = (e) => e === !0 || e === !1, Eo = (e) => {
  if (hi(e) !== "object")
    return !1;
  const t = Ha(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(jd in e) && !(di in e);
}, V1 = St("Date"), U1 = St("File"), q1 = St("Blob"), W1 = St("FileList"), G1 = (e) => gi(e) && Ke(e.pipe), X1 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ke(e.append) && ((t = hi(e)) === "formdata" || // detect form-data instance
  t === "object" && Ke(e.toString) && e.toString() === "[object FormData]"));
}, Y1 = St("URLSearchParams"), [K1, J1, Q1, Z1] = ["ReadableStream", "Request", "Response", "Headers"].map(St), eS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function In(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Jr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (n = 0; n < s; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function Dd(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Bd = (e) => !Rn(e) && e !== sr;
function ta() {
  const { caseless: e } = Bd(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Dd(t, o) || o;
    Eo(t[i]) && Eo(n) ? t[i] = ta(t[i], n) : Eo(n) ? t[i] = ta({}, n) : Jr(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && In(arguments[n], r);
  return t;
}
const tS = (e, t, r, { allOwnKeys: n } = {}) => (In(t, (o, i) => {
  r && Ke(o) ? e[i] = Id(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), rS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nS = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, oS = (e, t, r, n) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && Ha(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, iS = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, sS = (e) => {
  if (!e) return null;
  if (Jr(e)) return e;
  let t = e.length;
  if (!Ld(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, aS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ha(Uint8Array)), cS = (e, t) => {
  const n = (e && e[di]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, lS = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, uS = St("HTMLFormElement"), fS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Rl = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), dS = St("RegExp"), Hd = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  In(r, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (n[i] = s || o);
  }), Object.defineProperties(e, n);
}, hS = (e) => {
  Hd(e, (t, r) => {
    if (Ke(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ke(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, pS = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Jr(e) ? n(e) : n(String(e).split(t)), r;
}, gS = () => {
}, mS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vS(e) {
  return !!(e && Ke(e.append) && e[jd] === "FormData" && e[di]);
}
const yS = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (gi(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Jr(n) ? [] : {};
        return In(n, (s, a) => {
          const c = r(s, o + 1);
          !Rn(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, bS = St("AsyncFunction"), SS = (e) => e && (gi(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), zd = ((e, t) => e ? setImmediate : t ? ((r, n) => (sr.addEventListener("message", ({ source: o, data: i }) => {
  o === sr && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), sr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ke(sr.postMessage)
), CS = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || zd, wS = (e) => e != null && Ke(e[di]), R = {
  isArray: Jr,
  isArrayBuffer: Md,
  isBuffer: B1,
  isFormData: X1,
  isArrayBufferView: H1,
  isString: z1,
  isNumber: Ld,
  isBoolean: F1,
  isObject: gi,
  isPlainObject: Eo,
  isReadableStream: K1,
  isRequest: J1,
  isResponse: Q1,
  isHeaders: Z1,
  isUndefined: Rn,
  isDate: V1,
  isFile: U1,
  isBlob: q1,
  isRegExp: dS,
  isFunction: Ke,
  isStream: G1,
  isURLSearchParams: Y1,
  isTypedArray: aS,
  isFileList: W1,
  forEach: In,
  merge: ta,
  extend: tS,
  trim: eS,
  stripBOM: rS,
  inherits: nS,
  toFlatObject: oS,
  kindOf: hi,
  kindOfTest: St,
  endsWith: iS,
  toArray: sS,
  forEachEntry: cS,
  matchAll: lS,
  isHTMLForm: uS,
  hasOwnProperty: Rl,
  hasOwnProp: Rl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hd,
  freezeMethods: hS,
  toObjectSet: pS,
  toCamelCase: fS,
  noop: gS,
  toFiniteNumber: mS,
  findKey: Dd,
  global: sr,
  isContextDefined: Bd,
  isSpecCompliantForm: vS,
  toJSONObject: yS,
  isAsyncFn: bS,
  isThenable: SS,
  setImmediate: zd,
  asap: CS,
  isIterable: wS
};
function te(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
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
const Fd = te.prototype, Vd = {};
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
  Vd[e] = { value: e };
});
Object.defineProperties(te, Vd);
Object.defineProperty(Fd, "isAxiosError", { value: !0 });
te.from = (e, t, r, n, o, i) => {
  const s = Object.create(Fd);
  return R.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const xS = null;
function ra(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function Ud(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Al(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Ud(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ES(e) {
  return R.isArray(e) && !e.some(ra);
}
const _S = R.toFlatObject(R, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function mi(e, t, r) {
  if (!R.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = R.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !R.isUndefined(h[g]);
  });
  const n = r.metaTokens, o = r.visitor || u, i = r.dots, s = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(t);
  if (!R.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (R.isDate(p))
      return p.toISOString();
    if (!c && R.isBlob(p))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(p) || R.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, g, h) {
    let S = p;
    if (p && !h && typeof p == "object") {
      if (R.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (R.isArray(p) && ES(p) || (R.isFileList(p) || R.endsWith(g, "[]")) && (S = R.toArray(p)))
        return g = Ud(g), S.forEach(function(w, x) {
          !(R.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Al([g], x, i) : s === null ? g : g + "[]",
            l(w)
          );
        }), !1;
    }
    return ra(p) ? !0 : (t.append(Al(h, g, i), l(p)), !1);
  }
  const f = [], d = Object.assign(_S, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ra
  });
  function v(p, g) {
    if (!R.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(p), R.forEach(p, function(S, y) {
        (!(R.isUndefined(S) || S === null) && o.call(
          t,
          S,
          R.isString(y) ? y.trim() : y,
          g,
          d
        )) === !0 && v(S, g ? g.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function $l(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function za(e, t) {
  this._pairs = [], e && mi(e, this, t);
}
const qd = za.prototype;
qd.append = function(t, r) {
  this._pairs.push([t, r]);
};
qd.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, $l);
  } : $l;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function OS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Wd(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || OS;
  R.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = R.isURLSearchParams(t) ? t.toString() : new za(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Pl {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    R.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Gd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, TS = typeof URLSearchParams < "u" ? URLSearchParams : za, RS = typeof FormData < "u" ? FormData : null, AS = typeof Blob < "u" ? Blob : null, $S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: TS,
    FormData: RS,
    Blob: AS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fa = typeof window < "u" && typeof document < "u", na = typeof navigator == "object" && navigator || void 0, PS = Fa && (!na || ["ReactNative", "NativeScript", "NS"].indexOf(na.product) < 0), NS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kS = Fa && window.location.href || "http://localhost", IS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fa,
  hasStandardBrowserEnv: PS,
  hasStandardBrowserWebWorkerEnv: NS,
  navigator: na,
  origin: kS
}, Symbol.toStringTag, { value: "Module" })), Ve = {
  ...IS,
  ...$S
};
function jS(e, t) {
  return mi(e, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ve.isNode && R.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function MS(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function LS(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Xd(e) {
  function t(r, n, o, i) {
    let s = r[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= r.length;
    return s = !s && R.isArray(o) ? o.length : s, c ? (R.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !a) : ((!o[s] || !R.isObject(o[s])) && (o[s] = []), t(r, n, o[s], i) && R.isArray(o[s]) && (o[s] = LS(o[s])), !a);
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const r = {};
    return R.forEachEntry(e, (n, o) => {
      t(MS(n), o, r, 0);
    }), r;
  }
  return null;
}
function DS(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const jn = {
  transitional: Gd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = R.isObject(t);
    if (i && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t))
      return o ? JSON.stringify(Xd(t)) : t;
    if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t) || R.isReadableStream(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return jS(t, this.formSerializer).toString();
      if ((a = R.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return mi(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), DS(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || jn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (R.isResponse(t) || R.isReadableStream(t))
      return t;
    if (t && R.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
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
    FormData: Ve.classes.FormData,
    Blob: Ve.classes.Blob
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
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  jn.headers[e] = {};
});
const BS = R.toObjectSet([
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
]), HS = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && BS[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Nl = Symbol("internals");
function dn(e) {
  return e && String(e).trim().toLowerCase();
}
function _o(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(_o) : String(e);
}
function zS(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const FS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ki(e, t, r, n, o) {
  if (R.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!R.isString(t)) {
    if (R.isString(n))
      return t.indexOf(n) !== -1;
    if (R.isRegExp(n))
      return n.test(t);
  }
}
function VS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function US(e, t) {
  const r = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, s) {
        return this[n].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let Je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, c, l) {
      const u = dn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = R.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = _o(a));
    }
    const s = (a, c) => R.forEach(a, (l, u) => i(l, u, c));
    if (R.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (R.isString(t) && (t = t.trim()) && !FS(t))
      s(HS(t), r);
    else if (R.isObject(t) && R.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!R.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? R.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = dn(t), t) {
      const n = R.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return zS(o);
        if (R.isFunction(r))
          return r.call(this, o, n);
        if (R.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = dn(t), t) {
      const n = R.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ki(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = dn(s), s) {
        const a = R.findKey(n, s);
        a && (!r || Ki(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return R.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Ki(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return R.forEach(this, (o, i) => {
      const s = R.findKey(n, i);
      if (s) {
        r[s] = _o(o), delete r[i];
        return;
      }
      const a = t ? VS(i) : String(i).trim();
      a !== i && delete r[i], r[a] = _o(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && R.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Nl] = this[Nl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = dn(s);
      n[a] || (US(o, s), n[a] = !0);
    }
    return R.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
R.freezeMethods(Je);
function Ji(e, t) {
  const r = this || jn, n = t || r, o = Je.from(n.headers);
  let i = n.data;
  return R.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Yd(e) {
  return !!(e && e.__CANCEL__);
}
function Qr(e, t, r) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, r), this.name = "CanceledError";
}
R.inherits(Qr, te, {
  __CANCEL__: !0
});
function Kd(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new te(
    "Request failed with status code " + r.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function qS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function WS(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    s || (s = l), r[o] = c, n[o] = l;
    let f = i, d = 0;
    for (; f !== o; )
      d += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const v = u && l - u;
    return v ? Math.round(d * 1e3 / v) : void 0;
  };
}
function GS(e, t) {
  let r = 0, n = 1e3 / t, o, i;
  const s = (l, u = Date.now()) => {
    r = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - r;
    f >= n ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, n - f)));
  }, () => o && s(o)];
}
const Mo = (e, t, r = 3) => {
  let n = 0;
  const o = WS(50, 250);
  return GS((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - n, l = o(c), u = s <= a;
    n = s;
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
  }, r);
}, kl = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Il = (e) => (...t) => R.asap(() => e(...t)), XS = Ve.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Ve.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Ve.origin),
  Ve.navigator && /(msie|trident)/i.test(Ve.navigator.userAgent)
) : () => !0, YS = Ve.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      R.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), R.isString(n) && s.push("path=" + n), R.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function KS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function JS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jd(e, t, r) {
  let n = !KS(t);
  return e && (n || r == !1) ? JS(e, t) : t;
}
const jl = (e) => e instanceof Je ? { ...e } : e;
function gr(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, f, d) {
    return R.isPlainObject(l) && R.isPlainObject(u) ? R.merge.call({ caseless: d }, l, u) : R.isPlainObject(u) ? R.merge({}, u) : R.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, d) {
    if (R.isUndefined(u)) {
      if (!R.isUndefined(l))
        return n(void 0, l, f, d);
    } else return n(l, u, f, d);
  }
  function i(l, u) {
    if (!R.isUndefined(u))
      return n(void 0, u);
  }
  function s(l, u) {
    if (R.isUndefined(u)) {
      if (!R.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function a(l, u, f) {
    if (f in t)
      return n(l, u);
    if (f in e)
      return n(void 0, l);
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
    headers: (l, u, f) => o(jl(l), jl(u), f, !0)
  };
  return R.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || o, d = f(e[u], t[u], u);
    R.isUndefined(d) && f !== a || (r[u] = d);
  }), r;
}
const Qd = (e) => {
  const t = gr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = Je.from(s), t.url = Wd(Jd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (R.isFormData(r)) {
    if (Ve.hasStandardBrowserEnv || Ve.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ve.hasStandardBrowserEnv && (n && R.isFunction(n) && (n = n(t)), n || n !== !1 && XS(t.url))) {
    const l = o && i && YS.read(i);
    l && s.set(o, l);
  }
  return t;
}, QS = typeof XMLHttpRequest < "u", ZS = QS && function(e) {
  return new Promise(function(r, n) {
    const o = Qd(e);
    let i = o.data;
    const s = Je.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, d, v, p;
    function g() {
      v && v(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function S() {
      if (!h)
        return;
      const w = Je.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: e,
        request: h
      };
      Kd(function(E) {
        r(E), g();
      }, function(E) {
        n(E), g();
      }, b), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (n(new te("Request aborted", te.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      n(new te("Network Error", te.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const b = o.transitional || Gd;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), n(new te(
        x,
        b.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && R.forEach(s.toJSON(), function(x, b) {
      h.setRequestHeader(b, x);
    }), R.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([d, p] = Mo(l, !0), h.addEventListener("progress", d)), c && h.upload && ([f, v] = Mo(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (w) => {
      h && (n(!w || w.type ? new Qr(null, e, h) : w), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const y = qS(o.url);
    if (y && Ve.protocols.indexOf(y) === -1) {
      n(new te("Unsupported protocol " + y + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, eC = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof te ? u : new Qr(u instanceof Error ? u.message : u));
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
    const { signal: c } = n;
    return c.unsubscribe = () => R.asap(a), c;
  }
}, tC = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, rC = async function* (e, t) {
  for await (const r of nC(e))
    yield* tC(r, t);
}, nC = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ml = (e, t, r, n) => {
  const o = rC(e, t);
  let i = 0, s, a = (c) => {
    s || (s = !0, n && n(c));
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
        if (r) {
          let d = i += f;
          r(d);
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
}, vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Zd = vi && typeof ReadableStream == "function", oC = vi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), eh = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, iC = Zd && eh(() => {
  let e = !1;
  const t = new Request(Ve.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ll = 64 * 1024, oa = Zd && eh(() => R.isReadableStream(new Response("").body)), Lo = {
  stream: oa && ((e) => e.body)
};
vi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Lo[t] && (Lo[t] = R.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const sC = async (e) => {
  if (e == null)
    return 0;
  if (R.isBlob(e))
    return e.size;
  if (R.isSpecCompliantForm(e))
    return (await new Request(Ve.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (R.isArrayBufferView(e) || R.isArrayBuffer(e))
    return e.byteLength;
  if (R.isURLSearchParams(e) && (e = e + ""), R.isString(e))
    return (await oC(e)).byteLength;
}, aC = async (e, t) => {
  const r = R.toFiniteNumber(e.getContentLength());
  return r ?? sC(t);
}, cC = vi && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: d
  } = Qd(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = eC([o, i && i.toAbortSignal()], s), p;
  const g = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && iC && r !== "get" && r !== "head" && (h = await aC(u, n)) !== 0) {
      let b = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), O;
      if (R.isFormData(n) && (O = b.headers.get("content-type")) && u.setContentType(O), b.body) {
        const [E, N] = kl(
          h,
          Mo(Il(c))
        );
        n = Ml(b.body, Ll, E, N);
      }
    }
    R.isString(f) || (f = f ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    p = new Request(t, {
      ...d,
      signal: v,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: S ? f : void 0
    });
    let y = await fetch(p);
    const w = oa && (l === "stream" || l === "response");
    if (oa && (a || w && g)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((M) => {
        b[M] = y[M];
      });
      const O = R.toFiniteNumber(y.headers.get("content-length")), [E, N] = a && kl(
        O,
        Mo(Il(a), !0)
      ) || [];
      y = new Response(
        Ml(y.body, Ll, E, () => {
          N && N(), g && g();
        }),
        b
      );
    }
    l = l || "text";
    let x = await Lo[R.findKey(Lo, l) || "text"](y, e);
    return !w && g && g(), await new Promise((b, O) => {
      Kd(b, O, {
        data: x,
        headers: Je.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: p
      });
    });
  } catch (S) {
    throw g && g(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, p),
      {
        cause: S.cause || S
      }
    ) : te.from(S, S && S.code, e, p);
  }
}), ia = {
  http: xS,
  xhr: ZS,
  fetch: cC
};
R.forEach(ia, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Dl = (e) => `- ${e}`, lC = (e) => R.isFunction(e) || e === null || e === !1, th = {
  getAdapter: (e) => {
    e = R.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let s;
      if (n = r, !lC(r) && (n = ia[(s = String(r)).toLowerCase()], n === void 0))
        throw new te(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Dl).join(`
`) : " " + Dl(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ia
};
function Qi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Qr(null, e);
}
function Bl(e) {
  return Qi(e), e.headers = Je.from(e.headers), e.data = Ji.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), th.getAdapter(e.adapter || jn.adapter)(e).then(function(n) {
    return Qi(e), n.data = Ji.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Je.from(n.headers), n;
  }, function(n) {
    return Yd(n) || (Qi(e), n && n.response && (n.response.data = Ji.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Je.from(n.response.headers))), Promise.reject(n);
  });
}
const rh = "1.9.0", yi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yi[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Hl = {};
yi.transitional = function(t, r, n) {
  function o(i, s) {
    return "[Axios v" + rh + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new te(
        o(s, " has been removed" + (r ? " in " + r : "")),
        te.ERR_DEPRECATED
      );
    return r && !Hl[s] && (Hl[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
yi.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function uC(e, t, r) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const Oo = {
  assertOptions: uC,
  validators: yi
}, xt = Oo.validators;
let dr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Pl(),
      response: new Pl()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = gr(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Oo.assertOptions(n, {
      silentJSONParsing: xt.transitional(xt.boolean),
      forcedJSONParsing: xt.transitional(xt.boolean),
      clarifyTimeoutError: xt.transitional(xt.boolean)
    }, !1), o != null && (R.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Oo.assertOptions(o, {
      encode: xt.function,
      serialize: xt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Oo.assertOptions(r, {
      baseUrl: xt.spelling("baseURL"),
      withXsrfToken: xt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = i && R.merge(
      i.common,
      i[r.method]
    );
    i && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = Je.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const p = [Bl.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, l), d = p.length, u = Promise.resolve(r); f < d; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    d = a.length;
    let v = r;
    for (f = 0; f < d; ) {
      const p = a[f++], g = a[f++];
      try {
        v = p(v);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      u = Bl.call(this, v);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = l.length; f < d; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = gr(this.defaults, t);
    const r = Jd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Wd(r, t.params, t.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function(t) {
  dr.prototype[t] = function(r, n) {
    return this.request(gr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, a) {
      return this.request(gr(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  dr.prototype[t] = r(), dr.prototype[t + "Form"] = r(!0);
});
let fC = class nh {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      n.reason || (n.reason = new Qr(i, s, a), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new nh(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function dC(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function hC(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const sa = {
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
Object.entries(sa).forEach(([e, t]) => {
  sa[t] = e;
});
function oh(e) {
  const t = new dr(e), r = Id(dr.prototype.request, t);
  return R.extend(r, dr.prototype, t, { allOwnKeys: !0 }), R.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return oh(gr(e, o));
  }, r;
}
const Te = oh(jn);
Te.Axios = dr;
Te.CanceledError = Qr;
Te.CancelToken = fC;
Te.isCancel = Yd;
Te.VERSION = rh;
Te.toFormData = mi;
Te.AxiosError = te;
Te.Cancel = Te.CanceledError;
Te.all = function(t) {
  return Promise.all(t);
};
Te.spread = dC;
Te.isAxiosError = hC;
Te.mergeConfig = gr;
Te.AxiosHeaders = Je;
Te.formToJSON = (e) => Xd(R.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = th.getAdapter;
Te.HttpStatusCode = sa;
Te.default = Te;
const {
  Axios: LC,
  AxiosError: DC,
  CanceledError: BC,
  isCancel: HC,
  CancelToken: zC,
  VERSION: FC,
  all: VC,
  Cancel: UC,
  isAxiosError: qC,
  spread: WC,
  toFormData: GC,
  AxiosHeaders: XC,
  HttpStatusCode: YC,
  formToJSON: KC,
  getAdapter: JC,
  mergeConfig: QC
} = Te;
Te.defaults.withCredentials = !0;
const pC = async (e) => {
  var t, r, n, o;
  try {
    return (await Te(e)).data;
  } catch (i) {
    throw ((r = (t = i.response) == null ? void 0 : t.data) == null ? void 0 : r.message) || ((o = (n = i.response) == null ? void 0 : n.data) == null ? void 0 : o.error) || i.message;
  }
}, gt = {
  mousemove: "ACTION_MOVE",
  mouseup: "ACTION_UP",
  mousedown: "ACTION_DOWN",
  touchmove: "ACTION_MOVE",
  touchend: "ACTION_UP",
  touchstart: "ACTION_DOWN"
}, gC = {
  keyup: "ACTION_UP",
  keydown: "ACTION_DOWN"
}, mC = "moveEvent", vC = "wheelEvent", yC = "keyBoardEvent", ih = "assistiveMenuHide", bC = "shortcutEvent", SC = "fullscreenEvent", CC = ({ isMobile: e, assistive: t, onRemoteEvent: r, canvasContent: n, canvasRef: o }) => {
  const [i, s] = qe(!1), a = ae(Date.now()), c = (f) => {
    if (f.preventDefault(), !o.current)
      return;
    const d = o.current, v = d.getBoundingClientRect();
    let p = gt[f.type];
    if (t.isDown == !0 || t.showMenu == !0) {
      p == gt.mouseup && r(ih, {});
      return;
    }
    if (p == gt.mousedown && s(!0), p != gt.mousedown && i == !1)
      return;
    p == gt.mouseup && s(!1);
    let g, h;
    if (f.type.includes("touch")) {
      const { touches: O, changedTouches: E } = f, N = O[0] ?? E[0];
      g = N.pageX - v.left, h = N.pageY - v.top;
    } else f.type.includes("mouse") && (g = f.clientX - v.left, h = f.clientY - v.top);
    const S = 1, y = g < S || g > d.width - S, w = h < S || h > d.height - S;
    (y || w) && (g = Math.max(1, g), h = Math.max(1, h), p = gt.mouseup);
    const x = Date.now(), b = x - a.current;
    a.current = x, r(mC, {
      action: "touchEvent",
      keyAction: p,
      x: g,
      y: h,
      width: v.width,
      height: v.height,
      ts: x,
      duration: b
    }), d.focus();
  }, l = (f) => {
    if (f.preventDefault(), !o.current)
      return;
    const d = o.current, v = Math.sign(f.deltaY), p = d.getBoundingClientRect();
    r(vC, {
      action: "wheelEvent",
      width: d.offsetWidth,
      height: d.offsetHeight,
      x: f.clientX - p.left,
      y: f.clientY - p.top,
      delta: v,
      ts: Date.now()
    }), d.focus();
  }, u = async (f) => {
    if (f.preventDefault(), !o.current)
      return;
    const d = o.current, v = gC[f.type], p = f.key.toLowerCase();
    if (((y) => ["control", "shift", "capslock"].includes(y))(p) == !0)
      return;
    const S = await (async () => {
      const y = {
        action: "keyEvent",
        keyAction: v,
        typeKey: "KEYBOARD_TEXT",
        key: f.key,
        repeat: 0,
        meta_state: 0
      };
      return f.ctrlKey == !0 ? p == "c" ? y.typeKey = "COPY_TEXT" : p == "a" ? (y.typeKey = "KEYBOARD_CODE", y.meta_state = 4096, y.key = 29) : p == "v" && (y.typeKey = "PASTE_TEXT", y.key = await navigator.clipboard.readText()) : p == "arrowup" ? (y.typeKey = "KEYBOARD_CODE", y.key = 19) : p == "arrowdown" ? (y.typeKey = "KEYBOARD_CODE", y.key = 20) : p == "arrowleft" ? (y.typeKey = "KEYBOARD_CODE", y.key = 21) : p == "arrowright" ? (y.typeKey = "KEYBOARD_CODE", y.key = 22) : p == "backspace" ? (y.typeKey = "KEYBOARD_CODE", y.key = 67) : p == "enter" ? (y.typeKey = "KEYBOARD_CODE", y.key = 66) : p == "tab" && (y.typeKey = "KEYBOARD_CODE", y.key = 61), y.type == "KEYBOARD_TEXT" && f.shiftKey == !0 && (y.key = y.key.toUpperCase()), y;
    })();
    S && r(yC, S), d.focus();
  };
  return Oe(() => {
    const f = o.current;
    if (f) {
      const d = { passive: !1 };
      return e ? (f.addEventListener("touchstart", c, d), f.addEventListener("touchmove", c, d), f.addEventListener("touchend", c)) : (f.addEventListener("keydown", u), ["mousemove", "mousedown", "mouseup"].forEach((v) => {
        f.addEventListener(v, c);
      })), () => {
        f && (e ? ["touchstart", "touchmove", "touchend"].forEach((v) => {
          f.removeEventListener(v, c);
        }) : (["mousemove", "mousedown", "mouseup"].forEach((v) => {
          f.removeEventListener(v, c);
        }), f.removeEventListener("keydown", u)));
      };
    }
  }, [e, c, l, u, o]), /* @__PURE__ */ V.jsx(Rp, { ref: o, ...n });
}, wC = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", xC = At.div`
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
`, st = At.div`
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
`, at = At.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, EC = At.img`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, _C = At.div`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`, zl = () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, OC = (e) => {
  const t = document.querySelector(`#screen_main_${e}`);
  t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
}, TC = () => {
  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
}, RC = Fr((e, t) => {
  const { displayId: r, isMobile: n, onSenData: o, status: i, canvasRef: s, isShowDeviceId: a } = e, c = ae({ x: 0, y: 0 }), l = ae({ x: 0, y: 0 }), [u, f] = qe(null), [d, v] = qe(0), p = ae(null), g = ae(null), h = ae(null), [S, y] = qe({ cursor: "move", opacity: 0.5, zIndex: 999 }), [w, x] = qe({ zIndex: 1e3 }), b = ae(null), O = ae(null), [E, N] = qe(null), M = ($) => {
    if ($.preventDefault(), i.get.showMenu == !0)
      return;
    const B = gt[$.type], H = s.current, A = h.current, _ = H.getBoundingClientRect(), T = A.getBoundingClientRect(), P = 5;
    let L, D;
    const k = _.width - T.width, j = _.height - T.height;
    if ($.type.includes("touch")) {
      const { touches: F, changedTouches: Q } = $, ee = F[0] ?? Q[0];
      L = ee.pageX, D = ee.pageY;
    } else $.type.includes("mouse") && (L = $.clientX, D = $.clientY);
    if (B == gt.mousedown)
      i.set({ ...i.get, isDown: !0 }), c.current.x = L - T.left, c.current.y = D - T.top, y({ ...S, opacity: 1, cursor: "grab" }), v(performance.now());
    else if (B == gt.mousemove) {
      if (i.get.isDown == !1) return;
      let F = L - c.current.x - _.left, Q = D - c.current.y - _.top;
      const ee = k - P;
      (F < P || F > ee || Q < P || Q > j - P) && !O.current || (A.style.left = `${F}px`, A.style.top = `${Q}px`, l.current.x = F, l.current.y = Q);
    } else if (B == gt.mouseup) {
      const F = performance.now() - d;
      u == gt.mousedown || F < 200 ? i.set({ ...i.get, showMenu: !0, isDown: !1 }) : i.set({ ...i.get, isDown: !1 }), y({ ...S, opacity: 0.5, cursor: "move" });
    }
    f(B), A.focus();
  }, q = async ($) => {
    $.preventDefault();
    const B = $.target.closest("div").getAttribute("data-id");
    if (B === "fullscreen")
      zl() ? TC() : OC(r);
    else {
      const H = {
        action: "shortcutEvent",
        shortcut: B,
        data: ""
      };
      B === "paste" && (H.data = await navigator.clipboard.readText()), B === "copy" && (H.taskId = "shortcutCopy"), o(bC, H);
    }
    i.set({ ...i.get, showMenu: !1 }), g.current.focus();
  }, K = ($) => {
    const B = zl();
    o(SC, B);
  };
  Oe(() => {
    requestAnimationFrame(() => {
      x({ ...w, opacity: i.get.showMenu ? 1 : 0 });
    });
  }, [i]), Oe(() => {
    const $ = s.current;
    return $ && ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((H) => {
      $.addEventListener(H, K);
    }), () => {
      $ && $.removeEventListener("click", K);
    };
  }, []), Oe(() => {
    const $ = h.current, B = g.current;
    if (B && B.addEventListener("click", q), $) {
      const H = { passive: !1 };
      return n ? ($.addEventListener("touchstart", M, H), $.addEventListener("touchmove", M, H), $.addEventListener("touchend", M)) : ["mousemove", "mousedown", "mouseup"].forEach((A) => {
        $.addEventListener(A, M);
      }), () => {
        B && B.removeEventListener("click", q), $ && (n ? ["touchstart", "touchmove", "touchend"].forEach((A) => {
          $.removeEventListener(A, M);
        }) : ["mousemove", "mousedown", "mouseup"].forEach((A) => {
          $.removeEventListener(A, M);
        }));
      };
    }
  }, [n, M]);
  const X = () => {
    const $ = h.current;
    $.style.width = b.current != "landscape" ? "12%" : "", $.style.height = b.current == "landscape" ? "12%" : "", $.style.right = "15%", $.style.top = "5%", $.style.left = "";
  };
  return Fl(t, () => ({
    fixTouch: ($) => {
      $ && (b.current = $), X();
    },
    setFullscreen: ($) => {
      N($);
    }
  })), /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    i.get.showMenu ? /* @__PURE__ */ V.jsxs(xC, { id: `assistive_menu_${r}`, style: w, ref: g, children: [
      /* @__PURE__ */ V.jsxs(st, { "data-id": "fullscreen", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx(
              "path",
              {
                d: E ? "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z" : "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"
              }
            )
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Screen" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "copy", children: [
        /* @__PURE__ */ V.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ V.jsx("path", { d: "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" }),
              /* @__PURE__ */ V.jsx("path", { d: "M6 12h6v2H6zm0 4h6v2H6z" })
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Copy" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "paste", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Paste" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "unlock", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Unlock" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "reload", children: [
        /* @__PURE__ */ V.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ V.jsx("path", { d: "M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" }),
              /* @__PURE__ */ V.jsx("path", { d: "M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" })
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Reload" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "board", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 2h2v2h-2V7zm0 4h2v2h-2v-2zM9 7h2v2H9V7zm0 4h2v2H9v-2zM5 7h2v2H5V7zm0 4h2v2H5v-2zm12 6H7v-2h10v2zm2-4h-2v-2h2v2zm0-4h-2V7h2v2z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Board" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "device_id", children: [
        /* @__PURE__ */ V.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ V.jsx("path", { d: "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z" }),
              /* @__PURE__ */ V.jsx("circle", { cx: "11.75", cy: "18", r: "1" })
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: a ? "Hide ID" : "Show ID" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "volume", children: [
        /* @__PURE__ */ V.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: [
              /* @__PURE__ */ V.jsx("path", { d: "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" }),
              /* @__PURE__ */ V.jsx("path", { d: "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z" })
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Volume" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "sync", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218a.995.995 0 0 0 .782-.769zm-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345-5.236 1.048z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Sync" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "recents", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Recents" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "home", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Home" })
      ] }),
      /* @__PURE__ */ V.jsxs(st, { "data-id": "back", children: [
        /* @__PURE__ */ V.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            style: { fill: "rgba(255, 255, 255, 1)" },
            children: /* @__PURE__ */ V.jsx("path", { d: "m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" })
          }
        ),
        /* @__PURE__ */ V.jsx(at, { children: "Back" })
      ] })
    ] }) : null,
    /* @__PURE__ */ V.jsx(
      _C,
      {
        id: `assistive_touch_class_${r}`,
        className: "assistive",
        ref: p,
        style: S,
        children: /* @__PURE__ */ V.jsx(
          EC,
          {
            src: wC,
            className: "assistive",
            id: `assistive_touch_${r}`,
            alt: "Icon",
            ref: h,
            draggable: !1
          }
        )
      }
    )
  ] });
});
class AC {
  constructor(t, r, n, o, i, s) {
    // setFullscreen = (isFull) => {
    //   if (isFull) {
    //     const maxHeight = window.innerHeight + 10;
    //     const newSize = this.resizedWidth(null, this.rootSize.width, this.rootSize.height, maxHeight, maxHeight);
    //     this.width = newSize.width;
    //     this.height = newSize.height;
    //   } else {
    //     this.width = this.rootSize.width;
    //     this.height = this.rootSize.height;
    //   }
    // };
    // resizedWidth = (isMax, originalWidth, originalHeight, maxHeight, newWidth) => {
    //   let newHeight;
    //   if (isMax && maxHeight > this.maxWidth && originalHeight > originalWidth) {
    //     newWidth = this.maxWidth;
    //   }
    //   if (newWidth) {
    //     newHeight = (newWidth / originalWidth) * originalHeight;
    //     if (newHeight > maxHeight) {
    //       newWidth = (maxHeight / originalHeight) * originalWidth;
    //       newHeight = (maxHeight / originalWidth) * originalWidth;
    //     }
    //   }
    //   return { width: Math.round(newWidth), height: Math.round(newHeight) };
    // };
    Ae(this, "scaleSize", (t, r, n, o) => {
      const i = n / t, s = o / r;
      if (s < 0.4 && i > s)
        return {
          width: n,
          height: r * i
        };
      const a = Math.min(i, s);
      return {
        width: t * a,
        height: r * a
      };
    });
    Ae(this, "autoResize", () => {
      var o;
      if (!this.frameSize.codedWidth)
        return;
      const t = this.isFullsCreen ? this.isMobile ? window.innerWidth - 20 : this.maxWidth : this.maxWidth, r = this.orientation == "landscape" ? window.innerWidth : window.innerHeight - (this.isMobile ? 12 : 50), n = this.scaleSize(this.frameSize.codedWidth, this.frameSize.codedHeight, t, r);
      this.width = n.width, this.height = n.height, this.rootSize || (o = this.setIsConnect) == null || o.call(this, !0), this.rootSize = { width: n.width, height: n.height };
    });
    Ae(this, "setOrientation", (t) => {
      this.orientation = t, this.isMobile && screen.orientation.lock(t);
    });
    Ae(this, "setVideoMeta", (t) => {
      const r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this.videoMeta = r;
    });
    Ae(this, "buildDecoder", () => {
      const t = new VideoDecoder({
        output: async (r) => {
          const n = await createImageBitmap(r);
          this.frameSize = { codedWidth: r.codedWidth, codedHeight: r.codedHeight }, this.ctx.clearRect(0, 0, this.height, this.height);
          const o = this.canvasRef.current;
          this.orientation == "landscape" ? (o.width = this.height, o.height = this.width, this.ctx.translate(0, this.width), this.ctx.rotate(Math.PI / 2), this.ctx.scale(-1, -1), this.ctx.drawImage(n, 0, 0, this.width, this.height)) : (o.width = this.width, o.height = this.height, this.ctx.drawImage(n, 0, 0, this.width, this.height)), n.close(), r.close();
        },
        error: (r) => console.error("Decoder error:", r)
      });
      return t.configure({
        codec: this.codec,
        hardwareAcceleration: this.hardwareAcceleration,
        optimizeForLatency: !0
      }), t;
    });
    Ae(this, "isKeyFrame", (t) => {
      for (let r = 0; r <= t.length - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t.length - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Ae(this, "concatUint8Arrays", (t, r) => {
      const n = Array.from(t).concat(Array.from(r));
      return new Uint8Array(n);
    });
    Ae(this, "decode", (t) => {
      if (!this.decoder || this.decoder.state == "close" || !this.videoMeta) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const n = this.isKeyFrame(r);
      n && (this.iframe = r), this.iframe && this.videoMeta && (this.isPlay || (r = this.concatUint8Arrays(this.videoMeta, this.iframe), this.isPlay = !0), this.decoder.decode(
        new EncodedVideoChunk({
          timestamp: performance.now() * 1e3,
          type: n ? "key" : "delta",
          data: r
        })
      ));
    });
    this.canvasRef = n, this.codec = o, this.isMobile = t, this.maxWidth = r, this.setIsConnect = s, this.width = null, this.height = null, this.isPlay = null, this.videoMeta = null, this.iframe = null, this.frameSize = { width: null, height: null }, this.rootSize = null, this.orientation = "portrait", this.isFullsCreen = null, this.hardwareAcceleration = i, this.ctx = n.current.getContext("2d"), this.decoder = this.buildDecoder();
  }
}
const ZC = Fr((e, t) => {
  const {
    api: r,
    dataDevice: n,
    showAssistive: o,
    showDeviceId: i,
    onSyncEvent: s,
    onSyncButton: a,
    maxWidth: c,
    codec: l,
    hardwareAcceleration: u
  } = e, f = n.device_id, d = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), v = "control", p = ae(null), g = ae(null), h = ae(null), S = ae(null), [y, w] = qe(null), [x, b] = qe(null), [O, E] = qe({ showMenu: !1, isDown: !1 }), [N, M] = qe(null), [q, K] = qe(null), X = `canvas_${f}`, $ = `screen_${f}`, B = `screen_main_${f}`, [H, A] = qe([]), _ = ae(null), T = ae(/* @__PURE__ */ new Map());
  Oe(() => {
    b(i);
  }, [i]);
  const P = (k) => {
    A((j) => [...j, k]);
  }, L = (k) => {
    p.current.emit("message", k), s == null || s(k);
  };
  Fl(t, () => ({
    api: async function(k, j = 5e3) {
      return new Promise((F, Q) => {
        const ee = setTimeout(() => {
          T.current.delete(k.taskId), Q({ action: k.action, taskId: k.taskId, status: !1, message: "Timeout waiting for response" });
        }, j);
        T.current.set(k.taskId, (oe) => {
          clearTimeout(ee), F(oe);
        }), p.current.emit("message", k);
      });
    },
    sync: function(k) {
      p.current.emit("message", k);
    },
    getDeviceId: function() {
      return n.device_id;
    }
  })), Oe(() => {
    (async () => {
      try {
        const k = {
          url: r,
          method: "POST",
          timeout: 1e4,
          headers: { "Content-Type": "application/json" },
          data: {
            device_id: n.device_id,
            password: n.passwd
          }
        }, j = await pC(k);
        w(j.data);
      } catch (k) {
        P({ msg: k, type: "error" });
      }
    })();
  }, [q]), Oe(() => {
    if (p.current || !y) return;
    const k = mo(y, {
      reconnection: !1
    });
    return k.on("connect", () => {
      k.emit("join_room", {
        action: "connect",
        type_client: v,
        device_id: n.device_id,
        isMobile: d,
        passwd: n.passwd
      });
    }), k.on("join_room", (j) => {
      j.status == !0 ? (p.current = k, k.emit("message", { action: "timeSync", ts: Date.now() }), k.emit("message", { action: "onScreenEvent" })) : P({ msg: j.msg, type: "error" });
    }), k.on("screen", (j) => {
      _.current.decode(j);
    }), k.on("video_meta", (j) => {
      j ? (_.current.setVideoMeta(j), _.current.iframe || k.emit("message", { action: "onSyncIFrame" })) : k.emit("video_meta", { action: "get_video_meta" });
    }), k.on("message", (j) => {
      if ((j.action == "COPY_TEXT" || j.action == "shortcutEvent") && j.text.length > 0 ? navigator.clipboard.writeText(j.text) : j.action == "orientation" && (_.current.setOrientation(j.value), S.current.fixTouch(j.value)), j.taskId) {
        const F = T.current.get(j.taskId);
        F && (F(j), T.current.delete(j.taskId));
      }
    }), k.on("connect_error", (j) => {
      P({ msg: j, type: "error" });
    }), k.on("disconnect", (j) => {
      P({ msg: "connection closed code: " + j.code, type: "info" });
    }), () => {
      k && k.disconnect();
    };
  }, [y]), Oe(() => {
    h.current && (_.current = new AC(d, c, h, l, u, M));
  }, [q]), Oe(() => {
    const k = () => {
      const j = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      _.current.isFullsCreen = !!j, S.current.setFullscreen(!!j), S.current.fixTouch();
    };
    return document.addEventListener("fullscreenchange", k), () => {
      document.removeEventListener("fullscreenchange", k);
    };
  }, [q]), Oe(() => {
    let k;
    const j = () => {
      _.current && _.current.autoResize(), k = requestAnimationFrame(j);
    };
    return j(), () => cancelAnimationFrame(k);
  }, []), Oe(() => {
    let k;
    return k = setInterval(() => {
      p.current && p.current.emit("message", { action: "timeSync", ts: Date.now() });
    }, 6e4), () => clearInterval(k);
  }, [q]);
  const D = () => {
    p.current && (p.current.disconnect(), p.current = null), w(null), A([]), M(null), K(Date.now());
  };
  return /* @__PURE__ */ V.jsx(Op, { id: B, children: H.length == 0 ? /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    !N && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      x && /* @__PURE__ */ V.jsx(dc, { children: n.device_id }),
      /* @__PURE__ */ V.jsxs($d, { align: "center", gap: "middle", children: [
        /* @__PURE__ */ V.jsx(Sn, { size: "large" }),
        /* @__PURE__ */ V.jsx(Sn, { size: "large" }),
        /* @__PURE__ */ V.jsx(Sn, { size: "large" })
      ] })
    ] }),
    /* @__PURE__ */ V.jsxs(Tp, { ref: g, id: $, style: N ? {} : { height: 0, width: 0, backgroundColor: "red" }, children: [
      x && /* @__PURE__ */ V.jsx(dc, { children: n.device_id }),
      o ? /* @__PURE__ */ V.jsx(
        RC,
        {
          status: {
            get: O,
            set: E
          },
          ref: S,
          canvasRef: h,
          displayId: f,
          isMobile: d,
          isShowDeviceId: x,
          onSenData: (k, j) => {
            j.shortcut === "device_id" ? b(!x) : j.shortcut === "sync" ? a == null || a(n.device_id) : j.shortcut === "reload" ? D() : j.shortcut === "unlock" ? p.current.emit("message", { action: "onScreenEvent" }) : L(j);
          }
        }
      ) : null,
      /* @__PURE__ */ V.jsx(
        CC,
        {
          canvasContent: {
            id: X,
            tabIndex: "0",
            draggable: "false"
          },
          canvasRef: h,
          isMobile: d,
          assistive: O,
          onRemoteEvent: (k, j) => {
            k === ih ? E({ ...O, showMenu: !1 }) : L(j);
          }
        }
      )
    ] })
  ] }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    H == null ? void 0 : H.map((k, j) => /* @__PURE__ */ V.jsx(fd, { style: { margin: 5 }, message: k.msg, type: k.type, showIcon: !0, closable: !0 }, j)),
    /* @__PURE__ */ V.jsx(fi, { style: { margin: 10 }, type: "primary", icon: /* @__PURE__ */ V.jsx(_u, {}), onClick: D, children: "Reconnect" })
  ] }) });
});
export {
  ZC as ViewRP
};
