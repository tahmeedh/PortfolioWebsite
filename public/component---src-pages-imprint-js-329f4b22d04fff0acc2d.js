(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "A2+M": function(t, e, n) {
      var r = n("X8hv");
      t.exports = { MDXRenderer: r };
    },
    IoOV: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "pageQuery", function() {
          return s;
        });
      var r = n("q1tI"),
        o = n.n(r),
        c = n("vOnD"),
        i = n("A2+M"),
        u = n("lOlV"),
        a = n("Bl7J"),
        f = n("vrFN"),
        l = c.default.section.withConfig({
          displayName: "imprint__StyledSection",
          componentId: "ef41nr-0"
        })(
          [
            "width:100%;max-width:62.5rem;margin:0 auto;padding:0 2.5rem;height:auto;background:",
            ";h1{font-size:1.5rem;}h2{font-size:1.25rem;}h3{font-size:1rem;margin-bottom:1rem;}"
          ],
          function(t) {
            return t.theme.colors.background;
          }
        ),
        p = Object(c.default)(u.a).withConfig({
          displayName: "imprint__StyledContentWrapper",
          componentId: "ef41nr-1"
        })(["&&{width:100%;max-width:36rem;margin:0;padding:0;height:100%;}"]);
      e.default = function(t) {
        var e = t.data.imprint.edges[0].node,
          n = e.body,
          r = e.frontmatter;
        return o.a.createElement(
          a.a,
          { splashScreen: !1 },
          o.a.createElement(f.a, {
            title: "Imprint - Portfolio Minimal",
            meta: [{ name: "robots", content: "noindex" }]
          }),
          o.a.createElement(
            l,
            { id: r.title },
            o.a.createElement(
              p,
              null,
              o.a.createElement("h1", null, r.title),
              o.a.createElement(i.MDXRenderer, null, n)
            )
          )
        );
      };
      var s = "62034552";
    },
    X8hv: function(t, e, n) {
      function r() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function o(t, e, n) {
        return (o = r()
          ? Reflect.construct
          : function(t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(t, r))();
              return n && c(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function i(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function(e) {
                f(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      n("xtjI"),
        n("Dq+y"),
        n("Ggvi"),
        n("YbXK"),
        n("cFtU"),
        n("m210"),
        n("4DPX"),
        n("rzGZ"),
        n("q8oJ"),
        n("8npG"),
        n("nWfQ"),
        n("nWfQ"),
        n("YbXK"),
        n("cFtU"),
        n("q8oJ"),
        n("m210"),
        n("xtjI"),
        n("4DPX"),
        n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("Ggvi");
      var l = n("q1tI"),
        p = n("E/Ix"),
        s = p.useMDXComponents,
        m = p.mdx,
        y = n("BfwJ").useMDXScope;
      t.exports = function(t) {
        var e = t.scope,
          n = t.components,
          r = t.children,
          c = (function(t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              c = Object.keys(t);
            for (r = 0; r < c.length; r++)
              (n = c[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, ["scope", "components", "children"]),
          u = s(n),
          f = y(e),
          p = l.useMemo(
            function() {
              if (!r) return null;
              var t = a({ React: l, mdx: m }, f),
                e = Object.keys(t),
                n = e.map(function(e) {
                  return t[e];
                });
              return o(Function, ["_fn"].concat(i(e), ["" + r])).apply(
                void 0,
                [{}].concat(i(n))
              );
            },
            [r, e]
          );
        return l.createElement(p, a({ components: u }, c));
      };
    },
    nWfQ: function(t, e, n) {
      var r = n("P8UN"),
        o = n("nsRs"),
        c = n("nONw"),
        i = n("1a8y"),
        u = n("BjK0"),
        a = n("96qb"),
        f = n("16Xr"),
        l = (n("emib").Reflect || {}).construct,
        p = a(function() {
          function t() {}
          return !(l(function() {}, [], t) instanceof t);
        }),
        s = !a(function() {
          l(function() {});
        });
      r(r.S + r.F * (p || s), "Reflect", {
        construct: function(t, e) {
          c(t), i(e);
          var n = arguments.length < 3 ? t : c(arguments[2]);
          if (s && !p) return l(t, e, n);
          if (t == n) {
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
            }
            var r = [null];
            return r.push.apply(r, e), new (f.apply(t, r))();
          }
          var a = n.prototype,
            m = o(u(a) ? a : Object.prototype),
            y = Function.apply.call(t, m, e);
          return u(y) ? y : m;
        }
      });
    }
  }
]);
//# sourceMappingURL=component---src-pages-imprint-js-329f4b22d04fff0acc2d.js.map
