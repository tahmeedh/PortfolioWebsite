(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "A2+M": function(e, t, n) {
      var r = n("X8hv");
      e.exports = { MDXRenderer: r };
    },
    X8hv: function(e, t, n) {
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
        } catch (e) {
          return !1;
        }
      }
      function o(e, t, n) {
        return (o = r()
          ? Reflect.construct
          : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var o = new (Function.bind.apply(e, r))();
              return n && c(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function a(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function(t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
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
        d = p.mdx,
        m = n("BfwJ").useMDXScope;
      e.exports = function(e) {
        var t = e.scope,
          n = e.components,
          r = e.children,
          c = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, ["scope", "components", "children"]),
          i = s(n),
          f = m(t),
          p = l.useMemo(
            function() {
              if (!r) return null;
              var e = u({ React: l, mdx: d }, f),
                t = Object.keys(e),
                n = t.map(function(t) {
                  return e[t];
                });
              return o(Function, ["_fn"].concat(a(t), ["" + r])).apply(
                void 0,
                [{}].concat(a(n))
              );
            },
            [r, t]
          );
        return l.createElement(p, u({ components: i }, c));
      };
    },
    jNGU: function(e, t, n) {
      e.exports = n.p + "static/tahmeed-37ac8a3cf7dec3dc4871b6b7d7a62755.pdf";
    },
    nWfQ: function(e, t, n) {
      var r = n("P8UN"),
        o = n("nsRs"),
        c = n("nONw"),
        a = n("1a8y"),
        i = n("BjK0"),
        u = n("96qb"),
        f = n("16Xr"),
        l = (n("emib").Reflect || {}).construct,
        p = u(function() {
          function e() {}
          return !(l(function() {}, [], e) instanceof e);
        }),
        s = !u(function() {
          l(function() {});
        });
      r(r.S + r.F * (p || s), "Reflect", {
        construct: function(e, t) {
          c(e), a(t);
          var n = arguments.length < 3 ? e : c(arguments[2]);
          if (s && !p) return l(e, t, n);
          if (e == n) {
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
            }
            var r = [null];
            return r.push.apply(r, t), new (f.apply(e, r))();
          }
          var u = n.prototype,
            d = o(i(u) ? u : Object.prototype),
            m = Function.apply.call(e, d, t);
          return i(m) ? m : d;
        }
      });
    },
    qTMf: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return m;
        });
      var r = n("q1tI"),
        o = n.n(r),
        c = n("vOnD"),
        a = n("A2+M"),
        i = n("jNGU"),
        u = n.n(i),
        f = n("lOlV"),
        l = n("Bl7J"),
        p = n("vrFN"),
        s = c.default.section.withConfig({
          displayName: "privacy__StyledSection",
          componentId: "wiv403-0"
        })(
          [
            "width:100%;max-width:62.5rem;margin:0 auto;padding:0 2.5rem;height:auto;background:",
            ";h1{font-size:1.5rem;}h2{font-size:1.25rem;}h3{font-size:1rem;margin-bottom:1rem;}"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        d = Object(c.default)(f.a).withConfig({
          displayName: "privacy__StyledContentWrapper",
          componentId: "wiv403-1"
        })(["&&{width:100%;max-width:36rem;margin:0;padding:0;height:100%;}"]);
      t.default = function(e) {
        var t = e.data.privacy.edges[0].node,
          n = t.body,
          r = t.frontmatter;
        return o.a.createElement(
          l.a,
          { splashScreen: !1 },
          o.a.createElement(p.a, {
            title: "Tahmeed Hossain - Portfolio",
            meta: [{ name: "robots", content: "noindex" }]
          }),
          o.a.createElement(
            s,
            { id: r.title },
            o.a.createElement(
              d,
              null,
              o.a.createElement("h1", null, r.title),
              o.a.createElement(
                "div",
                { className: "App" },
                o.a.createElement(
                  "a",
                  { href: u.a, target: "_blank" },
                  "Download Pdf"
                )
              ),
              o.a.createElement(a.MDXRenderer, null, n)
            )
          )
        );
      };
      var m = "1375238114";
    }
  }
]);
//# sourceMappingURL=component---src-pages-privacy-js-90bf75d973994403eec2.js.map
