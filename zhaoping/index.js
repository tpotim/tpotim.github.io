var Zepto = function() {
    function A(t) {
        return null == t ? String(t) : j[S.call(t)] || "object"
    }
    function L(t) {
        return "function" == A(t)
    }
    function R(t) {
        return null != t && t == t.window
    }
    function Z(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function $(t) {
        return "object" == A(t)
    }
    function k(t) {
        return $(t) && !R(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function F(t) {
        return "number" == typeof t.length
    }
    function z(t) {
        return s.call(t, function(t) {
            return null != t
        })
    }
    function q(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }
    function H(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function I(t) {
        return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function U(t, e) {
        return "number" != typeof e || l[H(t)] ? e : e + "px"
    }
    function _(t) {
        var e, n;
        return f[t] || (e = u.createElement(t), u.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t]
    }
    function X(t) {
        return "children" in t ? a.call(t.children) : n.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }
    function B(t, e) {
        var n, i = t ? t.length : 0;
        for (n = 0; i > n; n++)
            this[n] = t[n];
        this.length = i, this.selector = e || ""
    }
    function V(n, i, r) {
        for (e in i)
            r && (k(i[e]) || D(i[e])) ? (k(i[e]) && !k(n[e]) && (n[e] = {}), D(i[e]) && !D(n[e]) && (n[e] = []), V(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }
    function Y(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }
    function J(t, e, n, i) {
        return L(e) ? e.call(t, n, i) : e
    }
    function G(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function W(e, n) {
        var i = e.className || "", r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n)
    }
    function K(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }
    function Q(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)
            Q(t.childNodes[n], e)
    }
    var t, e, n, i, N, P, r = [], o = r.concat, s = r.filter, a = r.slice, u = window.document, f = {}, c = {}, l = {"column-count": 1,columns: 1,"font-weight": 1,"line-height": 1,opacity: 1,"z-index": 1,zoom: 1}, h = /^\s*<(\w+|!)[^>]*>/, p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, m = /^(?:body|html)$/i, g = /([A-Z])/g, v = ["val", "css", "html", "text", "data", "width", "height", "offset"], y = ["after", "prepend", "before", "append"], w = u.createElement("table"), x = u.createElement("tr"), b = {tr: u.createElement("tbody"),tbody: w,thead: w,tfoot: w,td: x,th: x,"*": u.createElement("div")}, E = /complete|loaded|interactive/, T = /^[\w-]*$/, j = {}, S = j.toString, C = {}, O = u.createElement("div"), M = {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"}, D = Array.isArray || function(t) {
        return t instanceof Array
    };
    return C.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType)
            return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)
            return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = O).appendChild(t), i = ~C.qsa(r, e).indexOf(t), o && O.removeChild(t), i
    }, N = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, P = function(t) {
        return s.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }, C.fragment = function(e, i, r) {
        var o, s, f;
        return p.test(e) && (o = n(u.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(d, "<$1></$2>")), i === t && (i = h.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, o = n.each(a.call(f.childNodes), function() {
            f.removeChild(this)
        })), k(r) && (s = n(o), n.each(r, function(t, e) {
            v.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
        })), o
    }, C.Z = function(t, e) {
        return new B(t, e)
    }, C.isZ = function(t) {
        return t instanceof C.Z
    }, C.init = function(e, i) {
        var r;
        if (!e)
            return C.Z();
        if ("string" == typeof e)
            if (e = e.trim(), "<" == e[0] && h.test(e))
                r = C.fragment(e, RegExp.$1, i), e = null;
            else {
                if (i !== t)
                    return n(i).find(e);
                r = C.qsa(u, e)
            }
        else {
            if (L(e))
                return n(u).ready(e);
            if (C.isZ(e))
                return e;
            if (D(e))
                r = z(e);
            else if ($(e))
                r = [e], e = null;
            else if (h.test(e))
                r = C.fragment(e.trim(), RegExp.$1, i), e = null;
            else {
                if (i !== t)
                    return n(i).find(e);
                r = C.qsa(u, e)
            }
        }
        return C.Z(r, e)
    }, n = function(t, e) {
        return C.init(t, e)
    }, n.extend = function(t) {
        var e, n = a.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
            V(t, n, e)
        }), t
    }, C.qsa = function(t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, s = T.test(o);
        return t.getElementById && s && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : a.call(s && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, n.contains = u.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    } : function(t, e) {
        for (; e && (e = e.parentNode); )
            if (e === t)
                return !0;
        return !1
    }, n.type = A, n.isFunction = L, n.isWindow = R, n.isArray = D, n.isPlainObject = k, n.isEmptyObject = function(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }, n.inArray = function(t, e, n) {
        return r.indexOf.call(e, t, n)
    }, n.camelCase = N, n.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function() {
    }, n.map = function(t, e) {
        var n, r, o, i = [];
        if (F(t))
            for (r = 0; r < t.length; r++)
                n = e(t[r], r), null != n && i.push(n);
        else
            for (o in t)
                n = e(t[o], o), null != n && i.push(n);
        return q(i)
    }, n.each = function(t, e) {
        var n, i;
        if (F(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1)
                    return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1)
                    return t;
        return t
    }, n.grep = function(t, e) {
        return s.call(t, e)
    }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        j["[object " + e + "]"] = e.toLowerCase()
    }), n.fn = {constructor: C.Z,length: 0,forEach: r.forEach,reduce: r.reduce,push: r.push,sort: r.sort,splice: r.splice,indexOf: r.indexOf,concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++)
                e = arguments[t], n[t] = C.isZ(e) ? e.toArray() : e;
            return o.apply(C.isZ(this) ? this.toArray() : this, n)
        },map: function(t) {
            return n(n.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },slice: function() {
            return n(a.apply(this, arguments))
        },ready: function(t) {
            return E.test(u.readyState) && u.body ? t(n) : u.addEventListener("DOMContentLoaded", function() {
                t(n)
            }, !1), this
        },get: function(e) {
            return e === t ? a.call(this) : this[e >= 0 ? e : e + this.length]
        },toArray: function() {
            return this.get()
        },size: function() {
            return this.length
        },remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },each: function(t) {
            return r.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },filter: function(t) {
            return L(t) ? this.not(this.not(t)) : n(s.call(this, function(e) {
                return C.matches(e, t)
            }))
        },add: function(t, e) {
            return n(P(this.concat(n(t, e))))
        },is: function(t) {
            return this.length > 0 && C.matches(this[0], t)
        },not: function(e) {
            var i = [];
            if (L(e) && e.call !== t)
                this.each(function(t) {
                    e.call(this, t) || i.push(this)
                });
            else {
                var r = "string" == typeof e ? this.filter(e) : F(e) && L(e.item) ? a.call(e) : n(e);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },has: function(t) {
            return this.filter(function() {
                return $(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },first: function() {
            var t = this[0];
            return t && !$(t) ? t : n(t)
        },last: function() {
            var t = this[this.length - 1];
            return t && !$(t) ? t : n(t)
        },find: function(t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? n(t).filter(function() {
                var t = this;
                return r.some.call(i, function(e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(C.qsa(this[0], t)) : this.map(function() {
                return C.qsa(this, t)
            }) : n()
        },closest: function(t, e) {
            var i = this[0], r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : C.matches(i, t)); )
                i = i !== e && !Z(i) && i.parentNode;
            return n(i)
        },parents: function(t) {
            for (var e = [], i = this; i.length > 0; )
                i = n.map(i, function(t) {
                    return (t = t.parentNode) && !Z(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
            return Y(e, t)
        },parent: function(t) {
            return Y(P(this.pluck("parentNode")), t)
        },children: function(t) {
            return Y(this.map(function() {
                return X(this)
            }), t)
        },contents: function() {
            return this.map(function() {
                return this.contentDocument || a.call(this.childNodes)
            })
        },siblings: function(t) {
            return Y(this.map(function(t, e) {
                return s.call(X(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },pluck: function(t) {
            return n.map(this, function(e) {
                return e[t]
            })
        },show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = _(this.nodeName))
            })
        },replaceWith: function(t) {
            return this.before(t).remove()
        },wrap: function(t) {
            var e = L(t);
            if (this[0] && !e)
                var i = n(t).get(0), r = i.parentNode || this.length > 1;
            return this.each(function(o) {
                n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
            })
        },wrapAll: function(t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e; (e = t.children()).length; )
                    t = e.first();
                n(t).append(this)
            }
            return this
        },wrapInner: function(t) {
            var e = L(t);
            return this.each(function(i) {
                var r = n(this), o = r.contents(), s = e ? t.call(this, i) : t;
                o.length ? o.wrapAll(s) : r.append(s)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }), this
        },clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },hide: function() {
            return this.css("display", "none")
        },toggle: function(e) {
            return this.each(function() {
                var i = n(this);
                (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
            })
        },prev: function(t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },next: function(t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var i = this.innerHTML;
                n(this).empty().append(J(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML : null
        },text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = J(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },attr: function(n, i) {
            var r;
            return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType)
                    if ($(n))
                        for (e in n)
                            G(this, e, n[e]);
                    else
                        G(this, n, J(this, i, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
        },removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    G(this, t)
                }, this)
            })
        },prop: function(t, e) {
            return t = M[t] || t, 1 in arguments ? this.each(function(n) {
                this[t] = J(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },data: function(e, n) {
            var i = "data-" + e.replace(g, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(i, n) : this.attr(i);
            return null !== r ? K(r) : t
        },val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = J(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },offset: function(t) {
            if (t)
                return this.each(function(e) {
                    var i = n(this), r = J(this, t, e, i.offset()), o = i.offsetParent().offset(), s = {top: r.top - o.top,left: r.left - o.left};
                    "static" == i.css("position") && (s.position = "relative"), i.css(s)
                });
            if (!this.length)
                return null;
            if (!n.contains(u.documentElement, this[0]))
                return {top: 0,left: 0};
            var e = this[0].getBoundingClientRect();
            return {left: e.left + window.pageXOffset,top: e.top + window.pageYOffset,width: Math.round(e.width),height: Math.round(e.height)}
        },css: function(t, i) {
            if (arguments.length < 2) {
                var r, o = this[0];
                if (!o)
                    return;
                if (r = getComputedStyle(o, ""), "string" == typeof t)
                    return o.style[N(t)] || r.getPropertyValue(t);
                if (D(t)) {
                    var s = {};
                    return n.each(t, function(t, e) {
                        s[e] = o.style[N(e)] || r.getPropertyValue(e)
                    }), s
                }
            }
            var a = "";
            if ("string" == A(t))
                i || 0 === i ? a = H(t) + ":" + U(t, i) : this.each(function() {
                    this.style.removeProperty(H(t))
                });
            else
                for (e in t)
                    t[e] || 0 === t[e] ? a += H(e) + ":" + U(e, t[e]) + ";" : this.each(function() {
                        this.style.removeProperty(H(e))
                    });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },index: function(t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },hasClass: function(t) {
            return t ? r.some.call(this, function(t) {
                return this.test(W(t))
            }, I(t)) : !1
        },addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    i = [];
                    var r = W(this), o = J(this, t, e, r);
                    o.split(/\s+/g).forEach(function(t) {
                        n(this).hasClass(t) || i.push(t)
                    }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
                }
            }) : this
        },removeClass: function(e) {
            return this.each(function(n) {
                if ("className" in this) {
                    if (e === t)
                        return W(this, "");
                    i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function(t) {
                        i = i.replace(I(t), " ")
                    }), W(this, i.trim())
                }
            })
        },toggleClass: function(e, i) {
            return e ? this.each(function(r) {
                var o = n(this), s = J(this, e, r, W(this));
                s.split(/\s+/g).forEach(function(e) {
                    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                })
            }) : this
        },scrollTop: function(e) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                    this.scrollTop = e
                } : function() {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },scrollLeft: function(e) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                    this.scrollLeft = e
                } : function() {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },position: function() {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), i = this.offset(), r = m.test(e[0].nodeName) ? {top: 0,left: 0} : e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {top: i.top - r.top,left: i.left - r.left}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || u.body; t && !m.test(t.nodeName) && "static" == n(t).css("position"); )
                    t = t.offsetParent;
                return t
            })
        }}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
        var i = e.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function(r) {
            var o, s = this[0];
            return r === t ? R(s) ? s["inner" + i] : Z(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
                s = n(this), s.css(e, J(this, r, t, s[e]()))
            })
        }
    }), y.forEach(function(t, e) {
        var i = e % 2;
        n.fn[t] = function() {
            var t, o, r = n.map(arguments, function(e) {
                return t = A(e), "object" == t || "array" == t || null == e ? e : C.fragment(e)
            }), s = this.length > 1;
            return r.length < 1 ? this : this.each(function(t, a) {
                o = i ? a : a.parentNode, a = 0 == e ? a.nextSibling : 1 == e ? a.firstChild : 2 == e ? a : null;
                var f = n.contains(u.documentElement, o);
                r.forEach(function(t) {
                    if (s)
                        t = t.cloneNode(!0);
                    else if (!o)
                        return n(t).remove();
                    o.insertBefore(t, a), f && Q(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
            return n(e)[t](this), this
        }
    }), C.Z.prototype = B.prototype = n.fn, C.uniq = P, C.deserializeValue = K, n.zepto = C, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
    function l(t) {
        return t._zid || (t._zid = e++)
    }
    function h(t, e, n, i) {
        if (e = p(e), e.ns)
            var r = d(e.ns);
        return (s[l(t)] || []).filter(function(t) {
            return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
        })
    }
    function p(t) {
        var e = ("" + t).split(".");
        return {e: e[0],ns: e.slice(1).sort().join(" ")}
    }
    function d(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function m(t, e) {
        return t.del && !u && t.e in f || !!e
    }
    function g(t) {
        return c[t] || u && f[t] || t
    }
    function v(e, i, r, o, a, u, f) {
        var h = l(e), d = s[h] || (s[h] = []);
        i.split(/\s/).forEach(function(i) {
            if ("ready" == i)
                return t(document).ready(r);
            var s = p(i);
            s.fn = r, s.sel = a, s.e in c && (r = function(e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
            }), s.del = u;
            var l = u || r;
            s.proxy = function(t) {
                if (t = T(t), !t.isImmediatePropagationStopped()) {
                    t.data = o;
                    var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                    return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                }
            }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
        })
    }
    function y(t, e, n, i, r) {
        var o = l(t);
        (e || "").split(/\s/).forEach(function(e) {
            h(t, e, n, i).forEach(function(e) {
                delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
            })
        })
    }
    function T(e, i) {
        return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
            var r = i[t];
            e[t] = function() {
                return this[n] = w, r && r.apply(i, arguments)
            }, e[n] = x
        }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w)), e
    }
    function j(t) {
        var e, i = {originalEvent: t};
        for (e in t)
            b.test(e) || t[e] === n || (i[e] = t[e]);
        return T(i, t)
    }
    var n, e = 1, i = Array.prototype.slice, r = t.isFunction, o = function(t) {
        return "string" == typeof t
    }, s = {}, a = {}, u = "onfocusin" in window, f = {focus: "focusin",blur: "focusout"}, c = {mouseenter: "mouseover",mouseleave: "mouseout"};
    a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {add: v,remove: y}, t.proxy = function(e, n) {
        var s = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
            var a = function() {
                return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
            };
            return a._zid = l(e), a
        }
        if (o(n))
            return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
        throw new TypeError("expected function")
    }, t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    }, t.fn.unbind = function(t, e) {
        return this.off(t, e)
    }, t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    };
    var w = function() {
        return !0
    }, x = function() {
        return !1
    }, b = /^([A-Z]|returnValue$|layer[XY]$)/, E = {preventDefault: "isDefaultPrevented",stopImmediatePropagation: "isImmediatePropagationStopped",stopPropagation: "isPropagationStopped"};
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    }, t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    }, t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function(e, s, a, u, f) {
        var c, l, h = this;
        return e && !o(e) ? (t.each(e, function(t, e) {
            h.on(t, s, a, e, f)
        }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (u === n || a === !1) && (u = a, a = n), u === !1 && (u = x), h.each(function(n, r) {
            f && (c = function(t) {
                return y(r, t.type, u), u.apply(this, arguments)
            }), s && (l = function(e) {
                var n, o = t(e.target).closest(s, r).get(0);
                return o && o !== r ? (n = t.extend(j(e), {currentTarget: o,liveFired: r}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
            }), v(r, e, u, a, s, l || c)
        }))
    }, t.fn.off = function(e, i, s) {
        var a = this;
        return e && !o(e) ? (t.each(e, function(t, e) {
            a.off(t, i, e)
        }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = x), a.each(function() {
            y(this, e, s, i)
        }))
    }, t.fn.trigger = function(e, n) {
        return e = o(e) || t.isPlainObject(e) ? t.Event(e) : T(e), e._args = n, this.each(function() {
            e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function(e, n) {
        var i, r;
        return this.each(function(s, a) {
            i = j(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function(t, e) {
                return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), r
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }), t.Event = function(t, e) {
        o(t) || (e = t, t = e.type);
        var n = document.createEvent(a[t] || "Events"), i = !0;
        if (e)
            for (var r in e)
                "bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0), T(n)
    }
}(Zepto), function(t) {
    function h(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i), !r.isDefaultPrevented()
    }
    function p(t, e, i, r) {
        return t.global ? h(e || n, i, r) : void 0
    }
    function d(e) {
        e.global && 0 === t.active++ && p(e, null, "ajaxStart")
    }
    function m(e) {
        e.global && !--t.active && p(e, null, "ajaxStop")
    }
    function g(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
    }
    function v(t, e, n, i) {
        var r = n.context, o = "success";
        n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), w(o, e, n)
    }
    function y(t, e, n, i, r) {
        var o = i.context;
        i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), w(e, n, i)
    }
    function w(t, e, n) {
        var i = n.context;
        n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
    }
    function x() {
    }
    function b(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
    }
    function E(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function T(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
    }
    function j(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {url: e,data: n,success: i,dataType: r}
    }
    function C(e, n, i, r) {
        var o, s = t.isArray(n), a = t.isPlainObject(n);
        t.each(n, function(n, u) {
            o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u)
        })
    }
    var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/, l = n.createElement("a");
    l.href = window.location.href, t.active = 0, t.ajaxJSONP = function(i, r) {
        if (!("type" in i))
            return t.ajax(i);
        var f, h, o = i.jsonpCallback, s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e, a = n.createElement("script"), u = window[s], c = function(e) {
            t(a).triggerHandler("error", e || "abort")
        }, l = {abort: c};
        return r && r.promise(l), t(a).on("load error", function(e, n) {
            clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
        }), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
            f = arguments
        }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
            c("timeout")
        }, i.timeout)), l)
    }, t.ajaxSettings = {type: "GET",beforeSend: x,success: x,error: x,complete: x,context: null,global: !0,xhr: function() {
            return new window.XMLHttpRequest
        },accepts: {script: "text/javascript, application/javascript, application/x-javascript",json: u,xml: "application/xml, text/xml",html: f,text: "text/plain"},crossDomain: !1,timeout: 0,processData: !0,cache: !0}, t.ajax = function(e) {
        var a, u, o = t.extend({}, e || {}), s = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings)
            void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
        d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), (u = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, u)), T(o);
        var f = o.dataType, h = /\?.+=\?/.test(o.url);
        if (h && (f = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == f)
            return h || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);
        var N, p = o.accepts[f], m = {}, w = function(t, e) {
            m[t.toLowerCase()] = [t, e]
        }, j = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol, S = o.xhr(), C = S.setRequestHeader;
        if (s && s.promise(S), o.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", p || "*/*"), (p = o.mimeType || p) && (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(p)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && w("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers)
            for (r in o.headers)
                w(r, o.headers[r]);
        if (S.setRequestHeader = w, S.onreadystatechange = function() {
            if (4 == S.readyState) {
                S.onreadystatechange = x, clearTimeout(N);
                var e, n = !1;
                if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == j) {
                    f = f || b(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
                    try {
                        "script" == f ? (1, eval)(e) : "xml" == f ? e = S.responseXML : "json" == f && (e = c.test(e) ? null : t.parseJSON(e))
                    } catch (i) {
                        n = i
                    }
                    n ? y(n, "parsererror", S, o, s) : v(e, S, o, s)
                } else
                    y(S.statusText || null, S.status ? "error" : "abort", S, o, s)
            }
        }, g(S, o) === !1)
            return S.abort(), y(null, "abort", S, o, s), S;
        if (o.xhrFields)
            for (r in o.xhrFields)
                S[r] = o.xhrFields[r];
        var P = "async" in o ? o.async : !0;
        S.open(o.type, o.url, P, o.username, o.password);
        for (r in m)
            C.apply(S, m[r]);
        return o.timeout > 0 && (N = setTimeout(function() {
            S.onreadystatechange = x, S.abort(), y(null, "timeout", S, o, s)
        }, o.timeout)), S.send(o.data ? o.data : null), S
    }, t.get = function() {
        return t.ajax(j.apply(null, arguments))
    }, t.post = function() {
        var e = j.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function() {
        var e = j.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function(e, n, i) {
        if (!this.length)
            return this;
        var a, r = this, s = e.split(/\s/), u = j(e, n, i), f = u.success;
        return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function(e) {
            r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
        }, t.ajax(u), this
    };
    var S = encodeURIComponent;
    t.param = function(e, n) {
        var i = [];
        return i.add = function(e, n) {
            t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(S(e) + "=" + S(n))
        }, C(i, e, n), i.join("&").replace(/%20/g, "+")
    }
}(Zepto), function(t) {
    t.fn.serializeArray = function() {
        var e, n, i = [], r = function(t) {
            return t.forEach ? t.forEach(r) : void i.push({name: e,value: t})
        };
        return this[0] && t.each(this[0].elements, function(i, o) {
            n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
        }), i
    }, t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function(e) {
        if (0 in arguments)
            this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function() {
    try {
        getComputedStyle(void 0)
    } catch (t) {
        var e = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return e(t)
            } catch (n) {
                return null
            }
        }
    }
}(), function(t) {
    function u(t, e, n, i) {
        return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
    }
    function f() {
        o = null, e.last && (e.el.trigger("longTap"), e = {})
    }
    function c() {
        o && clearTimeout(o), o = null
    }
    function l() {
        n && clearTimeout(n), i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), n = i = r = o = null, e = {}
    }
    function h(t) {
        return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
    }
    function p(t, e) {
        return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
    }
    var n, i, r, o, a, e = {}, s = 750;
    t(document).ready(function() {
        var d, m, y, w, g = 0, v = 0;
        "MSGesture" in window && (a = new MSGesture, a.target = document.body), t(document).bind("MSGestureEnd", function(t) {
            var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
            n && (e.el.trigger("swipe"), e.el.trigger("swipe" + n))
        }).on("touchstart MSPointerDown pointerdown", function(i) {
            (!(w = p(i, "down")) || h(i)) && (y = w ? i : i.touches[0], i.touches && 1 === i.touches.length && e.x2 && (e.x2 = void 0, e.y2 = void 0), d = Date.now(), m = d - (e.last || d), e.el = t("tagName" in y.target ? y.target : y.target.parentNode), n && clearTimeout(n), e.x1 = y.pageX, e.y1 = y.pageY, m > 0 && 250 >= m && (e.isDoubleTap = !0), e.last = d, o = setTimeout(f, s), a && w && a.addPointer(i.pointerId))
        }).on("touchmove MSPointerMove pointermove", function(t) {
            (!(w = p(t, "move")) || h(t)) && (y = w ? t : t.touches[0], c(), e.x2 = y.pageX, e.y2 = y.pageY, g += Math.abs(e.x1 - e.x2), v += Math.abs(e.y1 - e.y2))
        }).on("touchend MSPointerUp pointerup", function(o) {
            (!(w = p(o, "up")) || h(o)) && (c(), e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? r = setTimeout(function() {
                e.el.trigger("swipe"), e.el.trigger("swipe" + u(e.x1, e.x2, e.y1, e.y2)), e = {}
            }, 0) : "last" in e && (30 > g && 30 > v ? i = setTimeout(function() {
                var i = t.Event("tap");
                i.cancelTouch = l, e.el.trigger(i), e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"), e = {}) : n = setTimeout(function() {
                    n = null, e.el && e.el.trigger("singleTap"), e = {}
                }, 250)
            }, 0) : e = {}), g = v = 0)
        }).on("touchcancel MSPointerCancel pointercancel", l), t(window).on("scroll", l)
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
        t.fn[e] = function(t) {
            return this.on(e, t)
        }
    })
}(Zepto);
(function(window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };
    var utils = (function() {
        var me = {};
        var _elementStyle = document.createElement("div").style;
        var _vendor = (function() {
            var vendors = ["t", "webkitT", "MozT", "msT", "OT"], transform, i = 0, l = vendors.length;
            for (; i < l; i++) {
                transform = vendors[i] + "ransform";
                if (transform in _elementStyle) {
                    return vendors[i].substr(0, vendors[i].length - 1)
                }
            }
            return false
        })();
        function _prefixStyle(style) {
            if (_vendor === false) {
                return false
            }
            if (_vendor === "") {
                return style
            }
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1)
        }
        me.getTime = Date.now || function getTime() {
            return new Date().getTime()
        };
        me.extend = function(target, obj) {
            for (var i in obj) {
                target[i] = obj[i]
            }
        };
        me.addEvent = function(el, type, fn, capture) {
            el.addEventListener(type, fn, !!capture)
        };
        me.removeEvent = function(el, type, fn, capture) {
            el.removeEventListener(type, fn, !!capture)
        };
        me.prefixPointerEvent = function(pointerEvent) {
            return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent
        };
        me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start, speed = Math.abs(distance) / time, destination, duration;
            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;
            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed
            } else {
                if (destination > 0) {
                    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                    distance = Math.abs(current) + destination;
                    duration = distance / speed
                }
            }
            return {destination: Math.round(destination),duration: duration}
        };
        var _transform = _prefixStyle("transform");
        me.extend(me, {hasTransform: _transform !== false,hasPerspective: _prefixStyle("perspective") in _elementStyle,hasTouch: "ontouchstart" in window,hasPointer: window.PointerEvent || window.MSPointerEvent,hasTransition: _prefixStyle("transition") in _elementStyle});
        me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));
        me.extend(me.style = {}, {transform: _transform,transitionTimingFunction: _prefixStyle("transitionTimingFunction"),transitionDuration: _prefixStyle("transitionDuration"),transitionDelay: _prefixStyle("transitionDelay"),transformOrigin: _prefixStyle("transformOrigin")});
        me.hasClass = function(e, c) {
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
            return re.test(e.className)
        };
        me.addClass = function(e, c) {
            if (me.hasClass(e, c)) {
                return
            }
            var newclass = e.className.split(" ");
            newclass.push(c);
            e.className = newclass.join(" ")
        };
        me.removeClass = function(e, c) {
            if (!me.hasClass(e, c)) {
                return
            }
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
            e.className = e.className.replace(re, " ")
        };
        me.offset = function(el) {
            var left = -el.offsetLeft, top = -el.offsetTop;
            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop
            }
            return {left: left,top: top}
        };
        me.preventDefaultException = function(el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true
                }
            }
            return false
        };
        me.extend(me.eventType = {}, {touchstart: 1,touchmove: 1,touchend: 1,mousedown: 2,mousemove: 2,mouseup: 2,pointerdown: 3,pointermove: 3,pointerup: 3,MSPointerDown: 3,MSPointerMove: 3,MSPointerUp: 3});
        me.extend(me.ease = {}, {quadratic: {style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn: function(k) {
                    return k * (2 - k)
                }},circular: {style: "cubic-bezier(0.1, 0.57, 0.1, 1)",fn: function(k) {
                    return Math.sqrt(1 - (--k * k))
                }},back: {style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn: function(k) {
                    var b = 4;
                    return (k = k - 1) * k * ((b + 1) * k + b) + 1
                }},bounce: {style: "",fn: function(k) {
                    if ((k /= 1) < (1 / 2.75)) {
                        return 7.5625 * k * k
                    } else {
                        if (k < (2 / 2.75)) {
                            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
                        } else {
                            if (k < (2.5 / 2.75)) {
                                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
                            } else {
                                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375
                            }
                        }
                    }
                }},elastic: {style: "",fn: function(k) {
                    var f = 0.22, e = 0.4;
                    if (k === 0) {
                        return 0
                    }
                    if (k == 1) {
                        return 1
                    }
                    return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1)
                }}});
        me.tap = function(e, eventName) {
            var ev = document.createEvent("Event");
            ev.initEvent(eventName, true, true);
            ev.pageX = e.pageX;
            ev.pageY = e.pageY;
            e.target.dispatchEvent(ev)
        };
        me.click = function(e) {
            var target = e.target, ev;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                ev = document.createEvent("MouseEvents");
                ev.initMouseEvent("click", true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                ev._constructed = true;
                target.dispatchEvent(ev)
            }
        };
        return me
    })();
    function IScroll(el, options) {
        this.wrapper = typeof el == "string" ? document.querySelector(el) : el;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {resizeScrollbars: true,mouseWheelSpeed: 20,snapThreshold: 0.334,startX: 0,startY: 0,scrollY: true,directionLockThreshold: 5,momentum: true,bounce: true,bounceTime: 600,bounceEasing: "",preventDefault: true,preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing: true,useTransition: true,useTransform: true};
        for (var i in options) {
            this.options[i] = options[i]
        }
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = utils.hasTransition && this.options.useTransition;
        this.options.useTransform = utils.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = "tap"
        }
        if (this.options.shrinkScrollbars == "scale") {
            this.options.useTransition = false
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }
    IScroll.prototype = {version: "5.1.3",_init: function() {
            this._initEvents();
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators()
            }
            if (this.options.mouseWheel) {
                this._initWheel()
            }
            if (this.options.snap) {
                this._initSnap()
            }
            if (this.options.keyBindings) {
                this._initKeys()
            }
        },destroy: function() {
            this._initEvents(true);
            this._execEvent("destroy")
        },_transitionEnd: function(e) {
            if (e.target != this.scroller || !this.isInTransition) {
                return
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        },_start: function(e) {
            if (utils.eventType[e.type] != 1) {
                if (e.button !== 0) {
                    return
                }
            }
            if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
                return
            }
            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault()
            }
            var point = e.touches ? e.touches[0] : e, pos;
            this.initiated = utils.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = utils.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent("scrollEnd")
            } else {
                if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd")
                }
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this._execEvent("beforeScrollStart")
        },_move: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                e.preventDefault()
            }
            var point = e.touches ? e.touches[0] : e, deltaX = point.pageX - this.pointX, deltaY = point.pageY - this.pointY, timestamp = utils.getTime(), newX, newY, absDistX, absDistY;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this.distX += deltaX;
            this.distY += deltaY;
            absDistX = Math.abs(this.distX);
            absDistY = Math.abs(this.distY);
            if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                return
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (absDistX > absDistY + this.options.directionLockThreshold) {
                    this.directionLocked = "h"
                } else {
                    if (absDistY >= absDistX + this.options.directionLockThreshold) {
                        this.directionLocked = "v"
                    } else {
                        this.directionLocked = "n"
                    }
                }
            }
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") {
                    e.preventDefault()
                } else {
                    if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return
                    }
                }
                deltaY = 0
            } else {
                if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        e.preventDefault()
                    } else {
                        if (this.options.eventPassthrough == "vertical") {
                            this.initiated = false;
                            return
                        }
                    }
                    deltaX = 0
                }
            }
            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            if (newX > 0 || newX < this.maxScrollX) {
                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX
            }
            if (newY > 0 || newY < this.maxScrollY) {
                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY
            }
            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent("scrollStart")
            }
            this.moved = true;
            this._translate(newX, newY);
            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y
            }
        },_end: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault()
            }
            var point = e.changedTouches ? e.changedTouches[0] : e, momentumX, momentumY, duration = utils.getTime() - this.startTime, newX = Math.round(this.x), newY = Math.round(this.y), distanceX = Math.abs(newX - this.startX), distanceY = Math.abs(newY - this.startY), time = 0, easing = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = utils.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return
            }
            this.scrollTo(newX, newY);
            if (!this.moved) {
                if (this.options.tap) {
                    utils.tap(e, this.options.tap)
                }
                if (this.options.click) {
                    utils.click(e)
                }
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {destination: newX,duration: 0};
                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {destination: newY,duration: 0};
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var snap = this._nearestSnap(newX, newY);
                this.currentPage = snap;
                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
                newX = snap.x;
                newY = snap.y;
                this.directionX = 0;
                this.directionY = 0;
                easing = this.options.bounceEasing
            }
            if (newX != this.x || newY != this.y) {
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = utils.ease.quadratic
                }
                this.scrollTo(newX, newY, time, easing);
                return
            }
            this._execEvent("scrollEnd")
        },_resize: function() {
            var that = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                that.refresh()
            }, this.options.resizePolling)
        },resetPosition: function(time) {
            var x = this.x, y = this.y;
            time = time || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0
            } else {
                if (this.x < this.maxScrollX) {
                    x = this.maxScrollX
                }
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0
            } else {
                if (this.y < this.maxScrollY) {
                    y = this.maxScrollY
                }
            }
            if (x == this.x && y == this.y) {
                return false
            }
            this.scrollTo(x, y, time, this.options.bounceEasing);
            return true
        },disable: function() {
            this.enabled = false
        },enable: function() {
            this.enabled = true
        },refresh: function() {
            var rf = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = utils.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        },on: function(type, fn) {
            if (!this._events[type]) {
                this._events[type] = []
            }
            this._events[type].push(fn)
        },off: function(type, fn) {
            if (!this._events[type]) {
                return
            }
            var index = this._events[type].indexOf(fn);
            if (index > -1) {
                this._events[type].splice(index, 1)
            }
        },_execEvent: function(type) {
            if (!this._events[type]) {
                return
            }
            var i = 0, l = this._events[type].length;
            if (!l) {
                return
            }
            for (; i < l; i++) {
                this._events[type][i].apply(this, [].slice.call(arguments, 1))
            }
        },scrollBy: function(x, y, time, easing) {
            x = this.x + x;
            y = this.y + y;
            time = time || 0;
            this.scrollTo(x, y, time, easing)
        },scrollTo: function(x, y, time, easing) {
            easing = easing || utils.ease.circular;
            this.isInTransition = this.options.useTransition && time > 0;
            if (!time || (this.options.useTransition && easing.style)) {
                this._transitionTimingFunction(easing.style);
                this._transitionTime(time);
                this._translate(x, y)
            } else {
                this._animate(x, y, time, easing.fn)
            }
        },scrollToElement: function(el, time, offsetX, offsetY, easing) {
            el = el.nodeType ? el : this.scroller.querySelector(el);
            if (!el) {
                return
            }
            var pos = utils.offset(el);
            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;
            if (offsetX === true) {
                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
            }
            if (offsetY === true) {
                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
            }
            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;
            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
            time = time === undefined || time === null || time === "auto" ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
            this.scrollTo(pos.left, pos.top, time, easing)
        },_transitionTime: function(time) {
            time = time || 0;
            this.scrollerStyle[utils.style.transitionDuration] = time + "ms";
            if (!time && utils.isBadAndroid) {
                this.scrollerStyle[utils.style.transitionDuration] = "0.001s"
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].transitionTime(time)
                }
            }
        },_transitionTimingFunction: function(easing) {
            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].transitionTimingFunction(easing)
                }
            }
        },_translate: function(x, y) {
            if (this.options.useTransform) {
                this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ
            } else {
                x = Math.round(x);
                y = Math.round(y);
                this.scrollerStyle.left = x + "px";
                this.scrollerStyle.top = y + "px"
            }
            this.x = x;
            this.y = y;
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].updatePosition()
                }
            }
        },_initEvents: function(remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent, target = this.options.bindToWrapper ? this.wrapper : window;
            eventType(window, "orientationchange", this);
            eventType(window, "resize", this);
            if (this.options.click) {
                eventType(this.wrapper, "click", this, true)
            }
            if (!this.options.disableMouse) {
                eventType(this.wrapper, "mousedown", this);
                eventType(target, "mousemove", this);
                eventType(target, "mousecancel", this);
                eventType(target, "mouseup", this)
            }
            if (utils.hasPointer && !this.options.disablePointer) {
                eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
                eventType(target, utils.prefixPointerEvent("pointermove"), this);
                eventType(target, utils.prefixPointerEvent("pointercancel"), this);
                eventType(target, utils.prefixPointerEvent("pointerup"), this)
            }
            if (utils.hasTouch && !this.options.disableTouch) {
                eventType(this.wrapper, "touchstart", this);
                eventType(target, "touchmove", this);
                eventType(target, "touchcancel", this);
                eventType(target, "touchend", this)
            }
            eventType(this.scroller, "transitionend", this);
            eventType(this.scroller, "webkitTransitionEnd", this);
            eventType(this.scroller, "oTransitionEnd", this);
            eventType(this.scroller, "MSTransitionEnd", this)
        },getComputedPosition: function() {
            var matrix = window.getComputedStyle(this.scroller, null), x, y;
            if (this.options.useTransform) {
                matrix = matrix[utils.style.transform].split(")")[0].split(", ");
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5])
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, "");
                y = +matrix.top.replace(/[^-\d.]/g, "")
            }
            return {x: x,y: y}
        },_initIndicators: function() {
            var interactive = this.options.interactiveScrollbars, customStyle = typeof this.options.scrollbars != "string", indicators = [], indicator;
            var that = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    indicator = {el: createDefaultScrollbar("v", interactive, this.options.scrollbars),interactive: interactive,defaultScrollbars: true,customStyle: customStyle,resize: this.options.resizeScrollbars,shrink: this.options.shrinkScrollbars,fade: this.options.fadeScrollbars,listenX: false};
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator)
                }
                if (this.options.scrollX) {
                    indicator = {el: createDefaultScrollbar("h", interactive, this.options.scrollbars),interactive: interactive,defaultScrollbars: true,customStyle: customStyle,resize: this.options.resizeScrollbars,shrink: this.options.shrinkScrollbars,fade: this.options.fadeScrollbars,listenY: false};
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator)
                }
            }
            if (this.options.indicators) {
                indicators = indicators.concat(this.options.indicators)
            }
            for (var i = indicators.length; i--; ) {
                this.indicators.push(new Indicator(this, indicators[i]))
            }
            function _indicatorsMap(fn) {
                for (var i = that.indicators.length; i--; ) {
                    fn.call(that.indicators[i])
                }
            }
            if (this.options.fadeScrollbars) {
                this.on("scrollEnd", function() {
                    _indicatorsMap(function() {
                        this.fade()
                    })
                });
                this.on("scrollCancel", function() {
                    _indicatorsMap(function() {
                        this.fade()
                    })
                });
                this.on("scrollStart", function() {
                    _indicatorsMap(function() {
                        this.fade(1)
                    })
                });
                this.on("beforeScrollStart", function() {
                    _indicatorsMap(function() {
                        this.fade(1, true)
                    })
                })
            }
            this.on("refresh", function() {
                _indicatorsMap(function() {
                    this.refresh()
                })
            });
            this.on("destroy", function() {
                _indicatorsMap(function() {
                    this.destroy()
                });
                delete this.indicators
            })
        },_initWheel: function() {
            utils.addEvent(this.wrapper, "wheel", this);
            utils.addEvent(this.wrapper, "mousewheel", this);
            utils.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy", function() {
                utils.removeEvent(this.wrapper, "wheel", this);
                utils.removeEvent(this.wrapper, "mousewheel", this);
                utils.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },_wheel: function(e) {
            if (!this.enabled) {
                return
            }
            e.preventDefault();
            e.stopPropagation();
            var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
            if (this.wheelTimeout === undefined) {
                that._execEvent("scrollStart")
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                that._execEvent("scrollEnd");
                that.wheelTimeout = undefined
            }, 400);
            if ("deltaX" in e) {
                if (e.deltaMode === 1) {
                    wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                    wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed
                } else {
                    wheelDeltaX = -e.deltaX;
                    wheelDeltaY = -e.deltaY
                }
            } else {
                if ("wheelDeltaX" in e) {
                    wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
                } else {
                    if ("wheelDelta" in e) {
                        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed
                    } else {
                        if ("detail" in e) {
                            wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed
                        } else {
                            return
                        }
                    }
                }
            }
            wheelDeltaX *= this.options.invertWheelDirection;
            wheelDeltaY *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                wheelDeltaX = wheelDeltaY;
                wheelDeltaY = 0
            }
            if (this.options.snap) {
                newX = this.currentPage.pageX;
                newY = this.currentPage.pageY;
                if (wheelDeltaX > 0) {
                    newX--
                } else {
                    if (wheelDeltaX < 0) {
                        newX++
                    }
                }
                if (wheelDeltaY > 0) {
                    newY--
                } else {
                    if (wheelDeltaY < 0) {
                        newY++
                    }
                }
                this.goToPage(newX, newY);
                return
            }
            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
            if (newX > 0) {
                newX = 0
            } else {
                if (newX < this.maxScrollX) {
                    newX = this.maxScrollX
                }
            }
            if (newY > 0) {
                newY = 0
            } else {
                if (newY < this.maxScrollY) {
                    newY = this.maxScrollY
                }
            }
            this.scrollTo(newX, newY, 0)
        },_initSnap: function() {
            this.currentPage = {};
            if (typeof this.options.snap == "string") {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap)
            }
            this.on("refresh", function() {
                var i = 0, l, m = 0, n, cx, cy, x = 0, y, stepX = this.options.snapStepX || this.wrapperWidth, stepY = this.options.snapStepY || this.wrapperHeight, el;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return
                }
                if (this.options.snap === true) {
                    cx = Math.round(stepX / 2);
                    cy = Math.round(stepY / 2);
                    while (x > -this.scrollerWidth) {
                        this.pages[i] = [];
                        l = 0;
                        y = 0;
                        while (y > -this.scrollerHeight) {
                            this.pages[i][l] = {x: Math.max(x, this.maxScrollX),y: Math.max(y, this.maxScrollY),width: stepX,height: stepY,cx: x - cx,cy: y - cy};
                            y -= stepY;
                            l++
                        }
                        x -= stepX;
                        i++
                    }
                } else {
                    el = this.options.snap;
                    l = el.length;
                    n = -1;
                    for (; i < l; i++) {
                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                            m = 0;
                            n++
                        }
                        if (!this.pages[m]) {
                            this.pages[m] = []
                        }
                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
                        cx = x - Math.round(el[i].offsetWidth / 2);
                        cy = y - Math.round(el[i].offsetHeight / 2);
                        this.pages[m][n] = {x: x,y: y,width: el[i].offsetWidth,height: el[i].offsetHeight,cx: cx,cy: cy};
                        if (x > this.maxScrollX) {
                            m++
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on("flick", function() {
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time)
            })
        },_nearestSnap: function(x, y) {
            if (!this.pages.length) {
                return {x: 0,y: 0,pageX: 0,pageY: 0}
            }
            var i = 0, l = this.pages.length, m = 0;
            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
                return this.currentPage
            }
            if (x > 0) {
                x = 0
            } else {
                if (x < this.maxScrollX) {
                    x = this.maxScrollX
                }
            }
            if (y > 0) {
                y = 0
            } else {
                if (y < this.maxScrollY) {
                    y = this.maxScrollY
                }
            }
            for (; i < l; i++) {
                if (x >= this.pages[i][0].cx) {
                    x = this.pages[i][0].x;
                    break
                }
            }
            l = this.pages[i].length;
            for (; m < l; m++) {
                if (y >= this.pages[0][m].cy) {
                    y = this.pages[0][m].y;
                    break
                }
            }
            if (i == this.currentPage.pageX) {
                i += this.directionX;
                if (i < 0) {
                    i = 0
                } else {
                    if (i >= this.pages.length) {
                        i = this.pages.length - 1
                    }
                }
                x = this.pages[i][0].x
            }
            if (m == this.currentPage.pageY) {
                m += this.directionY;
                if (m < 0) {
                    m = 0
                } else {
                    if (m >= this.pages[0].length) {
                        m = this.pages[0].length - 1
                    }
                }
                y = this.pages[0][m].y
            }
            return {x: x,y: y,pageX: i,pageY: m}
        },goToPage: function(x, y, time, easing) {
            easing = easing || this.options.bounceEasing;
            if (x >= this.pages.length) {
                x = this.pages.length - 1
            } else {
                if (x < 0) {
                    x = 0
                }
            }
            if (y >= this.pages[x].length) {
                y = this.pages[x].length - 1
            } else {
                if (y < 0) {
                    y = 0
                }
            }
            var posX = this.pages[x][y].x, posY = this.pages[x][y].y;
            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
            this.currentPage = {x: posX,y: posY,pageX: x,pageY: y};
            this.scrollTo(posX, posY, time, easing)
        },next: function(time, easing) {
            var x = this.currentPage.pageX, y = this.currentPage.pageY;
            x++;
            if (x >= this.pages.length && this.hasVerticalScroll) {
                x = 0;
                y++
            }
            this.goToPage(x, y, time, easing)
        },prev: function(time, easing) {
            var x = this.currentPage.pageX, y = this.currentPage.pageY;
            x--;
            if (x < 0 && this.hasVerticalScroll) {
                x = 0;
                y--
            }
            this.goToPage(x, y, time, easing)
        },_initKeys: function(e) {
            var keys = {pageUp: 33,pageDown: 34,end: 35,home: 36,left: 37,up: 38,right: 39,down: 40};
            var i;
            if (typeof this.options.keyBindings == "object") {
                for (i in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[i] == "string") {
                        this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0)
                    }
                }
            } else {
                this.options.keyBindings = {}
            }
            for (i in keys) {
                this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i]
            }
            utils.addEvent(window, "keydown", this);
            this.on("destroy", function() {
                utils.removeEvent(window, "keydown", this)
            })
        },_key: function(e) {
            if (!this.enabled) {
                return
            }
            var snap = this.options.snap, newX = snap ? this.currentPage.pageX : this.x, newY = snap ? this.currentPage.pageY : this.y, now = utils.getTime(), prevTime = this.keyTime || 0, acceleration = 0.25, pos;
            if (this.options.useTransition && this.isInTransition) {
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this.isInTransition = false
            }
            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
            switch (e.keyCode) {
                case this.options.keyBindings.pageUp:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        newX += snap ? 1 : this.wrapperWidth
                    } else {
                        newY += snap ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.pageDown:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        newX -= snap ? 1 : this.wrapperWidth
                    } else {
                        newY -= snap ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.end:
                    newX = snap ? this.pages.length - 1 : this.maxScrollX;
                    newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    newX = 0;
                    newY = 0;
                    break;
                case this.options.keyBindings.left:
                    newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
            }
            if (snap) {
                this.goToPage(newX, newY);
                return
            }
            if (newX > 0) {
                newX = 0;
                this.keyAcceleration = 0
            } else {
                if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                    this.keyAcceleration = 0
                }
            }
            if (newY > 0) {
                newY = 0;
                this.keyAcceleration = 0
            } else {
                if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                    this.keyAcceleration = 0
                }
            }
            this.scrollTo(newX, newY, 0);
            this.keyTime = now
        },_animate: function(destX, destY, duration, easingFn) {
            var that = this, startX = this.x, startY = this.y, startTime = utils.getTime(), destTime = startTime + duration;
            function step() {
                var now = utils.getTime(), newX, newY, easing;
                if (now >= destTime) {
                    that.isAnimating = false;
                    that._translate(destX, destY);
                    if (!that.resetPosition(that.options.bounceTime)) {
                        that._execEvent("scrollEnd")
                    }
                    return
                }
                now = (now - startTime) / duration;
                easing = easingFn(now);
                newX = (destX - startX) * easing + startX;
                newY = (destY - startY) * easing + startY;
                that._translate(newX, newY);
                if (that.isAnimating) {
                    rAF(step)
                }
            }
            this.isAnimating = true;
            step()
        },handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    if (!e._constructed) {
                        e.preventDefault();
                        e.stopPropagation()
                    }
                    break
            }
        }};
    function createDefaultScrollbar(direction, interactive, type) {
        var scrollbar = document.createElement("div"), indicator = document.createElement("div");
        if (type === true) {
            scrollbar.style.cssText = "position:absolute;z-index:9999";
            indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
        }
        indicator.className = "iScrollIndicator";
        if (direction == "h") {
            if (type === true) {
                scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                indicator.style.height = "100%"
            }
            scrollbar.className = "iScrollHorizontalScrollbar"
        } else {
            if (type === true) {
                scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                indicator.style.width = "100%"
            }
            scrollbar.className = "iScrollVerticalScrollbar"
        }
        scrollbar.style.cssText += ";overflow:hidden";
        if (!interactive) {
            scrollbar.style.pointerEvents = "none"
        }
        scrollbar.appendChild(indicator);
        return scrollbar
    }
    function Indicator(scroller, options) {
        this.wrapper = typeof options.el == "string" ? document.querySelector(options.el) : options.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = scroller;
        this.options = {listenX: true,listenY: true,interactive: false,resize: true,defaultScrollbars: false,shrink: false,fade: false,speedRatioX: 0,speedRatioY: 0};
        for (var i in options) {
            this.options[i] = options[i]
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                utils.addEvent(this.indicator, "touchstart", this);
                utils.addEvent(window, "touchend", this)
            }
            if (!this.options.disablePointer) {
                utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
                utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this)
            }
            if (!this.options.disableMouse) {
                utils.addEvent(this.indicator, "mousedown", this);
                utils.addEvent(window, "mouseup", this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? "0.001s" : "0ms";
            this.wrapperStyle.opacity = "0"
        }
    }
    Indicator.prototype = {handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break
            }
        },destroy: function() {
            if (this.options.interactive) {
                utils.removeEvent(this.indicator, "touchstart", this);
                utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
                utils.removeEvent(this.indicator, "mousedown", this);
                utils.removeEvent(window, "touchmove", this);
                utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
                utils.removeEvent(window, "mousemove", this);
                utils.removeEvent(window, "touchend", this);
                utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this);
                utils.removeEvent(window, "mouseup", this)
            }
            if (this.options.defaultScrollbars) {
                this.wrapper.parentNode.removeChild(this.wrapper)
            }
        },_start: function(e) {
            var point = e.touches ? e.touches[0] : e;
            e.preventDefault();
            e.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = point.pageX;
            this.lastPointY = point.pageY;
            this.startTime = utils.getTime();
            if (!this.options.disableTouch) {
                utils.addEvent(window, "touchmove", this)
            }
            if (!this.options.disablePointer) {
                utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this)
            }
            if (!this.options.disableMouse) {
                utils.addEvent(window, "mousemove", this)
            }
            this.scroller._execEvent("beforeScrollStart")
        },_move: function(e) {
            var point = e.touches ? e.touches[0] : e, deltaX, deltaY, newX, newY, timestamp = utils.getTime();
            if (!this.moved) {
                this.scroller._execEvent("scrollStart")
            }
            this.moved = true;
            deltaX = point.pageX - this.lastPointX;
            this.lastPointX = point.pageX;
            deltaY = point.pageY - this.lastPointY;
            this.lastPointY = point.pageY;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            this._pos(newX, newY);
            e.preventDefault();
            e.stopPropagation()
        },_end: function(e) {
            if (!this.initiated) {
                return
            }
            this.initiated = false;
            e.preventDefault();
            e.stopPropagation();
            utils.removeEvent(window, "touchmove", this);
            utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
            utils.removeEvent(window, "mousemove", this);
            if (this.scroller.options.snap) {
                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = snap;
                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) {
                this.scroller._execEvent("scrollEnd")
            }
        },transitionTime: function(time) {
            time = time || 0;
            this.indicatorStyle[utils.style.transitionDuration] = time + "ms";
            if (!time && utils.isBadAndroid) {
                this.indicatorStyle[utils.style.transitionDuration] = "0.001s"
            }
        },transitionTimingFunction: function(easing) {
            this.indicatorStyle[utils.style.transitionTimingFunction] = easing
        },refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
            } else {
                if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
                }
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                utils.addClass(this.wrapper, "iScrollBothScrollbars");
                utils.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "8px"
                    } else {
                        this.wrapper.style.bottom = "8px"
                    }
                }
            } else {
                utils.removeClass(this.wrapper, "iScrollBothScrollbars");
                utils.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "2px"
                    } else {
                        this.wrapper.style.bottom = "2px"
                    }
                }
            }
            var r = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px"
                } else {
                    this.indicatorWidth = this.indicator.clientWidth
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == "clip") {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px"
                } else {
                    this.indicatorHeight = this.indicator.clientHeight
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == "clip") {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
            }
            this.updatePosition()
        },updatePosition: function() {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0, y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (x < this.minBoundaryX) {
                    if (this.options.shrink == "scale") {
                        this.width = Math.max(this.indicatorWidth + x, 8);
                        this.indicatorStyle.width = this.width + "px"
                    }
                    x = this.minBoundaryX
                } else {
                    if (x > this.maxBoundaryX) {
                        if (this.options.shrink == "scale") {
                            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + "px";
                            x = this.maxPosX + this.indicatorWidth - this.width
                        } else {
                            x = this.maxBoundaryX
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
                            this.width = this.indicatorWidth;
                            this.indicatorStyle.width = this.width + "px"
                        }
                    }
                }
                if (y < this.minBoundaryY) {
                    if (this.options.shrink == "scale") {
                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
                        this.indicatorStyle.height = this.height + "px"
                    }
                    y = this.minBoundaryY
                } else {
                    if (y > this.maxBoundaryY) {
                        if (this.options.shrink == "scale") {
                            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + "px";
                            y = this.maxPosY + this.indicatorHeight - this.height
                        } else {
                            y = this.maxBoundaryY
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
                            this.height = this.indicatorHeight;
                            this.indicatorStyle.height = this.height + "px"
                        }
                    }
                }
            }
            this.x = x;
            this.y = y;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ
            } else {
                this.indicatorStyle.left = x + "px";
                this.indicatorStyle.top = y + "px"
            }
        },_pos: function(x, y) {
            if (x < 0) {
                x = 0
            } else {
                if (x > this.maxPosX) {
                    x = this.maxPosX
                }
            }
            if (y < 0) {
                y = 0
            } else {
                if (y > this.maxPosY) {
                    y = this.maxPosY
                }
            }
            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(x, y)
        },fade: function(val, hold) {
            if (hold && !this.visible) {
                return
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var time = val ? 250 : 500, delay = val ? 0 : 300;
            val = val ? "1" : "0";
            this.wrapperStyle[utils.style.transitionDuration] = time + "ms";
            this.fadeTimeout = setTimeout((function(val) {
                this.wrapperStyle.opacity = val;
                this.visible = +val
            }).bind(this, val), delay)
        }};
    IScroll.utils = utils;
    if (typeof module != "undefined" && module.exports) {
        module.exports = IScroll
    } else {
        window.IScroll = IScroll
    }
})(window, document, Math);
var JTE = function() 
{
    var o = {};
    o.print_prefix = '=';
    o._G = {};
    o.fnPool = {};
    o.clear = function() 
    {
        this._G = {};
        return this;
    }
    o.assign = function(key, val) 
    {
        this._G[key] = val;
        return this;
    }
    o.execute = function(tpl, name) 
    {
        if (name == undefined)
            name = 'default';
        var fn_str = null;
        if (this.fnPool[name] != undefined)
            fn_str = this.fnPool[name];
        else 
        {
            var reg = /<%=?([^>]+)%>/g;
            var CD = "var C = [];\n";
            var append = function(line) 
            {
                var T = line.replace(/'/g, "\\\'").replace(/[\n\t]{1,}/g, " ");
                CD += "C.push('" + T + "');\n";
            }
            var CUR = 0;
            var CHR = 0;
            var TMP = null;
            var LGC = null;
            while ((m = reg.exec(tpl)) != null) 
            {
                append(tpl.slice(CUR, m.index));
                CHR = tpl[m.index + 2];
                LGC = m[1].replace(/\{([a-z0-9_\[\]\.]+)\}/gi, "__G__.$1");
                if (CHR == this.print_prefix)
                    CD += "C.push(" + LGC + ");\n";
                else
                    CD += LGC + "\n";
                CUR = m.index + m[0].length;
            }
            append(tpl.substr(CUR, tpl.length - CUR));
            CD += "return C.join('');\n";
            fn_str = CD;
            this.fnPool[name] = CD;
        }
        var ret = (function(__G__) {
            var r = '';
            try {
                var r = eval('(function(){' + fn_str + '}())');
            } catch (err) {
            }
            return r;
        }(this._G));
        return ret;
    }
    o.getParam = function(_name) 
    {
        var pattern = new RegExp("(\\?|#|&)" + _name + "=([^&#]*)");
        var m = window.location.href.match(pattern);
        return (!m ? "" : m[2]);
    }
    o.getTimeString = function(o_time, c_time) 
    {
        t = c_time - o_time;
        if (t < 0) 
        {
            var d = new Date();
            d.setTime(o_time * 1000);
            return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
        }
        if (t < 5)
            return '刚刚';
        if (t < 60)
            return t + '秒前';
        if (t < 3600)
            return Math.floor(t / 60) + '分钟前';
        if (t < 86400)
            return Math.floor(t / 3600) + '小时前';
        if (t < 2592000)
            return Math.floor(t / 86400) + '天前';
        var d = new Date();
        d.setTime(o_time * 1000);
        if (t < 31104000) 
        {
            return (d.getMonth() + 1) + '月' + d.getDate() + '日';
        }
        return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
    }
    return o;
}();
(function(window) {
    var clientWidth = $(window).width() > 640 ? 640 : $(window).width();
    var clientHeight = $(window).height();
    var gdata = null;
    var question_count = 0;
    var page_count = 1;
    var page_num;
    var answer_result = new Object();
    var answerIscrollArr = [];
    var coverIscroll = null;
    var resultIscroll = null;
    var touch_name = 'ontouchstart' in window ? "tap" : "click";
    var options = {bg_img: "img/bg-default.jpg",sel_answer_bgcolor: "rgb(215,215,215)",next_page_time: 710,next_page_waiting_time: 500,result_img_height: 170,answer_img_width: 120,answer_img_height: 80,cover_desc: {duration: 800,animate: "zoomIn"},cover_title: {duration: 800,animate: "shake"},cover_cover_img: {duration: 0,animate: "fadeInDownBig"},cover_btn: {duration: 1000,animate: "lightSpeedIn"},main_title: {duration: 800,animate: "shake"},main_cover_img: {duration: 100,animate: "zoomInDown"},main_answers: {duration: 1100,animate: "fadeIn"},result_title: {duration: 0,animate: ""},result_cover_img: {duration: 0,animate: ""},result_btn: {duration: 800,animate: "lightSpeedIn"},result_desc: {duration: 700,animate: "zoomIn"}}
    function quizInit(data, containerSel, tplSel, opts) {
        try {
            gdata = eval('(' + data + ')');
        } catch (err) {
            return false;
        }
        _initOptions(opts);
        _initAnswerResult(gdata);
        var tree = _assignDataToTpl(tplSel);
        var content_box = $(tree).find("[attr-content]");
        var page_box = $(tree).find("[attr-page]");
        page_num = page_box.length;
        content_box.css({width: clientWidth + "px",height: clientHeight * page_box.length + "px"});
        page_box.css({width: clientWidth + "px",height: clientHeight + "px"});
        $(tree).find("div.img-cover[img-src]").each(function() {
            var that = $(this);
            var curImgWidth = that.attr("img-width"), curImgHeight = that.attr("img-height");
            var tempHeight = (curImgHeight / curImgWidth) * clientWidth;
            tempHeight = tempHeight > clientHeight / 2 ? clientHeight / 2 : tempHeight;
            that.css({height: tempHeight + "px"});
            that.siblings("[answers-wrapper]").css({height: (clientHeight - tempHeight) + "px"});
            that.siblings("[main-answers]").css({height: (clientHeight - tempHeight) + "px"});
        });
        $(tree).find("div.img-wrap[img-src]").each(function() {
            var that = $(this);
            try {
                var layout = JSON.parse(that.attr("data-layout"));
                var imgWrapWidth = (parseInt(clientWidth) - ((parseInt(layout.cols) + 1) * 8) - (parseInt(layout.cols) * 12)) / parseInt(layout.cols);
                options.answer_img_width = imgWrapWidth;
            } catch (e) {
            }
            var curImgWidth = that.attr("img-width"), curImgHeight = that.attr("img-height"), tempHeight = (curImgHeight / curImgWidth) * options.answer_img_width;
            if (clientWidth > 500) {
                options.answer_img_height = 150;
            }
            tempHeight = tempHeight > options.answer_img_height ? options.answer_img_height : tempHeight;
            that.css({width: options.answer_img_width + "px",height: tempHeight + "px"});
            if (that.parent("li.hr[answer-item]").find(".pl").length != 0) {
                that.parent("li.hr[answer-item]").css({"padding-left": options.answer_img_width + 5 + 10 + "px","min-height": tempHeight + 16 + "px"});
            } else {
                that.parent("li.hr[answer-item]").css({"padding-right": options.answer_img_width + 5 + 10 + "px","min-height": tempHeight + 16 + "px"});
            }
        });
        $(containerSel).append($(tree).children().get(0));
        var container_elment = $(containerSel);
        var page_elment = container_elment.find("[attr-page]");
        _initIscroll(container_elment);
        _initBgCoverImg(container_elment);
        _loadImg($(page_elment[page_count]).find("div[img-src]"), function(obj) {
            var temp = $(obj).attr("style") + "background:url(" + $(obj).attr("img-src") + ") top center no-repeat;background-size: 100% auto;background-origin:content-box;";
            $(obj).attr("style", temp);
        });
        _event(container_elment, page_elment);
    }
    function _event(container_elment, page_elment) {
        var content = container_elment.find("[attr-content]");
        $("#start").bind(touch_name, function() {
            page_count++;
            _nextPage(content, _getSliderHeight(clientHeight), page_elment);
            _loadImg($(page_elment[page_count]).find("div[img-src]"), function(obj) {
                var temp = $(obj).attr("style") + "background:url(" + $(obj).attr("img-src") + ") top center no-repeat;background-size: 100% auto;background-origin:content-box;";
                $(obj).attr("style", temp);
            });
        });
        content.bind("touchstart", function(event) {
        });
        content.bind("touchmove", function(event) {
            event.preventDefault();
        });
        content.bind("touchend", function(event) {
        });
        content.find("[answer-item]").bind(touch_name, function() {
            if ($(this).attr("disable") != 0) {
                return;
            }
            ;
            page_count++;
            $(this).attr("disable", 1);
            $(this).siblings("[answer-item]").attr("disable", 1);
            answerAction($(this));
            setTimeout(function() {
                _nextPage(content, _getSliderHeight(clientHeight), page_elment);
            }, options.next_page_waiting_time);
            _loadImg($(page_elment[page_count]).find("div[img-src]"), function(obj) {
                var temp = $(obj).attr("style") + "background:url(" + $(obj).attr("img-src") + ") top center no-repeat;background-size: 100% auto;background-origin:content-box;";
                $(obj).attr("style", temp);
            });
            if (page_count >= page_num) {
                quizResult(container_elment, gdata.results);
            }
            ;
        });
        $("#restart").bind(touch_name, function() {
            location.href = "job.html";
        });
        $("#share").bind(touch_name, function() {
            $(".ending").removeClass("hide").addClass("show").addClass("animated").addClass("fadeIn");
            setTimeout(function() {
                $(".ending").removeClass("show").removeClass("fadeIn").addClass("fadeOut");
                setTimeout(function() {
                    $(".ending").addClass("hide").removeClass("fadeOut");
                }, 1000);
            }, 1500);
        });
        $(window).bind('load', function() {
            _orientationChange();
            window.onorientationchange = _orientationChange;
        });
    }
    function quizResult(container_elment, results) {
        if (results == null) {
            return;
        }
        ;
        var maxScore = null;
        var maxScoreId;
        for (var key in answer_result) {
            if (maxScore == null) {
                maxScore = answer_result[key];
                maxScoreId = key;
                continue;
            }
            ;
            if (maxScore < answer_result[key]) {
                maxScore = answer_result[key];
                maxScoreId = key;
            }
            ;
        }
        ;
        var resultObj = null;
        for (var i = 0; i < results.length; i++) {
            if (results[i].id == maxScoreId) {
                resultObj = results[i];
                break;
            }
            ;
        }
        ;
        if (resultObj == null) {
            return;
        }
        ;
        var result_title = JTE.clear().assign('result', resultObj).assign('quiz', gdata).execute(gdata.share.title, 'quiz_result');
        $("title").html(result_title);
        var result_show_wrap = container_elment.find("[attr-result]");
        var rimgWidth = (resultObj.imgWidth / resultObj.imgHeight) * options.result_img_height;
        if (rimgWidth > clientWidth) {
            rimgWidth = clientWidth;
        }
        ;
        var img = new Image();
        img.src = resultObj.img_src;
        img.onload = function() {
            setTimeout(function() {
                result_show_wrap.find("[result-img]").css({width: rimgWidth + "px",height: options.result_img_height + "px",background: "url(" + img.src + ") top center no-repeat;background-size: 100% auto;background-origin:content-box;"}).css("border-radius", rimgWidth / 2 + "px / " + options.result_img_height / 2 + "px").removeClass("hide").addClass("show").addClass("animated").addClass(options.result_cover_img.animate);
            }, options.result_cover_img.duration);
            setTimeout(function() {
                result_show_wrap.find("[result-title]").removeClass("hide").addClass("show").text(resultObj.title).addClass("animated").addClass(options.result_title.animate);
            }, options.result_title.duration);
            setTimeout(function() {
                result_show_wrap.find("[result-wrapper]").css({height: clientHeight - (50 + 113 + 40 + 15 + 15 + options.result_img_height) + "px"});
                result_show_wrap.find("[result-desc]").text(resultObj.description).removeClass("hide").addClass("show").addClass("animated").addClass(options.result_desc.animate);
                setTimeout(function() {
                    var resul_wrapper = document.querySelector("[result-wrapper]");
                    var temp = new IScroll(resul_wrapper, {mouseWheel: true,tap: false,scrollbars: true,fadeScrollbars: true,interactiveScrollbars: false});
                }, 1200);
            }, options.result_desc.duration);
            setTimeout(function() {
                result_show_wrap.find("[result-btn]").removeClass("hide").addClass("show").addClass("animated").addClass(options.result_btn.animate);
            }, options.result_btn.duration);
        }
    }
    function answerAction(obj) {
        var data_results = obj.attr("data-results");
        if (!data_results) {
            return;
        }
        ;
        data_results = JSON.parse(data_results);
        for (var key in data_results) {
            answer_result[key] = parseInt(data_results[key]) + parseInt(answer_result[key]);
        }
        ;
        obj.css({"background-color": options.sel_answer_bgcolor});
    }
    function _getSliderHeight(clientHeight) {
        return -(clientHeight + clientHeight * (page_count - 2));
    }
    function _nextPage(content, dist, page_elment) {
        if (!content)
            return;
        var curPage = $(page_elment[page_count - 1]);
        content.addClass("transition");
        content.css('-webkit-transform', 'translate(0,' + dist + 'px)');
        content.css('transform', 'translate(0,' + dist + 'px)');
        if (page_count >= page_num)
            return;
        setTimeout(function() {
            content.removeClass("transition");
            setTimeout(function() {
                curPage.find("[main-img]").removeClass("hide").addClass("show").addClass("animated").addClass(options.main_cover_img.animate);
            }, options.main_cover_img.duration);
            setTimeout(function() {
                curPage.find("[main-title]").removeClass("hide").addClass("show").addClass("animated").addClass(options.main_title.animate);
            }, options.main_title.duration);
            setTimeout(function() {
                curPage.find("[main-answers]").removeClass("hide").addClass("show").addClass("animated").addClass(options.main_answers.animate);
                var li = curPage.find("[main-answers] > li");
                li.each(function() {
                    $(this).find("[answer-item]").height($(this).height());
                });
                answerIscrollArr[page_count - 2].refresh();
            }, options.main_answers.duration);
        }, options.next_page_time);
    }
    function _initIscroll(container_elment) {
        container_elment.find("[cover-wrapper]").css({height: clientHeight - (49 + 50 + container_elment.find("[cover-img]").height() + 15) + "px"});
        coverIscroll = new IScroll(document.querySelector("[cover-wrapper]"), {mouseWheel: true,tap: false,scrollbars: true,fadeScrollbars: true,interactiveScrollbars: false});
        var answers_wrapper = container_elment.find("[answers-wrapper]");
        for (var i = 0; i < answers_wrapper.length; i++) {
            var temp = new IScroll(answers_wrapper[i], {mouseWheel: true,tap: false,scrollbars: true,fadeScrollbars: true,interactiveScrollbars: false});
            answerIscrollArr.push(temp);
        }
        ;
    }
    function _initBgCoverImg(container_elment) {
        _loadBgImg(container_elment.find("[attr-full-page]"), options.bg_img);
        _loadCoverImg(container_elment.find("[cover-img]"), function(img_src, obj) {
            var imgObj = $(obj).find("img");
            imgObj.css({width: 100 + "%",height: "atuo"});
            imgObj.attr("src", img_src);
            var cover = container_elment.find("[attr-cover]");
            var h1 = cover.find("[cover-title]"), img = cover.find("[cover-img] > img"), desc = cover.find("[cover-desc]"), start = $("[cover-btn]");
            setTimeout(function() {
                img.removeClass("hide").addClass("show").addClass("animated").addClass(options.cover_cover_img.animate);
            }, options.cover_cover_img.duration);
            setTimeout(function() {
                h1.removeClass("hide").addClass("show").addClass('animated').addClass(options.cover_title.animate);
            }, options.cover_title.duration);
            setTimeout(function() {
                desc.removeClass("hide").addClass("show").addClass('animated').addClass(options.cover_desc.animate);
            }, options.cover_desc.duration);
            setTimeout(function() {
                start.removeClass("hide").addClass("show").addClass('animated').addClass(options.cover_btn.animate);
            }, options.cover_btn.duration);
            setTimeout(function() {
                coverIscroll.refresh();
            }, 1500);
        });
    }
    function _loadBgImg(obj, bg_src) {
        var img = new Image();
        img.src = bg_src;
        img.onload = function() {
            var temp = "background:url(" + img.src + ") top center no-repeat;background-size: 100% 100%;";
            obj.attr("style", temp);
        }
    }
    function _loadingImg(obj, callback) {
        var img = new Image();
        img.src = $(obj).attr("img-src");
        img.onload = function() {
            callback(obj);
        }
    }
    function _loadImg(imgsObj, callback) {
        if (typeof imgsObj == "undefined" || imgsObj == null) {
            return;
        }
        for (var i = 0; i < imgsObj.length; i++) {
            _loadingImg(imgsObj[i], callback);
        }
        ;
    }
    function _loadCoverImg(obj, callback) {
        var img = new Image();
        img.src = $(obj).attr("img-src");
        img.onload = function() {
            callback(img.src, obj);
        };
    }
    function _initOptions(opts) {
        for (var val in opts) {
            if (typeof opts[val] == "object") {
                for (var obj in opts[val]) {
                    options[val][obj] = opts[val][obj];
                }
            } else {
                options[val] = opts[val];
            }
        }
    }
    function _initAnswerResult(gdata) {
        var results = gdata.results;
        for (var i = 0; i < results.length; i++) {
            answer_result[results[i].id] = 0;
        }
        ;
    }
    function _assignDataToTpl(tplSel) {
        var poster_tpl = $(tplSel).html();
        var HTML = JTE.clear().assign('title', gdata.title).assign('img_src', gdata.img_src).assign('description', gdata.description).assign('imgWidth', gdata.imgWidth).assign('imgHeight', gdata.imgHeight).assign('questions', gdata.questions).execute(poster_tpl, 'quiz_poster');
        var tree = document.createElement('div');
        tree.innerHTML = HTML;
        return tree;
    }
    var orientationFlags = false;
    function _orientationChange() {
        switch (window.orientation) {
            case 0:
                if (orientationFlags) {
                    location.reload();
                    orientationFlags = false;
                }
                break;
            case -90:
                if (!orientationFlags) {
                    $(".orientation").removeClass("hide").add("show");
                    orientationFlags = true;
                }
                ;
                break;
            case 90:
                if (!orientationFlags) {
                    $(".orientation").removeClass("hide").add("show");
                    orientationFlags = true;
                }
                ;
                break;
            case 180:
                if (orientationFlags) {
                    location.reload();
                    orientationFlags = false;
                }
                break;
        }
        ;
    }
    ;
    window.WeittQuiz = {run: quizInit}
})(window);
