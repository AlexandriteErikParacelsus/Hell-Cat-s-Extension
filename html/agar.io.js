! function(d, e) {
  function Ob() {
    tTR = 0, mC = 1, Ja = !0, d.freezeBots = !1, jb(), setInterval(jb, 18e4), M = Ka = document.getElementById("canvas"), f = M.getContext("2d"), M.onmousedown = function(e) {
      if (kb) {
        var t = e.clientX - (5 + k / 5 / 2),
          n = e.clientY - (5 + k / 5 / 2);
        if (Math.sqrt(t * t + n * n) <= k / 5 / 2) return ca(), void H(17)
      }
      oa = 1 * e.clientX, pa = 1 * e.clientY, La(), ca()
    }, M.onmousemove = function(e) {
      oa = 1 * e.clientX, pa = 1 * e.clientY, La()
    }, M.onmouseup = function() {}, /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", lb, !1) : document.body.onmousewheel = lb;
    var t = !1,
      n = !1,
      o = !1;
    d.onkeydown = function(e) {
      32 != e.keyCode || t || (ca(), H(17), t = !0), 81 != e.keyCode || n || (H(18), n = !0), 87 != e.keyCode || o || (ca(), H(21), o = !0), 69 == e.keyCode && sB(), 82 == e.keyCode && eMB(), 27 == e.keyCode && (e.preventDefault(), qa(300)), 84 == e.keyCode && (1 == window.freezeBots ? window.freezeBots = !1 : window.freezeBots = !0)
    }, d.onkeyup = function(e) {
      32 == e.keyCode && (t = !1), 87 == e.keyCode && (o = !1), 81 == e.keyCode && n && (H(19), n = !1)
    }, d.onblur = function() {
      H(19), o = n = t = !1
    }, d.onresize = mb, d.requestAnimationFrame(nb), setInterval(ca, 40), y && e("#region").val(y), ob(), ra(e("#region").val()), 0 == Ma && y && N(), qa(0), mb(), d.location.hash && 6 <= d.location.hash.length && pb(d.location.hash)
  }

  function lb(e) {
    O *= Math.pow(.9, e.wheelDelta / -120 || e.detail || 0), (eZE() ? .1 : 1) > O && (O = eZE() ? .1 : 1), O > 4 / g && (O = 4 / g)
  }  
  
  function Pb() {
    if (.4 > g) da = null;
    else {
      for (var e = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY, i = 0; i < u.length; i++) {
        var r = u[i];
        !r.D() || r.J || 20 >= r.size * g || (e = Math.min(r.x - r.size, e), n = Math.min(r.y - r.size, n), o = Math.max(r.x + r.size, o), a = Math.max(r.y + r.size, a))
      }
      for (da = Qb.V({
          Z: e - 10,
          $: n - 10,
          X: o + 10,
          Y: a + 10,
          da: 2,
          ea: 4
        }), i = 0; i < u.length; i++)
        if (r = u[i], r.D() && !(20 >= r.size * g))
          for (e = 0; e < r.a.length; ++e) n = r.a[e].x, o = r.a[e].y, s - k / 2 / g > n || t - p / 2 / g > o || n > s + k / 2 / g || o > t + p / 2 / g || da.W(r.a[e])
    }
  }

  function La() {
    sg && fCE() && "" != gCTF() || (sa = (oa - k / 2) / g + s, ta = (pa - p / 2) / g + t), localStorage.x = s.toFixed(0), localStorage.y = t.toFixed(0)
  }

  function jb() {
    null == ua && (ua = {}, e("#region").children().each(function() {
      var t = e(this),
        n = t.val();
      n && (ua[n] = t.text())
    })), e.get(ea + "info", function(t) {
      var n, o = {};
      for (n in t.regions) {
        var a = n.split(":")[0];
        o[a] = o[a] || 0, o[a] += t.regions[n].numPlayers
      }
      for (n in o) e('#region option[value="' + n + '"]').text(ua[n] + " (" + o[n] + " players)")
    }, "json")
  }

  function qb() {
    e("#adsBottom").hide(), e("#overlays").hide(), e("#stats").hide(), e("#mainPanel").hide(), X = fa = !1, ob(), rb(d.aa.concat(d.ac))
  }

  function ra(t) {
    t && (t == y ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != t && e("#region").val(t), y = d.localStorage.location = t, e(".region-message").hide(), e(".region-message." + t).show(), e(".btn-needs-server").prop("disabled", !1), Ja && N()))
  }

  function qa(t) {
    fa || X || (va ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), I = null, Na || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show()), sb(Na ? d.ac : d.aa), Na = !1, 1e3 > t && (r = 1), fa = !0, e("#mainPanel").show(), t > 0 ? e("#overlays").fadeIn(t) : e("#overlays").show())
  }

  function ga(t) {
    e("#helloContainer").attr("data-gamemode", t), P = t, e("#gamemode").val(t)
  }

  function ob() {
    e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location), e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
  }

  function sb(e) {
    d.googletag && d.googletag.cmd.push(function() {
      Oa && (Oa = !1, setTimeout(function() {
        Oa = !0
      }, 6e4 * Rb), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(e))
    })
  }

  function rb(e) {
    d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(e)
  }

  function ha(e) {
    return d.i18n[e] || d.i18n_dict.en[e] || e
  }

  function tb() {
    var t = ++Ma;
    console.log("Find " + y + P), e.ajax(ea + "findServer", {
      error: function() {
        setTimeout(tb, 3e4)
      },
      success: function(e) {
        if (t == Ma) {
          e.alert && alert(e.alert);
          var n = e.ip;
          void 0 != Q.U && (n = d.location.hostname + ":" + Q.U), Pa("ws" + (Qa ? "s" : "") + "://" + n, e.token)
        }
      },
      dataType: "json",
      method: "POST",
      cache: !1,
      crossDomain: !0,
      data: (y + P || "?") + "\n2200049715"
    })
  }

  function N() {
    Ja && y && (e("#connecting").show(), tb())
  }

  function Pa(e, t) {
    if (q) {
      q.onopen = null, q.onmessage = null, q.onclose = null;
      try {
        q.close()
      } catch (n) {}
      q = null
    }
    if (Ra.ip && (e = "ws" + (Qa ? "s" : "") + "://" + Ra.ip), null != R) {
      var o = R;
      R = function() {
        o(t)
      }
    }
    if (Qa && !Q.env_development && !Q.env_local) {
      var a = e.split(":");
      e = "wss://ip-" + a[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +a[2]
    }
    z = [], l = [], J = {}, u = [], Y = [], w = [], A = B = null, K = 0, ia = !1, console.log("Connecting to " + e), jQuery("#serverIP").val(e), jQuery("#token").val(t), tTR = 0, stopBots(), q = new WebSocket(e), q.binaryType = "arraybuffer", q.onopen = function() {
      var e;
      console.log("socket open"), e = S(5), e.setUint8(0, 254), e.setUint32(1, 5, !0), T(e), e = S(5), e.setUint8(0, 255), e.setUint32(1, 2200049715, !0), T(e), e = S(1 + t.length), e.setUint8(0, 80);
      for (var n = 0; n < t.length; ++n) e.setUint8(n + 1, t.charCodeAt(n));
      T(e), ub()
    }, q.onmessage = Sb, q.onclose = Tb, q.onerror = function() {
      console.log("socket error")
    }
  }

  function S(e) {
    return new DataView(new ArrayBuffer(e))
  }

  function T(e) {
    q.send(e.buffer)
  }

  function Tb() {
    ia && (wa = 500), console.log("socket close"), setTimeout(N, wa), wa *= 2
  }

  function Sb(e) {
    Ub(new DataView(e.data))
  }

  function Ub(e) {
    function n() {
      for (var t = "";;) {
        var n = e.getUint16(o, !0);
        if (o += 2, 0 == n) break;
        t += String.fromCharCode(n)
      }
      return t
    }
    var o = 0;
    switch (240 == e.getUint8(o) && (o += 5), e.getUint8(o++)) {
      case 16:
        Vb(e, o);
        break;
      case 17:
        ja = e.getFloat32(o, !0), o += 4, ka = e.getFloat32(o, !0), o += 4, la = e.getFloat32(o, !0), o += 4;
        break;
      case 20:
        l = [], z = [];
        break;
      case 21:
        Sa = e.getInt16(o, !0), o += 2, Ta = e.getInt16(o, !0), o += 2, Ua || (Ua = !0, xa = Sa, ya = Ta);
        break;
      case 32:
        z.push(e.getUint32(o, !0)), o += 4;
        break;
      case 49:
        if (null != B) break;
        var a = e.getUint32(o, !0),
          o = o + 4;
        w = [];
        for (var i = 0; a > i; ++i) {
          var r = e.getUint32(o, !0),
            o = o + 4;
          w.push({
            id: r,
            name: n()
          })
        }
        vb();
        break;
      case 50:
        for (B = [], a = e.getUint32(o, !0), o += 4, i = 0; a > i; ++i) B.push(e.getFloat32(o, !0)), o += 4;
        vb();
        break;
      case 64:
        za = e.getFloat64(o, !0), o += 8, Aa = e.getFloat64(o, !0), o += 8, Ba = e.getFloat64(o, !0), o += 8, Ca = e.getFloat64(o, !0), o += 8, ja = (Ba + za) / 2, ka = (Ca + Aa) / 2, la = 1, 0 == l.length && (s = ja, t = ka, g = la), e.byteLength > o && (e.getUint32(o, !0), o += 4, Va = n(), d.MC.updateServerVersion(Va), console.log("Server version " + Va));
        break;
      case 81:
        var c = e.getUint32(o, !0),
          o = o + 4,
          h = e.getUint32(o, !0),
          o = o + 4,
          f = e.getUint32(o, !0),
          o = o + 4;
        setTimeout(function() {
          var e = {
            level: c,
            xp: h,
            xpNeeded: f
          };
          d.MC.updateUserXPInfo(e), Z(e)
        }, 1200)
    }
  }

  function Vb(n, o) {
    function a() {
      for (var e = "";;) {
        var t = n.getUint16(o, !0);
        if (o += 2, 0 == t) break;
        e += String.fromCharCode(t)
      }
      return e
    }

    function i() {
      for (var e = "";;) {
        var t = n.getUint8(o++);
        if (0 == t) break;
        e += String.fromCharCode(t)
      }
      return e
    }
    wb = F = Date.now(), ia || (ia = !0, e("#connecting").hide(), xb(), R && (R(), R = null)), Wa = !1;
    var r = n.getUint16(o, !0);
    o += 2;
    for (var c = 0; r > c; ++c) {
      var h = J[n.getUint32(o, !0)],
        f = J[n.getUint32(o + 4, !0)];
      o += 8, h && f && (f.P(), f.l = f.x, f.m = f.y, f.k = f.size, f.w = h.x, f.A = h.y, f.h = f.size, f.I = F, Wb(h, f))
    }
    for (c = 0; r = n.getUint32(o, !0), o += 4, 0 != r;) {
      ++c;
      var g, h = n.getInt32(o, !0);
      o += 4, f = n.getInt32(o, !0), o += 4, g = n.getInt16(o, !0), o += 2;
      var p = n.getUint8(o++),
        b = n.getUint8(o++),
        m = n.getUint8(o++),
        b = Xb(p << 16 | b << 8 | m),
        m = n.getUint8(o++),
        _ = !!(1 & m),
        y = !!(16 & m),
        S = null;
      2 & m && (o += 4 + n.getUint32(o, !0)), 4 & m && (S = i());
      var v = a(),
        p = null;
      J.hasOwnProperty(r) ? (p = J[r], p.H(), p.l = p.x, p.m = p.y, p.k = p.size, p.color = b) : (p = new $(r, h, f, g, b, v), u.push(p), J[r] = p, p.fa = h, p.ha = f), p.c = _, p.g = y, p.w = h, p.A = f, p.h = g, p.I = F, p.R = m, S && (p.G = S), v && p.q(v), -1 != z.indexOf(r) && -1 == l.indexOf(p) && (l.push(p), 1 == l.length && (s = p.x, t = p.y, yb(), document.getElementById("overlays").style.display = "none", x = [], Xa = 0, Ya = l[0].color, va = !0, Za = Date.now(), V = Da = $a = 0))
    }
    for (h = n.getUint32(o, !0), o += 4, c = 0; h > c; c++) r = n.getUint32(o, !0), o += 4, p = J[r], null != p && p.P();
    if (l.length > 0 && mC != l.length && gMRM() > 34) {
      if (mC > l.length) return void(mC = l.length);
      mC = l.length, tTR = .02 * gMRM() + 30, "undefined" != typeof checkMergeTime && clearInterval(checkMergeTime), checkMergeTime = setInterval(function() {
        tTR > 0 && tTR--, 0 == tTR && clearInterval(this)
      }, 1e3)
    }
    l.length < 2 && tTR > 0 && (tTR = 0, mC = 1), Wa && 0 == l.length && (ab = Date.now(), va = !1, fa || X || (zb ? (sb(d.ab), Yb(), X = !0, e("#overlays").fadeIn(3e3), "undefined" != typeof checkMergeTime && clearInterval(checkMergeTime), tTR = 0, e("#stats").show()) : qa(3e3)), d.MC.deltaUpdateStats({
      games_played: 1,
      total_mass: ~~(K / 100),
      turn_time: (ab - Za) / 1e3,
      cells_eaten: Da
    }))
  }

  function ca() {
    if (aa()) {
      var e = oa - k / 2,
        t = pa - p / 2;
      64 > e * e + t * t || .01 > Math.abs(Ab - sa) && .01 > Math.abs(Bb - ta) || (Ab = sa, Bb = ta, e = S(13), e.setUint8(0, 16), e.setInt32(1, sa, !0), e.setInt32(5, ta, !0), e.setUint32(9, 0, !0), T(e))
    }
  }

  function xb() {
    if (aa() && ia && null != I) {
      var e = S(1 + 2 * I.length);
      e.setUint8(0, 0);
      for (var t = 0; t < I.length; ++t) e.setUint16(1 + 2 * t, I.charCodeAt(t), !0);
      T(e), I = null
    }
  }

  function aa() {
    return null != q && q.readyState == q.OPEN
  }

  function H(e) {
    if (aa()) {
      var t = S(1);
      t.setUint8(0, e), T(t)
    }
  }

  function ub() {
    if (aa() && null != C) {
      var e = S(1 + C.length);
      e.setUint8(0, 81);
      for (var t = 0; t < C.length; ++t) e.setUint8(t + 1, C.charCodeAt(t));
      T(e)
    }
  }

  function mb() {
    k = 1 * d.innerWidth, p = 1 * d.innerHeight, Ka.width = M.width = k, Ka.height = M.height = p;
    var t = e("#helloContainer");
    t.css("transform", "none");
    var n = t.height(),
      o = d.innerHeight;
    0 != n / 2 % 2 && (n++, t.height(n)), n > o / 1.1 ? t.css("transform", "translate(-50%, -50%) scale(" + o / n / 1.1 + ")") : t.css("transform", "translate(-50%, -50%)"), Cb()
  }

  function Db() {
    var e;
    return e = 1 * Math.max(p / 1080, k / 1920), e *= O
  }

  function Zb() {
    if (0 != l.length) {
      for (var e = 0, t = 0; t < l.length; t++) e += l[t].size;
      e = Math.pow(Math.min(64 / e, 1), .4) * Db(), g = (9 * g + e) / 10
    }
  }

  function Cb() {
    var e, n = Date.now();
    if (++$b, F = n, 0 < l.length) {
      Zb();
      for (var o = e = 0, a = 0; a < l.length; a++) l[a].H(), e += l[a].x / l.length, o += l[a].y / l.length;
      ja = e, ka = o, la = g, s = (s + e) / 2, t = (t + o) / 2
    } else s = (29 * s + ja) / 30, t = (29 * t + ka) / 30, g = (9 * g + la * Db()) / 10;
    for (Pb(), La(), bb || f.clearRect(0, 0, k, p), bb ? (f.fillStyle = Ea ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, k, p), f.globalAlpha = 1) : ac(), u.sort(function(e, t) {
        return e.size == t.size ? e.id - t.id : e.size - t.size
      }), f.save(), f.translate(k / 2, p / 2), f.scale(g, g), f.translate(-s, -t), sBsE() && drawBorders(f), a = 0; a < Y.length; a++) Y[a].p(f);
    for (a = 0; a < u.length; a++) u[a].p(f);
    if (Ua) {
      for (xa = (3 * xa + Sa) / 4, ya = (3 * ya + Ta) / 4, f.save(), f.strokeStyle = "#FFAAAA", f.lineWidth = 10, f.lineCap = "round", f.lineJoin = "round", f.globalAlpha = .5, f.beginPath(), a = 0; a < l.length; a++) f.moveTo(l[a].x, l[a].y), f.lineTo(xa, ya);
      f.stroke(), f.restore()
    }
    f.restore(), A && A.width && f.drawImage(A, k - A.width - 10, 10), K = Math.max(K, Eb()), 0 != K && (null == Fa && (Fa = new Ga(24, "#FFFFFF")), Fa.r(ha("score") + ": " + ~~(K / 100)), o = Fa.B(), e = o.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, p - 10 - 24 - 10, e + 10, 34), f.globalAlpha = 1, f.drawImage(o, 15, p - 10 - 24 - 5)), drawText("X: " + localStorage.x + " Y: " + localStorage.y, 8, 8), "Stop bots" == jQuery('[data-itr="run_bots"]').html() ? drawText("Bots: " + bots.length + " / " + mAB, 8, 46) : !1, mTE() && tTR > 1 && drawText(1 == tTR.length ? "0" : "" + tTR.toFixed(0) + "s", M.width / 2 - 72, 8), bc(), n = Date.now() - n, n > 1e3 / 60 ? G -= .01 : 1e3 / 65 > n && (G += .01), .4 > G && (G = .4), G > 1 && (G = 1), n = F - Fb, !aa() || fa || X ? (r += n / 2e3, r > 1 && (r = 1)) : (r -= n / 300, 0 > r && (r = 0)), r > 0 ? (f.fillStyle = "#000000", Gb ? (f.globalAlpha = r, f.fillRect(0, 0, k, p), D.complete && D.width && (D.width / D.height < k / p ? (n = k, e = D.height * k / D.width) : (n = D.width * p / D.height, e = p), f.drawImage(D, (k - n) / 2, (p - e) / 2, n, e), f.globalAlpha = .5 * r, f.fillRect(0, 0, k, p))) : (f.globalAlpha = .5 * r, f.fillRect(0, 0, k, p)), f.globalAlpha = 1) : Gb = !1, Fb = F
  }

  function drawText(e, t, n) {
    button = new Ga(24, "#FFFFFF"), button.r(e);
    var o = button.B(),
      a = o.width,
      i = o.height;
    f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(0 + t, i - 28 + n, a + 10, 34), f.globalAlpha = 1, f.drawImage(o, 5 + t, i - 23 + n)
  }

  function drawBorders(e) {
    Ea && (e.strokeStyle = "#FFFFFF"), e.beginPath(), e.moveTo(za, Aa), e.lineTo(Ba, Aa), e.lineTo(Ba, Ca), e.lineTo(za, Ca), e.lineTo(za, Aa), e.stroke()
  }

  function getGameMode() {
    return e("#gamemode").val()
  }

  function hexToRGB(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(t, function(e, t, n, o) {
      return t + t + n + n + o + o
    });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return n ? {
      r: parseInt(n[1], 16),
      g: parseInt(n[2], 16),
      b: parseInt(n[3], 16)
    } : null
  }

  function ac() {
    if (nGE()) return Ea ? f.fillStyle = "#111111" : f.fillStyle = "#F2FBFF", f.fillRect(0, 0, k, p), f.save(), f.restore(), !1;
    f.fillStyle = Ea ? "#111111" : "#F2FBFF", f.fillRect(0, 0, k, p), f.save(), f.strokeStyle = Ea ? "#AAAAAA" : "#000000", f.globalAlpha = .2 * g;
    for (var e = k / g, n = p / g, o = (-s + e / 2) % 50; e > o; o += 50) f.beginPath(), f.moveTo(o * g - .5, 0), f.lineTo(o * g - .5, n * g), f.stroke();
    for (o = (-t + n / 2) % 50; n > o; o += 50) f.beginPath(), f.moveTo(0, o * g - .5), f.lineTo(e * g, o * g - .5), f.stroke();
    f.restore()
  }

  function bc() {
    if (kb && cb.width) {
      var e = k / 5;
      f.drawImage(cb, 5, 5, e, e)
    }
  }

  function Eb() {
    for (var e = 0, t = 0; t < l.length; t++) e += l[t].h * l[t].h;
    return e
  }

  function vb() {
    if (A = null, (null != B || 0 != w.length) && (null != B || Ha)) {
      A = document.createElement("canvas");
      var e = A.getContext("2d"),
        t = 60,
        t = null == B ? t + 24 * w.length : t + 180,
        n = Math.min(200, .3 * k) / 200;
      if (A.width = 200 * n, A.height = t * n, e.scale(n, n), e.globalAlpha = .4, e.fillStyle = "#000000", e.fillRect(0, 0, 200, t), e.globalAlpha = 1, e.fillStyle = "#FFFFFF", n = null, n = ha("leaderboard"), e.font = "30px Ubuntu", e.fillText(n, 100 - e.measureText(n).width / 2, 40), null == B)
        for (e.font = "20px Ubuntu", t = 0; t < w.length; ++t) n = w[t].name || ha("unnamed_cell"), Ha || (n = ha("unnamed_cell")), -1 != z.indexOf(w[t].id) ? (l[0].name && (n = l[0].name), e.fillStyle = "#FFAAAA") : e.fillStyle = "#FFFFFF", n = t + 1 + ". " + n, e.fillText(n, 100 - e.measureText(n).width / 2, 70 + 24 * t);
      else
        for (t = n = 0; t < B.length; ++t) {
          var o = n + B[t] * Math.PI * 2;
          e.fillStyle = cc[t + 1], e.beginPath(), e.moveTo(100, 140), e.arc(100, 140, 80, n, o, !1), e.fill(), n = o
        }
    }
  }

  function dc(e) {
    if (null == e || 0 == e.length) return null;
    if ("%" == e[0]) {
      if (!d.MC || !d.MC.getSkinInfo) return null;
      if (e = d.MC.getSkinInfo("skin_" + e.slice(1)), null == e) return null;
      for (e = (+e.color).toString(16); 6 > e.length;) e = "0" + e;
      return "#" + e
    }
    return null
  }

  function ec(e) {
    if (null == e || 0 == e.length) return null;
    if (!ma.hasOwnProperty(e)) {
      var t = new Image;
      if (":" == e[0]) t.src = e.slice(1);
      else if ("%" == e[0]) {
        if (!d.MC || !d.MC.getSkinInfo) return null;
        var n = d.MC.getSkinInfo("skin_" + e.slice(1));
        if (null == n) return null;
        t.src = d.ASSETS_ROOT + "skins/premium/" + A + ".url"
      }
      ma[e] = t
    }
    return 0 != ma[e].width && ma[e].complete ? ma[e] : null
  }

  function db(e, t, n, o, a) {
    this.N = e, this.x = t, this.y = n, this.d = o, this.b = a
  }

  function $(e, t, n, o, a, i) {
    this.id = e, this.l = this.x = t, this.m = this.y = n, this.k = this.size = o, this.color = a, this.a = [], this.O(), this.q(i)
  }

  function Xb(e) {
    for (e = e.toString(16); 6 > e.length;) e = "0" + e;
    return "#" + e
  }

  function Ga(e, t, n, o) {
    e && (this.n = e), t && (this.K = t), this.M = !!n, o && (this.o = o)
  }

  function fc(e) {
    for (var t, n, o = e.length; o > 0;) n = Math.floor(Math.random() * o), o--, t = e[o], e[o] = e[n], e[n] = t
  }

  function Z(t, n) {
    var o = "1" == e("#helloContainer").attr("data-has-account-data");
    if (e("#helloContainer").attr("data-has-account-data", "1"), null == n && d.localStorage[W]) {
      var a = JSON.parse(d.localStorage[W]);
      a.xp = t.xp, a.xpNeeded = t.xpNeeded, a.level = t.level, d.localStorage[W] = JSON.stringify(a)
    }
    if (o) {
      var i = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0],
        o = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0],
        a = e(".agario-profile-panel .progress-bar-star").first().text();
      if (a != t.level) Z({
        xp: o,
        xpNeeded: o,
        level: a
      }, function() {
        e(".agario-profile-panel .progress-bar-star").text(t.level), e(".agario-exp-bar .progress-bar").css("width", "100%"), e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
          e(".progress-bar-star").removeClass("animated tada")
        }), setTimeout(function() {
          e(".agario-exp-bar .progress-bar-text").text(t.xpNeeded + "/" + t.xpNeeded + " XP"), Z({
            xp: 0,
            xpNeeded: t.xpNeeded,
            level: t.level
          }, function() {
            Z(t, n)
          })
        }, 1e3)
      });
      else {
        var r = Date.now(),
          s = function() {
            var o;
            o = (Date.now() - r) / 1e3, o = 0 > o ? 0 : o > 1 ? 1 : o, o = o * o * (3 - 2 * o), e(".agario-exp-bar .progress-bar-text").text(~~(i + (t.xp - i) * o) + "/" + t.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * (i + (t.xp - i) * o) / t.xpNeeded).toFixed(2) + "%"), 1 > o ? d.requestAnimationFrame(s) : n && n()
          };
        d.requestAnimationFrame(s)
      }
    } else e(".agario-profile-panel .progress-bar-star").text(t.level), e(".agario-exp-bar .progress-bar-text").text(t.xp + "/" + t.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * t.xp / t.xpNeeded).toFixed(2) + "%"), n && n()
  }

  function Hb(t) {
    "string" == typeof t && (t = JSON.parse(t)), d.localStorage[W] = JSON.stringify(t), C = t.authToken;
    var n = t.name,
      n = n.substring(0, n.indexOf(" "));
    e(".agario-profile-name").text(n), ub(), Z({
      xp: t.xp,
      xpNeeded: t.xpNeeded,
      level: t.level
    }), e("#helloContainer").attr("data-logged-in", "1")
  }

  function gc(e) {
    e = e.split("\n"), Hb({
      name: e[0],
      fbid: e[1],
      authToken: e[2],
      expires: 1e3 * +e[3],
      level: +e[4],
      xp: +e[5],
      xpNeeded: +e[6]
    })
  }

  function eb(t) {
    if ("connected" == t.status && +d.localStorage.wannaLogin) {
      var n = t.authResponse.accessToken;
      null == n || "undefined" == n || "" == n ? (3 > Ib && (Ib++, d.facebookRelogin()), d.logout()) : (d.localStorage.fbTokenCache = n, delete d.localStorage.wannaLogin, console.log("doLogin because fb logged in"), d.MC.doLoginWithFB(n), d.FB.api("/me/picture?width=180&height=180", function(t) {
        d.localStorage.fbPictureCache = t.data.url, e(".agario-profile-picture").attr("src", t.data.url)
      }), e("#helloContainer").attr("data-logged-in", "1"), null != C ? d.checkSocialAPIToken(t) : d.getSocialAPIToken())
    }
  }

  function pb(t) {
    ga(":party"), e("#helloContainer").attr("data-party-state", "4"), t = decodeURIComponent(t).replace(/.*#/gim, ""), fb("#" + d.encodeURIComponent(t)), e.ajax(ea + "getToken", {
      error: function() {
        e("#helloContainer").attr("data-party-state", "6")
      },
      success: function(n) {
        n = n.split("\n"), e(".partyToken").val("agar.io/#" + d.encodeURIComponent(t)), e("#helloContainer").attr("data-party-state", "5"), ga(":party"), Pa("ws://" + n[0], t)
      },
      dataType: "text",
      method: "POST",
      cache: !1,
      crossDomain: !0,
      data: t
    })
  }

  function fb(e) {
    d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, e)
  }

  function Wb(e, t) {
    var n = -1 != z.indexOf(e.id),
      o = -1 != z.indexOf(t.id),
      a = 30 > t.size;
    n && a && ++Xa, a || !n || o || ++Da
  }

  function Jb(e) {
    e = ~~e;
    var t = (e % 60).toString();
    return e = (~~(e / 60)).toString(), 2 > t.length && (t = "0" + t), e + ":" + t
  }

  function hc() {
    if (null == w) return 0;
    for (var e = 0; e < w.length; ++e)
      if (-1 != z.indexOf(w[e].id)) return e + 1;
    return 0
  }

  function sOME() {
    return this.sOM
  }

  function sBsE() {
    return this.sBs
  }

  function eZE() {
    return this.eZ
  }

  function eCsE() {
    return this.eCs
  }

  function playing() {
    return "none" == jQuery("#overlays").css("display")
  }

  function sTE() {
    return this.sT
  }

  function gFE() {
    return this.gF
  }

  function vTE() {
    return this.vT
  }

  function lNE() {
    return this.lN
  }

  function sMRE() {
    return this.sMR
  }

  function sORE() {
    return this.sOR
  }

  function sVRE() {
    return this.sVR
  }

  function nGE() {
    return this.nG
  }

  function fCE() {
    return "undefined" == typeof uTF ? !1 : !0
  }

  function dCFS() {
    delete uTF, gCTF("")
  }

  function mTE() {
    return this.mT
  }

  function gCTF(e) {
    return "undefined" == typeof e ? ("undefined" == typeof this.cTF ? this.cTF = "" : !1, this.cTF) : void(this.cTF = e)
  }

  function mTm(e) {
    return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.mTm ? this.mTm = "" : !1, this.mTm) : void(this.mTm = e)
  }

  function gMM(e) {
    return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.mM ? this.mM = 0 : !1, this.mM) : void(this.mM = e)
  }

  function gMRM(e) {
    return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.rM ? this.rM = 0 : !1, this.rM) : void(this.rM = e)
  }

  function Yb() {
    e(".stats-food-eaten").text(Xa), e(".stats-time-alive").text(Jb((ab - Za) / 1e3)), e(".stats-leaderboard-time").text(Jb($a)), e(".stats-highest-mass").text(~~(K / 100)), e(".stats-cells-eaten").text(Da), e(".stats-top-position").text(0 == V ? ":(" : V);
    var t = document.getElementById("statsGraph");
    if (t) {
      var n = t.getContext("2d"),
        o = t.width,
        t = t.height;
      if (n.clearRect(0, 0, o, t), 2 < x.length) {
        for (var a = 200, i = 0; i < x.length; i++) a = Math.max(x[i], a);
        for (n.lineWidth = 3, n.lineCap = "round", n.lineJoin = "round", n.strokeStyle = Ya, n.fillStyle = Ya, n.beginPath(), n.moveTo(0, t - x[0] / a * (t - 10) + 10), i = 1; i < x.length; i += Math.max(~~(x.length / o), 1)) {
          for (var r = i / (x.length - 1) * o, s = [], l = -20; 20 >= l; ++l) 0 > i + l || i + l >= x.length || s.push(x[i + l]);
          s = s.reduce(function(e, t) {
            return e + t
          }) / s.length / a, n.lineTo(r, t - s * (t - 10) + 10)
        }
        n.stroke(), n.globalAlpha = .5, n.lineTo(o, t), n.lineTo(0, t), n.fill(), n.globalAlpha = 1
      }
    }
  }
  if (d.MC = function() {}, void 0 != d.EnvConfig) {
    var Q = d.EnvConfig;
    d.EnvConfig = Q
  }
  if (!d.agarioNoInit) {
    var gb = d.location.protocol,
      Qa = "https:" == gb,
      ea = gb + "//" + Q.master_url + "/",
      Ia = d.navigator.userAgent;
    if (-1 != Ia.indexOf("Android")) d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function() {
      d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
    }, 1e3);
    else if (-1 != Ia.indexOf("iPhone") || -1 != Ia.indexOf("iPad") || -1 != Ia.indexOf("iPod")) d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function() {
      d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
    }, 1e3);
    else {
      var Ka, f, M, k, p, da = null,
        q = null,
        s = 0,
        t = 0,
        z = [],
        l = [],
        J = {},
        u = [],
        Y = [],
        w = [],
        oa = 0,
        pa = 0,
        sa = -1,
        ta = -1,
        $b = 0,
        F = 0,
        Fb = 0,
        I = null,
        za = 0,
        Aa = 0,
        Ba = 1e4,
        Ca = 1e4,
        g = 1,
        y = null,
        hb = !0,
        Ha = !0,
        ib = !1,
        Wa = !1,
        K = 0,
        Ea = !1,
        Kb = !1,
        ja = s = ~~((za + Ba) / 2),
        ka = t = ~~((Aa + Ca) / 2),
        la = 1,
        P = "",
        B = null,
        Ja = !1,
        Ua = !1,
        Sa = 0,
        Ta = 0,
        xa = 0,
        ya = 0,
        Lb = 0,
        cc = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
        bb = !1,
        ia = !1,
        wb = 0,
        C = null,
        O = 1,
        r = 1,
        fa = !1,
        Ma = 0,
        Gb = !0,
        Ra = {},
        Va = null,
        sg = !1;
      ! function() {
        var e = d.location.search;
        "?" == e.charAt(0) && (e = e.slice(1));
        for (var e = e.split("&"), t = 0; t < e.length; t++) {
          var n = e[t].split("=");
          Ra[n[0]] = n[1]
        }
      }();
      var D = new Image;
      D.src = "/img/background.png";
      var kb = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent),
        cb = new Image;
      cb.src = "/img/split.png";
      var Mb = document.createElement("canvas");
      if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Mb || null == Mb.getContext || null == d.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
      else {
        var ua = null;
        d.isJSON = function(e) {
          try {
            JSON.parse(e)
          } catch (t) {
            return !1
          }
          return !0
        }, d.rememberAllOptions = function() {
          return isJSON(localStorage.r_options) ? (r_options = JSON.parse(localStorage.r_options), jQuery.each(r_options, function(e, t) {
            "boolean" == typeof t ? r_options[e] = jQuery("input", jQuery("[data-itr='" + e + "']").parent())[0].checked : "nick" == e ? r_options[e] = jQuery("#nick").val() : "botsNick" == e ? r_options[e] = jQuery("#botsNick").val() : "botsFollow" == e && (r_options[e] = jQuery("[name='botsFollow']:checked").val())
          }), void(localStorage.r_options = JSON.stringify(r_options))) : !1
        }, d.setNick = function(e) {
          d.ga && d.ga("send", "event", "Nick", e.toLowerCase()), qb(), I = e, xb(), K = 0, gMRM(0), sg = !1, "true" == localStorage.rememberOptions && rememberAllOptions(), hasAdblock || d.googletag.pubads().refresh(d.ap)
        }, d.setRegion = ra;
        var Na = !0;
        d.setSkins = function(e) {
          hb = e
        }, d.setNames = function(e) {
          Ha = e
        }, d.setDarkTheme = function() {
          Ea = e
        }, d.setColors = function(e) {
          ib = e
        }, d.setShowMass = function(e) {
          Kb = e
        }, d.spectate = function() {
          I = null, H(1), qb(), sg = !0
        }, d.setGameMode = function(t) {
          t != P && (":party" == P && e("#helloContainer").attr("data-party-state", "0"), ga(t), ":party" != t && N())
        }, d.setAcid = function(e) {
          bb = e
        }, d.setShowOthersMass = function(e) {
          sOM = e
        }, d.setShowBorders = function(e) {
          sBs = e
        }, d.setExtraZoom = function(e) {
          eZ = e
        }, d.setExtendedColors = function(e) {
          eCs = e
        }, d.setSkinTransparency = function(e) {
          sT = e
        }, d.setGreenFood = function(e) {
          gF = e
        }, d.setLargeNames = function(e) {
          lN = e
        }, d.setShowMyRange = function(e) {
          sMR = e
        }, d.setShowOpponentsRange = function(e) {
          sOR = e
        }, d.setShowVirusRange = function(e) {
          sVR = e
        }, d.setVirusTransparency = function(e) {
          vT = e
        }, d.setNoGrid = function(e) {
          nG = e
        };
        var _0x63d2 = ["runBots", "length", "val", "#token", "You must create a Party first or connect to a private server.", "Stop bots", "html", "[data-itr='run_bots']", "onclick", "stopBots(); return false;", "attr", "push", "binaryType", "arraybuffer", "bot", "id", "xPos", "yPos", "onopen", "setUint8", "setUint32", "buffer", "send", "charCodeAt", "onmessage", "data", "getUint8", "getUint16", "getUint32", "getInt32", "getInt16", "toFixed", "#botsNick", "setNick", "freezeBots", "setDirection", "[name='botsFollow']:checked", "cell", "x", "y", "onclose", "splice", "onerror", "undefined", "setUint16", "setInt32", "split", "ejectMass"];
        d[_0x63d2[0]] = function(e, t) {
          if (jQuery(_0x63d2[3])[_0x63d2[2]]()[_0x63d2[1]] > 8) return alert(_0x63d2[4]), !1;
          for (jQuery(_0x63d2[3])[_0x63d2[2]]()[_0x63d2[1]] > 0 ? mAB = jQuery("#botsAmount").val() : mAB = jQuery("#botsAmount").val(), jQuery(_0x63d2[7])[_0x63d2[6]](_0x63d2[5]), jQuery(_0x63d2[7])[_0x63d2[10]](_0x63d2[8], _0x63d2[9]), bots = [], currentServer = e, i = 0; i < mAB; i++) bots[_0x63d2[11]](new WebSocket(e)), bots[i][_0x63d2[12]] = _0x63d2[13], bots[i][_0x63d2[14]] = i, bots[i][_0x63d2[15]] = null, bots[i][_0x63d2[16]] = null, bots[i][_0x63d2[17]] = null, bots[i][_0x63d2[18]] = function() {
            a = new DataView(new ArrayBuffer(5)), a[_0x63d2[19]](0, 254), a[_0x63d2[20]](1, 5, !0), this[_0x63d2[22]](a[_0x63d2[21]]), a = new DataView(new ArrayBuffer(5)), a[_0x63d2[19]](0, 255), a[_0x63d2[20]](1, 154669603, !0), this[_0x63d2[22]](a[_0x63d2[21]]), a = new DataView(new ArrayBuffer(1 + t[_0x63d2[1]])), a[_0x63d2[19]](0, 80);
            for (var e = 0; e < t[_0x63d2[1]]; ++e) a[_0x63d2[19]](e + 1, t[_0x63d2[23]](e));
            this[_0x63d2[22]](a[_0x63d2[21]])
          }, bots[i][_0x63d2[24]] = function(e) {
            if (playing()) {
              e = new DataView(e[_0x63d2[25]]);
              var t = 0;
              switch (240 == e[_0x63d2[26]](t) && (t += 5), e[_0x63d2[26]](t++)) {
                case 16:
                  b = t;
                  var n = e[_0x63d2[27]](b, !0);
                  b += 2;
                  for (var o = 0; n > o; ++o) b += 8;
                  for (; playerId = e[_0x63d2[28]](b, !0), b += 4, 0 != playerId;) {
                    if (xPos = e[_0x63d2[29]](b, !0), b += 4, yPos = e[_0x63d2[29]](b, !0), b += 4, size = e[_0x63d2[30]](b, !0), b += 5, flags = e[_0x63d2[26]](b++), 2 & flags && (b += 4 + e[_0x63d2[28]](b, !0)), 4 & flags)
                      for (n = e[_0x63d2[26]](b++); 0 != n; n = e[_0x63d2[26]](b++));
                    for (;;) {
                      var n = e[_0x63d2[27]](b, !0);
                      if (b += 2, 0 == n) break
                    }
                    this[_0x63d2[15]] == playerId && (this[_0x63d2[16]] = xPos[_0x63d2[31]](0), this[_0x63d2[17]] = yPos[_0x63d2[31]](0))
                  }
                  break;
                case 32:
                  this[_0x63d2[15]] = e[_0x63d2[28]](t, !0), t += 4
              }
              this[_0x63d2[33]](jQuery(_0x63d2[32])[_0x63d2[2]]()), d[_0x63d2[34]] ? this[_0x63d2[35]](this[_0x63d2[16]], this[_0x63d2[17]]) : jQuery(_0x63d2[36])[_0x63d2[2]]() == _0x63d2[37] ? this[_0x63d2[35]](localStorage[_0x63d2[38]], localStorage[_0x63d2[39]]) : this[_0x63d2[35]](sa, ta)
            }
          }, bots[i][_0x63d2[40]] = function() {
            bots[_0x63d2[41]](this[_0x63d2[14]], 1)
          }, bots[i][_0x63d2[42]] = function() {
            bots[_0x63d2[41]](this[_0x63d2[14]], 1)
          }, bots[i][_0x63d2[33]] = function(e) {
            if (typeof bots[this[_0x63d2[14]]] == _0x63d2[43]) return !1;
            var t = new DataView(new ArrayBuffer(1 + 2 * e[_0x63d2[1]]));
            t[_0x63d2[19]](0, 0);
            for (var n = 0; n < e[_0x63d2[1]]; ++n) t[_0x63d2[44]](1 + 2 * n, e[_0x63d2[23]](n), !0);
            bots[this[_0x63d2[14]]][_0x63d2[22]](t[_0x63d2[21]])
          }, bots[i][_0x63d2[35]] = function(e, t) {
            return typeof bots[this[_0x63d2[14]]] == _0x63d2[43] ? !1 : (a = new DataView(new ArrayBuffer(13)), a[_0x63d2[19]](0, 16), a[_0x63d2[45]](1, e, !0), a[_0x63d2[45]](5, t, !0), a[_0x63d2[20]](9, 0, !0), void bots[this[_0x63d2[14]]][_0x63d2[22]](a[_0x63d2[21]]))
          }, bots[i][_0x63d2[46]] = function() {
            b = new DataView(new ArrayBuffer(1)), b[_0x63d2[19]](0, 17), bots[this[_0x63d2[14]]][_0x63d2[22]](b[_0x63d2[21]])
          }, bots[i][_0x63d2[47]] = function() {
            b = new DataView(new ArrayBuffer(1)), b[_0x63d2[19]](0, 21), bots[this[_0x63d2[14]]][_0x63d2[22]](b[_0x63d2[21]])
          }
        }, d.sB = function() {
          if (0 != bots.length)
            for (i = 0; i < bots.length; i++) bots[i].split()
        }, d.eMB = function() {
          if (0 != bots.length)
            for (i = 0; i < bots.length; i++) bots[i].ejectMass()
        }, d.stopBots = function() {
          if ("undefined" != typeof bots)
            for (i = 0; i < bots.length; i++) bots[i].close();
          bots = [], jQuery("[data-itr='run_bots']").html(i18n.run_bots || i18n_dict.en.run_bots || "Run bots"), jQuery("[data-itr='run_bots']").attr("onclick", "runBots(jQuery('#serverIP').val(), jQuery('#token').val()); return false;")
        }, d.setRememberOptions = function(e) {
          rememberOptions = e, rememberOptions && rememberAllOptions(), localStorage.rememberOptions = e
        }, d.setCellForSpectating = function() {
          cellToFollow = prompt("What cell do You want to follow?\r\nPress Cancel to disable following the cell."), null != cellToFollow ? (uTF = cellToFollow, gCTF(""), spectate()) : dCFS()
        }, d.setMergeTime = function(e) {
          mT = e
        }, null != d.localStorage && (null == d.localStorage.AB9 && (d.localStorage.AB9 = 0 + ~~(100 * Math.random())), Lb = +d.localStorage.AB9, d.ABGroup = Lb), e.get(gb + "//gc.agar.io", function(e) {
          var t = e.split(" ");
          e = t[0], t = t[1] || "", -1 == ["UA"].indexOf(e) && Nb.push("ussr"), na.hasOwnProperty(e) && ("string" == typeof na[e] ? y || ra(na[e]) : na[e].hasOwnProperty(t) && (y || ra(na[e][t])))
        }, "text");
        var Oa = !0,
          Rb = 0,
          na = {
            AF: "JP-Tokyo",
            AX: "EU-London",
            AL: "EU-London",
            DZ: "EU-London",
            AS: "SG-Singapore",
            AD: "EU-London",
            AO: "EU-London",
            AI: "US-Atlanta",
            AG: "US-Atlanta",
            AR: "BR-Brazil",
            AM: "JP-Tokyo",
            AW: "US-Atlanta",
            AU: "SG-Singapore",
            AT: "EU-London",
            AZ: "JP-Tokyo",
            BS: "US-Atlanta",
            BH: "JP-Tokyo",
            BD: "JP-Tokyo",
            BB: "US-Atlanta",
            BY: "EU-London",
            BE: "EU-London",
            BZ: "US-Atlanta",
            BJ: "EU-London",
            BM: "US-Atlanta",
            BT: "JP-Tokyo",
            BO: "BR-Brazil",
            BQ: "US-Atlanta",
            BA: "EU-London",
            BW: "EU-London",
            BR: "BR-Brazil",
            IO: "JP-Tokyo",
            VG: "US-Atlanta",
            BN: "JP-Tokyo",
            BG: "EU-London",
            BF: "EU-London",
            BI: "EU-London",
            KH: "JP-Tokyo",
            CM: "EU-London",
            CA: "US-Atlanta",
            CV: "EU-London",
            KY: "US-Atlanta",
            CF: "EU-London",
            TD: "EU-London",
            CL: "BR-Brazil",
            CN: "CN-China",
            CX: "JP-Tokyo",
            CC: "JP-Tokyo",
            CO: "BR-Brazil",
            KM: "EU-London",
            CD: "EU-London",
            CG: "EU-London",
            CK: "SG-Singapore",
            CR: "US-Atlanta",
            CI: "EU-London",
            HR: "EU-London",
            CU: "US-Atlanta",
            CW: "US-Atlanta",
            CY: "JP-Tokyo",
            CZ: "EU-London",
            DK: "EU-London",
            DJ: "EU-London",
            DM: "US-Atlanta",
            DO: "US-Atlanta",
            EC: "BR-Brazil",
            EG: "EU-London",
            SV: "US-Atlanta",
            GQ: "EU-London",
            ER: "EU-London",
            EE: "EU-London",
            ET: "EU-London",
            FO: "EU-London",
            FK: "BR-Brazil",
            FJ: "SG-Singapore",
            FI: "EU-London",
            FR: "EU-London",
            GF: "BR-Brazil",
            PF: "SG-Singapore",
            GA: "EU-London",
            GM: "EU-London",
            GE: "JP-Tokyo",
            DE: "EU-London",
            GH: "EU-London",
            GI: "EU-London",
            GR: "EU-London",
            GL: "US-Atlanta",
            GD: "US-Atlanta",
            GP: "US-Atlanta",
            GU: "SG-Singapore",
            GT: "US-Atlanta",
            GG: "EU-London",
            GN: "EU-London",
            GW: "EU-London",
            GY: "BR-Brazil",
            HT: "US-Atlanta",
            VA: "EU-London",
            HN: "US-Atlanta",
            HK: "JP-Tokyo",
            HU: "EU-London",
            IS: "EU-London",
            IN: "JP-Tokyo",
            ID: "JP-Tokyo",
            IR: "JP-Tokyo",
            IQ: "JP-Tokyo",
            IE: "EU-London",
            IM: "EU-London",
            IL: "JP-Tokyo",
            IT: "EU-London",
            JM: "US-Atlanta",
            JP: "JP-Tokyo",
            JE: "EU-London",
            JO: "JP-Tokyo",
            KZ: "JP-Tokyo",
            KE: "EU-London",
            KI: "SG-Singapore",
            KP: "JP-Tokyo",
            KR: "JP-Tokyo",
            KW: "JP-Tokyo",
            KG: "JP-Tokyo",
            LA: "JP-Tokyo",
            LV: "EU-London",
            LB: "JP-Tokyo",
            LS: "EU-London",
            LR: "EU-London",
            LY: "EU-London",
            LI: "EU-London",
            LT: "EU-London",
            LU: "EU-London",
            MO: "JP-Tokyo",
            MK: "EU-London",
            MG: "EU-London",
            MW: "EU-London",
            MY: "JP-Tokyo",
            MV: "JP-Tokyo",
            ML: "EU-London",
            MT: "EU-London",
            MH: "SG-Singapore",
            MQ: "US-Atlanta",
            MR: "EU-London",
            MU: "EU-London",
            YT: "EU-London",
            MX: "US-Atlanta",
            FM: "SG-Singapore",
            MD: "EU-London",
            MC: "EU-London",
            MN: "JP-Tokyo",
            ME: "EU-London",
            MS: "US-Atlanta",
            MA: "EU-London",
            MZ: "EU-London",
            MM: "JP-Tokyo",
            NA: "EU-London",
            NR: "SG-Singapore",
            NP: "JP-Tokyo",
            NL: "EU-London",
            NC: "SG-Singapore",
            NZ: "SG-Singapore",
            NI: "US-Atlanta",
            NE: "EU-London",
            NG: "EU-London",
            NU: "SG-Singapore",
            NF: "SG-Singapore",
            MP: "SG-Singapore",
            NO: "EU-London",
            OM: "JP-Tokyo",
            PK: "JP-Tokyo",
            PW: "SG-Singapore",
            PS: "JP-Tokyo",
            PA: "US-Atlanta",
            PG: "SG-Singapore",
            PY: "BR-Brazil",
            PE: "BR-Brazil",
            PH: "JP-Tokyo",
            PN: "SG-Singapore",
            PL: "EU-London",
            PT: "EU-London",
            PR: "US-Atlanta",
            QA: "JP-Tokyo",
            RE: "EU-London",
            RO: "EU-London",
            RU: "RU-Russia",
            RW: "EU-London",
            BL: "US-Atlanta",
            SH: "EU-London",
            KN: "US-Atlanta",
            LC: "US-Atlanta",
            MF: "US-Atlanta",
            PM: "US-Atlanta",
            VC: "US-Atlanta",
            WS: "SG-Singapore",
            SM: "EU-London",
            ST: "EU-London",
            SA: "EU-London",
            SN: "EU-London",
            RS: "EU-London",
            SC: "EU-London",
            SL: "EU-London",
            SG: "JP-Tokyo",
            SX: "US-Atlanta",
            SK: "EU-London",
            SI: "EU-London",
            SB: "SG-Singapore",
            SO: "EU-London",
            ZA: "EU-London",
            SS: "EU-London",
            ES: "EU-London",
            LK: "JP-Tokyo",
            SD: "EU-London",
            SR: "BR-Brazil",
            SJ: "EU-London",
            SZ: "EU-London",
            SE: "EU-London",
            CH: "EU-London",
            SY: "EU-London",
            TW: "JP-Tokyo",
            TJ: "JP-Tokyo",
            TZ: "EU-London",
            TH: "JP-Tokyo",
            TL: "JP-Tokyo",
            TG: "EU-London",
            TK: "SG-Singapore",
            TO: "SG-Singapore",
            TT: "US-Atlanta",
            TN: "EU-London",
            TR: "TK-Turkey",
            TM: "JP-Tokyo",
            TC: "US-Atlanta",
            TV: "SG-Singapore",
            UG: "EU-London",
            UA: "EU-London",
            AE: "EU-London",
            GB: "EU-London",
            US: "US-Atlanta",
            UM: "SG-Singapore",
            VI: "US-Atlanta",
            UY: "BR-Brazil",
            UZ: "JP-Tokyo",
            VU: "SG-Singapore",
            VE: "BR-Brazil",
            VN: "JP-Tokyo",
            WF: "SG-Singapore",
            EH: "EU-London",
            YE: "JP-Tokyo",
            ZM: "EU-London",
            ZW: "EU-London"
          },
          R = null;
        d.connect = Pa;
        var wa = 500,
          Ab = -1,
          Bb = -1;
        d.refreshPlayerInfo = function() {
          H(253)
        };
        var A = null,
          G = 1,
          Fa = null,
          nb = function() {
            var e = Date.now(),
              t = 1e3 / 60;
            return function() {
              d.requestAnimationFrame(nb);
              var n = Date.now(),
                o = n - e;
              o > t && (e = n - o % t, !aa() || 240 > Date.now() - wb ? Cb() : console.warn("Skipping draw"), ic())
            }
          }(),
          ba = {},
          Nb = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"),
          jc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"),
          ma = {};
        db.prototype = {
            N: null,
            x: 0,
            y: 0,
            d: 0,
            b: 0
          }, $.prototype = {
            id: 0,
            a: null,
            name: null,
            i: null,
            F: null,
            x: 0,
            y: 0,
            size: 0,
            l: 0,
            m: 0,
            k: 0,
            w: 0,
            A: 0,
            h: 0,
            R: 0,
            I: 0,
            T: 0,
            u: !1,
            c: !1,
            g: !1,
            J: !0,
            Q: 0,
            G: null,
            P: function() {
              var e;
              for (e = 0; e < u.length; e++)
                if (u[e] == this) {
                  u.splice(e, 1);
                  break
                }
              delete J[this.id], e = l.indexOf(this), -1 != e && (Wa = !0, l.splice(e, 1)), e = z.indexOf(this.id), -1 != e && z.splice(e, 1), this.u = !0, 0 < this.Q && Y.push(this)
            },
            f: function() {
              return Math.max(~~(.3 * this.size), 24)
            },
            q: function(e) {
              (this.name = e) && (null == this.i ? this.i = new Ga(this.f(), "#FFFFFF", !0, "#000000") : this.i.C(this.f()), this.i.r(this.name))
            },
            O: function() {
              for (var e = this.v(); this.a.length > e;) {
                var t = ~~(Math.random() * this.a.length);
                this.a.splice(t, 1)
              }
              for (0 == this.a.length && e > 0 && this.a.push(new db(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < e;) t = ~~(Math.random() * this.a.length), t = this.a[t], this.a.push(new db(this, t.x, t.y, t.d, t.b))
            },
            v: function() {
              var e = 10;
              20 > this.size && (e = 0), this.c && (e = 30);
              var t = this.size;
              return this.c || (t *= g), t *= G, 32 & this.R && (t *= .25), ~~Math.max(t, e)
            },
            ba: function() {
              this.O();
              for (var e = this.a, t = e.length, n = 0; t > n; ++n) {
                var o = e[(n - 1 + t) % t].b,
                  a = e[(n + 1) % t].b;
                e[n].b += (Math.random() - .5) * (this.g ? 3 : 1), e[n].b *= .7, 10 < e[n].b && (e[n].b = 10), -10 > e[n].b && (e[n].b = -10), e[n].b = (o + a + 8 * e[n].b) / 10
              }
              for (var i = this, r = this.c ? 0 : (this.id / 1e3 + F / 1e4) % (2 * Math.PI), n = 0; t > n; ++n) {
                var s = e[n].d,
                  o = e[(n - 1 + t) % t].d,
                  a = e[(n + 1) % t].d;
                if (15 < this.size && null != da && 20 < this.size * g && 0 < this.id) {
                  var l = !1,
                    d = e[n].x,
                    c = e[n].y;
                  da.ca(d - 5, c - 5, 10, 10, function(e) {
                    e.N != i && 25 > (d - e.x) * (d - e.x) + (c - e.y) * (c - e.y) && (l = !0)
                  }), !l && (e[n].x < za || e[n].y < Aa || e[n].x > Ba || e[n].y > Ca) && (l = !0), l && (0 < e[n].b && (e[n].b = 0), e[n].b -= 1)
                }
                s += e[n].b, 0 > s && (s = 0), s = this.g ? (19 * s + this.size) / 20 : (12 * s + this.size) / 13, e[n].d = (o + a + 8 * s) / 10, o = 2 * Math.PI / t, a = this.a[n].d, this.c && 0 == n % 2 && (a += 5), e[n].x = this.x + Math.cos(o * n + r) * a, e[n].y = this.y + Math.sin(o * n + r) * a
              }
            },
            H: function() {
              if (0 >= this.id) return 1;
              var e;
              e = (F - this.I) / 120, e = 0 > e ? 0 : e > 1 ? 1 : e;
              var t = 0 > e ? 0 : e > 1 ? 1 : e;
              if (this.f(), this.u && t >= 1) {
                var n = Y.indexOf(this); - 1 != n && Y.splice(n, 1)
              }
              return this.x = e * (this.w - this.l) + this.l, this.y = e * (this.A - this.m) + this.m, this.size = t * (this.h - this.k) + this.k, t
            },
            D: function() {
              return 0 >= this.id ? !0 : this.x + this.size + 40 < s - k / 2 / g || this.y + this.size + 40 < t - p / 2 / g || this.x - this.size - 40 > s + k / 2 / g || this.y - this.size - 40 > t + p / 2 / g ? !1 : !0
            },
            p: function(e) {
              if (this.D()) {
                ++this.Q, !sg || !fCE() || uTF != this.name || gCTF() != this.color && "" != gCTF() || this.c || ("" == gCTF() && gCTF(this.color), sa = this.x.toFixed(0), ta = this.y.toFixed(0));
                var t = 0 < this.id && !this.c && !this.g && .4 > g;
                if (5 > this.v() && 0 < this.id && (t = !0), this.J && !t)
                  for (var n = 0; n < this.a.length; n++) this.a[n].d = this.size;
                var o = ["c", "id", "indexOf", "length", "f", "j", "size", "beginPath", "x", "y", "PI", "arc", "lineWidth", "globalAlpha", "strokeStyle", "color", "stroke", "fillStyle", "#000000", "fill", "closePath"];
                if (itsme = !this[o[0]] && playing() && 0 < this[o[1]] && (-1 != l[o[2]](this) || 0 == l[o[3]] && (!this[o[4]] || this[o[5]]) && 20 < this[o[6]]) ? !0 : !1, mass = this[o[6]] * this[o[6]] / 100, mass > 9 && (sMRE() || sVRE() || sORE()) && (e[o[7]](), e[o[11]](this[o[8]], this[o[9]], this[o[6]] + 810, 0, 2 * Math[o[10]], !1), !this[o[0]] && (sMRE() && itsme || !itsme && (playing() && mM / mass < .84 || !playing()) && sORE()) ? (e[o[12]] = 6, e[o[13]] = .5, e[o[14]] = this[o[15]], e[o[16]](), e[o[13]] = 1) : this[o[0]] && sVRE() && (e[o[17]] = o[18], e[o[13]] = .04, e[o[19]](), e[o[13]] = 1), e[o[20]]()), this.J = t, e.save(), this.T = F, n = this.H(), this.u && (e.globalAlpha *= 1 - n), e.lineWidth = 10, e.lineCap = "round", e.lineJoin = this.c ? "miter" : "round", ib ? (e.fillStyle = "#FFFFFF", e.strokeStyle = "#AAAAAA") : (n = dc(this.G) || this.color, hb && ":teams" != P || (n = this.color), e.fillStyle = n, e.strokeStyle = n), t) e.beginPath(), e.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1);
                else {
                  this.ba(), e.beginPath();
                  var a = this.v();
                  for (e.moveTo(this.a[0].x, this.a[0].y), n = 1; a >= n; ++n) {
                    var i = n % a;
                    e.lineTo(this.a[i].x, this.a[i].y)
                  }
                }
                var r = [":teams", "r", "fillStyle", "g", "b", "max", "red", "green", "blue", "size", "#05A34E", "strokeStyle", "c", "globalAlpha", "min", "", "#C70808", "#B2837F", "#05FF4E", "#E8920C"];
                if (getGameMode() == r[0] && (red = hexToRGB(e[r[2]])[r[1]], green = hexToRGB(e[r[2]])[r[3]], blue = hexToRGB(e[r[2]])[r[4]], Math[r[5]](red, green, blue) == red ? team = r[6] : Math[r[5]](red, green, blue) == green ? team = r[7] : team = r[8]), gFE() && !ib && this[r[9]] * this[r[9]] / 100 < 9 && (e[r[2]] = r[10], e[r[11]] = r[10]), vTE() && this[r[12]] && (e[r[13]] = .9), gMM(itsme ? Math[r[14]]((gMM() + this[r[9]] * this[r[9]] / 100) / 2, this[r[9]] * this[r[9]] / 100) : gMM()), itsme && gMRM(this[r[9]] * this[r[9]] / 100), eCsE() && playing() && this[r[9]] * this[r[9]] / 100 > 9 && (itsme && getGameMode() == r[0] && mTm() == r[15] && mTm(Math[r[5]](red, green, blue) == red ? r[6] : Math[r[5]](red, green, blue) == green ? r[7] : r[8]), gMM() > 20 ? mass += 2.992 : !1, itsme || this[r[12]] || getGameMode() === r[0] && (getGameMode() != r[0] || mTm() === team) || (gMM() / mass < .42 ? e[r[11]] = r[16] : .84 > gMM() / mass > .42 ? e[r[11]] = r[17] : mass / gMM() < .42 ? e[r[11]] = r[18] : .84 > mass / gMM() > .42 ? e[r[11]] = r[10] : e[r[11]] = r[19])), e.closePath(), a = this.name.toLowerCase(), !this.g && hb && ":teams" != P ? (n = ec(this.G)) || (-1 != Nb.indexOf(a) ? (ba.hasOwnProperty(a) || (ba[a] = new Image, ba[a].src = d.ASSETS_ROOT + "skins/" + a + ".png"), n = 0 != ba[a].width && ba[a].complete ? ba[a] : null) : n = null) : n = null, i = n, t || e.stroke(), e.fill(), null != i && (e.save(), e.clip(), n = Math.max(this.size, this.h), sTE() ? e.globalAlpha = .75 : !1, e.drawImage(i, this.x - n - 5, this.y - n - 5, 2 * n + 10, 2 * n + 10), e.restore()), (ib || 15 < this.size) && !t && (e.strokeStyle = "#000000", e.globalAlpha *= .1, e.stroke()), e.globalAlpha = 1, n = -1 != l.indexOf(this), t = ~~this.y, 0 != this.id && (Ha || n) && this.name && this.i && (null == i || -1 == jc.indexOf(a))) {
                  i = this.i, i.r(this.name), i.C(this.f() / (lNE() ? .8 : 1)), a = 0 >= this.id ? 1 : Math.ceil(10 * g) / 10, i.S(a);
                  var i = i.B(),
                    s = ~~(i.width / a),
                    c = ~~(i.height / a);
                  e.drawImage(i, ~~this.x - ~~(s / 2), t - ~~(c / 2) - (lNE() && (itsme && Jb || !itsme && sOME()) ? 5 : 0), s, c), t += i.height / 2 / a + 4
                }(sOME() && !itsme && this.size * this.size / 100 > 9 || 0 < this.id && Kb && (n || 0 == l.length && (!this.c || this.g) && 20 < this.size)) && (null == this.F && (this.F = new Ga(this.f() / 2, "#FFFFFF", !0, "#000000")), n = this.F, n.C(this.f() / (lNE() ? 1 : 2)), n.r(~~(this.size * this.size / 100)), a = Math.ceil(10 * g) / 10, n.S(a), i = n.B(), s = ~~(i.width / a), c = ~~(i.height / a), e.drawImage(i, ~~this.x - ~~(s / 2), t - ~~(c / 2), s, c)), e.restore()
              }
            }
          }, Ga.prototype = {
            t: "",
            K: "#000000",
            M: !1,
            o: "#000000",
            n: 16,
            j: null,
            L: null,
            e: !1,
            s: 1,
            C: function(e) {
              this.n != e && (this.n = e, this.e = !0)
            },
            S: function(e) {
              this.s != e && (this.s = e, this.e = !0)
            },
            setStrokeColor: function(e) {
              this.o != e && (this.o = e, this.e = !0)
            },
            r: function(e) {
              e != this.t && (this.t = e, this.e = !0)
            },
            B: function() {
              if (null == this.j && (this.j = document.createElement("canvas"), this.L = this.j.getContext("2d")), this.e) {
                this.e = !1;
                var e = this.j,
                  t = this.L,
                  n = this.t,
                  o = this.s,
                  a = this.n,
                  i = a + "px Ubuntu";
                t.font = i;
                var r = ~~(.2 * a);
                e.width = (t.measureText(n).width + 6) * o, e.height = (a + r) * o, t.font = i, t.scale(o, o), t.globalAlpha = 1, t.lineWidth = 3, t.strokeStyle = this.o, t.fillStyle = this.K, this.M && t.strokeText(n, 3, a - r / 2), t.fillText(n, 3, a - r / 2)
              }
              return this.j
            }
          }, Date.now || (Date.now = function() {
            return (new Date).getTime()
          }),
          function() {
            for (var e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !d.requestAnimationFrame; ++t) d.requestAnimationFrame = d[e[t] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[e[t] + "CancelAnimationFrame"] || d[e[t] + "CancelRequestAnimationFrame"];
            d.requestAnimationFrame || (d.requestAnimationFrame = function(e) {
              return setTimeout(e, 1e3 / 60)
            }, d.cancelAnimationFrame = function(e) {
              clearTimeout(e)
            })
          }();
        var Qb = {
            V: function(e) {
              function t(e) {
                return o > e && (e = o), e > i && (e = i), ~~((e - o) / 32)
              }

              function n(e) {
                return a > e && (e = a), e > r && (e = r), ~~((e - a) / 32)
              }
              var o = e.Z,
                a = e.$,
                i = e.X,
                r = e.Y,
                s = ~~((i - o) / 32) + 1,
                l = ~~((r - a) / 32) + 1,
                d = Array(s * l);
              return {
                W: function(e) {
                  var o = t(e.x) + n(e.y) * s;
                  null == d[o] ? d[o] = e : Array.isArray(d[o]) ? d[o].push(e) : d[o] = [d[o], e]
                },
                ca: function(e, o, a, i, r) {
                  var l = t(e),
                    c = n(o);
                  for (e = t(e + a), o = n(o + i); o >= c; ++c)
                    for (i = l; e >= i; ++i)
                      if (a = d[i + c * s], null != a)
                        if (Array.isArray(a))
                          for (var h = 0; h < a.length; h++) r(a[h]);
                        else r(a)
                }
              }
            }
          },
          yb = function() {
            var e = new $(0, 0, 0, 32, "#ED1C24", ""),
              t = document.createElement("canvas");
            t.width = 32, t.height = 32;
            var n = t.getContext("2d");
            return function() {
              0 < l.length && (e.color = l[0].color, e.q(l[0].name)), n.clearRect(0, 0, 32, 32), n.save(), n.translate(16, 16), n.scale(.4, .4), e.p(n), n.restore();
              var o = document.getElementById("favicon"),
                a = o.cloneNode(!0);
              a.setAttribute("href", t.toDataURL("image/png")), o.parentNode.replaceChild(a, o)
            }
          }();
        e(function() {
          yb()
        });
        var W = "loginCache3",
          Ib = 0;
        d.checkSocialAPIToken = function(t) {
          e.ajax(ea + "checkToken", {
            error: function() {
              C = null, eb(t)
            },
            success: function(e) {
              e = e.split("\n"), Z({
                level: +e[0],
                xp: +e[1],
                xpNeeded: +e[2]
              })
            },
            dataType: "text",
            method: "POST",
            cache: !1,
            crossDomain: !0,
            data: C
          })
        }, d.getSocialAPIToken = function() {
          e.ajax(ea + "facebookLogin", {
            error: function() {
              C = null, e("#helloContainer").attr("data-logged-in", "0")
            },
            success: gc,
            dataType: "text",
            method: "POST",
            cache: !1,
            crossDomain: !0,
            data: d.localStorage.fbTokenCache
          })
        }, d.facebookLogin = function() {
          d.localStorage.wannaLogin = 1
        }, d.checkLoginStatus = function() {
          if (d.gameServerLogin(), +d.localStorage.wannaLogin) {
            var e = d.localStorage.fbTokenCache;
            e && (delete d.localStorage.wannaLogin, d.MC.doLoginWithFB(e, !0))
          }
        }, d.fbAsyncInit = function() {
          function e() {
            d.localStorage.wannaLogin = 1, null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : d.FB.login(function(e) {
              eb(e)
            }, {
              scope: "public_profile, email"
            })
          }
          d.FB.init({
            appId: Q.fb_app_id,
            cookie: !0,
            xfbml: !0,
            status: !0,
            version: "v2.2"
          }), d.FB.Event.subscribe("auth.statusChange", function(t) {
            console.log("window.localStorage['wannaLogin'] = " + d.localStorage.wannaLogin), +d.localStorage.wannaLogin && ("connected" == t.status ? eb(t) : (console.log("user not connected, facebookLogin()"), e()))
          }), d.facebookRelogin = e, d.facebookLogin = e
        }, d.logout = function() {
          C = null, e("#helloContainer").attr("data-logged-in", "0"), e("#helloContainer").attr("data-has-account-data", "0"), delete d.localStorage.wannaLogin, delete d.localStorage[W], delete d.localStorage.fbPictureCache, delete d.localStorage.fbTokenCache, N(), d.MC.doLogout()
        }, d.gameServerLogin = function() {
          if (+d.localStorage.wannaLogin) {
            var t = d.localStorage[W];
            t && Hb(t), d.localStorage.fbPictureCache && e(".agario-profile-picture").attr("src", d.localStorage.fbPictureCache)
          }
        }, e(function() {
          d.localStorage[W] && (d.facebookLogin(), d.gameServerLogin())
        });
        var ic = function() {
          function t(e, t, n, o, a) {
            var i = t.getContext("2d"),
              r = t.width;
            t = t.height, e.color = a, e.q(n), e.size = o, i.save(), i.translate(r / 2, t / 2), e.p(i), i.restore()
          }
          for (var n = new $(-1, 0, 0, 32, "#5bc0de", ""), o = new $(-1, 0, 0, 32, "#5bc0de", ""), a = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), i = [], r = 0; r < a.length; ++r) {
            var s = r / a.length * 12,
              l = 30 * Math.sqrt(r / a.length);
            i.push(new $(-1, Math.cos(s) * l, Math.sin(s) * l, 10, a[r], ""))
          }
          fc(i);
          var d = document.createElement("canvas");
          return d.getContext("2d"), d.width = d.height = 70, t(o, d, "", 26, "#ebc0de"),
            function() {
              e(".cell-spinner").filter(":visible").each(function() {
                var o = e(this),
                  a = Date.now(),
                  i = this.width,
                  r = this.height,
                  s = this.getContext("2d");
                s.clearRect(0, 0, i, r), s.save(), s.translate(i / 2, r / 2);
                for (var l = 0; 10 > l; ++l) s.drawImage(d, (.1 * a + 80 * l) % (i + 140) - i / 2 - 70 - 35, r / 2 * Math.sin((.001 * a + l) % Math.PI * 2) - 35, 70, 70);
                s.restore(), (o = o.attr("data-itr")) && (o = ha(o)), t(n, this, o || "", +e(this).attr("data-size"), "#5bc0de")
              }), e("#statsPellets").filter(":visible").each(function() {
                e(this);
                var n = this.width,
                  o = this.height;
                for (this.getContext("2d").clearRect(0, 0, n, o), n = 0; n < i.length; n++) t(i[n], this, "", i[n].size, i[n].color)
              })
            }
        }();
        d.createParty = function() {
          ga(":party"), R = function(t) {
            fb("/#" + d.encodeURIComponent(t)), e(".partyToken").val("agar.io/#" + d.encodeURIComponent(t)), e("#helloContainer").attr("data-party-state", "1")
          }, N()
        }, d.joinParty = pb, d.cancelParty = function() {
          fb("/"), e("#helloContainer").attr("data-party-state", "0"), ga(""), N()
        };
        var x = [],
          Xa = 0,
          Ya = "#000000",
          X = !1,
          va = !1,
          Za = 0,
          ab = 0,
          $a = 0,
          Da = 0,
          V = 0,
          zb = !0;
        setInterval(function() {
          va && x.push(Eb() / 100)
        }, 1e3 / 60), setInterval(function() {
          var e = hc();
          0 != e && (++$a, 0 == V && (V = e), V = Math.min(V, e))
        }, 1e3), d.closeStats = function() {
          X = !1, e("#stats").hide(), rb(d.ab), qa(0)
        }, d.setSkipStats = function(e) {
          zb = !e
        }, e(function() {
          e(Ob)
        }), _0x8894 = ["rememberOptions", "You need to enable localStorage or download a new browser to remember options.", "log", "true", "checked", "input", "parent", "[data-itr='option_remember_options']", "r_options", "undefined", "option_merge_time", "parse", "option_green_food", "mouse", "", "each", "stringify", "botsFollow", "cell", "boolean", "[data-itr='", "']", "onchange", "attr", "option_no_names", "option_no_skins", "!", "(", "indexOf", "substr", ");", "d.", "nick", "val", "#nick", "botsNick", "#botsNick", "removeAttr", "[name='botsFollow']:first", "[name='botsFollow']:nth(1)", "GET", "json", "ajax"], jQuery(function() {
          rememberOptions = localStorage[_0x8894[0]], localStorage ? rememberOptions == _0x8894[3] && (jQuery(_0x8894[5], jQuery(_0x8894[7])[_0x8894[6]]())[0][_0x8894[4]] = !0, typeof localStorage[_0x8894[8]] != _0x8894[9] && isJSON(localStorage[_0x8894[8]]) && typeof JSON[_0x8894[11]](localStorage[_0x8894[8]])[_0x8894[10]] != _0x8894[9] && typeof JSON[_0x8894[11]](localStorage[_0x8894[8]])[_0x8894[12]] != _0x8894[9] || (default_r_options = {
            option_no_skins: !1,
            option_no_names: !1,
            option_no_colors: !1,
            option_show_mass: !1,
            option_dark_theme: !1,
            option_skip_stats: !1,
            option_show_borders: !1,
            option_extra_zoom: !1,
            option_green_food: !1,
            option_show_others_mass: !1,
            option_extended_colors: !1,
            option_75_skin_transparency: !1,
            option_virus_transparency: !1,
            option_large_names: !1,
            option_no_grid: !1,
            option_show_my_range: !1,
            option_show_opponents_range: !1,
            option_show_virus_range: !1,
            option_merge_time: !1,
            botsFollow: _0x8894[13],
            nick: _0x8894[14],
            botsNick: _0x8894[14]
          }, typeof localStorage[_0x8894[8]] != _0x8894[9] ? (r_options_NEW = JSON[_0x8894[11]](localStorage[_0x8894[8]]), jQuery[_0x8894[15]](default_r_options, function(e, t) {
            typeof r_options_NEW[e] == _0x8894[9] && (r_options_NEW[e] = default_r_options[e])
          }), localStorage[_0x8894[8]] = JSON[_0x8894[16]](r_options_NEW)) : localStorage[_0x8894[8]] = JSON[_0x8894[16]](default_r_options)), r_options = JSON[_0x8894[11]](localStorage[_0x8894[8]]), jQuery[_0x8894[15]](r_options, function(_0xe86dx1, _0xe86dx2) {
            void 0 == _0xe86dx2 && _0xe86dx1 == _0x8894[17] ? _0xe86dx2 == _0x8894[18] : void 0 == _0xe86dx2 && (_0xe86dx2 = !1), typeof _0xe86dx2 == _0x8894[19] ? (typeof jQuery(_0x8894[5], jQuery(_0x8894[20] + _0xe86dx1 + _0x8894[21])[_0x8894[6]]())[0] != _0x8894[9] && (jQuery(_0x8894[5], jQuery(_0x8894[20] + _0xe86dx1 + _0x8894[21])[_0x8894[6]]())[0][_0x8894[4]] = _0xe86dx2), 1 == _0xe86dx2 && (fnc = jQuery(_0x8894[5], jQuery(_0x8894[20] + _0xe86dx1 + _0x8894[21])[_0x8894[6]]())[_0x8894[23]](_0x8894[22]), typeof fnc != _0x8894[9] && (fnf = _0xe86dx1 == _0x8894[24] || _0xe86dx1 == _0x8894[25] ? _0x8894[26] : _0x8894[14], fnc = fnc[_0x8894[29]](0, fnc[_0x8894[28]](_0x8894[27])) + _0x8894[27] + fnf + _0xe86dx2 + _0x8894[30], eval(_0x8894[31] + fnc)))) : _0xe86dx1 == _0x8894[32] ? jQuery(_0x8894[34])[_0x8894[33]](r_options[_0x8894[32]]) : _0xe86dx1 == _0x8894[35] ? jQuery(_0x8894[36])[_0x8894[33]](r_options[_0x8894[35]]) : _0xe86dx1 == _0x8894[17] && (r_options[_0x8894[17]] == _0x8894[13] ? (jQuery(_0x8894[38])[_0x8894[37]](_0x8894[4]), jQuery(_0x8894[39])[_0x8894[23]](_0x8894[4], _0x8894[14])) : (jQuery(_0x8894[39])[_0x8894[37]](_0x8894[4]), jQuery(_0x8894[38])[_0x8894[23]](_0x8894[4], _0x8894[14])))
          })) : console[_0x8894[2]](_0x8894[1])
        }), jQuery(function() {
          setTimeout(function() {
            ({
              type: _0x8894[40],
              url: _0x8894[41],
              success: function(e) {
                _0x8894[42] != e[_0x8894[43]] && _0x8894[3] == e[_0x8894[44]] ? jQuery(_0x8894[53])[_0x8894[52]](_0x8894[45] + e[_0x8894[43]] + _0x8894[46] + e[_0x8894[50]][_0x8894[49]](_0x8894[47], _0x8894[48]) + _0x8894[51]) : _0x8894[42] != e[_0x8894[43]] ? alert(_0x8894[54] + e[_0x8894[43]] + _0x8894[55] + e[_0x8894[50]]) : (window[_0x8894[61]][_0x8894[60]](_0x8894[59])[_0x8894[58]](function() {
                  jQuery(_0x8894[53])[_0x8894[56]]() && window[_0x8894[57]]()
                }), (_0x8894[14] == window[_0x8894[63]][_0x8894[62]] || _0x8894[64] == window[_0x8894[63]][_0x8894[62]]) && jQuery(_0x8894[53])[_0x8894[56]]() && window[_0x8894[57]]())
              },
              error: function() {
                console[_0x8894[2]](_0x8894[65]), window[_0x8894[61]][_0x8894[60]](_0x8894[59])[_0x8894[58]](function() {
                  jQuery(_0x8894[53])[_0x8894[56]]() && window[_0x8894[57]]()
                }), (_0x8894[14] == window[_0x8894[63]][_0x8894[62]] || _0x8894[64] == window[_0x8894[63]][_0x8894[62]]) && jQuery(_0x8894[53])[_0x8894[56]]() && window[_0x8894[57]]()
              },
              dataType: _0x8894[66]
            })
          }, 1e3)
        })
      }
    }
  }
}(window, window.jQuery);

function doOnLoad() {
  setDarkTheme();
  setShowMass();
  setSkipStats();
}
window.onload = doOnLoad;

