(() => {
	var __webpack_modules__ = {
			7757: (t, e, n) => {
				t.exports = n(5666)
			},
			7576: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				__webpack_require__.d(__webpack_exports__, {
					Ru: () => printInvoice
				});
				var _currency_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1911),
					_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8057),
					_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__),
					_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4501),
					_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__),
					INVOICE_ADD_DETAILS_AFTER_CUSTOMER_NAME_FILTER = "ddwcpos_invoice_add_details_after_customer_name_at_pos",
					INVOICE_ADD_DETAILS_BEFORE_TOTAL_FILTER = "ddwcpos_invoice_add_details_before_total",
					INVOICE_ADD_DETAILS_AFTER_CHANGE_FILTER = "ddwcpos_invoice_add_details_after_change",
					printInvoice = function printInvoice() {
						var order = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							print = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return function(dispatch, getState) {
							var currentState = getState(),
								outlet = currentState.outlet,
								settings = currentState.settings,
								logo_invoice = "${logo_invoice}",
								outlet_name = "${outlet_name}",
								order_id = "${order_id}",
								order_date = "${order_date}",
								customer_fname = "${customer_fname}",
								customer_lname = "${customer_lname}",
								customer_phone = "${customer_phone}",
								outlet_address1 = "${outlet_address1}",
								outlet_address2 = "${outlet_address2}",
								outlet_city = "${outlet_city}",
								outlet_state = "${outlet_state}",
								outlet_country = "${outlet_country}",
								outlet_postcode = "${outlet_postcode}",
								outlet_phone = "${outlet_phone}",
								outlet_email = "${outlet_email}",
								pro_name = "${pro_name}",
								pro_quantity = "${pro_quantity}",
								pro_unit_price = "${pro_unit_price}",
								pro_total = "${pro_total}",
								product_row = "${product_row}",
								sub_total = "${sub_total}",
								tax_label = "${tax_label}",
								order_tax = "${order_tax}",
								coupon_name = "${coupon_name}",
								coupon_amount = "${coupon_amount}",
								order_discount = "${order_discount}",
								order_total = "${order_total}",
								order_refunded = "${order_refunded}",
								tendered_total = "${tendered_total}",
								order_change = "${order_change}",
								tendered_payment_name = "${tendered_payment_name}",
								tendered_payment_amount = "${tendered_payment_amount}",
								table_name = "${table_name}",
								cashier_name = "${cashier_name}",
								total_quantity = 0;
							if (logo_invoice = ddwcposPOSObj.ddwcpos_configuration.logo_url, outlet_name = outlet.name, outlet_address1 = outlet.address1, outlet_address2 = outlet.address2, outlet_city = outlet.city, outlet_state = outlet.state, outlet_country = outlet.country, outlet_postcode = outlet.postcode, outlet_phone = outlet.phone, outlet_email = outlet.email, order)
								if (table_name = order.table && Object.keys(order.table).length ? order.table.name : "N/A", tendered_payment_name = "", tendered_payment_amount = "", order.payment_methods.length ? order.payment_methods.forEach((function(t, e) {
										tendered_payment_name += "<p>".concat(t.name, "</p>"), tendered_payment_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(t.amount, order.order_currency_symbol), "</p>")
									})) : (tendered_payment_name += "<p>".concat(order.payment_method_title, "</p>"), tendered_payment_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.tendered, order.order_currency_symbol), "</p>")), order_id = "#" + order.order_id, order_date = order.order_date, sub_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_subtotal, order.order_currency_symbol), order_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_total, order.order_currency_symbol), order_refunded = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_refunded, order.order_currency_symbol), order_change = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.change, order.order_currency_symbol), tendered_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.tendered, order.order_currency_symbol), pro_name = "", pro_unit_price = "", pro_quantity = "", pro_total = "", product_row = "<table><tbody>", order.products.forEach((function(t, e) {
										total_quantity += parseInt(t.quantity);
										var n = t.quantity;
										t.returned_quantity > 0 && (n += ' <span role="img" aria-label="undo" class="anticon anticon-undo"><svg viewBox="64 64 896 896" focusable="false" data-icon="undo" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"></path></svg></span>' + t.returned_quantity), pro_name = "<p>".concat(t.name, "</p>"), pro_unit_price = "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(t.uf, order.order_currency_symbol), "</p>"), pro_quantity = "<p>".concat(n, "</p>"), pro_total = "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(t.uf_total, order.order_currency_symbol), "</p>"), product_row += "<tr>\n                <td>".concat(pro_name, "</td>\n                <td>").concat(pro_unit_price, "</td>\n                <td>").concat(pro_quantity, "</td>\n                <td>").concat(pro_total, "</td>\n            </tr>")
									})), product_row += "</tbody></table>", "online" == order.order_type) {
									customer_fname = order.billing.fname, customer_lname = order.billing.lname, customer_phone = order.billing.phone, order_discount = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.discount, order.order_currency_symbol);
									var order_tax_lines = order.tax_lines;
									tax_label = "", order_tax = "", order_tax_lines.length > 0 && order_tax_lines.forEach((function(t) {
										tax_label += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tax", "ddwc-multipos"), " (").concat(t.label, ")</p>"), order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(t.total, order.order_currency_symbol), "</p>")
									})), coupon_name = "", coupon_amount = "", order.coupons.forEach((function(t) {
										coupon_name += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coupon", "ddwc-multipos"), " (").concat(t.code, ")</p>"), coupon_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-t.amount, order.order_currency_symbol), "</p>")
									}))
								} else if ("offline" == order.order_type) {
								customer_fname = order.billing.first_name, customer_lname = order.billing.last_name, customer_phone = order.billing.phone;
								var discount = order.discount;
								if (Object.keys(discount).length > 0)
									if ("fixed" == discount.type) var totaldiscount = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-parseFloat(discount.amount));
									else var totaldiscount = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-parseFloat(discount.amount * order.order_total / 100));
								else var totaldiscount = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(parseFloat(0));
								order_discount = totaldiscount;
								var _order_tax_lines = order.tax_lines;
								tax_label = "", order_tax = "", _order_tax_lines.length && _order_tax_lines.forEach((function(t) {
									tax_label += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tax", "ddwc-multipos"), " (").concat(t.label, ")</p>"), "yes" == ddwcposPOSObj.tax_type ? order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(0), "</p>") : order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(parseFloat(t.rate * order.order_subtotal / 100)), "</p>")
								})), coupon_name = "", coupon_amount = "", order.coupons && order.coupons.length > 0 && order.coupons.forEach((function(t) {
									coupon_name += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coupon", "ddwc-multipos"), " (").concat(t.code, ")</p>"), "fixed_cart" === t.type ? coupon_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-t.price), "</p>") : "percent" === t.type ? coupon_amount += "<p>".concat(-t.price, "%</p>") : coupon_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-t.price), "</p>")
								}))
							}
							cashier_name = ddwcposPOSObj.user.display_name;
							var pageWidth = settings.printer_width,
								pageHeight = settings.printer_height,
								pageMargin = settings.printer_margin,
								invoiceData = "",
								selectedInvoice = [];
							return outlet.invoice && (selectedInvoice = Object.values(ddwcposPOSObj.ddwcpos_configuration.invoices).filter((function(t) {
								return t.slug == outlet.invoice
							}))), invoiceData = selectedInvoice.length && selectedInvoice[0].html ? "<style>@page { size: ".concat(pageWidth, " ").concat(pageHeight, "; margin: ").concat(pageMargin, "; } ").concat(selectedInvoice[0].css, "</style>").concat(selectedInvoice[0].html) : "<style>@page { size: ".concat(pageWidth, " ").concat(pageHeight, "; margin: ").concat(pageMargin, "; } ").concat(ddwcposPOSObj.ddwcpos_configuration.invoice_css, "</style>").concat(ddwcposPOSObj.ddwcpos_configuration.invoice_html), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_AFTER_CUSTOMER_NAME_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_AFTER_CUSTOMER_NAME_FILTER, "", order, currentState)), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_BEFORE_TOTAL_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_BEFORE_TOTAL_FILTER, "", order, currentState)), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_AFTER_CHANGE_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_AFTER_CHANGE_FILTER, "", order, currentState)), invoiceData = eval("`" + invoiceData + "`"), print && openPrintWindow(invoiceData), invoiceData
						}
					},
					openPrintWindow = function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							var n = window.open();
							n.document.open(), n.document.clear(), n.document.writeln("<html ".concat(ddwcposPOSObj.ddwcpos_configuration.language_attributes, "><head><title></title>") + e), n.document.writeln("</head><body>"), n.document.writeln(t), n.document.writeln("</body></html>"), n.document.close(), n.addEventListener("load", (function() {
								setTimeout((function() {
									n.focus(), n.print()
								}), 500)
							}), !0)
						} else {
							var r = document.createElement("iframe");
							r.name = "frame1", document.body.appendChild(r);
							var o = r.contentWindow ? r.contentWindow : r.contentDocument.document ? r.contentDocument.document : r.contentDocument;
							o.document.open(), o.document.write("<html ".concat(ddwcposPOSObj.ddwcpos_configuration.language_attributes, "><head><title></title>") + e), o.document.write("</head><body>"), o.document.write(t), o.document.write("</body></html>"), o.document.close(), setTimeout((function() {
								window.frames.frame1.focus(), window.frames.frame1.print(), document.body.removeChild(r)
							}), 500)
						}
					}
			},
			1911: (t, e, n) => {
				"use strict";
				n.d(e, {
					F: () => l,
					R: () => m
				});
				var r = {
						currency: {
							symbol: "$",
							format: "%s%v",
							decimal: ".",
							thousand: ",",
							precision: 2,
							grouping: 3
						},
						number: {
							precision: 0,
							grouping: 3,
							thousand: ",",
							decimal: "."
						}
					},
					o = (Array.prototype.map, Array.isArray),
					i = Object.prototype.toString;

				function a(t, e, n, o, i, l) {
					if (s(t)) return map(t, (function(t) {
						return a(t, e, n, o, i, l)
					}));
					t = h(t);
					var m = p(d(e) ? e : {
							symbol: e,
							precision: n,
							thousand: o,
							decimal: i,
							format: l
						}, r.currency),
						_ = function(t) {
							var e = r.currency.format;
							"function" == typeof t && (t = t());
							if (u(t) && t.match("%v")) return {
								pos: t,
								neg: t.replace("-", "").replace("%v", "-%v"),
								zero: t
							};
							if (!t || !t.pos || !t.pos.match("%v")) return u(e) ? r.currency.format = {
								pos: e,
								neg: e.replace("%v", "-%v"),
								zero: e
							} : e;
							return t
						}(m.format);
					return (t > 0 ? _.pos : t < 0 ? _.neg : _.zero).replace("%s", m.symbol).replace("%v", f(Math.abs(t), c(m.precision), m.thousand, m.decimal))
				}

				function s(t) {
					return o ? o(t) : "[object Array]" === i.call(t)
				}

				function c(t, e) {
					return t = Math.round(Math.abs(t)), isNaN(t) ? e : t
				}
				var l = function(t, e) {
					e = c(e, r.number.precision);
					var n = Math.pow(10, e);
					return (Math.round(h(t) * n) / n).toFixed(e)
				};

				function u(t) {
					return !!("" === t || t && t.charCodeAt && t.substr)
				}

				function d(t) {
					return t && "[object Object]" === i.call(t)
				}

				function p(t, e) {
					var n;
					for (n in t = t || {}, e = e || {}) e.hasOwnProperty(n) && null == t[n] && (t[n] = e[n]);
					return t
				}
				var f = function t(e, n, o, i) {
						if (s(e)) return map(e, (function(e) {
							return t(e, n, o, i)
						}));
						e = h(e);
						var a = p(d(n) ? n : {
								precision: n,
								thousand: o,
								decimal: i
							}, r.number),
							u = c(a.precision),
							f = e < 0 ? "-" : "",
							m = parseInt(l(Math.abs(e || 0), u), 10) + "",
							_ = m.length > 3 ? m.length % 3 : 0;
						return f + (_ ? m.substr(0, _) + a.thousand : "") + m.substr(_).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (u ? a.decimal + l(Math.abs(e), u).split(".")[1] : "")
					},
					h = function t(e, n) {
						if (s(e)) return map(e, (function(e) {
							return t(e, n)
						}));
						if ("number" == typeof(e = e || 0)) return e;
						n = n || r.number.decimal;
						var o = new RegExp("[^0-9-" + n + "]", ["g"]),
							i = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(o, "").replace(n, "."));
						return isNaN(i) ? 0 : i
					};
				var m = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return a(t, {
						symbol: e || ddwcposPOSObj.currency_format_symbol,
						decimal: ddwcposPOSObj.currency_format_decimal_sep,
						thousand: ddwcposPOSObj.currency_format_thousand_sep,
						precision: ddwcposPOSObj.currency_format_num_decimals,
						format: ddwcposPOSObj.currency_format
					})
				}
			},
			9742: (t, e) => {
				"use strict";
				e.byteLength = function(t) {
					var e = c(t),
						n = e[0],
						r = e[1];
					return 3 * (n + r) / 4 - r
				}, e.toByteArray = function(t) {
					var e, n, i = c(t),
						a = i[0],
						s = i[1],
						l = new o(function(t, e, n) {
							return 3 * (e + n) / 4 - n
						}(0, a, s)),
						u = 0,
						d = s > 0 ? a - 4 : a;
					for (n = 0; n < d; n += 4) e = r[t.charCodeAt(n)] << 18 | r[t.charCodeAt(n + 1)] << 12 | r[t.charCodeAt(n + 2)] << 6 | r[t.charCodeAt(n + 3)], l[u++] = e >> 16 & 255, l[u++] = e >> 8 & 255, l[u++] = 255 & e;
					2 === s && (e = r[t.charCodeAt(n)] << 2 | r[t.charCodeAt(n + 1)] >> 4, l[u++] = 255 & e);
					1 === s && (e = r[t.charCodeAt(n)] << 10 | r[t.charCodeAt(n + 1)] << 4 | r[t.charCodeAt(n + 2)] >> 2, l[u++] = e >> 8 & 255, l[u++] = 255 & e);
					return l
				}, e.fromByteArray = function(t) {
					for (var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o; a < s; a += 16383) i.push(l(t, a, a + 16383 > s ? s : a + 16383));
					1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
					return i.join("")
				};
				for (var n = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) n[a] = i[a], r[i.charCodeAt(a)] = a;

				function c(t) {
					var e = t.length;
					if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var n = t.indexOf("=");
					return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
				}

				function l(t, e, r) {
					for (var o, i, a = [], s = e; s < r; s += 3) o = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
					return a.join("")
				}
				r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
			},
			4926: (t, e, n) => {
				"use strict";

				function r(t) {
					return t || (t = 0), new Promise((function(e) {
						return setTimeout(e, t)
					}))
				}

				function o() {
					return Math.random().toString(36).substring(2)
				}
				n.r(e), n.d(e, {
					BroadcastChannel: () => T,
					beLeader: () => $,
					clearNodeFolder: () => N,
					createLeaderElection: () => Q,
					enforceOptions: () => A
				});
				var i = 0,
					a = 0;

				function s() {
					var t = (new Date).getTime();
					return t === i ? 1e3 * t + ++a : (i = t, a = 0, 1e3 * t)
				}
				var c = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
				const l = {
					create: function(t) {
						var e = {
							messagesCallback: null,
							bc: new BroadcastChannel(t),
							subFns: []
						};
						return e.bc.onmessage = function(t) {
							e.messagesCallback && e.messagesCallback(t.data)
						}, e
					},
					close: function(t) {
						t.bc.close(), t.subFns = []
					},
					onMessage: function(t, e) {
						t.messagesCallback = e
					},
					postMessage: function(t, e) {
						try {
							return t.bc.postMessage(e, !1), Promise.resolve()
						} catch (t) {
							return Promise.reject(t)
						}
					},
					canBeUsed: function() {
						if (c && "undefined" == typeof window) return !1;
						if ("function" == typeof BroadcastChannel) {
							if (BroadcastChannel._pubkey) throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
							return !0
						}
						return !1
					},
					type: "native",
					averageResponseTime: function() {
						return 150
					},
					microSeconds: s
				};
				var u = function() {
					function t(t) {
						this.ttl = t, this.set = new Set, this.timeMap = new Map
					}
					return t.prototype.has = function(t) {
						return this.set.has(t)
					}, t.prototype.add = function(t) {
						var e = this;
						this.timeMap.set(t, d()), this.set.add(t), setTimeout((function() {
							! function(t) {
								var e = d() - t.ttl,
									n = t.set[Symbol.iterator]();
								for (;;) {
									var r = n.next().value;
									if (!r) return;
									if (!(t.timeMap.get(r) < e)) return;
									t.timeMap.delete(r), t.set.delete(r)
								}
							}(e)
						}), 0)
					}, t.prototype.clear = function() {
						this.set.clear(), this.timeMap.clear()
					}, t
				}();

				function d() {
					return (new Date).getTime()
				}

				function p() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						e = JSON.parse(JSON.stringify(t));
					return void 0 === e.webWorkerSupport && (e.webWorkerSupport = !0), e.idb || (e.idb = {}), e.idb.ttl || (e.idb.ttl = 45e3), e.idb.fallbackInterval || (e.idb.fallbackInterval = 150), t.idb && "function" == typeof t.idb.onclose && (e.idb.onclose = t.idb.onclose), e.localstorage || (e.localstorage = {}), e.localstorage.removeTimeout || (e.localstorage.removeTimeout = 6e4), t.methods && (e.methods = t.methods), e.node || (e.node = {}), e.node.ttl || (e.node.ttl = 12e4), void 0 === e.node.useFastPath && (e.node.useFastPath = !0), e
				}

				function f() {
					if ("undefined" != typeof indexedDB) return indexedDB;
					if ("undefined" != typeof window) {
						if (void 0 !== window.mozIndexedDB) return window.mozIndexedDB;
						if (void 0 !== window.webkitIndexedDB) return window.webkitIndexedDB;
						if (void 0 !== window.msIndexedDB) return window.msIndexedDB
					}
					return !1
				}

				function h(t, e) {
					var n = t.transaction("messages").objectStore("messages"),
						r = [];
					return new Promise((function(t) {
						(function() {
							try {
								var t = IDBKeyRange.bound(e + 1, 1 / 0);
								return n.openCursor(t)
							} catch (t) {
								return n.openCursor()
							}
						}()).onsuccess = function(n) {
							var o = n.target.result;
							o ? o.value.id < e + 1 ? o.continue(e + 1) : (r.push(o.value), o.continue()) : t(r)
						}
					}))
				}

				function m(t, e) {
					return function(t, e) {
						var n = (new Date).getTime() - e,
							r = t.transaction("messages").objectStore("messages"),
							o = [];
						return new Promise((function(t) {
							r.openCursor().onsuccess = function(e) {
								var r = e.target.result;
								if (r) {
									var i = r.value;
									if (!(i.time < n)) return void t(o);
									o.push(i), r.continue()
								} else t(o)
							}
						}))
					}(t, e).then((function(e) {
						return Promise.all(e.map((function(e) {
							return function(t, e) {
								var n = t.transaction(["messages"], "readwrite").objectStore("messages").delete(e);
								return new Promise((function(t) {
									n.onsuccess = function() {
										return t()
									}
								}))
							}(t, e.id)
						})))
					}))
				}

				function _(t) {
					return t.closed ? Promise.resolve() : t.messagesCallback ? h(t.db, t.lastCursorId).then((function(e) {
						return e.filter((function(t) {
							return !!t
						})).map((function(e) {
							return e.id > t.lastCursorId && (t.lastCursorId = e.id), e
						})).filter((function(e) {
							return function(t, e) {
								return t.uuid !== e.uuid && (!e.eMIs.has(t.id) && !(t.data.time < e.messagesCallbackTime))
							}(e, t)
						})).sort((function(t, e) {
							return t.time - e.time
						})).forEach((function(e) {
							t.messagesCallback && (t.eMIs.add(e.id), t.messagesCallback(e.data))
						})), Promise.resolve()
					})) : Promise.resolve()
				}
				const g = {
					create: function(t, e) {
						return e = p(e),
							function(t) {
								var e = "pubkey.broadcast-channel-0-" + t,
									n = f().open(e, 1);
								return n.onupgradeneeded = function(t) {
									t.target.result.createObjectStore("messages", {
										keyPath: "id",
										autoIncrement: !0
									})
								}, new Promise((function(t, e) {
									n.onerror = function(t) {
										return e(t)
									}, n.onsuccess = function() {
										t(n.result)
									}
								}))
							}(t).then((function(n) {
								var i = {
									closed: !1,
									lastCursorId: 0,
									channelName: t,
									options: e,
									uuid: o(),
									eMIs: new u(2 * e.idb.ttl),
									writeBlockPromise: Promise.resolve(),
									messagesCallback: null,
									readQueuePromises: [],
									db: n
								};
								return n.onclose = function() {
										i.closed = !0, e.idb.onclose && e.idb.onclose()
									},
									function t(e) {
										if (e.closed) return;
										_(e).then((function() {
											return r(e.options.idb.fallbackInterval)
										})).then((function() {
											return t(e)
										}))
									}(i), i
							}))
					},
					close: function(t) {
						t.closed = !0, t.db.close()
					},
					onMessage: function(t, e, n) {
						t.messagesCallbackTime = n, t.messagesCallback = e, _(t)
					},
					postMessage: function(t, e) {
						return t.writeBlockPromise = t.writeBlockPromise.then((function() {
							return function(t, e, n) {
								var r = {
										uuid: e,
										time: (new Date).getTime(),
										data: n
									},
									o = t.transaction(["messages"], "readwrite");
								return new Promise((function(t, e) {
									o.oncomplete = function() {
										return t()
									}, o.onerror = function(t) {
										return e(t)
									}, o.objectStore("messages").add(r)
								}))
							}(t.db, t.uuid, e)
						})).then((function() {
							var e, n;
							0 === (e = 0, n = 10, Math.floor(Math.random() * (n - e + 1) + e)) && m(t.db, t.options.idb.ttl)
						})), t.writeBlockPromise
					},
					canBeUsed: function() {
						return !c && !!f()
					},
					type: "idb",
					averageResponseTime: function(t) {
						return 2 * t.idb.fallbackInterval
					},
					microSeconds: s
				};

				function v() {
					var t;
					if ("undefined" == typeof window) return null;
					try {
						t = window.localStorage, t = window["ie8-eventlistener/storage"] || window.localStorage
					} catch (t) {}
					return t
				}

				function y(t) {
					return "pubkey.broadcastChannel-" + t
				}

				function w() {
					if (c) return !1;
					var t = v();
					if (!t) return !1;
					try {
						var e = "__broadcastchannel_check";
						t.setItem(e, "works"), t.removeItem(e)
					} catch (t) {
						return !1
					}
					return !0
				}
				const b = {
					create: function(t, e) {
						if (e = p(e), !w()) throw new Error("BroadcastChannel: localstorage cannot be used");
						var n = o(),
							r = new u(e.localstorage.removeTimeout),
							i = {
								channelName: t,
								uuid: n,
								eMIs: r
							};
						return i.listener = function(t, e) {
							var n = y(t),
								r = function(t) {
									t.key === n && e(JSON.parse(t.newValue))
								};
							return window.addEventListener("storage", r), r
						}(t, (function(t) {
							i.messagesCallback && t.uuid !== n && t.token && !r.has(t.token) && (t.data.time && t.data.time < i.messagesCallbackTime || (r.add(t.token), i.messagesCallback(t.data)))
						})), i
					},
					close: function(t) {
						var e;
						e = t.listener, window.removeEventListener("storage", e)
					},
					onMessage: function(t, e, n) {
						t.messagesCallbackTime = n, t.messagesCallback = e
					},
					postMessage: function(t, e) {
						return new Promise((function(n) {
							r().then((function() {
								var r = y(t.channelName),
									i = {
										token: o(),
										time: (new Date).getTime(),
										data: e,
										uuid: t.uuid
									},
									a = JSON.stringify(i);
								v().setItem(r, a);
								var s = document.createEvent("Event");
								s.initEvent("storage", !0, !0), s.key = r, s.newValue = a, window.dispatchEvent(s), n()
							}))
						}))
					},
					canBeUsed: w,
					type: "localstorage",
					averageResponseTime: function() {
						var t = navigator.userAgent.toLowerCase();
						return t.includes("safari") && !t.includes("chrome") ? 240 : 120
					},
					microSeconds: s
				};
				var E = s,
					O = new Set;
				const S = {
					create: function(t) {
						var e = {
							name: t,
							messagesCallback: null
						};
						return O.add(e), e
					},
					close: function(t) {
						O.delete(t)
					},
					onMessage: function(t, e) {
						t.messagesCallback = e
					},
					postMessage: function(t, e) {
						return new Promise((function(n) {
							return setTimeout((function() {
								Array.from(O).filter((function(e) {
									return e.name === t.name
								})).filter((function(e) {
									return e !== t
								})).filter((function(t) {
									return !!t.messagesCallback
								})).forEach((function(t) {
									return t.messagesCallback(e)
								})), n()
							}), 5)
						}))
					},
					canBeUsed: function() {
						return !0
					},
					type: "simulate",
					averageResponseTime: function() {
						return 5
					},
					microSeconds: E
				};
				var C = [l, g, b];
				if (c) {
					var x = n(8211);
					"function" == typeof x.canBeUsed && C.push(x)
				}

				function P(t) {
					var e = [].concat(t.methods, C).filter(Boolean);
					if (t.type) {
						if ("simulate" === t.type) return S;
						var n = e.find((function(e) {
							return e.type === t.type
						}));
						if (n) return n;
						throw new Error("method-type " + t.type + " not found")
					}
					t.webWorkerSupport || c || (e = e.filter((function(t) {
						return "idb" !== t.type
					})));
					var r = e.find((function(t) {
						return t.canBeUsed()
					}));
					if (r) return r;
					throw new Error("No useable methode found:" + JSON.stringify(C.map((function(t) {
						return t.type
					}))))
				}
				var k, T = function(t, e) {
					var n, r, o;
					this.name = t, k && (e = k), this.options = p(e), this.method = P(this.options), this._iL = !1, this._onML = null, this._addEL = {
						message: [],
						internal: []
					}, this._uMP = new Set, this._befC = [], this._prepP = null, r = (n = this).method.create(n.name, n.options), (o = r) && "function" == typeof o.then ? (n._prepP = r, r.then((function(t) {
						n._state = t
					}))) : n._state = r
				};

				function N(t) {
					var e = P(t = p(t));
					return "node" === e.type ? e.clearNodeFolder().then((function() {
						return !0
					})) : Promise.resolve(!1)
				}

				function A(t) {
					k = t
				}

				function D(t, e, n) {
					var r = {
						time: t.method.microSeconds(),
						type: e,
						data: n
					};
					return (t._prepP ? t._prepP : Promise.resolve()).then((function() {
						var e = t.method.postMessage(t._state, r);
						return t._uMP.add(e), e.catch().then((function() {
							return t._uMP.delete(e)
						})), e
					}))
				}

				function R(t) {
					return t._addEL.message.length > 0 || t._addEL.internal.length > 0
				}

				function I(t, e, n) {
					t._addEL[e].push(n),
						function(t) {
							if (!t._iL && R(t)) {
								var e = function(e) {
										t._addEL[e.type].forEach((function(t) {
											e.time >= t.time && t.fn(e.data)
										}))
									},
									n = t.method.microSeconds();
								t._prepP ? t._prepP.then((function() {
									t._iL = !0, t.method.onMessage(t._state, e, n)
								})) : (t._iL = !0, t.method.onMessage(t._state, e, n))
							}
						}(t)
				}

				function L(t, e, n) {
					t._addEL[e] = t._addEL[e].filter((function(t) {
							return t !== n
						})),
						function(t) {
							if (t._iL && !R(t)) {
								t._iL = !1;
								var e = t.method.microSeconds();
								t.method.onMessage(t._state, null, e)
							}
						}(t)
				}
				T._pubkey = !0, T.prototype = {
					postMessage: function(t) {
						if (this.closed) throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
						return D(this, "message", t)
					},
					postInternal: function(t) {
						return D(this, "internal", t)
					},
					set onmessage(t) {
						var e = {
							time: this.method.microSeconds(),
							fn: t
						};
						L(this, "message", this._onML), t && "function" == typeof t ? (this._onML = e, I(this, "message", e)) : this._onML = null
					},
					addEventListener: function(t, e) {
						I(this, t, {
							time: this.method.microSeconds(),
							fn: e
						})
					},
					removeEventListener: function(t, e) {
						L(this, t, this._addEL[t].find((function(t) {
							return t.fn === e
						})))
					},
					close: function() {
						var t = this;
						if (!this.closed) {
							this.closed = !0;
							var e = this._prepP ? this._prepP : Promise.resolve();
							return this._onML = null, this._addEL.message = [], e.then((function() {
								return Promise.all(Array.from(t._uMP))
							})).then((function() {
								return Promise.all(t._befC.map((function(t) {
									return t()
								})))
							})).then((function() {
								return t.method.close(t._state)
							}))
						}
					},
					get type() {
						return this.method.type
					},
					get isClosed() {
						return this.closed
					}
				};
				var M = n(5643),
					q = n.n(M);
				const j = {
					add: function(t) {
						if ("function" == typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
						else {
							if ("function" != typeof window.addEventListener) return;
							window.addEventListener("beforeunload", (function() {
								t()
							}), !0), window.addEventListener("unload", (function() {
								t()
							}), !0)
						}
					}
				};
				var B = n(199),
					F = n.n(B),
					H = q() ? F() : j,
					U = new Set,
					V = !1;

				function z() {
					var t = [];
					return U.forEach((function(e) {
						t.push(e()), U.delete(e)
					})), Promise.all(t)
				}
				const W = {
					add: function(t) {
						if (V || (V = !0, H.add(z)), "function" != typeof t) throw new Error("Listener is no function");
						return U.add(t), {
							remove: function() {
								return U.delete(t)
							},
							run: function() {
								return U.delete(t), t()
							}
						}
					},
					runAll: z,
					removeAll: function() {
						U.clear()
					},
					getSize: function() {
						return U.size
					}
				};
				var G = function(t, e) {
					this._channel = t, this._options = e, this.isLeader = !1, this.isDead = !1, this.token = o(), this._isApl = !1, this._reApply = !1, this._unl = [], this._lstns = [], this._invs = [], this._dpL = function() {}, this._dpLC = !1
				};

				function K(t, e) {
					var n = {
						context: "leader",
						action: e,
						token: t.token
					};
					return t._channel.postInternal(n)
				}

				function $(t) {
					t.isLeader = !0;
					var e = W.add((function() {
						return t.die()
					}));
					t._unl.push(e);
					var n = function(e) {
						"leader" === e.context && "apply" === e.action && K(t, "tell"), "leader" !== e.context || "tell" !== e.action || t._dpLC || (t._dpLC = !0, t._dpL(), K(t, "tell"))
					};
					return t._channel.addEventListener("internal", n), t._lstns.push(n), K(t, "tell")
				}

				function Q(t, e) {
					if (t._leaderElector) throw new Error("BroadcastChannel already has a leader-elector");
					e = function(t, e) {
						return t || (t = {}), (t = JSON.parse(JSON.stringify(t))).fallbackInterval || (t.fallbackInterval = 3e3), t.responseTime || (t.responseTime = e.method.averageResponseTime(e.options)), t
					}(e, t);
					var n = new G(t, e);
					return t._befC.push((function() {
						return n.die()
					})), t._leaderElector = n, n
				}
				G.prototype = {
					applyOnce: function() {
						var t = this;
						if (this.isLeader) return Promise.resolve(!1);
						if (this.isDead) return Promise.resolve(!1);
						if (this._isApl) return this._reApply = !0, Promise.resolve(!1);
						this._isApl = !0;
						var e = !1,
							n = [],
							o = function(r) {
								"leader" === r.context && r.token != t.token && (n.push(r), "apply" === r.action && r.token > t.token && (e = !0), "tell" === r.action && (e = !0))
							};
						return this._channel.addEventListener("internal", o), K(this, "apply").then((function() {
							return r(t._options.responseTime)
						})).then((function() {
							return e ? Promise.reject(new Error) : K(t, "apply")
						})).then((function() {
							return r(t._options.responseTime)
						})).then((function() {
							return e ? Promise.reject(new Error) : K(t)
						})).then((function() {
							return $(t)
						})).then((function() {
							return !0
						})).catch((function() {
							return !1
						})).then((function(e) {
							return t._channel.removeEventListener("internal", o), t._isApl = !1, !e && t._reApply ? (t._reApply = !1, t.applyOnce()) : e
						}))
					},
					awaitLeadership: function() {
						var t;
						return this._aLP || (this._aLP = (t = this).isLeader ? Promise.resolve() : new Promise((function(e) {
							var n = !1;

							function r() {
								n || (n = !0, clearInterval(o), t._channel.removeEventListener("internal", i), e(!0))
							}
							t.applyOnce().then((function() {
								t.isLeader && r()
							}));
							var o = setInterval((function() {
								t.applyOnce().then((function() {
									t.isLeader && r()
								}))
							}), t._options.fallbackInterval);
							t._invs.push(o);
							var i = function(e) {
								"leader" === e.context && "death" === e.action && t.applyOnce().then((function() {
									t.isLeader && r()
								}))
							};
							t._channel.addEventListener("internal", i), t._lstns.push(i)
						}))), this._aLP
					},
					set onduplicate(t) {
						this._dpL = t
					},
					die: function() {
						var t = this;
						if (!this.isDead) return this.isDead = !0, this._lstns.forEach((function(e) {
							return t._channel.removeEventListener("internal", e)
						})), this._invs.forEach((function(t) {
							return clearInterval(t)
						})), this._unl.forEach((function(t) {
							t.remove()
						})), K(this, "death")
					}
				}
			},
			8764: (t, e, n) => {
				"use strict";
				/*!
				 * The buffer module from node.js, for the browser.
				 *
				 * @author   Feross Aboukhadijeh <https://feross.org>
				 * @license  MIT
				 */
				var r = n(9742),
					o = n(645),
					i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
				e.Buffer = s, e.SlowBuffer = function(t) {
					+t != t && (t = 0);
					return s.alloc(+t)
				}, e.INSPECT_MAX_BYTES = 50;

				function a(t) {
					if (t > 2147483647) throw new RangeError('The value "' + t + '" is invalid for option "size"');
					var e = new Uint8Array(t);
					return Object.setPrototypeOf(e, s.prototype), e
				}

				function s(t, e, n) {
					if ("number" == typeof t) {
						if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
						return u(t)
					}
					return c(t, e, n)
				}

				function c(t, e, n) {
					if ("string" == typeof t) return function(t, e) {
						"string" == typeof e && "" !== e || (e = "utf8");
						if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
						var n = 0 | h(t, e),
							r = a(n),
							o = r.write(t, e);
						o !== n && (r = r.slice(0, o));
						return r
					}(t, e);
					if (ArrayBuffer.isView(t)) return function(t) {
						if (B(t, Uint8Array)) {
							var e = new Uint8Array(t);
							return p(e.buffer, e.byteOffset, e.byteLength)
						}
						return d(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (B(t, ArrayBuffer) || t && B(t.buffer, ArrayBuffer)) return p(t, e, n);
					if ("undefined" != typeof SharedArrayBuffer && (B(t, SharedArrayBuffer) || t && B(t.buffer, SharedArrayBuffer))) return p(t, e, n);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					var r = t.valueOf && t.valueOf();
					if (null != r && r !== t) return s.from(r, e, n);
					var o = function(t) {
						if (s.isBuffer(t)) {
							var e = 0 | f(t.length),
								n = a(e);
							return 0 === n.length || t.copy(n, 0, 0, e), n
						}
						if (void 0 !== t.length) return "number" != typeof t.length || F(t.length) ? a(0) : d(t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return d(t.data)
					}(t);
					if (o) return o;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, n);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
				}

				function l(t) {
					if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
					if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
				}

				function u(t) {
					return l(t), a(t < 0 ? 0 : 0 | f(t))
				}

				function d(t) {
					for (var e = t.length < 0 ? 0 : 0 | f(t.length), n = a(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
					return n
				}

				function p(t, e, n) {
					if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
					if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					var r;
					return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, s.prototype), r
				}

				function f(t) {
					if (t >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
					return 0 | t
				}

				function h(t, e) {
					if (s.isBuffer(t)) return t.length;
					if (ArrayBuffer.isView(t) || B(t, ArrayBuffer)) return t.byteLength;
					if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
					var n = t.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === n) return 0;
					for (var o = !1;;) switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
							return M(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return q(t).length;
						default:
							if (o) return r ? -1 : M(t).length;
							e = ("" + e).toLowerCase(), o = !0
					}
				}

				function m(t, e, n) {
					var r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return k(this, e, n);
						case "utf8":
						case "utf-8":
							return C(this, e, n);
						case "ascii":
							return x(this, e, n);
						case "latin1":
						case "binary":
							return P(this, e, n);
						case "base64":
							return S(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return T(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}

				function _(t, e, n) {
					var r = t[e];
					t[e] = t[n], t[n] = r
				}

				function g(t, e, n, r, o) {
					if (0 === t.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
						if (o) return -1;
						n = t.length - 1
					} else if (n < 0) {
						if (!o) return -1;
						n = 0
					}
					if ("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, o);
					if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, o);
					throw new TypeError("val must be string, number or Buffer")
				}

				function v(t, e, n, r, o) {
					var i, a = 1,
						s = t.length,
						c = e.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (t.length < 2 || e.length < 2) return -1;
						a = 2, s /= 2, c /= 2, n /= 2
					}

					function l(t, e) {
						return 1 === a ? t[e] : t.readUInt16BE(e * a)
					}
					if (o) {
						var u = -1;
						for (i = n; i < s; i++)
							if (l(t, i) === l(e, -1 === u ? 0 : i - u)) {
								if (-1 === u && (u = i), i - u + 1 === c) return u * a
							} else - 1 !== u && (i -= i - u), u = -1
					} else
						for (n + c > s && (n = s - c), i = n; i >= 0; i--) {
							for (var d = !0, p = 0; p < c; p++)
								if (l(t, i + p) !== l(e, p)) {
									d = !1;
									break
								} if (d) return i
						}
					return -1
				}

				function y(t, e, n, r) {
					n = Number(n) || 0;
					var o = t.length - n;
					r ? (r = Number(r)) > o && (r = o) : r = o;
					var i = e.length;
					r > i / 2 && (r = i / 2);
					for (var a = 0; a < r; ++a) {
						var s = parseInt(e.substr(2 * a, 2), 16);
						if (F(s)) return a;
						t[n + a] = s
					}
					return a
				}

				function w(t, e, n, r) {
					return j(M(e, t.length - n), t, n, r)
				}

				function b(t, e, n, r) {
					return j(function(t) {
						for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
						return e
					}(e), t, n, r)
				}

				function E(t, e, n, r) {
					return j(q(e), t, n, r)
				}

				function O(t, e, n, r) {
					return j(function(t, e) {
						for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
						return i
					}(e, t.length - n), t, n, r)
				}

				function S(t, e, n) {
					return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
				}

				function C(t, e, n) {
					n = Math.min(t.length, n);
					for (var r = [], o = e; o < n;) {
						var i, a, s, c, l = t[o],
							u = null,
							d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
						if (o + d <= n) switch (d) {
							case 1:
								l < 128 && (u = l);
								break;
							case 2:
								128 == (192 & (i = t[o + 1])) && (c = (31 & l) << 6 | 63 & i) > 127 && (u = c);
								break;
							case 3:
								i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (c = (15 & l) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (u = c);
								break;
							case 4:
								i = t[o + 1], a = t[o + 2], s = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (u = c)
						}
						null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), o += d
					}
					return function(t) {
						var e = t.length;
						if (e <= 4096) return String.fromCharCode.apply(String, t);
						var n = "",
							r = 0;
						for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
						return n
					}(r)
				}
				e.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
					try {
						var t = new Uint8Array(1),
							e = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
					} catch (t) {
						return !1
					}
				}(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.buffer
					}
				}), Object.defineProperty(s.prototype, "offset", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.byteOffset
					}
				}), s.poolSize = 8192, s.from = function(t, e, n) {
					return c(t, e, n)
				}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, n) {
					return function(t, e, n) {
						return l(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof n ? a(t).fill(e, n) : a(t).fill(e) : a(t)
					}(t, e, n)
				}, s.allocUnsafe = function(t) {
					return u(t)
				}, s.allocUnsafeSlow = function(t) {
					return u(t)
				}, s.isBuffer = function(t) {
					return null != t && !0 === t._isBuffer && t !== s.prototype
				}, s.compare = function(t, e) {
					if (B(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), B(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (t === e) return 0;
					for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
						if (t[o] !== e[o]) {
							n = t[o], r = e[o];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, s.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, s.concat = function(t, e) {
					if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return s.alloc(0);
					var n;
					if (void 0 === e)
						for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
					var r = s.allocUnsafe(e),
						o = 0;
					for (n = 0; n < t.length; ++n) {
						var i = t[n];
						if (B(i, Uint8Array)) o + i.length > r.length ? s.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o);
						else {
							if (!s.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
							i.copy(r, o)
						}
						o += i.length
					}
					return r
				}, s.byteLength = h, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
					var t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var e = 0; e < t; e += 2) _(this, e, e + 1);
					return this
				}, s.prototype.swap32 = function() {
					var t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var e = 0; e < t; e += 4) _(this, e, e + 3), _(this, e + 1, e + 2);
					return this
				}, s.prototype.swap64 = function() {
					var t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var e = 0; e < t; e += 8) _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);
					return this
				}, s.prototype.toString = function() {
					var t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : m.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
					if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === s.compare(this, t)
				}, s.prototype.inspect = function() {
					var t = "",
						n = e.INSPECT_MAX_BYTES;
					return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">"
				}, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(t, e, n, r, o) {
					if (B(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
					if (r >= o && e >= n) return 0;
					if (r >= o) return -1;
					if (e >= n) return 1;
					if (this === t) return 0;
					for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), c = Math.min(i, a), l = this.slice(r, o), u = t.slice(e, n), d = 0; d < c; ++d)
						if (l[d] !== u[d]) {
							i = l[d], a = u[d];
							break
						} return i < a ? -1 : a < i ? 1 : 0
				}, s.prototype.includes = function(t, e, n) {
					return -1 !== this.indexOf(t, e, n)
				}, s.prototype.indexOf = function(t, e, n) {
					return g(this, t, e, n, !0)
				}, s.prototype.lastIndexOf = function(t, e, n) {
					return g(this, t, e, n, !1)
				}, s.prototype.write = function(t, e, n, r) {
					if (void 0 === e) r = "utf8", n = this.length, e = 0;
					else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var o = this.length - e;
					if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var i = !1;;) switch (r) {
						case "hex":
							return y(this, t, e, n);
						case "utf8":
						case "utf-8":
							return w(this, t, e, n);
						case "ascii":
						case "latin1":
						case "binary":
							return b(this, t, e, n);
						case "base64":
							return E(this, t, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return O(this, t, e, n);
						default:
							if (i) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), i = !0
					}
				}, s.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};

				function x(t, e, n) {
					var r = "";
					n = Math.min(t.length, n);
					for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
					return r
				}

				function P(t, e, n) {
					var r = "";
					n = Math.min(t.length, n);
					for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
					return r
				}

				function k(t, e, n) {
					var r = t.length;
					(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
					for (var o = "", i = e; i < n; ++i) o += H[t[i]];
					return o
				}

				function T(t, e, n) {
					for (var r = t.slice(e, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
					return o
				}

				function N(t, e, n) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function A(t, e, n, r, o, i) {
					if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
					if (n + r > t.length) throw new RangeError("Index out of range")
				}

				function D(t, e, n, r, o, i) {
					if (n + r > t.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function R(t, e, n, r, i) {
					return e = +e, n >>>= 0, i || D(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
				}

				function I(t, e, n, r, i) {
					return e = +e, n >>>= 0, i || D(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
				}
				s.prototype.slice = function(t, e) {
					var n = this.length;
					(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
					var r = this.subarray(t, e);
					return Object.setPrototypeOf(r, s.prototype), r
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
					return r
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
					return r
				}, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, e) {
					return t >>>= 0, e || N(t, 1, this.length), this[t]
				}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, e) {
					return t >>>= 0, e || N(t, 2, this.length), this[t] | this[t + 1] << 8
				}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, e) {
					return t >>>= 0, e || N(t, 2, this.length), this[t] << 8 | this[t + 1]
				}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
				}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
				}, s.prototype.readIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
					return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
				}, s.prototype.readIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
					return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
				}, s.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, s.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || N(t, 2, this.length);
					var n = this[t] | this[t + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || N(t, 2, this.length);
					var n = this[t + 1] | this[t] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, s.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, s.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), o.read(this, t, !0, 23, 4)
				}, s.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), o.read(this, t, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || N(t, 8, this.length), o.read(this, t, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || N(t, 8, this.length), o.read(this, t, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, n, r) {
					(t = +t, e >>>= 0, n >>>= 0, r) || A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
					var o = 1,
						i = 0;
					for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
					return e + n
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, n, r) {
					(t = +t, e >>>= 0, n >>>= 0, r) || A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
					var o = n - 1,
						i = 1;
					for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
					return e + n
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						A(this, t, e, n, o - 1, -o)
					}
					var i = 0,
						a = 1,
						s = 0;
					for (this[e] = 255 & t; ++i < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
					return e + n
				}, s.prototype.writeIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						A(this, t, e, n, o - 1, -o)
					}
					var i = n - 1,
						a = 1,
						s = 0;
					for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
					return e + n
				}, s.prototype.writeInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, s.prototype.writeInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, s.prototype.writeInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || A(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeFloatLE = function(t, e, n) {
					return R(this, t, e, !0, n)
				}, s.prototype.writeFloatBE = function(t, e, n) {
					return R(this, t, e, !1, n)
				}, s.prototype.writeDoubleLE = function(t, e, n) {
					return I(this, t, e, !0, n)
				}, s.prototype.writeDoubleBE = function(t, e, n) {
					return I(this, t, e, !1, n)
				}, s.prototype.copy = function(t, e, n, r) {
					if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
					if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
					var o = r - n;
					return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), o
				}, s.prototype.fill = function(t, e, n, r) {
					if ("string" == typeof t) {
						if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === t.length) {
							var o = t.charCodeAt(0);
							("utf8" === r && o < 128 || "latin1" === r) && (t = o)
						}
					} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
					if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
					if (n <= e) return this;
					var i;
					if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
						for (i = e; i < n; ++i) this[i] = t;
					else {
						var a = s.isBuffer(t) ? t : s.from(t, r),
							c = a.length;
						if (0 === c) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
						for (i = 0; i < n - e; ++i) this[i + e] = a[i % c]
					}
					return this
				};
				var L = /[^+/0-9A-Za-z-_]/g;

				function M(t, e) {
					var n;
					e = e || 1 / 0;
					for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
						if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
							if (!o) {
								if (n > 56319) {
									(e -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								if (a + 1 === r) {
									(e -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								o = n;
								continue
							}
							if (n < 56320) {
								(e -= 3) > -1 && i.push(239, 191, 189), o = n;
								continue
							}
							n = 65536 + (o - 55296 << 10 | n - 56320)
						} else o && (e -= 3) > -1 && i.push(239, 191, 189);
						if (o = null, n < 128) {
							if ((e -= 1) < 0) break;
							i.push(n)
						} else if (n < 2048) {
							if ((e -= 2) < 0) break;
							i.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((e -= 3) < 0) break;
							i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((e -= 4) < 0) break;
							i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return i
				}

				function q(t) {
					return r.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(L, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function j(t, e, n, r) {
					for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
					return o
				}

				function B(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function F(t) {
					return t != t
				}
				var H = function() {
					for (var t = new Array(256), e = 0; e < 16; ++e)
						for (var n = 16 * e, r = 0; r < 16; ++r) t[n + r] = "0123456789abcdef" [e] + "0123456789abcdef" [r];
					return t
				}()
			},
			4184: (t, e) => {
				var n;
				/*!
				  Copyright (c) 2017 Jed Watson.
				  Licensed under the MIT License (MIT), see
				  http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var r = {}.hasOwnProperty;

					function o() {
						for (var t = [], e = 0; e < arguments.length; e++) {
							var n = arguments[e];
							if (n) {
								var i = typeof n;
								if ("string" === i || "number" === i) t.push(n);
								else if (Array.isArray(n) && n.length) {
									var a = o.apply(null, n);
									a && t.push(a)
								} else if ("object" === i)
									for (var s in n) r.call(n, s) && n[s] && t.push(s)
							}
						}
						return t.join(" ")
					}
					t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() {
						return o
					}.apply(e, [])) || (t.exports = n)
				}()
			},
			5643: t => {
				t.exports = !1
			},
			7187: t => {
				"use strict";
				var e, n = "object" == typeof Reflect ? Reflect : null,
					r = n && "function" == typeof n.apply ? n.apply : function(t, e, n) {
						return Function.prototype.apply.call(t, e, n)
					};
				e = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t) {
					return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
				} : function(t) {
					return Object.getOwnPropertyNames(t)
				};
				var o = Number.isNaN || function(t) {
					return t != t
				};

				function i() {
					i.init.call(this)
				}
				t.exports = i, t.exports.once = function(t, e) {
					return new Promise((function(n, r) {
						function o(n) {
							t.removeListener(e, i), r(n)
						}

						function i() {
							"function" == typeof t.removeListener && t.removeListener("error", o), n([].slice.call(arguments))
						}
						m(t, e, i, {
							once: !0
						}), "error" !== e && function(t, e, n) {
							"function" == typeof t.on && m(t, "error", e, n)
						}(t, o, {
							once: !0
						})
					}))
				}, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
				var a = 10;

				function s(t) {
					if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
				}

				function c(t) {
					return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
				}

				function l(t, e, n, r) {
					var o, i, a, l;
					if (s(n), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), i = t._events), a = i[e]), void 0 === a) a = i[e] = n, ++t._eventsCount;
					else if ("function" == typeof a ? a = i[e] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = c(t)) > 0 && a.length > o && !a.warned) {
						a.warned = !0;
						var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
						u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, l = u, console && console.warn && console.warn(l)
					}
					return t
				}

				function u() {
					if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
				}

				function d(t, e, n) {
					var r = {
							fired: !1,
							wrapFn: void 0,
							target: t,
							type: e,
							listener: n
						},
						o = u.bind(r);
					return o.listener = n, r.wrapFn = o, o
				}

				function p(t, e, n) {
					var r = t._events;
					if (void 0 === r) return [];
					var o = r[e];
					return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(t) {
						for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
						return e
					}(o) : h(o, o.length)
				}

				function f(t) {
					var e = this._events;
					if (void 0 !== e) {
						var n = e[t];
						if ("function" == typeof n) return 1;
						if (void 0 !== n) return n.length
					}
					return 0
				}

				function h(t, e) {
					for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
					return n
				}

				function m(t, e, n, r) {
					if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
					else {
						if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
						t.addEventListener(e, (function o(i) {
							r.once && t.removeEventListener(e, o), n(i)
						}))
					}
				}
				Object.defineProperty(i, "defaultMaxListeners", {
					enumerable: !0,
					get: function() {
						return a
					},
					set: function(t) {
						if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
						a = t
					}
				}), i.init = function() {
					void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
				}, i.prototype.setMaxListeners = function(t) {
					if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
					return this._maxListeners = t, this
				}, i.prototype.getMaxListeners = function() {
					return c(this)
				}, i.prototype.emit = function(t) {
					for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
					var o = "error" === t,
						i = this._events;
					if (void 0 !== i) o = o && void 0 === i.error;
					else if (!o) return !1;
					if (o) {
						var a;
						if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
						var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
						throw s.context = a, s
					}
					var c = i[t];
					if (void 0 === c) return !1;
					if ("function" == typeof c) r(c, this, e);
					else {
						var l = c.length,
							u = h(c, l);
						for (n = 0; n < l; ++n) r(u[n], this, e)
					}
					return !0
				}, i.prototype.addListener = function(t, e) {
					return l(this, t, e, !1)
				}, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(t, e) {
					return l(this, t, e, !0)
				}, i.prototype.once = function(t, e) {
					return s(e), this.on(t, d(this, t, e)), this
				}, i.prototype.prependOnceListener = function(t, e) {
					return s(e), this.prependListener(t, d(this, t, e)), this
				}, i.prototype.removeListener = function(t, e) {
					var n, r, o, i, a;
					if (s(e), void 0 === (r = this._events)) return this;
					if (void 0 === (n = r[t])) return this;
					if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
					else if ("function" != typeof n) {
						for (o = -1, i = n.length - 1; i >= 0; i--)
							if (n[i] === e || n[i].listener === e) {
								a = n[i].listener, o = i;
								break
							} if (o < 0) return this;
						0 === o ? n.shift() : function(t, e) {
							for (; e + 1 < t.length; e++) t[e] = t[e + 1];
							t.pop()
						}(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || e)
					}
					return this
				}, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(t) {
					var e, n, r;
					if (void 0 === (n = this._events)) return this;
					if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
					if (0 === arguments.length) {
						var o, i = Object.keys(n);
						for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
						return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
					}
					if ("function" == typeof(e = n[t])) this.removeListener(t, e);
					else if (void 0 !== e)
						for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
					return this
				}, i.prototype.listeners = function(t) {
					return p(this, t, !0)
				}, i.prototype.rawListeners = function(t) {
					return p(this, t, !1)
				}, i.listenerCount = function(t, e) {
					return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
				}, i.prototype.listenerCount = f, i.prototype.eventNames = function() {
					return this._eventsCount > 0 ? e(this._events) : []
				}
			},
			8679: (t, e, n) => {
				"use strict";
				var r = n(9864),
					o = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0
					},
					i = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0
					},
					a = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0
					},
					s = {};

				function c(t) {
					return r.isMemo(t) ? a : s[t.$$typeof] || o
				}
				s[r.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0
				}, s[r.Memo] = a;
				var l = Object.defineProperty,
					u = Object.getOwnPropertyNames,
					d = Object.getOwnPropertySymbols,
					p = Object.getOwnPropertyDescriptor,
					f = Object.getPrototypeOf,
					h = Object.prototype;
				t.exports = function t(e, n, r) {
					if ("string" != typeof n) {
						if (h) {
							var o = f(n);
							o && o !== h && t(e, o, r)
						}
						var a = u(n);
						d && (a = a.concat(d(n)));
						for (var s = c(e), m = c(n), _ = 0; _ < a.length; ++_) {
							var g = a[_];
							if (!(i[g] || r && r[g] || m && m[g] || s && s[g])) {
								var v = p(n, g);
								try {
									l(e, g, v)
								} catch (t) {}
							}
						}
					}
					return e
				}
			},
			645: (t, e) => {
				/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
				e.read = function(t, e, n, r, o) {
					var i, a, s = 8 * o - r - 1,
						c = (1 << s) - 1,
						l = c >> 1,
						u = -7,
						d = n ? o - 1 : 0,
						p = n ? -1 : 1,
						f = t[e + d];
					for (d += p, i = f & (1 << -u) - 1, f >>= -u, u += s; u > 0; i = 256 * i + t[e + d], d += p, u -= 8);
					for (a = i & (1 << -u) - 1, i >>= -u, u += r; u > 0; a = 256 * a + t[e + d], d += p, u -= 8);
					if (0 === i) i = 1 - l;
					else {
						if (i === c) return a ? NaN : 1 / 0 * (f ? -1 : 1);
						a += Math.pow(2, r), i -= l
					}
					return (f ? -1 : 1) * a * Math.pow(2, i - r)
				}, e.write = function(t, e, n, r, o, i) {
					var a, s, c, l = 8 * i - o - 1,
						u = (1 << l) - 1,
						d = u >> 1,
						p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						f = r ? 0 : i - 1,
						h = r ? 1 : -1,
						m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = u) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (e += a + d >= 1 ? p / c : p * Math.pow(2, 1 - d)) * c >= 2 && (a++, c /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (e * c - 1) * Math.pow(2, o), a += d) : (s = e * Math.pow(2, d - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + f] = 255 & s, f += h, s /= 256, o -= 8);
					for (a = a << o | s, l += o; l > 0; t[n + f] = 255 & a, f += h, a /= 256, l -= 8);
					t[n + f - h] |= 128 * m
				}
			},
			5717: t => {
				"function" == typeof Object.create ? t.exports = function(t, e) {
					e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}))
				} : t.exports = function(t, e) {
					if (e) {
						t.super_ = e;
						var n = function() {};
						n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
					}
				}
			},
			1143: t => {
				"use strict";
				t.exports = function(t, e, n, r, o, i, a, s) {
					if (!t) {
						var c;
						if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
						else {
							var l = [n, r, o, i, a, s],
								u = 0;
							(c = new Error(e.replace(/%s/g, (function() {
								return l[u++]
							})))).name = "Invariant Violation"
						}
						throw c.framesToPop = 1, c
					}
				}
			},
			4895: () => {},
			4352: () => {},
			2703: (t, e, n) => {
				"use strict";
				var r = n(414);

				function o() {}

				function i() {}
				i.resetWarningCache = o, t.exports = function() {
					function t(t, e, n, o, i, a) {
						if (a !== r) {
							var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
							throw s.name = "Invariant Violation", s
						}
					}

					function e() {
						return t
					}
					t.isRequired = t;
					var n = {
						array: t,
						bool: t,
						func: t,
						number: t,
						object: t,
						string: t,
						symbol: t,
						any: t,
						arrayOf: e,
						element: t,
						elementType: t,
						instanceOf: e,
						node: t,
						objectOf: e,
						oneOf: e,
						oneOfType: e,
						shape: e,
						exact: e,
						checkPropTypes: i,
						resetWarningCache: o
					};
					return n.PropTypes = n, n
				}
			},
			5697: (t, e, n) => {
				t.exports = n(2703)()
			},
			414: t => {
				"use strict";
				t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
			},
			4887: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = e.decodeEntities,
						i = void 0 === n || n,
						a = e.transform,
						s = e.preprocessNodes,
						c = void 0 === s ? function(t) {
							return t
						} : s,
						l = c(r.default.parseDOM(t, {
							decodeEntities: i
						}));
					return (0, o.default)(l, a)
				};
				var r = i(n(6842)),
					o = i(n(6630));

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			5324: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e, n) {
					return i.default[t.type](t, e, n)
				};
				var r, o = n(532),
					i = (r = o) && r.__esModule ? r : {
						default: r
					}
			},
			5888: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = ["allowfullScreen", "async", "autoplay", "capture", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "loop", "multiple", "muted", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "scoped", "seamless", "selected", "itemscope"]
			},
			5260: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = {
					accept: "accept",
					"accept-charset": "acceptCharset",
					accesskey: "accessKey",
					action: "action",
					allowfullscreen: "allowFullScreen",
					allowtransparency: "allowTransparency",
					alt: "alt",
					as: "as",
					async: "async",
					autocomplete: "autoComplete",
					autoplay: "autoPlay",
					capture: "capture",
					cellpadding: "cellPadding",
					cellspacing: "cellSpacing",
					charset: "charSet",
					challenge: "challenge",
					checked: "checked",
					cite: "cite",
					classid: "classID",
					class: "className",
					cols: "cols",
					colspan: "colSpan",
					content: "content",
					contenteditable: "contentEditable",
					contextmenu: "contextMenu",
					controls: "controls",
					controlsList: "controlsList",
					coords: "coords",
					crossorigin: "crossOrigin",
					data: "data",
					datetime: "dateTime",
					default: "default",
					defer: "defer",
					dir: "dir",
					disabled: "disabled",
					download: "download",
					draggable: "draggable",
					enctype: "encType",
					form: "form",
					formaction: "formAction",
					formenctype: "formEncType",
					formmethod: "formMethod",
					formnovalidate: "formNoValidate",
					formtarget: "formTarget",
					frameborder: "frameBorder",
					headers: "headers",
					height: "height",
					hidden: "hidden",
					high: "high",
					href: "href",
					hreflang: "hrefLang",
					for: "htmlFor",
					"http-equiv": "httpEquiv",
					icon: "icon",
					id: "id",
					inputmode: "inputMode",
					integrity: "integrity",
					is: "is",
					keyparams: "keyParams",
					keytype: "keyType",
					kind: "kind",
					label: "label",
					lang: "lang",
					list: "list",
					loop: "loop",
					low: "low",
					manifest: "manifest",
					marginheight: "marginHeight",
					marginwidth: "marginWidth",
					max: "max",
					maxlength: "maxLength",
					media: "media",
					mediagroup: "mediaGroup",
					method: "method",
					min: "min",
					minlength: "minLength",
					multiple: "multiple",
					muted: "muted",
					name: "name",
					nonce: "nonce",
					novalidate: "noValidate",
					open: "open",
					optimum: "optimum",
					pattern: "pattern",
					placeholder: "placeholder",
					playsinline: "playsInline",
					poster: "poster",
					preload: "preload",
					profile: "profile",
					radiogroup: "radioGroup",
					readonly: "readOnly",
					referrerpolicy: "referrerPolicy",
					rel: "rel",
					required: "required",
					reversed: "reversed",
					role: "role",
					rows: "rows",
					rowspan: "rowSpan",
					sandbox: "sandbox",
					scope: "scope",
					scoped: "scoped",
					scrolling: "scrolling",
					seamless: "seamless",
					selected: "selected",
					shape: "shape",
					size: "size",
					sizes: "sizes",
					slot: "slot",
					span: "span",
					spellcheck: "spellCheck",
					src: "src",
					srcdoc: "srcDoc",
					srclang: "srcLang",
					srcset: "srcSet",
					start: "start",
					step: "step",
					style: "style",
					summary: "summary",
					tabindex: "tabIndex",
					target: "target",
					title: "title",
					type: "type",
					usemap: "useMap",
					value: "value",
					width: "width",
					wmode: "wmode",
					wrap: "wrap",
					about: "about",
					datatype: "datatype",
					inlist: "inlist",
					prefix: "prefix",
					property: "property",
					resource: "resource",
					typeof: "typeof",
					vocab: "vocab",
					autocapitalize: "autoCapitalize",
					autocorrect: "autoCorrect",
					autosave: "autoSave",
					color: "color",
					itemprop: "itemProp",
					itemscope: "itemScope",
					itemtype: "itemType",
					itemid: "itemID",
					itemref: "itemRef",
					results: "results",
					security: "security",
					unselectable: "unselectable"
				}
			},
			3662: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
			},
			5961: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e) {
					var n = void 0;
					t.children.length > 0 && (n = t.children[0].data);
					var i = (0, o.default)(t.attribs, e);
					return r.default.createElement("style", i, n)
				};
				var r = i(n(3804)),
					o = i(n(8024));

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			2593: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e, n) {
					var c = t.name;
					if (!(0, s.default)(c)) return null;
					var l = (0, i.default)(t.attribs, e),
						u = null; - 1 === a.default.indexOf(c) && (u = (0, o.default)(t.children, n));
					return r.default.createElement(c, l, u)
				};
				var r = c(n(3804)),
					o = c(n(6630)),
					i = c(n(8024)),
					a = c(n(3662)),
					s = c(n(2536));

				function c(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			3180: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					return t.data
				}
			},
			5639: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function() {
					return null
				}
			},
			532: (t, e, n) => {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = n(6842),
					i = l(n(3180)),
					a = l(n(2593)),
					s = l(n(5961)),
					c = l(n(5639));

				function l(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function u(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				e.default = (u(r = {}, o.ElementType.Text, i.default), u(r, o.ElementType.Tag, a.default), u(r, o.ElementType.Style, s.default), u(r, o.ElementType.Directive, c.default), u(r, o.ElementType.Comment, c.default), u(r, o.ElementType.Script, c.default), u(r, o.ElementType.CDATA, c.default), u(r, o.ElementType.Doctype, c.default), r)
			},
			653: (t, e, n) => {
				"use strict";
				var r = n(6630);
				var o = n(5324);
				var i = n(6842);
				var a = s(n(4887));

				function s(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				e.ZP = a.default
			},
			6630: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e) {
					return t.filter((function(t) {
						return !(0, r.default)(t)
					})).map((function(t, n) {
						var r = void 0;
						return "function" != typeof e || null !== (r = e(t, n)) && !r ? (0, o.default)(t, n, e) : r
					}))
				};
				var r = i(n(2057)),
					o = i(n(5324));

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			8024: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var r = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				};
				e.default = function(t, e) {
					var n = r({}, (0, o.default)(t), {
						key: e
					});
					"string" == typeof n.style || n.style instanceof String ? n.style = (0, i.default)(n.style) : delete n.style;
					return n
				};
				var o = a(n(4381)),
					i = a(n(3083));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			4381: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					return Object.keys(t).filter((function(t) {
						return (0, i.default)(t)
					})).reduce((function(e, n) {
						var i = n.toLowerCase(),
							a = o.default[i] || i;
						return e[a] = function(t, e) {
							r.default.map((function(t) {
								return t.toLowerCase()
							})).indexOf(t.toLowerCase()) >= 0 && (e = t);
							return e
						}(a, t[n]), e
					}), {})
				};
				var r = a(n(5888)),
					o = a(n(5260)),
					i = a(n(2536));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
			},
			3083: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = function(t, e) {
					if (Array.isArray(t)) return t;
					if (Symbol.iterator in Object(t)) return function(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && s.return && s.return()
							} finally {
								if (o) throw i
							}
						}
						return n
					}(t, e);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				};
				e.default = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					if ("" === t) return {};
					return t.split(";").reduce((function(t, e) {
						var r = e.split(/^([^:]+):/).filter((function(t, e) {
								return e > 0
							})).map((function(t) {
								return t.trim().toLowerCase()
							})),
							o = n(r, 2),
							i = o[0],
							a = o[1];
						return void 0 === a || (t[i = i.replace(/^-ms-/, "ms-").replace(/-(.)/g, (function(t, e) {
							return e.toUpperCase()
						}))] = a), t
					}), {})
				}
			},
			2057: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					return "text" === t.type && /\r?\n/.test(t.data) && "" === t.data.trim()
				}
			},
			2536: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					r.hasOwnProperty(t) || (r[t] = n.test(t));
					return r[t]
				};
				var n = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
					r = {}
			},
			2225: t => {
				"use strict";
				t.exports = JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}')
			},
			8472: (t, e, n) => {
				var r = n(5025),
					o = n(713),
					i = n(2225);
				i.elementNames.__proto__ = null, i.attributeNames.__proto__ = null;
				var a = {
					__proto__: null,
					style: !0,
					script: !0,
					xmp: !0,
					iframe: !0,
					noembed: !0,
					noframes: !0,
					plaintext: !0,
					noscript: !0
				};
				var s = {
						__proto__: null,
						area: !0,
						base: !0,
						basefont: !0,
						br: !0,
						col: !0,
						command: !0,
						embed: !0,
						frame: !0,
						hr: !0,
						img: !0,
						input: !0,
						isindex: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0
					},
					c = t.exports = function(t, e) {
						Array.isArray(t) || t.cheerio || (t = [t]), e = e || {};
						for (var n = "", o = 0; o < t.length; o++) {
							var i = t[o];
							"root" === i.type ? n += c(i.children, e) : r.isTag(i) ? n += u(i, e) : i.type === r.Directive ? n += d(i) : i.type === r.Comment ? n += h(i) : i.type === r.CDATA ? n += f(i) : n += p(i, e)
						}
						return n
					},
					l = ["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"];

				function u(t, e) {
					"foreign" === e.xmlMode && (t.name = i.elementNames[t.name] || t.name, t.parent && l.indexOf(t.parent.name) >= 0 && (e = Object.assign({}, e, {
						xmlMode: !1
					}))), !e.xmlMode && ["svg", "math"].indexOf(t.name) >= 0 && (e = Object.assign({}, e, {
						xmlMode: "foreign"
					}));
					var n = "<" + t.name,
						r = function(t, e) {
							if (t) {
								var n, r = "";
								for (var a in t) n = t[a], r && (r += " "), "foreign" === e.xmlMode && (a = i.attributeNames[a] || a), r += a, (null !== n && "" !== n || e.xmlMode) && (r += '="' + (e.decodeEntities ? o.encodeXML(n) : n.replace(/\"/g, "&quot;")) + '"');
								return r
							}
						}(t.attribs, e);
					return r && (n += " " + r), !e.xmlMode || t.children && 0 !== t.children.length ? (n += ">", t.children && (n += c(t.children, e)), s[t.name] && !e.xmlMode || (n += "</" + t.name + ">")) : n += "/>", n
				}

				function d(t) {
					return "<" + t.data + ">"
				}

				function p(t, e) {
					var n = t.data || "";
					return !e.decodeEntities || t.parent && t.parent.name in a || (n = o.encodeXML(n)), n
				}

				function f(t) {
					return "<![CDATA[" + t.children[0].data + "]]>"
				}

				function h(t) {
					return "\x3c!--" + t.data + "--\x3e"
				}
			},
			5025: (t, e) => {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0,
					function(t) {
						t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"
					}(n = e.ElementType || (e.ElementType = {})), e.isTag = function(t) {
						return t.type === n.Tag || t.type === n.Script || t.type === n.Style
					}, e.Root = n.Root, e.Text = n.Text, e.Directive = n.Directive, e.Comment = n.Comment, e.Script = n.Script, e.Style = n.Style, e.Tag = n.Tag, e.CDATA = n.CDATA, e.Doctype = n.Doctype
			},
			9095: function(t, e, n) {
				"use strict";
				var r = this && this.__importDefault || function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				};
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0;
				var o = r(n(7351)),
					i = r(n(8630)),
					a = r(n(6129)),
					s = r(n(5083)),
					c = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;

				function l(t) {
					var e = d(t);
					return function(t) {
						return String(t).replace(c, e)
					}
				}
				e.decodeXML = l(a.default), e.decodeHTMLStrict = l(o.default);
				var u = function(t, e) {
					return t < e ? 1 : -1
				};

				function d(t) {
					return function(e) {
						if ("#" === e.charAt(1)) {
							var n = e.charAt(2);
							return "X" === n || "x" === n ? s.default(parseInt(e.substr(3), 16)) : s.default(parseInt(e.substr(2), 10))
						}
						return t[e.slice(1, -1)] || e
					}
				}
				e.decodeHTML = function() {
					for (var t = Object.keys(i.default).sort(u), e = Object.keys(o.default).sort(u), n = 0, r = 0; n < e.length; n++) t[r] === e[n] ? (e[n] += ";?", r++) : e[n] += ";";
					var a = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
						s = d(o.default);

					function c(t) {
						return ";" !== t.substr(-1) && (t += ";"), s(t)
					}
					return function(t) {
						return String(t).replace(a, c)
					}
				}()
			},
			5083: function(t, e, n) {
				"use strict";
				var r = this && this.__importDefault || function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				};
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = r(n(4289)),
					i = String.fromCodePoint || function(t) {
						var e = "";
						return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += String.fromCharCode(t)
					};
				e.default = function(t) {
					return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in o.default && (t = o.default[t]), i(t))
				}
			},
			6437: function(t, e, n) {
				"use strict";
				var r = this && this.__importDefault || function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				};
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0;
				var o = u(r(n(6129)).default),
					i = d(o);
				e.encodeXML = _(o);
				var a, s, c = u(r(n(7351)).default),
					l = d(c);

				function u(t) {
					return Object.keys(t).sort().reduce((function(e, n) {
						return e[t[n]] = "&" + n + ";", e
					}), {})
				}

				function d(t) {
					for (var e = [], n = [], r = 0, o = Object.keys(t); r < o.length; r++) {
						var i = o[r];
						1 === i.length ? e.push("\\" + i) : n.push(i)
					}
					e.sort();
					for (var a = 0; a < e.length - 1; a++) {
						for (var s = a; s < e.length - 1 && e[s].charCodeAt(1) + 1 === e[s + 1].charCodeAt(1);) s += 1;
						var c = 1 + s - a;
						c < 3 || e.splice(a, c, e[a] + "-" + e[s])
					}
					return n.unshift("[" + e.join("") + "]"), new RegExp(n.join("|"), "g")
				}
				e.encodeHTML = (a = c, s = l, function(t) {
					return t.replace(s, (function(t) {
						return a[t]
					})).replace(p, h)
				}), e.encodeNonAsciiHTML = _(c);
				var p = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
					f = null != String.prototype.codePointAt ? function(t) {
						return t.codePointAt(0)
					} : function(t) {
						return 1024 * (t.charCodeAt(0) - 55296) + t.charCodeAt(1) - 56320 + 65536
					};

				function h(t) {
					return "&#x" + (t.length > 1 ? f(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";"
				}
				var m = new RegExp(i.source + "|" + p.source, "g");

				function _(t) {
					return function(e) {
						return e.replace(m, (function(e) {
							return t[e] || h(e)
						}))
					}
				}
				e.escape = function(t) {
					return t.replace(m, h)
				}, e.escapeUTF8 = function(t) {
					return t.replace(i, h)
				}
			},
			713: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.encodeHTML5 = e.encodeHTML4 = e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = e.encode = e.decodeStrict = e.decode = void 0;
				var r = n(9095),
					o = n(6437);
				e.decode = function(t, e) {
					return (!e || e <= 0 ? r.decodeXML : r.decodeHTML)(t)
				}, e.decodeStrict = function(t, e) {
					return (!e || e <= 0 ? r.decodeXML : r.decodeHTMLStrict)(t)
				}, e.encode = function(t, e) {
					return (!e || e <= 0 ? o.encodeXML : o.encodeHTML)(t)
				};
				var i = n(6437);
				Object.defineProperty(e, "encodeXML", {
					enumerable: !0,
					get: function() {
						return i.encodeXML
					}
				}), Object.defineProperty(e, "encodeHTML", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				}), Object.defineProperty(e, "encodeNonAsciiHTML", {
					enumerable: !0,
					get: function() {
						return i.encodeNonAsciiHTML
					}
				}), Object.defineProperty(e, "escape", {
					enumerable: !0,
					get: function() {
						return i.escape
					}
				}), Object.defineProperty(e, "escapeUTF8", {
					enumerable: !0,
					get: function() {
						return i.escapeUTF8
					}
				}), Object.defineProperty(e, "encodeHTML4", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				}), Object.defineProperty(e, "encodeHTML5", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				});
				var a = n(9095);
				Object.defineProperty(e, "decodeXML", {
					enumerable: !0,
					get: function() {
						return a.decodeXML
					}
				}), Object.defineProperty(e, "decodeHTML", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(e, "decodeHTMLStrict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(e, "decodeHTML4", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(e, "decodeHTML5", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(e, "decodeHTML4Strict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(e, "decodeHTML5Strict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(e, "decodeXMLStrict", {
					enumerable: !0,
					get: function() {
						return a.decodeXML
					}
				})
			},
			4289: t => {
				"use strict";
				t.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
			},
			7351: t => {
				"use strict";
				t.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
			},
			8630: t => {
				"use strict";
				t.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
			},
			6129: t => {
				"use strict";
				t.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
			},
			1777: t => {
				t.exports = {
					Text: "text",
					Directive: "directive",
					Comment: "comment",
					Script: "script",
					Style: "style",
					Tag: "tag",
					CDATA: "cdata",
					Doctype: "doctype",
					isTag: function(t) {
						return "tag" === t.type || "script" === t.type || "style" === t.type
					}
				}
			},
			6034: (t, e, n) => {
				var r = n(1777),
					o = /\s+/g,
					i = n(7771),
					a = n(888);

				function s(t, e, n) {
					"object" == typeof t ? (n = e, e = t, t = null) : "function" == typeof e && (n = e, e = c), this._callback = t, this._options = e || c, this._elementCB = n, this.dom = [], this._done = !1, this._tagStack = [], this._parser = this._parser || null
				}
				var c = {
					normalizeWhitespace: !1,
					withStartIndices: !1,
					withEndIndices: !1
				};
				s.prototype.onparserinit = function(t) {
					this._parser = t
				}, s.prototype.onreset = function() {
					s.call(this, this._callback, this._options, this._elementCB)
				}, s.prototype.onend = function() {
					this._done || (this._done = !0, this._parser = null, this._handleCallback(null))
				}, s.prototype._handleCallback = s.prototype.onerror = function(t) {
					if ("function" == typeof this._callback) this._callback(t, this.dom);
					else if (t) throw t
				}, s.prototype.onclosetag = function() {
					var t = this._tagStack.pop();
					this._options.withEndIndices && t && (t.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(t)
				}, s.prototype._createDomElement = function(t) {
					if (!this._options.withDomLvl1) return t;
					var e;
					for (var n in e = "tag" === t.type ? Object.create(a) : Object.create(i), t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e
				}, s.prototype._addDomElement = function(t) {
					var e = this._tagStack[this._tagStack.length - 1],
						n = e ? e.children : this.dom,
						r = n[n.length - 1];
					t.next = null, this._options.withStartIndices && (t.startIndex = this._parser.startIndex), this._options.withEndIndices && (t.endIndex = this._parser.endIndex), r ? (t.prev = r, r.next = t) : t.prev = null, n.push(t), t.parent = e || null
				}, s.prototype.onopentag = function(t, e) {
					var n = {
							type: "script" === t ? r.Script : "style" === t ? r.Style : r.Tag,
							name: t,
							attribs: e,
							children: []
						},
						o = this._createDomElement(n);
					this._addDomElement(o), this._tagStack.push(o)
				}, s.prototype.ontext = function(t) {
					var e, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
					if (!this._tagStack.length && this.dom.length && (e = this.dom[this.dom.length - 1]).type === r.Text) n ? e.data = (e.data + t).replace(o, " ") : e.data += t;
					else if (this._tagStack.length && (e = this._tagStack[this._tagStack.length - 1]) && (e = e.children[e.children.length - 1]) && e.type === r.Text) n ? e.data = (e.data + t).replace(o, " ") : e.data += t;
					else {
						n && (t = t.replace(o, " "));
						var i = this._createDomElement({
							data: t,
							type: r.Text
						});
						this._addDomElement(i)
					}
				}, s.prototype.oncomment = function(t) {
					var e = this._tagStack[this._tagStack.length - 1];
					if (e && e.type === r.Comment) e.data += t;
					else {
						var n = {
								data: t,
								type: r.Comment
							},
							o = this._createDomElement(n);
						this._addDomElement(o), this._tagStack.push(o)
					}
				}, s.prototype.oncdatastart = function() {
					var t = {
							children: [{
								data: "",
								type: r.Text
							}],
							type: r.CDATA
						},
						e = this._createDomElement(t);
					this._addDomElement(e), this._tagStack.push(e)
				}, s.prototype.oncommentend = s.prototype.oncdataend = function() {
					this._tagStack.pop()
				}, s.prototype.onprocessinginstruction = function(t, e) {
					var n = this._createDomElement({
						name: t,
						data: e,
						type: r.Directive
					});
					this._addDomElement(n)
				}, t.exports = s
			},
			888: (t, e, n) => {
				var r = n(7771),
					o = t.exports = Object.create(r),
					i = {
						tagName: "name"
					};
				Object.keys(i).forEach((function(t) {
					var e = i[t];
					Object.defineProperty(o, t, {
						get: function() {
							return this[e] || null
						},
						set: function(t) {
							return this[e] = t, t
						}
					})
				}))
			},
			7771: t => {
				var e = t.exports = {
						get firstChild() {
							var t = this.children;
							return t && t[0] || null
						},
						get lastChild() {
							var t = this.children;
							return t && t[t.length - 1] || null
						},
						get nodeType() {
							return r[this.type] || r.element
						}
					},
					n = {
						tagName: "name",
						childNodes: "children",
						parentNode: "parent",
						previousSibling: "prev",
						nextSibling: "next",
						nodeValue: "data"
					},
					r = {
						element: 1,
						text: 3,
						cdata: 4,
						comment: 8
					};
				Object.keys(n).forEach((function(t) {
					var r = n[t];
					Object.defineProperty(e, t, {
						get: function() {
							return this[r] || null
						},
						set: function(t) {
							return this[r] = t, t
						}
					})
				}))
			},
			5993: (t, e, n) => {
				var r = t.exports;
				[n(6541), n(7310), n(8399), n(8458), n(3942), n(9259)].forEach((function(t) {
					Object.keys(t).forEach((function(e) {
						r[e] = t[e].bind(r)
					}))
				}))
			},
			9259: (t, e) => {
				e.removeSubsets = function(t) {
					for (var e, n, r, o = t.length; --o > -1;) {
						for (e = n = t[o], t[o] = null, r = !0; n;) {
							if (t.indexOf(n) > -1) {
								r = !1, t.splice(o, 1);
								break
							}
							n = n.parent
						}
						r && (t[o] = e)
					}
					return t
				};
				var n = 1,
					r = 2,
					o = 4,
					i = 8,
					a = 16,
					s = e.compareDocumentPosition = function(t, e) {
						var s, c, l, u, d, p, f = [],
							h = [];
						if (t === e) return 0;
						for (s = t; s;) f.unshift(s), s = s.parent;
						for (s = e; s;) h.unshift(s), s = s.parent;
						for (p = 0; f[p] === h[p];) p++;
						return 0 === p ? n : (l = (c = f[p - 1]).children, u = f[p], d = h[p], l.indexOf(u) > l.indexOf(d) ? c === e ? o | a : o : c === t ? r | i : r)
					};
				e.uniqueSort = function(t) {
					var e, n, i = t.length;
					for (t = t.slice(); --i > -1;) e = t[i], (n = t.indexOf(e)) > -1 && n < i && t.splice(i, 1);
					return t.sort((function(t, e) {
						var n = s(t, e);
						return n & r ? -1 : n & o ? 1 : 0
					})), t
				}
			},
			3942: (t, e, n) => {
				var r = n(1777),
					o = e.isTag = r.isTag;
				e.testElement = function(t, e) {
					for (var n in t)
						if (t.hasOwnProperty(n)) {
							if ("tag_name" === n) {
								if (!o(e) || !t.tag_name(e.name)) return !1
							} else if ("tag_type" === n) {
								if (!t.tag_type(e.type)) return !1
							} else if ("tag_contains" === n) {
								if (o(e) || !t.tag_contains(e.data)) return !1
							} else if (!e.attribs || !t[n](e.attribs[n])) return !1
						} else;
					return !0
				};
				var i = {
					tag_name: function(t) {
						return "function" == typeof t ? function(e) {
							return o(e) && t(e.name)
						} : "*" === t ? o : function(e) {
							return o(e) && e.name === t
						}
					},
					tag_type: function(t) {
						return "function" == typeof t ? function(e) {
							return t(e.type)
						} : function(e) {
							return e.type === t
						}
					},
					tag_contains: function(t) {
						return "function" == typeof t ? function(e) {
							return !o(e) && t(e.data)
						} : function(e) {
							return !o(e) && e.data === t
						}
					}
				};

				function a(t, e) {
					return "function" == typeof e ? function(n) {
						return n.attribs && e(n.attribs[t])
					} : function(n) {
						return n.attribs && n.attribs[t] === e
					}
				}

				function s(t, e) {
					return function(n) {
						return t(n) || e(n)
					}
				}
				e.getElements = function(t, e, n, r) {
					var o = Object.keys(t).map((function(e) {
						var n = t[e];
						return e in i ? i[e](n) : a(e, n)
					}));
					return 0 === o.length ? [] : this.filter(o.reduce(s), e, n, r)
				}, e.getElementById = function(t, e, n) {
					return Array.isArray(e) || (e = [e]), this.findOne(a("id", t), e, !1 !== n)
				}, e.getElementsByTagName = function(t, e, n, r) {
					return this.filter(i.tag_name(t), e, n, r)
				}, e.getElementsByTagType = function(t, e, n, r) {
					return this.filter(i.tag_type(t), e, n, r)
				}
			},
			8399: (t, e) => {
				e.removeElement = function(t) {
					if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
						var e = t.parent.children;
						e.splice(e.lastIndexOf(t), 1)
					}
				}, e.replaceElement = function(t, e) {
					var n = e.prev = t.prev;
					n && (n.next = e);
					var r = e.next = t.next;
					r && (r.prev = e);
					var o = e.parent = t.parent;
					if (o) {
						var i = o.children;
						i[i.lastIndexOf(t)] = e
					}
				}, e.appendChild = function(t, e) {
					if (e.parent = t, 1 !== t.children.push(e)) {
						var n = t.children[t.children.length - 2];
						n.next = e, e.prev = n, e.next = null
					}
				}, e.append = function(t, e) {
					var n = t.parent,
						r = t.next;
					if (e.next = r, e.prev = t, t.next = e, e.parent = n, r) {
						if (r.prev = e, n) {
							var o = n.children;
							o.splice(o.lastIndexOf(r), 0, e)
						}
					} else n && n.children.push(e)
				}, e.prepend = function(t, e) {
					var n = t.parent;
					if (n) {
						var r = n.children;
						r.splice(r.lastIndexOf(t), 0, e)
					}
					t.prev && (t.prev.next = e), e.parent = n, e.prev = t.prev, e.next = t, t.prev = e
				}
			},
			8458: (t, e, n) => {
				var r = n(1777).isTag;

				function o(t, e, n, r) {
					for (var i, a = [], s = 0, c = e.length; s < c && !(t(e[s]) && (a.push(e[s]), --r <= 0)) && (i = e[s].children, !(n && i && i.length > 0 && (i = o(t, i, n, r), a = a.concat(i), (r -= i.length) <= 0))); s++);
					return a
				}
				t.exports = {
					filter: function(t, e, n, r) {
						Array.isArray(e) || (e = [e]);
						"number" == typeof r && isFinite(r) || (r = 1 / 0);
						return o(t, e, !1 !== n, r)
					},
					find: o,
					findOneChild: function(t, e) {
						for (var n = 0, r = e.length; n < r; n++)
							if (t(e[n])) return e[n];
						return null
					},
					findOne: function t(e, n) {
						for (var o = null, i = 0, a = n.length; i < a && !o; i++) r(n[i]) && (e(n[i]) ? o = n[i] : n[i].children.length > 0 && (o = t(e, n[i].children)));
						return o
					},
					existsOne: function t(e, n) {
						for (var o = 0, i = n.length; o < i; o++)
							if (r(n[o]) && (e(n[o]) || n[o].children.length > 0 && t(e, n[o].children))) return !0;
						return !1
					},
					findAll: function(t, e) {
						var n = [],
							o = e.slice();
						for (; o.length;) {
							var i = o.shift();
							r(i) && (i.children && i.children.length > 0 && o.unshift.apply(o, i.children), t(i) && n.push(i))
						}
						return n
					}
				}
			},
			6541: (t, e, n) => {
				var r = n(1777),
					o = n(8472),
					i = r.isTag;
				t.exports = {
					getInnerHTML: function(t, e) {
						return t.children ? t.children.map((function(t) {
							return o(t, e)
						})).join("") : ""
					},
					getOuterHTML: o,
					getText: function t(e) {
						return Array.isArray(e) ? e.map(t).join("") : i(e) ? "br" === e.name ? "\n" : t(e.children) : e.type === r.CDATA ? t(e.children) : e.type === r.Text ? e.data : ""
					}
				}
			},
			7310: (t, e) => {
				var n = e.getChildren = function(t) {
						return t.children
					},
					r = e.getParent = function(t) {
						return t.parent
					};
				e.getSiblings = function(t) {
					var e = r(t);
					return e ? n(e) : [t]
				}, e.getAttributeValue = function(t, e) {
					return t.attribs && t.attribs[e]
				}, e.hasAttrib = function(t, e) {
					return !!t.attribs && hasOwnProperty.call(t.attribs, e)
				}, e.getName = function(t) {
					return t.name
				}
			},
			2517: (t, e, n) => {
				var r = n(3565);
				t.exports = function(t) {
					if (t >= 55296 && t <= 57343 || t > 1114111) return "�";
					t in r && (t = r[t]);
					var e = "";
					t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t);
					return e += String.fromCharCode(t)
				}
			},
			3565: t => {
				"use strict";
				t.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
			},
			8483: t => {
				"use strict";
				t.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
			},
			3239: t => {
				"use strict";
				t.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
			},
			7986: t => {
				"use strict";
				t.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
			},
			3497: (t, e, n) => {
				function r(t) {
					this._cbs = t || {}, this.events = []
				}
				t.exports = r;
				var o = n(6842).EVENTS;
				Object.keys(o).forEach((function(t) {
					if (0 === o[t]) t = "on" + t, r.prototype[t] = function() {
						this.events.push([t]), this._cbs[t] && this._cbs[t]()
					};
					else if (1 === o[t]) t = "on" + t, r.prototype[t] = function(e) {
						this.events.push([t, e]), this._cbs[t] && this._cbs[t](e)
					};
					else {
						if (2 !== o[t]) throw Error("wrong number of arguments");
						t = "on" + t, r.prototype[t] = function(e, n) {
							this.events.push([t, e, n]), this._cbs[t] && this._cbs[t](e, n)
						}
					}
				})), r.prototype.onreset = function() {
					this.events = [], this._cbs.onreset && this._cbs.onreset()
				}, r.prototype.restart = function() {
					this._cbs.onreset && this._cbs.onreset();
					for (var t = 0, e = this.events.length; t < e; t++)
						if (this._cbs[this.events[t][0]]) {
							var n = this.events[t].length;
							1 === n ? this._cbs[this.events[t][0]]() : 2 === n ? this._cbs[this.events[t][0]](this.events[t][1]) : this._cbs[this.events[t][0]](this.events[t][1], this.events[t][2])
						}
				}
			},
			4235: (t, e, n) => {
				var r = n(6034),
					o = n(5993);

				function i(t, e) {
					this.init(t, e)
				}

				function a(t, e) {
					return o.getElementsByTagName(t, e, !0)
				}

				function s(t, e) {
					return o.getElementsByTagName(t, e, !0, 1)[0]
				}

				function c(t, e, n) {
					return o.getText(o.getElementsByTagName(t, e, n, 1)).trim()
				}

				function l(t, e, n, r, o) {
					var i = c(n, r, o);
					i && (t[e] = i)
				}
				n(5717)(i, r), i.prototype.init = r;
				var u = function(t) {
					return "rss" === t || "feed" === t || "rdf:RDF" === t
				};
				i.prototype.onend = function() {
					var t, e, n = {},
						o = s(u, this.dom);
					o && ("feed" === o.name ? (e = o.children, n.type = "atom", l(n, "id", "id", e), l(n, "title", "title", e), (t = s("link", e)) && (t = t.attribs) && (t = t.href) && (n.link = t), l(n, "description", "subtitle", e), (t = c("updated", e)) && (n.updated = new Date(t)), l(n, "author", "email", e, !0), n.items = a("entry", e).map((function(t) {
						var e, n = {};
						return l(n, "id", "id", t = t.children), l(n, "title", "title", t), (e = s("link", t)) && (e = e.attribs) && (e = e.href) && (n.link = e), (e = c("summary", t) || c("content", t)) && (n.description = e), (e = c("updated", t)) && (n.pubDate = new Date(e)), n
					}))) : (e = s("channel", o.children).children, n.type = o.name.substr(0, 3), n.id = "", l(n, "title", "title", e), l(n, "link", "link", e), l(n, "description", "description", e), (t = c("lastBuildDate", e)) && (n.updated = new Date(t)), l(n, "author", "managingEditor", e, !0), n.items = a("item", o.children).map((function(t) {
						var e, n = {};
						return l(n, "id", "guid", t = t.children), l(n, "title", "title", t), l(n, "link", "link", t), l(n, "description", "description", t), (e = c("pubDate", t)) && (n.pubDate = new Date(e)), n
					})))), this.dom = n, r.prototype._handleCallback.call(this, o ? null : Error("couldn't find root of feed"))
				}, t.exports = i
			},
			8134: (t, e, n) => {
				var r = n(8083),
					o = {
						input: !0,
						option: !0,
						optgroup: !0,
						select: !0,
						button: !0,
						datalist: !0,
						textarea: !0
					},
					i = {
						tr: {
							tr: !0,
							th: !0,
							td: !0
						},
						th: {
							th: !0
						},
						td: {
							thead: !0,
							th: !0,
							td: !0
						},
						body: {
							head: !0,
							link: !0,
							script: !0
						},
						li: {
							li: !0
						},
						p: {
							p: !0
						},
						h1: {
							p: !0
						},
						h2: {
							p: !0
						},
						h3: {
							p: !0
						},
						h4: {
							p: !0
						},
						h5: {
							p: !0
						},
						h6: {
							p: !0
						},
						select: o,
						input: o,
						output: o,
						button: o,
						datalist: o,
						textarea: o,
						option: {
							option: !0
						},
						optgroup: {
							optgroup: !0
						}
					},
					a = {
						__proto__: null,
						area: !0,
						base: !0,
						basefont: !0,
						br: !0,
						col: !0,
						command: !0,
						embed: !0,
						frame: !0,
						hr: !0,
						img: !0,
						input: !0,
						isindex: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0
					},
					s = {
						__proto__: null,
						math: !0,
						svg: !0
					},
					c = {
						__proto__: null,
						mi: !0,
						mo: !0,
						mn: !0,
						ms: !0,
						mtext: !0,
						"annotation-xml": !0,
						foreignObject: !0,
						desc: !0,
						title: !0
					},
					l = /\s|\//;

				function u(t, e) {
					this._options = e || {}, this._cbs = t || {}, this._tagname = "", this._attribname = "", this._attribvalue = "", this._attribs = null, this._stack = [], this._foreignContext = [], this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, this._options.Tokenizer && (r = this._options.Tokenizer), this._tokenizer = new r(this._options, this), this._cbs.onparserinit && this._cbs.onparserinit(this)
				}
				n(5717)(u, n(7187).EventEmitter), u.prototype._updatePosition = function(t) {
					null === this.endIndex ? this._tokenizer._sectionStart <= t ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - t : this.startIndex = this.endIndex + 1, this.endIndex = this._tokenizer.getAbsoluteIndex()
				}, u.prototype.ontext = function(t) {
					this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(t)
				}, u.prototype.onopentagname = function(t) {
					if (this._lowerCaseTagNames && (t = t.toLowerCase()), this._tagname = t, !this._options.xmlMode && t in i)
						for (var e;
							(e = this._stack[this._stack.length - 1]) in i[t]; this.onclosetag(e));
					!this._options.xmlMode && t in a || (this._stack.push(t), t in s ? this._foreignContext.push(!0) : t in c && this._foreignContext.push(!1)), this._cbs.onopentagname && this._cbs.onopentagname(t), this._cbs.onopentag && (this._attribs = {})
				}, u.prototype.onopentagend = function() {
					this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in a && this._cbs.onclosetag(this._tagname), this._tagname = ""
				}, u.prototype.onclosetag = function(t) {
					if (this._updatePosition(1), this._lowerCaseTagNames && (t = t.toLowerCase()), (t in s || t in c) && this._foreignContext.pop(), !this._stack.length || t in a && !this._options.xmlMode) this._options.xmlMode || "br" !== t && "p" !== t || (this.onopentagname(t), this._closeCurrentTag());
					else {
						var e = this._stack.lastIndexOf(t);
						if (-1 !== e)
							if (this._cbs.onclosetag)
								for (e = this._stack.length - e; e--;) this._cbs.onclosetag(this._stack.pop());
							else this._stack.length = e;
						else "p" !== t || this._options.xmlMode || (this.onopentagname(t), this._closeCurrentTag())
					}
				}, u.prototype.onselfclosingtag = function() {
					this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend()
				}, u.prototype._closeCurrentTag = function() {
					var t = this._tagname;
					this.onopentagend(), this._stack[this._stack.length - 1] === t && (this._cbs.onclosetag && this._cbs.onclosetag(t), this._stack.pop())
				}, u.prototype.onattribname = function(t) {
					this._lowerCaseAttributeNames && (t = t.toLowerCase()), this._attribname = t
				}, u.prototype.onattribdata = function(t) {
					this._attribvalue += t
				}, u.prototype.onattribend = function() {
					this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), this._attribname = "", this._attribvalue = ""
				}, u.prototype._getInstructionName = function(t) {
					var e = t.search(l),
						n = e < 0 ? t : t.substr(0, e);
					return this._lowerCaseTagNames && (n = n.toLowerCase()), n
				}, u.prototype.ondeclaration = function(t) {
					if (this._cbs.onprocessinginstruction) {
						var e = this._getInstructionName(t);
						this._cbs.onprocessinginstruction("!" + e, "!" + t)
					}
				}, u.prototype.onprocessinginstruction = function(t) {
					if (this._cbs.onprocessinginstruction) {
						var e = this._getInstructionName(t);
						this._cbs.onprocessinginstruction("?" + e, "?" + t)
					}
				}, u.prototype.oncomment = function(t) {
					this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(t), this._cbs.oncommentend && this._cbs.oncommentend()
				}, u.prototype.oncdata = function(t) {
					this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), this._cbs.ontext && this._cbs.ontext(t), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + t + "]]")
				}, u.prototype.onerror = function(t) {
					this._cbs.onerror && this._cbs.onerror(t)
				}, u.prototype.onend = function() {
					if (this._cbs.onclosetag)
						for (var t = this._stack.length; t > 0; this._cbs.onclosetag(this._stack[--t]));
					this._cbs.onend && this._cbs.onend()
				}, u.prototype.reset = function() {
					this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this)
				}, u.prototype.parseComplete = function(t) {
					this.reset(), this.end(t)
				}, u.prototype.write = function(t) {
					this._tokenizer.write(t)
				}, u.prototype.end = function(t) {
					this._tokenizer.end(t)
				}, u.prototype.pause = function() {
					this._tokenizer.pause()
				}, u.prototype.resume = function() {
					this._tokenizer.resume()
				}, u.prototype.parseChunk = u.prototype.write, u.prototype.done = u.prototype.end, t.exports = u
			},
			1802: (t, e, n) => {
				function r(t) {
					this._cbs = t || {}
				}
				t.exports = r;
				var o = n(6842).EVENTS;
				Object.keys(o).forEach((function(t) {
					if (0 === o[t]) t = "on" + t, r.prototype[t] = function() {
						this._cbs[t] && this._cbs[t]()
					};
					else if (1 === o[t]) t = "on" + t, r.prototype[t] = function(e) {
						this._cbs[t] && this._cbs[t](e)
					};
					else {
						if (2 !== o[t]) throw Error("wrong number of arguments");
						t = "on" + t, r.prototype[t] = function(e, n) {
							this._cbs[t] && this._cbs[t](e, n)
						}
					}
				}))
			},
			287: (t, e, n) => {
				t.exports = o;
				var r = n(7214);

				function o(t) {
					r.call(this, new i(this), t)
				}

				function i(t) {
					this.scope = t
				}
				n(5717)(o, r), o.prototype.readable = !0;
				var a = n(6842).EVENTS;
				Object.keys(a).forEach((function(t) {
					if (0 === a[t]) i.prototype["on" + t] = function() {
						this.scope.emit(t)
					};
					else if (1 === a[t]) i.prototype["on" + t] = function(e) {
						this.scope.emit(t, e)
					};
					else {
						if (2 !== a[t]) throw Error("wrong number of arguments!");
						i.prototype["on" + t] = function(e, n) {
							this.scope.emit(t, e, n)
						}
					}
				}))
			},
			8083: (t, e, n) => {
				t.exports = _t;
				var r = n(2517),
					o = n(8483),
					i = n(3239),
					a = n(7986),
					s = 0,
					c = s++,
					l = s++,
					u = s++,
					d = s++,
					p = s++,
					f = s++,
					h = s++,
					m = s++,
					_ = s++,
					g = s++,
					v = s++,
					y = s++,
					w = s++,
					b = s++,
					E = s++,
					O = s++,
					S = s++,
					C = s++,
					x = s++,
					P = s++,
					k = s++,
					T = s++,
					N = s++,
					A = s++,
					D = s++,
					R = s++,
					I = s++,
					L = s++,
					M = s++,
					q = s++,
					j = s++,
					B = s++,
					F = s++,
					H = s++,
					U = s++,
					V = s++,
					z = s++,
					W = s++,
					G = s++,
					K = s++,
					$ = s++,
					Q = s++,
					Z = s++,
					Y = s++,
					J = s++,
					X = s++,
					tt = s++,
					et = s++,
					nt = s++,
					rt = s++,
					ot = s++,
					it = s++,
					at = s++,
					st = s++,
					ct = s++,
					lt = 0,
					ut = lt++,
					dt = lt++,
					pt = lt++;

				function ft(t) {
					return " " === t || "\n" === t || "\t" === t || "\f" === t || "\r" === t
				}

				function ht(t, e, n) {
					var r = t.toLowerCase();
					return t === r ? function(t) {
						t === r ? this._state = e : (this._state = n, this._index--)
					} : function(o) {
						o === r || o === t ? this._state = e : (this._state = n, this._index--)
					}
				}

				function mt(t, e) {
					var n = t.toLowerCase();
					return function(r) {
						r === n || r === t ? this._state = e : (this._state = u, this._index--)
					}
				}

				function _t(t, e) {
					this._state = c, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = c, this._special = ut, this._cbs = e, this._running = !0, this._ended = !1, this._xmlMode = !(!t || !t.xmlMode), this._decodeEntities = !(!t || !t.decodeEntities)
				}
				_t.prototype._stateText = function(t) {
					"<" === t ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._state = l, this._sectionStart = this._index) : this._decodeEntities && this._special === ut && "&" === t && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._baseState = c, this._state = ot, this._sectionStart = this._index)
				}, _t.prototype._stateBeforeTagName = function(t) {
					"/" === t ? this._state = p : "<" === t ? (this._cbs.ontext(this._getSection()), this._sectionStart = this._index) : ">" === t || this._special !== ut || ft(t) ? this._state = c : "!" === t ? (this._state = E, this._sectionStart = this._index + 1) : "?" === t ? (this._state = S, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== t && "S" !== t ? u : j, this._sectionStart = this._index)
				}, _t.prototype._stateInTagName = function(t) {
					("/" === t || ">" === t || ft(t)) && (this._emitToken("onopentagname"), this._state = m, this._index--)
				}, _t.prototype._stateBeforeCloseingTagName = function(t) {
					ft(t) || (">" === t ? this._state = c : this._special !== ut ? "s" === t || "S" === t ? this._state = B : (this._state = c, this._index--) : (this._state = f, this._sectionStart = this._index))
				}, _t.prototype._stateInCloseingTagName = function(t) {
					(">" === t || ft(t)) && (this._emitToken("onclosetag"), this._state = h, this._index--)
				}, _t.prototype._stateAfterCloseingTagName = function(t) {
					">" === t && (this._state = c, this._sectionStart = this._index + 1)
				}, _t.prototype._stateBeforeAttributeName = function(t) {
					">" === t ? (this._cbs.onopentagend(), this._state = c, this._sectionStart = this._index + 1) : "/" === t ? this._state = d : ft(t) || (this._state = _, this._sectionStart = this._index)
				}, _t.prototype._stateInSelfClosingTag = function(t) {
					">" === t ? (this._cbs.onselfclosingtag(), this._state = c, this._sectionStart = this._index + 1) : ft(t) || (this._state = m, this._index--)
				}, _t.prototype._stateInAttributeName = function(t) {
					("=" === t || "/" === t || ">" === t || ft(t)) && (this._cbs.onattribname(this._getSection()), this._sectionStart = -1, this._state = g, this._index--)
				}, _t.prototype._stateAfterAttributeName = function(t) {
					"=" === t ? this._state = v : "/" === t || ">" === t ? (this._cbs.onattribend(), this._state = m, this._index--) : ft(t) || (this._cbs.onattribend(), this._state = _, this._sectionStart = this._index)
				}, _t.prototype._stateBeforeAttributeValue = function(t) {
					'"' === t ? (this._state = y, this._sectionStart = this._index + 1) : "'" === t ? (this._state = w, this._sectionStart = this._index + 1) : ft(t) || (this._state = b, this._sectionStart = this._index, this._index--)
				}, _t.prototype._stateInAttributeValueDoubleQuotes = function(t) {
					'"' === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = ot, this._sectionStart = this._index)
				}, _t.prototype._stateInAttributeValueSingleQuotes = function(t) {
					"'" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = ot, this._sectionStart = this._index)
				}, _t.prototype._stateInAttributeValueNoQuotes = function(t) {
					ft(t) || ">" === t ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m, this._index--) : this._decodeEntities && "&" === t && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = ot, this._sectionStart = this._index)
				}, _t.prototype._stateBeforeDeclaration = function(t) {
					this._state = "[" === t ? T : "-" === t ? C : O
				}, _t.prototype._stateInDeclaration = function(t) {
					">" === t && (this._cbs.ondeclaration(this._getSection()), this._state = c, this._sectionStart = this._index + 1)
				}, _t.prototype._stateInProcessingInstruction = function(t) {
					">" === t && (this._cbs.onprocessinginstruction(this._getSection()), this._state = c, this._sectionStart = this._index + 1)
				}, _t.prototype._stateBeforeComment = function(t) {
					"-" === t ? (this._state = x, this._sectionStart = this._index + 1) : this._state = O
				}, _t.prototype._stateInComment = function(t) {
					"-" === t && (this._state = P)
				}, _t.prototype._stateAfterComment1 = function(t) {
					this._state = "-" === t ? k : x
				}, _t.prototype._stateAfterComment2 = function(t) {
					">" === t ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = c, this._sectionStart = this._index + 1) : "-" !== t && (this._state = x)
				}, _t.prototype._stateBeforeCdata1 = ht("C", N, O), _t.prototype._stateBeforeCdata2 = ht("D", A, O), _t.prototype._stateBeforeCdata3 = ht("A", D, O), _t.prototype._stateBeforeCdata4 = ht("T", R, O), _t.prototype._stateBeforeCdata5 = ht("A", I, O), _t.prototype._stateBeforeCdata6 = function(t) {
					"[" === t ? (this._state = L, this._sectionStart = this._index + 1) : (this._state = O, this._index--)
				}, _t.prototype._stateInCdata = function(t) {
					"]" === t && (this._state = M)
				}, _t.prototype._stateAfterCdata1 = function(t) {
					this._state = "]" === t ? q : L
				}, _t.prototype._stateAfterCdata2 = function(t) {
					">" === t ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = c, this._sectionStart = this._index + 1) : "]" !== t && (this._state = L)
				}, _t.prototype._stateBeforeSpecial = function(t) {
					"c" === t || "C" === t ? this._state = F : "t" === t || "T" === t ? this._state = Z : (this._state = u, this._index--)
				}, _t.prototype._stateBeforeSpecialEnd = function(t) {
					this._special !== dt || "c" !== t && "C" !== t ? this._special !== pt || "t" !== t && "T" !== t ? this._state = c : this._state = tt : this._state = W
				}, _t.prototype._stateBeforeScript1 = mt("R", H), _t.prototype._stateBeforeScript2 = mt("I", U), _t.prototype._stateBeforeScript3 = mt("P", V), _t.prototype._stateBeforeScript4 = mt("T", z), _t.prototype._stateBeforeScript5 = function(t) {
					("/" === t || ">" === t || ft(t)) && (this._special = dt), this._state = u, this._index--
				}, _t.prototype._stateAfterScript1 = ht("R", G, c), _t.prototype._stateAfterScript2 = ht("I", K, c), _t.prototype._stateAfterScript3 = ht("P", $, c), _t.prototype._stateAfterScript4 = ht("T", Q, c), _t.prototype._stateAfterScript5 = function(t) {
					">" === t || ft(t) ? (this._special = ut, this._state = f, this._sectionStart = this._index - 6, this._index--) : this._state = c
				}, _t.prototype._stateBeforeStyle1 = mt("Y", Y), _t.prototype._stateBeforeStyle2 = mt("L", J), _t.prototype._stateBeforeStyle3 = mt("E", X), _t.prototype._stateBeforeStyle4 = function(t) {
					("/" === t || ">" === t || ft(t)) && (this._special = pt), this._state = u, this._index--
				}, _t.prototype._stateAfterStyle1 = ht("Y", et, c), _t.prototype._stateAfterStyle2 = ht("L", nt, c), _t.prototype._stateAfterStyle3 = ht("E", rt, c), _t.prototype._stateAfterStyle4 = function(t) {
					">" === t || ft(t) ? (this._special = ut, this._state = f, this._sectionStart = this._index - 5, this._index--) : this._state = c
				}, _t.prototype._stateBeforeEntity = ht("#", it, at), _t.prototype._stateBeforeNumericEntity = ht("X", ct, st), _t.prototype._parseNamedEntityStrict = function() {
					if (this._sectionStart + 1 < this._index) {
						var t = this._buffer.substring(this._sectionStart + 1, this._index),
							e = this._xmlMode ? a : o;
						e.hasOwnProperty(t) && (this._emitPartial(e[t]), this._sectionStart = this._index + 1)
					}
				}, _t.prototype._parseLegacyEntity = function() {
					var t = this._sectionStart + 1,
						e = this._index - t;
					for (e > 6 && (e = 6); e >= 2;) {
						var n = this._buffer.substr(t, e);
						if (i.hasOwnProperty(n)) return this._emitPartial(i[n]), void(this._sectionStart += e + 1);
						e--
					}
				}, _t.prototype._stateInNamedEntity = function(t) {
					";" === t ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), this._state = this._baseState) : (t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== c ? "=" !== t && this._parseNamedEntityStrict() : this._parseLegacyEntity()), this._state = this._baseState, this._index--)
				}, _t.prototype._decodeNumericEntity = function(t, e) {
					var n = this._sectionStart + t;
					if (n !== this._index) {
						var o = this._buffer.substring(n, this._index),
							i = parseInt(o, e);
						this._emitPartial(r(i)), this._sectionStart = this._index
					} else this._sectionStart--;
					this._state = this._baseState
				}, _t.prototype._stateInNumericEntity = function(t) {
					";" === t ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), this._index--)
				}, _t.prototype._stateInHexEntity = function(t) {
					";" === t ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), this._index--)
				}, _t.prototype._cleanup = function() {
					this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._running && (this._state === c ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0)
				}, _t.prototype.write = function(t) {
					this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += t, this._parse()
				}, _t.prototype._parse = function() {
					for (; this._index < this._buffer.length && this._running;) {
						var t = this._buffer.charAt(this._index);
						this._state === c ? this._stateText(t) : this._state === l ? this._stateBeforeTagName(t) : this._state === u ? this._stateInTagName(t) : this._state === p ? this._stateBeforeCloseingTagName(t) : this._state === f ? this._stateInCloseingTagName(t) : this._state === h ? this._stateAfterCloseingTagName(t) : this._state === d ? this._stateInSelfClosingTag(t) : this._state === m ? this._stateBeforeAttributeName(t) : this._state === _ ? this._stateInAttributeName(t) : this._state === g ? this._stateAfterAttributeName(t) : this._state === v ? this._stateBeforeAttributeValue(t) : this._state === y ? this._stateInAttributeValueDoubleQuotes(t) : this._state === w ? this._stateInAttributeValueSingleQuotes(t) : this._state === b ? this._stateInAttributeValueNoQuotes(t) : this._state === E ? this._stateBeforeDeclaration(t) : this._state === O ? this._stateInDeclaration(t) : this._state === S ? this._stateInProcessingInstruction(t) : this._state === C ? this._stateBeforeComment(t) : this._state === x ? this._stateInComment(t) : this._state === P ? this._stateAfterComment1(t) : this._state === k ? this._stateAfterComment2(t) : this._state === T ? this._stateBeforeCdata1(t) : this._state === N ? this._stateBeforeCdata2(t) : this._state === A ? this._stateBeforeCdata3(t) : this._state === D ? this._stateBeforeCdata4(t) : this._state === R ? this._stateBeforeCdata5(t) : this._state === I ? this._stateBeforeCdata6(t) : this._state === L ? this._stateInCdata(t) : this._state === M ? this._stateAfterCdata1(t) : this._state === q ? this._stateAfterCdata2(t) : this._state === j ? this._stateBeforeSpecial(t) : this._state === B ? this._stateBeforeSpecialEnd(t) : this._state === F ? this._stateBeforeScript1(t) : this._state === H ? this._stateBeforeScript2(t) : this._state === U ? this._stateBeforeScript3(t) : this._state === V ? this._stateBeforeScript4(t) : this._state === z ? this._stateBeforeScript5(t) : this._state === W ? this._stateAfterScript1(t) : this._state === G ? this._stateAfterScript2(t) : this._state === K ? this._stateAfterScript3(t) : this._state === $ ? this._stateAfterScript4(t) : this._state === Q ? this._stateAfterScript5(t) : this._state === Z ? this._stateBeforeStyle1(t) : this._state === Y ? this._stateBeforeStyle2(t) : this._state === J ? this._stateBeforeStyle3(t) : this._state === X ? this._stateBeforeStyle4(t) : this._state === tt ? this._stateAfterStyle1(t) : this._state === et ? this._stateAfterStyle2(t) : this._state === nt ? this._stateAfterStyle3(t) : this._state === rt ? this._stateAfterStyle4(t) : this._state === ot ? this._stateBeforeEntity(t) : this._state === it ? this._stateBeforeNumericEntity(t) : this._state === at ? this._stateInNamedEntity(t) : this._state === st ? this._stateInNumericEntity(t) : this._state === ct ? this._stateInHexEntity(t) : this._cbs.onerror(Error("unknown _state"), this._state), this._index++
					}
					this._cleanup()
				}, _t.prototype.pause = function() {
					this._running = !1
				}, _t.prototype.resume = function() {
					this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish()
				}, _t.prototype.end = function(t) {
					this._ended && this._cbs.onerror(Error(".end() after done!")), t && this.write(t), this._ended = !0, this._running && this._finish()
				}, _t.prototype._finish = function() {
					this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend()
				}, _t.prototype._handleTrailingData = function() {
					var t = this._buffer.substr(this._sectionStart);
					this._state === L || this._state === M || this._state === q ? this._cbs.oncdata(t) : this._state === x || this._state === P || this._state === k ? this._cbs.oncomment(t) : this._state !== at || this._xmlMode ? this._state !== st || this._xmlMode ? this._state !== ct || this._xmlMode ? this._state !== u && this._state !== m && this._state !== v && this._state !== g && this._state !== _ && this._state !== w && this._state !== y && this._state !== b && this._state !== f && this._cbs.ontext(t) : (this._decodeNumericEntity(3, 16), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()))
				}, _t.prototype.reset = function() {
					_t.call(this, {
						xmlMode: this._xmlMode,
						decodeEntities: this._decodeEntities
					}, this._cbs)
				}, _t.prototype.getAbsoluteIndex = function() {
					return this._bufferOffset + this._index
				}, _t.prototype._getSection = function() {
					return this._buffer.substring(this._sectionStart, this._index)
				}, _t.prototype._emitToken = function(t) {
					this._cbs[t](this._getSection()), this._sectionStart = -1
				}, _t.prototype._emitPartial = function(t) {
					this._baseState !== c ? this._cbs.onattribdata(t) : this._cbs.ontext(t)
				}
			},
			7214: (t, e, n) => {
				t.exports = s;
				var r = n(8134),
					o = n(9557).Writable,
					i = n(2553).s,
					a = n(8764).Buffer;

				function s(t, e) {
					var n = this._parser = new r(t, e),
						a = this._decoder = new i;
					o.call(this, {
						decodeStrings: !1
					}), this.once("finish", (function() {
						n.end(a.end())
					}))
				}
				n(5717)(s, o), s.prototype._write = function(t, e, n) {
					t instanceof a && (t = this._decoder.write(t)), this._parser.write(t), n()
				}
			},
			6842: (t, e, n) => {
				var r = n(8134),
					o = n(6034);

				function i(e, n) {
					return delete t.exports[e], t.exports[e] = n, n
				}
				t.exports = {
					Parser: r,
					Tokenizer: n(8083),
					ElementType: n(1777),
					DomHandler: o,
					get FeedHandler() {
						return i("FeedHandler", n(4235))
					},
					get Stream() {
						return i("Stream", n(287))
					},
					get WritableStream() {
						return i("WritableStream", n(7214))
					},
					get ProxyHandler() {
						return i("ProxyHandler", n(1802))
					},
					get DomUtils() {
						return i("DomUtils", n(5993))
					},
					get CollectingHandler() {
						return i("CollectingHandler", n(3497))
					},
					DefaultHandler: o,
					get RssHandler() {
						return i("RssHandler", this.FeedHandler)
					},
					parseDOM: function(t, e) {
						var n = new o(e);
						return new r(n, e).end(t), n.dom
					},
					parseFeed: function(e, n) {
						var o = new t.exports.FeedHandler(n);
						return new r(o, n).end(e), o.dom
					},
					createDomStream: function(t, e, n) {
						var i = new o(t, e, n);
						return new r(i, e)
					},
					EVENTS: {
						attribute: 2,
						cdatastart: 0,
						cdataend: 0,
						text: 1,
						processinginstruction: 2,
						comment: 1,
						commentend: 0,
						closetag: 1,
						opentag: 2,
						opentagname: 1,
						error: 1,
						end: 0
					}
				}
			},
			9921: (t, e) => {
				"use strict";
				/** @license React v16.13.1
				 * react-is.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				var n = "function" == typeof Symbol && Symbol.for,
					r = n ? Symbol.for("react.element") : 60103,
					o = n ? Symbol.for("react.portal") : 60106,
					i = n ? Symbol.for("react.fragment") : 60107,
					a = n ? Symbol.for("react.strict_mode") : 60108,
					s = n ? Symbol.for("react.profiler") : 60114,
					c = n ? Symbol.for("react.provider") : 60109,
					l = n ? Symbol.for("react.context") : 60110,
					u = n ? Symbol.for("react.async_mode") : 60111,
					d = n ? Symbol.for("react.concurrent_mode") : 60111,
					p = n ? Symbol.for("react.forward_ref") : 60112,
					f = n ? Symbol.for("react.suspense") : 60113,
					h = n ? Symbol.for("react.suspense_list") : 60120,
					m = n ? Symbol.for("react.memo") : 60115,
					_ = n ? Symbol.for("react.lazy") : 60116,
					g = n ? Symbol.for("react.block") : 60121,
					v = n ? Symbol.for("react.fundamental") : 60117,
					y = n ? Symbol.for("react.responder") : 60118,
					w = n ? Symbol.for("react.scope") : 60119;

				function b(t) {
					if ("object" == typeof t && null !== t) {
						var e = t.$$typeof;
						switch (e) {
							case r:
								switch (t = t.type) {
									case u:
									case d:
									case i:
									case s:
									case a:
									case f:
										return t;
									default:
										switch (t = t && t.$$typeof) {
											case l:
											case p:
											case _:
											case m:
											case c:
												return t;
											default:
												return e
										}
								}
							case o:
								return e
						}
					}
				}

				function E(t) {
					return b(t) === d
				}
				e.AsyncMode = u, e.ConcurrentMode = d, e.ContextConsumer = l, e.ContextProvider = c, e.Element = r, e.ForwardRef = p, e.Fragment = i, e.Lazy = _, e.Memo = m, e.Portal = o, e.Profiler = s, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(t) {
					return E(t) || b(t) === u
				}, e.isConcurrentMode = E, e.isContextConsumer = function(t) {
					return b(t) === l
				}, e.isContextProvider = function(t) {
					return b(t) === c
				}, e.isElement = function(t) {
					return "object" == typeof t && null !== t && t.$$typeof === r
				}, e.isForwardRef = function(t) {
					return b(t) === p
				}, e.isFragment = function(t) {
					return b(t) === i
				}, e.isLazy = function(t) {
					return b(t) === _
				}, e.isMemo = function(t) {
					return b(t) === m
				}, e.isPortal = function(t) {
					return b(t) === o
				}, e.isProfiler = function(t) {
					return b(t) === s
				}, e.isStrictMode = function(t) {
					return b(t) === a
				}, e.isSuspense = function(t) {
					return b(t) === f
				}, e.isValidElementType = function(t) {
					return "string" == typeof t || "function" == typeof t || t === i || t === d || t === s || t === a || t === f || t === h || "object" == typeof t && null !== t && (t.$$typeof === _ || t.$$typeof === m || t.$$typeof === c || t.$$typeof === l || t.$$typeof === p || t.$$typeof === v || t.$$typeof === y || t.$$typeof === w || t.$$typeof === g)
				}, e.typeOf = b
			},
			9864: (t, e, n) => {
				"use strict";
				t.exports = n(9921)
			},
			1216: (t, e, n) => {
				"use strict";
				var r = function() {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, n, r) {
							return n && t(e.prototype, n), r && t(e, r), e
						}
					}(),
					o = n(3804),
					i = p(o),
					a = p(n(7196)),
					s = p(n(5697)),
					c = n(4081),
					l = p(n(8315)),
					u = p(n(8282)),
					d = p(n(821));

				function p(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function f(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function h(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}

				function m(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				var _ = 0,
					g = 0,
					v = 0,
					y = 0,
					w = "data-lazyload-listened",
					b = [],
					E = [],
					O = !1;
				try {
					var S = Object.defineProperty({}, "passive", {
						get: function() {
							O = !0
						}
					});
					window.addEventListener("test", null, S)
				} catch (t) {}
				var C = !!O && {
						capture: !1,
						passive: !0
					},
					x = function(t) {
						var e = a.default.findDOMNode(t);
						if (e instanceof HTMLElement) {
							var n = (0, l.default)(e);
							(t.props.overflow && n !== e.ownerDocument && n !== document && n !== document.documentElement ? function(t, e) {
								var n = a.default.findDOMNode(t),
									r = void 0,
									o = void 0,
									i = void 0,
									s = void 0;
								try {
									var c = e.getBoundingClientRect();
									r = c.top, o = c.left, i = c.height, s = c.width
								} catch (t) {
									r = _, o = g, i = y, s = v
								}
								var l = window.innerHeight || document.documentElement.clientHeight,
									u = window.innerWidth || document.documentElement.clientWidth,
									d = Math.max(r, 0),
									p = Math.max(o, 0),
									f = Math.min(l, r + i) - d,
									h = Math.min(u, o + s) - p,
									m = void 0,
									w = void 0,
									b = void 0,
									E = void 0;
								try {
									var O = n.getBoundingClientRect();
									m = O.top, w = O.left, b = O.height, E = O.width
								} catch (t) {
									m = _, w = g, b = y, E = v
								}
								var S = m - d,
									C = w - p,
									x = Array.isArray(t.props.offset) ? t.props.offset : [t.props.offset, t.props.offset];
								return S - x[0] <= f && S + b + x[1] >= 0 && C - x[0] <= h && C + E + x[1] >= 0
							}(t, n) : function(t) {
								var e = a.default.findDOMNode(t);
								if (!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)) return !1;
								var n = void 0,
									r = void 0;
								try {
									var o = e.getBoundingClientRect();
									n = o.top, r = o.height
								} catch (t) {
									n = _, r = y
								}
								var i = window.innerHeight || document.documentElement.clientHeight,
									s = Array.isArray(t.props.offset) ? t.props.offset : [t.props.offset, t.props.offset];
								return n - s[0] <= i && n + r + s[1] >= 0
							}(t)) ? t.visible || (t.props.once && E.push(t), t.visible = !0, t.forceUpdate()): t.props.once && t.visible || (t.visible = !1, t.props.unmountIfInvisible && t.forceUpdate())
						}
					},
					P = function() {
						E.forEach((function(t) {
							var e = b.indexOf(t); - 1 !== e && b.splice(e, 1)
						})), E = []
					},
					k = function() {
						for (var t = 0; t < b.length; ++t) {
							var e = b[t];
							x(e)
						}
						P()
					},
					T = void 0,
					N = null,
					A = function(t) {
						function e(t) {
							f(this, e);
							var n = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
							return n.visible = !1, n
						}
						return m(e, t), r(e, [{
							key: "componentDidMount",
							value: function() {
								var t = window,
									e = this.props.scrollContainer;
								e && "string" == typeof e && (t = t.document.querySelector(e));
								var n = void 0 !== this.props.debounce && "throttle" === T || "debounce" === T && void 0 === this.props.debounce;
								if (n && ((0, c.off)(t, "scroll", N, C), (0, c.off)(window, "resize", N, C), N = null), N || (void 0 !== this.props.debounce ? (N = (0, u.default)(k, "number" == typeof this.props.debounce ? this.props.debounce : 300), T = "debounce") : void 0 !== this.props.throttle ? (N = (0, d.default)(k, "number" == typeof this.props.throttle ? this.props.throttle : 300), T = "throttle") : N = k), this.props.overflow) {
									var r = (0, l.default)(a.default.findDOMNode(this));
									if (r && "function" == typeof r.getAttribute) {
										var o = +r.getAttribute(w) + 1;
										1 === o && r.addEventListener("scroll", N, C), r.setAttribute(w, o)
									}
								} else if (0 === b.length || n) {
									var i = this.props,
										s = i.scroll,
										p = i.resize;
									s && (0, c.on)(t, "scroll", N, C), p && (0, c.on)(window, "resize", N, C)
								}
								b.push(this), x(this)
							}
						}, {
							key: "shouldComponentUpdate",
							value: function() {
								return this.visible
							}
						}, {
							key: "componentWillUnmount",
							value: function() {
								if (this.props.overflow) {
									var t = (0, l.default)(a.default.findDOMNode(this));
									if (t && "function" == typeof t.getAttribute) {
										var e = +t.getAttribute(w) - 1;
										0 === e ? (t.removeEventListener("scroll", N, C), t.removeAttribute(w)) : t.setAttribute(w, e)
									}
								}
								var n = b.indexOf(this); - 1 !== n && b.splice(n, 1), 0 === b.length && "undefined" != typeof window && ((0, c.off)(window, "resize", N, C), (0, c.off)(window, "scroll", N, C))
							}
						}, {
							key: "render",
							value: function() {
								return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : i.default.createElement("div", {
									style: {
										height: this.props.height
									},
									className: "lazyload-placeholder"
								})
							}
						}]), e
					}(o.Component);
				A.propTypes = {
					once: s.default.bool,
					height: s.default.oneOfType([s.default.number, s.default.string]),
					offset: s.default.oneOfType([s.default.number, s.default.arrayOf(s.default.number)]),
					overflow: s.default.bool,
					resize: s.default.bool,
					scroll: s.default.bool,
					children: s.default.node,
					throttle: s.default.oneOfType([s.default.number, s.default.bool]),
					debounce: s.default.oneOfType([s.default.number, s.default.bool]),
					placeholder: s.default.node,
					scrollContainer: s.default.oneOfType([s.default.string, s.default.object]),
					unmountIfInvisible: s.default.bool
				}, A.defaultProps = {
					once: !1,
					offset: 0,
					overflow: !1,
					resize: !1,
					scroll: !0,
					unmountIfInvisible: !1
				};
				var D = function(t) {
					return t.displayName || t.name || "Component"
				};
				e.ZP = A
			},
			8282: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e, n) {
					var r = void 0,
						o = void 0,
						i = void 0,
						a = void 0,
						s = void 0,
						c = function c() {
							var l = +new Date - a;
							l < e && l >= 0 ? r = setTimeout(c, e - l) : (r = null, n || (s = t.apply(i, o), r || (i = null, o = null)))
						};
					return function() {
						i = this, o = arguments, a = +new Date;
						var l = n && !r;
						return r || (r = setTimeout(c, e)), l && (s = t.apply(i, o), i = null, o = null), s
					}
				}
			},
			4081: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.on = function(t, e, n, r) {
					r = r || !1, t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent && t.attachEvent("on" + e, (function(e) {
						n.call(t, e || window.event)
					}))
				}, e.off = function(t, e, n, r) {
					r = r || !1, t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent && t.detachEvent("on" + e, n)
				}
			},
			8315: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					if (!(t instanceof HTMLElement)) return document.documentElement;
					for (var e = "absolute" === t.style.position, n = /(scroll|auto)/, r = t; r;) {
						if (!r.parentNode) return t.ownerDocument || document.documentElement;
						var o = window.getComputedStyle(r),
							i = o.position,
							a = o.overflow,
							s = o["overflow-x"],
							c = o["overflow-y"];
						if ("static" === i && e) r = r.parentNode;
						else {
							if (n.test(a) && n.test(s) && n.test(c)) return r;
							r = r.parentNode
						}
					}
					return t.ownerDocument || t.documentElement || document.documentElement
				}
			},
			821: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t, e, n) {
					var r, o;
					return e || (e = 250),
						function() {
							var i = n || this,
								a = +new Date,
								s = arguments;
							r && a < r + e ? (clearTimeout(o), o = setTimeout((function() {
								r = a, t.apply(i, s)
							}), e)) : (r = a, t.apply(i, s))
						}
				}
			},
			1818: (t, e, n) => {
				"use strict";
				t.exports = n(4359)
			},
			4359: (t, e, n) => {
				t.exports = function(t) {
					var e = {};

					function n(r) {
						if (e[r]) return e[r].exports;
						var o = e[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
					}
					return n.m = t, n.c = e, n.d = function(t, e, r) {
						n.o(t, e) || Object.defineProperty(t, e, {
							enumerable: !0,
							get: r
						})
					}, n.r = function(t) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(t, "__esModule", {
							value: !0
						})
					}, n.t = function(t, e) {
						if (1 & e && (t = n(t)), 8 & e) return t;
						if (4 & e && "object" == typeof t && t && t.__esModule) return t;
						var r = Object.create(null);
						if (n.r(r), Object.defineProperty(r, "default", {
								enumerable: !0,
								value: t
							}), 2 & e && "string" != typeof t)
							for (var o in t) n.d(r, o, function(e) {
								return t[e]
							}.bind(null, o));
						return r
					}, n.n = function(t) {
						var e = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return n.d(e, "a", e), e
					}, n.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, n.p = "", n(n.s = 2)
				}([function(t, e) {
					t.exports = n(3804)
				}, function(t, e, n) {}, function(t, e, n) {
					"use strict";
					n.r(e), n.d(e, "store", (function() {
						return u
					}));
					var r = n(0),
						o = n.n(r);
					const i = "notification__item";
					var a, s, c, l;
					! function(t) {
						t.BOTTOM_LEFT = "bottom-left", t.BOTTOM_RIGHT = "bottom-right", t.BOTTOM_CENTER = "bottom-center", t.TOP_LEFT = "top-left", t.TOP_RIGHT = "top-right", t.TOP_CENTER = "top-center", t.CENTER = "center", t.TOP_FULL = "top-full", t.BOTTOM_FULL = "bottom-full"
					}(a || (a = {})),
					function(t) {
						t.TOP = "top", t.BOTTOM = "bottom"
					}(s || (s = {})),
					function(t) {
						t.SUCCESS = "success", t.DANGER = "danger", t.INFO = "info", t.DEFAULT = "default", t.WARNING = "warning"
					}(c || (c = {})),
					function(t) {
						t.TIMEOUT = "timeout", t.CLICK = "click", t.TOUCH = "touch", t.MANUAL = "manual"
					}(l || (l = {}));
					var u = new class {
						constructor() {
							this.incrementCounter = () => this.counter += 1, this.getCounter = () => this.counter, this.counter = 0, this.add = null
						}
						addNotification(t) {
							this.incrementCounter();
							const e = function(t, e, n) {
								const r = t,
									{
										id: o,
										type: i,
										insert: a,
										content: s,
										container: l,
										animationIn: p,
										animationOut: f,
										slidingEnter: h,
										slidingExit: m,
										touchRevert: g,
										touchSlidingExit: v,
										dismiss: y,
										width: w,
										onRemoval: b
									} = r;
								r.id = o || u.getCounter().toString(), r.type = s ? null : i.toLowerCase(), e && !s && (r.userDefinedTypes = function(t, e) {
									const {
										content: n,
										type: r
									} = t;
									if (!n && r !== c.SUCCESS && r !== c.DANGER && r !== c.INFO && r !== c.DEFAULT && r !== c.WARNING && e) return e
								}(r, e)), r.width = d(w) ? n : w, r.container = l.toLowerCase(), r.insert = (a || "top").toLowerCase(), r.dismiss = function(t) {
									const e = t,
										n = {
											duration: 0,
											click: !0,
											touch: !0,
											onScreen: !1,
											pauseOnHover: !1,
											waitForAnimation: !1,
											showIcon: !1
										};
									return e ? (Object.keys(n).forEach(t => {
										d(e[t]) && (e[t] = n[t])
									}), e) : n
								}(y), r.animationIn = p || [], r.animationOut = f || [], r.onRemoval = b || (() => {});
								const E = (t, e, n) => ({
									duration: t,
									timingFunction: e,
									delay: n
								});
								r.slidingEnter = _(h, E(600, "linear", 0)), r.slidingExit = _(m, E(600, "linear", 0)), r.touchRevert = _(g, E(600, "linear", 0));
								const O = v || {},
									S = O.swipe || {},
									C = O.fade || {};
								return r.touchSlidingExit = O, r.touchSlidingExit.swipe = _(S, E(600, "linear", 0)), r.touchSlidingExit.fade = _(C, E(300, "linear", 0)), r
							}(t, this.types, this.defaultNotificationWidth);
							return this.add(e)
						}
						register(t) {
							const {
								addNotification: e,
								removeNotification: n,
								removeAllNotifications: r,
								types: o,
								defaultNotificationWidth: i
							} = t;
							this.add = e, this.removeNotification = n, this.removeAllNotifications = r, this.defaultNotificationWidth = i, this.types = o
						}
					};
					const d = t => null == t;

					function p(t) {
						return t === a.BOTTOM_FULL || t === a.BOTTOM_LEFT || t === a.BOTTOM_RIGHT || t === a.BOTTOM_CENTER
					}

					function f(t) {
						return t === a.TOP_FULL || t === a.TOP_LEFT || t === a.TOP_RIGHT || t === a.TOP_CENTER
					}

					function h(t) {
						const {
							type: e,
							content: n,
							userDefinedTypes: r
						} = t, o = [i];
						if (n) return o;
						if (d(r)) return function(t) {
							switch (t) {
								case c.DEFAULT:
									return [i, "notification__item--default"];
								case c.SUCCESS:
									return [i, "notification__item--success"];
								case c.DANGER:
									return [i, "notification__item--danger"];
								case c.WARNING:
									return [i, "notification__item--warning"];
								case c.INFO:
									return [i, "notification__item--info"];
								default:
									return [i]
							}
						}(e);
						const a = r.find(t => t.name === e);
						return o.concat(a.htmlClasses)
					}

					function m({
						duration: t,
						timingFunction: e,
						delay: n
					}, r) {
						return `${t}ms ${r} ${e} ${n}ms`
					}

					function _(t, {
						duration: e,
						timingFunction: n,
						delay: r
					}) {
						const o = t || {};
						return d(o.duration) && (o.duration = e), d(o.timingFunction) && (o.timingFunction = n), d(o.delay) && (o.delay = r), o
					}
					class g {
						constructor(t, e) {
							this.callback = t, this.remaining = e, this.resume()
						}
						pause() {
							clearTimeout(this.timerId), this.remaining -= Date.now() - this.start
						}
						resume() {
							this.start = Date.now(), clearTimeout(this.timerId), this.timerId = setTimeout(this.callback, this.remaining)
						}
						clear() {
							clearTimeout(this.timerId)
						}
					}
					class v extends o.a.Component {
						constructor(t) {
							super(t), this.onClick = () => {
								const {
									notification: {
										dismiss: t
									}
								} = this.props;
								(t.click || t.showIcon) && this.removeNotification(l.CLICK)
							}, this.onTouchStart = t => {
								const {
									pageX: e
								} = t.touches[0];
								this.setState(({
									parentStyle: t
								}) => ({
									startX: e,
									currentX: e,
									parentStyle: Object.assign(Object.assign({}, t), {
										position: "relative"
									})
								}))
							}, this.onTouchMove = t => {
								const {
									pageX: e
								} = t.touches[0], {
									startX: n
								} = this.state, {
									toggleRemoval: r,
									notification: {
										id: o,
										onRemoval: i,
										slidingExit: a,
										touchSlidingExit: {
											swipe: s,
											fade: c
										}
									}
								} = this.props, u = e - n, {
									offsetWidth: d
								} = this.rootElementRef.current, p = window.innerWidth + d, f = (e - n >= 0 ? p : -p) + "px";
								if (function(t, e) {
										return Math.abs(t) >= .4 * e
									}(u, d)) {
									const t = m(s, "left"),
										e = m(c, "opacity"),
										n = () => {
											r(o, () => i(o, l.TOUCH))
										};
									return this.setState(({
										parentStyle: r
									}) => ({
										touchEnabled: !1,
										parentStyle: Object.assign(Object.assign({}, r), {
											left: f,
											opacity: 0,
											transition: `${t}, ${e}`
										}),
										onTransitionEnd: () => {
											this.setState(({
												parentStyle: t
											}) => ({
												parentStyle: Object.assign(Object.assign({}, t), {
													height: "0px",
													overflow: "hidden",
													transition: m(a, "height")
												}),
												onTransitionEnd: n
											}))
										}
									}))
								}
								return this.setState(({
									parentStyle: t
								}) => ({
									currentX: e,
									parentStyle: Object.assign(Object.assign({}, t), {
										left: 0 + u + "px"
									})
								}))
							}, this.onTouchEnd = () => {
								const {
									notification: {
										touchRevert: t
									}
								} = this.props;
								this.setState(({
									parentStyle: e
								}) => ({
									parentStyle: Object.assign(Object.assign({}, e), {
										left: 0,
										transition: m(t, "left")
									})
								}))
							}, this.onMouseEnter = () => {
								this.timer ? this.timer.pause() : this.setState({
									animationPlayState: "paused"
								})
							}, this.onMouseLeave = () => {
								this.timer ? this.timer.resume() : this.setState({
									animationPlayState: "running"
								})
							}, this.rootElementRef = o.a.createRef();
							const {
								defaultNotificationWidth: e,
								notification: n,
								isMobile: r
							} = t, {
								width: i,
								container: s
							} = n;
							this.state = {
								parentStyle: {
									height: "0px",
									overflow: "hidden",
									width: (i || e) + "px"
								},
								htmlClassList: h(n),
								animationPlayState: "running",
								touchEnabled: !0
							};
							const c = -1 !== [a.TOP_FULL, a.BOTTOM_FULL, a.TOP_CENTER, a.BOTTOM_CENTER, a.CENTER].indexOf(s);
							(r || c) && (this.state.parentStyle.width = "100%")
						}
						componentWillUnmount() {
							this.timer && this.timer.clear()
						}
						componentDidMount() {
							const {
								notification: t,
								notificationsCount: e
							} = this.props, {
								dismiss: {
									duration: n,
									onScreen: r
								}
							} = t, o = function(t, e) {
								return !(e <= 1) && e > 1 && (t.insert === s.TOP && f(t.container) || t.insert === s.BOTTOM && p(t.container) || t.container === a.CENTER)
							}(t, e), {
								scrollHeight: i
							} = this.rootElementRef.current, c = () => {
								n && !r && (this.timer = new g(() => this.removeNotification(l.TIMEOUT), n))
							};
							this.setState(({
								parentStyle: {
									width: e
								}
							}) => ({
								parentStyle: {
									width: e,
									height: i + "px",
									transition: o ? m(t.slidingEnter, "height") : "10ms height"
								},
								onTransitionEnd: c
							}), () => {
								requestAnimationFrame(() => {
									this.setState(e => ({
										htmlClassList: [...t.animationIn, ...e.htmlClassList]
									}))
								})
							})
						}
						componentDidUpdate({
							hasBeenRemoved: t
						}) {
							this.props.hasBeenRemoved && !t && this.removeNotification(l.MANUAL)
						}
						removeNotification(t) {
							const {
								notification: e,
								toggleRemoval: n
							} = this.props, {
								id: r,
								onRemoval: o,
								dismiss: {
									waitForAnimation: i
								}
							} = e, a = [...e.animationOut, ...h(e)], s = () => n(r, () => o(r, t)), c = {
								height: "0px",
								overflow: "hidden",
								transition: m(e.slidingExit, "height")
							};
							return i ? this.setState(({
								parentStyle: {
									width: t
								}
							}) => ({
								htmlClassList: a,
								onAnimationEnd: () => {
									this.setState({
										parentStyle: Object.assign({
											width: t
										}, c),
										onTransitionEnd: s
									})
								}
							})) : this.setState(({
								parentStyle: {
									width: t
								}
							}) => ({
								parentStyle: Object.assign({
									width: t
								}, c),
								onTransitionEnd: s,
								htmlClassList: a
							}))
						}
						renderTimer() {
							const {
								notification: {
									dismiss: t
								}
							} = this.props, {
								duration: e,
								onScreen: n
							} = t, {
								animationPlayState: r
							} = this.state;
							if (!e || !n) return;
							const i = {
								animationName: "timer",
								animationDuration: e + "ms",
								animationTimingFunction: "linear",
								animationFillMode: "forwards",
								animationDelay: "0",
								animationPlayState: r
							};
							return o.a.createElement("div", {
								className: "notification__timer"
							}, o.a.createElement("div", {
								className: "notification__timer-filler",
								onAnimationEnd: () => this.removeNotification(l.TIMEOUT),
								style: i
							}))
						}
						renderCustomContent() {
							const {
								htmlClassList: t
							} = this.state, {
								notification: {
									id: e,
									content: n,
									dismiss: {
										duration: r,
										pauseOnHover: i
									}
								}
							} = this.props, a = r > 0 && i;
							return o.a.createElement("div", {
								className: "" + [...t].join(" "),
								onMouseEnter: a ? this.onMouseEnter : null,
								onMouseLeave: a ? this.onMouseLeave : null
							}, o.a.isValidElement(n) ? n : o.a.createElement(n, Object.assign({}, {
								id: e
							})))
						}
						renderNotification() {
							const {
								notification: {
									title: t,
									message: e,
									dismiss: {
										showIcon: n,
										duration: r,
										pauseOnHover: i
									}
								}
							} = this.props, {
								htmlClassList: a
							} = this.state, s = r > 0 && i;
							return o.a.createElement("div", {
								className: "" + [...a].join(" "),
								onMouseEnter: s ? this.onMouseEnter : null,
								onMouseLeave: s ? this.onMouseLeave : null
							}, o.a.createElement("div", {
								className: "notification__content"
							}, n && o.a.createElement("div", {
								className: "notification__close",
								onClick: this.onClick
							}), t && o.a.createElement("div", {
								className: "notification__title"
							}, t), o.a.createElement("div", {
								className: "notification__message"
							}, e), this.renderTimer()))
						}
						render() {
							const {
								notification: {
									content: t,
									dismiss: {
										click: e
									}
								}
							} = this.props, {
								parentStyle: n,
								onAnimationEnd: r,
								onTransitionEnd: i,
								touchEnabled: a
							} = this.state;
							return o.a.createElement("div", {
								ref: this.rootElementRef,
								onClick: e ? this.onClick : null,
								className: "notification",
								style: n,
								onAnimationEnd: r,
								onTransitionEnd: i,
								onTouchStart: a ? this.onTouchStart : null,
								onTouchMove: a ? this.onTouchMove : null,
								onTouchEnd: a ? this.onTouchEnd : null
							}, t ? this.renderCustomContent() : this.renderNotification())
						}
					}
					var y = v;
					n(1);
					class w extends o.a.Component {
						constructor(t) {
							super(t), this.handleResize = () => {
								this.setState({
									windowWidth: window.innerWidth
								})
							}, this.add = t => (this.setState(({
								notifications: e
							}) => ({
								notifications: "top" === t.insert ? [t, ...e] : [...e, t]
							})), t.id), this.remove = t => {
								this.setState(({
									notifications: e
								}) => ({
									notifications: e.map(e => (e.id === t && (e.hasBeenRemoved = !0), e))
								}))
							}, this.removeAllNotifications = () => {
								this.setState({
									notifications: this.state.notifications.map(t => Object.assign(Object.assign({}, t), {
										hasBeenRemoved: !0
									}))
								})
							}, this.toggleRemoval = (t, e) => {
								this.setState(({
									notifications: e
								}) => ({
									notifications: e.filter(({
										id: e
									}) => e !== t)
								}), e)
							}, this.state = {
								isMobile: !!d(t.isMobile) || t.isMobile,
								breakpoint: d(t.breakpoint) ? 768 : t.breakpoint,
								notifications: [],
								windowWidth: void 0
							}
						}
						componentDidMount() {
							const {
								types: t,
								defaultNotificationWidth: e
							} = this.props;
							u.register({
								addNotification: this.add,
								removeNotification: this.remove,
								removeAllNotifications: this.removeAllNotifications,
								defaultNotificationWidth: e || 325,
								types: t
							}), this.setState({
								windowWidth: window.innerWidth
							}), window.addEventListener("resize", this.handleResize)
						}
						componentWillUnmount() {
							window.removeEventListener("resize", this.handleResize)
						}
						renderNotifications(t, e) {
							return t.map(n => o.a.createElement(y, {
								id: n.id,
								key: n.id,
								isMobile: e,
								defaultNotificationWidth: this.props.defaultNotificationWidth,
								notification: n,
								toggleRemoval: this.toggleRemoval,
								notificationsCount: t.length,
								hasBeenRemoved: n.hasBeenRemoved
							}))
						}
						renderMobileNotifications(t) {
							const {
								className: e,
								id: n
							} = t, {
								notifications: r
							} = this.state, i = function(t) {
								const e = [],
									n = [];
								return t.forEach(t => {
									const {
										container: r
									} = t, {
										CENTER: o
									} = a;
									f(r) || r === o ? e.push(t) : p(r) && n.push(t)
								}), {
									top: e,
									bottom: n
								}
							}(r), s = this.renderNotifications(i.top, !0), c = this.renderNotifications(i.bottom, !0);
							return o.a.createElement("div", {
								id: n,
								key: "mobile",
								className: "notifications-component " + (e || "")
							}, o.a.createElement("div", {
								className: "notification-container--mobile-top"
							}, s), o.a.createElement("div", {
								className: "notification-container--mobile-bottom"
							}, c))
						}
						renderScreenNotifications(t) {
							const {
								className: e,
								id: n
							} = t, {
								notifications: r
							} = this.state, i = function(t) {
								const e = [],
									n = [],
									r = [],
									o = [],
									i = [],
									s = [],
									c = [],
									l = [],
									u = [];
								return t.forEach(t => {
									const {
										container: d
									} = t;
									d === a.TOP_FULL ? l.push(t) : d === a.BOTTOM_FULL ? u.push(t) : d === a.TOP_LEFT ? e.push(t) : d === a.TOP_RIGHT ? n.push(t) : d === a.TOP_CENTER ? r.push(t) : d === a.BOTTOM_LEFT ? o.push(t) : d === a.BOTTOM_RIGHT ? i.push(t) : d === a.BOTTOM_CENTER ? s.push(t) : d === a.CENTER && c.push(t)
								}), {
									topFull: l,
									bottomFull: u,
									topLeft: e,
									topRight: n,
									topCenter: r,
									bottomLeft: o,
									bottomRight: i,
									bottomCenter: s,
									center: c
								}
							}(r), s = this.renderNotifications(i.topFull, !1), c = this.renderNotifications(i.bottomFull, !1), l = this.renderNotifications(i.topLeft, !1), u = this.renderNotifications(i.topRight, !1), d = this.renderNotifications(i.topCenter, !1), p = this.renderNotifications(i.bottomLeft, !1), f = this.renderNotifications(i.bottomRight, !1), h = this.renderNotifications(i.bottomCenter, !1), m = this.renderNotifications(i.center, !1);
							return o.a.createElement("div", {
								id: n,
								key: "screen",
								className: "notifications-component " + (e || "")
							}, o.a.createElement("div", {
								className: "notification-container--top-full"
							}, s), o.a.createElement("div", {
								className: "notification-container--bottom-full"
							}, c), o.a.createElement("div", {
								className: "notification-container--top-left"
							}, l), o.a.createElement("div", {
								className: "notification-container--top-right"
							}, u), o.a.createElement("div", {
								className: "notification-container--bottom-left"
							}, p), o.a.createElement("div", {
								className: "notification-container--bottom-right"
							}, f), o.a.createElement("div", {
								className: "notification-container--top-center"
							}, d), o.a.createElement("div", {
								className: "notification-container--center"
							}, o.a.createElement("div", {
								className: "flex-center"
							}, m)), o.a.createElement("div", {
								className: "notification-container--bottom-center"
							}, h))
						}
						render() {
							const {
								isMobile: t
							} = this.props, {
								windowWidth: e,
								breakpoint: n
							} = this.state;
							return t && e <= n ? this.renderMobileNotifications(this.props) : this.renderScreenNotifications(this.props)
						}
					}
					var b = w;
					e.default = b
				}])
			},
			6585: t => {
				t.exports = Array.isArray || function(t) {
					return "[object Array]" == Object.prototype.toString.call(t)
				}
			},
			9658: (t, e, n) => {
				var r = n(6585);
				t.exports = f, t.exports.parse = i, t.exports.compile = function(t, e) {
					return s(i(t, e), e)
				}, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = p;
				var o = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

				function i(t, e) {
					for (var n, r = [], i = 0, a = 0, s = "", u = e && e.delimiter || "/"; null != (n = o.exec(t));) {
						var d = n[0],
							p = n[1],
							f = n.index;
						if (s += t.slice(a, f), a = f + d.length, p) s += p[1];
						else {
							var h = t[a],
								m = n[2],
								_ = n[3],
								g = n[4],
								v = n[5],
								y = n[6],
								w = n[7];
							s && (r.push(s), s = "");
							var b = null != m && null != h && h !== m,
								E = "+" === y || "*" === y,
								O = "?" === y || "*" === y,
								S = n[2] || u,
								C = g || v;
							r.push({
								name: _ || i++,
								prefix: m || "",
								delimiter: S,
								optional: O,
								repeat: E,
								partial: b,
								asterisk: !!w,
								pattern: C ? l(C) : w ? ".*" : "[^" + c(S) + "]+?"
							})
						}
					}
					return a < t.length && (s += t.substr(a)), s && r.push(s), r
				}

				function a(t) {
					return encodeURI(t).replace(/[\/?#]/g, (function(t) {
						return "%" + t.charCodeAt(0).toString(16).toUpperCase()
					}))
				}

				function s(t, e) {
					for (var n = new Array(t.length), o = 0; o < t.length; o++) "object" == typeof t[o] && (n[o] = new RegExp("^(?:" + t[o].pattern + ")$", d(e)));
					return function(e, o) {
						for (var i = "", s = e || {}, c = (o || {}).pretty ? a : encodeURIComponent, l = 0; l < t.length; l++) {
							var u = t[l];
							if ("string" != typeof u) {
								var d, p = s[u.name];
								if (null == p) {
									if (u.optional) {
										u.partial && (i += u.prefix);
										continue
									}
									throw new TypeError('Expected "' + u.name + '" to be defined')
								}
								if (r(p)) {
									if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
									if (0 === p.length) {
										if (u.optional) continue;
										throw new TypeError('Expected "' + u.name + '" to not be empty')
									}
									for (var f = 0; f < p.length; f++) {
										if (d = c(p[f]), !n[l].test(d)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(d) + "`");
										i += (0 === f ? u.prefix : u.delimiter) + d
									}
								} else {
									if (d = u.asterisk ? encodeURI(p).replace(/[?#]/g, (function(t) {
											return "%" + t.charCodeAt(0).toString(16).toUpperCase()
										})) : c(p), !n[l].test(d)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + d + '"');
									i += u.prefix + d
								}
							} else i += u
						}
						return i
					}
				}

				function c(t) {
					return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
				}

				function l(t) {
					return t.replace(/([=!:$\/()])/g, "\\$1")
				}

				function u(t, e) {
					return t.keys = e, t
				}

				function d(t) {
					return t && t.sensitive ? "" : "i"
				}

				function p(t, e, n) {
					r(e) || (n = e || n, e = []);
					for (var o = (n = n || {}).strict, i = !1 !== n.end, a = "", s = 0; s < t.length; s++) {
						var l = t[s];
						if ("string" == typeof l) a += c(l);
						else {
							var p = c(l.prefix),
								f = "(?:" + l.pattern + ")";
							e.push(l), l.repeat && (f += "(?:" + p + f + ")*"), a += f = l.optional ? l.partial ? p + "(" + f + ")?" : "(?:" + p + "(" + f + "))?" : p + "(" + f + ")"
						}
					}
					var h = c(n.delimiter || "/"),
						m = a.slice(-h.length) === h;
					return o || (a = (m ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"), a += i ? "$" : o && m ? "" : "(?=" + h + "|$)", u(new RegExp("^" + a, d(n)), e)
				}

				function f(t, e, n) {
					return r(e) || (n = e || n, e = []), n = n || {}, t instanceof RegExp ? function(t, e) {
						var n = t.source.match(/\((?!\?)/g);
						if (n)
							for (var r = 0; r < n.length; r++) e.push({
								name: r,
								prefix: null,
								delimiter: null,
								optional: !1,
								repeat: !1,
								partial: !1,
								asterisk: !1,
								pattern: null
							});
						return u(t, e)
					}(t, e) : r(t) ? function(t, e, n) {
						for (var r = [], o = 0; o < t.length; o++) r.push(f(t[o], e, n).source);
						return u(new RegExp("(?:" + r.join("|") + ")", d(n)), e)
					}(t, e, n) : function(t, e, n) {
						return p(i(t, n), e, n)
					}(t, e, n)
				}
			},
			8500: (t, e, n) => {
				"use strict";
				var r = n(4890).qC;
				e.Uo = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
					if (0 !== arguments.length) return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
				}, "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
			},
			4385: (t, e, n) => {
				"use strict";
				e.K3 = void 0;
				var r = n(4926),
					o = 0,
					i = {
						channel: "redux_state_sync",
						predicate: null,
						blacklist: [],
						whitelist: [],
						broadcastChannelOption: void 0,
						prepareState: function(t) {
							return t
						}
					};

				function a() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}

				function s() {
					return "" + a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
				}
				var c = s();

				function l(t) {
					var e = t;
					return e.$uuid = s(), e.$wuid = c, e
				}

				function u(t) {
					var e = t.predicate,
						n = t.blacklist,
						r = t.whitelist,
						o = function() {
							return !0
						};
					return e && "function" == typeof e ? o = e : Array.isArray(n) ? o = function(t) {
						return n.indexOf(t.type) < 0
					} : Array.isArray(r) && (o = function(t) {
						return r.indexOf(t.type) >= 0
					}), o
				}

				function d(t) {
					var e = t.channel,
						n = t.dispatch,
						r = t.allowed,
						i = !1,
						a = {};
					this.handleOnMessage = function(t) {
						t.$wuid !== c && ("&_RECEIVE_INIT_STATE" !== t.type && t.$uuid && t.$uuid !== o && ("&_GET_INIT_STATE" !== t.type || a[t.$wuid] ? "&_SEND_INIT_STATE" !== t.type || a[t.$wuid] ? r(t) && (o = t.$uuid, n(Object.assign(t, {
							$isSync: !0
						}))) : i || (i = !0, n({
							type: "&_RECEIVE_INIT_STATE",
							payload: t.payload
						})) : (a[t.$wuid] = !0, n({
							type: "&_SEND_INIT_STATE"
						}))))
					}, this.messageChannel = e, this.messageChannel.onmessage = this.handleOnMessage
				}
				e.K3 = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						e = u(t),
						n = new r.BroadcastChannel(t.channel, t.broadcastChannelOption),
						a = t.prepareState || i.prepareState,
						s = null;
					return function(t) {
						var r = t.getState,
							i = t.dispatch;
						return function(t) {
							return function(c) {
								if (s || (s = new d({
										channel: n,
										dispatch: i,
										allowed: e
									})), c && !c.$uuid) {
									var u = l(c);
									o = u.$uuid;
									try {
										if ("&_SEND_INIT_STATE" === c.type) return r() && (u.payload = a(r()), n.postMessage(u)), t(c);
										(e(u) || "&_GET_INIT_STATE" === c.type) && n.postMessage(u)
									} catch (t) {
										console.error("Your browser doesn't support cross tab communication")
									}
								}
								return t(Object.assign(c, {
									$isSync: void 0 !== c.$isSync && c.$isSync
								}))
							}
						}
					}
				};
				var p = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.prepareState;
					return function(n, r) {
						var o = n;
						return "&_RECEIVE_INIT_STATE" === r.type && (o = e(r.payload)), t(o, r)
					}
				}
			},
			4890: (t, e, n) => {
				"use strict";
				n.d(e, {
					md: () => _,
					DE: () => d,
					UY: () => l,
					qC: () => m,
					MT: () => s
				});
				var r = n(7121),
					o = function() {
						return Math.random().toString(36).substring(7).split("").join(".")
					},
					i = {
						INIT: "@@redux/INIT" + o(),
						REPLACE: "@@redux/REPLACE" + o(),
						PROBE_UNKNOWN_ACTION: function() {
							return "@@redux/PROBE_UNKNOWN_ACTION" + o()
						}
					};

				function a(t) {
					if ("object" != typeof t || null === t) return !1;
					for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
					return Object.getPrototypeOf(t) === e
				}

				function s(t, e, n) {
					var o;
					if ("function" == typeof e && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
					if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
						if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
						return n(s)(t, e)
					}
					if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
					var c = t,
						l = e,
						u = [],
						d = u,
						p = !1;

					function f() {
						d === u && (d = u.slice())
					}

					function h() {
						if (p) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
						return l
					}

					function m(t) {
						if ("function" != typeof t) throw new Error("Expected the listener to be a function.");
						if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
						var e = !0;
						return f(), d.push(t),
							function() {
								if (e) {
									if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
									e = !1, f();
									var n = d.indexOf(t);
									d.splice(n, 1), u = null
								}
							}
					}

					function _(t) {
						if (!a(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
						if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
						if (p) throw new Error("Reducers may not dispatch actions.");
						try {
							p = !0, l = c(l, t)
						} finally {
							p = !1
						}
						for (var e = u = d, n = 0; n < e.length; n++) {
							(0, e[n])()
						}
						return t
					}

					function g(t) {
						if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
						c = t, _({
							type: i.REPLACE
						})
					}

					function v() {
						var t, e = m;
						return (t = {
							subscribe: function(t) {
								if ("object" != typeof t || null === t) throw new TypeError("Expected the observer to be an object.");

								function n() {
									t.next && t.next(h())
								}
								return n(), {
									unsubscribe: e(n)
								}
							}
						})[r.Z] = function() {
							return this
						}, t
					}
					return _({
						type: i.INIT
					}), (o = {
						dispatch: _,
						subscribe: m,
						getState: h,
						replaceReducer: g
					})[r.Z] = v, o
				}

				function c(t, e) {
					var n = e && e.type;
					return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
				}

				function l(t) {
					for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
						var o = e[r];
						0, "function" == typeof t[o] && (n[o] = t[o])
					}
					var a, s = Object.keys(n);
					try {
						! function(t) {
							Object.keys(t).forEach((function(e) {
								var n = t[e];
								if (void 0 === n(void 0, {
										type: i.INIT
									})) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
								if (void 0 === n(void 0, {
										type: i.PROBE_UNKNOWN_ACTION()
									})) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
							}))
						}(n)
					} catch (t) {
						a = t
					}
					return function(t, e) {
						if (void 0 === t && (t = {}), a) throw a;
						for (var r = !1, o = {}, i = 0; i < s.length; i++) {
							var l = s[i],
								u = n[l],
								d = t[l],
								p = u(d, e);
							if (void 0 === p) {
								var f = c(l, e);
								throw new Error(f)
							}
							o[l] = p, r = r || p !== d
						}
						return (r = r || s.length !== Object.keys(t).length) ? o : t
					}
				}

				function u(t, e) {
					return function() {
						return e(t.apply(this, arguments))
					}
				}

				function d(t, e) {
					if ("function" == typeof t) return u(t, e);
					if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
					var n = {};
					for (var r in t) {
						var o = t[r];
						"function" == typeof o && (n[r] = u(o, e))
					}
					return n
				}

				function p(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}

				function f(t, e) {
					var n = Object.keys(t);
					return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), e && (n = n.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n
				}

				function h(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? f(n, !0).forEach((function(e) {
							p(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}

				function m() {
					for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					return 0 === e.length ? function(t) {
						return t
					} : 1 === e.length ? e[0] : e.reduce((function(t, e) {
						return function() {
							return t(e.apply(void 0, arguments))
						}
					}))
				}

				function _() {
					for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					return function(t) {
						return function() {
							var n = t.apply(void 0, arguments),
								r = function() {
									throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
								},
								o = {
									getState: n.getState,
									dispatch: function() {
										return r.apply(void 0, arguments)
									}
								},
								i = e.map((function(t) {
									return t(o)
								}));
							return h({}, n, {
								dispatch: r = m.apply(void 0, i)(n.dispatch)
							})
						}
					}
				}
			},
			5666: t => {
				var e = function(t) {
					"use strict";
					var e = Object.prototype,
						n = e.hasOwnProperty,
						r = "function" == typeof Symbol ? Symbol : {},
						o = r.iterator || "@@iterator",
						i = r.asyncIterator || "@@asyncIterator",
						a = r.toStringTag || "@@toStringTag";

					function s(t, e, n) {
						return Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						s({}, "")
					} catch (t) {
						s = function(t, e, n) {
							return t[e] = n
						}
					}

					function c(t, e, n, r) {
						var o = e && e.prototype instanceof d ? e : d,
							i = Object.create(o.prototype),
							a = new O(r || []);
						return i._invoke = function(t, e, n) {
							var r = "suspendedStart";
							return function(o, i) {
								if ("executing" === r) throw new Error("Generator is already running");
								if ("completed" === r) {
									if ("throw" === o) throw i;
									return C()
								}
								for (n.method = o, n.arg = i;;) {
									var a = n.delegate;
									if (a) {
										var s = w(a, n);
										if (s) {
											if (s === u) continue;
											return s
										}
									}
									if ("next" === n.method) n.sent = n._sent = n.arg;
									else if ("throw" === n.method) {
										if ("suspendedStart" === r) throw r = "completed", n.arg;
										n.dispatchException(n.arg)
									} else "return" === n.method && n.abrupt("return", n.arg);
									r = "executing";
									var c = l(t, e, n);
									if ("normal" === c.type) {
										if (r = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
										return {
											value: c.arg,
											done: n.done
										}
									}
									"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
								}
							}
						}(t, n, a), i
					}

					function l(t, e, n) {
						try {
							return {
								type: "normal",
								arg: t.call(e, n)
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t
							}
						}
					}
					t.wrap = c;
					var u = {};

					function d() {}

					function p() {}

					function f() {}
					var h = {};
					h[o] = function() {
						return this
					};
					var m = Object.getPrototypeOf,
						_ = m && m(m(S([])));
					_ && _ !== e && n.call(_, o) && (h = _);
					var g = f.prototype = d.prototype = Object.create(h);

					function v(t) {
						["next", "throw", "return"].forEach((function(e) {
							s(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function y(t, e) {
						var r;
						this._invoke = function(o, i) {
							function a() {
								return new e((function(r, a) {
									! function r(o, i, a, s) {
										var c = l(t[o], t, i);
										if ("throw" !== c.type) {
											var u = c.arg,
												d = u.value;
											return d && "object" == typeof d && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
												r("next", t, a, s)
											}), (function(t) {
												r("throw", t, a, s)
											})) : e.resolve(d).then((function(t) {
												u.value = t, a(u)
											}), (function(t) {
												return r("throw", t, a, s)
											}))
										}
										s(c.arg)
									}(o, i, r, a)
								}))
							}
							return r = r ? r.then(a, a) : a()
						}
					}

					function w(t, e) {
						var n = t.iterator[e.method];
						if (void 0 === n) {
							if (e.delegate = null, "throw" === e.method) {
								if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
								e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return u
						}
						var r = l(n, t.iterator, e.arg);
						if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
						var o = r.arg;
						return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
					}

					function b(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(b, this), this.reset(!0)
					}

					function S(t) {
						if (t) {
							var e = t[o];
							if (e) return e.call(t);
							if ("function" == typeof t.next) return t;
							if (!isNaN(t.length)) {
								var r = -1,
									i = function e() {
										for (; ++r < t.length;)
											if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
										return e.value = void 0, e.done = !0, e
									};
								return i.next = i
							}
						}
						return {
							next: C
						}
					}

					function C() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = g.constructor = f, f.constructor = p, p.displayName = s(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, s(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, v(y.prototype), y.prototype[i] = function() {
						return this
					}, t.AsyncIterator = y, t.async = function(e, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new y(c(e, n, r, o), i);
						return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, v(g), s(g, a, "Generator"), g[o] = function() {
						return this
					}, g.toString = function() {
						return "[object Generator]"
					}, t.keys = function(t) {
						var e = [];
						for (var n in t) e.push(n);
						return e.reverse(),
							function n() {
								for (; e.length;) {
									var r = e.pop();
									if (r in t) return n.value = r, n.done = !1, n
								}
								return n.done = !0, n
							}
					}, t.values = S, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
								for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
						},
						stop: function() {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function(t) {
							if (this.done) throw t;
							var e = this;

							function r(n, r) {
								return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var s = n.call(i, "catchLoc"),
										c = n.call(i, "finallyLoc");
									if (s && c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (s) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), u
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										E(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, n) {
							return this.delegate = {
								iterator: S(t),
								resultName: e,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), u
						}
					}, t
				}(t.exports);
				try {
					regeneratorRuntime = e
				} catch (t) {
					Function("r", "regeneratorRuntime = r")(e)
				}
			},
			2553: (t, e, n) => {
				"use strict";
				var r = n(396).Buffer,
					o = r.isEncoding || function(t) {
						switch ((t = "" + t) && t.toLowerCase()) {
							case "hex":
							case "utf8":
							case "utf-8":
							case "ascii":
							case "binary":
							case "base64":
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
							case "raw":
								return !0;
							default:
								return !1
						}
					};

				function i(t) {
					var e;
					switch (this.encoding = function(t) {
							var e = function(t) {
								if (!t) return "utf8";
								for (var e;;) switch (t) {
									case "utf8":
									case "utf-8":
										return "utf8";
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										return "utf16le";
									case "latin1":
									case "binary":
										return "latin1";
									case "base64":
									case "ascii":
									case "hex":
										return t;
									default:
										if (e) return;
										t = ("" + t).toLowerCase(), e = !0
								}
							}(t);
							if ("string" != typeof e && (r.isEncoding === o || !o(t))) throw new Error("Unknown encoding: " + t);
							return e || t
						}(t), this.encoding) {
						case "utf16le":
							this.text = c, this.end = l, e = 4;
							break;
						case "utf8":
							this.fillLast = s, e = 4;
							break;
						case "base64":
							this.text = u, this.end = d, e = 3;
							break;
						default:
							return this.write = p, void(this.end = f)
					}
					this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
				}

				function a(t) {
					return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
				}

				function s(t) {
					var e = this.lastTotal - this.lastNeed,
						n = function(t, e, n) {
							if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
							if (t.lastNeed > 1 && e.length > 1) {
								if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
								if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
							}
						}(this, t);
					return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
				}

				function c(t, e) {
					if ((t.length - e) % 2 == 0) {
						var n = t.toString("utf16le", e);
						if (n) {
							var r = n.charCodeAt(n.length - 1);
							if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
						}
						return n
					}
					return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
				}

				function l(t) {
					var e = t && t.length ? this.write(t) : "";
					if (this.lastNeed) {
						var n = this.lastTotal - this.lastNeed;
						return e + this.lastChar.toString("utf16le", 0, n)
					}
					return e
				}

				function u(t, e) {
					var n = (t.length - e) % 3;
					return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
				}

				function d(t) {
					var e = t && t.length ? this.write(t) : "";
					return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
				}

				function p(t) {
					return t.toString(this.encoding)
				}

				function f(t) {
					return t && t.length ? this.write(t) : ""
				}
				e.s = i, i.prototype.write = function(t) {
					if (0 === t.length) return "";
					var e, n;
					if (this.lastNeed) {
						if (void 0 === (e = this.fillLast(t))) return "";
						n = this.lastNeed, this.lastNeed = 0
					} else n = 0;
					return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
				}, i.prototype.end = function(t) {
					var e = t && t.length ? this.write(t) : "";
					return this.lastNeed ? e + "�" : e
				}, i.prototype.text = function(t, e) {
					var n = function(t, e, n) {
						var r = e.length - 1;
						if (r < n) return 0;
						var o = a(e[r]);
						if (o >= 0) return o > 0 && (t.lastNeed = o - 1), o;
						if (--r < n || -2 === o) return 0;
						if ((o = a(e[r])) >= 0) return o > 0 && (t.lastNeed = o - 2), o;
						if (--r < n || -2 === o) return 0;
						if ((o = a(e[r])) >= 0) return o > 0 && (2 === o ? o = 0 : t.lastNeed = o - 3), o;
						return 0
					}(this, t, e);
					if (!this.lastNeed) return t.toString("utf8", e);
					this.lastTotal = n;
					var r = t.length - (n - this.lastNeed);
					return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
				}, i.prototype.fillLast = function(t) {
					if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
					t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
				}
			},
			396: (t, e, n) => {
				var r = n(8764),
					o = r.Buffer;

				function i(t, e) {
					for (var n in t) e[n] = t[n]
				}

				function a(t, e, n) {
					return o(t, e, n)
				}
				o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = a), i(o, a), a.from = function(t, e, n) {
					if ("number" == typeof t) throw new TypeError("Argument must not be a number");
					return o(t, e, n)
				}, a.alloc = function(t, e, n) {
					if ("number" != typeof t) throw new TypeError("Argument must be a number");
					var r = o(t);
					return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
				}, a.allocUnsafe = function(t) {
					if ("number" != typeof t) throw new TypeError("Argument must be a number");
					return o(t)
				}, a.allocUnsafeSlow = function(t) {
					if ("number" != typeof t) throw new TypeError("Argument must be a number");
					return r.SlowBuffer(t)
				}
			},
			7121: (t, e, n) => {
				"use strict";
				n.d(e, {
					Z: () => r
				}), t = n.hmd(t);
				const r = function(t) {
					var e, n = t.Symbol;
					return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
				}("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : t)
			},
			3804: t => {
				t.exports = function() {
					return this.React
				}()
			},
			7196: t => {
				t.exports = function() {
					return this.ReactDOM
				}()
			},
			6002: t => {
				t.exports = function() {
					return this.wp.element
				}()
			},
			4501: t => {
				t.exports = function() {
					return this.wp.hooks
				}()
			},
			8057: t => {
				t.exports = function() {
					return this.wp.i18n
				}()
			},
			8211: () => {},
			9557: () => {},
			199: () => {}
		},
		__webpack_module_cache__ = {};

	function __webpack_require__(t) {
		var e = __webpack_module_cache__[t];
		if (void 0 !== e) return e.exports;
		var n = __webpack_module_cache__[t] = {
			id: t,
			loaded: !1,
			exports: {}
		};
		return __webpack_modules__[t].call(n.exports, n, n.exports, __webpack_require__), n.loaded = !0, n.exports
	}
	__webpack_require__.n = t => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return __webpack_require__.d(e, {
			a: e
		}), e
	}, __webpack_require__.d = (t, e) => {
		for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
			enumerable: !0,
			get: e[n]
		})
	}, __webpack_require__.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (t) {
			if ("object" == typeof window) return window
		}
	}(), __webpack_require__.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
		enumerable: !0,
		set: () => {
			throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
		}
	}), t), __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __webpack_require__.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	};
	var __webpack_exports__ = {};
	(() => {
		"use strict";

		function t() {
			return (t = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}
		__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
			PAGES_FILTER: () => bu,
			getPages: () => Ou
		});
		var e = __webpack_require__(6002),
			n = __webpack_require__(3804),
			r = __webpack_require__.n(n),
			o = __webpack_require__(7196),
			i = __webpack_require__.n(o);

		function a(t, e) {
			return (a = Object.setPrototypeOf || function(t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function s(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, a(t, e)
		}
		var c = __webpack_require__(5697),
			l = __webpack_require__.n(c),
			u = r().createContext(null);
		var d = function(t) {
			function e(e) {
				var n;
				n = t.call(this, e) || this;
				var r = e.store;
				return n.state = {
					storeState: r.getState(),
					store: r
				}, n
			}
			s(e, t);
			var n = e.prototype;
			return n.componentDidMount = function() {
				this._isMounted = !0, this.subscribe()
			}, n.componentWillUnmount = function() {
				this.unsubscribe && this.unsubscribe(), this._isMounted = !1
			}, n.componentDidUpdate = function(t) {
				this.props.store !== t.store && (this.unsubscribe && this.unsubscribe(), this.subscribe())
			}, n.subscribe = function() {
				var t = this,
					e = this.props.store;
				this.unsubscribe = e.subscribe((function() {
					var n = e.getState();
					t._isMounted && t.setState((function(t) {
						return t.storeState === n ? null : {
							storeState: n
						}
					}))
				}));
				var n = e.getState();
				n !== this.state.storeState && this.setState({
					storeState: n
				})
			}, n.render = function() {
				var t = this.props.context || u;
				return r().createElement(t.Provider, {
					value: this.state
				}, this.props.children)
			}, e
		}(n.Component);
		d.propTypes = {
			store: l().shape({
				subscribe: l().func.isRequired,
				dispatch: l().func.isRequired,
				getState: l().func.isRequired
			}),
			context: l().object,
			children: l().any
		};
		const p = d;

		function f(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function h(t, e) {
			if (null == t) return {};
			var n, r, o = {},
				i = Object.keys(t);
			for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
			return o
		}
		var m = __webpack_require__(8679),
			_ = __webpack_require__.n(m),
			g = __webpack_require__(1143),
			v = __webpack_require__.n(g),
			y = __webpack_require__(9864);

		function w(e, o) {
			void 0 === o && (o = {});
			var i = o,
				a = i.getDisplayName,
				c = void 0 === a ? function(t) {
					return "ConnectAdvanced(" + t + ")"
				} : a,
				l = i.methodName,
				d = void 0 === l ? "connectAdvanced" : l,
				p = i.renderCountProp,
				m = void 0 === p ? void 0 : p,
				g = i.shouldHandleStateChanges,
				w = void 0 === g || g,
				b = i.storeKey,
				E = void 0 === b ? "store" : b,
				O = i.withRef,
				S = void 0 !== O && O,
				C = i.forwardRef,
				x = void 0 !== C && C,
				P = i.context,
				k = void 0 === P ? u : P,
				T = h(i, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
			v()(void 0 === m, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"), v()(!S, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
			var N = "To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
			v()("store" === E, "storeKey has been removed and does not do anything. " + N);
			var A = k;
			return function(o) {
				var i = o.displayName || o.name || "Component",
					a = c(i),
					l = t({}, T, {
						getDisplayName: c,
						methodName: d,
						renderCountProp: m,
						shouldHandleStateChanges: w,
						storeKey: E,
						displayName: a,
						wrappedComponentName: i,
						WrappedComponent: o
					}),
					u = T.pure,
					p = n.Component;
				u && (p = n.PureComponent);
				var h = function(n) {
					function i(o) {
						var i, a, s, c, l, d, p, h, m, _, g;
						return i = n.call(this, o) || this, v()(x ? !o.wrapperProps[E] : !o[E], "Passing redux store in props has been removed and does not do anything. " + N), i.selectDerivedProps = function(t, n, r, o) {
							if (u && a === n && s === t) return c;
							r === l && d === o || (l = r, d = o, p = e(r.dispatch, o)), a = n, s = t;
							var i = p(t, n);
							return c = i
						}, i.selectChildElement = function(e, n, o) {
							return n === h && o === m && g === e || (h = n, m = o, g = e, _ = r().createElement(e, t({}, n, {
								ref: o
							}))), _
						}, i.indirectRenderWrappedComponent = i.indirectRenderWrappedComponent.bind(f(i)), i
					}
					s(i, n);
					var c = i.prototype;
					return c.indirectRenderWrappedComponent = function(t) {
						return this.renderWrappedComponent(t)
					}, c.renderWrappedComponent = function(t) {
						v()(t, 'Could not find "store" in the context of "' + a + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + a + " in connect options.");
						var e, n = t.storeState,
							r = t.store,
							i = this.props;
						x && (i = this.props.wrapperProps, e = this.props.forwardedRef);
						var s = this.selectDerivedProps(n, i, r, l);
						return this.selectChildElement(o, s, e)
					}, c.render = function() {
						var t = this.props.context && this.props.context.Consumer && (0, y.isContextConsumer)(r().createElement(this.props.context.Consumer, null)) ? this.props.context : A;
						return r().createElement(t.Consumer, null, this.indirectRenderWrappedComponent)
					}, i
				}(p);
				if (h.WrappedComponent = o, h.displayName = a, x) {
					var g = r().forwardRef((function(t, e) {
						return r().createElement(h, {
							wrapperProps: t,
							forwardedRef: e
						})
					}));
					return g.displayName = a, g.WrappedComponent = o, _()(g, o)
				}
				return _()(h, o)
			}
		}
		var b = Object.prototype.hasOwnProperty;

		function E(t, e) {
			return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
		}

		function O(t, e) {
			if (E(t, e)) return !0;
			if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
			var n = Object.keys(t),
				r = Object.keys(e);
			if (n.length !== r.length) return !1;
			for (var o = 0; o < n.length; o++)
				if (!b.call(e, n[o]) || !E(t[n[o]], e[n[o]])) return !1;
			return !0
		}
		var S = __webpack_require__(4890);

		function C(t) {
			return function(e, n) {
				var r = t(e, n);

				function o() {
					return r
				}
				return o.dependsOnOwnProps = !1, o
			}
		}

		function x(t) {
			return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
		}

		function P(t, e) {
			return function(e, n) {
				n.displayName;
				var r = function(t, e) {
					return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t)
				};
				return r.dependsOnOwnProps = !0, r.mapToProps = function(e, n) {
					r.mapToProps = t, r.dependsOnOwnProps = x(t);
					var o = r(e, n);
					return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = x(o), o = r(e, n)), o
				}, r
			}
		}
		const k = [function(t) {
			return "function" == typeof t ? P(t) : void 0
		}, function(t) {
			return t ? void 0 : C((function(t) {
				return {
					dispatch: t
				}
			}))
		}, function(t) {
			return t && "object" == typeof t ? C((function(e) {
				return (0, S.DE)(t, e)
			})) : void 0
		}];
		const T = [function(t) {
			return "function" == typeof t ? P(t) : void 0
		}, function(t) {
			return t ? void 0 : C((function() {
				return {}
			}))
		}];

		function N(e, n, r) {
			return t({}, r, e, n)
		}
		const A = [function(t) {
			return "function" == typeof t ? function(t) {
				return function(e, n) {
					n.displayName;
					var r, o = n.pure,
						i = n.areMergedPropsEqual,
						a = !1;
					return function(e, n, s) {
						var c = t(e, n, s);
						return a ? o && i(c, r) || (r = c) : (a = !0, r = c), r
					}
				}
			}(t) : void 0
		}, function(t) {
			return t ? void 0 : function() {
				return N
			}
		}];

		function D(t, e, n, r) {
			return function(o, i) {
				return n(t(o, i), e(r, i), i)
			}
		}

		function R(t, e, n, r, o) {
			var i, a, s, c, l, u = o.areStatesEqual,
				d = o.areOwnPropsEqual,
				p = o.areStatePropsEqual,
				f = !1;

			function h(o, f) {
				var h, m, _ = !d(f, a),
					g = !u(o, i);
				return i = o, a = f, _ && g ? (s = t(i, a), e.dependsOnOwnProps && (c = e(r, a)), l = n(s, c, a)) : _ ? (t.dependsOnOwnProps && (s = t(i, a)), e.dependsOnOwnProps && (c = e(r, a)), l = n(s, c, a)) : g ? (h = t(i, a), m = !p(h, s), s = h, m && (l = n(s, c, a)), l) : l
			}
			return function(o, u) {
				return f ? h(o, u) : (s = t(i = o, a = u), c = e(r, a), l = n(s, c, a), f = !0, l)
			}
		}

		function I(t, e) {
			var n = e.initMapStateToProps,
				r = e.initMapDispatchToProps,
				o = e.initMergeProps,
				i = h(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
				a = n(t, i),
				s = r(t, i),
				c = o(t, i);
			return (i.pure ? R : D)(a, s, c, t, i)
		}

		function L(t, e, n) {
			for (var r = e.length - 1; r >= 0; r--) {
				var o = e[r](t);
				if (o) return o
			}
			return function(e, r) {
				throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
			}
		}

		function M(t, e) {
			return t === e
		}
		const q = (F = (B = void 0 === j ? {} : j).connectHOC, H = void 0 === F ? w : F, U = B.mapStateToPropsFactories, V = void 0 === U ? T : U, z = B.mapDispatchToPropsFactories, W = void 0 === z ? k : z, G = B.mergePropsFactories, K = void 0 === G ? A : G, $ = B.selectorFactory, Q = void 0 === $ ? I : $, function(e, n, r, o) {
			void 0 === o && (o = {});
			var i = o,
				a = i.pure,
				s = void 0 === a || a,
				c = i.areStatesEqual,
				l = void 0 === c ? M : c,
				u = i.areOwnPropsEqual,
				d = void 0 === u ? O : u,
				p = i.areStatePropsEqual,
				f = void 0 === p ? O : p,
				m = i.areMergedPropsEqual,
				_ = void 0 === m ? O : m,
				g = h(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
				v = L(e, V, "mapStateToProps"),
				y = L(n, W, "mapDispatchToProps"),
				w = L(r, K, "mergeProps");
			return H(Q, t({
				methodName: "connect",
				getDisplayName: function(t) {
					return "Connect(" + t + ")"
				},
				shouldHandleStateChanges: Boolean(e),
				initMapStateToProps: v,
				initMapDispatchToProps: y,
				initMergeProps: w,
				pure: s,
				areStatesEqual: l,
				areOwnPropsEqual: d,
				areStatePropsEqual: f,
				areMergedPropsEqual: _
			}, g))
		});
		var j, B, F, H, U, V, z, W, G, K, $, Q;

		function Z(t) {
			return "/" === t.charAt(0)
		}

		function Y(t, e) {
			for (var n = e, r = n + 1, o = t.length; r < o; n += 1, r += 1) t[n] = t[r];
			t.pop()
		}
		const J = function(t, e) {
			void 0 === e && (e = "");
			var n, r = t && t.split("/") || [],
				o = e && e.split("/") || [],
				i = t && Z(t),
				a = e && Z(e),
				s = i || a;
			if (t && Z(t) ? o = r : r.length && (o.pop(), o = o.concat(r)), !o.length) return "/";
			if (o.length) {
				var c = o[o.length - 1];
				n = "." === c || ".." === c || "" === c
			} else n = !1;
			for (var l = 0, u = o.length; u >= 0; u--) {
				var d = o[u];
				"." === d ? Y(o, u) : ".." === d ? (Y(o, u), l++) : l && (Y(o, u), l--)
			}
			if (!s)
				for (; l--; l) o.unshift("..");
			!s || "" === o[0] || o[0] && Z(o[0]) || o.unshift("");
			var p = o.join("/");
			return n && "/" !== p.substr(-1) && (p += "/"), p
		};
		const X = function(t, e) {
			if (!t) throw new Error("Invariant failed")
		};

		function tt(t) {
			return "/" === t.charAt(0) ? t : "/" + t
		}

		function et(t) {
			return "/" === t.charAt(0) ? t.substr(1) : t
		}

		function nt(t, e) {
			return function(t, e) {
				return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(t.charAt(e.length))
			}(t, e) ? t.substr(e.length) : t
		}

		function rt(t) {
			return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
		}

		function ot(t) {
			var e = t.pathname,
				n = t.search,
				r = t.hash,
				o = e || "/";
			return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
		}

		function it(e, n, r, o) {
			var i;
			"string" == typeof e ? (i = function(t) {
				var e = t || "/",
					n = "",
					r = "",
					o = e.indexOf("#"); - 1 !== o && (r = e.substr(o), e = e.substr(0, o));
				var i = e.indexOf("?");
				return -1 !== i && (n = e.substr(i), e = e.substr(0, i)), {
					pathname: e,
					search: "?" === n ? "" : n,
					hash: "#" === r ? "" : r
				}
			}(e)).state = n : (void 0 === (i = t({}, e)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== n && void 0 === i.state && (i.state = n));
			try {
				i.pathname = decodeURI(i.pathname)
			} catch (t) {
				throw t instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
			}
			return r && (i.key = r), o ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = J(i.pathname, o.pathname)) : i.pathname = o.pathname : i.pathname || (i.pathname = "/"), i
		}

		function at() {
			var t = null;
			var e = [];
			return {
				setPrompt: function(e) {
					return t = e,
						function() {
							t === e && (t = null)
						}
				},
				confirmTransitionTo: function(e, n, r, o) {
					if (null != t) {
						var i = "function" == typeof t ? t(e, n) : t;
						"string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
					} else o(!0)
				},
				appendListener: function(t) {
					var n = !0;

					function r() {
						n && t.apply(void 0, arguments)
					}
					return e.push(r),
						function() {
							n = !1, e = e.filter((function(t) {
								return t !== r
							}))
						}
				},
				notifyListeners: function() {
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					e.forEach((function(t) {
						return t.apply(void 0, n)
					}))
				}
			}
		}
		var st = !("undefined" == typeof window || !window.document || !window.document.createElement);

		function ct(t, e) {
			e(window.confirm(t))
		}

		function lt() {
			try {
				return window.history.state || {}
			} catch (t) {
				return {}
			}
		}

		function ut(e) {
			void 0 === e && (e = {}), st || X(!1);
			var n, r = window.history,
				o = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
				i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
				a = e,
				s = a.forceRefresh,
				c = void 0 !== s && s,
				l = a.getUserConfirmation,
				u = void 0 === l ? ct : l,
				d = a.keyLength,
				p = void 0 === d ? 6 : d,
				f = e.basename ? rt(tt(e.basename)) : "";

			function h(t) {
				var e = t || {},
					n = e.key,
					r = e.state,
					o = window.location,
					i = o.pathname + o.search + o.hash;
				return f && (i = nt(i, f)), it(i, r, n)
			}

			function m() {
				return Math.random().toString(36).substr(2, p)
			}
			var _ = at();

			function g(e) {
				t(T, e), T.length = r.length, _.notifyListeners(T.location, T.action)
			}

			function v(t) {
				(function(t) {
					return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
				})(t) || b(h(t.state))
			}

			function y() {
				b(h(lt()))
			}
			var w = !1;

			function b(t) {
				if (w) w = !1, g();
				else {
					_.confirmTransitionTo(t, "POP", u, (function(e) {
						e ? g({
							action: "POP",
							location: t
						}) : function(t) {
							var e = T.location,
								n = O.indexOf(e.key); - 1 === n && (n = 0);
							var r = O.indexOf(t.key); - 1 === r && (r = 0);
							var o = n - r;
							o && (w = !0, C(o))
						}(t)
					}))
				}
			}
			var E = h(lt()),
				O = [E.key];

			function S(t) {
				return f + ot(t)
			}

			function C(t) {
				r.go(t)
			}
			var x = 0;

			function P(t) {
				1 === (x += t) && 1 === t ? (window.addEventListener("popstate", v), i && window.addEventListener("hashchange", y)) : 0 === x && (window.removeEventListener("popstate", v), i && window.removeEventListener("hashchange", y))
			}
			var k = !1;
			var T = {
				length: r.length,
				action: "POP",
				location: E,
				createHref: S,
				push: function(t, e) {
					var n = it(t, e, m(), T.location);
					_.confirmTransitionTo(n, "PUSH", u, (function(t) {
						if (t) {
							var e = S(n),
								i = n.key,
								a = n.state;
							if (o)
								if (r.pushState({
										key: i,
										state: a
									}, null, e), c) window.location.href = e;
								else {
									var s = O.indexOf(T.location.key),
										l = O.slice(0, s + 1);
									l.push(n.key), O = l, g({
										action: "PUSH",
										location: n
									})
								}
							else window.location.href = e
						}
					}))
				},
				replace: function(t, e) {
					var n = it(t, e, m(), T.location);
					_.confirmTransitionTo(n, "REPLACE", u, (function(t) {
						if (t) {
							var e = S(n),
								i = n.key,
								a = n.state;
							if (o)
								if (r.replaceState({
										key: i,
										state: a
									}, null, e), c) window.location.replace(e);
								else {
									var s = O.indexOf(T.location.key); - 1 !== s && (O[s] = n.key), g({
										action: "REPLACE",
										location: n
									})
								}
							else window.location.replace(e)
						}
					}))
				},
				go: C,
				goBack: function() {
					C(-1)
				},
				goForward: function() {
					C(1)
				},
				block: function(t) {
					void 0 === t && (t = !1);
					var e = _.setPrompt(t);
					return k || (P(1), k = !0),
						function() {
							return k && (k = !1, P(-1)), e()
						}
				},
				listen: function(t) {
					var e = _.appendListener(t);
					return P(1),
						function() {
							P(-1), e()
						}
				}
			};
			return T
		}
		var dt = {
			hashbang: {
				encodePath: function(t) {
					return "!" === t.charAt(0) ? t : "!/" + et(t)
				},
				decodePath: function(t) {
					return "!" === t.charAt(0) ? t.substr(1) : t
				}
			},
			noslash: {
				encodePath: et,
				decodePath: tt
			},
			slash: {
				encodePath: tt,
				decodePath: tt
			}
		};

		function pt(t) {
			var e = t.indexOf("#");
			return -1 === e ? t : t.slice(0, e)
		}

		function ft() {
			var t = window.location.href,
				e = t.indexOf("#");
			return -1 === e ? "" : t.substring(e + 1)
		}

		function ht(t) {
			window.location.replace(pt(window.location.href) + "#" + t)
		}

		function mt(e) {
			void 0 === e && (e = {}), st || X(!1);
			var n = window.history,
				r = (window.navigator.userAgent.indexOf("Firefox"), e),
				o = r.getUserConfirmation,
				i = void 0 === o ? ct : o,
				a = r.hashType,
				s = void 0 === a ? "slash" : a,
				c = e.basename ? rt(tt(e.basename)) : "",
				l = dt[s],
				u = l.encodePath,
				d = l.decodePath;

			function p() {
				var t = d(ft());
				return c && (t = nt(t, c)), it(t)
			}
			var f = at();

			function h(e) {
				t(x, e), x.length = n.length, f.notifyListeners(x.location, x.action)
			}
			var m = !1,
				_ = null;

			function g() {
				var t, e, n = ft(),
					r = u(n);
				if (n !== r) ht(r);
				else {
					var o = p(),
						a = x.location;
					if (!m && (e = o, (t = a).pathname === e.pathname && t.search === e.search && t.hash === e.hash)) return;
					if (_ === ot(o)) return;
					_ = null,
						function(t) {
							if (m) m = !1, h();
							else {
								f.confirmTransitionTo(t, "POP", i, (function(e) {
									e ? h({
										action: "POP",
										location: t
									}) : function(t) {
										var e = x.location,
											n = b.lastIndexOf(ot(e)); - 1 === n && (n = 0);
										var r = b.lastIndexOf(ot(t)); - 1 === r && (r = 0);
										var o = n - r;
										o && (m = !0, E(o))
									}(t)
								}))
							}
						}(o)
				}
			}
			var v = ft(),
				y = u(v);
			v !== y && ht(y);
			var w = p(),
				b = [ot(w)];

			function E(t) {
				n.go(t)
			}
			var O = 0;

			function S(t) {
				1 === (O += t) && 1 === t ? window.addEventListener("hashchange", g) : 0 === O && window.removeEventListener("hashchange", g)
			}
			var C = !1;
			var x = {
				length: n.length,
				action: "POP",
				location: w,
				createHref: function(t) {
					var e = document.querySelector("base"),
						n = "";
					return e && e.getAttribute("href") && (n = pt(window.location.href)), n + "#" + u(c + ot(t))
				},
				push: function(t, e) {
					var n = it(t, void 0, void 0, x.location);
					f.confirmTransitionTo(n, "PUSH", i, (function(t) {
						if (t) {
							var e = ot(n),
								r = u(c + e);
							if (ft() !== r) {
								_ = e,
									function(t) {
										window.location.hash = t
									}(r);
								var o = b.lastIndexOf(ot(x.location)),
									i = b.slice(0, o + 1);
								i.push(e), b = i, h({
									action: "PUSH",
									location: n
								})
							} else h()
						}
					}))
				},
				replace: function(t, e) {
					var n = it(t, void 0, void 0, x.location);
					f.confirmTransitionTo(n, "REPLACE", i, (function(t) {
						if (t) {
							var e = ot(n),
								r = u(c + e);
							ft() !== r && (_ = e, ht(r));
							var o = b.indexOf(ot(x.location)); - 1 !== o && (b[o] = e), h({
								action: "REPLACE",
								location: n
							})
						}
					}))
				},
				go: E,
				goBack: function() {
					E(-1)
				},
				goForward: function() {
					E(1)
				},
				block: function(t) {
					void 0 === t && (t = !1);
					var e = f.setPrompt(t);
					return C || (S(1), C = !0),
						function() {
							return C && (C = !1, S(-1)), e()
						}
				},
				listen: function(t) {
					var e = f.appendListener(t);
					return S(1),
						function() {
							S(-1), e()
						}
				}
			};
			return x
		}

		function _t(t, e, n) {
			return Math.min(Math.max(t, e), n)
		}

		function gt(e) {
			void 0 === e && (e = {});
			var n = e,
				r = n.getUserConfirmation,
				o = n.initialEntries,
				i = void 0 === o ? ["/"] : o,
				a = n.initialIndex,
				s = void 0 === a ? 0 : a,
				c = n.keyLength,
				l = void 0 === c ? 6 : c,
				u = at();

			function d(e) {
				t(g, e), g.length = g.entries.length, u.notifyListeners(g.location, g.action)
			}

			function p() {
				return Math.random().toString(36).substr(2, l)
			}
			var f = _t(s, 0, i.length - 1),
				h = i.map((function(t) {
					return it(t, void 0, "string" == typeof t ? p() : t.key || p())
				})),
				m = ot;

			function _(t) {
				var e = _t(g.index + t, 0, g.entries.length - 1),
					n = g.entries[e];
				u.confirmTransitionTo(n, "POP", r, (function(t) {
					t ? d({
						action: "POP",
						location: n,
						index: e
					}) : d()
				}))
			}
			var g = {
				length: h.length,
				action: "POP",
				location: h[f],
				index: f,
				entries: h,
				createHref: m,
				push: function(t, e) {
					var n = it(t, e, p(), g.location);
					u.confirmTransitionTo(n, "PUSH", r, (function(t) {
						if (t) {
							var e = g.index + 1,
								r = g.entries.slice(0);
							r.length > e ? r.splice(e, r.length - e, n) : r.push(n), d({
								action: "PUSH",
								location: n,
								index: e,
								entries: r
							})
						}
					}))
				},
				replace: function(t, e) {
					var n = it(t, e, p(), g.location);
					u.confirmTransitionTo(n, "REPLACE", r, (function(t) {
						t && (g.entries[g.index] = n, d({
							action: "REPLACE",
							location: n
						}))
					}))
				},
				go: _,
				goBack: function() {
					_(-1)
				},
				goForward: function() {
					_(1)
				},
				canGo: function(t) {
					var e = g.index + t;
					return e >= 0 && e < g.entries.length
				},
				block: function(t) {
					return void 0 === t && (t = !1), u.setPrompt(t)
				},
				listen: function(t) {
					return u.appendListener(t)
				}
			};
			return g
		}
		var vt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : {};

		function yt(t) {
			var e = [];
			return {
				on: function(t) {
					e.push(t)
				},
				off: function(t) {
					e = e.filter((function(e) {
						return e !== t
					}))
				},
				get: function() {
					return t
				},
				set: function(n, r) {
					t = n, e.forEach((function(e) {
						return e(t, r)
					}))
				}
			}
		}
		const wt = r().createContext || function(t, e) {
			var r, o, i = "__create-react-context-" + function() {
					var t = "__global_unique_id__";
					return vt[t] = (vt[t] || 0) + 1
				}() + "__",
				a = function(t) {
					function n() {
						var e;
						return (e = t.apply(this, arguments) || this).emitter = yt(e.props.value), e
					}
					s(n, t);
					var r = n.prototype;
					return r.getChildContext = function() {
						var t;
						return (t = {})[i] = this.emitter, t
					}, r.componentWillReceiveProps = function(t) {
						if (this.props.value !== t.value) {
							var n, r = this.props.value,
								o = t.value;
							((i = r) === (a = o) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) ? n = 0: (n = "function" == typeof e ? e(r, o) : 1073741823, 0 !== (n |= 0) && this.emitter.set(t.value, n))
						}
						var i, a
					}, r.render = function() {
						return this.props.children
					}, n
				}(n.Component);
			a.childContextTypes = ((r = {})[i] = l().object.isRequired, r);
			var c = function(e) {
				function n() {
					var t;
					return (t = e.apply(this, arguments) || this).state = {
						value: t.getValue()
					}, t.onUpdate = function(e, n) {
						0 != ((0 | t.observedBits) & n) && t.setState({
							value: t.getValue()
						})
					}, t
				}
				s(n, e);
				var r = n.prototype;
				return r.componentWillReceiveProps = function(t) {
					var e = t.observedBits;
					this.observedBits = null == e ? 1073741823 : e
				}, r.componentDidMount = function() {
					this.context[i] && this.context[i].on(this.onUpdate);
					var t = this.props.observedBits;
					this.observedBits = null == t ? 1073741823 : t
				}, r.componentWillUnmount = function() {
					this.context[i] && this.context[i].off(this.onUpdate)
				}, r.getValue = function() {
					return this.context[i] ? this.context[i].get() : t
				}, r.render = function() {
					return (t = this.props.children, Array.isArray(t) ? t[0] : t)(this.state.value);
					var t
				}, n
			}(n.Component);
			return c.contextTypes = ((o = {})[i] = l().object, o), {
				Provider: a,
				Consumer: c
			}
		};
		var bt = __webpack_require__(9658),
			Et = __webpack_require__.n(bt),
			Ot = function(t) {
				var e = wt();
				return e.displayName = t, e
			}("Router"),
			St = function(t) {
				function e(e) {
					var n;
					return (n = t.call(this, e) || this).state = {
						location: e.history.location
					}, n._isMounted = !1, n._pendingLocation = null, e.staticContext || (n.unlisten = e.history.listen((function(t) {
						n._isMounted ? n.setState({
							location: t
						}) : n._pendingLocation = t
					}))), n
				}
				s(e, t), e.computeRootMatch = function(t) {
					return {
						path: "/",
						url: "/",
						params: {},
						isExact: "/" === t
					}
				};
				var n = e.prototype;
				return n.componentDidMount = function() {
					this._isMounted = !0, this._pendingLocation && this.setState({
						location: this._pendingLocation
					})
				}, n.componentWillUnmount = function() {
					this.unlisten && this.unlisten()
				}, n.render = function() {
					return r().createElement(Ot.Provider, {
						children: this.props.children || null,
						value: {
							history: this.props.history,
							location: this.state.location,
							match: e.computeRootMatch(this.state.location.pathname),
							staticContext: this.props.staticContext
						}
					})
				}, e
			}(r().Component);
		r().Component;
		r().Component;
		var Ct = {},
			xt = 0;

		function Pt(t, e) {
			void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = {
				path: e
			});
			var n = e,
				r = n.path,
				o = n.exact,
				i = void 0 !== o && o,
				a = n.strict,
				s = void 0 !== a && a,
				c = n.sensitive,
				l = void 0 !== c && c;
			return [].concat(r).reduce((function(e, n) {
				if (!n && "" !== n) return null;
				if (e) return e;
				var r = function(t, e) {
						var n = "" + e.end + e.strict + e.sensitive,
							r = Ct[n] || (Ct[n] = {});
						if (r[t]) return r[t];
						var o = [],
							i = {
								regexp: Et()(t, o, e),
								keys: o
							};
						return xt < 1e4 && (r[t] = i, xt++), i
					}(n, {
						end: i,
						strict: s,
						sensitive: l
					}),
					o = r.regexp,
					a = r.keys,
					c = o.exec(t);
				if (!c) return null;
				var u = c[0],
					d = c.slice(1),
					p = t === u;
				return i && !p ? null : {
					path: n,
					url: "/" === n && "" === u ? "/" : u,
					isExact: p,
					params: a.reduce((function(t, e, n) {
						return t[e.name] = d[n], t
					}), {})
				}
			}), null)
		}
		var kt = function(e) {
			function n() {
				return e.apply(this, arguments) || this
			}
			return s(n, e), n.prototype.render = function() {
				var e = this;
				return r().createElement(Ot.Consumer, null, (function(n) {
					n || X(!1);
					var o = e.props.location || n.location,
						i = t({}, n, {
							location: o,
							match: e.props.computedMatch ? e.props.computedMatch : e.props.path ? Pt(o.pathname, e.props) : n.match
						}),
						a = e.props,
						s = a.children,
						c = a.component,
						l = a.render;
					return Array.isArray(s) && 0 === s.length && (s = null), r().createElement(Ot.Provider, {
						value: i
					}, i.match ? s ? "function" == typeof s ? s(i) : s : c ? r().createElement(c, i) : l ? l(i) : null : "function" == typeof s ? s(i) : null)
				}))
			}, n
		}(r().Component);

		function Tt(t) {
			return "/" === t.charAt(0) ? t : "/" + t
		}

		function Nt(e, n) {
			if (!e) return n;
			var r = Tt(e);
			return 0 !== n.pathname.indexOf(r) ? n : t({}, n, {
				pathname: n.pathname.substr(r.length)
			})
		}

		function At(t) {
			return "string" == typeof t ? t : ot(t)
		}

		function Dt(t) {
			return function() {
				X(!1)
			}
		}

		function Rt() {}
		r().Component;
		var It = function(e) {
			function n() {
				return e.apply(this, arguments) || this
			}
			return s(n, e), n.prototype.render = function() {
				var e = this;
				return r().createElement(Ot.Consumer, null, (function(n) {
					n || X(!1);
					var o, i, a = e.props.location || n.location;
					return r().Children.forEach(e.props.children, (function(e) {
						if (null == i && r().isValidElement(e)) {
							o = e;
							var s = e.props.path || e.props.from;
							i = s ? Pt(a.pathname, t({}, e.props, {
								path: s
							})) : n.match
						}
					})), i ? r().cloneElement(o, {
						location: a,
						computedMatch: i
					}) : null
				}))
			}, n
		}(r().Component);
		r().useContext;
		var Lt = __webpack_require__(4501);
		const Mt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "OUTLET":
					return e.outlet;
				default:
					return t
			}
		};
		const qt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "TAXES":
					return e.taxes;
				default:
					return t
			}
		};
		const jt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "CATEGORIES":
					return e.categories;
				default:
					return t
			}
		};
		const Bt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "CUSTOMERS":
					return e.customers;
				default:
					return t
			}
		};
		const Ft = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "PRODUCTS":
					return e.products;
				default:
					return t
			}
		};
		const Ht = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "CART":
					return e.cart;
				default:
					return t
			}
		};
		const Ut = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "TRANSACTIONS":
					return e.transactions;
				default:
					return t
			}
		};
		const Vt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "TABLES":
					return e.tables;
				default:
					return t
			}
		};
		const zt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "SETTINGS":
					return e.settings;
				default:
					return t
			}
		};
		const Wt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "COUNTRY_AND_STATES":
					return e.countries_and_states;
				default:
					return t
			}
		};
		const Gt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "ORDERS":
					return e.orders;
				default:
					return t
			}
		};
		const Kt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "DISCOUNT":
					return e.discount;
				default:
					return t
			}
		};
		const $t = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "COUPON":
					return e.coupon;
				default:
					return t
			}
		};
		const Qt = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				e = arguments.length > 1 ? arguments[1] : void 0;
			switch (e.type) {
				case "HOLD_CARTS":
					return e.holdCarts;
				default:
					return t
			}
		};

		function Zt(t) {
			return function(e) {
				var n = e.dispatch,
					r = e.getState;
				return function(e) {
					return function(o) {
						return "function" == typeof o ? o(n, r, t) : e(o)
					}
				}
			}
		}
		var Yt = Zt();
		Yt.withExtraArgument = Zt;
		const Jt = Yt;
		var Xt = __webpack_require__(8500),
			te = __webpack_require__(4385),
			ee = {
				outlet: {},
				categories: [],
				countries_and_states: {
					countries: [],
					base_country: "",
					states: []
				},
				taxes: [],
				products: {
					list: [],
					isFetching: 0,
					s: "",
					sproducts: [],
					category: "",
					cproducts: []
				},
				customers: {
					list: [],
					defaultCustomer: {},
					s: "",
					searchedCustomers: []
				},
				orders: {
					list: [],
					s: "",
					sorder: []
				},
				discount: [],
				coupon: [],
				cart: {
					list: [],
					total: ""
				},
				holdCarts: [],
				transactions: [],
				tables: {
					list: [],
					defaultTable: {}
				},
				settings: {
					id: 0
				}
			};
		ee = (0, Lt.applyFilters)("ddwcpos_modify_default_states", ee);
		var ne = {
			outlet: Mt,
			customers: Bt,
			categories: jt,
			taxes: qt,
			countries_and_states: Wt,
			products: Ft,
			orders: Gt,
			discount: Kt,
			coupon: $t,
			cart: Ht,
			holdCarts: Qt,
			transactions: Ut,
			tables: Vt,
			settings: zt
		};
		ne = (0, Lt.applyFilters)("ddwcpos_modify_reducers", ne);
		var re = (0, S.UY)(ne),
			oe = [(0, te.K3)({})];
		const ie = (0, S.MT)(re, ee, (0, Xt.Uo)(S.md.apply(void 0, [Jt].concat(oe))));

		function ae(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function se(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function ce(t, e, n) {
			return e && se(t.prototype, e), n && se(t, n), t
		}

		function le(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && a(t, e)
		}

		function ue(t) {
			return (ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function de(t, e) {
			return !e || "object" !== ue(e) && "function" != typeof e ? f(t) : e
		}

		function pe(t) {
			return (pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}
		var fe = __webpack_require__(8057),
			he = __webpack_require__(1818),
			me = __webpack_require__.n(he);
		__webpack_require__(4895), r().Component;
		r().Component;
		var _e = function(t, e) {
				return "function" == typeof t ? t(e) : t
			},
			ge = function(t, e) {
				return "string" == typeof t ? it(t, null, null, e) : t
			},
			ve = function(t) {
				return t
			},
			ye = r().forwardRef;
		void 0 === ye && (ye = ve);
		var we = ye((function(e, n) {
			var o = e.innerRef,
				i = e.navigate,
				a = e.onClick,
				s = h(e, ["innerRef", "navigate", "onClick"]),
				c = s.target,
				l = t({}, s, {
					onClick: function(t) {
						try {
							a && a(t)
						} catch (e) {
							throw t.preventDefault(), e
						}
						t.defaultPrevented || 0 !== t.button || c && "_self" !== c || function(t) {
							return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
						}(t) || (t.preventDefault(), i())
					}
				});
			return l.ref = ve !== ye && n || o, r().createElement("a", l)
		}));
		var be = ye((function(e, n) {
				var o = e.component,
					i = void 0 === o ? we : o,
					a = e.replace,
					s = e.to,
					c = e.innerRef,
					l = h(e, ["component", "replace", "to", "innerRef"]);
				return r().createElement(Ot.Consumer, null, (function(e) {
					e || X(!1);
					var o = e.history,
						u = ge(_e(s, e.location), e.location),
						d = u ? o.createHref(u) : "",
						p = t({}, l, {
							href: d,
							navigate: function() {
								var t = _e(s, e.location);
								(a ? o.replace : o.push)(t)
							}
						});
					return ve !== ye ? p.ref = n || c : p.innerRef = c, r().createElement(i, p)
				}))
			})),
			Ee = function(t) {
				return t
			},
			Oe = r().forwardRef;
		void 0 === Oe && (Oe = Ee);
		Oe((function(e, n) {
			var o = e["aria-current"],
				i = void 0 === o ? "page" : o,
				a = e.activeClassName,
				s = void 0 === a ? "active" : a,
				c = e.activeStyle,
				l = e.className,
				u = e.exact,
				d = e.isActive,
				p = e.location,
				f = e.strict,
				m = e.style,
				_ = e.to,
				g = e.innerRef,
				v = h(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);
			return r().createElement(Ot.Consumer, null, (function(e) {
				e || X(!1);
				var o = p || e.location,
					a = ge(_e(_, o), o),
					h = a.pathname,
					y = h && h.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
					w = y ? Pt(o.pathname, {
						path: y,
						exact: u,
						strict: f
					}) : null,
					b = !!(d ? d(w, o) : w),
					E = b ? function() {
						for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						return e.filter((function(t) {
							return t
						})).join(" ")
					}(l, s) : l,
					O = b ? t({}, m, {}, c) : m,
					S = t({
						"aria-current": b && i || null,
						className: E,
						style: O,
						to: a
					}, v);
				return Ee !== Oe ? S.ref = n || g : S.innerRef = g, r().createElement(be, S)
			}))
		}));
		const Se = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
					}
				}]
			},
			name: "home",
			theme: "outlined"
		};

		function Ce(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
			return r
		}

		function xe(t, e) {
			if (t) {
				if ("string" == typeof t) return Ce(t, e);
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ce(t, e) : void 0
			}
		}

		function Pe(t, e) {
			return function(t) {
				if (Array.isArray(t)) return t
			}(t) || function(t, e) {
				var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
				if (null != n) {
					var r, o, i = [],
						a = !0,
						s = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						s = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
					return i
				}
			}(t, e) || xe(t, e) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function ke(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function Te(t, e) {
			if (null == t) return {};
			var n, r, o = h(t, e);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
			}
			return o
		}
		var Ne = __webpack_require__(4184),
			Ae = __webpack_require__.n(Ne);
		const De = (0, n.createContext)({});

		function Re(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Ie(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? Re(Object(n), !0).forEach((function(e) {
					ke(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function Le(t, e) {
			(function(t) {
				return "string" == typeof t && -1 !== t.indexOf(".") && 1 === parseFloat(t)
			})(t) && (t = "100%");
			var n = function(t) {
				return "string" == typeof t && -1 !== t.indexOf("%")
			}(t);
			return t = 360 === e ? t : Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : t = 360 === e ? (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t % e / parseFloat(String(e))
		}

		function Me(t) {
			return t <= 1 ? 100 * Number(t) + "%" : t
		}

		function qe(t) {
			return 1 === t.length ? "0" + t : String(t)
		}

		function je(t, e, n) {
			return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * n * (e - t) : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
		}

		function Be(t) {
			return Fe(t) / 255
		}

		function Fe(t) {
			return parseInt(t, 16)
		}
		var He = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			goldenrod: "#daa520",
			gold: "#ffd700",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavenderblush: "#fff0f5",
			lavender: "#e6e6fa",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370db",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#db7093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			rebeccapurple: "#663399",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		};

		function Ue(t) {
			var e, n, r, o = {
					r: 0,
					g: 0,
					b: 0
				},
				i = 1,
				a = null,
				s = null,
				c = null,
				l = !1,
				u = !1;
			return "string" == typeof t && (t = function(t) {
				if (0 === (t = t.trim().toLowerCase()).length) return !1;
				var e = !1;
				if (He[t]) t = He[t], e = !0;
				else if ("transparent" === t) return {
					r: 0,
					g: 0,
					b: 0,
					a: 0,
					format: "name"
				};
				var n = Ge.rgb.exec(t);
				if (n) return {
					r: n[1],
					g: n[2],
					b: n[3]
				};
				if (n = Ge.rgba.exec(t)) return {
					r: n[1],
					g: n[2],
					b: n[3],
					a: n[4]
				};
				if (n = Ge.hsl.exec(t)) return {
					h: n[1],
					s: n[2],
					l: n[3]
				};
				if (n = Ge.hsla.exec(t)) return {
					h: n[1],
					s: n[2],
					l: n[3],
					a: n[4]
				};
				if (n = Ge.hsv.exec(t)) return {
					h: n[1],
					s: n[2],
					v: n[3]
				};
				if (n = Ge.hsva.exec(t)) return {
					h: n[1],
					s: n[2],
					v: n[3],
					a: n[4]
				};
				if (n = Ge.hex8.exec(t)) return {
					r: Fe(n[1]),
					g: Fe(n[2]),
					b: Fe(n[3]),
					a: Be(n[4]),
					format: e ? "name" : "hex8"
				};
				if (n = Ge.hex6.exec(t)) return {
					r: Fe(n[1]),
					g: Fe(n[2]),
					b: Fe(n[3]),
					format: e ? "name" : "hex"
				};
				if (n = Ge.hex4.exec(t)) return {
					r: Fe(n[1] + n[1]),
					g: Fe(n[2] + n[2]),
					b: Fe(n[3] + n[3]),
					a: Be(n[4] + n[4]),
					format: e ? "name" : "hex8"
				};
				if (n = Ge.hex3.exec(t)) return {
					r: Fe(n[1] + n[1]),
					g: Fe(n[2] + n[2]),
					b: Fe(n[3] + n[3]),
					format: e ? "name" : "hex"
				};
				return !1
			}(t)), "object" == typeof t && (Ke(t.r) && Ke(t.g) && Ke(t.b) ? (e = t.r, n = t.g, r = t.b, o = {
				r: 255 * Le(e, 255),
				g: 255 * Le(n, 255),
				b: 255 * Le(r, 255)
			}, l = !0, u = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : Ke(t.h) && Ke(t.s) && Ke(t.v) ? (a = Me(t.s), s = Me(t.v), o = function(t, e, n) {
				t = 6 * Le(t, 360), e = Le(e, 100), n = Le(n, 100);
				var r = Math.floor(t),
					o = t - r,
					i = n * (1 - e),
					a = n * (1 - o * e),
					s = n * (1 - (1 - o) * e),
					c = r % 6;
				return {
					r: 255 * [n, a, i, i, s, n][c],
					g: 255 * [s, n, n, a, i, i][c],
					b: 255 * [i, i, s, n, n, a][c]
				}
			}(t.h, a, s), l = !0, u = "hsv") : Ke(t.h) && Ke(t.s) && Ke(t.l) && (a = Me(t.s), c = Me(t.l), o = function(t, e, n) {
				var r, o, i;
				if (t = Le(t, 360), e = Le(e, 100), n = Le(n, 100), 0 === e) o = n, i = n, r = n;
				else {
					var a = n < .5 ? n * (1 + e) : n + e - n * e,
						s = 2 * n - a;
					r = je(s, a, t + 1 / 3), o = je(s, a, t), i = je(s, a, t - 1 / 3)
				}
				return {
					r: 255 * r,
					g: 255 * o,
					b: 255 * i
				}
			}(t.h, a, c), l = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (i = t.a)), i = function(t) {
				return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
			}(i), {
				ok: l,
				format: t.format || u,
				r: Math.min(255, Math.max(o.r, 0)),
				g: Math.min(255, Math.max(o.g, 0)),
				b: Math.min(255, Math.max(o.b, 0)),
				a: i
			}
		}
		var Ve = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
			ze = "[\\s|\\(]+(" + Ve + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")\\s*\\)?",
			We = "[\\s|\\(]+(" + Ve + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")[,|\\s]+(" + Ve + ")\\s*\\)?",
			Ge = {
				CSS_UNIT: new RegExp(Ve),
				rgb: new RegExp("rgb" + ze),
				rgba: new RegExp("rgba" + We),
				hsl: new RegExp("hsl" + ze),
				hsla: new RegExp("hsla" + We),
				hsv: new RegExp("hsv" + ze),
				hsva: new RegExp("hsva" + We),
				hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};

		function Ke(t) {
			return Boolean(Ge.CSS_UNIT.exec(String(t)))
		}
		var $e = [{
			index: 7,
			opacity: .15
		}, {
			index: 6,
			opacity: .25
		}, {
			index: 5,
			opacity: .3
		}, {
			index: 5,
			opacity: .45
		}, {
			index: 5,
			opacity: .65
		}, {
			index: 5,
			opacity: .85
		}, {
			index: 4,
			opacity: .9
		}, {
			index: 3,
			opacity: .95
		}, {
			index: 2,
			opacity: .97
		}, {
			index: 1,
			opacity: .98
		}];

		function Qe(t) {
			var e = function(t, e, n) {
				t = Le(t, 255), e = Le(e, 255), n = Le(n, 255);
				var r = Math.max(t, e, n),
					o = Math.min(t, e, n),
					i = 0,
					a = r,
					s = r - o,
					c = 0 === r ? 0 : s / r;
				if (r === o) i = 0;
				else {
					switch (r) {
						case t:
							i = (e - n) / s + (e < n ? 6 : 0);
							break;
						case e:
							i = (n - t) / s + 2;
							break;
						case n:
							i = (t - e) / s + 4
					}
					i /= 6
				}
				return {
					h: i,
					s: c,
					v: a
				}
			}(t.r, t.g, t.b);
			return {
				h: 360 * e.h,
				s: e.s,
				v: e.v
			}
		}

		function Ze(t) {
			var e = t.r,
				n = t.g,
				r = t.b;
			return "#".concat(function(t, e, n, r) {
				var o = [qe(Math.round(t).toString(16)), qe(Math.round(e).toString(16)), qe(Math.round(n).toString(16))];
				return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
			}(e, n, r, !1))
		}

		function Ye(t, e, n) {
			var r = n / 100;
			return {
				r: (e.r - t.r) * r + t.r,
				g: (e.g - t.g) * r + t.g,
				b: (e.b - t.b) * r + t.b
			}
		}

		function Je(t, e, n) {
			var r;
			return (r = Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n ? Math.round(t.h) - 2 * e : Math.round(t.h) + 2 * e : n ? Math.round(t.h) + 2 * e : Math.round(t.h) - 2 * e) < 0 ? r += 360 : r >= 360 && (r -= 360), r
		}

		function Xe(t, e, n) {
			return 0 === t.h && 0 === t.s ? t.s : ((r = n ? t.s - .16 * e : 4 === e ? t.s + .16 : t.s + .05 * e) > 1 && (r = 1), n && 5 === e && r > .1 && (r = .1), r < .06 && (r = .06), Number(r.toFixed(2)));
			var r
		}

		function tn(t, e, n) {
			var r;
			return (r = n ? t.v + .05 * e : t.v - .15 * e) > 1 && (r = 1), Number(r.toFixed(2))
		}

		function en(t) {
			for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = Ue(t), o = 5; o > 0; o -= 1) {
				var i = Qe(r),
					a = Ze(Ue({
						h: Je(i, o, !0),
						s: Xe(i, o, !0),
						v: tn(i, o, !0)
					}));
				n.push(a)
			}
			n.push(Ze(r));
			for (var s = 1; s <= 4; s += 1) {
				var c = Qe(r),
					l = Ze(Ue({
						h: Je(c, s),
						s: Xe(c, s),
						v: tn(c, s)
					}));
				n.push(l)
			}
			return "dark" === e.theme ? $e.map((function(t) {
				var r = t.index,
					o = t.opacity;
				return Ze(Ye(Ue(e.backgroundColor || "#141414"), Ue(n[r]), 100 * o))
			})) : n
		}
		var nn = {
				red: "#F5222D",
				volcano: "#FA541C",
				orange: "#FA8C16",
				gold: "#FAAD14",
				yellow: "#FADB14",
				lime: "#A0D911",
				green: "#52C41A",
				cyan: "#13C2C2",
				blue: "#1890FF",
				geekblue: "#2F54EB",
				purple: "#722ED1",
				magenta: "#EB2F96",
				grey: "#666666"
			},
			rn = {},
			on = {};
		Object.keys(nn).forEach((function(t) {
			rn[t] = en(nn[t]), rn[t].primary = rn[t][5], on[t] = en(nn[t], {
				theme: "dark",
				backgroundColor: "#141414"
			}), on[t].primary = on[t][5]
		}));
		rn.red, rn.volcano, rn.gold, rn.orange, rn.yellow, rn.lime, rn.green, rn.cyan, rn.blue, rn.geekblue, rn.purple, rn.magenta, rn.grey;
		var an = {};

		function sn(t, e) {
			0
		}

		function cn(t, e, n) {
			e || an[n] || (t(!1, n), an[n] = !0)
		}
		const ln = function(t, e) {
			cn(sn, t, e)
		};

		function un() {
			return !("undefined" == typeof window || !window.document || !window.document.createElement)
		}

		function dn(t) {
			return t.attachTo ? t.attachTo : document.querySelector("head") || document.body
		}

		function pn(t) {
			var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (!un()) return null;
			var r, o = document.createElement("style");
			(null === (e = n.csp) || void 0 === e ? void 0 : e.nonce) && (o.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce);
			o.innerHTML = t;
			var i = dn(n),
				a = i.firstChild;
			return n.prepend && i.prepend ? i.prepend(o) : n.prepend && a ? i.insertBefore(o, a) : i.appendChild(o), o
		}
		var fn = new Map;

		function hn(t, e) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				r = dn(n);
			if (!fn.has(r)) {
				var o = pn("", n),
					i = o.parentNode;
				fn.set(r, i), i.removeChild(o)
			}
			var a = Array.from(fn.get(r).children).find((function(t) {
				return "STYLE" === t.tagName && t["rc-util-key"] === e
			}));
			if (a) {
				var s, c, l;
				if ((null === (s = n.csp) || void 0 === s ? void 0 : s.nonce) && a.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)) a.nonce = null === (l = n.csp) || void 0 === l ? void 0 : l.nonce;
				return a.innerHTML !== t && (a.innerHTML = t), a
			}
			var u = pn(t, n);
			return u["rc-util-key"] = e, u
		}

		function mn(t) {
			return "object" === ue(t) && "string" == typeof t.name && "string" == typeof t.theme && ("object" === ue(t.icon) || "function" == typeof t.icon)
		}

		function _n() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return Object.keys(t).reduce((function(e, n) {
				var r = t[n];
				switch (n) {
					case "class":
						e.className = r, delete e.class;
						break;
					default:
						e[n] = r
				}
				return e
			}), {})
		}

		function gn(t) {
			return en(t)[0]
		}

		function vn(t) {
			return t ? Array.isArray(t) ? t : [t] : []
		}
		var yn = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
			wn = {
				primaryColor: "#333",
				secondaryColor: "#E6E6E6",
				calculated: !1
			};
		var bn = function(t) {
			var e, o, i = t.icon,
				a = t.className,
				s = t.onClick,
				c = t.style,
				l = t.primaryColor,
				u = t.secondaryColor,
				d = Te(t, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]),
				p = wn;
			if (l && (p = {
					primaryColor: l,
					secondaryColor: u || gn(l)
				}), function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						e = (0, n.useContext)(De),
						r = e.csp;
					(0, n.useEffect)((function() {
						hn(t, "@ant-design-icons", {
							prepend: !0,
							csp: r
						})
					}), [])
				}(), e = mn(i), o = "icon should be icon definiton, but got ".concat(i), ln(e, "[@ant-design/icons] ".concat(o)), !mn(i)) return null;
			var f = i;
			return f && "function" == typeof f.icon && (f = Ie(Ie({}, f), {}, {
					icon: f.icon(p.primaryColor, p.secondaryColor)
				})),
				function t(e, n, o) {
					return o ? r().createElement(e.tag, Ie(Ie({
						key: n
					}, _n(e.attrs)), o), (e.children || []).map((function(r, o) {
						return t(r, "".concat(n, "-").concat(e.tag, "-").concat(o))
					}))) : r().createElement(e.tag, Ie({
						key: n
					}, _n(e.attrs)), (e.children || []).map((function(r, o) {
						return t(r, "".concat(n, "-").concat(e.tag, "-").concat(o))
					})))
				}(f.icon, "svg-".concat(f.name), Ie({
					className: a,
					onClick: s,
					style: c,
					"data-icon": f.name,
					width: "1em",
					height: "1em",
					fill: "currentColor",
					"aria-hidden": "true"
				}, d))
		};
		bn.displayName = "IconReact", bn.getTwoToneColors = function() {
			return Ie({}, wn)
		}, bn.setTwoToneColors = function(t) {
			var e = t.primaryColor,
				n = t.secondaryColor;
			wn.primaryColor = e, wn.secondaryColor = n || gn(e), wn.calculated = !!n
		};
		const En = bn;

		function On(t) {
			var e = Pe(vn(t), 2),
				n = e[0],
				r = e[1];
			return En.setTwoToneColors({
				primaryColor: n,
				secondaryColor: r
			})
		}
		On("#1890ff");
		var Sn = n.forwardRef((function(t, e) {
			var r, o = t.className,
				i = t.icon,
				a = t.spin,
				s = t.rotate,
				c = t.tabIndex,
				l = t.onClick,
				u = t.twoToneColor,
				d = Te(t, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]),
				p = n.useContext(De).prefixCls,
				f = void 0 === p ? "anticon" : p,
				h = Ae()(f, (ke(r = {}, "".concat(f, "-").concat(i.name), !!i.name), ke(r, "".concat(f, "-spin"), !!a || "loading" === i.name), r), o),
				m = c;
			void 0 === m && l && (m = -1);
			var _ = s ? {
					msTransform: "rotate(".concat(s, "deg)"),
					transform: "rotate(".concat(s, "deg)")
				} : void 0,
				g = Pe(vn(u), 2),
				v = g[0],
				y = g[1];
			return n.createElement("span", Object.assign({
				role: "img",
				"aria-label": i.name
			}, d, {
				ref: e,
				tabIndex: m,
				onClick: l,
				className: h
			}), n.createElement(En, {
				icon: i,
				primaryColor: v,
				secondaryColor: y,
				style: _
			}))
		}));
		Sn.displayName = "AntdIcon", Sn.getTwoToneColor = function() {
			var t = En.getTwoToneColors();
			return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor
		}, Sn.setTwoToneColor = On;
		const Cn = Sn;
		var xn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Se
			}))
		};
		xn.displayName = "HomeOutlined";
		const Pn = n.forwardRef(xn);
		const kn = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "0 0 1024 1024",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"
					}
				}]
			},
			name: "shopping-cart",
			theme: "outlined"
		};
		var Tn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: kn
			}))
		};
		Tn.displayName = "ShoppingCartOutlined";
		const Nn = n.forwardRef(Tn);
		const An = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"
					}
				}]
			},
			name: "team",
			theme: "outlined"
		};
		var Dn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: An
			}))
		};
		Dn.displayName = "TeamOutlined";
		const Rn = n.forwardRef(Dn);
		const In = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"
					}
				}]
			},
			name: "shopping",
			theme: "outlined"
		};
		var Ln = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: In
			}))
		};
		Ln.displayName = "ShoppingOutlined";
		const Mn = n.forwardRef(Ln);
		const qn = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"
					}
				}]
			},
			name: "dollar",
			theme: "outlined"
		};
		var jn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: qn
			}))
		};
		jn.displayName = "DollarOutlined";
		const Bn = n.forwardRef(jn);
		const Fn = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"
					}
				}]
			},
			name: "setting",
			theme: "outlined"
		};
		var Hn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Fn
			}))
		};
		Hn.displayName = "SettingOutlined";
		const Un = n.forwardRef(Hn);
		const Vn = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
					}
				}]
			},
			name: "double-right",
			theme: "outlined"
		};
		var zn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Vn
			}))
		};
		zn.displayName = "DoubleRightOutlined";
		const Wn = n.forwardRef(zn);
		const Gn = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
					}
				}]
			},
			name: "logout",
			theme: "outlined"
		};
		var Kn = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Gn
			}))
		};
		Kn.displayName = "LogoutOutlined";
		const $n = n.forwardRef(Kn);
		var Qn = Object.keys,
			Zn = Array.isArray,
			Yn = "undefined" != typeof self ? self : "undefined" != typeof window ? window : __webpack_require__.g;

		function Jn(t, e) {
			return "object" != typeof e || Qn(e).forEach((function(n) {
				t[n] = e[n]
			})), t
		}
		var Xn = Object.getPrototypeOf,
			tr = {}.hasOwnProperty;

		function er(t, e) {
			return tr.call(t, e)
		}

		function nr(t, e) {
			"function" == typeof e && (e = e(Xn(t))), Qn(e).forEach((function(n) {
				or(t, n, e[n])
			}))
		}
		var rr = Object.defineProperty;

		function or(t, e, n, r) {
			rr(t, e, Jn(n && er(n, "get") && "function" == typeof n.get ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r))
		}

		function ir(t) {
			return {
				from: function(e) {
					return t.prototype = Object.create(e.prototype), or(t.prototype, "constructor", t), {
						extend: nr.bind(null, t.prototype)
					}
				}
			}
		}
		var ar = Object.getOwnPropertyDescriptor;
		var sr = [].slice;

		function cr(t, e, n) {
			return sr.call(t, e, n)
		}

		function lr(t, e) {
			return e(t)
		}

		function ur(t) {
			if (!t) throw new Error("Assertion Failed")
		}

		function dr(t) {
			Yn.setImmediate ? setImmediate(t) : setTimeout(t, 0)
		}

		function pr(t, e) {
			return t.reduce((function(t, n, r) {
				var o = e(n, r);
				return o && (t[o[0]] = o[1]), t
			}), {})
		}

		function fr(t, e) {
			return function() {
				try {
					t.apply(this, arguments)
				} catch (t) {
					e(t)
				}
			}
		}

		function hr(t, e, n) {
			try {
				t.apply(null, n)
			} catch (t) {
				e && e(t)
			}
		}

		function mr(t, e) {
			if (er(t, e)) return t[e];
			if (!e) return t;
			if ("string" != typeof e) {
				for (var n = [], r = 0, o = e.length; r < o; ++r) {
					var i = mr(t, e[r]);
					n.push(i)
				}
				return n
			}
			var a = e.indexOf(".");
			if (-1 !== a) {
				var s = t[e.substr(0, a)];
				return void 0 === s ? void 0 : mr(s, e.substr(a + 1))
			}
		}

		function _r(t, e, n) {
			if (t && void 0 !== e && (!("isFrozen" in Object) || !Object.isFrozen(t)))
				if ("string" != typeof e && "length" in e) {
					ur("string" != typeof n && "length" in n);
					for (var r = 0, o = e.length; r < o; ++r) _r(t, e[r], n[r])
				} else {
					var i = e.indexOf(".");
					if (-1 !== i) {
						var a = e.substr(0, i),
							s = e.substr(i + 1);
						if ("" === s) void 0 === n ? delete t[a] : t[a] = n;
						else {
							var c = t[a];
							c || (c = t[a] = {}), _r(c, s, n)
						}
					} else void 0 === n ? delete t[e] : t[e] = n
				}
		}

		function gr(t) {
			var e = {};
			for (var n in t) er(t, n) && (e[n] = t[n]);
			return e
		}
		var vr = [].concat;

		function yr(t) {
			return vr.apply([], t)
		}
		var wr = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(yr([8, 16, 32, 64].map((function(t) {
			return ["Int", "Uint", "Float"].map((function(e) {
				return e + t + "Array"
			}))
		})))).filter((function(t) {
			return Yn[t]
		})).map((function(t) {
			return Yn[t]
		}));

		function br(t) {
			if (!t || "object" != typeof t) return t;
			var e;
			if (Zn(t)) {
				e = [];
				for (var n = 0, r = t.length; n < r; ++n) e.push(br(t[n]))
			} else if (wr.indexOf(t.constructor) >= 0) e = t;
			else
				for (var o in e = t.constructor ? Object.create(t.constructor.prototype) : {}, t) er(t, o) && (e[o] = br(t[o]));
			return e
		}

		function Er(t, e, n, r) {
			return n = n || {}, r = r || "", Qn(t).forEach((function(o) {
				if (er(e, o)) {
					var i = t[o],
						a = e[o];
					"object" == typeof i && "object" == typeof a && i && a && "" + i.constructor == "" + a.constructor ? Er(i, a, n, r + o + ".") : i !== a && (n[r + o] = e[o])
				} else n[r + o] = void 0
			})), Qn(e).forEach((function(o) {
				er(t, o) || (n[r + o] = e[o])
			})), n
		}
		var Or = "undefined" != typeof Symbol && Symbol.iterator,
			Sr = Or ? function(t) {
				var e;
				return null != t && (e = t[Or]) && e.apply(t)
			} : function() {
				return null
			},
			Cr = {};

		function xr(t) {
			var e, n, r, o;
			if (1 === arguments.length) {
				if (Zn(t)) return t.slice();
				if (this === Cr && "string" == typeof t) return [t];
				if (o = Sr(t)) {
					for (n = []; !(r = o.next()).done;) n.push(r.value);
					return n
				}
				if (null == t) return [t];
				if ("number" == typeof(e = t.length)) {
					for (n = new Array(e); e--;) n[e] = t[e];
					return n
				}
				return [t]
			}
			for (e = arguments.length, n = new Array(e); e--;) n[e] = arguments[e];
			return n
		}
		var Pr = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

		function kr(t, e) {
			Pr = t, Tr = e
		}
		var Tr = function() {
				return !0
			},
			Nr = !new Error("").stack;

		function Ar() {
			if (Nr) try {
				throw Ar.arguments, new Error
			} catch (t) {
				return t
			}
			return new Error
		}

		function Dr(t, e) {
			var n = t.stack;
			return n ? (e = e || 0, 0 === n.indexOf(t.name) && (e += (t.name + t.message).split("\n").length), n.split("\n").slice(e).filter(Tr).map((function(t) {
				return "\n" + t
			})).join("")) : ""
		}
		var Rr = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
			Ir = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Rr),
			Lr = {
				VersionChanged: "Database version changed by other database connection",
				DatabaseClosed: "Database has been closed",
				Abort: "Transaction aborted",
				TransactionInactive: "Transaction has already completed or failed"
			};

		function Mr(t, e) {
			this._e = Ar(), this.name = t, this.message = e
		}

		function qr(t, e, n, r) {
			this._e = Ar(), this.failures = e, this.failedKeys = r, this.successCount = n
		}

		function jr(t, e) {
			this._e = Ar(), this.name = "BulkError", this.failures = e, this.message = function(t, e) {
				return t + ". Errors: " + e.map((function(t) {
					return t.toString()
				})).filter((function(t, e, n) {
					return n.indexOf(t) === e
				})).join("\n")
			}(t, e)
		}
		ir(Mr).from(Error).extend({
			stack: {
				get: function() {
					return this._stack || (this._stack = this.name + ": " + this.message + Dr(this._e, 2))
				}
			},
			toString: function() {
				return this.name + ": " + this.message
			}
		}), ir(qr).from(Mr), ir(jr).from(Mr);
		var Br = Ir.reduce((function(t, e) {
				return t[e] = e + "Error", t
			}), {}),
			Fr = Mr,
			Hr = Ir.reduce((function(t, e) {
				var n = e + "Error";

				function r(t, r) {
					this._e = Ar(), this.name = n, t ? "string" == typeof t ? (this.message = t, this.inner = r || null) : "object" == typeof t && (this.message = t.name + " " + t.message, this.inner = t) : (this.message = Lr[e] || n, this.inner = null)
				}
				return ir(r).from(Fr), t[e] = r, t
			}), {});
		Hr.Syntax = SyntaxError, Hr.Type = TypeError, Hr.Range = RangeError;
		var Ur = Rr.reduce((function(t, e) {
			return t[e + "Error"] = Hr[e], t
		}), {});
		var Vr = Ir.reduce((function(t, e) {
			return -1 === ["Syntax", "Type", "Range"].indexOf(e) && (t[e + "Error"] = Hr[e]), t
		}), {});

		function zr() {}

		function Wr(t) {
			return t
		}

		function Gr(t, e) {
			return null == t || t === Wr ? e : function(n) {
				return e(t(n))
			}
		}

		function Kr(t, e) {
			return function() {
				t.apply(this, arguments), e.apply(this, arguments)
			}
		}

		function $r(t, e) {
			return t === zr ? e : function() {
				var n = t.apply(this, arguments);
				void 0 !== n && (arguments[0] = n);
				var r = this.onsuccess,
					o = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var i = e.apply(this, arguments);
				return r && (this.onsuccess = this.onsuccess ? Kr(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Kr(o, this.onerror) : o), void 0 !== i ? i : n
			}
		}

		function Qr(t, e) {
			return t === zr ? e : function() {
				t.apply(this, arguments);
				var n = this.onsuccess,
					r = this.onerror;
				this.onsuccess = this.onerror = null, e.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Kr(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Kr(r, this.onerror) : r)
			}
		}

		function Zr(t, e) {
			return t === zr ? e : function(n) {
				var r = t.apply(this, arguments);
				Jn(n, r);
				var o = this.onsuccess,
					i = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var a = e.apply(this, arguments);
				return o && (this.onsuccess = this.onsuccess ? Kr(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? Kr(i, this.onerror) : i), void 0 === r ? void 0 === a ? void 0 : a : Jn(r, a)
			}
		}

		function Yr(t, e) {
			return t === zr ? e : function() {
				return !1 !== e.apply(this, arguments) && t.apply(this, arguments)
			}
		}

		function Jr(t, e) {
			return t === zr ? e : function() {
				var n = t.apply(this, arguments);
				if (n && "function" == typeof n.then) {
					for (var r = this, o = arguments.length, i = new Array(o); o--;) i[o] = arguments[o];
					return n.then((function() {
						return e.apply(r, i)
					}))
				}
				return e.apply(this, arguments)
			}
		}
		Vr.ModifyError = qr, Vr.DexieError = Mr, Vr.BulkError = jr;
		var Xr = {},
			to = function() {
				try {
					return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")()
				} catch (e) {
					var t = Yn.Promise;
					return t ? [t.resolve(), t.prototype, t.resolve()] : []
				}
			}(),
			eo = to[0],
			no = to[1],
			ro = to[2],
			oo = no && no.then,
			io = eo && eo.constructor,
			ao = to[3],
			so = !!ro,
			co = !1,
			lo = ro ? function() {
				ro.then(Do)
			} : Yn.setImmediate ? setImmediate.bind(null, Do) : Yn.MutationObserver ? function() {
				var t = document.createElement("div");
				new MutationObserver((function() {
					Do(), t = null
				})).observe(t, {
					attributes: !0
				}), t.setAttribute("i", "1")
			} : function() {
				setTimeout(Do, 0)
			},
			uo = function(t, e) {
				wo.push([t, e]), fo && (lo(), fo = !1)
			},
			po = !0,
			fo = !0,
			ho = [],
			mo = [],
			_o = null,
			go = Wr,
			vo = {
				id: "global",
				global: !0,
				ref: 0,
				unhandleds: [],
				onunhandled: ei,
				pgp: !1,
				env: {},
				finalize: function() {
					this.unhandleds.forEach((function(t) {
						try {
							ei(t[0], t[1])
						} catch (t) {}
					}))
				}
			},
			yo = vo,
			wo = [],
			bo = 0,
			Eo = [];

		function Oo(t) {
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this.onuncatched = zr, this._lib = !1;
			var e = this._PSD = yo;
			if (Pr && (this._stackHolder = Ar(), this._prev = null, this._numPrev = 0), "function" != typeof t) {
				if (t !== Xr) throw new TypeError("Not a function");
				return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Po(this, this._value))
			}
			this._state = null, this._value = null, ++e.ref, xo(this, t)
		}
		var So = {
			get: function() {
				var t = yo,
					e = Uo;

				function n(n, r) {
					var o = this,
						i = !t.global && (t !== yo || e !== Uo);
					i && Go();
					var a = new Oo((function(e, a) {
						To(o, new Co(Xo(n, t, i), Xo(r, t, i), e, a, t))
					}));
					return Pr && Ao(a, this), a
				}
				return n.prototype = Xr, n
			},
			set: function(t) {
				or(this, "then", t && t.prototype === Xr ? So : {
					get: function() {
						return t
					},
					set: So.set
				})
			}
		};

		function Co(t, e, n, r, o) {
			this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = n, this.reject = r, this.psd = o
		}

		function xo(t, e) {
			try {
				e((function(e) {
					if (null === t._state) {
						if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
						var n = t._lib && Ro();
						e && "function" == typeof e.then ? xo(t, (function(t, n) {
							e instanceof Oo ? e._then(t, n) : e.then(t, n)
						})) : (t._state = !0, t._value = e, ko(t)), n && Io()
					}
				}), Po.bind(null, t))
			} catch (e) {
				Po(t, e)
			}
		}

		function Po(t, e) {
			if (mo.push(e), null === t._state) {
				var n = t._lib && Ro();
				e = go(e), t._state = !1, t._value = e, Pr && null !== e && "object" == typeof e && !e._promise && hr((function() {
						var n = function t(e, n) {
							var r;
							return ar(e, n) || (r = Xn(e)) && t(r, n)
						}(e, "stack");
						e._promise = t, or(e, "stack", {
							get: function() {
								return co ? n && (n.get ? n.get.apply(e) : n.value) : t.stack
							}
						})
					})),
					function(t) {
						ho.some((function(e) {
							return e._value === t._value
						})) || ho.push(t)
					}(t), ko(t), n && Io()
			}
		}

		function ko(t) {
			var e = t._listeners;
			t._listeners = [];
			for (var n = 0, r = e.length; n < r; ++n) To(t, e[n]);
			var o = t._PSD;
			--o.ref || o.finalize(), 0 === bo && (++bo, uo((function() {
				0 == --bo && Lo()
			}), []))
		}

		function To(t, e) {
			if (null !== t._state) {
				var n = t._state ? e.onFulfilled : e.onRejected;
				if (null === n) return (t._state ? e.resolve : e.reject)(t._value);
				++e.psd.ref, ++bo, uo(No, [n, t, e])
			} else t._listeners.push(e)
		}

		function No(t, e, n) {
			try {
				_o = e;
				var r, o = e._value;
				e._state ? r = t(o) : (mo.length && (mo = []), r = t(o), -1 === mo.indexOf(o) && function(t) {
					var e = ho.length;
					for (; e;)
						if (ho[--e]._value === t._value) return void ho.splice(e, 1)
				}(e)), n.resolve(r)
			} catch (t) {
				n.reject(t)
			} finally {
				_o = null, 0 == --bo && Lo(), --n.psd.ref || n.psd.finalize()
			}
		}

		function Ao(t, e) {
			var n = e ? e._numPrev + 1 : 0;
			n < 100 && (t._prev = e, t._numPrev = n)
		}

		function Do() {
			Ro() && Io()
		}

		function Ro() {
			var t = po;
			return po = !1, fo = !1, t
		}

		function Io() {
			var t, e, n;
			do {
				for (; wo.length > 0;)
					for (t = wo, wo = [], n = t.length, e = 0; e < n; ++e) {
						var r = t[e];
						r[0].apply(null, r[1])
					}
			} while (wo.length > 0);
			po = !0, fo = !0
		}

		function Lo() {
			var t = ho;
			ho = [], t.forEach((function(t) {
				t._PSD.onunhandled.call(null, t._value, t)
			}));
			for (var e = Eo.slice(0), n = e.length; n;) e[--n]()
		}

		function Mo(t) {
			return new Oo(Xr, !1, t)
		}

		function qo(t, e) {
			var n = yo;
			return function() {
				var r = Ro(),
					o = yo;
				try {
					return Zo(n, !0), t.apply(this, arguments)
				} catch (t) {
					e && e(t)
				} finally {
					Zo(o, !1), r && Io()
				}
			}
		}
		nr(Oo.prototype, {
			then: So,
			_then: function(t, e) {
				To(this, new Co(null, null, t, e, yo))
			},
			catch: function(t) {
				if (1 === arguments.length) return this.then(null, t);
				var e = arguments[0],
					n = arguments[1];
				return "function" == typeof e ? this.then(null, (function(t) {
					return t instanceof e ? n(t) : Mo(t)
				})) : this.then(null, (function(t) {
					return t && t.name === e ? n(t) : Mo(t)
				}))
			},
			finally: function(t) {
				return this.then((function(e) {
					return t(), e
				}), (function(e) {
					return t(), Mo(e)
				}))
			},
			stack: {
				get: function() {
					if (this._stack) return this._stack;
					try {
						co = !0;
						var t = function t(e, n, r) {
							if (n.length === r) return n;
							var o = "";
							if (!1 === e._state) {
								var i, a, s = e._value;
								null != s ? (i = s.name || "Error", a = s.message || s, o = Dr(s, 0)) : (i = s, a = ""), n.push(i + (a ? ": " + a : "") + o)
							}
							Pr && ((o = Dr(e._stackHolder, 2)) && -1 === n.indexOf(o) && n.push(o), e._prev && t(e._prev, n, r));
							return n
						}(this, [], 20).join("\nFrom previous: ");
						return null !== this._state && (this._stack = t), t
					} finally {
						co = !1
					}
				}
			},
			timeout: function(t, e) {
				var n = this;
				return t < 1 / 0 ? new Oo((function(r, o) {
					var i = setTimeout((function() {
						return o(new Hr.Timeout(e))
					}), t);
					n.then(r, o).finally(clearTimeout.bind(null, i))
				})) : this
			}
		}), "undefined" != typeof Symbol && Symbol.toStringTag && or(Oo.prototype, Symbol.toStringTag, "Promise"), vo.env = Yo(), nr(Oo, {
			all: function() {
				var t = xr.apply(null, arguments).map(Ko);
				return new Oo((function(e, n) {
					0 === t.length && e([]);
					var r = t.length;
					t.forEach((function(o, i) {
						return Oo.resolve(o).then((function(n) {
							t[i] = n, --r || e(t)
						}), n)
					}))
				}))
			},
			resolve: function(t) {
				if (t instanceof Oo) return t;
				if (t && "function" == typeof t.then) return new Oo((function(e, n) {
					t.then(e, n)
				}));
				var e = new Oo(Xr, !0, t);
				return Ao(e, _o), e
			},
			reject: Mo,
			race: function() {
				var t = xr.apply(null, arguments).map(Ko);
				return new Oo((function(e, n) {
					t.map((function(t) {
						return Oo.resolve(t).then(e, n)
					}))
				}))
			},
			PSD: {
				get: function() {
					return yo
				},
				set: function(t) {
					return yo = t
				}
			},
			newPSD: zo,
			usePSD: Jo,
			scheduler: {
				get: function() {
					return uo
				},
				set: function(t) {
					uo = t
				}
			},
			rejectionMapper: {
				get: function() {
					return go
				},
				set: function(t) {
					go = t
				}
			},
			follow: function(t, e) {
				return new Oo((function(n, r) {
					return zo((function(e, n) {
						var r = yo;
						r.unhandleds = [], r.onunhandled = n, r.finalize = Kr((function() {
							var t = this;
							! function(t) {
								Eo.push((function e() {
									t(), Eo.splice(Eo.indexOf(e), 1)
								})), ++bo, uo((function() {
									0 == --bo && Lo()
								}), [])
							}((function() {
								0 === t.unhandleds.length ? e() : n(t.unhandleds[0])
							}))
						}), r.finalize), t()
					}), e, n, r)
				}))
			}
		});
		var jo = {
				awaits: 0,
				echoes: 0,
				id: 0
			},
			Bo = 0,
			Fo = [],
			Ho = 0,
			Uo = 0,
			Vo = 0;

		function zo(t, e, n, r) {
			var o = yo,
				i = Object.create(o);
			i.parent = o, i.ref = 0, i.global = !1, i.id = ++Vo;
			var a = vo.env;
			i.env = so ? {
				Promise: Oo,
				PromiseProp: {
					value: Oo,
					configurable: !0,
					writable: !0
				},
				all: Oo.all,
				race: Oo.race,
				resolve: Oo.resolve,
				reject: Oo.reject,
				nthen: ti(a.nthen, i),
				gthen: ti(a.gthen, i)
			} : {}, e && Jn(i, e), ++o.ref, i.finalize = function() {
				--this.parent.ref || this.parent.finalize()
			};
			var s = Jo(i, t, n, r);
			return 0 === i.ref && i.finalize(), s
		}

		function Wo() {
			return jo.id || (jo.id = ++Bo), ++jo.awaits, jo.echoes += 7, jo.id
		}

		function Go(t) {
			!jo.awaits || t && t !== jo.id || (0 == --jo.awaits && (jo.id = 0), jo.echoes = 7 * jo.awaits)
		}

		function Ko(t) {
			return jo.echoes && t && t.constructor === io ? (Wo(), t.then((function(t) {
				return Go(), t
			}), (function(t) {
				return Go(), ni(t)
			}))) : t
		}

		function $o(t) {
			++Uo, jo.echoes && 0 != --jo.echoes || (jo.echoes = jo.id = 0), Fo.push(yo), Zo(t, !0)
		}

		function Qo() {
			var t = Fo[Fo.length - 1];
			Fo.pop(), Zo(t, !1)
		}

		function Zo(t, e) {
			var n, r = yo;
			if ((e ? !jo.echoes || Ho++ && t === yo : !Ho || --Ho && t === yo) || (n = e ? $o.bind(null, t) : Qo, oo.call(eo, n)), t !== yo && (yo = t, r === vo && (vo.env = Yo()), so)) {
				var o = vo.env.Promise,
					i = t.env;
				no.then = i.nthen, o.prototype.then = i.gthen, (r.global || t.global) && (Object.defineProperty(Yn, "Promise", i.PromiseProp), o.all = i.all, o.race = i.race, o.resolve = i.resolve, o.reject = i.reject)
			}
		}

		function Yo() {
			var t = Yn.Promise;
			return so ? {
				Promise: t,
				PromiseProp: Object.getOwnPropertyDescriptor(Yn, "Promise"),
				all: t.all,
				race: t.race,
				resolve: t.resolve,
				reject: t.reject,
				nthen: no.then,
				gthen: t.prototype.then
			} : {}
		}

		function Jo(t, e, n, r, o) {
			var i = yo;
			try {
				return Zo(t, !0), e(n, r, o)
			} finally {
				Zo(i, !1)
			}
		}

		function Xo(t, e, n) {
			return "function" != typeof t ? t : function() {
				var r = yo;
				n && Wo(), Zo(e, !0);
				try {
					return t.apply(this, arguments)
				} finally {
					Zo(r, !1)
				}
			}
		}

		function ti(t, e) {
			return function(n, r) {
				return t.call(this, Xo(n, e, !1), Xo(r, e, !1))
			}
		}

		function ei(t, e) {
			var n;
			try {
				n = e.onuncatched(t)
			} catch (t) {}
			if (!1 !== n) try {
				var r, o = {
					promise: e,
					reason: t
				};
				if (Yn.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent("unhandledrejection", !0, !0), Jn(r, o)) : Yn.CustomEvent && Jn(r = new CustomEvent("unhandledrejection", {
						detail: o
					}), o), r && Yn.dispatchEvent && (dispatchEvent(r), !Yn.PromiseRejectionEvent && Yn.onunhandledrejection)) try {
					Yn.onunhandledrejection(r)
				} catch (t) {}
				r.defaultPrevented || console.warn("Unhandled rejection: " + (t.stack || t))
			} catch (t) {}
		}
		var ni = Oo.reject;

		function ri(t) {
			var e = {},
				n = function(n, r) {
					if (r) {
						for (var o = arguments.length, i = new Array(o - 1); --o;) i[o - 1] = arguments[o];
						return e[n].subscribe.apply(null, i), t
					}
					if ("string" == typeof n) return e[n]
				};
			n.addEventType = i;
			for (var r = 1, o = arguments.length; r < o; ++r) i(arguments[r]);
			return n;

			function i(t, r, o) {
				if ("object" == typeof t) return a(t);
				r || (r = Yr), o || (o = zr);
				var i = {
					subscribers: [],
					fire: o,
					subscribe: function(t) {
						-1 === i.subscribers.indexOf(t) && (i.subscribers.push(t), i.fire = r(i.fire, t))
					},
					unsubscribe: function(t) {
						i.subscribers = i.subscribers.filter((function(e) {
							return e !== t
						})), i.fire = i.subscribers.reduce(r, o)
					}
				};
				return e[t] = n[t] = i, i
			}

			function a(t) {
				Qn(t).forEach((function(e) {
					var n = t[e];
					if (Zn(n)) i(e, t[e][0], t[e][1]);
					else {
						if ("asap" !== n) throw new Hr.InvalidArgument("Invalid event config");
						var r = i(e, Wr, (function() {
							for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
							r.subscribers.forEach((function(t) {
								dr((function() {
									t.apply(null, e)
								}))
							}))
						}))
					}
				}))
			}
		}
		var oi, ii = String.fromCharCode(65535),
			ai = function() {
				try {
					return IDBKeyRange.only([
						[]
					]), [
						[]
					]
				} catch (t) {
					return ii
				}
			}(),
			si = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
			ci = [],
			li = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
			ui = li,
			di = li,
			pi = function(t) {
				return !/(dexie\.js|dexie\.min\.js)/.test(t)
			};

		function fi(t, e) {
			var n, r, o, i, a, s = fi.dependencies,
				c = Jn({
					addons: fi.addons,
					autoOpen: !0,
					indexedDB: s.indexedDB,
					IDBKeyRange: s.IDBKeyRange
				}, e),
				l = c.addons,
				u = c.autoOpen,
				d = c.indexedDB,
				p = c.IDBKeyRange,
				f = this._dbSchema = {},
				h = [],
				m = [],
				_ = {},
				g = null,
				v = null,
				y = !1,
				w = null,
				b = !1,
				E = "readwrite",
				O = this,
				S = new Oo((function(t) {
					n = t
				})),
				C = new Oo((function(t, e) {
					r = e
				})),
				x = !0,
				P = !!Si(d);

			function k(t) {
				this._cfg = {
					version: t,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				}, this.stores({})
			}

			function T(t, e, n) {
				var r = O._createTransaction(E, m, f);
				r.create(e), r._completion.catch(n);
				var o = r._reject.bind(r);
				zo((function() {
					yo.trans = r, 0 === t ? (Qn(f).forEach((function(t) {
						N(e, t, f[t].primKey, f[t].indexes)
					})), Oo.follow((function() {
						return O.on.populate.fire(r)
					})).catch(o)) : function(t, e, n) {
						var r = [],
							o = h.filter((function(e) {
								return e._cfg.version === t
							}))[0];
						if (!o) throw new Hr.Upgrade("Dexie specification of currently installed DB version is missing");
						f = O._dbSchema = o._cfg.dbschema;
						var i = !1;

						function a() {
							return r.length ? Oo.resolve(r.shift()(e.idbtrans)).then(a) : Oo.resolve()
						}
						return h.filter((function(e) {
							return e._cfg.version > t
						})).forEach((function(t) {
							r.push((function() {
								var r = f,
									o = t._cfg.dbschema;
								Z(r, n), Z(o, n), f = O._dbSchema = o;
								var a = function(t, e) {
									var n = {
										del: [],
										add: [],
										change: []
									};
									for (var r in t) e[r] || n.del.push(r);
									for (r in e) {
										var o = t[r],
											i = e[r];
										if (o) {
											var a = {
												name: r,
												def: i,
												recreate: !1,
												del: [],
												add: [],
												change: []
											};
											if (o.primKey.src !== i.primKey.src) a.recreate = !0, n.change.push(a);
											else {
												var s = o.idxByName,
													c = i.idxByName;
												for (var l in s) c[l] || a.del.push(l);
												for (l in c) {
													var u = s[l],
														d = c[l];
													u ? u.src !== d.src && a.change.push(d) : a.add.push(d)
												}(a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && n.change.push(a)
											}
										} else n.add.push([r, i])
									}
									return n
								}(r, o);
								if (a.add.forEach((function(t) {
										N(n, t[0], t[1].primKey, t[1].indexes)
									})), a.change.forEach((function(t) {
										if (t.recreate) throw new Hr.Upgrade("Not yet support for changing primary key");
										var e = n.objectStore(t.name);
										t.add.forEach((function(t) {
											A(e, t)
										})), t.change.forEach((function(t) {
											e.deleteIndex(t.name), A(e, t)
										})), t.del.forEach((function(t) {
											e.deleteIndex(t)
										}))
									})), t._cfg.contentUpgrade) return i = !0, Oo.follow((function() {
									t._cfg.contentUpgrade(e)
								}))
							})), r.push((function(e) {
								i && ui || function(t, e) {
									for (var n = 0; n < e.db.objectStoreNames.length; ++n) {
										var r = e.db.objectStoreNames[n];
										null == t[r] && e.db.deleteObjectStore(r)
									}
								}(t._cfg.dbschema, e)
							}))
						})), a().then((function() {
							! function(t, e) {
								Qn(t).forEach((function(n) {
									e.db.objectStoreNames.contains(n) || N(e, n, t[n].primKey, t[n].indexes)
								}))
							}(f, n)
						}))
					}(t, r, e).catch(o)
				}))
			}

			function N(t, e, n, r) {
				var o = t.db.createObjectStore(e, n.keyPath ? {
					keyPath: n.keyPath,
					autoIncrement: n.auto
				} : {
					autoIncrement: n.auto
				});
				return r.forEach((function(t) {
					A(o, t)
				})), o
			}

			function A(t, e) {
				t.createIndex(e.name, e.keyPath, {
					unique: e.unique,
					multiEntry: e.multi
				})
			}

			function D(t, e, n) {
				var r = arguments.length;
				if (r < 2) throw new Hr.InvalidArgument("Too few arguments");
				for (var o = new Array(r - 1); --r;) o[r - 1] = arguments[r];
				n = o.pop();
				var i = yr(o);
				return [t, i, n]
			}

			function R(t, e, n) {
				this.name = t, this.schema = e, this._tx = n, this.hook = _[t] ? _[t].hook : ri(null, {
					creating: [$r, zr],
					reading: [Gr, Wr],
					updating: [Zr, zr],
					deleting: [Qr, zr]
				})
			}

			function I(t, e, n) {
				return (n ? vi : _i)((function(n) {
					t.push(n), e && e()
				}))
			}

			function L(t, e, n, r, o) {
				return new Oo((function(i, a) {
					var s = n.length,
						c = s - 1;
					if (0 === s) return i();
					if (r) {
						var l, u = vi(a),
							d = mi(null);
						hr((function() {
							for (var r = 0; r < s; ++r) {
								l = {
									onsuccess: null,
									onerror: null
								};
								var a = n[r];
								o.call(l, a[0], a[1], e);
								var p = t.delete(a[0]);
								p._hookCtx = l, p.onerror = u, p.onsuccess = r === c ? mi(i) : d
							}
						}), (function(t) {
							throw l.onerror && l.onerror(t), t
						}))
					} else
						for (var p = 0; p < s; ++p) {
							var f = t.delete(n[p]);
							f.onerror = _i(a), p === c && (f.onsuccess = qo((function() {
								return i()
							})))
						}
				}))
			}

			function M(t, e, n, r) {
				var o = this;
				this.db = O, this.mode = t, this.storeNames = e, this.idbtrans = null, this.on = ri(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Oo((function(t, e) {
					o._resolve = t, o._reject = e
				})), this._completion.then((function() {
					o.active = !1, o.on.complete.fire()
				}), (function(t) {
					var e = o.active;
					return o.active = !1, o.on.error.fire(t), o.parent ? o.parent._reject(t) : e && o.idbtrans && o.idbtrans.abort(), ni(t)
				}))
			}

			function q(t, e, n) {
				this._ctx = {
					table: t,
					index: ":id" === e ? null : e,
					or: n
				}
			}

			function j(t, e) {
				var n = null,
					r = null;
				if (e) try {
					n = e()
				} catch (t) {
					r = t
				}
				var o = t._ctx,
					i = o.table;
				this._ctx = {
					table: i,
					index: o.index,
					isPrimKey: !o.index || i.schema.primKey.keyPath && o.index === i.schema.primKey.name,
					range: n,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: 1 / 0,
					error: r,
					or: o.or,
					valueMapper: i.hook.reading.fire
				}
			}

			function B(t, e) {
				return !(t.filter || t.algorithm || t.or) && (e ? t.justLimit : !t.replayFilter)
			}

			function F(t, e) {
				return t._cfg.version - e._cfg.version
			}

			function H(t, e, n) {
				e.forEach((function(e) {
					var r = n[e];
					t.forEach((function(t) {
						e in t || (t === M.prototype || t instanceof M ? or(t, e, {
							get: function() {
								return this.table(e)
							}
						}) : t[e] = new R(e, r))
					}))
				}))
			}

			function U(t, e, n, r, o, i) {
				var a = qo(i ? function(t, e, r) {
					return n(i(t), e, r)
				} : n, o);
				t.onerror || (t.onerror = _i(o)), t.onsuccess = fr(e ? function() {
					var n = t.result;
					if (n) {
						var i = function() {
							n.continue()
						};
						e(n, (function(t) {
							i = t
						}), r, o) && a(n.value, n, (function(t) {
							i = t
						})), i()
					} else r()
				} : function() {
					var e = t.result;
					if (e) {
						var n = function() {
							e.continue()
						};
						a(e.value, e, (function(t) {
							n = t
						})), n()
					} else r()
				}, o)
			}

			function V(t, e) {
				return d.cmp(t, e)
			}

			function z(t, e) {
				return V(t, e) > 0 ? t : e
			}

			function W(t, e) {
				return d.cmp(t, e)
			}

			function G(t, e) {
				return d.cmp(e, t)
			}

			function K(t, e) {
				return t < e ? -1 : t === e ? 0 : 1
			}

			function $(t, e) {
				return t > e ? -1 : t === e ? 0 : 1
			}

			function Q(t, e) {
				return t ? e ? function() {
					return t.apply(this, arguments) && e.apply(this, arguments)
				} : t : e
			}

			function Z(t, e) {
				for (var n = e.db.objectStoreNames, r = 0; r < n.length; ++r) {
					var i = n[r],
						a = e.objectStore(i);
					o = "getAll" in a;
					for (var s = 0; s < a.indexNames.length; ++s) {
						var c = a.indexNames[s],
							l = a.index(c).keyPath,
							u = "string" == typeof l ? l : "[" + cr(l).join("+") + "]";
						if (t[i]) {
							var d = t[i].idxByName[u];
							d && (d.name = c)
						}
					}
				}
				/Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && Yn.WorkerGlobalScope && Yn instanceof Yn.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (o = !1)
			}

			function Y(t) {
				O.on("blocked").fire(t), ci.filter((function(t) {
					return t.name === O.name && t !== O && !t._vcFired
				})).map((function(e) {
					return e.on("versionchange").fire(t)
				}))
			}
			this.version = function(t) {
				if (g || y) throw new Hr.Schema("Cannot add version when database is open");
				this.verno = Math.max(this.verno, t);
				var e = h.filter((function(e) {
					return e._cfg.version === t
				}))[0];
				return e || (e = new k(t), h.push(e), h.sort(F), x = !1, e)
			}, Jn(k.prototype, {
				stores: function(t) {
					this._cfg.storesSource = this._cfg.storesSource ? Jn(this._cfg.storesSource, t) : t;
					var e = {};
					h.forEach((function(t) {
						Jn(e, t._cfg.storesSource)
					}));
					var n = this._cfg.dbschema = {};
					return this._parseStoresSpec(e, n), f = O._dbSchema = n, [_, O, M.prototype].forEach((function(t) {
						for (var e in t) t[e] instanceof R && delete t[e]
					})), H([_, O, M.prototype, this._cfg.tables], Qn(n), n), m = Qn(n), this
				},
				upgrade: function(t) {
					return this._cfg.contentUpgrade = t, this
				},
				_parseStoresSpec: function(t, e) {
					Qn(t).forEach((function(n) {
						if (null !== t[n]) {
							var r = {},
								o = function(t) {
									var e = [];
									return t.split(",").forEach((function(t) {
										var n = (t = t.trim()).replace(/([&*]|\+\+)/g, ""),
											r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
										e.push(new bi(n, r || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), Zn(r), /\./.test(t)))
									})), e
								}(t[n]),
								i = o.shift();
							if (i.multi) throw new Hr.Schema("Primary key cannot be multi-valued");
							i.keyPath && _r(r, i.keyPath, i.auto ? 0 : i.keyPath), o.forEach((function(t) {
								if (t.auto) throw new Hr.Schema("Only primary key can be marked as autoIncrement (++)");
								if (!t.keyPath) throw new Hr.Schema("Index must have a name and cannot be an empty string");
								_r(r, t.keyPath, t.compound ? t.keyPath.map((function() {
									return ""
								})) : "")
							})), e[n] = new Ei(n, i, o, r)
						}
					}))
				}
			}), this._allTables = _, this._createTransaction = function(t, e, n, r) {
				return new M(t, e, n, r)
			}, this._whenReady = function(t) {
				return b || yo.letThrough ? t() : new Oo((function(t, e) {
					if (!y) {
						if (!u) return void e(new Hr.DatabaseClosed);
						O.open().catch(zr)
					}
					S.then(t, e)
				})).then(t)
			}, this.verno = 0, this.open = function() {
				if (y || g) return S.then((function() {
					return v ? ni(v) : O
				}));
				Pr && (C._stackHolder = Ar()), y = !0, v = null, b = !1;
				var e = n,
					r = null;
				return Oo.race([C, new Oo((function(e, n) {
					if (!d) throw new Hr.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
					var o = x ? d.open(t) : d.open(t, Math.round(10 * O.verno));
					if (!o) throw new Hr.MissingAPI("IndexedDB API not available");
					o.onerror = _i(n), o.onblocked = qo(Y), o.onupgradeneeded = qo((function(e) {
						if (r = o.transaction, x && !O._allowEmptyDB) {
							o.onerror = yi, r.abort(), o.result.close();
							var i = d.deleteDatabase(t);
							i.onsuccess = i.onerror = qo((function() {
								n(new Hr.NoSuchDatabase("Database " + t + " doesnt exist"))
							}))
						} else {
							r.onerror = _i(n), T((e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion) / 10, r, n)
						}
					}), n), o.onsuccess = qo((function() {
						if (r = null, g = o.result, ci.push(O), x) ! function() {
							if (O.verno = g.version / 10, O._dbSchema = f = {}, 0 === (m = cr(g.objectStoreNames, 0)).length) return;
							var t = g.transaction(Oi(m), "readonly");
							m.forEach((function(e) {
								for (var n = t.objectStore(e), r = n.keyPath, o = r && "string" == typeof r && -1 !== r.indexOf("."), i = new bi(r, r || "", !1, !1, !!n.autoIncrement, r && "string" != typeof r, o), a = [], s = 0; s < n.indexNames.length; ++s) {
									var c = n.index(n.indexNames[s]);
									o = (r = c.keyPath) && "string" == typeof r && -1 !== r.indexOf(".");
									var l = new bi(c.name, r, !!c.unique, !!c.multiEntry, !1, r && "string" != typeof r, o);
									a.push(l)
								}
								f[e] = new Ei(e, i, a, {})
							})), H([_], Qn(f), f)
						}();
						else if (g.objectStoreNames.length > 0) try {
							Z(f, g.transaction(Oi(g.objectStoreNames), "readonly"))
						} catch (t) {}
						g.onversionchange = qo((function(t) {
							O._vcFired = !0, O.on("versionchange").fire(t)
						})), P || "__dbnames" === t || oi.dbnames.put({
							name: t
						}).catch(zr), e()
					}), n)
				}))]).then((function() {
					return w = [], Oo.resolve(fi.vip(O.on.ready.fire)).then((function t() {
						if (w.length > 0) {
							var e = w.reduce(Jr, zr);
							return w = [], Oo.resolve(fi.vip(e)).then(t)
						}
					}))
				})).finally((function() {
					w = null
				})).then((function() {
					return y = !1, O
				})).catch((function(t) {
					try {
						r && r.abort()
					} catch (t) {}
					return y = !1, O.close(), ni(v = t)
				})).finally((function() {
					b = !0, e()
				}))
			}, this.close = function() {
				var t = ci.indexOf(O);
				if (t >= 0 && ci.splice(t, 1), g) {
					try {
						g.close()
					} catch (t) {}
					g = null
				}
				u = !1, v = new Hr.DatabaseClosed, y && r(v), S = new Oo((function(t) {
					n = t
				})), C = new Oo((function(t, e) {
					r = e
				}))
			}, this.delete = function() {
				var e = arguments.length > 0;
				return new Oo((function(n, r) {
					if (e) throw new Hr.InvalidArgument("Arguments not allowed in db.delete()");

					function o() {
						O.close();
						var e = d.deleteDatabase(t);
						e.onsuccess = qo((function() {
							P || oi.dbnames.delete(t).catch(zr), n()
						})), e.onerror = _i(r), e.onblocked = Y
					}
					y ? S.then(o) : o()
				}))
			}, this.backendDB = function() {
				return g
			}, this.isOpen = function() {
				return null !== g
			}, this.hasBeenClosed = function() {
				return v && v instanceof Hr.DatabaseClosed
			}, this.hasFailed = function() {
				return null !== v
			}, this.dynamicallyOpened = function() {
				return x
			}, this.name = t, nr(this, {
				tables: {
					get: function() {
						return Qn(_).map((function(t) {
							return _[t]
						}))
					}
				}
			}), this.on = ri(this, "populate", "blocked", "versionchange", {
				ready: [Jr, zr]
			}), this.on.ready.subscribe = lr(this.on.ready.subscribe, (function(t) {
				return function(e, n) {
					fi.vip((function() {
						b ? (v || Oo.resolve().then(e), n && t(e)) : w ? (w.push(e), n && t(e)) : (t(e), n || t((function t() {
							O.on.ready.unsubscribe(e), O.on.ready.unsubscribe(t)
						})))
					}))
				}
			})), this.transaction = function() {
				var t = D.apply(this, arguments);
				return this._transaction.apply(this, t)
			}, this._transaction = function(t, e, n) {
				var r = yo.trans;
				r && r.db === O && -1 === t.indexOf("!") || (r = null);
				var o = -1 !== t.indexOf("?");
				t = t.replace("!", "").replace("?", "");
				try {
					var i = e.map((function(t) {
						var e = t instanceof R ? t.name : t;
						if ("string" != typeof e) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return e
					}));
					if ("r" == t || "readonly" == t) t = "readonly";
					else {
						if ("rw" != t && t != E) throw new Hr.InvalidArgument("Invalid transaction mode: " + t);
						t = E
					}
					if (r) {
						if ("readonly" === r.mode && t === E) {
							if (!o) throw new Hr.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
							r = null
						}
						r && i.forEach((function(t) {
							if (r && -1 === r.storeNames.indexOf(t)) {
								if (!o) throw new Hr.SubTransaction("Table " + t + " not included in parent transaction.");
								r = null
							}
						})), o && r && !r.active && (r = null)
					}
				} catch (t) {
					return r ? r._promise(null, (function(e, n) {
						n(t)
					})) : ni(t)
				}
				return r ? r._promise(t, a, "lock") : yo.trans ? Jo(yo.transless, (function() {
					return O._whenReady(a)
				})) : O._whenReady(a);

				function a() {
					return Oo.resolve().then((function() {
						var e, o = yo.transless || yo,
							a = O._createTransaction(t, i, f, r),
							s = {
								trans: a,
								transless: o
							};
						r ? a.idbtrans = r.idbtrans : a.create(), n.constructor === ao && Wo();
						var c = Oo.follow((function() {
							if (e = n.call(a, a))
								if (e.constructor === io) {
									var t = Go.bind(null, null);
									e.then(t, t)
								} else "function" == typeof e.next && "function" == typeof e.throw && (e = wi(e))
						}), s);
						return (e && "function" == typeof e.then ? Oo.resolve(e).then((function(t) {
							return a.active ? t : ni(new Hr.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
						})) : c.then((function() {
							return e
						}))).then((function(t) {
							return r && a._resolve(), a._completion.then((function() {
								return t
							}))
						})).catch((function(t) {
							return a._reject(t), ni(t)
						}))
					}))
				}
			}, this.table = function(t) {
				if (!er(_, t)) throw new Hr.InvalidTable("Table " + t + " does not exist");
				return _[t]
			}, nr(R.prototype, {
				_trans: function(t, e, n) {
					var r = this._tx || yo.trans;
					return r && r.db === O ? r === yo.trans ? r._promise(t, e, n) : zo((function() {
						return r._promise(t, e, n)
					}), {
						trans: r,
						transless: yo.transless || yo
					}) : function t(e, n, r) {
						if (b || yo.letThrough) {
							var o = O._createTransaction(e, n, f);
							try {
								o.create()
							} catch (t) {
								return ni(t)
							}
							return o._promise(e, (function(t, e) {
								return zo((function() {
									return yo.trans = o, r(t, e, o)
								}))
							})).then((function(t) {
								return o._completion.then((function() {
									return t
								}))
							}))
						}
						if (!y) {
							if (!u) return ni(new Hr.DatabaseClosed);
							O.open().catch(zr)
						}
						return S.then((function() {
							return t(e, n, r)
						}))
					}(t, [this.name], e)
				},
				_idbstore: function(t, e, n) {
					var r = this.name;
					return this._trans(t, (function(t, n, o) {
						if (-1 === o.storeNames.indexOf(r)) throw new Hr.NotFound("Table" + r + " not part of transaction");
						return e(t, n, o.idbtrans.objectStore(r), o)
					}), n)
				},
				get: function(t, e) {
					if (t && t.constructor === Object) return this.where(t).first(e);
					var n = this;
					return this._idbstore("readonly", (function(e, r, o) {
						var i = o.get(t);
						i.onerror = _i(r), i.onsuccess = qo((function() {
							e(n.hook.reading.fire(i.result))
						}), r)
					})).then(e)
				},
				where: function(t) {
					if ("string" == typeof t) return new q(this, t);
					if (Zn(t)) return new q(this, "[" + t.join("+") + "]");
					var e = Qn(t);
					if (1 === e.length) return this.where(e[0]).equals(t[e[0]]);
					var n = this.schema.indexes.concat(this.schema.primKey).filter((function(t) {
						return t.compound && e.every((function(e) {
							return t.keyPath.indexOf(e) >= 0
						})) && t.keyPath.every((function(t) {
							return e.indexOf(t) >= 0
						}))
					}))[0];
					if (n && ai !== ii) return this.where(n.name).equals(n.keyPath.map((function(e) {
						return t[e]
					})));
					n || console.warn("The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a compound index [" + e.join("+") + "]");
					var r = this.schema.idxByName,
						o = e.reduce((function(e, n) {
							return [e[0] || r[n], e[0] || !r[n] ? Q(e[1], (function(e) {
								return "" + mr(e, n) == "" + t[n]
							})) : e[1]]
						}), [null, null]),
						i = o[0];
					return i ? this.where(i.name).equals(t[i.keyPath]).filter(o[1]) : n ? this.filter(o[1]) : this.where(e).equals("")
				},
				count: function(t) {
					return this.toCollection().count(t)
				},
				offset: function(t) {
					return this.toCollection().offset(t)
				},
				limit: function(t) {
					return this.toCollection().limit(t)
				},
				reverse: function() {
					return this.toCollection().reverse()
				},
				filter: function(t) {
					return this.toCollection().and(t)
				},
				each: function(t) {
					return this.toCollection().each(t)
				},
				toArray: function(t) {
					return this.toCollection().toArray(t)
				},
				orderBy: function(t) {
					return new j(new q(this, Zn(t) ? "[" + t.join("+") + "]" : t))
				},
				toCollection: function() {
					return new j(new q(this))
				},
				mapToClass: function(t, e) {
					this.schema.mappedClass = t;
					var n = Object.create(t.prototype);
					e && hi(n, e), this.schema.instanceTemplate = n;
					var r = function(e) {
						if (!e) return e;
						var n = Object.create(t.prototype);
						for (var r in e)
							if (er(e, r)) try {
								n[r] = e[r]
							} catch (t) {}
						return n
					};
					return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = r, this.hook("reading", r), t
				},
				defineClass: function(t) {
					return this.mapToClass(fi.defineClass(t), t)
				},
				bulkDelete: function(t) {
					return this.hook.deleting.fire === zr ? this._idbstore(E, (function(e, n, r, o) {
						e(L(r, o, t, !1, zr))
					})) : this.where(":id").anyOf(t).delete().then((function() {}))
				},
				bulkPut: function(t, e) {
					var n = this;
					return this._idbstore(E, (function(r, o, i) {
						if (!i.keyPath && !n.schema.primKey.auto && !e) throw new Hr.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
						if (i.keyPath && e) throw new Hr.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
						if (e && e.length !== t.length) throw new Hr.InvalidArgument("Arguments objects and keys must have the same length");
						if (0 === t.length) return r();
						var a, s, c = function(t) {
								0 === l.length ? r(t) : o(new jr(n.name + ".bulkPut(): " + l.length + " of " + u + " operations failed", l))
							},
							l = [],
							u = t.length,
							d = n;
						if (n.hook.creating.fire === zr && n.hook.updating.fire === zr) {
							s = I(l);
							for (var p = 0, f = t.length; p < f; ++p)(a = e ? i.put(t[p], e[p]) : i.put(t[p])).onerror = s;
							a.onerror = I(l, c), a.onsuccess = gi(c)
						} else {
							var h = e || i.keyPath && t.map((function(t) {
									return mr(t, i.keyPath)
								})),
								m = h && pr(h, (function(e, n) {
									return null != e && [e, t[n]]
								}));
							(h ? d.where(":id").anyOf(h.filter((function(t) {
								return null != t
							}))).modify((function() {
								this.value = m[this.primKey], m[this.primKey] = null
							})).catch(qr, (function(t) {
								l = t.failures
							})).then((function() {
								for (var n = [], r = e && [], o = h.length - 1; o >= 0; --o) {
									var i = h[o];
									(null == i || m[i]) && (n.push(t[o]), e && r.push(i), null != i && (m[i] = null))
								}
								return n.reverse(), e && r.reverse(), d.bulkAdd(n, r)
							})).then((function(t) {
								var e = h[h.length - 1];
								return null != e ? e : t
							})) : d.bulkAdd(t)).then(c).catch(jr, (function(t) {
								l = l.concat(t.failures), c()
							})).catch(o)
						}
					}), "locked")
				},
				bulkAdd: function(t, e) {
					var n = this,
						r = this.hook.creating.fire;
					return this._idbstore(E, (function(o, i, a, s) {
						if (!a.keyPath && !n.schema.primKey.auto && !e) throw new Hr.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
						if (a.keyPath && e) throw new Hr.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
						if (e && e.length !== t.length) throw new Hr.InvalidArgument("Arguments objects and keys must have the same length");
						if (0 === t.length) return o();

						function c(t) {
							0 === p.length ? o(t) : i(new jr(n.name + ".bulkAdd(): " + p.length + " of " + f + " operations failed", p))
						}
						var l, u, d, p = [],
							f = t.length;
						if (r !== zr) {
							var h, m = a.keyPath;
							u = I(p, null, !0), d = mi(null), hr((function() {
								for (var n = 0, o = t.length; n < o; ++n) {
									h = {
										onerror: null,
										onsuccess: null
									};
									var i = e && e[n],
										c = t[n],
										p = e ? i : m ? mr(c, m) : void 0,
										f = r.call(h, p, c, s);
									null == p && null != f && (m ? _r(c = br(c), m, f) : i = f), (l = null != i ? a.add(c, i) : a.add(c))._hookCtx = h, n < o - 1 && (l.onerror = u, h.onsuccess && (l.onsuccess = d))
								}
							}), (function(t) {
								throw h.onerror && h.onerror(t), t
							})), l.onerror = I(p, c, !0), l.onsuccess = mi(c)
						} else {
							u = I(p);
							for (var _ = 0, g = t.length; _ < g; ++_)(l = e ? a.add(t[_], e[_]) : a.add(t[_])).onerror = u;
							l.onerror = I(p, c), l.onsuccess = gi(c)
						}
					}))
				},
				add: function(t, e) {
					var n = this.hook.creating.fire;
					return this._idbstore(E, (function(r, o, i, a) {
						var s = {
							onsuccess: null,
							onerror: null
						};
						if (n !== zr) {
							var c = null != e ? e : i.keyPath ? mr(t, i.keyPath) : void 0,
								l = n.call(s, c, t, a);
							null == c && null != l && (i.keyPath ? _r(t, i.keyPath, l) : e = l)
						}
						try {
							var u = null != e ? i.add(t, e) : i.add(t);
							u._hookCtx = s, u.onerror = vi(o), u.onsuccess = mi((function(e) {
								var n = i.keyPath;
								n && _r(t, n, e), r(e)
							}))
						} catch (t) {
							throw s.onerror && s.onerror(t), t
						}
					}))
				},
				put: function(t, e) {
					var n = this,
						r = this.hook.creating.fire,
						o = this.hook.updating.fire;
					if (r !== zr || o !== zr) {
						var i = this.schema.primKey.keyPath,
							a = void 0 !== e ? e : i && mr(t, i);
						return null == a ? this.add(t) : (t = br(t), this._trans(E, (function() {
							return n.where(":id").equals(a).modify((function() {
								this.value = t
							})).then((function(r) {
								return 0 === r ? n.add(t, e) : a
							}))
						}), "locked"))
					}
					return this._idbstore(E, (function(n, r, o) {
						var i = void 0 !== e ? o.put(t, e) : o.put(t);
						i.onerror = _i(r), i.onsuccess = qo((function(e) {
							var r = o.keyPath;
							r && _r(t, r, e.target.result), n(i.result)
						}))
					}))
				},
				delete: function(t) {
					return this.hook.deleting.subscribers.length ? this.where(":id").equals(t).delete() : this._idbstore(E, (function(e, n, r) {
						var o = r.delete(t);
						o.onerror = _i(n), o.onsuccess = qo((function() {
							e(o.result)
						}))
					}))
				},
				clear: function() {
					return this.hook.deleting.subscribers.length ? this.toCollection().delete() : this._idbstore(E, (function(t, e, n) {
						var r = n.clear();
						r.onerror = _i(e), r.onsuccess = qo((function() {
							t(r.result)
						}))
					}))
				},
				update: function(t, e) {
					if ("object" != typeof e || Zn(e)) throw new Hr.InvalidArgument("Modifications must be an object.");
					if ("object" != typeof t || Zn(t)) return this.where(":id").equals(t).modify(e);
					Qn(e).forEach((function(n) {
						_r(t, n, e[n])
					}));
					var n = mr(t, this.schema.primKey.keyPath);
					return void 0 === n ? ni(new Hr.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(e)
				}
			}), nr(M.prototype, {
				_lock: function() {
					return ur(!yo.global), ++this._reculock, 1 !== this._reculock || yo.global || (yo.lockOwnerFor = this), this
				},
				_unlock: function() {
					if (ur(!yo.global), 0 == --this._reculock)
						for (yo.global || (yo.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
							var t = this._blockedFuncs.shift();
							try {
								Jo(t[1], t[0])
							} catch (t) {}
						}
					return this
				},
				_locked: function() {
					return this._reculock && yo.lockOwnerFor !== this
				},
				create: function(t) {
					var e = this;
					if (!this.mode) return this;
					if (ur(!this.idbtrans), !t && !g) switch (v && v.name) {
						case "DatabaseClosedError":
							throw new Hr.DatabaseClosed(v);
						case "MissingAPIError":
							throw new Hr.MissingAPI(v.message, v);
						default:
							throw new Hr.OpenFailed(v)
					}
					if (!this.active) throw new Hr.TransactionInactive;
					return ur(null === this._completion._state), (t = this.idbtrans = t || g.transaction(Oi(this.storeNames), this.mode)).onerror = qo((function(n) {
						yi(n), e._reject(t.error)
					})), t.onabort = qo((function(n) {
						yi(n), e.active && e._reject(new Hr.Abort(t.error)), e.active = !1, e.on("abort").fire(n)
					})), t.oncomplete = qo((function() {
						e.active = !1, e._resolve()
					})), this
				},
				_promise: function(t, e, n) {
					var r = this;
					if (t === E && this.mode !== E) return ni(new Hr.ReadOnly("Transaction is readonly"));
					if (!this.active) return ni(new Hr.TransactionInactive);
					if (this._locked()) return new Oo((function(o, i) {
						r._blockedFuncs.push([function() {
							r._promise(t, e, n).then(o, i)
						}, yo])
					}));
					if (n) return zo((function() {
						var t = new Oo((function(t, n) {
							r._lock();
							var o = e(t, n, r);
							o && o.then && o.then(t, n)
						}));
						return t.finally((function() {
							return r._unlock()
						})), t._lib = !0, t
					}));
					var o = new Oo((function(t, n) {
						var o = e(t, n, r);
						o && o.then && o.then(t, n)
					}));
					return o._lib = !0, o
				},
				_root: function() {
					return this.parent ? this.parent._root() : this
				},
				waitFor: function(t) {
					var e = this._root();
					if (t = Oo.resolve(t), e._waitingFor) e._waitingFor = e._waitingFor.then((function() {
						return t
					}));
					else {
						e._waitingFor = t, e._waitingQueue = [];
						var n = e.idbtrans.objectStore(e.storeNames[0]);
						! function t() {
							for (++e._spinCount; e._waitingQueue.length;) e._waitingQueue.shift()();
							e._waitingFor && (n.get(-1 / 0).onsuccess = t)
						}()
					}
					var r = e._waitingFor;
					return new Oo((function(n, o) {
						t.then((function(t) {
							return e._waitingQueue.push(qo(n.bind(null, t)))
						}), (function(t) {
							return e._waitingQueue.push(qo(o.bind(null, t)))
						})).finally((function() {
							e._waitingFor === r && (e._waitingFor = null)
						}))
					}))
				},
				abort: function() {
					this.active && this._reject(new Hr.Abort), this.active = !1
				},
				tables: {
					get: (i = "Transaction.tables", a = function() {
						return _
					}, function() {
						return console.warn(i + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + Dr(Ar(), 1)), a.apply(this, arguments)
					})
				},
				table: function(t) {
					return new R(t, O.table(t).schema, this)
				}
			}), nr(q.prototype, (function() {
				function t(t, e, n) {
					var r = t instanceof q ? new j(t) : t;
					return r._ctx.error = n ? new n(e) : new TypeError(e), r
				}

				function e(t) {
					return new j(t, (function() {
						return p.only("")
					})).limit(0)
				}

				function n(t, e, n, r, o, i) {
					for (var a = Math.min(t.length, r.length), s = -1, c = 0; c < a; ++c) {
						var l = e[c];
						if (l !== r[c]) return o(t[c], n[c]) < 0 ? t.substr(0, c) + n[c] + n.substr(c + 1) : o(t[c], r[c]) < 0 ? t.substr(0, c) + r[c] + n.substr(c + 1) : s >= 0 ? t.substr(0, s) + e[s] + n.substr(s + 1) : null;
						o(t[c], l) < 0 && (s = c)
					}
					return a < r.length && "next" === i ? t + n.substr(t.length) : a < t.length && "prev" === i ? t.substr(0, n.length) : s < 0 ? null : t.substr(0, s) + r[s] + n.substr(s + 1)
				}

				function r(e, r, o, i) {
					var a, s, c, l, u, d, f, h = o.length;
					if (!o.every((function(t) {
							return "string" == typeof t
						}))) return t(e, "String expected.");

					function m(t) {
						a = function(t) {
							return "next" === t ? function(t) {
								return t.toUpperCase()
							} : function(t) {
								return t.toLowerCase()
							}
						}(t), s = function(t) {
							return "next" === t ? function(t) {
								return t.toLowerCase()
							} : function(t) {
								return t.toUpperCase()
							}
						}(t), c = "next" === t ? K : $;
						var e = o.map((function(t) {
							return {
								lower: s(t),
								upper: a(t)
							}
						})).sort((function(t, e) {
							return c(t.lower, e.lower)
						}));
						l = e.map((function(t) {
							return t.upper
						})), u = e.map((function(t) {
							return t.lower
						})), d = t, f = "next" === t ? "" : i
					}
					m("next");
					var _ = new j(e, (function() {
						return p.bound(l[0], u[h - 1] + i)
					}));
					_._ondirectionchange = function(t) {
						m(t)
					};
					var g = 0;
					return _._addAlgorithm((function(t, e, o) {
						var i = t.key;
						if ("string" != typeof i) return !1;
						var a = s(i);
						if (r(a, u, g)) return !0;
						for (var p = null, m = g; m < h; ++m) {
							var _ = n(i, a, l[m], u[m], c, d);
							null === _ && null === p ? g = m + 1 : (null === p || c(p, _) > 0) && (p = _)
						}
						return e(null !== p ? function() {
							t.continue(p + f)
						} : o), !1
					})), _
				}
				return {
					between: function(n, r, o, i) {
						o = !1 !== o, i = !0 === i;
						try {
							return V(n, r) > 0 || 0 === V(n, r) && (o || i) && (!o || !i) ? e(this) : new j(this, (function() {
								return p.bound(n, r, !o, !i)
							}))
						} catch (e) {
							return t(this, si)
						}
					},
					equals: function(t) {
						return new j(this, (function() {
							return p.only(t)
						}))
					},
					above: function(t) {
						return new j(this, (function() {
							return p.lowerBound(t, !0)
						}))
					},
					aboveOrEqual: function(t) {
						return new j(this, (function() {
							return p.lowerBound(t)
						}))
					},
					below: function(t) {
						return new j(this, (function() {
							return p.upperBound(t, !0)
						}))
					},
					belowOrEqual: function(t) {
						return new j(this, (function() {
							return p.upperBound(t)
						}))
					},
					startsWith: function(e) {
						return "string" != typeof e ? t(this, "String expected.") : this.between(e, e + ii, !0, !0)
					},
					startsWithIgnoreCase: function(t) {
						return "" === t ? this.startsWith(t) : r(this, (function(t, e) {
							return 0 === t.indexOf(e[0])
						}), [t], ii)
					},
					equalsIgnoreCase: function(t) {
						return r(this, (function(t, e) {
							return t === e[0]
						}), [t], "")
					},
					anyOfIgnoreCase: function() {
						var t = xr.apply(Cr, arguments);
						return 0 === t.length ? e(this) : r(this, (function(t, e) {
							return -1 !== e.indexOf(t)
						}), t, "")
					},
					startsWithAnyOfIgnoreCase: function() {
						var t = xr.apply(Cr, arguments);
						return 0 === t.length ? e(this) : r(this, (function(t, e) {
							return e.some((function(e) {
								return 0 === t.indexOf(e)
							}))
						}), t, ii)
					},
					anyOf: function() {
						var n = xr.apply(Cr, arguments),
							r = W;
						try {
							n.sort(r)
						} catch (e) {
							return t(this, si)
						}
						if (0 === n.length) return e(this);
						var o = new j(this, (function() {
							return p.bound(n[0], n[n.length - 1])
						}));
						o._ondirectionchange = function(t) {
							r = "next" === t ? W : G, n.sort(r)
						};
						var i = 0;
						return o._addAlgorithm((function(t, e, o) {
							for (var a = t.key; r(a, n[i]) > 0;)
								if (++i === n.length) return e(o), !1;
							return 0 === r(a, n[i]) || (e((function() {
								t.continue(n[i])
							})), !1)
						})), o
					},
					notEqual: function(t) {
						return this.inAnyRange([
							[-1 / 0, t],
							[t, ai]
						], {
							includeLowers: !1,
							includeUppers: !1
						})
					},
					noneOf: function() {
						var e = xr.apply(Cr, arguments);
						if (0 === e.length) return new j(this);
						try {
							e.sort(W)
						} catch (e) {
							return t(this, si)
						}
						var n = e.reduce((function(t, e) {
							return t ? t.concat([
								[t[t.length - 1][1], e]
							]) : [
								[-1 / 0, e]
							]
						}), null);
						return n.push([e[e.length - 1], ai]), this.inAnyRange(n, {
							includeLowers: !1,
							includeUppers: !1
						})
					},
					inAnyRange: function(n, r) {
						if (0 === n.length) return e(this);
						if (!n.every((function(t) {
								return void 0 !== t[0] && void 0 !== t[1] && W(t[0], t[1]) <= 0
							}))) return t(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Hr.InvalidArgument);
						var o = !r || !1 !== r.includeLowers,
							i = r && !0 === r.includeUppers;
						var a, s = W;

						function c(t, e) {
							return s(t[0], e[0])
						}
						try {
							(a = n.reduce((function(t, e) {
								for (var n = 0, r = t.length; n < r; ++n) {
									var o = t[n];
									if (V(e[0], o[1]) < 0 && V(e[1], o[0]) > 0) {
										o[0] = (i = o[0], a = e[0], V(i, a) < 0 ? i : a), o[1] = z(o[1], e[1]);
										break
									}
								}
								var i, a;
								return n === r && t.push(e), t
							}), [])).sort(c)
						} catch (e) {
							return t(this, si)
						}
						var l = 0,
							u = i ? function(t) {
								return W(t, a[l][1]) > 0
							} : function(t) {
								return W(t, a[l][1]) >= 0
							},
							d = o ? function(t) {
								return G(t, a[l][0]) > 0
							} : function(t) {
								return G(t, a[l][0]) >= 0
							};
						var f = u,
							h = new j(this, (function() {
								return p.bound(a[0][0], a[a.length - 1][1], !o, !i)
							}));
						return h._ondirectionchange = function(t) {
							"next" === t ? (f = u, s = W) : (f = d, s = G), a.sort(c)
						}, h._addAlgorithm((function(t, e, n) {
							for (var r = t.key; f(r);)
								if (++l === a.length) return e(n), !1;
							return !! function(t) {
								return !u(t) && !d(t)
							}(r) || (0 === V(r, a[l][1]) || 0 === V(r, a[l][0]) || e((function() {
								s === W ? t.continue(a[l][0]) : t.continue(a[l][1])
							})), !1)
						})), h
					},
					startsWithAnyOf: function() {
						var n = xr.apply(Cr, arguments);
						return n.every((function(t) {
							return "string" == typeof t
						})) ? 0 === n.length ? e(this) : this.inAnyRange(n.map((function(t) {
							return [t, t + ii]
						}))) : t(this, "startsWithAnyOf() only works with strings")
					}
				}
			})), nr(j.prototype, (function() {
				function t(t, e) {
					t.filter = Q(t.filter, e)
				}

				function e(t, e, n) {
					var r = t.replayFilter;
					t.replayFilter = r ? function() {
						return Q(r(), e())
					} : e, t.justLimit = n && !r
				}

				function n(t, e) {
					if (t.isPrimKey) return e;
					var n = t.table.schema.idxByName[t.index];
					if (!n) throw new Hr.Schema("KeyPath " + t.index + " on object store " + e.name + " is not indexed");
					return e.index(n.name)
				}

				function r(t, e) {
					var r = n(t, e);
					return t.keysOnly && "openKeyCursor" in r ? r.openKeyCursor(t.range || null, t.dir + t.unique) : r.openCursor(t.range || null, t.dir + t.unique)
				}

				function i(t, e, n, o, i) {
					var a = t.replayFilter ? Q(t.filter, t.replayFilter()) : t.filter;
					t.or ? function() {
						var s = {},
							c = 0;

						function l() {
							2 == ++c && n()
						}

						function u(t, n, r) {
							if (!a || a(n, r, l, o)) {
								var i = n.primaryKey,
									c = "" + i;
								"[object ArrayBuffer]" === c && (c = "" + new Uint8Array(i)), er(s, c) || (s[c] = !0, e(t, n, r))
							}
						}
						t.or._iterate(u, l, o, i), U(r(t, i), t.algorithm, u, l, o, !t.keysOnly && t.valueMapper)
					}() : U(r(t, i), Q(t.algorithm, a), e, n, o, !t.keysOnly && t.valueMapper)
				}
				return {
					_read: function(t, e) {
						var n = this._ctx;
						return n.error ? n.table._trans(null, ni.bind(null, n.error)) : n.table._idbstore("readonly", t).then(e)
					},
					_write: function(t) {
						var e = this._ctx;
						return e.error ? e.table._trans(null, ni.bind(null, e.error)) : e.table._idbstore(E, t, "locked")
					},
					_addAlgorithm: function(t) {
						var e = this._ctx;
						e.algorithm = Q(e.algorithm, t)
					},
					_iterate: function(t, e, n, r) {
						return i(this._ctx, t, e, n, r)
					},
					clone: function(t) {
						var e = Object.create(this.constructor.prototype),
							n = Object.create(this._ctx);
						return t && Jn(n, t), e._ctx = n, e
					},
					raw: function() {
						return this._ctx.valueMapper = null, this
					},
					each: function(t) {
						var e = this._ctx;
						return this._read((function(n, r, o) {
							i(e, t, n, r, o)
						}))
					},
					count: function(t) {
						var e = this._ctx;
						if (B(e, !0)) return this._read((function(t, r, o) {
							var i = n(e, o),
								a = e.range ? i.count(e.range) : i.count();
							a.onerror = _i(r), a.onsuccess = function(n) {
								t(Math.min(n.target.result, e.limit))
							}
						}), t);
						var r = 0;
						return this._read((function(t, n, o) {
							i(e, (function() {
								return ++r, !1
							}), (function() {
								t(r)
							}), n, o)
						}), t)
					},
					sortBy: function(t, e) {
						var n = t.split(".").reverse(),
							r = n[0],
							o = n.length - 1;

						function i(t, e) {
							return e ? i(t[n[e]], e - 1) : t[r]
						}
						var a = "next" === this._ctx.dir ? 1 : -1;

						function s(t, e) {
							var n = i(t, o),
								r = i(e, o);
							return n < r ? -a : n > r ? a : 0
						}
						return this.toArray((function(t) {
							return t.sort(s)
						})).then(e)
					},
					toArray: function(t) {
						var e = this._ctx;
						return this._read((function(t, r, a) {
							if (o && "next" === e.dir && B(e, !0) && e.limit > 0) {
								var s = e.table.hook.reading.fire,
									c = n(e, a),
									l = e.limit < 1 / 0 ? c.getAll(e.range, e.limit) : c.getAll(e.range);
								l.onerror = _i(r), l.onsuccess = gi(s === Wr ? t : function(e) {
									try {
										t(e.map(s))
									} catch (t) {
										r(t)
									}
								})
							} else {
								var u = [];
								i(e, (function(t) {
									u.push(t)
								}), (function() {
									t(u)
								}), r, a)
							}
						}), t)
					},
					offset: function(t) {
						var n = this._ctx;
						return t <= 0 || (n.offset += t, B(n) ? e(n, (function() {
							var e = t;
							return function(t, n) {
								return 0 === e || (1 === e ? (--e, !1) : (n((function() {
									t.advance(e), e = 0
								})), !1))
							}
						})) : e(n, (function() {
							var e = t;
							return function() {
								return --e < 0
							}
						}))), this
					},
					limit: function(t) {
						return this._ctx.limit = Math.min(this._ctx.limit, t), e(this._ctx, (function() {
							var e = t;
							return function(t, n, r) {
								return --e <= 0 && n(r), e >= 0
							}
						}), !0), this
					},
					until: function(e, n) {
						return t(this._ctx, (function(t, r, o) {
							return !e(t.value) || (r(o), n)
						})), this
					},
					first: function(t) {
						return this.limit(1).toArray((function(t) {
							return t[0]
						})).then(t)
					},
					last: function(t) {
						return this.reverse().first(t)
					},
					filter: function(e) {
						return t(this._ctx, (function(t) {
								return e(t.value)
							})),
							function(t, e) {
								t.isMatch = Q(t.isMatch, e)
							}(this._ctx, e), this
					},
					and: function(t) {
						return this.filter(t)
					},
					or: function(t) {
						return new q(this._ctx.table, t, this)
					},
					reverse: function() {
						return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
					},
					desc: function() {
						return this.reverse()
					},
					eachKey: function(t) {
						var e = this._ctx;
						return e.keysOnly = !e.isMatch, this.each((function(e, n) {
							t(n.key, n)
						}))
					},
					eachUniqueKey: function(t) {
						return this._ctx.unique = "unique", this.eachKey(t)
					},
					eachPrimaryKey: function(t) {
						var e = this._ctx;
						return e.keysOnly = !e.isMatch, this.each((function(e, n) {
							t(n.primaryKey, n)
						}))
					},
					keys: function(t) {
						var e = this._ctx;
						e.keysOnly = !e.isMatch;
						var n = [];
						return this.each((function(t, e) {
							n.push(e.key)
						})).then((function() {
							return n
						})).then(t)
					},
					primaryKeys: function(t) {
						var e = this._ctx;
						if (o && "next" === e.dir && B(e, !0) && e.limit > 0) return this._read((function(t, r, o) {
							var i = n(e, o),
								a = e.limit < 1 / 0 ? i.getAllKeys(e.range, e.limit) : i.getAllKeys(e.range);
							a.onerror = _i(r), a.onsuccess = gi(t)
						})).then(t);
						e.keysOnly = !e.isMatch;
						var r = [];
						return this.each((function(t, e) {
							r.push(e.primaryKey)
						})).then((function() {
							return r
						})).then(t)
					},
					uniqueKeys: function(t) {
						return this._ctx.unique = "unique", this.keys(t)
					},
					firstKey: function(t) {
						return this.limit(1).keys((function(t) {
							return t[0]
						})).then(t)
					},
					lastKey: function(t) {
						return this.reverse().firstKey(t)
					},
					distinct: function() {
						var e = this._ctx,
							n = e.index && e.table.schema.idxByName[e.index];
						if (!n || !n.multi) return this;
						var r = {};
						return t(this._ctx, (function(t) {
							var e = t.primaryKey.toString(),
								n = er(r, e);
							return r[e] = !0, !n
						})), this
					},
					modify: function(t) {
						var e = this,
							n = this._ctx.table.hook,
							r = n.updating.fire,
							o = n.deleting.fire;
						return this._write((function(n, i, a, s) {
							var c;
							if ("function" == typeof t) c = r === zr && o === zr ? t : function(e) {
								var n = br(e);
								if (!1 === t.call(this, e, this)) return !1;
								if (er(this, "value")) {
									var i = Er(n, this.value),
										a = r.call(this, i, this.primKey, n, s);
									a && (e = this.value, Qn(a).forEach((function(t) {
										_r(e, t, a[t])
									})))
								} else o.call(this, this.primKey, e, s)
							};
							else if (r === zr) {
								var l = Qn(t),
									u = l.length;
								c = function(e) {
									for (var n = !1, r = 0; r < u; ++r) {
										var o = l[r],
											i = t[o];
										mr(e, o) !== i && (_r(e, o, i), n = !0)
									}
									return n
								}
							} else {
								var d = t;
								t = gr(d), c = function(e) {
									var n = !1,
										o = r.call(this, t, this.primKey, br(e), s);
									return o && Jn(t, o), Qn(t).forEach((function(r) {
										var o = t[r];
										mr(e, r) !== o && (_r(e, r, o), n = !0)
									})), o && (t = gr(d)), n
								}
							}
							var p = 0,
								f = 0,
								h = !1,
								m = [],
								_ = [],
								g = null;

							function v(t) {
								return t && (m.push(t), _.push(g)), i(new qr("Error modifying one or more objects", m, f, _))
							}

							function y() {
								h && f + m.length === p && (m.length > 0 ? v() : n(f))
							}
							e.clone().raw()._iterate((function(t, e) {
								g = e.primaryKey;
								var n = {
									primKey: e.primaryKey,
									value: t,
									onsuccess: null,
									onerror: null
								};

								function r(t) {
									return m.push(t), _.push(n.primKey), y(), !0
								}
								if (!1 !== c.call(n, t, n)) {
									var o = !er(n, "value");
									++p, hr((function() {
										var t = o ? e.delete() : e.update(n.value);
										t._hookCtx = n, t.onerror = vi(r), t.onsuccess = mi((function() {
											++f, y()
										}))
									}), r)
								} else n.onsuccess && n.onsuccess(n.value)
							}), (function() {
								h = !0, y()
							}), v, a)
						}))
					},
					delete: function() {
						var t = this,
							e = this._ctx,
							n = e.range,
							r = e.table.hook.deleting.fire,
							o = r !== zr;
						if (!o && B(e) && (e.isPrimKey && !di || !n)) return this._write((function(t, e, r) {
							var o = _i(e),
								i = n ? r.count(n) : r.count();
							i.onerror = o, i.onsuccess = function() {
								var a = i.result;
								hr((function() {
									var e = n ? r.delete(n) : r.clear();
									e.onerror = o, e.onsuccess = function() {
										return t(a)
									}
								}), (function(t) {
									return e(t)
								}))
							}
						}));
						var i = o ? 2e3 : 1e4;
						return this._write((function(n, a, s, c) {
							var l = 0,
								u = t.clone({
									keysOnly: !e.isMatch && !o
								}).distinct().limit(i).raw(),
								d = [],
								p = function() {
									return u.each(o ? function(t, e) {
										d.push([e.primaryKey, e.value])
									} : function(t, e) {
										d.push(e.primaryKey)
									}).then((function() {
										return o ? d.sort((function(t, e) {
											return W(t[0], e[0])
										})) : d.sort(W), L(s, c, d, o, r)
									})).then((function() {
										var t = d.length;
										return l += t, d = [], t < i ? l : p()
									}))
								};
							n(p())
						}))
					}
				}
			})), Jn(this, {
				Collection: j,
				Table: R,
				Transaction: M,
				Version: k,
				WhereClause: q
			}), O.on("versionchange", (function(t) {
				t.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + O.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + O.name + "'. Closing db now to resume the delete request."), O.close()
			})), O.on("blocked", (function(t) {
				!t.newVersion || t.newVersion < t.oldVersion ? console.warn("Dexie.delete('" + O.name + "') was blocked") : console.warn("Upgrade '" + O.name + "' blocked by other connection holding version " + t.oldVersion / 10)
			})), l.forEach((function(t) {
				t(O)
			}))
		}

		function hi(t, e) {
			return Qn(e).forEach((function(n) {
				var r = function t(e) {
					if ("function" == typeof e) return new e;
					if (Zn(e)) return [t(e[0])];
					if (e && "object" == typeof e) {
						var n = {};
						return hi(n, e), n
					}
					return e
				}(e[n]);
				t[n] = r
			})), t
		}

		function mi(t) {
			return qo((function(e) {
				var n = e.target,
					r = n._hookCtx,
					o = r.value || n.result,
					i = r && r.onsuccess;
				i && i(o), t && t(o)
			}), t)
		}

		function _i(t) {
			return qo((function(e) {
				return yi(e), t(e.target.error), !1
			}))
		}

		function gi(t) {
			return qo((function(e) {
				t(e.target.result)
			}))
		}

		function vi(t) {
			return qo((function(e) {
				var n = e.target,
					r = n.error,
					o = n._hookCtx,
					i = o && o.onerror;
				return i && i(r), yi(e), t(r), !1
			}))
		}

		function yi(t) {
			t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault()
		}

		function wi(t) {
			var e = function(e) {
					return t.next(e)
				},
				n = o(e),
				r = o((function(e) {
					return t.throw(e)
				}));

			function o(t) {
				return function(e) {
					var o = t(e),
						i = o.value;
					return o.done ? i : i && "function" == typeof i.then ? i.then(n, r) : Zn(i) ? Oo.all(i).then(n, r) : n(i)
				}
			}
			return o(e)()
		}

		function bi(t, e, n, r, o, i, a) {
			this.name = t, this.keyPath = e, this.unique = n, this.multi = r, this.auto = o, this.compound = i, this.dotted = a;
			var s = "string" == typeof e ? e : e && "[" + [].join.call(e, "+") + "]";
			this.src = (n ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + s
		}

		function Ei(t, e, n, r) {
			this.name = t, this.primKey = e || new bi, this.indexes = n || [new bi], this.instanceTemplate = r, this.mappedClass = null, this.idxByName = pr(n, (function(t) {
				return [t.name, t]
			}))
		}

		function Oi(t) {
			return 1 === t.length ? t[0] : t
		}

		function Si(t) {
			var e = t && (t.getDatabaseNames || t.webkitGetDatabaseNames);
			return e && e.bind(t)
		}
		kr(Pr, pi), nr(fi, Vr), nr(fi, {
				delete: function(t) {
					var e = new fi(t),
						n = e.delete();
					return n.onblocked = function(t) {
						return e.on("blocked", t), this
					}, n
				},
				exists: function(t) {
					return new fi(t).open().then((function(t) {
						return t.close(), !0
					})).catch(fi.NoSuchDatabaseError, (function() {
						return !1
					}))
				},
				getDatabaseNames: function(t) {
					var e = Si(fi.dependencies.indexedDB);
					return e ? new Oo((function(t, n) {
						var r = e();
						r.onsuccess = function(e) {
							t(cr(e.target.result, 0))
						}, r.onerror = _i(n)
					})).then(t) : oi.dbnames.toCollection().primaryKeys(t)
				},
				defineClass: function() {
					return function(t) {
						t && Jn(this, t)
					}
				},
				applyStructure: hi,
				ignoreTransaction: function(t) {
					return yo.trans ? Jo(yo.transless, t) : t()
				},
				vip: function(t) {
					return zo((function() {
						return yo.letThrough = !0, t()
					}))
				},
				async: function(t) {
					return function() {
						try {
							var e = wi(t.apply(this, arguments));
							return e && "function" == typeof e.then ? e : Oo.resolve(e)
						} catch (t) {
							return ni(t)
						}
					}
				},
				spawn: function(t, e, n) {
					try {
						var r = wi(t.apply(n, e || []));
						return r && "function" == typeof r.then ? r : Oo.resolve(r)
					} catch (t) {
						return ni(t)
					}
				},
				currentTransaction: {
					get: function() {
						return yo.trans || null
					}
				},
				waitFor: function(t, e) {
					var n = Oo.resolve("function" == typeof t ? fi.ignoreTransaction(t) : t).timeout(e || 6e4);
					return yo.trans ? yo.trans.waitFor(n) : n
				},
				Promise: Oo,
				debug: {
					get: function() {
						return Pr
					},
					set: function(t) {
						kr(t, "dexie" === t ? function() {
							return !0
						} : pi)
					}
				},
				derive: ir,
				extend: Jn,
				props: nr,
				override: lr,
				Events: ri,
				getByKeyPath: mr,
				setByKeyPath: _r,
				delByKeyPath: function(t, e) {
					"string" == typeof e ? _r(t, e, void 0) : "length" in e && [].map.call(e, (function(e) {
						_r(t, e, void 0)
					}))
				},
				shallowClone: gr,
				deepClone: br,
				getObjectDiff: Er,
				asap: dr,
				maxKey: ai,
				minKey: -1 / 0,
				addons: [],
				connections: ci,
				MultiModifyError: Hr.Modify,
				errnames: Br,
				IndexSpec: bi,
				TableSchema: Ei,
				dependencies: function() {
					try {
						return {
							indexedDB: Yn.indexedDB || Yn.mozIndexedDB || Yn.webkitIndexedDB || Yn.msIndexedDB,
							IDBKeyRange: Yn.IDBKeyRange || Yn.webkitIDBKeyRange
						}
					} catch (t) {
						return {
							indexedDB: null,
							IDBKeyRange: null
						}
					}
				}(),
				semVer: "{version}",
				version: "{version}".split(".").map((function(t) {
					return parseInt(t)
				})).reduce((function(t, e, n) {
					return t + e / Math.pow(10, 2 * n)
				})),
				default: fi,
				Dexie: fi
			}), Oo.rejectionMapper = function(t, e) {
				if (!t || t instanceof Mr || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Ur[t.name]) return t;
				var n = new Ur[t.name](e || t.message, t);
				return "stack" in t && or(n, "stack", {
					get: function() {
						return this.inner.stack
					}
				}), n
			}, (oi = new fi("__dbnames")).version(1).stores({
				dbnames: "name"
			}),
			function() {
				try {
					void 0 !== typeof localStorage && void 0 !== Yn.document && (JSON.parse(localStorage.getItem("Dexie.DatabaseNames") || "[]").forEach((function(t) {
						return oi.dbnames.put({
							name: t
						}).catch(zr)
					})), localStorage.removeItem("Dexie.DatabaseNames"))
				} catch (t) {}
			}();
		var Ci = new fi("ddwcpos");
		Ci.version(1).stores((0, Lt.applyFilters)("ddwcpos_modify_database_tables", {
			temp: "id",
			outlet: "id",
			customers: "id, first_name, last_name, username, email, phone, display_name",
			orders: "id, order_type",
			cart: "id, active_cart",
			transactions: "id, date",
			discount: "id, cart_id",
			coupon: "id, cart_id",
			products: "product_id, type, barcode_init",
			taxes: "id",
			categories: "id",
			countries_and_states: "base_country",
			tables: "slug",
			settings: "id"
		})), (0, Lt.applyFilters)("ddwcpos_modify_database", Ci), Ci.temp.put({
			id: 0
		}).then((function() {
			return Ci.temp.get(0)
		})).then((function(t) {})).catch((function(t) {
			alert("Ooops: " + t)
		}));
		const xi = Ci;
		const Pi = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
					}
				}]
			},
			name: "redo",
			theme: "outlined"
		};
		var ki = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Pi
			}))
		};
		ki.displayName = "RedoOutlined";
		const Ti = n.forwardRef(ki);
		const Ni = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "swap",
			theme: "outlined"
		};
		var Ai = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Ni
			}))
		};
		Ai.displayName = "SwapOutlined";
		const Di = n.forwardRef(Ai);
		var Ri = function() {
				return "localhost" === location.hostname || "127.0.0.1" === location.hostname || navigator.onLine
			},
			Ii = function t(e, n) {
				n.cashier_id = ddwcposPOSObj.user.ID;
				var r = document.querySelector(".ddwcpos-progress-bar");
				return r && r.classList.contains("ddwcpos-progress-bar") && (r.style.display = "block"), new Promise((function(o, i) {
					Ri() ? fetch(e, {
						method: "POST",
						headers: new Headers({
							"Content-Type": "application/json",
							Accept: "application/json"
						}),
						body: JSON.stringify(n)
					}).then((function(t) {
						return t.json()
					})).then((function(i) {
						Object.keys(i).length > 0 && (!1 === i.success && 401 === i.status ? t(e, n).then((function(t) {
							o(t)
						})) : o(i)), r && r.classList.contains("ddwcpos-progress-bar") && (r.style.display = "none"), o(i)
					})).catch((function(t) {
						console.error(t), o([])
					})) : o([])
				}))
			},
			Li = function() {
				return function(t) {
					xi.table("settings").toArray().then((function(e) {
						var n = {
							id: 0,
							printer_width: ddwcposPOSObj.ddwcpos_configuration.printer_width,
							printer_height: ddwcposPOSObj.ddwcpos_configuration.printer_height,
							printer_margin: ddwcposPOSObj.ddwcpos_configuration.printer_margin,
							showOpenCashDrawerPopup: !0
						};
						e.length && (n = e[0]), n = (0, Lt.applyFilters)("ddwcpos_modify_settings", n, xi), t(function(t) {
							return {
								type: "SETTINGS",
								settings: t
							}
						}(n))
					}))
				}
			},
			Mi = function(t) {
				return function(e) {
					xi.table("settings").toArray().then((function(n) {
						n.length ? xi.table("settings").where("id").equals(n[0].id).modify(t).then((function(t) {
							e(Li())
						})) : xi.table("settings").put(t).then((function(t) {
							e(Li())
						}))
					}))
				}
			},
			qi = function(t) {
				return function() {
					return new Promise((function(e, n) {
						Ii(ddwcposPOSObj.API.SAVE_CASHIER_ENDPOINT, {
							cashier_data: t
						}).then((function(t) {
							t.success ? he.store.addNotification({
								title: (0, fe.__)("Success", "ddwc-multipos"),
								message: t.message,
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : he.store.addNotification({
								title: (0, fe.__)("Error", "ddwc-multipos"),
								message: t.message,
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						}))
					}))
				}
			},
			ji = function(t) {
				return {
					type: "OUTLET",
					outlet: t
				}
			},
			Bi = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(e) {
					return new Promise((function(n, r) {
						return xi.table("outlet").toArray().then((function(r) {
							if (t) {
								var o = ddwcposPOSObj.assignedOutlets,
									i = (o = o.filter((function(e) {
										return e.id == t
									}))).map((function(t) {
										return t.inventory_type || (t.inventory_type = ddwcposPOSObj.ddwcpos_configuration.inventory_type), t
									}))[0];
								return xi.table("outlet").put(i).then((function(t) {
									e(ji(i)), n(i)
								}))
							}
							r.length > 0 ? (e(ji(r[0])), n(r[0])) : (e(ji({})), n({}))
						}))
					}))
				}
			};

		function Fi(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Hi = function(t) {
			le(r, t);
			var n = Fi(r);

			function r(t) {
				var e;
				return ae(this, r), (e = n.call(this, t)).componentDidMount = function() {
					e.props.getSettings()
				}, e.handleChangeSettings = function(t, n) {
					var r = e.props.settings;
					r[n] = t.target.value, e.props.saveSettings(r)
				}, e.handleResetOutlet = function() {
					Ri() ? (he.store.addNotification({
						title: (0, fe.__)("Resetting", "ddwc-multipos"),
						message: (0, fe.__)("Resetting outlet data.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), e.props.setCurrentOutlet(e.props.outlet.id), localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(t) {
						xi.table("customers").clear().then((function(t) {
							xi.table("cart").clear().then((function(t) {
								xi.table("transactions").clear().then((function(t) {
									xi.table("discount").clear().then((function(t) {
										xi.table("coupon").clear().then((function(t) {
											xi.table("products").clear().then((function(t) {
												xi.table("taxes").clear().then((function(t) {
													xi.table("categories").clear().then((function(t) {
														xi.table("countries_and_states").clear().then((function(t) {
															xi.table("tables").clear().then((function(t) {
																xi.table("settings").clear().then((function(t) {
																	xi.table("orders").where("order_type").equals("online").delete().then((function(t) {
																		e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
																	}))
																}))
															}))
														}))
													}))
												}))
											}))
										}))
									}))
								}))
							}))
						}))
					})), (0, Lt.doAction)("ddwcpos_after_deleting_index_db", f(e))) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Resetting cannot be done in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleSwitchOutlet = function() {
					Ri() ? (he.store.addNotification({
						title: (0, fe.__)("Switching", "ddwc-multipos"),
						message: (0, fe.__)("Switching outlet...", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(t) {
						xi.table("outlet").clear().then((function(t) {
							xi.table("customers").clear().then((function(t) {
								xi.table("cart").clear().then((function(t) {
									xi.table("transactions").clear().then((function(t) {
										xi.table("discount").clear().then((function(t) {
											xi.table("coupon").clear().then((function(t) {
												xi.table("products").clear().then((function(t) {
													xi.table("taxes").clear().then((function(t) {
														xi.table("categories").clear().then((function(t) {
															xi.table("countries_and_states").clear().then((function(t) {
																xi.table("tables").clear().then((function(t) {
																	xi.table("settings").clear().then((function(t) {
																		xi.table("orders").where("order_type").equals("online").delete().then((function(t) {
																			e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
																		}))
																	}))
																}))
															}))
														}))
													}))
												}))
											}))
										}))
									}))
								}))
							}))
						}))
					})), (0, Lt.doAction)("ddwcpos_after_deleting_index_db", f(e))) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Switching outlet cannot be done in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.state = {
					page_width: "",
					page_height: "",
					page_margin: ""
				}, e
			}
			return ce(r, [{
				key: "render",
				value: function() {
					var t = this;
					return (0, e.createElement)("div", {
						className: "ddwcpos-account-settings-wrapper"
					}, (0, e.createElement)("h2", null, (0, fe.__)("Outlet Settings", "ddwc-multipos")), (0, e.createElement)("form", null, (0, e.createElement)("label", null, (0, fe.__)("Display Category Cards", "ddwc-multipos"), (0, e.createElement)("select", {
						value: this.props.settings.display_category,
						onChange: function(e) {
							return t.handleChangeSettings(e, "display_category")
						}
					}, (0, e.createElement)("option", {
						value: "enabled"
					}, (0, fe.__)("Enabled", "ddwc-multipos")), (0, e.createElement)("option", {
						value: "disabled"
					}, (0, fe.__)("Disabled", "ddwc-multipos")))), (0, e.createElement)("label", null, (0, fe.__)("Enable Sounds", "ddwc-multipos"), (0, e.createElement)("select", {
						value: this.props.settings.sounds,
						onChange: function(e) {
							return t.handleChangeSettings(e, "sounds")
						}
					}, (0, e.createElement)("option", {
						value: "enabled"
					}, (0, fe.__)("Enabled", "ddwc-multipos")), (0, e.createElement)("option", {
						value: "disabled"
					}, (0, fe.__)("Disabled", "ddwc-multipos")))), (0, e.createElement)("label", null, (0, fe.__)("Page Width (in mm)", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_width,
						onChange: function(e) {
							return t.handleChangeSettings(e, "printer_width")
						}
					})), (0, e.createElement)("label", null, (0, fe.__)("Page Height (in mm)", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_height,
						onChange: function(e) {
							return t.handleChangeSettings(e, "printer_height")
						}
					})), (0, e.createElement)("label", null, (0, fe.__)("Page Margin (in mm)", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_margin,
						onChange: function(e) {
							return t.handleChangeSettings(e, "printer_margin")
						}
					})), (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("Reset Outlet Data", "ddwc-multipos")), (0, e.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.handleResetOutlet
					}, (0, e.createElement)(Ti, null), (0, fe.__)("Reset", "ddwc-multipos"))), (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("Switch Outlet", "ddwc-multipos")), (0, e.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.handleSwitchOutlet
					}, (0, e.createElement)(Di, null), (0, fe.__)("Switch", "ddwc-multipos")))))
				}
			}]), r
		}(n.Component);
		const Ui = q((function(t) {
			return {
				settings: t.settings,
				outlet: t.outlet
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getSettings: Li,
				saveSettings: Mi,
				setCurrentOutlet: Bi
			}, t))
		}))(Hi);

		function Vi(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var zi = function(t) {
			le(i, t);
			var o = Vi(i);

			function i(t) {
				var e;
				return ae(this, i), (e = o.call(this, t)).handleLogout = function(t) {
					e.props.orders.sorder.filter((function(t) {
						return "offline" == t.order_type
					})).length ? (t.preventDefault(), he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("There are offline orders present in the POS, kindly sync them first.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})) : (confirm((0, fe.__)("Do you want to delete the outlet data from the browser? It will load the latest one when you login.", "ddwc-multipos")) && (localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(t) {
						xi.table("outlet").clear().then((function(t) {
							xi.table("customers").clear().then((function(t) {
								xi.table("cart").clear().then((function(t) {
									xi.table("transactions").clear().then((function(t) {
										xi.table("discount").clear().then((function(t) {
											xi.table("coupon").clear().then((function(t) {
												xi.table("products").clear().then((function(t) {
													xi.table("taxes").clear().then((function(t) {
														xi.table("categories").clear().then((function(t) {
															xi.table("countries_and_states").clear().then((function(t) {
																xi.table("tables").clear().then((function(t) {
																	xi.table("settings").clear().then((function(t) {
																		xi.table("orders").where("order_type").equals("online").delete()
																	}))
																}))
															}))
														}))
													}))
												}))
											}))
										}))
									}))
								}))
							}))
						}))
					})), (0, Lt.doAction)("ddwcpos_after_deleting_index_db", f(e))), (0, Lt.doAction)("ddwcpos_before_logout", f(e)))
				}, e.handleMenuCollapse = function() {
					var t = document.querySelector(".ddwcpos-menu-container"),
						e = document.querySelector(".ddwcpos-popup-overlay");
					t.classList.contains("ddwcpos-menu-open") ? (t.classList.remove("ddwcpos-menu-open"), e.classList.add("ddwcpos-hide")) : (t.classList.add("ddwcpos-menu-open"), e.classList.remove("ddwcpos-hide"))
				}, e
			}
			return ce(i, [{
				key: "getMenus",
				value: function() {
					var t = "ddwcpos-menu-card",
						n = "ddwcpos-menu-card",
						r = "ddwcpos-menu-card",
						o = "ddwcpos-menu-card",
						i = "ddwcpos-menu-card",
						a = "ddwcpos-menu-card",
						s = "ddwcpos-menu-card";
					if (null != this.props.page.name) switch (this.props.page.name) {
						case "Home":
						case "Category":
							t += " ddwcpos-menu-active";
							break;
						case "Cart":
							n += " ddwcpos-menu-active";
							break;
						case "Customers":
							r += " ddwcpos-menu-active";
							break;
						case "Statistics":
							o += " ddwcpos-menu-active";
							break;
						case "Orders":
							i += " ddwcpos-menu-active";
							break;
						case "Tables":
							a += " ddwcpos-menu-active";
							break;
						case "Settings":
							s += " ddwcpos-menu-active"
					}
					var c = "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint),
						l = [{
							id: "home",
							to: c,
							classname: t,
							icon_component: Pn,
							mode: "grocery",
							text: (0, fe.__)("Home", "ddwc-multipos")
						}, {
							id: "cart",
							to: "".concat(c, "/cart"),
							classname: n,
							icon_component: Nn,
							mode: "grocery",
							text: (0, fe.__)("Cart", "ddwc-multipos")
						}, {
							id: "customers",
							to: "".concat(c, "/customers"),
							classname: r,
							icon_component: Rn,
							mode: "grocery",
							text: (0, fe.__)("Customers", "ddwc-multipos")
						}, {
							id: "tables",
							to: "".concat(c, "/tables/all"),
							classname: a,
							icon_component_jsx: !0,
							icon_component: (0, e.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, e.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, e.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, e.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))),
							mode: "restaurant",
							text: (0, fe.__)("Tables", "ddwc-multipos")
						}, {
							id: "orders",
							to: "".concat(c, "/orders/online"),
							classname: i,
							icon_component: Mn,
							mode: "grocery",
							text: (0, fe.__)("Orders", "ddwc-multipos")
						}, {
							id: "statistics",
							to: "".concat(c, "/statistics"),
							classname: o,
							icon_component: Bn,
							mode: "grocery",
							text: (0, fe.__)("Statistics", "ddwc-multipos")
						}, {
							id: "settings",
							to: "".concat(c, "/settings"),
							classname: s,
							icon_component: Un,
							mode: "grocery",
							text: (0, fe.__)("Settings", "ddwc-multipos")
						}];
					return (0, Lt.applyFilters)("ddwcpos_menus_list", l, this)
				}
			}, {
				key: "render",
				value: function() {
					var t = this,
						o = this.getMenus().map((function(n) {
							if (("restaurant" == t.props.outlet.mode || "grocery" == t.props.outlet.mode && "grocery" == n.mode || (0, Lt.applyFilters)("ddwcpos_add_menu_with_outlet_mode", !1, n, t)) && ("cart" !== n.id || "cart" == n.id && window.screen.width < 768)) return (0, e.createElement)(be, {
								className: n.classname,
								key: n.to,
								to: n.to
							}, n.icon_component_jsx ? n.icon_component : r().createElement(n.icon_component), n.text)
						}));
					return (0, e.createElement)(n.Fragment, null, window.screen.width < 768 ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
						className: "ddwcpos-collapse-icon-wrapper"
					}, (0, e.createElement)("span", {
						className: "ddwcpos-collapse-icon",
						onClick: this.handleMenuCollapse
					}, (0, e.createElement)(Wn, null)))) : null, (0, e.createElement)("div", {
						className: "ddwcpos-popup-overlay ddwcpos-hide",
						onClick: this.handleMenuCollapse
					}), (0, e.createElement)("div", {
						className: "ddwcpos-menu-container"
					}, (0, e.createElement)("nav", null, (0, e.createElement)("div", {
						className: "ddwcpos-menu-logo"
					}, (0, e.createElement)("img", {
						alt: (0, fe.__)("POS Logo", "ddwc-multipos"),
						src: ddwcposPOSObj.ddwcpos_configuration.logo_url,
						width: "80",
						height: "80"
					})), o), (0, e.createElement)("nav", null, (0, e.createElement)("a", {
						className: "ddwcpos-menu-card ddwcpos-logout-menu",
						href: ddwcposPOSObj.logout_url,
						onClick: function(e) {
							return t.handleLogout(e)
						}
					}, (0, e.createElement)($n, null), (0, fe.__)("Logout", "ddwc-multipos")))))
				}
			}]), i
		}(n.Component);
		const Wi = q((function(t) {
			return {
				orders: t.orders
			}
		}), null)(zi);
		const Gi = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z"
					}
				}]
			},
			name: "wifi",
			theme: "outlined"
		};
		var Ki = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Gi
			}))
		};
		Ki.displayName = "WifiOutlined";
		const $i = n.forwardRef(Ki);
		const Qi = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"
					}
				}]
			},
			name: "sync",
			theme: "outlined"
		};
		var Zi = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Qi
			}))
		};
		Zi.displayName = "SyncOutlined";
		const Yi = n.forwardRef(Zi);
		const Ji = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"
					}
				}]
			},
			name: "edit",
			theme: "filled"
		};
		var Xi = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Ji
			}))
		};
		Xi.displayName = "EditFilled";
		const ta = n.forwardRef(Xi);
		const ea = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
					}
				}]
			},
			name: "user",
			theme: "outlined"
		};
		var na = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: ea
			}))
		};
		na.displayName = "UserOutlined";
		const ra = n.forwardRef(na);
		const oa = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "pause",
			theme: "outlined"
		};
		var ia = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: oa
			}))
		};
		ia.displayName = "PauseOutlined";
		const aa = n.forwardRef(ia);

		function sa(t) {
			return function(t) {
				if (Array.isArray(t)) return Ce(t)
			}(t) || function(t) {
				if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
			}(t) || xe(t) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		var ca = function(t) {
				return {
					type: "COUPON",
					coupon: t
				}
			},
			la = function() {
				return function(t) {
					ua().then((function(e) {
						t(ca(e))
					}))
				}
			},
			ua = function() {
				return new Promise((function(t, e) {
					return xi.table("coupon").toArray().then((function(e) {
						t(e)
					}))
				}))
			},
			da = function(t) {
				return function(e, n) {
					var r = n().cart.list[0].id;
					ua().then((function(n) {
						if (!(n.length > 0)) {
							var o = {
								id: r,
								cart_id: r,
								coupon: [t]
							};
							return xi.table("coupon").put(o).then((function(t) {
								he.store.addNotification({
									title: (0, fe.__)("Coupon Applied", "ddwc-multipos"),
									message: (0, fe.__)("Coupon is applied successfully in the cart.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								}), e(ca([o])), e(va())
							}))
						}
						if (0 == n[0].coupon.filter((function(e) {
								return t.code == e.code
							})).length) return n[0].coupon.push(t), xi.table("coupon").where("cart_id").equals(r).modify({
							coupon: n[0].coupon
						}).then((function(t) {
							t && (he.store.addNotification({
								title: (0, fe.__)("Coupon Applied", "ddwc-multipos"),
								message: (0, fe.__)("Coupon is applied successfully in the cart.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), e(ca(n)), e(va()))
						}));
						he.store.addNotification({
							title: (0, fe.__)("Coupon Error", "ddwc-multipos"),
							message: (0, fe.__)("Coupon is already applied in the cart.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					}))
				}
			},
			pa = function(t) {
				return function(e, n) {
					var r = n().cart.list[0].id;
					ua().then((function(n) {
						if (n.length > 0) {
							var o = n[0].coupon.filter((function(e) {
								return e.code != t
							}));
							return xi.table("coupon").where("cart_id").equals(r).modify({
								coupon: o
							}).then((function(t) {
								t && (n[0].coupon = o, e(ca(n)), e(va()), he.store.addNotification({
									title: (0, fe.__)("Coupon Removed", "ddwc-multipos"),
									message: (0, fe.__)("Coupon is successfully removed from the cart.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								}))
							}))
						}
					}))
				}
			},
			fa = function(t) {
				return {
					type: "CART",
					cart: t
				}
			},
			ha = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				if (e) {
					var n = Math.pow(10, e);
					return Math.round(t * n) / n
				}
				return Math.round(t)
			},
			ma = function(t) {
				return function(e) {
					var n = {
						cart_data: JSON.stringify(t)
					};
					return new Promise((function(t, e) {
						Ii(ddwcposPOSObj.API.CHECK_CENTRALIZED_STOCK_ENDPOINT, n).then((function(e) {
							null != e.out_of_stock_products && t(e)
						}))
					}))
				}
			},
			_a = function(t) {
				return function(e, n) {
					Sa(t).then((function(t) {
						t && Ea().then((function(t) {
							if (t) var r = {
								list: t,
								total: ka(t, n(), e)
							};
							else r = {
								list: [],
								total: Pa()
							};
							e(fa(r))
						}))
					}))
				}
			},
			ga = function() {
				return function(t, e) {
					var n = e().cart.list[0].id;
					return new Promise((function(t, e) {
						xi.cart.where("id").equals(n).delete().then((function(e) {
							xi.coupon.where("cart_id").equals(n).delete().then((function(e) {
								xi.discount.where("cart_id").equals(n).delete().then((function(e) {
									t(!0)
								}))
							}))
						}))
					}))
				}
			},
			va = function() {
				return function(t, e) {
					Ea().then((function(n) {
						if (n.length) var r = {
							list: n,
							total: ka(n, e(), t)
						};
						else r = {
							list: [],
							total: Pa()
						};
						t(fa(r))
					}))
				}
			},
			ya = function(t) {
				return function(e, n) {
					return new Promise((function(e, n) {
						xi.table("products").where("barcode_init").equals(t).toArray().then((function(t) {
							t.length ? e(t[0]) : e({})
						}))
					}))
				}
			},
			wa = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
					o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
				return function(i, a) {
					return new Promise((function(s, c) {
						if (n) {
							var l = {
								image: '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />'),
								regular_price: t.price,
								product_id: "custom_" + Math.floor(999 * Math.random()) + 100,
								sale_price: t.price,
								onsale: !1,
								stock: 999999999,
								tax: t.tax,
								tax_label: ddwcposPOSObj.ddwcpos_configuration.tax_label,
								title: t.title,
								type: "custom",
								parent: 0,
								categories: []
							};
							Ea().then((function(t) {
								var n = ba(t.length > 0 ? t : [], l, e, !0, r, o);
								n && Ea().then((function(t) {
									if (t) var r = {
										list: t,
										total: ka(t, a(), i)
									};
									else r = {
										list: [],
										total: Pa()
									};
									(0, Lt.doAction)("ddwcpos_after_adding_product_to_cart", r, n, e, a()), i(fa(r));
									var o = a().settings;
									o.sounds && "enabled" != o.sounds || new Audio("".concat(ddwcposPOSObj.plugin_url, "/assets/audio/add-to-cart.mp3")).play();
									s(n)
								}))
							}))
						} else xi.table("products").where("product_id").equals(t).and((function(t) {
							return t.stock > 0
						})).toArray().then((function(t) {
							if (t.length > 0) {
								var n = t[0];
								Ea().then((function(t) {
									var c = ba(t.length > 0 ? t : [], n, e, !1, r, o);
									c && Ea().then((function(t) {
										if (t) var n = {
											list: t,
											total: ka(t, a(), i)
										};
										else n = {
											list: [],
											total: Pa()
										};
										(0, Lt.doAction)("ddwcpos_after_adding_product_to_cart", n, c, e, a()), i(fa(n));
										var r = a().settings;
										r.sounds && "enabled" != r.sounds || new Audio("".concat(ddwcposPOSObj.plugin_url, "/assets/audio/add-to-cart.mp3")).play();
										s(c)
									}))
								}))
							} else he.store.addNotification({
								title: (0, fe.__)("Stock Error", "ddwc-multipos"),
								message: (0, fe.__)("No stock available for this product.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), s(!1)
						}))
					}))
				}
			};

		function ba(t, e, n, r) {
			var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
				i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
				a = e.regular_price,
				s = e.regular_price,
				c = e.sale_price,
				l = [],
				u = e.stock,
				d = e.tax,
				p = e.product_id,
				f = !1,
				h = e.title,
				m = 0,
				_ = e.weight,
				g = 0,
				v = t.length ? t[0].id : 0,
				y = !1;
			if (e.attributes && Object.keys(e.attributes).length)
				for (var w in e.attributes) e.attributes.hasOwnProperty(w) && (e.attributes[w] || (y = !0));
			if (y && Object.keys(i).length && (h += " - ", h += Object.values(i).join(", ")), o && (a -= (g = 100 * (_ - (m = parseFloat(o))) / _) * a / 100, d -= g * d / 100, h += " - " + m + ddwcposPOSObj.weight_unit), (l = t.length ? sa(t[0].cart) : []).length > 0)
				for (var b = 0; b < Object.keys(l).length; b++)
					if (o == l[b].boughtWeight && l[b].name == h && l[b].product_id == p && (0, Lt.applyFilters)("ddwcpos_product_quantity_update_check_on_add_to_cart", !0, l[b])) {
						if (u < l[b].quantity + n && -1 != u) return he.store.addNotification({
							title: (0, fe.__)("Stock Error", "ddwc-multipos"),
							message: (0, fe.__)("No stock available for this product.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), f = !0, !1;
						l[b].tax = l[b].tax / l[b].quantity, l[b].quantity += n, l[b].uf_total = l[b].quantity * l[b].uf, l[b].tax = l[b].quantity * l[b].tax, l[b].uf_total = parseFloat(l[b].uf_total), l[b].total = l[b].uf_total, f = !0;
						var E = l[b],
							O = {
								id: v,
								active_cart: 1,
								cart: l
							};
						break
					} if (0 == f) {
				if (u < n && -1 != u) return he.store.addNotification({
					title: (0, fe.__)("Stock Error", "ddwc-multipos"),
					message: (0, fe.__)("No stock available for this product.", "ddwc-multipos"),
					type: "danger",
					insert: "top",
					container: "top-right",
					dismiss: {
						duration: 3e3,
						pauseOnHover: !0
					}
				}), !1;
				var S = n * a;
				S = parseFloat(S);
				E = {
					key: Math.floor(1e4 * Math.random()),
					id: e.product_id,
					sku: e.sku,
					slug: e.slug,
					categories: e.categories,
					image: e.image,
					product_id: e.product_id,
					parent: e.parent,
					name: h,
					stock: u,
					special: c,
					quantity: n,
					price: s,
					onsale: e.onsale,
					originalTax: e.tax,
					tax: d,
					tax_label: e.tax_label,
					total: S,
					uf: a,
					weight: e.weight ? e.weight : 0,
					length: e.length ? e.length : 0,
					width: e.width ? e.width : 0,
					height: e.height ? e.height : 0,
					boughtWeight: m,
					uf_total: S,
					custom: r,
					type: e.type,
					attributes: i
				};
				E = (0, Lt.applyFilters)("ddwcpos_modify_cart_product_data_before_add", E, e);
				O = {
					id: v,
					active_cart: 1,
					cart: l.concat(E)
				}
			}
			return xi.cart.put(O).catch("DataError", (function(t) {
				console.error("Data error: " + t.message)
			})).catch(Error, (function(t) {
				console.error("Error: " + t.message)
			})).catch((function(t) {
				console.error(t)
			})), E
		}
		var Ea = function() {
				return xi.table("cart").where("active_cart").equals(1).toArray()
			},
			Oa = function(t) {
				return function(e, n) {
					Ea().then((function(r) {
						if (r && null != r[0].cart) {
							var o = r[0].id,
								i = r[0].cart.filter((function(e) {
									return !((0, Lt.applyFilters)("ddwcpos_custom_check_for_delete_cart_product", !0, t, e) && e.product_id == t.product_id && t.boughtWeight == e.boughtWeight && t.name == e.name && (!t.key || t.key == e.key))
								}));
							i && Sa(i).then((function(t) {
								t && Ea().then((function(t) {
									var r = n();
									if (t[0].cart.length) var i = {
										list: t,
										total: ka(t, r, e)
									};
									else {
										null != r.discount.length && r.discount.length > 0 && r.discount.forEach((function(t) {
											o == t.cart_id && (r.discount.pop(), xi.table("discount").where("id").equals(o).delete())
										}));
										i = {
											list: [],
											total: Pa()
										}
									}
									e(fa(i))
								}))
							}))
						}
					}))
				}
			},
			Sa = function(t) {
				return xi.table("cart").where("active_cart").equals(1).modify({
					cart: t
				})
			},
			Ca = function(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
					o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
					i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
					a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
				return function(s, c) {
					Ea().then((function(l) {
						var u = xa(l.length ? l : [], t, e, n, r, o, i, a);
						if (u = [u]) var d = {
							list: u,
							total: ka(u, c(), s)
						};
						else d = {
							list: u,
							total: Pa()
						};
						s(fa(d))
					}))
				}
			};

		function xa(t, e, n, r, o, i, a, s) {
			for (var c = t.length ? Object.keys(t[0].cart).length : 0, l = t[0].cart, u = 0, d = 0, p = t[0].id, f = 0; f < c; f++) {
				if (!(1 != l[f].custom || e != l[f].product_id || s && s != l[f].key)) {
					l[f].quantity = n, null != r && (l[f].uf = r), l[f].uf_total = parseFloat(l[f].quantity * l[f].uf), u = 100 * (l[f].special - l[f].uf) / l[f].special, d = parseFloat(l[f].originalTax), d -= u * d / 100, l[f].price = l[f].uf - d, l[f].tax = l[f].quantity * d, l[f].total = l[f].uf_total;
					break
				}
				a != l[f].boughtWeight || e != l[f].product_id || o != l[f].name || s && s != l[f].key || !(0, Lt.applyFilters)("ddwcpos_product_quantity_update_check_on_cart_update", !0, l[f], i, h) || (d = parseFloat(l[f].originalTax), r && (l[f].uf = parseFloat(r)), l[f].special > 0 && (d -= (u = 100 * (l[f].special - l[f].uf) / l[f].special) * d / 100), l[f].quantity = n, l[f].tax = l[f].quantity * d, l[f].uf_total = parseFloat(l[f].quantity * l[f].uf), l[f].total = l[f].uf_total)
			}
			var h = {
				id: p,
				active_cart: 1,
				cart: l
			};
			return xi.cart.put(h).catch("DataError", (function(t) {
				console.error("Data error: " + t.message)
			})).catch(Error, (function(t) {
				console.error("Error: " + t.message)
			})).catch((function(t) {
				console.error(t)
			})), h
		}
		var Pa = function() {
				return {
					cart_subtotal: 0,
					tax_total: 0,
					total_discount: 0,
					cart_total: 0
				}
			},
			ka = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					e = arguments.length > 1 ? arguments[1] : void 0,
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = t || e.cart.list,
					o = e.discount,
					i = e.taxes,
					a = e.coupon,
					s = e.products.list,
					c = t[0].id,
					l = 0,
					u = 0,
					d = 0,
					p = 0,
					f = 0;
				if (r.length && r[0].cart.length) {
					var h = r[0].cart,
						m = h.reduce((function(t, e) {
							return parseFloat(t) + parseFloat(e.uf_total)
						}), 0),
						_ = h.reduce((function(t, e) {
							return parseFloat(t) + parseFloat(e.tax)
						}), 0);
					if (a.length > 0 && (p = Da(a, h, c, m, s, n, e)), f = p > 0 ? m > 0 ? m - p : 0 : m, u = parseFloat(_), p && a.length && a[0].coupon.length) {
						var g = Na(i, o, a, m, h);
						u = g.totalTax, f = g.product_total
					}
					if (l = f + u, o.length > 0) {
						var v = Aa(l, c, o);
						d = v.discount, l = v.total
					}
					f < 0 && (l = 0, d = 0, u = parseFloat(_));
					var y = {
						cart_subtotal: ha(m),
						tax_total: ha(u),
						total_discount: ha(d),
						cart_total: ha(l)
					}
				} else y = Pa();
				return (0, Lt.applyFilters)("ddwcpos_modify_cart_total", y, t, e)
			},
			Ta = function(t, e) {
				var n = 0;
				if (e.length) {
					e.forEach((function(e, r) {
						"yes" === e.compound || (n += t * (e.rate / 100))
					}));
					var r = n;
					e.forEach((function(e, o) {
						"no" === e.compound || (n += (t + r) * (e.rate / 100), r = n)
					}))
				}
				return n
			};

		function Na(t, e, n, r, o) {
			var i = 0,
				a = 0,
				s = o.length > 1 ? o.reduce((function(t, e) {
					return t + parseInt(e.quantity)
				}), 0) : o.length;
			return o.forEach((function(e) {
				if (n.length > 0) {
					var c = n[0].coupon;
					a += e.uf_total, c.forEach((function(n) {
						if (null != n.price)
							if ("percent" == n.type) {
								a = 0, i = 0;
								var c = r * (n.price / 100),
									l = r - c;
								a += l;
								var u = 0;
								"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (u = Ta((0, Lt.applyFilters)("ddwcpos_modify_amount_for_calculate_exclusive_tax", l, t, c, e, n, o), t), u = (0, Lt.applyFilters)("ddwcpos_modify_tax_amount_after_calculate_exclusive_tax", u, l, t, c, e, n, o, t))), i += u
							} else if ("fixed_cart" == n.type || (0, Lt.applyFilters)("ddwcpos_add_custom_check_for_fixed_cart_coupon", !1, n)) {
							var d = n.price;
							s > 1 && (d = n.price / s * e.quantity), a -= d;
							var p = 0;
							"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (p = Ta((0, Lt.applyFilters)("ddwcpos_modify_amount_for_calculate_exclusive_tax", a, t, d, e, n, o), t), p = (0, Lt.applyFilters)("ddwcpos_modify_tax_amount_after_calculate_exclusive_tax", p, a, t, d, e, n, o, t))), i = p
						} else if ("fixed_product" == n.type) {
							var f = n.price;
							s > 1 && (f = n.price / s * e.quantity);
							var h = e.uf_total - f;
							a += h;
							var m = 0;
							"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (m = Ta((0, Lt.applyFilters)("ddwcpos_modify_amount_for_calculate_exclusive_tax", h, t, f, e, n, o), t), m = (0, Lt.applyFilters)("ddwcpos_modify_tax_amount_after_calculate_exclusive_tax", m, h, t, f, e, n, o, t))), i += m
						}
					}))
				}
			})), {
				totalTax: i = i < 0 ? 0 : i,
				product_total: a = a < 0 ? 0 : a
			}
		}

		function Aa(t, e, n) {
			var r = t,
				o = 0;
			if (n[0].cart_id == e) {
				var i = n[0].discount;
				if ("percentage" == i.type) {
					var a = i.amount;
					r = r = t - (o = Math.round(a / 100 * t * 100) / 100) > 0 ? t - o : parseFloat(0)
				} else {
					r = r = t - (o = i.amount) > 0 ? t - o : parseFloat(0)
				}
			} else {
				r = r = t - (o = 0) > 0 ? t - o : parseFloat(0)
			}
			return {
				total: r,
				discount: o
			}
		}

		function Da(t, e, n, r, o, i, a) {
			var s = 0,
				c = [],
				l = e.length > 1 ? e.reduce((function(t, e) {
					return t + parseInt(e.quantity)
				}), 0) : e.length;
			if (t[0].cart_id == n) {
				var u = t[0].coupon;
				u.forEach((function(t) {
					var d = !1,
						p = !0,
						f = 0;
					if (t.restrictions) {
						if (t.restrictions.email_restrictions.length > 0 && !t.restrictions.email_restrictions.includes(a.customers.defaultCustomer.email) && (p = !1), t.restrictions.individual_use && u.length > 1 && (p = !1), (t.restrictions.minimum_amount && t.restrictions.minimum_amount > r || t.restrictions.maximum_amount && t.restrictions.maximum_amount < r) && (p = !1), p)
							for (var h = 0; h < e.length; h++) {
								var m = !0;
								0 == e[h].custom && (t.restrictions.exclude_sale_items && e[h].onsale ? (d = !0, !0, m = !1, f = 0) : t.restrictions.product_ids.length > 0 ? (d = !0, t.restrictions.product_ids.forEach((function(n) {
									n == e[h].product_id && (!0, null != t.price && ("percent" == t.type ? (f += parseFloat(t.price * r / 100), m = !1) : (f = parseFloat(t.price), m = !1)))
								}))) : t.restrictions.excluded_product_ids.length > 0 ? (d = !0, t.restrictions.excluded_product_ids.forEach((function(t) {
									t == e[h].product_id && (!0, f = 0, m = !1)
								}))) : (t.restrictions.product_categories.length > 0 || t.restrictions.excluded_product_categories.length > 0) && (d = !0, o.forEach((function(t) {
									t.product_id == e[h].product_id && (c = t.categories)
								})), t.restrictions.product_categories.forEach((function(n) {
									c.forEach((function(r) {
										n == r && m && (!0, null != t.price && ("percent" == t.type ? (m = !1, f += parseFloat(t.price * e[h].uf_total / 100)) : (m = !1, f = parseFloat(t.price))))
									}))
								})), t.restrictions.excluded_product_categories.forEach((function(t) {
									c.forEach((function(e) {
										t == e && (!0, m = !1, f = !1)
									}))
								}))))
							}
						if (!p || d && 0 == f) {
							var _ = Ra(n);
							i(la()), _ && he.store.addNotification({
								title: (0, fe.__)("Coupon Error", "ddwc-multipos"),
								message: (0, fe.__)("This coupon is not applicable as per restrictions.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						} else null != t.price && ("percent" == t.type ? s += parseFloat(t.price * r / 100) : e.forEach((function(e) {
							s += ha(t.price / l * e.quantity)
						})));
						s += f
					}
				}))
			}
			return s
		}
		var Ra = function(t) {
				return xi.table("coupon").where("cart_id").equals(t).delete().then((function(t) {
					return t
				}))
			},
			Ia = function() {
				return function(t) {
					xi.table("cart").orderBy("id").last().then((function(e) {
						var n = 0;
						e && (n = e.id + 1);
						var r = {
							id: n,
							active_cart: 1,
							cart: []
						};
						xi.table("cart").add(r).then((function(e) {
							if (e) {
								var n = Pa();
								t(fa({
									list: [],
									total: n
								}))
							}
						}))
					}))
				}
			},
			La = __webpack_require__(653),
			Ma = __webpack_require__(1911);
		const qa = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "minus",
			theme: "outlined"
		};
		var ja = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: qa
			}))
		};
		ja.displayName = "MinusOutlined";
		const Ba = n.forwardRef(ja);
		const Fa = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "defs",
					attrs: {},
					children: [{
						tag: "style",
						attrs: {}
					}]
				}, {
					tag: "path",
					attrs: {
						d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
					}
				}, {
					tag: "path",
					attrs: {
						d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
					}
				}]
			},
			name: "plus",
			theme: "outlined"
		};
		var Ha = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Fa
			}))
		};
		Ha.displayName = "PlusOutlined";
		const Ua = n.forwardRef(Ha);
		const Va = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
					}
				}]
			},
			name: "up",
			theme: "outlined"
		};
		var za = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Va
			}))
		};
		za.displayName = "UpOutlined";
		const Wa = n.forwardRef(za);
		const Ga = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
					}
				}]
			},
			name: "down",
			theme: "outlined"
		};
		var Ka = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Ga
			}))
		};
		Ka.displayName = "DownOutlined";
		const $a = n.forwardRef(Ka);
		const Qa = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
					}
				}]
			},
			name: "delete",
			theme: "outlined"
		};
		var Za = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Qa
			}))
		};
		Za.displayName = "DeleteOutlined";
		const Ya = n.forwardRef(Za);

		function Ja(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Xa = function(t) {
			le(o, t);
			var r = Ja(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).HandleRemove = function(t, n) {
					t.stopPropagation(), (0, Lt.applyFilters)("ddwcpos_handle_cart_product_remove_custom_check", !0, f(e), n) && e.props.removeCartProduct(n)
				}, e.handleToggleEditCartProductDropdown = function() {
					(0, Lt.applyFilters)("ddwcpos_handle_edit_cart_product_custom_check", !0, f(e)) && e.setState({
						showEditCartProductDropdown: !e.state.showEditCartProductDropdown
					})
				}, e.handleChangeCartProductQuantity = function(t) {
					13 == t.which && e.handleUpdateCartProduct();
					var n = e.props.cartProduct,
						r = t.target.value;
					r <= 1 && (r = 1), e.setState({
						cartProductQuantity: r <= n.stock ? r : n.stock
					})
				}, e.handleIncreaseDecreaseQuantity = function(t) {
					var n = e.props.cartProduct,
						r = parseInt(e.state.cartProductQuantity ? e.state.cartProductQuantity : n.quantity) + t;
					r <= 1 && (r = 1), e.setState({
						cartProductQuantity: r <= n.stock ? r : n.stock
					})
				}, e.handleChangeCartProductPrice = function(t) {
					13 == t.which && e.handleUpdateCartProduct();
					var n = t.target.value < 0 ? 0 : t.target.value;
					e.setState({
						cartProductPrice: n
					})
				}, e.handleChangeCartProductDiscount = function(t) {
					13 == t.which && e.handleUpdateCartProduct();
					var n = t.target.value < 0 ? 0 : t.target.value;
					e.setState({
						cartProductDiscount: parseFloat(n)
					})
				}, e.handleEditCartProductFormSubmit = function(t) {
					t.preventDefault(), e.handleUpdateCartProduct()
				}, e.handleUpdateCartProduct = function() {
					var t = e.props.cartProduct,
						n = e.state.cartProductQuantity ? e.state.cartProductQuantity : t.quantity;
					if (t.stock < n) he.store.addNotification({
						title: (0, fe.__)("Stock Error", "ddwc-multipos"),
						message: (0, fe.__)("There is no more stocks available for this product.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					});
					else {
						var r = e.state.cartProductPrice ? e.state.cartProductPrice : t.special;
						null != e.state.cartProductDiscount && (e.state.cartProductDiscount >= 0 && e.state.cartProductDiscount <= 100 ? (r = parseFloat(t.special).toFixed(2), r -= e.state.cartProductDiscount * r / 100, 0 == e.state.cartProductDiscount ? r = e.state.cartProductPrice ? e.state.cartProductPrice : t.special : e.setState({
							cartProductPrice: t.special
						})) : he.store.addNotification({
							title: (0, fe.__)("Discount Error", "ddwc-multipos"),
							message: (0, fe.__)("Discount percentage must be between 0 and 100.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})), e.props.ModifyCart(t.product_id, n, r, t.name, t, t.boughtWeight, t.key)
					}
					e.handleToggleEditCartProductDropdown()
				}, e.state = {
					showEditCartProductDropdown: !1,
					cartProductQuantity: null,
					cartProductPrice: null,
					cartProductDiscount: null
				}, e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = this.props.cartProduct,
						o = null;
					return this.state.showEditCartProductDropdown && (o = (0, e.createElement)(n.Fragment, null, (0, Lt.applyFilters)("ddwcpos_add_details_before_edit_cart_product", "", this), (0, e.createElement)("form", {
						className: "ddwcpos-edit-cart-product",
						onSubmit: this.handleEditCartProductFormSubmit
					}, (0, e.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column"
					}, (0, e.createElement)("p", null, (0, fe.__)("Quantity", "ddwc-multipos")), (0, e.createElement)("div", {
						className: "ddwcpos-edit-cart-product-quantity"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, fe.__)("Decrease Quantity", "ddwc-multipos"),
						onClick: function(e) {
							return t.handleIncreaseDecreaseQuantity(-1)
						}
					}, (0, e.createElement)(Ba, null)), (0, e.createElement)("input", {
						type: "number",
						min: "1",
						max: r.stock,
						value: this.state.cartProductQuantity ? this.state.cartProductQuantity : r.quantity,
						onChange: function(e) {
							return t.handleChangeCartProductQuantity(e)
						}
					}), (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, fe.__)("Increase Quantity", "ddwc-multipos"),
						onClick: function(e) {
							return t.handleIncreaseDecreaseQuantity(1)
						}
					}, (0, e.createElement)(Ua, null)))), (0, e.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column"
					}, (0, e.createElement)("p", null, (0, fe.__)("Discount (%)", "ddwc-multipos")), (0, e.createElement)("input", {
						type: "number",
						step: "0.01",
						min: "0",
						max: "100",
						value: null != this.state.cartProductDiscount ? this.state.cartProductDiscount : 0,
						onChange: function(e) {
							return t.handleChangeCartProductDiscount(e)
						}
					})), (0, e.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column"
					}, (0, e.createElement)("p", null, (0, fe.__)("Price Per Unit", "ddwc-multipos")), (0, e.createElement)("input", {
						type: "number",
						step: "0.01",
						min: "0",
						value: null != this.state.cartProductPrice ? this.state.cartProductPrice : parseFloat(r.uf).toFixed(2),
						onChange: function(e) {
							return t.handleChangeCartProductPrice(e)
						},
						autoFocus: !0
					})), (0, e.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column",
						onClick: this.handleUpdateCartProduct
					}, (0, e.createElement)("button", null, (0, fe.__)("Update", "ddwc-multipos"))), (0, Lt.applyFilters)("ddwcpos_add_cart_product_action_after_update_button", "", this)))), (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
						className: "ddwcpos-cart-product product-id-" + r.product_id,
						onClick: this.handleToggleEditCartProductDropdown
					}, (0, e.createElement)("div", {
						className: "ddwcpos-cart-product-action",
						onClick: this.handleToggleEditCartProductDropdown
					}, (0, Lt.applyFilters)("ddwcpos_display_cart_product_action_icons", !0, this) ? this.state.showEditCartProductDropdown ? (0, e.createElement)(Wa, null) : (0, e.createElement)($a, null) : null), (0, e.createElement)("div", {
						className: "ddwcpos-cart-product-image",
						dangerouslySetInnerHTML: {
							__html: r.image
						}
					}), (0, e.createElement)("div", {
						className: "ddwcpos-cart-product-details"
					}, (0, e.createElement)("p", {
						title: (0, La.ZP)(r.name)
					}, (0, La.ZP)(r.name)), (0, e.createElement)("p", null, (0, Ma.R)(r.uf), " x ", r.quantity)), (0, e.createElement)("div", {
						className: "ddwcpos-cart-product-price"
					}, (0, e.createElement)("p", null, (0, Ma.R)(r.uf_total), (0, La.ZP)(ddwcposPOSObj.ddwcpos_configuration.tax_label))), (0, e.createElement)("div", {
						className: "ddwcpos-cart-product-action",
						onClick: function(e) {
							return t.HandleRemove(e, r)
						}
					}, (0, Lt.applyFilters)("ddwcpos_display_cart_product_action_icons", !0, this) ? (0, e.createElement)(Ya, null) : null)), (0, Lt.applyFilters)("ddwcpos_add_details_after_cart_product", "", this), o)
				}
			}]), o
		}(n.Component);
		const ts = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				ModifyCart: Ca,
				removeCartProduct: Oa
			}, t))
		}))(Xa);

		function es(t, e, n, r, o, i, a) {
			try {
				var s = t[i](a),
					c = s.value
			} catch (t) {
				return void n(t)
			}
			s.done ? e(c) : Promise.resolve(c).then(r, o)
		}
		var ns = __webpack_require__(7757),
			rs = __webpack_require__.n(ns),
			os = function() {
				return function(t, e) {
					xi.table("tables").toArray().then((function(n) {
						var r = {
							list: [],
							defaultTable: {}
						};
						if (n.length) {
							var o = n.filter((function(t) {
								return t.default
							}));
							r.list = n, r.defaultTable = o.length ? o[0] : {}
						} else {
							var i = e().outlet.tables,
								a = Object.values(ddwcposPOSObj.ddwcpos_configuration.tables).filter((function(t) {
									return i.includes(t.slug)
								}));
							xi.table("tables").bulkPut(a);
							var s = a.filter((function(t) {
								return t.default
							}));
							r.list = a, r.defaultTable = s.length ? s[0] : {}
						}
						t(function(t) {
							return {
								type: "TABLES",
								tables: t
							}
						}(r))
					}))
				}
			},
			is = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(e, n) {
					var r = n().tables.defaultTable.slug;
					xi.table("tables").toCollection().modify((function(t) {
						t.default = 0
					})), r ? xi.table("tables").where("slug").equals(r).modify({
						tableType: "vacant"
					}).then((function(n) {
						t ? xi.table("tables").where("slug").equals(t).modify({
							default: 1,
							tableType: "occupied"
						}).then((function(t) {
							e(os()), he.store.addNotification({
								title: (0, fe.__)("Table Set", "ddwc-multipos"),
								message: (0, fe.__)("Table is set successfully for the order.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						})) : (e(os()), he.store.addNotification({
							title: (0, fe.__)("Take Away Order", "ddwc-multipos"),
							message: (0, fe.__)("No table is selected for take away orders.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}))
					})) : t ? xi.table("tables").where("slug").equals(t).modify({
						default: 1,
						tableType: "occupied"
					}).then((function(t) {
						e(os()), he.store.addNotification({
							title: (0, fe.__)("Table Set", "ddwc-multipos"),
							message: (0, fe.__)("Table is set successfully for the order.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					})) : (e(os()), he.store.addNotification({
						title: (0, fe.__)("Take Away Order", "ddwc-multipos"),
						message: (0, fe.__)("No table is selected for take away orders.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}))
				}
			},
			as = function(t) {
				return function(e, n) {
					t.kitchen_status = "preparing", xi.table("cart").where("id").equals(t.id).modify(t).then((function(t) {
						e(ss())
					}));
					var r = {
						outlet_id: n().outlet.id,
						order_data: t,
						action: "add"
					};
					Ii(ddwcposPOSObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT, r).then((function(t) {
						he.store.addNotification({
							title: (0, fe.__)("Success", "ddwc-multipos"),
							message: (0, fe.__)("Order is successfully sent to Kitchen.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					}))
				}
			},
			ss = function() {
				return function(t, e) {
					xi.table("cart").where("active_cart").equals(0).toArray().then((function(n) {
						var r = [];
						n.length && n.forEach((function(t) {
							var n = ka([t], e());
							r.push({
								list: [t],
								total: n
							})
						})), t(function(t) {
							return {
								type: "HOLD_CARTS",
								holdCarts: t
							}
						}(r))
					}))
				}
			},
			cs = function(t) {
				return function(e, n) {
					var r = n(),
						o = new Date,
						i = r.tables.defaultTable,
						a = r.cart.list[0].id;
					Object.keys(i).length && (xi.table("tables").where("slug").equals(i.slug).modify({
						tableType: "occupied",
						default: 0
					}), e(os())), xi.table("cart").where("active_cart").equals(1).modify({
						active_cart: 0,
						info: t,
						date: o.toDateString() + " " + o.toLocaleTimeString(),
						customer: r.customers.defaultCustomer,
						table: i
					}).then((function(t) {
						"restaurant" === r.outlet.mode && ddwcposPOSObj.ddwcpos_configuration.automatic_send_kitchen_order_enabled && xi.table("cart").where("id").equals(a).toArray().then((function(t) {
							e(as(t[0]))
						})), he.store.addNotification({
							title: (0, fe.__)("Hold Order Success", "ddwc-multipos"),
							message: (0, fe.__)("Your current cart is put to hold succesfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), e(ss())
					}))
				}
			},
			ls = function(t) {
				return function(e, n) {
					var r = n(),
						o = r.cart.list.length ? r.cart.list[0].id : 99999999999;
					xi.table("cart").where("id").equals(o).delete().then((function(n) {
						xi.table("cart").where("id").equals(t).modify({
							active_cart: 1
						}).then((function(t) {
							e(ss()), e(va())
						}))
					}))
				}
			},
			us = function(t) {
				return function(e, n) {
					xi.table("cart").where("id").equals(t).toArray().then((function(r) {
						if (Ri()) {
							var o = {
								outlet_id: n().outlet.id,
								action: "remove",
								order_data: r[0]
							};
							fetch(ddwcposPOSObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT, {
								method: "POST",
								headers: new Headers({
									"Content-Type": "application/json",
									Accept: "application/json"
								}),
								body: JSON.stringify(o)
							}).then((function(t) {
								return t.json()
							})).then((function(t) {
								he.store.addNotification({
									title: (0, fe.__)("Success", "ddwc-multipos"),
									message: (0, fe.__)("Order is successfully removed from kitchen.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								})
							})).catch((function(t) {
								console.error(t)
							}))
						} else he.store.addNotification({
							title: (0, fe.__)("Error", "ddwc-multipos"),
							message: (0, fe.__)("Cannot make request to kitchen to delete, check your internet connection!", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						});
						r[0].table && r[0].table.slug && xi.table("tables").where("slug").equals(r[0].table.slug).modify({
							tableType: "vacant"
						}), xi.table("cart").where("id").equals(t).delete().then((function(t) {
							e(ss()), e(va()), e(os())
						}))
					}))
				}
			},
			ds = function(t) {
				return {
					type: "DISCOUNT",
					discount: t
				}
			},
			ps = function() {
				return function(t) {
					return new Promise((function(e, n) {
						return xi.table("discount").toArray().then((function(n) {
							t(ds(n)), e(n)
						}))
					}))
				}
			},
			fs = function(t, e, n) {
				return function(r) {
					if ("add" == t) {
						var o = {
							id: n,
							cart_id: n,
							discount: e
						};
						xi.table("discount").put(o).then((function(t) {
							r(ds([o])), r(va())
						}))
					} else "delete" == t && xi.table("discount").where("id").equals(n).delete().then((function(t) {
						r(ds([])), r(va())
					}))
				}
			};
		const hs = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"
					}
				}]
			},
			name: "delete",
			theme: "filled"
		};
		var ms = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: hs
			}))
		};
		ms.displayName = "DeleteFilled";
		const _s = n.forwardRef(ms);
		const gs = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
					}
				}]
			},
			name: "tag",
			theme: "filled"
		};
		var vs = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: gs
			}))
		};
		vs.displayName = "TagFilled";
		const ys = n.forwardRef(vs);
		const ws = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M855.7 210.8l-42.4-42.4a8.03 8.03 0 00-11.3 0L168.3 801.9a8.03 8.03 0 000 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"
					}
				}]
			},
			name: "percentage",
			theme: "outlined"
		};
		var bs = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: ws
			}))
		};
		bs.displayName = "PercentageOutlined";
		const Es = n.forwardRef(bs);
		const Os = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
					}
				}]
			},
			name: "close",
			theme: "outlined"
		};
		var Ss = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Os
			}))
		};
		Ss.displayName = "CloseOutlined";
		const Cs = n.forwardRef(Ss);

		function xs(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		const Ps = function(t) {
			le(o, t);
			var r = xs(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).componentDidMount = function() {
					document.addEventListener("keydown", e.handleKeyDown, !1), (0, Lt.doAction)("ddwcpos_popup_component_did_mount", f(e))
				}, e.componentWillUnmount = function() {
					document.removeEventListener("keydown", e.handleKeyDown, !1)
				}, e.handleKeyDown = function(t) {
					27 == t.which && e.props.handleCancel()
				}, e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = {};
					this.props.singleButton && (r.gridTemplateColumns = "1fr");
					var o = this.props.handleSuccessArgs ? this.props.handleSuccessArgs : [],
						i = "ddwcpos-popup";
					return this.props.additionalPopupClass && (i += " ".concat(this.props.additionalPopupClass)), (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
						className: "ddwcpos-popup-overlay",
						onClick: this.props.handleOverlay
					}), (0, e.createElement)("div", {
						className: i,
						style: this.props.popupStyle && Object.keys(this.props.popupStyle).length ? this.props.popupStyle : {}
					}, (0, e.createElement)("div", {
						className: "ddwcpos-popup-content"
					}, this.props.popupContent, this.props.hideActions ? null : (0, e.createElement)("div", {
						className: "ddwcpos-actions-wrapper",
						style: r
					}, !this.props.hideSuccessButton && (0, e.createElement)("button", {
						disabled: !this.props.notDisabled,
						onClick: function(e) {
							var n;
							return (n = t.props).handleSuccess.apply(n, [e].concat(sa(o)))
						}
					}, this.props.successButtonText ? this.props.successButtonText : (0, e.createElement)(n.Fragment, null, (0, e.createElement)(Ua, null), (0, fe.__)("Add", "ddwc-multipos"))), !this.props.hideCancelButton && (0, e.createElement)("button", {
						className: "ddwcpos-button-secondary",
						onClick: this.props.handleCancel
					}, this.props.cancelButtonText ? this.props.cancelButtonText : (0, e.createElement)(n.Fragment, null, (0, e.createElement)(Cs, null), (0, fe.__)("Cancel", "ddwc-multipos")))))))
				}
			}]), o
		}(n.Component);

		function ks(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Ts = function(t) {
			le(o, t);
			var r = ks(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).handleToggleDiscountPopup = function() {
					e.setState({
						showDiscountPopup: !e.state.showDiscountPopup
					})
				}, e.handleToggleCouponPopup = function() {
					e.setState({
						showCouponPopup: !e.state.showCouponPopup
					})
				}, e.handleToggleHoldOrderPopup = function() {
					var t = e.props.cart.list;
					t.length && t[0].cart.length ? e.setState({
						showHoldOrderPopup: !e.state.showHoldOrderPopup
					}) : he.store.addNotification({
						title: (0, fe.__)("Empty Cart", "ddwc-multipos"),
						message: (0, fe.__)("Please add products in the cart first to hold it.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleDiscountInput = function(t) {
					13 == t.which ? e.handleApplyDiscount() : e.setState({
						discountAmount: t.target.value
					})
				}, e.handleCouponInput = function(t) {
					13 == t.which ? e.handleApplyCoupon() : e.setState({
						couponCode: t.target.value
					})
				}, e.handleHoldOrderInfoInput = function(t) {
					13 == t.which ? e.handleSaveHoldOrder() : e.setState({
						holdOrderInfo: t.target.value
					})
				}, e.handleChangeDiscountType = function(t) {
					e.setState({
						discountType: t
					})
				}, e.handleApplyDiscount = function() {
					var t = e.props.cart.list;
					if (t.length && t[0].cart.length) {
						e.handleToggleDiscountPopup();
						var n = t[0].id,
							r = e.props.taxes,
							o = e.state.discountType,
							i = e.state.discountAmount,
							a = 0;
						i && !isNaN(i) && i > 0 ? (r.forEach((function(t) {
							"fixed" == o && (a = i - i * t.rate / (t.rate + 1))
						})), e.props.ModifyDiscount("add", {
							amount: i,
							type: o,
							tax: a
						}, n), he.store.addNotification({
							title: (0, fe.__)("Discount Success", "ddwc-multipos"),
							message: (0, fe.__)("Discount applied successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})) : he.store.addNotification({
							title: (0, fe.__)("Amount Error", "ddwc-multipos"),
							message: (0, fe.__)("Entered amount is invalid.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					} else he.store.addNotification({
						title: (0, fe.__)("Empty Cart", "ddwc-multipos"),
						message: (0, fe.__)("Please add products in the cart to apply discount.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleRemoveDiscount = function() {
					var t = e.props.cart.list[0].id;
					e.props.ModifyDiscount("delete", {}, t), he.store.addNotification({
						title: (0, fe.__)("Discount Success", "ddwc-multipos"),
						message: (0, fe.__)("Discount removed successfully.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleApplyCoupon = function() {
					if (Ri()) {
						var t = e.props.cart.list;
						if (t.length && t[0].cart.length) {
							e.handleToggleCouponPopup();
							var n = e.state.couponCode;
							if (n) {
								var r = {
									coupon_code: n,
									customer: e.props.customers.defaultCustomer
								};
								Ii(ddwcposPOSObj.API.CHECK_COUPON_ENDPOINT, r).then((function(t) {
									if (t.success && t.coupon) {
										var n = e.props.taxes;
										if ("yes" == ddwcposPOSObj.tax_type) {
											("fixed_cart" == t.coupon.type || (0, Lt.applyFilters)("ddwcpos_add_custom_check_for_fixed_cart_coupon", !1, t.coupon)) && n.forEach((function(t) {
												t.rate && t.rate
											})), t.coupon.coup_tax = 0
										} else {
											var r = 0;
											n.forEach((function(e) {
												("fixed_cart" == t.coupon.type || (0, Lt.applyFilters)("ddwcpos_add_custom_check_for_fixed_cart_coupon", !1, t.coupon)) && (r = t.coupon.price - t.coupon.price * e.rate / (e.rate + 1), r = t.coupon.price * e.rate / 100)
											})), t.coupon.coup_tax = r
										}
										t.coupon = (0, Lt.applyFilters)("ddwcpos_modify_coupon_before_applying", t.coupon, f(e)), e.props.ApplyCoupon(t.coupon)
									} else he.store.addNotification({
										title: (0, fe.__)("Coupon Error", "ddwc-multipos"),
										message: t.message,
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									})
								}))
							} else he.store.addNotification({
								title: (0, fe.__)("Empty Field", "ddwc-multipos"),
								message: (0, fe.__)("Please enter a coupon code first.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						} else he.store.addNotification({
							title: (0, fe.__)("Empty Cart", "ddwc-multipos"),
							message: (0, fe.__)("Please add products in the cart to apply coupon.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					} else he.store.addNotification({
						title: (0, fe.__)("System is Offline", "ddwc-multipos"),
						message: (0, fe.__)("Coupon cannot be applied in offline mode, please apply after getting online.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handlePayClick = function() {
					var t, n = (t = rs().mark((function t(n) {
						var r, o, i, a, s, c, l, u, d, p;
						return rs().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (r = e.props.cart, o = e.props.customers, i = r.list.length > 0 ? r.list[0].cart : [], !Object.keys(o.defaultCustomer).length) {
										t.next = 24;
										break
									}
									if (!(i.length > 0)) {
										t.next = 20;
										break
									}
									if (a = r.list[0].cart, s = r.list[0].id, "centralized" != e.props.outlet.inventory_type) {
										t.next = 18;
										break
									}
									if (n.preventDefault(), !Ri()) {
										t.next = 17;
										break
									}
									return c = e.props.validateProductStock(a), t.next = 13, c.then((function(t) {
										return a.filter((function(e) {
											return t.out_of_stock_products.includes(e.product_id)
										}))
									}));
								case 13:
									null != (l = t.sent) && l.length > 0 ? (u = a.filter((function(t) {
										return !l.includes(t)
									})), d = [], l.forEach((function(t) {
										d.push(t.name)
									})), p = d.join(", "), p = d.lenth > 1 ? "".concat(p, " ").concat((0, fe.__)("are out of stock now, please remove them from cart", "ddwc-multipos")) : "".concat(p, " ").concat((0, fe.__)("is out of stock now, kindly remove them from cart", "ddwc-multipos")), confirm(p) && e.props.deleteNotValidProductsFromCart(u, s)) : e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/pay")), t.next = 18;
									break;
								case 17:
									he.store.addNotification({
										title: (0, fe.__)("Error", "ddwc-multipos"),
										message: (0, fe.__)("Sorry, orders cannot be processed with centralized inventory in offline mode.", "ddwc-multipos"),
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
								case 18:
									t.next = 22;
									break;
								case 20:
									n.preventDefault(), he.store.addNotification({
										title: (0, fe.__)("Empty Cart", "ddwc-multipos"),
										message: (0, fe.__)("Cart is empty right now, kindly add products to checkout.", "ddwc-multipos"),
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
								case 22:
									t.next = 26;
									break;
								case 24:
									n.preventDefault(), he.store.addNotification({
										title: (0, fe.__)("Select Customer First", "ddwc-multipos"),
										message: (0, fe.__)("Customer is not selected, kindly select the customer to checkout.", "ddwc-multipos"),
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
								case 26:
								case "end":
									return t.stop()
							}
						}), t)
					})), function() {
						var e = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = t.apply(e, n);

							function a(t) {
								es(i, r, o, a, s, "next", t)
							}

							function s(t) {
								es(i, r, o, a, s, "throw", t)
							}
							a(void 0)
						}))
					});
					return function(t) {
						return n.apply(this, arguments)
					}
				}(), e.handleSaveHoldOrder = function() {
					e.handleToggleHoldOrderPopup(), e.props.addToHold(e.state.holdOrderInfo), e.props.addNewCart(), xi.table("coupon").clear().then((function(t) {
						e.props.getCoupons()
					})), xi.table("discount").clear().then((function(t) {
						e.props.getDiscount()
					}))
				}, e.state = (0, Lt.applyFilters)("ddwcpos_modify_state_in_cart_total_component", {
					showCouponPopup: !1,
					showDiscountPopup: !1,
					showHoldOrderPopup: !1,
					couponCode: "",
					discountType: "fixed",
					discountAmount: "",
					holdOrderInfo: ""
				}, f(e)), e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = this.props.cart,
						o = r.list,
						i = 0;
					i = o.length && o[0].cart.length ? (i = o[0].cart.reduce((function(t, e) {
						return t + parseInt(e.quantity)
					}), 0)) > 1 ? "".concat(i, " ").concat((0, fe.__)("Items", "ddwc-multipos")) : "".concat(i, " ").concat((0, fe.__)("Item", "ddwc-multipos")) : "0 ".concat((0, fe.__)("Item", "ddwc-multipos"));
					var a = this.props.coupon.length ? this.props.coupon[0].coupon : [],
						s = r.total,
						c = parseFloat(s.total_discount) + 0,
						l = a.map((function(n, r) {
							var o = (0, Lt.applyFilters)("ddwcpos_eligible_to_remove_coupon", !0, t);
							return (0, e.createElement)("span", {
								className: "ddwcpos-cart-applied-coupons",
								key: r
							}, o ? (0, e.createElement)(_s, {
								className: "ddwcpos-remove-discount-icon",
								onClick: function(e) {
									return t.props.RemoveCoupon(n.code)
								}
							}) : null, n.code, " (".concat("percent" == n.type ? n.price + "%" : (0, Ma.R)(n.price), ")"))
						})),
						u = "";
					if (this.state.showHoldOrderPopup) {
						var d = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Hold Order", "ddwc-multipos")), (0, e.createElement)("input", {
								type: "text",
								onKeyUp: function(e) {
									return t.handleHoldOrderInfoInput(e)
								},
								placeholder: (0, fe.__)("Enter Order Info", "ddwc-multipos"),
								autoFocus: !0
							})),
							p = {
								handleOverlay: this.handleToggleHoldOrderPopup,
								popupContent: d,
								notDisabled: !0,
								handleSuccess: this.handleSaveHoldOrder,
								handleCancel: this.handleToggleHoldOrderPopup
							};
						u = (0, e.createElement)(Ps, p)
					}
					if (this.state.showCouponPopup) {
						var f = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Apply Coupon", "ddwc-multipos")), (0, e.createElement)("input", {
								type: "text",
								onKeyUp: function(e) {
									return t.handleCouponInput(e)
								},
								placeholder: (0, fe.__)("Enter Coupon Code", "ddwc-multipos"),
								autoFocus: !0
							})),
							h = {
								handleOverlay: this.handleToggleCouponPopup,
								popupContent: f,
								notDisabled: this.state.couponCode,
								handleSuccess: this.handleApplyCoupon,
								handleCancel: this.handleToggleCouponPopup
							};
						u = (0, e.createElement)(Ps, h)
					}
					if (this.state.showDiscountPopup) {
						var m = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Apply Discount", "ddwc-multipos")), (0, e.createElement)("div", {
								className: "ddwcpos-popup-options-group"
							}, (0, e.createElement)("h3", null, (0, fe.__)("Select Discount Type", "ddwc-multipos")), (0, e.createElement)("div", {
								className: "ddwcpos-popup-options"
							}, (0, e.createElement)("p", {
								onClick: function(e) {
									return t.handleChangeDiscountType("fixed")
								},
								className: "fixed" == this.state.discountType ? "ddwcpos-selected-options" : null
							}, (0, fe.__)("Fixed", "ddwc-multipos")), (0, e.createElement)("p", {
								onClick: function(e) {
									return t.handleChangeDiscountType("percentage")
								},
								className: "percentage" == this.state.discountType ? "ddwcpos-selected-options" : null
							}, (0, fe.__)("Percentage", "ddwc-multipos")))), (0, e.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onKeyUp: function(e) {
									return t.handleDiscountInput(e)
								},
								placeholder: (0, fe.__)("Enter Discount Amount", "ddwc-multipos"),
								autoFocus: !0
							})),
							_ = {
								handleOverlay: this.handleToggleDiscountPopup,
								popupContent: m,
								notDisabled: this.state.discountAmount,
								handleSuccess: this.handleApplyDiscount,
								handleCancel: this.handleToggleDiscountPopup
							};
						u = (0, e.createElement)(Ps, _)
					}
					return (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
						className: "ddwcpos-cart-totals"
					}, (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Subtotal", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(s.cart_subtotal))), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Tax", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(s.tax_total))), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Discount", "ddwc-multipos")), (0, e.createElement)("strong", null, c ? (0, e.createElement)(_s, {
						className: "ddwcpos-remove-discount-icon",
						onClick: this.handleRemoveDiscount
					}) : null, (0, Ma.R)(-c))), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Applied Coupon(s)", "ddwc-multipos")), (0, e.createElement)("strong", null, l.length ? l : (0, fe.__)("N/A", "ddwc-multipos"))), (0, Lt.applyFilters)("ddwcpos_add_details_after_applied_coupons_in_cart_total", "", this), (0, Lt.applyFilters)("ddwcpos_show_cart_actions_custom_check", !0, this) ? (0, e.createElement)("div", {
						className: "ddwcpos-cart-actions" + (0, Lt.applyFilters)("ddwcpos_add_class_to_cart_actions_element", "", this)
					}, (0, e.createElement)("span", {
						onClick: this.handleToggleCouponPopup
					}, (0, e.createElement)(ys, null), (0, fe.__)("Coupon", "ddwc-multipos")), (0, e.createElement)("span", {
						onClick: this.handleToggleDiscountPopup
					}, (0, e.createElement)(Es, null), (0, fe.__)("Discount", "ddwc-multipos")), (0, e.createElement)("span", {
						onClick: this.handleToggleHoldOrderPopup
					}, (0, e.createElement)(aa, null), (0, fe.__)("Hold Order", "ddwc-multipos")), (0, Lt.applyFilters)("ddwcpos_add_cart_actions_after_hold_order", "", this)) : null, (0, Lt.applyFilters)("ddwcpos_show_cart_pay_button_custom_check", !0, this) ? (0, e.createElement)(be, {
						className: "ddwcpos-cart-pay",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/pay"),
						onClick: function(e) {
							return t.handlePayClick(e)
						}
					}, (0, e.createElement)("p", null, (0, fe.__)("Proceed to Pay", "ddwc-multipos"), (0, e.createElement)("br", null), (0, e.createElement)("i", null, i)), (0, e.createElement)("p", null, (0, Ma.R)(parseFloat((0, Lt.applyFilters)("ddwcpos_modify_cart_total_filter", s.cart_total)))), (0, e.createElement)(Wn, null)) : null, (0, Lt.applyFilters)("ddwcpos_add_content_after_cart_pay_button", null, this)), u, (0, Lt.applyFilters)("ddwcpos_add_popup_in_cart_total_component", "", this, he.store))
				}
			}]), o
		}(n.Component);
		const Ns = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				ModifyDiscount: fs,
				ApplyCoupon: da,
				RemoveCoupon: pa,
				validateProductStock: ma,
				deleteNotValidProductsFromCart: _a,
				getCoupons: la,
				addToHold: cs,
				addNewCart: Ia,
				getDiscount: ps
			}, t))
		}))(Ts);
		const As = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
					}
				}]
			},
			name: "search",
			theme: "outlined"
		};
		var Ds = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: As
			}))
		};
		Ds.displayName = "SearchOutlined";
		const Rs = n.forwardRef(Ds);
		const Is = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
					}
				}]
			},
			name: "warning",
			theme: "filled"
		};
		var Ls = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Is
			}))
		};
		Ls.displayName = "WarningFilled";
		const Ms = n.forwardRef(Ls);

		function qs(t, e) {
			if (t.length !== e.length) return !1;
			for (var n = 0; n < t.length; n++)
				if (t[n] !== e[n]) return !1;
			return !0
		}
		const js = function(t, e) {
			var n;
			void 0 === e && (e = qs);
			var r, o = [],
				i = !1;
			return function() {
				for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
				return i && n === this && e(a, o) || (r = t.apply(this, a), i = !0, n = this, o = a), r
			}
		};
		var Bs = "object" == typeof performance && "function" == typeof performance.now ? function() {
			return performance.now()
		} : function() {
			return Date.now()
		};

		function Fs(t) {
			cancelAnimationFrame(t.id)
		}

		function Hs(t, e) {
			var n = Bs();
			var r = {
				id: requestAnimationFrame((function o() {
					Bs() - n >= e ? t.call(null) : r.id = requestAnimationFrame(o)
				}))
			};
			return r
		}
		var Us = -1;
		var Vs = null;

		function zs(t) {
			if (void 0 === t && (t = !1), null === Vs || t) {
				var e = document.createElement("div"),
					n = e.style;
				n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
				var r = document.createElement("div"),
					o = r.style;
				return o.width = "100px", o.height = "100px", e.appendChild(r), document.body.appendChild(e), e.scrollLeft > 0 ? Vs = "positive-descending" : (e.scrollLeft = 1, Vs = 0 === e.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(e), Vs
			}
			return Vs
		}
		var Ws = function(t) {
			var e = t.columnIndex;
			t.data;
			return t.rowIndex + ":" + e
		};

		function Gs(e) {
			var r, o, i = e.getColumnOffset,
				a = e.getColumnStartIndexForOffset,
				c = e.getColumnStopIndexForStartIndex,
				l = e.getColumnWidth,
				u = e.getEstimatedTotalHeight,
				d = e.getEstimatedTotalWidth,
				p = e.getOffsetForColumnAndAlignment,
				h = e.getOffsetForRowAndAlignment,
				m = e.getRowHeight,
				_ = e.getRowOffset,
				g = e.getRowStartIndexForOffset,
				v = e.getRowStopIndexForStartIndex,
				y = e.initInstanceProps,
				w = e.shouldResetStyleCacheOnItemSizeChange,
				b = e.validateProps;
			return o = r = function(e) {
				function r(t) {
					var n;
					return (n = e.call(this, t) || this)._instanceProps = y(n.props, f(f(n))), n._resetIsScrollingTimeoutId = null, n._outerRef = void 0, n.state = {
						instance: f(f(n)),
						isScrolling: !1,
						horizontalScrollDirection: "forward",
						scrollLeft: "number" == typeof n.props.initialScrollLeft ? n.props.initialScrollLeft : 0,
						scrollTop: "number" == typeof n.props.initialScrollTop ? n.props.initialScrollTop : 0,
						scrollUpdateWasRequested: !1,
						verticalScrollDirection: "forward"
					}, n._callOnItemsRendered = void 0, n._callOnItemsRendered = js((function(t, e, r, o, i, a, s, c) {
						return n.props.onItemsRendered({
							overscanColumnStartIndex: t,
							overscanColumnStopIndex: e,
							overscanRowStartIndex: r,
							overscanRowStopIndex: o,
							visibleColumnStartIndex: i,
							visibleColumnStopIndex: a,
							visibleRowStartIndex: s,
							visibleRowStopIndex: c
						})
					})), n._callOnScroll = void 0, n._callOnScroll = js((function(t, e, r, o, i) {
						return n.props.onScroll({
							horizontalScrollDirection: r,
							scrollLeft: t,
							scrollTop: e,
							verticalScrollDirection: o,
							scrollUpdateWasRequested: i
						})
					})), n._getItemStyle = void 0, n._getItemStyle = function(t, e) {
						var r, o = n.props,
							a = o.columnWidth,
							s = o.direction,
							c = o.rowHeight,
							u = n._getItemStyleCache(w && a, w && s, w && c),
							d = t + ":" + e;
						if (u.hasOwnProperty(d)) r = u[d];
						else {
							var p = i(n.props, e, n._instanceProps),
								f = "rtl" === s;
							u[d] = r = {
								position: "absolute",
								left: f ? void 0 : p,
								right: f ? p : void 0,
								top: _(n.props, t, n._instanceProps),
								height: m(n.props, t, n._instanceProps),
								width: l(n.props, e, n._instanceProps)
							}
						}
						return r
					}, n._getItemStyleCache = void 0, n._getItemStyleCache = js((function(t, e, n) {
						return {}
					})), n._onScroll = function(t) {
						var e = t.currentTarget,
							r = e.clientHeight,
							o = e.clientWidth,
							i = e.scrollLeft,
							a = e.scrollTop,
							s = e.scrollHeight,
							c = e.scrollWidth;
						n.setState((function(t) {
							if (t.scrollLeft === i && t.scrollTop === a) return null;
							var e = n.props.direction,
								l = i;
							if ("rtl" === e) switch (zs()) {
								case "negative":
									l = -i;
									break;
								case "positive-descending":
									l = c - o - i
							}
							l = Math.max(0, Math.min(l, c - o));
							var u = Math.max(0, Math.min(a, s - r));
							return {
								isScrolling: !0,
								horizontalScrollDirection: t.scrollLeft < i ? "forward" : "backward",
								scrollLeft: l,
								scrollTop: u,
								verticalScrollDirection: t.scrollTop < a ? "forward" : "backward",
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._outerRefSetter = function(t) {
						var e = n.props.outerRef;
						n._outerRef = t, "function" == typeof e ? e(t) : null != e && "object" == typeof e && e.hasOwnProperty("current") && (e.current = t)
					}, n._resetIsScrollingDebounced = function() {
						null !== n._resetIsScrollingTimeoutId && Fs(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = Hs(n._resetIsScrolling, 150)
					}, n._resetIsScrolling = function() {
						n._resetIsScrollingTimeoutId = null, n.setState({
							isScrolling: !1
						}, (function() {
							n._getItemStyleCache(-1)
						}))
					}, n
				}
				s(r, e), r.getDerivedStateFromProps = function(t, e) {
					return Ks(t, e), b(t), null
				};
				var o = r.prototype;
				return o.scrollTo = function(t) {
					var e = t.scrollLeft,
						n = t.scrollTop;
					void 0 !== e && (e = Math.max(0, e)), void 0 !== n && (n = Math.max(0, n)), this.setState((function(t) {
						return void 0 === e && (e = t.scrollLeft), void 0 === n && (n = t.scrollTop), t.scrollLeft === e && t.scrollTop === n ? null : {
							horizontalScrollDirection: t.scrollLeft < e ? "forward" : "backward",
							scrollLeft: e,
							scrollTop: n,
							scrollUpdateWasRequested: !0,
							verticalScrollDirection: t.scrollTop < n ? "forward" : "backward"
						}
					}), this._resetIsScrollingDebounced)
				}, o.scrollToItem = function(t) {
					var e = t.align,
						n = void 0 === e ? "auto" : e,
						r = t.columnIndex,
						o = t.rowIndex,
						i = this.props,
						a = i.columnCount,
						s = i.height,
						c = i.rowCount,
						l = i.width,
						f = this.state,
						m = f.scrollLeft,
						_ = f.scrollTop,
						g = function(t) {
							if (void 0 === t && (t = !1), -1 === Us || t) {
								var e = document.createElement("div"),
									n = e.style;
								n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(e), Us = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
							}
							return Us
						}();
					void 0 !== r && (r = Math.max(0, Math.min(r, a - 1))), void 0 !== o && (o = Math.max(0, Math.min(o, c - 1)));
					var v = u(this.props, this._instanceProps),
						y = d(this.props, this._instanceProps) > l ? g : 0,
						w = v > s ? g : 0;
					this.scrollTo({
						scrollLeft: void 0 !== r ? p(this.props, r, n, m, this._instanceProps, w) : m,
						scrollTop: void 0 !== o ? h(this.props, o, n, _, this._instanceProps, y) : _
					})
				}, o.componentDidMount = function() {
					var t = this.props,
						e = t.initialScrollLeft,
						n = t.initialScrollTop;
					if (null != this._outerRef) {
						var r = this._outerRef;
						"number" == typeof e && (r.scrollLeft = e), "number" == typeof n && (r.scrollTop = n)
					}
					this._callPropsCallbacks()
				}, o.componentDidUpdate = function() {
					var t = this.props.direction,
						e = this.state,
						n = e.scrollLeft,
						r = e.scrollTop;
					if (e.scrollUpdateWasRequested && null != this._outerRef) {
						var o = this._outerRef;
						if ("rtl" === t) switch (zs()) {
							case "negative":
								o.scrollLeft = -n;
								break;
							case "positive-ascending":
								o.scrollLeft = n;
								break;
							default:
								var i = o.clientWidth,
									a = o.scrollWidth;
								o.scrollLeft = a - i - n
						} else o.scrollLeft = Math.max(0, n);
						o.scrollTop = Math.max(0, r)
					}
					this._callPropsCallbacks()
				}, o.componentWillUnmount = function() {
					null !== this._resetIsScrollingTimeoutId && Fs(this._resetIsScrollingTimeoutId)
				}, o.render = function() {
					var e = this.props,
						r = e.children,
						o = e.className,
						i = e.columnCount,
						a = e.direction,
						s = e.height,
						c = e.innerRef,
						l = e.innerElementType,
						p = e.innerTagName,
						f = e.itemData,
						h = e.itemKey,
						m = void 0 === h ? Ws : h,
						_ = e.outerElementType,
						g = e.outerTagName,
						v = e.rowCount,
						y = e.style,
						w = e.useIsScrolling,
						b = e.width,
						E = this.state.isScrolling,
						O = this._getHorizontalRangeToRender(),
						S = O[0],
						C = O[1],
						x = this._getVerticalRangeToRender(),
						P = x[0],
						k = x[1],
						T = [];
					if (i > 0 && v)
						for (var N = P; N <= k; N++)
							for (var A = S; A <= C; A++) T.push((0, n.createElement)(r, {
								columnIndex: A,
								data: f,
								isScrolling: w ? E : void 0,
								key: m({
									columnIndex: A,
									data: f,
									rowIndex: N
								}),
								rowIndex: N,
								style: this._getItemStyle(N, A)
							}));
					var D = u(this.props, this._instanceProps),
						R = d(this.props, this._instanceProps);
					return (0, n.createElement)(_ || g || "div", {
						className: o,
						onScroll: this._onScroll,
						ref: this._outerRefSetter,
						style: t({
							position: "relative",
							height: s,
							width: b,
							overflow: "auto",
							WebkitOverflowScrolling: "touch",
							willChange: "transform",
							direction: a
						}, y)
					}, (0, n.createElement)(l || p || "div", {
						children: T,
						ref: c,
						style: {
							height: D,
							pointerEvents: E ? "none" : void 0,
							width: R
						}
					}))
				}, o._callPropsCallbacks = function() {
					var t = this.props,
						e = t.columnCount,
						n = t.onItemsRendered,
						r = t.onScroll,
						o = t.rowCount;
					if ("function" == typeof n && e > 0 && o > 0) {
						var i = this._getHorizontalRangeToRender(),
							a = i[0],
							s = i[1],
							c = i[2],
							l = i[3],
							u = this._getVerticalRangeToRender(),
							d = u[0],
							p = u[1],
							f = u[2],
							h = u[3];
						this._callOnItemsRendered(a, s, d, p, c, l, f, h)
					}
					if ("function" == typeof r) {
						var m = this.state,
							_ = m.horizontalScrollDirection,
							g = m.scrollLeft,
							v = m.scrollTop,
							y = m.scrollUpdateWasRequested,
							w = m.verticalScrollDirection;
						this._callOnScroll(g, v, _, w, y)
					}
				}, o._getHorizontalRangeToRender = function() {
					var t = this.props,
						e = t.columnCount,
						n = t.overscanColumnCount,
						r = t.overscanColumnsCount,
						o = t.overscanCount,
						i = t.rowCount,
						s = this.state,
						l = s.horizontalScrollDirection,
						u = s.isScrolling,
						d = s.scrollLeft,
						p = n || r || o || 1;
					if (0 === e || 0 === i) return [0, 0, 0, 0];
					var f = a(this.props, d, this._instanceProps),
						h = c(this.props, f, d, this._instanceProps),
						m = u && "backward" !== l ? 1 : Math.max(1, p),
						_ = u && "forward" !== l ? 1 : Math.max(1, p);
					return [Math.max(0, f - m), Math.max(0, Math.min(e - 1, h + _)), f, h]
				}, o._getVerticalRangeToRender = function() {
					var t = this.props,
						e = t.columnCount,
						n = t.overscanCount,
						r = t.overscanRowCount,
						o = t.overscanRowsCount,
						i = t.rowCount,
						a = this.state,
						s = a.isScrolling,
						c = a.verticalScrollDirection,
						l = a.scrollTop,
						u = r || o || n || 1;
					if (0 === e || 0 === i) return [0, 0, 0, 0];
					var d = g(this.props, l, this._instanceProps),
						p = v(this.props, d, l, this._instanceProps),
						f = s && "backward" !== c ? 1 : Math.max(1, u),
						h = s && "forward" !== c ? 1 : Math.max(1, u);
					return [Math.max(0, d - f), Math.max(0, Math.min(i - 1, p + h)), d, p]
				}, r
			}(n.PureComponent), r.defaultProps = {
				direction: "ltr",
				itemData: void 0,
				useIsScrolling: !1
			}, o
		}
		var Ks = function(t, e) {
				t.children, t.direction, t.height, t.innerTagName, t.outerTagName, t.overscanColumnsCount, t.overscanCount, t.overscanRowsCount, t.width, e.instance
			},
			$s = function(t, e) {
				return t
			};

		function Qs(e) {
			var r, o, i = e.getItemOffset,
				a = e.getEstimatedTotalSize,
				c = e.getItemSize,
				l = e.getOffsetForIndexAndAlignment,
				u = e.getStartIndexForOffset,
				d = e.getStopIndexForStartIndex,
				p = e.initInstanceProps,
				h = e.shouldResetStyleCacheOnItemSizeChange,
				m = e.validateProps;
			return o = r = function(e) {
				function r(t) {
					var n;
					return (n = e.call(this, t) || this)._instanceProps = p(n.props, f(f(n))), n._outerRef = void 0, n._resetIsScrollingTimeoutId = null, n.state = {
						instance: f(f(n)),
						isScrolling: !1,
						scrollDirection: "forward",
						scrollOffset: "number" == typeof n.props.initialScrollOffset ? n.props.initialScrollOffset : 0,
						scrollUpdateWasRequested: !1
					}, n._callOnItemsRendered = void 0, n._callOnItemsRendered = js((function(t, e, r, o) {
						return n.props.onItemsRendered({
							overscanStartIndex: t,
							overscanStopIndex: e,
							visibleStartIndex: r,
							visibleStopIndex: o
						})
					})), n._callOnScroll = void 0, n._callOnScroll = js((function(t, e, r) {
						return n.props.onScroll({
							scrollDirection: t,
							scrollOffset: e,
							scrollUpdateWasRequested: r
						})
					})), n._getItemStyle = void 0, n._getItemStyle = function(t) {
						var e, r = n.props,
							o = r.direction,
							a = r.itemSize,
							s = r.layout,
							l = n._getItemStyleCache(h && a, h && s, h && o);
						if (l.hasOwnProperty(t)) e = l[t];
						else {
							var u = i(n.props, t, n._instanceProps),
								d = c(n.props, t, n._instanceProps),
								p = "horizontal" === o || "horizontal" === s,
								f = "rtl" === o,
								m = p ? u : 0;
							l[t] = e = {
								position: "absolute",
								left: f ? void 0 : m,
								right: f ? m : void 0,
								top: p ? 0 : u,
								height: p ? "100%" : d,
								width: p ? d : "100%"
							}
						}
						return e
					}, n._getItemStyleCache = void 0, n._getItemStyleCache = js((function(t, e, n) {
						return {}
					})), n._onScrollHorizontal = function(t) {
						var e = t.currentTarget,
							r = e.clientWidth,
							o = e.scrollLeft,
							i = e.scrollWidth;
						n.setState((function(t) {
							if (t.scrollOffset === o) return null;
							var e = n.props.direction,
								a = o;
							if ("rtl" === e) switch (zs()) {
								case "negative":
									a = -o;
									break;
								case "positive-descending":
									a = i - r - o
							}
							return a = Math.max(0, Math.min(a, i - r)), {
								isScrolling: !0,
								scrollDirection: t.scrollOffset < o ? "forward" : "backward",
								scrollOffset: a,
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._onScrollVertical = function(t) {
						var e = t.currentTarget,
							r = e.clientHeight,
							o = e.scrollHeight,
							i = e.scrollTop;
						n.setState((function(t) {
							if (t.scrollOffset === i) return null;
							var e = Math.max(0, Math.min(i, o - r));
							return {
								isScrolling: !0,
								scrollDirection: t.scrollOffset < e ? "forward" : "backward",
								scrollOffset: e,
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._outerRefSetter = function(t) {
						var e = n.props.outerRef;
						n._outerRef = t, "function" == typeof e ? e(t) : null != e && "object" == typeof e && e.hasOwnProperty("current") && (e.current = t)
					}, n._resetIsScrollingDebounced = function() {
						null !== n._resetIsScrollingTimeoutId && Fs(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = Hs(n._resetIsScrolling, 150)
					}, n._resetIsScrolling = function() {
						n._resetIsScrollingTimeoutId = null, n.setState({
							isScrolling: !1
						}, (function() {
							n._getItemStyleCache(-1, null)
						}))
					}, n
				}
				s(r, e), r.getDerivedStateFromProps = function(t, e) {
					return Zs(t, e), m(t), null
				};
				var o = r.prototype;
				return o.scrollTo = function(t) {
					t = Math.max(0, t), this.setState((function(e) {
						return e.scrollOffset === t ? null : {
							scrollDirection: e.scrollOffset < t ? "forward" : "backward",
							scrollOffset: t,
							scrollUpdateWasRequested: !0
						}
					}), this._resetIsScrollingDebounced)
				}, o.scrollToItem = function(t, e) {
					void 0 === e && (e = "auto");
					var n = this.props.itemCount,
						r = this.state.scrollOffset;
					t = Math.max(0, Math.min(t, n - 1)), this.scrollTo(l(this.props, t, e, r, this._instanceProps))
				}, o.componentDidMount = function() {
					var t = this.props,
						e = t.direction,
						n = t.initialScrollOffset,
						r = t.layout;
					if ("number" == typeof n && null != this._outerRef) {
						var o = this._outerRef;
						"horizontal" === e || "horizontal" === r ? o.scrollLeft = n : o.scrollTop = n
					}
					this._callPropsCallbacks()
				}, o.componentDidUpdate = function() {
					var t = this.props,
						e = t.direction,
						n = t.layout,
						r = this.state,
						o = r.scrollOffset;
					if (r.scrollUpdateWasRequested && null != this._outerRef) {
						var i = this._outerRef;
						if ("horizontal" === e || "horizontal" === n)
							if ("rtl" === e) switch (zs()) {
								case "negative":
									i.scrollLeft = -o;
									break;
								case "positive-ascending":
									i.scrollLeft = o;
									break;
								default:
									var a = i.clientWidth,
										s = i.scrollWidth;
									i.scrollLeft = s - a - o
							} else i.scrollLeft = o;
							else i.scrollTop = o
					}
					this._callPropsCallbacks()
				}, o.componentWillUnmount = function() {
					null !== this._resetIsScrollingTimeoutId && Fs(this._resetIsScrollingTimeoutId)
				}, o.render = function() {
					var e = this.props,
						r = e.children,
						o = e.className,
						i = e.direction,
						s = e.height,
						c = e.innerRef,
						l = e.innerElementType,
						u = e.innerTagName,
						d = e.itemCount,
						p = e.itemData,
						f = e.itemKey,
						h = void 0 === f ? $s : f,
						m = e.layout,
						_ = e.outerElementType,
						g = e.outerTagName,
						v = e.style,
						y = e.useIsScrolling,
						w = e.width,
						b = this.state.isScrolling,
						E = "horizontal" === i || "horizontal" === m,
						O = E ? this._onScrollHorizontal : this._onScrollVertical,
						S = this._getRangeToRender(),
						C = S[0],
						x = S[1],
						P = [];
					if (d > 0)
						for (var k = C; k <= x; k++) P.push((0, n.createElement)(r, {
							data: p,
							key: h(k, p),
							index: k,
							isScrolling: y ? b : void 0,
							style: this._getItemStyle(k)
						}));
					var T = a(this.props, this._instanceProps);
					return (0, n.createElement)(_ || g || "div", {
						className: o,
						onScroll: O,
						ref: this._outerRefSetter,
						style: t({
							position: "relative",
							height: s,
							width: w,
							overflow: "auto",
							WebkitOverflowScrolling: "touch",
							willChange: "transform",
							direction: i
						}, v)
					}, (0, n.createElement)(l || u || "div", {
						children: P,
						ref: c,
						style: {
							height: E ? "100%" : T,
							pointerEvents: b ? "none" : void 0,
							width: E ? T : "100%"
						}
					}))
				}, o._callPropsCallbacks = function() {
					if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
						var t = this._getRangeToRender(),
							e = t[0],
							n = t[1],
							r = t[2],
							o = t[3];
						this._callOnItemsRendered(e, n, r, o)
					}
					if ("function" == typeof this.props.onScroll) {
						var i = this.state,
							a = i.scrollDirection,
							s = i.scrollOffset,
							c = i.scrollUpdateWasRequested;
						this._callOnScroll(a, s, c)
					}
				}, o._getRangeToRender = function() {
					var t = this.props,
						e = t.itemCount,
						n = t.overscanCount,
						r = this.state,
						o = r.isScrolling,
						i = r.scrollDirection,
						a = r.scrollOffset;
					if (0 === e) return [0, 0, 0, 0];
					var s = u(this.props, a, this._instanceProps),
						c = d(this.props, s, a, this._instanceProps),
						l = o && "backward" !== i ? 1 : Math.max(1, n),
						p = o && "forward" !== i ? 1 : Math.max(1, n);
					return [Math.max(0, s - l), Math.max(0, Math.min(e - 1, c + p)), s, c]
				}, r
			}(n.PureComponent), r.defaultProps = {
				direction: "ltr",
				itemData: void 0,
				layout: "vertical",
				overscanCount: 2,
				useIsScrolling: !1
			}, o
		}
		var Zs = function(t, e) {
				t.children, t.direction, t.height, t.layout, t.innerTagName, t.outerTagName, t.width, e.instance
			},
			Ys = Gs({
				getColumnOffset: function(t, e) {
					return e * t.columnWidth
				},
				getColumnWidth: function(t, e) {
					return t.columnWidth
				},
				getRowOffset: function(t, e) {
					return e * t.rowHeight
				},
				getRowHeight: function(t, e) {
					return t.rowHeight
				},
				getEstimatedTotalHeight: function(t) {
					var e = t.rowCount;
					return t.rowHeight * e
				},
				getEstimatedTotalWidth: function(t) {
					var e = t.columnCount;
					return t.columnWidth * e
				},
				getOffsetForColumnAndAlignment: function(t, e, n, r, o, i) {
					var a = t.columnCount,
						s = t.columnWidth,
						c = t.width,
						l = Math.max(0, a * s - c),
						u = Math.min(l, e * s),
						d = Math.max(0, e * s - c + i + s);
					switch ("smart" === n && (n = r >= d - c && r <= u + c ? "auto" : "center"), n) {
						case "start":
							return u;
						case "end":
							return d;
						case "center":
							var p = Math.round(d + (u - d) / 2);
							return p < Math.ceil(c / 2) ? 0 : p > l + Math.floor(c / 2) ? l : p;
						case "auto":
						default:
							return r >= d && r <= u ? r : d > u || r < d ? d : u
					}
				},
				getOffsetForRowAndAlignment: function(t, e, n, r, o, i) {
					var a = t.rowHeight,
						s = t.height,
						c = t.rowCount,
						l = Math.max(0, c * a - s),
						u = Math.min(l, e * a),
						d = Math.max(0, e * a - s + i + a);
					switch ("smart" === n && (n = r >= d - s && r <= u + s ? "auto" : "center"), n) {
						case "start":
							return u;
						case "end":
							return d;
						case "center":
							var p = Math.round(d + (u - d) / 2);
							return p < Math.ceil(s / 2) ? 0 : p > l + Math.floor(s / 2) ? l : p;
						case "auto":
						default:
							return r >= d && r <= u ? r : d > u || r < d ? d : u
					}
				},
				getColumnStartIndexForOffset: function(t, e) {
					var n = t.columnWidth,
						r = t.columnCount;
					return Math.max(0, Math.min(r - 1, Math.floor(e / n)))
				},
				getColumnStopIndexForStartIndex: function(t, e, n) {
					var r = t.columnWidth,
						o = t.columnCount,
						i = t.width,
						a = e * r,
						s = Math.ceil((i + n - a) / r);
					return Math.max(0, Math.min(o - 1, e + s - 1))
				},
				getRowStartIndexForOffset: function(t, e) {
					var n = t.rowHeight,
						r = t.rowCount;
					return Math.max(0, Math.min(r - 1, Math.floor(e / n)))
				},
				getRowStopIndexForStartIndex: function(t, e, n) {
					var r = t.rowHeight,
						o = t.rowCount,
						i = t.height,
						a = e * r,
						s = Math.ceil((i + n - a) / r);
					return Math.max(0, Math.min(o - 1, e + s - 1))
				},
				initInstanceProps: function(t) {},
				shouldResetStyleCacheOnItemSizeChange: !0,
				validateProps: function(t) {
					t.columnWidth, t.rowHeight
				}
			}),
			Js = Qs({
				getItemOffset: function(t, e) {
					return e * t.itemSize
				},
				getItemSize: function(t, e) {
					return t.itemSize
				},
				getEstimatedTotalSize: function(t) {
					var e = t.itemCount;
					return t.itemSize * e
				},
				getOffsetForIndexAndAlignment: function(t, e, n, r) {
					var o = t.direction,
						i = t.height,
						a = t.itemCount,
						s = t.itemSize,
						c = t.layout,
						l = t.width,
						u = "horizontal" === o || "horizontal" === c ? l : i,
						d = Math.max(0, a * s - u),
						p = Math.min(d, e * s),
						f = Math.max(0, e * s - u + s);
					switch ("smart" === n && (n = r >= f - u && r <= p + u ? "auto" : "center"), n) {
						case "start":
							return p;
						case "end":
							return f;
						case "center":
							var h = Math.round(f + (p - f) / 2);
							return h < Math.ceil(u / 2) ? 0 : h > d + Math.floor(u / 2) ? d : h;
						case "auto":
						default:
							return r >= f && r <= p ? r : r < f ? f : p
					}
				},
				getStartIndexForOffset: function(t, e) {
					var n = t.itemCount,
						r = t.itemSize;
					return Math.max(0, Math.min(n - 1, Math.floor(e / r)))
				},
				getStopIndexForStartIndex: function(t, e, n) {
					var r = t.direction,
						o = t.height,
						i = t.itemCount,
						a = t.itemSize,
						s = t.layout,
						c = t.width,
						l = e * a,
						u = "horizontal" === r || "horizontal" === s ? c : o,
						d = Math.ceil((u + n - l) / a);
					return Math.max(0, Math.min(i - 1, e + d - 1))
				},
				initInstanceProps: function(t) {},
				shouldResetStyleCacheOnItemSizeChange: !0,
				validateProps: function(t) {
					t.itemSize
				}
			});

		function Xs(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var tc = function(t) {
			le(o, t);
			var r = Xs(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).componentDidMount = function() {
					e.props.getTransactions(e.props.outlet.id), e.props.getOrders(e.props.outlet.id), e.props.getSettings()
				}, e.handleManualTransactionInput = function(t, n) {
					13 == t.which ? e.handleManualTransactionSubmit() : e.setState(ke({}, n, t.target.value))
				}, e.handleChangeTransactionType = function(t) {
					e.setState({
						transactionType: t
					})
				}, e.handleToggleTransactionPopup = function() {
					e.setState({
						showTransactionPopup: !e.state.showTransactionPopup
					})
				}, e.handleTransactionSearch = function(t) {
					e.setState({
						search: t.target.value
					})
				}, e.handleManualTransactionSubmit = function() {
					if (Ri()) {
						e.handleToggleTransactionPopup();
						var t = {
							in: "in" == e.state.transactionType ? e.state.transactionAmount : "",
							out: "out" == e.state.transactionType ? e.state.transactionAmount : "",
							outlet_id: e.props.outlet.id,
							method: "manual",
							reference: e.state.transactionReference
						};
						e.props.saveTransaction(t)
					} else he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Transaction cannot be generated in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.state = (0, Lt.applyFilters)("ddwcpos_modify_state_in_statistics_component", {
					search: "",
					showTransactionPopup: !1,
					transactionAmount: "",
					transactionReference: "",
					transactionType: "in"
				}, f(e)), e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = 0,
						o = 0,
						i = 0,
						a = this.props.transactions;
					a.forEach((function(t) {
						"opencash" == t.method ? r = parseFloat(t.in) : "cash" == t.method || "refund" == t.method ? (t.in && (o += parseFloat(t.in)), t.out && (o -= parseFloat(t.out))) : "manual" == t.method && (t.in && (i += parseFloat(t.in)), t.out && (i -= parseFloat(t.out)))
					})), i += r + o;
					var s = this.state.search.toLowerCase();
					s && (a = a.filter((function(t) {
						return !!(-1 != t.id.toLowerCase().indexOf(s) || t.order_id && -1 != t.order_id.toString().toLowerCase().indexOf(s) || -1 != t.method.toLowerCase().indexOf(s) || -1 != t.reference.toLowerCase().indexOf(s))
					}))), a.sort((function(t, e) {
						return t.id < e.id ? 1 : e.id < t.id ? -1 : 0
					}));
					var c = this.props.orders.list.filter((function(t) {
							var e = new Date(t.order_created),
								n = new Date((0, Lt.applyFilters)("ddwcpos_modify_current_date_for_transactions", ddwcposPOSObj.current_date));
							return e.getTime() >= n.getTime()
						})),
						l = (0, Lt.applyFilters)("ddwcpos_modify_today_total_sale_amount", c.reduce((function(t, e) {
							return t + parseFloat(e.order_total - e.order_refunded)
						}), 0), this),
						u = (0, Lt.applyFilters)("ddwcpos_modify_transactions_list_row_height", 52),
						d = "";
					if (this.state.showTransactionPopup) {
						var p = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Manual Transaction", "ddwc-multipos")), (0, e.createElement)("div", {
								className: "ddwcpos-popup-options-group"
							}, (0, e.createElement)("h3", null, (0, fe.__)("Select Transaction Type", "ddwc-multipos")), (0, e.createElement)("div", {
								className: "ddwcpos-popup-options"
							}, (0, e.createElement)("p", {
								onClick: function(e) {
									return t.handleChangeTransactionType("in")
								},
								className: "in" == this.state.transactionType ? "ddwcpos-selected-options" : null
							}, (0, fe.__)("In", "ddwc-multipos")), (0, e.createElement)("p", {
								onClick: function(e) {
									return t.handleChangeTransactionType("out")
								},
								className: "out" == this.state.transactionType ? "ddwcpos-selected-options" : null
							}, (0, fe.__)("Out", "ddwc-multipos")))), (0, e.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(e) {
									return t.handleManualTransactionInput(e, "transactionAmount")
								},
								placeholder: (0, fe.__)("Enter Amount", "ddwc-multipos"),
								autoFocus: !0
							}), (0, e.createElement)("input", {
								type: "text",
								onKeyUp: function(e) {
									return t.handleManualTransactionInput(e, "transactionReference")
								},
								placeholder: (0, fe.__)("Enter Reason (Optional)", "ddwc-multipos")
							})),
							f = {
								handleOverlay: this.handleToggleTransactionPopup,
								popupContent: p,
								notDisabled: this.state.transactionAmount,
								handleSuccess: this.handleManualTransactionSubmit,
								handleCancel: this.handleToggleTransactionPopup
							};
						d = (0, e.createElement)(Ps, f)
					}
					return (0, e.createElement)("div", {
						className: "ddwcpos-statistics-tab-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-statistics-summary"
					}, (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Open Cash Drawer Amount", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(r))), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Today's Cash Sale", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(o))), (0, Lt.applyFilters)("ddwcpos_add_content_after_today_cash_sale", "", this), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Today's Total Sale", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(l))), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Expected Drawer Amount", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(i)))), (0, e.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, e.createElement)("h2", null, (0, fe.__)("Today's Transactions", "ddwc-multipos")), (0, e.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						value: this.state.search,
						placeholder: (0, fe.__)("Search Transaction by ID or Order ID", "ddwc-multipos"),
						onChange: function(e) {
							return t.handleTransactionSearch(e)
						},
						autoComplete: "off"
					})), (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleToggleTransactionPopup,
						title: (0, fe.__)("Add Manual Transaction", "ddwc-multipos")
					}, (0, e.createElement)(Ua, null)), (0, Lt.applyFilters)("ddwcpos_add_content_after_add_transaction_button", null, this), (0, e.createElement)("span", null, a.length + " " + (0, fe.__)("Results", "ddwc-multipos"))), d, (0, Lt.applyFilters)("ddwcpos_add_content_after_manual_transaction_popup", null, this)), (0, e.createElement)("div", {
						className: "ddwcpos-transactions-list"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-list-heading-row"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-list-details"
					}, (0, e.createElement)("p", null, (0, fe.__)("Transaction ID", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("Order ID", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("In", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("Out", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("Method", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("Reference", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.__)("Date", "ddwc-multipos")), (0, Lt.applyFilters)("ddwcpos_add_more_column_after_date_in_today_transactions", "", this))), a.length ? (0, e.createElement)(Js, {
						className: "ddwcpos-list",
						height: 800,
						itemCount: a.length,
						itemSize: u
					}, (function(n) {
						var r = n.index,
							o = n.style,
							i = "ddwcpos-list-row";
						r % 2 != 0 && (i += " ddwcpos-odd-list-row");
						var s = "-";
						if ("opencash" == a[r].method) s = (0, fe.__)("Open Cash Drawer Amount", "ddwc-multipos");
						else if ("manual" == a[r].method) s = (0, fe.__)("Manual", "ddwc-multipos");
						else if ("split" == a[r].method) s = (0, fe.__)("Split", "ddwc-multipos");
						else if ("refund" == a[r].method) s = (0, fe.__)("Refund", "ddwc-multipos");
						else {
							var c = Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).filter((function(t) {
								return t.slug == a[r].method
							}));
							c.length && (s = c[0].name)
						}
						return (0, e.createElement)("div", {
							className: i,
							style: o
						}, (0, e.createElement)("div", {
							className: "ddwcpos-list-details"
						}, (0, e.createElement)("p", null, "#", a[r].id), (0, e.createElement)("p", null, a[r].order_id ? "#" + a[r].order_id : "-"), (0, e.createElement)("p", null, (0, e.createElement)("mark", {
							className: "instock"
						}, "+ ", (0, Ma.R)(a[r].in))), (0, e.createElement)("p", null, (0, e.createElement)("mark", {
							className: "required"
						}, "- ", (0, Ma.R)(a[r].out))), (0, e.createElement)("p", null, s), (0, e.createElement)("p", null, a[r].reference ? a[r].reference : "-"), (0, e.createElement)("p", null, a[r].date), (0, Lt.applyFilters)("ddwcpos_add_more_column_content_after_date_in_today_transactions", "", a[r], t)))
					})) : (0, e.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Transactions Found", "ddwc-multipos")))))
				}
			}]), o
		}(n.Component);
		const ec = q((function(t) {
			return {
				transactions: t.transactions,
				orders: t.orders,
				settings: t.settings
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getTransactions: rc,
				getOrders: cc,
				saveTransaction: oc,
				getSettings: Li
			}, t))
		}))(tc);
		var nc = function(t) {
				return {
					type: "TRANSACTIONS",
					transactions: t
				}
			},
			rc = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(e) {
					xi.table("transactions").where("date").startsWithIgnoreCase(ddwcposPOSObj.current_date).toArray().then((function(n) {
						n.length <= 0 ? (he.store.addNotification({
							title: (0, fe.__)("Loading Transactions", "ddwc-multipos"),
							message: (0, fe.__)("Loading Transactions in the POS", "ddwc-multipos"),
							type: "info",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), Ii(ddwcposPOSObj.API.GET_TRANSACTIONS_ENDPOINT, {
							outlet_id: t,
							date: (0, Lt.applyFilters)("ddwcpos_modify_current_date_for_transactions", ddwcposPOSObj.current_date)
						}).then((function(t) {
							t.length ? ic(t).then((function(n) {
								e(nc(t)), he.store.addNotification({
									title: (0, fe.__)("Transactions Loaded", "ddwc-multipos"),
									message: (0, fe.__)("All Transactions are loaded successfully.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								})
							})) : (he.store.addNotification({
								title: (0, fe.__)("No Transaction Found", "ddwc-multipos"),
								message: (0, fe.__)("No transaction has been generated for today yet in this outlet.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), e(nc([])))
						}))) : e(nc(n))
					}))
				}
			},
			oc = function(t) {
				return function(e) {
					Ii(ddwcposPOSObj.API.CREATE_TRANSACTION_ENDPOINT, t).then((function(n) {
						n.length && ic(n).then((function(n) {
							e(rc()), "opencash" == t.method ? he.store.addNotification({
								title: (0, fe.__)("Success", "ddwc-multipos"),
								message: (0, fe.__)("Open cash drawer amount is set successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : "manual" == t.method ? he.store.addNotification({
								title: (0, fe.__)("Success", "ddwc-multipos"),
								message: (0, fe.__)("Manual transaction has been generated successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : he.store.addNotification({
								title: (0, fe.__)("Success", "ddwc-multipos"),
								message: (0, fe.__)("Manual transaction is generated successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						}))
					}))
				}
			},
			ic = function(t) {
				return xi.transactions.bulkPut(t).then((function(t) {
					return t
				}))
			};

		function ac(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}
		var sc = function(t) {
				return {
					type: "ORDERS",
					orders: t
				}
			},
			cc = function(t) {
				return function(e) {
					uc().then((function(n) {
						if (n && n.length) lc().then((function(t) {
							e(sc({
								list: t,
								s: "",
								sorder: t
							}))
						}));
						else {
							he.store.addNotification({
								title: (0, fe.__)("Loading Orders", "ddwc-multipos"),
								message: (0, fe.__)("Loading Orders in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(t),
								per_page: -1,
								current_page: 0
							};
							dc(r, e)
						}
					}))
				}
			},
			lc = function() {
				return xi.table("orders").toArray().then((function(t) {
					return t || !1
				}))
			},
			uc = function() {
				return xi.table("orders").where("order_type").equals("online").toArray().then((function(t) {
					return t
				}))
			},
			dc = function t(e, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Ii(ddwcposPOSObj.API.GET_ORDERS_ENDPOINT, e).then((function(i) {
						"number" == typeof i ? (e.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++e.current_page, i > 0 ? t(e, n, i) : lc().then((function(t) {
							var e = {
								list: t,
								s: "",
								sorder: t
							};
							he.store.addNotification({
								title: (0, fe.__)("No Orders Found", "ddwc-multipos"),
								message: (0, fe.__)("No orders have been placed yet in this outlet.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), n(sc(e))
						}))) : i.length > 0 && xi.table("orders").bulkPut(i).then((function(i) {
							lc().then((function(t) {
								n(sc({
									list: t,
									s: "",
									sorder: t
								}))
							})), (r = r > 0 ? r - e.per_page : 0) > 0 ? (++e.current_page, t(e, n, r)) : (he.store.addNotification({
								title: (0, fe.__)("Orders Loaded", "ddwc-multipos"),
								message: (0, fe.__)("All Orders are loaded successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), o(!0))
						}))
					}))
				}))
			},
			pc = function(t, e) {
				return function(n, r) {
					return new Promise((function(o, i) {
						var a = r(),
							s = a.cart,
							c = a.customers.defaultCustomer,
							l = t.orderNote,
							u = t.sendToKitchen ? "preparing" : "",
							d = [],
							p = 0,
							f = "",
							h = "";
						if (t.paymentMethods.forEach((function(t) {
								if (t.amount) {
									p += parseFloat(t.amount);
									var e = !0;
									d.length && d.forEach((function(n, r) {
										n.slug == t.slug && (d[r].amount = parseFloat(d[r].amount) + parseFloat(t.amount), e = !1)
									})), e && d.push(function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {};
											e % 2 ? ac(Object(n), !0).forEach((function(e) {
												ke(t, e, n[e])
											})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ac(Object(n)).forEach((function(e) {
												Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
											}))
										}
										return t
									}({}, t))
								}
							})), (0, Lt.applyFilters)("ddwcpos_reject_order_creation_by_payment_methods_at_pos", !1, d, t, a, he.store)) i([]);
						else {
							t.paymentMethods.length > 1 ? (f = "split", h = (0, fe.__)("Split", "ddwc-multipos")) : (f = t.paymentMethods[0].slug, h = t.paymentMethods[0].name);
							var m = {
								order_note: l,
								kitchen_status: u,
								discount: a.discount.length ? a.discount[0].discount : [],
								coupons: a.coupon.length ? a.coupon[0].coupon : [],
								customer_id: c.id,
								products: a.cart.list[0].cart,
								payment_methods: d,
								table: a.tables.defaultTable
							};
							if (m = (0, Lt.applyFilters)("ddwcpos_modify_order_details", m, t, a, e)) {
								var _ = {
									outlet_id: a.outlet.id,
									order_data: JSON.stringify(m)
								};
								if (!ddwcposPOSObj.ddwcpos_configuration.offline_orders_enabled && Ri()) Ii(ddwcposPOSObj.API.CREATE_ORDER_ENDPOINT, _).then((function(t) {
									(0, Lt.doAction)("ddwcpos_after_creating_order_at_pos", t, xi), ic(t.transactions).then((function(t) {
										n(rc())
									})), fc(t), o(t)
								}));
								else {
									var g = parseFloat(s.total.cart_total),
										v = {},
										y = Math.floor(999999999 * Math.random() + 1e8),
										w = new Date;
									v.id = y, v.offline_id = y, v.order_id = y, v.order_subtotal = parseFloat(s.total.cart_subtotal), v.coupons = a.coupon.length ? a.coupon[0].coupon : [], v.order_date = w.toDateString() + " " + w.toLocaleTimeString(), v.discount = a.discount.length ? a.discount[0].discount : [], v.order_status_label = ddwcposPOSObj.ddwcpos_configuration.order_status_label, v.order_currency = ddwcposPOSObj.currency_code, v.order_currency_symbol = ddwcposPOSObj.currency_format_symbol, v.order_total = g, v.order_refunded = 0, v.order_note = l, v.products = a.cart.list[0].cart, v.payment_method = f, v.payment_title = h, v.payment_methods = d, v.tendered = p, v.order_type = "offline", v.customer_id = c.id, v.email = c.email, v.change = p - g > 0 ? p - g : 0, v.billing = c.billing, v.shipping = c.shipping, v.tax_lines = a.taxes, v.table = a.tables.defaultTable, v = (0, Lt.applyFilters)("ddwcpos_modify_order_details", v, t, a), fc(v), o(v)
								}
							} else o([])
						}
					}))
				}
			},
			fc = function(t) {
				return new Promise((function(e, n) {
					xi.table("orders").put(t).then((function(n) {
						e(t)
					}))
				}))
			},
			hc = function(t) {
				return function(e, n) {
					return new Promise((function(r, o) {
						var i = {
							outlet_id: n().outlet.id,
							offline_orders: JSON.stringify(t)
						};
						Ii(ddwcposPOSObj.API.CREATE_ORDER_ENDPOINT, i).then((function(t) {
							if (t.length > 0) {
								var n = t.map((function(t) {
									return (0, Lt.doAction)("ddwcpos_after_creating_order_at_pos", t, xi), ic(t.transactions), parseInt(t.offline_id)
								}));
								xi.orders.bulkDelete(n).then((function(n) {
									xi.orders.bulkPut(t).then((function(n) {
										e(rc()), r(t)
									}))
								}))
							}
						}))
					}))
				}
			},
			mc = function(t, e) {
				return function(n) {
					if (t) {
						var r = e.filter((function(e) {
							return -1 != e.order_id.toString().indexOf(t) || e.offline_id && -1 != e.offline_id.toString().indexOf(t) || e.billing.phone && -1 != e.billing.phone.toString().indexOf(t) || e.email && -1 != e.email.toString().indexOf(t) || e.billing.fname && -1 != e.billing.fname.toString().indexOf(t) || e.billing.lname && -1 != e.billing.lname.toString().indexOf(t)
						}));
						n(sc({
							list: e,
							s: t,
							sorder: r
						}))
					} else {
						n(sc({
							list: e,
							s: "",
							sorder: e
						}))
					}
				}
			},
			_c = function(t) {
				return function(e, n) {
					return new Promise((function(r, o) {
						var i = {
							outlet_id: n().outlet.id,
							refund_data: JSON.stringify(t)
						};
						Ii(ddwcposPOSObj.API.CREATE_REFUND_ENDPOINT, i).then((function(t) {
							ic(t.transactions).then((function(t) {
								e(rc())
							})), fc(t), r(t)
						}))
					}))
				}
			},
			gc = function(t, e) {
				return function(n, r) {
					return new Promise((function(n, r) {
						t.forEach((function(t) {
							"custom" !== t.type && e[t.item_id] && (t.parent && xi.products.where("product_id").equals(t.parent).toArray().then((function(n) {
								if (n.length) {
									var r = n[0].available_variations.map((function(n) {
										return n.variation_id == t.id && (n.stock = n.stock + e[t.item_id], n.stock_quantity = n.stock_quantity + e[t.item_id]), n
									}));
									xi.products.where("product_id").equals(t.parent).modify((function(t) {
										t.available_variations = r
									}))
								}
							})), xi.products.where("product_id").equals(t.id).modify((function(n) {
								n.stock = n.stock + e[t.item_id], n.stock_quantity = n.stock_quantity + e[t.item_id]
							})))
						})), n(!0)
					}))
				}
			},
			vc = function(t) {
				return {
					type: "CUSTOMERS",
					customers: t
				}
			},
			yc = function(t) {
				return function(e) {
					wc().then((function(n) {
						if (n && n.length) {
							var r = n.filter((function(t) {
									return t.default
								})),
								o = {
									list: n,
									defaultCustomer: r.length ? r[0] : {},
									s: "",
									searchedCustomers: n
								};
							e(vc(o))
						} else {
							he.store.addNotification({
								title: (0, fe.__)("Loading Customers", "ddwc-multipos"),
								message: (0, fe.__)("Loading Customers in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var i = {
								outlet_id: parseInt(t),
								per_page: -1,
								current_page: 0
							};
							bc(i, e)
						}
					}))
				}
			},
			wc = function() {
				return xi.table("customers").toArray().then((function(t) {
					return t || !1
				}))
			},
			bc = function t(e, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Ii(ddwcposPOSObj.API.GET_CUSTOMERS_ENDPOINT, e).then((function(i) {
						"number" == typeof i ? (e.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++e.current_page, i > 0 ? t(e, n, i) : wc().then((function(t) {
							var e = t.filter((function(t) {
									return t.default
								})),
								r = {
									list: t,
									defaultCustomer: e.length ? e[0] : {},
									s: "",
									searchedCustomers: t
								};
							n(vc(r))
						}))) : i.length > 0 && xi.table("customers").bulkPut(i).then((function(i) {
							wc().then((function(t) {
								var e = t.filter((function(t) {
										return t.default
									})),
									r = {
										list: t,
										defaultCustomer: e.length ? e[0] : {},
										s: "",
										searchedCustomers: t
									};
								n(vc(r))
							})), (r = r > 0 ? r - e.per_page : 0) > 0 ? (++e.current_page, t(e, n, r)) : (he.store.addNotification({
								title: (0, fe.__)("Customers Loaded", "ddwc-multipos"),
								message: (0, fe.__)("All Customers are loaded successfully", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), o(!0))
						}))
					}))
				}))
			},
			Ec = function(t, e, n) {
				return function(r) {
					if (t) xi.table("customers").where("first_name").startsWithIgnoreCase(t).or("last_name").startsWithIgnoreCase(t).or("email").startsWithIgnoreCase(t).or("phone").startsWithIgnoreCase(t).or("username").startsWithIgnoreCase(t).or("display_name").startsWithIgnoreCase(t).toArray().then((function(o) {
						var i = {
							list: e.list,
							defaultCustomer: n,
							s: t,
							searchedCustomers: o
						};
						r(vc(i))
					}));
					else {
						var o = {
							list: e.list,
							defaultCustomer: n,
							s: "",
							searchedCustomers: e.list
						};
						r(vc(o))
					}
				}
			},
			Oc = function(t) {
				return function(e, n) {
					var r = n().outlet.id;
					xi.table("customers").toCollection().modify((function(t) {
						t.default = 0
					})), xi.table("customers").update(t, {
						default: 1
					}).then((function(t) {
						e(yc(r)), he.store.addNotification({
							title: (0, fe.__)("Customer Set", "ddwc-multipos"),
							message: (0, fe.__)("Customer is set successfully for the order.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					}))
				}
			},
			Sc = function(t, e) {
				return function(n, r) {
					var o = {
						customer_data: t,
						outlet_id: parseInt(r().outlet.id)
					};
					return new Promise((function(t, i) {
						Ii(ddwcposPOSObj.API.MANAGE_CUSTOMER_ENDPOINT, o).then((function(t) {
							if (t.success) return xi.table("customers").put(t.data).then((function(o) {
								if (o) {
									e.props.handleResetEditCustomer(), he.store.addNotification({
										title: (0, fe.__)("Success", "ddwc-multipos"),
										message: t.message,
										type: "success",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
									var i = r().outlet.id;
									n(yc(i))
								}
							}));
							he.store.addNotification({
								title: (0, fe.__)("Error", "ddwc-multipos"),
								message: t.message,
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						}))
					}))
				}
			},
			Cc = function(t) {
				return function(e, n) {
					return new Promise((function(r, o) {
						Ii(ddwcposPOSObj.API.DELETE_CUSTOMER_ENDPOINT, {
							customer_id: t
						}).then((function(r) {
							r && r == t && xi.table("customers").where("id").equals(t).delete().then((function(t) {
								he.store.addNotification({
									title: (0, fe.__)("Success", "ddwc-multipos"),
									message: (0, fe.__)("Customer deleted successfully.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								});
								var r = n().outlet.id;
								e(yc(r))
							}))
						}))
					}))
				}
			};

		function xc(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Pc = function(r) {
			le(i, r);
			var o = xc(i);

			function i(t) {
				var e;
				return ae(this, i), (e = o.call(this, t)).componentDidMount = function() {
					e.props.getDiscount(), e.props.getCoupons(), e.props.getCart(), e.props.getHoldCarts(), e.props.getOrders(e.props.outlet.id), e.props.getTables(), window.addEventListener("online", (function() {
						return e.setState({
							online: !0
						})
					})), window.addEventListener("offline", (function() {
						return e.setState({
							online: !1
						})
					}))
				}, e.componentWillUnmount = function() {
					window.removeEventListener("online", (function() {
						return e.setState({
							online: !0
						})
					}), !1), window.removeEventListener("offline", (function() {
						return e.setState({
							online: !1
						})
					}), !1)
				}, e.handleResetCartButton = function() {
					e.props.cart.list.length ? e.props.clearIndexDB().then((function(t) {
						e.props.getDiscount(), e.props.getCoupons(), e.props.getCart()
					})) : he.store.addNotification({
						title: (0, fe.__)("Empty Cart", "ddwc-multipos"),
						message: (0, fe.__)("Cart is already empty.", "ddwc-multipos"),
						type: "info",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleToggleShowSelectTablePopup = function() {
					e.setState({
						showSelectTablePopup: !e.state.showSelectTablePopup
					})
				}, e.handleSelectMode = function(t) {
					e.handleToggleShowSelectTablePopup(), "dine_in" === t ? e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/all")) : "take_away" === t && e.props.updateDefaultTable()
				}, e.state = {
					showSelectTablePopup: !1,
					online: Ri()
				}, e
			}
			return ce(i, [{
				key: "render",
				value: function() {
					var r = this,
						o = this.props.cart.list,
						i = this.props.customers.defaultCustomer,
						a = this.props.tables.defaultTable,
						s = this.props.holdCarts.length,
						c = this.props.orders.sorder.filter((function(t) {
							return "offline" == t.order_type
						})).length,
						l = [];
					o.length > 0 && (l = o[0].cart.map((function(n, o) {
						return (0, e.createElement)(ts, t({
							key: o,
							cartProduct: n
						}, r.props))
					})));
					var u = {
							color: this.state.online ? "green" : "red"
						},
						d = "";
					Object.keys(i).length && (d = " " != (d = "".concat(i.first_name, " ").concat(i.last_name)) ? d : i.username);
					var p = {};
					"restaurant" == this.props.outlet.mode && (p.gridTemplateColumns = "max-content max-content auto auto"), p = (0, Lt.applyFilters)("ddwcpos_modify_cart_header_at_pos", p, this);
					var f = null;
					if (this.state.showSelectTablePopup) {
						var h = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Select Mode", "ddwc-multipos")), (0, e.createElement)("div", {
								className: "ddwcpos-mode-options"
							}, (0, e.createElement)("span", {
								onClick: function(t) {
									return r.handleSelectMode("dine_in")
								}
							}, (0, e.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, e.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, e.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							})))), (0, e.createElement)("p", null, (0, fe.__)("Dine in", "ddwc-multipos"))), (0, e.createElement)("span", {
								onClick: function(t) {
									return r.handleSelectMode("take_away")
								}
							}, (0, e.createElement)("svg", {
								"data-name": "Layer 1",
								id: "Layer_1",
								viewBox: "0 0 64 64",
								xmlns: "http://www.w3.org/2000/svg"
							}, (0, e.createElement)("path", {
								d: "M46.958,42.1712A14.9968,14.9968,0,0,0,33,28.0507V27a1,1,0,0,0-2,0v1.0507A14.9967,14.9967,0,0,0,17.042,42.1712,2.9918,2.9918,0,0,0,18,48H46a2.9918,2.9918,0,0,0,.958-5.8288ZM32,30A13.0086,13.0086,0,0,1,44.9493,42H19.0507A13.0086,13.0086,0,0,1,32,30ZM46,46H18a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2ZM56.9883,19.8481,55.04,7.1864A2.9831,2.9831,0,0,0,56,5V3a3.0033,3.0033,0,0,0-3-3H11A3.0033,3.0033,0,0,0,8,3V5a2.9831,2.9831,0,0,0,.96,2.1864L7.0117,19.8481A.9914.9914,0,0,0,7,20V61a3.0033,3.0033,0,0,0,3,3H54a3.0033,3.0033,0,0,0,3-3V20A.9914.9914,0,0,0,56.9883,19.8481ZM10,3a1.0009,1.0009,0,0,1,1-1H53a1.0009,1.0009,0,0,1,1,1V5a1.0009,1.0009,0,0,1-1,1H35V4a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1V6H11a1.0009,1.0009,0,0,1-1-1ZM33,5v6H31V5ZM55,61a1.0009,1.0009,0,0,1-1,1H10a1.0009,1.0009,0,0,1-1-1V20.0767L10.8584,8H29v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V8H53.1416L55,20.0767Z"
							})), (0, e.createElement)("p", null, (0, fe.__)("Take Away", "ddwc-multipos"))))),
							m = {
								handleOverlay: this.handleToggleShowSelectTablePopup,
								popupContent: h,
								hideActions: !0
							};
						f = (0, e.createElement)(Ps, m)
					}
					return (0, e.createElement)("div", {
						className: "ddwcpos-cart-wrapper"
					}, (0, Lt.applyFilters)("ddwcpos_show_cart_header_custom_check", !0, this) ? (0, e.createElement)("div", {
						className: "ddwcpos-cart-header",
						style: p
					}, (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						style: u,
						title: this.state.online ? (0, fe.__)("Online", "ddwc-multipos") : (0, fe.__)("Offline", "ddwc-multipos")
					}, (0, e.createElement)($i, null)), (0, e.createElement)(be, {
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
					}, (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, fe.__)("Sync Offline Orders", "ddwc-multipos")
					}, c ? (0, e.createElement)("span", {
						className: "ddwcpos-card-count"
					}, c) : null, (0, e.createElement)(Yi, null))), (0, e.createElement)(be, {
						className: "ddwcpos-button",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/customers")
					}, Object.keys(i).length ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)("img", {
						src: i.avatar_url,
						alt: i.username,
						width: "30",
						height: "30"
					}), (0, e.createElement)("p", null, d), (0, e.createElement)(ta, null)) : (0, e.createElement)(n.Fragment, null, (0, e.createElement)(ra, null), (0, e.createElement)("p", null, (0, fe.__)("Select Customer", "ddwc-multipos")))), (0, Lt.applyFilters)("ddwcpos_add_data_after_select_customer_button", "", this, he.store), "restaurant" == this.props.outlet.mode ? (0, e.createElement)("button", {
						className: "ddwcpos-button ddwcpos-button-green",
						onClick: function(t) {
							return r.handleToggleShowSelectTablePopup()
						}
					}, Object.keys(a).length ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)("span", {
						className: "ddwcpos-table-icon",
						role: "img"
					}, (0, e.createElement)("svg", {
						version: "1.1",
						id: "Capa_1",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						viewBox: "0 0 214.539 214.539"
					}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
						d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
					}), (0, e.createElement)("path", {
						d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
					}), (0, e.createElement)("path", {
						d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
					}))))), (0, e.createElement)("p", null, a.name), (0, e.createElement)(ta, null)) : (0, e.createElement)(n.Fragment, null, (0, e.createElement)("span", null, (0, e.createElement)("svg", {
						version: "1.1",
						id: "Capa_1",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						viewBox: "0 0 214.539 214.539"
					}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
						d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
					}), (0, e.createElement)("path", {
						d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
					}), (0, e.createElement)("path", {
						d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
					}))))), (0, e.createElement)("p", null, (0, fe.__)("Select Table", "ddwc-multipos")))) : null) : null, (0, e.createElement)("div", {
						className: "ddwcpos-cart-products-list"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-cart-header"
					}, (0, e.createElement)("h2", null, (0, e.createElement)(Nn, null), (0, fe.__)("Cart Items", "ddwc-multipos")), (0, Lt.applyFilters)("ddwcpos_show_hold_and_reset_cart_buttons_custom_check", !0, this) ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)(be, {
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
					}, (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleSyncOrdersButton,
						title: (0, fe.__)("Check Hold Orders", "ddwc-multipos")
					}, s ? (0, e.createElement)("span", {
						className: "ddwcpos-card-count"
					}, s) : null, (0, e.createElement)(aa, null))), (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleResetCartButton,
						title: (0, fe.__)("Reset Cart", "ddwc-multipos")
					}, (0, e.createElement)(Ti, null))) : null), (0, e.createElement)("div", {
						className: "ddwcpos-cart-products" + (0, Lt.applyFilters)("ddwcpos_add_custom_classes_to_cart_products", "", this)
					}, l)), (0, e.createElement)(Ns, this.props), f)
				}
			}]), i
		}(n.Component);
		const kc = q((function(t) {
			return {
				cart: t.cart,
				holdCarts: t.holdCarts,
				discount: t.discount,
				taxes: t.taxes,
				coupon: t.coupon,
				customers: t.customers,
				orders: t.orders,
				tables: t.tables
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getCart: va,
				clearIndexDB: ga,
				getCoupons: la,
				getDiscount: ps,
				getHoldCarts: ss,
				getOrders: cc,
				updateDefaultTable: is,
				getCustomers: yc,
				getTables: os
			}, t))
		}))(Pc);

		function Tc(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		const Nc = function(t) {
			le(o, t);
			var n = Tc(o);

			function o(t) {
				var e;
				return ae(this, o), (e = n.call(this, t)).showCart = function() {
					var t = e.props.page.name,
						n = (0, Lt.applyFilters)("ddwcpos_modify_pages_that_shows_cart", ["Home", "Category", "Pay"], e.props);
					return window.screen.width >= 768 && n.includes(t)
				}, e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = {};
					return this.showCart() || (t.gridTemplateColumns = "unset"), (0, e.createElement)("div", {
						className: "ddwcpos-tabs-container",
						style: t
					}, r().createElement(this.props.page.component, this.props), this.showCart() ? (0, e.createElement)(kc, this.props) : null)
				}
			}]), o
		}(n.Component);
		__webpack_require__(4352);

		function Ac(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Dc = function(n) {
			le(o, n);
			var r = Ac(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).changeCurrentOutlet = function(t) {
					e.props.setCurrentOutlet(t).then((function(t) {
						e.setState({
							outletFetched: !0
						})
					}))
				}, e.state = {
					outletFetched: !1,
					licenseNotActivated: !1
				}, e
			}
			return ce(o, [{
				key: "componentDidMount",
				value: function() {
					var t = this;
					this.props.setCurrentOutlet().then((function(e) {
						t.setState({
							outletFetched: !0
						})
					})), (0, Lt.doAction)("ddwcpos_on_app_component_mount", this);
					var e = atob(localStorage.getItem("ddwcposLicenseCheck"));
					if ((e = e.replace("ddwcpos-", "")) !== ddwcposPOSObj.ddwcpos_configuration.purchase_code) {
						var n = {
							purchase_code: ddwcposPOSObj.ddwcpos_configuration.purchase_code,
							user_agent: ddwcposPOSObj.site_url
						};
						navigator.onLine ? Ii("https://devdiggers.com/wp-json/ddelv/v1/check-license", n).then((function(e) {
							e ? e.success ? "deactivated" === e.status || "deleted" === e.status ? t.setState({
								licenseNotActivated: (0, fe.__)("Your license is not activated", "ddwc-multipos")
							}) : localStorage.setItem("ddwcposLicenseCheck", btoa("ddwcpos-" + ddwcposPOSObj.ddwcpos_configuration.purchase_code)) : t.setState({
								licenseNotActivated: e.message
							}) : t.setState({
								licenseNotActivated: (0, fe.__)("Your license is not activated", "ddwc-multipos")
							})
						})) : this.setState({
							licenseNotActivated: (0, fe.__)("Internet has to be there to check the license activation first.", "ddwc-multipos")
						})
					}
				}
			}, {
				key: "render",
				value: function() {
					var n = this;
					if (this.state.licenseNotActivated) {
						var r = {
							backgroundImage: "linear-gradient(".concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_primary_color, " 0%, ").concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_secondary_color, " 100%)"),
							color: ddwcposPOSObj.ddwcpos_configuration.login_font_color
						};
						return (0, e.createElement)("div", {
							className: "ddwcpos-login-wrapper",
							style: r
						}, (0, e.createElement)("div", {
							className: "ddwcpos-login-container"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-outlets-container"
						}, (0, e.createElement)("p", {
							dangerouslySetInnerHTML: {
								__html: this.state.licenseNotActivated
							}
						}))), (0, e.createElement)("ul", {
							className: "ddwcpos-bubbles"
						}, (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null)))
					}
					if (!this.state.outletFetched) return (0, e.createElement)("div", {
						className: "ddwcpos-container"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-progress-bar"
					}));
					if (Object.keys(this.props.outlet).length > 0) return (0, e.createElement)("div", {
						className: "ddwcpos-container"
					}, (0, e.createElement)(me(), null), (0, e.createElement)("div", {
						className: "ddwcpos-progress-bar"
					}), (0, Lt.applyFilters)("ddwcpos_show_menu", !0, this) ? (0, e.createElement)(Wi, this.props) : null, (0, e.createElement)(Nc, t({}, this.props, {
						notification: he.store
					})));
					if (!this.state.outletLoaded) {
						var o = "";
						ddwcposPOSObj.assignedOutlets.length && (o = ddwcposPOSObj.assignedOutlets.map((function(t) {
							return (0, e.createElement)("li", {
								key: t.id,
								onClick: function(e) {
									return n.changeCurrentOutlet(t.id)
								}
							}, t.name)
						})));
						var i = {
							backgroundImage: "linear-gradient(".concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_primary_color, " 0%, ").concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_secondary_color, " 100%)"),
							color: ddwcposPOSObj.ddwcpos_configuration.login_font_color
						};
						return (0, e.createElement)("div", {
							className: "ddwcpos-login-wrapper",
							style: i
						}, (0, e.createElement)("div", {
							className: "ddwcpos-login-container"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-outlets-container"
						}, (0, e.createElement)("h1", null, (0, fe.__)("Select Outlet", "ddwc-multipos")), o ? (0, e.createElement)("ul", null, o) : (0, e.createElement)("p", null, (0, fe.__)("You do not have any assigned outlet!!", "ddwc-multipos")))), (0, e.createElement)("ul", {
							className: "ddwcpos-bubbles"
						}, (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null), (0, e.createElement)("li", null)))
					}
				}
			}]), o
		}(n.Component);
		const Rc = q((function(t) {
			return {
				outlet: t.outlet
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				setCurrentOutlet: Bi
			}, t))
		}))(Dc);
		var Ic = __webpack_require__(1216);
		const Lc = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"
					}
				}]
			},
			name: "database",
			theme: "outlined"
		};
		var Mc = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Lc
			}))
		};
		Mc.displayName = "DatabaseOutlined";
		const qc = n.forwardRef(Mc);
		const jc = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"
					}
				}]
			},
			name: "appstore",
			theme: "outlined"
		};
		var Bc = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: jc
			}))
		};
		Bc.displayName = "AppstoreOutlined";
		const Fc = n.forwardRef(Bc);
		const Hc = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
					}
				}]
			},
			name: "check",
			theme: "outlined"
		};
		var Uc = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Hc
			}))
		};
		Uc.displayName = "CheckOutlined";
		const Vc = n.forwardRef(Uc);
		const zc = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
					}
				}]
			},
			name: "right",
			theme: "outlined"
		};
		var Wc = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: zc
			}))
		};
		Wc.displayName = "RightOutlined";
		const Gc = n.forwardRef(Wc);
		const Kc = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "barcode",
			theme: "outlined"
		};
		var $c = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Kc
			}))
		};
		$c.displayName = "BarcodeOutlined";
		const Qc = n.forwardRef($c);
		var Zc = function(t) {
				return {
					type: "PRODUCTS",
					products: t
				}
			},
			Yc = function(t) {
				return {
					type: "TAXES",
					taxes: t
				}
			},
			Jc = function() {
				return ddwcposPOSObj.ddwcpos_configuration.variation_product_enabled ? xi.table("products").where("type").notEqual("variable").toArray() : xi.table("products").where("type").notEqual("variation").toArray()
			},
			Xc = function() {
				return xi.table("taxes").toArray().then((function(t) {
					return t || !1
				}))
			},
			tl = function(t) {
				return function(e) {
					return new Promise((function(n, r) {
						Xc().then((function(t) {
							t && t.length && e(Yc(t))
						})), Jc().then((function(t) {
							return t || !1
						})).then((function(r) {
							if (r && r.length) {
								var o = {
									list: r,
									isFetching: 0,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								};
								e(Zc(o)), n(o)
							} else {
								he.store.addNotification({
									title: (0, fe.__)("Loading Products", "ddwc-multipos"),
									message: (0, fe.__)("Loading Products in the POS.", "ddwc-multipos"),
									type: "info",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								});
								var i = {
									outlet_id: parseInt(t),
									per_page: -1,
									current_page: 0
								};
								el(i, e).then((function(t) {
									n(t)
								}))
							}
						}))
					}))
				}
			},
			el = function t(e, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Ii(ddwcposPOSObj.API.GET_PRODUCTS_ENDPOINT, e).then((function(i) {
						if (null != i.total_products && "number" == typeof i.total_products) {
							var a = [];
							for (var s in i.taxes) a.push({
								id: parseInt(s),
								rate: i.taxes[s].rate,
								shipping: i.taxes[s].shipping,
								label: i.taxes[s].label,
								compound: i.taxes[s].compound
							});
							a.length && xi.table("taxes").bulkPut(a).then((function(t) {
								n(Yc(a))
							})), i.total_products ? (e.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++e.current_page, t(e, n, i.total_products).then((function(t) {
								o(t)
							}))) : Jc().then((function(t) {
								n(Zc({
									list: t,
									isFetching: 0,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								}))
							}))
						} else xi.table("products").bulkPut(i).then((function(i) {
							(r = r > 0 ? r - e.per_page : 0) > 0 ? (Jc().then((function(t) {
								n(Zc({
									list: t,
									isFetching: 1,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								}))
							})), ++e.current_page, t(e, n, r).then((function(t) {
								o(t)
							}))) : (Jc().then((function(t) {
								var e = {
									list: t,
									isFetching: 0,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								};
								n(Zc(e)), o(e)
							})), he.store.addNotification({
								title: (0, fe.__)("Products Loaded", "ddwc-multipos"),
								message: (0, fe.__)("All Products are loaded successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}))
						}))
					}))
				}))
			},
			nl = function(t, e) {
				return function(n) {
					if (t) {
						var r = e.filter((function(e) {
							return e.categories.length > 0 && e.categories.includes(parseInt(t))
						}));
						n(Zc({
							list: e,
							isFetching: 0,
							s: "",
							sproducts: [],
							category: t,
							cproducts: r
						}))
					} else {
						n(Zc({
							list: e,
							isFetching: 0,
							s: "",
							sproducts: [],
							category: "",
							cproducts: []
						}))
					}
				}
			},
			rl = function(t, e) {
				return function(n) {
					if ("" != t) {
						var r = (e.cproducts.length ? e.cproducts : e.list).filter((function(e) {
							if (e.title && -1 != e.title.toLowerCase().indexOf(t) || e.sku && -1 != e.sku.toLowerCase().indexOf(t) || e.barcode_init && -1 != e.barcode_init.toLowerCase().indexOf(t)) return e;
							if ("variable" === e.type && e.available_variations && e.available_variations.length && e.available_variations.filter((function(e) {
									if (e.title && -1 != e.title.toLowerCase().indexOf(t) || e.sku && -1 != e.sku.toLowerCase().indexOf(t) || e.barcode_init && -1 != e.barcode_init.toLowerCase().indexOf(t)) return e
								})).length) return e
						}));
						r = (0, Lt.applyFilters)("ddwcpos_modify_searched_products_list_at_pos", r, t, e), e.sproducts = r, e.s = t
					} else e.sproducts = [], e.s = "";
					n(Zc(e))
				}
			},
			ol = function(t) {
				return {
					type: "CATEGORIES",
					categories: t
				}
			},
			il = function(t) {
				return function(e) {
					sl().then((function(n) {
						if (n && n.length) e(ol(n));
						else {
							he.store.addNotification({
								title: (0, fe.__)("Loading Categories", "ddwc-multipos"),
								message: (0, fe.__)("Loading Categories in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(t)
							};
							Ii(ddwcposPOSObj.API.GET_CATEGORIES_ENDPOINT, r).then((function(t) {
								xi.table("categories").bulkPut(t).then((function(t) {
									al().then((function(t) {
										e(ol(t)), he.store.addNotification({
											title: (0, fe.__)("Categories Loaded", "ddwc-multipos"),
											message: (0, fe.__)("All Categories are loaded successfully", "ddwc-multipos"),
											type: "success",
											insert: "top",
											container: "top-right",
											dismiss: {
												duration: 3e3,
												pauseOnHover: !0
											}
										})
									}))
								}))
							}))
						}
					}))
				}
			},
			al = function() {
				return xi.table("categories").toArray()
			},
			sl = function() {
				return al().then((function(t) {
					return t || !1
				}))
			},
			cl = function(t) {
				return {
					type: "COUNTRY_AND_STATES",
					countries_and_states: t
				}
			},
			ll = function() {
				return xi.table("countries_and_states").toArray()
			},
			ul = function(t) {
				return function(e) {
					ll().then((function(t) {
						return t || !1
					})).then((function(n) {
						if (n && n.length) e(cl(n[0]));
						else {
							he.store.addNotification({
								title: (0, fe.__)("Loading Countries & States", "ddwc-multipos"),
								message: (0, fe.__)("Loading Countries & States in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(t)
							};
							Ii(ddwcposPOSObj.API.GET_COUNTRIES_STATES_ENDPOINT, r).then((function(t) {
								xi.table("countries_and_states").put(t).then((function(t) {
									ll().then((function(t) {
										e(cl(t[0])), he.store.addNotification({
											title: (0, fe.__)("Countries & States Loaded", "ddwc-multipos"),
											message: (0, fe.__)("All Countries & States are loaded successfully", "ddwc-multipos"),
											type: "success",
											insert: "top",
											container: "top-right",
											dismiss: {
												duration: 3e3,
												pauseOnHover: !0
											}
										})
									}))
								}))
							}))
						}
					}))
				}
			};
		const dl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
					}
				}, {
					tag: "path",
					attrs: {
						d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
					}
				}]
			},
			name: "exclamation-circle",
			theme: "outlined"
		};
		var pl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: dl
			}))
		};
		pl.displayName = "ExclamationCircleOutlined";
		const fl = n.forwardRef(pl);

		function hl(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function ml(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var _l = function(t) {
			le(o, t);
			var r = ml(o);

			function o(t) {
				var i;
				return ae(this, o), (i = r.call(this, t)).handleToggleShowVariationPopup = function() {
					i.setState({
						showVariationPopup: !i.state.showVariationPopup,
						selectedAttributes: i.props.product.attribute_keys ? i.props.product.attribute_keys.reduce((function(t, e) {
							return t[e] = "", t
						}), {}) : {},
						selectedVariation: {}
					})
				}, i.handleToggleShowWeightPopup = function() {
					i.setState({
						showWeightPopup: !i.state.showWeightPopup
					})
				}, i.handleProductClick = function(t) {
					(0, Lt.applyFilters)("ddwcpos_handle_product_click_custom_functionality", !1, t, f(i)) || ("variable" == t.type ? "grid" === ddwcposPOSObj.ddwcpos_configuration.product_variation_layout ? i.props.toggleVariationGrid(t) : "popup" === ddwcposPOSObj.ddwcpos_configuration.product_variation_layout && i.setState({
						showVariationPopup: !0
					}) : ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && t.weight ? i.setState({
						showWeightPopup: !0,
						weightProduct: t
					}) : i.props.addToCart(t.product_id, 1))
				}, i.handleAddVariation = function(t, e) {
					ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && t.weight ? i.setState({
						showWeightPopup: !0,
						weightProduct: t
					}) : i.props.addToCart(t.variation_id, 1, !1, "", i.state.selectedAttributes), i.setState({
						showVariationPopup: !i.state.showVariationPopup,
						selectedAttributes: e.attribute_keys ? e.attribute_keys.reduce((function(t, e) {
							return t[e] = "", t
						}), {}) : {},
						selectedVariation: {}
					})
				}, i.isAttributesMatch = function(t, e) {
					var n = t.attributes,
						r = !0;
					if (t.stock > 0) {
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								var i = n[o],
									a = e[o];
								void 0 !== i && void 0 !== a && 0 !== i.length && 0 !== a.length && i !== a && (r = !1)
							}
					} else r = !1;
					return r
				}, i.handleVariationID = function(t, n, r) {
					if (n) {
						var o = i.state.selectedAttributes;
						o[t] = n;
						var a = r.available_variations;
						i.setState({
							selectedAttributes: o
						});
						var s = a.filter((function(t) {
								return i.isAttributesMatch(t, o)
							})),
							c = (0, e.createElement)("mark", {
								className: "outofstock"
							}, (0, fe.__)("Out of Stock", "ddwc-multipos")),
							l = {};
						s.length && (l = s[0], c = "custom" === i.props.outlet.inventory_type ? (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.sprintf)((0, fe.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock)) : "onbackorder" == s[0].stock_status ? (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.__)("On Backorder", "ddwc-multipos")) : s[0].stock_quantity > 0 ? (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.sprintf)((0, fe.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock_quantity)) : (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.__)("In Stock", "ddwc-multipos"))), i.setState({
							selectedVariation: l,
							variationStockHTML: c
						})
					} else i.setState({
						selectedVariation: {},
						variationStockHTML: ""
					})
				}, i.renderVariationPopup = function(t) {
					if (i.state.showVariationPopup && "variable" == t.type) {
						var r = t.attribute_keys,
							o = t.attribute_values,
							a = t.attributes,
							s = r.length,
							c = r.map((function(n, r) {
								var c = a[n] ? Object.values(a[n]) : [];
								if (c && c.length) {
									var l = c.map((function(o, a) {
										var c = function(t) {
											for (var e = 1; e < arguments.length; e++) {
												var n = null != arguments[e] ? arguments[e] : {};
												e % 2 ? hl(Object(n), !0).forEach((function(e) {
													ke(t, e, n[e])
												})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach((function(e) {
													Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
												}))
											}
											return t
										}({}, i.state.selectedAttributes);
										c[n] = o.slug;
										var l = t.available_variations.filter((function(t) {
												return i.isAttributesMatch(t, c)
											})),
											u = !0;
										if (s - 1 === r) {
											u = !1;
											l.length && (l[0], u = ("custom" === i.props.outlet.inventory_type || "onbackorder" == l[0].stock_status || l[0].stock_quantity, !0))
										}
										return (0, e.createElement)("p", {
											key: a,
											onClick: function(e) {
												return i.handleVariationID(n, o.slug, t)
											},
											className: i.state.selectedAttributes[n] == o.slug ? "ddwcpos-variation-attribute ddwcpos-selected-options" : "ddwcpos-variation-attribute"
										}, o.name, " ", u ? null : (0, e.createElement)(fl, {
											title: (0, fe.__)("Out of Stock", "ddwc-multipos")
										}))
									}));
									return (0, e.createElement)("div", {
										key: n,
										className: "ddwcpos-popup-options-group"
									}, (0, e.createElement)("h3", null, o[n]), (0, e.createElement)("div", {
										className: "ddwcpos-popup-options"
									}, l))
								}
							})),
							l = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Select Variation", "ddwc-multipos")), (0, Lt.applyFilters)("ddwcpos_add_different_variation_options", "", t, f(i)) ? (0, Lt.applyFilters)("ddwcpos_add_different_variation_options", "", t, f(i)) : c, (0, e.createElement)("div", {
								className: "ddwcpos-variation-product-details"
							}, (0, e.createElement)("p", null, (0, La.ZP)(i.state.selectedVariation.price_html)), (0, e.createElement)("p", null, i.state.variationStockHTML))),
							u = {
								handleOverlay: i.handleToggleShowVariationPopup,
								popupContent: l,
								notDisabled: Object.keys(i.state.selectedVariation).length,
								handleSuccess: function(e) {
									return i.handleAddVariation(i.state.selectedVariation, t)
								},
								handleCancel: i.handleToggleShowVariationPopup
							};
						return (0, e.createElement)(Ps, u)
					}
					return null
				}, i.handleWeightInput = function(t) {
					13 == t.which && t.target.value ? i.handleWeightSubmit() : i.setState({
						weightInput: t.target.value
					})
				}, i.handleWeightSubmit = function() {
					i.state.weightInput ? (i.handleToggleShowWeightPopup(), i.props.addToCart(i.state.weightProduct.variation_id ? i.state.weightProduct.variation_id : i.state.weightProduct.product_id, 1, !1, i.state.weightInput, i.state.selectedAttributes)) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Enter valid weight.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, i.renderWeightPopup = function(t) {
					if (i.state.showWeightPopup) {
						var r = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Enter weight for the purchase.", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("%s (%s %s) = %s", "ddwc-multipos"), t.title, t.weight, ddwcposPOSObj.weight_unit, (0, Ma.R)(t.sale_price))), (0, e.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(t) {
									return i.handleWeightInput(t)
								},
								placeholder: (0, fe.__)("Enter Weight", "ddwc-multipos"),
								autoFocus: !0
							})),
							o = {
								handleOverlay: i.handleToggleShowWeightPopup,
								popupContent: r,
								notDisabled: i.state.weightInput,
								handleSuccess: function(e) {
									return i.handleWeightSubmit(i.state.weightInput, t)
								},
								handleCancel: i.handleToggleShowWeightPopup
							};
						return (0, e.createElement)(Ps, o)
					}
					return null
				}, i.state = (0, Lt.applyFilters)("ddwcpos_modify_state_in_product_component", {
					showVariationPopup: !1,
					showWeightPopup: !1,
					weightInput: "",
					weightProduct: {},
					selectedAttributes: i.props.product.attribute_keys ? i.props.product.attribute_keys.reduce((function(t, e) {
						return t[e] = "", t
					}), {}) : {},
					selectedVariation: {},
					variationStockHTML: ""
				}, f(i)), i
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = this.props.product,
						o = "";
					ddwcposPOSObj.ddwcpos_configuration.show_product_stock_enabled && (o = "custom" === this.props.outlet.inventory_type ? "variable" == r.type ? (0, e.createElement)("mark", {
						className: "instock"
					}, (0, fe.__)("In Stock", "ddwc-multipos")) : (0, e.createElement)("mark", {
						className: "instock"
					}, (0, fe.sprintf)((0, fe.__)("In Stock(%s)", "ddwc-multipos"), r.stock)) : "onbackorder" == r.stock_status ? (0, e.createElement)("mark", {
						className: "instock"
					}, (0, fe.__)("On Backorder", "ddwc-multipos")) : r.stock_quantity > 0 ? (0, e.createElement)("mark", {
						className: "instock"
					}, (0, fe.sprintf)((0, fe.__)("In Stock(%s)", "ddwc-multipos"), r.stock_quantity)) : (0, e.createElement)("mark", {
						className: "instock"
					}, (0, fe.__)("In Stock", "ddwc-multipos")));
					var i = "image-left";
					return "image_top" === ddwcposPOSObj.ddwcpos_configuration.product_layout && (i = "image-top"), (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
						className: "ddwcpos-product-card ddwcpos-product-" + i,
						onClick: function(e) {
							return t.handleProductClick(r)
						}
					}, (0, e.createElement)("div", {
						className: "ddwcpos-product-thumbnail imkkk", 
						dangerouslySetInnerHTML: {
							__html: r.image
						}
					}), (0, e.createElement)("div", {
						className: "ddwcpos-product-details"
					}, (0, e.createElement)("h2", {
						title: (0, La.ZP)(r.title)
					}, (0, La.ZP)(r.title)), (0, e.createElement)("p", null, (0, La.ZP)(r.price_html)), o)), this.renderVariationPopup(r), this.renderWeightPopup(this.state.weightProduct), (0, Lt.applyFilters)("ddwcpos_add_custom_html_after_product_card", "", r, this))
				}
			}]), o
		}(n.Component);
		const gl = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				addToCart: wa
			}, t))
		}))(_l);

		function vl(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function yl(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? vl(Object(n), !0).forEach((function(e) {
					ke(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vl(Object(n)).forEach((function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function wl(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var bl = function(t) {
			le(o, t);
			var r = wl(o);

			function o(t) {
				var i;
				return ae(this, o), (i = r.call(this, t)).toggleVariationGrid = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					i.state.showVariationGrid ? i.setState({
						showVariationGrid: !1,
						variationGridProduct: {},
						selectedAttributes: {}
					}) : i.setState({
						showVariationGrid: !0,
						variationGridProduct: t,
						selectedAttributes: t.attribute_keys ? t.attribute_keys.reduce((function(t, e) {
							return t[e] = "", t
						}), {}) : {}
					})
				}, i.handleVariationGridReset = function() {
					i.setState({
						showVariationGrid: !0,
						selectedAttributes: i.state.variationGridProduct.attribute_keys ? i.state.variationGridProduct.attribute_keys.reduce((function(t, e) {
							return t[e] = "", t
						}), {}) : {}
					})
				}, i.handleToggleShowWeightPopup = function() {
					i.setState({
						showWeightPopup: !i.state.showWeightPopup
					})
				}, i.handleWeightInput = function(t) {
					t.stopPropagation(), 13 == t.which && t.target.value ? i.handleWeightSubmit() : i.setState({
						weightInput: t.target.value
					})
				}, i.handleWeightSubmit = function() {
					i.state.weightInput ? (i.handleToggleShowWeightPopup(), i.props.addToCart(i.state.weightProduct.variation_id ? i.state.weightProduct.variation_id : i.state.weightProduct.product_id, 1, !1, i.state.weightInput)) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Enter valid weight.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, i.renderWeightPopup = function(t) {
					if (i.state.showWeightPopup) {
						var r = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Enter weight for the purchase.", "ddwc-multipos")), (0, e.createElement)("p", null, sprintf((0, fe.__)("%s (%s %s) = %s", "ddwc-multipos"), t.title, t.weight, ddwcposPOSObj.weight_unit, (0, Ma.R)(t.sale_price))), (0, e.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(t) {
									return i.handleWeightInput(t)
								},
								placeholder: (0, fe.__)("Enter Weight", "ddwc-multipos"),
								autoFocus: !0
							})),
							o = {
								handleOverlay: i.handleToggleShowWeightPopup,
								popupContent: r,
								notDisabled: i.state.weightInput,
								handleSuccess: function(e) {
									return i.handleWeightSubmit(i.state.weightInput, t)
								},
								handleCancel: i.handleToggleShowWeightPopup
							};
						return (0, e.createElement)(Ps, o)
					}
					return null
				}, i.handleProductSearch = function(t) {
					i.setState({
						search: t.target.value
					}), (0, Lt.applyFilters)("ddwcpos_change_default_product_search_workflow", !0, t, f(i)) && i.props.LoadSearchedProducts(t.target.value.toLowerCase(), i.props.products)
				}, i.handleToggleShowAllCategories = function() {
					i.setState({
						showAllCategoriesPopup: !i.state.showAllCategoriesPopup
					})
				}, i.handleHideAllCategoriesPopup = function() {
					i.state.showAllCategoriesPopup && i.setState({
						showAllCategoriesPopup: !1
					})
				}, i.handleToggleBarcodePopup = function() {
					i.setState({
						showBarcodePopup: !i.state.showBarcodePopup
					})
				}, i.handleToggleCustomProductPopup = function() {
					i.setState({
						showCustomProductPopup: !i.state.showCustomProductPopup
					})
				}, i.handleToggleOpenCashDrawerPopup = function() {
					var t = yl({}, i.props.settings);
					t.showOpenCashDrawerPopup = !t.showOpenCashDrawerPopup, i.props.saveSettings(t)
				}, i.handleBarcodeInput = function(t) {
					13 == t.which ? i.handleAddProductViaBarcode() : i.setState({
						barcodeValue: t.target.value
					})
				}, i.handleOpenCashDrawerAmountInput = function(t) {
					13 == t.which ? i.handleOpenCashDrawerAmountSubmit() : i.setState({
						openCashDrawerAmount: t.target.value
					})
				}, i.handleOpenCashDrawerAmountSubmit = function() {
					var t = {
						in: i.state.openCashDrawerAmount,
						outlet_id: i.props.outlet.id,
						method: "opencash",
						reason: (0, fe.__)("Open Cash Drawer Amount", "ddwc-multipos")
					};
					i.props.saveTransaction(t), i.handleToggleOpenCashDrawerPopup()
				}, i.handleCustomProductInput = function(t, e) {
					13 == t.which && i.state.customProductAddEnabled ? i.handleAddCustomProduct() : i.setState(ke({}, e, t.target.value), (function() {
						i.state.customProductName && i.state.customProductPrice && i.state.customProductQuantity ? i.setState({
							customProductAddEnabled: !0
						}) : i.setState({
							customProductAddEnabled: !1
						})
					}))
				}, i.handleAddProductViaBarcode = function(t) {
					t.preventDefault();
					var e = i.state.barcodeValue;
					i.props.getProductViaBarcode(e).then((function(t) {
						Object.keys(t).length ? ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && t.weight ? i.setState({
							showWeightPopup: !0,
							weightProduct: t
						}) : i.props.addToCart(t.product_id, 1) : he.store.addNotification({
							title: (0, fe.__)("Barcode Error", "ddwc-multipos"),
							message: sprintf((0, fe.__)('No product exists with this barcode "%s".', "ddwc-multipos"), e),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					})), i.setState({
						barcodeValue: ""
					})
				}, i.handleAddCustomProduct = function() {
					var t = i.props.taxes,
						e = i.state.customProductPrice,
						n = parseInt(i.state.customProductQuantity),
						r = 0;
					if ("yes" == ddwcposPOSObj.tax_enabled)
						if ("excl" == ddwcposPOSObj.tax_display_cart)
							if ("yes" == ddwcposPOSObj.tax_type) {
								var o = 0;
								t.forEach((function(t) {
									t.rate && (o += t.rate)
								}));
								var a = 100 * e / (100 + o);
								r = e - a, e = a
							} else t.forEach((function(t) {
								t.rate && (r += e * t.rate / 100)
							}));
					else "yes" != ddwcposPOSObj.tax_type && (t.forEach((function(t) {
						t.rate && (r += e * t.rate / 100)
					})), e = parseFloat(parseFloat(e) + parseFloat(r)), r = 0);
					i.handleToggleCustomProductPopup();
					var s = {
						title: i.state.customProductName,
						price: e,
						tax: r * n
					};
					i.props.addToCart(s, n, !0)
				}, i.handleVariationID = function(t, n, r) {
					if (n) {
						var o = i.state.selectedAttributes;
						o[t] = n;
						var a = r.available_variations;
						i.setState({
							selectedAttributes: o
						});
						var s = a.filter((function(t) {
								return i.isAttributesMatch(t, o)
							})),
							c = (0, e.createElement)("mark", {
								className: "outofstock"
							}, (0, fe.__)("Out of Stock", "ddwc-multipos")),
							l = {};
						s.length && (l = s[0], c = "custom" === i.props.outlet.inventory_type ? (0, e.createElement)("mark", {
							className: "instock"
						}, sprintf((0, fe.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock)) : "onbackorder" == s[0].stock_status ? (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.__)("On Backorder", "ddwc-multipos")) : s[0].stock_quantity > 0 ? (0, e.createElement)("mark", {
							className: "instock"
						}, sprintf((0, fe.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock_quantity)) : (0, e.createElement)("mark", {
							className: "instock"
						}, (0, fe.__)("In Stock", "ddwc-multipos"))), i.setState({
							selectedVariation: l,
							variationStockHTML: c
						})
					} else i.setState({
						selectedVariation: {},
						variationStockHTML: ""
					})
				}, i.isAttributesMatch = function(t, e) {
					var n = t.attributes,
						r = !0;
					if (t.stock > 0) {
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								var i = n[o],
									a = e[o];
								void 0 !== i && void 0 !== a && 0 !== i.length && 0 !== a.length && i !== a && (r = !1)
							}
					} else r = !1;
					return r
				}, i.handleAddGridVariation = function(t, e) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
					n && r && i.handleVariationID(n, r, e), ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && t.weight ? i.setState({
						showWeightPopup: !0,
						weightProduct: t
					}) : i.props.addToCart(t.variation_id, 1, !1, "", i.state.selectedAttributes), i.toggleVariationGrid()
				}, i.state = (0, Lt.applyFilters)("ddwcpos_modify_state_in_home_component", {
					cid: "",
					search: "",
					productsLoaded: !1,
					categoryProductsLoaded: !1,
					showAllCategoriesPopup: !1,
					showBarcodePopup: !1,
					barcodeValue: "",
					showCustomProductPopup: !1,
					openCashDrawerAmount: !1,
					customProductName: "",
					customProductPrice: "",
					customProductQuantity: "",
					customProductAddEnabled: !1,
					showWeightPopup: !1,
					weightInput: "",
					weightProduct: {},
					showVariationGrid: !1,
					variationGridProduct: {},
					selectedAttributes: {},
					selectedVariation: {},
					variationStockHTML: ""
				}, f(i)), i
			}
			return ce(o, [{
				key: "componentDidMount",
				value: function() {
					var t = this;
					if (this.props.getCategories(this.props.outlet.id), this.props.getProducts(this.props.outlet.id).then((function(e) {
							t.setState({
								productsLoaded: !0
							})
						})), this.props.getCustomers(this.props.outlet.id), this.props.getTransactions(this.props.outlet.id), this.props.getCountriesAndStates(this.props.outlet.id), this.props.getTables(), this.props.getSettings(), "POP" == this.props.history.action) {
						var e = yl({}, this.props.settings);
						e.showOpenCashDrawerPopup = !0, this.props.saveSettings(e)
					}
					var n = "";
					window.addEventListener("keypress", (function(e) {
						if ("BODY" === (e.target || e.srcElement).tagName.toUpperCase())
							if (13 == e.which && n) t.setState({
								barcodeValue: n
							}, (function() {
								t.handleAddProductViaBarcode(e), n = ""
							}));
							else {
								var r = e.key,
									o = /^\d$/.test(r),
									i = /^[a-zA-Z]$/.test(r);
								(o || i) && (n += r)
							}
					}))
				}
			}, {
				key: "componentDidUpdate",
				value: function() {
					var t = this,
						e = this.props.products.list,
						n = null != this.props.match.params.cid ? "all" == this.props.match.params.cid ? 0 : this.props.match.params.cid : 0;
					!e.length || !this.state.productsLoaded || n == this.state.cid && this.state.categoryProductsLoaded || this.setState({
						cid: n,
						categoryProductsLoaded: !0
					}, (function() {
						t.props.LoadCategoryProducts(n, e)
					}))
				}
			}, {
				key: "render",
				value: function() {
					var t = this,
						r = this.props.categories,
						o = this.props.products,
						i = this.props.transactions.filter((function(t) {
							return "opencash" === t.method
						})).length,
						a = o.s,
						s = null != this.props.match.params.cid && this.props.match.params.cid > 0 ? this.props.match.params.cid : "",
						c = [];
					(c = a ? o.sproducts : s ? o.cproducts : o.list).sort((function(t, e) {
						return t.title > e.title ? 1 : e.title > t.title ? -1 : 0
					})), c = (0, Lt.applyFilters)("ddwcpos_modify_displaying_products", c, this);
					var l = document.querySelector(".ddwcpos-products-tab-wrapper"),
						u = 6,
						d = l ? l.offsetWidth : 1e3;
					window.screen.width < 768 && (d = window.screen.width);
					var p = document.querySelector(".ddwcpos-category-wrapper"),
						f = p ? p.offsetWidth - 10 : 0;
					f = Math.floor(f / 100);
					var h = 134,
						m = 260,
						_ = window.innerWidth;
					"image_top" === ddwcposPOSObj.ddwcpos_configuration.product_layout ? (h = 265, m = 150, _ >= 2300 ? (u = 9, m = d / 9.11) : _ >= 2100 && _ < 2300 ? (u = 8, m = d / 8.11) : _ >= 1700 && _ < 2100 ? (u = 7, m = d / 7.15) : _ >= 1550 && _ < 1700 ? (u = 6, m = d / 6.1) : _ > 1300 && _ < 1550 ? (u = 5, m = d / 5.1) : _ > 1024 && _ <= 1300 ? (u = 4, m = d / 4) : _ > 650 && _ < 1024 ? (h = 300, u = 4, m = d / 4) : _ > 440 && _ <= 650 ? (h = 300, u = 3, m = d / 3.09) : (h = 300, u = 2, m = d / 2.09)) : _ >= 1600 ? (u = 6, m = d / 6) : _ >= 1550 && _ < 1600 ? (u = 5, m = d / 5) : _ > 1300 && _ < 1550 ? (u = 4, m = d / 4.09) : _ > 1024 && _ < 1301 ? (u = 3, m = d / 3) : (u = 2, m = d / 2.07);
					var g = [],
						v = 1,
						y = 0;
					c.forEach((function(t, e) {
						v % (u + 1) == 0 && (v = 1, y++), Array.isArray(g[y]) && g[y].length ? g[y].push(t) : g[y] = [t], v++
					}));
					var w = "ddwcpos-category-card";
					0 == this.state.cid && (w += " ddwcpos-category-active");
					var b = [],
						E = "",
						O = "";
					if (r.length) {
						b.push((0, e.createElement)(be, {
							key: "all",
							className: w,
							onClick: this.handleHideAllCategoriesPopup,
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/category/all")
						}, (0, e.createElement)(qc, null), (0, e.createElement)("p", null, (0, fe.__)("All", "ddwc-multipos"))));
						var S = r.map((function(n, r) {
							var o = "ddwcpos-category-card";
							return n.id == t.state.cid && (o += " ddwcpos-category-active"), (0, e.createElement)(be, {
								key: r,
								className: o,
								onClick: t.handleHideAllCategoriesPopup,
								to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/category/").concat(n.id)
							}, n.image ? (0, e.createElement)("img", {
								src: n.image,
								alt: n.name,
								width: "24",
								height: "24"
							}) : "", (0, e.createElement)("p", {
								title: n.name
							}, n.name))
						}));
						f < (b = b.concat(S)).length && (E = (0, e.createElement)(be, {
							className: "ddwcpos-category-card",
							to: "#",
							onClick: this.handleToggleShowAllCategories
						}, (0, e.createElement)(Fc, null), (0, e.createElement)("p", null, (0, fe.__)("View All", "ddwc-multipos"))), this.state.showAllCategoriesPopup && (O = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
							className: "ddwcpos-popup-overlay",
							onClick: this.handleToggleShowAllCategories
						}), (0, e.createElement)("div", {
							className: "ddwcpos-all-categories-popup"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-all-categories-popup-content"
						}, (0, e.createElement)("h2", null, (0, fe.__)("All Categories", "ddwc-multipos")), (0, e.createElement)("div", null, b))))), b = sa(b.slice(0, f)))
					}
					var C = "";
					if (this.state.showBarcodePopup) {
						var x = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Enter/Scan Barcode", "ddwc-multipos")), (0, e.createElement)("form", {
								onSubmit: function(e) {
									return t.handleAddProductViaBarcode(e)
								}
							}, (0, e.createElement)("input", {
								type: "text",
								onChange: function(e) {
									return t.handleBarcodeInput(e)
								},
								placeholder: (0, fe.__)("Enter/Scan Barcode", "ddwc-multipos"),
								value: this.state.barcodeValue,
								autoFocus: !0
							}), (0, e.createElement)("p", null, (0, e.createElement)("i", null, (0, fe.__)("Press enter after entering barcode to add products.", "ddwc-multipos"))))),
							P = {
								handleOverlay: this.handleToggleBarcodePopup,
								popupContent: x,
								notDisabled: !0,
								hideCancelButton: !0,
								singleButton: !0,
								successButtonText: (0, e.createElement)(n.Fragment, null, (0, e.createElement)(Vc, null), (0, fe.__)("Done", "ddwc-multipos")),
								handleSuccess: this.handleToggleBarcodePopup,
								handleCancel: this.handleToggleBarcodePopup
							};
						C = (0, e.createElement)(Ps, P)
					}
					var k = "";
					if (this.state.showCustomProductPopup) {
						var T = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Custom Product Details", "ddwc-multipos")), (0, e.createElement)("input", {
								type: "text",
								onChange: function(e) {
									return t.handleCustomProductInput(e, "customProductName")
								},
								placeholder: (0, fe.__)("Enter Product Name", "ddwc-multipos"),
								autoFocus: !0
							}), (0, e.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onChange: function(e) {
									return t.handleCustomProductInput(e, "customProductPrice")
								},
								placeholder: (0, fe.__)("Enter Price", "ddwc-multipos")
							}), (0, e.createElement)("input", {
								type: "number",
								min: "1",
								onChange: function(e) {
									return t.handleCustomProductInput(e, "customProductQuantity")
								},
								placeholder: (0, fe.__)("Enter Quantity", "ddwc-multipos")
							})),
							N = {
								handleOverlay: this.handleToggleCustomProductPopup,
								popupContent: T,
								notDisabled: this.state.customProductAddEnabled,
								handleSuccess: this.handleAddCustomProduct,
								handleCancel: this.handleToggleCustomProductPopup
							};
						k = (0, e.createElement)(Ps, N)
					}
					var A = "";
					if (ddwcposPOSObj.ddwcpos_configuration.opencash_drawer_enabled && !i && this.props.settings.showOpenCashDrawerPopup) {
						var D = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Open Cash Drawer Amount", "ddwc-multipos")), (0, e.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onKeyUp: function(e) {
									return t.handleOpenCashDrawerAmountInput(e)
								},
								placeholder: (0, fe.__)("Enter Amount", "ddwc-multipos"),
								autoFocus: !0
							})),
							R = {
								handleOverlay: this.handleToggleOpenCashDrawerPopup,
								popupContent: D,
								notDisabled: this.state.openCashDrawerAmount,
								handleSuccess: this.handleOpenCashDrawerAmountSubmit,
								handleCancel: this.handleToggleOpenCashDrawerPopup
							};
						A = (0, e.createElement)(Ps, R)
					}
					var I = {};
					ddwcposPOSObj.ddwcpos_configuration.custom_product_enabled || (I.gridTemplateColumns = "60% max-content auto");
					var L = (0, Lt.applyFilters)("ddwcpos_custom_variation_grid_html", null, this);
					if (this.state.showVariationGrid && this.state.variationGridProduct && (0, Lt.applyFilters)("ddwcpos_use_default_variation_grid", !0, this)) {
						var M, q = this.state.variationGridProduct,
							j = q.attribute_keys,
							B = q.attribute_values,
							F = q.attributes,
							H = 0,
							U = j.length;
						M = j.map((function(r, o) {
							var i = F[r] ? Object.values(F[r]) : [];
							if (t.state.selectedAttributes[r] && ++H >= U && (H = U - 1), i && i.length && o === H) {
								var a = i.map((function(n, i) {
									var a = yl({}, t.state.selectedAttributes);
									a[r] = n.slug;
									var s = q.available_variations.filter((function(e) {
										return t.isAttributesMatch(e, a)
									}));
									if (U - 1 !== o) return (0, e.createElement)("p", {
										key: i,
										onClick: function(e) {
											return t.handleVariationID(r, n.slug, q)
										},
										className: t.state.selectedAttributes[r] == n.slug ? "ddwcpos-variation-attribute ddwcpos-selected-options" : "ddwcpos-variation-attribute"
									}, n.name);
									var c = {};
									if (s.length) {
										c = s[0];
										var l = (0, e.createElement)("mark", {
											className: "outofstock"
										}, (0, fe.__)("Out of Stock", "ddwc-multipos"));
										l = "custom" === t.props.outlet.inventory_type ? (0, e.createElement)("mark", {
											className: "instock"
										}, sprintf((0, fe.__)("In Stock(%s)", "ddwc-multipos"), c.stock)) : "onbackorder" == c.stock_status ? (0, e.createElement)("mark", {
											className: "instock"
										}, (0, fe.__)("On Backorder", "ddwc-multipos")) : c.stock_quantity > 0 ? (0, e.createElement)("mark", {
											className: "instock"
										}, sprintf((0, fe.__)("In Stock(%s)", "ddwc-multipos"), c.stock_quantity)) : (0, e.createElement)("mark", {
											className: "instock"
										}, (0, fe.__)("In Stock", "ddwc-multipos"));
										var u = "image-left";
										return "image_top" === ddwcposPOSObj.ddwcpos_configuration.product_layout && (u = "image-top"), (0, e.createElement)("div", {
											key: i,
											className: "ddwcpos-product-card ddwcpos-product-" + u,
											onClick: function(e) {
												return t.handleAddGridVariation(c, q, r, n.slug)
											}
										}, (0, e.createElement)("div", {
											className: "ddwcpos-product-thumbnail",
											dangerouslySetInnerHTML: {
												__html: c.image
											}
										}), (0, e.createElement)("div", {
											className: "ddwcpos-product-details"
										}, (0, e.createElement)("h2", {
											title: (0, La.ZP)(n.name)
										}, (0, La.ZP)(n.name)), (0, e.createElement)("p", null, (0, La.ZP)(c.price_html)), l))
									}
								}));
								return (0, e.createElement)(n.Fragment, null, (0, e.createElement)("div", {
									key: r,
									className: "ddwcpos-variation-options-group"
								}, (0, e.createElement)("h3", null, B[r]), (0, e.createElement)("p", null, (0, fe.__)("Choose an option", "ddwc-multipos"))), (0, e.createElement)("div", {
									className: "ddwcpos-variation-options"
								}, a))
							}
							if (t.state.selectedAttributes[r]) {
								var s = i.filter((function(e) {
									return t.state.selectedAttributes[r] === e.slug
								}));
								if (s.length) return (0, e.createElement)("div", {
									key: r,
									className: "ddwcpos-variation-options-group"
								}, (0, e.createElement)("h3", null, B[r]), (0, e.createElement)("p", null, s[0].name))
							}
						})), L = (0, e.createElement)("div", {
							className: "ddwcpos-variation-grid",
							style: (0, Lt.applyFilters)("ddwcpos_modify_style_for_products_list", "disabled" == this.props.settings.display_category ? {
								height: "calc(100vh - 95px)"
							} : {
								height: "calc(100vh - 218px)"
							}, this)
						}, (0, e.createElement)("div", {
							className: "ddwcpos-variation-breadcrumbs"
						}, (0, e.createElement)("p", null, (0, e.createElement)("span", {
							onClick: function(e) {
								return t.toggleVariationGrid()
							}
						}, (0, fe.__)("Back", "ddwc-multipos")), " ", (0, e.createElement)(Gc, null), " ", q.title), (0, e.createElement)("div", {
							className: "ddwcpos-icon-card",
							onClick: function(e) {
								return t.handleVariationGridReset()
							},
							title: (0, fe.__)("Reset", "ddwc-multipos")
						}, (0, fe.__)("Reset", "ddwc-multipos"))), M)
					}
					return (0, e.createElement)("div", {
						className: "ddwcpos-products-tab-wrapper"
					}, "disabled" != this.props.settings.display_category ? (0, e.createElement)("div", {
						className: "ddwcpos-category-wrapper"
					}, b.length ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Select Category", "ddwc-multipos")), (0, e.createElement)("div", {
						className: "ddwcpos-categories-container"
					}, b, E, O)) : null) : null, (0, e.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, e.createElement)("h2", null, (0, fe.__)("Products", "ddwc-multipos")), (0, e.createElement)("div", {
						className: "ddwcpos-search-input-wrapper",
						style: I
					}, (0, Lt.applyFilters)("ddwcpos_add_different_products_search", !1, this) ? (0, Lt.applyFilters)("ddwcpos_add_different_products_search", !1, this) : (0, e.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						value: this.state.search,
						placeholder: (0, fe.__)("Search Product by title, ID, SKU or Barcode Number", "ddwc-multipos"),
						onChange: function(e) {
							return t.handleProductSearch(e)
						},
						autoComplete: "off"
					})), (0, e.createElement)("div", {
						className: "ddwcpos-icon-card ddwcpos-barcode-icon",
						onClick: this.handleToggleBarcodePopup,
						title: (0, fe.__)("Add Product via Barcode", "ddwc-multipos")
					}, (0, e.createElement)(Qc, null)), ddwcposPOSObj.ddwcpos_configuration.custom_product_enabled ? (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleToggleCustomProductPopup,
						title: (0, fe.__)("Add Custom Product", "ddwc-multipos")
					}, (0, e.createElement)(Ua, null)) : null, (0, e.createElement)("span", null, c.length + " " + (0, fe.__)("Results", "ddwc-multipos"))), C, k, A, this.renderWeightPopup(this.state.weightProduct)), (0, Lt.applyFilters)("ddwcpos_add_content_after_product_search", null, this), this.state.showVariationGrid ? L : c.length > 0 ? (0, e.createElement)(Ys, {
						className: "ddwcpos-grid ddwcpos-products-list",
						columnCount: u,
						columnWidth: m,
						height: 1e3,
						rowCount: g.length,
						rowHeight: h,
						width: d,
						style: (0, Lt.applyFilters)("ddwcpos_modify_style_for_products_list", "disabled" == this.props.settings.display_category ? {
							height: "calc(100vh - 95px)"
						} : {
							height: "calc(100vh - 218px)"
						}, this)
					}, (function(n) {
						var r = n.columnIndex,
							o = n.rowIndex,
							i = n.style;
						return null != g[o][r] ? (0, e.createElement)("div", {
							className: r % 2 ? o % 2 == 0 ? "ddwcpos-grid-item-odd" : "ddwcpos-grid-item-even" : o % 2 ? "ddwcpos-grid-item-odd" : "ddwcpos-grid-item-even",
							style: i
						}, (0, e.createElement)(Ic.ZP, {
							once: !0,
							key: r,
							overflow: !0,
							height: 200
						}, (0, e.createElement)(gl, {
							key: r,
							product: g[o][r],
							outlet: t.props.outlet,
							toggleVariationGrid: t.toggleVariationGrid,
							notification: t.props.notification
						}))) : ""
					})) : (0, e.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Products Found", "ddwc-multipos"))))
				}
			}]), o
		}(n.Component);
		const El = q((function(t) {
			return {
				categories: t.categories,
				products: t.products,
				taxes: t.taxes,
				settings: t.settings,
				transactions: t.transactions
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getProducts: tl,
				getCategories: il,
				getCustomers: yc,
				getCountriesAndStates: ul,
				LoadCategoryProducts: nl,
				LoadSearchedProducts: rl,
				getProductViaBarcode: ya,
				addToCart: wa,
				getOrders: cc,
				getSettings: Li,
				saveSettings: Mi,
				saveTransaction: oc,
				getTransactions: rc,
				getTables: os
			}, t))
		}))(bl);
		const Ol = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
					}
				}]
			},
			name: "mail",
			theme: "outlined"
		};
		var Sl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Ol
			}))
		};
		Sl.displayName = "MailOutlined";
		const Cl = n.forwardRef(Sl);
		const xl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"
					}
				}]
			},
			name: "phone",
			theme: "outlined"
		};
		var Pl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: xl
			}))
		};
		Pl.displayName = "PhoneOutlined";
		const kl = n.forwardRef(Pl);
		const Tl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
					}
				}]
			},
			name: "edit",
			theme: "outlined"
		};
		var Nl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Tl
			}))
		};
		Nl.displayName = "EditOutlined";
		const Al = n.forwardRef(Nl);
		const Dl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
					}
				}]
			},
			name: "save",
			theme: "outlined"
		};
		var Rl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Dl
			}))
		};
		Rl.displayName = "SaveOutlined";
		const Il = n.forwardRef(Rl);

		function Ll(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Ml = function(t) {
			le(r, t);
			var n = Ll(r);

			function r(t) {
				var e;
				return ae(this, r), (e = n.call(this, t)).UNSAFE_componentWillReceiveProps = function(t) {
					Object.keys(t.customer).length && t.customer.id != e.state.id ? e.setState((0, Lt.applyFilters)("ddwcpos_manage_customer_state_on_receive_props", {
						id: t.customer.id,
						first_name: t.customer.first_name,
						last_name: t.customer.last_name,
						email: t.customer.email,
						phone: t.customer.phone,
						address_1: t.customer.billing.address_1 ? t.customer.billing.address_1 : "",
						address_2: t.customer.billing.address_2 ? t.customer.billing.address_2 : "",
						country: t.customer.billing.country,
						state: t.customer.billing.state,
						city: t.customer.billing.city,
						postcode: t.customer.billing.postcode
					}, t, f(e))) : Object.keys(t.customer).length || e.setState((0, Lt.applyFilters)("ddwcpos_modify_manage_customer_state", {
						id: "",
						first_name: "",
						last_name: "",
						email: "",
						phone: "",
						address_1: "",
						address_2: "",
						country: "",
						state: "",
						city: "",
						postcode: ""
					}, f(e)))
				}, e.handleInput = function(t, n) {
					var r = ke({}, n, t.target.value);
					"country" == n && (r.state = ""), e.setState(r)
				}, e.handleFormSubmit = function(t) {
					if (t.preventDefault(), Ri()) {
						var n = 0;
						e.requiredFields.forEach((function(t) {
							e.state[t] || (n = 1)
						})), n ? he.store.addNotification({
							title: (0, fe.__)("Error", "ddwc-multipos"),
							message: (0, fe.__)("Kindly fill out the mandatory field(s).", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}) : e.props.saveCustomer((0, Lt.applyFilters)("ddwcpos_modify_manage_customer_state_data_before_save", e.state, f(e)), f(e))
					} else he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Sorry, customer cannot be saved in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.requiredFields = (0, Lt.applyFilters)("ddwcpos_modify_manage_customer_required_fields", ["email"], f(e)), e.state = (0, Lt.applyFilters)("ddwcpos_modify_manage_customer_state", {
					id: "",
					first_name: "",
					last_name: "",
					email: "",
					phone: "",
					address_1: "",
					address_2: "",
					country: "",
					state: "",
					city: "",
					postcode: ""
				}, f(e)), e
			}
			return ce(r, [{
				key: "render",
				value: function() {
					var t = this,
						n = this.props.countries_and_states,
						r = (0, e.createElement)("span", {
							className: "required"
						}, "*"),
						o = [],
						i = [];
					for (var a in n.countries) o.push((0, e.createElement)("option", {
						key: a,
						value: a
					}, n.countries[a]));
					var s = this.state.country ? this.state.country : n.base_country;
					if (Object.keys(n.states).length)
						for (var c in n.states[s]) i.push((0, e.createElement)("option", {
							key: c,
							value: c
						}, n.states[s][c]));
					return (0, e.createElement)("div", {
						className: "ddwcpos-manage-customer-wrapper",
						style: window.screen.width < 768 ? {
							display: "none"
						} : {}
					}, (0, e.createElement)("h2", null, this.state.id ? (0, fe.__)("Edit Customer", "ddwc-multipos") : (0, fe.__)("Add New Customer", "ddwc-multipos")), (0, e.createElement)("form", {
						onSubmit: function(e) {
							return t.handleFormSubmit(e)
						}
					}, (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("First Name", "ddwc-multipos"), this.requiredFields.includes("first_name") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.first_name,
						onChange: function(e) {
							return t.handleInput(e, "first_name")
						},
						placeholder: (0, fe.__)("Enter First Name", "ddwc-multipos")
					})), (0, e.createElement)("label", null, (0, fe.__)("Last Name", "ddwc-multipos"), this.requiredFields.includes("last_name") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.last_name,
						onChange: function(e) {
							return t.handleInput(e, "last_name")
						},
						placeholder: (0, fe.__)("Enter Last Name", "ddwc-multipos")
					}))), (0, e.createElement)("label", null, (0, fe.__)("Email", "ddwc-multipos"), this.requiredFields.includes("email") && r, (0, e.createElement)("input", {
						type: "email",
						value: this.state.email,
						onChange: function(e) {
							return t.handleInput(e, "email")
						},
						placeholder: (0, fe.__)("Enter Email", "ddwc-multipos"),
						disabled: this.state.id
					})), (0, e.createElement)("label", null, (0, fe.__)("Phone", "ddwc-multipos"), this.requiredFields.includes("phone") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.phone,
						onChange: function(e) {
							return t.handleInput(e, "phone")
						},
						placeholder: (0, fe.__)("Enter Phone Number", "ddwc-multipos")
					})), (0, e.createElement)("label", null, (0, fe.__)("Address Line 1", "ddwc-multipos"), this.requiredFields.includes("address_1") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.address_1,
						onChange: function(e) {
							return t.handleInput(e, "address_1")
						},
						placeholder: (0, fe.__)("Enter Address Line 1", "ddwc-multipos")
					})), (0, e.createElement)("label", null, (0, fe.__)("Address Line 2", "ddwc-multipos"), this.requiredFields.includes("address_2") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.address_2,
						onChange: function(e) {
							return t.handleInput(e, "address_2")
						},
						placeholder: (0, fe.__)("Enter Address Line 2", "ddwc-multipos")
					})), (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("Country", "ddwc-multipos"), this.requiredFields.includes("country") && r, (0, e.createElement)("select", {
						value: this.state.country ? this.state.country : n.base_country,
						onChange: function(e) {
							return t.handleInput(e, "country")
						}
					}, o)), (0, e.createElement)("label", null, (0, fe.__)("State", "ddwc-multipos"), this.requiredFields.includes("state") && r, i.length ? (0, e.createElement)("select", {
						value: this.state.state,
						onChange: function(e) {
							return t.handleInput(e, "state")
						}
					}, i) : (0, e.createElement)("input", {
						type: "text",
						value: this.state.state,
						onChange: function(e) {
							return t.handleInput(e, "state")
						},
						placeholder: (0, fe.__)("Enter State", "ddwc-multipos")
					}))), (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("City", "ddwc-multipos"), this.requiredFields.includes("city") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.city,
						onChange: function(e) {
							return t.handleInput(e, "city")
						},
						placeholder: (0, fe.__)("Enter City", "ddwc-multipos")
					})), (0, e.createElement)("label", null, (0, fe.__)("Postcode", "ddwc-multipos"), this.requiredFields.includes("postcode") && r, (0, e.createElement)("input", {
						type: "text",
						value: this.state.postcode,
						onChange: function(e) {
							return t.handleInput(e, "postcode")
						},
						placeholder: (0, fe.__)("Enter Postcode", "ddwc-multipos")
					}))), (0, Lt.applyFilters)("ddwcpos_add_manage_customer_form_fields_before_save_button", "", this), (0, e.createElement)("button", {
						type: "submit",
						className: "ddwcpos-button"
					}, (0, e.createElement)(Il, null), (0, fe.__)("Save", "ddwc-multipos")), this.state.id || window.screen.width < 768 ? (0, e.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.props.handleResetEditCustomer
					}, (0, fe.__)("Cancel", "ddwc-multipos")) : null))
				}
			}]), r
		}(n.Component);
		const ql = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				saveCustomer: Sc
			}, t))
		}))(Ml);

		function jl(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Bl = function(n) {
			le(o, n);
			var r = jl(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).handleCustomerSearch = function(t) {
					e.setState({
						search: t.target.value
					}), e.props.loadSearchCustomers(t.target.value, e.props.customers, e.props.customers.defaultCustomer)
				}, e.handleEditCustomer = function(t) {
					e.setState({
						editCustomer: t
					}), window.screen.width < 768 && (document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "block")
				}, e.handleDeleteCustomer = function(t) {
					Ri() ? confirm((0, fe.__)("Are you sure you want to delete this customer?", "ddwc-multipos")) && e.props.deleteCustomer(t.id) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Sorry, customer cannot be deleted in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.handleResetEditCustomer = function() {
					e.setState({
						editCustomer: {}
					}), window.screen.width < 768 && (document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "initial", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "none")
				}, e.handleSetCustomer = function(t) {
					e.props.updateDefaultCustomer(t)
				}, e.handleAddNewCustomerMobile = function() {
					document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "block"
				}, e.state = {
					search: "",
					editCustomer: {}
				}, e
			}
			return ce(o, [{
				key: "componentDidMount",
				value: function() {
					this.props.getCustomers(this.props.outlet.id), this.props.getCountriesAndStates(this.props.outlet.id)
				}
			}, {
				key: "render",
				value: function() {
					var n = this,
						r = this.props.customers.searchedCustomers,
						o = this.props.customers.defaultCustomer,
						i = (0, Lt.applyFilters)("ddwcpos_modify_customer_list_row_height_at_pos", window.screen.width < 768 ? 128 : 80);
					return (0, e.createElement)("div", {
						className: "ddwcpos-customers-tab-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-list-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, e.createElement)("h2", null, (0, fe.__)("Customers", "ddwc-multipos")), window.screen.width < 768 ? (0, e.createElement)("button", {
						className: "ddwcpos-button",
						onClick: this.handleAddNewCustomerMobile
					}, (0, fe.__)("Add New", "ddwc-multipos")) : null, (0, e.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						value: this.state.search,
						placeholder: (0, fe.__)("Search Customer by name, email or phone...", "ddwc-multipos"),
						onChange: function(t) {
							return n.handleCustomerSearch(t)
						},
						autoFocus: !0,
						autoComplete: "off"
					})), (0, e.createElement)("span", null, r.length + " " + (0, fe.__)("Results", "ddwc-multipos")))), r.length > 0 ? (0, e.createElement)(Js, {
						className: "ddwcpos-list",
						height: 800,
						itemCount: r.length,
						itemSize: i
					}, (function(t) {
						var i = t.index,
							a = t.style,
							s = "".concat(r[i].first_name, " ").concat(r[i].last_name);
						return s = " " != s ? s : r[i].username, (0, e.createElement)("div", {
							className: "ddwcpos-list-row",
							style: a
						}, (0, e.createElement)("div", {
							className: "ddwcpos-list-details"
						}, (0, e.createElement)("img", {
							src: r[i].avatar_url,
							alt: r[i].username
						}), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, s), (0, e.createElement)("p", null, (0, e.createElement)(Cl, null), r[i].email), r[i].phone ? (0, e.createElement)("p", null, (0, e.createElement)(kl, null), r[i].phone) : null, (0, Lt.applyFilters)("ddwcpos_add_more_customer_details_at_pos", "", r[i], n)), (0, e.createElement)("div", null, (0, e.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(t) {
								return n.handleEditCustomer(r[i])
							},
							title: (0, fe.__)("Edit Customer", "ddwc-multipos")
						}, (0, e.createElement)(Al, null)), (0, e.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(t) {
								return n.handleDeleteCustomer(r[i])
							},
							title: (0, fe.__)("Delete Customer", "ddwc-multipos")
						}, (0, e.createElement)(Ya, null)), o && o.id == r[i].id ? (0, e.createElement)("span", {
							className: "ddwcpos-icon-card",
							title: (0, fe.__)("Current Customer", "ddwc-multipos")
						}, (0, e.createElement)(Vc, null), (0, fe.__)("Current Customer", "ddwc-multipos")) : (0, e.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(t) {
								return n.handleSetCustomer(r[i].id)
							},
							title: (0, fe.__)("Set Customer", "ddwc-multipos")
						}, (0, e.createElement)(Vc, null), (0, fe.__)("Set Customer", "ddwc-multipos")))))
					})) : (0, e.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Customers Found", "ddwc-multipos")))), (0, e.createElement)(ql, t({
						customer: this.state.editCustomer
					}, this.props, {
						handleResetEditCustomer: this.handleResetEditCustomer
					})))
				}
			}]), o
		}(n.Component);
		const Fl = q((function(t) {
			return {
				customers: t.customers,
				countries_and_states: t.countries_and_states
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getCustomers: yc,
				getCountriesAndStates: ul,
				loadSearchCustomers: Ec,
				updateDefaultCustomer: Oc,
				deleteCustomer: Cc
			}, t))
		}))(Bl);
		const Hl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"
					}
				}]
			},
			name: "printer",
			theme: "outlined"
		};
		var Ul = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Hl
			}))
		};
		Ul.displayName = "PrinterOutlined";
		const Vl = n.forwardRef(Ul);
		const zl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "arrow-left",
			theme: "outlined"
		};
		var Wl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: zl
			}))
		};
		Wl.displayName = "ArrowLeftOutlined";
		const Gl = n.forwardRef(Wl);
		var Kl = __webpack_require__(7576);

		function $l(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var Ql = function(t) {
				le(o, t);
				var r = $l(o);

				function o(t) {
					var e;
					ae(this, o), e = r.call(this, t), Zl.call(f(e));
					var n = {};
					return Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).forEach((function(t) {
						0 == Object.keys(n) && "enabled" === t.status && (n = t)
					})), e.state = (0, Lt.applyFilters)("ddwcpos_modify_state_in_pay_component", {
						orderNote: "",
						sendToKitchen: !("restaurant" !== e.props.outlet.mode || !ddwcposPOSObj.ddwcpos_configuration.order_send_kitchen_checked_enabled),
						showinvoicePopup: !1,
						order: {},
						paymentMethods: [{
							amount: "",
							slug: n.slug,
							name: n.name,
							active: 1
						}]
					}, f(e)), e
				}
				return ce(o, [{
					key: "render",
					value: function() {
						var t = this,
							r = parseFloat(this.props.cart.total.cart_total),
							o = "";
						if (this.state.showinvoicePopup) {
							var i = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Print Receipt", "ddwc-multipos")), (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("Order #%s is %s.", "ddwc-multipos"), this.state.order.order_id, this.state.order.order_status_label)), (0, Lt.applyFilters)("ddwcpos_add_content_before_actions_in_print_invoice_popup", "", this)),
								a = {
									handleOverlay: this.handleToggleInvoicePopup,
									popupContent: i,
									notDisabled: !0,
									handleSuccess: this.handleInvoiceSubmit,
									handleCancel: this.handleVisitHome,
									successButtonText: (0, e.createElement)(n.Fragment, null, (0, e.createElement)(Vl, null), (0, fe.__)("Print", "ddwc-multipos"))
								};
							return o = (0, e.createElement)(Ps, a), (0, e.createElement)("div", {
								className: "ddwcpos-pay-tab-wrapper"
							}, o)
						}
						if (!this.props.cart.list.length || !this.props.cart.list[0].cart.length) return (0, e.createElement)("div", {
							className: "ddwcpos-pay-tab-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-order-note-container"
						}, (0, e.createElement)("p", null, (0, fe.__)("Please add products in the cart to place the order", "ddwc-multipos"))));
						var s = 0,
							c = [],
							l = r;
						this.state.paymentMethods.forEach((function(n, r) {
							s += parseFloat(n.amount) || 0;
							var o = Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).map((function(t) {
									if ("enabled" == t.status) return (0, e.createElement)("option", {
										key: t.slug,
										value: t.slug
									}, t.name)
								})),
								i = "ddwcpos-method-row";
							n.active ? i += " ddwcpos-method-active" : l -= n.amount, c.push((0, e.createElement)("div", {
								key: r,
								className: i,
								onClick: function(e) {
									return t.handleChangeActivePaymentMethod(r)
								}
							}, (0, e.createElement)("input", {
								type: "text",
								value: n.amount,
								readOnly: !0,
								onChange: function(e) {
									return t.handleAmountChange(e, r)
								}
							}), (0, e.createElement)("select", {
								onChange: function(e) {
									return t.handleChangePaymentMethod(e, r)
								},
								value: n.slug
							}, o), 0 != r ? (0, e.createElement)(_s, {
								onClick: function(e) {
									return t.handleRemovePaymentMethod(e, r)
								}
							}) : (0, e.createElement)("span", null)))
						}));
						for (var u = parseFloat(r >= s ? r - s : 0).toFixed(2), d = parseFloat(s >= r ? s - r : 0).toFixed(2), p = l = l > 0 ? l : 0, f = Math.ceil(p), h = 5; p == f && l > 0;) f = Math.ceil(p / h) * h, h += 5;
						h = 5;
						for (var m = f; m == f && l > 0;) m = Math.ceil(f / h) * h, h += 5;
						h = 5;
						for (var _ = m; _ == m && l > 0;) _ = Math.ceil(m / h) * h, h += 5;
						return (0, e.createElement)("div", {
							className: "ddwcpos-pay-tab-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-pay-summary"
						}, (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Total Due", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(r))), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Total Paying", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(s))), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Pay Left", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(u))), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, fe.__)("Change", "ddwc-multipos")), (0, e.createElement)("span", null, (0, Ma.R)(d)))), (0, e.createElement)("div", {
							className: "ddwcpo-pay-method-container"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-method-row"
						}, (0, e.createElement)("h4", null, (0, fe.__)("Amount", "ddwc-multipos")), (0, e.createElement)("h4", null, (0, fe.__)("Method", "ddwc-multipos"))), c, ddwcposPOSObj.ddwcpos_configuration.multiple_payments_enabled ? (0, e.createElement)("button", {
							onClick: this.handleAddNewPaymentMethod
						}, (0, fe.__)("Add Another Payment Method", "ddwc-multipos")) : null), (0, Lt.applyFilters)("ddwcpos_add_content_below_payment_methods_section", "", this), ddwcposPOSObj.ddwcpos_configuration.order_note_enabled ? (0, e.createElement)("div", {
							className: "ddwcpos-order-note-container"
						}, (0, e.createElement)("textarea", {
							value: this.state.orderNote,
							onChange: function(e) {
								return t.handleOrderNoteChange(e)
							},
							placeholder: (0, fe.__)("Add Order Note", "ddwc-multipos")
						})) : null, "restaurant" === this.props.outlet.mode ? (0, e.createElement)("div", {
							className: "ddwcpos-order-note-container"
						}, (0, e.createElement)("label", null, (0, e.createElement)("input", {
							type: "checkbox",
							value: "yes",
							checked: this.state.sendToKitchen,
							onChange: function(e) {
								return t.handleSendToKitchenChange(e)
							}
						}), " " + (0, fe.__)("Send Order to Kitchen", "ddwc-multipos"))) : null, (0, e.createElement)("div", {
							className: "ddwcpos-numeric-pay-container"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-tendered-suggestions"
						}, (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput((0, Ma.F)(p, ddwcposPOSObj.currency_format_num_decimals), !0)
							}
						}, (0, Ma.R)(p)), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput((0, Ma.F)(f, ddwcposPOSObj.currency_format_num_decimals), !0)
							}
						}, (0, Ma.R)(f)), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput((0, Ma.F)(m, ddwcposPOSObj.currency_format_num_decimals), !0)
							}
						}, (0, Ma.R)(m)), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput((0, Ma.F)(_, ddwcposPOSObj.currency_format_num_decimals), !0)
							}
						}, (0, Ma.R)(_))), (0, e.createElement)("div", {
							className: "ddwcpos-pay-calculator"
						}, (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("1")
							}
						}, "1"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("2")
							}
						}, "2"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("3")
							}
						}, "3"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("clear")
							}
						}, (0, fe.__)("clear", "ddwc-multipos")), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("4")
							}
						}, "4"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("5")
							}
						}, "5"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("6")
							}
						}, "6"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("Backspace")
							}
						}, (0, e.createElement)(Gl, null)), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("7")
							}
						}, "7"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("8")
							}
						}, "8"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("9")
							}
						}, "9"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handlePayClick()
							},
							className: "ddwcpos-pay-button",
							disabled: (0, Lt.applyFilters)("ddwcpos_modify_pay_button_disabled_check", s < r, this)
						}, (0, fe.__)("Pay", "ddwc-multipos")), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("0")
							}
						}, "0"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput(".")
							}
						}, "."), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("00")
							}
						}, "00"), (0, e.createElement)("span", {
							onClick: function(e) {
								return t.handleInput("cancel")
							},
							className: "ddwcpos-cancel-button"
						}, (0, fe.__)("Cancel", "ddwc-multipos")))), (0, Lt.applyFilters)("ddwcpos_add_custom_popup_on_pay_component", "", this))
					}
				}]), o
			}(n.Component),
			Zl = function() {
				var t = this;
				this.componentDidMount = function() {
					t.props.getCustomers(t.props.outlet.id), t.props.getCart(), t.props.getProducts(t.props.outlet.id), document.addEventListener("keydown", t.handleKeyDown, !1)
				}, this.componentWillUnmount = function() {
					document.removeEventListener("keydown", t.handleKeyDown, !1)
				}, this.handleAddNewPaymentMethod = function() {
					var e = t.state.paymentMethods;
					e.forEach((function(t, n) {
						e[n].active = 0
					}));
					var n = {};
					Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).forEach((function(t) {
						0 == Object.keys(n) && "enabled" === t.status && (n = t)
					})), e.push({
						amount: "",
						slug: n.slug,
						name: n.name,
						active: 1
					}), t.setState({
						paymentMethods: e
					})
				}, this.handleChangeActivePaymentMethod = function(e) {
					var n = t.state.paymentMethods;
					n.forEach((function(t, r) {
						n[r].active = e == r ? 1 : 0
					})), t.setState({
						paymentMethods: n
					})
				}, this.handleRemovePaymentMethod = function(e, n) {
					e.stopPropagation();
					var r = t.state.paymentMethods;
					r.splice(n, 1), r.forEach((function(t, e) {
						r[e].active = 0 == e ? 1 : 0
					})), t.setState({
						paymentMethods: r
					})
				}, this.handleChangePaymentMethod = function(e, n) {
					var r = t.state.paymentMethods;
					r[n].slug = e.target.value, r[n].name = e.target.options[e.target.selectedIndex].text, t.setState({
						paymentMethods: r
					})
				}, this.handleAmountChange = function(e, n) {
					var r = t.state.paymentMethods;
					r[n].amount = e.target.value, t.setState({
						paymentMethods: r
					})
				}, this.handleKeyDown = function(e) {
					if (e.target && !e.target.closest(".ddwcpos-order-note-container") && !e.target.closest(".ddwcpos-popup-content")) {
						var n = !1;
						isNaN(e.key) ? "Backspace" == e.key || "." == e.key ? n = !0 : 13 == e.which && t.handlePayClick() : n = !0, n && t.handleInput(e.key)
					}
				}, this.handleInput = function(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if ("cancel" == e) t.handleVisitHome();
					else {
						var r = t.state.paymentMethods;
						r.forEach((function(t, o) {
							t.active && (n ? r[o].amount = e.toString() : "Backspace" == e ? r[o].amount = r[o].amount.slice(0, -1) : "clear" == e ? r[o].amount = "" : r[o].amount += e)
						})), t.setState({
							paymentMethods: r
						})
					}
				}, this.handleOrderNoteChange = function(e) {
					t.setState({
						orderNote: e.target.value
					})
				}, this.handleSendToKitchenChange = function(e) {
					t.setState({
						sendToKitchen: !t.state.sendToKitchen
					})
				}, this.handlePayClick = function() {
					var e = document.querySelector(".ddwcpos-pay-button"),
						n = parseFloat(t.props.cart.total.cart_total),
						r = 0;
					t.state.paymentMethods.forEach((function(t) {
						r += parseFloat(t.amount) || 0
					})), !e.getAttribute("disabled") && (0, Lt.applyFilters)("ddwcpos_modify_pay_check_to_place_order", r >= n, t) && (e.setAttribute("disabled", "disabled"), t.props.createOrder((0, Lt.applyFilters)("ddwcpos_modify_current_state_data_before_create_order", t.state), t).then((function(n) {
						e.removeAttribute("disabled"), n && (t.props.getOrders(t.props.outlet.id), t.props.getCoupons(), t.props.getDiscount(), t.props.getCart(), (0, Lt.doAction)("ddwcpos_after_create_order", n, t), "restaurant" === t.props.outlet.mode && t.state.sendToKitchen && t.props.sendToKitchen(n), (0, Lt.applyFilters)("ddwcpos_prevent_default_invoice_popup", !0, n, t) && function(t, e) {
							return new Promise((function(n, r) {
								xi.cart.where("id").equals(e).delete().then((function(r) {
									r && (t.forEach((function(t) {
										t.parent && xi.products.where("product_id").equals(t.parent).toArray().then((function(e) {
											if (e.length) {
												var n = e[0].available_variations.map((function(e) {
													return e.variation_id == t.id && (e.stock = e.stock - t.quantity, e.stock_quantity = e.stock_quantity > 0 ? e.stock_quantity - t.quantity : e.stock_quantity), e
												}));
												xi.products.where("product_id").equals(t.parent).modify((function(t) {
													t.available_variations = n
												}))
											}
										})), xi.products.where("product_id").equals(t.id).modify((function(e) {
											e.stock = e.stock - t.quantity, e.stock_quantity = e.stock_quantity > 0 ? e.stock_quantity - t.quantity : e.stock_quantity
										}))
									})), xi.coupon.where("cart_id").equals(e).delete().then((function(t) {
										xi.discount.where("cart_id").equals(e).delete().then((function(t) {
											n(t)
										}))
									})))
								}))
							}))
						}(n.products, t.props.cart.list[0].id).then((function(e) {
							t.props.getCart(), t.setState({
								showinvoicePopup: !0,
								order: n
							})
						})), ddwcposPOSObj.ddwcpos_configuration.offline_orders_enabled && Ri() && t.props.syncOfflineOrders([n]).then((function(e) {
							e && t.props.getOrders(t.props.outlet.id)
						})))
					})))
				}, this.handleToggleInvoicePopup = function() {
					t.setState({
						showinvoicePopup: !t.state.showinvoicePopup
					})
				}, this.handleInvoiceSubmit = function() {
					t.props.printInvoice(t.state.order), t.handleVisitHome()
				}, this.handleVisitHome = function() {
					t.props.addNewCart(), t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
				}
			};
		const Yl = q((function(t) {
			return {
				cart: t.cart
			}
		}), (function(t) {
			var e;
			return Object.assign({
				dispatch: t
			}, (0, S.DE)((ke(e = {
				getCart: va,
				getCustomers: yc,
				createOrder: pc,
				getProducts: tl,
				getDiscount: ps,
				getCoupons: la
			}, "getCart", va), ke(e, "syncOfflineOrders", hc), ke(e, "getOrders", cc), ke(e, "addNewCart", Ia), ke(e, "printInvoice", Kl.Ru), ke(e, "sendToKitchen", as), e), t))
		}))(Ql);
		const Jl = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "defs",
					attrs: {},
					children: [{
						tag: "style",
						attrs: {}
					}]
				}, {
					tag: "path",
					attrs: {
						d: "M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"
					}
				}, {
					tag: "path",
					attrs: {
						d: "M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"
					}
				}]
			},
			name: "field-time",
			theme: "outlined"
		};
		var Xl = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: Jl
			}))
		};
		Xl.displayName = "FieldTimeOutlined";
		const tu = n.forwardRef(Xl);
		const eu = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"
					}
				}]
			},
			name: "bell",
			theme: "outlined"
		};
		var nu = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: eu
			}))
		};
		nu.displayName = "BellOutlined";
		const ru = n.forwardRef(nu);
		const ou = {
			icon: {
				tag: "svg",
				attrs: {
					viewBox: "64 64 896 896",
					focusable: "false"
				},
				children: [{
					tag: "path",
					attrs: {
						d: "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"
					}
				}]
			},
			name: "undo",
			theme: "outlined"
		};
		var iu = function(t, e) {
			return n.createElement(Cn, Object.assign({}, t, {
				ref: e,
				icon: ou
			}))
		};
		iu.displayName = "UndoOutlined";
		const au = n.forwardRef(iu);

		function su(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var cu = function(t) {
			le(o, t);
			var r = su(o);

			function o(t) {
				var e;
				return ae(this, o), (e = r.call(this, t)).handlePrintInvoice = function(t) {
					e.props.printInvoice(t)
				}, e.handleOrderRefund = function(t) {
					e.handleToggleRefundPopup()
				}, e.handleToggleRefundPopup = function() {
					e.setState({
						showRefundPopup: !e.state.showRefundPopup,
						refundProducts: {},
						restockItems: !0,
						refundReason: ""
					})
				}, e.handleProcessRefund = function(t, n) {
					t.target.setAttribute("disabled", "disabled");
					var r = {
						refundReason: e.state.refundReason,
						refundProducts: e.state.refundProducts,
						restockItems: e.state.restockItems,
						orderId: n
					};
					e.props.createRefund(r).then((function(t) {
						e.props.getOrders(e.props.outlet.id), e.props.handleChangeOrderDetails(t), e.props.updateRefundStock(e.props.order.products, r.refundProducts), he.store.addNotification({
							title: (0, fe.__)("Refund Success", "ddwc-multipos"),
							message: (0, fe.__)("Refund is done for the order successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), e.handleToggleRefundPopup()
					}))
				}, e.handleRefundReasonInput = function(t) {
					e.setState({
						refundReason: t.target.value
					})
				}, e.handleRestockItemsInput = function(t) {
					e.setState({
						restockItems: !e.state.restockItems
					})
				}, e.handleChangeRefundQuantity = function(t, n) {
					var r = t.target.value,
						o = e.state.refundProducts,
						i = n.quantity - n.returned_quantity;
					(r = r <= i ? r : i) <= 0 ? delete o[n.item_id] : o[n.item_id] = r, e.setState({
						refundProducts: o
					}), e.handleCalculateRefundAmount()
				}, e.handleIncreaseDecreaseRefundQuantity = function(t, n) {
					var r = e.state.refundProducts,
						o = r[n.item_id] ? parseInt(r[n.item_id]) + t : 0 + t,
						i = n.quantity - n.returned_quantity;
					(o = o <= i ? o : i) <= 0 ? delete r[n.item_id] : r[n.item_id] = o, e.setState({
						refundProducts: r
					}), e.handleCalculateRefundAmount()
				}, e.handleCalculateRefundAmount = function() {
					var t = e.props.order.products.reduce((function(t, n) {
						var r = parseFloat(t);
						e.state.refundProducts[n.item_id] && (r += parseFloat(n.uf * e.state.refundProducts[n.item_id]), Object.values(n.taxes).forEach((function(t) {
							r += parseFloat(t)
						})));
						return r
					}), 0);
					e.setState({
						refundAmount: t
					})
				}, e.handleAddHoldCart = function(t) {
					var n = t.id,
						r = t.customer,
						o = t.table;
					e.props.cart.list.length && e.props.cart.list[0].cart.length ? confirm((0, fe.__)("There are items present in the cart, proceeding will replace these items. Please confirm")) && (e.props.addHoldCartToCurrentCart(n), e.props.updateDefaultCustomer(r.id), o.slug && e.props.updateDefaultTable(o.slug), e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))) : (e.props.addHoldCartToCurrentCart(n), e.props.updateDefaultCustomer(r.id), o.slug && e.props.updateDefaultTable(o.slug), e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint)))
				}, e.handleSendToKitchen = function(t) {
					e.props.sendToKitchen(t)
				}, e.handleDeleteHoldCart = function(t) {
					e.props.deleteHoldCart(t), he.store.addNotification({
						title: (0, fe.__)("Delete Success", "ddwc-multipos"),
						message: (0, fe.__)("Hold order is deleted successfully.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), e.props.handleToggleTableOrderPopup && e.props.handleToggleTableOrderPopup(), window.screen.width < 768 && (document.querySelector(".ddwcpos-order-details-wrapper").style.position = "initial", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "none")
				}, e.handleBackOrderDetailsMobile = function() {
					document.querySelector(".ddwcpos-order-details-wrapper").style.position = "initial", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "none"
				}, e.state = {
					showRefundPopup: !1,
					restockItems: !0,
					refundReason: "",
					refundProducts: {},
					refundAmount: 0
				}, e
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var t = this,
						r = this.props.orderType,
						o = this.props.order;
					if (o) {
						if ("hold" == r) {
							var i = o.list[0],
								a = o.total,
								s = i.cart.map((function(t, n) {
									var r = '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />');
									return t.image && (r = t.image), (0, e.createElement)("div", {
										className: "ddwcpos-order-product",
										key: n
									}, (0, e.createElement)("div", {
										className: "ddwcpos-order-product-info"
									}, (0, e.createElement)("div", {
										className: "ddwcpos-order-product-image",
										dangerouslySetInnerHTML: {
											__html: r
										}
									}), (0, e.createElement)("div", {
										className: "ddwcpos-order-product-details"
									}, (0, e.createElement)("h4", {
										title: (0, La.ZP)(t.name)
									}, (0, La.ZP)(t.name)), (0, e.createElement)("p", null, (0, Ma.R)(t.uf), " x ", t.quantity)), (0, e.createElement)("div", {
										className: "ddwcpos-order-product-price"
									}, (0, e.createElement)("p", null, (0, Ma.R)(t.uf_total)))))
								}));
							return (0, e.createElement)("div", {
								className: "ddwcpos-order-details-wrapper",
								style: !this.props.tableView && window.screen.width < 768 ? {
									display: "none"
								} : {}
							}, (0, e.createElement)("div", {
								className: "ddwcpos-order-details-header"
							}, (0, e.createElement)("h2", null, this.props.tableView ? (0, fe.__)("Table Order", "ddwc-multipos") : (0, fe.__)("Cart Details", "ddwc-multipos")), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, e.createElement)(ra, null), i.customer.email), o.list[0].table.name ? (0, e.createElement)("p", null, (0, e.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, e.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, e.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, e.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))), o.list[0].table.name) : null), !this.props.tableView && window.screen.width < 768 ? (0, e.createElement)("button", {
								className: "ddwcpos-button ddwcpos-button-secondary",
								onClick: this.handleBackOrderDetailsMobile
							}, (0, fe.__)("X", "ddwc-multipos")) : null), (0, e.createElement)("div", {
								className: "ddwcpos-order-products"
							}, s), (0, e.createElement)("div", {
								className: "ddwcpos-order-totals"
							}, (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Subtotal", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(a.cart_subtotal, o.order_currency_symbol))), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Tax", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(a.tax_total))), (0, e.createElement)("div", {
								className: "ddwcpos-order-total"
							}, (0, e.createElement)("p", null, (0, fe.__)("Total", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(a.cart_total))), (0, e.createElement)("div", {
								className: "ddwcpos-hold-order-info"
							}, (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("Info: %s", "ddwc-multipos"), i.info))), "restaurant" === this.props.outlet.mode ? (0, e.createElement)("div", null, (0, e.createElement)("button", {
								className: "ddwcpos-button ddwcpos-button-secondary",
								onClick: function(e) {
									return t.handleSendToKitchen(i)
								}
							}, (0, e.createElement)(ru, null), (0, fe.__)("Send to Kitchen", "ddwc-multipos"))) : null, (0, e.createElement)("div", {
								className: "ddwcpos-hold-order-actions"
							}, (0, e.createElement)("button", {
								className: "ddwcpos-button",
								onClick: function(e) {
									return t.handleAddHoldCart(i)
								}
							}, (0, e.createElement)(Nn, null), (0, fe.__)("Add to Cart", "ddwc-multipos")), (0, e.createElement)("button", {
								className: "ddwcpos-button",
								onClick: function(e) {
									return t.handleDeleteHoldCart(i.id)
								}
							}, (0, e.createElement)(Ya, null), (0, fe.__)("Delete", "ddwc-multipos")))))
						}
						var c = o.products.map((function(t, n) {
								var r = '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />');
								t.image && (r = t.image);
								var i = t.meta_data && t.meta_data.length ? t.meta_data.map((function(t) {
									return (0, e.createElement)("p", null, (0, e.createElement)("strong", null, t.key, ": "), t.value)
								})) : [];
								return (0, e.createElement)("div", {
									className: "ddwcpos-order-product",
									key: n
								}, (0, e.createElement)("div", {
									className: "ddwcpos-order-product-info"
								}, (0, e.createElement)("div", {
									className: "ddwcpos-order-product-image",
									dangerouslySetInnerHTML: {
										__html: r
									}
								}), (0, e.createElement)("div", {
									className: "ddwcpos-order-product-details"
								}, (0, e.createElement)("h4", {
									title: (0, La.ZP)(t.name)
								}, (0, La.ZP)(t.name)), (0, e.createElement)("p", null, (0, Ma.R)(t.uf, o.order_currency_symbol), " x ", t.quantity, t.returned_quantity > 0 ? (0, e.createElement)("span", {
									className: "ddwcpos-font-green"
								}, " ", (0, e.createElement)(au, null), t.returned_quantity) : null)), (0, e.createElement)("div", {
									className: "ddwcpos-order-product-price"
								}, (0, e.createElement)("p", null, (0, Ma.R)(t.uf_total, o.order_currency_symbol)))), i.length ? (0, e.createElement)("div", {
									className: "ddwcpos-order-product-meta-info"
								}, i) : null)
							})),
							l = 0,
							u = o.tax_lines.map((function(t, n) {
								if ("online" == r) return (0, e.createElement)("div", {
									key: n
								}, (0, e.createElement)("p", null, t.label), (0, e.createElement)("strong", null, (0, Ma.R)(t.total, o.order_currency_symbol)));
								if ("offline" == r) {
									var i = t.rate * o.order_subtotal / 100;
									return l += i, (0, e.createElement)("div", {
										key: n
									}, (0, e.createElement)("p", null, t.label), (0, e.createElement)("strong", null, (0, Ma.R)(i, o.order_currency_symbol)))
								}
							})),
							d = "";
						d = o.payment_methods.length ? o.payment_methods.map((function(t, n) {
							return (0, e.createElement)("div", {
								key: n
							}, (0, e.createElement)("p", null, t.name), (0, e.createElement)("strong", null, (0, Ma.R)(t.amount, o.order_currency_symbol)))
						})) : (0, e.createElement)("div", null, (0, e.createElement)("p", null, o.payment_method_title), (0, e.createElement)("strong", null, (0, Ma.R)(o.tendered, o.order_currency_symbol)));
						var p = [];
						"online" == r ? p = o.coupons.map((function(t, n) {
							return (0, e.createElement)("span", {
								className: "ddwcpos-order-applied-coupons",
								key: n
							}, t.code, " (".concat((0, Ma.R)(t.amount, o.order_currency_symbol), ")"))
						})) : "offline" == r && (p = o.coupons.map((function(t, n) {
							return (0, e.createElement)("span", {
								className: "ddwcpos-order-applied-coupons",
								key: n
							}, t.code, " (".concat((0, Ma.R)(t.price, o.order_currency_symbol), ")"))
						})));
						var f = 0;
						"online" == r ? f = o.discount : "offline" == r && Object.keys(o.discount).length > 0 && (f = "fixed" == o.discount.type ? -o.discount.amount : -o.discount.amount * (o.order_subtotal + l) / 100);
						var h = "";
						if (this.state.showRefundPopup) {
							var m = o.products.map((function(n, r) {
									var i = n.quantity - n.returned_quantity;
									if (i > 0) {
										var a = '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />');
										n.image && (a = n.image);
										var s = t.state.refundProducts[n.item_id] ? t.state.refundProducts[n.item_id] : 0;
										return (0, e.createElement)("div", {
											className: "ddwcpos-order-product",
											key: r
										}, (0, e.createElement)("div", {
											className: "ddwcpos-order-product-info"
										}, (0, e.createElement)("div", {
											className: "ddwcpos-order-product-image",
											dangerouslySetInnerHTML: {
												__html: a
											}
										}), (0, e.createElement)("div", {
											className: "ddwcpos-order-product-details"
										}, (0, e.createElement)("h4", {
											title: (0, La.ZP)(n.name)
										}, (0, La.ZP)(n.name)), (0, e.createElement)("p", null, (0, Ma.R)(n.uf, o.order_currency_symbol), " x ", i)), (0, e.createElement)("div", {
											className: "ddwcpos-edit-cart-product-quantity"
										}, (0, e.createElement)("div", {
											className: "ddwcpos-icon-card",
											title: (0, fe.__)("Decrease Quantity", "ddwc-multipos"),
											onClick: function(e) {
												return t.handleIncreaseDecreaseRefundQuantity(-1, n)
											}
										}, (0, e.createElement)(Ba, null)), (0, e.createElement)("input", {
											type: "number",
											min: "0",
											max: i,
											value: s,
											onChange: function(e) {
												return t.handleChangeRefundQuantity(e, n)
											}
										}), (0, e.createElement)("div", {
											className: "ddwcpos-icon-card",
											title: (0, fe.__)("Increase Quantity", "ddwc-multipos"),
											onClick: function(e) {
												return t.handleIncreaseDecreaseRefundQuantity(1, n)
											}
										}, (0, e.createElement)(Ua, null)))))
									}
								})),
								_ = (0, e.createElement)(n.Fragment, null, (0, e.createElement)("h2", null, (0, fe.__)("Available Items for Refund", "ddwc-multipos")), (0, e.createElement)("div", {
									className: "ddwcpos-order-products"
								}, m), (0, e.createElement)("div", null, (0, e.createElement)("span", {
									className: "ddwcpos-float-left"
								}, (0, e.createElement)("label", null, (0, e.createElement)("input", {
									type: "checkbox",
									onChange: function(e) {
										return t.handleRestockItemsInput(e)
									},
									placeholder: (0, fe.__)("Enter Reason (Optional)", "ddwc-multipos"),
									checked: this.state.restockItems
								}), " " + (0, fe.__)("Restock Items", "ddwc-multipos"))), (0, e.createElement)("span", {
									className: "ddwcpos-float-right ddwcpos-font-green"
								}, (0, fe.sprintf)((0, fe.__)("Refund Amount: %s %s", "ddwc-multipos"), (0, Ma.R)(this.state.refundAmount), "yes" == ddwcposPOSObj.tax_enabled ? ddwcposPOSObj.ddwcpos_configuration.tax_included_label : ""))), (0, e.createElement)("input", {
									type: "text",
									onKeyUp: function(e) {
										return t.handleRefundReasonInput(e)
									},
									placeholder: (0, fe.__)("Enter Reason (Optional)", "ddwc-multipos"),
									autoFocus: !0
								})),
								g = {
									popupStyle: window.screen.width < 768 ? {} : {
										width: "50%"
									},
									handleOverlay: this.handleToggleRefundPopup,
									popupContent: _,
									notDisabled: Object.keys(this.state.refundProducts).length,
									successButtonText: (0, fe.__)("Refund", "ddwc-multipos"),
									handleSuccess: this.handleProcessRefund,
									handleSuccessArgs: [o.id],
									handleCancel: this.handleToggleRefundPopup
								};
							h = (0, e.createElement)(Ps, g)
						}
						return (0, e.createElement)("div", {
							className: "ddwcpos-order-details-wrapper",
							style: window.screen.width < 768 ? {
								display: "none"
							} : {}
						}, (0, e.createElement)("div", {
							className: "ddwcpos-order-details-header"
						}, (0, e.createElement)("h2", null, (0, fe.sprintf)((0, fe.__)("Order #%s", "ddwc-multipos"), o.order_id)), (0, e.createElement)("p", null, (0, e.createElement)(ra, null), o.email), window.screen.width < 768 ? (0, e.createElement)("button", {
							className: "ddwcpos-button ddwcpos-button-secondary",
							onClick: this.handleBackOrderDetailsMobile
						}, (0, fe.__)("X", "ddwc-multipos")) : null), (0, e.createElement)("div", {
							className: "ddwcpos-order-products"
						}, c), (0, e.createElement)("div", {
							className: "ddwcpos-order-totals"
						}, (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Subtotal", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(o.order_subtotal, o.order_currency_symbol))), u, (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Discount", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(f, o.order_currency_symbol))), (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Applied Coupon(s)", "ddwc-multipos")), (0, e.createElement)("strong", null, p.length ? p : (0, fe.__)("N/A", "ddwc-multipos"))), (0, Lt.applyFilters)("ddwcpos_add_details_before_total_in_order_details", "", o, this), (0, e.createElement)("div", {
							className: "ddwcpos-order-total"
						}, (0, e.createElement)("p", null, (0, fe.__)("Total", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(o.order_total, o.order_currency_symbol))), (0, e.createElement)("div", {
							className: "ddwcpos-font-green"
						}, (0, e.createElement)("p", null, (0, fe.__)("Refunded", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(o.order_refunded, o.order_currency_symbol))), d, (0, e.createElement)("div", null, (0, e.createElement)("p", null, (0, fe.__)("Change", "ddwc-multipos")), (0, e.createElement)("strong", null, (0, Ma.R)(o.change, o.order_currency_symbol))), (0, Lt.applyFilters)("ddwcpos_add_details_before_print_invoice_button_in_order_details", "", o, this), (0, e.createElement)("button", {
							className: "ddwcpos-button",
							onClick: function(e) {
								return t.handlePrintInvoice(o)
							}
						}, (0, e.createElement)(Vl, null), (0, fe.__)("Print Invoice", "ddwc-multipos")), "online" == r ? (0, e.createElement)("button", {
							className: "ddwcpos-button ddwcpos-button-green",
							onClick: function(e) {
								return t.handleOrderRefund(o)
							},
							disabled: o.order_refunded >= o.order_total
						}, (0, e.createElement)(au, null), (0, fe.__)("Refund", "ddwc-multipos")) : null), h)
					}
					return (0, e.createElement)("div", {
						className: "ddwcpos-order-details-wrapper",
						style: window.screen.width < 768 ? {
							display: "none"
						} : {}
					}, (0, e.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Order Details Found", "ddwc-multipos"))))
				}
			}]), o
		}(n.Component);
		const lu = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				createRefund: _c,
				updateRefundStock: gc,
				addHoldCartToCurrentCart: ls,
				deleteHoldCart: us,
				updateDefaultCustomer: Oc,
				printInvoice: Kl.Ru,
				updateDefaultTable: is,
				sendToKitchen: as
			}, t))
		}))(cu);

		function uu(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var du = function(r) {
			le(i, r);
			var o = uu(i);

			function i(t) {
				var e;
				return ae(this, i), (e = o.call(this, t)).componentDidMount = function() {
					e.props.getDiscount(), e.props.getCoupons(), e.props.getHoldCarts(), e.props.getCart(), e.props.getOrders(e.props.outlet.id), e.props.getSettings(), "restaurant" === e.props.outlet.mode && e.getKitchenOrders()
				}, e.getKitchenOrders = function() {
					if (Ri()) {
						var t = {
							outlet_id: e.props.outlet.id,
							action: "get"
						};
						fetch(ddwcposPOSObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT, {
							method: "POST",
							headers: new Headers({
								"Content-Type": "application/json",
								Accept: "application/json"
							}),
							body: JSON.stringify(t)
						}).then((function(t) {
							return t.json()
						})).then((function(t) {
							e.setState({
								kitchenOrders: t,
								kitchenOrdersFetched: !0
							})
						})).catch((function(t) {
							console.error(t)
						}))
					}
				}, e.UNSAFE_componentWillReceiveProps = function(t) {
					t.match.params.type != e.props.match.params.type && e.setState({
						order: null
					})
				}, e.handleOrderSearch = function(t) {
					e.setState({
						search: t.target.value
					}), e.props.loadSearchedOrders(t.target.value, e.props.orders.list)
				}, e.handleChangeOrderDetails = function(t) {
					e.setState({
						order: t
					}), window.screen.width < 768 && (document.querySelector(".ddwcpos-order-details-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "block")
				}, e.syncAllOfflineOrders = function(t) {
					e.props.syncOfflineOrders(t).then((function(t) {
						e.props.getOrders(e.props.outlet.id), he.store.addNotification({
							title: (0, fe.__)("Order Synced", "ddwc-multipos"),
							message: (0, fe.__)("Order are synced successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					}))
				}, e.handleHoldOrderSearch = function(t, n) {
					e.setState({
						search: t.target.value
					})
				}, e.state = {
					search: "",
					order: null,
					kitchenOrders: [],
					kitchenOrdersFetched: !1
				}, e
			}
			return ce(i, [{
				key: "render",
				value: function() {
					var r = this,
						o = this.props.match.params.type,
						i = (0, Lt.applyFilters)("ddwcpos_modify_order_list_row_height", window.screen.width < 768 ? 92 : 80);
					if ("hold" == o && this.props.holdCarts.length) {
						var a = this.props.holdCarts,
							s = this.state.search.toLowerCase();
						s && (a = a.filter((function(t) {
							return t.list[0].customer.first_name.includes(s) || t.list[0].customer.last_name.includes(s) || t.list[0].customer.email.includes(s) || t.list[0].customer.phone.includes(s) || t.list[0].table.name && t.list[0].table.name.toLowerCase().includes(s)
						}))), a.sort((function(t, e) {
							return t.list[0].id < e.list[0].id ? 1 : e.list[0].id < t.list[0].id ? -1 : 0
						}));
						return (0, e.createElement)("div", {
							className: "ddwcpos-orders-tab-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-list-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-tab-changer"
						}, (0, e.createElement)(be, {
							className: "online" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/online")
						}, (0, fe.__)("Online", "ddwc-multipos")), (0, e.createElement)(be, {
							className: "offline" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
						}, (0, fe.__)("Offline", "ddwc-multipos")), (0, e.createElement)(be, {
							className: "hold" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
						}, (0, fe.__)("Hold", "ddwc-multipos"))), (0, e.createElement)("div", {
							className: "ddwcpos-search-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-search-input-wrapper"
						}, (0, e.createElement)("div", {
							className: "ddwcpos-search-input"
						}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
							type: "text",
							className: "ddwcpos-form-control",
							value: this.state.search,
							placeholder: "restaurant" == this.props.outlet.mode ? (0, fe.__)("Search By Customer or Table...", "ddwc-multipos") : (0, fe.__)("Search By Customer...", "ddwc-multipos"),
							onChange: function(t) {
								return r.handleHoldOrderSearch(t, a)
							},
							autoComplete: "off"
						})), (0, e.createElement)("span", null, a.length + " " + (0, fe.__)("Results", "ddwc-multipos")))), a.length ? (0, e.createElement)(Js, {
							className: "ddwcpos-list",
							height: 800,
							itemCount: a.length,
							itemSize: i
						}, (function(t) {
							var o = t.index,
								i = t.style,
								s = (0, fe.sprintf)((0, fe.__)("Cart #%s", "ddwc-multipos"), a.length - o),
								c = a[o].list.length ? a[o].list[0].cart.reduce((function(t, e) {
									return t + e.quantity
								}), 0) : 0,
								l = "ddwcpos-list-details";
							(!r.state.order && 0 == o || r.state.order && r.state.order.list[0].id == a[o].list[0].id) && (l += " ddwcpos-list-details-active");
							var u = "";
							if (a[o].list[0].kitchen_status) {
								u = (0, fe.__)("Preparing", "ddwc-multipos");
								var d = "preparing";
								if (r.state.kitchenOrdersFetched) {
									var p = r.state.kitchenOrders.filter((function(t) {
										return t.id == a[o].list[0].id
									}));
									p && p.length ? u = (0, fe.__)("Preparing", "ddwc-multipos") : (u = (0, fe.__)("Ready", "ddwc-multipos"), d = "ready")
								}
								u = (0, fe.sprintf)('<mark class="ddwcpos-food-status %s"><span>%s</span></mark>', "ddwcpos-food-status-" + d, u)
							}
							return (0, e.createElement)("div", {
								className: "ddwcpos-list-row",
								style: i
							}, (0, e.createElement)("div", {
								className: l,
								onClick: function(t) {
									return r.handleChangeOrderDetails(a[o])
								}
							}, (0, e.createElement)(Gc, null), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, s), (0, e.createElement)("p", null, (0, e.createElement)(tu, null), a[o].list[0].date), (0, e.createElement)("p", null, (0, e.createElement)(ra, null), a[o].list[0].customer.email, a[o].list[0].table.name ? (0, e.createElement)(n.Fragment, null, (0, e.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, e.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, e.createElement)("g", null, (0, e.createElement)("g", null, (0, e.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, e.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, e.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))), a[o].list[0].table.name) : null)), (0, e.createElement)("div", {
								dangerouslySetInnerHTML: {
									__html: u
								}
							}), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, Ma.R)(a[o].total.cart_total)), (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("%d Item(s)", "ddwc-multipos"), c)))))
						})) : (0, e.createElement)("div", {
							className: "ddwcpos-no-results"
						}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Orders Found", "ddwc-multipos")))), (0, e.createElement)(lu, t({
							order: this.state.order ? this.state.order : a.length ? a[0] : null,
							handleChangeOrderDetails: this.handleChangeOrderDetails,
							orderType: o
						}, this.props)))
					}
					var c = this.props.orders.sorder.filter((function(t) {
						return t.order_type == o
					}));
					c.sort((function(t, e) {
						return new Date(e.order_created) - new Date(t.order_created)
					}));
					return (0, e.createElement)("div", {
						className: "ddwcpos-orders-tab-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-list-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-tab-changer"
					}, (0, e.createElement)(be, {
						className: "online" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/online")
					}, (0, fe.__)("Online", "ddwc-multipos")), (0, e.createElement)(be, {
						className: "offline" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
					}, (0, fe.__)("Offline", "ddwc-multipos")), (0, e.createElement)(be, {
						className: "hold" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
					}, (0, fe.__)("Hold", "ddwc-multipos"))), (0, e.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input-wrapper",
						style: "offline" == o ? {
							gridTemplateColumns: "60% max-content auto"
						} : null
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						value: this.state.search,
						placeholder: (0, fe.__)("Search Order...", "ddwc-multipos"),
						onChange: function(t) {
							return r.handleOrderSearch(t)
						},
						autoComplete: "off"
					})), "offline" == o && c.length ? (0, e.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: function(t) {
							return r.syncAllOfflineOrders(c)
						},
						title: (0, fe.__)("Sync All Orders", "ddwc-multipos")
					}, (0, e.createElement)(Yi, null), (0, fe.__)("Sync All Orders", "ddwc-multipos")) : null, (0, e.createElement)("span", null, c.length + " " + (0, fe.__)("Results", "ddwc-multipos")))), c.length ? (0, e.createElement)(Js, {
						className: "ddwcpos-list",
						height: 800,
						itemCount: c.length,
						itemSize: i
					}, (function(t) {
						var n = t.index,
							o = t.style,
							i = (0, fe.sprintf)((0, fe.__)("Order #%s", "ddwc-multipos"), c[n].order_id),
							a = c[n].products.reduce((function(t, e) {
								return t + e.quantity
							}), 0),
							s = "ddwcpos-list-details";
						(!r.state.order && 0 == n || r.state.order && r.state.order.order_id == c[n].order_id) && (s += " ddwcpos-list-details-active");
						var l = "";
						if (c[n].kitchen_status) {
							l = (0, fe.__)("Preparing", "ddwc-multipos");
							var u = "preparing";
							if (r.state.kitchenOrdersFetched) {
								var d = r.state.kitchenOrders.filter((function(t) {
									return t.id == c[n].id
								}));
								d && d.length ? l = (0, fe.__)("Preparing", "ddwc-multipos") : (l = (0, fe.__)("Ready", "ddwc-multipos"), u = "ready")
							}
							l = (0, fe.sprintf)('<mark class="ddwcpos-food-status %s"><span>%s</span></mark>', "ddwcpos-food-status-" + u, l)
						}
						return (0, e.createElement)("div", {
							className: "ddwcpos-list-row",
							style: o
						}, (0, e.createElement)("div", {
							className: s,
							onClick: function(t) {
								return r.handleChangeOrderDetails(c[n])
							}
						}, (0, e.createElement)(Gc, null), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, i), (0, e.createElement)("p", null, (0, e.createElement)(tu, null), c[n].order_date), (0, e.createElement)("p", null, (0, e.createElement)(ra, null), c[n].email)), (0, Lt.applyFilters)("ddwcpos_add_details_before_order_total_in_row", "", c[n], r), (0, e.createElement)("div", {
							dangerouslySetInnerHTML: {
								__html: l
							}
						}), (0, e.createElement)("div", null, (0, e.createElement)("h3", null, (0, Ma.R)(c[n].order_total, c[n].order_currency_symbol)), (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("%d Item(s)", "ddwc-multipos"), a)))))
					})) : (0, e.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, e.createElement)(Ms, null), (0, e.createElement)("p", null, (0, fe.__)("No Orders Found", "ddwc-multipos")))), (0, e.createElement)(lu, t({
						order: this.state.order ? this.state.order : c.length ? c[0] : null,
						handleChangeOrderDetails: this.handleChangeOrderDetails,
						orderType: o
					}, this.props)))
				}
			}]), i
		}(n.Component);
		const pu = q((function(t) {
			return {
				orders: t.orders,
				cart: t.cart,
				holdCarts: t.holdCarts
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getOrders: cc,
				loadSearchedOrders: mc,
				syncOfflineOrders: hc,
				getHoldCarts: ss,
				getDiscount: ps,
				getCoupons: la,
				getCart: va,
				getSettings: Li
			}, t))
		}))(du);

		function fu(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var hu = function(t) {
			le(r, t);
			var n = fu(r);

			function r(t) {
				var e;
				return ae(this, r), (e = n.call(this, t)).handleInput = function(t, n) {
					var r = ke({}, n, t.target.value);
					"country" == n && (r.state = ""), e.setState(r)
				}, e.handleFormSubmit = function(t) {
					t.preventDefault(), Ri() ? e.state.current_password ? e.state.new_password && e.state.confirm_password && e.state.new_password == e.state.confirm_password ? e.props.saveCashier(e.state, f(e)) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Password fields are invalid.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}) : e.props.saveCashier(e.state, f(e)) : he.store.addNotification({
						title: (0, fe.__)("Error", "ddwc-multipos"),
						message: (0, fe.__)("Sorry, account details cannot be updated in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, e.state = {
					id: ddwcposPOSObj.user.ID,
					first_name: ddwcposPOSObj.user.first_name,
					last_name: ddwcposPOSObj.user.last_name,
					email: ddwcposPOSObj.user.user_email,
					current_password: "",
					new_password: "",
					confirm_password: ""
				}, e
			}
			return ce(r, [{
				key: "render",
				value: function() {
					var t = this;
					return (0, e.createElement)("div", {
						className: "ddwcpos-account-settings-wrapper"
					}, (0, e.createElement)("h2", null, (0, fe.__)("Account Settings", "ddwc-multipos")), (0, e.createElement)("form", {
						onSubmit: this.handleFormSubmit
					}, (0, e.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, e.createElement)("label", null, (0, fe.__)("First Name", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "text",
						value: this.state.first_name,
						onChange: function(e) {
							return t.handleInput(e, "first_name")
						},
						placeholder: (0, fe.__)("Enter First Name", "ddwc-multipos")
					})), (0, e.createElement)("label", null, (0, fe.__)("Last Name", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "text",
						value: this.state.last_name,
						onChange: function(e) {
							return t.handleInput(e, "last_name")
						},
						placeholder: (0, fe.__)("Enter Last Name", "ddwc-multipos")
					}))), (0, e.createElement)("label", null, (0, fe.__)("Email", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "email",
						value: this.state.email,
						onChange: function(e) {
							return t.handleInput(e, "email")
						},
						placeholder: (0, fe.__)("Enter Email", "ddwc-multipos"),
						disabled: !0
					})), (0, e.createElement)("label", null, (0, fe.__)("Current Password", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "password",
						value: this.state.current_password,
						onChange: function(e) {
							return t.handleInput(e, "current_password")
						},
						placeholder: (0, fe.__)("Enter Current Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, e.createElement)("label", null, (0, fe.__)("New Password", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "password",
						value: this.state.new_password,
						onChange: function(e) {
							return t.handleInput(e, "new_password")
						},
						placeholder: (0, fe.__)("Enter New Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, e.createElement)("label", null, (0, fe.__)("Confirm Password", "ddwc-multipos"), (0, e.createElement)("input", {
						type: "password",
						value: this.state.confirm_password,
						onChange: function(e) {
							return t.handleInput(e, "confirm_password")
						},
						placeholder: (0, fe.__)("Enter Confirm Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, e.createElement)("button", {
						type: "submit",
						className: "ddwcpos-button"
					}, (0, e.createElement)(Il, null), (0, fe.__)("Save", "ddwc-multipos"))))
				}
			}]), r
		}(n.Component);
		const mu = q(null, (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				saveCashier: qi
			}, t))
		}))(hu);

		function _u(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		const gu = function(t) {
			le(r, t);
			var n = _u(r);

			function r(t) {
				return ae(this, r), n.call(this, t)
			}
			return ce(r, [{
				key: "render",
				value: function() {
					return (0, e.createElement)("div", {
						className: "ddwcpos-settings-tab-wrapper"
					}, (0, e.createElement)(Ui, this.props), (0, e.createElement)(mu, null))
				}
			}]), r
		}(n.Component);

		function vu(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var n, r = pe(t);
				if (e) {
					var o = pe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}
		var yu = function(n) {
			le(o, n);
			var r = vu(o);

			function o(t) {
				var n;
				return ae(this, o), (n = r.call(this, t)).componentDidMount = function() {
					n.props.getTables(), n.props.getCart(), n.props.getHoldCarts()
				}, n.handleToggleTableOrderPopup = function() {
					n.setState({
						showTableOrderPopup: !n.state.showTableOrderPopup,
						order: null
					})
				}, n.handleTableSearch = function(t) {
					n.setState({
						search: t.target.value
					})
				}, n.handleSetTable = function(t) {
					n.props.updateDefaultTable(t)
				}, n.handleViewOrder = function(t) {
					n.setState({
						order: t,
						showTableOrderPopup: !n.state.showTableOrderPopup
					})
				}, n.handleGetTable = function(t) {
					var r = n.props.tables.defaultTable,
						o = t.tableType ? t.tableType : "vacant",
						i = n.props.holdCarts.filter((function(e) {
							return e.list[0].table.name && e.list[0].table.slug == t.slug
						}));
					return (0, e.createElement)("div", {
						className: "ddwcpos-table-card-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-table-card"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-table-block ddwcpos-".concat(o)
					}, (0, e.createElement)("div", null, (0, e.createElement)("h3", null, t.name), (0, e.createElement)("p", null, (0, fe.sprintf)((0, fe.__)("Seats: %s", "ddwc-multipos"), t.seats))), (0, e.createElement)("span", null), (0, e.createElement)("span", null), (0, e.createElement)("span", null), (0, e.createElement)("span", null))), r && r.slug == t.slug ? (0, e.createElement)("span", {
						className: "ddwcpos-icon-card",
						title: (0, fe.__)("Current Table", "ddwc-multipos")
					}, (0, e.createElement)(Vc, null), (0, fe.__)("Current Table", "ddwc-multipos")) : "vacant" == o ? (0, e.createElement)("span", {
						className: "ddwcpos-icon-card",
						onClick: function(e) {
							return n.handleSetTable(t.slug)
						},
						title: (0, fe.__)("Set Table", "ddwc-multipos")
					}, (0, e.createElement)(Vc, null), (0, fe.__)("Set Table", "ddwc-multipos")) : null, "occupied" == o && i.length ? (0, e.createElement)("span", {
						className: "ddwcpos-icon-card",
						onClick: function(t) {
							return n.handleViewOrder(i[0])
						},
						title: (0, fe.__)("View Order", "ddwc-multipos")
					}, (0, e.createElement)(Nn, null), (0, fe.__)("View Order", "ddwc-multipos")) : null)
				}, n.state = {
					search: "",
					order: null,
					showTableOrderPopup: !1
				}, n
			}
			return ce(o, [{
				key: "render",
				value: function() {
					var n = this,
						r = this.props.match.params.type,
						o = this.state.search,
						i = this.props.tables.list.filter((function(t) {
							var e = t.tableType ? t.tableType : "vacant";
							if ("all" == r || e == r) return !o || o && parseInt(t.seats) >= parseInt(o)
						})).map((function(t) {
							return n.handleGetTable(t)
						})),
						a = "";
					if (this.state.showTableOrderPopup) {
						var s = (0, e.createElement)(lu, t({
								order: this.state.order
							}, this.props, {
								orderType: "hold",
								tableView: !0,
								handleToggleTableOrderPopup: this.handleToggleTableOrderPopup
							})),
							c = {
								popupStyle: window.screen.width < 768 ? {} : {
									width: "50%"
								},
								handleOverlay: this.handleToggleTableOrderPopup,
								popupContent: s,
								hideSuccessButton: !0,
								hideCancelButton: !0,
								handleCancel: this.handleToggleTableOrderPopup
							};
						a = (0, e.createElement)(Ps, c)
					}
					return (0, e.createElement)("div", {
						className: "ddwcpos-tables-tab-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-tab-changer"
					}, (0, e.createElement)(be, {
						className: "all" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/all")
					}, (0, fe.__)("All", "ddwc-multipos")), (0, e.createElement)(be, {
						className: "occupied" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/occupied")
					}, (0, fe.__)("Occupied", "ddwc-multipos")), (0, e.createElement)(be, {
						className: "vacant" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/vacant")
					}, (0, fe.__)("Vacant", "ddwc-multipos"))), (0, e.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, e.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, e.createElement)(Rs, null), (0, e.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						value: this.state.search,
						placeholder: (0, fe.__)("Search By Number of Seats...", "ddwc-multipos"),
						onChange: function(t) {
							return n.handleTableSearch(t)
						},
						autoComplete: "off"
					})), (0, e.createElement)("span", null, i.length + " " + (0, fe.__)("Results", "ddwc-multipos")))), (0, e.createElement)("div", {
						className: "ddwcpos-table-wrapper"
					}, i), a)
				}
			}]), o
		}(n.Component);
		const wu = q((function(t) {
			return {
				tables: t.tables,
				cart: t.cart,
				holdCarts: t.holdCarts
			}
		}), (function(t) {
			return Object.assign({
				dispatch: t
			}, (0, S.DE)({
				getTables: os,
				updateDefaultTable: is,
				getHoldCarts: ss,
				getCart: va
			}, t))
		}))(yu);
		var bu = "ddwcpos_modify_pages_list",
			Eu = ddwcposPOSObj.ddwcpos_configuration.endpoint;

		function Ou() {
			return (0, Lt.applyFilters)(bu, [{
				name: "Home",
				path: "/".concat(Eu),
				component: El
			}, {
				name: "Category",
				path: "/".concat(Eu, "/category/:cid"),
				component: El
			}, {
				name: "Cart",
				path: "/".concat(Eu, "/cart"),
				component: kc
			}, {
				name: "Customers",
				path: "/".concat(Eu, "/customers"),
				component: Fl
			}, {
				name: "Tables",
				path: "/".concat(Eu, "/tables/:type"),
				component: wu
			}, {
				name: "Statistics",
				path: "/".concat(Eu, "/statistics"),
				component: ec
			}, {
				name: "Orders",
				path: "/".concat(Eu, "/orders/:type"),
				component: pu
			}, {
				name: "Settings",
				path: "/".concat(Eu, "/settings"),
				component: gu
			}, {
				name: "Pay",
				path: "/".concat(Eu, "/pay"),
				component: Yl
			}])
		}
		window.ddwcposStore = ie, document.addEventListener("DOMContentLoaded", (function() {
			i().render((0, e.createElement)(p, {
				store: ie
			}, (0, e.createElement)(St, {
				history: ut()
			}, (0, e.createElement)(It, null, Ou().map((function(n) {
				return (0, e.createElement)(kt, {
					key: ddwcposPOSObj.siteUrl + n.path,
					path: ddwcposPOSObj.siteUrl + n.path,
					exact: !0,
					name: n.name,
					render: function(r) {
						return (0, e.createElement)(Rc, t({
							page: n
						}, r))
					}
				})
			}))))), document.getElementById("app"))
		}))
	})();
	var __webpack_export_target__ = this;
	for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
	__webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", {
		value: !0
	})
})();