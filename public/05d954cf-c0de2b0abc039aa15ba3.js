(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    ZMKu: function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return fe;
      }),
        e.d(n, "b", function() {
          return le;
        });
      e("zTTH"),
        e("cxuS"),
        e("U6Bt"),
        e("Ll4R"),
        e("HQhv"),
        e("wZFJ"),
        e("sc67"),
        e("cFtU"),
        e("OeI1"),
        e("Ggvi"),
        e("AqHK"),
        e("TAD1"),
        e("v9g0"),
        e("MIFh"),
        e("xJgp"),
        e("6kNP"),
        e("rzGZ"),
        e("Dq+y"),
        e("8npG"),
        e("YbXK"),
        e("ToIb"),
        e("JHok");
      var r = e("mrSG"),
        i = e("q1tI"),
        o = e("eUsl"),
        a = e("tKSW"),
        s = e("2Deh"),
        u = e("82gj"),
        c = e("Ibe6"),
        f = e("Neuu"),
        l = e("lyHL"),
        p = (function() {
          function t(t, n) {
            var e,
              r = this,
              i = void 0 === n ? {} : n,
              a = i.transformer,
              s = i.parent;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function(t, n) {
                void 0 === n && (n = !0),
                  (r.prev = r.current),
                  (r.current = r.transformer ? r.transformer(t) : t),
                  r.updateSubscribers &&
                    r.prev !== r.current &&
                    r.updateSubscribers.forEach(r.notifySubscriber),
                  r.children && r.children.forEach(r.setChild),
                  n &&
                    r.renderSubscribers &&
                    r.renderSubscribers.forEach(r.notifySubscriber);
                var e = Object(o.c)(),
                  i = e.delta,
                  a = e.timestamp;
                r.lastUpdated !== a &&
                  ((r.timeDelta = i),
                  (r.lastUpdated = a),
                  o.b.postRender(r.scheduleVelocityCheck));
              }),
              (this.notifySubscriber = function(t) {
                t(r.current);
              }),
              (this.scheduleVelocityCheck = function() {
                return o.b.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function(t) {
                t.timestamp !== r.lastUpdated && (r.prev = r.current);
              }),
              (this.setChild = function(t) {
                return t.set(r.current);
              }),
              (this.parent = s),
              (this.transformer = a),
              this.set(t, !1),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.addChild = function(n) {
              void 0 === n && (n = {});
              var e = new t(this.current, Object(r.a)({ parent: this }, n));
              return (
                this.children || (this.children = new Set()),
                this.children.add(e),
                e
              );
            }),
            (t.prototype.removeChild = function(t) {
              this.children && this.children.delete(t);
            }),
            (t.prototype.subscribeTo = function(t, n) {
              var e = this,
                r = function() {
                  return n(e.current);
                };
              return (
                t.add(r),
                function() {
                  return t.delete(r);
                }
              );
            }),
            (t.prototype.onChange = function(t) {
              return (
                this.updateSubscribers || (this.updateSubscribers = new Set()),
                this.subscribeTo(this.updateSubscribers, t)
              );
            }),
            (t.prototype.onRenderRequest = function(t) {
              return (
                this.renderSubscribers || (this.renderSubscribers = new Set()),
                this.notifySubscriber(t),
                this.subscribeTo(this.renderSubscribers, t)
              );
            }),
            (t.prototype.attach = function(t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function(t, n) {
              void 0 === n && (n = !0),
                n && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, n);
            }),
            (t.prototype.get = function() {
              return this.current;
            }),
            (t.prototype.getVelocity = function() {
              return this.canTrackVelocity
                ? Object(a.l)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function(t) {
              var n = this;
              return (
                this.stop(),
                new Promise(function(e) {
                  n.stopAnimation = t(e);
                }).then(function() {
                  return n.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function() {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function() {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function() {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function() {
              this.updateSubscribers && this.updateSubscribers.clear(),
                this.renderSubscribers && this.renderSubscribers.clear(),
                this.parent && this.parent.removeChild(this),
                this.stop();
            }),
            t
          );
        })();
      function h(t, n) {
        return new p(t, n);
      }
      function d(t) {
        var n = Object(i.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      var v,
        m = function(t) {
          return t instanceof p;
        },
        g = Object(s.c)({
          onRead: function() {
            return null;
          },
          onRender: function(t, n) {
            return (0, n.onUpdate)(t);
          }
        }),
        y = (function() {
          function t() {
            (this.hasMounted = !1),
              (this.values = new Map()),
              (this.unsubscribers = new Map());
          }
          return (
            (t.prototype.has = function(t) {
              return this.values.has(t);
            }),
            (t.prototype.set = function(t, n) {
              this.values.set(t, n),
                this.hasMounted && this.bindValueToOutput(t, n);
            }),
            (t.prototype.get = function(t, n) {
              var e = this.values.get(t);
              return (
                void 0 === e &&
                  void 0 !== n &&
                  ((e = new p(n)), this.set(t, e)),
                e
              );
            }),
            (t.prototype.forEach = function(t) {
              return this.values.forEach(t);
            }),
            (t.prototype.bindValueToOutput = function(t, n) {
              var e = this,
                r = n.onRenderRequest(function(n) {
                  return e.output && e.output(t, n);
                }),
                i = n.onChange(function(n) {
                  e.onUpdate && e.onUpdate.set(t, n);
                });
              this.unsubscribers.has(t) && this.unsubscribers.get(t)(),
                this.unsubscribers.set(t, function() {
                  r(), i();
                });
            }),
            (t.prototype.setOnUpdate = function(t) {
              (this.onUpdate = void 0),
                t && (this.onUpdate = g({ onUpdate: t }));
            }),
            (t.prototype.setTransformTemplate = function(t) {
              this.transformTemplate !== t &&
                ((this.transformTemplate = t), this.updateTransformTemplate());
            }),
            (t.prototype.getTransformTemplate = function() {
              return this.transformTemplate;
            }),
            (t.prototype.updateTransformTemplate = function() {
              this.output && this.output("transform", this.transformTemplate);
            }),
            (t.prototype.mount = function(t) {
              var n = this;
              (this.hasMounted = !0),
                t && (this.output = t),
                this.values.forEach(function(t, e) {
                  return n.bindValueToOutput(e, t);
                }),
                this.updateTransformTemplate();
            }),
            (t.prototype.unmount = function() {
              var t = this;
              this.values.forEach(function(n, e) {
                var r = t.unsubscribers.get(e);
                r && r();
              });
            }),
            t
          );
        })(),
        b = new Set(["dragOriginX", "dragOriginY"]),
        O = function(t) {
          var n = d(function() {
            var n = new y();
            for (var e in t) m(t[e]) && !b.has(e) && n.set(e, t[e]);
            return n;
          });
          return (
            n.setOnUpdate(t.onUpdate),
            n.setTransformTemplate(t.transformTemplate),
            n
          );
        },
        j = null,
        w = function() {
          return null !== j;
        },
        E = function() {
          Object(u.a)(!j, "Sync render session already open"), (j = []);
        },
        C = function() {
          Object(u.a)(null !== j, "No sync render session found"),
            j &&
              j.forEach(function(t) {
                return t.render();
              }),
            (j = null);
        },
        P = function(t) {
          Object(u.a)(null !== j, "No sync render session found"),
            j && j.push(t);
        },
        x = Object(i.memo)(function(t) {
          var n = t.innerRef,
            e = t.values,
            r = t.isStatic;
          return (
            Object(i.useEffect)(function() {
              Object(u.a)(
                n.current instanceof Element,
                "No `ref` found. Ensure components created with `motion.custom` forward refs using `React.forwardRef`"
              );
              var t = Object(s.d)(n.current, {
                preparseOutput: !1,
                enableHardwareAcceleration: !r
              });
              return (
                e.mount(function(n, e) {
                  t.set(n, e), w() && P(t);
                }),
                function() {
                  return e.unmount();
                }
              );
            }, []),
            null
          );
        }),
        T =
          ((v = function(t) {
            return t.get();
          }),
          function(t) {
            var n = {};
            return (
              t.forEach(function(t, e) {
                return (n[e] = v(t));
              }),
              n
            );
          }),
        S = new Set(["originX", "originY", "originZ"]),
        A = function(t) {
          return S.has(t);
        },
        k = function(t, n, e) {
          var i = T(t),
            o = t.getTransformTemplate();
          return (
            o && (i.transform = n.transform ? o({}, n.transform) : o),
            Object(s.b)(Object(r.a)(Object(r.a)({}, n), i), !e)
          );
        },
        V = function(t) {
          return Array.isArray(t);
        },
        D = function(t) {
          return V(t) ? t[t.length - 1] || 0 : t;
        },
        M = [
          c.g,
          c.j,
          c.h,
          c.d,
          c.n,
          c.m,
          {
            test: function(t) {
              return "auto" === t;
            },
            parse: function(t) {
              return t;
            }
          }
        ],
        R = Object(r.d)(M, [c.b, c.c]),
        L = function(t) {
          return function(n) {
            return n.test(t);
          };
        },
        B = function(t) {
          return M.find(L(t));
        },
        F = function(t) {
          return R.find(L(t));
        },
        H = function() {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10
          };
        },
        I = function(t) {
          return {
            type: "spring",
            stiffness: 700,
            damping: 0 === t ? 100 : 35
          };
        },
        U = function() {
          return { ease: "linear", duration: 0.3 };
        },
        N = function(t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        X = {
          x: H,
          y: H,
          z: H,
          rotate: H,
          rotateX: H,
          rotateY: H,
          rotateZ: H,
          scaleX: I,
          scaleY: I,
          scale: I,
          opacity: U,
          backgroundColor: U,
          color: U,
          default: I
        },
        Y = function(t) {
          var n = t.to,
            e = t.duration;
          return Object(f.a)(function(t) {
            var r = t.update,
              i = t.complete;
            r(n), e ? Object(f.b)(e).start({ complete: i }) : i();
          });
        },
        z = function(t) {
          if (Array.isArray(t)) {
            Object(u.a)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var n = t[0],
              e = t[1],
              r = t[2],
              i = t[3];
            return Object(l.cubicBezier)(n, e, r, i);
          }
          return "string" == typeof t
            ? (Object(u.a)(void 0 !== l[t], "Invalid easing type '" + t + "'"),
              l[t])
            : t;
        },
        G = function(t) {
          return Array.isArray(t) && "number" != typeof t[0];
        },
        _ = function(t, n) {
          return (
            "zIndex" !== t &&
            (!("number" != typeof n && !Array.isArray(n)) ||
              !("string" != typeof n || !c.c.test(n) || n.startsWith("url(")))
          );
        },
        q = function(t) {
          return 1e3 * t;
        },
        Z = { tween: f.f, spring: f.e, keyframes: f.d, inertia: f.c, just: Y },
        W = {
          tween: function(t) {
            if (t.ease) {
              var n = G(t.ease) ? t.ease[0] : t.ease;
              t.ease = z(n);
            }
            return t;
          },
          keyframes: function(t) {
            var n = t.from,
              e =
                (t.to, t.velocity, Object(r.c)(t, ["from", "to", "velocity"]));
            if (e.values && null === e.values[0]) {
              var i = Object(r.d)(e.values);
              (i[0] = n), (e.values = i);
            }
            return (
              e.ease && (e.easings = G(e.ease) ? e.ease.map(z) : z(e.ease)),
              (e.ease = l.linear),
              e
            );
          }
        },
        J = function(t, n, e) {
          var i = e ? e.delay : 0;
          if (
            void 0 === e ||
            !(function(t) {
              t.when,
                t.delay,
                t.delayChildren,
                t.staggerChildren,
                t.staggerDirection;
              var n = Object(r.c)(t, [
                "when",
                "delay",
                "delayChildren",
                "staggerChildren",
                "staggerDirection"
              ]);
              return Object.keys(n).length;
            })(e)
          )
            return Object(r.a)(
              { delay: i },
              (function(t, n) {
                var e;
                return (
                  (e = V(n) ? N : X[t] || X.default),
                  Object(r.a)({ to: n }, e(n))
                );
              })(t, n)
            );
          var o = e[t] || e.default || e;
          return !1 === o.type
            ? {
                delay: o.hasOwnProperty("delay") ? o.delay : i,
                to: V(n) ? n[n.length - 1] : n,
                type: "just"
              }
            : V(n)
            ? Object(r.a)(
                Object(r.a)(
                  { values: n, duration: 0.8, delay: i, ease: "linear" },
                  o
                ),
                { type: "keyframes" }
              )
            : Object(r.a)({ type: "tween", to: n, delay: i }, o);
        },
        K = function(t, n, e, i) {
          var o = n.get(),
            a = _(t, o),
            s = _(t, e);
          Object(u.b)(
            a === s,
            "You are trying to animate " +
              t +
              ' from "' +
              o +
              '" to ' +
              e +
              '. "' +
              o +
              '" is not an animatable value - to enable this animation set ' +
              o +
              " to a value animatable to " +
              e +
              " via the `style` property."
          );
          var c,
            f = J(t, e, i),
            l = f.type,
            p = void 0 === l ? "tween" : l,
            h = Object(r.c)(f, ["type"]),
            d = a && s ? Z[p] : Y,
            v = (function(t, n) {
              return W[t] ? W[t](n) : n;
            })(p, Object(r.a)({ from: o, velocity: n.getVelocity() }, h));
          return (
            ((c = v).hasOwnProperty("duration") ||
              c.hasOwnProperty("repeatDelay")) &&
              (v.duration && (v.duration = q(v.duration)),
              v.repeatDelay && (v.repeatDelay = q(v.repeatDelay))),
            [d, v]
          );
        };
      function $(t, n, e, i) {
        var o = i.delay,
          a = void 0 === o ? 0 : o,
          s = Object(r.c)(i, ["delay"]);
        return n.start(function(i) {
          var o,
            u = K(t, n, e, s),
            c = u[0],
            l = u[1],
            p = l.delay,
            h = Object(r.c)(l, ["delay"]);
          void 0 !== p && (a = p);
          var d = function() {
            var t = c(h);
            o = t.start({
              update: function(t) {
                return n.set(t);
              },
              complete: i
            });
          };
          return (
            a ? (o = Object(f.b)(q(a)).start({ complete: d })) : d(),
            function() {
              o && o.stop();
            }
          );
        });
      }
      var Q = (function() {
        function t(t) {
          var n = this,
            e = t.values,
            r = t.readValueFromSource,
            i = t.makeTargetAnimatable;
          (this.props = {}),
            (this.variants = {}),
            (this.baseTarget = {}),
            (this.overrides = []),
            (this.resolvedOverrides = []),
            (this.activeOverrides = new Set()),
            (this.isAnimating = new Set()),
            (this.hasValue = function(t) {
              return !n.values.has(t);
            }),
            (this.values = e),
            (this.readValueFromSource = r),
            (this.makeTargetAnimatable = i),
            this.values.forEach(function(t, e) {
              return (n.baseTarget[e] = t.get());
            });
        }
        return (
          (t.prototype.setProps = function(t) {
            this.props = t;
          }),
          (t.prototype.setVariants = function(t) {
            t && (this.variants = t);
          }),
          (t.prototype.setDefaultTransition = function(t) {
            t && (this.defaultTransition = t);
          }),
          (t.prototype.setValues = function(t, n) {
            var e = this,
              i = void 0 === n ? {} : n,
              o = i.isActive,
              a = void 0 === o ? new Set() : o,
              s = i.priority,
              u = this.resolveVariant(t),
              c = u.target,
              f = u.transitionEnd;
            return (
              (c = this.transformValues(Object(r.a)(Object(r.a)({}, c), f))),
              Object.keys(c).forEach(function(t) {
                if (!a.has(t) && (a.add(t), c)) {
                  var n = D(c[t]);
                  if (e.values.has(t)) {
                    var r = e.values.get(t);
                    r && r.set(n);
                  } else e.values.set(t, h(n));
                  s || (e.baseTarget[t] = n);
                }
              })
            );
          }),
          (t.prototype.transformValues = function(t) {
            var n = this.props.transformValues;
            return n ? n(t) : t;
          }),
          (t.prototype.checkForNewValues = function(t) {
            var n = Object.keys(t).filter(this.hasValue),
              e = n.length;
            if (e)
              for (var r = 0; r < e; r++) {
                var i = n[r],
                  o = t[i],
                  a = null;
                Array.isArray(o) && (a = o[0]),
                  null === a &&
                    ((a = this.readValueFromSource(i)),
                    Object(u.a)(
                      null !== a,
                      'No initial value for "' +
                        i +
                        '" can be inferred. Ensure an initial value for "' +
                        i +
                        '" is defined on the component.'
                    )),
                  "string" == typeof a && /^\d*\.?\d+$/.test(a)
                    ? (a = parseFloat(a))
                    : !F(a) && c.c.test(o) && (a = c.c.getAnimatableNone(o)),
                  this.values.set(i, h(a)),
                  (this.baseTarget[i] = a);
              }
          }),
          (t.prototype.resolveVariant = function(t) {
            if (!t)
              return {
                target: void 0,
                transition: void 0,
                transitionEnd: void 0
              };
            var n, e;
            "function" == typeof t &&
              (t = t(
                this.props.custom,
                ((n = this.values),
                (e = {}),
                n.forEach(function(t, n) {
                  return (e[n] = t.get());
                }),
                e),
                (function(t) {
                  var n = {};
                  return (
                    t.forEach(function(t, e) {
                      return (n[e] = t.getVelocity());
                    }),
                    n
                  );
                })(this.values)
              ));
            var i = t.transition;
            return {
              transition: void 0 === i ? this.defaultTransition : i,
              transitionEnd: t.transitionEnd,
              target: Object(r.c)(t, ["transition", "transitionEnd"])
            };
          }),
          (t.prototype.getHighestPriority = function() {
            return this.activeOverrides.size
              ? Math.max.apply(Math, Array.from(this.activeOverrides))
              : 0;
          }),
          (t.prototype.setOverride = function(t, n) {
            (this.overrides[n] = t),
              this.children &&
                this.children.forEach(function(e) {
                  return e.setOverride(t, n);
                });
          }),
          (t.prototype.startOverride = function(t) {
            var n = this.overrides[t];
            if (n) return this.start(n, { priority: t });
          }),
          (t.prototype.clearOverride = function(t) {
            var n = this;
            if (
              (this.children &&
                this.children.forEach(function(n) {
                  return n.clearOverride(t);
                }),
              this.overrides[t])
            ) {
              this.activeOverrides.delete(t);
              var e = this.getHighestPriority();
              if ((this.resetIsAnimating(), e))
                this.overrides[e] && this.startOverride(e);
              var r = this.resolvedOverrides[t];
              if (r) {
                var i = {};
                for (var o in this.baseTarget)
                  void 0 !== r[o] && (i[o] = this.baseTarget[o]);
                this.onStart(),
                  this.animate(i).then(function() {
                    return n.onComplete();
                  });
              }
            }
          }),
          (t.prototype.apply = function(t) {
            return Array.isArray(t)
              ? this.applyVariantLabels(t)
              : "string" == typeof t
              ? this.applyVariantLabels([t])
              : void this.setValues(t);
          }),
          (t.prototype.applyVariantLabels = function(t) {
            var n = this,
              e = new Set();
            Object(r.d)(t)
              .reverse()
              .forEach(function(r) {
                var i = n.resolveVariant(n.variants[r]),
                  o = i.target,
                  a = i.transitionEnd;
                a && n.setValues(a, { isActive: e }),
                  o && n.setValues(o, { isActive: e }),
                  n.children &&
                    n.children.size &&
                    n.children.forEach(function(n) {
                      return n.applyVariantLabels(t);
                    });
              });
          }),
          (t.prototype.start = function(t, n) {
            var e,
              r,
              i = this;
            return (
              void 0 === n && (n = {}),
              n.priority && this.activeOverrides.add(n.priority),
              this.resetIsAnimating(n.priority),
              (r = t),
              (e = Array.isArray(r)
                ? this.animateVariantLabels(t, n)
                : "string" == typeof t
                ? this.animateVariant(t, n)
                : this.animate(t, n)),
              this.onStart(),
              e.then(function() {
                return i.onComplete();
              })
            );
          }),
          (t.prototype.animate = function(t, n) {
            var e = this,
              i = void 0 === n ? {} : n,
              o = i.delay,
              a = void 0 === o ? 0 : o,
              s = i.priority,
              u = void 0 === s ? 0 : s,
              c = i.transitionOverride,
              f = this.resolveVariant(t),
              l = f.target,
              p = f.transition,
              h = f.transitionEnd;
            if ((c && (p = c), !l)) return Promise.resolve();
            if (
              ((l = this.transformValues(l)),
              h && (h = this.transformValues(h)),
              this.checkForNewValues(l),
              this.makeTargetAnimatable)
            ) {
              var d = this.makeTargetAnimatable(l, h);
              (l = d.target), (h = d.transitionEnd);
            }
            u && (this.resolvedOverrides[u] = l), this.checkForNewValues(l);
            var v = [];
            for (var m in l) {
              var g = this.values.get(m);
              if (g && l && void 0 !== l[m]) {
                var y = l[m];
                u || (this.baseTarget[m] = D(y)),
                  this.isAnimating.has(m) ||
                    (this.isAnimating.add(m),
                    v.push($(m, g, y, Object(r.a)({ delay: a }, p))));
              }
            }
            var b = Promise.all(v);
            return h
              ? b.then(function() {
                  e.setValues(h, { priority: u });
                })
              : b;
          }),
          (t.prototype.animateVariantLabels = function(t, n) {
            var e = this,
              i = Object(r.d)(t)
                .reverse()
                .map(function(t) {
                  return e.animateVariant(t, n);
                });
            return Promise.all(i);
          }),
          (t.prototype.animateVariant = function(t, n) {
            var e = this,
              r = !1,
              i = 0,
              o = 0,
              a = 1,
              s = (n && n.priority) || 0,
              u = this.variants[t],
              c = u
                ? function() {
                    return e.animate(u, n);
                  }
                : function() {
                    return Promise.resolve();
                  },
              f = this.children
                ? function() {
                    return e.animateChildren(t, i, o, a, s);
                  }
                : function() {
                    return Promise.resolve();
                  };
            if (u && this.children) {
              var l = this.resolveVariant(u).transition;
              l &&
                ((r = l.when || r),
                (i = l.delayChildren || i),
                (o = l.staggerChildren || o),
                (a = l.staggerDirection || a));
            }
            if (r) {
              var p = "beforeChildren" === r ? [c, f] : [f, c],
                h = p[1];
              return (0, p[0])().then(h);
            }
            return Promise.all([c(), f()]);
          }),
          (t.prototype.animateChildren = function(t, n, e, r, i) {
            if (
              (void 0 === n && (n = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 1),
              void 0 === i && (i = 0),
              !this.children)
            )
              return Promise.resolve();
            var o = [],
              a = (this.children.size - 1) * e,
              s =
                1 === r
                  ? function(t) {
                      return t * e;
                    }
                  : function(t) {
                      return a - t * e;
                    };
            return (
              Array.from(this.children).forEach(function(e, r) {
                var a = e.animateVariant(t, { priority: i, delay: n + s(r) });
                o.push(a);
              }),
              Promise.all(o)
            );
          }),
          (t.prototype.onStart = function() {
            var t = this.props.onAnimationStart;
            t && t();
          }),
          (t.prototype.onComplete = function() {
            var t = this.props.onAnimationComplete;
            t && t();
          }),
          (t.prototype.checkOverrideIsAnimating = function(t) {
            for (var n = this.overrides.length, e = t + 1; e < n; e++) {
              var r = this.resolvedOverrides[e];
              if (r) for (var i in r) this.isAnimating.add(i);
            }
          }),
          (t.prototype.resetIsAnimating = function(t) {
            void 0 === t && (t = 0),
              this.isAnimating.clear(),
              t < this.getHighestPriority() && this.checkOverrideIsAnimating(t),
              this.children &&
                this.children.forEach(function(n) {
                  return n.resetIsAnimating(t);
                });
          }),
          (t.prototype.stop = function() {
            this.values.forEach(function(t) {
              return t.stop();
            });
          }),
          (t.prototype.addChild = function(t) {
            this.children || (this.children = new Set()),
              this.children.add(t),
              this.overrides.forEach(function(n, e) {
                n && t.setOverride(n, e);
              });
          }),
          (t.prototype.removeChild = function(t) {
            this.children && this.children.delete(t);
          }),
          (t.prototype.resetChildren = function() {
            this.children && this.children.clear();
          }),
          t
        );
      })();
      var tt = (function() {
          function t() {
            (this.hasMounted = !1),
              (this.pendingAnimations = []),
              (this.componentControls = new Set());
          }
          return (
            (t.prototype.setVariants = function(t) {
              (this.variants = t),
                this.componentControls.forEach(function(n) {
                  return n.setVariants(t);
                });
            }),
            (t.prototype.setDefaultTransition = function(t) {
              (this.defaultTransition = t),
                this.componentControls.forEach(function(n) {
                  return n.setDefaultTransition(t);
                });
            }),
            (t.prototype.subscribe = function(t) {
              var n = this;
              return (
                this.componentControls.add(t),
                this.variants && t.setVariants(this.variants),
                this.defaultTransition &&
                  t.setDefaultTransition(this.defaultTransition),
                function() {
                  return n.componentControls.delete(t);
                }
              );
            }),
            (t.prototype.start = function(t, n) {
              var e = this;
              if (this.hasMounted) {
                var r = [];
                return (
                  this.componentControls.forEach(function(e) {
                    var i = e.start(t, { transitionOverride: n });
                    r.push(i);
                  }),
                  Promise.all(r)
                );
              }
              return new Promise(function(r) {
                e.pendingAnimations.push({ animation: [t, n], resolve: r });
              });
            }),
            (t.prototype.set = function(t) {
              return (
                Object(u.a)(
                  this.hasMounted,
                  "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
                ),
                this.componentControls.forEach(function(n) {
                  return n.apply(t);
                })
              );
            }),
            (t.prototype.stop = function() {
              this.componentControls.forEach(function(t) {
                return t.stop();
              });
            }),
            (t.prototype.mount = function() {
              var t = this;
              (this.hasMounted = !0),
                this.pendingAnimations.forEach(function(n) {
                  var e = n.animation,
                    r = n.resolve;
                  return t.start.apply(t, e).then(r);
                });
            }),
            (t.prototype.unmount = function() {
              (this.hasMounted = !1), this.stop();
            }),
            t
          );
        })(),
        nt = Object(i.createContext)(null),
        et = Object(i.createContext)({ static: !1 }),
        rt = function(t) {
          return "string" == typeof t || Array.isArray(t);
        },
        it = function(t) {
          return t instanceof tt;
        },
        ot = function(t, n, e, r, o) {
          void 0 === r && (r = !1);
          var a,
            s,
            u = o.initial,
            c = o.animate,
            f = o.variants,
            l = o.whileTap,
            p = o.whileHover,
            h = Object(i.useContext)(nt);
          void 0 !== (null === (a = h) || void 0 === a ? void 0 : a.initial) &&
            (u = h.initial),
            !1 !== u || it(c) ? "boolean" != typeof u && (s = u) : (s = c);
          var d = Object(i.useRef)(!1),
            v = f || rt(c) || rt(l) || rt(p) || it(c),
            m = rt(s) ? s : t.initial,
            g = rt(c) ? c : t.animate,
            y = r ? m : null,
            b = v && rt(g) ? g : null,
            O = Object(i.useMemo)(
              function() {
                return {
                  controls: v ? n : t.controls,
                  initial: m,
                  animate: g,
                  values: e,
                  hasMounted: d,
                  isReducedMotion: t.isReducedMotion
                };
              },
              [y, b, t.isReducedMotion]
            );
          return (
            (O.static = r),
            (function(t, n) {
              void 0 === n && (n = !1);
              var e = Object(i.useRef)(!0);
              (!n || (n && e.current)) && t(), (e.current = !1);
            })(function() {
              var e = s || t.initial;
              e && n.apply(e);
            }, !r),
            Object(i.useEffect)(function() {
              d.current = !0;
            }, []),
            O
          );
        };
      function at(t, n, e) {
        var o = n.variants,
          a = n.transition,
          s = Object(i.useContext)(et).controls,
          u = Object(i.useContext)(nt),
          c = d(function() {
            return new Q(t);
          });
        return (
          (u && !u.isPresent) ||
            (c.resetChildren(),
            c.setProps(n),
            c.setVariants(o),
            c.setDefaultTransition(a)),
          Object(i.useEffect)(function() {
            e && s && s.addChild(c);
          }),
          Object(i.useEffect)(function() {
            return function() {
              n.onAnimationComplete;
              var t = Object(r.c)(n, ["onAnimationComplete"]);
              c.setProps(t), s && s.removeChild(c);
            };
          }, []),
          c
        );
      }
      var st = function(t) {
        var n = t.animate,
          e = t.variants,
          r = t.inherit;
        return (void 0 === r || r) && !!e && (!n || n instanceof tt);
      };
      var ut = function(t) {
          var n = t.getValueControlsConfig,
            e = t.loadFunctionalityComponents,
            r = t.renderComponent;
          return Object(i.forwardRef)(function(t, o) {
            var a = (function(t) {
                var n =
                  t && "function" != typeof t ? t : Object(i.useRef)(null);
                return (
                  t &&
                    "function" == typeof t &&
                    Object(i.useEffect)(function() {
                      return (
                        t(n.current),
                        function() {
                          return t(null);
                        }
                      );
                    }, []),
                  n
                );
              })(o),
              u = Object(i.useContext)(et),
              c = u.static || t.static || !1,
              f = O(t),
              l = (function(t, n, e, r) {
                void 0 === n && (n = {});
                var o = {},
                  a = Object(i.useRef)({}).current;
                for (var u in n) {
                  var c = n[u];
                  if (m(c)) t.set(u, c);
                  else if (e || (!Object(s.e)(u) && !A(u))) o[u] = c;
                  else {
                    if (t.has(u)) {
                      if (c !== a[u]) t.get(u).set(c);
                    } else t.set(u, h(c));
                    a[u] = c;
                  }
                }
                return r ? r(o) : o;
              })(f, t.style, c, t.transformValues),
              p = st(t),
              v = at(
                d(function() {
                  return n(a, f);
                }),
                t,
                p
              ),
              g = ot(u, v, f, c, t),
              y = c ? null : e(a, f, t, u, v, p),
              b = r(a, l, f, t, c);
            return Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(et.Provider, { value: g }, b),
              Object(i.createElement)(
                i.Fragment,
                null,
                Object(i.createElement)(x, {
                  innerRef: a,
                  values: f,
                  isStatic: c
                }),
                y
              )
            );
          });
        },
        ct = [
          "animate",
          "circle",
          "clipPath",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "tspan",
          "use",
          "view"
        ],
        ft = Object(i.createContext)({
          transformPagePoint: function(t) {
            return t;
          }
        });
      function lt(t) {
        return Object(i.useEffect)(function() {
          return function() {
            return t();
          };
        }, []);
      }
      function pt(t, n, e, r) {
        if (e)
          return (
            t.addEventListener(n, e, r),
            function() {
              return t.removeEventListener(n, e, r);
            }
          );
      }
      function ht(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function dt(t) {
        return !!t.touches;
      }
      var vt = { pageX: 0, pageY: 0 };
      function mt(t) {
        var n = t.touches[0] || t.changedTouches[0] || vt;
        return { x: n.pageX, y: n.pageY };
      }
      function gt(t) {
        var n = t.pageX,
          e = void 0 === n ? 0 : n,
          r = t.pageY;
        return { x: e, y: void 0 === r ? 0 : r };
      }
      function yt(t) {
        return { point: dt(t) ? mt(t) : gt(t) };
      }
      var bt,
        Ot = function(t, n) {
          if ((void 0 === n && (n = !1), t)) {
            var e = function(n) {
              return t(n, yt(n));
            };
            return n
              ? (function(t) {
                  if (t)
                    return function(n) {
                      var e = n instanceof MouseEvent;
                      (!e || (e && 0 === n.button)) && t(n);
                    };
                })(e)
              : e;
          }
        },
        jt = "undefined" != typeof window,
        wt = function() {
          return jt && null === window.ontouchstart;
        },
        Et = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        Ct = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };
      function Pt(t) {
        return jt && null === window.onpointerdown
          ? t
          : wt()
          ? Ct[t]
          : jt && null === window.onmousedown
          ? Et[t]
          : t;
      }
      function xt(t, n, e, r) {
        return pt(t, Pt(n), Ot(e, "pointerdown" === n), r);
      }
      function Tt(t, n, e, r) {
        return (function(t, n, e, r) {
          Object(i.useEffect)(
            function() {
              var i = t.current;
              if (e && i) return pt(i, n, e, r);
            },
            [t, n, e, r]
          );
        })(t, Pt(n), Ot(e, "pointerdown" === n), r);
      }
      !(function(t) {
        (t.subtract = function(t, n) {
          return { x: t.x - n.x, y: t.y - n.y };
        }),
          (t.relativeTo = function(t) {
            var n;
            return function(e) {
              var r = e.x,
                i = e.y,
                o =
                  void 0 !== n
                    ? n
                    : (n =
                        "string" == typeof t ? document.getElementById(t) : t);
              if (o) {
                var a = o.getBoundingClientRect();
                return {
                  x: r - a.left - window.scrollX,
                  y: i - a.top - window.scrollY
                };
              }
            };
          });
      })(bt || (bt = {}));
      var St = !1;
      "undefined" != typeof window &&
        document.addEventListener(
          "touchmove",
          function(t) {
            St && t.preventDefault();
          },
          { passive: !1 }
        );
      var At = function() {
          return (St = !1);
        },
        kt = (function() {
          function t(t, n, e) {
            var i = this,
              s = (void 0 === e ? {} : e).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function() {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = Dt(i.lastMoveEventInfo, i.history),
                    n = null !== i.startEvent,
                    e = Object(a.d)(t.offset, { x: 0, y: 0 }) >= 3;
                  if (n || e) {
                    var s = t.point,
                      u = Object(o.c)().timestamp;
                    i.history.push(
                      Object(r.a)(Object(r.a)({}, s), { timestamp: u })
                    );
                    var c = i.handlers,
                      f = c.onStart,
                      l = c.onMove;
                    n ||
                      (f && f(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      l && l(i.lastMoveEvent, t);
                  }
                }
              }),
              !(dt(t) && t.touches.length > 1))
            ) {
              (this.handlers = n), (this.transformPagePoint = s);
              var u = Vt(yt(t), this.transformPagePoint),
                c = u.point,
                f = Object(o.c)().timestamp;
              this.history = [
                Object(r.a)(Object(r.a)({}, c), { timestamp: f })
              ];
              var l = n.onSessionStart;
              l && l(t, Dt(u, this.history));
              var p = xt(window, "pointermove", function(t, n) {
                  return i.handlePointerMove(t, n);
                }),
                h = xt(window, "pointerup", function(t, n) {
                  return i.handlePointerUp(t, n);
                });
              this.removeListeners = function() {
                p && p(), h && h();
              };
            }
          }
          return (
            (t.prototype.handlePointerMove = function(t, n) {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = Vt(n, this.transformPagePoint)),
                ht(t) && 0 === t.buttons
                  ? this.handlePointerUp(t, n)
                  : o.b.update(this.updatePoint, !0);
            }),
            (t.prototype.handlePointerUp = function(t, n) {
              this.end();
              var e = this.handlers.onEnd;
              if (e) {
                var r = Dt(Vt(n, this.transformPagePoint), this.history);
                e && e(t, r);
              }
            }),
            (t.prototype.updateHandlers = function(t) {
              this.handlers = t;
            }),
            (t.prototype.end = function() {
              this.removeListeners && this.removeListeners(),
                o.a.update(this.updatePoint),
                At();
            }),
            t
          );
        })();
      function Vt(t, n) {
        return n ? { point: n(t.point) } : t;
      }
      function Dt(t, n) {
        var e = t.point;
        return {
          point: e,
          delta: bt.subtract(e, Rt(n)),
          offset: bt.subtract(e, Mt(n)),
          velocity: Lt(n, 0.1)
        };
      }
      function Mt(t) {
        return t[0];
      }
      function Rt(t) {
        return t[t.length - 1];
      }
      function Lt(t, n) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var e = t.length - 1, r = null, i = Rt(t);
          e >= 0 && ((r = t[e]), !(i.timestamp - r.timestamp > q(n)));

        )
          e--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      var Bt = ["whileHover", "whileTap", "whileDrag"],
        Ft = function(t) {
          return Bt.indexOf(t) + 1;
        };
      function Ht(t) {
        var n = null;
        return function() {
          return (
            null === n &&
            ((n = t),
            function() {
              n = null;
            })
          );
        };
      }
      var It = Ht("dragHorizontal"),
        Ut = Ht("dragVertical");
      function Nt(t) {
        var n = !1;
        if ("y" === t) n = Ut();
        else if ("x" === t) n = It();
        else {
          var e = It(),
            r = Ut();
          e && r
            ? (n = function() {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return n;
      }
      var Xt = Ft("whileTap");
      var Yt = Ft("whileHover"),
        zt = function(t) {
          return function(n, e) {
            ht(n) && t(n, e);
          };
        };
      function Gt(t, n) {
        !(function(t, n) {
          var e = t.onPan,
            r = t.onPanStart,
            o = t.onPanEnd,
            a = t.onPanSessionStart,
            s = e || r || o || a,
            u = Object(i.useRef)(null),
            c = Object(i.useContext)(ft).transformPagePoint,
            f = {
              onSessionStart: a,
              onStart: r,
              onMove: e,
              onEnd: function(t, n) {
                (u.current = null), o && o(t, n);
              }
            };
          null !== u.current && u.current.updateHandlers(f),
            Tt(
              n,
              "pointerdown",
              s &&
                function(t) {
                  u.current = new kt(t, f, { transformPagePoint: c });
                }
            ),
            lt(function() {
              return u.current && u.current.end();
            });
        })(t, n),
          (function(t, n) {
            var e = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              s = t.controls,
              u = e || r || o || a,
              c = Object(i.useRef)(!1),
              f = Object(i.useRef)(null);
            function l() {
              f.current && f.current(), (f.current = null);
            }
            a && s && s.setOverride(a, Xt);
            var p = Object(i.useRef)(null);
            (p.current = function(t, r) {
              var i = n.current;
              if ((l(), c.current && i)) {
                (c.current = !1), s && a && s.clearOverride(Xt);
                var u = Nt(!0);
                u &&
                  (u(),
                  !(function t(n, e) {
                    return !!e && (n === e || t(n, e.parentElement));
                  })(i, t.target)
                    ? o && o(t, r)
                    : e && e(t, r));
              }
            }),
              Tt(
                n,
                "pointerdown",
                u
                  ? function(t, e) {
                      l(),
                        (f.current = xt(window, "pointerup", function(t, n) {
                          return p.current(t, n);
                        })),
                        n.current &&
                          !c.current &&
                          ((c.current = !0),
                          r && r(t, e),
                          s && a && s.startOverride(Xt));
                    }
                  : void 0
              ),
              lt(l);
          })(t, n),
          (function(t, n) {
            var e = t.whileHover,
              r = t.onHoverStart,
              i = t.onHoverEnd,
              o = t.controls;
            e && o && o.setOverride(e, Yt),
              Tt(
                n,
                "pointerenter",
                zt(function(t, n) {
                  r && r(t, n), e && o && o.startOverride(Yt);
                })
              ),
              Tt(
                n,
                "pointerleave",
                zt(function(t, n) {
                  i && i(t, n), e && o && o.clearOverride(Yt);
                })
              );
          })(t, n);
      }
      var _t = function(t) {
          return function(n) {
            return t(n), null;
          };
        },
        qt = [
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileTap",
          "whileHover",
          "onHoverStart",
          "onHoverEnd"
        ],
        Zt = {
          key: "gestures",
          shouldRender: function(t) {
            return qt.some(function(n) {
              return t.hasOwnProperty(n);
            });
          },
          Component: _t(function(t) {
            var n = t.innerRef;
            Gt(Object(r.c)(t, ["innerRef"]), n);
          })
        },
        Wt = function(t) {
          return "object" == typeof t && t.hasOwnProperty("current");
        },
        Jt = function(t) {
          return t;
        },
        Kt = new Set(["INPUT", "TEXTAREA", "SELECT"]),
        $t = (function() {
          function t(t) {
            var n = t.ref,
              e = t.values,
              r = t.controls;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = { transformPagePoint: Jt }),
              (this.point = {}),
              (this.origin = { x: h(0), y: h(0) }),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.prevConstraintsBox = { width: 0, height: 0, x: 0, y: 0 }),
              (this.ref = n),
              (this.values = e),
              (this.controls = r);
          }
          return (
            (t.prototype.start = function(t, n) {
              var e = this,
                r = (void 0 === n ? {} : n).snapToCursor;
              void 0 !== r && r && this.snapToCursor(t);
              var i = this.props.transformPagePoint;
              this.panSession = new kt(
                t,
                {
                  onSessionStart: function(t) {
                    t.target &&
                      !Kt.has(t.target.tagName) &&
                      (wt() ||
                        (t.preventDefault(),
                        document.activeElement instanceof HTMLElement &&
                          document.activeElement.blur())),
                      (St = !0),
                      Qt(function(t) {
                        var n = e.point[t];
                        n && n.stop();
                      });
                  },
                  onStart: function(t, n) {
                    if (e.constraintsNeedResolution) {
                      var r = e.props,
                        i = r.dragConstraints,
                        o = r.transformPagePoint;
                      (e.constraints = rn(i, e.ref, e.point, o)),
                        e.applyConstraintsToPoint();
                    }
                    Qt(function(t) {
                      var n = e.point[t];
                      n && e.origin[t].set(n.get());
                    });
                    var a = e.props,
                      s = a.drag,
                      u = a.dragPropagation;
                    if (
                      !s ||
                      u ||
                      (e.openGlobalLock && e.openGlobalLock(),
                      (e.openGlobalLock = Nt(s)),
                      e.openGlobalLock)
                    ) {
                      (e.isDragging = !0), (e.currentDirection = null);
                      var c = e.props.onDragStart;
                      c && c(t, tn(n, e.point));
                    }
                  },
                  onMove: function(t, n) {
                    var r = e.props,
                      i = r.dragPropagation,
                      o = r.dragDirectionLock;
                    if (i || e.openGlobalLock) {
                      var a = n.offset;
                      if (o && null === e.currentDirection) {
                        if (
                          ((e.currentDirection = (function(t, n) {
                            void 0 === n && (n = 10);
                            var e = null;
                            Math.abs(t.y) > n
                              ? (e = "y")
                              : Math.abs(t.x) > n && (e = "x");
                            return e;
                          })(a)),
                          null !== e.currentDirection)
                        ) {
                          var s = e.props.onDirectionLock;
                          s && s(e.currentDirection);
                        }
                      } else {
                        e.updatePoint("x", a), e.updatePoint("y", a);
                        var u = e.props.onDrag;
                        u && u(t, tn(n, e.point));
                      }
                    }
                  },
                  onEnd: function(t, n) {
                    e.stop(t, n);
                  }
                },
                { transformPagePoint: i }
              );
            }),
            (t.prototype.cancelDrag = function() {
              At(),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null));
            }),
            (t.prototype.stop = function(t, n) {
              var e;
              null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = null);
              var r = this.isDragging;
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd;
                if (o || a) {
                  var u = n.velocity;
                  this.animateDragEnd(u);
                } else this.recordBoxInfo(this.constraints);
                s && s(t, tn(n, this.point));
              }
            }),
            (t.prototype.recordBoxInfo = function(t) {
              if (t) {
                var n = t.right,
                  e = t.left,
                  r = t.bottom,
                  i = t.top;
                (this.prevConstraintsBox.width = (n || 0) - (e || 0)),
                  (this.prevConstraintsBox.height = (r || 0) - (i || 0));
              }
              this.point.x && (this.prevConstraintsBox.x = this.point.x.get()),
                this.point.y &&
                  (this.prevConstraintsBox.y = this.point.y.get());
            }),
            (t.prototype.snapToCursor = function(t) {
              var n = this,
                e = this.props.transformPagePoint,
                r = yt(t).point,
                i = on(this.ref, e),
                o = i.width / 2 + i.left + window.scrollX,
                a = i.height / 2 + i.top + window.scrollY,
                s = { x: r.x - o, y: r.y - a };
              Qt(function(t) {
                var e = n.point[t];
                e && n.origin[t].set(e.get());
              }),
                this.updatePoint("x", s),
                this.updatePoint("y", s);
            }),
            (t.prototype.setPoint = function(t, n) {
              this.point[t] = n;
            }),
            (t.prototype.updatePoint = function(t, n) {
              var e = this.props,
                r = e.drag,
                i = e.dragElastic,
                o = this.point[t];
              if (en(t, r, this.currentDirection) && o) {
                var a = sn(t, this.origin[t].get() + n[t], this.constraints, i);
                o.set(a);
              }
            }),
            (t.prototype.updateProps = function(t) {
              var n = this,
                e = t.drag,
                i = void 0 !== e && e,
                o = t.dragDirectionLock,
                a = void 0 !== o && o,
                s = t.dragPropagation,
                u = void 0 !== s && s,
                c = t.dragConstraints,
                f = void 0 !== c && c,
                l = t.dragElastic,
                p = void 0 === l || l,
                h = t.dragMomentum,
                d = void 0 === h || h,
                v = Object(r.c)(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum"
                ]);
              this.props = Object(r.a)(
                {
                  drag: i,
                  dragDirectionLock: a,
                  dragPropagation: u,
                  dragConstraints: f,
                  dragElastic: p,
                  dragMomentum: d
                },
                v
              );
              var m = v._dragValueX,
                g = v._dragValueY,
                y = v.dragOriginX,
                b = v.dragOriginY;
              y && (this.origin.x = y),
                b && (this.origin.y = b),
                Qt(function(t) {
                  if (en(t, i, n.currentDirection)) {
                    var e = "x" === t ? m : g;
                    n.setPoint(t, e || n.values.get(t, 0));
                  }
                }),
                (this.constraintsNeedResolution = Wt(f)),
                (this.constraints = this.constraintsNeedResolution
                  ? this.constraints || !1
                  : f);
            }),
            (t.prototype.applyConstraintsToPoint = function(t) {
              var n = this;
              return (
                void 0 === t && (t = this.constraints),
                Qt(function(e) {
                  var r = n.point[e];
                  r && !r.isAnimating() && sn(e, r, t, 0);
                })
              );
            }),
            (t.prototype.animateDragEnd = function(t) {
              var n = this,
                e = this.props,
                i = e.drag,
                o = e.dragMomentum,
                a = e.dragElastic,
                s = e.dragTransition,
                u = e._dragValueX,
                c = e._dragValueY,
                f = e._dragTransitionControls,
                l = Qt(function(e) {
                  var l;
                  if (en(e, i, n.currentDirection)) {
                    var p = n.constraints ? nn(e, n.constraints) : {},
                      h = a ? 200 : 1e6,
                      d = a ? 40 : 1e7,
                      v = f || n.controls,
                      m = Object(r.a)(
                        Object(r.a)(
                          {
                            type: "inertia",
                            velocity: o ? t[e] : 0,
                            bounceStiffness: h,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1
                          },
                          s
                        ),
                        p
                      ),
                      g = "x" === e ? u : c;
                    return g
                      ? $(e, g, 0, m)
                      : v.start((((l = {})[e] = 0), (l.transition = m), l));
                  }
                });
              return Promise.all(l).then(function() {
                n.recordBoxInfo(n.constraints), n.scalePoint();
                var t = n.props.onDragTransitionEnd;
                t && t();
              });
            }),
            (t.prototype.scalePoint = function() {
              var t = this,
                n = this.props,
                e = n.dragConstraints,
                r = n.transformPagePoint;
              if (Wt(e)) {
                var i = on(e, r),
                  o = on(this.ref, r),
                  a = function(n, e) {
                    var r = t.point[n];
                    if (r) {
                      if (r.isAnimating())
                        return r.stop(), void t.recordBoxInfo();
                      var a = t.prevConstraintsBox[e]
                        ? (i[e] - o[e]) / t.prevConstraintsBox[e]
                        : 1;
                      r.set(t.prevConstraintsBox[n] * a);
                    }
                  };
                a("x", "width"), a("y", "height");
              }
            }),
            (t.prototype.mount = function(t) {
              var n = this,
                e = xt(t, "pointerdown", function(t) {
                  var e = n.props,
                    r = e.drag,
                    i = e.dragListener;
                  r && (void 0 === i || i) && n.start(t);
                }),
                r = pt(window, "resize", function() {
                  return n.scalePoint();
                });
              if (this.constraintsNeedResolution) {
                var i = this.props,
                  o = i.dragConstraints,
                  a = i.transformPagePoint,
                  s = rn(o, this.ref, this.point, a);
                this.applyConstraintsToPoint(s), this.recordBoxInfo(s);
              } else
                !this.isDragging &&
                  this.constraints &&
                  this.applyConstraintsToPoint();
              return function() {
                e && e(), r && r(), n.cancelDrag();
              };
            }),
            t
          );
        })();
      function Qt(t) {
        return [t("x"), t("y")];
      }
      function tn(t, n) {
        return Object(r.a)(Object(r.a)({}, t), {
          point: { x: n.x ? n.x.get() : 0, y: n.y ? n.y.get() : 0 }
        });
      }
      function nn(t, n) {
        var e = n.top,
          r = n.right,
          i = n.bottom,
          o = n.left;
        return "x" === t ? { min: o, max: r } : { min: e, max: i };
      }
      function en(t, n, e) {
        return !((!0 !== n && n !== t) || (null !== e && e !== t));
      }
      function rn(t, n, e, r) {
        Object(u.a)(
          null !== t.current && null !== n.current,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
        );
        var i = on(t, r),
          o = on(n, r),
          a = i.left - o.left + an(e.x),
          s = i.top - o.top + an(e.y);
        return {
          top: s,
          left: a,
          right: i.width - o.width + a,
          bottom: i.height - o.height + s
        };
      }
      function on(t, n) {
        var e = t.current.getBoundingClientRect(),
          r = n({ x: e.left, y: e.top }),
          i = r.x,
          o = r.y,
          a = n({ x: e.width, y: e.height });
        return { left: i, top: o, width: a.x, height: a.y };
      }
      function an(t) {
        return t ? t.get() : 0;
      }
      function sn(t, n, e, r) {
        var i = n instanceof p ? n.get() : n;
        if (!e) return i;
        var o = nn(t, e),
          a = o.min,
          s = o.max;
        return (
          void 0 !== a && i < a
            ? (i = r ? un(a, i, r) : Math.max(a, i))
            : void 0 !== s && i > s && (i = r ? un(s, i, r) : Math.min(s, i)),
          n instanceof p && n.set(i),
          i
        );
      }
      function un(t, n, e) {
        var r = "number" == typeof e ? e : 0.35;
        return Object(a.f)(t, n, r);
      }
      var cn = {
        key: "drag",
        shouldRender: function(t) {
          return !!t.drag;
        },
        Component: _t(function(t) {
          var n = t.innerRef,
            e = t.values,
            o = t.controls;
          return (function(t, n, e, o) {
            var a = t.dragControls,
              s = Object(i.useContext)(ft).transformPagePoint,
              u = d(function() {
                return new $t({ ref: n, values: e, controls: o });
              });
            u.updateProps(
              Object(r.a)(Object(r.a)({}, t), { transformPagePoint: s })
            ),
              Object(i.useEffect)(
                function() {
                  return a && a.subscribe(u);
                },
                [u]
              ),
              Object(i.useEffect)(function() {
                return u.mount(n.current);
              }, []);
          })(Object(r.c)(t, ["innerRef", "values", "controls"]), n, e, o);
        })
      };
      function fn(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var ln = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function pn(t, n, e) {
        void 0 === e && (e = 1),
          Object(u.a)(
            e <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var r = (function(t) {
            var n = ln.exec(t);
            return n ? [n[1], n[2]] : [,];
          })(t),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(n).getPropertyValue(i);
          return a || (fn(o) ? pn(o, n, e + 1) : o);
        }
      }
      var hn,
        dn = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y"
        ]),
        vn = function(t) {
          return dn.has(t);
        },
        mn = function(t, n) {
          t.set(n, !1), t.set(n);
        },
        gn = function(t) {
          return t === c.g || t === c.j;
        };
      !(function(t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(hn || (hn = {}));
      var yn = function(t, n) {
          return parseFloat(t.split(", ")[n]);
        },
        bn = function(t, n) {
          return function(e, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return yn(o[1], n);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? yn(a[1], t) : 0;
          };
        },
        On = new Set(["x", "y", "z"]),
        jn = s.f.filter(function(t) {
          return !On.has(t);
        });
      var wn = {
          width: function(t) {
            var n = t.width;
            return n;
          },
          height: function(t) {
            var n = t.height;
            return n;
          },
          top: function(t, n) {
            var e = n.top;
            return parseFloat(e);
          },
          left: function(t, n) {
            var e = n.left;
            return parseFloat(e);
          },
          bottom: function(t, n) {
            var e = t.height,
              r = n.top;
            return parseFloat(r) + e;
          },
          right: function(t, n) {
            var e = t.width,
              r = n.left;
            return parseFloat(r) + e;
          },
          x: bn(4, 13),
          y: bn(5, 14)
        },
        En = function(t, n, e, i) {
          void 0 === i && (i = {}),
            (e = Object(r.a)({}, e)),
            (i = Object(r.a)({}, i));
          var o = n.current,
            a = Object(s.d)(o),
            f = Object.keys(e).filter(vn),
            l = [],
            p = !1,
            h = f.reduce(function(n, r) {
              var o = t.get(r);
              if (!o) return n;
              var s,
                f = o.get(),
                h = e[r],
                d = B(f);
              if (V(h))
                for (var v = h.length, m = null === h[0] ? 1 : 0; m < v; m++)
                  s
                    ? Object(u.a)(
                        B(h[m]) === s,
                        "All keyframes must be of the same type"
                      )
                    : ((s = B(h[m])),
                      Object(u.a)(
                        s === d || (gn(d) && gn(s)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              else s = B(h);
              if (d !== s)
                if (gn(d) && gn(s)) {
                  var g = o.get();
                  "string" == typeof g && o.set(parseFloat(g)),
                    "string" == typeof h
                      ? (e[r] = parseFloat(h))
                      : Array.isArray(h) &&
                        s === c.j &&
                        (e[r] = h.map(parseFloat));
                } else
                  p ||
                    ((l = (function(t, n) {
                      var e = [];
                      return (
                        jn.forEach(function(n) {
                          var r = t.get(n);
                          void 0 !== r &&
                            (e.push([n, r.get()]),
                            r.set(n.startsWith("scale") ? 1 : 0));
                        }),
                        e.length && n.render(),
                        e
                      );
                    })(t, a)),
                    (p = !0)),
                    n.push(r),
                    (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                    mn(o, h);
              return n;
            }, []);
          if (h.length) {
            var d = (function(t, n, e, r, i) {
              var o = e.getBoundingClientRect(),
                a = getComputedStyle(e),
                s = a.display,
                u = {
                  top: a.top,
                  left: a.left,
                  bottom: a.bottom,
                  right: a.right,
                  transform: a.transform
                };
              "none" === s && r.set("display", t.display || "block"),
                r.render();
              var c = e.getBoundingClientRect();
              return (
                i.forEach(function(e) {
                  var r = n.get(e);
                  mn(r, wn[e](o, u)), (t[e] = wn[e](c, a));
                }),
                t
              );
            })(e, t, o, a, h);
            return (
              l.length &&
                l.forEach(function(n) {
                  var e = n[0],
                    r = n[1];
                  t.get(e).set(r);
                }),
              a.render(),
              { target: d, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function Cn(t, n, e, r) {
        return (function(t) {
          return Object.keys(t).some(vn);
        })(e)
          ? En(t, n, e, r)
          : { target: e, transitionEnd: r };
      }
      var Pn = function(t, n) {
        return function(e, i) {
          var o = (function(t, n, e, i) {
            var o = Object(r.c)(e, []),
              a = n.current;
            if (!(a instanceof HTMLElement))
              return { target: o, transitionEnd: i };
            for (var s in (i && (i = Object(r.a)({}, i)),
            t.forEach(function(t) {
              var n = t.get();
              if (fn(n)) {
                var e = pn(n, a);
                e && t.set(e);
              }
            }),
            o)) {
              var u = o[s];
              if (fn(u)) {
                var c = pn(u, a);
                c && ((o[s] = c), i && void 0 === i[s] && (i[s] = u));
              }
            }
            return { target: o, transitionEnd: i };
          })(t, n, e, i);
          return (e = o.target), (i = o.transitionEnd), Cn(t, n, e, i);
        };
      };
      var xn,
        Tn,
        Sn = Object(i.createContext)(null);
      !(function(t) {
        (t.Prepare = "prepare"), (t.Read = "read"), (t.Render = "render");
      })(Tn || (Tn = {}));
      var An = [Tn.Prepare, Tn.Read, Tn.Render].reduce(function(t, n) {
          return (t[n] = []), t;
        }, {}),
        kn = !1;
      function Vn(t) {
        for (var n = t.length, e = 0; e < n; e++) t[e]();
        t.length = 0;
      }
      var Dn = function(t) {
          return function(n) {
            n && ((kn = !0), An[t].push(n));
          };
        },
        Mn =
          (((xn = {})[Tn.Prepare] = Dn(Tn.Prepare)),
          (xn[Tn.Read] = Dn(Tn.Read)),
          (xn[Tn.Render] = Dn(Tn.Render)),
          (xn.flush = function() {
            kn && (Vn(An.prepare), Vn(An.read), Vn(An.render), (kn = !1));
          }),
          xn);
      var Rn = { duration: 0.8, ease: [0.45, 0.05, 0.19, 1] },
        Ln = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restDelta: 0.5,
          restSpeed: 10
        };
      var Bn = {
          id: "x",
          size: "width",
          min: "left",
          max: "right",
          origin: "originX"
        },
        Fn = {
          id: "y",
          size: "height",
          min: "top",
          max: "bottom",
          origin: "originY"
        };
      function Hn(t, n) {
        return (t + n) / 2;
      }
      function In(t, n, e) {
        var r,
          i = t[e.size] - n[e.size],
          o = 0.5;
        return (
          i &&
            (t[e.min] === n[e.min]
              ? (o = 0)
              : t[e.max] === n[e.max] && (o = 1)),
          ((r = {})[e.size] = i),
          (r[e.origin] = o),
          (r[e.id] =
            0.5 === o ? Hn(t[e.min], t[e.max]) - Hn(n[e.min], n[e.max]) : 0),
          r
        );
      }
      var Un = {
          getLayout: function(t) {
            return t.offset;
          },
          measure: function(t) {
            var n = t.offsetLeft,
              e = t.offsetTop,
              r = t.offsetWidth,
              i = t.offsetHeight;
            return {
              left: n,
              top: e,
              right: n + r,
              bottom: e + i,
              width: r,
              height: i
            };
          }
        },
        Nn = {
          getLayout: function(t) {
            return t.boundingBox;
          },
          measure: function(t) {
            var n = t.getBoundingClientRect();
            return {
              left: n.left,
              top: n.top,
              width: n.width,
              height: n.height,
              right: n.right,
              bottom: n.bottom
            };
          }
        };
      function Xn(t) {
        return window.getComputedStyle(t).position;
      }
      function Yn(t) {
        return "width" === t || "height" === t;
      }
      var zn,
        Gn = {
          key: "layout",
          shouldRender: function(t) {
            var n = t.positionTransition,
              e = t.layoutTransition;
            return (
              Object(u.a)(
                !(n && e),
                "Don't set both positionTransition and layoutTransition on the same component"
              ),
              "undefined" != typeof window && !(!n && !e)
            );
          },
          Component: (function(t) {
            function n() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              Object(r.b)(n, t),
              (n.prototype.getSnapshotBeforeUpdate = function() {
                var t = this.props,
                  n = t.innerRef,
                  e = t.positionTransition,
                  i = t.values,
                  o = t.controls,
                  a = n.current;
                if (
                  (function(t) {
                    return t instanceof HTMLElement;
                  })(a)
                ) {
                  var u,
                    c,
                    f,
                    l = (function(t) {
                      var n = t.layoutTransition,
                        e = t.positionTransition;
                      return n || e;
                    })(this.props),
                    p = !!e,
                    h = Xn(a),
                    d = { offset: Un.measure(a), boundingBox: Nn.measure(a) };
                  return (
                    Mn.prepare(function() {
                      (u = a.style.transform), (a.style.transform = "");
                    }),
                    Mn.read(function() {
                      c = { offset: Un.measure(a), boundingBox: Nn.measure(a) };
                      var t = Xn(a);
                      f = (function(t, n, e) {
                        return e && t === n ? Un : Nn;
                      })(h, t, p);
                    }),
                    Mn.render(function() {
                      var t = (function(t, n) {
                        return Object(r.a)(
                          Object(r.a)({}, In(t, n, Bn)),
                          In(t, n, Fn)
                        );
                      })(f.getLayout(d), f.getLayout(c));
                      if (t.x || t.y || t.width || t.height) {
                        Object(s.d)(a).set({
                          originX: t.originX,
                          originY: t.originY
                        }),
                          E();
                        var n = {},
                          e = {},
                          h = (function(t) {
                            return "function" == typeof t;
                          })(l)
                            ? l({ delta: t })
                            : l;
                        v("left", "x", 0, t.x),
                          v("top", "y", 0, t.y),
                          p ||
                            (v(
                              "width",
                              "scaleX",
                              1,
                              d.boundingBox.width / c.boundingBox.width
                            ),
                            v(
                              "height",
                              "scaleY",
                              1,
                              d.boundingBox.height / c.boundingBox.height
                            )),
                          (n.transition = e),
                          h && o.start(n),
                          C();
                      } else u && (a.style.transform = u);
                      function v(o, a, s, u) {
                        var c = Yn(o) ? o : a;
                        if (t[c]) {
                          var l =
                              "boolean" == typeof h
                                ? Object(r.a)(
                                    {},
                                    (function(t) {
                                      return t ? Ln : Rn;
                                    })(p)
                                  )
                                : h,
                            d = i.get(a, s),
                            v = d.getVelocity();
                          (e[a] = l[a]
                            ? Object(r.a)({}, l[a])
                            : Object(r.a)({}, l)),
                            void 0 === e[a].velocity &&
                              (e[a].velocity = v || 0),
                            (n[a] = s);
                          var m = Yn(o) || f !== Un ? 0 : d.get();
                          d.set(u + m);
                        }
                      }
                    }),
                    null
                  );
                }
              }),
              (n.prototype.componentDidUpdate = function() {
                Mn.flush();
              }),
              (n.prototype.render = function() {
                return null;
              }),
              (n.contextType = Sn),
              n
            );
          })(i.Component)
        },
        _n = new Set([
          "initial",
          "animate",
          "exit",
          "style",
          "variants",
          "transition",
          "transformTemplate",
          "transformValues",
          "custom",
          "inherit",
          "static",
          "positionTransition",
          "layoutTransition",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onDirectionLock",
          "onDragTransitionEnd",
          "drag",
          "dragControls",
          "dragListener",
          "dragConstraints",
          "dragDirectionLock",
          "dragElastic",
          "dragMomentum",
          "dragPropagation",
          "dragTransition",
          "_dragValueX",
          "_dragValueY",
          "_dragTransitionControls",
          "dragOriginX",
          "dragOriginY",
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileHover",
          "whileTap",
          "onHoverEnd",
          "onHoverStart"
        ]);
      function qn(t) {
        return _n.has(t);
      }
      !(function(t) {
        (t.Target = "Target"),
          (t.VariantLabel = "VariantLabel"),
          (t.AnimationSubscription = "AnimationSubscription");
      })(zn || (zn = {}));
      function Zn(t, n) {
        void 0 === n && (n = !1);
        t.transition;
        var e = t.transitionEnd,
          i = Object(r.c)(t, ["transition", "transitionEnd"]);
        return n ? Object(r.a)(Object(r.a)({}, i), e) : i;
      }
      var Wn,
        Jn,
        Kn = function(t) {
          var n,
            e = t instanceof p ? t.get() : t;
          return Array.from(
            new Set((n = e) ? (Array.isArray(n) ? n : [n]) : [])
          );
        };
      var $n =
          (((Wn = {})[zn.Target] = _t(function(t) {
            return (function(t, n, e, o) {
              var a = Object(i.useRef)(!0),
                s = Object(i.useRef)(null);
              s.current || (s.current = Zn(t, !0)),
                Object(i.useEffect)(
                  function() {
                    var i,
                      u,
                      c = {},
                      f = Zn(t),
                      l = Zn(t, !0);
                    for (var p in f) {
                      var h =
                          a.current && (!e.has(p) || e.get(p).get() !== l[p]),
                        d = null !== l[p],
                        v =
                          ((i = s.current[p]),
                          void 0 !== (u = l[p]) &&
                            (Array.isArray(i) && Array.isArray(u)
                              ? !(function(t, n) {
                                  if (null === n) return !1;
                                  var e = n.length;
                                  if (e !== t.length) return !1;
                                  for (var r = 0; r < e; r++)
                                    if (n[r] !== t[r]) return !1;
                                  return !0;
                                })(u, i)
                              : i !== u));
                      d && (v || h) && (c[p] = f[p]);
                    }
                    (a.current = !1),
                      (s.current = Object(r.a)(Object(r.a)({}, s.current), l)),
                      Object.keys(c).length &&
                        n.start(
                          Object(r.a)(Object(r.a)({}, c), {
                            transition: t.transition || o,
                            transitionEnd: t.transitionEnd
                          })
                        );
                  },
                  [t]
                );
            })(t.animate, t.controls, t.values, t.transition);
          })),
          (Wn[zn.VariantLabel] = _t(function(t) {
            var n = t.animate,
              e = t.inherit,
              r = void 0 === e || e,
              o = t.controls;
            return (function(t, n, e, r) {
              var o = Kn(n),
                a = Object(i.useContext)(et),
                s = a.hasMounted && a.hasMounted.current,
                u = Object(i.useRef)(!1);
              Object(i.useEffect)(
                function() {
                  var n,
                    i,
                    c = !1;
                  e
                    ? ((c = !!s), (o = Kn(a.animate)))
                    : (c =
                        u.current ||
                        ((n = Kn(t)), (i = o), n.join(",") !== i.join(","))),
                    c && r.start(o),
                    (u.current = !0);
                },
                [o.join(",")]
              );
            })(t.initial, n, r, o);
          })),
          (Wn[zn.AnimationSubscription] = _t(function(t) {
            return (function(t, n) {
              var e = Object(i.useMemo)(
                function() {
                  return t.subscribe(n);
                },
                [t]
              );
              Object(i.useEffect)(
                function() {
                  return function() {
                    e && e();
                  };
                },
                [e]
              );
            })(t.animate, t.controls);
          })),
          Wn),
        Qn = function(t) {
          return t.animate instanceof tt;
        },
        te = ["initial", "animate", "whileTap", "whileHover"],
        ne =
          (((Jn = {})[zn.Target] = function(t) {
            return !(
              void 0 === t.animate ||
              ((n = t.animate), Array.isArray(n) || "string" == typeof n) ||
              Qn(t)
            );
            var n;
          }),
          (Jn[zn.VariantLabel] = function(t) {
            return (
              void 0 !== t.variants ||
              te.some(function(n) {
                return "string" == typeof t[n];
              })
            );
          }),
          (Jn[zn.AnimationSubscription] = Qn),
          Jn);
      var ee = {
          key: "exit",
          shouldRender: function(t) {
            return !!t.exit && !st(t);
          },
          Component: _t(function(t) {
            var n,
              e = t.animate,
              o = t.controls,
              a = t.exit,
              s = (function() {
                var t = Object(i.useContext)(nt);
                if (null === t) return [!0];
                var n = t.isPresent,
                  e = t.onExitComplete,
                  r = t.register;
                return Object(i.useEffect)(r, []), !n && e ? [!1, e] : [!0];
              })(),
              u = s[0],
              c = s[1],
              f = Object(i.useContext)(nt),
              l = Object(i.useRef)(!1),
              p =
                void 0 !==
                (null === (n = f) || void 0 === n ? void 0 : n.custom)
                  ? f.custom
                  : t.custom;
            Object(i.useEffect)(
              function() {
                u
                  ? !l.current || !e || e instanceof tt || o.start(e)
                  : (!l.current &&
                      a &&
                      (o.setProps(
                        Object(r.a)(Object(r.a)({}, t), { custom: p })
                      ),
                      o.start(a).then(c)),
                    (l.current = !0)),
                  u && (l.current = !1);
              },
              [u]
            );
          })
        },
        re = function(t) {
          return !qn(t);
        };
      try {
        var ie = e("9uj6").default;
        re = function(t) {
          return t.startsWith("on") ? !qn(t) : ie(t);
        };
      } catch (xn) {}
      var oe = [Gn, cn, Zt, ee],
        ae = oe.length;
      function se(t) {
        var n = "string" == typeof t,
          e = n && -1 !== ct.indexOf(t);
        return {
          renderComponent: function(o, a, u, c, f) {
            var l = n
                ? (function(t) {
                    var n = {};
                    for (var e in t) re(e) && (n[e] = t[e]);
                    return n;
                  })(c)
                : c,
              p = e
                ? (function(t, n) {
                    var e = T(t),
                      i = Object(s.a)(e, void 0, void 0, void 0, void 0, !1);
                    return (
                      (i.style = Object(r.a)(Object(r.a)({}, n), i.style)), i
                    );
                  })(u, a)
                : { style: k(u, a, f) };
            return Object(i.createElement)(
              t,
              Object(r.a)(Object(r.a)(Object(r.a)({}, l), { ref: o }), p)
            );
          },
          loadFunctionalityComponents: function(t, n, e, o, a, s) {
            var u = [],
              c = (function(t) {
                var n = void 0;
                for (var e in zn) ne[e](t) && (n = e);
                return n ? $n[n] : void 0;
              })(e);
            c &&
              u.push(
                Object(i.createElement)(c, {
                  key: "animation",
                  initial: e.initial,
                  animate: e.animate,
                  variants: e.variants,
                  transition: e.transition,
                  controls: a,
                  inherit: s,
                  values: n
                })
              );
            for (var f = 0; f < ae; f++) {
              var l = oe[f],
                p = l.shouldRender,
                h = l.key,
                d = l.Component;
              p(e, o) &&
                u.push(
                  Object(i.createElement)(
                    d,
                    Object(r.a)({ key: h }, e, {
                      parentContext: o,
                      values: n,
                      controls: a,
                      innerRef: t
                    })
                  )
                );
            }
            return u;
          },
          getValueControlsConfig: function(t, n) {
            return {
              values: n,
              readValueFromSource: function(n) {
                return Object(s.d)(t.current).get(n);
              },
              makeTargetAnimatable: Pn(n, t)
            };
          }
        };
      }
      var ue = [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "webview"
        ].reduce(function(t, n) {
          var e = se(n);
          return (t[n] = ut(e)), t;
        }, {}),
        ce = ct.reduce(function(t, n) {
          return (t[n] = ut(se(n))), t;
        }, {}),
        fe = Object(r.a)(
          Object(r.a)(
            {
              custom: function(t) {
                return ut(se(t));
              }
            },
            ue
          ),
          ce
        );
      h(0), h(0), h(0), h(0);
      function le() {
        var t = d(function() {
          return new tt();
        });
        return (
          Object(i.useEffect)(function() {
            return (
              t.mount(),
              function() {
                return t.unmount();
              }
            );
          }, []),
          t
        );
      }
      !(function() {
        function t() {
          this.componentControls = new Set();
        }
        (t.prototype.subscribe = function(t) {
          var n = this;
          return (
            this.componentControls.add(t),
            function() {
              return n.componentControls.delete(t);
            }
          );
        }),
          (t.prototype.start = function(t, n) {
            this.componentControls.forEach(function(e) {
              e.start(t.nativeEvent || t, n);
            });
          });
      })();
      var pe = h(null);
      if ("undefined" != typeof window)
        if (window.matchMedia) {
          var he = window.matchMedia("(prefers-reduced-motion)"),
            de = function() {
              return pe.set(he.matches);
            };
          he.addListener(de), de();
        } else pe.set(!1);
    }
  }
]);
//# sourceMappingURL=05d954cf-c0de2b0abc039aa15ba3.js.map
