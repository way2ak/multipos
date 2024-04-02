(() => {
	var __webpack_modules__ = {
			7757: (e, t, n) => {
				e.exports = n(5666)
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
								if (table_name = order.table && Object.keys(order.table).length ? order.table.name : "N/A", tendered_payment_name = "", tendered_payment_amount = "", order.payment_methods.length ? order.payment_methods.forEach((function(e, t) {
										tendered_payment_name += "<p>".concat(e.name, "</p>"), tendered_payment_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(e.amount, order.order_currency_symbol), "</p>")
									})) : (tendered_payment_name += "<p>".concat(order.payment_method_title, "</p>"), tendered_payment_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.tendered, order.order_currency_symbol), "</p>")), order_id = "#" + order.order_id, order_date = order.order_date, sub_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_subtotal, order.order_currency_symbol), order_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_total, order.order_currency_symbol), order_refunded = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.order_refunded, order.order_currency_symbol), order_change = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.change, order.order_currency_symbol), tendered_total = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.tendered, order.order_currency_symbol), pro_name = "", pro_unit_price = "", pro_quantity = "", pro_total = "", product_row = "<table><tbody>", order.products.forEach((function(e, t) {
										total_quantity += parseInt(e.quantity);
										var n = e.quantity;
										e.returned_quantity > 0 && (n += ' <span role="img" aria-label="undo" class="anticon anticon-undo"><svg viewBox="64 64 896 896" focusable="false" data-icon="undo" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"></path></svg></span>' + e.returned_quantity), pro_name = "<p>".concat(e.name, "</p>"), pro_unit_price = "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(e.uf, order.order_currency_symbol), "</p>"), pro_quantity = "<p>".concat(n, "</p>"), pro_total = "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(e.uf_total, order.order_currency_symbol), "</p>"), product_row += "<tr>\n                <td>".concat(pro_name, "</td>\n                <td>").concat(pro_unit_price, "</td>\n                <td>").concat(pro_quantity, "</td>\n                <td>").concat(pro_total, "</td>\n            </tr>")
									})), product_row += "</tbody></table>", "online" == order.order_type) {
									customer_fname = order.billing.fname, customer_lname = order.billing.lname, customer_phone = order.billing.phone, order_discount = (0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(order.discount, order.order_currency_symbol);
									var order_tax_lines = order.tax_lines;
									tax_label = "", order_tax = "", order_tax_lines.length > 0 && order_tax_lines.forEach((function(e) {
										tax_label += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tax", "ddwc-multipos"), " (").concat(e.label, ")</p>"), order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(e.total, order.order_currency_symbol), "</p>")
									})), coupon_name = "", coupon_amount = "", order.coupons.forEach((function(e) {
										coupon_name += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coupon", "ddwc-multipos"), " (").concat(e.code, ")</p>"), coupon_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-e.amount, order.order_currency_symbol), "</p>")
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
								tax_label = "", order_tax = "", _order_tax_lines.length && _order_tax_lines.forEach((function(e) {
									tax_label += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tax", "ddwc-multipos"), " (").concat(e.label, ")</p>"), "yes" == ddwcposPOSObj.tax_type ? order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(0), "</p>") : order_tax += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(parseFloat(e.rate * order.order_subtotal / 100)), "</p>")
								})), coupon_name = "", coupon_amount = "", order.coupons && order.coupons.length > 0 && order.coupons.forEach((function(e) {
									coupon_name += "<p>".concat((0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coupon", "ddwc-multipos"), " (").concat(e.code, ")</p>"), "fixed_cart" == e.type ? coupon_amount += "<p>".concat((0, _currency_format__WEBPACK_IMPORTED_MODULE_0__.R)(-e.price), "</p>") : coupon_amount += "<p>".concat(-e.price, "%</p>")
								}))
							}
							cashier_name = ddwcposPOSObj.user.display_name;
							var pageWidth = settings.printer_width,
								pageHeight = settings.printer_height,
								pageMargin = settings.printer_margin,
								invoiceData = "",
								selectedInvoice = [];
							return outlet.invoice && (selectedInvoice = Object.values(ddwcposPOSObj.ddwcpos_configuration.invoices).filter((function(e) {
								return e.slug == outlet.invoice
							}))), invoiceData = selectedInvoice.length && selectedInvoice[0].html ? "<style>@page { size: ".concat(pageWidth, " ").concat(pageHeight, "; margin: ").concat(pageMargin, "; } ").concat(selectedInvoice[0].css, "</style>").concat(selectedInvoice[0].html) : "<style>@page { size: ".concat(pageWidth, " ").concat(pageHeight, "; margin: ").concat(pageMargin, "; } ").concat(ddwcposPOSObj.ddwcpos_configuration.invoice_css, "</style>").concat(ddwcposPOSObj.ddwcpos_configuration.invoice_html), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_AFTER_CUSTOMER_NAME_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_AFTER_CUSTOMER_NAME_FILTER, "", order, currentState)), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_BEFORE_TOTAL_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_BEFORE_TOTAL_FILTER, "", order, currentState)), invoiceData = invoiceData.replace('${applyFilters( INVOICE_ADD_DETAILS_AFTER_CHANGE_FILTER, "", order, currentState )}', (0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(INVOICE_ADD_DETAILS_AFTER_CHANGE_FILTER, "", order, currentState)), invoiceData = eval("`" + invoiceData + "`"), print && openPrintWindow(invoiceData), invoiceData
						}
					},
					openPrintWindow = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							var n = window.open();
							n.document.open(), n.document.clear(), n.document.writeln("<html ".concat(ddwcposPOSObj.ddwcpos_configuration.language_attributes, "><head><title></title>") + t), n.document.writeln("</head><body>"), n.document.writeln(e), n.document.writeln("</body></html>"), n.document.close(), n.addEventListener("load", (function() {
								setTimeout((function() {
									n.focus(), n.print()
								}), 500)
							}), !0)
						} else {
							var r = document.createElement("iframe");
							r.name = "frame1", document.body.appendChild(r);
							var o = r.contentWindow ? r.contentWindow : r.contentDocument.document ? r.contentDocument.document : r.contentDocument;
							o.document.open(), o.document.write("<html ".concat(ddwcposPOSObj.ddwcpos_configuration.language_attributes, "><head><title></title>") + t), o.document.write("</head><body>"), o.document.write(e), o.document.write("</body></html>"), o.document.close(), setTimeout((function() {
								window.frames.frame1.focus(), window.frames.frame1.print(), document.body.removeChild(r)
							}), 500)
						}
					}
			},
			1911: (e, t, n) => {
				"use strict";
				n.d(t, {
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

				function a(e, t, n, o, i, l) {
					if (s(e)) return map(e, (function(e) {
						return a(e, t, n, o, i, l)
					}));
					e = h(e);
					var m = p(d(t) ? t : {
							symbol: t,
							precision: n,
							thousand: o,
							decimal: i,
							format: l
						}, r.currency),
						g = function(e) {
							var t = r.currency.format;
							"function" == typeof e && (e = e());
							if (u(e) && e.match("%v")) return {
								pos: e,
								neg: e.replace("-", "").replace("%v", "-%v"),
								zero: e
							};
							if (!e || !e.pos || !e.pos.match("%v")) return u(t) ? r.currency.format = {
								pos: t,
								neg: t.replace("%v", "-%v"),
								zero: t
							} : t;
							return e
						}(m.format);
					return (e > 0 ? g.pos : e < 0 ? g.neg : g.zero).replace("%s", m.symbol).replace("%v", f(Math.abs(e), c(m.precision), m.thousand, m.decimal))
				}

				function s(e) {
					return o ? o(e) : "[object Array]" === i.call(e)
				}

				function c(e, t) {
					return e = Math.round(Math.abs(e)), isNaN(e) ? t : e
				}
				var l = function(e, t) {
					t = c(t, r.number.precision);
					var n = Math.pow(10, t);
					return (Math.round(h(e) * n) / n).toFixed(t)
				};

				function u(e) {
					return !!("" === e || e && e.charCodeAt && e.substr)
				}

				function d(e) {
					return e && "[object Object]" === i.call(e)
				}

				function p(e, t) {
					var n;
					for (n in e = e || {}, t = t || {}) t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
					return e
				}
				var f = function e(t, n, o, i) {
						if (s(t)) return map(t, (function(t) {
							return e(t, n, o, i)
						}));
						t = h(t);
						var a = p(d(n) ? n : {
								precision: n,
								thousand: o,
								decimal: i
							}, r.number),
							u = c(a.precision),
							f = t < 0 ? "-" : "",
							m = parseInt(l(Math.abs(t || 0), u), 10) + "",
							g = m.length > 3 ? m.length % 3 : 0;
						return f + (g ? m.substr(0, g) + a.thousand : "") + m.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (u ? a.decimal + l(Math.abs(t), u).split(".")[1] : "")
					},
					h = function e(t, n) {
						if (s(t)) return map(t, (function(t) {
							return e(t, n)
						}));
						if ("number" == typeof(t = t || 0)) return t;
						n = n || r.number.decimal;
						var o = new RegExp("[^0-9-" + n + "]", ["g"]),
							i = parseFloat(("" + t).replace(/\((.*)\)/, "-$1").replace(o, "").replace(n, "."));
						return isNaN(i) ? 0 : i
					};
				var m = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return a(e, {
						symbol: t || ddwcposPOSObj.currency_format_symbol,
						decimal: ddwcposPOSObj.currency_format_decimal_sep,
						thousand: ddwcposPOSObj.currency_format_thousand_sep,
						precision: ddwcposPOSObj.currency_format_num_decimals,
						format: ddwcposPOSObj.currency_format
					})
				}
			},
			9742: (e, t) => {
				"use strict";
				t.byteLength = function(e) {
					var t = c(e),
						n = t[0],
						r = t[1];
					return 3 * (n + r) / 4 - r
				}, t.toByteArray = function(e) {
					var t, n, i = c(e),
						a = i[0],
						s = i[1],
						l = new o(function(e, t, n) {
							return 3 * (t + n) / 4 - n
						}(0, a, s)),
						u = 0,
						d = s > 0 ? a - 4 : a;
					for (n = 0; n < d; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
					2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[u++] = 255 & t);
					1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t);
					return l
				}, t.fromByteArray = function(e) {
					for (var t, r = e.length, o = r % 3, i = [], a = 0, s = r - o; a < s; a += 16383) i.push(l(e, a, a + 16383 > s ? s : a + 16383));
					1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
					return i.join("")
				};
				for (var n = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) n[a] = i[a], r[i.charCodeAt(a)] = a;

				function c(e) {
					var t = e.length;
					if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var n = e.indexOf("=");
					return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
				}

				function l(e, t, r) {
					for (var o, i, a = [], s = t; s < r; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
					return a.join("")
				}
				r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
			},
			4926: (e, t, n) => {
				"use strict";

				function r(e) {
					return e || (e = 0), new Promise((function(t) {
						return setTimeout(t, e)
					}))
				}

				function o() {
					return Math.random().toString(36).substring(2)
				}
				n.r(t), n.d(t, {
					BroadcastChannel: () => k,
					beLeader: () => $,
					clearNodeFolder: () => N,
					createLeaderElection: () => Q,
					enforceOptions: () => A
				});
				var i = 0,
					a = 0;

				function s() {
					var e = (new Date).getTime();
					return e === i ? 1e3 * e + ++a : (i = e, a = 0, 1e3 * e)
				}
				var c = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
				const l = {
					create: function(e) {
						var t = {
							messagesCallback: null,
							bc: new BroadcastChannel(e),
							subFns: []
						};
						return t.bc.onmessage = function(e) {
							t.messagesCallback && t.messagesCallback(e.data)
						}, t
					},
					close: function(e) {
						e.bc.close(), e.subFns = []
					},
					onMessage: function(e, t) {
						e.messagesCallback = t
					},
					postMessage: function(e, t) {
						try {
							return e.bc.postMessage(t, !1), Promise.resolve()
						} catch (e) {
							return Promise.reject(e)
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
					function e(e) {
						this.ttl = e, this.set = new Set, this.timeMap = new Map
					}
					return e.prototype.has = function(e) {
						return this.set.has(e)
					}, e.prototype.add = function(e) {
						var t = this;
						this.timeMap.set(e, d()), this.set.add(e), setTimeout((function() {
							! function(e) {
								var t = d() - e.ttl,
									n = e.set[Symbol.iterator]();
								for (;;) {
									var r = n.next().value;
									if (!r) return;
									if (!(e.timeMap.get(r) < t)) return;
									e.timeMap.delete(r), e.set.delete(r)
								}
							}(t)
						}), 0)
					}, e.prototype.clear = function() {
						this.set.clear(), this.timeMap.clear()
					}, e
				}();

				function d() {
					return (new Date).getTime()
				}

				function p() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = JSON.parse(JSON.stringify(e));
					return void 0 === t.webWorkerSupport && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 45e3), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 6e4), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 12e4), void 0 === t.node.useFastPath && (t.node.useFastPath = !0), t
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

				function h(e, t) {
					var n = e.transaction("messages").objectStore("messages"),
						r = [];
					return new Promise((function(e) {
						(function() {
							try {
								var e = IDBKeyRange.bound(t + 1, 1 / 0);
								return n.openCursor(e)
							} catch (e) {
								return n.openCursor()
							}
						}()).onsuccess = function(n) {
							var o = n.target.result;
							o ? o.value.id < t + 1 ? o.continue(t + 1) : (r.push(o.value), o.continue()) : e(r)
						}
					}))
				}

				function m(e, t) {
					return function(e, t) {
						var n = (new Date).getTime() - t,
							r = e.transaction("messages").objectStore("messages"),
							o = [];
						return new Promise((function(e) {
							r.openCursor().onsuccess = function(t) {
								var r = t.target.result;
								if (r) {
									var i = r.value;
									if (!(i.time < n)) return void e(o);
									o.push(i), r.continue()
								} else e(o)
							}
						}))
					}(e, t).then((function(t) {
						return Promise.all(t.map((function(t) {
							return function(e, t) {
								var n = e.transaction(["messages"], "readwrite").objectStore("messages").delete(t);
								return new Promise((function(e) {
									n.onsuccess = function() {
										return e()
									}
								}))
							}(e, t.id)
						})))
					}))
				}

				function g(e) {
					return e.closed ? Promise.resolve() : e.messagesCallback ? h(e.db, e.lastCursorId).then((function(t) {
						return t.filter((function(e) {
							return !!e
						})).map((function(t) {
							return t.id > e.lastCursorId && (e.lastCursorId = t.id), t
						})).filter((function(t) {
							return function(e, t) {
								return e.uuid !== t.uuid && (!t.eMIs.has(e.id) && !(e.data.time < t.messagesCallbackTime))
							}(t, e)
						})).sort((function(e, t) {
							return e.time - t.time
						})).forEach((function(t) {
							e.messagesCallback && (e.eMIs.add(t.id), e.messagesCallback(t.data))
						})), Promise.resolve()
					})) : Promise.resolve()
				}
				const _ = {
					create: function(e, t) {
						return t = p(t),
							function(e) {
								var t = "pubkey.broadcast-channel-0-" + e,
									n = f().open(t, 1);
								return n.onupgradeneeded = function(e) {
									e.target.result.createObjectStore("messages", {
										keyPath: "id",
										autoIncrement: !0
									})
								}, new Promise((function(e, t) {
									n.onerror = function(e) {
										return t(e)
									}, n.onsuccess = function() {
										e(n.result)
									}
								}))
							}(e).then((function(n) {
								var i = {
									closed: !1,
									lastCursorId: 0,
									channelName: e,
									options: t,
									uuid: o(),
									eMIs: new u(2 * t.idb.ttl),
									writeBlockPromise: Promise.resolve(),
									messagesCallback: null,
									readQueuePromises: [],
									db: n
								};
								return n.onclose = function() {
										i.closed = !0, t.idb.onclose && t.idb.onclose()
									},
									function e(t) {
										if (t.closed) return;
										g(t).then((function() {
											return r(t.options.idb.fallbackInterval)
										})).then((function() {
											return e(t)
										}))
									}(i), i
							}))
					},
					close: function(e) {
						e.closed = !0, e.db.close()
					},
					onMessage: function(e, t, n) {
						e.messagesCallbackTime = n, e.messagesCallback = t, g(e)
					},
					postMessage: function(e, t) {
						return e.writeBlockPromise = e.writeBlockPromise.then((function() {
							return function(e, t, n) {
								var r = {
										uuid: t,
										time: (new Date).getTime(),
										data: n
									},
									o = e.transaction(["messages"], "readwrite");
								return new Promise((function(e, t) {
									o.oncomplete = function() {
										return e()
									}, o.onerror = function(e) {
										return t(e)
									}, o.objectStore("messages").add(r)
								}))
							}(e.db, e.uuid, t)
						})).then((function() {
							var t, n;
							0 === (t = 0, n = 10, Math.floor(Math.random() * (n - t + 1) + t)) && m(e.db, e.options.idb.ttl)
						})), e.writeBlockPromise
					},
					canBeUsed: function() {
						return !c && !!f()
					},
					type: "idb",
					averageResponseTime: function(e) {
						return 2 * e.idb.fallbackInterval
					},
					microSeconds: s
				};

				function v() {
					var e;
					if ("undefined" == typeof window) return null;
					try {
						e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
					} catch (e) {}
					return e
				}

				function y(e) {
					return "pubkey.broadcastChannel-" + e
				}

				function w() {
					if (c) return !1;
					var e = v();
					if (!e) return !1;
					try {
						var t = "__broadcastchannel_check";
						e.setItem(t, "works"), e.removeItem(t)
					} catch (e) {
						return !1
					}
					return !0
				}
				const b = {
					create: function(e, t) {
						if (t = p(t), !w()) throw new Error("BroadcastChannel: localstorage cannot be used");
						var n = o(),
							r = new u(t.localstorage.removeTimeout),
							i = {
								channelName: e,
								uuid: n,
								eMIs: r
							};
						return i.listener = function(e, t) {
							var n = y(e),
								r = function(e) {
									e.key === n && t(JSON.parse(e.newValue))
								};
							return window.addEventListener("storage", r), r
						}(e, (function(e) {
							i.messagesCallback && e.uuid !== n && e.token && !r.has(e.token) && (e.data.time && e.data.time < i.messagesCallbackTime || (r.add(e.token), i.messagesCallback(e.data)))
						})), i
					},
					close: function(e) {
						var t;
						t = e.listener, window.removeEventListener("storage", t)
					},
					onMessage: function(e, t, n) {
						e.messagesCallbackTime = n, e.messagesCallback = t
					},
					postMessage: function(e, t) {
						return new Promise((function(n) {
							r().then((function() {
								var r = y(e.channelName),
									i = {
										token: o(),
										time: (new Date).getTime(),
										data: t,
										uuid: e.uuid
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
						var e = navigator.userAgent.toLowerCase();
						return e.includes("safari") && !e.includes("chrome") ? 240 : 120
					},
					microSeconds: s
				};
				var E = s,
					O = new Set;
				const S = {
					create: function(e) {
						var t = {
							name: e,
							messagesCallback: null
						};
						return O.add(t), t
					},
					close: function(e) {
						O.delete(e)
					},
					onMessage: function(e, t) {
						e.messagesCallback = t
					},
					postMessage: function(e, t) {
						return new Promise((function(n) {
							return setTimeout((function() {
								Array.from(O).filter((function(t) {
									return t.name === e.name
								})).filter((function(t) {
									return t !== e
								})).filter((function(e) {
									return !!e.messagesCallback
								})).forEach((function(e) {
									return e.messagesCallback(t)
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
				var C = [l, _, b];
				if (c) {
					var x = n(8211);
					"function" == typeof x.canBeUsed && C.push(x)
				}

				function P(e) {
					var t = [].concat(e.methods, C).filter(Boolean);
					if (e.type) {
						if ("simulate" === e.type) return S;
						var n = t.find((function(t) {
							return t.type === e.type
						}));
						if (n) return n;
						throw new Error("method-type " + e.type + " not found")
					}
					e.webWorkerSupport || c || (t = t.filter((function(e) {
						return "idb" !== e.type
					})));
					var r = t.find((function(e) {
						return e.canBeUsed()
					}));
					if (r) return r;
					throw new Error("No useable methode found:" + JSON.stringify(C.map((function(e) {
						return e.type
					}))))
				}
				var T, k = function(e, t) {
					var n, r, o;
					this.name = e, T && (t = T), this.options = p(t), this.method = P(this.options), this._iL = !1, this._onML = null, this._addEL = {
						message: [],
						internal: []
					}, this._uMP = new Set, this._befC = [], this._prepP = null, r = (n = this).method.create(n.name, n.options), (o = r) && "function" == typeof o.then ? (n._prepP = r, r.then((function(e) {
						n._state = e
					}))) : n._state = r
				};

				function N(e) {
					var t = P(e = p(e));
					return "node" === t.type ? t.clearNodeFolder().then((function() {
						return !0
					})) : Promise.resolve(!1)
				}

				function A(e) {
					T = e
				}

				function R(e, t, n) {
					var r = {
						time: e.method.microSeconds(),
						type: t,
						data: n
					};
					return (e._prepP ? e._prepP : Promise.resolve()).then((function() {
						var t = e.method.postMessage(e._state, r);
						return e._uMP.add(t), t.catch().then((function() {
							return e._uMP.delete(t)
						})), t
					}))
				}

				function D(e) {
					return e._addEL.message.length > 0 || e._addEL.internal.length > 0
				}

				function L(e, t, n) {
					e._addEL[t].push(n),
						function(e) {
							if (!e._iL && D(e)) {
								var t = function(t) {
										e._addEL[t.type].forEach((function(e) {
											t.time >= e.time && e.fn(t.data)
										}))
									},
									n = e.method.microSeconds();
								e._prepP ? e._prepP.then((function() {
									e._iL = !0, e.method.onMessage(e._state, t, n)
								})) : (e._iL = !0, e.method.onMessage(e._state, t, n))
							}
						}(e)
				}

				function I(e, t, n) {
					e._addEL[t] = e._addEL[t].filter((function(e) {
							return e !== n
						})),
						function(e) {
							if (e._iL && !D(e)) {
								e._iL = !1;
								var t = e.method.microSeconds();
								e.method.onMessage(e._state, null, t)
							}
						}(e)
				}
				k._pubkey = !0, k.prototype = {
					postMessage: function(e) {
						if (this.closed) throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
						return R(this, "message", e)
					},
					postInternal: function(e) {
						return R(this, "internal", e)
					},
					set onmessage(e) {
						var t = {
							time: this.method.microSeconds(),
							fn: e
						};
						I(this, "message", this._onML), e && "function" == typeof e ? (this._onML = t, L(this, "message", t)) : this._onML = null
					},
					addEventListener: function(e, t) {
						L(this, e, {
							time: this.method.microSeconds(),
							fn: t
						})
					},
					removeEventListener: function(e, t) {
						I(this, e, this._addEL[e].find((function(e) {
							return e.fn === t
						})))
					},
					close: function() {
						var e = this;
						if (!this.closed) {
							this.closed = !0;
							var t = this._prepP ? this._prepP : Promise.resolve();
							return this._onML = null, this._addEL.message = [], t.then((function() {
								return Promise.all(Array.from(e._uMP))
							})).then((function() {
								return Promise.all(e._befC.map((function(e) {
									return e()
								})))
							})).then((function() {
								return e.method.close(e._state)
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
					add: function(e) {
						if ("function" == typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
						else {
							if ("function" != typeof window.addEventListener) return;
							window.addEventListener("beforeunload", (function() {
								e()
							}), !0), window.addEventListener("unload", (function() {
								e()
							}), !0)
						}
					}
				};
				var B = n(199),
					F = n.n(B),
					H = q() ? F() : j,
					U = new Set,
					z = !1;

				function V() {
					var e = [];
					return U.forEach((function(t) {
						e.push(t()), U.delete(t)
					})), Promise.all(e)
				}
				const W = {
					add: function(e) {
						if (z || (z = !0, H.add(V)), "function" != typeof e) throw new Error("Listener is no function");
						return U.add(e), {
							remove: function() {
								return U.delete(e)
							},
							run: function() {
								return U.delete(e), e()
							}
						}
					},
					runAll: V,
					removeAll: function() {
						U.clear()
					},
					getSize: function() {
						return U.size
					}
				};
				var K = function(e, t) {
					this._channel = e, this._options = t, this.isLeader = !1, this.isDead = !1, this.token = o(), this._isApl = !1, this._reApply = !1, this._unl = [], this._lstns = [], this._invs = [], this._dpL = function() {}, this._dpLC = !1
				};

				function G(e, t) {
					var n = {
						context: "leader",
						action: t,
						token: e.token
					};
					return e._channel.postInternal(n)
				}

				function $(e) {
					e.isLeader = !0;
					var t = W.add((function() {
						return e.die()
					}));
					e._unl.push(t);
					var n = function(t) {
						"leader" === t.context && "apply" === t.action && G(e, "tell"), "leader" !== t.context || "tell" !== t.action || e._dpLC || (e._dpLC = !0, e._dpL(), G(e, "tell"))
					};
					return e._channel.addEventListener("internal", n), e._lstns.push(n), G(e, "tell")
				}

				function Q(e, t) {
					if (e._leaderElector) throw new Error("BroadcastChannel already has a leader-elector");
					t = function(e, t) {
						return e || (e = {}), (e = JSON.parse(JSON.stringify(e))).fallbackInterval || (e.fallbackInterval = 3e3), e.responseTime || (e.responseTime = t.method.averageResponseTime(t.options)), e
					}(t, e);
					var n = new K(e, t);
					return e._befC.push((function() {
						return n.die()
					})), e._leaderElector = n, n
				}
				K.prototype = {
					applyOnce: function() {
						var e = this;
						if (this.isLeader) return Promise.resolve(!1);
						if (this.isDead) return Promise.resolve(!1);
						if (this._isApl) return this._reApply = !0, Promise.resolve(!1);
						this._isApl = !0;
						var t = !1,
							n = [],
							o = function(r) {
								"leader" === r.context && r.token != e.token && (n.push(r), "apply" === r.action && r.token > e.token && (t = !0), "tell" === r.action && (t = !0))
							};
						return this._channel.addEventListener("internal", o), G(this, "apply").then((function() {
							return r(e._options.responseTime)
						})).then((function() {
							return t ? Promise.reject(new Error) : G(e, "apply")
						})).then((function() {
							return r(e._options.responseTime)
						})).then((function() {
							return t ? Promise.reject(new Error) : G(e)
						})).then((function() {
							return $(e)
						})).then((function() {
							return !0
						})).catch((function() {
							return !1
						})).then((function(t) {
							return e._channel.removeEventListener("internal", o), e._isApl = !1, !t && e._reApply ? (e._reApply = !1, e.applyOnce()) : t
						}))
					},
					awaitLeadership: function() {
						var e;
						return this._aLP || (this._aLP = (e = this).isLeader ? Promise.resolve() : new Promise((function(t) {
							var n = !1;

							function r() {
								n || (n = !0, clearInterval(o), e._channel.removeEventListener("internal", i), t(!0))
							}
							e.applyOnce().then((function() {
								e.isLeader && r()
							}));
							var o = setInterval((function() {
								e.applyOnce().then((function() {
									e.isLeader && r()
								}))
							}), e._options.fallbackInterval);
							e._invs.push(o);
							var i = function(t) {
								"leader" === t.context && "death" === t.action && e.applyOnce().then((function() {
									e.isLeader && r()
								}))
							};
							e._channel.addEventListener("internal", i), e._lstns.push(i)
						}))), this._aLP
					},
					set onduplicate(e) {
						this._dpL = e
					},
					die: function() {
						var e = this;
						if (!this.isDead) return this.isDead = !0, this._lstns.forEach((function(t) {
							return e._channel.removeEventListener("internal", t)
						})), this._invs.forEach((function(e) {
							return clearInterval(e)
						})), this._unl.forEach((function(e) {
							e.remove()
						})), G(this, "death")
					}
				}
			},
			8764: (e, t, n) => {
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
				t.Buffer = s, t.SlowBuffer = function(e) {
					+e != e && (e = 0);
					return s.alloc(+e)
				}, t.INSPECT_MAX_BYTES = 50;

				function a(e) {
					if (e > 2147483647) throw new RangeError('The value "' + e + '" is invalid for option "size"');
					var t = new Uint8Array(e);
					return Object.setPrototypeOf(t, s.prototype), t
				}

				function s(e, t, n) {
					if ("number" == typeof e) {
						if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
						return u(e)
					}
					return c(e, t, n)
				}

				function c(e, t, n) {
					if ("string" == typeof e) return function(e, t) {
						"string" == typeof t && "" !== t || (t = "utf8");
						if (!s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
						var n = 0 | h(e, t),
							r = a(n),
							o = r.write(e, t);
						o !== n && (r = r.slice(0, o));
						return r
					}(e, t);
					if (ArrayBuffer.isView(e)) return function(e) {
						if (B(e, Uint8Array)) {
							var t = new Uint8Array(e);
							return p(t.buffer, t.byteOffset, t.byteLength)
						}
						return d(e)
					}(e);
					if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
					if (B(e, ArrayBuffer) || e && B(e.buffer, ArrayBuffer)) return p(e, t, n);
					if ("undefined" != typeof SharedArrayBuffer && (B(e, SharedArrayBuffer) || e && B(e.buffer, SharedArrayBuffer))) return p(e, t, n);
					if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
					var r = e.valueOf && e.valueOf();
					if (null != r && r !== e) return s.from(r, t, n);
					var o = function(e) {
						if (s.isBuffer(e)) {
							var t = 0 | f(e.length),
								n = a(t);
							return 0 === n.length || e.copy(n, 0, 0, t), n
						}
						if (void 0 !== e.length) return "number" != typeof e.length || F(e.length) ? a(0) : d(e);
						if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
					}(e);
					if (o) return o;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, n);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
				}

				function l(e) {
					if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
					if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
				}

				function u(e) {
					return l(e), a(e < 0 ? 0 : 0 | f(e))
				}

				function d(e) {
					for (var t = e.length < 0 ? 0 : 0 | f(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
					return n
				}

				function p(e, t, n) {
					if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
					if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					var r;
					return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r
				}

				function f(e) {
					if (e >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
					return 0 | e
				}

				function h(e, t) {
					if (s.isBuffer(e)) return e.length;
					if (ArrayBuffer.isView(e) || B(e, ArrayBuffer)) return e.byteLength;
					if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
					var n = e.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === n) return 0;
					for (var o = !1;;) switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
							return M(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return q(e).length;
						default:
							if (o) return r ? -1 : M(e).length;
							t = ("" + t).toLowerCase(), o = !0
					}
				}

				function m(e, t, n) {
					var r = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return T(this, t, n);
						case "utf8":
						case "utf-8":
							return C(this, t, n);
						case "ascii":
							return x(this, t, n);
						case "latin1":
						case "binary":
							return P(this, t, n);
						case "base64":
							return S(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return k(this, t, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), r = !0
					}
				}

				function g(e, t, n) {
					var r = e[t];
					e[t] = e[n], e[n] = r
				}

				function _(e, t, n, r, o) {
					if (0 === e.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if (o) return -1;
						n = e.length - 1
					} else if (n < 0) {
						if (!o) return -1;
						n = 0
					}
					if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, o);
					if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, o);
					throw new TypeError("val must be string, number or Buffer")
				}

				function v(e, t, n, r, o) {
					var i, a = 1,
						s = e.length,
						c = t.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (e.length < 2 || t.length < 2) return -1;
						a = 2, s /= 2, c /= 2, n /= 2
					}

					function l(e, t) {
						return 1 === a ? e[t] : e.readUInt16BE(t * a)
					}
					if (o) {
						var u = -1;
						for (i = n; i < s; i++)
							if (l(e, i) === l(t, -1 === u ? 0 : i - u)) {
								if (-1 === u && (u = i), i - u + 1 === c) return u * a
							} else - 1 !== u && (i -= i - u), u = -1
					} else
						for (n + c > s && (n = s - c), i = n; i >= 0; i--) {
							for (var d = !0, p = 0; p < c; p++)
								if (l(e, i + p) !== l(t, p)) {
									d = !1;
									break
								} if (d) return i
						}
					return -1
				}

				function y(e, t, n, r) {
					n = Number(n) || 0;
					var o = e.length - n;
					r ? (r = Number(r)) > o && (r = o) : r = o;
					var i = t.length;
					r > i / 2 && (r = i / 2);
					for (var a = 0; a < r; ++a) {
						var s = parseInt(t.substr(2 * a, 2), 16);
						if (F(s)) return a;
						e[n + a] = s
					}
					return a
				}

				function w(e, t, n, r) {
					return j(M(t, e.length - n), e, n, r)
				}

				function b(e, t, n, r) {
					return j(function(e) {
						for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
						return t
					}(t), e, n, r)
				}

				function E(e, t, n, r) {
					return j(q(t), e, n, r)
				}

				function O(e, t, n, r) {
					return j(function(e, t) {
						for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
						return i
					}(t, e.length - n), e, n, r)
				}

				function S(e, t, n) {
					return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
				}

				function C(e, t, n) {
					n = Math.min(e.length, n);
					for (var r = [], o = t; o < n;) {
						var i, a, s, c, l = e[o],
							u = null,
							d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
						if (o + d <= n) switch (d) {
							case 1:
								l < 128 && (u = l);
								break;
							case 2:
								128 == (192 & (i = e[o + 1])) && (c = (31 & l) << 6 | 63 & i) > 127 && (u = c);
								break;
							case 3:
								i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (c = (15 & l) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (u = c);
								break;
							case 4:
								i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (u = c)
						}
						null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), o += d
					}
					return function(e) {
						var t = e.length;
						if (t <= 4096) return String.fromCharCode.apply(String, e);
						var n = "",
							r = 0;
						for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
						return n
					}(r)
				}
				t.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
					try {
						var e = new Uint8Array(1),
							t = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
					} catch (e) {
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
				}), s.poolSize = 8192, s.from = function(e, t, n) {
					return c(e, t, n)
				}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, n) {
					return function(e, t, n) {
						return l(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
					}(e, t, n)
				}, s.allocUnsafe = function(e) {
					return u(e)
				}, s.allocUnsafeSlow = function(e) {
					return u(e)
				}, s.isBuffer = function(e) {
					return null != e && !0 === e._isBuffer && e !== s.prototype
				}, s.compare = function(e, t) {
					if (B(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), B(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (e === t) return 0;
					for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
						if (e[o] !== t[o]) {
							n = e[o], r = t[o];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, s.isEncoding = function(e) {
					switch (String(e).toLowerCase()) {
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
				}, s.concat = function(e, t) {
					if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === e.length) return s.alloc(0);
					var n;
					if (void 0 === t)
						for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
					var r = s.allocUnsafe(t),
						o = 0;
					for (n = 0; n < e.length; ++n) {
						var i = e[n];
						if (B(i, Uint8Array)) o + i.length > r.length ? s.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o);
						else {
							if (!s.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
							i.copy(r, o)
						}
						o += i.length
					}
					return r
				}, s.byteLength = h, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
					var e = this.length;
					if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var t = 0; t < e; t += 2) g(this, t, t + 1);
					return this
				}, s.prototype.swap32 = function() {
					var e = this.length;
					if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
					return this
				}, s.prototype.swap64 = function() {
					var e = this.length;
					if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
					return this
				}, s.prototype.toString = function() {
					var e = this.length;
					return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : m.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
					if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === s.compare(this, e)
				}, s.prototype.inspect = function() {
					var e = "",
						n = t.INSPECT_MAX_BYTES;
					return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
				}, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, o) {
					if (B(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
					if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
					if (r >= o && t >= n) return 0;
					if (r >= o) return -1;
					if (t >= n) return 1;
					if (this === e) return 0;
					for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), c = Math.min(i, a), l = this.slice(r, o), u = e.slice(t, n), d = 0; d < c; ++d)
						if (l[d] !== u[d]) {
							i = l[d], a = u[d];
							break
						} return i < a ? -1 : a < i ? 1 : 0
				}, s.prototype.includes = function(e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				}, s.prototype.indexOf = function(e, t, n) {
					return _(this, e, t, n, !0)
				}, s.prototype.lastIndexOf = function(e, t, n) {
					return _(this, e, t, n, !1)
				}, s.prototype.write = function(e, t, n, r) {
					if (void 0 === t) r = "utf8", n = this.length, t = 0;
					else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
					else {
						if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var o = this.length - t;
					if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var i = !1;;) switch (r) {
						case "hex":
							return y(this, e, t, n);
						case "utf8":
						case "utf-8":
							return w(this, e, t, n);
						case "ascii":
						case "latin1":
						case "binary":
							return b(this, e, t, n);
						case "base64":
							return E(this, e, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return O(this, e, t, n);
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

				function x(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
					return r
				}

				function P(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
					return r
				}

				function T(e, t, n) {
					var r = e.length;
					(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
					for (var o = "", i = t; i < n; ++i) o += H[e[i]];
					return o
				}

				function k(e, t, n) {
					for (var r = e.slice(t, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
					return o
				}

				function N(e, t, n) {
					if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
					if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function A(e, t, n, r, o, i) {
					if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
					if (n + r > e.length) throw new RangeError("Index out of range")
				}

				function R(e, t, n, r, o, i) {
					if (n + r > e.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function D(e, t, n, r, i) {
					return t = +t, n >>>= 0, i || R(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4
				}

				function L(e, t, n, r, i) {
					return t = +t, n >>>= 0, i || R(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8
				}
				s.prototype.slice = function(e, t) {
					var n = this.length;
					(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
					var r = this.subarray(e, t);
					return Object.setPrototypeOf(r, s.prototype), r
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || N(e, t, this.length);
					for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
					return r
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || N(e, t, this.length);
					for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
					return r
				}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
					return e >>>= 0, t || N(e, 1, this.length), this[e]
				}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
					return e >>>= 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8
				}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
					return e >>>= 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1]
				}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				}, s.prototype.readIntLE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || N(e, t, this.length);
					for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
					return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
				}, s.prototype.readIntBE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || N(e, t, this.length);
					for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
					return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
				}, s.prototype.readInt8 = function(e, t) {
					return e >>>= 0, t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				}, s.prototype.readInt16LE = function(e, t) {
					e >>>= 0, t || N(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt16BE = function(e, t) {
					e >>>= 0, t || N(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt32LE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				}, s.prototype.readInt32BE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				}, s.prototype.readFloatLE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), o.read(this, e, !0, 23, 4)
				}, s.prototype.readFloatBE = function(e, t) {
					return e >>>= 0, t || N(e, 4, this.length), o.read(this, e, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(e, t) {
					return e >>>= 0, t || N(e, 8, this.length), o.read(this, e, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(e, t) {
					return e >>>= 0, t || N(e, 8, this.length), o.read(this, e, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
					(e = +e, t >>>= 0, n >>>= 0, r) || A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var o = 1,
						i = 0;
					for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
					return t + n
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
					(e = +e, t >>>= 0, n >>>= 0, r) || A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var o = n - 1,
						i = 1;
					for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
					return t + n
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
				}, s.prototype.writeIntLE = function(e, t, n, r) {
					if (e = +e, t >>>= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						A(this, e, t, n, o - 1, -o)
					}
					var i = 0,
						a = 1,
						s = 0;
					for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
					return t + n
				}, s.prototype.writeIntBE = function(e, t, n, r) {
					if (e = +e, t >>>= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						A(this, e, t, n, o - 1, -o)
					}
					var i = n - 1,
						a = 1,
						s = 0;
					for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
					return t + n
				}, s.prototype.writeInt8 = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
				}, s.prototype.writeInt16LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
				}, s.prototype.writeInt16BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
				}, s.prototype.writeInt32LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
				}, s.prototype.writeInt32BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
				}, s.prototype.writeFloatLE = function(e, t, n) {
					return D(this, e, t, !0, n)
				}, s.prototype.writeFloatBE = function(e, t, n) {
					return D(this, e, t, !1, n)
				}, s.prototype.writeDoubleLE = function(e, t, n) {
					return L(this, e, t, !0, n)
				}, s.prototype.writeDoubleBE = function(e, t, n) {
					return L(this, e, t, !1, n)
				}, s.prototype.copy = function(e, t, n, r) {
					if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
					if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === e.length || 0 === this.length) return 0;
					if (t < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
					var o = r - n;
					return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), o
				}, s.prototype.fill = function(e, t, n, r) {
					if ("string" == typeof e) {
						if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === e.length) {
							var o = e.charCodeAt(0);
							("utf8" === r && o < 128 || "latin1" === r) && (e = o)
						}
					} else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
					if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
					if (n <= t) return this;
					var i;
					if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for (i = t; i < n; ++i) this[i] = e;
					else {
						var a = s.isBuffer(e) ? e : s.from(e, r),
							c = a.length;
						if (0 === c) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
						for (i = 0; i < n - t; ++i) this[i + t] = a[i % c]
					}
					return this
				};
				var I = /[^+/0-9A-Za-z-_]/g;

				function M(e, t) {
					var n;
					t = t || 1 / 0;
					for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
						if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
							if (!o) {
								if (n > 56319) {
									(t -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								if (a + 1 === r) {
									(t -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								o = n;
								continue
							}
							if (n < 56320) {
								(t -= 3) > -1 && i.push(239, 191, 189), o = n;
								continue
							}
							n = 65536 + (o - 55296 << 10 | n - 56320)
						} else o && (t -= 3) > -1 && i.push(239, 191, 189);
						if (o = null, n < 128) {
							if ((t -= 1) < 0) break;
							i.push(n)
						} else if (n < 2048) {
							if ((t -= 2) < 0) break;
							i.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((t -= 3) < 0) break;
							i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((t -= 4) < 0) break;
							i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return i
				}

				function q(e) {
					return r.toByteArray(function(e) {
						if ((e = (e = e.split("=")[0]).trim().replace(I, "")).length < 2) return "";
						for (; e.length % 4 != 0;) e += "=";
						return e
					}(e))
				}

				function j(e, t, n, r) {
					for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
					return o
				}

				function B(e, t) {
					return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
				}

				function F(e) {
					return e != e
				}
				var H = function() {
					for (var e = new Array(256), t = 0; t < 16; ++t)
						for (var n = 16 * t, r = 0; r < 16; ++r) e[n + r] = "0123456789abcdef" [t] + "0123456789abcdef" [r];
					return e
				}()
			},
			4184: (e, t) => {
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
						for (var e = [], t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							if (n) {
								var i = typeof n;
								if ("string" === i || "number" === i) e.push(n);
								else if (Array.isArray(n) && n.length) {
									var a = o.apply(null, n);
									a && e.push(a)
								} else if ("object" === i)
									for (var s in n) r.call(n, s) && n[s] && e.push(s)
							}
						}
						return e.join(" ")
					}
					e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
						return o
					}.apply(t, [])) || (e.exports = n)
				}()
			},
			5643: e => {
				e.exports = !1
			},
			7187: e => {
				"use strict";
				var t, n = "object" == typeof Reflect ? Reflect : null,
					r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
						return Function.prototype.apply.call(e, t, n)
					};
				t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
					return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
				} : function(e) {
					return Object.getOwnPropertyNames(e)
				};
				var o = Number.isNaN || function(e) {
					return e != e
				};

				function i() {
					i.init.call(this)
				}
				e.exports = i, e.exports.once = function(e, t) {
					return new Promise((function(n, r) {
						function o(n) {
							e.removeListener(t, i), r(n)
						}

						function i() {
							"function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments))
						}
						m(e, t, i, {
							once: !0
						}), "error" !== t && function(e, t, n) {
							"function" == typeof e.on && m(e, "error", t, n)
						}(e, o, {
							once: !0
						})
					}))
				}, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
				var a = 10;

				function s(e) {
					if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
				}

				function c(e) {
					return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
				}

				function l(e, t, n, r) {
					var o, i, a, l;
					if (s(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a) a = i[t] = n, ++e._eventsCount;
					else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = c(e)) > 0 && a.length > o && !a.warned) {
						a.warned = !0;
						var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
						u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, l = u, console && console.warn && console.warn(l)
					}
					return e
				}

				function u() {
					if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
				}

				function d(e, t, n) {
					var r = {
							fired: !1,
							wrapFn: void 0,
							target: e,
							type: t,
							listener: n
						},
						o = u.bind(r);
					return o.listener = n, r.wrapFn = o, o
				}

				function p(e, t, n) {
					var r = e._events;
					if (void 0 === r) return [];
					var o = r[t];
					return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
						for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
						return t
					}(o) : h(o, o.length)
				}

				function f(e) {
					var t = this._events;
					if (void 0 !== t) {
						var n = t[e];
						if ("function" == typeof n) return 1;
						if (void 0 !== n) return n.length
					}
					return 0
				}

				function h(e, t) {
					for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
					return n
				}

				function m(e, t, n, r) {
					if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
					else {
						if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
						e.addEventListener(t, (function o(i) {
							r.once && e.removeEventListener(t, o), n(i)
						}))
					}
				}
				Object.defineProperty(i, "defaultMaxListeners", {
					enumerable: !0,
					get: function() {
						return a
					},
					set: function(e) {
						if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
						a = e
					}
				}), i.init = function() {
					void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
				}, i.prototype.setMaxListeners = function(e) {
					if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
					return this._maxListeners = e, this
				}, i.prototype.getMaxListeners = function() {
					return c(this)
				}, i.prototype.emit = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
					var o = "error" === e,
						i = this._events;
					if (void 0 !== i) o = o && void 0 === i.error;
					else if (!o) return !1;
					if (o) {
						var a;
						if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
						var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
						throw s.context = a, s
					}
					var c = i[e];
					if (void 0 === c) return !1;
					if ("function" == typeof c) r(c, this, t);
					else {
						var l = c.length,
							u = h(c, l);
						for (n = 0; n < l; ++n) r(u[n], this, t)
					}
					return !0
				}, i.prototype.addListener = function(e, t) {
					return l(this, e, t, !1)
				}, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
					return l(this, e, t, !0)
				}, i.prototype.once = function(e, t) {
					return s(t), this.on(e, d(this, e, t)), this
				}, i.prototype.prependOnceListener = function(e, t) {
					return s(t), this.prependListener(e, d(this, e, t)), this
				}, i.prototype.removeListener = function(e, t) {
					var n, r, o, i, a;
					if (s(t), void 0 === (r = this._events)) return this;
					if (void 0 === (n = r[e])) return this;
					if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
					else if ("function" != typeof n) {
						for (o = -1, i = n.length - 1; i >= 0; i--)
							if (n[i] === t || n[i].listener === t) {
								a = n[i].listener, o = i;
								break
							} if (o < 0) return this;
						0 === o ? n.shift() : function(e, t) {
							for (; t + 1 < e.length; t++) e[t] = e[t + 1];
							e.pop()
						}(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
					}
					return this
				}, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
					var t, n, r;
					if (void 0 === (n = this._events)) return this;
					if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
					if (0 === arguments.length) {
						var o, i = Object.keys(n);
						for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
						return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
					}
					if ("function" == typeof(t = n[e])) this.removeListener(e, t);
					else if (void 0 !== t)
						for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
					return this
				}, i.prototype.listeners = function(e) {
					return p(this, e, !0)
				}, i.prototype.rawListeners = function(e) {
					return p(this, e, !1)
				}, i.listenerCount = function(e, t) {
					return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
				}, i.prototype.listenerCount = f, i.prototype.eventNames = function() {
					return this._eventsCount > 0 ? t(this._events) : []
				}
			},
			8679: (e, t, n) => {
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

				function c(e) {
					return r.isMemo(e) ? a : s[e.$$typeof] || o
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
				e.exports = function e(t, n, r) {
					if ("string" != typeof n) {
						if (h) {
							var o = f(n);
							o && o !== h && e(t, o, r)
						}
						var a = u(n);
						d && (a = a.concat(d(n)));
						for (var s = c(t), m = c(n), g = 0; g < a.length; ++g) {
							var _ = a[g];
							if (!(i[_] || r && r[_] || m && m[_] || s && s[_])) {
								var v = p(n, _);
								try {
									l(t, _, v)
								} catch (e) {}
							}
						}
					}
					return t
				}
			},
			645: (e, t) => {
				/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
				t.read = function(e, t, n, r, o) {
					var i, a, s = 8 * o - r - 1,
						c = (1 << s) - 1,
						l = c >> 1,
						u = -7,
						d = n ? o - 1 : 0,
						p = n ? -1 : 1,
						f = e[t + d];
					for (d += p, i = f & (1 << -u) - 1, f >>= -u, u += s; u > 0; i = 256 * i + e[t + d], d += p, u -= 8);
					for (a = i & (1 << -u) - 1, i >>= -u, u += r; u > 0; a = 256 * a + e[t + d], d += p, u -= 8);
					if (0 === i) i = 1 - l;
					else {
						if (i === c) return a ? NaN : 1 / 0 * (f ? -1 : 1);
						a += Math.pow(2, r), i -= l
					}
					return (f ? -1 : 1) * a * Math.pow(2, i - r)
				}, t.write = function(e, t, n, r, o, i) {
					var a, s, c, l = 8 * i - o - 1,
						u = (1 << l) - 1,
						d = u >> 1,
						p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						f = r ? 0 : i - 1,
						h = r ? 1 : -1,
						m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
					for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + d >= 1 ? p / c : p * Math.pow(2, 1 - d)) * c >= 2 && (a++, c /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * c - 1) * Math.pow(2, o), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + f] = 255 & s, f += h, s /= 256, o -= 8);
					for (a = a << o | s, l += o; l > 0; e[n + f] = 255 & a, f += h, a /= 256, l -= 8);
					e[n + f - h] |= 128 * m
				}
			},
			5717: e => {
				"function" == typeof Object.create ? e.exports = function(e, t) {
					t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}))
				} : e.exports = function(e, t) {
					if (t) {
						e.super_ = t;
						var n = function() {};
						n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
					}
				}
			},
			1143: e => {
				"use strict";
				e.exports = function(e, t, n, r, o, i, a, s) {
					if (!e) {
						var c;
						if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
						else {
							var l = [n, r, o, i, a, s],
								u = 0;
							(c = new Error(t.replace(/%s/g, (function() {
								return l[u++]
							})))).name = "Invariant Violation"
						}
						throw c.framesToPop = 1, c
					}
				}
			},
			4895: () => {},
			4352: () => {},
			2703: (e, t, n) => {
				"use strict";
				var r = n(414);

				function o() {}

				function i() {}
				i.resetWarningCache = o, e.exports = function() {
					function e(e, t, n, o, i, a) {
						if (a !== r) {
							var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
							throw s.name = "Invariant Violation", s
						}
					}

					function t() {
						return e
					}
					e.isRequired = e;
					var n = {
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
						checkPropTypes: i,
						resetWarningCache: o
					};
					return n.PropTypes = n, n
				}
			},
			5697: (e, t, n) => {
				e.exports = n(2703)()
			},
			414: e => {
				"use strict";
				e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
			},
			4887: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = t.decodeEntities,
						i = void 0 === n || n,
						a = t.transform,
						s = t.preprocessNodes,
						c = void 0 === s ? function(e) {
							return e
						} : s,
						l = c(r.default.parseDOM(e, {
							decodeEntities: i
						}));
					return (0, o.default)(l, a)
				};
				var r = i(n(6842)),
					o = i(n(6630));

				function i(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			5324: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, n) {
					return i.default[e.type](e, t, n)
				};
				var r, o = n(532),
					i = (r = o) && r.__esModule ? r : {
						default: r
					}
			},
			5888: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = ["allowfullScreen", "async", "autoplay", "capture", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "loop", "multiple", "muted", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "scoped", "seamless", "selected", "itemscope"]
			},
			5260: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = {
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
			3662: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
			},
			5961: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					var n = void 0;
					e.children.length > 0 && (n = e.children[0].data);
					var i = (0, o.default)(e.attribs, t);
					return r.default.createElement("style", i, n)
				};
				var r = i(n(3804)),
					o = i(n(8024));

				function i(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			2593: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, n) {
					var c = e.name;
					if (!(0, s.default)(c)) return null;
					var l = (0, i.default)(e.attribs, t),
						u = null; - 1 === a.default.indexOf(c) && (u = (0, o.default)(e.children, n));
					return r.default.createElement(c, l, u)
				};
				var r = c(n(3804)),
					o = c(n(6630)),
					i = c(n(8024)),
					a = c(n(3662)),
					s = c(n(2536));

				function c(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			3180: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					return e.data
				}
			},
			5639: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					return null
				}
			},
			532: (e, t, n) => {
				"use strict";
				var r;
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var o = n(6842),
					i = l(n(3180)),
					a = l(n(2593)),
					s = l(n(5961)),
					c = l(n(5639));

				function l(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function u(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				t.default = (u(r = {}, o.ElementType.Text, i.default), u(r, o.ElementType.Tag, a.default), u(r, o.ElementType.Style, s.default), u(r, o.ElementType.Directive, c.default), u(r, o.ElementType.Comment, c.default), u(r, o.ElementType.Script, c.default), u(r, o.ElementType.CDATA, c.default), u(r, o.ElementType.Doctype, c.default), r)
			},
			653: (e, t, n) => {
				"use strict";
				var r = n(6630);
				var o = n(5324);
				var i = n(6842);
				var a = s(n(4887));

				function s(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				t.ZP = a.default
			},
			6630: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					return e.filter((function(e) {
						return !(0, r.default)(e)
					})).map((function(e, n) {
						var r = void 0;
						return "function" != typeof t || null !== (r = t(e, n)) && !r ? (0, o.default)(e, n, t) : r
					}))
				};
				var r = i(n(2057)),
					o = i(n(5324));

				function i(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			8024: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				};
				t.default = function(e, t) {
					var n = r({}, (0, o.default)(e), {
						key: t
					});
					"string" == typeof n.style || n.style instanceof String ? n.style = (0, i.default)(n.style) : delete n.style;
					return n
				};
				var o = a(n(4381)),
					i = a(n(3083));

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			4381: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					return Object.keys(e).filter((function(e) {
						return (0, i.default)(e)
					})).reduce((function(t, n) {
						var i = n.toLowerCase(),
							a = o.default[i] || i;
						return t[a] = function(e, t) {
							r.default.map((function(e) {
								return e.toLowerCase()
							})).indexOf(e.toLowerCase()) >= 0 && (t = e);
							return t
						}(a, e[n]), t
					}), {})
				};
				var r = a(n(5888)),
					o = a(n(5260)),
					i = a(n(2536));

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
			},
			3083: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = function(e, t) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return function(e, t) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
						} catch (e) {
							o = !0, i = e
						} finally {
							try {
								!r && s.return && s.return()
							} finally {
								if (o) throw i
							}
						}
						return n
					}(e, t);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				};
				t.default = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					if ("" === e) return {};
					return e.split(";").reduce((function(e, t) {
						var r = t.split(/^([^:]+):/).filter((function(e, t) {
								return t > 0
							})).map((function(e) {
								return e.trim().toLowerCase()
							})),
							o = n(r, 2),
							i = o[0],
							a = o[1];
						return void 0 === a || (e[i = i.replace(/^-ms-/, "ms-").replace(/-(.)/g, (function(e, t) {
							return t.toUpperCase()
						}))] = a), e
					}), {})
				}
			},
			2057: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					return "text" === e.type && /\r?\n/.test(e.data) && "" === e.data.trim()
				}
			},
			2536: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					r.hasOwnProperty(e) || (r[e] = n.test(e));
					return r[e]
				};
				var n = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
					r = {}
			},
			2225: e => {
				"use strict";
				e.exports = JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}')
			},
			8472: (e, t, n) => {
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
					c = e.exports = function(e, t) {
						Array.isArray(e) || e.cheerio || (e = [e]), t = t || {};
						for (var n = "", o = 0; o < e.length; o++) {
							var i = e[o];
							"root" === i.type ? n += c(i.children, t) : r.isTag(i) ? n += u(i, t) : i.type === r.Directive ? n += d(i) : i.type === r.Comment ? n += h(i) : i.type === r.CDATA ? n += f(i) : n += p(i, t)
						}
						return n
					},
					l = ["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"];

				function u(e, t) {
					"foreign" === t.xmlMode && (e.name = i.elementNames[e.name] || e.name, e.parent && l.indexOf(e.parent.name) >= 0 && (t = Object.assign({}, t, {
						xmlMode: !1
					}))), !t.xmlMode && ["svg", "math"].indexOf(e.name) >= 0 && (t = Object.assign({}, t, {
						xmlMode: "foreign"
					}));
					var n = "<" + e.name,
						r = function(e, t) {
							if (e) {
								var n, r = "";
								for (var a in e) n = e[a], r && (r += " "), "foreign" === t.xmlMode && (a = i.attributeNames[a] || a), r += a, (null !== n && "" !== n || t.xmlMode) && (r += '="' + (t.decodeEntities ? o.encodeXML(n) : n.replace(/\"/g, "&quot;")) + '"');
								return r
							}
						}(e.attribs, t);
					return r && (n += " " + r), !t.xmlMode || e.children && 0 !== e.children.length ? (n += ">", e.children && (n += c(e.children, t)), s[e.name] && !t.xmlMode || (n += "</" + e.name + ">")) : n += "/>", n
				}

				function d(e) {
					return "<" + e.data + ">"
				}

				function p(e, t) {
					var n = e.data || "";
					return !t.decodeEntities || e.parent && e.parent.name in a || (n = o.encodeXML(n)), n
				}

				function f(e) {
					return "<![CDATA[" + e.children[0].data + "]]>"
				}

				function h(e) {
					return "\x3c!--" + e.data + "--\x3e"
				}
			},
			5025: (e, t) => {
				"use strict";
				var n;
				Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
					function(e) {
						e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
					}(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
						return e.type === n.Tag || e.type === n.Script || e.type === n.Style
					}, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
			},
			9095: function(e, t, n) {
				"use strict";
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.decodeHTML = t.decodeHTMLStrict = t.decodeXML = void 0;
				var o = r(n(7351)),
					i = r(n(8630)),
					a = r(n(6129)),
					s = r(n(5083)),
					c = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;

				function l(e) {
					var t = d(e);
					return function(e) {
						return String(e).replace(c, t)
					}
				}
				t.decodeXML = l(a.default), t.decodeHTMLStrict = l(o.default);
				var u = function(e, t) {
					return e < t ? 1 : -1
				};

				function d(e) {
					return function(t) {
						if ("#" === t.charAt(1)) {
							var n = t.charAt(2);
							return "X" === n || "x" === n ? s.default(parseInt(t.substr(3), 16)) : s.default(parseInt(t.substr(2), 10))
						}
						return e[t.slice(1, -1)] || t
					}
				}
				t.decodeHTML = function() {
					for (var e = Object.keys(i.default).sort(u), t = Object.keys(o.default).sort(u), n = 0, r = 0; n < t.length; n++) e[r] === t[n] ? (t[n] += ";?", r++) : t[n] += ";";
					var a = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
						s = d(o.default);

					function c(e) {
						return ";" !== e.substr(-1) && (e += ";"), s(e)
					}
					return function(e) {
						return String(e).replace(a, c)
					}
				}()
			},
			5083: function(e, t, n) {
				"use strict";
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var o = r(n(4289)),
					i = String.fromCodePoint || function(e) {
						var t = "";
						return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += String.fromCharCode(e)
					};
				t.default = function(e) {
					return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in o.default && (e = o.default[e]), i(e))
				}
			},
			6437: function(e, t, n) {
				"use strict";
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = void 0;
				var o = u(r(n(6129)).default),
					i = d(o);
				t.encodeXML = g(o);
				var a, s, c = u(r(n(7351)).default),
					l = d(c);

				function u(e) {
					return Object.keys(e).sort().reduce((function(t, n) {
						return t[e[n]] = "&" + n + ";", t
					}), {})
				}

				function d(e) {
					for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
						var i = o[r];
						1 === i.length ? t.push("\\" + i) : n.push(i)
					}
					t.sort();
					for (var a = 0; a < t.length - 1; a++) {
						for (var s = a; s < t.length - 1 && t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1);) s += 1;
						var c = 1 + s - a;
						c < 3 || t.splice(a, c, t[a] + "-" + t[s])
					}
					return n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g")
				}
				t.encodeHTML = (a = c, s = l, function(e) {
					return e.replace(s, (function(e) {
						return a[e]
					})).replace(p, h)
				}), t.encodeNonAsciiHTML = g(c);
				var p = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
					f = null != String.prototype.codePointAt ? function(e) {
						return e.codePointAt(0)
					} : function(e) {
						return 1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536
					};

				function h(e) {
					return "&#x" + (e.length > 1 ? f(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";"
				}
				var m = new RegExp(i.source + "|" + p.source, "g");

				function g(e) {
					return function(t) {
						return t.replace(m, (function(t) {
							return e[t] || h(t)
						}))
					}
				}
				t.escape = function(e) {
					return e.replace(m, h)
				}, t.escapeUTF8 = function(e) {
					return e.replace(i, h)
				}
			},
			713: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
				var r = n(9095),
					o = n(6437);
				t.decode = function(e, t) {
					return (!t || t <= 0 ? r.decodeXML : r.decodeHTML)(e)
				}, t.decodeStrict = function(e, t) {
					return (!t || t <= 0 ? r.decodeXML : r.decodeHTMLStrict)(e)
				}, t.encode = function(e, t) {
					return (!t || t <= 0 ? o.encodeXML : o.encodeHTML)(e)
				};
				var i = n(6437);
				Object.defineProperty(t, "encodeXML", {
					enumerable: !0,
					get: function() {
						return i.encodeXML
					}
				}), Object.defineProperty(t, "encodeHTML", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				}), Object.defineProperty(t, "encodeNonAsciiHTML", {
					enumerable: !0,
					get: function() {
						return i.encodeNonAsciiHTML
					}
				}), Object.defineProperty(t, "escape", {
					enumerable: !0,
					get: function() {
						return i.escape
					}
				}), Object.defineProperty(t, "escapeUTF8", {
					enumerable: !0,
					get: function() {
						return i.escapeUTF8
					}
				}), Object.defineProperty(t, "encodeHTML4", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				}), Object.defineProperty(t, "encodeHTML5", {
					enumerable: !0,
					get: function() {
						return i.encodeHTML
					}
				});
				var a = n(9095);
				Object.defineProperty(t, "decodeXML", {
					enumerable: !0,
					get: function() {
						return a.decodeXML
					}
				}), Object.defineProperty(t, "decodeHTML", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(t, "decodeHTMLStrict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(t, "decodeHTML4", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(t, "decodeHTML5", {
					enumerable: !0,
					get: function() {
						return a.decodeHTML
					}
				}), Object.defineProperty(t, "decodeHTML4Strict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(t, "decodeHTML5Strict", {
					enumerable: !0,
					get: function() {
						return a.decodeHTMLStrict
					}
				}), Object.defineProperty(t, "decodeXMLStrict", {
					enumerable: !0,
					get: function() {
						return a.decodeXML
					}
				})
			},
			4289: e => {
				"use strict";
				e.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
			},
			7351: e => {
				"use strict";
				e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
			},
			8630: e => {
				"use strict";
				e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
			},
			6129: e => {
				"use strict";
				e.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
			},
			1777: e => {
				e.exports = {
					Text: "text",
					Directive: "directive",
					Comment: "comment",
					Script: "script",
					Style: "style",
					Tag: "tag",
					CDATA: "cdata",
					Doctype: "doctype",
					isTag: function(e) {
						return "tag" === e.type || "script" === e.type || "style" === e.type
					}
				}
			},
			6034: (e, t, n) => {
				var r = n(1777),
					o = /\s+/g,
					i = n(7771),
					a = n(888);

				function s(e, t, n) {
					"object" == typeof e ? (n = t, t = e, e = null) : "function" == typeof t && (n = t, t = c), this._callback = e, this._options = t || c, this._elementCB = n, this.dom = [], this._done = !1, this._tagStack = [], this._parser = this._parser || null
				}
				var c = {
					normalizeWhitespace: !1,
					withStartIndices: !1,
					withEndIndices: !1
				};
				s.prototype.onparserinit = function(e) {
					this._parser = e
				}, s.prototype.onreset = function() {
					s.call(this, this._callback, this._options, this._elementCB)
				}, s.prototype.onend = function() {
					this._done || (this._done = !0, this._parser = null, this._handleCallback(null))
				}, s.prototype._handleCallback = s.prototype.onerror = function(e) {
					if ("function" == typeof this._callback) this._callback(e, this.dom);
					else if (e) throw e
				}, s.prototype.onclosetag = function() {
					var e = this._tagStack.pop();
					this._options.withEndIndices && e && (e.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(e)
				}, s.prototype._createDomElement = function(e) {
					if (!this._options.withDomLvl1) return e;
					var t;
					for (var n in t = "tag" === e.type ? Object.create(a) : Object.create(i), e) e.hasOwnProperty(n) && (t[n] = e[n]);
					return t
				}, s.prototype._addDomElement = function(e) {
					var t = this._tagStack[this._tagStack.length - 1],
						n = t ? t.children : this.dom,
						r = n[n.length - 1];
					e.next = null, this._options.withStartIndices && (e.startIndex = this._parser.startIndex), this._options.withEndIndices && (e.endIndex = this._parser.endIndex), r ? (e.prev = r, r.next = e) : e.prev = null, n.push(e), e.parent = t || null
				}, s.prototype.onopentag = function(e, t) {
					var n = {
							type: "script" === e ? r.Script : "style" === e ? r.Style : r.Tag,
							name: e,
							attribs: t,
							children: []
						},
						o = this._createDomElement(n);
					this._addDomElement(o), this._tagStack.push(o)
				}, s.prototype.ontext = function(e) {
					var t, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
					if (!this._tagStack.length && this.dom.length && (t = this.dom[this.dom.length - 1]).type === r.Text) n ? t.data = (t.data + e).replace(o, " ") : t.data += e;
					else if (this._tagStack.length && (t = this._tagStack[this._tagStack.length - 1]) && (t = t.children[t.children.length - 1]) && t.type === r.Text) n ? t.data = (t.data + e).replace(o, " ") : t.data += e;
					else {
						n && (e = e.replace(o, " "));
						var i = this._createDomElement({
							data: e,
							type: r.Text
						});
						this._addDomElement(i)
					}
				}, s.prototype.oncomment = function(e) {
					var t = this._tagStack[this._tagStack.length - 1];
					if (t && t.type === r.Comment) t.data += e;
					else {
						var n = {
								data: e,
								type: r.Comment
							},
							o = this._createDomElement(n);
						this._addDomElement(o), this._tagStack.push(o)
					}
				}, s.prototype.oncdatastart = function() {
					var e = {
							children: [{
								data: "",
								type: r.Text
							}],
							type: r.CDATA
						},
						t = this._createDomElement(e);
					this._addDomElement(t), this._tagStack.push(t)
				}, s.prototype.oncommentend = s.prototype.oncdataend = function() {
					this._tagStack.pop()
				}, s.prototype.onprocessinginstruction = function(e, t) {
					var n = this._createDomElement({
						name: e,
						data: t,
						type: r.Directive
					});
					this._addDomElement(n)
				}, e.exports = s
			},
			888: (e, t, n) => {
				var r = n(7771),
					o = e.exports = Object.create(r),
					i = {
						tagName: "name"
					};
				Object.keys(i).forEach((function(e) {
					var t = i[e];
					Object.defineProperty(o, e, {
						get: function() {
							return this[t] || null
						},
						set: function(e) {
							return this[t] = e, e
						}
					})
				}))
			},
			7771: e => {
				var t = e.exports = {
						get firstChild() {
							var e = this.children;
							return e && e[0] || null
						},
						get lastChild() {
							var e = this.children;
							return e && e[e.length - 1] || null
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
				Object.keys(n).forEach((function(e) {
					var r = n[e];
					Object.defineProperty(t, e, {
						get: function() {
							return this[r] || null
						},
						set: function(e) {
							return this[r] = e, e
						}
					})
				}))
			},
			5993: (e, t, n) => {
				var r = e.exports;
				[n(6541), n(7310), n(8399), n(8458), n(3942), n(9259)].forEach((function(e) {
					Object.keys(e).forEach((function(t) {
						r[t] = e[t].bind(r)
					}))
				}))
			},
			9259: (e, t) => {
				t.removeSubsets = function(e) {
					for (var t, n, r, o = e.length; --o > -1;) {
						for (t = n = e[o], e[o] = null, r = !0; n;) {
							if (e.indexOf(n) > -1) {
								r = !1, e.splice(o, 1);
								break
							}
							n = n.parent
						}
						r && (e[o] = t)
					}
					return e
				};
				var n = 1,
					r = 2,
					o = 4,
					i = 8,
					a = 16,
					s = t.compareDocumentPosition = function(e, t) {
						var s, c, l, u, d, p, f = [],
							h = [];
						if (e === t) return 0;
						for (s = e; s;) f.unshift(s), s = s.parent;
						for (s = t; s;) h.unshift(s), s = s.parent;
						for (p = 0; f[p] === h[p];) p++;
						return 0 === p ? n : (l = (c = f[p - 1]).children, u = f[p], d = h[p], l.indexOf(u) > l.indexOf(d) ? c === t ? o | a : o : c === e ? r | i : r)
					};
				t.uniqueSort = function(e) {
					var t, n, i = e.length;
					for (e = e.slice(); --i > -1;) t = e[i], (n = e.indexOf(t)) > -1 && n < i && e.splice(i, 1);
					return e.sort((function(e, t) {
						var n = s(e, t);
						return n & r ? -1 : n & o ? 1 : 0
					})), e
				}
			},
			3942: (e, t, n) => {
				var r = n(1777),
					o = t.isTag = r.isTag;
				t.testElement = function(e, t) {
					for (var n in e)
						if (e.hasOwnProperty(n)) {
							if ("tag_name" === n) {
								if (!o(t) || !e.tag_name(t.name)) return !1
							} else if ("tag_type" === n) {
								if (!e.tag_type(t.type)) return !1
							} else if ("tag_contains" === n) {
								if (o(t) || !e.tag_contains(t.data)) return !1
							} else if (!t.attribs || !e[n](t.attribs[n])) return !1
						} else;
					return !0
				};
				var i = {
					tag_name: function(e) {
						return "function" == typeof e ? function(t) {
							return o(t) && e(t.name)
						} : "*" === e ? o : function(t) {
							return o(t) && t.name === e
						}
					},
					tag_type: function(e) {
						return "function" == typeof e ? function(t) {
							return e(t.type)
						} : function(t) {
							return t.type === e
						}
					},
					tag_contains: function(e) {
						return "function" == typeof e ? function(t) {
							return !o(t) && e(t.data)
						} : function(t) {
							return !o(t) && t.data === e
						}
					}
				};

				function a(e, t) {
					return "function" == typeof t ? function(n) {
						return n.attribs && t(n.attribs[e])
					} : function(n) {
						return n.attribs && n.attribs[e] === t
					}
				}

				function s(e, t) {
					return function(n) {
						return e(n) || t(n)
					}
				}
				t.getElements = function(e, t, n, r) {
					var o = Object.keys(e).map((function(t) {
						var n = e[t];
						return t in i ? i[t](n) : a(t, n)
					}));
					return 0 === o.length ? [] : this.filter(o.reduce(s), t, n, r)
				}, t.getElementById = function(e, t, n) {
					return Array.isArray(t) || (t = [t]), this.findOne(a("id", e), t, !1 !== n)
				}, t.getElementsByTagName = function(e, t, n, r) {
					return this.filter(i.tag_name(e), t, n, r)
				}, t.getElementsByTagType = function(e, t, n, r) {
					return this.filter(i.tag_type(e), t, n, r)
				}
			},
			8399: (e, t) => {
				t.removeElement = function(e) {
					if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
						var t = e.parent.children;
						t.splice(t.lastIndexOf(e), 1)
					}
				}, t.replaceElement = function(e, t) {
					var n = t.prev = e.prev;
					n && (n.next = t);
					var r = t.next = e.next;
					r && (r.prev = t);
					var o = t.parent = e.parent;
					if (o) {
						var i = o.children;
						i[i.lastIndexOf(e)] = t
					}
				}, t.appendChild = function(e, t) {
					if (t.parent = e, 1 !== e.children.push(t)) {
						var n = e.children[e.children.length - 2];
						n.next = t, t.prev = n, t.next = null
					}
				}, t.append = function(e, t) {
					var n = e.parent,
						r = e.next;
					if (t.next = r, t.prev = e, e.next = t, t.parent = n, r) {
						if (r.prev = t, n) {
							var o = n.children;
							o.splice(o.lastIndexOf(r), 0, t)
						}
					} else n && n.children.push(t)
				}, t.prepend = function(e, t) {
					var n = e.parent;
					if (n) {
						var r = n.children;
						r.splice(r.lastIndexOf(e), 0, t)
					}
					e.prev && (e.prev.next = t), t.parent = n, t.prev = e.prev, t.next = e, e.prev = t
				}
			},
			8458: (e, t, n) => {
				var r = n(1777).isTag;

				function o(e, t, n, r) {
					for (var i, a = [], s = 0, c = t.length; s < c && !(e(t[s]) && (a.push(t[s]), --r <= 0)) && (i = t[s].children, !(n && i && i.length > 0 && (i = o(e, i, n, r), a = a.concat(i), (r -= i.length) <= 0))); s++);
					return a
				}
				e.exports = {
					filter: function(e, t, n, r) {
						Array.isArray(t) || (t = [t]);
						"number" == typeof r && isFinite(r) || (r = 1 / 0);
						return o(e, t, !1 !== n, r)
					},
					find: o,
					findOneChild: function(e, t) {
						for (var n = 0, r = t.length; n < r; n++)
							if (e(t[n])) return t[n];
						return null
					},
					findOne: function e(t, n) {
						for (var o = null, i = 0, a = n.length; i < a && !o; i++) r(n[i]) && (t(n[i]) ? o = n[i] : n[i].children.length > 0 && (o = e(t, n[i].children)));
						return o
					},
					existsOne: function e(t, n) {
						for (var o = 0, i = n.length; o < i; o++)
							if (r(n[o]) && (t(n[o]) || n[o].children.length > 0 && e(t, n[o].children))) return !0;
						return !1
					},
					findAll: function(e, t) {
						var n = [],
							o = t.slice();
						for (; o.length;) {
							var i = o.shift();
							r(i) && (i.children && i.children.length > 0 && o.unshift.apply(o, i.children), e(i) && n.push(i))
						}
						return n
					}
				}
			},
			6541: (e, t, n) => {
				var r = n(1777),
					o = n(8472),
					i = r.isTag;
				e.exports = {
					getInnerHTML: function(e, t) {
						return e.children ? e.children.map((function(e) {
							return o(e, t)
						})).join("") : ""
					},
					getOuterHTML: o,
					getText: function e(t) {
						return Array.isArray(t) ? t.map(e).join("") : i(t) ? "br" === t.name ? "\n" : e(t.children) : t.type === r.CDATA ? e(t.children) : t.type === r.Text ? t.data : ""
					}
				}
			},
			7310: (e, t) => {
				var n = t.getChildren = function(e) {
						return e.children
					},
					r = t.getParent = function(e) {
						return e.parent
					};
				t.getSiblings = function(e) {
					var t = r(e);
					return t ? n(t) : [e]
				}, t.getAttributeValue = function(e, t) {
					return e.attribs && e.attribs[t]
				}, t.hasAttrib = function(e, t) {
					return !!e.attribs && hasOwnProperty.call(e.attribs, t)
				}, t.getName = function(e) {
					return e.name
				}
			},
			2517: (e, t, n) => {
				var r = n(3565);
				e.exports = function(e) {
					if (e >= 55296 && e <= 57343 || e > 1114111) return "�";
					e in r && (e = r[e]);
					var t = "";
					e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e);
					return t += String.fromCharCode(e)
				}
			},
			3565: e => {
				"use strict";
				e.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
			},
			8483: e => {
				"use strict";
				e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
			},
			3239: e => {
				"use strict";
				e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
			},
			7986: e => {
				"use strict";
				e.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
			},
			3497: (e, t, n) => {
				function r(e) {
					this._cbs = e || {}, this.events = []
				}
				e.exports = r;
				var o = n(6842).EVENTS;
				Object.keys(o).forEach((function(e) {
					if (0 === o[e]) e = "on" + e, r.prototype[e] = function() {
						this.events.push([e]), this._cbs[e] && this._cbs[e]()
					};
					else if (1 === o[e]) e = "on" + e, r.prototype[e] = function(t) {
						this.events.push([e, t]), this._cbs[e] && this._cbs[e](t)
					};
					else {
						if (2 !== o[e]) throw Error("wrong number of arguments");
						e = "on" + e, r.prototype[e] = function(t, n) {
							this.events.push([e, t, n]), this._cbs[e] && this._cbs[e](t, n)
						}
					}
				})), r.prototype.onreset = function() {
					this.events = [], this._cbs.onreset && this._cbs.onreset()
				}, r.prototype.restart = function() {
					this._cbs.onreset && this._cbs.onreset();
					for (var e = 0, t = this.events.length; e < t; e++)
						if (this._cbs[this.events[e][0]]) {
							var n = this.events[e].length;
							1 === n ? this._cbs[this.events[e][0]]() : 2 === n ? this._cbs[this.events[e][0]](this.events[e][1]) : this._cbs[this.events[e][0]](this.events[e][1], this.events[e][2])
						}
				}
			},
			4235: (e, t, n) => {
				var r = n(6034),
					o = n(5993);

				function i(e, t) {
					this.init(e, t)
				}

				function a(e, t) {
					return o.getElementsByTagName(e, t, !0)
				}

				function s(e, t) {
					return o.getElementsByTagName(e, t, !0, 1)[0]
				}

				function c(e, t, n) {
					return o.getText(o.getElementsByTagName(e, t, n, 1)).trim()
				}

				function l(e, t, n, r, o) {
					var i = c(n, r, o);
					i && (e[t] = i)
				}
				n(5717)(i, r), i.prototype.init = r;
				var u = function(e) {
					return "rss" === e || "feed" === e || "rdf:RDF" === e
				};
				i.prototype.onend = function() {
					var e, t, n = {},
						o = s(u, this.dom);
					o && ("feed" === o.name ? (t = o.children, n.type = "atom", l(n, "id", "id", t), l(n, "title", "title", t), (e = s("link", t)) && (e = e.attribs) && (e = e.href) && (n.link = e), l(n, "description", "subtitle", t), (e = c("updated", t)) && (n.updated = new Date(e)), l(n, "author", "email", t, !0), n.items = a("entry", t).map((function(e) {
						var t, n = {};
						return l(n, "id", "id", e = e.children), l(n, "title", "title", e), (t = s("link", e)) && (t = t.attribs) && (t = t.href) && (n.link = t), (t = c("summary", e) || c("content", e)) && (n.description = t), (t = c("updated", e)) && (n.pubDate = new Date(t)), n
					}))) : (t = s("channel", o.children).children, n.type = o.name.substr(0, 3), n.id = "", l(n, "title", "title", t), l(n, "link", "link", t), l(n, "description", "description", t), (e = c("lastBuildDate", t)) && (n.updated = new Date(e)), l(n, "author", "managingEditor", t, !0), n.items = a("item", o.children).map((function(e) {
						var t, n = {};
						return l(n, "id", "guid", e = e.children), l(n, "title", "title", e), l(n, "link", "link", e), l(n, "description", "description", e), (t = c("pubDate", e)) && (n.pubDate = new Date(t)), n
					})))), this.dom = n, r.prototype._handleCallback.call(this, o ? null : Error("couldn't find root of feed"))
				}, e.exports = i
			},
			8134: (e, t, n) => {
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

				function u(e, t) {
					this._options = t || {}, this._cbs = e || {}, this._tagname = "", this._attribname = "", this._attribvalue = "", this._attribs = null, this._stack = [], this._foreignContext = [], this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, this._options.Tokenizer && (r = this._options.Tokenizer), this._tokenizer = new r(this._options, this), this._cbs.onparserinit && this._cbs.onparserinit(this)
				}
				n(5717)(u, n(7187).EventEmitter), u.prototype._updatePosition = function(e) {
					null === this.endIndex ? this._tokenizer._sectionStart <= e ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - e : this.startIndex = this.endIndex + 1, this.endIndex = this._tokenizer.getAbsoluteIndex()
				}, u.prototype.ontext = function(e) {
					this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(e)
				}, u.prototype.onopentagname = function(e) {
					if (this._lowerCaseTagNames && (e = e.toLowerCase()), this._tagname = e, !this._options.xmlMode && e in i)
						for (var t;
							(t = this._stack[this._stack.length - 1]) in i[e]; this.onclosetag(t));
					!this._options.xmlMode && e in a || (this._stack.push(e), e in s ? this._foreignContext.push(!0) : e in c && this._foreignContext.push(!1)), this._cbs.onopentagname && this._cbs.onopentagname(e), this._cbs.onopentag && (this._attribs = {})
				}, u.prototype.onopentagend = function() {
					this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in a && this._cbs.onclosetag(this._tagname), this._tagname = ""
				}, u.prototype.onclosetag = function(e) {
					if (this._updatePosition(1), this._lowerCaseTagNames && (e = e.toLowerCase()), (e in s || e in c) && this._foreignContext.pop(), !this._stack.length || e in a && !this._options.xmlMode) this._options.xmlMode || "br" !== e && "p" !== e || (this.onopentagname(e), this._closeCurrentTag());
					else {
						var t = this._stack.lastIndexOf(e);
						if (-1 !== t)
							if (this._cbs.onclosetag)
								for (t = this._stack.length - t; t--;) this._cbs.onclosetag(this._stack.pop());
							else this._stack.length = t;
						else "p" !== e || this._options.xmlMode || (this.onopentagname(e), this._closeCurrentTag())
					}
				}, u.prototype.onselfclosingtag = function() {
					this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend()
				}, u.prototype._closeCurrentTag = function() {
					var e = this._tagname;
					this.onopentagend(), this._stack[this._stack.length - 1] === e && (this._cbs.onclosetag && this._cbs.onclosetag(e), this._stack.pop())
				}, u.prototype.onattribname = function(e) {
					this._lowerCaseAttributeNames && (e = e.toLowerCase()), this._attribname = e
				}, u.prototype.onattribdata = function(e) {
					this._attribvalue += e
				}, u.prototype.onattribend = function() {
					this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), this._attribname = "", this._attribvalue = ""
				}, u.prototype._getInstructionName = function(e) {
					var t = e.search(l),
						n = t < 0 ? e : e.substr(0, t);
					return this._lowerCaseTagNames && (n = n.toLowerCase()), n
				}, u.prototype.ondeclaration = function(e) {
					if (this._cbs.onprocessinginstruction) {
						var t = this._getInstructionName(e);
						this._cbs.onprocessinginstruction("!" + t, "!" + e)
					}
				}, u.prototype.onprocessinginstruction = function(e) {
					if (this._cbs.onprocessinginstruction) {
						var t = this._getInstructionName(e);
						this._cbs.onprocessinginstruction("?" + t, "?" + e)
					}
				}, u.prototype.oncomment = function(e) {
					this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(e), this._cbs.oncommentend && this._cbs.oncommentend()
				}, u.prototype.oncdata = function(e) {
					this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), this._cbs.ontext && this._cbs.ontext(e), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + e + "]]")
				}, u.prototype.onerror = function(e) {
					this._cbs.onerror && this._cbs.onerror(e)
				}, u.prototype.onend = function() {
					if (this._cbs.onclosetag)
						for (var e = this._stack.length; e > 0; this._cbs.onclosetag(this._stack[--e]));
					this._cbs.onend && this._cbs.onend()
				}, u.prototype.reset = function() {
					this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this)
				}, u.prototype.parseComplete = function(e) {
					this.reset(), this.end(e)
				}, u.prototype.write = function(e) {
					this._tokenizer.write(e)
				}, u.prototype.end = function(e) {
					this._tokenizer.end(e)
				}, u.prototype.pause = function() {
					this._tokenizer.pause()
				}, u.prototype.resume = function() {
					this._tokenizer.resume()
				}, u.prototype.parseChunk = u.prototype.write, u.prototype.done = u.prototype.end, e.exports = u
			},
			1802: (e, t, n) => {
				function r(e) {
					this._cbs = e || {}
				}
				e.exports = r;
				var o = n(6842).EVENTS;
				Object.keys(o).forEach((function(e) {
					if (0 === o[e]) e = "on" + e, r.prototype[e] = function() {
						this._cbs[e] && this._cbs[e]()
					};
					else if (1 === o[e]) e = "on" + e, r.prototype[e] = function(t) {
						this._cbs[e] && this._cbs[e](t)
					};
					else {
						if (2 !== o[e]) throw Error("wrong number of arguments");
						e = "on" + e, r.prototype[e] = function(t, n) {
							this._cbs[e] && this._cbs[e](t, n)
						}
					}
				}))
			},
			287: (e, t, n) => {
				e.exports = o;
				var r = n(7214);

				function o(e) {
					r.call(this, new i(this), e)
				}

				function i(e) {
					this.scope = e
				}
				n(5717)(o, r), o.prototype.readable = !0;
				var a = n(6842).EVENTS;
				Object.keys(a).forEach((function(e) {
					if (0 === a[e]) i.prototype["on" + e] = function() {
						this.scope.emit(e)
					};
					else if (1 === a[e]) i.prototype["on" + e] = function(t) {
						this.scope.emit(e, t)
					};
					else {
						if (2 !== a[e]) throw Error("wrong number of arguments!");
						i.prototype["on" + e] = function(t, n) {
							this.scope.emit(e, t, n)
						}
					}
				}))
			},
			8083: (e, t, n) => {
				e.exports = ge;
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
					g = s++,
					_ = s++,
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
					T = s++,
					k = s++,
					N = s++,
					A = s++,
					R = s++,
					D = s++,
					L = s++,
					I = s++,
					M = s++,
					q = s++,
					j = s++,
					B = s++,
					F = s++,
					H = s++,
					U = s++,
					z = s++,
					V = s++,
					W = s++,
					K = s++,
					G = s++,
					$ = s++,
					Q = s++,
					Y = s++,
					J = s++,
					Z = s++,
					X = s++,
					ee = s++,
					te = s++,
					ne = s++,
					re = s++,
					oe = s++,
					ie = s++,
					ae = s++,
					se = s++,
					ce = s++,
					le = 0,
					ue = le++,
					de = le++,
					pe = le++;

				function fe(e) {
					return " " === e || "\n" === e || "\t" === e || "\f" === e || "\r" === e
				}

				function he(e, t, n) {
					var r = e.toLowerCase();
					return e === r ? function(e) {
						e === r ? this._state = t : (this._state = n, this._index--)
					} : function(o) {
						o === r || o === e ? this._state = t : (this._state = n, this._index--)
					}
				}

				function me(e, t) {
					var n = e.toLowerCase();
					return function(r) {
						r === n || r === e ? this._state = t : (this._state = u, this._index--)
					}
				}

				function ge(e, t) {
					this._state = c, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = c, this._special = ue, this._cbs = t, this._running = !0, this._ended = !1, this._xmlMode = !(!e || !e.xmlMode), this._decodeEntities = !(!e || !e.decodeEntities)
				}
				ge.prototype._stateText = function(e) {
					"<" === e ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._state = l, this._sectionStart = this._index) : this._decodeEntities && this._special === ue && "&" === e && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._baseState = c, this._state = oe, this._sectionStart = this._index)
				}, ge.prototype._stateBeforeTagName = function(e) {
					"/" === e ? this._state = p : "<" === e ? (this._cbs.ontext(this._getSection()), this._sectionStart = this._index) : ">" === e || this._special !== ue || fe(e) ? this._state = c : "!" === e ? (this._state = E, this._sectionStart = this._index + 1) : "?" === e ? (this._state = S, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== e && "S" !== e ? u : j, this._sectionStart = this._index)
				}, ge.prototype._stateInTagName = function(e) {
					("/" === e || ">" === e || fe(e)) && (this._emitToken("onopentagname"), this._state = m, this._index--)
				}, ge.prototype._stateBeforeCloseingTagName = function(e) {
					fe(e) || (">" === e ? this._state = c : this._special !== ue ? "s" === e || "S" === e ? this._state = B : (this._state = c, this._index--) : (this._state = f, this._sectionStart = this._index))
				}, ge.prototype._stateInCloseingTagName = function(e) {
					(">" === e || fe(e)) && (this._emitToken("onclosetag"), this._state = h, this._index--)
				}, ge.prototype._stateAfterCloseingTagName = function(e) {
					">" === e && (this._state = c, this._sectionStart = this._index + 1)
				}, ge.prototype._stateBeforeAttributeName = function(e) {
					">" === e ? (this._cbs.onopentagend(), this._state = c, this._sectionStart = this._index + 1) : "/" === e ? this._state = d : fe(e) || (this._state = g, this._sectionStart = this._index)
				}, ge.prototype._stateInSelfClosingTag = function(e) {
					">" === e ? (this._cbs.onselfclosingtag(), this._state = c, this._sectionStart = this._index + 1) : fe(e) || (this._state = m, this._index--)
				}, ge.prototype._stateInAttributeName = function(e) {
					("=" === e || "/" === e || ">" === e || fe(e)) && (this._cbs.onattribname(this._getSection()), this._sectionStart = -1, this._state = _, this._index--)
				}, ge.prototype._stateAfterAttributeName = function(e) {
					"=" === e ? this._state = v : "/" === e || ">" === e ? (this._cbs.onattribend(), this._state = m, this._index--) : fe(e) || (this._cbs.onattribend(), this._state = g, this._sectionStart = this._index)
				}, ge.prototype._stateBeforeAttributeValue = function(e) {
					'"' === e ? (this._state = y, this._sectionStart = this._index + 1) : "'" === e ? (this._state = w, this._sectionStart = this._index + 1) : fe(e) || (this._state = b, this._sectionStart = this._index, this._index--)
				}, ge.prototype._stateInAttributeValueDoubleQuotes = function(e) {
					'"' === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
				}, ge.prototype._stateInAttributeValueSingleQuotes = function(e) {
					"'" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
				}, ge.prototype._stateInAttributeValueNoQuotes = function(e) {
					fe(e) || ">" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m, this._index--) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
				}, ge.prototype._stateBeforeDeclaration = function(e) {
					this._state = "[" === e ? k : "-" === e ? C : O
				}, ge.prototype._stateInDeclaration = function(e) {
					">" === e && (this._cbs.ondeclaration(this._getSection()), this._state = c, this._sectionStart = this._index + 1)
				}, ge.prototype._stateInProcessingInstruction = function(e) {
					">" === e && (this._cbs.onprocessinginstruction(this._getSection()), this._state = c, this._sectionStart = this._index + 1)
				}, ge.prototype._stateBeforeComment = function(e) {
					"-" === e ? (this._state = x, this._sectionStart = this._index + 1) : this._state = O
				}, ge.prototype._stateInComment = function(e) {
					"-" === e && (this._state = P)
				}, ge.prototype._stateAfterComment1 = function(e) {
					this._state = "-" === e ? T : x
				}, ge.prototype._stateAfterComment2 = function(e) {
					">" === e ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = c, this._sectionStart = this._index + 1) : "-" !== e && (this._state = x)
				}, ge.prototype._stateBeforeCdata1 = he("C", N, O), ge.prototype._stateBeforeCdata2 = he("D", A, O), ge.prototype._stateBeforeCdata3 = he("A", R, O), ge.prototype._stateBeforeCdata4 = he("T", D, O), ge.prototype._stateBeforeCdata5 = he("A", L, O), ge.prototype._stateBeforeCdata6 = function(e) {
					"[" === e ? (this._state = I, this._sectionStart = this._index + 1) : (this._state = O, this._index--)
				}, ge.prototype._stateInCdata = function(e) {
					"]" === e && (this._state = M)
				}, ge.prototype._stateAfterCdata1 = function(e) {
					this._state = "]" === e ? q : I
				}, ge.prototype._stateAfterCdata2 = function(e) {
					">" === e ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = c, this._sectionStart = this._index + 1) : "]" !== e && (this._state = I)
				}, ge.prototype._stateBeforeSpecial = function(e) {
					"c" === e || "C" === e ? this._state = F : "t" === e || "T" === e ? this._state = Y : (this._state = u, this._index--)
				}, ge.prototype._stateBeforeSpecialEnd = function(e) {
					this._special !== de || "c" !== e && "C" !== e ? this._special !== pe || "t" !== e && "T" !== e ? this._state = c : this._state = ee : this._state = W
				}, ge.prototype._stateBeforeScript1 = me("R", H), ge.prototype._stateBeforeScript2 = me("I", U), ge.prototype._stateBeforeScript3 = me("P", z), ge.prototype._stateBeforeScript4 = me("T", V), ge.prototype._stateBeforeScript5 = function(e) {
					("/" === e || ">" === e || fe(e)) && (this._special = de), this._state = u, this._index--
				}, ge.prototype._stateAfterScript1 = he("R", K, c), ge.prototype._stateAfterScript2 = he("I", G, c), ge.prototype._stateAfterScript3 = he("P", $, c), ge.prototype._stateAfterScript4 = he("T", Q, c), ge.prototype._stateAfterScript5 = function(e) {
					">" === e || fe(e) ? (this._special = ue, this._state = f, this._sectionStart = this._index - 6, this._index--) : this._state = c
				}, ge.prototype._stateBeforeStyle1 = me("Y", J), ge.prototype._stateBeforeStyle2 = me("L", Z), ge.prototype._stateBeforeStyle3 = me("E", X), ge.prototype._stateBeforeStyle4 = function(e) {
					("/" === e || ">" === e || fe(e)) && (this._special = pe), this._state = u, this._index--
				}, ge.prototype._stateAfterStyle1 = he("Y", te, c), ge.prototype._stateAfterStyle2 = he("L", ne, c), ge.prototype._stateAfterStyle3 = he("E", re, c), ge.prototype._stateAfterStyle4 = function(e) {
					">" === e || fe(e) ? (this._special = ue, this._state = f, this._sectionStart = this._index - 5, this._index--) : this._state = c
				}, ge.prototype._stateBeforeEntity = he("#", ie, ae), ge.prototype._stateBeforeNumericEntity = he("X", ce, se), ge.prototype._parseNamedEntityStrict = function() {
					if (this._sectionStart + 1 < this._index) {
						var e = this._buffer.substring(this._sectionStart + 1, this._index),
							t = this._xmlMode ? a : o;
						t.hasOwnProperty(e) && (this._emitPartial(t[e]), this._sectionStart = this._index + 1)
					}
				}, ge.prototype._parseLegacyEntity = function() {
					var e = this._sectionStart + 1,
						t = this._index - e;
					for (t > 6 && (t = 6); t >= 2;) {
						var n = this._buffer.substr(e, t);
						if (i.hasOwnProperty(n)) return this._emitPartial(i[n]), void(this._sectionStart += t + 1);
						t--
					}
				}, ge.prototype._stateInNamedEntity = function(e) {
					";" === e ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), this._state = this._baseState) : (e < "a" || e > "z") && (e < "A" || e > "Z") && (e < "0" || e > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== c ? "=" !== e && this._parseNamedEntityStrict() : this._parseLegacyEntity()), this._state = this._baseState, this._index--)
				}, ge.prototype._decodeNumericEntity = function(e, t) {
					var n = this._sectionStart + e;
					if (n !== this._index) {
						var o = this._buffer.substring(n, this._index),
							i = parseInt(o, t);
						this._emitPartial(r(i)), this._sectionStart = this._index
					} else this._sectionStart--;
					this._state = this._baseState
				}, ge.prototype._stateInNumericEntity = function(e) {
					";" === e ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), this._index--)
				}, ge.prototype._stateInHexEntity = function(e) {
					";" === e ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (e < "a" || e > "f") && (e < "A" || e > "F") && (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), this._index--)
				}, ge.prototype._cleanup = function() {
					this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._running && (this._state === c ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0)
				}, ge.prototype.write = function(e) {
					this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += e, this._parse()
				}, ge.prototype._parse = function() {
					for (; this._index < this._buffer.length && this._running;) {
						var e = this._buffer.charAt(this._index);
						this._state === c ? this._stateText(e) : this._state === l ? this._stateBeforeTagName(e) : this._state === u ? this._stateInTagName(e) : this._state === p ? this._stateBeforeCloseingTagName(e) : this._state === f ? this._stateInCloseingTagName(e) : this._state === h ? this._stateAfterCloseingTagName(e) : this._state === d ? this._stateInSelfClosingTag(e) : this._state === m ? this._stateBeforeAttributeName(e) : this._state === g ? this._stateInAttributeName(e) : this._state === _ ? this._stateAfterAttributeName(e) : this._state === v ? this._stateBeforeAttributeValue(e) : this._state === y ? this._stateInAttributeValueDoubleQuotes(e) : this._state === w ? this._stateInAttributeValueSingleQuotes(e) : this._state === b ? this._stateInAttributeValueNoQuotes(e) : this._state === E ? this._stateBeforeDeclaration(e) : this._state === O ? this._stateInDeclaration(e) : this._state === S ? this._stateInProcessingInstruction(e) : this._state === C ? this._stateBeforeComment(e) : this._state === x ? this._stateInComment(e) : this._state === P ? this._stateAfterComment1(e) : this._state === T ? this._stateAfterComment2(e) : this._state === k ? this._stateBeforeCdata1(e) : this._state === N ? this._stateBeforeCdata2(e) : this._state === A ? this._stateBeforeCdata3(e) : this._state === R ? this._stateBeforeCdata4(e) : this._state === D ? this._stateBeforeCdata5(e) : this._state === L ? this._stateBeforeCdata6(e) : this._state === I ? this._stateInCdata(e) : this._state === M ? this._stateAfterCdata1(e) : this._state === q ? this._stateAfterCdata2(e) : this._state === j ? this._stateBeforeSpecial(e) : this._state === B ? this._stateBeforeSpecialEnd(e) : this._state === F ? this._stateBeforeScript1(e) : this._state === H ? this._stateBeforeScript2(e) : this._state === U ? this._stateBeforeScript3(e) : this._state === z ? this._stateBeforeScript4(e) : this._state === V ? this._stateBeforeScript5(e) : this._state === W ? this._stateAfterScript1(e) : this._state === K ? this._stateAfterScript2(e) : this._state === G ? this._stateAfterScript3(e) : this._state === $ ? this._stateAfterScript4(e) : this._state === Q ? this._stateAfterScript5(e) : this._state === Y ? this._stateBeforeStyle1(e) : this._state === J ? this._stateBeforeStyle2(e) : this._state === Z ? this._stateBeforeStyle3(e) : this._state === X ? this._stateBeforeStyle4(e) : this._state === ee ? this._stateAfterStyle1(e) : this._state === te ? this._stateAfterStyle2(e) : this._state === ne ? this._stateAfterStyle3(e) : this._state === re ? this._stateAfterStyle4(e) : this._state === oe ? this._stateBeforeEntity(e) : this._state === ie ? this._stateBeforeNumericEntity(e) : this._state === ae ? this._stateInNamedEntity(e) : this._state === se ? this._stateInNumericEntity(e) : this._state === ce ? this._stateInHexEntity(e) : this._cbs.onerror(Error("unknown _state"), this._state), this._index++
					}
					this._cleanup()
				}, ge.prototype.pause = function() {
					this._running = !1
				}, ge.prototype.resume = function() {
					this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish()
				}, ge.prototype.end = function(e) {
					this._ended && this._cbs.onerror(Error(".end() after done!")), e && this.write(e), this._ended = !0, this._running && this._finish()
				}, ge.prototype._finish = function() {
					this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend()
				}, ge.prototype._handleTrailingData = function() {
					var e = this._buffer.substr(this._sectionStart);
					this._state === I || this._state === M || this._state === q ? this._cbs.oncdata(e) : this._state === x || this._state === P || this._state === T ? this._cbs.oncomment(e) : this._state !== ae || this._xmlMode ? this._state !== se || this._xmlMode ? this._state !== ce || this._xmlMode ? this._state !== u && this._state !== m && this._state !== v && this._state !== _ && this._state !== g && this._state !== w && this._state !== y && this._state !== b && this._state !== f && this._cbs.ontext(e) : (this._decodeNumericEntity(3, 16), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()))
				}, ge.prototype.reset = function() {
					ge.call(this, {
						xmlMode: this._xmlMode,
						decodeEntities: this._decodeEntities
					}, this._cbs)
				}, ge.prototype.getAbsoluteIndex = function() {
					return this._bufferOffset + this._index
				}, ge.prototype._getSection = function() {
					return this._buffer.substring(this._sectionStart, this._index)
				}, ge.prototype._emitToken = function(e) {
					this._cbs[e](this._getSection()), this._sectionStart = -1
				}, ge.prototype._emitPartial = function(e) {
					this._baseState !== c ? this._cbs.onattribdata(e) : this._cbs.ontext(e)
				}
			},
			7214: (e, t, n) => {
				e.exports = s;
				var r = n(8134),
					o = n(9557).Writable,
					i = n(2553).s,
					a = n(8764).Buffer;

				function s(e, t) {
					var n = this._parser = new r(e, t),
						a = this._decoder = new i;
					o.call(this, {
						decodeStrings: !1
					}), this.once("finish", (function() {
						n.end(a.end())
					}))
				}
				n(5717)(s, o), s.prototype._write = function(e, t, n) {
					e instanceof a && (e = this._decoder.write(e)), this._parser.write(e), n()
				}
			},
			6842: (e, t, n) => {
				var r = n(8134),
					o = n(6034);

				function i(t, n) {
					return delete e.exports[t], e.exports[t] = n, n
				}
				e.exports = {
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
					parseDOM: function(e, t) {
						var n = new o(t);
						return new r(n, t).end(e), n.dom
					},
					parseFeed: function(t, n) {
						var o = new e.exports.FeedHandler(n);
						return new r(o, n).end(t), o.dom
					},
					createDomStream: function(e, t, n) {
						var i = new o(e, t, n);
						return new r(i, t)
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
			9921: (e, t) => {
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
					g = n ? Symbol.for("react.lazy") : 60116,
					_ = n ? Symbol.for("react.block") : 60121,
					v = n ? Symbol.for("react.fundamental") : 60117,
					y = n ? Symbol.for("react.responder") : 60118,
					w = n ? Symbol.for("react.scope") : 60119;

				function b(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case r:
								switch (e = e.type) {
									case u:
									case d:
									case i:
									case s:
									case a:
									case f:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case l:
											case p:
											case g:
											case m:
											case c:
												return e;
											default:
												return t
										}
								}
							case o:
								return t
						}
					}
				}

				function E(e) {
					return b(e) === d
				}
				t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = l, t.ContextProvider = c, t.Element = r, t.ForwardRef = p, t.Fragment = i, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = f, t.isAsyncMode = function(e) {
					return E(e) || b(e) === u
				}, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
					return b(e) === l
				}, t.isContextProvider = function(e) {
					return b(e) === c
				}, t.isElement = function(e) {
					return "object" == typeof e && null !== e && e.$$typeof === r
				}, t.isForwardRef = function(e) {
					return b(e) === p
				}, t.isFragment = function(e) {
					return b(e) === i
				}, t.isLazy = function(e) {
					return b(e) === g
				}, t.isMemo = function(e) {
					return b(e) === m
				}, t.isPortal = function(e) {
					return b(e) === o
				}, t.isProfiler = function(e) {
					return b(e) === s
				}, t.isStrictMode = function(e) {
					return b(e) === a
				}, t.isSuspense = function(e) {
					return b(e) === f
				}, t.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === l || e.$$typeof === p || e.$$typeof === v || e.$$typeof === y || e.$$typeof === w || e.$$typeof === _)
				}, t.typeOf = b
			},
			9864: (e, t, n) => {
				"use strict";
				e.exports = n(9921)
			},
			1216: (e, t, n) => {
				"use strict";
				var r = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t
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

				function p(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function f(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function h(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}

				function m(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				var g = 0,
					_ = 0,
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
				} catch (e) {}
				var C = !!O && {
						capture: !1,
						passive: !0
					},
					x = function(e) {
						var t = a.default.findDOMNode(e);
						if (t instanceof HTMLElement) {
							var n = (0, l.default)(t);
							(e.props.overflow && n !== t.ownerDocument && n !== document && n !== document.documentElement ? function(e, t) {
								var n = a.default.findDOMNode(e),
									r = void 0,
									o = void 0,
									i = void 0,
									s = void 0;
								try {
									var c = t.getBoundingClientRect();
									r = c.top, o = c.left, i = c.height, s = c.width
								} catch (e) {
									r = g, o = _, i = y, s = v
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
								} catch (e) {
									m = g, w = _, b = y, E = v
								}
								var S = m - d,
									C = w - p,
									x = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
								return S - x[0] <= f && S + b + x[1] >= 0 && C - x[0] <= h && C + E + x[1] >= 0
							}(e, n) : function(e) {
								var t = a.default.findDOMNode(e);
								if (!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) return !1;
								var n = void 0,
									r = void 0;
								try {
									var o = t.getBoundingClientRect();
									n = o.top, r = o.height
								} catch (e) {
									n = g, r = y
								}
								var i = window.innerHeight || document.documentElement.clientHeight,
									s = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
								return n - s[0] <= i && n + r + s[1] >= 0
							}(e)) ? e.visible || (e.props.once && E.push(e), e.visible = !0, e.forceUpdate()): e.props.once && e.visible || (e.visible = !1, e.props.unmountIfInvisible && e.forceUpdate())
						}
					},
					P = function() {
						E.forEach((function(e) {
							var t = b.indexOf(e); - 1 !== t && b.splice(t, 1)
						})), E = []
					},
					T = function() {
						for (var e = 0; e < b.length; ++e) {
							var t = b[e];
							x(t)
						}
						P()
					},
					k = void 0,
					N = null,
					A = function(e) {
						function t(e) {
							f(this, t);
							var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
							return n.visible = !1, n
						}
						return m(t, e), r(t, [{
							key: "componentDidMount",
							value: function() {
								var e = window,
									t = this.props.scrollContainer;
								t && "string" == typeof t && (e = e.document.querySelector(t));
								var n = void 0 !== this.props.debounce && "throttle" === k || "debounce" === k && void 0 === this.props.debounce;
								if (n && ((0, c.off)(e, "scroll", N, C), (0, c.off)(window, "resize", N, C), N = null), N || (void 0 !== this.props.debounce ? (N = (0, u.default)(T, "number" == typeof this.props.debounce ? this.props.debounce : 300), k = "debounce") : void 0 !== this.props.throttle ? (N = (0, d.default)(T, "number" == typeof this.props.throttle ? this.props.throttle : 300), k = "throttle") : N = T), this.props.overflow) {
									var r = (0, l.default)(a.default.findDOMNode(this));
									if (r && "function" == typeof r.getAttribute) {
										var o = +r.getAttribute(w) + 1;
										1 === o && r.addEventListener("scroll", N, C), r.setAttribute(w, o)
									}
								} else if (0 === b.length || n) {
									var i = this.props,
										s = i.scroll,
										p = i.resize;
									s && (0, c.on)(e, "scroll", N, C), p && (0, c.on)(window, "resize", N, C)
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
									var e = (0, l.default)(a.default.findDOMNode(this));
									if (e && "function" == typeof e.getAttribute) {
										var t = +e.getAttribute(w) - 1;
										0 === t ? (e.removeEventListener("scroll", N, C), e.removeAttribute(w)) : e.setAttribute(w, t)
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
						}]), t
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
				var R = function(e) {
					return e.displayName || e.name || "Component"
				};
				t.ZP = A
			},
			8282: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, n) {
					var r = void 0,
						o = void 0,
						i = void 0,
						a = void 0,
						s = void 0,
						c = function c() {
							var l = +new Date - a;
							l < t && l >= 0 ? r = setTimeout(c, t - l) : (r = null, n || (s = e.apply(i, o), r || (i = null, o = null)))
						};
					return function() {
						i = this, o = arguments, a = +new Date;
						var l = n && !r;
						return r || (r = setTimeout(c, t)), l && (s = e.apply(i, o), i = null, o = null), s
					}
				}
			},
			4081: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.on = function(e, t, n, r) {
					r = r || !1, e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, (function(t) {
						n.call(e, t || window.event)
					}))
				}, t.off = function(e, t, n, r) {
					r = r || !1, e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n)
				}
			},
			8315: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					if (!(e instanceof HTMLElement)) return document.documentElement;
					for (var t = "absolute" === e.style.position, n = /(scroll|auto)/, r = e; r;) {
						if (!r.parentNode) return e.ownerDocument || document.documentElement;
						var o = window.getComputedStyle(r),
							i = o.position,
							a = o.overflow,
							s = o["overflow-x"],
							c = o["overflow-y"];
						if ("static" === i && t) r = r.parentNode;
						else {
							if (n.test(a) && n.test(s) && n.test(c)) return r;
							r = r.parentNode
						}
					}
					return e.ownerDocument || e.documentElement || document.documentElement
				}
			},
			821: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, n) {
					var r, o;
					return t || (t = 250),
						function() {
							var i = n || this,
								a = +new Date,
								s = arguments;
							r && a < r + t ? (clearTimeout(o), o = setTimeout((function() {
								r = a, e.apply(i, s)
							}), t)) : (r = a, e.apply(i, s))
						}
				}
			},
			1818: (e, t, n) => {
				"use strict";
				e.exports = n(4359)
			},
			4359: (e, t, n) => {
				e.exports = function(e) {
					var t = {};

					function n(r) {
						if (t[r]) return t[r].exports;
						var o = t[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
					}
					return n.m = e, n.c = t, n.d = function(e, t, r) {
						n.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: r
						})
					}, n.r = function(e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, n.t = function(e, t) {
						if (1 & t && (e = n(e)), 8 & t) return e;
						if (4 & t && "object" == typeof e && e && e.__esModule) return e;
						var r = Object.create(null);
						if (n.r(r), Object.defineProperty(r, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
							for (var o in e) n.d(r, o, function(t) {
								return e[t]
							}.bind(null, o));
						return r
					}, n.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return n.d(t, "a", t), t
					}, n.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, n.p = "", n(n.s = 2)
				}([function(e, t) {
					e.exports = n(3804)
				}, function(e, t, n) {}, function(e, t, n) {
					"use strict";
					n.r(t), n.d(t, "store", (function() {
						return u
					}));
					var r = n(0),
						o = n.n(r);
					const i = "notification__item";
					var a, s, c, l;
					! function(e) {
						e.BOTTOM_LEFT = "bottom-left", e.BOTTOM_RIGHT = "bottom-right", e.BOTTOM_CENTER = "bottom-center", e.TOP_LEFT = "top-left", e.TOP_RIGHT = "top-right", e.TOP_CENTER = "top-center", e.CENTER = "center", e.TOP_FULL = "top-full", e.BOTTOM_FULL = "bottom-full"
					}(a || (a = {})),
					function(e) {
						e.TOP = "top", e.BOTTOM = "bottom"
					}(s || (s = {})),
					function(e) {
						e.SUCCESS = "success", e.DANGER = "danger", e.INFO = "info", e.DEFAULT = "default", e.WARNING = "warning"
					}(c || (c = {})),
					function(e) {
						e.TIMEOUT = "timeout", e.CLICK = "click", e.TOUCH = "touch", e.MANUAL = "manual"
					}(l || (l = {}));
					var u = new class {
						constructor() {
							this.incrementCounter = () => this.counter += 1, this.getCounter = () => this.counter, this.counter = 0, this.add = null
						}
						addNotification(e) {
							this.incrementCounter();
							const t = function(e, t, n) {
								const r = e,
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
										touchRevert: _,
										touchSlidingExit: v,
										dismiss: y,
										width: w,
										onRemoval: b
									} = r;
								r.id = o || u.getCounter().toString(), r.type = s ? null : i.toLowerCase(), t && !s && (r.userDefinedTypes = function(e, t) {
									const {
										content: n,
										type: r
									} = e;
									if (!n && r !== c.SUCCESS && r !== c.DANGER && r !== c.INFO && r !== c.DEFAULT && r !== c.WARNING && t) return t
								}(r, t)), r.width = d(w) ? n : w, r.container = l.toLowerCase(), r.insert = (a || "top").toLowerCase(), r.dismiss = function(e) {
									const t = e,
										n = {
											duration: 0,
											click: !0,
											touch: !0,
											onScreen: !1,
											pauseOnHover: !1,
											waitForAnimation: !1,
											showIcon: !1
										};
									return t ? (Object.keys(n).forEach(e => {
										d(t[e]) && (t[e] = n[e])
									}), t) : n
								}(y), r.animationIn = p || [], r.animationOut = f || [], r.onRemoval = b || (() => {});
								const E = (e, t, n) => ({
									duration: e,
									timingFunction: t,
									delay: n
								});
								r.slidingEnter = g(h, E(600, "linear", 0)), r.slidingExit = g(m, E(600, "linear", 0)), r.touchRevert = g(_, E(600, "linear", 0));
								const O = v || {},
									S = O.swipe || {},
									C = O.fade || {};
								return r.touchSlidingExit = O, r.touchSlidingExit.swipe = g(S, E(600, "linear", 0)), r.touchSlidingExit.fade = g(C, E(300, "linear", 0)), r
							}(e, this.types, this.defaultNotificationWidth);
							return this.add(t)
						}
						register(e) {
							const {
								addNotification: t,
								removeNotification: n,
								removeAllNotifications: r,
								types: o,
								defaultNotificationWidth: i
							} = e;
							this.add = t, this.removeNotification = n, this.removeAllNotifications = r, this.defaultNotificationWidth = i, this.types = o
						}
					};
					const d = e => null == e;

					function p(e) {
						return e === a.BOTTOM_FULL || e === a.BOTTOM_LEFT || e === a.BOTTOM_RIGHT || e === a.BOTTOM_CENTER
					}

					function f(e) {
						return e === a.TOP_FULL || e === a.TOP_LEFT || e === a.TOP_RIGHT || e === a.TOP_CENTER
					}

					function h(e) {
						const {
							type: t,
							content: n,
							userDefinedTypes: r
						} = e, o = [i];
						if (n) return o;
						if (d(r)) return function(e) {
							switch (e) {
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
						}(t);
						const a = r.find(e => e.name === t);
						return o.concat(a.htmlClasses)
					}

					function m({
						duration: e,
						timingFunction: t,
						delay: n
					}, r) {
						return `${e}ms ${r} ${t} ${n}ms`
					}

					function g(e, {
						duration: t,
						timingFunction: n,
						delay: r
					}) {
						const o = e || {};
						return d(o.duration) && (o.duration = t), d(o.timingFunction) && (o.timingFunction = n), d(o.delay) && (o.delay = r), o
					}
					class _ {
						constructor(e, t) {
							this.callback = e, this.remaining = t, this.resume()
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
						constructor(e) {
							super(e), this.onClick = () => {
								const {
									notification: {
										dismiss: e
									}
								} = this.props;
								(e.click || e.showIcon) && this.removeNotification(l.CLICK)
							}, this.onTouchStart = e => {
								const {
									pageX: t
								} = e.touches[0];
								this.setState(({
									parentStyle: e
								}) => ({
									startX: t,
									currentX: t,
									parentStyle: Object.assign(Object.assign({}, e), {
										position: "relative"
									})
								}))
							}, this.onTouchMove = e => {
								const {
									pageX: t
								} = e.touches[0], {
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
								} = this.props, u = t - n, {
									offsetWidth: d
								} = this.rootElementRef.current, p = window.innerWidth + d, f = (t - n >= 0 ? p : -p) + "px";
								if (function(e, t) {
										return Math.abs(e) >= .4 * t
									}(u, d)) {
									const e = m(s, "left"),
										t = m(c, "opacity"),
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
											transition: `${e}, ${t}`
										}),
										onTransitionEnd: () => {
											this.setState(({
												parentStyle: e
											}) => ({
												parentStyle: Object.assign(Object.assign({}, e), {
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
									parentStyle: e
								}) => ({
									currentX: t,
									parentStyle: Object.assign(Object.assign({}, e), {
										left: 0 + u + "px"
									})
								}))
							}, this.onTouchEnd = () => {
								const {
									notification: {
										touchRevert: e
									}
								} = this.props;
								this.setState(({
									parentStyle: t
								}) => ({
									parentStyle: Object.assign(Object.assign({}, t), {
										left: 0,
										transition: m(e, "left")
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
								defaultNotificationWidth: t,
								notification: n,
								isMobile: r
							} = e, {
								width: i,
								container: s
							} = n;
							this.state = {
								parentStyle: {
									height: "0px",
									overflow: "hidden",
									width: (i || t) + "px"
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
								notification: e,
								notificationsCount: t
							} = this.props, {
								dismiss: {
									duration: n,
									onScreen: r
								}
							} = e, o = function(e, t) {
								return !(t <= 1) && t > 1 && (e.insert === s.TOP && f(e.container) || e.insert === s.BOTTOM && p(e.container) || e.container === a.CENTER)
							}(e, t), {
								scrollHeight: i
							} = this.rootElementRef.current, c = () => {
								n && !r && (this.timer = new _(() => this.removeNotification(l.TIMEOUT), n))
							};
							this.setState(({
								parentStyle: {
									width: t
								}
							}) => ({
								parentStyle: {
									width: t,
									height: i + "px",
									transition: o ? m(e.slidingEnter, "height") : "10ms height"
								},
								onTransitionEnd: c
							}), () => {
								requestAnimationFrame(() => {
									this.setState(t => ({
										htmlClassList: [...e.animationIn, ...t.htmlClassList]
									}))
								})
							})
						}
						componentDidUpdate({
							hasBeenRemoved: e
						}) {
							this.props.hasBeenRemoved && !e && this.removeNotification(l.MANUAL)
						}
						removeNotification(e) {
							const {
								notification: t,
								toggleRemoval: n
							} = this.props, {
								id: r,
								onRemoval: o,
								dismiss: {
									waitForAnimation: i
								}
							} = t, a = [...t.animationOut, ...h(t)], s = () => n(r, () => o(r, e)), c = {
								height: "0px",
								overflow: "hidden",
								transition: m(t.slidingExit, "height")
							};
							return i ? this.setState(({
								parentStyle: {
									width: e
								}
							}) => ({
								htmlClassList: a,
								onAnimationEnd: () => {
									this.setState({
										parentStyle: Object.assign({
											width: e
										}, c),
										onTransitionEnd: s
									})
								}
							})) : this.setState(({
								parentStyle: {
									width: e
								}
							}) => ({
								parentStyle: Object.assign({
									width: e
								}, c),
								onTransitionEnd: s,
								htmlClassList: a
							}))
						}
						renderTimer() {
							const {
								notification: {
									dismiss: e
								}
							} = this.props, {
								duration: t,
								onScreen: n
							} = e, {
								animationPlayState: r
							} = this.state;
							if (!t || !n) return;
							const i = {
								animationName: "timer",
								animationDuration: t + "ms",
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
								htmlClassList: e
							} = this.state, {
								notification: {
									id: t,
									content: n,
									dismiss: {
										duration: r,
										pauseOnHover: i
									}
								}
							} = this.props, a = r > 0 && i;
							return o.a.createElement("div", {
								className: "" + [...e].join(" "),
								onMouseEnter: a ? this.onMouseEnter : null,
								onMouseLeave: a ? this.onMouseLeave : null
							}, o.a.isValidElement(n) ? n : o.a.createElement(n, Object.assign({}, {
								id: t
							})))
						}
						renderNotification() {
							const {
								notification: {
									title: e,
									message: t,
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
							}), e && o.a.createElement("div", {
								className: "notification__title"
							}, e), o.a.createElement("div", {
								className: "notification__message"
							}, t), this.renderTimer()))
						}
						render() {
							const {
								notification: {
									content: e,
									dismiss: {
										click: t
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
								onClick: t ? this.onClick : null,
								className: "notification",
								style: n,
								onAnimationEnd: r,
								onTransitionEnd: i,
								onTouchStart: a ? this.onTouchStart : null,
								onTouchMove: a ? this.onTouchMove : null,
								onTouchEnd: a ? this.onTouchEnd : null
							}, e ? this.renderCustomContent() : this.renderNotification())
						}
					}
					var y = v;
					n(1);
					class w extends o.a.Component {
						constructor(e) {
							super(e), this.handleResize = () => {
								this.setState({
									windowWidth: window.innerWidth
								})
							}, this.add = e => (this.setState(({
								notifications: t
							}) => ({
								notifications: "top" === e.insert ? [e, ...t] : [...t, e]
							})), e.id), this.remove = e => {
								this.setState(({
									notifications: t
								}) => ({
									notifications: t.map(t => (t.id === e && (t.hasBeenRemoved = !0), t))
								}))
							}, this.removeAllNotifications = () => {
								this.setState({
									notifications: this.state.notifications.map(e => Object.assign(Object.assign({}, e), {
										hasBeenRemoved: !0
									}))
								})
							}, this.toggleRemoval = (e, t) => {
								this.setState(({
									notifications: t
								}) => ({
									notifications: t.filter(({
										id: t
									}) => t !== e)
								}), t)
							}, this.state = {
								isMobile: !!d(e.isMobile) || e.isMobile,
								breakpoint: d(e.breakpoint) ? 768 : e.breakpoint,
								notifications: [],
								windowWidth: void 0
							}
						}
						componentDidMount() {
							const {
								types: e,
								defaultNotificationWidth: t
							} = this.props;
							u.register({
								addNotification: this.add,
								removeNotification: this.remove,
								removeAllNotifications: this.removeAllNotifications,
								defaultNotificationWidth: t || 325,
								types: e
							}), this.setState({
								windowWidth: window.innerWidth
							}), window.addEventListener("resize", this.handleResize)
						}
						componentWillUnmount() {
							window.removeEventListener("resize", this.handleResize)
						}
						renderNotifications(e, t) {
							return e.map(n => o.a.createElement(y, {
								id: n.id,
								key: n.id,
								isMobile: t,
								defaultNotificationWidth: this.props.defaultNotificationWidth,
								notification: n,
								toggleRemoval: this.toggleRemoval,
								notificationsCount: e.length,
								hasBeenRemoved: n.hasBeenRemoved
							}))
						}
						renderMobileNotifications(e) {
							const {
								className: t,
								id: n
							} = e, {
								notifications: r
							} = this.state, i = function(e) {
								const t = [],
									n = [];
								return e.forEach(e => {
									const {
										container: r
									} = e, {
										CENTER: o
									} = a;
									f(r) || r === o ? t.push(e) : p(r) && n.push(e)
								}), {
									top: t,
									bottom: n
								}
							}(r), s = this.renderNotifications(i.top, !0), c = this.renderNotifications(i.bottom, !0);
							return o.a.createElement("div", {
								id: n,
								key: "mobile",
								className: "notifications-component " + (t || "")
							}, o.a.createElement("div", {
								className: "notification-container--mobile-top"
							}, s), o.a.createElement("div", {
								className: "notification-container--mobile-bottom"
							}, c))
						}
						renderScreenNotifications(e) {
							const {
								className: t,
								id: n
							} = e, {
								notifications: r
							} = this.state, i = function(e) {
								const t = [],
									n = [],
									r = [],
									o = [],
									i = [],
									s = [],
									c = [],
									l = [],
									u = [];
								return e.forEach(e => {
									const {
										container: d
									} = e;
									d === a.TOP_FULL ? l.push(e) : d === a.BOTTOM_FULL ? u.push(e) : d === a.TOP_LEFT ? t.push(e) : d === a.TOP_RIGHT ? n.push(e) : d === a.TOP_CENTER ? r.push(e) : d === a.BOTTOM_LEFT ? o.push(e) : d === a.BOTTOM_RIGHT ? i.push(e) : d === a.BOTTOM_CENTER ? s.push(e) : d === a.CENTER && c.push(e)
								}), {
									topFull: l,
									bottomFull: u,
									topLeft: t,
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
								className: "notifications-component " + (t || "")
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
								isMobile: e
							} = this.props, {
								windowWidth: t,
								breakpoint: n
							} = this.state;
							return e && t <= n ? this.renderMobileNotifications(this.props) : this.renderScreenNotifications(this.props)
						}
					}
					var b = w;
					t.default = b
				}])
			},
			6585: e => {
				e.exports = Array.isArray || function(e) {
					return "[object Array]" == Object.prototype.toString.call(e)
				}
			},
			9658: (e, t, n) => {
				var r = n(6585);
				e.exports = f, e.exports.parse = i, e.exports.compile = function(e, t) {
					return s(i(e, t), t)
				}, e.exports.tokensToFunction = s, e.exports.tokensToRegExp = p;
				var o = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

				function i(e, t) {
					for (var n, r = [], i = 0, a = 0, s = "", u = t && t.delimiter || "/"; null != (n = o.exec(e));) {
						var d = n[0],
							p = n[1],
							f = n.index;
						if (s += e.slice(a, f), a = f + d.length, p) s += p[1];
						else {
							var h = e[a],
								m = n[2],
								g = n[3],
								_ = n[4],
								v = n[5],
								y = n[6],
								w = n[7];
							s && (r.push(s), s = "");
							var b = null != m && null != h && h !== m,
								E = "+" === y || "*" === y,
								O = "?" === y || "*" === y,
								S = n[2] || u,
								C = _ || v;
							r.push({
								name: g || i++,
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
					return a < e.length && (s += e.substr(a)), s && r.push(s), r
				}

				function a(e) {
					return encodeURI(e).replace(/[\/?#]/g, (function(e) {
						return "%" + e.charCodeAt(0).toString(16).toUpperCase()
					}))
				}

				function s(e, t) {
					for (var n = new Array(e.length), o = 0; o < e.length; o++) "object" == typeof e[o] && (n[o] = new RegExp("^(?:" + e[o].pattern + ")$", d(t)));
					return function(t, o) {
						for (var i = "", s = t || {}, c = (o || {}).pretty ? a : encodeURIComponent, l = 0; l < e.length; l++) {
							var u = e[l];
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
									if (d = u.asterisk ? encodeURI(p).replace(/[?#]/g, (function(e) {
											return "%" + e.charCodeAt(0).toString(16).toUpperCase()
										})) : c(p), !n[l].test(d)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + d + '"');
									i += u.prefix + d
								}
							} else i += u
						}
						return i
					}
				}

				function c(e) {
					return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
				}

				function l(e) {
					return e.replace(/([=!:$\/()])/g, "\\$1")
				}

				function u(e, t) {
					return e.keys = t, e
				}

				function d(e) {
					return e && e.sensitive ? "" : "i"
				}

				function p(e, t, n) {
					r(t) || (n = t || n, t = []);
					for (var o = (n = n || {}).strict, i = !1 !== n.end, a = "", s = 0; s < e.length; s++) {
						var l = e[s];
						if ("string" == typeof l) a += c(l);
						else {
							var p = c(l.prefix),
								f = "(?:" + l.pattern + ")";
							t.push(l), l.repeat && (f += "(?:" + p + f + ")*"), a += f = l.optional ? l.partial ? p + "(" + f + ")?" : "(?:" + p + "(" + f + "))?" : p + "(" + f + ")"
						}
					}
					var h = c(n.delimiter || "/"),
						m = a.slice(-h.length) === h;
					return o || (a = (m ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"), a += i ? "$" : o && m ? "" : "(?=" + h + "|$)", u(new RegExp("^" + a, d(n)), t)
				}

				function f(e, t, n) {
					return r(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function(e, t) {
						var n = e.source.match(/\((?!\?)/g);
						if (n)
							for (var r = 0; r < n.length; r++) t.push({
								name: r,
								prefix: null,
								delimiter: null,
								optional: !1,
								repeat: !1,
								partial: !1,
								asterisk: !1,
								pattern: null
							});
						return u(e, t)
					}(e, t) : r(e) ? function(e, t, n) {
						for (var r = [], o = 0; o < e.length; o++) r.push(f(e[o], t, n).source);
						return u(new RegExp("(?:" + r.join("|") + ")", d(n)), t)
					}(e, t, n) : function(e, t, n) {
						return p(i(e, n), t, n)
					}(e, t, n)
				}
			},
			8500: (e, t, n) => {
				"use strict";
				var r = n(4890).qC;
				t.Uo = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
					if (0 !== arguments.length) return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
				}, "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
			},
			4385: (e, t, n) => {
				"use strict";
				t.K3 = void 0;
				var r = n(4926),
					o = 0,
					i = {
						channel: "redux_state_sync",
						predicate: null,
						blacklist: [],
						whitelist: [],
						broadcastChannelOption: void 0,
						prepareState: function(e) {
							return e
						}
					};

				function a() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}

				function s() {
					return "" + a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
				}
				var c = s();

				function l(e) {
					var t = e;
					return t.$uuid = s(), t.$wuid = c, t
				}

				function u(e) {
					var t = e.predicate,
						n = e.blacklist,
						r = e.whitelist,
						o = function() {
							return !0
						};
					return t && "function" == typeof t ? o = t : Array.isArray(n) ? o = function(e) {
						return n.indexOf(e.type) < 0
					} : Array.isArray(r) && (o = function(e) {
						return r.indexOf(e.type) >= 0
					}), o
				}

				function d(e) {
					var t = e.channel,
						n = e.dispatch,
						r = e.allowed,
						i = !1,
						a = {};
					this.handleOnMessage = function(e) {
						e.$wuid !== c && ("&_RECEIVE_INIT_STATE" !== e.type && e.$uuid && e.$uuid !== o && ("&_GET_INIT_STATE" !== e.type || a[e.$wuid] ? "&_SEND_INIT_STATE" !== e.type || a[e.$wuid] ? r(e) && (o = e.$uuid, n(Object.assign(e, {
							$isSync: !0
						}))) : i || (i = !0, n({
							type: "&_RECEIVE_INIT_STATE",
							payload: e.payload
						})) : (a[e.$wuid] = !0, n({
							type: "&_SEND_INIT_STATE"
						}))))
					}, this.messageChannel = t, this.messageChannel.onmessage = this.handleOnMessage
				}
				t.K3 = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = u(e),
						n = new r.BroadcastChannel(e.channel, e.broadcastChannelOption),
						a = e.prepareState || i.prepareState,
						s = null;
					return function(e) {
						var r = e.getState,
							i = e.dispatch;
						return function(e) {
							return function(c) {
								if (s || (s = new d({
										channel: n,
										dispatch: i,
										allowed: t
									})), c && !c.$uuid) {
									var u = l(c);
									o = u.$uuid;
									try {
										if ("&_SEND_INIT_STATE" === c.type) return r() && (u.payload = a(r()), n.postMessage(u)), e(c);
										(t(u) || "&_GET_INIT_STATE" === c.type) && n.postMessage(u)
									} catch (e) {
										console.error("Your browser doesn't support cross tab communication")
									}
								}
								return e(Object.assign(c, {
									$isSync: void 0 !== c.$isSync && c.$isSync
								}))
							}
						}
					}
				};
				var p = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.prepareState;
					return function(n, r) {
						var o = n;
						return "&_RECEIVE_INIT_STATE" === r.type && (o = t(r.payload)), e(o, r)
					}
				}
			},
			4890: (e, t, n) => {
				"use strict";
				n.d(t, {
					md: () => g,
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

				function a(e) {
					if ("object" != typeof e || null === e) return !1;
					for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
					return Object.getPrototypeOf(e) === t
				}

				function s(e, t, n) {
					var o;
					if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
					if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
						if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
						return n(s)(e, t)
					}
					if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
					var c = e,
						l = t,
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

					function m(e) {
						if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
						if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
						var t = !0;
						return f(), d.push(e),
							function() {
								if (t) {
									if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
									t = !1, f();
									var n = d.indexOf(e);
									d.splice(n, 1), u = null
								}
							}
					}

					function g(e) {
						if (!a(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
						if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
						if (p) throw new Error("Reducers may not dispatch actions.");
						try {
							p = !0, l = c(l, e)
						} finally {
							p = !1
						}
						for (var t = u = d, n = 0; n < t.length; n++) {
							(0, t[n])()
						}
						return e
					}

					function _(e) {
						if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
						c = e, g({
							type: i.REPLACE
						})
					}

					function v() {
						var e, t = m;
						return (e = {
							subscribe: function(e) {
								if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

								function n() {
									e.next && e.next(h())
								}
								return n(), {
									unsubscribe: t(n)
								}
							}
						})[r.Z] = function() {
							return this
						}, e
					}
					return g({
						type: i.INIT
					}), (o = {
						dispatch: g,
						subscribe: m,
						getState: h,
						replaceReducer: _
					})[r.Z] = v, o
				}

				function c(e, t) {
					var n = t && t.type;
					return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
				}

				function l(e) {
					for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
						var o = t[r];
						0, "function" == typeof e[o] && (n[o] = e[o])
					}
					var a, s = Object.keys(n);
					try {
						! function(e) {
							Object.keys(e).forEach((function(t) {
								var n = e[t];
								if (void 0 === n(void 0, {
										type: i.INIT
									})) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
								if (void 0 === n(void 0, {
										type: i.PROBE_UNKNOWN_ACTION()
									})) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
							}))
						}(n)
					} catch (e) {
						a = e
					}
					return function(e, t) {
						if (void 0 === e && (e = {}), a) throw a;
						for (var r = !1, o = {}, i = 0; i < s.length; i++) {
							var l = s[i],
								u = n[l],
								d = e[l],
								p = u(d, t);
							if (void 0 === p) {
								var f = c(l, t);
								throw new Error(f)
							}
							o[l] = p, r = r || p !== d
						}
						return (r = r || s.length !== Object.keys(e).length) ? o : e
					}
				}

				function u(e, t) {
					return function() {
						return t(e.apply(this, arguments))
					}
				}

				function d(e, t) {
					if ("function" == typeof e) return u(e, t);
					if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
					var n = {};
					for (var r in e) {
						var o = e[r];
						"function" == typeof o && (n[r] = u(o, t))
					}
					return n
				}

				function p(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function f(e, t) {
					var n = Object.keys(e);
					return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n
				}

				function h(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? f(n, !0).forEach((function(t) {
							p(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function m() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return 0 === t.length ? function(e) {
						return e
					} : 1 === t.length ? t[0] : t.reduce((function(e, t) {
						return function() {
							return e(t.apply(void 0, arguments))
						}
					}))
				}

				function g() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return function(e) {
						return function() {
							var n = e.apply(void 0, arguments),
								r = function() {
									throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
								},
								o = {
									getState: n.getState,
									dispatch: function() {
										return r.apply(void 0, arguments)
									}
								},
								i = t.map((function(e) {
									return e(o)
								}));
							return h({}, n, {
								dispatch: r = m.apply(void 0, i)(n.dispatch)
							})
						}
					}
				}
			},
			5666: e => {
				var t = function(e) {
					"use strict";
					var t = Object.prototype,
						n = t.hasOwnProperty,
						r = "function" == typeof Symbol ? Symbol : {},
						o = r.iterator || "@@iterator",
						i = r.asyncIterator || "@@asyncIterator",
						a = r.toStringTag || "@@toStringTag";

					function s(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, n) {
							return e[t] = n
						}
					}

					function c(e, t, n, r) {
						var o = t && t.prototype instanceof d ? t : d,
							i = Object.create(o.prototype),
							a = new O(r || []);
						return i._invoke = function(e, t, n) {
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
									var c = l(e, t, n);
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
						}(e, n, a), i
					}

					function l(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = c;
					var u = {};

					function d() {}

					function p() {}

					function f() {}
					var h = {};
					h[o] = function() {
						return this
					};
					var m = Object.getPrototypeOf,
						g = m && m(m(S([])));
					g && g !== t && n.call(g, o) && (h = g);
					var _ = f.prototype = d.prototype = Object.create(h);

					function v(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function y(e, t) {
						var r;
						this._invoke = function(o, i) {
							function a() {
								return new t((function(r, a) {
									! function r(o, i, a, s) {
										var c = l(e[o], e, i);
										if ("throw" !== c.type) {
											var u = c.arg,
												d = u.value;
											return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
												r("next", e, a, s)
											}), (function(e) {
												r("throw", e, a, s)
											})) : t.resolve(d).then((function(e) {
												u.value = e, a(u)
											}), (function(e) {
												return r("throw", e, a, s)
											}))
										}
										s(c.arg)
									}(o, i, r, a)
								}))
							}
							return r = r ? r.then(a, a) : a()
						}
					}

					function w(e, t) {
						var n = e.iterator[t.method];
						if (void 0 === n) {
							if (t.delegate = null, "throw" === t.method) {
								if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
								t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return u
						}
						var r = l(n, e.iterator, t.arg);
						if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
						var o = r.arg;
						return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
					}

					function b(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function E(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function O(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(b, this), this.reset(!0)
					}

					function S(e) {
						if (e) {
							var t = e[o];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
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
					return p.prototype = _.constructor = f, f.constructor = p, p.displayName = s(f, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, s(e, a, "GeneratorFunction")), e.prototype = Object.create(_), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, v(y.prototype), y.prototype[i] = function() {
						return this
					}, e.AsyncIterator = y, e.async = function(t, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new y(c(t, n, r, o), i);
						return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
							return e.done ? e.value : a.next()
						}))
					}, v(_), s(_, a, "Generator"), _[o] = function() {
						return this
					}, _.toString = function() {
						return "[object Generator]"
					}, e.keys = function(e) {
						var t = [];
						for (var n in e) t.push(n);
						return t.reverse(),
							function n() {
								for (; t.length;) {
									var r = t.pop();
									if (r in e) return n.value = r, n.done = !1, n
								}
								return n.done = !0, n
							}
					}, e.values = S, O.prototype = {
						constructor: O,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function r(n, r) {
								return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
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
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), u
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
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
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: S(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), u
						}
					}, e
				}(e.exports);
				try {
					regeneratorRuntime = t
				} catch (e) {
					Function("r", "regeneratorRuntime = r")(t)
				}
			},
			2553: (e, t, n) => {
				"use strict";
				var r = n(396).Buffer,
					o = r.isEncoding || function(e) {
						switch ((e = "" + e) && e.toLowerCase()) {
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

				function i(e) {
					var t;
					switch (this.encoding = function(e) {
							var t = function(e) {
								if (!e) return "utf8";
								for (var t;;) switch (e) {
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
										return e;
									default:
										if (t) return;
										e = ("" + e).toLowerCase(), t = !0
								}
							}(e);
							if ("string" != typeof t && (r.isEncoding === o || !o(e))) throw new Error("Unknown encoding: " + e);
							return t || e
						}(e), this.encoding) {
						case "utf16le":
							this.text = c, this.end = l, t = 4;
							break;
						case "utf8":
							this.fillLast = s, t = 4;
							break;
						case "base64":
							this.text = u, this.end = d, t = 3;
							break;
						default:
							return this.write = p, void(this.end = f)
					}
					this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
				}

				function a(e) {
					return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
				}

				function s(e) {
					var t = this.lastTotal - this.lastNeed,
						n = function(e, t, n) {
							if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
							if (e.lastNeed > 1 && t.length > 1) {
								if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
								if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
							}
						}(this, e);
					return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
				}

				function c(e, t) {
					if ((e.length - t) % 2 == 0) {
						var n = e.toString("utf16le", t);
						if (n) {
							var r = n.charCodeAt(n.length - 1);
							if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
						}
						return n
					}
					return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
				}

				function l(e) {
					var t = e && e.length ? this.write(e) : "";
					if (this.lastNeed) {
						var n = this.lastTotal - this.lastNeed;
						return t + this.lastChar.toString("utf16le", 0, n)
					}
					return t
				}

				function u(e, t) {
					var n = (e.length - t) % 3;
					return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
				}

				function d(e) {
					var t = e && e.length ? this.write(e) : "";
					return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
				}

				function p(e) {
					return e.toString(this.encoding)
				}

				function f(e) {
					return e && e.length ? this.write(e) : ""
				}
				t.s = i, i.prototype.write = function(e) {
					if (0 === e.length) return "";
					var t, n;
					if (this.lastNeed) {
						if (void 0 === (t = this.fillLast(e))) return "";
						n = this.lastNeed, this.lastNeed = 0
					} else n = 0;
					return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
				}, i.prototype.end = function(e) {
					var t = e && e.length ? this.write(e) : "";
					return this.lastNeed ? t + "�" : t
				}, i.prototype.text = function(e, t) {
					var n = function(e, t, n) {
						var r = t.length - 1;
						if (r < n) return 0;
						var o = a(t[r]);
						if (o >= 0) return o > 0 && (e.lastNeed = o - 1), o;
						if (--r < n || -2 === o) return 0;
						if ((o = a(t[r])) >= 0) return o > 0 && (e.lastNeed = o - 2), o;
						if (--r < n || -2 === o) return 0;
						if ((o = a(t[r])) >= 0) return o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o;
						return 0
					}(this, e, t);
					if (!this.lastNeed) return e.toString("utf8", t);
					this.lastTotal = n;
					var r = e.length - (n - this.lastNeed);
					return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
				}, i.prototype.fillLast = function(e) {
					if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
					e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
				}
			},
			396: (e, t, n) => {
				var r = n(8764),
					o = r.Buffer;

				function i(e, t) {
					for (var n in e) t[n] = e[n]
				}

				function a(e, t, n) {
					return o(e, t, n)
				}
				o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = a), i(o, a), a.from = function(e, t, n) {
					if ("number" == typeof e) throw new TypeError("Argument must not be a number");
					return o(e, t, n)
				}, a.alloc = function(e, t, n) {
					if ("number" != typeof e) throw new TypeError("Argument must be a number");
					var r = o(e);
					return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
				}, a.allocUnsafe = function(e) {
					if ("number" != typeof e) throw new TypeError("Argument must be a number");
					return o(e)
				}, a.allocUnsafeSlow = function(e) {
					if ("number" != typeof e) throw new TypeError("Argument must be a number");
					return r.SlowBuffer(e)
				}
			},
			7121: (e, t, n) => {
				"use strict";
				n.d(t, {
					Z: () => r
				}), e = n.hmd(e);
				const r = function(e) {
					var t, n = e.Symbol;
					return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
				}("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : e)
			},
			3804: e => {
				e.exports = function() {
					return this.React
				}()
			},
			7196: e => {
				e.exports = function() {
					return this.ReactDOM
				}()
			},
			6002: e => {
				e.exports = function() {
					return this.wp.element
				}()
			},
			4501: e => {
				e.exports = function() {
					return this.wp.hooks
				}()
			},
			8057: e => {
				e.exports = function() {
					return this.wp.i18n
				}()
			},
			8211: () => {},
			9557: () => {},
			199: () => {}
		},
		__webpack_module_cache__ = {};

	function __webpack_require__(e) {
		var t = __webpack_module_cache__[e];
		if (void 0 !== t) return t.exports;
		var n = __webpack_module_cache__[e] = {
			id: e,
			loaded: !1,
			exports: {}
		};
		return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.loaded = !0, n.exports
	}
	__webpack_require__.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return __webpack_require__.d(t, {
			a: t
		}), t
	}, __webpack_require__.d = (e, t) => {
		for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, __webpack_require__.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), __webpack_require__.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
		enumerable: !0,
		set: () => {
			throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
		}
	}), e), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	};
	var __webpack_exports__ = {};
	(() => {
		"use strict";

		function e() {
			return (e = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}
		__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
			PAGES_FILTER: () => hu,
			getPages: () => gu
		});
		var t = __webpack_require__(6002),
			n = __webpack_require__(3804),
			r = __webpack_require__.n(n),
			o = __webpack_require__(7196),
			i = __webpack_require__.n(o);

		function a(e, t) {
			return (a = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function s(e, t) {
			e.prototype = Object.create(t.prototype), e.prototype.constructor = e, a(e, t)
		}
		var c = __webpack_require__(5697),
			l = __webpack_require__.n(c),
			u = r().createContext(null);
		var d = function(e) {
			function t(t) {
				var n;
				n = e.call(this, t) || this;
				var r = t.store;
				return n.state = {
					storeState: r.getState(),
					store: r
				}, n
			}
			s(t, e);
			var n = t.prototype;
			return n.componentDidMount = function() {
				this._isMounted = !0, this.subscribe()
			}, n.componentWillUnmount = function() {
				this.unsubscribe && this.unsubscribe(), this._isMounted = !1
			}, n.componentDidUpdate = function(e) {
				this.props.store !== e.store && (this.unsubscribe && this.unsubscribe(), this.subscribe())
			}, n.subscribe = function() {
				var e = this,
					t = this.props.store;
				this.unsubscribe = t.subscribe((function() {
					var n = t.getState();
					e._isMounted && e.setState((function(e) {
						return e.storeState === n ? null : {
							storeState: n
						}
					}))
				}));
				var n = t.getState();
				n !== this.state.storeState && this.setState({
					storeState: n
				})
			}, n.render = function() {
				var e = this.props.context || u;
				return r().createElement(e.Provider, {
					value: this.state
				}, this.props.children)
			}, t
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

		function f(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function h(e, t) {
			if (null == e) return {};
			var n, r, o = {},
				i = Object.keys(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
			return o
		}
		var m = __webpack_require__(8679),
			g = __webpack_require__.n(m),
			_ = __webpack_require__(1143),
			v = __webpack_require__.n(_),
			y = __webpack_require__(9864);

		function w(t, o) {
			void 0 === o && (o = {});
			var i = o,
				a = i.getDisplayName,
				c = void 0 === a ? function(e) {
					return "ConnectAdvanced(" + e + ")"
				} : a,
				l = i.methodName,
				d = void 0 === l ? "connectAdvanced" : l,
				p = i.renderCountProp,
				m = void 0 === p ? void 0 : p,
				_ = i.shouldHandleStateChanges,
				w = void 0 === _ || _,
				b = i.storeKey,
				E = void 0 === b ? "store" : b,
				O = i.withRef,
				S = void 0 !== O && O,
				C = i.forwardRef,
				x = void 0 !== C && C,
				P = i.context,
				T = void 0 === P ? u : P,
				k = h(i, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
			v()(void 0 === m, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"), v()(!S, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
			var N = "To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
			v()("store" === E, "storeKey has been removed and does not do anything. " + N);
			var A = T;
			return function(o) {
				var i = o.displayName || o.name || "Component",
					a = c(i),
					l = e({}, k, {
						getDisplayName: c,
						methodName: d,
						renderCountProp: m,
						shouldHandleStateChanges: w,
						storeKey: E,
						displayName: a,
						wrappedComponentName: i,
						WrappedComponent: o
					}),
					u = k.pure,
					p = n.Component;
				u && (p = n.PureComponent);
				var h = function(n) {
					function i(o) {
						var i, a, s, c, l, d, p, h, m, g, _;
						return i = n.call(this, o) || this, v()(x ? !o.wrapperProps[E] : !o[E], "Passing redux store in props has been removed and does not do anything. " + N), i.selectDerivedProps = function(e, n, r, o) {
							if (u && a === n && s === e) return c;
							r === l && d === o || (l = r, d = o, p = t(r.dispatch, o)), a = n, s = e;
							var i = p(e, n);
							return c = i
						}, i.selectChildElement = function(t, n, o) {
							return n === h && o === m && _ === t || (h = n, m = o, _ = t, g = r().createElement(t, e({}, n, {
								ref: o
							}))), g
						}, i.indirectRenderWrappedComponent = i.indirectRenderWrappedComponent.bind(f(i)), i
					}
					s(i, n);
					var c = i.prototype;
					return c.indirectRenderWrappedComponent = function(e) {
						return this.renderWrappedComponent(e)
					}, c.renderWrappedComponent = function(e) {
						v()(e, 'Could not find "store" in the context of "' + a + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + a + " in connect options.");
						var t, n = e.storeState,
							r = e.store,
							i = this.props;
						x && (i = this.props.wrapperProps, t = this.props.forwardedRef);
						var s = this.selectDerivedProps(n, i, r, l);
						return this.selectChildElement(o, s, t)
					}, c.render = function() {
						var e = this.props.context && this.props.context.Consumer && (0, y.isContextConsumer)(r().createElement(this.props.context.Consumer, null)) ? this.props.context : A;
						return r().createElement(e.Consumer, null, this.indirectRenderWrappedComponent)
					}, i
				}(p);
				if (h.WrappedComponent = o, h.displayName = a, x) {
					var _ = r().forwardRef((function(e, t) {
						return r().createElement(h, {
							wrapperProps: e,
							forwardedRef: t
						})
					}));
					return _.displayName = a, _.WrappedComponent = o, g()(_, o)
				}
				return g()(h, o)
			}
		}
		var b = Object.prototype.hasOwnProperty;

		function E(e, t) {
			return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
		}

		function O(e, t) {
			if (E(e, t)) return !0;
			if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
			var n = Object.keys(e),
				r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (var o = 0; o < n.length; o++)
				if (!b.call(t, n[o]) || !E(e[n[o]], t[n[o]])) return !1;
			return !0
		}
		var S = __webpack_require__(4890);

		function C(e) {
			return function(t, n) {
				var r = e(t, n);

				function o() {
					return r
				}
				return o.dependsOnOwnProps = !1, o
			}
		}

		function x(e) {
			return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
		}

		function P(e, t) {
			return function(t, n) {
				n.displayName;
				var r = function(e, t) {
					return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
				};
				return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
					r.mapToProps = e, r.dependsOnOwnProps = x(e);
					var o = r(t, n);
					return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = x(o), o = r(t, n)), o
				}, r
			}
		}
		const T = [function(e) {
			return "function" == typeof e ? P(e) : void 0
		}, function(e) {
			return e ? void 0 : C((function(e) {
				return {
					dispatch: e
				}
			}))
		}, function(e) {
			return e && "object" == typeof e ? C((function(t) {
				return (0, S.DE)(e, t)
			})) : void 0
		}];
		const k = [function(e) {
			return "function" == typeof e ? P(e) : void 0
		}, function(e) {
			return e ? void 0 : C((function() {
				return {}
			}))
		}];

		function N(t, n, r) {
			return e({}, r, t, n)
		}
		const A = [function(e) {
			return "function" == typeof e ? function(e) {
				return function(t, n) {
					n.displayName;
					var r, o = n.pure,
						i = n.areMergedPropsEqual,
						a = !1;
					return function(t, n, s) {
						var c = e(t, n, s);
						return a ? o && i(c, r) || (r = c) : (a = !0, r = c), r
					}
				}
			}(e) : void 0
		}, function(e) {
			return e ? void 0 : function() {
				return N
			}
		}];

		function R(e, t, n, r) {
			return function(o, i) {
				return n(e(o, i), t(r, i), i)
			}
		}

		function D(e, t, n, r, o) {
			var i, a, s, c, l, u = o.areStatesEqual,
				d = o.areOwnPropsEqual,
				p = o.areStatePropsEqual,
				f = !1;

			function h(o, f) {
				var h, m, g = !d(f, a),
					_ = !u(o, i);
				return i = o, a = f, g && _ ? (s = e(i, a), t.dependsOnOwnProps && (c = t(r, a)), l = n(s, c, a)) : g ? (e.dependsOnOwnProps && (s = e(i, a)), t.dependsOnOwnProps && (c = t(r, a)), l = n(s, c, a)) : _ ? (h = e(i, a), m = !p(h, s), s = h, m && (l = n(s, c, a)), l) : l
			}
			return function(o, u) {
				return f ? h(o, u) : (s = e(i = o, a = u), c = t(r, a), l = n(s, c, a), f = !0, l)
			}
		}

		function L(e, t) {
			var n = t.initMapStateToProps,
				r = t.initMapDispatchToProps,
				o = t.initMergeProps,
				i = h(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
				a = n(e, i),
				s = r(e, i),
				c = o(e, i);
			return (i.pure ? D : R)(a, s, c, e, i)
		}

		function I(e, t, n) {
			for (var r = t.length - 1; r >= 0; r--) {
				var o = t[r](e);
				if (o) return o
			}
			return function(t, r) {
				throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
			}
		}

		function M(e, t) {
			return e === t
		}
		const q = (F = (B = void 0 === j ? {} : j).connectHOC, H = void 0 === F ? w : F, U = B.mapStateToPropsFactories, z = void 0 === U ? k : U, V = B.mapDispatchToPropsFactories, W = void 0 === V ? T : V, K = B.mergePropsFactories, G = void 0 === K ? A : K, $ = B.selectorFactory, Q = void 0 === $ ? L : $, function(t, n, r, o) {
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
				g = void 0 === m ? O : m,
				_ = h(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
				v = I(t, z, "mapStateToProps"),
				y = I(n, W, "mapDispatchToProps"),
				w = I(r, G, "mergeProps");
			return H(Q, e({
				methodName: "connect",
				getDisplayName: function(e) {
					return "Connect(" + e + ")"
				},
				shouldHandleStateChanges: Boolean(t),
				initMapStateToProps: v,
				initMapDispatchToProps: y,
				initMergeProps: w,
				pure: s,
				areStatesEqual: l,
				areOwnPropsEqual: d,
				areStatePropsEqual: f,
				areMergedPropsEqual: g
			}, _))
		});
		var j, B, F, H, U, z, V, W, K, G, $, Q;

		function Y(e) {
			return "/" === e.charAt(0)
		}

		function J(e, t) {
			for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
			e.pop()
		}
		const Z = function(e, t) {
			void 0 === t && (t = "");
			var n, r = e && e.split("/") || [],
				o = t && t.split("/") || [],
				i = e && Y(e),
				a = t && Y(t),
				s = i || a;
			if (e && Y(e) ? o = r : r.length && (o.pop(), o = o.concat(r)), !o.length) return "/";
			if (o.length) {
				var c = o[o.length - 1];
				n = "." === c || ".." === c || "" === c
			} else n = !1;
			for (var l = 0, u = o.length; u >= 0; u--) {
				var d = o[u];
				"." === d ? J(o, u) : ".." === d ? (J(o, u), l++) : l && (J(o, u), l--)
			}
			if (!s)
				for (; l--; l) o.unshift("..");
			!s || "" === o[0] || o[0] && Y(o[0]) || o.unshift("");
			var p = o.join("/");
			return n && "/" !== p.substr(-1) && (p += "/"), p
		};
		const X = function(e, t) {
			if (!e) throw new Error("Invariant failed")
		};

		function ee(e) {
			return "/" === e.charAt(0) ? e : "/" + e
		}

		function te(e) {
			return "/" === e.charAt(0) ? e.substr(1) : e
		}

		function ne(e, t) {
			return function(e, t) {
				return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
			}(e, t) ? e.substr(t.length) : e
		}

		function re(e) {
			return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
		}

		function oe(e) {
			var t = e.pathname,
				n = e.search,
				r = e.hash,
				o = t || "/";
			return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
		}

		function ie(t, n, r, o) {
			var i;
			"string" == typeof t ? (i = function(e) {
				var t = e || "/",
					n = "",
					r = "",
					o = t.indexOf("#"); - 1 !== o && (r = t.substr(o), t = t.substr(0, o));
				var i = t.indexOf("?");
				return -1 !== i && (n = t.substr(i), t = t.substr(0, i)), {
					pathname: t,
					search: "?" === n ? "" : n,
					hash: "#" === r ? "" : r
				}
			}(t)).state = n : (void 0 === (i = e({}, t)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== n && void 0 === i.state && (i.state = n));
			try {
				i.pathname = decodeURI(i.pathname)
			} catch (e) {
				throw e instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
			}
			return r && (i.key = r), o ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = Z(i.pathname, o.pathname)) : i.pathname = o.pathname : i.pathname || (i.pathname = "/"), i
		}

		function ae() {
			var e = null;
			var t = [];
			return {
				setPrompt: function(t) {
					return e = t,
						function() {
							e === t && (e = null)
						}
				},
				confirmTransitionTo: function(t, n, r, o) {
					if (null != e) {
						var i = "function" == typeof e ? e(t, n) : e;
						"string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
					} else o(!0)
				},
				appendListener: function(e) {
					var n = !0;

					function r() {
						n && e.apply(void 0, arguments)
					}
					return t.push(r),
						function() {
							n = !1, t = t.filter((function(e) {
								return e !== r
							}))
						}
				},
				notifyListeners: function() {
					for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
					t.forEach((function(e) {
						return e.apply(void 0, n)
					}))
				}
			}
		}
		var se = !("undefined" == typeof window || !window.document || !window.document.createElement);

		function ce(e, t) {
			t(window.confirm(e))
		}

		function le() {
			try {
				return window.history.state || {}
			} catch (e) {
				return {}
			}
		}

		function ue(t) {
			void 0 === t && (t = {}), se || X(!1);
			var n, r = window.history,
				o = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
				i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
				a = t,
				s = a.forceRefresh,
				c = void 0 !== s && s,
				l = a.getUserConfirmation,
				u = void 0 === l ? ce : l,
				d = a.keyLength,
				p = void 0 === d ? 6 : d,
				f = t.basename ? re(ee(t.basename)) : "";

			function h(e) {
				var t = e || {},
					n = t.key,
					r = t.state,
					o = window.location,
					i = o.pathname + o.search + o.hash;
				return f && (i = ne(i, f)), ie(i, r, n)
			}

			function m() {
				return Math.random().toString(36).substr(2, p)
			}
			var g = ae();

			function _(t) {
				e(k, t), k.length = r.length, g.notifyListeners(k.location, k.action)
			}

			function v(e) {
				(function(e) {
					return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
				})(e) || b(h(e.state))
			}

			function y() {
				b(h(le()))
			}
			var w = !1;

			function b(e) {
				if (w) w = !1, _();
				else {
					g.confirmTransitionTo(e, "POP", u, (function(t) {
						t ? _({
							action: "POP",
							location: e
						}) : function(e) {
							var t = k.location,
								n = O.indexOf(t.key); - 1 === n && (n = 0);
							var r = O.indexOf(e.key); - 1 === r && (r = 0);
							var o = n - r;
							o && (w = !0, C(o))
						}(e)
					}))
				}
			}
			var E = h(le()),
				O = [E.key];

			function S(e) {
				return f + oe(e)
			}

			function C(e) {
				r.go(e)
			}
			var x = 0;

			function P(e) {
				1 === (x += e) && 1 === e ? (window.addEventListener("popstate", v), i && window.addEventListener("hashchange", y)) : 0 === x && (window.removeEventListener("popstate", v), i && window.removeEventListener("hashchange", y))
			}
			var T = !1;
			var k = {
				length: r.length,
				action: "POP",
				location: E,
				createHref: S,
				push: function(e, t) {
					var n = ie(e, t, m(), k.location);
					g.confirmTransitionTo(n, "PUSH", u, (function(e) {
						if (e) {
							var t = S(n),
								i = n.key,
								a = n.state;
							if (o)
								if (r.pushState({
										key: i,
										state: a
									}, null, t), c) window.location.href = t;
								else {
									var s = O.indexOf(k.location.key),
										l = O.slice(0, s + 1);
									l.push(n.key), O = l, _({
										action: "PUSH",
										location: n
									})
								}
							else window.location.href = t
						}
					}))
				},
				replace: function(e, t) {
					var n = ie(e, t, m(), k.location);
					g.confirmTransitionTo(n, "REPLACE", u, (function(e) {
						if (e) {
							var t = S(n),
								i = n.key,
								a = n.state;
							if (o)
								if (r.replaceState({
										key: i,
										state: a
									}, null, t), c) window.location.replace(t);
								else {
									var s = O.indexOf(k.location.key); - 1 !== s && (O[s] = n.key), _({
										action: "REPLACE",
										location: n
									})
								}
							else window.location.replace(t)
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
				block: function(e) {
					void 0 === e && (e = !1);
					var t = g.setPrompt(e);
					return T || (P(1), T = !0),
						function() {
							return T && (T = !1, P(-1)), t()
						}
				},
				listen: function(e) {
					var t = g.appendListener(e);
					return P(1),
						function() {
							P(-1), t()
						}
				}
			};
			return k
		}
		var de = {
			hashbang: {
				encodePath: function(e) {
					return "!" === e.charAt(0) ? e : "!/" + te(e)
				},
				decodePath: function(e) {
					return "!" === e.charAt(0) ? e.substr(1) : e
				}
			},
			noslash: {
				encodePath: te,
				decodePath: ee
			},
			slash: {
				encodePath: ee,
				decodePath: ee
			}
		};

		function pe(e) {
			var t = e.indexOf("#");
			return -1 === t ? e : e.slice(0, t)
		}

		function fe() {
			var e = window.location.href,
				t = e.indexOf("#");
			return -1 === t ? "" : e.substring(t + 1)
		}

		function he(e) {
			window.location.replace(pe(window.location.href) + "#" + e)
		}

		function me(t) {
			void 0 === t && (t = {}), se || X(!1);
			var n = window.history,
				r = (window.navigator.userAgent.indexOf("Firefox"), t),
				o = r.getUserConfirmation,
				i = void 0 === o ? ce : o,
				a = r.hashType,
				s = void 0 === a ? "slash" : a,
				c = t.basename ? re(ee(t.basename)) : "",
				l = de[s],
				u = l.encodePath,
				d = l.decodePath;

			function p() {
				var e = d(fe());
				return c && (e = ne(e, c)), ie(e)
			}
			var f = ae();

			function h(t) {
				e(x, t), x.length = n.length, f.notifyListeners(x.location, x.action)
			}
			var m = !1,
				g = null;

			function _() {
				var e, t, n = fe(),
					r = u(n);
				if (n !== r) he(r);
				else {
					var o = p(),
						a = x.location;
					if (!m && (t = o, (e = a).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) return;
					if (g === oe(o)) return;
					g = null,
						function(e) {
							if (m) m = !1, h();
							else {
								f.confirmTransitionTo(e, "POP", i, (function(t) {
									t ? h({
										action: "POP",
										location: e
									}) : function(e) {
										var t = x.location,
											n = b.lastIndexOf(oe(t)); - 1 === n && (n = 0);
										var r = b.lastIndexOf(oe(e)); - 1 === r && (r = 0);
										var o = n - r;
										o && (m = !0, E(o))
									}(e)
								}))
							}
						}(o)
				}
			}
			var v = fe(),
				y = u(v);
			v !== y && he(y);
			var w = p(),
				b = [oe(w)];

			function E(e) {
				n.go(e)
			}
			var O = 0;

			function S(e) {
				1 === (O += e) && 1 === e ? window.addEventListener("hashchange", _) : 0 === O && window.removeEventListener("hashchange", _)
			}
			var C = !1;
			var x = {
				length: n.length,
				action: "POP",
				location: w,
				createHref: function(e) {
					var t = document.querySelector("base"),
						n = "";
					return t && t.getAttribute("href") && (n = pe(window.location.href)), n + "#" + u(c + oe(e))
				},
				push: function(e, t) {
					var n = ie(e, void 0, void 0, x.location);
					f.confirmTransitionTo(n, "PUSH", i, (function(e) {
						if (e) {
							var t = oe(n),
								r = u(c + t);
							if (fe() !== r) {
								g = t,
									function(e) {
										window.location.hash = e
									}(r);
								var o = b.lastIndexOf(oe(x.location)),
									i = b.slice(0, o + 1);
								i.push(t), b = i, h({
									action: "PUSH",
									location: n
								})
							} else h()
						}
					}))
				},
				replace: function(e, t) {
					var n = ie(e, void 0, void 0, x.location);
					f.confirmTransitionTo(n, "REPLACE", i, (function(e) {
						if (e) {
							var t = oe(n),
								r = u(c + t);
							fe() !== r && (g = t, he(r));
							var o = b.indexOf(oe(x.location)); - 1 !== o && (b[o] = t), h({
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
				block: function(e) {
					void 0 === e && (e = !1);
					var t = f.setPrompt(e);
					return C || (S(1), C = !0),
						function() {
							return C && (C = !1, S(-1)), t()
						}
				},
				listen: function(e) {
					var t = f.appendListener(e);
					return S(1),
						function() {
							S(-1), t()
						}
				}
			};
			return x
		}

		function ge(e, t, n) {
			return Math.min(Math.max(e, t), n)
		}

		function _e(t) {
			void 0 === t && (t = {});
			var n = t,
				r = n.getUserConfirmation,
				o = n.initialEntries,
				i = void 0 === o ? ["/"] : o,
				a = n.initialIndex,
				s = void 0 === a ? 0 : a,
				c = n.keyLength,
				l = void 0 === c ? 6 : c,
				u = ae();

			function d(t) {
				e(_, t), _.length = _.entries.length, u.notifyListeners(_.location, _.action)
			}

			function p() {
				return Math.random().toString(36).substr(2, l)
			}
			var f = ge(s, 0, i.length - 1),
				h = i.map((function(e) {
					return ie(e, void 0, "string" == typeof e ? p() : e.key || p())
				})),
				m = oe;

			function g(e) {
				var t = ge(_.index + e, 0, _.entries.length - 1),
					n = _.entries[t];
				u.confirmTransitionTo(n, "POP", r, (function(e) {
					e ? d({
						action: "POP",
						location: n,
						index: t
					}) : d()
				}))
			}
			var _ = {
				length: h.length,
				action: "POP",
				location: h[f],
				index: f,
				entries: h,
				createHref: m,
				push: function(e, t) {
					var n = ie(e, t, p(), _.location);
					u.confirmTransitionTo(n, "PUSH", r, (function(e) {
						if (e) {
							var t = _.index + 1,
								r = _.entries.slice(0);
							r.length > t ? r.splice(t, r.length - t, n) : r.push(n), d({
								action: "PUSH",
								location: n,
								index: t,
								entries: r
							})
						}
					}))
				},
				replace: function(e, t) {
					var n = ie(e, t, p(), _.location);
					u.confirmTransitionTo(n, "REPLACE", r, (function(e) {
						e && (_.entries[_.index] = n, d({
							action: "REPLACE",
							location: n
						}))
					}))
				},
				go: g,
				goBack: function() {
					g(-1)
				},
				goForward: function() {
					g(1)
				},
				canGo: function(e) {
					var t = _.index + e;
					return t >= 0 && t < _.entries.length
				},
				block: function(e) {
					return void 0 === e && (e = !1), u.setPrompt(e)
				},
				listen: function(e) {
					return u.appendListener(e)
				}
			};
			return _
		}
		var ve = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : {};

		function ye(e) {
			var t = [];
			return {
				on: function(e) {
					t.push(e)
				},
				off: function(e) {
					t = t.filter((function(t) {
						return t !== e
					}))
				},
				get: function() {
					return e
				},
				set: function(n, r) {
					e = n, t.forEach((function(t) {
						return t(e, r)
					}))
				}
			}
		}
		const we = r().createContext || function(e, t) {
			var r, o, i = "__create-react-context-" + function() {
					var e = "__global_unique_id__";
					return ve[e] = (ve[e] || 0) + 1
				}() + "__",
				a = function(e) {
					function n() {
						var t;
						return (t = e.apply(this, arguments) || this).emitter = ye(t.props.value), t
					}
					s(n, e);
					var r = n.prototype;
					return r.getChildContext = function() {
						var e;
						return (e = {})[i] = this.emitter, e
					}, r.componentWillReceiveProps = function(e) {
						if (this.props.value !== e.value) {
							var n, r = this.props.value,
								o = e.value;
							((i = r) === (a = o) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) ? n = 0: (n = "function" == typeof t ? t(r, o) : 1073741823, 0 !== (n |= 0) && this.emitter.set(e.value, n))
						}
						var i, a
					}, r.render = function() {
						return this.props.children
					}, n
				}(n.Component);
			a.childContextTypes = ((r = {})[i] = l().object.isRequired, r);
			var c = function(t) {
				function n() {
					var e;
					return (e = t.apply(this, arguments) || this).state = {
						value: e.getValue()
					}, e.onUpdate = function(t, n) {
						0 != ((0 | e.observedBits) & n) && e.setState({
							value: e.getValue()
						})
					}, e
				}
				s(n, t);
				var r = n.prototype;
				return r.componentWillReceiveProps = function(e) {
					var t = e.observedBits;
					this.observedBits = null == t ? 1073741823 : t
				}, r.componentDidMount = function() {
					this.context[i] && this.context[i].on(this.onUpdate);
					var e = this.props.observedBits;
					this.observedBits = null == e ? 1073741823 : e
				}, r.componentWillUnmount = function() {
					this.context[i] && this.context[i].off(this.onUpdate)
				}, r.getValue = function() {
					return this.context[i] ? this.context[i].get() : e
				}, r.render = function() {
					return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
					var e
				}, n
			}(n.Component);
			return c.contextTypes = ((o = {})[i] = l().object, o), {
				Provider: a,
				Consumer: c
			}
		};
		var be = __webpack_require__(9658),
			Ee = __webpack_require__.n(be),
			Oe = function(e) {
				var t = we();
				return t.displayName = e, t
			}("Router"),
			Se = function(e) {
				function t(t) {
					var n;
					return (n = e.call(this, t) || this).state = {
						location: t.history.location
					}, n._isMounted = !1, n._pendingLocation = null, t.staticContext || (n.unlisten = t.history.listen((function(e) {
						n._isMounted ? n.setState({
							location: e
						}) : n._pendingLocation = e
					}))), n
				}
				s(t, e), t.computeRootMatch = function(e) {
					return {
						path: "/",
						url: "/",
						params: {},
						isExact: "/" === e
					}
				};
				var n = t.prototype;
				return n.componentDidMount = function() {
					this._isMounted = !0, this._pendingLocation && this.setState({
						location: this._pendingLocation
					})
				}, n.componentWillUnmount = function() {
					this.unlisten && this.unlisten()
				}, n.render = function() {
					return r().createElement(Oe.Provider, {
						children: this.props.children || null,
						value: {
							history: this.props.history,
							location: this.state.location,
							match: t.computeRootMatch(this.state.location.pathname),
							staticContext: this.props.staticContext
						}
					})
				}, t
			}(r().Component);
		r().Component;
		r().Component;
		var Ce = {},
			xe = 0;

		function Pe(e, t) {
			void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = {
				path: t
			});
			var n = t,
				r = n.path,
				o = n.exact,
				i = void 0 !== o && o,
				a = n.strict,
				s = void 0 !== a && a,
				c = n.sensitive,
				l = void 0 !== c && c;
			return [].concat(r).reduce((function(t, n) {
				if (!n && "" !== n) return null;
				if (t) return t;
				var r = function(e, t) {
						var n = "" + t.end + t.strict + t.sensitive,
							r = Ce[n] || (Ce[n] = {});
						if (r[e]) return r[e];
						var o = [],
							i = {
								regexp: Ee()(e, o, t),
								keys: o
							};
						return xe < 1e4 && (r[e] = i, xe++), i
					}(n, {
						end: i,
						strict: s,
						sensitive: l
					}),
					o = r.regexp,
					a = r.keys,
					c = o.exec(e);
				if (!c) return null;
				var u = c[0],
					d = c.slice(1),
					p = e === u;
				return i && !p ? null : {
					path: n,
					url: "/" === n && "" === u ? "/" : u,
					isExact: p,
					params: a.reduce((function(e, t, n) {
						return e[t.name] = d[n], e
					}), {})
				}
			}), null)
		}
		var Te = function(t) {
			function n() {
				return t.apply(this, arguments) || this
			}
			return s(n, t), n.prototype.render = function() {
				var t = this;
				return r().createElement(Oe.Consumer, null, (function(n) {
					n || X(!1);
					var o = t.props.location || n.location,
						i = e({}, n, {
							location: o,
							match: t.props.computedMatch ? t.props.computedMatch : t.props.path ? Pe(o.pathname, t.props) : n.match
						}),
						a = t.props,
						s = a.children,
						c = a.component,
						l = a.render;
					return Array.isArray(s) && 0 === s.length && (s = null), r().createElement(Oe.Provider, {
						value: i
					}, i.match ? s ? "function" == typeof s ? s(i) : s : c ? r().createElement(c, i) : l ? l(i) : null : "function" == typeof s ? s(i) : null)
				}))
			}, n
		}(r().Component);

		function ke(e) {
			return "/" === e.charAt(0) ? e : "/" + e
		}

		function Ne(t, n) {
			if (!t) return n;
			var r = ke(t);
			return 0 !== n.pathname.indexOf(r) ? n : e({}, n, {
				pathname: n.pathname.substr(r.length)
			})
		}

		function Ae(e) {
			return "string" == typeof e ? e : oe(e)
		}

		function Re(e) {
			return function() {
				X(!1)
			}
		}

		function De() {}
		r().Component;
		var Le = function(t) {
			function n() {
				return t.apply(this, arguments) || this
			}
			return s(n, t), n.prototype.render = function() {
				var t = this;
				return r().createElement(Oe.Consumer, null, (function(n) {
					n || X(!1);
					var o, i, a = t.props.location || n.location;
					return r().Children.forEach(t.props.children, (function(t) {
						if (null == i && r().isValidElement(t)) {
							o = t;
							var s = t.props.path || t.props.from;
							i = s ? Pe(a.pathname, e({}, t.props, {
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
		var Ie = __webpack_require__(4501);
		const Me = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "OUTLET":
					return t.outlet;
				default:
					return e
			}
		};
		const qe = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "TAXES":
					return t.taxes;
				default:
					return e
			}
		};
		const je = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "CATEGORIES":
					return t.categories;
				default:
					return e
			}
		};
		const Be = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "CUSTOMERS":
					return t.customers;
				default:
					return e
			}
		};
		const Fe = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "PRODUCTS":
					return t.products;
				default:
					return e
			}
		};
		const He = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "CART":
					return t.cart;
				default:
					return e
			}
		};
		const Ue = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "TRANSACTIONS":
					return t.transactions;
				default:
					return e
			}
		};
		const ze = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "TABLES":
					return t.tables;
				default:
					return e
			}
		};
		const Ve = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "SETTINGS":
					return t.settings;
				default:
					return e
			}
		};
		const We = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "COUNTRY_AND_STATES":
					return t.countries_and_states;
				default:
					return e
			}
		};
		const Ke = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "ORDERS":
					return t.orders;
				default:
					return e
			}
		};
		const Ge = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "DISCOUNT":
					return t.discount;
				default:
					return e
			}
		};
		const $e = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "COUPON":
					return t.coupon;
				default:
					return e
			}
		};
		const Qe = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = arguments.length > 1 ? arguments[1] : void 0;
			switch (t.type) {
				case "HOLD_CARTS":
					return t.holdCarts;
				default:
					return e
			}
		};

		function Ye(e) {
			return function(t) {
				var n = t.dispatch,
					r = t.getState;
				return function(t) {
					return function(o) {
						return "function" == typeof o ? o(n, r, e) : t(o)
					}
				}
			}
		}
		var Je = Ye();
		Je.withExtraArgument = Ye;
		const Ze = Je;
		var Xe = __webpack_require__(8500),
			et = __webpack_require__(4385),
			tt = {
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
		tt = (0, Ie.applyFilters)("ddwcpos_modify_default_states", tt);
		var nt = {
			outlet: Me,
			customers: Be,
			categories: je,
			taxes: qe,
			countries_and_states: We,
			products: Fe,
			orders: Ke,
			discount: Ge,
			coupon: $e,
			cart: He,
			holdCarts: Qe,
			transactions: Ue,
			tables: ze,
			settings: Ve
		};
		nt = (0, Ie.applyFilters)("ddwcpos_modify_reducers", nt);
		var rt = (0, S.UY)(nt),
			ot = [(0, et.K3)({})];
		const it = (0, S.MT)(rt, tt, (0, Xe.Uo)(S.md.apply(void 0, [Ze].concat(ot))));

		function at(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function st(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function ct(e, t, n) {
			return t && st(e.prototype, t), n && st(e, n), e
		}

		function lt(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && a(e, t)
		}

		function ut(e) {
			return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function dt(e, t) {
			return !t || "object" !== ut(t) && "function" != typeof t ? f(e) : t
		}

		function pt(e) {
			return (pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var ft = __webpack_require__(8057),
			ht = __webpack_require__(1818),
			mt = __webpack_require__.n(ht);
		__webpack_require__(4895), r().Component;
		r().Component;
		var gt = function(e, t) {
				return "function" == typeof e ? e(t) : e
			},
			_t = function(e, t) {
				return "string" == typeof e ? ie(e, null, null, t) : e
			},
			vt = function(e) {
				return e
			},
			yt = r().forwardRef;
		void 0 === yt && (yt = vt);
		var wt = yt((function(t, n) {
			var o = t.innerRef,
				i = t.navigate,
				a = t.onClick,
				s = h(t, ["innerRef", "navigate", "onClick"]),
				c = s.target,
				l = e({}, s, {
					onClick: function(e) {
						try {
							a && a(e)
						} catch (t) {
							throw e.preventDefault(), t
						}
						e.defaultPrevented || 0 !== e.button || c && "_self" !== c || function(e) {
							return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
						}(e) || (e.preventDefault(), i())
					}
				});
			return l.ref = vt !== yt && n || o, r().createElement("a", l)
		}));
		var bt = yt((function(t, n) {
				var o = t.component,
					i = void 0 === o ? wt : o,
					a = t.replace,
					s = t.to,
					c = t.innerRef,
					l = h(t, ["component", "replace", "to", "innerRef"]);
				return r().createElement(Oe.Consumer, null, (function(t) {
					t || X(!1);
					var o = t.history,
						u = _t(gt(s, t.location), t.location),
						d = u ? o.createHref(u) : "",
						p = e({}, l, {
							href: d,
							navigate: function() {
								var e = gt(s, t.location);
								(a ? o.replace : o.push)(e)
							}
						});
					return vt !== yt ? p.ref = n || c : p.innerRef = c, r().createElement(i, p)
				}))
			})),
			Et = function(e) {
				return e
			},
			Ot = r().forwardRef;
		void 0 === Ot && (Ot = Et);
		Ot((function(t, n) {
			var o = t["aria-current"],
				i = void 0 === o ? "page" : o,
				a = t.activeClassName,
				s = void 0 === a ? "active" : a,
				c = t.activeStyle,
				l = t.className,
				u = t.exact,
				d = t.isActive,
				p = t.location,
				f = t.strict,
				m = t.style,
				g = t.to,
				_ = t.innerRef,
				v = h(t, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);
			return r().createElement(Oe.Consumer, null, (function(t) {
				t || X(!1);
				var o = p || t.location,
					a = _t(gt(g, o), o),
					h = a.pathname,
					y = h && h.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
					w = y ? Pe(o.pathname, {
						path: y,
						exact: u,
						strict: f
					}) : null,
					b = !!(d ? d(w, o) : w),
					E = b ? function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						return t.filter((function(e) {
							return e
						})).join(" ")
					}(l, s) : l,
					O = b ? e({}, m, {}, c) : m,
					S = e({
						"aria-current": b && i || null,
						className: E,
						style: O,
						to: a
					}, v);
				return Et !== Ot ? S.ref = n || _ : S.innerRef = _, r().createElement(bt, S)
			}))
		}));
		const St = {
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

		function Ct(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function xt(e, t) {
			if (e) {
				if ("string" == typeof e) return Ct(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ct(e, t) : void 0
			}
		}

		function Pt(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (null != n) {
					var r, o, i = [],
						a = !0,
						s = !1;
					try {
						for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
					} catch (e) {
						s = !0, o = e
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
					return i
				}
			}(e, t) || xt(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function Tt(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function kt(e, t) {
			if (null == e) return {};
			var n, r, o = h(e, t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
			}
			return o
		}
		var Nt = __webpack_require__(4184),
			At = __webpack_require__.n(Nt);
		const Rt = (0, n.createContext)({});

		function Dt(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Lt(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Dt(Object(n), !0).forEach((function(t) {
					Tt(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function It(e, t) {
			(function(e) {
				return "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e)
			})(e) && (e = "100%");
			var n = function(e) {
				return "string" == typeof e && -1 !== e.indexOf("%")
			}(e);
			return e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
		}

		function Mt(e) {
			return e <= 1 ? 100 * Number(e) + "%" : e
		}

		function qt(e) {
			return 1 === e.length ? "0" + e : String(e)
		}

		function jt(e, t, n) {
			return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * n * (t - e) : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
		}

		function Bt(e) {
			return Ft(e) / 255
		}

		function Ft(e) {
			return parseInt(e, 16)
		}
		var Ht = {
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

		function Ut(e) {
			var t, n, r, o = {
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
			return "string" == typeof e && (e = function(e) {
				if (0 === (e = e.trim().toLowerCase()).length) return !1;
				var t = !1;
				if (Ht[e]) e = Ht[e], t = !0;
				else if ("transparent" === e) return {
					r: 0,
					g: 0,
					b: 0,
					a: 0,
					format: "name"
				};
				var n = Kt.rgb.exec(e);
				if (n) return {
					r: n[1],
					g: n[2],
					b: n[3]
				};
				if (n = Kt.rgba.exec(e)) return {
					r: n[1],
					g: n[2],
					b: n[3],
					a: n[4]
				};
				if (n = Kt.hsl.exec(e)) return {
					h: n[1],
					s: n[2],
					l: n[3]
				};
				if (n = Kt.hsla.exec(e)) return {
					h: n[1],
					s: n[2],
					l: n[3],
					a: n[4]
				};
				if (n = Kt.hsv.exec(e)) return {
					h: n[1],
					s: n[2],
					v: n[3]
				};
				if (n = Kt.hsva.exec(e)) return {
					h: n[1],
					s: n[2],
					v: n[3],
					a: n[4]
				};
				if (n = Kt.hex8.exec(e)) return {
					r: Ft(n[1]),
					g: Ft(n[2]),
					b: Ft(n[3]),
					a: Bt(n[4]),
					format: t ? "name" : "hex8"
				};
				if (n = Kt.hex6.exec(e)) return {
					r: Ft(n[1]),
					g: Ft(n[2]),
					b: Ft(n[3]),
					format: t ? "name" : "hex"
				};
				if (n = Kt.hex4.exec(e)) return {
					r: Ft(n[1] + n[1]),
					g: Ft(n[2] + n[2]),
					b: Ft(n[3] + n[3]),
					a: Bt(n[4] + n[4]),
					format: t ? "name" : "hex8"
				};
				if (n = Kt.hex3.exec(e)) return {
					r: Ft(n[1] + n[1]),
					g: Ft(n[2] + n[2]),
					b: Ft(n[3] + n[3]),
					format: t ? "name" : "hex"
				};
				return !1
			}(e)), "object" == typeof e && (Gt(e.r) && Gt(e.g) && Gt(e.b) ? (t = e.r, n = e.g, r = e.b, o = {
				r: 255 * It(t, 255),
				g: 255 * It(n, 255),
				b: 255 * It(r, 255)
			}, l = !0, u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : Gt(e.h) && Gt(e.s) && Gt(e.v) ? (a = Mt(e.s), s = Mt(e.v), o = function(e, t, n) {
				e = 6 * It(e, 360), t = It(t, 100), n = It(n, 100);
				var r = Math.floor(e),
					o = e - r,
					i = n * (1 - t),
					a = n * (1 - o * t),
					s = n * (1 - (1 - o) * t),
					c = r % 6;
				return {
					r: 255 * [n, a, i, i, s, n][c],
					g: 255 * [s, n, n, a, i, i][c],
					b: 255 * [i, i, s, n, n, a][c]
				}
			}(e.h, a, s), l = !0, u = "hsv") : Gt(e.h) && Gt(e.s) && Gt(e.l) && (a = Mt(e.s), c = Mt(e.l), o = function(e, t, n) {
				var r, o, i;
				if (e = It(e, 360), t = It(t, 100), n = It(n, 100), 0 === t) o = n, i = n, r = n;
				else {
					var a = n < .5 ? n * (1 + t) : n + t - n * t,
						s = 2 * n - a;
					r = jt(s, a, e + 1 / 3), o = jt(s, a, e), i = jt(s, a, e - 1 / 3)
				}
				return {
					r: 255 * r,
					g: 255 * o,
					b: 255 * i
				}
			}(e.h, a, c), l = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (i = e.a)), i = function(e) {
				return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
			}(i), {
				ok: l,
				format: e.format || u,
				r: Math.min(255, Math.max(o.r, 0)),
				g: Math.min(255, Math.max(o.g, 0)),
				b: Math.min(255, Math.max(o.b, 0)),
				a: i
			}
		}
		var zt = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
			Vt = "[\\s|\\(]+(" + zt + ")[,|\\s]+(" + zt + ")[,|\\s]+(" + zt + ")\\s*\\)?",
			Wt = "[\\s|\\(]+(" + zt + ")[,|\\s]+(" + zt + ")[,|\\s]+(" + zt + ")[,|\\s]+(" + zt + ")\\s*\\)?",
			Kt = {
				CSS_UNIT: new RegExp(zt),
				rgb: new RegExp("rgb" + Vt),
				rgba: new RegExp("rgba" + Wt),
				hsl: new RegExp("hsl" + Vt),
				hsla: new RegExp("hsla" + Wt),
				hsv: new RegExp("hsv" + Vt),
				hsva: new RegExp("hsva" + Wt),
				hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};

		function Gt(e) {
			return Boolean(Kt.CSS_UNIT.exec(String(e)))
		}
		var $t = [{
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

		function Qt(e) {
			var t = function(e, t, n) {
				e = It(e, 255), t = It(t, 255), n = It(n, 255);
				var r = Math.max(e, t, n),
					o = Math.min(e, t, n),
					i = 0,
					a = r,
					s = r - o,
					c = 0 === r ? 0 : s / r;
				if (r === o) i = 0;
				else {
					switch (r) {
						case e:
							i = (t - n) / s + (t < n ? 6 : 0);
							break;
						case t:
							i = (n - e) / s + 2;
							break;
						case n:
							i = (e - t) / s + 4
					}
					i /= 6
				}
				return {
					h: i,
					s: c,
					v: a
				}
			}(e.r, e.g, e.b);
			return {
				h: 360 * t.h,
				s: t.s,
				v: t.v
			}
		}

		function Yt(e) {
			var t = e.r,
				n = e.g,
				r = e.b;
			return "#".concat(function(e, t, n, r) {
				var o = [qt(Math.round(e).toString(16)), qt(Math.round(t).toString(16)), qt(Math.round(n).toString(16))];
				return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
			}(t, n, r, !1))
		}

		function Jt(e, t, n) {
			var r = n / 100;
			return {
				r: (t.r - e.r) * r + e.r,
				g: (t.g - e.g) * r + e.g,
				b: (t.b - e.b) * r + e.b
			}
		}

		function Zt(e, t, n) {
			var r;
			return (r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0 ? r += 360 : r >= 360 && (r -= 360), r
		}

		function Xt(e, t, n) {
			return 0 === e.h && 0 === e.s ? e.s : ((r = n ? e.s - .16 * t : 4 === t ? e.s + .16 : e.s + .05 * t) > 1 && (r = 1), n && 5 === t && r > .1 && (r = .1), r < .06 && (r = .06), Number(r.toFixed(2)));
			var r
		}

		function en(e, t, n) {
			var r;
			return (r = n ? e.v + .05 * t : e.v - .15 * t) > 1 && (r = 1), Number(r.toFixed(2))
		}

		function tn(e) {
			for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = Ut(e), o = 5; o > 0; o -= 1) {
				var i = Qt(r),
					a = Yt(Ut({
						h: Zt(i, o, !0),
						s: Xt(i, o, !0),
						v: en(i, o, !0)
					}));
				n.push(a)
			}
			n.push(Yt(r));
			for (var s = 1; s <= 4; s += 1) {
				var c = Qt(r),
					l = Yt(Ut({
						h: Zt(c, s),
						s: Xt(c, s),
						v: en(c, s)
					}));
				n.push(l)
			}
			return "dark" === t.theme ? $t.map((function(e) {
				var r = e.index,
					o = e.opacity;
				return Yt(Jt(Ut(t.backgroundColor || "#141414"), Ut(n[r]), 100 * o))
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
		Object.keys(nn).forEach((function(e) {
			rn[e] = tn(nn[e]), rn[e].primary = rn[e][5], on[e] = tn(nn[e], {
				theme: "dark",
				backgroundColor: "#141414"
			}), on[e].primary = on[e][5]
		}));
		rn.red, rn.volcano, rn.gold, rn.orange, rn.yellow, rn.lime, rn.green, rn.cyan, rn.blue, rn.geekblue, rn.purple, rn.magenta, rn.grey;
		var an = {};

		function sn(e, t) {
			0
		}

		function cn(e, t, n) {
			t || an[n] || (e(!1, n), an[n] = !0)
		}
		const ln = function(e, t) {
			cn(sn, e, t)
		};

		function un() {
			return !("undefined" == typeof window || !window.document || !window.document.createElement)
		}

		function dn(e) {
			return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
		}

		function pn(e) {
			var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (!un()) return null;
			var r, o = document.createElement("style");
			(null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) && (o.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce);
			o.innerHTML = e;
			var i = dn(n),
				a = i.firstChild;
			return n.prepend && i.prepend ? i.prepend(o) : n.prepend && a ? i.insertBefore(o, a) : i.appendChild(o), o
		}
		var fn = new Map;

		function hn(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				r = dn(n);
			if (!fn.has(r)) {
				var o = pn("", n),
					i = o.parentNode;
				fn.set(r, i), i.removeChild(o)
			}
			var a = Array.from(fn.get(r).children).find((function(e) {
				return "STYLE" === e.tagName && e["rc-util-key"] === t
			}));
			if (a) {
				var s, c, l;
				if ((null === (s = n.csp) || void 0 === s ? void 0 : s.nonce) && a.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)) a.nonce = null === (l = n.csp) || void 0 === l ? void 0 : l.nonce;
				return a.innerHTML !== e && (a.innerHTML = e), a
			}
			var u = pn(e, n);
			return u["rc-util-key"] = t, u
		}

		function mn(e) {
			return "object" === ut(e) && "string" == typeof e.name && "string" == typeof e.theme && ("object" === ut(e.icon) || "function" == typeof e.icon)
		}

		function gn() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return Object.keys(e).reduce((function(t, n) {
				var r = e[n];
				switch (n) {
					case "class":
						t.className = r, delete t.class;
						break;
					default:
						t[n] = r
				}
				return t
			}), {})
		}

		function _n(e) {
			return tn(e)[0]
		}

		function vn(e) {
			return e ? Array.isArray(e) ? e : [e] : []
		}
		var yn = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
			wn = {
				primaryColor: "#333",
				secondaryColor: "#E6E6E6",
				calculated: !1
			};
		var bn = function(e) {
			var t, o, i = e.icon,
				a = e.className,
				s = e.onClick,
				c = e.style,
				l = e.primaryColor,
				u = e.secondaryColor,
				d = kt(e, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]),
				p = wn;
			if (l && (p = {
					primaryColor: l,
					secondaryColor: u || _n(l)
				}), function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						t = (0, n.useContext)(Rt),
						r = t.csp;
					(0, n.useEffect)((function() {
						hn(e, "@ant-design-icons", {
							prepend: !0,
							csp: r
						})
					}), [])
				}(), t = mn(i), o = "icon should be icon definiton, but got ".concat(i), ln(t, "[@ant-design/icons] ".concat(o)), !mn(i)) return null;
			var f = i;
			return f && "function" == typeof f.icon && (f = Lt(Lt({}, f), {}, {
					icon: f.icon(p.primaryColor, p.secondaryColor)
				})),
				function e(t, n, o) {
					return o ? r().createElement(t.tag, Lt(Lt({
						key: n
					}, gn(t.attrs)), o), (t.children || []).map((function(r, o) {
						return e(r, "".concat(n, "-").concat(t.tag, "-").concat(o))
					}))) : r().createElement(t.tag, Lt({
						key: n
					}, gn(t.attrs)), (t.children || []).map((function(r, o) {
						return e(r, "".concat(n, "-").concat(t.tag, "-").concat(o))
					})))
				}(f.icon, "svg-".concat(f.name), Lt({
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
			return Lt({}, wn)
		}, bn.setTwoToneColors = function(e) {
			var t = e.primaryColor,
				n = e.secondaryColor;
			wn.primaryColor = t, wn.secondaryColor = n || _n(t), wn.calculated = !!n
		};
		const En = bn;

		function On(e) {
			var t = Pt(vn(e), 2),
				n = t[0],
				r = t[1];
			return En.setTwoToneColors({
				primaryColor: n,
				secondaryColor: r
			})
		}
		On("#1890ff");
		var Sn = n.forwardRef((function(e, t) {
			var r, o = e.className,
				i = e.icon,
				a = e.spin,
				s = e.rotate,
				c = e.tabIndex,
				l = e.onClick,
				u = e.twoToneColor,
				d = kt(e, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]),
				p = n.useContext(Rt).prefixCls,
				f = void 0 === p ? "anticon" : p,
				h = At()(f, (Tt(r = {}, "".concat(f, "-").concat(i.name), !!i.name), Tt(r, "".concat(f, "-spin"), !!a || "loading" === i.name), r), o),
				m = c;
			void 0 === m && l && (m = -1);
			var g = s ? {
					msTransform: "rotate(".concat(s, "deg)"),
					transform: "rotate(".concat(s, "deg)")
				} : void 0,
				_ = Pt(vn(u), 2),
				v = _[0],
				y = _[1];
			return n.createElement("span", Object.assign({
				role: "img",
				"aria-label": i.name
			}, d, {
				ref: t,
				tabIndex: m,
				onClick: l,
				className: h
			}), n.createElement(En, {
				icon: i,
				primaryColor: v,
				secondaryColor: y,
				style: g
			}))
		}));
		Sn.displayName = "AntdIcon", Sn.getTwoToneColor = function() {
			var e = En.getTwoToneColors();
			return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
		}, Sn.setTwoToneColor = On;
		const Cn = Sn;
		var xn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: St
			}))
		};
		xn.displayName = "HomeOutlined";
		const Pn = n.forwardRef(xn);
		const Tn = {
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
		var kn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Tn
			}))
		};
		kn.displayName = "ShoppingCartOutlined";
		const Nn = n.forwardRef(kn);
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
		var Rn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: An
			}))
		};
		Rn.displayName = "TeamOutlined";
		const Dn = n.forwardRef(Rn);
		const Ln = {
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
		var In = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ln
			}))
		};
		In.displayName = "ShoppingOutlined";
		const Mn = n.forwardRef(In);
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
		var jn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
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
		var Hn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Fn
			}))
		};
		Hn.displayName = "SettingOutlined";
		const Un = n.forwardRef(Hn);
		const zn = {
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
		var Vn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: zn
			}))
		};
		Vn.displayName = "DoubleRightOutlined";
		const Wn = n.forwardRef(Vn);
		const Kn = {
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
		var Gn = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Kn
			}))
		};
		Gn.displayName = "LogoutOutlined";
		const $n = n.forwardRef(Gn);
		var Qn = Object.keys,
			Yn = Array.isArray,
			Jn = "undefined" != typeof self ? self : "undefined" != typeof window ? window : __webpack_require__.g;

		function Zn(e, t) {
			return "object" != typeof t || Qn(t).forEach((function(n) {
				e[n] = t[n]
			})), e
		}
		var Xn = Object.getPrototypeOf,
			er = {}.hasOwnProperty;

		function tr(e, t) {
			return er.call(e, t)
		}

		function nr(e, t) {
			"function" == typeof t && (t = t(Xn(e))), Qn(t).forEach((function(n) {
				or(e, n, t[n])
			}))
		}
		var rr = Object.defineProperty;

		function or(e, t, n, r) {
			rr(e, t, Zn(n && tr(n, "get") && "function" == typeof n.get ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r))
		}

		function ir(e) {
			return {
				from: function(t) {
					return e.prototype = Object.create(t.prototype), or(e.prototype, "constructor", e), {
						extend: nr.bind(null, e.prototype)
					}
				}
			}
		}
		var ar = Object.getOwnPropertyDescriptor;
		var sr = [].slice;

		function cr(e, t, n) {
			return sr.call(e, t, n)
		}

		function lr(e, t) {
			return t(e)
		}

		function ur(e) {
			if (!e) throw new Error("Assertion Failed")
		}

		function dr(e) {
			Jn.setImmediate ? setImmediate(e) : setTimeout(e, 0)
		}

		function pr(e, t) {
			return e.reduce((function(e, n, r) {
				var o = t(n, r);
				return o && (e[o[0]] = o[1]), e
			}), {})
		}

		function fr(e, t) {
			return function() {
				try {
					e.apply(this, arguments)
				} catch (e) {
					t(e)
				}
			}
		}

		function hr(e, t, n) {
			try {
				e.apply(null, n)
			} catch (e) {
				t && t(e)
			}
		}

		function mr(e, t) {
			if (tr(e, t)) return e[t];
			if (!t) return e;
			if ("string" != typeof t) {
				for (var n = [], r = 0, o = t.length; r < o; ++r) {
					var i = mr(e, t[r]);
					n.push(i)
				}
				return n
			}
			var a = t.indexOf(".");
			if (-1 !== a) {
				var s = e[t.substr(0, a)];
				return void 0 === s ? void 0 : mr(s, t.substr(a + 1))
			}
		}

		function gr(e, t, n) {
			if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e)))
				if ("string" != typeof t && "length" in t) {
					ur("string" != typeof n && "length" in n);
					for (var r = 0, o = t.length; r < o; ++r) gr(e, t[r], n[r])
				} else {
					var i = t.indexOf(".");
					if (-1 !== i) {
						var a = t.substr(0, i),
							s = t.substr(i + 1);
						if ("" === s) void 0 === n ? delete e[a] : e[a] = n;
						else {
							var c = e[a];
							c || (c = e[a] = {}), gr(c, s, n)
						}
					} else void 0 === n ? delete e[t] : e[t] = n
				}
		}

		function _r(e) {
			var t = {};
			for (var n in e) tr(e, n) && (t[n] = e[n]);
			return t
		}
		var vr = [].concat;

		function yr(e) {
			return vr.apply([], e)
		}
		var wr = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(yr([8, 16, 32, 64].map((function(e) {
			return ["Int", "Uint", "Float"].map((function(t) {
				return t + e + "Array"
			}))
		})))).filter((function(e) {
			return Jn[e]
		})).map((function(e) {
			return Jn[e]
		}));

		function br(e) {
			if (!e || "object" != typeof e) return e;
			var t;
			if (Yn(e)) {
				t = [];
				for (var n = 0, r = e.length; n < r; ++n) t.push(br(e[n]))
			} else if (wr.indexOf(e.constructor) >= 0) t = e;
			else
				for (var o in t = e.constructor ? Object.create(e.constructor.prototype) : {}, e) tr(e, o) && (t[o] = br(e[o]));
			return t
		}

		function Er(e, t, n, r) {
			return n = n || {}, r = r || "", Qn(e).forEach((function(o) {
				if (tr(t, o)) {
					var i = e[o],
						a = t[o];
					"object" == typeof i && "object" == typeof a && i && a && "" + i.constructor == "" + a.constructor ? Er(i, a, n, r + o + ".") : i !== a && (n[r + o] = t[o])
				} else n[r + o] = void 0
			})), Qn(t).forEach((function(o) {
				tr(e, o) || (n[r + o] = t[o])
			})), n
		}
		var Or = "undefined" != typeof Symbol && Symbol.iterator,
			Sr = Or ? function(e) {
				var t;
				return null != e && (t = e[Or]) && t.apply(e)
			} : function() {
				return null
			},
			Cr = {};

		function xr(e) {
			var t, n, r, o;
			if (1 === arguments.length) {
				if (Yn(e)) return e.slice();
				if (this === Cr && "string" == typeof e) return [e];
				if (o = Sr(e)) {
					for (n = []; !(r = o.next()).done;) n.push(r.value);
					return n
				}
				if (null == e) return [e];
				if ("number" == typeof(t = e.length)) {
					for (n = new Array(t); t--;) n[t] = e[t];
					return n
				}
				return [e]
			}
			for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
			return n
		}
		var Pr = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

		function Tr(e, t) {
			Pr = e, kr = t
		}
		var kr = function() {
				return !0
			},
			Nr = !new Error("").stack;

		function Ar() {
			if (Nr) try {
				throw Ar.arguments, new Error
			} catch (e) {
				return e
			}
			return new Error
		}

		function Rr(e, t) {
			var n = e.stack;
			return n ? (t = t || 0, 0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length), n.split("\n").slice(t).filter(kr).map((function(e) {
				return "\n" + e
			})).join("")) : ""
		}
		var Dr = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
			Lr = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Dr),
			Ir = {
				VersionChanged: "Database version changed by other database connection",
				DatabaseClosed: "Database has been closed",
				Abort: "Transaction aborted",
				TransactionInactive: "Transaction has already completed or failed"
			};

		function Mr(e, t) {
			this._e = Ar(), this.name = e, this.message = t
		}

		function qr(e, t, n, r) {
			this._e = Ar(), this.failures = t, this.failedKeys = r, this.successCount = n
		}

		function jr(e, t) {
			this._e = Ar(), this.name = "BulkError", this.failures = t, this.message = function(e, t) {
				return e + ". Errors: " + t.map((function(e) {
					return e.toString()
				})).filter((function(e, t, n) {
					return n.indexOf(e) === t
				})).join("\n")
			}(e, t)
		}
		ir(Mr).from(Error).extend({
			stack: {
				get: function() {
					return this._stack || (this._stack = this.name + ": " + this.message + Rr(this._e, 2))
				}
			},
			toString: function() {
				return this.name + ": " + this.message
			}
		}), ir(qr).from(Mr), ir(jr).from(Mr);
		var Br = Lr.reduce((function(e, t) {
				return e[t] = t + "Error", e
			}), {}),
			Fr = Mr,
			Hr = Lr.reduce((function(e, t) {
				var n = t + "Error";

				function r(e, r) {
					this._e = Ar(), this.name = n, e ? "string" == typeof e ? (this.message = e, this.inner = r || null) : "object" == typeof e && (this.message = e.name + " " + e.message, this.inner = e) : (this.message = Ir[t] || n, this.inner = null)
				}
				return ir(r).from(Fr), e[t] = r, e
			}), {});
		Hr.Syntax = SyntaxError, Hr.Type = TypeError, Hr.Range = RangeError;
		var Ur = Dr.reduce((function(e, t) {
			return e[t + "Error"] = Hr[t], e
		}), {});
		var zr = Lr.reduce((function(e, t) {
			return -1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = Hr[t]), e
		}), {});

		function Vr() {}

		function Wr(e) {
			return e
		}

		function Kr(e, t) {
			return null == e || e === Wr ? t : function(n) {
				return t(e(n))
			}
		}

		function Gr(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments)
			}
		}

		function $r(e, t) {
			return e === Vr ? t : function() {
				var n = e.apply(this, arguments);
				void 0 !== n && (arguments[0] = n);
				var r = this.onsuccess,
					o = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var i = t.apply(this, arguments);
				return r && (this.onsuccess = this.onsuccess ? Gr(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Gr(o, this.onerror) : o), void 0 !== i ? i : n
			}
		}

		function Qr(e, t) {
			return e === Vr ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess,
					r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Gr(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Gr(r, this.onerror) : r)
			}
		}

		function Yr(e, t) {
			return e === Vr ? t : function(n) {
				var r = e.apply(this, arguments);
				Zn(n, r);
				var o = this.onsuccess,
					i = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var a = t.apply(this, arguments);
				return o && (this.onsuccess = this.onsuccess ? Gr(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? Gr(i, this.onerror) : i), void 0 === r ? void 0 === a ? void 0 : a : Zn(r, a)
			}
		}

		function Jr(e, t) {
			return e === Vr ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments)
			}
		}

		function Zr(e, t) {
			return e === Vr ? t : function() {
				var n = e.apply(this, arguments);
				if (n && "function" == typeof n.then) {
					for (var r = this, o = arguments.length, i = new Array(o); o--;) i[o] = arguments[o];
					return n.then((function() {
						return t.apply(r, i)
					}))
				}
				return t.apply(this, arguments)
			}
		}
		zr.ModifyError = qr, zr.DexieError = Mr, zr.BulkError = jr;
		var Xr = {},
			eo = function() {
				try {
					return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")()
				} catch (t) {
					var e = Jn.Promise;
					return e ? [e.resolve(), e.prototype, e.resolve()] : []
				}
			}(),
			to = eo[0],
			no = eo[1],
			ro = eo[2],
			oo = no && no.then,
			io = to && to.constructor,
			ao = eo[3],
			so = !!ro,
			co = !1,
			lo = ro ? function() {
				ro.then(Ro)
			} : Jn.setImmediate ? setImmediate.bind(null, Ro) : Jn.MutationObserver ? function() {
				var e = document.createElement("div");
				new MutationObserver((function() {
					Ro(), e = null
				})).observe(e, {
					attributes: !0
				}), e.setAttribute("i", "1")
			} : function() {
				setTimeout(Ro, 0)
			},
			uo = function(e, t) {
				wo.push([e, t]), fo && (lo(), fo = !1)
			},
			po = !0,
			fo = !0,
			ho = [],
			mo = [],
			go = null,
			_o = Wr,
			vo = {
				id: "global",
				global: !0,
				ref: 0,
				unhandleds: [],
				onunhandled: ti,
				pgp: !1,
				env: {},
				finalize: function() {
					this.unhandleds.forEach((function(e) {
						try {
							ti(e[0], e[1])
						} catch (e) {}
					}))
				}
			},
			yo = vo,
			wo = [],
			bo = 0,
			Eo = [];

		function Oo(e) {
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this.onuncatched = Vr, this._lib = !1;
			var t = this._PSD = yo;
			if (Pr && (this._stackHolder = Ar(), this._prev = null, this._numPrev = 0), "function" != typeof e) {
				if (e !== Xr) throw new TypeError("Not a function");
				return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Po(this, this._value))
			}
			this._state = null, this._value = null, ++t.ref, xo(this, e)
		}
		var So = {
			get: function() {
				var e = yo,
					t = Uo;

				function n(n, r) {
					var o = this,
						i = !e.global && (e !== yo || t !== Uo);
					i && Ko();
					var a = new Oo((function(t, a) {
						ko(o, new Co(Xo(n, e, i), Xo(r, e, i), t, a, e))
					}));
					return Pr && Ao(a, this), a
				}
				return n.prototype = Xr, n
			},
			set: function(e) {
				or(this, "then", e && e.prototype === Xr ? So : {
					get: function() {
						return e
					},
					set: So.set
				})
			}
		};

		function Co(e, t, n, r, o) {
			this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = o
		}

		function xo(e, t) {
			try {
				t((function(t) {
					if (null === e._state) {
						if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
						var n = e._lib && Do();
						t && "function" == typeof t.then ? xo(e, (function(e, n) {
							t instanceof Oo ? t._then(e, n) : t.then(e, n)
						})) : (e._state = !0, e._value = t, To(e)), n && Lo()
					}
				}), Po.bind(null, e))
			} catch (t) {
				Po(e, t)
			}
		}

		function Po(e, t) {
			if (mo.push(t), null === e._state) {
				var n = e._lib && Do();
				t = _o(t), e._state = !1, e._value = t, Pr && null !== t && "object" == typeof t && !t._promise && hr((function() {
						var n = function e(t, n) {
							var r;
							return ar(t, n) || (r = Xn(t)) && e(r, n)
						}(t, "stack");
						t._promise = e, or(t, "stack", {
							get: function() {
								return co ? n && (n.get ? n.get.apply(t) : n.value) : e.stack
							}
						})
					})),
					function(e) {
						ho.some((function(t) {
							return t._value === e._value
						})) || ho.push(e)
					}(e), To(e), n && Lo()
			}
		}

		function To(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) ko(e, t[n]);
			var o = e._PSD;
			--o.ref || o.finalize(), 0 === bo && (++bo, uo((function() {
				0 == --bo && Io()
			}), []))
		}

		function ko(e, t) {
			if (null !== e._state) {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++bo, uo(No, [n, e, t])
			} else e._listeners.push(t)
		}

		function No(e, t, n) {
			try {
				go = t;
				var r, o = t._value;
				t._state ? r = e(o) : (mo.length && (mo = []), r = e(o), -1 === mo.indexOf(o) && function(e) {
					var t = ho.length;
					for (; t;)
						if (ho[--t]._value === e._value) return void ho.splice(t, 1)
				}(t)), n.resolve(r)
			} catch (e) {
				n.reject(e)
			} finally {
				go = null, 0 == --bo && Io(), --n.psd.ref || n.psd.finalize()
			}
		}

		function Ao(e, t) {
			var n = t ? t._numPrev + 1 : 0;
			n < 100 && (e._prev = t, e._numPrev = n)
		}

		function Ro() {
			Do() && Lo()
		}

		function Do() {
			var e = po;
			return po = !1, fo = !1, e
		}

		function Lo() {
			var e, t, n;
			do {
				for (; wo.length > 0;)
					for (e = wo, wo = [], n = e.length, t = 0; t < n; ++t) {
						var r = e[t];
						r[0].apply(null, r[1])
					}
			} while (wo.length > 0);
			po = !0, fo = !0
		}

		function Io() {
			var e = ho;
			ho = [], e.forEach((function(e) {
				e._PSD.onunhandled.call(null, e._value, e)
			}));
			for (var t = Eo.slice(0), n = t.length; n;) t[--n]()
		}

		function Mo(e) {
			return new Oo(Xr, !1, e)
		}

		function qo(e, t) {
			var n = yo;
			return function() {
				var r = Do(),
					o = yo;
				try {
					return Yo(n, !0), e.apply(this, arguments)
				} catch (e) {
					t && t(e)
				} finally {
					Yo(o, !1), r && Lo()
				}
			}
		}
		nr(Oo.prototype, {
			then: So,
			_then: function(e, t) {
				ko(this, new Co(null, null, e, t, yo))
			},
			catch: function(e) {
				if (1 === arguments.length) return this.then(null, e);
				var t = arguments[0],
					n = arguments[1];
				return "function" == typeof t ? this.then(null, (function(e) {
					return e instanceof t ? n(e) : Mo(e)
				})) : this.then(null, (function(e) {
					return e && e.name === t ? n(e) : Mo(e)
				}))
			},
			finally: function(e) {
				return this.then((function(t) {
					return e(), t
				}), (function(t) {
					return e(), Mo(t)
				}))
			},
			stack: {
				get: function() {
					if (this._stack) return this._stack;
					try {
						co = !0;
						var e = function e(t, n, r) {
							if (n.length === r) return n;
							var o = "";
							if (!1 === t._state) {
								var i, a, s = t._value;
								null != s ? (i = s.name || "Error", a = s.message || s, o = Rr(s, 0)) : (i = s, a = ""), n.push(i + (a ? ": " + a : "") + o)
							}
							Pr && ((o = Rr(t._stackHolder, 2)) && -1 === n.indexOf(o) && n.push(o), t._prev && e(t._prev, n, r));
							return n
						}(this, [], 20).join("\nFrom previous: ");
						return null !== this._state && (this._stack = e), e
					} finally {
						co = !1
					}
				}
			},
			timeout: function(e, t) {
				var n = this;
				return e < 1 / 0 ? new Oo((function(r, o) {
					var i = setTimeout((function() {
						return o(new Hr.Timeout(t))
					}), e);
					n.then(r, o).finally(clearTimeout.bind(null, i))
				})) : this
			}
		}), "undefined" != typeof Symbol && Symbol.toStringTag && or(Oo.prototype, Symbol.toStringTag, "Promise"), vo.env = Jo(), nr(Oo, {
			all: function() {
				var e = xr.apply(null, arguments).map(Go);
				return new Oo((function(t, n) {
					0 === e.length && t([]);
					var r = e.length;
					e.forEach((function(o, i) {
						return Oo.resolve(o).then((function(n) {
							e[i] = n, --r || t(e)
						}), n)
					}))
				}))
			},
			resolve: function(e) {
				if (e instanceof Oo) return e;
				if (e && "function" == typeof e.then) return new Oo((function(t, n) {
					e.then(t, n)
				}));
				var t = new Oo(Xr, !0, e);
				return Ao(t, go), t
			},
			reject: Mo,
			race: function() {
				var e = xr.apply(null, arguments).map(Go);
				return new Oo((function(t, n) {
					e.map((function(e) {
						return Oo.resolve(e).then(t, n)
					}))
				}))
			},
			PSD: {
				get: function() {
					return yo
				},
				set: function(e) {
					return yo = e
				}
			},
			newPSD: Vo,
			usePSD: Zo,
			scheduler: {
				get: function() {
					return uo
				},
				set: function(e) {
					uo = e
				}
			},
			rejectionMapper: {
				get: function() {
					return _o
				},
				set: function(e) {
					_o = e
				}
			},
			follow: function(e, t) {
				return new Oo((function(n, r) {
					return Vo((function(t, n) {
						var r = yo;
						r.unhandleds = [], r.onunhandled = n, r.finalize = Gr((function() {
							var e = this;
							! function(e) {
								Eo.push((function t() {
									e(), Eo.splice(Eo.indexOf(t), 1)
								})), ++bo, uo((function() {
									0 == --bo && Io()
								}), [])
							}((function() {
								0 === e.unhandleds.length ? t() : n(e.unhandleds[0])
							}))
						}), r.finalize), e()
					}), t, n, r)
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
			zo = 0;

		function Vo(e, t, n, r) {
			var o = yo,
				i = Object.create(o);
			i.parent = o, i.ref = 0, i.global = !1, i.id = ++zo;
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
				nthen: ei(a.nthen, i),
				gthen: ei(a.gthen, i)
			} : {}, t && Zn(i, t), ++o.ref, i.finalize = function() {
				--this.parent.ref || this.parent.finalize()
			};
			var s = Zo(i, e, n, r);
			return 0 === i.ref && i.finalize(), s
		}

		function Wo() {
			return jo.id || (jo.id = ++Bo), ++jo.awaits, jo.echoes += 7, jo.id
		}

		function Ko(e) {
			!jo.awaits || e && e !== jo.id || (0 == --jo.awaits && (jo.id = 0), jo.echoes = 7 * jo.awaits)
		}

		function Go(e) {
			return jo.echoes && e && e.constructor === io ? (Wo(), e.then((function(e) {
				return Ko(), e
			}), (function(e) {
				return Ko(), ni(e)
			}))) : e
		}

		function $o(e) {
			++Uo, jo.echoes && 0 != --jo.echoes || (jo.echoes = jo.id = 0), Fo.push(yo), Yo(e, !0)
		}

		function Qo() {
			var e = Fo[Fo.length - 1];
			Fo.pop(), Yo(e, !1)
		}

		function Yo(e, t) {
			var n, r = yo;
			if ((t ? !jo.echoes || Ho++ && e === yo : !Ho || --Ho && e === yo) || (n = t ? $o.bind(null, e) : Qo, oo.call(to, n)), e !== yo && (yo = e, r === vo && (vo.env = Jo()), so)) {
				var o = vo.env.Promise,
					i = e.env;
				no.then = i.nthen, o.prototype.then = i.gthen, (r.global || e.global) && (Object.defineProperty(Jn, "Promise", i.PromiseProp), o.all = i.all, o.race = i.race, o.resolve = i.resolve, o.reject = i.reject)
			}
		}

		function Jo() {
			var e = Jn.Promise;
			return so ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(Jn, "Promise"),
				all: e.all,
				race: e.race,
				resolve: e.resolve,
				reject: e.reject,
				nthen: no.then,
				gthen: e.prototype.then
			} : {}
		}

		function Zo(e, t, n, r, o) {
			var i = yo;
			try {
				return Yo(e, !0), t(n, r, o)
			} finally {
				Yo(i, !1)
			}
		}

		function Xo(e, t, n) {
			return "function" != typeof e ? e : function() {
				var r = yo;
				n && Wo(), Yo(t, !0);
				try {
					return e.apply(this, arguments)
				} finally {
					Yo(r, !1)
				}
			}
		}

		function ei(e, t) {
			return function(n, r) {
				return e.call(this, Xo(n, t, !1), Xo(r, t, !1))
			}
		}

		function ti(e, t) {
			var n;
			try {
				n = t.onuncatched(e)
			} catch (e) {}
			if (!1 !== n) try {
				var r, o = {
					promise: t,
					reason: e
				};
				if (Jn.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent("unhandledrejection", !0, !0), Zn(r, o)) : Jn.CustomEvent && Zn(r = new CustomEvent("unhandledrejection", {
						detail: o
					}), o), r && Jn.dispatchEvent && (dispatchEvent(r), !Jn.PromiseRejectionEvent && Jn.onunhandledrejection)) try {
					Jn.onunhandledrejection(r)
				} catch (e) {}
				r.defaultPrevented || console.warn("Unhandled rejection: " + (e.stack || e))
			} catch (e) {}
		}
		var ni = Oo.reject;

		function ri(e) {
			var t = {},
				n = function(n, r) {
					if (r) {
						for (var o = arguments.length, i = new Array(o - 1); --o;) i[o - 1] = arguments[o];
						return t[n].subscribe.apply(null, i), e
					}
					if ("string" == typeof n) return t[n]
				};
			n.addEventType = i;
			for (var r = 1, o = arguments.length; r < o; ++r) i(arguments[r]);
			return n;

			function i(e, r, o) {
				if ("object" == typeof e) return a(e);
				r || (r = Jr), o || (o = Vr);
				var i = {
					subscribers: [],
					fire: o,
					subscribe: function(e) {
						-1 === i.subscribers.indexOf(e) && (i.subscribers.push(e), i.fire = r(i.fire, e))
					},
					unsubscribe: function(e) {
						i.subscribers = i.subscribers.filter((function(t) {
							return t !== e
						})), i.fire = i.subscribers.reduce(r, o)
					}
				};
				return t[e] = n[e] = i, i
			}

			function a(e) {
				Qn(e).forEach((function(t) {
					var n = e[t];
					if (Yn(n)) i(t, e[t][0], e[t][1]);
					else {
						if ("asap" !== n) throw new Hr.InvalidArgument("Invalid event config");
						var r = i(t, Wr, (function() {
							for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
							r.subscribers.forEach((function(e) {
								dr((function() {
									e.apply(null, t)
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
				} catch (e) {
					return ii
				}
			}(),
			si = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
			ci = [],
			li = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
			ui = li,
			di = li,
			pi = function(e) {
				return !/(dexie\.js|dexie\.min\.js)/.test(e)
			};

		function fi(e, t) {
			var n, r, o, i, a, s = fi.dependencies,
				c = Zn({
					addons: fi.addons,
					autoOpen: !0,
					indexedDB: s.indexedDB,
					IDBKeyRange: s.IDBKeyRange
				}, t),
				l = c.addons,
				u = c.autoOpen,
				d = c.indexedDB,
				p = c.IDBKeyRange,
				f = this._dbSchema = {},
				h = [],
				m = [],
				g = {},
				_ = null,
				v = null,
				y = !1,
				w = null,
				b = !1,
				E = "readwrite",
				O = this,
				S = new Oo((function(e) {
					n = e
				})),
				C = new Oo((function(e, t) {
					r = t
				})),
				x = !0,
				P = !!Si(d);

			function T(e) {
				this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				}, this.stores({})
			}

			function k(e, t, n) {
				var r = O._createTransaction(E, m, f);
				r.create(t), r._completion.catch(n);
				var o = r._reject.bind(r);
				Vo((function() {
					yo.trans = r, 0 === e ? (Qn(f).forEach((function(e) {
						N(t, e, f[e].primKey, f[e].indexes)
					})), Oo.follow((function() {
						return O.on.populate.fire(r)
					})).catch(o)) : function(e, t, n) {
						var r = [],
							o = h.filter((function(t) {
								return t._cfg.version === e
							}))[0];
						if (!o) throw new Hr.Upgrade("Dexie specification of currently installed DB version is missing");
						f = O._dbSchema = o._cfg.dbschema;
						var i = !1;

						function a() {
							return r.length ? Oo.resolve(r.shift()(t.idbtrans)).then(a) : Oo.resolve()
						}
						return h.filter((function(t) {
							return t._cfg.version > e
						})).forEach((function(e) {
							r.push((function() {
								var r = f,
									o = e._cfg.dbschema;
								Y(r, n), Y(o, n), f = O._dbSchema = o;
								var a = function(e, t) {
									var n = {
										del: [],
										add: [],
										change: []
									};
									for (var r in e) t[r] || n.del.push(r);
									for (r in t) {
										var o = e[r],
											i = t[r];
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
								if (a.add.forEach((function(e) {
										N(n, e[0], e[1].primKey, e[1].indexes)
									})), a.change.forEach((function(e) {
										if (e.recreate) throw new Hr.Upgrade("Not yet support for changing primary key");
										var t = n.objectStore(e.name);
										e.add.forEach((function(e) {
											A(t, e)
										})), e.change.forEach((function(e) {
											t.deleteIndex(e.name), A(t, e)
										})), e.del.forEach((function(e) {
											t.deleteIndex(e)
										}))
									})), e._cfg.contentUpgrade) return i = !0, Oo.follow((function() {
									e._cfg.contentUpgrade(t)
								}))
							})), r.push((function(t) {
								i && ui || function(e, t) {
									for (var n = 0; n < t.db.objectStoreNames.length; ++n) {
										var r = t.db.objectStoreNames[n];
										null == e[r] && t.db.deleteObjectStore(r)
									}
								}(e._cfg.dbschema, t)
							}))
						})), a().then((function() {
							! function(e, t) {
								Qn(e).forEach((function(n) {
									t.db.objectStoreNames.contains(n) || N(t, n, e[n].primKey, e[n].indexes)
								}))
							}(f, n)
						}))
					}(e, r, t).catch(o)
				}))
			}

			function N(e, t, n, r) {
				var o = e.db.createObjectStore(t, n.keyPath ? {
					keyPath: n.keyPath,
					autoIncrement: n.auto
				} : {
					autoIncrement: n.auto
				});
				return r.forEach((function(e) {
					A(o, e)
				})), o
			}

			function A(e, t) {
				e.createIndex(t.name, t.keyPath, {
					unique: t.unique,
					multiEntry: t.multi
				})
			}

			function R(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new Hr.InvalidArgument("Too few arguments");
				for (var o = new Array(r - 1); --r;) o[r - 1] = arguments[r];
				n = o.pop();
				var i = yr(o);
				return [e, i, n]
			}

			function D(e, t, n) {
				this.name = e, this.schema = t, this._tx = n, this.hook = g[e] ? g[e].hook : ri(null, {
					creating: [$r, Vr],
					reading: [Kr, Wr],
					updating: [Yr, Vr],
					deleting: [Qr, Vr]
				})
			}

			function L(e, t, n) {
				return (n ? vi : gi)((function(n) {
					e.push(n), t && t()
				}))
			}

			function I(e, t, n, r, o) {
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
								o.call(l, a[0], a[1], t);
								var p = e.delete(a[0]);
								p._hookCtx = l, p.onerror = u, p.onsuccess = r === c ? mi(i) : d
							}
						}), (function(e) {
							throw l.onerror && l.onerror(e), e
						}))
					} else
						for (var p = 0; p < s; ++p) {
							var f = e.delete(n[p]);
							f.onerror = gi(a), p === c && (f.onsuccess = qo((function() {
								return i()
							})))
						}
				}))
			}

			function M(e, t, n, r) {
				var o = this;
				this.db = O, this.mode = e, this.storeNames = t, this.idbtrans = null, this.on = ri(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Oo((function(e, t) {
					o._resolve = e, o._reject = t
				})), this._completion.then((function() {
					o.active = !1, o.on.complete.fire()
				}), (function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), ni(e)
				}))
			}

			function q(e, t, n) {
				this._ctx = {
					table: e,
					index: ":id" === t ? null : t,
					or: n
				}
			}

			function j(e, t) {
				var n = null,
					r = null;
				if (t) try {
					n = t()
				} catch (e) {
					r = e
				}
				var o = e._ctx,
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

			function B(e, t) {
				return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
			}

			function F(e, t) {
				return e._cfg.version - t._cfg.version
			}

			function H(e, t, n) {
				t.forEach((function(t) {
					var r = n[t];
					e.forEach((function(e) {
						t in e || (e === M.prototype || e instanceof M ? or(e, t, {
							get: function() {
								return this.table(t)
							}
						}) : e[t] = new D(t, r))
					}))
				}))
			}

			function U(e, t, n, r, o, i) {
				var a = qo(i ? function(e, t, r) {
					return n(i(e), t, r)
				} : n, o);
				e.onerror || (e.onerror = gi(o)), e.onsuccess = fr(t ? function() {
					var n = e.result;
					if (n) {
						var i = function() {
							n.continue()
						};
						t(n, (function(e) {
							i = e
						}), r, o) && a(n.value, n, (function(e) {
							i = e
						})), i()
					} else r()
				} : function() {
					var t = e.result;
					if (t) {
						var n = function() {
							t.continue()
						};
						a(t.value, t, (function(e) {
							n = e
						})), n()
					} else r()
				}, o)
			}

			function z(e, t) {
				return d.cmp(e, t)
			}

			function V(e, t) {
				return z(e, t) > 0 ? e : t
			}

			function W(e, t) {
				return d.cmp(e, t)
			}

			function K(e, t) {
				return d.cmp(t, e)
			}

			function G(e, t) {
				return e < t ? -1 : e === t ? 0 : 1
			}

			function $(e, t) {
				return e > t ? -1 : e === t ? 0 : 1
			}

			function Q(e, t) {
				return e ? t ? function() {
					return e.apply(this, arguments) && t.apply(this, arguments)
				} : e : t
			}

			function Y(e, t) {
				for (var n = t.db.objectStoreNames, r = 0; r < n.length; ++r) {
					var i = n[r],
						a = t.objectStore(i);
					o = "getAll" in a;
					for (var s = 0; s < a.indexNames.length; ++s) {
						var c = a.indexNames[s],
							l = a.index(c).keyPath,
							u = "string" == typeof l ? l : "[" + cr(l).join("+") + "]";
						if (e[i]) {
							var d = e[i].idxByName[u];
							d && (d.name = c)
						}
					}
				}
				/Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && Jn.WorkerGlobalScope && Jn instanceof Jn.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (o = !1)
			}

			function J(e) {
				O.on("blocked").fire(e), ci.filter((function(e) {
					return e.name === O.name && e !== O && !e._vcFired
				})).map((function(t) {
					return t.on("versionchange").fire(e)
				}))
			}
			this.version = function(e) {
				if (_ || y) throw new Hr.Schema("Cannot add version when database is open");
				this.verno = Math.max(this.verno, e);
				var t = h.filter((function(t) {
					return t._cfg.version === e
				}))[0];
				return t || (t = new T(e), h.push(t), h.sort(F), x = !1, t)
			}, Zn(T.prototype, {
				stores: function(e) {
					this._cfg.storesSource = this._cfg.storesSource ? Zn(this._cfg.storesSource, e) : e;
					var t = {};
					h.forEach((function(e) {
						Zn(t, e._cfg.storesSource)
					}));
					var n = this._cfg.dbschema = {};
					return this._parseStoresSpec(t, n), f = O._dbSchema = n, [g, O, M.prototype].forEach((function(e) {
						for (var t in e) e[t] instanceof D && delete e[t]
					})), H([g, O, M.prototype, this._cfg.tables], Qn(n), n), m = Qn(n), this
				},
				upgrade: function(e) {
					return this._cfg.contentUpgrade = e, this
				},
				_parseStoresSpec: function(e, t) {
					Qn(e).forEach((function(n) {
						if (null !== e[n]) {
							var r = {},
								o = function(e) {
									var t = [];
									return e.split(",").forEach((function(e) {
										var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
											r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
										t.push(new bi(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), Yn(r), /\./.test(e)))
									})), t
								}(e[n]),
								i = o.shift();
							if (i.multi) throw new Hr.Schema("Primary key cannot be multi-valued");
							i.keyPath && gr(r, i.keyPath, i.auto ? 0 : i.keyPath), o.forEach((function(e) {
								if (e.auto) throw new Hr.Schema("Only primary key can be marked as autoIncrement (++)");
								if (!e.keyPath) throw new Hr.Schema("Index must have a name and cannot be an empty string");
								gr(r, e.keyPath, e.compound ? e.keyPath.map((function() {
									return ""
								})) : "")
							})), t[n] = new Ei(n, i, o, r)
						}
					}))
				}
			}), this._allTables = g, this._createTransaction = function(e, t, n, r) {
				return new M(e, t, n, r)
			}, this._whenReady = function(e) {
				return b || yo.letThrough ? e() : new Oo((function(e, t) {
					if (!y) {
						if (!u) return void t(new Hr.DatabaseClosed);
						O.open().catch(Vr)
					}
					S.then(e, t)
				})).then(e)
			}, this.verno = 0, this.open = function() {
				if (y || _) return S.then((function() {
					return v ? ni(v) : O
				}));
				Pr && (C._stackHolder = Ar()), y = !0, v = null, b = !1;
				var t = n,
					r = null;
				return Oo.race([C, new Oo((function(t, n) {
					if (!d) throw new Hr.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
					var o = x ? d.open(e) : d.open(e, Math.round(10 * O.verno));
					if (!o) throw new Hr.MissingAPI("IndexedDB API not available");
					o.onerror = gi(n), o.onblocked = qo(J), o.onupgradeneeded = qo((function(t) {
						if (r = o.transaction, x && !O._allowEmptyDB) {
							o.onerror = yi, r.abort(), o.result.close();
							var i = d.deleteDatabase(e);
							i.onsuccess = i.onerror = qo((function() {
								n(new Hr.NoSuchDatabase("Database " + e + " doesnt exist"))
							}))
						} else {
							r.onerror = gi(n), k((t.oldVersion > Math.pow(2, 62) ? 0 : t.oldVersion) / 10, r, n)
						}
					}), n), o.onsuccess = qo((function() {
						if (r = null, _ = o.result, ci.push(O), x) ! function() {
							if (O.verno = _.version / 10, O._dbSchema = f = {}, 0 === (m = cr(_.objectStoreNames, 0)).length) return;
							var e = _.transaction(Oi(m), "readonly");
							m.forEach((function(t) {
								for (var n = e.objectStore(t), r = n.keyPath, o = r && "string" == typeof r && -1 !== r.indexOf("."), i = new bi(r, r || "", !1, !1, !!n.autoIncrement, r && "string" != typeof r, o), a = [], s = 0; s < n.indexNames.length; ++s) {
									var c = n.index(n.indexNames[s]);
									o = (r = c.keyPath) && "string" == typeof r && -1 !== r.indexOf(".");
									var l = new bi(c.name, r, !!c.unique, !!c.multiEntry, !1, r && "string" != typeof r, o);
									a.push(l)
								}
								f[t] = new Ei(t, i, a, {})
							})), H([g], Qn(f), f)
						}();
						else if (_.objectStoreNames.length > 0) try {
							Y(f, _.transaction(Oi(_.objectStoreNames), "readonly"))
						} catch (e) {}
						_.onversionchange = qo((function(e) {
							O._vcFired = !0, O.on("versionchange").fire(e)
						})), P || "__dbnames" === e || oi.dbnames.put({
							name: e
						}).catch(Vr), t()
					}), n)
				}))]).then((function() {
					return w = [], Oo.resolve(fi.vip(O.on.ready.fire)).then((function e() {
						if (w.length > 0) {
							var t = w.reduce(Zr, Vr);
							return w = [], Oo.resolve(fi.vip(t)).then(e)
						}
					}))
				})).finally((function() {
					w = null
				})).then((function() {
					return y = !1, O
				})).catch((function(e) {
					try {
						r && r.abort()
					} catch (e) {}
					return y = !1, O.close(), ni(v = e)
				})).finally((function() {
					b = !0, t()
				}))
			}, this.close = function() {
				var e = ci.indexOf(O);
				if (e >= 0 && ci.splice(e, 1), _) {
					try {
						_.close()
					} catch (e) {}
					_ = null
				}
				u = !1, v = new Hr.DatabaseClosed, y && r(v), S = new Oo((function(e) {
					n = e
				})), C = new Oo((function(e, t) {
					r = t
				}))
			}, this.delete = function() {
				var t = arguments.length > 0;
				return new Oo((function(n, r) {
					if (t) throw new Hr.InvalidArgument("Arguments not allowed in db.delete()");

					function o() {
						O.close();
						var t = d.deleteDatabase(e);
						t.onsuccess = qo((function() {
							P || oi.dbnames.delete(e).catch(Vr), n()
						})), t.onerror = gi(r), t.onblocked = J
					}
					y ? S.then(o) : o()
				}))
			}, this.backendDB = function() {
				return _
			}, this.isOpen = function() {
				return null !== _
			}, this.hasBeenClosed = function() {
				return v && v instanceof Hr.DatabaseClosed
			}, this.hasFailed = function() {
				return null !== v
			}, this.dynamicallyOpened = function() {
				return x
			}, this.name = e, nr(this, {
				tables: {
					get: function() {
						return Qn(g).map((function(e) {
							return g[e]
						}))
					}
				}
			}), this.on = ri(this, "populate", "blocked", "versionchange", {
				ready: [Zr, Vr]
			}), this.on.ready.subscribe = lr(this.on.ready.subscribe, (function(e) {
				return function(t, n) {
					fi.vip((function() {
						b ? (v || Oo.resolve().then(t), n && e(t)) : w ? (w.push(t), n && e(t)) : (e(t), n || e((function e() {
							O.on.ready.unsubscribe(t), O.on.ready.unsubscribe(e)
						})))
					}))
				}
			})), this.transaction = function() {
				var e = R.apply(this, arguments);
				return this._transaction.apply(this, e)
			}, this._transaction = function(e, t, n) {
				var r = yo.trans;
				r && r.db === O && -1 === e.indexOf("!") || (r = null);
				var o = -1 !== e.indexOf("?");
				e = e.replace("!", "").replace("?", "");
				try {
					var i = t.map((function(e) {
						var t = e instanceof D ? e.name : e;
						if ("string" != typeof t) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return t
					}));
					if ("r" == e || "readonly" == e) e = "readonly";
					else {
						if ("rw" != e && e != E) throw new Hr.InvalidArgument("Invalid transaction mode: " + e);
						e = E
					}
					if (r) {
						if ("readonly" === r.mode && e === E) {
							if (!o) throw new Hr.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
							r = null
						}
						r && i.forEach((function(e) {
							if (r && -1 === r.storeNames.indexOf(e)) {
								if (!o) throw new Hr.SubTransaction("Table " + e + " not included in parent transaction.");
								r = null
							}
						})), o && r && !r.active && (r = null)
					}
				} catch (e) {
					return r ? r._promise(null, (function(t, n) {
						n(e)
					})) : ni(e)
				}
				return r ? r._promise(e, a, "lock") : yo.trans ? Zo(yo.transless, (function() {
					return O._whenReady(a)
				})) : O._whenReady(a);

				function a() {
					return Oo.resolve().then((function() {
						var t, o = yo.transless || yo,
							a = O._createTransaction(e, i, f, r),
							s = {
								trans: a,
								transless: o
							};
						r ? a.idbtrans = r.idbtrans : a.create(), n.constructor === ao && Wo();
						var c = Oo.follow((function() {
							if (t = n.call(a, a))
								if (t.constructor === io) {
									var e = Ko.bind(null, null);
									t.then(e, e)
								} else "function" == typeof t.next && "function" == typeof t.throw && (t = wi(t))
						}), s);
						return (t && "function" == typeof t.then ? Oo.resolve(t).then((function(e) {
							return a.active ? e : ni(new Hr.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
						})) : c.then((function() {
							return t
						}))).then((function(e) {
							return r && a._resolve(), a._completion.then((function() {
								return e
							}))
						})).catch((function(e) {
							return a._reject(e), ni(e)
						}))
					}))
				}
			}, this.table = function(e) {
				if (!tr(g, e)) throw new Hr.InvalidTable("Table " + e + " does not exist");
				return g[e]
			}, nr(D.prototype, {
				_trans: function(e, t, n) {
					var r = this._tx || yo.trans;
					return r && r.db === O ? r === yo.trans ? r._promise(e, t, n) : Vo((function() {
						return r._promise(e, t, n)
					}), {
						trans: r,
						transless: yo.transless || yo
					}) : function e(t, n, r) {
						if (b || yo.letThrough) {
							var o = O._createTransaction(t, n, f);
							try {
								o.create()
							} catch (e) {
								return ni(e)
							}
							return o._promise(t, (function(e, t) {
								return Vo((function() {
									return yo.trans = o, r(e, t, o)
								}))
							})).then((function(e) {
								return o._completion.then((function() {
									return e
								}))
							}))
						}
						if (!y) {
							if (!u) return ni(new Hr.DatabaseClosed);
							O.open().catch(Vr)
						}
						return S.then((function() {
							return e(t, n, r)
						}))
					}(e, [this.name], t)
				},
				_idbstore: function(e, t, n) {
					var r = this.name;
					return this._trans(e, (function(e, n, o) {
						if (-1 === o.storeNames.indexOf(r)) throw new Hr.NotFound("Table" + r + " not part of transaction");
						return t(e, n, o.idbtrans.objectStore(r), o)
					}), n)
				},
				get: function(e, t) {
					if (e && e.constructor === Object) return this.where(e).first(t);
					var n = this;
					return this._idbstore("readonly", (function(t, r, o) {
						var i = o.get(e);
						i.onerror = gi(r), i.onsuccess = qo((function() {
							t(n.hook.reading.fire(i.result))
						}), r)
					})).then(t)
				},
				where: function(e) {
					if ("string" == typeof e) return new q(this, e);
					if (Yn(e)) return new q(this, "[" + e.join("+") + "]");
					var t = Qn(e);
					if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
					var n = this.schema.indexes.concat(this.schema.primKey).filter((function(e) {
						return e.compound && t.every((function(t) {
							return e.keyPath.indexOf(t) >= 0
						})) && e.keyPath.every((function(e) {
							return t.indexOf(e) >= 0
						}))
					}))[0];
					if (n && ai !== ii) return this.where(n.name).equals(n.keyPath.map((function(t) {
						return e[t]
					})));
					n || console.warn("The query " + JSON.stringify(e) + " on " + this.name + " would benefit of a compound index [" + t.join("+") + "]");
					var r = this.schema.idxByName,
						o = t.reduce((function(t, n) {
							return [t[0] || r[n], t[0] || !r[n] ? Q(t[1], (function(t) {
								return "" + mr(t, n) == "" + e[n]
							})) : t[1]]
						}), [null, null]),
						i = o[0];
					return i ? this.where(i.name).equals(e[i.keyPath]).filter(o[1]) : n ? this.filter(o[1]) : this.where(t).equals("")
				},
				count: function(e) {
					return this.toCollection().count(e)
				},
				offset: function(e) {
					return this.toCollection().offset(e)
				},
				limit: function(e) {
					return this.toCollection().limit(e)
				},
				reverse: function() {
					return this.toCollection().reverse()
				},
				filter: function(e) {
					return this.toCollection().and(e)
				},
				each: function(e) {
					return this.toCollection().each(e)
				},
				toArray: function(e) {
					return this.toCollection().toArray(e)
				},
				orderBy: function(e) {
					return new j(new q(this, Yn(e) ? "[" + e.join("+") + "]" : e))
				},
				toCollection: function() {
					return new j(new q(this))
				},
				mapToClass: function(e, t) {
					this.schema.mappedClass = e;
					var n = Object.create(e.prototype);
					t && hi(n, t), this.schema.instanceTemplate = n;
					var r = function(t) {
						if (!t) return t;
						var n = Object.create(e.prototype);
						for (var r in t)
							if (tr(t, r)) try {
								n[r] = t[r]
							} catch (e) {}
						return n
					};
					return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = r, this.hook("reading", r), e
				},
				defineClass: function(e) {
					return this.mapToClass(fi.defineClass(e), e)
				},
				bulkDelete: function(e) {
					return this.hook.deleting.fire === Vr ? this._idbstore(E, (function(t, n, r, o) {
						t(I(r, o, e, !1, Vr))
					})) : this.where(":id").anyOf(e).delete().then((function() {}))
				},
				bulkPut: function(e, t) {
					var n = this;
					return this._idbstore(E, (function(r, o, i) {
						if (!i.keyPath && !n.schema.primKey.auto && !t) throw new Hr.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
						if (i.keyPath && t) throw new Hr.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
						if (t && t.length !== e.length) throw new Hr.InvalidArgument("Arguments objects and keys must have the same length");
						if (0 === e.length) return r();
						var a, s, c = function(e) {
								0 === l.length ? r(e) : o(new jr(n.name + ".bulkPut(): " + l.length + " of " + u + " operations failed", l))
							},
							l = [],
							u = e.length,
							d = n;
						if (n.hook.creating.fire === Vr && n.hook.updating.fire === Vr) {
							s = L(l);
							for (var p = 0, f = e.length; p < f; ++p)(a = t ? i.put(e[p], t[p]) : i.put(e[p])).onerror = s;
							a.onerror = L(l, c), a.onsuccess = _i(c)
						} else {
							var h = t || i.keyPath && e.map((function(e) {
									return mr(e, i.keyPath)
								})),
								m = h && pr(h, (function(t, n) {
									return null != t && [t, e[n]]
								}));
							(h ? d.where(":id").anyOf(h.filter((function(e) {
								return null != e
							}))).modify((function() {
								this.value = m[this.primKey], m[this.primKey] = null
							})).catch(qr, (function(e) {
								l = e.failures
							})).then((function() {
								for (var n = [], r = t && [], o = h.length - 1; o >= 0; --o) {
									var i = h[o];
									(null == i || m[i]) && (n.push(e[o]), t && r.push(i), null != i && (m[i] = null))
								}
								return n.reverse(), t && r.reverse(), d.bulkAdd(n, r)
							})).then((function(e) {
								var t = h[h.length - 1];
								return null != t ? t : e
							})) : d.bulkAdd(e)).then(c).catch(jr, (function(e) {
								l = l.concat(e.failures), c()
							})).catch(o)
						}
					}), "locked")
				},
				bulkAdd: function(e, t) {
					var n = this,
						r = this.hook.creating.fire;
					return this._idbstore(E, (function(o, i, a, s) {
						if (!a.keyPath && !n.schema.primKey.auto && !t) throw new Hr.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
						if (a.keyPath && t) throw new Hr.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
						if (t && t.length !== e.length) throw new Hr.InvalidArgument("Arguments objects and keys must have the same length");
						if (0 === e.length) return o();

						function c(e) {
							0 === p.length ? o(e) : i(new jr(n.name + ".bulkAdd(): " + p.length + " of " + f + " operations failed", p))
						}
						var l, u, d, p = [],
							f = e.length;
						if (r !== Vr) {
							var h, m = a.keyPath;
							u = L(p, null, !0), d = mi(null), hr((function() {
								for (var n = 0, o = e.length; n < o; ++n) {
									h = {
										onerror: null,
										onsuccess: null
									};
									var i = t && t[n],
										c = e[n],
										p = t ? i : m ? mr(c, m) : void 0,
										f = r.call(h, p, c, s);
									null == p && null != f && (m ? gr(c = br(c), m, f) : i = f), (l = null != i ? a.add(c, i) : a.add(c))._hookCtx = h, n < o - 1 && (l.onerror = u, h.onsuccess && (l.onsuccess = d))
								}
							}), (function(e) {
								throw h.onerror && h.onerror(e), e
							})), l.onerror = L(p, c, !0), l.onsuccess = mi(c)
						} else {
							u = L(p);
							for (var g = 0, _ = e.length; g < _; ++g)(l = t ? a.add(e[g], t[g]) : a.add(e[g])).onerror = u;
							l.onerror = L(p, c), l.onsuccess = _i(c)
						}
					}))
				},
				add: function(e, t) {
					var n = this.hook.creating.fire;
					return this._idbstore(E, (function(r, o, i, a) {
						var s = {
							onsuccess: null,
							onerror: null
						};
						if (n !== Vr) {
							var c = null != t ? t : i.keyPath ? mr(e, i.keyPath) : void 0,
								l = n.call(s, c, e, a);
							null == c && null != l && (i.keyPath ? gr(e, i.keyPath, l) : t = l)
						}
						try {
							var u = null != t ? i.add(e, t) : i.add(e);
							u._hookCtx = s, u.onerror = vi(o), u.onsuccess = mi((function(t) {
								var n = i.keyPath;
								n && gr(e, n, t), r(t)
							}))
						} catch (e) {
							throw s.onerror && s.onerror(e), e
						}
					}))
				},
				put: function(e, t) {
					var n = this,
						r = this.hook.creating.fire,
						o = this.hook.updating.fire;
					if (r !== Vr || o !== Vr) {
						var i = this.schema.primKey.keyPath,
							a = void 0 !== t ? t : i && mr(e, i);
						return null == a ? this.add(e) : (e = br(e), this._trans(E, (function() {
							return n.where(":id").equals(a).modify((function() {
								this.value = e
							})).then((function(r) {
								return 0 === r ? n.add(e, t) : a
							}))
						}), "locked"))
					}
					return this._idbstore(E, (function(n, r, o) {
						var i = void 0 !== t ? o.put(e, t) : o.put(e);
						i.onerror = gi(r), i.onsuccess = qo((function(t) {
							var r = o.keyPath;
							r && gr(e, r, t.target.result), n(i.result)
						}))
					}))
				},
				delete: function(e) {
					return this.hook.deleting.subscribers.length ? this.where(":id").equals(e).delete() : this._idbstore(E, (function(t, n, r) {
						var o = r.delete(e);
						o.onerror = gi(n), o.onsuccess = qo((function() {
							t(o.result)
						}))
					}))
				},
				clear: function() {
					return this.hook.deleting.subscribers.length ? this.toCollection().delete() : this._idbstore(E, (function(e, t, n) {
						var r = n.clear();
						r.onerror = gi(t), r.onsuccess = qo((function() {
							e(r.result)
						}))
					}))
				},
				update: function(e, t) {
					if ("object" != typeof t || Yn(t)) throw new Hr.InvalidArgument("Modifications must be an object.");
					if ("object" != typeof e || Yn(e)) return this.where(":id").equals(e).modify(t);
					Qn(t).forEach((function(n) {
						gr(e, n, t[n])
					}));
					var n = mr(e, this.schema.primKey.keyPath);
					return void 0 === n ? ni(new Hr.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(t)
				}
			}), nr(M.prototype, {
				_lock: function() {
					return ur(!yo.global), ++this._reculock, 1 !== this._reculock || yo.global || (yo.lockOwnerFor = this), this
				},
				_unlock: function() {
					if (ur(!yo.global), 0 == --this._reculock)
						for (yo.global || (yo.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
							var e = this._blockedFuncs.shift();
							try {
								Zo(e[1], e[0])
							} catch (e) {}
						}
					return this
				},
				_locked: function() {
					return this._reculock && yo.lockOwnerFor !== this
				},
				create: function(e) {
					var t = this;
					if (!this.mode) return this;
					if (ur(!this.idbtrans), !e && !_) switch (v && v.name) {
						case "DatabaseClosedError":
							throw new Hr.DatabaseClosed(v);
						case "MissingAPIError":
							throw new Hr.MissingAPI(v.message, v);
						default:
							throw new Hr.OpenFailed(v)
					}
					if (!this.active) throw new Hr.TransactionInactive;
					return ur(null === this._completion._state), (e = this.idbtrans = e || _.transaction(Oi(this.storeNames), this.mode)).onerror = qo((function(n) {
						yi(n), t._reject(e.error)
					})), e.onabort = qo((function(n) {
						yi(n), t.active && t._reject(new Hr.Abort(e.error)), t.active = !1, t.on("abort").fire(n)
					})), e.oncomplete = qo((function() {
						t.active = !1, t._resolve()
					})), this
				},
				_promise: function(e, t, n) {
					var r = this;
					if (e === E && this.mode !== E) return ni(new Hr.ReadOnly("Transaction is readonly"));
					if (!this.active) return ni(new Hr.TransactionInactive);
					if (this._locked()) return new Oo((function(o, i) {
						r._blockedFuncs.push([function() {
							r._promise(e, t, n).then(o, i)
						}, yo])
					}));
					if (n) return Vo((function() {
						var e = new Oo((function(e, n) {
							r._lock();
							var o = t(e, n, r);
							o && o.then && o.then(e, n)
						}));
						return e.finally((function() {
							return r._unlock()
						})), e._lib = !0, e
					}));
					var o = new Oo((function(e, n) {
						var o = t(e, n, r);
						o && o.then && o.then(e, n)
					}));
					return o._lib = !0, o
				},
				_root: function() {
					return this.parent ? this.parent._root() : this
				},
				waitFor: function(e) {
					var t = this._root();
					if (e = Oo.resolve(e), t._waitingFor) t._waitingFor = t._waitingFor.then((function() {
						return e
					}));
					else {
						t._waitingFor = e, t._waitingQueue = [];
						var n = t.idbtrans.objectStore(t.storeNames[0]);
						! function e() {
							for (++t._spinCount; t._waitingQueue.length;) t._waitingQueue.shift()();
							t._waitingFor && (n.get(-1 / 0).onsuccess = e)
						}()
					}
					var r = t._waitingFor;
					return new Oo((function(n, o) {
						e.then((function(e) {
							return t._waitingQueue.push(qo(n.bind(null, e)))
						}), (function(e) {
							return t._waitingQueue.push(qo(o.bind(null, e)))
						})).finally((function() {
							t._waitingFor === r && (t._waitingFor = null)
						}))
					}))
				},
				abort: function() {
					this.active && this._reject(new Hr.Abort), this.active = !1
				},
				tables: {
					get: (i = "Transaction.tables", a = function() {
						return g
					}, function() {
						return console.warn(i + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + Rr(Ar(), 1)), a.apply(this, arguments)
					})
				},
				table: function(e) {
					return new D(e, O.table(e).schema, this)
				}
			}), nr(q.prototype, (function() {
				function e(e, t, n) {
					var r = e instanceof q ? new j(e) : e;
					return r._ctx.error = n ? new n(t) : new TypeError(t), r
				}

				function t(e) {
					return new j(e, (function() {
						return p.only("")
					})).limit(0)
				}

				function n(e, t, n, r, o, i) {
					for (var a = Math.min(e.length, r.length), s = -1, c = 0; c < a; ++c) {
						var l = t[c];
						if (l !== r[c]) return o(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : o(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : s >= 0 ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
						o(e[c], l) < 0 && (s = c)
					}
					return a < r.length && "next" === i ? e + n.substr(e.length) : a < e.length && "prev" === i ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1)
				}

				function r(t, r, o, i) {
					var a, s, c, l, u, d, f, h = o.length;
					if (!o.every((function(e) {
							return "string" == typeof e
						}))) return e(t, "String expected.");

					function m(e) {
						a = function(e) {
							return "next" === e ? function(e) {
								return e.toUpperCase()
							} : function(e) {
								return e.toLowerCase()
							}
						}(e), s = function(e) {
							return "next" === e ? function(e) {
								return e.toLowerCase()
							} : function(e) {
								return e.toUpperCase()
							}
						}(e), c = "next" === e ? G : $;
						var t = o.map((function(e) {
							return {
								lower: s(e),
								upper: a(e)
							}
						})).sort((function(e, t) {
							return c(e.lower, t.lower)
						}));
						l = t.map((function(e) {
							return e.upper
						})), u = t.map((function(e) {
							return e.lower
						})), d = e, f = "next" === e ? "" : i
					}
					m("next");
					var g = new j(t, (function() {
						return p.bound(l[0], u[h - 1] + i)
					}));
					g._ondirectionchange = function(e) {
						m(e)
					};
					var _ = 0;
					return g._addAlgorithm((function(e, t, o) {
						var i = e.key;
						if ("string" != typeof i) return !1;
						var a = s(i);
						if (r(a, u, _)) return !0;
						for (var p = null, m = _; m < h; ++m) {
							var g = n(i, a, l[m], u[m], c, d);
							null === g && null === p ? _ = m + 1 : (null === p || c(p, g) > 0) && (p = g)
						}
						return t(null !== p ? function() {
							e.continue(p + f)
						} : o), !1
					})), g
				}
				return {
					between: function(n, r, o, i) {
						o = !1 !== o, i = !0 === i;
						try {
							return z(n, r) > 0 || 0 === z(n, r) && (o || i) && (!o || !i) ? t(this) : new j(this, (function() {
								return p.bound(n, r, !o, !i)
							}))
						} catch (t) {
							return e(this, si)
						}
					},
					equals: function(e) {
						return new j(this, (function() {
							return p.only(e)
						}))
					},
					above: function(e) {
						return new j(this, (function() {
							return p.lowerBound(e, !0)
						}))
					},
					aboveOrEqual: function(e) {
						return new j(this, (function() {
							return p.lowerBound(e)
						}))
					},
					below: function(e) {
						return new j(this, (function() {
							return p.upperBound(e, !0)
						}))
					},
					belowOrEqual: function(e) {
						return new j(this, (function() {
							return p.upperBound(e)
						}))
					},
					startsWith: function(t) {
						return "string" != typeof t ? e(this, "String expected.") : this.between(t, t + ii, !0, !0)
					},
					startsWithIgnoreCase: function(e) {
						return "" === e ? this.startsWith(e) : r(this, (function(e, t) {
							return 0 === e.indexOf(t[0])
						}), [e], ii)
					},
					equalsIgnoreCase: function(e) {
						return r(this, (function(e, t) {
							return e === t[0]
						}), [e], "")
					},
					anyOfIgnoreCase: function() {
						var e = xr.apply(Cr, arguments);
						return 0 === e.length ? t(this) : r(this, (function(e, t) {
							return -1 !== t.indexOf(e)
						}), e, "")
					},
					startsWithAnyOfIgnoreCase: function() {
						var e = xr.apply(Cr, arguments);
						return 0 === e.length ? t(this) : r(this, (function(e, t) {
							return t.some((function(t) {
								return 0 === e.indexOf(t)
							}))
						}), e, ii)
					},
					anyOf: function() {
						var n = xr.apply(Cr, arguments),
							r = W;
						try {
							n.sort(r)
						} catch (t) {
							return e(this, si)
						}
						if (0 === n.length) return t(this);
						var o = new j(this, (function() {
							return p.bound(n[0], n[n.length - 1])
						}));
						o._ondirectionchange = function(e) {
							r = "next" === e ? W : K, n.sort(r)
						};
						var i = 0;
						return o._addAlgorithm((function(e, t, o) {
							for (var a = e.key; r(a, n[i]) > 0;)
								if (++i === n.length) return t(o), !1;
							return 0 === r(a, n[i]) || (t((function() {
								e.continue(n[i])
							})), !1)
						})), o
					},
					notEqual: function(e) {
						return this.inAnyRange([
							[-1 / 0, e],
							[e, ai]
						], {
							includeLowers: !1,
							includeUppers: !1
						})
					},
					noneOf: function() {
						var t = xr.apply(Cr, arguments);
						if (0 === t.length) return new j(this);
						try {
							t.sort(W)
						} catch (t) {
							return e(this, si)
						}
						var n = t.reduce((function(e, t) {
							return e ? e.concat([
								[e[e.length - 1][1], t]
							]) : [
								[-1 / 0, t]
							]
						}), null);
						return n.push([t[t.length - 1], ai]), this.inAnyRange(n, {
							includeLowers: !1,
							includeUppers: !1
						})
					},
					inAnyRange: function(n, r) {
						if (0 === n.length) return t(this);
						if (!n.every((function(e) {
								return void 0 !== e[0] && void 0 !== e[1] && W(e[0], e[1]) <= 0
							}))) return e(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Hr.InvalidArgument);
						var o = !r || !1 !== r.includeLowers,
							i = r && !0 === r.includeUppers;
						var a, s = W;

						function c(e, t) {
							return s(e[0], t[0])
						}
						try {
							(a = n.reduce((function(e, t) {
								for (var n = 0, r = e.length; n < r; ++n) {
									var o = e[n];
									if (z(t[0], o[1]) < 0 && z(t[1], o[0]) > 0) {
										o[0] = (i = o[0], a = t[0], z(i, a) < 0 ? i : a), o[1] = V(o[1], t[1]);
										break
									}
								}
								var i, a;
								return n === r && e.push(t), e
							}), [])).sort(c)
						} catch (t) {
							return e(this, si)
						}
						var l = 0,
							u = i ? function(e) {
								return W(e, a[l][1]) > 0
							} : function(e) {
								return W(e, a[l][1]) >= 0
							},
							d = o ? function(e) {
								return K(e, a[l][0]) > 0
							} : function(e) {
								return K(e, a[l][0]) >= 0
							};
						var f = u,
							h = new j(this, (function() {
								return p.bound(a[0][0], a[a.length - 1][1], !o, !i)
							}));
						return h._ondirectionchange = function(e) {
							"next" === e ? (f = u, s = W) : (f = d, s = K), a.sort(c)
						}, h._addAlgorithm((function(e, t, n) {
							for (var r = e.key; f(r);)
								if (++l === a.length) return t(n), !1;
							return !! function(e) {
								return !u(e) && !d(e)
							}(r) || (0 === z(r, a[l][1]) || 0 === z(r, a[l][0]) || t((function() {
								s === W ? e.continue(a[l][0]) : e.continue(a[l][1])
							})), !1)
						})), h
					},
					startsWithAnyOf: function() {
						var n = xr.apply(Cr, arguments);
						return n.every((function(e) {
							return "string" == typeof e
						})) ? 0 === n.length ? t(this) : this.inAnyRange(n.map((function(e) {
							return [e, e + ii]
						}))) : e(this, "startsWithAnyOf() only works with strings")
					}
				}
			})), nr(j.prototype, (function() {
				function e(e, t) {
					e.filter = Q(e.filter, t)
				}

				function t(e, t, n) {
					var r = e.replayFilter;
					e.replayFilter = r ? function() {
						return Q(r(), t())
					} : t, e.justLimit = n && !r
				}

				function n(e, t) {
					if (e.isPrimKey) return t;
					var n = e.table.schema.idxByName[e.index];
					if (!n) throw new Hr.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
					return t.index(n.name)
				}

				function r(e, t) {
					var r = n(e, t);
					return e.keysOnly && "openKeyCursor" in r ? r.openKeyCursor(e.range || null, e.dir + e.unique) : r.openCursor(e.range || null, e.dir + e.unique)
				}

				function i(e, t, n, o, i) {
					var a = e.replayFilter ? Q(e.filter, e.replayFilter()) : e.filter;
					e.or ? function() {
						var s = {},
							c = 0;

						function l() {
							2 == ++c && n()
						}

						function u(e, n, r) {
							if (!a || a(n, r, l, o)) {
								var i = n.primaryKey,
									c = "" + i;
								"[object ArrayBuffer]" === c && (c = "" + new Uint8Array(i)), tr(s, c) || (s[c] = !0, t(e, n, r))
							}
						}
						e.or._iterate(u, l, o, i), U(r(e, i), e.algorithm, u, l, o, !e.keysOnly && e.valueMapper)
					}() : U(r(e, i), Q(e.algorithm, a), t, n, o, !e.keysOnly && e.valueMapper)
				}
				return {
					_read: function(e, t) {
						var n = this._ctx;
						return n.error ? n.table._trans(null, ni.bind(null, n.error)) : n.table._idbstore("readonly", e).then(t)
					},
					_write: function(e) {
						var t = this._ctx;
						return t.error ? t.table._trans(null, ni.bind(null, t.error)) : t.table._idbstore(E, e, "locked")
					},
					_addAlgorithm: function(e) {
						var t = this._ctx;
						t.algorithm = Q(t.algorithm, e)
					},
					_iterate: function(e, t, n, r) {
						return i(this._ctx, e, t, n, r)
					},
					clone: function(e) {
						var t = Object.create(this.constructor.prototype),
							n = Object.create(this._ctx);
						return e && Zn(n, e), t._ctx = n, t
					},
					raw: function() {
						return this._ctx.valueMapper = null, this
					},
					each: function(e) {
						var t = this._ctx;
						return this._read((function(n, r, o) {
							i(t, e, n, r, o)
						}))
					},
					count: function(e) {
						var t = this._ctx;
						if (B(t, !0)) return this._read((function(e, r, o) {
							var i = n(t, o),
								a = t.range ? i.count(t.range) : i.count();
							a.onerror = gi(r), a.onsuccess = function(n) {
								e(Math.min(n.target.result, t.limit))
							}
						}), e);
						var r = 0;
						return this._read((function(e, n, o) {
							i(t, (function() {
								return ++r, !1
							}), (function() {
								e(r)
							}), n, o)
						}), e)
					},
					sortBy: function(e, t) {
						var n = e.split(".").reverse(),
							r = n[0],
							o = n.length - 1;

						function i(e, t) {
							return t ? i(e[n[t]], t - 1) : e[r]
						}
						var a = "next" === this._ctx.dir ? 1 : -1;

						function s(e, t) {
							var n = i(e, o),
								r = i(t, o);
							return n < r ? -a : n > r ? a : 0
						}
						return this.toArray((function(e) {
							return e.sort(s)
						})).then(t)
					},
					toArray: function(e) {
						var t = this._ctx;
						return this._read((function(e, r, a) {
							if (o && "next" === t.dir && B(t, !0) && t.limit > 0) {
								var s = t.table.hook.reading.fire,
									c = n(t, a),
									l = t.limit < 1 / 0 ? c.getAll(t.range, t.limit) : c.getAll(t.range);
								l.onerror = gi(r), l.onsuccess = _i(s === Wr ? e : function(t) {
									try {
										e(t.map(s))
									} catch (e) {
										r(e)
									}
								})
							} else {
								var u = [];
								i(t, (function(e) {
									u.push(e)
								}), (function() {
									e(u)
								}), r, a)
							}
						}), e)
					},
					offset: function(e) {
						var n = this._ctx;
						return e <= 0 || (n.offset += e, B(n) ? t(n, (function() {
							var t = e;
							return function(e, n) {
								return 0 === t || (1 === t ? (--t, !1) : (n((function() {
									e.advance(t), t = 0
								})), !1))
							}
						})) : t(n, (function() {
							var t = e;
							return function() {
								return --t < 0
							}
						}))), this
					},
					limit: function(e) {
						return this._ctx.limit = Math.min(this._ctx.limit, e), t(this._ctx, (function() {
							var t = e;
							return function(e, n, r) {
								return --t <= 0 && n(r), t >= 0
							}
						}), !0), this
					},
					until: function(t, n) {
						return e(this._ctx, (function(e, r, o) {
							return !t(e.value) || (r(o), n)
						})), this
					},
					first: function(e) {
						return this.limit(1).toArray((function(e) {
							return e[0]
						})).then(e)
					},
					last: function(e) {
						return this.reverse().first(e)
					},
					filter: function(t) {
						return e(this._ctx, (function(e) {
								return t(e.value)
							})),
							function(e, t) {
								e.isMatch = Q(e.isMatch, t)
							}(this._ctx, t), this
					},
					and: function(e) {
						return this.filter(e)
					},
					or: function(e) {
						return new q(this._ctx.table, e, this)
					},
					reverse: function() {
						return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
					},
					desc: function() {
						return this.reverse()
					},
					eachKey: function(e) {
						var t = this._ctx;
						return t.keysOnly = !t.isMatch, this.each((function(t, n) {
							e(n.key, n)
						}))
					},
					eachUniqueKey: function(e) {
						return this._ctx.unique = "unique", this.eachKey(e)
					},
					eachPrimaryKey: function(e) {
						var t = this._ctx;
						return t.keysOnly = !t.isMatch, this.each((function(t, n) {
							e(n.primaryKey, n)
						}))
					},
					keys: function(e) {
						var t = this._ctx;
						t.keysOnly = !t.isMatch;
						var n = [];
						return this.each((function(e, t) {
							n.push(t.key)
						})).then((function() {
							return n
						})).then(e)
					},
					primaryKeys: function(e) {
						var t = this._ctx;
						if (o && "next" === t.dir && B(t, !0) && t.limit > 0) return this._read((function(e, r, o) {
							var i = n(t, o),
								a = t.limit < 1 / 0 ? i.getAllKeys(t.range, t.limit) : i.getAllKeys(t.range);
							a.onerror = gi(r), a.onsuccess = _i(e)
						})).then(e);
						t.keysOnly = !t.isMatch;
						var r = [];
						return this.each((function(e, t) {
							r.push(t.primaryKey)
						})).then((function() {
							return r
						})).then(e)
					},
					uniqueKeys: function(e) {
						return this._ctx.unique = "unique", this.keys(e)
					},
					firstKey: function(e) {
						return this.limit(1).keys((function(e) {
							return e[0]
						})).then(e)
					},
					lastKey: function(e) {
						return this.reverse().firstKey(e)
					},
					distinct: function() {
						var t = this._ctx,
							n = t.index && t.table.schema.idxByName[t.index];
						if (!n || !n.multi) return this;
						var r = {};
						return e(this._ctx, (function(e) {
							var t = e.primaryKey.toString(),
								n = tr(r, t);
							return r[t] = !0, !n
						})), this
					},
					modify: function(e) {
						var t = this,
							n = this._ctx.table.hook,
							r = n.updating.fire,
							o = n.deleting.fire;
						return this._write((function(n, i, a, s) {
							var c;
							if ("function" == typeof e) c = r === Vr && o === Vr ? e : function(t) {
								var n = br(t);
								if (!1 === e.call(this, t, this)) return !1;
								if (tr(this, "value")) {
									var i = Er(n, this.value),
										a = r.call(this, i, this.primKey, n, s);
									a && (t = this.value, Qn(a).forEach((function(e) {
										gr(t, e, a[e])
									})))
								} else o.call(this, this.primKey, t, s)
							};
							else if (r === Vr) {
								var l = Qn(e),
									u = l.length;
								c = function(t) {
									for (var n = !1, r = 0; r < u; ++r) {
										var o = l[r],
											i = e[o];
										mr(t, o) !== i && (gr(t, o, i), n = !0)
									}
									return n
								}
							} else {
								var d = e;
								e = _r(d), c = function(t) {
									var n = !1,
										o = r.call(this, e, this.primKey, br(t), s);
									return o && Zn(e, o), Qn(e).forEach((function(r) {
										var o = e[r];
										mr(t, r) !== o && (gr(t, r, o), n = !0)
									})), o && (e = _r(d)), n
								}
							}
							var p = 0,
								f = 0,
								h = !1,
								m = [],
								g = [],
								_ = null;

							function v(e) {
								return e && (m.push(e), g.push(_)), i(new qr("Error modifying one or more objects", m, f, g))
							}

							function y() {
								h && f + m.length === p && (m.length > 0 ? v() : n(f))
							}
							t.clone().raw()._iterate((function(e, t) {
								_ = t.primaryKey;
								var n = {
									primKey: t.primaryKey,
									value: e,
									onsuccess: null,
									onerror: null
								};

								function r(e) {
									return m.push(e), g.push(n.primKey), y(), !0
								}
								if (!1 !== c.call(n, e, n)) {
									var o = !tr(n, "value");
									++p, hr((function() {
										var e = o ? t.delete() : t.update(n.value);
										e._hookCtx = n, e.onerror = vi(r), e.onsuccess = mi((function() {
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
						var e = this,
							t = this._ctx,
							n = t.range,
							r = t.table.hook.deleting.fire,
							o = r !== Vr;
						if (!o && B(t) && (t.isPrimKey && !di || !n)) return this._write((function(e, t, r) {
							var o = gi(t),
								i = n ? r.count(n) : r.count();
							i.onerror = o, i.onsuccess = function() {
								var a = i.result;
								hr((function() {
									var t = n ? r.delete(n) : r.clear();
									t.onerror = o, t.onsuccess = function() {
										return e(a)
									}
								}), (function(e) {
									return t(e)
								}))
							}
						}));
						var i = o ? 2e3 : 1e4;
						return this._write((function(n, a, s, c) {
							var l = 0,
								u = e.clone({
									keysOnly: !t.isMatch && !o
								}).distinct().limit(i).raw(),
								d = [],
								p = function() {
									return u.each(o ? function(e, t) {
										d.push([t.primaryKey, t.value])
									} : function(e, t) {
										d.push(t.primaryKey)
									}).then((function() {
										return o ? d.sort((function(e, t) {
											return W(e[0], t[0])
										})) : d.sort(W), I(s, c, d, o, r)
									})).then((function() {
										var e = d.length;
										return l += e, d = [], e < i ? l : p()
									}))
								};
							n(p())
						}))
					}
				}
			})), Zn(this, {
				Collection: j,
				Table: D,
				Transaction: M,
				Version: T,
				WhereClause: q
			}), O.on("versionchange", (function(e) {
				e.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + O.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + O.name + "'. Closing db now to resume the delete request."), O.close()
			})), O.on("blocked", (function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('" + O.name + "') was blocked") : console.warn("Upgrade '" + O.name + "' blocked by other connection holding version " + e.oldVersion / 10)
			})), l.forEach((function(e) {
				e(O)
			}))
		}

		function hi(e, t) {
			return Qn(t).forEach((function(n) {
				var r = function e(t) {
					if ("function" == typeof t) return new t;
					if (Yn(t)) return [e(t[0])];
					if (t && "object" == typeof t) {
						var n = {};
						return hi(n, t), n
					}
					return t
				}(t[n]);
				e[n] = r
			})), e
		}

		function mi(e) {
			return qo((function(t) {
				var n = t.target,
					r = n._hookCtx,
					o = r.value || n.result,
					i = r && r.onsuccess;
				i && i(o), e && e(o)
			}), e)
		}

		function gi(e) {
			return qo((function(t) {
				return yi(t), e(t.target.error), !1
			}))
		}

		function _i(e) {
			return qo((function(t) {
				e(t.target.result)
			}))
		}

		function vi(e) {
			return qo((function(t) {
				var n = t.target,
					r = n.error,
					o = n._hookCtx,
					i = o && o.onerror;
				return i && i(r), yi(t), e(r), !1
			}))
		}

		function yi(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
		}

		function wi(e) {
			var t = function(t) {
					return e.next(t)
				},
				n = o(t),
				r = o((function(t) {
					return e.throw(t)
				}));

			function o(e) {
				return function(t) {
					var o = e(t),
						i = o.value;
					return o.done ? i : i && "function" == typeof i.then ? i.then(n, r) : Yn(i) ? Oo.all(i).then(n, r) : n(i)
				}
			}
			return o(t)()
		}

		function bi(e, t, n, r, o, i, a) {
			this.name = e, this.keyPath = t, this.unique = n, this.multi = r, this.auto = o, this.compound = i, this.dotted = a;
			var s = "string" == typeof t ? t : t && "[" + [].join.call(t, "+") + "]";
			this.src = (n ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + s
		}

		function Ei(e, t, n, r) {
			this.name = e, this.primKey = t || new bi, this.indexes = n || [new bi], this.instanceTemplate = r, this.mappedClass = null, this.idxByName = pr(n, (function(e) {
				return [e.name, e]
			}))
		}

		function Oi(e) {
			return 1 === e.length ? e[0] : e
		}

		function Si(e) {
			var t = e && (e.getDatabaseNames || e.webkitGetDatabaseNames);
			return t && t.bind(e)
		}
		Tr(Pr, pi), nr(fi, zr), nr(fi, {
				delete: function(e) {
					var t = new fi(e),
						n = t.delete();
					return n.onblocked = function(e) {
						return t.on("blocked", e), this
					}, n
				},
				exists: function(e) {
					return new fi(e).open().then((function(e) {
						return e.close(), !0
					})).catch(fi.NoSuchDatabaseError, (function() {
						return !1
					}))
				},
				getDatabaseNames: function(e) {
					var t = Si(fi.dependencies.indexedDB);
					return t ? new Oo((function(e, n) {
						var r = t();
						r.onsuccess = function(t) {
							e(cr(t.target.result, 0))
						}, r.onerror = gi(n)
					})).then(e) : oi.dbnames.toCollection().primaryKeys(e)
				},
				defineClass: function() {
					return function(e) {
						e && Zn(this, e)
					}
				},
				applyStructure: hi,
				ignoreTransaction: function(e) {
					return yo.trans ? Zo(yo.transless, e) : e()
				},
				vip: function(e) {
					return Vo((function() {
						return yo.letThrough = !0, e()
					}))
				},
				async: function(e) {
					return function() {
						try {
							var t = wi(e.apply(this, arguments));
							return t && "function" == typeof t.then ? t : Oo.resolve(t)
						} catch (e) {
							return ni(e)
						}
					}
				},
				spawn: function(e, t, n) {
					try {
						var r = wi(e.apply(n, t || []));
						return r && "function" == typeof r.then ? r : Oo.resolve(r)
					} catch (e) {
						return ni(e)
					}
				},
				currentTransaction: {
					get: function() {
						return yo.trans || null
					}
				},
				waitFor: function(e, t) {
					var n = Oo.resolve("function" == typeof e ? fi.ignoreTransaction(e) : e).timeout(t || 6e4);
					return yo.trans ? yo.trans.waitFor(n) : n
				},
				Promise: Oo,
				debug: {
					get: function() {
						return Pr
					},
					set: function(e) {
						Tr(e, "dexie" === e ? function() {
							return !0
						} : pi)
					}
				},
				derive: ir,
				extend: Zn,
				props: nr,
				override: lr,
				Events: ri,
				getByKeyPath: mr,
				setByKeyPath: gr,
				delByKeyPath: function(e, t) {
					"string" == typeof t ? gr(e, t, void 0) : "length" in t && [].map.call(t, (function(t) {
						gr(e, t, void 0)
					}))
				},
				shallowClone: _r,
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
							indexedDB: Jn.indexedDB || Jn.mozIndexedDB || Jn.webkitIndexedDB || Jn.msIndexedDB,
							IDBKeyRange: Jn.IDBKeyRange || Jn.webkitIDBKeyRange
						}
					} catch (e) {
						return {
							indexedDB: null,
							IDBKeyRange: null
						}
					}
				}(),
				semVer: "{version}",
				version: "{version}".split(".").map((function(e) {
					return parseInt(e)
				})).reduce((function(e, t, n) {
					return e + t / Math.pow(10, 2 * n)
				})),
				default: fi,
				Dexie: fi
			}), Oo.rejectionMapper = function(e, t) {
				if (!e || e instanceof Mr || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Ur[e.name]) return e;
				var n = new Ur[e.name](t || e.message, e);
				return "stack" in e && or(n, "stack", {
					get: function() {
						return this.inner.stack
					}
				}), n
			}, (oi = new fi("__dbnames")).version(1).stores({
				dbnames: "name"
			}),
			function() {
				try {
					void 0 !== typeof localStorage && void 0 !== Jn.document && (JSON.parse(localStorage.getItem("Dexie.DatabaseNames") || "[]").forEach((function(e) {
						return oi.dbnames.put({
							name: e
						}).catch(Vr)
					})), localStorage.removeItem("Dexie.DatabaseNames"))
				} catch (e) {}
			}();
		var Ci = new fi("ddwcpos");
		Ci.version(1).stores((0, Ie.applyFilters)("ddwcpos_modify_database_tables", {
			temp: "id",
			outlet: "id",
			customers: "id, first_name, last_name, username, email, phone",
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
		})), (0, Ie.applyFilters)("ddwcpos_modify_database", Ci), Ci.temp.put({
			id: 0
		}).then((function() {
			return Ci.temp.get(0)
		})).then((function(e) {})).catch((function(e) {
			alert("Ooops: " + e)
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
		var Ti = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Pi
			}))
		};
		Ti.displayName = "RedoOutlined";
		const ki = n.forwardRef(Ti);
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
		var Ai = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ni
			}))
		};
		Ai.displayName = "SwapOutlined";
		const Ri = n.forwardRef(Ai);
		var Di = function e(t, n) {
				n.cashier_id = ddwcposPOSObj.user.ID;
				var r = document.querySelector(".ddwcpos-progress-bar");
				return r && r.classList.contains("ddwcpos-progress-bar") && (r.style.display = "block"), new Promise((function(o, i) {
					navigator.onLine ? fetch(t, {
						method: "POST",
						headers: new Headers({
							"Content-Type": "application/json",
							Accept: "application/json"
						}),
						body: JSON.stringify(n)
					}).then((function(e) {
						return e.json()
					})).then((function(i) {
						Object.keys(i).length > 0 && (!1 === i.success && 401 === i.status ? e(t, n).then((function(e) {
							o(e)
						})) : o(i)), r && r.classList.contains("ddwcpos-progress-bar") && (r.style.display = "none"), o(i)
					})).catch((function(e) {
						console.error(e), o([])
					})) : o([])
				}))
			},
			Li = function() {
				return function(e) {
					xi.table("settings").toArray().then((function(t) {
						var n = {
							id: 0,
							printer_width: ddwcposPOSObj.ddwcpos_configuration.printer_width,
							printer_height: ddwcposPOSObj.ddwcpos_configuration.printer_height,
							printer_margin: ddwcposPOSObj.ddwcpos_configuration.printer_margin
						};
						t.length && (n = t[0]), e(function(e) {
							return {
								type: "SETTINGS",
								settings: e
							}
						}(n))
					}))
				}
			},
			Ii = function(e) {
				return function(t) {
					xi.table("settings").toArray().then((function(n) {
						n.length ? xi.table("settings").where("id").equals(n[0].id).modify(e).then((function(e) {
							t(Li())
						})) : xi.table("settings").put(e).then((function(e) {
							t(Li())
						}))
					}))
				}
			},
			Mi = function(e) {
				return function() {
					return new Promise((function(t, n) {
						Di(ddwcposPOSObj.API.SAVE_CASHIER_ENDPOINT, {
							cashier_data: e
						}).then((function(e) {
							e.success ? ht.store.addNotification({
								title: (0, ft.__)("Success", "ddwc-multipos"),
								message: e.message,
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : ht.store.addNotification({
								title: (0, ft.__)("Error", "ddwc-multipos"),
								message: e.message,
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
			qi = function(e) {
				return {
					type: "OUTLET",
					outlet: e
				}
			},
			ji = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(t) {
					return new Promise((function(n, r) {
						return xi.table("outlet").toArray().then((function(r) {
							if (e) {
								var o = ddwcposPOSObj.assignedOutlets,
									i = (o = o.filter((function(t) {
										return t.id == e
									}))).map((function(e) {
										return e.inventory_type || (e.inventory_type = ddwcposPOSObj.ddwcpos_configuration.inventory_type), e
									}))[0];
								return xi.table("outlet").put(i).then((function(e) {
									t(qi(i)), n(i)
								}))
							}
							r.length > 0 ? (t(qi(r[0])), n(r[0])) : (t(qi({})), n({}))
						}))
					}))
				}
			};

		function Bi(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Fi = function(e) {
			lt(r, e);
			var n = Bi(r);

			function r(e) {
				var t;
				return at(this, r), (t = n.call(this, e)).componentDidMount = function() {
					t.props.getSettings()
				}, t.handleChangeSettings = function(e, n) {
					var r = t.props.settings;
					r[n] = e.target.value, t.props.saveSettings(r)
				}, t.handleResetOutlet = function() {
					navigator.onLine ? (ht.store.addNotification({
						title: (0, ft.__)("Resetting", "ddwc-multipos"),
						message: (0, ft.__)("Resetting outlet data.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), t.props.setCurrentOutlet(t.props.outlet.id), localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(e) {
						xi.table("customers").clear().then((function(e) {
							xi.table("cart").clear().then((function(e) {
								xi.table("transactions").clear().then((function(e) {
									xi.table("discount").clear().then((function(e) {
										xi.table("coupon").clear().then((function(e) {
											xi.table("products").clear().then((function(e) {
												xi.table("taxes").clear().then((function(e) {
													xi.table("categories").clear().then((function(e) {
														xi.table("countries_and_states").clear().then((function(e) {
															xi.table("tables").clear().then((function(e) {
																xi.table("settings").clear().then((function(e) {
																	xi.table("orders").where("order_type").equals("online").delete().then((function(e) {
																		t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
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
					})), (0, Ie.doAction)("ddwcpos_after_deleting_index_db", f(t))) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Resetting cannot be done in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleSwitchOutlet = function() {
					navigator.onLine ? (ht.store.addNotification({
						title: (0, ft.__)("Switching", "ddwc-multipos"),
						message: (0, ft.__)("Switching outlet...", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(e) {
						xi.table("outlet").clear().then((function(e) {
							xi.table("customers").clear().then((function(e) {
								xi.table("cart").clear().then((function(e) {
									xi.table("transactions").clear().then((function(e) {
										xi.table("discount").clear().then((function(e) {
											xi.table("coupon").clear().then((function(e) {
												xi.table("products").clear().then((function(e) {
													xi.table("taxes").clear().then((function(e) {
														xi.table("categories").clear().then((function(e) {
															xi.table("countries_and_states").clear().then((function(e) {
																xi.table("tables").clear().then((function(e) {
																	xi.table("settings").clear().then((function(e) {
																		xi.table("orders").where("order_type").equals("online").delete().then((function(e) {
																			t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
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
					})), (0, Ie.doAction)("ddwcpos_after_deleting_index_db", f(t))) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Switching outlet cannot be done in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.state = {
					page_width: "",
					page_height: "",
					page_margin: ""
				}, t
			}
			return ct(r, [{
				key: "render",
				value: function() {
					var e = this;
					return (0, t.createElement)("div", {
						className: "ddwcpos-account-settings-wrapper"
					}, (0, t.createElement)("h2", null, (0, ft.__)("Outlet Settings", "ddwc-multipos")), (0, t.createElement)("form", null, (0, t.createElement)("label", null, (0, ft.__)("Display Category Cards", "ddwc-multipos"), (0, t.createElement)("select", {
						value: this.props.settings.display_category,
						onChange: function(t) {
							return e.handleChangeSettings(t, "display_category")
						}
					}, (0, t.createElement)("option", {
						value: "enabled"
					}, (0, ft.__)("Enabled", "ddwc-multipos")), (0, t.createElement)("option", {
						value: "disabled"
					}, (0, ft.__)("Disabled", "ddwc-multipos")))), (0, t.createElement)("label", null, (0, ft.__)("Enable Sounds", "ddwc-multipos"), (0, t.createElement)("select", {
						value: this.props.settings.sounds,
						onChange: function(t) {
							return e.handleChangeSettings(t, "sounds")
						}
					}, (0, t.createElement)("option", {
						value: "enabled"
					}, (0, ft.__)("Enabled", "ddwc-multipos")), (0, t.createElement)("option", {
						value: "disabled"
					}, (0, ft.__)("Disabled", "ddwc-multipos")))), (0, t.createElement)("label", null, (0, ft.__)("Page Width (in mm)", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_width,
						onChange: function(t) {
							return e.handleChangeSettings(t, "printer_width")
						}
					})), (0, t.createElement)("label", null, (0, ft.__)("Page Height (in mm)", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_height,
						onChange: function(t) {
							return e.handleChangeSettings(t, "printer_height")
						}
					})), (0, t.createElement)("label", null, (0, ft.__)("Page Margin (in mm)", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "text",
						defaultValue: this.props.settings.printer_margin,
						onChange: function(t) {
							return e.handleChangeSettings(t, "printer_margin")
						}
					})), (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("Reset Outlet Data", "ddwc-multipos")), (0, t.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.handleResetOutlet
					}, (0, t.createElement)(ki, null), (0, ft.__)("Reset", "ddwc-multipos"))), (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("Switch Outlet", "ddwc-multipos")), (0, t.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.handleSwitchOutlet
					}, (0, t.createElement)(Ri, null), (0, ft.__)("Switch", "ddwc-multipos")))))
				}
			}]), r
		}(n.Component);
		const Hi = q((function(e) {
			return {
				settings: e.settings,
				outlet: e.outlet
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getSettings: Li,
				saveSettings: Ii,
				setCurrentOutlet: ji
			}, e))
		}))(Fi);

		function Ui(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var zi = function(e) {
			lt(i, e);
			var o = Ui(i);

			function i(e) {
				var t;
				return at(this, i), (t = o.call(this, e)).handleLogout = function(e) {
					t.props.orders.sorder.filter((function(e) {
						return "offline" == e.order_type
					})).length ? (e.preventDefault(), ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("There are offline orders present in the POS, kindly sync them first.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})) : (confirm((0, ft.__)("Do you want to delete the outlet data from the browser? It will load the latest one when you login.", "ddwc-multipos")) && (localStorage.removeItem("ddwcposLicenseCheck"), xi.table("temp").clear().then((function(e) {
						xi.table("outlet").clear().then((function(e) {
							xi.table("customers").clear().then((function(e) {
								xi.table("cart").clear().then((function(e) {
									xi.table("transactions").clear().then((function(e) {
										xi.table("discount").clear().then((function(e) {
											xi.table("coupon").clear().then((function(e) {
												xi.table("products").clear().then((function(e) {
													xi.table("taxes").clear().then((function(e) {
														xi.table("categories").clear().then((function(e) {
															xi.table("countries_and_states").clear().then((function(e) {
																xi.table("tables").clear().then((function(e) {
																	xi.table("settings").clear().then((function(e) {
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
					})), (0, Ie.doAction)("ddwcpos_after_deleting_index_db", f(t))), (0, Ie.doAction)("ddwcpos_before_logout", f(t)))
				}, t.handleMenuCollapse = function() {
					var e = document.querySelector(".ddwcpos-menu-container"),
						t = document.querySelector(".ddwcpos-popup-overlay");
					e.classList.contains("ddwcpos-menu-open") ? (e.classList.remove("ddwcpos-menu-open"), t.classList.add("ddwcpos-hide")) : (e.classList.add("ddwcpos-menu-open"), t.classList.remove("ddwcpos-hide"))
				}, t
			}
			return ct(i, [{
				key: "getMenus",
				value: function() {
					var e = "ddwcpos-menu-card",
						n = "ddwcpos-menu-card",
						r = "ddwcpos-menu-card",
						o = "ddwcpos-menu-card",
						i = "ddwcpos-menu-card",
						a = "ddwcpos-menu-card",
						s = "ddwcpos-menu-card";
					if (null != this.props.page.name) switch (this.props.page.name) {
						case "Home":
						case "Category":
							e += " ddwcpos-menu-active";
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
							classname: e,
							icon_component: Pn,
							mode: "grocery",
							text: (0, ft.__)("Home", "ddwc-multipos")
						}, {
							id: "cart",
							to: "".concat(c, "/cart"),
							classname: n,
							icon_component: Nn,
							mode: "grocery",
							text: (0, ft.__)("Cart", "ddwc-multipos")
						}, {
							id: "customers",
							to: "".concat(c, "/customers"),
							classname: r,
							icon_component: Dn,
							mode: "grocery",
							text: (0, ft.__)("Customers", "ddwc-multipos")
						}, {
							id: "tables",
							to: "".concat(c, "/tables/all"),
							classname: a,
							icon_component_jsx: !0,
							icon_component: (0, t.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, t.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, t.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, t.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))),
							mode: "restaurant",
							text: (0, ft.__)("Tables", "ddwc-multipos")
						}, {
							id: "orders",
							to: "".concat(c, "/orders/online"),
							classname: i,
							icon_component: Mn,
							mode: "grocery",
							text: (0, ft.__)("Orders", "ddwc-multipos")
						}, {
							id: "statistics",
							to: "".concat(c, "/statistics"),
							classname: o,
							icon_component: Bn,
							mode: "grocery",
							text: (0, ft.__)("Statistics", "ddwc-multipos")
						}, {
							id: "settings",
							to: "".concat(c, "/settings"),
							classname: s,
							icon_component: Un,
							mode: "grocery",
							text: (0, ft.__)("Settings", "ddwc-multipos")
						}];
					return (0, Ie.applyFilters)("ddwcpos_menus_list", l, this)
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						o = this.getMenus().map((function(n) {
							if (("restaurant" == e.props.outlet.mode || "grocery" == e.props.outlet.mode && "grocery" == n.mode || (0, Ie.applyFilters)("ddwcpos_add_menu_with_outlet_mode", !1, n, e)) && ("cart" !== n.id || "cart" == n.id && window.screen.width < 720)) return (0, t.createElement)(bt, {
								className: n.classname,
								key: n.to,
								to: n.to
							}, n.icon_component_jsx ? n.icon_component : r().createElement(n.icon_component), n.text)
						}));
					return (0, t.createElement)(n.Fragment, null, window.screen.width < 720 ? (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
						className: "ddwcpos-collapse-icon-wrapper"
					}, (0, t.createElement)("span", {
						className: "ddwcpos-collapse-icon",
						onClick: this.handleMenuCollapse
					}, (0, t.createElement)(Wn, null)))) : null, (0, t.createElement)("div", {
						className: "ddwcpos-popup-overlay ddwcpos-hide",
						onClick: this.handleMenuCollapse
					}), (0, t.createElement)("div", {
						className: "ddwcpos-menu-container"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-menu-logo"
					}, (0, t.createElement)("img", {
						alt: (0, ft.__)("POS Logo", "ddwc-multipos"),
						src: ddwcposPOSObj.ddwcpos_configuration.logo_url,
						width: "80",
						height: "80"
					})), (0, t.createElement)("nav", null, o, (0, t.createElement)("a", {
						className: "ddwcpos-menu-card",
						href: ddwcposPOSObj.logout_url,
						onClick: function(t) {
							return e.handleLogout(t)
						}
					}, (0, t.createElement)($n, null), (0, ft.__)("Logout", "ddwc-multipos")))))
				}
			}]), i
		}(n.Component);
		const Vi = q((function(e) {
			return {
				orders: e.orders
			}
		}), null)(zi);
		const Wi = {
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
		var Ki = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Wi
			}))
		};
		Ki.displayName = "WifiOutlined";
		const Gi = n.forwardRef(Ki);
		const $i = {
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
		var Qi = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: $i
			}))
		};
		Qi.displayName = "SyncOutlined";
		const Yi = n.forwardRef(Qi);
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
		var Zi = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ji
			}))
		};
		Zi.displayName = "EditFilled";
		const Xi = n.forwardRef(Zi);
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
		var ta = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: ea
			}))
		};
		ta.displayName = "UserOutlined";
		const na = n.forwardRef(ta);
		const ra = {
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
		var oa = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: ra
			}))
		};
		oa.displayName = "PauseOutlined";
		const ia = n.forwardRef(oa);

		function aa(e) {
			return function(e) {
				if (Array.isArray(e)) return Ct(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}(e) || xt(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		var sa = function(e) {
				return {
					type: "COUPON",
					coupon: e
				}
			},
			ca = function() {
				return function(e) {
					la().then((function(t) {
						e(sa(t))
					}))
				}
			},
			la = function() {
				return new Promise((function(e, t) {
					return xi.table("coupon").toArray().then((function(t) {
						e(t)
					}))
				}))
			},
			ua = function(e) {
				return function(t, n) {
					var r = n().cart.list[0].id;
					la().then((function(n) {
						if (!(n.length > 0)) {
							var o = {
								id: r,
								cart_id: r,
								coupon: [e]
							};
							return xi.table("coupon").put(o).then((function(e) {
								ht.store.addNotification({
									title: (0, ft.__)("Coupon Applied", "ddwc-multipos"),
									message: (0, ft.__)("Coupon is applied successfully in the cart.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								}), t(sa([o])), t(_a())
							}))
						}
						if (0 == n[0].coupon.filter((function(t) {
								return e.code == t.code
							})).length) return n[0].coupon.push(e), xi.table("coupon").where("cart_id").equals(r).modify({
							coupon: n[0].coupon
						}).then((function(e) {
							e && (ht.store.addNotification({
								title: (0, ft.__)("Coupon Applied", "ddwc-multipos"),
								message: (0, ft.__)("Coupon is applied successfully in the cart.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), t(sa(n)), t(_a()))
						}));
						ht.store.addNotification({
							title: (0, ft.__)("Coupon Error", "ddwc-multipos"),
							message: (0, ft.__)("Coupon is already applied in the cart.", "ddwc-multipos"),
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
			da = function(e) {
				return function(t, n) {
					var r = n().cart.list[0].id;
					la().then((function(n) {
						if (n.length > 0) {
							var o = n[0].coupon.filter((function(t) {
								return t.code != e
							}));
							return xi.table("coupon").where("cart_id").equals(r).modify({
								coupon: o
							}).then((function(e) {
								e && (n[0].coupon = o, t(sa(n)), t(_a()), ht.store.addNotification({
									title: (0, ft.__)("Coupon Removed", "ddwc-multipos"),
									message: (0, ft.__)("Coupon is successfully removed from the cart.", "ddwc-multipos"),
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
			pa = function(e) {
				return {
					type: "CART",
					cart: e
				}
			},
			fa = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				if (t) {
					var n = Math.pow(10, t);
					return Math.round(e * n) / n
				}
				return Math.round(e)
			},
			ha = function(e) {
				return function(t) {
					var n = {
						cart_data: JSON.stringify(e)
					};
					return new Promise((function(e, t) {
						Di(ddwcposPOSObj.API.CHECK_CENTRALIZED_STOCK_ENDPOINT, n).then((function(t) {
							null != t.out_of_stock_products && e(t)
						}))
					}))
				}
			},
			ma = function(e) {
				return function(t, n) {
					Oa(e).then((function(e) {
						e && ba().then((function(e) {
							if (e) var r = {
								list: e,
								total: Pa(e, n(), t)
							};
							else r = {
								list: [],
								total: xa()
							};
							t(pa(r))
						}))
					}))
				}
			},
			ga = function() {
				return function(e, t) {
					var n = t().cart.list[0].id;
					return new Promise((function(e, t) {
						xi.cart.where("id").equals(n).delete().then((function(t) {
							xi.coupon.where("cart_id").equals(n).delete().then((function(t) {
								xi.discount.where("cart_id").equals(n).delete().then((function(t) {
									e(!0)
								}))
							}))
						}))
					}))
				}
			},
			_a = function() {
				return function(e, t) {
					ba().then((function(n) {
						if (n.length) var r = {
							list: n,
							total: Pa(n, t(), e)
						};
						else r = {
							list: [],
							total: xa()
						};
						e(pa(r))
					}))
				}
			},
			va = function(e) {
				return function(t, n) {
					return new Promise((function(t, n) {
						xi.table("products").where("barcode_init").equals(e).toArray().then((function(e) {
							e.length ? t(e[0]) : t({})
						}))
					}))
				}
			},
			ya = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
					o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
				return function(i, a) {
					if (n) {
						var s = {
							image: '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />'),
							regular_price: e.price,
							product_id: "custom_" + Math.floor(999 * Math.random()) + 100,
							sale_price: e.price,
							onsale: !1,
							stock: 999999999,
							tax: e.tax,
							tax_label: ddwcposPOSObj.ddwcpos_configuration.tax_label,
							title: e.title,
							type: "custom",
							parent: 0,
							categories: []
						};
						ba().then((function(e) {
							var n = wa(e.length > 0 ? e : [], s, t, !0, r, o);
							n && ba().then((function(e) {
								if (e) var r = {
									list: e,
									total: Pa(e, a(), i)
								};
								else r = {
									list: [],
									total: xa()
								};
								(0, Ie.doAction)("ddwcpos_after_adding_product_to_cart", r, n, t, a()), i(pa(r));
								var o = a().settings;
								o.sounds && "enabled" != o.sounds || new Audio("".concat(ddwcposPOSObj.plugin_url, "/assets/audio/add-to-cart.mp3")).play()
							}))
						}))
					} else xi.table("products").where("product_id").equals(e).and((function(e) {
						return e.stock > 0
					})).toArray().then((function(e) {
						if (e.length > 0) {
							var n = e[0];
							ba().then((function(e) {
								var s = wa(e.length > 0 ? e : [], n, t, !1, r, o);
								s && ba().then((function(e) {
									if (e) var n = {
										list: e,
										total: Pa(e, a(), i)
									};
									else n = {
										list: [],
										total: xa()
									};
									(0, Ie.doAction)("ddwcpos_after_adding_product_to_cart", n, s, t, a()), i(pa(n));
									var r = a().settings;
									r.sounds && "enabled" != r.sounds || new Audio("".concat(ddwcposPOSObj.plugin_url, "/assets/audio/add-to-cart.mp3")).play()
								}))
							}))
						} else ht.store.addNotification({
							title: (0, ft.__)("Stock Error", "ddwc-multipos"),
							message: (0, ft.__)("No stock available for this product.", "ddwc-multipos"),
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
			};

		function wa(e, t, n, r) {
			var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
				i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
				a = t.regular_price,
				s = t.regular_price,
				c = t.sale_price,
				l = [],
				u = t.stock,
				d = t.tax,
				p = t.product_id,
				f = !1,
				h = t.title,
				m = 0,
				g = t.weight,
				_ = 0,
				v = e.length ? e[0].id : 0,
				y = !1;
			if (t.attributes && Object.keys(t.attributes).length)
				for (var w in t.attributes) t.attributes.hasOwnProperty(w) && (t.attributes[w] || (y = !0));
			if (y && Object.keys(i).length && (h += " - ", h += Object.values(i).join(", ")), o && (a -= (_ = 100 * (g - (m = parseFloat(o))) / g) * a / 100, d -= _ * d / 100, h += " - " + m + ddwcposPOSObj.weight_unit), (l = e.length ? aa(e[0].cart) : []).length > 0)
				for (var b = 0; b < Object.keys(l).length; b++)
					if (o == l[b].boughtWeight && l[b].name == h && l[b].product_id == p && (0, Ie.applyFilters)("ddwcpos_product_quantity_update_check_on_add_to_cart", !0, l[b])) {
						if (u < l[b].quantity + n && -1 != u) return ht.store.addNotification({
							title: (0, ft.__)("Stock Error", "ddwc-multipos"),
							message: (0, ft.__)("No stock available for this product.", "ddwc-multipos"),
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
				if (u < n && -1 != u) return ht.store.addNotification({
					title: (0, ft.__)("Stock Error", "ddwc-multipos"),
					message: (0, ft.__)("No stock available for this product.", "ddwc-multipos"),
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
					id: t.product_id,
					sku: t.sku,
					slug: t.slug,
					categories: t.categories,
					image: t.image,
					product_id: t.product_id,
					parent: t.parent,
					name: h,
					stock: u,
					special: c,
					quantity: n,
					price: s,
					onsale: t.onsale,
					originalTax: t.tax,
					tax: d,
					tax_label: t.tax_label,
					total: S,
					uf: a,
					weight: t.weight ? t.weight : 0,
					length: t.length ? t.length : 0,
					width: t.width ? t.width : 0,
					height: t.height ? t.height : 0,
					boughtWeight: m,
					uf_total: S,
					custom: r,
					type: t.type,
					attributes: i
				};
				E = (0, Ie.applyFilters)("ddwcpos_modify_cart_product_data_before_add", E, t);
				O = {
					id: v,
					active_cart: 1,
					cart: l.concat(E)
				}
			}
			return xi.cart.put(O).catch("DataError", (function(e) {
				console.error("Data error: " + e.message)
			})).catch(Error, (function(e) {
				console.error("Error: " + e.message)
			})).catch((function(e) {
				console.error(e)
			})), E
		}
		var ba = function() {
				return xi.table("cart").where("active_cart").equals(1).toArray()
			},
			Ea = function(e) {
				return function(t, n) {
					ba().then((function(r) {
						if (r && null != r[0].cart) {
							var o = r[0].id,
								i = r[0].cart.filter((function(t) {
									return !((0, Ie.applyFilters)("ddwcpos_custom_check_for_delete_cart_product", !0, e, t) && t.product_id == e.product_id && e.boughtWeight == t.boughtWeight && e.name == t.name)
								}));
							i && Oa(i).then((function(e) {
								e && ba().then((function(e) {
									var r = n();
									if (e[0].cart.length) var i = {
										list: e,
										total: Pa(e, r, t)
									};
									else {
										null != r.discount.length && r.discount.length > 0 && r.discount.forEach((function(e) {
											o == e.cart_id && (r.discount.pop(), xi.table("discount").where("id").equals(o).delete())
										}));
										i = {
											list: [],
											total: xa()
										}
									}
									t(pa(i))
								}))
							}))
						}
					}))
				}
			},
			Oa = function(e) {
				return xi.table("cart").where("active_cart").equals(1).modify({
					cart: e
				})
			},
			Sa = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
					o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
					i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
				return function(a, s) {
					ba().then((function(c) {
						var l = Ca(c.length ? c : [], e, t, n, r, o, i);
						if (l = [l]) var u = {
							list: l,
							total: Pa(l, s(), a)
						};
						else u = {
							list: l,
							total: xa()
						};
						a(pa(u))
					}))
				}
			};

		function Ca(e, t, n, r, o, i, a) {
			for (var s = Object.keys(e[0].cart).length, c = e[0].cart, l = 0, u = 0, d = e[0].id, p = 0; p < s; p++) {
				if (1 == c[p].custom && t == c[p].product_id) {
					c[p].quantity = n, r && (c[p].uf = r), c[p].uf_total = parseFloat(c[p].quantity * c[p].uf), l = 100 * (c[p].special - c[p].uf) / c[p].special, u = parseFloat(c[p].originalTax), u -= l * u / 100, c[p].price = c[p].uf - u, c[p].tax = c[p].quantity * u, c[p].total = c[p].uf_total;
					break
				}
				a == c[p].boughtWeight && t == c[p].product_id && o == c[p].name && (0, Ie.applyFilters)("ddwcpos_product_quantity_update_check_on_cart_update", !0, c[p], i, f) && (u = parseFloat(c[p].originalTax), r && (c[p].uf = r), u -= (l = 100 * (c[p].special - c[p].uf) / c[p].special) * u / 100, c[p].quantity = n, c[p].tax = c[p].quantity * u, c[p].uf_total = parseFloat(c[p].quantity * c[p].uf), c[p].total = c[p].uf_total)
			}
			var f = {
				id: d,
				active_cart: 1,
				cart: c
			};
			return xi.cart.put(f).catch("DataError", (function(e) {
				console.error("Data error: " + e.message)
			})).catch(Error, (function(e) {
				console.error("Error: " + e.message)
			})).catch((function(e) {
				console.error(e)
			})), f
		}
		var xa = function() {
				return {
					cart_subtotal: 0,
					tax_total: 0,
					total_discount: 0,
					cart_total: 0
				}
			},
			Pa = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = e || t.cart.list,
					o = t.discount,
					i = t.taxes,
					a = t.coupon,
					s = t.products.list,
					c = e[0].id,
					l = 0,
					u = 0,
					d = 0,
					p = 0,
					f = 0;
				if (r.length && r[0].cart.length) {
					var h = r[0].cart,
						m = h.reduce((function(e, t) {
							return parseFloat(e) + parseFloat(t.uf_total)
						}), 0),
						g = h.reduce((function(e, t) {
							return parseFloat(e) + parseFloat(t.tax)
						}), 0);
					if (a.length > 0 && (p = Aa(a, h, c, m, s, n, t)), f = p > 0 ? m > 0 ? m - p : 0 : m, u = parseFloat(g), p && a.length && a[0].coupon.length) {
						var _ = ka(i, o, a, m, h);
						u = _.totalTax, f = _.product_total
					}
					if (l = f + u, o.length > 0) {
						var v = Na(l, c, o);
						d = v.discount, l = v.total
					}
					f < 0 && (l = 0, d = 0, u = parseFloat(g));
					var y = {
						cart_subtotal: fa(m),
						tax_total: fa(u),
						total_discount: fa(d),
						cart_total: fa(l)
					}
				} else y = xa();
				return (0, Ie.applyFilters)("ddwcpos_modify_cart_total", y, e, t)
			},
			Ta = function(e, t) {
				var n = 0;
				if (t.length) {
					t.forEach((function(t, r) {
						"yes" === t.compound || (n += e * (t.rate / 100))
					}));
					var r = n;
					t.forEach((function(t, o) {
						"no" === t.compound || (n += (e + r) * (t.rate / 100), r = n)
					}))
				}
				return n
			};

		function ka(e, t, n, r, o) {
			var i = 0,
				a = 0,
				s = o.length > 1 ? o.reduce((function(e, t) {
					return e + parseInt(t.quantity)
				}), 0) : o.length;
			return o.forEach((function(t) {
				n.length > 0 && n[0].coupon.forEach((function(n) {
					if (null != n.price)
						if ("percent" == n.type) {
							a = 0, i = 0;
							var o = r * (n.price / 100),
								c = r - o;
							a += c;
							var l = 0;
							"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (l = Ta(c, e))), i += l
						} else if ("fixed_cart" == n.type) {
						var u = n.price;
						s > 1 && (u = n.price / s * t.quantity);
						var d = t.uf_total - u;
						a += d;
						var p = 0;
						"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (p = Ta(d, e))), i += p
					} else if ("fixed_product" == n.type) {
						var f = n.price;
						s > 1 && (f = n.price / s * t.quantity);
						var h = t.uf_total - f;
						a += h;
						var m = 0;
						"yes" == ddwcposPOSObj.tax_enabled && ("yes" == ddwcposPOSObj.tax_type || (m = Ta(h, e))), i += m
					}
				}))
			})), {
				totalTax: i,
				product_total: a
			}
		}

		function Na(e, t, n) {
			var r = e,
				o = 0;
			if (n[0].cart_id == t) {
				var i = n[0].discount;
				if ("percentage" == i.type) {
					var a = i.amount;
					r = r = e - (o = Math.round(a / 100 * e * 100) / 100) > 0 ? e - o : parseFloat(0)
				} else {
					r = r = e - (o = i.amount) > 0 ? e - o : parseFloat(0)
				}
			} else {
				r = r = e - (o = 0) > 0 ? e - o : parseFloat(0)
			}
			return {
				total: r,
				discount: o
			}
		}

		function Aa(e, t, n, r, o, i, a) {
			var s = 0,
				c = [],
				l = t.length > 1 ? t.reduce((function(e, t) {
					return e + parseInt(t.quantity)
				}), 0) : t.length;
			e[0].cart_id == n && e[0].coupon.forEach((function(e) {
				var u = !1,
					d = !0,
					p = 0;
				if (e.restrictions) {
					if (e.restrictions.email_restrictions.length > 0 && !e.restrictions.email_restrictions.includes(a.customers.defaultCustomer.email) && (d = !1), d)
						for (var f = 0; f < t.length; f++) {
							var h = !0;
							0 == t[f].custom && (e.restrictions.exclude_sale_items && t[f].onsale ? (u = !0, !0, h = !1, p = 0) : e.restrictions.product_ids.length > 0 ? (u = !0, e.restrictions.product_ids.forEach((function(n) {
								n == t[f].product_id && (!0, null != e.price && ("percent" == e.type ? (p += parseFloat(e.price * r / 100), h = !1) : (p = parseFloat(e.price), h = !1)))
							}))) : e.restrictions.excluded_product_ids.length > 0 ? (u = !0, e.restrictions.excluded_product_ids.forEach((function(e) {
								e == t[f].product_id && (!0, p = 0, h = !1)
							}))) : (e.restrictions.product_categories.length > 0 || e.restrictions.excluded_product_categories.length > 0) && (u = !0, o.forEach((function(e) {
								e.product_id == t[f].product_id && (c = e.categories)
							})), e.restrictions.product_categories.forEach((function(n) {
								c.forEach((function(r) {
									n == r && h && (!0, null != e.price && ("percent" == e.type ? (h = !1, p += parseFloat(e.price * t[f].uf_total / 100)) : (h = !1, p = parseFloat(e.price))))
								}))
							})), e.restrictions.excluded_product_categories.forEach((function(e) {
								c.forEach((function(t) {
									e == t && (!0, h = !1, p = !1)
								}))
							}))))
						}
					if (!d || u && 0 == p) {
						var m = Ra(n);
						i(ca()), m && ht.store.addNotification({
							title: (0, ft.__)("Coupon Error", "ddwc-multipos"),
							message: (0, ft.__)("This coupon is not applicable as per restrictions.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					} else null != e.price && ("percent" == e.type ? s += parseFloat(e.price * r / 100) : t.forEach((function(t) {
						s += fa(e.price / l * t.quantity)
					})));
					s += p
				}
			}));
			return s
		}
		var Ra = function(e) {
				return xi.table("coupon").where("cart_id").equals(e).delete().then((function(e) {
					return e
				}))
			},
			Da = function() {
				return function(e) {
					xi.table("cart").orderBy("id").last().then((function(t) {
						var n = 0;
						t && (n = t.id + 1);
						var r = {
							id: n,
							active_cart: 1,
							cart: []
						};
						xi.table("cart").add(r).then((function(t) {
							if (t) {
								var n = xa();
								e(pa({
									list: [],
									total: n
								}))
							}
						}))
					}))
				}
			},
			La = __webpack_require__(653),
			Ia = __webpack_require__(1911);
		const Ma = {
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
		var qa = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ma
			}))
		};
		qa.displayName = "MinusOutlined";
		const ja = n.forwardRef(qa);
		const Ba = {
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
		var Fa = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ba
			}))
		};
		Fa.displayName = "PlusOutlined";
		const Ha = n.forwardRef(Fa);
		const Ua = {
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
		var za = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ua
			}))
		};
		za.displayName = "UpOutlined";
		const Va = n.forwardRef(za);
		const Wa = {
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
		var Ka = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Wa
			}))
		};
		Ka.displayName = "DownOutlined";
		const Ga = n.forwardRef(Ka);
		const $a = {
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
		var Qa = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: $a
			}))
		};
		Qa.displayName = "DeleteOutlined";
		const Ya = n.forwardRef(Qa);

		function Ja(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Za = function(e) {
			lt(o, e);
			var r = Ja(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).HandleRemove = function(e, n) {
					e.stopPropagation(), t.props.removeCartProduct(n)
				}, t.handleToggleEditCartProductDropdown = function() {
					t.setState({
						showEditCartProductDropdown: !t.state.showEditCartProductDropdown
					})
				}, t.handleChangeCartProductQuantity = function(e) {
					13 == e.which && t.handleUpdateCartProduct();
					var n = t.props.cartProduct,
						r = e.target.value;
					r <= 1 && (r = 1), t.setState({
						cartProductQuantity: r <= n.stock ? r : n.stock
					})
				}, t.handleIncreaseDecreaseQuantity = function(e) {
					var n = t.props.cartProduct,
						r = parseInt(t.state.cartProductQuantity ? t.state.cartProductQuantity : n.quantity) + e;
					r <= 1 && (r = 1), t.setState({
						cartProductQuantity: r <= n.stock ? r : n.stock
					})
				}, t.handleChangeCartProductPrice = function(e) {
					13 == e.which && t.handleUpdateCartProduct();
					var n = e.target.value < 0 ? 0 : e.target.value;
					t.setState({
						cartProductPrice: n
					})
				}, t.handleUpdateCartProduct = function() {
					var e = t.props.cartProduct,
						n = t.state.cartProductQuantity ? t.state.cartProductQuantity : e.quantity;
					e.stock < n ? ht.store.addNotification({
						title: (0, ft.__)("Stock Error", "ddwc-multipos"),
						message: (0, ft.__)("There is no more stocks available for this product.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}) : t.props.ModifyCart(e.product_id, n, t.state.cartProductPrice, e.name, e, e.boughtWeight), t.handleToggleEditCartProductDropdown()
				}, t.state = {
					showEditCartProductDropdown: !1,
					cartProductQuantity: null,
					cartProductPrice: null
				}, t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = this.props.cartProduct,
						o = null;
					return this.state.showEditCartProductDropdown && (o = (0, t.createElement)(n.Fragment, null, (0, Ie.applyFilters)("ddwcpos_add_details_before_edit_cart_product", "", this), (0, t.createElement)("div", {
						className: "ddwcpos-edit-cart-product"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column"
					}, (0, t.createElement)("p", null, (0, ft.__)("Quantity", "ddwc-multipos")), (0, t.createElement)("div", {
						className: "ddwcpos-edit-cart-product-quantity"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, ft.__)("Decrease Quantity", "ddwc-multipos"),
						onClick: function(t) {
							return e.handleIncreaseDecreaseQuantity(-1)
						}
					}, (0, t.createElement)(ja, null)), (0, t.createElement)("input", {
						type: "number",
						min: "1",
						max: r.stock,
						value: this.state.cartProductQuantity ? this.state.cartProductQuantity : r.quantity,
						onChange: function(t) {
							return e.handleChangeCartProductQuantity(t)
						}
					}), (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, ft.__)("Increase Quantity", "ddwc-multipos"),
						onClick: function(t) {
							return e.handleIncreaseDecreaseQuantity(1)
						}
					}, (0, t.createElement)(Ha, null)))), (0, t.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column"
					}, (0, t.createElement)("p", null, (0, ft.__)("Price Per Unit", "ddwc-multipos")), (0, t.createElement)("input", {
						type: "number",
						step: "0.01",
						min: "0",
						value: null != this.state.cartProductPrice ? this.state.cartProductPrice : parseFloat(r.uf).toFixed(2),
						onChange: function(t) {
							return e.handleChangeCartProductPrice(t)
						},
						autoFocus: !0
					})), (0, t.createElement)("div", {
						className: "ddwcpos-edit-cart-product-column",
						onClick: this.handleUpdateCartProduct
					}, (0, t.createElement)("button", null, (0, ft.__)("Update", "ddwc-multipos"))), (0, Ie.applyFilters)("ddwcpos_add_cart_product_action_after_update_button", "", this)))), (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
						className: "ddwcpos-cart-product product-id-" + r.product_id,
						onClick: this.handleToggleEditCartProductDropdown
					}, (0, t.createElement)("div", {
						className: "ddwcpos-cart-product-action",
						onClick: this.handleToggleEditCartProductDropdown
					}, this.state.showEditCartProductDropdown ? (0, t.createElement)(Va, null) : (0, t.createElement)(Ga, null)), (0, t.createElement)("div", {
						className: "ddwcpos-cart-product-image",
						dangerouslySetInnerHTML: {
							__html: r.image
						}
					}), (0, t.createElement)("div", {
						className: "ddwcpos-cart-product-details"
					}, (0, t.createElement)("p", {
						title: (0, La.ZP)(r.name)
					}, (0, La.ZP)(r.name)), (0, t.createElement)("p", null, (0, Ia.R)(r.uf), " x ", r.quantity)), (0, t.createElement)("div", {
						className: "ddwcpos-cart-product-price"
					}, (0, t.createElement)("p", null, (0, Ia.R)(r.uf_total), (0, La.ZP)(ddwcposPOSObj.ddwcpos_configuration.tax_label))), (0, t.createElement)("div", {
						className: "ddwcpos-cart-product-action",
						onClick: function(t) {
							return e.HandleRemove(t, r)
						}
					}, (0, t.createElement)(Ya, null))), (0, Ie.applyFilters)("ddwcpos_add_details_after_cart_product", "", this), o)
				}
			}]), o
		}(n.Component);
		const Xa = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				ModifyCart: Sa,
				removeCartProduct: Ea
			}, e))
		}))(Za);

		function es(e, t, n, r, o, i, a) {
			try {
				var s = e[i](a),
					c = s.value
			} catch (e) {
				return void n(e)
			}
			s.done ? t(c) : Promise.resolve(c).then(r, o)
		}
		var ts = __webpack_require__(7757),
			ns = __webpack_require__.n(ts),
			rs = function() {
				return function(e, t) {
					xi.table("tables").toArray().then((function(n) {
						var r = {
							list: [],
							defaultTable: {}
						};
						if (n.length) {
							var o = n.filter((function(e) {
								return e.default
							}));
							r.list = n, r.defaultTable = o.length ? o[0] : {}
						} else {
							var i = t().outlet.tables,
								a = Object.values(ddwcposPOSObj.ddwcpos_configuration.tables).filter((function(e) {
									return i.includes(e.slug)
								}));
							xi.table("tables").bulkPut(a);
							var s = a.filter((function(e) {
								return e.default
							}));
							r.list = a, r.defaultTable = s.length ? s[0] : {}
						}
						e(function(e) {
							return {
								type: "TABLES",
								tables: e
							}
						}(r))
					}))
				}
			},
			os = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(t, n) {
					var r = n().tables.defaultTable.slug;
					xi.table("tables").toCollection().modify((function(e) {
						e.default = 0
					})), r ? xi.table("tables").where("slug").equals(r).modify({
						tableType: "vacant"
					}).then((function(n) {
						e ? xi.table("tables").where("slug").equals(e).modify({
							default: 1,
							tableType: "occupied"
						}).then((function(e) {
							t(rs()), ht.store.addNotification({
								title: (0, ft.__)("Table Set", "ddwc-multipos"),
								message: (0, ft.__)("Table is set successfully for the order.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						})) : (t(rs()), ht.store.addNotification({
							title: (0, ft.__)("Take Away Order", "ddwc-multipos"),
							message: (0, ft.__)("No table is selected for take away orders.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}))
					})) : e ? xi.table("tables").where("slug").equals(e).modify({
						default: 1,
						tableType: "occupied"
					}).then((function(e) {
						t(rs()), ht.store.addNotification({
							title: (0, ft.__)("Table Set", "ddwc-multipos"),
							message: (0, ft.__)("Table is set successfully for the order.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					})) : (t(rs()), ht.store.addNotification({
						title: (0, ft.__)("Take Away Order", "ddwc-multipos"),
						message: (0, ft.__)("No table is selected for take away orders.", "ddwc-multipos"),
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
			is = function(e) {
				return function(t, n) {
					e.kitchen_status = "preparing", xi.table("cart").where("id").equals(e.id).modify(e).then((function(e) {
						t(as())
					}));
					var r = {
						outlet_id: n().outlet.id,
						order_data: e,
						action: "add"
					};
					Di(ddwcposPOSObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT, r).then((function(e) {
						ht.store.addNotification({
							title: (0, ft.__)("Success", "ddwc-multipos"),
							message: (0, ft.__)("Order is successfully sent to Kitchen.", "ddwc-multipos"),
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
			as = function() {
				return function(e, t) {
					xi.table("cart").where("active_cart").equals(0).toArray().then((function(n) {
						var r = [];
						n.length && n.forEach((function(e) {
							var n = Pa([e], t());
							r.push({
								list: [e],
								total: n
							})
						})), e(function(e) {
							return {
								type: "HOLD_CARTS",
								holdCarts: e
							}
						}(r))
					}))
				}
			},
			ss = function(e) {
				return function(t, n) {
					var r = n(),
						o = new Date,
						i = r.tables.defaultTable,
						a = r.cart.list[0].id;
					Object.keys(i).length && (xi.table("tables").where("slug").equals(i.slug).modify({
						tableType: "occupied",
						default: 0
					}), t(rs())), xi.table("cart").where("active_cart").equals(1).modify({
						active_cart: 0,
						info: e,
						date: o.toDateString() + " " + o.toLocaleTimeString(),
						customer: r.customers.defaultCustomer,
						table: i
					}).then((function(e) {
						"restaurant" === r.outlet.mode && ddwcposPOSObj.ddwcpos_configuration.automatic_send_kitchen_order_enabled && xi.table("cart").where("id").equals(a).toArray().then((function(e) {
							t(is(e[0]))
						})), ht.store.addNotification({
							title: (0, ft.__)("Hold Order Success", "ddwc-multipos"),
							message: (0, ft.__)("Your current cart is put to hold succesfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), t(as())
					}))
				}
			},
			cs = function(e) {
				return function(t, n) {
					var r = n(),
						o = r.cart.list.length ? r.cart.list[0].id : 99999999999;
					xi.table("cart").where("id").equals(o).delete().then((function(n) {
						xi.table("cart").where("id").equals(e).modify({
							active_cart: 1
						}).then((function(e) {
							t(as()), t(_a())
						}))
					}))
				}
			},
			ls = function(e) {
				return function(t, n) {
					xi.table("cart").where("id").equals(e).toArray().then((function(r) {
						if (navigator.onLine) {
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
							}).then((function(e) {
								return e.json()
							})).then((function(e) {
								ht.store.addNotification({
									title: (0, ft.__)("Success", "ddwc-multipos"),
									message: (0, ft.__)("Order is successfully removed from kitchen.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								})
							})).catch((function(e) {
								console.error(e)
							}))
						} else ht.store.addNotification({
							title: (0, ft.__)("Error", "ddwc-multipos"),
							message: (0, ft.__)("Cannot make request to kitchen to delete, check your internet connection!", "ddwc-multipos"),
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
						}), xi.table("cart").where("id").equals(e).delete().then((function(e) {
							t(as()), t(_a()), t(rs())
						}))
					}))
				}
			},
			us = function(e) {
				return {
					type: "DISCOUNT",
					discount: e
				}
			},
			ds = function() {
				return function(e) {
					return new Promise((function(t, n) {
						return xi.table("discount").toArray().then((function(n) {
							e(us(n)), t(n)
						}))
					}))
				}
			},
			ps = function(e, t, n) {
				return function(r) {
					if ("add" == e) {
						var o = {
							id: n,
							cart_id: n,
							discount: t
						};
						xi.table("discount").put(o).then((function(e) {
							r(us([o])), r(_a())
						}))
					} else "delete" == e && xi.table("discount").where("id").equals(n).delete().then((function(e) {
						r(us([])), r(_a())
					}))
				}
			};
		const fs = {
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
		var hs = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: fs
			}))
		};
		hs.displayName = "DeleteFilled";
		const ms = n.forwardRef(hs);
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
		var _s = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: gs
			}))
		};
		_s.displayName = "TagFilled";
		const vs = n.forwardRef(_s);
		const ys = {
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
		var ws = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: ys
			}))
		};
		ws.displayName = "PercentageOutlined";
		const bs = n.forwardRef(ws);
		const Es = {
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
		var Os = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Es
			}))
		};
		Os.displayName = "CloseOutlined";
		const Ss = n.forwardRef(Os);

		function Cs(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		const xs = function(e) {
			lt(o, e);
			var r = Cs(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).componentDidMount = function() {
					document.addEventListener("keydown", t.handleKeyDown, !1), (0, Ie.doAction)("ddwcpos_popup_component_did_mount", f(t))
				}, t.componentWillUnmount = function() {
					document.removeEventListener("keydown", t.handleKeyDown, !1)
				}, t.handleKeyDown = function(e) {
					27 == e.which && t.props.handleCancel()
				}, t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = {};
					this.props.singleButton && (r.gridTemplateColumns = "1fr");
					var o = this.props.handleSuccessArgs ? this.props.handleSuccessArgs : [];
					return (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
						className: "ddwcpos-popup-overlay",
						onClick: this.props.handleOverlay
					}), (0, t.createElement)("div", {
						className: "ddwcpos-popup",
						style: this.props.popupStyle && Object.keys(this.props.popupStyle).length ? this.props.popupStyle : {}
					}, (0, t.createElement)("div", {
						className: "ddwcpos-popup-content"
					}, this.props.popupContent, this.props.hideActions ? null : (0, t.createElement)("div", {
						className: "ddwcpos-actions-wrapper",
						style: r
					}, !this.props.hideSuccessButton && (0, t.createElement)("button", {
						disabled: !this.props.notDisabled,
						onClick: function(t) {
							var n;
							return (n = e.props).handleSuccess.apply(n, [t].concat(aa(o)))
						}
					}, this.props.successButtonText ? this.props.successButtonText : (0, t.createElement)(n.Fragment, null, (0, t.createElement)(Ha, null), (0, ft.__)("Add", "ddwc-multipos"))), !this.props.hideCancelButton && (0, t.createElement)("button", {
						className: "ddwcpos-button-secondary",
						onClick: this.props.handleCancel
					}, this.props.cancelButtonText ? this.props.cancelButtonText : (0, t.createElement)(n.Fragment, null, (0, t.createElement)(Ss, null), (0, ft.__)("Cancel", "ddwc-multipos")))))))
				}
			}]), o
		}(n.Component);

		function Ps(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Ts = function(e) {
			lt(o, e);
			var r = Ps(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).handleToggleDiscountPopup = function() {
					t.setState({
						showDiscountPopup: !t.state.showDiscountPopup
					})
				}, t.handleToggleCouponPopup = function() {
					t.setState({
						showCouponPopup: !t.state.showCouponPopup
					})
				}, t.handleToggleHoldOrderPopup = function() {
					var e = t.props.cart.list;
					e.length && e[0].cart.length ? t.setState({
						showHoldOrderPopup: !t.state.showHoldOrderPopup
					}) : ht.store.addNotification({
						title: (0, ft.__)("Empty Cart", "ddwc-multipos"),
						message: (0, ft.__)("Please add products in the cart first to hold it.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleDiscountInput = function(e) {
					13 == e.which ? t.handleApplyDiscount() : t.setState({
						discountAmount: e.target.value
					})
				}, t.handleCouponInput = function(e) {
					13 == e.which ? t.handleApplyCoupon() : t.setState({
						couponCode: e.target.value
					})
				}, t.handleHoldOrderInfoInput = function(e) {
					13 == e.which ? t.handleSaveHoldOrder() : t.setState({
						holdOrderInfo: e.target.value
					})
				}, t.handleChangeDiscountType = function(e) {
					t.setState({
						discountType: e
					})
				}, t.handleApplyDiscount = function() {
					var e = t.props.cart.list;
					if (e.length && e[0].cart.length) {
						t.handleToggleDiscountPopup();
						var n = e[0].id,
							r = t.props.taxes,
							o = t.state.discountType,
							i = t.state.discountAmount,
							a = 0;
						i && !isNaN(i) && i > 0 ? (r.forEach((function(e) {
							"fixed" == o && (a = i - i * e.rate / (e.rate + 1))
						})), t.props.ModifyDiscount("add", {
							amount: i,
							type: o,
							tax: a
						}, n), ht.store.addNotification({
							title: (0, ft.__)("Discount Success", "ddwc-multipos"),
							message: (0, ft.__)("Discount applied successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})) : ht.store.addNotification({
							title: (0, ft.__)("Amount Error", "ddwc-multipos"),
							message: (0, ft.__)("Entered amount is invalid.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					} else ht.store.addNotification({
						title: (0, ft.__)("Empty Cart", "ddwc-multipos"),
						message: (0, ft.__)("Please add products in the cart to apply discount.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleRemoveDiscount = function() {
					var e = t.props.cart.list[0].id;
					t.props.ModifyDiscount("delete", {}, e), ht.store.addNotification({
						title: (0, ft.__)("Discount Success", "ddwc-multipos"),
						message: (0, ft.__)("Discount removed successfully.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleApplyCoupon = function() {
					if (navigator.onLine) {
						var e = t.props.cart.list;
						if (e.length && e[0].cart.length) {
							t.handleToggleCouponPopup();
							var n = t.state.couponCode;
							if (n) {
								var r = {
									coupon_code: n,
									customer: t.props.customers.defaultCustomer
								};
								Di(ddwcposPOSObj.API.CHECK_COUPON_ENDPOINT, r).then((function(e) {
									if (e.success && e.coupon) {
										var n = t.props.taxes;
										if ("yes" == ddwcposPOSObj.tax_type) {
											"fixed_cart" == e.coupon.type && n.forEach((function(e) {
												e.rate && e.rate
											})), e.coupon.coup_tax = 0
										} else {
											var r = 0;
											n.forEach((function(t) {
												"fixed_cart" == e.coupon.type && (r = e.coupon.price - e.coupon.price * t.rate / (t.rate + 1), r = e.coupon.price * t.rate / 100)
											})), e.coupon.coup_tax = r
										}
										t.props.ApplyCoupon(e.coupon)
									} else ht.store.addNotification({
										title: (0, ft.__)("Coupon Error", "ddwc-multipos"),
										message: e.message,
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									})
								}))
							} else ht.store.addNotification({
								title: (0, ft.__)("Empty Field", "ddwc-multipos"),
								message: (0, ft.__)("Please enter a coupon code first.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							})
						} else ht.store.addNotification({
							title: (0, ft.__)("Empty Cart", "ddwc-multipos"),
							message: (0, ft.__)("Please add products in the cart to apply coupon.", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					} else ht.store.addNotification({
						title: (0, ft.__)("System is Offline", "ddwc-multipos"),
						message: (0, ft.__)("Coupon cannot be applied in offline mode, please apply after getting online.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handlePayClick = function() {
					var e, n = (e = ns().mark((function e(n) {
						var r, o, i, a, s, c, l, u, d, p;
						return ns().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (r = t.props.cart, o = t.props.customers, i = r.list.length > 0 ? r.list[0].cart : [], !Object.keys(o.defaultCustomer).length) {
										e.next = 24;
										break
									}
									if (!(i.length > 0)) {
										e.next = 20;
										break
									}
									if (a = r.list[0].cart, s = r.list[0].id, "centralized" != t.props.outlet.inventory_type) {
										e.next = 18;
										break
									}
									if (n.preventDefault(), !window.navigator.onLine) {
										e.next = 17;
										break
									}
									return c = t.props.validateProductStock(a), e.next = 13, c.then((function(e) {
										return a.filter((function(t) {
											return e.out_of_stock_products.includes(t.product_id)
										}))
									}));
								case 13:
									null != (l = e.sent) && l.length > 0 ? (u = a.filter((function(e) {
										return !l.includes(e)
									})), d = [], l.forEach((function(e) {
										d.push(e.name)
									})), p = d.join(", "), p = d.lenth > 1 ? "".concat(p, " ").concat((0, ft.__)("are out of stock now, please remove them from cart", "ddwc-multipos")) : "".concat(p, " ").concat((0, ft.__)("is out of stock now, kindly remove them from cart", "ddwc-multipos")), confirm(p) && t.props.deleteNotValidProductsFromCart(u, s)) : t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/pay")), e.next = 18;
									break;
								case 17:
									ht.store.addNotification({
										title: (0, ft.__)("Error", "ddwc-multipos"),
										message: (0, ft.__)("Sorry, orders cannot be processed with centralized inventory in offline mode.", "ddwc-multipos"),
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
								case 18:
									e.next = 22;
									break;
								case 20:
									n.preventDefault(), ht.store.addNotification({
										title: (0, ft.__)("Empty Cart", "ddwc-multipos"),
										message: (0, ft.__)("Cart is empty right now, kindly add products to checkout.", "ddwc-multipos"),
										type: "danger",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
								case 22:
									e.next = 26;
									break;
								case 24:
									n.preventDefault(), ht.store.addNotification({
										title: (0, ft.__)("Select Customer First", "ddwc-multipos"),
										message: (0, ft.__)("Customer is not selected, kindly select the customer to checkout.", "ddwc-multipos"),
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
									return e.stop()
							}
						}), e)
					})), function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = e.apply(t, n);

							function a(e) {
								es(i, r, o, a, s, "next", e)
							}

							function s(e) {
								es(i, r, o, a, s, "throw", e)
							}
							a(void 0)
						}))
					});
					return function(e) {
						return n.apply(this, arguments)
					}
				}(), t.handleSaveHoldOrder = function() {
					t.handleToggleHoldOrderPopup(), t.props.addToHold(t.state.holdOrderInfo), t.props.addNewCart(), xi.table("coupon").clear().then((function(e) {
						t.props.getCoupons()
					}))
				}, t.state = (0, Ie.applyFilters)("ddwcpos_modify_state_in_cart_total_component", {
					showCouponPopup: !1,
					showDiscountPopup: !1,
					showHoldOrderPopup: !1,
					couponCode: "",
					discountType: "fixed",
					discountAmount: "",
					holdOrderInfo: ""
				}, f(t)), t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = this.props.cart,
						o = r.list,
						i = 0;
					i = o.length && o[0].cart.length ? (i = o[0].cart.reduce((function(e, t) {
						return e + parseInt(t.quantity)
					}), 0)) > 1 ? "".concat(i, " ").concat((0, ft.__)("Items", "ddwc-multipos")) : "".concat(i, " ").concat((0, ft.__)("Item", "ddwc-multipos")) : "0 ".concat((0, ft.__)("Item", "ddwc-multipos"));
					var a = this.props.coupon.length ? this.props.coupon[0].coupon : [],
						s = r.total,
						c = parseFloat(s.total_discount) + 0,
						l = a.map((function(n, r) {
							var o = (0, Ie.applyFilters)("ddwcpos_eligible_to_remove_coupon", !0, e);
							return (0, t.createElement)("span", {
								className: "ddwcpos-cart-applied-coupons",
								key: r
							}, o ? (0, t.createElement)(ms, {
								className: "ddwcpos-remove-discount-icon",
								onClick: function(t) {
									return e.props.RemoveCoupon(n.code)
								}
							}) : null, n.code, " (".concat("percent" == n.type ? n.price + "%" : (0, Ia.R)(n.price), ")"))
						})),
						u = "";
					if (this.state.showHoldOrderPopup) {
						var d = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Hold Order", "ddwc-multipos")), (0, t.createElement)("input", {
								type: "text",
								onKeyUp: function(t) {
									return e.handleHoldOrderInfoInput(t)
								},
								placeholder: (0, ft.__)("Enter Order Info", "ddwc-multipos"),
								autoFocus: !0
							})),
							p = {
								handleOverlay: this.handleToggleHoldOrderPopup,
								popupContent: d,
								notDisabled: !0,
								handleSuccess: this.handleSaveHoldOrder,
								handleCancel: this.handleToggleHoldOrderPopup
							};
						u = (0, t.createElement)(xs, p)
					}
					if (this.state.showCouponPopup) {
						var f = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Apply Coupon", "ddwc-multipos")), (0, t.createElement)("input", {
								type: "text",
								onKeyUp: function(t) {
									return e.handleCouponInput(t)
								},
								placeholder: (0, ft.__)("Enter Coupon Code", "ddwc-multipos"),
								autoFocus: !0
							})),
							h = {
								handleOverlay: this.handleToggleCouponPopup,
								popupContent: f,
								notDisabled: this.state.couponCode,
								handleSuccess: this.handleApplyCoupon,
								handleCancel: this.handleToggleCouponPopup
							};
						u = (0, t.createElement)(xs, h)
					}
					if (this.state.showDiscountPopup) {
						var m = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Apply Discount", "ddwc-multipos")), (0, t.createElement)("div", {
								className: "ddwcpos-popup-options-group"
							}, (0, t.createElement)("h3", null, (0, ft.__)("Select Discount Type", "ddwc-multipos")), (0, t.createElement)("div", {
								className: "ddwcpos-popup-options"
							}, (0, t.createElement)("p", {
								onClick: function(t) {
									return e.handleChangeDiscountType("fixed")
								},
								className: "fixed" == this.state.discountType ? "ddwcpos-selected-options" : null
							}, (0, ft.__)("Fixed", "ddwc-multipos")), (0, t.createElement)("p", {
								onClick: function(t) {
									return e.handleChangeDiscountType("percentage")
								},
								className: "percentage" == this.state.discountType ? "ddwcpos-selected-options" : null
							}, (0, ft.__)("Percentage", "ddwc-multipos")))), (0, t.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onKeyUp: function(t) {
									return e.handleDiscountInput(t)
								},
								placeholder: (0, ft.__)("Enter Discount Amount", "ddwc-multipos"),
								autoFocus: !0
							})),
							g = {
								handleOverlay: this.handleToggleDiscountPopup,
								popupContent: m,
								notDisabled: this.state.discountAmount,
								handleSuccess: this.handleApplyDiscount,
								handleCancel: this.handleToggleDiscountPopup
							};
						u = (0, t.createElement)(xs, g)
					}
					return (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
						className: "ddwcpos-cart-totals"
					}, (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Subtotal", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(s.cart_subtotal))), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Tax", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(s.tax_total))), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Discount", "ddwc-multipos")), (0, t.createElement)("strong", null, c ? (0, t.createElement)(ms, {
						className: "ddwcpos-remove-discount-icon",
						onClick: this.handleRemoveDiscount
					}) : null, (0, Ia.R)(-c))), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Applied Coupon(s)", "ddwc-multipos")), (0, t.createElement)("strong", null, l.length ? l : (0, ft.__)("N/A", "ddwc-multipos"))), (0, Ie.applyFilters)("ddwcpos_add_details_after_applied_coupons_in_cart_total", "", this), (0, t.createElement)("div", {
						className: "ddwcpos-cart-actions" + (0, Ie.applyFilters)("ddwcpos_add_class_to_cart_actions_element", "", this)
					}, (0, t.createElement)("span", {
						onClick: this.handleToggleCouponPopup
					}, (0, t.createElement)(vs, null), (0, ft.__)("Coupon", "ddwc-multipos")), (0, t.createElement)("span", {
						onClick: this.handleToggleDiscountPopup
					}, (0, t.createElement)(bs, null), (0, ft.__)("Discount", "ddwc-multipos")), (0, t.createElement)("span", {
						onClick: this.handleToggleHoldOrderPopup
					}, (0, t.createElement)(ia, null), (0, ft.__)("Hold Order", "ddwc-multipos")), (0, Ie.applyFilters)("ddwcpos_add_cart_actions_after_hold_order", "", this)), (0, t.createElement)(bt, {
						className: "ddwcpos-cart-pay",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/pay"),
						onClick: function(t) {
							return e.handlePayClick(t)
						}
					}, (0, t.createElement)("p", null, (0, ft.__)("Proceed to Pay", "ddwc-multipos"), (0, t.createElement)("br", null), (0, t.createElement)("i", null, i)), (0, t.createElement)("p", null, (0, Ia.R)(parseFloat((0, Ie.applyFilters)("ddwcpos_modify_cart_total_filter", s.cart_total)))), (0, t.createElement)(Wn, null))), u, (0, Ie.applyFilters)("ddwcpos_add_popup_in_cart_total_component", "", this, ht.store))
				}
			}]), o
		}(n.Component);
		const ks = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				ModifyDiscount: ps,
				ApplyCoupon: ua,
				RemoveCoupon: da,
				validateProductStock: ha,
				deleteNotValidProductsFromCart: ma,
				getCoupons: ca,
				addToHold: ss,
				addNewCart: Da
			}, e))
		}))(Ts);
		const Ns = {
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
		var As = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ns
			}))
		};
		As.displayName = "SearchOutlined";
		const Rs = n.forwardRef(As);
		const Ds = {
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
		var Ls = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ds
			}))
		};
		Ls.displayName = "WarningFilled";
		const Is = n.forwardRef(Ls);

		function Ms(e, t) {
			if (e.length !== t.length) return !1;
			for (var n = 0; n < e.length; n++)
				if (e[n] !== t[n]) return !1;
			return !0
		}
		const qs = function(e, t) {
			var n;
			void 0 === t && (t = Ms);
			var r, o = [],
				i = !1;
			return function() {
				for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
				return i && n === this && t(a, o) || (r = e.apply(this, a), i = !0, n = this, o = a), r
			}
		};
		var js = "object" == typeof performance && "function" == typeof performance.now ? function() {
			return performance.now()
		} : function() {
			return Date.now()
		};

		function Bs(e) {
			cancelAnimationFrame(e.id)
		}

		function Fs(e, t) {
			var n = js();
			var r = {
				id: requestAnimationFrame((function o() {
					js() - n >= t ? e.call(null) : r.id = requestAnimationFrame(o)
				}))
			};
			return r
		}
		var Hs = -1;
		var Us = null;

		function zs(e) {
			if (void 0 === e && (e = !1), null === Us || e) {
				var t = document.createElement("div"),
					n = t.style;
				n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
				var r = document.createElement("div"),
					o = r.style;
				return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? Us = "positive-descending" : (t.scrollLeft = 1, Us = 0 === t.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(t), Us
			}
			return Us
		}
		var Vs = function(e) {
			var t = e.columnIndex;
			e.data;
			return e.rowIndex + ":" + t
		};

		function Ws(t) {
			var r, o, i = t.getColumnOffset,
				a = t.getColumnStartIndexForOffset,
				c = t.getColumnStopIndexForStartIndex,
				l = t.getColumnWidth,
				u = t.getEstimatedTotalHeight,
				d = t.getEstimatedTotalWidth,
				p = t.getOffsetForColumnAndAlignment,
				h = t.getOffsetForRowAndAlignment,
				m = t.getRowHeight,
				g = t.getRowOffset,
				_ = t.getRowStartIndexForOffset,
				v = t.getRowStopIndexForStartIndex,
				y = t.initInstanceProps,
				w = t.shouldResetStyleCacheOnItemSizeChange,
				b = t.validateProps;
			return o = r = function(t) {
				function r(e) {
					var n;
					return (n = t.call(this, e) || this)._instanceProps = y(n.props, f(f(n))), n._resetIsScrollingTimeoutId = null, n._outerRef = void 0, n.state = {
						instance: f(f(n)),
						isScrolling: !1,
						horizontalScrollDirection: "forward",
						scrollLeft: "number" == typeof n.props.initialScrollLeft ? n.props.initialScrollLeft : 0,
						scrollTop: "number" == typeof n.props.initialScrollTop ? n.props.initialScrollTop : 0,
						scrollUpdateWasRequested: !1,
						verticalScrollDirection: "forward"
					}, n._callOnItemsRendered = void 0, n._callOnItemsRendered = qs((function(e, t, r, o, i, a, s, c) {
						return n.props.onItemsRendered({
							overscanColumnStartIndex: e,
							overscanColumnStopIndex: t,
							overscanRowStartIndex: r,
							overscanRowStopIndex: o,
							visibleColumnStartIndex: i,
							visibleColumnStopIndex: a,
							visibleRowStartIndex: s,
							visibleRowStopIndex: c
						})
					})), n._callOnScroll = void 0, n._callOnScroll = qs((function(e, t, r, o, i) {
						return n.props.onScroll({
							horizontalScrollDirection: r,
							scrollLeft: e,
							scrollTop: t,
							verticalScrollDirection: o,
							scrollUpdateWasRequested: i
						})
					})), n._getItemStyle = void 0, n._getItemStyle = function(e, t) {
						var r, o = n.props,
							a = o.columnWidth,
							s = o.direction,
							c = o.rowHeight,
							u = n._getItemStyleCache(w && a, w && s, w && c),
							d = e + ":" + t;
						if (u.hasOwnProperty(d)) r = u[d];
						else {
							var p = i(n.props, t, n._instanceProps),
								f = "rtl" === s;
							u[d] = r = {
								position: "absolute",
								left: f ? void 0 : p,
								right: f ? p : void 0,
								top: g(n.props, e, n._instanceProps),
								height: m(n.props, e, n._instanceProps),
								width: l(n.props, t, n._instanceProps)
							}
						}
						return r
					}, n._getItemStyleCache = void 0, n._getItemStyleCache = qs((function(e, t, n) {
						return {}
					})), n._onScroll = function(e) {
						var t = e.currentTarget,
							r = t.clientHeight,
							o = t.clientWidth,
							i = t.scrollLeft,
							a = t.scrollTop,
							s = t.scrollHeight,
							c = t.scrollWidth;
						n.setState((function(e) {
							if (e.scrollLeft === i && e.scrollTop === a) return null;
							var t = n.props.direction,
								l = i;
							if ("rtl" === t) switch (zs()) {
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
								horizontalScrollDirection: e.scrollLeft < i ? "forward" : "backward",
								scrollLeft: l,
								scrollTop: u,
								verticalScrollDirection: e.scrollTop < a ? "forward" : "backward",
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._outerRefSetter = function(e) {
						var t = n.props.outerRef;
						n._outerRef = e, "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
					}, n._resetIsScrollingDebounced = function() {
						null !== n._resetIsScrollingTimeoutId && Bs(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = Fs(n._resetIsScrolling, 150)
					}, n._resetIsScrolling = function() {
						n._resetIsScrollingTimeoutId = null, n.setState({
							isScrolling: !1
						}, (function() {
							n._getItemStyleCache(-1)
						}))
					}, n
				}
				s(r, t), r.getDerivedStateFromProps = function(e, t) {
					return Ks(e, t), b(e), null
				};
				var o = r.prototype;
				return o.scrollTo = function(e) {
					var t = e.scrollLeft,
						n = e.scrollTop;
					void 0 !== t && (t = Math.max(0, t)), void 0 !== n && (n = Math.max(0, n)), this.setState((function(e) {
						return void 0 === t && (t = e.scrollLeft), void 0 === n && (n = e.scrollTop), e.scrollLeft === t && e.scrollTop === n ? null : {
							horizontalScrollDirection: e.scrollLeft < t ? "forward" : "backward",
							scrollLeft: t,
							scrollTop: n,
							scrollUpdateWasRequested: !0,
							verticalScrollDirection: e.scrollTop < n ? "forward" : "backward"
						}
					}), this._resetIsScrollingDebounced)
				}, o.scrollToItem = function(e) {
					var t = e.align,
						n = void 0 === t ? "auto" : t,
						r = e.columnIndex,
						o = e.rowIndex,
						i = this.props,
						a = i.columnCount,
						s = i.height,
						c = i.rowCount,
						l = i.width,
						f = this.state,
						m = f.scrollLeft,
						g = f.scrollTop,
						_ = function(e) {
							if (void 0 === e && (e = !1), -1 === Hs || e) {
								var t = document.createElement("div"),
									n = t.style;
								n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), Hs = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
							}
							return Hs
						}();
					void 0 !== r && (r = Math.max(0, Math.min(r, a - 1))), void 0 !== o && (o = Math.max(0, Math.min(o, c - 1)));
					var v = u(this.props, this._instanceProps),
						y = d(this.props, this._instanceProps) > l ? _ : 0,
						w = v > s ? _ : 0;
					this.scrollTo({
						scrollLeft: void 0 !== r ? p(this.props, r, n, m, this._instanceProps, w) : m,
						scrollTop: void 0 !== o ? h(this.props, o, n, g, this._instanceProps, y) : g
					})
				}, o.componentDidMount = function() {
					var e = this.props,
						t = e.initialScrollLeft,
						n = e.initialScrollTop;
					if (null != this._outerRef) {
						var r = this._outerRef;
						"number" == typeof t && (r.scrollLeft = t), "number" == typeof n && (r.scrollTop = n)
					}
					this._callPropsCallbacks()
				}, o.componentDidUpdate = function() {
					var e = this.props.direction,
						t = this.state,
						n = t.scrollLeft,
						r = t.scrollTop;
					if (t.scrollUpdateWasRequested && null != this._outerRef) {
						var o = this._outerRef;
						if ("rtl" === e) switch (zs()) {
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
					null !== this._resetIsScrollingTimeoutId && Bs(this._resetIsScrollingTimeoutId)
				}, o.render = function() {
					var t = this.props,
						r = t.children,
						o = t.className,
						i = t.columnCount,
						a = t.direction,
						s = t.height,
						c = t.innerRef,
						l = t.innerElementType,
						p = t.innerTagName,
						f = t.itemData,
						h = t.itemKey,
						m = void 0 === h ? Vs : h,
						g = t.outerElementType,
						_ = t.outerTagName,
						v = t.rowCount,
						y = t.style,
						w = t.useIsScrolling,
						b = t.width,
						E = this.state.isScrolling,
						O = this._getHorizontalRangeToRender(),
						S = O[0],
						C = O[1],
						x = this._getVerticalRangeToRender(),
						P = x[0],
						T = x[1],
						k = [];
					if (i > 0 && v)
						for (var N = P; N <= T; N++)
							for (var A = S; A <= C; A++) k.push((0, n.createElement)(r, {
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
					var R = u(this.props, this._instanceProps),
						D = d(this.props, this._instanceProps);
					return (0, n.createElement)(g || _ || "div", {
						className: o,
						onScroll: this._onScroll,
						ref: this._outerRefSetter,
						style: e({
							position: "relative",
							height: s,
							width: b,
							overflow: "auto",
							WebkitOverflowScrolling: "touch",
							willChange: "transform",
							direction: a
						}, y)
					}, (0, n.createElement)(l || p || "div", {
						children: k,
						ref: c,
						style: {
							height: R,
							pointerEvents: E ? "none" : void 0,
							width: D
						}
					}))
				}, o._callPropsCallbacks = function() {
					var e = this.props,
						t = e.columnCount,
						n = e.onItemsRendered,
						r = e.onScroll,
						o = e.rowCount;
					if ("function" == typeof n && t > 0 && o > 0) {
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
							g = m.horizontalScrollDirection,
							_ = m.scrollLeft,
							v = m.scrollTop,
							y = m.scrollUpdateWasRequested,
							w = m.verticalScrollDirection;
						this._callOnScroll(_, v, g, w, y)
					}
				}, o._getHorizontalRangeToRender = function() {
					var e = this.props,
						t = e.columnCount,
						n = e.overscanColumnCount,
						r = e.overscanColumnsCount,
						o = e.overscanCount,
						i = e.rowCount,
						s = this.state,
						l = s.horizontalScrollDirection,
						u = s.isScrolling,
						d = s.scrollLeft,
						p = n || r || o || 1;
					if (0 === t || 0 === i) return [0, 0, 0, 0];
					var f = a(this.props, d, this._instanceProps),
						h = c(this.props, f, d, this._instanceProps),
						m = u && "backward" !== l ? 1 : Math.max(1, p),
						g = u && "forward" !== l ? 1 : Math.max(1, p);
					return [Math.max(0, f - m), Math.max(0, Math.min(t - 1, h + g)), f, h]
				}, o._getVerticalRangeToRender = function() {
					var e = this.props,
						t = e.columnCount,
						n = e.overscanCount,
						r = e.overscanRowCount,
						o = e.overscanRowsCount,
						i = e.rowCount,
						a = this.state,
						s = a.isScrolling,
						c = a.verticalScrollDirection,
						l = a.scrollTop,
						u = r || o || n || 1;
					if (0 === t || 0 === i) return [0, 0, 0, 0];
					var d = _(this.props, l, this._instanceProps),
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
		var Ks = function(e, t) {
				e.children, e.direction, e.height, e.innerTagName, e.outerTagName, e.overscanColumnsCount, e.overscanCount, e.overscanRowsCount, e.width, t.instance
			},
			Gs = function(e, t) {
				return e
			};

		function $s(t) {
			var r, o, i = t.getItemOffset,
				a = t.getEstimatedTotalSize,
				c = t.getItemSize,
				l = t.getOffsetForIndexAndAlignment,
				u = t.getStartIndexForOffset,
				d = t.getStopIndexForStartIndex,
				p = t.initInstanceProps,
				h = t.shouldResetStyleCacheOnItemSizeChange,
				m = t.validateProps;
			return o = r = function(t) {
				function r(e) {
					var n;
					return (n = t.call(this, e) || this)._instanceProps = p(n.props, f(f(n))), n._outerRef = void 0, n._resetIsScrollingTimeoutId = null, n.state = {
						instance: f(f(n)),
						isScrolling: !1,
						scrollDirection: "forward",
						scrollOffset: "number" == typeof n.props.initialScrollOffset ? n.props.initialScrollOffset : 0,
						scrollUpdateWasRequested: !1
					}, n._callOnItemsRendered = void 0, n._callOnItemsRendered = qs((function(e, t, r, o) {
						return n.props.onItemsRendered({
							overscanStartIndex: e,
							overscanStopIndex: t,
							visibleStartIndex: r,
							visibleStopIndex: o
						})
					})), n._callOnScroll = void 0, n._callOnScroll = qs((function(e, t, r) {
						return n.props.onScroll({
							scrollDirection: e,
							scrollOffset: t,
							scrollUpdateWasRequested: r
						})
					})), n._getItemStyle = void 0, n._getItemStyle = function(e) {
						var t, r = n.props,
							o = r.direction,
							a = r.itemSize,
							s = r.layout,
							l = n._getItemStyleCache(h && a, h && s, h && o);
						if (l.hasOwnProperty(e)) t = l[e];
						else {
							var u = i(n.props, e, n._instanceProps),
								d = c(n.props, e, n._instanceProps),
								p = "horizontal" === o || "horizontal" === s,
								f = "rtl" === o,
								m = p ? u : 0;
							l[e] = t = {
								position: "absolute",
								left: f ? void 0 : m,
								right: f ? m : void 0,
								top: p ? 0 : u,
								height: p ? "100%" : d,
								width: p ? d : "100%"
							}
						}
						return t
					}, n._getItemStyleCache = void 0, n._getItemStyleCache = qs((function(e, t, n) {
						return {}
					})), n._onScrollHorizontal = function(e) {
						var t = e.currentTarget,
							r = t.clientWidth,
							o = t.scrollLeft,
							i = t.scrollWidth;
						n.setState((function(e) {
							if (e.scrollOffset === o) return null;
							var t = n.props.direction,
								a = o;
							if ("rtl" === t) switch (zs()) {
								case "negative":
									a = -o;
									break;
								case "positive-descending":
									a = i - r - o
							}
							return a = Math.max(0, Math.min(a, i - r)), {
								isScrolling: !0,
								scrollDirection: e.scrollOffset < o ? "forward" : "backward",
								scrollOffset: a,
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._onScrollVertical = function(e) {
						var t = e.currentTarget,
							r = t.clientHeight,
							o = t.scrollHeight,
							i = t.scrollTop;
						n.setState((function(e) {
							if (e.scrollOffset === i) return null;
							var t = Math.max(0, Math.min(i, o - r));
							return {
								isScrolling: !0,
								scrollDirection: e.scrollOffset < t ? "forward" : "backward",
								scrollOffset: t,
								scrollUpdateWasRequested: !1
							}
						}), n._resetIsScrollingDebounced)
					}, n._outerRefSetter = function(e) {
						var t = n.props.outerRef;
						n._outerRef = e, "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
					}, n._resetIsScrollingDebounced = function() {
						null !== n._resetIsScrollingTimeoutId && Bs(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = Fs(n._resetIsScrolling, 150)
					}, n._resetIsScrolling = function() {
						n._resetIsScrollingTimeoutId = null, n.setState({
							isScrolling: !1
						}, (function() {
							n._getItemStyleCache(-1, null)
						}))
					}, n
				}
				s(r, t), r.getDerivedStateFromProps = function(e, t) {
					return Qs(e, t), m(e), null
				};
				var o = r.prototype;
				return o.scrollTo = function(e) {
					e = Math.max(0, e), this.setState((function(t) {
						return t.scrollOffset === e ? null : {
							scrollDirection: t.scrollOffset < e ? "forward" : "backward",
							scrollOffset: e,
							scrollUpdateWasRequested: !0
						}
					}), this._resetIsScrollingDebounced)
				}, o.scrollToItem = function(e, t) {
					void 0 === t && (t = "auto");
					var n = this.props.itemCount,
						r = this.state.scrollOffset;
					e = Math.max(0, Math.min(e, n - 1)), this.scrollTo(l(this.props, e, t, r, this._instanceProps))
				}, o.componentDidMount = function() {
					var e = this.props,
						t = e.direction,
						n = e.initialScrollOffset,
						r = e.layout;
					if ("number" == typeof n && null != this._outerRef) {
						var o = this._outerRef;
						"horizontal" === t || "horizontal" === r ? o.scrollLeft = n : o.scrollTop = n
					}
					this._callPropsCallbacks()
				}, o.componentDidUpdate = function() {
					var e = this.props,
						t = e.direction,
						n = e.layout,
						r = this.state,
						o = r.scrollOffset;
					if (r.scrollUpdateWasRequested && null != this._outerRef) {
						var i = this._outerRef;
						if ("horizontal" === t || "horizontal" === n)
							if ("rtl" === t) switch (zs()) {
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
					null !== this._resetIsScrollingTimeoutId && Bs(this._resetIsScrollingTimeoutId)
				}, o.render = function() {
					var t = this.props,
						r = t.children,
						o = t.className,
						i = t.direction,
						s = t.height,
						c = t.innerRef,
						l = t.innerElementType,
						u = t.innerTagName,
						d = t.itemCount,
						p = t.itemData,
						f = t.itemKey,
						h = void 0 === f ? Gs : f,
						m = t.layout,
						g = t.outerElementType,
						_ = t.outerTagName,
						v = t.style,
						y = t.useIsScrolling,
						w = t.width,
						b = this.state.isScrolling,
						E = "horizontal" === i || "horizontal" === m,
						O = E ? this._onScrollHorizontal : this._onScrollVertical,
						S = this._getRangeToRender(),
						C = S[0],
						x = S[1],
						P = [];
					if (d > 0)
						for (var T = C; T <= x; T++) P.push((0, n.createElement)(r, {
							data: p,
							key: h(T, p),
							index: T,
							isScrolling: y ? b : void 0,
							style: this._getItemStyle(T)
						}));
					var k = a(this.props, this._instanceProps);
					return (0, n.createElement)(g || _ || "div", {
						className: o,
						onScroll: O,
						ref: this._outerRefSetter,
						style: e({
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
							height: E ? "100%" : k,
							pointerEvents: b ? "none" : void 0,
							width: E ? k : "100%"
						}
					}))
				}, o._callPropsCallbacks = function() {
					if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
						var e = this._getRangeToRender(),
							t = e[0],
							n = e[1],
							r = e[2],
							o = e[3];
						this._callOnItemsRendered(t, n, r, o)
					}
					if ("function" == typeof this.props.onScroll) {
						var i = this.state,
							a = i.scrollDirection,
							s = i.scrollOffset,
							c = i.scrollUpdateWasRequested;
						this._callOnScroll(a, s, c)
					}
				}, o._getRangeToRender = function() {
					var e = this.props,
						t = e.itemCount,
						n = e.overscanCount,
						r = this.state,
						o = r.isScrolling,
						i = r.scrollDirection,
						a = r.scrollOffset;
					if (0 === t) return [0, 0, 0, 0];
					var s = u(this.props, a, this._instanceProps),
						c = d(this.props, s, a, this._instanceProps),
						l = o && "backward" !== i ? 1 : Math.max(1, n),
						p = o && "forward" !== i ? 1 : Math.max(1, n);
					return [Math.max(0, s - l), Math.max(0, Math.min(t - 1, c + p)), s, c]
				}, r
			}(n.PureComponent), r.defaultProps = {
				direction: "ltr",
				itemData: void 0,
				layout: "vertical",
				overscanCount: 2,
				useIsScrolling: !1
			}, o
		}
		var Qs = function(e, t) {
				e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, t.instance
			},
			Ys = Ws({
				getColumnOffset: function(e, t) {
					return t * e.columnWidth
				},
				getColumnWidth: function(e, t) {
					return e.columnWidth
				},
				getRowOffset: function(e, t) {
					return t * e.rowHeight
				},
				getRowHeight: function(e, t) {
					return e.rowHeight
				},
				getEstimatedTotalHeight: function(e) {
					var t = e.rowCount;
					return e.rowHeight * t
				},
				getEstimatedTotalWidth: function(e) {
					var t = e.columnCount;
					return e.columnWidth * t
				},
				getOffsetForColumnAndAlignment: function(e, t, n, r, o, i) {
					var a = e.columnCount,
						s = e.columnWidth,
						c = e.width,
						l = Math.max(0, a * s - c),
						u = Math.min(l, t * s),
						d = Math.max(0, t * s - c + i + s);
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
				getOffsetForRowAndAlignment: function(e, t, n, r, o, i) {
					var a = e.rowHeight,
						s = e.height,
						c = e.rowCount,
						l = Math.max(0, c * a - s),
						u = Math.min(l, t * a),
						d = Math.max(0, t * a - s + i + a);
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
				getColumnStartIndexForOffset: function(e, t) {
					var n = e.columnWidth,
						r = e.columnCount;
					return Math.max(0, Math.min(r - 1, Math.floor(t / n)))
				},
				getColumnStopIndexForStartIndex: function(e, t, n) {
					var r = e.columnWidth,
						o = e.columnCount,
						i = e.width,
						a = t * r,
						s = Math.ceil((i + n - a) / r);
					return Math.max(0, Math.min(o - 1, t + s - 1))
				},
				getRowStartIndexForOffset: function(e, t) {
					var n = e.rowHeight,
						r = e.rowCount;
					return Math.max(0, Math.min(r - 1, Math.floor(t / n)))
				},
				getRowStopIndexForStartIndex: function(e, t, n) {
					var r = e.rowHeight,
						o = e.rowCount,
						i = e.height,
						a = t * r,
						s = Math.ceil((i + n - a) / r);
					return Math.max(0, Math.min(o - 1, t + s - 1))
				},
				initInstanceProps: function(e) {},
				shouldResetStyleCacheOnItemSizeChange: !0,
				validateProps: function(e) {
					e.columnWidth, e.rowHeight
				}
			}),
			Js = $s({
				getItemOffset: function(e, t) {
					return t * e.itemSize
				},
				getItemSize: function(e, t) {
					return e.itemSize
				},
				getEstimatedTotalSize: function(e) {
					var t = e.itemCount;
					return e.itemSize * t
				},
				getOffsetForIndexAndAlignment: function(e, t, n, r) {
					var o = e.direction,
						i = e.height,
						a = e.itemCount,
						s = e.itemSize,
						c = e.layout,
						l = e.width,
						u = "horizontal" === o || "horizontal" === c ? l : i,
						d = Math.max(0, a * s - u),
						p = Math.min(d, t * s),
						f = Math.max(0, t * s - u + s);
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
				getStartIndexForOffset: function(e, t) {
					var n = e.itemCount,
						r = e.itemSize;
					return Math.max(0, Math.min(n - 1, Math.floor(t / r)))
				},
				getStopIndexForStartIndex: function(e, t, n) {
					var r = e.direction,
						o = e.height,
						i = e.itemCount,
						a = e.itemSize,
						s = e.layout,
						c = e.width,
						l = t * a,
						u = "horizontal" === r || "horizontal" === s ? c : o,
						d = Math.ceil((u + n - l) / a);
					return Math.max(0, Math.min(i - 1, t + d - 1))
				},
				initInstanceProps: function(e) {},
				shouldResetStyleCacheOnItemSizeChange: !0,
				validateProps: function(e) {
					e.itemSize
				}
			});

		function Zs(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Xs = function(e) {
			lt(o, e);
			var r = Zs(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).componentDidMount = function() {
					t.props.getTransactions(t.props.outlet.id), t.props.getOrders(t.props.outlet.id)
				}, t.handleManualTransactionInput = function(e, n) {
					13 == e.which ? t.handleManualTransactionSubmit() : t.setState(Tt({}, n, e.target.value))
				}, t.handleChangeTransactionType = function(e) {
					t.setState({
						transactionType: e
					})
				}, t.handleToggleTransactionPopup = function() {
					t.setState({
						showTransactionPopup: !t.state.showTransactionPopup
					})
				}, t.handleTransactionSearch = function(e) {
					t.setState({
						search: e.target.value
					})
				}, t.handleManualTransactionSubmit = function() {
					if (navigator.onLine) {
						t.handleToggleTransactionPopup();
						var e = {
							in: "in" == t.state.transactionType ? t.state.transactionAmount : "",
							out: "out" == t.state.transactionType ? t.state.transactionAmount : "",
							outlet_id: t.props.outlet.id,
							method: "manual",
							reference: t.state.transactionReference
						};
						t.props.saveTransaction(e)
					} else ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Transaction cannot be generated in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.state = {
					search: "",
					showTransactionPopup: !1,
					transactionAmount: "",
					transactionReference: "",
					transactionType: "in"
				}, t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = 0,
						o = 0,
						i = 0,
						a = this.props.transactions;
					a.forEach((function(e) {
						"opencash" == e.method ? r = parseFloat(e.in) : "cash" == e.method ? (e.in && (o += parseFloat(e.in)), e.out && (o -= parseFloat(e.out))) : "manual" == e.method && (e.in && (i += parseFloat(e.in)), e.out && (i -= parseFloat(e.out)))
					})), i += r + o;
					var s = this.state.search.toLowerCase();
					s && (a = a.filter((function(e) {
						return !!(-1 != e.id.toLowerCase().indexOf(s) || e.order_id && -1 != e.order_id.toLowerCase().indexOf(s) || -1 != e.method.toLowerCase().indexOf(s) || -1 != e.reference.toLowerCase().indexOf(s))
					}))), a.sort((function(e, t) {
						return e.id < t.id ? 1 : t.id < e.id ? -1 : 0
					}));
					var c = this.props.orders.list.filter((function(e) {
							var t = new Date(e.order_created),
								n = new Date((0, Ie.applyFilters)("ddwcpos_modify_current_date_for_transactions", ddwcposPOSObj.current_date));
							return t.getTime() >= n.getTime()
						})),
						l = (0, Ie.applyFilters)("ddwcpos_modify_today_total_sale_amount", c.reduce((function(e, t) {
							return e + parseFloat(t.order_total - t.order_refunded)
						}), 0), this),
						u = (0, Ie.applyFilters)("ddwcpos_modify_transactions_list_row_height", 52),
						d = "";
					if (this.state.showTransactionPopup) {
						var p = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Manual Transaction", "ddwc-multipos")), (0, t.createElement)("div", {
								className: "ddwcpos-popup-options-group"
							}, (0, t.createElement)("h3", null, (0, ft.__)("Select Transaction Type", "ddwc-multipos")), (0, t.createElement)("div", {
								className: "ddwcpos-popup-options"
							}, (0, t.createElement)("p", {
								onClick: function(t) {
									return e.handleChangeTransactionType("in")
								},
								className: "in" == this.state.transactionType ? "ddwcpos-selected-options" : null
							}, (0, ft.__)("In", "ddwc-multipos")), (0, t.createElement)("p", {
								onClick: function(t) {
									return e.handleChangeTransactionType("out")
								},
								className: "out" == this.state.transactionType ? "ddwcpos-selected-options" : null
							}, (0, ft.__)("Out", "ddwc-multipos")))), (0, t.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(t) {
									return e.handleManualTransactionInput(t, "transactionAmount")
								},
								placeholder: (0, ft.__)("Enter Amount", "ddwc-multipos"),
								autoFocus: !0
							}), (0, t.createElement)("input", {
								type: "text",
								onKeyUp: function(t) {
									return e.handleManualTransactionInput(t, "transactionReference")
								},
								placeholder: (0, ft.__)("Enter Reason (Optional)", "ddwc-multipos")
							})),
							f = {
								handleOverlay: this.handleToggleTransactionPopup,
								popupContent: p,
								notDisabled: this.state.transactionAmount,
								handleSuccess: this.handleManualTransactionSubmit,
								handleCancel: this.handleToggleTransactionPopup
							};
						d = (0, t.createElement)(xs, f)
					}
					return (0, t.createElement)("div", {
						className: "ddwcpos-statistics-tab-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-statistics-summary"
					}, (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Open Cash Drawer Amount", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(r))), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Today's Cash Sale", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(o))), (0, Ie.applyFilters)("ddwcpos_add_content_after_today_cash_sale", "", this), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Today's Total Sale", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(l))), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Expected Drawer Amount", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(i)))), (0, t.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, t.createElement)("h2", null, (0, ft.__)("Today's Transactions", "ddwc-multipos")), (0, t.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, t.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						defaultValue: this.state.search,
						placeholder: (0, ft.__)("Search Transaction...", "ddwc-multipos"),
						onKeyUp: function(t) {
							return e.handleTransactionSearch(t)
						},
						autoComplete: "off"
					}), (0, t.createElement)(Rs, null)), (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleToggleTransactionPopup,
						title: (0, ft.__)("Add Manual Transaction", "ddwc-multipos")
					}, (0, t.createElement)(Ha, null)), (0, t.createElement)("span", null, a.length + " " + (0, ft.__)("Results", "ddwc-multipos"))), d), (0, t.createElement)("div", {
						className: "ddwcpos-transactions-list"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-list-heading-row"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-list-details"
					}, (0, t.createElement)("p", null, (0, ft.__)("Transaction ID", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("Order ID", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("In", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("Out", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("Method", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("Reference", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.__)("Date", "ddwc-multipos")), (0, Ie.applyFilters)("ddwcpos_add_more_column_after_date_in_today_transactions", "", this))), a.length ? (0, t.createElement)(Js, {
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
						if ("opencash" == a[r].method) s = (0, ft.__)("Open Cash Drawer Amount", "ddwc-multipos");
						else if ("manual" == a[r].method) s = (0, ft.__)("Manual", "ddwc-multipos");
						else {
							var c = Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).filter((function(e) {
								return e.slug == a[r].method
							}));
							c.length && (s = c[0].name)
						}
						return (0, t.createElement)("div", {
							className: i,
							style: o
						}, (0, t.createElement)("div", {
							className: "ddwcpos-list-details"
						}, (0, t.createElement)("p", null, "#", a[r].id), (0, t.createElement)("p", null, a[r].order_id ? "#" + a[r].order_id : "-"), (0, t.createElement)("p", null, (0, t.createElement)("mark", {
							className: "instock"
						}, "+ ", (0, Ia.R)(a[r].in))), (0, t.createElement)("p", null, (0, t.createElement)("mark", {
							className: "required"
						}, "- ", (0, Ia.R)(a[r].out))), (0, t.createElement)("p", null, s), (0, t.createElement)("p", null, a[r].reference ? a[r].reference : "-"), (0, t.createElement)("p", null, a[r].date), (0, Ie.applyFilters)("ddwcpos_add_more_column_content_after_date_in_today_transactions", "", a[r], e)))
					})) : (0, t.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Transactions Found", "ddwc-multipos")))))
				}
			}]), o
		}(n.Component);
		const ec = q((function(e) {
			return {
				transactions: e.transactions,
				orders: e.orders
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getTransactions: nc,
				getOrders: ac,
				saveTransaction: rc
			}, e))
		}))(Xs);
		var tc = function(e) {
				return {
					type: "TRANSACTIONS",
					transactions: e
				}
			},
			nc = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(t) {
					xi.table("transactions").where("date").startsWithIgnoreCase(ddwcposPOSObj.ddwcpos_configuration.current_date).toArray().then((function(n) {
						n.length <= 0 ? (ht.store.addNotification({
							title: (0, ft.__)("Loading Transactions", "ddwc-multipos"),
							message: (0, ft.__)("Loading Transactions in the POS", "ddwc-multipos"),
							type: "info",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), Di(ddwcposPOSObj.API.GET_TRANSACTIONS_ENDPOINT, {
							outlet_id: e,
							date: (0, Ie.applyFilters)("ddwcpos_modify_current_date_for_transactions", ddwcposPOSObj.current_date)
						}).then((function(e) {
							e.length ? oc(e).then((function(n) {
								t(tc(e)), ht.store.addNotification({
									title: (0, ft.__)("Transactions Loaded", "ddwc-multipos"),
									message: (0, ft.__)("All Transactions are loaded successfully.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								})
							})) : (ht.store.addNotification({
								title: (0, ft.__)("No Transaction Found", "ddwc-multipos"),
								message: (0, ft.__)("No transaction has been generated for today yet in this outlet.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), t(tc([])))
						}))) : t(tc(n))
					}))
				}
			},
			rc = function(e) {
				return function(t) {
					Di(ddwcposPOSObj.API.CREATE_TRANSACTION_ENDPOINT, e).then((function(n) {
						n.length && oc(n).then((function(n) {
							t(nc()), "opencash" == e.method ? ht.store.addNotification({
								title: (0, ft.__)("Success", "ddwc-multipos"),
								message: (0, ft.__)("Open cash drawer amount is set successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : "manual" == e.method ? ht.store.addNotification({
								title: (0, ft.__)("Success", "ddwc-multipos"),
								message: (0, ft.__)("Manual transaction has been generated successfully.", "ddwc-multipos"),
								type: "success",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}) : ht.store.addNotification({
								title: (0, ft.__)("Success", "ddwc-multipos"),
								message: (0, ft.__)("Manual transaction is generated successfully.", "ddwc-multipos"),
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
			oc = function(e) {
				return xi.transactions.bulkPut(e).then((function(e) {
					return e
				}))
			},
			ic = function(e) {
				return {
					type: "ORDERS",
					orders: e
				}
			},
			ac = function(e) {
				return function(t) {
					cc().then((function(n) {
						if (n && n.length) sc().then((function(e) {
							t(ic({
								list: e,
								s: "",
								sorder: e
							}))
						}));
						else {
							ht.store.addNotification({
								title: (0, ft.__)("Loading Orders", "ddwc-multipos"),
								message: (0, ft.__)("Loading Orders in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(e),
								per_page: -1,
								current_page: 0
							};
							lc(r, t)
						}
					}))
				}
			},
			sc = function() {
				return xi.table("orders").toArray().then((function(e) {
					return e || !1
				}))
			},
			cc = function() {
				return xi.table("orders").where("order_type").equals("online").toArray().then((function(e) {
					return e
				}))
			},
			lc = function e(t, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Di(ddwcposPOSObj.API.GET_ORDERS_ENDPOINT, t).then((function(i) {
						"number" == typeof i ? (t.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++t.current_page, i > 0 ? e(t, n, i) : sc().then((function(e) {
							var t = {
								list: e,
								s: "",
								sorder: e
							};
							ht.store.addNotification({
								title: (0, ft.__)("No Orders Found", "ddwc-multipos"),
								message: (0, ft.__)("No orders have been placed yet in this outlet.", "ddwc-multipos"),
								type: "danger",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							}), n(ic(t))
						}))) : i.length > 0 && xi.table("orders").bulkPut(i).then((function(i) {
							sc().then((function(e) {
								n(ic({
									list: e,
									s: "",
									sorder: e
								}))
							})), (r = r > 0 ? r - t.per_page : 0) > 0 ? (++t.current_page, e(t, n, r)) : (ht.store.addNotification({
								title: (0, ft.__)("Orders Loaded", "ddwc-multipos"),
								message: (0, ft.__)("All Orders are loaded successfully.", "ddwc-multipos"),
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
			uc = function(e, t) {
				return function(n, r) {
					return new Promise((function(o, i) {
						var a = r(),
							s = a.cart,
							c = a.customers.defaultCustomer,
							l = s.list[0].id,
							u = e.orderNote,
							d = [],
							p = 0,
							f = "",
							h = "";
						if (e.paymentMethods.forEach((function(e) {
								if (e.amount) {
									p += parseFloat(e.amount);
									var t = !0;
									d.length && d.forEach((function(n, r) {
										n.slug == e.slug && (d[r].amount = parseFloat(d[r].amount) + parseFloat(e.amount), t = !1)
									})), t && d.push(e)
								}
							})), (0, Ie.applyFilters)("ddwcpos_reject_order_creation_by_payment_methods_at_pos", !1, d, e, a, ht.store)) i([]);
						else {
							e.paymentMethods.length > 1 ? (f = "split", h = (0, ft.__)("Split", "ddwc-multipos")) : (f = e.paymentMethods[0].slug, h = e.paymentMethods[0].name);
							var m = {
								order_note: u,
								discount: a.discount.length ? a.discount[0].discount : [],
								coupons: a.coupon.length ? a.coupon[0].coupon : [],
								customer_id: c.id,
								products: a.cart.list[0].cart,
								payment_methods: d,
								table: a.tables.defaultTable
							};
							if (m = (0, Ie.applyFilters)("ddwcpos_modify_order_details", m, e, a, t)) {
								var g = {
									outlet_id: a.outlet.id,
									order_data: JSON.stringify(m)
								};
								if (!ddwcposPOSObj.ddwcpos_configuration.offline_orders_enabled && navigator.onLine) Di(ddwcposPOSObj.API.CREATE_ORDER_ENDPOINT, g).then((function(e) {
									(0, Ie.doAction)("ddwcpos_after_creating_order_at_pos", e, xi), oc(e.transactions).then((function(e) {
										n(nc())
									})), dc(e), pc(e.products, l).then((function(t) {
										o(e)
									}))
								}));
								else {
									var _ = parseFloat(s.total.cart_total),
										v = {},
										y = Math.floor(999999999 * Math.random() + 1e8),
										w = new Date;
									v.id = y, v.offline_id = y, v.order_id = y, v.order_subtotal = parseFloat(s.total.cart_subtotal), v.coupons = a.coupon.length ? a.coupon[0].coupon : [], v.order_date = w.toDateString() + " " + w.toLocaleTimeString(), v.discount = a.discount.length ? a.discount[0].discount : [], v.order_status_label = ddwcposPOSObj.ddwcpos_configuration.order_status_label, v.order_currency = ddwcposPOSObj.currency_code, v.order_currency_symbol = ddwcposPOSObj.currency_format_symbol, v.order_total = _, v.order_refunded = 0, v.order_note = u, v.products = a.cart.list[0].cart, v.payment_method = f, v.payment_title = h, v.payment_methods = d, v.tendered = p, v.order_type = "offline", v.customer_id = c.id, v.email = c.email, v.change = p - _ > 0 ? p - _ : 0, v.billing = c.billing, v.shipping = c.shipping, v.tax_lines = a.taxes, v.table = a.tables.defaultTable, v = (0, Ie.applyFilters)("ddwcpos_modify_order_details", v, e, a), dc(v), pc(v.products, l).then((function(e) {
										o(v)
									}))
								}
							} else o([])
						}
					}))
				}
			},
			dc = function(e) {
				return new Promise((function(t, n) {
					xi.table("orders").put(e).then((function(n) {
						t(e)
					}))
				}))
			},
			pc = function(e, t) {
				return new Promise((function(n, r) {
					xi.cart.where("id").equals(t).delete().then((function(r) {
						r && (e.forEach((function(e) {
							e.parent && xi.products.where("product_id").equals(e.parent).toArray().then((function(t) {
								if (t.length) {
									var n = t[0].available_variations.map((function(t) {
										return t.variation_id == e.id && (t.stock = t.stock - e.quantity, t.stock_quantity = t.stock_quantity > 0 ? t.stock_quantity - e.quantity : t.stock_quantity), t
									}));
									xi.products.where("product_id").equals(e.parent).modify((function(e) {
										e.available_variations = n
									}))
								}
							})), xi.products.where("product_id").equals(e.id).modify((function(t) {
								t.stock = t.stock - e.quantity, t.stock_quantity = t.stock_quantity > 0 ? t.stock_quantity - e.quantity : t.stock_quantity
							}))
						})), xi.coupon.where("cart_id").equals(t).delete().then((function(e) {
							xi.discount.where("cart_id").equals(t).delete().then((function(e) {
								n(e)
							}))
						})))
					}))
				}))
			},
			fc = function(e) {
				return function(t, n) {
					return new Promise((function(r, o) {
						var i = {
							outlet_id: n().outlet.id,
							offline_orders: JSON.stringify(e)
						};
						Di(ddwcposPOSObj.API.CREATE_ORDER_ENDPOINT, i).then((function(e) {
							if (e.length > 0) {
								var n = e.map((function(e) {
									return (0, Ie.doAction)("ddwcpos_after_creating_order_at_pos", e, xi), oc(e.transactions), e.offline_id
								}));
								xi.orders.bulkDelete(n).then((function(n) {
									xi.orders.bulkPut(e).then((function(n) {
										t(nc()), r(e)
									}))
								}))
							}
						}))
					}))
				}
			},
			hc = function(e, t) {
				return function(n) {
					if (e) {
						var r = t.filter((function(t) {
							return -1 != t.order_id.toString().indexOf(e) || t.offline_id && -1 != t.offline_id.toString().indexOf(e) || t.billing.phone && -1 != t.billing.phone.toString().indexOf(e) || t.email && -1 != t.email.toString().indexOf(e) || t.billing.fname && -1 != t.billing.fname.toString().indexOf(e) || t.billing.lname && -1 != t.billing.lname.toString().indexOf(e)
						}));
						n(ic({
							list: t,
							s: e,
							sorder: r
						}))
					} else {
						n(ic({
							list: t,
							s: "",
							sorder: t
						}))
					}
				}
			},
			mc = function(e) {
				return function(t, n) {
					return new Promise((function(r, o) {
						var i = {
							outlet_id: n().outlet.id,
							refund_data: JSON.stringify(e)
						};
						Di(ddwcposPOSObj.API.CREATE_REFUND_ENDPOINT, i).then((function(e) {
							oc(e.transactions).then((function(e) {
								t(nc())
							})), dc(e), r(e)
						}))
					}))
				}
			},
			gc = function(e, t) {
				return function(n, r) {
					return new Promise((function(n, r) {
						e.forEach((function(e) {
							"custom" !== e.type && t[e.item_id] && (e.parent && xi.products.where("product_id").equals(e.parent).toArray().then((function(n) {
								if (n.length) {
									var r = n[0].available_variations.map((function(n) {
										return n.variation_id == e.id && (n.stock = n.stock + t[e.item_id], n.stock_quantity = n.stock_quantity + t[e.item_id]), n
									}));
									xi.products.where("product_id").equals(e.parent).modify((function(e) {
										e.available_variations = r
									}))
								}
							})), xi.products.where("product_id").equals(e.id).modify((function(n) {
								n.stock = n.stock + t[e.item_id], n.stock_quantity = n.stock_quantity + t[e.item_id]
							})))
						})), n(!0)
					}))
				}
			},
			_c = function(e) {
				return {
					type: "CUSTOMERS",
					customers: e
				}
			},
			vc = function(e) {
				return function(t) {
					yc().then((function(n) {
						if (n && n.length) {
							var r = n.filter((function(e) {
									return e.default
								})),
								o = {
									list: n,
									defaultCustomer: r.length ? r[0] : {},
									s: "",
									searchedCustomers: n
								};
							t(_c(o))
						} else {
							ht.store.addNotification({
								title: (0, ft.__)("Loading Customers", "ddwc-multipos"),
								message: (0, ft.__)("Loading Customers in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var i = {
								outlet_id: parseInt(e),
								per_page: -1,
								current_page: 0
							};
							wc(i, t)
						}
					}))
				}
			},
			yc = function() {
				return xi.table("customers").toArray().then((function(e) {
					return e || !1
				}))
			},
			wc = function e(t, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Di(ddwcposPOSObj.API.GET_CUSTOMERS_ENDPOINT, t).then((function(i) {
						"number" == typeof i ? (t.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++t.current_page, i > 0 ? e(t, n, i) : yc().then((function(e) {
							var t = e.filter((function(e) {
									return e.default
								})),
								r = {
									list: e,
									defaultCustomer: t.length ? t[0] : {},
									s: "",
									searchedCustomers: e
								};
							n(_c(r))
						}))) : i.length > 0 && xi.table("customers").bulkPut(i).then((function(i) {
							yc().then((function(e) {
								var t = e.filter((function(e) {
										return e.default
									})),
									r = {
										list: e,
										defaultCustomer: t.length ? t[0] : {},
										s: "",
										searchedCustomers: e
									};
								n(_c(r))
							})), (r = r > 0 ? r - t.per_page : 0) > 0 ? (++t.current_page, e(t, n, r)) : (ht.store.addNotification({
								title: (0, ft.__)("Customers Loaded", "ddwc-multipos"),
								message: (0, ft.__)("All Customers are loaded successfully", "ddwc-multipos"),
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
			bc = function(e, t, n) {
				return function(r) {
					if (e) xi.table("customers").where("first_name").startsWithIgnoreCase(e).or("last_name").startsWithIgnoreCase(e).or("email").startsWithIgnoreCase(e).or("phone").startsWithIgnoreCase(e).or("username").startsWithIgnoreCase(e).toArray().then((function(o) {
						var i = {
							list: t.list,
							defaultCustomer: n,
							s: e,
							searchedCustomers: o
						};
						r(_c(i))
					}));
					else {
						var o = {
							list: t.list,
							defaultCustomer: n,
							s: "",
							searchedCustomers: t.list
						};
						r(_c(o))
					}
				}
			},
			Ec = function(e) {
				return function(t, n) {
					var r = n().outlet.id;
					xi.table("customers").toCollection().modify((function(e) {
						e.default = 0
					})), xi.table("customers").update(e, {
						default: 1
					}).then((function(e) {
						t(vc(r)), ht.store.addNotification({
							title: (0, ft.__)("Customer Set", "ddwc-multipos"),
							message: (0, ft.__)("Customer is set successfully for the order.", "ddwc-multipos"),
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
			Oc = function(e, t) {
				return function(n, r) {
					var o = {
						customer_data: e,
						outlet_id: parseInt(r().outlet.id)
					};
					return new Promise((function(e, i) {
						Di(ddwcposPOSObj.API.MANAGE_CUSTOMER_ENDPOINT, o).then((function(e) {
							if (e.success) return xi.table("customers").put(e.data).then((function(o) {
								if (o) {
									t.props.handleResetEditCustomer(), ht.store.addNotification({
										title: (0, ft.__)("Success", "ddwc-multipos"),
										message: e.message,
										type: "success",
										insert: "top",
										container: "top-right",
										dismiss: {
											duration: 3e3,
											pauseOnHover: !0
										}
									});
									var i = r().outlet.id;
									n(vc(i))
								}
							}));
							ht.store.addNotification({
								title: (0, ft.__)("Error", "ddwc-multipos"),
								message: e.message,
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
			Sc = function(e) {
				return function(t, n) {
					return new Promise((function(r, o) {
						Di(ddwcposPOSObj.API.DELETE_CUSTOMER_ENDPOINT, {
							customer_id: e
						}).then((function(r) {
							r && r == e && xi.table("customers").where("id").equals(e).delete().then((function(e) {
								ht.store.addNotification({
									title: (0, ft.__)("Success", "ddwc-multipos"),
									message: (0, ft.__)("Customer deleted successfully.", "ddwc-multipos"),
									type: "success",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								});
								var r = n().outlet.id;
								t(vc(r))
							}))
						}))
					}))
				}
			};

		function Cc(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var xc = function(r) {
			lt(i, r);
			var o = Cc(i);

			function i(e) {
				var t;
				return at(this, i), (t = o.call(this, e)).componentDidMount = function() {
					t.props.getDiscount(), t.props.getCoupons(), t.props.getCustomers(t.props.outlet.id), t.props.getCart(), t.props.getHoldCarts(), t.props.getOrders(t.props.outlet.id), t.props.getTables(), window.addEventListener("online", (function() {
						return t.setState({
							online: !0
						})
					})), window.addEventListener("offline", (function() {
						return t.setState({
							online: !1
						})
					}))
				}, t.componentWillUnmount = function() {
					window.removeEventListener("online", (function() {
						return t.setState({
							online: !0
						})
					}), !1), window.removeEventListener("offline", (function() {
						return t.setState({
							online: !1
						})
					}), !1)
				}, t.handleResetCartButton = function() {
					t.props.cart.list.length ? t.props.clearIndexDB().then((function(e) {
						t.props.getDiscount(), t.props.getCoupons(), t.props.getCart()
					})) : ht.store.addNotification({
						title: (0, ft.__)("Empty Cart", "ddwc-multipos"),
						message: (0, ft.__)("Cart is already empty.", "ddwc-multipos"),
						type: "info",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleToggleShowSelectTablePopup = function() {
					t.setState({
						showSelectTablePopup: !t.state.showSelectTablePopup
					})
				}, t.handleSelectMode = function(e) {
					t.handleToggleShowSelectTablePopup(), "dine_in" === e ? t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/all")) : "take_away" === e && t.props.updateDefaultTable()
				}, t.state = {
					showSelectTablePopup: !1,
					online: navigator.onLine
				}, t
			}
			return ct(i, [{
				key: "render",
				value: function() {
					var r = this,
						o = this.props.cart.list,
						i = this.props.customers.defaultCustomer,
						a = this.props.tables.defaultTable,
						s = this.props.holdCarts.length,
						c = this.props.orders.sorder.filter((function(e) {
							return "offline" == e.order_type
						})).length,
						l = [];
					o.length > 0 && (l = o[0].cart.map((function(n, o) {
						return (0, t.createElement)(Xa, e({
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
					"restaurant" == this.props.outlet.mode && (p.gridTemplateColumns = "max-content max-content auto auto"), p = (0, Ie.applyFilters)("ddwcpos_modify_cart_header_at_pos", p, this);
					var f = null;
					if (this.state.showSelectTablePopup) {
						var h = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Select Mode", "ddwc-multipos")), (0, t.createElement)("div", {
								className: "ddwcpos-mode-options"
							}, (0, t.createElement)("span", {
								onClick: function(e) {
									return r.handleSelectMode("dine_in")
								}
							}, (0, t.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, t.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, t.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							})))), (0, t.createElement)("p", null, (0, ft.__)("Dine in", "ddwc-multipos"))), (0, t.createElement)("span", {
								onClick: function(e) {
									return r.handleSelectMode("take_away")
								}
							}, (0, t.createElement)("svg", {
								"data-name": "Layer 1",
								id: "Layer_1",
								viewBox: "0 0 64 64",
								xmlns: "http://www.w3.org/2000/svg"
							}, (0, t.createElement)("path", {
								d: "M46.958,42.1712A14.9968,14.9968,0,0,0,33,28.0507V27a1,1,0,0,0-2,0v1.0507A14.9967,14.9967,0,0,0,17.042,42.1712,2.9918,2.9918,0,0,0,18,48H46a2.9918,2.9918,0,0,0,.958-5.8288ZM32,30A13.0086,13.0086,0,0,1,44.9493,42H19.0507A13.0086,13.0086,0,0,1,32,30ZM46,46H18a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2ZM56.9883,19.8481,55.04,7.1864A2.9831,2.9831,0,0,0,56,5V3a3.0033,3.0033,0,0,0-3-3H11A3.0033,3.0033,0,0,0,8,3V5a2.9831,2.9831,0,0,0,.96,2.1864L7.0117,19.8481A.9914.9914,0,0,0,7,20V61a3.0033,3.0033,0,0,0,3,3H54a3.0033,3.0033,0,0,0,3-3V20A.9914.9914,0,0,0,56.9883,19.8481ZM10,3a1.0009,1.0009,0,0,1,1-1H53a1.0009,1.0009,0,0,1,1,1V5a1.0009,1.0009,0,0,1-1,1H35V4a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1V6H11a1.0009,1.0009,0,0,1-1-1ZM33,5v6H31V5ZM55,61a1.0009,1.0009,0,0,1-1,1H10a1.0009,1.0009,0,0,1-1-1V20.0767L10.8584,8H29v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V8H53.1416L55,20.0767Z"
							})), (0, t.createElement)("p", null, (0, ft.__)("Take Away", "ddwc-multipos"))))),
							m = {
								handleOverlay: this.handleToggleShowSelectTablePopup,
								popupContent: h,
								hideActions: !0
							};
						f = (0, t.createElement)(xs, m)
					}
					return (0, t.createElement)("div", {
						className: "ddwcpos-cart-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-cart-header",
						style: p
					}, (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						style: u,
						title: this.state.online ? (0, ft.__)("Online", "ddwc-multipos") : (0, ft.__)("Offline", "ddwc-multipos")
					}, (0, t.createElement)(Gi, null)), (0, t.createElement)(bt, {
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
					}, (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						title: (0, ft.__)("Sync Offline Orders", "ddwc-multipos")
					}, c ? (0, t.createElement)("span", {
						className: "ddwcpos-card-count"
					}, c) : null, (0, t.createElement)(Yi, null))), (0, t.createElement)(bt, {
						className: "ddwcpos-button",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/customers")
					}, Object.keys(i).length ? (0, t.createElement)(n.Fragment, null, (0, t.createElement)("img", {
						src: i.avatar_url,
						alt: i.username,
						width: "30",
						height: "30"
					}), (0, t.createElement)("p", null, d), (0, t.createElement)(Xi, null)) : (0, t.createElement)(n.Fragment, null, (0, t.createElement)(na, null), (0, t.createElement)("p", null, (0, ft.__)("Select Customer", "ddwc-multipos")))), (0, Ie.applyFilters)("ddwcpos_add_data_after_select_customer_button", "", this, ht.store), "restaurant" == this.props.outlet.mode ? (0, t.createElement)("button", {
						className: "ddwcpos-button ddwcpos-button-green",
						onClick: function(e) {
							return r.handleToggleShowSelectTablePopup()
						}
					}, Object.keys(a).length ? (0, t.createElement)(n.Fragment, null, (0, t.createElement)("span", {
						className: "ddwcpos-table-icon",
						role: "img"
					}, (0, t.createElement)("svg", {
						version: "1.1",
						id: "Capa_1",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						viewBox: "0 0 214.539 214.539"
					}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
						d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
					}), (0, t.createElement)("path", {
						d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
					}), (0, t.createElement)("path", {
						d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
					}))))), (0, t.createElement)("p", null, a.name), (0, t.createElement)(Xi, null)) : (0, t.createElement)(n.Fragment, null, (0, t.createElement)("span", null, (0, t.createElement)("svg", {
						version: "1.1",
						id: "Capa_1",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						viewBox: "0 0 214.539 214.539"
					}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
						d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
					}), (0, t.createElement)("path", {
						d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
					}), (0, t.createElement)("path", {
						d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
					}))))), (0, t.createElement)("p", null, (0, ft.__)("Select Table", "ddwc-multipos")))) : null), (0, t.createElement)("div", {
						className: "ddwcpos-cart-products-list"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-cart-header"
					}, (0, t.createElement)("h2", null, (0, t.createElement)(Nn, null), (0, ft.__)("Cart Items", "ddwc-multipos")), (0, t.createElement)(bt, {
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
					}, (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleSyncOrdersButton,
						title: (0, ft.__)("Check Hold Orders", "ddwc-multipos")
					}, s ? (0, t.createElement)("span", {
						className: "ddwcpos-card-count"
					}, s) : null, (0, t.createElement)(ia, null))), (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleResetCartButton,
						title: (0, ft.__)("Reset Cart", "ddwc-multipos")
					}, (0, t.createElement)(ki, null))), (0, t.createElement)("div", {
						className: "ddwcpos-cart-products"
					}, l)), (0, t.createElement)(ks, this.props), f)
				}
			}]), i
		}(n.Component);
		const Pc = q((function(e) {
			return {
				cart: e.cart,
				holdCarts: e.holdCarts,
				discount: e.discount,
				taxes: e.taxes,
				coupon: e.coupon,
				customers: e.customers,
				orders: e.orders,
				tables: e.tables
			}
		}), (function(e) {
			var t;
			return Object.assign({
				dispatch: e
			}, (0, S.DE)((Tt(t = {
				getCart: _a
			}, "getCart", _a), Tt(t, "clearIndexDB", ga), Tt(t, "getCoupons", ca), Tt(t, "getDiscount", ds), Tt(t, "getHoldCarts", as), Tt(t, "getOrders", ac), Tt(t, "updateDefaultTable", os), Tt(t, "getCustomers", vc), Tt(t, "getTables", rs), t), e))
		}))(xc);

		function Tc(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		const kc = function(e) {
			lt(o, e);
			var n = Tc(o);

			function o(e) {
				var t;
				return at(this, o), (t = n.call(this, e)).showCart = function() {
					var e = t.props.page.name,
						n = (0, Ie.applyFilters)("ddwcpos_modify_pages_that_shows_cart", ["Home", "Category", "Pay"], t.props);
					return window.screen.width >= 720 && n.includes(e)
				}, t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = {};
					return this.showCart() || (e.gridTemplateColumns = "unset"), (0, t.createElement)("div", {
						className: "ddwcpos-tabs-container",
						style: e
					}, r().createElement(this.props.page.component, this.props), this.showCart() ? (0, t.createElement)(Pc, this.props) : null)
				}
			}]), o
		}(n.Component);
		__webpack_require__(4352);

		function Nc(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Ac = function(n) {
			lt(o, n);
			var r = Nc(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).changeCurrentOutlet = function(e) {
					t.props.setCurrentOutlet(e).then((function(e) {
						t.setState({
							outletFetched: !0
						})
					}))
				}, t.state = {
					outletFetched: !1,
					licenseNotActivated: !1
				}, t
			}
			return ct(o, [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.props.setCurrentOutlet().then((function(t) {
						e.setState({
							outletFetched: !0
						})
					})), (0, Ie.doAction)("ddwcpos_on_app_component_mount", this);
					var t = atob(localStorage.getItem("ddwcposLicenseCheck"));
					if ((t = t.replace("ddwcpos-", "")) !== ddwcposPOSObj.ddwcpos_configuration.purchase_code) {
						var n = {
							purchase_code: ddwcposPOSObj.ddwcpos_configuration.purchase_code,
							user_agent: ddwcposPOSObj.site_url
						};
						Di(ddwcposPOSObj.site_url + "/wp-json/custom/v1/check-license2", n).then((function(t) {
							t ? t.success ? "deactivated" === t.status || "deleted" === t.status ? e.setState({
								licenseNotActivated: (0, ft.__)("Your license is not activated", "ddwc-multipos")
							}) : localStorage.setItem("ddwcposLicenseCheck", btoa("ddwcpos-" + ddwcposPOSObj.ddwcpos_configuration.purchase_code)) : e.setState({
								licenseNotActivated: t.message
							}) : e.setState({
								licenseNotActivated: (0, ft.__)("Your license is not activated", "ddwc-multipos")
							})
						}))
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
						return (0, t.createElement)("div", {
							className: "ddwcpos-login-wrapper",
							style: r
						}, (0, t.createElement)("div", {
							className: "ddwcpos-login-container"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-outlets-container"
						}, (0, t.createElement)("p", {
							dangerouslySetInnerHTML: {
								__html: this.state.licenseNotActivated
							}
						}))), (0, t.createElement)("ul", {
							className: "ddwcpos-bubbles"
						}, (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null)))
					}
					if (!this.state.outletFetched) return (0, t.createElement)("div", {
						className: "ddwcpos-container"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-progress-bar"
					}));
					if (Object.keys(this.props.outlet).length > 0) return (0, t.createElement)("div", {
						className: "ddwcpos-container"
					}, (0, t.createElement)(mt(), null), (0, t.createElement)("div", {
						className: "ddwcpos-progress-bar"
					}), (0, t.createElement)(Vi, this.props), (0, t.createElement)(kc, e({}, this.props, {
						notification: ht.store
					})));
					if (!this.state.outletLoaded) {
						var o = "";
						ddwcposPOSObj.assignedOutlets.length && (o = ddwcposPOSObj.assignedOutlets.map((function(e) {
							return (0, t.createElement)("li", {
								key: e.id,
								onClick: function(t) {
									return n.changeCurrentOutlet(e.id)
								}
							}, e.name)
						})));
						var i = {
							backgroundImage: "linear-gradient(".concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_primary_color, " 0%, ").concat(ddwcposPOSObj.ddwcpos_configuration.login_bg_secondary_color, " 100%)"),
							color: ddwcposPOSObj.ddwcpos_configuration.login_font_color
						};
						return (0, t.createElement)("div", {
							className: "ddwcpos-login-wrapper",
							style: i
						}, (0, t.createElement)("div", {
							className: "ddwcpos-login-container"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-outlets-container"
						}, (0, t.createElement)("h1", null, (0, ft.__)("Select Outlet", "ddwc-multipos")), o ? (0, t.createElement)("ul", null, o) : (0, t.createElement)("p", null, (0, ft.__)("You do not have any assigned outlet!!", "ddwc-multipos")))), (0, t.createElement)("ul", {
							className: "ddwcpos-bubbles"
						}, (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null), (0, t.createElement)("li", null)))
					}
				}
			}]), o
		}(n.Component);
		const Rc = q((function(e) {
			return {
				outlet: e.outlet
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				setCurrentOutlet: ji
			}, e))
		}))(Ac);
		var Dc = __webpack_require__(1216);
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
		var Ic = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Lc
			}))
		};
		Ic.displayName = "DatabaseOutlined";
		const Mc = n.forwardRef(Ic);
		const qc = {
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
		var jc = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: qc
			}))
		};
		jc.displayName = "AppstoreOutlined";
		const Bc = n.forwardRef(jc);
		const Fc = {
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
		var Hc = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Fc
			}))
		};
		Hc.displayName = "CheckOutlined";
		const Uc = n.forwardRef(Hc);
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
						d: "M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
					}
				}]
			},
			name: "barcode",
			theme: "outlined"
		};
		var Vc = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: zc
			}))
		};
		Vc.displayName = "BarcodeOutlined";
		const Wc = n.forwardRef(Vc);
		var Kc = function(e) {
				return {
					type: "PRODUCTS",
					products: e
				}
			},
			Gc = function(e) {
				return {
					type: "TAXES",
					taxes: e
				}
			},
			$c = function() {
				return ddwcposPOSObj.ddwcpos_configuration.variation_product_enabled ? xi.table("products").where("type").notEqual("variable").toArray() : xi.table("products").where("type").notEqual("variation").toArray()
			},
			Qc = function() {
				return xi.table("taxes").toArray().then((function(e) {
					return e || !1
				}))
			},
			Yc = function(e) {
				return function(t) {
					return new Promise((function(n, r) {
						Qc().then((function(e) {
							e && e.length && t(Gc(e))
						})), $c().then((function(e) {
							return e || !1
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
								t(Kc(o)), n(o)
							} else {
								ht.store.addNotification({
									title: (0, ft.__)("Loading Products", "ddwc-multipos"),
									message: (0, ft.__)("Loading Products in the POS.", "ddwc-multipos"),
									type: "info",
									insert: "top",
									container: "top-right",
									dismiss: {
										duration: 3e3,
										pauseOnHover: !0
									}
								});
								var i = {
									outlet_id: parseInt(e),
									per_page: -1,
									current_page: 0
								};
								Jc(i, t).then((function(e) {
									n(e)
								}))
							}
						}))
					}))
				}
			},
			Jc = function e(t, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return new Promise((function(o, i) {
					Di(ddwcposPOSObj.API.GET_PRODUCTS_ENDPOINT, t).then((function(i) {
						if (i.total_products && "number" == typeof i.total_products) {
							var a = [];
							for (var s in i.taxes) a.push({
								id: parseInt(s),
								rate: i.taxes[s].rate,
								shipping: i.taxes[s].shipping,
								label: i.taxes[s].label,
								compound: i.taxes[s].compound
							});
							a.length && xi.table("taxes").bulkPut(a).then((function(e) {
								n(Gc(a))
							})), t.per_page = ddwcposPOSObj.ddwcpos_configuration.per_page, ++t.current_page, e(t, n, i.total_products).then((function(e) {
								o(e)
							}))
						} else xi.table("products").bulkPut(i).then((function(i) {
							(r = r > 0 ? r - t.per_page : 0) > 0 ? ($c().then((function(e) {
								n(Kc({
									list: e,
									isFetching: 1,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								}))
							})), ++t.current_page, e(t, n, r).then((function(e) {
								o(e)
							}))) : ($c().then((function(e) {
								var t = {
									list: e,
									isFetching: 0,
									s: "",
									sproducts: [],
									category: "",
									cproducts: []
								};
								n(Kc(t)), o(t)
							})), ht.store.addNotification({
								title: (0, ft.__)("Products Loaded", "ddwc-multipos"),
								message: (0, ft.__)("All Products are loaded successfully.", "ddwc-multipos"),
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
			Zc = function(e, t) {
				return function(n) {
					if (e) {
						var r = t.filter((function(t) {
							return t.categories.length > 0 && t.categories.includes(parseInt(e))
						}));
						n(Kc({
							list: t,
							isFetching: 0,
							s: "",
							sproducts: [],
							category: e,
							cproducts: r
						}))
					} else {
						n(Kc({
							list: t,
							isFetching: 0,
							s: "",
							sproducts: [],
							category: "",
							cproducts: []
						}))
					}
				}
			},
			Xc = function(e, t) {
				return function(n) {
					if ("" != e) {
						var r = "";
						if (t.cproducts.length) r = t.cproducts.filter((function(t) {
							return -1 != t.title.toLowerCase().indexOf(e) || t.sku && -1 != t.sku.toLowerCase().indexOf(e) || t.barcode_init && -1 != t.barcode_init.toLowerCase().indexOf(e)
						}));
						else r = t.list.filter((function(t) {
							return -1 != t.title.toLowerCase().indexOf(e) || t.sku && -1 != t.sku.toLowerCase().indexOf(e) || t.barcode_init && -1 != t.barcode_init.toLowerCase().indexOf(e)
						}));
						r = (0, Ie.applyFilters)("ddwcpos_modify_searched_products_list_at_pos", r, e, t), t.sproducts = r, t.s = e
					} else t.sproducts = [], t.s = "";
					n(Kc(t))
				}
			},
			el = function(e) {
				return {
					type: "CATEGORIES",
					categories: e
				}
			},
			tl = function(e) {
				return function(t) {
					rl().then((function(n) {
						if (n && n.length) t(el(n));
						else {
							ht.store.addNotification({
								title: (0, ft.__)("Loading Categories", "ddwc-multipos"),
								message: (0, ft.__)("Loading Categories in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(e)
							};
							Di(ddwcposPOSObj.API.GET_CATEGORIES_ENDPOINT, r).then((function(e) {
								xi.table("categories").bulkPut(e).then((function(e) {
									nl().then((function(e) {
										t(el(e)), ht.store.addNotification({
											title: (0, ft.__)("Categories Loaded", "ddwc-multipos"),
											message: (0, ft.__)("All Categories are loaded successfully", "ddwc-multipos"),
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
			nl = function() {
				return xi.table("categories").toArray()
			},
			rl = function() {
				return nl().then((function(e) {
					return e || !1
				}))
			},
			ol = function(e) {
				return {
					type: "COUNTRY_AND_STATES",
					countries_and_states: e
				}
			},
			il = function() {
				return xi.table("countries_and_states").toArray()
			},
			al = function(e) {
				return function(t) {
					il().then((function(e) {
						return e || !1
					})).then((function(n) {
						if (n && n.length) t(ol(n[0]));
						else {
							ht.store.addNotification({
								title: (0, ft.__)("Loading Countries & States", "ddwc-multipos"),
								message: (0, ft.__)("Loading Countries & States in the POS", "ddwc-multipos"),
								type: "info",
								insert: "top",
								container: "top-right",
								dismiss: {
									duration: 3e3,
									pauseOnHover: !0
								}
							});
							var r = {
								outlet_id: parseInt(e)
							};
							Di(ddwcposPOSObj.API.GET_COUNTRIES_STATES_ENDPOINT, r).then((function(e) {
								xi.table("countries_and_states").put(e).then((function(e) {
									il().then((function(e) {
										t(ol(e[0])), ht.store.addNotification({
											title: (0, ft.__)("Countries & States Loaded", "ddwc-multipos"),
											message: (0, ft.__)("All Countries & States are loaded successfully", "ddwc-multipos"),
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

		function sl(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var cl = function(e) {
			lt(o, e);
			var r = sl(o);

			function o(e) {
				var i;
				return at(this, o), (i = r.call(this, e)).handleToggleShowVariationPopup = function() {
					i.setState({
						showVariationPopup: !i.state.showVariationPopup,
						selectedAttributes: i.props.product.attribute_keys ? i.props.product.attribute_keys.reduce((function(e, t) {
							return e[t] = "", e
						}), {}) : {},
						selectedVariation: {}
					})
				}, i.handleToggleShowWeightPopup = function() {
					i.setState({
						showWeightPopup: !i.state.showWeightPopup
					})
				}, i.handleProductClick = function(e) {
					"variable" == e.type ? i.setState({
						showVariationPopup: !0
					}) : ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && e.weight ? i.setState({
						showWeightPopup: !0,
						weightProduct: e
					}) : i.props.addToCart(e.product_id, 1)
				}, i.handleAddVariation = function(e, t) {
					ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && e.weight ? i.setState({
						showWeightPopup: !0,
						weightProduct: e
					}) : i.props.addToCart(e.variation_id, 1, !1, "", i.state.selectedAttributes), i.setState({
						showVariationPopup: !i.state.showVariationPopup,
						selectedAttributes: t.attribute_keys ? t.attribute_keys.reduce((function(e, t) {
							return e[t] = "", e
						}), {}) : {},
						selectedVariation: {}
					})
				}, i.isAttributesMatch = function(e, t) {
					var n = e.attributes,
						r = !0;
					if (e.stock > 0) {
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								var i = n[o],
									a = t[o];
								void 0 !== i && void 0 !== a && 0 !== i.length && 0 !== a.length && i !== a && (r = !1)
							}
					} else r = !1;
					return r
				}, i.handleVariationID = function(e, n, r) {
					if (n) {
						var o = i.state.selectedAttributes;
						o[e] = n;
						var a = r.available_variations;
						i.setState({
							selectedAttributes: o
						});
						var s = a.filter((function(e) {
								return i.isAttributesMatch(e, o)
							})),
							c = (0, t.createElement)("mark", {
								className: "outofstock"
							}, (0, ft.__)("Out of Stock", "ddwc-multipos")),
							l = {};
						s.length && (l = s[0], c = "custom" === i.props.outlet.inventory_type ? (0, t.createElement)("mark", {
							className: "instock"
						}, (0, ft.sprintf)((0, ft.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock)) : s[0].stock_quantity > 0 ? (0, t.createElement)("mark", {
							className: "instock"
						}, (0, ft.sprintf)((0, ft.__)("In Stock(%s)", "ddwc-multipos"), s[0].stock_quantity)) : (0, t.createElement)("mark", {
							className: "instock"
						}, (0, ft.__)("In Stock", "ddwc-multipos"))), i.setState({
							selectedVariation: l,
							variationStockHTML: c
						})
					} else i.setState({
						selectedVariation: {},
						variationStockHTML: ""
					})
				}, i.renderVariationPopup = function(e) {
					if (i.state.showVariationPopup && "variable" == e.type) {
						var r = e.attribute_keys,
							o = e.attribute_values,
							a = e.attributes,
							s = r.map((function(n) {
								var r = a[n] ? Object.values(a[n]) : [];
								if (r && r.length) {
									var s = r.map((function(r, o) {
										return (0, t.createElement)("p", {
											key: o,
											onClick: function(t) {
												return i.handleVariationID(n, r.slug, e)
											},
											className: i.state.selectedAttributes[n] == r.slug ? "ddwcpos-selected-options" : null
										}, r.name)
									}));
									return (0, t.createElement)("div", {
										key: n,
										className: "ddwcpos-popup-options-group"
									}, (0, t.createElement)("h3", null, o[n]), (0, t.createElement)("div", {
										className: "ddwcpos-popup-options"
									}, s))
								}
							})),
							c = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Select Variation", "ddwc-multipos")), (0, Ie.applyFilters)("ddwcpos_add_different_variation_options", "", e, f(i)) ? (0, Ie.applyFilters)("ddwcpos_add_different_variation_options", "", e, f(i)) : s, (0, t.createElement)("p", null, i.state.variationStockHTML)),
							l = {
								handleOverlay: i.handleToggleShowVariationPopup,
								popupContent: c,
								notDisabled: Object.keys(i.state.selectedVariation).length,
								handleSuccess: function(t) {
									return i.handleAddVariation(i.state.selectedVariation, e)
								},
								handleCancel: i.handleToggleShowVariationPopup
							};
						return (0, t.createElement)(xs, l)
					}
					return null
				}, i.handleWeightInput = function(e) {
					13 == e.which && e.target.value ? i.handleWeightSubmit() : i.setState({
						weightInput: e.target.value
					})
				}, i.handleWeightSubmit = function() {
					i.state.weightInput ? (i.handleToggleShowWeightPopup(), i.props.addToCart(i.state.weightProduct.variation_id ? i.state.weightProduct.variation_id : i.state.weightProduct.product_id, 1, !1, i.state.weightInput, i.state.selectedAttributes)) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Enter valid weight.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, i.renderWeightPopup = function(e) {
					if (i.state.showWeightPopup) {
						var r = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Enter weight for the purchase.", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("%s (%s %s) = %s", "ddwc-multipos"), e.title, e.weight, ddwcposPOSObj.weight_unit, (0, Ia.R)(e.sale_price))), (0, t.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(e) {
									return i.handleWeightInput(e)
								},
								placeholder: (0, ft.__)("Enter Weight", "ddwc-multipos"),
								autoFocus: !0
							})),
							o = {
								handleOverlay: i.handleToggleShowWeightPopup,
								popupContent: r,
								notDisabled: i.state.weightInput,
								handleSuccess: function(t) {
									return i.handleWeightSubmit(i.state.weightInput, e)
								},
								handleCancel: i.handleToggleShowWeightPopup
							};
						return (0, t.createElement)(xs, o)
					}
					return null
				}, i.state = {
					showVariationPopup: !1,
					showWeightPopup: !1,
					weightInput: "",
					weightProduct: {},
					selectedAttributes: i.props.product.attribute_keys ? i.props.product.attribute_keys.reduce((function(e, t) {
						return e[t] = "", e
					}), {}) : {},
					selectedVariation: {},
					variationStockHTML: ""
				}, i
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = this.props.product,
						o = "";
					return o = "custom" === this.props.outlet.inventory_type ? "variable" == r.type ? (0, t.createElement)("mark", {
						className: "instock"
					}, (0, ft.__)("In Stock", "ddwc-multipos")) : (0, t.createElement)("mark", {
						className: "instock"
					}, (0, ft.sprintf)((0, ft.__)("In Stock(%s)", "ddwc-multipos"), r.stock)) : r.stock_quantity > 0 ? (0, t.createElement)("mark", {
						className: "instock"
					}, (0, ft.sprintf)((0, ft.__)("In Stock(%s)", "ddwc-multipos"), r.stock_quantity)) : (0, t.createElement)("mark", {
						className: "instock"
					}, (0, ft.__)("In Stock", "ddwc-multipos")), (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
						className: "ddwcpos-product-card",
						onClick: function(t) {
							return e.handleProductClick(r)
						}
					}, (0, t.createElement)("div", {
						className: "ddwcpos-product-thumbnail",
						dangerouslySetInnerHTML: {
							__html: r.image
						}
					}), (0, t.createElement)("div", {
						className: "ddwcpos-product-details"
					}, (0, t.createElement)("h2", {
						title: (0, La.ZP)(r.title)
					}, (0, La.ZP)(r.title)), (0, t.createElement)("p", null, (0, La.ZP)(r.price_html)), o)), this.renderVariationPopup(r), this.renderWeightPopup(this.state.weightProduct))
				}
			}]), o
		}(n.Component);
		const ll = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				addToCart: ya
			}, e))
		}))(cl);

		function ul(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var dl = function(e) {
			lt(o, e);
			var r = ul(o);

			function o(e) {
				var i;
				return at(this, o), (i = r.call(this, e)).handleToggleShowWeightPopup = function() {
					i.setState({
						showWeightPopup: !i.state.showWeightPopup
					})
				}, i.handleWeightInput = function(e) {
					e.stopPropagation(), 13 == e.which && e.target.value ? i.handleWeightSubmit() : i.setState({
						weightInput: e.target.value
					})
				}, i.handleWeightSubmit = function() {
					i.state.weightInput ? (i.handleToggleShowWeightPopup(), i.props.addToCart(i.state.weightProduct.variation_id ? i.state.weightProduct.variation_id : i.state.weightProduct.product_id, 1, !1, i.state.weightInput)) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Enter valid weight.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, i.renderWeightPopup = function(e) {
					if (i.state.showWeightPopup) {
						var r = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Enter weight for the purchase.", "ddwc-multipos")), (0, t.createElement)("p", null, sprintf((0, ft.__)("%s (%s %s) = %s", "ddwc-multipos"), e.title, e.weight, ddwcposPOSObj.weight_unit, (0, Ia.R)(e.sale_price))), (0, t.createElement)("input", {
								type: "number",
								min: "0.01",
								step: "0.01",
								onKeyUp: function(e) {
									return i.handleWeightInput(e)
								},
								placeholder: (0, ft.__)("Enter Weight", "ddwc-multipos"),
								autoFocus: !0
							})),
							o = {
								handleOverlay: i.handleToggleShowWeightPopup,
								popupContent: r,
								notDisabled: i.state.weightInput,
								handleSuccess: function(t) {
									return i.handleWeightSubmit(i.state.weightInput, e)
								},
								handleCancel: i.handleToggleShowWeightPopup
							};
						return (0, t.createElement)(xs, o)
					}
					return null
				}, i.handleProductSearch = function(e) {
					i.setState({
						search: e.target.value
					}), i.props.LoadSearchedProducts(e.target.value.toLowerCase(), i.props.products)
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
					i.setState({
						showOpenCashDrawerPopup: !i.state.showOpenCashDrawerPopup
					})
				}, i.handleBarcodeInput = function(e) {
					13 == e.which ? i.handleAddProductViaBarcode() : i.setState({
						barcodeValue: e.target.value
					})
				}, i.handleOpenCashDrawerAmountInput = function(e) {
					13 == e.which ? i.handleOpenCashDrawerAmountSubmit() : i.setState({
						openCashDrawerAmount: e.target.value
					})
				}, i.handleOpenCashDrawerAmountSubmit = function() {
					var e = {
						in: i.state.openCashDrawerAmount,
						outlet_id: i.props.outlet.id,
						method: "opencash",
						reason: (0, ft.__)("Open Cash Drawer Amount", "ddwc-multipos")
					};
					i.props.saveTransaction(e), i.handleToggleOpenCashDrawerPopup()
				}, i.handleCustomProductInput = function(e, t) {
					13 == e.which && i.state.customProductAddEnabled ? i.handleAddCustomProduct() : i.setState(Tt({}, t, e.target.value), (function() {
						i.state.customProductName && i.state.customProductPrice && i.state.customProductQuantity ? i.setState({
							customProductAddEnabled: !0
						}) : i.setState({
							customProductAddEnabled: !1
						})
					}))
				}, i.handleAddProductViaBarcode = function(e) {
					e.preventDefault(), i.props.getProductViaBarcode(i.state.barcodeValue).then((function(e) {
						Object.keys(e).length ? ddwcposPOSObj.ddwcpos_configuration.unit_price_enabled && e.weight ? i.setState({
							showWeightPopup: !0,
							weightProduct: e
						}) : i.props.addToCart(e.product_id, 1) : ht.store.addNotification({
							title: (0, ft.__)("Barcode Error", "ddwc-multipos"),
							message: (0, ft.__)("No product exists with this barcode.", "ddwc-multipos"),
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
					var e = i.props.taxes,
						t = i.state.customProductPrice,
						n = parseInt(i.state.customProductQuantity),
						r = 0;
					if ("yes" == ddwcposPOSObj.tax_enabled)
						if ("excl" == ddwcposPOSObj.tax_display_cart)
							if ("yes" == ddwcposPOSObj.tax_type) {
								var o = 0;
								e.forEach((function(e) {
									e.rate && (o += e.rate)
								}));
								var a = 100 * t / (100 + o);
								r = t - a, t = a
							} else e.forEach((function(e) {
								e.rate && (r += t * e.rate / 100)
							}));
					else "yes" != ddwcposPOSObj.tax_type && (e.forEach((function(e) {
						e.rate && (r += t * e.rate / 100)
					})), t = parseFloat(parseFloat(t) + parseFloat(r)), r = 0);
					i.handleToggleCustomProductPopup();
					var s = {
						title: i.state.customProductName,
						price: t,
						tax: r * n
					};
					i.props.addToCart(s, n, !0)
				}, i.state = {
					cid: "",
					search: "",
					productsLoaded: !1,
					categoryProductsLoaded: !1,
					showAllCategoriesPopup: !1,
					showBarcodePopup: !1,
					barcodeValue: "",
					showCustomProductPopup: !1,
					showOpenCashDrawerPopup: !1,
					openCashDrawerAmount: !1,
					customProductName: "",
					customProductPrice: "",
					customProductQuantity: "",
					customProductAddEnabled: !1,
					showWeightPopup: !1,
					weightInput: "",
					weightProduct: {}
				}, i
			}
			return ct(o, [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					"POP" == this.props.history.action && this.setState({
						showOpenCashDrawerPopup: !0
					}), this.props.getCategories(this.props.outlet.id), this.props.getProducts(this.props.outlet.id).then((function(t) {
						e.setState({
							productsLoaded: !0
						})
					})), this.props.getCustomers(this.props.outlet.id), this.props.getTransactions(this.props.outlet.id), this.props.getCountriesAndStates(this.props.outlet.id), this.props.getSettings(), this.props.getTables()
				}
			}, {
				key: "componentDidUpdate",
				value: function() {
					var e = this,
						t = this.props.products.list,
						n = null != this.props.match.params.cid ? "all" == this.props.match.params.cid ? 0 : this.props.match.params.cid : 0;
					!t.length || !this.state.productsLoaded || n == this.state.cid && this.state.categoryProductsLoaded || this.setState({
						cid: n,
						categoryProductsLoaded: !0
					}, (function() {
						e.props.LoadCategoryProducts(n, t)
					}))
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						r = this.props.categories,
						o = this.props.products,
						i = this.props.transactions.filter((function(e) {
							return "opencash" === e.method
						})).length,
						a = o.s,
						s = null != this.props.match.params.cid && this.props.match.params.cid > 0 ? this.props.match.params.cid : "",
						c = [];
					(c = a ? o.sproducts : s ? o.cproducts : o.list).sort((function(e, t) {
						return e.title > t.title ? 1 : t.title > e.title ? -1 : 0
					}));
					var l = document.querySelector(".ddwcpos-products-tab-wrapper"),
						u = 6,
						d = l ? l.offsetWidth : 1e3;
					window.screen.width < 720 && (d = window.screen.width);
					var p = document.querySelector(".ddwcpos-category-wrapper"),
						f = p ? p.offsetWidth - 10 : 0;
					f = Math.floor(f / 100);
					var h = 260,
						m = window.innerWidth;
					m >= 1600 ? (u = 6, h = d / 6) : m > 1550 && m < 1600 ? (u = 5, h = d / 5) : m > 1300 && m < 1550 ? (u = 4, h = d / 4.09) : m > 1024 && m < 1301 ? (u = 3, h = d / 3) : (u = 2, h = d / 2.07);
					var g = [],
						_ = 1,
						v = 0;
					c.forEach((function(e, t) {
						_ % (u + 1) == 0 && (_ = 1, v++), Array.isArray(g[v]) && g[v].length ? g[v].push(e) : g[v] = [e], _++
					}));
					var y = "ddwcpos-category-card";
					0 == this.state.cid && (y += " ddwcpos-category-active");
					var w = [],
						b = "",
						E = "";
					if (r.length) {
						w.push((0, t.createElement)(bt, {
							key: "all",
							className: y,
							onClick: this.handleHideAllCategoriesPopup,
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/category/all")
						}, (0, t.createElement)(Mc, null), (0, t.createElement)("p", null, (0, ft.__)("All", "ddwc-multipos"))));
						var O = r.map((function(n, r) {
							var o = "ddwcpos-category-card";
							return n.id == e.state.cid && (o += " ddwcpos-category-active"), (0, t.createElement)(bt, {
								key: r,
								className: o,
								onClick: e.handleHideAllCategoriesPopup,
								to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/category/").concat(n.id)
							}, n.image ? (0, t.createElement)("img", {
								src: n.image,
								alt: n.name,
								width: "24",
								height: "24"
							}) : "", (0, t.createElement)("p", {
								title: n.name
							}, n.name))
						}));
						f < (w = w.concat(O)).length && (b = (0, t.createElement)(bt, {
							className: "ddwcpos-category-card",
							to: "#",
							onClick: this.handleToggleShowAllCategories
						}, (0, t.createElement)(Bc, null), (0, t.createElement)("p", null, (0, ft.__)("View All", "ddwc-multipos"))), this.state.showAllCategoriesPopup && (E = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("div", {
							className: "ddwcpos-popup-overlay",
							onClick: this.handleToggleShowAllCategories
						}), (0, t.createElement)("div", {
							className: "ddwcpos-all-categories-popup"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-all-categories-popup-content"
						}, (0, t.createElement)("h2", null, (0, ft.__)("All Categories", "ddwc-multipos")), (0, t.createElement)("div", null, w))))), w = aa(w.slice(0, f)))
					}
					var S = "";
					if (this.state.showBarcodePopup) {
						var C = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Enter/Scan Barcode", "ddwc-multipos")), (0, t.createElement)("form", {
								onSubmit: function(t) {
									return e.handleAddProductViaBarcode(t)
								}
							}, (0, t.createElement)("input", {
								type: "text",
								onChange: function(t) {
									return e.handleBarcodeInput(t)
								},
								placeholder: (0, ft.__)("Enter/Scan Barcode", "ddwc-multipos"),
								value: this.state.barcodeValue,
								autoFocus: !0
							}), (0, t.createElement)("p", null, (0, t.createElement)("i", null, (0, ft.__)("Press enter after entering barcode to add products.", "ddwc-multipos"))))),
							x = {
								handleOverlay: this.handleToggleBarcodePopup,
								popupContent: C,
								notDisabled: !0,
								hideCancelButton: !0,
								singleButton: !0,
								successButtonText: (0, t.createElement)(n.Fragment, null, (0, t.createElement)(Uc, null), (0, ft.__)("Done", "ddwc-multipos")),
								handleSuccess: this.handleToggleBarcodePopup,
								handleCancel: this.handleToggleBarcodePopup
							};
						S = (0, t.createElement)(xs, x)
					}
					var P = "";
					if (this.state.showCustomProductPopup) {
						var T = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Custom Product Details", "ddwc-multipos")), (0, t.createElement)("input", {
								type: "text",
								onKeyUp: function(t) {
									return e.handleCustomProductInput(t, "customProductName")
								},
								placeholder: (0, ft.__)("Enter Product Name", "ddwc-multipos"),
								autoFocus: !0
							}), (0, t.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onKeyUp: function(t) {
									return e.handleCustomProductInput(t, "customProductPrice")
								},
								placeholder: (0, ft.__)("Enter Price", "ddwc-multipos")
							}), (0, t.createElement)("input", {
								type: "number",
								min: "1",
								onKeyUp: function(t) {
									return e.handleCustomProductInput(t, "customProductQuantity")
								},
								placeholder: (0, ft.__)("Enter Quantity", "ddwc-multipos")
							})),
							k = {
								handleOverlay: this.handleToggleCustomProductPopup,
								popupContent: T,
								notDisabled: this.state.customProductAddEnabled,
								handleSuccess: this.handleAddCustomProduct,
								handleCancel: this.handleToggleCustomProductPopup
							};
						P = (0, t.createElement)(xs, k)
					}
					var N = "";
					if (ddwcposPOSObj.ddwcpos_configuration.opencash_drawer_enabled && !i && this.state.showOpenCashDrawerPopup) {
						var A = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Open Cash Drawer Amount", "ddwc-multipos")), (0, t.createElement)("input", {
								type: "number",
								min: "0",
								step: "0.01",
								onKeyUp: function(t) {
									return e.handleOpenCashDrawerAmountInput(t)
								},
								placeholder: (0, ft.__)("Enter Amount", "ddwc-multipos"),
								autoFocus: !0
							})),
							R = {
								handleOverlay: this.handleToggleOpenCashDrawerPopup,
								popupContent: A,
								notDisabled: this.state.openCashDrawerAmount,
								handleSuccess: this.handleOpenCashDrawerAmountSubmit,
								handleCancel: this.handleToggleOpenCashDrawerPopup
							};
						N = (0, t.createElement)(xs, R)
					}
					var D = {};
					return ddwcposPOSObj.ddwcpos_configuration.custom_product_enabled || (D.gridTemplateColumns = "60% max-content auto"), (0, t.createElement)("div", {
						className: "ddwcpos-products-tab-wrapper"
					}, "disabled" != this.props.settings.display_category ? (0, t.createElement)("div", {
						className: "ddwcpos-category-wrapper"
					}, w.length ? (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Select Category", "ddwc-multipos")), (0, t.createElement)("div", {
						className: "ddwcpos-categories-container"
					}, w, b, E)) : null) : null, (0, t.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, t.createElement)("h2", null, (0, ft.__)("Products", "ddwc-multipos")), (0, t.createElement)("div", {
						className: "ddwcpos-search-input-wrapper",
						style: D
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, t.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						defaultValue: this.state.search,
						placeholder: (0, ft.__)("Search Product...", "ddwc-multipos"),
						onKeyUp: function(t) {
							return e.handleProductSearch(t)
						},
						autoComplete: "off"
					}), (0, t.createElement)(Rs, null)), (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleToggleBarcodePopup,
						title: (0, ft.__)("Add Product via Barcode", "ddwc-multipos")
					}, (0, t.createElement)(Wc, null)), ddwcposPOSObj.ddwcpos_configuration.custom_product_enabled ? (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: this.handleToggleCustomProductPopup,
						title: (0, ft.__)("Add Custom Product", "ddwc-multipos")
					}, (0, t.createElement)(Ha, null)) : null, (0, t.createElement)("span", null, c.length + " " + (0, ft.__)("Results", "ddwc-multipos"))), S, P, N, this.renderWeightPopup(this.state.weightProduct)), c.length > 0 ? (0, t.createElement)(Ys, {
						className: "ddwcpos-grid ddwcpos-products-list",
						columnCount: u,
						columnWidth: h,
						height: 1e3,
						rowCount: g.length,
						rowHeight: 134,
						width: d,
						style: "disabled" == this.props.settings.display_category ? {
							height: "calc(100vh - 95px)"
						} : {
							height: "calc(100vh - 218px)"
						}
					}, (function(n) {
						var r = n.columnIndex,
							o = n.rowIndex,
							i = n.style;
						return null != g[o][r] ? (0, t.createElement)("div", {
							className: r % 2 ? o % 2 == 0 ? "ddwcpos-grid-item-odd" : "ddwcpos-grid-item-even" : o % 2 ? "ddwcpos-grid-item-odd" : "ddwcpos-grid-item-even",
							style: i
						}, (0, t.createElement)(Dc.ZP, {
							once: !0,
							key: r,
							overflow: !0,
							height: 200
						}, (0, t.createElement)(ll, {
							key: r,
							product: g[o][r],
							outlet: e.props.outlet
						}))) : ""
					})) : (0, t.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Products Found", "ddwc-multipos"))))
				}
			}]), o
		}(n.Component);
		const pl = q((function(e) {
			return {
				categories: e.categories,
				products: e.products,
				taxes: e.taxes,
				settings: e.settings,
				transactions: e.transactions
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getProducts: Yc,
				getCategories: tl,
				getCustomers: vc,
				getCountriesAndStates: al,
				LoadCategoryProducts: Zc,
				LoadSearchedProducts: Xc,
				getProductViaBarcode: va,
				addToCart: ya,
				getOrders: ac,
				getSettings: Li,
				saveTransaction: rc,
				getTransactions: nc,
				getTables: rs
			}, e))
		}))(dl);
		const fl = {
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
		var hl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: fl
			}))
		};
		hl.displayName = "MailOutlined";
		const ml = n.forwardRef(hl);
		const gl = {
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
		var _l = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: gl
			}))
		};
		_l.displayName = "PhoneOutlined";
		const vl = n.forwardRef(_l);
		const yl = {
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
		var wl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: yl
			}))
		};
		wl.displayName = "EditOutlined";
		const bl = n.forwardRef(wl);
		const El = {
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
		var Ol = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: El
			}))
		};
		Ol.displayName = "SaveOutlined";
		const Sl = n.forwardRef(Ol);

		function Cl(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var xl = function(e) {
			lt(r, e);
			var n = Cl(r);

			function r(e) {
				var t;
				return at(this, r), (t = n.call(this, e)).UNSAFE_componentWillReceiveProps = function(e) {
					Object.keys(e.customer).length && e.customer.id != t.state.id ? t.setState((0, Ie.applyFilters)("ddwcpos_manage_customer_state_on_receive_props", {
						id: e.customer.id,
						first_name: e.customer.first_name,
						last_name: e.customer.last_name,
						email: e.customer.email,
						phone: e.customer.phone,
						address_1: e.customer.billing.address_1 ? e.customer.billing.address_1 : "",
						address_2: e.customer.billing.address_2 ? e.customer.billing.address_2 : "",
						country: e.customer.billing.country,
						state: e.customer.billing.state,
						city: e.customer.billing.city,
						postcode: e.customer.billing.postcode
					}, e, f(t))) : Object.keys(e.customer).length || t.setState((0, Ie.applyFilters)("ddwcpos_modify_manage_customer_state", {
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
					}, f(t)))
				}, t.handleInput = function(e, n) {
					var r = Tt({}, n, e.target.value);
					"country" == n && (r.state = ""), t.setState(r)
				}, t.handleFormSubmit = function(e) {
					if (e.preventDefault(), navigator.onLine) {
						var n = 0;
						t.requiredFields.forEach((function(e) {
							t.state[e] || (n = 1)
						})), n ? ht.store.addNotification({
							title: (0, ft.__)("Error", "ddwc-multipos"),
							message: (0, ft.__)("Kindly fill out the mandatory field(s).", "ddwc-multipos"),
							type: "danger",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}) : t.props.saveCustomer((0, Ie.applyFilters)("ddwcpos_modify_manage_customer_state_data_before_save", t.state, f(t)), f(t))
					} else ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Sorry, customer cannot be saved in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.requiredFields = (0, Ie.applyFilters)("ddwcpos_modify_manage_customer_required_fields", ["email"], f(t)), t.state = (0, Ie.applyFilters)("ddwcpos_modify_manage_customer_state", {
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
				}, f(t)), t
			}
			return ct(r, [{
				key: "render",
				value: function() {
					var e = this,
						n = this.props.countries_and_states,
						r = (0, t.createElement)("span", {
							className: "required"
						}, "*"),
						o = [],
						i = [];
					for (var a in n.countries) o.push((0, t.createElement)("option", {
						key: a,
						value: a
					}, n.countries[a]));
					var s = this.state.country ? this.state.country : n.base_country;
					if (Object.keys(n.states).length)
						for (var c in n.states[s]) i.push((0, t.createElement)("option", {
							key: c,
							value: c
						}, n.states[s][c]));
					return (0, t.createElement)("div", {
						className: "ddwcpos-manage-customer-wrapper",
						style: window.screen.width < 720 ? {
							display: "none"
						} : {}
					}, (0, t.createElement)("h2", null, this.state.id ? (0, ft.__)("Edit Customer", "ddwc-multipos") : (0, ft.__)("Add New Customer", "ddwc-multipos")), (0, t.createElement)("form", {
						onSubmit: function(t) {
							return e.handleFormSubmit(t)
						}
					}, (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("First Name", "ddwc-multipos"), this.requiredFields.includes("first_name") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.first_name,
						onChange: function(t) {
							return e.handleInput(t, "first_name")
						},
						placeholder: (0, ft.__)("Enter First Name", "ddwc-multipos")
					})), (0, t.createElement)("label", null, (0, ft.__)("Last Name", "ddwc-multipos"), this.requiredFields.includes("last_name") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.last_name,
						onChange: function(t) {
							return e.handleInput(t, "last_name")
						},
						placeholder: (0, ft.__)("Enter Last Name", "ddwc-multipos")
					}))), (0, t.createElement)("label", null, (0, ft.__)("Email", "ddwc-multipos"), this.requiredFields.includes("email") && r, (0, t.createElement)("input", {
						type: "email",
						value: this.state.email,
						onChange: function(t) {
							return e.handleInput(t, "email")
						},
						placeholder: (0, ft.__)("Enter Email", "ddwc-multipos"),
						disabled: this.state.id
					})), (0, t.createElement)("label", null, (0, ft.__)("Phone", "ddwc-multipos"), this.requiredFields.includes("phone") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.phone,
						onChange: function(t) {
							return e.handleInput(t, "phone")
						},
						placeholder: (0, ft.__)("Enter Phone Number", "ddwc-multipos")
					})), (0, t.createElement)("label", null, (0, ft.__)("Address Line 1", "ddwc-multipos"), this.requiredFields.includes("address_1") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.address_1,
						onChange: function(t) {
							return e.handleInput(t, "address_1")
						},
						placeholder: (0, ft.__)("Enter Address Line 1", "ddwc-multipos")
					})), (0, t.createElement)("label", null, (0, ft.__)("Address Line 2", "ddwc-multipos"), this.requiredFields.includes("address_2") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.address_2,
						onChange: function(t) {
							return e.handleInput(t, "address_2")
						},
						placeholder: (0, ft.__)("Enter Address Line 2", "ddwc-multipos")
					})), (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("Country", "ddwc-multipos"), this.requiredFields.includes("country") && r, (0, t.createElement)("select", {
						value: this.state.country ? this.state.country : n.base_country,
						onChange: function(t) {
							return e.handleInput(t, "country")
						}
					}, o)), (0, t.createElement)("label", null, (0, ft.__)("State", "ddwc-multipos"), this.requiredFields.includes("state") && r, i.length ? (0, t.createElement)("select", {
						value: this.state.state,
						onChange: function(t) {
							return e.handleInput(t, "state")
						}
					}, i) : (0, t.createElement)("input", {
						type: "text",
						value: this.state.state,
						onChange: function(t) {
							return e.handleInput(t, "state")
						},
						placeholder: (0, ft.__)("Enter State", "ddwc-multipos")
					}))), (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("City", "ddwc-multipos"), this.requiredFields.includes("city") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.city,
						onChange: function(t) {
							return e.handleInput(t, "city")
						},
						placeholder: (0, ft.__)("Enter City", "ddwc-multipos")
					})), (0, t.createElement)("label", null, (0, ft.__)("Postcode", "ddwc-multipos"), this.requiredFields.includes("postcode") && r, (0, t.createElement)("input", {
						type: "text",
						value: this.state.postcode,
						onChange: function(t) {
							return e.handleInput(t, "postcode")
						},
						placeholder: (0, ft.__)("Enter Postcode", "ddwc-multipos")
					}))), (0, Ie.applyFilters)("ddwcpos_add_manage_customer_form_fields_before_save_button", "", this), (0, t.createElement)("button", {
						type: "submit",
						className: "ddwcpos-button"
					}, (0, t.createElement)(Sl, null), (0, ft.__)("Save", "ddwc-multipos")), this.state.id || window.screen.width < 720 ? (0, t.createElement)("button", {
						type: "button",
						className: "ddwcpos-button-secondary",
						onClick: this.props.handleResetEditCustomer
					}, (0, ft.__)("Cancel", "ddwc-multipos")) : null))
				}
			}]), r
		}(n.Component);
		const Pl = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				saveCustomer: Oc
			}, e))
		}))(xl);

		function Tl(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var kl = function(n) {
			lt(o, n);
			var r = Tl(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).handleCustomerSearch = function(e) {
					t.setState({
						search: e.target.value
					}), t.props.loadSearchCustomers(e.target.value, t.props.customers, t.props.customers.defaultCustomer)
				}, t.handleEditCustomer = function(e) {
					t.setState({
						editCustomer: e
					}), window.screen.width < 720 && (document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "block")
				}, t.handleDeleteCustomer = function(e) {
					navigator.onLine ? confirm((0, ft.__)("Are you sure you want to delete this customer?", "ddwc-multipos")) && t.props.deleteCustomer(e.id) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Sorry, customer cannot be deleted in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.handleResetEditCustomer = function() {
					t.setState({
						editCustomer: {}
					}), window.screen.width < 720 && (document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "initial", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "none")
				}, t.handleSetCustomer = function(e) {
					t.props.updateDefaultCustomer(e)
				}, t.handleAddNewCustomerMobile = function() {
					document.querySelector(".ddwcpos-manage-customer-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-manage-customer-wrapper").style.display = "block"
				}, t.state = {
					search: "",
					editCustomer: {}
				}, t
			}
			return ct(o, [{
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
						i = (0, Ie.applyFilters)("ddwcpos_modify_customer_list_row_height_at_pos", window.screen.width < 720 ? 128 : 80);
					return (0, t.createElement)("div", {
						className: "ddwcpos-customers-tab-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-list-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, t.createElement)("h2", null, (0, ft.__)("Customers", "ddwc-multipos")), window.screen.width < 720 ? (0, t.createElement)("button", {
						className: "ddwcpos-button",
						onClick: this.handleAddNewCustomerMobile
					}, (0, ft.__)("Add New", "ddwc-multipos")) : null, (0, t.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, t.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						defaultValue: this.state.search,
						placeholder: (0, ft.__)("Search Customer by name, email or phone...", "ddwc-multipos"),
						onKeyUp: function(e) {
							return n.handleCustomerSearch(e)
						},
						autoComplete: "off"
					}), (0, t.createElement)(Rs, null)), (0, t.createElement)("span", null, r.length + " " + (0, ft.__)("Results", "ddwc-multipos")))), r.length > 0 ? (0, t.createElement)(Js, {
						className: "ddwcpos-list",
						height: 800,
						itemCount: r.length,
						itemSize: i
					}, (function(e) {
						var i = e.index,
							a = e.style,
							s = "".concat(r[i].first_name, " ").concat(r[i].last_name);
						return s = " " != s ? s : r[i].username, (0, t.createElement)("div", {
							className: "ddwcpos-list-row",
							style: a
						}, (0, t.createElement)("div", {
							className: "ddwcpos-list-details"
						}, (0, t.createElement)("img", {
							src: r[i].avatar_url,
							alt: r[i].username
						}), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, s), (0, t.createElement)("p", null, (0, t.createElement)(ml, null), r[i].email), r[i].phone ? (0, t.createElement)("p", null, (0, t.createElement)(vl, null), r[i].phone) : null, (0, Ie.applyFilters)("ddwcpos_add_more_customer_details_at_pos", "", r[i], n)), (0, t.createElement)("div", null, (0, t.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(e) {
								return n.handleEditCustomer(r[i])
							},
							title: (0, ft.__)("Edit Customer", "ddwc-multipos")
						}, (0, t.createElement)(bl, null)), (0, t.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(e) {
								return n.handleDeleteCustomer(r[i])
							},
							title: (0, ft.__)("Delete Customer", "ddwc-multipos")
						}, (0, t.createElement)(Ya, null)), o && o.id == r[i].id ? (0, t.createElement)("span", {
							className: "ddwcpos-icon-card",
							title: (0, ft.__)("Current Customer", "ddwc-multipos")
						}, (0, t.createElement)(Uc, null), (0, ft.__)("Current Customer", "ddwc-multipos")) : (0, t.createElement)("span", {
							className: "ddwcpos-icon-card",
							onClick: function(e) {
								return n.handleSetCustomer(r[i].id)
							},
							title: (0, ft.__)("Set Customer", "ddwc-multipos")
						}, (0, t.createElement)(Uc, null), (0, ft.__)("Set Customer", "ddwc-multipos")))))
					})) : (0, t.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Customers Found", "ddwc-multipos")))), (0, t.createElement)(Pl, e({
						customer: this.state.editCustomer
					}, this.props, {
						handleResetEditCustomer: this.handleResetEditCustomer
					})))
				}
			}]), o
		}(n.Component);
		const Nl = q((function(e) {
			return {
				customers: e.customers,
				countries_and_states: e.countries_and_states
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getCustomers: vc,
				getCountriesAndStates: al,
				loadSearchCustomers: bc,
				updateDefaultCustomer: Ec,
				deleteCustomer: Sc
			}, e))
		}))(kl);
		const Al = {
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
		var Rl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Al
			}))
		};
		Rl.displayName = "PrinterOutlined";
		const Dl = n.forwardRef(Rl);
		const Ll = {
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
		var Il = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ll
			}))
		};
		Il.displayName = "ArrowLeftOutlined";
		const Ml = n.forwardRef(Il);
		var ql = __webpack_require__(7576);

		function jl(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var Bl = function(e) {
				lt(o, e);
				var r = jl(o);

				function o(e) {
					var t;
					at(this, o), t = r.call(this, e), Fl.call(f(t));
					var n = {};
					return Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).forEach((function(e) {
						0 == Object.keys(n) && "enabled" === e.status && (n = e)
					})), t.state = {
						orderNote: "",
						showinvoicePopup: !1,
						order: {},
						paymentMethods: [{
							amount: "",
							slug: n.slug,
							name: n.name,
							active: 1
						}]
					}, t
				}
				return ct(o, [{
					key: "render",
					value: function() {
						var e = this,
							r = parseFloat(this.props.cart.total.cart_total),
							o = "";
						if (this.state.showinvoicePopup) {
							var i = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Print Receipt", "ddwc-multipos")), (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("Order #%s is %s.", "ddwc-multipos"), this.state.order.order_id, this.state.order.order_status_label))),
								a = {
									handleOverlay: this.handleToggleInvoicePopup,
									popupContent: i,
									notDisabled: !0,
									handleSuccess: this.handleInvoiceSubmit,
									handleCancel: this.handleVisitHome,
									successButtonText: (0, t.createElement)(n.Fragment, null, (0, t.createElement)(Dl, null), (0, ft.__)("Print", "ddwc-multipos"))
								};
							o = (0, t.createElement)(xs, a)
						}
						if (!this.props.cart.list.length) return (0, t.createElement)("div", {
							className: "ddwcpos-pay-tab-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-order-note-container"
						}, (0, t.createElement)("p", null, (0, ft.__)("Please add products in the cart to place the order", "ddwc-multipos"))), o);
						var s = 0,
							c = [];
						this.state.paymentMethods.forEach((function(n, r) {
							s += parseFloat(n.amount) || 0;
							var o = Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).map((function(e) {
									if ("enabled" == e.status) return (0, t.createElement)("option", {
										key: e.slug,
										value: e.slug
									}, e.name)
								})),
								i = "ddwcpos-method-row";
							n.active && (i += " ddwcpos-method-active"), c.push((0, t.createElement)("div", {
								key: r,
								className: i,
								onClick: function(t) {
									return e.handleChangeActivePaymentMethod(r)
								}
							}, (0, t.createElement)("input", {
								type: "text",
								value: n.amount,
								readOnly: !0,
								onChange: function(t) {
									return e.handleAmountChange(t, r)
								}
							}), (0, t.createElement)("select", {
								onChange: function(t) {
									return e.handleChangePaymentMethod(t, r)
								},
								value: n.slug
							}, o), 0 != r ? (0, t.createElement)(ms, {
								onClick: function(t) {
									return e.handleRemovePaymentMethod(t, r)
								}
							}) : (0, t.createElement)("span", null)))
						}));
						for (var l = r >= s ? r - s : 0, u = s >= r ? s - r : 0, d = r, p = Math.ceil(d), f = 5; d == p && r > 0;) p = Math.ceil(d / f) * f, f += 5;
						f = 5;
						for (var h = p; h == p && r > 0;) h = Math.ceil(p / f) * f, f += 5;
						f = 5;
						for (var m = h; m == h && r > 0;) m = Math.ceil(h / f) * f, f += 5;
						return (0, t.createElement)("div", {
							className: "ddwcpos-pay-tab-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-pay-summary"
						}, (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Total Due", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(r))), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Total Paying", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(s))), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Pay Left", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(l))), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, ft.__)("Change", "ddwc-multipos")), (0, t.createElement)("span", null, (0, Ia.R)(u)))), (0, t.createElement)("div", {
							className: "ddwcpo-pay-method-container"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-method-row"
						}, (0, t.createElement)("h4", null, (0, ft.__)("Amount", "ddwc-multipos")), (0, t.createElement)("h4", null, (0, ft.__)("Method", "ddwc-multipos"))), c, ddwcposPOSObj.ddwcpos_configuration.multiple_payments_enabled ? (0, t.createElement)("button", {
							onClick: this.handleAddNewPaymentMethod
						}, (0, ft.__)("Add Another Payment Method", "ddwc-multipos")) : null), (0, Ie.applyFilters)("ddwcpos_add_content_below_payment_methods_section", "", this), ddwcposPOSObj.ddwcpos_configuration.order_note_enabled ? (0, t.createElement)("div", {
							className: "ddwcpos-order-note-container"
						}, (0, t.createElement)("textarea", {
							value: this.state.orderNote,
							onChange: function(t) {
								return e.handleOrderNoteChange(t)
							},
							placeholder: (0, ft.__)("Add Order Note", "ddwc-multipos")
						})) : null, (0, t.createElement)("div", {
							className: "ddwcpos-numeric-pay-container"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-tendered-suggestions"
						}, (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput(d, !0)
							}
						}, (0, Ia.R)(d)), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput(p, !0)
							}
						}, (0, Ia.R)(p)), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput(h, !0)
							}
						}, (0, Ia.R)(h)), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput(m, !0)
							}
						}, (0, Ia.R)(m))), (0, t.createElement)("div", {
							className: "ddwcpos-pay-calculator"
						}, (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("1")
							}
						}, "1"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("2")
							}
						}, "2"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("3")
							}
						}, "3"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("clear")
							}
						}, (0, ft.__)("clear", "ddwc-multipos")), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("4")
							}
						}, "4"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("5")
							}
						}, "5"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("6")
							}
						}, "6"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("Backspace")
							}
						}, (0, t.createElement)(Ml, null)), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("7")
							}
						}, "7"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("8")
							}
						}, "8"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("9")
							}
						}, "9"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handlePayClick()
							},
							className: "ddwcpos-pay-button",
							disabled: (0, Ie.applyFilters)("ddwcpos_modify_pay_button_disabled_check", s < r, this)
						}, (0, ft.__)("Pay", "ddwc-multipos")), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("0")
							}
						}, "0"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput(".")
							}
						}, "."), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("00")
							}
						}, "00"), (0, t.createElement)("span", {
							onClick: function(t) {
								return e.handleInput("cancel")
							},
							className: "ddwcpos-cancel-button"
						}, (0, ft.__)("Cancel", "ddwc-multipos")))))
					}
				}]), o
			}(n.Component),
			Fl = function() {
				var e = this;
				this.componentDidMount = function() {
					e.props.getCustomers(e.props.outlet.id), e.props.getCart(), e.props.getProducts(e.props.outlet.id), document.addEventListener("keydown", e.handleKeyDown, !1)
				}, this.componentWillUnmount = function() {
					document.removeEventListener("keydown", e.handleKeyDown, !1)
				}, this.handleAddNewPaymentMethod = function() {
					var t = e.state.paymentMethods;
					t.forEach((function(e, n) {
						t[n].active = 0
					}));
					var n = {};
					Object.values(ddwcposPOSObj.ddwcpos_configuration.payment_method).forEach((function(e) {
						0 == Object.keys(n) && "enabled" === e.status && (n = e)
					})), t.push({
						amount: "",
						slug: n.slug,
						name: n.name,
						active: 1
					}), e.setState({
						paymentMethods: t
					})
				}, this.handleChangeActivePaymentMethod = function(t) {
					var n = e.state.paymentMethods;
					n.forEach((function(e, r) {
						n[r].active = t == r ? 1 : 0
					})), e.setState({
						paymentMethods: n
					})
				}, this.handleRemovePaymentMethod = function(t, n) {
					t.stopPropagation();
					var r = e.state.paymentMethods;
					r.splice(n, 1), r.forEach((function(e, t) {
						r[t].active = 0 == t ? 1 : 0
					})), e.setState({
						paymentMethods: r
					})
				}, this.handleChangePaymentMethod = function(t, n) {
					var r = e.state.paymentMethods;
					r[n].slug = t.target.value, r[n].name = t.target.options[t.target.selectedIndex].text, e.setState({
						paymentMethods: r
					})
				}, this.handleAmountChange = function(t, n) {
					var r = e.state.paymentMethods;
					r[n].amount = t.target.value, e.setState({
						paymentMethods: r
					})
				}, this.handleKeyDown = function(t) {
					if (t.target && !t.target.closest(".ddwcpos-order-note-container") && !t.target.closest(".ddwcpos-popup-content")) {
						var n = !1;
						isNaN(t.key) ? "Backspace" == t.key || "." == t.key ? n = !0 : 13 == t.which && e.handlePayClick() : n = !0, n && e.handleInput(t.key)
					}
				}, this.handleInput = function(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if ("cancel" == t) e.handleVisitHome();
					else {
						var r = e.state.paymentMethods;
						r.forEach((function(e, o) {
							e.active && (n ? r[o].amount = t.toString() : "Backspace" == t ? r[o].amount = r[o].amount.slice(0, -1) : "clear" == t ? r[o].amount = "" : r[o].amount += t)
						})), e.setState({
							paymentMethods: r
						})
					}
				}, this.handleOrderNoteChange = function(t) {
					e.setState({
						orderNote: t.target.value
					})
				}, this.handlePayClick = function() {
					var t = document.querySelector(".ddwcpos-pay-button"),
						n = parseFloat(e.props.cart.total.cart_total),
						r = 0;
					e.state.paymentMethods.forEach((function(e) {
						r += parseFloat(e.amount) || 0
					})), !t.getAttribute("disabled") && (0, Ie.applyFilters)("ddwcpos_modify_pay_check_to_place_order", r >= n, e) && (t.setAttribute("disabled", "disabled"), e.props.createOrder((0, Ie.applyFilters)("ddwcpos_modify_current_state_data_before_create_order", e.state), e).then((function(n) {
						t.removeAttribute("disabled"), n && (e.props.getOrders(e.props.outlet.id), e.props.getCoupons(), e.props.getDiscount(), e.props.getCart(), (0, Ie.doAction)("ddwcpos_after_create_order", n, e), e.setState({
							showinvoicePopup: !0,
							order: n
						}), ddwcposPOSObj.ddwcpos_configuration.offline_orders_enabled && navigator.onLine && e.props.syncOfflineOrders([n]).then((function(t) {
							t && e.props.getOrders(e.props.outlet.id)
						})))
					})))
				}, this.handleToggleInvoicePopup = function() {
					e.setState({
						showinvoicePopup: !e.state.showinvoicePopup
					})
				}, this.handleInvoiceSubmit = function() {
					e.props.printInvoice(e.state.order), e.handleVisitHome()
				}, this.handleVisitHome = function() {
					e.props.addNewCart(), e.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))
				}
			};
		const Hl = q((function(e) {
			return {
				cart: e.cart
			}
		}), (function(e) {
			var t;
			return Object.assign({
				dispatch: e
			}, (0, S.DE)((Tt(t = {
				getCart: _a,
				getCustomers: vc,
				createOrder: uc,
				getProducts: Yc,
				getDiscount: ds,
				getCoupons: ca
			}, "getCart", _a), Tt(t, "syncOfflineOrders", fc), Tt(t, "getOrders", ac), Tt(t, "addNewCart", Da), Tt(t, "printInvoice", ql.Ru), t), e))
		}))(Bl);
		const Ul = {
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
		var zl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Ul
			}))
		};
		zl.displayName = "RightOutlined";
		const Vl = n.forwardRef(zl);
		const Wl = {
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
		var Kl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Wl
			}))
		};
		Kl.displayName = "FieldTimeOutlined";
		const Gl = n.forwardRef(Kl);
		const $l = {
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
		var Ql = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: $l
			}))
		};
		Ql.displayName = "BellOutlined";
		const Yl = n.forwardRef(Ql);
		const Jl = {
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
		var Zl = function(e, t) {
			return n.createElement(Cn, Object.assign({}, e, {
				ref: t,
				icon: Jl
			}))
		};
		Zl.displayName = "UndoOutlined";
		const Xl = n.forwardRef(Zl);

		function eu(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var tu = function(e) {
			lt(o, e);
			var r = eu(o);

			function o(e) {
				var t;
				return at(this, o), (t = r.call(this, e)).handlePrintInvoice = function(e) {
					t.props.printInvoice(e)
				}, t.handleOrderRefund = function(e) {
					t.handleToggleRefundPopup()
				}, t.handleToggleRefundPopup = function() {
					t.setState({
						showRefundPopup: !t.state.showRefundPopup,
						refundProducts: {},
						restockItems: !0,
						refundReason: ""
					})
				}, t.handleProcessRefund = function(e, n) {
					e.target.setAttribute("disabled", "disabled");
					var r = {
						refundReason: t.state.refundReason,
						refundProducts: t.state.refundProducts,
						restockItems: t.state.restockItems,
						orderId: n
					};
					t.props.createRefund(r).then((function(e) {
						t.props.getOrders(t.props.outlet.id), t.props.handleChangeOrderDetails(e), t.props.updateRefundStock(t.props.order.products, r.refundProducts), ht.store.addNotification({
							title: (0, ft.__)("Refund Success", "ddwc-multipos"),
							message: (0, ft.__)("Refund is done for the order successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						}), t.handleToggleRefundPopup()
					}))
				}, t.handleRefundReasonInput = function(e) {
					t.setState({
						refundReason: e.target.value
					})
				}, t.handleRestockItemsInput = function(e) {
					t.setState({
						restockItems: !t.state.restockItems
					})
				}, t.handleChangeRefundQuantity = function(e, n) {
					var r = e.target.value,
						o = t.state.refundProducts,
						i = n.quantity - n.returned_quantity;
					(r = r <= i ? r : i) <= 0 ? delete o[n.item_id] : o[n.item_id] = r, t.setState({
						refundProducts: o
					}), t.handleCalculateRefundAmount()
				}, t.handleIncreaseDecreaseRefundQuantity = function(e, n) {
					var r = t.state.refundProducts,
						o = r[n.item_id] ? parseInt(r[n.item_id]) + e : 0 + e,
						i = n.quantity - n.returned_quantity;
					(o = o <= i ? o : i) <= 0 ? delete r[n.item_id] : r[n.item_id] = o, t.setState({
						refundProducts: r
					}), t.handleCalculateRefundAmount()
				}, t.handleCalculateRefundAmount = function() {
					var e = t.props.order.products.reduce((function(e, n) {
						var r = parseFloat(e);
						t.state.refundProducts[n.item_id] && (r += parseFloat(n.uf * t.state.refundProducts[n.item_id]), Object.values(n.taxes).forEach((function(e) {
							r += parseFloat(e)
						})));
						return r
					}), 0);
					t.setState({
						refundAmount: e
					})
				}, t.handleAddHoldCart = function(e) {
					var n = e.id,
						r = e.customer,
						o = e.table;
					t.props.cart.list.length && t.props.cart.list[0].cart.length ? confirm((0, ft.__)("There are items present in the cart, proceeding will replace these items. Please confirm")) && (t.props.addHoldCartToCurrentCart(n), t.props.updateDefaultCustomer(r.id), o.slug && t.props.updateDefaultTable(o.slug), t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint))) : (t.props.addHoldCartToCurrentCart(n), t.props.updateDefaultCustomer(r.id), o.slug && t.props.updateDefaultTable(o.slug), t.props.history.push("".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint)))
				}, t.handleSendToKitchen = function(e) {
					t.props.sendTokitchen(e)
				}, t.handleDeleteHoldCart = function(e) {
					t.props.deleteHoldCart(e), ht.store.addNotification({
						title: (0, ft.__)("Delete Success", "ddwc-multipos"),
						message: (0, ft.__)("Hold order is deleted successfully.", "ddwc-multipos"),
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}), t.props.handleToggleTableOrderPopup && t.props.handleToggleTableOrderPopup(), window.screen.width < 720 && (document.querySelector(".ddwcpos-order-details-wrapper").style.position = "initial", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "none")
				}, t.handleBackOrderDetailsMobile = function() {
					document.querySelector(".ddwcpos-order-details-wrapper").style.position = "initial", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "none"
				}, t.state = {
					showRefundPopup: !1,
					restockItems: !0,
					refundReason: "",
					refundProducts: {},
					refundAmount: 0
				}, t
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var e = this,
						r = this.props.orderType,
						o = this.props.order;
					if (o) {
						if ("hold" == r) {
							var i = o.list[0],
								a = o.total,
								s = i.cart.map((function(e, n) {
									var r = '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />');
									return e.image && (r = e.image), (0, t.createElement)("div", {
										className: "ddwcpos-order-product",
										key: n
									}, (0, t.createElement)("div", {
										className: "ddwcpos-order-product-info"
									}, (0, t.createElement)("div", {
										className: "ddwcpos-order-product-image",
										dangerouslySetInnerHTML: {
											__html: r
										}
									}), (0, t.createElement)("div", {
										className: "ddwcpos-order-product-details"
									}, (0, t.createElement)("h4", {
										title: (0, La.ZP)(e.name)
									}, (0, La.ZP)(e.name)), (0, t.createElement)("p", null, (0, Ia.R)(e.uf), " x ", e.quantity)), (0, t.createElement)("div", {
										className: "ddwcpos-order-product-price"
									}, (0, t.createElement)("p", null, (0, Ia.R)(e.uf_total)))))
								}));
							return (0, t.createElement)("div", {
								className: "ddwcpos-order-details-wrapper",
								style: window.screen.width < 720 ? {
									display: "none"
								} : {}
							}, (0, t.createElement)("div", {
								className: "ddwcpos-order-details-header"
							}, (0, t.createElement)("h2", null, this.props.tableView ? (0, ft.__)("Table Order", "ddwc-multipos") : (0, ft.__)("Cart Details", "ddwc-multipos")), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, t.createElement)(na, null), i.customer.email), o.list[0].table.name ? (0, t.createElement)("p", null, (0, t.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, t.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, t.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, t.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))), o.list[0].table.name) : null), !this.props.tableView && window.screen.width < 720 ? (0, t.createElement)("button", {
								className: "ddwcpos-button ddwcpos-button-secondary",
								onClick: this.handleBackOrderDetailsMobile
							}, (0, ft.__)("X", "ddwc-multipos")) : null), (0, t.createElement)("div", {
								className: "ddwcpos-order-products"
							}, s), (0, t.createElement)("div", {
								className: "ddwcpos-order-totals"
							}, (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Subtotal", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(a.cart_subtotal, o.order_currency_symbol))), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Tax", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(a.tax_total))), (0, t.createElement)("div", {
								className: "ddwcpos-order-total"
							}, (0, t.createElement)("p", null, (0, ft.__)("Total", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(a.cart_total))), (0, t.createElement)("div", {
								className: "ddwcpos-hold-order-info"
							}, (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("Info: %s", "ddwc-multipos"), i.info))), "restaurant" === this.props.outlet.mode ? (0, t.createElement)("div", null, (0, t.createElement)("button", {
								className: "ddwcpos-button ddwcpos-button-secondary",
								onClick: function(t) {
									return e.handleSendToKitchen(i)
								}
							}, (0, t.createElement)(Yl, null), (0, ft.__)("Send to Kitchen", "ddwc-multipos"))) : null, (0, t.createElement)("div", {
								className: "ddwcpos-hold-order-actions"
							}, (0, t.createElement)("button", {
								className: "ddwcpos-button",
								onClick: function(t) {
									return e.handleAddHoldCart(i)
								}
							}, (0, t.createElement)(Nn, null), (0, ft.__)("Add to Cart", "ddwc-multipos")), (0, t.createElement)("button", {
								className: "ddwcpos-button",
								onClick: function(t) {
									return e.handleDeleteHoldCart(i.id)
								}
							}, (0, t.createElement)(Ya, null), (0, ft.__)("Delete", "ddwc-multipos")))))
						}
						var c = o.products.map((function(e, n) {
								var r = '<img width="150" height="150" src="'.concat(ddwcposPOSObj.ddwcpos_configuration.placeholder_image, '" class="attachment-thumbnail size-thumbnail" />');
								e.image && (r = e.image);
								var i = e.meta_data && e.meta_data.length ? e.meta_data.map((function(e) {
									return (0, t.createElement)("p", null, (0, t.createElement)("strong", null, e.key, ": "), e.value)
								})) : [];
								return (0, t.createElement)("div", {
									className: "ddwcpos-order-product",
									key: n
								}, (0, t.createElement)("div", {
									className: "ddwcpos-order-product-info"
								}, (0, t.createElement)("div", {
									className: "ddwcpos-order-product-image",
									dangerouslySetInnerHTML: {
										__html: r
									}
								}), (0, t.createElement)("div", {
									className: "ddwcpos-order-product-details"
								}, (0, t.createElement)("h4", {
									title: (0, La.ZP)(e.name)
								}, (0, La.ZP)(e.name)), (0, t.createElement)("p", null, (0, Ia.R)(e.uf, o.order_currency_symbol), " x ", e.quantity, e.returned_quantity > 0 ? (0, t.createElement)("span", {
									className: "ddwcpos-font-green"
								}, " ", (0, t.createElement)(Xl, null), e.returned_quantity) : null)), (0, t.createElement)("div", {
									className: "ddwcpos-order-product-price"
								}, (0, t.createElement)("p", null, (0, Ia.R)(e.uf_total, o.order_currency_symbol)))), i.length ? (0, t.createElement)("div", {
									className: "ddwcpos-order-product-meta-info"
								}, i) : null)
							})),
							l = 0,
							u = o.tax_lines.map((function(e, n) {
								if ("online" == r) return (0, t.createElement)("div", {
									key: n
								}, (0, t.createElement)("p", null, e.label), (0, t.createElement)("strong", null, (0, Ia.R)(e.total, o.order_currency_symbol)));
								if ("offline" == r) {
									var i = e.rate * o.order_subtotal / 100;
									return l += i, (0, t.createElement)("div", {
										key: n
									}, (0, t.createElement)("p", null, e.label), (0, t.createElement)("strong", null, (0, Ia.R)(i, o.order_currency_symbol)))
								}
							})),
							d = "";
						d = o.payment_methods.length ? o.payment_methods.map((function(e, n) {
							return (0, t.createElement)("div", {
								key: n
							}, (0, t.createElement)("p", null, e.name), (0, t.createElement)("strong", null, (0, Ia.R)(e.amount, o.order_currency_symbol)))
						})) : (0, t.createElement)("div", null, (0, t.createElement)("p", null, o.payment_method_title), (0, t.createElement)("strong", null, (0, Ia.R)(o.tendered, o.order_currency_symbol)));
						var p = [];
						"online" == r ? p = o.coupons.map((function(e, n) {
							return (0, t.createElement)("span", {
								className: "ddwcpos-order-applied-coupons",
								key: n
							}, e.code, " (".concat((0, Ia.R)(e.amount, o.order_currency_symbol), ")"))
						})) : "offline" == r && (p = o.coupons.map((function(e, n) {
							return (0, t.createElement)("span", {
								className: "ddwcpos-order-applied-coupons",
								key: n
							}, e.code, " (".concat((0, Ia.R)(e.price, o.order_currency_symbol), ")"))
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
										var s = e.state.refundProducts[n.item_id] ? e.state.refundProducts[n.item_id] : 0;
										return (0, t.createElement)("div", {
											className: "ddwcpos-order-product",
											key: r
										}, (0, t.createElement)("div", {
											className: "ddwcpos-order-product-info"
										}, (0, t.createElement)("div", {
											className: "ddwcpos-order-product-image",
											dangerouslySetInnerHTML: {
												__html: a
											}
										}), (0, t.createElement)("div", {
											className: "ddwcpos-order-product-details"
										}, (0, t.createElement)("h4", {
											title: (0, La.ZP)(n.name)
										}, (0, La.ZP)(n.name)), (0, t.createElement)("p", null, (0, Ia.R)(n.uf, o.order_currency_symbol), " x ", i)), (0, t.createElement)("div", {
											className: "ddwcpos-edit-cart-product-quantity"
										}, (0, t.createElement)("div", {
											className: "ddwcpos-icon-card",
											title: (0, ft.__)("Decrease Quantity", "ddwc-multipos"),
											onClick: function(t) {
												return e.handleIncreaseDecreaseRefundQuantity(-1, n)
											}
										}, (0, t.createElement)(ja, null)), (0, t.createElement)("input", {
											type: "number",
											min: "0",
											max: i,
											value: s,
											onChange: function(t) {
												return e.handleChangeRefundQuantity(t, n)
											}
										}), (0, t.createElement)("div", {
											className: "ddwcpos-icon-card",
											title: (0, ft.__)("Increase Quantity", "ddwc-multipos"),
											onClick: function(t) {
												return e.handleIncreaseDecreaseRefundQuantity(1, n)
											}
										}, (0, t.createElement)(Ha, null)))))
									}
								})),
								g = (0, t.createElement)(n.Fragment, null, (0, t.createElement)("h2", null, (0, ft.__)("Available Items for Refund", "ddwc-multipos")), (0, t.createElement)("div", {
									className: "ddwcpos-order-products"
								}, m), (0, t.createElement)("div", null, (0, t.createElement)("span", {
									className: "ddwcpos-float-left"
								}, (0, t.createElement)("label", null, (0, t.createElement)("input", {
									type: "checkbox",
									onChange: function(t) {
										return e.handleRestockItemsInput(t)
									},
									placeholder: (0, ft.__)("Enter Reason (Optional)", "ddwc-multipos"),
									checked: this.state.restockItems
								}), " " + (0, ft.__)("Restock Items", "ddwc-multipos"))), (0, t.createElement)("span", {
									className: "ddwcpos-float-right ddwcpos-font-green"
								}, (0, ft.sprintf)((0, ft.__)("Refund Amount: %s %s", "ddwc-multipos"), (0, Ia.R)(this.state.refundAmount), "yes" == ddwcposPOSObj.tax_enabled ? ddwcposPOSObj.ddwcpos_configuration.tax_included_label : ""))), (0, t.createElement)("input", {
									type: "text",
									onKeyUp: function(t) {
										return e.handleRefundReasonInput(t)
									},
									placeholder: (0, ft.__)("Enter Reason (Optional)", "ddwc-multipos"),
									autoFocus: !0
								})),
								_ = {
									popupStyle: window.screen.width < 720 ? {} : {
										width: "50%"
									},
									handleOverlay: this.handleToggleRefundPopup,
									popupContent: g,
									notDisabled: Object.keys(this.state.refundProducts).length,
									successButtonText: (0, ft.__)("Refund", "ddwc-multipos"),
									handleSuccess: this.handleProcessRefund,
									handleSuccessArgs: [o.id],
									handleCancel: this.handleToggleRefundPopup
								};
							h = (0, t.createElement)(xs, _)
						}
						return (0, t.createElement)("div", {
							className: "ddwcpos-order-details-wrapper",
							style: window.screen.width < 720 ? {
								display: "none"
							} : {}
						}, (0, t.createElement)("div", {
							className: "ddwcpos-order-details-header"
						}, (0, t.createElement)("h2", null, (0, ft.sprintf)((0, ft.__)("Order #%s", "ddwc-multipos"), o.order_id)), (0, t.createElement)("p", null, (0, t.createElement)(na, null), o.email), window.screen.width < 720 ? (0, t.createElement)("button", {
							className: "ddwcpos-button ddwcpos-button-secondary",
							onClick: this.handleBackOrderDetailsMobile
						}, (0, ft.__)("X", "ddwc-multipos")) : null), (0, t.createElement)("div", {
							className: "ddwcpos-order-products"
						}, c), (0, t.createElement)("div", {
							className: "ddwcpos-order-totals"
						}, (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Subtotal", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(o.order_subtotal, o.order_currency_symbol))), u, (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Discount", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(f, o.order_currency_symbol))), (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Applied Coupon(s)", "ddwc-multipos")), (0, t.createElement)("strong", null, p.length ? p : (0, ft.__)("N/A", "ddwc-multipos"))), (0, Ie.applyFilters)("ddwcpos_add_details_before_total_in_order_details", "", o, this), (0, t.createElement)("div", {
							className: "ddwcpos-order-total"
						}, (0, t.createElement)("p", null, (0, ft.__)("Total", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(o.order_total, o.order_currency_symbol))), (0, t.createElement)("div", {
							className: "ddwcpos-font-green"
						}, (0, t.createElement)("p", null, (0, ft.__)("Refunded", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(o.order_refunded, o.order_currency_symbol))), d, (0, t.createElement)("div", null, (0, t.createElement)("p", null, (0, ft.__)("Change", "ddwc-multipos")), (0, t.createElement)("strong", null, (0, Ia.R)(o.change, o.order_currency_symbol))), (0, Ie.applyFilters)("ddwcpos_add_details_before_print_invoice_button_in_order_details", "", o, this), (0, t.createElement)("button", {
							className: "ddwcpos-button",
							onClick: function(t) {
								return e.handlePrintInvoice(o)
							}
						}, (0, t.createElement)(Dl, null), (0, ft.__)("Print Invoice", "ddwc-multipos")), "online" == r ? (0, t.createElement)("button", {
							className: "ddwcpos-button ddwcpos-button-green",
							onClick: function(t) {
								return e.handleOrderRefund(o)
							},
							disabled: o.order_refunded >= o.order_total
						}, (0, t.createElement)(Xl, null), (0, ft.__)("Refund", "ddwc-multipos")) : null), h)
					}
					return (0, t.createElement)("div", {
						className: "ddwcpos-order-details-wrapper",
						style: window.screen.width < 720 ? {
							display: "none"
						} : {}
					}, (0, t.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Order Details Found", "ddwc-multipos"))))
				}
			}]), o
		}(n.Component);
		const nu = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				createRefund: mc,
				updateRefundStock: gc,
				addHoldCartToCurrentCart: cs,
				deleteHoldCart: ls,
				updateDefaultCustomer: Ec,
				printInvoice: ql.Ru,
				updateDefaultTable: os,
				sendTokitchen: is
			}, e))
		}))(tu);

		function ru(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var ou = function(r) {
			lt(i, r);
			var o = ru(i);

			function i(e) {
				var t;
				return at(this, i), (t = o.call(this, e)).componentDidMount = function() {
					t.props.getDiscount(), t.props.getCoupons(), t.props.getHoldCarts(), t.props.getCart(), t.props.getOrders(t.props.outlet.id), t.props.getSettings(), "restaurant" === t.props.outlet.mode && t.getKitchenOrders()
				}, t.getKitchenOrders = function() {
					if (navigator.onLine) {
						var e = {
							outlet_id: t.props.outlet.id,
							action: "get"
						};
						fetch(ddwcposPOSObj.API.MANAGE_KITCHEN_ORDERS_ENDPOINT, {
							method: "POST",
							headers: new Headers({
								"Content-Type": "application/json",
								Accept: "application/json"
							}),
							body: JSON.stringify(e)
						}).then((function(e) {
							return e.json()
						})).then((function(e) {
							t.setState({
								kitchenOrders: e,
								kitchenOrdersFetched: !0
							})
						})).catch((function(e) {
							console.error(e)
						}))
					}
				}, t.UNSAFE_componentWillReceiveProps = function(e) {
					e.match.params.type != t.props.match.params.type && t.setState({
						order: null
					})
				}, t.handleOrderSearch = function(e) {
					t.setState({
						search: e.target.value
					}), t.props.loadSearchedOrders(e.target.value, t.props.orders.list)
				}, t.handleChangeOrderDetails = function(e) {
					t.setState({
						order: e
					}), window.screen.width < 720 && (document.querySelector(".ddwcpos-order-details-wrapper").style.position = "fixed", document.querySelector(".ddwcpos-order-details-wrapper").style.display = "block")
				}, t.syncAllOfflineOrders = function(e) {
					t.props.syncOfflineOrders(e).then((function(e) {
						t.props.getOrders(t.props.outlet.id), ht.store.addNotification({
							title: (0, ft.__)("Order Synced", "ddwc-multipos"),
							message: (0, ft.__)("Order are synced successfully.", "ddwc-multipos"),
							type: "success",
							insert: "top",
							container: "top-right",
							dismiss: {
								duration: 3e3,
								pauseOnHover: !0
							}
						})
					}))
				}, t.handleHoldOrderSearch = function(e, n) {
					t.setState({
						search: e.target.value
					})
				}, t.state = {
					search: "",
					order: null,
					kitchenOrders: [],
					kitchenOrdersFetched: !1
				}, t
			}
			return ct(i, [{
				key: "render",
				value: function() {
					var r = this,
						o = this.props.match.params.type,
						i = (0, Ie.applyFilters)("ddwcpos_modify_order_list_row_height", window.screen.width < 720 ? 92 : 80);
					if ("hold" == o && this.props.holdCarts.length) {
						var a = this.props.holdCarts,
							s = this.state.search.toLowerCase();
						s && (a = a.filter((function(e) {
							return e.list[0].customer.first_name.includes(s) || e.list[0].customer.last_name.includes(s) || e.list[0].customer.email.includes(s) || e.list[0].customer.phone.includes(s) || e.list[0].table.name && e.list[0].table.name.toLowerCase().includes(s)
						}))), a.sort((function(e, t) {
							return e.list[0].id < t.list[0].id ? 1 : t.list[0].id < e.list[0].id ? -1 : 0
						}));
						return (0, t.createElement)("div", {
							className: "ddwcpos-orders-tab-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-list-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-tab-changer"
						}, (0, t.createElement)(bt, {
							className: "online" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/online")
						}, (0, ft.__)("Online", "ddwc-multipos")), (0, t.createElement)(bt, {
							className: "offline" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
						}, (0, ft.__)("Offline", "ddwc-multipos")), (0, t.createElement)(bt, {
							className: "hold" == o ? "ddwcpos-active" : "",
							to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
						}, (0, ft.__)("Hold", "ddwc-multipos"))), (0, t.createElement)("div", {
							className: "ddwcpos-search-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-search-input-wrapper"
						}, (0, t.createElement)("div", {
							className: "ddwcpos-search-input"
						}, (0, t.createElement)("input", {
							type: "text",
							className: "ddwcpos-form-control",
							defaultValue: this.state.search,
							placeholder: "restaurant" == this.props.outlet.mode ? (0, ft.__)("Search By Customer or Table...", "ddwc-multipos") : (0, ft.__)("Search By Customer...", "ddwc-multipos"),
							onChange: function(e) {
								return r.handleHoldOrderSearch(e, a)
							},
							autoComplete: "off"
						}), (0, t.createElement)(Rs, null)), (0, t.createElement)("span", null, a.length + " " + (0, ft.__)("Results", "ddwc-multipos")))), a.length ? (0, t.createElement)(Js, {
							className: "ddwcpos-list",
							height: 800,
							itemCount: a.length,
							itemSize: i
						}, (function(e) {
							var o = e.index,
								i = e.style,
								s = (0, ft.sprintf)((0, ft.__)("Cart #%s", "ddwc-multipos"), a.length - o),
								c = a[o].list.length ? a[o].list[0].cart.reduce((function(e, t) {
									return e + t.quantity
								}), 0) : 0,
								l = "ddwcpos-list-details";
							(!r.state.order && 0 == o || r.state.order && r.state.order.list[0].id == a[o].list[0].id) && (l += " ddwcpos-list-details-active");
							var u = "";
							if (a[o].list[0].kitchen_status) {
								u = (0, ft.__)("Preparing", "ddwc-multipos");
								var d = "preparing";
								if (r.state.kitchenOrdersFetched) {
									var p = r.state.kitchenOrders.filter((function(e) {
										return e.id == a[o].list[0].id
									}));
									p && p.length ? u = (0, ft.__)("Preparing", "ddwc-multipos") : (u = (0, ft.__)("Ready", "ddwc-multipos"), d = "ready")
								}
								u = (0, ft.sprintf)('<mark class="ddwcpos-food-status %s"><span>%s</span></mark>', "ddwcpos-food-status-" + d, u)
							}
							return (0, t.createElement)("div", {
								className: "ddwcpos-list-row",
								style: i
							}, (0, t.createElement)("div", {
								className: l,
								onClick: function(e) {
									return r.handleChangeOrderDetails(a[o])
								}
							}, (0, t.createElement)(Vl, null), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, s), (0, t.createElement)("p", null, (0, t.createElement)(Gl, null), a[o].list[0].date), (0, t.createElement)("p", null, (0, t.createElement)(na, null), a[o].list[0].customer.email, a[o].list[0].table.name ? (0, t.createElement)(n.Fragment, null, (0, t.createElement)("span", {
								className: "ddwcpos-table-icon",
								role: "img"
							}, (0, t.createElement)("svg", {
								version: "1.1",
								id: "Capa_1",
								xmlns: "http://www.w3.org/2000/svg",
								x: "0px",
								y: "0px",
								viewBox: "0 0 214.539 214.539"
							}, (0, t.createElement)("g", null, (0, t.createElement)("g", null, (0, t.createElement)("path", {
								d: "M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"
							}), (0, t.createElement)("path", {
								d: "M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"
							}), (0, t.createElement)("path", {
								d: "M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"
							}))))), a[o].list[0].table.name) : null)), (0, t.createElement)("div", {
								dangerouslySetInnerHTML: {
									__html: u
								}
							}), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, Ia.R)(a[o].total.cart_total)), (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("%d Item(s)", "ddwc-multipos"), c)))))
						})) : (0, t.createElement)("div", {
							className: "ddwcpos-no-results"
						}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Orders Found", "ddwc-multipos")))), (0, t.createElement)(nu, e({
							order: this.state.order ? this.state.order : a.length ? a[0] : null,
							handleChangeOrderDetails: this.handleChangeOrderDetails,
							orderType: o
						}, this.props)))
					}
					var c = this.props.orders.sorder.filter((function(e) {
						return e.order_type == o
					}));
					c.sort((function(e, t) {
						return new Date(t.order_created) - new Date(e.order_created)
					}));
					return (0, t.createElement)("div", {
						className: "ddwcpos-orders-tab-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-list-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-tab-changer"
					}, (0, t.createElement)(bt, {
						className: "online" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/online")
					}, (0, ft.__)("Online", "ddwc-multipos")), (0, t.createElement)(bt, {
						className: "offline" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/offline")
					}, (0, ft.__)("Offline", "ddwc-multipos")), (0, t.createElement)(bt, {
						className: "hold" == o ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/orders/hold")
					}, (0, ft.__)("Hold", "ddwc-multipos"))), (0, t.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input-wrapper",
						style: "offline" == o ? {
							gridTemplateColumns: "60% max-content auto"
						} : null
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, t.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						defaultValue: this.state.search,
						placeholder: (0, ft.__)("Search Order...", "ddwc-multipos"),
						onChange: function(e) {
							return r.handleOrderSearch(e)
						},
						autoComplete: "off"
					}), (0, t.createElement)(Rs, null)), "offline" == o && c.length ? (0, t.createElement)("div", {
						className: "ddwcpos-icon-card",
						onClick: function(e) {
							return r.syncAllOfflineOrders(c)
						},
						title: (0, ft.__)("Sync All Orders", "ddwc-multipos")
					}, (0, t.createElement)(Yi, null), (0, ft.__)("Sync All Orders", "ddwc-multipos")) : null, (0, t.createElement)("span", null, c.length + " " + (0, ft.__)("Results", "ddwc-multipos")))), c.length ? (0, t.createElement)(Js, {
						className: "ddwcpos-list",
						height: 800,
						itemCount: c.length,
						itemSize: i
					}, (function(e) {
						var n = e.index,
							o = e.style,
							i = (0, ft.sprintf)((0, ft.__)("Order #%s", "ddwc-multipos"), c[n].order_id),
							a = c[n].products.reduce((function(e, t) {
								return e + t.quantity
							}), 0),
							s = "ddwcpos-list-details";
						return (!r.state.order && 0 == n || r.state.order && r.state.order.order_id == c[n].order_id) && (s += " ddwcpos-list-details-active"), (0, t.createElement)("div", {
							className: "ddwcpos-list-row",
							style: o
						}, (0, t.createElement)("div", {
							className: s,
							onClick: function(e) {
								return r.handleChangeOrderDetails(c[n])
							}
						}, (0, t.createElement)(Vl, null), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, i), (0, t.createElement)("p", null, (0, t.createElement)(Gl, null), c[n].order_date), (0, t.createElement)("p", null, (0, t.createElement)(na, null), c[n].email)), (0, Ie.applyFilters)("ddwcpos_add_details_before_order_total_in_row", "", c[n], r), (0, t.createElement)("div", null, (0, t.createElement)("h3", null, (0, Ia.R)(c[n].order_total, c[n].order_currency_symbol)), (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("%d Item(s)", "ddwc-multipos"), a)))))
					})) : (0, t.createElement)("div", {
						className: "ddwcpos-no-results"
					}, (0, t.createElement)(Is, null), (0, t.createElement)("p", null, (0, ft.__)("No Orders Found", "ddwc-multipos")))), (0, t.createElement)(nu, e({
						order: this.state.order ? this.state.order : c.length ? c[0] : null,
						handleChangeOrderDetails: this.handleChangeOrderDetails,
						orderType: o
					}, this.props)))
				}
			}]), i
		}(n.Component);
		const iu = q((function(e) {
			return {
				orders: e.orders,
				cart: e.cart,
				holdCarts: e.holdCarts
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getOrders: ac,
				loadSearchedOrders: hc,
				syncOfflineOrders: fc,
				getHoldCarts: as,
				getDiscount: ds,
				getCoupons: ca,
				getCart: _a,
				getSettings: Li
			}, e))
		}))(ou);

		function au(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var su = function(e) {
			lt(r, e);
			var n = au(r);

			function r(e) {
				var t;
				return at(this, r), (t = n.call(this, e)).handleInput = function(e, n) {
					var r = Tt({}, n, e.target.value);
					"country" == n && (r.state = ""), t.setState(r)
				}, t.handleFormSubmit = function(e) {
					e.preventDefault(), navigator.onLine ? t.state.current_password ? t.state.new_password && t.state.confirm_password && t.state.new_password == t.state.confirm_password ? t.props.saveCashier(t.state, f(t)) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Password fields are invalid.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					}) : t.props.saveCashier(t.state, f(t)) : ht.store.addNotification({
						title: (0, ft.__)("Error", "ddwc-multipos"),
						message: (0, ft.__)("Sorry, account details cannot be updated in offline mode.", "ddwc-multipos"),
						type: "danger",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 3e3,
							pauseOnHover: !0
						}
					})
				}, t.state = {
					id: ddwcposPOSObj.user.ID,
					first_name: ddwcposPOSObj.user.first_name,
					last_name: ddwcposPOSObj.user.last_name,
					email: ddwcposPOSObj.user.user_email,
					current_password: "",
					new_password: "",
					confirm_password: ""
				}, t
			}
			return ct(r, [{
				key: "render",
				value: function() {
					var e = this;
					return (0, t.createElement)("div", {
						className: "ddwcpos-account-settings-wrapper"
					}, (0, t.createElement)("h2", null, (0, ft.__)("Account Settings", "ddwc-multipos")), (0, t.createElement)("form", {
						onSubmit: this.handleFormSubmit
					}, (0, t.createElement)("div", {
						className: "ddwcpos-form-group-column-2"
					}, (0, t.createElement)("label", null, (0, ft.__)("First Name", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "text",
						value: this.state.first_name,
						onChange: function(t) {
							return e.handleInput(t, "first_name")
						},
						placeholder: (0, ft.__)("Enter First Name", "ddwc-multipos")
					})), (0, t.createElement)("label", null, (0, ft.__)("Last Name", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "text",
						value: this.state.last_name,
						onChange: function(t) {
							return e.handleInput(t, "last_name")
						},
						placeholder: (0, ft.__)("Enter Last Name", "ddwc-multipos")
					}))), (0, t.createElement)("label", null, (0, ft.__)("Email", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "email",
						value: this.state.email,
						onChange: function(t) {
							return e.handleInput(t, "email")
						},
						placeholder: (0, ft.__)("Enter Email", "ddwc-multipos"),
						disabled: !0
					})), (0, t.createElement)("label", null, (0, ft.__)("Current Password", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "password",
						value: this.state.current_password,
						onChange: function(t) {
							return e.handleInput(t, "current_password")
						},
						placeholder: (0, ft.__)("Enter Current Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, t.createElement)("label", null, (0, ft.__)("New Password", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "password",
						value: this.state.new_password,
						onChange: function(t) {
							return e.handleInput(t, "new_password")
						},
						placeholder: (0, ft.__)("Enter New Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, t.createElement)("label", null, (0, ft.__)("Confirm Password", "ddwc-multipos"), (0, t.createElement)("input", {
						type: "password",
						value: this.state.confirm_password,
						onChange: function(t) {
							return e.handleInput(t, "confirm_password")
						},
						placeholder: (0, ft.__)("Enter Confirm Password", "ddwc-multipos"),
						autoComplete: "off"
					})), (0, t.createElement)("button", {
						type: "submit",
						className: "ddwcpos-button"
					}, (0, t.createElement)(Sl, null), (0, ft.__)("Save", "ddwc-multipos"))))
				}
			}]), r
		}(n.Component);
		const cu = q(null, (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				saveCashier: Mi
			}, e))
		}))(su);

		function lu(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		const uu = function(e) {
			lt(r, e);
			var n = lu(r);

			function r(e) {
				return at(this, r), n.call(this, e)
			}
			return ct(r, [{
				key: "render",
				value: function() {
					return (0, t.createElement)("div", {
						className: "ddwcpos-settings-tab-wrapper"
					}, (0, t.createElement)(Hi, this.props), (0, t.createElement)(cu, null))
				}
			}]), r
		}(n.Component);

		function du(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = pt(e);
				if (t) {
					var o = pt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return dt(this, n)
			}
		}
		var pu = function(n) {
			lt(o, n);
			var r = du(o);

			function o(e) {
				var n;
				return at(this, o), (n = r.call(this, e)).componentDidMount = function() {
					n.props.getTables(), n.props.getCart(), n.props.getHoldCarts()
				}, n.handleToggleTableOrderPopup = function() {
					n.setState({
						showTableOrderPopup: !n.state.showTableOrderPopup,
						order: null
					})
				}, n.handleTableSearch = function(e) {
					n.setState({
						search: e.target.value
					})
				}, n.handleSetTable = function(e) {
					n.props.updateDefaultTable(e)
				}, n.handleViewOrder = function(e) {
					n.setState({
						order: e,
						showTableOrderPopup: !n.state.showTableOrderPopup
					})
				}, n.handleGetTable = function(e) {
					var r = n.props.tables.defaultTable,
						o = e.tableType ? e.tableType : "vacant",
						i = n.props.holdCarts.filter((function(t) {
							return t.list[0].table.name && t.list[0].table.slug == e.slug
						}));
					return (0, t.createElement)("div", {
						className: "ddwcpos-table-card-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-table-card"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-table-block ddwcpos-".concat(o)
					}, (0, t.createElement)("div", null, (0, t.createElement)("h3", null, e.name), (0, t.createElement)("p", null, (0, ft.sprintf)((0, ft.__)("Seats: %s", "ddwc-multipos"), e.seats))), (0, t.createElement)("span", null), (0, t.createElement)("span", null), (0, t.createElement)("span", null), (0, t.createElement)("span", null))), r && r.slug == e.slug ? (0, t.createElement)("span", {
						className: "ddwcpos-icon-card",
						title: (0, ft.__)("Current Table", "ddwc-multipos")
					}, (0, t.createElement)(Uc, null), (0, ft.__)("Current Table", "ddwc-multipos")) : "vacant" == o ? (0, t.createElement)("span", {
						className: "ddwcpos-icon-card",
						onClick: function(t) {
							return n.handleSetTable(e.slug)
						},
						title: (0, ft.__)("Set Table", "ddwc-multipos")
					}, (0, t.createElement)(Uc, null), (0, ft.__)("Set Table", "ddwc-multipos")) : null, "occupied" == o && i.length ? (0, t.createElement)("span", {
						className: "ddwcpos-icon-card",
						onClick: function(e) {
							return n.handleViewOrder(i[0])
						},
						title: (0, ft.__)("View Order", "ddwc-multipos")
					}, (0, t.createElement)(Nn, null), (0, ft.__)("View Order", "ddwc-multipos")) : null)
				}, n.state = {
					search: "",
					order: null,
					showTableOrderPopup: !1
				}, n
			}
			return ct(o, [{
				key: "render",
				value: function() {
					var n = this,
						r = this.props.match.params.type,
						o = this.state.search,
						i = this.props.tables.list.filter((function(e) {
							var t = e.tableType ? e.tableType : "vacant";
							if ("all" == r || t == r) return !o || o && parseInt(e.seats) >= parseInt(o)
						})).map((function(e) {
							return n.handleGetTable(e)
						})),
						a = "";
					if (this.state.showTableOrderPopup) {
						var s = (0, t.createElement)(nu, e({
								order: this.state.order
							}, this.props, {
								orderType: "hold",
								tableView: !0,
								handleToggleTableOrderPopup: this.handleToggleTableOrderPopup
							})),
							c = {
								popupStyle: window.screen.width < 720 ? {} : {
									width: "50%"
								},
								handleOverlay: this.handleToggleTableOrderPopup,
								popupContent: s,
								hideSuccessButton: !0,
								hideCancelButton: !0,
								handleCancel: this.handleToggleTableOrderPopup
							};
						a = (0, t.createElement)(xs, c)
					}
					return (0, t.createElement)("div", {
						className: "ddwcpos-tables-tab-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-tab-changer"
					}, (0, t.createElement)(bt, {
						className: "all" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/all")
					}, (0, ft.__)("All", "ddwc-multipos")), (0, t.createElement)(bt, {
						className: "occupied" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/occupied")
					}, (0, ft.__)("Occupied", "ddwc-multipos")), (0, t.createElement)(bt, {
						className: "vacant" == r ? "ddwcpos-active" : "",
						to: "".concat(ddwcposPOSObj.siteUrl, "/").concat(ddwcposPOSObj.ddwcpos_configuration.endpoint, "/tables/vacant")
					}, (0, ft.__)("Vacant", "ddwc-multipos"))), (0, t.createElement)("div", {
						className: "ddwcpos-search-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input-wrapper"
					}, (0, t.createElement)("div", {
						className: "ddwcpos-search-input"
					}, (0, t.createElement)("input", {
						type: "text",
						className: "ddwcpos-form-control",
						defaultValue: this.state.search,
						placeholder: (0, ft.__)("Search By Number of Seats...", "ddwc-multipos"),
						onChange: function(e) {
							return n.handleTableSearch(e)
						},
						autoComplete: "off"
					}), (0, t.createElement)(Rs, null)), (0, t.createElement)("span", null, i.length + " " + (0, ft.__)("Results", "ddwc-multipos")))), (0, t.createElement)("div", {
						className: "ddwcpos-table-wrapper"
					}, i), a)
				}
			}]), o
		}(n.Component);
		const fu = q((function(e) {
			return {
				tables: e.tables,
				cart: e.cart,
				holdCarts: e.holdCarts
			}
		}), (function(e) {
			return Object.assign({
				dispatch: e
			}, (0, S.DE)({
				getTables: rs,
				updateDefaultTable: os,
				getHoldCarts: as,
				getCart: _a
			}, e))
		}))(pu);
		var hu = "ddwcpos_modify_pages_list",
			mu = ddwcposPOSObj.ddwcpos_configuration.endpoint;

		function gu() {
			return (0, Ie.applyFilters)(hu, [{
				name: "Home",
				path: "/".concat(mu),
				component: pl
			}, {
				name: "Category",
				path: "/".concat(mu, "/category/:cid"),
				component: pl
			}, {
				name: "Cart",
				path: "/".concat(mu, "/cart"),
				component: Pc
			}, {
				name: "Customers",
				path: "/".concat(mu, "/customers"),
				component: Nl
			}, {
				name: "Tables",
				path: "/".concat(mu, "/tables/:type"),
				component: fu
			}, {
				name: "Statistics",
				path: "/".concat(mu, "/statistics"),
				component: ec
			}, {
				name: "Orders",
				path: "/".concat(mu, "/orders/:type"),
				component: iu
			}, {
				name: "Settings",
				path: "/".concat(mu, "/settings"),
				component: uu
			}, {
				name: "Pay",
				path: "/".concat(mu, "/pay"),
				component: Hl
			}])
		}
		document.addEventListener("DOMContentLoaded", (function() {
			i().render((0, t.createElement)(p, {
				store: it
			}, (0, t.createElement)(Se, {
				history: ue()
			}, (0, t.createElement)(Le, null, gu().map((function(n) {
				return (0, t.createElement)(Te, {
					key: ddwcposPOSObj.siteUrl + n.path,
					path: ddwcposPOSObj.siteUrl + n.path,
					exact: !0,
					name: n.name,
					render: function(r) {
						return (0, t.createElement)(Rc, e({
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