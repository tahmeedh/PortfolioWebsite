(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "3nLz": function(e, t, r) {
      "use strict";
      r("t+fG")("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    "9eSz": function(e, t, r) {
      "use strict";
      r("rzGZ"), r("Dq+y"), r("8npG"), r("YbXK"), r("eMsz"), r("3nLz");
      var n = r("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        o = n(r("v06X")),
        a = n(r("XEEL")),
        c = n(r("uDP2")),
        l = n(r("j8BX")),
        s = n(r("q1tI")),
        u = n(r("17x9")),
        d = function(e) {
          var t = (0, l.default)({}, e),
            r = t.resolutions,
            n = t.sizes,
            i = t.critical;
          return (
            r && ((t.fixed = r), delete t.resolutions),
            n && ((t.fluid = n), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            r = e.fixed;
          return ((t && t[0]) || (r && r[0])).src;
        },
        m = Object.create({}),
        p = function(e) {
          var t = d(e),
            r = f(t);
          return m[r] || !1;
        },
        h =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        g = "undefined" != typeof window,
        b = g && window.IntersectionObserver,
        y = new WeakMap();
      function v(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.srcSet,
            n = e.srcSetWebp,
            i = e.media,
            o = e.sizes;
          return s.default.createElement(
            s.default.Fragment,
            { key: t },
            n &&
              s.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: n,
                sizes: o
              }),
            s.default.createElement("source", { media: i, srcSet: r, sizes: o })
          );
        });
      }
      function w(e) {
        var t = [],
          r = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : r).push(e);
          }),
          [].concat(t, r)
        );
      }
      function x(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            n = e.tracedSVG;
          return s.default.createElement("source", {
            key: t,
            media: r,
            srcSet: n
          });
        });
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            n = e.base64;
          return s.default.createElement("source", {
            key: t,
            media: r,
            srcSet: n
          });
        });
      }
      function k(e, t) {
        var r = e.srcSet,
          n = e.srcSetWebp,
          i = e.media,
          o = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? n : r) +
          '" ' +
          (o ? 'sizes="' + o + '" ' : "") +
          "/>"
        );
      }
      var O = function(e, t) {
          var r =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            r && (r.observe(e), y.set(e, t)),
            function() {
              r.unobserve(e), y.delete(e);
            }
          );
        },
        j = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            r = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            a = e.width ? 'width="' + e.width + '" ' : "",
            c = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            s = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? k(e, !0) : "") + k(e);
              })
              .join("") +
            "<img " +
            s +
            a +
            c +
            r +
            n +
            t +
            o +
            i +
            l +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        S = function(e) {
          var t = e.src,
            r = e.imageVariants,
            n = e.generateSources,
            i = e.spreadProps,
            o = s.default.createElement(_, (0, l.default)({ src: t }, i));
          return r.length > 1
            ? s.default.createElement("picture", null, n(r), o)
            : o;
        },
        _ = s.default.forwardRef(function(e, t) {
          var r = e.sizes,
            n = e.srcSet,
            i = e.src,
            o = e.style,
            a = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            m = (0, c.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable"
            ]);
          return s.default.createElement(
            "img",
            (0, l.default)({ sizes: r, srcSet: n, src: i }, m, {
              onLoad: a,
              onError: u,
              ref: t,
              loading: d,
              draggable: f,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                o
              )
            })
          );
        });
      _.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func
      };
      var L = (function(e) {
        function t(t) {
          var r;
          ((r = e.call(this, t) || this).seenBefore = g && p(t)),
            (r.isCritical = "eager" === t.loading || t.critical),
            (r.addNoScript = !(r.isCritical && !t.fadeIn)),
            (r.useIOSupport = !h && b && !r.isCritical && !r.seenBefore);
          var n = r.isCritical || (g && (h || !r.useIOSupport));
          return (
            (r.state = {
              isVisible: n,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !r.seenBefore && t.fadeIn
            }),
            (r.imageRef = s.default.createRef()),
            (r.handleImageLoaded = r.handleImageLoaded.bind((0, o.default)(r))),
            (r.handleRef = r.handleRef.bind((0, o.default)(r))),
            r
          );
        }
        (0, a.default)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (r.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (r.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = O(e, function() {
                var e = p(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (r.handleImageLoaded = function() {
            var e, t, r;
            (e = this.props),
              (t = d(e)),
              (r = f(t)),
              (m[r] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (r.render = function() {
            var e = d(this.props),
              t = e.title,
              r = e.alt,
              n = e.className,
              i = e.style,
              o = void 0 === i ? {} : i,
              a = e.imgStyle,
              c = void 0 === a ? {} : a,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              m = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              g = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              w = e.itemProp,
              k = e.loading,
              O = e.draggable,
              L = !1 === this.state.fadeIn || this.state.imgLoaded,
              C = !0 === this.state.fadeIn && !this.state.imgCached,
              P = (0, l.default)(
                {
                  opacity: L ? 1 : 0,
                  transition: C ? "opacity " + b + "ms" : "none"
                },
                c
              ),
              N = "boolean" == typeof g ? "lightgray" : g,
              I = { transitionDelay: b + "ms" },
              z = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                C && I,
                {},
                c,
                {},
                f
              ),
              R = {
                title: t,
                alt: this.state.isVisible ? "" : r,
                style: z,
                className: m,
                itemProp: w
              };
            if (p) {
              var T = p,
                D = T[0];
              return s.default.createElement(
                y,
                {
                  className: (n || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    o
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(D.srcSet)
                },
                s.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / D.aspectRatio + "%"
                  }
                }),
                N &&
                  s.default.createElement(y, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: N,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      C && I
                    )
                  }),
                D.base64 &&
                  s.default.createElement(S, {
                    src: D.base64,
                    spreadProps: R,
                    imageVariants: T,
                    generateSources: E
                  }),
                D.tracedSVG &&
                  s.default.createElement(S, {
                    src: D.tracedSVG,
                    spreadProps: R,
                    imageVariants: T,
                    generateSources: x
                  }),
                this.state.isVisible &&
                  s.default.createElement(
                    "picture",
                    null,
                    v(T),
                    s.default.createElement(_, {
                      alt: r,
                      title: t,
                      sizes: D.sizes,
                      src: D.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: D.srcSet,
                      style: P,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: k,
                      draggable: O
                    })
                  ),
                this.addNoScript &&
                  s.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: j(
                        (0, l.default)({ alt: r, title: t, loading: k }, D, {
                          imageVariants: T
                        })
                      )
                    }
                  })
              );
            }
            if (h) {
              var M = h,
                V = M[0],
                G = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: V.width,
                    height: V.height
                  },
                  o
                );
              return (
                "inherit" === o.display && delete G.display,
                s.default.createElement(
                  y,
                  {
                    className: (n || "") + " gatsby-image-wrapper",
                    style: G,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(V.srcSet)
                  },
                  N &&
                    s.default.createElement(y, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: N,
                          width: V.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: V.height
                        },
                        C && I
                      )
                    }),
                  V.base64 &&
                    s.default.createElement(S, {
                      src: V.base64,
                      spreadProps: R,
                      imageVariants: M,
                      generateSources: E
                    }),
                  V.tracedSVG &&
                    s.default.createElement(S, {
                      src: V.tracedSVG,
                      spreadProps: R,
                      imageVariants: M,
                      generateSources: x
                    }),
                  this.state.isVisible &&
                    s.default.createElement(
                      "picture",
                      null,
                      v(M),
                      s.default.createElement(_, {
                        alt: r,
                        title: t,
                        width: V.width,
                        height: V.height,
                        sizes: V.sizes,
                        src: V.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: V.srcSet,
                        style: P,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: k,
                        draggable: O
                      })
                    ),
                  this.addNoScript &&
                    s.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: j(
                          (0, l.default)({ alt: r, title: t, loading: k }, V, {
                            imageVariants: M
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(s.default.Component);
      L.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var C = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string
        }),
        P = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string
        });
      L.propTypes = {
        resolutions: C,
        sizes: P,
        fixed: u.default.oneOfType([C, u.default.arrayOf(C)]),
        fluid: u.default.oneOfType([P, u.default.arrayOf(P)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool
      };
      var N = L;
      t.default = N;
    },
    "A2+M": function(e, t, r) {
      var n = r("X8hv");
      e.exports = { MDXRenderer: n };
    },
    RJWs: function(e, t, r) {
      r("rzGZ"),
        r("Dq+y"),
        r("q8oJ"),
        r("C9fy"),
        r("6kNP"),
        r("8npG"),
        r("LagC"),
        r("pJf4"),
        r("JHok"),
        r("pS08"),
        r("m210"),
        r("4DPX");
      var n = (function(e) {
        "use strict";
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function c(e, t, r, n) {
          var i = t && t.prototype instanceof u ? t : u,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function(e, t, r) {
              var n = "suspendedStart";
              return function(i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return O();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = v(a, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(e, t, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === s)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (n) {
            return { type: "throw", arg: n };
          }
        }
        e.wrap = c;
        var s = {};
        function u() {}
        function d() {}
        function f() {}
        var m = {};
        m[i] = function() {
          return this;
        };
        var p = Object.getPrototypeOf,
          h = p && p(p(k([])));
        h && h !== t && r.call(h, i) && (m = h);
        var g = (f.prototype = u.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function y(e, t) {
          var n;
          this._invoke = function(i, o) {
            function a() {
              return new t(function(n, a) {
                !(function n(i, o, a, c) {
                  var s = l(e[i], e, o);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      d = u.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function(e) {
                            n("next", e, a, c);
                          },
                          function(e) {
                            n("throw", e, a, c);
                          }
                        )
                      : t.resolve(d).then(
                          function(e) {
                            (u.value = e), a(u);
                          },
                          function(e) {
                            return n("throw", e, a, c);
                          }
                        );
                  }
                  c(s.arg);
                })(i, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function v(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                v(e, t),
                "throw" === t.method)
              )
                return s;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var n = l(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), s
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                s)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              s);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g.constructor = f),
          (f.constructor = d),
          (f[a] = d.displayName = "GeneratorFunction"),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), a in e || (e[a] = "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(y.prototype),
          (y.prototype[o] = function() {
            return this;
          }),
          (e.AsyncIterator = y),
          (e.async = function(t, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new y(c(t, r, n, i), o);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function(e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(g),
          (g[a] = "Generator"),
          (g[i] = function() {
            return this;
          }),
          (g.toString = function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = k),
          (E.prototype = {
            constructor: E,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), s)
                  : this.complete(a)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                s
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), s;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    x(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            }
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = n;
      } catch (i) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    RXBc: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "pageQuery", function() {
          return xe;
        });
      var n = r("q1tI"),
        i = r.n(n),
        o = r("Bl7J"),
        a = r("vrFN"),
        c = (r("6kNP"), r("8npG"), r("kD0k")),
        l = r.n(c),
        s = (r("ls82"), r("vOnD")),
        u = r("9eSz"),
        d = r.n(u),
        f = r("A2+M"),
        m = r("ZMKu"),
        p = function(e, t) {
          void 0 === t && (t = 0.25);
          var r = Object(n.useState)(!1),
            i = r[0],
            o = r[1];
          return (
            Object(n.useEffect)(
              function() {
                var r = e.current,
                  n = new IntersectionObserver(
                    function(e) {
                      var t = e[0];
                      t.isIntersecting && (o(!0), n.unobserve(t.target));
                    },
                    { threshold: t }
                  );
                return (
                  r &&
                    setTimeout(function() {
                      return n.observe(r);
                    }, 3500),
                  function() {
                    n.unobserve(r);
                  }
                );
              },
              [e, t]
            ),
            i
          );
        },
        h = s.default.button.withConfig({
          displayName: "Button__StyledButton",
          componentId: "sc-9e2nwx-0"
        })(
          [
            "width:15.625rem;height:3rem;background-color:",
            ";color:#ffffff;padding:1rem;margin:0 ",
            ";font-size:0.875rem;font-weight:700;text-transform:uppercase;border:none;border-radius:",
            ";text-decoration:none;text-align:",
            ";&:hover,&:focus,&:active{cursor:pointer;outline:none;}svg{height:1rem;width:1rem;margin-right:.3rem;margin-bottom:-.175rem;}"
          ],
          function(e) {
            var t = e.theme,
              r = e.color;
            return t.colors[r] || "black";
          },
          function(e) {
            return e.center ? "auto" : "0";
          },
          function(e) {
            return e.theme.borderRadius;
          },
          function(e) {
            var t = e.textAlign;
            return t || "left";
          }
        ),
        g = function(e) {
          var t = e.onClick,
            r = e.color,
            n = e.textAlign,
            o = e.center,
            a = e.children;
          return i.a.createElement(
            h,
            { onClick: t, color: r, textAlign: n, center: o },
            a
          );
        },
        b = r("0bdg"),
        y = r("lOlV"),
        v = r("zgm0"),
        w = (r("pJf4"), r("8SHQ")),
        x = r.n(w),
        E = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              fill: t,
              x: "0px",
              y: "0px",
              viewBox: "250 -250 1000 1000"
            },
            i.a.createElement(
              "g",
              null,
              i.a.createElement("path", {
                d:
                  "M862.8,740L643.7,355.8L983.8-240h229L872.6,355.8L1091.8,740H862.8z M503.1,443.7l170.1-280L545.6-60.9H329.7 l127.5,224.6l-170.1,280H503.1z"
              })
            )
          );
        };
      E.defaultProps = { color: "#000000" };
      var k = E,
        O = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              fill: t,
              x: "0px",
              y: "0px",
              width: "430.117px",
              height: "430.117px",
              viewBox: "0 0 430.117 430.117"
            },
            i.a.createElement(
              "g",
              null,
              i.a.createElement("path", {
                d:
                  "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"
              })
            )
          );
        };
      O.defaultProps = { color: "#ffffff" };
      var j = O,
        S = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              fill: t,
              x: "0px",
              y: "0px",
              viewBox: "-237 239 24 24"
            },
            i.a.createElement("path", {
              d:
                "M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5 c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2 c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"
            })
          );
        };
      S.defaultProps = { color: "#ffffff" };
      var _ = S,
        L = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              version: "1.1",
              role: "img",
              fill: t,
              xmlns: "http://www.w3.org/2000/svg",
              x: "0px",
              y: "0px",
              viewBox: "262 -262 1024 1024"
            },
            i.a.createElement("path", {
              d:
                "M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"
            })
          );
        };
      L.defaultProps = { color: "#ffffff" };
      var C = L,
        P = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              version: "1.1",
              role: "img",
              fill: t,
              xmlns: "http://www.w3.org/2000/svg",
              x: "0px",
              y: "0px",
              width: "430.123px",
              height: "430.123px",
              viewBox: "0 0 430.123 430.123"
            },
            i.a.createElement(
              "g",
              null,
              i.a.createElement("path", {
                id: "Behance",
                d:
                  "M388.432,119.12H280.659V92.35h107.782v26.77H388.432z M208.912,228.895 c6.954,10.771,10.429,23.849,10.429,39.203c0,15.878-3.918,30.122-11.889,42.704c-5.071,8.326-11.367,15.359-18.932,21.021 c-8.52,6.548-18.607,11.038-30.203,13.437c-11.633,2.403-24.224,3.617-37.787,3.617H0V81.247h129.25 c32.579,0.53,55.676,9.969,69.315,28.506c8.184,11.369,12.239,25.011,12.239,40.868c0,16.362-4.104,29.454-12.368,39.401 c-4.597,5.577-11.388,10.65-20.378,15.229C191.675,210.236,202.007,218.086,208.912,228.895z M61.722,186.76h56.632 c11.638,0,21.046-2.212,28.292-6.634c7.241-4.415,10.854-12.263,10.854-23.531c0-12.449-4.784-20.712-14.375-24.689 c-8.244-2.763-18.792-4.186-31.591-4.186H61.722V186.76z M162.953,264.275c0-13.902-5.682-23.513-17.023-28.67 c-6.342-2.931-15.29-4.429-26.763-4.536H61.722v71.322h56.556c11.619,0,20.612-1.521,27.102-4.694 C157.084,291.863,162.953,280.76,162.953,264.275z M428.419,220.736c1.302,8.756,1.891,21.46,1.652,38.065H290.493 c0.77,19.266,7.421,32.739,20.035,40.449c7.607,4.835,16.83,7.196,27.63,7.196c11.388,0,20.67-2.879,27.815-8.797 c3.893-3.137,7.327-7.565,10.296-13.152h51.16c-1.34,11.379-7.5,22.92-18.57,34.648c-17.151,18.641-41.205,27.988-72.097,27.988 c-25.52,0-48.011-7.883-67.533-23.592C249.772,307.777,240,282.211,240,246.746c0-33.257,8.773-58.712,26.378-76.43 c17.67-17.751,40.474-26.586,68.583-26.586c16.661,0,31.68,2.978,45.079,8.965c13.357,5.993,24.396,15.425,33.09,28.388 C420.998,192.499,426.058,205.699,428.419,220.736z M378.062,225.73c-0.938-13.322-5.386-23.405-13.395-30.296 c-7.943-6.91-17.866-10.379-29.706-10.379c-12.886,0-22.836,3.708-29.906,10.996c-7.118,7.273-11.547,17.161-13.362,29.68H378.062 L378.062,225.73z"
              })
            ),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null),
            i.a.createElement("g", null)
          );
        };
      P.defaultProps = { color: "#000000" };
      var N = P,
        I = function(e) {
          var t = e.color;
          return i.a.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 194.818 194.818",
              x: "0px",
              y: "0px",
              role: "img",
              fill: t,
              width: "194.818px",
              height: "194.818px"
            },
            i.a.createElement(
              "g",
              null,
              i.a.createElement("path", {
                d:
                  "M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"
              }),
              i.a.createElement("path", {
                d:
                  "M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"
              })
            )
          );
        };
      I.defaultProps = { color: "#000000" };
      var z = I,
        R = function(e) {
          var t = e.name,
            r = e.color;
          switch (t.toLowerCase()) {
            case "xing":
              return i.a.createElement(k, { color: r });
            case "linkedin":
              return i.a.createElement(j, { color: r });
            case "medium":
              return i.a.createElement(_, { color: r });
            case "github":
              return i.a.createElement(C, { color: r });
            case "behance":
              return i.a.createElement(N, { color: r });
            case "external":
              return i.a.createElement(z, { color: r });
            default:
              return null;
          }
        },
        T = x.a.socialMedia,
        D = s.default.div.withConfig({
          displayName: "social__StyledSocialWrapper",
          componentId: "sc-1kpxmto-0"
        })(
          [
            "display:grid;grid-template-columns:repeat(",
            ',auto);justify-content:start;justify-items:start;margin-left:-2.5rem;margin-right:-2.5rem;padding-left:2.5rem;padding-right:2.5rem;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}&::after{content:"";width:2.5rem;}@media (hover:hover){&::-webkit-scrollbar{display:block;-webkit-appearance:none;}&::-webkit-scrollbar:horizontal{height:0.8rem;}&::-webkit-scrollbar-thumb{border-radius:8px;border:0.2rem solid white;background-color:rgba(0,0,0,0.5);}&::-webkit-scrollbar-track{background-color:#fff;border-radius:8px;}}a{margin-right:0.5rem;margin-bottom:0.75rem;@media (min-width:',
            "){margin-right:1rem;}}"
          ],
          function(e) {
            return e.itemCount + 1;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          }
        ),
        M = s.default.a.withConfig({
          displayName: "social__StyledSocialProfile",
          componentId: "sc-1kpxmto-1"
        })(
          [
            "width:",
            ";height:auto;background:",
            ";background:linear-gradient( to right,",
            " 50%,",
            " 50% );background-size:205% 100%;background-position:right bottom;border-radius:",
            ";border:0.125rem solid ",
            ";padding:",
            ";transition:all 0.1s ease-out;font-size:",
            ";font-weight:500;color:",
            ";&:hover{background-position:left bottom;color:#000000;}&:hover svg{filter:brightness(0) invert(1);}svg{height:1rem;width:1rem;margin-right:0.5rem;margin-bottom:-0.05rem;}"
          ],
          function(e) {
            var t = e.width;
            return t || "auto";
          },
          function(e) {
            return e.theme.colors.background;
          },
          function(e) {
            return e.theme.colors.primary;
          },
          function(e) {
            return e.theme.colors.background;
          },
          function(e) {
            return e.theme.borderRadius;
          },
          function(e) {
            return e.theme.colors.primary;
          },
          function(e) {
            var t = e.padding;
            return t || ".3rem 1.25rem";
          },
          function(e) {
            var t = e.fontSize;
            return t || "1rem";
          },
          function(e) {
            return e.theme.colors.primary;
          }
        ),
        V = function(e) {
          var t = e.width,
            r = e.padding,
            n = e.fontSize,
            o = e.fontWeight,
            a = e.withIcon;
          return i.a.createElement(
            D,
            { itemCount: T.length },
            T.map(function(e, c) {
              var l = e.name,
                s = e.url;
              return i.a.createElement(
                M,
                {
                  key: c,
                  href: s,
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                  "aria-label": l,
                  width: t,
                  padding: r,
                  fontSize: n,
                  fontWeight: o
                },
                a ? i.a.createElement(R, { name: l }) : null,
                " ",
                l
              );
            })
          );
        },
        G = (r("xtjI"), r("4DPX"), r("rzGZ"), r("Dq+y"), r("Ggvi"), r("TJpk")),
        W = r.n(G),
        q = r("I4A6");
      function F(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function(t) {
                A(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function A(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function B(e, t, r, n, i, o, a) {
        try {
          var c = e[o](a),
            l = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, i);
      }
      var X = Object(s.default)(m.a.div).withConfig({
          displayName: "splashScreen__StyledSplashScreen",
          componentId: "sc-12s9sfd-0"
        })(
          [
            "position:fixed;top:0;left:0%;z-index:900;height:100%;width:100%;display:flex;justify-content:center;align-items:center;background-color:",
            ";.logo-wrapper{position:relative;display:flex;justify-content:center;align-items:center;width:auto;height:4rem;}.backdrop{position:absolute;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:",
            ";}"
          ],
          function(e) {
            return e.theme.colors.primary;
          },
          function(e) {
            return e.theme.colors.primary;
          }
        ),
        J = function() {
          var e = Object(n.useContext)(b.a),
            t = e.state,
            r = e.setState,
            o = Object(m.b)(),
            a = Object(m.b)();
          return (
            Object(n.useEffect)(
              function() {
                (function() {
                  var e,
                    n =
                      ((e = l.a.mark(function e() {
                        return l.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), o.start({ opacity: 1 });
                              case 2:
                                return (
                                  (e.next = 4),
                                  a.start({
                                    height: "0%",
                                    transition: { delay: 0.8 }
                                  })
                                );
                              case 4:
                                return (
                                  (e.next = 6),
                                  o.start({
                                    opacity: 0,
                                    transition: { delay: 0.6 }
                                  })
                                );
                              case 6:
                                r(H({}, t, { isIntroDone: !0 }));
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })),
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            B(o, n, i, a, c, "next", e);
                          }
                          function c(e) {
                            B(o, n, i, a, c, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return n.apply(this, arguments);
                  };
                })()();
              },
              [o, a, r, t]
            ),
            i.a.createElement(
              X,
              { initial: { opacity: 0 }, animate: o },
              i.a.createElement(W.a, {
                bodyAttributes: { class: t.isIntroDone ? "" : "splashScreen" }
              }),
              i.a.createElement(
                "div",
                { className: "logo-wrapper" },
                i.a.createElement(m.a.div, {
                  className: "backdrop",
                  initial: { height: "100%" },
                  animate: a
                }),
                i.a.createElement(q.a, { color: "white", size: "3rem" })
              )
            )
          );
        },
        U = r("QHet"),
        Y = r.n(U);
      function K(e, t, r, n, i, o, a) {
        try {
          var c = e[o](a),
            l = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, i);
      }
      var Q = s.default.section.withConfig({
          displayName: "hero__StyledSection",
          componentId: "uhgvfn-0"
        })(
          [
            "width:100%;height:auto;background:",
            ";margin-bottom:1rem;.resume{position:absolute;right:120px;top:490px;}"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        Z = Object(s.default)(y.a).withConfig({
          displayName: "hero__StyledContentWrapper",
          componentId: "uhgvfn-1"
        })(
          [
            "&&{width:100%;height:100%;min-height:60vh;display:flex;flex-direction:column;justify-content:center;@media (min-width:",
            "){}.greetings{display:flex;justify-content:flex-start;align-items:center;}.emoji{margin-left:0.75rem;width:2.2rem;height:2.2rem;@media (min-width:",
            "){margin-left:1rem;width:3rem;height:3rem;}}.title{margin-bottom:1.5rem;@media (min-width:",
            "){margin-bottom:0;}}.subtitle{margin-top:-0.75rem;}.description{font-size:1.125rem;margin-bottom:2rem;}}"
          ],
          function(e) {
            return e.theme.breakpoints.sm;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          }
        ),
        $ = m.a.custom(v.a),
        ee = function(e) {
          var t = e.content[0].node,
            r = t.frontmatter,
            o = t.body,
            a = Object(n.useContext)(b.a).state.isIntroDone,
            c = Object(m.b)(),
            s = Object(m.b)(),
            u = Object(m.b)(),
            h = Object(m.b)();
          Object(n.useEffect)(
            function() {
              (function() {
                var e,
                  t =
                    ((e = l.a.mark(function e() {
                      return l.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!a) {
                                e.next = 8;
                                break;
                              }
                              return (
                                s.start({
                                  rotate: [
                                    0,
                                    -10,
                                    12,
                                    -10,
                                    9,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                  ],
                                  transition: {
                                    duration: 2.5,
                                    loop: 3,
                                    repeatDelay: 1
                                  }
                                }),
                                (e.next = 4),
                                c.start({
                                  opacity: 1,
                                  y: 0,
                                  transition: { delay: 0.4 }
                                })
                              );
                            case 4:
                              return (
                                (e.next = 6), u.start({ opacity: 1, x: 0 })
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                h.start({
                                  boxShadow:
                                    "inset 0 -2rem 0 " + Y.a.colors.secondary,
                                  transition: { delay: 0.4, ease: "circOut" }
                                })
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                    function() {
                      var t = this,
                        r = arguments;
                      return new Promise(function(n, i) {
                        var o = e.apply(t, r);
                        function a(e) {
                          K(o, n, i, a, c, "next", e);
                        }
                        function c(e) {
                          K(o, n, i, a, c, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                return function() {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [a, s, c, u, h]
          );
          var y = Object(n.useRef)(),
            v = p(y);
          return i.a.createElement(
            Q,
            { id: "hero" },
            !a && i.a.createElement(J, null),
            i.a.createElement(
              Z,
              null,
              i.a.createElement(
                m.a.div,
                { initial: { opacity: 0, y: 20 }, animate: c },
                i.a.createElement(
                  "h1",
                  { className: "title" },
                  i.a.createElement(
                    "div",
                    { className: "greetings" },
                    r.greetings,
                    i.a.createElement(
                      m.a.div,
                      { animate: s, style: { originX: 0.7, originY: 0.7 } },
                      i.a.createElement(d.a, {
                        className: "emoji",
                        fluid: r.icon.childImageSharp.fluid
                      })
                    )
                  ),
                  r.title
                ),
                i.a.createElement(
                  "h2",
                  { className: "subtitle" },
                  r.subtitlePrefix,
                  " ",
                  i.a.createElement(
                    $,
                    { animate: h, color: "tertiary", big: !0 },
                    r.subtitle
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: "description" },
                  i.a.createElement(f.MDXRenderer, null, o)
                )
              ),
              i.a.createElement(
                m.a.div,
                { initial: { opacity: 0, x: 20 }, animate: u },
                i.a.createElement(V, {
                  fontSize: ".95rem",
                  padding: ".3rem 1.25rem",
                  width: "auto"
                })
              )
            ),
            i.a.createElement(
              m.a.a,
              {
                ref: y,
                variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
                animate: v ? "visible" : "hidden",
                className: "resume",
                href:
                  "https://www.linkedin.com/in/tahmeed-hossain-aaab121b3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADHSGKIBQSBKdM9hg6ZsHa7_RY-9oW3WC_c,1599199712343)/",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                "aria-label": "External Link"
              },
              i.a.createElement(
                g,
                {
                  type: "button",
                  textAlign: "center",
                  color: "tertiary",
                  center: !0
                },
                "Open Resume"
              )
            )
          );
        };
      r("YbXK"), r("cFtU"), r("q8oJ"), r("m210"), r("y7hu"), r("E5k/");
      !(function(e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && "undefined" != typeof document) {
          var n = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          (i.type = "text/css"),
            "top" === r && n.firstChild
              ? n.insertBefore(i, n.firstChild)
              : n.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : i.appendChild(document.createTextNode(e));
        }
      })(
        '.styles_skeleton__2Mj1U {\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  background: #eff1f6;\n}\n\n.styles_skeleton__2Mj1U::before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 500px;\n  top: 0;\n  left: -500px;\n  background-image: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 0.6),\n    rgba(255, 255, 255, 0)\n  );\n  animation: styles_skeleton-progress__o4fxe 1.2s ease-in-out infinite;\n}\n\n@keyframes styles_skeleton-progress__o4fxe {\n  0% {\n    left: -500px;\n  }\n  100% {\n    left: 100%;\n  }\n}\n'
      );
      var te = r("7Qib");
      x.a.mediumRssFeed,
        x.a.shownArticles,
        m.a.custom(
          s.default.section.withConfig({
            displayName: "articles__StyledSection",
            componentId: "sc-1vm46pw-0"
          })(["width:100%;height:auto;background:", ";"], function(e) {
            return e.theme.colors.background;
          })
        ),
        Object(s.default)(y.a).withConfig({
          displayName: "articles__StyledContentWrapper",
          componentId: "sc-1vm46pw-1"
        })(
          [
            "&&{width:100%;height:100%;padding-right:0;padding-left:0;@media (min-width:",
            "){padding-right:2.5rem;padding-left:2.5rem;}.section-title{padding-right:2.5rem;padding-left:2.5rem;@media (min-width:",
            "){padding-right:0;padding-left:0;}}.articles{display:flex;justify-content:space-between;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin:-2rem 0 0 0;padding:0 2rem;&::-webkit-scrollbar{display:none;}@media (min-width:",
            "){padding:0;overflow:visible;}@media (hover:hover){&::-webkit-scrollbar{display:block;-webkit-appearance:none;}&::-webkit-scrollbar:horizontal{height:0.8rem;}&::-webkit-scrollbar-thumb{border-radius:8px;border:0.2rem solid white;background-color:rgba(0,0,0,0.5);}&::-webkit-scrollbar-track{background-color:#fff;border-radius:8px;}}}.card{width:16.25rem;height:12rem;display:flex;flex-direction:column;justify-content:center;padding:1rem;margin:2rem 1rem;box-shadow:0 5px 15px rgba(0,0,0,0.16);border-radius:",
            ";transition:box-shadow 0.3s ease-out;&:hover{box-shadow:0 5px 15px rgba(0,0,0,0.32);}&:hover ",
            "{box-shadow:inset 0 -1rem 0 ",
            ";}@media (min-width:",
            "){margin:2rem auto;}.category{color:",
            ";text-transform:uppercase;letter-spacing:+1px;font-weight:700;}.title{margin-top:0.25rem;margin-bottom:0.25rem;}.date{font-size:0.75rem;color:#555555;letter-spacing:+0.5px;}}}"
          ],
          function(e) {
            return e.theme.breakpoints.lg;
          },
          function(e) {
            return e.theme.breakpoints.lg;
          },
          function(e) {
            return e.theme.breakpoints.lg;
          },
          function(e) {
            return e.theme.borderRadius;
          },
          v.a,
          function(e) {
            return e.theme.colors.secondary;
          },
          function(e) {
            return e.theme.breakpoints.lg;
          },
          function(e) {
            return e.theme.colors.primary;
          }
        );
      var re = s.default.section.withConfig({
          displayName: "about__StyledSection",
          componentId: "sc-1hergqw-0"
        })(
          [
            "width:100%;height:auto;background:",
            ";margin-top:1 rem;padding:1 rem;"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        ne = Object(s.default)(y.a).withConfig({
          displayName: "about__StyledContentWrapper",
          componentId: "sc-1hergqw-1"
        })(
          [
            "&&{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;@media (min-width:",
            "){flex-direction:row;justify-content:space-between;}.section-title{margin-bottom:2rem;}.inner-wrapper{display:flex;flex-direction:column;justify-content:center;}.text-content{width:100%;max-width:31.25rem;}.image-content{width:100%;max-width:18rem;margin-top:4rem;margin-bottom:10rem;margin-left:0;@media (min-width:",
            "){margin-left:2rem;}}.about-author{border-radius:",
            ";box-shadow:0 0 2.5rem rgba(0,0,0,0.16);filter:grayscale(20%) contrast(1) brightness(90%);transition:all 0.3s ease-out;&:hover{filter:grayscale(50%) contrast(1) brightness(90%);transform:translate3d(0px,-0.125rem,0px);box-shadow:0 0 2.5rem rgba(0,0,0,0.32);}}}"
          ],
          function(e) {
            return e.theme.breakpoints.sm;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          },
          function(e) {
            return e.theme.borderRadius;
          }
        ),
        ie = function(e) {
          var t = e.content[0].node,
            r = t.frontmatter,
            o = t.body,
            a = Object(n.useRef)(),
            c = p(a),
            l = Object(n.useRef)(),
            s = p(l);
          return i.a.createElement(
            re,
            { id: "about" },
            i.a.createElement(
              ne,
              null,
              i.a.createElement(
                m.a.div,
                {
                  className: "inner-wrapper",
                  ref: a,
                  variants: {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  },
                  animate: c ? "visible" : "hidden"
                },
                i.a.createElement(
                  "h3",
                  { className: "section-title" },
                  r.title
                ),
                i.a.createElement(
                  "div",
                  { className: "text-content" },
                  i.a.createElement(f.MDXRenderer, null, o)
                )
              ),
              i.a.createElement(
                m.a.div,
                {
                  className: "image-content",
                  ref: l,
                  variants: {
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  },
                  animate: s ? "visible" : "hidden"
                },
                i.a.createElement(d.a, {
                  className: "about-author",
                  fluid: r.image.childImageSharp.fluid
                })
              )
            )
          );
        };
      r("3nLz");
      function oe(e, t, r, n, i, o, a) {
        try {
          var c = e[o](a),
            l = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, i);
      }
      var ae = s.default.section.withConfig({
          displayName: "interests__StyledSection",
          componentId: "sc-16oq2ao-0"
        })(
          [
            "width:100%;height:auto;background:",
            ";margin-top:1rem;margin-bottom:1rem;padding:5rem;"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        ce = Object(s.default)(y.a).withConfig({
          displayName: "interests__StyledContentWrapper",
          componentId: "sc-16oq2ao-1"
        })(
          [
            "&&{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding-right:0;padding-left:0;@media (min-width:",
            "){padding-right:2.5rem;padding-left:2.5rem;}.section-title{padding-right:2.5rem;padding-left:2.5rem;@media (min-width:",
            "){padding-right:0;padding-left:0;}}}"
          ],
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.breakpoints.md;
          }
        ),
        le = s.default.div.withConfig({
          displayName: "interests__StyledInterests",
          componentId: "sc-16oq2ao-2"
        })(
          [
            "display:grid;grid-template-columns:repeat( ",
            ',15.625rem );grid-template-rows:repeat(2,auto);grid-auto-flow:column;column-gap:1rem;row-gap:1rem;padding:2.5rem;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}&::after{content:"";width:',
            ";}@media (min-width:",
            "){grid-auto-flow:row;grid-template-columns:repeat(3,15.625rem);overflow:visible;padding:0;}@media (hover:hover){&::-webkit-scrollbar{display:block;-webkit-appearance:none;}&::-webkit-scrollbar:horizontal{height:0.8rem;}&::-webkit-scrollbar-thumb{border-radius:8px;border:0.2rem solid white;background-color:rgba(0,0,0,0.5);}&::-webkit-scrollbar-track{background-color:#fff;border-radius:8px;}}.interest{width:15.625rem;height:3rem;display:flex;justify-content:flex-start;align-items:center;padding:1rem;border:0.125rem solid ",
            ";border-radius:",
            ";.icon{margin-right:0.5rem;}}"
          ],
          function(e) {
            var t = e.itemCount;
            return Math.ceil(t / 2);
          },
          function(e) {
            var t = e.itemCount;
            return Math.ceil(t / 2) % 2 == 1 ? "17.125rem" : "2.5rem";
          },
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.colors.primary;
          },
          function(e) {
            return e.theme.borderRadius;
          }
        ),
        se = function(e) {
          var t = e.content[0].node,
            r = t.exports,
            o = t.frontmatter,
            a = r.shownItems,
            c = r.interests,
            s = Object(n.useState)(a),
            u = s[0],
            f = s[1],
            h = Object(n.useRef)(),
            b = p(h),
            y = Object(m.b)(),
            v = Object(m.b)();
          Object(n.useEffect)(
            function() {
              !te.b && Object(te.a)(window.innerWidth) && f(c.length);
            },
            [c]
          ),
            Object(n.useEffect)(
              function() {
                (function() {
                  var e,
                    t =
                      ((e = l.a.mark(function e() {
                        return l.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!b) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  y.start(function(e) {
                                    return {
                                      opacity: 1,
                                      scaleY: 1,
                                      transition: { delay: 0.1 * e }
                                    };
                                  })
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  v.start({ opacity: 1, scaleY: 1 })
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })),
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            oe(o, n, i, a, c, "next", e);
                          }
                          function c(e) {
                            oe(o, n, i, a, c, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()();
              },
              [b, u, y, v]
            );
          return i.a.createElement(
            ae,
            { id: "interests" },
            i.a.createElement(
              ce,
              null,
              i.a.createElement("h3", { className: "section-title" }, o.title),
              i.a.createElement(
                le,
                { itemCount: c.length, ref: h },
                c.slice(0, u).map(function(e, t) {
                  var r = e.name,
                    n = e.icon;
                  return i.a.createElement(
                    m.a.div,
                    {
                      className: "interest",
                      key: t,
                      custom: t,
                      initial: { opacity: 0, scaleY: 0 },
                      animate: y
                    },
                    i.a.createElement(d.a, {
                      className: "icon",
                      fixed: n.childImageSharp.fixed
                    }),
                    " ",
                    r
                  );
                }),
                u < c.length &&
                  i.a.createElement(
                    m.a.div,
                    { initial: { opacity: 0, scaleY: 0 }, animate: v },
                    i.a.createElement(
                      g,
                      {
                        onClick: function() {
                          return f(u + 4);
                        },
                        type: "button",
                        textAlign: "left",
                        color: "s"
                      },
                      "+ Load more"
                    )
                  )
              )
            )
          );
        },
        ue = r("aqT/"),
        de = r.n(ue);
      function fe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function me(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var pe = s.default.section.withConfig({
          displayName: "projects__StyledSection",
          componentId: "c0nqby-0"
        })(
          [
            "width:100%;height:auto;background:",
            ";.cta-btn{display:block;text-align:center;margin:2rem auto;@media (min-width:",
            "){margin:0 auto;}}"
          ],
          function(e) {
            return e.theme.colors.background;
          },
          function(e) {
            return e.theme.breakpoints.md;
          }
        ),
        he = Object(s.default)(y.a).withConfig({
          displayName: "projects__StyledContentWrapper",
          componentId: "c0nqby-1"
        })(
          [
            "&&{width:100%;height:100%;position:relative;display:flex;flex-direction:column;justify-content:center;padding-right:0;padding-left:0;@media (min-width:",
            "){padding-right:2.5rem;padding-left:2.5rem;}.section-title{padding-right:2.5rem;padding-left:2.5rem;@media (min-width:",
            "){padding-right:0;padding-left:0;}}.projects{display:flex;flex-direction:row;margin-top:-2.5rem;padding:2.5rem 2.5rem;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}@media (min-width:",
            "){flex-direction:column;margin-top:0;padding:0;overflow:visible;}@media (hover:hover){&::-webkit-scrollbar{display:block;-webkit-appearance:none;}&::-webkit-scrollbar:horizontal{height:0.8rem;}&::-webkit-scrollbar-thumb{border-radius:8px;border:0.2rem solid white;background-color:rgba(0,0,0,0.5);}&::-webkit-scrollbar-track{background-color:#000;border-radius:8px;}}}.counter{position:absolute;top:2.2rem;right:2.5rem;font-size:1.125rem;font-weight:500;@media (min-width:",
            "){display:none;}}}"
          ],
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          }
        ),
        ge = Object(s.default)(m.a.div).withConfig({
          displayName: "projects__StyledProject",
          componentId: "c0nqby-2"
        })(
          [
            "display:flex;flex-direction:column-reverse;justify-content:flex-end;align-items:center;margin-top:0;margin-bottom:2rem;flex-shrink:0;padding-right:2.5rem;max-width:20rem;@media (min-width:",
            "){max-width:25rem;margin-top:2rem;padding-right:5rem;}@media (min-width:",
            "){justify-content:space-between;flex-shrink:1;max-width:62.5rem;margin-bottom:10rem;padding-right:0;flex-direction:",
            ";}.details{width:100%;max-width:25rem;display:flex;flex-direction:column;margin-top:3rem;@media (min-width:",
            "){margin-top:0;}.category{font-size:0.9rem;line-height:1.5rem;text-transform:uppercase;letter-spacing:+1px;}.title{margin-top:0.625rem;margin-bottom:0.625rem;font-size:2rem;line-height:1.625rem;font-weight:700;}.tags{display:flex;flex-wrap:wrap;margin-top:1.5rem;line-height:1.2rem;span{margin-right:1rem;margin-bottom:1rem;}}.links{display:flex;justify-content:flex-start;align-items:center;width:100%;margin-top:1rem;a{display:inline-block;margin-right:2rem;}svg{width:1.3rem;height:1.3rem;transition:all 0.3s ease-out;}svg:hover{fill:",
            ";}}}.screenshot{width:100%;max-width:30rem;height:15rem;border-radius:",
            ";box-shadow:0 0 2.5rem rgba(0,0,0,0.16);transition:all 0.3s ease-out;&:hover{transform:translate3d(0px,-0.125rem,0px);box-shadow:0 0 2.5rem rgba(0,0,0,0.32);}@media (min-width:",
            "){height:18.75rem;}}"
          ],
          function(e) {
            return e.theme.breakpoints.xs;
          },
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.position % 2 != 0 ? "row" : "row-reverse";
          },
          function(e) {
            return e.theme.breakpoints.md;
          },
          function(e) {
            return e.theme.colors.secondary;
          },
          function(e) {
            return e.theme.borderRadius;
          },
          function(e) {
            return e.theme.breakpoints.md;
          }
        ),
        be = function(e) {
          var t = e.content,
            r = t[0].node,
            o = t.slice(1, t.length),
            a = Object(n.useState)(1),
            c = a[0],
            l = a[1],
            s = Object(n.useState)({}),
            u = s[0],
            h = s[1],
            b = function(e) {
              if (!u[e]) {
                var t = (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? fe(Object(r), !0).forEach(function(t) {
                          me(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : fe(Object(r)).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, u);
                (t[e] = !0), h(t);
              }
            },
            y = {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            },
            w = Object(n.useRef)(),
            x = p(w),
            E = Object(n.useRef)(),
            k = p(E);
          return i.a.createElement(
            pe,
            { id: "projects" },
            i.a.createElement(
              he,
              null,
              i.a.createElement(
                m.a.div,
                {
                  ref: w,
                  variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
                  animate: x ? "visible" : "hidden"
                },
                i.a.createElement(
                  "h3",
                  { className: "section-title" },
                  r.frontmatter.title
                ),
                i.a.createElement(
                  "div",
                  { className: "counter" },
                  c,
                  " / ",
                  o.length
                )
              ),
              i.a.createElement(
                "div",
                { className: "projects" },
                o.map(function(e) {
                  var t = e.node,
                    r = t.body,
                    n = t.frontmatter;
                  return i.a.createElement(
                    de.a,
                    {
                      key: n.position,
                      onChange: function() {
                        return b(n.position);
                      },
                      partialVisibility: !0,
                      minTopValue: 100
                    },
                    i.a.createElement(
                      ge,
                      {
                        position: n.position,
                        variants: y,
                        animate: u[n.position] ? "visible" : "hidden"
                      },
                      i.a.createElement(
                        "div",
                        { className: "details" },
                        i.a.createElement(
                          "div",
                          { className: "category" },
                          n.emoji,
                          " ",
                          n.category
                        ),
                        i.a.createElement(
                          "div",
                          { className: "title" },
                          n.title
                        ),
                        i.a.createElement(f.MDXRenderer, null, r),
                        i.a.createElement(
                          "div",
                          { className: "tags" },
                          n.tags.map(function(e) {
                            return i.a.createElement(
                              v.a,
                              {
                                key: e,
                                color: "background",
                                hoverColor: "secondary"
                              },
                              e
                            );
                          })
                        ),
                        i.a.createElement(
                          "div",
                          { className: "links" },
                          n.github &&
                            i.a.createElement(
                              "a",
                              {
                                href: n.github,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                "aria-label": "External Link"
                              },
                              i.a.createElement(R, {
                                name: "github",
                                color: "#888888"
                              })
                            ),
                          n.external &&
                            i.a.createElement(
                              "a",
                              {
                                href: n.external,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                "aria-label": "External Link"
                              },
                              i.a.createElement(R, {
                                name: "external",
                                color: "#888888"
                              })
                            )
                        )
                      ),
                      i.a.createElement(
                        de.a,
                        {
                          onChange: function() {
                            return l(n.position);
                          }
                        },
                        i.a.createElement(d.a, {
                          className: "screenshot",
                          fluid: n.screenshot.childImageSharp.fluid
                        })
                      )
                    )
                  );
                })
              )
            ),
            "true" === r.frontmatter.buttonVisible &&
              i.a.createElement(
                m.a.a,
                {
                  ref: E,
                  variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
                  animate: k ? "visible" : "hidden",
                  className: "cta-btn",
                  href: r.frontmatter.buttonUrl,
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                  "aria-label": "External Link"
                },
                i.a.createElement(
                  g,
                  {
                    type: "button",
                    textAlign: "center",
                    color: "tertiary",
                    center: !0
                  },
                  r.frontmatter.buttonText
                )
              )
          );
        },
        ye = Object(s.default)(m.a.section).withConfig({
          displayName: "contact__StyledSection",
          componentId: "cdvcbq-0"
        })(
          [
            "width:100%;height:auto;background:",
            ";padding-bottom:1rem;display:flex;justify-content:center;"
          ],
          function(e) {
            return e.theme.colors.background;
          }
        ),
        ve = Object(s.default)(y.a).withConfig({
          displayName: "contact__StyledContentWrapper",
          componentId: "cdvcbq-1"
        })(
          [
            "&&{width:100%;max-width:45rem;height:100%;display:inline-block;p{margin-top:0;margin-bottom:0;}.profile{display:flex;flex-direction:column;justify-content:flex-start;margin-top:3rem;margin-bottom:2rem;@media (min-width:",
            "){flex-direction:row;align-items:center;margin-bottom:3rem;}.avatar{width:100%;max-width:8.75rem;border-radius:50%;margin-right:4rem;margin-bottom:2rem;@media (min-width:",
            "){margin-bottom:0;}}.details{font-size:1.125rem;line-height:2rem;}}}"
          ],
          function(e) {
            return e.theme.breakpoints.sm;
          },
          function(e) {
            return e.theme.breakpoints.sm;
          }
        ),
        we = function(e) {
          var t = e.content[0].node,
            r = t.body,
            o = t.frontmatter,
            a = Object(n.useRef)(),
            c = p(a);
          return i.a.createElement(
            ye,
            {
              id: "contact",
              ref: a,
              variants: {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              },
              animate: c ? "visible" : "hidden"
            },
            i.a.createElement(
              ve,
              null,
              i.a.createElement("h3", null, o.title),
              i.a.createElement(f.MDXRenderer, null, r),
              i.a.createElement(
                "div",
                { className: "profile" },
                i.a.createElement(d.a, {
                  className: "avatar",
                  fluid: o.profileImage.childImageSharp.fluid
                }),
                i.a.createElement(
                  "div",
                  { className: "details" },
                  i.a.createElement("strong", null, o.name),
                  i.a.createElement("br", null),
                  i.a.createElement(
                    "a",
                    { href: "mailto:" + o.email },
                    i.a.createElement(
                      v.a,
                      { color: "secondary", hoverColor: "secondary" },
                      o.email
                    )
                  )
                )
              ),
              i.a.createElement(V, {
                width: "9rem",
                padding: "0.5rem 1.25rem",
                withIcon: !0
              })
            )
          );
        },
        xe =
          ((t.default = function(e) {
            var t = e.data;
            return i.a.createElement(
              o.a,
              { splashScreen: w.splashScreen },
              i.a.createElement(a.a, { title: "Tahmeed Hossain" }),
              i.a.createElement(ee, { content: t.hero.edges }),
              i.a.createElement(ie, { content: t.about.edges }),
              i.a.createElement(se, { content: t.interests.edges }),
              i.a.createElement(be, { content: t.projects.edges }),
              i.a.createElement(we, { content: t.contact.edges })
            );
          }),
          "3111467783");
    },
    X8hv: function(e, t, r) {
      function n() {
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
      function i(e, t, r) {
        return (i = n()
          ? Reflect.construct
          : function(e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var i = new (Function.bind.apply(e, n))();
              return r && o(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function a(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
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
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      r("xtjI"),
        r("Dq+y"),
        r("Ggvi"),
        r("YbXK"),
        r("cFtU"),
        r("m210"),
        r("4DPX"),
        r("rzGZ"),
        r("q8oJ"),
        r("8npG"),
        r("nWfQ"),
        r("nWfQ"),
        r("YbXK"),
        r("cFtU"),
        r("q8oJ"),
        r("m210"),
        r("xtjI"),
        r("4DPX"),
        r("rzGZ"),
        r("Dq+y"),
        r("8npG"),
        r("Ggvi");
      var u = r("q1tI"),
        d = r("E/Ix"),
        f = d.useMDXComponents,
        m = d.mdx,
        p = r("BfwJ").useMDXScope;
      e.exports = function(e) {
        var t = e.scope,
          r = e.components,
          n = e.children,
          o = (function(e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, ["scope", "components", "children"]),
          c = f(r),
          s = p(t),
          d = u.useMemo(
            function() {
              if (!n) return null;
              var e = l({ React: u, mdx: m }, s),
                t = Object.keys(e),
                r = t.map(function(t) {
                  return e[t];
                });
              return i(Function, ["_fn"].concat(a(t), ["" + n])).apply(
                void 0,
                [{}].concat(a(r))
              );
            },
            [n, t]
          );
        return u.createElement(d, l({ components: c }, o));
      };
    },
    "aqT/": function(e, t, r) {
      var n;
      r("pJf4"),
        r("LagC"),
        r("n7j8"),
        r("pS08"),
        r("m210"),
        r("4DPX"),
        r("R48M"),
        (n = function(e, t) {
          return (function(e) {
            var t = {};
            function r(n) {
              if (t[n]) return t[n].exports;
              var i = (t[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
              );
            }
            return (
              (r.m = e),
              (r.c = t),
              (r.d = function(e, t, n) {
                r.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (r.r = function(e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (r.t = function(e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    r.d(
                      n,
                      i,
                      function(t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return n;
              }),
              (r.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return r.d(t, "a", t), t;
              }),
              (r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (r.p = ""),
              r((r.s = 4))
            );
          })([
            function(e, t, r) {
              e.exports = r(5)();
            },
            function(t, r) {
              t.exports = e;
            },
            function(e, r) {
              e.exports = t;
            },
            function(e, t) {
              e.exports = function(e, t, r) {
                var n = e.direction,
                  i = e.value;
                switch (n) {
                  case "top":
                    return (
                      r.top + i < t.top &&
                      r.bottom > t.bottom &&
                      r.left < t.left &&
                      r.right > t.right
                    );
                  case "left":
                    return (
                      r.left + i < t.left &&
                      r.bottom > t.bottom &&
                      r.top < t.top &&
                      r.right > t.right
                    );
                  case "bottom":
                    return (
                      r.bottom - i > t.bottom &&
                      r.left < t.left &&
                      r.right > t.right &&
                      r.top < t.top
                    );
                  case "right":
                    return (
                      r.right - i > t.right &&
                      r.left < t.left &&
                      r.top < t.top &&
                      r.bottom > t.bottom
                    );
                }
              };
            },
            function(e, t, r) {
              "use strict";
              r.r(t),
                r.d(t, "default", function() {
                  return b;
                });
              var n = r(1),
                i = r.n(n),
                o = r(2),
                a = r.n(o),
                c = r(0),
                l = r.n(c),
                s = r(3),
                u = r.n(s);
              function d(e) {
                return (d =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function(e) {
                        return typeof e;
                      }
                    : function(e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              function m(e) {
                return (m = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function p(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function h(e, t) {
                return (h =
                  Object.setPrototypeOf ||
                  function(e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function g(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = r),
                  e
                );
              }
              var b = (function(e) {
                function t(e) {
                  var r, n, i;
                  return (
                    (function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                    (n = this),
                    (i = m(t).call(this, e)),
                    (r =
                      !i || ("object" !== d(i) && "function" != typeof i)
                        ? p(n)
                        : i),
                    g(p(r), "getContainer", function() {
                      return r.props.containment || window;
                    }),
                    g(p(r), "addEventListener", function(e, t, n, i) {
                      var o;
                      r.debounceCheck || (r.debounceCheck = {});
                      var a = function() {
                          (o = null), r.check();
                        },
                        c = {
                          target: e,
                          fn:
                            i > -1
                              ? function() {
                                  o || (o = setTimeout(a, i || 0));
                                }
                              : function() {
                                  clearTimeout(o), (o = setTimeout(a, n || 0));
                                },
                          getLastTimeout: function() {
                            return o;
                          }
                        };
                      e.addEventListener(t, c.fn), (r.debounceCheck[t] = c);
                    }),
                    g(p(r), "startWatching", function() {
                      r.debounceCheck ||
                        r.interval ||
                        (r.props.intervalCheck &&
                          (r.interval = setInterval(
                            r.check,
                            r.props.intervalDelay
                          )),
                        r.props.scrollCheck &&
                          r.addEventListener(
                            r.getContainer(),
                            "scroll",
                            r.props.scrollDelay,
                            r.props.scrollThrottle
                          ),
                        r.props.resizeCheck &&
                          r.addEventListener(
                            window,
                            "resize",
                            r.props.resizeDelay,
                            r.props.resizeThrottle
                          ),
                        !r.props.delayedCall && r.check());
                    }),
                    g(p(r), "stopWatching", function() {
                      if (r.debounceCheck)
                        for (var e in r.debounceCheck)
                          if (r.debounceCheck.hasOwnProperty(e)) {
                            var t = r.debounceCheck[e];
                            clearTimeout(t.getLastTimeout()),
                              t.target.removeEventListener(e, t.fn),
                              (r.debounceCheck[e] = null);
                          }
                      (r.debounceCheck = null),
                        r.interval && (r.interval = clearInterval(r.interval));
                    }),
                    g(p(r), "check", function() {
                      var e,
                        t,
                        n = r.node;
                      if (!n) return r.state;
                      if (
                        ((e = (function(e) {
                          return (
                            void 0 === e.width && (e.width = e.right - e.left),
                            void 0 === e.height &&
                              (e.height = e.bottom - e.top),
                            e
                          );
                        })(r.roundRectDown(n.getBoundingClientRect()))),
                        r.props.containment)
                      ) {
                        var i = r.props.containment.getBoundingClientRect();
                        t = {
                          top: i.top,
                          left: i.left,
                          bottom: i.bottom,
                          right: i.right
                        };
                      } else t = { top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth };
                      var o = r.props.offset || {};
                      "object" === d(o) &&
                        ((t.top += o.top || 0),
                        (t.left += o.left || 0),
                        (t.bottom -= o.bottom || 0),
                        (t.right -= o.right || 0));
                      var a = {
                          top: e.top >= t.top,
                          left: e.left >= t.left,
                          bottom: e.bottom <= t.bottom,
                          right: e.right <= t.right
                        },
                        c = e.height > 0 && e.width > 0,
                        l = c && a.top && a.left && a.bottom && a.right;
                      if (c && r.props.partialVisibility) {
                        var s =
                          e.top <= t.bottom &&
                          e.bottom >= t.top &&
                          e.left <= t.right &&
                          e.right >= t.left;
                        "string" == typeof r.props.partialVisibility &&
                          (s = a[r.props.partialVisibility]),
                          (l = r.props.minTopValue
                            ? s && e.top <= t.bottom - r.props.minTopValue
                            : s);
                      }
                      "string" == typeof o.direction &&
                        "number" == typeof o.value &&
                        (console.warn(
                          "[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",
                          o.direction,
                          o.value
                        ),
                        (l = u()(o, e, t)));
                      var f = r.state;
                      return (
                        r.state.isVisible !== l &&
                          ((f = { isVisible: l, visibilityRect: a }),
                          r.setState(f),
                          r.props.onChange && r.props.onChange(l)),
                        f
                      );
                    }),
                    (r.state = { isVisible: null, visibilityRect: {} }),
                    r
                  );
                }
                var r, n, o;
                return (
                  (function(e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 }
                    })),
                      t && h(e, t);
                  })(t, e),
                  (r = t),
                  (n = [
                    {
                      key: "componentDidMount",
                      value: function() {
                        (this.node = a.a.findDOMNode(this)),
                          this.props.active && this.startWatching();
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function() {
                        this.stopWatching();
                      }
                    },
                    {
                      key: "componentDidUpdate",
                      value: function(e) {
                        (this.node = a.a.findDOMNode(this)),
                          this.props.active && !e.active
                            ? (this.setState({
                                isVisible: null,
                                visibilityRect: {}
                              }),
                              this.startWatching())
                            : this.props.active || this.stopWatching();
                      }
                    },
                    {
                      key: "roundRectDown",
                      value: function(e) {
                        return {
                          top: Math.floor(e.top),
                          left: Math.floor(e.left),
                          bottom: Math.floor(e.bottom),
                          right: Math.floor(e.right)
                        };
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        return this.props.children instanceof Function
                          ? this.props.children({
                              isVisible: this.state.isVisible,
                              visibilityRect: this.state.visibilityRect
                            })
                          : i.a.Children.only(this.props.children);
                      }
                    }
                  ]) && f(r.prototype, n),
                  o && f(r, o),
                  t
                );
              })(i.a.Component);
              g(b, "defaultProps", {
                active: !0,
                partialVisibility: !1,
                minTopValue: 0,
                scrollCheck: !1,
                scrollDelay: 250,
                scrollThrottle: -1,
                resizeCheck: !1,
                resizeDelay: 250,
                resizeThrottle: -1,
                intervalCheck: !0,
                intervalDelay: 100,
                delayedCall: !1,
                offset: {},
                containment: null,
                children: i.a.createElement("span", null)
              }),
                g(b, "propTypes", {
                  onChange: l.a.func,
                  active: l.a.bool,
                  partialVisibility: l.a.oneOfType([
                    l.a.bool,
                    l.a.oneOf(["top", "right", "bottom", "left"])
                  ]),
                  delayedCall: l.a.bool,
                  offset: l.a.oneOfType([
                    l.a.shape({
                      top: l.a.number,
                      left: l.a.number,
                      bottom: l.a.number,
                      right: l.a.number
                    }),
                    l.a.shape({
                      direction: l.a.oneOf(["top", "right", "bottom", "left"]),
                      value: l.a.number
                    })
                  ]),
                  scrollCheck: l.a.bool,
                  scrollDelay: l.a.number,
                  scrollThrottle: l.a.number,
                  resizeCheck: l.a.bool,
                  resizeDelay: l.a.number,
                  resizeThrottle: l.a.number,
                  intervalCheck: l.a.bool,
                  intervalDelay: l.a.number,
                  containment:
                    "undefined" != typeof window
                      ? l.a.instanceOf(window.Element)
                      : l.a.any,
                  children: l.a.oneOfType([l.a.element, l.a.func]),
                  minTopValue: l.a.number
                });
            },
            function(e, t, r) {
              "use strict";
              var n = r(6);
              function i() {}
              function o() {}
              (o.resetWarningCache = i),
                (e.exports = function() {
                  function e(e, t, r, i, o, a) {
                    if (a !== n) {
                      var c = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw ((c.name = "Invariant Violation"), c);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                  };
                  return (r.PropTypes = r), r;
                });
            },
            function(e, t, r) {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            }
          ]);
        }),
        (e.exports = n(r("q1tI"), r("i8i4")));
    },
    kD0k: function(e, t, r) {
      e.exports = r("RJWs");
    },
    ls82: function(e, t, r) {
      r("rzGZ"),
        r("Dq+y"),
        r("q8oJ"),
        r("C9fy"),
        r("6kNP"),
        r("8npG"),
        r("LagC"),
        r("pJf4"),
        r("JHok"),
        r("pS08"),
        r("m210"),
        r("4DPX");
      var n = (function(e) {
        "use strict";
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function c(e, t, r, n) {
          var i = t && t.prototype instanceof u ? t : u,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function(e, t, r) {
              var n = "suspendedStart";
              return function(i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return O();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = v(a, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(e, t, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === s)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (n) {
            return { type: "throw", arg: n };
          }
        }
        e.wrap = c;
        var s = {};
        function u() {}
        function d() {}
        function f() {}
        var m = {};
        m[i] = function() {
          return this;
        };
        var p = Object.getPrototypeOf,
          h = p && p(p(k([])));
        h && h !== t && r.call(h, i) && (m = h);
        var g = (f.prototype = u.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function y(e) {
          var t;
          this._invoke = function(n, i) {
            function o() {
              return new Promise(function(t, o) {
                !(function t(n, i, o, a) {
                  var c = l(e[n], e, i);
                  if ("throw" !== c.type) {
                    var s = c.arg,
                      u = s.value;
                    return u && "object" == typeof u && r.call(u, "__await")
                      ? Promise.resolve(u.__await).then(
                          function(e) {
                            t("next", e, o, a);
                          },
                          function(e) {
                            t("throw", e, o, a);
                          }
                        )
                      : Promise.resolve(u).then(
                          function(e) {
                            (s.value = e), o(s);
                          },
                          function(e) {
                            return t("throw", e, o, a);
                          }
                        );
                  }
                  a(c.arg);
                })(n, i, t, o);
              });
            }
            return (t = t ? t.then(o, o) : o());
          };
        }
        function v(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                v(e, t),
                "throw" === t.method)
              )
                return s;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var n = l(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), s
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                s)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              s);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g.constructor = f),
          (f.constructor = d),
          (f[a] = d.displayName = "GeneratorFunction"),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), a in e || (e[a] = "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(y.prototype),
          (y.prototype[o] = function() {
            return this;
          }),
          (e.AsyncIterator = y),
          (e.async = function(t, r, n, i) {
            var o = new y(c(t, r, n, i));
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function(e) {
                  return e.done ? e.value : o.next();
                });
          }),
          b(g),
          (g[a] = "Generator"),
          (g[i] = function() {
            return this;
          }),
          (g.toString = function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = k),
          (E.prototype = {
            constructor: E,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), s)
                  : this.complete(a)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                s
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), s;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    x(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            }
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = n;
      } catch (i) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    nWfQ: function(e, t, r) {
      var n = r("P8UN"),
        i = r("nsRs"),
        o = r("nONw"),
        a = r("1a8y"),
        c = r("BjK0"),
        l = r("96qb"),
        s = r("16Xr"),
        u = (r("emib").Reflect || {}).construct,
        d = l(function() {
          function e() {}
          return !(u(function() {}, [], e) instanceof e);
        }),
        f = !l(function() {
          u(function() {});
        });
      n(n.S + n.F * (d || f), "Reflect", {
        construct: function(e, t) {
          o(e), a(t);
          var r = arguments.length < 3 ? e : o(arguments[2]);
          if (f && !d) return u(e, t, r);
          if (e == r) {
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
            var n = [null];
            return n.push.apply(n, t), new (s.apply(e, n))();
          }
          var l = r.prototype,
            m = i(c(l) ? l : Object.prototype),
            p = Function.apply.call(e, m, t);
          return c(p) ? p : m;
        }
      });
    },
    y7hu: function(e, t, r) {
      "use strict";
      r("t+fG")("link", function(e) {
        return function(t) {
          return e(this, "a", "href", t);
        };
      });
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-a89a6b60005bd5665ccf.js.map
