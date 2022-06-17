!(function (s) {
  "use strict";
  const o = 800,
    e = s(window);
  document.documentElement.setAttribute("data-useragent", navigator.userAgent);
  s("html").addClass("ss-preload"),
    e.on("load", function () {
      s("#loader").fadeOut("slow", function () {
        s("#preloader").delay(300).fadeOut("slow");
      }),
        s("html").removeClass("ss-preload"),
        s("html").addClass("ss-loaded");
    }),
    (function () {
      const o = s(".header-menu-toggle"),
        l = s(".header-nav-wrap");
      o.on("click", function (s) {
        s.preventDefault(), o.toggleClass("is-clicked"), l.slideToggle();
      }),
        o.is(":visible") && l.addClass("mobile"),
        e.on("resize", function () {
          o.is(":visible") ? l.addClass("mobile") : l.removeClass("mobile");
        }),
        l.find("a").on("click", function () {
          l.hasClass("mobile") &&
            (o.toggleClass("is-clicked"), l.slideToggle());
        });
    })(),
    s(".alert-box").on("click", ".alert-box__close", function () {
      s(this).parent().fadeOut(500);
    }),
    s(".smoothscroll").on("click", function (e) {
      const l = this.hash,
        i = s(l);
      e.preventDefault(),
        e.stopPropagation(),
        s("html, body")
          .stop()
          .animate({ scrollTop: i.offset().top }, o, "swing")
          .promise()
          .done(function () {
            s("body").hasClass("menu-is-open") &&
              s(".header-menu-toggle").trigger("click"),
              (window.location.hash = l);
          });
    }),
    (function () {
      const o = s(".ss-go-top");
      s(window).scrollTop() >= 500 && o.addClass("link-is-visible"),
        s(window).on("scroll", function () {
          s(window).scrollTop() >= 500
            ? o.hasClass("link-is-visible") || o.addClass("link-is-visible")
            : o.removeClass("link-is-visible");
        });
    })();
})(jQuery);
