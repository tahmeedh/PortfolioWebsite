(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    w2l6: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        o = n.n(a),
        i = n("vOnD"),
        l = n("Bl7J"),
        r = n("vrFN"),
        c = n("lOlV"),
        d = i.default.section.withConfig({
          displayName: "sc-404__StyledSection",
          componentId: "sc-1ozf03o-0"
        })(
          [
            "width:100%;max-width:62.5rem;margin:0 auto;padding:0 2.5rem;height:auto;background:",
            ";h1{font-size:1.5rem;}"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        s = Object(i.default)(c.a).withConfig({
          displayName: "sc-404__StyledContentWrapper",
          componentId: "sc-1ozf03o-1"
        })(["&&{width:100%;max-width:36rem;margin:0;padding:0;height:100%;}"]);
      t.default = function() {
        return o.a.createElement(
          l.a,
          { splashScreen: !1 },
          o.a.createElement(r.a, {
            title: "404: Not found",
            meta: [{ name: "robots", content: "noindex" }]
          }),
          o.a.createElement(
            d,
            null,
            o.a.createElement(
              s,
              null,
              o.a.createElement("h1", null, "NOT FOUND"),
              o.a.createElement(
                "p",
                null,
                "You just hit a route that doesn't exist... the sadness."
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-70fde88fac94f97d65a1.js.map
