/* App.html generated by Svelte v2.16.1 */
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
	typeof define === "function" && define.amd ? define(factory) :
	(global.App = factory());
}(this, (function () { "use strict";

	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-i7qo5m-style';
		style.textContent = "h1.svelte-i7qo5m{color:purple}";
		append(document.head, style);
	}

	function create_main_fragment(component, ctx) {
		var h1, text0, text1, text2, h2, text3;

		return {
			c() {
				h1 = createElement("h1");
				text0 = createText(ctx.title);
				text1 = createText("!");
				text2 = createText("\n");
				h2 = createElement("h2");
				text3 = createText(ctx.$ticker);
				h1.className = "svelte-i7qo5m";
			},

			m(target, anchor) {
				insert(target, h1, anchor);
				append(h1, text0);
				append(h1, text1);
				insert(target, text2, anchor);
				insert(target, h2, anchor);
				append(h2, text3);
			},

			p(changed, ctx) {
				if (changed.title) {
					setData(text0, ctx.title);
				}

				if (changed.$ticker) {
					setData(text3, ctx.$ticker);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(h1);
					detachNode(text2);
					detachNode(h2);
				}
			}
		};
	}

	function App(options) {
		init(this, options);
		this._state = assign(this.store._init(["ticker"]), options.data);
		this.store._add(this, ["ticker"]);
		this._intro = true;

		this._handlers.destroy = [removeFromStore];

		if (!document.getElementById("svelte-i7qo5m-style")) add_css();

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(App.prototype, {
	 	destroy: destroy,
	 	get: get,
	 	fire: fire,
	 	on: on,
	 	set: set,
	 	_set: _set,
	 	_stage: _stage,
	 	_mount: _mount,
	 	_differs: _differs
	 });

	App.prototype._recompute = noop;

	function createElement(name) {
		return document.createElement(name);
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function setData(text, data) {
		text.data = '' + data;
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._slots = blankObject();
		component._bind = options._bind;
		component._staged = {};

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;

		if (!options.root) {
			component._beforecreate = [];
			component._oncreate = [];
			component._aftercreate = [];
		}
	}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function removeFromStore() {
		this.store._remove(this);
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function get() {
		return this._state;
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				try {
					handler.__calling = true;
					handler.call(this, data);
				} finally {
					handler.__calling = false;
				}
			}
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		flush(this.root);
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		newState = assign(this._staged, newState);
		this._staged = {};

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _stage(newState) {
		assign(this._staged, newState);
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function noop() {}

	function blankObject() {
		return Object.create(null);
	}

	function flush(component) {
		component._lock = true;
		callAll(component._beforecreate);
		callAll(component._oncreate);
		callAll(component._aftercreate);
		component._lock = false;
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}

	return App;

})));